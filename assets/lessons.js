// ---------- Music data ----------
const SC = [61, 63, 65, 66, 68, 70, 72, 73, 75, 77, 78, 80, 82]; // Db major, Db4..Bb5
const triad = i => [SC[i], SC[i + 2], SC[i + 4]];
const DEG = [["I", "Re♭", "mayor"], ["ii", "Mi♭m", "menor"], ["iii", "Fam", "menor"], ["IV", "Sol♭", "mayor"],
  ["V", "La♭", "mayor"], ["vi", "Si♭m", "menor"], ["vii°", "Do°", "disminuido"]];

const P = (label, seq, sub = "", opts = {}) =>
  `<button type="button" class="tag" data-play='${JSON.stringify(seq)}' data-gap="${opts.gap ?? 1.1}" data-arp="${opts.arp ?? 0}" data-show='${JSON.stringify(opts.show ?? seq.flat())}'>${label}${sub ? `<small>${sub}</small>` : ""}</button>`;
const score = html => `<div class="score"><span class="eyebrow">En tu partitura</span><p>${html}</p></div>`;

function circleSvg() {
  const keys = ["Do", "Sol", "Re", "La", "Mi", "Si", "Fa♯/Sol♭", "Re♭", "La♭", "Mi♭", "Si♭", "Fa"];
  const acc = ["0", "1♯", "2♯", "3♯", "4♯", "5♯", "6", "5♭", "4♭", "3♭", "2♭", "1♭"];
  const hi = { "Re♭": "#284B63", "La♭": "#3C6E71", "Fa♯/Sol♭": "#3C6E71" };
  let out = `<circle cx="150" cy="150" r="104" fill="none" stroke="var(--line)" stroke-width="1.5"/>`;
  keys.forEach((k, i) => {
    const a = (i / 12) * 2 * Math.PI - Math.PI / 2, x = 150 + 104 * Math.cos(a), y = 150 + 104 * Math.sin(a);
    const c = hi[k];
    out += `<circle cx="${x}" cy="${y}" r="22" fill="${c || "var(--surface)"}" stroke="${c || "var(--line)"}"/>`;
    out += `<text x="${x}" y="${y - 1}" text-anchor="middle" font-size="${k.length > 4 ? 7.5 : 11}" font-weight="600" font-family="Poppins,sans-serif" fill="${c ? "#ffffff" : "var(--fg)"}">${k}</text>`;
    out += `<text x="${x}" y="${y + 11}" text-anchor="middle" font-size="8" font-family="Poppins,sans-serif" fill="${c ? "#ffffff" : "var(--muted)"}">${acc[i]}</text>`;
  });
  out += `<text x="150" y="146" text-anchor="middle" font-size="12" font-family="Poppins,sans-serif" fill="var(--muted)">Círculo</text><text x="150" y="162" text-anchor="middle" font-size="12" font-family="Poppins,sans-serif" fill="var(--muted)">de quintas</text>`;
  return `<svg class="circle" viewBox="0 0 300 300" role="img" aria-label="Círculo de quintas con Re bemol, La bemol y Sol bemol resaltados">${out}</svg>`;
}

