import { test } from "node:test";
import assert from "node:assert/strict";
import { buildRoadmap, buildSessions, czernyLevel } from "./plan.mjs";

const pieces = Array.from({ length: 16 }, (_, i) => ({ id: String(i + 1).padStart(2, "0"), title: "P" + i, difficulty: (i % 9) + 1, pages: (i % 5) + 2 }));
const hanon = [
  ...Array.from({ length: 20 }, (_, i) => ({ no: i + 1, title: "H" + (i + 1), tags: ["finger-independence"] })),
  { no: 39, title: "Escalas", tags: ["scales"] }, { no: 41, title: "Arpegios", tags: ["arpeggios"] }, { no: 50, title: "Terceras", tags: ["thirds"] },
];
const czerny = [
  { no: 1, level: 1, tags: ["five-finger"] }, { no: 30, level: 2, tags: ["thirds"] }, { no: 60, level: 2, tags: ["arpeggios"] }, { no: 90, level: 3, tags: ["scales"] },
];

test("roadmap fits every piece and its polish before the rehearsal phase", () => {
  const r = buildRoadmap(pieces, { start: "2026-11-16", concert: "2027-12-01" });
  assert.equal(r.items.length, 16);
  for (const it of r.items) {
    assert.ok(it.learnWeeks >= 2);
    assert.ok(it.polishFrom + it.polishWeeks <= r.rehearsalFrom, `${it.id} ends after rehearsal starts`);
  }
});

test("roadmap lanes never overlap and learning order goes easy to hard", () => {
  const r = buildRoadmap(pieces, { start: "2026-11-16", concert: "2027-12-01" });
  for (const lane of [0, 1]) {
    const its = r.items.filter(i => i.lane === lane).sort((a, b) => a.learnFrom - b.learnFrom);
    its.slice(1).forEach((it, k) => assert.ok(it.learnFrom >= its[k].learnFrom + its[k].learnWeeks));
  }
  const diffs = r.items.map(i => pieces.find(p => p.id === i.id).difficulty);
  assert.deepEqual(diffs, [...diffs].sort((a, b) => a - b));
});

test("every session gets a warm-up, a Hanon and a Czerny exercise matched to the need", () => {
  const piece = { id: "02", key: "Re♭ mayor", difficulty: 6, techniqueNeeds: ["legato-thirds-rh", "lh-arpeggios-wide"], sections: [{ name: "A", bars: "1–8" }, { name: "B", bars: "9–16" }], theory: [{ concept: "Terceras" }] };
  const s = buildSessions(piece, hanon, czerny);
  assert.equal(s.length, 3); // 2 sections + full run-through
  assert.ok(s.every(x => x.warmup && x.hanon && x.czerny));
  assert.equal(s[0].hanon.no, 50);
  assert.equal(s[0].czerny.no, 30);
  assert.equal(s[1].hanon.no, 41);
  assert.equal(s[1].hanon.inKey, "Re♭ mayor");
  assert.equal(s[1].czerny.no, 60);
  assert.equal(s[2].section, "Obra completa");
});

test("czerny level follows piece difficulty", () => {
  assert.deepEqual([1, 4, 5, 7, 8, 10].map(czernyLevel), [1, 1, 2, 2, 3, 3]);
});

const route = [
  { id: "01", lane: 0 }, { id: "02", lane: 1 }, { id: "16", lane: 0 }, { id: "03", lane: 1 }, { id: "15", lane: 0 }, { id: "04", lane: 1 },
  { id: "14", lane: 0 }, { id: "05", lane: 1 }, { id: "13", lane: 0 }, { id: "06", lane: 1 }, { id: "12", lane: 0 }, { id: "07", lane: 1 },
  { id: "11", lane: 0 }, { id: "08", lane: 1 }, { id: "10", lane: 0 }, { id: "09", lane: 1 },
].map((r, k) => ({ ...r, why: "razón " + k }));

