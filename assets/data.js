/* =============================================================
   ARENA VOLLEY TEAM — WARM UP 2026/27
   CONTENUTI DEL PROGRAMMA — MODIFICA SOLO QUESTO FILE
   Fonte: documento ufficiale "Protocolli Warm Up Arena 2026/27"
   ============================================================= */

const STAGIONE = "2026/27";

/* Fasi RAMP (modello Ian Jeffreys) --------------------------- */
const RAMP = [
  {
    sigla: "R",
    nome: "Raise",
    titolo: "RAISE",
    minuti: "4 - 5 minuti",
    colore: "cyan",
    descrizione:
      "Alzare temperatura, frequenza cardiaca, flusso ematico e viscosità articolare.",
    punti: [
      "Stretching dinamico in avanzamento",
      "Andature e corsa coordinata",
      "Progressione continua, mai fermarsi",
    ],
    scopo: "Preparazione fisiologica di base",
  },
  {
    sigla: "AM",
    nome: "Activate & Mobilize",
    titolo: "ACTIVATE & MOBILIZE",
    minuti: "6 - 8 minuti",
    colore: "blue",
    descrizione:
      "Attivare i gruppi muscolari chiave e mobilizzare le articolazioni nel range richiesto dal gesto.",
    punti: [
      "Glutei, core, scapola e cuffia",
      "Lavoro con elastici e controllo del valgo",
      "Mobilità toracica, anca e caviglia",
    ],
    scopo: "Prevenzione infortuni specifica",
  },
  {
    sigla: "P",
    nome: "Potentiate",
    titolo: "POTENTIATE",
    minuti: "3 - 5 minuti",
    colore: "orange",
    descrizione:
      "Portare l'intensità al livello del gesto di gara con stimoli esplosivi specifici.",
    punti: [
      "Salti progressivi e pogo jumps",
      "Reattività e scatti su segnale visivo",
      "Atterraggi silenziosi e controllati",
    ],
    scopo: "Massima espressione di salto e velocità",
  },
];

/* =============================================================
   I 5 PROTOCOLLI OPERATIVI
   Ogni esercizio: tag (categoria), nome, dose, nota (chiave tecnica)
   I "secondi" di ogni fase pilotano il timer della modalità campo.
   ============================================================= */
