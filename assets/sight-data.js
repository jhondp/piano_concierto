// Sight-reading excerpts, transcribed from the public-domain scores in the study folder
// (Mozart K. 265, Henle-style edition, page 49 and following; Debussy, Clair de Lune, 5-page engraving).
// Bar numbers are the printed ones. Each note is [midi, duration, tie]:
//   midi: C4 = 60, or null for a rest;
//   duration: in quarter notes (eighth = 0.5, dotted quarter = 1.5, sixteenth = 0.25), so a 2/4 bar sums to 2
//     and a 9/8 bar to 4.5;
//   tie: 1 when the note is tied to the next one (same pitch); the tied continuation is not played again.
// key: fifths of the key signature (0 = Do mayor, -3 = Do menor, -5 = Re♭ mayor).
// bpm: suggested tempo for the meter's beat (quarter in 2/4, dotted quarter in 9/8).
const SIGHT = [
  {
    id: "moz-tema-a", piece: "Mozart · Variaciones K. 265", title: "Tema, primera mitad", bars: "1–8",
    clef: "sol", key: 0, meter: [2, 4], bpm: 72, level: 1,
    notes: [
      [72, 1], [72, 1], [79, 1], [79, 1], [81, 1], [81, 1], [79, 1], [79, 1],
      [77, 1], [77, 1], [76, 1], [76, 1], [74, 1], [74, 0.75], [76, 0.25], [72, 2],
    ],
  },
  {
    id: "moz-tema-b", piece: "Mozart · Variaciones K. 265", title: "Tema, segunda mitad", bars: "9–16",
    clef: "sol", key: 0, meter: [2, 4], bpm: 72, level: 1,
    notes: [
      [79, 1], [79, 1], [77, 1], [77, 1], [76, 1], [76, 1], [74, 1], [74, 1],
      [79, 1], [79, 1], [77, 1], [77, 1], [76, 1], [76, 0.75], [77, 0.25], [76, 1], [74, 1],
    ],
  },
  {
    id: "moz-tema-bajo", piece: "Mozart · Variaciones K. 265", title: "Tema, mano izquierda", bars: "1–8",
    clef: "fa", key: 0, meter: [2, 4], bpm: 66, level: 1,
    notes: [
      [48, 1], [60, 1], [64, 1], [60, 1], [65, 1], [60, 1], [64, 1], [60, 1],
      [62, 1], [59, 1], [60, 1], [57, 1], [53, 1], [55, 1], [48, 2],
    ],
  },
  {
    id: "moz-var5", piece: "Mozart · Variaciones K. 265", title: "Variación V, mano derecha", bars: "1–8",
    clef: "sol", key: 0, meter: [2, 4], bpm: 60, level: 2, note: "Voz superior en los compases 4 a 7.",
    notes: [
      [72, 1], [null, 0.5], [72, 0.5], [79, 1], [null, 0.5], [79, 0.5],
      [81, 1], [null, 0.5], [81, 0.5], [79, 1], [null, 0.5], [79, 0.5],
      [null, 0.5], [77, 0.5], [null, 0.5], [77, 0.5], [null, 0.5], [76, 0.5], [null, 0.5], [76, 0.5],
      [null, 0.5], [74, 0.5], [null, 0.5], [74, 0.5], [72, 1], [null, 1],
    ],
  },
  {
    id: "moz-var8-bajo", piece: "Mozart · Variaciones K. 265", title: "Variación VIII (menor), mano izquierda", bars: "5–8",
    clef: "fa", key: -3, meter: [2, 4], bpm: 56, level: 2, note: "La partitura repite el bemol del La en el compás 6 como recordatorio.",
    notes: [
      [55, 0.5], [57, 0.5], [59, 0.5], [55, 0.5], [60, 0.5], [55, 0.5], [56, 0.5], [51, 0.5],
      [53, 0.5], [50, 0.5], [55, 0.5], [43, 0.5], [48, 1], [36, 1],
    ],
  },
  {
    id: "deb-inicio", piece: "Debussy · Clair de lune", title: "Comienzo", bars: "1–2",
    clef: "sol", key: -5, meter: [9, 8], bpm: 36, level: 2, note: "Voz superior de los acordes.",
    notes: [
      [null, 0.5], [80, 1, 1], [80, 1.5], [77, 1.5, 1],
      [77, 0.5], [75, 0.5], [77, 0.5], [75, 3],
    ],
  },
  {
    id: "deb-5-8", piece: "Debussy · Clair de lune", title: "Primera frase", bars: "5–8",
    clef: "sol", key: -5, meter: [9, 8], bpm: 36, level: 3, note: "Voz superior. El primer Do viene ligado del compás 4.",
    notes: [
      [72, 0.5], [70, 0.5], [72, 0.5], [70, 0.5], [75, 0.5], [70, 0.5], [68, 0.5], [70, 0.5], [68, 0.5, 1],
      [68, 0.5], [66, 0.5], [68, 0.5], [66, 1.5], [65, 1.5, 1],
      [65, 0.5], [65, 0.5], [66, 0.5], [65, 0.5], [70, 0.5], [65, 0.5], [63, 0.5], [65, 0.5], [63, 0.5, 1],
      [63, 0.5], [61, 0.5], [63, 0.5], [61, 1.5], [60, 1.5],
    ],
  },
  {
    id: "deb-29-30", piece: "Debussy · Clair de lune", title: "Un poco mosso, arpegios", bars: "29–30",
    clef: "fa", key: -5, meter: [9, 8], bpm: 24, level: 3, note: "Mano izquierda. Ojo con el Sol natural del compás 30.",
    notes: [
      [37, 0.25], [44, 0.25], [49, 0.25], [53, 0.25], [56, 0.25], [61, 0.25],
      [65, 0.25], [68, 0.25], [65, 0.25], [61, 0.25], [56, 0.25], [53, 0.25],
      [56, 0.25], [53, 0.25], [49, 0.25], [44, 0.25], [49, 0.25], [44, 0.25],
      [39, 0.25], [46, 0.25], [51, 0.25], [55, 0.25], [58, 0.25], [63, 0.25],
      [67, 0.25], [63, 0.25], [58, 0.25], [55, 0.25], [51, 0.25], [46, 0.25],
      [39, 0.25], [46, 0.25], [51, 0.25], [55, 0.25], [51, 0.25], [46, 0.25],
    ],
  },
];

if (typeof module !== "undefined") module.exports = { SIGHT };
