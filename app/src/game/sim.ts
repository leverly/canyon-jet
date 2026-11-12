import { clamp, damp, wrapAngle } from '../core/math';
import { Course, GRAV, groundY, lineLat, locate, posAt, sampleTrack, waterY } from './course';

export interface Input { steer: number; throttle: number; brake: number; boost: boolean; reset: boolean }
export const NO_INPUT: Input = { steer: 0, throttle: 0, brake: 0, boost: false, reset: false };

export type Phase = 'grid' | 'countdown' | 'racing' | 'finished';

export interface Boat {
  id: number; isPlayer: boolean; name: string;
  x: number; z: number; y: number;
  vx: number; vz: number; vy: number;
  heading: number; yawRate: number; steer: number; throttle: number;
  speed: number; // forward speed m/s
  s: number; lat: number; idx: number; maxS: number;
  grounded: boolean; airTime: number;
  boosting: boolean; surge: number;
  finished: boolean; finishTime: number;
  skill: number; latBias: number; latV: number;
}

export type GameEvent =
  | { type: 'countdown'; n: number }
  | { type: 'go' }
  | { type: 'gate'; id: number; passed: boolean; points: number }
  | { type: 'sun'; id: number; points: number }
  | { type: 'pad'; id: number; boat: number }
  | { type: 'land'; boat: number; power: number; airTime: number; points: number }
  | { type: 'launch'; boat: number }
  | { type: 'hit'; boat: number; kind: 'rock' | 'bank' | 'boat' | 'ramp'; power: number }
  | { type: 'nearmiss'; points: number }
  | { type: 'reset' }
  | { type: 'finish'; boat: number; place: number }
  | { type: 'dnf' };

export const TUNE = {
  dt: 1 / 120,
  vmax: 33, vboost: 44, acc: 15, brake: 22, reverse: 8, drag: 0.05,
  grip: 4.2, turn: 1.45, hullR: 1.25,
  boostDrain: 0.34, surgeTime: 1.7,
  timeLimit: 300,
  rivalBase: 33.5,
};

export interface RaceState {
  phase: Phase; t: number; countdown: number; clock: number; penalty: number;
  score: number; combo: number; boostMeter: number;
  nextGate: number; gatesPassed: number; gatesMissed: number;
  sunsTaken: Uint8Array; sunCount: number;
  padCooldown: Float32Array;
  nearDone: Uint8Array;
  stuckT: number; wrongWayT: number; resetCooldown: number;
  place: number; dnf: boolean; bestAir: number;
  bonus: { place: number; time: number };
}

const RIVALS = [
  { name: 'MARA', skill: 1.0, bias: -2.2 },
  { name: 'KODA', skill: 0.955, bias: 2.4 },
  { name: 'IVY', skill: 0.91, bias: -0.6 },
];

export class Race {
  readonly course: Course;
  boats: Boat[] = [];
  st!: RaceState;
  events: GameEvent[] = [];

  constructor(course: Course) {
    this.course = course;
    this.reset();
  }

  get player() { return this.boats[0]; }

  reset() {
    const c = this.course;
    this.boats = [];
    for (let i = 0; i < 4; i++) {
      const g = c.grid[i];
      const p = posAt(c, g.s, g.lat);
      const r = RIVALS[i - 1];
      // Player starts on the second row so there is something to chase.
      this.boats.push({
        id: i, isPlayer: i === 0, name: i === 0 ? 'YOU' : r.name,
        x: p.x, z: p.z, y: p.wy, vx: 0, vz: 0, vy: 0,
        heading: Math.atan2(p.tz, p.tx), yawRate: 0, steer: 0, throttle: 0, speed: 0,
        s: g.s, lat: g.lat, idx: Math.round(g.s / 2), maxS: g.s,
        grounded: true, airTime: 0, boosting: false, surge: 0,
        finished: false, finishTime: 0,
        skill: r ? r.skill : 1, latBias: r ? r.bias : 0, latV: 0,
      });
    }
    // swap so the player sits at grid slot 2 (second row, left)
    const swap = (a: Boat, slot: number) => {
      const g = c.grid[slot];
      const p = posAt(c, g.s, g.lat);
      a.x = p.x; a.z = p.z; a.y = p.wy; a.s = g.s; a.lat = g.lat; a.maxS = g.s; a.idx = Math.round(g.s / 2);
      a.heading = Math.atan2(p.tz, p.tx);
    };
    swap(this.boats[0], 2);
    swap(this.boats[1], 0);
    swap(this.boats[2], 1);
    swap(this.boats[3], 3);
    this.st = {
      phase: 'grid', t: 0, countdown: 3, clock: 0, penalty: 0,
      score: 0, combo: 1, boostMeter: 0.35,
      nextGate: 0, gatesPassed: 0, gatesMissed: 0,
      sunsTaken: new Uint8Array(c.suns.length), sunCount: 0,
      padCooldown: new Float32Array(c.pads.length * 4),
      nearDone: new Uint8Array(c.rocks.length),
      stuckT: 0, wrongWayT: 0, resetCooldown: 0,
      place: 4, dnf: false, bestAir: 0,
      bonus: { place: 0, time: 0 },
    };
    this.events = [];
  }

