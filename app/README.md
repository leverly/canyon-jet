# Canyon Jet · 红河峡谷喷射艇

Arcade jet-boat race down a red sandstone canyon, built with Three.js + TypeScript + Vite.
Everything on screen and everything you hear is generated in code: no model, texture or audio files.

## Run

```bash
npm ci
npm run dev        # http://127.0.0.1:5180/
npm run build      # type-check + production bundle in dist/
npm run preview    # serves dist/ on :4180
npm test           # rule tests (vitest)
```

Node 20+ (developed on Node 24).

## Controls

| Action | Keyboard | Gamepad | Touch |
|---|---|---|---|
| Throttle | W / ↑ | RT or A | automatic |
| Steer | A D / ← → | left stick | ◀ ▶ |
| Brake / reverse | S / ↓ | LT | 刹 |
| Boost | Space / Shift | B or RB | BOOST |
| Reset to course (+2 s) | R | Y | |
| Camera chase / cockpit | C | | |
| Pause | Esc / P | Start | Ⅱ button |
| Mute | M | | ♪ button |

## Rules

- Point-to-point race against three rival boats over a 2.4 km river.
- 19 gates must be taken in order. Passing one scores 250 x combo and raises the combo (max x5); missing one costs 3 s and resets the combo.
- Sun pickups score 100 x combo and add a little boost. Each can be taken once.
- Boost pads give a surge and refill the meter. Hold boost to spend the meter.
- Two ramps and the waterfall launch the boat; air time scores on landing.
- Rocks and banks cost speed; a hard hit resets the combo. Skimming a rock at speed scores a near miss.
- Finishing adds a place bonus and a time bonus. The race ends as DNF at 5:00.

## Layout

```
src/game/    course.ts (track, gates, rocks, pickups), sim.ts (deterministic fixed-step rules, rivals, autopilot)
src/world/   env, terrain, water, boat, props (foliage, gates, pickups), fx (spray, wake)
src/ui/      hud.ts, style.css      src/core/  input, audio, math
tests/       rule tests             scripts/   shot.mjs, perf.mjs, playthrough.mjs (need a Chrome binary)
```

URL switches: `?q=0|1|2` quality, `?mute`, `?demo&autostart` autopilot attract run, `?view=s,speed,steer,yaw` frozen pose for style captures.
`window.__cj.probe()` is a read-only state probe used by the playtest script.
