// storage.js — ErrorLog, merge idempotente, localStorage, export/import.
//
// La parte di merge/aggregazione è PURA (importabile da Node): tutte le
// funzioni che toccano localStorage lo fanno in modo pigro e protetto, quindi
// il modulo si importa senza errori anche fuori dal browser.
//
// Modello:
//   ErrorLog = { version, exam, updatedAt, sessions:[Attempt…], perQuestion:{…},
//                exclusions:[Evento…], excluded:{…} }
// `sessions` è la FONTE DI VERITÀ; `perQuestion` è SEMPRE ricomputato dalle
// sessions ⇒ import/export ripetuti sono idempotenti (unione per `uid`, poi
// ricalcolo): nessun contatore viene mai sommato due volte.
//
// Le flashcard escluse dalle prove seguono lo stesso schema: `exclusions` è
// la fonte di verità — eventi «esclusa / ripristinata», uniti per `uid` e
// compattati all'ultimo evento di ogni card — e `excluded` è derivato, le card
// il cui ultimo evento vale `true`. Un semplice insieme di id non basterebbe:
// unito con una sorgente più vecchia (il quiz-errori.json committato, il
// server), il ripristino non si propagherebbe mai e la card tornerebbe esclusa
// al primo avvio. Per questo anche il ripristino resta, come evento.
//
// Due formati di export, con ruoli diversi:
//   - ErrorLog di un singolo esame  → si committa in exams/<slug>/quiz-errori.json
//     e viene reimportato da solo al boot (discovery.fetchRemoteLog);
//   - Backup multi-esame            → { format, version, exportedAt, prefs,
//     exams: {slug: ErrorLog} }, per salvare tutto in un colpo prima di un
//     rifacimento del lab. Entrambi rientrano dallo stesso import.

import { SIM_TOTAL } from './engine.js';

export const VERSION = 1;
export const PREFIX = 'lm77quiz.v1';
export const SESSION_CAP = 100;
// Le esclusioni sono compattate a un evento per card, quindi non crescono oltre
// il numero di flashcard di un esame (oggi al massimo ~1300): il tetto esiste
// solo contro un archivio corrotto o un client impazzito. Stesso valore in
// serve.py, per la stessa ragione di SESSION_CAP.
export const EXCLUSION_CAP = 5000;
export const BACKUP_FORMAT = 'lm77quiz-backup';

// ---------------------------------------------------------------------------
// Parte pura
// ---------------------------------------------------------------------------

export function emptyLog(exam = '') {
  return {
    version: VERSION, exam, updatedAt: null, sessions: [], perQuestion: {},
    exclusions: [], excluded: {},
  };
}

/** Normalizza un oggetto arbitrario (da JSON/localStorage) in un ErrorLog. */
export function normalizeLog(raw, exam = '') {
  if (!raw || typeof raw !== 'object') return emptyLog(exam);
  const sessions = Array.isArray(raw.sessions) ? raw.sessions.filter(isAttempt) : [];
  return rebuild(raw.exam || exam, sessions, raw.exclusions);
}

function isAttempt(s) {
  return !!s && typeof s === 'object' && typeof s.uid === 'string' && Array.isArray(s.items);
}

/** Evento di esclusione ben formato: lo stesso filtro di `_clean_exclusions` in serve.py. */
export function isExclusionEvent(e) {
  return !!e && typeof e === 'object'
    && typeof e.uid === 'string' && !!e.uid
    && typeof e.id === 'string' && !!e.id
    && typeof e.ts === 'string' && !!e.ts
    && typeof e.excluded === 'boolean';
}

function cleanExclusions(raw) {
  return Array.isArray(raw) ? raw.filter(isExclusionEvent) : [];
}

function tsOf(s) {
  const t = Date.parse(s && s.ts);
  return Number.isNaN(t) ? 0 : t;
}

/** Ordine di sessioni ed eventi: ts, poi uid. Unico per entrambe le liste. */
const byTsUid = (a, b) => tsOf(a) - tsOf(b) || (a.uid < b.uid ? -1 : a.uid > b.uid ? 1 : 0);

/** Unione per `uid`, primo vincitore, ordinata per (ts, uid). */
function unionByUid(...lists) {
  const byUid = new Map();
  for (const list of lists) {
    for (const e of list) if (!byUid.has(e.uid)) byUid.set(e.uid, e);
  }
  return Array.from(byUid.values()).sort(byTsUid);
}

