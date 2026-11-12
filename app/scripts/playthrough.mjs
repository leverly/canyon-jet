// Input-driven playtest. Every action is a real keyboard or mouse event sent by the browser driver;
// the page is only *read* through window.__cj.probe() (frozen, read-only) to decide which key to press.
//   node scripts/playthrough.mjs [outDir]   (CJ_URL selects the server, default production preview :4180)
import { chromium } from 'playwright-core';
import fs from 'node:fs';
import path from 'node:path';

const out = process.argv[2] ?? '../review/playthrough';
const base = process.env.CJ_URL ?? 'http://127.0.0.1:4180/';
const quality = process.env.CJ_Q ?? '1';
fs.mkdirSync(path.join(out, 'frames'), { recursive: true });

const browser = await chromium.launch({
  executablePath: process.env.CHROME ?? `${process.env.HOME}/.local/bin/google-chrome`,
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--no-sandbox', '--mute-audio'],
});
const page = await browser.newPage({ viewport: { width: 800, height: 450 } });
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
await page.goto(`${base}?q=${quality}&mute`);
await page.waitForFunction(() => window.__cj && !document.getElementById('loading'), null, { timeout: 120000 });

const t0 = Date.now();
const trace = [];
const checks = [];
const held = new Set();
const log = (type, data = {}) => trace.push({ ms: Date.now() - t0, type, ...data });
const check = (name, pass, detail = '') => { checks.push({ name, pass: !!pass, detail: String(detail) }); console.log(pass ? 'PASS' : 'FAIL', name, detail); };
async function key(k, down) {
  if (down === held.has(k)) return;
  if (down) { held.add(k); await page.keyboard.down(k); } else { held.delete(k); await page.keyboard.up(k); }
  log(down ? 'keydown' : 'keyup', { key: k });
}
async function tap(k) { await page.keyboard.press(k); log('keypress', { key: k }); }
async function releaseAll() { for (const k of [...held]) await key(k, false); }
async function click(sel) { await page.click(sel); log('click', { sel }); }
const probe = () => page.evaluate(() => window.__cj.probe());
const wrap = (a) => { while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI; return a; };

// Read the situation and return the heading error toward a point ahead on the chosen line.
const sense = (latOverride) => page.evaluate((latOverride) => {
  const p = window.__cj.probe();
  let t = Math.max(-(p.hwAhead - 3), Math.min(p.hwAhead - 3, p.lineAhead));
  if (latOverride !== null) t = latOverride * (p.hwAhead - 2.5);
  else {
    for (const r of p.ramps) if (r.s0 - p.s > -2 && r.s0 - p.s < 70 && Math.abs(t - r.lat) < r.half + 3) t = r.lat;
    for (const r of p.rocks) {
      const clear = r.r + 3;
      if (Math.abs(t - r.lat) < clear) {
        const side = p.lat >= r.lat ? 1 : -1;
        let c = r.lat + side * clear;
        if (Math.abs(c) > p.hwAhead - 2.5) c = r.lat - side * clear;
        t = c;
      }
    }
  }
  const a = window.__cj.at(p.s + p.look, t);
  return { p, want: Math.atan2(a.z - p.z, a.x - p.x) };
}, latOverride ?? null);

let frameNo = 0;
const frameLog = [];
async function grab(p) {
  const f = `f${String(frameNo++).padStart(5, '0')}.jpg`;
  await page.screenshot({ path: path.join(out, 'frames', f), type: 'jpeg', quality: 72 });
  frameLog.push({ f, clock: p.clock, phase: p.phase, mode: p.mode });
}

/** Drive with arrow keys until stop(p) is true. */
async function drive(stop, opts = {}) {
  let last = null;
  let iter = 0;
  for (;;) {
    const { p, want } = await sense(opts.lat);
    last = p;
    if (opts.record && iter++ % 2 === 0) await grab(p);
    if (opts.record && iter % 100 === 0) console.log(`  t=${p.time.toFixed(1)} s=${p.s.toFixed(0)} v=${p.speed.toFixed(0)} place=${p.place} gate=${p.nextGate} score=${p.score}`);
    if (stop(p)) break;
    if (p.mode !== 'playing' || p.phase !== 'racing') { await page.waitForTimeout(120); continue; }
    const err = wrap(want - p.heading);
    const turn = err * 2.4 - p.yawRate * 0.4; // what a driver sees: where the bow points and how fast it is swinging
    await key('ArrowUp', Math.abs(err) < 1.0 || p.speed < 12);
    await key('ArrowRight', turn > 0.3);
    await key('ArrowLeft', turn < -0.3);
    await key('Space', !opts.noBoost && p.boost > 0.25 && Math.abs(err) < 0.1 && p.grounded);
    if (opts.each) await opts.each(p);
    await page.waitForTimeout(25);
  }
  await releaseAll();
  return last;
}

