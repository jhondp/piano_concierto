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

  // Bach, aria "Schäme dich, o Seele, nicht" (BWV 147), arr. J. Knuth: full score and separate parts
  // (solo instrument, Diskant = right hand of the accompaniment, Bass). Printed bar numbers.
  {
    id: "bach147-solo-1", piece: "Bach · BWV 147, aria", title: "Entrada del solista", bars: "17–20",
    clef: "sol", key: 0, meter: [3, 4], bpm: 63, level: 1, note: "Instrumento solista. La menor: el Sol lleva sostenido.",
    notes: [
      [null, 1], [64, 1], [65, 0.5], [64, 0.5], [64, 2], [72, 1, 1],
      [72, 1], [71, 0.5], [72, 0.5], [74, 0.5], [71, 0.5], [68, 2], [null, 1],
    ],
  },
  {
    id: "bach147-solo-2", piece: "Bach · BWV 147, aria", title: "Solista, segunda frase", bars: "28–35",
    clef: "sol", key: 0, meter: [3, 4], bpm: 63, level: 1, note: "Instrumento solista.",
    notes: [
      [null, 1], [72, 1], [71, 1], [69, 1], [74, 1], [71, 1],
      [72, 1], [65, 1.5], [67, 0.5], [64, 2], [62, 1],
      [null, 1], [67, 1], [72, 1], [69, 1], [74, 1], [71, 1],
      [72, 1], [65, 1.5], [67, 0.5], [64, 1.5], [62, 0.5], [62, 1],
    ],
  },
  {
    id: "bach147-solo-3", piece: "Bach · BWV 147, aria", title: "Solista, escalas en semicorcheas", bars: "36–40",
    clef: "sol", key: 0, meter: [3, 4], bpm: 54, level: 2, note: "Instrumento solista.",
    notes: [
      [null, 1], [64, 0.25], [62, 0.25], [60, 0.25], [62, 0.25], [64, 0.25], [65, 0.25], [67, 0.25], [69, 0.25],
      [65, 1, 1], [65, 0.25], [64, 0.25], [62, 0.25], [64, 0.25], [65, 0.25], [67, 0.25], [69, 0.25], [71, 0.25],
      [72, 3, 1],
      [72, 0.5], [71, 0.5], [67, 0.5], [76, 0.5], [74, 0.5], [72, 0.5],
      [72, 1], [null, 1], [null, 1],
    ],
  },
  {
    id: "bach147-solo-4", piece: "Bach · BWV 147, aria", title: "Solista, frase en La menor", bars: "72–75",
    clef: "sol", key: 0, meter: [3, 4], bpm: 63, level: 1, note: "Instrumento solista.",
    notes: [
      [null, 1], [69, 1], [74, 0.5], [71, 0.5], [68, 2], [69, 1],
      [71, 1], [64, 1], [72, 0.5], [71, 0.5], [71, 2], [null, 1],
    ],
  },
  {
    id: "bach147-solo-5", piece: "Bach · BWV 147, aria", title: "Solista, con silencio de corchea", bars: "81–85",
    clef: "sol", key: 0, meter: [3, 4], bpm: 56, level: 2, note: "Instrumento solista.",
    notes: [
      [65, 1], [64, 0.5], [65, 0.5], [62, 1], [null, 1], [71, 1], [72, 1],
      [74, 1], [72, 0.5], [71, 0.5], [76, 1],
      [null, 0.5], [69, 0.5], [69, 0.5], [71, 0.25], [72, 0.25], [71, 0.5], [69, 0.5],
      [69, 2], [null, 1],
    ],
  },
  {
    id: "bach147-solo-6", piece: "Bach · BWV 147, aria", title: "Solista, notas ligadas", bars: "86–89",
    clef: "sol", key: 0, meter: [3, 4], bpm: 56, level: 2, note: "Instrumento solista.",
    notes: [
      [null, 1], [72, 2, 1],
      [72, 1], [71, 0.5], [72, 0.25], [74, 0.25], [71, 1, 1],
      [71, 0.5], [74, 0.5], [72, 0.5], [71, 0.5], [69, 0.5], [67, 0.5],
      [65, 0.5], [62, 0.5], [74, 0.5], [72, 0.5], [71, 0.5], [69, 0.5],
    ],
  },
  {
    id: "bach147-solo-7", piece: "Bach · BWV 147, aria", title: "Solista, cadencia final", bars: "89–92",
    clef: "sol", key: 0, meter: [3, 4], bpm: 50, level: 3, note: "Instrumento solista. El sostenido del Sol vale para todo el compás 90.",
    notes: [
      [65, 0.5], [62, 0.5], [74, 0.5], [72, 0.5], [71, 0.5], [69, 0.5],
      [68, 0.25], [64, 0.25], [66, 0.25], [68, 0.25], [69, 0.25], [71, 0.25], [72, 0.25], [74, 0.25], [76, 0.5], [68, 0.5],
      [69, 0.5], [74, 0.5], [72, 1], [71, 0.75], [69, 0.25],
      [69, 1], [null, 1], [null, 1],
    ],
  },
  {
    id: "bach147-dis-1", piece: "Bach · BWV 147, aria", title: "Introducción, mano derecha", bars: "1–5",
    clef: "sol", key: 0, meter: [3, 4], bpm: 56, level: 2, note: "Parte de Diskant (mano derecha del acompañamiento). El último Sol va ligado al compás 6, que no se incluye.",
    notes: [
      [null, 1], [64, 1], [69, 1], [68, 2], [72, 1, 1],
      [72, 1], [71, 0.5], [72, 0.5], [74, 0.5], [71, 0.5],
      [68, 1], [76, 0.5], [69, 0.5], [77, 0.5], [74, 0.5],
      [73, 1], [76, 1], [67, 1],
    ],
  },
  {
    id: "bach147-dis-2", piece: "Bach · BWV 147, aria", title: "Acompañamiento en corcheas", bars: "8–13",
    clef: "sol", key: 0, meter: [3, 4], bpm: 63, level: 1, note: "Parte de Diskant (mano derecha del acompañamiento).",
    notes: [
      [71, 1], [74, 1], [65, 1, 1],
      [65, 0.5], [69, 0.5], [67, 0.5], [65, 0.5], [64, 0.5], [62, 0.5],
      [64, 0.5], [60, 0.5], [67, 0.5], [64, 0.5], [72, 0.5], [64, 0.5],
      [65, 0.5], [62, 0.5], [69, 0.5], [65, 0.5], [72, 0.5], [65, 0.5],
      [67, 0.5], [64, 0.5], [71, 0.5], [67, 0.5], [72, 0.5], [67, 0.5],
      [69, 0.5], [77, 0.5], [76, 0.5], [72, 0.5], [67, 0.5], [71, 0.5],
    ],
  },
  {
    id: "bach147-dis-3", piece: "Bach · BWV 147, aria", title: "Escala con sostenidos", bars: "15–20",
    clef: "sol", key: 0, meter: [3, 4], bpm: 54, level: 2, note: "Parte de Diskant. En el compás 16 el sostenido del Sol vale hasta el final del compás.",
    notes: [
      [65, 0.5], [69, 0.5], [74, 0.5], [71, 0.5], [72, 0.5], [69, 0.5],
      [68, 0.25], [64, 0.25], [66, 0.25], [68, 0.25], [69, 0.25], [71, 0.25], [72, 0.25], [74, 0.25], [76, 0.5], [68, 0.5],
      [69, 3],
      [64, 1], [68, 1], [72, 1, 1],
      [72, 1], [71, 1], [69, 1],
      [71, 1], [76, 1], [67, 1],
    ],
  },
  {
    id: "bach147-dis-4", piece: "Bach · BWV 147, aria", title: "Semicorcheas hasta la blanca con puntillo", bars: "24–28",
    clef: "sol", key: 0, meter: [3, 4], bpm: 50, level: 3, note: "Parte de Diskant.",
    notes: [
      [69, 1], [72, 1], [71, 0.5], [72, 0.25], [74, 0.25],
      [68, 1], [76, 2, 1],
      [76, 1], [74, 0.5], [76, 0.5], [77, 0.5], [74, 0.5],
      [71, 0.25], [64, 0.25], [66, 0.25], [68, 0.25], [69, 0.25], [71, 0.25], [72, 0.25], [74, 0.25], [76, 0.5], [71, 0.5],
      [72, 3],
    ],
  },
  {
    id: "bach147-dis-5", piece: "Bach · BWV 147, aria", title: "Arpegios en corcheas", bars: "29–32",
    clef: "sol", key: 0, meter: [3, 4], bpm: 56, level: 2, note: "Parte de Diskant. Saltos amplios y Do central con línea adicional.",
    notes: [
      [null, 1], [69, 0.5], [65, 0.5], [62, 0.5], [67, 0.5],
      [60, 0.5], [67, 0.5], [69, 0.5], [65, 0.5], [62, 0.5], [74, 0.5],
      [67, 0.5], [64, 0.5], [60, 0.5], [72, 0.5], [71, 0.5], [69, 0.5],
      [67, 0.5], [64, 0.5], [60, 0.5], [64, 0.5], [67, 0.5], [72, 0.5],
    ],
  },
  {
    id: "bach147-dis-6", piece: "Bach · BWV 147, aria", title: "Antes del solista", bars: "39–43",
    clef: "sol", key: 0, meter: [3, 4], bpm: 63, level: 1, note: "Parte de Diskant.",
    notes: [
      [69, 0.5], [77, 0.5], [76, 0.5], [72, 0.5], [67, 0.5], [71, 0.5],
      [72, 1], [67, 1], [72, 1],
      [71, 2], [76, 1, 1],
      [76, 1], [74, 0.5], [76, 0.5], [77, 0.5], [74, 0.5],
      [71, 0.5], [69, 0.5], [67, 0.5], [72, 0.5], [69, 0.5], [65, 0.5],
    ],
  },
  {
    id: "bach147-dis-7", piece: "Bach · BWV 147, aria", title: "Escala que baja al Si grave", bars: "46–51",
    clef: "sol", key: 0, meter: [3, 4], bpm: 50, level: 3, note: "Parte de Diskant.",
    notes: [
      [69, 0.5], [62, 0.5], [64, 0.5], [65, 0.5], [67, 0.5], [69, 0.5],
      [71, 0.5], [72, 0.5], [74, 0.5], [71, 0.5], [65, 1, 1],
      [65, 0.5], [69, 0.5], [67, 0.5], [65, 0.5], [64, 0.5], [62, 0.5],
      [64, 0.5], [60, 0.5], [67, 0.5], [64, 0.5], [72, 0.5], [64, 0.5],
      [62, 0.25], [59, 0.25], [60, 0.25], [62, 0.25], [64, 0.25], [65, 0.25], [67, 0.25], [69, 0.25], [71, 0.25], [72, 0.25], [74, 0.25], [65, 0.25],
      [64, 0.25], [67, 0.25], [72, 0.5, 1], [72, 1], [null, 1],
    ],
  },
  {
    id: "bach147-dis-8", piece: "Bach · BWV 147, aria", title: "Do sostenido que dura todo el compás", bars: "53–57",
    clef: "sol", key: 0, meter: [3, 4], bpm: 56, level: 2, note: "Parte de Diskant. En el compás 57 el sostenido del Do vale también para el segundo Do.",
    notes: [
      [64, 2], [null, 1],
      [null, 1], [69, 1], [74, 1],
      [73, 2], [77, 1, 1],
      [77, 1], [76, 0.5], [77, 0.5], [79, 0.5], [76, 0.5],
      [73, 0.5], [74, 0.5], [76, 0.5], [73, 0.5], [69, 0.5], [74, 0.5],
    ],
  },
  {
    id: "bach147-dis-9", piece: "Bach · BWV 147, aria", title: "Registro grave con líneas adicionales", bars: "65–71",
    clef: "sol", key: 0, meter: [3, 4], bpm: 50, level: 3, note: "Parte de Diskant.",
    notes: [
      [74, 1], [57, 1], [59, 0.5], [61, 0.25], [62, 0.25],
      [61, 2], [65, 1, 1],
      [65, 1], [64, 0.5], [65, 0.5], [67, 0.5], [64, 0.5],
      [61, 2], [null, 1],
      [null, 1], [69, 0.5], [65, 0.5], [62, 0.5], [65, 0.5],
      [67, 0.5], [64, 0.5], [60, 1], [null, 1],
      [null, 1], [67, 1], [72, 1],
    ],
  },
  {
    id: "bach147-dis-10", piece: "Bach · BWV 147, aria", title: "Saltos entre La grave y Do agudo", bars: "82–88",
    clef: "sol", key: 0, meter: [3, 4], bpm: 50, level: 3, note: "Parte de Diskant. El sostenido del Sol vale para todo su compás.",
    notes: [
      [68, 0.5], [76, 0.5], [71, 0.5], [68, 0.5], [64, 0.5], [69, 0.5],
      [68, 0.5], [65, 0.5], [64, 0.5], [62, 0.5], [60, 0.5], [59, 0.5],
      [57, 0.5], [64, 0.5], [72, 0.5], [71, 0.5], [69, 0.5], [68, 0.5],
      [69, 0.5], [65, 0.5], [62, 0.5], [68, 0.5], [71, 0.5], [62, 0.5],
      [60, 0.5], [57, 0.5], [64, 0.5], [60, 0.5], [69, 0.5], [60, 0.5],
      [62, 0.5], [59, 0.5], [65, 0.5], [62, 0.5], [69, 0.5], [62, 0.5],
      [64, 0.5], [60, 0.5], [68, 0.5], [64, 0.5], [69, 1],
    ],
  },
  {
    id: "bach147-dis-11", piece: "Bach · BWV 147, aria", title: "Escala descendente y semicorcheas", bars: "89–92",
    clef: "sol", key: 0, meter: [3, 4], bpm: 50, level: 3, note: "Parte de Diskant. El sostenido del Sol vale para todo el compás 91.",
    notes: [
      [69, 0.5], [67, 0.5], [65, 0.5], [64, 0.5], [62, 0.5], [60, 0.5],
      [59, 1], [64, 2, 1],
      [64, 0.25], [64, 0.25], [66, 0.25], [68, 0.25], [69, 0.25], [71, 0.25], [72, 0.25], [74, 0.25], [76, 0.5], [68, 0.5],
      [69, 1], [64, 1], [69, 1],
    ],
  },
  {
    id: "bach147-bajo-1", piece: "Bach · BWV 147, aria", title: "Bajo de la introducción", bars: "6–9",
    clef: "fa", key: 0, meter: [3, 4], bpm: 60, level: 2, note: "Mano izquierda del acompañamiento.",
    notes: [
      [49, 2], [45, 1],
      [50, 1], [47, 1], [48, 1],
      [50, 1], [53, 0.5], [50, 0.5], [57, 0.5], [53, 0.5],
      [47, 2], [43, 1],
    ],
  },
  {
    id: "bach147-bajo-2", piece: "Bach · BWV 147, aria", title: "Bajo en negras", bars: "28–35",
    clef: "fa", key: 0, meter: [3, 4], bpm: 63, level: 1, note: "Mano izquierda del acompañamiento.",
    notes: [
      [57, 2], [55, 1], [53, 3],
      [52, 1], [50, 1], [47, 1], [48, 1], [55, 1], [53, 1],
      [52, 3], [53, 3],
      [52, 1], [50, 1], [47, 1], [48, 1], [55, 1], [43, 1],
    ],
  },
  {
    id: "bach147-bajo-3", piece: "Bach · BWV 147, aria", title: "Bajo con sostenidos", bars: "21–26",
    clef: "fa", key: 0, meter: [3, 4], bpm: 56, level: 2, note: "Parte de Bass.",
    notes: [
      [49, 2], [45, 1],
      [50, 2], [51, 1],
      [52, 0.5], [50, 0.5], [48, 0.5], [45, 0.5], [52, 0.5], [40, 0.5],
      [45, 2], [50, 1, 1],
      [50, 1], [48, 1], [45, 1],
      [53, 1], [50, 1], [47, 1],
    ],
  },
  {
    id: "bach147-bajo-4", piece: "Bach · BWV 147, aria", title: "Bajo en negras y corcheas", bars: "45–51",
    clef: "fa", key: 0, meter: [3, 4], bpm: 63, level: 1, note: "Parte de Bass.",
    notes: [
      [52, 2], [48, 1],
      [53, 1], [52, 1], [48, 1],
      [50, 1], [53, 0.5], [50, 0.5], [57, 0.5], [53, 0.5],
      [47, 2], [43, 1],
      [48, 1], [52, 1], [53, 1],
      [55, 0.5], [53, 0.5], [52, 0.5], [48, 0.5], [55, 0.5], [43, 0.5],
      [48, 1], [52, 1], [55, 1],
    ],
  },
  {
    id: "bach147-bajo-5", piece: "Bach · BWV 147, aria", title: "Bajo que sube al Do agudo", bars: "51–55",
    clef: "fa", key: 0, meter: [3, 4], bpm: 56, level: 2, note: "Parte de Bass. Ojo con el La sostenido del compás 54.",
    notes: [
      [48, 1], [52, 1], [55, 1],
      [60, 2], [null, 1],
      [49, 2], [null, 1],
      [50, 1], [48, 1], [46, 1],
      [45, 3],
    ],
  },
  {
    id: "bach147-bajo-6", piece: "Bach · BWV 147, aria", title: "Bajo con semicorcheas", bars: "81–86",
    clef: "fa", key: 0, meter: [3, 4], bpm: 50, level: 3, note: "Parte de Bass.",
    notes: [
      [50, 1], [48, 1], [47, 1],
      [52, 1], [56, 1], [57, 1],
      [47, 1], [52, 1.5], [50, 0.5],
      [48, 0.5], [47, 0.25], [45, 0.25], [52, 1], [40, 1],
      [53, 1], [41, 1], [44, 1],
      [45, 1], [null, 1], [null, 1],
    ],
  },
  {
    id: "bach147-bajo-7", piece: "Bach · BWV 147, aria", title: "Bajo, escala hasta el Re agudo", bars: "89–92",
    clef: "fa", key: 0, meter: [3, 4], bpm: 50, level: 3, note: "Parte de Bass.",
    notes: [
      [50, 1, 1], [50, 0.25], [50, 0.25], [52, 0.25], [53, 0.25], [55, 0.25], [57, 0.25], [59, 0.25], [60, 0.25],
      [62, 2], [50, 1],
      [48, 0.5], [47, 0.25], [45, 0.25], [52, 1], [40, 1],
      [45, 2], [null, 1],
    ],
  },

  // Chopin, Andantino "Wiosna" (piano version of the song Op. 74 n.º 2), one-page engraving. Printed bars.
  {
    id: "chopin-wiosna-1", piece: "Chopin · Andantino «Wiosna»", title: "Comienzo", bars: "1–4",
    clef: "sol", key: -2, meter: [6, 8], bpm: 40, level: 2, note: "Melodía de la mano derecha.",
    notes: [
      [67, 1], [74, 0.5], [72, 1], [74, 0.5], [70, 1.5], [69, 1.5],
      [67, 0.75], [69, 0.25], [70, 0.5], [72, 0.75], [74, 0.25], [72, 0.5], [70, 1.5], [69, 1.5],
    ],
  },
  {
    id: "chopin-wiosna-2", piece: "Chopin · Andantino «Wiosna»", title: "Segunda frase, con Mi natural", bars: "9–12",
    clef: "sol", key: -2, meter: [6, 8], bpm: 40, level: 2, note: "Melodía de la mano derecha.",
    notes: [
      [70, 1], [77, 0.5], [76, 1], [77, 0.5], [74, 1.5], [72, 1.5],
      [70, 0.75], [72, 0.25], [74, 0.5], [75, 0.75], [77, 0.25], [75, 0.5], [74, 1.5], [72, 1.5],
    ],
  },
  {
    id: "chopin-wiosna-3", piece: "Chopin · Andantino «Wiosna»", title: "Notas repetidas y ligadura", bars: "16–20",
    clef: "sol", key: -2, meter: [6, 8], bpm: 40, level: 2, note: "Melodía de la mano derecha.",
    notes: [
      [74, 1], [74, 1.5], [74, 0.5, 1],
      [74, 1], [74, 0.5], [72, 1], [74, 0.5],
      [70, 1.5], [69, 1.5],
      [67, 0.75], [69, 0.25], [70, 0.5], [72, 0.75], [74, 0.25], [72, 0.5],
      [70, 1.5], [69, 1.5],
    ],
  },

  // Chopin, Nocturne Op. 9 n.º 2 (4-page engraving). Printed bars; bar 1 starts after the upbeat.
  {
    id: "chopin-noct92-1", piece: "Chopin · Nocturno Op. 9 n.º 2", title: "El tema", bars: "1–2",
    clef: "sol", key: -3, meter: [12, 8], bpm: 40, level: 2, note: "Melodía sin la anacrusa. Se omite el grupeto del compás 2; el becuadro de ese Do es de cortesía.",
    notes: [
      [79, 1.5, 1], [79, 0.5], [77, 0.5], [79, 0.5], [77, 1.5], [75, 1], [70, 0.5],
      [79, 1], [72, 0.5], [84, 1], [79, 0.5], [82, 1.5], [80, 1], [79, 0.5],
    ],
  },
  {
    id: "chopin-noct92-2", piece: "Chopin · Nocturno Op. 9 n.º 2", title: "Continuación del tema", bars: "3–4",
    clef: "sol", key: -3, meter: [12, 8], bpm: 32, level: 3, note: "Melodía. Saltos al registro agudo y semicorcheas.",
    notes: [
      [77, 1.5], [79, 1], [74, 0.5], [75, 1.5], [72, 1.5],
      [70, 0.5], [86, 0.5], [84, 0.5], [82, 0.25], [80, 0.25], [79, 0.25], [80, 0.25], [72, 0.25], [74, 0.25], [75, 1.5], [null, 1], [70, 0.5],
    ],
  },
];

if (typeof module !== "undefined") module.exports = { SIGHT };
