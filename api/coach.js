/* =============================================================
   /api/coach — proxy sicuro verso l'API Anthropic
   La chiave sta SOLO nelle variabili d'ambiente di Vercel,
   non viene mai inviata al browser.
   Variabili: ANTHROPIC_API_KEY (obbligatoria)
              ANTHROPIC_MODEL   (opzionale)
              ACCESS_CODE       (opzionale, protegge l'endpoint)
   ============================================================= */

const MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-5";
const MAX_INPUT = 6000; // caratteri
const LIMITE = { richieste: 20, finestraMs: 10 * 60 * 1000 };
const contatori = new Map();

const SYSTEM = `Sei l'assistente del preparatore fisico dell'Arena Volley Team Verona (settore femminile).
Aiuti ad adattare sul campo il riscaldamento della squadra, che segue il modello RAMP di Ian Jeffreys
(Raise / Activate & Mobilize / Potentiate) in 5 protocolli da 15 minuti.

Regole:
- Rispondi SEMPRE in italiano, con il linguaggio concreto di un preparatore in palestra, mai burocratico.
- Resta dentro il programma fornito nel contesto: adatta, sostituisci o accorcia gli esercizi esistenti,
  proponi alternative nuove solo se davvero necessario e coerenti con la fase RAMP.
- Mantieni la logica delle fasi: non mettere lavoro di potenziamento prima dell'attivazione.
- Se accorci la seduta, taglia proporzionalmente e dì che cosa NON va tolto (controllo atterraggio e cuffia
  restano le priorità di prevenzione).
- Applica il semaforo del dolore: verde prosegui, giallo adatta riducendo ampiezza o carico, rosso stop
  e segnalazione allo staff medico. Non fare diagnosi, non proporre terapie, non interpretare referti.
- Formato: elenco puntato asciutto, tempi e serie/ripetizioni espliciti, massimo ~250 parole,
  chiudi con una riga "Occhio a:" con l'indicazione tecnica chiave.
- Se la richiesta esce dall'ambito (nutrizione clinica, farmaci, infortuni in atto), dillo in una riga
  e rimanda allo staff competente.`;

function limita(ip) {
  const ora = Date.now();
  const r = contatori.get(ip) || { n: 0, da: ora };
  if (ora - r.da > LIMITE.finestraMs) { r.n = 0; r.da = ora; }
  r.n++;
  contatori.set(ip, r);
  if (contatori.size > 500) contatori.clear();
  return r.n <= LIMITE.richieste;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Metodo non consentito." });
  }

  const chiave = process.env.ANTHROPIC_API_KEY;
  if (!chiave) {
    return res.status(500).json({
      error: "Coach non configurato: manca ANTHROPIC_API_KEY nelle variabili d'ambiente del progetto Vercel.",
    });
  }

  const codice = process.env.ACCESS_CODE;
  if (codice && req.headers["x-access-code"] !== codice) {
    return res.status(401).json({ error: "Codice di accesso mancante o errato." });
  }

  const ip = (req.headers["x-forwarded-for"] || "ignoto").split(",")[0].trim();
  if (!limita(ip)) {
    return res.status(429).json({ error: "Troppe richieste. Riprova tra qualche minuto." });
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const domanda = String(body.domanda || "").slice(0, 1200).trim();
  const contesto = String(body.contesto || "").slice(0, MAX_INPUT);
  if (!domanda) return res.status(400).json({ error: "Domanda mancante." });

  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": chiave,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 900,
        system: SYSTEM,
        messages: [
          {
            role: "user",
            content: `PROGRAMMA DI RIFERIMENTO\n${contesto}\n\nRICHIESTA DEL PREPARATORE\n${domanda}`,
          },
        ],
      }),
    });

    if (!r.ok) {
      const dettaglio = await r.text();
      console.error("Anthropic API:", r.status, dettaglio.slice(0, 400));
      const messaggio =
        r.status === 401 ? "Chiave API non valida: controlla ANTHROPIC_API_KEY su Vercel."
        : r.status === 429 ? "Limite di richieste dell'API raggiunto. Riprova tra poco."
        : "L'API non ha risposto correttamente.";
      return res.status(502).json({ error: messaggio });
    }

    const data = await r.json();
    const testo = (data.content || [])
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();

    return res.status(200).json({ testo: testo || "Nessuna risposta generata." });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Errore interno nella chiamata al coach." });
  }
}
