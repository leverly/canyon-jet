import { clamp, lerp, mulberry32, smoothstep } from '../core/math';

export const DS = 2; // metres between centreline samples
export const GRAV = 12;

export interface Gate { id: number; s: number; lat: number; half: number }
export interface Sun { id: number; s: number; lat: number; x: number; z: number; y: number }
export interface Rock { id: number; s: number; lat: number; x: number; z: number; r: number; h: number; seed: number }
export interface Pad { id: number; s0: number; s1: number; lat: number; half: number }
export interface Ramp { id: number; s0: number; s1: number; lat: number; half: number; height: number }

export interface Course {
  n: number;
  length: number;
  px: Float32Array; pz: Float32Array;
  tx: Float32Array; tz: Float32Array;
  hw: Float32Array; wy: Float32Array; curv: Float32Array;
  startS: number; finishS: number; endS: number;
  fallS: number;
  gates: Gate[]; suns: Sun[]; rocks: Rock[]; pads: Pad[]; ramps: Ramp[];
  grid: { s: number; lat: number }[];
}

// [length m, total turn deg (+ = right), half width m at end]
const SEGMENTS: [number, number, number][] = [
  [150, 0, 17],
  [160, 35, 15],
  [180, -60, 14],
  [150, 50, 14],
  [200, -20, 17],
  [180, 40, 11.5],
  [170, -70, 12],
  [160, 0, 14],
  [180, 55, 15],
  [140, 0, 15],
  [150, -25, 20],
  [200, 45, 15],
  [190, -50, 14],
  [170, 20, 15],
  [140, 0, 28],
  [160, 0, 70],
];

// [s0, s1, drop m]
const DROPS: [number, number, number][] = [
  [480, 620, 2.6],
  [1655, 1668, 8.5],
  [2030, 2190, 2.8],
];
const H0 = 16;

export function sampleTrack(c: Course, s: number) {
  const u = clamp(s / DS, 0, c.n - 1.001);
  const i = Math.floor(u);
  const f = u - i;
  return {
    i, f,
    x: lerp(c.px[i], c.px[i + 1], f),
    z: lerp(c.pz[i], c.pz[i + 1], f),
    tx: lerp(c.tx[i], c.tx[i + 1], f),
    tz: lerp(c.tz[i], c.tz[i + 1], f),
    hw: lerp(c.hw[i], c.hw[i + 1], f),
    wy: lerp(c.wy[i], c.wy[i + 1], f),
    curv: lerp(c.curv[i], c.curv[i + 1], f),
  };
}

/** World position for a track coordinate. lat > 0 is to the right of travel. */
export function posAt(c: Course, s: number, lat: number) {
  const p = sampleTrack(c, s);
  const l = Math.hypot(p.tx, p.tz) || 1;
  return { x: p.x - (p.tz / l) * lat, z: p.z + (p.tx / l) * lat, wy: p.wy, tx: p.tx / l, tz: p.tz / l, hw: p.hw };
}

/** Nearest track coordinate around a hint index. */
export function locate(c: Course, x: number, z: number, hint: number, window = 10) {
  let best = -1;
  let bd = Infinity;
  const a = Math.max(0, hint - window);
  const b = Math.min(c.n - 1, hint + window);
  for (let i = a; i <= b; i++) {
    const dx = x - c.px[i];
    const dz = z - c.pz[i];
    const d = dx * dx + dz * dz;
    if (d < bd) { bd = d; best = i; }
  }
  const dx = x - c.px[best];
  const dz = z - c.pz[best];
  const tx = c.tx[best];
  const tz = c.tz[best];
  const along = dx * tx + dz * tz;
  const lat = dx * -tz + dz * tx;
  return { i: best, s: best * DS + along, lat };
}

export function locateGlobal(c: Course, x: number, z: number) {
  return locate(c, x, z, Math.floor(c.n / 2), c.n);
}

export function waterY(c: Course, s: number) {
  const u = clamp(s / DS, 0, c.n - 1.001);
  const i = Math.floor(u);
  return lerp(c.wy[i], c.wy[i + 1], u - i);
}

export function rampLift(c: Course, s: number, lat: number) {
  for (const r of c.ramps) {
    if (s >= r.s0 && s <= r.s1 && Math.abs(lat - r.lat) <= r.half) {
      return ((s - r.s0) / (r.s1 - r.s0)) * r.height;
    }
  }
  return 0;
}

