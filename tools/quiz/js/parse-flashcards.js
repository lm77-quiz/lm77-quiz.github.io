// parse-flashcards.js — da `exams/<slug>/flashcards.md` a cards[].
//
// Modulo PURO: nessun riferimento a DOM/window, importabile da Node.
//
// Coppie `**D:**` / `**R:**` con continuazioni multilinea, raggruppate per
// `## Lezione NN — Titolo`. Il marcatore di rischio a inizio domanda è
// ⚠️ (U+26A0 con il selettore di variazione U+FE0F **opzionale**) oppure 🚨.
//
// In coda alla card possono comparire due blocchi facoltativi che la rendono
// giocabile a risposta multipla:
//
//   **Opzione:** forma condensata della risposta, usata SOLO come testo
//                dell'opzione corretta (la `**R:**` resta il materiale di
//                studio e continua a comparire nel riepilogo).
//   **Distrattori:**
//   - due o tre opzioni sbagliate
//
// Nessuno dei due entra nell'`id` né nel `contentHash`: aggiungerli a una card
// esistente non deve orfanare lo storico degli errori.
//
// Alias d'identità. Riscrivere la **D:** o la **R:** di una card ne cambia id
// e contentHash, e lo storico la perderebbe. La conversione delle formule in
// LaTeX lo fa per centinaia di card senza cambiarne il contenuto, quindi
// lascia in testa al file un blocco che ridà a ogni card convertita la sua
// identità di prima:
//
//   <!-- alias-identità: … (una riga di spiegazione, libera)
//   L15/f-<id calcolato> f-<id di prima> <contentHash calcolato> <contentHash di prima>
//   -->
//
// L'id di prima vale finché la domanda resta quella convertita (la chiave è
// l'id calcolato); il contentHash di prima solo finché anche la risposta
// resta quella: una correzione vera, fatta dopo, deve continuare a vedersi.
// Lo scrive tools/quiz/verifica/latex-lezione.mjs, mai a mano.

import { stableHash } from './engine.js';

const RE_LESSON = /^##\s+Lezione\s+(\d+)\s*[—–-]\s*(.*)$/;
const RE_QUIZ_SUBSECTION = /^###\s+Flashcard dai quiz/i;
const RE_D = /^\*\*D:\*\*\s*(.*)$/;
const RE_R = /^\*\*R:\*\*\s*(.*)$/;
const RE_OPZIONE = /^\*\*Opzione:\*\*\s*(.*)$/;
const RE_DISTRATTORI = /^\*\*Distrattori:\*\*\s*(.*)$/;
const RE_BULLET = /^[-*]\s+(.*)$/;
// ⚠ + variation selector opzionale, oppure 🚨. Esportata perché chi cerca una
// card per domanda (applica-distrattori) la normalizzi allo stesso modo.
export const RE_RISK = /^(\u26A0\uFE0F?|\u{1F6A8})\s*/u;
const RE_EMPTY_FILE = /_Ancora vuoto/;
const RE_ALIAS_INIZIO = /^<!--\s*alias-identità(?=[\s:]|$)/;
const RE_ALIAS_RIGA = /^(L\d+\/f-[0-9a-z]+(?:-\d+)?)\s+(f-[0-9a-z]+(?:-\d+)?)\s+([0-9a-z]+)\s+([0-9a-z]+)$/;

/** Numero di distrattori che rende una card giocabile a risposta multipla. */
export const MIN_DISTRACTORS = 2;
export const MAX_DISTRACTORS = 3;

/**
 * @param {string} text contenuto di flashcards.md
 * @param {{exam?: string}} [opts]
 * @returns {{stub: boolean, exam: string, lessons: Array, cards: Array, warnings: Array}}
 */
