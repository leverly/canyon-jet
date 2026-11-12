import * as THREE from 'three';
import { clamp, damp, lerp } from '../core/math';
import { PAL } from './env';
import { SpraySheets } from './fx';
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

interface Station { x: number; yk: number; yc: number; bc: number; yg: number; bg: number }
const ST: Station[] = [
  { x: -2.6, yk: -0.22, yc: 0.12, bc: 0.98, yg: 0.80, bg: 1.14 },
  { x: -0.2, yk: -0.26, yc: 0.12, bc: 1.05, yg: 0.82, bg: 1.20 },
  { x: 1.5, yk: -0.22, yc: 0.18, bc: 0.92, yg: 0.86, bg: 1.08 },
  { x: 2.5, yk: -0.05, yc: 0.34, bc: 0.50, yg: 0.93, bg: 0.62 },
];
const STRIPE = 0.17;

function stationAt(x: number): Station {
  for (let i = 0; i < ST.length - 1; i++) {
    if (x <= ST[i + 1].x) {
      const a = ST[i], b = ST[i + 1];
      const t = clamp((x - a.x) / (b.x - a.x), 0, 1);
      return { x, yk: lerp(a.yk, b.yk, t), yc: lerp(a.yc, b.yc, t), bc: lerp(a.bc, b.bc, t), yg: lerp(a.yg, b.yg, t), bg: lerp(a.bg, b.bg, t) };
    }
  }
  return ST[ST.length - 1];
}
const K = (s: Station) => [s.x, s.yk, 0];
const C = (s: Station, sg: number) => [s.x, s.yc, sg * s.bc];
const T = (s: Station, sg: number) => [s.x, s.yc + STRIPE, sg * (s.bc + ((s.bg - s.bc) * STRIPE) / (s.yg - s.yc))];
const G = (s: Station, sg: number) => [s.x, s.yg, sg * s.bg];
const gun = (x: number, sg: number) => G(stationAt(x), sg);

