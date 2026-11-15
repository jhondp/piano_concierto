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
