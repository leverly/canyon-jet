import * as THREE from 'three';
import { Course, DS } from '../game/course';
import { PAL } from './env';

export interface Water {
  mesh: THREE.Mesh;
  time: { value: number };
  boats: { value: THREE.Vector4[] };
}

export function createWater(c: Course, noiseTex: THREE.Texture): Water {
  const NC = 14;
  const pos: number[] = [];
  const uv: number[] = [];
  const aux: number[] = [];
  const dir: number[] = [];
  const idx: number[] = [];
  let rows = 0;
  const row = (cx: number, cz: number, y: number, tx: number, tz: number, W: number, s: number, hw: number, slope: number) => {
    const nx = -tz, nz = tx;
    for (let j = 0; j <= NC; j++) {
      const lat = ((j / NC) * 2 - 1) * W;
      pos.push(cx + nx * lat, y, cz + nz * lat);
      uv.push(lat, s);
      aux.push(hw - Math.abs(lat), slope);
      dir.push(tx, tz);
    }
    rows++;
  };
  for (let i = 0; i < c.n; i++) {
    const slope = (c.wy[Math.max(0, i - 1)] - c.wy[Math.min(c.n - 1, i + 1)]) / (2 * DS);
    row(c.px[i], c.pz[i], c.wy[i], c.tx[i], c.tz[i], c.hw[i] + 2.5, i * DS, c.hw[i], slope);
  }
  // open water beyond the lagoon mouth
  const e = c.n - 1;
  for (const [d, W] of [[60, 220], [600, 1600], [6000, 7000]]) {
    row(c.px[e] + c.tx[e] * d, c.pz[e] + c.tz[e] * d, c.wy[e], c.tx[e], c.tz[e], W, e * DS + d, W + 60, 0);
  }
  for (let r = 0; r < rows - 1; r++) {
    for (let j = 0; j < NC; j++) {
      const a = r * (NC + 1) + j;
      const b = a + 1;
      const d = a + NC + 1;
      idx.push(a, b, d, b, d + 1, d);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setAttribute('aAux', new THREE.Float32BufferAttribute(aux, 2));
  geo.setAttribute('aDir', new THREE.Float32BufferAttribute(dir, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();

  const time = { value: 0 };
  const boats = { value: [new THREE.Vector4(), new THREE.Vector4(), new THREE.Vector4(), new THREE.Vector4()] };
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.1, metalness: 0 });
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.tNoise = { value: noiseTex };
    sh.uniforms.uTime = time;
    sh.uniforms.uBoats = boats;
    sh.uniforms.uDeep = { value: new THREE.Color(PAL.waterDeep) };
    sh.uniforms.uMid = { value: new THREE.Color(PAL.waterMid) };
    sh.uniforms.uShallow = { value: new THREE.Color(PAL.waterShallow) };
    sh.uniforms.uFoam = { value: new THREE.Color(PAL.foam) };
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
        attribute vec2 aAux; attribute vec2 aDir;
        varying vec2 vTrack; varying vec2 vAux; varying vec2 vDir; varying vec3 vWPos;`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vTrack = uv; vAux = aAux; vDir = aDir; vWPos = (modelMatrix * vec4(position, 1.0)).xyz;`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec2 vTrack; varying vec2 vAux; varying vec2 vDir; varying vec3 vWPos;
        uniform sampler2D tNoise; uniform float uTime; uniform vec4 uBoats[4];
        uniform vec3 uDeep; uniform vec3 uMid; uniform vec3 uShallow; uniform vec3 uFoam;`)
      .replace('#include <color_fragment>', `
        vec2 fl = vTrack;
        float edge = vAux.x;
        float slope = vAux.y;
        float tt = uTime;
        vec4 n1 = texture2D(tNoise, vec2(fl.x * 0.043, fl.y * 0.021 - tt * 0.050));
        vec4 n2 = texture2D(tNoise, vec2(fl.x * 0.110 + 0.37, fl.y * 0.058 - tt * 0.120));
        vec4 n3 = texture2D(tNoise, vec2(fl.x * 0.19, fl.y * 0.075 - tt * 0.26));
        float hgt = n1.r * 0.6 + n2.r * 0.4;
        float gx = ((n1.g - 0.5) * 0.6 + (n2.g - 0.5) * 0.4) * 5.3;
        float gz = ((n1.b - 0.5) * 0.6 + (n2.b - 0.5) * 0.4) * 5.3;
        float shallow = 1.0 - smoothstep(0.0, 8.0, edge);
        vec3 wcol = mix(uDeep, uMid, smoothstep(0.30, 0.72, hgt + shallow * 0.30));
        wcol = mix(wcol, uShallow, clamp(shallow * 0.55 + smoothstep(0.60, 0.88, hgt) * 0.35, 0.0, 1.0));
        float lace = smoothstep(0.030, 0.0, abs(n2.a - 0.5 + (n1.a - 0.5) * 0.35));
        wcol = mix(wcol, uShallow * 1.12, lace * 0.38);
        float fn = n3.a;
        float fn2 = n3.r;
        float bank = smoothstep(1.3 + fn * 2.4, 0.15, edge);
        float rapid = smoothstep(0.008, 0.03, slope) * smoothstep(0.50, 0.72, fn2 + slope * 3.0);
        float fall = smoothstep(0.12, 0.40, slope);
        float churn = 0.0;
        for (int i = 0; i < 4; i++) {
          float d = distance(vWPos.xz, uBoats[i].xy);
          churn = max(churn, uBoats[i].w * smoothstep(uBoats[i].z, uBoats[i].z * 0.3, d + (fn - 0.5) * 3.0));
        }
        float foam = clamp(max(max(bank, rapid), max(fall, churn)), 0.0, 1.0);
        foam = mix(foam, 0.72 + 0.28 * n3.r, fall);
        wcol *= 0.8;
        wcol = mix(wcol, uFoam, foam);
        diffuseColor.rgb = wcol;
      `)
      .replace('#include <roughnessmap_fragment>', 'float roughnessFactor = mix(roughness, 0.95, foam);')
      .replace('#include <normal_fragment_maps>', `
        vec2 acr = vec2(-vDir.y, vDir.x);
        vec2 gw = (acr * gx + vDir * gz) * (1.0 - foam * 0.8);
        normal = normalize(mat3(viewMatrix) * normalize(vec3(-gw.x, 1.0, -gw.y)));
      `);
  };
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  mesh.frustumCulled = false;
  return { mesh, time, boats };
}
