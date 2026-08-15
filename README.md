# Warm Up Arena Volley 2026/27

Web app del protocollo di riscaldamento (modello RAMP di Jeffreys) dell'**Arena Volley Team Verona**.
Funziona da telefono, si installa come app, e funziona anche **senza rete** in palestra.

- I 5 protocolli sono la prima cosa che si vede: si sceglie e si parte, senza aprire nulla.
- **Modalità campo**: timer per fase R / AM / P, un esercizio alla volta con dose e chiave tecnica, schermo che resta acceso, spunta su quello che è stato fatto, salto di fase toccando la barra di avanzamento.
- Semaforo del dolore subito sotto i protocolli.
- La rotazione settimanale resta come esempio in fondo, non impone niente: si sceglie il protocollo in base al carico della seduta.
- **Coach AI** (Claude) per adattare la seduta al volo: meno tempo, mezzo campo, atleta in giallo, gruppo U19.
- **Basi scientifiche** con i riferimenti collegati agli articoli originali su DOI.
- Stampa / PDF pulita per la bacheca dello spogliatoio.

---

## 1. Metti il progetto su GitHub

```bash
cd arena-warmup
git init
git add .
git commit -m "Warm Up Arena Volley 2026/27"
git branch -M main
git remote add origin https://github.com/TUO-UTENTE/arena-warmup.git
git push -u origin main
```

> Il file `.gitignore` esclude già `.env.local`: **la chiave API non finisce mai su GitHub.**

## 2. Pubblica su Vercel

1. Vai su [vercel.com/new](https://vercel.com/new) e importa il repository `arena-warmup`.
2. Framework Preset: **Other**. Build command e output directory: lasciali vuoti.
3. Clicca **Deploy**. In un minuto hai l'indirizzo `arena-warmup.vercel.app`.

## 3. Inserisci la tua chiave Anthropic

La chiave sta **solo sul server**, nelle variabili d'ambiente. Il browser non la vede mai: il telefono chiama `/api/coach`, che gira su Vercel, e solo quella funzione parla con l'API Anthropic.

1. Prendi la chiave da [console.anthropic.com](https://console.anthropic.com) → **API Keys** → *Create Key* (inizia con `sk-ant-`).
2. Su Vercel: **Progetto → Settings → Environment Variables**, e aggiungi:

| Nome | Valore | Note |
|---|---|---|
| `ANTHROPIC_API_KEY` | `sk-ant-...` | obbligatoria |
| `ACCESS_CODE` | es. `arena2627` | consigliata: senza questa, chiunque trovi il link consuma i tuoi crediti |
| `ANTHROPIC_MODEL` | `claude-sonnet-5` | facoltativa |

3. Seleziona tutti gli ambienti (Production, Preview, Development) e salva.
4. **Deployments → ⋯ → Redeploy**: le variabili si attivano solo al deploy successivo.

Al primo uso del Coach AI l'app chiede il codice di accesso e lo ricorda su quel telefono. Se lo staff cambia, cambia `ACCESS_CODE` e fai un redeploy.

**Non incollare mai la chiave nel codice del sito** (`assets/app.js`, `index.html`): sarebbe leggibile da chiunque apra il link e andrebbe revocata subito.

## 4. Prova in locale (facoltativo)

```bash
npm i -g vercel
cp .env.example .env.local   # e inserisci la tua chiave
vercel dev
```

---

## Come si aggiornano i contenuti

Tutto il programma di lavoro sta in un solo file: **`assets/data.js`**.
Esercizi, durate delle fasi, rotazione settimanale, semaforo, bibliografia. Modifichi lì, fai `git push`, e Vercel ripubblica da solo in pochi secondi.

Ogni esercizio è un oggetto con quattro campi, gli stessi delle tabelle del documento cartaceo:

```js
{
  tag: "Atterraggio",                       // la categoria colorata a sinistra
  nome: "Balzi monopodalici frontale e laterale",
  dose: "4 per direzione per lato",
  nota: "Fermo 2″ prima del salto successivo"   // la chiave tecnica
}
```

Le durate delle fasi sono in `secondi` e pilotano il timer della modalità campo. Ogni protocollo somma 15 minuti: 01 e 04 fanno 4′/8′/3′, 02 fa 4′/6′/5′, 03 e 05 fanno 5′/7′/3′.

Le basi scientifiche stanno in `EVIDENZE` (cosa dice la letteratura e cosa cambia in campo) e in `RIFERIMENTI` (autori, anno, rivista, DOI). Per aggiungere una fonte basta inserirla in `RIFERIMENTI` con una chiave e richiamarla nell'array `refs` della voce.

## Installare l'app sul telefono delle atlete

- **Android / Chrome**: apri il link → menu ⋮ → *Installa app* (oppure il tasto ⬇ nell'intestazione).
- **iPhone / Safari**: apri il link → *Condividi* → *Aggiungi a Home*.

Dopo la prima apertura il programma resta disponibile anche senza connessione. Solo il Coach AI ha bisogno di rete.

## Struttura

```
index.html              pagina unica
assets/data.js          CONTENUTI del programma  ← modifica qui
assets/app.js           logica, timer modalità campo, coach
assets/styles.css       stile Arena (navy/cyan/orange), mobile-first
api/coach.js            funzione serverless: proxy sicuro verso Anthropic
sw.js + manifest        installazione e funzionamento offline
```

## Nota d'uso

Il Coach AI è un supporto alla programmazione, non una valutazione clinica. Vale sempre il semaforo del dolore: **rosso = stop e staff medico**.

---

© 2026 Arena Volley Team Verona — creato da Andrea Bertelli
