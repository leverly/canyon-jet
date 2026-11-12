import * as THREE from 'three';
import { fbm, hash, lerp, mulberry32 } from '../core/math';
import { Course, groundY, posAt, sampleTrack, waterY } from '../game/course';
import { PAL } from './env';
import { Anchor } from './terrain';
import { between, canvasTexture, MeshBuilder, trs, paintedTexture } from './tex';

const SECTION = 240;

// ---------- geometry kit ----------

function plantGeo(broad: boolean, seed: number) {
  const rnd = mulberry32(seed);
  const mb = new MeshBuilder();
  const leaves = broad ? 8 : 12;
  const cBase = new THREE.Color(0x1d4a24);
  const cMid = new THREE.Color(broad ? 0x4c9a30 : 0x3c8a2e);
  const cTip = new THREE.Color(broad ? 0xbcd64c : 0x94c63e);
  const colAt = (t: number, shade: number) => {
    const c = t < 0.5 ? cBase.clone().lerp(cMid, t * 2) : cMid.clone().lerp(cTip, (t - 0.5) * 2);
    return c.multiplyScalar(shade);
  };
  const SEG = 4;
  for (let l = 0; l < leaves; l++) {
    const az = (l / leaves) * Math.PI * 2 + rnd() * 0.6;
    const len = (broad ? 1.0 : 1.15) * (0.65 + rnd() * 0.55);
    const width = (broad ? 0.3 : 0.12) * (0.8 + rnd() * 0.4);
    let elev = 1.3 - rnd() * 0.45;
    const droop = (broad ? 1.25 : 1.75) * (0.7 + rnd() * 0.5);
    const shade = 0.82 + rnd() * 0.3;
    const dx = Math.cos(az), dz = Math.sin(az);
    const px = -dz, pz = dx;
    let r = 0.05, y = 0;
    let pm: number[] | null = null, pl: number[] = [], pr: number[] = [], pt = 0;
    for (let k = 0; k <= SEG; k++) {
      const t = k / SEG;
      const w = k === SEG ? 0 : width * Math.pow(Math.sin(Math.PI * (0.14 + 0.86 * t)), 0.7);
      const fold = broad ? w * 0.4 : 0;
      const m = [dx * r, y, dz * r];
      const L = [m[0] + px * w, y + fold, m[2] + pz * w];
      const R = [m[0] - px * w, y + fold, m[2] - pz * w];
      if (pm) {
        const c0 = colAt(pt, shade), c1 = colAt(t, shade);
        if (broad) {
          const d0 = c0.clone().multiplyScalar(0.8), d1 = c1.clone().multiplyScalar(0.8);
          mb.vtri(pm, pl, L, d0, c0, c1); mb.vtri(pm, L, m, d0, c1, d1);
          mb.vtri(pm, m, R, d0, d1, c1); mb.vtri(pm, R, pr, d0, c1, c0);
        } else {
          mb.vtri(pl, L, R, c0, c1, c1); mb.vtri(pl, R, pr, c0, c1, c0);
        }
      }
      pm = m; pl = L; pr = R; pt = t;
      const seg = len / SEG;
      r += Math.cos(elev) * seg;
      y += Math.sin(elev) * seg;
      elev -= droop / SEG;
    }
  }
  return mb.build();
}

function blob(mb: MeshBuilder, x: number, y: number, z: number, sx: number, sy: number, sz: number, color: number, detail = 1) {
  const g = new THREE.IcosahedronGeometry(1, detail);
  mb.add(g, color, trs(x, y, z, 0, x * 3.1 + z, 0, sx, sy, sz));
}

function flowerGeo(seed: number) {
  const rnd = mulberry32(seed);
  const mb = new MeshBuilder();
  blob(mb, 0, 0.12, 0, 0.6, 0.34, 0.6, 0x2f6a2a);
  blob(mb, 0.28, 0.2, 0.15, 0.36, 0.26, 0.36, 0x3f8230);
  const pinks = [0xf0569a, 0xf681b4, 0xe23f86, 0xfba6c8];
  for (let i = 0; i < 11; i++) {
    const a = rnd() * Math.PI * 2;
    const rr = Math.sqrt(rnd()) * 0.55;
    const h = 0.42 - rr * rr * 0.6;
    blob(mb, Math.cos(a) * rr, h + rnd() * 0.06, Math.sin(a) * rr, 0.085 + rnd() * 0.05, 0.07, 0.085 + rnd() * 0.05, pinks[i % 4], 0);
  }
  return mb.build();
}

