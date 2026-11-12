import { Race } from '../game/sim';

const $ = (id: string) => document.getElementById(id)!;

export function fmtTime(t: number) {
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}
export function fmtTimeMs(t: number) {
  const m = Math.floor(t / 60);
  const s = t - m * 60;
  return `${m}:${s.toFixed(2).padStart(5, '0')}`;
}

/** DOM HUD. Every value is read from the live race state. */
export class Hud {
  private root = $('hud');
  private cache: Record<string, string> = {};
  private dots = Array.from(document.querySelectorAll<HTMLElement>('#progress .d'));
  private bar = document.querySelector<HTMLElement>('#progress i')!;
  private lastCombo = 1;

  private set(id: string, v: string) {
    if (this.cache[id] === v) return;
    this.cache[id] = v;
    $(id).textContent = v;
  }
  show(on: boolean) { this.root.classList.toggle('hidden', !on); }

  update(race: Race) {
    const st = race.st;
    const c = race.course;
    const p = race.player;
    this.set('timer', fmtTime(race.time));
    this.set('scoreVal', st.score.toLocaleString('en-US'));
    this.set('speedVal', String(Math.round(Math.abs(p.speed) * 3.6)));
    this.set('posVal', String(st.place));
    this.set('gateVal', `GATE ${Math.min(st.nextGate, c.gates.length - 1)}/${c.gates.length - 1}`);
    this.set('combo', 'x' + st.combo);
    if (st.combo !== this.lastCombo) {
      const el = $('combo');
      el.classList.add('pop');
      setTimeout(() => el.classList.remove('pop'), 140);
      this.lastCombo = st.combo;
    }
    const w = Math.round(st.boostMeter * 100) + '%';
    if (this.cache.boost !== w) { this.cache.boost = w; $('boostFill').style.width = w; }
    $('boost').classList.toggle('on', p.boosting);
    const span = c.finishS - c.startS;
    const order = [1, 2, 3, 0];
    order.forEach((b, i) => {
      const f = Math.max(0, Math.min(1, (race.boats[b].s - c.startS) / span));
      this.dots[i].style.left = (f * 100).toFixed(1) + '%';
      if (b === 0) this.bar.style.width = (f * 100).toFixed(1) + '%';
    });
    const warn = st.phase === 'racing' && st.wrongWayT > 0.8 ? '方向反了！WRONG WAY' : '';
    this.set('warn', warn);
  }

  center(text: string) {
    const el = $('center');
    el.textContent = text;
    el.classList.remove('pulse');
    void el.offsetWidth;
    el.classList.add('pulse');
  }
  popup(text: string, cls = '') {
    const box = $('popups');
    while (box.children.length > 3) box.firstChild!.remove();
    const d = document.createElement('div');
    d.className = 'pop ' + cls;
    d.textContent = text;
    box.appendChild(d);
    setTimeout(() => d.remove(), 1250);
  }
  clear() {
    $('popups').innerHTML = '';
    $('center').textContent = '';
    $('center').classList.remove('pulse');
    this.lastCombo = 1;
  }
}