  start() {
    if (this.st.phase === 'grid') {
      this.st.phase = 'countdown';
      this.st.countdown = 3;
      this.events.push({ type: 'countdown', n: 3 });
    }
  }

  /** Total race time shown on the HUD (clock + penalties). */
  get time() { return this.st.clock + this.st.penalty; }

  placeOf(b: Boat) {
    let place = 1;
    for (const o of this.boats) {
      if (o === b) continue;
      if (o.finished && (!b.finished || o.finishTime < b.finishTime)) place++;
      else if (!o.finished && !b.finished && o.maxS > b.maxS) place++;
    }
    return place;
  }

  step(dt: number, input: Input) {
    const st = this.st;
    st.t += dt;
    if (st.phase === 'grid') return;
    if (st.phase === 'countdown') {
      const before = Math.ceil(st.countdown);
      st.countdown -= dt;
      const after = Math.ceil(st.countdown);
      if (st.countdown <= 0) {
        st.phase = 'racing';
        this.events.push({ type: 'go' });
      } else if (after !== before) this.events.push({ type: 'countdown', n: after });
      // allow revving on the grid
      this.player.throttle = input.throttle;
      return;
    }
    if (st.phase === 'racing') {
      st.clock += dt;
      if (this.time >= TUNE.timeLimit) {
        st.phase = 'finished';
        st.dnf = true;
        st.place = this.placeOf(this.player);
        this.events.push({ type: 'dnf' });
      }
    }
    for (let i = 0; i < st.padCooldown.length; i++) if (st.padCooldown[i] > 0) st.padCooldown[i] -= dt;
    if (st.resetCooldown > 0) st.resetCooldown -= dt;

    const racing = st.phase === 'racing';
    this.stepPlayer(dt, racing ? input : this.coastInput());
    for (let i = 1; i < this.boats.length; i++) this.stepRival(this.boats[i], dt);
    this.collideBoats();
    if (racing) {
      this.resolveCourse(input, dt);
      st.place = this.placeOf(this.player);
    }
  }

  private coastInput(): Input {
    // After the finish the boat eases off and holds the lagoon centre.
    const p = this.player;
    const c = this.course;
    const tgt = posAt(c, Math.min(c.endS - 30, p.s + 30), 0);
    const want = Math.atan2(tgt.z - p.z, tgt.x - p.x);
    const err = wrapAngle(want - p.heading);
    const near = p.s > c.endS - 70;
    return { steer: clamp(err * 2, -1, 1), throttle: near ? 0 : 0.25, brake: near && p.speed > 1 ? 1 : 0, boost: false, reset: false };
  }

