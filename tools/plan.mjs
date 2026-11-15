// Pure planning logic: learning roadmap and per-session Hanon/Czerny assignment.

const DAY = 86400000;
export const addDays = (iso, n) => new Date(Date.parse(iso + "T00:00:00Z") + n * DAY).toISOString().slice(0, 10);
export const weeksBetween = (a, b) => Math.floor((Date.parse(b) - Date.parse(a)) / (7 * DAY));

// Piece technique tag -> tags searched in each method book.
export const NEED_MAP = {
  "legato-thirds-rh": { hanon: ["thirds"], czerny: ["thirds"] },
  "lh-broken-chords": { hanon: ["arpeggios"], czerny: ["broken-chords", "alberti-bass"] },
  "lh-arpeggios-wide": { hanon: ["arpeggios"], czerny: ["arpeggios", "broken-chords"] },
  "octaves": { hanon: ["octaves"], czerny: ["octaves", "sixths"] },
  "scales-fast": { hanon: ["scales"], czerny: ["scales"] },
  "repeated-notes": { hanon: ["repeated-notes"], czerny: ["repeated-notes"] },
  "trills": { hanon: ["trills"], czerny: ["ornaments"] },
  "hand-crossing": { hanon: ["stretch"], czerny: ["hand-crossing", "position-shifts"] },
  "voicing-melody-top": { hanon: ["fingers-3-4-5", "finger-independence"], czerny: ["lh-melody", "legato"] },
  "pedal-legato": { hanon: ["legato"], czerny: ["legato"] },
  "chords-blocked": { hanon: ["wrist", "sixths"], czerny: ["chords-blocked"] },
  "syncopation": { hanon: ["finger-independence"], czerny: ["dynamics", "staccato"] },
  "polyrhythm-2v3": { hanon: ["finger-independence"], czerny: ["finger-independence"] },
  "wrist-rotation": { hanon: ["tremolo", "wrist"], czerny: ["broken-chords", "alberti-bass"] },
  "finger-independence": { hanon: ["finger-independence", "fingers-3-4-5"], czerny: ["finger-independence", "five-finger"] },
  "alberti-bass": { hanon: ["finger-independence"], czerny: ["alberti-bass", "broken-chords"] },
  "staccato": { hanon: ["staccato", "repeated-notes"], czerny: ["staccato"] },
  "dynamics-range": { hanon: ["legato"], czerny: ["dynamics"] },
  "rubato": { hanon: ["legato"], czerny: ["legato", "dynamics"] },
};

const hasAny = (ex, tags) => (ex.tags || []).some(t => tags.includes(t));

// Czerny level allowed for a piece of difficulty 1-10.
export const czernyLevel = d => (d <= 4 ? 1 : d <= 7 ? 2 : 3);

// Pick the first exercise matching tags, preferring ones not used yet; fall back to any unused.
function pick(list, tags, used, filter = () => true) {
  const pool = list.filter(filter);
  return pool.find(e => hasAny(e, tags) && !used.has(e.no))
    || pool.find(e => hasAny(e, tags))
    || pool.find(e => !used.has(e.no))
    || pool[0] || null;
}

// Practice strategies for a session: one per technique need (this session's, then the piece's next), plus a rotating general one.
function pickPractice(practice, need, nextNeed, rot) {
  const out = [];
  const add = (p, why) => { if (p && !out.some(x => x.id === p.id)) out.push({ id: p.id, for: why }); };
  // The most specific strategy (fewest needs) wins, so a broad one like the tempo ladder does not hide a targeted one.
  const fits = n => practice.filter(p => (p.needs || []).includes(n)).sort((a, b) => a.general - b.general || a.needs.length - b.needs.length);
  const forNeed = n => fits(n)[0];
  add(forNeed(need), need);
  add(forNeed(nextNeed), nextNeed);
  const general = practice.filter(p => p.general);
  for (let k = 0; k < general.length && out.length < 3; k++) add(general[(rot + k) % general.length], null);
  return out;
}

