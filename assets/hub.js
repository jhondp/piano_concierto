// Practice hub: one view per exercise, chosen by the URL hash (#notas, #ritmo...); empty hash shows the tiles.
(function () {
  const views = [...document.querySelectorAll(".view")];
  const read = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch (e) { return d; } };
  const dayIso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  function streak(days) {
    const set = new Set(days || []), d = new Date();
    if (!set.has(dayIso(d))) d.setDate(d.getDate() - 1);
    let n = 0;
    while (set.has(dayIso(d))) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function stats() {
    const train = k => { const s = read("pc-train-" + k, {}), n = streak(s.days); return s.total ? `${n} ${n === 1 ? "día seguido" : "días seguidos"} · ${Math.round(100 * s.correct / s.total)} % de aciertos` : "Sin empezar"; };
    const count = (k, one, many) => { const n = Object.keys(read(k, {})).length; return n ? `${n} ${n === 1 ? one : many}` : "Sin empezar"; };
    const text = {
      notas: train("notes"), intervalos: train("intervals"), acordes: train("chords"),
      lectura: count("pc-sight-best", "fragmento tocado", "fragmentos tocados"),
      ritmo: count("pc-rhythm-best", "nivel con marca", "niveles con marca"),
      guias: "Cinco guías breves",
    };
    document.querySelectorAll("[data-stat]").forEach(el => { el.textContent = text[el.dataset.stat] || ""; });
  }
  function show() {
    const key = decodeURIComponent(location.hash.slice(1));
    const target = views.find(v => v.dataset.view === key) || views[0];
    // Leaving an exercise stops it, so nothing keeps playing off screen.
    views.forEach(v => { if (v !== target && !v.hidden) v.querySelectorAll("button").forEach(b => { if (b.textContent.trim() === "Detener") b.click(); }); });
    if (typeof stopSounds === "function") ["seq", "rhythm"].forEach(stopSounds);
    views.forEach(v => { v.hidden = v !== target; });
    document.title = (target.dataset.view ? target.querySelector("h2").textContent + " · " : "Entrenar · ") + "Piano concierto";
    if (!target.dataset.view) stats();
    window.scrollTo(0, 0);
    window.dispatchEvent(new Event("resize")); // views measure their width when they become visible
  }
  window.addEventListener("hashchange", show);
  show();
})();