  private stepPlayer(dt: number, input: Input) {
    const c = this.course;
    const b = this.player;
    const st = this.st;
    const prevS = b.s;
    const wasGrounded = b.grounded;

    b.steer = damp(b.steer, clamp(input.steer, -1, 1), Math.abs(input.steer) > Math.abs(b.steer) ? 7 : 10, dt);
    b.throttle = clamp(input.throttle, 0, 1);
    if (b.surge > 0) b.surge -= dt;
    const wantBoost = input.boost && st.boostMeter > 0 && st.phase === 'racing';
    if (wantBoost) st.boostMeter = Math.max(0, st.boostMeter - TUNE.boostDrain * dt);
    b.boosting = wantBoost || b.surge > 0;

    const fx = Math.cos(b.heading);
    const fz = Math.sin(b.heading);
    const rx = -fz;
    const rz = fx;
    let vf = b.vx * fx + b.vz * fz;
    let vl = b.vx * rx + b.vz * rz;

    if (b.grounded) {
      const top = b.boosting ? TUNE.vboost : TUNE.vmax;
      let af = b.throttle * TUNE.acc * (b.boosting ? 1.7 : 1) * Math.max(0, 1 - vf / top);
      if (b.boosting && b.throttle < 0.2) af += TUNE.acc * 1.2 * Math.max(0, 1 - vf / top);
      if (input.brake > 0) af -= vf > 0.5 ? TUNE.brake * input.brake : TUNE.reverse * input.brake * Math.max(0, 1 + vf / 9);
      af -= (TUNE.drag + 0.45 * (1 - Math.max(b.throttle, b.boosting ? 1 : 0))) * vf;
      if (vf > top) af -= (vf - top) * 1.4;
      vf += af * dt;
      const grip = TUNE.grip - 1.6 * Math.abs(b.steer) * clamp(vf / 30, 0, 1);
      vl *= Math.exp(-grip * dt);
      const sf = clamp(vf / 9, -1, 1) * (1 - 0.32 * clamp((Math.abs(vf) - 20) / 24, 0, 1));
      b.yawRate = damp(b.yawRate, b.steer * TUNE.turn * sf, 7, dt);
    } else {
      vf *= Math.exp(-0.04 * dt);
      b.yawRate = damp(b.yawRate, b.steer * 0.45, 2, dt);
    }
    b.vx = fx * vf + rx * vl;
    b.vz = fz * vf + rz * vl;
    b.heading = wrapAngle(b.heading + b.yawRate * dt);
    b.speed = vf;

    // river current
    let cx = 0;
    let cz = 0;
    if (b.grounded) {
      const flow = 1.2 + 2.2 * clamp(-(c.wy[Math.min(c.n - 1, b.idx + 3)] - c.wy[b.idx]) / 0.25, 0, 1);
      cx = c.tx[b.idx] * flow;
      cz = c.tz[b.idx] * flow;
    }

    const ox = b.x;
    const oz = b.z;
    b.x += (b.vx + cx) * dt;
    b.z += (b.vz + cz) * dt;

    // rocks (swept against the step segment)
    for (const r of c.rocks) {
      const R = r.r + TUNE.hullR * 0.85;
      const dx0 = b.x - r.x;
      const dz0 = b.z - r.z;
      if (Math.abs(dx0) > R + 1 || Math.abs(dz0) > R + 1) {
        if (!st.nearDone[r.id] && st.phase === 'racing' && Math.abs(r.s - b.s) < 1.2 && Math.abs(b.lat - r.lat) < r.r + 4 && vf > 18 && b.grounded) {
          st.nearDone[r.id] = 1;
          const pts = 150 * st.combo;
          st.score += pts;
          this.events.push({ type: 'nearmiss', points: pts });
        }
        continue;
      }
      if (b.y > waterY(c, r.s) + r.h) continue;
      // closest point of the step segment to the rock centre
      const sx = b.x - ox;
      const sz = b.z - oz;
      const sl = sx * sx + sz * sz || 1e-9;
      const tt = clamp(((r.x - ox) * sx + (r.z - oz) * sz) / sl, 0, 1);
      const qx = ox + sx * tt;
      const qz = oz + sz * tt;
      let nx = qx - r.x;
      let nz = qz - r.z;
      const d = Math.hypot(nx, nz);
      if (d >= R) continue;
      if (d < 1e-4) { nx = -fx; nz = -fz; } else { nx /= d; nz /= d; }
      b.x = r.x + nx * R;
      b.z = r.z + nz * R;
      const vn = b.vx * nx + b.vz * nz;
      if (vn < 0) {
        b.vx -= 1.35 * vn * nx;
        b.vz -= 1.35 * vn * nz;
        b.vx *= 0.82;
        b.vz *= 0.82;
        if (-vn > 2) {
          this.events.push({ type: 'hit', boat: 0, kind: 'rock', power: -vn });
          st.combo = 1;
          st.nearDone[r.id] = 1;
        }
      }
    }

    // track coordinates and banks
    let loc = locate(c, b.x, b.z, b.idx);
    b.idx = loc.i;
    const tr = sampleTrack(c, loc.s);
    const lim = tr.hw - TUNE.hullR;
    if (Math.abs(loc.lat) > lim) {
      const sign = Math.sign(loc.lat);
      const nx = -c.tz[b.idx] * sign;
      const nz = c.tx[b.idx] * sign;
      const over = Math.abs(loc.lat) - lim;
      b.x -= nx * over;
      b.z -= nz * over;
      const vn = b.vx * nx + b.vz * nz;
      if (vn > 0) {
        b.vx -= 1.25 * vn * nx;
        b.vz -= 1.25 * vn * nz;
        const loss = clamp(vn * 0.02, 0, 0.25);
        b.vx *= 1 - loss;
        b.vz *= 1 - loss;
        // nose back toward the channel so thrust does not pin the hull to the wall
        const tang = Math.atan2(c.tz[b.idx], c.tx[b.idx]);
        b.heading = wrapAngle(b.heading + wrapAngle(tang - b.heading) * clamp(vn * 0.03, 0, 0.5));
        if (vn > 2.5) {
          this.events.push({ type: 'hit', boat: 0, kind: 'bank', power: vn });
          if (vn > 5) st.combo = 1;
        }
      }
      loc = locate(c, b.x, b.z, b.idx);
      b.idx = loc.i;
    }
    // course ends
    if (loc.s > c.endS) {
      b.x -= c.tx[b.idx] * (loc.s - c.endS);
      b.z -= c.tz[b.idx] * (loc.s - c.endS);
      const vt = b.vx * c.tx[b.idx] + b.vz * c.tz[b.idx];
      if (vt > 0) { b.vx -= vt * c.tx[b.idx]; b.vz -= vt * c.tz[b.idx]; }
      loc = locate(c, b.x, b.z, b.idx);
    } else if (loc.s < 6) {
      b.x += c.tx[b.idx] * (6 - loc.s);
      b.z += c.tz[b.idx] * (6 - loc.s);
      const vt = b.vx * c.tx[b.idx] + b.vz * c.tz[b.idx];
      if (vt < 0) { b.vx -= vt * c.tx[b.idx]; b.vz -= vt * c.tz[b.idx]; }
      loc = locate(c, b.x, b.z, b.idx);
    }

    // ramp side walls: sliding into the flank of a ramp is a collision, not a teleport
    for (const r of c.ramps) {
      if (loc.s > r.s0 + 1.5 && loc.s < r.s1 && Math.abs(loc.lat - r.lat) < r.half) {
        const lift = ((loc.s - r.s0) / (r.s1 - r.s0)) * r.height;
        if (b.y < waterY(c, loc.s) + lift - 0.9) {
          const sign = Math.sign(loc.lat - r.lat) || 1;
          const push = r.half - Math.abs(loc.lat - r.lat) + 0.05;
          b.x += -c.tz[b.idx] * sign * push;
          b.z += c.tx[b.idx] * sign * push;
          const nx = -c.tz[b.idx] * sign;
          const nz = c.tx[b.idx] * sign;
          const vn = b.vx * nx + b.vz * nz;
          if (vn < 0) { b.vx -= 1.3 * vn * nx; b.vz -= 1.3 * vn * nz; this.events.push({ type: 'hit', boat: 0, kind: 'ramp', power: -vn }); }
          loc = locate(c, b.x, b.z, b.idx);
        }
      }
    }
    b.s = loc.s;
    b.lat = loc.lat;
    if (b.s > b.maxS) b.maxS = b.s;

    this.stepVertical(b, dt, prevS, wasGrounded);
  }

