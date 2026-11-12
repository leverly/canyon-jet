import '@fontsource/nunito/700.css';
import '@fontsource/nunito/800.css';
import '@fontsource/nunito/900.css';
import './ui/style.css';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { Sfx } from './core/audio';
import { Controls } from './core/input';
import { clamp, damp, lerp, mulberry32, wrapAngle } from './core/math';
import { buildCourse, lineLat, locate, posAt, sampleTrack, waterY } from './game/course';
import { autopilot, Boat, Input, NO_INPUT, Race, TUNE } from './game/sim';
import { fmtTimeMs, Hud } from './ui/hud';
import { BoatPose, BoatView, HERO, RIVAL_COLORS } from './world/boat';
import { createEnv } from './world/env';
import { Particles, Wake } from './world/fx';
import { CourseView, createDecor } from './world/props';
import { createTerrain } from './world/terrain';
import { makeNoiseTexture, makeWaterTexture } from './world/tex';
import { createWater } from './world/water';

const params = new URLSearchParams(location.search);
const $ = (id: string) => document.getElementById(id)!;

// ---------- renderer ----------
const canvas = $('game') as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.toneMapping = THREE.NeutralToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.info.autoReset = false;

function softwareGL() {
  const gl = renderer.getContext();
  const ext = gl.getExtension('WEBGL_debug_renderer_info');
  const name = ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : '';
  return { soft: /swiftshader|llvmpipe|software/i.test(name), name };
}
const gpu = softwareGL();

const QUALITY = [
  { dpr: 1, shadow: 0, post: false, spray: 0.4, decor: 0.6 },
  { dpr: 1.5, shadow: 1024, post: true, spray: 0.75, decor: 0.85 },
  { dpr: 2, shadow: 2048, post: true, spray: 1, decor: 1 },
];
function loadNum(key: string, lo: number, hi: number): number | null {
  try {
    const v = Number(localStorage.getItem(key));
    return Number.isFinite(v) && localStorage.getItem(key) !== null && v >= lo && v <= hi ? v : null;
  } catch { return null; }
}
const save = (k: string, v: number) => { try { localStorage.setItem(k, String(v)); } catch { /* private mode */ } };
let userPickedQuality = loadNum('cj.quality', 0, 2) !== null || params.has('q');
let quality = params.has('q') ? clamp(Number(params.get('q')) | 0, 0, 2) : loadNum('cj.quality', 0, 2) ?? (gpu.soft ? 0 : 2);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(58, 16 / 9, 0.3, 9000);
const noiseTex = makeNoiseTexture(256);
const course = buildCourse();
const race = new Race(course);
const env = createEnv(scene, renderer, 2048);
const terrain = createTerrain(course, noiseTex);
scene.add(terrain.group);
const water = createWater(course, makeWaterTexture(256));
(water.mesh.material as THREE.MeshStandardMaterial).envMap = scene.environment;
(water.mesh.material as THREE.MeshStandardMaterial).envMapIntensity = 1.1;
scene.add(water.mesh);
const decor = createDecor(course, terrain.anchors, noiseTex);
scene.add(decor.group);
const courseView = new CourseView(course, noiseTex);
scene.add(courseView.group);

const views = race.boats.map((b, i) => new BoatView(i === 0 ? HERO : RIVAL_COLORS[i - 1], b.id));
views.forEach((v) => {
  const m = v.mesh.material as THREE.MeshStandardMaterial;
  m.envMap = scene.environment;
  m.envMapIntensity = 0.8;
  v.addSheets(noiseTex);
  scene.add(v.root);
});
const wakes = race.boats.map(() => new Wake(noiseTex));
wakes.forEach((w) => scene.add(w.mesh));
const spray = new Particles(5200, false, 0.4);
const sparks = new Particles(500, true, 0.0);
scene.add(spray.points, sparks.points);

const composer = new EffectComposer(renderer, new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: 4 }));
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.16, 0.6, 0.95);
composer.addPass(bloom);
composer.addPass(new OutputPass());

