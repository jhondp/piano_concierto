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

let ctx;
function ac() { ctx ||= new AudioContext(); ctx.resume(); return ctx; }
function tone(m, t0, dur = 1.6, vol = 0.16) {
  const c = ac(), o = c.createOscillator(), g = c.createGain();
  o.type = "triangle"; o.frequency.value = 440 * 2 ** ((m - 69) / 12);
  g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(vol, t0 + 0.01);
  g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
  o.connect(g).connect(c.destination); o.start(t0); o.stop(t0 + dur + 0.05);
}
// seq: array of chords (arrays of MIDI notes), each played `gap` seconds after the previous one.
function playSeq(seq, gap = 1.1, arp = 0) {
  const t = ac().currentTime + 0.05;
  seq.forEach((ch, i) => ch.forEach((m, k) => tone(m, t + i * gap + k * arp)));
}
function click(t, strong) {
  const c = ac(), o = c.createOscillator(), g = c.createGain();
  o.frequency.value = strong ? 1320 : 760;
  g.gain.setValueAtTime(strong ? 0.3 : 0.14, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.07);
  o.connect(g).connect(c.destination); o.start(t); o.stop(t + 0.08);
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