  private stepVertical(b: Boat, dt: number, prevS: number, wasGrounded: boolean) {
    const c = this.course;
    const g = groundY(c, b.s, b.lat);
    const gPrev = groundY(c, prevS, b.lat);
    b.vy -= GRAV * dt;
    b.y += b.vy * dt;
    if (b.y <= g) {
      const rise = (g - gPrev) / dt;
      const impact = -b.vy;
      b.y = g;
      b.vy = Math.max(0, Math.min(rise, 8.5));
      if (rise <= 0) b.vy = 0;
      if (b.airTime > 0.3) {
        let pts = 0;
        if (b.isPlayer && this.st.phase === 'racing') {
          pts = Math.round(b.airTime * 4) * 100 * this.st.combo;
          this.st.score += pts;
          this.st.bestAir = Math.max(this.st.bestAir, b.airTime);
        }
        this.events.push({ type: 'land', boat: b.id, power: impact, airTime: b.airTime, points: pts });
        if (b.isPlayer) { b.vx *= 0.96; b.vz *= 0.96; }
      }
      b.grounded = true;
      b.airTime = 0;
    } else if (b.y - g > 0.12) {
      if (wasGrounded && b.y - g > 0.25) this.events.push({ type: 'launch', boat: b.id });
      b.grounded = b.airTime === 0 && b.y - g < 0.25 && b.vy <= 0.5;
      if (!b.grounded) b.airTime += dt;
    } else {
      b.grounded = true;
    }
  }