export function parseFlashcards(text, opts = {}) {
  const exam = opts.exam || '';
  const warnings = [];
  const cards = [];
  const lessons = [];
  const source = String(text || '');

  if (!source.trim() || RE_EMPTY_FILE.test(source)) {
    return { stub: true, exam, lessons, cards, warnings };
  }

  const lines = source.split(/\r?\n/);
  const alias = leggiAlias(lines, warnings);
  let lesson = null;
  let fromQuizSection = false;
  let pending = null; // {qLines, aLines, oLines, dLines, state, span}
  const seenIds = new Set();

  // `fine` è l'indice della riga che chiude la card (esclusa): una riga vuota,
  // un titolo, la **D:** successiva o la fine del file.
  const flush = (fine) => {
    if (!pending) return;
    pending.span.end = fine;
    const card = buildCard(pending, lesson, fromQuizSection, exam, warnings, seenIds, alias);
    if (card) cards.push(card);
    pending = null;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].replace(/\s+$/, '');
    const trimmed = line.trim();

    if (/^#{1,6}\s/.test(trimmed)) {
      flush(i);
      if (/^###\s/.test(trimmed)) {
        fromQuizSection = RE_QUIZ_SUBSECTION.test(trimmed);
        continue;
      }
      if (/^##\s/.test(trimmed)) {
        fromQuizSection = false;
        const m = trimmed.match(RE_LESSON);
        if (m) {
          lesson = { number: m[1], title: m[2].trim(), count: 0 };
          lessons.push(lesson);
        } else {
          lesson = null;
        }
      }
      continue;
    }

    if (trimmed === '') {
      if (pending && pending.state !== 'q') flush(i);
      continue;
    }

    const md = trimmed.match(RE_D);
    if (md) {
      flush(i);
      pending = { qLines: [md[1].trim()], aLines: [], oLines: [], dLines: [], state: 'q', span: { question: i, answer: -1, end: -1 } };
      continue;
    }

    const mr = trimmed.match(RE_R);
    if (mr) {
      if (!pending) {
        warnings.push({ message: 'riga **R:** senza **D:** che la preceda' });
        continue;
      }
      pending.state = 'a';
      if (pending.span.answer < 0) pending.span.answer = i;
      pending.aLines.push(mr[1].trim());
      continue;
    }

    // I due blocchi facoltativi vanno riconosciuti PRIMA del ramo prosa in
    // fondo al ciclo: quello accoda qualunque riga alla risposta, e una
    // risposta allungata cambierebbe il `contentHash` della card.
    const mo = trimmed.match(RE_OPZIONE);
    if (mo) {
      if (!pending || pending.state === 'q') {
        warnings.push({ message: `blocco **Opzione:** orfano (nessuna **R:** che lo preceda): "${truncate(trimmed)}"` });
        continue;
      }
      pending.state = 'o';
      pending.oLines.push(mo[1].trim());
      continue;
    }

    const mdis = trimmed.match(RE_DISTRATTORI);
    if (mdis) {
      // Senza questa guardia una riga vuota prima del blocco lo farebbe
      // sparire in silenzio nel ramo prosa. Simmetrica a «**R:** senza **D:**».
      if (!pending || pending.state === 'q') {
        warnings.push({ message: 'blocco **Distrattori:** orfano (nessuna **R:** che lo preceda)' });
        continue;
      }
      if (mdis[1].trim()) {
        warnings.push({ message: `**Distrattori:** deve stare da solo sulla riga, i distrattori vanno in elenco: "${truncate(trimmed)}"` });
      }
      pending.state = 'x';
      continue;
    }

    if (pending) {
      if (pending.state === 'x') {
        const mb = trimmed.match(RE_BULLET);
        if (mb) pending.dLines.push([mb[1].trim()]);
        else if (pending.dLines.length) pending.dLines[pending.dLines.length - 1].push(trimmed);
        else warnings.push({ message: `riga fra **Distrattori:** e il primo elenco: "${truncate(trimmed)}"` });
      } else if (pending.state === 'o') {
        pending.oLines.push(trimmed);
      } else if (pending.state === 'a') {
        pending.aLines.push(trimmed);
      } else {
        pending.qLines.push(trimmed);
      }
    }
    // Altrimenti: prosa/commenti — ignorati di proposito.
  }
  flush(lines.length);

  for (const c of cards) {
    const l = lessons.find((x) => x.number === c.lesson);
    if (l) l.count += 1;
  }
  for (const [chiave, a] of alias) {
    if (!a.usato) warnings.push({ message: `alias-identità senza card: ${chiave} (la domanda è cambiata dopo la conversione?)` });
  }

  return { stub: cards.length === 0, exam, lessons, cards, warnings };
}

// ---------------------------------------------------------------------------

/** Il contentHash di prima, se la card convertita non è più cambiata. */
function contentHashConAlias(calcolato, voceAlias) {
  return voceAlias && voceAlias.usato && voceAlias.daContentHash === calcolato ? voceAlias.contentHash : calcolato;
}

/**
 * Legge il blocco alias-identità e ne svuota le righe, così il ciclo
 * principale non le vede (gli indici di riga restano quelli del file: li usa
 * chi riscrive il blocco distrattori).
 * @returns {Map<string, {id: string, daContentHash: string, contentHash: string, usato: boolean}>}
 */
function leggiAlias(lines, warnings) {
  const alias = new Map();
  const inizio = lines.findIndex((l) => RE_ALIAS_INIZIO.test(l.trim()));
  if (inizio < 0) return alias;
  // Il blocco si chiude sulla prima riga che contiene «-->», come un commento
  // HTML qualsiasi (e come lo legge md-doc.js), anche sulla riga d'apertura.
  // Senza chiusura si scarta solo la riga d'apertura: svuotare fino in fondo
  // farebbe sparire in silenzio tutte le card che seguono.
  const voci = [];
  let fine = -1;
  for (let i = inizio; i < lines.length; i++) {
    const riga = i === inizio ? lines[i].trim().replace(RE_ALIAS_INIZIO, '') : lines[i].trim();
    const chiude = riga.indexOf('-->');
    if (i > inizio) voci.push(chiude >= 0 ? riga.slice(0, chiude).trim() : riga);
    if (chiude >= 0) { fine = i; break; }
  }
  if (fine < 0) {
    warnings.push({ message: 'blocco alias-identità senza «-->» di chiusura: ignorato' });
    lines[inizio] = '';
    return alias;
  }
  for (const riga of voci) {
    if (!riga) continue;
    const m = riga.match(RE_ALIAS_RIGA);
    if (!m) { warnings.push({ message: `riga alias-identità malformata: "${truncate(riga)}"` }); continue; }
    if (alias.has(m[1])) { warnings.push({ message: `alias-identità ripetuto: ${m[1]}` }); continue; }
    alias.set(m[1], { id: m[2], daContentHash: m[3], contentHash: m[4], usato: false });
  }
  for (let k = inizio; k <= fine; k++) lines[k] = '';
  return alias;
}

