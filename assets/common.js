// Shared helpers: per-browser progress storage, Web Audio playback, keyboard drawing.
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const fmtDate = iso => new Date(iso + "T12:00:00").toLocaleDateString("es", { day: "numeric", month: "long", year: "numeric" });
const today = () => new Date().toISOString().slice(0, 10);

// Section progress lives under pc-sec-<pieceId> as an array of learned section indexes.
const sectionsDone = id => store.get("pc-sec-" + id, []);

let ctx, out, wave;
// Shared audio engine. Phones need: a richer spectrum (small speakers drop low fundamentals),
// a limiter (summed chords clip), playback started only once the context is running (iOS starts it
// suspended), and the "playback" audio session so the iPhone silent switch does not mute it.
function ac() {
  if (!ctx) {
    ctx = new (window.AudioContext || window.webkitAudioContext)({ latencyHint: "interactive" });
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -18; comp.knee.value = 12; comp.ratio.value = 6; comp.attack.value = 0.003; comp.release.value = 0.25;
    out = ctx.createGain(); out.gain.value = 0.85;
    out.connect(comp).connect(ctx.destination);
    // Piano-like partials: strong upper harmonics keep bass notes audible through the missing-fundamental effect.
    const h = [0, 1, 0.7, 0.5, 0.38, 0.3, 0.24, 0.19, 0.15, 0.12, 0.1, 0.08, 0.065, 0.05, 0.04, 0.032, 0.025];
    wave = ctx.createPeriodicWave(new Float32Array(h.length), new Float32Array(h));
    try { if (navigator.audioSession) navigator.audioSession.type = "playback"; } catch (e) { /* older browsers */ }
  }
  if (ctx.state !== "running") ctx.resume();
  return ctx;
}
// Run fn once the context is actually running, so the first tap on iOS is not lost or bunched up.
function whenRunning(fn) {
  const c = ac();
  if (c.state === "running") fn(c);
  else c.resume().then(() => fn(c), () => fn(c));
}
// Unlock audio on the first touch or key press (iOS only allows starting it inside a user gesture).
["pointerdown", "touchend", "keydown"].forEach(ev => document.addEventListener(ev, () => {
  try { const c = ac(), s = c.createBufferSource(); s.buffer = c.createBuffer(1, 1, 22050); s.connect(c.destination); s.start(0); } catch (e) { /* no audio */ }
}, { once: true, capture: true }));

function tone(m, t0, dur = 1.6, vol = 0.16) {
  const c = ac(), o = c.createOscillator(), f = c.createBiquadFilter(), g = c.createGain();
  const hz = 440 * 2 ** ((m - 69) / 12);
  o.setPeriodicWave(wave); o.frequency.value = hz;
  // Brightness fades like a struck string: the filter closes as the note decays.
  f.type = "lowpass"; f.Q.value = 0.5;
  // Floors keep the 300 Hz–2 kHz band (what phone speakers play) open even for bass notes.
  f.frequency.setValueAtTime(Math.min(9000, Math.max(2500, hz * 10)), t0);
  f.frequency.exponentialRampToValueAtTime(Math.min(4000, Math.max(1100, hz * 3)), t0 + Math.min(dur, 0.8));
  g.gain.setValueAtTime(0, t0);
  g.gain.linearRampToValueAtTime(vol, t0 + 0.006);
  g.gain.exponentialRampToValueAtTime(vol * 0.35, t0 + Math.min(dur * 0.6, 0.35));
  g.gain.exponentialRampToValueAtTime(0.0008, t0 + dur);
  o.connect(f).connect(g).connect(out); o.start(t0); o.stop(t0 + dur + 0.05);
}
// seq: array of chords (arrays of MIDI notes), each played `gap` seconds after the previous one.
function playSeq(seq, gap = 1.1, arp = 0) {
  whenRunning(c => {
    const t = c.currentTime + 0.06;
    seq.forEach((ch, i) => ch.forEach((m, k) => tone(m, t + i * gap + k * arp, 1.6, 0.16 / Math.sqrt(Math.max(1, ch.length)))));
  });
}
function click(t, strong) {
  const c = ac(), o = c.createOscillator(), g = c.createGain();
  o.frequency.value = strong ? 1320 : 760;
  g.gain.setValueAtTime(strong ? 0.3 : 0.14, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.07);
  o.connect(g).connect(out); o.start(t); o.stop(t + 0.08);
}

const PC = ["Do", "Re♭", "Re", "Mi♭", "Mi", "Fa", "Sol♭", "Sol", "La♭", "La", "Si♭", "Si"];
const nm = m => PC[m % 12];
function kbd(lit = []) {
  const s = new Set(lit), W = 24, H = 104, blackPc = [1, 3, 6, 8, 10];
  let w = "", b = "", x = 0;
  for (let m = 60; m < 84; m++) {
    if (!blackPc.includes(m % 12)) {
      const on = s.has(m);
      w += `<rect x="${x * W + 1}" y="1" width="${W - 1}" height="${H}" rx="3" fill="${on ? "var(--teal)" : "var(--key)"}" stroke="var(--line)"/>`;
      if (on) w += `<text x="${x * W + W / 2 + 1}" y="${H - 8}" text-anchor="middle" font-size="8.5" font-family="Poppins,sans-serif" fill="#ffffff">${nm(m)}</text>`;
      x++;
    } else {
      b += `<rect x="${x * W - W * 0.32}" y="1" width="${W * 0.64}" height="${H * 0.6}" rx="2" fill="${s.has(m) ? "var(--teal)" : "var(--keyb)"}" stroke="var(--keyb)"/>`;
    }
  }
  return `<svg class="kbd" viewBox="0 0 ${14 * W + 2} ${H + 2}" role="img" aria-label="Teclado: ${lit.map(nm).join(", ") || "sin notas"}">${w}${b}</svg>`;
}
