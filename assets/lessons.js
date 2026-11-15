// ---------- Helpers ----------
// MIDI numbers: C4 (Do central) = 60.
// P: chord sequence button (each step `gap` seconds apart); lights the keyboard with `show`.
const P = (label, seq, sub = "", opts = {}) =>
  `<button type="button" class="tag" data-play='${JSON.stringify(seq)}' data-gap="${opts.gap ?? 1.1}" data-arp="${opts.arp ?? 0}" data-show='${JSON.stringify(opts.show ?? seq.flat())}'>${label}${sub ? `<small>${sub}</small>` : ""}</button>`;
// R: rhythm button. voices = [[[midi, beats, soundFraction?, volume?], ...], ...]; midi 0 is a rest.
// beats = number of metronome clicks, bar = clicks per bar (first one strong).
const R = (label, voices, sub = "", opts = {}) =>
  `<button type="button" class="tag" data-rh='${JSON.stringify(voices)}' data-bpm="${opts.bpm ?? 90}" data-beats="${opts.beats ?? 0}" data-bar="${opts.bar ?? 4}">${label}${sub ? `<small>${sub}</small>` : ""}</button>`;
const rep = (m, d, n) => Array.from({ length: n }, () => [m, d]);
const tags = (...b) => `<div class="tags">${b.join("")}</div>`;
const K = notes => `<div data-kbd>${kbd(notes)}</div>`;
const T = (head, rows) => `<div class="scroll"><table class="t"><tr>${head.map(h => `<th>${h}</th>`).join("")}</tr>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</table></div>`;
const score = (html, label = "En el programa") => `<div class="score"><span class="eyebrow">${label}</span><p>${html}</p></div>`;
const pz = (id, name) => `<a href="pieza.html?id=${id}">${name}</a>`;
const scale = (notes, label, sub) => P(label, notes.map(m => [m]), sub, { gap: 0.32, show: notes });

// Diatonic triads of C major, C4..A5
const CM = [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81];
const triad = i => [CM[i], CM[i + 2], CM[i + 4]];
const DEG = [["I", "Do", "mayor"], ["ii", "Re m", "menor"], ["iii", "Mi m", "menor"], ["IV", "Fa", "mayor"],
  ["V", "Sol", "mayor"], ["vi", "La m", "menor"], ["vii°", "Si°", "disminuido"]];

function circleSvg() {
  const maj = ["Do", "Sol", "Re", "La", "Mi", "Si", "Fa♯/Sol♭", "Re♭", "La♭", "Mi♭", "Si♭", "Fa"];
  const min = ["la", "mi", "si", "fa♯", "do♯", "sol♯", "re♯/mi♭", "si♭", "fa", "do", "sol", "re"];
  const acc = ["0", "1♯", "2♯", "3♯", "4♯", "5♯", "6♯/6♭", "5♭", "4♭", "3♭", "2♭", "1♭"];
  const f = 'font-family="Poppins,sans-serif"';
  let out = `<circle cx="150" cy="150" r="104" fill="none" stroke="var(--line)" stroke-width="1.5"/><circle cx="150" cy="150" r="62" fill="none" stroke="var(--line)"/>`;
  maj.forEach((k, i) => {
    const a = (i / 12) * 2 * Math.PI - Math.PI / 2, c = Math.cos(a), s = Math.sin(a);
    const x = 150 + 104 * c, y = 150 + 104 * s, xi = 150 + 62 * c, yi = 150 + 62 * s;
    out += `<circle cx="${x}" cy="${y}" r="22" fill="var(--surface)" stroke="var(--line)"/>`;
    out += `<text x="${x}" y="${y - 1}" text-anchor="middle" font-size="${k.length > 4 ? 7.5 : 11}" font-weight="600" ${f} fill="var(--fg)">${k}</text>`;
    out += `<text x="${x}" y="${y + 11}" text-anchor="middle" font-size="8" ${f} fill="var(--muted)">${acc[i]}</text>`;
    out += `<circle cx="${xi}" cy="${yi}" r="14" fill="var(--accent-soft)"/>`;
    out += `<text x="${xi}" y="${yi + 3}" text-anchor="middle" font-size="${min[i].length > 4 ? 6 : 9}" font-weight="500" ${f} fill="var(--tint)">${min[i]}</text>`;
  });
  return `<svg class="circle" viewBox="0 0 300 300" role="img" aria-label="Círculo de quintas: tonalidades mayores por fuera, sus relativas menores por dentro">${out}</svg>`;
}