// ---------- Lessons ----------
const LESSONS = [
  { t: "Tonalidad y armadura",
    html: () => `
      <p>Una <b>tonalidad</b> es un centro de gravedad: una nota principal, la <b>tónica</b>, a la que la música quiere volver, y una escala de siete notas alrededor de ella.</p>
      <p>La <b>armadura</b> son las alteraciones al inicio de cada pentagrama. Valen para toda la obra, salvo que aparezca una alteración accidental. Re♭ mayor tiene cinco bemoles, siempre en este orden: <b>Si♭, Mi♭, La♭, Re♭, Sol♭</b>.</p>
      <p>Regla rápida para tonalidades con bemoles: el <b>penúltimo bemol</b> de la armadura es el nombre de la tonalidad mayor.</p>
      <p>Toda escala mayor sigue el mismo patrón de distancias: <b>tono, tono, semitono, tono, tono, tono, semitono</b>.</p>
      <div class="tags">${P("Escala de Re♭ mayor", SC.slice(0, 8).map(m => [m]), "subida", { gap: 0.35 })}${P("Acorde de tónica", [[61, 65, 68]], "Re♭ · Fa · La♭")}</div>
      <div data-kbd>${kbd(SC.slice(0, 8))}</div>
      <p class="muted">Dos datos más: <b>Si♭ menor</b> comparte esta misma armadura (es su relativa menor), y <b>Do♯ mayor</b> suena idéntica pero se escribe con siete sostenidos. Leer cinco bemoles es más simple.</p>
      ${score("Los cinco bemoles están al inicio de cada sistema, en los dos pentagramas. Las teclas negras son exactamente esos cinco bemoles; Fa y Do son las únicas blancas.")}`,
    quiz: { q: "Con la regla del penúltimo bemol: ¿qué tonalidad mayor tiene cuatro bemoles (Si♭, Mi♭, La♭, Re♭)?",
      o: ["La♭ mayor", "Re♭ mayor", "Mi♭ mayor"], a: 0, why: "El penúltimo de Si♭, Mi♭, La♭, Re♭ es La♭." } },

  { t: "Círculo de quintas",
    html: () => `
      <p>El <b>círculo de quintas</b> ordena las doce tonalidades mayores. Cada paso en el sentido del reloj sube una quinta y suma un sostenido; cada paso en sentido contrario suma un bemol.</p>
      <p>Las tonalidades vecinas comparten casi todas las notas. Por eso modular a una vecina suena natural.</p>
      ${circleSvg()}
      <p>Los dos vecinos de Re♭ son <b>La♭</b> (cuatro bemoles) y <b>Sol♭</b> (seis bemoles). No es casualidad: La♭ es el <b>V grado</b> de Re♭ y Sol♭ es el <b>IV grado</b>. Los acordes más importantes de una tonalidad son sus vecinos en el círculo.</p>
      <div class="tags">${P("I → IV → V → I", [[61, 65, 68], [66, 70, 73], [68, 72, 75], [61, 65, 68, 73]], "Re♭ · Sol♭ · La♭ · Re♭")}</div>
      ${score("Cuando una sección parece cambiar de color sin perder el hilo, busca si la música se apoya en La♭ o en Sol♭.")}`,
    quiz: { q: "¿Qué dos vecinas de Re♭ en el círculo son su IV y su V grado?",
      o: ["Sol♭ y La♭", "Mi♭ y Si♭", "Do y Mi♭"], a: 0, why: "Sol♭ es el IV grado y La♭ es el V. Las dos están al lado de Re♭ en el círculo." } },

  { t: "Intervalos: la tercera",
    html: () => `
      <p>Un <b>intervalo</b> es la distancia entre dos notas. Se cuenta por nombres de nota, incluyendo las dos puntas: de Re♭ a Fa pasas por Re, Mi y Fa, así que es una <b>tercera</b>.</p>
      <p>El número no alcanza: hay que contar semitonos. Una <b>tercera mayor</b> tiene 4 semitonos y suena luminosa. Una <b>tercera menor</b> tiene 3 y suena más oscura.</p>
      <div class="tags">${P("Tercera mayor", [[61, 65]], "Re♭ → Fa · 4 semitonos")}${P("Tercera menor", [[65, 68]], "Fa → La♭ · 3 semitonos")}${P("Mayor y menor seguidas", [[61, 65], [65, 68]], "compara")}</div>
      <div data-kbd>${kbd([61, 65])}</div>
      <div class="scroll"><table class="t"><tr><th>Desde</th><th>Tercera</th><th>Tipo</th></tr>
        ${SC.slice(0, 7).map((m, i) => `<tr><td>${nm(m)}</td><td>${nm(m)} – ${nm(SC[i + 2])}</td><td>${SC[i + 2] - m === 4 ? "mayor" : "menor"}</td></tr>`).join("")}
      </table></div>
      ${score("Lo primero que suena en la obra, en la mano izquierda, es <b>Fa–La♭</b>: una tercera menor. La mano derecha avanza en terceras paralelas en los compases 1 a 4. Al moverse dentro de la escala, esas terceras alternan entre mayores y menores sin que tengas que pensarlo.")}`,
    quiz: { ear: true, q: "Entrena el oído: escucha una tercera al azar y di si es mayor o menor.", o: ["Mayor", "Menor"] } },

  { t: "Acordes de la tonalidad",
    html: () => `
      <p>Un <b>acorde tríada</b> son tres notas apiladas en terceras: la fundamental, la tercera y la quinta. Si armas una tríada sobre cada nota de la escala obtienes los siete acordes de la tonalidad.</p>
      <p>Se nombran con números romanos: <b>mayúscula</b> para acordes mayores, <b>minúscula</b> para menores y <b>°</b> para el disminuido. El patrón es el mismo en todas las tonalidades mayores: <b>M m m M M m dim</b>.</p>
      <div class="tags">${DEG.map((d, i) => P(`${d[0]} · ${d[1]}`, [triad(i)], d[2], { arp: 0.12 })).join("")}</div>
      <div data-kbd>${kbd(triad(0))}</div>
      <p>Las notas de un acorde se pueden ordenar distinto. Si la nota más grave no es la fundamental, el acorde está <b>invertido</b>: suena más liviano y menos asentado.</p>
      <div class="tags">${P("I en estado fundamental", [[61, 65, 68]], "Re♭ abajo")}${P("I en primera inversión", [[65, 68, 73]], "Fa abajo")}</div>
      ${score("En el compás 1 las notas son Fa, La♭ y Re♭, pero el bajo es Fa. Es el acorde de tónica en primera inversión: la obra empieza flotando, sin apoyarse en la tónica.")}`,
    quiz: { q: "En cualquier tonalidad mayor, ¿de qué tipo es el acorde del VI grado?",
      o: ["Mayor", "Menor", "Disminuido"], a: 1, why: "El patrón M m m M M m dim pone un acorde menor en el VI grado. En Re♭ es Si♭ menor." } },

  { t: "Séptimas y color",
    html: () => `
      <p>Si a una tríada le sumas otra tercera arriba, obtienes un <b>acorde de séptima</b> de cuatro notas. Según el tipo de séptima, el acorde gana tensión o gana color.</p>
      <p><b>V7, dominante con séptima</b> (La♭ · Do · Mi♭ · Sol♭): es el acorde más tenso de la tonalidad y pide resolver a la tónica.</p>
      <p><b>Imaj7, mayor con séptima mayor</b> (Re♭ · Fa · La♭ · Do): no pide resolver. Suena suave, abierto y algo nostálgico. Debussy, el jazz y mucha música de anime usan este color, así que lo vas a reconocer en el resto de tu programa.</p>
      <p><b>add9, novena agregada</b> (Re♭ · Fa · La♭ · Mi♭): le agrega brillo a un acorde mayor.</p>
      <div class="tags">${P("Re♭ (tríada)", [[61, 65, 68]], "punto de partida")}${P("V7 → I", [[68, 72, 75, 78], [61, 65, 68, 73]], "tensión que resuelve")}${P("Re♭maj7", [[61, 65, 68, 72]], "color")}${P("Re♭add9", [[61, 65, 68, 75]], "brillo")}</div>
      <div data-kbd>${kbd([61, 65, 68, 72])}</div>
      ${score("Debussy agrega notas para dar color, no tensión. Cuando un acorde te suene brillante o difuso, cuenta sus notas: probablemente tenga séptima o novena.")}`,
    quiz: { q: "¿Qué nota le agregas a Re♭ mayor para formar Re♭maj7?",
      o: ["Do", "Do♭", "Mi♭"], a: 0, why: "La séptima mayor de Re♭ es Do, a un semitono de la tónica. Con Do♭ obtienes Re♭7, un acorde de dominante." } },

  { t: "Funciones y cadencias",
    html: () => `
      <p>Cada acorde cumple una <b>función</b>, como los personajes de una historia:</p>
      <div class="scroll"><table class="t"><tr><th>Función</th><th>Acordes</th><th>Sensación</th></tr>
        <tr><td>Tónica</td><td>I, vi, iii</td><td>Reposo, estar en casa</td></tr>
        <tr><td>Subdominante</td><td>IV, ii</td><td>Alejarse, salir de casa</td></tr>
        <tr><td>Dominante</td><td>V, V7, vii°</td><td>Tensión, ganas de volver</td></tr></table></div>
      <p>Una <b>cadencia</b> es la forma en que termina una frase, como la puntuación al final de una oración.</p>
      <div class="tags">
        ${P("Auténtica · V7 → I", [[68, 72, 75, 78], [61, 65, 68, 73]], "punto final")}
        ${P("Plagal · IV → I", [[66, 70, 73], [65, 68, 73]], "un amén suave")}
        ${P("Semicadencia · I → V", [[61, 65, 68], [68, 72, 75]], "coma, queda en el aire")}
        ${P("Rota · V7 → vi", [[68, 72, 75, 78], [70, 73, 77]], "sorpresa")}
      </div>
      <div data-kbd>${kbd([68, 72, 75, 78])}</div>
      ${score("Debussy evita a menudo la cadencia auténtica fuerte. Escucha el final de la obra: la música llega a Re♭ apagándose (morendo), sin un empujón de V7 a I. Compáralo con el final de las variaciones de Mozart, la obra 01 de tu programa.")}`,
    quiz: { q: "Una frase termina en un acorde de La♭ mayor y queda en el aire. ¿Qué cadencia es?",
      o: ["Semicadencia", "Auténtica", "Plagal"], a: 0, why: "Termina en el V grado (La♭), así que es una semicadencia: una coma, no un punto final." } },

  { t: "Ritmo: 9/8 y dosillos",
    html: () => `
      <p>Los compases pueden ser <b>simples</b> o <b>compuestos</b>. En 3/4 hay tres pulsos y cada uno se divide en <b>dos</b> corcheas. En 9/8 también hay tres pulsos, pero cada uno se divide en <b>tres</b> corcheas: el pulso es la negra con puntillo.</p>
      <div class="meter" id="meter"></div>
      <div class="metro">
        <button class="btn" id="play" type="button">▶ Metrónomo 9/8</button>
        <label for="bpm" class="mono">♩. = <span id="bpmv">40</span></label>
        <input type="range" id="bpm" min="30" max="66" value="40">
      </div>
      <p>Un <b>dosillo</b> son dos notas que ocupan el lugar de tres. Dentro de un pulso de 9/8 eso significa dos notas más largas, en vez de tres.</p>
      <div class="tags">
        <button type="button" class="tag" data-rhythm="3">Un pulso en tres<small>lo normal en 9/8</small></button>
        <button type="button" class="tag" data-rhythm="2">Un pulso en dosillo<small>se estira</small></button>
      </div>
      ${score("En el compás 3 hay corcheas con un <b>2</b> encima: son dosillos. Hacen que la melodía respire más lenta que el acompañamiento, como si flotara sobre el pulso. Cuenta «1-y-a 2-y-a 3-y-a» y toca el dosillo «1 — y».")}`,
    after: setupMetro,
    quiz: { q: "En 9/8, ¿cuántas corcheas entran en cada pulso?", o: ["3", "2", "9"], a: 0,
      why: "Son nueve corcheas en tres pulsos, así que cada pulso (la negra con puntillo) tiene tres." } },

  { t: "Notas de color y forma",
    html: () => `
      <p>No todas las notas pertenecen al acorde que está sonando. Estas <b>notas extrañas al acorde</b> son las que le dan vida a la melodía:</p>
      <div class="scroll"><table class="t"><tr><th>Tipo</th><th>Qué hace</th></tr>
        <tr><td>De paso</td><td>Une dos notas del acorde por grado conjunto.</td></tr>
        <tr><td>Bordadura</td><td>Sale de una nota del acorde y vuelve a ella.</td></tr>
        <tr><td>Retardo</td><td>Una nota del acorde anterior queda ligada y resuelve tarde.</td></tr>
        <tr><td>Cromática</td><td>No pertenece a la escala. Tiene una alteración accidental.</td></tr></table></div>
      <div class="tags">${P("Sol♮ contra La♭", [[67, 68]], "choque de semitono")}${P("Bordadura cromática", [[68], [67], [68]], "La♭ · Sol♮ · La♭", { gap: 0.45 })}</div>
      <div data-kbd>${kbd([67, 68])}</div>
      <p><b>La forma.</b> La obra es <b>ternaria</b>: A (compases 1–26, el tema), B (27–50, arpegios y clímax) y A′ (51–72, el tema vuelve transformado, con coda). Puedes verlo en el <a href="pieza.html?id=02">mapa de Clair de Lune</a>.</p>
      <div class="scroll"><table class="t"><tr><th>Indicación</th><th>Significado</th></tr>
        <tr><td>Andante très expressif</td><td>Andando, muy expresivo</td></tr>
        <tr><td>pp · con sordina</td><td>Pianissimo. Se suele tocar con el pedal izquierdo (una corda).</td></tr>
        <tr><td>peu à peu cresc. et animé</td><td>Poco a poco más fuerte y más animado</td></tr>
        <tr><td>Un poco mosso</td><td>Un poco más movido</td></tr>
        <tr><td>En animant</td><td>Animándose, acelerando</td></tr>
        <tr><td>Calmato</td><td>Calmado</td></tr>
        <tr><td>Tempo I</td><td>Volver al tempo inicial</td></tr>
        <tr><td>morendo</td><td>Muriendo: apagándose hasta desaparecer</td></tr></table></div>
      ${score("En el compás 2 la mano izquierda toca <b>Sol♮</b> junto a La♭. El becuadro lo saca de la escala. Las ligaduras de los compases 1 a 4 prolongan notas sobre la armonía siguiente, como pequeños retardos.")}`,
    quiz: { q: "El Sol♮ del compás 2, ¿qué tipo de nota es?", o: ["Cromática", "Una nota de la escala", "La tónica"], a: 0,
      why: "La escala de Re♭ tiene Sol♭. El becuadro la saca de la escala, así que es una nota cromática." } },
];

