/** Procedural WebAudio: engine, water, one-shots and a light music loop. No audio files. */
export class Sfx {
  ctx: AudioContext | null = null;
  muted = false;
  private master!: GainNode;
  private sfx!: GainNode;
  private music!: GainNode;
  private eng: { o1: OscillatorNode; o2: OscillatorNode; sub: OscillatorNode; filt: BiquadFilterNode; gain: GainNode } | null = null;
  private rush: { filt: BiquadFilterNode; gain: GainNode } | null = null;
  private noiseBuf!: AudioBuffer;
  private last: Record<string, number> = {};
  private step = 0;
  private nextNote = 0;
  musicOn = false;

  unlock() {
    if (this.ctx) { void this.ctx.resume(); return; }
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    const ctx = (this.ctx = new AC());
    this.master = ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.8;
    const comp = ctx.createDynamicsCompressor();
    this.master.connect(comp).connect(ctx.destination);
    this.sfx = ctx.createGain(); this.sfx.gain.value = 0.9; this.sfx.connect(this.master);
    this.music = ctx.createGain(); this.music.gain.value = 0.16; this.music.connect(this.master);
    this.noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const filt = ctx.createBiquadFilter(); filt.type = 'lowpass'; filt.frequency.value = 400; filt.Q.value = 2;
    const gain = ctx.createGain(); gain.gain.value = 0;
    const mk = (type: OscillatorType, det: number) => { const o = ctx.createOscillator(); o.type = type; o.detune.value = det; o.connect(filt); o.start(); return o; };
    this.eng = { o1: mk('sawtooth', -8), o2: mk('sawtooth', 9), sub: mk('square', 0), filt, gain };
    filt.connect(gain).connect(this.sfx);
    const src = ctx.createBufferSource(); src.buffer = this.noiseBuf; src.loop = true;
    const rf = ctx.createBiquadFilter(); rf.type = 'bandpass'; rf.frequency.value = 900; rf.Q.value = 0.6;
    const rg = ctx.createGain(); rg.gain.value = 0;
    src.connect(rf).connect(rg).connect(this.sfx); src.start();
    this.rush = { filt: rf, gain: rg };
  }

  setMuted(m: boolean) {
    this.muted = m;
    if (this.ctx) this.master.gain.setTargetAtTime(m ? 0 : 0.8, this.ctx.currentTime, 0.05);
  }
  suspend(on: boolean) { if (this.ctx) void (on ? this.ctx.suspend() : this.ctx.resume()); }

  engine(speed: number, throttle: number, boosting: boolean, grounded: boolean, active: boolean) {
    if (!this.ctx || !this.eng || !this.rush) return;
    const t = this.ctx.currentTime;
    const f = 46 + Math.abs(speed) * 2.6 + throttle * 22 + (boosting ? 26 : 0) + (grounded ? 0 : 30);
    this.eng.o1.frequency.setTargetAtTime(f, t, 0.06);
    this.eng.o2.frequency.setTargetAtTime(f * 1.5, t, 0.06);
    this.eng.sub.frequency.setTargetAtTime(f * 0.5, t, 0.06);
    this.eng.filt.frequency.setTargetAtTime(260 + Math.abs(speed) * 22 + throttle * 500, t, 0.08);
    this.eng.gain.gain.setTargetAtTime(active ? 0.05 + throttle * 0.05 : 0, t, 0.1);
    this.rush.filt.frequency.setTargetAtTime(600 + Math.abs(speed) * 45, t, 0.1);
    this.rush.gain.gain.setTargetAtTime(active && grounded ? Math.min(0.22, Math.abs(speed) * 0.006) : active ? 0.03 : 0, t, 0.12);
  }

