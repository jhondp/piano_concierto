const { concert, roadmap, pieces } = window.DATA;
const $ = id => document.getElementById(id);
const DAY = 86400000;
const weekDate = w => new Date(Date.parse(roadmap.start + "T12:00:00") + w * 7 * DAY).toISOString().slice(0, 10);

$("when").textContent = `Recital de piano solo · ${fmtDate(concert.date)}`;
$("tagline").textContent = concert.tagline;
// *text* in concert.json marks titles in italics.
$("about").innerHTML = concert.about.map(p => `<p>${esc(p).replace(/\*([^*]+)\*/g, "<i>$1</i>")}</p>`).join("");
$("goals").innerHTML = concert.objectives.map(o => `<li>${esc(o)}</li>`).join("");

// Countdown + overall progress (learned sections over all sections)
const daysLeft = Math.max(0, Math.ceil((Date.parse(concert.date + "T20:00:00") - Date.now()) / DAY));
const isDone = p => sectionsDone(p.id).length === p.sections.length;
const total = pieces.reduce((s, p) => s + p.sections.length, 0);
const learned = pieces.reduce((s, p) => s + sectionsDone(p.id).length, 0);
const learnedPieces = pieces.filter(isDone).length;
$("count").innerHTML = `
  <div><b>${daysLeft}</b><span>días</span></div>
  <div><b>${Math.floor(daysLeft / 7)}</b><span>semanas</span></div>
  <div><b>${learnedPieces}/${pieces.length}</b><span>obras listas</span></div>`;
$("ptext").textContent = `Cada tecla es una obra, en orden de concierto. Se llena cuando marcas todas sus secciones como aprendidas (${learned} de ${total} secciones).`;

// What to study now
const nowWeek = Math.floor((Date.now() - Date.parse(roadmap.start + "T00:00:00")) / (7 * DAY));
const byId = Object.fromEntries(pieces.map(p => [p.id, p]));
const learning = roadmap.items.filter(i => nowWeek >= i.learnFrom && nowWeek < i.polishFrom);
const polishing = roadmap.items.filter(i => nowWeek >= i.polishFrom && nowWeek < i.polishFrom + i.polishWeeks);
const link = i => `<a href="pieza.html?id=${i.id}">${esc(byId[i.id].title)}</a>`;
let nowHtml = "";
if (nowWeek < 0) nowHtml = `<p>El plan empieza el ${fmtDate(roadmap.start)} con ${roadmap.items.filter(i => i.learnFrom === 0).map(link).join(" y ")}.</p>`;
else if (nowWeek >= roadmap.rehearsalFrom) nowHtml = `<p>Fase de ensayos: toca el programa completo en orden de concierto, grábalo y escúchalo.</p>`;
else nowHtml = `<p>${learning.length ? `Aprendiendo: ${learning.map(link).join(" y ")}.` : "Sin obra nueva esta semana: usa el tiempo para repasar."}${polishing.length ? ` Puliendo: ${polishing.map(link).join(" y ")}.` : ""}</p>`;
$("now").innerHTML = `<span class="eyebrow">Semana ${Math.max(1, nowWeek + 1)} de ${roadmap.totalWeeks}</span><h3>Qué estudiar ahora</h3>${nowHtml}`;

// Keyboard: white key per piece; black keys follow the piano's 2+3 pattern.
const nowIds = new Set((nowWeek < 0 ? roadmap.items.filter(i => i.learnFrom === 0) : learning).map(i => i.id));
$("keys").innerHTML = pieces.map((p, i) => `<a class="wk${isDone(p) ? " on" : ""}${nowIds.has(p.id) ? " now" : ""}" style="--i:${i}"
    href="pieza.html?id=${p.id}" title="${esc(p.title)}" aria-label="${+p.id}. ${esc(p.title)}${isDone(p) ? ", aprendida" : nowIds.has(p.id) ? ", en estudio" : ""}"><span>${+p.id}</span></a>`).join("")
  + pieces.slice(0, -1).map((_, i) => [0, 1, 3, 4, 5].includes(i % 7)
    ? `<i class="bk" aria-hidden="true" style="left:calc(10px + (100% - 20px) * ${(i + 1) / pieces.length})"></i>` : "").join("");