/**
 * Eventi di esclusione uniti per `uid` e COMPATTATI: di ogni card resta solo
 * l'ultimo evento, che è l'unico a decidere se è esclusa. È sicuro perché
 * «l'ultimo» è un massimo su un ordine totale (ts, uid): compattare prima o
 * dopo un'unione dà lo stesso risultato, quindi il merge resta idempotente,
 * commutativo e associativo — e l'elenco non cresce a ogni clic.
 */
function foldExclusions(...lists) {
  const latest = new Map();
  for (const e of unionByUid(...lists.map(cleanExclusions))) latest.set(e.id, e);
  const out = Array.from(latest.values()).sort(byTsUid);
  return out.slice(Math.max(0, out.length - EXCLUSION_CAP));
}

/**
 * Come mergeLogs, ma riporta anche che cosa è successo:
 *   added   — sessioni presenti in `incoming` e non in `base`;
 *   dropped — sessioni scartate dal cap (le più VECCHIE dell'unione).
 * `dropped` va mostrato all'utente: importare un archivio lungo può abbassare i
 * contatori di `perQuestion`, e senza segnalazione sembrerebbe una perdita muta.
 */
export function mergeLogsWithStats(base, incoming, opts = {}) {
  const cap = opts.cap || SESSION_CAP;
  const baseSessions = ((base && base.sessions) || []).filter(isAttempt);
  const incomingSessions = ((incoming && incoming.sessions) || []).filter(isAttempt);
  const sessions = unionByUid(baseSessions, incomingSessions);
  const baseUids = new Set(baseSessions.map((s) => s.uid));
  const added = sessions.filter((s) => !baseUids.has(s.uid)).length;

  const baseFlagUids = new Set(cleanExclusions(base && base.exclusions).map((e) => e.uid));
  const flags = foldExclusions(base && base.exclusions, incoming && incoming.exclusions);

  const capped = sessions.slice(Math.max(0, sessions.length - cap));
  const exam = (base && base.exam) || (incoming && incoming.exam) || '';
  return {
    log: rebuild(exam, capped, flags),
    added,
    dropped: sessions.length - capped.length,
    // Eventi di esclusione che CAMBIANO qualcosa: entrati e sopravvissuti
    // alla compattazione. Un import che porta solo quelli va salvato e
    // sincronizzato anche se non aggiunge alcuna sessione; uno che porta solo
    // eventi superati da quelli locali no.
    flagsAdded: flags.filter((e) => !baseFlagUids.has(e.uid)).length,
  };
}

/**
 * Unione di due ErrorLog per `uid`, con ricalcolo completo di `perQuestion`.
 * Idempotente: mergeLogs(a, a) è profondamente uguale a normalizeLog(a).
 */
export function mergeLogs(base, incoming, opts = {}) {
  return mergeLogsWithStats(base, incoming, opts).log;
}

function rebuild(exam, sessions, exclusions = []) {
  const sorted = Array.from(sessions).sort(byTsUid);
  const flags = foldExclusions(exclusions);
  const last = sorted.length ? sorted[sorted.length - 1] : null;
  const lastFlag = flags.length ? flags[flags.length - 1] : null;
  // Deterministico (ts dell'ultimo evento, sessione o esclusione): due merge
  // identici producono due oggetti identici, condizione dell'idempotenza. Le
  // esclusioni contano perché un export con soli cambi di flag non deve
  // sembrare vecchio quanto l'ultima prova.
  const latest = [last, lastFlag].filter(Boolean).sort(byTsUid).pop() || null;
  return {
    version: VERSION,
    exam: exam || '',
    updatedAt: latest ? latest.ts : null,
    sessions: sorted,
    perQuestion: recomputePerQuestion(sorted),
    exclusions: flags,
    excluded: recomputeExcluded(flags),
  };
}

/**
 * Flashcard escluse ORA: per ogni id conta l'ultimo evento (ordine ts, uid),
 * e la card compare solo se quell'evento è un'esclusione. `textSnapshot` è lì
 * per l'LLM, come in `perQuestion`: dice quale card l'utente ritiene non
 * congruente con lo studio senza dover incrociare gli id con flashcards.md.
 */
export function recomputeExcluded(exclusions) {
  const latest = new Map();
  for (const e of Array.from(exclusions || []).filter(isExclusionEvent).sort(byTsUid)) latest.set(e.id, e);
  const out = {};
  for (const id of Array.from(latest.keys()).sort()) {
    const e = latest.get(id);
    if (!e.excluded) continue;
    out[id] = {
      at: e.ts,
      lesson: e.lesson || null,
      textSnapshot: e.text || null,
      contentHash: e.contentHash || null,
    };
  }
  return out;
}

