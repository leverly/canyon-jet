import * as THREE from 'three';
import { clamp, damp, lerp } from '../core/math';
import { PAL } from './env';
import { SpraySheets } from './fx';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { between, canvasTexture, MeshBuilder, trs } from './tex';

export interface BoatColors { hull: number; hullLight: number; trim: number; panel: number; vest: number; shirt: number; hairA: number; hairB: number; badgeBg: string }

export const HERO: BoatColors = {
  hull: PAL.boatOrange, hullLight: 0xf8923a, trim: PAL.boatBlue, panel: PAL.boatGrey,
  vest: PAL.vest, shirt: PAL.shirt, hairA: PAL.hairBrown, hairB: PAL.hairBlond, badgeBg: '#e9541c',
};
export const RIVAL_COLORS: BoatColors[] = [
  { hull: 0xf1f1ee, hullLight: 0xffffff, trim: 0xd23a3a, panel: 0x8f96a3, vest: 0xe2452f, shirt: 0x2e3340, hairA: 0x1d1a1c, hairB: 0xb4532a, badgeBg: '#c92f2f' },
  { hull: 0x2d4fb3, hullLight: 0x4470d8, trim: 0xf2f2f2, panel: 0xb8c0d0, vest: 0xf2f2f2, shirt: 0x162a66, hairA: 0x6a3c22, hairB: 0x161616, badgeBg: '#1c3a94' },
  { hull: 0x7a4cc9, hullLight: 0x9a6fe2, trim: 0xf5d13a, panel: 0xc9c2da, vest: 0x44c7b4, shirt: 0x3a2a66, hairA: 0xd9d2c4, hairB: 0x7a2f2f, badgeBg: '#5a34a3' },
];

const DARK = 0x23252b;
const DARK2 = 0x33363f;
const SKIN = PAL.skin;

// Hull loft: transom at XS, stem at XT. Sections are swept from the keel up through a
// rounded chine and a flared topside to a rolled gunwale.
const XS = -2.6, XT = 3.15;
const NXS = 30;
const XB = -1.15, XF = 1.0, ZI = 0.82, FL = 0.24;

function hullAt(x: number) {
  const fb = clamp((x - 0.55) / (XT - 0.55), 0, 1);
  const stern = clamp((-1.6 - x) / 1.0, 0, 1);
  const bg = (1.17 - 0.05 * stern) * Math.sqrt(Math.max(0, 1 - fb * fb));
  return { bg, yg: 0.84 + 0.2 * Math.pow(fb, 1.6), yc: 0.1 + 0.5 * fb * fb, yk: -0.25 + 0.62 * Math.pow(fb, 2.2) };
}
/** Section points for one side (sg = ±1), keel to inner gunwale rim. */
function section(x: number, sg: number): number[][] {
  const h = hullAt(x);
  const bc = h.bg * 0.86, ys = h.yg - h.yc;
  const side = (t: number, y: number) => [x, h.yc + ys * y, sg * lerp(bc, h.bg, 1 - (1 - t) * (1 - t))];
  return [
    [x, h.yk, 0],
    [x, lerp(h.yk, h.yc, 0.62), sg * bc * 0.5],
    [x, h.yc - 0.02, sg * bc * 0.92],
    [x, h.yc + 0.03, sg * bc],
    side(0.28, 0.24),
    side(0.58, 0.54),
    side(0.66, 0.61),
    side(0.88, 0.82),
    [x, h.yg - 0.07, sg * h.bg],
    [x, h.yg + 0.02, sg * (h.bg - 0.035)],
    [x, h.yg + 0.005, sg * Math.max(0, h.bg - 0.13)],
  ];
}
const deckY = (x: number) => hullAt(x).yg + 0.005;
const deckZ = (x: number) => Math.max(0, hullAt(x).bg - 0.13);