function buildCard(pending, lesson, fromQuizSection, exam, warnings, seenIds, alias) {
  const questionRaw = pending.qLines.join(' ').replace(/\s+/g, ' ').trim();
  const answer = pending.aLines.join(' ').replace(/\s+/g, ' ').trim();

  if (!questionRaw) return null;
  if (!answer) {
    warnings.push({ message: `flashcard senza risposta: "${truncate(questionRaw)}"` });
    return null;
  }
  if (!lesson) {
    warnings.push({ message: `flashcard fuori da una lezione: "${truncate(questionRaw)}"` });
    return null;
  }

  let risk = null;
  const mRisk = questionRaw.match(RE_RISK);
  if (mRisk) risk = mRisk[1].startsWith('\u26A0') ? 'warn' : 'alarm';
  const question = questionRaw.replace(RE_RISK, '').trim();

  const key = normalizeForId(question);
  let id = `${exam}/L${lesson.number}/f-${stableHash(key)}`;
  if (seenIds.has(id)) {
    warnings.push({ message: `flashcard duplicata nella lezione ${lesson.number}: "${truncate(question)}"` });
    let n = 2;
    while (seenIds.has(`${id}-${n}`)) n++;
    id = `${id}-${n}`;
  }
  // L'alias ridà l'id di prima a una card convertita (vedi in testa al file).
  // Anche l'id calcolato resta fra i visti: una seconda card con la stessa
  // domanda convertita deve prendere il suo `-2`, come senza alias.
  const voceAlias = alias.get(id.slice(exam.length + 1));
  if (voceAlias && !voceAlias.usato) {
    const prima = `${exam}/L${lesson.number}/${voceAlias.id}`;
    if (seenIds.has(prima)) {
      warnings.push({ message: `alias-identità in conflitto con un'altra card della lezione ${lesson.number}: ${voceAlias.id}` });
    } else {
      seenIds.add(id);
      id = prima;
      voceAlias.usato = true;
    }
  }
  seenIds.add(id);

  const optionText = pending.oLines.join(' ').replace(/\s+/g, ' ').trim() || answer;
  const distractors = validateDistractors(
    pending.dLines.map((d) => d.join(' ').replace(/\s+/g, ' ').trim()).filter(Boolean),
    { optionText, question, hasOption: pending.oLines.length > 0, warnings },
  );

  return {
    id,
    exam,
    lesson: lesson.number,
    lessonTitle: lesson.title,
    risk,
    question,
    answer,
    // Testo dell'opzione corretta a risposta multipla. Quando la risposta è
    // discorsiva o commenta i distrattori d'esame, `**Opzione:**` ne dà la
    // forma condensata; la risposta integrale resta in `answer`.
    optionText,
    distractors,
    fromQuizSection: !!fromQuizSection,
    // Righe della card nel file (indici da 0, `end` escluso): **D:**, prima
    // **R:**, e la riga che la chiude. Servono a chi riscrive il blocco
    // distrattori senza ricostruire per conto suo la struttura del file.
    span: { ...pending.span },
    // NON include opzione e distrattori: aggiungerli a una card già in
    // archivio non deve farla risultare "cambiata" nello storico errori.
    contentHash: contentHashConAlias(stableHash(`${key}||${normalizeForId(answer)}`), voceAlias),
  };
}

/**
 * Un blocco malformato viene scartato per intero e la card torna ad
 * autovalutazione. Lo smoke test pretende zero warning sui file reali, quindi
 * ogni scarto è un fallimento di CI e non un degrado silenzioso.
 */
function validateDistractors(list, { optionText, question, hasOption, warnings }) {
  if (!list.length) {
    if (hasOption) {
      warnings.push({ message: `**Opzione:** senza **Distrattori:**: "${truncate(question)}"` });
    }
    return [];
  }
  if (list.length < MIN_DISTRACTORS || list.length > MAX_DISTRACTORS) {
    warnings.push({
      message: `la flashcard "${truncate(question)}" ha ${list.length} distrattor${list.length === 1 ? 'e' : 'i'}: ne servono ${MIN_DISTRACTORS} o ${MAX_DISTRACTORS}`,
    });
    return [];
  }
  const seen = new Set([normalizeForId(optionText)]);
  for (const d of list) {
    const norm = normalizeForId(d);
    if (seen.has(norm)) {
      warnings.push({ message: `distrattore ripetuto o uguale alla risposta in "${truncate(question)}": "${truncate(d)}"` });
      return [];
    }
    seen.add(norm);
  }
  return list;
}

function normalizeForId(s) {
  return String(s)
    .replace(/[*`]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function truncate(s, n = 60) {
  return s.length > n ? `${s.slice(0, n)}…` : s;
}
