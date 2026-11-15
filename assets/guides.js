// Practical study guides for the practice page, rendered as collapsible cards.
const GUIDES = [
  {
    title: "Técnica", sub: "Postura, peso del brazo y cómo evitar lesiones",
    intro: "La buena técnica es la forma más económica de producir el sonido que quieres. Si algo se siente tenso, casi siempre hay una forma más fácil.",
    items: [
      "<b>Altura del banco:</b> siéntate de modo que los antebrazos queden más o menos horizontales al teclado, con el codo a la altura de las teclas o un poco por encima.",
      "<b>Distancia:</b> siéntate en la mitad delantera del banco, con los pies apoyados en el suelo. Con los brazos relajados, los nudillos deben llegar a las teclas sin estirar la espalda ni pegar los codos al cuerpo.",
      "<b>Espalda y hombros:</b> espalda erguida pero no rígida, ligeramente inclinada hacia el teclado. Los hombros, abajo y sueltos.",
      "<b>Peso del brazo:</b> el sonido nace del peso del brazo que se transfiere a la tecla, no de empujar con los dedos. Deja caer el brazo sobre una nota y siente cómo el dedo solo lo sostiene.",
      "<b>Muñeca flexible:</b> la muñeca acompaña el movimiento y nunca se bloquea. Comprueba en los pasajes rápidos que puedes moverla suavemente arriba y abajo.",
      "<b>Dedos redondeados:</b> mano en forma de bóveda natural, como si sostuvieras una pelota pequeña; toca con la yema y evita que se doble la última falange.",
      "<b>Digitación:</b> elige una digitación pronto, escríbela en la partitura y respétala siempre. Busca la que permita mantener la mano quieta el mayor tiempo posible y pasa el pulgar por debajo con anticipación en escalas y arpegios.",
      "<b>Pedal:</b> el pedal de resonancia se cambia justo después de tocar el acorde nuevo (pedal sincopado): suelta y vuelve a pisar mientras los dedos sostienen las notas. Deja que el oído decida cuánto pedal usar.",
      "<b>Calentamiento:</b> empieza con 5 a 10 minutos de material lento y cómodo: escalas, arpegios o una pieza fácil, a volumen moderado.",
      "<b>Prevención:</b> si sientes dolor, entumecimiento u hormigueo, para. Descansa, revisa la postura y no sigas tocando sobre el dolor. Si persiste, consulta a un profesional de la salud.",
    ],
  },
  {
    title: "Lectura a primera vista", sub: "Leer con fluidez material nuevo",
    intro: "La lectura mejora con volumen: mucho material fácil, a diario, sin detenerse.",
    items: [
      "<b>Material más fácil que tu repertorio:</b> dos o tres niveles por debajo de lo que estudias. El objetivo es fluidez, no resolver dificultades.",
      "<b>Antes de empezar, 30 segundos de análisis:</b> armadura, compás, tempo, cambios de clave, patrones que se repiten y los pasajes que parecen difíciles.",
      "<b>Nunca te detengas:</b> mantén el pulso aunque falles notas. Si hace falta, simplifica: toca solo la melodía y el bajo, o solo la primera nota de cada compás.",
      "<b>Lee por intervalos:</b> mira si la nota siguiente sube o baja, y cuánto (2ª, 3ª, 5ª), en lugar de nombrar cada nota.",
      "<b>Usa notas guía:</b> Do central, Sol en clave de Sol (segunda línea) y Fa en clave de Fa (cuarta línea). Desde ellas encuentras cualquier nota por intervalos.",
      "<b>Mira hacia adelante:</b> los ojos van al menos un pulso por delante de las manos. No mires el teclado; aprende a ubicarte con el tacto.",
      "<b>Poco y a diario:</b> de 10 a 15 minutos diarios rinden mucho más que una sesión larga a la semana. El entrenador de notas de arriba es un buen calentamiento.",
    ],
  },
  {
    title: "Cómo practicar", sub: "Sacar más de cada minuto",
    intro: "Lo que importa no es cuántas horas tocas, sino con qué atención.",
    items: [
      "<b>Práctica deliberada:</b> antes de empezar, define un objetivo concreto (por ejemplo, «compases 12 a 16, mano izquierda, sin saltos de tiempo»). Trabaja justo en el límite de lo que puedes hacer.",
      "<b>Despacio:</b> estudia a un tempo en el que todo salga correcto y relajado. La velocidad llega después; lo que repites mal, lo aprendes mal.",
      "<b>Regla de tres veces:</b> un pasaje está listo para subir el tempo cuando sale bien tres veces seguidas. Si fallas, el contador vuelve a cero.",
      "<b>Práctica espaciada:</b> repasar un pasaje en varios días fija mejor que muchas repeticiones en un solo día.",
      "<b>Práctica intercalada:</b> alterna varios pasajes u obras en la misma sesión en lugar de repetir uno solo durante una hora.",
      "<b>Grábate:</b> escuchar una grabación revela detalles de ritmo, balance y pedal que mientras tocas no percibes.",
      "<b>Bloques cortos:</b> trabaja de 20 a 30 minutos con plena concentración y descansa 5. Cuando notes que repites sin escuchar, cambia de tarea o para.",
    ],
  },
  {
    title: "Memorización", sub: "Clave para un recital de dieciséis obras",
    intro: "Una memoria fiable combina varios tipos de memoria, para que si uno falla otro te sostenga.",
    items: [
      "<b>Auditiva:</b> debes poder cantar o escuchar mentalmente la obra completa.",
      "<b>Cinestésica (de los dedos):</b> la que se forma con la repetición. Es rápida pero frágil bajo nervios, así que no confíes solo en ella.",
      "<b>Visual:</b> recuerda cómo se ve la página y cómo se ven las manos en el teclado.",
      "<b>Analítica:</b> conoce la forma, las tonalidades, los acordes y dónde se repiten o cambian los temas. Es la más sólida.",
      "<b>Por secciones:</b> memoriza de frase en frase y luego encadena. Empieza a veces por la última sección, para que el final no sea siempre lo menos trabajado.",
      "<b>Puntos de partida:</b> marca en cada obra varios lugares (inicios de sección o de frase) desde donde puedas arrancar sin dudar. Practica empezar desde cualquiera de ellos.",
      "<b>Prueba lejos del piano:</b> repasa la obra mentalmente, con la partitura cerrada, nota por nota o mano por mano. Si te pierdes, ahí falta memoria analítica.",
      "<b>Mantenimiento:</b> con dieciséis obras, rota los repasos: toca de memoria cada obra al menos una o dos veces por semana, aunque estés aprendiendo otras.",
    ],
  },
  {
    title: "Preparación para el escenario", sub: "Nervios, ensayos y el día del concierto",
    intro: "Los nervios son normales y no desaparecen; lo que cambia es tu preparación para tocar con ellos.",
    items: [
      "<b>Respiración:</b> antes de salir y antes de empezar, respira lento: exhala más largo de lo que inhalas. Ayuda a bajar el pulso y a soltar los hombros.",
      "<b>Rutina:</b> repite siempre la misma secuencia antes de tocar: ajustar el banco, colocar las manos, pensar el tempo de los primeros compases y empezar.",
      "<b>Conciertos de prueba:</b> toca el programa para una o dos personas, de principio a fin, sin parar. Aumenta el público poco a poco.",
      "<b>Graba ensayos completos:</b> tocar para una grabadora produce una presión parecida a la del escenario y te da información honesta.",
      "<b>Plan para los errores:</b> si fallas, sigue. Si te pierdes, salta al siguiente punto de partida y continúa sin mostrarlo. Ensaya esto a propósito.",
      "<b>La semana anterior:</b> no aprendas nada nuevo. Haz ensayos completos a tempo y repasos lentos con partitura.",
      "<b>El día del concierto:</b> duerme bien, come algo ligero, calienta con material lento y no toques el programa entero. Llega con tiempo para probar el piano y el banco.",
    ],
  },
];

if (typeof document !== "undefined") {
  document.getElementById("guides").innerHTML = GUIDES.map(g => `
    <details class="tech">
      <summary><span class="tn">${g.title}</span><span class="tf">${g.sub}</span></summary>
      <p>${g.intro}</p>
      <ul class="g-list">${g.items.map(i => `<li>${i}</li>`).join("")}</ul>
    </details>`).join("");
}