function treeGeo(seed: number) {
  const rnd = mulberry32(seed);
  const mb = new MeshBuilder();
  const cyl = new THREE.CylinderGeometry(1, 1, 1, 5, 1, true);
  const bend = (rnd() - 0.5) * 0.14;
  mb.add(cyl, 0x33241f, between([0, -0.05, 0], [bend, 0.42, 0], 0.035));
  mb.add(cyl, 0x33241f, between([bend, 0.42, 0], [bend * 1.6, 0.74, 0.02], 0.026));
  mb.add(cyl, 0x33241f, between([bend, 0.45, 0], [bend + 0.2, 0.68, 0.08], 0.016));
  mb.add(cyl, 0x33241f, between([bend, 0.5, 0], [bend - 0.18, 0.7, -0.1], 0.016));
  const cx = bend * 1.6;
  blob(mb, cx, 0.76, 0, 0.36, 0.09, 0.33, 0x2f6426);
  blob(mb, cx + 0.2, 0.7, 0.08, 0.2, 0.07, 0.2, 0x35702a, 0);
  blob(mb, cx - 0.2, 0.72, -0.1, 0.22, 0.07, 0.2, 0x2c5f25, 0);
  blob(mb, cx - 0.03, 0.83, 0.02, 0.27, 0.08, 0.24, 0x5c9a36, 0);
  blob(mb, cx + 0.08, 0.89, -0.03, 0.15, 0.05, 0.14, 0x86b944, 0);
  return mb.build();
}

function bushGeo() {
  const mb = new MeshBuilder();
  blob(mb, 0, 0.3, 0, 0.6, 0.42, 0.6, 0x3d7a2c);
  blob(mb, 0.35, 0.22, 0.2, 0.42, 0.3, 0.4, 0x2f6426, 0);
  blob(mb, -0.3, 0.26, -0.22, 0.4, 0.32, 0.42, 0x4e8f32, 0);
  blob(mb, 0.05, 0.52, -0.05, 0.36, 0.24, 0.36, 0x6aa63a, 0);
  return mb.build();
}

function boulderGeo(seed: number) {
  const g = new THREE.IcosahedronGeometry(1, 2);
  const p = g.getAttribute('position');
  const col = new Float32Array(p.count * 3);
  const v = new THREE.Vector3();
  const lit = new THREE.Color(PAL.boulder);
  const dark = new THREE.Color(PAL.boulderDark);
  const c = new THREE.Color();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const n = fbm(v.x * 1.3 + seed, v.y * 1.3 + v.z * 1.7, 3, seed);
    const q = Math.round((0.72 + n * 0.62) * 7) / 7; // chunky facets
    v.multiplyScalar(q);
    v.y *= 0.86;
    p.setXYZ(i, v.x, v.y, v.z);
    c.copy(dark).lerp(lit, 0.35 + 0.65 * Math.min(1, Math.max(0, v.y * 0.6 + 0.5)));
    c.multiplyScalar(0.9 + 0.2 * hash(Math.floor(i / 3), seed, 3));
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  // spherical normals: river-worn, rounded stones rather than faceted crystals
  const nrm = new Float32Array(p.count * 3);
  for (let i = 0; i < p.count; i++) {
    v.set(p.getX(i), p.getY(i) / 0.72, p.getZ(i)).normalize();
    nrm[i * 3] = v.x; nrm[i * 3 + 1] = v.y; nrm[i * 3 + 2] = v.z;
  }
  g.setAttribute('normal', new THREE.BufferAttribute(nrm, 3));
  return g;
}

function vineGeo() {
  const mb = new MeshBuilder();
  const rnd = mulberry32(5);
  const c0 = new THREE.Color(0x2c5f25), c1 = new THREE.Color(0x4f8f30), cs = new THREE.Color(0x24481f);
  for (const sx of [-0.16, 0.02, 0.2]) {
    const top = -rnd() * 0.05;
    const bottom = -(0.6 + rnd() * 0.4);
    mb.vtri([sx - 0.012, top, 0], [sx + 0.012, top, 0], [sx, bottom, 0], cs, cs, cs);
    const n = 10;
    for (let k = 0; k < n; k++) {
      const y = lerp(top, bottom, (k + 0.5) / n);
      const side = k % 2 ? 1 : -1;
      const cx = sx + side * (0.05 + rnd() * 0.04);
      const w = 0.07 + rnd() * 0.03, h = 0.045;
      const zz = (rnd() - 0.5) * 0.08;
      const c = rnd() < 0.5 ? c0 : c1;
      mb.vtri([cx - w, y, zz], [cx, y + h, zz + 0.02], [cx + w, y, zz], c, c1, c);
      mb.vtri([cx - w, y, zz], [cx + w, y, zz], [cx, y - h, zz - 0.02], c, c, c0);
    }
  }
  return mb.build();
}

