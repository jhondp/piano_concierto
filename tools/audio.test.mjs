import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

// Minimal fake Web Audio that records start/stop/cancel calls.
function loadEngine() {
  const log = [];
  const param = () => ({ value: 0, setValueAtTime() {}, linearRampToValueAtTime() {}, exponentialRampToValueAtTime() {},
    setTargetAtTime(v) { log.push(["target", v]); }, cancelScheduledValues() { log.push(["cancel"]); } });
  const node = extra => ({ connect(n) { return n; }, ...extra });
  const src = () => node({ frequency: param(), playbackRate: param(), Q: param(), type: "", buffer: null,
    setPeriodicWave() {}, start(t) { log.push(["start", t]); }, stop(t) { log.push(["stop", t]); } });
  class FakeCtx {
    constructor() { this.state = "running"; this.currentTime = 10; this.destination = node(); }
    resume() { return Promise.resolve(); }
    createDynamicsCompressor() { return node({ threshold: param(), knee: param(), ratio: param(), attack: param(), release: param() }); }
    createGain() { return node({ gain: param() }); }
    createBiquadFilter() { return node({ frequency: param(), Q: param(), type: "" }); }
    createOscillator() { return src(); }
    createBufferSource() { return src(); }
    createBuffer() { return {}; }
    createPeriodicWave() { return {}; }
    decodeAudioData() {}
  }
  const sandbox = { window: { AudioContext: FakeCtx }, navigator: {}, document: { addEventListener() {} },
    fetch: () => Promise.reject(new Error("offline")), Float32Array, Math, Promise, console, Map, Set };
  vm.createContext(sandbox);
  const api = vm.runInContext(readFileSync(new URL("../assets/common.js", import.meta.url), "utf8")
    + "\n;({ tone, stopSounds, playSeq, voices, ac })", sandbox);
  return { ...api, log };
}

test("Stop cancels every scheduled note of the sequence and leaves key presses alone", () => {
  const e = loadEngine();
  for (let i = 0; i < 5; i++) e.tone(60 + i, 10 + i, 0.5, 0.16, "seq");
  e.tone(48, 10, 1); // key press, not part of the sequence
  assert.equal(e.voices.size, 5);
  e.log.length = 0;
  e.stopSounds("seq");
  assert.equal(e.voices.size, 0);
  assert.equal(e.log.filter(x => x[0] === "cancel").length, 5);
  assert.equal(e.log.filter(x => x[0] === "stop").length, 5);
  assert.ok(e.log.filter(x => x[0] === "stop").every(x => x[1] <= 10.2), "stops right away, not at the written end");
});

test("playing a sequence again replaces the one still sounding instead of layering it", async () => {
  const e = loadEngine();
  e.playSeq([[60], [62], [64]], 0.5);
  await Promise.resolve();
  assert.equal(e.voices.size, 3);
  e.playSeq([[60], [62], [64]], 0.5);
  await Promise.resolve();
  assert.equal(e.voices.size, 3);
});
