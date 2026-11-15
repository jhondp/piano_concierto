const { pieces } = window.DATA;
const $ = id => document.getElementById(id);
const id = new URLSearchParams(location.search).get("id") || pieces[0].id;
const idx = Math.max(0, pieces.findIndex(p => p.id === id));
const p = pieces[idx];
document.title = `${p.title} · Piano concierto`;

// Header
const dots = Array.from({ length: 10 }, (_, k) => `<i class="${k < p.difficulty ? "f" : ""}"></i>`).join("");
$("head").innerHTML = `
  <span class="eyebrow">${p.id} del programa · se aprende en el puesto ${p.plan.order}</span>
  <h1>${esc(p.title)}</h1>
  <p class="sub">${esc(p.composer)}${p.source ? " · " + esc(p.source) : ""}</p>
  <div class="facts">
    <span class="fact">Tonalidad <b>${esc(p.key)}</b> · ${esc(p.keySignature)}</span>
    <span class="fact">Compás <b>${esc(p.meter)}</b></span>
    ${p.tempo ? `<span class="fact"><b>${esc(p.tempo)}</b></span>` : ""}
    <span class="fact"><b>${p.bars ?? "?"}</b> compases · ${p.pages} páginas</span>
    <span class="fact">Dificultad <b>${p.difficulty}/10</b> <span class="dots" style="display:inline-flex;vertical-align:-2px">${dots}</span></span>
  </div>
  <p>${esc(p.character)}</p>
  <p class="muted">${esc(p.difficultyNote)}</p>
  <p class="note">Plan: aprenderla del <b>${fmtDate(p.plan.startDate)}</b> al <b>${fmtDate(p.plan.learnedBy)}</b> (${p.plan.learnWeeks} semanas) y pulirla las ${p.plan.polishWeeks} semanas siguientes.</p>
  <div class="progress"><div class="bar"><i id="pbar"></i></div><span class="mono" id="ptext"></span></div>`;

// Section map
const COLORS = ["var(--sec-a)", "var(--sec-b)", "var(--sec-d)", "var(--sec-c)"];
const span = bars => { const m = String(bars).match(/(\d+)\D+(\d+)/); return m ? Math.max(1, m[2] - m[1] + 1) : 4; };
let done = sectionsDone(p.id);
let active = store.get("pc-active-" + p.id, 0);
function renderMap() {
  $("timeline").innerHTML = p.sections.map((s, i) => `
    <button type="button" class="segb${done.includes(i) ? " done" : ""}" aria-pressed="${i === active}" data-i="${i}"
      style="flex:${span(s.bars)};background:${COLORS[i % COLORS.length]}"><span>${esc(s.name)}</span><span class="mono">c. ${esc(s.bars)}</span></button>`).join("");
  const s = p.sections[active], isDone = done.includes(active);
  $("detail").innerHTML = `
    <div class="row"><div><span class="eyebrow">Compases ${esc(s.bars)}${s.marking ? " · " + esc(s.marking) : ""}</span><h3>${esc(s.name)}</h3></div>
    <button class="btn ${isDone ? "on" : ""}" id="toggle" type="button">${isDone ? "✓ Aprendida" : "Marcar como aprendida"}</button></div>
    <ul>${(s.focus || []).map(f => `<li>${esc(f)}</li>`).join("")}</ul>
    ${s.tip ? `<p class="note">${esc(s.tip)}</p>` : ""}`;
  $("toggle").onclick = () => {
    done = isDone ? done.filter(x => x !== active) : [...done, active];
    store.set("pc-sec-" + p.id, done); renderMap();
  };
  $("pbar").style.width = (done.length / p.sections.length * 100) + "%";
  $("ptext").textContent = `${done.length} de ${p.sections.length} secciones aprendidas`;
}
$("timeline").onclick = e => { const b = e.target.closest(".segb"); if (b) { active = +b.dataset.i; store.set("pc-active-" + p.id, active); renderMap(); } };
renderMap();