// ---------- session 1: full race with interruptions ----------
let p = await probe();
check('boots to title with HUD hidden', p.mode === 'menu' && await page.isHidden('#hud'));
await page.screenshot({ path: path.join(out, '01-title.png') });
await click('#btnStart');
p = await probe();
check('start button begins countdown', p.mode === 'playing' && p.phase === 'countdown', p.phase);
await page.keyboard.down('ArrowUp'); log('keydown', { key: 'ArrowUp', note: 'held during countdown' });
await page.waitForFunction(() => window.__cj.probe().phase === 'racing', null, { timeout: 60000 });
p = await probe();
check('throttle held during countdown does not move the boat before GO', p.s < 46 && p.clock < 0.6, `s=${p.s.toFixed(2)} clock=${p.clock.toFixed(2)}`);
await page.keyboard.up('ArrowUp');

const done = { pause: false, blur: false, resize: false, cam: false };
let shots = 0;
const final = await drive((q) => q.phase === 'finished', {
  record: true,
  each: async (q) => {
    if (!done.pause && q.s > 300) {
      done.pause = true;
      await releaseAll();
      await tap('Escape');
      const a = await probe();
      await page.waitForTimeout(1500);
      const b = await probe();
      check('Esc pauses: overlay shown, clock and position frozen', a.mode === 'paused' && b.clock === a.clock && b.s === a.s && await page.isVisible('#pause'), `clock ${a.clock.toFixed(3)} -> ${b.clock.toFixed(3)}`);
      await page.screenshot({ path: path.join(out, '03-paused.png') });
      await tap('Escape');
      check('Esc resumes', (await probe()).mode === 'playing');
    }
    if (!done.blur && q.s > 620 && q.speed > 22 && q.grounded) {
      done.blur = true;
      const v0 = (await probe()).speed;
      await page.evaluate(() => window.dispatchEvent(new Event('blur'))); // window loses focus while keys are physically held
      log('blur');
      await page.waitForTimeout(1600);
      const v1 = (await probe()).speed;
      check('window blur drops held input (boat coasts)', v1 < v0 - 2, `speed ${v0.toFixed(1)} -> ${v1.toFixed(1)}`);
      await releaseAll();
    }
    if (!done.resize && q.s > 900) {
      done.resize = true;
      await page.setViewportSize({ width: 960, height: 540 }); log('resize', { w: 960, h: 540 });
      await page.waitForTimeout(400);
      const sz = await page.evaluate(() => { const c = document.getElementById('game'); return [c.clientWidth, c.clientHeight, c.width / c.height]; });
      check('canvas follows window resize', sz[0] === 960 && sz[1] === 540 && Math.abs(sz[2] - 16 / 9) < 0.02, sz.join(','));
      await page.setViewportSize({ width: 800, height: 450 }); log('resize', { w: 800, h: 450 });
    }
    if (!done.cam && q.s > 1050) {
      done.cam = true;
      await tap('KeyC');
      await page.waitForTimeout(700);
      await page.screenshot({ path: path.join(out, '04-cockpit-camera.png') });
      await tap('KeyC');
    }
    if (q.s > 150 + shots * 330 && shots < 7) { shots++; await page.screenshot({ path: path.join(out, `02-race-${shots}.png`) }); }
  },
});
check('race finishes by driving the whole course', final.phase === 'finished' && !final.dnf, `time ${final.time.toFixed(2)} place ${final.place}`);
check('every gate resolved exactly once', final.gatesPassed + final.gatesMissed === 19 && final.nextGate === 20, `${final.gatesPassed} passed, ${final.gatesMissed} missed`);
check('waterfall leap happened', final.bestAir > 0.8, `best air ${final.bestAir.toFixed(2)}s`);
await page.waitForSelector('#results:not(.hidden)', { timeout: 60000 });
const resText = (await page.innerText('#results')).replace(/\s+/g, ' ');
check('results screen shows live totals', resText.includes(final.gatesPassed + '/19') && resText.includes((await probe()).score.toLocaleString('en-US')), resText.slice(0, 160));
await page.screenshot({ path: path.join(out, '05-results.png') });
const run1 = await probe();