// ---------- instanced scatter ----------

interface Kind { geo: THREE.BufferGeometry; mat: THREE.Material; cast: boolean; range: number }

export class Scatter {
  group = new THREE.Group();
  fallTime = { value: 0 };
  fallCount = 0;
  private kinds = new Map<string, Kind>();
  private bins = new Map<string, { kind: string; section: number; m: THREE.Matrix4[]; c: THREE.Color[] }>();
  private meshes: { mesh: THREE.InstancedMesh; s: number; range: number }[] = [];

  define(name: string, k: Kind) { this.kinds.set(name, k); }
  add(kind: string, s: number, m: THREE.Matrix4, c?: THREE.Color) {
    const section = Math.floor(s / SECTION);
    const key = kind + ':' + section;
    let b = this.bins.get(key);
    if (!b) { b = { kind, section, m: [], c: [] }; this.bins.set(key, b); }
    b.m.push(m);
    b.c.push(c ?? new THREE.Color(1, 1, 1));
  }
  build() {
    for (const b of this.bins.values()) {
      const k = this.kinds.get(b.kind)!;
      const mesh = new THREE.InstancedMesh(k.geo, k.mat, b.m.length);
      b.m.forEach((m, i) => { mesh.setMatrixAt(i, m); mesh.setColorAt(i, b.c[i]); });
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      mesh.castShadow = k.cast;
      mesh.receiveShadow = true;
      mesh.computeBoundingSphere();
      this.group.add(mesh);
      this.meshes.push({ mesh, s: (b.section + 0.5) * SECTION, range: k.range });
    }
    this.bins.clear();
    return this.group;
  }
  cull(playerS: number, scale: number) {
    for (const m of this.meshes) m.mesh.visible = Math.abs(m.s - playerS) < m.range * scale + SECTION / 2;
  }
  get instanceCount() { return this.meshes.reduce((a, m) => a + m.mesh.count, 0); }
}

