# Piano concierto — detailed study guides per session
Objective: every part of every session (warm-up, technique, Czerny, piece, theory) explains step by step how to study it, for a self-taught pianist.
Branch: feat/study-site (pushed to main as before) · Delivery: ask-on-risk · Test runner: `node --test tools/*.test.mjs`.

## Specs
- S1. "quiero más detalle sobre cómo aplicar la técnica. Estoy en el repertorio, en a flower is not a flower y en la sesión uno en la parte de hanon 21 que dice técnica o hanon1 o caerny, ahí quiero la explicación" — the explanation appears right at each task row (Calentamiento, Técnica, Estudio) of the session, not in a separate block.
- S2. "y en general una buena descripción en cada una de las sesiones en cada parte del estudio que me indique como estudiarlo ya que soy autodidacta" — all five parts of a session (Calentamiento, Técnica, Estudio, Obra, Teoría) get a step-by-step "how to study it" written for a self-taught pianist.
- S3. "aplica eso a todas las piezas y todas las sesiones" — all 16 pieces, all 131 sessions, including each piece's "Obra completa" session.
- Assumption: content in neutral Spanish (tú), like the rest of the site. Each session shows roughly how many days it lasts (learn weeks × 7 ÷ sessions).

## Tasks
- T1 [S1,S2] Hanon detail for every Hanon used in sessions (1–20, 21, 22, 23, 27, 31, 32, 33, 34, 38, 41, 42, 44, 45, 48, 50, 51, 53) → data/hanon-detail.json — delegated (parallel unit, reads Hanon PDF) — done
- T2 [S1,S2] Czerny detail for nº 1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 28, 29, 30, 31, 34, 35 → data/czerny-detail.json — delegated (parallel unit, reads Czerny PDF) — done
- T3 [S2,S3] Section `study` + piece `wholeStudy` for pieces 01–04 → data/pieces-A.json — delegated (parallel unit, reads scores) — done
- T4 [S2,S3] same for 05–08 → data/pieces-B.json — delegated — done
- T5 [S2,S3] same for 09–12 → data/pieces-C.json — delegated — done
- T6 [S2,S3] same for 13–16 → data/pieces-D.json — delegated — done
- T7 [S1,S2] UI: "Cómo estudiarlo" disclosure under every task row, theory steps, days per session; build merge; coverage test — inline (parent) — done

## Log
- L1 (2026-11-15) "quiero más detalle sobre cómo aplicar la técnica. Estoy en el repertorio, en a flower is not a flower y en la sesión uno en la parte de hanon 21 que dice técnica o hanon1 o caerny, ahí quiero la explicación y en general una buena descripción en cada una de las sesiones en cada parte del estudio que me indique como estudiarlo ya que soy autodidacta.. aplica eso a todas las piezas y todas las sesiones"
- L2 Route: six content units are independent with disjoint files and each needs score reading (several minutes) → six parallel writers; parent owns UI, build, tests, git.
- L3 Writers done. Czerny: no tempo marks printed in nos. 1–35; fixed czerny.json (22 is 2/4, 5 skill); tempo groups moved 17 and 30 to eighth-note row. Hanon 32/33 are 6/8 (♩. 40–72 printed) → own tempo group. Score checks corrected old section data: 12 In the Palace (fermata 31, Sol menor from 34, 131 bars), 06 rit. bar 35, 15 cadenza bar 8, 16 Si naturals 28–31 and "8" under both staves at bar 26 (text asks to compare with a recording), 05 8va only bar 76, 09 sextas y terceras.
- L4 Verification: node --test 15 pass (coverage test: every section study, every wholeStudy, every Hanon/Czerny detail); fake-DOM render of all 16 pieces: tasks == "Cómo estudiarlo" disclosures, 0 "undefined". Not verified: real phone view.