const PROTOCOLLI = [
  /* ---------------------------------------------------------- 01 */
  {
    id: "01",
    nome: "Controllo Atterraggio dai Salti",
    focus: "Ginocchio e controllo atterraggio dai salti",
    quando: "Sedute ad alto volume di salto · obiettivo LCA e valgo dinamico",
    colore: "cyan",
    durata: 15,
    fasi: [
      {
        sigla: "R",
        nome: "Raise",
        secondi: 240,
        esercizi: [
          {
            tag: "Stretching dinamico",
            nome: "Camminando: ginocchio al petto, piedi all'interno, adduttori, ginocchio teso in basso, quadricipite, calciata avanti toccando il piede in alto",
            dose: "6 x 9 m",
            nota: "Camminando mantieni ciascuna posizione 1-2 secondi",
          },
          {
            tag: "Andature",
            nome: "Calciata dietro, calciata avanti saltellata, skip alto saltellato, doppio impulso, doppio impulso spostandosi lateralmente, calciata avanti normale, skip alto normale",
            dose: "8 x 9 m",
            nota: "Postura alta, appoggio di avampiede, braccia attive",
          },
          {
            tag: "Andature",
            nome: "Corsa laterale con cambio di senso a specchio, a coppie",
            dose: "2 × 20″",
            nota: "Reagire, non anticipare",
          },
        ],
      },
      {
        sigla: "AM",
        nome: "Activate & Mobilize",
        secondi: 480,
        esercizi: [
          {
            tag: "Attivazione",
            nome: "Camminata laterale con elastico sopra il ginocchio",
            dose: "2 × 15 passi per lato",
            nota: "Ginocchio allineato al 2° dito, bacino fermo",
          },
          {
            tag: "Glutei",
            nome: "Clamshell o abduzione in decubito laterale con elastico",
            dose: "1 × 15 per lato",
            nota: "Bacino perpendicolare, non ruotare indietro",
          },
          { tag: "Core", nome: "Plank in forme diverse", dose: "3 × 30″", nota: "Retroversione bacino" },
          {
            tag: "Femorali",
            nome: "Single leg deadlift a corpo libero",
            dose: "8 per lato",
            nota: "Bacino orizzontale",
          },
          {
            tag: "Femorali",
            nome: "Nordic hamstring assistito a coppie",
            dose: "1 × 5 discese da 4″",
            nota: "Bacino esteso, nessun cedimento lombare",
          },
          {
            tag: "Forza",
            nome: "Affondo laterale + affondo in avanzamento",
            dose: "8 per lato (4+4)",
            nota: "Controllo del valgo, tibia verticale nel laterale",
          },
          {
            tag: "Atterraggio",
            nome: "Balzi monopodalici frontale e laterale",
            dose: "4 per direzione per lato",
            nota: "Fermo 2″ prima del salto successivo",
          },
          {
            tag: "Atterraggio",
            nome: "Salto verticale con slancio delle braccia e arrivo su una gamba",
            dose: "5 per gamba",
            nota: "Controllo quando atterro",
          },
        ],
      },
      {
        sigla: "P",
        nome: "Potentiate",
        secondi: 180,
        esercizi: [
          {
            tag: "Salti",
            nome: "Squat jump progressivi 50 → 70 → 85%",
            dose: "3 × 4",
            nota: "Atterraggio silenzioso, ginocchia larghe",
          },
          {
            tag: "Salti",
            nome: "Squat jump con rotazione 90° / 180°",
            dose: "2 × 4",
            nota: "Atterraggio bipodalico controllato, poi mono",
          },
          {
            tag: "Plio",
            nome: "Pogo jumps 20–30 cm, contatti brevi",
            dose: "2 × 8",
            nota: "Tempo di contatto sotto 0,25″",
          },
        ],
      },
    ],
    chiave:
      "Atterraggio silenzioso, ginocchio in asse col 2° dito, tempo di contatto sotto 0,25″.",
    evidenze: ["gagnier", "sugimoto", "vandyk", "takahashi", "welling"],
  },

  /* ---------------------------------------------------------- 02 */
  {
    id: "02",
    nome: "Spalle Pronte",
    focus: "Spalla, scapola e catena superiore",
    quando: "Sedute con alto volume di battuta e attacco · obiettivo cuffia e rotazione interna",
    colore: "blue",
    durata: 15,
    fasi: [
      {
        sigla: "R",
        nome: "Raise",
        secondi: 240,
        esercizi: [
          {
            tag: "Corsa",
            nome: "Corsa e passo saltellato con circonduzioni di braccia avanti/indietro e arm swing incrociati",
            dose: "3 giri campo",
            nota: "Movimento ampio, spalle basse",
          },
          {
            tag: "Andature",
            nome: "Passo laterale con movimento braccia in alto",
            dose: "2 x 9 m",
            nota: "Braccia distese, spalle basse",
          },
          {
            tag: "Andature",
            nome: "Passo saltellato con slancio delle braccia sopra la testa, ampiezza crescente",
            dose: "2 x 9 m",
            nota: "Progressione graduale",
          },
          {
            tag: "Andature",
            nome: "Camminata in quadrupedia, ritorno indietro pancia in su",
            dose: "2 x 9 m",
            nota: "Progressione graduale",
          },
        ],
      },
      {
        sigla: "AM",
        nome: "Activate & Mobilize",
        secondi: 360,
        esercizi: [
          {
            tag: "Flessione",
            nome: "Gatto-cammello in quadrupedia",
            dose: "10 ripetizioni",
            nota: "Muovere una vertebra alla volta, non tutta la schiena insieme",
          },
          { tag: "Mobilità", nome: "Onda", dose: "8 ripetizioni", nota: "Avvicina il petto a terra piegando i gomiti" },
          {
            tag: "Laterale",
            nome: "Child's pose con reach laterale",
            dose: "20″ per lato",
            nota: "Mani lontane, sedersi sui talloni, respirare nel fianco",
          },
          {
            tag: "Estensione",
            nome: "Prone press-up (sfinge dinamica)",
            dose: "20″",
            nota: "Bacino a terra, estensione morbida, spalle lontane dalle orecchie",
          },
          {
            tag: "Rotazione",
            nome: "Quadrupedia con mano dietro la nuca e rotazione toracica",
            dose: "20″ per lato",
            nota: "Bacino perpendicolare, gomito che punta al soffitto",
          },
          {
            tag: "Mobilità",
            nome: "Open book / rotazioni toraciche in quadrupedia",
            dose: "20″ per lato",
            nota: "Bacino fermo, rotazione del torace",
          },
          {
            tag: "Spalla",
            nome: "Posizione prona, una mano avvicina l'altra e cambia ogni volta in modo dinamico",
            dose: "120″",
            nota: "Fronte appoggiata a terra",
          },
          {
            tag: "Scapola",
            nome: "Sequenza Y–T–W a terra",
            dose: "5 per lettera",
            nota: "Pollici in alto, collo rilassato",
          },
        ],
      },
      {
        sigla: "P",
        nome: "Potentiate",
        secondi: 300,
        esercizi: [
          {
            tag: "Cuffia",
            nome: "Extrarotazione con elastico a 0°, gomito al fianco",
            dose: "2 × 12 per lato",
            nota: "Nessun compenso lombare",
          },
          {
            tag: "Cuffia",
            nome: "Extrarotazione 90/90 con elastico",
            dose: "2 × 10 per lato",
            nota: "Scapola stabile, eccentrica lenta",
          },
          {
            tag: "Cuffia",
            nome: "Intrarotazione con elastico senza reclutare il pettorale",
            dose: "1 × 12 per lato",
            nota: "Gomito fermo, movimento solo di avambraccio",
          },
          {
            tag: "Scapola",
            nome: "Wall slide con elastico",
            dose: "2 × 10",
            nota: "La scapola scorre, la spalla non sale",
          },
          {
            tag: "Scapola",
            nome: "Pulley con elastico",
            dose: "2 × 12",
            nota: "Depressione e adduzione prima del braccio",
          },
        ],
      },
    ],
    chiave:
      "Scapola depressa e addotta prima del movimento del braccio, fase eccentrica lenta.",
    evidenze: ["challoumas", "cools", "keller"],
  },

  /* ---------------------------------------------------------- 03 */
  {
    id: "03",
    nome: "Rapidità e Contatto a Terra",
    focus: "Caviglia, piede e reattività",
    quando: "Sedute di difesa e ricezione, metà settimana · bersaglio distorsioni e controllo posturale",
    colore: "green",
    durata: 15,
    fasi: [
      {
        sigla: "R",
        nome: "Raise",
        secondi: 300,
        esercizi: [
          {
            tag: "Stretching dinamico",
            nome: "Camminando: ginocchio al petto, piedi all'interno, adduttori, ginocchio teso in basso, quadricipite, calciata avanti toccando il piede in alto",
            dose: "6 x 9 m",
            nota: "Camminando mantieni ciascuna posizione 1-2 secondi",
          },
          {
            tag: "Dinamico",
            nome: "Swing d'anca frontali e laterali con appoggio",
            dose: "10 per lato",
            nota: "Ampiezza crescente, tronco che non oscilla",
          },
          {
            tag: "Scaletta",
            nome: "2 tocchi skip saltellato, 3 tocchi skip basso, 2 dentro e 1 fuori, 2 dentro e 2 fuori frontale, 2 dentro e 2 fuori laterale",
            dose: "1 volta ogni esercizio",
            nota: "Postura alta, appoggio di avampiede, braccia attive",
          },
        ],
      },
      {
        sigla: "AM",
        nome: "Activate & Mobilize",
        secondi: 420,
        esercizi: [
          {
            tag: "Caviglia",
            nome: "Mobilità di caviglia al muro (knee-to-wall)",
            dose: "20″ per lato",
            nota: "Tallone a terra, ginocchio oltre le dita",
          },
          {
            tag: "Caviglia",
            nome: "Calf raise monopodalico lento",
            dose: "30″ per lato",
            nota: "3″ su, 1″ tenuta, 3″ giù",
          },
          {
            tag: "Equilibrio",
            nome: "Appoggio monopodalico a occhi chiusi o su superficie instabile",
            dose: "30″ per lato",
            nota: "Ginocchio leggermente piegato",
          },
          {
            tag: "Equilibrio",
            nome: "Monopodalico: vado a toccare a terra e ritorno in posizione eretta",
            dose: "30″ per lato",
            nota: "Equilibrio e ginocchio in linea col piede",
          },
          {
            tag: "Controllo",
            nome: "Y-balance reach: anteriore, postero-mediale, postero-laterale",
            dose: "3 per direzione per lato",
            nota: "Tallone d'appoggio sempre a terra",
          },
          {
            tag: "Attivazione",
            nome: "Passo laterale con elastico",
            dose: "15 passi per lato",
            nota: "Anca in leggera flessione, ginocchio stabile",
          },
          {
            tag: "Atterraggio",
            nome: "Balzi monopodalici multidirezionali, schema a orologio",
            dose: "1 giro per lato",
            nota: "Stabilizzare 2″ a ogni arrivo",
          },
        ],
      },
      {
        sigla: "P",
        nome: "Potentiate",
        secondi: 180,
        esercizi: [
          {
            tag: "Reattività",
            nome: "Skip reattivo sul posto sulla linea + scatto 5 m su segnale visivo",
            dose: "4 ripetizioni",
            nota: "Reazione allo stimolo, non partenza a memoria",
          },
          {
            tag: "Plio",
            nome: "Salti pliometrici a contatto breve sulla linea",
            dose: "2 × 8",
            nota: "Caviglia rigida, ginocchio morbido",
          },
          {
            tag: "Reattività",
            nome: "Spostamento laterale basso + arresto e ripartenza su segnale",
            dose: "4 × 10″",
            nota: "Baricentro basso, piedi che non si incrociano",
          },
        ],
      },
    ],
    chiave: "Caviglia rigida nel rimbalzo, reazione a stimolo visivo reale.",
    evidenze: ["verhagen", "haines", "trojian"],
  },

  /* ---------------------------------------------------------- 04 */
  {
    id: "04",
    nome: "Stabilità Core e Anche",
    focus: "Core, anca e catena posteriore",
    quando: "Giorno di forza o seduta post-gara · obiettivo forza core e mobilità anche",
    colore: "purple",
    durata: 15,
    fasi: [
      {
        sigla: "R",
        nome: "Raise",
        secondi: 240,
        esercizi: [
          {
            tag: "Corsa",
            nome: "Corsa + skip, calciata, passo laterale",
            dose: "4 giri campo",
            nota: "Progressione continua, mai fermarsi",
          },
          {
            tag: "Mobilità",
            nome: "Camminata dinamica: rullata piede con ginocchio al petto, rullata con passi lunghi, camminata all'indietro passo lungo",
            dose: "4 x 9 m",
            nota: "Un movimento per passo, senza pause",
          },
          { tag: "Attivazione", nome: "Affondo con rotazione", dose: "2 × 9 m", nota: "Stabilità bacino" },
          {
            tag: "Anca",
            nome: "Swing d'anca frontali e laterali",
            dose: "20″ per lato per esercizio",
            nota: "Ampiezza crescente, tronco fermo",
          },
        ],
      },
      {
        sigla: "AM",
        nome: "Activate & Mobilize",
        secondi: 480,
        esercizi: [
          {
            tag: "Mobilità",
            nome: "Mobilità anche da seduta, gambe piegate",
            dose: "30″",
            nota: "Mani appoggiate e poi senza mani",
          },
          {
            tag: "Mobilità",
            nome: "World's greatest stretch",
            dose: "20″ per lato",
            nota: "Mano a terra, rotazione del torace",
          },
          {
            tag: "Glutei",
            nome: "Ponte glutei bipodalico → monopodalico",
            dose: "30″ → 30″ + 30″ per lato",
            nota: "Spinta dal tallone, nessuna iperestensione lombare",
          },
          {
            tag: "Core",
            nome: "Dead bug con controllo respiratorio",
            dose: "30″",
            nota: "Zona lombare a contatto, espirare sull'estensione",
          },
          {
            tag: "Core",
            nome: "Plank laterale con abduzione",
            dose: "2 × 30″ per lato",
            nota: "Il bacino non ruota e non cade",
          },
          {
            tag: "Core",
            nome: "Superman dinamico",
            dose: "2 × 10 per lato",
            nota: "Linea unica mano–testa–piede",
          },
          {
            tag: "Core",
            nome: "Eccentrica in discesa dal seduto (sit-back) con braccia alte",
            dose: "45″",
            nota: "Discesa lenta, vertebra per vertebra",
          },
        ],
      },
      {
        sigla: "P",
        nome: "Potentiate",
        secondi: 180,
        esercizi: [
          {
            tag: "Core",
            nome: "Plank braccia tese, vado a toccare la caviglia opposta",
            dose: "30″",
            nota: "Retroversione bacino",
          },
          { tag: "Core", nome: "Military plank", dose: "30″", nota: "Retroversione bacino" },
          { tag: "Core", nome: "Plank braccia tese, salti apro e chiudo", dose: "30″", nota: "Retroversione bacino" },
          {
            tag: "Salti",
            nome: "Broad jump con stabilizzazione all'arrivo",
            dose: "4 ripetizioni",
            nota: "Fermo 2″, anche indietro, schiena neutra",
          },
          {
            tag: "Reattività",
            nome: "Accelerazione 6 m da posizione di difesa e frenata",
            dose: "3 ripetizioni",
            nota: "Primo passo esplosivo, busto proiettato avanti",
          },
        ],
      },
    ],
    chiave: "Retroversione del bacino nel plank, spinta forte dal tallone nel bridge.",
    evidenze: ["trojian", "vandyk"],
  },

  /* ---------------------------------------------------------- 05 */
  {
    id: "05",
    nome: "Match Day",
    focus: "Attivazione e potenziamento pre-gara",
    quando: "Pre-gara e rifinitura · bersaglio prestazione di salto",
    colore: "orange",
    durata: 15,
    matchday: true,
    fasi: [
      {
        sigla: "R",
        nome: "Raise",
        secondi: 300,
        esercizi: [
          {
            tag: "Stretching dinamico",
            nome: "Camminando: ginocchio al petto, piedi all'interno, adduttori, ginocchio teso in basso, quadricipite, calciata avanti toccando il piede in alto",
            dose: "6 x 9 m",
            nota: "Camminando mantieni ciascuna posizione 1-2 secondi",
          },
          {
            tag: "Andature",
            nome: "Calciata dietro, calciata avanti saltellata, skip alto saltellato, doppio impulso, doppio impulso spostandosi lateralmente, calciata avanti normale, skip alto normale",
            dose: "8 x 9 m",
            nota: "Postura alta, appoggio di avampiede, braccia attive",
          },
        ],
      },
      {
        sigla: "AM",
        nome: "Activate & Mobilize",
        secondi: 420,
        esercizi: [
          {
            tag: "Mobilità",
            nome: "Gatto-cammello in quadrupedia",
            dose: "10 ripetizioni",
            nota: "Muovere una vertebra alla volta, non tutta la schiena insieme",
          },
          {
            tag: "Mobilità",
            nome: "Prone press-up (sfinge dinamica)",
            dose: "20″",
            nota: "Bacino a terra, estensione morbida, spalle lontane dalle orecchie",
          },
          {
            tag: "Mobilità",
            nome: "Quadrupedia con mano dietro la nuca e rotazione toracica",
            dose: "20″ per lato",
            nota: "Bacino perpendicolare, gomito che punta al soffitto",
          },
          {
            tag: "Mobilità",
            nome: "Open book / rotazioni toraciche in quadrupedia",
            dose: "20″ per lato",
            nota: "Bacino fermo, rotazione del torace",
          },
          {
            tag: "Mobilità",
            nome: "Mobilità anche da seduta, gambe piegate",
            dose: "30″",
            nota: "Mani appoggiate e poi senza mani",
          },
          { tag: "Mobilità", nome: "Swing d'anca", dose: "20″ per lato", nota: "Solo dinamico" },
          { tag: "Mobilità", nome: "Circonduzioni di spalla", dose: "60″", nota: "Solo dinamico" },
          {
            tag: "Scapola",
            nome: "Sequenza Y–T–W a terra",
            dose: "6 per lettera",
            nota: "Pollici in alto, collo rilassato",
          },
          {
            tag: "Cuffia",
            nome: "Elastici spalla: extrarotazione a 0° + 90/90",
            dose: "1 × 12 per esercizio",
            nota: "Lento in eccentrico",
          },
          {
            tag: "Scapola",
            nome: "Pulley con elastico",
            dose: "12",
            nota: "Depressione e adduzione prima del braccio",
          },
          {
            tag: "Attivazione",
            nome: "Camminata laterale con elastico + glute bridge",
            dose: "10 passi per lato + 15",
            nota: "Attivare il gluteo prima di saltare",
          },
          { tag: "Forza", nome: "Squat e affondi", dose: "30–45″", nota: "Cerca un buon range di movimento" },
          {
            tag: "Atterraggio",
            nome: "Balzo a 2 gambe e atterro con 1 + balzo monopodalico",
            dose: "4 + 4",
            nota: "Ripasso della meccanica di arrivo prima dei massimali",
          },
        ],
      },
      {
        sigla: "P",
        nome: "Potentiate",
        secondi: 180,
        esercizi: [
          {
            tag: "Salti",
            nome: "CMJ progressivi 70 → 90 → 100%",
            dose: "3 × 3",
            nota: "Recupero completo tra le serie",
          },
          { tag: "Plio", nome: "Pogo jumps", dose: "2 × 6", nota: "Poco tempo a terra" },
          {
            tag: "Reattività",
            nome: "Skip reattivo sul posto sulla linea + scatto 5 m su segnale visivo",
            dose: "4 ripetizioni",
            nota: "Reazione allo stimolo, non partenza a memoria",
          },
        ],
      },
    ],
    chiave:
      "Chiudere la fase P a ridosso dell'ingresso in campo: la finestra utile del potenziamento è circa 4-10 minuti dopo lo stimolo.",
    evidenze: ["helbin", "sun", "behm"],
  },
];