  private rivalTargetLat(b: Boat, look: number) {
    const c = this.course;
    const s = b.s + look;
    const hw = sampleTrack(c, s).hw;
    let t = clamp(lineLat(c, s) + b.latBias, -(hw - 3), hw - 3);
    for (const r of c.ramps) {
      if (r.s0 - b.s > -2 && r.s0 - b.s < 60) {
        if (Math.abs(t - r.lat) < r.half + 2.2) t = r.lat; // commit to the ramp
      }
    }
    for (const r of c.rocks) {
      const ds = r.s - b.s;
      if (ds < -3 || ds > 45) continue;
      const clear = r.r + 2.6;
      if (Math.abs(t - r.lat) < clear) {
        const side = b.lat >= r.lat ? 1 : -1;
        let cand = r.lat + side * clear;
        if (Math.abs(cand) > hw - 2.5) cand = r.lat - side * clear;
        t = cand;
      }
    }
    return t;
  }

  private stepRival(b: Boat, dt: number) {
    const c = this.course;
    const st = this.st;
    const p = this.player;
    const prevS = b.s;
    const wasGrounded = b.grounded;
    const tr = sampleTrack(c, b.s);
    let target = TUNE.rivalBase * b.skill * (1 - 0.22 * Math.min(1, Math.abs(tr.curv) * 70));
    // rubber band keeps the pack in sight without teleporting anyone
    const gap = b.s - p.s;
    target *= 1 - 0.1 * clamp((gap - 40) / 120, 0, 1) + 0.1 * clamp((-gap - 40) / 120, 0, 1);
    if (b.surge > 0) { b.surge -= dt; target += 7; }
    if (b.finished) target = b.s > c.endS - 90 ? 0 : 9;
    if (st.phase !== 'racing' && !b.finished && st.phase !== 'finished') target = 0;
    if (b.grounded) b.speed += clamp(target - b.speed, -9 * dt, (4 + 9 * clamp(1 - b.speed / Math.max(1, target), 0, 1)) * dt);
    b.throttle = target > b.speed - 0.5 ? 1 : 0.3;
    b.boosting = b.surge > 0;

    const tl = this.rivalTargetLat(b, 14);
    const want = clamp((tl - b.lat) * 1.6, -7, 7) * clamp(b.speed / 12, 0, 1);
    b.latV = damp(b.latV, want, 4, dt);
    b.lat += b.latV * dt;
    const lim = tr.hw - TUNE.hullR;
    b.lat = clamp(b.lat, -lim, lim);
    b.s = Math.min(c.endS - 4 - b.id * 7, b.s + b.speed * dt);
    if (b.s > b.maxS) b.maxS = b.s;
    const pos = posAt(c, b.s, b.lat);
    b.vx = (pos.x - b.x) / dt;
    b.vz = (pos.z - b.z) / dt;
    b.x = pos.x;
    b.z = pos.z;
    b.idx = Math.round(b.s / 2);
    const tang = Math.atan2(pos.tz, pos.tx);
    const hNew = tang + Math.atan2(b.latV, Math.max(6, b.speed));
    b.yawRate = damp(b.yawRate, wrapAngle(hNew - b.heading) / dt, 6, dt);
    b.steer = clamp(b.yawRate / 1.1, -1, 1);
    b.heading = hNew;

    for (const pad of c.pads) {
      const k = pad.id * 4 + b.id;
      if (b.grounded && st.padCooldown[k] <= 0 && b.s >= pad.s0 && b.s <= pad.s1 && Math.abs(b.lat - pad.lat) <= pad.half) {
        st.padCooldown[k] = 3;
        b.surge = 1.4;
        this.events.push({ type: 'pad', id: pad.id, boat: b.id });
      }
    }
    this.stepVertical(b, dt, prevS, wasGrounded);
    if (!b.finished && b.s >= c.finishS && st.phase !== 'grid' && st.phase !== 'countdown') {
      b.finished = true;
      b.finishTime = st.clock;
      this.events.push({ type: 'finish', boat: b.id, place: this.placeOf(b) });
    }
  }

