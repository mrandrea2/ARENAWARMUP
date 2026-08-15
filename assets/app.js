/* =============================================================
   ARENA VOLLEY — WARM UP · logica applicazione
   ============================================================= */
(function () {
  "use strict";

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  document.getElementById("stagione").textContent = STAGIONE;
  $$(".stagione-txt").forEach((e) => (e.textContent = STAGIONE));

  /* ---------- KPI ---------- */
  $("#kpi").innerHTML = KPI.map((k) => {
    const r = RIFERIMENTI[k.ref];
    const fonte = r
      ? r.doi
        ? `<a class="kpi-src" href="https://doi.org/${r.doi}" target="_blank" rel="noopener">${esc(r.autori.split(",")[0])} ${esc(r.anno)}</a>`
        : `<span class="kpi-src">${esc(r.autori.split(",")[0])} ${esc(r.anno)}</span>`
      : "";
    return `<div class="card kpi ${k.colore}">
      <div class="n">${esc(k.valore)}</div>
      <div class="l">${esc(k.label)}</div>
      <div class="s">${esc(k.nota)}</div>
      ${fonte}
    </div>`;
  }).join("");

  /* ---------- RAMP ---------- */
  $("#ramp-grid").innerHTML = RAMP.map(
    (f) => `<div class="card ramp ${f.colore}">
      <div class="row"><span class="sig">${esc(f.sigla)}</span><span class="min">${esc(f.minuti)}</span></div>
      <h3>${esc(f.titolo)}</h3>
      <p class="desc">${esc(f.descrizione)}</p>
      <ul>${f.punti.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      <div class="foot">${esc(f.scopo)}</div>
    </div>`
  ).join("");

  /* ---------- Protocolli ---------- */
  const fmtMin = (s) => Math.round(s / 60) + "′";

  const rigaEsercizio = (e) => `<div class="ex">
      <span class="tag2">${esc(e.tag)}</span>
      <div class="exb">
        <span class="nm">${esc(e.nome)}</span>
        <span class="meta"><b class="ds">${esc(e.dose)}</b>${e.nota ? `<i class="nt">${esc(e.nota)}</i>` : ""}</span>
      </div>
    </div>`;

  $("#proto-list").innerHTML = PROTOCOLLI.map((p) => {
    const nEs = p.fasi.reduce((a, f) => a + f.esercizi.length, 0);
    const ritmo = p.fasi.map((f) => `${f.sigla} ${Math.round(f.secondi / 60)}′`).join(" · ");
    return `<details class="card proto ${p.colore}" id="proto-${p.id}">
      <summary>
        <div class="p-head">
          <span class="num">${esc(p.id)}</span>
          <div class="p-txt">
            <h3>${esc(p.nome)}</h3>
            <p class="focus">${esc(p.focus)}</p>
            <p class="p-meta">${p.matchday ? "Pre-gara" : p.durata + " min"} · ${nEs} esercizi · ${ritmo}</p>
          </div>
        </div>
        <div class="p-actions">
          <button class="btn primary" data-start="${p.id}">▶ Avvia</button>
          <span class="btn ghost">Esercizi <i class="chev">▾</i></span>
        </div>
      </summary>
      <div class="body">
        ${p.quando ? `<p class="quando">${esc(p.quando)}</p>` : ""}
        ${p.fasi
          .map(
            (f) => `<div class="fase">
              <div class="lbl">${esc(f.sigla)} · ${esc(f.nome)} <em>— ${fmtMin(f.secondi)}</em></div>
              ${f.esercizi.map(rigaEsercizio).join("")}
            </div>`
          )
          .join("")}
        <div class="chiave"><strong>Chiave tecnica:</strong> ${esc(p.chiave)}</div>
        <div class="proto-actions no-print">
          <button class="btn primary" data-start="${p.id}">▶ Modalità campo</button>
          <button class="btn" data-evidenze="${p.id}">Perché funziona</button>
        </div>
      </div>
    </details>`;
  }).join("");

  /* ---------- Rotazione di esempio ---------- */
  $("#week").innerHTML = SETTIMANA.map(
    (d) => `<button class="day ${d.match ? "match" : ""}" data-start="${d.protocollo}">
      <span class="d">${esc(d.label)}</span>
      <span class="p">${esc(d.protocollo)} — ${esc(d.nome)}</span>
      <span class="n">${esc(d.nota)}</span>
    </button>`
  ).join("");

  /* ---------- Semaforo ---------- */
  const iconaSem = { verde: "✓", giallo: "!", rosso: "✕" };
  $("#semaforo-list").innerHTML = SEMAFORO.map(
    (s) => `<div class="sem ${s.livello}">
      <span class="dot">${iconaSem[s.livello]}</span>
      <div>
        <div class="hd"><h4>${esc(s.titolo)}</h4><span class="badge">${esc(s.azione)}</span></div>
        <p>${esc(s.testo)}</p>
      </div>
    </div>`
  ).join("");

  /* ---------- Basi scientifiche ---------- */
  const linkRef = (id) => {
    const r = RIFERIMENTI[id];
    if (!r) return "";
    const testo = `${r.autori} ${r.anno}`;
    return r.doi
      ? `<a class="ref" href="https://doi.org/${r.doi}" target="_blank" rel="noopener">${esc(testo)} ↗</a>`
      : `<span class="ref">${esc(testo)}</span>`;
  };

  $("#evidenze").innerHTML = EVIDENZE.map(
    (e) => `<details class="card ev">
      <summary><h3>${esc(e.titolo)}</h3><span class="chev">▾</span></summary>
      <div class="ev-body">
        <p>${esc(e.punto)}</p>
        <p class="ev-pratica"><strong>In campo:</strong> ${esc(e.pratica)}</p>
        <div class="refs">${e.refs.map(linkRef).join("")}</div>
      </div>
    </details>`
  ).join("");

  $("#biblio").innerHTML = Object.keys(RIFERIMENTI)
    .map((k) => {
      const r = RIFERIMENTI[k];
      const t = `<strong>${esc(r.autori)} (${esc(r.anno)})</strong><span>${esc(r.titolo)}. ${esc(r.rivista)}.</span>`;
      return r.doi
        ? `<a class="bib" href="https://doi.org/${r.doi}" target="_blank" rel="noopener">${t}</a>`
        : `<div class="bib">${t}</div>`;
    })
    .join("");

  // apre la sezione evidenze dal pulsante "Perché funziona" di un protocollo
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-evidenze]");
    if (!b) return;
    const p = PROTOCOLLI.find((x) => x.id === b.dataset.evidenze);
    if (!p || !p.evidenze) return;
    const voci = $$("#evidenze .ev");
    EVIDENZE.forEach((ev, i) => {
      voci[i].open = ev.refs.some((r) => p.evidenze.includes(r));
    });
    $("#basi").scrollIntoView({ behavior: "smooth" });
  });

  /* =============================================================
     MODALITÀ CAMPO — timer per fase, schermo sempre acceso
     ============================================================= */
  const field = $("#field");
  let corrente = null, faseIdx = 0, rimasti = 0, tick = null, wakeLock = null;

  async function lockScreen() {
    try { if ("wakeLock" in navigator) wakeLock = await navigator.wakeLock.request("screen"); } catch (e) {}
  }
  function unlockScreen() { try { wakeLock && wakeLock.release(); } catch (e) {} wakeLock = null; }
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && field.classList.contains("on") && tick) lockScreen();
  });

  function beep(freq = 880, dur = 0.18) {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.frequency.value = freq; o.connect(g); g.connect(ctx.destination);
      g.gain.setValueAtTime(0.001, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + 0.02);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
      o.start(); o.stop(ctx.currentTime + dur + 0.05);
      setTimeout(() => ctx.close(), 600);
    } catch (e) {}
  }

  function apriCampo(id) {
    corrente = PROTOCOLLI.find((p) => p.id === id);
    if (!corrente) return;
    faseIdx = 0;
    field.classList.add("on");
    document.body.style.overflow = "hidden";
    $("#f-name").textContent = `${corrente.id} — ${corrente.nome}`;
    $("#f-focus").textContent = corrente.focus;
    $("#f-key").innerHTML = `<strong style="color:var(--cyan)">Chiave tecnica:</strong> ${esc(corrente.chiave)}`;
    $("#f-steps").innerHTML = corrente.fasi
      .map((f, i) => `<button class="step" data-fase="${i}" aria-label="Vai a ${f.sigla}"></button>`)
      .join("");
    caricaFase(0);
    lockScreen();
  }

  function chiudiCampo() {
    stop();
    field.classList.remove("on");
    document.body.style.overflow = "";
    unlockScreen();
  }

  function caricaFase(i) {
    stop();
    faseIdx = i;
    const f = corrente.fasi[i];
    rimasti = f.secondi;
    $("#f-sig").textContent = `${f.sigla} · ${f.nome}`;
    $("#f-ex").innerHTML = f.esercizi
      .map(
        (e, n) => `<li data-i="${n}">
          <span class="k">${n + 1}</span>
          <div>
            <b>${esc(e.nome)}</b>
            <span class="f-dose">${esc(e.dose)}</span>
            ${e.nota ? `<em>${esc(e.nota)}</em>` : ""}
          </div>
        </li>`
      )
      .join("");
    $$("#f-steps .step").forEach((el, n) => el.classList.toggle("on", n <= i));
    $("#f-next").textContent = i < corrente.fasi.length - 1 ? "Fase successiva →" : "Chiudi seduta ✓";
    aggiorna();
  }

  function aggiorna() {
    const f = corrente.fasi[faseIdx];
    const m = String(Math.floor(rimasti / 60)).padStart(2, "0");
    const s = String(rimasti % 60).padStart(2, "0");
    const t = $("#f-timer");
    t.textContent = `${m}:${s}`;
    t.classList.toggle("low", rimasti <= 15);
    $("#f-bar").style.width = (100 * (f.secondi - rimasti)) / f.secondi + "%";
  }

  function stop() {
    clearInterval(tick); tick = null;
    $("#f-toggle").textContent = "▶ Avvia";
  }

  function avvia() {
    if (tick) { stop(); return; }
    $("#f-toggle").textContent = "⏸ Pausa";
    lockScreen();
    tick = setInterval(() => {
      rimasti--;
      if (rimasti <= 0) {
        rimasti = 0; aggiorna(); stop(); beep(660, 0.3);
        if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
        if (faseIdx < corrente.fasi.length - 1) setTimeout(() => { caricaFase(faseIdx + 1); avvia(); }, 800);
        return;
      }
      if (rimasti <= 3) beep(880, 0.08);
      aggiorna();
    }, 1000);
  }

  $("#f-steps").addEventListener("click", (e) => {
    const b = e.target.closest(".step");
    if (b) caricaFase(+b.dataset.fase);
  });
  $("#f-toggle").addEventListener("click", avvia);
  $("#f-close").addEventListener("click", chiudiCampo);
  $("#f-next").addEventListener("click", () => {
    if (faseIdx < corrente.fasi.length - 1) caricaFase(faseIdx + 1);
    else chiudiCampo();
  });
  $("#f-ex").addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (li) li.classList.toggle("done");
  });
  document.addEventListener("keydown", (e) => {
    if (!field.classList.contains("on")) return;
    if (e.key === "Escape") chiudiCampo();
    if (e.key === " ") { e.preventDefault(); avvia(); }
  });
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-start]");
    if (b) { e.preventDefault(); e.stopPropagation(); apriCampo(b.dataset.start); }
  });

  /* =============================================================
     COACH AI (Claude via /api/coach)
     ============================================================= */
  const CHIPS = [
    "Ho solo 8 minuti",
    "Mezzo campo disponibile",
    "Senza elastici",
    "Atleta in semaforo giallo",
    "Giorno post-gara, scarico",
    "Doppio impegno nel weekend",
    "Gruppo U19, spiegazione semplice",
  ];
  $("#coach-chips").innerHTML = CHIPS.map((c) => `<button class="chip" type="button">${esc(c)}</button>`).join("");
  $("#coach-chips").addEventListener("click", (e) => {
    const c = e.target.closest(".chip");
    if (!c) return;
    const ta = $("#coach-input");
    ta.value = (ta.value ? ta.value.replace(/\s*$/, " ") : "") + c.textContent + ". ";
    ta.focus();
  });

  $("#coach-proto").innerHTML =
    `<option value="">Contesto: tutto il programma</option>` +
    PROTOCOLLI.map((p) => `<option value="${p.id}">Protocollo ${p.id} — ${esc(p.nome)}</option>`).join("");

  function contestoTesto(id) {
    const lista = id ? PROTOCOLLI.filter((p) => p.id === id) : PROTOCOLLI;
    return lista
      .map(
        (p) =>
          `PROTOCOLLO ${p.id} — ${p.nome} (${p.focus}; ${p.quando || ""})\n` +
          p.fasi
            .map(
              (f) =>
                `  ${f.sigla} ${f.nome} [${Math.round(f.secondi / 60)}']\n` +
                f.esercizi.map((e) => `    - ${e.nome} | ${e.dose} | ${e.nota || ""}`).join("\n")
            )
            .join("\n") +
          `\n  Chiave tecnica: ${p.chiave}`
      )
      .join("\n\n");
  }

  const out = $("#coach-out");
  $("#coach-clear").addEventListener("click", () => { $("#coach-input").value = ""; out.textContent = ""; });

  $("#coach-send").addEventListener("click", async () => {
    const domanda = $("#coach-input").value.trim();
    if (!domanda) { out.textContent = "Scrivi cosa ti serve adattare."; return; }
    const btn = $("#coach-send");
    btn.disabled = true; btn.textContent = "Sto pensando…";
    out.textContent = "…";
    try {
      const r = await fetch("/api/coach", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-access-code": localStorage.getItem("arena_code") || "" },
        body: JSON.stringify({ domanda, contesto: contestoTesto($("#coach-proto").value) }),
      });
      const data = await r.json();
      if (!r.ok) {
        if (r.status === 401) {
          const code = prompt("Codice di accesso della squadra:");
          if (code) { localStorage.setItem("arena_code", code.trim()); out.textContent = "Codice salvato. Premi di nuovo «Chiedi al coach»."; }
          else out.textContent = "Serve il codice di accesso per usare il coach.";
        } else {
          out.innerHTML = `<span class="err">${esc(data.error || "Richiesta non riuscita.")}</span>`;
        }
      } else {
        out.textContent = data.testo;
      }
    } catch (e) {
      out.innerHTML = `<span class="err">Nessuna connessione. Il resto del programma funziona anche offline.</span>`;
    } finally {
      btn.disabled = false; btn.textContent = "Chiedi al coach";
    }
  });

  /* =============================================================
     Stampa, installazione, service worker
     ============================================================= */
  $("#btn-print").addEventListener("click", () => window.print());
  window.addEventListener("beforeprint", () => $$(".proto").forEach((d) => (d.open = true)));

  let deferred = null;
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault(); deferred = e; $("#btn-install").hidden = false;
  });
  $("#btn-install").addEventListener("click", async () => {
    if (!deferred) return;
    deferred.prompt(); await deferred.userChoice; deferred = null; $("#btn-install").hidden = true;
  });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => navigator.serviceWorker.register("/sw.js").catch(() => {}));
  }
})();