/** Ricostruisce le statistiche per domanda a partire dalle sole sessioni. */
export function recomputePerQuestion(sessions) {
  const per = {};
  const sorted = Array.from(sessions || []).sort(byTsUid);
  for (const session of sorted) {
    for (const item of session.items || []) {
      if (!item || !item.id) continue;
      const e = per[item.id] || (per[item.id] = {
        type: item.type || 'mcq',
        lesson: item.lesson || null,
        seen: 0,
        wrong: 0,
        lastSeenAt: null,
        lastWrongAt: null,
        lastResult: null,
        streakCorrect: 0,
        textSnapshot: null,
        contentHash: null,
      });
      e.seen += 1;
      e.lastSeenAt = session.ts || e.lastSeenAt;
      if (item.correct) {
        e.streakCorrect += 1;
        e.lastResult = 'corretta';
      } else {
        e.wrong += 1;
        e.streakCorrect = 0;
        e.lastResult = 'errata';
        e.lastWrongAt = session.ts || e.lastWrongAt;
      }
      if (item.text) e.textSnapshot = item.text;
      if (item.lesson) e.lesson = item.lesson;
      if (item.contentHash) e.contentHash = item.contentHash;
    }
  }
  return per;
}

/** Aggiunge un tentativo restituendo un nuovo ErrorLog (non muta l'input). */
export function addAttempt(log, attempt) {
  return mergeLogs(log, { exam: attempt && attempt.exam, sessions: [attempt] });
}

export function newUid(now = Date.now(), rand = Math.random) {
  return `${now}-${Math.floor(rand() * 1e9).toString(36)}`;
}

/**
 * Esclude (o ripristina) una flashcard dalle prove successive, restituendo un
 * nuovo ErrorLog. Non cancella mai nulla: anche il ripristino è un evento,
 * altrimenti l'unione con una sorgente più vecchia lo annullerebbe.
 * `ts` e `uid` sono parametri, così la funzione resta pura e testabile.
 */
export function setExclusion(log, card, excluded, ts = new Date().toISOString(), uid = newUid()) {
  // Il gesto nuovo deve VINCERE sugli eventi della stessa card già noti a
  // QUESTO dispositivo: due clic nello stesso millisecondo, o un orologio
  // rimesso indietro, gli darebbero altrimenti un ts pari o precedente, e a
  // decidere resterebbe l'uid casuale. Basta un millisecondo dopo l'ultimo.
  // Fra dispositivi che non si sono ancora sincronizzati decide l'orologio di
  // ciascuno: un evento mai visto qui non si può scavalcare.
  const prior = cleanExclusions(log && log.exclusions).filter((e) => e.id === card.id).map(tsOf);
  const floor = prior.length ? Math.max(...prior) + 1 : 0;
  const at = Math.max(Date.parse(ts) || 0, floor);
  const event = {
    uid,
    ts: new Date(at).toISOString(),
    id: card.id,
    excluded: !!excluded,
    lesson: card.lesson || null,
    text: card.question || card.text || null,
    contentHash: card.contentHash || null,
  };
  return mergeLogs(log, { exam: log && log.exam, sessions: [], exclusions: [event] });
}

/** Id delle flashcard escluse in questo momento. */
export function excludedIds(log) {
  return new Set(Object.keys((log && log.excluded) || {}));
}

// ---------------------------------------------------------------------------
// Backup multi-esame (puro)
// ---------------------------------------------------------------------------

/**
 * Costruisce il backup di TUTTI gli esami più le preferenze.
 * `exportedAt` è un parametro e non `Date.now()`: la funzione resta pura e
 * testabile, e chi chiama decide se datare il file.
 */
export function buildBackup(logsBySlug, prefs = null, exportedAt = null) {
  const exams = {};
  for (const slug of Object.keys(logsBySlug || {}).sort()) {
    exams[slug] = normalizeLog(logsBySlug[slug], slug);
  }
  return {
    format: BACKUP_FORMAT,
    version: VERSION,
    exportedAt: exportedAt || null,
    prefs: prefs && typeof prefs === 'object' ? { ...prefs } : null,
    exams,
  };
}

export function isBackup(raw) {
  return !!raw && typeof raw === 'object' && raw.format === BACKUP_FORMAT
    && !!raw.exams && typeof raw.exams === 'object' && !Array.isArray(raw.exams);
}

