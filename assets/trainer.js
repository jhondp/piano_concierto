// Daily trainers: note reading, interval ear training and chord ear training.
// Pure music helpers come first so Node can test them; DOM code is guarded at the bottom.

const LETTERS = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"];
const LETTER_PC = [0, 2, 4, 5, 7, 9, 11];
const ACC_SIGN = ["♭", "", "♯"];
const INTERVALS = [
  ["2ª menor", 1], ["2ª mayor", 2], ["3ª menor", 3], ["3ª mayor", 4], ["4ª justa", 5], ["Tritono", 6],
  ["5ª justa", 7], ["6ª menor", 8], ["6ª mayor", 9], ["7ª menor", 10], ["7ª mayor", 11], ["8ª justa", 12],
];
const CHORDS = [
  ["Mayor", [0, 4, 7]], ["Menor", [0, 3, 7]], ["Disminuido", [0, 3, 6]], ["Aumentado", [0, 4, 8]],
  ["7 de dominante", [0, 4, 7, 10]], ["Maj7", [0, 4, 7, 11]], ["m7", [0, 3, 7, 10]],
  ["Semidisminuido", [0, 3, 6, 10]], ["Disminuido 7", [0, 3, 6, 9]],
];
// Diatonic index (octave * 7 + letter) of each clef's bottom line: Mi4 in treble, Sol2 in bass.
const CLEF_BOTTOM = { sol: 4 * 7 + 2, fa: 2 * 7 + 4 };