/* Rotazione settimanale -------------------------------------- */
/* giorno: 1 = lunedì ... 6 = sabato, 0 = domenica              */
const SETTIMANA = [
  { giorno: 1, label: "Lunedì", protocollo: "04", nome: "Tronco e anche", nota: "Carico basso dopo la gara, focus su controllo e catena posteriore" },
  { giorno: 2, label: "Martedì", protocollo: "01", nome: "Controllo atterraggio dai salti", nota: "Seduta ad alto volume di salto" },
  { giorno: 3, label: "Mercoledì", protocollo: "02", nome: "Spalle pronte", nota: "Seduta di battuta e attacco" },
  { giorno: 4, label: "Giovedì", protocollo: "03", nome: "Rapidità", nota: "Difesa, ricezione, rapidità" },
  { giorno: 5, label: "Venerdì", protocollo: "05", nome: "Match Day", nota: "Rifinitura con la stessa sequenza della gara", match: true },
  { giorno: 6, label: "Sabato", protocollo: "05", nome: "Match Day", nota: "Gara", match: true },
  { giorno: 0, label: "Domenica", protocollo: "05", nome: "Match Day", nota: "Gara", match: true },
];

/* Semaforo del dolore ---------------------------------------- */
const SEMAFORO = [
  {
    livello: "verde",
    titolo: "VERDE: nessun dolore",
    azione: "Prosegui",
    testo: "Dolore assente oppure lieve fastidio iniziale che scompare del tutto durante il movimento.",
  },
  {
    livello: "giallo",
    titolo: "GIALLO: fastidio costante",
    azione: "Adatta",
    testo: "Fastidio che rimane costante senza peggiorare e senza alterare l'esecuzione motoria. Riduci ampiezza o carico.",
  },
  {
    livello: "rosso",
    titolo: "ROSSO: dolore in aumento",
    azione: "Alt e avvisa",
    testo: "Dolore che modifica la meccanica del movimento o aumenta serie dopo serie. Fermati subito, sostituisci e avvisa lo staff.",
  },
];