  private collideBoats() {
    const c = this.course;
    const p = this.player;
    const R = 3.0;
    for (let i = 1; i < this.boats.length; i++) {
      const o = this.boats[i];
      if (Math.abs(o.y - p.y) > 1.6) continue;
      const dx = p.x - o.x;
      const dz = p.z - o.z;
      const d = Math.hypot(dx, dz);
      if (d >= R || d < 1e-4) continue;
      const nx = dx / d;
      const nz = dz / d;
      const over = R - d;
      p.x += nx * over * 0.7;
      p.z += nz * over * 0.7;
      const rvx = p.vx - o.vx;
      const rvz = p.vz - o.vz;
      const vn = rvx * nx + rvz * nz;
      if (vn < 0) {
        p.vx -= 1.1 * vn * nx;
        p.vz -= 1.1 * vn * nz;
        if (-vn > 1.5) this.events.push({ type: 'hit', boat: 0, kind: 'boat', power: -vn });
      }
      // rival yields sideways a little
      const side = -(nx * -c.tz[o.idx] + nz * c.tx[o.idx]);
      o.lat += side * over * 0.3;
      o.latV += side * 1.5;
    }
    for (let i = 1; i < this.boats.length; i++) {
      for (let j = i + 1; j < this.boats.length; j++) {
        const a = this.boats[i];
        const b = this.boats[j];
        if (Math.abs(a.s - b.s) < 6.5 && Math.abs(a.lat - b.lat) < 3) {
          const dir = a.lat >= b.lat ? 1 : -1;
          a.latV += dir * 0.25;
          b.latV -= dir * 0.25;
        }
      }
    }
    const loc = locate(c, p.x, p.z, p.idx);
    p.idx = loc.i; p.s = loc.s; p.lat = loc.lat;
  }

  private resolveCourse(input: Input, dt: number) {
    const c = this.course;
    const st = this.st;
    const b = this.player;

    // ordered gates: each resolves exactly once when the hull crosses its line
    while (st.nextGate < c.gates.length && b.s >= c.gates[st.nextGate].s) {
      const g = c.gates[st.nextGate];
      const isFinish = st.nextGate === c.gates.length - 1;
      const passed = Math.abs(b.lat - g.lat) <= g.half + 0.4;
      st.nextGate++;
      if (isFinish) break;
      if (passed) {
        const pts = 250 * st.combo;
        st.score += pts;
        st.gatesPassed++;
        st.combo = Math.min(5, st.combo + 1);
        st.boostMeter = Math.min(1, st.boostMeter + 0.04);
        this.events.push({ type: 'gate', id: g.id, passed: true, points: pts });
      } else {
        st.gatesMissed++;
        st.penalty += 3;
        st.combo = 1;
        this.events.push({ type: 'gate', id: g.id, passed: false, points: 0 });
      }
    }

    for (const sun of c.suns) {
      if (st.sunsTaken[sun.id]) continue;
      if (Math.abs(sun.s - b.s) > 6) continue;
      const dx = sun.x - b.x;
      const dz = sun.z - b.z;
      if (dx * dx + dz * dz < 3.0 * 3.0 && Math.abs(sun.y - (b.y + 1.0)) < 2.6) {
        st.sunsTaken[sun.id] = 1;
        st.sunCount++;
        const pts = 100 * st.combo;
        st.score += pts;
        st.boostMeter = Math.min(1, st.boostMeter + 0.025);
        this.events.push({ type: 'sun', id: sun.id, points: pts });
      }
    }

    for (const pad of c.pads) {
      const k = pad.id * 4;
      if (b.grounded && st.padCooldown[k] <= 0 && b.s >= pad.s0 && b.s <= pad.s1 && Math.abs(b.lat - pad.lat) <= pad.half + 0.6) {
        st.padCooldown[k] = 3;
        b.surge = TUNE.surgeTime;
        st.boostMeter = Math.min(1, st.boostMeter + 0.12);
        this.events.push({ type: 'pad', id: pad.id, boat: 0 });
      }
    }

    // finish
    if (!b.finished && st.nextGate >= c.gates.length) {
      b.finished = true;
      b.finishTime = this.time;
      st.phase = 'finished';
      st.place = this.placeOf(b);
      st.bonus.place = [3000, 2000, 1000, 0][st.place - 1];
      st.bonus.time = Math.max(0, Math.round((115 - this.time) * 40));
      st.score += st.bonus.place + st.bonus.time;
      this.events.push({ type: 'finish', boat: 0, place: st.place });
      return;
    }

    // wrong way / stuck / manual reset
    const tang = Math.atan2(c.tz[b.idx], c.tx[b.idx]);
    const facing = Math.cos(wrapAngle(b.heading - tang));
    st.wrongWayT = facing < -0.3 && b.speed > 3 ? st.wrongWayT + dt : 0;
    const pushing = input.throttle > 0.5 || input.brake > 0.5;
    st.stuckT = pushing && Math.hypot(b.vx, b.vz) < 1.2 ? st.stuckT + dt : 0;
    if ((input.reset && st.resetCooldown <= 0) || st.stuckT > 2.5) this.recover();
  }