// ---------- Lessons ----------
const LEVELS = ["Fundamentos", "Armonía", "Intermedio"];
const LESSONS = [
  // ===== Nivel 1 · Fundamentos =====
  { lv: 1, t: "Pentagrama, claves y registro",
    html: () => `
      <p>La música se escribe en un <b>pentagrama</b>: cinco líneas y cuatro espacios que se cuentan de abajo hacia arriba. Cuanto más arriba está una nota, más aguda suena. Para notas que no caben se usan <b>líneas adicionales</b>.</p>
      <p>La <b>clave</b> dice qué nota corresponde a cada línea. En piano se usan dos: la <b>clave de sol</b> (mano derecha), que se dibuja en la 2.ª línea y la convierte en Sol, y la <b>clave de fa</b> (mano izquierda), que se dibuja en la 4.ª línea y la convierte en Fa. Las dos se unen con una llave: el <b>sistema</b> de piano.</p>
      ${T(["Clave", "Líneas (de abajo arriba)", "Espacios"], [
        ["Sol", "Mi · Sol · Si · Re · Fa", "Fa · La · Do · Mi"],
        ["Fa", "Sol · Si · Re · Fa · La", "La · Do · Mi · Sol"]])}
      <p>El <b>Do central</b> (Do4, la tecla Do más cercana al centro del piano) se escribe con una línea adicional debajo del pentagrama de sol o encima del de fa. Es la misma tecla en los dos pentagramas. Las notas se numeran por octavas: el piano va de La0 a Do8, y el La4 es el La de afinación (440 Hz).</p>
      ${tags(P("Do central", [[60]], "Do4"), scale([64, 67, 71, 74, 77], "Líneas de la clave de sol", "Mi · Sol · Si · Re · Fa"), scale([65, 69, 72, 76], "Espacios de la clave de sol", "Fa · La · Do · Mi"), P("Fa de la clave de fa", [[53]], "Fa3, una quinta debajo del Do central", { show: [] }))}
      ${K([60])}
      <p><b>Alteraciones.</b> El <b>sostenido</b> (♯) sube un semitono, el <b>bemol</b> (♭) lo baja y el <b>becuadro</b> (♮) anula la alteración. Existen también el doble sostenido (𝄪) y el doble bemol (𝄫). Una alteración accidental vale hasta el final del compás. Dos nombres para la misma tecla, como Fa♯ y Sol♭, se llaman <b>enarmónicos</b>.</p>
      ${tags(P("Fa♯ = Sol♭", [[66]], "una tecla, dos nombres"), P("Mi♯ = Fa", [[65]], "tecla blanca"))}
      <p><b>Signos de octava.</b> <i>8va</i> encima de las notas: tócalas una octava más aguda; <i>8vb</i> debajo: una octava más grave; <i>15ma</i>: dos octavas más agudas.</p>
      ${score(`En ${pz("10", "Lie and Truth")} (seis sostenidos) aparece <b>Mi♯</b>: en el teclado es la tecla blanca Fa, pero se escribe así para que cada nota de la escala tenga un nombre distinto. ${pz("15", "Small Village")} usa 8va (33–36), 15ma (77–80) y 8vb (1–2) para abarcar casi todo el teclado, y ${pz("09", "My Lie")} pone 8va en la derecha en los compases 1–4.`)}`,
    quiz: { q: "En clave de fa, ¿qué nota está en la cuarta línea?", o: ["Fa", "Sol", "Re"], a: 0,
      why: "La clave de fa se dibuja en la cuarta línea y le da su nombre: es el Fa3, una quinta debajo del Do central." } },

  { lv: 1, t: "Figuras, puntillo y ligadura",
    html: () => `
      <p>Las <b>figuras</b> indican cuánto dura una nota. Cada una vale la mitad que la anterior. Cada figura tiene su <b>silencio</b> equivalente, que dura lo mismo sin sonar.</p>
      ${T(["Figura", "Duración en negras", "En 4/4 caben"], [
        ["Redonda", "4", "1"], ["Blanca", "2", "2"], ["Negra", "1", "4"], ["Corchea", "½", "8"],
        ["Semicorchea", "¼", "16"], ["Fusa", "⅛", "32"], ["Semifusa", "1/16", "64"]])}
      ${tags(R("De redonda a corcheas", [[[60, 4], [62, 2], [62, 2], ...rep(64, 1, 4), ...rep(65, 0.5, 8)]], "cada figura es la mitad", { bpm: 100, beats: 16, bar: 4 }))}
      <p>El <b>puntillo</b> suma a la figura la mitad de su valor: una negra con puntillo dura 1 + ½ = 1½ negras; una blanca con puntillo, 3 negras. El doble puntillo suma además la mitad del primer puntillo (negra con doble puntillo = 1¾).</p>
      ${tags(R("Negra con puntillo + corchea", [[[67, 1.5], [67, 0.5], [69, 2], [67, 1.5], [65, 0.5], [64, 2]]], "largo, corto", { bpm: 90, beats: 8 }),
        R("Corchea con puntillo + semicorchea", [[[64, 0.75], [64, 0.25], [64, 0.75], [64, 0.25], [67, 2]]], "el ritmo con puntillo", { bpm: 80, beats: 4 }))}
      <p>Hay dos ligaduras que se dibujan igual pero hacen cosas distintas. La <b>ligadura de prolongación</b> une dos notas <i>de la misma altura</i>: se toca la primera y se sostiene el valor de las dos. La <b>ligadura de expresión</b> abarca notas <i>diferentes</i> e indica tocarlas ligadas (legato), sin cortar el sonido.</p>
      ${tags(R("Sin ligadura", [[[64, 1], [65, 1], [65, 1], [65, 1]]], "Fa se repite", { bpm: 80, beats: 4 }), R("Con ligadura de prolongación", [[[64, 1], [65, 3]]], "Fa suena una vez y dura 3", { bpm: 80, beats: 4 }))}
      <p>El <b>calderón</b> (𝄐) suspende el pulso: la nota o el silencio dura lo que tú decidas.</p>
      ${score(`${pz("08", "Lit")}: corchea con puntillo y semicorchea en el tercer tiempo de la derecha (compases 1–3 y sección 18–33), y acordes de blanca con puntillo que llenan cada compás de 3/4 (9–16). ${pz("15", "Small Village")} usa calderones para cerrar ideas, por ejemplo en los compases 8, 32 y 95.`)}`,
    quiz: { q: "¿Cuánto dura una blanca con puntillo?", o: ["Tres negras", "Dos negras y media", "Cuatro negras"], a: 0,
      why: "La blanca vale 2 negras y el puntillo suma la mitad, 1: en total 3. Por eso llena un compás de 3/4, como en los compases 9–16 de Lit." } },

  { lv: 1, t: "Compás simple y compuesto",
    html: () => `
      <p>El <b>pulso</b> es el latido regular de la música. El <b>compás</b> agrupa los pulsos en fuertes y débiles; la barra de compás los separa. En la cifra, el número de arriba cuenta y el de abajo indica la figura (4 = negra, 8 = corchea, 2 = blanca).</p>
      <p>En un <b>compás simple</b> (2/4, 3/4, 4/4, que también se escribe C) cada pulso se divide en <b>dos</b>. En un <b>compás compuesto</b> (6/8, 9/8, 12/8) cada pulso se divide en <b>tres</b> y el pulso es una negra con puntillo. Para saber cuántos pulsos tiene un compuesto, divide el número de arriba entre 3.</p>
      ${T(["Compás", "Tipo", "Pulsos", "Pulso", "En el programa"], [
        ["2/4", "simple", "2", "negra", pz("01", "Mozart, variaciones")], ["3/4", "simple", "3", "negra", pz("08", "Lit")],
        ["4/4", "simple", "4", "negra", pz("03", "Energy Flow")], ["6/8", "compuesto", "2", "negra con puntillo", pz("09", "My Lie")],
        ["9/8", "compuesto", "3", "negra con puntillo", pz("02", "Clair de Lune")], ["12/8", "compuesto", "4", "negra con puntillo", pz("05", "Merry Christmas Mr. Lawrence") + " (introducción)"]])}
      <p>3/4 y 6/8 tienen las mismas seis corcheas, pero se agrupan distinto: 3/4 es <b>2+2+2</b> (tres pulsos) y 6/8 es <b>3+3</b> (dos pulsos). Escucha la diferencia:</p>
      ${tags(R("3/4: 2+2+2", [rep(72, 0.5, 6).concat(rep(72, 0.5, 6))], "tres pulsos", { bpm: 100, beats: 6, bar: 3 }),
        R("6/8: 3+3", [rep(72, 1 / 3, 6).concat(rep(72, 1 / 3, 6))], "dos pulsos", { bpm: 200 / 3, beats: 4, bar: 2 }))}
      <p>Practica el 9/8 con el metrónomo: tres pulsos, cada uno con tres corcheas.</p>
      <div class="meter" id="meter"></div>
      <div class="metro">
        <button class="btn" id="play" type="button">▶ Metrónomo 9/8</button>
        <label for="bpm" class="mono">♩. = <span id="bpmv">40</span></label>
        <input type="range" id="bpm" min="30" max="66" value="40">
      </div>
      <p>Un <b>dosillo</b> son dos notas que ocupan el lugar de tres: dentro de un pulso compuesto, dos notas más largas en vez de tres. Lo contrario en compás simple es el <b>tresillo</b>: tres notas en el lugar de dos.</p>
      ${tags(`<button type="button" class="tag" data-rhythm="3">Un pulso en tres<small>lo normal en 9/8</small></button>`, `<button type="button" class="tag" data-rhythm="2">Un pulso en dosillo<small>se estira</small></button>`)}
      <p>La <b>anacrusa</b> es la nota o grupo de notas que suenan antes del primer compás completo: la frase empieza en el aire y cae en el primer tiempo fuerte.</p>
      ${score(`${pz("02", "Clair de Lune")} marca dosillos con un «2» en los compases 3, 13–14, 15–18 y 41. ${pz("05", "Merry Christmas Mr. Lawrence")} pasa de 12/8 a 4/4 en el compás 17 con la indicación «corchea = corchea». ${pz("07", "Theme of Love")} empieza con tres negras en anacrusa antes del compás 1.`)}`,
    after: setupMetro,
    quiz: { q: "¿Cuántos pulsos tiene un compás de 6/8?", o: ["2", "6", "3"], a: 0,
      why: "Seis corcheas en dos grupos de tres: dos pulsos de negra con puntillo. Por eso My Lie se siente como un balanceo lento y no como un vals." } },

  { lv: 1, t: "Expresión: tempo, dinámica y articulación",
    html: () => `
      <p>Las notas dicen <i>qué</i> tocar; las indicaciones de expresión dicen <i>cómo</i>. La mayoría están en italiano, pero Debussy escribe en francés y la música actual a menudo en inglés.</p>
      ${T(["Tempo", "Significado"], [
        ["Largo · Lento · Adagio", "Muy lento · lento · lento y tranquilo"], ["Andante", "Al paso, tranquilo"], ["Moderato", "Moderado"],
        ["Allegro · Presto", "Rápido · muy rápido"], ["♩ = 80", "80 negras por minuto (indicación de metrónomo)"],
        ["rit. · rall.", "Ritardando, rallentando: frenando poco a poco"], ["accel.", "Accelerando: acelerando poco a poco"],
        ["più mosso · meno mosso", "Más movido · menos movido"], ["a tempo · Tempo I", "Volver al tempo anterior · al tempo inicial"],
        ["rubato", "Tempo flexible: se estira y se recupera"]])}
      ${T(["Dinámica", "Significado"], [
        ["pp · p · mp", "Pianissimo · piano · mezzo piano"], ["mf · f · ff", "Mezzo forte · forte · fortissimo"],
        ["cresc. · dim. / decresc.", "Crescendo · diminuendo (también los reguladores &lt; y &gt;)"], ["sfz · fp", "Sforzando: acento súbito · forte y enseguida piano"],
        ["morendo · smorzando", "Muriendo, apagándose"]])}
      ${T(["Articulación", "Cómo se toca"], [
        ["Legato (ligadura de expresión)", "Unido, sin cortar entre notas"], ["Staccato (punto)", "Separado, corto"],
        ["Tenuto (raya)", "Sostenida todo su valor, con peso"], ["Acento (&gt;) · marcato (^)", "Destacada · muy destacada"],
        ["Portato (punto y raya)", "Entre legato y staccato"]])}
      ${tags(R("Legato", [[[60, 0.5], [62, 0.5], [64, 0.5], [65, 0.5], [67, 2]]], "unido", { bpm: 80 }),
        R("Staccato", [[[60, 0.5, 0.3], [62, 0.5, 0.3], [64, 0.5, 0.3], [65, 0.5, 0.3], [67, 2, 0.15]]], "separado", { bpm: 80 }),
        R("Crescendo", [[[67, 0.5, 1, 0.03], [67, 0.5, 1, 0.06], [67, 0.5, 1, 0.1], [67, 0.5, 1, 0.15], [67, 0.5, 1, 0.21], [67, 0.5, 1, 0.28], [72, 2, 1, 0.34]]], "de p a f", { bpm: 90 }),
        R("Diminuendo", [[[72, 0.5, 1, 0.3], [71, 0.5, 1, 0.22], [69, 0.5, 1, 0.15], [67, 0.5, 1, 0.1], [65, 0.5, 1, 0.06], [64, 2, 1, 0.03]]], "de f a p", { bpm: 90 }))}
      <p><b>Carácter.</b> <i>dolce</i> (dulce), <i>cantabile</i> (cantando), <i>espressivo</i>, <i>agitato</i> (agitado), <i>maestoso</i> (majestuoso), <i>con fuoco</i> (con fuego), <i>lamentoso</i> (como un lamento). En francés: <i>très expressif</i> (muy expresivo), <i>en animant</i> (animándose), <i>peu à peu</i> (poco a poco). <b>Pedales:</b> el derecho (de resonancia) deja sonar las cuerdas; el izquierdo (<i>una corda</i>) suaviza el timbre.</p>
      ${score(`${pz("05", "Merry Christmas Mr. Lawrence")} crece en terrazas: p (17), mp (25), mf (33), f (39 y 65), ff (89), fff (96). ${pz("16", "Battleground")} pide <i>con fuoco</i> (35), <i>With growing conviction</i> (98), <i>maestoso</i> (130) y <i>Slow, freely</i> (154). ${pz("08", "Lit")} cambia de carácter con el tempo: Gently ♩ = 70, With Passion ♩ = 96, Peacefully ♩ = 63.`)}`,
    quiz: { q: "¿Qué indica «più mosso»?", o: ["Más movido, un poco más rápido", "Más fuerte", "Más ligado"], a: 0,
      why: "Mosso es «movido»: più mosso acelera el tempo. Lo encuentras en Merry Christmas Mr. Lawrence (57–64) y en la sección B de Small Village." } },

  { lv: 1, t: "Intervalos: número y calidad",
    html: () => `
      <p>Un <b>intervalo</b> es la distancia entre dos notas. Tiene dos datos:</p>
      <p><b>1. Número.</b> Cuenta los nombres de nota incluyendo las dos puntas: de Do a Mi pasas por Do, Re, Mi, así que es una <b>tercera</b>. Las alteraciones no cambian el número: Do–Mi♭ y Do–Mi son terceras.</p>
      <p><b>2. Calidad.</b> Se calcula contando semitonos. Las 4.ª, 5.ª, unísono y 8.ª son <b>justas</b>; las 2.ª, 3.ª, 6.ª y 7.ª son <b>mayores</b> o <b>menores</b>. Si a un intervalo justo o mayor le sumas un semitono, es <b>aumentado</b>; si a uno justo o menor le restas un semitono, es <b>disminuido</b>.</p>
      ${T(["Intervalo", "Semitonos", "Desde Do"], [
        ["2.ª menor · 2.ª mayor", "1 · 2", "Re♭ · Re"], ["3.ª menor · 3.ª mayor", "3 · 4", "Mi♭ · Mi"], ["4.ª justa", "5", "Fa"],
        ["4.ª aumentada · 5.ª disminuida (tritono)", "6", "Fa♯ · Sol♭"], ["5.ª justa", "7", "Sol"], ["5.ª aumentada · 6.ª menor", "8", "Sol♯ · La♭"],
        ["6.ª mayor", "9", "La"], ["7.ª menor · 7.ª mayor", "10 · 11", "Si♭ · Si"], ["8.ª justa", "12", "Do"]])}
      ${tags(...[["2.ª m", 1], ["2.ª M", 2], ["3.ª m", 3], ["3.ª M", 4], ["4.ª J", 5], ["Tritono", 6], ["5.ª J", 7], ["6.ª m", 8], ["6.ª M", 9], ["7.ª m", 10], ["7.ª M", 11], ["8.ª J", 12]]
        .map(([n, s]) => P(n, [[60], [60 + s], [60, 60 + s]], `${s} semitonos`, { gap: 0.6, show: [60, 60 + s] })))}
      ${K([60, 64])}
      <p>Ojo con la enarmonía: Do–Mi♭ (3.ª menor) y Do–Re♯ (2.ª aumentada) suenan igual, 3 semitonos, pero se escriben y funcionan distinto. El nombre depende de las letras, no de las teclas. Un intervalo mayor que la octava es <b>compuesto</b>: la 9.ª es una 2.ª más una octava; la 10.ª, una 3.ª más una octava.</p>
      ${score(`${pz("02", "Clair de Lune")} avanza en <b>terceras paralelas</b> en la derecha (1–8 y 51–58); ${pz("07", "Theme of Love")} dobla la melodía en <b>sextas</b> (19–34). Los «acordes con segundas» de ${pz("04", "A Flower Is Not a Flower")} (izquierda, 1–6) son segundas: dos notas vecinas que rozan.`)}`,
    quiz: { q: "Do–Fa♯ tiene 6 semitonos. ¿Cómo se llama?", o: ["Cuarta aumentada", "Quinta disminuida", "Cuarta justa"], a: 0,
      why: "Do–Re–Mi–Fa son cuatro nombres: es una cuarta. La justa tiene 5 semitonos; con 6 es aumentada (el tritono). Do–Sol♭ sonaría igual, pero sería una quinta disminuida." } },

  { lv: 1, t: "Inversión de intervalos y consonancia",
    html: () => `
      <p><b>Invertir</b> un intervalo es pasar la nota grave una octava arriba (o la aguda una octava abajo). Do–Mi se convierte en Mi–Do. Hay tres reglas que siempre se cumplen:</p>
      ${T(["Regla", "Ejemplo"], [
        ["Los números suman 9", "3.ª ↔ 6.ª · 2.ª ↔ 7.ª · 4.ª ↔ 5.ª · 1 ↔ 8.ª"],
        ["La calidad se da la vuelta", "mayor ↔ menor · aumentado ↔ disminuido · justo ↔ justo"],
        ["Los semitonos suman 12", "3.ª M (4) ↔ 6.ª m (8)"]])}
      ${tags(P("3.ª mayor Do–Mi", [[60, 64]], "4 semitonos"), P("6.ª menor Mi–Do", [[64, 72]], "su inversión: 8"),
        P("5.ª justa Do–Sol", [[60, 67]], "7 semitonos"), P("4.ª justa Sol–Do", [[67, 72]], "su inversión: 5"),
        P("Tritono Fa–Si", [[65, 71]], "4.ª aumentada"), P("Si–Fa", [[71, 77]], "5.ª disminuida, también 6"))}
      ${K([60, 64])}
      <p><b>Consonancia y disonancia.</b> En la armonía tonal los intervalos se clasifican así:</p>
      ${T(["Tipo", "Intervalos", "Sensación"], [
        ["Consonancias perfectas", "unísono, 8.ª justa, 5.ª justa", "Estables, huecas"],
        ["Consonancias imperfectas", "3.ª y 6.ª mayores y menores", "Estables y dulces"],
        ["Disonancias", "2.ª, 7.ª, intervalos aumentados y disminuidos", "Tensión que pide resolver"],
        ["Caso especial", "4.ª justa", "Consonante entre voces superiores; disonante sobre el bajo"]])}
      <p>El <b>tritono</b> es la disonancia clave de la música tonal: está dentro del acorde de dominante con séptima y es lo que lo hace querer resolver. Disonancia no significa «feo»: es la tensión que da movimiento.</p>
      ${score(`Las terceras de ${pz("02", "Clair de Lune")} y las sextas de ${pz("07", "Theme of Love")} son el mismo intervalo invertido: por eso suenan igual de dulces, las dos son consonancias imperfectas. El acorde Sol7 de las cadencias de ${pz("01", "las variaciones de Mozart")} (Sol · Si · Re · Fa) contiene el tritono Si–Fa.`)}`,
    quiz: { q: "¿Qué intervalo obtienes al invertir una séptima menor?", o: ["Segunda mayor", "Segunda menor", "Séptima mayor"], a: 0,
      why: "9 − 7 = 2, y menor se vuelve mayor. Con semitonos: 10 + 2 = 12." } },

  { lv: 1, t: "Escala mayor, tonalidad y armadura",
    html: () => `
      <p>Toda <b>escala mayor</b> sigue el mismo patrón: <b>tono, tono, semitono, tono, tono, tono, semitono</b>. Son dos grupos iguales de cuatro notas (T–T–S), los <b>tetracordos</b>, separados por un tono. En Do mayor los semitonos caen entre Mi–Fa y Si–Do.</p>
      ${tags(scale([60, 62, 64, 65, 67, 69, 71, 72], "Do mayor", "solo teclas blancas"), scale([67, 69, 71, 72, 74, 76, 78, 79], "Sol mayor", "necesita Fa♯"), scale([61, 63, 65, 66, 68, 70, 72, 73], "Re♭ mayor", "cinco bemoles"))}
      ${K([60, 62, 64, 65, 67, 69, 71, 72])}
      <p>Cada grado tiene nombre: I <b>tónica</b>, II supertónica, III mediante, IV <b>subdominante</b>, V <b>dominante</b>, VI superdominante, VII <b>sensible</b> (a un semitono de la tónica, «tira» hacia ella).</p>
      <p>Una <b>tonalidad</b> es la escala organizada alrededor de su tónica. La <b>armadura</b> son las alteraciones fijas al inicio de cada pentagrama, siempre en el mismo orden:</p>
      ${T(["Alteraciones", "Orden", "Regla para hallar la tonalidad mayor"], [
        ["Sostenidos", "Fa · Do · Sol · Re · La · Mi · Si", "El último sostenido + un semitono"],
        ["Bemoles", "Si · Mi · La · Re · Sol · Do · Fa", "El penúltimo bemol (con un bemol: Fa mayor)"]])}
      ${score(`${pz("02", "Clair de Lune")} está en Re♭ mayor (5♭); ${pz("08", "Lit")} en Mi mayor (4♯); ${pz("10", "Lie and Truth")} en Fa♯ mayor (6♯): todas sus notas son sostenidas menos Si. ${pz("11", "Again")} se <b>transportó</b>: la partitura dice «Orig. Key: G♭ major», pero está en Fa mayor, un semitono más abajo, para leer un bemol en vez de seis.`)}`,
    quiz: { q: "Una armadura tiene tres sostenidos (Fa♯, Do♯, Sol♯). ¿Qué tonalidad mayor es?", o: ["La mayor", "Sol mayor", "Mi mayor"], a: 0,
      why: "El último sostenido es Sol♯; un semitono arriba está La. La mayor tiene tres sostenidos." } },

  { lv: 1, t: "Círculo de quintas y tonalidades relativas",
    html: () => `
      <p>El <b>círculo de quintas</b> ordena las doce tonalidades. En el sentido del reloj cada paso sube una quinta justa y suma un sostenido; en sentido contrario, baja una quinta (o sube una cuarta) y suma un bemol. Abajo, tres pares enarmónicos suenan igual: Si = Do♭, Fa♯ = Sol♭, Do♯ = Re♭.</p>
      ${circleSvg()}
      <p>Por dentro están las <b>relativas menores</b>: cada tonalidad mayor comparte armadura con una menor situada una <b>tercera menor más abajo</b> (su VI grado). Do mayor y la menor no tienen alteraciones; Re mayor y si menor tienen dos sostenidos.</p>
      <p>No confundas relativa con <b>homónima</b> (o paralela): misma tónica, distinta armadura. Do mayor y Do menor son homónimas; Do menor tiene tres bemoles.</p>
      ${tags(P("Do mayor → La menor", [[48, 60, 64, 67], [45, 60, 64, 69]], "relativas: mismas notas"), P("Do mayor → Do menor", [[48, 60, 64, 67], [48, 60, 63, 67]], "homónimas: cambia la tercera"))}
      ${K([60, 64, 67, 69])}
      <p>Las <b>tonalidades vecinas</b> son las que difieren en una alteración como máximo: la propia relativa y las tonalidades a un paso en el círculo, con sus relativas. Para Do mayor: Sol mayor, Fa mayor, la menor, mi menor y re menor. Modular a una vecina suena natural porque comparten casi todas las notas.</p>
      ${score(`${pz("15", "Small Village")}: Re mayor y Si menor comparten Fa♯ y Do♯, y la pieza termina en un Si grave (91–95). ${pz("04", "A Flower Is Not a Flower")}: Re menor con la armadura de un bemol de Fa mayor. En ${pz("01", "las variaciones de Mozart")}, la Variación VIII cambia a la homónima Do menor (armadura de 3♭).`)}`,
    quiz: { q: "¿Cuál es la relativa menor de Fa♯ mayor?", o: ["Re♯ menor", "Fa♯ menor", "Si menor"], a: 0,
      why: "Una tercera menor debajo de Fa♯ está Re♯. En Lie and Truth la sección fuerte (33–52) se asienta en Re♯, sin cambiar la armadura." } },

  { lv: 1, t: "Escalas menores",
    html: () => `
      <p>El modo menor tiene tres formas. Las tres comparten la tercera menor, que es lo que lo hace sonar «oscuro».</p>
      ${T(["Escala", "Patrón", "La menor", "Para qué"], [
        ["Natural (eólica)", "T S T T S T T", "La Si Do Re Mi Fa Sol", "Misma armadura que la relativa mayor"],
        ["Armónica", "Sube el VII", "… Fa <b>Sol♯</b> La", "Crea la sensible y el acorde de dominante mayor"],
        ["Melódica", "Sube VI y VII al subir", "… <b>Fa♯ Sol♯</b> La (al bajar, natural)", "Evita el salto de 2.ª aumentada en melodías"]])}
      ${tags(scale([69, 71, 72, 74, 76, 77, 79, 81], "Natural", "La menor"), scale([69, 71, 72, 74, 76, 77, 80, 81], "Armónica", "con Sol♯"),
        P("Melódica", [69, 71, 72, 74, 76, 78, 80, 81, 79, 77, 76, 74, 72, 71, 69].map(m => [m]), "sube con Fa♯ y Sol♯, baja natural", { gap: 0.3, show: [69, 71, 72, 74, 76, 78, 80, 81] }))}
      ${K([69, 71, 72, 74, 76, 77, 80, 81])}
      <p>En la armónica, entre Fa y Sol♯ queda una <b>segunda aumentada</b> (3 semitonos), que da su color «oriental». La sensible permite que el V grado sea mayor (Mi–Sol♯–Si en la menor), y es lo que más claramente afirma una tonalidad menor. Sin ella (menor natural), el VII grado está a un tono de la tónica: se llama <b>subtónica</b>.</p>
      ${score(`${pz("16", "Battleground")}: las cascadas de 35–51 usan Re menor natural (sin Do♯), con sonido épico; en el compás 97 aparece el Do♯ y con él la dominante La mayor. ${pz("12", "In the Palace")} eleva el séptimo grado: Do♯ en Re menor (24, 99–103) y Fa♯ en Sol menor (42, 57–58).`)}`,
    quiz: { q: "¿Qué grado se altera en la escala menor armónica?", o: ["El séptimo, que sube un semitono", "El sexto y el séptimo", "El tercero"], a: 0,
      why: "La armónica solo sube el VII para tener sensible. La melódica, al subir, eleva el VI y el VII." } },

  // ===== Nivel 2 · Armonía =====
  { lv: 2, t: "Tríadas e inversiones",
    html: () => `
      <p>Una <b>tríada</b> son tres notas superpuestas por terceras: <b>fundamental</b>, <b>tercera</b> y <b>quinta</b>. Según las terceras que la forman hay cuatro tipos:</p>
      ${T(["Tipo", "Terceras (de abajo arriba)", "Quinta", "Sobre Do", "Cifrado"], [
        ["Mayor", "3.ª M + 3.ª m", "justa", "Do Mi Sol", "C"], ["Menor", "3.ª m + 3.ª M", "justa", "Do Mi♭ Sol", "Cm"],
        ["Disminuida", "3.ª m + 3.ª m", "disminuida", "Do Mi♭ Sol♭", "Cdim · C°"], ["Aumentada", "3.ª M + 3.ª M", "aumentada", "Do Mi Sol♯", "Caug · C+"]])}
      ${tags(P("Mayor", [[60, 64, 67]], "luminosa", { arp: 0.12 }), P("Menor", [[60, 63, 67]], "oscura", { arp: 0.12 }), P("Disminuida", [[60, 63, 66]], "tensa", { arp: 0.12 }), P("Aumentada", [[60, 64, 68]], "suspendida", { arp: 0.12 }))}
      ${K([60, 64, 67])}
      <p>Las notas se pueden ordenar de otra forma. Lo que define la <b>inversión</b> es solo la nota más grave, el <b>bajo</b>:</p>
      ${T(["Posición", "Bajo", "Bajo cifrado", "Cifrado americano"], [
        ["Estado fundamental", "fundamental", "5/3 (sin cifra)", "C"], ["1.ª inversión", "tercera", "6", "C/E"], ["2.ª inversión", "quinta", "6/4", "C/G"]])}
      ${tags(P("Estado fundamental", [[48, 60, 64, 67]], "Do en el bajo"), P("1.ª inversión", [[52, 60, 67, 72]], "Mi en el bajo"), P("2.ª inversión", [[55, 64, 72, 76]], "Sol en el bajo"))}
      <p>El estado fundamental suena firme; la 1.ª inversión, más ligera y móvil; la 2.ª inversión es inestable y en el estilo clásico aparece en contextos concretos (por ejemplo, el 6/4 cadencial antes del V). Las notas de arriba pueden repartirse en <b>posición cerrada</b> (dentro de una octava) o <b>abierta</b>.</p>
      ${score(`En ${pz("08", "Lit")} el acorde de Mi se mantiene arriba mientras el bajo baja: Mi, luego Re♯ (Mi con bajo en Re♯) y luego Re (Mi7 con bajo en Re). El cifrado con barra, E/D♯, dice exactamente eso. En la coda de ${pz("04", "A Flower Is Not a Flower")} (57–59) la derecha mueve tríadas paralelas.`)}`,
    quiz: { q: "Do–Mi♭–Sol♭ es una tríada…", o: ["Disminuida", "Menor", "Aumentada"], a: 0,
      why: "Do–Mi♭ es 3.ª menor y Mi♭–Sol♭ también: dos terceras menores dan una quinta disminuida (6 semitonos)." } },

  { lv: 2, t: "Grados y funciones tonales",
    html: () => `
      <p>Si construyes una tríada sobre cada nota de la escala mayor obtienes los siete acordes de la tonalidad. Se nombran con <b>números romanos</b>: mayúscula para mayor, minúscula para menor, ° para disminuido. El patrón es el mismo en todas las tonalidades mayores: <b>M m m M M m dim</b>.</p>
      ${tags(...DEG.map((d, i) => P(`${d[0]} · ${d[1]}`, [triad(i)], d[2], { arp: 0.12 })))}
      ${K(triad(0))}
      <p>En menor (con la armónica para el V y el vii°): <b>i ii° III iv V VI vii°</b>. En la menor: la m, si°, Do, re m, Mi, Fa, sol♯°.</p>
      <p>Cada acorde cumple una <b>función</b>. Hay tres, y la música tonal es un viaje entre ellas:</p>
      ${T(["Función", "Acordes", "Sensación"], [
        ["Tónica (T)", "I (también vi, iii)", "Reposo, estar en casa"],
        ["Subdominante o predominante (S)", "IV, ii", "Alejarse, preparar la tensión"],
        ["Dominante (D)", "V, V7, vii°", "Tensión que pide volver a la tónica"]])}
      <p>La dominante tira hacia la tónica por dos notas: la <b>sensible</b> (Si en Do mayor) sube un semitono a la tónica, y en el V7 la <b>séptima</b> (Fa) baja a la tercera (Mi). El orden habitual es T → S → D → T.</p>
      ${tags(P("T → S → D → T", [[48, 60, 64, 67], [53, 60, 65, 69], [55, 59, 62, 67], [48, 60, 64, 67]], "I · IV · V · I"), P("T → S → D → T", [[48, 60, 64, 67], [50, 62, 65, 69], [55, 59, 65, 67], [48, 60, 64, 67]], "I · ii · V7 · I"))}
      ${score(`El tema de ${pz("01", "las variaciones de Mozart")} es casi solo funciones básicas: I–IV–I–V–I en la parte A. El ii (Re menor) prepara la dominante antes de la cadencia. ${pz("06", "The Sixth Station")} recorre en Mi menor i – iv – VI – VII – i (bajo Mi – La – Do – Re – Mi).`)}`,
    quiz: { q: "¿Qué función cumple el ii grado?", o: ["Subdominante", "Tónica", "Dominante"], a: 0,
      why: "El ii comparte dos notas con el IV y prepara la dominante, como el Re menor que en Mozart aparece antes de la cadencia." } },

  { lv: 2, t: "Cadencias",
    html: () => `
      <p>Una <b>cadencia</b> es la fórmula armónica que cierra una frase, como la puntuación al final de una oración. Las cinco que debes reconocer:</p>
      ${T(["Cadencia", "Acordes", "Efecto"], [
        ["Auténtica perfecta", "V(7) → I, ambos en estado fundamental, tónica en la voz aguda", "Punto final"],
        ["Auténtica imperfecta", "V → I con alguna inversión, o sin la tónica arriba", "Punto y seguido"],
        ["Plagal", "IV → I", "Cierre suave, el «amén»"],
        ["Semicadencia", "Termina en el V (desde cualquier acorde)", "Coma: queda en el aire"],
        ["Rota o interrumpida", "V → vi (en lugar de V → I)", "Sorpresa, engaño"]])}
      ${tags(P("Auténtica perfecta", [[55, 62, 65, 71], [48, 60, 64, 72]], "V7 → I, Si sube a Do"),
        P("Auténtica imperfecta", [[59, 62, 67, 74], [60, 64, 67, 76]], "V6 → I, Mi arriba"),
        P("Plagal", [[53, 60, 65, 69], [48, 60, 64, 67]], "IV → I"),
        P("Semicadencia", [[48, 60, 64, 67], [53, 60, 65, 69], [55, 59, 62, 67]], "I → IV → V"),
        P("Rota", [[55, 62, 65, 71], [57, 60, 64, 72]], "V7 → vi"))}
      ${K([55, 62, 65, 71])}
      <p>En modo menor existe además la <b>cadencia frigia</b>: iv en 1.ª inversión → V, con el bajo bajando un semitono (en la menor: Fa → Mi). Es una semicadencia típica del Barroco.</p>
      <p>Truco para el oído: si la frase acaba «resuelta», busca V → I. Si acaba «abierta», mira si el último acorde es el V. Si te sorprende un acorde menor donde esperabas reposo, es una rota.</p>
      ${score(`${pz("01", "Mozart")} usa el V7 en las cadencias, el cierre clásico. ${pz("05", "Merry Christmas Mr. Lawrence")} hace lo contrario: IV – V – vi (Sol♭ – La♭ – Si♭m, 17–19), una frase que nunca reposa en la tónica. ${pz("06", "The Sixth Station")} cierra con la cadencia eólica VI – VII – i (bajos Do – Re – Mi, 6–8), y ${pz("11", "Again")} termina sobre el vi, con Re en el bajo (58).`)}`,
    quiz: { q: "Una frase termina V → vi en lugar de V → I. ¿Qué cadencia es?", o: ["Rota (interrumpida)", "Plagal", "Semicadencia"], a: 0,
      why: "El oído espera la tónica después del V y recibe el vi: es la cadencia rota." } },

  { lv: 2, t: "Acordes de séptima",
    html: () => `
      <p>Si a una tríada le sumas otra tercera, obtienes un <b>acorde de séptima</b>: cuatro notas. Su nombre depende de la tríada y del tipo de séptima. Los cinco tipos básicos, sobre Do:</p>
      ${T(["Tipo", "Notas sobre Do", "Fórmula", "Cifrado", "Dónde aparece"], [
        ["Dominante (mayor + 7.ª m)", "Do Mi Sol Si♭", "1 3 5 ♭7", "C7", "V7"],
        ["Mayor con 7.ª mayor", "Do Mi Sol Si", "1 3 5 7", "Cmaj7 · CΔ", "Imaj7, IVmaj7"],
        ["Menor 7 (menor + 7.ª m)", "Do Mi♭ Sol Si♭", "1 ♭3 5 ♭7", "Cm7", "ii7, iii7, vi7"],
        ["Semidisminuido", "Do Mi♭ Sol♭ Si♭", "1 ♭3 ♭5 ♭7", "Cm7♭5 · Cø", "viiø7 en mayor, iiø7 en menor"],
        ["Disminuido", "Do Mi♭ Sol♭ Si𝄫 (= La)", "1 ♭3 ♭5 𝄫7", "C°7", "vii°7 en menor armónica"]])}
      ${tags(P("C7", [[60, 64, 67, 70]], "dominante: tensión", { arp: 0.1 }), P("Cmaj7", [[60, 64, 67, 71]], "suave, soñador", { arp: 0.1 }), P("Cm7", [[60, 63, 67, 70]], "melancólico", { arp: 0.1 }),
        P("Cø", [[60, 63, 66, 70]], "inestable", { arp: 0.1 }), P("C°7", [[60, 63, 66, 69]], "dramático", { arp: 0.1 }))}
      ${K([60, 64, 67, 70])}
      <p>En Do mayor las séptimas diatónicas son: Cmaj7 (I), Dm7 (ii), Em7 (iii), Fmaj7 (IV), G7 (V), Am7 (vi), Bø (vii).</p>
      <p>El <b>V7</b> es el más importante de la armonía clásica: contiene el tritono entre la sensible y la séptima. Al resolver, la sensible sube a la tónica y la séptima baja por grado. El <b>disminuido</b> es simétrico (solo terceras menores, 3 semitonos cada una), por eso hay solo tres distintos y cualquiera de sus notas puede funcionar como sensible.</p>
      ${tags(P("G7 → C", [[55, 59, 65, 67], [48, 60, 64, 67]], "Si → Do, Fa → Mi"))}
      ${score(`${pz("02", "Clair de Lune")} usa La♭7 (V7) para volver a Re♭ y Mi♭m7 (ii7) para prepararlo. ${pz("04", "A Flower Is Not a Flower")} encadena Si♭maj7 (VI), Sol m7 (iv) y La7 (V, con la sensible Do♯). El ostinato de ${pz("10", "Lie and Truth")} se apoya en Si maj7.`)}`,
    quiz: { q: "Si–Re–Fa–La es un acorde…", o: ["Semidisminuido (Bm7♭5)", "Disminuido (B°7)", "Menor 7 (Bm7)"], a: 0,
      why: "Si–Re–Fa es una tríada disminuida y Si–La es una séptima menor (10 semitonos): semidisminuido. El disminuido tendría La♭." } },

  { lv: 2, t: "Cifrado americano y bajo cifrado",
    html: () => `
      <p>Hay dos sistemas para escribir acordes sin pentagrama. El <b>cifrado americano</b> usa letras y es el de la música popular, el jazz y el cine. El <b>bajo cifrado</b> usa números sobre el bajo y es el de la armonía clásica.</p>
      ${T(["Letra", "A", "B", "C", "D", "E", "F", "G"], [["Nota", "La", "Si", "Do", "Re", "Mi", "Fa", "Sol"]])}
      ${T(["Símbolo", "Significa", "Ejemplo"], [
        ["(nada) · m", "mayor · menor", "C = Do mayor · Am = La menor"], ["7 · maj7 · m7", "séptima de dominante · séptima mayor · menor 7", "G7 · Fmaj7 · Dm7"],
        ["m7♭5 (ø) · dim7 (°7)", "semidisminuido · disminuido", "Bø · G♯°7"], ["aug (+)", "aumentado", "C+ = Do Mi Sol♯"],
        ["sus4 · sus2", "la 3.ª se sustituye por la 4.ª o la 2.ª", "Csus4 = Do Fa Sol"], ["add9 · 6", "se añade la 9.ª o la 6.ª a la tríada", "Cadd9 = Do Mi Sol Re"],
        ["9 · 11 · 13", "extensiones encima de la 7.ª", "C9 = Do Mi Sol Si♭ Re"], ["/ (barra)", "nota del bajo", "C/E = Do con Mi en el bajo"]])}
      <p>El <b>bajo cifrado</b> indica los intervalos que se forman sobre el bajo, sin importar la octava. Los números más usados:</p>
      ${T(["Acorde", "Cifra", "Bajo"], [
        ["Tríada en estado fundamental", "5/3 (se omite)", "fundamental"], ["Tríada en 1.ª inversión", "6", "tercera"], ["Tríada en 2.ª inversión", "6/4", "quinta"],
        ["Séptima en estado fundamental", "7", "fundamental"], ["Séptima en 1.ª inversión", "6/5", "tercera"], ["Séptima en 2.ª inversión", "4/3", "quinta"],
        ["Séptima en 3.ª inversión", "4/2 (o 2)", "séptima"]])}
      ${tags(P("G7 · 7", [[43, 59, 62, 65]], "Sol en el bajo"), P("G7/B · 6/5", [[47, 62, 65, 67]], "Si en el bajo"), P("G7/D · 4/3", [[50, 65, 67, 71]], "Re en el bajo"), P("G7/F · 4/2", [[53, 67, 71, 74]], "Fa en el bajo"))}
      ${K([67, 71, 74])}
      <p>En análisis clásico se combinan los dos: número romano + cifra. «V6/5» es el acorde de dominante con séptima en 1.ª inversión; «I6» es la tónica con la tercera en el bajo. Una alteración sola (♯, ♭, ♮) se refiere a la tercera sobre el bajo.</p>
      ${score(`La partitura de ${pz("13", "Vague Reasons")} tiene anotado a mano <b>Fmaj9(♯11)</b> y <b>Cmaj7/6</b>: Fa La Do Mi Sol Si sobre el bajo Fa. En ${pz("08", "Lit")} el acorde «Mi con bajo en Re♯» se escribiría E/D♯, y «Mi7 con bajo en Re», E7/D (un 4/2). ${pz("11", "Again")} indica su tonalidad original en inglés: G♭ major.`)}`,
    quiz: { q: "¿Qué significa Am7/G?", o: ["La menor con séptima, con Sol en el bajo", "Sol menor 7 con La en el bajo", "La mayor con séptima mayor"], a: 0,
      why: "Am7 es La Do Mi Sol; /G pone su séptima, Sol, en el bajo. En bajo cifrado sería una 3.ª inversión, 4/2." } },

  { lv: 2, t: "Notas extrañas a la armonía",
    html: () => `
      <p>Una melodía no usa solo notas del acorde. Las <b>notas extrañas</b> (o de adorno) chocan un momento con la armonía y resuelven. Se distinguen por cómo llegan, dónde caen y cómo salen:</p>
      ${T(["Tipo", "Llega", "Sale", "Detalle"], [
        ["Nota de paso", "por grado", "por grado, misma dirección", "Rellena el hueco entre dos notas del acorde; suele ir en parte débil"],
        ["Bordadura", "por grado", "por grado, vuelve a la misma nota", "Superior o inferior"],
        ["Apoyatura", "por salto", "por grado", "Cae en parte fuerte: es la disonancia más expresiva"],
        ["Retardo", "preparada (ligada desde el acorde anterior)", "por grado, hacia abajo", "Preparación – disonancia – resolución: 4–3, 7–6, 9–8"],
        ["Anticipación", "por grado (o salto)", "se repite", "Adelanta una nota del acorde siguiente"],
        ["Escapada", "por grado", "por salto, en dirección contraria", "Escapa del camino esperado"],
        ["Nota pedal", "se mantiene", "—", "Nota larga (casi siempre en el bajo) mientras la armonía cambia encima"]])}
      ${tags(P("Paso", [[48, 60, 64], [65], [48, 60, 67]], "Mi – Fa – Sol", { gap: 0.6 }), P("Bordadura", [[48, 60, 64], [65], [48, 60, 64]], "Mi – Fa – Mi", { gap: 0.6 }),
        P("Apoyatura", [[48, 55, 64, 74], [72]], "Re choca y resuelve a Do", { gap: 0.8 }), P("Retardo 4–3", [[48, 55, 64, 72], [43, 55, 62, 72], [71]], "Do ligado sobre Sol, baja a Si", { gap: 0.9 }),
        P("Anticipación", [[43, 55, 62, 71], [72], [48, 55, 64, 72]], "Do llega antes", { gap: 0.6 }), P("Escapada", [[48, 55, 64, 72], [74], [43, 55, 62, 71]], "Re y salto a Si", { gap: 0.6 }),
        P("Pedal de tónica", [[48, 60, 64, 67], [48, 60, 65, 69], [48, 59, 62, 67], [48, 60, 64, 67]], "Do fijo en el bajo"))}
      ${K([60, 64, 65])}
      <p>Cuando la nota de adorno no pertenece a la escala se llama <b>cromática</b> (paso cromático, bordadura cromática). Ojo: en ornamentación, «apoyatura» también nombra la notita pequeña que se toca justo antes de la principal.</p>
      ${score(`${pz("09", "My Lie")}: nota pedal de Fa grave (7–9) y de Si♭ (42–45), y un grupeto con Do♯ como paso cromático (compases 2, 22 y 30). ${pz("12", "In the Palace")}: pedal de dominante, La grave en 121–123, y apoyaturas ornamentales en 34–37. ${pz("16", "Battleground")} abre con un pedal de tónica, Re en octavas (1–17).`)}`,
    quiz: { q: "Una nota del acorde anterior queda ligada sobre el nuevo acorde, choca y luego baja por grado. ¿Qué es?", o: ["Retardo", "Anticipación", "Bordadura"], a: 0,
      why: "Preparación (ligada), disonancia y resolución descendente por grado: es un retardo." } },

  { lv: 2, t: "Conducción de voces",
    html: () => `
      <p>La armonía clásica se piensa a <b>cuatro voces</b>: soprano, contralto, tenor y bajo (SATB). La <b>conducción de voces</b> es el arte de pasar de un acorde a otro moviendo cada voz con lógica. Al piano te sirve para elegir digitaciones y entender por qué un enlace suena «bien».</p>
      ${T(["Movimiento", "Qué pasa"], [
        ["Contrario", "Una voz sube y la otra baja: el más independiente"], ["Oblicuo", "Una voz se queda y la otra se mueve"],
        ["Directo", "Las dos van en la misma dirección, con distinto intervalo"], ["Paralelo", "Las dos se mueven igual, manteniendo el intervalo"]])}
      <p><b>Reglas básicas:</b></p>
      <p>1. <b>Mantén las notas comunes</b> en la misma voz y mueve las demás a la nota más cercana. 2. Usa movimiento <b>contrario</b> respecto al bajo cuando puedas. 3. Evita <b>quintas y octavas paralelas</b> entre las mismas dos voces: las voces pierden independencia y suena hueco. 4. La <b>sensible sube</b> a la tónica y la <b>séptima baja</b> por grado. 5. En estado fundamental, duplica la fundamental; nunca dupliques la sensible. 6. No cruces las voces ni dejes más de una octava entre soprano, contralto y tenor.</p>
      ${tags(P("Notas comunes", [[48, 64, 67, 72], [53, 65, 69, 72]], "I → IV: Do se queda arriba"),
        P("Mal: paralelas", [[53, 60, 65, 69], [55, 62, 67, 71]], "IV → V: todo sube en bloque"),
        P("Bien: contrario", [[53, 60, 65, 69], [55, 59, 62, 67]], "IV → V: el bajo sube, las voces bajan"),
        P("Sensible y séptima", [[43, 59, 65, 74], [48, 60, 64, 72]], "V7 → I: Si sube, Fa baja"))}
      ${K([53, 60, 65, 69])}
      <p>En el ejemplo «mal», bajo y tenor forman Fa–Do y luego Sol–Re: dos quintas justas seguidas. Bajo y contralto, Fa–Fa y Sol–Sol: octavas paralelas. Fuera del estilo clásico, el paralelismo se usa a propósito como color (lo verás en la armonía impresionista).</p>
      ${score(`${pz("08", "Lit")} es una lección de notas comunes: la derecha no se mueve mientras el bajo baja Mi – Re♯ – Re♮ (1–3). ${pz("14", "If I Am With You")} conduce el bajo por grados, Fa → Mi → Re → Do (1–16), y ${pz("07", "Theme of Love")} lo hace subir cromáticamente, Re – Re♯ – Mi (32–33).`)}`,
    quiz: { q: "Dos voces forman una quinta justa y ambas suben un tono, formando otra quinta justa. ¿Qué es?", o: ["Quintas paralelas", "Movimiento contrario", "Cruce de voces"], a: 0,
      why: "Mismo intervalo, misma dirección: quintas paralelas, lo que la armonía clásica evita." } },

  // ===== Nivel 3 · Intermedio =====
  { lv: 3, t: "Ritmo avanzado: síncopa, hemiola y polirritmia",
    html: () => `
      <p><b>Síncopa:</b> una nota empieza en parte débil y se prolonga sobre la fuerte, desplazando el acento. <b>Contratiempo:</b> la nota suena en la parte débil después de un silencio en la fuerte.</p>
      ${tags(R("Ritmo regular", [rep(67, 1, 4)], "acento en el pulso", { bpm: 90, beats: 4 }), R("Síncopa", [[[67, 0.5], [69, 1], [67, 1], [65, 1], [64, 0.5]]], "corta – larga – larga – larga – corta", { bpm: 90, beats: 4 }),
        R("Contratiempo", [[[0, 0.5], [67, 0.5], [0, 0.5], [67, 0.5], [0, 0.5], [67, 0.5], [0, 0.5], [67, 0.5]]], "entre los pulsos", { bpm: 90, beats: 4 }),
        R("3+3+2", [[[48, 0.5], [67, 0.5], [67, 0.5], [48, 0.5], [67, 0.5], [67, 0.5], [48, 0.5], [67, 0.5]]], "ocho corcheas agrupadas", { bpm: 90, beats: 4 }))}
      <p><b>Hemiola:</b> en compás ternario, dos compases de 3 se agrupan como tres de 2 (3 × 2 = 2 × 3). Es típica antes de las cadencias barrocas y clásicas. También puede ser simultánea: una mano en 3, la otra en 2.</p>
      ${tags(R("Dos compases de 3/4", [rep(64, 1, 6)], "1 2 3 | 1 2 3", { bpm: 110, beats: 6, bar: 3 }), R("Hemiola", [[[64, 2], [65, 2], [67, 2]]], "tres notas de dos tiempos", { bpm: 110, beats: 6, bar: 3 }))}
      <p><b>Grupos irregulares</b> dividen el pulso de forma distinta a la normal: <b>tresillo</b> (3 en lugar de 2), <b>dosillo</b> (2 en lugar de 3), <b>cinquillo</b> (5 en lugar de 4), <b>seisillo</b> (6 en lugar de 4). Cuando las dos manos tocan divisiones diferentes a la vez aparece la <b>polirritmia</b>: la más común es <b>2 contra 3</b>.</p>
      ${tags(R("Tresillos", [[...rep(67, 1 / 3, 6), [72, 1]]], "tres por pulso", { bpm: 70, beats: 3 }),
        R("2 contra 3", [rep(72, 1.5, 4), rep(55, 1, 6)], "derecha 2, izquierda 3", { bpm: 80, beats: 0 }))}
      <p>Para tocar 2 contra 3, piensa en seis divisiones: la mano de tres toca en 1, 3 y 5; la de dos, en 1 y 4. Frase guía: «pa-sa-la-sal» (1 · 3–4 · 5).</p>
      ${score(`${pz("10", "Lie and Truth")} abre con una hemiolia: dos negras con puntillo en la derecha contra tres grupos de semicorcheas en la izquierda (1–8). ${pz("15", "Small Village")} tiene 2 contra 3 en la sección D (60–67). ${pz("11", "Again")} vive de la síncopa por ligadura (3–5), ${pz("06", "The Sixth Station")} entra a contratiempo (8–10) y ${pz("13", "Vague Reasons")} agrupa 3+3+2 en la izquierda (29–36). ${pz("12", "In the Palace")} usa quintillos (26, 62) y seisillos (67).`)}`,
    quiz: { q: "En 3/4, dos compases suenan agrupados como si fueran tres de 2/4. ¿Qué recurso es?", o: ["Hemiola", "Síncopa", "Anacrusa"], a: 0,
      why: "La hemiola reagrupa 3 × 2 tiempos en 2 × 3: el oído siente un compás más lento y ancho." } },

  { lv: 3, t: "Forma musical",
    html: () => `
      <p>La forma es cómo se organizan las ideas en el tiempo. Se construye de lo pequeño a lo grande:</p>
      ${T(["Unidad", "Qué es"], [
        ["Motivo", "La idea más pequeña reconocible: 2 a 4 notas con un ritmo propio"],
        ["Semifrase · frase", "Unidad con sentido, suele durar 4 compases (semifrase) u 8 (frase) y termina en cadencia"],
        ["Período", "Dos frases: el antecedente acaba abierto (a menudo semicadencia) y el consecuente cierra (cadencia auténtica)"],
        ["Secuencia", "Un motivo repetido a otra altura, subiendo o bajando por grados"]])}
      ${tags(R("Motivo", [[[60, 1], [60, 1], [67, 1], [67, 1]]], "Do Do Sol Sol", { bpm: 120 }),
        R("Tema de Mozart", [[[60, 1], [60, 1], [67, 1], [67, 1], [69, 1], [69, 1], [67, 2], [65, 1], [65, 1], [64, 1], [64, 1], [62, 1], [62, 1], [60, 2]]], "«Ah, vous dirai-je, Maman»", { bpm: 120 }),
        R("Secuencia (ejemplo)", [[[72, 0.5], [71, 0.5], [72, 1], [71, 0.5], [69, 0.5], [71, 1], [69, 0.5], [67, 0.5], [69, 1]]], "el mismo dibujo, un grado más abajo", { bpm: 90 }))}
      <p>En el tema de Mozart, la primera mitad sube y queda abierta en Sol; la segunda baja por grados hasta Do y cierra.</p>
      ${T(["Forma", "Esquema", "Rasgo"], [
        ["Binaria", "A B (‖: A :‖: B :‖)", "Dos partes, a menudo repetidas; la redondeada recuerda A al final de B"],
        ["Ternaria", "A B A", "Idea, contraste y regreso; la vuelta puede ser variada (A′)"],
        ["Tema y variaciones", "A A1 A2 A3…", "La armonía y la estructura se mantienen; cambian ritmo, textura o modo"],
        ["Rondó", "A B A C A", "Un estribillo que vuelve entre episodios distintos"],
        ["Forma sonata", "Exposición · desarrollo · reexposición", "Dos temas en tonalidades distintas que se reconcilian en la tónica"]])}
      <p>Además: <b>introducción</b>, <b>puente</b> o <b>transición</b> (une secciones, a menudo modulando) y <b>coda</b> (el cierre después de la última sección).</p>
      ${score(`${pz("01", "Las variaciones de Mozart")} son un tema de 24 compases en forma binaria redondeada (repeticiones en los compases 8 y 24) seguido de doce variaciones. ${pz("08", "Lit")} es ternaria: A 1–17, B 18–51, A abreviada 52–58. ${pz("02", "Clair de Lune")} tiene reexposición (A Tempo I, 51–65) y coda (66–72). ${pz("11", "Again")} usa una secuencia melódica en los compases 3–5.`)}`,
    quiz: { q: "Una pieza presenta A, se aleja con una parte contrastante B y vuelve a A. ¿Qué forma es?", o: ["Ternaria", "Binaria", "Rondó"], a: 0,
      why: "A–B–A es la forma ternaria, como Lit. Un rondó necesitaría al menos dos episodios distintos: A–B–A–C–A." } },

  { lv: 3, t: "Dominantes secundarias",
    html: () => `
      <p>Cualquier acorde mayor o menor de la tonalidad puede tener <b>su propia dominante</b>, aunque esta no pertenezca a la escala. Se llama <b>dominante secundaria</b> y se escribe V/x («quinto del x»). Por ejemplo, V/V es la dominante de la dominante.</p>
      <p>Cómo construirla: busca la nota una <b>quinta justa por encima</b> del acorde destino y forma sobre ella un acorde mayor (o un 7 de dominante). Casi siempre aparece una alteración: es la <b>sensible del acorde destino</b>.</p>
      ${T(["En Do mayor", "Acorde", "Alteración", "Resuelve a"], [
        ["V/ii", "La (La Do♯ Mi)", "Do♯", "Re menor"], ["V/iii", "Si (Si Re♯ Fa♯)", "Re♯", "Mi menor"],
        ["V7/IV", "Do7 (Do Mi Sol Si♭)", "Si♭", "Fa"], ["V/V", "Re (Re Fa♯ La)", "Fa♯", "Sol"], ["V/vi", "Mi (Mi Sol♯ Si)", "Sol♯", "La menor"]])}
      ${tags(P("V7/V → V → I", [[50, 60, 66, 69], [43, 59, 67, 71], [48, 60, 67, 72]], "Re7 → Sol → Do"), P("V/vi → vi", [[52, 59, 64, 68], [57, 60, 64, 69]], "Mi → La menor"), P("V7/IV → IV", [[48, 64, 67, 70], [53, 65, 69, 72]], "Do7 → Fa"))}
      ${K([62, 66, 69, 72])}
      <p>Si el acorde secundario solo «apunta» un momento hacia otro grado, se habla de <b>tonicización</b>. Si la música se queda en la nueva tonalidad y la confirma con una cadencia, es una <b>modulación</b>. También existen sensibles secundarias: vii°/x (por ejemplo, Fa♯°7 → Sol).</p>
      ${score(`${pz("01", "Mozart")} usa V/V, Re7 (Re Fa♯ La Do), para reforzar Sol, y los Fa♯ y Do♯ de la Variación I (2–6) son de este tipo. En ${pz("09", "My Lie")} Mi mayor (compás 26) resuelve en La menor (27); en ${pz("13", "Vague Reasons")}, los compases 30 y 34 llevan Sol♯ y resuelven en La menor. ${pz("03", "Energy Flow")} tiene el mismo V/vi en el compás 4.`)}`,
    quiz: { q: "En Do mayor, ¿cuál es la dominante de La menor (V/vi)?", o: ["Mi mayor (Mi Sol♯ Si)", "Mi menor (Mi Sol Si)", "Sol mayor"], a: 0,
      why: "Una quinta sobre La está Mi; como acorde mayor lleva Sol♯, la sensible de La. Mi menor es el iii diatónico y no tiene esa atracción." } },

  { lv: 3, t: "Modulación",
    html: () => `
      <p><b>Modular</b> es cambiar de tonalidad: la música establece una nueva tónica y la confirma con una cadencia. Las modulaciones más naturales van a <b>tonalidades vecinas</b> (relativa, dominante, subdominante y sus relativas).</p>
      ${T(["Tipo", "Cómo funciona"], [
        ["Por acorde pivote (diatónica)", "Un acorde común a las dos tonalidades sirve de puente y se reinterpreta"],
        ["Cromática", "Una voz se mueve por semitono y altera el acorde hacia la nueva tonalidad"],
        ["Directa o por frase", "Se empieza la frase nueva en la otra tonalidad sin preparación"],
        ["Enarmónica", "Se reinterpreta un acorde enarmónicamente (por ejemplo el °7 o la sexta alemana)"]])}
      <p><b>Ejemplo de pivote:</b> de Do mayor a Sol mayor. La menor es <b>vi</b> en Do y <b>ii</b> en Sol: al oírlo todavía estás en Do, pero el siguiente acorde, Re7 (V7 de Sol), lo reinterpreta como ii de Sol.</p>
      ${tags(P("Do → Sol con pivote", [[48, 60, 64, 67], [45, 60, 64, 69], [50, 60, 66, 69], [43, 59, 62, 67]], "I · vi=ii · V7 · I (de Sol)"),
        P("Directa: Do → Mi♭", [[48, 60, 64, 67], [43, 59, 62, 67], [48, 60, 64, 67], [51, 63, 67, 70]], "sin preparación"))}
      ${K([57, 60, 64, 69])}
      <p>Para detectar una modulación al leer: busca <b>alteraciones accidentales que se repiten</b> (un Fa♯ constante sugiere Sol mayor o mi menor) y una <b>cadencia</b> en la nueva tónica. Un cambio de armadura lo deja escrito.</p>
      ${score(`${pz("12", "In the Palace")} pasa de Re menor a Sol menor (compás 33), su subdominante menor: solo añade Mi♭, por eso suena natural pero más oscuro. ${pz("06", "The Sixth Station")} modula a tonalidades lejanas por cambio de armadura: Sol menor (18), Fa menor (30) y vuelta a Mi menor (39). En ${pz("02", "Clair de Lune")} la armadura de 4♯ (37–42) es un cambio enarmónico: más fácil de leer que muchos bemoles.`)}`,
    quiz: { q: "¿Qué tonalidad NO es vecina de Do mayor?", o: ["Mi♭ mayor", "Sol mayor", "Re menor"], a: 0,
      why: "Las vecinas difieren en una alteración como máximo. Mi♭ mayor tiene tres bemoles: está lejos en el círculo." } },

  { lv: 3, t: "Intercambio modal",
    html: () => `
      <p>El <b>intercambio modal</b> (o acordes prestados) consiste en usar en una tonalidad mayor acordes de su <b>homónima menor</b>. No es una modulación: la tónica sigue siendo la misma, pero el color se oscurece un momento. Los préstamos más usados en Do mayor, tomados de Do menor:</p>
      ${T(["Grado", "Acorde", "Nota prestada", "Color"], [
        ["iv", "Fa menor (Fa La♭ Do)", "La♭", "Nostalgia, tristeza dulce"], ["♭VI", "La♭ (La♭ Do Mi♭)", "La♭, Mi♭", "Oscuro y épico"],
        ["♭VII", "Si♭ (Si♭ Re Fa)", "Si♭", "Abierto, cálido, «de película»"], ["♭III", "Mi♭ (Mi♭ Sol Si♭)", "Mi♭, Si♭", "Rock, heroico"],
        ["iiø7", "Re semidisminuido (Re Fa La♭ Do)", "La♭", "Predominante más intenso"]])}
      ${tags(P("IV → iv → I", [[53, 60, 65, 69], [53, 60, 65, 68], [48, 60, 64, 67]], "La se vuelve La♭"),
        P("I → ♭VI → ♭VII → I", [[48, 60, 64, 67], [44, 60, 63, 68], [46, 62, 65, 70], [48, 60, 64, 67, 72]], "la cadencia «épica»"),
        P("I → ♭VII → IV → I", [[48, 60, 64, 67], [46, 62, 65, 70], [53, 60, 65, 69], [48, 60, 64, 67]], "color mixolidio"))}
      ${K([53, 60, 65, 68])}
      <p>El préstamo inverso también existe: terminar una obra en menor con un acorde de tónica <b>mayor</b> se llama <b>tercera de picardía</b>, muy común en el Barroco.</p>
      ${score(`${pz("07", "Theme of Love")} oscurece los compases 17–18 y 51–53 con La♭, Si♭ y Mi♭ prestados, sin modular. ${pz("09", "My Lie")} usa ♭VII (Si♭) en la coda (40–41); ${pz("14", "If I Am With You")}, en los compases 41–42; ${pz("03", "Energy Flow")}, en el interludio (23 y 28).`)}`,
    quiz: { q: "En Do mayor aparece un acorde de La♭ mayor y luego vuelve Do. ¿Qué es?", o: ["♭VI prestado de Do menor", "V/ii", "Una modulación a La♭ mayor"], a: 0,
      why: "La♭ es el VI de Do menor. Si la música vuelve a Do sin cadencia en La♭, es un préstamo, no una modulación." } },

  { lv: 3, t: "Modos griegos",
    html: () => `
      <p>Si tocas solo teclas blancas empezando en cada nota obtienes siete <b>modos</b>. Cada uno tiene los semitonos en un lugar distinto y por eso un color propio. La forma práctica de reconocerlos: compáralos con la escala mayor o la menor natural y busca la <b>nota característica</b>.</p>
      ${T(["Modo", "Teclas blancas desde", "Comparado con", "Nota característica", "Color"], [
        ["Jónico", "Do", "= mayor", "—", "Claro"], ["Dórico", "Re", "menor con 6.ª mayor", "6.ª mayor", "Menor luminoso, folclórico"],
        ["Frigio", "Mi", "menor con 2.ª menor", "♭2", "Español, oscuro"], ["Lidio", "Fa", "mayor con 4.ª aumentada", "♯4", "Soñador, flotante"],
        ["Mixolidio", "Sol", "mayor con 7.ª menor", "♭7", "Abierto, rock, folk"], ["Eólico", "La", "= menor natural", "♭6 y ♭7", "Épico, triste"],
        ["Locrio", "Si", "menor con ♭2 y ♭5", "♭5", "Inestable, casi no se usa"]])}
      ${tags(scale([60, 62, 64, 65, 67, 69, 71, 72], "Jónico", "Do"), scale([62, 64, 65, 67, 69, 71, 72, 74], "Dórico", "Re"), scale([64, 65, 67, 69, 71, 72, 74, 76], "Frigio", "Mi"),
        scale([65, 67, 69, 71, 72, 74, 76, 77], "Lidio", "Fa"), scale([67, 69, 71, 72, 74, 76, 77, 79], "Mixolidio", "Sol"), scale([69, 71, 72, 74, 76, 77, 79, 81], "Eólico", "La"),
        scale([71, 72, 74, 76, 77, 79, 81, 83], "Locrio", "Si"))}
      ${K([65, 67, 69, 71, 72, 74, 76, 77])}
      <p>Los modos se transportan a cualquier tónica manteniendo la fórmula: La dórico es La Si Do Re Mi <b>Fa♯</b> Sol. Para sentirlos, toca la escala sobre un bajo fijo en su tónica: el modo depende de qué nota oyes como casa.</p>
      ${score(`${pz("13", "Vague Reasons")} y ${pz("14", "If I Am With You")} suenan a <b>Fa lidio</b>: el Si natural sobre el bajo Fa da el brillo soñador (en If I Am With You, la figura Fa–La–Si–Do de 1–4). ${pz("15", "Small Village")} usa Sol♯ en Si menor, el 6.º grado elevado del <b>dórico</b> (19, 34, 42). ${pz("16", "Battleground")} es <b>eólico</b> en las cascadas de 35–51.`)}`,
    quiz: { q: "Una melodía sobre Re usa Re Mi Fa Sol La Si Do. ¿Qué modo es?", o: ["Dórico", "Eólico", "Frigio"], a: 0,
      why: "Es menor (Fa natural) pero con Si natural: 6.ª mayor. Re eólico tendría Si♭, y Re frigio, Mi♭." } },

  { lv: 3, t: "Armonía impresionista",
    html: () => `
      <p>A finales del siglo XIX, Debussy y Ravel usan los acordes por su <b>color</b> y no por su función. La tensión ya no necesita resolver. Estos son sus recursos principales:</p>
      ${T(["Recurso", "Qué es"], [
        ["Paralelismo (planing)", "Un mismo tipo de acorde se desplaza en bloque siguiendo la melodía; las quintas paralelas son intencionales"],
        ["Acordes de 9.ª, 11.ª y 13.ª", "Superposiciones de terceras que suenan como timbres, sin resolver"],
        ["Escala pentatónica", "Cinco notas sin semitonos (Do Re Mi Sol La; las teclas negras son una)"],
        ["Escala de tonos enteros", "Seis notas separadas por tonos (Do Re Mi Fa♯ Sol♯ La♯); sin tónica clara, suena a sueño"],
        ["Modos", "Dórico, lidio, mixolidio en lugar de mayor y menor"],
        ["Acordes por cuartas", "Apilados por cuartas en vez de terceras: sonido abierto y moderno"],
        ["Pedal y resonancia", "Capas de sonido que se mezclan con el pedal derecho"]])}
      ${tags(P("Paralelismo diatónico", [[60, 64, 67], [62, 65, 69], [64, 67, 71], [65, 69, 72], [64, 67, 71]], "tríadas en bloque", { gap: 0.5 }),
        P("Novenas paralelas", [[48, 64, 67, 71, 74], [50, 66, 69, 73, 76], [52, 68, 71, 75, 78]], "Cmaj9 · Dmaj9 · Emaj9", { gap: 0.9 }),
        scale([60, 62, 64, 67, 69, 72], "Pentatónica de Do", "sin semitonos"),
        scale([61, 63, 66, 68, 70, 73], "Pentatónica en teclas negras", "Sol♭ La♭ Si♭ Re♭ Mi♭"),
        scale([60, 62, 64, 66, 68, 70, 72], "Tonos enteros", "seis notas"),
        P("Acorde por cuartas", [[60, 65, 70, 75]], "Do Fa Si♭ Mi♭", { arp: 0.12 }))}
      ${K([60, 62, 64, 66, 68, 70, 72])}
      <p>La escala de tonos enteros solo tiene dos versiones distintas (desde Do y desde Re♭) y forma acordes aumentados. La pentatónica no tiene semitonos ni tritono, así que casi cualquier combinación de sus notas suena consonante.</p>
      ${score(`${pz("02", "Clair de Lune")} llena los compases 15–26 de acordes con séptima y novena y deja resonar los arpegios con pedal (27–36). El tema de ${pz("05", "Merry Christmas Mr. Lawrence")} usa casi solo Mi♭, Fa, La♭, Si♭ y Re♭, una pentatónica (17–24). ${pz("04", "A Flower Is Not a Flower")} mueve tríadas paralelas en la coda (57–59).`)}`,
    quiz: { q: "¿Cuántas notas distintas tiene la escala de tonos enteros?", o: ["Seis", "Cinco", "Siete"], a: 0,
      why: "Doce semitonos divididos en tonos de dos semitonos dan seis notas. La pentatónica tiene cinco." } },

  { lv: 3, t: "Armonía de cine, anime y pop",
    html: () => `
      <p>Buena parte de la música de tu programa usa un lenguaje armónico moderno que hereda del Romanticismo, del impresionismo y del pop. Estas fórmulas te ayudan a leer y memorizar más rápido:</p>
      ${T(["Progresión", "Ejemplo (Do mayor / La menor)", "Carácter"], [
        ["I – V – vi – IV", "Do – Sol – La m – Fa", "El pop universal"], ["vi – IV – I – V", "La m – Fa – Do – Sol", "La misma rotada: más melancólica"],
        ["IV – V – iii – vi («royal road», 王道進行)", "Fa – Sol – Mi m – La m", "Brillo y nostalgia: el sello del J-pop y el anime"],
        ["IV – V – vi", "Fa – Sol – La m", "Sube y cae en menor: agridulce"],
        ["i – ♭VI – ♭VII (– i)", "La m – Fa – Sol (– La m)", "Épico, de cine"],
        ["Bajo descendente (line cliché)", "Do – Do/Si – Do/Si♭ – Fa/La", "Emoción con un acorde fijo"]])}
      ${tags(P("I – V – vi – IV", [[48, 60, 64, 67], [43, 59, 62, 67], [45, 60, 64, 69], [41, 60, 65, 69]], "Do · Sol · La m · Fa"),
        P("IV – V – iii – vi", [[41, 60, 64, 69], [43, 59, 62, 67], [40, 59, 62, 67], [45, 60, 64, 69]], "Fmaj7 · G · Em7 · Am"),
        P("i – VI – VII – i", [[50, 62, 65, 69], [46, 62, 65, 70], [48, 64, 67, 72], [50, 62, 65, 69, 74]], "Re m · Si♭ · Do · Re m"))}
      <p><b>Colores habituales:</b> <b>sus4</b> y <b>sus2</b> quitan la tercera (ni mayor ni menor); <b>add9</b> añade brillo sin la tensión de la séptima; <b>maj7</b> da suavidad; el <b>bajo pedal</b> mantiene una nota grave mientras arriba cambian los acordes.</p>
      ${tags(P("sus4 → mayor", [[60, 65, 67], [60, 64, 67]], "Fa resuelve a Mi"), P("sus2", [[60, 62, 67]], "Do Re Sol"), P("add9", [[60, 64, 67, 74]], "Do Mi Sol + Re"), P("maj7", [[60, 64, 67, 71]], "Do Mi Sol Si"))}
      ${K([60, 64, 67, 74])}
      ${score(`La «royal road» IV – V – iii – vi es la base de ${pz("03", "Energy Flow")} (1–4), ${pz("07", "Theme of Love")} (Fa – Sol – Mi m – La m, 1–4) y ${pz("11", "Again")} (Si♭ – Do – La m – Re m, desde el 11). ${pz("05", "Merry Christmas Mr. Lawrence")} usa IV – V – vi. ${pz("16", "Battleground")} se mueve en i – VI – III – VII (inferida). La izquierda de Again añade la novena (add9/sus2) desde el compás 11.`)}`,
    quiz: { q: "En Fa mayor, ¿qué acordes forman la progresión IV – V – iii – vi?", o: ["Si♭ – Do – La m – Re m", "Do – Re m – Fa – Sol", "Si♭ – Do – Re m – La m"], a: 0,
      why: "En Fa mayor: IV = Si♭, V = Do, iii = La menor, vi = Re menor. Son los bajos Si♭ – Do – La – Re de Again." } },

  { lv: 3, t: "Sexta napolitana y sextas aumentadas",
    html: () => `
      <p>Son los acordes cromáticos predominantes más famosos del Clasicismo y el Romanticismo. Los dos preparan la dominante con más intensidad que el iv o el ii.</p>
      <p><b>Sexta napolitana (N6):</b> tríada mayor sobre el <b>♭II</b>, casi siempre en 1.ª inversión (de ahí el «6»). Es más común en menor. En la menor: Si♭ Re Fa, con Re en el bajo. Va al V (a menudo pasando por el 6/4 cadencial) y el ♭2 baja a la sensible.</p>
      ${tags(P("N6 → V → i", [[50, 62, 65, 70], [52, 59, 64, 68], [45, 60, 64, 69]], "La menor: Si♭/Re · Mi · La m"))}
      <p><b>Sextas aumentadas:</b> se construyen sobre el <b>♭6</b> en el bajo con el <b>♯4</b> arriba. Esas dos notas forman una sexta aumentada que se abre por movimiento contrario hasta la octava sobre la dominante. En la menor: Fa en el bajo y Re♯ arriba, que se abren a Mi–Mi. Hay tres variedades según la nota que se añade:</p>
      ${T(["Nombre", "Notas en la menor", "Añade"], [
        ["Italiana (It+6)", "Fa · La · Re♯", "la tónica"], ["Francesa (Fr+6)", "Fa · La · Si · Re♯", "tónica y 2.º grado"],
        ["Alemana (Ger+6)", "Fa · La · Do · Re♯", "tónica y 3.er grado"]])}
      ${tags(P("Italiana → V", [[53, 57, 63], [52, 56, 64]], "Fa y Re♯ se abren a Mi"), P("Francesa → V", [[53, 57, 59, 63], [52, 56, 59, 64]], "Si se queda"),
        P("Alemana → 6/4 → V", [[53, 57, 60, 63], [52, 57, 60, 64], [52, 56, 59, 64]], "pasa por el 6/4 cadencial"))}
      ${K([65, 69, 72, 75])}
      <p>La alemana suena igual que un acorde de séptima de dominante (Fa La Do Mi♭ = F7). Por eso sirve para la <b>modulación enarmónica</b>: el oído la oye como F7, pero se resuelve como sexta aumentada, o al revés.</p>
      ${score(`Los análisis de tu programa no marcan napolitanas ni sextas aumentadas: son acordes de Beethoven, Schubert o Chopin. Practica construyéndolos en la tonalidad de ${pz("12", "In the Palace")} (Re menor): la napolitana sería Mi♭ mayor con Sol en el bajo, y la sexta aumentada tendría Si♭ en el bajo y Sol♯ arriba, abriéndose a La, la dominante que sí aparece en la obra (La7).`)}`,
    quiz: { q: "En La menor, ¿cuál es el acorde napolitano?", o: ["Si♭ mayor", "Si menor", "Re menor"], a: 0,
      why: "El napolitano es una tríada mayor sobre el II grado rebajado: en La menor, Si♭ – Re – Fa, normalmente con Re en el bajo." } },
];