function buildBoatGeometry(col: BoatColors) {
  const mb = new MeshBuilder();
  const IN = [0, 0.45, 0];
  const box = new THREE.BoxGeometry(1, 1, 1);
  const cyl = new THREE.CylinderGeometry(1, 1, 1, 8);
  const cone = new THREE.ConeGeometry(1, 1, 6);
  const sph = new THREE.SphereGeometry(1, 14, 10);
  const bx = (x: number, y: number, z: number, sx: number, sy: number, sz: number, color: number, rx = 0, ry = 0, rz = 0) =>
    mb.add(box, color, trs(x, y, z, rx, ry, rz, sx, sy, sz));

  // --- hull shell ---
  const TIPC = [3.0, 0.62, 0], TIPT = [3.04, 0.74, 0], TIPG = [3.2, 1.0, 0];
  for (const sg of [-1, 1]) {
    for (let i = 0; i < ST.length - 1; i++) {
      const a = ST[i], b = ST[i + 1];
      mb.face([K(a), K(b), C(b, sg), C(a, sg)], DARK, IN);
      mb.face([C(a, sg), C(b, sg), T(b, sg), T(a, sg)], col.trim, IN);
      mb.face([T(a, sg), T(b, sg), G(b, sg), G(a, sg)], col.hull, IN);
    }
    const l = ST[ST.length - 1];
    mb.face([K(l), TIPC, C(l, sg)], DARK, IN);
    mb.face([C(l, sg), TIPC, TIPT, T(l, sg)], col.trim, IN);
    mb.face([T(l, sg), TIPT, TIPG, G(l, sg)], col.hull, IN);
  }
  // transom
  const s0 = ST[0];
  mb.face([G(s0, -1), G(s0, 1), C(s0, 1), C(s0, -1)], col.hull, IN);
  mb.face([C(s0, -1), C(s0, 1), K(s0)], DARK, IN);

  // --- decks ---
  const XB = -1.15, XF = 1.0, ZI = 0.82, FL = 0.24, YG = 0.83;
  mb.up([gun(-2.6, 1), gun(XB, 1), gun(XB, -1), gun(-2.6, -1)], col.hull);
  for (const sg of [-1, 1]) {
    for (const [xa, xb] of [[XB, -0.2], [-0.2, XF]]) {
      mb.up([gun(xa, sg), gun(xb, sg), [xb, stationAt(xb).yg, sg * ZI], [xa, stationAt(xa).yg, sg * ZI]], col.hull);
    }
    const g2 = gun(1.5, sg), g3 = gun(2.5, sg);
    mb.up([g2, g3, [2.5, 1.0, 0], [1.5, 0.94, 0]], col.hullLight);
    mb.up([g3, TIPG, [2.5, 1.0, 0]], col.hullLight);
  }
  mb.up([gun(XF, 1), gun(1.5, 1), [1.5, 0.94, 0], [XF, 0.9, 0]], col.hull);
  mb.up([gun(XF, -1), gun(1.5, -1), [1.5, 0.94, 0], [XF, 0.9, 0]], col.hull);

  // --- cockpit ---
  const CIN = [-0.1, 0.6, 0];
  for (const sg of [-1, 1]) mb.face([[XB, FL, sg * ZI], [XF, FL, sg * ZI], [XF, YG, sg * ZI], [XB, YG, sg * ZI]], DARK2, CIN, -1);
  mb.face([[XB, FL, -ZI], [XB, FL, ZI], [XB, YG, ZI], [XB, YG, -ZI]], DARK2, CIN, -1);
  mb.face([[XF, FL, -ZI], [XF, FL, ZI], [XF, 0.9, ZI], [XF, 0.9, -ZI]], DARK, CIN, -1);
  mb.up([[XB, FL, -ZI], [XF, FL, -ZI], [XF, FL, ZI], [XB, FL, ZI]], DARK);
  // coaming trim
  for (const sg of [-1, 1]) bx(-0.08, 0.875, sg * 0.84, 2.2, 0.07, 0.07, col.trim);
  bx(XB - 0.02, 0.875, 0, 0.07, 0.07, 1.74, col.trim);
  // cowl + windscreen
  mb.add(box, col.hull, trs(1.22, 1.02, 0, 0, 0, 0.0, 0.46, 0.2, 1.7));
  bx(0.98, 1.2, 0, 0.06, 0.36, 1.58, 0x1b2a3a, 0, 0, -0.42);
  bx(0.91, 1.37, 0, 0.07, 0.05, 1.62, col.trim, 0, 0, -0.42);
  // console and handlebars
  bx(0.84, 0.62, 0, 0.3, 0.5, 1.5, DARK);
  for (const z of [-0.42, 0.42]) {
    mb.add(cyl, DARK2, between([0.82, 0.86, z], [0.62, 1.06, z], 0.035));
    mb.add(cyl, 0x111216, between([0.62, 1.06, z - 0.27], [0.62, 1.06, z + 0.27], 0.03));
  }
  // seats
  for (const z of [-0.42, 0.42]) {
    bx(-0.42, 0.36, z, 0.62, 0.24, 0.62, DARK2);
    bx(-0.86, 0.72, z, 0.16, 0.74, 0.6, 0x3c3f49, 0, 0, 0.12);
    bx(-0.9, 1.1, z, 0.17, 0.08, 0.62, col.panel, 0, 0, 0.12);
  }
  // engine hatch on the rear deck
  bx(-1.86, 0.87, 0, 1.06, 0.12, 1.3, col.hullLight);
  for (const z of [-0.3, 0, 0.3]) bx(-1.86, 0.935, z, 0.56, 0.02, 0.12, DARK2);
  // stern jet housing
  bx(-2.76, 0.36, 0, 0.4, 0.5, 0.94, col.panel);
  bx(-2.74, 0.63, 0, 0.36, 0.06, 0.78, 0xe6e6ea);
  bx(-2.975, 0.33, 0, 0.05, 0.36, 0.7, 0x15161a);
  bx(-2.99, 0.31, 0, 0.1, 0.2, 0.36, 0x2c2f37);
  bx(-2.8, 0.06, 0, 0.42, 0.12, 0.88, DARK);
  // stern corner steps
  for (const sg of [-1, 1]) {
    bx(-2.74, 0.21, sg * 0.82, 0.36, 0.1, 0.46, col.panel);
    bx(-2.74, 0.275, sg * 0.82, 0.37, 0.035, 0.47, col.trim);
  }
  // side plates and grab rails
  for (const sg of [-1, 1]) {
    bx(-1.75, 0.56, sg * 1.125, 0.62, 0.2, 0.035, col.panel, sg * -0.23);
    bx(0.55, 0.6, sg * 1.165, 0.5, 0.16, 0.035, col.panel, sg * -0.22);
    const zr = sg * 0.98;
    mb.add(cyl, col.panel, between([-2.35, 0.8, zr], [-2.3, 1.06, zr], 0.035));
    mb.add(cyl, col.panel, between([-1.4, 0.82, zr + sg * 0.05], [-1.45, 1.08, zr + sg * 0.05], 0.035));
    mb.add(cyl, col.panel, between([-2.32, 1.06, zr], [-1.43, 1.08, zr + sg * 0.05], 0.04));
    mb.add(cyl, col.trim, between([-1.5, 1.08, zr + sg * 0.05], [-1.36, 1.08, zr + sg * 0.05], 0.055));
  }
  // bow cleat
  bx(2.75, 1.0, 0, 0.22, 0.06, 0.1, col.panel);

  // --- crew: port = hairA (spiky), starboard = hairB (swept) ---
  const crew = new MeshBuilder();
  for (const sg of [-1, 1]) {
    const z = sg * 0.42;
    const lean = -0.2;
    const mb = new MeshBuilder();
    bx(-0.3, 0.57, z, 0.56, 0.2, 0.4, 0x1c2f55); // legs
    bx(0.02, 0.5, z, 0.2, 0.34, 0.38, 0x1c2f55);
    mb.add(box, col.shirt, trs(-0.5, 0.95, z, 0, 0, lean, 0.3, 0.6, 0.46));
    mb.add(box, col.vest, trs(-0.5, 0.95, z, 0, 0, lean, 0.38, 0.5, 0.52));
    for (const y of [0.84, 1.02]) mb.add(box, 0x2a2c33, trs(-0.5 + (y - 0.95) * 0.2, y, z, 0, 0, lean, 0.395, 0.045, 0.535));
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
  return { hull: mb.build(), crew: crew.build() };
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
    this.crew.castShadow = true;
    this.crew.position.set(-0.42, 0.46, 0); // seat pivot
    this.crew.rotation.order = 'ZXY';
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    // stubbier, taller silhouette than the authored stations: closer to the reference hull
    this.body.scale.set(0.9, 1.12, 1.08);
    this.body.add(this.mesh, this.crew);
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