/**
 * Backup → { prefs, exams: {slug: ErrorLog} } normalizzati.
 * Restituisce null se `raw` non è un backup: è così che l'import distingue i
 * due formati senza doverli sondare a mano.
 */
export function parseBackup(raw) {
  if (!isBackup(raw)) return null;
  const exams = {};
  for (const [slug, log] of Object.entries(raw.exams)) {
    if (typeof slug !== 'string' || !slug) continue;
    exams[slug] = normalizeLog(log, slug);
  }
  return { prefs: raw.prefs && typeof raw.prefs === 'object' ? raw.prefs : null, exams };
}

export function serializeBackup(backup) {
  return `${JSON.stringify(backup, null, 2)}\n`;
}

/**
 * Slug degli esami presenti fra CHIAVI arbitrarie di localStorage. Puro, così
 * lo smoke-test può verificarlo senza uno stub di localStorage; `listExams()`
 * qui sotto è solo il wrapper che legge le chiavi vere.
 */
export function examsFromKeys(keys) {
  const prefix = `${PREFIX}.history.`;
  const out = [];
  for (const key of keys || []) {
    if (typeof key !== 'string') continue;
    if (!key.startsWith(prefix) || key.length === prefix.length) continue;
    out.push(key.slice(prefix.length));
  }
  return out.sort();
}

/** Riepilogo per la schermata di configurazione. */
export function summarize(log) {
  const per = (log && log.perQuestion) || {};
  const ids = Object.keys(per);
  const sessions = (log && log.sessions) || [];
  return {
    sessions: sessions.length,
    tracked: ids.length,
    wrong: ids.filter((id) => (per[id].wrong || 0) > 0).length,
    excluded: Object.keys((log && log.excluded) || {}).length,
    // L'ultima SESSIONE, non `updatedAt`: quello avanza anche quando si
    // esclude una flashcard, e la riga a schermo dice «Ultima sessione».
    lastAt: sessions.length ? sessions[sessions.length - 1].ts || null : null,
  };
}

// ---------------------------------------------------------------------------
// Parte browser (protetta: importabile anche da Node)
// ---------------------------------------------------------------------------

function store() {
  try {
    if (typeof localStorage === 'undefined') return null;
    return localStorage;
  } catch (err) {
    return null;
  }
}

export function historyKey(exam) {
  return `${PREFIX}.history.${exam}`;
}

/** Slug di tutti gli esami con uno storico in localStorage. */
export function listExams() {
  const ls = store();
  if (!ls) return [];
  try {
    const keys = [];
    for (let i = 0; i < ls.length; i += 1) keys.push(ls.key(i));
    return examsFromKeys(keys);
  } catch (err) {
    return [];
  }
}

export function loadLog(exam) {
  const ls = store();
  if (!ls) return emptyLog(exam);
  try {
    const raw = ls.getItem(historyKey(exam));
    return raw ? normalizeLog(JSON.parse(raw), exam) : emptyLog(exam);
  } catch (err) {
    return emptyLog(exam);
  }
}

export function saveLog(exam, log) {
  const ls = store();
  if (!ls) return false;
  try {
    ls.setItem(historyKey(exam), JSON.stringify(log));
    return true;
  } catch (err) {
    // quota superata o storage disabilitato: si continua senza persistenza
    return false;
  }
}

export function clearLog(exam) {
  const ls = store();
  if (!ls) return false;
  try {
    ls.removeItem(historyKey(exam));
    return true;
  } catch (err) {
    return false;
  }
}

export function loadPrefs() {
  const ls = store();
  // `lessons` è per esame ({slug: ["01","17"]}): un array non vuoto è anche il
  // segnale che il filtro per lezione è acceso, quindi non serve un booleano
  // separato che potrebbe disallinearsi dalla selezione.
  const fallback = {
    exam: null, simTotal: SIM_TOTAL, mcqCount: SIM_TOTAL, cardCount: 0,
    cardMcq: true, lessons: {},
  };
  if (!ls) return fallback;
  try {
    const raw = ls.getItem(`${PREFIX}.prefs`);
    return raw ? Object.assign(fallback, JSON.parse(raw)) : fallback;
  } catch (err) {
    return fallback;
  }
}

export function savePrefs(prefs) {
  const ls = store();
  if (!ls) return false;
  try {
    ls.setItem(`${PREFIX}.prefs`, JSON.stringify(prefs));
    return true;
  } catch (err) {
    return false;
  }
}

/** Testo JSON da committare come `exams/<slug>/quiz-errori.json`. */
export function serializeLog(log) {
  return `${JSON.stringify(log, null, 2)}\n`;
}