function applyQuality(q: number) {
  quality = q;
  const Q = QUALITY[q];
  env.sunLight.castShadow = Q.shadow > 0;
  if (Q.shadow > 0 && env.sunLight.shadow.mapSize.x !== Q.shadow) {
    env.sunLight.shadow.mapSize.set(Q.shadow, Q.shadow);
    env.sunLight.shadow.map?.dispose();
    env.sunLight.shadow.map = null;
  }
  document.querySelectorAll<HTMLElement>('#quality button').forEach((b) => b.classList.toggle('on', Number(b.dataset.q) === q));
  resize();
}
function resize() {
  const w = innerWidth, h = innerHeight;
  const dpr = Math.min(devicePixelRatio || 1, QUALITY[quality].dpr);
  renderer.setPixelRatio(dpr);
  renderer.setSize(w, h, false);
  composer.setPixelRatio(dpr);
  composer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
addEventListener('resize', resize);

// ---------- game state ----------
type Mode = 'menu' | 'playing' | 'paused' | 'results';
let mode: Mode = 'menu';
const controls = new Controls();
const sfx = new Sfx();
const hud = new Hud();
const rnd = mulberry32(99);
const gateState = new Int8Array(course.gates.length);
const prev: BoatPose[] = race.boats.map(() => ({ x: 0, y: 0, z: 0, heading: 0, speed: 0, steer: 0, vy: 0, grounded: true, throttle: 0, boosting: false }));
const pose: BoatPose[] = race.boats.map(() => ({ x: 0, y: 0, z: 0, heading: 0, speed: 0, steer: 0, vy: 0, grounded: true, throttle: 0, boosting: false }));
let acc = 0;
let time = 0;
let shake = 0;
let resultsAt = -1;
let camMode = 0;
const cam = { heading: 0, y: 0, fov: 58, init: false };
const demo = params.has('demo');
const sprayAcc = new Float32Array(8);
let best = { score: loadNum('cj.bestScore', 0, 1e7), time: loadNum('cj.bestTime', 10, 1000) };

function copyPose(b: Boat, p: BoatPose) {
  p.x = b.x; p.y = b.y; p.z = b.z; p.heading = b.heading; p.speed = b.speed; p.steer = b.steer;
  p.vy = b.vy; p.grounded = b.grounded; p.throttle = b.throttle; p.boosting = b.boosting;
}
function snapPoses() { race.boats.forEach((b, i) => { copyPose(b, prev[i]); copyPose(b, pose[i]); }); }

function resetWorld() {
  race.reset();
  gateState.fill(0);
  courseView.reset();
  spray.clear();
  sparks.clear();
  wakes.forEach((w) => w.reset());
  hud.clear();
  acc = 0;
  shake = 0;
  resultsAt = -1;
  cam.init = false;
  sprayAcc.fill(0);
  controls.clear();
  snapPoses();
}

function show(id: string, on: boolean) { $(id).classList.toggle('hidden', !on); }
function setMode(m: Mode) {
  mode = m;
  show('menu', m === 'menu');
  show('pause', m === 'paused');
  show('results', m === 'results');
  hud.show(m !== 'menu');
  sfx.suspend(m === 'paused');
  if (m === 'menu') {
    sfx.musicOn = false;
    const b = best.score !== null ? `最高分 ${best.score.toLocaleString('en-US')}` + (best.time !== null ? ` · 最佳 ${fmtTimeMs(best.time)}` : '') : '';
    $('best').textContent = b;
  }
}
function startRace() {
  sfx.unlock();
  resetWorld();
  race.start();
  setMode('playing');
}
function toMenu() {
  resetWorld();
  setMode('menu');
}
function togglePause() {
  if (mode === 'playing') setMode('paused');
  else if (mode === 'paused') { controls.clear(); setMode('playing'); }
}

function showResults() {
  const st = race.st;
  const total = course.gates.length - 1;
  $('resTitle').textContent = st.dnf ? 'TIME UP' : ['1ST PLACE', '2ND PLACE', '3RD PLACE', '4TH PLACE'][st.place - 1];
  $('resMedal').textContent = st.dnf ? '超时未完赛' : ['冠军！', '亚军', '季军', '完赛'][st.place - 1];
  const rows: [string, string][] = [
    ['用时', fmtTimeMs(race.time) + (st.penalty > 0 ? `（含罚时 ${st.penalty}s）` : '')],
    ['检查门', `${st.gatesPassed}/${total}`],
    ['太阳币', `${st.sunCount}/${course.suns.length}`],
    ['最长滞空', st.bestAir.toFixed(2) + 's'],
    ['名次奖励', '+' + st.bonus.place.toLocaleString('en-US')],
    ['时间奖励', '+' + st.bonus.time.toLocaleString('en-US')],
  ];
  $('resTable').innerHTML = rows.map(([a, b]) => `<tr><td>${a}</td><td>${b}</td></tr>`).join('') + `<tr class="total"><td>总分</td><td>${st.score.toLocaleString('en-US')}</td></tr>`;
  if (!st.dnf) {
    if (best.score === null || st.score > best.score) { best.score = st.score; save('cj.bestScore', st.score); }
    if (best.time === null || race.time < best.time) { best.time = race.time; save('cj.bestTime', Math.round(race.time * 100) / 100); }
  }
  setMode('results');
}

// ---------- effects ----------
function burst(x: number, y: number, z: number, n: number, power: number, floor: number) {
  n = Math.round(n * QUALITY[quality].spray);
  for (let i = 0; i < n; i++) {
    const a = rnd() * Math.PI * 2;
    const r = (0.4 + rnd()) * power;
    spray.emit(x + Math.cos(a) * 0.8, y + 0.2, z + Math.sin(a) * 0.8, Math.cos(a) * r * 2.2, (2 + rnd() * 4) * (0.5 + power * 0.35), Math.sin(a) * r * 2.2,
      0.5 + rnd() * 0.7, 0.12 + rnd() * 0.3, { grow: 0.5, alpha: 1, floor });
  }
}
function sparkle(x: number, y: number, z: number, n: number, color: number[]) {
  for (let i = 0; i < n; i++) {
    const a = rnd() * Math.PI * 2, u = rnd() * 2 - 1, r = 2 + rnd() * 5, q = Math.sqrt(1 - u * u);
    sparks.emit(x, y, z, Math.cos(a) * q * r, u * r + 2, Math.sin(a) * q * r, 0.35 + rnd() * 0.4, 0.22 + rnd() * 0.25, { grow: -0.3, alpha: 1, grav: 6, color });
  }
}

function emitSpray(p: BoatPose, id: number, dt: number) {
  const sp = clamp(Math.abs(p.speed) / 30, 0, 1.5);
  if (!p.grounded || sp < 0.06) return;
  const q = QUALITY[quality].spray * (id === 0 ? 1 : 0.3);
  const fx = Math.cos(p.heading), fz = Math.sin(p.heading);
  const rx = -fz, rz = fx;
  const turn = Math.abs(p.steer);
  // bow sheets thrown outward and low; a few fine droplets fly higher
  sprayAcc[id * 2] += dt * q * (170 * sp + 120 * turn * sp + (p.boosting ? 80 : 0));
  while (sprayAcc[id * 2] >= 1) {
    sprayAcc[id * 2]--;
    const side = rnd() < 0.5 + 0.35 * -p.steer ? 1 : -1;
    const along = lerp(-1.6, 2.0, rnd());
    const out = (2.0 + rnd() * 4.0) * (0.55 + sp * 0.6) * (1 + turn * 0.6);
    const drop = rnd() < 0.6;
    spray.emit(p.x + fx * along + rx * side * 1.05, p.y + 0.1, p.z + fz * along + rz * side * 1.05,
      rx * side * out * (drop ? 1.5 : 1) + fx * p.speed * 0.55, (drop ? 3.5 + rnd() * 4 : 1.4 + rnd() * 3.0) * (0.5 + sp * 0.6), rz * side * out * (drop ? 1.5 : 1) + fz * p.speed * 0.55,
      drop ? 0.5 + rnd() * 0.5 : 0.45 + rnd() * 0.55, drop ? 0.04 + rnd() * 0.06 : 0.09 + rnd() * 0.17, { grow: drop ? 0 : 0.3, alpha: 1, floor: p.y });
  }
  // stern wash stays close to the surface so it never hides the crew
  sprayAcc[id * 2 + 1] += dt * q * (110 * sp * (0.4 + 0.6 * p.throttle) + (p.boosting ? 100 : 0));
  while (sprayAcc[id * 2 + 1] >= 1) {
    sprayAcc[id * 2 + 1]--;
    const l = (rnd() - 0.5) * 1.6;
    const drop = rnd() < 0.4;
    spray.emit(p.x - fx * 3.3 + rx * l, p.y + 0.15, p.z - fz * 3.3 + rz * l,
      fx * p.speed * 0.25 + rx * (rnd() - 0.5) * 4, (drop ? 3 + rnd() * 3 : 0.8 + rnd() * 1.6) * (0.5 + sp * 0.5) * (p.boosting ? 1.4 : 1), fz * p.speed * 0.25 + rz * (rnd() - 0.5) * 4,
      drop ? 0.5 + rnd() * 0.4 : 0.5 + rnd() * 0.5, drop ? 0.04 + rnd() * 0.06 : 0.09 + rnd() * 0.18, { grow: drop ? 0 : 0.3, alpha: 1, floor: p.y });
  }
}
let mistAcc = 0;
function emitMist(dt: number, playerS: number) {
  if (Math.abs(playerS - course.fallS) > 300) return;
  mistAcc += dt * 55 * QUALITY[quality].spray;
  while (mistAcc >= 1) {
    mistAcc--;
    const s = course.fallS + 12 + rnd() * 8;
    const hw = sampleTrack(course, s).hw;
    const P = posAt(course, s, (rnd() * 2 - 1) * hw);
    spray.emit(P.x, P.wy + 0.3, P.z, P.tx * (1 + rnd() * 3), 1.5 + rnd() * 3.2, P.tz * (1 + rnd() * 3), 1.6 + rnd() * 1.2, 1.8 + rnd() * 2.2, { grow: 2.6, alpha: 0.38, grav: 1.6 });
  }
}

function handleEvents() {
  for (const e of race.drain()) {
    const b = 'boat' in e ? race.boats[e.boat] : race.player;
    switch (e.type) {
      case 'countdown': hud.center(String(e.n)); sfx.play('count'); break;
      case 'go': hud.center('GO!'); sfx.play('go'); sfx.musicOn = true; break;
      case 'gate': {
        gateState[e.id] = e.passed ? 1 : -1;
        const g = course.gates[e.id];
        const P = posAt(course, g.s, g.lat);
        if (e.passed) { hud.popup(`GATE +${e.points}`, 'good'); sfx.play('gate'); sparkle(P.x, P.wy + 2.5, P.z, 26, [0.35, 0.95, 1]); }
        else { hud.popup('错过检查门 +3s', 'bad'); sfx.play('miss'); }
        break;
      }
      case 'sun': {
        courseView.takeSun(e.id);
        const s = course.suns[e.id];
        sparkle(s.x, s.y, s.z, 12, [1, 0.85, 0.3]);
        sfx.play('sun', race.st.combo);
        break;
      }
      case 'pad': if (e.boat === 0) { hud.popup('BOOST!', 'gold'); sfx.play('boost'); } burst(b.x, b.y, b.z, 30, 1.5, b.y); break;
      case 'land':
        burst(b.x, b.y, b.z, 110, Math.min(3, 1 + e.power * 0.12), b.y);
        if (e.boat === 0) { sfx.play('splash', e.power); shake = Math.max(shake, Math.min(0.5, e.power * 0.035)); if (e.points > 0) hud.popup(`AIR ${e.airTime.toFixed(1)}s +${e.points}`, 'gold'); }
        break;
      case 'launch': if (e.boat === 0) sfx.play('launch'); break;
      case 'hit': sfx.play('hit', e.power); shake = Math.max(shake, Math.min(0.45, e.power * 0.03)); burst(b.x, b.y, b.z, 24, 1.2, b.y); break;
      case 'nearmiss': hud.popup(`NEAR MISS +${e.points}`, 'gold'); sfx.play('near'); break;
      case 'reset': hud.popup('复位 +2s', 'bad'); wakes[0].reset(); cam.init = false; snapPoses(); break;
      case 'finish':
        if (e.boat === 0) { hud.center('FINISH!'); sfx.play('finish'); resultsAt = time + 2.6; }
        else if (race.st.phase === 'racing') hud.popup(`${b.name} 冲线`, '');
        break;
      case 'dnf': hud.center('TIME UP'); sfx.play('miss'); resultsAt = time + 2.2; break;
    }
  }
}

// ---------- camera ----------
const camPos = new THREE.Vector3();
const camLook = new THREE.Vector3();
function updateCamera(p: BoatPose, dt: number) {
  const sp = clamp(Math.abs(p.speed) / 33, 0, 1.4);
  if (mode === 'menu' && !view) {
    const a = time * 0.1 + 2.4;
    const R = 10.5;
    camPos.set(p.x + Math.cos(p.heading + a) * R, p.y + 2.6 + Math.sin(time * 0.23) * 0.5, p.z + Math.sin(p.heading + a) * R);
    camLook.set(p.x, p.y + 0.9, p.z);
    camera.fov = 50;
  } else {
    if (!cam.init) { cam.heading = p.heading + (view ? view.yaw : 0); cam.y = p.y; cam.fov = 58; cam.init = true; }
    if (!view) cam.heading += wrapAngle(p.heading - cam.heading) * (1 - Math.exp(-3.4 * dt));
    cam.y = damp(cam.y, p.y, p.grounded ? 6 : 2.2, dt);
    cam.fov = damp(cam.fov, 58 + sp * 5 + (p.boosting ? 11 : 0), 3, dt);
    const fx = Math.cos(cam.heading), fz = Math.sin(cam.heading);
    const bx = Math.cos(p.heading), bz = Math.sin(p.heading);
    if (camMode === 1) {
      camPos.set(p.x - bx * 0.9, p.y + 2.0, p.z - bz * 0.9);
      camLook.set(p.x + bx * 12, p.y + 1.2, p.z + bz * 12);
    } else {
      const dist = 7.5 + sp * 0.9 + (p.boosting ? 0.8 : 0);
      camPos.set(p.x - fx * dist - fz * 1.0, cam.y + 2.35, p.z - fz * dist + fx * 1.0);
      // keep the camera over water in tight gorges
      const loc = locate(course, camPos.x, camPos.z, race.player.idx, 14);
      const lim = sampleTrack(course, loc.s).hw - 1.6;
      if (Math.abs(loc.lat) > lim) {
        const over = (Math.abs(loc.lat) - lim) * Math.sign(loc.lat);
        camPos.x += course.tz[loc.i] * over;
        camPos.z -= course.tx[loc.i] * over;
      }
      camPos.y = Math.max(camPos.y, waterY(course, loc.s) + 1.2);
      camLook.set(p.x + bx * 4.2, lerp(cam.y, p.y, 0.6) + 1.3, p.z + bz * 4.2);
    }
    camera.fov = cam.fov;
  }
  if (shake > 0.002) {
    camPos.x += (rnd() - 0.5) * shake; camPos.y += (rnd() - 0.5) * shake; camPos.z += (rnd() - 0.5) * shake;
    shake *= Math.exp(-7 * dt);
  }
  camera.position.copy(camPos);
  camera.lookAt(camLook);
  camera.updateProjectionMatrix();
}

// ---------- capture pose (style comparison only; no simulation) ----------
const view = params.has('view') ? (() => {
  const [s, speed = 26, steer = 0.5, yaw = -0.5, latOff = 0] = params.get('view')!.split(',').map(Number);
  return { s, speed, steer, yaw, latOff };
})() : null;
function applyView() {
  if (!view) return;
  const b = race.player;
  const lat = lineLat(course, view.s) + view.latOff;
  const P = posAt(course, view.s, lat);
  b.x = P.x; b.z = P.z; b.y = P.wy; b.heading = Math.atan2(P.tz, P.tx); b.s = view.s; b.lat = lat; b.idx = Math.round(view.s / 2);
  b.speed = view.speed; b.steer = view.steer; b.throttle = 1; b.grounded = true;
  copyPose(b, pose[0]); copyPose(b, prev[0]);
}

// ---------- main loop ----------
let last = performance.now();
let fpsAvg = 60;
let slowT = 0;
let frames = 0;
const focus = new THREE.Vector3();

function frame(now: number) {
  requestAnimationFrame(frame);
  const last0 = last;
  // below 20 fps the game slows down rather than taking long blind steps
  const real = Math.min(0.05, Math.max(0.0005, (now - last) / 1000));
  last = now;
  fpsAvg = lerp(fpsAvg, 1000 / Math.max(1, now - last0), 0.08);
  frames++;

  if (controls.hit('Escape', 'KeyP')) togglePause();
  if (controls.hit('KeyM')) { sfx.setMuted(!sfx.muted); $('btnMute').classList.toggle('off', sfx.muted); }
  if (controls.hit('KeyC')) camMode = 1 - camMode;
  if (controls.hit('Enter') && (mode === 'menu' || mode === 'results')) startRace();

  const dt = mode === 'paused' ? 0 : real;
  time += dt;

  if (view) applyView();
  else if (mode === 'playing' || mode === 'results') {
    acc += dt;
    let n = 0;
    const raw: Input = demo ? autopilot(race) : controls.read();
    while (acc >= TUNE.dt && n < 8) {
      race.boats.forEach((b, i) => copyPose(b, prev[i]));
      race.step(TUNE.dt, n === 0 ? raw : { ...raw, reset: false });
      race.boats.forEach((b, i) => copyPose(b, pose[i]));
      handleEvents();
      acc -= TUNE.dt;
      n++;
    }
    if (n === 8) acc = 0;
    if (mode === 'playing' && resultsAt > 0 && time >= resultsAt) { resultsAt = -1; showResults(); }
  } else if (mode === 'menu') {
    race.step(dt, NO_INPUT);
  }

  // interpolated presentation
  const alpha = view ? 1 : clamp(acc / TUNE.dt, 0, 1);
  const pp: BoatPose = { ...pose[0] };
  race.boats.forEach((b, i) => {
    const a = prev[i], c = pose[i];
    const r: BoatPose = {
      x: lerp(a.x, c.x, alpha), y: lerp(a.y, c.y, alpha), z: lerp(a.z, c.z, alpha),
      heading: a.heading + wrapAngle(c.heading - a.heading) * alpha,
      speed: c.speed, steer: c.steer, vy: c.vy, grounded: c.grounded, throttle: c.throttle, boosting: c.boosting,
    };
    if (i === 0) Object.assign(pp, r);
    views[i].update(r, dt, time);
    // a rival sitting on the lens would only block the view
    if (i > 0) views[i].root.visible = camera.position.distanceToSquared(views[i].root.position) > 20;
    const sp = clamp(Math.abs(r.speed) / 30, 0, 1.4);
    const fx = Math.cos(r.heading), fz = Math.sin(r.heading);
    if (dt > 0) {
      emitSpray(r, i, dt);
      wakes[i].mesh.visible = !view;
      wakes[i].update(dt, r.x - fx * 2.6, waterY(course, b.s - 2.6), r.z - fz * 2.6, fx, fz, r.grounded ? clamp(sp * 1.3, 0, 0.95) : 0);
    }
    water.boats.value[i].set(r.x - fx * 1.4, r.z - fz * 1.4, 2.4 + sp * 1.8, r.grounded ? clamp(sp * 1.5, 0, 1) : 0);
    void b;
  });
  if (dt > 0) {
    emitMist(dt, race.player.s);
    spray.update(dt);
    sparks.update(dt);
  }
  water.time.value = time;
  decor.fallTime.value = time;
  courseView.update(mode === 'menu' ? -1 : race.st.nextGate, gateState, time, dt);
  decor.cull(race.player.s, QUALITY[quality].decor);
  updateCamera(pp, dt);
  focus.set(pp.x, pp.y, pp.z).addScaledVector(camera.getWorldDirection(new THREE.Vector3()).setY(0).normalize(), 28);
  env.update(camera, focus, time);
  spray.setViewport(renderer.domElement.height, camera.fov);
  sparks.setViewport(renderer.domElement.height, camera.fov);

  if (mode !== 'menu') hud.update(race);
  $('speedlines').style.opacity = mode === 'playing' && pp.boosting ? '1' : '0';
  sfx.engine(pp.speed, pp.throttle, pp.boosting, pp.grounded, mode === 'playing' || mode === 'results');
  sfx.tickMusic();

  renderer.info.reset();
  if (QUALITY[quality].post) composer.render();
  else renderer.render(scene, camera);

  // drop quality automatically if the machine cannot keep up
  if (!userPickedQuality && mode === 'playing' && quality > 0) {
    slowT = fpsAvg < 34 ? slowT + real : 0;
    if (slowT > 2.5) { slowT = 0; applyQuality(quality - 1); }
  }
  controls.endFrame();
  if (frames === 2) $('loading').remove();
}

// ---------- UI wiring ----------
$('btnStart').addEventListener('click', startRace);
$('btnRestart').addEventListener('click', startRace);
$('btnRestart2').addEventListener('click', startRace);
$('btnResume').addEventListener('click', togglePause);
$('btnMenu').addEventListener('click', toMenu);
$('btnMenu2').addEventListener('click', toMenu);
$('btnPause').addEventListener('click', togglePause);
$('btnMute').addEventListener('click', () => { sfx.unlock(); sfx.setMuted(!sfx.muted); $('btnMute').classList.toggle('off', sfx.muted); });
document.querySelectorAll<HTMLElement>('#quality button').forEach((b) => b.addEventListener('click', () => {
  userPickedQuality = true;
  save('cj.quality', Number(b.dataset.q));
  applyQuality(Number(b.dataset.q));
}));
document.addEventListener('visibilitychange', () => { if (document.hidden && mode === 'playing') setMode('paused'); });
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
  show('touch', true);
  document.querySelectorAll<HTMLElement>('#touch button').forEach((b) => {
    const k = b.dataset.k as 'left' | 'right' | 'boost' | 'brake';
    const set = (v: boolean) => (e: Event) => { e.preventDefault(); controls.touch.used = true; controls.touch[k] = v; };
    b.addEventListener('pointerdown', set(true));
    b.addEventListener('pointerup', set(false));
    b.addEventListener('pointercancel', set(false));
    b.addEventListener('pointerleave', set(false));
  });
}

