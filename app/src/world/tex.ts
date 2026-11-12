import * as THREE from 'three';
import { lerp } from '../core/math';

function hashP(ix: number, iy: number, period: number, seed: number) {
  ix = ((ix % period) + period) % period;
  iy = ((iy % period) + period) % period;
  let h = Math.imul(ix, 374761393) ^ Math.imul(iy, 668265263) ^ Math.imul(seed + 1, 1442695041);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}

function tileNoise(x: number, y: number, period: number, seed: number) {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);
  return lerp(
    lerp(hashP(ix, iy, period, seed), hashP(ix + 1, iy, period, seed), ux),
    lerp(hashP(ix, iy + 1, period, seed), hashP(ix + 1, iy + 1, period, seed), ux),
    uy,
  );
}

function tileFbm(u: number, v: number, base: number, seed: number) {
  let sum = 0;
  let amp = 0.5;
  let norm = 0;
  let p = base;
  for (let o = 0; o < 5; o++) {
    sum += amp * tileNoise(u * p, v * p, p, seed + o * 31);
    norm += amp;
    amp *= 0.5;
    p *= 2;
  }
  return sum / norm;
}

/** Tileable 4-channel fbm noise shared by the water, rock and effect shaders. */
export function makeNoiseTexture(size = 256) {
  const data = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = x / size;
      const v = y / size;
      const i = (y * size + x) * 4;
      data[i] = Math.round(255 * tileFbm(u, v, 4, 1));
      data[i + 1] = Math.round(255 * tileFbm(u, v, 4, 2));
      data[i + 2] = Math.round(255 * tileFbm(u, v, 8, 3));
      data[i + 3] = Math.round(255 * tileFbm(u, v, 16, 4));
    }
  }
  const tex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.generateMipmaps = true;
  tex.needsUpdate = true;
  return tex;
}

/** Tileable water texture: R height, GB height gradient (0.5-centred, /40), A detail noise. Three lookups replace nine. */
export function makeWaterTexture(size = 256) {
  const h = new Float32Array(size * size);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) h[y * size + x] = tileFbm(x / size, y / size, 4, 1);
  const data = new Uint8Array(size * size * 4);
  const at = (x: number, y: number) => h[((y + size) % size) * size + ((x + size) % size)];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;
      const gu = (at(x + 1, y) - at(x - 1, y)) * size * 0.5;
      const gv = (at(x, y + 1) - at(x, y - 1)) * size * 0.5;
      data[i] = Math.round(255 * h[y * size + x]);
      data[i + 1] = Math.round(255 * Math.min(1, Math.max(0, 0.5 + gu / 40)));
      data[i + 2] = Math.round(255 * Math.min(1, Math.max(0, 0.5 + gv / 40)));
      data[i + 3] = Math.round(255 * tileFbm(x / size, y / size, 8, 3));
    }
  }
  const tex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.generateMipmaps = true;
  tex.needsUpdate = true;
  return tex;
}

