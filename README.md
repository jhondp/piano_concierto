# Piano concierto

Static study site for a 16-piece solo piano recital planned for **1 December 2027**: concert overview, repertoire, learning roadmap, per-piece section maps, theory, and study sessions with Hanon and Czerny Op. 599 exercises.

## View it

Open `index.html` in a browser. No build step or server is needed. To serve it locally instead:

```sh
python3 -m http.server 8000
```

Progress (learned sections, finished lessons, ticked session tasks) is stored in the browser's `localStorage`, so it stays on that device only.

## Edit the content

| File | What it holds |
|------|---------------|
| `data/concert.json` | Title, date, start date, description, objectives, rehearsal, polish and buffer weeks, and the learning `route` |
| `data/pieces-*.json` | One analysis per piece: key, meter, sections, theory, chords, technique needs |
| `data/hanon.json`, `data/czerny.json` | Exercise catalogs used to fill each study session |

After editing any data or asset, regenerate `assets/data.js` and the `?v=` version stamps on the pages (so phones skip stale caches):

```sh
node tools/build-data.mjs
```

The build follows the curated `route` in `data/concert.json` (two lanes: a demanding "deep" piece next to a lighter one, each with the reason for its place), stretches each lane to the learning window minus `bufferWeeks`, and assigns a warm-up, a Hanon exercise and a Czerny study to each session based on the piece's `techniqueNeeds`. The mapping lives in `tools/plan.mjs` (`NEED_MAP`).

## Test

```sh
node --test tools/*.test.mjs
```

## About the analyses

The piece analyses were generated from the scanned scores. Keys, meters and markings were read from the page; chord names, roman numerals and some bar numbers are inferred. Each piece's `confidence` field says which is which. Check bar numbers against your own score.

## Credits

Piano sounds: [Salamander Grand Piano](https://archive.org/details/SalamanderGrandPianoV3) by Alexander Holm, licensed [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). The site uses 29 of its notes (MP3 versions from the Tone.js audio repository) in `assets/audio/piano/`, pitch-shifted for the notes in between. When the samples cannot load (for example when opening the pages straight from disk in some browsers), a built-in synthesizer plays instead.
