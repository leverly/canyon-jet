import * as THREE from 'three';
import { blockNoise, fbm, hash, lerp } from '../core/math';
import { Course, DS } from '../game/course';
import { PAL } from './env';

export interface Anchor { x: number; y: number; z: number; s: number; side: number; kind: 'shore' | 'ledge' | 'lip' | 'top'; nx: number; nz: number; drop: number; fx: number; fz: number; tier: number }

export interface Terrain { group: THREE.Group; anchors: Anchor[]; material: THREE.Material }

const ROW = 2; // every ROW-th centreline sample => 4 m rows
const TERRACES = 4;
const PLATEAU = 46; // absolute plateau height

export function topHeight(s: number, side: number) {
  return PLATEAU + 9 * (fbm(s * 0.004 + side * 13.7, side * 3.1, 3, 5) - 0.5) + 5 * (blockNoise(s, 90, 40 + side) - 0.5);
}

/** Cross-section of one canyon wall: [outward distance from the bank, height]. */
function profile(c: Course, i: number, side: number) {
  const s = i * DS;
  const wy = c.wy[i];
  const seed = side > 0 ? 100 : 200;
  const pts: [number, number, number][] = []; // out, y, kind (0 bed,1 shore,2 riser,3 ledge,4 top)
  const shore = 2.5 + 7.5 * fbm(s * 0.013, seed, 3, seed);
  const bump = fbm(s * 0.05, seed + 5, 2, seed + 1);
  pts.push([-5, wy - 3.2, 0]);
  pts.push([-0.6, wy - 0.35, 0]);
  pts.push([shore * 0.55, wy + 0.3 + bump * 0.4, 1]);
  pts.push([shore, wy + 0.8 + bump * 1.1, 1]);
  const top = topHeight(s, side);
  const total = top - (wy + 1.6);
  // terrace proportions vary in blocks of different length so seams do not line up
  const cells = [17, 27, 38, 23];
  const w: number[] = [];
  let wsum = 0;
  for (let k = 0; k < TERRACES; k++) {
    const v = 0.45 + blockNoise(s + k * 131, cells[k], seed + k * 7);
    w.push(v);
    wsum += v;
  }
  let out = shore;
  let y = wy + 0.8 + bump * 1.1;
  for (let k = 0; k < TERRACES; k++) {
    const h = (total * w[k]) / wsum;
    const lean = (blockNoise(s + 55 + k * 77, cells[(k + 1) % TERRACES] * 0.8, seed + 31 + k) - 0.42) * (k === 0 ? 2.2 : 3.4);
    const mid = (blockNoise(s + k * 19, 11, seed + 60 + k) - 0.5) * 1.4;
    pts.push([out + lean * 0.45 + mid, y + h * 0.5, 2]);
    out += lean;
    y += h - 0.5;
    pts.push([out, y, 2]);
    const ledge = k === TERRACES - 1 ? 0 : 2.0 + 7.5 * blockNoise(s + k * 211, cells[(k + 2) % TERRACES], seed + 90 + k);
    out += ledge + 0.4;
    y += 0.5;
    pts.push([out, y, k === TERRACES - 1 ? 4 : 3]);
  }
  // on the inside of a bend the far plateau must not fold over itself
  const curv = c.curv[i] * side;
  const room = curv > 1e-4 ? Math.max(out + 6, 1 / curv - c.hw[i] - 6) : Infinity;
  pts.push([Math.min(out + 34, room - 3), top + 1.5 * (fbm(s * 0.02, seed + 9, 2, 3) - 0.5), 4]);
  pts.push([Math.min(out + 130, room), top - 8 + 12 * (fbm(s * 0.006, seed + 17, 2, 9) - 0.5), 4]);
  return pts;
}

