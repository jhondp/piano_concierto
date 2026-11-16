# Piano concierto: decisiones del proyecto

Resumen de todo lo decidido hasta el 15 de noviembre de 2026 para el recital *Piano concierto* y su sitio de estudio. Las tablas de ruta y sesiones salen de `assets/data.js`; si cambias los datos y regeneras el sitio, revisa que este documento siga coincidiendo.

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

Para practicar cada ejercicio, mira la sección 5. El sitio tiene una versión más detallada de cada ejercicio y de cada sección de obra (desplegable «Cómo estudiarlo» en cada sesión), escrita después de revisar las partituras. Las tablas siguen el orden de la ruta.

### 04 · A Flower Is Not a Flower

Ryuichi Sakamoto · Re menor (inferida; armadura compartida con Fa mayor) · 4/4 con compases de 3/4 intercalados · Largo, molto rubato · dificultad 4/10 · 2 pág. · se estudia del 16/11/2026 al 07/12/2026

| Sesión | Sección (compases) | Foco técnico | Calentamiento | Técnica | Estudio Czerny |
|---|---|---|---|---|---|
| 1 | Tema en registro agudo (1–16) | destacar la melodía | Hanon 1 | Hanon 21 | nº 1 (pág. 3) |
| 2 | Tema en registro medio (17–33) | pedal y legato | Hanon 2 | Hanon 32 | nº 5 (pág. 4) |
| 3 | Clímax con compases alternos (34–47) | rubato | Hanon 3 | Hanon 33 | nº 11 (pág. 6) |
| 4 | Vuelta en p (48–56) | acordes plaqué | Hanon 4 | Hanon 48 | nº 8 (pág. 5) |
| 5 | Coda (57–60) | independencia de dedos | Hanon 5 | Hanon 22 | nº 2 (pág. 3) |
| 6 | Obra completa (todo) | rango dinámico | Hanon 6 | Hanon 34 | nº 3 (pág. 4) |

### 09 · My Lie

Masaru Yokoyama (arr. Torby Brand) · Do mayor (con color de La menor) · 6/8 · ♩ = 48 · dificultad 4/10 · 2 pág. · se estudia del 16/11/2026 al 07/12/2026

| Sesión | Sección (compases) | Foco técnico | Calentamiento | Técnica | Estudio Czerny |
|---|---|---|---|---|---|
| 1 | Introducción (1–4) | destacar la melodía | Hanon 3 | Hanon 21 | nº 1 (pág. 3) |
| 2 | Figuración ondulante (5–12) | acordes quebrados en la izquierda | Hanon 4 | Hanon 41 en Do mayor (con color de La menor) | nº 14 (pág. 7) |
| 3 | Tema tranquilo (13–20) | pedal y legato | Hanon 5 | Hanon 32 | nº 5 (pág. 4) |
| 4 | Tema principal (21–28) | acordes plaqué | Hanon 6 | Hanon 48 | nº 8 (pág. 5) |
| 5 | Clímax (29–36) | terceras legato | Hanon 7 | Hanon 50 en Do mayor (con color de La menor) | nº 9 (pág. 5) |
| 6 | Coda (37–45) | rubato | Hanon 8 | Hanon 33 | nº 11 (pág. 6) |
| 7 | Obra completa (todo) | rango dinámico | Hanon 9 | Hanon 34 | nº 2 (pág. 3) |

### 16 · Battleground

Yutaka Yamada · Re menor · 4/4 · ♩ = 172; «Slow, freely» en la sección final · dificultad 6/10 · 8 pág. · se estudia del 07/12/2026 al 18/01/2027

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

### 06 · The Sixth Station

Joe Hisaishi (arr. Torby Brand) · Mi menor · 4/4 · ♩ ≈ 75 · dificultad 4/10 · 3 pág. · se estudia del 07/12/2026 al 04/01/2027

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

### 14 · If I Am With You

Yoshimasa Terui · Do mayor (con inicio en Fa lidio) · 3/4 · ♩ = 130 (♩ = 110 hacia el compás 59, ♩ = 140 desde el 61) · dificultad 4/10 · 3 pág. · se estudia del 04/01/2027 al 25/01/2027

