# Piano concierto — study site
Objective: static study website for the 16-piece solo piano concert program (target date 2027-12-01).
Branch: feat/study-site · Delivery: ask-on-risk · Test runner: `node --test` (build/plan logic only).

## Specs
- S1. "Genera la pagina web en ese repo" — the site lives in this repository (`piano_concierto`).
- S2. "si quieres usar fable, usalo hasta las 14:59, para analizar las piezas y generar el conocimiento necesario" — score analysis delegated to Fable agents before 14:59; their outputs feed the site data.
- S3. "Ojalá puedas sugerir ejercicios de hanon y czerny por sesión sugerida de estudio decada pieza." — every piece has suggested study sessions, each with Hanon and Czerny exercises.
- S4. "La página debe tener un inicio que diga "Piano concierto" Una explicación de qué se trata el concierto, cual es el objetivo del concierto, cuál es el repertorio y la hoja de ruta de aprendizaje, teniendo como meta que el concierto pdoría ser el 1 de diciembre del año que viene, etc" — home page titled "Piano concierto" with: what the concert is, its objective, the repertoire, and a learning roadmap ending 2027-12-01.
- S5 (carried from the Clair de Lune sample artifact): user palette #333333, #3C6E71, #FFFFFF, #D9D9D9, #284B63; theory lessons (8) with audio and quizzes; per-piece section map. Assumption: UI copy in neutral Spanish.

## Tasks
- T1 [S2] Analyze 16 scores + Czerny Op. 599 + Hanon catalogs — delegated (6 parallel Fable agents, parallel independent units) — done, 4c9cc13
- T2 [S3] Build script merging analyses and assigning Hanon/Czerny per session, with test — inline — done, 4c9cc13 (4/4 tests pass)
- T3 [S4,S5] Home page: concept, objective, repertoire, roadmap, countdown — inline — done, 7ef0bc5
- T4 [S3,S5] Piece page: sections, theory, chords, sessions — inline — done, 7ef0bc5
- T5 [S5] Theory lessons page — inline — done, 7ef0bc5
- T6 [S1] README + local run instructions — inline — done (docs commit)

## Log
- L1 (2026-11-15) "Genera la pagina web en ese repo, si quieres usar fable, usalo hasta las 14:59, para analizar las piezas y generar el conocimiento necesario. Ojalá puedas sugerir ejercicios de hanon y czerny por sesión sugerida de estudio decada pieza."
- L2 (2026-11-15) "La página debe tener un inicio que diga "Piano concierto" Una explicación de qué se trata el concierto, cual es el objetivo del concierto, cuál es el repertorio y la hoja de ruta de aprendizaje, teniendo como meta que el concierto pdoría ser el 1 de diciembre del año que viene, etc"
- L3 Route: T1 delegated (6 independent analysis units launched together at 14:38); remaining tasks inline. Concert objective text is drafted by Claude and marked editable in data (user has not stated it).
- L4 Analyses done 14:41-14:43: 16 pieces, Hanon 60 (scan is English text despite filename), Czerny Op.599 100 (Peters 2402). Chords/roman numerals inferred; bar numbers mostly read from page (Theme of Love and Mozart counted manually).
- L5 Verification: `node --test tools/*.test.mjs` 4 pass; `node --check` on all assets/*.js; headless Firefox screenshots of index, pieza?id=02, teoria rendered without visible breakage. Not verified: audio playback, mobile width, dark mode.
- L6 Next: user reviews drafted concert description/objectives in data/concert.json; push/PR is the user's decision.