// ---------- Lesson UI ----------
// Progress keys were renamed when the curriculum grew so old indexes do not mark the wrong lessons as done.
let lessonsDone = store.get("pc-theory-done", []).filter(i => i < LESSONS.length);
let cur = Math.min(store.get("pc-theory-cur", 0), LESSONS.length - 1);
const lnav = document.getElementById("lnav"), lessonEl = document.getElementById("lesson");

function setProgress() {
  document.getElementById("lbar").style.width = (lessonsDone.length / LESSONS.length * 100) + "%";
  document.getElementById("ltext").textContent = `${lessonsDone.length} de ${LESSONS.length} lecciones`;
}
function renderLessons() {
  stopMetro();
  lnav.innerHTML = LESSONS.map((l, i) =>
    (i === 0 || LESSONS[i - 1].lv !== l.lv ? `<span class="lvl"><span>Nivel ${l.lv}</span><span class="lvl-t"> · ${LEVELS[l.lv - 1]}</span></span>` : "") +
    `<button type="button" class="lbtn${lessonsDone.includes(i) ? " done" : ""}" aria-current="${i === cur}" data-i="${i}"><span class="mono">${lessonsDone.includes(i) ? "✓" : String(i + 1).padStart(2, "0")}</span>${l.t}</button>`).join("");
  const L = LESSONS[cur];
  lessonEl.innerHTML = `<span class="eyebrow">Nivel ${L.lv} · ${LEVELS[L.lv - 1]} · Lección ${cur + 1} de ${LESSONS.length}</span><h3 style="font-size:1.7rem">${L.t}</h3>
    <div class="body">${L.html()}</div>
    <div class="quiz" id="quiz"></div>
    <div class="row"><button class="btn" type="button" id="prev" ${cur === 0 ? "disabled" : ""}>← Anterior</button>
    <button class="btn" type="button" id="next" ${cur === LESSONS.length - 1 ? "disabled" : ""}>Siguiente →</button></div>`;
  L.after?.();
  renderQuiz(L.quiz);
  setProgress();
  revealActive();
}
// Keep the current lesson visible inside the scrollable nav without scrolling the page.
function revealActive() {
  const a = lnav.querySelector('[aria-current="true"]');
  if (lnav.scrollHeight > lnav.clientHeight && (a.offsetTop < lnav.scrollTop || a.offsetTop + a.offsetHeight > lnav.scrollTop + lnav.clientHeight))
    lnav.scrollTop = a.offsetTop - lnav.clientHeight / 3;
  if (lnav.scrollWidth > lnav.clientWidth && (a.offsetLeft < lnav.scrollLeft || a.offsetLeft + a.offsetWidth > lnav.scrollLeft + lnav.clientWidth))
    lnav.scrollLeft = a.offsetLeft - 16;
}
function go(i) { cur = i; store.set("pc-theory-cur", i); renderLessons(); lessonEl.scrollIntoView({ block: "nearest" }); }
function complete() {
  if (!lessonsDone.includes(cur)) { lessonsDone = [...lessonsDone, cur]; store.set("pc-theory-done", lessonsDone); }
  setProgress();
  const b = lnav.querySelector(`[data-i="${cur}"]`);
  b.classList.add("done"); b.querySelector(".mono").textContent = "✓";
}
function renderQuiz(q) {
  const box = document.getElementById("quiz");
  let answer = q.a, earPlay = null;
  const draw = () => {
    if (q.ear) { // random third rooted on C4..B4: major (4) or minor (3)
      const r = 60 + Math.floor(Math.random() * 12), maj = Math.random() < 0.5;
      earPlay = [[r], [r + (maj ? 4 : 3)], [r, r + (maj ? 4 : 3)]]; answer = maj ? 0 : 1;
    }
    box.innerHTML = `<span class="eyebrow">Comprueba lo aprendido</span><p><b>${q.q}</b></p>
      ${q.ear ? `<div><button type="button" class="btn" id="ear">▶ Escuchar tercera</button></div>` : ""}
      <div class="opts">${q.o.map((o, i) => `<button type="button" class="opt" data-o="${i}">${o}</button>`).join("")}</div>
      <p class="muted" id="why"></p>`;
    if (q.ear) document.getElementById("ear").onclick = () => playSeq(earPlay, 0.7);
    box.querySelectorAll(".opt").forEach(b => b.onclick = () => {
      const i = +b.dataset.o, why = document.getElementById("why");
      if (i === answer) {
        b.classList.add("right");
        why.innerHTML = q.ear ? `Correcto: era una tercera ${answer === 0 ? "mayor" : "menor"}. <button type="button" class="btn" id="again">Otra</button>` : "Correcto. " + q.why;
        if (q.ear) document.getElementById("again").onclick = () => { draw(); playSeq(earPlay, 0.7); };
        complete();
      } else {
        b.classList.add("wrong");
        why.textContent = q.ear ? "No. Vuelve a escucharla: la mayor suena más luminosa." : "Todavía no. Relee la lección y prueba otra opción.";
      }
    });
  };
  draw();
}
lnav.onclick = e => { const b = e.target.closest(".lbtn"); if (b) go(+b.dataset.i); };
lessonEl.addEventListener("click", e => {
  if (e.target.id === "prev") return go(cur - 1);
  if (e.target.id === "next") return go(cur + 1);
  const tg = e.target.closest("[data-play],[data-rh]");
  if (tg) { lessonEl.querySelectorAll(".tag.sel").forEach(t => t.classList.remove("sel")); tg.classList.add("sel"); }
  const p = e.target.closest("[data-play]");
  if (p) {
    playSeq(JSON.parse(p.dataset.play), +p.dataset.gap, +p.dataset.arp);
    const k = lessonEl.querySelector("[data-kbd]"); if (k) k.innerHTML = kbd(JSON.parse(p.dataset.show));
  }
  const rh = e.target.closest("[data-rh]");
  if (rh) { stopSounds("seq"); } if (rh) whenRunning(c => { // durations are in beats at data-bpm; each voice starts together
    const b = 60 / +rh.dataset.bpm, t0 = c.currentTime + 0.06;
    JSON.parse(rh.dataset.rh).forEach(v => {
      let t = t0;
      v.forEach(([m, d, s = 1, vol = 0.16]) => { if (m) tone(m, t, Math.max(0.12, d * b * s), vol, "seq"); t += d * b; });
    });
    for (let i = 0; i < +rh.dataset.beats; i++) click(t0 + i * b, i % +rh.dataset.bar === 0, "seq");
  });
  const r = e.target.closest("[data-rhythm]");
  if (r) { stopSounds("seq"); } if (r) whenRunning(c => { // one dotted-quarter beat at 40 bpm, plus the next downbeat
    const n = +r.dataset.rhythm, beat = 60 / 40, t = c.currentTime + 0.06;
    for (let i = 0; i < n; i++) { click(t + (i * beat) / n, i === 0, "seq"); tone(r.dataset.rhythm === "3" ? 73 : 77, t + (i * beat) / n, 0.4, 0.08, "seq"); }
    click(t + beat, true, "seq");
  });
});

