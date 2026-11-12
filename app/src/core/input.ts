import { Input } from '../game/sim';

/** Keyboard, gamepad and touch mapped to one input struct. Held state is dropped on blur. */
export class Controls {
  private keys = new Set<string>();
  private edges = new Set<string>();
  touch = { left: false, right: false, boost: false, brake: false, used: false };
  private padPrev: boolean[] = [];

  constructor() {
    addEventListener('keydown', (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
      if (!e.repeat) this.edges.add(e.code);
      this.keys.add(e.code);
    });
    addEventListener('keyup', (e) => this.keys.delete(e.code));
    addEventListener('blur', () => this.clear());
    document.addEventListener('visibilitychange', () => { if (document.hidden) this.clear(); });
  }

  clear() {
    this.keys.clear();
    this.edges.clear();
    this.touch.left = this.touch.right = this.touch.boost = this.touch.brake = false;
  }

  /** True once per key press. */
  hit(...codes: string[]) {
    let h = false;
    for (const c of codes) if (this.edges.delete(c)) h = true;
    return h;
  }
  endFrame() { this.edges.clear(); }

  private pad() {
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    for (const p of pads) if (p && p.connected) return p;
    return null;
  }

  read(): Input {
    const k = this.keys;
    let steer = (k.has('KeyD') || k.has('ArrowRight') ? 1 : 0) - (k.has('KeyA') || k.has('ArrowLeft') ? 1 : 0);
    let throttle = k.has('KeyW') || k.has('ArrowUp') ? 1 : 0;
    let brake = k.has('KeyS') || k.has('ArrowDown') ? 1 : 0;
    let boost = k.has('Space') || k.has('ShiftLeft') || k.has('ShiftRight');
    let reset = this.edges.has('KeyR');
    if (this.touch.used) {
      steer += (this.touch.right ? 1 : 0) - (this.touch.left ? 1 : 0);
      throttle = this.touch.brake ? 0 : 1;
      brake = Math.max(brake, this.touch.brake ? 1 : 0);
      boost = boost || this.touch.boost;
    }
    const p = this.pad();
    if (p) {
      const ax = p.axes[0] ?? 0;
      if (Math.abs(ax) > 0.15) steer += ax;
      throttle = Math.max(throttle, p.buttons[7]?.value ?? 0, p.buttons[0]?.pressed ? 1 : 0);
      brake = Math.max(brake, p.buttons[6]?.value ?? 0);
      boost = boost || !!p.buttons[1]?.pressed || !!p.buttons[5]?.pressed;
      const now = p.buttons.map((b) => b.pressed);
      if (now[3] && !this.padPrev[3]) reset = true;
      if (now[9] && !this.padPrev[9]) this.edges.add('Escape');
      this.padPrev = now;
    }
    return { steer: Math.max(-1, Math.min(1, steer)), throttle, brake, boost, reset };
  }
}