/** Indexed grid surface with smooth normals, wound so normals agree with `out` at its centre. */
function surface(nu: number, nv: number, f: (u: number, v: number) => number[], out: number[]) {
  const pos: number[] = [], idx: number[] = [];
  for (let i = 0; i <= nu; i++) for (let j = 0; j <= nv; j++) pos.push(...f(i / nu, j / nv));
  for (let i = 0; i < nu; i++) for (let j = 0; j < nv; j++) {
    const a = i * (nv + 1) + j, b = a + nv + 1;
    idx.push(a, b, a + 1, a + 1, b, b + 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  const n = g.getAttribute('normal');
  const mid = Math.floor(nu / 2) * (nv + 1) + Math.floor(nv / 2);
  if (n.getX(mid) * out[0] + n.getY(mid) * out[1] + n.getZ(mid) * out[2] < 0) {
    for (let k = 0; k < idx.length; k += 3) { const t = idx[k + 1]; idx[k + 1] = idx[k + 2]; idx[k + 2] = t; }
    g.setIndex(idx);
    g.computeVertexNormals();
  }
  return g;
}

function buildBoatGeometry(col: BoatColors) {
  const mb = new MeshBuilder();
  const chrome = new MeshBuilder();
  const I = new THREE.Matrix4();
  const box = new THREE.BoxGeometry(1, 1, 1);
  const cyl = new THREE.CylinderGeometry(1, 1, 1, 10);
  const cone = new THREE.ConeGeometry(1, 1, 6);
  const sph = new THREE.SphereGeometry(1, 14, 10);
  const rbox = (w: number, h: number, d: number, r: number) => new RoundedBoxGeometry(w, h, d, 3, r);
  const bx = (x: number, y: number, z: number, sx: number, sy: number, sz: number, color: number, rx = 0, ry = 0, rz = 0) =>
    mb.add(box, color, trs(x, y, z, rx, ry, rz, sx, sy, sz));
  const tube = (pts: number[][], r: number) => {
    for (let i = 0; i < pts.length - 1; i++) chrome.add(cyl, 0xffffff, between(pts[i], pts[i + 1], r));
    for (const p of pts) chrome.add(sph, 0xffffff, trs(p[0], p[1], p[2], 0, 0, 0, r));
  };

  // --- hull shell: dark bottom, blue waterline stripe, white pinline, orange topsides ---
  const BANDS: [number, number, number][] = [[0, 3, DARK], [3, 5, col.trim], [5, 6, 0xf4f4f2], [6, 10, col.hull]];
  const stationX = (u: number) => XS + (XT - XS) * (1 - Math.pow(1 - u, 1.25));
  for (const sg of [-1, 1]) {
    for (const [k0, k1, c] of BANDS) {
      mb.add(surface(NXS, k1 - k0, (u, v) => section(stationX(u), sg)[k0 + Math.round(v * (k1 - k0))], [0, 0, sg]), c, I);
    }
  }
  // transom
  const L = section(XS, -1), R = section(XS, 1);
  const TIN = [0, 0.45, 0];
  for (const [k0, k1, c] of BANDS) for (let k = k0; k < k1; k++) mb.face([L[k], R[k], R[k + 1], L[k + 1]], c, TIN);

  // --- decks: crowned rear and fore decks, flat side decks along the cockpit ---
  mb.add(surface(8, 10, (u, v) => { const x = lerp(XS, XB, u), w = v * 2 - 1; return [x, deckY(x) + 0.06 * (1 - w * w), w * deckZ(x)]; }, [0, 1, 0]), col.hull, I);
  mb.add(surface(14, 10, (u, v) => { const x = lerp(XF, XT, u), w = v * 2 - 1; return [x, deckY(x) + 0.13 * (1 - w * w) * (1 - u * u), w * deckZ(x)]; }, [0, 1, 0]), col.hull, I);
  for (const sg of [-1, 1]) {
    mb.add(surface(10, 2, (u, v) => { const x = lerp(XB, XF, u); return [x, deckY(x), sg * lerp(ZI, deckZ(x), v)]; }, [0, 1, 0]), col.hull, I);
  }
  // white deck pinline running back from the bow
  for (const sg of [-1, 1]) {
    const pts: number[][] = [];
    for (let i = 0; i <= 8; i++) { const x = lerp(XF + 0.1, XT - 0.35, i / 8); pts.push([x, deckY(x) + 0.004, sg * deckZ(x) * 0.55]); }
    for (let i = 0; i < pts.length - 1; i++) mb.add(box, 0xf4f4f2, between(pts[i], pts[i + 1], 1).multiply(new THREE.Matrix4().makeScale(0.035, 1, 0.012)));
  }

  // --- cockpit ---
  const CIN = [-0.1, 0.6, 0];
  const YW = 0.86;
  for (const sg of [-1, 1]) mb.face([[XB, FL, sg * ZI], [XF, FL, sg * ZI], [XF, YW, sg * ZI], [XB, YW, sg * ZI]], DARK2, CIN, -1);
  mb.face([[XB, FL, -ZI], [XB, FL, ZI], [XB, 0.92, ZI], [XB, 0.92, -ZI]], DARK2, CIN, -1);
  mb.face([[XF, FL, -ZI], [XF, FL, ZI], [XF, 0.98, ZI], [XF, 0.98, -ZI]], DARK, CIN, -1);
  mb.up([[XB, FL, -ZI], [XF, FL, -ZI], [XF, FL, ZI], [XB, FL, ZI]], DARK);
  // padded coaming
  for (const sg of [-1, 1]) mb.add(rbox(2.2, 0.09, 0.11, 0.04), col.trim, trs(-0.08, 0.875, sg * 0.84));
  mb.add(rbox(0.11, 0.09, 1.78, 0.04), col.trim, trs(XB - 0.02, 0.9, 0));
  // cowl + windscreen
  mb.add(rbox(0.5, 0.22, 1.66, 0.09), col.hull, trs(1.22, 1.02, 0));
  bx(0.98, 1.2, 0, 0.05, 0.34, 1.52, 0x1b2a3a, 0, 0, -0.42);
  for (const sg of [-1, 1]) mb.add(rbox(0.08, 0.38, 0.06, 0.025), col.panel, trs(0.98, 1.2, sg * 0.78, 0, 0, -0.42));
  // console and handlebars
  mb.add(rbox(0.3, 0.52, 1.5, 0.06), DARK, trs(0.84, 0.62, 0));
  for (const z of [-0.42, 0.42]) {
    mb.add(cyl, DARK2, between([0.82, 0.86, z], [0.62, 1.06, z], 0.035));
    mb.add(cyl, 0x111216, between([0.62, 1.06, z - 0.27], [0.62, 1.06, z + 0.27], 0.03));
  }
  // seats
  for (const z of [-0.42, 0.42]) {
    mb.add(rbox(0.62, 0.24, 0.62, 0.08), DARK2, trs(-0.42, 0.36, z));
    mb.add(rbox(0.16, 0.74, 0.6, 0.06), 0x3c3f49, trs(-0.86, 0.72, z, 0, 0, 0.12));
    mb.add(rbox(0.17, 0.09, 0.62, 0.04), col.panel, trs(-0.9, 1.1, z, 0, 0, 0.12));
  }
  // rear deck vents
  for (const sg of [-1, 1]) {
    mb.add(rbox(0.5, 0.05, 0.22, 0.02), col.panel, trs(-2.0, 0.93, sg * 0.42));
    for (const dx of [-0.12, 0, 0.12]) bx(-2.0 + dx, 0.955, sg * 0.42, 0.05, 0.012, 0.16, DARK2);
  }
  // stern jet unit: rounded housing, cap, louvres and a recessed nozzle
  mb.add(rbox(0.46, 0.54, 0.98, 0.1), 0xa7abb5, trs(-2.82, 0.36, 0));
  mb.add(rbox(0.5, 0.08, 1.02, 0.035), 0xc8cbd2, trs(-2.8, 0.66, 0));
  for (const y of [0.47, 0.54]) bx(-3.052, y, 0, 0.012, 0.03, 0.62, 0x2c2f37);
  mb.add(cyl, 0x2c2f37, between([-3.0, 0.26, 0], [-3.1, 0.26, 0], 0.2));
  mb.add(cyl, 0x0d0e12, between([-3.09, 0.26, 0], [-3.111, 0.26, 0], 0.15));
  mb.add(rbox(0.5, 0.12, 0.9, 0.05), DARK, trs(-2.84, 0.06, 0));
  // stern corner steps
  for (const sg of [-1, 1]) {
    mb.add(rbox(0.38, 0.11, 0.42, 0.04), col.panel, trs(-2.78, 0.2, sg * 0.82));
    mb.add(rbox(0.39, 0.04, 0.43, 0.015), col.trim, trs(-2.78, 0.27, sg * 0.82));
  }
  // side plate near the stern, following the topside flare
  for (const sg of [-1, 1]) mb.add(rbox(0.62, 0.2, 0.04, 0.02), col.panel, trs(-1.95, 0.62, sg * 1.16, sg * -0.2));
  // chrome rails: cockpit side rails on three posts, short stern grab rails, bow rail
  for (const sg of [-1, 1]) {
    const z = sg * 0.97;
    tube([[-1.25, 0.88, z], [-1.25, 1.1, z], [0.55, 1.12, z], [0.62, 0.9, z]], 0.032);
    tube([[-0.35, 0.88, z], [-0.35, 1.11, z]], 0.026);
    tube([[-2.45, 0.92, sg * 0.86], [-2.42, 1.08, sg * 0.86], [-1.62, 1.09, sg * 0.86], [-1.58, 0.92, sg * 0.86]], 0.03);
    tube([[1.7, 0.98, sg * 0.86], [1.75, 1.12, sg * 0.82], [2.55, 1.13, sg * 0.36], [2.75, 1.08, 0]], 0.026);
  }
  // bow cleat
  mb.add(rbox(0.22, 0.06, 0.1, 0.02), col.panel, trs(2.62, 1.09, 0));

  // --- crew: port = hairA (spiky), starboard = hairB (swept) ---
  const crew = new MeshBuilder();
  for (const sg of [-1, 1]) {
    const z = sg * 0.42;
    const lean = -0.2;
    const mb = new MeshBuilder();
    bx(-0.3, 0.57, z, 0.56, 0.2, 0.4, 0x1c2f55); // legs
    bx(0.02, 0.5, z, 0.2, 0.34, 0.38, 0x1c2f55);
    mb.add(rbox(0.3, 0.6, 0.46, 0.1), col.shirt, trs(-0.5, 0.95, z, 0, 0, lean));
    mb.add(rbox(0.38, 0.5, 0.52, 0.12), col.vest, trs(-0.5, 0.95, z, 0, 0, lean));
    mb.add(rbox(0.3, 0.12, 0.5, 0.05), col.vest, trs(-0.47, 1.2, z, 0, 0, lean));
    for (const y of [0.84, 1.02]) mb.add(rbox(0.4, 0.045, 0.54, 0.02), 0x2a2c33, trs(-0.5 + (y - 0.95) * 0.2, y, z, 0, 0, lean));
    mb.add(box, 0x2a2c33, trs(-0.69, 0.96, z, 0, 0, lean, 0.02, 0.4, 0.07));
    const sh = [-0.4, 1.19, z];
    for (const a of [-1, 1]) {
      const shoulder = [sh[0], sh[1], z + a * 0.28];
      const elbow = [0.02, 1.02, z + a * 0.3];
      const hand = [0.45, 0.99, z + a * 0.2];
      mb.add(sph, col.shirt, trs(shoulder[0], shoulder[1], shoulder[2], 0, 0, 0, 0.115));
      mb.add(cyl, col.shirt, between(shoulder, [lerp(shoulder[0], elbow[0], 0.45), lerp(shoulder[1], elbow[1], 0.45), lerp(shoulder[2], elbow[2], 0.45)], 0.09));
      mb.add(cyl, SKIN, between([lerp(shoulder[0], elbow[0], 0.4), lerp(shoulder[1], elbow[1], 0.4), lerp(shoulder[2], elbow[2], 0.4)], elbow, 0.07));
      mb.add(cyl, SKIN, between(elbow, hand, 0.065));
      mb.add(sph, 0x1c1d22, trs(hand[0], hand[1], hand[2], 0, 0, 0, 0.085));
    }
    mb.add(cyl, SKIN, between([-0.4, 1.2, z], [-0.37, 1.32, z], 0.075));
    const hx = -0.35, hy = 1.47;
    mb.add(sph, SKIN, trs(hx, hy, z, 0, 0, 0, 0.2, 0.215, 0.195));
    const hair = sg < 0 ? col.hairA : col.hairB;
    mb.add(sph, hair, trs(hx - 0.035, hy + 0.045, z, 0, 0, 0, 0.215, 0.2, 0.215));
    if (sg < 0) {
      // spiky
      const spikes: number[][] = [[-0.5, 0.9, 0], [-0.9, 0.35, 0.3], [-0.9, 0.35, -0.3], [-0.2, 1, 0.35], [-0.2, 1, -0.35], [0.25, 0.95, 0], [-1, 0, 0], [-0.6, 0.6, 0.7], [-0.6, 0.6, -0.7]];
      for (const d of spikes) {
        const l = Math.hypot(d[0], d[1], d[2]);
        const n = [d[0] / l, d[1] / l, d[2] / l];
        const b0 = [hx - 0.03 + n[0] * 0.13, hy + 0.05 + n[1] * 0.13, z + n[2] * 0.13];
        mb.add(cone, hair, between(b0, [b0[0] + n[0] * 0.2, b0[1] + n[1] * 0.2, b0[2] + n[2] * 0.2], 0.085));
      }
    } else {
      // swept back
      const locks: number[][] = [[-1, 0.5, 0.25], [-1, 0.6, -0.2], [-0.9, 0.85, 0.05], [-1, 0.25, -0.45], [-0.3, 1, 0.2], [0.35, 0.9, -0.1]];
      for (const d of locks) {
        const l = Math.hypot(d[0], d[1], d[2]);
        const n = [d[0] / l, d[1] / l, d[2] / l];
        const b0 = [hx - 0.02 + n[0] * 0.12, hy + 0.06 + n[1] * 0.12, z + n[2] * 0.12];
        mb.add(cone, hair, between(b0, [b0[0] + n[0] * 0.26, b0[1] + n[1] * 0.26, b0[2] + n[2] * 0.26], 0.1));
      }
    }
    // stylised proportions: crew read larger than life, scaled about the seat
    const k = 1.2;
    crew.append(mb, new THREE.Matrix4().makeTranslation(0, 0, z).multiply(new THREE.Matrix4().makeScale(k, k, k)).multiply(new THREE.Matrix4().makeTranslation(0.42, -0.46, -z)));
  }
  return { hull: mb.build(), crew: crew.build(), chrome: chrome.build() };
}

function badgeTexture(bg: string) {
  return canvasTexture(256, 140, (g) => {
    g.fillStyle = bg;
    g.fillRect(0, 0, 256, 140);
    g.lineWidth = 10;
    g.strokeStyle = '#fff6ea';
    g.beginPath();
    g.roundRect(14, 14, 228, 112, 20);
    g.stroke();
    g.fillStyle = '#fff6ea';
    g.font = '900 78px Nunito, Arial Black, sans-serif';
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillText('JET', 128, 74);
  });
}

export interface BoatPose { x: number; y: number; z: number; heading: number; speed: number; steer: number; vy: number; grounded: boolean; throttle: number; boosting: boolean }

export class BoatView {
  root = new THREE.Group();
  body = new THREE.Group();
  mesh: THREE.Mesh;
  crew: THREE.Mesh;
  private lean = 0; private brace = 0;
  pitch = 0;
  roll = 0;
  lift = 0;
  sheets: SpraySheets | null = null;
  private ampL = 0; private ampR = 0; private ampT = 0;
  private phase: number;

  constructor(col: BoatColors, id: number) {
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.4, metalness: 0.0 });
    const geo = buildBoatGeometry(col);
    this.mesh = new THREE.Mesh(geo.hull, mat);
    this.crew = new THREE.Mesh(geo.crew, mat);
    const rails = new THREE.Mesh(geo.chrome, new THREE.MeshStandardMaterial({ color: 0xdfe4ec, metalness: 0.85, roughness: 0.22, envMapIntensity: 1.4 }));
    rails.castShadow = true;
    this.crew.castShadow = true;
    this.crew.position.set(-0.42, 0.46, 0); // seat pivot
    this.crew.rotation.order = 'ZXY';
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    // stubbier, taller silhouette than the authored stations: closer to the reference hull
    this.body.scale.set(0.9, 1.12, 1.08);
    this.body.add(this.mesh, this.crew, rails);
    const badge = new THREE.Mesh(
      new THREE.PlaneGeometry(0.52, 0.29),
      new THREE.MeshStandardMaterial({ map: badgeTexture(col.badgeBg), roughness: 0.5 }),
    );
    badge.position.set(-2.612, 0.55, -0.79);
    badge.rotation.y = -Math.PI / 2;
    this.body.add(badge);
    this.body.rotation.order = 'YZX';
    this.root.add(this.body);
    this.phase = id * 1.7;
  }

  addSheets(noiseTex: THREE.Texture) {
    this.sheets = new SpraySheets(noiseTex);
    this.root.add(this.sheets.mesh);
  }

  update(p: BoatPose, dt: number, t: number) {
    const sp = clamp(p.speed / 30, 0, 1.4);
    const tp = p.grounded
      ? 0.05 + 0.09 * Math.min(1, sp) + 0.05 * p.throttle * (1 - Math.min(1, sp) * 0.5) + (p.boosting ? 0.04 : 0)
      : clamp(p.vy * 0.04, -0.45, 0.4);
    this.pitch = damp(this.pitch, tp, p.grounded ? 6 : 4, dt);
    this.roll = damp(this.roll, p.steer * 0.27 * clamp(p.speed / 18, 0, 1), 6, dt);
    this.lift = damp(this.lift, p.grounded ? 0.1 * Math.min(1, sp) : 0.1, 4, dt);
    const chop = p.grounded ? Math.sin(t * 12.7 + this.phase) * 0.012 * sp + Math.sin(t * 7.3 + this.phase * 2) * 0.01 * sp : 0;
    const bob = Math.sin(t * 1.9 + this.phase) * 0.045 * (1 - Math.min(1, sp) * 0.6);
    this.root.position.set(p.x, p.y + this.lift + bob, p.z);
    this.body.rotation.set(this.roll + Math.sin(t * 1.3 + this.phase) * 0.012, -p.heading, this.pitch + chop);
    // crew lean into turns and brace against throttle, landings and chop
    this.lean = damp(this.lean, p.steer * 0.2 * clamp(p.speed / 15, 0, 1), 5, dt);
    this.brace = damp(this.brace, p.grounded ? 0.07 * p.throttle + (p.boosting ? 0.1 : 0) : -0.12, 5, dt);
    this.crew.rotation.set(this.lean, 0, this.brace + chop * 1.5);
    if (this.sheets) {
      const on = p.grounded ? clamp((p.speed - 4) / 22, 0, 1.15) : 0;
      // the outside of a turn throws the bigger sheet
      this.ampL = damp(this.ampL, on * (1 + clamp(p.steer, -0.6, 1) * 0.55), 7, dt);
      this.ampR = damp(this.ampR, on * (1 + clamp(-p.steer, -0.6, 1) * 0.55), 7, dt);
      this.ampT = damp(this.ampT, on * (0.55 + 0.45 * p.throttle) * (p.boosting ? 1.35 : 1), 6, dt);
      this.sheets.mesh.rotation.y = -p.heading;
      this.sheets.mesh.position.y = -this.lift;
      this.sheets.update(t, this.ampL, this.ampR, this.ampT);
    }
  }
}