export function buildSessions(piece, hanon, czerny, warmupOffset = 0, practice = []) {
  const needs = (piece.techniqueNeeds || []).filter(n => NEED_MAP[n]);
  if (!needs.length) needs.push("finger-independence");
  const warmups = hanon.filter(e => e.no >= 1 && e.no <= 20);
  const lvl = czernyLevel(piece.difficulty || 5);
  const usedH = new Set(), usedC = new Set();
  const units = [...(piece.sections || []), { name: "Obra completa", bars: "todo", focus: ["Une todas las secciones sin parar.", "Graba una pasada y anota qué mejorar."], tip: "Toca la obra completa dos veces: una lenta y una a tempo." }];
  return units.map((sec, i) => {
    const need = needs[i % needs.length], map = NEED_MAP[need];
    const warm = warmups.length ? warmups[(warmupOffset + i) % warmups.length] : null;
    const h = pick(hanon, map.hanon, usedH, e => e.no > 20);
    const c = pick(czerny, map.czerny, usedC, e => (e.level || 1) <= lvl && (e.level || 1) >= Math.max(1, lvl - 1));
    if (h) usedH.add(h.no);
    if (c) usedC.add(c.no);
    const theory = (piece.theory || [])[i % Math.max(1, (piece.theory || []).length)];
    return {
      n: i + 1, section: sec.name, bars: sec.bars, need,
      warmup: warm && { no: warm.no, title: warm.title },
      hanon: h && { no: h.no, title: h.title, skill: h.skill, inKey: /scales|arpeggios/.test((h.tags || []).join()) ? piece.key : null },
      czerny: c && { no: c.no, skill: c.skill, key: c.key, page: c.page },
      theory: theory ? theory.concept : null,
      practice: pickPractice(practice, need, needs[(i + 1) % needs.length], warmupOffset + i),
    };
  });
}

// Schedule. With a curated `route` ([{id, lane, why}]) each lane follows its own order and is
// stretched to fill the learning window; without one, pieces go easy to hard into whichever lane frees first.
export function buildRoadmap(pieces, { start, concert, rehearsalWeeks = 8, polishWeeks = 3, bufferWeeks = 0, lanes = 2, route = null }) {
  const total = weeksBetween(start, concert);
  const learnWindow = total - rehearsalWeeks;
  const weight = p => (p.difficulty || 5) + (p.pages || 3);
  const byId = Object.fromEntries(pieces.map(p => [p.id, p]));
  const slot = (p, lane, from, weeks, extra = {}) => ({ id: p.id, title: p.title, lane, learnFrom: from, learnWeeks: weeks,
    polishFrom: from + weeks, polishWeeks, startDate: addDays(start, from * 7), learnedBy: addDays(start, (from + weeks) * 7), ...extra });
  let items;
  if (route) {
    const ids = route.map(r => r.id);
    if (ids.length !== pieces.length || new Set(ids).size !== ids.length || ids.some(id => !byId[id]))
      throw new Error("route must list every piece exactly once");
    const span = learnWindow - polishWeeks - bufferWeeks;
    items = [];
    for (let lane = 0; lane < lanes; lane++) {
      const its = route.filter(r => r.lane === lane);
      const sumW = its.reduce((s, r) => s + weight(byId[r.id]), 0);
      let cum = 0;
      for (const r of its) {
        // Cumulative rounding keeps the lane end exactly at the window edge.
        const from = Math.round(cum / sumW * span), to = Math.round((cum += weight(byId[r.id])) / sumW * span);
        items.push(slot(byId[r.id], lane, from, to - from, { why: r.why || "" }));
      }
    }
    items.sort((a, b) => a.learnFrom - b.learnFrom || a.lane - b.lane);
  } else {
    const order = [...pieces].sort((a, b) => (a.difficulty - b.difficulty) || (a.pages - b.pages) || a.id.localeCompare(b.id));
    const sumW = order.reduce((s, p) => s + weight(p), 0);
    // Leave room so the last piece also gets its polish weeks inside the learning window.
    const scale = ((learnWindow - polishWeeks) * lanes) / sumW;
    const free = Array(lanes).fill(0);
    items = order.map(p => {
      const lane = free.indexOf(Math.min(...free));
      const weeks = Math.max(2, Math.floor(weight(p) * scale));
      const from = free[lane];
      free[lane] = from + weeks;
      return slot(p, lane, from, weeks);
    });
  }
  items.forEach((it, k) => { it.order = k + 1; });
  return { start, concert, totalWeeks: total, rehearsalFrom: learnWindow, items };
}
