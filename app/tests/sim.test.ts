import { describe, expect, it } from 'vitest';
import { buildCourse, groundY, lineLat, locateGlobal, posAt } from '../src/game/course';
import { autopilot, Input, NO_INPUT, Race, TUNE } from '../src/game/sim';

const course = buildCourse();
const DT = TUNE.dt;

function run(race: Race, seconds: number, drive: (r: Race) => Input, onStep?: (r: Race) => void) {
  const steps = Math.round(seconds / DT);
  for (let i = 0; i < steps; i++) {
    race.step(DT, drive(race));
    onStep?.(race);
    if (race.st.phase === 'finished') break;
  }
}

describe('course', () => {
  it('is long, forward-only and does not cross itself', () => {
    expect(course.length).toBeGreaterThan(2400);
    let minGap = Infinity;
    for (let i = 0; i < course.n; i += 10) {
      for (let j = i + 150; j < course.n; j += 10) {
        const d = Math.hypot(course.px[i] - course.px[j], course.pz[i] - course.pz[j]);
        minGap = Math.min(minGap, d - course.hw[i] - course.hw[j]);
      }
    }
    expect(minGap).toBeGreaterThan(120); // room for canyon walls between passes
  });
  it('round-trips track coordinates', () => {
    for (const [s, lat] of [[100, 4], [900, -6], [1700, 3], [2300, -2]]) {
      const p = posAt(course, s, lat);
      const l = locateGlobal(course, p.x, p.z);
      expect(l.s).toBeCloseTo(s, 0);
      expect(l.lat).toBeCloseTo(lat, 0);
    }
  });
  it('keeps the racing line clear of rocks and gates inside the banks', () => {
    for (const r of course.rocks) expect(Math.abs(r.lat - lineLat(course, r.s))).toBeGreaterThan(r.r + 2.5);
    for (const g of course.gates.slice(0, -1)) {
      const hw = posAt(course, g.s, 0).hw;
      expect(Math.abs(g.lat) + g.half).toBeLessThan(hw - 0.5);
    }
    expect(course.gates.map((g) => g.s)).toEqual([...course.gates.map((g) => g.s)].sort((a, b) => a - b));
  });
  it('places every sun above the surface', () => {
    for (const s of course.suns) expect(s.y).toBeGreaterThan(groundY(course, Math.max(s.s, 0), s.lat) - 9);
    expect(course.suns.length).toBeGreaterThan(60);
  });
});

