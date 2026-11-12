// Measure real frame rate: node scripts/perf.mjs "<query>" [w] [h] [seconds]
import { chromium } from 'playwright-core';
const [query = '', w = '1280', h = '720', secs = '6'] = process.argv.slice(2);
const base = process.env.CJ_URL ?? 'http://127.0.0.1:5180/';
const browser = await chromium.launch({
  executablePath: process.env.CHROME ?? `${process.env.HOME}/.local/bin/google-chrome`,
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--no-sandbox', '--mute-audio'],
});
const page = await browser.newPage({ viewport: { width: +w, height: +h } });
await page.goto(base + '?' + query);
await page.waitForFunction(() => window.__cj && !document.getElementById('loading'), null, { timeout: 120000 });
await page.waitForTimeout(1500);
const res = await page.evaluate((secs) => new Promise((resolve) => {
  let n = 0; const t0 = performance.now(); const times = []; let last = t0;
  const f = (t) => { n++; times.push(t - last); last = t; if (t - t0 < secs * 1000) requestAnimationFrame(f); else { times.sort((a, b) => a - b); const p = window.__cj.probe(); resolve({ fps: +(n / ((t - t0) / 1000)).toFixed(1), medianMs: +times[times.length >> 1].toFixed(1), p95Ms: +times[Math.floor(times.length * 0.95)].toFixed(1), draw: p.draw, quality: p.quality, gpu: p.gpu }); } };
  requestAnimationFrame(f);
}), +secs);
console.log(`${w}x${h} ${query}`, JSON.stringify(res));
await browser.close();