export function createTerrain(c: Course, noiseTex: THREE.Texture): Terrain {
  const group = new THREE.Group();
  const anchors: Anchor[] = [];
  const material = new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: true, vertexColors: true });
  material.onBeforeCompile = (sh) => {
    sh.uniforms.tNoise = { value: noiseTex };
    sh.uniforms.cRock = { value: new THREE.Color(PAL.rock) };
    sh.uniforms.cRockDark = { value: new THREE.Color(PAL.rockDark) };
    sh.uniforms.cRockLit = { value: new THREE.Color(PAL.rockLit) };
    sh.uniforms.cGrass = { value: new THREE.Color(PAL.grass) };
    sh.uniforms.cGrassDark = { value: new THREE.Color(PAL.grassDark) };
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvWPos = (modelMatrix * vec4(position, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec3 vWPos;
        uniform sampler2D tNoise; uniform vec3 cRock; uniform vec3 cRockDark; uniform vec3 cRockLit; uniform vec3 cGrass; uniform vec3 cGrassDark;`)
      .replace('#include <color_fragment>', `
        vec3 wn = normalize(cross(dFdx(vWPos), dFdy(vWPos)));
        vec4 wn4 = texture2D(tNoise, vWPos.xz * 0.011);
        float warp = wn4.r;
        float yy = vWPos.y + warp * 3.0;
        float band = texture2D(tNoise, vec2(yy * 0.031, 0.21 + warp * 0.05)).g;
        float fine = texture2D(tNoise, vec2(yy * 0.17, vWPos.x * 0.004 + vWPos.z * 0.004)).b;
        vec3 rock = mix(cRockDark, cRock, smoothstep(0.30, 0.62, band));
        rock = mix(rock, cRockLit, smoothstep(0.60, 0.85, band) * 0.55);
        rock *= 0.90 + 0.22 * fine;
        float bed = yy * 0.12 + band * 1.7;
        float crack = smoothstep(0.06, 0.01, abs(fract(bed) - 0.5));
        float layer = floor(bed + 0.5);
        float lr = fract(sin(layer * 12.9898) * 43758.5453);
        // vertical joints, offset per bed, measured along each flat facet
        vec2 al = normalize(vec2(-wn.z, wn.x) + 1e-4);
        float run = dot(vWPos.xz, al) * (0.055 + 0.03 * lr) + lr * 7.0;
        float steep = 1.0 - smoothstep(0.35, 0.7, wn.y);
        float joint = smoothstep(0.05, 0.01, abs(fract(run) - 0.5)) * steep;
        float blk = fract(sin((floor(run + 0.5) + layer * 17.0) * 78.233) * 43758.5453);
        rock *= 0.80 + 0.36 * blk * steep + 0.2 * (1.0 - steep);
        rock *= 1.0 - 0.5 * max(crack, joint);
        float up = smoothstep(0.45, 0.85, wn.y);
        rock = mix(rock, cRockLit * 1.02, up * 0.75);
        float g = vColor.r * smoothstep(0.35, 0.8, wn.y + (fine - 0.5) * 0.5);
        vec3 grass = mix(cGrassDark, cGrass, wn4.a * 0.6 + fine * 0.4);
        rock = mix(rock, grass, g);
        rock *= mix(1.0, 0.55, vColor.g);
        rock *= 0.92 + 0.16 * vColor.b;
        diffuseColor.rgb *= rock;
      `);
  };

  const rowsTotal = Math.floor((c.n - 1) / ROW) + 1;
  const CHUNK = 36;
  for (const side of [-1, 1]) {
    for (let r0 = 0; r0 < rowsTotal - 1; r0 += CHUNK) {
      const r1 = Math.min(rowsTotal - 1, r0 + CHUNK);
      const pos: number[] = [];
      const col: number[] = [];
      const idx: number[] = [];
      let cols = 0;
      for (let r = r0; r <= r1; r++) {
        const i = Math.min(c.n - 1, r * ROW);
        const s = i * DS;
        const prof = profile(c, i, side);
        cols = prof.length;
        const nx = -c.tz[i] * side;
        const nz = c.tx[i] * side;
        const bx = c.px[i] + nx * c.hw[i];
        const bz = c.pz[i] + nz * c.hw[i];
        for (let k = 0; k < prof.length; k++) {
          const [out, y, kind] = prof[k];
          const x = bx + nx * out;
          const z = bz + nz * out;
          pos.push(x, y, z);
          const grass = kind === 4 ? 1 : kind === 3 ? 0.35 * hash(i, k, 3) : 0;
          const wet = kind <= 1 ? (kind === 0 ? 1 : 0.5) : 0;
          col.push(grass, wet, hash(Math.floor(s / 14), k, side + 5));
          // decoration anchors
          const base = { x, y, z, s, side, nx, nz, drop: 0, fx: x, fz: z, tier: 0 };
          if (k === 3) anchors.push({ ...base, kind: 'shore', x: bx + nx * out * 0.7, z: bz + nz * out * 0.7, y: y - 0.25 });
          if (kind === 3) {
            const w = out - prof[k - 1][0];
            if (w > 1.6) anchors.push({ ...base, kind: 'ledge', x: bx + nx * (out - w * 0.45), z: bz + nz * (out - w * 0.45) });
          }
          if (kind === 2 && k >= 5 && (k - 5) % 3 === 0) anchors.push({ ...base, kind: 'lip', drop: y - prof[k - 2][1], fx: bx + nx * prof[k - 2][0], fz: bz + nz * prof[k - 2][0], tier: (k - 5) / 3 });
          if (k === prof.length - 3) anchors.push({ ...base, kind: 'top', x: x + nx * 3, z: z + nz * 3 });
          if (k === prof.length - 2) anchors.push({ ...base, kind: 'top', x: x - nx * 16, z: z - nz * 16 });
        }
      }
      const rows = r1 - r0 + 1;
      for (let r = 0; r < rows - 1; r++) {
        for (let k = 0; k < cols - 1; k++) {
          const a = r * cols + k;
          const b = a + 1;
          const d = a + cols;
          const e = d + 1;
          if (side > 0) idx.push(a, b, d, b, e, d);
          else idx.push(a, d, b, b, d, e);
        }
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
      geo.setIndex(idx);
      geo.computeVertexNormals();
      geo.computeBoundingSphere();
      const mesh = new THREE.Mesh(geo, material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
    }
  }

  // Caps closing the wall cross-sections where the canyon opens onto the lagoon.
  {
    const i = c.n - 1;
    const pos: number[] = [];
    const col: number[] = [];
    for (const side of [-1, 1]) {
      const prof = profile(c, i, side);
      const nx = -c.tz[i] * side;
      const nz = c.tx[i] * side;
      const bx = c.px[i] + nx * c.hw[i];
      const bz = c.pz[i] + nz * c.hw[i];
      const P = (o: number, y: number) => [bx + nx * o, y, bz + nz * o];
      const far = prof[prof.length - 1][0];
      const hub = P(far, c.wy[i] - 3.2);
      for (let k = 0; k < prof.length - 1; k++) {
        const a = P(prof[k][0], prof[k][1]);
        const b = P(prof[k + 1][0], prof[k + 1][1]);
        const tri = side > 0 ? [hub, b, a] : [hub, a, b];
        for (const p of tri) { pos.push(p[0], p[1], p[2]); col.push(0, 0, 0.5); }
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    geo.computeVertexNormals();
    const cap = new THREE.Mesh(geo, material);
    cap.material = material;
    group.add(cap);
  }

  // Headwall closing the canyon behind the start, with the source waterfall.
  {
    const i = 0;
    const tx = c.tx[i], tz = c.tz[i];
    const nx = -tz, nz = tx;
    const pos: number[] = [];
    const col: number[] = [];
    const idx: number[] = [];
    const W = c.hw[0] + 70;
    const colsN = 28;
    const rowsN = 7;
    for (let r = 0; r <= rowsN; r++) {
      for (let k = 0; k <= colsN; k++) {
        const u = (k / colsN) * 2 - 1;
        const v = r / rowsN;
        const y = lerp(c.wy[0] - 3, PLATEAU + 4, v);
        const back = 6 + 9 * blockNoise(u * W + r * 37, 16, 900 + r) + v * 5 - 10 * Math.exp(-u * u * 18) * (1 - v * 0.4);
        pos.push(c.px[0] + nx * u * W - tx * back, y, c.pz[0] + nz * u * W - tz * back);
        col.push(r === rowsN ? 1 : 0, r === 0 ? 1 : 0, hash(k, r, 4));
      }
    }
    for (let r = 0; r < rowsN; r++) for (let k = 0; k < colsN; k++) {
      const a = r * (colsN + 1) + k;
      idx.push(a, a + colsN + 1, a + 1, a + 1, a + colsN + 1, a + colsN + 2);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    const mesh = new THREE.Mesh(geo, material);
    mesh.receiveShadow = true;
    group.add(mesh);
  }

  // Distant mesas beyond the lagoon so the finish opens onto a horizon.
  {
    const end = c.n - 1;
    const pos: number[] = [];
    const col: number[] = [];
    const push = (cx: number, cz: number, rx: number, rz: number, h: number, rot: number) => {
      const steps = 9;
      const ring = (scale: number, y: number) => {
        const out: number[][] = [];
        for (let k = 0; k < steps; k++) {
          const a = (k / steps) * Math.PI * 2 + rot;
          const j = 0.82 + 0.3 * hash(k, Math.round(cx), 7);
          out.push([cx + Math.cos(a) * rx * scale * j, y, cz + Math.sin(a) * rz * scale * j]);
        }
        return out;
      };
      const base = ring(1, c.wy[end] - 2);
      const mid = ring(0.9, c.wy[end] + h * 0.55);
      const top = ring(0.82, c.wy[end] + h);
      const quad = (a: number[], b: number[], cc: number[], d: number[], g: number) => {
        for (const p of [a, b, cc, a, cc, d]) { pos.push(p[0], p[1], p[2]); col.push(g, 0, 0.5); }
      };
      for (let k = 0; k < steps; k++) {
        const n = (k + 1) % steps;
        quad(base[k], mid[k], mid[n], base[n], 0);
        quad(mid[k], top[k], top[n], mid[n], 0);
        const cen = [cx, c.wy[end] + h + 2, cz];
        for (const p of [top[k], cen, top[n]]) { pos.push(p[0], p[1], p[2]); col.push(1, 0, 0.5); }
      }
    };
    const fx = c.tx[end], fz = c.tz[end];
    const rx = -fz, rz = fx;
    const ex = c.px[end], ez = c.pz[end];
    const spots: [number, number, number, number, number][] = [
      [520, -420, 220, 120, 62], [760, 260, 260, 150, 78], [1250, -150, 380, 200, 96], [980, -900, 300, 220, 84],
      [1500, 700, 420, 240, 110], [640, 720, 200, 130, 58], [1900, -520, 460, 260, 120], [300, -760, 180, 140, 66],
    ];
    spots.forEach(([f, r, a, b, h], k) => push(ex + fx * f + rx * r, ez + fz * f + rz * r, a, b, h, k * 0.7));
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    geo.computeVertexNormals();
    group.add(new THREE.Mesh(geo, material));
  }

  return { group, anchors, material };
}