  recover() {
    const c = this.course;
    const b = this.player;
    const st = this.st;
    let s = clamp(b.s, c.startS - 20, c.endS - 20);
    // never respawn on a ramp, in the falls, or inside a rock
    for (const r of c.ramps) if (s > r.s0 - 12 && s < r.s1 + 4) s = r.s0 - 14;
    if (s > c.fallS - 4 && s < c.fallS + 24) s = c.fallS - 8;
    let lat = lineLat(c, s);
    for (const r of c.rocks) if (Math.abs(r.s - s) < r.r + 5 && Math.abs(r.lat - lat) < r.r + 3) s -= r.r + 7;
    lat = lineLat(c, s);
    const p = posAt(c, s, lat);
    b.x = p.x; b.z = p.z; b.y = p.wy; b.vx = 0; b.vz = 0; b.vy = 0;
    b.heading = Math.atan2(p.tz, p.tx); b.yawRate = 0; b.steer = 0; b.speed = 0;
    b.s = s; b.lat = lat; b.idx = Math.round(s / 2); b.grounded = true; b.airTime = 0; b.surge = 0;
    st.penalty += 2;
    st.combo = 1;
    st.stuckT = 0;
    st.resetCooldown = 1;
    this.events.push({ type: 'reset' });
  }

  drain(): GameEvent[] {
    const e = this.events;
    this.events = [];
    return e;
  }
}

/** Drives the public input struct only; used for tests and the attract demo. */
export function autopilot(race: Race): Input {
  const c = race.course;
  const b = race.player;
  const look = 12 + Math.max(0, b.speed) * 0.55;
  const s = b.s + look;
  const hw = sampleTrack(c, s).hw;
  let t = clamp(lineLat(c, s), -(hw - 3), hw - 3);
  for (const r of c.ramps) if (r.s0 - b.s > -2 && r.s0 - b.s < 70 && Math.abs(t - r.lat) < r.half + 3) t = r.lat;
  for (const r of c.rocks) {
    const ds = r.s - b.s;
    if (ds < -2 || ds > look + 8) continue;
    const clear = r.r + 3;
    if (Math.abs(t - r.lat) < clear) {
      const side = b.lat >= r.lat ? 1 : -1;
      let cand = r.lat + side * clear;
      if (Math.abs(cand) > hw - 2.5) cand = r.lat - side * clear;
      t = cand;
    }
  }
  const p = posAt(c, s, t);
  const err = wrapAngle(Math.atan2(p.z - b.z, p.x - b.x) - b.heading);
  return {
    steer: clamp(err * 2.4, -1, 1),
    throttle: Math.abs(err) > 0.9 ? 0.4 : 1,
    brake: 0,
    boost: race.st.boostMeter > 0.25 && Math.abs(err) < 0.12 && b.grounded,
    reset: false,
  };
}