$("now").hidden = false;

// Repertoire: two grouped lists of eight
const row = p => {
  const dots = Array.from({ length: 10 }, (_, k) => `<i class="${k < p.difficulty ? "f" : ""}"></i>`).join("");
  return `<a href="pieza.html?id=${p.id}"><span class="num">${p.id}</span>
    <span><span class="ti">${esc(p.title)}</span><small>${esc(p.composer)}, ${esc(p.key)}${isDone(p) ? ` <span class="ok">✓ Aprendida</span>` : ""}</small></span>
    <span class="dots" title="Dificultad ${p.difficulty} de 10" aria-label="Dificultad ${p.difficulty} de 10">${dots}</span></a>`;
};
$("rep").innerHTML = [pieces.slice(0, 8), pieces.slice(8)].map(g => `<div class="group">${g.map(row).join("")}</div>`).join("");

// Phases
const phases = [
  ["Aprendizaje", 0, Math.max(...roadmap.items.map(i => i.polishFrom)), "Dos obras a la vez: una de fondo y una ligera. La dificultad sube hasta mitad de año y baja hacia el final."],
  ["Pulido y repaso", Math.min(...roadmap.items.map(i => i.polishFrom)), roadmap.rehearsalFrom, "Pulir cada obra al terminarla. Las tres semanas libres del final son un margen para lo que se atrase."],
  ["Programa completo", roadmap.rehearsalFrom, roadmap.totalWeeks, "Pasadas completas en orden de concierto y ensayos generales grabados."],
];
$("phases").innerHTML = phases.map(([n, a, b, d]) =>
  `<div class="phase"><span class="mono">${fmtDate(weekDate(a))} – ${fmtDate(weekDate(b))}</span><b>${n}</b><span class="muted">${d}</span></div>`).join("")
  + `<div class="phase end"><span class="mono">${fmtDate(concert.date)}</span><b>Concierto</b><span class="muted">Las dieciséis obras en vivo.</span></div>`;

// Gantt, rows in learning order
const W = roadmap.totalWeeks, pct = w => (w / W * 100) + "%";
const months = [];
for (let d = new Date(roadmap.start + "T12:00:00"); d < new Date(concert.date + "T12:00:00"); d.setMonth(d.getMonth() + 1, 1))
  months.push(d.toLocaleDateString("es", { month: "short" }));
const todayMark = nowWeek >= 0 && nowWeek <= W ? `<span class="today" style="left:${pct(nowWeek)}"></span>` : "";
$("gantt").innerHTML = `<div class="months"><div></div><div>${months.map(m => `<span>${m}</span>`).join("")}</div></div>`
  + [0, 1].map(lane => `<div class="g-row g-lane"><b>${lane ? "Obra ligera" : "Obra de fondo"}</b><div></div></div>`
    + roadmap.items.filter(i => i.lane === lane).map(i => `
  <div class="g-row"><a href="pieza.html?id=${i.id}">${i.order}. ${esc(byId[i.id].title)}</a>
    <div class="track">
      <span class="seg learn" style="left:${pct(i.learnFrom)};width:${pct(i.learnWeeks)}" title="Aprender: ${fmtDate(i.startDate)} – ${fmtDate(i.learnedBy)}">${i.learnWeeks} sem</span>
      <span class="seg polish" style="left:${pct(i.polishFrom)};width:${pct(i.polishWeeks)}" title="Pulir"></span>
      ${todayMark}
    </div></div>`).join("")).join("")
  + `<div class="g-row g-lane"><b>Programa completo</b><div></div></div><div class="g-row"><b>Ensayos generales</b><div class="track"><span class="seg polish" style="left:${pct(roadmap.rehearsalFrom)};width:${pct(W - roadmap.rehearsalFrom)}">Programa completo</span>${todayMark}</div></div>`;
