# Piano concierto: decisiones del proyecto

Resumen de todo lo decidido hasta el 15 de noviembre de 2026 para el recital *Piano concierto* y su sitio de estudio. La tabla de la ruta (sección 3), las sesiones (sección 4) y las guías de ejercicios (sección 5) se generan desde los datos con `node tools/build-data.mjs`: no las edites a mano.

## 1. El concierto

| Decisión | Valor |
|---|---|
| Título | *Piano concierto* |
| Fecha del concierto | 1 de diciembre de 2027 |
| Inicio del estudio | 16 de noviembre de 2026 (54 semanas en total) |
| Formato | Recital de piano solo, 16 obras, aprendidas de forma autodidacta |
| Orden del programa | De Mozart al anime contemporáneo: abre con las Variaciones K. 265 y cierra con *Battleground* |

**Objetivos** (redactados como borrador y editables en `data/concert.json`):

1. Tocar en vivo el programa completo de dieciséis obras el 1 de diciembre de 2027.
2. Aprender de forma autodidacta, con una base técnica sólida (Hanon y Czerny Op. 599) y entendiendo la teoría de cada obra.
3. Desarrollar sonido, pedal y control dinámico en estilos muy distintos.
4. Llegar al concierto con al menos dos ensayos generales grabados del programa completo.

**Calendario general:**

| Etapa | Fechas | Duración |
|---|---|---|
| Aprendizaje de las 16 obras | 16/11/2026 → 23/08/2027 | 40 semanas |
| Pulido (cada obra tiene 3 semanas de pulido al terminar de aprenderla) | hasta 13/09/2027 | 3 semanas |
| Colchón para imprevistos | 13/09/2027 → 04/10/2027 | 3 semanas |
| Ensayos generales del programa completo | 04/10/2027 → 01/12/2027 | 8 semanas |

## 2. Repertorio

El orden de la tabla es el orden del concierto. La dificultad (1 a 10) es una estimación hecha a partir de la partitura.

| # | Obra | Compositor | Tonalidad | Compás | Tempo | Dificultad | Págs. |
|---|---|---|---|---|---|---|---|
| 01 | 12 Variaciones sobre «Ah, vous dirai-je, Maman» K. 265 | W. A. Mozart | Do mayor | 2/4 (3/4 en la Var. XII) | Adagio (Var. XI), Allegro (Var. XII) | 7 | 9 |
| 02 | Clair de Lune | Claude Debussy | Re♭ mayor | 9/8 | Andante très expressif | 8 | 5 |
| 03 | Energy Flow | Ryuichi Sakamoto | La menor / Do mayor | 4/4 | Moderato | 5 | 4 |
| 04 | A Flower Is Not a Flower | Ryuichi Sakamoto | Re menor | 4/4 con compases de 3/4 | Largo, molto rubato | 4 | 2 |
| 05 | Merry Christmas Mr. Lawrence | Ryuichi Sakamoto | Re♭ mayor / Si♭ menor | 12/8 → 4/4 | Lento – Andante – più mosso – Lento | 7 | 5 |
| 06 | The Sixth Station | Joe Hisaishi (arr. Torby Brand) | Mi menor | 4/4 | ♩ ≈ 75 | 4 | 3 |
| 07 | Theme of Love | Nobuo Uematsu (arr. Shiro Sato) | Do mayor / La menor | 4/4 | ♩ = 88 | 6 | 4 |
| 08 | Lit | Kensuke Ushio (arr. Torby Brand) | Mi mayor | 3/4 | ♩ = 70 – 96 – 63 | 5 | 2 |
| 09 | My Lie | Masaru Yokoyama (arr. Torby Brand) | Do mayor | 6/8 | ♩ = 48 | 4 | 2 |
| 10 | Lie and Truth | Masaru Yokoyama (arr. Torby Brand) | Fa♯ mayor | 3/4 | ♩ = 75 | 7 | 4 |
| 11 | Again | Masaru Yokoyama (arr. Torby Brand) | Fa mayor | 4/4 | ♩ = 94 | 6 | 3 |
| 12 | In the Palace (Lamentoso – Agitato) | Yoshihisa Hirano (arr. «DH») | Re menor | 2/4 (3/4 desde el c. 73) | ♩ = 74; Agitato | 9 | 6 |
| 13 | Vague Reasons (Nanami's Theme) | Yoshimasa Terui | Do mayor | 4/4 | ♩ = 80 | 7 | 4 |
| 14 | If I Am With You | Yoshimasa Terui | Do mayor | 3/4 | ♩ = 130 | 4 | 3 |
| 15 | Small Village | Yutaka Yamada | Re mayor / Si menor | 3/4 | Freely; ♩ = 120 | 7 | 4 |
| 16 | Battleground | Yutaka Yamada | Re menor | 4/4 | ♩ = 172 | 6 | 8 |

Las obras que quedaron fuera están en la carpeta `Descartadas`, fuera del repositorio.

## 3. Ruta de aprendizaje

**Decisión:** el orden no va simplemente de lo fácil a lo difícil. Se estudian **dos obras a la vez en dos carriles**:

- **Carril de fondo:** la obra exigente del momento.
- **Carril ligero:** una obra más accesible que corre en paralelo y mantiene la motivación.

Reglas que se usaron para armar la ruta:

1. Empezar con las dos obras más fáciles para construir la rutina diaria.
2. Antes de cada obra difícil, aprender otra que ya trabaje su técnica (por ejemplo, *Small Village* introduce el 2 contra 3 antes de *Clair de Lune*).
3. Que dos obras simultáneas no sumen demasiada dificultad (la suma de dificultades de cada par se mantiene en 15 o menos).
4. Que la obra más difícil (*In the Palace*) quede aprendida con al menos 12 semanas de margen antes de los ensayos. Termina el 24/05/2027, 19 semanas antes.
5. Dejar 3 semanas de colchón al final.

La duración de cada obra es proporcional a su dificultad más su número de páginas.

<!-- generated:route -->
| # | Obra | Carril | Empieza | Aprendida | Semanas | Por qué en este lugar |
|---|---|---|---|---|---|---|
| 1 | 04 · A Flower Is Not a Flower | Fondo | 16/11/2026 | 07/12/2026 | 3 | Dos páginas y tempo lento: la mejor obra para armar la rutina diaria y trabajar el pedal legato y el canto de la melodía sin presión técnica. |
| 2 | 09 · My Lie | Ligera | 16/11/2026 | 07/12/2026 | 3 | Corta y accesible. Presenta las terceras legato en la derecha y los acordes quebrados en la izquierda, que reaparecen en casi todo el programa. |
| 3 | 16 · Battleground | Fondo | 07/12/2026 | 18/01/2027 | 6 | Primera obra de fondo: ocho páginas de dificultad media con octavas, notas repetidas y escalas. Construye la resistencia y la técnica de muñeca que pide In the Palace. |
| 4 | 06 · The Sixth Station | Ligera | 07/12/2026 | 04/01/2027 | 4 | Suma arpegios amplios en la izquierda, trinos y síncopas en un contexto todavía accesible. Prepara el terreno para Clair de Lune. |
| 5 | 14 · If I Am With You | Ligera | 04/01/2027 | 25/01/2027 | 3 | Consolida acordes quebrados, arpegios y las primeras octavas con una obra lenta y expresiva. |
| 6 | 15 · Small Village | Fondo | 18/01/2027 | 22/02/2027 | 5 | Presenta la polirritmia de 2 contra 3 y el rubato antes de Clair de Lune, que los usa a lo largo de toda la obra. |
| 7 | 08 · Lit | Ligera | 25/01/2027 | 22/02/2027 | 4 | Dos páginas con octavas y terceras a tempo moderado: un entrenamiento corto antes de las obras con octavas más largas. |
| 8 | 02 · Clair de Lune | Fondo | 22/02/2027 | 05/04/2027 | 6 | Llega con las terceras, los arpegios amplios y el 2 contra 3 ya trabajados. Al aprenderla a mitad del plan, tiene meses para madurar antes del concierto. |
| 9 | 03 · Energy Flow | Ligera | 22/02/2027 | 29/03/2027 | 5 | Trabaja el control del sonido y el equilibrio entre las manos sobre arpegios en la izquierda, cuando ya tienes base de pedal. |
| 10 | 07 · Theme of Love (愛のテーマ) | Ligera | 29/03/2027 | 03/05/2027 | 5 | Melodía en la voz superior sobre acordes y arpegios, de dificultad media: refina el voicing y el rubato mientras el otro carril sube a las obras más exigentes. |
| 11 | 12 · In the Palace (Lamentoso – Agitato) | Fondo | 05/04/2027 | 24/05/2027 | 7 | La obra más exigente del programa. Llega después de Battleground y Clair de Lune y termina de aprenderse con meses de margen antes de los ensayos. |
| 12 | 11 · Again | Ligera | 03/05/2027 | 07/06/2027 | 5 | Síncopas, octavas y acordes quebrados a nivel medio. Mantiene el carril ligero activo sin competir con In the Palace. |
| 13 | 01 · 12 Variaciones sobre «Ah, vous dirai-je, Maman» K. 265 | Fondo | 24/05/2027 | 12/07/2027 | 7 | Doce variaciones independientes: se aprenden de a una, así que encaja bien en la parte final del plan. Las escalas y los trinos ya vienen trabajados de In the Palace. |
| 14 | 10 · Lie and Truth | Ligera | 07/06/2027 | 12/07/2027 | 5 | Retoma el 2 contra 3 con más densidad en la izquierda, cuando ya lo dominas por Small Village y Clair de Lune. |
| 15 | 05 · Merry Christmas Mr. Lawrence | Fondo | 12/07/2027 | 23/08/2027 | 6 | Cierra el carril de fondo. Es exigente, pero su material (octavas, notas repetidas, acordes) ya lo trabajaste en Battleground e In the Palace. |
| 16 | 13 · Vague Reasons (Nanami's Theme) | Ligera | 12/07/2027 | 23/08/2027 | 6 | Último estreno del carril ligero: todo lo que pide (octavas, síncopas, escalas) ya lo trabajaste en obras anteriores. |
<!-- /generated:route -->

## 4. Sesiones de estudio

### Cómo se arma cada sesión

Cada obra se divide en las secciones de su análisis, más una sesión final de «Obra completa». Cada sesión dura unos **45 minutos**:

| Bloque | Qué | Tiempo |
|---|---|---|
| Calentamiento | Un Hanon de la Parte I (n.º 1 a 20), que rota de sesión en sesión | 5 min |
| Técnica | Un Hanon de las Partes II o III elegido según la técnica que pide la sección | 8 min |
| Estudio | Un estudio de Czerny Op. 599 con la misma técnica, de un nivel acorde a la dificultad de la obra | 10 min |
| Obra | La sección del día, con las estrategias de práctica sugeridas | 18 min |
| Teoría | Un concepto de la obra para buscar en la partitura | 4 min |

Decisiones detrás de la elección de ejercicios:

- Cada sección tiene un **foco técnico** (octavas, terceras, pedal, etc.) tomado de las necesidades de la obra. El archivo `tools/plan.mjs` (`NEED_MAP`) traduce ese foco a etiquetas de Hanon y de Czerny.
- Dentro de una misma obra no se repite el mismo Hanon ni el mismo Czerny mientras haya otro que sirva.
- Nivel de Czerny según la dificultad de la obra: dificultad 1 a 4 → nivel 1; 5 a 7 → nivel 2 (o 1); 8 a 10 → nivel 3 (o 2).
- Los Hanon de escalas y arpegios se tocan **en la tonalidad de la obra** (la tabla lo indica, por ejemplo «Hanon 38 en Do mayor»).
- Ediciones usadas: Hanon *The Virtuoso Pianist* (el PDF dice portugués, pero el texto es la edición inglesa; 60 ejercicios) y Czerny *Erster Lehrmeister* Op. 599, edición Peters n.º 2402 (100 ejercicios). Las páginas de las tablas son las del PDF.

Cada obra tiene su tabla de sesiones y, debajo, la guía de cada sesión: objetivo, paso a paso, pasajes difíciles, cuándo pasar a la siguiente y el concepto de teoría. Son los mismos textos del desplegable «Cómo estudiarlo» del sitio, escritos después de revisar las partituras. Repite cada sesión los días indicados, todos los días, hasta cumplir lo que dice «Pasas a la siguiente sesión cuando». Los ejercicios de Hanon y Czerny se explican en la sección 5. Las tablas siguen el orden de la ruta.

<!-- generated:sessions -->
### 04 · A Flower Is Not a Flower

Ryuichi Sakamoto · Re menor (inferida; armadura compartida con Fa mayor) · 4/4 con compases de 3/4 intercalados · Largo, molto rubato · dificultad 4/10 · 2 pág. · se estudia del 16/11/2026 al 07/12/2026 · cada sesión dura unos 4 días

| Sesión | Sección (compases) | Foco técnico | Calentamiento | Técnica | Estudio Czerny |
|---|---|---|---|---|---|
| 1 | Tema en registro agudo (1–16) | destacar la melodía | Hanon 1 | Hanon 21 | nº 1 (pág. 3) |
| 2 | Tema en registro medio (17–33) | pedal y legato | Hanon 2 | Hanon 32 | nº 5 (pág. 4) |
| 3 | Clímax con compases alternos (34–47) | rubato | Hanon 3 | Hanon 33 | nº 11 (pág. 6) |
| 4 | Vuelta en p (48–56) | acordes plaqué | Hanon 4 | Hanon 48 | nº 8 (pág. 5) |
| 5 | Coda (57–60) | independencia de dedos | Hanon 5 | Hanon 22 | nº 2 (pág. 3) |
| 6 | Obra completa (todo) | rango dinámico | Hanon 6 | Hanon 34 | nº 3 (pág. 4) |

#### Sesión 1: Tema en registro agudo (c. 1–16)

Ejercicios: Hanon 1 (calentamiento), Hanon 21 (técnica) y Czerny nº 1. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 1–16 en p, muy lentos, dejando resonar cada acorde con segundas y con los acordes arpegiados en su sitio.

**Paso a paso:**

1. Día 1: escucha una grabación de la pieza siguiendo la partitura. Fíjate en el espacio entre las notas: el silencio y la resonancia forman parte de la música.
2. Análisis: 1♭ (Re menor o Fa mayor), 4/4, Largo, molto rubato, p. La derecha canta en el agudo con blancas con puntillo, blancas y negras; la izquierda, escrita en clave de sol, toca acordes en redondas que contienen segundas (dos notas vecinas). Hay acordes arpegiados en la izquierda en los compases 7–8 y 11 y en la derecha en el 16. En el 16 la izquierda pasa a clave de fa.
3. Digitación: en los acordes de la izquierda decide qué dedos toman las segundas (normalmente 1-2 o 2-3) y escríbelo. En la derecha, marca la digitación para unir las notas largas con las negras.
4. Manos separadas: la derecha canta con un sonido redondo, como una voz. La izquierda toca cada acorde con todas las notas a la vez y escucha cómo se apaga.
5. Manos juntas con metrónomo solo para medir: negra = 50 aproximadamente (Largo, sin número impreso). Después apágalo y deja que cada acorde suene hasta casi desaparecer antes de seguir.
6. Pedal: no hay pedal impreso. Toca primero sin él; luego pon pedal y cámbialo con cada acorde nuevo de la izquierda, despacio y escuchando.
7. Arpegios: en 7–8, 11 y 16 arpegia de abajo arriba, sin prisa, como un arpa.
8. Dinámica y rubato: p constante, con pequeños arcos en cada frase. Molto rubato significa estirar un poco las notas importantes sin perder la proporción.
9. Último día: tócalo de memoria y grábalo; escucha si los acordes se dejan sonar.

**Pasajes difíciles:**

- Compases 1–6 y 9–15: acordes con segundas en clave de sol en la izquierda. Escribe los nombres de las notas encima y tócalos en bloque varias veces antes de leer de corrido.
- Compases 7–8, 11 y 16: acordes arpegiados. Practica el arpegio lento con el pedal puesto y luego más fluido, con la nota superior más clara.

**Pasas a la siguiente sesión cuando:** Tocas 1–16 en p de memoria dejando resonar cada acorde, sin prisa y con los arpegios suaves.

**Teoría: Acordes con segundas (clusters suaves).** Dos notas vecinas tocadas juntas crean un roce que da un color moderno y difuso. No es un error: es el sello armónico de la pieza. En tu partitura: Izquierda en los compases 1–6 y 9–15.

#### Sesión 2: Tema en registro medio (c. 17–33)

Ejercicios: Hanon 2 (calentamiento), Hanon 32 (técnica) y Czerny nº 5. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 17–33 con dos volúmenes en la derecha (melodía arriba más clara que la voz interior) y la izquierda en blancas suaves.

**Paso a paso:**

1. Día 1: escucha 17–33 con la partitura. La melodía está en la voz superior de la derecha, con una voz interior en la misma mano; la izquierda, en clave de fa, toca acordes y blancas.
2. Análisis: aparecen alteraciones de paso: Do♯, Si♮, Mi♭, La♭. Rodéalas con lápiz. Hay acordes arpegiados en la izquierda en 23, 25 y 31.
3. Digitación: escribe la digitación de la derecha para sostener la melodía con 4-5 mientras 1-2 tocan la voz interior.
4. Derecha, voces por separado: toca solo la melodía cantando, después solo la voz interior muy suave, y luego juntas con dos volúmenes distintos.
5. Izquierda sola: blancas iguales y suaves, escuchando cómo se unen con el pedal.
6. Manos juntas: negra = 50 con metrónomo para medir y luego libre con rubato.
7. Pedal: cambio en cada acorde o blanca nueva de la izquierda, para que la armonía no se mezcle.
8. Dinámica: p con pequeños arcos hacia el centro de cada frase; respira al final de cada una.
9. Último día: une 1–33 sin parar.

**Pasajes difíciles:**

- Compases 20–33: la voz interior de la derecha tapa a la melodía. Toca la voz interior en silencio (solo bajando las teclas) mientras la melodía suena, y después añádela muy suave.
- Alteraciones de paso (Do♯, Si♮, Mi♭, La♭): nombra cada una en voz alta al tocar la frase lenta, hasta que salgan sin dudar.

**Pasas a la siguiente sesión cuando:** Tocas 17–33 con la melodía claramente por encima de la voz interior y sin dudar en las alteraciones.

**Teoría: Rubato.** El tempo se estira y se encoge con libertad en lugar de seguir un metrónomo. «Molto rubato» pide mucha flexibilidad, pero conservando la proporción entre las notas. En tu partitura: Indicación inicial «Largo, molto rubato».

#### Sesión 3: Clímax con compases alternos (c. 34–47)

Ejercicios: Hanon 3 (calentamiento), Hanon 33 (técnica) y Czerny nº 11. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el clímax (34–47) contando bien los compases alternos de 3/4 y 4/4, con el crescendo hasta mf y los dosillos en su sitio.

**Paso a paso:**

1. Día 1: escucha 34–47 con la partitura. Es la parte más intensa: crescendo hasta mf con acordes en negras en la derecha.
2. Análisis: el compás cambia a 3/4 en el 34, el 38 y el 42, y vuelve a 4/4 en el 36, el 39 y el 43. Hay mf en el 35, el 39–40 y el 44, y p en el 36–37 y el 41. Los dosillos (marcados con «2») están en el 43 y el 45.
3. Marca con lápiz el número de pulsos (3 o 4) encima de cada compás y cuenta en voz alta durante toda la sesión.
4. Digitación: escribe la digitación de los acordes de negras de la derecha (35, 38, 42) para no levantar la mano entre acordes.
5. Manos separadas: la derecha con peso de brazo en los acordes, la melodía arriba más clara. La izquierda, con bajos y acordes, salta a veces del grave a notas medias: marca esos saltos.
6. Manos juntas con metrónomo: negra = 50 contando los pulsos; en esta sección el rubato es menor que en el resto.
7. Pedal: cambio en cada armonía; con los acordes de negras repetidos, cambio en cada negra si la armonía cambia.
8. Dinámica: los reguladores son la guía: crece hasta mf y baja a p como está escrito. El mf sigue siendo cálido, nunca fuerte.
9. Último día: une 17–47 sin parar contando los cambios de compás.

**Pasajes difíciles:**

- Compases 34–43: los cambios de 3/4 a 4/4 te hacen alargar o acortar compases. Cuenta en voz alta con el metrónomo, mirando el número que escribiste encima.
- Compases 43 y 45: dosillos de corchea en la melodía. Tócalos con palmas contra el pulso y luego en el piano, sin que suenen como tresillos.

**Pasas a la siguiente sesión cuando:** Tocas 34–47 contando correctamente todos los cambios de compás, con un crescendo claro hasta mf y los dosillos exactos.

**Teoría: Cambio de compás.** Pasar de 4/4 a 3/4 quita un pulso al compás. La frase parece respirar de forma irregular, como el habla. En tu partitura: 3/4 en los compases 34, 38 y 42; 4/4 en 36, 39 y 43.

#### Sesión 4: Vuelta en p (c. 48–56)

Ejercicios: Hanon 4 (calentamiento), Hanon 48 (técnica) y Czerny nº 8. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar la vuelta en p (48–56) con un cambio de volumen inmediato en el 48, armonía más oscura y el acorde arpegiado del 56.

**Paso a paso:**

1. Día 1: escucha 48–56 con la partitura. p en el 48 después del diminuendo; la melodía vuelve con armonía más oscura.
2. Análisis: la izquierda toca blancas y negras con Si♮ y Si♭ en el 48–49 y saltos a notas medias en 50–52; en el 53 sostiene un acorde con Do♯; en el 56 hay un acorde arpegiado grave en la izquierda.
3. Digitación: marca la derecha en los acordes ligados de 50–51 y la izquierda en los saltos de 50–52.
4. Manos separadas: la derecha p, con las notas ligadas sostenidas. La izquierda con saltos suaves, sin acentuar la nota de llegada.
5. Manos juntas: negra = 50 para medir y luego libre. Mantén el pulso lento sin frenarte más.
6. Pedal: cambio en cada blanca o acorde de la izquierda.
7. Dinámica: baja el volumen de golpe en el 48 y mantén el p. Arpegia el acorde del 56 despacio y de abajo arriba.
8. Último día: une 34–56 sin parar.

**Pasajes difíciles:**

- Compás 48: cambio brusco de mf a p. Practica el paso del 47 al 48 aislado, respirando antes del 48.
- Compases 50–52: saltos de la izquierda del grave a notas medias. Practica solo el salto mirando la tecla de destino, con el pedal puesto.

**Pasas a la siguiente sesión cuando:** Tocas 48–56 en p estable, con la izquierda sin acentos y el acorde arpegiado del 56 suave.

**Teoría: Dosillo de corcheas.** El «2» sobre un grupo indica que esas notas se reparten de forma distinta a la habitual dentro del pulso. Aquí funciona como un pequeño adorno expresivo de la melodía. En tu partitura: Compases 43 y 45.

#### Sesión 5: Coda (c. 57–60)

Ejercicios: Hanon 5 (calentamiento), Hanon 22 (técnica) y Czerny nº 2. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar la coda (57–60) en pp con las tríadas agudas de la derecha como un solo gesto y la nota grave final con calderón.

**Paso a paso:**

1. Día 1: escucha la coda con la partitura. pp y 8va en la derecha; la izquierda baja en negras en clave de sol y luego vuelve a clave de fa.
2. Análisis: la derecha toca tríadas que bajan en el agudo, todas de la misma forma (tríadas paralelas). La izquierda desciende en negras y termina en una nota grave con calderón, tocada una octava más abajo (8 bajo el pentagrama).
3. Digitación: decide una posición fija para las tríadas de la derecha (1-3-5 o 1-2-4) y no la cambies; marca la izquierda de la línea descendente.
4. Derecha sola: practica las tríadas como un solo gesto de muñeca, sin apretar los dedos, con la nota superior apenas más clara.
5. Izquierda sola: negras iguales y suaves, bajando sin acelerar.
6. Manos juntas: lento, negra ≈ 50, y libre en el último compás.
7. Pedal: un pedal por tiempo o por armonía; en el último compás deja el pedal puesto y suéltalo cuando el sonido se apague.
8. Último día: une 48–60 y toca la coda tres veces con un final cada vez más tranquilo.

**Pasajes difíciles:**

- Compases 57–59: tríadas paralelas en 8va. Practica la forma de la mano en bloques sin sonido, luego en pp, moviendo solo la muñeca.
- Compás 60: nota grave con calderón. Lee bien la indicación de octava baja y prepara la mano antes de llegar.

**Pasas a la siguiente sesión cuando:** Tocas la coda en pp con las tríadas iguales y un final que se apaga con naturalidad.

**Teoría: Tonalidad menor y su relativo mayor.** Re menor y Fa mayor usan la misma armadura (un bemol). La música puede pasar de una a otra sin alteraciones, cambiando solo la nota que se siente como casa. En tu partitura: Armadura de 1♭ en toda la pieza; nota final grave Re en el compás 60.

#### Sesión 6: Obra completa (c. todo)

Ejercicios: Hanon 6 (calentamiento), Hanon 34 (técnica) y Czerny nº 3. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar A Flower Is Not a Flower completo de memoria con un tempo Largo constante, rubato natural y la resonancia como parte de la música.

**Paso a paso:**

1. Día 1: toca la pieza completa sin parar y anota dónde dudaste: suelen ser los cambios de compás de 34–47 y las alteraciones de 17–33.
2. Repasa esos puntos con el método de su sesión.
3. Transiciones: 16–17 (cambio de registro), 33–34 (al clímax), 47–48 (bajada a p) y 56–57 (a la coda). Tócalas empezando dos compases antes.
4. Memoria: recorre la pieza en la cabeza nombrando las secciones y los acordes de la izquierda. Practica empezar desde los compases 17, 34, 48 y 57.
5. Tempo: con metrónomo a negra ≈ 50, comprueba que el tempo de base no cambie entre secciones aunque uses rubato.
6. Grábate una pasada completa y escúchala: ¿se dejan sonar los acordes?, ¿el clímax llega a mf y vuelve a p?
7. Haz dos ensayos de concierto en días distintos, respirando antes de empezar y dejando sonar el calderón final.
8. Último día: tocada completa grabada en el tempo final Largo, molto rubato.

**Pasajes difíciles:**

- Compases 34–47: cambios de compás. Cuenta en voz alta en cada pasada hasta que te salgan sin pensar.
- Tempo: con tanta libertad es fácil ir cada vez más lento. Compara la duración de tus grabaciones y busca que sea parecida.

**Pasas a la siguiente sesión cuando:** Puedes tocar la pieza completa de memoria dos días seguidos con el mismo tempo de base y una grabación que respira.

**Teoría: Sensible y acorde de dominante.** El Do♯ es la nota que está un semitono por debajo de Re y tira hacia ella. Aparece cuando la música quiere afirmar Re menor. En tu partitura: Do♯ en los compases 5, 9, 14–15 y 21.

### 09 · My Lie

Masaru Yokoyama (arr. Torby Brand) · Do mayor (con color de La menor) · 6/8 · ♩ = 48 · dificultad 4/10 · 2 pág. · se estudia del 16/11/2026 al 07/12/2026 · cada sesión dura unos 3 días

| Sesión | Sección (compases) | Foco técnico | Calentamiento | Técnica | Estudio Czerny |
|---|---|---|---|---|---|
| 1 | Introducción (1–4) | destacar la melodía | Hanon 3 | Hanon 21 | nº 1 (pág. 3) |
| 2 | Figuración ondulante (5–12) | acordes quebrados en la izquierda | Hanon 4 | Hanon 41 en Do mayor (con color de La menor) | nº 14 (pág. 7) |
| 3 | Tema tranquilo (13–20) | pedal y legato | Hanon 5 | Hanon 32 | nº 5 (pág. 4) |
| 4 | Tema principal (21–28) | acordes plaqué | Hanon 6 | Hanon 48 | nº 8 (pág. 5) |
| 5 | Clímax (29–36) | terceras legato | Hanon 7 | Hanon 50 en Do mayor (con color de La menor) | nº 9 (pág. 5) |
| 6 | Coda (37–45) | rubato | Hanon 8 | Hanon 33 | nº 11 (pág. 6) |
| 7 | Obra completa (todo) | rango dinámico | Hanon 9 | Hanon 34 | nº 2 (pág. 3) |

#### Sesión 1: Introducción (c. 1–4)

Ejercicios: Hanon 3 (calentamiento), Hanon 21 (técnica) y Czerny nº 1. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 1–4 con la melodía aguda cantando sobre los acordes tenidos, a corchea = 96 (♩ = 48), y respirar en el calderón del compás 4.

**Paso a paso:**

1. Día 1: escucha una grabación de My Lie siguiendo la partitura con el dedo dos o tres veces. Fíjate en que la introducción es solo una melodía lenta en el agudo sobre acordes que duran todo el compás.
2. Análisis rápido: el compás 1 suena a La menor y la melodía dibuja La–Mi, Re, Sol hasta el Mi agudo del calderón. Observa la línea discontinua de 8va: la mano derecha suena una octava más alta de lo escrito durante los cuatro compases. La mano izquierda está escrita en clave de sol.
3. Digitación: anota a lápiz la del adorno de fusas del compás 2 (Mi–Re–Do♯–Re); una opción cómoda es 3-2-1-2 o 4-3-2-3. Elige una y no la cambies. Para los acordes de la izquierda usa 5-3-1 o 5-2-1 según la abertura y escríbelo encima del primero.
4. Mano derecha sola: cuenta en voz alta las seis corcheas (1-2-3, 4-5-6) con el metrónomo a corchea = 60. Mantén de verdad las notas largas ligadas de los compases 1 y 2. En el adorno del compás 2 toca primero las cuatro fusas como corcheas lentas y ve acelerando hasta que quepan en la última corchea sin empujar el pulso.
5. Mano izquierda sola: toca cada acorde con todas sus notas exactamente juntas y déjalo sonar los seis tiempos. Escucha que ninguna nota salga más fuerte que otra: es solo un colchón de sonido en p.
6. Días 2–3: manos juntas a corchea = 60, luego 72 y 84. La derecha tiene que sonar claramente por encima: más peso en la derecha y los dedos de la izquierda hundiendo la tecla con suavidad.
7. Pedal: la partitura no lo marca. Prueba primero sin pedal; después añádelo y cámbialo en cada compás justo después de tocar el nuevo acorde (pedal sincopado), para que no se mezclen dos armonías.
8. Últimos días: a corchea = 96 (el ♩ = 48 escrito), trabaja el calderón del compás 4: alarga el Mi agudo lo que te pida el oído y luego toca en mf las semicorcheas Do–Re–Mi, ya sin 8va, que entran al compás 5.

**Pasajes difíciles:**

- Compás 2: el adorno de fusas Mi–Re–Do♯–Re se suele precipitar. Practícalo aislado con el metrónomo, primero como cuatro corcheas, luego como semicorcheas y al final como fusas, llegando siempre a tiempo al compás 3.
- Compás 4: después del calderón cambian a la vez la dinámica (de p a mf) y el registro (de la 8va aguda a Do4). Practica solo el paso del calderón a las tres semicorcheas, mirando antes adónde va la mano.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 1–4 tres veces seguidas a corchea = 96 sin cortar las notas largas, con el adorno a tiempo y la melodía siempre por encima de los acordes.

**Teoría: Compás compuesto 6/8.** Cada compás tiene seis corcheas agrupadas en dos pulsos de tres. Se siente como un balanceo lento, no como tres tiempos de vals. En tu partitura: Toda la pieza; se ve muy claro en el bajo de negras con puntillo de los compases 13–15.

#### Sesión 2: Figuración ondulante (c. 5–12)

Ejercicios: Hanon 4 (calentamiento), Hanon 41 en Do mayor (con color de La menor) (técnica) y Czerny nº 14. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 5–12 con la figuración Fa–Mi–Do–Sol suave y regular, las notas largas de la melodía claramente por encima y el calderón del compás 12 bien respirado.

**Paso a paso:**

1. Día 1: escucha estos compases en la grabación siguiendo la partitura. Notarás dos planos: una ondulación continua de semicorcheas y, encima, notas largas de melodía (las que tienen la plica hacia arriba).
2. Análisis: el compás 5 es la entrada en mf y la izquierda pasa a clave de fa (Re–La–Re y Mi–Re–Mi). Desde el 6 casi todo se apoya en Fa en el bajo (acorde de Fa con séptima, Fa–La–Do–Mi), así que la armonía apenas cambia. El patrón Fa–Mi–Do–Sol se repite durante todo el compás y en los compases 10–11 sube una octava.
3. Digitación: para el patrón Fa–Mi–Do–Sol usa siempre la misma posición (por ejemplo 4-3-2-1 de arriba abajo) y escríbela en el compás 6. Cuando hay una nota de melodía encima, el 5 la toca y los demás dedos siguen con la figuración.
4. Mano derecha sola en capas: primero solo las notas con plica hacia arriba, como una melodía lenta, cantándolas; después solo la figuración, muy suave y pareja, a corchea = 60; por último las dos juntas, con la melodía en mf y el relleno en pp.
5. Mano izquierda sola: cuenta bien las duraciones. En el 6 el Do está ligado; del 7 al 9 el Fa grave dura compases enteros (en 8–9 con 8 baja, una octava más grave), y en 10–11 el acorde Fa–Re se mantiene ligado sin volver a tocarlo.
6. Días 2–4: manos juntas a corchea = 60, luego 72, 84 y finalmente 96. Si la figuración se vuelve desigual, quédate un día más en la velocidad anterior.
7. Pedal: sin marcas en la partitura. Como casi todo va sobre Fa, puedes mantener el pedal un compás entero y cambiarlo al empezar cada compás; si la melodía se ensucia, cámbialo cada tres corcheas.
8. Dinámica y unión: arranca en mf en el compás 5, haz de verdad el regulador decreciente del compás 11 y deja que el calderón del 12 se apague antes de la entrada en mp. Toca desde el compás 3 hasta el 13 sin parar.

**Pasajes difíciles:**

- Compases 6–9: la melodía con plica hacia arriba queda tapada por la figuración. Practica tocando la melodía forte y la figuración casi sin sonido, y luego ve igualando hasta el equilibrio real.
- Compases 9–10: el patrón salta al registro agudo. Toca el último grupo del 9 y coloca la mano en la posición aguda del 10 sin tocar, tres veces, antes de tocarlo de verdad.

**Pasas a la siguiente sesión cuando:** La sección está lista cuando tocas los compases 5–12 a corchea = 96 con la figuración pareja, oyes la melodía por encima sin esfuerzo y el calderón del 12 respira antes de seguir.

**Teoría: Ambigüedad entre Do mayor y La menor.** Las dos tonalidades comparten las mismas notas (son relativas). La pieza empieza con color de La menor y la melodía termina en Do, por eso suena a la vez triste y luminosa. En tu partitura: Acorde de La menor en el compás 1; melodía que reposa en Do en los compases 36 y 44–45.

#### Sesión 3: Tema tranquilo (c. 13–20)

Ejercicios: Hanon 5 (calentamiento), Hanon 32 (técnica) y Czerny nº 5. Cómo estudiarlos: sección 5.

**Objetivo:** Frasear los compases 13–20 en mp con la voz superior cantando, el bajo en negras con puntillo bien medido y los arpegios de enlace de los compases 16 y 20 sin prisa.

**Paso a paso:**

1. Día 1: escucha la sección siguiendo la partitura y canta la voz superior de la mano derecha. La doble barra antes del 13 marca un cambio de carácter: más tranquilo y en el registro medio.
2. Análisis: el bajo dibuja Fa – Sol – La – Mi en los compases 13–14, es decir IV – V – vi – iii, la progresión de toda la pieza. Cada nota del bajo dura medio compás (negra con puntillo), así que los dos pulsos del 6/8 se sienten muy claros.
3. Digitación: en la derecha marca qué dedo toca la nota de arriba de cada intervalo (normalmente 4 o 5) para poder ligarla. Escribe también la digitación de los arpegios del compás 16 (Sol–Re–Mi–Sol–Re–Do) y del 20 (Sol–Re–Sol–Si).
4. Mano izquierda sola: toca las negras con puntillo contando 1-2-3, 4-5-6 en voz alta. En los compases 17–18 pasa a acordes rotos (bajo y dos notas agudas): practica cada grupo plaqué y luego despliégalo. En el 19 fíjate en el 8 debajo del Mi: va una octava más grave.
5. Mano derecha sola: toca la voz superior legato y deja las notas de abajo más suaves. En el regulador decreciente del compás 15 baja el volumen de verdad.
6. Días 2–3: manos juntas a corchea = 60, luego 72 y 84. Los arpegios de los compases 16 y 20 tienen que caber exactamente en su tiempo: practícalos solos con metrónomo y después dentro del compás.
7. Pedal: no está marcado. Cámbialo con cada nota nueva del bajo, siempre justo después de tocarla; en los arpegios mantenlo para que suenen como un solo acorde.
8. Últimos días: a corchea = 96, piensa en dos frases de cuatro compases (13–16 y 17–20) que crecen hacia el centro. Haz el crescendo del arpegio del 20, que lleva al mf del 21, y enlaza tocando desde el compás 10 hasta el 21.

**Pasajes difíciles:**

- Compases 16 y 20: los arpegios de enlace tienden a correr. Practícalos a corchea = 60 nota por nota, luego en dos impulsos, llegando exactamente al tiempo fuerte siguiente.
- Compases 17–19: la izquierda salta del bajo a las notas agudas del acorde roto y al Mi muy grave del 19. Practica cada salto mirando primero la tecla de destino y moviendo el brazo antes de que llegue el momento de tocar.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 13–20 a corchea = 96 con el bajo medido, la voz superior ligada y los dos arpegios llegando a tiempo al compás siguiente.

**Teoría: Dominante secundaria (V de vi).** Un acorde ajeno a la tonalidad que sirve para 'apuntar' a otro acorde. Aquí Mi mayor, con Sol♯, prepara la llegada a La menor. En tu partitura: Compás 26 (Sol♯ en ambas manos) que resuelve en La menor en el compás 27.

#### Sesión 4: Tema principal (c. 21–28)

Ejercicios: Hanon 6 (calentamiento), Hanon 48 (técnica) y Czerny nº 8. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 21–28 en mf con la melodía en dobles notas bien unida, la izquierda en acordes rotos de corcheas sin mirar y el poco cresc. que lleva al f del final del compás 28.

**Paso a paso:**

1. Día 1: escucha el tema principal siguiendo la partitura. Es el corazón de la pieza: la melodía de la introducción vuelve en el registro medio, con acordes, y la izquierda se mueve en corcheas.
2. Análisis: compara el compás 22 con el 2: es el mismo adorno Mi–Re–Do♯–Re. El bajo recorre Fa – Fa – Mi – La (21–24) y luego Re – Sol – Sol♯ (25–26). El Sol♯ del compás 26 forma el acorde de Mi mayor (Mi–Sol♯–Si), que empuja hacia La menor en el 27.
3. Digitación: en la izquierda cada grupo de tres corcheas (por ejemplo Fa–Do–Fa del compás 21) se toca con 5-2-1 o 5-3-1; escríbelo en cada cambio de bajo. Para las terceras Sol♯–Si, La–Do, Si–Re del 26 y La–Do, Si–Re, Do–Mi del 28 prueba 1-3, 2-4, 3-5.
4. Mano izquierda sola, la clave de la sección: practica cada compás plaqué y después desplegado a corchea = 60. Trabaja sobre todo el paso de un compás al siguiente, donde el bajo salta (del Mi del 23 al La del 24, del Re del 25 al Sol del 26), hasta poder tocarla mirando la partitura.
5. Mano derecha sola: liga la nota superior de cada acorde y cuenta bien las negras con puntillo. En el compás 25 vuelve la figuración Fa–Mi–Do de semicorcheas: tócala pareja y suave, como un eco del compás 6.
6. Días 2–4: manos juntas a corchea = 60, 72, 84 y 96. Empieza cada día por los compases 25–28, que son los más cargados.
7. Pedal: sin marcas en la partitura. Cámbialo cada medio compás, con cada bajo nuevo, siempre justo después de tocarlo. En las terceras de los compases 26 y 28 cámbialo también en el último tiempo si oyes mezcla.
8. Dinámica y unión: mf estable en 21–24, poco cresc. desde el 25 y crescendo hasta el f al final del 28, que es la puerta del clímax. Enlaza tocando desde el compás 17 hasta el primer acorde del 29.

**Pasajes difíciles:**

- Compás 22: el adorno de fusas va ahora sobre una nota tenida (Sol). Practica el adorno con los dedos de arriba mientras mantienes la nota de abajo, primero lento y luego a tempo.
- Compases 25–26: la derecha pasa de la figuración a las terceras con Sol♯ y la izquierda salta de Sol a Sol♯. Practica solo del último tiempo del 25 al final del 26, manos separadas y luego juntas a corchea = 60, diez veces.
- Compás 28: terceras ascendentes con crescendo hacia el f. Practícalas en bloque y después ligadas, cuidando que el crescendo no acelere el tempo.

**Pasas a la siguiente sesión cuando:** Puedes tocar del compás 21 al 28 a corchea = 96 con la izquierda segura sin mirar, el Sol♯ del 26 limpio y un crescendo claro hasta el f.

**Teoría: Acorde prestado ♭VII (Si♭ mayor).** Si♭ no pertenece a Do mayor; se toma prestado del modo menor (o mixolidio). Da un color cálido y abierto, muy típico de bandas sonoras. En tu partitura: Compases 40–41 (Si♭–Fa–Si♭ en la mano izquierda) y el Si♭ grave de los compases 42–45.

#### Sesión 5: Clímax (c. 29–36)

Ejercicios: Hanon 7 (calentamiento), Hanon 50 en Do mayor (con color de La menor) (técnica) y Czerny nº 9. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el clímax (compases 29–36) en f con acordes llenos y sin golpear, bajar con naturalidad al mp del compás 33 y llegar al calderón del 36.

**Paso a paso:**

1. Día 1: escucha el clímax siguiendo la partitura. La melodía de la introducción vuelve por tercera vez, ahora en acordes llenos y una octava más alta (8va en los compases 29–32).
2. Análisis: el compás 29 va sobre Fa (Fa–Do–La en la izquierda) con el acorde La–Do–Mi–La arriba; el 30 repite el adorno de fusas del compás 2; el 31 va sobre Mi. Desde el 33 todo se relaja: mp, notas sueltas y la escala descendente del 34 que deshace la tensión.
3. Digitación: en los acordes de cuatro notas del 29 usa 1-2-3-5 o 1-2-4-5 según la abertura y márcalo. En la escala del compás 34 anota dónde pasa el pulgar para que la mano baje sin saltos.
4. Mano derecha sola: practica cada acorde con la técnica de preparar y soltar: coloca los dedos sobre las teclas sin tocar, siente la forma, deja caer el peso del brazo y suelta la muñeca. Haz que la nota más aguda suene más que las demás.
5. Mano izquierda sola: en 30–32 hay notas dobles dentro de los acordes rotos. Practica cada grupo plaqué y luego desplegado a corchea = 60. En el 32 la izquierda sube hasta un Mi ligado al compás 33: mantén esa ligadura.
6. Días 2–4: manos juntas a corchea = 60, 72, 84 y 96. El f debe ser lleno pero redondo: si suena duro, usa más brazo y menos dedo.
7. Pedal: sin marcas. Cámbialo con cada bajo nuevo en 29–32. En la escala del 34 usa poco pedal o ninguno para que no se emborrone, y vuelve a ponerlo en el calderón del 36.
8. Dinámica y rubato: el paso del f al mp del 33 es un cambio súbito de color; toma un instante de aire antes. Haz un pequeño ritardando al final del 35, alarga el calderón del 36 y toca las semicorcheas que salen de él muy suaves. Enlaza desde el compás 25 hasta el 37.

**Pasajes difíciles:**

- Compases 29–31: acordes de cuatro notas en el registro agudo con 8va. Practica la secuencia de acordes sin ritmo, colocando la mano antes de cada uno y comprobando que todas las notas suenan juntas; después añade el ritmo.
- Compás 34: escala descendente de semicorcheas tras el clímax. Practícala sola a corchea = 60 en grupos de cuatro notas, parando en cada primera nota, y luego seguida.
- Compases 32–33: salir de la 8va y bajar de f a mp. Practica solo el último tiempo del 32 y el primero del 33 hasta que el cambio de volumen salga sin pensar.

**Pasas a la siguiente sesión cuando:** Puedes tocar del 29 al 36 a corchea = 96 con acordes que suenan juntos y sin golpes, una caída clara al mp en el 33 y un calderón con tiempo en el 36.

**Teoría: Nota pedal.** Una nota grave que se mantiene mientras lo de arriba cambia. Crea estabilidad o, como aquí, suspensión. En tu partitura: Fa grave en los compases 7–9 y Si♭ grave ligado en los compases 42–45.

#### Sesión 6: Coda (c. 37–45)

Ejercicios: Hanon 8 (calentamiento), Hanon 33 (técnica) y Czerny nº 11. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar la coda (compases 37–45) con el maestoso del compás 38 amplio, la figuración sobre Si♭ muy suave y el final sobre Do con el Si♭ grave apagándose sin prisa.

**Paso a paso:**

1. Día 1: escucha la coda siguiendo la partitura. Fíjate en cómo el compás 38 (maestoso) suena solemne y en cómo el final queda suspendido: la melodía acaba en Do pero el bajo se queda en Si♭.
2. Análisis: los compases 37–39 tienen bajos Sol–La, Mi–Fa, Sol–La. En el 40 aparece un acorde de Si♭ (Si♭–Fa–Si♭) en la izquierda: es el ♭VII, ajeno a Do mayor, que da el color de despedida. El Si♭ muy grave del compás 42 se mantiene ligado hasta el 45.
3. Digitación: en el compás 37 marca la del arpegio Re–Sol–Re–Sol y la de las corcheas agudas Re–Do–Re–Mi; en el 38, la de la bajada Sol–Do–Sol. La figuración Fa–Mi–Do de los compases 40–41 usa la misma digitación que escribiste en los compases 6–9.
4. Mano derecha sola: en el compás 37 la mano sube mucho (sin 8va, en líneas adicionales): lee despacio las notas agudas nombrándolas en voz alta. En el 41 mantén el Do5 de blanca con puntillo con el 5 mientras los demás dedos tocan la figuración.
5. Mano izquierda sola: negras con puntillo bien medidas en 37–39; en el 40 coloca el acorde de Si♭ y mantenlo dos compases. En el 42 baja al Si♭ grave y no lo vuelvas a tocar: solo se mantiene con las ligaduras.
6. Días 2–3: manos juntas a corchea = 60, 72 y 84; después 96. El maestoso del 38 puede ir un poco más ancho que el tempo base: decide cuánto y hazlo igual cada vez.
7. Pedal: no está marcado. Cámbialo con cada bajo en 37–39. Desde el 42, con el Si♭ ligado, mantén el pedal y cámbialo solo si la derecha se ensucia; en el compás 45 no lo levantes hasta que el sonido casi haya desaparecido.
8. Dinámica y unión: regulador creciente en el 37 hacia el maestoso y después diminuendo progresivo hasta el final. Enlaza tocando desde el calderón del compás 36 hasta el final y luego desde el 33.

**Pasajes difíciles:**

- Compás 37: subida rápida al registro agudo con regulador creciente. Practica la mano derecha sola en dos impulsos (las cuatro semicorcheas y luego las corcheas agudas) a corchea = 60.
- Compases 41–45: mantener notas largas (Do arriba, Si♭ abajo) mientras suena otra voz. Toca solo las notas largas contando en voz alta todos los tiempos de cada compás para no soltarlas antes de tiempo.

**Pasas a la siguiente sesión cuando:** Puedes tocar del 36 al 45 a corchea = 96 con el maestoso amplio, las notas ligadas mantenidas y un final que se apaga solo, sin cortar el sonido.

**Teoría: Adorno escrito (grupeto en fusas).** Un giro rápido alrededor de una nota que funciona como decoración de la melodía. El Do♯ es una nota de paso cromática que no cambia la tonalidad. En tu partitura: Mi–Re–Do♯–Re en los compases 2, 22 y 30.

#### Sesión 7: Obra completa (c. todo)

Ejercicios: Hanon 9 (calentamiento), Hanon 34 (técnica) y Czerny nº 2. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar My Lie entera de memoria, sin cortes entre secciones, a corchea = 96 (♩ = 48), con el sonido controlado y el final suspendido bien apagado.

**Paso a paso:**

1. Día 1: escucha la grabación completa con la partitura y marca con lápiz los puntos de unión entre secciones: compases 4–5, 12–13, 20–21, 28–29, 32–33 y 36–37.
2. Practica solo las uniones: dos compases antes y dos después de cada una, cinco veces cada una, a corchea = 84 y luego a 96.
3. Memoria por secciones: toca cada sección mirando la partitura y luego sin mirarla. Apóyate en el bajo Fa – Sol – La – Mi y en que la melodía de la introducción vuelve en los compases 21 y 29: si sabes en qué vuelta estás, no te pierdes.
4. Comprueba la memoria empezando desde puntos distintos: 5, 13, 21, 29 y 37. Si no puedes arrancar desde alguno, repásalo con la partitura ese mismo día.
5. Pasada completa con metrónomo a corchea = 84 y otra a 96, sin detenerte aunque falles. Anota dónde fallaste y trabaja solo esos compases al día siguiente.
6. Pasada sin metrónomo, como en el recital: respeta los calderones de los compases 4, 12 y 36 y el maestoso del 38, pero vuelve siempre al pulso de base después.
7. Grábate con el móvil y escucha con la partitura: ¿se oye la melodía por encima en 6–9 y 29–31?, ¿el f del clímax suena lleno sin golpes?, ¿el pedal ensucia algún cambio de armonía?
8. Último día: dos pasadas de concierto seguidas, sin parar y grabando, empezando como si hubiera público: siéntate, respira y cuenta un compás en silencio a corchea = 96.

**Pasajes difíciles:**

- Compases 4–5 y 12–13: los calderones rompen el pulso y es fácil no saber cuándo seguir. Decide cuántos pulsos dura cada calderón y practica la entrada siguiente contando en silencio.
- Compases 28–29 y 32–33: entrada y salida del clímax, con 8va y cambio de f a mp. Practica estas dos uniones aisladas cada día de la sesión.
- Compases 40–45: con el Si♭ grave mantenido es fácil levantar el pedal o la mano antes de tiempo. Cuenta en voz baja hasta el final del compás 45 en cada pasada.

**Pasas a la siguiente sesión cuando:** La obra está lista cuando la grabación de una pasada completa de memoria a corchea = 96 suena continua, sin paradas ni dudas en las uniones, y te gustaría que la oyera otra persona.

**Teoría: Signo de 8va.** Indica que lo escrito suena una octava más aguda (encima del pentagrama) o más grave (debajo). Evita llenar la partitura de líneas adicionales. En tu partitura: Mano derecha en los compases 1–4 y 29–32; bajo en los compases 8–9 y 19.

### 16 · Battleground

Yutaka Yamada · Re menor · 4/4 · ♩ = 172; «Slow, freely» en la sección final · dificultad 6/10 · 8 pág. · se estudia del 07/12/2026 al 18/01/2027 · cada sesión dura unos 5 días

| Sesión | Sección (compases) | Foco técnico | Calentamiento | Técnica | Estudio Czerny |
|---|---|---|---|---|---|
| 1 | «Troll» – Pedal y motivo (1–17) | rotación de muñeca | Hanon 5 | Hanon 48 | nº 14 (pág. 7) |
| 2 | «Troll» – Acordes que suben (18–34) | octavas | Hanon 6 | Hanon 51 | nº 21 (pág. 12) |
| 3 | «Battleground» – Cascadas de tresillos (35–51) | acordes plaqué | Hanon 7 | Hanon 53 en Re menor | nº 8 (pág. 5) |
| 4 | Tresillos en zigzag (52–67) | arpegios amplios en la izquierda | Hanon 8 | Hanon 41 en Re menor | nº 15 (pág. 8) |
| 5 | Ostinato en la izquierda y calma (68–97) | notas repetidas | Hanon 9 | Hanon 44 | nº 17 (pág. 9) |
| 6 | «With growing conviction» (98–129) | escalas rápidas | Hanon 10 | Hanon 38 en Re menor | nº 19 (pág. 11) |
| 7 | Maestoso (130–153) | rango dinámico | Hanon 11 | Hanon 32 | nº 30 (pág. 16) |
| 8 | «Dagger» – Epílogo (154–165) | pedal y legato | Hanon 12 | Hanon 33 | nº 1 (pág. 3) |
| 9 | Obra completa (todo) | síncopas | Hanon 13 | Hanon 21 | nº 16 (pág. 8) |

#### Sesión 1: «Troll» – Pedal y motivo (c. 1–17)

Ejercicios: Hanon 5 (calentamiento), Hanon 48 (técnica) y Czerny nº 14. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 1–17 a ♩ = 140 o más con el pedal de Re grave firme, los compases de espera bien contados y el motivo de la derecha en clave de fa exacto.

**Paso a paso:**

1. Escucha Battleground siguiendo la partitura: empieza solo con la izquierda tocando Re en octava muy grave (con 8vb debajo: suena una octava más baja) y la derecha entra en el compás 9.
2. Análisis: la armadura tiene un bemol (Si♭) y la pieza está en Re menor. El Re grave es un pedal de tónica: la nota de abajo se mantiene mientras arriba la música cambia. La derecha en 9–17 toca un motivo en negras escrito en clave de fa (Mi–Fa–Mi... ), así que lee con cuidado.
3. Mano izquierda sola: las octavas de Re (5-1) en redondas y blancas con ligaduras. Cuenta en voz alta cada compás y asegúrate de sostener las ligaduras sin repetir la nota.
4. Mano derecha sola en 9–17: lee primero las notas en voz alta (está en clave de fa) y tócalas a ♩ = 100 con una digitación fija; al final del 17 cambia a clave de sol, márcalo.
5. Cuenta los ocho compases iniciales en voz alta con el metrónomo; a ♩ = 172 pasan muy deprisa y es fácil entrar tarde o pronto en el 9.
6. Manos juntas a ♩ = 100, luego 120 y 140. Mantén el f indicado con un sonido lleno pero no duro.
7. Pedal: el pedal no está escrito; las redondas ligadas se sostienen con los dedos. Si quieres más resonancia en el Re grave, usa un pedal por cada dos compases y cámbialo con la nota nueva.
8. Último día: toca 1–17 y enlaza con el compás 18 (mp), haciendo el cambio de dinámica claro.

**Pasajes difíciles:**

- Compases 1–8: contar los compases de espera a tempo rápido. Cuenta «UNO-dos-tres-cuatro, DOS-dos-tres-cuatro...» diciendo el número de compás en el primer tiempo.
- Compases 9–17: leer la derecha en clave de fa. Escribe a lápiz el nombre de las primeras notas y lee el resto en voz alta antes de tocar.

**Pasas a la siguiente sesión cuando:** Tocas los compases 1–18 a ♩ = 140 o más sin perder la cuenta de los compases y con la derecha entrando justa en el compás 9.

**Teoría: Pedal de tónica.** Un pedal es una nota grave que se mantiene o se repite mientras la armonía cambia por encima. Aquí el Re grave crea una sensación de amenaza y de suelo firme. En tu partitura: Compases 1–17 (Re en octavas con 8vb) y de nuevo en 149–165.

#### Sesión 2: «Troll» – Acordes que suben (c. 18–34)

Ejercicios: Hanon 6 (calentamiento), Hanon 51 (técnica) y Czerny nº 21. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 18–34 con las posiciones de acorde seguras, las síncopas por ligadura en su sitio y el ff del 26 amplio y controlado.

**Paso a paso:**

1. Escucha esta parte siguiendo la partitura: en 18–25 la derecha toca acordes en blancas ligadas que suben por grados y la izquierda un bajo en blancas; desde el 26 todo crece a ff con acordes grandes en ambas manos.
2. Análisis: las ligaduras crean síncopas (el acorde se mantiene sobre el tiempo fuerte siguiente). En el 26 aparece un 8 con línea punteada debajo de cada pentagrama. En la izquierda significa tocar una octava más grave, como en el compás 1. En la derecha, un 8 escrito debajo también suele indicar una octava más grave, pero compáralo con una grabación antes de decidir. Hay Si natural de paso en la izquierda en los compases 28–29 y en la derecha en el 31 (la ficha decía 27 y 31).
3. Toca primero los acordes en bloque, sin ritmo, para memorizar cada posición: 18–25 suben paso a paso; escribe la digitación (1-3-5 o 1-2-5 según el acorde).
4. Añade el ritmo con las ligaduras, contando en voz alta «1-2-3-4» y diciendo «ligada» donde no se toca.
5. Mano izquierda sola en 26–34: acordes de tres o cuatro notas en registro grave con ligaduras; mira la posición nueva antes de cada cambio.
6. Manos juntas a ♩ = 100, luego 120, 140 y más.
7. Pedal: un pedal por acorde nuevo, cambiando justo después de tocarlo; en las ligaduras largas de 32–34, mantén el pedal.
8. Dinámica: mp de verdad en el 18, para que el ff del 26 sea un gran contraste. En ff toca con el peso del brazo y la muñeca suelta, sin golpear.
9. Último día: une 14–35 hasta el primer acorde del compás 35.

**Pasajes difíciles:**

- Compases 18–25: las síncopas por ligadura. Cuenta en voz alta y toca solo los acordes que se atacan; las ligaduras se mantienen sin volver a tocar.
- Compases 26–34: los acordes grandes en ambas manos. Practica en bloque cada cambio de acorde a ♩ = 80, mirando la nueva posición antes de moverte.
- Compases 28–31: los Si naturales de paso. Márcalos con color para no tocar Si♭ por la armadura.

**Pasas a la siguiente sesión cuando:** Tocas los compases 18–34 a ♩ = 140 o más, con las ligaduras respetadas y un contraste claro entre el mp del 18 y el ff del 26.

**Teoría: Tresillos de corchea.** Un tresillo reparte tres notas iguales en el espacio de dos. Con tresillos constantes, el 4/4 suena como un 12/8 galopante. En tu partitura: Mano derecha en 35–67; mano izquierda en 68–81 y 98–148.

#### Sesión 3: «Battleground» – Cascadas de tresillos (c. 35–51)

Ejercicios: Hanon 7 (calentamiento), Hanon 53 en Re menor (técnica) y Czerny nº 8. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar las cascadas de tresillos de los compases 35–51 con fuoco en ff, iguales y claras, al menos a ♩ = 130.

**Paso a paso:**

1. Escucha esta sección siguiendo la partitura: con fuoco y ff, la derecha baja en tresillos de corchea, dos compases por cascada, empezando con un acorde acentuado.
2. Análisis: cada cascada empieza con acorde acentuado (35, 38, 40, 44, 46, 48) y baja por posiciones repetidas. La izquierda toca acordes largos y cruza a clave de sol en 40, 41, 48 y 49 (márcalo).
3. Estudia cada cascada en grupos de tres notas como posiciones de mano: toca las tres notas juntas como un acorde, después separadas. Escribe la digitación de cada grupo (por ejemplo 4-2-1 o 3-2-1) y mantenla igual en todas las cascadas.
4. Mano derecha sola a ♩ = 90: tresillos iguales, diciendo «tri-o-la»; el acento solo en el acorde inicial.
5. Mano izquierda sola: los acordes largos y los saltos a la clave de sol en 40–41 y 48–49; mira la posición antes de saltar.
6. Manos juntas a ♩ = 90, después 110, 130 y más; sube de 10 en 10 solo cuando la cascada salga igual tres veces seguidas.
7. Pedal: un pedal por acorde de la izquierda, cambiando con cada acorde nuevo; si los tresillos se emborronan, usa medio pedal.
8. Último día: une 32–52 seguido, desde el final de la parte de acordes.

**Pasajes difíciles:**

- Compases 35–51: la igualdad de los tresillos a tempo rápido. Practica con ritmo cambiado (larga-corta-corta y corta-corta-larga) y después vuelve al ritmo igual.
- Compases 40–41 y 48–49: los cruces de la izquierda a la clave de sol. Practica el salto solo, cinco veces, mirando la tecla de llegada.
- Compases 35, 38, 40, 44, 46, 48: el acorde acentuado al inicio de cada cascada. Ensaya el acorde seguido solo de las tres primeras notas del tresillo.

**Pasas a la siguiente sesión cuando:** Tocas los compases 35–51 a ♩ = 130 o más, con tresillos iguales, sin cansarte y con los cruces de la izquierda seguros.

**Teoría: Escala menor natural y modo eólico.** Re menor natural usa Re–Mi–Fa–Sol–La–Si♭–Do. Al no elevar el Do, los acordes suenan modales y épicos, típicos de la música de cine. En tu partitura: Cascadas descendentes de los compases 35–51.

#### Sesión 4: Tresillos en zigzag (c. 52–67)

Ejercicios: Hanon 8 (calentamiento), Hanon 41 en Re menor (técnica) y Czerny nº 15. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los tresillos en zigzag de los compases 52–67 a ♩ = 130 o más, con la izquierda galopando estable y el crescendo hacia el 68.

**Paso a paso:**

1. Escucha esta sección siguiendo la partitura: la derecha sube y baja en tresillos con acordes acentuados y la izquierda toca octavas y acordes con ritmo de negra–corchea atresillado.
2. Análisis: desde el 53 la izquierda lleva 8 debajo (suena una octava más grave). Hay acordes acentuados en casi todos los compases; cresc. en el 66; el 67 lleva al ff del 68.
3. Mano derecha sola a ♩ = 90: trabaja cada compás como dos posiciones de mano (subida y bajada); escribe la digitación y marca dónde pasas el pulgar.
4. Mano izquierda sola a ♩ = 90: el ritmo atresillado (negra + corchea dentro del tresillo) debe sonar como un galope constante. Cuenta «ta-a-ta, ta-a-ta» y practica los saltos entre bajo y acorde mirando el teclado.
5. Manos juntas despacio, compás a compás; si no encaja, palmea las dos manos juntas diciendo «tri-o-la».
6. Metrónomo: ♩ = 90, 110, 130 y más, sin pasar al siguiente escalón hasta que salga tres veces seguidas.
7. Pedal: poco o nada; si usas, un toque corto en cada acorde acentuado.
8. Último día: une 48–68 hasta el primer acorde del compás 68.

**Pasajes difíciles:**

- Compases 52–67: el galope de la izquierda (negra + corchea atresillada) con saltos. Practica solo la izquierda a ♩ = 90 hasta que sea automática.
- Compases 52–67: los acordes acentuados de la derecha dentro del zigzag. Practica el acorde y el siguiente tresillo como un solo gesto, dejando caer el peso solo en el acorde.
- Compases 66–67: el crescendo con cruces en la izquierda (8va en el 65 y 67). Practica estos dos compases aparte, primero lentos y sin crescendo, y después añade el volumen.

**Pasas a la siguiente sesión cuando:** Tocas los compases 52–67 a ♩ = 130 o más sin parar, la izquierda galopa estable y el crescendo llega al ff del 68.

**Teoría: Dominante con sensible (Do♯).** Al elevar el Do a Do♯ aparece el acorde de La mayor, la dominante de Re menor. Esa nota tira con fuerza hacia Re y anuncia una nueva sección. En tu partitura: Compás 97, justo antes de «With growing conviction».

#### Sesión 5: Ostinato en la izquierda y calma (c. 68–97)

Ejercicios: Hanon 9 (calentamiento), Hanon 44 (técnica) y Czerny nº 17. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 68–97 con el ostinato de la izquierda sin cansarte, las notas repetidas parejas y el coral en 8va suave y ligado.

**Paso a paso:**

1. Escucha esta parte siguiendo la partitura: en 68–75 la izquierda repite tresillos bajo acordes largos; en 76–81 toca una nota repetida atresillada; desde el 82 todo se calma en un coral de acordes en blancas.
2. Análisis: ff (68), mf (70 y 76), mp (82); la derecha toca terceras y acordes en tresillos en 74–75; 8va en la derecha desde el 79 y en el coral de 86–95. En el 97 aparece Do♯: el acorde de La mayor, la dominante que lleva de vuelta a Re menor.
3. Mano izquierda sola en 68–75 a ♩ = 100: gira ligeramente la muñeca en cada grupo de tres notas para no cansar el antebrazo. Escribe la digitación (por ejemplo 5-2-1) y mantenla.
4. Mano izquierda sola en 76–81: las notas repetidas cambiando de dedo (3-2-1 o 2-1) para que no se trabe la tecla; tócalas ligeras, desde cerca de la tecla.
5. Mano derecha sola en 74–75: las terceras y acordes en tresillos lentos primero, con las notas de cada acorde exactamente juntas.
6. Coral 82–97: toca primero los acordes en bloque para memorizar las posiciones; luego conecta cada acorde con el siguiente lo más ligado posible, ayudado por el pedal.
7. Manos juntas por partes: 68–75, 76–81 y 82–97, subiendo el metrónomo de 100 a 140 y más.
8. Pedal: en el coral, cambia el pedal en cada acorde nuevo, justo después de tocarlo (pedal sincopado), para que suene ligado y limpio.
9. Último día: une 64–98 para conectar el crescendo con el ff del 68 y la calma del coral.

**Pasajes difíciles:**

- Compases 68–75: el ostinato de tresillos de la izquierda puede cansar el brazo. Gira la muñeca en cada grupo y para a sacudir el brazo si notas tensión.
- Compases 76–81: la nota repetida atresillada. Cambia de dedo en cada repetición y practica a ♩ = 100 hasta que suene pareja.
- Compases 82–97: el coral en 8va. Usa pedal sincopado (cambia justo después de cada acorde) para que suene ligado sin mezclas.

**Pasas a la siguiente sesión cuando:** Tocas los compases 68–97 sin cansarte ni parar, con las notas repetidas parejas y un coral ligado y suave.

**Teoría: Síncopa por ligadura.** Cuando una nota se liga por encima del tiempo fuerte, el acento se desplaza y la música parece adelantarse. Da empuje incluso con notas largas. En tu partitura: Blancas ligadas de los compases 3–4, 7–8 y 18–34.

#### Sesión 6: «With growing conviction» (c. 98–129)

Ejercicios: Hanon 10 (calentamiento), Hanon 38 en Re menor (técnica) y Czerny nº 19. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 98–129 con la convicción creciendo de mf a f y hasta los acordes arpegiados de 126–128, con la izquierda en galope estable.

**Paso a paso:**

1. Escucha esta sección siguiendo la partitura: «With growing conviction» indica que la energía crece poco a poco; la derecha toca acordes en blancas y redondas y la izquierda octavas con galope atresillado.
2. Análisis: mf en el 98 y f en el 114; 8va en la derecha en 126–128 con acordes arpegiados. El galope de la izquierda es el mismo ritmo de negra–corchea dentro del tresillo. Comprueba en la partitura el compás exacto donde empieza «With growing conviction» (la ficha lo sitúa en el 98).
3. Mano izquierda sola a ♩ = 100: el galope en octavas con la muñeca suelta; desde el 114 el dibujo cambia a saltos más amplios, aprende cada compás como una forma.
4. Mano derecha sola: toca los acordes en bloque y memoriza las posiciones; escribe la digitación y fíjate en las notas comunes entre acordes para moverte lo menos posible.
5. Manos juntas a ♩ = 100, luego 120, 140 y más.
6. Planifica el volumen: empieza en un mf real en el 98 y escribe a lápiz un pequeño aumento cada ocho compases, para llegar al f del 114 y tener margen hasta el ff del 130.
7. Compases 126–128: los acordes arpegiados en 8va; prepara el movimiento del cuerpo hacia el agudo y arpégialos rápido de abajo arriba.
8. Pedal: un pedal por acorde de la derecha, cambiando justo después de tocarlo; los acordes arpegiados con pedal bajado antes.
9. Último día: une 94–130 para sentir la llegada al maestoso.

**Pasajes difíciles:**

- Compases 98–129: el galope de la izquierda durante 32 compases. Practica la izquierda sola con metrónomo a ♩ = 100 y sube poco a poco; suelta la muñeca en cada blanca de la derecha.
- Compases 114–125: los saltos más amplios de la izquierda. Practica cada salto solo, mirando antes la tecla de llegada.
- Compases 126–128: los acordes arpegiados en 8va. Toca primero en bloque para memorizar la posición y luego arpegiados.

**Pasas a la siguiente sesión cuando:** Tocas los compases 98–129 a ♩ = 140 o más sin parar, y en una grabación se oye que la música crece de mf a f de forma gradual.

**Teoría: Indicaciones de carácter.** Palabras italianas o inglesas que dicen cómo tocar: «con fuoco» (con fuego), «maestoso» (majestuoso), «freely» (con libertad). Cambian el gesto más que las notas. En tu partitura: con fuoco (35), With growing conviction (98), maestoso (130), Slow, freely (154).

#### Sesión 7: Maestoso (c. 130–153)

Ejercicios: Hanon 11 (calentamiento), Hanon 32 (técnica) y Czerny nº 30. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el maestoso de los compases 130–153 en ff con los arpegios de la izquierda seguros, el diminuendo de 144–148 y los acordes repetidos en tresillo de negras.

**Paso a paso:**

1. Escucha el maestoso siguiendo la partitura: la derecha sostiene acordes amplios y la izquierda recorre el teclado con arpegios en tresillos, con bajos en 8vb.
2. Análisis: ff en el 130, 8va en la derecha en 142–145 con acordes arpegiados, dim. en el 144 y f en el 149; en 149–153 la derecha toca acordes repetidos en tresillo de negras sobre un Re grave ligado.
3. Mano izquierda sola: aprende los arpegios por posiciones de acorde antes de tocarlos en tresillos; toca cada posición en bloque, después en tresillos lentos a ♩ = 90. Marca dónde aparece la 8vb.
4. Mano derecha sola: acordes en bloque para memorizar las posiciones; en 142–144 los arpegiados en 8va, rápidos de abajo arriba.
5. Compases 149–153: los tresillos de negra (tres negras en el espacio de dos). Cuenta «tri-o-la» sobre dos tiempos y practica con metrónomo a ♩ = 80.
6. Manos juntas a ♩ = 100, luego 120, 140 y más.
7. Pedal: un pedal por armonía, cambiando con cada bajo nuevo de la izquierda; en el dim. de 144–148, cambia con más frecuencia para aclarar.
8. Dinámica: maestoso significa majestuoso, no rápido; toca con peso y sin correr. Haz el dim. de verdad para que el f del 149 vuelva a sonar fuerte.
9. Último día: une 126–153 y para justo antes de «Dagger» para preparar el cambio de carácter.

**Pasajes difíciles:**

- Compases 130–143: los arpegios de la izquierda de gran recorrido. Practica cada posición en bloque y después en tresillos a ♩ = 90, con los bajos 8vb mirados antes.
- Compases 142–145: los acordes arpegiados en 8va con el dim. Prepara el movimiento hacia el agudo y practica el dim. con grabación.
- Compases 149–153: los tresillos de negra. Cuenta en voz alta y practica con metrónomo lento antes de volver al tempo.

**Pasas a la siguiente sesión cuando:** Tocas los compases 130–153 en ff sin parar, con los arpegios de la izquierda seguros y un dim. claro antes del f del 149.

**Teoría: Pedal de tónica.** Un pedal es una nota grave que se mantiene o se repite mientras la armonía cambia por encima. Aquí el Re grave crea una sensación de amenaza y de suelo firme. En tu partitura: Compases 1–17 (Re en octavas con 8vb) y de nuevo en 149–165.

#### Sesión 8: «Dagger» – Epílogo (c. 154–165)

Ejercicios: Hanon 12 (calentamiento), Hanon 33 (técnica) y Czerny nº 1. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el epílogo «Dagger» (compases 154–165) lento y libre, con el Re grave ligado sosteniendo y la melodía aguda cantando entre silencios.

**Paso a paso:**

1. Escucha el epílogo siguiendo la partitura: después de la doble barra del 153, la izquierda mantiene el Re grave ligado durante varios compases y la melodía de la derecha entra en el agudo con «Slow, freely».
2. Análisis: en la partitura, los compases 154–156 son de espera (solo el Re grave) y la melodía con «Slow, freely» y 8va empieza en el compás 157. Hay acordes arpegiados suaves en 157, 160 y 163.
3. Mano izquierda sola: el Re grave en octava (con 8vb) ligado: tócalo una vez y mantenlo con el pedal o con los dedos; cuenta los compases de espera despacio.
4. Mano derecha sola: canta la melodía antes de tocarla; elige digitación para las corcheas de 157 y 160 y los acordes de 163.
5. Manos juntas lento, primero contando y después libre: deja que cada nota larga se apague antes de seguir, como si hablaras despacio.
6. Pedal: pedal largo sobre el Re grave mientras la armonía no cambie; cámbialo con cuidado (medio pedal) si se acumula demasiado sonido.
7. Final: el último compás (165) termina con notas ligadas; deja que el sonido se apague por completo antes de levantar el pedal y las manos.
8. Último día: une 149–165 para sentir el contraste entre el f del maestoso y la calma de «Dagger».

**Pasajes difíciles:**

- Compases 153–157: cambiar de golpe del maestoso al tempo lento. Respira en la doble barra y cuenta los compases de espera con un pulso nuevo, mucho más lento.
- Compases 157–165: tocar libre sin perder la línea. Graba tu versión y escucha si las pausas suenan intencionadas o como dudas.

**Pasas a la siguiente sesión cuando:** Tocas los compases 153–165 con calma, el Re grave suena sostenido todo el tiempo y la melodía se apaga sola al final.

**Teoría: Tresillos de corchea.** Un tresillo reparte tres notas iguales en el espacio de dos. Con tresillos constantes, el 4/4 suena como un 12/8 galopante. En tu partitura: Mano derecha en 35–67; mano izquierda en 68–81 y 98–148.

#### Sesión 9: Obra completa (c. todo)

Ejercicios: Hanon 13 (calentamiento), Hanon 21 (técnica) y Czerny nº 16. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar Battleground completo, con un tempo estable que se acerca al ♩ = 172 impreso, transiciones seguras entre las partes y la energía bien repartida hasta el epílogo lento.

**Paso a paso:**

1. Escucha la pieza entera con la partitura y marca las grandes partes: «Troll» (1–34), «Battleground» (35–97), «With growing conviction» (98–129), maestoso (130–153) y «Dagger» (154–165), con sus dinámicas.
2. Une las secciones de dos en dos practicando los enlaces: 15–19, 32–36, 50–53, 66–69, 80–83, 96–99, 128–131 y 152–157.
3. Toca la pieza entera a ♩ = 120 con metrónomo, sin parar aunque falles; anota dónde dudaste y estudia solo esos compases al día siguiente.
4. Memoria: memoriza primero las partes de acordes (18–34, 82–97, 98–129), que son posiciones de mano; después las cascadas y el zigzag por patrones de tresillo. Comprueba empezando desde cada parte sin mirar.
5. Resistencia: la pieza es larga y rápida. Haz pasadas completas a un tempo que puedas mantener sin tensión y suelta los brazos en las notas largas y los compases de espera.
6. Sube el tempo por escalones: ♩ = 130, 145, 160 y por último el ♩ = 172 impreso. Si un escalón te genera tensión, quédate en el anterior unos días más.
7. Grábate tocando la pieza entera y escúchala: ¿los tresillos suenan iguales?, ¿el mp del 18 y del 82 contrastan con los ff?, ¿el maestoso suena majestuoso y no apresurado?
8. Haz una interpretación completa al día como en el recital, sin parar, incluido el epílogo lento hasta que se apague el sonido.
9. Último día: toca la pieza para alguien o grábala como versión final y anota una cosa a mejorar.

**Pasajes difíciles:**

- Compases 35–81: mantener la igualdad de los tresillos durante mucho tiempo. Haz pasadas de esta parte al tempo que salga limpio y sube solo cuando no haya cansancio.
- Compases 98–153: no gastar todo el volumen demasiado pronto. Repasa tu plan de dinámicas antes de cada pasada completa.
- Compases 153–157: el cambio de carácter a «Dagger». Ensaya este paso aparte para que la calma llegue sin prisa.

**Pasas a la siguiente sesión cuando:** Puedes tocar Battleground de principio a fin sin parar, a un tempo estable cercano a ♩ = 172, y en tu grabación se oyen claros los contrastes de dinámica y el epílogo tranquilo.

**Teoría: Escala menor natural y modo eólico.** Re menor natural usa Re–Mi–Fa–Sol–La–Si♭–Do. Al no elevar el Do, los acordes suenan modales y épicos, típicos de la música de cine. En tu partitura: Cascadas descendentes de los compases 35–51.

### 06 · The Sixth Station

Joe Hisaishi (arr. Torby Brand) · Mi menor · 4/4 · ♩ ≈ 75 · dificultad 4/10 · 3 pág. · se estudia del 07/12/2026 al 04/01/2027 · cada sesión dura unos 4 días

| Sesión | Sección (compases) | Foco técnico | Calentamiento | Técnica | Estudio Czerny |
|---|---|---|---|---|---|
| 1 | Introducción (1–7) | arpegios amplios en la izquierda | Hanon 7 | Hanon 41 en Mi menor | nº 15 (pág. 8) |
| 2 | Tema en Mi menor (8–17) | acordes quebrados en la izquierda | Hanon 8 | Hanon 42 en Mi menor | nº 14 (pág. 7) |
| 3 | Episodio en Sol menor (18–29) | destacar la melodía | Hanon 9 | Hanon 21 | nº 1 (pág. 3) |
| 4 | Episodio en Fa menor (30–38) | pedal y legato | Hanon 10 | Hanon 32 | nº 5 (pág. 4) |
| 5 | Regreso a Mi menor y trémolos (39–50) | trinos y adornos | Hanon 11 | Hanon 27 | nº 2 (pág. 3) |
| 6 | Reexposición del tema (51–56) | terceras legato | Hanon 12 | Hanon 48 | nº 9 (pág. 5) |
| 7 | Final (57–70) | síncopas | Hanon 13 | Hanon 22 | nº 16 (pág. 8) |
| 8 | Obra completa (todo) | independencia de dedos | Hanon 14 | Hanon 23 | nº 3 (pág. 4) |

#### Sesión 1: Introducción (c. 1–7)

Ejercicios: Hanon 7 (calentamiento), Hanon 41 en Mi menor (técnica) y Czerny nº 15. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 1–7 con el ostinato de la izquierda memorizado y regular a ♩ ≈ 75, y las primeras notas de la melodía en mp.

**Paso a paso:**

1. Día 1: escucha la grabación siguiendo la partitura. Presta atención a la izquierda: su dibujo de corcheas se repite en casi toda la pieza, así que aprenderlo bien ahora te ahorra trabajo después.
2. Análisis: Mi menor (un sostenido). El compás 1 es un acorde arpegiado en la derecha sobre una nota larga en la izquierda, en mp. Desde el 2, la izquierda toca cuatro corcheas que suben, una corchea que baja y una negra con puntillo ligada a la nota larga del compás siguiente. En 6 y 7 los bajos son Do y Re, que llevan al Mi del compás 8.
3. Digitación de la izquierda: el dibujo abarca más de una octava, así que no cabe en una sola posición. Una opción es 5-2-1 en las tres primeras notas y después desplazar la mano para las de arriba con 1-2-4 (o 1-2-5). Escríbela en el compás 2 y úsala siempre igual.
4. Izquierda sola, días 1–2: lenta, con metrónomo a negra en 50. Deja que la nota larga dure todo su valor. Repite el dibujo hasta poder tocarlo sin mirar la partitura.
5. Derecha sola: arpegia el acorde del compás 1 de abajo arriba, suave, y deja que suene. En los compases 4–6 la melodía entra con una corchea al final del 4: cuenta las corcheas para no adelantarla.
6. Manos juntas: metrónomo a negra en 50, luego 60, y por último 75, el tempo escrito. Mantén la izquierda más suave que la melodía.
7. Pedal: la partitura no lo marca, pero el ostinato necesita pedal de legato. Cámbialo en cada compás, justo después de tocar el bajo, y escucha que no se mezclen dos bajos distintos.

**Pasajes difíciles:**

- Compases 2–7: el salto de la mano izquierda dentro del ostinato. Practica solo el paso de la tercera a la cuarta corchea (donde se desplaza la mano), lento, diez veces, con la digitación escrita.
- Compases 4–5: la entrada de la melodía en una corchea final. Cuenta «1 y 2 y 3 y 4 y» en voz alta y toca la nota exactamente en el último «y».

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 1–7 manos juntas a ♩ ≈ 75 con el ostinato de memoria, regular y con el pedal limpio en cada compás.

**Teoría: Ostinato de acompañamiento.** Un mismo dibujo rítmico se repite en la izquierda mientras cambia solo la nota del bajo. Da continuidad, como el traqueteo regular de un tren. En tu partitura: Izquierda en los compases 2–13, 18–21, 30–34 y 39–66.

#### Sesión 2: Tema en Mi menor (c. 8–17)

Ejercicios: Hanon 8 (calentamiento), Hanon 42 en Mi menor (técnica) y Czerny nº 14. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el tema de los compases 8–17 con las entradas a contratiempo exactas, las notas ligadas con su duración completa y los compases 14–17 sostenidos sin la izquierda.

**Paso a paso:**

1. Escucha la grabación de los compases 8–17 marcando el pulso con la mano: la melodía entra siempre después de un silencio de corchea, no en el pulso.
2. Análisis: la izquierda sigue con el ostinato de la sección anterior, con bajos que siguen la armonía de Mi menor. La melodía se alarga con ligaduras que cruzan la barra de compás. En el 11 hay un grupo rápido de semicorcheas. Desde el 14 la izquierda calla y la derecha toca notas largas y, en 16–17, acordes.
3. Digitación: escribe la digitación de la derecha en los compases 8, 10 y 11. Busca que la nota ligada caiga en un dedo fuerte (3 o 4) y que el grupo de semicorcheas del 11 vaya con dedos seguidos.
4. Derecha sola: cuenta las corcheas en voz alta. Mantén las notas ligadas sin volver a tocarlas y cuenta su duración completa antes de la nota siguiente.
5. Izquierda sola: repasa el ostinato con los bajos de estos compases hasta tocarlo sin mirar.
6. Manos juntas: metrónomo a negra en 50, luego 60 y 75. La izquierda te da el pulso: apóyate en ella para colocar las entradas de la derecha.
7. Pedal: cambia en cada compás con el bajo. En 14–17, donde la izquierda calla, usa el pedal para unir las notas largas de la derecha y cámbialo con cada nota o acorde nuevo.
8. Une con la introducción: toca desde el compás 6 hasta el 17. Haz la melodía en un arco: crece hacia el centro de cada frase y relaja hacia el final.

**Pasajes difíciles:**

- Compases 8–13: entrar a contratiempo sin adelantarse. Practica con metrónomo y di «y» en voz alta en la entrada de cada frase.
- Compás 11: las semicorcheas. Practica el pulso que las contiene aislado, despacio, y únelo con la nota anterior y la siguiente.
- Compases 14–17: sostener el sonido sin la izquierda. Cuenta los pulsos de cada nota larga en voz alta y escucha cómo se apaga antes de cambiar.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 6–17 manos juntas a ♩ ≈ 75 sin adelantar ninguna entrada y con las notas ligadas completas.

**Teoría: Modulación por cambio de armadura.** Modular es cambiar de tonalidad. Aquí el compositor traslada la música a otra altura y la partitura lo indica cambiando la armadura. En tu partitura: Compás 18 (2♭, Sol menor), compás 30 (4♭, Fa menor) y compás 39 (vuelta a 1♯, Mi menor).

#### Sesión 3: Episodio en Sol menor (c. 18–29)

Ejercicios: Hanon 9 (calentamiento), Hanon 21 (técnica) y Czerny nº 1. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el episodio en Sol menor de los compases 18–29 con el cambio de armadura asimilado, los acordes agudos de 22–28 leídos con seguridad y el compás de 5/4 contado.

**Paso a paso:**

1. Escucha la grabación de los compases 17–30 y fíjate en el cambio de color al pasar a la armadura de dos bemoles en el 18.
2. Análisis: en el 18 la armadura cambia a Si♭ y Mi♭ (Sol menor), en mp. La izquierda toca un arpegio de corcheas que sube y termina en una nota larga. En el 18 hay un tresillo de semicorcheas en la derecha. Desde el 22 la derecha va en 8va y la izquierda pasa a clave de sol: son acordes largos en registro agudo. El compás 29 es de 5/4, con un acorde arpegiado.
3. Marca con lápiz las alteraciones accidentales de 21–28 (aparecen sostenidos y becuadros) antes de tocar, y recuerda que la nueva armadura cambia Si y Mi.
4. Lee los acordes de 22–28 sin ritmo: manos separadas, acorde por acorde, nombrando las notas. Después, manos juntas, con cada acorde como un bloque.
5. Izquierda sola, 18–21: el arpegio nuevo con su nota larga. Digita el arpegio para que la mano no salte y deja que la nota final dure.
6. Manos juntas, con metrónomo a negra en 50 y sube hasta 75. En 22–28 escucha cómo se apaga cada acorde antes de tocar el siguiente; no cortes antes de tiempo.
7. Compás 29: cuenta cinco pulsos en voz alta («1 2 3 4 5»). Arpegia el acorde de la derecha de abajo arriba y deja que la izquierda baje hacia el compás 30.
8. Pedal: cambia en cada compás en 18–21 y con cada acorde en 22–29.

**Pasajes difíciles:**

- Compás 18: el tresillo de semicorcheas de la derecha. Practica el pulso que lo contiene aislado, diciendo «tri-o-la» a la velocidad del pulso.
- Compases 22–28: leer acordes agudos con 8va y alteraciones. Lee acorde por acorde, en bloque, y repite cada cambio de posición hasta que la mano lo encuentre sin mirar.
- Compás 29: el 5/4 y el acorde arpegiado. Practica 28–30 contando en voz alta para que el compás largo no se convierta en uno de cuatro.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 17–30 a ♩ ≈ 75 con todas las alteraciones correctas, los acordes largos sostenidos y el 5/4 bien contado.

**Teoría: Cadencia eólica VI–VII–i.** En modo menor natural, los acordes del sexto y séptimo grado suben por tonos hasta la tónica. Suena menos «clásico» y más cinematográfico que el típico V–i. En tu partitura: Bajos Do – Re – Mi en los compases 6–8 y 12–13; en Fa menor, descendente Fa – Mi♭ – Re♭ en 30–32.

#### Sesión 4: Episodio en Fa menor (c. 30–38)

Ejercicios: Hanon 10 (calentamiento), Hanon 32 (técnica) y Czerny nº 5. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el episodio en Fa menor de los compases 30–38 con la figura de corcheas de la derecha pareja, el rit. y el calderón del compás de 3/4.

**Paso a paso:**

1. Escucha la grabación de los compases 29–39. La armadura cambia a cuatro bemoles en el 30 y la derecha toma el movimiento de corcheas.
2. Análisis: la derecha alterna en corcheas notas dobles y notas de arriba (terceras y octavas), sobre el ostinato de la izquierda con bajos que bajan Fa – Mi♭ – Re♭. En la partitura el rit. aparece en el compás 35. En 35–37 hay notas largas y graves; el 38 es de 3/4 con un acorde arpegiado y calderón.
3. Bloques en la derecha: toca la figura de cada compás como acordes juntos para fijar la posición de la mano. Escribe la digitación del compás 30 y mantenla en los siguientes.
4. Derecha sola en corcheas: lenta y pareja, con metrónomo a negra en 50. La nota más aguda de cada grupo un poco más presente.
5. Izquierda sola: el mismo ostinato, ahora con la armadura de cuatro bemoles. Comprueba cada bajo nuevo.
6. Manos juntas: metrónomo a negra en 50, luego 60 y 75. En 35 empieza el rit.: ve alargando los pulsos hasta las notas largas.
7. Pedal: cambia en cada compás con el bajo. En 35–37, un pedal por nota larga. En el 38, mantenlo durante el calderón y levántalo antes del cambio de armadura del 39.
8. Une con lo anterior: toca desde el 28 hasta el 39, cuidando el paso del 5/4 al 4/4 del 30 y del 3/4 del 38 al 4/4 del 39.

**Pasajes difíciles:**

- Compases 30–34: la figura de la derecha pareja y sin tensión. Practica en bloques, luego en ritmo con acentos alternados (primero en la nota alta, después en la baja) para igualar la mano.
- Compases 35–38: el rit., las notas largas y el calderón. Decide cuánto dura el calderón (por ejemplo, el doble de lo escrito) y hazlo igual cada vez.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 28–39 a ♩ ≈ 75 con las corcheas parejas, el rit. gradual desde el 35 y el calderón del 38 controlado.

**Teoría: Cambio de compás.** Un compás de 5/4 o de 3/4 en medio de un 4/4 alarga o acorta la frase un pulso. Sirve para respirar antes de una sección nueva. En tu partitura: Compás 29 (5/4) y compás 38 (3/4 con calderón).

#### Sesión 5: Regreso a Mi menor y trémolos (c. 39–50)

Ejercicios: Hanon 11 (calentamiento), Hanon 27 (técnica) y Czerny nº 2. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 39–50 con la melodía larga y sus saltos bien ligada y los trémolos de 45–50 brillantes y relajados dentro del crescendo.

**Paso a paso:**

1. Escucha la grabación de los compases 38–51. Tras el calderón vuelve la armadura de un sostenido y la melodía se mueve con saltos grandes.
2. Análisis: en 39–44 la derecha toca notas largas con saltos amplios sobre el ostinato. Desde el 45 la derecha va en 8va con trémolos entre dos notas, y hay reguladores de crescendo. En el 49 hay un acorde arpegiado.
3. Digitación: en los saltos de 39–44 decide qué dedo cae en cada nota de llegada y escríbelo; usa el pedal para unir los saltos que la mano no puede ligar.
4. Derecha sola, 39–44: canta la melodía y conecta los saltos. Prepara el salto mientras suena la nota larga, no en el último momento.
5. Derecha sola, 45–50: el trémolo se hace con rotación suave de la muñeca, no levantando dedos. Empieza en semicorcheas medidas, lento, y acelera solo si la mano sigue suelta.
6. Manos juntas: metrónomo a negra en 50 y sube hasta 75. Primero toca 45–50 con notas largas en vez de trémolos; después añade el trémolo.
7. Pedal: cambia en cada compás con el bajo del ostinato.
8. Dinámica: crece siguiendo los reguladores; el trémolo debe sonar como un brillo, no como un redoble. Prepara la vuelta a mp del compás 51.

**Pasajes difíciles:**

- Compases 39–44: los saltos de la melodía. Practica cada salto aislado: nota de partida, mirada a la tecla de llegada y movimiento del brazo, despacio.
- Compases 45–50: los trémolos. Rotación de muñeca con los dedos firmes y el brazo suelto; si notas tensión, para y practica más piano.
- Compás 49: el acorde arpegiado dentro de la 8va. Practícalo como bloque y luego arpegiado, cayendo en la nota de arriba a tiempo.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 38–51 a ♩ ≈ 75 con la melodía ligada a pesar de los saltos y los trémolos parejos sin tensión.

**Teoría: Trémolo.** Consiste en alternar rápidamente dos notas para mantener vivo un sonido largo. En el piano sustituye al sonido sostenido de las cuerdas. En tu partitura: Derecha en los compases 45–50.

#### Sesión 6: Reexposición del tema (c. 51–56)

Ejercicios: Hanon 12 (calentamiento), Hanon 48 (técnica) y Czerny nº 9. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar la reexposición de los compases 51–56 igual de segura que el tema de los compases 8–13, en mp y con la izquierda más suave que la melodía.

**Paso a paso:**

1. Escucha la grabación de 51–56 y compárala con la de 8–13: es el mismo tema con pequeñas diferencias.
2. Análisis: compara compás a compás 51–56 con 8–13 con la partitura delante y marca con lápiz lo que cambia, por ejemplo el acorde del primer tiempo del 54 y el final del 56.
3. Digitación: usa la misma que en 8–13 y añade solo la de los compases que cambian.
4. Derecha sola: mp, con las entradas a contratiempo exactas, igual que al principio.
5. Izquierda sola: el ostinato de siempre, más suave que la melodía.
6. Manos juntas a ♩ ≈ 75 (si dudas, empieza en 60). Toca seguidos 8–13 y 51–56 para confirmar que suenan igual salvo en los cambios marcados.
7. Pedal en cada compás con el bajo. Une con lo anterior: toca desde el 48 hasta el 56 para pasar de los trémolos en crescendo al mp de la reexposición.

**Pasajes difíciles:**

- Compases 50–51: el cambio de los trémolos al mp. Practica el final del 50 y el principio del 51 varias veces, bajando el volumen de golpe.
- Compás 54: el acorde distinto al del 11. Tócalo aislado y luego dentro de su frase, para no tocar por costumbre la versión de antes.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 48–56 sin dudar, con los pequeños cambios respecto al tema correctos y la melodía por encima del ostinato.

**Teoría: Entrada a contratiempo.** La melodía no empieza en el pulso fuerte sino justo después, tras un silencio de corchea. Eso la hace flotar por encima del acompañamiento. En tu partitura: Compases 8, 9 y 10, y de nuevo en 51–53.

#### Sesión 7: Final (c. 57–70)

Ejercicios: Hanon 13 (calentamiento), Hanon 22 (técnica) y Czerny nº 16. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el final de los compases 57–70 con las corcheas de la derecha parejas y las notas dobles juntas, el cresc. del 65 y el rit., dim. hasta el calderón final.

**Paso a paso:**

1. Escucha la grabación desde el 57 hasta el final. La derecha toma el movimiento continuo y la izquierda calla en 57–60.
2. Análisis: en 57–66 la derecha toca corcheas continuas con notas dobles en los tiempos fuertes alternando con una nota repetida. La izquierda vuelve con el ostinato en el 61. En el 65 empieza cresc.; en el 67, rit., dim. y la izquierda en 8va; en 69–70, acorde arpegiado en 8va con calderón.
3. Digitación: en 57–66, el pulgar en la nota repetida y las notas dobles con 3-5 o 2-4 según convenga. Escribe la digitación del compás 57 y repítela.
4. Derecha sola, días 1–2: con metrónomo a negra en 50, lenta, cuidando que las dos notas de cada nota doble suenen exactamente juntas. Sube solo cuando suenen juntas.
5. Izquierda sola: el ostinato desde el 61 y los compases 67–70.
6. Manos juntas: metrónomo a negra en 50, luego 60 y 75. Practica 57–60 (solo derecha) seguido de 61, para que la izquierda entre a tiempo.
7. Pedal: en 57–60, poco pedal o cambios en cada medio compás para que no se mezcle. Desde el 61, en cada compás con el bajo. En 69–70, mantenlo durante el calderón y suéltalo despacio.
8. Dinámica: crece desde el 65; en el 67 retarda y baja el volumen a la vez, de forma gradual. El último acorde, arpegiado y suave, se deja sonar.

**Pasajes difíciles:**

- Compases 57–66: las notas dobles juntas dentro de las corcheas. Practica solo las notas dobles en bloque (sin la nota repetida) y luego añade la nota repetida muy ligera.
- Compases 60–61: la entrada de la izquierda tras cuatro compases de silencio. Cuenta los pulsos y practica 59–62 varias veces.
- Compases 67–70: rit., dim. y calderón. Decide cuánto vas a retardar y practícalo con el metrónomo bajando de 75 a 50 por pasos.

**Pasas a la siguiente sesión cuando:** Puedes tocar desde el compás 57 hasta el final a ♩ ≈ 75 con las notas dobles juntas, el crescendo y el rit. graduales y el calderón final controlado.

**Teoría: Ostinato de acompañamiento.** Un mismo dibujo rítmico se repite en la izquierda mientras cambia solo la nota del bajo. Da continuidad, como el traqueteo regular de un tren. En tu partitura: Izquierda en los compases 2–13, 18–21, 30–34 y 39–66.

#### Sesión 8: Obra completa (c. todo)

Ejercicios: Hanon 14 (calentamiento), Hanon 23 (técnica) y Czerny nº 3. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar The Sixth Station completa de memoria a ♩ ≈ 75, con el ostinato estable, los cambios de armadura y de compás seguros y un sonido continuo de principio a fin.

**Paso a paso:**

1. Día 1: toca la obra entera despacio, leyendo, y marca con lápiz los compases donde te paras. Esa es tu lista de trabajo.
2. Trabaja las uniones, cada una con dos compases antes y dos después: 7–8 (entrada del tema), 17–18 (cambio a Sol menor), 28–30 (5/4 y cambio a Fa menor), 37–39 (3/4 con calderón y vuelta a Mi menor), 50–51 (de los trémolos al mp) y 56–57 (inicio del final).
3. Memoria: practica empezar sin partitura desde 1, 8, 18, 22, 30, 39, 45, 51 y 57. Di en voz alta la armadura de cada sección antes de empezar a tocarla.
4. Tempo: con metrónomo a negra en 60, toca la obra entera sin parar. Sube a 68 y luego a 75, el tempo escrito, solo cuando la pasada anterior salga sin errores.
5. Pulso constante: el ostinato es el motor de la obra. Haz una pasada tocando solo la izquierda de principio a fin (con las notas largas donde calla) para fijar el pulso.
6. Dinámica: dibuja la forma de la obra, de mp al crescendo de los trémolos, vuelta a mp, y el crecimiento final antes del dim. Escribe con lápiz el punto más fuerte.
7. Grábate tocando la obra entera y escúchala con la partitura. Comprueba que el tempo no se acelera en los trémolos ni en las corcheas del final.
8. Pasadas de concierto en los últimos días: una o dos al día sin parar ante los errores, a ♩ ≈ 75.

**Pasajes difíciles:**

- Compases 29–30 y 38–39: los compases de 5/4 y 3/4 con los cambios de armadura. Practícalos aislados contando en voz alta hasta que no dudes.
- Compases 45–50 y 57–66: las partes más rápidas de la derecha. Haz pasadas solo de estas zonas con metrónomo para que no corran.
- Toda la obra: no perder el pulso del ostinato. Si te equivocas en la derecha, que la izquierda siga; practica así a propósito en una pasada.

**Pasas a la siguiente sesión cuando:** Puedes tocar la obra completa de memoria a ♩ ≈ 75 dos días seguidos sin parar, y la grabación muestra un pulso estable en todas las secciones.

**Teoría: Modulación por cambio de armadura.** Modular es cambiar de tonalidad. Aquí el compositor traslada la música a otra altura y la partitura lo indica cambiando la armadura. En tu partitura: Compás 18 (2♭, Sol menor), compás 30 (4♭, Fa menor) y compás 39 (vuelta a 1♯, Mi menor).

### 14 · If I Am With You

Yoshimasa Terui · Do mayor (con inicio en Fa lidio) · 3/4 · ♩ = 130 (♩ = 110 hacia el compás 59, ♩ = 140 desde el 61) · dificultad 4/10 · 3 pág. · se estudia del 04/01/2027 al 25/01/2027 · cada sesión dura unos 3 días

| Sesión | Sección (compases) | Foco técnico | Calentamiento | Técnica | Estudio Czerny |
|---|---|---|---|---|---|
| 1 | Introducción (1–16) | acordes quebrados en la izquierda | Hanon 9 | Hanon 41 en Do mayor (con inicio en Fa lidio) | nº 14 (pág. 7) |
| 2 | Tema principal (17–32) | destacar la melodía | Hanon 10 | Hanon 21 | nº 1 (pág. 3) |
| 3 | Sección central (33–48) | pedal y legato | Hanon 11 | Hanon 32 | nº 5 (pág. 4) |
| 4 | Episodio agudo (49–58) | arpegios amplios en la izquierda | Hanon 12 | Hanon 42 en Do mayor (con inicio en Fa lidio) | nº 15 (pág. 8) |
| 5 | Transición y clímax (59–87) | octavas | Hanon 13 | Hanon 51 | nº 21 (pág. 12) |
| 6 | Reexposición y final (88–104) | independencia de dedos | Hanon 14 | Hanon 22 | nº 2 (pág. 3) |
| 7 | Obra completa (todo) | rubato | Hanon 15 | Hanon 33 | nº 11 (pág. 6) |

#### Sesión 1: Introducción (c. 1–16)

Ejercicios: Hanon 9 (calentamiento), Hanon 41 en Do mayor (con inicio en Fa lidio) (técnica) y Czerny nº 14. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 1–16 a ♩ = 100 o más, con la figura de seis corcheas fluida en cada mano y el descenso Fa–Mi–Re–Do claro.

**Paso a paso:**

1. Escucha la pieza siguiendo la partitura: es un vals en 3/4 con las dos manos en clave de sol. En los compases 1–4 la derecha toca sola la figura Fa–La–Si–Do–Si–La; desde el 5 la figura pasa a la izquierda y la derecha toca notas sueltas agudas.
2. Análisis: cada grupo de cuatro compases tiene un bajo distinto: Fa (1–4, con el Si natural que da el color lidio), Mi (5–8), Re (9–12) y Do (13–16). En 9–16 la figura de la izquierda lleva silencios.
3. Digitación de la figura: usa la que tienes anotada en el compás 17 para la izquierda, 5-3-2-1-2-3 sobre Fa–La–Si–Do–Si–La, y aplícala igual en la derecha (1-2-3-4-3-2) en los compases 1–4. Escribe la digitación de cada nuevo grupo (Mi, Re, Do).
4. Mano derecha sola en 1–4 a ♩ = 80: las seis corcheas iguales, con el primer tiempo un poco más pesado como en todo vals.
5. Mano izquierda sola en 5–16: piensa cada grupo de cuatro compases como una posición fija de la mano; antes de cada cambio (compases 5, 9 y 13) prepara la mano nueva durante el último tiempo.
6. Mano derecha sola en 5–16: las notas agudas entran a contratiempo (después de un silencio). Cuenta «1-y-2-y-3-y» en voz alta y toca justo en el «y». En 13–16 hay acordes de dos notas; tócalos juntos.
7. Manos juntas a ♩ = 80, luego 90 y 100. Si una nota a contratiempo se adelanta, toca más lento y di el conteo en voz alta.
8. Pedal: la partitura no lo trae. Prueba primero sin pedal; si lo añades, usa un pedal corto por compás, cambiando en el primer tiempo.
9. Último día: toca los 16 compases seguidos y enlázalos con el compás 17, donde empieza la melodía.

**Pasajes difíciles:**

- Compases 5–16: las notas agudas a contratiempo de la derecha. Toca primero la izquierda sola y después palmea la derecha encima diciendo «1-y-2-y-3-y» hasta que entre exacta.
- Compases 4–5, 8–9 y 12–13: el cambio de posición de la figura. Repite el último tiempo de un grupo con el primero del siguiente cinco veces seguidas.

**Pasas a la siguiente sesión cuando:** Tocas los compases 1–17 a ♩ = 100 sin pararte, con corcheas parejas y las notas a contratiempo en su sitio.

**Teoría: Compás de 3/4 (vals).** Cada compás tiene tres tiempos de negra, con el primero un poco más pesado. Aquí cada negra se divide en dos corcheas, así que la izquierda toca seis notas por compás. En tu partitura: Toda la pieza; el patrón se ve claro en los compases 1–8.

#### Sesión 2: Tema principal (c. 17–32)

Ejercicios: Hanon 10 (calentamiento), Hanon 21 (técnica) y Czerny nº 1. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el tema principal (compases 17–32) con la melodía cantando por encima y la izquierda suave y continua, a ♩ = 110 o más.

**Paso a paso:**

1. Escucha el tema siguiendo la partitura: la derecha canta en negras y blancas en el registro agudo mientras la izquierda sigue con la figura de corcheas.
2. Análisis: el bajo sigue bajando cada cuatro compases (Fa, Mi, Re... ) y hay negra con puntillo más corchea en los compases 20, 24 y 28. Los compases 31–32 cierran con acordes.
3. Digitación: usa la anotada en tu partitura para la melodía (5-2-3 y 4 en los compases 17–18; 5-2-3, 4, 3-2 en el 19–20) y para la izquierda (5-3-2-1-2-3). Completa a lápiz la digitación de 21–32.
4. Mano derecha sola: toca la melodía y cántala en voz alta; dale forma de frase de cuatro compases, creciendo un poco hacia el tercer compás y relajando al cuarto.
5. Mano izquierda sola: las corcheas siempre más suaves que la melodía, con el primer tiempo apenas marcado. Practícala en p a ♩ = 100.
6. Compases 20, 24 y 28: cuenta bien la negra con puntillo (tres corcheas) antes de la corchea; no la acortes.
7. Manos juntas a ♩ = 90, luego 100, 110 y si sale, 120. Escucha que la melodía esté un nivel por encima: dedos de la derecha firmes, izquierda casi sin peso.
8. Pedal: si usas pedal, cambia en cada compás (cada cambio de bajo) justo después del primer tiempo, para que la melodía quede ligada sin mezclar armonías.
9. Último día: une 13–32 y comprueba que la entrada de la melodía en el 17 se nota sin golpearla.

**Pasajes difíciles:**

- Compases 17–30: la izquierda tapa la melodía. Toca la izquierda en pp y la derecha en mf durante varias repeticiones, hasta que el equilibrio salga sin pensarlo.
- Compases 31–32: los acordes de cierre y el cambio de la izquierda hacia la clave de fa del compás 33. Repite 31–33 por separado varias veces.

**Pasas a la siguiente sesión cuando:** Tocas los compases 17–32 a ♩ = 110 o más, con la melodía claramente por encima, y puedes cantarla mientras tocas la izquierda sola.

**Teoría: Modo lidio.** Es una escala mayor con el cuarto grado elevado. Sobre el bajo Fa, el Si natural (en lugar de Si♭) da un sonido luminoso y algo irreal. En tu partitura: Compases 1–4 y 17–20 (figura Fa–La–Si–Do).

#### Sesión 3: Sección central (c. 33–48)

Ejercicios: Hanon 11 (calentamiento), Hanon 32 (técnica) y Czerny nº 5. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar la sección central (compases 33–48) leyendo con seguridad la izquierda en clave de fa, con el Si♭ de 41–42 limpio y frases de cuatro compases claras.

**Paso a paso:**

1. Escucha la sección siguiendo la partitura: la izquierda baja a la clave de fa con arpegios más amplios y la derecha toca dobles notas y acordes, algunos arpegiados (compás 41).
2. Antes de tocar, marca con lápiz el cambio de clave del final del compás 32 (a clave de fa) y el regreso a clave de sol al final del 48.
3. Análisis: las frases son de cuatro compases (33–36, 37–40, 41–44, 45–48). En 41–42 aparece Si♭ en la izquierda: es un acorde prestado que da un color más oscuro por un momento.
4. Mano izquierda sola a ♩ = 80: los arpegios abarcan más de una octava; elige digitación (por ejemplo 5-2-1 y después cambio de posición) y escríbela. Practica despacio los saltos de los compases 37 y 41.
5. Mano derecha sola: las dobles notas (38–40, 43) tócalas con las dos notas exactamente a la vez; el acorde arpegiado del 41 de abajo arriba, rápido.
6. Manos juntas a ♩ = 80, 90 y 100, frase por frase; para cada frase de cuatro compases, toca primero los compases 1 y 2, después 3 y 4, y por último los cuatro.
7. Pedal: un pedal por compás, cambiando con cada nota grave nueva de la izquierda; en 41–42 cambia con cuidado para que el Si♭ no se mezcle con el Si natural anterior.
8. Dinámica: no hay dinámicas impresas; haz que cada frase crezca un poco hacia su centro y se relaje al final.
9. Último día: une 29–48 y toca la transición a la clave de sol del 48 hacia el 49.

**Pasajes difíciles:**

- Compases 33–48: leer la izquierda en clave de fa después de tantos compases en clave de sol. Lee primero las notas en voz alta (nombre de nota) sin tocar y después tócalas despacio.
- Compases 41–42: el Si♭ y el acorde arpegiado. Toca solo esos dos compases manos separadas cinco veces y luego enlázalos con 40 y 43.

**Pasas a la siguiente sesión cuando:** Tocas los compases 33–48 a ♩ = 100 o más sin dudar en los cambios de clave, con el Si♭ de 41–42 limpio.

**Teoría: Bajo descendente por grados.** La nota más grave baja un escalón cada cierto tiempo y arrastra la armonía con ella. Crea una sensación de caída suave muy típica de la música nostálgica. En tu partitura: Fa (1–4) → Mi (5–8) → Mi/Re (9–12) → Do (13–16); se repite en 17–32 y 88–103.

#### Sesión 4: Episodio agudo (c. 49–58)

Ejercicios: Hanon 12 (calentamiento), Hanon 42 en Do mayor (con inicio en Fa lidio) (técnica) y Czerny nº 15. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el episodio agudo (compases 49–58) con la derecha en 8va, textura ligera y silencios respetados, a ♩ = 110 o más.

**Paso a paso:**

1. Escucha el episodio siguiendo la partitura: la derecha toca una octava más alto de lo escrito (línea de 8va de 49 a 57) y la izquierda está en clave de sol con acordes arpegiados.
2. Antes del compás 49, desplaza el cuerpo un poco hacia la derecha del teclado para llegar sin tensión a la octava alta.
3. Análisis: es una música hecha de pocas notas y silencios; las notas de la derecha en 49–50 entran después de silencios de corchea. El compás 58 es de silencio en la derecha y en él la izquierda vuelve a la clave de fa.
4. Mano derecha sola a ♩ = 80: cuenta los silencios en voz alta («1-y-2-y-3-y»), sobre todo en 49–50. Toca con dedos ligeros, sin peso del brazo.
5. Mano izquierda sola: los acordes arpegiados de 49 y 55 son rápidos de abajo arriba; las demás notas, sencillas, en clave de sol.
6. Manos juntas a ♩ = 90, luego 100 y 110. Deja que los silencios suenen: no rellenes con pedal.
7. Pedal: usa poco; un toque corto en las notas largas (52–55) y levántalo en los silencios.
8. Último día: une 45–58 y prepara la vuelta a la posición normal del teclado antes del compás 59.

**Pasajes difíciles:**

- Compases 49–50: las notas a contratiempo en la octava alta. Practica la derecha sola contando los silencios en voz alta hasta que entren justas.
- Compás 48–49: el salto a la 8va. Practica el último tiempo del 48 enlazado con el primero del 49 moviendo el cuerpo antes, no el brazo de golpe.

**Pasas a la siguiente sesión cuando:** Tocas los compases 48–58 a ♩ = 110 o más, con todos los silencios respetados y llegando a la octava alta sin tensión.

**Teoría: Acorde prestado (♭VII).** Es un acorde que no pertenece a la tonalidad y se toma de la tonalidad menor paralela. El Si♭ en Do mayor oscurece el color por un momento. En tu partitura: Compases 41–42 (Si♭ en la mano izquierda).

#### Sesión 5: Transición y clímax (c. 59–87)

Ejercicios: Hanon 13 (calentamiento), Hanon 51 (técnica) y Czerny nº 21. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar la transición y el clímax (compases 59–87) con los cambios de tempo a ♩ = 110 y ♩ = 140 bien preparados y el sonido lleno pero claro.

**Paso a paso:**

1. Escucha esta parte siguiendo la partitura y marca los dos cambios de tempo: ♩ = 110 en el compás 59 y ♩ = 140 en el compás 61.
2. Análisis: en el 59 la izquierda toca un grupo de cinco (cinquillo) y en el 60 la derecha uno de cuatro (cuatrillo); desde el 61 la derecha toca octavas y acordes y la izquierda arpegios amplios en corcheas. En el 66 hay tresillos con Sol♯.
3. Compases 59–61: estúdialos aparte. Los grupos irregulares no tienen que ser matemáticos: reparte las cinco o cuatro notas por igual dentro del tiempo que ocupan, despacio primero.
4. Mano derecha sola de 61 a 87 a ♩ = 90: octavas con 1-5, acordes arpegiados (68, 69, 80) rápidos de abajo arriba. Marca digitación en los pasajes de 62–63 y 74–75.
5. Mano izquierda sola: los arpegios de corcheas cambian de posición casi en cada compás. Aprende cada compás como una forma de acorde y escribe la digitación; en el 82–83 la izquierda pasa a clave de sol, márcalo.
6. Compás 66: practica los tresillos con Sol♯ manos separadas, diciendo «tri-o-la» en cada tiempo.
7. Manos juntas por frases de cuatro compases a ♩ = 90, luego 110 y 130, hasta llegar a ♩ = 140.
8. Pedal: un pedal por compás en los arpegios de la izquierda, cambiando en el primer tiempo; en los cambios de acorde rápidos, mejor medio pedal.
9. Último día: toca 56–87 seguido, respirando antes del compás 59 y del 61 para que los cambios de tempo se sientan naturales.

**Pasajes difíciles:**

- Compases 59–60: el cinquillo y el cuatrillo con cambio de tempo. Practica cada grupo solo, diciendo «uno-dos-tres-cuatro-cinco» al tocar, y después enlázalos.
- Compases 61–75: octavas y acordes de la derecha a ♩ = 140. Estudia a ♩ = 90 con la muñeca suelta y sube de 10 en 10 solo cuando salga limpio tres veces seguidas.
- Compás 66: los tresillos con Sol♯. Toca el compás solo, despacio, y luego con el compás anterior y el siguiente.

**Pasas a la siguiente sesión cuando:** Tocas los compases 58–87 con los cambios a ♩ = 110 y ♩ = 140 en su sitio, sin parar, aunque todavía sea un poco por debajo de 140.

**Teoría: Cambios de tempo.** La cifra junto a la negra indica cuántas negras caben en un minuto. Bajar a 110 y subir a 140 da a la sección central un efecto de tomar aire y lanzarse. En tu partitura: ♩ = 110 hacia el compás 59 y ♩ = 140 en el 61; rit. en 102–104.

#### Sesión 6: Reexposición y final (c. 88–104)

Ejercicios: Hanon 14 (calentamiento), Hanon 22 (técnica) y Czerny nº 2. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar la reexposición y el final (compases 88–104) con la melodía de nuevo por encima del ostinato y un ritardando final bien repartido hasta el Do grave.

**Paso a paso:**

1. Escucha el final siguiendo la partitura: vuelve el tema con la figura de corcheas en la izquierda (de nuevo en clave de sol), el mismo descenso del bajo y un rit. desde el compás 102.
2. Análisis: compara con los compases 17–32; casi todo se repite. Marca las diferencias con lápiz y el cambio a clave de fa de la izquierda en el compás 103, que lleva al Do grave del 104.
3. Repasa la digitación que ya usaste en el tema (5-3-2-1-2-3 en la izquierda y la de la melodía) y aplícala igual.
4. Manos separadas solo en lo que cambia (compases 100–104); el resto ya lo conoces del tema.
5. Manos juntas a ♩ = 110, luego 120 y 130, con la izquierda suave y la melodía cantando.
6. Rit.: empieza a frenar muy poco en el 102 y guarda la mayor parte del freno para los dos últimos compases. Practica contando en voz alta y alargando cada tiempo un poco más que el anterior.
7. Pedal: un pedal por compás; en el último compás, deja el pedal bajado sobre el Do grave y el acorde agudo hasta que el sonido casi desaparezca.
8. Último día: une 80–104 para que el paso del clímax (♩ = 140) al tempo del tema se sienta natural, y termina con el rit.

**Pasajes difíciles:**

- Compases 102–104: repartir el rit. Grábate y escucha si el freno es gradual; si se nota un frenazo brusco, empieza un poco antes y frena menos.
- Compás 103–104: el cambio de clave y el salto al Do grave. Practica el movimiento de la izquierda solo, mirando la tecla de destino antes de saltar.

**Pasas a la siguiente sesión cuando:** Tocas los compases 86–104 a ♩ = 130 con un rit. final gradual y el Do grave sonando largo y tranquilo.

**Teoría: Grupos irregulares.** Un cinquillo reparte cinco notas en el espacio de cuatro, y un tresillo tres en el de dos. Se tocan repartiéndolas por igual, sin acentos intermedios. En tu partitura: Cinquillo y cuatrillo en 59–60; tresillos en 66.

#### Sesión 7: Obra completa (c. todo)

Ejercicios: Hanon 15 (calentamiento), Hanon 33 (técnica) y Czerny nº 11. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar If I Am With You completo a ♩ = 130, con los cambios a ♩ = 110 y ♩ = 140 en su sitio, transiciones fluidas y la melodía siempre por encima.

**Paso a paso:**

1. Escucha la pieza entera con la partitura y marca tu plan: no hay dinámicas impresas, así que decide tú dónde está lo más suave (introducción, episodio agudo) y lo más fuerte (61–87), y escríbelo a lápiz.
2. Une las secciones de dos en dos, practicando siempre los compases de enlace: 15–18, 31–34, 47–50, 57–62 y 85–89.
3. Toca la pieza entera a ♩ = 100 con metrónomo, sin parar aunque falles; anota dónde dudaste y estudia solo esos compases al día siguiente.
4. Memoria: la introducción, el tema y la reexposición comparten la misma figura y el mismo descenso del bajo; apréndelos de memoria primero. Después memoriza la sección central y el clímax por frases de cuatro compases.
5. Sube el tempo por escalones: ♩ = 110, 120 y por último el ♩ = 130 impreso, con el ♩ = 140 del compás 61. No subas un escalón hasta que la pieza salga entera sin parar.
6. Repasa los cambios de clave de la izquierda (33, 48, 82–83, 103) tocando solo esos compases con los ojos en la partitura.
7. Grábate tocando la pieza entera y escúchala: ¿la melodía se oye siempre por encima?, ¿los cambios de tempo suenan preparados?, ¿el rit. final es gradual?
8. Haz al menos una interpretación completa al día como en el recital: sin parar, empezando y terminando con calma.
9. Último día: toca la pieza para alguien o en una grabación final y anota una cosa que salió bien y una que mejorar.

**Pasajes difíciles:**

- Compases 57–61: el silencio del 58 y los dos cambios de tempo seguidos. Ensaya este enlace cinco veces al día dentro de una pasada completa.
- Compases 61–87: mantener ♩ = 140 sin perder claridad. Si se ensucia, toca esta parte a ♩ = 120 hasta que salga limpia y sube después.
- Toda la pieza: los cambios de clave de la izquierda. Lee cada cambio en voz alta antes de las pasadas completas.

**Pasas a la siguiente sesión cuando:** Puedes tocar la pieza de principio a fin sin parar, a ♩ = 130 con los cambios de tempo en su sitio, y en tu grabación la melodía se oye clara de principio a fin.

**Teoría: Compás de 3/4 (vals).** Cada compás tiene tres tiempos de negra, con el primero un poco más pesado. Aquí cada negra se divide en dos corcheas, así que la izquierda toca seis notas por compás. En tu partitura: Toda la pieza; el patrón se ve claro en los compases 1–8.

### 15 · Small Village

Yutaka Yamada · Re mayor / Si menor (relativos) · 3/4 (con compases de 4/4 y 6/4) · Freely; ♩ = 120 (A); più mosso (B); ♩ = 80 (D y F) · dificultad 7/10 · 4 pág. · se estudia del 18/01/2027 al 22/02/2027 · cada sesión dura unos 4 días

| Sesión | Sección (compases) | Foco técnico | Calentamiento | Técnica | Estudio Czerny |
|---|---|---|---|---|---|
| 1 | Introducción libre (1–8) | rubato | Hanon 11 | Hanon 32 | nº 1 (pág. 3) |
| 2 | A – Tema (9–32) | arpegios amplios en la izquierda | Hanon 12 | Hanon 41 en Re mayor / Si menor (relativos) | nº 15 (pág. 8) |
| 3 | B – Più mosso (33–40) | acordes quebrados en la izquierda | Hanon 13 | Hanon 42 en Re mayor / Si menor (relativos) | nº 14 (pág. 7) |
| 4 | C – A tempo y descenso (41–59) | polirritmia 2 contra 3 | Hanon 14 | Hanon 21 | nº 12 (pág. 6) |
| 5 | D – Building (60–67) | pedal y legato | Hanon 15 | Hanon 33 | nº 5 (pág. 4) |
| 6 | E – Clímax (68–83) | destacar la melodía | Hanon 16 | Hanon 22 | nº 6 (pág. 5) |
| 7 | F – Coda (84–95) | escalas rápidas | Hanon 17 | Hanon 38 en Re mayor / Si menor (relativos) | nº 19 (pág. 11) |
| 8 | Obra completa (todo) | acordes plaqué | Hanon 18 | Hanon 48 | nº 8 (pág. 5) |

#### Sesión 1: Introducción libre (c. 1–8)

Ejercicios: Hanon 11 (calentamiento), Hanon 32 (técnica) y Czerny nº 1. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar la introducción libre (compases 1–8) con un tempo flexible que respira, los calderones bien medidos y la cadenza del compás 8 fluida.

**Paso a paso:**

1. Escucha varias grabaciones siguiendo la partitura: «Freely» significa tempo libre; fíjate en cómo cada intérprete estira y recoge el tiempo.
2. Análisis: la armadura tiene dos sostenidos (Fa♯ y Do♯). Hay calderones en los compases 5 y 8, el compás pasa de 3/4 a 4/4 en los compases 7–8 y vuelve a 3/4 en el 9. La «cadenza» está escrita sobre el compás 8 (en la ficha aparece como compás 7). Los bajos del principio llevan 8vb: suenan una octava más graves.
3. Canta la melodía de la derecha antes de tocarla y marca a lápiz dónde respiras: eso te dirá dónde estirar el tiempo.
4. Mano derecha sola: aprende las notas primero en tempo estricto y lento (cuenta los tresillos de 2 y 6 con calma); solo después añade la libertad. En la cadenza del compás 8, agrupa las semicorcheas por tiempos y toca despacio con una digitación fija escrita.
5. Mano izquierda sola: los bajos graves con 8vb y los acordes arpegiados (compases 2 y 6). Mira el teclado en los saltos al registro grave y deja que suenen largos.
6. Manos juntas lento, primero contando y después libre. Respeta las indicaciones de dinámica que ves: mf al inicio, mp en el 6, p en el 7, mf y mp en el 8, y el f final antes del 9.
7. Pedal: pedal largo en las notas graves, cambiando con cada nuevo bajo; en el calderón mantén el pedal hasta que decidas seguir.
8. Último día: toca 1–8 y enlaza con el compás 9 (♩ = 120), contando un compás de 3/4 en tu cabeza durante el calderón final para entrar ya en tempo.

**Pasajes difíciles:**

- Compás 8 (cadenza): las semicorcheas rápidas. Estúdialas en grupos de cuatro, deteniéndote en la primera nota de cada grupo, y luego quita las paradas; aquí la velocidad es libre, prima la claridad.
- Compases 7–9: el cambio de 4/4 a 3/4 y la entrada en tempo. Practica el calderón del 8 y los primeros dos compases de A con el metrónomo a ♩ = 120 sonando desde el compás 9.

**Pasas a la siguiente sesión cuando:** Tocas los compases 1–9 con libertad pero sin perderte, los calderones respiran y la entrada del compás 9 cae en tempo.

**Teoría: Tonalidades relativas.** Re mayor y Si menor comparten la misma armadura de dos sostenidos (Fa♯ y Do♯). La música puede pasar de un color luminoso a otro más melancólico sin cambiar ninguna alteración. En tu partitura: Toda la pieza; el final descansa sobre un Si grave (compases 91–95).

#### Sesión 2: A – Tema (c. 9–32)

Ejercicios: Hanon 12 (calentamiento), Hanon 41 en Re mayor / Si menor (relativos) (técnica) y Czerny nº 15. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el tema de los compases 9–32 a ♩ = 120 en mp, con la melodía sencilla cantando sobre los arpegios de la izquierda y los rit. y accel. en su sitio.

**Paso a paso:**

1. Escucha el tema siguiendo la partitura: melodía sencilla en blancas y negras y la izquierda en corcheas arpegiadas que suben, a veces hasta la clave de sol.
2. Análisis: hay rit. en el 16, accel. en el 17 y «Lightly» en el 20 (mf en la derecha y p en la izquierda). En el 27 hay otro rit. Los acordes arpegiados están en los compases 26, 31 y 32. Marca los cambios de clave de la izquierda (en el 17 y en el 26 sube a clave de sol).
3. Mano izquierda sola a ♩ = 80: aprende cada arpegio como una forma de acorde; elige digitación (5-2-1 subiendo y cambio de posición) y escríbela. Practica los cambios de clave leyendo en voz alta.
4. Mano derecha sola: canta la melodía; los tresillos de los compases 10, 15–17 y 19 cuéntalos «tri-o-la» para que salgan iguales.
5. Manos juntas a ♩ = 80, luego 100 y 120, con el metrónomo y sin los rit. ni accel. al principio.
6. Cuando ya te salga en tempo estricto, añade los rit. y accel. escritos: frena en 16, recupera en 17 y vuelve a frenar en 27.
7. Pedal: un pedal por compás en los arpegios, cambiando con cada bajo nuevo; los acordes arpegiados de 26, 31 y 32, con el pedal bajado antes de arpegiar para que suenen completos.
8. Último día: une 7–32 seguido, desde el final de la introducción.

**Pasajes difíciles:**

- Compases 15–17: los tresillos de enlace con rit. y accel. Practícalos primero a tempo fijo con metrónomo y añade los cambios de velocidad después.
- Compases 17–19 y 26: la izquierda sube a clave de sol. Lee las notas en voz alta antes de tocar y toca muy lento al principio.
- Compases 9–32: la izquierda tapa la melodía. Tócala en p mientras la derecha va en mp o mf.

**Pasas a la siguiente sesión cuando:** Tocas los compases 9–32 a ♩ = 120 con los rit. y accel. en su sitio y la melodía claramente por encima.

**Teoría: Tempo libre y rubato.** «Freely» indica que el pulso no es estricto: puedes estirar y recoger el tiempo como al hablar. Los rit. y accel. escritos te dicen dónde frenar y dónde avanzar. En tu partitura: Compases 1–8 (Freely, accel.), 16–17, 27, 40, 43–45, 51–57, 70–72 y 93–95.

#### Sesión 3: B – Più mosso (c. 33–40)

Ejercicios: Hanon 13 (calentamiento), Hanon 42 en Re mayor / Si menor (relativos) (técnica) y Czerny nº 14. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar la sección B (compases 33–40) più mosso y en mp, con la melodía en 8va y el compás de 4/4 del 40 contado entero.

**Paso a paso:**

1. Escucha la sección B siguiendo la partitura: más movida, con la melodía una octava más alta (8va) y las dos manos en clave de sol al empezar.
2. Análisis: hay más movimiento en la izquierda; en 37–38 la derecha toca corcheas oscilantes y desde el 37 la izquierda baja a clave de fa. El compás 40 está en 4/4, con rit. y mf, antes del a tempo de C.
3. Antes del 33, mueve el cuerpo un poco hacia la derecha para llegar cómodo a la octava alta.
4. Mano derecha sola a ♩ = 90: la melodía en 8va con dedos ligeros; en 37–38 las corcheas oscilantes con la muñeca suelta, girando un poco en cada pareja de notas.
5. Mano izquierda sola: notas sueltas en clave de sol y después el cambio a clave de fa; marca el cambio con lápiz.
6. Manos juntas a ♩ = 90, luego 110 y algo más rápido que el tema (più mosso significa un poco más movido).
7. Compás 40: cuenta «un-dos-tres-cuatro» en voz alta para no recortar el tiempo extra y haz el rit. dentro de él.
8. Pedal: un pedal por compás, más corto que en A para que la textura suene ligera.
9. Último día: une 29–41 para sentir el cambio a più mosso y la vuelta al a tempo del 41.

**Pasajes difíciles:**

- Compases 37–38: las corcheas oscilantes. Practícalas con ritmo puntillo (larga-corta) unas repeticiones y vuelve al ritmo igual.
- Compás 40: el 4/4 tras tantos compases de 3/4. Toca 39–41 contando en voz alta los cuatro tiempos del 40.

**Pasas a la siguiente sesión cuando:** Tocas los compases 33–41 sin parar, un poco más movido que el tema, y el compás 40 dura sus cuatro tiempos.

**Teoría: Cambios de compás.** El número de tiempos por compás cambia para acomodar una frase más larga o más corta. Solo hay que contar más o menos tiempos; la duración de la negra no cambia. En tu partitura: 4/4 en 6–8, 40, 73 y 76; 6/4 en 77; el resto en 3/4.

#### Sesión 4: C – A tempo y descenso (c. 41–59)

Ejercicios: Hanon 14 (calentamiento), Hanon 21 (técnica) y Czerny nº 12. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar la sección C (compases 41–59) a tempo, con los saltos del bajo seguros, las escalas de 52 y 55 limpias y el sonido diluyéndose hasta el Si grave.

**Paso a paso:**

1. Escucha la sección C siguiendo la partitura: vuelve el tempo con bajos que saltan (con pequeñas 8va en la izquierda en 41–43), acordes arpegiados tenidos y escalas descendentes en semicorcheas.
2. Análisis: calderones en 45 y 49, rit. en 43 y 51, mp en 46, acordes arpegiados en 46, 50 y 51, 8va en la derecha desde el 49. La música se va apagando hacia el Si grave de 58–59.
3. Mano izquierda sola en 41–45: los saltos marcados con 8va. Practica el salto solo, mirando la tecla de destino, a ♩ = 70.
4. Escalas de 52 y 55: practícalas lentas, con una digitación escrita y siempre la misma (pasa el pulgar después del 3 o del 4 según la escala). Toca en grupos de cuatro y después seguido.
5. Mano derecha en 49–51: llega a la 8va moviendo el cuerpo antes; los acordes arpegiados de abajo arriba, sin prisa.
6. Manos juntas a ♩ = 80, luego 100 y 120, primero sin calderones ni rit.; después añádelos.
7. Pedal: pedal largo en los acordes arpegiados tenidos y en los calderones; cambia en cada nuevo bajo. En el 58–59, deja el pedal sobre el Si grave.
8. Dinámica: cada frase termina más suave que la anterior; haz el diminuendo hasta un sonido muy pequeño al final.
9. Último día: une 39–59 y enlaza con el ♩ = 80 de la sección D.

**Pasajes difíciles:**

- Compases 52 y 55: las escalas descendentes en semicorcheas. Siempre la misma digitación, primero a la mitad del tempo, en grupos de cuatro con parada en la primera nota.
- Compases 41–43: los saltos del bajo con 8va. Practica solo la izquierda, cinco veces cada salto, mirando antes la tecla de llegada.
- Compases 57–59: los cambios de registro y el Si grave con 8vb. Toca despacio y deja sonar el final sin cortar.

**Pasas a la siguiente sesión cuando:** Tocas los compases 41–59 sin parar, con las escalas de 52 y 55 limpias y un final que se apaga tranquilo sobre el Si grave.

**Teoría: Tresillos y dos contra tres.** Un tresillo divide el tiempo en tres partes iguales en lugar de dos. Cuando una mano toca tresillos y la otra corcheas normales, aparece el polirritmo «dos contra tres». En tu partitura: Sección D (60–67) y coda (90–94).

#### Sesión 5: D – Building (c. 60–67)

Ejercicios: Hanon 15 (calentamiento), Hanon 33 (técnica) y Czerny nº 5. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar la sección D (compases 60–67) a ♩ = 80 con los tresillos de la izquierda fluidos, la melodía clara por encima y un crescendo sostenido de ocho compases.

**Paso a paso:**

1. Escucha la sección D siguiendo la partitura: la izquierda toca tresillos de corchea continuos y la derecha una melodía en negras y blancas, con «Building» y cresc. desde el 62.
2. Análisis: aquí aparece el 2 contra 3: algunas corcheas normales de la derecha caen contra los tresillos de la izquierda (compases 62–63). El compás 67 termina con un calderón.
3. Mano izquierda sola a ♩ = 60: los tresillos cubren mucho teclado; aprende cada compás como una forma de acorde y escribe la digitación. Di «tri-o-la» en cada tiempo.
4. Mano derecha sola: la melodía es sencilla; cántala y dale dirección hacia el compás 67.
5. Manos juntas: toca la izquierda y añade la derecha contando solo los tiempos fuertes; donde hay dos corcheas contra tres, piensa «na-ce-ta» y coloca la segunda corchea entre la segunda y la tercera nota del tresillo.
6. Metrónomo: ♩ = 60, luego 70 y el ♩ = 80 indicado.
7. Pedal: un pedal por compás, cambiando con el bajo, para que los tresillos suenen ligados.
8. Crescendo: empieza en un mf real y crece poco a poco durante ocho compases; marca a lápiz un punto de volumen por cada dos compases para no llegar arriba demasiado pronto.
9. Último día: une 57–67 y respira en el calderón del 67 antes de la sección E.

**Pasajes difíciles:**

- Compases 62–63: el 2 contra 3 entre las manos. Palmea primero (derecha en la rodilla derecha, izquierda en la izquierda) diciendo «na-ce-ta», y luego toca muy lento.
- Compases 60–67: los tresillos amplios de la izquierda. Practícalos en bloque (las tres notas juntas como acorde) para memorizar las posiciones y después vuelve a separarlas.

**Pasas a la siguiente sesión cuando:** Tocas los compases 60–67 a ♩ = 80 con tresillos fluidos, la melodía por encima y un crescendo que crece de verdad hasta el calderón.

**Teoría: Calderón.** El calderón (un arco con un punto) permite alargar una nota o un silencio a tu gusto. Sirve para marcar el final de una idea musical. En tu partitura: Compases 5, 8, 32, 45, 49, 53, 67, 72, 73 y 95.

#### Sesión 6: E – Clímax (c. 68–83)

Ejercicios: Hanon 16 (calentamiento), Hanon 22 (técnica) y Czerny nº 6. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el clímax de los compases 68–83 con acordes llenos en ff, los cambios de compás bien contados y la bajada hasta pp controlada.

**Paso a paso:**

1. Escucha la sección E siguiendo la partitura y marca todo: più mosso y ff (68), molto rit. (70), mp y p (72–73) y después los cambios de compás.
2. Marca con colores cada cambio de compás: 4/4 (73), 3/4 (74), 4/4 (76), 6/4 (77), 3/4 (78). En 77 hay accel. y figuras rápidas en 15ma; en 78 empieza un rit. con p; en 80 hay 15ma y en 81 8va con pp.
3. Mano derecha sola en 68–70: acordes llenos; practica las posiciones en bloque y luego con el ritmo, con peso del brazo pero sin golpear.
4. Compases 73–78: cuenta en voz alta el número de tiempos de cada compás («un-dos-tres-cuatro», «un-dos-tres»...) mientras tocas muy lento.
5. Compases 77–81: las figuras rápidas en 15ma y 8va. Estúdialas manos separadas a la mitad del tempo, mirando bien a qué octava tienes que ir (15ma son dos octavas más arriba).
6. Manos juntas por partes: 68–72, 73–76 y 77–83, primero lento y luego más cerca del tempo.
7. Pedal: pedal lleno en los acordes de 68–70, cambiando con cada acorde nuevo; en 77–81, pedal más corto para que las figuras rápidas no se mezclen.
8. Dinámica: el paso de ff a pp es lo más importante de la sección; practica el molto rit. de 70–72 bajando de volumen poco a poco.
9. Último día: une 64–83 seguido, desde el crescendo de D hasta el final de E.

**Pasajes difíciles:**

- Compases 73–78: los cambios de compás seguidos. Cuenta en voz alta sin tocar, después con palmas y después tocando muy despacio.
- Compases 77–81: las figuras rápidas en 15ma. Practica primero el salto a esa octava sin tocar las notas rápidas, y añade las notas a la mitad del tempo.
- Compases 68–72: pasar del ff al pp sin cortes. Grábate y escucha si el diminuendo es gradual.

**Pasas a la siguiente sesión cuando:** Tocas los compases 68–83 sin parar, contando bien cada cambio de compás, y se oye claro el camino del ff al pp.

**Teoría: Sol♯ y color dórico.** El Sol♯ no pertenece a la armadura. En el contexto de Si menor equivale al sexto grado elevado del modo dórico, que suena más abierto y «folclórico» que el menor normal. En tu partitura: Compases 19, 34, 42, 48, 61 y 69.

#### Sesión 7: F – Coda (c. 84–95)

Ejercicios: Hanon 17 (calentamiento), Hanon 38 en Re mayor / Si menor (relativos) (técnica) y Czerny nº 19. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar la coda de los compases 84–95 a ♩ = 80, del p al pp, con los tresillos suaves y la última nota en 15ma sostenida hasta apagarse.

**Paso a paso:**

1. Escucha la coda siguiendo la partitura: el tema vuelve en registro grave, con tresillos suaves y un Si grave con 8vb al final.
2. Análisis: ♩ = 80 en el 84, p; mp en 87 y 89; el Si grave con 8vb en 91–92; mf en 92 y rit. desde el 93; 15ma en 94–95 y calderón final en pp. La pieza termina en Si menor.
3. Mano izquierda sola: los tresillos de 89–90 y 92–95 en clave de sol a partir del 93; marca el cambio de clave.
4. Mano derecha sola: las notas del registro grave en 84–88 con sonido redondo; los tresillos de 92 suaves y parejos; la 15ma del 94–95 con el cuerpo preparado.
5. Manos juntas a ♩ = 60, luego 70 y 80.
6. Pedal: pedal largo sobre el Si grave del 91–92 y en los tresillos finales, cambiando solo cuando cambie la armonía; en el final, mantén el pedal hasta que el sonido se apague.
7. Rit. final: empieza a frenar en el 93 poco a poco; el calderón del 95 dura lo que tarde la nota en desaparecer.
8. Último día: une 78–95 para sentir el regreso a la calma después del clímax.

**Pasajes difíciles:**

- Compases 91–93: el Si grave con 8vb y los tresillos encima. Practica primero el salto al Si grave solo, y después añade los tresillos con el pedal bajado.
- Compases 94–95: la nota en 15ma con calderón. Prepara el movimiento del brazo antes y toca la última nota en pp, dejándola sonar sin levantar el pedal antes de tiempo.

**Pasas a la siguiente sesión cuando:** Tocas los compases 84–95 a ♩ = 80 con un rit. final gradual y la última nota se apaga sola antes de que levantes el pedal.

**Teoría: 8va, 15ma y 8vb.** Indican tocar una octava arriba (8va), dos octavas arriba (15ma) o una octava abajo (8vb) de lo escrito. La pieza los usa para abarcar casi todo el teclado. En tu partitura: 8va en 33–36 y 49–53; 15ma en 77–80 y 94–95; 8vb en 1–2, 88 y 92.

#### Sesión 8: Obra completa (c. todo)

Ejercicios: Hanon 18 (calentamiento), Hanon 48 (técnica) y Czerny nº 8. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar Small Village completo, con la introducción libre, el tema a ♩ = 120, los cambios de compás bien contados y un arco expresivo claro hasta el final en pp.

**Paso a paso:**

1. Escucha la pieza entera con la partitura y marca tu plan de tempos: Freely (1–8), ♩ = 120 (9), più mosso (33), a tempo (41), ♩ = 80 (60), più mosso (68) y ♩ = 80 (84).
2. Une las secciones de dos en dos practicando siempre los enlaces: 7–10, 31–34, 39–42, 57–61, 66–69 y 82–85.
3. Toca la pieza entera lento, con el tema a ♩ = 100, sin parar aunque falles; anota dónde dudaste y estudia solo esos compases al día siguiente.
4. Memoria: memoriza primero el tema (9–32) y la coda, después C y D; la introducción y el clímax (con sus cambios de compás) al final. Comprueba la memoria empezando desde cada letra de ensayo.
5. Sube el tempo por escalones hasta los tempos impresos: ♩ = 120 en A y ♩ = 80 en D y F.
6. Revisa todos los cambios de compás (7–9, 40–41, 73–78) contando en voz alta durante una pasada completa.
7. Grábate tocando la pieza entera y escúchala: ¿el rubato de la introducción suena natural?, ¿se oye la melodía sobre los arpegios?, ¿el crescendo de D y el ff de E llegan a su punto?
8. Haz al menos una interpretación completa al día como en el recital, sin parar y con el final apagándose del todo.
9. Último día: toca la pieza para alguien o grábala como versión final y anota una cosa a mejorar.

**Pasajes difíciles:**

- Compases 7–9 y 39–41: entrar en tempo después de un pasaje libre o de un rit. Cuenta un compás en tu cabeza antes de cada entrada.
- Compases 73–78: los cambios de compás seguidos dentro de la pasada completa. Repásalos contando en voz alta antes de cada pasada.
- Toda la pieza: los muchos rit., accel. y calderones pueden romper la continuidad. Decide cuánto estiras cada uno y hazlo igual en cada pasada.

**Pasas a la siguiente sesión cuando:** Puedes tocar Small Village de principio a fin sin parar, con los cambios de compás contados y un final en pp que se apaga solo, y tu grabación suena como una historia con principio y final.

**Teoría: Tonalidades relativas.** Re mayor y Si menor comparten la misma armadura de dos sostenidos (Fa♯ y Do♯). La música puede pasar de un color luminoso a otro más melancólico sin cambiar ninguna alteración. En tu partitura: Toda la pieza; el final descansa sobre un Si grave (compases 91–95).

### 08 · Lit

Kensuke Ushio (arr. Torby Brand) · Mi mayor · 3/4 · Gently ♩ = 70 – With Passion ♩ = 96 – Peacefully ♩ = 63 · dificultad 5/10 · 2 pág. · se estudia del 25/01/2027 al 22/02/2027 · cada sesión dura unos 4 días

| Sesión | Sección (compases) | Foco técnico | Calentamiento | Técnica | Estudio Czerny |
|---|---|---|---|---|---|
| 1 | Inicio suave (1–8) | octavas | Hanon 13 | Hanon 51 | nº 21 (pág. 12) |
| 2 | Acordes tenidos (9–17) | acordes quebrados en la izquierda | Hanon 14 | Hanon 41 en Mi mayor | nº 14 (pág. 7) |
| 3 | Con pasión (18–25) | arpegios amplios en la izquierda | Hanon 15 | Hanon 42 en Mi mayor | nº 15 (pág. 8) |
| 4 | Clímax (26–33) | terceras legato | Hanon 16 | Hanon 48 | nº 9 (pág. 5) |
| 5 | Descenso (34–41) | acordes plaqué | Hanon 17 | Hanon 53 en Mi mayor | nº 8 (pág. 5) |
| 6 | Melodía en octavas (42–51) | destacar la melodía | Hanon 18 | Hanon 21 | nº 1 (pág. 3) |
| 7 | Final en paz (52–58) | pedal y legato | Hanon 19 | Hanon 32 | nº 5 (pág. 4) |
| 8 | Obra completa (todo) | rango dinámico | Hanon 20 | Hanon 33 | nº 30 (pág. 16) |

#### Sesión 1: Inicio suave (c. 1–8)

Ejercicios: Hanon 13 (calentamiento), Hanon 51 (técnica) y Czerny nº 21. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 1–8 a ♩ = 70 en p, con el dibujo de la derecha en bucle y el ritmo con puntillo exacto sobre el bajo descendente.

**Paso a paso:**

1. Día 1: escucha la grabación siguiendo la partitura. Fíjate en cómo la derecha repite el mismo dibujo mientras el bajo baja de semitono en semitono.
2. Análisis: Mi mayor (cuatro sostenidos), 3/4, Gently ♩ = 70, p. La derecha toca Sol♯4 – Si3 – Fa♯4 – Si3 en corcheas y luego La4 en corchea con puntillo y Sol♯4 en semicorchea. La izquierda toca blancas con puntillo: Mi, Re♯ y Re♮ (compases 1–3 y 5–7). En los compases 4 y 8, la derecha toca terceras en negras y la izquierda La – Si – Do♯.
3. Digitación de la derecha: 1 en Si3, 3 en Fa♯4, 4 en Sol♯4 y 5 en La4. Escríbela en el compás 1 y en el 4 (terceras).
4. Derecha sola, días 1–2: toca el dibujo en bucle hasta que el puntillo salga sin pensar. La semicorchea va justo antes del pulso siguiente, corta y ligera, no como un tresillo.
5. Izquierda sola: blancas con puntillo de tres pulsos completos; cuenta «1 2 3». Comprueba el becuadro del Re en el compás 3 y en el 7.
6. Manos juntas: metrónomo a negra en 50, luego 60 y 70. El bajo suena con la primera corchea de cada compás.
7. Pedal: cambia en cada compás con el bajo nuevo. En los compases 4 y 8, cambia con cada negra de la izquierda o usa muy poco pedal para que las terceras queden claras.
8. Dinámica: p tranquilo; deja que el cambio de color del bajo (Mi, Re♯, Re♮) sea lo que se oiga.

**Pasajes difíciles:**

- Compases 1–3 y 5–7: el ritmo de corchea con puntillo y semicorchea. Practica diciendo «laaa-ta» con el metrónomo a la corchea, y luego a la negra.
- Compases 4 y 8: terceras ligadas en la derecha. Practica cada tercera en bloque y luego el paso de una a otra sin levantar ambos dedos a la vez.
- Compás 3: el Re♮ del bajo. Toca 2–4 nombrando el bajo en voz alta para no volver al Re♯ por costumbre.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 1–8 a ♩ = 70 manos juntas, con el puntillo exacto, el bajo descendente claro y el pedal limpio.

**Teoría: Bajo cromático descendente (cliché de línea).** El acorde de arriba se mantiene mientras el bajo baja de semitono en semitono. Es un recurso muy emotivo: la armonía cambia de color sin que la mano derecha se mueva. En tu partitura: Izquierda en los compases 1–3 y 5–7 (Mi – Re♯ – Re♮) y de nuevo en 52–54.

#### Sesión 2: Acordes tenidos (c. 9–17)

Ejercicios: Hanon 14 (calentamiento), Hanon 41 en Mi mayor (técnica) y Czerny nº 14. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 9–17 con los acordes largos completos de tres pulsos, el 8va bassa del 13 y el crescendo de 16–17 que prepara el cambio de tempo.

**Paso a paso:**

1. Escucha la grabación de 8–18, fíjate en la duración de los acordes largos y en el crescendo que lleva al With Passion.
2. Análisis: la derecha toca acordes en blancas con puntillo y, en algunos compases, negras. La izquierda toca notas largas graves; en el 13 hay 8va bassa (una octava más grave). En el 17 la derecha salta al agudo con una nota larga y la izquierda toca un arpegio rápido en 8va bassa. Hay regulador de crescendo en 16–17.
3. Digitación: escribe la de cada acorde de la derecha, buscando que los cambios de acorde no obliguen a saltar.
4. Derecha sola: cuenta los tres pulsos de cada acorde largo en voz alta; es fácil acortarlos.
5. Izquierda sola: bajos largos y el arpegio del 17. Practica el arpegio primero como acorde en bloque y luego rápido, de abajo arriba, terminando en el pulso del 18.
6. Manos juntas: metrónomo a negra en 50, luego 60 y 70.
7. Pedal: cambia con cada acorde o bajo nuevo; en 17, mantén el pedal durante el arpegio y cámbialo en el primer tiempo del 18.
8. Une: toca 16–19 con metrónomo, cambiando a 96 en el 18, para fijar el tempo nuevo.

**Pasajes difíciles:**

- Compases 9–16: acordes largos que se acortan. Cuenta en voz alta y no levantes los dedos hasta el «1» del compás siguiente.
- Compás 17: el salto de la derecha al agudo y el arpegio de la izquierda. Practica las dos manos por separado y luego juntas lentas.
- Compases 17–18: el cambio de 70 a 96. Pon el metrónomo a 96 durante el 17 en tu cabeza y entra en el 18 ya con ese pulso.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 8–18 con los acordes completos, el 8va bassa correcto y la entrada del 18 al tempo nuevo.

**Teoría: Compás de 3/4.** Cada compás tiene tres pulsos de negra, con el acento en el primero. Da el balanceo propio de un vals. En tu partitura: Toda la pieza; se ve claro en los acordes de blanca con puntillo de 9–16.

#### Sesión 3: Con pasión (c. 18–25)

Ejercicios: Hanon 15 (calentamiento), Hanon 42 en Mi mayor (técnica) y Czerny nº 15. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 18–25 With Passion a ♩ = 96 en f, con el dibujo de la derecha estable y la izquierda sosteniendo las octavas con su acento al final del compás.

**Paso a paso:**

1. Escucha la grabación de 17–26: el tempo sube de golpe y el sonido se vuelve intenso.
2. Análisis: With Passion ♩ = 96, f. La derecha repite el dibujo inicial con un acorde en el primer tiempo. La izquierda toca una octava larga ligada y, al final del compás, un rebote en octava con acento. En algunos compases (por ejemplo, el 20 y el 25) la izquierda toca blanca y negra.
3. Digitación: en la derecha, la misma del principio con el acorde del primer tiempo añadido (5 en la nota de arriba). En la izquierda, octavas con 5-1.
4. Derecha sola: metrónomo a negra en 70 (el tempo anterior) y sube de 6 en 6 hasta 96. El acorde del primer tiempo con peso, las corcheas siguientes más ligeras.
5. Izquierda sola: sostén la octava ligada y no la vuelvas a tocar; el acento va en la última corchea, no en el primer tiempo.
6. Manos juntas: metrónomo a negra en 70, 80, 88 y 96.
7. Pedal: cambia en cada compás con la octava nueva; si el rebote acentuado se ensucia, cambia también ahí.
8. Une con lo anterior: toca 16–20 con el cambio de tempo hasta que entres en el 18 sin dudar.

**Pasajes difíciles:**

- Compases 18–25: el acento en la última corchea de la izquierda. Practica solo la izquierda contando «1 2 3 y» y acentuando el «y».
- Compases 18–25: mantener el dibujo de la derecha a 96 sin correr. Practica con metrónomo y vuelve a 80 si notas que se precipita.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 16–26 entrando a ♩ = 96 en el 18, con el f lleno y el acento de la izquierda en su sitio.

**Teoría: Ostinato melódico.** La derecha repite el mismo dibujo corto compás tras compás. Al no cambiar, el oído se fija en lo que sí cambia: el bajo y la dinámica. En tu partitura: Derecha en 1–3, 5–7, 18–33 y 52–54.

#### Sesión 4: Clímax (c. 26–33)

Ejercicios: Hanon 16 (calentamiento), Hanon 48 (técnica) y Czerny nº 9. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el clímax de los compases 26–33 en ff, con la derecha una octava más alta y segura y los arpegios quebrados de la izquierda en una posición por compás.

**Paso a paso:**

1. Escucha la grabación de 25–34. Es lo más fuerte de la obra: la derecha sube una octava y la izquierda se mueve en corcheas.
2. Análisis: ff. La derecha toca el dibujo con notas dobles en los tiempos fuertes. La izquierda toca un bajo en octava en el primer tiempo y luego corcheas quebradas. En el 30 la derecha toca un acorde arpegiado. En el 33 hay una nota grave entre paréntesis en la izquierda (opcional).
3. Digitación de la izquierda: agrupa cada compás en una sola posición de mano; 5 en el bajo y el resto con 1-2-3. Escríbela en 26 y 30.
4. Izquierda sola, días 1–2: con rotación de muñeca, metrónomo a negra en 60. Sube de 6 en 6 hasta 96.
5. Derecha sola: las notas dobles de los tiempos fuertes con peso de brazo; las corcheas intermedias más ligeras.
6. Manos juntas: metrónomo a negra en 60, 72, 84 y 96.
7. Pedal: cambia en cada compás con el bajo.
8. Dinámica: ff sin golpes; usa el peso del cuerpo y deja algo de margen para el mf del 34.

**Pasajes difíciles:**

- Compases 26–33: los arpegios quebrados de la izquierda. Practica cada compás como acorde en bloque y luego quebrado, moviendo la muñeca en círculo.
- Compases 26–33: la derecha en registro agudo con notas dobles. Practica la nota superior sola como melodía y luego añade la segunda nota.
- Compás 30: el acorde arpegiado. Practícalo aislado, rápido y con la nota de arriba en el pulso.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 25–34 a ♩ = 96 en ff con la izquierda fluida y la derecha clara, sin tensión en los brazos.

**Teoría: Ritmo con puntillo.** Una corchea con puntillo seguida de una semicorchea reparte el pulso en largo–corto. Da un pequeño impulso al final de cada compás. En tu partitura: Tercer tiempo de la derecha en los compases 1–3 y en toda la sección 18–33.

#### Sesión 5: Descenso (c. 34–41)

Ejercicios: Hanon 17 (calentamiento), Hanon 53 en Mi mayor (técnica) y Czerny nº 8. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el descenso de los compases 34–41 en mf, con el ritmo de la izquierda preciso y las notas largas de la derecha sostenidas, incluidos los compases de silencio.

**Paso a paso:**

1. Escucha la grabación de 33–42: el movimiento se calma y la textura cambia a acordes.
2. Análisis: mf. La derecha toca terceras y acordes en blancas con puntillo y, en algunos compases, negra – negra con puntillo – corchea. La izquierda toca acordes de quinta y octava con ritmo de negra con puntillo. En los compases 37 y 41 la derecha calla; en el 41 hay regulador de crescendo.
3. Ritmo de la izquierda: marca el ritmo con palmas antes de tocarlo, contando «1 2 3» con la corchea en voz alta.
4. Izquierda sola: acordes de quinta y octava con 5-2-1 o 5-1; muñeca suelta para los acordes repetidos.
5. Derecha sola: sostén las blancas con puntillo los tres pulsos. En 37 y 41 cuenta el silencio completo.
6. Manos juntas: metrónomo a negra en 60, luego 80 y 96.
7. Pedal: cambia con cada acorde nuevo de la izquierda.
8. Dinámica: mf, más tranquilo que el clímax; en el 41 crece hacia la sección en octavas.

**Pasajes difíciles:**

- Compases 34–41: el ritmo con puntillo de la izquierda. Palmas, luego la mano sola en una sola tecla, y después con los acordes.
- Compases 37 y 41: los silencios de la derecha. Cuenta en voz alta y mantén la izquierda en tempo; no los acortes.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 33–42 a ♩ = 96 con el ritmo de la izquierda exacto, las notas largas completas y los silencios contados.

**Teoría: Cambios de tempo con carácter.** La pieza tiene tres velocidades, cada una con una palabra que describe la intención. El tempo forma parte de la expresión, no solo de la velocidad. En tu partitura: Compás 1 (Gently, 70), compás 18 (With Passion, 96) y compás 52 (Peacefully, 63).

#### Sesión 6: Melodía en octavas (c. 42–51)

Ejercicios: Hanon 18 (calentamiento), Hanon 21 (técnica) y Czerny nº 1. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 42–51 con la melodía en octavas de la derecha segura en sus entradas a contratiempo y la izquierda en corcheas continuas.

**Paso a paso:**

1. Escucha la grabación de 41–52 y fíjate en las entradas de la derecha después de un silencio de corchea.
2. Análisis: la derecha toca la melodía en octavas, con entradas a contratiempo. La izquierda toca corcheas quebradas con bajo, quinta y octava. En 48–51 las notas largas de la derecha se ligan y suben al agudo; en 50–51 la izquierda calla.
3. Digitación: octavas con 1-5 (1-4 en teclas negras si te ayuda). Mantén la mano abierta en posición de octava y mueve el brazo, no los dedos.
4. Izquierda sola: corcheas regulares con la mano en una posición por compás; metrónomo a negra en 60.
5. Derecha sola: cuenta «1 y 2 y 3 y» y entra justo en el «y». Practica los saltos de octava mirando la partitura, no la mano.
6. Manos juntas: metrónomo a negra en 60, 72, 84 y 96.
7. Pedal: cambia en cada compás con el bajo; en 50–51, mantén el pedal en la nota larga y levántalo antes del 52.
8. Une con lo siguiente: toca 49–53 para preparar el cambio a ♩ = 63 del 52.

**Pasajes difíciles:**

- Compases 42–47: las entradas a contratiempo en octavas. Practica con metrónomo diciendo «y» en voz alta y tocando solo esas entradas.
- Compases 42–51: los saltos de octava sin tensión. Mano abierta pero blanda, y el brazo guía; si duele, para y suelta la mano.
- Compases 50–52: de la nota larga al Peacefully. Practica el paso de 96 a 63 contando en voz alta el nuevo pulso durante el 51.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 41–52 a ♩ = 96 con las octavas en su sitio y entrar en el 52 al nuevo tempo.

**Teoría: Forma ternaria (A–B–A).** La música presenta una idea, se aleja con una parte contrastante y regresa al principio. Es la forma más habitual en piezas cortas. En tu partitura: A: 1–17; B: 18–51; A abreviada: 52–58.

#### Sesión 7: Final en paz (c. 52–58)

Ejercicios: Hanon 19 (calentamiento), Hanon 32 (técnica) y Czerny nº 5. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el final de los compases 52–58 a ♩ = 63 en p, con el dibujo inicial más lento, el rit. gradual del 54 y el acorde final sostenido con calderón.

**Paso a paso:**

1. Escucha la grabación de 50 al final: tras el agudo, vuelve el dibujo del principio más lento y tranquilo.
2. Análisis: Peacefully ♩ = 63, p. La derecha repite el dibujo del principio sobre el bajo Mi – Re♯ – Re♮. En el 54 hay rit. En los últimos compases, un acorde ligado con calderón y una nota grave en 8va bassa en la izquierda.
3. Digitación: la misma del compás 1. Para el acorde final, escoge una posición que puedas mantener sin tensión.
4. Derecha sola: el dibujo a 63, más lento que al principio; deja respirar cada compás.
5. Izquierda sola: el bajo cromático y la nota grave final en 8va bassa (una octava más grave de lo escrito).
6. Manos juntas: metrónomo a 63, y en el rit. del 54 alarga cada pulso un poco más que el anterior.
7. Pedal: cambia con cada bajo; en el acorde final, mantenlo durante el calderón y suéltalo despacio.
8. Une con lo anterior: toca del 48 al final para ensayar el paso del agudo al Peacefully.

**Pasajes difíciles:**

- Compases 51–52: el cambio de tempo de 96 a 63. Practícalo con metrónomo: un compás a 96, silencio mental, y entrada a 63.
- Compases 54–55: el rit. gradual. Practica bajando el metrónomo de 63 a 50 por pasos y luego hazlo sin metrónomo.
- Compases 56–58: el acorde final y la nota grave en 8va bassa. Prepara la mano izquierda antes y deja sonar el calderón sin cortar.

**Pasas a la siguiente sesión cuando:** Puedes tocar del compás 48 al final con el tempo nuevo a 63, el rit. gradual y el acorde final sostenido.

**Teoría: Bajo cromático descendente (cliché de línea).** El acorde de arriba se mantiene mientras el bajo baja de semitono en semitono. Es un recurso muy emotivo: la armonía cambia de color sin que la mano derecha se mueva. En tu partitura: Izquierda en los compases 1–3 y 5–7 (Mi – Re♯ – Re♮) y de nuevo en 52–54.

#### Sesión 8: Obra completa (c. todo)

Ejercicios: Hanon 20 (calentamiento), Hanon 33 (técnica) y Czerny nº 30. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar Lit completa de memoria, con los tres tempos (70, 96 y 63) bien diferenciados y transiciones seguras entre ellos.

**Paso a paso:**

1. Día 1: toca la obra entera despacio, leyendo, y marca con lápiz los compases donde te paras. Esa es tu lista de trabajo.
2. Trabaja las uniones, cada una con dos compases antes y dos después: 16–19 (de 70 a 96), 25–27 (llegada al ff), 33–35 (de ff a mf), 41–43 (entrada de las octavas) y 50–53 (de 96 a 63).
3. Memoria: practica empezar sin partitura desde 1, 9, 18, 26, 34, 42 y 52. Di en voz alta el tempo de cada sección antes de empezar.
4. Tempo: haz una pasada completa con todos los tempos al 80 % (56, 77 y 50). Cuando salga, súbelos hasta los escritos: ♩ = 70, ♩ = 96 y ♩ = 63.
5. Dinámica: la obra va de p a f, ff, mf y vuelve a p. Toca una pasada pensando solo en esa curva y deja margen para el ff del 26.
6. Pedal: repasa todos los cambios en una pasada lenta, escuchando que el bajo cromático y los acordes queden limpios.
7. Grábate tocando la obra entera y comprueba con el metrónomo que cada sección está en su tempo y que el 18 y el 52 cambian de verdad.
8. Pasadas de concierto en los últimos días: una o dos al día sin parar ante los errores, a los tempos escritos.

**Pasajes difíciles:**

- Compases 17–18 y 51–52: los cambios de tempo. Practícalos aislados con metrónomo hasta que salgan a la primera.
- Compases 26–33 y 42–51: las zonas más físicas. Haz pasadas solo de estas partes cuidando que el brazo esté suelto.
- Compases 52–58: el final después del esfuerzo. Haz pasadas desde el 42 hasta el final para tocar la calma cuando ya estás cansado.

**Pasas a la siguiente sesión cuando:** Puedes tocar la obra completa de memoria dos días seguidos sin parar, y la grabación muestra los tres tempos diferenciados.

**Teoría: Compás de 3/4.** Cada compás tiene tres pulsos de negra, con el acento en el primero. Da el balanceo propio de un vals. En tu partitura: Toda la pieza; se ve claro en los acordes de blanca con puntillo de 9–16.

### 02 · Clair de Lune

Claude Debussy · Re♭ mayor · 9/8 · Andante très expressif · dificultad 8/10 · 5 pág. · se estudia del 22/02/2027 al 05/04/2027 · cada sesión dura unos 5 días

| Sesión | Sección (compases) | Foco técnico | Calentamiento | Técnica | Estudio Czerny |
|---|---|---|---|---|---|
| 1 | Inicio: Andante très expressif (1–14) | terceras legato | Hanon 15 | Hanon 48 | nº 24 (pág. 13) |
| 2 | Tempo rubato (15–26) | arpegios amplios en la izquierda | Hanon 16 | Hanon 41 en Re♭ mayor | nº 29 (pág. 15) |
| 3 | Un poco mosso (27–36) | destacar la melodía | Hanon 17 | Hanon 21 | nº 25 (pág. 13) |
| 4 | En animant (37–42) | pedal y legato | Hanon 18 | Hanon 32 | nº 28 (pág. 14) |
| 5 | Calmato (43–50) | polirritmia 2 contra 3 | Hanon 19 | Hanon 22 | nº 18 (pág. 10) |
| 6 | A Tempo I: reexposición (51–65) | rubato | Hanon 20 | Hanon 33 | nº 30 (pág. 16) |
| 7 | Coda (66–72) | rango dinámico | Hanon 1 | Hanon 34 | nº 31 (pág. 16) |
| 8 | Obra completa (todo) | acordes plaqué | Hanon 2 | Hanon 51 | nº 35 (pág. 18) |

#### Sesión 1: Inicio: Andante très expressif (c. 1–14)

Ejercicios: Hanon 15 (calentamiento), Hanon 48 (técnica) y Czerny nº 24. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 1–14 en pp con terceras ligadas en la derecha, ligaduras de prolongación respetadas y dosillos encajados en el 9/8.

**Paso a paso:**

1. Día 1: escucha una grabación del inicio siguiendo la partitura. Fíjate en que la música empieza con silencio de corchea y que casi todas las notas largas están ligadas a través de la barra de compás.
2. Análisis: Re♭ mayor, 5♭, 9/8 (tres pulsos de tres corcheas). La derecha toca terceras que bajan (compases 1–4) y luego una línea de corcheas con voz inferior (5–8). Los dosillos aparecen en el compás 3 (derecha), el 8 (izquierda) y los compases 13 y 14.
3. Digitación: escribe la digitación de las terceras de los compases 1–4 de forma que siempre haya una nota que una con la siguiente (por ejemplo 2-4 y 1-3 alternando). En los compases 5–8 marca la derecha para sostener las notas largas de la voz inferior mientras se mueven las corcheas.
4. Manos separadas: cuenta las corcheas en voz alta, «1-2-3, 4-5-6, 7-8-9», y toca cada mano sola sosteniendo exactamente las ligaduras. La izquierda está escrita en clave de sol en los compases 1–6: lee con calma.
5. Dosillos: practica contra el metrónomo marcando la negra con puntillo; las dos notas del dosillo dividen el pulso en dos mitades iguales. Hazlo primero con palmas y luego en el piano.
6. Manos juntas con metrónomo: corchea = 84 al principio, hasta negra con puntillo ≈ 40–46 como objetivo orientativo (no hay número impreso). Mantén un pp real pero audible.
7. Pedal: primero sin pedal, para oír tu legato de dedos. Después pedal de resonancia cambiado al cambiar la armonía (en el primer tiempo de cada compás, más o menos), levantando y bajando justo después del ataque. La indicación «con sordina» pide además el pedal izquierdo.
8. Compases 9–14: el compás 9 tiene un acorde agudo y la izquierda cruza a la clave de sol; desde el 11 vuelve a clave de fa con acordes. Respeta el regulador de crescendo del compás 13 y el de diminuendo del 14.
9. Último día: toca 1–14 de memoria dos veces y grábalo: escucha si las ligaduras se sostienen y si las terceras suenan como una sola línea.

**Pasajes difíciles:**

- Compases 1–4: las terceras ligadas pierden el legato. Toca solo la nota superior ligada con la digitación de las terceras, luego solo la inferior, y por último juntas.
- Compases 3, 13 y 14: los dosillos se convierten en corcheas normales. Cuenta en voz alta por pulsos y di «un-dos» en el dosillo, contra el metrónomo en negra con puntillo.
- Compases 9–10: el salto de la izquierda al registro agudo y vuelta. Practica solo el salto mirando la tecla de destino, en pp.

**Pasas a la siguiente sesión cuando:** Tocas 1–14 en pp de memoria con las ligaduras sostenidas, los dosillos exactos y un pedal que no emborrona.

**Teoría: Compás compuesto 9/8.** Cada compás tiene tres pulsos y cada pulso se divide en tres corcheas. Da un balanceo natural, como una barcarola. En tu partitura: Toda la pieza; la indicación 9/8 está en el compás 1.

#### Sesión 2: Tempo rubato (c. 15–26)

Ejercicios: Hanon 16 (calentamiento), Hanon 41 en Re♭ mayor (técnica) y Czerny nº 29. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 15–26 en Tempo rubato con la melodía de la derecha destacada sobre los acordes y el crescendo gradual desde el 19.

**Paso a paso:**

1. Día 1: escucha 15–26 con la partitura. Observa «Tempo rubato» y pp en el 15, «peu à peu cresc. et animé» en el 19 y los acordes arpegiados en 8va con «dim. molto» en 25–26.
2. Análisis: la derecha toca acordes con la melodía en la nota más aguda (con marcas de tenuto); la izquierda empieza cada frase con una octava grave larga (15 y 17) y salta a acordes en clave de sol. En el 19 hay un seisillo en las dos manos.
3. Digitación: marca la derecha para que la nota superior se toque siempre con 4 o 5 y se pueda ligar de un acorde al siguiente. En la izquierda, decide qué dedo toma la octava grave y cuál el primer acorde agudo.
4. Derecha sola: primero solo la melodía superior, cantando. Luego añade el resto del acorde muy suave, de modo que la melodía siga sonando arriba.
5. Izquierda sola: practica el salto de la octava grave del compás 15 al acorde en clave de sol, y en el 17 (con m.g.). Mantén los acordes repetidos con tenuto suaves e iguales.
6. Manos juntas con metrónomo primero: corchea = 84; luego quita el metrónomo y aplica el rubato: estira levemente la cima de la frase y recupera después.
7. Pedal: cambia en cada octava grave para que el bajo quede sosteniendo la armonía mientras la mano izquierda salta; luego cambia con cada armonía nueva. Escucha y limpia cuando cambien los acordes repetidos.
8. Dinámica: del pp del 15 a un crescendo progresivo desde el 19 hasta el 24, sin llegar a golpear. En 25–26, arpegia los acordes desde abajo y deja que el dim. molto apague el sonido.
9. Último día: une 1–26 sin parar, preparando el cambio de textura en el compás 15.

**Pasajes difíciles:**

- Compases 15 y 17: la izquierda salta de la octava grave a los acordes agudos. Pedal en la octava, suelta la mano y salta mirando el destino; practica el salto solo diez veces.
- Compases 19–24: acordes repetidos en las dos manos durante el crescendo. Peso del brazo, no de los dedos, y que la melodía de arriba siga destacando.
- Compases 25–26: acordes arpegiados en 8va con dim. molto. Practica el arpegio lento de abajo arriba, con la nota superior más clara, y luego más rápido.

**Pasas a la siguiente sesión cuando:** Puedes tocar 15–26 con la melodía claramente por encima, el crescendo de 19–24 bien graduado y los arpegios finales que se apagan.

**Teoría: Dosillo.** Son dos notas que ocupan el tiempo de tres. Rompen el balanceo ternario y crean una sensación de flotar. En tu partitura: Marcados con un «2» en los compases 3, 13–14, 15–18 y 41.

#### Sesión 3: Un poco mosso (c. 27–36)

Ejercicios: Hanon 17 (calentamiento), Hanon 21 (técnica) y Czerny nº 25. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 27–36 con los arpegios de la izquierda fluidos y unidos por el pedal, y la melodía en notas largas por encima.

**Paso a paso:**

1. Día 1: escucha 27–36 con la partitura. Un poco mosso, pp. La izquierda toca arpegios de semicorcheas y la derecha la melodía en notas largas, a veces tomando la parte alta del arpegio.
2. Análisis: cada pulso de la izquierda es una nota grave larga más un arpegio que sube. En el 29 el arpegio sube y baja y en el 30 cruza al pentagrama de la derecha. En el 34 la izquierda pasa a clave de sol. El 36 trae sostenidos y becuadros que preparan el cambio a 4♯.
3. Digitación: escribe la digitación de cada arpegio de la izquierda (normalmente 5-2-1 o 5-3-2-1 y la mano derecha toma las notas superiores). Marca en la partitura qué mano toca las notas del arpegio que están en el pentagrama de arriba.
4. Acordes en bloque: antes de tocar los arpegios, toca cada grupo como acorde para memorizar la forma de la mano. Luego tócalos desplegados lento.
5. Izquierda sola: muñeca en rotación suave hacia arriba, sin tensar el pulgar. Escucha que la nota grave se sostenga (con el dedo o el pedal) mientras sube el arpegio.
6. Manos juntas con metrónomo: corchea = 84 y sube hasta un tempo algo más fluido que el del inicio. La melodía de la derecha suena por encima, el arpegio como un murmullo.
7. Pedal: cambia con cada nota grave nueva (normalmente cada pulso o cada compás, según la armonía). Escucha: si el sonido se ensucia, el cambio llegó tarde.
8. Dinámica: pp en el 27, p en el 31 y el 32, cresc. desde el 35 hacia «En animant». Que el crescendo sea gradual.
9. Último día: une 15–36 sin parar y con el pedal limpio.

**Pasajes difíciles:**

- Compases 29–30: arpegio amplio de la izquierda que sube, baja y cruza al registro de la derecha. Practica en bloque, luego por medio compás, y decide qué notas toma la derecha.
- Compases 33–34: la izquierda cambia a clave de sol y el registro sube. Lee las notas en voz alta antes de tocar y marca el cambio de clave con lápiz.
- Compás 36: alteraciones nuevas que preparan las 4♯. Nombra cada sostenido y becuadro y toca el compás solo, lento, cinco veces.

**Pasas a la siguiente sesión cuando:** Los compases 27–36 suenan como olas continuas, con la melodía clara arriba, el pedal limpio y un crescendo que llega al compás 37.

**Teoría: Terceras paralelas.** Dos notas a distancia de tercera se mueven juntas como una sola melodía más dulce. Hay que ligarlas con una digitación bien pensada. En tu partitura: Derecha en los compases 1–8 y de nuevo en 51–58.

#### Sesión 4: En animant (c. 37–42)

Ejercicios: Hanon 18 (calentamiento), Hanon 32 (técnica) y Czerny nº 28. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 37–42 llegando al clímax en f del compás 41 con sonido amplio y el diminuendo del 42 bien controlado.

**Paso a paso:**

1. Día 1: escucha 37–42 con la partitura. En animant, più cresc.; f en el 41 y dim. en el 42. La armadura cambia a 4♯.
2. Análisis: el cambio a 4♯ es enarmónico: es más fácil escribirlo así que con muchos bemoles. Busca la melodía aguda de la derecha (notas largas) y los arpegios que siguen pasando entre las manos. En el 41 la derecha toca terceras y sextas que bajan con un dosillo.
3. Digitación: marca las terceras del compás 41 y del 42 para unirlas bajando, como al principio de la pieza. En la izquierda, escribe la digitación del arpegio del 41, que parte desde muy grave.
4. Lectura: repasa con calma las notas en 4♯ (Fa♯, Do♯, Sol♯, Re♯) y escribe el nombre de las que te cueste leer.
5. Manos separadas: la derecha canta la melodía aguda con peso de brazo; la izquierda mantiene los arpegios fluidos. En el 41 la izquierda hace un arpegio amplio desde el bajo.
6. Manos juntas con metrónomo: corchea = 84 y luego acelera un poco cada compás como pide «En animant», sin llegar a correr.
7. Pedal: un cambio por armonía; en el 41 deja que el pedal recoja el bajo grave y cambia con cuidado en el dosillo para que las terceras no se mezclen.
8. Dinámica: el f del 41 es amplio, no duro; deja caer el peso del brazo. Empieza el dim. del 42 justo en el primer pulso.
9. Último día: une 27–42 y comprueba que el crescendo sea continuo hasta el 41.

**Pasajes difíciles:**

- Compás 41: f con terceras y dosillo sobre un arpegio grave. Toca solo las terceras con la digitación de ligado, luego el arpegio solo, y júntalos lento.
- Compases 37–40: cambio de armadura y lectura de sostenidos. Escribe los nombres de las notas difíciles y practica a solas el paso del compás 36 al 37.

**Pasas a la siguiente sesión cuando:** Puedes tocar 37–42 con un clímax lleno y sin dureza, el pedal limpio en el f y el diminuendo del 42 llevándote al calmato.

**Teoría: Cambio de armadura enharmónico.** Debussy pasa a una zona con sostenidos que se escribe más fácil con 4♯ que con muchos bemoles. El oído percibe un cambio de luz, no una ruptura. En tu partitura: Armadura de 4♯ en los compases 37–42; vuelve a 5♭ en el 43.

#### Sesión 5: Calmato (c. 43–50)

Ejercicios: Hanon 19 (calentamiento), Hanon 22 (técnica) y Czerny nº 18. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 43–50, calmato, con el murmullo de semicorcheas de la izquierda muy uniforme y la melodía interior de la derecha cantada en pp.

**Paso a paso:**

1. Día 1: escucha 43–50 con la partitura. Vuelven las 5♭, calmato, pp. La izquierda alterna dos notas en semicorcheas en 43–44 como un murmullo.
2. Análisis: la derecha toca acordes con una melodía en la voz media (marcas de tenuto); en 45–46 la izquierda pasa a arpegios; en 47–48 la derecha añade semicorcheas interiores bajo notas largas agudas; en 49–50 la derecha despliega arpegios hacia notas agudas.
3. Digitación: en la izquierda de 43–44 elige 1-5 o 2-5 para la alternancia y no cambies. En la derecha de 47–48 marca cómo sostener la nota larga aguda mientras los dedos interiores tocan las semicorcheas.
4. Izquierda sola: casi sin articular, pegada a las teclas, con un movimiento mínimo de rotación. Debe sonar como un fondo continuo, nunca como notas sueltas.
5. Derecha sola: canta la voz con tenuto y deja el resto del acorde más suave. En 47–50, la nota aguda larga más sonora y las semicorcheas interiores muy ligeras.
6. Manos juntas con metrónomo: corchea = 80; el calmato es más tranquilo que lo anterior. Sube hasta un tempo cercano al del inicio.
7. Pedal: cambio por armonía; en 43–44 la armonía casi no cambia, así que puedes mantener el pedal más tiempo con medio cambio si se acumula sonido.
8. Dinámica y color: todo en pp, con pequeños arcos dentro de cada frase. Nada de acentos en la izquierda.
9. Último día: une 37–50, cuidando el cambio de armadura y de carácter en el compás 43.

**Pasajes difíciles:**

- Compases 43–44: la alternancia de la izquierda se vuelve irregular. Practica con metrónomo a corchea = 60 en semicorcheas, con rotación pequeña, hasta que salga igual sin mirar.
- Compases 47–48: semicorcheas interiores en la derecha bajo una nota larga aguda. Toca primero solo las semicorcheas sosteniendo la nota larga en silencio, y luego con la nota.

**Pasas a la siguiente sesión cuando:** Puedes tocar 43–50 con un murmullo de la izquierda uniforme y la melodía interior clara, sin que nada suene marcado.

**Teoría: Acordes con séptima y novena.** Son acordes de cuatro o cinco notas que suenan más ricos y ambiguos que una tríada. Son la base del color impresionista. En tu partitura: Acordes llenos de los compases 15–26 y los arpegiados de 25–26.

#### Sesión 6: A Tempo I: reexposición (c. 51–65)

Ejercicios: Hanon 20 (calentamiento), Hanon 33 (técnica) y Czerny nº 30. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 51–65 con el tema inicial en 8va y ppp, terceras ligadas sobre arpegios y la vuelta a la textura del principio desde el 59.

**Paso a paso:**

1. Día 1: escucha 51–65 con la partitura. a Tempo I, ppp; la derecha toca el tema del inicio una octava arriba (8va en 51–54) y la izquierda lo acompaña con arpegios cortos de semicorcheas seguidos de silencios.
2. Análisis: compara la derecha de 51–58 con la de 1–8: son las mismas terceras. En el 53 hay dosillos como en el compás 3. En el 59 vuelve pp con la textura del principio, con la izquierda en acordes.
3. Digitación: copia la digitación de terceras que decidiste para 1–8. En la izquierda, marca los arpegios de 51–55 y el acorde arpegiado del 55.
4. Manos separadas: la derecha ppp pero con notas reales, dedos cerca de las teclas. La izquierda toca el arpegio y respeta los silencios y la nota final con tenuto de cada grupo.
5. Manos juntas con metrónomo: corchea = 84 y sube hasta el tempo del inicio. Cuenta en corcheas, sobre todo en los dosillos del 53.
6. Pedal: el pedal sostiene el arpegio de la izquierda mientras la derecha toca las terceras; cambia con cada armonía nueva. El pedal izquierdo ayuda al ppp.
7. Dinámica: ppp en el 51, pp en el 59. Planifica dos niveles de suavidad diferentes y no subas entre medias.
8. Compases 59–65: repasa la izquierda, que cambia entre clave de fa y clave de sol, y los bajos largos de 63–65, que preparan la coda.
9. Último día: une 43–65 sin parar y grábalo: escucha si el ppp sigue siendo audible.

**Pasajes difíciles:**

- Compases 51–54: terceras en 8va en ppp con arpegio en la izquierda. Toca la derecha con la digitación de 1–4 una octava arriba y controla el sonido con dedos cerca de las teclas.
- Compás 53: dosillos dentro del 9/8. Cuenta en voz alta como en el compás 3, contra el metrónomo en negra con puntillo.
- Compases 58–59: cambio de textura y lectura de la izquierda con cambios de clave. Practica solo ese paso hasta que salga sin dudar.

**Pasas a la siguiente sesión cuando:** Tocas 51–65 con un ppp audible, las terceras ligadas y el regreso al ambiente inicial en el compás 59 sin cortes.

**Teoría: Pedal de resonancia y arpegio.** El pedal derecho deja sonar las notas del arpegio como si fueran un solo acorde. Hay que cambiarlo justo al cambiar la armonía para que no se emborrone. En tu partitura: Arpegios de la izquierda en 27–36 y en la coda (66–72).

#### Sesión 7: Coda (c. 66–72)

Ejercicios: Hanon 1 (calentamiento), Hanon 34 (técnica) y Czerny nº 31. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar la coda (66–72) con los arpegios de Re♭ uniformes y un diminuendo continuo hasta el acorde final arpegiado.

**Paso a paso:**

1. Día 1: escucha la coda con la partitura. pp, «morendo jusqu'à la fin» (apagándose hasta el final).
2. Análisis: la izquierda toca arpegios como los de 27–36, la derecha entra con notas largas en el 67 y el 69–70. En el 71 la derecha sostiene un acorde agudo mientras la izquierda sube en un arpegio desde muy grave, y el 72 es un acorde arpegiado en las dos manos.
3. Digitación: marca la digitación del arpegio del compás 71, que pasa de clave de fa a clave de sol, y la del acorde arpegiado final en las dos manos.
4. Izquierda sola: arpegios uniformes, cada vez un poco más suaves. Haz que la nota grave del principio de cada grupo sea la más sonora y el resto se apague.
5. Derecha sola: notas largas agudas, con tacto suave. En el 71 sostiene el acorde sin volver a tocarlo.
6. Manos juntas: sin metrónomo el último tramo; primero con corchea = 80 para fijar el ritmo y luego libre, frenando muy poco al final.
7. Pedal: un pedal por armonía; en el 71–72 deja el pedal puesto y suéltalo muy lentamente cuando el sonido del acorde final casi haya desaparecido.
8. Dinámica: planifica el diminuendo: empieza la coda con un pp audible para tener margen y llega al final casi sin sonido.
9. Último día: une 59–72 y toca la coda tres veces seguidas, cada vez con un final más tranquilo.

**Pasajes difíciles:**

- Compás 71: arpegio largo de la izquierda que cruza de clave de fa a clave de sol bajo el acorde agudo. Practica en bloques de tres notas, luego seguido, con el pedal puesto.
- Compás 72: acorde final arpegiado en las dos manos. Arpegia de abajo arriba, sin prisa, con la nota superior apenas más clara.

**Pasas a la siguiente sesión cuando:** La coda se apaga de forma continua, sin saltos de volumen, y el acorde final arpegiado suena tranquilo y limpio.

**Teoría: Rubato.** Es una flexibilidad del tempo: se estira un poco una nota y se recupera después. Debe sonar natural, como al hablar. En tu partitura: Indicado «Tempo rubato» en el compás 15.

#### Sesión 8: Obra completa (c. todo)

Ejercicios: Hanon 2 (calentamiento), Hanon 51 (técnica) y Czerny nº 35. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar Clair de Lune completo con el pulso flexible del 9/8, un pedal limpio, transiciones naturales entre secciones y el tempo Andante très expressif como meta.

**Paso a paso:**

1. Día 1: toca la pieza entera sin parar y anota los compases donde dudaste o el pedal se ensució.
2. Repasa solo esos compases con el método de su sesión: terceras ligadas, saltos de la izquierda en 15–17, arpegios en bloque y el f del 41.
3. Trabaja las transiciones: 14–15 (Tempo rubato), 26–27 (Un poco mosso), 36–37 (4♯), 42–43 (vuelta a 5♭) y 50–51 (a Tempo I). Tócalas cada día empezando dos compases antes.
4. Memoria: recorre la pieza mentalmente con los ojos cerrados, nombrando las secciones y sus indicaciones. Practica empezar desde los compases 15, 27, 37, 43, 51 y 66.
5. Tempo: comprueba con metrónomo en negra con puntillo que el inicio y la reexposición (51) tengan el mismo pulso de base, y que el rubato vuelva siempre a él.
6. Grábate una pasada completa y escucha: nivel de pp y ppp, claridad del pedal, melodía por encima de los arpegios.
7. Haz dos ensayos de concierto en días distintos, sin parar, con la sordina y la respiración preparadas antes de empezar.
8. Último día: tocada completa grabada a tu tempo final de Andante très expressif (orientativo negra con puntillo ≈ 40–46).

**Pasajes difíciles:**

- Compases 26–27 y 42–43: cambios de carácter y de textura. Haz una respiración breve y piensa el nuevo tempo antes de tocar.
- Pedal en toda la pieza: si una grabación suena borrosa, repite esa sección sin pedal y luego con cambios más rápidos.
- Control del pp: si el final suena más fuerte que el principio, planifica los niveles por escrito sobre la partitura.

**Pasas a la siguiente sesión cuando:** Puedes tocar la pieza completa dos veces en días distintos sin paradas, y la grabación muestra un pedal limpio y transiciones naturales.

**Teoría: Compás compuesto 9/8.** Cada compás tiene tres pulsos y cada pulso se divide en tres corcheas. Da un balanceo natural, como una barcarola. En tu partitura: Toda la pieza; la indicación 9/8 está en el compás 1.

### 03 · Energy Flow

Ryuichi Sakamoto · La menor / Do mayor · 4/4 (C); un compás de 2/4 en el 39 · Moderato · dificultad 5/10 · 4 pág. · se estudia del 22/02/2027 al 29/03/2027 · cada sesión dura unos 4 días

| Sesión | Sección (compases) | Foco técnico | Calentamiento | Técnica | Estudio Czerny |
|---|---|---|---|---|---|
| 1 | Tema en pp (1–8) | destacar la melodía | Hanon 17 | Hanon 21 | nº 1 (pág. 3) |
| 2 | Tema en f (9–19) | arpegios amplios en la izquierda | Hanon 18 | Hanon 41 en La menor / Do mayor | nº 15 (pág. 8) |
| 3 | Interludio (20–29) | acordes quebrados en la izquierda | Hanon 19 | Hanon 42 en La menor / Do mayor | nº 14 (pág. 7) |
| 4 | Sección central lenta (30–40) | acordes plaqué | Hanon 20 | Hanon 48 | nº 8 (pág. 5) |
| 5 | Puente agudo (41–48) | octavas | Hanon 1 | Hanon 51 | nº 21 (pág. 12) |
| 6 | Tema en 8va (49–56) | pedal y legato | Hanon 2 | Hanon 32 | nº 5 (pág. 4) |
| 7 | Tempo I: tema pleno (57–67) | rango dinámico | Hanon 3 | Hanon 33 | nº 30 (pág. 16) |
| 8 | Interludio final y coda (68–80) | independencia de dedos | Hanon 4 | Hanon 22 | nº 2 (pág. 3) |
| 9 | Obra completa (todo) | rotación de muñeca | Hanon 5 | Hanon 53 en La menor / Do mayor | nº 20 (pág. 11) |

#### Sesión 1: Tema en pp (c. 1–8)

Ejercicios: Hanon 17 (calentamiento), Hanon 21 (técnica) y Czerny nº 1. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 1–8 en pp con la melodía cantada sobre acordes suaves de la izquierda y el pedal cambiado en cada acorde.

**Paso a paso:**

1. Día 1: escucha Energy Flow siguiendo la partitura y luego vuelve a escuchar solo los primeros ocho compases.
2. Análisis: sin armadura, 4/4, Moderato, pp. La izquierda toca acordes cerrados en negras escritos en clave de sol (cuidado al leer). La progresión gira sobre Fa, Sol, Mi menor y La menor; el Sol♯ del compás 4 (izquierda) y del 8 (derecha) da color de La menor.
3. Digitación: en la derecha, escribe la digitación de la melodía del compás 1 (Mi5 con negra con puntillo y corcheas que suben) para llegar sin saltos al agudo. En la izquierda marca los acordes del compás 1–3 con dedos que permitan unirlos.
4. Manos separadas: la derecha canta con la ligadura larga de cuatro compases (1–4) y otra en 5–8. La izquierda en negras iguales, muy suave, unidas, sin acentos.
5. Manos juntas con metrónomo: negra = 60 y sube hasta negra ≈ 80–88 como objetivo orientativo (Moderato, sin número impreso).
6. Pedal: no hay pedal impreso; toca primero sin él. Luego cambia el pedal en cada acorde nuevo de la izquierda: suelta y baja justo después de tocarlo, para unir sin mezclar.
7. Voz: la izquierda claramente más suave que la derecha. Prueba tocar la izquierda en ppp y la derecha en p.
8. Al final del compás 8 la izquierda cambia a clave de fa: obsérvalo antes de seguir con el compás 9.
9. Último día: tócalo de memoria dos veces con pedal limpio.

**Pasajes difíciles:**

- Compases 1–4: los acordes de la izquierda en clave de sol se leen mal. Escribe encima el nombre de los acordes y tócalos en bloque antes de tocar en negras.
- Compás 4 y 8: Sol♯ en la izquierda y luego en la derecha. Nómbralo en voz alta y toca esos compases solos tres veces.

**Pasas a la siguiente sesión cuando:** Tocas 1–8 de memoria en pp con la melodía claramente por encima y sin borrones de pedal.

**Teoría: Progresión IV–V–iii–vi.** Es una cadena de cuatro acordes muy usada en la música japonesa. Empieza en la subdominante y termina en el relativo menor, por eso suena a la vez luminosa y nostálgica. En tu partitura: Base del tema en los compases 1–4, repetida en 9–12, 49–52 y 57–60 (cifrado inferido).

#### Sesión 2: Tema en f (c. 9–19)

Ejercicios: Hanon 18 (calentamiento), Hanon 41 en La menor / Do mayor (técnica) y Czerny nº 15. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 9–19 en f con la nota superior de la derecha destacada, la izquierda en corcheas fluidas y los acordes arpegiados de final de frase.

**Paso a paso:**

1. Día 1: escucha 9–19 con la partitura. Es el mismo tema en f: la derecha duplica la melodía con octavas y acordes y la izquierda pasa a corcheas en clave de fa.
2. Análisis: misma progresión que en 1–8. La izquierda toca un bajo y notas del acorde en corcheas; la derecha añade voces por debajo de la melodía. En el 17 y el 19 hay acordes arpegiados al final de frase.
3. Digitación: en la derecha marca 5 para todas las notas de la melodía en los acordes, para poder destacarla. En la izquierda, escribe la digitación de cada patrón de corcheas de los compases 9–12.
4. Derecha sola: toca solo la nota superior para oír la melodía, después añade el resto del acorde más suave.
5. Izquierda sola: corcheas regulares, con la mano abierta pero relajada. Sigue las ligaduras de cada medio compás.
6. Manos juntas con metrónomo: negra = 60 y sube hasta tu tempo del tema. Que el f no te haga correr.
7. Pedal: cambio en cada armonía (cada dos tiempos aproximadamente, siguiendo el bajo de la izquierda). Escucha que las corcheas no se mezclen.
8. Dinámica y voz: f pleno con el peso del brazo, la melodía arriba y el resto como relleno. Arpegia los acordes de 17 y 19 de abajo arriba, sin prisa.
9. Último día: une 1–19 sin parar y cuida el cambio de pp a f en el compás 9.

**Pasajes difíciles:**

- Compases 9–12: octavas y acordes en la derecha con la melodía arriba. Toca la melodía sola con 5 y luego añade las otras notas sin perder la línea.
- Compases 17–19: acordes arpegiados y final de frase. Practica el arpegio lento con la nota superior más clara y llega a tiempo al compás siguiente.

**Pasas a la siguiente sesión cuando:** Tocas 9–19 en f con la melodía siempre por encima, corcheas regulares y el pedal limpio.

**Teoría: Acorde maj7.** Es una tríada mayor a la que se añade la séptima mayor. Suena suave y soñador, sin la tensión de una séptima de dominante. En tu partitura: Acordes cerrados con segundas de la izquierda en los compases 1–3.

#### Sesión 3: Interludio (c. 20–29)

Ejercicios: Hanon 19 (calentamiento), Hanon 42 en La menor / Do mayor (técnica) y Czerny nº 14. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el interludio (20–29) en p con los silencios medidos, las escalas de semicorcheas ligeras y los arpegios con Si♭ de los compases 23 y 28.

**Paso a paso:**

1. Día 1: escucha 20–29 con la partitura. El ambiente cambia: p, gestos cortos separados por silencios.
2. Análisis: cada gesto empieza con un bajo picado (notas con punto) y una nota larga, seguido de una pequeña escala de semicorcheas en la derecha con regulador de crescendo. En el 23 y el 28 la izquierda toca un arpegio desde Si♭ y la derecha una escala de corcheas por encima.
3. Digitación: marca las escalas de semicorcheas de la derecha (compases 20, 22, 25, 27) y el arpegio de la izquierda de 23 y 28.
4. Manos separadas: cuenta los silencios en voz alta, «1-y-2-y». Las notas picadas cortas, pero sin golpe.
5. Manos juntas con metrónomo: negra = 60, y sube hasta tu tempo. El interludio vive del espacio entre gestos: no lo acortes.
6. Pedal: poco o nada en los gestos picados, para que se oigan los silencios. En 23 y 28 sí puedes poner pedal para unir el arpegio, cambiándolo en el 24 y el 29.
7. Dinámica: haz los reguladores de crescendo de las escalas y el diminuendo del 24 y el 29.
8. Compases 24 y 29: acordes con Sol♯ y Si♮ en la derecha sobre una nota larga de la izquierda. Escucha que suenen juntos y suaves.
9. Último día: une 9–29 sin parar.

**Pasajes difíciles:**

- Compases 20–22 y 25–27: los silencios se acortan. Toca con metrónomo en corcheas y di en voz alta el silencio.
- Compases 23 y 28: el arpegio de la izquierda y la escala de la derecha juntos. Practica cada mano sola y luego juntas lento, a negra = 50.

**Pasas a la siguiente sesión cuando:** Tocas el interludio con silencios exactos, escalas ligeras y el pedal solo donde une los arpegios.

**Teoría: Dominante del relativo menor.** El Sol♯ no pertenece a Do mayor: convierte Mi menor en Mi mayor, que empuja hacia La menor. Así la música oscila entre el modo mayor y el menor. En tu partitura: Sol♯ en el compás 4 (izquierda) y en el compás 8 (derecha); también en el 12.

#### Sesión 4: Sección central lenta (c. 30–40)

Ejercicios: Hanon 20 (calentamiento), Hanon 48 (técnica) y Czerny nº 8. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar la sección central lenta (30–40) leyendo con seguridad todas las alteraciones, con el bajo que baja por semitonos y los calderones con respiración.

**Paso a paso:**

1. Día 1: escucha 30–40 con la partitura. p, con muchas alteraciones; rit. y calderón en el 37, pp en el 38, compás de 2/4 en el 39 y calderón en el 40.
2. Análisis: la izquierda toca blancas con un bajo que desciende por semitonos; las voces interiores de las dos manos llevan bemoles y becuadros de paso. Marca con lápiz cada alteración y su becuadro.
3. Digitación: escribe la digitación de la derecha en dos voces (melodía arriba, voz interior abajo) en 30–36, y de la izquierda en las blancas de dos notas.
4. Manos separadas, nombrando las notas en voz alta: muchas alteraciones son de paso y se anulan en el compás siguiente.
5. Manos juntas con metrónomo: negra = 56; esta sección es más tranquila. Sube hasta un tempo cómodo cercano al tema, con el rit. al final.
6. Pedal: cambio en cada blanca de la izquierda, porque el bajo cambia por semitonos y se mezclaría.
7. Dinámica y rubato: p, regulador de crescendo en el 34; rit. en el 36 y calderón en el 37. pp en el 38. Cuenta dos negras en el 39 (2/4) y vuelve a 4/4 en el 40, con calderón.
8. Último día: une 20–40 sin parar y respeta los calderones.

**Pasajes difíciles:**

- Compases 30–36: voces interiores con alteraciones de paso. Toca solo la voz interior de cada mano nombrando las notas, luego añade la melodía.
- Compases 38–40: compás de 2/4 y calderones. Cuenta en voz alta «1-2» en el 39 y decide cuánto dura el calderón del 40 para no perder la continuidad.

**Pasas a la siguiente sesión cuando:** Puedes tocar 30–40 sin dudar en ninguna alteración, con el bajo claro y los calderones respirados.

**Teoría: Bajo cromático descendente.** El bajo baja de semitono en semitono mientras arriba la melodía sigue. Crea una sensación de caída lenta y de intensidad creciente. En tu partitura: Sección central, compases 30–37.

#### Sesión 5: Puente agudo (c. 41–48)

Ejercicios: Hanon 1 (calentamiento), Hanon 51 (técnica) y Czerny nº 21. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el puente agudo (41–48) con la derecha sola en dos voces: la melodía larga arriba y las corcheas interiores ligeras.

**Paso a paso:**

1. Día 1: escucha 41–48 con la partitura. a tempo, p; la izquierda está en silencio y la derecha toca dos voces en el registro agudo.
2. Análisis: arriba, notas con puntillo y corcheas forman la melodía; abajo, corcheas interiores. Hay bemoles y cromatismos sucesivos (Si♭, La♭, Mi♭, Re♭) y reguladores en 47–48, con rit. en el 48.
3. Digitación: escribe la digitación para sostener la nota superior con 4 o 5 mientras 1-2-3 tocan las corcheas interiores.
4. Voces por separado: toca solo la melodía de arriba cantando y luego solo las corcheas interiores, muy ligeras.
5. Juntas, muy lento: negra = 50. La nota de arriba se sostiene y suena más; las de abajo no la tapan.
6. Metrónomo: sube de 4 en 4 hasta tu tempo del tema.
7. Pedal: cambio por armonía (cada medio compás aproximadamente) para no mezclar los cromatismos. Puedes probar primero sin pedal y luego añadirlo.
8. Dinámica: p, crescendo y diminuendo de los compases 47–48 y rit. en el 48 que prepara el pp del 49.
9. Último día: une 30–48 sin parar.

**Pasajes difíciles:**

- Compases 41–46: dos voces en una mano con cromatismos. Sostén la nota de arriba en silencio y toca solo las corcheas interiores, después las dos voces juntas.
- Compases 47–48: más alteraciones con reguladores y rit. Practica solo esos dos compases nombrando cada alteración.

**Pasas a la siguiente sesión cuando:** Tocas 41–48 con la melodía de arriba clara y sostenida y las corcheas interiores suaves y regulares.

**Teoría: Cambio de registro (8va).** El mismo tema tocado una octava arriba cambia de color sin cambiar de notas. Es una forma sencilla de variar una repetición. En tu partitura: Compases 49–52, con la línea de 8va.

#### Sesión 6: Tema en 8va (c. 49–56)

Ejercicios: Hanon 2 (calentamiento), Hanon 32 (técnica) y Czerny nº 5. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 49–56 en pp con el tema en el registro agudo, sonido cristalino y el rit. del 56.

**Paso a paso:**

1. Día 1: escucha 49–56 con la partitura. a tempo, pp; el tema vuelve con 8va en los compases 49–52.
2. Análisis: los mismos acordes que en 1–8, pero las manos tocan en el registro agudo. La izquierda vuelve a la clave de sol en el 49 y regresa a clave de fa en el 54. rit. en el 56.
3. Digitación: usa la misma digitación que en 1–8, ajustada a la nueva posición.
4. Manos separadas: la derecha con muy poco peso, dedos cerca de las teclas; la izquierda en negras iguales y más suave.
5. Manos juntas con metrónomo: negra = 60 y hasta tu tempo del tema.
6. Pedal: cambio en cada acorde, igual que en 1–8; en el registro agudo el sonido dura menos, así que puedes ser algo más generoso.
7. Dinámica: pp cristalino, sin hacer más volumen al subir. rit. suave en el 56, preparando el f del 57.
8. Último día: une 41–56 sin parar.

**Pasajes difíciles:**

- Compases 49–52: 8va con ambas manos en registro alto. Lee la línea de 8va y practica la posición de la mano antes de empezar.
- Compases 53–56: la izquierda cambia de clave de sol a fa. Marca el cambio y toca el paso del 53 al 54 solo.

**Pasas a la siguiente sesión cuando:** Tocas 49–56 en pp brillante, sin acentos, y el rit. del 56 te lleva con naturalidad al Tempo I.

**Teoría: Cambio de compás puntual.** Un solo compás más corto alarga o acorta la respiración de la frase. No cambia el pulso, solo cuántos pulsos se cuentan. En tu partitura: Compás 39 en 2/4, vuelta a 4/4 en el 40.

#### Sesión 7: Tempo I: tema pleno (c. 57–67)

Ejercicios: Hanon 3 (calentamiento), Hanon 33 (técnica) y Czerny nº 30. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 57–67 en f con los arpegios amplios de la izquierda fluidos y la melodía en octavas y acordes de la derecha.

**Paso a paso:**

1. Día 1: escucha 57–67 con la partitura. Tempo I°, f; es la versión más llena del tema.
2. Análisis: misma progresión que en 9–19. La izquierda toca arpegios amplios de corcheas que empiezan en el bajo grave y abren más de una octava. Hay acordes arpegiados en 65–67.
3. Digitación: escribe la digitación de cada arpegio de la izquierda (5-2-1 subiendo, por ejemplo) y marca qué notas exigen abrir la mano.
4. Izquierda sola: primero en bloques (todas las notas del arpegio juntas), luego desplegada con rotación de muñeca y apertura gradual de la mano.
5. Derecha sola: igual que en 9–19, la melodía con 5 y el resto del acorde más suave.
6. Manos juntas con metrónomo: negra = 60 y sube hasta tu tempo del tema.
7. Pedal: cambio con cada nota grave de la izquierda (cada dos tiempos); así el arpegio queda unido sin mezclar armonías.
8. Dinámica: f lleno pero no duro. Arpegia los acordes de 65–67 de abajo arriba, con la nota superior más clara.
9. Último día: une 49–67 sin parar.

**Pasajes difíciles:**

- Compases 57–64: arpegios amplios de la izquierda. Practica en bloques, después el arpegio por medio compás, y vigila que el pulgar no acentúe.
- Compases 65–67: acordes arpegiados en las dos manos y final de frase. Lento, contando, sin perder el pulso.

**Pasas a la siguiente sesión cuando:** Tocas 57–67 con arpegios fluidos de la izquierda, la melodía siempre arriba y el pedal limpio.

**Teoría: Acorde arpegiado.** La línea ondulada indica tocar las notas del acorde una tras otra, de abajo arriba, muy rápido. Da un efecto de arpa. En tu partitura: Compases 17, 19 y 65–67.

#### Sesión 8: Interludio final y coda (c. 68–80)

Ejercicios: Hanon 4 (calentamiento), Hanon 22 (técnica) y Czerny nº 2. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el interludio final y la coda (68–80) con los silencios medidos, el arpegio ascendente sobre el bajo sostenido y el final en 8va con calderón.

**Paso a paso:**

1. Día 1: escucha 68–80 con la partitura. p en el 68; reaparece el interludio de 20–29; pp en el 78 y calderón final en el 80.
2. Análisis: los compases 68–77 son casi iguales a 20–29: compara y marca las diferencias. En el 78 la izquierda sostiene un La grave ligado tres compases y un arpegio sube entre las manos hasta el agudo, con 8va en 79–80. El último acorde lleva notas de adorno antes.
3. Digitación: copia la del interludio y escribe la del arpegio ascendente de 78–79 decidiendo qué notas toma cada mano.
4. Manos separadas: interludio como en su sesión, con silencios contados. El arpegio de 78–79 muy legato, con cada nota un poco más suave que la anterior.
5. Manos juntas con metrónomo: negra = 60 y sube hasta tu tempo. Sin metrónomo los tres últimos compases.
6. Pedal: poco en el interludio; desde el 78 deja el pedal puesto durante todo el arpegio y hasta el final.
7. Dinámica: decresc. del 77, pp del 78; las notas de adorno del 80 suaves y el acorde final con calderón dejado sonar.
8. Último día: une 57–80 sin parar.

**Pasajes difíciles:**

- Compases 78–79: arpegio repartido entre las manos sobre el La grave sostenido. Practica primero sin pedal para igualar las notas, y luego con el pedal puesto.
- Compás 80: notas de adorno y acorde con calderón en 8va. Toca el adorno pegado al acorde, sin prisa, y mantén el sonido hasta que se apague.

**Pasas a la siguiente sesión cuando:** Tocas 68–80 con el interludio claro y una coda que se apaga hasta el calderón final sin cortes.

**Teoría: Progresión IV–V–iii–vi.** Es una cadena de cuatro acordes muy usada en la música japonesa. Empieza en la subdominante y termina en el relativo menor, por eso suena a la vez luminosa y nostálgica. En tu partitura: Base del tema en los compases 1–4, repetida en 9–12, 49–52 y 57–60 (cifrado inferido).

#### Sesión 9: Obra completa (c. todo)

Ejercicios: Hanon 5 (calentamiento), Hanon 53 en La menor / Do mayor (técnica) y Czerny nº 20. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar Energy Flow completo de memoria con el pulso estable de Moderato, el contraste entre pp y f bien marcado y un pedal limpio.

**Paso a paso:**

1. Día 1: toca la pieza entera sin parar y anota dónde dudaste: suele ser la sección central (30–48) por sus alteraciones.
2. Repasa los puntos anotados con el método de su sesión.
3. Transiciones: 8–9 (pp a f), 19–20 (al interludio), 29–30 (a la sección central), 40–41 (calderón y a tempo), 48–49 (rit. y pp), 56–57 (Tempo I°) y 67–68. Tócalas empezando dos compases antes.
4. Memoria: dibuja en una hoja la forma: tema pp, tema f, interludio, central, puente, tema 8va, tema pleno, interludio y coda. Practica empezar desde cada uno de esos puntos.
5. Tempo: comprueba con metrónomo que el tema en pp, en f y en Tempo I° tengan el mismo pulso; Moderato, orientativo negra ≈ 80–88.
6. Grábate una pasada completa y escucha el equilibrio entre melodía y acompañamiento y la limpieza del pedal.
7. Haz dos ensayos de concierto en días distintos, sin parar ni repetir.
8. Último día: tocada completa grabada al tempo final.

**Pasajes difíciles:**

- Compases 30–48: zona cromática que se olvida con facilidad. Repásala de memoria nombrando las alteraciones cada día.
- Compás 39 (2/4) y calderones de 37 y 40: decide su duración y mantenla en cada pasada.
- Contraste dinámico: si el f del 57 no se distingue del 9, guarda un poco de sonido en el 9.

**Pasas a la siguiente sesión cuando:** Puedes tocar la pieza completa de memoria dos días seguidos, sin paradas, con contrastes claros y un pulso estable.

**Teoría: Acorde maj7.** Es una tríada mayor a la que se añade la séptima mayor. Suena suave y soñador, sin la tensión de una séptima de dominante. En tu partitura: Acordes cerrados con segundas de la izquierda en los compases 1–3.

### 07 · Theme of Love (愛のテーマ)

Nobuo Uematsu (arr. Shiro Sato) · Do mayor / La menor · 4/4 · ♩ = 88 · dificultad 6/10 · 4 pág. · se estudia del 29/03/2027 al 03/05/2027 · cada sesión dura unos 4 días

| Sesión | Sección (compases) | Foco técnico | Calentamiento | Técnica | Estudio Czerny |
|---|---|---|---|---|---|
| 1 | Tema desnudo (1–15 (con anacrusa)) | destacar la melodía | Hanon 19 | Hanon 21 | nº 1 (pág. 3) |
| 2 | Transición rubato (16–18) | arpegios amplios en la izquierda | Hanon 20 | Hanon 41 en Do mayor / La menor | nº 15 (pág. 8) |
| 3 | Tema en sextas (19–35) | acordes plaqué | Hanon 1 | Hanon 48 | nº 8 (pág. 5) |
| 4 | Sección central (36–43) | pedal y legato | Hanon 2 | Hanon 32 | nº 5 (pág. 4) |
| 5 | Regreso del tema (44–50) | rubato | Hanon 3 | Hanon 33 | nº 11 (pág. 6) |
| 6 | Episodio de color (51–53) | rango dinámico | Hanon 4 | Hanon 34 | nº 30 (pág. 16) |
| 7 | Clímax (54–59) | rotación de muñeca | Hanon 5 | Hanon 51 | nº 14 (pág. 7) |
| 8 | Coda (60–67) | independencia de dedos | Hanon 6 | Hanon 22 | nº 2 (pág. 3) |
| 9 | Obra completa (todo) | destacar la melodía | Hanon 7 | Hanon 23 | nº 6 (pág. 5) |

#### Sesión 1: Tema desnudo (c. 1–15 (con anacrusa))

Ejercicios: Hanon 19 (calentamiento), Hanon 21 (técnica) y Czerny nº 1. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el tema desnudo, de la anacrusa al compás 15, en pp con una melodía que canta, los acordes de la izquierda sostenidos y el rit. con calderón del final.

**Paso a paso:**

1. Día 1: escucha la grabación siguiendo la partitura. La partitura no tiene números de compás: numera tú los compases con lápiz (anacrusa = 0) para orientarte.
2. Análisis: Do mayor/La menor, ♩ = 88, pp. La pieza empieza con tres negras de anacrusa. La izquierda, escrita en clave de sol, toca acordes en redondas que siguen la progresión Fa – Sol – Mi menor – La menor (IV–V–iii–vi). En el compás 8 hay un tresillo de negras en la melodía sobre una nota larga.
3. Digitación: la melodía es aguda y se mueve por saltos pequeños. Escribe la digitación de la anacrusa y del compás 1, y la de los compases 8 y 14–15. Evita usar el pulgar en notas que deban cantar.
4. Derecha sola, días 1–2: toca con el peso del brazo y los dedos muy cerca de la tecla para lograr un pp que se oiga. Canta la melodía en voz baja para decidir dónde respira cada frase.
5. Izquierda sola: cada acorde dura los cuatro pulsos; tócalo suave, con todas las notas juntas, y mantenlo. En 13–14 los acordes cambian a blancas: fíjate en las alteraciones.
6. Manos juntas: metrónomo a negra en 60, luego 72 y 88. La izquierda siempre por debajo de la melodía.
7. Pedal: cambia el pedal con cada acorde nuevo de la izquierda (una vez por compás, dos cuando hay blancas).
8. Final: en 14–15 hay rit. y calderón, con reguladores en la melodía. Retarda poco a poco y deja la nota del calderón sonar antes de la transición.

**Pasajes difíciles:**

- Compás 8: el tresillo de negras sobre la nota larga. Cuenta el compás en dos mitades: la primera con la nota larga y la segunda con tres negras iguales en el espacio de dos.
- Compases 1–15: el pp que canta. Practica la melodía en p primero, y cuando suene ligada y pareja baja a pp sin perder claridad.
- Compases 14–15: rit. y calderón. Toca estos compases varias veces con distinta duración de calderón y elige una.

**Pasas a la siguiente sesión cuando:** Puedes tocar desde la anacrusa hasta el compás 15 en pp, con la melodía clara por encima de la izquierda, el pedal limpio y el rit. final controlado.

**Teoría: Progresión IV–V–iii–vi.** Es una de las progresiones más usadas en la música japonesa de videojuegos y anime. Sube de Fa a Sol y cae a Mi menor y La menor, lo que mezcla brillo y nostalgia. En tu partitura: Acordes de la izquierda en los compases 1–4 (Fa – Sol – Mi menor – La menor) y en cada repetición del tema.

#### Sesión 2: Transición rubato (c. 16–18)

Ejercicios: Hanon 20 (calentamiento), Hanon 41 en Do mayor / La menor (técnica) y Czerny nº 15. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar la transición rubato de los compases 16–18 leyendo con seguridad cada acorde cromático y con libertad de tempo entre los dos calderones.

**Paso a paso:**

1. Escucha la grabación de 15–19 varias veces: el tempo es libre (rubato) y el pasaje va de un calderón a otro.
2. Análisis: aparecen acordes con bemoles y sostenidos ajenos a la tonalidad, en mf, con las manos moviéndose en sentido contrario. El escaneo es poco nítido en estos compases: si una nota no se lee bien, contrástala con la grabación.
3. Lee sin ritmo: manos separadas, acorde por acorde, nombrando las notas en voz alta. Marca con lápiz cada alteración.
4. Digitación: escribe la digitación de cada acorde de la derecha; busca que las posiciones encadenen sin saltos innecesarios.
5. Manos juntas, todavía sin ritmo, acorde por acorde, hasta que la mano encuentre cada posición sin mirar.
6. Añade el ritmo escrito despacio y después aplica el rubato: estira un poco donde la armonía es más tensa y avanza donde se relaja.
7. Pedal: cambia con cada acorde para que los cromatismos no se mezclen; durante los calderones mantenlo.
8. Une con lo anterior y lo siguiente: toca del 14 al 20 para enlazar el calderón del tema y el a tempo del tema en sextas.

**Pasajes difíciles:**

- Compases 17–18: los acordes cromáticos. Escribe el nombre de cada nota debajo si hace falta y repite cada cambio de acorde aislado hasta que salga sin dudar.
- Compases 16–19: el rubato. Grábate y comprueba que la libertad no se convierte en paradas: el discurso debe seguir avanzando.

**Pasas a la siguiente sesión cuando:** Puedes tocar del compás 14 al 20 sin errores de notas en los acordes cromáticos y con un rubato que suena intencionado.

**Teoría: Anacrusa.** Son las notas que suenan antes del primer compás completo y que «llevan» hacia él. La frase empieza en el aire y cae en el compás siguiente. En tu partitura: Tres negras antes del compás 1; se repite con tresillo en los compases 8, 30 y 43.

#### Sesión 3: Tema en sextas (c. 19–35)

Ejercicios: Hanon 1 (calentamiento), Hanon 48 (técnica) y Czerny nº 8. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el tema en sextas de los compases 19–35 en p, con la voz superior ligada y cantando y la izquierda equilibrada entre el bajo y los acordes.

**Paso a paso:**

1. Escucha la grabación de 19–35. El tema vuelve a tempo y en p, ahora con la melodía doblada en la derecha.
2. Análisis: la derecha dobla la melodía en sextas y octavas. La izquierda toca un bajo grave en redonda y acordes arpegiados en blancas a contratiempo. Hay un tresillo de negras hacia el compás 27, el bajo cromático Re – Re♯ en el 32 y en el 35 la izquierda empieza corcheas con un regulador de crescendo.
3. Digitación: estudia primero solo la voz superior con la digitación definitiva (4 y 5 alternando para ligar) y escríbela; después añade la nota inferior con 1 o 2.
4. Derecha sola: la voz de arriba ligada y presente; la de abajo más suave. Si no puedes ligar las dos voces, prioriza la de arriba.
5. Izquierda sola: el bajo es una redonda que debe durar; el acorde arpegiado sale después, más suave. Practica el salto del bajo al acorde.
6. Manos juntas: metrónomo a negra en 60, luego 72 y 88. Comprueba en el tresillo y en el compás 32 que no pierdes el pulso.
7. Pedal: cambia con cada bajo nuevo para sostener la redonda; en el 32, cámbialo en Re y otra vez en Re♯.
8. Dinámica: p general con frases en arco. En el 35 crece hacia el f del 36.

**Pasajes difíciles:**

- Compases 19–34: ligar la voz superior de las sextas. Practícala sola hasta que suene ligada, luego añade la inferior sin cambiar la digitación de arriba.
- Compases 20–34: el bajo grave y el acorde arpegiado en la izquierda. Pedal con cada bajo y salto preparado: toca el bajo, suelta la mano y cae sobre el acorde ya formado.
- Compases 32 y 35: el bajo cromático y el inicio de las corcheas. Practica 31–36 seguidos para preparar la llegada del f.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 19–36 a ♩ = 88 con la voz superior de la derecha ligada, el bajo sostenido con pedal y el crescendo final hacia el f.

**Teoría: Sextas paralelas.** Doblar una melodía a distancia de sexta (seis notas más abajo) le da un sonido dulce y lleno. Las dos voces se mueven juntas en la misma dirección. En tu partitura: Derecha, compases 19–34.

#### Sesión 4: Sección central (c. 36–43)

Ejercicios: Hanon 2 (calentamiento), Hanon 32 (técnica) y Czerny nº 5. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar la sección central de los compases 36–43 en f, con los arpegios de corcheas de la izquierda fluidos y la melodía por encima de los acordes, llegando al p del final.

**Paso a paso:**

1. Escucha la grabación de 35–44. Es la parte más llena: acordes arpegiados en la derecha con la melodía arriba y arpegios amplios en la izquierda.
2. Análisis: f en el 36. La izquierda toca ocho corcheas por compás en arpegios amplios. La derecha alterna acordes arpegiados y notas de melodía, con tresillos de negras en algunos compases. En el 41 la izquierda tiene un bajo de Fa♯ con notas con bemol (acorde alterado). Al final hay un regulador de diminuendo hasta p.
3. Digitación de la izquierda: agrupa cada compás en grupos de cuatro corcheas y elige una posición de mano para cada grupo. Escríbela en 36, 40 y 41.
4. Izquierda sola, días 1–2: en grupos de cuatro corcheas, anticipando el desplazamiento de la mano al cambiar de grupo. Metrónomo a negra en 50.
5. Derecha sola: arpegia los acordes de abajo arriba y deja la melodía en la nota más alta, con más peso del quinto dedo.
6. Manos juntas: metrónomo a negra en 50, luego 60, 72 y 88. Cuida los tresillos de la derecha sobre las corcheas de la izquierda: tres notas contra cuatro corcheas por cada dos pulsos, sin buscar coincidencias exactas.
7. Pedal: cambia cada vez que cambia el bajo, normalmente en cada compás; en el 41 escucha que el acorde alterado no se mezcle con el anterior.
8. Dinámica: f con sonido lleno, sin golpes, y diminuendo gradual en 42–43 hasta el p que prepara el regreso del tema.

**Pasajes difíciles:**

- Compases 36–42: los arpegios amplios de la izquierda. Practícalos en bloque (las cuatro notas de cada grupo juntas) y luego en corcheas, moviendo el brazo entre grupos.
- Compás 41: el acorde alterado con Fa♯ en el bajo. Lee las notas despacio, márcalas con lápiz y practica el paso del 40 al 42.
- Compases 39 y 43: tresillos de negras contra corcheas. Toca cada mano sola con metrónomo y luego juntas muy despacio.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 35–44 a ♩ = 88 con la izquierda fluida, la melodía clara arriba y el diminuendo hasta p bien graduado.

**Teoría: Tresillo de negras.** Tres negras que ocupan el tiempo de dos. Ensancha el ritmo y da una sensación de impulso libre hacia la nota siguiente. En tu partitura: Compases 8, 30, 35, 39 y 43.

#### Sesión 5: Regreso del tema (c. 44–50)

Ejercicios: Hanon 3 (calentamiento), Hanon 33 (técnica) y Czerny nº 11. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el regreso del tema de los compases 44–50 con la melodía sola cantando de nuevo y el compás de 2/4 contado sin dudar.

**Paso a paso:**

1. Escucha la grabación de 43–51. Tras el diminuendo vuelve la textura del principio: melodía sola arriba y acordes en la izquierda.
2. Análisis: la izquierda pasa a clave de sol y toca acordes en blancas. En el 48 aparece un acorde con sostenidos; en el 49 un acorde ligado; el 50 es un compás corto de 2/4.
3. Digitación: usa la misma que en el tema del principio para la melodía; comprueba los compases que cambian.
4. Derecha sola: la melodía con el mismo cuidado del pp inicial, aunque aquí no hay indicación nueva; mantén el p del final de la sección anterior.
5. Izquierda sola: acordes en blancas, suaves y juntos. Fíjate en el cambio de clave al empezar la sección.
6. Manos juntas: metrónomo a negra en 60, luego 72 y 88. En el 50 cuenta solo dos pulsos antes de seguir.
7. Pedal: con cada acorde de la izquierda; en el acorde ligado del 49, mantenlo.

**Pasajes difíciles:**

- Compás 50: el 2/4. Practica 49–51 contando «1 2 3 4 | 1 2 3 4 | 1 2 | 1 2 3 4» en voz alta.
- Compases 43–44: el cambio de clave y de textura. Mira la clave antes de tocar y practica el paso del f-p de la sección central a la melodía sola.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 43–51 a ♩ = 88 con la melodía cantando y el 2/4 sin dudas.

**Teoría: Acordes prestados (intercambio modal).** Son acordes tomados de la tonalidad menor paralela, por eso aparecen bemoles que no están en la armadura. Oscurecen el color un momento sin cambiar de tonalidad. En tu partitura: Compases 17–18 y 51–53 (La♭, Si♭, Mi♭).

#### Sesión 6: Episodio de color (c. 51–53)

Ejercicios: Hanon 4 (calentamiento), Hanon 34 (técnica) y Czerny nº 30. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el episodio de color de los compases 51–53 con todas las alteraciones correctas, las dos voces de la derecha equilibradas y el crescendo hacia el clímax.

**Paso a paso:**

1. Escucha la grabación de 50–54 y fíjate en el color distinto que dan las notas con bemol.
2. Análisis: mp. La derecha lleva dos voces: corcheas arriba y blancas abajo. Aparecen La♭, Si♭ y Mi♭, ajenos a Do mayor. La izquierda toca quintas en blancas. En el 53 hay un regulador de crescendo.
3. Marca con lápiz todas las alteraciones antes de tocar: valen para todo el compás.
4. Digitación: corcheas de arriba con 3-4-5; blancas de abajo con 1 y 2. Escríbela.
5. Derecha sola: primero solo la voz de arriba, luego solo la de abajo, luego juntas. Las blancas deben mantenerse mientras se mueven las corcheas.
6. Manos juntas: metrónomo a negra en 60 y sube hasta 88. Pedal con cada quinta nueva de la izquierda.
7. Une: toca del 49 al 55 para pasar del 2/4 al episodio y del crescendo al f del clímax.

**Pasajes difíciles:**

- Compases 51–53: las dos voces de la derecha. Practica la voz de arriba sola con su digitación y luego añade las blancas sin que la de arriba se corte.
- Compases 51–53: las alteraciones. Si te equivocas por costumbre, toca cada compás lento nombrando en voz alta las notas con bemol.

**Pasas a la siguiente sesión cuando:** Puedes tocar del compás 49 al 55 sin errores de alteraciones, con la voz de arriba clara y el crescendo llegando al f.

**Teoría: Bajo cromático.** El bajo sube por semitonos en lugar de saltar. Ese pequeño paso extra crea tensión y empuja hacia el acorde siguiente. En tu partitura: Re – Re♯ – Mi en los compases 32–33, 54–55 y 56–57.

#### Sesión 7: Clímax (c. 54–59)

Ejercicios: Hanon 5 (calentamiento), Hanon 51 (técnica) y Czerny nº 14. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el clímax de los compases 54–59 en f, con los acordes arpegiados cayendo en el pulso, el bajo Re – Re♯ – Mi claro y el rit. del final.

**Paso a paso:**

1. Escucha la grabación de 53–60. Es el punto más alto de la obra: acordes grandes arpegiados en la derecha y arpegios en la izquierda.
2. Análisis: f. La derecha toca acordes arpegiados con la melodía en la nota alta y, en algún compás, en 8va. La izquierda toca arpegios de corcheas con el bajo subiendo Re – Re♯ – Mi. Hay reguladores y rit. al final.
3. Digitación: escribe la de cada acorde arpegiado de la derecha (5 siempre en la nota de arriba) y la posición de cada grupo de corcheas en la izquierda.
4. Izquierda sola: arpegios en grupos, con el bajo apoyado. Escucha el bajo cromático: es el que da tensión al pasaje.
5. Derecha sola: arpegia de abajo arriba dejando que la nota más aguda caiga justo en el pulso. Practica primero el acorde en bloque.
6. Manos juntas: metrónomo a negra en 50, luego 60, 72 y 88. Lee bien el 8va: la mano sube una octava.
7. Pedal: cambia con cada bajo nuevo de la izquierda.
8. Dinámica: f lleno sin golpes; el rit. final prepara el rubato de la coda en pp.

**Pasajes difíciles:**

- Compases 54–58: arpegiar los acordes con la nota alta en el pulso. Empieza el arpegio un poco antes del pulso; practica con metrónomo haciendo coincidir la nota alta con el clic.
- Compases 56–57: el 8va. Practica el cambio de octava de la derecha aislado, mirando la tecla de llegada antes de moverte.
- Compases 58–60: rit. y paso a la coda. Practica 58–61 para enlazar el f con el pp rubato.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 53–60 a ♩ = 88 con los acordes arpegiados en su sitio, el bajo cromático audible y el rit. final controlado.

**Teoría: Acorde arpegiado.** La línea ondulada delante de un acorde indica que sus notas se tocan una tras otra, rápidamente, de la más grave a la más aguda, como en un arpa. En tu partitura: Compases 36–43 y, sobre todo, la coda 56–67.

#### Sesión 8: Coda (c. 60–67)

Ejercicios: Hanon 6 (calentamiento), Hanon 22 (técnica) y Czerny nº 2. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar la coda de los compases 60–67 con la derecha sola en pp, los acordes arpegiados limpios y las notas tenidas sostenidas hasta el calderón final.

**Paso a paso:**

1. Escucha la grabación de 59–67. Tras el clímax queda solo la derecha, muy suave y libre.
2. Análisis: rubato, pp. La derecha toca acordes arpegiados en registro agudo y recuerda el tema en corcheas sobre notas tenidas. La izquierda solo aparece al principio, con una nota larga. Hay rit. al final y calderón en pp en el último acorde.
3. Digitación: escribe la digitación de cada acorde y de las corcheas que se mueven mientras otras notas se mantienen; las notas tenidas deben ir en dedos que puedan quedarse quietos.
4. Derecha sola, días 1–2: primero los acordes en bloque, luego arpegiados de abajo arriba, suaves. Después añade las corcheas del tema sin soltar las notas tenidas.
5. Rubato: estira un poco los finales de frase y avanza en el centro. Grábate para comprobar que no se pierde la dirección.
6. Pedal: cámbialo en cada acorde arpegiado para que no se mezclen; mantenlo durante las notas tenidas y en el calderón final.
7. Une con el clímax: toca del 57 al final, pasando del f al pp de forma clara.

**Pasajes difíciles:**

- Compases 61–66: mantener notas tenidas mientras se mueven las corcheas. Practica sin pedal para comprobar que los dedos sostienen; luego añade el pedal.
- Compases 60–67: el pp con acordes arpegiados. Practica en p y, cuando todo salga, baja a pp manteniendo los dedos pegados a las teclas.
- Compás 67: el calderón final. Deja sonar el acorde y levanta las manos y el pedal despacio, sin cortar.

**Pasas a la siguiente sesión cuando:** Puedes tocar del compás 57 al final con la coda en pp, los acordes limpios y el calderón final sostenido.

**Teoría: Progresión IV–V–iii–vi.** Es una de las progresiones más usadas en la música japonesa de videojuegos y anime. Sube de Fa a Sol y cae a Mi menor y La menor, lo que mezcla brillo y nostalgia. En tu partitura: Acordes de la izquierda en los compases 1–4 (Fa – Sol – Mi menor – La menor) y en cada repetición del tema.

#### Sesión 9: Obra completa (c. todo)

Ejercicios: Hanon 7 (calentamiento), Hanon 23 (técnica) y Czerny nº 6. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar Theme of Love completa de memoria a ♩ = 88, con las transiciones de rubato y a tempo naturales y el arco dinámico de pp a f y de vuelta a pp.

**Paso a paso:**

1. Día 1: toca la obra entera despacio, leyendo, y marca con lápiz los compases donde te paras. Esa es tu lista de trabajo.
2. Trabaja las uniones, cada una con dos compases antes y dos después: 14–20 (calderón, rubato y a tempo), 34–37 (del p al f), 42–45 (diminuendo y regreso del tema), 49–52 (2/4 y episodio de color), 53–55 (crescendo al clímax) y 58–61 (rit. y coda).
3. Memoria: practica empezar sin partitura desde la anacrusa, el 16, el 19, el 36, el 44, el 51, el 54 y el 60. Como no hay números impresos, usa tu propia numeración a lápiz.
4. Tempo: toca la obra completa con metrónomo a negra en 72 y, cuando salga, a 88. Quita el metrónomo en los pasajes rubato (16–18 y la coda) pero vuelve al pulso en los a tempo.
5. Dinámica: dibuja la curva de la obra: pp al principio, p en las sextas, f en la sección central, p, crescendo al f del clímax y pp en la coda. Toca una pasada pensando solo en eso.
6. Pedal: repasa todos los cambios de pedal en una pasada lenta, escuchando que cada acorde suene limpio.
7. Grábate tocando la obra entera y escúchala con la partitura. Comprueba que la melodía siempre sobresale y que el rubato no rompe la continuidad.
8. Pasadas de concierto en los últimos días: una o dos al día sin parar ante los errores, a ♩ = 88.

**Pasajes difíciles:**

- Compases 16–19: el paso del rubato al a tempo. Practícalo aislado hasta que el a tempo entre limpio, sin acelerón.
- Compases 36–43 y 54–59: las partes llenas en f. Haz pasadas de estas zonas cuidando que la izquierda no tape la melodía.
- Compases 60–67: la coda después del clímax. Practica desde el 54 hasta el final para entrenar el cambio brusco de f a pp.

**Pasas a la siguiente sesión cuando:** Puedes tocar la obra completa de memoria a ♩ = 88 dos días seguidos sin parar, con la melodía siempre audible y la coda en pp.

**Teoría: Anacrusa.** Son las notas que suenan antes del primer compás completo y que «llevan» hacia él. La frase empieza en el aire y cae en el compás siguiente. En tu partitura: Tres negras antes del compás 1; se repite con tresillo en los compases 8, 30 y 43.

### 12 · In the Palace (Lamentoso – Agitato)

Yoshihisa Hirano (arr. «DH») · Re menor (sección central en Sol menor) · 2/4 (3/4 desde el compás 73) · ♩ = 74; Agitato desde el compás 73 · dificultad 9/10 · 6 pág. · se estudia del 05/04/2027 al 24/05/2027 · cada sesión dura unos 6 días

| Sesión | Sección (compases) | Foco técnico | Calentamiento | Técnica | Estudio Czerny |
|---|---|---|---|---|---|
| 1 | Lamentoso: melodía sola (1–12) | escalas rápidas | Hanon 1 | Hanon 38 en Re menor (sección central en Sol menor) | nº 22 (pág. 12) |
| 2 | Lamentoso: respuesta en acordes (13–33) | notas repetidas | Hanon 2 | Hanon 44 | nº 29 (pág. 15) |
| 3 | Tema en Sol menor (34–50) | octavas | Hanon 3 | Hanon 51 | nº 31 (pág. 16) |
| 4 | Desarrollo y cadencia (51–72) | trinos y adornos | Hanon 4 | Hanon 27 | nº 30 (pág. 16) |
| 5 | Agitato: acordes repetidos (73–95) | polirritmia 2 contra 3 | Hanon 5 | Hanon 21 | nº 18 (pág. 10) |
| 6 | Agitato: movimiento perpetuo (96–115) | arpegios amplios en la izquierda | Hanon 6 | Hanon 41 en Re menor (sección central en Sol menor) | nº 34 (pág. 18) |
| 7 | Clímax y final (116–131) | acordes plaqué | Hanon 7 | Hanon 48 | nº 25 (pág. 13) |
| 8 | Obra completa (todo) | rotación de muñeca | Hanon 8 | Hanon 53 en Re menor (sección central en Sol menor) | nº 28 (pág. 14) |

#### Sesión 1: Lamentoso: melodía sola (c. 1–12)

Ejercicios: Hanon 1 (calentamiento), Hanon 38 en Re menor (sección central en Sol menor) (técnica) y Czerny nº 22. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 1–12 del Lamentoso con la melodía sola cantando en mp, las notas largas y los silencios medidos con exactitud, a ♩ = 74.

**Paso a paso:**

1. Día 1: escucha el Lamentoso siguiendo la partitura. Es una melodía casi desnuda: escucha cómo el silencio y las notas largas forman parte de la frase.
2. Análisis: Re menor (un bemol). En el compás 1 la izquierda toca en pp un acorde arpegiado con un pequeño giro de semicorcheas y después calla hasta el compás 12; la derecha canta en mp La–Sol–Fa–Mi–Re. El La de los compases 5–7 se mantiene ligado tres compases. En el 11 aparece una escala ascendente con tresillo que pasa por Do♯, la sensible de Re menor.
3. Digitación: escribe la de la escala con tresillo del compás 11 y la del giro de la izquierda en el compás 1. Para las notas largas elige dedos que te dejen preparar la nota siguiente sin moverte en el último momento.
4. Mano derecha sola a ♩ = 50, contando corcheas («1 y 2 y»): sostén las notas ligadas todo su valor y cuenta en voz alta los silencios del compás 8. Practica el tresillo del 11 aparte hasta que quepa justo en su tiempo.
5. Mano izquierda: el acorde arpegiado del compás 1 se toca de abajo arriba, sin prisa, en pp; deja que su sonido acompañe la primera nota de la derecha.
6. Días 2–3: sube a ♩ = 60 y luego a 74. Puedes tocar con algo de libertad expresiva (rubato), pero sin perder la cuenta de las notas largas.
7. Pedal: la partitura no lo marca. Úsalo en el acorde del compás 1 y suéltalo antes de que la melodía cambie de armonía; en la melodía sola prueba sin pedal o con pedales cortos que solo den resonancia a las notas largas.
8. Dinámica y unión: mp con frases que crecen hacia la nota más aguda y bajan al final. Enlaza tocando hasta el primer tiempo del compás 13.

**Pasajes difíciles:**

- Compases 5–8: el La ligado tres compases y los silencios del 8 tienden a acortarse. Cuenta en voz alta cada corchea y compruébalo con el metrónomo a ♩ = 74.
- Compás 11: escala ascendente con tresillo y Do♯. Practícala sola con metrónomo, primero en notas iguales y luego con el tresillo, llegando a tiempo al compás 12.

**Pasas a la siguiente sesión cuando:** Puedes tocar del 1 al 12 a ♩ = 74 con todas las notas largas y silencios completos, la escala del 11 limpia y una sensación de canto continuo.

**Teoría: Modulación a la subdominante menor.** Modular es cambiar de tonalidad. Aquí se pasa de Re menor a Sol menor, que solo añade un bemol (Mi♭), por lo que el cambio suena natural pero más oscuro. En tu partitura: Cambio de armadura a 2♭ al final del compás 33; vuelta a 1♭ antes del compás 73.

#### Sesión 2: Lamentoso: respuesta en acordes (c. 13–33)

Ejercicios: Hanon 2 (calentamiento), Hanon 44 (técnica) y Czerny nº 29. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 13–33 con los acordes arpegiados de abajo arriba y la nota aguda a tiempo, los pasajes de los compases 24 y 26 fluidos y los acordes graves del final apagándose en el calderón.

**Paso a paso:**

1. Día 1: escucha estos compases siguiendo la partitura. La melodía ahora tiene respuestas en acordes y termina en acordes graves que se apagan.
2. Análisis: la derecha canta a dos voces (notas dobles ligadas en 13–15 y 18–19) y la izquierda responde con acordes en 17–19 y 21–23. En el 24 aparece en mp un arpegio que empieza en Do♯ (otra vez la sensible) y en el 26 una escala descendente con quintillo y alteraciones (La♭, La♮). Atención: en esta copia el calderón cae en el compás 31 y el cambio de armadura a dos bemoles llega después del compás 33.
3. Digitación: marca la del arpegio del 24 y la de la bajada del 26; en esta, agrupa las notas por posiciones de mano y escribe dónde cruza el 3 sobre el pulgar.
4. Manos separadas: en la derecha liga las notas dobles y cuenta las ligaduras de 13–15 y 18–19. En la izquierda, los acordes de 28–33 bajan a líneas adicionales graves: léelos despacio y escribe el nombre de las notas si te cuesta.
5. Acordes arpegiados (línea ondulada, por ejemplo en el 17 en la derecha y en el 21 en la izquierda): arpégialos de abajo arriba, rápido, haciendo que la nota más aguda coincida con el pulso.
6. Días 2–4: manos juntas a ♩ = 50, 60 y 74. Practica los pasajes del 24 y del 26 aparte con metrónomo y luego insértalos en la frase.
7. Pedal: sin marcas. Pisa el pedal en cada acorde arpegiado para sostener sus notas y cámbialo con cada acorde nuevo. En la escala del 26 usa poco o ninguno. En los acordes graves de 30–33 mantenlo durante el calderón.
8. Dinámica y unión: p en el 23, mp en el 24, p en el 28; deja que los acordes graves se apaguen. Alarga el calderón del 31 y enlaza con la entrada en Sol menor del compás 34. Practica también la unión de los compases 10–14.

**Pasajes difíciles:**

- Compás 26: escala descendente con quintillo y alteraciones. Practica las notas sin ritmo hasta leerlas bien, luego en grupos por posición de mano y después con el ritmo escrito a ♩ = 50.
- Compás 24: arpegio ascendente desde Do♯ que debe salir ligado y sin acelerar. Practícalo solo con metrónomo y llega a tiempo al La del 25.
- Compases 29–33: acordes muy graves en la izquierda con calderón. Mira las teclas antes de tocar, deja la mano colocada y cuenta las ligaduras hasta el silencio del 33.

**Pasas a la siguiente sesión cuando:** Puedes tocar del 13 al 33 a ♩ = 74 con los arpegios bien colocados, los pasajes del 24 y del 26 fluidos y el calderón del 31 con su tiempo.

**Teoría: Cambio de compás.** La unidad de medida pasa de dos a tres tiempos por compás. Junto con la nueva indicación de carácter, marca el inicio de una pieza distinta dentro de la obra. En tu partitura: 2/4 en los compases 1–72; 3/4 desde el compás 73 (Agitato).

#### Sesión 3: Tema en Sol menor (c. 34–50)

Ejercicios: Hanon 3 (calentamiento), Hanon 51 (técnica) y Czerny nº 31. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el tema en Sol menor (compases 34–50) con la melodía ligada y sus adornos ligeros, la izquierda en acordes rotos con sus cambios de clave, el trino del compás 49 y el poco accel. hacia el mf.

**Paso a paso:**

1. Día 1: escucha el tema en Sol menor siguiendo la partitura. Es la parte más cantable del Lamentoso.
2. Análisis: nueva armadura de dos bemoles (Si♭ y Mi♭): Sol menor. La derecha canta en mp con pequeños adornos y acordes arpegiados; la izquierda acompaña con acordes rotos de corcheas y cambia de clave (a clave de sol en el 35 y de vuelta a clave de fa hacia el 41). Desde el 41 la melodía se llena con acordes y octavas. En el 49 hay un trino, y en 49–50 «poco accel.» con un arpegio ascendente Re–Fa♯–La (dominante de Sol menor) que crece hasta el mf del 51.
3. Digitación: anota los dedos de los acordes rotos de la izquierda en cada cambio de clave y, en la derecha, los de las octavas y acordes desde el 41. Para el trino del 49 elige dos dedos fuertes (por ejemplo 2-3 o 3-4).
4. Mano derecha sola: toca primero la melodía sin adornos ni arpegiados, asegura el ritmo y añade después los adornos muy ligeros. Practica aparte el tresillo de enlace de los compases 39–40.
5. Mano izquierda sola: cada corchea en su sitio y atención a los cambios de clave: márcalos con un color. Toca cada grupo como acorde plaqué antes de desplegarlo.
6. Días 2–4: manos juntas a ♩ = 50, 60 y 74. En el compás 50 haz un poco accel. moderado y vuelve al tempo en el 51.
7. Pedal: sin marcas. Cámbialo con cada armonía de la izquierda (normalmente cada compás o cada medio compás). En el trino usa poco pedal para que se oiga claro.
8. Dinámica y unión: mp y p al principio, crescendo desde el 49 hasta el mf del 51. Enlaza desde el calderón del 31 hasta el 51.

**Pasajes difíciles:**

- Compases 35–40: adornos y acordes arpegiados en la melodía. Practica sin ellos hasta que el ritmo sea seguro; después añádelos sin retrasar la nota principal.
- Compás 49: el trino. Practícalo lento y medido (cuatro notas por tiempo, luego seis, luego ocho) y termina siempre a tiempo en el compás 50.
- Compás 50: arpegio ascendente con tresillo y poco accel. Practícalo solo con metrónomo a ♩ = 50 y después deja que acelere un poco, llegando firme al mf del 51.

**Pasas a la siguiente sesión cuando:** Puedes tocar del 34 al 51 a ♩ = 74 con la melodía ligada y los adornos ligeros, la izquierda sin errores de clave y el trino y el poco accel. bajo control.

**Teoría: Escala menor armónica y sensible.** En modo menor se sube el séptimo grado medio tono para que 'tire' hacia la tónica. En Re menor esa nota es Do♯; en Sol menor, Fa♯. En tu partitura: Do♯ en el arpegio del compás 24 y en los compases 99–103; Fa♯ en los compases 42 y 57–58.

#### Sesión 4: Desarrollo y cadencia (c. 51–72)

Ejercicios: Hanon 4 (calentamiento), Hanon 27 (técnica) y Czerny nº 30. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 51–72 con los tresillos de la derecha regulares contra las corcheas de la izquierda, los pasajes rápidos de 60–62 repartidos entre las manos sin cortes y el calderón del 64 bien respirado.

**Paso a paso:**

1. Día 1: escucha esta parte siguiendo la partitura. Es la más libre y virtuosa del Lamentoso.
2. Análisis: en 54–57 la derecha va en tresillos de semicorcheas contra corcheas de la izquierda. En 57–59 y 65–68 aparecen muchas alteraciones (Re♭, Mi♮, Fa♯, La♭): es cromatismo, notas de paso que tensan antes de resolver. En el 61 hay f con un acorde arpegiado; en el 62, un gran arpegio que empieza en la izquierda y sigue en la derecha con tresillo y quintillo; en el 64, un calderón con 8va en p. Del 69 al 72 el sonido se queda en notas ligadas antes del Agitato.
3. Digitación: escribe la de los tresillos de 55–57 y, sobre todo, la del arpegio del 62: marca con una línea dónde termina la mano izquierda y dónde empieza la derecha.
4. Tresillos: practica la derecha sola contando «tri-o-la» en cada corchea, luego la izquierda sola y después juntas a ♩ = 50, comprobando que la primera nota de cada tresillo coincide con cada corchea de la izquierda.
5. Cromatismo: lee despacio los compases 57–59 y 65–68 nombrando cada nota en voz alta con su alteración; anota con lápiz las que más te cuesten.
6. Pasajes rápidos: divide los compases 60–63 en grupos por posición de mano y practica cada grupo como un acorde (todas las notas a la vez), después desplegado; luego une los grupos de dos en dos.
7. Días 3–5: manos juntas a ♩ = 50, 60 y 74. Pedal (sin marcas en la partitura): úsalo en los acordes arpegiados (59, 61) y en el arpegio del 62 para sostener el bajo, cambiándolo con cada armonía; en el cromatismo usa pedales cortos o ninguno.
8. Dinámica y unión: mf al inicio, f en el 61, mp en el 62 bajando a p en el 64, mp en el 65. Alarga el calderón del 64. Enlaza desde el 47 hasta el 73 y deja la mano preparada en silencio para el Agitato.

**Pasajes difíciles:**

- Compases 54–57: tres contra dos (tresillos contra corcheas). Practica el ritmo con palmadas o con una sola nota por mano y después con las notas reales a ♩ = 50.
- Compases 60–62: arpegios rápidos repartidos entre las manos. Practica el relevo aislado (últimas notas de la izquierda y primeras de la derecha) diez veces, hasta que suene como una sola línea.
- Compases 57–59 y 65–68: cromatismo. Practica a ♩ = 40 leyendo cada alteración y sube solo cuando no falles ninguna nota en tres intentos seguidos.

**Pasas a la siguiente sesión cuando:** Puedes tocar del 51 al 72 a ♩ = 74 con los tresillos regulares, los arpegios de 60–62 sin cortes entre manos y todas las alteraciones correctas.

**Teoría: Indicaciones de carácter: Lamentoso y Agitato.** Son palabras italianas que describen cómo debe sonar la música, más allá de la velocidad. Lamentoso es 'como un lamento'; Agitato es 'agitado, inquieto'. En tu partitura: Título de la pieza y la indicación 'Agitato' impresa sobre el compás 73.

#### Sesión 5: Agitato: acordes repetidos (c. 73–95)

Ejercicios: Hanon 5 (calentamiento), Hanon 21 (técnica) y Czerny nº 18. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el comienzo del Agitato (compases 73–95) con los acordes repetidos alternados entre manos ligeros y regulares, las escalas de 78–79 limpias y el trémolo del 94 creciendo sin tensión.

**Paso a paso:**

1. Día 1: escucha el Agitato siguiendo la partitura: es otra pieza, rápida y nerviosa. Observa el cambio a 3/4 y la vuelta a un bemol en el 73.
2. Análisis: Re menor otra vez. En 73–76 y 82–86 las dos manos se reparten acordes repetidos en semicorcheas: una toca y la otra contesta, como un motor. El 77 y el 80–81 son acordes de reposo. En 78–79 hay una escala ascendente rápida con alteraciones (Si♮, Sol♯, La♭) que pasa de una mano a otra. En 87–91 las semicorcheas alternan entre manos y en octavas, en 92–93 vuelven los acordes y en el 94 hay un trémolo de octavas en la izquierda con crescendo. La partitura no da un número de tempo nuevo para el Agitato.
3. Digitación: en los acordes repetidos usa siempre los mismos dedos en cada mano y escríbelos en el 73. En la escala de 78–79 marca el paso del pulgar y el punto de relevo entre las manos.
4. Manos separadas y lentas: cada mano a una velocidad cómoda (por ejemplo ♩ = 50), con la muñeca suelta y a poco volumen. Luego juntas, comprobando que la alternancia es perfectamente regular: imagina una sola línea de semicorcheas.
5. Escala de 78–79: practícala en grupos de cuatro notas parando en la primera de cada grupo, luego en grupos de ocho y después seguida, llegando a tiempo al acorde arpegiado del 80.
6. Días 3–5: sube el metrónomo de 4 en 4 solo cuando un pasaje sale tres veces seguidas sin errores. Usa como referencia el ♩ = 74 del principio y la grabación para decidir tu tempo final.
7. Pedal: sin marcas. En los acordes repetidos toca sin pedal o con toques muy cortos en el primer tiempo; en los acordes largos (77, 80–81, 92, 95) úsalo para dar resonancia.
8. Dinámica y unión: mf de base y crescendo en el trémolo del 94 hasta el f del 96. Practica la unión con el Lamentoso (compases 69–74, con el cambio a 3/4) y la unión 94–96.

**Pasajes difíciles:**

- Compases 73–76 y 82–86: acordes repetidos alternados entre manos. Practica a poco volumen, con la muñeca suelta y los dedos pegados a las teclas; la tensión acumulada aquí arruina el resto de la pieza.
- Compases 78–79: escala rápida con alteraciones entre las dos manos. Lee primero cada nota en voz alta, después practica el relevo entre manos aislado y por último la escala completa con metrónomo.
- Compás 94: trémolo de octavas con crescendo. Usa la rotación del antebrazo en lugar de la fuerza de los dedos y empieza el crescendo desde un volumen bajo para tener margen.

**Pasas a la siguiente sesión cuando:** Puedes tocar del 73 al 96 a tu tempo de trabajo con los acordes repetidos regulares y relajados, la escala de 78–79 sin tropiezos y el trémolo creciendo hasta el f.

**Teoría: Grupos irregulares (tresillo, quintillo, seisillo).** Son grupos de notas que no encajan en la división normal del pulso: tres, cinco o seis notas en el espacio de dos o cuatro. Dan una sensación libre, casi hablada. En tu partitura: Tresillos en los compases 11, 39, 52–57; quintillo en los compases 26 y 62; seisillos en los compases 67 y 127–128.

#### Sesión 6: Agitato: movimiento perpetuo (c. 96–115)

Ejercicios: Hanon 6 (calentamiento), Hanon 41 en Re menor (sección central en Sol menor) (técnica) y Czerny nº 34. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 96–115 con las semicorcheas de la derecha continuas y parejas, la izquierda segura en sus saltos, las dos voces de la derecha bien diferenciadas desde el 105 y la alternancia f / mf clara.

**Paso a paso:**

1. Día 1: escucha esta parte siguiendo la partitura: es un movimiento perpetuo en el que la derecha casi no deja de tocar semicorcheas.
2. Análisis: en 96–104 la derecha toca semicorcheas continuas y la izquierda acompaña con octavas y acordes en corcheas y saltos al bajo. Desde el 105 la derecha toca dos voces: arriba una alternancia rápida de dos notas (como Fa–Sol o La–Si♭) y abajo notas más largas, mientras la izquierda hace pequeños grupos con silencios. En 113–115 la izquierda toca arpegios rotos amplios. Las dinámicas cambian constantemente entre f y mf con reguladores.
3. Digitación: en la derecha agrupa las semicorcheas por posición de mano y marca cada cambio de posición con una pequeña línea. Desde el 105 decide qué dedos tocan la voz de arriba (por ejemplo 3-4 o 4-5) y cuál la de abajo (1), y escríbelo.
4. Mano derecha sola con el metrónomo a la mitad de tu tempo final: toca cada grupo de posición como un acorde y luego desplegado. Sube solo cuando salga tres veces seguidas sin errores.
5. Mano izquierda sola: practica los saltos al bajo mirando la tecla de destino; en 113–115 toca cada arpegio roto como acorde antes de desplegarlo.
6. Días 3–5: manos juntas a la mitad del tempo, subiendo de 4 en 4. Trabaja primero 105–111, donde la derecha tiene dos voces.
7. Pedal: sin marcas. Casi sin pedal en las semicorcheas para que se oigan limpias; algún toque corto en los bajos graves del primer tiempo.
8. Dinámica y unión: haz de verdad cada regulador entre f y mf: dan forma al movimiento perpetuo. Enlaza desde el 92 hasta el 116.

**Pasajes difíciles:**

- Compases 96–104: semicorcheas continuas en la derecha contra saltos de la izquierda. Practica manos juntas compás por compás y luego de dos en dos, con metrónomo a la mitad de velocidad.
- Compases 105–111: dos voces en la derecha. Practica primero solo la voz de arriba, luego solo la de abajo manteniendo su duración, y después juntas con la voz de abajo más suave.
- Compases 113–115: arpegios rotos amplios de la izquierda. Practica el movimiento de la mano en bloque y después desplegado, con la muñeca flexible.

**Pasas a la siguiente sesión cuando:** Puedes tocar del 96 al 116 a tu tempo de trabajo sin interrupciones en las semicorcheas, con la izquierda segura y la alternancia f / mf bien audible.

**Teoría: Adornos: apoyatura, trino y acorde arpegiado.** La apoyatura es una nota pequeña que se toca justo antes de la principal; el trino alterna rápido dos notas vecinas; el arpegiado despliega el acorde de abajo arriba. En tu partitura: Apoyaturas en los compases 34–37; trino en el compás 49; acordes arpegiados en los compases 16–20, 59–61 y 127–128.

#### Sesión 7: Clímax y final (c. 116–131)

Ejercicios: Hanon 7 (calentamiento), Hanon 48 (técnica) y Czerny nº 25. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 116 al final con la alternancia de la derecha alrededor del La repetido ligera y rotada, la nota pedal de La firme, los arpegios en seisillos de 127–128 amplios y los Re graves sostenidos hasta el último compás.

**Paso a paso:**

1. Día 1: escucha el final siguiendo la partitura y fíjate en cómo todo gira alrededor de la nota La antes del Re final.
2. Análisis: en 116–118 la derecha alterna una nota de melodía con un La repetido, como octavas rotas que se abren y se cierran; en 119–120 el La repetido queda arriba en semicorcheas sobre notas largas. La izquierda toca acordes con alteraciones cromáticas (bemoles y becuadros). Desde el 121 (f) el bajo se queda en La, una nota pedal mantenida varios compases, y en 123–124 se repite La mientras la derecha sube cromáticamente. En 127–128 hay arpegios en seisillos que suben y bajan, y la pieza acaba con Re graves tenidos desde el 128. En esta copia el último compás es el 131.
3. Digitación: para la alternancia con el La usa el pulgar en el La y el 4 o el 5 en la melodía, y escríbelo. En los seisillos de 127–128 marca los pasos del pulgar.
4. Mano derecha sola: en 116–120 gira el antebrazo (rotación) en lugar de articular cada nota con el dedo. Practica primero lento exagerando la rotación, luego más pequeña y rápida. El La repetido debe sonar más suave que la melodía.
5. Mano izquierda sola: lee despacio los acordes cromáticos de 117–120 nombrando las alteraciones; en 121–123 mantén el La grave ligado y en 123–124 repite el La sin rigidez.
6. Días 3–5: manos juntas a la mitad del tempo, subiendo de 4 en 4. Trabaja sobre todo 123–124, donde la derecha salta y la otra mano repite.
7. Pedal: sin marcas. Poco pedal en 116–120 para no mezclar el cromatismo; un pedal más largo sobre el La grave del 121 si suena limpio, cambiándolo cuando la armonía de arriba choque. En los seisillos de 127–128 y en los Re finales, pedal amplio que mantienes hasta que el sonido se apague.
8. Dinámica y unión: mf con crescendo hacia los f de los compases 121 y 128. Enlaza desde el 112 hasta el final y termina con calma: los Re graves duran hasta el último compás.

**Pasajes difíciles:**

- Compases 116–120: alternancia de la melodía con el La repetido. Practica con rotación del antebrazo a la mitad de velocidad y comprueba que la mano no se cierra.
- Compases 123–124: saltos amplios de la derecha subiendo cromáticamente mientras se repite el La. Practica solo las notas agudas como melodía, luego con el La, mirando el destino de cada salto.
- Compases 127–128: arpegios en seisillos que suben y bajan sobre acordes arpegiados de la izquierda. Practica cada seisillo en grupos de tres notas y después seguido, llegando con firmeza al f del 128.

**Pasas a la siguiente sesión cuando:** Puedes tocar del 116 al final a tu tempo de trabajo con la rotación suelta, los arpegios de 127–128 limpios y los Re finales sostenidos sin cortar.

**Teoría: Pedal de dominante.** El bajo mantiene la quinta nota de la escala mientras arriba cambia la armonía. Acumula tensión que solo se libera al llegar a la tónica. En tu partitura: La grave tenido en los compases 121–123, antes del final en Re.

#### Sesión 8: Obra completa (c. todo)

Ejercicios: Hanon 8 (calentamiento), Hanon 53 en Re menor (sección central en Sol menor) (técnica) y Czerny nº 28. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar In the Palace entera de memoria, con el contraste entre el Lamentoso (♩ = 74) y el Agitato bien marcado, transiciones sin cortes y un tempo estable en el Agitato.

**Paso a paso:**

1. Día 1: escucha la grabación completa con la partitura y marca las uniones: compases 12–13, 33–34 (cambio a dos bemoles), 50–51, 72–73 (cambio a 3/4 y Agitato), 95–96 y 115–116.
2. Practica las uniones con dos compases antes y dos después, cinco veces al día. La más importante es la 72–73: decide cuánto silencio dejas antes del Agitato y cuál será su tempo, porque la partitura solo indica ♩ = 74 al principio.
3. Memoria por bloques: Lamentoso en Re menor (1–33), tema en Sol menor (34–50), desarrollo y cadencia (51–72), Agitato con acordes repetidos (73–95), movimiento perpetuo (96–115) y final (116 al final). Repasa con partitura cada día los compases con alteraciones especiales (26, 57–59, 65–68, 78–79, 117–120).
4. Comprueba la memoria empezando sin partitura desde los compases 13, 34, 51, 73, 96 y 116.
5. Pasadas del Lamentoso solo y del Agitato solo; después la obra completa. En el Agitato usa el metrónomo a tu tempo de trabajo y súbelo solo cuando la pasada salga sin paradas.
6. Pasada completa sin metrónomo: Lamentoso libre pero con notas largas y silencios completos; Agitato con pulso estable, sin acelerar en los f.
7. Grábate y escucha con la partitura: ¿se oye el contraste de carácter?, ¿los acordes repetidos son regulares?, ¿hay tensión audible (golpes, desigualdad) del 96 al final?
8. Último día: dos pasadas de concierto grabadas, cuidando la resistencia: relaja hombros y muñecas en los silencios y en los acordes largos del Agitato (77, 80–81, 92, 95).

**Pasajes difíciles:**

- Compases 72–73: del final del Lamentoso al Agitato en 3/4. Practica la entrada del Agitato en frío varias veces al día, después de unos segundos de silencio.
- Compases 73 al final: resistencia física. Si notas tensión en el antebrazo, para, relaja y baja el tempo de práctica; es mejor una pasada relajada algo más lenta que una rígida a tempo.
- Compases 26, 60–62 y 78–79: pasajes rápidos irregulares. Repásalos aislados con metrónomo cada día antes de las pasadas completas.

**Pasas a la siguiente sesión cuando:** La obra está lista cuando una grabación completa de memoria suena sin paradas, con el Lamentoso cantado y el Agitato a un tempo estable que puedes mantener hasta el compás final.

**Teoría: Modulación a la subdominante menor.** Modular es cambiar de tonalidad. Aquí se pasa de Re menor a Sol menor, que solo añade un bemol (Mi♭), por lo que el cambio suena natural pero más oscuro. En tu partitura: Cambio de armadura a 2♭ al final del compás 33; vuelta a 1♭ antes del compás 73.

### 11 · Again

Masaru Yokoyama (arr. Torby Brand) · Fa mayor · 4/4 · ♩ = 94 · dificultad 6/10 · 3 pág. · se estudia del 03/05/2027 al 07/06/2027 · cada sesión dura unos 4 días

| Sesión | Sección (compases) | Foco técnico | Calentamiento | Técnica | Estudio Czerny |
|---|---|---|---|---|---|
| 1 | Introducción (1–2) | acordes quebrados en la izquierda | Hanon 3 | Hanon 41 en Fa mayor | nº 14 (pág. 7) |
| 2 | Tema con notas largas (3–10) | síncopas | Hanon 4 | Hanon 21 | nº 16 (pág. 8) |
| 3 | Tema con acompañamiento (11–18) | octavas | Hanon 5 | Hanon 51 | nº 21 (pág. 12) |
| 4 | Coral (19–26) | acordes plaqué | Hanon 6 | Hanon 48 | nº 8 (pág. 5) |
| 5 | Acordes sobre figuración (27–34) | destacar la melodía | Hanon 7 | Hanon 22 | nº 1 (pág. 3) |
| 6 | Tema en octavas (35–42) | rotación de muñeca | Hanon 8 | Hanon 53 en Fa mayor | nº 15 (pág. 8) |
| 7 | Clímax (43–50) | independencia de dedos | Hanon 9 | Hanon 23 | nº 2 (pág. 3) |
| 8 | Coda con manos intercambiadas (51–58) | rango dinámico | Hanon 10 | Hanon 32 | nº 30 (pág. 16) |
| 9 | Obra completa (todo) | pedal y legato | Hanon 11 | Hanon 33 | nº 5 (pág. 4) |

#### Sesión 1: Introducción (c. 1–2)

Ejercicios: Hanon 3 (calentamiento), Hanon 41 en Fa mayor (técnica) y Czerny nº 14. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 1–2 con la mano derecha sola en p, las corcheas parejas y la síncopa ligada sintiendo el tercer tiempo, a ♩ = 94.

**Paso a paso:**

1. Día 1: escucha el inicio varias veces siguiendo la partitura. Es solo la mano derecha, como una llamada antes de que entre el tema.
2. Análisis: Fa mayor (un bemol, Si♭). El compás 1 sube La–Si♭–Do–Fa y el Fa queda ligado: la nota llega en la segunda mitad del tiempo 2 y se mantiene sobre el 3. Esa síncopa da el empuje a toda la pieza. El compás 2 baja en arpegio hacia el tema. La partitura indica «Orig. Key: G♭ major»: la versión original suena medio tono más alta, así que si acompañas la grabación oirás esa diferencia.
3. Digitación: escríbela sobre cada nota. Por ejemplo, en el compás 1 La 1, Si♭ 2, Do 3, Fa 5; en el compás 2 elige dedos que te permitan bajar ligado sin saltos de mano.
4. Cuenta «1 y 2 y 3 y 4 y» en voz alta mientras tocas a ♩ = 60. Al llegar a la nota ligada, sigue contando el 3 sin volver a tocarla.
5. Días 2–3: sube a ♩ = 72 y 84, y después a 94.
6. Pedal: sin pedal o con muy poco; son corcheas en una sola mano y la partitura no lo marca.
7. Dinámica: p con un pequeño arco: crece un poco hacia el Fa ligado y vuelve a bajar en el compás 2, que conduce al tema.
8. Unión: enlaza con el primer tiempo del compás 3, donde entra la izquierda; practica los compases 1–3 sin parar.

**Pasajes difíciles:**

- Compás 1: la síncopa ligada tiende a acortarse o a acentuarse demasiado. Tócala primero sin ligadura (repitiendo la nota en el 3) y luego mantenla, contando en voz alta.
- Compases 2–3: el paso de la derecha sola a la entrada de la izquierda. Practica el último tiempo del 2 y el primero del 3 hasta que la izquierda entre sin titubeos.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 1–3 a ♩ = 94 con las corcheas parejas, la síncopa mantenida exactamente sobre el tercer tiempo y la izquierda entrando a tiempo.

**Teoría: Progresión IV – V – iii – vi.** Es una de las progresiones más usadas en la música japonesa de anime y pop. Empieza en la subdominante en vez de la tónica, lo que crea una sensación de movimiento continuo y emoción contenida. En tu partitura: Bajos Si♭ – Do – La – Re en los compases 11–14, repetidos en 15–18, 27–34, 35–42 y 43–50.

#### Sesión 2: Tema con notas largas (c. 3–10)

Ejercicios: Hanon 4 (calentamiento), Hanon 21 (técnica) y Czerny nº 16. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 3–10 con el motivo de la derecha ligado y la síncopa en su sitio, sobre las notas largas de la izquierda en clave de sol, a ♩ = 94.

**Paso a paso:**

1. Día 1: escucha estos compases siguiendo la partitura y canta el motivo de la derecha.
2. Análisis: cada compás repite la misma idea: una tercera en el primer tiempo (por ejemplo Fa–La en el 3), dos corcheas que suben y una nota aguda ligada sobre el tercer tiempo (Re en el 3, Do en el 4). El motivo baja por grados de compás en compás, así que la forma de la mano casi no cambia. La izquierda está en clave de sol con redondas y blancas, y en los compases 4 y 9 toca tres corcheas de enlace.
3. Digitación: anota la del compás 3 y copia el mismo modelo en 4–7. Desde el compás 8 la derecha va con 8va (una octava más alta): márcalo bien grande para no olvidarlo.
4. Mano derecha sola a ♩ = 60 contando corcheas: sostén la nota ligada sobre el 3 y deja que las notas repetidas que siguen sean más suaves. En el compás 10 cuida el ritmo: corcheas, negras y las cuatro semicorcheas finales.
5. Mano izquierda sola: cuenta las redondas y blancas enteras. Lee con atención porque está en clave de sol; al final del compás 10 cambia a clave de fa para el compás 11.
6. Días 2–3: manos juntas a ♩ = 60, 72 y 84; luego 94.
7. Pedal: sin marcas. Cámbialo con cada nota o acorde nuevo de la izquierda (cada redonda o cada blanca), justo después de tocarlo.
8. Dinámica y unión: sigue en p, con la melodía cantando y la izquierda de fondo. Enlaza desde el compás 1 hasta el 11.

**Pasajes difíciles:**

- Compases 3–7: la síncopa ligada de cada compás. Cuenta en voz alta «1 y 2 y 3 y 4 y»; si la ligadura se pierde, toca la nota otra vez en el 3 durante unos días y luego vuelve a ligarla.
- Compases 8–10: la 8va y el ritmo del compás 10 con semicorcheas. Practica el 10 solo con metrónomo a ♩ = 60 y después enlazado con el 11.

**Pasas a la siguiente sesión cuando:** Puedes tocar del 1 al 11 a ♩ = 94 con el motivo igual en cada compás, las síncopas en su sitio y las notas largas de la izquierda mantenidas.

**Teoría: Síncopa por ligadura (anticipación).** La nota importante llega medio tiempo antes del pulso fuerte y se mantiene ligada. Eso da el empuje hacia delante tan característico del tema. En tu partitura: Nota aguda ligada sobre el tercer tiempo en casi todos los compases del tema (por ejemplo 3–5, 11–13, 35–37).

#### Sesión 3: Tema con acompañamiento (c. 11–18)

Ejercicios: Hanon 5 (calentamiento), Hanon 51 (técnica) y Czerny nº 21. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 11–18 en mp con la figuración de semicorcheas de la izquierda pareja y automática sobre los bajos Si♭ – Do – La – Re, y la melodía de corcheas encima, a ♩ = 94.

**Paso a paso:**

1. Día 1: escucha estos compases siguiendo la partitura. Aquí empieza el acompañamiento que sostiene casi toda la pieza.
2. Análisis: la izquierda pasa a clave de fa y toca en cada compás una nota grave (Si♭, Do, La, Re) seguida de Fa–Sol–Do subiendo y un vaivén de semicorcheas alrededor de Do. Los bajos siguen la progresión IV – V – iii – vi dos veces: 11–14 y 15–18. La derecha toca la melodía de 3–10, con terceras en el primer tiempo; en 16–18 con 8va.
3. Digitación: escribe una digitación para el patrón de la izquierda en el compás 11 y úsala igual en los ocho compases. La mano casi no se mueve; solo cambia la nota grave, que toca el 5.
4. Mano izquierda en bloque: toca primero las notas de cada tiempo a la vez, como acordes, para aprender la forma de la mano; luego despliégalas a ♩ = 60. Practícala hasta que salga sin mirar.
5. Mano derecha sola: es la melodía que ya conoces; repásala con la nueva dinámica mp y la 8va de 16–18.
6. Días 2–4: manos juntas. Cada corchea de la derecha coincide con dos semicorcheas de la izquierda. Empieza a ♩ = 60 comprobando esa coincidencia y sube a 72, 84 y 94.
7. Pedal: sin marcas. Cámbialo en cada compás, con cada bajo nuevo, justo después de tocarlo. Si la melodía se emborrona, cámbialo también a mitad de compás.
8. Dinámica y unión: mp con la melodía por encima y la figuración como un fondo parejo. Enlaza desde el 8 hasta el 19, cuidando el cambio de clave de la izquierda entre el 10 y el 11.

**Pasajes difíciles:**

- Compases 11–18 (mano izquierda): el patrón de semicorcheas vuelve en 27–50, así que debe ser automático. Practícalo cada día con los ojos en la partitura, sin mirar las manos, y con metrónomo.
- Compases 11 y 15: corcheas contra semicorcheas con la síncopa ligada de la derecha. Practica por tiempos, manos juntas a ♩ = 60, diciendo «1 y 2 y» en voz alta.

**Pasas a la siguiente sesión cuando:** Puedes tocar del 11 al 18 a ♩ = 94 con la izquierda pareja sin mirarla y la melodía de la derecha clara y ligada encima.

**Teoría: Secuencia melódica.** Un mismo dibujo melódico se repite empezando cada vez un grado más abajo. Ayuda a memorizar: aprendes una forma y la desplazas. En tu partitura: Compases 3–5 y 11–13: el motivo baja de La a Sol manteniendo el mismo contorno.

#### Sesión 4: Coral (c. 19–26)

Ejercicios: Hanon 6 (calentamiento), Hanon 48 (técnica) y Czerny nº 8. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el coral de los compases 19–26 con acordes que suenan exactamente juntos, la nota superior siempre por encima y un crescendo gradual hasta el mf del compás 27.

**Paso a paso:**

1. Día 1: escucha el coral siguiendo la partitura. Después de la figuración, todo se detiene en acordes.
2. Análisis: doble barra en el 19. No hay movimiento rítmico: acordes de redonda (19–21) y de blanca (22–26) en ambas manos, con la indicación poco cresc. La voz superior de la derecha es la melodía. En los compases 23 y 24 la izquierda toca un acorde y después una nota muy grave en la segunda mitad del compás.
3. Digitación: escribe los dedos de cada acorde de modo que la nota superior vaya con 4 o 5 y que las notas comunes entre acordes se queden con el mismo dedo.
4. Manos separadas: en la derecha toca primero solo la nota de arriba forte y las demás muy suaves, luego todas juntas manteniendo ese equilibrio. En la izquierda comprueba que las notas de cada acorde suenan a la vez.
5. Días 2–3: manos juntas a ♩ = 60 y luego 94, contando los cuatro tiempos de cada redonda. Los acordes de ambas manos deben caer exactamente juntos.
6. Pedal: sin marcas. Cámbialo con cada acorde, justo después de tocarlo (pedal sincopado), para unirlos sin mezclarlos. En 23–24 cámbialo también al tocar la nota grave.
7. Dinámica: poco cresc. significa crecer poco a poco. Empieza claramente más suave que el mf del 27 y, si te ayuda, marca con lápiz un nivel de volumen para cada compás.
8. Unión: enlaza desde el 15 hasta el primer tiempo del 27. Las dos uniones de esta sesión son el paso de la figuración al coral y del coral a la figuración en clave de sol.

**Pasajes difíciles:**

- Compases 19–26: que las notas de cada acorde suenen juntas y la superior por encima. Toca cada acorde suelto tres veces con distinto peso en la nota de arriba hasta oír la diferencia.
- Compases 23–24: salto de la izquierda a la nota grave. Mírala antes de llegar y mueve el brazo durante la blanca anterior.
- Compases 26–27: la izquierda cambia a clave de sol y empieza la figuración en otro registro. Practica la unión despacio, leyendo bien el cambio de clave.

**Pasas a la siguiente sesión cuando:** Puedes tocar del 19 al 27 a ♩ = 94 con acordes juntos, la melodía superior audible y un crescendo progresivo que llega con naturalidad al mf.

**Teoría: Acordes con notas añadidas (add9/sus2).** La figuración de la izquierda incluye la segunda (o novena) del acorde además de las notas básicas. Eso da un sonido abierto y moderno, menos 'de manual' que una tríada simple. En tu partitura: Patrón de semicorcheas de la izquierda desde el compás 11 (Fa–Sol–Do–Mi sobre cada bajo).

#### Sesión 5: Acordes sobre figuración (c. 27–34)

Ejercicios: Hanon 7 (calentamiento), Hanon 22 (técnica) y Czerny nº 1. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 27–34 en mf con la figuración de la izquierda segura en el registro agudo y los acordes largos de la derecha mantenidos y equilibrados.

**Paso a paso:**

1. Día 1: escucha la sección siguiendo la partitura.
2. Análisis: es el mismo esquema de 11–18 (bajos Si♭ – Do – La – Re, dos veces), pero la izquierda toca la figuración una octava más alta, en clave de sol, y la derecha toca acordes largos de redonda o blanca. Desde el 31 la derecha va con 8va.
3. Digitación: en la izquierda usa la misma digitación del compás 11. En la derecha anota los dedos de cada acorde, con el 5 en la nota superior.
4. Mano izquierda sola: lee con cuidado, porque en clave de sol las notas parecen distintas aunque la forma de la mano sea la misma. Toca en bloque y luego desplegado a ♩ = 60.
5. Mano derecha sola: coloca cada acorde y mantenlo todo su valor, con la voz superior un poco más fuerte.
6. Días 2–4: manos juntas a ♩ = 60, 72, 84 y 94. Aprovecha que la derecha casi no se mueve para mirar y afianzar la izquierda.
7. Pedal: sin marcas. Cámbialo con cada bajo nuevo (cada compás), justo después de tocarlo; en los compases con dos acordes de blanca (30, 33 y 34) cámbialo también a mitad de compás.
8. Dinámica y unión: mf estable con un pequeño crecimiento hacia el 35, donde empieza el tema en octavas. Enlaza desde el 23 hasta el 35.

**Pasajes difíciles:**

- Compases 27–34 (mano izquierda): la misma figuración en otro registro y otra clave. Alterna el compás 11 y el 27 para que tu mano sienta que es el mismo patrón.
- Compases 30 y 33–34: acordes de cuatro notas que cambian a mitad de compás, con 8va. Practica solo los cambios de acorde de la derecha, colocando la mano antes de tocar.

**Pasas a la siguiente sesión cuando:** Puedes tocar del 27 al 34 a ♩ = 94 con la izquierda sin errores ni dudas de lectura y los acordes de la derecha juntos y sostenidos.

**Teoría: Transporte.** Tocar una pieza en otra tonalidad manteniendo las mismas relaciones entre notas. Aquí el arreglo se bajó un semitono para tener un solo bemol en vez de seis. En tu partitura: Indicación impresa 'Orig. Key: G♭ major' sobre el primer sistema; la partitura está en Fa mayor.

#### Sesión 6: Tema en octavas (c. 35–42)

Ejercicios: Hanon 8 (calentamiento), Hanon 53 en Fa mayor (técnica) y Czerny nº 15. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el tema en octavas (compases 35–42) con la mano abierta y el antebrazo moviéndose, las síncopas ligadas en octava y el regulador creciente que lleva al ff del 43.

**Paso a paso:**

1. Día 1: escucha la sección siguiendo la partitura: el tema vuelve más brillante, en octavas.
2. Análisis: la melodía de los compases 3–10 vuelve toda en octavas en la derecha y con 8va (suena una octava más alta). La izquierda sigue con la figuración en clave de sol sobre los mismos bajos. Al final del 42 la izquierda cambia a clave de fa y hay un regulador creciente hacia el ff.
3. Digitación: en las octavas usa 1-5 en teclas blancas y, si tu mano lo permite, 1-4 en las negras (como Si♭); márcalo donde aparezca una tecla negra.
4. Mano derecha sola: practica primero solo la nota superior de las octavas con el 5, ligada. Luego las octavas completas a ♩ = 60, con la mano fija en forma de octava, el movimiento desde el antebrazo y la muñeca suelta. Las octavas ligadas sobre el tercer tiempo no se vuelven a tocar.
5. Mano izquierda sola: repaso rápido de la figuración en clave de sol.
6. Días 2–4: manos juntas a ♩ = 60, 72, 84 y 94. Si el antebrazo se cansa, para y relaja; no sigas con tensión.
7. Pedal: sin marcas. Cámbialo cada compás con el bajo. Las octavas no se pueden ligar del todo con los dedos, así que el pedal ayuda a unirlas; cámbialo antes si se mezclan.
8. Dinámica y unión: mf que crece por frases; en el 42 haz de verdad el regulador creciente y prepara el ff. Enlaza desde el 31 hasta el 43.

**Pasajes difíciles:**

- Compases 35–41: octavas seguidas en la derecha. Practica en grupos de cuatro octavas parando en la última, con la muñeca suelta, y después seguidas; nunca más de unos minutos seguidos.
- Compás 42: bajada de octavas con regulador creciente y cambio de clave de la izquierda. Practica el compás solo, manos separadas y luego juntas, y enlázalo con el primer tiempo del 43.

**Pasas a la siguiente sesión cuando:** Puedes tocar del 35 al 43 a ♩ = 94 con las octavas parejas, sin tensión en el antebrazo y con la síncopa ligada en su sitio.

**Teoría: Textura acumulativa.** La melodía no cambia, pero cada vuelta suma algo: acompañamiento, octavas, acordes llenos. La intensidad viene de la densidad y no de notas nuevas. En tu partitura: Una voz (c. 3), con figuración (c. 11), en octavas (c. 35), con acordes ff (c. 43).

#### Sesión 7: Clímax (c. 43–50)

Ejercicios: Hanon 9 (calentamiento), Hanon 23 (técnica) y Czerny nº 2. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el clímax (compases 43–50) en ff con los acordes llenos de la derecha, el salto de la izquierda de la octava grave a la figuración seguro y los acordes repetidos del compás 50 sin rigidez.

**Paso a paso:**

1. Día 1: escucha el clímax siguiendo la partitura.
2. Análisis: es la misma melodía en su versión más llena: acordes de cuatro notas en los tiempos fuertes y octavas en el resto. La izquierda empieza cada compás con una octava muy grave (con 8 baja, una octava por debajo de lo escrito) y sigue con la figuración de semicorcheas. En 49–50 la derecha va con 8va y el 50 termina con acordes repetidos en semicorcheas.
3. Digitación: marca los dedos de los acordes de la derecha, con la melodía en el 5. En la izquierda la octava grave va con 5-1 y la mano salta enseguida a la figuración: escribe el primer dedo del patrón.
4. Mano izquierda sola: practica el salto: toca la octava grave y, sin tocar, coloca la mano en la primera nota de la figuración; repítelo varias veces mirando el teclado. Después el compás entero a ♩ = 60.
5. Mano derecha sola: acordes con preparar y soltar, usando el peso del brazo. Mantén las síncopas ligadas dentro de los acordes.
6. Días 2–4: manos juntas a ♩ = 60, 72, 84 y 94. Mira la izquierda en los saltos y toca la derecha de memoria.
7. Pedal: sin marcas. Cámbialo en cada octava grave del primer tiempo, justo después de tocarla, para que el bajo resuene todo el compás.
8. Dinámica y unión: ff con sonido grande y redondo, no golpeado. Los acordes repetidos del 50 salen desde la muñeca, sueltos. Enlaza desde el 39 hasta el 51.

**Pasajes difíciles:**

- Compases 43–50 (mano izquierda): salto de la octava grave a la figuración en cada compás. Practica solo el primer tiempo de cada compás en bucle hasta que el salto salga sin dudar.
- Compás 50: acordes repetidos en semicorcheas con 8va. Practícalos lento, con la muñeca rebotando ligeramente y la mano en la forma del acorde, y luego a tempo.
- Compases 43–49: acordes de cuatro notas con síncopa. Practica la derecha sola en bloques de dos tiempos, colocando la mano antes de cada acorde.

**Pasas a la siguiente sesión cuando:** Puedes tocar del 43 al 51 a ♩ = 94 con los saltos de la izquierda seguros, un ff lleno sin dureza y los acordes del 50 limpios.

**Teoría: Final abierto sobre el vi.** En lugar de cerrar en el acorde de tónica, la pieza se detiene en el relativo menor. El oído se queda esperando, como una frase sin punto final. En tu partitura: Compás 58: Re en el bajo como última nota larga.

#### Sesión 8: Coda con manos intercambiadas (c. 51–58)

Ejercicios: Hanon 10 (calentamiento), Hanon 32 (técnica) y Czerny nº 30. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar la coda (compases 51–58) en mp con la figuración ahora en la mano derecha, pareja y suave, sobre las notas largas de la izquierda, y dejar que la pieza se desvanezca sobre Re.

**Paso a paso:**

1. Día 1: escucha la coda siguiendo la partitura y fíjate en el intercambio de papeles entre las manos.
2. Análisis: la derecha toca ahora la figuración de semicorcheas que antes hacía la izquierda (empieza Mi–Fa–Sol–Do) y la izquierda toca notas largas Si♭ – Do – La – Re, en octavas en 51–54 y como notas sueltas en 55–58. En 51–54 la derecha añade una pequeña doble nota en medio del patrón. Hay doble barra en el 51 y en el 55. El final se queda en Re, sin acorde de tónica.
3. Digitación: usa en la derecha la misma digitación que aprendiste en la izquierda, pero en espejo; escríbela en el compás 51 junto con los dedos de la doble nota añadida.
4. Mano derecha sola a ♩ = 60, pareja y suave, con los dedos cerca de las teclas. Practícala también en bloque, como acordes, igual que hiciste con la izquierda.
5. Mano izquierda sola: cuenta los cuatro tiempos de cada redonda; en el 54 hay dos blancas.
6. Días 2–3: manos juntas a ♩ = 60, 72, 84 y 94. Es más fácil que lo anterior, así que concéntrate en el sonido: un mp que se va apagando.
7. Pedal: sin marcas. Cámbialo con cada nota nueva de la izquierda (cada compás), justo después de tocarla; en el último compás mantenlo hasta que el sonido casi desaparezca.
8. Dinámica y unión: diminuendo progresivo de 55 a 58 y, como mucho, un ritardando muy ligero al final. Enlaza desde el 47 hasta el final: el paso del ff del 50 al mp del 51 debe ser súbito y limpio.

**Pasajes difíciles:**

- Compases 50–51: de los acordes en ff a la figuración en mp en la derecha. Practica el final del 50 y el primer tiempo del 51 hasta que el cambio de volumen y de papel de las manos salga sin dudar.
- Compases 51–54: la doble nota añadida dentro de la figuración de la derecha. Practica el patrón sin ella y después añádela, un poco más suave que el resto.

**Pasas a la siguiente sesión cuando:** Puedes tocar del 50 al 58 a ♩ = 94 con la figuración de la derecha pareja, un mp súbito en el 51 y un final que se desvanece sin cortes.

**Teoría: Progresión IV – V – iii – vi.** Es una de las progresiones más usadas en la música japonesa de anime y pop. Empieza en la subdominante en vez de la tónica, lo que crea una sensación de movimiento continuo y emoción contenida. En tu partitura: Bajos Si♭ – Do – La – Re en los compases 11–14, repetidos en 15–18, 27–34, 35–42 y 43–50.

#### Sesión 9: Obra completa (c. todo)

Ejercicios: Hanon 11 (calentamiento), Hanon 33 (técnica) y Czerny nº 5. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar Again entera de memoria a ♩ = 94, con la figuración de la izquierda estable, cada aparición del tema más intensa que la anterior y el final desvaneciéndose.

**Paso a paso:**

1. Día 1: escucha la grabación completa con la partitura y marca las uniones entre secciones: compases 2–3, 10–11, 18–19, 26–27, 34–35, 42–43 y 50–51.
2. Practica cada unión con dos compases antes y dos después a ♩ = 72 y luego a 94, cinco veces cada día.
3. Memoria con un mapa: la pieza es el mismo ciclo de bajos Si♭ – Do – La – Re repetido con capas: melodía sola (3–10), con figuración (11–18), coral (19–26), acordes (27–34), octavas (35–42), acordes llenos (43–50) e intercambio de manos (51–58). Dilo en voz alta antes de tocar.
4. Comprueba la memoria arrancando desde los compases 11, 19, 27, 35, 43 y 51, y vigila los cambios de clave de la izquierda (10–11, 26–27 y 42–43), que son los que más confunden.
5. Pasadas completas con metrónomo a ♩ = 84 y luego a 94, sin parar; anota los fallos y practícalos al día siguiente.
6. Pasadas sin metrónomo: vigila que el tempo no corra en las octavas y el ff (35–50) ni se detenga en el coral.
7. Grábate y escucha con la partitura: ¿se siente la síncopa?, ¿cada sección suena un escalón más intensa?, ¿se oye la melodía en el coral y en los acordes?
8. Último día: dos pasadas de concierto seguidas y grabadas, empezando con calma: cuenta un compás en silencio a ♩ = 94 antes de las primeras corcheas.

**Pasajes difíciles:**

- Compases 18–19 y 26–27: entrar y salir del coral sin perder el pulso. Cuenta en voz alta durante los acordes largos.
- Compases 42–43: entrada del ff con la octava grave de la izquierda. Practica esta unión aislada cada día.
- Compases 35–50: resistencia en octavas y acordes. En las pasadas completas relaja hombros y muñeca entre frases; si aparece tensión, reduce unos días la velocidad de práctica.

**Pasas a la siguiente sesión cuando:** La obra está lista cuando una grabación completa de memoria a ♩ = 94 suena continua, con un crecimiento claro de sección en sección y sin dudas en las uniones.

**Teoría: Síncopa por ligadura (anticipación).** La nota importante llega medio tiempo antes del pulso fuerte y se mantiene ligada. Eso da el empuje hacia delante tan característico del tema. En tu partitura: Nota aguda ligada sobre el tercer tiempo en casi todos los compases del tema (por ejemplo 3–5, 11–13, 35–37).

### 01 · 12 Variaciones sobre «Ah, vous dirai-je, Maman» K. 265

Wolfgang Amadeus Mozart · Do mayor · 2/4 (3/4 en la Variación XII) · Sin indicación en el tema; Adagio (Var. XI) y Allegro (Var. XII) · dificultad 7/10 · 9 pág. · se estudia del 24/05/2027 al 12/07/2027 · cada sesión dura unos 5 días

| Sesión | Sección (compases) | Foco técnico | Calentamiento | Técnica | Estudio Czerny |
|---|---|---|---|---|---|
| 1 | Tema (1–24) | escalas rápidas | Hanon 5 | Hanon 38 en Do mayor | nº 19 (pág. 11) |
| 2 | Variaciones I–II: semicorcheas (Var. I 1–24 · Var. II 1–24) | independencia de dedos | Hanon 6 | Hanon 21 | nº 1 (pág. 3) |
| 3 | Variaciones III–IV: tresillos (Var. III 1–24 · Var. IV 1–24) | trinos y adornos | Hanon 7 | Hanon 27 | nº 30 (pág. 16) |
| 4 | Variaciones V–VII: diálogo y escalas (Var. V 1–24 · Var. VI 1–24 · Var. VII 1–24) | cruces de manos | Hanon 8 | Hanon 31 | nº 2 (pág. 3) |
| 5 | Variaciones VIII–IX: contrapunto (Var. VIII 1–24 · Var. IX 1–24) | acordes quebrados en la izquierda | Hanon 9 | Hanon 41 en Do mayor | nº 14 (pág. 7) |
| 6 | Variación X: cruce de manos (Var. X 1–24) | rotación de muñeca | Hanon 10 | Hanon 48 | nº 15 (pág. 8) |
| 7 | Variación XI: Adagio (Var. XI 1–24) | staccato | Hanon 11 | Hanon 44 | nº 16 (pág. 8) |
| 8 | Variación XII: Allegro final (Var. XII 1–35) | terceras legato | Hanon 12 | Hanon 50 en Do mayor | nº 9 (pág. 5) |
| 9 | Obra completa (todo) | destacar la melodía | Hanon 13 | Hanon 22 | nº 5 (pág. 4) |

#### Sesión 1: Tema (c. 1–24)

Ejercicios: Hanon 5 (calentamiento), Hanon 38 en Do mayor (técnica) y Czerny nº 19. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el tema completo de memoria, con un pulso estable, sonido cantabile en la derecha y los tres trinos cadenciales limpios.

**Paso a paso:**

1. Día 1: escucha una grabación del tema y la Variación I siguiendo la partitura con el dedo. Canta la melodía de la derecha: es «Estrellita, ¿dónde estás?».
2. Análisis rápido: Do mayor, 2/4, 24 compases. Parte A (1–8, con repetición) y parte B con vuelta de A (9–24, con repetición). Escribe encima de cada compás si el bajo dice Do (I), Fa (IV) o Sol (V); fíjate en que los compases 9–16 alternan Do y Sol.
3. Digitación: en la derecha, el salto del compás 1 al 2 (Do5 a Sol5) se hace con 1 en Do y 5 en Sol, y la línea baja por grados 5-4-3-2-1 hasta el compás 8. Marca con lápiz la digitación de los trinos de los compases 7, 15 y 23: Re5 con 3-2 o 2-1, terminando en Do-Re como está escrito.
4. Manos separadas: en la derecha busca negras iguales y unidas, sin acentuar la primera de cada par. En la izquierda (salta del Do grave al Do una octava más arriba) escucha el bajo como una segunda melodía; en el compás 16 respeta la ligadura de dos notas.
5. Trinos de 7, 15 y 23: tócalos primero como cuatro semicorcheas medidas (Re-Mi-Re-Mi) y la resolución escrita, luego como seis fusas. Que el trino nunca retrase la llegada de la blanca del compás siguiente.
6. Manos juntas con metrónomo: empieza en negra = 60 y sube de 4 en 4 hasta negra ≈ 92–100. No hay número impreso; ese es un tempo orientativo que luego te servirá para todas las variaciones en 2/4.
7. Sin pedal: Mozart en este piano pide dedos, no pedal. El legato lo hacen los dedos; separa ligeramente las negras repetidas para que se oiga que son dos notas.
8. Dinámica y fraseo: no hay dinámica impresa; elige un mf amable, abre un poco hacia el compás 3 (La5) y cierra en las cadencias de 8 y 24. Respeta el calderón final del compás 24.
9. Último día: tócalo de memoria dos veces seguidas con las repeticiones y escribe de memoria el bajo de los 24 compases: es el esqueleto de todas las variaciones.

**Pasajes difíciles:**

- Compases 7, 15 y 23: el trino con su terminación se precipita. Cuéntalo en semicorcheas, después en fusas, y marca con el pie el tiempo 2 para no perder el pulso.
- Compases 9–16: las notas repetidas en la derecha pueden sonar golpeadas. Deja que la tecla suba solo hasta la mitad y repite con el mismo dedo, con peso de brazo ligero.

**Pasas a la siguiente sesión cuando:** Puedes tocar el tema de memoria con las repeticiones a negra ≈ 92 sin parar, con los tres trinos medidos y sin pedal.

**Teoría: Tema con variaciones.** Se presenta una melodía sencilla y luego se repite cambiando el ritmo, la textura o el modo. La armonía y la estructura de 24 compases se mantienen casi siempre, por eso siempre se reconoce el tema. En tu partitura: Tema (1–24) y doce variaciones; cada una reinicia la numeración en 1.

#### Sesión 2: Variaciones I–II: semicorcheas (c. Var. I 1–24 · Var. II 1–24)

Ejercicios: Hanon 6 (calentamiento), Hanon 21 (técnica) y Czerny nº 1. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar las Variaciones I y II seguidas con semicorcheas regulares en cada mano y sin tensión en el antebrazo.

**Paso a paso:**

1. Día 1: escucha las dos variaciones siguiendo la partitura. Nota cómo en la I las semicorcheas están arriba (derecha) y en la II bajan a la izquierda, mientras la otra mano canta el tema.
2. Análisis: la armonía es la del tema. En la Var. I las notas vecinas cromáticas (Re♯, Fa♯, Sol♯) adornan la melodía: rodéalas con lápiz. En la Var. II marca las notas ligadas de la derecha que suenan contra un acorde nuevo: son retardos que resuelven bajando.
3. Digitación: en la Var. I escribe la digitación de los compases 2–6 y 10–16, donde la derecha sube y baja por grupos de cuatro; evita pasar el pulgar sobre una tecla negra. En la Var. II marca la izquierda de los compases 5–6 y 21–22, donde aparecen notas cromáticas con sostenido.
4. Manos separadas, Var. I: la derecha en grupos de cuatro, primero con ritmo con puntillo (larga-corta) y luego al revés (corta-larga). La izquierda tiene notas largas ligadas y silencios: cuéntalos, sobre todo los silencios de corchea con semicorchea de los compases 4–6 y 20–22.
5. Manos separadas, Var. II (forte): la izquierda con la muñeca suelta y el codo libre; la derecha mantiene las notas ligadas mientras toca la nota nueva. Atención a los trinos de los compases 11, 15 y 17 sobre corchea con puntillo.
6. Manos juntas con metrónomo: empieza en negra = 50 (semicorcheas tranquilas) y sube de 4 en 4 solo cuando dos repeticiones salgan limpias. Objetivo: el mismo tempo que elegiste para el tema, al menos negra ≈ 84–92.
7. Sin pedal. La claridad de las semicorcheas depende de que cada dedo levante a tiempo. Si una nota se pega, para y toca ese grupo tres veces lento.
8. Dinámica: la Var. I sin dinámica impresa, en p-mf ligero; la Var. II marca f desde el compás 1, pero que sea un f lleno, no duro. Haz pequeños finales de frase en los compases 8 y 24.
9. Último día: une tema, Var. I y Var. II sin parar entre ellas, manteniendo la misma negra en las tres.

**Pasajes difíciles:**

- Var. I, compases 2–6 y 18–22: la derecha sube a la zona aguda y el pulgar tiende a acentuar. Practica en grupos de cuatro empezando cada grupo en una nota distinta y con el pulgar ligero.
- Var. II, compases 7–8 y 23–24: la izquierda cierra con un salto al Do grave. Practica solo el final del compás 7 y el salto, mirando el Do antes de llegar.

**Pasas a la siguiente sesión cuando:** Las dos variaciones salen seguidas a negra ≈ 84 o más, sin acentos sueltos en las semicorcheas y con las ligaduras de la Var. II sostenidas.

**Teoría: Forma binaria con repeticiones.** La música se divide en dos partes y cada una se toca dos veces. Aquí la segunda parte termina recordando la primera, lo que se llama binaria redondeada. En tu partitura: Barras de repetición en el compás 8 y en el 24 del tema y de cada variación; casillas 1.ª y 2.ª en la Var. I (compás 8) y en la Var. XII (24 y 24b).

#### Sesión 3: Variaciones III–IV: tresillos (c. Var. III 1–24 · Var. IV 1–24)

Ejercicios: Hanon 7 (calentamiento), Hanon 27 (técnica) y Czerny nº 30. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar las Variaciones III y IV con tresillos parejos, trinos claros en la III y saltos de la izquierda sin cortar el pulso en la IV.

**Paso a paso:**

1. Día 1: escucha las dos variaciones con la partitura. Cuenta «1-2-3, 2-2-3» en voz alta para sentir los tresillos dentro de cada tiempo.
2. Análisis: en la Var. III la derecha despliega los acordes en tresillos (Do-Mi-Sol en el compás 1). En la Var. IV los arpegios pasan a la izquierda y la derecha toca acordes con notas ligadas, como en la Var. II. Marca en la IV los compases 5–8 y 21–24, donde la izquierda empieza cada grupo con una nota grave picada.
3. Digitación: en la Var. III marca la derecha de los compases 4–7 y 20–23 (tresillos con notas picadas) y los trinos de los compases 2, 3, 8, 13, 18, 19 y 24. En la Var. IV escribe la digitación de la izquierda en los compases 5–6: 5 en la nota grave y luego 2-1 o 3-1 hacia arriba.
4. Manos separadas, Var. III: la derecha con rotación pequeña de muñeca en cada tresillo, sin subir el codo. Distingue las corcheas picadas de las ligadas. La izquierda tiene acordes y blancas: escucha cómo se sostienen debajo.
5. Manos separadas, Var. IV: la izquierda sola, primero solo las notas graves de cada tiempo (los saltos), luego el tresillo completo. Que el salto lo haga el brazo y la mano llegue ya preparada.
6. Manos juntas con metrónomo: negra = 56 al principio; sube de 4 en 4 hasta la negra de tus variaciones anteriores. Si el tresillo se convierte en dos semicorcheas y una corchea, vuelve a bajar.
7. Sin pedal en ambas; si en la Var. IV la izquierda queda seca en los saltos, prueba un toque mínimo de pedal solo en el primer tiempo, pero primero hazla sin pedal.
8. Dinámica y voz: en la Var. III destaca la nota superior de cada tresillo, que es la melodía escondida. En la Var. IV la derecha canta, la izquierda acompaña más suave.
9. Último día: toca II, III y IV seguidas, cuidando que el paso de semicorcheas a tresillos sea claro y sin cambiar la negra.

**Pasajes difíciles:**

- Var. III, compases 2–3 y 18–19: trino sobre corchea dentro del tresillo. Hazlo de solo tres o cuatro notas, empezando en la nota real, y llega puntual al tiempo siguiente.
- Var. IV, compases 5–6 y 21–22: la nota grave picada obliga a saltar. Practica salto y nota siguiente como un solo gesto, diez veces lento, mirando la tecla de destino.
- Var. IV, compases 9–16: la izquierda sube al registro medio y la derecha sostiene notas ligadas; toca solo la derecha sosteniendo las ligaduras y después añade la izquierda muy suave.

**Pasas a la siguiente sesión cuando:** Las dos variaciones salen a tu negra de trabajo con tresillos regulares, trinos que no retrasan el pulso y los saltos de la izquierda sin huecos.

**Teoría: Cambio de modo (tonalidad homónima).** Do mayor y Do menor comparten la misma tónica pero suenan muy distinto: el menor baja la tercera, la sexta y la séptima. Mozart usa ese contraste para dar un momento serio en medio del juego. En tu partitura: Variación VIII, con armadura de 3♭; la Variación IX vuelve a Do mayor.

#### Sesión 4: Variaciones V–VII: diálogo y escalas (c. Var. V 1–24 · Var. VI 1–24 · Var. VII 1–24)

Ejercicios: Hanon 8 (calentamiento), Hanon 31 (técnica) y Czerny nº 2. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar las Variaciones V, VI y VII con silencios exactos en la V, acordes ligeros sobre semicorcheas en la VI y escalas rápidas y parejas en la VII.

**Paso a paso:**

1. Día 1: escucha las tres variaciones con la partitura. En la V nota que las manos casi nunca tocan a la vez: es un diálogo con silencios de corchea.
2. Análisis: la V alterna derecha y bajo a contratiempo; desde el compás 13 aparecen pares de semicorcheas ligadas que adornan la melodía. En la VI la derecha toca acordes de corchea con silencio sobre semicorcheas de la izquierda, y en los compases 11–16 los papeles se invierten. La VII empieza con una escala de Do mayor de dos octavas en la derecha (compases 1–2).
3. Digitación: escribe la digitación completa de la escala del compás 1–2 de la Var. VII (1-2-3-1-2-3-4-5 o el cruce que prefieras) y de los compases 9–10 y 17–18. En la VI marca la derecha de los compases 11–16, que tiene semicorcheas con notas vecinas cromáticas como Fa♯.
4. Manos separadas, Var. V: cuenta las corcheas en voz alta, «1-y-2-y», y toca solo en las corcheas que te tocan. Var. VI: la izquierda en semicorcheas legato; la derecha corta los acordes con un rebote de muñeca y respeta el silencio.
5. Manos separadas, Var. VII: la derecha por grupos, con ritmos (larga-corta y corta-larga) y luego con parada en cada pulgar. La izquierda tiene blancas y octavas (compases 5–7 y 21–23): que el cambio de octava sea preciso.
6. Manos juntas con metrónomo: negra = 56; sube de 4 en 4. La V puede ir enseguida a tu tempo; la VII es la que decide la velocidad. Objetivo: la negra de las variaciones anteriores.
7. Sin pedal. En la V el pedal borraría los silencios, que son el carácter de la variación.
8. Dinámica: no hay indicaciones nuevas impresas; usa un p juguetón en la V, un mf ligero en la VI y deja que las escalas de la VII crezcan un poco al subir.
9. Último día: toca de la III a la VII seguidas. Revisa el paso de la VI (acordes cortos) a la VII (escalas) sin perder el pulso.

**Pasajes difíciles:**

- Var. V, compases 1–12: las corcheas a contratiempo se adelantan. Toca con metrónomo en corcheas y di «y» en voz alta en cada entrada de la derecha.
- Var. VII, compases 1–2 y 17–18: la escala de dos octavas se desordena en los pasos del pulgar. Practica cada paso de pulgar aislado (tres notas alrededor) y luego por octavas, con el codo quieto.
- Var. VI, compases 11–16: la derecha toma las semicorcheas con cromatismos. Hazlas en grupos de cuatro con parada en la primera nota de cada grupo, y luego seguidas.

**Pasas a la siguiente sesión cuando:** Las tres variaciones salen seguidas a tu negra de trabajo, con los silencios de la V medidos y las escalas de la VII sin tropiezos.

**Teoría: Disminución rítmica.** Consiste en rellenar una melodía de notas largas con notas más rápidas. Las negras del tema se vuelven semicorcheas o tresillos sin que cambie la armonía. En tu partitura: Semicorcheas en la Var. I (derecha) y la Var. II (izquierda); tresillos en las Var. III y IV.

#### Sesión 5: Variaciones VIII–IX: contrapunto (c. Var. VIII 1–24 · Var. IX 1–24)

Ejercicios: Hanon 9 (calentamiento), Hanon 41 en Do mayor (técnica) y Czerny nº 14. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar las Variaciones VIII y IX oyendo con claridad cada entrada de la imitación entre las manos, la VIII en Do menor y la IX de nuevo en Do mayor.

**Paso a paso:**

1. Día 1: escucha las dos variaciones con la partitura. En la VIII la derecha empieza sola (compás 1) y la izquierda la imita dos compases después (compás 3) en clave de sol; en la IX ocurre lo mismo con notas largas.
2. Análisis: la VIII tiene armadura de 3♭ (Do menor). Busca las notas ligadas que crean retardos (compases 3–6 y 19–22) y la bajada cromática del bajo en los compases 13–15. En la IX, Do mayor otra vez; la izquierda entra en el compás 3 imitando a la derecha.
3. Digitación: marca la derecha de los compases 1–2 de la VIII (cuatro corcheas picadas y legato) y los compases 9–12, donde la derecha toca dos voces con alteraciones (Fa♯, Si♮, La♭). En la IX marca la izquierda de los compases 3–6, escrita en clave de sol.
4. Voces por separado: toca y canta cada voz sola. En la VIII la izquierda tiene en los compases 9–11 un Sol en octavas sostenido con ligaduras: mantenlo mientras la derecha se mueve.
5. Manos juntas despacio: negra = 50 en la VIII. Haz sonar un poco más la voz que entra y deja la otra en segundo plano. Sube de 4 en 4 hasta tu tempo de trabajo.
6. IX: las negras con punto de los compases 9–16 deben ser cortas y ligeras, sin rigidez. Distingue con cuidado las picadas de las ligadas.
7. Sin pedal en las dos. Si las notas ligadas largas no se sostienen, revisa la digitación en vez de recurrir al pedal.
8. Color: la VIII pide un sonido más serio y oscuro, de p a mf. La IX vuelve a la luz: más ligera, como un juego entre dos voces.
9. Último día: toca de la VI a la IX seguidas, preparando el cambio de armadura al entrar y al salir de la VIII.

**Pasajes difíciles:**

- Var. VIII, compases 9–12: dos voces en la derecha con alteraciones y retardos sobre el Sol sostenido. Toca primero solo la voz superior, luego solo la inferior, y después juntas sin izquierda.
- Var. VIII, compases 13–15: el bajo baja por semitonos (Fa♯, Fa, Mi, Mi♭). Nómbralos en voz alta mientras tocas la izquierda sola hasta que salgan sin mirar.
- Var. IX, compases 1–8: las entradas en imitación se pisan. Toca la derecha sola y canta la izquierda, y al revés, antes de juntarlas.

**Pasas a la siguiente sesión cuando:** Puedes tocar las dos variaciones a tu tempo y, si te grabas, se distingue con claridad cada entrada de la imitación.

**Teoría: Imitación.** Una mano presenta un motivo y la otra lo repite poco después, como un canon breve. Da sensación de conversación entre voces. En tu partitura: Variación VIII (compases 1–8) y Variación IX (compases 1–8).

#### Sesión 6: Variación X: cruce de manos (c. Var. X 1–24)

Ejercicios: Hanon 10 (calentamiento), Hanon 48 (técnica) y Czerny nº 15. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar la Variación X con cruces de la mano izquierda seguros y sin interrumpir las semicorcheas de la derecha.

**Paso a paso:**

1. Día 1: escucha la variación siguiendo la partitura. Observa la indicación m.s. (mano izquierda) en los compases 1, 9 y 17: la izquierda cruza por encima de la derecha para tocar las notas agudas.
2. Análisis: la derecha toca semicorcheas con silencio inicial en el registro medio; la izquierda alterna entre la melodía aguda (negras como Sol5 y La5, con apoyaturas breves en los compases 4–7) y el bajo grave en octavas, que baja cromáticamente en los compases 4–7 y 20–23.
3. Digitación: marca la derecha de los compases 1–3 (silencio de semicorchea y tres notas) y del compás 16, donde baja en semicorcheas seguidas. Para la izquierda que cruza, decide un dedo fijo para las notas agudas (2 o 3) y escríbelo.
4. Derecha sola: semicorcheas parejas, mano cerca de las teclas y sin mover el codo; tiene que dejar espacio por encima para la izquierda.
5. Izquierda sola, sin sonido primero: haz solo el gesto del cruce, mirando la tecla de destino antes de saltar. Luego con sonido, primero solo las notas agudas, después alternando con las octavas graves de los compases 4–7.
6. Manos juntas con metrónomo: negra = 50; la derecha marca el pulso y la izquierda llega a tiempo. Sube de 4 en 4 hasta tu tempo de trabajo.
7. Sin pedal: la textura es ligera y el pedal mezclaría los registros.
8. Sonido: las notas agudas de la izquierda son la melodía; tócalas cantando, un poco más fuerte que las semicorcheas. Las apoyaturas, cortas y sin retrasar el tiempo.
9. Último día: toca de la VIII a la X seguidas, cuidando la colocación de las manos al empezar la X.

**Pasajes difíciles:**

- Compases 4–7 y 20–23: la izquierda alterna nota aguda cruzada y octava grave. Practica solo esos dos puntos, saltando en el tiempo débil y mirando siempre el destino un instante antes.
- Compás 16: la derecha baja en semicorcheas seguidas justo antes de la vuelta al tema. Hazlo en ritmos y une con el primer tiempo del compás 17.
- Compases 1, 9 y 17 (m.s.): la izquierda choca con la derecha. Acerca la derecha a ti y deja que la izquierda pase por encima, más lejos del cuerpo.

**Pasas a la siguiente sesión cuando:** Tocas la variación completa a tu tempo sin mirar las manos en los cruces y sin que la derecha se detenga.

**Teoría: Dominante secundaria y cromatismo.** Son notas alteradas (como Fa♯ o Do♯) que no pertenecen a Do mayor y empujan con fuerza hacia otro acorde. Dan color sin cambiar de tonalidad. En tu partitura: Fa♯ y Do♯ en las semicorcheas de la Var. I (compases 2–6); bajo cromático en la Var. X (4–7).

#### Sesión 7: Variación XI: Adagio (c. Var. XI 1–24)

Ejercicios: Hanon 11 (calentamiento), Hanon 44 (técnica) y Czerny nº 16. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar la Variación XI, Adagio, como una canción lenta: adornos medidos, contrastes fp y calderones con respiración.

**Paso a paso:**

1. Día 1: escucha la Variación XI con la partitura varias veces. Es la variación más vocal: piensa en una soprano.
2. Análisis: Adagio en 2/4. El compás 1 es de la derecha sola; la izquierda entra en el 2. Busca los fp de los compases 3, 4, 19 y 20, los trinos de 5 y 21, los grupos de adornos en notas pequeñas (compases 5–7, 11 y 21–23) y los calderones de los compases 15–16.
3. Cuenta en corcheas (1-2-3-4 por compás) durante toda la sesión: así los adornos de fusas y semifusas tienen sitio exacto.
4. Digitación: escribe la digitación de cada grupo de adornos y del tresillo de fusas del compás 16. En la izquierda, marca los acordes repetidos de los compases 9–14 para no cambiar de dedos en cada repetición.
5. Derecha sola: canta cada frase antes de tocarla. Los adornos empiezan en el tiempo, no antes, y desembocan en la nota principal sin acelerar.
6. Izquierda sola: en los compases 9–14 los acordes repetidos deben sonar muy suaves y unidos, con la tecla subiendo solo un poco entre repeticiones.
7. Manos juntas con metrónomo en corcheas: corchea = 60 al principio, hasta corchea ≈ 72–80 como objetivo orientativo (no hay número impreso). Apaga el metrónomo el último día y deja respirar los calderones.
8. Pedal: casi nada. Si quieres un poco de color, pedal muy corto en el primer tiempo de los compases tranquilos, nunca en los adornos. Primero toca todo sin pedal.
9. Último día: toca de la IX a la XI seguidas, preparando el cambio de carácter al Adagio con una pausa breve.

**Pasajes difíciles:**

- Compases 5–7 y 21–23: adornos escritos en notas pequeñas y trino. Tócalos primero muy lento contando corcheas y marca con lápiz sobre qué corchea cae cada grupo.
- Compases 15–16: calderones y tresillo de fusas. Decide cuánto dura cada calderón y canta la frase antes de tocarla para que no suene a parada técnica.
- Compases 3–4 y 19–20: los fp. Ataca la nota con peso y suelta de inmediato hacia el piano, sin perder el sonido de la mano izquierda.

**Pasas a la siguiente sesión cuando:** Tocas la variación con los adornos medidos y una grabación tuya suena a canción lenta, no a ejercicio.

**Teoría: Cambio de compás.** Pasar de 2/4 a 3/4 cambia la forma de contar: de dos pulsos por compás a tres. El tema suena más danzable y brillante. En tu partitura: Variación XII, Allegro, en 3/4.

#### Sesión 8: Variación XII: Allegro final (c. Var. XII 1–35)

Ejercicios: Hanon 12 (calentamiento), Hanon 50 en Do mayor (técnica) y Czerny nº 9. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar la Variación XII, Allegro en 3/4, con la izquierda relajada en semicorcheas, trinos claros y la coda hasta el final.

**Paso a paso:**

1. Día 1: escucha la Variación XII con la partitura. El compás cambia a 3/4: tres negras por compás. Nota la primera y la segunda casilla (compases 24 y 24b) y la coda (24b–35).
2. Análisis: la izquierda gira en semicorcheas alrededor de una nota con un bajo grave al principio de cada compás. En los compases 9–16 ambas manos tocan semicorcheas a la vez. La coda tiene escalas en la derecha (compases 28 y 30) y figuras con silencio en 32–34.
3. Digitación: escribe la izquierda de los compases 1–8 y 17–24 (el salto al bajo grave y el giro), los compases 9–16 en las dos manos y las escalas de 28 y 30.
4. Izquierda sola: es el motor de la variación. Muñeca suelta, dedos cerca de las teclas. Practica los saltos al bajo de los compases 5–8 y 21–24 aislados.
5. Derecha sola: los trinos sobre corchea con puntillo (compases 1, 2, 4, 5, 6 y sus paralelos 17–22) llevan terminación escrita; hazlos con pocas notas y llega puntual a la nota siguiente.
6. Compases 9–16 con manos juntas muy lento: negra = 50, por medios compases. Que las dos manos coincidan exactamente.
7. Manos juntas con metrónomo: sube de 4 en 4 desde negra = 60. Decide el tempo final según lo que tu izquierda mantenga relajada en los compases 9–16; objetivo orientativo negra ≈ 100–116 (no hay número impreso).
8. Sin pedal salvo, si quieres, en los acordes finales del compás 35. Dinámica: f brillante, con un poco menos en 9–16 para no cansarte.
9. Último día: toca de la X a la XII seguidas, con el cambio del Adagio al Allegro bien marcado.

**Pasajes difíciles:**

- Compases 9–16: semicorcheas simultáneas en las dos manos. Practica por medios compases con ritmo larga-corta y luego corta-larga, y une de dos en dos compases.
- Compases 5–8 y 21–24: la izquierda salta al bajo grave sin perder el giro. Practica solo la última semicorchea y la nota grave, como un único gesto, mirando el destino.
- Compases 28–31: escalas rápidas de la derecha con la izquierda en blanca con puntillo y corcheas. Estudia la escala sola en grupos de cuatro y luego encaja la izquierda.

**Pasas a la siguiente sesión cuando:** La variación completa sale a tu tempo objetivo con las dos casillas y la coda, sin tensión en la izquierda y sin parar.

**Teoría: Tema con variaciones.** Se presenta una melodía sencilla y luego se repite cambiando el ritmo, la textura o el modo. La armonía y la estructura de 24 compases se mantienen casi siempre, por eso siempre se reconoce el tema. En tu partitura: Tema (1–24) y doce variaciones; cada una reinicia la numeración en 1.

#### Sesión 9: Obra completa (c. todo)

Ejercicios: Hanon 13 (calentamiento), Hanon 22 (técnica) y Czerny nº 5. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el tema y las doce variaciones de principio a fin, de memoria o con mínima ayuda, con un pulso común y transiciones claras entre variaciones.

**Paso a paso:**

1. Día 1: toca la obra completa sin parar, aunque haya errores, y anota en una lista qué variaciones o compases fallaron.
2. Estudia solo los puntos de la lista con el método de su sesión: ritmos en las semicorcheas, salto aislado en los cruces y adornos medidos en el Adagio.
3. Trabaja las transiciones: los dos últimos compases de cada variación y los dos primeros de la siguiente, sobre todo el cambio a Do menor (VIII), la entrada del Adagio (XI) y el paso a 3/4 del Allegro (XII).
4. Memoria: recorre mentalmente la obra con la partitura cerrada, nombrando el carácter de cada variación (semicorcheas arriba, abajo, tresillos, diálogo...). Toca cada variación empezando desde la segunda parte (compás 9) para tener puntos de reinicio.
5. Pulso común: fija una negra para las variaciones en 2/4 (orientativo negra ≈ 92–100) y comprueba con metrónomo que las variaciones fáciles no corren más que las difíciles.
6. Grábate una pasada completa y escúchala con la partitura: anota pulsos irregulares, pedal donde no debe haberlo y adornos que retrasan.
7. Haz dos ensayos de concierto en días distintos: saluda, siéntate, respira y toca todo sin repetir nada. Decide antes si harás todas las repeticiones.
8. Último día: tocada completa grabada en el tempo final: tu negra estable en las variaciones en 2/4, el Adagio cantado y el Allegro brillante.

**Pasajes difíciles:**

- Variaciones VII a VIII: de las escalas en Do mayor al Do menor serio. Haz una pausa breve, cambia el sonido y piensa la nueva armadura antes de tocar.
- Variación XI a XII: del Adagio al Allegro en 3/4. Prepara la mano izquierda en su posición y oye mentalmente el nuevo tempo antes de empezar.
- Resistencia: la obra es larga. Si la izquierda se cansa en la XII, revisa que vayas relajado en las variaciones anteriores, sobre todo en la II y la IV.

**Pasas a la siguiente sesión cuando:** Puedes tocar la obra completa dos días seguidos sin paradas y con un pulso coherente, y la grabación te convence de principio a fin.

**Teoría: Forma binaria con repeticiones.** La música se divide en dos partes y cada una se toca dos veces. Aquí la segunda parte termina recordando la primera, lo que se llama binaria redondeada. En tu partitura: Barras de repetición en el compás 8 y en el 24 del tema y de cada variación; casillas 1.ª y 2.ª en la Var. I (compás 8) y en la Var. XII (24 y 24b).

### 10 · Lie and Truth

Masaru Yokoyama (arr. Torby Brand) · Fa♯ mayor (con una sección central centrada en Re♯ menor) · 3/4 · ♩ = 75 · dificultad 7/10 · 4 pág. · se estudia del 07/06/2027 al 12/07/2027 · cada sesión dura unos 4 días

| Sesión | Sección (compases) | Foco técnico | Calentamiento | Técnica | Estudio Czerny |
|---|---|---|---|---|---|
| 1 | Introducción: ostinato (1–8) | acordes quebrados en la izquierda | Hanon 7 | Hanon 41 en Fa♯ mayor (con una sección central centrada en Re♯ menor) | nº 14 (pág. 7) |
| 2 | Melodía en semicorcheas (9–24) | independencia de dedos | Hanon 8 | Hanon 21 | nº 1 (pág. 3) |
| 3 | Transición con acordes (25–32) | polirritmia 2 contra 3 | Hanon 9 | Hanon 22 | nº 12 (pág. 6) |
| 4 | Tema fuerte (33–42) | acordes plaqué | Hanon 10 | Hanon 48 | nº 8 (pág. 5) |
| 5 | Clímax (43–52) | octavas | Hanon 11 | Hanon 51 | nº 21 (pág. 12) |
| 6 | Disolución (53–57) | destacar la melodía | Hanon 12 | Hanon 23 | nº 5 (pág. 4) |
| 7 | Coda (58–69) | rotación de muñeca | Hanon 13 | Hanon 53 en Fa♯ mayor (con una sección central centrada en Re♯ menor) | nº 15 (pág. 8) |
| 8 | Obra completa (todo) | rango dinámico | Hanon 14 | Hanon 32 | nº 30 (pág. 16) |

#### Sesión 1: Introducción: ostinato (c. 1–8)

Ejercicios: Hanon 7 (calentamiento), Hanon 41 en Fa♯ mayor (con una sección central centrada en Re♯ menor) (técnica) y Czerny nº 14. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 1–8 con el ostinato de la izquierda automático y parejo en mp y la melodía de negras con puntillo encima, sin que una mano arrastre a la otra, a ♩ = 75.

**Paso a paso:**

1. Día 1: escucha la pieza completa una vez siguiendo la partitura y luego solo los compases 1–8 varias veces. Fíjate en el murmullo continuo de la izquierda y en la melodía lenta de la derecha.
2. Análisis: la armadura tiene seis sostenidos (todas las notas sostenidas menos Si). El ostinato tiene doce semicorcheas por compás: La♯–Si–Do♯–Fa♯ | Do♯–Si–La♯–Si | Do♯–Fa♯–Do♯–Si. Cada dos compases cambia el acorde de apoyo del primer tiempo: Si–Fa♯–La♯ en los compases 1 y 5, La♯–Mi♯–La♯ en los 3 y 7; en estos últimos la nota aguda del patrón es Mi♯ (la tecla blanca de Fa) en lugar de Fa♯.
3. Digitación del ostinato: escríbela en el compás 1 y no la cambies nunca. Una opción: La♯ 5, Si 4, Do♯ 2, Fa♯ 1 y la vuelta Do♯ 2, Si 4, La♯ 5, Si 4. La mano queda en una sola posición, sin pasos del pulgar.
4. Mano izquierda sola, varios minutos cada día: a ♩ = 50, luego 60, hasta que salga sin mirar y sin pensar. El acorde del primer tiempo de los compases 1, 3, 5 y 7 suena con sus notas juntas; el resto del patrón, más suave.
5. Mano derecha sola: cuenta los tres tiempos en voz alta. En los compases 2, 4, 6 y 8 la derecha toca dos negras con puntillo, es decir, divide el compás en dos mientras la izquierda lo divide en tres tiempos: la segunda nota cae justo a mitad del compás. En los compases 3 y 7 la nota aguda va con 8va, una octava más alta de lo escrito.
6. Días 2–3: manos juntas a ♩ = 50. Para el dos contra tres, piensa en las semicorcheas de la izquierda: la segunda negra con puntillo de la derecha coincide con la séptima semicorchea. Sube a 60 y 68.
7. Pedal: la partitura no lo marca. Prueba primero sin pedal hasta que la izquierda suene limpia. Después usa poco pedal y cámbialo cada dos compases con el acorde de apoyo, o cada compás si se emborrona.
8. Últimos días: a ♩ = 75, todo en mp, con la izquierda como fondo y la melodía por encima. El salto a la nota en 8va de los compases 3 y 7 debe ser tranquilo: mueve el brazo antes y no acentúes esa nota.

**Pasajes difíciles:**

- Compases 1–8 (mano izquierda): el ostinato vuelve en gran parte de la pieza, así que debe ser automático. Practícalo cada día también con los ojos cerrados y mientras cuentas en voz alta.
- Compases 2, 4, 6 y 8: dos negras con puntillo de la derecha contra doce semicorcheas de la izquierda. Toca la izquierda y da una palmada o di «ya» en las semicorcheas 1 y 7; después cambia la palmada por las notas de la derecha.
- Compases 3 y 7: salto de la derecha a la nota en 8va mientras la izquierda sigue. Practica solo el salto, mirando la tecla aguda, y vuelve a la posición del compás siguiente sin parar la izquierda.

**Pasas a la siguiente sesión cuando:** Puedes tocar del compás 1 al 8 a ♩ = 75 tres veces seguidas con el ostinato parejo, sin mirar la mano izquierda, y con la melodía encajada en dos pulsos contra los tres de la izquierda.

**Teoría: Armadura de seis sostenidos.** En Fa♯ mayor todas las notas son sostenidas menos Si. Aparece Mi♯, que en el teclado es la tecla blanca de Fa: se escribe así para que cada nota de la escala tenga un nombre distinto. En tu partitura: Armadura de toda la pieza; el Mi♯ aparece en el acorde La♯–Mi♯–La♯ de los compases 3, 7, 11, etc.

#### Sesión 2: Melodía en semicorcheas (c. 9–24)

Ejercicios: Hanon 8 (calentamiento), Hanon 21 (técnica) y Czerny nº 1. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 9–24 con la melodía de semicorcheas alineada nota a nota con el ostinato, ligada y por encima, a ♩ = 75.

**Paso a paso:**

1. Día 1: escucha estos compases siguiendo la partitura. La melodía pasa de notas largas a semicorcheas, así que ahora las dos manos van a la misma velocidad.
2. Análisis: la frase dura cuatro compases y aparece cuatro veces (9–12, 13–16, 17–20, 21–24). Los compases 9 y 13 empiezan tras un silencio con la línea Si–La♯–Sol♯–Fa♯–Sol♯–La♯–Si–Do♯; en 17–18 y 21–22 la melodía oscila entre La♯ y Sol♯. Cada frase acaba con negras con puntillo agudas (11, 15, 19, 23) y un compás de descanso para la derecha (12, 16, 20).
3. Digitación: marca dónde pasa el pulgar en la línea de los compases 9 y 13 y elige una pareja fija de dedos para la oscilación La♯–Sol♯ (por ejemplo 3-2). En la izquierda aparecen notas con plica hacia arriba dentro del ostinato: mantén la digitación del patrón y tócalas sin moverte de la posición.
4. Mano derecha sola a ♩ = 50: semicorcheas parejas y ligadas, con un pequeño arco hacia la nota más aguda de cada frase. Cuenta bien los silencios y las negras con puntillo de los compases 11, 15, 19 y 23.
5. Mano izquierda sola: repasa el ostinato con las notas añadidas de plica hacia arriba; deben sonar como una voz interior suave, no como golpes.
6. Días 2–4: manos juntas a ♩ = 50, alineando cada semicorchea de la derecha con la de la izquierda. Si no coinciden, para y toca solo un tiempo (cuatro notas por mano) en bucle. Sube a 60, 68 y 75.
7. Pedal: sin marcas. Con semicorcheas en ambas manos usa muy poco: medio pedal cambiado cada compás o ninguno. En las notas largas de 11, 15, 19 y 23 puedes pisarlo un poco más para dar resonancia.
8. Dinámica y unión: sigue en mp con la melodía un punto por encima. Enlaza desde el compás 5 hasta el 25, cuidando la entrada del compás 9 tras la doble barra.

**Pasajes difíciles:**

- Compases 9–10 y 13–14: las dos manos en semicorcheas; cualquier desfase se oye. Practica por tiempos (cuatro notas de cada mano) a ♩ = 50, luego dos tiempos y luego el compás entero.
- Compases 17–18 y 21–22: la oscilación La♯–Sol♯ cansa si aprietas. Mantén la muñeca suelta y los dedos cerca de las teclas, y practica con ritmos (larga-corta y corta-larga) antes de tocarla pareja.

**Pasas a la siguiente sesión cuando:** La sección está lista cuando tocas del 9 al 24 a ♩ = 75 con las semicorcheas de ambas manos perfectamente juntas y la melodía cantando por encima del ostinato.

**Teoría: Ostinato.** Un patrón corto que se repite sin parar mientras lo demás cambia. Da continuidad y deja libre la atención para la melodía. En tu partitura: Mano izquierda en los compases 1–32 y 58–65.

#### Sesión 3: Transición con acordes (c. 25–32)

Ejercicios: Hanon 9 (calentamiento), Hanon 22 (técnica) y Czerny nº 12. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 25–32 en mf con los acordes y terceras de la derecha ligados por la nota superior y el arpegio del compás 32 preparando con claridad el tema fuerte.

**Paso a paso:**

1. Día 1: escucha estos compases siguiendo la partitura: la textura se llena y el volumen sube a mf.
2. Análisis: la izquierda sigue con el ostinato pero añade acordes de apoyo dos veces por compás. La derecha pasa a terceras y acordes pequeños, en semicorcheas en 25 y 27 y en negras en 26 y 28. Desde el 29 la derecha se queda en notas largas (el Fa♯ va ligado del 31 al 32) mientras la izquierda sube en arpegio en el 32.
3. Digitación: marca con lápiz qué dedo lleva la nota superior de cada acorde de la derecha (4 o 5) para poder ligarla. En el arpegio de la izquierda del compás 32 escribe dónde cruza el 3 o el 4 sobre el pulgar.
4. Mano izquierda sola: practica por tiempos los compases con acordes añadidos, primero plaqué y luego desplegados a ♩ = 50. El acorde de apoyo cae junto con la primera semicorchea de su tiempo: que suene a la vez.
5. Mano derecha sola: toca solo la voz superior ligada; luego añade las notas de abajo más suaves. Cuida el ritmo de corcheas del final de los compases 26 y 28.
6. Días 2–4: manos juntas a ♩ = 50, 60, 68 y 75.
7. Pedal: sin marcas. Cámbialo con cada acorde de apoyo de la izquierda, justo después de tocarlo. En el arpegio del 32 mantenlo todo el compás o cámbialo a la mitad si se ensucia.
8. Dinámica y unión: mf más presente que la sección anterior; en 29–32 la tensión crece hacia el f del 33. Enlaza desde el 21 hasta el primer tiempo del 33.

**Pasajes difíciles:**

- Compases 25 y 27: terceras en semicorcheas en la derecha contra el ostinato con acordes. Practica por tiempos, manos juntas a ♩ = 50, alternando con la derecha sola en bloque.
- Compás 32: arpegio ascendente de la izquierda que sube al registro agudo y vuelve a bajar. Practícalo solo, con la digitación escrita, en grupos de cuatro notas parando en cada grupo; termina siempre con el salto al bajo del compás 33.

**Pasas a la siguiente sesión cuando:** Puedes tocar del 25 al 33 a ♩ = 75 con la línea superior de la derecha ligada y el arpegio del 32 llegando a tiempo y seguro al f del compás 33.

**Teoría: Hemiolia (2 contra 3).** El compás de 3/4 tiene tres tiempos, pero la melodía lo divide en dos mitades iguales. El oído percibe dos compases distintos a la vez. En tu partitura: Compases 1–8: dos negras con puntillo en la derecha contra tres grupos de cuatro semicorcheas en la izquierda.

#### Sesión 4: Tema fuerte (c. 33–42)

Ejercicios: Hanon 10 (calentamiento), Hanon 48 (técnica) y Czerny nº 8. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el tema fuerte (compases 33–42) en f con los saltos del bajo seguros, el ritmo con puntillo preciso y la melodía en terceras y sextas por encima.

**Paso a paso:**

1. Día 1: escucha la sección siguiendo la partitura. El carácter cambia de golpe: ya no hay ostinato, sino un bajo que salta y una melodía rítmica en f.
2. Análisis: la sección gira alrededor de Re♯ menor. La izquierda repite un modelo cada medio compás: una nota o acorde grave en el tiempo fuerte y después semicorcheas que vuelven siempre a Re♯. La derecha usa el ritmo corchea con puntillo y semicorchea (compases 33, 36 y 37) y dobles notas.
3. Digitación: en la izquierda marca el 5 para cada bajo grave y la digitación del grupo de semicorcheas que sigue. En la derecha anota los dedos de las terceras y sextas y quién toca la nota de arriba.
4. Mano izquierda sola: practica en bloques: toca el bajo grave y desplaza la mano hasta el grupo siguiente sin tocarlo, para memorizar la distancia. Después toca el patrón completo a ♩ = 50, mirando el teclado al principio.
5. Mano derecha sola: cuenta en voz alta cuatro semicorcheas por tiempo («ta-ka-di-mi») para colocar la semicorchea después de la corchea con puntillo; no la conviertas en tresillo. Liga la voz superior.
6. Días 3–4: manos juntas a ♩ = 50, 60, 68 y 75. Trabaja primero los compases con ritmo con puntillo y luego toda la sección.
7. Pedal: sin marcas. Cámbialo con cada bajo grave, siempre después de tocarlo, para que el bajo resuene sin mezclarse con el siguiente.
8. Dinámica y unión: f sólido con el peso del brazo, sin golpear. Enlaza desde el compás 29 hasta el 43, cuidando el paso del arpegio del 32 al bajo grave del 33.

**Pasajes difíciles:**

- Compases 33–42 (mano izquierda): saltos del bajo cada medio compás. Practica solo los bajos graves en ritmo, después solo el movimiento de vuelta al Re♯, y por último junta las dos cosas.
- Compases 33, 36 y 37: ritmo con puntillo contra semicorcheas de la izquierda. La semicorchea de la derecha coincide con la cuarta semicorchea de la izquierda: practícalo lento comprobando esa coincidencia.
- Compás 42: la derecha baja en semicorcheas hacia el ff del 43. Practícala sola y luego enlazada con el primer acorde del 43.

**Pasas a la siguiente sesión cuando:** Puedes tocar del 33 al 43 a ♩ = 75 con los saltos de la izquierda sin fallos, el ritmo con puntillo exacto y un f lleno que todavía deje margen para el ff.

**Teoría: Alternancia IV – iii.** En vez de la típica tensión dominante–tónica, la armonía se balancea entre dos acordes vecinos que comparten notas. El resultado es flotante, sin sensación de llegada. En tu partitura: Acorde de Si (Si–Fa♯–La♯) en los compases 1–2 y de La♯ menor (La♯–Mi♯–La♯) en los compases 3–4, y así sucesivamente.

#### Sesión 5: Clímax (c. 43–52)

Ejercicios: Hanon 11 (calentamiento), Hanon 51 (técnica) y Czerny nº 21. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el clímax (compases 43–52) en ff con acordes que suenan juntos y redondos, la nota superior cantando y el bajo firme, sin tensión en los brazos.

**Paso a paso:**

1. Día 1: escucha el clímax siguiendo la partitura. Es el punto más fuerte de la pieza.
2. Análisis: es el tema fuerte de los compases 33–42 armonizado con acordes de cuatro y cinco notas y la melodía doblada en octavas. La izquierda mantiene el modelo de bajo grave y semicorcheas. El compás 50 es un acorde largo, el 51 empieza con un acorde arpegiado (línea ondulada) y en el 52 la derecha baja en semicorcheas mientras la izquierda marcha en octavas.
3. Digitación: en los acordes de la derecha la melodía va siempre con el 5 y el pulgar dobla la octava de abajo; márcalo. En las octavas de la izquierda del compás 52 usa 5-1, o 4-1 en teclas negras si te resulta más cómodo.
4. Mano derecha sola: practica solo la voz superior con el meñique, cantada. Después los acordes completos con preparar y soltar: coloca la mano, deja caer el peso del brazo y relaja la muñeca justo después de tocar. Mantén el ritmo con puntillo de los compases 43, 46 y 47.
5. Mano izquierda sola: como en la sección anterior, pero más grave y con más notas. Practica los saltos en bloques y comprueba que el bajo grave no se acorta.
6. Días 2–4: manos juntas a ♩ = 50, 60, 68 y 75. Si notas el antebrazo cansado o tenso, para, sacude los brazos y baja la velocidad: diez minutos relajado valen más que veinte con tensión.
7. Pedal: sin marcas. Cámbialo con cada bajo grave. En el acorde largo del 50 y el arpegiado del 51 mantenlo para que resuene; en el 52 cámbialo con cada octava o usa muy poco para que la bajada se oiga clara.
8. Dinámica y unión: el ff es sonido grande pero no duro, con el peso del brazo. Enlaza desde el 39 hasta el 53, incluido el cambio brusco de densidad que llega después.

**Pasajes difíciles:**

- Compases 43–49: acordes de cuatro y cinco notas con ritmo con puntillo. Practica la secuencia de acordes sin ritmo, colocando la mano en cada uno antes de tocarlo, y luego con ritmo a ♩ = 50.
- Compás 51: el acorde arpegiado. Arpégialo rápido de abajo arriba, de modo que la nota más aguda caiga en el tiempo; repite solo ese gesto varias veces.
- Compás 52: bajada de la derecha en semicorcheas contra octavas de la izquierda. Practica manos separadas y luego juntas a ♩ = 50 por tiempos, comprobando que cada octava cae con su semicorchea.

**Pasas a la siguiente sesión cuando:** Puedes tocar del 43 al 52 a ♩ = 75 sin rigidez en los brazos, con los acordes juntos, la melodía en octavas audible arriba y la bajada del 52 limpia.

**Teoría: Relativo menor.** Cada tonalidad mayor tiene una menor con la misma armadura, situada una tercera menor por debajo. Pasar a ella oscurece el color sin cambiar de armadura. En tu partitura: Compases 33–52: el bajo se asienta en Re♯ (relativo menor de Fa♯ mayor).

#### Sesión 6: Disolución (c. 53–57)

Ejercicios: Hanon 12 (calentamiento), Hanon 23 (técnica) y Czerny nº 5. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 53–57 con la caída brusca de densidad bien marcada, los acordes largos mantenidos todo su valor y la melodía tranquila en el registro medio.

**Paso a paso:**

1. Día 1: escucha la sección siguiendo la partitura y fíjate en el contraste: después del clímax, de repente casi no hay movimiento.
2. Análisis: hay doble barra antes del 53. El 53 todavía tiene algo de movimiento en la derecha, y desde el 54 solo quedan notas largas: acordes de la izquierda ligados de dos en dos compases (54–55 y 56–57) y una melodía de negras con puntillo y blancas con puntillo que baja al registro medio.
3. Digitación: anota los dedos de los acordes de la izquierda (5-2-1 o 5-3-1) y los de la derecha en el compás 53.
4. Manos separadas: cuenta los tres tiempos en voz alta en cada nota larga y a través de las ligaduras (1-2-3, 2-2-3). Comprueba que mantienes la tecla hundida hasta el final.
5. Días 2–3: manos juntas a ♩ = 60 y luego 75. Aquí la dificultad no es técnica sino de paciencia: no adelantes el compás siguiente.
6. Pedal: sin marcas. Pisa el pedal en cada acorde largo y cámbialo cuando cambie el acorde (en 54 y 56), justo después de tocarlo.
7. Dinámica: la partitura no marca dinámica nueva aquí, pero el contraste con el ff pide bajar mucho. Decide un volumen claramente más suave y mantenlo; deja que el sonido se apague dentro de los acordes ligados.
8. Unión: el paso del 52 al 53 es la unión más delicada de la pieza. Practica el último tiempo del 52 y el primer acorde del 53 diez veces, buscando un corte limpio.

**Pasajes difíciles:**

- Compases 52–53: pasar del ff y el movimiento a casi quietud. Suelta los brazos después del 52 y prepara en silencio la mano sobre el acorde del 53 antes de tocarlo.
- Compases 54–57: los acordes ligados se acortan sin querer. Cuenta los seis tiempos de cada par de compases en voz alta y no levantes la mano hasta el acorde siguiente.

**Pasas a la siguiente sesión cuando:** Puedes tocar del 51 al 58 a ♩ = 75 con un cambio de carácter claro en el 53 y todos los acordes largos mantenidos su valor completo.

**Teoría: Acorde con séptima mayor (maj7).** Un acorde mayor al que se añade la nota situada un semitono por debajo de la fundamental en la octava superior. Suena dulce y un poco nostálgico. En tu partitura: Si–Fa♯–La♯ del compás 1: Si mayor con séptima mayor (La♯).

#### Sesión 7: Coda (c. 58–69)

Ejercicios: Hanon 13 (calentamiento), Hanon 53 en Fa♯ mayor (con una sección central centrada en Re♯ menor) (técnica) y Czerny nº 15. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar la coda (compases 58–69) con el ostinato cada vez más suave pero igual de regular, los fragmentos de melodía con sus silencios y los acordes finales sostenidos hasta apagarse.

**Paso a paso:**

1. Día 1: escucha la coda siguiendo la partitura: es una vuelta al principio que se va alejando.
2. Análisis: el ostinato del principio vuelve en los compases 58–65 con los mismos acordes de apoyo (58, 60, 62, 64). La derecha solo toca fragmentos: notas largas y pequeños grupos de semicorcheas (59, 63), con compases de silencio (61). Del 66 al 69 todo se detiene en acordes ligados, con un Si muy grave en la izquierda en los dos últimos compases.
3. Digitación: usa la misma digitación del ostinato del compás 1. Anota los dedos de las semicorcheas de la derecha en los compases 59 y 63.
4. Mano izquierda sola: repasa el ostinato haciendo un diminuendo muy gradual a lo largo de 58–65 sin que se desigualen las notas: cuanto más suave, más cerca de las teclas.
5. Mano derecha sola: cuenta los silencios con rigor; los fragmentos de melodía deben entrar exactamente a tiempo aunque sean pocos.
6. Días 2–3: manos juntas a ♩ = 60, 68 y 75.
7. Pedal: sin marcas. Igual que al principio, poco pedal cambiado cada dos compases con el acorde de apoyo. En 66–69 mantenlo en los acordes ligados y cámbialo al tocar el Si grave del 68; al final levántalo cuando el sonido casi haya desaparecido.
8. Unión: enlaza desde el 53 hasta el final. El último acorde dura dos compases completos: cuenta 1-2-3, 2-2-3 en silencio antes de levantar las manos.

**Pasajes difíciles:**

- Compases 58–65: tocar el ostinato cada vez más suave sin que se vuelva irregular. Practícalo en pp con metrónomo a ♩ = 60 y luego a tempo.
- Compases 66–69: salto de la izquierda al Si muy grave del 68. Mira la tecla antes de llegar y deja la mano preparada en el último tiempo del 67.

**Pasas a la siguiente sesión cuando:** Puedes tocar del 58 al 69 a ♩ = 75 con el ostinato regular hasta el final, los silencios medidos y los acordes finales sostenidos sin cortar.

**Teoría: Ritmo con puntillo.** Una nota larga seguida de una muy corta; da impulso y carácter decidido a la melodía. En tu partitura: Corchea con puntillo + semicorchea al inicio de los compases 33, 36, 37, 43, 46 y 47.

#### Sesión 8: Obra completa (c. todo)

Ejercicios: Hanon 14 (calentamiento), Hanon 32 (técnica) y Czerny nº 30. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar Lie and Truth entera de memoria a ♩ = 75, con el ostinato estable de principio a fin, transiciones sin cortes y un arco dinámico claro desde el mp inicial hasta el ff y la vuelta al murmullo.

**Paso a paso:**

1. Día 1: escucha la grabación completa con la partitura y marca las uniones entre secciones: compases 8–9, 24–25, 32–33, 42–43, 52–53 y 57–58.
2. Practica cada unión con dos compases antes y dos después, a ♩ = 60 y luego a 75, cinco veces cada día.
3. Memoria con un mapa: ostinato con melodía (1–32), tema fuerte y clímax (33–52), disolución (53–57) y ostinato final (58–69). Recuerda que los compases 43–52 repiten la estructura de 33–42 con acordes más llenos.
4. Comprueba la memoria empezando sin partitura desde los compases 9, 25, 33, 43, 53 y 58.
5. Pasadas completas con metrónomo a ♩ = 68 y luego a 75, sin parar aunque falles; anota los errores y repásalos al día siguiente.
6. Pasada sin metrónomo cuidando que el tempo no se acelere en el f y el ff (33–52) ni se arrastre en el ostinato final.
7. Grábate y escucha con la partitura: ¿la izquierda es regular?, ¿se oye la melodía por encima en 1–24?, ¿el ff es lleno sin golpes?, ¿el pedal emborrona las semicorcheas?
8. Último día: dos pasadas de concierto seguidas y grabadas. Sacude los brazos antes de empezar, cuenta un compás en silencio a ♩ = 75 y empieza con la mano izquierda relajada.

**Pasajes difíciles:**

- Compases 32–33: del arpegio del 32 al bajo saltado del tema fuerte. Es la unión más arriesgada; practícala aislada cada día.
- Compases 43–52: el cansancio del antebrazo en el clímax. En las pasadas completas relaja los hombros y suelta la muñeca después de cada acorde; si notas tensión, baja la velocidad de práctica.
- Compases 52–53 y 57–58: cambios bruscos de carácter. Decide antes de tocar qué volumen tendrán el 53 y el 58 y practica esas entradas en frío.

**Pasas a la siguiente sesión cuando:** La obra está lista cuando una grabación completa de memoria a ♩ = 75 suena sin paradas, con el ostinato regular y los cambios de carácter bien marcados.

**Teoría: Armadura de seis sostenidos.** En Fa♯ mayor todas las notas son sostenidas menos Si. Aparece Mi♯, que en el teclado es la tecla blanca de Fa: se escribe así para que cada nota de la escala tenga un nombre distinto. En tu partitura: Armadura de toda la pieza; el Mi♯ aparece en el acorde La♯–Mi♯–La♯ de los compases 3, 7, 11, etc.

### 05 · Merry Christmas Mr. Lawrence

Ryuichi Sakamoto · Re♭ mayor / Si♭ menor · 12/8 (introducción) → 4/4 · Lento – Andante – più mosso – Lento · dificultad 7/10 · 5 pág. · se estudia del 12/07/2027 al 23/08/2027 · cada sesión dura unos 5 días

| Sesión | Sección (compases) | Foco técnico | Calentamiento | Técnica | Estudio Czerny |
|---|---|---|---|---|---|
| 1 | Introducción (caja de música) (1–16) | octavas | Hanon 9 | Hanon 51 | nº 21 (pág. 12) |
| 2 | Tema, primera exposición (17–24) | notas repetidas | Hanon 10 | Hanon 44 | nº 17 (pág. 9) |
| 3 | Tema con arpegios (25–32) | acordes plaqué | Hanon 11 | Hanon 48 | nº 8 (pág. 5) |
| 4 | Puente sincopado (33–40) | arpegios amplios en la izquierda | Hanon 12 | Hanon 41 en Re♭ mayor / Si♭ menor | nº 15 (pág. 8) |
| 5 | Tema en octavas y acordes repetidos (41–56) | destacar la melodía | Hanon 13 | Hanon 21 | nº 1 (pág. 3) |
| 6 | Più mosso (57–64) | pedal y legato | Hanon 14 | Hanon 32 | nº 5 (pág. 4) |
| 7 | Clímax (65–88) | síncopas | Hanon 15 | Hanon 22 | nº 16 (pág. 8) |
| 8 | Coda (89–96) | rango dinámico | Hanon 16 | Hanon 33 | nº 30 (pág. 16) |
| 9 | Obra completa (todo) | staccato | Hanon 17 | Hanon 45 | nº 24 (pág. 13) |

#### Sesión 1: Introducción (caja de música) (c. 1–16)

Ejercicios: Hanon 9 (calentamiento), Hanon 51 (técnica) y Czerny nº 21. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar la introducción completa (compases 1–16) en 12/8, en p, con la derecha como una caja de música regular y la voz con tenuto destacada desde el compás 9.

**Paso a paso:**

1. Día 1: escucha una grabación siguiendo la partitura con el dedo. Fíjate en que la derecha está escrita con 8va: suena una octava más aguda de lo que lees, así que tocarás en la zona alta del teclado.
2. Análisis rápido: 12/8 significa cuatro pulsos por compás, cada uno de tres corcheas. Cuenta en voz alta «UNO-y-a, DOS-y-a, TRES-y-a, CUATRO-y-a». La izquierda, escrita en clave de sol, toca un acorde arpegiado y lo sostiene todo el compás; en los compases 4, 12 y 16 hay dos acordes distintos, uno en cada mitad.
3. Digitación: busca para cada compás de la derecha una posición que no obligue a mover la mano y escríbela con lápiz en los compases 1, 4, 9 y 13. Las notas más agudas del dibujo van con 4 o 5; las de abajo, con 1 y 2.
4. Derecha sola, días 1–2: muy despacio, con las corcheas perfectamente iguales y sin acentos, como un mecanismo. Desde el compás 9 aparecen notas con tenuto (rayita encima): apóyalas un poco más con el peso del brazo y deja las demás más ligeras.
5. Izquierda sola: arpegia cada acorde de abajo arriba, rápido pero sin golpe, y mantén las teclas bajadas hasta la ligadura. Comprueba en los compases 4, 12 y 16 el cambio de acorde a mitad del compás.
6. Manos juntas, días 2–3: el arpegio de la izquierda sale justo en el primer pulso, junto con la primera corchea de la derecha. Usa el metrónomo a la negra con puntillo, empieza en 40 y sube de 4 en 4 hasta acercarte al pulso de la grabación.
7. Pedal: primero toca sin pedal para oír si la derecha está pareja. Luego cambia el pedal en cada compás, justo después de tocar el acorde de la izquierda, y en los compases 4, 12 y 16 cámbialo también en la segunda mitad.
8. Dinámica y final: todo en p y lejano. En el compás 16 el rit. es gradual: alarga un poco cada pulso y respira antes del cambio a 4/4 del compás 17.

**Pasajes difíciles:**

- Compases 9–16: la voz con tenuto queda escondida dentro del dibujo. Tócala sola primero (solo las notas con rayita) como una melodía y luego añade las demás corcheas muy suaves alrededor.
- Compases 1–16: mantener la regularidad durante dieciséis compases. Graba un minuto y escucha si alguna corchea se adelanta; trabaja con metrónomo en grupos de cuatro compases.
- Compás 16: el rit. y la llegada al Andante. Practica los compases 15–17 seguidos, contando en voz alta, hasta que el rit. salga igual cada vez.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 1–16 seguidos, manos juntas y con pedal, con las corcheas iguales en p y las notas con tenuto audibles, tres veces sin parar.

**Teoría: Escala pentatónica.** Es una escala de solo cinco notas, sin semitonos, que da un color abierto y «oriental». Aquí el tema usa casi exclusivamente Mi♭, Fa, La♭, Si♭ y Re♭. En tu partitura: Tema principal, compases 17–24 (Mi♭–Fa–Mi♭–Si♭–Mi♭) y todas sus repeticiones.

#### Sesión 2: Tema, primera exposición (c. 17–24)

Ejercicios: Hanon 10 (calentamiento), Hanon 44 (técnica) y Czerny nº 17. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el tema de los compases 17–24 en p, con la melodía cantando por encima de la nota tenida y el paso correcto desde el 12/8.

**Paso a paso:**

1. Escucha la grabación desde el compás 13 hasta el 24, para oír el cambio de compás. La indicación «corchea = corchea» quiere decir que la corchea no cambia de velocidad: antes el pulso eran tres corcheas y ahora son dos, así que el pulso se siente un poco más ágil.
2. Análisis: la melodía usa notas de la escala pentatónica (Mi♭, Fa, La♭, Si♭, Re♭) y se mueve casi por grados. Bajo ella, la izquierda toca redondas con los bajos Sol♭, La♭ y Si♭ (acordes IV, V y vi). La frase dura cuatro compases y se repite en 21–24.
3. Digitación: en los compases 17 y 21 la derecha sostiene una nota grave (redonda) mientras la melodía se mueve encima. Pon el 1 en la nota tenida y toca la melodía con 2-3-4-5; escríbelo en la partitura. En el compás 20 la melodía va en la nota más alta del acorde: 5 arriba.
4. Derecha sola: canta la melodía mientras la tocas y decide dónde respira (al final de cada ligadura larga). Mantén el pulgar abajo durante toda la redonda sin apretar.
5. Izquierda sola: las redondas deben durar los cuatro pulsos completos. Cuenta en voz alta y cambia de bajo sin cortar el sonido antes de tiempo.
6. Manos juntas despacio, con metrónomo a la negra en 50, y sube poco a poco hasta el pulso de la grabación. La melodía siempre más fuerte que la nota tenida y que la izquierda.
7. Pedal: cambia el pedal en cada compás, cuando cambia el bajo. Levanta y vuelve a bajar justo después de tocar la redonda nueva, nunca antes, para no dejar un hueco.
8. Une con la sección anterior: toca desde el compás 13 hasta el 24 y cuida que la entrada del Andante sea en p, sin acento.

**Pasajes difíciles:**

- Compases 17 y 21: sostener la redonda con el pulgar mientras la melodía se mueve. Practica la melodía sola con 2-3-4-5 y luego añade la nota tenida, que suene una sola vez y se quede quieta.
- Compás 20: la melodía en la parte alta de un acorde. Toca el acorde dejando caer más peso en el quinto dedo, y luego practica solo la nota de arriba para recordar cómo debe sonar.
- Compases 16–17: el cambio de 12/8 a 4/4. Cuenta corcheas en voz alta en los dos compases («1-2-3, 1-2-3…» y luego «1-2, 1-2…») sin cambiar su velocidad.

**Pasas a la siguiente sesión cuando:** Puedes tocar desde el compás 16 hasta el 24 sin parar, con la melodía claramente por encima y el pedal limpio en cada compás.

**Teoría: Ostinato.** Un ostinato es un dibujo corto que se repite muchas veces mientras lo demás cambia. Crea un efecto hipnótico y sirve de fondo a la armonía. En tu partitura: Derecha de la introducción, compases 1–16.

#### Sesión 3: Tema con arpegios (c. 25–32)

Ejercicios: Hanon 11 (calentamiento), Hanon 48 (técnica) y Czerny nº 8. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 25–32 en mp, con la melodía doblada en la derecha bien ligada arriba y los arpegios de la izquierda redondos y con pedal.

**Paso a paso:**

1. Escucha la grabación de los compases 25–32 y compáralos con 17–24: es el mismo tema, ahora con más notas en la derecha y la izquierda en movimiento.
2. Análisis: la derecha dobla la melodía con una segunda nota debajo (cuartas y octavas). La izquierda toca en cada compás un arpegio de bajo, quinta y décima (negra, negra, blanca), siguiendo los bajos del tema.
3. Digitación: en la derecha, la voz de arriba va con 4 y 5 alternando para poder ligarla; la nota de abajo, con 1 y 2. En la izquierda, 5 en el bajo, 2 en la quinta y 1 en la décima, moviendo la mano hacia arriba en vez de estirarla.
4. Izquierda sola, días 1–2: con pedal, cambiándolo en cada compás justo después del bajo. Escucha que la blanca final no golpee y que el bajo suene un poco más que las otras dos notas.
5. Derecha sola: toca primero solo la voz de arriba con la digitación definitiva y ligada; después añade la nota inferior más suave. La voz de arriba manda.
6. Manos juntas despacio, con metrónomo a la negra en 50 y sube de 4 en 4. En el compás 28 aparecen acordes en ambas manos: vigila que salgan juntos.
7. Dinámica: mp, algo más presente que la sección anterior. En el compás 32 hay un regulador de crescendo que prepara el mf del 33: créce de forma continua, no de golpe.
8. Une con lo anterior: toca desde el compás 21 hasta el 32 seguidos.

**Pasajes difíciles:**

- Compases 25–31: el salto de décima en la izquierda. No estires la mano: toca el bajo, gira la muñeca y deja que la mano viaje hacia la nota aguda. Practícalo en bloque (las tres notas como acorde roto lento) y luego en ritmo.
- Compases 26–27 y 30–31: ligar la melodía cuando va en dos notas a la vez. Toca solo la voz de arriba con 4-5 hasta que suene ligada, y deja que la de abajo se suelte un poco si hace falta.
- Compás 32: el crescendo hacia el puente. Practica 31–33 enlazados, empezando el compás 32 todavía suave.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 25–32 manos juntas a un pulso estable, con la voz de arriba ligada, el pedal limpio en cada compás y el crescendo final bien graduado.

**Teoría: Cambio de compás (12/8 a 4/4).** El 12/8 agrupa las corcheas de tres en tres; el 4/4, de dos en dos. La indicación «corchea = corchea» significa que la corchea dura lo mismo antes y después del cambio. En tu partitura: Compases 16–17 (Lento → Andante).

#### Sesión 4: Puente sincopado (c. 33–40)

Ejercicios: Hanon 12 (calentamiento), Hanon 41 en Re♭ mayor / Si♭ menor (técnica) y Czerny nº 15. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el puente de los compases 33–40 con las síncopas en su sitio, el mf creciendo hasta el f del 39 y el calderón del 40.

**Paso a paso:**

1. Escucha la grabación de los compases 33–40 marcando el pulso con la mano: notarás que muchos acordes de la derecha están ligados y suenan antes del pulso.
2. Análisis: la derecha toca acordes arpegiados con ligaduras que cruzan el tiempo (síncopas); la izquierda toca corcheas con el bajo en octava al empezar varios compases. Fíjate con lápiz en las alteraciones accidentales que aparecen en estos compases.
3. Marca el pulso: escribe con lápiz «1 y 2 y 3 y 4 y» encima de los compases 33 y 34 y señala con una flecha dónde cae cada pulso respecto a las notas ligadas.
4. Izquierda sola: corcheas regulares, el bajo en octava apoyado con el peso del brazo y las demás más ligeras. Digita la octava con 5-1 y vuelve enseguida a la posición cerrada.
5. Derecha sola: cuenta en voz alta y no vuelvas a tocar las notas ligadas; mantenlas. Arpegia los acordes de abajo arriba rápido, terminando en la nota de arriba.
6. Manos juntas muy despacio, con metrónomo a la corchea (no a la negra) para ver dónde encaja cada síncopa. Cuando salga, pasa a negra en 50 y sube poco a poco.
7. Pedal: cambia el pedal con cada bajo nuevo de la izquierda; si se ensucia, cámbialo también a mitad de compás.
8. Dinámica: empieza en mf en el 33 y crece hasta el f del 39. En el compás 40 hay calderón en ambas manos: espera el tiempo que necesites antes de volver a p en el 41.

**Pasajes difíciles:**

- Compases 33–38: las síncopas de la derecha. Toca primero sin ligaduras (repitiendo la nota) para oír el ritmo, y después quita la repetición manteniendo la tecla bajada.
- Compases 34 y 36: el bajo en octava de la izquierda seguido de corcheas. Practica solo el salto del bajo al acorde siguiente, con los ojos cerrados, hasta que la mano caiga sola.
- Compases 39–40: el f y el calderón. Da peso desde el brazo, no desde los dedos, y practica el compás 40 seguido del 41 para ensayar el silencio y el cambio brusco a p.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 33–41 manos juntas con metrónomo a negra, sin perder el pulso en las síncopas y con el calderón y el p del 41 claros.

**Teoría: Progresión IV–V–vi (cadencia que no reposa).** En lugar de terminar en el acorde de tónica, la frase sube de Sol♭ a La♭ y acaba en Si♭ menor. Eso da la sensación agridulce de algo que nunca se resuelve del todo. En tu partitura: Bajos de la izquierda en 17–19 y 21–23 (Sol♭ – La♭ – Si♭).

#### Sesión 5: Tema en octavas y acordes repetidos (c. 41–56)

Ejercicios: Hanon 13 (calentamiento), Hanon 21 (técnica) y Czerny nº 1. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 41–56 con el tema en octavas cantando en p, los arpegios de la izquierda sin golpes y los acordes repetidos suaves desde el 49.

**Paso a paso:**

1. Escucha la grabación de 41–56. Es el mismo tema de 25–32, ahora una octava más alto y con octavas en la derecha; desde el 49 cambia el acompañamiento a acordes repetidos.
2. Análisis: en 41–48 la izquierda repite el arpegio de bajo, quinta y décima, ahora con el bajo más grave. En el compás 44 la derecha va en 8va y la izquierda pasa a clave de sol. En 49–56 la izquierda toca negras con acordes repetidos; en el 53 empieza p cresc. y en el 56 hay rit.
3. Digitación: octavas de la derecha con 1-5 y, cuando la voz de arriba deba ligarse, alterna 4 y 5 en la nota aguda. Para los acordes repetidos de la izquierda, deja los dedos apoyados en las teclas.
4. Izquierda sola, 41–48: con pedal cambiado en cada compás. El bajo grave está lejos: mira la partitura, no la mano, y deja que el brazo haga el viaje.
5. Derecha sola, 41–48: toca primero solo las notas de arriba como melodía, luego añade la octava completa. Las octavas deben sonar en p, con la nota aguda un poco más presente.
6. Izquierda sola, 49–56: acordes repetidos con la muñeca suelta, muy cerca de la tecla, en p. Practica cada compás con un solo acorde por pulso, luego como está escrito.
7. Manos juntas, con metrónomo a negra en 50; sube de 4 en 4 hasta el pulso de la grabación. En 53–56 crece poco a poco y haz el rit. del 56 alargando cada pulso.
8. Une con el puente: toca desde el compás 39 hasta el 48 para ensayar la llegada del p después del calderón.

**Pasajes difíciles:**

- Compases 41–48: las octavas de la derecha en p y ligadas. Pedal en cada compás para unir, y practica la voz superior sola con 4-5 alternando hasta que suene cantabile.
- Compases 41–47: el salto del bajo grave al resto del arpegio. Practica solo el bajo y la primera nota siguiente, varias veces, sin mirar.
- Compases 49–56: acordes repetidos sin cansarte. Mantén la muñeca blanda y el codo suelto; si notas tensión, para, sacude el brazo y vuelve a empezar más despacio.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 41–56 seguidos, con las octavas en p cantando, la izquierda sin golpes y el rit. del 56 controlado.

**Teoría: Melodía doblada en octavas y cuartas.** Doblar la melodía significa tocarla a la vez en dos alturas. Suena más llena, pero obliga a destacar la nota de arriba con el dedo meñique. En tu partitura: Compases 25–31, 41–47 y 65–84.

#### Sesión 6: Più mosso (c. 57–64)

Ejercicios: Hanon 14 (calentamiento), Hanon 32 (técnica) y Czerny nº 5. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 57–64 più mosso, con los acordes repetidos en staccato de ambas manos, el acento en cada primer tiempo y un crescendo largo y gradual.

**Paso a paso:**

1. Escucha la grabación de 57–64: el pulso se acelera (più mosso) y todo es staccato en corcheas. Fíjate en cómo crece la intensidad durante los ocho compases.
2. Análisis: ambas manos tocan acordes repetidos en corcheas con punto de staccato y un acento en el primer acorde de cada compás. La indicación mfp pide atacar el primer acorde en mf y bajar enseguida a p; poco a poco cresc. pide crecer de forma continua hasta el f del 65.
3. Aprende los acordes en bloque: toca cada compás con un solo acorde por pulso (negras), manos separadas, para memorizar los cambios de posición. Escribe la digitación del primer acorde de cada compás.
4. Mano derecha sola: corcheas staccato con rebote de muñeca, no de dedos. Metrónomo a negra en 60 al principio.
5. Mano izquierda sola: igual que la derecha. El acento del primer tiempo con un poco más de peso de brazo, el resto ligero.
6. Manos juntas: metrónomo a negra en 60 y sube de 4 en 4. Cuando estés cerca del pulso que quieres, practica en grupos de dos compases y luego los ocho seguidos.
7. Pedal: el staccato pide poco o ningún pedal. Toca la sección sin pedal y, si quieres algo de resonancia, solo un toque corto en el acento de cada compás.
8. Dinámica: empieza mucho más piano de lo que crees, respeta los reguladores de crescendo y llega al compás 64 con fuerza para enlazar con el f del 65. Practica también 55–58 para unir el rit. del 56 con el nuevo tempo.

**Pasajes difíciles:**

- Compases 57–64: la resistencia en los acordes repetidos. Trabaja con rebote de muñeca y, cada dos compases, comprueba que hombros y antebrazos estén sueltos. Si te cansas, baja el metrónomo.
- Compases 57 y 61: el mfp. Toca el primer acorde con acento y retira peso al instante; practica solo el primer pulso de cada compás hasta controlar el contraste.
- Compases 59–64: el crescendo largo. Escribe con lápiz un número de 1 a 8 en cada compás como nivel de volumen y sube un escalón por compás.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 56–65 con el più mosso estable, el staccato parejo en ambas manos y un crescendo que llega al f sin haberse quedado sin margen.

**Teoría: Trémolo.** Es la alternancia muy rápida de dos notas para sostener el sonido y crear tensión, como un redoble. En tu partitura: Izquierda en los compases 89–94 y ambas manos en el 95.

#### Sesión 7: Clímax (c. 65–88)

Ejercicios: Hanon 15 (calentamiento), Hanon 22 (técnica) y Czerny nº 16. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el clímax de los compases 65–88 en f con el tema claro en octavas, la izquierda segura en sus saltos y los arpegios finales del 85–88 bien enlazados.

**Paso a paso:**

1. Escucha la grabación de 65–88. Es la parte más fuerte de la obra: el tema en octavas con relleno armónico en la derecha y una izquierda muy activa.
2. Análisis: en la mayoría de los compases la izquierda toca un bajo grave con acento y luego acordes repetidos en corcheas; en los compases 68, 72, 76, 80 y 84 ambas manos tocan acordes repetidos con regulador de crescendo. En el 76 la derecha va en 8va, en el 80 hay notas de adorno, en el 85 empieza cresc. con arpegios de la izquierda y en el 88 hay rit.
3. Digitación: octavas de la derecha con 1-5 y 1-4 en las teclas negras cuando te ayude a ligar; relleno con 2 o 3. En la izquierda, 5 en el bajo y una posición fija para el acorde.
4. Izquierda sola por bloques: toca solo el bajo y el primer acorde (bajo + acorde) de cada compás, sin las corcheas repetidas, para aprender el salto. Luego añade las corcheas con la muñeca suelta.
5. Derecha sola: practica la voz de arriba como melodía con su fraseo y después el acorde completo. La nota aguda debe sobresalir aunque todo sea f.
6. Manos juntas en bloques de cuatro compases (65–68, 69–72…), con metrónomo a negra en 50; sube de 4 en 4. Cuando cada bloque esté seguro, enlaza dos bloques.
7. Pedal: cambia en cada compás con el bajo acentuado; en los compases de acordes repetidos de ambas manos, cambia en cada cambio de armonía para no mezclar.
8. Dinámica: f no significa golpear. Usa el peso del brazo, guarda algo para el cresc. del 85 y haz el rit. del 88 preparando el Lento del 89.

**Pasajes difíciles:**

- Compases 65–83: el salto del bajo acentuado al acorde en corcheas. Practica bajo + acorde en bloque, luego con los ojos fijos en la partitura, hasta que la mano encuentre la posición sin mirar.
- Compases 76 y 80: el 8va y las notas de adorno. Lee bien el 8va (la mano sube una octava) y toca la nota de adorno muy pegada a la principal, sin que retrase el pulso.
- Compases 85–88: arpegios amplios de la izquierda con crescendo. Practica cada arpegio como acorde roto lento y cambia de posición moviendo el brazo, no estirando los dedos.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 65–88 manos juntas a un pulso estable y fuerte sin tensión, con la melodía clara y llegando al rit. del 88 con control.

**Teoría: Dinámica en terrazas y crescendo largo.** La pieza crece por escalones: cada repetición del tema es más fuerte y más densa que la anterior. Planificar los niveles evita llegar al máximo demasiado pronto. En tu partitura: p (17), mp (25), mf (33), f (39 y 65), ff (89), fff (96).

#### Sesión 8: Coda (c. 89–96)

Ejercicios: Hanon 16 (calentamiento), Hanon 33 (técnica) y Czerny nº 30. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar la coda de los compases 89–96 en Lento, con el trémolo de la izquierda relajado, las notas de adorno en su sitio y el contraste final entre ppp y fff.

**Paso a paso:**

1. Escucha la grabación de 89–96. El tempo vuelve a ser lento y todo es muy amplio: trémolo grave en la izquierda y acordes con notas de adorno en la derecha.
2. Análisis: ff en el 89, con reguladores de diminuendo dentro de los compases. En 90, 92 y 94 aparecen notas de adorno delante de los acordes. En el 95 hay molto rit., la derecha en 8va con trémolo en ppp y calderón; el 96 es un acorde arpegiado fff con acento.
3. Izquierda sola, días 1–2: el trémolo se hace con rotación del antebrazo, como si giraras una llave, no levantando los dedos. Empieza lento, en corcheas medidas, y acelera solo cuando el giro sea suelto.
4. Derecha sola: toca los acordes sin las notas de adorno para fijar las posiciones; luego añade cada adorno muy rápido, pegado al acorde.
5. Manos juntas despacio: primero solo la primera nota de cada grupo del trémolo con los acordes, después el trémolo completo.
6. Pedal: cambia en cada nuevo bajo o acorde; el trémolo necesita pedal para sonar lleno, pero escucha que la armonía no se mezcle.
7. Dinámica: el ff del 89 se va apagando con los reguladores. En el 95, molto rit. y ppp: deja que el trémolo casi desaparezca y sostén el calderón. Luego, el fff del 96 con todo el peso del cuerpo, arpegiando rápido.
8. Une con el clímax: toca desde el 85 hasta el final para ensayar el paso del rit. del 88 al Lento.

**Pasajes difíciles:**

- Compases 89–95: el trémolo de la izquierda sin cansarte. Rotación del antebrazo con la muñeca suelta; si duele o se endurece, para y vuelve a hacerlo más lento y más piano.
- Compases 90, 92 y 94: las notas de adorno. Practica el gesto adorno-acorde aislado, diez veces, hasta que salga como un solo movimiento.
- Compases 95–96: el contraste ppp–fff. Respira durante el calderón y prepara la posición del último acorde antes de tocarlo; no lo tires con prisa.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 85–96 seguidos con el trémolo relajado, el molto rit. y el calderón medidos y el acorde final fff sin tensión.

**Teoría: Escala pentatónica.** Es una escala de solo cinco notas, sin semitonos, que da un color abierto y «oriental». Aquí el tema usa casi exclusivamente Mi♭, Fa, La♭, Si♭ y Re♭. En tu partitura: Tema principal, compases 17–24 (Mi♭–Fa–Mi♭–Si♭–Mi♭) y todas sus repeticiones.

#### Sesión 9: Obra completa (c. todo)

Ejercicios: Hanon 17 (calentamiento), Hanon 45 (técnica) y Czerny nº 24. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar Merry Christmas Mr. Lawrence completa de memoria, con transiciones limpias entre tempos (Lento, Andante, più mosso y Lento) y la curva dinámica de p a fff controlada.

**Paso a paso:**

1. Día 1: toca la obra entera despacio, leyendo, y marca con lápiz los compases donde te detienes o dudas. Esos serán tu lista de trabajo de la sesión.
2. Trabaja las uniones entre secciones, cada una con dos compases antes y dos después: 15–18 (de 12/8 a 4/4), 31–34 (crescendo hacia el mf), 39–42 (calderón y p), 55–58 (rit. y più mosso), 63–66 (llegada al f) y 87–90 (rit. y Lento).
3. Memoria: aprende la obra por secciones y practica empezar desde cualquiera de estos puntos sin partitura: 1, 17, 25, 33, 41, 49, 57, 65, 85 y 89. Si te quedas en blanco, retoma desde el punto siguiente.
4. Tempo: como la partitura no da números de metrónomo, fija tú los tuyos a partir de la grabación (uno para el Lento, otro para el Andante y otro para el più mosso) y escríbelos en la partitura. Practica a un 80 % de esos valores hasta que todo salga estable.
5. Dinámica global: la obra crece desde la caja de música en p hasta el f del clímax y el fff final. Toca una vez solo pensando en esa curva: si el compás 65 ya está al máximo, no queda margen para el final.
6. Pedal: repasa de seguido todos los cambios de pedal; donde la armonía se ensucie, cambia más a menudo.
7. Grábate tocando la obra completa sin parar y escúchala con la partitura delante. Anota tres cosas concretas para mejorar y trabájalas al día siguiente.
8. Pasadas de concierto en los últimos días: una o dos veces al día, como si hubiera público, sin parar ante los errores, y llegando al tempo de la grabación.

**Pasajes difíciles:**

- Compases 16–17 y 56–57: los cambios de tempo. Practícalos aislados con metrónomo hasta que el tempo nuevo salga al primer intento.
- Compases 57–88: la resistencia de los acordes repetidos y las octavas en f. Haz pasadas de esta parte con el brazo suelto y comprueba en la grabación que no se acelera.
- Compases 89–96: llegar con fuerzas al final. Haz pasadas desde el 65 hasta el final para entrenar la coda cuando ya estás cansado.

**Pasas a la siguiente sesión cuando:** Puedes tocar la obra completa de memoria, dos días seguidos, sin parar, con los cambios de tempo seguros y una grabación en la que se oye la curva de p a fff.

**Teoría: Ostinato.** Un ostinato es un dibujo corto que se repite muchas veces mientras lo demás cambia. Crea un efecto hipnótico y sirve de fondo a la armonía. En tu partitura: Derecha de la introducción, compases 1–16.

### 13 · Vague Reasons (Nanami's Theme)

Yoshimasa Terui · Do mayor (con color de Fa lidio) · 4/4 · ♩ = 80 · dificultad 7/10 · 4 pág. · se estudia del 12/07/2027 al 23/08/2027 · cada sesión dura unos 5 días

| Sesión | Sección (compases) | Foco técnico | Calentamiento | Técnica | Estudio Czerny |
|---|---|---|---|---|---|
| 1 | Introducción (1–2) | destacar la melodía | Hanon 11 | Hanon 21 | nº 1 (pág. 3) |
| 2 | A – Ostinato (3–18) | pedal y legato | Hanon 12 | Hanon 32 | nº 5 (pág. 4) |
| 3 | B – Acordes rotos y síncopas (19–26) | arpegios amplios en la izquierda | Hanon 13 | Hanon 41 en Do mayor (con color de Fa lidio) | nº 15 (pág. 8) |
| 4 | C – Puente agudo (27–28) | acordes plaqué | Hanon 14 | Hanon 48 | nº 8 (pág. 5) |
| 5 | D – Tema en octavas (29–36) | octavas | Hanon 15 | Hanon 51 | nº 21 (pág. 12) |
| 6 | E – Interludio libre (37–44) | síncopas | Hanon 16 | Hanon 22 | nº 16 (pág. 8) |
| 7 | F y G – Clímax (45–60) | independencia de dedos | Hanon 17 | Hanon 23 | nº 2 (pág. 3) |
| 8 | H – Coda (61–69) | rango dinámico | Hanon 18 | Hanon 33 | nº 30 (pág. 16) |
| 9 | Obra completa (todo) | escalas rápidas | Hanon 19 | Hanon 38 en Do mayor (con color de Fa lidio) | nº 19 (pág. 11) |

#### Sesión 1: Introducción (c. 1–2)

Ejercicios: Hanon 11 (calentamiento), Hanon 21 (técnica) y Czerny nº 1. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 1–2 en pp, con un pulso de ♩ = 80 estable y el pedal bien colocado, como una puerta tranquila a la pieza.

**Paso a paso:**

1. Escucha una grabación de Nanami's Theme siguiendo la partitura con el dedo; fíjate en que los dos primeros compases solo repiten la nota Sol5 y sirven para fijar el pulso y el ambiente.
2. Análisis rápido: la pieza está en Do mayor sin alteraciones; aquí solo suena Sol, la quinta de Do, en blancas (compás 1) y en blanca más dos negras (compás 2). La izquierda descansa con silencios de redonda.
3. Elige un dedo cómodo para el Sol (el 3 suele dar el sonido más controlado) y úsalo siempre; deja la mano relajada encima de la tecla, sin presionar al fondo.
4. Pon el metrónomo a ♩ = 80 y toca los dos compases contando los cuatro tiempos en voz alta. Repite hasta que cada nota caiga exactamente en su tiempo.
5. Trabaja el sonido pp: toca desde muy cerca de la tecla, dejando caer solo el peso del dedo, y escucha que las cinco notas suenen iguales de suaves.
6. Añade el pedal escrito: se baja al principio del compás 1 y se mantiene hasta antes del compás 3. Baja el pedal justo después de tocar la primera nota, nunca antes, para que no se mezcle ningún ruido previo.
7. Último día: toca los compases 1–2 seguidos del primer tiempo del compás 3 (solo el primer Do agudo y el acorde de la izquierda), para sentir que el pulso continúa sin acelerarse al entrar el ostinato.

**Pasajes difíciles:**

- Compases 1–2: lo difícil es no correr cuando hay tan pocas notas. Cuenta en voz alta «uno-dos-tres-cuatro» y deja que el metrónomo marque las negras hasta que el pulso te salga solo.
- Compás 2: las dos negras finales tienden a sonar más fuertes. Tócalas con el mismo dedo y la misma altura de caída que las blancas.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 1–2 tres veces seguidas con el metrónomo a ♩ = 80, en pp parejo y con el pedal bajado después de la primera nota, sin adelantarte.

**Teoría: Ostinato.** Un ostinato es un dibujo corto que se repite muchas veces mientras otras cosas cambian a su alrededor. Aquí la mano derecha repite las mismas cuatro notas y es la mano izquierda la que cambia el color del acorde. En tu partitura: Compases 3–17 y de nuevo 61–67.

#### Sesión 2: A – Ostinato (c. 3–18)

Ejercicios: Hanon 12 (calentamiento), Hanon 32 (técnica) y Czerny nº 5. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el ostinato de los compases 3–18 con las dos manos a ♩ = 80, con la nota aguda cantando por encima, los acordes arpegiados de la izquierda suaves y el pedal cambiando cada dos compases.

**Paso a paso:**

1. Escucha la sección A siguiendo la partitura: la derecha repite casi todo el rato el dibujo Do6–Re5–Sol5–Si5, mientras la izquierda cambia el color con acordes en blancas. Señala con lápiz los compases donde el dibujo cambia al final (4, 6, 8, 10, 12, 14, 16) y el compás 18, que es diferente.
2. Análisis: aquí manda el acorde Fa maj9(♯11) que tienes anotado sobre el compás 3, alternando con Do maj7. La armonía cambia cada uno o dos compases, y eso coincide con los cambios de pedal escritos.
3. Digitación: usa la que ya está anotada en tu partitura, 5-1-2-4 para Do6–Re5–Sol5–Si5, y revisa las variantes al final de los compases 4, 6 y 8 (por ejemplo 5-5-3-1 en el compás 4). Escríbela también en los compases 11–17, donde no está marcada.
4. Mano derecha sola, sin pedal, a ♩ = 60: busca que las cuatro corcheas suenen iguales y después destaca un poco el Do agudo con el 5.º dedo dejando las otras tres más suaves. Gira levemente la muñeca hacia el 5.º dedo en cada grupo para no tensar la mano.
5. Mano izquierda sola: los acordes están escritos en clave de fa pero suenan en registro medio-agudo, así que comprueba cada nota con calma. En los acordes arpegiados (compases 3, 5 y 15) toca el arpegio rápido y de abajo arriba, terminando la nota superior sobre el tiempo.
6. Compases 4, 6, 8, 10, 12, 14 y 16: practica solo la segunda mitad de cada uno (las corcheas que cambian) enlazándola con el primer tiempo del compás siguiente, cinco veces seguidas, hasta que no dudes.
7. Compás 18: trabájalo aparte, mano derecha primero muy lento. Las semicorcheas finales, que suben, llevan a la sección B; cuenta «1-y-2-y» en voz alta y no aceleres.
8. Manos juntas con metrónomo: empieza a ♩ = 56, sube a 66 y luego a 80. Añade el pedal escrito: un pedal cada dos compases (3–4, 5–6, 7–8, 9–10...), cambiando justo después del primer tiempo del compás nuevo.
9. Último día: une los compases 1–2 con toda la sección A en pp, escuchando que la izquierda nunca tape la línea aguda.

**Pasajes difíciles:**

- Compases 3–17: el riesgo es que el ostinato suene mecánico o desigual. Practica con ritmo puntillo (larga-corta y después corta-larga) cuatro repeticiones y vuelve al ritmo recto; las notas se igualan solas.
- Compases 4, 6, 8, 12, 14 y 16: el final del compás cambia de dibujo y la mano se pierde. Aísla esos dos tiempos y repítelos enlazados con el compás siguiente.
- Compás 18: las semicorcheas y el cambio de textura rompen la calma. Estudia a ♩ = 50 manos separadas y sube de 5 en 5.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 3–18 con las dos manos a ♩ = 80 y con pedal, sin parar, con el Do agudo claramente por encima de las otras notas.

**Teoría: Acordes con notas añadidas (maj7, 9, ♯11).** Son acordes mayores a los que se suman notas extra que les dan un sonido abierto y flotante. Sobre el bajo Fa, las notas Mi, Sol y Si funcionan como 7.ª mayor, 9.ª y 11.ª aumentada. En tu partitura: Compás 3 en adelante (la anotación manuscrita de la partitura indica Fmaj9(♯11) y Cmaj7/6).

#### Sesión 3: B – Acordes rotos y síncopas (c. 19–26)

Ejercicios: Hanon 13 (calentamiento), Hanon 41 en Do mayor (con color de Fa lidio) (técnica) y Czerny nº 15. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar los compases 19–26 en mp con el ritmo exacto de los acordes con puntillo y los silencios de semicorchea, a una velocidad de al menos ♩ = 70.

**Paso a paso:**

1. Escucha la sección B siguiendo la partitura: el ritmo cambia por completo; la derecha toca acordes con puntillo y acordes arpegiados grandes, y la izquierda responde con notas sueltas a contratiempo.
2. Análisis: el bajo en blancas va Fa (19), Sol (20), Do (21), La (22) y luego se repite Fa (23), Sol (24), Do (25). En el compás 26 aparece un Do♯ de paso en una escala ascendente con regulador.
3. Palmea el ritmo de cada mano por separado antes de tocar. Escribe el conteo «1-e-y-a» debajo de los compases 19 y 20, porque los silencios de semicorchea de la izquierda son lo más difícil de leer.
4. Mano derecha sola a ♩ = 50: practica los acordes en bloque (sin arpegiar) para memorizar cada posición; después arpégialos rápido de abajo arriba, con la nota de arriba en el tiempo. Marca digitación en las notas sueltas de 19 (La–Mi–Re) y 21.
5. Mano izquierda sola: toca el bajo en blancas y la respuesta en semicorcheas que sale después del silencio. Cuenta en voz alta para que la nota tras el silencio de semicorchea entre exacta, no antes.
6. Compás 26: estudia la escala de la derecha con Do♯ de paso aparte, lenta y siempre con la misma digitación; el regulador debe sonar como un pequeño cambio de volumen, no como un acento.
7. Manos juntas con metrónomo a ♩ = 50, luego 60 y 70. Si te pierdes, toca solo el primer tiempo de cada compás con ambas manos y ve añadiendo el resto.
8. Pedal: aquí no hay pedal escrito; toca primero sin pedal para oír el ritmo limpio. Si lo usas, que sea un toque corto en cada blanca del bajo, cambiando con cada cambio de bajo.
9. Último día: une el compás 18 con el 19 para que el cambio de pp a mp sea claro, y toca 17–26 seguido.

**Pasajes difíciles:**

- Compases 19–25: los silencios de semicorchea antes de las respuestas de la izquierda. Cuenta «1-e-y-a» en voz alta y toca solo esa mano con metrónomo a ♩ = 50 hasta que no dudes.
- Compases 19, 21 y 23: los acordes arpegiados grandes de la derecha. Practícalos primero en bloque para memorizar la forma de la mano y después arpégialos rápido.
- Compás 26: la escala con Do♯. Fija una digitación, escríbela y no la cambies nunca; repite cinco veces seguidas lenta antes de subir el tempo.

**Pasas a la siguiente sesión cuando:** Tocas los compases 18–26 con las dos manos a ♩ = 70 o más, con todos los silencios en su sitio y sin pararte en el compás 26.

**Teoría: Modo lidio.** El modo lidio es una escala mayor con el cuarto grado elevado. Tocar las notas blancas partiendo de Fa da Fa lidio: el Si natural sobre el bajo Fa crea ese brillo soñador. En tu partitura: Secciones A y H (compases 3–17, 61–67), donde el Si suena sobre acordes de Fa.

#### Sesión 4: C – Puente agudo (c. 27–28)

Ejercicios: Hanon 14 (calentamiento), Hanon 48 (técnica) y Czerny nº 8. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el puente de los compases 27–28 en p, una octava más alto de lo escrito, con la melodía con tenuto cantando dentro de las semicorcheas.

**Paso a paso:**

1. Escucha estos dos compases siguiendo la partitura: hay una línea de 8va sobre la derecha, así que todo suena una octava más alto; las notas con rayita (tenuto) forman una melodía escondida.
2. Análisis: la izquierda tiene un acorde tenido en redonda en cada compás, y cada compás lleva su propio pedal. El compás 28 termina con un regulador creciente hacia la sección D.
3. Antes de tocar, coloca el cuerpo un poco más a la derecha del teclado para llegar cómodo a la octava alta.
4. Mano derecha sola: toca primero solo las notas con tenuto, como si fueran una melodía lenta. Después rellena las semicorcheas intermedias mucho más suaves; elige digitación para que las notas con tenuto caigan en dedos fuertes (3, 4 o 5).
5. Practica la derecha a ♩ = 50 y sube de 5 en 5 hasta ♩ = 80, sin que las semicorcheas se agrupen ni corran.
6. Mano izquierda: los acordes de redonda son sencillos; tócalos suaves y cambia el pedal en el primer tiempo de cada compás, justo después de tocar el acorde.
7. Manos juntas a ♩ = 60 y después a ♩ = 80, con pedal. Escucha que las notas con tenuto se distingan claramente del relleno.
8. Último día: une los compases 25–28 para que el paso del mp de B al p de C se note, y haz sonar el regulador del compás 28 como una preparación del mf del compás 29.

**Pasajes difíciles:**

- Compases 27–28: las semicorcheas continuas en la octava alta tienden a sonar todas iguales. Toca primero solo las notas con tenuto y después añade el relleno en pp, con los dedos muy cerca de las teclas.
- Compás 28: el final cambia de dibujo antes de la sección D. Repite el último tiempo enlazado con el primer acorde del compás 29.

**Pasas a la siguiente sesión cuando:** Puedes tocar los compases 27–28 a ♩ = 80 con pedal, en p, y alguien que te escuche podría cantar la melodía de las notas con tenuto.

**Teoría: Acorde arpegiado.** La línea ondulada delante de un acorde indica que las notas se tocan una tras otra, muy rápido, de abajo arriba. Permite tocar acordes más anchos que la mano. En tu partitura: Mano izquierda en 3, 5 y 15; mano derecha en 19–25, 29 y 45–49.

#### Sesión 5: D – Tema en octavas (c. 29–36)

Ejercicios: Hanon 15 (calentamiento), Hanon 51 (técnica) y Czerny nº 21. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar la sección D (compases 29–36) en mf con la melodía en octavas por encima y la izquierda sólida en el ritmo 3+3+2, al menos a ♩ = 70.

**Paso a paso:**

1. Escucha la sección D siguiendo la partitura: es el tema principal, ahora en octavas en la derecha y con la izquierda tocando bajo grave más acordes con puntillo.
2. Análisis: la izquierda reparte cada compás en 3+3+2 corcheas (bajo en octava con puntillo, acorde con puntillo, acorde). Hay Sol♯ en los acordes de los compases 30 y 34. La melodía está ligada a través de la barra de compás en varios sitios.
3. Mano izquierda sola primero, porque es el motor: practica solo el salto del bajo en octava grave al acorde, mirando el teclado, a ♩ = 50. Cuenta «1-2-3, 1-2-3, 1-2» en voz alta.
4. Digitación izquierda: 5-1 para la octava del bajo y 5-3-1 o 4-2-1 para los acordes; escríbela y mantenla igual en todos los compases.
5. Mano derecha sola: toca solo la nota superior de cada octava para aprender la melodía y las ligaduras; después añade la octava con 5 y 1 (o 4 en las teclas negras si la mano lo pide), dejando la nota de arriba un poco más fuerte.
6. Compás 36: estudia el arpegio ascendente con 8va que lleva a la sección E por separado, a ♩ = 50, con una digitación fija y pase del pulgar preparado.
7. Manos juntas con metrónomo: ♩ = 50, luego 60 y 70. Si el salto del bajo te frena, ensaya solo el primer tiempo de cada compás con ambas manos.
8. Pedal: no está escrito; si lo usas, cambia en cada compás justo después del bajo para no mezclar armonías, y comprueba que las ligaduras de la melodía no se ensucien.
9. Último día: une 27–36 seguido, cuidando el salto de p a mf en el compás 29.

**Pasajes difíciles:**

- Compases 29–35: el salto de la izquierda del bajo grave al acorde. Practica el movimiento solo, primero mirando el teclado y luego sin mirar, cinco veces por compás a ♩ = 50.
- Compases 29–35: las octavas de la derecha con ligaduras a través de la barra. Toca solo la nota superior con su ritmo exacto y después añade la octava sin perder las ligaduras.
- Compás 36: el arpegio con 8va. Estúdialo en bloques de cuatro notas, parándote en la primera de cada bloque, y únelo después.

**Pasas a la siguiente sesión cuando:** Tocas los compases 29–36 con las dos manos a ♩ = 70 o más, la melodía se oye por encima y la izquierda no se para en los saltos.

**Teoría: Dominante secundaria (V de vi).** Es un acorde mayor «prestado» que empuja hacia un acorde distinto de la tónica. El Sol♯ convierte Mi menor en Mi mayor, que tira con fuerza hacia La menor. En tu partitura: Compases 30 y 34 (Sol♯ en ambas manos), que resuelven en La menor en 31 y 35.

#### Sesión 6: E – Interludio libre (c. 37–44)

Ejercicios: Hanon 16 (calentamiento), Hanon 22 (técnica) y Czerny nº 16. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el interludio de los compases 37–44 con calma, mordentes limpios, pedal en su sitio y el crescendo largo hacia la sección F.

**Paso a paso:**

1. Escucha la sección E siguiendo la partitura: el movimiento se para; aparecen notas tenidas, mordentes en el agudo (compases 38 y 40) y después pasajes de semicorcheas (41–44).
2. Análisis: el motivo La–Sol–Fa se repite en ambas manos (37 y 39). El regulador baja hasta mp (37) y luego hasta p (39). En el compás 44 hay Sol♯ de paso en ambas manos y un regulador creciente que lleva al f del compás 45.
3. Marca el pedal escrito con lápiz: uno desde el compás 37, otro desde el 39, y en 41 y 43 cambios rápidos en los primeros tiempos antes de un pedal largo. Cuenta los cambios antes de tocar.
4. Mordentes (38 y 40): tócalos como tres notas rápidas (nota, nota de arriba, nota) muy cerca de la tecla. Practica primero el mordente lento como tresillo y luego acelera.
5. Mano derecha sola en 41–44: trabaja en grupos de cuatro semicorcheas, deteniéndote en la primera de cada grupo; elige digitación y escríbela, sobre todo alrededor del Sol♯ de 44.
6. Mano izquierda sola: en 37 y 39 hay notas ligadas que se mantienen; en 41 y 43 un acorde arpegiado y bajos que se sostienen. Asegúrate de mantener pulsadas las notas ligadas.
7. Manos juntas a ♩ = 50, luego 60 y 70, primero sin pedal y luego con el pedal escrito.
8. Dinámica: haz el diminuendo de 37–39 de verdad y guarda volumen para que el crescendo de 44 llegue natural al f del 45. Aquí puedes respirar un poco al final de cada frase.
9. Último día: une 35–44 para sentir el contraste entre la energía de D y la calma de E.

**Pasajes difíciles:**

- Compases 38 y 40: los mordentes en el agudo. Practícalos lentos como tres notas iguales y acelera solo cuando las tres suenen claras.
- Compases 41–44: las semicorcheas con Sol♯ de paso. Agrúpalas de cuatro en cuatro con parada en la primera nota de cada grupo y después quita las paradas.
- Compases 41 y 43: los cambios rápidos de pedal. Practica solo el pie con la mano izquierda, diciendo en voz alta cuándo levantas y bajas.

**Pasas a la siguiente sesión cuando:** Tocas los compases 37–44 seguidos a ♩ = 70 o más, con mordentes claros, el pedal sin mezclas y un crescendo audible en el compás 44.

**Teoría: Síncopa y ritmo 3+3+2.** La síncopa acentúa donde no se espera. Agrupar las ocho corcheas del compás como 3+3+2 da un impulso hacia adelante sin cambiar el compás. En tu partitura: Mano izquierda de la sección D (compases 29–36).

#### Sesión 7: F y G – Clímax (c. 45–60)

Ejercicios: Hanon 17 (calentamiento), Hanon 23 (técnica) y Czerny nº 2. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar el clímax de los compases 45–60 con sonido amplio pero controlado, la melodía por encima del acompañamiento y las dinámicas f, mf y f bien diferenciadas.

**Paso a paso:**

1. Escucha F y G siguiendo la partitura: F (45–52) trae acordes arpegiados amplios sobre bajos graves en octava; G (53–60) cambia a un acompañamiento de bajo más acorde repetido en negras con una melodía ornamentada en semicorcheas.
2. Análisis: F empieza en f (45); G en mf (53), con reguladores que crecen hasta f en el 56 y de nuevo en el 59. Hay pasajes en 8va en la derecha en 56–57 y 58–60. Señálalos con color.
3. Mano izquierda sola en F: practica los bajos graves en octava y las notas sueltas que siguen tras los silencios de semicorchea. En G, toca el patrón bajo-acorde-acorde-acorde en bloque, mirando el salto.
4. Mano derecha sola en F: estudia los acordes arpegiados primero en bloque (para memorizar posiciones) y luego arpegiados rápido. En el compás 47 hay un tresillo; cuéntalo despacio.
5. Mano derecha sola en G: la melodía de semicorcheas es lo más denso de la pieza. Trabaja medio compás cada vez a ♩ = 50, con digitación escrita, y marca la nota principal de cada grupo.
6. Manos juntas: en G, toca la izquierda en bloque y canta la melodía; después añade la derecha a la mitad del tempo (♩ = 40) y sube de 5 en 5 hasta ♩ = 70–80.
7. Pedal: no está escrito en F y G; si lo usas, cambia con cada bajo nuevo (normalmente cada compás) y escucha que las semicorcheas de G no se emborronen.
8. Equilibrio: el acompañamiento de la izquierda en G debe sonar un nivel más suave que la melodía. Practica la izquierda en p mientras la derecha toca en mf.
9. Último día: une 44–60 seguido, desde el crescendo del 44 hasta el final del 60, y prepara la bajada brusca al pp del compás 61.

**Pasajes difíciles:**

- Compases 45–52: los acordes arpegiados grandes en la derecha. Practícalos en bloque hasta que la mano encuentre la posición sin mirar, y después arpégialos con la nota de arriba en el tiempo.
- Compases 54–60: la melodía en semicorcheas sobre la izquierda repetida. Estudia medio compás de derecha sola a ♩ = 50 y únelo a la izquierda solo cuando salga tres veces seguidas sin error.
- Compases 56–60: los cambios a 8va en la derecha. Mueve el cuerpo hacia la derecha antes de que empiece la línea de 8va y practica el salto de entrada aislado.
- Compases 53–60: la izquierda tapa la melodía. Toca la izquierda sola en pp con el metrónomo y después mantén ese volumen al juntar manos.

**Pasas a la siguiente sesión cuando:** Tocas los compases 45–60 a ♩ = 70 o más sin parar, la melodía de G se oye claramente por encima y se notan el f del 45, el mf del 53 y los crecimientos hasta f.

**Teoría: 8va (octava alta).** La línea punteada con un 8 indica tocar una octava más arriba de lo escrito. Evita llenar el pentagrama de líneas adicionales. En tu partitura: Compases 26–28, 36, 39–40, 56 y 58–60.

#### Sesión 8: H – Coda (c. 61–69)

Ejercicios: Hanon 18 (calentamiento), Hanon 33 (técnica) y Czerny nº 30. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar la coda de los compases 61–69 en pp con el ostinato de nuevo, los Sol♯ de 62 y 66 claros y un final que se apaga en el agudo.

**Paso a paso:**

1. Escucha la sección H siguiendo la partitura: vuelve el ostinato del principio, pero la izquierda ahora toca acordes de redonda o notas largas, y en 62 y 66 aparece un Sol♯ en el dibujo.
2. Análisis: compara con la sección A; el dibujo Do6–Re5–Sol5–Si5 es el mismo, pero en 62 y 66 cambia a Do6–Mi5–Sol♯5–Si5. El compás 66 tiene silencio en la izquierda. Los compases 68–69 terminan con notas en 8va y silencios.
3. Digitación: usa la misma 5-1-2-4 de la sección A; en 62 y 66 prueba 5-1-2-4 también, con el Sol♯ en el 2, y escríbelo.
4. Mano derecha sola a ♩ = 60 y luego a ♩ = 80: escucha que el Sol♯ suene como un color, no como un acento.
5. Mano izquierda sola: los acordes y notas de redonda de 61–67 son sencillos; tócalos pp y mantenlos el compás entero.
6. Pedal: un pedal por compás en 61–65 y uno largo desde el 65, como está escrito. Cambia siempre después de tocar la nota nueva.
7. Compases 68–69: practica despacio la salida, con la 8va y los silencios; deja que la última nota se apague antes de soltar.
8. Último día: une 59–69. El paso del f de 59–60 al pp de 61 debe ser repentino; respira antes del compás 61 sin perder el pulso.

**Pasajes difíciles:**

- Compás 61: bajar de golpe del f al pp. Practica el final del 60 seguido del 61 varias veces, soltando el peso del brazo justo en la barra de compás.
- Compases 62 y 66: el Sol♯ cambia la posición de la mano. Toca solo esos compases cinco veces y luego enlázalos con el compás anterior y el siguiente.
- Compases 68–69: las notas en 8va con silencios. Cuenta los silencios en voz alta para no cortarlos ni alargarlos.

**Pasas a la siguiente sesión cuando:** Tocas los compases 61–69 a ♩ = 80 en pp con pedal, el Sol♯ de 62 y 66 suena limpio y el final se apaga sin cortes bruscos.

**Teoría: Ostinato.** Un ostinato es un dibujo corto que se repite muchas veces mientras otras cosas cambian a su alrededor. Aquí la mano derecha repite las mismas cuatro notas y es la mano izquierda la que cambia el color del acorde. En tu partitura: Compases 3–17 y de nuevo 61–67.

#### Sesión 9: Obra completa (c. todo)

Ejercicios: Hanon 19 (calentamiento), Hanon 38 en Do mayor (con color de Fa lidio) (técnica) y Czerny nº 19. Cómo estudiarlos: sección 5.

**Objetivo:** Tocar Nanami's Theme completo de memoria o casi de memoria, a ♩ = 80, con transiciones limpias entre las secciones A–H y un arco dinámico claro de pp a f y de vuelta a pp.

**Paso a paso:**

1. Escucha la pieza entera con la partitura y marca en ella el plan de volumen: pp (1–18), mp (19), p (27), mf (29), mp y p (37–40), f (45), mf (53), f (56 y 59), pp (61).
2. Une las secciones de dos en dos: Introducción + A, A + B, B + C, C + D, D + E, E + F, F/G + H. Practica sobre todo los cuatro compases alrededor de cada cambio (por ejemplo 17–20, 25–30, 35–38, 43–46, 59–62).
3. Toca la pieza entera a ♩ = 65 con metrónomo, sin parar aunque falles; marca con lápiz dónde dudaste y estudia solo esos compases al día siguiente.
4. Memoria: aprende de memoria primero la sección A y la coda (casi iguales), después D y G. Comprueba la memoria empezando desde cada letra de ensayo (A, B, C...) sin mirar.
5. Sube el tempo poco a poco: ♩ = 70, después 75 y por último el ♩ = 80 impreso. No pases al siguiente escalón hasta que la pieza salga entera sin parar.
6. Pedal y sonido: repasa todos los pedales escritos de A, C, E y H y comprueba que en B, D y G el pedal no ensucia el ritmo.
7. Grábate tocando la pieza entera y escúchala con la partitura: revisa si la melodía se oye en D y G, si el ostinato es parejo y si el contraste del compás 61 se nota.
8. Haz al menos dos interpretaciones completas al día como si fuera el recital: siéntate, respira, cuenta un compás en silencio y toca sin parar de principio a fin.
9. Último día: toca la pieza para alguien (o grabándote) a ♩ = 80, y anota una sola cosa a mejorar para la siguiente vez.

**Pasajes difíciles:**

- Compases 18–19 y 28–29: los cambios de textura (del ostinato a B, del puente a D). Practica los dos compases de enlace por separado hasta que el cambio salga sin pausa.
- Compases 44–46 y 60–61: llegar al clímax con volumen guardado y salir de golpe al pp. Ensaya estos enlaces cinco veces al día.
- Toda la pieza: mantener ♩ = 80 sin acelerar en las secciones fuertes. Toca una vez al día con metrónomo de principio a fin.

**Pasas a la siguiente sesión cuando:** Puedes tocar Nanami's Theme de principio a fin a ♩ = 80 sin pararte, en tu grabación se oyen claras la melodía y las dinámicas, y te sientes listo para tocarlo delante de alguien.

**Teoría: Acordes con notas añadidas (maj7, 9, ♯11).** Son acordes mayores a los que se suman notas extra que les dan un sonido abierto y flotante. Sobre el bajo Fa, las notas Mi, Sol y Si funcionan como 7.ª mayor, 9.ª y 11.ª aumentada. En tu partitura: Compás 3 en adelante (la anotación manuscrita de la partitura indica Fmaj9(♯11) y Cmaj7/6).
<!-- /generated:sessions -->

## 5. Cómo practicar los ejercicios y a qué tempo

### El método del metrónomo (vale para todos)

1. **Empieza lento**: al tempo inicial que indica cada ejercicio, o más lento si hace falta. La velocidad correcta es la que te permite tocar sin errores y sin tensión.
2. **Sube de a poco**: cuando lo toques **tres veces seguidas limpio y relajado**, sube el metrónomo 4 bpm.
3. **Si fallas dos veces seguidas**, baja 8 bpm y vuelve a subir.
4. **Empieza cada día un poco por debajo** del máximo del día anterior (unos 8 bpm menos). Lo que ganaste ayer se consolida durmiendo, no hace falta repetir el récord apenas te sientas.
5. **El tempo objetivo es una meta de meses**, no de una sesión. Para el concierto basta con tocar los ejercicios limpios y relajados. Si notas tensión en el antebrazo o dolor, para y baja la velocidad: nunca toques con dolor.

Las indicaciones «♩ = 60» se refieren a negras por minuto. En el Hanon se tocan semicorcheas, así que con ♩ = 60 tocas 4 notas por pulso. Si al principio es demasiado, pon el metrónomo a ♩ = 60 y toca en corcheas (2 notas por pulso), es decir, a la mitad.

Cada ejercicio que usan las sesiones, con lo mismo que muestra el desplegable «Cómo estudiarlo» del sitio. Los tempos de Hanon siguen su indicación impresa (♩ = 60 a 108 en las Partes I y II), con un objetivo más bajo suficiente para el concierto. La edición Peters de Czerny no imprime tempo en los n.º 1 a 35, así que esos tempos son recomendaciones.

<!-- generated:exercises -->
### Hanon

#### Hanon 1 — Extensión entre los dedos 4 y 5

En 2/4 y en semicorcheas continuas, cada compás es una figura de ocho notas que sube un grado por compás desde Do durante dos octavas y luego baja por el mismo camino; las dos manos tocan lo mismo a una octava de distancia. Digitación impresa del primer compás: derecha 1-2-3-4-5-4-3-2, izquierda 5-4-3-2-1-2-3-4. Hanon pide abrir entre el 5 y el 4 de la izquierda al subir y de la derecha al bajar, empezar con el metrónomo a 60 e ir subiendo hasta 108, y levantar los dedos alto y con precisión.

**Para qué sirve:** Iguala los cinco dedos y suelta la apertura entre 4 y 5, la zona más débil de la mano; esa igualdad es la base de cualquier pasaje de semicorcheas en tus obras.

**Antes de empezar:**

- Siéntate con los antebrazos a la altura del teclado, los codos un poco separados del cuerpo y los hombros sueltos; colócate frente al Do central, donde empiezan las dos manos.
- Dedos curvos, como si sostuvieras una pelota pequeña: el pulgar toca con su borde y la punta del 5 no se aplasta.
- Al subir, la izquierda empieza con 5-4: deja que el 5 se abra hacia fuera soltando la mano, sin estirarla de golpe. En la bajada, lo mismo con la derecha.
- Hanon pide levantar los dedos alto y con precisión: el movimiento sale del nudillo, mientras la muñeca y el antebrazo se quedan quietos y blandos.

**Paso a paso:**

1. Lee el primer compás y tócalo solo con la mano derecha (1-2-3-4-5-4-3-2), muy lento y sin metrónomo, hasta que la digitación salga sin dudar; repite con la izquierda (5-4-3-2-1-2-3-4).
2. Pon el metrónomo a ♩ = 60 y toca el ejercicio completo, subida y bajada, con cada mano por separado en semicorcheas. Si no sale limpio, tócalo en corcheas (la mitad de velocidad) con el mismo pulso.
3. Aísla la apertura 5-4: toca solo las dos primeras notas del compás (izquierda al subir, derecha al bajar) diez veces, lento y con sonido lleno, antes de volver al compás completo.
4. Junta las manos a ♩ = 60. Escucha que las dos manos caigan exactamente juntas y que las ocho notas de cada compás suenen igual de fuertes; vigila sobre todo las notas del 4 y del 5.
5. Variantes: una pasada con ritmo con puntillo (larga-corta), otra al revés (corta-larga) y otra en staccato ligero desde el dedo. Al volver al ritmo parejo notarás más igualdad.
6. Toca una vez con crescendo al subir y diminuendo al bajar, y otra todo piano, sin que la igualdad se pierda.
7. Sube el metrónomo de 4 en 4 solo cuando dos pasadas seguidas salgan limpias y relajadas; si aparece tensión, vuelve al tempo anterior. Para el concierto basta ♩ = 88–92: el 108 que imprime Hanon no hace falta.

**Errores comunes:**

- Muñeca que sube y baja en cada nota: obsérvala de reojo o imagina una moneda sobre el dorso de la mano; si se mueve, baja el tempo y deja que trabajen solo los dedos.
- El 4 y el 5 suenan más flojos que el resto: escucha solo esas notas; si se pierden, haz un par de pasadas acentuándolas a propósito y luego vuelve a igualar.
- Acelerar sin darte cuenta, sobre todo en la bajada: graba un minuto con metrónomo; si las semicorcheas se adelantan o se agrupan de dos en dos, baja 8 puntos.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 88–92.

**Está listo cuando:** Tocas el ejercicio completo con manos juntas a ♩ = 88–92 dos veces seguidas, con el 4 y el 5 tan claros como los demás y sin tensión en muñeca ni antebrazo.

#### Hanon 2 — Dedos 3 y 4

En 2/4 y en semicorcheas continuas, cada compás es una figura de ocho notas que sube un grado por compás desde Do durante dos octavas y luego baja por el mismo camino; las dos manos tocan lo mismo a una octava de distancia. Digitación impresa del primer compás: derecha 1-2-5-4-3-4-3-2, izquierda 5-3-1-2-3-2-3-4. Los dedos que se trabajan son el 3 y el 4. Hanon pide que, al dominarlo, vuelvas al n.º 1 y toques los dos seguidos cuatro veces sin interrupción.

**Para qué sirve:** Fortalece el 3 y el 4, que comparten tendones y tienden a moverse juntos; ganas control para adornos, trinos cortos y voces interiores parejas.

**Antes de empezar:**

- Siéntate con los antebrazos a la altura del teclado, los codos un poco separados del cuerpo y los hombros sueltos; colócate frente al Do central, donde empiezan las dos manos.
- Dedos curvos, como si sostuvieras una pelota pequeña: el pulgar toca con su borde y la punta del 5 no se aplasta.
- Después del salto del 2 al 5 la mano queda abierta: ciérrala con suavidad para la parte central sin girar la muñeca.
- Hanon pide levantar los dedos alto y con precisión: el movimiento sale del nudillo, mientras la muñeca y el antebrazo se quedan quietos y blandos.

**Paso a paso:**

1. Lee el primer compás y tócalo solo con la mano derecha (1-2-5-4-3-4-3-2), muy lento y sin metrónomo, hasta que la digitación salga sin dudar; repite con la izquierda (5-3-1-2-3-2-3-4).
2. Pon el metrónomo a ♩ = 60 y toca el ejercicio completo, subida y bajada, con cada mano por separado en semicorcheas. Si no sale limpio, tócalo en corcheas (la mitad de velocidad) con el mismo pulso.
3. Aísla la parte central del compás, donde se alternan el 3 y el 4: tócala como un mini-trino lento, levantando cada dedo desde el nudillo, hasta que los dos suenen iguales.
4. Junta las manos a ♩ = 60. Escucha que las dos manos caigan exactamente juntas y que las ocho notas de cada compás suenen igual de fuertes; vigila sobre todo el 3 y el 4.
5. Variantes: una pasada con ritmo con puntillo (larga-corta), otra al revés (corta-larga) y otra en staccato ligero desde el dedo. Al volver al ritmo parejo notarás más igualdad.
6. Toca una vez con crescendo al subir y diminuendo al bajar, y otra todo piano, sin que la igualdad se pierda.
7. Sube el metrónomo de 4 en 4 solo cuando dos pasadas seguidas salgan limpias y relajadas; si aparece tensión, vuelve al tempo anterior. Para el concierto basta ♩ = 88–92: el 108 que imprime Hanon no hace falta.

**Errores comunes:**

- Muñeca que sube y baja en cada nota: obsérvala de reojo o imagina una moneda sobre el dorso de la mano; si se mueve, baja el tempo y deja que trabajen solo los dedos.
- El 4 se hunde o se mueve pegado al 3: si notas que no puedes levantarlo solo, baja a ♩ = 50 y piensa en levantar el 4 un poco más que los demás.
- Acelerar sin darte cuenta, sobre todo en la bajada: graba un minuto con metrónomo; si las semicorcheas se adelantan o se agrupan de dos en dos, baja 8 puntos.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 88–92.

**Está listo cuando:** Tocas el ejercicio completo con manos juntas a ♩ = 88–92 dos veces seguidas, con el 3 y el 4 tan claros como los demás y sin tensión en muñeca ni antebrazo.

#### Hanon 3 — Dedos 2, 3 y 4

En 2/4 y en semicorcheas continuas, cada compás es una figura de ocho notas que sube un grado por compás desde Do durante dos octavas y luego baja por el mismo camino; las dos manos tocan lo mismo a una octava de distancia. Digitación impresa del primer compás: derecha 1-2-5-4-3-2-3-4, izquierda 5-3-1-2-3-4-3-2. Trabaja los dedos 2, 3 y 4. Hanon pide tocar antes el 1 y el 2 seguidos sin parar y, desde aquí, aprender cada ejercicio y encadenarlo con los siguientes (el 3, el 4 y el 5 al menos cuatro veces sin interrupción), parando solo en la última nota de las páginas 3, 6, 9, 12, 15, 18 y 21.

**Para qué sirve:** Da agilidad e igualdad a los dedos centrales, los que más tocan en melodías y escalas; prepara pasajes donde el 2-3-4 corren sin que ninguno sobresalga.

**Antes de empezar:**

- Siéntate con los antebrazos a la altura del teclado, los codos un poco separados del cuerpo y los hombros sueltos; colócate frente al Do central, donde empiezan las dos manos.
- Dedos curvos, como si sostuvieras una pelota pequeña: el pulgar toca con su borde y la punta del 5 no se aplasta.
- La figura cambia de dirección dentro del compás: baja 4-3-2 y vuelve a subir 3-4. El codo se queda quieto y solo giran los dedos.
- Hanon pide levantar los dedos alto y con precisión: el movimiento sale del nudillo, mientras la muñeca y el antebrazo se quedan quietos y blandos.

**Paso a paso:**

1. Lee el primer compás y tócalo solo con la mano derecha (1-2-5-4-3-2-3-4), muy lento y sin metrónomo, hasta que la digitación salga sin dudar; repite con la izquierda (5-3-1-2-3-4-3-2).
2. Pon el metrónomo a ♩ = 60 y toca el ejercicio completo, subida y bajada, con cada mano por separado en semicorcheas. Si no sale limpio, tócalo en corcheas (la mitad de velocidad) con el mismo pulso.
3. Toca la segunda mitad del compás en bucle (4-3-2-3-4 en la derecha) escuchando que el cambio de dirección no produzca un acento.
4. Junta las manos a ♩ = 60. Escucha que las dos manos caigan exactamente juntas y que las ocho notas de cada compás suenen igual de fuertes; vigila sobre todo el 2, el 3 y el 4.
5. Variantes: una pasada con ritmo con puntillo (larga-corta), otra al revés (corta-larga) y otra en staccato ligero desde el dedo. Al volver al ritmo parejo notarás más igualdad.
6. Toca una vez con crescendo al subir y diminuendo al bajar, y otra todo piano, sin que la igualdad se pierda.
7. Sube el metrónomo de 4 en 4 solo cuando dos pasadas seguidas salgan limpias y relajadas; si aparece tensión, vuelve al tempo anterior. Para el concierto basta ♩ = 88–92: el 108 que imprime Hanon no hace falta.

**Errores comunes:**

- Muñeca que sube y baja en cada nota: obsérvala de reojo o imagina una moneda sobre el dorso de la mano; si se mueve, baja el tempo y deja que trabajen solo los dedos.
- Acento involuntario donde la figura gira: si oyes un golpe en esa nota, tócala más piano a propósito hasta que la línea suene redonda.
- Acelerar sin darte cuenta, sobre todo en la bajada: graba un minuto con metrónomo; si las semicorcheas se adelantan o se agrupan de dos en dos, baja 8 puntos.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 88–92.

**Está listo cuando:** Tocas el ejercicio completo con manos juntas a ♩ = 88–92 dos veces seguidas, con el 2, el 3 y el 4 tan claros como los demás y sin tensión en muñeca ni antebrazo.

#### Hanon 4 — Dedos 3, 4 y 5

En 2/4 y en semicorcheas continuas, cada compás es una figura de ocho notas que sube un grado por compás desde Do durante dos octavas y luego baja por el mismo camino; las dos manos tocan lo mismo a una octava de distancia. Digitación impresa del primer compás: derecha 1-2-1-2-5-…, izquierda 5-4-5-3-1-…. Hanon lo presenta como ejercicio especial para los dedos 3, 4 y 5: tras alternar dedos vecinos, la mano salta al 5 y baja.

**Para qué sirve:** Refuerza la parte externa de la mano, la que lleva la melodía aguda en la derecha y los bajos en la izquierda.

**Antes de empezar:**

- Siéntate con los antebrazos a la altura del teclado, los codos un poco separados del cuerpo y los hombros sueltos; colócate frente al Do central, donde empiezan las dos manos.
- Dedos curvos, como si sostuvieras una pelota pequeña: el pulgar toca con su borde y la punta del 5 no se aplasta.
- El salto hacia el 5 abre la mano: prepara el 5 sobre su tecla mientras tocas las primeras notas, sin torcer la muñeca hacia fuera.
- Hanon pide levantar los dedos alto y con precisión: el movimiento sale del nudillo, mientras la muñeca y el antebrazo se quedan quietos y blandos.

**Paso a paso:**

1. Lee el primer compás y tócalo solo con la mano derecha (1-2-1-2-5-…), muy lento y sin metrónomo, hasta que la digitación salga sin dudar; repite con la izquierda (5-4-5-3-1-…).
2. Pon el metrónomo a ♩ = 60 y toca el ejercicio completo, subida y bajada, con cada mano por separado en semicorcheas. Si no sale limpio, tócalo en corcheas (la mitad de velocidad) con el mismo pulso.
3. Practica aislado el gesto del salto y la bajada desde el 5: abre, toca el 5 con la punta firme y deja que el 4 y el 3 caigan en fila.
4. Junta las manos a ♩ = 60. Escucha que las dos manos caigan exactamente juntas y que las ocho notas de cada compás suenen igual de fuertes; vigila sobre todo el 3, el 4 y el 5.
5. Variantes: una pasada con ritmo con puntillo (larga-corta), otra al revés (corta-larga) y otra en staccato ligero desde el dedo. Al volver al ritmo parejo notarás más igualdad.
6. Toca una vez con crescendo al subir y diminuendo al bajar, y otra todo piano, sin que la igualdad se pierda.
7. Sube el metrónomo de 4 en 4 solo cuando dos pasadas seguidas salgan limpias y relajadas; si aparece tensión, vuelve al tempo anterior. Para el concierto basta ♩ = 88–92: el 108 que imprime Hanon no hace falta.

**Errores comunes:**

- Muñeca que sube y baja en cada nota: obsérvala de reojo o imagina una moneda sobre el dorso de la mano; si se mueve, baja el tempo y deja que trabajen solo los dedos.
- El 5 se dobla hacia dentro (la última falange se hunde): míralo; si colapsa, toca más lento y más piano hasta que aguante curvado.
- Acelerar sin darte cuenta, sobre todo en la bajada: graba un minuto con metrónomo; si las semicorcheas se adelantan o se agrupan de dos en dos, baja 8 puntos.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 88–92.

**Está listo cuando:** Tocas el ejercicio completo con manos juntas a ♩ = 88–92 dos veces seguidas, con el 3, el 4 y el 5 tan claros como los demás y sin tensión en muñeca ni antebrazo.

#### Hanon 5 — Los cinco dedos, articulación alta

En 2/4 y en semicorcheas continuas, cada compás es una figura de ocho notas que sube un grado por compás desde Do durante dos octavas y luego baja por el mismo camino; las dos manos tocan lo mismo a una octava de distancia. Digitación impresa del primer compás: derecha 1-5-4-5-3-4-2-3, izquierda 5-1-2-1-3-2-4-3. Hanon insiste aquí en que los dedos se levanten alto y con precisión hasta dominar todo el volumen.

**Para qué sirve:** Trabaja los cinco dedos con un zigzag que exige ataque preciso; da articulación clara para pasajes de estilo clásico y barroco.

**Antes de empezar:**

- Siéntate con los antebrazos a la altura del teclado, los codos un poco separados del cuerpo y los hombros sueltos; colócate frente al Do central, donde empiezan las dos manos.
- Dedos curvos, como si sostuvieras una pelota pequeña: el pulgar toca con su borde y la punta del 5 no se aplasta.
- La figura salta del pulgar al 5 y baja en zigzag (4-5-3-4-2-3): deja la mano abierta sobre las cinco teclas y mueve solo los dedos.
- Hanon pide levantar los dedos alto y con precisión: el movimiento sale del nudillo, mientras la muñeca y el antebrazo se quedan quietos y blandos.

**Paso a paso:**

1. Lee el primer compás y tócalo solo con la mano derecha (1-5-4-5-3-4-2-3), muy lento y sin metrónomo, hasta que la digitación salga sin dudar; repite con la izquierda (5-1-2-1-3-2-4-3).
2. Pon el metrónomo a ♩ = 60 y toca el ejercicio completo, subida y bajada, con cada mano por separado en semicorcheas. Si no sale limpio, tócalo en corcheas (la mitad de velocidad) con el mismo pulso.
3. Toca el zigzag en staccato de dedo muy lento: cada dedo sube alto, cae y sale. Después vuelve al legato manteniendo esa precisión.
4. Junta las manos a ♩ = 60. Escucha que las dos manos caigan exactamente juntas y que las ocho notas de cada compás suenen igual de fuertes; vigila sobre todo el 4 y el 5.
5. Variantes: una pasada con ritmo con puntillo (larga-corta), otra al revés (corta-larga) y otra en staccato ligero desde el dedo. Al volver al ritmo parejo notarás más igualdad.
6. Toca una vez con crescendo al subir y diminuendo al bajar, y otra todo piano, sin que la igualdad se pierda.
7. Sube el metrónomo de 4 en 4 solo cuando dos pasadas seguidas salgan limpias y relajadas; si aparece tensión, vuelve al tempo anterior. Para el concierto basta ♩ = 88–92: el 108 que imprime Hanon no hace falta.

**Errores comunes:**

- Muñeca que sube y baja en cada nota: obsérvala de reojo o imagina una moneda sobre el dorso de la mano; si se mueve, baja el tempo y deja que trabajen solo los dedos.
- Notas que se solapan o se cortan en el zigzag: si el legato se vuelve borroso, levanta el dedo anterior justo cuando cae el siguiente, ni antes ni después.
- Acelerar sin darte cuenta, sobre todo en la bajada: graba un minuto con metrónomo; si las semicorcheas se adelantan o se agrupan de dos en dos, baja 8 puntos.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 88–92.

**Está listo cuando:** Tocas el ejercicio completo con manos juntas a ♩ = 88–92 dos veces seguidas, con los cinco dedos tan claros como los demás y sin tensión en muñeca ni antebrazo.

#### Hanon 6 — Dedo 5

En 2/4 y en semicorcheas continuas, cada compás es una figura de ocho notas que sube un grado por compás desde Do durante dos octavas y luego baja por el mismo camino; las dos manos tocan lo mismo a una octava de distancia. Digitación impresa del primer compás: derecha 1-5-4-5-3-5-2-5, izquierda 5-1-2-1-3-1-4-1. El 5 de la derecha (y el pulgar de la izquierda) se repite como nota pivote mientras los demás dedos tocan en medio. Hanon recuerda que hay que tocar cada día, al menos una vez, los ejercicios ya aprendidos.

**Para qué sirve:** Fortalece el 5, que debe sonar firme cuando lleva la melodía aguda; te sirve para cantar la voz superior sobre un acompañamiento en la misma mano.

**Antes de empezar:**

- Siéntate con los antebrazos a la altura del teclado, los codos un poco separados del cuerpo y los hombros sueltos; colócate frente al Do central, donde empiezan las dos manos.
- Dedos curvos, como si sostuvieras una pelota pequeña: el pulgar toca con su borde y la punta del 5 no se aplasta.
- El 5 cae varias veces en la misma tecla: piensa en una punta firme y un nudillo sostenido, sin empujar con el brazo.
- Hanon pide levantar los dedos alto y con precisión: el movimiento sale del nudillo, mientras la muñeca y el antebrazo se quedan quietos y blandos.

**Paso a paso:**

1. Lee el primer compás y tócalo solo con la mano derecha (1-5-4-5-3-5-2-5), muy lento y sin metrónomo, hasta que la digitación salga sin dudar; repite con la izquierda (5-1-2-1-3-1-4-1).
2. Pon el metrónomo a ♩ = 60 y toca el ejercicio completo, subida y bajada, con cada mano por separado en semicorcheas. Si no sale limpio, tócalo en corcheas (la mitad de velocidad) con el mismo pulso.
3. Toca solo las notas del 5 repetido, con los dedos de en medio rozando sus teclas sin sonar, para sentir el pivote; luego añade las notas interiores.
4. Junta las manos a ♩ = 60. Escucha que las dos manos caigan exactamente juntas y que las ocho notas de cada compás suenen igual de fuertes; vigila sobre todo el 5 repetido.
5. Variantes: una pasada con ritmo con puntillo (larga-corta), otra al revés (corta-larga) y otra en staccato ligero desde el dedo. Al volver al ritmo parejo notarás más igualdad.
6. Toca una vez con crescendo al subir y diminuendo al bajar, y otra todo piano, sin que la igualdad se pierda.
7. Sube el metrónomo de 4 en 4 solo cuando dos pasadas seguidas salgan limpias y relajadas; si aparece tensión, vuelve al tempo anterior. Para el concierto basta ♩ = 88–92: el 108 que imprime Hanon no hace falta.

**Errores comunes:**

- Muñeca que sube y baja en cada nota: obsérvala de reojo o imagina una moneda sobre el dorso de la mano; si se mueve, baja el tempo y deja que trabajen solo los dedos.
- El 5 suena más fuerte que el resto porque le metes brazo: grábate y escucha; la nota repetida debe quedar al mismo volumen que las otras.
- Acelerar sin darte cuenta, sobre todo en la bajada: graba un minuto con metrónomo; si las semicorcheas se adelantan o se agrupan de dos en dos, baja 8 puntos.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 88–92.

**Está listo cuando:** Tocas el ejercicio completo con manos juntas a ♩ = 88–92 dos veces seguidas, con el 5 tan claros como los demás y sin tensión en muñeca ni antebrazo.

#### Hanon 7 — Dedos 3, 4 y 5 (muy importante)

En 2/4 y en semicorcheas continuas, cada compás es una figura de ocho notas que sube un grado por compás desde Do durante dos octavas y luego baja por el mismo camino; las dos manos tocan lo mismo a una octava de distancia. Digitación impresa del primer compás: derecha 1-3-2-4-3-5-4-3, izquierda 5-3-4-2-3-1-3-4. Hanon lo marca como ejercicio de la mayor importancia para los dedos 3, 4 y 5; la figura es una cadena de terceras quebradas.

**Para qué sirve:** Independiza el 3, el 4 y el 5 con terceras quebradas, una figura que aparece en acompañamientos y arpegios cortos dentro de la mano.

**Antes de empezar:**

- Siéntate con los antebrazos a la altura del teclado, los codos un poco separados del cuerpo y los hombros sueltos; colócate frente al Do central, donde empiezan las dos manos.
- Dedos curvos, como si sostuvieras una pelota pequeña: el pulgar toca con su borde y la punta del 5 no se aplasta.
- Las parejas 1-3, 2-4 y 3-5 caben en la posición de cinco dedos: mantén la mano abierta y quieta, sin cerrarla en cada intervalo.
- Hanon pide levantar los dedos alto y con precisión: el movimiento sale del nudillo, mientras la muñeca y el antebrazo se quedan quietos y blandos.

**Paso a paso:**

1. Lee el primer compás y tócalo solo con la mano derecha (1-3-2-4-3-5-4-3), muy lento y sin metrónomo, hasta que la digitación salga sin dudar; repite con la izquierda (5-3-4-2-3-1-3-4).
2. Pon el metrónomo a ♩ = 60 y toca el ejercicio completo, subida y bajada, con cada mano por separado en semicorcheas. Si no sale limpio, tócalo en corcheas (la mitad de velocidad) con el mismo pulso.
3. Toca las terceras como bloques (1+3, 2+4, 3+5) para fijar la posición y después vuelve a quebrarlas, igualando las dos notas de cada pareja.
4. Junta las manos a ♩ = 60. Escucha que las dos manos caigan exactamente juntas y que las ocho notas de cada compás suenen igual de fuertes; vigila sobre todo el 4 y el 5.
5. Variantes: una pasada con ritmo con puntillo (larga-corta), otra al revés (corta-larga) y otra en staccato ligero desde el dedo. Al volver al ritmo parejo notarás más igualdad.
6. Toca una vez con crescendo al subir y diminuendo al bajar, y otra todo piano, sin que la igualdad se pierda.
7. Sube el metrónomo de 4 en 4 solo cuando dos pasadas seguidas salgan limpias y relajadas; si aparece tensión, vuelve al tempo anterior. Para el concierto basta ♩ = 88–92: el 108 que imprime Hanon no hace falta.

**Errores comunes:**

- Muñeca que sube y baja en cada nota: obsérvala de reojo o imagina una moneda sobre el dorso de la mano; si se mueve, baja el tempo y deja que trabajen solo los dedos.
- El 4 o el 5 llegan tarde en su tercera y la figura cojea: practica con ritmo con puntillo en los dos sentidos y vuelve al ritmo parejo.
- Acelerar sin darte cuenta, sobre todo en la bajada: graba un minuto con metrónomo; si las semicorcheas se adelantan o se agrupan de dos en dos, baja 8 puntos.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 88–92.

**Está listo cuando:** Tocas el ejercicio completo con manos juntas a ♩ = 88–92 dos veces seguidas, con el 3, el 4 y el 5 tan claros como los demás y sin tensión en muñeca ni antebrazo.

#### Hanon 8 — Los cinco dedos

En 2/4 y en semicorcheas continuas, cada compás es una figura de ocho notas que sube un grado por compás desde Do durante dos octavas y luego baja por el mismo camino; las dos manos tocan lo mismo a una octava de distancia. Digitación impresa del primer compás: derecha 1-2-4-5-3-4-2-3, izquierda 5-4-2-1-3-2-4-3. Hanon lo llama ejercicio muy importante para los cinco dedos.

**Para qué sirve:** Iguala los cinco dedos con un cambio de dirección a mitad del compás; prepara pasajes rápidos en los que la mano no puede moverse.

**Antes de empezar:**

- Siéntate con los antebrazos a la altura del teclado, los codos un poco separados del cuerpo y los hombros sueltos; colócate frente al Do central, donde empiezan las dos manos.
- Dedos curvos, como si sostuvieras una pelota pequeña: el pulgar toca con su borde y la punta del 5 no se aplasta.
- Sube 1-2-4-5 y vuelve en zigzag 3-4-2-3: la mano se queda en su sitio, sin girar la muñeca.
- Hanon pide levantar los dedos alto y con precisión: el movimiento sale del nudillo, mientras la muñeca y el antebrazo se quedan quietos y blandos.

**Paso a paso:**

1. Lee el primer compás y tócalo solo con la mano derecha (1-2-4-5-3-4-2-3), muy lento y sin metrónomo, hasta que la digitación salga sin dudar; repite con la izquierda (5-4-2-1-3-2-4-3).
2. Pon el metrónomo a ♩ = 60 y toca el ejercicio completo, subida y bajada, con cada mano por separado en semicorcheas. Si no sale limpio, tócalo en corcheas (la mitad de velocidad) con el mismo pulso.
3. Toca cada mitad del compás por separado en bucle (1-2-4-5 y 3-4-2-3) y después únelas sin pausa, cuidando la nota donde la figura cambia de dirección.
4. Junta las manos a ♩ = 60. Escucha que las dos manos caigan exactamente juntas y que las ocho notas de cada compás suenen igual de fuertes; vigila sobre todo el 4 y el 5.
5. Variantes: una pasada con ritmo con puntillo (larga-corta), otra al revés (corta-larga) y otra en staccato ligero desde el dedo. Al volver al ritmo parejo notarás más igualdad.
6. Toca una vez con crescendo al subir y diminuendo al bajar, y otra todo piano, sin que la igualdad se pierda.
7. Sube el metrónomo de 4 en 4 solo cuando dos pasadas seguidas salgan limpias y relajadas; si aparece tensión, vuelve al tempo anterior. Para el concierto basta ♩ = 88–92: el 108 que imprime Hanon no hace falta.

**Errores comunes:**

- Muñeca que sube y baja en cada nota: obsérvala de reojo o imagina una moneda sobre el dorso de la mano; si se mueve, baja el tempo y deja que trabajen solo los dedos.
- Pequeña pausa entre las dos mitades del compás o entre compases: si oyes un hueco con el metrónomo, practica en bucle la última nota de un compás con la primera del siguiente.
- Acelerar sin darte cuenta, sobre todo en la bajada: graba un minuto con metrónomo; si las semicorcheas se adelantan o se agrupan de dos en dos, baja 8 puntos.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 88–92.

**Está listo cuando:** Tocas el ejercicio completo con manos juntas a ♩ = 88–92 dos veces seguidas, con los cinco dedos tan claros como los demás y sin tensión en muñeca ni antebrazo.

#### Hanon 9 — Extensión de los dedos 4 y 5

En 2/4 y en semicorcheas continuas, cada compás es una figura de ocho notas que sube un grado por compás desde Do durante dos octavas y luego baja por el mismo camino; las dos manos tocan lo mismo a una octava de distancia. Digitación impresa del primer compás: derecha 1-2-3-2-4-3-5-4, izquierda 5-4-3-4-2-3-1-2. Hanon lo describe como extensión del 4 y el 5 y ejercicio general de dedos: la figura avanza dos pasos y retrocede uno.

**Para qué sirve:** Da agilidad general y suelta la apertura 4-5; te sirve en escalas y líneas que suben por grados con pequeños retrocesos.

**Antes de empezar:**

- Siéntate con los antebrazos a la altura del teclado, los codos un poco separados del cuerpo y los hombros sueltos; colócate frente al Do central, donde empiezan las dos manos.
- Dedos curvos, como si sostuvieras una pelota pequeña: el pulgar toca con su borde y la punta del 5 no se aplasta.
- Siente la mano quieta y los dedos caminando: dos pasos adelante, uno atrás.
- Hanon pide levantar los dedos alto y con precisión: el movimiento sale del nudillo, mientras la muñeca y el antebrazo se quedan quietos y blandos.

**Paso a paso:**

1. Lee el primer compás y tócalo solo con la mano derecha (1-2-3-2-4-3-5-4), muy lento y sin metrónomo, hasta que la digitación salga sin dudar; repite con la izquierda (5-4-3-4-2-3-1-2).
2. Pon el metrónomo a ♩ = 60 y toca el ejercicio completo, subida y bajada, con cada mano por separado en semicorcheas. Si no sale limpio, tócalo en corcheas (la mitad de velocidad) con el mismo pulso.
3. Aísla el final del compás (3-5-4 en la derecha, 3-1-2 en la izquierda) y repítelo diez veces para soltar la extensión entre 4 y 5.
4. Junta las manos a ♩ = 60. Escucha que las dos manos caigan exactamente juntas y que las ocho notas de cada compás suenen igual de fuertes; vigila sobre todo el 4 y el 5.
5. Variantes: una pasada con ritmo con puntillo (larga-corta), otra al revés (corta-larga) y otra en staccato ligero desde el dedo. Al volver al ritmo parejo notarás más igualdad.
6. Toca una vez con crescendo al subir y diminuendo al bajar, y otra todo piano, sin que la igualdad se pierda.
7. Sube el metrónomo de 4 en 4 solo cuando dos pasadas seguidas salgan limpias y relajadas; si aparece tensión, vuelve al tempo anterior. Para el concierto basta ♩ = 88–92: el 108 que imprime Hanon no hace falta.

**Errores comunes:**

- Muñeca que sube y baja en cada nota: obsérvala de reojo o imagina una moneda sobre el dorso de la mano; si se mueve, baja el tempo y deja que trabajen solo los dedos.
- La última nota del compás suena débil: acentúala en algunas pasadas para despertarla y luego vuelve a igualar.
- Acelerar sin darte cuenta, sobre todo en la bajada: graba un minuto con metrónomo; si las semicorcheas se adelantan o se agrupan de dos en dos, baja 8 puntos.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 88–92.

**Está listo cuando:** Tocas el ejercicio completo con manos juntas a ♩ = 88–92 dos veces seguidas, con el 4 y el 5 tan claros como los demás y sin tensión en muñeca ni antebrazo.

#### Hanon 10 — Preparación del trino con 3 y 4

En 2/4 y en semicorcheas continuas, cada compás es una figura de ocho notas que sube un grado por compás desde Do durante dos octavas y luego baja por el mismo camino; las dos manos tocan lo mismo a una octava de distancia. Digitación impresa del primer compás: derecha 1-5-4-3-2-3-2-3, izquierda 5-1-2-3-4-3-4-3. Hanon lo plantea como preparación del trino con los dedos 3 y 4 de la mano izquierda al subir y de la derecha al bajar.

**Para qué sirve:** Prepara trinos y mordentes con 3-4, frecuentes en música barroca y clásica, y da independencia a esa pareja de dedos.

**Antes de empezar:**

- Siéntate con los antebrazos a la altura del teclado, los codos un poco separados del cuerpo y los hombros sueltos; colócate frente al Do central, donde empiezan las dos manos.
- Dedos curvos, como si sostuvieras una pelota pequeña: el pulgar toca con su borde y la punta del 5 no se aplasta.
- Tras el salto 1-5 la mano baja hasta los dedos que se alternan: deja el peso sobre ellos y la muñeca suelta.
- Hanon pide levantar los dedos alto y con precisión: el movimiento sale del nudillo, mientras la muñeca y el antebrazo se quedan quietos y blandos.

**Paso a paso:**

1. Lee el primer compás y tócalo solo con la mano derecha (1-5-4-3-2-3-2-3), muy lento y sin metrónomo, hasta que la digitación salga sin dudar; repite con la izquierda (5-1-2-3-4-3-4-3).
2. Pon el metrónomo a ♩ = 60 y toca el ejercicio completo, subida y bajada, con cada mano por separado en semicorcheas. Si no sale limpio, tócalo en corcheas (la mitad de velocidad) con el mismo pulso.
3. Aísla la alternancia final del compás (3-4-3-4 en la izquierda al subir, y la de la derecha en la bajada) despacio, con dedos que suben y bajan desde el nudillo; acelera solo si sigue sin tensión.
4. Junta las manos a ♩ = 60. Escucha que las dos manos caigan exactamente juntas y que las ocho notas de cada compás suenen igual de fuertes; vigila sobre todo la alternancia 3-4.
5. Variantes: una pasada con ritmo con puntillo (larga-corta), otra al revés (corta-larga) y otra en staccato ligero desde el dedo. Al volver al ritmo parejo notarás más igualdad.
6. Toca una vez con crescendo al subir y diminuendo al bajar, y otra todo piano, sin que la igualdad se pierda.
7. Sube el metrónomo de 4 en 4 solo cuando dos pasadas seguidas salgan limpias y relajadas; si aparece tensión, vuelve al tempo anterior. Para el concierto basta ♩ = 88–92: el 108 que imprime Hanon no hace falta.

**Errores comunes:**

- Muñeca que sube y baja en cada nota: obsérvala de reojo o imagina una moneda sobre el dorso de la mano; si se mueve, baja el tempo y deja que trabajen solo los dedos.
- Endurecer el antebrazo en la alternancia: si notas tensión, para, sacude la mano y toca la alternancia más piano.
- Acelerar sin darte cuenta, sobre todo en la bajada: graba un minuto con metrónomo; si las semicorcheas se adelantan o se agrupan de dos en dos, baja 8 puntos.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 88–92.

**Está listo cuando:** Tocas el ejercicio completo con manos juntas a ♩ = 88–92 dos veces seguidas, con el 3 y el 4 tan claros como los demás y sin tensión en muñeca ni antebrazo.

#### Hanon 11 — Preparación del trino con 4 y 5

En 2/4 y en semicorcheas continuas, cada compás es una figura de ocho notas que sube un grado por compás desde Do durante dos octavas y luego baja por el mismo camino; las dos manos tocan lo mismo a una octava de distancia. Digitación impresa del primer compás: derecha 1-2-5-4-5-4-3-4, izquierda 5-3-1-2-1-2-3-2. Hanon lo presenta como otra preparación del trino, esta vez para el 4 y el 5.

**Para qué sirve:** Fortalece la pareja 4-5, la más difícil de independizar; prepara trinos con dedos externos y una melodía aguda firme.

**Antes de empezar:**

- Siéntate con los antebrazos a la altura del teclado, los codos un poco separados del cuerpo y los hombros sueltos; colócate frente al Do central, donde empiezan las dos manos.
- Dedos curvos, como si sostuvieras una pelota pequeña: el pulgar toca con su borde y la punta del 5 no se aplasta.
- Después del salto al 5, el 4 y el 5 se alternan: mantén la muñeca alineada con el antebrazo, sin girarla hacia el meñique.
- Hanon pide levantar los dedos alto y con precisión: el movimiento sale del nudillo, mientras la muñeca y el antebrazo se quedan quietos y blandos.

**Paso a paso:**

1. Lee el primer compás y tócalo solo con la mano derecha (1-2-5-4-5-4-3-4), muy lento y sin metrónomo, hasta que la digitación salga sin dudar; repite con la izquierda (5-3-1-2-1-2-3-2).
2. Pon el metrónomo a ♩ = 60 y toca el ejercicio completo, subida y bajada, con cada mano por separado en semicorcheas. Si no sale limpio, tócalo en corcheas (la mitad de velocidad) con el mismo pulso.
3. Aísla la alternancia 5-4-5-4 de la derecha (y su equivalente de la izquierda en la bajada): lenta, igual, sin que el 4 arrastre al 5.
4. Junta las manos a ♩ = 60. Escucha que las dos manos caigan exactamente juntas y que las ocho notas de cada compás suenen igual de fuertes; vigila sobre todo la alternancia 4-5.
5. Variantes: una pasada con ritmo con puntillo (larga-corta), otra al revés (corta-larga) y otra en staccato ligero desde el dedo. Al volver al ritmo parejo notarás más igualdad.
6. Toca una vez con crescendo al subir y diminuendo al bajar, y otra todo piano, sin que la igualdad se pierda.
7. Sube el metrónomo de 4 en 4 solo cuando dos pasadas seguidas salgan limpias y relajadas; si aparece tensión, vuelve al tempo anterior. Para el concierto basta ♩ = 88–92: el 108 que imprime Hanon no hace falta.

**Errores comunes:**

- Muñeca que sube y baja en cada nota: obsérvala de reojo o imagina una moneda sobre el dorso de la mano; si se mueve, baja el tempo y deja que trabajen solo los dedos.
- Rotar la muñeca hacia el meñique para ayudar al 5: si la ves torcerse, baja el tempo y deja que el trabajo lo hagan los dedos.
- Acelerar sin darte cuenta, sobre todo en la bajada: graba un minuto con metrónomo; si las semicorcheas se adelantan o se agrupan de dos en dos, baja 8 puntos.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 88–92.

**Está listo cuando:** Tocas el ejercicio completo con manos juntas a ♩ = 88–92 dos veces seguidas, con el 4 y el 5 tan claros como los demás y sin tensión en muñeca ni antebrazo.

#### Hanon 12 — Extensión 1-5 y dedos 3-4-5

En 2/4 y en semicorcheas continuas, cada compás es una figura de ocho notas que sube un grado por compás desde Do durante dos octavas y luego baja por el mismo camino; las dos manos tocan lo mismo a una octava de distancia. Digitación impresa del primer compás: derecha 5-1-3-2-1-2-3-1, izquierda 1-5-3-4-5-4-3-5. Hanon lo describe como extensión de 1-5 y ejercicio para 3-4-5: cada compás arranca con la mano abierta de pulgar a meñique.

**Para qué sirve:** Acostumbra la mano a abrirse de 1 a 5 y cerrarse enseguida; aparece en acompañamientos quebrados y saltos dentro de la mano.

**Antes de empezar:**

- Siéntate con los antebrazos a la altura del teclado, los codos un poco separados del cuerpo y los hombros sueltos; colócate frente al Do central, donde empiezan las dos manos.
- Dedos curvos, como si sostuvieras una pelota pequeña: el pulgar toca con su borde y la punta del 5 no se aplasta.
- La apertura 1-5 se hace soltando la mano, no estirándola: en cuanto tocas la segunda nota, la mano vuelve a su forma natural.
- Hanon pide levantar los dedos alto y con precisión: el movimiento sale del nudillo, mientras la muñeca y el antebrazo se quedan quietos y blandos.

**Paso a paso:**

1. Lee el primer compás y tócalo solo con la mano derecha (5-1-3-2-1-2-3-1), muy lento y sin metrónomo, hasta que la digitación salga sin dudar; repite con la izquierda (1-5-3-4-5-4-3-5).
2. Pon el metrónomo a ♩ = 60 y toca el ejercicio completo, subida y bajada, con cada mano por separado en semicorcheas. Si no sale limpio, tócalo en corcheas (la mitad de velocidad) con el mismo pulso.
3. Practica el gesto inicial (5-1 en la derecha, 1-5 en la izquierda) aislado: abre, toca, relaja; diez veces antes del compás completo.
4. Junta las manos a ♩ = 60. Escucha que las dos manos caigan exactamente juntas y que las ocho notas de cada compás suenen igual de fuertes; vigila sobre todo el 3, el 4 y el 5.
5. Variantes: una pasada con ritmo con puntillo (larga-corta), otra al revés (corta-larga) y otra en staccato ligero desde el dedo. Al volver al ritmo parejo notarás más igualdad.
6. Toca una vez con crescendo al subir y diminuendo al bajar, y otra todo piano, sin que la igualdad se pierda.
7. Sube el metrónomo de 4 en 4 solo cuando dos pasadas seguidas salgan limpias y relajadas; si aparece tensión, vuelve al tempo anterior. Para el concierto basta ♩ = 88–92: el 108 que imprime Hanon no hace falta.

**Errores comunes:**

- Muñeca que sube y baja en cada nota: obsérvala de reojo o imagina una moneda sobre el dorso de la mano; si se mueve, baja el tempo y deja que trabajen solo los dedos.
- Quedarte con la mano estirada todo el compás: si sientes tirantez entre pulgar y meñique, relaja tras cada apertura y baja el tempo.
- Acelerar sin darte cuenta, sobre todo en la bajada: graba un minuto con metrónomo; si las semicorcheas se adelantan o se agrupan de dos en dos, baja 8 puntos.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 88–92.

**Está listo cuando:** Tocas el ejercicio completo con manos juntas a ♩ = 88–92 dos veces seguidas, con el 3, el 4 y el 5 tan claros como los demás y sin tensión en muñeca ni antebrazo.

#### Hanon 13 — Dedos 3, 4 y 5

En 2/4 y en semicorcheas continuas, cada compás es una figura de ocho notas que sube un grado por compás desde Do durante dos octavas y luego baja por el mismo camino; las dos manos tocan lo mismo a una octava de distancia. Digitación impresa del primer compás: derecha 3-1-4-2-5-3-4-5, izquierda 3-5-2-4-1-3-2-1. Lleva impreso (3-4-5): son terceras quebradas que empiezan por la nota de arriba en la derecha y por la de abajo en la izquierda.

**Para qué sirve:** Afina las terceras quebradas, muy comunes en acompañamientos de estilo clásico, y refuerza el 3, el 4 y el 5.

**Antes de empezar:**

- Siéntate con los antebrazos a la altura del teclado, los codos un poco separados del cuerpo y los hombros sueltos; colócate frente al Do central, donde empiezan las dos manos.
- Dedos curvos, como si sostuvieras una pelota pequeña: el pulgar toca con su borde y la punta del 5 no se aplasta.
- Cada pareja (3-1, 4-2, 5-3) cabe en la posición de cinco dedos: mano fija, sin saltar entre parejas.
- Hanon pide levantar los dedos alto y con precisión: el movimiento sale del nudillo, mientras la muñeca y el antebrazo se quedan quietos y blandos.

**Paso a paso:**

1. Lee el primer compás y tócalo solo con la mano derecha (3-1-4-2-5-3-4-5), muy lento y sin metrónomo, hasta que la digitación salga sin dudar; repite con la izquierda (3-5-2-4-1-3-2-1).
2. Pon el metrónomo a ♩ = 60 y toca el ejercicio completo, subida y bajada, con cada mano por separado en semicorcheas. Si no sale limpio, tócalo en corcheas (la mitad de velocidad) con el mismo pulso.
3. Toca las terceras como bloques (1+3, 2+4, 3+5) y luego quebradas, cuidando que la segunda nota de cada pareja no salga con golpe.
4. Junta las manos a ♩ = 60. Escucha que las dos manos caigan exactamente juntas y que las ocho notas de cada compás suenen igual de fuertes; vigila sobre todo el 4 y el 5.
5. Variantes: una pasada con ritmo con puntillo (larga-corta), otra al revés (corta-larga) y otra en staccato ligero desde el dedo. Al volver al ritmo parejo notarás más igualdad.
6. Toca una vez con crescendo al subir y diminuendo al bajar, y otra todo piano, sin que la igualdad se pierda.
7. Sube el metrónomo de 4 en 4 solo cuando dos pasadas seguidas salgan limpias y relajadas; si aparece tensión, vuelve al tempo anterior. Para el concierto basta ♩ = 88–92: el 108 que imprime Hanon no hace falta.

**Errores comunes:**

- Muñeca que sube y baja en cada nota: obsérvala de reojo o imagina una moneda sobre el dorso de la mano; si se mueve, baja el tempo y deja que trabajen solo los dedos.
- La segunda nota de cada pareja suena con golpe: escucha solo esas notas y tócalas más ligeras hasta igualar la pareja.
- Acelerar sin darte cuenta, sobre todo en la bajada: graba un minuto con metrónomo; si las semicorcheas se adelantan o se agrupan de dos en dos, baja 8 puntos.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 88–92.

**Está listo cuando:** Tocas el ejercicio completo con manos juntas a ♩ = 88–92 dos veces seguidas, con el 3, el 4 y el 5 tan claros como los demás y sin tensión en muñeca ni antebrazo.

#### Hanon 14 — Preparación del trino con 3 y 4 (II)

En 2/4 y en semicorcheas continuas, cada compás es una figura de ocho notas que sube un grado por compás desde Do durante dos octavas y luego baja por el mismo camino; las dos manos tocan lo mismo a una octava de distancia. Digitación impresa del primer compás: derecha 1-2-4-3-4-3-5-4, izquierda 5-4-2-3-2-3-1-3. Hanon lo presenta como otra preparación del trino para el 3 y el 4.

**Para qué sirve:** Insiste en la independencia del 3 y el 4 para trinos y adornos, y en mantener la mano quieta mientras dos dedos vecinos se alternan.

**Antes de empezar:**

- Siéntate con los antebrazos a la altura del teclado, los codos un poco separados del cuerpo y los hombros sueltos; colócate frente al Do central, donde empiezan las dos manos.
- Dedos curvos, como si sostuvieras una pelota pequeña: el pulgar toca con su borde y la punta del 5 no se aplasta.
- La alternancia 4-3-4-3 está en medio del compás: deja la mano apoyada y suelta, sin apretar el pulgar.
- Hanon pide levantar los dedos alto y con precisión: el movimiento sale del nudillo, mientras la muñeca y el antebrazo se quedan quietos y blandos.

**Paso a paso:**

1. Lee el primer compás y tócalo solo con la mano derecha (1-2-4-3-4-3-5-4), muy lento y sin metrónomo, hasta que la digitación salga sin dudar; repite con la izquierda (5-4-2-3-2-3-1-3).
2. Pon el metrónomo a ♩ = 60 y toca el ejercicio completo, subida y bajada, con cada mano por separado en semicorcheas. Si no sale limpio, tócalo en corcheas (la mitad de velocidad) con el mismo pulso.
3. Aísla la alternancia central (4-3-4-3 en la derecha, 2-3-2-3 en la izquierda) en bucle, lenta y pareja, y luego reintégrala al compás.
4. Junta las manos a ♩ = 60. Escucha que las dos manos caigan exactamente juntas y que las ocho notas de cada compás suenen igual de fuertes; vigila sobre todo el 3 y el 4.
5. Variantes: una pasada con ritmo con puntillo (larga-corta), otra al revés (corta-larga) y otra en staccato ligero desde el dedo. Al volver al ritmo parejo notarás más igualdad.
6. Toca una vez con crescendo al subir y diminuendo al bajar, y otra todo piano, sin que la igualdad se pierda.
7. Sube el metrónomo de 4 en 4 solo cuando dos pasadas seguidas salgan limpias y relajadas; si aparece tensión, vuelve al tempo anterior. Para el concierto basta ♩ = 88–92: el 108 que imprime Hanon no hace falta.

**Errores comunes:**

- Muñeca que sube y baja en cada nota: obsérvala de reojo o imagina una moneda sobre el dorso de la mano; si se mueve, baja el tempo y deja que trabajen solo los dedos.
- Los dos dedos que alternan forman parejas desiguales (uno se adelanta): practica con ritmo con puntillo en ambos sentidos y vuelve al parejo.
- Acelerar sin darte cuenta, sobre todo en la bajada: graba un minuto con metrónomo; si las semicorcheas se adelantan o se agrupan de dos en dos, baja 8 puntos.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 88–92.

**Está listo cuando:** Tocas el ejercicio completo con manos juntas a ♩ = 88–92 dos veces seguidas, con el 3 y el 4 tan claros como los demás y sin tensión en muñeca ni antebrazo.

#### Hanon 15 — Extensión 1-2 y los cinco dedos

En 2/4 y en semicorcheas continuas, cada compás es una figura de ocho notas que sube un grado por compás desde Do durante dos octavas y luego baja por el mismo camino; las dos manos tocan lo mismo a una octava de distancia. Digitación impresa del primer compás: derecha 1-2-1-3-2-4-3-5, izquierda 5-3-4-2-3-1-2-1. Hanon lo describe como extensión de 1-2 y ejercicio para los cinco dedos; la figura sube en terceras quebradas.

**Para qué sirve:** Abre el espacio entre pulgar e índice, necesario en escalas, arpegios y acordes abiertos, y trabaja la mano entera.

**Antes de empezar:**

- Siéntate con los antebrazos a la altura del teclado, los codos un poco separados del cuerpo y los hombros sueltos; colócate frente al Do central, donde empiezan las dos manos.
- Dedos curvos, como si sostuvieras una pelota pequeña: el pulgar toca con su borde y la punta del 5 no se aplasta.
- La apertura 1-2 abre el compás: deja el pulgar suelto, sin apretarlo contra la mano.
- Hanon pide levantar los dedos alto y con precisión: el movimiento sale del nudillo, mientras la muñeca y el antebrazo se quedan quietos y blandos.

**Paso a paso:**

1. Lee el primer compás y tócalo solo con la mano derecha (1-2-1-3-2-4-3-5), muy lento y sin metrónomo, hasta que la digitación salga sin dudar; repite con la izquierda (5-3-4-2-3-1-2-1).
2. Pon el metrónomo a ♩ = 60 y toca el ejercicio completo, subida y bajada, con cada mano por separado en semicorcheas. Si no sale limpio, tócalo en corcheas (la mitad de velocidad) con el mismo pulso.
3. Toca el gesto 1-2-1 en bucle sintiendo la apertura entre pulgar e índice, y luego sigue con la subida en terceras quebradas.
4. Junta las manos a ♩ = 60. Escucha que las dos manos caigan exactamente juntas y que las ocho notas de cada compás suenen igual de fuertes; vigila sobre todo el pulgar y el 5.
5. Variantes: una pasada con ritmo con puntillo (larga-corta), otra al revés (corta-larga) y otra en staccato ligero desde el dedo. Al volver al ritmo parejo notarás más igualdad.
6. Toca una vez con crescendo al subir y diminuendo al bajar, y otra todo piano, sin que la igualdad se pierda.
7. Sube el metrónomo de 4 en 4 solo cuando dos pasadas seguidas salgan limpias y relajadas; si aparece tensión, vuelve al tempo anterior. Para el concierto basta ♩ = 88–92: el 108 que imprime Hanon no hace falta.

**Errores comunes:**

- Muñeca que sube y baja en cada nota: obsérvala de reojo o imagina una moneda sobre el dorso de la mano; si se mueve, baja el tempo y deja que trabajen solo los dedos.
- Pulgar rígido: si notas que se tensa, muévelo en círculos lentos en el aire y vuelve a empezar más piano.
- Acelerar sin darte cuenta, sobre todo en la bajada: graba un minuto con metrónomo; si las semicorcheas se adelantan o se agrupan de dos en dos, baja 8 puntos.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 88–92.

**Está listo cuando:** Tocas el ejercicio completo con manos juntas a ♩ = 88–92 dos veces seguidas, con los cinco dedos tan claros como los demás y sin tensión en muñeca ni antebrazo.

#### Hanon 16 — Extensión 3-5 y dedos 3-4-5

En 2/4 y en semicorcheas continuas, cada compás es una figura de ocho notas que sube un grado por compás desde Do durante dos octavas y luego baja por el mismo camino; las dos manos tocan lo mismo a una octava de distancia. Digitación impresa del primer compás: derecha 1-3-2-3-5-4-3-4, izquierda 5-3-4-3-1-2-3-2. Hanon lo describe como extensión de 3-5 y ejercicio para 3-4-5.

**Para qué sirve:** Abre el espacio entre el 3 y el 5 y fortalece el lado externo; útil para intervalos amplios dentro de la mano en melodías.

**Antes de empezar:**

- Siéntate con los antebrazos a la altura del teclado, los codos un poco separados del cuerpo y los hombros sueltos; colócate frente al Do central, donde empiezan las dos manos.
- Dedos curvos, como si sostuvieras una pelota pequeña: el pulgar toca con su borde y la punta del 5 no se aplasta.
- El salto del 3 al 5 se hace desde el nudillo: la mano no se desplaza para alcanzar la tecla.
- Hanon pide levantar los dedos alto y con precisión: el movimiento sale del nudillo, mientras la muñeca y el antebrazo se quedan quietos y blandos.

**Paso a paso:**

1. Lee el primer compás y tócalo solo con la mano derecha (1-3-2-3-5-4-3-4), muy lento y sin metrónomo, hasta que la digitación salga sin dudar; repite con la izquierda (5-3-4-3-1-2-3-2).
2. Pon el metrónomo a ♩ = 60 y toca el ejercicio completo, subida y bajada, con cada mano por separado en semicorcheas. Si no sale limpio, tócalo en corcheas (la mitad de velocidad) con el mismo pulso.
3. Aísla el salto 3-5 y la vuelta 4-3-4 (en la derecha) diez veces, lento y con sonido lleno.
4. Junta las manos a ♩ = 60. Escucha que las dos manos caigan exactamente juntas y que las ocho notas de cada compás suenen igual de fuertes; vigila sobre todo el 4 y el 5.
5. Variantes: una pasada con ritmo con puntillo (larga-corta), otra al revés (corta-larga) y otra en staccato ligero desde el dedo. Al volver al ritmo parejo notarás más igualdad.
6. Toca una vez con crescendo al subir y diminuendo al bajar, y otra todo piano, sin que la igualdad se pierda.
7. Sube el metrónomo de 4 en 4 solo cuando dos pasadas seguidas salgan limpias y relajadas; si aparece tensión, vuelve al tempo anterior. Para el concierto basta ♩ = 88–92: el 108 que imprime Hanon no hace falta.

**Errores comunes:**

- Muñeca que sube y baja en cada nota: obsérvala de reojo o imagina una moneda sobre el dorso de la mano; si se mueve, baja el tempo y deja que trabajen solo los dedos.
- Mover la mano entera para llegar al 5: obsérvala; si se desplaza, toca más lento y deja que el 5 se abra solo.
- Acelerar sin darte cuenta, sobre todo en la bajada: graba un minuto con metrónomo; si las semicorcheas se adelantan o se agrupan de dos en dos, baja 8 puntos.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 88–92.

**Está listo cuando:** Tocas el ejercicio completo con manos juntas a ♩ = 88–92 dos veces seguidas, con el 3, el 4 y el 5 tan claros como los demás y sin tensión en muñeca ni antebrazo.

#### Hanon 17 — Extensiones 1-2, 2-4 y 4-5

En 2/4 y en semicorcheas continuas, cada compás es una figura de ocho notas que sube un grado por compás desde Do durante dos octavas y luego baja por el mismo camino; las dos manos tocan lo mismo a una octava de distancia. Digitación impresa del primer compás: derecha 1-2-4-3-5-4-3-4, izquierda 5-4-2-3-1-2-3-2. Hanon lo describe como extensión de 1-2, 2-4 y 4-5, y ejercicio para 3-4-5.

**Para qué sirve:** Abre varias zonas de la mano en un mismo compás; da flexibilidad para figuras que no caben en posición fija de cinco dedos.

**Antes de empezar:**

- Siéntate con los antebrazos a la altura del teclado, los codos un poco separados del cuerpo y los hombros sueltos; colócate frente al Do central, donde empiezan las dos manos.
- Dedos curvos, como si sostuvieras una pelota pequeña: el pulgar toca con su borde y la punta del 5 no se aplasta.
- Cada apertura se suelta en cuanto se toca: la mano respira entre una extensión y la siguiente.
- Hanon pide levantar los dedos alto y con precisión: el movimiento sale del nudillo, mientras la muñeca y el antebrazo se quedan quietos y blandos.

**Paso a paso:**

1. Lee el primer compás y tócalo solo con la mano derecha (1-2-4-3-5-4-3-4), muy lento y sin metrónomo, hasta que la digitación salga sin dudar; repite con la izquierda (5-4-2-3-1-2-3-2).
2. Pon el metrónomo a ♩ = 60 y toca el ejercicio completo, subida y bajada, con cada mano por separado en semicorcheas. Si no sale limpio, tócalo en corcheas (la mitad de velocidad) con el mismo pulso.
3. Toca por separado los gestos 1-2-4 y 3-5-4 de la derecha (y los equivalentes de la izquierda) hasta sentir cada apertura cómoda, y luego el compás entero.
4. Junta las manos a ♩ = 60. Escucha que las dos manos caigan exactamente juntas y que las ocho notas de cada compás suenen igual de fuertes; vigila sobre todo el 4 y el 5.
5. Variantes: una pasada con ritmo con puntillo (larga-corta), otra al revés (corta-larga) y otra en staccato ligero desde el dedo. Al volver al ritmo parejo notarás más igualdad.
6. Toca una vez con crescendo al subir y diminuendo al bajar, y otra todo piano, sin que la igualdad se pierda.
7. Sube el metrónomo de 4 en 4 solo cuando dos pasadas seguidas salgan limpias y relajadas; si aparece tensión, vuelve al tempo anterior. Para el concierto basta ♩ = 88–92: el 108 que imprime Hanon no hace falta.

**Errores comunes:**

- Muñeca que sube y baja en cada nota: obsérvala de reojo o imagina una moneda sobre el dorso de la mano; si se mueve, baja el tempo y deja que trabajen solo los dedos.
- La mano se endurece por las aperturas y el sonido se vuelve seco: baja el tempo y piensa en abrir y cerrar como si respiraras.
- Acelerar sin darte cuenta, sobre todo en la bajada: graba un minuto con metrónomo; si las semicorcheas se adelantan o se agrupan de dos en dos, baja 8 puntos.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 88–92.

**Está listo cuando:** Tocas el ejercicio completo con manos juntas a ♩ = 88–92 dos veces seguidas, con el 3, el 4 y el 5 tan claros como los demás y sin tensión en muñeca ni antebrazo.

#### Hanon 18 — Los cinco dedos (II)

En 2/4 y en semicorcheas continuas, cada compás es una figura de ocho notas que sube un grado por compás desde Do durante dos octavas y luego baja por el mismo camino; las dos manos tocan lo mismo a una octava de distancia. Digitación impresa del primer compás: derecha 1-2-4-3-5-4-2-3, izquierda 5-4-2-3-1-2-4-3. Lleva impreso (1-2-3-4-5): ejercicio de igualdad y agilidad para los cinco dedos.

**Para qué sirve:** Refuerza la igualdad de toda la mano con una figura que cambia de dirección varias veces; prepara pasajes irregulares de tus obras.

**Antes de empezar:**

- Siéntate con los antebrazos a la altura del teclado, los codos un poco separados del cuerpo y los hombros sueltos; colócate frente al Do central, donde empiezan las dos manos.
- Dedos curvos, como si sostuvieras una pelota pequeña: el pulgar toca con su borde y la punta del 5 no se aplasta.
- La figura zigzaguea dentro de la posición de cinco dedos: mano quieta, dedos activos.
- Hanon pide levantar los dedos alto y con precisión: el movimiento sale del nudillo, mientras la muñeca y el antebrazo se quedan quietos y blandos.

**Paso a paso:**

1. Lee el primer compás y tócalo solo con la mano derecha (1-2-4-3-5-4-2-3), muy lento y sin metrónomo, hasta que la digitación salga sin dudar; repite con la izquierda (5-4-2-3-1-2-4-3).
2. Pon el metrónomo a ♩ = 60 y toca el ejercicio completo, subida y bajada, con cada mano por separado en semicorcheas. Si no sale limpio, tócalo en corcheas (la mitad de velocidad) con el mismo pulso.
3. Haz una pasada acentuando las notas del 4 y otra acentuando las del 5; al volver a tocar sin acentos notarás la mano más pareja.
4. Junta las manos a ♩ = 60. Escucha que las dos manos caigan exactamente juntas y que las ocho notas de cada compás suenen igual de fuertes; vigila sobre todo el 4 y el 5.
5. Variantes: una pasada con ritmo con puntillo (larga-corta), otra al revés (corta-larga) y otra en staccato ligero desde el dedo. Al volver al ritmo parejo notarás más igualdad.
6. Toca una vez con crescendo al subir y diminuendo al bajar, y otra todo piano, sin que la igualdad se pierda.
7. Sube el metrónomo de 4 en 4 solo cuando dos pasadas seguidas salgan limpias y relajadas; si aparece tensión, vuelve al tempo anterior. Para el concierto basta ♩ = 88–92: el 108 que imprime Hanon no hace falta.

**Errores comunes:**

- Muñeca que sube y baja en cada nota: obsérvala de reojo o imagina una moneda sobre el dorso de la mano; si se mueve, baja el tempo y deja que trabajen solo los dedos.
- Una nota se come a la siguiente en los cambios de dirección: escucha nota por nota a ♩ = 50 y vuelve a subir cuando cada una suene clara.
- Acelerar sin darte cuenta, sobre todo en la bajada: graba un minuto con metrónomo; si las semicorcheas se adelantan o se agrupan de dos en dos, baja 8 puntos.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 88–92.

**Está listo cuando:** Tocas el ejercicio completo con manos juntas a ♩ = 88–92 dos veces seguidas, con los cinco dedos tan claros como los demás y sin tensión en muñeca ni antebrazo.

#### Hanon 19 — Los cinco dedos (III)

En 2/4 y en semicorcheas continuas, cada compás es una figura de ocho notas que sube un grado por compás desde Do durante dos octavas y luego baja por el mismo camino; las dos manos tocan lo mismo a una octava de distancia. Digitación impresa del primer compás: derecha 1-5-3-4-5-3-2-4, izquierda 5-1-3-2-1-3-4-2. Lleva impreso (1-2-3-4-5): la figura salta del pulgar al 5 y se mueve en saltos dentro de la mano.

**Para qué sirve:** Da precisión en saltos internos entre dedos no vecinos, algo constante en acompañamientos y figuraciones románticas.

**Antes de empezar:**

- Siéntate con los antebrazos a la altura del teclado, los codos un poco separados del cuerpo y los hombros sueltos; colócate frente al Do central, donde empiezan las dos manos.
- Dedos curvos, como si sostuvieras una pelota pequeña: el pulgar toca con su borde y la punta del 5 no se aplasta.
- Coloca la mano abierta sobre las cinco teclas antes de empezar: los saltos internos se hacen con los dedos, no moviendo la mano.
- Hanon pide levantar los dedos alto y con precisión: el movimiento sale del nudillo, mientras la muñeca y el antebrazo se quedan quietos y blandos.

**Paso a paso:**

1. Lee el primer compás y tócalo solo con la mano derecha (1-5-3-4-5-3-2-4), muy lento y sin metrónomo, hasta que la digitación salga sin dudar; repite con la izquierda (5-1-3-2-1-3-4-2).
2. Pon el metrónomo a ♩ = 60 y toca el ejercicio completo, subida y bajada, con cada mano por separado en semicorcheas. Si no sale limpio, tócalo en corcheas (la mitad de velocidad) con el mismo pulso.
3. Toca el compás despacio nombrando en voz alta cada dedo para que la digitación se fije, y después sin hablar con metrónomo.
4. Junta las manos a ♩ = 60. Escucha que las dos manos caigan exactamente juntas y que las ocho notas de cada compás suenen igual de fuertes; vigila sobre todo el 4 y el 2.
5. Variantes: una pasada con ritmo con puntillo (larga-corta), otra al revés (corta-larga) y otra en staccato ligero desde el dedo. Al volver al ritmo parejo notarás más igualdad.
6. Toca una vez con crescendo al subir y diminuendo al bajar, y otra todo piano, sin que la igualdad se pierda.
7. Sube el metrónomo de 4 en 4 solo cuando dos pasadas seguidas salgan limpias y relajadas; si aparece tensión, vuelve al tempo anterior. Para el concierto basta ♩ = 88–92: el 108 que imprime Hanon no hace falta.

**Errores comunes:**

- Muñeca que sube y baja en cada nota: obsérvala de reojo o imagina una moneda sobre el dorso de la mano; si se mueve, baja el tempo y deja que trabajen solo los dedos.
- Equivocar la digitación en los saltos y sustituirla por una cómoda: comprueba la digitación impresa compás a compás; cambiarla anula el trabajo del ejercicio.
- Acelerar sin darte cuenta, sobre todo en la bajada: graba un minuto con metrónomo; si las semicorcheas se adelantan o se agrupan de dos en dos, baja 8 puntos.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 88–92.

**Está listo cuando:** Tocas el ejercicio completo con manos juntas a ♩ = 88–92 dos veces seguidas, con los cinco dedos tan claros como los demás y sin tensión en muñeca ni antebrazo.

#### Hanon 20 — Extensiones 2-4 y 4-5, dedos 2-3-4

En 2/4 y en semicorcheas continuas, cada compás es una figura de ocho notas que sube un grado por compás desde Do durante dos octavas y luego baja por el mismo camino; las dos manos tocan lo mismo a una octava de distancia. Digitación impresa del primer compás: derecha 1-2-4-5-4-3-4-2, izquierda 5-4-2-1-2-3-2-4. Hanon lo describe como extensión de 2-4 y 4-5 y ejercicio para 2-3-4. Cierra la Parte I y su final tiene unos compases distintos antes de la nota última.

**Para qué sirve:** Combina extensiones con trabajo de los dedos centrales y deja la mano lista para los ejercicios más largos de la Parte II.

**Antes de empezar:**

- Siéntate con los antebrazos a la altura del teclado, los codos un poco separados del cuerpo y los hombros sueltos; colócate frente al Do central, donde empiezan las dos manos.
- Dedos curvos, como si sostuvieras una pelota pequeña: el pulgar toca con su borde y la punta del 5 no se aplasta.
- Las extensiones 2-4 y 4-5 se sueltan en cuanto se tocan: no mantengas la mano abierta todo el compás.
- Hanon pide levantar los dedos alto y con precisión: el movimiento sale del nudillo, mientras la muñeca y el antebrazo se quedan quietos y blandos.

**Paso a paso:**

1. Lee el primer compás y tócalo solo con la mano derecha (1-2-4-5-4-3-4-2), muy lento y sin metrónomo, hasta que la digitación salga sin dudar; repite con la izquierda (5-4-2-1-2-3-2-4).
2. Pon el metrónomo a ♩ = 60 y toca el ejercicio completo, subida y bajada, con cada mano por separado en semicorcheas. Si no sale limpio, tócalo en corcheas (la mitad de velocidad) con el mismo pulso.
3. Lee aparte los compases finales, que no siguen el patrón, y apréndelos lentos antes de tocar el ejercicio entero.
4. Junta las manos a ♩ = 60. Escucha que las dos manos caigan exactamente juntas y que las ocho notas de cada compás suenen igual de fuertes; vigila sobre todo el 2, el 3 y el 4.
5. Variantes: una pasada con ritmo con puntillo (larga-corta), otra al revés (corta-larga) y otra en staccato ligero desde el dedo. Al volver al ritmo parejo notarás más igualdad.
6. Toca una vez con crescendo al subir y diminuendo al bajar, y otra todo piano, sin que la igualdad se pierda.
7. Sube el metrónomo de 4 en 4 solo cuando dos pasadas seguidas salgan limpias y relajadas; si aparece tensión, vuelve al tempo anterior. Para el concierto basta ♩ = 88–92: el 108 que imprime Hanon no hace falta.

**Errores comunes:**

- Muñeca que sube y baja en cada nota: obsérvala de reojo o imagina una moneda sobre el dorso de la mano; si se mueve, baja el tempo y deja que trabajen solo los dedos.
- Tropezar en el final porque cambia el patrón: márcalo mentalmente y practícalo aislado unas veces antes de cada pasada completa.
- Acelerar sin darte cuenta, sobre todo en la bajada: graba un minuto con metrónomo; si las semicorcheas se adelantan o se agrupan de dos en dos, baja 8 puntos.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 88–92.

**Está listo cuando:** Tocas el ejercicio completo con manos juntas a ♩ = 88–92 dos veces seguidas, con el 2, el 3 y el 4 tan claros como los demás y sin tensión en muñeca ni antebrazo.

#### Hanon 21 — Ejercicio trascendente: dedos 3, 4 y 5

Primero de los ejercicios trascendentes de la Parte II: en compás de 4/4 y semicorcheas continuas, el trabajo que hace la izquierda con 3, 4 y 5 en el primer tiempo (5-4-3-4-5-4-3-2) lo repite la derecha invertido en el tercer tiempo (5-4-3-4-5…), y la figura avanza un grado por compás. Hanon imprime ♩ = 60 a 108.

**Para qué sirve:** Trabaja la independencia de 3-4-5 en las dos manos dentro de una figura más larga y menos repetitiva que la Parte I; te prepara para pasajes donde cada mano tiene un trabajo distinto al mismo tiempo.

**Antes de empezar:**

- Siéntate frente al centro del teclado, con los codos sueltos y los antebrazos a la altura de las teclas.
- Dedos curvos y mano en posición de cinco dedos; la digitación impresa del primer compás empieza con derecha 1-2-3-2-1-2-3-4 y izquierda 5-4-3-4-5-4-3-2.
- Fíjate en las marcas (A) y (B) de la partitura: señalan dónde trabaja 3-4-5 cada mano.

**Paso a paso:**

1. Toca el primer compás con cada mano por separado, lento y sin metrónomo, hasta conocer la digitación sin mirar.
2. Con el metrónomo a ♩ = 60, toca el ejercicio entero con cada mano sola; concéntrate en que los tiempos donde trabaja 3-4-5 suenen iguales a los demás.
3. Junta las manos a ♩ = 60 compás a compás, y después en tramos de cuatro compases.
4. Escucha la alternancia: en el primer tiempo la izquierda es protagonista y en el tercero la derecha; intenta que esos tiempos no suenen ni más fuertes ni más débiles.
5. Variantes: una pasada con ritmo con puntillo y otra en staccato ligero desde el dedo, y una pasada piano con la muñeca muy suelta.
6. Sube de 4 en 4 cuando dos pasadas seguidas salgan limpias. Para el concierto basta ♩ = 84–92; no necesitas el 108 impreso.

**Errores comunes:**

- El 4 y el 5 se debilitan justo en los tiempos de trabajo: escucha solo esos grupos; si se pierden, practícalos aislados con acento y vuelve a igualar.
- Las manos se desincronizan cuando una tiene el trabajo difícil: baja a ♩ = 50 y cuenta los cuatro tiempos en voz alta.
- Mano que se tensa por la longitud del compás: haz una pausa breve cada cuatro compases al principio y sacude la mano antes de seguir.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 84–92.

**Está listo cuando:** Tocas el ejercicio entero con manos juntas a ♩ = 84–92, sin paradas, con los grupos de 3-4-5 tan claros como el resto.

#### Hanon 22 — Dedos 3, 4 y 5 (como el n.º 21)

Hanon indica que tiene el mismo objetivo que el n.º 21 (3-4-5): en 4/4 y semicorcheas continuas, cada compás combina una figura de cinco dedos con otra que trabaja el 3, el 4 y el 5, y avanza un grado por compás. La digitación impresa empieza con derecha 1-2-3-2-1-2-3-4 e izquierda 5-3-4-3-5-4-3-2.

**Para qué sirve:** Consolida la independencia de 3-4-5 con un dibujo distinto al del 21, para que la mano no dependa de un único patrón memorizado.

**Antes de empezar:**

- Siéntate frente al centro del teclado, hombros sueltos y antebrazos a la altura de las teclas.
- Mano en posición de cinco dedos con dedos curvos; lee bien la digitación del primer compás antes de tocar.
- La muñeca acompaña sin subir y bajar: el trabajo sale de los dedos.

**Paso a paso:**

1. Toca el primer compás con cada mano por separado, lento y sin metrónomo, comparándolo con el n.º 21 para ver qué cambia.
2. Metrónomo a ♩ = 60: ejercicio completo con cada mano sola, atento a que el 4 y el 5 suenen firmes.
3. Junta las manos a ♩ = 60 en tramos de dos compases y luego de cuatro.
4. Escucha que las semicorcheas sean regulares en todo el compás, sin precipitarte en la mitad fácil.
5. Variantes: ritmo con puntillo en los dos sentidos, y una pasada con crescendo al subir y diminuendo al bajar.
6. Sube de 4 en 4 cuando salga limpio dos veces; el objetivo para el plan es ♩ = 84–92.

**Errores comunes:**

- Confundirlo con el n.º 21 y mezclar digitaciones: mira la partitura en las primeras sesiones y nombra los dedos del primer tiempo antes de empezar.
- Grupos de 3-4-5 más débiles: practícalos aislados y acentuados unas veces, y vuelve al toque parejo.
- Acelerar en la bajada: graba una pasada con metrónomo y comprueba que la bajada mantiene el pulso.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 84–92.

**Está listo cuando:** Lo tocas completo con manos juntas a ♩ = 84–92 sin confundirlo con el n.º 21 y con semicorcheas regulares.

#### Hanon 23 — Dedos 3, 4 y 5

Lleva impreso (3-4-5): en 4/4 y semicorcheas, cada compás tiene dos mitades; la primera es una figura de cinco dedos (derecha 1-2-3-2-1…, izquierda 5-4-3-4-5) y la segunda salta y trabaja 3-4-5 (derecha 1-5-4-3-2-3-4-3). La figura avanza un grado por compás.

**Para qué sirve:** Trabaja el 3, el 4 y el 5 después de un cambio de posición de la mano, algo que ocurre constantemente en las obras: la mano tiene que llegar y quedar igual de pareja.

**Antes de empezar:**

- Siéntate frente al centro del teclado, codos sueltos, antebrazos a la altura de las teclas.
- Dedos curvos; mira la digitación impresa de las dos mitades del primer compás antes de tocar.
- En el cambio de posición de la mitad del compás, el brazo lleva la mano sin brusquedad y la muñeca queda blanda.

**Paso a paso:**

1. Toca cada mitad del primer compás por separado y con cada mano sola, lento, hasta conocer la digitación.
2. Practica el paso de la primera a la segunda mitad: las dos notas alrededor del cambio, en bucle, sin hueco.
3. Metrónomo a ♩ = 60: ejercicio completo con cada mano sola.
4. Junta las manos a ♩ = 60, escuchando que el cambio de posición no produzca ni retraso ni acento.
5. Variantes: ritmo con puntillo y staccato ligero; una pasada piano.
6. Sube de 4 en 4 cuando dos pasadas salgan limpias; objetivo ♩ = 84–92.

**Errores comunes:**

- Retraso o golpe en el cambio de posición: graba y escucha esa nota; si se nota, practica solo el cambio en bucle.
- El 4 suena débil en la segunda mitad: acentúalo unas pasadas y vuelve a igualar.
- Muñeca rígida para preparar el salto: si notas tensión, sacude la mano y baja el tempo.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 84–92.

**Está listo cuando:** Tocas el ejercicio completo a ♩ = 84–92 con manos juntas y el cambio de posición de cada compás no se oye.

#### Hanon 27 — Preparación del trino con 4 y 5

Lleva impreso (1-2-3-4-5) y la indicación de que prepara los dedos 4 y 5 para el trino que aparece más adelante. En 4/4 y semicorcheas, la primera mitad del compás es una figura de cinco dedos (derecha 3-4-2-3-1-2-3-4, izquierda 3-2-4-3-5-4-3-2) y la segunda alterna el 5 y el 4 (derecha 5-4…5-4-3-2).

**Para qué sirve:** Fortalece y suelta la pareja 4-5 para trinos y adornos en el lado externo de la mano, y para mantener firme la melodía aguda.

**Antes de empezar:**

- Siéntate frente al centro, codos sueltos y muñeca a la altura de los nudillos.
- Dedos curvos; la punta del 5 firme, sin hundir la última falange.
- Fíjate en que la digitación empieza con el 3, no con el pulgar: lee el primer compás con calma.
- En la alternancia 5-4, la muñeca sigue alineada con el antebrazo, sin girar hacia el meñique.

**Paso a paso:**

1. Toca el primer compás con cada mano sola, lento y sin metrónomo, hasta que la digitación salga sola.
2. Aísla la alternancia 5-4: tócala en bucle a ♩ = 50, igualando las dos notas y levantando cada dedo desde el nudillo.
3. Metrónomo a ♩ = 50: ejercicio completo con cada mano sola.
4. Junta las manos a ♩ = 50, escuchando que el 4 y el 5 suenen igual de claros que los otros dedos.
5. Variantes: ritmo con puntillo y una pasada en staccato ligero; luego otra todo piano.
6. Sube de 4 en 4 cuando dos pasadas salgan limpias y sin cansancio en el antebrazo; objetivo ♩ = 80.

**Errores comunes:**

- El antebrazo se cansa o duele en la alternancia 4-5: para, sacude la mano y vuelve más piano y más lento; la fuerza llega con el tiempo, no forzando.
- El 4 arrastra al 5 (se mueven juntos): practica la alternancia aislada aún más lenta, apoyando el 5 mientras levantas el 4.
- Empezar con el pulgar por costumbre: mira la digitación impresa antes de cada pasada en las primeras sesiones.

**Tempo:** Empieza en ♩ = 50. Objetivo: ♩ = 80.

**Está listo cuando:** Tocas el ejercicio completo a ♩ = 80 con manos juntas y la alternancia 4-5 suena pareja y sin tensión.

#### Hanon 31 — Cinco dedos y extensiones

Lleva impreso (1-2-3-4-5, y extensiones): en 3/4 y semicorcheas, el primer compás de la derecha alterna cada dedo con el 5 (1-5-4-5-3-5-2-5-1-5-1-5) y la izquierda hace un patrón con extensiones (5-1-2-1-3…). Más adelante la figura cambia de dibujo varias veces y termina en un acorde.

**Para qué sirve:** Combina igualdad de los cinco dedos con aperturas de la mano; prepara figuras de acompañamiento abiertas y melodías que exigen alcanzar teclas lejanas sin perder el legato.

**Antes de empezar:**

- Siéntate frente al centro, codos sueltos y hombros relajados.
- Dedos curvos; en la derecha el 5 funciona como pivote, firme pero sin presión.
- Las extensiones se hacen soltando la mano y cerrándola enseguida, nunca manteniéndola estirada.

**Paso a paso:**

1. Lee la página entera y localiza los cambios de dibujo; marca con lápiz dónde empieza cada uno.
2. Toca el primer dibujo con cada mano sola, lento, hasta que la digitación salga sin mirar; haz lo mismo con cada dibujo nuevo.
3. Metrónomo a ♩ = 60: cada dibujo con cada mano sola, cuidando que las aperturas no produzcan huecos.
4. Junta las manos a ♩ = 60 por dibujos y después enlázalos.
5. Escucha la nota pivote del 5: debe quedar al mismo volumen que las demás.
6. Sube de 4 en 4 cuando cada dibujo salga limpio; objetivo ♩ = 84–92.

**Errores comunes:**

- Mano estirada todo el tiempo, con dolor entre dedos: relaja después de cada apertura y baja el tempo.
- El 5 repetido suena más fuerte: grábate y equilibra; piensa en tocarlo con la punta, no con el brazo.
- Tropezar en los cambios de dibujo: practica los dos compases alrededor de cada cambio en bucle.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 84–92.

**Está listo cuando:** Tocas la página completa a ♩ = 84–92 con manos juntas, sin tropezar en los cambios de dibujo y sin tensión en las aperturas.

#### Hanon 32 — Paso del pulgar bajo el dedo 2

Paso del pulgar bajo el dedo 2: en 6/8, el primer compás se repite cuatro veces, como indica la partitura, alternando 1-2-1-2 para que el pulgar pase bajo el 2; después la figura sube y baja por el teclado con el pulgar pasando continuamente. Hanon imprime ♩. = 40 a 72.

**Para qué sirve:** El paso del pulgar es la base de escalas y arpegios: si el pulgar pasa a tiempo y sin mover el codo, consigues un legato sin pedal en cualquier línea que recorra el teclado.

**Antes de empezar:**

- Siéntate un poco más atrás de lo normal para que los codos puedan moverse lateralmente con libertad.
- Mano curva y relajada; el pulgar cuelga suelto bajo la palma, listo para deslizarse.
- Digitación impresa: 1-2-1-2 en el compás que se repite; el pulgar se mueve hacia su tecla mientras toca el 2.
- El codo acompaña muy poco y la muñeca no se tuerce ni se levanta al pasar el pulgar.

**Paso a paso:**

1. Sin tocar, mueve el pulgar bajo la palma de un lado a otro con la mano quieta, diez veces, para sentir que el movimiento sale de su base.
2. Toca el compás inicial con cada mano sola, lento, repitiéndolo las cuatro veces que pide Hanon; anticipa el pulgar sobre su tecla antes de necesitarlo.
3. Metrónomo a ♩ = 60 (la semicorchea o la corchea según te resulte cómodo, con pulso estable): ejercicio completo con cada mano sola.
4. Escucha el legato: entre el 2 y el pulgar no debe haber ni hueco ni acento.
5. Junta las manos a ♩ = 60 y escucha que los pulgares de las dos manos caigan juntos.
6. Variante: toca una pasada en staccato muy ligero para comprobar que el pulgar llega antes de tiempo; luego vuelve al legato.
7. Sube de 4 en 4 cuando dos pasadas salgan parejas; objetivo ♩ = 92.

**Errores comunes:**

- Acento en cada nota del pulgar: graba y escucha; si el pulgar golpea, tócalo más ligero y piensa en deslizarlo, no en dejarlo caer.
- El codo se abre o la muñeca gira para dejar pasar el pulgar: hazlo delante de un espejo o mirando la mano; el pulgar debe moverse solo.
- Pulgar que llega tarde y deja un hueco: prepáralo antes sobre su tecla, en cuanto suelta la anterior.

**Tempo:** Pulso en negra con puntillo (6/8). Empieza en ♩. = 40. Objetivo: ♩. = 60–66 (Hanon imprime ♩. = 40 a 72).

**Está listo cuando:** Tocas el ejercicio completo a ♩ = 92 con manos juntas y no se oye dónde pasa el pulgar.

#### Hanon 33 — Paso del pulgar bajo el dedo 3

Paso del pulgar bajo el dedo 3: en 6/8, el primer compás se repite cuatro veces, como indica la partitura, con la digitación 1-2-3-1-3-2 en la derecha y 1-3-2-1 en la izquierda; luego la figura recorre el teclado con el pulgar pasando bajo el 3. Hanon imprime ♩. = 40 a 72.

**Para qué sirve:** El paso del pulgar bajo el 3 es el que más se usa en escalas; dominarlo te da escalas y líneas melódicas largas y ligadas sin depender del pedal.

**Antes de empezar:**

- Siéntate con espacio para que los codos se muevan un poco hacia los lados.
- Mano curva; el pulgar suelto bajo la palma, sin apretarlo contra el 2.
- Digitación impresa: 1-2-3-1-3-2 (derecha). El pulgar viaja hacia su tecla mientras tocan el 2 y el 3.

**Paso a paso:**

1. Sin sonido, practica el gesto: dedo 3 apoyado y pulgar que se desliza bajo él hasta la tecla siguiente, diez veces.
2. Toca el compás inicial con cada mano sola, lento, repitiéndolo las cuatro veces indicadas.
3. Metrónomo a ♩ = 60: ejercicio completo con cada mano sola, con pulso estable.
4. Escucha que la nota del pulgar no suene más fuerte ni llegue tarde respecto al 3.
5. Junta las manos a ♩ = 60, primero en tramos de dos compases.
6. Variante: una pasada en staccato ligero y otra piano con legato muy cuidado.
7. Sube de 4 en 4 cuando dos pasadas salgan parejas; objetivo ♩ = 92.

**Errores comunes:**

- Torcer la muñeca hacia el pulgar al pasarlo: mira la mano; la muñeca se mantiene alineada y el pulgar hace el movimiento.
- Golpe del pulgar: tócalo con el borde y más ligero, y escúchalo en una grabación.
- Levantar la mano para hacer sitio al pulgar: deja la mano a la misma altura y mantén el 3 apoyado hasta que el pulgar llegue.

**Tempo:** Pulso en negra con puntillo (6/8). Empieza en ♩. = 40. Objetivo: ♩. = 60–66 (Hanon imprime ♩. = 40 a 72).

**Está listo cuando:** Tocas el ejercicio completo a ♩ = 92 con manos juntas y una línea ligada sin acentos en el pulgar.

#### Hanon 34 — Paso del pulgar bajo el dedo 4

Paso del pulgar bajo el dedo 4: en 2/4, el primer compás se repite diez veces, como indica la partitura, con la digitación 1-2-3-4-1-4-3-2 en la derecha y 1-4-3-2-1-2-3-4 en la izquierda; después la figura sube y baja por el teclado. Hanon imprime ♩ = 60 a 108.

**Para qué sirve:** El paso bajo el 4 aparece en escalas que empiezan en tecla negra y en arpegios; te da libertad para recorrer el teclado sin cortes en las frases.

**Antes de empezar:**

- Siéntate con espacio para que el codo acompañe un poco el desplazamiento lateral.
- Mano curva y muñeca blanda; el pulgar tiene que recorrer más distancia que en el n.º 33, así que necesita estar muy suelto.
- Digitación impresa: 1-2-3-4-1-4-3-2 (derecha). Prepara el pulgar mientras tocan el 3 y el 4.

**Paso a paso:**

1. Sin sonido, practica el gesto del pulgar pasando bajo el 4 apoyado, diez veces, sin mover el codo bruscamente.
2. Toca el compás inicial con cada mano sola, lento, repitiéndolo las diez veces indicadas.
3. Metrónomo a ♩ = 60: ejercicio completo con cada mano sola.
4. Escucha la unión entre el 4 y el pulgar: ni hueco ni acento.
5. Junta las manos a ♩ = 60 en tramos cortos y luego completo.
6. Variantes: ritmo con puntillo y una pasada piano.
7. Sube de 4 en 4 cuando dos pasadas salgan parejas; objetivo ♩ = 92 (el 108 impreso no hace falta).

**Errores comunes:**

- La mano entera salta para dejar pasar al pulgar: practica el gesto más lento, con el 4 apoyado hasta que el pulgar llega.
- Muñeca torcida hacia fuera tras el paso: obsérvala; vuelve a alinearla en cuanto toca el pulgar.
- Tensión entre pulgar e índice por la distancia: relaja la mano después de cada paso y no fuerces la apertura.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 92.

**Está listo cuando:** Tocas el ejercicio completo a ♩ = 92 con manos juntas y el paso bajo el 4 es tan liso como bajo el 3.

#### Hanon 38 — Preparación para las escalas

Ejercicio preparatorio para el estudio de las escalas: en 2/4 y semicorcheas, cada compás es un fragmento de escala de ocho notas que sube un grado por compás; la digitación impresa es 1-2-3-1-2-3-4-5 en la derecha y 5-4-3-2-1-3-2-1 en la izquierda, con el pulgar pasando bajo el 3. Termina en una nota larga.

**Para qué sirve:** Es el paso intermedio entre el paso del pulgar aislado y las escalas completas: aprendes a tocar una escala ligada y pareja, que aparece en casi todo el repertorio.

**Antes de empezar:**

- Siéntate frente al centro, con espacio para que los codos se muevan con la mano.
- Mano curva; el pulgar suelto bajo la palma, preparado para pasar.
- Digitación impresa: derecha 1-2-3-1-2-3-4-5 al subir; izquierda 5-4-3-2-1-3-2-1, donde el 3 cruza por encima del pulgar.

**Paso a paso:**

1. Toca el primer compás con cada mano sola, lento, cuidando que el paso del pulgar (derecha) y el cruce del 3 (izquierda) no se oigan.
2. Metrónomo a ♩ = 60: ejercicio completo con cada mano sola.
3. Escucha que la escala suene como una línea continua, sin acento en el pulgar ni hueco en el cruce.
4. Junta las manos a ♩ = 60. Fíjate en que los pasos de pulgar de las dos manos no coinciden: tócalo despacio hasta que esa diferencia te resulte natural.
5. Variantes: crescendo al subir y diminuendo al bajar, y una pasada en staccato ligero.
6. Sube de 4 en 4 cuando salga limpio dos veces; objetivo ♩ = 92.

**Errores comunes:**

- Acento en el pulgar: grábate; si lo oyes, tócalo más ligero y prepáralo antes.
- El codo izquierdo se abre al cruzar el 3 sobre el pulgar: haz el cruce más cerca de las teclas, con la mano casi plana sobre ellas.
- Desorden al juntar manos porque los pasos no coinciden: practica solo los dos primeros compases juntos, muy lento, hasta que encajen.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 92.

**Está listo cuando:** Tocas el ejercicio completo a ♩ = 92 con manos juntas como una escala ligada, sin acentos en los pasos de pulgar.

#### Hanon 41 — Arpegios de tríadas en las 24 tonalidades

Arpegios sobre las tríadas en las 24 tonalidades: en 3/4, cada tonalidad (Do mayor, La menor, Fa mayor…) es un arpegio de tríada que sube varias octavas y baja, cerrado con una nota final. En Do mayor la digitación impresa es 1-2-3-1… en la derecha y 5-4-2-1… en la izquierda. Hanon imprime ♩ = 60 a 108.

**Para qué sirve:** Los arpegios te dan el paso del pulgar a distancia y la apertura de la mano; aparecen en acompañamientos, cadencias y pasajes brillantes de tus obras.

**Antes de empezar:**

- Siéntate un poco más atrás para que los brazos puedan recorrer varias octavas sin chocar con el cuerpo.
- Mano abierta pero curva; el pulgar suelto y preparado para pasar bajo el 3 (o el 4, según la digitación impresa de cada tonalidad).
- El brazo guía la mano lateralmente con un movimiento continuo; la muñeca acompaña sin sacudidas.

**Paso a paso:**

1. Elige una o dos tonalidades por sesión (empieza por Do mayor y La menor) y lee su digitación impresa.
2. Toca una octava del arpegio con cada mano sola, lento, cuidando el paso del pulgar.
3. Metrónomo a ♩ = 50: el arpegio completo con cada mano sola.
4. Escucha que el paso del pulgar no produzca hueco ni acento y que el arpegio suene como un arco.
5. Junta las manos a ♩ = 50 cuando cada mano por separado salga limpia.
6. Haz una pasada con crescendo al subir y diminuendo al bajar.
7. Sube de 4 en 4 cuando salga limpio dos veces; objetivo ♩ = 80. Añade nuevas tonalidades poco a poco.

**Errores comunes:**

- Saltos o cortes al pasar el pulgar: practica solo el paso (las dos o tres notas alrededor) en bucle lento.
- Mano demasiado estirada en todo el arpegio: abre lo justo para alcanzar y relaja en cuanto tocas.
- Codo pegado al cuerpo que frena el desplazamiento: deja que el brazo se mueva lateralmente con la mano.

**Tempo:** Empieza en ♩ = 50. Objetivo: ♩ = 80.

**Está listo cuando:** Tocas los arpegios de las tonalidades del plan a ♩ = 80 con manos juntas, ligados y sin acentos en el pulgar.

#### Hanon 42 — Arpegios de séptima disminuida

Extensión de los dedos en arpegios de séptima disminuida: cada fragmento empieza con un compás que se repite cuatro veces, como indica la partitura (derecha 1-2-3-4-5-4-3-2, izquierda 5-4-3-2-1), y sigue con el arpegio por varias octavas. Hanon imprime ♩ = 60 a 120.

**Para qué sirve:** La séptima disminuida reparte la mano en intervalos iguales de tercera menor y obliga a abrirla de forma pareja; prepara arpegios y acordes abiertos del repertorio romántico.

**Antes de empezar:**

- Siéntate con espacio para recorrer varias octavas con los brazos.
- Mano abierta de forma uniforme sobre las cuatro notas del acorde, dedos curvos.
- El brazo lleva la mano lateralmente; el pulgar pasa sin que la muñeca se tuerza.

**Paso a paso:**

1. Toca el acorde de séptima disminuida de cada fragmento como bloque para sentir la apertura de la mano.
2. Toca el compás que se repite, con cada mano sola, las cuatro veces indicadas, lento.
3. Metrónomo a ♩ = 50: el fragmento completo con cada mano sola.
4. Escucha que las cuatro notas del acorde suenen iguales y que el paso a la octava siguiente sea ligado.
5. Junta las manos a ♩ = 50.
6. Sube de 4 en 4 cuando salga limpio dos veces; objetivo ♩ = 80.

**Errores comunes:**

- Dolor o tirantez por la apertura: abre lo justo, relaja después de cada grupo y acorta la sesión si aparece molestia.
- Hueco al pasar a la octava siguiente: practica el enlace entre el último dedo y el pulgar en bucle.
- Notas de distinto volumen porque el 4 o el 5 se quedan cortos: practica el acorde en bloque y luego quebrado.

**Tempo:** Empieza en ♩ = 50. Objetivo: ♩ = 80.

**Está listo cuando:** Tocas los fragmentos a ♩ = 80 con manos juntas, ligados y sin tensión en la apertura.

#### Hanon 44 — Notas repetidas en grupos de tres

Primer ejercicio de la Parte III: notas repetidas en grupos de tres, en 4/4, con la digitación 3-2-1 en cada grupo (también en la izquierda). Hanon pide levantar los dedos alto y con precisión, sin levantar la mano ni la muñeca, y pasar al resto del ejercicio cuando los cuatro primeros compases estén bien aprendidos. Imprime ♩ = 60 a 120.

**Para qué sirve:** Cambiar de dedo en la nota repetida da notas repetidas claras y rápidas sin cansarte; las encontrarás en acompañamientos, melodías con notas repetidas y pasajes de estilo clásico.

**Antes de empezar:**

- Siéntate frente al centro, muñeca a la altura de los nudillos y antebrazo relajado.
- Dedos curvos; los tres dedos 3-2-1 se preparan sobre la misma tecla, uno tras otro.
- Cada dedo toca y se retira hacia la palma, dejando la tecla libre para el siguiente; la mano y la muñeca no suben.

**Paso a paso:**

1. Toca un solo grupo 3-2-1 sobre una tecla con cada mano, muy lento, sintiendo cómo cada dedo deja la tecla al siguiente.
2. Aprende los cuatro primeros compases con cada mano sola, como pide Hanon, antes de seguir.
3. Metrónomo a ♩ = 60: los cuatro primeros compases con manos separadas y luego juntas.
4. Escucha que las tres notas de cada grupo suenen iguales; la del pulgar no debe salir más fuerte.
5. Continúa con el resto del ejercicio a ♩ = 60.
6. Variante: toca alguna pasada piano y ligera, desde la superficie de la tecla.
7. Sube de 4 en 4 cuando dos pasadas salgan parejas; objetivo ♩ = 88.

**Errores comunes:**

- La muñeca rebota en cada grupo: mírala; si sube, toca más lento y deja que solo los dedos trabajen.
- La tecla no vuelve a subir y la nota siguiente no suena: retira cada dedo hacia la palma en cuanto toca, sin quedarte apoyado.
- El pulgar golpea más fuerte: graba y equilibra tocando el pulgar más ligero.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 88.

**Está listo cuando:** Tocas el ejercicio completo a ♩ = 88 con manos juntas, con los tres sonidos de cada grupo iguales y la muñeca quieta.

#### Hanon 45 — Notas repetidas en grupos de dos

Notas repetidas en grupos de dos con los cinco dedos: cada nota se toca dos veces con dos dedos distintos y ligada en parejas; la partitura indica acentuar la primera de cada pareja y ofrece varias digitaciones. Hanon pide estudiar la primera digitación hasta dominarla, practicar igual cada una de las siguientes y luego tocar el ejercicio entero sin parar. Imprime ♩ = 60 a 108.

**Para qué sirve:** Trabaja el cambio de dedo con todas las combinaciones posibles y la articulación en parejas (fuerte-débil), que da forma a muchas frases del repertorio.

**Antes de empezar:**

- Siéntate frente al centro, muñeca a la altura de los nudillos, antebrazo suelto.
- Dedos curvos; prepara el segundo dedo de cada pareja muy cerca de la tecla.
- La primera nota de la pareja se apoya con un poco de peso y la segunda sale más ligera, con la muñeca subiendo suavemente al final.

**Paso a paso:**

1. Elige la primera digitación y toca un par de compases con cada mano sola, lento.
2. Practica el gesto de la pareja: primera con acento y peso, segunda ligera y soltando.
3. Metrónomo a ♩ = 60: el ejercicio completo con la primera digitación, manos separadas y luego juntas.
4. Escucha que la repetición sea clara y que el acento caiga siempre en la primera de la pareja.
5. En sesiones siguientes, añade una nueva digitación cada vez, como pide Hanon.
6. Sube de 4 en 4 cuando dos pasadas salgan limpias; objetivo ♩ = 88.

**Errores comunes:**

- La segunda nota de la pareja no suena porque la tecla no ha subido: deja que la tecla vuelva antes de tocarla de nuevo, retirando el primer dedo.
- Acento fuera de lugar o parejo en todas las notas: exagera la diferencia fuerte-débil a tempo lento.
- Mezclar digitaciones: estudia una sola por sesión hasta dominarla.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 88.

**Está listo cuando:** Tocas el ejercicio a ♩ = 88 con manos juntas en la digitación que estés trabajando, con repeticiones claras y el acento en su sitio.

#### Hanon 48 — Ejercicio de muñeca: terceras y sextas sueltas

Ejercicio de muñeca: terceras y sextas destacadas (staccato), en 4/4 y semicorcheas, con las terceras digitadas 2-4 al principio. Hanon pide levantar bien la muñeca después de cada golpe, mantener los brazos perfectamente quietos, muñeca flexible y dedos firmes sin rigidez, y practicar los cuatro primeros compases hasta lograr un movimiento de muñeca fácil antes de seguir. Imprime ♩ = 40 a 84.

**Para qué sirve:** Desarrolla el staccato de muñeca para dobles notas y acordes; es la preparación directa de las octavas y de los acordes repetidos que aparecen en las obras.

**Antes de empezar:**

- Siéntate a una altura que deje la muñeca un poco por encima de las teclas y los brazos colgando sueltos de los hombros.
- Dedos firmes en la forma del intervalo (2-4 para las terceras), sin rigidez.
- El movimiento es de la muñeca, como al sacudir agua de la mano: sube después de cada golpe y vuelve a caer, mientras el brazo queda quieto.

**Paso a paso:**

1. Sin tocar, haz el gesto de muñeca sobre la tapa del piano: caer, rebotar y subir, diez veces.
2. Toca una sola tercera repetida con cada mano, lento, cuidando que suba la muñeca y no el brazo.
3. Practica los cuatro primeros compases a ♩ = 60, manos separadas, hasta que el movimiento salga fácil, como pide Hanon.
4. Junta las manos y escucha que las dos notas de cada intervalo suenen juntas y cortas.
5. Continúa con el resto del ejercicio, incluidas las sextas, a ♩ = 60.
6. Si notas cansancio en el antebrazo, baja el tempo o para unos segundos; el cansancio indica rigidez.
7. Sube de 4 en 4 cuando salga suelto dos veces seguidas; objetivo ♩ = 92.

**Errores comunes:**

- El brazo entero sube y baja: obsérvate en un espejo; si se mueve el codo, vuelve al gesto sin teclas y empieza más lento.
- Las dos notas del intervalo no suenan juntas: deja los dedos ya formados antes de caer y toca más piano.
- Rigidez y cansancio rápido: para, sacude la mano y retoma más lento y piano.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 92.

**Está listo cuando:** Tocas el ejercicio completo a ♩ = 92 con manos juntas, intervalos cortos y juntos, y la muñeca suelta sin cansancio.

#### Hanon 50 — Terceras ligadas

Terceras ligadas, en 4/4 y semicorcheas; la digitación impresa de la derecha es 1-3, 2-4, 3-5, 2-4, 1-3. Hanon recomienda estudiarlo con cuidado porque las terceras ocupan un lugar muy importante en la música difícil, y pide que todas las notas suenen iguales y muy claras. Imprime M.M. 40 a 84.

**Para qué sirve:** Las terceras ligadas te dan control de dos voces en una misma mano, algo que aparece en melodías a dos voces, acompañamientos y pasajes de dobles notas.

**Antes de empezar:**

- Siéntate frente al centro con la muñeca un poco elevada y el antebrazo suelto.
- Mano en posición de cinco dedos; las dos notas de cada tercera se tocan con dedos firmes y curvos.
- Para el legato, mantén una de las notas hasta que la siguiente tercera suene; la mano se balancea muy poco hacia el lado al que va.

**Paso a paso:**

1. Toca solo las terceras de la digitación impresa (1-3, 2-4, 3-5) como bloques, lento, con cada mano sola.
2. Practica el enlace entre dos terceras, en bucle, escuchando que no haya hueco.
3. Metrónomo a ♩ = 40: el ejercicio completo con cada mano sola.
4. Escucha que las dos notas de cada tercera suenen exactamente juntas y con el mismo volumen.
5. Junta las manos a ♩ = 40.
6. Variante: toca solo la voz superior ligada mientras la inferior suena más piano, y luego al revés.
7. Sube de 4 en 4 cuando salga parejo dos veces; objetivo ♩ = 72.

**Errores comunes:**

- Las dos notas de la tercera no caen juntas: deja los dos dedos preparados antes y toca más lento.
- Corte entre terceras: graba y escucha; si hay hueco, practica el enlace en bucle manteniendo una nota hasta que suene la siguiente.
- Tensión en la mano por apretar las dos notas: toca más piano y suelta la tecla una vez suena.

**Tempo:** Empieza en ♩ = 40. Objetivo: ♩ = 72.

**Está listo cuando:** Tocas el ejercicio completo a ♩ = 72 con manos juntas, terceras simultáneas, parejas y ligadas.

#### Hanon 51 — Preparación para escalas en octavas

Ejercicio preparatorio para las escalas en octavas, en 4/4: octavas repetidas que avanzan por el teclado. Hanon pide muñecas muy flexibles, dedos que toman la octava firmes pero sin rigidez y los dedos libres ligeramente curvados; repetir lentamente las tres primeras líneas hasta lograr un buen movimiento de muñeca y después acelerar, y si las muñecas se cansan, tocar más lento hasta que pase la fatiga y luego volver al tempo. Remite a las indicaciones del n.º 48 e imprime M.M. 40 a 84.

**Para qué sirve:** Construye la octava con muñeca suelta, la base de las octavas en melodía y en pasajes fuertes de tus obras, sin cansancio ni rigidez.

**Antes de empezar:**

- Siéntate a una altura que deje la muñeca un poco por encima de las teclas; brazos sueltos.
- Mano en forma de octava (1-5), firme pero no rígida; los dedos que no tocan, ligeramente curvos, sin tensarlos.
- El movimiento es de muñeca, como en el n.º 48: cae, rebota y sube, mientras el brazo se queda tranquilo.

**Paso a paso:**

1. Sin tocar, repasa el gesto de muñeca del n.º 48 sobre la tapa del piano.
2. Toca una octava repetida con cada mano, lento, cuidando que suba la muñeca y no el codo.
3. Practica las tres primeras líneas a ♩ = 50, manos separadas y luego juntas, hasta que el movimiento salga fácil, como pide Hanon.
4. Escucha que las dos notas de la octava suenen juntas y que la de arriba (derecha) tenga un poco más de presencia.
5. Continúa con el resto del ejercicio sin interrupción.
6. Si las muñecas se cansan, toca más lento hasta que pase y luego vuelve a subir, como indica Hanon.
7. Sube de 4 en 4 cuando salga suelto dos veces seguidas; objetivo ♩ = 80.

**Errores comunes:**

- Tocar las octavas con el brazo entero: obsérvate en un espejo; si el codo sube y baja, vuelve al gesto de muñeca lento.
- Mano rígida que se cansa en pocos compases: relaja los dedos que no tocan y toca más piano.
- Notas falsas por mirar solo una nota de la octava: fíjate en el pulgar (derecha) o en el 5 (izquierda) como guía.

**Tempo:** Empieza en ♩ = 50. Objetivo: ♩ = 80.

**Está listo cuando:** Tocas el ejercicio completo a ♩ = 80 con manos juntas, sin interrupción y sin cansancio en las muñecas.

#### Hanon 53 — Escalas en octavas en las 24 tonalidades

Escalas en octavas en las 24 tonalidades, empezando por Do mayor y La menor, en 4/4 y semicorcheas por varias octavas. Hanon pide practicar primero cada escala hasta tocarla con facilidad y luego las 24 sin interrupción; insiste en que el movimiento de muñeca es el único modo de tocar octavas sin rigidez, con flexibilidad, viveza y energía, y remite a los n.º 48 y 51. Imprime M.M. 40 a 84.

**Para qué sirve:** Une el staccato de muñeca y las escalas: te prepara para pasajes en octavas de las obras, con sonido lleno y sin cansarte.

**Antes de empezar:**

- Siéntate un poco más atrás para que los brazos recorran varias octavas con libertad.
- Mano en forma de octava, firme sin rigidez; la partitura indica algunas notas con el 4 (en general las teclas negras) en lugar del 5.
- Muñeca flexible como en los n.º 48 y 51; el brazo lleva la mano lateralmente sin rigidez.

**Paso a paso:**

1. Elige una o dos escalas por sesión, empezando por Do mayor y La menor, y lee la digitación impresa.
2. Toca la escala con cada mano sola, lento, solo con el pulgar (derecha) o el 5 (izquierda) para aprender el camino; luego añade la otra nota de la octava.
3. Metrónomo a ♩ = 40: escala en octavas con cada mano sola, movimiento de muñeca en cada nota.
4. Escucha que no haya cortes bruscos ni golpes al cambiar entre teclas blancas y negras.
5. Junta las manos a ♩ = 40.
6. Si notas cansancio, baja el tempo o para unos segundos, como en el n.º 51.
7. Sube de 4 en 4 cuando salga suelta dos veces; objetivo ♩ = 72. Añade tonalidades poco a poco.

**Errores comunes:**

- Octavas con el brazo rígido: vuelve al gesto de muñeca del n.º 48 y toca más piano.
- Notas falsas al cambiar de dirección o en teclas negras: practica el cambio aislado, mirando el pulgar como guía.
- Querer tocar las 24 de golpe: domina una o dos tonalidades por sesión antes de encadenarlas, como pide Hanon.

**Tempo:** Empieza en ♩ = 40. Objetivo: ♩ = 72.

**Está listo cuando:** Tocas las escalas en octavas de las tonalidades del plan a ♩ = 72 con manos juntas, sin rigidez ni cansancio.

### Czerny Op. 599

#### Czerny nº 1 — Do mayor, 4/4, pág. 3

Estudio de lectura en Do mayor y 4/4 con redondas y blancas: la mano derecha lee en la zona del Do central hacia arriba y la izquierda, también en clave de sol, toca debajo. Son dos partes de 8 compases, cada una con repetición, y las manos casi siempre se turnan o tocan notas largas a la vez. No hay matices ni palabra de tempo impresos.

**Para qué sirve:** Entrena a leer notas sin mirar las manos y a contar notas largas con pulso firme. Es la base para cualquier obra del recital: leer, contar y mantener la mano quieta en su posición.

**Antes de empezar:**

- Mano derecha en posición de Do: pulgar en el Do central, dedo 5 en Sol.
- Mano izquierda también en clave de sol: dedo 5 en el Do central y pulgar en Sol, una posición por debajo de la derecha.
- Marca con lápiz las notas donde cambia el dedo indicado, por ejemplo el 5 en la mano derecha.
- Recuerda que aquí la mano izquierda se lee en clave de sol, no en clave de fa.

**Paso a paso:**

1. Día 1: di en voz alta el nombre de cada nota de la mano derecha mientras marcas el pulso con la mano en la mesa.
2. Día 1: toca solo la mano derecha contando 1-2-3-4 en voz alta; la redonda dura los cuatro tiempos completos.
3. Día 2: toca solo la mano izquierda igual, nombrando las notas; es la que más cuesta porque está en clave de sol.
4. Día 3: manos juntas muy lento, sin parar aunque te equivoques, para entrenar la lectura continua.
5. Día 4: toca cada parte con su repetición sin mirar el teclado; mantén los ojos en la partitura.
6. Día 5: sube el metrónomo de 4 en 4 desde 60, solo si la vuelta anterior salió sin pausas.
7. Día 6 en adelante: busca un sonido cantado y parejo en todas las notas, sin golpear.

**Errores comunes:**

- Acortar las redondas: cuenta en voz alta y no levantes el dedo antes del tiempo 4.
- Mirar las manos y perder el lugar en la partitura: cubre el teclado con un pañuelo o mira solo la hoja.
- Confundir las notas de la izquierda por leerlas como clave de fa: escribe el nombre de las tres o cuatro primeras notas encima.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 96–108.

**Está listo cuando:** Tocas las dos partes con sus repeticiones a ♩ = 96 sin mirar las manos y sin detenerte.

#### Czerny nº 2 — Do mayor, 4/4, pág. 3

Estudio de lectura en Do mayor y 4/4 con redondas y blancas, ahora con la mano derecha en el registro agudo, con líneas adicionales por encima del pentagrama. La mano izquierda sigue en clave de sol con blancas en la zona central. Es más largo que el nº 1 y tiene varias partes con repetición; no hay matices impresos.

**Para qué sirve:** Entrena a leer notas con líneas adicionales agudas y a mover la mano a una nueva posición. Te ayuda en las obras donde la melodía sube al registro agudo.

**Antes de empezar:**

- Antes de tocar, ubica en el teclado el Do agudo (dos octavas sobre el Do central) y las notas con líneas adicionales.
- Escribe a lápiz el nombre de las notas con dos o más líneas adicionales la primera vez.
- Mano izquierda en posición de Do en clave de sol, alrededor del Do central.
- Marca los compases donde la mano derecha cambia de posición.

**Paso a paso:**

1. Día 1: lee en voz alta solo las notas agudas de la mano derecha, sin tocar, contando las líneas adicionales.
2. Día 1: toca la mano derecha sola, una parte cada vez, contando en voz alta.
3. Día 2: toca la mano izquierda sola; fíjate en los dedos 4 y 1 que sueltan la posición fija.
4. Día 3: manos juntas lento, parte por parte, sin parar.
5. Día 4: une todas las partes respetando las repeticiones.
6. Día 5: sube el metrónomo de 4 en 4 desde 60 cuando salga sin pausas.
7. Día 6: toca todo sin mirar las manos y con sonido parejo.

**Errores comunes:**

- Contar mal las líneas adicionales: escribe el nombre de la nota hasta que la reconozcas sin contar.
- Tensar el brazo al subir al agudo: acerca el cuerpo un poco hacia la derecha en lugar de estirar el brazo.
- Detenerte en los cambios de posición: prepara la mano en la nota larga anterior.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 96–108.

**Está listo cuando:** Lees y tocas todo el estudio a ♩ = 96 sin escribir nombres de notas y sin pausas.

#### Czerny nº 3 — Do mayor, 4/4, pág. 4

Estudio de lectura en Do mayor y 4/4 con blancas y redondas, donde la mano izquierda baja por debajo del pentagrama en clave de sol, con líneas adicionales graves. La mano derecha toca blancas en la zona central. Son dos partes de 8 compases con repetición.

**Para qué sirve:** Entrena a leer las notas graves con líneas adicionales y a conectar la clave de sol con la zona grave del teclado. Prepara la lectura de bajos en las obras del recital.

**Antes de empezar:**

- Ubica en el teclado las notas graves que lee la mano izquierda debajo del Do central.
- Escribe el nombre de las notas con líneas adicionales graves la primera vez.
- Mano derecha en posición de Sol o Do según el compás; marca los dedos que cambian de posición.

**Paso a paso:**

1. Día 1: nombra en voz alta todas las notas de la mano izquierda sin tocar.
2. Día 1: toca la mano izquierda sola primero, porque es la parte nueva de este estudio.
3. Día 2: toca la mano derecha sola contando en voz alta.
4. Día 3: manos juntas lento, una parte cada vez.
5. Día 4: toca las dos partes seguidas con repeticiones, sin mirar las manos.
6. Día 5: sube de 4 en 4 desde ♩ = 60 hasta llegar al objetivo.
7. Día 6: cuida que las blancas suenen todo su valor y que el paso de una a otra sea ligado.

**Errores comunes:**

- Leer las notas graves por adivinanza: di siempre el nombre antes de tocar la nota.
- Soltar las blancas antes de tiempo: cuenta 1-2 en cada blanca en voz alta.
- Bajar la vista al teclado para buscar las notas graves: memoriza la distancia desde el Do central.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 96–108.

**Está listo cuando:** Tocas el estudio a ♩ = 96 leyendo la mano izquierda sin nombres escritos.

#### Czerny nº 5 — Do mayor, 4/4, pág. 4

Estudio en Do mayor y 4/4 donde la mano derecha toca negras, muchas en figuras de acorde quebrado (por ejemplo Sol-Do-Mi-Sol) y otras por grado conjunto, sobre blancas y una redonda final en la mano izquierda, también en clave de sol. Son dos partes de 8 compases con repetición.

**Para qué sirve:** Entrena la independencia entre una mano que se mueve en negras y otra que sostiene notas largas, y los primeros saltos pequeños dentro de la mano. Es la base de melodía con acompañamiento de casi todas las obras.

**Antes de empezar:**

- Marca los compases donde la mano derecha abre la mano para un acorde quebrado (dedos 1-2-4-5).
- La mano izquierda sostiene blancas; marca dónde cambia de dedo.
- Fíjate en la digitación del primer compás: 1-2-4-5 ya abre la mano.

**Paso a paso:**

1. Día 1: toca la mano derecha sola, lento, diciendo los dedos en voz alta.
2. Día 1: repite los compases con acorde quebrado hasta que la mano los encuentre sin mirar.
3. Día 2: toca la mano izquierda sola, contando 1-2 por blanca.
4. Día 3: manos juntas a ♩ = 60, una parte cada vez.
5. Día 4: busca un legato real en la mano derecha: un dedo no se levanta hasta que baja el siguiente.
6. Día 5: sube de 4 en 4 el metrónomo mientras salga parejo.
7. Día 6: toca todo sin parar con repeticiones y sonido redondo.

**Errores comunes:**

- Negras desiguales cuando la mano se abre: practica el compás lento con metrónomo y escucha que todas duren igual.
- Cortar las blancas de la izquierda al moverse la derecha: mira por un momento la mano izquierda y comprueba que la tecla sigue abajo.
- Tocar con dedos planos y sin fuerza: curva un poco los dedos y toca con la yema.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 96–108.

**Está listo cuando:** Tocas las dos partes a ♩ = 96 con negras parejas y legato en la mano derecha.

#### Czerny nº 6 — Do mayor, 4/4, pág. 5

Estudio en Do mayor y 4/4 de negras y blancas donde las dos manos se reparten el movimiento: a veces canta la derecha y a veces la izquierda toca negras en clave de sol, bajando con líneas adicionales graves. Son dos partes de 8 compases con repetición.

**Para qué sirve:** Entrena a pasar el protagonismo de una mano a la otra y a dar a la mano izquierda la misma claridad que a la derecha. Sirve para los pasajes del recital donde la izquierda lleva la melodía.

**Antes de empezar:**

- Marca con un color los compases donde la mano izquierda toca negras (por ejemplo los compases 2 y 6 de la primera parte).
- Mano izquierda en clave de sol: ubica las notas graves con líneas adicionales antes de empezar.
- Revisa las digitaciones 5-4-3-2 y 1-2-3-4 de la izquierda en la segunda parte.

**Paso a paso:**

1. Día 1: toca la mano izquierda sola primero, porque es la que tiene la lectura más difícil y las negras nuevas.
2. Día 1: luego la mano derecha sola, contando en voz alta.
3. Día 2: manos juntas muy lento, escuchando que la mano que tiene negras suene un poco más.
4. Día 3: une las dos partes con repeticiones sin detenerte.
5. Día 4: trabaja el legato en las negras de ambas manos.
6. Día 5: sube el metrónomo de 4 en 4 desde 60.
7. Día 6: toca de principio a fin sin mirar las manos.

**Errores comunes:**

- La mano izquierda suena más débil o desigual: tócala sola con metrónomo hasta que suene igual que la derecha.
- Perder el pulso cuando pasa la melodía de una mano a la otra: cuenta en voz alta en esos compases.
- Leer mal las notas graves: escribe el nombre de las que dudes.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 96–108.

**Está listo cuando:** Las negras de ambas manos suenan iguales de claras a ♩ = 96 sin perder el pulso.

#### Czerny nº 8 — Do mayor, 4/4, pág. 5

Estudio en Do mayor y 4/4 de acordes de tres notas en la mano derecha, en redondas y blancas, con la mano izquierda en blancas en clave de sol. La primera parte tiene 4 compases y la segunda 8, ambas con repetición.

**Para qué sirve:** Entrena a tocar acordes con las tres notas a la vez y con el mismo volumen. Te prepara para los acordes y finales de frase de las obras del recital.

**Antes de empezar:**

- Lee la digitación de cada acorde (de abajo arriba, por ejemplo 1-3-5 o 1-2-5) y márcala si dudas.
- Prepara la forma de la mano en el aire antes de bajar al acorde.
- Marca los acordes donde cambia la digitación respecto al anterior.

**Paso a paso:**

1. Día 1: toca solo los acordes de la mano derecha, uno a uno, comprobando que las tres notas bajen juntas.
2. Día 1: practica el paso de un acorde al siguiente sin mirar, preparando la mano durante la nota larga.
3. Día 2: toca la mano izquierda sola contando en voz alta.
4. Día 3: manos juntas lento, una parte cada vez.
5. Día 4: escucha que ninguna nota del acorde se escape antes ni suene más fuerte.
6. Día 5: sube el metrónomo de 4 en 4 desde 60.
7. Día 6: toca todo con sonido lleno pero sin golpear, usando el peso del brazo.

**Errores comunes:**

- Acordes desparejos, con una nota antes que otra: toca el acorde lento y deja caer la mano entera, no los dedos uno a uno.
- Golpear los acordes: deja caer el peso del brazo relajado y suelta la muñeca después.
- Cortar el acorde antes de tiempo al preparar el siguiente: cuenta la redonda completa.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 96–108.

**Está listo cuando:** Todos los acordes suenan juntos y parejos a ♩ = 96 sin mirar el teclado.

#### Czerny nº 9 — Do mayor, 4/4, pág. 5

Estudio en Do mayor y 4/4 con una melodía en negras y blancas en la mano derecha sobre acordes tenidos en redonda en la mano izquierda, escritos en clave de sol. Son dos partes de 4 compases, cada una con repetición.

**Para qué sirve:** Entrena a sostener un acorde con una mano mientras la otra canta una melodía ligada. Es el modelo más simple de melodía acompañada, presente en todo el repertorio.

**Antes de empezar:**

- Revisa la digitación de cada acorde de la izquierda (por ejemplo 1-2-4 o 1-3-5) y márcala.
- Mano derecha en posición de Do; marca los dedos 1-3-5 de los arpegios del primer compás.
- Busca dónde la melodía repite notas, en la segunda parte.

**Paso a paso:**

1. Día 1: toca solo los acordes de la mano izquierda, comprobando que las tres notas bajen juntas y duren cuatro tiempos.
2. Día 1: toca la mano derecha sola con legato.
3. Día 2: manos juntas lento; deja el acorde abajo mientras la derecha se mueve.
4. Día 3: equilibra el volumen: acorde más suave, melodía un poco más presente.
5. Día 4: une las dos partes con repeticiones.
6. Día 5: sube de 4 en 4 desde ♩ = 60.
7. Día 6: toca todo sin parar con la melodía cantando por encima.

**Errores comunes:**

- Soltar el acorde cuando la derecha toca: mira la izquierda y confirma que las teclas siguen abajo hasta el compás siguiente.
- El acorde tapa la melodía: toca el acorde más suave, con menos peso.
- Notas repetidas cortadas o desiguales: deja subir la tecla a la mitad y vuelve a bajar con el mismo dedo.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 96–108.

**Está listo cuando:** La melodía canta clara por encima de acordes tenidos y suaves a ♩ = 96.

#### Czerny nº 11 — Do mayor, 4/4, pág. 6

Primer estudio de la sección para los 5 dedos con mano quieta: la mano derecha toca negras ligadas en frases largas, sin mover la mano de su posición, sobre acordes tenidos en redonda de la mano izquierda, en clave de sol. Son dos partes de 8 compases con repetición y ligaduras largas.

**Para qué sirve:** Entrena la independencia de los cinco dedos con la mano quieta y el legato de frase larga. Es la base de las melodías ligadas y cantadas del recital.

**Antes de empezar:**

- Mano derecha fija en posición de Do (1 en Do, 5 en Sol): no la muevas en todo el estudio.
- Revisa la digitación de cada acorde de la izquierda; en algunos compases cambia (1-3-5, 1-2-4).
- Marca con lápiz dónde empieza y termina cada ligadura larga: son las frases.
- Nota los compases con dos acordes de blanca en la izquierda.

**Paso a paso:**

1. Día 1: toca la mano derecha sola, lento, sin levantar ningún dedo antes de que baje el siguiente.
2. Día 1: escucha que no haya huecos entre notas y que no se queden dos notas sonando juntas.
3. Día 2: toca solo los acordes de la izquierda y practica los cambios de acorde sin mirar.
4. Día 3: manos juntas a ♩ = 60, una frase cada vez.
5. Día 4: da forma a cada ligadura: crece un poco hacia el centro y termina más suave.
6. Día 5: sube el metrónomo de 4 en 4.
7. Día 6: toca las dos partes con repeticiones y con la mano derecha quieta.

**Errores comunes:**

- Mover la muñeca o el brazo para tocar cada nota: apoya una moneda imaginaria sobre el dorso y que no se caiga.
- Dedos 4 y 5 débiles: tócalos un poco más y escucha que suenen igual que el 2 y el 3.
- Huecos en el legato: practica más lento y conecta cada nota con la siguiente.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 96–108.

**Está listo cuando:** Tocas el estudio a ♩ = 96 con legato continuo y la mano derecha quieta.

#### Czerny nº 12 — Do mayor, 4/4, pág. 6

Estudio en Do mayor y 4/4 de corcheas continuas en la mano derecha en posición fija de cinco dedos, con algunas negras y notas repetidas, sobre acordes tenidos de redonda en la mano izquierda, en clave de sol. Son dos partes de 8 compases con repetición.

**Para qué sirve:** Entrena la igualdad de los dedos en corcheas con la mano quieta. Es el paso entre el legato lento y los pasajes rápidos del repertorio.

**Antes de empezar:**

- Mano derecha fija en posición de Do; solo se mueven los dedos.
- Marca la digitación del bajo de cada acorde (4 o 5) en la izquierda.
- Marca los compases con notas repetidas en la derecha, por ejemplo los cuatro Sol con dedo 5 de la segunda parte.

**Paso a paso:**

1. Día 1: toca la mano derecha sola en negras, como si fueran lentas, para aprender las notas.
2. Día 2: tócala ya en corcheas, contando 1-y-2-y en voz alta.
3. Día 2: practica el compás con notas repetidas por separado hasta que salgan iguales.
4. Día 3: toca solo la mano izquierda con sus cambios de acorde.
5. Día 4: manos juntas a ♩ = 60, una parte cada vez.
6. Día 5: sube el metrónomo de 4 en 4, sin pasar al siguiente número hasta que las corcheas salgan parejas.
7. Día 6: toca todo con legato y sin acentos.

**Errores comunes:**

- Corcheas apuradas o irregulares: usa el metrónomo y cuenta 1-y-2-y.
- Acento en el pulgar: toca el pulgar más ligero y escucha que no sobresalga.
- Soltar el acorde de la izquierda: comprueba que la redonda dure todo el compás.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 96–108.

**Está listo cuando:** Las corcheas salen parejas y ligadas a ♩ = 96 con la mano quieta.

#### Czerny nº 14 — Do mayor, 4/4, pág. 7

Estudio en Do mayor y 4/4 con terceras en la mano derecha en negras, blancas y redondas, sobre un bajo Alberti continuo en corcheas en la mano izquierda (por ejemplo Do-Sol-Mi-Sol), escrito en clave de sol. Son dos partes de 8 compases con repetición.

**Para qué sirve:** Entrena el bajo Alberti parejo y suave junto con terceras tocadas a la vez en la derecha. Es el acompañamiento típico del estilo clásico que aparece en el repertorio del recital.

**Antes de empezar:**

- Marca la digitación del bajo Alberti: 5-1-3-1 en la mayoría de los compases, 5-1-2-1 en otros.
- Las terceras de la derecha usan sobre todo 1-3 y 2-4; márcalas.
- Marca los compases donde cambia la nota grave del Alberti.

**Paso a paso:**

1. Día 1: toca la mano izquierda sola primero, porque el Alberti debe salir automático antes de juntar.
2. Día 1: busca que la nota grave suene un poco más y las otras tres más suaves.
3. Día 2: toca la mano derecha sola, comprobando que las dos notas de cada tercera bajen juntas.
4. Día 3: manos juntas a ♩ = 60, una parte cada vez.
5. Día 4: escucha el balance: terceras claras, Alberti como un fondo suave.
6. Día 5: sube de 4 en 4 el metrónomo.
7. Día 6: toca todo sin parar con la muñeca suelta en el Alberti.

**Errores comunes:**

- El Alberti suena fuerte y golpeado: toca desde la tecla, con una pequeña rotación de muñeca y sin levantar los dedos.
- Terceras desparejas: toca cada tercera lenta y deja caer la mano entera.
- Perder el pulso al juntar manos: vuelve a ♩ = 60 y cuenta en voz alta.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 96–108.

**Está listo cuando:** El bajo Alberti fluye suave y parejo bajo terceras claras a ♩ = 96.

#### Czerny nº 15 — Do mayor, 4/4, pág. 8

Estudio en Do mayor y 4/4 de tresillos de corchea continuos en la mano derecha, en figuras de acorde quebrado (Do-Mi-Sol) y de cinco dedos, sobre un bajo en redonda y acordes en negra en la mano izquierda, que empieza cada compás con silencio. La segunda parte agrupa los tresillos bajo ligaduras. Son dos partes de 8 compases con repetición.

**Para qué sirve:** Entrena la igualdad en tresillos y los acordes quebrados con la mano quieta. Sirve para pasajes de arpegio y tresillos del recital.

**Antes de empezar:**

- Marca la digitación del primer tresillo (1-3-5) y la de la segunda parte (4-2-5).
- Fíjate que la mano izquierda tiene el bajo en redonda y los acordes en negra tras un silencio.
- Escribe un 3 sobre los primeros grupos si te ayuda a recordar que son tresillos.

**Paso a paso:**

1. Día 1: di en voz alta 'tri-o-la' por cada tiempo mientras tocas la mano derecha sola y lento.
2. Día 2: repite la mano derecha con metrónomo, con una nota por cada sílaba y sin acento salvo la primera.
3. Día 2: toca la mano izquierda sola, sosteniendo el bajo mientras tocas los acordes.
4. Día 3: manos juntas a ♩ = 60; la primera nota de cada tresillo coincide con el acorde o el silencio.
5. Día 4: en la segunda parte, haz ligado cada grupo bajo la ligadura.
6. Día 5: sube el metrónomo de 4 en 4.
7. Día 6: toca todo sin parar con tresillos redondos.

**Errores comunes:**

- Los tresillos se convierten en corchea con dos semicorcheas: cuenta 'tri-o-la' en voz alta y escucha tres notas iguales.
- Mano tensa al abrir para Do-Mi-Sol: deja que la muñeca acompañe un poco el movimiento.
- Bajo de la izquierda soltado: comprueba que la redonda dure el compás completo.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 96–108.

**Está listo cuando:** Los tresillos suenan iguales y relajados a ♩ = 96 con el bajo sostenido.

#### Czerny nº 16 — Do mayor, 4/4, pág. 8

Estudio en Do mayor y 4/4 de grupos de semicorcheas de cinco dedos en la mano derecha, cada uno bajo una ligadura que termina en una nota staccato con punto, sobre un bajo de redonda y acordes en negra en la mano izquierda que empiezan tras un silencio. Son dos partes de 8 compases con repetición.

**Para qué sirve:** Entrena las semicorcheas parejas con la mano quieta y el gesto de ligar y soltar al final de un grupo. Es la articulación clásica de muchos pasajes rápidos del recital.

**Antes de empezar:**

- Mano derecha en posición fija; revisa la digitación del primer grupo (1-2-3-4-5).
- Marca con lápiz la nota con punto al final de cada grupo: ahí la mano se levanta.
- Mano izquierda: bajo en redonda y acordes en negra; marca el dedo 4 o 5 del bajo.

**Paso a paso:**

1. Día 1: toca la mano derecha sola en corcheas lentas para aprender notas y dedos.
2. Día 2: tócala en semicorcheas a ♩ = 50, contando 1-e-y-a.
3. Día 2: practica el gesto: ligado dentro del grupo y una pequeña subida de muñeca en la nota staccato.
4. Día 3: toca la mano izquierda sola, sosteniendo el bajo.
5. Día 4: manos juntas a ♩ = 50, una parte cada vez.
6. Día 5: sube de 4 en 4 el metrónomo mientras los grupos salgan parejos.
7. Día 6: toca todo sin parar con la articulación clara.

**Errores comunes:**

- Correr al final del grupo: usa el metrónomo y escucha que cada semicorchea dure igual.
- Hacer staccato golpeando: la nota con punto es corta pero ligera; suelta la muñeca hacia arriba.
- Ligar también la nota staccato con el grupo siguiente: exagera el corte al principio.

**Tempo:** Empieza en ♩ = 50. Objetivo: ♩ = 80–92.

**Está listo cuando:** Tocas el estudio a ♩ = 80 con semicorcheas parejas y finales staccato claros.

#### Czerny nº 17 — Do mayor, 4/4, pág. 9

Estudio en Do mayor y 4/4 de corcheas en la mano derecha que alternan notas sueltas y terceras, con ligaduras y grupos de terceras repetidas en staccato, sobre acordes tenidos de redonda en la mano izquierda, en clave de sol. Las figuras son corcheas, no semicorcheas. Son dos partes de 8 compases con repetición.

**Para qué sirve:** Entrena las notas repetidas y las terceras en staccato, y el contraste entre ligado y suelto. Te ayuda en los acompañamientos y pasajes con dobles notas del recital.

**Antes de empezar:**

- Revisa la digitación de las terceras: 1-3, 2-4, 3-5; márcala en el primer compás de cada figura.
- Marca con un color las terceras con punto (staccato) y con otro las ligadas.
- La mano izquierda solo sostiene acordes; marca el dedo del bajo.

**Paso a paso:**

1. Día 1: toca la mano derecha sola, lento, solo para aprender notas y dedos, todo ligado.
2. Día 2: añade la articulación: ligado donde hay ligadura, staccato corto donde hay punto.
3. Día 2: practica aparte las terceras repetidas en staccato, desde la muñeca y sin tensión.
4. Día 3: manos juntas a ♩ = 60 con los acordes tenidos.
5. Día 4: escucha que las dos notas de cada tercera suenen juntas.
6. Día 5: sube de 4 en 4 el metrónomo.
7. Día 6: toca todo sin parar con contraste claro entre ligado y staccato.

**Errores comunes:**

- Terceras desparejas: practica cada tercera sola y deja caer la mano entera.
- Staccato rígido desde el brazo: usa un pequeño rebote de muñeca.
- No hay diferencia entre ligado y staccato: exagera el contraste al principio.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 96–108.

**Está listo cuando:** Las terceras suenan juntas y el contraste ligado/staccato se oye claro a ♩ = 96.

#### Czerny nº 18 — Do mayor, 4/4, pág. 10

Estudio en Do mayor y 4/4 de semicorcheas continuas en la mano derecha, en figuras de cinco dedos que suben y bajan sin descanso, sobre acordes en negra y blanca en la mano izquierda, en clave de sol. Son dos partes de 8 compases con repetición y el último compás de cada parte termina en blanca.

**Para qué sirve:** Entrena la igualdad y la independencia de los dedos en semicorcheas sostenidas. Es la base de los pasajes rápidos y regulares del repertorio.

**Antes de empezar:**

- Revisa la digitación de los primeros grupos (1, 2, 3, 2 en cada tiempo) y márcala donde la mano se desplaza.
- Mano izquierda: lee cada acorde y su digitación de bajo (2-4, 3-5, 5, 4).
- Marca los compases de la segunda parte donde el pulgar toca notas repetidas (Do-Mi-Do).

**Paso a paso:**

1. Día 1: toca la mano derecha sola en corcheas, un compás cada vez.
2. Día 2: pasa a semicorcheas a ♩ = 50 con metrónomo.
3. Día 2: practica en ritmos: largo-corto y corto-largo, para fortalecer cada dedo.
4. Día 3: toca la mano izquierda sola, practicando los cambios de acorde.
5. Día 4: manos juntas a ♩ = 50, una parte cada vez.
6. Día 5: sube el metrónomo de 4 en 4 sin pasar al siguiente hasta que salga parejo dos veces seguidas.
7. Día 6: toca todo de corrido con sonido ligero y sin acentos.

**Errores comunes:**

- Dedos 4 y 5 que se quedan atrás: practica en ritmos y escucha la igualdad.
- Acelerar sin darte cuenta: deja el metrónomo puesto incluso cuando ya salga bien.
- Mano y antebrazo tensos: detente, sacude la mano y vuelve a empezar más lento.

**Tempo:** Empieza en ♩ = 50. Objetivo: ♩ = 80–92.

**Está listo cuando:** Tocas el estudio completo a ♩ = 80 con semicorcheas parejas y sin tensión.

#### Czerny nº 19 — Do mayor, 4/4, pág. 11

Primer estudio del paso del pulgar: la mano derecha toca escalas de Do mayor en corcheas, legato (así lo indica la partitura), pasando el pulgar por debajo y los dedos 2-3 por encima, sobre acordes en redonda y blanca en la mano izquierda, en clave de sol. Son dos partes de 8 compases con repetición.

**Para qué sirve:** Entrena el paso del pulgar para tocar escalas ligadas sin cortes. Es indispensable para las escalas y pasajes largos de las obras del recital.

**Antes de empezar:**

- Lee la digitación de escala: 1-2-3, pasa el pulgar en Fa, y sigue 1-2-3-4-5.
- Marca con un círculo cada nota donde pasa el pulgar o donde un dedo pasa por encima.
- Mano izquierda: revisa los acordes y su digitación de bajo.

**Paso a paso:**

1. Día 1: practica solo el paso del pulgar en Mi-Fa (3-1) y en Fa-Mi (1-3) lento, sin girar el codo.
2. Día 1: toca la mano derecha sola, en negras lentas, diciendo los dedos.
3. Día 2: toca la mano derecha en corcheas a ♩ = 60, buscando que no se oiga el cruce.
4. Día 3: toca la mano izquierda sola con sus cambios de acorde.
5. Día 4: manos juntas a ♩ = 60, una parte cada vez.
6. Día 5: sube el metrónomo de 4 en 4.
7. Día 6: toca todo legato, sin acento en el pulgar.

**Errores comunes:**

- Se oye un salto o acento cuando pasa el pulgar: prepara el pulgar debajo de la mano antes de que llegue su nota.
- Codo que se abre para pasar el pulgar: mantén el codo quieto y deja que la muñeca se desplace lateralmente.
- Usar otra digitación: respeta la impresa, porque es la base de todas las escalas.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 96–108.

**Está listo cuando:** Las escalas suenan legato y parejas a ♩ = 96 sin que se note el paso del pulgar.

#### Czerny nº 20 — Do mayor, 4/4, pág. 11

Estudio en Do mayor y 4/4, marcado legato, con una melodía en negras y blancas que salta y escalas en corcheas con paso del pulgar en la mano derecha, sobre bajo Alberti en corcheas en la mano izquierda, en clave de sol. Son dos partes de 8 compases con repetición.

**Para qué sirve:** Entrena a combinar el paso del pulgar en la derecha con un bajo Alberti estable en la izquierda. Es la textura típica del estilo clásico del recital.

**Antes de empezar:**

- Marca en la derecha cada paso del pulgar y cada dedo que cruza por encima.
- Revisa la digitación del Alberti: 5-1-2-1 y 4-1-2-1 en la izquierda.
- Marca los saltos de la melodía, como el Do agudo con dedo 5 del primer compás.

**Paso a paso:**

1. Día 1: toca la mano izquierda sola hasta que el Alberti salga automático y suave.
2. Día 2: toca la mano derecha sola, lento, cuidando el paso del pulgar en las escalas.
3. Día 2: repite aparte los compases con escalas en corcheas.
4. Día 3: manos juntas a ♩ = 60, una parte cada vez.
5. Día 4: busca legato en la melodía y un Alberti más suave que la melodía.
6. Día 5: sube de 4 en 4 el metrónomo.
7. Día 6: toca todo sin parar con la melodía cantando por encima.

**Errores comunes:**

- El Alberti tapa la melodía: toca la izquierda más suave y desde la tecla.
- Corte en el paso del pulgar: prepara el pulgar antes de su nota.
- Perder el pulso en los saltos de la melodía: mira la partitura y anticipa la nueva posición.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 96–108.

**Está listo cuando:** Tocas el estudio a ♩ = 96 con escalas ligadas y Alberti suave.

#### Czerny nº 21 — Do mayor, 3/4, pág. 12

Estudio en Do mayor y 3/4 con terceras y sextas ligadas en la mano derecha en blancas y negras, sobre un acompañamiento de vals en la mano izquierda: nota grave en el primer tiempo y dos acordes en los tiempos 2 y 3, en clave de sol. Son dos partes largas de 16 compases, cada una con repetición.

**Para qué sirve:** Entrena el legato en dobles notas y el acompañamiento de vals con el primer tiempo marcado. Te prepara para obras en tres tiempos con melodía en dobles notas.

**Antes de empezar:**

- Marca la digitación de las terceras y sextas (por ejemplo 3-5 a 2-4 a 1-3) para poder ligarlas.
- Mano izquierda: bajo con dedo 5 y acordes con 1-2 o 1-3; marca los cambios de posición.
- Señala los compases donde la mano derecha toca notas simples en vez de dobles.

**Paso a paso:**

1. Día 1: toca la mano izquierda sola: bajo un poco más fuerte, acordes suaves y cortos.
2. Día 2: toca la mano derecha sola y lenta, buscando conectar una doble nota con la siguiente con al menos una voz ligada.
3. Día 3: manos juntas a ♩ = 72, primera parte.
4. Día 4: manos juntas, segunda parte.
5. Día 5: une las dos partes y piensa en un pulso por compás.
6. Día 6: sube el metrónomo de 8 en 8.
7. Día 7: toca todo con el carácter de vals ligero.

**Errores comunes:**

- Los tres tiempos del vals suenan iguales: el primero se apoya un poco y los acordes son más ligeros.
- Dobles notas desparejas: deja caer la mano entera y escucha que las dos notas suenen juntas.
- Cortar entre dobles notas: usa la digitación marcada y practica el paso lento.

**Tempo:** Empieza en ♩ = 72. Objetivo: ♩ = 120–132.

**Está listo cuando:** Tocas el estudio a ♩ = 120 con dobles notas ligadas y un vals ligero en la izquierda.

#### Czerny nº 22 — Do mayor, 2/4, pág. 12

Estudio en Do mayor en 2/4 (no en 3/4) con escalas en semicorcheas en la mano derecha que suben y bajan con paso del pulgar, mezcladas con corcheas y notas repetidas, sobre acordes repetidos en corcheas en la mano izquierda, en clave de sol. Son dos partes de 8 compases con repetición.

**Para qué sirve:** Entrena las escalas rápidas con paso del pulgar sobre un acompañamiento de notas repetidas. Es la preparación para pasajes de escala del repertorio.

**Antes de empezar:**

- Marca en la derecha cada paso del pulgar y cada dedo que cruza (por ejemplo 5-3-4-5 al inicio).
- Marca las notas repetidas en corcheas de la segunda parte (cuatro Si con dedo 4).
- Mano izquierda: acordes en corcheas; marca la digitación del bajo.

**Paso a paso:**

1. Día 1: toca la mano derecha sola en corcheas lentas para aprender la digitación.
2. Día 2: practica cada escala de semicorcheas sola, en ritmos largo-corto, a ♩ = 50.
3. Día 2: toca la mano izquierda sola con acordes cortos y ligeros.
4. Día 3: manos juntas a ♩ = 50, primera parte.
5. Día 4: manos juntas, segunda parte.
6. Día 5: sube el metrónomo de 4 en 4.
7. Día 6: toca todo con escalas fluidas y acordes suaves.

**Errores comunes:**

- Escalas que se aceleran: usa metrónomo y cuenta 1-e-y-a.
- Golpe en el pulgar al pasar: prepáralo por debajo de la mano.
- Acordes repetidos fuertes: tócalos ligeros, desde la tecla.

**Tempo:** Empieza en ♩ = 50. Objetivo: ♩ = 80–92.

**Está listo cuando:** Las escalas suenan parejas y ligadas a ♩ = 80 sobre acordes ligeros.

#### Czerny nº 24 — Do mayor, 6/8, pág. 13

Estudio en Do mayor y 6/8 con terceras en corcheas en la mano derecha: tres terceras ligadas seguidas de tres en staccato, sobre acordes en blanca con puntillo en la mano izquierda, en clave de sol. En la segunda parte la izquierda toca negras con puntillo. Son dos partes de 8 compases con repetición.

**Para qué sirve:** Entrena las terceras en dos articulaciones distintas y el pulso en 6/8. Te ayuda en los pasajes con dobles notas y en las piezas en compás compuesto.

**Antes de empezar:**

- Marca la digitación de las terceras (1-3, 2-4, 3-5) de cada grupo.
- Marca con un color las terceras ligadas y con otro las de staccato.
- Piensa el 6/8 en dos pulsos de negra con puntillo por compás.

**Paso a paso:**

1. Día 1: cuenta el 6/8 en voz alta (1-2-3-4-5-6) y luego en dos pulsos mientras tocas la mano derecha sola, lenta.
2. Día 2: añade la articulación: tres ligadas y tres sueltas, cortas y ligeras.
3. Día 2: toca la mano izquierda sola, sosteniendo los acordes todo su valor.
4. Día 3: manos juntas a ♩. = 40, primera parte.
5. Día 4: manos juntas, segunda parte.
6. Día 5: sube el metrónomo de 4 en 4.
7. Día 6: toca todo con un balanceo en dos pulsos por compás.

**Errores comunes:**

- Terceras desparejas: deja caer la mano entera y escucha.
- Staccato pesado: usa un rebote corto de muñeca.
- 6/8 que suena como seis tiempos iguales: apoya un poco la primera y la cuarta corchea.

**Tempo:** Empieza en ♩. = 40. Objetivo: ♩. = 60–66.

**Está listo cuando:** Tocas el estudio a ♩. = 60 con terceras juntas y contraste claro entre ligado y staccato.

#### Czerny nº 25 — Do mayor, 4/4, pág. 13

Estudio en Do mayor y 4/4, marcado legato, con acordes y dobles notas en la mano derecha en negras y blancas, y algunas corcheas melódicas, sobre un bajo en corcheas de acorde quebrado en la mano izquierda, en clave de sol. Son dos partes de 8 compases con repetición.

**Para qué sirve:** Entrena a tocar acordes en la derecha mientras la izquierda mantiene un acompañamiento ligado. Es útil en obras con acordes sobre acompañamiento continuo.

**Antes de empezar:**

- Revisa la digitación de cada acorde de la derecha (1-3-5, 1-2-5, 2-4) y marca los cambios.
- Mano izquierda: lee la digitación de cada patrón de corcheas (3-5 y 1, 2-4 y 1).
- Marca los compases con silencio de negra al final de la frase.

**Paso a paso:**

1. Día 1: toca la mano izquierda sola, lento y ligado, hasta que salga sin pensar.
2. Día 2: toca solo los acordes de la mano derecha, comprobando que bajen juntos.
3. Día 3: manos juntas a ♩ = 60, primera parte.
4. Día 4: manos juntas, segunda parte.
5. Día 5: respeta los silencios del final de cada frase: levanta las manos a tiempo.
6. Día 6: sube el metrónomo de 4 en 4.
7. Día 7: toca todo con acordes plenos sin golpear y bajo suave.

**Errores comunes:**

- Acordes desparejos: toca la mano entera desde el peso del brazo.
- Bajo cortado al cambiar acordes en la derecha: escucha la izquierda en esos compases.
- Ignorar los silencios: cuenta el tiempo de silencio en voz alta.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 96–108.

**Está listo cuando:** Tocas el estudio a ♩ = 96 con acordes juntos y bajo ligado.

#### Czerny nº 28 — Do mayor, 4/4, pág. 14

Estudio en Do mayor y 4/4 de la sección de ejercicios que superan la octava: la mano derecha toca negras y corcheas con saltos amplios al registro agudo, bajo ligaduras, sobre bajo Alberti en corcheas en la mano izquierda, en clave de sol. Son dos partes de 8 compases con repetición.

**Para qué sirve:** Entrena los saltos y extensiones melódicas por encima de la octava sin perder el legato ni el pulso. Prepara los saltos de las obras del recital.

**Antes de empezar:**

- Marca cada salto grande de la derecha y su digitación (por ejemplo 1 a 5).
- Mano izquierda: digitación del Alberti 4-1-2-1 o 5-1-2-1.
- Antes de tocar, ubica en el teclado las notas agudas con líneas adicionales.

**Paso a paso:**

1. Día 1: toca la mano izquierda sola hasta que el Alberti salga parejo.
2. Día 2: practica en la derecha solo los saltos: toca la nota de partida, mira la de llegada y salta en un movimiento.
3. Día 2: toca la mano derecha completa lenta.
4. Día 3: manos juntas a ♩ = 60, primera parte.
5. Día 4: manos juntas, segunda parte.
6. Día 5: sube el metrónomo de 4 en 4.
7. Día 6: toca todo con la melodía cantada y los saltos seguros.

**Errores comunes:**

- Llegar tarde al salto: mueve la mano en cuanto sueltas la nota anterior.
- Golpear la nota aguda de llegada: llega cerca de la tecla y tócala con suavidad.
- Detener el Alberti mientras saltas: practica manos juntas lento sin parar la izquierda.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 96–108.

**Está listo cuando:** Tocas el estudio a ♩ = 96 con saltos seguros y Alberti continuo.

#### Czerny nº 29 — Do mayor, 6/8, pág. 15

Estudio en Do mayor y 6/8 con una melodía de amplio registro en la mano derecha, en negras y corcheas bajo ligaduras largas y con notas repetidas, sobre bajo y acordes en corcheas en la mano izquierda, en clave de sol. En la segunda parte la derecha toca una octava más alta, como indica la línea de puntos con 8. Son una parte de 8 compases y otra de 16, ambas con repetición.

**Para qué sirve:** Entrena los cambios de registro, las notas repetidas y el fraseo largo en 6/8. Te ayuda en melodías amplias y ligadas del recital.

**Antes de empezar:**

- Marca dónde empieza y termina la línea de puntos con 8: allí todo suena una octava más arriba.
- Marca las notas repetidas y su digitación (2-1-2-1-2-1 en la segunda parte).
- Piensa el 6/8 en dos pulsos por compás.

**Paso a paso:**

1. Día 1: toca la mano izquierda sola: bajo un poco más presente, acordes suaves.
2. Día 2: toca la mano derecha sola, primera parte, cuidando las ligaduras largas.
3. Día 3: mano derecha sola, segunda parte, en el registro una octava más alta.
4. Día 3: practica las notas repetidas alternando dedos como indica la partitura.
5. Día 4: manos juntas a ♩. = 40, una parte cada vez.
6. Día 5: sube el metrónomo de 4 en 4.
7. Día 6: toca todo con fraseo largo, pensando en dos pulsos por compás.

**Errores comunes:**

- Olvidar la octava alta: revisa la línea con 8 antes de empezar cada vez.
- Notas repetidas pesadas: cambia de dedo en cada nota y toca ligero.
- Frases cortadas en cada compás: sigue la ligadura completa sin levantar la mano.

**Tempo:** Empieza en ♩. = 40. Objetivo: ♩. = 60–66.

**Está listo cuando:** Tocas el estudio a ♩. = 60 con frases largas y notas repetidas ligeras.

#### Czerny nº 30 — Do mayor, 3/4, pág. 16

Estudio en Do mayor y 3/4 marcado p dolce, con una melodía en la mano derecha adornada con grupos rápidos de cuatro notas (fusas), sobre bajo en blanca con puntillo y corcheas quebradas en la mano izquierda, en clave de sol. La segunda parte cambia a f, p, mf, con reguladores, cresc. y vuelta a f. Son una parte de 8 compases y otra de 16, con repetición.

**Para qué sirve:** Entrena los grupos de adorno rápidos y ligeros dentro de una melodía cantada, y los contrastes de matices. Prepara la ornamentación y el fraseo expresivo del recital.

**Antes de empezar:**

- Marca la digitación de cada grupo rápido (por ejemplo 5-4-3-4 o 3-4-3-4).
- Marca en color todos los matices: p dolce, f, p, mf, cresc. y los reguladores.
- Mano izquierda: el bajo en blanca con puntillo se sostiene mientras siguen las corcheas.

**Paso a paso:**

1. Día 1: toca la mano izquierda sola, sosteniendo el bajo y con corcheas suaves.
2. Día 2: toca la mano derecha sola sin los grupos rápidos, solo la melodía principal.
3. Día 2: practica cada grupo rápido aparte, lento, y luego como un solo gesto ligero de la mano.
4. Día 3: mano derecha completa a ♩ = 60.
5. Día 4: manos juntas a ♩ = 60, primera parte; luego la segunda.
6. Día 5: añade los matices: el f es pleno pero no duro y el p dolce es cantado.
7. Día 6: sube el metrónomo de 4 en 4 mientras los grupos salgan claros.
8. Día 7: toca todo de principio a fin con los contrastes de matiz.

**Errores comunes:**

- Los grupos rápidos retrasan el pulso: piénsalos como adorno que cabe dentro de su tiempo, no como notas extra.
- Grupos rápidos fuertes o duros: tócalos más suaves que la melodía.
- Todo suena con el mismo volumen: exagera los matices marcados.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 96–108.

**Está listo cuando:** Tocas el estudio a ♩ = 96 con adornos ligeros, pulso estable y matices claros.

#### Czerny nº 31 — Do mayor, 3/4, pág. 16

Estudio en Do mayor y 3/4 marcado p y legato, con terceras, sextas y acordes en la mano derecha en negras y blancas, sobre un acompañamiento en tresillos de corchea de acorde quebrado en la mano izquierda, en clave de sol. Aparecen mf y f. Son dos partes de 8 compases con repetición.

**Para qué sirve:** Entrena las dobles notas en la derecha sobre un acompañamiento continuo en tresillos, con cambios de matiz. Te ayuda en obras con melodía en dobles notas y acompañamiento fluido.

**Antes de empezar:**

- Revisa la digitación de las dobles notas y acordes (5-1, 3-1, 4-2-1) y márcala.
- Mano izquierda: digitación del primer tresillo (4 en el bajo) y de los cambios de posición.
- Marca los matices p, mf y f.

**Paso a paso:**

1. Día 1: toca la mano izquierda sola, tresillos parejos y ligados, contando 'tri-o-la'.
2. Día 2: toca la mano derecha sola, comprobando que cada doble nota baje junta.
3. Día 3: manos juntas a ♩ = 72, primera parte.
4. Día 4: manos juntas, segunda parte.
5. Día 5: añade los matices p, mf y f.
6. Día 6: sube el metrónomo de 8 en 8.
7. Día 7: toca todo con la melodía por encima de tresillos suaves.

**Errores comunes:**

- Tresillos que se vuelven desiguales: cuenta 'tri-o-la' con metrónomo.
- Dobles notas desparejas: deja caer la mano entera.
- Los tresillos tapan la melodía: toca la izquierda más suave que la derecha.

**Tempo:** Empieza en ♩ = 72. Objetivo: ♩ = 120–132.

**Está listo cuando:** Tocas el estudio a ♩ = 120 con tresillos parejos y dobles notas juntas.

#### Czerny nº 34 — Do mayor, 6/8, pág. 18

Estudio en Do mayor y 6/8 marcado p y legato, con dobles notas (terceras y sextas) en la mano derecha en negras y corcheas, algunas con línea de tenuto, sobre acordes quebrados en corcheas en la mano izquierda, ahora en clave de fa. La segunda parte tiene mf, p, f, dimin. y p. Son dos partes de 8 compases con repetición.

**Para qué sirve:** Entrena las dobles notas sobre acompañamiento quebrado y la lectura de la mano izquierda en clave de fa. Te ayuda en las obras del recital con la izquierda en clave de fa y acompañamiento continuo.

**Antes de empezar:**

- Fíjate que la mano izquierda está en clave de fa: nombra las primeras notas antes de tocar.
- Marca la digitación de las dobles notas de la derecha (3-1, 5-3, 4-2).
- Marca los matices y las notas con tenuto (línea horizontal): se sostienen todo su valor.

**Paso a paso:**

1. Día 1: toca la mano izquierda sola, leyendo con cuidado la clave de fa, en dos pulsos por compás.
2. Día 2: toca la mano derecha sola, cuidando que las dobles notas bajen juntas.
3. Día 3: manos juntas a ♩. = 40, primera parte.
4. Día 4: manos juntas, segunda parte.
5. Día 5: añade los matices y el tenuto.
6. Día 6: sube el metrónomo de 4 en 4.
7. Día 7: toca todo legato y con los matices marcados.

**Errores comunes:**

- Leer la clave de fa como si fuera de sol: escribe el nombre de las notas que dudes.
- Dobles notas desparejas: toca cada una sola y escucha.
- No hacer el dimin. hacia el final: practica las últimas frases bajando el volumen poco a poco.

**Tempo:** Empieza en ♩. = 40. Objetivo: ♩. = 60–66.

**Está listo cuando:** Tocas el estudio a ♩. = 60 leyendo la clave de fa sin dudar y con los matices.

#### Czerny nº 35 — Do mayor, 4/4, pág. 18

Estudio en Do mayor y 4/4 marcado f, con acordes repetidos en negras y blancas en la mano derecha y una mano izquierda en clave de fa que toca una nota grave en el primer tiempo y salta hacia arriba para tres negras. La segunda parte empieza p y vuelve a f. Son dos partes de 8 compases con repetición.

**Para qué sirve:** Entrena los acordes repetidos sin tensión y los saltos de bajo en la izquierda. Prepara los acompañamientos de bajo y acordes del recital.

**Antes de empezar:**

- Lee la mano izquierda en clave de fa y ubica en el teclado las notas graves con líneas adicionales.
- Revisa la digitación de los acordes de la derecha (1-2-5, 1-3-5, 2-4-5).
- Marca los matices f y p de cada parte.

**Paso a paso:**

1. Día 1: toca la mano izquierda sola, practicando el salto desde la nota grave hasta las negras.
2. Día 1: mira la nota de llegada antes de saltar y mueve el brazo entero.
3. Día 2: toca solo los acordes de la derecha, repetidos desde la muñeca, sin rigidez.
4. Día 3: manos juntas a ♩ = 60, primera parte.
5. Día 4: manos juntas, segunda parte, con el contraste p y f.
6. Día 5: sube el metrónomo de 4 en 4.
7. Día 6: toca todo con acordes plenos y bajo seguro.

**Errores comunes:**

- Acordes repetidos rígidos que cansan: suelta la muñeca entre cada acorde.
- Fallar el bajo grave: practica solo el salto, con los ojos en la nota de llegada.
- El f se vuelve golpeado: usa el peso del brazo, no la fuerza de los dedos.

**Tempo:** Empieza en ♩ = 60. Objetivo: ♩ = 100.

**Está listo cuando:** Tocas el estudio a ♩ = 100 con acordes relajados y saltos de bajo seguros.
<!-- /generated:exercises -->

## 6. Estrategias de práctica para las obras

En el sitio, cada sesión sugiere hasta tres estrategias según el foco técnico de la sección. Las 18 que existen:

| Estrategia | Para qué sirve |
|---|---|
| Pausa y preparación (*ghosting*) | Saltos, octavas, arpegios amplios y acordes: te detienes y colocas la mano antes de cada grupo |
| Fragmentos cortos (*chunking*) | Pasajes largos: grupos de un pulso o medio compás |
| Unión de compases | El paso de un compás al siguiente, donde están la mayoría de los tropiezos |
| De atrás hacia adelante | Que el final de la sección quede tan seguro como el principio |
| Manos separadas, luego juntas | Resolver la digitación de cada mano antes de coordinarlas |
| Práctica mental | Fijar la memoria lejos del piano |
| Escalera de tempo | Subir la velocidad de escalas y pasajes rápidos |
| Ritmos alterados | Igualar pasajes de notas rápidas |
| Acordes en bloque | Aprender las formas de arpegios y acordes quebrados |
| Melodía forte, acompañamiento susurrado | Destacar la melodía |
| Esqueleto | Tocar solo las notas importantes de un pasaje denso |
| Primero sin pedal | Asegurar el legato con los dedos antes de poner pedal |
| 2 contra 3 en la mesa | Polirritmia |
| Pulso fijo antes del rubato | Aprender a tempo antes de dar libertad |
| Contar y marcar el ritmo | Síncopas y ritmos difíciles |
| Pulgar solo, meñique solo | Octavas |
| Cambio de dedos | Notas repetidas |
| Trino medido | Trinos y adornos |

## 7. El sitio de estudio

| Decisión | Detalle |
|---|---|
| Dónde vive | Repositorio `jhondp/piano_concierto`, ramas `main` y `feat/study-site` |
| Publicación | GitHub Pages desde `main`: https://jhondp.github.io/piano_concierto/ |
| Tecnología | HTML, CSS y JavaScript estáticos, sin servidor. `node tools/build-data.mjs` regenera `assets/data.js` y las marcas `?v=` para que los teléfonos no usen versiones viejas |
| Progreso | Se guarda en el `localStorage` del navegador: queda solo en ese dispositivo |
| Diseño | Estilo app de Apple, elegante y adaptado al teléfono (barra de pestañas abajo en pantallas chicas), fuente Poppins, paleta #333333, #3C6E71, #FFFFFF, #D9D9D9 y #284B63, sin barras de color al costado de los recuadros |
| Inicio | Título «Piano concierto», sinopsis tipo nota de prensa (reemplazó a «De qué se trata»), objetivos, teclado de 16 teclas (una por obra) como portada, repertorio, ruta y cuenta regresiva |
| Página de cada obra | Mapa de secciones, teoría, acordes, sesiones con casillas para marcar y estrategias de práctica. Cada bloque de la sesión (calentamiento, técnica, estudio, obra y teoría) tiene un desplegable «Cómo estudiarlo» con el paso a paso para estudiar solo: qué es, para qué sirve, cómo se aplica a la obra, preparación, pasos, errores comunes, tempo y cuándo está listo. La parte de la obra nombra los compases difíciles de esa sección y cuándo pasar a la siguiente sesión |
| Teoría | Currículo de 25 lecciones en 3 niveles, de lo más fácil a lo más difícil (nivel conservatorio intermedio), con audio y preguntas |
| Entrenar | Un menú de botones donde cada ejercicio tiene su propia página: Notas, Intervalos, Acordes, Lectura a primera vista, Ritmo y Guías. Al salir de un ejercicio, su sonido se detiene |
| Lectura a primera vista | Fragmentos aleatorios por nivel de dificultad, **solo de obras de dominio público** (Mozart, Debussy, Bach, Chopin), porque el sitio es público. Se descartaron fragmentos ilegibles o con grupos irregulares |
| Ritmo | 10 niveles de lo fácil a lo difícil, con metrónomo solo en los ejercicios, modos de tocar, dictado y dos manos, más 42 ritmos sacados de las 16 obras (los ritmos solos, sin melodía) |
| Sonido | Muestras del piano Salamander Grand Piano (licencia CC BY 3.0, con crédito en el sitio). Si no cargan, suena un sintetizador de respaldo |

## 8. Pendientes y advertencias

- **Los análisis se generaron a partir de las partituras escaneadas.** Tonalidades, compases e indicaciones se leyeron de la página; los nombres de acordes, los grados y algunos números de compás son inferidos. **Confirma los números de compás con tu partitura.**
- Las descripciones técnicas y las etiquetas del catálogo de Czerny son una estimación visual; la tonalidad, el compás y la página sí son fiables.
- Los tempos de Hanon Parte III y los rangos de Czerny de la sección 5 son recomendaciones para este plan, no indicaciones impresas.
- El texto del concierto y los objetivos son un borrador: revísalos en `data/concert.json`.
- El sonido no se verificó en un teléfono real; solo con pruebas automáticas y grabaciones simuladas.
