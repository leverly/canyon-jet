import { describe, expect, it } from 'vitest';
import { buildCourse, lineLat, posAt, sampleTrack } from '../src/game/course';
import { Input, Race, TUNE } from '../src/game/sim';
import { wrapAngle } from '../src/core/math';

const course = buildCourse();

/**
 * Digital driver: steer is only -1/0/+1 and throttle 0/1, decided every `period` seconds
 * from a state that is one period old. This is what arrow keys and a human reaction give.
 */
function keyboardRun(period: number, lead: number) {
  const race = new Race(course);
  race.start();
  let input: Input = { steer: 0, throttle: 1, brake: 0, boost: false, reset: false };
  let seen = { s: race.player.s, lat: race.player.lat, x: race.player.x, z: race.player.z, heading: race.player.heading, speed: 0, grounded: true, boost: 0 };
  let prevHeading = seen.heading;
  let next = 0;
  for (let i = 0; i < 300 / TUNE.dt && race.st.phase !== 'finished'; i++) {
    if (race.st.t >= next) {
      next += period;
      const b = seen;
      const look = 12 + Math.max(0, b.speed) * 0.55;
      const hw = sampleTrack(course, b.s + look).hw;
      let t = Math.max(-(hw - 3), Math.min(hw - 3, lineLat(course, b.s + look)));
      for (const r of course.ramps) if (r.s0 - b.s > -2 && r.s0 - b.s < 70 && Math.abs(t - r.lat) < r.half + 3) t = r.lat;
      for (const r of course.rocks) {
        const ds = r.s - b.s;
        if (ds < -2 || ds > look + 8) continue;
        const clear = r.r + 3;
        if (Math.abs(t - r.lat) < clear) {
          const side = b.lat >= r.lat ? 1 : -1;
          let c = r.lat + side * clear;
          if (Math.abs(c) > hw - 2.5) c = r.lat - side * clear;
          t = c;
        }
      }
      const p = posAt(course, b.s + look, t);
      const err = wrapAngle(Math.atan2(p.z - b.z, p.x - b.x) - b.heading);
      const yaw = wrapAngle(b.heading - prevHeading) / period;
      prevHeading = b.heading;
      const want = err * 2.4 - yaw * lead;
      input = { steer: want > 0.3 ? 1 : want < -0.3 ? -1 : 0, throttle: Math.abs(err) < 1 || b.speed < 12 ? 1 : 0, brake: 0, boost: b.boost > 0.25 && Math.abs(err) < 0.1 && b.grounded, reset: false };
      const q = race.player;
      seen = { s: q.s, lat: q.lat, x: q.x, z: q.z, heading: q.heading, speed: q.speed, grounded: q.grounded, boost: race.st.boostMeter };
    }
    race.step(TUNE.dt, input);
    race.drain();
  }
  return race;
}

describe('keyboard playability', () => {
  for (const [period, lead] of [[0.1, 0.35], [0.2, 0.5]] as const) {
    it(`a digital driver deciding every ${period * 1000} ms finishes with most gates`, () => {
      const race = keyboardRun(period, lead);
      console.log('keyboard', period, { time: race.time.toFixed(1), place: race.st.place, gates: race.st.gatesPassed, missed: race.st.gatesMissed, pen: race.st.penalty, suns: race.st.sunCount, score: race.st.score });
      expect(race.st.phase).toBe('finished');
      expect(race.st.dnf).toBe(false);
      expect(race.st.gatesPassed).toBeGreaterThanOrEqual(15);
      expect(race.time).toBeLessThan(130);
    });
  }
});