// ---------- session 2: restart, missed gate, reset, restart from pause, back to title ----------
await click('#btnRestart');
p = await probe();
check('restart from results clears the race', p.phase === 'countdown' && p.score === 0 && p.nextGate === 0 && p.suns === 0 && p.clock === 0 && p.s < 46, JSON.stringify({ score: p.score, gate: p.nextGate, s: +p.s.toFixed(1) }));
const hudScore = await page.innerText('#scoreVal');
check('HUD reads from the reset state', hudScore === '0' && (await page.innerText('#timer')) === '0:00', hudScore);
await page.waitForFunction(() => window.__cj.probe().phase === 'racing', null, { timeout: 60000 });
// hug the bank so gate 1 is missed on purpose
const g = await drive((q) => q.nextGate >= 1 || q.s > 190, { lat: -0.95, noBoost: true });
check('missed gate: no points, +3 s penalty, combo reset', g.gatesMissed === 1 && g.gatesPassed === 0 && g.penalty === 3 && g.combo === 1, JSON.stringify({ missed: g.gatesMissed, pen: g.penalty, score: g.score }));
await page.screenshot({ path: path.join(out, '06-missed-gate.png') });
await tap('KeyR');
await page.waitForTimeout(300);
p = await probe();
check('R recovers to the course with +2 s', p.penalty === 5 && Math.abs(p.lat) < p.hwAhead - 2 && Math.abs(p.speed) < 3, `pen ${p.penalty} lat ${p.lat.toFixed(1)}`);
await tap('KeyR');
await page.waitForTimeout(150);
check('immediate second reset is rejected (cooldown)', (await probe()).penalty === 5);
await drive((q) => q.s > 250, {});
await tap('Escape');
await click('#btnRestart2');
p = await probe();
check('restart from pause clears penalties and progress', p.mode === 'playing' && p.phase === 'countdown' && p.penalty === 0 && p.gatesMissed === 0 && p.score === 0);
await page.waitForFunction(() => window.__cj.probe().phase === 'racing', null, { timeout: 60000 });
await drive((q) => q.s > 120, {});
await tap('Escape');
await click('#btnMenu2');
p = await probe();
check('back to title', p.mode === 'menu' && await page.isVisible('#menu') && await page.isHidden('#hud'));
const bestText = await page.innerText('#best');
check('best score persisted from the finished run', bestText.includes(run1.score.toLocaleString('en-US')), bestText);
await page.reload();
await page.waitForFunction(() => window.__cj && !document.getElementById('loading'), null, { timeout: 120000 });
check('best score survives reload', (await page.innerText('#best')).includes(run1.score.toLocaleString('en-US')));
// corrupted save must not break boot
await page.evaluate(() => { localStorage.setItem('cj.bestScore', '{broken'); localStorage.setItem('cj.quality', '99'); });
await page.reload();
await page.waitForFunction(() => window.__cj && !document.getElementById('loading'), null, { timeout: 120000 });
check('corrupted save is ignored on boot', (await probe()).mode === 'menu' && (await page.innerText('#best')) === '');
check('no console errors', errors.length === 0, errors.slice(0, 3).join(' | '));

const failed = checks.filter((c) => !c.pass).length;
fs.writeFileSync(path.join(out, 'trace.json'), JSON.stringify({ url: base, quality, renderer: run1.gpu, viewport: '800x450', result: { time: run1.time, place: run1.place, score: run1.score, gatesPassed: run1.gatesPassed, suns: run1.suns, bestAir: run1.bestAir }, checks, inputEvents: trace.length, trace }, null, 1));
fs.writeFileSync(path.join(out, 'frames.json'), JSON.stringify(frameLog));
console.log(`\n${checks.length - failed}/${checks.length} checks passed; ${trace.length} input events; ${frameLog.length} frames`);
await browser.close();
process.exit(failed ? 1 : 0);
