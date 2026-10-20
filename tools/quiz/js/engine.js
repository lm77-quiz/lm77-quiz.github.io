// engine.js — campionamento, shuffle, scoring, pesi di ripasso.
//
// Modulo PURO: nessun riferimento a DOM/window, importabile da Node.
// Tutte le funzioni che usano casualità accettano un `rng` iniettabile
// (default Math.random) così da essere testabili in modo deterministico.

/** Hash stabile a 32 bit (FNV-1a) in base36. Usato per id e contentHash. */
export function stableHash(input) {
  const s = String(input === null || input === undefined ? '' : input);
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(36).padStart(7, '0');
}

/** PRNG deterministico (mulberry32) — utile nei test. */
export function makeRng(seed) {
  let a = (Number(seed) || 0) >>> 0;
  return function rng() {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Fisher–Yates, non distruttivo. */
export function shuffle(list, rng = Math.random) {
  const out = Array.from(list || []);
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const tmp = out[i];
    out[i] = out[j];
    out[j] = tmp;
  }
  return out;
}

/** Estrae al massimo `n` elementi distinti, in ordine casuale. */
export function sample(list, n, rng = Math.random) {
  const arr = Array.from(list || []);
  const k = Math.max(0, Math.min(Number(n) || 0, arr.length));
  return shuffle(arr, rng).slice(0, k);
}

// ---------------------------------------------------------------------------
// Selezione delle lezioni
// ---------------------------------------------------------------------------

/**
 * Comprime una lista di numeri di lezione in intervalli leggibili:
 * `["01","02","03","05","07","08"]` → `"01–03, 05, 07–08"`. Serve al
 * promemoria del filtro durante la prova: con la selezione libera una prova
 * può coprire 29 lezioni su 30, e l'elenco per esteso diventerebbe un muro.
 *
 * La contiguità si valuta sul valore numerico, la stampa conserva la stringa
 * zero-padded così com'è scritta nel markdown.
 */
export function compactLessons(numbers) {
  const sorted = Array.from(new Set((numbers || []).map(String)))
    .filter((n) => Number.isFinite(parseInt(n, 10)))
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
  const runs = [];
  for (const n of sorted) {
    const last = runs[runs.length - 1];
    if (last && parseInt(n, 10) === parseInt(last.end, 10) + 1) last.end = n;
    else runs.push({ start: n, end: n });
  }
  return runs.map((r) => (r.start === r.end ? r.start : `${r.start}–${r.end}`)).join(', ');
}

/**
 * Elenco delle lezioni selezionabili, ricavato DAGLI ITEM e non da
 * `exam.quiz.lessons`: così ogni voce mostrata contiene davvero qualcosa da
 * pescare e i conteggi coincidono con ciò che finisce nella prova. Una lezione
 * con sole flashcard (nessun quiz) compare comunque, con `mcq: 0`.
 *
 * `number` è la stringa così com'è scritta nel markdown, di norma zero-padded
 * (`"01"`, `"16"`). L'ordinamento però è NUMERICO: i parser accettano anche
 * `## Lezione 9`, che in ordine alfabetico finirebbe dopo la 15 — e da
 * quest'ordine dipendono le «ultime N» di splitRecentLessons().
 *
 * @returns {Array<{number:string, title:string, mcq:number, cards:number}>}
 */
export function lessonPool(questions, cards) {
  const byNumber = new Map();
  const add = (item, field) => {
    if (!item || !item.lesson) return;
    const key = String(item.lesson);
    let entry = byNumber.get(key);
    if (!entry) {
      entry = { number: key, title: item.lessonTitle || '', mcq: 0, cards: 0 };
      byNumber.set(key, entry);
    }
    // Il titolo si prende dal primo item che ne porta uno: le due sorgenti
    // (domande e flashcard) hanno la stessa intestazione di lezione, ma un
    // file potrebbe averla vuota.
    if (!entry.title && item.lessonTitle) entry.title = item.lessonTitle;
    entry[field] += 1;
  };
  for (const q of questions || []) add(q, 'mcq');
  for (const c of cards || []) add(c, 'cards');
  return Array.from(byNumber.values())
    .sort((a, b) => parseInt(a.number, 10) - parseInt(b.number, 10) || a.number.localeCompare(b.number));
}

/**
 * Ampiezza del blocco «ultime lezioni» dei comandi rapidi del filtro: 10 per i
 * corsi da 5 CFU in su, 5 per quelli fino a 4. CFU assente o non numerico → 0,
 * cioè nessun blocco: meglio niente bottoni che un'ampiezza tirata a indovinare.
 */
export function recentLessonCount(cfu) {
  const n = Number(cfu);
  if (!Number.isFinite(n) || n <= 0) return 0;
  return n >= 5 ? 10 : 5;
}

/**
 * Divide l'elenco delle lezioni in blocco vecchio e blocco recente, per i
 * comandi «Tutte tranne le ultime N» / «Solo le ultime N».
 *
 * «Ultime» vale per POSIZIONE nell'elenco ricevuto (quello di `lessonPool`,
 * già ordinato), non per numero nominale: su un corso completo le due letture
 * coincidono, ma su uno caricato a metà le «ultime 10» sono le ultime dieci
 * lezioni che hanno davvero degli item, non le 21–30 del piano del corso.
 *
 * `null` se il CFU è ignoto o se le lezioni non superano N: «tranne le ultime
 * N» sarebbe vuoto e «solo le ultime N» coinciderebbe con «Seleziona tutte».
 *
 * @returns {{n:number, older:string[], recent:string[]} | null}
 */
export function splitRecentLessons(numbers, cfu) {
  const list = Array.from(numbers || []).map(String);
  const n = recentLessonCount(cfu);
  if (!n || list.length <= n) return null;
  return { n, older: list.slice(0, -n), recent: list.slice(-n) };
}

/**
 * Filtra gli item sulle lezioni scelte. Lista vuota o assente = nessun filtro,
 * quindi `items` invariato: è lo stato di default della schermata.
 *
 * Il confronto è fra STRINGHE, perché `lesson` è il numero zero-padded così
 * com'è scritto nel markdown ("05"): confrontarlo con un numero non
 * troverebbe nulla.
 */
export function filterByLessons(items, lessons) {
  const wanted = (lessons || []).map(String);
  if (!wanted.length) return Array.from(items || []);
  const set = new Set(wanted);
  return (items || []).filter((it) => it && set.has(String(it.lesson)));
}

/**
 * Toglie dal pool le flashcard che l'utente ha escluso dalle prove (vedi
 * `excludedIds` in storage.js). È il filtro UNICO: lo usano l'avvio della
 * sessione, i cursori della configurazione e i suggerimenti di studio, così i
 * conteggi a schermo e ciò che la prova pesca non divergono mai. Insieme vuoto
 * o assente = nessun filtro.
 */
export function withoutExcluded(items, excluded) {
  const list = Array.from(items || []);
  if (!excluded || !excluded.size) return list;
  return list.filter((it) => !(it && excluded.has(it.id)));
}

// ---------------------------------------------------------------------------
// Ripartizione a totale fisso della simulazione
// ---------------------------------------------------------------------------

/**
 * Numero di item (MCQ + flashcard) di una simulazione **per default**: è il
 * valore con cui parte la schermata di configurazione, dove un cursore lo può
 * portare da 1 al numero di item disponibili. Resta l'unico punto da toccare
 * per cambiare la lunghezza predefinita della prova.
 */
export const SIM_TOTAL = 30;

function toCount(v) {
  const n = Math.round(Number(v));
  return Number.isFinite(n) && n > 0 ? n : 0;
}

function clampInt(v, lo, hi) {
  return Math.max(lo, Math.min(toCount(v), hi));
}

/**
 * Ripartizione COMPLEMENTARE fra domande a risposta multipla e flashcard, a
 * totale fisso: i due contatori non sono indipendenti, uno è il complemento
 * dell'altro rispetto al totale effettivo.
 *
 *   totale effettivo = min(total, mcqDisponibili + cardsDisponibili)
 *   mcq ∈ [max(0, totale − cardsDisp), min(mcqDisp, totale)]   (e simmetrico)
 *
 * Se i materiali non bastano il totale scende e `insufficient` diventa true.
 *
 * @param {number} mcqAvailable  domande disponibili per l'esame
 * @param {number} cardsAvailable flashcard disponibili per l'esame
 * @param {null|{type:'mcq'|'cards', value:number}} lead
 *        controllo mosso dall'utente (o valore da ripristinare dalle prefs);
 *        `null` = stato di default (più MCQ possibile, resto in flashcard).
 * @param {number} [total=SIM_TOTAL] totale nominale
 * @returns {{total:number, target:number, insufficient:boolean, mcq:number,
 *            cards:number, mcqMin:number, mcqMax:number, cardMin:number,
 *            cardMax:number, mcqAvailable:number, cardsAvailable:number}}
 */
export function planSimCounts(mcqAvailable, cardsAvailable, lead = null, total = SIM_TOTAL) {
  const availMcq = toCount(mcqAvailable);
  const availCards = toCount(cardsAvailable);
  const target = toCount(total);
  const effective = Math.min(target, availMcq + availCards);

  const mcqMin = Math.max(0, effective - availCards);
  const mcqMax = Math.min(availMcq, effective);
  const cardMin = Math.max(0, effective - availMcq);
  const cardMax = Math.min(availCards, effective);

  let mcq;
  if (lead && lead.type === 'cards') {
    mcq = effective - clampInt(lead.value, cardMin, cardMax);
  } else if (lead && lead.type === 'mcq') {
    mcq = clampInt(lead.value, mcqMin, mcqMax);
  } else {
    // default: quante più MCQ possibile, il resto completato con le flashcard
    mcq = clampInt(target, mcqMin, mcqMax);
  }

  return {
    total: effective,
    target,
    insufficient: effective < target,
    mcq,
    cards: effective - mcq,
    mcqMin,
    mcqMax,
    cardMin,
    cardMax,
    mcqAvailable: availMcq,
    cardsAvailable: availCards,
  };
}

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

/**
 * Prepara gli item MCQ di una sessione: domande in ordine casuale e opzioni
 * rimescolate con le lettere ricalcolate. La chiave originale resta sempre
 * accessibile via `origKey`, quindi la correzione non dipende dal rimescolamento.
 *
 * @returns {Array<{question, options: Array<{key,origKey,text}>}>}
 */
export function prepareMcqItems(questions, n, rng = Math.random) {
  return sample(questions, n, rng).map((question) => ({
    question,
    options: shuffle(question.options, rng).map((opt, i) => ({
      key: LETTERS[i] || String(i + 1),
      origKey: opt.key,
      text: opt.text,
    })),
  }));
}

/**
 * Le flashcard con almeno due distrattori curati si giocano a risposta
 * multipla; le altre restano ad autovalutazione.
 */
export function cardHasMcq(card) {
  const n = (card && card.distractors ? card.distractors.length : 0);
  return n >= 2;
}

/**
 * Vista question-like di una flashcard, così che tutta la macchina MCQ già
 * scritta (rimescolamento, `origKey`, `scoreMcq`) valga anche per le card.
 * La chiave corretta è sempre `A` **nel file**; a schermo diventa un'altra
 * lettera dopo il rimescolamento.
 *
 * Le card non hanno una chiave della piattaforma: `platformKey` resta assente,
 * e in `scoreMcq` il fallback `platformKey || correctKey` (più sotto) rende
 * `platformCorrect === correct` e `hasPlatformMismatch === false`. Il 🚨 di una
 * flashcard segnala un contenuto insidioso, non una chiave difforme.
 */
export function cardToMcq(card) {
  return {
    id: card.id,
    kind: 'card',
    lesson: card.lesson,
    lessonTitle: card.lessonTitle,
    risk: card.risk,
    text: card.question,
    answer: card.answer,
    card,
    options: [
      { key: 'A', text: card.optionText || card.answer, correct: true },
      ...card.distractors.map((text, i) => ({ key: LETTERS[i + 1], text, correct: false })),
    ],
    correctKey: 'A',
    contentHash: card.contentHash,
  };
}

/**
 * Prepara UNA card per volta: `prepareMcqItems` campiona al proprio interno,
 * quindi passargli l'intera lista ne rimescolerebbe l'ordine e disallineerebbe
 * gli item dalle card già campionate. Con n = 1 il campionamento è l'identità e
 * resta solo il rimescolamento delle opzioni.
 *
 * @returns {object|null} null se la card non ha distrattori: resta ad autovalutazione.
 */
export function prepareCardItem(card, rng = Math.random) {
  if (!cardHasMcq(card)) return null;
  return prepareMcqItems([cardToMcq(card)], 1, rng)[0];
}

/** Da lettera mostrata a lettera originale del file. */
export function toOriginalKey(item, displayKey) {
  if (!item || !displayKey) return null;
  const found = (item.options || []).find((o) => o.key === displayKey);
  return found ? found.origKey : null;
}

/**
 * Corregge un blocco MCQ.
 * `answers` è una mappa id -> lettera MOSTRATA (o null se in bianco).
 * Restituisce il dettaglio per domanda più i due punteggi: quello **nel merito**
 * (chiave ✅ delle slide) e quello **secondo la chiave della piattaforma**.
 */
export function scoreMcq(items, answers) {
  const detail = (items || []).map((item) => {
    const q = item.question;
    const displayKey = (answers && answers[q.id]) || null;
    const givenKey = toOriginalKey(item, displayKey);
    const platformKey = q.platformKey || q.correctKey;
    return {
      id: q.id,
      question: q,
      item,
      displayKey,
      givenKey,
      answered: !!givenKey,
      correct: !!givenKey && givenKey === q.correctKey,
      platformCorrect: !!givenKey && givenKey === platformKey,
    };
  });
  return {
    detail,
    total: detail.length,
    correct: detail.filter((d) => d.correct).length,
    platformCorrect: detail.filter((d) => d.platformCorrect).length,
    blank: detail.filter((d) => !d.answered).length,
    hasPlatformMismatch: detail.some((d) => d.question.platformMismatch),
  };
}

/** Item del blocco a risposta multipla che viene da una flashcard. */
export function isCardItem(item) {
  return !!(item && item.question && item.question.kind === 'card');
}

/**
 * Corregge una sessione conclusa e ne ricava le voci dello storico.
 *
 * Il blocco a risposta multipla mescola domande d'esame e flashcard, con
 * un'unica mappa `answers` (id → lettera MOSTRATA); `index` su ogni dettaglio è
 * la posizione nel blocco, così il riepilogo numera come la griglia qualunque
 * sia l'ordine.
 *
 * Le due quote trattano il bianco in modo diverso, di proposito: una domanda
 * d'esame in bianco è un errore, come all'esame vero; una flashcard in bianco
 * è una card non vista, quindi resta fuori dal punteggio e dallo **storico** —
 * altrimenti una prova consegnata a metà riempirebbe «Ripassa errori» di card
 * mai aperte.
 *
 * @param {{blockItems: Array, answers: object, selfCards: Array, cardResults: object}} session
 * @returns {{mcq, cards, items: Array, score: object}}
 */
export function scoreSession({ blockItems = [], answers = {}, selfCards = [], cardResults = {} } = {}) {
  const position = new Map(blockItems.map((item, i) => [item, i]));
  const withIndex = (score) => ({
    ...score,
    detail: score.detail.map((d) => ({ ...d, index: position.get(d.item) })),
  });
  const mcq = withIndex(scoreMcq(blockItems.filter((it) => !isCardItem(it)), answers));
  const cardMcq = withIndex(scoreMcq(blockItems.filter(isCardItem), answers));

  const cardMcqDetail = cardMcq.detail.map((d) => ({
    card: d.question.card,
    item: d.item,
    index: d.index,
    mode: 'mcq',
    givenKey: d.givenKey,
    displayKey: d.displayKey,
    answered: d.answered,
    correct: d.correct,
  }));
  const selfDetail = selfCards.map((card) => ({
    card,
    item: null,
    index: null,
    mode: 'self',
    correct: !!(cardResults[card.id] && cardResults[card.id].correct),
  }));
  const cardMcqAnswered = cardMcqDetail.filter((c) => c.answered);

  // `correct` è popolato per ogni voce: è l'unico campo che lo storico rilegge.
  const items = [
    ...mcq.detail.map((d) => ({
      id: d.id,
      type: 'mcq',
      lesson: d.question.lesson,
      givenKey: d.givenKey,
      correct: d.correct,
      // snapshot leggibile dall'LLM senza dover incrociare gli id
      text: d.question.text,
      contentHash: d.question.contentHash,
    })),
    ...cardMcqAnswered.map((c) => ({
      id: c.card.id,
      type: 'card',
      lesson: c.card.lesson,
      givenKey: c.givenKey,
      correct: c.correct,
      text: c.card.question,
      contentHash: c.card.contentHash,
    })),
    ...selfDetail.map((c) => ({
      id: c.card.id,
      type: 'card',
      lesson: c.card.lesson,
      selfEval: c.correct ? 'sapevo' : 'non-sapevo',
      correct: c.correct,
      text: c.card.question,
      contentHash: c.card.contentHash,
    })),
  ];

  const selfKnown = selfDetail.filter((c) => c.correct).length;
  const cardMcqCorrect = cardMcqAnswered.filter((c) => c.correct).length;
  return {
    mcq,
    cards: {
      detail: [...cardMcqDetail, ...selfDetail],
      selfTotal: selfDetail.length,
      selfKnown,
      mcqTotal: cardMcqDetail.length,
      mcqAnswered: cardMcqAnswered.length,
      mcqBlank: cardMcqDetail.length - cardMcqAnswered.length,
      mcqCorrect: cardMcqCorrect,
    },
    items,
    score: {
      mcqCorrect: mcq.correct,
      mcqTotal: mcq.total,
      mcqPlatformCorrect: mcq.platformCorrect,
      // `cardsKnown/cardsTotal` restano il conteggio delle sole autovalutate,
      // così le sessioni vecchie e nuove si leggono allo stesso modo;
      // `cardMcqTotal` conta solo le card registrate, cioè quelle con risposta.
      cardsKnown: selfKnown,
      cardsTotal: selfDetail.length,
      cardMcqCorrect,
      cardMcqTotal: cardMcqAnswered.length,
    },
  };
}

/**
 * Ordine del riepilogo: prima ciò che è da rivedere, poi le flashcard non
 * viste, infine le corrette — su tutta la pagina e non per tipo, così l'errore
 * su una flashcard non finisce sotto venti domande d'esame giuste.
 *
 *   wrong   — domande d'esame sbagliate O in bianco (all'esame il bianco è un
 *             errore), flashcard a risposta multipla sbagliate, autovalutate
 *             «non la sapevo»;
 *   unseen  — flashcard a risposta multipla in bianco: card non viste, fuori
 *             dal punteggio e dallo storico, quindi né errori né corrette;
 *   correct — tutto il resto.
 *
 * In ogni gruppo vengono prima le voci del blocco a risposta multipla, per
 * `index` (domande d'esame e poi card, perché il blocco le mette così), poi le
 * autovalutate nell'ordine in cui sono state giocate.
 *
 * @param {{detail:Array}} mcq    `scoreSession().mcq`
 * @param {{detail:Array}} cards  `scoreSession().cards`
 * @returns {{wrong:Array, unseen:Array, correct:Array}} voci `{kind, d}`, con
 *          `kind` ∈ 'question' | 'card-mcq' | 'card-self'
 */
export function summaryGroups(mcq, cards) {
  const groups = { wrong: [], unseen: [], correct: [] };
  const block = [
    ...((mcq && mcq.detail) || []).map((d) => ({ kind: 'question', d })),
    ...((cards && cards.detail) || []).filter((d) => d.mode === 'mcq').map((d) => ({ kind: 'card-mcq', d })),
  ].sort((a, b) => (a.d.index ?? 0) - (b.d.index ?? 0));
  for (const entry of block) {
    const { d } = entry;
    if (d.correct) groups.correct.push(entry);
    else if (!d.answered && entry.kind === 'card-mcq') groups.unseen.push(entry);
    else groups.wrong.push(entry);
  }
  for (const d of ((cards && cards.detail) || []).filter((c) => c.mode === 'self')) {
    groups[d.correct ? 'correct' : 'wrong'].push({ kind: 'card-self', d });
  }
  return groups;
}

// ---------------------------------------------------------------------------
// Pesi per la modalità "Ripassa errori"
// ---------------------------------------------------------------------------

const DAY_MS = 86400000;

/** Peso di default per una domanda mai vista. */
export const WEIGHT_UNSEEN = 0.35;

/**
 * peso = wrong/seen + 1.0·(lastResult == errata) + exp(−giorni/14) − 0.5·min(streakCorrect,2)
 * Le domande mai viste (stat assente) valgono WEIGHT_UNSEEN.
 */
export function reviewWeight(stat, now = Date.now()) {
  if (!stat || !stat.seen) return WEIGHT_UNSEEN;
  const ratio = (stat.wrong || 0) / stat.seen;
  const lastWrongBonus = stat.lastResult === 'errata' ? 1 : 0;
  let recency = 0;
  if (stat.lastWrongAt) {
    const t = Date.parse(stat.lastWrongAt);
    if (!Number.isNaN(t)) {
      const days = Math.max(0, (now - t) / DAY_MS);
      recency = Math.exp(-days / 14);
    }
  }
  const streakPenalty = 0.5 * Math.min(stat.streakCorrect || 0, 2);
  return ratio + lastWrongBonus + recency - streakPenalty;
}

/**
 * Ordina gli item per peso decrescente (a parità di peso, ordine stabile).
 * Vale per le domande a risposta multipla e per le flashcard indifferentemente:
 * l'unica cosa che serve è `.id` e la mappa dello storico.
 * @returns {Array<{item, weight}>}
 */
export function rankForReview(items, perQuestion = {}, now = Date.now()) {
  return (items || [])
    .map((item, index) => ({
      item,
      weight: reviewWeight(perQuestion[item.id], now),
      index,
    }))
    .sort((a, b) => b.weight - a.weight || a.index - b.index)
    .map(({ item, weight }) => ({ item, weight }));
}

/** Campionamento pesato senza reinserimento (roulette wheel). */
export function pickWeighted(entries, n, rng = Math.random) {
  const pool = (entries || []).map((e) => ({
    item: e.item,
    weight: Math.max(0.01, Number(e.weight) || 0),
  }));
  const k = Math.max(0, Math.min(Number(n) || 0, pool.length));
  const out = [];
  for (let i = 0; i < k; i++) {
    const total = pool.reduce((acc, e) => acc + e.weight, 0);
    let r = rng() * total;
    let idx = pool.length - 1;
    for (let j = 0; j < pool.length; j++) {
      r -= pool[j].weight;
      if (r <= 0) { idx = j; break; }
    }
    out.push(pool[idx].item);
    pool.splice(idx, 1);
  }
  return out;
}

/**
 * Pool della modalità ripasso: prima gli item con wrong > 0 (pesati), poi, se
 * non bastano, gli altri pescati a caso. Si applica sia alle domande sia alle
 * flashcard: lo storico registra `correct` per entrambe.
 */
export function pickReviewItems(items, perQuestion = {}, n, rng = Math.random) {
  const wrongOnes = [];
  const rest = [];
  for (const q of items || []) {
    const stat = perQuestion[q.id];
    if (stat && (stat.wrong || 0) > 0) wrongOnes.push(q);
    else rest.push(q);
  }
  const ranked = rankForReview(wrongOnes, perQuestion, Date.now());
  const picked = pickWeighted(ranked, n, rng);
  if (picked.length < n) {
    picked.push(...sample(rest, n - picked.length, rng));
  }
  return picked;
}

/** Quanti item sono attualmente "da ripassare". */
export function countReviewable(items, perQuestion = {}) {
  return (items || []).filter((q) => {
    const s = perQuestion[q.id];
    return s && (s.wrong || 0) > 0;
  }).length;
}