// Sessions
let checks = store.get("pc-ses-" + p.id, {});
const NEED_ES = {
  "legato-thirds-rh": "terceras legato", "lh-broken-chords": "acordes quebrados en la izquierda", "lh-arpeggios-wide": "arpegios amplios en la izquierda",
  "octaves": "octavas", "scales-fast": "escalas rápidas", "repeated-notes": "notas repetidas", "trills": "trinos y adornos", "hand-crossing": "cruces de manos",
  "voicing-melody-top": "destacar la melodía", "pedal-legato": "pedal y legato", "chords-blocked": "acordes plaqué", "syncopation": "síncopas",
  "polyrhythm-2v3": "polirritmia 2 contra 3", "wrist-rotation": "rotación de muñeca", "finger-independence": "independencia de dedos",
  "alberti-bass": "bajo Alberti", "staccato": "staccato", "dynamics-range": "rango dinámico", "rubato": "rubato",
};
$("sessions").innerHTML = p.sessions.map((s, i) => {
  const sec = p.sections[i];
  const tasks = [
    s.warmup && ["Calentamiento", `Hanon ${s.warmup.no}`, s.warmup.title, "5 min"],
    s.hanon && ["Técnica", `Hanon ${s.hanon.no}${s.hanon.inKey ? " en " + s.hanon.inKey : ""}`, s.hanon.skill || s.hanon.title, "8 min"],
    s.czerny && ["Estudio", `Czerny Op. 599 nº ${s.czerny.no}`, `${s.czerny.skill} · ${s.czerny.key}, pág. ${s.czerny.page}`, "10 min"],
    ["Obra", `${s.section} (c. ${s.bars})`, sec ? (sec.focus || [])[0] : "Toca la obra completa.", "18 min"],
    s.theory && ["Teoría", s.theory, "Búscalo en la partitura (ver Teoría de esta obra).", "4 min"],
  ].filter(Boolean);
  return `<article class="session"><header><h3>Sesión ${s.n} · ${esc(s.section)}</h3><span class="eyebrow">Foco técnico: ${esc(NEED_ES[s.need] || s.need)}</span></header>
    ${tasks.map(([kind, what, detail, t], k) => {
      const key = `${i}-${k}`;
      return `<div class="task"><input type="checkbox" id="t${key}" data-k="${key}" ${checks[key] ? "checked" : ""}><span class="kind">${kind}</span>
        <label for="t${key}">${esc(what)}<small>${esc(detail)}</small></label><span class="mono">${t}</span></div>`;
    }).join("")}</article>`;
}).join("");
$("sessions").onchange = e => { const k = e.target.dataset.k; if (k) { checks[k] = e.target.checked; store.set("pc-ses-" + p.id, checks); } };

// Theory
$("concepts").innerHTML = (p.theory || []).map(t => `
  <div class="card"><h3>${esc(t.concept)}</h3><p>${esc(t.explanation)}</p>
  <div class="score"><span class="eyebrow">En tu partitura</span><p>${esc(t.inScore)}</p></div></div>`).join("");
$("chords").innerHTML = (p.chords || []).map(c => `
  <div class="chord"><span class="deg">${esc(c.roman)}</span>${esc(c.name)} <small>${esc(c.notes)}</small><small>${esc(c.role)}</small></div>`).join("");
$("harmony").innerHTML = (p.progression ? `<p><b>Progresión principal:</b> <span class="mono">${esc(p.progression)}</span></p>` : "")
  + ((p.keyChanges || []).length ? `<p><b>Cambios de tonalidad o compás:</b></p><ul style="margin:0;padding-left:1.1em">${p.keyChanges.map(k => `<li>${esc(k)}</li>`).join("")}</ul>` : "");

// Pager + confidence
const prev = pieces[idx - 1], next = pieces[idx + 1];
$("pager").innerHTML = `${prev ? `<a class="btn" href="pieza.html?id=${prev.id}">← ${esc(prev.title)}</a>` : "<span></span>"}
  ${next ? `<a class="btn" href="pieza.html?id=${next.id}">${esc(next.title)} →</a>` : ""}`;
$("confidence").textContent = "Sobre este análisis: " + (p.confidence || "generado a partir de la partitura.") + " Confirma los números de compás con tu partitura.";
