import * as THREE from 'three';

const vert = /* glsl */ `
attribute vec2 aData; attribute vec3 aColor;
uniform float uScale; uniform float uMaxPx;
varying float vAlpha; varying vec3 vColor; varying float vSeed; varying float vPx;
void main() {
  vSeed = fract(float(gl_VertexID) * 0.61803);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float px = aData.x * uScale / max(0.1, -mv.z);
  gl_PointSize = min(px, uMaxPx);
  vPx = gl_PointSize;
  // spray right in front of the lens thins out instead of whiting out the frame
  vAlpha = aData.y * smoothstep(1.2, 4.0, -mv.z) * min(1.0, uMaxPx / max(px, 1.0));
  vColor = aColor;
}`;
const frag = /* glsl */ `
varying float vAlpha; varying vec3 vColor; varying float vSeed; varying float vPx;
uniform float uSoft;
float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vn(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + 1.0), f.x), f.y);
}
void main() {
  vec2 q = gl_PointCoord - 0.5;
  float d = length(q);
  // big blobs become torn foam clumps; tiny ones stay round droplets
  float lumpy = smoothstep(6.0, 26.0, vPx);
  vec2 o = vec2(vSeed * 37.0, vSeed * 91.0);
  float n = vn(q * 5.0 + o) * 0.65 + vn(q * 11.0 + o.yx) * 0.35;
  d += (n - 0.5) * 0.32 * lumpy;
  float a = smoothstep(0.5, uSoft, d) * vAlpha;
  a *= 1.0 - lumpy * 0.45 * smoothstep(0.55, 0.85, vn(q * 9.0 + o + 3.0)) * smoothstep(0.1, 0.35, d);
  if (a < 0.01) discard;
  float shade = 0.8 + 0.2 * smoothstep(0.25, -0.35, q.y + (n - 0.5) * 0.2);
  vec3 c = mix(vColor * vec3(0.78, 0.9, 0.95), vColor, shade);
  gl_FragColor = vec4(c * (0.86 + 0.14 * shade), a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

export class Particles {
  points: THREE.Points;
  private n: number;
  private head = 0;
  private pos: Float32Array; private vel: Float32Array; private data: Float32Array; private col: Float32Array;
  private life: Float32Array; private max: Float32Array; private size: Float32Array; private grow: Float32Array;
  private alpha: Float32Array; private grav: Float32Array; private floor: Float32Array;
  private scale = { value: 600 };
  private maxPx = { value: 90 };
  alive = 0;

  constructor(n: number, additive: boolean, soft = 0.12) {
    this.n = n;
    this.pos = new Float32Array(n * 3); this.vel = new Float32Array(n * 3);
    this.data = new Float32Array(n * 2); this.col = new Float32Array(n * 3);
    this.life = new Float32Array(n); this.max = new Float32Array(n); this.size = new Float32Array(n);
    this.grow = new Float32Array(n); this.alpha = new Float32Array(n); this.grav = new Float32Array(n);
    this.floor = new Float32Array(n).fill(-1e9);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aData', new THREE.BufferAttribute(this.data, 2).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aColor', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    const m = new THREE.ShaderMaterial({
      vertexShader: vert, fragmentShader: frag, transparent: true, depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      uniforms: { uScale: this.scale, uMaxPx: this.maxPx, uSoft: { value: soft } },
    });
    this.points = new THREE.Points(g, m);
    this.points.frustumCulled = false;
    this.points.renderOrder = 5;
  }

  setViewport(heightPx: number, fovDeg: number) {
    this.scale.value = heightPx / (2 * Math.tan((fovDeg * Math.PI) / 360));
    this.maxPx.value = heightPx * 0.11;
  }

  emit(x: number, y: number, z: number, vx: number, vy: number, vz: number, life: number, size: number, opts: { grow?: number; alpha?: number; grav?: number; color?: number[]; floor?: number } = {}) {
    const i = this.head;
    this.head = (this.head + 1) % this.n;
    this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz;
    this.life[i] = life; this.max[i] = life; this.size[i] = size;
    this.grow[i] = opts.grow ?? 1.2; this.alpha[i] = opts.alpha ?? 0.9; this.grav[i] = opts.grav ?? 12;
    this.floor[i] = opts.floor ?? -1e9;
    const c = opts.color ?? [0.96, 0.99, 1.0];
    this.col[i * 3] = c[0]; this.col[i * 3 + 1] = c[1]; this.col[i * 3 + 2] = c[2];
  }

  update(dt: number) {
    let alive = 0;
    for (let i = 0; i < this.n; i++) {
      if (this.life[i] <= 0) { this.data[i * 2] = 0; this.data[i * 2 + 1] = 0; continue; }
      this.life[i] -= dt;
      const k = i * 3;
      this.vel[k + 1] -= this.grav[i] * dt;
      const drag = Math.exp(-0.9 * dt);
      this.vel[k] *= drag; this.vel[k + 2] *= drag;
      this.pos[k] += this.vel[k] * dt; this.pos[k + 1] += this.vel[k + 1] * dt; this.pos[k + 2] += this.vel[k + 2] * dt;
      // falling water is swallowed by the surface
      if (this.pos[k + 1] < this.floor[i] && this.vel[k + 1] < 0) { this.pos[k + 1] = this.floor[i]; this.life[i] = Math.min(this.life[i], this.max[i] * 0.12); }
      const t = Math.max(0, this.life[i] / this.max[i]);
      this.size[i] += this.grow[i] * dt;
      // water breaks up by shrinking; mist (low gravity) fades instead
      const mist = this.grav[i] < 4;
      this.data[i * 2] = this.size[i] * (mist ? 1 : Math.min(1, t * 3.2));
      this.data[i * 2 + 1] = this.alpha[i] * (mist ? Math.min(1, t * 2.2) * Math.min(1, (1 - t) * 6) : Math.min(1, t * 8));
      alive++;
    }
    this.alive = alive;
    const g = this.points.geometry;
    g.getAttribute('position').needsUpdate = true;
    g.getAttribute('aData').needsUpdate = true;
    g.getAttribute('aColor').needsUpdate = true;
  }

  clear() { this.life.fill(0); }
}

/** Foam ribbon laid on the water behind a hull. */
export class Wake {
  mesh: THREE.Mesh;
  private N = 44;
  private px = new Float32Array(this.N); private py = new Float32Array(this.N); private pz = new Float32Array(this.N);
  private dx = new Float32Array(this.N); private dz = new Float32Array(this.N);
  private age = new Float32Array(this.N).fill(99); private str = new Float32Array(this.N);
  private head = 0;
  private lastX = 1e9; private lastZ = 1e9;
  private pos: Float32Array; private uv: Float32Array; private al: Float32Array;
  private dist = 0;

  constructor(noiseTex: THREE.Texture, private life = 2.6) {
    const N = this.N;
    this.pos = new Float32Array(N * 2 * 3); this.uv = new Float32Array(N * 2 * 2); this.al = new Float32Array(N * 2);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('uv', new THREE.BufferAttribute(this.uv, 2).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aAlpha', new THREE.BufferAttribute(this.al, 1).setUsage(THREE.DynamicDrawUsage));
    const idx: number[] = [];
    for (let i = 0; i < N - 1; i++) idx.push(i * 2, i * 2 + 1, i * 2 + 2, i * 2 + 1, i * 2 + 3, i * 2 + 2);
    g.setIndex(idx);
    const m = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, side: THREE.DoubleSide,
      uniforms: { tNoise: { value: noiseTex } },
      vertexShader: `attribute float aAlpha; varying vec2 vUv; varying float vA;
        void main(){ vUv = uv; vA = aAlpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `uniform sampler2D tNoise; varying vec2 vUv; varying float vA;
        void main(){
          float n = texture2D(tNoise, vec2(vUv.x * 0.9, vUv.y * 0.09)).r;
          float n2 = texture2D(tNoise, vec2(vUv.x * 2.3 + 0.3, vUv.y * 0.21)).b;
          float side = abs(vUv.x - 0.5) * 2.0;
          float body = smoothstep(1.0, 0.55, side);
          float streak = smoothstep(0.38 - vA * 0.3, 0.62, n * 0.6 + n2 * 0.4 + (1.0 - side) * 0.12);
          float a = vA * body * mix(streak, 1.0, vA * vA * 0.6);
          if (a < 0.01) discard;
          gl_FragColor = vec4(vec3(0.95, 0.985, 0.98), a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
    });
    this.mesh = new THREE.Mesh(g, m);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 3;
  }

  reset() { this.age.fill(99); this.lastX = 1e9; this.lastZ = 1e9; }

  update(dt: number, x: number, y: number, z: number, fx: number, fz: number, strength: number) {
    const N = this.N;
    for (let i = 0; i < N; i++) this.age[i] += dt;
    const moved = Math.hypot(x - this.lastX, z - this.lastZ);
    if (moved > 0.75) {
      if (moved > 30) this.age.fill(99);
      this.head = (this.head + 1) % N;
      this.dist += Math.min(moved, 2);
      this.lastX = x; this.lastZ = z;
    }
    // the head point always rides at the stern
    const h = this.head;
    this.px[h] = x; this.py[h] = y; this.pz[h] = z; this.dx[h] = -fz; this.dz[h] = fx; this.age[h] = 0; this.str[h] = strength;
    for (let k = 0; k < N; k++) {
      const i = (h - k + N * 2) % N; // newest first
      const a = this.age[i];
      const t = Math.min(1, a / this.life);
      const w = 1.5 + a * 2.4;
      const alpha = a > this.life ? 0 : this.str[i] * Math.pow(1 - t, 1.4);
      const o = k * 6;
      this.pos[o] = this.px[i] + this.dx[i] * w; this.pos[o + 1] = this.py[i] + 0.05; this.pos[o + 2] = this.pz[i] + this.dz[i] * w;
      this.pos[o + 3] = this.px[i] - this.dx[i] * w; this.pos[o + 4] = this.py[i] + 0.05; this.pos[o + 5] = this.pz[i] - this.dz[i] * w;
      const v = this.dist - k * 0.75;
      this.uv[k * 4] = 0; this.uv[k * 4 + 1] = v; this.uv[k * 4 + 2] = 1; this.uv[k * 4 + 3] = v;
      this.al[k * 2] = alpha; this.al[k * 2 + 1] = alpha;
    }
    const g = this.mesh.geometry;
    g.getAttribute('position').needsUpdate = true;
    g.getAttribute('uv').needsUpdate = true;
    g.getAttribute('aAlpha').needsUpdate = true;
  }
}

/** Curling sheets of water thrown off the hull sides plus a rooster tail; shape authored, torn by noise. */
export class SpraySheets {
  mesh: THREE.Mesh;
  private u = { uTime: { value: 0 }, uAmp: { value: new THREE.Vector3() }, tNoise: { value: null as THREE.Texture | null } };

  constructor(noiseTex: THREE.Texture) {
    const pos: number[] = [], uv: number[] = [], kind: number[] = [], idx: number[] = [];
    const NU = 18, NV = 9;
    const sheet = (k: number, f: (u: number, v: number) => number[]) => {
      const base = pos.length / 3;
      for (let i = 0; i <= NU; i++) for (let j = 0; j <= NV; j++) {
        const p = f(i / NU, j / NV);
        pos.push(p[0], p[1], p[2]); uv.push(i / NU, j / NV); kind.push(k);
      }
      for (let i = 0; i < NU; i++) for (let j = 0; j < NV; j++) {
        const a = base + i * (NV + 1) + j, b = a + NV + 1;
        idx.push(a, b, a + 1, a + 1, b, b + 1);
      }
    };
    for (const sg of [-1, 1]) {
      sheet(sg < 0 ? 0 : 1, (u, v) => {
        const x = 1.5 - u * 6.6;
        const grow = Math.pow(u, 0.75);
        // the curtain climbs, then its lip rolls over outward like a breaking crest
        const H = 1.85 * Math.sin(Math.PI * Math.min(1, 0.12 + u * 1.25));
        const lip = Math.max(0, (v - 0.68) / 0.32);
        const reach = (0.5 + 3.4 * grow) * v + (0.25 + 0.9 * grow) * lip * lip;
        const rise = H * (Math.sin(0.5 * Math.PI * Math.min(1, v / 0.72)) - 0.55 * lip * lip * lip);
        return [x - v * 0.9 * grow, 0.02 + rise, sg * (1.02 + reach)];
      });
    }
    sheet(2, (u, v) => {
      const x = -3.0 - u * 6.5;
      const w = (0.35 + u * 1.5) * (v * 2 - 1);
      return [x, 0.1 + Math.sin(Math.PI * Math.min(1, u * 1.15)) * 2.0 * (1 - 0.5 * Math.abs(v * 2 - 1)), w];
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setAttribute('aKind', new THREE.Float32BufferAttribute(kind, 1));
    g.setIndex(idx);
    this.u.tNoise.value = noiseTex;
    const m = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, side: THREE.DoubleSide, uniforms: this.u,
      vertexShader: `attribute float aKind; uniform vec3 uAmp; varying vec2 vUv; varying float vAmp; varying float vKind; varying vec3 vMv;
        void main(){
          vUv = uv; vKind = aKind;
          vAmp = aKind < 0.5 ? uAmp.x : aKind < 1.5 ? uAmp.y : uAmp.z;
          vec3 p = position;
          float s = 0.35 + 0.65 * vAmp;
          p.y *= vAmp; 
          if (aKind < 1.5) p.z = sign(p.z) * (1.02 + (abs(p.z) - 1.02) * s);
          else p.x = -3.0 + (p.x + 3.0) * s;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          vMv = mv.xyz;
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `uniform sampler2D tNoise; uniform float uTime; varying vec2 vUv; varying float vAmp; varying float vKind; varying vec3 vMv;
        void main(){
          float u = vUv.x, v = vUv.y;
          float across = vKind > 1.5 ? abs(v * 2.0 - 1.0) : v;
          float n = texture2D(tNoise, vec2(u * 1.6 + uTime * 1.9, across * 0.9 + vKind * 0.31)).r;
          float n2 = texture2D(tNoise, vec2(u * 4.5 + uTime * 3.6, across * 2.6)).b;
          float body = vKind > 1.5 ? 0.95 - across * 0.9 - u * 0.75 : 1.3 - across * 0.75 - u * 0.6;
          float a = smoothstep(0.52, 0.66, body * 0.62 + n * 0.55 + n2 * 0.2 - 0.12);
          // ragged fingers along the crest edge
          float fr = texture2D(tNoise, vec2(u * 9.0 + uTime * 2.4, 0.37 + vKind * 0.2)).g;
          a *= smoothstep(1.0, 0.72, across + fr * 0.28);
          a *= smoothstep(0.0, 0.06, u) * smoothstep(1.0, 0.72, u) * smoothstep(0.0, 0.25, vAmp);
          if (a < 0.02) discard;
          // streaky white foam over a glassy turquoise body near the hull
          float streak = texture2D(tNoise, vec2(u * 0.7 - uTime * 0.4, across * 5.0 + vKind)).r;
          float foam = vKind > 1.5 ? 1.0 : smoothstep(0.18, 0.55, across + (streak - 0.5) * 0.5 + n2 * 0.25);
          vec3 glass = vec3(0.42, 0.82, 0.86);
          vec3 white = mix(vec3(0.82, 0.93, 0.96), vec3(1.0), smoothstep(0.35, 0.7, n2 + across * 0.3));
          vec3 col = mix(glass, white, foam);
          a *= mix(0.55, 1.0, foam);
          // a curtain seen edge-on would collapse into a hard white line
          vec3 fn = normalize(cross(dFdx(vMv), dFdy(vMv)));
          a *= smoothstep(0.08, 0.35, abs(dot(fn, normalize(vMv))));
          gl_FragColor = vec4(col, a * 0.94);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
    });
    this.mesh = new THREE.Mesh(g, m);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 4;
  }

  update(t: number, left: number, right: number, tail: number) {
    this.u.uTime.value = t;
    this.u.uAmp.value.set(left, right, tail);
  }
}
