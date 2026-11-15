// Rhythm trainer: study each level's figures, tap rhythms in time, rhythmic dictation and two-hand polyrhythms.
// Notes are [ticks, flags, syllable?]: quarter = 12 ticks; flags "r" rest, "t" tied to the next, "3" triplet, "2" duplet.
// Wrapped in a function so its names do not collide with trainer.js globals; pure helpers are exported for Node.
(function () {
  // ---------- Figures and levels ----------
  const P = s => s.split(" ").map(tok => { const [t, f = ""] = tok.split("/"); return [+t, f]; });
  const lineTicks = ln => ln.reduce((s, n) => s + n[0], 0);
  const C = (id, name, rh, syl, info, lh) => ({ id, name, rh: P(rh), lh: lh ? P(lh) : null, syl, info, len: lineTicks(P(rh)) });
  const CELLS = Object.fromEntries([
    C("negra", "Negra", "12", ["ta"], "Dura 1 pulso."),
    C("blanca", "Blanca", "24", ["ta-a"], "Dura 2 pulsos: la nota sigue sonando mientras cuentas el segundo."),
    C("redonda", "Redonda", "48", ["ta-a-a-a"], "Dura 4 pulsos: un compás entero de 4/4."),
    C("corcheas", "Dos corcheas", "6 6", ["ti", "ti"], "Cada corchea dura medio pulso: dos notas iguales en un pulso."),
    C("sneg", "Silencio de negra", "12/r", ["(sh)"], "1 pulso en silencio."),
    C("sbla", "Silencio de blanca", "24/r", ["(sh)"], "2 pulsos en silencio."),
    C("corsil", "Corchea y silencio de corchea", "6 6/r", ["ti", "(sh)"], "Tocas en el pulso y callas la segunda mitad."),
    C("silcor", "Silencio de corchea y corchea", "6/r 6", ["(sh)", "ti"], "Callas en el pulso y tocas a contratiempo, en la segunda mitad."),
    C("negpun", "Negra con puntillo y corchea", "18 6", ["ta-i", "ti"], "El puntillo suma la mitad: la negra dura 1 pulso y medio y la corchea el medio pulso que falta. En total, 2 pulsos."),
    C("blapun", "Blanca con puntillo", "36", ["ta-a-a"], "Dura 3 pulsos: un compás entero de 3/4."),
    C("semis", "Cuatro semicorcheas", "3 3 3 3", ["ti", "ri", "ti", "ri"], "Cada semicorchea dura un cuarto de pulso: cuatro notas iguales en un pulso."),
    C("cor2s", "Corchea y dos semicorcheas", "6 3 3", ["ti", "ti", "ri"], "Medio pulso y dos cuartos: larga, corta, corta."),
    C("2scor", "Dos semicorcheas y corchea", "3 3 6", ["ti", "ri", "ti"], "Dos cuartos y medio pulso: corta, corta, larga."),
    C("sinc", "Síncopa: corchea, negra, corchea", "6 12 6", null, "La negra empieza a contratiempo y se mantiene sobre el pulso siguiente: el acento se desplaza. Dura 2 pulsos."),
    C("sincs", "Síncopa de semicorcheas", "3 6 3", null, "La misma idea dentro de un pulso: semicorchea, corchea, semicorchea."),
    C("lig1", "Negra ligada a corchea", "12/t 6 6", null, "La ligadura suma las dos notas: suena 1 pulso y medio, como una negra con puntillo, y la última corchea completa los 2 pulsos. Solo tocas la primera nota de la ligadura."),
    C("lig2", "Corchea ligada sobre el pulso", "6 6/t 6 6", null, "La segunda corchea se alarga sobre el pulso 2, que no se toca: corta, larga, corta. Suena como una síncopa."),
    C("tres", "Tresillo de corcheas", "4/3 4/3 4/3", null, "Tres corcheas en el tiempo de dos: tres notas iguales en un pulso."),
    C("tresneg", "Tresillo de negras", "8/3 8/3 8/3", null, "Tres negras en el tiempo de dos: tres notas iguales repartidas en 2 pulsos."),
    C("tresnc", "Negra y corchea en tresillo", "8/3 4/3", null, "Un tresillo con las dos primeras corcheas unidas: larga, corta, como un balanceo. Dura 1 pulso."),
    C("npun", "Negra con puntillo", "18", null, "Es el pulso del compás compuesto: dura 1 pulso, tres corcheas."),
    C("c3", "Tres corcheas", "6 6 6", null, "Tres corcheas iguales en un pulso."),
    C("nc", "Negra y corchea", "12 6", null, "Dos tercios y un tercio del pulso: larga, corta."),
    C("cn", "Corchea y negra", "6 12", null, "Un tercio y dos tercios del pulso: corta, larga."),
    C("bpun", "Blanca con puntillo", "36", null, "Dura 2 pulsos, seis corcheas: un compás entero de 6/8."),
    C("sici", "Corchea con puntillo, semicorchea y corchea", "9 3 6", null, "Ritmo de siciliana: la primera corchea se alarga con el puntillo y la semicorchea empuja hacia la siguiente. Dura 1 pulso."),
    C("snp", "Silencio de negra con puntillo", "18/r", null, "1 pulso en silencio."),
    C("dos", "Dosillo", "9/2 9/2", null, "Dos corcheas en el tiempo de tres: el pulso se divide en dos mitades iguales, como en un compás simple."),
    C("p32", "3 contra 2: tresillo y corcheas", "4/3 4/3 4/3", null, "La derecha toca 3 notas por pulso y la izquierda 2. Coinciden en el pulso y después suenan derecha, izquierda, derecha.", "6 6"),
    C("p23", "2 contra 3: corcheas y tresillo", "6 6", null, "La derecha toca 2 notas por pulso y la izquierda 3. Coinciden en el pulso y después suenan izquierda, derecha, izquierda.", "4/3 4/3 4/3"),
    C("p32n", "3 contra 2 en dos pulsos", "8/3 8/3 8/3", null, "Tresillo de negras en la derecha contra dos negras en la izquierda: la misma polirritmia, más lenta.", "12 12"),
    C("ptq", "Tresillo sobre el pulso", "4/3 4/3 4/3", null, "La izquierda marca el pulso y la derecha lo divide en tres.", "12"),
    C("pneg", "Negras juntas", "12", null, "Las dos manos tocan a la vez en el pulso: un punto de apoyo.", "12"),
  ].map(c => [c.id, c]));

  const SIMPLE = [[4, 4], [3, 4], [2, 4]], COMPOUND = [[6, 8], [9, 8]];
  const LEVELS = [
    { short: "Negra y blanca", name: "Redonda, blanca y negra", meters: SIMPLE, cells: ["negra", "blanca", "redonda"], focus: ["blanca", "redonda"], bpm: 72 },
    { short: "Corcheas", name: "Corcheas", meters: SIMPLE, cells: ["negra", "blanca", "corcheas"], focus: ["corcheas"], bpm: 72 },
    { short: "Silencios", name: "Silencios", meters: SIMPLE, cells: ["negra", "blanca", "corcheas", "sneg", "sbla", "corsil", "silcor"], focus: ["sneg", "sbla", "corsil", "silcor"], bpm: 70 },
    { short: "Puntillo", name: "Negra con puntillo y corchea", meters: SIMPLE, cells: ["negra", "blanca", "corcheas", "sneg", "negpun", "blapun"], focus: ["negpun", "blapun"], bpm: 70 },
    { short: "Semicorcheas", name: "Semicorcheas y combinaciones", meters: SIMPLE, cells: ["negra", "corcheas", "sneg", "negpun", "semis", "cor2s", "2scor"], focus: ["semis", "cor2s", "2scor"], bpm: 60 },
    { short: "Síncopas", name: "Síncopas y ligaduras", meters: SIMPLE, cells: ["negra", "corcheas", "sneg", "semis", "sinc", "sincs", "lig1", "lig2"], focus: ["sinc", "sincs", "lig1", "lig2"], bpm: 60 },
    { short: "Tresillos", name: "Tresillos", meters: SIMPLE, cells: ["negra", "blanca", "corcheas", "tres", "tresneg", "tresnc"], focus: ["tres", "tresneg", "tresnc"], bpm: 60 },
    { short: "6/8 y 9/8", name: "Compás compuesto: 6/8 y 9/8", meters: COMPOUND, cells: ["npun", "c3", "nc", "cn", "bpun", "sici", "snp"], focus: ["c3", "nc", "cn", "sici"], bpm: 50 },
    { short: "Dosillos", name: "Dosillos en compás compuesto", meters: COMPOUND, cells: ["npun", "c3", "nc", "cn", "dos"], focus: ["dos"], bpm: 50 },
    { short: "2 contra 3", name: "Polirritmia: 2 contra 3", meters: [[2, 4], [3, 4]], cells: ["pneg", "ptq", "p32", "p23", "p32n"], focus: ["p32", "p23", "p32n"], bpm: 50, hands: 2 },
  ];

  // ---------- Meter and time ----------
  const barTicks = m => (m[0] * 48) / m[1];
  const compound = m => m[1] === 8 && m[0] % 3 === 0;
  const beatTicks = m => (compound(m) ? 18 : 48 / m[1]);
  const tickSec = (bpm, m) => 60 / bpm / beatTicks(m); // the metronome counts beats (dotted quarters in 6/8)
  // Written value of a note, so tuplet members are drawn as the figure they look like.
  const written = (t, f = "") => (f.includes("3") ? (t * 3) / 2 : f.includes("2") ? (t * 2) / 3 : t);
  const pulse = (len, m) => Array.from({ length: len / beatTicks(m) }, () => [beatTicks(m), ""]);

  // Notes split into bars with their offset in the bar; null if a note crosses a barline.
  function splitBars(ln, bt) {
    const bars = [];
    let t = 0;
    for (let i = 0; i < ln.length; i++) {
      const [d, f = "", s] = ln[i], b = Math.floor(t / bt);
      if (Math.floor((t + d - 1) / bt) !== b) return null;
      (bars[b] ||= []).push({ i, t: t - b * bt, d, f, s });
      t += d;
    }
    return bars;
  }
  // Tuplet groups as arrays of note indexes; an unfinished group is returned with open: true.
  function tupletGroups(ln) {
    const out = [];
    let cur = null;
    ln.forEach(([d, f = ""], i) => {
      const k = f.includes("3") ? "3" : f.includes("2") ? "2" : null;
      if (!k) { if (cur) { cur.open = true; out.push(cur); cur = null; } return; }
      if (cur && cur.kind !== k) { cur.open = true; out.push(cur); cur = null; }
      if (!cur) cur = { kind: k, idx: [], sum: 0, max: 0 };
      cur.idx.push(i); cur.sum += d; cur.max = Math.max(cur.max, d);
      const done = k === "3" ? (cur.sum === 6 && cur.max <= 2) || cur.sum === 12 || cur.sum === 24
        : (cur.sum === 18 && cur.max <= 9) || cur.sum === 36;
      if (done) { out.push(cur); cur = null; }
    });
    if (cur) { cur.open = true; out.push(cur); }
    return out;
  }
  // Beams join consecutive eighths or shorter inside one beat (a dotted quarter in compound meters); rests break them.
  function beamGroups(ln, m) {
    const bars = splitBars(ln, barTicks(m)), beat = beatTicks(m), out = [];
    if (!bars) return out;
    bars.forEach(bar => {
      let run = [], rb = -1;
      const flush = () => { if (run.length > 1) out.push(run); run = []; };
      bar.forEach(n => {
        const b = Math.floor(n.t / beat);
        if (n.f.includes("r") || written(n.d, n.f) >= 12) { flush(); return; }
        if (b !== rb) flush();
        rb = b; run.push(n.i);
      });
      flush();
    });
    return out;
  }
  // Sounded notes: rests skipped, tied notes merged into the first one.
  function attacks(ln) {
    const out = [];
    let t = 0;
    ln.forEach(([d, f = ""], i) => {
      const cont = i > 0 && (ln[i - 1][1] || "").includes("t") && !f.includes("r");
      if (cont && out.length) { const a = out[out.length - 1]; a.dur += d; a.idx.push(i); }
      else if (!f.includes("r")) out.push({ i, idx: [i], tick: t, dur: d });
      t += d;
    });
    return out;
  }
  // What the rhythm sounds like (onsets and lengths), so two notations that sound the same count as equal.
  const signature = ex => JSON.stringify([ex.rh, ex.lh].map(ln => (ln ? attacks(ln).map(a => [a.tick, a.dur]) : null)));

  function validateLine(ln, m) {
    const errs = [];
    if (!Array.isArray(ln) || !ln.length) return ["línea vacía"];
    ln.forEach((n, i) => {
      if (!Array.isArray(n) || !Number.isInteger(n[0]) || n[0] <= 0) errs.push(`nota ${i}: duración no válida`);
      else if (typeof (n[1] ?? "") !== "string" || !/^[rt32]*$/.test(n[1] ?? "")) errs.push(`nota ${i}: marcas no válidas`);
      else if (n[1].includes("t")) {
        if (n[1].includes("r")) errs.push(`nota ${i}: silencio ligado`);
        if (i === ln.length - 1 || (ln[i + 1][1] || "").includes("r")) errs.push(`nota ${i}: ligadura sin nota siguiente`);
      }
    });
    if (errs.length) return errs;
    const bt = barTicks(m);
    if (lineTicks(ln) % bt) errs.push("los compases no suman el compás");
    else if (!splitBars(ln, bt)) errs.push("una nota cruza la barra de compás");
    if (tupletGroups(ln).some(g => g.open)) errs.push("grupo de valoración especial incompleto");
    return errs;
  }
  function validateItem(it) {
    if (!it || !Array.isArray(it.meter) || it.meter.length !== 2 || ![2, 4, 8, 16].includes(it.meter[1]) || !(it.meter[0] > 0)) return ["compás no válido"];
    const errs = [];
    if (!Number.isInteger(it.level) || it.level < 1 || it.level > LEVELS.length) errs.push("nivel no válido");
    errs.push(...validateLine(it.rh, it.meter).map(e => "rh: " + e));
    if (it.lh != null) {
      errs.push(...validateLine(it.lh, it.meter).map(e => "lh: " + e));
      if (Array.isArray(it.lh) && Array.isArray(it.rh) && lineTicks(it.lh) !== lineTicks(it.rh)) errs.push("las dos manos no duran lo mismo");
    }
    return errs;
  }

  // ---------- Generation ----------
  const pickW = (items, w, rnd) => {
    let r = rnd() * w.reduce((a, b) => a + b, 0), k = 0;
    for (; k < items.length - 1 && (r -= w[k]) >= 0; k++);
    return items[k];
  };
  // Random cells filling exactly len ticks (cells are whole beats long); null if impossible.
  function fill(len, cells, focus, rnd) {
    const out = [];
    let rem = len;
    while (rem > 0) {
      const cand = cells.filter(c => c.len <= rem && (rem - c.len) % Math.min(...cells.map(x => x.len)) === 0);
      if (!cand.length) return null;
      const c = pickW(cand, cand.map(x => (focus && focus.includes(x.id) ? 2.5 : 1)), rnd);
      out.push(c); rem -= c.len;
    }
    return out;
  }
  const withSyl = (cell, hand) => (hand === "lh" ? cell.lh : cell.rh).map((n, k) => (hand === "rh" && cell.syl ? [n[0], n[1], cell.syl[k]] : [n[0], n[1]]));
  const joinGroups = (meter, groups, two) => ({
    meter, groups, rh: groups.flatMap(g => g.rh), lh: two ? groups.flatMap(g => g.lh) : undefined,
  });
  function cellGroup(c, start, meter, two) {
    return { start, len: c.len, cell: c.id, rh: withSyl(c, "rh"), lh: two ? (c.lh ? withSyl(c, "lh") : pulse(c.len, meter)) : undefined };
  }
  // A rhythm of the level: whole bars of that level's cells, using at least one of its new figures.
  function generate(lvN, o = {}, rnd = Math.random) {
    const L = LEVELS[lvN - 1], meter = o.meter || L.meters[Math.floor(rnd() * L.meters.length)];
    const bt = barTicks(meter), cells = L.cells.map(id => CELLS[id]), bars = o.bars || 2, two = !!(o.hands === 2 || L.hands === 2);
    let ex;
    for (let tries = 0; tries < 60; tries++) {
      const groups = [];
      for (let b = 0; b < bars; b++) {
        let cs;
        do cs = fill(bt, cells, L.focus, rnd); while (cs.every(c => c.rh.every(n => n[1].includes("r"))));
        let t = b * bt;
        cs.forEach(c => { groups.push(cellGroup(c, t, meter, two)); t += c.len; });
      }
      ex = joinGroups(meter, groups, two);
      if (groups.some(g => L.focus.includes(g.cell))) break;
    }
    ex.level = lvN;
    return ex;
  }
  // Groups for a rhythm without cells (repertoire): cut on beats where no hand holds a note or a tie.
  function segments(ex) {
    const beat = beatTicks(ex.meter), lines = ex.lh ? [ex.rh, ex.lh] : [ex.rh];
    const cutsOf = ln => { const s = new Set(); let t = 0; ln.forEach(n => { t += n[0]; if (!(n[1] || "").includes("t")) s.add(t); }); return s; };
    const sets = lines.map(cutsOf);
    const cuts = [...sets[0]].filter(t => t % beat === 0 && sets.every(s => s.has(t))).sort((a, b) => a - b);
    const slice = (ln, a, b) => { let t = 0; return ln.filter(n => { const on = t; t += n[0]; return on >= a && on < b; }); };
    let prev = 0;
    return cuts.map(c => {
      const g = { start: prev, len: c - prev, rh: slice(ex.rh, prev, c), lh: ex.lh ? slice(ex.lh, prev, c) : undefined };
      prev = c;
      return g;
    });
  }
  // Dictation options: the answer plus distractors that change exactly one group (a cell, or a run of beats
  // cut where no note is held), never sounding like the answer or like each other. changed = [first, last] group.
  function makeOptions(ex, lvN, n = 3, rnd = Math.random) {
    const L = LEVELS[lvN - 1], cells = L.cells.map(id => CELLS[id]), two = !!ex.lh;
    const groups = ex.groups || segments(ex), bt = barTicks(ex.meter);
    const seen = new Set([signature(ex)]), out = [];
    // Pass 1 swaps one group; pass 2 (levels with few figures) merges two neighbours in the same bar.
    for (let pass = 1; pass <= 2 && out.length < n; pass++) {
      for (let a = 0; a < 160 && out.length < n; a++) {
        if (groups.length < pass) break;
        const g = Math.floor(rnd() * (groups.length - pass + 1));
        if (Math.floor(groups[g].start / bt) !== Math.floor(groups[g + pass - 1].start / bt)) continue;
        const len = groups.slice(g, g + pass).reduce((s, x) => s + x.len, 0);
        const singles = cells.filter(c => c.len === len);
        const repl = singles.length && rnd() < 0.6 ? [singles[Math.floor(rnd() * singles.length)]] : fill(len, cells, null, rnd);
        if (!repl) continue;
        let t = groups[g].start;
        const ng = repl.map(c => { const x = cellGroup(c, t, ex.meter, two); t += c.len; return x; });
        // One replaced group, even when the fill used several cells.
        const merged = { start: groups[g].start, len, rh: ng.flatMap(x => x.rh), lh: two ? ng.flatMap(x => x.lh) : undefined };
        const v = joinGroups(ex.meter, [...groups.slice(0, g), merged, ...groups.slice(g + pass)], two);
        v.changed = [g, g + pass - 1];
        const s = signature(v);
        if (seen.has(s)) continue;
        seen.add(s); out.push(v);
      }
    }
    const options = [ex, ...out];
    for (let i = options.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [options[i], options[j]] = [options[j], options[i]]; }
    return { options, answer: options.indexOf(ex) };
  }

  // ---------- Judging ----------
  // Tap windows shrink for fast notes: on time within okWin, early/late within offWin, otherwise an extra tap.
  function prepEvents(ex, spt, T) {
    const ev = [];
    [["r", ex.rh], ["l", ex.lh]].forEach(([hand, ln]) => {
      if (!ln) return;
      const a = attacks(ln);
      a.forEach((x, k) => {
        const gap = Math.min(k ? x.tick - a[k - 1].tick : Infinity, k < a.length - 1 ? a[k + 1].tick - x.tick : Infinity) * spt;
        const g = Number.isFinite(gap) ? gap : 1;
        const okWin = Math.min(0.07, Math.max(0.03, 0.3 * g)), offWin = Math.min(0.16, Math.max(okWin + 0.03, 0.5 * g));
        ev.push({ hand, i: x.i, idx: x.idx, t: T + x.tick * spt, okWin, offWin, res: null, delta: null });
      });
    });
    return ev;
  }
  // tSec: tap time on the audio clock; latency (s) is the calibrated delay subtracted from every tap.
  function judgeTap(events, tSec, latency = 0, hand = null) {
    const adj = tSec - latency;
    let best = null;
    for (const e of events) {
      if (e.res || (hand && e.hand !== hand)) continue;
      const d = adj - e.t;
      if (Math.abs(d) <= e.offWin && (!best || Math.abs(d) < Math.abs(best.d))) best = { e, d };
    }
    if (!best) return null;
    const { e, d } = best;
    e.delta = d;
    e.res = Math.abs(d) <= e.okWin ? "ok" : d < 0 ? "early" : "late";
    return e;
  }
  function sweep(events, nowSec, latency = 0) {
    const missed = [];
    events.forEach(e => { if (!e.res && nowSec - latency > e.t + e.offWin) { e.res = "miss"; missed.push(e); } });
    return missed;
  }
  function tally(events, extra = 0) {
    const c = k => events.filter(e => e.res === k).length;
    const ok = c("ok"), off = c("early") + c("late"), miss = events.length - ok - off;
    const pct = events.length ? Math.max(0, Math.round((100 * (ok + 0.5 * off - 0.25 * extra)) / events.length)) : 0;
    return { ok, off, miss, extra, n: events.length, pct };
  }
  // Calibration: median of (tap - nearest click), ignoring taps far from any click; null with fewer than 4.
  function medianOffset(taps, clicks, maxDev = 0.35) {
    const d = taps.map(t => clicks.reduce((b, c) => (Math.abs(t - c) < Math.abs(b) ? t - c : b), Infinity)).filter(x => Math.abs(x) <= maxDev).sort((a, b) => a - b);
    if (d.length < 4) return null;
    const m = d.length >> 1;
    return d.length % 2 ? d[m] : (d[m - 1] + d[m]) / 2;
  }

  // ---------- Drawing (single-line percussion staff) ----------
  const slot = t => 12 + 11 * Math.sqrt(t / 3);
  function restSvg(x, w, Y) {
    const y = p => Y - (p - 4) * 6; // same shapes as the five-line staff, centred on the line
    let s;
    if (w >= 48) s = `<rect class="hd" x="${x - 6}" y="${Y}" width="12" height="5"/>`;
    else if (w >= 24) s = `<rect class="hd" x="${x - 6}" y="${Y - 5}" width="12" height="5"/>`;
    else if (w >= 12) s = `<path class="rq" d="M${x - 3},${y(7.4)} L${x + 3},${y(5.6)} L${x - 2},${y(4)} L${x + 3.5},${y(2.4)} Q${x - 4},${y(2.6)} ${x},${y(0.8)}"/>`;
    else {
      s = `<circle class="hd" cx="${x - 3}" cy="${y(5.2)}" r="2.6"/><path class="rl" d="M${x - 3},${y(4.9)} Q${x + 1},${y(4.6)} ${x + 4},${y(5.8)} L${x - 1},${y(w < 6 ? 0.6 : 2)}"/>`;
      if (w < 6) s += `<circle class="hd" cx="${x - 4.5}" cy="${y(3.2)}" r="2.6"/><path class="rl" d="M${x - 4.5},${y(2.9)} Q${x},${y(2.6)} ${x + 3.2},${y(3.8)}"/>`;
    }
    if ([9, 18, 36].includes(w)) s += `<circle class="dot" cx="${x + 9}" cy="${Y - 3}" r="1.9"/>`;
    return s;
  }
  // ex: { meter, rh, lh? }. o: px (fit width), perSys (max bars per line), syl, ms (room for timing), sig (time
  // signature), bar (bar length override, for single cells), label (aria).
  function render(ex, o = {}) {
    const m = ex.meter, bt = o.bar || barTicks(m), two = !!ex.lh, perSys = o.perSys || 4;
    const lines = (two ? [["r", ex.rh], ["l", ex.lh]] : [["r", ex.rh]]).map(([h, ln]) => ({ h, ln, bars: splitBars(ln, bt) || [] }));
    const nBars = Math.max(...lines.map(l => l.bars.length));
    const below = 16 + (o.syl ? 14 : 0) + (o.ms ? 14 : 0), above = 50;
    const Ys = two ? [above, above * 2 + below] : [above], H = Ys[Ys.length - 1] + below;
    // Shared horizontal positions: every onset of either hand gets a slot, so both hands line up.
    const geo = [];
    for (let b = 0; b < nBars; b++) {
      const ons = [...new Set([bt, ...lines.flatMap(l => (l.bars[b] || []).map(n => n.t))])].sort((a, c) => a - c);
      const pos = new Map();
      let x = 14;
      ons.forEach((t, k) => { pos.set(t, x); if (k < ons.length - 1) x += slot(ons[k + 1] - t); });
      geo.push({ pos, w: x + 4 });
    }
    const head = sys0 => 8 + (two ? 30 : 0) + 14 + (o.sig !== false && sys0 ? 24 : 0);
    const systems = [];
    geo.forEach((g, b) => {
      let s = systems[systems.length - 1];
      if (!s || s.bars.length >= perSys || (o.px && s.bars.length && head(systems.length === 1) + s.w + g.w > o.px * 1.25)) { s = { bars: [], w: 0 }; systems.push(s); }
      s.bars.push(b); s.w += g.w;
    });
    lines.forEach(l => { l.beams = beamGroups(l.ln, m); l.tup = tupletGroups(l.ln); l.x = []; l.sys = []; });
    let prevScale = Infinity;
    const svgs = systems.map((s, si) => {
      const hw = head(si === 0), nat = hw + s.w + 4;
      let scale = o.px && nat < o.px ? (o.px - hw - 4) / s.w : 1;
      if (si > 0 && si === systems.length - 1) scale = Math.min(scale, prevScale);
      prevScale = scale;
      const W = hw + s.w * scale + 4;
      let x = hw, g = "", notes = "";
      const yTop = Ys[0] - 12, yBot = Ys[Ys.length - 1] + 12;
      s.bars.forEach(b => {
        lines.forEach(l => (l.bars[b] || []).forEach(n => { l.x[n.i] = x + geo[b].pos.get(n.t) * scale; l.sys[n.i] = si; }));
        x += geo[b].w * scale;
        g += b === nBars - 1
          ? `<line x1="${x - 5}" x2="${x - 5}" y1="${yTop}" y2="${yBot}"/><rect class="fin" x="${x - 3}" y="${yTop}" width="3" height="${yBot - yTop}"/>`
          : `<line x1="${x}" x2="${x}" y1="${yTop}" y2="${yBot}"/>`;
      });
      lines.forEach((l, li) => {
        const Y = Ys[li], X = i => l.x[i], here = i => l.sys[i] === si;
        g += `<line x1="${two ? 34 : 4}" x2="${W - 2}" y1="${Y}" y2="${Y}"/>`;
        const cx = (two ? 36 : 6);
        g += `<rect class="fin" x="${cx}" y="${Y - 10}" width="3" height="20"/><rect class="fin" x="${cx + 6}" y="${Y - 10}" width="3" height="20"/>`;
        if (two) g += `<text class="rx-hl" x="2" y="${Y + 4}">${l.h === "r" ? "Der." : "Izq."}</text>`;
        if (o.sig !== false && si === 0) g += `<text class="rx-ts" x="${hw - 14}" y="${Y - 10}">${m[0]}</text><text class="rx-ts" x="${hw - 14}" y="${Y + 11}">${m[1]}</text>`;
        const beamed = new Set(l.beams.flat());
        l.beams.forEach(gr => {
          if (!here(gr[0])) return;
          const x1 = X(gr[0]) + 5.6, x2 = X(gr[gr.length - 1]) + 5.6, by = Y - 30;
          notes += `<path class="beam" d="M${x1},${by} H${x2} V${by + 4.5} H${x1}Z"/>`;
          gr.forEach((i, k) => {
            if (written(l.ln[i][0], l.ln[i][1]) > 3) return;
            const pv = gr[k - 1], sh = j => j != null && written(l.ln[j][0], l.ln[j][1]) <= 3;
            if (sh(pv)) return; // part of a run drawn from its first sixteenth
            let e = k;
            while (sh(gr[e + 1])) e++;
            const a = X(i) + 5.6, b2 = e > k ? X(gr[e]) + 5.6 : a + (pv != null ? -7 : 7);
            notes += `<path class="beam" d="M${Math.min(a, b2)},${by + 7} H${Math.max(a, b2)} V${by + 11.5} H${Math.min(a, b2)}Z"/>`;
          });
        });
        l.tup.forEach(t => {
          if (!here(t.idx[0])) return;
          const x1 = X(t.idx[0]) - 5, x2 = X(t.idx[t.idx.length - 1]) + 8, mx = (x1 + x2) / 2, ty = Y - 41;
          notes += `<path class="tup" d="M${x1},${ty + 4} V${ty} H${mx - 6} M${mx + 6},${ty} H${x2} V${ty + 4}"/><text class="rx-tn" x="${mx}" y="${ty + 4}">${t.kind}</text>`;
        });
        l.ln.forEach(([d, f = "", syl], i) => {
          if (!here(i)) return;
          const nx = X(i), w = written(d, f);
          let s = `<rect class="hi" x="${nx - 10}" y="${Y - 36}" width="22" height="46" rx="6"/>`;
          if (f.includes("r")) s += restSvg(nx, w, Y);
          else {
            s += `<ellipse class="${w >= 24 ? "hd open" : "hd"}" cx="${nx}" cy="${Y}" rx="6.2" ry="4.6" transform="rotate(-20 ${nx} ${Y})"/>`;
            if ([9, 18, 36].includes(w)) s += `<circle class="dot" cx="${nx + 11}" cy="${Y - 3}" r="1.9"/>`;
            if (w < 48) s += `<line class="stem" x1="${nx + 5.6}" x2="${nx + 5.6}" y1="${Y - 1}" y2="${Y - 30}"/>`;
            if (w < 12 && !beamed.has(i)) for (let k = 0; k < (w <= 3 ? 2 : 1); k++) s += `<path class="flag" d="M${nx + 5.6},${Y - 30 + k * 7} q2,9 9,13 q3,4 0,11"/>`;
            if (f.includes("t")) {
              const end = l.sys[i + 1] === si ? X(i + 1) - 5 : nx + 24;
              s += `<path class="tie" d="M${nx + 5},${Y + 7} Q${(nx + end) / 2},${Y + 14} ${end},${Y + 7}"/>`;
            }
          }
          if (o.syl && syl) s += `<text class="rx-syl" x="${nx}" y="${Y + 28}">${syl}</text>`;
          if (o.ms) s += `<text class="rx-ms" x="${nx}" y="${Y + (o.syl ? 42 : 28)}"></text>`;
          notes += `<g class="rx-n" data-k="${l.h}${i}">${s}</g>`;
        });
      });
      const label = (o.label || `Ritmo en ${m[0]}/${m[1]}`) + (systems.length > 1 ? `, línea ${si + 1} de ${systems.length}` : "");
      return `<svg class="rx-sys" viewBox="0 0 ${W.toFixed(1)} ${H}" width="${Math.round(W)}" role="img" aria-label="${label}"><g class="ln">${g}</g>${notes}</svg>`;
    });
    return svgs.join("");
  }

  if (typeof module !== "undefined") module.exports = { CELLS, LEVELS, P, lineTicks, barTicks, beatTicks, tickSec, written, pulse, splitBars, tupletGroups, beamGroups, attacks, signature, validateLine, validateItem, fill, generate, segments, makeOptions, prepEvents, judgeTap, sweep, tally, medianOffset, render };
  if (typeof document === "undefined") return;
  const el = document.getElementById("t-rhythm");
  if (!el) return;

  // ---------- Card UI ----------
  const REP = (typeof RHYTHM_REPERTOIRE !== "undefined" && Array.isArray(RHYTHM_REPERTOIRE) ? RHYTHM_REPERTOIRE : []).filter(it => {
    const e = validateItem(it);
    if (e.length) console.warn("rhythm-data: se omite", it && it.id, e);
    return !e.length;
  });
  const MODES = [["tap", "Tocar el ritmo"], ["dict", "Dictado"], ["hands", "Dos manos"]];
  const reduceMotion = () => window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const phone = () => window.matchMedia && matchMedia("(max-width: 720px)").matches;
  const rint = n => Math.floor(Math.random() * n);
  let level = Math.min(LEVELS.length, Math.max(1, store.get("pc-rhythm-level", 1)));
  let mode = MODES.some(x => x[0] === store.get("pc-rhythm-mode", "tap")) ? store.get("pc-rhythm-mode", "tap") : "tap";
  let syl = store.get("pc-rhythm-syl", true), fade = store.get("pc-rhythm-fade", false);
  let latency = +store.get("pc-rhythm-latency", 0) || 0; // ms
  let ex = null, q = null;
  const st = { run: null, events: [], extra: 0, raf: 0, dict: { ok: 0, n: 0 }, answered: false };

  el.innerHTML = `
    <div class="t-head"><h3>Ritmo</h3>
      <p class="muted">Escucha las figuras de cada nivel y después márcalas a tempo con un botón o reconócelas de oído. El metrónomo solo suena dentro de los ejercicios.</p></div>
    <div class="tags rx-levels" role="group" aria-label="Nivel">${LEVELS.map((L, i) =>
      `<button type="button" class="tag" data-lv="${i + 1}" aria-pressed="false">Nivel ${i + 1}<small>${esc(L.short)}</small></button>`).join("")}</div>
    <details class="rx-study">
      <summary><span class="rx-st">Escuchar y estudiar</span><span class="muted rx-sl"></span></summary>
      <p class="muted rx-sylhelp">Sílabas rítmicas (método Kodály): «ta» es una negra y «ti» una corchea; cada «-a» alarga la nota un pulso más, «-i» es el medio pulso del puntillo, «ti-ri» reparte un pulso en semicorcheas y «(sh)» es un silencio. Dilas en voz alta mientras tocas.</p>
      <div class="rx-cells"></div>
    </details>
    <div class="t-controls">
      <div class="tags" role="group" aria-label="Modo">${MODES.map(([k, n]) => `<button type="button" class="tag" data-mode="${k}" aria-pressed="false">${n}</button>`).join("")}</div>
      <label class="sx-bpm rx-bpm"><span>Tempo <b class="rx-bpmv"></b></span>
        <input type="range" class="rx-bpmr" min="30" max="160" step="2" aria-label="Pulsos por minuto"></label>
    </div>
    <div class="t-controls rx-opts-row">
      <label class="t-check"><input type="checkbox" class="rx-syl"> <span class="rx-syll">Sílabas</span></label>
      <label class="t-check"><input type="checkbox" class="rx-fade"> Metrónomo que desaparece</label>
      <button type="button" class="btn rx-cal" aria-describedby="rx-calhelp"></button>
      <span class="muted rx-calhelp" id="rx-calhelp">Mide el retraso de tu pantalla o auriculares Bluetooth.</span>
    </div>
    <p class="rx-info"></p>
    <div class="rx-score" aria-live="off"></div>
    <div class="rx-choices" role="group" aria-label="Opciones del dictado"></div>
    <div class="rx-dock">
      <p class="t-msg rx-msg" aria-live="polite"></p>
      <div class="rx-pads"></div>
      <div class="t-plays">
        <button type="button" class="btn rx-next"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h3.5c2 0 3.2 1 4.3 2.6l1.4 2.1c1.1 1.6 2.3 2.6 4.3 2.6H20M17 4l3 3-3 3M4 17h3.5c1.2 0 2.1-.4 2.9-1.1M14.1 8.1c.8-.7 1.7-1.1 2.9-1.1H20M17 14l3 3-3 3"/></svg>Otro ritmo</button>
        <button type="button" class="btn rx-listen"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg><span>Escuchar</span></button>
        <button type="button" class="btn solid rx-start">Empezar</button>
      </div>
    </div>
    <p class="muted rx-best"></p>`;
  const $ = s => el.querySelector(s);
  const scoreEl = $(".rx-score"), msg = $(".rx-msg"), startBtn = $(".rx-start"), listenBtn = $(".rx-listen"), nextBtn = $(".rx-next");
  const padsEl = $(".rx-pads"), choicesEl = $(".rx-choices"), bpmR = $(".rx-bpmr"), sylBox = $(".rx-syl"), fadeBox = $(".rx-fade"), calBtn = $(".rx-cal");

  const L = () => LEVELS[level - 1];
  const two = () => mode === "hands" || L().hands === 2;
  const bpm = () => +bpmR.value;
  const showSyl = () => syl && level <= 5;
  const bestKey = () => `${two() ? "hands" : "tap"}-${level}`;
  function setMsg(text, cls = "") { msg.className = "t-msg rx-msg " + cls; msg.textContent = text; }
  function setPressed(sel, on) { el.querySelectorAll(sel).forEach(b => { const v = on(b); b.classList.toggle("sel", v); b.setAttribute("aria-pressed", v); }); }

  // ---------- Exercises ----------
  function fromRepertoire(twoHands) {
    const pool = REP.filter(r => r.level === level && (L().hands !== 2 || r.lh));
    if (!pool.length || Math.random() > 0.35) return null;
    const r = pool[rint(pool.length)], e = { meter: r.meter, rh: r.rh, src: r, level };
    if (twoHands) e.lh = r.lh || pulse(lineTicks(r.rh), r.meter);
    return e;
  }
  const newExercise = (bars, twoHands) => fromRepertoire(twoHands) || generate(level, { bars, hands: twoHands ? 2 : 1 });
  const renderOpts = extra => ({ px: Math.max(240, scoreEl.clientWidth - 24 || 320), perSys: phone() ? 2 : 4, syl: showSyl(), ...extra });
  function info(e) {
    const s = e && e.src;
    $(".rx-info").hidden = false;
    $(".rx-info").innerHTML = s ? `<b>Del repertorio:</b> ${esc(s.piece)}, c. ${esc(s.bars)}${s.note ? ` <span class="muted">· ${esc(s.note)}</span>` : ""}` : "";
  }
  function drawScore() {
    if (mode === "dict") {
      scoreEl.innerHTML = `<p class="muted rx-hint">${q ? "Escucha y elige la línea que suena. Puedes repetirla las veces que quieras." : "Pulsa «Empezar»: sonará un ritmo con un compás de entrada y tendrás que elegir qué línea es."}</p>`;
      return;
    }
    scoreEl.innerHTML = render(ex, renderOpts({ ms: true }));
  }
  function freshExercise() {
    stop(true);
    ex = newExercise(level <= 5 ? 4 : 2, two());
    info(ex); drawScore(); setMsg("");
  }
  function drawPads() {
    const pad = (hand, label, key) => `<button type="button" class="rx-pad" data-hand="${hand}" aria-label="${label} (tecla ${key})">${label}<kbd>${key}</kbd></button>`;
    padsEl.innerHTML = mode === "dict" ? "" : two() && st.run !== "cal" ? pad("l", "Izquierda", "F") + pad("r", "Derecha", "J") : pad("r", st.run === "cal" ? "Toca con cada clic" : "Toca", "Espacio");
    padsEl.classList.toggle("two", padsEl.children.length === 2);
  }
  function syncUi() {
    const running = !!st.run;
    startBtn.textContent = running ? "Detener" : mode === "dict" && q ? "Siguiente dictado" : "Empezar";
    nextBtn.hidden = mode === "dict" || running;
    listenBtn.hidden = (mode === "dict" && !q) || st.run === "tap" || st.run === "cal";
    listenBtn.querySelector("span").textContent = mode === "dict" ? "Repetir" : "Escuchar";
    calBtn.disabled = running;
    calBtn.textContent = `Calibrar (${latency} ms)`;
    sylBox.checked = syl; sylBox.disabled = level > 5;
    $(".rx-syll").textContent = level > 5 ? "Sílabas (niveles 1 a 5)" : "Sílabas";
    fadeBox.checked = fade;
    const b = store.get("pc-rhythm-best", {})[bestKey()];
    $(".rx-best").textContent = mode === "dict"
      ? (st.dict.n ? `Aciertos en esta sesión: ${st.dict.ok} de ${st.dict.n}.` : "")
      : b != null ? `Tu mejor precisión en el nivel ${level}${two() ? " a dos manos" : ""}: ${b} %.` : "";
  }
  function setRunning(on) {
    el.classList.toggle("rx-running", on);
    if (on && phone()) scoreEl.scrollIntoView({ block: "start", behavior: reduceMotion() ? "auto" : "smooth" });
  }
  function stop(silent) {
    cancelAnimationFrame(st.raf);
    stopSounds("rhythm");
    const was = st.run;
    st.run = null;
    setRunning(false);
    drawPads(); syncUi();
    if (!silent && (was === "tap" || was === "cal")) setMsg("Detenido.");
  }

  // Schedules count-in and metronome clicks; returns the time of the first beat after the count-in.
  function metronome(c, e, totalTicks) {
    const spt = tickSec(bpm(), e.meter), bt = beatTicks(e.meter), beats = Math.round(barTicks(e.meter) / bt), beatSec = bt * spt;
    const t0 = c.currentTime + 0.2, n = fade ? beats * 2 : beats + Math.ceil(totalTicks / bt);
    for (let k = 0; k < n; k++) click(t0 + k * beatSec, k % beats === 0, "rhythm");
    Object.assign(st, { t0, beatSec, beats, T: t0 + beats * beatSec, spt, lastCount: 0 });
    return st.T;
  }
  function play(e, run = "listen") {
    stop(true);
    st.run = run; syncUi();
    whenRunning(c => {
      if (st.run !== run) return;
      const total = lineTicks(e.rh), T = metronome(c, e, total);
      [["r", e.rh, 72], ["l", e.lh, 60]].forEach(([, ln, midi]) => ln && attacks(ln).forEach(a =>
        tone(midi, T + a.tick * st.spt, Math.max(0.08, a.dur * st.spt * 0.9), 0.14, "rhythm")));
      st.end = T + total * st.spt;
      tick();
    });
  }

  function startTap() {
    stop(true);
    drawScore();
    st.run = "tap"; setRunning(true); drawPads(); syncUi();
    padsEl.querySelector(".rx-pad")?.focus({ preventScroll: true });
    setMsg("Escucha el compás de entrada…");
    whenRunning(c => {
      if (st.run !== "tap") return;
      const total = lineTicks(ex.rh), T = metronome(c, ex, total);
      st.events = prepEvents(ex, st.spt, T); st.extra = 0;
      st.end = T + total * st.spt;
      tick();
    });
  }
  function markEvent(e) {
    const cls = { ok: "ok", early: "off", late: "off", miss: "bad" }[e.res];
    e.idx.forEach((i, k) => {
      const g = scoreEl.querySelector(`[data-k="${e.hand}${i}"]`);
      if (!g) return;
      g.setAttribute("class", "rx-n " + cls);
      const t = g.querySelector(".rx-ms");
      if (t && k === 0) t.textContent = e.res === "miss" ? "falta" : e.res === "ok" ? "✓" : `${e.delta > 0 ? "+" : "−"}${Math.round(Math.abs(e.delta) * 1000)}`;
    });
  }
  function tick() {
    const run = st.run;
    if (!run) return;
    const now = ac().currentTime;
    if (run === "tap" || run === "listen") {
      if (now < st.T) {
        const k = Math.floor((now - st.t0) / st.beatSec) + 1;
        if (k >= 1 && k !== st.lastCount) { st.lastCount = k; if (run === "tap") setMsg(`Entrada: ${k}`); }
      } else if (st.lastCount >= 0 && run === "tap") { st.lastCount = -1; setMsg("¡Ahora!"); }
    }
    if (run === "tap") sweep(st.events, now, latency / 1000).forEach(markEvent);
    if (now > st.end + 0.4) {
      if (run === "tap") return finishTap();
      if (run === "cal") return finishCal();
      return stop(true);
    }
    st.raf = requestAnimationFrame(tick);
  }
  function finishTap() {
    sweep(st.events, Infinity).forEach(markEvent);
    const r = tally(st.events, st.extra), all = store.get("pc-rhythm-best", {}), prev = all[bestKey()];
    const record = prev == null || r.pct > prev;
    if (record) { all[bestKey()] = r.pct; store.set("pc-rhythm-best", all); }
    stop(true);
    const verdict = r.pct >= 90 ? "¡Muy bien!" : r.pct >= 60 ? "Vas bien; repítelo para afianzarlo." : "Baja el tempo o escúchalo antes y vuelve a intentarlo.";
    setMsg(`Precisión: ${r.pct} %. A tiempo: ${r.ok} de ${r.n}; con desfase: ${r.off}; sin tocar: ${r.miss}; toques de más: ${r.extra}. ${verdict}${record && prev != null ? " ¡Nuevo récord en este nivel!" : ""}`, r.pct >= 60 ? "ok" : "bad");
    syncUi();
  }
  // Tap time on the audio clock, corrected for how long ago the event happened.
  function tapTime(ev) {
    const c = ac(), lag = ev && ev.timeStamp ? (performance.now() - ev.timeStamp) / 1000 : 0;
    return c.currentTime - (lag > 0 && lag < 0.5 ? lag : 0);
  }
  function tap(hand, ev) {
    const t = tapTime(ev);
    const pad = padsEl.querySelector(`[data-hand="${st.run === "cal" || !two() ? "r" : hand}"]`);
    if (pad) { pad.classList.add("down"); setTimeout(() => pad.classList.remove("down"), 110); }
    if (st.run === "cal") { st.taps.push(t); return; }
    if (st.run !== "tap" || st.T == null || t < st.T - 0.3) return; // taps during the count-in do not count
    const e = judgeTap(st.events, t, latency / 1000, two() ? hand : null);
    if (e) markEvent(e); else st.extra++;
  }

  // ---------- Dictation ----------
  function askDict() {
    stop(true);
    for (let k = 0; k < 6; k++) {
      q = makeOptions(newExercise(2, L().hands === 2), level, 3);
      if (q.options.length >= 3) break;
    }
    st.answered = false;
    const o = renderOpts({ px: Math.max(220, choicesEl.clientWidth - 40 || 300), perSys: 4, syl: false });
    choicesEl.innerHTML = q.options.map((e, i) => `<button type="button" class="rx-opt" data-i="${i}" aria-label="Opción ${i + 1}"><span class="rx-on">${i + 1}</span>${render(e, { ...o, label: `Opción ${i + 1}` })}</button>`).join("");
    info(q.options[q.answer].src ? q.options[q.answer] : null);
    $(".rx-info").hidden = true; // revealed after answering, so the source does not give it away
    drawScore(); setMsg("");
    play(q.options[q.answer]);
  }
  function answerDict(i) {
    if (!q || st.answered) return;
    st.answered = true;
    const ok = i === q.answer;
    st.dict.n++; if (ok) st.dict.ok++;
    choicesEl.querySelectorAll(".rx-opt").forEach(b => { const k = +b.dataset.i; b.classList.toggle("right", k === q.answer); b.classList.toggle("wrong", k === i && !ok); b.disabled = true; });
    $(".rx-info").hidden = false;
    setMsg(ok ? "¡Correcto!" : `No es esa: era la opción ${q.answer + 1}. Pulsa «Repetir» y compáralas.`, ok ? "ok" : "bad");
    syncUi();
  }

  // ---------- Calibration ----------
  function calibrate() {
    stop(true);
    st.run = "cal"; st.taps = [];
    setRunning(true); drawPads(); syncUi();
    padsEl.querySelector(".rx-pad")?.focus({ preventScroll: true });
    setMsg("Sonarán 8 clics: toca el botón (o Espacio) a la vez que cada uno.");
    whenRunning(c => {
      if (st.run !== "cal") return;
      const t0 = c.currentTime + 1.2;
      st.clicks = Array.from({ length: 8 }, (_, k) => t0 + k * 0.8);
      st.clicks.forEach((t, k) => click(t, k === 0, "rhythm"));
      st.end = st.clicks[7] + 0.6;
      tick();
    });
  }
  function finishCal() {
    const off = medianOffset(st.taps, st.clicks);
    stop(true);
    if (off == null) { setMsg("No detecté suficientes toques junto a los clics. Inténtalo de nuevo.", "bad"); return; }
    latency = Math.round(Math.min(0.4, Math.max(-0.15, off)) * 1000);
    store.set("pc-rhythm-latency", latency);
    syncUi();
    setMsg(`Retraso medido: ${latency} ms. Se descontará al juzgar tus toques.`, "ok");
  }

  // ---------- Study ----------
  function drawStudy() {
    const Lv = L(), meter = Lv.meters[0], o = { syl: level <= 5, sig: false };
    $(".rx-sl").textContent = `Nivel ${level}: ${Lv.name}`;
    $(".rx-sylhelp").hidden = level > 5;
    const cells = Lv.cells.map(id => CELLS[id]).map(c => `
      <div class="rx-cell">
        ${render({ meter, rh: withSyl(c, "rh"), lh: c.lh }, { ...o, bar: c.len, label: c.name })}
        <div class="rx-ct"><b>${esc(c.name)}</b><p class="muted">${esc(c.info)}</p>${level <= 5 && c.syl ? `<p class="rx-cs">Se dice: «${esc(c.syl.join(" "))}»</p>` : ""}
        <button type="button" class="btn rx-hear" data-cell="${c.id}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>Escuchar</button></div>
      </div>`).join("");
    const reps = REP.filter(r => r.level === level).map(r => `
      <div class="rx-cell rx-rep">
        ${render({ meter: r.meter, rh: r.rh, lh: r.lh }, { px: 300, perSys: 2, label: r.piece })}
        <div class="rx-ct"><b>Del repertorio: ${esc(r.piece)}, c. ${esc(r.bars)}</b>${r.note ? `<p class="muted">${esc(r.note)}</p>` : ""}
        <button type="button" class="btn rx-hear" data-rep="${esc(r.id)}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>Escuchar</button></div>
      </div>`).join("");
    $(".rx-cells").innerHTML = cells + reps;
  }
  function hear(btn) {
    if (btn.dataset.cell) {
      const c = CELLS[btn.dataset.cell], meter = L().meters[0];
      play({ meter, rh: [...c.rh, ...c.rh], lh: c.lh ? [...c.lh, ...c.lh] : undefined });
    } else {
      const r = REP.find(x => x.id === btn.dataset.rep);
      if (r) play({ meter: r.meter, rh: r.rh, lh: r.lh });
    }
  }

  // ---------- Settings ----------
  function setLevel(lv) {
    level = lv; store.set("pc-rhythm-level", lv);
    setPressed("[data-lv]", b => +b.dataset.lv === lv);
    const saved = store.get("pc-rhythm-bpm", {})[lv];
    bpmR.value = saved || L().bpm; showBpm();
    q = null; choicesEl.innerHTML = "";
    drawStudy();
    if (mode === "dict") { stop(true); drawScore(); info(null); setMsg(""); } else freshExercise();
    drawPads(); syncUi();
  }
  function setMode(md) {
    mode = md; store.set("pc-rhythm-mode", md);
    setPressed("[data-mode]", b => b.dataset.mode === md);
    q = null; choicesEl.innerHTML = "";
    if (md === "dict") { stop(true); info(null); drawScore(); setMsg(""); } else freshExercise();
    drawPads(); syncUi();
  }
  function showBpm() {
    $(".rx-bpmv").textContent = `${bpmR.value} ppm${L().meters.every(compound) ? " (negra con puntillo)" : ""}`;
  }

  // ---------- Inputs ----------
  el.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b || b.disabled) return;
    if (b.dataset.lv) setLevel(+b.dataset.lv);
    else if (b.dataset.mode) setMode(b.dataset.mode);
    else if (b.classList.contains("rx-hear")) hear(b);
    else if (b.classList.contains("rx-opt")) answerDict(+b.dataset.i);
  });
  startBtn.addEventListener("click", () => {
    if (st.run) return stop();
    if (mode === "dict") askDict(); else startTap();
  });
  listenBtn.addEventListener("click", () => {
    if (mode === "dict") { if (q) play(q.options[q.answer]); }
    else play(ex);
  });
  nextBtn.addEventListener("click", freshExercise);
  calBtn.addEventListener("click", calibrate);
  bpmR.addEventListener("input", () => { showBpm(); const all = store.get("pc-rhythm-bpm", {}); all[level] = bpm(); store.set("pc-rhythm-bpm", all); });
  sylBox.addEventListener("change", () => { syl = sylBox.checked; store.set("pc-rhythm-syl", syl); if (!st.run && mode !== "dict") drawScore(); });
  fadeBox.addEventListener("change", () => { fade = fadeBox.checked; store.set("pc-rhythm-fade", fade); });
  padsEl.addEventListener("pointerdown", e => {
    const p = e.target.closest(".rx-pad");
    if (!p) return;
    e.preventDefault();
    tap(p.dataset.hand, e);
  });
  // Tapping the rhythm line itself also counts (one-hand mode).
  scoreEl.addEventListener("pointerdown", e => { if ((st.run === "tap" && !two()) || st.run === "cal") { e.preventDefault(); tap("r", e); } });
  // Capture phase on window, so while a rhythm runs its keys never reach the other trainers (sight.js plays notes on letters).
  window.addEventListener("keydown", e => {
    if (!st.run || e.altKey || e.ctrlKey || e.metaKey || (/^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName) && e.target.type !== "range" && e.target.type !== "checkbox")) return;
    if (e.key === "Escape") { stop(); return; }
    if (st.run !== "tap" && st.run !== "cal") return;
    const k = e.key.toLowerCase();
    let hand = null;
    if (two() && st.run === "tap") hand = k === "f" ? "l" : k === "j" ? "r" : null;
    else if (k === " " || /^\p{L}$/u.test(k)) hand = "r";
    if (!hand) return;
    e.preventDefault(); e.stopPropagation();
    if (!e.repeat) tap(hand, e);
  }, true);
  // Dictation answers with keys 1–4 once the question is open.
  document.addEventListener("keydown", e => {
    if (mode !== "dict" || !q || st.answered || e.altKey || e.ctrlKey || e.metaKey || /^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName)) return;
    const i = +e.key - 1;
    if (Number.isInteger(i) && i >= 0 && i < q.options.length) { e.preventDefault(); answerDict(i); }
  });

  let lastW = 0;
  window.addEventListener("resize", () => {
    const w = scoreEl.clientWidth;
    if (Math.abs(w - lastW) < 24 || st.run === "tap") return;
    lastW = w;
    if (mode !== "dict" && ex) drawScore();
  });
  setPressed("[data-mode]", b => b.dataset.mode === mode);
  setLevel(level);
  lastW = scoreEl.clientWidth;
})();