test("a curated route sets each lane's order and keeps every piece inside the learning window", () => {
  const r = buildRoadmap(pieces, { start: "2026-11-16", concert: "2027-12-01", route });
  assert.equal(r.items.length, 16);
  for (const lane of [0, 1]) {
    const its = r.items.filter(i => i.lane === lane).sort((a, b) => a.learnFrom - b.learnFrom);
    assert.deepEqual(its.map(i => i.id), route.filter(x => x.lane === lane).map(x => x.id));
    assert.equal(its[0].learnFrom, 0);
    its.slice(1).forEach((it, k) => assert.equal(it.learnFrom, its[k].learnFrom + its[k].learnWeeks));
    for (const it of its) { assert.ok(it.learnWeeks >= 2); assert.ok(it.polishFrom + it.polishWeeks <= r.rehearsalFrom); }
  }
  assert.equal(r.items.find(i => i.id === "16").why, "razón 2");
  assert.deepEqual([...r.items].sort((a, b) => a.order - b.order).map(i => i.order), Array.from({ length: 16 }, (_, k) => k + 1));
});

test("a route that misses or repeats a piece is rejected", () => {
  assert.throws(() => buildRoadmap(pieces, { start: "2026-11-16", concert: "2027-12-01", route: route.slice(1) }), /route/);
  assert.throws(() => buildRoadmap(pieces, { start: "2026-11-16", concert: "2027-12-01", route: [...route.slice(1), route[1]] }), /route/);
});

test("buffer weeks stay free before the rehearsal phase", () => {
  const r = buildRoadmap(pieces, { start: "2026-11-16", concert: "2027-12-01", route, bufferWeeks: 3 });
  const lastPolishEnd = Math.max(...r.items.map(i => i.polishFrom + i.polishWeeks));
  assert.equal(r.rehearsalFrom - lastPolishEnd, 3);
});

test("the real route starts easy, never pairs two heavy pieces and lets the hardest one mature", async () => {
  const { readFileSync } = await import("node:fs");
  const read = f => JSON.parse(readFileSync(new URL("../data/" + f, import.meta.url), "utf8"));
  const concert = read("concert.json");
  const real = ["A", "B", "C", "D"].flatMap(x => read(`pieces-${x}.json`));
  const r = buildRoadmap(real, { start: concert.start, concert: concert.date, rehearsalWeeks: concert.rehearsalWeeks,
    polishWeeks: concert.polishWeeks, bufferWeeks: concert.bufferWeeks, route: concert.route });
  const diff = Object.fromEntries(real.map(p => [p.id, p.difficulty]));
  const minD = Math.min(...real.map(p => p.difficulty));
  r.items.filter(i => i.learnFrom === 0).forEach(i => assert.equal(diff[i.id], minD, `${i.id} is not among the easiest`));
  for (const a of r.items) for (const b of r.items)
    if (a.lane !== b.lane && a.learnFrom < b.polishFrom && b.learnFrom < a.polishFrom)
      assert.ok(diff[a.id] + diff[b.id] <= 15, `${a.id} and ${b.id} overlap with combined difficulty ${diff[a.id] + diff[b.id]}`);
  const hardest = r.items.find(i => diff[i.id] === Math.max(...real.map(p => p.difficulty)));
  assert.ok(r.rehearsalFrom - hardest.polishFrom >= 12, `hardest piece only has ${r.rehearsalFrom - hardest.polishFrom} weeks to mature`);
});

const practice = [
  { id: "g1", general: true, needs: ["octaves"] }, { id: "g2", general: true, needs: [] }, { id: "g3", general: true, needs: [] },
  { id: "thirds", general: false, needs: ["legato-thirds-rh"] }, { id: "arps", general: false, needs: ["lh-arpeggios-wide"] },
];

