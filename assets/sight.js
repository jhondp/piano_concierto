// Sight-reading trainer: read a short excerpt (assets/sight-data.js) and play it note by note or in time.
// Wrapped in a function so its names do not collide with trainer.js globals; pure helpers are exported for Node.
(function () {
  const WHITE = { 0: 0, 2: 1, 4: 2, 5: 3, 7: 4, 9: 5, 11: 6 }; // pitch class -> letter index (Do = 0)
  const CLEF_BOTTOM = { sol: 4 * 7 + 2, fa: 2 * 7 + 4 }; // diatonic index of the bottom line: Mi4 / Sol2
  const SHARP_ORDER = [3, 0, 4, 1, 5, 2, 6]; // Fa Do Sol Re La Mi Si
  const FLAT_ORDER = [6, 2, 5, 1, 4, 0, 3]; // Si Mi La Re Sol Do Fa
  // Key signature positions on the treble staff (0 = bottom line); bass clef is two steps lower.
  const SHARP_POS = [8, 5, 9, 6, 3, 7, 4], FLAT_POS = [4, 7, 3, 6, 2, 5, 1];
  const NAMES = ["Do", "Re♭", "Re", "Mi♭", "Mi", "Fa", "Sol♭", "Sol", "La♭", "La", "Si♭", "Si"];

  const mod = (n, m) => ((n % m) + m) % m;
  const barLen = meter => (meter[0] * 4) / meter[1]; // in quarter notes
  const beatLen = meter => (meter[1] === 8 && meter[0] % 3 === 0 ? 1.5 : 4 / meter[1]);
  const noteName = m => NAMES[mod(m, 12)] + (Math.floor(m / 12) - 1);

  // Accidental a key signature gives a letter: +1 sharp, -1 flat, 0 natural.
  function keyAcc(letter, key) {
    if (key > 0) return SHARP_ORDER.slice(0, key).includes(letter) ? 1 : 0;
    if (key < 0) return FLAT_ORDER.slice(0, -key).includes(letter) ? -1 : 0;
    return 0;
  }
  // Diatonic spelling: white keys as naturals; black keys as flats in flat keys, as sharps otherwise.
  function spell(midi, key) {
    const pc = mod(midi, 12), oct = Math.floor(midi / 12) - 1;
    if (pc in WHITE) return { dia: oct * 7 + WHITE[pc], acc: 0 };
    return key < 0 ? { dia: oct * 7 + WHITE[pc + 1], acc: -1 } : { dia: oct * 7 + WHITE[pc - 1], acc: 1 };
  }
  // Staff position (0 = bottom line, 1 = first space...) plus the spelled accidental.
  function staffPos(midi, clef, key) {
    const s = spell(midi, key);
    return { pos: s.dia - CLEF_BOTTOM[clef], dia: s.dia, acc: s.acc };
  }
  // Accidental to print (-1 ♭, 0 ♮, 1 ♯) or null. barAcc (Map dia -> acc) holds accidentals already shown
  // in this bar on the same line or space; it is updated.
  function accidentalFor(sp, key, barAcc) {
    const inForce = barAcc.has(sp.dia) ? barAcc.get(sp.dia) : keyAcc(mod(sp.dia, 7), key);
    if (sp.acc === inForce) return null;
    barAcc.set(sp.dia, sp.acc);
    return sp.acc;
  }
  // Timing judge: delta = press time minus note time (seconds), win = half-width of the on-time window.
  const judge = (delta, win) => (Math.abs(delta) <= win ? "ok" : delta < 0 ? "early" : "late");
  // Playable events: rests skipped, tied notes merged into the first one. Times in quarter notes.
  function timeline(notes) {
    const events = [];
    let t = 0;
    notes.forEach(([m, d], i) => {
      const cont = i > 0 && notes[i - 1][2] && notes[i - 1][0] === m && m != null;
      if (cont) { const e = events[events.length - 1]; e.dur += d; e.idx.push(i); }
      else if (m != null) events.push({ midi: m, on: t, dur: d, i, idx: [i] });
      t += d;
    });
    return { events, total: t };
  }
  // Keyboard range: whole octaves around the excerpt, at least two, growing toward middle Do.
  function keyRange(notes) {
    const ms = notes.map(n => n[0]).filter(m => m != null);
    let lo = 12 * Math.floor(Math.min(...ms) / 12);
    let hi = 12 * Math.ceil((Math.max(...ms) + 1) / 12);
    if (hi - lo < 24) { if (lo >= 60) lo = hi - 24; else hi = lo + 24; }
    return [lo, hi];
  }

  if (typeof module !== "undefined") module.exports = { keyAcc, spell, staffPos, accidentalFor, judge, timeline, keyRange, barLen, beatLen, noteName };
  if (typeof document === "undefined" || typeof SIGHT === "undefined") return;
  const el = document.getElementById("t-sight");
  if (!el) return;

  // ---------- Score drawing ----------
  const STEP = 6, CLEF_W = 70; // 6 units per staff step; room for the clef glyph
  const SLOT = { 0.25: 16, 0.5: 23, 0.75: 27, 1: 31, 1.5: 37, 2: 43, 3: 51, 4: 57 };
  const ACC_TXT = { "-1": "♭", 0: "♮", 1: "♯" };

  function renderScore(ex, pxWidth) {
    const narrow = pxWidth < 520, U = narrow ? 1 : 1.15, k = narrow ? 0.85 : 1; // px per unit, slot squeeze
    const W = Math.max(200, Math.floor(pxWidth / U));
    const maxBars = narrow ? 2 : 4;
    const bl = barLen(ex.meter), bq = beatLen(ex.meter), shift = ex.clef === "fa" ? -2 : 0;
    const bars = [];
    let t = 0;
    ex.notes.forEach(([m, d, tie], i) => {
      const b = Math.floor((t + 1e-6) / bl);
      (bars[b] ||= []).push({ i, m, d, tie, t: t - b * bl });
      t += d;
    });
    let minPos = 8, maxPos = 0;
    bars.forEach(bar => {
      const acc = new Map();
      bar.forEach(o => {
        if (o.m == null) { o.w = (SLOT[o.d] || 31) * k; return; }
        const sp = staffPos(o.m, ex.clef, ex.key), a = accidentalFor(sp, ex.key, acc);
        const cont = o.i > 0 && ex.notes[o.i - 1][2];
        Object.assign(o, { pos: sp.pos, acc: cont ? null : a });
        o.w = (SLOT[o.d] || 31) * k + (o.acc != null ? 11 : 0);
        minPos = Math.min(minPos, o.pos); maxPos = Math.max(maxPos, o.pos);
      });
      bar.w = 14 + bar.reduce((s, o) => s + o.w, 0);
    });
    const head = first => CLEF_W + Math.abs(ex.key) * 10 + (first ? 26 : 0) + 4;
    const systems = [];
    bars.forEach((bar, b) => {
      let s = systems[systems.length - 1];
      if (!s || s.bars.length >= maxBars || head(systems.length === 1) + s.w + bar.w > W) {
        s = { bars: [], w: 0 }; systems.push(s);
      }
      s.bars.push(b); s.w += bar.w;
    });

    const top = Math.max(14, maxPos + 7), bot = Math.min(ex.clef === "sol" ? -6 : -4, minPos - 7);
    const y = p => 6 + (top - p) * STEP, H = (top - bot) * STEP + 12;
    const firstBar = parseInt(ex.bars, 10) || 1;
    const geo = [], sysEnd = [];
    let prevScale = 1;
    // Slightly too wide systems shrink to fit; much wider ones (dense sixteenths on phones) scroll instead.
    const fitPx = px => Math.round(px > pxWidth && px <= pxWidth * 1.5 ? pxWidth : px);
    const svgs = systems.map((s, si) => {
      const hw = head(si === 0);
      // Justify each system; a short last system keeps natural spacing instead of stretching.
      let sysW = Math.max(W, hw + s.w + 4), scale = (sysW - hw - 4) / s.w;
      if (si > 0 && si === systems.length - 1 && scale > prevScale * 1.15) { scale = prevScale; sysW = hw + s.w * scale + 4; }
      prevScale = scale;
      let g = "", notesSvg = "", x = hw;
      for (let i = 0; i < 5; i++) g += `<line x1="4" x2="${sysW - 2}" y1="${y(i * 2)}" y2="${y(i * 2)}"/>`;
      const clef = ex.clef === "sol"
        ? `<text class="clef" x="12" y="${y(0) + 12}" font-size="72">𝄞</text>`
        : `<text class="clef" x="14" y="${y(8) + 38}" font-size="46">𝄢</text>`;
      let sig = "";
      const kp = ex.key > 0 ? SHARP_POS : FLAT_POS;
      for (let j = 0; j < Math.abs(ex.key); j++)
        sig += `<text class="acc" x="${CLEF_W + 4 + j * 10}" y="${y(kp[j] + shift) + 7}" font-size="25" text-anchor="middle">${ex.key > 0 ? "♯" : "♭"}</text>`;
      if (si === 0) {
        const tx = CLEF_W + Math.abs(ex.key) * 10 + 13;
        sig += `<text class="tsig" x="${tx}" y="${y(6)}">${ex.meter[0]}</text><text class="tsig" x="${tx}" y="${y(2)}">${ex.meter[1]}</text>`;
      }
      sig += `<text class="bnum" x="4" y="${y(8) - 30}">${firstBar + s.bars[0]}</text>`;

      s.bars.forEach((b, bi) => {
        const bar = bars[b];
        let xx = x + 10 * scale;
        bar.forEach(o => {
          o.x = xx + (o.acc != null ? 11 : 0) + 8;
          o.sys = si;
          geo[o.i] = { sys: si, x: o.x };
          xx += o.w * scale;
        });
        notesSvg += drawBar(bar, y, bq);
        x += bar.w * scale;
        const last = b === bars.length - 1;
        g += last
          ? `<line x1="${x - 6}" x2="${x - 6}" y1="${y(8)}" y2="${y(0)}"/><rect class="fin" x="${x - 3.5}" y="${y(8)}" width="3.5" height="${y(0) - y(8)}"/>`
          : `<line x1="${x}" x2="${x}" y1="${y(8)}" y2="${y(0)}"/>`;
      });
      sysEnd[si] = x;
      // Ties: arc to the next note, or to the end of the system when the next note wraps.
      let ties = "";
      s.bars.forEach(b => bars[b].forEach(o => {
        if (!o.tie || o.m == null) return;
        const nx = geo[o.i + 1] && geo[o.i + 1].sys === si ? geo[o.i + 1].x - 7 : o.x + 24;
        const up = o.pos >= 4, yy = y(o.pos) + (up ? -7 : 7), c = up ? -7 : 7;
        ties += `<path class="tie" d="M${o.x + 6},${yy} Q${(o.x + nx) / 2},${yy + c} ${nx},${yy}"/>`;
      }));
      return `<svg class="sx-sys" viewBox="0 0 ${sysW} ${H}" width="${fitPx(sysW * U)}" role="img" aria-label="Pentagrama en clave de ${ex.clef === "sol" ? "sol" : "fa"}, sistema ${si + 1} de ${systems.length}">
        <rect class="cursor" x="-20" y="${y(10)}" width="3" height="${y(-2) - y(10)}" rx="1.5"/>
        <g class="ln">${g}</g>${clef}${sig}${ties}${notesSvg}</svg>`;
    });
    return { html: svgs.join(""), geo, sysEnd };
  }

  // Notes, rests, stems, flags and beams of one bar.
  function drawBar(bar, y, bq) {
    let out = "";
    const stemLen = 34;
    // Beam groups: consecutive eighths or shorter inside the same beat.
    const groups = [];
    let run = [];
    const flush = () => { if (run.length > 1) groups.push(run); run = []; };
    bar.forEach(o => {
      const beamable = o.m != null && o.d < 1;
      const beat = Math.floor((o.t + 1e-6) / bq);
      if (!beamable) { flush(); return; }
      if (run.length && Math.floor((run[0].t + 1e-6) / bq) !== beat) flush();
      run.push(o);
    });
    flush();
    const inGroup = new Map();
    groups.forEach(gr => {
      const up = gr.reduce((s, o) => s + o.pos, 0) / gr.length < 4;
      const f = gr[0], l = gr[gr.length - 1];
      const end = o => (up ? y(o.pos) - stemLen : y(o.pos) + stemLen);
      const sx = o => (up ? o.x + 6 : o.x - 6);
      let slope = (end(l) - end(f)) / (sx(l) - sx(f) || 1);
      slope = Math.max(-0.15, Math.min(0.15, slope));
      let y0 = end(f);
      const line = o => y0 + slope * (sx(o) - sx(f));
      // Keep every stem at least 26 units long.
      let fix = 0;
      gr.forEach(o => { fix = up ? Math.max(fix, line(o) - (y(o.pos) - 26)) : Math.min(fix, line(o) - (y(o.pos) + 26)); });
      y0 -= fix;
      gr.forEach(o => inGroup.set(o, { up, endY: line(o), sx: sx(o) }));
      const th = 4.5, d = up ? th : -th;
      out += `<path class="beam" d="M${sx(f)},${line(f)} L${sx(l)},${line(l)} L${sx(l)},${line(l) + d} L${sx(f)},${line(f) + d}Z"/>`;
      // Secondary beams for sixteenths.
      const off = up ? 7 : -7;
      gr.forEach((o, k) => {
        if (o.d > 0.25) return;
        const nx = gr[k + 1], pv = gr[k - 1];
        let a, b;
        if (nx && nx.d <= 0.25) { a = o; b = nx; }
        else if (pv && pv.d <= 0.25) return;
        else { a = o; b = null; }
        const x1 = sx(a), x2 = b ? sx(b) : x1 + (pv ? -8 : 8);
        const y1 = line(a) + off, y2 = (b ? line(b) : line(a) + slope * (x2 - x1)) + off;
        out += `<path class="beam" d="M${x1},${y1} L${x2},${y2} L${x2},${y2 + d} L${x1},${y1 + d}Z"/>`;
      });
    });

    bar.forEach(o => {
      if (o.m == null) { out += `<g class="sx-n sx-r" data-i="${o.i}">${rest(o, y)}</g>`; return; }
      const cy = y(o.pos);
      let s = `<rect class="hi" x="${o.x - 11}" y="${cy - 11}" width="22" height="22" rx="7"/>`;
      for (let p = -2; p >= o.pos; p -= 2) s += `<line class="ledger" x1="${o.x - 11}" x2="${o.x + 11}" y1="${y(p)}" y2="${y(p)}"/>`;
      for (let p = 10; p <= o.pos; p += 2) s += `<line class="ledger" x1="${o.x - 11}" x2="${o.x + 11}" y1="${y(p)}" y2="${y(p)}"/>`;
      if (o.acc != null) s += `<text class="acc" x="${o.x - 17}" y="${cy + 7}" font-size="24" text-anchor="middle">${ACC_TXT[o.acc]}</text>`;
      const hollow = o.d >= 2;
      s += `<ellipse class="${hollow ? "hd open" : "hd"}" cx="${o.x}" cy="${cy}" rx="6.6" ry="4.9" transform="rotate(-20 ${o.x} ${cy})"/>`;
      if ([0.75, 1.5, 3].includes(o.d)) s += `<circle class="dot" cx="${o.x + 11}" cy="${cy - (o.pos % 2 === 0 ? 3 : 0)}" r="1.9"/>`;
      if (o.d < 4) {
        const gi = inGroup.get(o);
        const up = gi ? gi.up : o.pos < 4;
        const sx = up ? o.x + 6 : o.x - 6;
        let ey = gi ? gi.endY : up ? Math.min(cy - stemLen, y(4)) : Math.max(cy + stemLen, y(4));
        s += `<line class="stem" x1="${sx}" x2="${sx}" y1="${cy + (up ? -1 : 1)}" y2="${ey}"/>`;
        if (!gi && o.d < 1) {
          const n = o.d <= 0.25 ? 2 : 1, dir = up ? 1 : -1;
          for (let k = 0; k < n; k++) {
            const fy = ey + dir * k * 7;
            s += `<path class="flag" d="M${sx},${fy} q2,${9 * dir} 9,${13 * dir} q3,${4 * dir} 0,${11 * dir}"/>`;
          }
        }
      }
      out += `<g class="sx-n" data-i="${o.i}">${s}</g>`;
    });
    return out;
  }

  function rest(o, y) {
    const x = o.x;
    if (o.d >= 4) return `<rect class="hd" x="${x - 6}" y="${y(6)}" width="12" height="5"/>`;
    if (o.d >= 2) return `<rect class="hd" x="${x - 6}" y="${y(4) - 5}" width="12" height="5"/>`;
    if (o.d >= 1) return `<path class="rq" d="M${x - 3},${y(7.4)} L${x + 3},${y(5.6)} L${x - 2},${y(4)} L${x + 3.5},${y(2.4)} Q${x - 4},${y(2.6)} ${x},${y(0.8)}"/>`;
    let s = `<circle class="hd" cx="${x - 3}" cy="${y(5.2)}" r="2.6"/><path class="rl" d="M${x - 3},${y(4.9)} Q${x + 1},${y(4.6)} ${x + 4},${y(5.8)} L${x - 1},${y(o.d <= 0.25 ? 0.6 : 2)}"/>`;
    if (o.d <= 0.25) s += `<circle class="hd" cx="${x - 4.5}" cy="${y(3.2)}" r="2.6"/><path class="rl" d="M${x - 4.5},${y(2.9)} Q${x},${y(2.6)} ${x + 3.2},${y(3.8)}"/>`;
    return s;
  }

  // ---------- Card UI ----------
  const reduceMotion = () => window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const best = () => store.get("pc-sight-best", {});
  let ex = SIGHT.find(e => e.id === store.get("pc-sight-last", "")) || SIGHT[0];
  let mode = store.get("pc-sight-mode", "step") === "tempo" ? "tempo" : "step";
  let score = null, marks = [], tried = false;
  const st = { run: null, idx: 0, errors: 0, events: [], raf: 0 };
  let range = [48, 72], kbBase = 60;
  const KEYMAP = "awsedftgyhujk";

  el.innerHTML = `
    <div class="t-head"><h3>Lectura a primera vista</h3>
      <p class="muted">Elige un nivel y te tocará un fragmento al azar. Léelo sin escucharlo antes y tócalo en el teclado de la pantalla, en el del ordenador o en tu piano MIDI.</p></div>
    <div class="sx-pick">
      <div class="tags" role="group" aria-label="Nivel">${[1, 2, 3].map(lv => `
        <button type="button" class="tag" data-lv="${lv}">Nivel ${lv}<small>${SIGHT.filter(e => e.level === lv).length} fragmentos</small></button>`).join("")}</div>
      <button type="button" class="btn sx-next"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h3.5c2 0 3.2 1 4.3 2.6l1.4 2.1c1.1 1.6 2.3 2.6 4.3 2.6H20M17 4l3 3-3 3M4 17h3.5c1.2 0 2.1-.4 2.9-1.1M14.1 8.1c.8-.7 1.7-1.1 2.9-1.1H20M17 14l3 3-3 3"/></svg>Otro fragmento</button>
    </div>
    <p class="sx-info"></p>
    <div class="t-controls">
      <div class="tags" role="group" aria-label="Modo">
        <button type="button" class="tag" data-mode="step">Paso a paso</button>
        <button type="button" class="tag" data-mode="tempo">A tempo</button>
      </div>
      <label class="sx-bpm"><span>Tempo <b class="sx-bpmv"></b></span>
        <input type="range" class="sx-bpmr" min="20" max="120" step="2" aria-label="Pulsaciones por minuto"></label>
    </div>
    <div class="sx-score" aria-live="off"></div>
    <p class="muted sx-note"></p>
    <div class="sx-dock">
    <div class="t-foot sx-foot">
      <p class="t-msg sx-msg" aria-live="polite"></p>
      <div class="t-plays">
        <button type="button" class="btn sx-listen" hidden><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>Escuchar el fragmento</button>
        <button type="button" class="btn solid sx-start">Empezar</button>
      </div>
    </div>
    <div class="sx-piano" aria-label="Teclado de piano"><div class="sx-keys"></div></div>
    <p class="muted sx-help"></p>
    </div>
    <p class="muted sx-midi"><button type="button" class="btn sx-midib" hidden>Conectar piano MIDI</button> <span class="sx-midis"></span></p>
    <p class="muted sx-best"></p>`;
  const $ = s => el.querySelector(s);
  const scoreEl = $(".sx-score"), msg = $(".sx-msg"), startBtn = $(".sx-start"), listenBtn = $(".sx-listen");
  const bpmR = $(".sx-bpmr"), keysEl = $(".sx-keys"), pianoEl = $(".sx-piano");

  const spq = () => 60 / (+bpmR.value) / beatLen(ex.meter); // seconds per quarter note

  function setMsg(text, cls = "") { msg.className = "t-msg sx-msg " + cls; msg.textContent = text; }
  function mark(i, cls) {
    marks[i] = cls;
    const g = scoreEl.querySelector(`.sx-n[data-i="${i}"]`);
    if (g) g.setAttribute("class", "sx-n" + (ex.notes[i][0] == null ? " sx-r" : "") + (cls ? " " + cls : ""));
  }
  function markEvent(e, cls) { e.idx.forEach(i => mark(i, cls)); if (/\bcur\b/.test(cls)) followSystem(score.geo[e.idx[0]]?.sys); }
  // Keep the line being played visible inside the (phone-height-limited) score box.
  let followed = -1;
  function followSystem(sys) {
    if (sys == null || sys === followed) return;
    followed = sys;
    const svg = scoreEl.querySelectorAll(".cursor")[sys]?.closest("svg");
    if (!svg || scoreEl.scrollHeight <= scoreEl.clientHeight) return;
    const top = svg.getBoundingClientRect().top - scoreEl.getBoundingClientRect().top + scoreEl.scrollTop - 6;
    scoreEl.scrollTo({ top, behavior: reduceMotion() ? "auto" : "smooth" });
  }
  function setRunning(on) {
    el.classList.toggle("sx-running", on);
    followed = -1;
    if (on && matchMedia("(max-width: 720px)").matches) scoreEl.scrollIntoView({ block: "start", behavior: reduceMotion() ? "auto" : "smooth" });
    if (!on) scoreEl.scrollTop = 0;
  }

  function draw() {
    score = renderScore(ex, scoreEl.clientWidth - 24 || 320);
    scoreEl.innerHTML = score.html;
    marks.forEach((c, i) => c && mark(i, c));
  }
  function showBest() {
    const b = best()[ex.id];
    const parts = [];
    if (b && b.errors != null) parts.push(`paso a paso con ${b.errors} ${b.errors === 1 ? "error" : "errores"}`);
    if (b && b.onTime != null) parts.push(`a tempo ${b.onTime} % a tiempo (${b.bpm} ppm)`);
    $(".sx-best").textContent = parts.length ? "Tu mejor resultado: " + parts.join("; ") + "." : "";
    listenBtn.hidden = !(tried || b);
  }
  function buildPiano() {
    range = keyRange(ex.notes);
    let w = "", b = "", nW = 0;
    for (let m = range[0]; m <= range[1]; m++) {
      const black = !(mod(m, 12) in WHITE);
      if (black) b += `<button type="button" class="sx-k blk" data-m="${m}" style="left:calc(${nW} * var(--kw) - var(--kb) / 2)" aria-label="${noteName(m)}"><i></i></button>`;
      else { w += `<button type="button" class="sx-k wht" data-m="${m}" aria-label="${noteName(m)}"><span>${mod(m, 12) === 0 ? noteName(m) : ""}</span><i></i></button>`; nW++; }
    }
    keysEl.innerHTML = w + b;
    keysEl.style.setProperty("--nw", nW);
    const first = ex.notes.find(n => n[0] != null)[0];
    kbBase = Math.min(Math.max(12 * Math.floor(first / 12), range[0]), range[1] - 12);
    labelKeys();
    scrollToKey(first);
  }
  function labelKeys() {
    keysEl.querySelectorAll(".sx-k").forEach(k => {
      const off = +k.dataset.m - kbBase;
      k.querySelector("i").textContent = off >= 0 && off < KEYMAP.length ? KEYMAP[off].toUpperCase() : "";
    });
    $(".sx-help").textContent = `Teclado del ordenador: A W S E D F T G Y H U J K tocan de ${noteName(kbBase)} a ${noteName(kbBase + 12)}; Z y X bajan o suben una octava.`;
  }
  function scrollToKey(m) {
    const k = keysEl.querySelector(`[data-m="${m}"]`);
    if (!k) return;
    const l = k.offsetLeft, r = l + k.offsetWidth;
    if (l < pianoEl.scrollLeft || r > pianoEl.scrollLeft + pianoEl.clientWidth)
      pianoEl.scrollTo({ left: l - pianoEl.clientWidth / 2, behavior: reduceMotion() ? "auto" : "smooth" });
  }

  // Random excerpt of the chosen level, avoiding the last few so it stays a first-sight read.
  let level = Math.min(3, Math.max(1, store.get("pc-sight-level", ex.level || 1)));
  let recent = store.get("pc-sight-recent", []);
  function randomId() {
    const pool = SIGHT.filter(e => e.level === level);
    const fresh = pool.filter(e => e.id !== ex.id && !recent.includes(e.id));
    const from = fresh.length ? fresh : pool.filter(e => e.id !== ex.id).length ? pool.filter(e => e.id !== ex.id) : pool;
    const pick = from[Math.floor(Math.random() * from.length)];
    recent = [pick.id, ...recent.filter(id => id !== pick.id)].slice(0, Math.max(0, Math.floor(pool.length / 2)));
    store.set("pc-sight-recent", recent);
    return pick.id;
  }
  function setLevel(lv, keepId = null) {
    level = lv; store.set("pc-sight-level", lv);
    el.querySelectorAll("[data-lv]").forEach(b => { const on = +b.dataset.lv === lv; b.classList.toggle("sel", on); b.setAttribute("aria-pressed", on); });
    select(keepId || randomId());
  }
  function select(id) {
    stop();
    ex = SIGHT.find(e => e.id === id) || SIGHT[0];
    store.set("pc-sight-last", ex.id);
    tried = false; marks = [];
    $(".sx-info").innerHTML = `<b>${esc(ex.title)}</b> <span class="muted">${esc(ex.piece)}, c. ${esc(ex.bars)}</span>`;
    bpmR.value = ex.bpm; $(".sx-bpmv").textContent = ex.bpm + " ppm";
    $(".sx-note").textContent = ex.note || "";
    setMsg("");
    draw(); buildPiano(); showBest();
  }
  function setMode(m) {
    stop();
    mode = m; store.set("pc-sight-mode", m);
    el.querySelectorAll("[data-mode]").forEach(b => { const on = b.dataset.mode === m; b.classList.toggle("sel", on); b.setAttribute("aria-pressed", on); });
    $(".sx-bpm").hidden = m !== "tempo";
    setMsg(m === "step" ? "Toca cada nota resaltada; si te equivocas, se marca en rojo hasta que aciertes." : "Escucharás un compás de claqué; después toca siguiendo el cursor.");
  }

  // ---------- Playing ----------
  function sound(m) { whenRunning(c => tone(m, c.currentTime + 0.005, 1.4)); }
  function press(m) {
    sound(m);
    const k = keysEl.querySelector(`[data-m="${m}"]`);
    if (k) { k.classList.add("down"); setTimeout(() => k.classList.remove("down"), 160); }
    if (st.run === "step") stepPress(m);
    else if (st.run === "tempo") tempoPress(m);
  }

  function start() {
    stop();
    marks = []; draw();
    st.events = timeline(ex.notes).events;
    st.idx = 0; st.errors = 0; st.T = null;
    startBtn.textContent = "Detener";
    setRunning(true);
    if (mode === "step") {
      st.run = "step";
      markEvent(st.events[0], "cur");
      scrollToKey(st.events[0].midi);
      setMsg("");
    } else startTempo();
  }
  function stop(silent) {
    if (!st.run) return;
    const was = st.run;
    st.run = null; cancelAnimationFrame(st.raf);
    setRunning(false);
    stopSounds("seq"); // scheduled melody and count-in clicks
    scoreEl.querySelectorAll(".cursor").forEach(c => c.setAttribute("x", -20));
    startBtn.textContent = "Empezar";
    if (was !== "listen") { tried = true; showBest(); }
    if (!silent && was !== "listen") setMsg("Detenido.");
  }

  function stepPress(m) {
    const e = st.events[st.idx];
    if (m !== e.midi) {
      st.errors++; markEvent(e, "cur bad");
      // Same letter in another octave is the most common slip: say which way to go.
      setMsg(m % 12 === e.midi % 12
        ? `Es la nota correcta, pero en otra octava: tocaste ${noteName(m)} y la nota es ${noteName(e.midi)}, una octava más ${e.midi > m ? "arriba" : "abajo"}.`
        : `Tocaste ${noteName(m)}. Mira la nota resaltada e inténtalo de nuevo.`, "bad");
      return;
    }
    setMsg("");
    markEvent(e, "ok");
    st.idx++;
    if (st.idx >= st.events.length) {
      const b = best(), prev = b[ex.id] || {};
      if (prev.errors == null || st.errors < prev.errors) { b[ex.id] = { ...prev, errors: st.errors }; store.set("pc-sight-best", b); }
      stop(true);
      setMsg(st.errors ? `Terminado con ${st.errors} ${st.errors === 1 ? "error" : "errores"}. Prueba ahora a tempo.` : "Terminado sin errores. Prueba ahora a tempo.", "ok");
      return;
    }
    const nx = st.events[st.idx];
    markEvent(nx, "cur");
    scrollToKey(nx.midi);
  }

  function startTempo() {
    const q = spq(), beats = Math.round(barLen(ex.meter) / beatLen(ex.meter)), beatSec = q * beatLen(ex.meter);
    st.run = "tempo";
    setMsg("Escucha el compás de entrada…");
    whenRunning(c => {
      if (st.run !== "tempo") return;
      const t0 = c.currentTime + 0.15;
      for (let k = 0; k < beats; k++) click(t0 + k * beatSec, k === 0, "seq");
      st.T = t0 + beats * beatSec;
      st.events.forEach((e, k) => {
        const nxt = st.events[k + 1], gap = ((nxt ? nxt.on : timeline(ex.notes).total) - e.on) * q;
        const prevGap = k ? (e.on - st.events[k - 1].on) * q : beatSec;
        Object.assign(e, { t: st.T + e.on * q, win: Math.min(0.2, Math.max(0.08, 0.4 * gap)), acc: 0.5 * gap, pre: 0.5 * prevGap, res: null });
      });
      st.end = st.T + timeline(ex.notes).total * q;
      st.extra = 0;
      tick();
    });
  }
  function cursorAt(tq) {
    // tq in quarter notes since the first beat; find the note under the cursor and interpolate to the next.
    let acc = 0, k = 0;
    for (; k < ex.notes.length - 1 && acc + ex.notes[k][1] <= tq; k++) acc += ex.notes[k][1];
    const g = score.geo[k];
    if (!g) return;
    let x = g.x;
    if (!reduceMotion()) {
      const nx = score.geo[k + 1], frac = Math.min(1, Math.max(0, (tq - acc) / ex.notes[k][1]));
      const tx = nx && nx.sys === g.sys ? nx.x : score.sysEnd[g.sys];
      x = g.x + (tx - g.x) * frac;
    }
    scoreEl.querySelectorAll(".cursor").forEach((c, i) => c.setAttribute("x", i === g.sys ? x - 1.5 : -20));
    followSystem(g.sys);
  }
  function tick() {
    const run = st.run;
    if (run !== "tempo" && run !== "listen") return;
    const now = ac().currentTime, q = spq();
    if (now >= st.T) {
      if (run === "tempo") setMsg("");
      cursorAt((now - st.T) / q);
    }
    if (run === "tempo") st.events.forEach(e => { if (!e.res && now > e.t + e.acc) { e.res = "miss"; markEvent(e, "bad"); } });
    if (now > st.end + 0.4) return run === "tempo" ? finishTempo() : stop(true);
    st.raf = requestAnimationFrame(tick);
  }
  function tempoPress(m) {
    if (st.T == null) return;
    const now = ac().currentTime, e = st.events.find(x => !x.res);
    if (!e) return;
    if (now < e.t - e.pre) { st.extra++; return; }
    if (m !== e.midi) { e.res = "wrong"; markEvent(e, "bad"); return; }
    e.res = judge(now - e.t, e.win);
    markEvent(e, e.res === "ok" ? "ok" : "off");
  }
  function finishTempo() {
    const n = st.events.length, ok = st.events.filter(e => e.res && e.res !== "miss" && e.res !== "wrong").length;
    const onTime = st.events.filter(e => e.res === "ok").length, pct = Math.round((100 * onTime) / n);
    const b = best(), prev = b[ex.id] || {};
    if (prev.onTime == null || pct > prev.onTime) { b[ex.id] = { ...prev, onTime: pct, bpm: +bpmR.value }; store.set("pc-sight-best", b); }
    stop(true);
    const verdict = pct >= 90 ? "¡Muy bien! Ya suena la melodía." : pct >= 60 ? "Vas bien; repítelo para afianzar el pulso." : "Baja el tempo y vuelve a intentarlo.";
    setMsg(`Notas correctas: ${ok} de ${n}. A tiempo: ${onTime} de ${n}. ${verdict}`, pct >= 60 ? "ok" : "bad");
  }
  function listen() {
    stop(true);
    stopSounds("seq");
    marks = []; draw();
    const q = spq();
    st.run = "listen";
    startBtn.textContent = "Detener";
    whenRunning(c => {
      st.T = c.currentTime + 0.12;
      timeline(ex.notes).events.forEach(e => tone(e.midi, st.T + e.on * q, Math.max(0.35, e.dur * q * 1.15), 0.16, "seq"));
      st.end = st.T + timeline(ex.notes).total * q;
      tick();
    });
  }

  // ---------- Inputs ----------
  el.addEventListener("click", e => {
    const lvB = e.target.closest("[data-lv]");
    if (lvB) return setLevel(+lvB.dataset.lv);
    if (e.target.closest(".sx-next")) return select(randomId());
    const m = e.target.closest("[data-mode]");
    if (m) return setMode(m.dataset.mode);
  });
  startBtn.addEventListener("click", () => (st.run ? (stop(), undefined) : start()));
  listenBtn.addEventListener("click", listen);
  bpmR.addEventListener("input", () => { $(".sx-bpmv").textContent = bpmR.value + " ppm"; });
  keysEl.addEventListener("pointerdown", e => {
    const k = e.target.closest(".sx-k");
    if (!k) return;
    e.preventDefault();
    press(+k.dataset.m);
  });
  // Keyboard activation (Enter/Space on a focused key) arrives as a click with detail 0.
  keysEl.addEventListener("click", e => { const k = e.target.closest(".sx-k"); if (k && e.detail === 0) press(+k.dataset.m); });
  document.addEventListener("keydown", e => {
    if (el.closest("[hidden]")) return; // only while its own view is open
    if (e.repeat || e.altKey || e.ctrlKey || e.metaKey || /^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName) && e.target.type !== "range") return;
    const key = e.key.toLowerCase();
    if (key === "z" || key === "x") {
      kbBase = Math.min(Math.max(kbBase + (key === "z" ? -12 : 12), range[0]), range[1] - 12);
      labelKeys(); scrollToKey(kbBase);
      return;
    }
    const off = KEYMAP.indexOf(key);
    if (off < 0 || key.length !== 1) return;
    e.preventDefault();
    press(kbBase + off);
  });

  // Web MIDI (Chrome, Edge, Android with a USB piano). Asked on demand so the permission prompt is expected.
  if (navigator.requestMIDIAccess) {
    const btn = $(".sx-midib"), status = $(".sx-midis");
    btn.hidden = false;
    btn.addEventListener("click", () => {
      navigator.requestMIDIAccess().then(access => {
        const bind = () => {
          const ins = [...access.inputs.values()];
          ins.forEach(i => { i.onmidimessage = ev => { const [s, n, v] = ev.data; if ((s & 0xf0) === 0x90 && v > 0) press(n); }; });
          status.textContent = ins.length ? `Piano MIDI conectado: ${ins.map(i => i.name).join(", ")}.` : "No se encontró ningún piano MIDI. Conéctalo por USB y vuelve a intentarlo.";
          btn.hidden = ins.length > 0;
        };
        access.onstatechange = bind;
        bind();
      }, () => { status.textContent = "No se pudo acceder al MIDI en este navegador."; });
    });
  }

  let lastW = 0;
  window.addEventListener("resize", () => {
    const w = scoreEl.clientWidth;
    if (Math.abs(w - lastW) < 24) return;
    lastW = w; draw();
  });
  setLevel(level, ex.level === level ? ex.id : null);
  setMode(mode);
  lastW = scoreEl.clientWidth;
})();