| Sesión | Sección (compases) | Foco técnico | Calentamiento | Técnica | Estudio Czerny |
|---|---|---|---|---|---|
| 1 | Introducción (1–16) | acordes quebrados en la izquierda | Hanon 9 | Hanon 41 en Do mayor (con inicio en Fa lidio) | nº 14 (pág. 7) |
| 2 | Tema principal (17–32) | destacar la melodía | Hanon 10 | Hanon 21 | nº 1 (pág. 3) |
| 3 | Sección central (33–48) | pedal y legato | Hanon 11 | Hanon 32 | nº 5 (pág. 4) |
| 4 | Episodio agudo (49–58) | arpegios amplios en la izquierda | Hanon 12 | Hanon 42 en Do mayor (con inicio en Fa lidio) | nº 15 (pág. 8) |
| 5 | Transición y clímax (59–87) | octavas | Hanon 13 | Hanon 51 | nº 21 (pág. 12) |
| 6 | Reexposición y final (88–104) | independencia de dedos | Hanon 14 | Hanon 22 | nº 2 (pág. 3) |
| 7 | Obra completa (todo) | rubato | Hanon 15 | Hanon 33 | nº 11 (pág. 6) |

### 15 · Small Village

Yutaka Yamada · Re mayor / Si menor (relativos) · 3/4 (con compases de 4/4 y 6/4) · Freely; ♩ = 120 (A); più mosso (B); ♩ = 80 (D y F) · dificultad 7/10 · 4 pág. · se estudia del 18/01/2027 al 22/02/2027

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

### 08 · Lit

Kensuke Ushio (arr. Torby Brand) · Mi mayor · 3/4 · Gently ♩ = 70 – With Passion ♩ = 96 – Peacefully ♩ = 63 · dificultad 5/10 · 2 pág. · se estudia del 25/01/2027 al 22/02/2027

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

### 02 · Clair de Lune

Claude Debussy · Re♭ mayor · 9/8 · Andante très expressif · dificultad 8/10 · 5 pág. · se estudia del 22/02/2027 al 05/04/2027

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

### 03 · Energy Flow

Ryuichi Sakamoto · La menor / Do mayor · 4/4 (C); un compás de 2/4 en el 39 · Moderato · dificultad 5/10 · 4 pág. · se estudia del 22/02/2027 al 29/03/2027

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

### 07 · Theme of Love (愛のテーマ)

Nobuo Uematsu (arr. Shiro Sato) · Do mayor / La menor · 4/4 · ♩ = 88 · dificultad 6/10 · 4 pág. · se estudia del 29/03/2027 al 03/05/2027

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

### 12 · In the Palace (Lamentoso – Agitato)

Yoshihisa Hirano (arr. «DH») · Re menor (sección central en Sol menor) · 2/4 (3/4 desde el compás 73) · ♩ = 74; Agitato desde el compás 73 · dificultad 9/10 · 6 pág. · se estudia del 05/04/2027 al 24/05/2027

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

### 11 · Again

Masaru Yokoyama (arr. Torby Brand) · Fa mayor · 4/4 · ♩ = 94 · dificultad 6/10 · 3 pág. · se estudia del 03/05/2027 al 07/06/2027

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

### 01 · 12 Variaciones sobre «Ah, vous dirai-je, Maman» K. 265

Wolfgang Amadeus Mozart · Do mayor · 2/4 (3/4 en la Variación XII) · Sin indicación en el tema; Adagio (Var. XI) y Allegro (Var. XII) · dificultad 7/10 · 9 pág. · se estudia del 24/05/2027 al 12/07/2027

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

### 10 · Lie and Truth

Masaru Yokoyama (arr. Torby Brand) · Fa♯ mayor (con una sección central centrada en Re♯ menor) · 3/4 · ♩ = 75 · dificultad 7/10 · 4 pág. · se estudia del 07/06/2027 al 12/07/2027

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

### 05 · Merry Christmas Mr. Lawrence

Ryuichi Sakamoto · Re♭ mayor / Si♭ menor · 12/8 (introducción) → 4/4 · Lento – Andante – più mosso – Lento · dificultad 7/10 · 5 pág. · se estudia del 12/07/2027 al 23/08/2027

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

### 13 · Vague Reasons (Nanami's Theme)

Yoshimasa Terui · Do mayor (con color de Fa lidio) · 4/4 · ♩ = 80 · dificultad 7/10 · 4 pág. · se estudia del 12/07/2027 al 23/08/2027

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

## 5. Cómo practicar los ejercicios y a qué tempo

### El método del metrónomo (vale para todos)