test("every session gets three distinct practice strategies: its need first, then the piece's next need, then a rotating general one", () => {
  const piece = { id: "02", key: "Re♭ mayor", difficulty: 6, techniqueNeeds: ["legato-thirds-rh", "lh-arpeggios-wide"],
    sections: [{ name: "A", bars: "1–8" }, { name: "B", bars: "9–16" }], theory: [] };
  const s = buildSessions(piece, hanon, czerny, 1, practice);
  assert.deepEqual(s.map(x => x.practice.map(p => p.id)), [["thirds", "arps", "g2"], ["arps", "thirds", "g3"], ["thirds", "arps", "g1"]]);
  assert.deepEqual(s[0].practice[0], { id: "thirds", for: "legato-thirds-rh" });
  assert.deepEqual(s[0].practice[2], { id: "g2", for: null });
  assert.deepEqual(buildSessions(piece, hanon, czerny, 0).map(x => x.practice), [[], [], []]);
});

test("every session exercise has a practice guide with tempo and steps", async () => {
  const { readFileSync, readdirSync } = await import("node:fs");
  const { guideId } = await import("./plan.mjs");
  const read = f => JSON.parse(readFileSync(new URL("../data/" + f, import.meta.url), "utf8"));
  const guide = read("exercise-guide.json");
  const real = readdirSync(new URL("../data/", import.meta.url)).filter(f => /^pieces-/.test(f)).flatMap(read);
  const H = read("hanon.json").exercises, C = read("czerny.json").exercises;
  assert.equal(guideId(guide, "hanon", 34), "h-thumb");
  assert.equal(guideId(guide, "hanon", 57), "h-part3"); // not in any group -> part fallback
  assert.equal(guideId(guide, "czerny", 99), "c-default");
  for (const p of real) for (const s of buildSessions(p, H, C, 0)) {
    for (const [kind, no] of [["hanon", s.warmup.no], ["hanon", s.hanon.no], ["czerny", s.czerny.no]]) {
      const g = guide.groups[guideId(guide, kind, no)];
      assert.ok(g && g.tempo && g.steps.length, `${p.id} ${kind} ${no} has no guide`);
    }
    assert.ok(guide.czernyNotes[s.czerny.no], `czerny ${s.czerny.no} has no note`);
  }
});

test("every session part has a detailed study guide", async () => {
  const { readFileSync, readdirSync } = await import("node:fs");
  const read = f => JSON.parse(readFileSync(new URL("../data/" + f, import.meta.url), "utf8"));
  const H = read("hanon.json").exercises, C = read("czerny.json").exercises;
  const hd = new Set(read("hanon-detail.json").exercises.filter(e => e.what && e.steps.length >= 5 && e.tempo).map(e => e.no));
  const cd = new Set(read("czerny-detail.json").exercises.filter(e => e.what && e.steps.length >= 5 && e.tempo).map(e => e.no));
  const ok = s => s && s.goal && s.steps.length >= 6 && s.check;
  const real = readdirSync(new URL("../data/", import.meta.url)).filter(f => /^pieces-/.test(f)).flatMap(read);
  for (const p of real) {
    assert.ok(ok(p.wholeStudy), `${p.id} has no wholeStudy`);
    p.sections.forEach((s, i) => assert.ok(ok(s.study), `${p.id} section ${i} has no study`));
    for (const s of buildSessions(p, H, C, 0)) {
      assert.ok(hd.has(s.warmup.no) && hd.has(s.hanon.no), `${p.id} Hanon ${s.warmup.no}/${s.hanon.no} has no detail`);
      assert.ok(cd.has(s.czerny.no), `${p.id} Czerny ${s.czerny.no} has no detail`);
    }
  }
});

test("DECISIONES.md generated blocks are replaced in place and missing blocks fail", async () => {
  const { fill } = await import("./decisions.mjs");
  const md = "a\n<!-- generated:x -->\nold\n<!-- /generated:x -->\nb";
  const once = fill(md, "x", "new");
  assert.equal(once, "a\n<!-- generated:x -->\nnew\n<!-- /generated:x -->\nb");
  assert.equal(fill(once, "x", "new"), once);
  assert.throws(() => fill(md, "y", "z"), /generated:y/);
});
