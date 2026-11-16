// Fills the generated blocks of DECISIONES.md (sessions and exercise guides) from the site data,
// so the document never drifts from what the site shows. Called by build-data.mjs.
import { readFileSync, writeFileSync } from "node:fs";

const NEED_ES = {
  "legato-thirds-rh": "terceras legato", "lh-broken-chords": "acordes quebrados en la izquierda", "lh-arpeggios-wide": "arpegios amplios en la izquierda",
  "octaves": "octavas", "scales-fast": "escalas rápidas", "repeated-notes": "notas repetidas", "trills": "trinos y adornos", "hand-crossing": "cruces de manos",
  "voicing-melody-top": "destacar la melodía", "pedal-legato": "pedal y legato", "chords-blocked": "acordes plaqué", "syncopation": "síncopas",
  "polyrhythm-2v3": "polirritmia 2 contra 3", "wrist-rotation": "rotación de muñeca", "finger-independence": "independencia de dedos",
  "alberti-bass": "bajo Alberti", "staccato": "staccato", "dynamics-range": "rango dinámico", "rubato": "rubato",
};
const date = iso => iso.split("-").reverse().join("/");
const ul = xs => (xs || []).map(t => `- ${t}`).join("\n");
const ol = xs => (xs || []).map((t, i) => `${i + 1}. ${t}`).join("\n");

function studyMd(st) {
  if (!st) return "";
  return [`**Objetivo:** ${st.goal}`, `**Paso a paso:**\n\n${ol(st.steps)}`,
    (st.hard || []).length ? `**Pasajes difíciles:**\n\n${ul(st.hard)}` : "", `**Pasas a la siguiente sesión cuando:** ${st.check}`].filter(Boolean).join("\n\n");
}

export function routeMd({ roadmap }) {
  const lane = ["Fondo", "Ligera"];
  return "| # | Obra | Carril | Empieza | Aprendida | Semanas | Por qué en este lugar |\n|---|---|---|---|---|---|---|\n"
    + roadmap.items.map(it => `| ${it.order} | ${it.id} · ${it.title} | ${lane[it.lane]} | ${date(it.startDate)} | ${date(it.learnedBy)} | ${it.learnWeeks} | ${it.why} |`).join("\n");
}

export function sessionsMd({ roadmap, pieces }) {
  const byId = Object.fromEntries(pieces.map(p => [p.id, p]));
  return roadmap.items.map(it => {
    const p = byId[it.id];
    const days = Math.max(1, Math.round(it.learnWeeks * 7 / p.sessions.length));
    const table = `| Sesión | Sección (compases) | Foco técnico | Calentamiento | Técnica | Estudio Czerny |\n|---|---|---|---|---|---|\n`
      + p.sessions.map(s => `| ${s.n} | ${s.section} (${s.bars}) | ${NEED_ES[s.need] || s.need} | Hanon ${s.warmup.no} | Hanon ${s.hanon.no}${s.hanon.inKey ? " en " + s.hanon.inKey : ""} | nº ${s.czerny.no} (pág. ${s.czerny.page}) |`).join("\n");
    const detail = p.sessions.map((s, i) => {
      const sec = p.sections[i], th = (p.theory || []).find(t => t.concept === s.theory);
      return `#### Sesión ${s.n}: ${s.section} (c. ${s.bars})\n\n`
        + `Ejercicios: Hanon ${s.warmup.no} (calentamiento), Hanon ${s.hanon.no}${s.hanon.inKey ? " en " + s.hanon.inKey : ""} (técnica) y Czerny nº ${s.czerny.no}. Cómo estudiarlos: sección 5.\n\n`
        + studyMd(sec ? sec.study : p.wholeStudy)
        + (th ? `\n\n**Teoría: ${th.concept}.** ${th.explanation} En tu partitura: ${th.inScore}` : "");
    }).join("\n\n");
    return `### ${p.id} · ${p.title}\n\n${p.composer} · ${p.key} · ${p.meter} · ${p.tempo} · dificultad ${p.difficulty}/10 · ${p.pages} pág. · se estudia del ${date(it.startDate)} al ${date(it.learnedBy)} · cada sesión dura unos ${days} días\n\n${table}\n\n${detail}`;
  }).join("\n\n");
}

function exerciseMd(title, e) {
  return `#### ${title}\n\n${e.what}\n\n**Para qué sirve:** ${e.why}\n\n**Antes de empezar:**\n\n${ul(e.setup)}\n\n**Paso a paso:**\n\n${ol(e.steps)}\n\n`
    + `**Errores comunes:**\n\n${ul(e.mistakes)}\n\n**Tempo:** ${e.tempo}\n\n**Está listo cuando:** ${e.ready}`;
}

export function exercisesMd({ hanon, czerny, hanonDetail, czernyDetail }) {
  const T = Object.fromEntries(hanon.map(e => [e.no, e.title]));
  const C = Object.fromEntries(czerny.map(e => [e.no, e]));
  const h = Object.values(hanonDetail).sort((a, b) => a.no - b.no).map(e => exerciseMd(`Hanon ${e.no} — ${T[e.no] || ""}`, e));
  const c = Object.values(czernyDetail).sort((a, b) => a.no - b.no).map(e => exerciseMd(`Czerny nº ${e.no} — ${C[e.no] ? `${C[e.no].key}, ${C[e.no].meter}, pág. ${C[e.no].page}` : ""}`, e));
  return `### Hanon\n\n${h.join("\n\n")}\n\n### Czerny Op. 599\n\n${c.join("\n\n")}`;
}

// Replaces the text between <!-- generated:NAME --> and <!-- /generated:NAME -->.
export function fill(md, name, body) {
  const re = new RegExp(`(<!-- generated:${name} -->)[\\s\\S]*?(<!-- /generated:${name} -->)`);
  if (!re.test(md)) throw new Error(`DECISIONES.md has no generated:${name} block`);
  return md.replace(re, (_, a, b) => `${a}\n${body}\n${b}`);
}

export function writeDecisions(url, data) {
  let md = readFileSync(url, "utf8");
  md = fill(md, "route", routeMd(data));
  md = fill(md, "sessions", sessionsMd(data));
  md = fill(md, "exercises", exercisesMd(data));
  writeFileSync(url, md);
}