1. **Empieza lento**: al tempo inicial que indica cada ejercicio, o más lento si hace falta. La velocidad correcta es la que te permite tocar sin errores y sin tensión.
2. **Sube de a poco**: cuando lo toques **tres veces seguidas limpio y relajado**, sube el metrónomo 4 bpm.
3. **Si fallas dos veces seguidas**, baja 8 bpm y vuelve a subir.
4. **Empieza cada día un poco por debajo** del máximo del día anterior (unos 8 bpm menos). Lo que ganaste ayer se consolida durmiendo, no hace falta repetir el récord apenas te sientas.
5. **El tempo objetivo es una meta de meses**, no de una sesión. Para el concierto basta con tocar los ejercicios limpios y relajados. Si notas tensión en el antebrazo o dolor, para y baja la velocidad: nunca toques con dolor.

Las indicaciones «♩ = 60» se refieren a negras por minuto. En el Hanon se tocan semicorcheas, así que con ♩ = 60 tocas 4 notas por pulso. Si al principio es demasiado, pon el metrónomo a ♩ = 60 y toca en corcheas (2 notas por pulso), es decir, a la mitad.

### Hanon: Parte I (n.º 1 a 20) — calentamiento

- **Tempo:** Hanon indica empezar en **♩ = 60** e ir subiendo hasta **♩ = 108**, en semicorcheas. Recomendación para este plan: empieza en ♩ = 60 (o en corcheas si cuesta) y apunta a **♩ = 88–92** limpio. Llegar a 108 no es necesario para el concierto.
- **Cómo:**
  1. Manos juntas, a una octava de distancia (la izquierda una octava más grave).
  2. Dedos curvos, levantándolos con precisión y sin tensión en la muñeca ni en el hombro. Cada nota debe sonar igual de fuerte: es un ejercicio de **igualdad**, no de velocidad.
  3. Toca el patrón subiendo dos octavas y bajando, sin pausa en el cambio de dirección.
  4. Para variar sin aburrirte: un día legato, otro día staccato, otro con ritmos alterados (larga-corta y corta-larga), otro piano y otro forte.
  5. Son 5 minutos: no busques el récord de velocidad aquí. Es para despertar los dedos.

### Hanon: Parte II (n.º 21 a 43) — técnica

Tempo general de Hanon para esta parte: **♩ = 60 → 108** en semicorcheas. Recomendación: objetivo de **♩ = 84–92** para el concierto.

**Hanon 21, 22 y 23 — dedos 3, 4 y 5**
- **Tempo:** empieza en ♩ = 60, objetivo ♩ = 88.
- **Cómo:** primero manos separadas (la izquierda suele ser la más débil). Exagera un poco la articulación de los dedos 4 y 5 sin levantar la muñeca. Haz una pasada con ritmos alterados para igualar los dedos.

**Hanon 27 — preparación del trino con 4 y 5**
- **Tempo:** empieza en ♩ = 50, objetivo ♩ = 80.
- **Cómo:** el trino sale de la soltura, no de la fuerza. Levanta poco los dedos y deja que la mano descanse sobre los dedos que tocan. Mide el trino con el metrónomo (exactamente 4 notas por pulso) antes de intentar que sea rápido.

**Hanon 31 — cinco dedos y extensiones**
- **Tempo:** empieza en ♩ = 60, objetivo ♩ = 88.
- **Cómo:** abre la mano sin forzar. Si una extensión tensa la mano, cierra la mano después de cada extensión para soltarla.

**Hanon 32, 33 y 34 — paso del pulgar bajo los dedos 2, 3 y 4**
- **Tempo:** el 32 y el 33 están en 6/8: pulso en negra con puntillo, empieza en ♩. = 40 y apunta a ♩. = 60–66 (Hanon imprime 40 a 72). El 34 está en 2/4: empieza en ♩ = 60 y apunta a ♩ = 92.
- **Cómo:** el pulgar se mueve **por debajo de la mano antes de que lo necesites**, no en el último momento. El codo y la muñeca van acompañando hacia el lado, sin girarse bruscamente. Escucha que no haya un hueco ni un acento en la nota del pulgar.

**Hanon 38 — preparación para las escalas (en la tonalidad de la obra)**
- **Tempo:** empieza en ♩ = 60, objetivo ♩ = 92.
- **Cómo:** tócalo en la tonalidad que indica la sesión con la digitación de la escala de esa tonalidad. Primero manos separadas, después juntas. Usa la estrategia «Escalera de tempo» del sitio para subir de velocidad.