// ---------- 9/8 metronome (compound meter lesson) ----------
let timer, step = 0, beats = [];
function setupMetro() {
  const meter = document.getElementById("meter"); beats = [];
  for (let g = 0; g < 3; g++) {
    const grp = document.createElement("div"); grp.className = "grp";
    for (let k = 0; k < 3; k++) { const d = document.createElement("span"); d.className = "beat" + (k === 0 ? " strong" : ""); grp.append(d); beats.push(d); }
    meter.append(grp);
  }
  const bpm = document.getElementById("bpm"), play = document.getElementById("play");
  bpm.oninput = () => { document.getElementById("bpmv").textContent = bpm.value; if (timer) { stopMetro(); startMetro(); } };
  play.onclick = () => timer ? stopMetro() : startMetro();
}
function tick() {
  beats.forEach(b => b.classList.remove("lit")); beats[step].classList.add("lit");
  click(ac().currentTime, step % 3 === 0); step = (step + 1) % 9;
}
function startMetro() {
  const bpm = document.getElementById("bpm"), play = document.getElementById("play");
  step = 0; tick(); timer = setInterval(tick, 60000 / bpm.value / 3);
  play.textContent = "■ Detener"; play.classList.add("on");
}
function stopMetro() {
  clearInterval(timer); timer = null;
  const play = document.getElementById("play");
  if (play) { play.textContent = "▶ Metrónomo 9/8"; play.classList.remove("on"); }
}
renderLessons();

// Practice strategies catalog
if (window.DATA && document.getElementById("techs"))
  document.getElementById("techs").innerHTML = window.DATA.practice.map(st => `<details class="tech"><summary><span class="tn">${esc(st.name)}</span><span class="tf">${esc(st.aka)}</span></summary>
    <p>${esc(st.why)}</p><ol>${st.steps.map(t => `<li>${esc(t)}</li>`).join("")}</ol></details>`).join("");