const mod7 = d => ((d % 7) + 7) % 7;
const diaMidi = d => 12 * (Math.floor(d / 7) + 1) + LETTER_PC[mod7(d)];
// pos 0 = bottom line, 1 = first space, 2 = second line... negative = below the staff.
const staffDia = (clef, pos) => CLEF_BOTTOM[clef] + pos;
const staffMidi = (clef, pos) => diaMidi(staffDia(clef, pos));
const noteLabel = (letter, acc = 0) => LETTERS[mod7(letter)] + ACC_SIGN[acc + 1];
const invert = (notes, k) => { const n = [...notes]; for (let i = 0; i < k; i++) n.push(n.shift() + 12); return n; };
const localIso = (d = new Date()) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
// Consecutive practiced days ending today (or yesterday, so the streak survives until you practice today).
function dayStreak(days, todayIso) {
  const set = new Set(days), d = new Date(todayIso + "T12:00:00");
  if (!set.has(localIso(d))) d.setDate(d.getDate() - 1);
  let n = 0;
  while (set.has(localIso(d))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
const ledgerPositions = pos => {
  const out = [];
  for (let p = -2; p >= pos; p -= 2) out.push(p);
  for (let p = 10; p <= pos; p += 2) out.push(p);
  return out;
};

if (typeof module !== "undefined") module.exports = { LETTERS, INTERVALS, CHORDS, diaMidi, staffMidi, staffDia, noteLabel, invert, dayStreak, ledgerPositions };

if (typeof document !== "undefined") {
  const rnd = n => Math.floor(Math.random() * n);
  const pick = a => a[rnd(a.length)];
  const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
  let active = null; // only one trainer runs at a time

  // Staff geometry: 12 units between lines, bottom line at y = 100.
  function staffSvg(clef, pos, acc) {
    const y = p => 100 - p * 6, nx = 140;
    let s = "";
    for (let i = 0; i < 5; i++) s += `<line x1="8" x2="212" y1="${y(i * 2)}" y2="${y(i * 2)}" />`;
    for (const p of ledgerPositions(pos)) s += `<line x1="${nx - 15}" x2="${nx + 15}" y1="${y(p)}" y2="${y(p)}" />`;
    const glyph = clef === "sol"
      ? `<text class="clef" x="12" y="${y(0) + 12}" font-size="72">𝄞</text>`
      : `<text class="clef" x="14" y="${y(8) + 38}" font-size="46">𝄢</text>`;
    const accTxt = acc ? `<text class="acc" x="${nx - 26}" y="${y(pos) + 7}" font-size="22" text-anchor="middle">${ACC_SIGN[acc + 1]}</text>` : "";
    const label = clef === "sol" ? "clave de Sol" : "clave de Fa";
    return `<svg class="staff" viewBox="0 0 220 144" role="img" aria-label="Pentagrama en ${label} con una nota">
      <g class="lines">${s}</g>${glyph}${accTxt}
      <ellipse cx="${nx}" cy="${y(pos)}" rx="7.6" ry="5.6" transform="rotate(-20 ${nx} ${y(pos)})" />
    </svg><span class="muted t-clef">${label[0].toUpperCase() + label.slice(1)}</span>`;
  }

  function makeTrainer(cfg) {
    const el = document.getElementById(cfg.id);
    const key = "pc-train-" + cfg.store;
    const load = () => ({ best: {}, days: [], total: 0, correct: 0, ...store.get(key, {}) });
    let level = Math.min(store.get(key + "-level", 1), cfg.levels.length);
    const st = { running: false, score: 0, asked: 0, q: null, locked: false, timer: 0, ends: 0 };

    el.innerHTML = `
      <div class="t-head"><h3>${esc(cfg.title)}</h3><p class="muted">${esc(cfg.howto)}</p></div>
      <div class="t-controls">
        <div class="tags" role="group" aria-label="Nivel">${cfg.levels.map((l, i) =>
          `<button type="button" class="tag" data-level="${i + 1}">${esc(l[0])}<small>${esc(l[1])}</small></button>`).join("")}</div>
        ${cfg.extra || ""}
      </div>
      <div class="t-stage"><p class="muted">Pulsa «Empezar» cuando estés listo.</p></div>
      <div class="t-opts" role="group" aria-label="Respuestas"></div>
      <p class="t-msg" aria-live="polite"></p>
      <div class="t-foot">
        <div class="progress"><div class="bar"><i></i></div><span class="mono t-left"></span></div>
        <button type="button" class="btn solid t-start">Empezar</button>
      </div>
      <div class="stats">
        <div><b class="s-score">0</b><span>Puntos</span></div>
        <div><b class="s-best">0</b><span>Mejor ronda</span></div>
        <div><b class="s-streak">0</b><span>Días seguidos</span></div>
        <div><b class="s-acc">–</b><span>Precisión</span></div>
      </div>`;
    const $ = s => el.querySelector(s);
    const stage = $(".t-stage"), opts = $(".t-opts"), msg = $(".t-msg"), startBtn = $(".t-start");

    function stats() {
      const d = load();
      $(".s-score").textContent = st.score;
      $(".s-best").textContent = d.best[level] || 0;
      $(".s-streak").textContent = dayStreak(d.days, localIso());
      $(".s-acc").textContent = d.total ? Math.round(100 * d.correct / d.total) + " %" : "–";
      el.querySelectorAll("[data-level]").forEach(b => {
        const on = +b.dataset.level === level;
        b.classList.toggle("sel", on); b.setAttribute("aria-pressed", on);
      });
      cfg.onLevel?.(level, el);
    }
    function progress() {
      if (cfg.seconds) {
        const left = Math.max(0, Math.ceil((st.ends - Date.now()) / 1000));
        $(".bar i").style.width = (100 * left / cfg.seconds) + "%";
        $(".t-left").textContent = st.running ? left + " s" : cfg.seconds + " s";
        if (st.running && left <= 0) stop(true);
      } else {
        $(".bar i").style.width = (100 * st.asked / cfg.questions) + "%";
        $(".t-left").textContent = `${st.asked} / ${cfg.questions}`;
      }
    }
    function ask() {
      const refocus = opts.contains(document.activeElement) ? +document.activeElement.dataset.i : -1;
      st.q = cfg.ask(level, st.q);
      st.locked = false;
      stage.dataset.fb = "";
      stage.innerHTML = cfg.stage(st.q);
      opts.innerHTML = st.q.answers.map((a, i) =>
        `<button type="button" class="opt" data-i="${i}">${i < 9 ? `<kbd>${i + 1}</kbd>` : ""}${esc(a)}</button>`).join("");
      stage.querySelectorAll("[data-replay]").forEach(b => b.addEventListener("click", () => st.q.play(b.dataset.replay)));
      if (refocus >= 0) opts.querySelectorAll(".opt")[Math.min(refocus, st.q.answers.length - 1)].focus({ preventScroll: true });
      st.q.play();
      progress();
    }
    function answer(i) {
      if (!st.running || st.locked) return;
      st.locked = true;
      const ok = i === st.q.correct, d = load(), day = localIso();
      d.total++; if (ok) d.correct++;
      if (!d.days.includes(day)) d.days = [...d.days, day].slice(-400);
      store.set(key, d);
      st.asked++; if (ok) st.score++;
      const btns = opts.querySelectorAll(".opt");
      btns[st.q.correct].classList.add("right");
      if (!ok) btns[i].classList.add("wrong");
      stage.dataset.fb = ok ? "ok" : "bad";
      msg.className = "t-msg " + (ok ? "ok" : "bad");
      msg.textContent = (ok ? "Correcto. " + st.q.detail : `Era ${st.q.answers[st.q.correct]}. ${st.q.detail}`).trim();
      if (!ok && cfg.replayOnError) st.q.play();
      stats(); progress();
      const done = cfg.questions && st.asked >= cfg.questions;
      setTimeout(() => { if (st.running) done ? stop(true) : ask(); }, ok ? cfg.okDelay : cfg.badDelay);
    }
    function start() {
      if (active && active !== api) active.stop(false);
      active = api;
      Object.assign(st, { running: true, score: 0, asked: 0, q: null, ends: Date.now() + (cfg.seconds || 0) * 1000 });
      startBtn.textContent = "Detener";
      msg.className = "t-msg"; msg.textContent = "";
      if (cfg.seconds) st.timer = setInterval(progress, 250);
      stats(); ask();
      opts.querySelector(".opt")?.focus({ preventScroll: true });
    }
    function stop(finished) {
      if (!st.running) return;
      st.running = false; clearInterval(st.timer);
      if (active === api) active = null;
      startBtn.textContent = "Empezar";
      opts.querySelectorAll(".opt").forEach(b => (b.disabled = true));
      const d = load();
      if (st.score > (d.best[level] || 0)) { d.best[level] = st.score; store.set(key, d); }
      if (finished) {
        msg.className = "t-msg";
        msg.textContent = `Ronda terminada: ${st.score} ${st.score === 1 ? "acierto" : "aciertos"} de ${st.asked}.`;
      }
      stats(); progress();
    }
    const api = { stop, answer, running: () => st.running, el };

    startBtn.addEventListener("click", () => (st.running ? stop(true) : start()));
    opts.addEventListener("click", e => { const b = e.target.closest(".opt"); if (b) answer(+b.dataset.i); });
    el.addEventListener("click", e => {
      const b = e.target.closest("[data-level]");
      if (!b) return;
      if (st.running) stop(false);
      level = +b.dataset.level; store.set(key + "-level", level); stats();
    });
    cfg.init?.(el, api);
    stats(); progress();
    return api;
  }

  // ---- Note reading ----
  let clefPref = store.get("pc-train-notes-clef", "sol");
  makeTrainer({
    id: "t-notes", store: "notes", title: "Lectura de notas",
    howto: "Rondas de 60 segundos. Haz dos o tres al día, unos 5 minutos, y sube de nivel cuando superes 30 aciertos.",
    seconds: 60, okDelay: 250, badDelay: 1100,
    levels: [["Nivel 1", "Dentro del pentagrama"], ["Nivel 2", "Con líneas adicionales"], ["Nivel 3", "Ambas claves"], ["Nivel 4", "Con alteraciones"]],
    extra: `<div class="tags t-clefs" role="group" aria-label="Clave">
        <button type="button" class="tag" data-clef="sol">Clave de Sol</button>
        <button type="button" class="tag" data-clef="fa">Clave de Fa</button></div>
      <label class="t-check"><input type="checkbox" class="t-sound" checked> Sonido</label>`,
    init(el) {
      const box = el.querySelector(".t-sound");
      box.checked = store.get("pc-train-notes-sound", true);
      box.addEventListener("change", () => store.set("pc-train-notes-sound", box.checked));
      el.querySelector(".t-clefs").addEventListener("click", e => {
        const b = e.target.closest("[data-clef]");
        if (!b) return;
        clefPref = b.dataset.clef; store.set("pc-train-notes-clef", clefPref);
        this.onLevel(null, el);
      });
    },
    onLevel(level, el) {
      const lv = level ?? +el.querySelector(".tag.sel[data-level]")?.dataset.level;
      const clefs = el.querySelector(".t-clefs");
      clefs.hidden = lv >= 3;
      clefs.querySelectorAll("[data-clef]").forEach(b => {
        const on = b.dataset.clef === clefPref;
        b.classList.toggle("sel", on); b.setAttribute("aria-pressed", on);
      });
    },
    ask(level, prev) {
      let q;
      do {
        const clef = level >= 3 ? pick(["sol", "fa"]) : clefPref;
        const pos = level === 1 ? rnd(9) : pick(range(-4, 12));
        const letter = staffDia(clef, pos);
        let acc = 0;
        if (level === 4) {
          const l = mod7(letter), canSharp = [0, 1, 3, 4, 5].includes(l), canFlat = [1, 2, 4, 5, 6].includes(l);
          acc = pick([0, canSharp ? 1 : 0, canFlat ? -1 : 0]);
        }
        q = { clef, pos, letter, acc, midi: staffMidi(clef, pos) + acc };
      } while (prev && prev.clef === q.clef && prev.pos === q.pos && prev.acc === q.acc);
      if (level < 4) {
        q.answers = LETTERS.slice();
        q.correct = mod7(q.letter);
      } else {
        // Nine options: the shown letter and its neighbours, each with ♭, natural and ♯ (keys 1–9).
        q.answers = [];
        for (const dl of [-1, 0, 1]) for (const a of [-1, 0, 1]) q.answers.push(noteLabel(q.letter + dl, a));
        q.correct = 3 + q.acc + 1;
      }
      q.detail = "";
      q.play = () => { if (document.querySelector("#t-notes .t-sound").checked) playSeq([[q.midi]]); };
      return q;
    },
    stage: q => staffSvg(q.clef, q.pos, q.acc),
  });

  // ---- Interval ear training ----
  const LEVEL_POOL = [[1, 3, 6, 11], range(0, 11), range(0, 11), range(0, 11)];
  makeTrainer({
    id: "t-intervals", store: "intervals", title: "Oído: intervalos",
    howto: "Rondas de 20 intervalos. Unos 10 minutos al día; canta el intervalo en voz baja antes de responder.",
    questions: 20, okDelay: 900, badDelay: 2600, replayOnError: true,
    levels: [["Nivel 1", "2ª M, 3ª M, 5ª J, 8ª J"], ["Nivel 2", "Todos, ascendentes"], ["Nivel 3", "Ascendentes y descendentes"], ["Nivel 4", "También armónicos"]],
    ask(level) {
      const pool = LEVEL_POOL[level - 1];
      const idx = pick(pool), semi = INTERVALS[idx][1];
      const mode = level <= 2 ? "asc" : pick(level === 3 ? ["asc", "desc"] : ["asc", "desc", "harm"]);
      const low = 53 + rnd(12), notes = mode === "desc" ? [low + semi, low] : [low, low + semi];
      const modeTxt = { asc: "Melódico ascendente", desc: "Melódico descendente", harm: "Armónico" }[mode];
      return {
        modeTxt, answers: pool.map(i => INTERVALS[i][0]), correct: pool.indexOf(idx),
        detail: `${nm(notes[0])} → ${nm(notes[1])}.`,
        play: () => (mode === "harm" ? playSeq([notes]) : playSeq(notes.map(n => [n]), 0.75)),
      };
    },
    stage: q => `<p class="muted">${q.modeTxt}</p>
      <button type="button" class="btn t-play" data-replay>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>Escuchar de nuevo</button>`,
  });

  // ---- Chord ear training ----
  const CHORD_POOL = [2, 4, 9, 9];
  const INV_NAMES = ["estado fundamental", "1ª inversión", "2ª inversión", "3ª inversión"];
  makeTrainer({
    id: "t-chords", store: "chords", title: "Oído: acordes",
    howto: "Rondas de 20 acordes. Unos 10 minutos al día; si dudas, arpégialo y escucha la 3ª.",
    questions: 20, okDelay: 900, badDelay: 2800, replayOnError: true,
    levels: [["Nivel 1", "Mayor y menor"], ["Nivel 2", "Más disminuido y aumentado"], ["Nivel 3", "Más séptimas"], ["Nivel 4", "Con inversiones"]],
    ask(level) {
      const n = CHORD_POOL[level - 1], idx = rnd(n), [, formula] = CHORDS[idx];
      const root = 48 + rnd(12), inv = level === 4 ? rnd(formula.length) : 0;
      const notes = invert(formula.map(s => root + s), inv);
      return {
        answers: CHORDS.slice(0, n).map(c => c[0]), correct: idx,
        detail: `Fundamental ${nm(root)}, ${INV_NAMES[inv]}.`,
        play: how => playSeq(how === "arp" ? notes.map(x => [x]) : [notes], 0.45),
      };
    },
    stage: () => `<p class="muted">¿Qué tipo de acorde suena?</p>
      <div class="t-plays">
        <button type="button" class="btn t-play" data-replay="block">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>Escuchar de nuevo</button>
        <button type="button" class="btn t-play" data-replay="arp">Arpegiar</button>
      </div>`,
  });

  // Number keys 1–9 answer in the running trainer.
  document.addEventListener("keydown", e => {
    if (!active || e.altKey || e.ctrlKey || e.metaKey || /^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName)) return;
    if (/^[1-9]$/.test(e.key)) {
      const b = active.el.querySelectorAll(".opt")[+e.key - 1];
      if (b) { e.preventDefault(); active.answer(+b.dataset.i); }
    }
  });
}