export function createDecor(c: Course, anchors: Anchor[], noiseTex: THREE.Texture) {
  const sc = new Scatter();
  const leafMat = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide });
  const solidMat = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
  const rockMat = new THREE.MeshLambertMaterial({ vertexColors: true });
  const tBoulder = paintedTexture('boulder');
  rockMat.onBeforeCompile = (sh) => {
    sh.uniforms.tBoulder = { value: tBoulder };
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vec4 bwp = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
        bwp = instanceMatrix * bwp;
        #endif
        vWPos = (modelMatrix * bwp).xyz;`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPos; uniform sampler2D tBoulder;')
      .replace('#include <color_fragment>', `#include <color_fragment>
        vec3 bn = normalize(cross(dFdx(vWPos), dFdy(vWPos)));
        vec3 w3 = pow(abs(bn), vec3(4.0)); w3 /= dot(w3, vec3(1.0));
        vec3 bt = texture2D(tBoulder, vWPos.zy * 0.3).rgb * w3.x + texture2D(tBoulder, vWPos.xz * 0.3).rgb * w3.y + texture2D(tBoulder, vWPos.xy * 0.3).rgb * w3.z;
        diffuseColor.rgb *= mix(vec3(1.0), vec3(dot(bt, vec3(0.3, 0.59, 0.11)) * 5.0), 0.75);`);
  };
  sc.define('broad0', { geo: plantGeo(true, 1), mat: leafMat, cast: false, range: 380 });
  sc.define('broad1', { geo: plantGeo(true, 2), mat: leafMat, cast: false, range: 380 });
  sc.define('fern0', { geo: plantGeo(false, 3), mat: leafMat, cast: false, range: 320 });
  sc.define('fern1', { geo: plantGeo(false, 4), mat: leafMat, cast: false, range: 320 });
  sc.define('flower', { geo: flowerGeo(9), mat: solidMat, cast: false, range: 320 });
  sc.define('tree0', { geo: treeGeo(1), mat: solidMat, cast: false, range: 1100 });
  sc.define('tree1', { geo: treeGeo(7), mat: solidMat, cast: false, range: 1100 });
  sc.define('bush', { geo: bushGeo(), mat: solidMat, cast: false, range: 700 });
  sc.define('boulder0', { geo: boulderGeo(1), mat: rockMat, cast: true, range: 700 });
  sc.define('boulder1', { geo: boulderGeo(2), mat: rockMat, cast: true, range: 700 });
  sc.define('boulder2', { geo: boulderGeo(3), mat: rockMat, cast: true, range: 700 });
  sc.define('vine', { geo: vineGeo(), mat: leafMat, cast: false, range: 520 });

  const rnd = mulberry32(4242);
  const tint = (lo = 0.8, hi = 1.15) => {
    const v = lerp(lo, hi, rnd());
    return new THREE.Color(v * (0.94 + rnd() * 0.12), v, v * (0.9 + rnd() * 0.15));
  };
  for (const a of anchors) {
    const tx = -a.nz * a.side, tz = a.nx * a.side; // along-river direction
    const jit = (k: number) => (rnd() - 0.5) * k;
    if (a.kind === 'shore') {
      for (let n = 0; n < 3; n++) {
        if (rnd() < 0.55) {
          const broad = rnd() < 0.6;
          const s = broad ? 1.5 + rnd() * 2.2 : 1.3 + rnd() * 1.6;
          const j = jit(3.6), o = rnd() * 3.4 - 0.6;
          sc.add((broad ? 'broad' : 'fern') + (rnd() < 0.5 ? 0 : 1), a.s, trs(a.x + tx * j + a.nx * o, a.y - 0.1 + o * 0.12, a.z + tz * j + a.nz * o, 0, rnd() * 6.28, 0, s), tint());
        }
      }
      if (rnd() < 0.16) {
        // big fronds leaning over the water: foreground framing as the boat passes
        const s = 3.0 + rnd() * 2.2;
        sc.add('broad' + (rnd() < 0.5 ? 0 : 1), a.s, trs(a.x - a.nx * 1.2, a.y - 0.2, a.z - a.nz * 1.2, 0, rnd() * 6.28, 0, s), tint(0.95, 1.15));
      }
      if (rnd() < 0.42) {
        // pink flower clumps in drifts along the bank
        const k = 1 + Math.floor(rnd() * 3);
        const j0 = jit(3), o0 = rnd() * 2.2;
        for (let f = 0; f < k; f++) {
          const s = 0.9 + rnd() * 1.2;
          const j = j0 + jit(1.6), o = o0 + rnd() * 1.2;
          sc.add('flower', a.s, trs(a.x + tx * j + a.nx * o, a.y + 0.05, a.z + tz * j + a.nz * o, 0, rnd() * 6.28, 0, s), tint(0.95, 1.1));
        }
      }
      if (rnd() < 0.46) {
        const s = 0.8 + rnd() * rnd() * 2.6;
        const j = jit(3), o = s * 0.9 - 0.3 + rnd() * 2.5;
        sc.add('boulder' + Math.floor(rnd() * 3), a.s, trs(a.x + tx * j + a.nx * o, a.y - 0.25 * s, a.z + tz * j + a.nz * o, jit(0.5), rnd() * 6.28, jit(0.5), s, s * (0.6 + rnd() * 0.3), s * (0.8 + rnd() * 0.4)), tint(0.9, 1.1));
      }
    } else if (a.kind === 'ledge') {
      const p = rnd();
      if (p < 0.2) {
        const s = 0.9 + rnd() * 1.6;
        sc.add('bush', a.s, trs(a.x + tx * jit(3), a.y - 0.05, a.z + tz * jit(3), 0, rnd() * 6.28, 0, s, s * (0.7 + rnd() * 0.5), s), tint());
      } else if (p < 0.36) {
        const s = 0.9 + rnd() * 1.0;
        sc.add('fern' + (rnd() < 0.5 ? 0 : 1), a.s, trs(a.x + tx * jit(3), a.y, a.z + tz * jit(3), 0, rnd() * 6.28, 0, s), tint());
      } else if (p < 0.4) {
        const s = 0.6 + rnd() * 1.0;
        sc.add('boulder' + Math.floor(rnd() * 3), a.s, trs(a.x, a.y + 0.1 * s, a.z, jit(0.5), rnd() * 6.28, 0, s, s * 0.7, s), tint(0.95, 1.15));
      } else if (p < 0.44) {
        const s = 3 + rnd() * 2.5;
        sc.add('tree' + (rnd() < 0.5 ? 0 : 1), a.s, trs(a.x, a.y, a.z, 0, rnd() * 6.28, 0, s), tint(0.9, 1.1));
      }
    } else if (a.kind === 'lip') {
      if (a.drop > 3 && rnd() < 0.2) {
        const dx = -a.nx, dz = -a.nz;
        const sy = Math.min(a.drop * 0.9, 2.5 + rnd() * 7);
        const w = 1.6 + rnd() * 2.2;
        sc.add('vine', a.s, trs(a.x + dx * 0.3 + tx * jit(3), a.y + 0.1, a.z + dz * 0.3 + tz * jit(3), 0, Math.atan2(dx, dz) + jit(0.4), 0, w, sy, w), tint(0.85, 1.1));
      }
      if (rnd() < 0.1) {
        const s = 0.7 + rnd() * 1.0;
        sc.add('bush', a.s, trs(a.x - a.nx * 0.1, a.y - 0.1, a.z - a.nz * 0.1, 0, rnd() * 6.28, 0, s, s * 0.7, s), tint());
      }
    } else {
      const p = rnd();
      if (p < 0.22) {
        const s = 4.5 + rnd() * 4;
        sc.add('tree' + (rnd() < 0.5 ? 0 : 1), a.s, trs(a.x + tx * jit(3), a.y - 0.2, a.z + tz * jit(3), 0, rnd() * 6.28, 0, s, s * (0.9 + rnd() * 0.3), s), tint(0.9, 1.12));
      } else if (p < 0.5) {
        const s = 1.4 + rnd() * 2.4;
        sc.add('bush', a.s, trs(a.x + tx * jit(3), a.y - 0.1, a.z + tz * jit(3), 0, rnd() * 6.28, 0, s, s * (0.6 + rnd() * 0.4), s), tint());
      }
    }
  }
  // thin waterfalls spilling off the lower terraces
  const fallTime = { value: 0 };
  const fallMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide, uniforms: { uTime: fallTime, tNoise: { value: noiseTex } },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: `uniform sampler2D tNoise; uniform float uTime; varying vec2 vUv;
      void main(){
        float n = texture2D(tNoise, vec2(vUv.x * 1.3, vUv.y * 0.35 + uTime * 0.55)).r;
        float n2 = texture2D(tNoise, vec2(vUv.x * 3.1 + 0.4, vUv.y * 0.9 + uTime * 1.1)).b;
        float edge = smoothstep(0.0, 0.3, vUv.x) * smoothstep(1.0, 0.7, vUv.x);
        float a = edge * smoothstep(0.30, 0.62, n * 0.65 + n2 * 0.45 + edge * 0.12) * smoothstep(1.0, 0.94, vUv.y);
        a = max(a, smoothstep(0.16, 0.0, vUv.y) * edge);
        if (a < 0.02) discard;
        gl_FragColor = vec4(mix(vec3(0.74, 0.92, 0.94), vec3(1.0), n2), a * 0.92);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  let lastFall = -1e9;
  const fallPos: number[] = [], fallUv: number[] = [], fallIdx: number[] = [];
  for (const a of anchors) {
    if (a.kind !== 'lip' || a.tier > 1 || a.drop < 5.5 || a.s - lastFall < 150 || a.s < 120 || a.s > c.finishS - 60) continue;
    if (rnd() > 0.08) continue;
    lastFall = a.s;
    const tx = -a.nz, tz = a.nx;
    const w = 1.6 + rnd() * 1.8;
    const o = 0.9; // stand proud of the rock face
    const base = fallPos.length / 3;
    const yb = a.y - a.drop + 0.05;
    for (const [px, py, pz, v] of [[a.x, a.y + 0.05, a.z, 1], [a.fx, yb, a.fz, 0]] as number[][]) {
      for (const sgn of [-1, 1]) {
        fallPos.push(px - a.nx * o + tx * sgn * w * (v ? 0.8 : 1.15), py, pz - a.nz * o + tz * sgn * w * (v ? 0.8 : 1.15));
        fallUv.push(sgn < 0 ? 0 : 1, v);
      }
    }
    fallIdx.push(base, base + 1, base + 2, base + 1, base + 3, base + 2);
    sc.add('bush', a.s, trs(a.x + tx * (w + 0.8), a.y - 0.1, a.z + tz * (w + 0.8), 0, rnd() * 6, 0, 1.3, 0.9, 1.3), tint());
  }
  if (fallIdx.length) {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(fallPos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(fallUv, 2));
    g.setIndex(fallIdx);
    const falls = new THREE.Mesh(g, fallMat);
    falls.frustumCulled = false;
    falls.renderOrder = 2;
    sc.group.add(falls);
  }
  sc.fallTime = fallTime;
  sc.fallCount = fallIdx.length / 6;

  // river rocks are obstacles: their visible size follows the collision radius
  for (const r of c.rocks) {
    const wy = waterY(c, r.s);
    sc.add('boulder' + (r.seed % 3), r.s, trs(r.x, wy + r.h * 0.12, r.z, 0, r.seed, 0, r.r * 1.08, r.h * 1.0, r.r * 1.08), new THREE.Color(1.05, 1.02, 1.0));
  }
  sc.build();
  return sc;
}

// ---------- course objects ----------

const GATE_H = 4.2;
const GATE_COL = { next: 0x58e6ee, ahead: 0x2a8f9a, passed: 0x6fe38a, missed: 0xff5a4a };

export class CourseView {
  group = new THREE.Group();
  private lamps: THREE.InstancedMesh;
  private banners: THREE.InstancedMesh;
  private col = new THREE.Color();
  private suns: THREE.InstancedMesh;
  private sunAlive: Uint8Array;
  private sunScale: Float32Array;
  private padTime = { value: 0 };
  private m = new THREE.Matrix4();
  private q = new THREE.Quaternion();
  private e = new THREE.Euler();
  private p = new THREE.Vector3();
  private sv = new THREE.Vector3();

  constructor(private c: Course, noiseTex: THREE.Texture) {
    const cyl = new THREE.CylinderGeometry(1, 1, 1, 10);
    const sph = new THREE.SphereGeometry(1, 10, 8);
    const box = new THREE.BoxGeometry(1, 1, 1);
    const bodyMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.55 });

    // gates: three instanced draws for every checkpoint, plus the finish arch
    const NG = c.gates.length - 1;
    const bm = new MeshBuilder();
    bm.add(cyl, 0xf4f1e8, trs(0, 0.12, 0, 0, 0, 0, 0.62, 0.5, 0.62));
    bm.add(cyl, 0xf07a22, trs(0, 0.34, 0, 0, 0, 0, 0.64, 0.14, 0.64));
    bm.add(cyl, 0x1b2a3a, between([0, 0.3, 0], [0, GATE_H, 0], 0.13));
    const buoys = new THREE.InstancedMesh(bm.build(), bodyMat, NG * 2);
    buoys.castShadow = true;
    const glowMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const lg = new MeshBuilder();
    lg.add(sph, 0xffffff, trs(0, GATE_H + 0.15, 0, 0, 0, 0, 0.26));
    lg.add(cyl, 0xffffff, trs(0, 1.6, 0, 0, 0, 0, 0.17, 0.3, 0.17));
    const lampGeo = lg.build();
    lampGeo.deleteAttribute('color');
    this.lamps = new THREE.InstancedMesh(lampGeo, glowMat, NG * 2);
    this.banners = new THREE.InstancedMesh(box, glowMat, NG);
    for (let i = 0; i < NG; i++) {
      const g = c.gates[i];
      const P = posAt(c, g.s, g.lat);
      [-1, 1].forEach((sg, k) => {
        const Q = posAt(c, g.s, g.lat + sg * g.half);
        const m = trs(Q.x, Q.wy, Q.z);
        buoys.setMatrixAt(i * 2 + k, m);
        this.lamps.setMatrixAt(i * 2 + k, m);
      });
      this.banners.setMatrixAt(i, trs(P.x, P.wy + GATE_H - 0.35, P.z, 0, -Math.atan2(P.tz, P.tx), 0, 0.14, 0.5, g.half * 2));
    }
    for (const m of [buoys, this.lamps, this.banners]) { m.frustumCulled = false; this.group.add(m); }
    const arch = (s: number, paint: (g2: CanvasRenderingContext2D) => void) => {
      const half = sampleTrack(c, s).hw - 2.5;
      const P = posAt(c, s, 0);
      const grp = new THREE.Group();
      grp.position.set(P.x, P.wy, P.z);
      grp.rotation.y = -Math.atan2(P.tz, P.tx);
      const H = 9;
      const mb = new MeshBuilder();
      for (const sg of [-1, 1]) {
        const z = sg * half;
        mb.add(cyl, 0xf4f1e8, trs(0, 0.12, z, 0, 0, 0, 1.1, 0.5, 1.1));
        mb.add(cyl, 0x20242c, trs(0, 0.34, z, 0, 0, 0, 1.12, 0.14, 1.12));
        mb.add(cyl, 0x1b2a3a, between([0, 0.3, z], [0, H, z], 0.3));
        mb.add(sph, 0xffd84a, trs(0, H + 0.3, z, 0, 0, 0, 0.55));
      }
      const body = new THREE.Mesh(mb.build(), bodyMat);
      body.castShadow = true;
      const chk = canvasTexture(1024, 64, paint);
      const banner = new THREE.Mesh(new THREE.PlaneGeometry(half * 2, 1.8), new THREE.MeshBasicMaterial({ map: chk, side: THREE.DoubleSide }));
      banner.rotation.y = -Math.PI / 2; // reads correctly for boats approaching
      banner.position.y = H - 0.9;
      grp.add(body, banner);
      this.group.add(grp);
    };
    arch(c.gates[NG].s, (g2) => {
      for (let x = 0; x < 64; x++) for (let y = 0; y < 4; y++) {
        g2.fillStyle = (x + y) % 2 ? '#101418' : '#f6f3ea';
        g2.fillRect(x * 16, y * 16, 16, 16);
      }
    });
    arch(c.startS, (g2) => {
      g2.fillStyle = '#17363d';
      g2.fillRect(0, 0, 1024, 64);
      g2.fillStyle = '#58e6ee';
      g2.fillRect(0, 0, 1024, 6); g2.fillRect(0, 58, 1024, 6);
      g2.font = '900 44px Nunito, Arial Black, sans-serif';
      g2.textAlign = 'center'; g2.textBaseline = 'middle';
      for (let i = 0; i < 4; i++) {
        g2.fillStyle = '#f6ecd0'; g2.fillText('RED RIVER RUSH', 128 + i * 256, 34);
        g2.fillStyle = '#f27420'; g2.fillRect(i * 256 - 6, 14, 12, 36);
      }
    });

    // suns
    const sm = new MeshBuilder();
    sm.add(new THREE.CylinderGeometry(1, 1, 1, 18), 0xffd84a, trs(0, 0, 0, Math.PI / 2, 0, 0, 0.5, 0.14, 0.5));
    sm.add(new THREE.CylinderGeometry(1, 1, 1, 18), 0xfff0a0, trs(0, 0, 0, Math.PI / 2, 0, 0, 0.36, 0.2, 0.36));
    const ray = new THREE.ConeGeometry(1, 1, 4);
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * Math.PI * 2;
      sm.add(ray, 0xffb52e, between([Math.cos(a) * 0.56, Math.sin(a) * 0.56, 0], [Math.cos(a) * 0.9, Math.sin(a) * 0.9, 0], 0.13));
    }
    const sunMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.35, emissive: 0xffa81e, emissiveIntensity: 0.55 });
    this.suns = new THREE.InstancedMesh(sm.build(), sunMat, c.suns.length);
    this.suns.frustumCulled = false;
    this.sunAlive = new Uint8Array(c.suns.length).fill(1);
    this.sunScale = new Float32Array(c.suns.length).fill(1);
    this.group.add(this.suns);

    // boost pads
    const padMat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
      uniforms: { uTime: this.padTime },
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `uniform float uTime; varying vec2 vUv;
        void main(){
          float v = abs(vUv.y - 0.5) * 2.0;
          float c = fract(vUv.x * 3.0 + v * 0.55 - uTime * 1.6);
          float chev = smoothstep(0.0, 0.08, c) * smoothstep(0.55, 0.42, c);
          float edge = smoothstep(1.0, 0.8, v) * smoothstep(0.0, 0.08, vUv.x) * smoothstep(1.0, 0.92, vUv.x);
          float rim = smoothstep(0.86, 0.94, v) * smoothstep(1.0, 0.97, v);
          vec3 col = mix(vec3(0.25, 0.95, 1.0), vec3(1.0, 0.9, 0.35), chev * 0.6);
          gl_FragColor = vec4(col * (chev * 0.9 + rim * 0.8 + 0.12) * edge, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
    });
    for (const pad of c.pads) {
      const len = pad.s1 - pad.s0 + 4;
      const P = posAt(c, (pad.s0 + pad.s1) / 2, pad.lat);
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(len, pad.half * 2), padMat);
      mesh.rotation.order = 'YXZ';
      mesh.rotation.set(-Math.PI / 2, -Math.atan2(P.tz, P.tx), 0);
      mesh.position.set(P.x, P.wy + 0.07, P.z);
      mesh.renderOrder = 2;
      this.group.add(mesh);
    }

    // ramps
    const rampTex = canvasTexture(256, 512, (g) => {
      g.fillStyle = '#d9d4c8';
      g.fillRect(0, 0, 256, 512);
      for (let y = 0; y < 512; y += 32) { g.fillStyle = y % 64 ? '#cfc9bb' : '#e2ddd2'; g.fillRect(0, y, 256, 30); }
      g.strokeStyle = '#f07a22';
      g.lineWidth = 26;
      g.lineJoin = 'miter';
      for (let y = 470; y > 60; y -= 110) { g.beginPath(); g.moveTo(40, y); g.lineTo(128, y - 80); g.lineTo(216, y); g.stroke(); }
      g.fillStyle = '#2b63c0';
      g.fillRect(0, 0, 14, 512); g.fillRect(242, 0, 14, 512);
    });
    const rampTop = new THREE.MeshStandardMaterial({ map: rampTex, roughness: 0.6 });
    const rampSide = new THREE.MeshStandardMaterial({ color: 0x6d7480, roughness: 0.7, flatShading: true });
    for (const r of c.ramps) {
      const a0 = posAt(c, r.s0, r.lat - r.half), b0 = posAt(c, r.s0, r.lat + r.half);
      const a1 = posAt(c, r.s1, r.lat - r.half), b1 = posAt(c, r.s1, r.lat + r.half);
      const y0 = a0.wy - 0.25, y1 = a1.wy + r.height;
      const top = new THREE.BufferGeometry();
      top.setAttribute('position', new THREE.Float32BufferAttribute([a0.x, y0, a0.z, b0.x, y0, b0.z, b1.x, y1, b1.z, a1.x, y1, a1.z], 3));
      top.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 1, 0, 1, 1, 0, 1], 2));
      top.setIndex([0, 1, 2, 0, 2, 3]);
      top.computeVertexNormals();
      const tm = new THREE.Mesh(top, rampTop);
      tm.receiveShadow = true;
      tm.castShadow = true;
      const mb = new MeshBuilder();
      const ref = [(a0.x + b1.x) / 2, y0, (a0.z + b1.z) / 2];
      const yb = a1.wy - 1;
      mb.face([[a0.x, y0, a0.z], [a1.x, y1, a1.z], [a1.x, yb, a1.z]], 0, ref);
      mb.face([[b0.x, y0, b0.z], [b1.x, y1, b1.z], [b1.x, yb, b1.z]], 0, ref);
      mb.face([[a1.x, y1, a1.z], [b1.x, y1, b1.z], [b1.x, yb, b1.z], [a1.x, yb, a1.z]], 0, ref);
      const side = new THREE.Mesh(mb.build(), rampSide);
      side.castShadow = true;
      this.group.add(tm, side);
    }

    // foam collars around river rocks
    const ringTex = canvasTexture(128, 128, (g) => {
      const gr = g.createRadialGradient(64, 64, 26, 64, 64, 64);
      gr.addColorStop(0, 'rgba(255,255,255,0)');
      gr.addColorStop(0.35, 'rgba(255,255,255,0.95)');
      gr.addColorStop(0.7, 'rgba(255,255,255,0.5)');
      gr.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = gr;
      g.fillRect(0, 0, 128, 128);
    });
    const ringMat = new THREE.MeshBasicMaterial({ map: ringTex, transparent: true, depthWrite: false, color: 0xf4fbfa });
    const rings = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), ringMat, c.rocks.length);
    c.rocks.forEach((r, i) => {
      const P = posAt(c, r.s, r.lat);
      const ang = -Math.atan2(P.tz, P.tx);
      rings.setMatrixAt(i, trs(r.x + P.tx * r.r * 0.5, waterY(c, r.s) + 0.06, r.z + P.tz * r.r * 0.5, 0, ang, 0, r.r * 4.6, 1, r.r * 3.3));
    });
    rings.frustumCulled = false;
    rings.renderOrder = 1;
    this.group.add(rings);
    void noiseTex; void groundY;
  }

  reset() {
    this.sunAlive.fill(1);
    this.sunScale.fill(1);
  }
  takeSun(id: number) { this.sunAlive[id] = 0; }

  update(nextGate: number, gateState: Int8Array, t: number, dt: number) {
    this.padTime.value = t;
    const c = this.c;
    for (let i = 0; i < c.gates.length - 1; i++) {
      const st = gateState[i];
      const col = st === 1 ? GATE_COL.passed : st === -1 ? GATE_COL.missed : i === nextGate ? GATE_COL.next : GATE_COL.ahead;
      this.col.set(col).multiplyScalar(i === nextGate ? 1.5 + Math.sin(t * 7) * 0.5 : st !== 0 ? 0.6 : 0.9);
      this.banners.setColorAt(i, this.col);
      this.lamps.setColorAt(i * 2, this.col);
      this.lamps.setColorAt(i * 2 + 1, this.col);
    }
    this.banners.instanceColor!.needsUpdate = true;
    this.lamps.instanceColor!.needsUpdate = true;
    for (let i = 0; i < c.suns.length; i++) {
      const s = c.suns[i];
      const target = this.sunAlive[i] ? 1 : 0;
      this.sunScale[i] += (target - this.sunScale[i]) * Math.min(1, dt * 14);
      const sc = this.sunScale[i] < 0.02 ? 0 : this.sunScale[i] * (this.sunAlive[i] ? 0.62 : 1.1);
      this.q.setFromEuler(this.e.set(0, t * 2.2 + i * 0.7, 0));
      this.m.compose(this.p.set(s.x, s.y + Math.sin(t * 2.4 + i) * 0.14, s.z), this.q, this.sv.set(sc, sc, sc));
      this.suns.setMatrixAt(i, this.m);
    }
    this.suns.instanceMatrix.needsUpdate = true;
  }
}