// ---------- Lesson UI ----------
let lessonsDone = store.get("pc-lessons", []);
let cur = Math.min(store.get("pc-lesson", 0), LESSONS.length - 1);
const lnav = document.getElementById("lnav"), lessonEl = document.getElementById("lesson");

function renderLessons() {
  stopMetro();
  lnav.innerHTML = LESSONS.map((l, i) =>
    `<button type="button" class="lbtn${lessonsDone.includes(i) ? " done" : ""}" aria-current="${i === cur}" data-i="${i}"><span class="mono">${lessonsDone.includes(i) ? "✓" : String(i + 1).padStart(2, "0")}</span>${l.t}</button>`).join("");
  const L = LESSONS[cur];
  lessonEl.innerHTML = `<span class="eyebrow">Lección ${cur + 1} de ${LESSONS.length}</span><h3 style="font-size:1.7rem">${L.t}</h3>
    <div class="body">${L.html()}</div>
    <div class="quiz" id="quiz"></div>
    <div class="row"><button class="btn" type="button" id="prev" ${cur === 0 ? "disabled" : ""}>← Anterior</button>
    <button class="btn" type="button" id="next" ${cur === LESSONS.length - 1 ? "disabled" : ""}>Siguiente →</button></div>`;
  L.after?.();
  renderQuiz(L.quiz);
  document.getElementById("lbar").style.width = (lessonsDone.length / LESSONS.length * 100) + "%";
  document.getElementById("ltext").textContent = `${lessonsDone.length} de ${LESSONS.length} lecciones`;
}
function go(i) { cur = i; store.set("pc-lesson", i); renderLessons(); lessonEl.scrollIntoView({ block: "nearest" }); }
function complete() {
  if (!lessonsDone.includes(cur)) { lessonsDone = [...lessonsDone, cur]; store.set("pc-lessons", lessonsDone); }
  document.getElementById("lbar").style.width = (lessonsDone.length / LESSONS.length * 100) + "%";
  document.getElementById("ltext").textContent = `${lessonsDone.length} de ${LESSONS.length} lecciones`;
  lnav.children[cur].classList.add("done"); lnav.children[cur].querySelector(".mono").textContent = "✓";
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
  const p = e.target.closest("[data-play]");
  if (p) {
    lessonEl.querySelectorAll(".tag.sel").forEach(t => t.classList.remove("sel")); p.classList.add("sel");
    playSeq(JSON.parse(p.dataset.play), +p.dataset.gap, +p.dataset.arp);
    const k = lessonEl.querySelector("[data-kbd]"); if (k) k.innerHTML = kbd(JSON.parse(p.dataset.show));
  }
  const r = e.target.closest("[data-rhythm]");
  if (r) { // one dotted-quarter beat at 40 bpm, plus the next downbeat
    const n = +r.dataset.rhythm, beat = 60 / 40, t = ac().currentTime + 0.05;
    for (let i = 0; i < n; i++) { click(t + (i * beat) / n, i === 0); tone(r.dataset.rhythm === "3" ? 73 : 77, t + (i * beat) / n, 0.4, 0.08); }
    click(t + beat, true);
  }
});

// ---------- 9/8 metronome (lesson 7) ----------
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