describe('race rules', () => {
  it('ignores driving input before GO and starts the clock at GO', () => {
    const race = new Race(course);
    const x0 = race.player.x;
    run(race, 1, () => ({ ...NO_INPUT, throttle: 1 }));
    expect(race.st.phase).toBe('grid');
    race.start();
    run(race, 2.9, () => ({ ...NO_INPUT, throttle: 1 }));
    expect(race.st.phase).toBe('countdown');
    expect(race.player.x).toBe(x0);
    expect(race.st.clock).toBe(0);
    run(race, 0.3, () => ({ ...NO_INPUT, throttle: 1 }));
    expect(race.st.phase).toBe('racing');
  });

  it('autopilot finishes through the public input, resolving each gate once', () => {
    const race = new Race(course);
    race.start();
    const gateEvents = new Map<number, number>();
    const sunEvents = new Map<number, number>();
    let lastScore = 0;
    let maxAbsLatOver = 0;
    let finishEvents = 0;
    run(race, 320, autopilot, (r) => {
      for (const e of r.drain()) {
        if (e.type === 'gate') gateEvents.set(e.id, (gateEvents.get(e.id) ?? 0) + 1);
        if (e.type === 'sun') sunEvents.set(e.id, (sunEvents.get(e.id) ?? 0) + 1);
        if (e.type === 'finish' && e.boat === 0) finishEvents++;
      }
      expect(r.st.score).toBeGreaterThanOrEqual(lastScore);
      lastScore = r.st.score;
      const hw = posAt(course, r.player.s, 0).hw;
      maxAbsLatOver = Math.max(maxAbsLatOver, Math.abs(r.player.lat) - hw);
    });
    expect(race.st.phase).toBe('finished');
    expect(race.st.dnf).toBe(false);
    expect(finishEvents).toBe(1);
    expect(gateEvents.size).toBe(course.gates.length - 1);
    for (const n of gateEvents.values()) expect(n).toBe(1);
    for (const n of sunEvents.values()) expect(n).toBe(1);
    expect(race.st.gatesPassed + race.st.gatesMissed).toBe(course.gates.length - 1);
    expect(race.st.gatesPassed).toBeGreaterThanOrEqual(course.gates.length - 3);
    expect(race.st.sunCount).toBeGreaterThan(25);
    expect(maxAbsLatOver).toBeLessThanOrEqual(0.01);
    expect(race.time).toBeGreaterThan(60);
    expect(race.time).toBeLessThan(150);
    expect(race.st.bestAir).toBeGreaterThan(0.8); // the waterfall leap really happens
    console.log('autopilot', { time: race.time.toFixed(2), place: race.st.place, score: race.st.score, gates: race.st.gatesPassed, suns: race.st.sunCount, air: race.st.bestAir.toFixed(2) });
  });

  it('is deterministic and restart restores the initial state', () => {
    const a = new Race(course);
    a.start();
    run(a, 40, autopilot);
    const snap = JSON.stringify([a.player, a.st.score, a.st.clock]);
    a.reset();
    expect(a.st.score).toBe(0);
    expect(a.st.nextGate).toBe(0);
    expect(a.st.sunCount).toBe(0);
    expect(a.st.phase).toBe('grid');
    a.start();
    run(a, 40, autopilot);
    expect(JSON.stringify([a.player, a.st.score, a.st.clock])).toBe(snap);
  });

  it('penalises a missed gate once and never awards it later', () => {
    const race = new Race(course);
    race.start();
    // hug the far bank so the first gate is missed
    const g = course.gates[0];
    const side = g.lat > 0 ? -1 : 1;
    let events = 0;
    let passed = 0;
    run(race, 30, (r) => {
      const b = r.player;
      const hw = posAt(course, b.s + 15, 0).hw;
      const p = posAt(course, b.s + 15, side * (hw - 3));
      const want = Math.atan2(p.z - b.z, p.x - b.x);
      let err = want - b.heading;
      while (err > Math.PI) err -= 2 * Math.PI;
      while (err < -Math.PI) err += 2 * Math.PI;
      return { steer: Math.max(-1, Math.min(1, err * 2)), throttle: 0.7, brake: 0, boost: false, reset: false };
    }, (r) => {
      for (const e of r.drain()) if (e.type === 'gate' && e.id === 0) { events++; if (e.passed) passed++; }
      if (r.player.s > g.s + 30) r.st.phase = 'finished';
    });
    expect(events).toBe(1);
    expect(passed).toBe(0);
    expect(race.st.penalty).toBeGreaterThanOrEqual(3);
    expect(race.st.combo).toBe(1);
  });

  it('holds the hull inside the banks at boosted speed', () => {
    const race = new Race(course);
    race.start();
    let worst = -Infinity;
    run(race, 25, () => ({ steer: 1, throttle: 1, brake: 0, boost: true, reset: false }), (r) => {
      r.st.boostMeter = 1;
      const hw = posAt(course, r.player.s, 0).hw;
      worst = Math.max(worst, Math.abs(r.player.lat) - hw);
    });
    expect(worst).toBeLessThanOrEqual(0.01);
  });

  it('recovers a stuck boat onto valid water with a penalty', () => {
    const race = new Race(course);
    race.start();
    run(race, 6, autopilot);
    const pen = race.st.penalty;
    race.step(DT, { ...NO_INPUT, reset: true });
    expect(race.st.penalty).toBe(pen + 2);
    const hw = posAt(course, race.player.s, 0).hw;
    expect(Math.abs(race.player.lat)).toBeLessThan(hw - 2);
    for (const r of course.rocks) expect(Math.hypot(r.x - race.player.x, r.z - race.player.z)).toBeGreaterThan(r.r + 1.5);
    // cooldown: an immediate second reset is rejected
    race.step(DT, { ...NO_INPUT, reset: true });
    expect(race.st.penalty).toBe(pen + 2);
  });

  it('ends as DNF when the clock runs out', () => {
    const race = new Race(course);
    race.start();
    run(race, TUNE.timeLimit + 10, () => NO_INPUT);
    expect(race.st.phase).toBe('finished');
    expect(race.st.dnf).toBe(true);
  });
});
