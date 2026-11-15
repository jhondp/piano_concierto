import { test } from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
const { staffMidi, landmarkHint, LANDMARKS } = createRequire(import.meta.url)("../assets/trainer.js");

test("landmarks sit on the right notes: the five Do and the note each clef names", () => {
  const midi = Object.fromEntries(Object.entries(LANDMARKS).map(([c, ls]) => [c, ls.map(l => staffMidi(c, l.pos))]));
  assert.deepEqual(midi.sol, [60, 67, 72, 84]); // Do4, Sol4 (2nd line), Do5 (3rd space), Do6 (2nd ledger above)
  assert.deepEqual(midi.fa, [36, 48, 53, 60]); // Do2 (2nd ledger below), Do3 (2nd space), Fa3 (4th line), Do4
});

test("the hint names the nearest landmark and the interval to it", () => {
  assert.match(landmarkHint("sol", 12), /^Es el Do6/);
  assert.match(landmarkHint("fa", -4), /^Es el Do2/);
  assert.match(landmarkHint("sol", 7), /^Está una 3ª arriba del Do5/); // Mi5
  assert.match(landmarkHint("fa", 5), /^Está una 2ª abajo del Fa3/); // Mi3
  assert.match(landmarkHint("sol", 0), /^Está una 3ª abajo del Sol4/); // Mi4
});
