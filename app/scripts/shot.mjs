// Capture frames of the running game.
//   node scripts/shot.mjs "<query>" out.png [waitMs[,waitMs...]] [w] [h]
// Several waits produce out-1.png, out-2.png ... taken that many ms apart.
import { chromium } from 'playwright-core';
const [query = '', out = 'shot.png', wait = '2500', w = '1280', h = '720'] = process.argv.slice(2);
const base = process.env.CJ_URL ?? 'http://127.0.0.1:5180/';
const browser = await chromium.launch({
  executablePath: process.env.CHROME ?? `${process.env.HOME}/.local/bin/google-chrome`,
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--no-sandbox', '--mute-audio'],
});
const page = await browser.newPage({ viewport: { width: +w, height: +h } });
const logs = [];
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(`[${m.type()}] ${m.text()}`); });
page.on('pageerror', (e) => logs.push('[pageerror] ' + e.message));
await page.goto(base + (query ? '?' + query : ''));
await page.waitForFunction(() => window.__cj && !document.getElementById('loading'), null, { timeout: 120000 });
const waits = wait.split(',').map(Number);
for (let i = 0; i < waits.length; i++) {
  await page.waitForTimeout(waits[i]);
  const file = waits.length === 1 ? out : out.replace(/\.png$/, `-${i + 1}.png`);
  await page.screenshot({ path: file });
  const p = await page.evaluate(() => { const p = window.__cj.probe(); return { fps: +p.fps.toFixed(1), q: p.quality, draw: p.draw, mode: p.mode, phase: p.phase, s: +p.s.toFixed(0), speed: +p.speed.toFixed(1), time: +p.time.toFixed(1), score: p.score, place: p.place }; });
  console.log(file, JSON.stringify(p));
}
for (const l of logs.slice(0, 20)) console.log(l);
await browser.close();