/* =============================================================
   BASI SCIENTIFICHE
   Fonti verificate su PubMed. "pratica" = cosa cambia in campo.
   ============================================================= */
const RIFERIMENTI = {
  jeffreys: {
    autori: "Jeffreys I.",
    anno: "2007",
    titolo: "Warm-up revisited: the RAMP method of optimising warm-ups",
    rivista: "Professional Strength & Conditioning (UKSCA)",
    url: null,
  },
  gagnier: {
    autori: "Gagnier JJ, Morgenstern H, Chess L.",
    anno: "2013",
    titolo: "Interventions designed to prevent anterior cruciate ligament injuries: systematic review and meta-analysis",
    rivista: "Am J Sports Med",
    doi: "10.1177/0363546512458227",
  },
  sugimoto: {
    autori: "Sugimoto D, Myer GD, Bush HM, et al.",
    anno: "2012",
    titolo: "Compliance with neuromuscular training and ACL injury risk reduction in female athletes: a meta-analysis",
    rivista: "J Athl Train",
    doi: "10.4085/1062-6050-47.6.10",
  },
  takahashi: {
    autori: "Takahashi S, Nagano Y, Ito W, et al.",
    anno: "2019",
    titolo: "Mechanisms of ACL injuries in high school basketball, handball, judo, soccer and volleyball",
    rivista: "Medicine (Baltimore)",
    doi: "10.1097/MD.0000000000016030",
  },
  vandyk: {
    autori: "van Dyk N, Behan FP, Whiteley R.",
    anno: "2019",
    titolo: "Including the Nordic hamstring exercise in injury prevention programmes halves the rate of hamstring injuries",
    rivista: "Br J Sports Med",
    doi: "10.1136/bjsports-2018-100045",
  },
  welling: {
    autori: "Welling W, Benjaminse A, Gokeler A, Otten B.",
    anno: "2016",
    titolo: "Enhanced retention of drop vertical jump landing technique: a randomized controlled trial",
    rivista: "Hum Mov Sci",
    doi: "10.1016/j.humov.2015.11.008",
  },
  armitano: {
    autori: "Armitano CN, Haegele JA, Russell DM.",
    anno: "2018",
    titolo: "The use of augmented information for reducing ACL injury risk during jump landings: a systematic review",
    rivista: "J Athl Train",
    doi: "10.4085/1062-6050-320-17",
  },
  challoumas: {
    autori: "Challoumas D, Stavrou A, Dimitrakakis G.",
    anno: "2017",
    titolo: "The volleyball athlete's shoulder: biomechanical adaptations and injury associations",
    rivista: "Sports Biomech",
    doi: "10.1080/14763141.2016.1222629",
  },
  cools: {
    autori: "Cools AM, Johansson FR, Borms D, Maenhout A.",
    anno: "2015",
    titolo: "Prevention of shoulder injuries in overhead athletes: a science-based approach",
    rivista: "Braz J Phys Ther",
    doi: "10.1590/bjpt-rbf.2014.0109",
  },
  keller: {
    autori: "Keller RA, De Giacomo AF, Neumann JA, et al.",
    anno: "2018",
    titolo: "Glenohumeral internal rotation deficit and risk of upper extremity injury in overhead athletes: meta-analysis",
    rivista: "Sports Health",
    doi: "10.1177/1941738118756577",
  },
  verhagen: {
    autori: "Verhagen E, van der Beek A, Twisk J, et al.",
    anno: "2004",
    titolo: "The effect of a proprioceptive balance board training program for the prevention of ankle sprains",
    rivista: "Am J Sports Med",
    doi: "10.1177/0363546503262177",
  },
  haines: {
    autori: "Haines M, Murray AM, Glaviano NR, et al.",
    anno: "2020",
    titolo: "Restricting ankle dorsiflexion does not mitigate the benefits of external focus on landing biomechanics",
    rivista: "Hum Mov Sci",
    doi: "10.1016/j.humov.2020.102719",
  },
  trojian: {
    autori: "Trojian T, Driban J, Nuti R, et al.",
    anno: "2017",
    titolo: "Best practice features of ACL and lower limb injury prevention programs (consensus)",
    rivista: "World J Orthop",
    doi: "10.5312/wjo.v8.i9.726",
  },
  behm: {
    autori: "Behm DG, Blazevich AJ, Kay AD, McHugh M.",
    anno: "2016",
    titolo: "Acute effects of muscle stretching on performance, range of motion and injury incidence: systematic review",
    rivista: "Appl Physiol Nutr Metab",
    doi: "10.1139/apnm-2015-0235",
  },
  helbin: {
    autori: "Helbin J, Gaweł D, Terbalyan A, et al.",
    anno: "2025",
    titolo: "Acute effects of isometric conditioning activity distribution on jump performance in volleyball players",
    rivista: "J Funct Morphol Kinesiol",
    doi: "10.3390/jfmk10030343",
  },
  sun: {
    autori: "Sun S, Yu Y, Niu Y, et al.",
    anno: "2024",
    titolo: "Post-activation performance enhancement of flywheel and traditional squats on vertical jump",
    rivista: "Front Physiol",
    doi: "10.3389/fphys.2024.1443899",
  },
};