export function canvasTexture(w: number, h: number, draw: (g: CanvasRenderingContext2D) => void) {
  const cv = document.createElement('canvas');
  cv.width = w;
  cv.height = h;
  draw(cv.getContext('2d')!);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

/** Vertex-coloured mesh builder for the authored hard-surface models. */
export class MeshBuilder {
  pos: number[] = [];
  nor: number[] = [];
  col: number[] = [];
  private c = new THREE.Color();
  private v = new THREE.Vector3();
  private n = new THREE.Vector3();
  private nm = new THREE.Matrix3();

  tri(a: number[], b: number[], c: number[], color: number) {
    this.c.set(color);
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
    const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    this.n.set(uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx).normalize();
    for (const p of [a, b, c]) {
      this.pos.push(p[0], p[1], p[2]);
      this.nor.push(this.n.x, this.n.y, this.n.z);
      this.col.push(this.c.r, this.c.g, this.c.b);
    }
  }
  /** Flat triangle with per-vertex colours (THREE.Color), double-sided use. */
  vtri(a: number[], b: number[], c: number[], ca: THREE.Color, cb: THREE.Color, cc: THREE.Color) {
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
    const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    this.n.set(uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx).normalize();
    if (this.n.y < 0) this.n.negate();
    const cols = [ca, cb, cc];
    [a, b, c].forEach((p, i) => {
      this.pos.push(p[0], p[1], p[2]);
      this.nor.push(this.n.x, this.n.y, this.n.z);
      this.col.push(cols[i].r, cols[i].g, cols[i].b);
    });
  }
  /** Triangle or quad wound so its normal points along (sign * (centroid - ref)). */
  face(pts: number[][], color: number, ref: number[], sign = 1) {
    const [a, b, c] = pts;
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
    const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    let mx = 0, my = 0, mz = 0;
    for (const p of pts) { mx += p[0]; my += p[1]; mz += p[2]; }
    mx /= pts.length; my /= pts.length; mz /= pts.length;
    const d = (nx * (mx - ref[0]) + ny * (my - ref[1]) + nz * (mz - ref[2])) * sign;
    const q = d >= 0 ? pts : [...pts].reverse();
    this.tri(q[0], q[1], q[2], color);
    if (q.length === 4) this.tri(q[0], q[2], q[3], color);
  }
  /** Face wound so the normal has positive Y. */
  up(pts: number[][], color: number) {
    this.face(pts, color, [pts[0][0], -1000, pts[0][2]]);
  }
  add(geo: THREE.BufferGeometry, color: number, m: THREE.Matrix4) {
    const g = geo.index ? geo.toNonIndexed() : geo;
    if (!g.getAttribute('normal')) g.computeVertexNormals();
    const p = g.getAttribute('position');
    const n = g.getAttribute('normal');
    this.c.set(color);
    this.nm.getNormalMatrix(m);
    for (let i = 0; i < p.count; i++) {
      this.v.fromBufferAttribute(p, i).applyMatrix4(m);
      this.pos.push(this.v.x, this.v.y, this.v.z);
      this.n.fromBufferAttribute(n, i).applyMatrix3(this.nm).normalize();
      this.nor.push(this.n.x, this.n.y, this.n.z);
      this.col.push(this.c.r, this.c.g, this.c.b);
    }
  }
  /** Append another builder's triangles through a transform. */
  append(o: MeshBuilder, m: THREE.Matrix4) {
    this.nm.getNormalMatrix(m);
    for (let i = 0; i < o.pos.length; i += 3) {
      this.v.set(o.pos[i], o.pos[i + 1], o.pos[i + 2]).applyMatrix4(m);
      this.pos.push(this.v.x, this.v.y, this.v.z);
      this.n.set(o.nor[i], o.nor[i + 1], o.nor[i + 2]).applyMatrix3(this.nm).normalize();
      this.nor.push(this.n.x, this.n.y, this.n.z);
    }
    for (const c of o.col) this.col.push(c);
  }
  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nor, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    g.computeBoundingSphere();
    return g;
  }
}

const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _s = new THREE.Vector3();
const _p = new THREE.Vector3();
const _up = new THREE.Vector3(0, 1, 0);
const _d = new THREE.Vector3();

export function trs(x: number, y: number, z: number, rx = 0, ry = 0, rz = 0, sx = 1, sy = sx, sz = sx) {
  return new THREE.Matrix4().compose(_p.set(x, y, z), _q.setFromEuler(_e.set(rx, ry, rz)), _s.set(sx, sy, sz));
}

/** Matrix placing a unit-height Y-aligned primitive between two points. */
export function between(a: number[], b: number[], radius = 1) {
  _d.set(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
  const len = _d.length();
  _q.setFromUnitVectors(_up, _d.normalize());
  return new THREE.Matrix4().compose(_p.set((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2), _q, _s.set(radius, len, radius));
}