export const groundY = (c: Course, s: number, lat: number) => waterY(c, s) + rampLift(c, s, lat);

/** Smooth racing-line lateral offset threading the gate centres. */
export function lineLat(c: Course, s: number) {
  const g = c.gates;
  if (s <= g[0].s) return g[0].lat * smoothstep(g[0].s - 80, g[0].s, s);
  for (let i = 0; i < g.length - 1; i++) {
    if (s <= g[i + 1].s) return lerp(g[i].lat, g[i + 1].lat, smoothstep(g[i].s, g[i + 1].s, s));
  }
  return g[g.length - 1].lat * (1 - smoothstep(g[g.length - 1].s, g[g.length - 1].s + 60, s));
}

export function buildCourse(): Course {
  const total = SEGMENTS.reduce((a, s) => a + s[0], 0);
  const n = Math.floor(total / DS) + 1;
  const rawCurv = new Float32Array(n);
  const rawW = new Float32Array(n);
  let acc = 0;
  let prevW = SEGMENTS[0][2];
  for (const [len, turn, w] of SEGMENTS) {
    const i0 = Math.round(acc / DS);
    const i1 = Math.min(n, Math.round((acc + len) / DS));
    for (let i = i0; i < i1; i++) {
      rawCurv[i] = ((turn * Math.PI) / 180) / len;
      rawW[i] = lerp(prevW, w, smoothstep(0, 1, (i - i0) / (i1 - i0)));
    }
    prevW = w;
    acc += len;
  }
  rawW[n - 1] = prevW;
  // Smooth curvature so bends ease in and out.
  const curv = new Float32Array(n);
  const R = 14;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    let wsum = 0;
    for (let k = -R; k <= R; k++) {
      const j = clamp(i + k, 0, n - 1);
      const w = 1 - Math.abs(k) / (R + 1);
      sum += rawCurv[j] * w;
      wsum += w;
    }
    curv[i] = sum / wsum;
  }
  const px = new Float32Array(n);
  const pz = new Float32Array(n);
  const tx = new Float32Array(n);
  const tz = new Float32Array(n);
  const hw = new Float32Array(n);
  const wy = new Float32Array(n);
  let phi = -Math.PI / 2;
  let x = 0;
  let z = 0;
  for (let i = 0; i < n; i++) {
    px[i] = x; pz[i] = z;
    tx[i] = Math.cos(phi); tz[i] = Math.sin(phi);
    const s = i * DS;
    // gentle organic width wobble
    hw[i] = rawW[i] + Math.sin(s * 0.021) * 1.1 + Math.sin(s * 0.047 + 1.3) * 0.6;
    let y = H0;
    for (const [s0, s1, d] of DROPS) y -= d * smoothstep(s0, s1, s);
    wy[i] = y;
    x += Math.cos(phi) * DS;
    z += Math.sin(phi) * DS;
    phi += curv[i] * DS;
  }

  const c: Course = {
    n, length: (n - 1) * DS, px, pz, tx, tz, hw, wy, curv,
    startS: 60, finishS: total - 230, endS: total - 40, fallS: DROPS[1][0],
    gates: [], suns: [], rocks: [], pads: [], ramps: [], grid: [],
  };

  const rnd = mulberry32(20261111);

  c.ramps = [
    { id: 0, s0: 1240, s1: 1251, lat: -1.5, half: 3.4, height: 2.5 },
    { id: 1, s0: 2290, s1: 2301, lat: 2, half: 3.4, height: 2.5 },
  ];
  c.pads = [
    { id: 0, s0: 250, s1: 262, lat: 3, half: 3 },
    { id: 1, s0: 705, s1: 717, lat: -4, half: 3 },
    { id: 2, s0: 1196, s1: 1208, lat: -1.5, half: 3 },
    { id: 3, s0: 1560, s1: 1572, lat: 0, half: 3.2 },
    { id: 4, s0: 1905, s1: 1917, lat: 4, half: 3 },
    { id: 5, s0: 2250, s1: 2262, lat: 2, half: 3 },
  ];

  // Gates: ordered checkpoints. Keep clear of the waterfall flight and ramps.
  const gateS = [150, 270, 390, 500, 610, 740, 860, 980, 1090, 1320, 1410, 1500, 1620, 1790, 1900, 2020, 2130, 2230, 2380];
  const gateLat = [0, 3, -4, 3.5, -3, -4, 2, -2.5, 1.5, -1, 3.5, -3, 0, 2, 4, -4, 4, 2, 0];
  gateS.forEach((s, i) => {
    const w = sampleTrack(c, s).hw;
    const lat = clamp(gateLat[i], -(w - 7), w - 7);
    c.gates.push({ id: i, s, lat, half: i === gateS.length - 1 ? 9 : 5 });
  });
  c.gates.push({ id: c.gates.length, s: c.finishS, lat: 0, half: 60 }); // finish line

  // Rocks: rows in the rapids and slalom sections, always leaving the racing line open.
  const rockRows: [number, number, number][] = [
    [330, 440, 36], [520, 600, 27], [650, 700, 30], [800, 960, 32], [1010, 1070, 30],
    [1345, 1480, 34], [1720, 1770, 26], [1820, 1880, 32], [1950, 2190, 29], [2330, 2360, 30],
  ];
  let rid = 0;
  for (const [a, b, gap] of rockRows) {
    for (let s = a; s <= b; s += gap) {
      const w = sampleTrack(c, s).hw;
      const line = lineLat(c, s);
      const count = w > 13.5 ? 2 : 1;
      for (let k = 0; k < count; k++) {
        const r = 1.5 + rnd() * 1.4;
        let lat = 0;
        let ok = false;
        for (let tries = 0; tries < 12 && !ok; tries++) {
          lat = (rnd() * 2 - 1) * (w - r - 1.5);
          ok = Math.abs(lat - line) > r + 5.2;
          for (const g of c.gates) if (Math.abs(g.s - s) < 16 && Math.abs(lat - g.lat) < g.half + r + 1.5) ok = false;
          for (const p of c.pads) if (s > p.s0 - 25 && s < p.s1 + 25 && Math.abs(lat - p.lat) < p.half + r + 2) ok = false;
          for (const p of c.ramps) if (s > p.s0 - 30 && s < p.s1 + 60) ok = false;
          for (const o of c.rocks) if (Math.abs(o.s - s) < 10 && Math.abs(o.lat - lat) < o.r + r + 5) ok = false;
        }
        if (!ok) continue;
        const ss = s + (rnd() - 0.5) * 8;
        const p = posAt(c, ss, lat);
        c.rocks.push({ id: rid++, s: ss, lat, x: p.x, z: p.z, r, h: 1.2 + r * 0.7, seed: Math.floor(rnd() * 1000) });
      }
    }
  }

  // Suns: strings along the racing line between gates, plus arcs over the jumps.
  let sid = 0;
  const addSun = (s: number, lat: number, lift: number) => {
    for (const o of c.rocks) if (Math.abs(o.s - s) < o.r + 3 && Math.abs(o.lat - lat) < o.r + 3) return;
    const p = posAt(c, s, lat);
    c.suns.push({ id: sid++, s, lat, x: p.x, z: p.z, y: groundY(c, s, lat) + 1.3 + lift });
  };
  for (let i = 0; i < c.gates.length - 2; i++) {
    const g0 = c.gates[i];
    const g1 = c.gates[i + 1];
    const mid = (g0.s + g1.s) / 2;
    if (mid > 1630 && mid < 1760) continue;
    for (let k = -2; k <= 2; k++) {
      const s = mid + k * 9;
      if (c.ramps.some((r) => s > r.s0 - 6 && s < r.s1 + 50)) continue;
      addSun(s, lineLat(c, s), 0);
    }
  }
  for (const r of c.ramps) {
    for (let k = 0; k < 5; k++) {
      const t = 0.18 + k * 0.17; // seconds of flight at ~30 m/s
      addSun(r.s1 + 30 * t, r.lat, r.height + 6.8 * t - 0.5 * GRAV * t * t);
    }
  }
  for (let k = 0; k < 6; k++) {
    const t = 0.1 + k * 0.2;
    const s = c.fallS + 31 * t;
    const p = posAt(c, s, 0);
    c.suns.push({ id: sid++, s, lat: 0, x: p.x, z: p.z, y: waterY(c, c.fallS) + 1.2 - 0.5 * GRAV * t * t });
  }

  c.grid = [
    { s: c.startS - 6, lat: -3.2 },
    { s: c.startS - 6, lat: 3.2 },
    { s: c.startS - 16, lat: -6.4 },
    { s: c.startS - 16, lat: 6.4 },
  ];
  return c;
}