// Read-only probe for automated playtests and diagnostics; it cannot change game state.
(window as unknown as Record<string, unknown>).__cj = Object.freeze({
  probe() {
    const b = race.player, st = race.st;
    const look = 12 + Math.max(0, b.speed) * 0.55;
    return {
      mode, phase: st.phase, time: race.time, clock: st.clock, penalty: st.penalty, score: st.score, combo: st.combo, place: st.place,
      nextGate: st.nextGate, gatesPassed: st.gatesPassed, gatesMissed: st.gatesMissed, suns: st.sunCount, boost: st.boostMeter, dnf: st.dnf, bestAir: st.bestAir,
      s: b.s, lat: b.lat, x: b.x, z: b.z, heading: b.heading, yawRate: b.yawRate, speed: b.speed, grounded: b.grounded,
      look, hwAhead: sampleTrack(course, b.s + look).hw, lineAhead: lineLat(course, b.s + look),
      rocks: course.rocks.filter((r) => r.s - b.s > -2 && r.s - b.s < look + 8).map((r) => ({ s: r.s, lat: r.lat, r: r.r })),
      ramps: course.ramps.map((r) => ({ s0: r.s0, lat: r.lat, half: r.half })),
      rivals: race.boats.slice(1).map((o) => ({ name: o.name, s: o.s, finished: o.finished })),
      finishS: course.finishS, fps: fpsAvg, quality, gpu: gpu.name,
      draw: { calls: renderer.info.render.calls, tris: renderer.info.render.triangles },
    };
  },
  /** World position of a track coordinate, for bots that steer with real key events. */
  at(s: number, lat: number) { const p = posAt(course, s, lat); return { x: p.x, z: p.z }; },
});

if (import.meta.env.DEV) (window as unknown as Record<string, unknown>).__dev = { scene, terrain, water, decor, courseView, views, spray, renderer }; // profiling only, stripped from production builds
if (params.has('mute')) { sfx.setMuted(true); $('btnMute').classList.add('off'); }
snapPoses();
applyQuality(quality);
setMode(view ? 'playing' : 'menu');
if (view && params.get('hud') === '0') hud.show(false);
if (params.has('autostart')) startRace();
requestAnimationFrame(frame);
