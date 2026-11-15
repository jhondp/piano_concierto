const { concert, roadmap, pieces } = window.DATA;
const $ = id => document.getElementById(id);
const DAY = 86400000;
const weekDate = w => new Date(Date.parse(roadmap.start + "T12:00:00") + w * 7 * DAY).toISOString().slice(0, 10);

$("when").textContent = `Recital de piano solo · ${fmtDate(concert.date)}`;
$("tagline").textContent = concert.tagline;
$("about").innerHTML = concert.about.map(p => `<p>${esc(p)}</p>`).join("");
$("goals").innerHTML = concert.objectives.map(o => `<li>${esc(o)}</li>`).join("");

// Countdown
const daysLeft = Math.max(0, Math.ceil((Date.parse(concert.date + "T20:00:00") - Date.now()) / DAY));
$("count").innerHTML = `
  <div><b>${daysLeft}</b><span>días</span></div>
  <div><b>${Math.floor(daysLeft / 7)}</b><span>semanas</span></div>
  <div><b>${pieces.length}</b><span>obras</span></div>`;

// Overall progress = learned sections over all sections
const total = pieces.reduce((s, p) => s + p.sections.length, 0);
const learned = pieces.reduce((s, p) => s + sectionsDone(p.id).length, 0);
const learnedPieces = pieces.filter(p => sectionsDone(p.id).length === p.sections.length).length;
$("pbar").style.width = (learned / total * 100) + "%";
$("ptext").textContent = `${learnedPieces} de ${pieces.length} obras aprendidas · ${learned} de ${total} secciones`;

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
$("now").hidden = false;

// Repertoire
$("rep").innerHTML = pieces.map(p => {
  const dots = Array.from({ length: 10 }, (_, k) => `<i class="${k < p.difficulty ? "f" : ""}"></i>`).join("");
  const done = sectionsDone(p.id).length === p.sections.length ? " · ✓ aprendida" : "";
  return `<a href="pieza.html?id=${p.id}"><span class="num">${p.id}</span>
    <span><span class="ti">${esc(p.title)}</span><small>${esc(p.composer)} · ${esc(p.key)}${done}</small><small>Se aprende en el puesto ${p.plan.order} de ${pieces.length}</small></span>
    <span class="dots" title="Dificultad ${p.difficulty} de 10" aria-label="Dificultad ${p.difficulty} de 10">${dots}</span></a>`;
}).join("");

// Phases
const phases = [
  ["Aprendizaje", 0, Math.max(...roadmap.items.map(i => i.polishFrom)), "Obras nuevas de a dos, de menor a mayor dificultad."],
  ["Pulido y repaso", Math.min(...roadmap.items.map(i => i.polishFrom)), roadmap.rehearsalFrom, "Pulir cada obra al terminarla. Las semanas libres al final son un colchón para lo que se atrase."],
  ["Programa completo", roadmap.rehearsalFrom, roadmap.totalWeeks, "Pasadas completas en orden de concierto y ensayos generales grabados."],
];
$("phases").innerHTML = phases.map(([n, a, b, d]) =>
  `<div class="phase"><span class="mono">${fmtDate(weekDate(a))} – ${fmtDate(weekDate(b))}</span><b>${n}</b><span class="muted">${d}</span></div>`).join("")
  + `<div class="phase" style="border-top-color:var(--bad)"><span class="mono">${fmtDate(concert.date)}</span><b>Concierto</b><span class="muted">Las dieciséis obras en vivo.</span></div>`;

// Gantt, rows in learning order
const W = roadmap.totalWeeks, pct = w => (w / W * 100) + "%";
const months = [];
for (let d = new Date(roadmap.start + "T12:00:00"); d < new Date(concert.date + "T12:00:00"); d.setMonth(d.getMonth() + 1, 1))
  months.push(d.toLocaleDateString("es", { month: "short" }));
const todayMark = nowWeek >= 0 && nowWeek <= W ? `<span class="today" style="left:${pct(nowWeek)}"></span>` : "";
$("gantt").innerHTML = `<div class="months"><div></div><div>${months.map(m => `<span>${m}</span>`).join("")}</div></div>`
  + [...roadmap.items].sort((a, b) => a.order - b.order).map(i => `
  <div class="g-row"><a href="pieza.html?id=${i.id}">${i.order}. ${esc(byId[i.id].title)}</a>
    <div class="track">
      <span class="seg learn" style="left:${pct(i.learnFrom)};width:${pct(i.learnWeeks)}" title="Aprender: ${fmtDate(i.startDate)} – ${fmtDate(i.learnedBy)}">${i.learnWeeks} sem</span>
      <span class="seg polish" style="left:${pct(i.polishFrom)};width:${pct(i.polishWeeks)}" title="Pulir"></span>
      ${todayMark}
    </div></div>`).join("")
  + `<div class="g-row"><b>Ensayos generales</b><div class="track"><span class="seg polish" style="left:${pct(roadmap.rehearsalFrom)};width:${pct(W - roadmap.rehearsalFrom)}">Programa completo</span>${todayMark}</div></div>`;