  private tone(freq: number, dur: number, type: OscillatorType, vol: number, delay = 0, slide = 0, dest?: AudioNode) {
    const ctx = this.ctx!;
    const t = ctx.currentTime + delay;
    const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq * slide), t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + 0.008); g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
    o.connect(g).connect(dest ?? this.sfx); o.start(t); o.stop(t + dur + 0.02);
  }
  private burst(dur: number, vol: number, f0: number, f1: number, q = 0.8, delay = 0) {
    const ctx = this.ctx!;
    const t = ctx.currentTime + delay;
    const s = ctx.createBufferSource(); s.buffer = this.noiseBuf; s.loop = true;
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = q;
    f.frequency.setValueAtTime(f0, t); f.frequency.exponentialRampToValueAtTime(f1, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + 0.015); g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
    s.connect(f).connect(g).connect(this.sfx); s.start(t, Math.random()); s.stop(t + dur + 0.02);
  }

  play(name: string, arg = 1) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    if (now - (this.last[name] ?? -1) < 0.045) return; // rate limit
    this.last[name] = now;
    switch (name) {
      case 'count': this.tone(440, 0.18, 'square', 0.14); break;
      case 'go': this.tone(880, 0.5, 'square', 0.16); this.tone(1320, 0.5, 'sine', 0.1); break;
      case 'sun': this.tone(880 * Math.pow(1.06, arg), 0.14, 'sine', 0.2); this.tone(1320 * Math.pow(1.06, arg), 0.2, 'sine', 0.12, 0.05); break;
      case 'gate': [523, 659, 784].forEach((f, i) => this.tone(f, 0.28, 'triangle', 0.2, i * 0.06)); break;
      case 'miss': this.tone(160, 0.35, 'sawtooth', 0.16, 0, 0.6); break;
      case 'boost': this.burst(0.7, 0.3, 500, 3200, 1.2); this.tone(180, 0.6, 'sawtooth', 0.08, 0, 2.5); break;
      case 'hit': this.tone(90, 0.25, 'sine', Math.min(0.5, 0.15 + arg * 0.03), 0, 0.5); this.burst(0.22, Math.min(0.4, 0.12 + arg * 0.02), 1800, 300, 0.7); break;
      case 'splash': this.burst(0.7, Math.min(0.5, 0.2 + arg * 0.02), 2400, 350, 0.5); this.tone(70, 0.3, 'sine', 0.3, 0, 0.6); break;
      case 'launch': this.burst(0.35, 0.16, 900, 2600, 1); break;
      case 'near': this.burst(0.25, 0.14, 2600, 5200, 2); break;
      case 'finish': [523, 659, 784, 1047, 1319].forEach((f, i) => this.tone(f, 0.5, 'triangle', 0.22, i * 0.11)); break;
      case 'ui': this.tone(660, 0.08, 'sine', 0.12); break;
    }
  }

  /** Call every frame; schedules a few notes ahead. */
  tickMusic() {
    if (!this.ctx || !this.musicOn) { this.nextNote = 0; return; }
    const ctx = this.ctx;
    if (this.nextNote < ctx.currentTime) this.nextNote = ctx.currentTime + 0.05;
    const beat = 60 / 132 / 2;
    const roots = [220, 174.6, 261.6, 196];
    const penta = [1, 1.2, 1.5, 1.8, 2, 2.4, 3];
    while (this.nextNote < ctx.currentTime + 0.25) {
      const s = this.step++;
      const root = roots[Math.floor(s / 16) % 4];
      const d = this.nextNote - ctx.currentTime;
      if (s % 4 === 0 || s % 16 === 10) this.tone(root / 2, beat * 1.8, 'triangle', 0.5, d, 0, this.music);
      const idx = [0, 2, 4, 2, 5, 4, 2, 3][s % 8];
      if (s % 2 === 0 || s % 8 === 7) this.tone(root * penta[idx], beat * 1.4, 'square', 0.12, d, 0, this.music);
      if (s % 4 === 2) this.tone(root * 2 * penta[(s / 2) % 5 | 0], beat * 3, 'sine', 0.16, d, 0, this.music);
      this.nextNote += beat;
    }
  }
}