**Hanon 41 — arpegios de tríadas en las 24 tonalidades (en la tonalidad de la obra)**
- **Tempo:** empieza en ♩ = 50, objetivo ♩ = 80.
- **Cómo:** deja que la muñeca y el codo viajen con la mano en una línea horizontal, sin saltos. El pulgar pasa con la mano ya en camino. Primero toca cada posición como un acorde en bloque para aprender la forma; después arpégiala.

**Hanon 42 — arpegios de séptima disminuida**
- **Tempo:** empieza en ♩ = 50, objetivo ♩ = 80.
- **Cómo:** igual que el 41. Como el acorde de séptima disminuida está formado por terceras menores iguales, la forma de la mano se repite: aprende bien la primera posición.

### Hanon: Parte III (n.º 44 a 60) — virtuosismo

Hanon no da un solo tempo para esta parte. Estas son recomendaciones para este plan.

**Hanon 44 y 45 — notas repetidas (grupos de tres y de dos)**
- **Tempo:** empieza en ♩ = 60, objetivo ♩ = 88.
- **Cómo:** cambia de dedo en cada repetición (por ejemplo, 4-3-2-1). El dedo «tira» de la tecla hacia ti, como raspando, y la muñeca se mantiene suelta. Deja que la tecla suba solo hasta la mitad antes de volver a tocar.

**Hanon 48 — ejercicio de muñeca: terceras y sextas sueltas**
- **Tempo:** empieza en ♩ = 60, objetivo ♩ = 92.
- **Cómo:** el movimiento sale de la muñeca, como si botaras una pelota, con los dedos firmes pero no rígidos. Brazo relajado. Si el antebrazo se cansa, para y sacude la mano: el cansancio es señal de tensión.

**Hanon 50 — terceras ligadas**
- **Tempo:** empieza en ♩ = 40, objetivo ♩ = 72.
- **Cómo:** las dos notas de cada tercera deben sonar **exactamente juntas**. Primero tócalo lento y en bloque; luego busca el legato en la voz superior, aunque la inferior no pueda ligarse del todo. Es el ejercicio clave para *My Lie* y *Clair de Lune*.

**Hanon 51 — preparación para escalas en octavas**
- **Tempo:** empieza en ♩ = 50, objetivo ♩ = 80.
- **Cómo:** la mano es un bloque con forma de octava y el movimiento sale de la muñeca. Toca primero solo con el pulgar y después solo con el meñique (estrategia «Pulgar solo, meñique solo» del sitio). Usa 1-5 en las teclas blancas y, si tu mano llega, 1-4 en las negras.

**Hanon 53 — escalas en octavas (en la tonalidad de la obra)**
- **Tempo:** empieza en ♩ = 40, objetivo ♩ = 72.
- **Cómo:** igual que el 51, recorriendo la escala. El brazo acompaña lateralmente para que la muñeca no tenga que estirarse. Haz menos repeticiones, pero con más descanso: las octavas cansan rápido. Es el ejercicio clave para *Battleground*, *In the Palace* y *Merry Christmas Mr. Lawrence*.

### Czerny Op. 599 — estudios

La edición Peters no imprime metrónomo ni indicación de tempo en los n.º 1 a 35, así que estos rangos son una guía:

La clasificación sigue la figura más rápida según el catálogo; si tu partitura muestra otra, usa la fila que corresponda.

| Si el estudio va en… | Tempo inicial | Tempo objetivo |
|---|---|---|
| Blancas y negras (n.º 1 a 11) | ♩ = 60 | ♩ = 96–108 |
| Corcheas (n.º 12, 14, 15, 17, 19, 20, 25, 28, 30) | ♩ = 60 | ♩ = 96–108 |
| Semicorcheas (n.º 16, 18, 22) | ♩ = 50 | ♩ = 80–92 |
| Compás de 3/4 tipo vals (n.º 21, 31) | ♩ = 72 | ♩ = 120–132 |
| Compás de 6/8 (n.º 24, 29, 34) | ♩. = 40 (pulso en negra con puntillo) | ♩. = 60–66 |
| Acordes repetidos (n.º 35) | ♩ = 60 | ♩ = 100 |

**Rutina para cada estudio** (10 minutos):

