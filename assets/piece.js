const { pieces } = window.DATA;
const $ = id => document.getElementById(id);
const id = new URLSearchParams(location.search).get("id") || pieces[0].id;
const idx = Math.max(0, pieces.findIndex(p => p.id === id));
const p = pieces[idx];
document.title = `${p.title} · Piano concierto`;

// Header
const dots = Array.from({ length: 10 }, (_, k) => `<i class="${k < p.difficulty ? "f" : ""}"></i>`).join("");
$("head").innerHTML = `
  <span class="eyebrow">Obra ${+p.id} del programa. Se aprende en el puesto ${p.plan.order} de ${pieces.length}.</span>
  <h1>${esc(p.title)}</h1>
  <p class="sub">${esc(p.composer)}${p.source ? ", " + esc(p.source) : ""}</p>
  <dl class="info">
    <div><dt>Tonalidad</dt><dd>${esc(p.key)}</dd></div>
    <div><dt>Armadura</dt><dd>${esc(p.keySignature)}</dd></div>
    <div><dt>Compás</dt><dd>${esc(p.meter)}</dd></div>
    ${p.tempo ? `<div><dt>Tempo</dt><dd>${esc(p.tempo)}</dd></div>` : ""}
    <div><dt>Extensión</dt><dd>${p.bars ?? "?"} compases, ${p.pages} pág.</dd></div>
    <div><dt>Dificultad</dt><dd>${p.difficulty}/10<span class="dots">${dots}</span></dd></div>
  </dl>
  <p>${esc(p.character)}</p>
  <p class="muted">${esc(p.difficultyNote)}</p>
  <p class="note">Plan: aprenderla del <b>${fmtDate(p.plan.startDate)}</b> al <b>${fmtDate(p.plan.learnedBy)}</b> (${p.plan.learnWeeks} semanas) y pulirla las ${p.plan.polishWeeks} semanas siguientes, como ${p.plan.lane ? "obra ligera" : "obra de fondo"}.${p.plan.why ? `<br><b>Por qué en este momento:</b> ${esc(p.plan.why)}` : ""}</p>
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
const PR = Object.fromEntries((window.DATA.practice || []).map(x => [x.id, x]));
function practiceHtml(s, sec) {
  if (!(s.practice || []).length) return "";
  const focus = sec ? (sec.focus || []).find(f => /comp[áa]s|compases|\(\d/.test(f)) || (sec.focus || [])[0] : null;
  return `<div class="practice"><h4>Cómo abordar los compases difíciles${s.bars && s.bars !== "todo" ? ` (c. ${esc(s.bars)})` : ""}</h4>
    ${focus ? `<p class="muted">Empieza por: ${esc(focus)}.</p>` : `<p class="muted">Empieza por los pasajes donde te detuviste en la última pasada.</p>`}
    ${s.practice.map(x => { const st = PR[x.id]; if (!st) return "";
      return `<details class="tech"><summary><span class="tn">${esc(st.name)}</span><span class="tf">${x.for ? "Para " + esc(NEED_ES[x.for] || x.for) : "Para cualquier pasaje que se resista"}</span></summary>
        <p>${esc(st.why)}</p><ol>${st.steps.map(t => `<li>${esc(t)}</li>`).join("")}</ol><p class="aka">También se conoce como <i>${esc(st.aka)}</i>.</p></details>`; }).join("")}
  </div>`;
}
const G = window.DATA.guide || { groups: {} };
const HD = window.DATA.hanonDetail || {}, CD = window.DATA.czernyDetail || {};
const li = xs => (xs || []).map(t => `<li>${esc(t)}</li>`).join("");
const block = (title, body) => body ? `<h5>${title}</h5>${body}` : "";
// Exercise guide: the detailed entry when there is one, else the shorter group guide.
function exerciseHow(d, gid, extra) {
  const g = G.groups[gid] || {}, steps = g.steps === "routine" ? G.routine : g.steps;
  if (!d) return `${extra}${block("Tempo", g.tempo && `<p>${esc(g.tempo)}</p>`)}${block("Paso a paso", steps && `<ol>${li(steps)}</ol>`)}`;
  return `<p>${esc(d.what)}</p>${block("Para qué sirve", `<p>${esc(d.why)}</p>`)}${extra}
    ${block("Antes de empezar", `<ul>${li(d.setup)}</ul>`)}${block("Paso a paso", `<ol>${li(d.steps)}</ol>`)}
    ${block("Errores comunes", `<ul>${li(d.mistakes)}</ul>`)}${block("Tempo", `<p>${esc(d.tempo)}</p>`)}
    ${block("Está listo cuando", `<p>${esc(d.ready)}</p>`)}`;
}
function pieceHow(st, sec) {
  if (!st) return `<ul>${li(sec ? sec.focus : ["Une todas las secciones sin parar.", "Graba una pasada y anota qué mejorar."])}</ul>${sec && sec.tip ? `<p>${esc(sec.tip)}</p>` : ""}`;
  return `<p><b>Objetivo:</b> ${esc(st.goal)}</p>${block("Paso a paso", `<ol>${li(st.steps)}</ol>`)}
    ${block("Pasajes difíciles", (st.hard || []).length && `<ul>${li(st.hard)}</ul>`)}
    ${block("Pasas a la siguiente sesión cuando", `<p>${esc(st.check)}</p>`)}
    <p class="muted">Abajo tienes técnicas para los compases que se resistan.</p>`;
}
function theoryHow(name) {
  const t = (p.theory || []).find(x => x.concept === name);
  return `${t ? `<p>${esc(t.explanation)}</p>${block("En tu partitura", `<p>${esc(t.inScore)}</p>`)}` : ""}
    ${block("Paso a paso", `<ol>${li(["Lee la explicación y di con tus palabras qué significa.", "Busca en la partitura los compases indicados y márcalos con lápiz.", "Tócalos lento y escucha qué efecto produce ese recurso.", "Toca el mismo pasaje sin él, o cambiándolo, y compara cómo suena.", "Escribe en una frase cómo cambia tu forma de tocar ese pasaje."])}</ol>`)}`;
}
const intro = (() => {
  const days = Math.max(1, Math.round(p.plan.learnWeeks * 7 / p.sessions.length));
  return `<details class="tech how-intro"><summary><span class="tn">Cómo usar estas sesiones</span><span class="tf">Cada sesión dura unos ${days} días</span></summary>
    <ol>${li([`Tienes ${p.plan.learnWeeks} semanas para esta obra y ${p.sessions.length} sesiones: repite cada sesión unos ${days} días, todos los días, hasta cumplir lo que dice «Pasas a la siguiente sesión cuando».`,
      "Sigue el orden de los bloques: calentamiento, técnica, estudio, obra y teoría. Los ejercicios preparan la técnica que la obra pide ese día.",
      "Toca «Cómo estudiarlo» debajo de cada bloque para ver el paso a paso. Marca el círculo cuando termines el bloque del día.",
      "Usa siempre metrónomo en los ejercicios y en los pasajes difíciles."])}</ol>
    ${block("Cómo subir el tempo", `<ol>${li(G.method)}</ol>`)}</details>`;
})();
$("sessions").innerHTML = intro + p.sessions.map((s, i) => {
  const sec = p.sections[i];
  const link = `<p><b>Cómo se aplica a la obra:</b> hoy el foco técnico es ${esc(NEED_ES[s.need] || s.need)}. Este ejercicio prepara esa técnica para «${esc(s.section)}». Al pasar a la obra, busca ahí ese mismo movimiento y tócalo con la misma soltura.</p>`;
  const tasks = [
    s.warmup && ["Calentamiento", `Hanon ${s.warmup.no}`, s.warmup.title, "5 min", exerciseHow(HD[s.warmup.no], s.warmup.guide, "")],
    s.hanon && ["Técnica", `Hanon ${s.hanon.no}${s.hanon.inKey ? " en " + s.hanon.inKey : ""}`, s.hanon.skill || s.hanon.title, "8 min",
      exerciseHow(HD[s.hanon.no], s.hanon.guide, (s.hanon.inKey ? `<p><b>Hoy en ${esc(s.hanon.inKey)}:</b> tócalo en la tonalidad de la obra, con la digitación de esa escala.</p>` : "") + link)],
    s.czerny && ["Estudio", `Czerny Op. 599 nº ${s.czerny.no}`, `${s.czerny.skill} · ${s.czerny.key}, pág. ${s.czerny.page}`, "10 min", exerciseHow(CD[s.czerny.no], s.czerny.guide, link)],
    ["Obra", `${s.section} (c. ${s.bars})`, sec ? (sec.focus || [])[0] : "Toca la obra completa.", "18 min", pieceHow(sec ? sec.study : p.wholeStudy, sec)],
    s.theory && ["Teoría", s.theory, "Búscalo en la partitura (ver Teoría de esta obra).", "4 min", theoryHow(s.theory)],
  ].filter(Boolean);
  return `<article class="session"><header><h3>Sesión ${s.n}: ${esc(s.section)}</h3><span class="eyebrow">Foco técnico: ${esc(NEED_ES[s.need] || s.need)}</span></header>
    <div class="list">${tasks.map(([kind, what, detail, t, how], k) => {
      const key = `${i}-${k}`;
      return `<div class="task"><input type="checkbox" id="t${key}" data-k="${key}" ${checks[key] ? "checked" : ""}><span class="kind">${kind}</span>
        <label for="t${key}">${esc(what)}<small>${esc(detail)}</small></label><span class="mono">${t}</span></div>
        <details class="how"><summary>Cómo estudiarlo</summary><div class="how-body">${how}</div></details>`;
    }).join("")}</div>${practiceHtml(s, sec)}</article>`;
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