const EVIDENZE = [
  {
    titolo: "Il riscaldamento come programma di prevenzione",
    punto:
      "Gli interventi neuromuscolari inseriti nel riscaldamento riducono di circa il 50% il tasso di lesioni al crociato. Il consenso internazionale indica sei ingredienti: forza di arti inferiori e core, pliometria, feedback continuo sulla tecnica, dose sufficiente, poco o nessun attrezzo, equilibrio.",
    pratica:
      "Tutti e cinque i protocolli contengono quei sei ingredienti. È il motivo per cui il warm up dura 15 minuti e non 5.",
    refs: ["gagnier", "trojian"],
  },
  {
    titolo: "L'aderenza conta più della complessità",
    punto:
      "Nelle squadre femminili con alta aderenza al programma neuromuscolare l'incidenza di lesione al crociato è nettamente più bassa rispetto a quelle con aderenza medio-bassa: esiste una relazione dose-risposta tra sedute svolte e protezione ottenuta.",
    pratica:
      "Meglio il protocollo del giorno fatto tutte le volte che il protocollo perfetto fatto a metà. Se il tempo è poco, accorcia, non saltare.",
    refs: ["sugimoto"],
  },
  {
    titolo: "Nel volley il crociato si rompe atterrando, senza contatto",
    punto:
      "Nell'analisi di 1000 casi in cinque sport, la pallavolo è quella con la quota più alta di lesioni senza contatto: circa 86% dei casi, tipicamente in atterraggio da salto.",
    pratica:
      "L'atterraggio è un gesto da allenare tutti i giorni, non un dettaglio. Protocollo 01 il martedì, ripasso della meccanica di arrivo anche nel match day.",
    refs: ["takahashi"],
  },
  {
    titolo: "Le parole giuste valgono quanto l'esercizio",
    punto:
      "Le istruzioni a focus esterno (il risultato del movimento) migliorano la meccanica di atterraggio più di quelle a focus interno (il segmento corporeo), e l'effetto resta a distanza di una settimana. Informazione prescrittiva più feedback danno la ritenzione migliore.",
    pratica:
      'Usa "atterra silenzioso", "come una molla", "resta stabile 2 secondi" invece di "piega il ginocchio", "contrai il gluteo". Correggi ogni serie, non solo la prima.',
    refs: ["welling", "armitano", "haines"],
  },
  {
    titolo: "Spalla del pallavolista: la forza conta più della rigidità",
    punto:
      "Nella pallavolo il deficit di rotazione interna sembra un adattamento anatomico e non risulta associato al dolore di spalla. Ciò che risulta associato è lo squilibrio muscolare, in particolare la debolezza degli extrarotatori, insieme alla discinesia scapolare.",
    pratica:
      "Nel protocollo 02 la priorità è il lavoro di forza su cuffia e scapola, non lo stretching aggressivo della capsula posteriore. Se il tempo scarseggia, tieni extrarotazioni, wall slide e pulley.",
    refs: ["challoumas", "cools", "keller"],
  },
  {
    titolo: "Caviglia: l'equilibrio protegge soprattutto chi ha già avuto una distorsione",
    punto:
      "Nel grande studio su 116 squadre di pallavolo il programma di equilibrio inserito nel riscaldamento ha ridotto le distorsioni di caviglia, con effetto significativo nelle atlete con storia di distorsione precedente.",
    pratica:
      "Nel protocollo 03 il monopodalico e lo Y-balance sono obbligatori per chi ha precedenti di caviglia. Per le altre restano lavoro di controllo utile e a costo zero.",
    refs: ["verhagen"],
  },
  {
    titolo: "Nordic hamstring: mezza lesione in meno ai femorali",
    punto:
      "L'inclusione del Nordic hamstring nei programmi di prevenzione dimezza il tasso di lesioni ai femorali (riduzione del rischio intorno al 50%) in sport e popolazioni diverse.",
    pratica:
      "Bastano poche discese lente di qualità: 1 × 5 da 4 secondi, a coppie, dentro la fase AM del protocollo 01.",
    refs: ["vandyk"],
  },
  {
    titolo: "Stretching: dinamico prima, statico lungo altrove",
    punto:
      "Lo stretching statico prolungato (60 secondi o più per gruppo muscolare) riduce la prestazione subito dopo; quello dinamico produce piccoli miglioramenti se svolto pochi minuti prima dell'attività. Con attività dinamica successiva, l'effetto negativo si annulla.",
    pratica:
      "Nel warm up si lavora camminando e in movimento, tenute brevi. Lo stretching lungo si sposta a fine seduta o in sedute dedicate.",
    refs: ["behm"],
  },
  {
    titolo: "Finestra del potenziamento nel match day",
    punto:
      "Dopo uno stimolo condizionante intenso il salto migliora in una finestra di alcuni minuti: negli studi su pallavolisti gli incrementi del CMJ compaiono tipicamente tra il terzo e il dodicesimo minuto, con recuperi individualizzati che ne massimizzano l'effetto.",
    pratica:
      "Chiudi la fase P a ridosso dell'ingresso in campo, non 20 minuti prima. Recupero completo tra le serie di CMJ: qui serve qualità, non fatica.",
    refs: ["helbin", "sun"],
  },
];

/* Indicatori chiave ------------------------------------------ */
const KPI = [
  { valore: "15′", label: "Durata quotidiana", nota: "Prevenzione e attivazione insieme", colore: "cyan", ref: "trojian" },
  { valore: "86%", label: "Lesioni LCA senza contatto", nota: "Nel volley, in atterraggio", colore: "orange", ref: "takahashi" },
  { valore: "-50%", label: "Rischio LCA", nota: "Con training neuromuscolare", colore: "green", ref: "gagnier" },
  { valore: "Dose", label: "L'aderenza fa l'effetto", nota: "Alta aderenza, meno infortuni", colore: "yellow", ref: "sugimoto" },
];