1. **Primer día:** lee el estudio completo una vez, lento, aunque salga entrecortado. Marca la digitación.
2. **Manos separadas** hasta que cada una salga fluida. Después **juntas a la mitad del tempo** de cada mano sola.
3. **Respeta lo que está escrito:** ligaduras, staccatos y matices son parte del ejercicio, no un adorno.
4. Sube el tempo con el método del metrónomo. Un estudio se considera listo cuando lo tocas entero al tempo objetivo, sin parar, con los matices.
5. Si un estudio ya te sale bien, no hace falta seguir puliéndolo: pasa al siguiente.

**En qué fijarte en cada estudio:**

| N.º | Qué trabaja | En qué fijarte |
|---|---|---|
| 1 | Lectura de redondas y blancas, manos alternadas | Leer sin mirar las manos. Cuenta en voz alta para respetar las duraciones largas. |
| 2 | Lectura en registro agudo | Identifica las notas por intervalos desde una nota guía (Do5, Sol5) en lugar de contar líneas. |
| 3 | Líneas adicionales graves en la izquierda | Usa Do3 y Do2 como notas guía. Ayuda el entrenador «Notas» del sitio en clave de fa. |
| 5 | Negras por grado conjunto en la derecha | Legato perfecto: una tecla sube justo cuando baja la siguiente. |
| 6 | Diálogo de negras entre las manos | Que el paso de una mano a la otra no se note: mismo volumen y sin hueco. |
| 8 | Tríadas en la derecha | Las tres notas del acorde suenan exactamente juntas. Prepara la forma antes de tocar. |
| 9 | Melodía sobre terceras de la izquierda | La melodía más fuerte que el acompañamiento. |
| 11 | Cinco dedos con mano quieta, negras ligadas | La mano no se mueve: solo los dedos. Notas tenidas de verdad hasta su valor completo. |
| 12 | Cinco dedos en corcheas | Igualdad de las corcheas. Haz una pasada con ritmos alterados. |
| 14 | Terceras sobre bajo Alberti | El bajo Alberti suave y parejo, como un murmullo. La primera nota del bajo, apenas marcada. |
| 15 | Tresillos y corcheas | No confundir tresillos con corcheas: cuenta «tri-o-la» contra «1-y». |
| 16 | Semicorcheas con final staccato | El staccato final corto y liviano, desde la muñeca, sin cortar el legato anterior. |
| 17 | Notas repetidas y terceras staccato | Cambia de dedo en las repetidas. Staccato liviano, no golpeado. |
| 18 | Semicorcheas continuas de cinco dedos | Igualdad e independencia. Es el Hanon de Czerny: mismo enfoque que el calentamiento. |
| 19 | Primer paso del pulgar, escala de Do | El pulgar se prepara antes de llegar, sin acento. Mismo enfoque que el Hanon 32 a 34. |
| 20 | Escalas sobre bajo Alberti | La escala pareja mientras la izquierda mantiene el bajo suave. |
| 21 | Terceras y sextas ligadas en vals | Siente el compás en 1 (un pulso por compás). Primer tiempo del bajo marcado y los otros dos más suaves. |
| 22 | Escalas en semicorcheas sobre notas repetidas | El paso del pulgar sin acento a velocidad. Lento al principio. |
| 24 | Terceras legato y staccato en 6/8 | Contrasta claramente el legato del staccato. Pulso en dos tiempos por compás. |
| 25 | Acordes y dobles notas sobre bajo Alberti | Acordes justos y juntos; bajo Alberti legato y suave debajo. |
| 28 | Saltos melódicos sobre bajo Alberti | Mira la nota de destino antes de saltar. Usa la estrategia «Pausa y preparación». |
| 29 | Melodía amplia en 6/8 con notas repetidas | Que la melodía cante en la octava alta sin endurecer el sonido. |
| 30 | Melodía dolce con adornos | El adorno entra a tiempo y suave, sin retrasar la melodía. Matices bien marcados. |
| 31 | Terceras y sextas sobre bajo Alberti | Voz superior de las dobles notas un poco más fuerte. Respeta los matices. |
| 34 | Dobles notas sobre acordes quebrados en clave de fa | La izquierda en clave de fa: léela antes de tocar. Equilibrio entre las manos. |
| 35 | Acordes repetidos con saltos en el bajo | Acordes desde la muñeca, sin golpear. El salto del bajo se prepara durante el silencio. |

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
