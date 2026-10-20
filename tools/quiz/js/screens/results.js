// screens/results.js — riepilogo e correzione.
//
// Nel riepilogo le opzioni tornano nell'ORDINE ORIGINALE del file: le
// spiegazioni citano le lettere originali («Perché B è sbagliata»), quindi
// mostrarle rimescolate le renderebbe illeggibili.
//
// Le schede sono ordinate per ESITO su tutta la pagina — prima da rivedere,
// poi le flashcard non viste, poi le corrette (vedi `summaryGroups`) — e ogni
// flashcard porta la casella che la esclude dalle prove successive.

import { el, clear } from '../dom.js';
import { mdInline } from '../md-inline.js';
import { summaryGroups } from '../engine.js';
import { riskBanner, outcome, resultHead, staticOptions, noteLink } from './common.js';

const GROUPS = [
  { key: 'wrong', title: 'Da rivedere' },
  { key: 'unseen', title: 'Flashcard non viste', hint: 'Lasciate in bianco: non contano nel punteggio e non entrano nello storico.' },
  { key: 'correct', title: 'Corrette' },
];

export function renderResults(root, ctx) {
  clear(root);
  const r = ctx.state.results;
  if (!r) { ctx.goTo('config'); return; }

  const { mcq, cards, attempt } = r;

  // --- intestazione ------------------------------------------------------
  const head = el('section', { class: 'card' }, [
    el('h2', { text: attempt.mode === 'review' ? 'Riepilogo del ripasso' : 'Riepilogo della simulazione' }),
  ]);

  if (mcq.total) {
    head.append(el('p', { class: 'score' }, [
      el('strong', { text: `${mcq.correct}/${mcq.total}` }),
      el('span', { class: 'muted', text: ` risposte corrette (${pct(mcq.correct, mcq.total)}%)` }),
    ]));
    if (mcq.blank) head.append(el('p', { class: 'hint', text: `${mcq.blank} lasciate in bianco.` }));
    if (mcq.hasPlatformMismatch) {
      head.append(el('p', { class: 'banner banner-alarm' },
        '🚨 Questa sessione contiene domande per cui la chiave della piattaforma è difforme dalle slide. Il punteggio qui sopra è quello nel merito (risposta ✅ conforme alle slide).'));
      head.append(el('p', { class: 'score-secondary', text: `Punteggio secondo la chiave della piattaforma: ${mcq.platformCorrect}/${mcq.total}.` }));
    }
  }
  // Le due quote hanno significati diversi e non vanno sommate: una è una
  // correzione nel merito, l'altra un giudizio di chi studia su se stesso.
  // Le flashcard in bianco sono card non viste: fuori dal punteggio e dallo
  // storico (vedi scoreSession), quindi il denominatore è chi ha risposta.
  if (cards.mcqAnswered) {
    head.append(el('p', { class: 'score' }, [
      el('strong', { text: `${cards.mcqCorrect}/${cards.mcqAnswered}` }),
      el('span', { class: 'muted', text: ` flashcard corrette (${pct(cards.mcqCorrect, cards.mcqAnswered)}%)` }),
    ]));
  }
  if (cards.mcqBlank) {
    head.append(el('p', { class: 'hint', text: cards.mcqBlank === 1
      ? '1 flashcard lasciata in bianco: non conta nel punteggio e non entra nello storico.'
      : `${cards.mcqBlank} flashcard lasciate in bianco: non contano nel punteggio e non entrano nello storico.` }));
  }
  if (cards.selfTotal) {
    head.append(el('p', { class: 'score' }, [
      el('strong', { text: `${cards.selfKnown}/${cards.selfTotal}` }),
      el('span', { class: 'muted', text: ' flashcard dichiarate sapute' }),
    ]));
  }

  head.append(actionsBar(ctx));
  if (!r.recorded) head.append(el('p', { class: 'hint', text: 'Nessuna risposta data: la sessione non è stata registrata nello storico.' }));
  if (cards.mcqTotal || cards.selfTotal) {
    head.append(el('p', { class: 'hint', text: 'Sotto ogni flashcard c\'è la casella «Non riproporre più»: la card esce dalle prove successive e dal ripasso, l\'esclusione entra nell\'export di quiz-errori.json e si annulla dallo Storico, nella configurazione.' }));
  }

  // Build pubblica: qui la sessione è appena finita ed è l'unico punto in cui
  // il valore è già stato consegnato. Deliberatamente NON nell'intestazione,
  // che è sticky e seguirebbe chi studia per tutta la prova.
  const donazioni = ctx.state.config && ctx.state.config.donazioni;
  if (donazioni) {
    head.append(el('p', { class: 'hint' }, [
      'Sessione finita. Se il simulatore ti è utile, ',
      el('a', { class: 'link', href: donazioni, target: '_blank', rel: 'noopener', text: '☕ offrimi un caffè' }),
      '.',
    ]));
  }

  root.append(head);

  // --- dettaglio, ordinato per esito -------------------------------------
  const groups = summaryGroups(mcq, cards);
  const shown = GROUPS.filter((g) => groups[g.key].length);
  // Solo se qualcosa è stato risposto bene: una prova di sole flashcard in
  // bianco non ha errori, ma nemmeno risposte, e il «Nessun errore» stonerebbe
  // accanto a «la sessione non è stata registrata».
  if (groups.correct.length && !groups.wrong.length) {
    root.append(el('p', { class: 'banner banner-info', text: 'Nessun errore in questa sessione: niente da rivedere.' }));
  }
  for (const g of shown) {
    root.append(el('h3', { class: 'section-title', text: `${g.title} (${groups[g.key].length})` }));
    if (g.hint) root.append(el('p', { class: 'hint', text: g.hint }));
    renderGroup(root, groups[g.key], ctx);
  }

  // In fondo di nuovo i comandi: chi ha escluso delle flashcard scorrendo il
  // riepilogo deve poterle esportare senza risalire la pagina.
  if (shown.length) root.append(el('section', { class: 'card' }, [actionsBar(ctx)]));
}

/** «Nuova sessione» + «Esporta»: in testa e in coda al riepilogo. */
function actionsBar(ctx) {
  const again = el('button', { type: 'button', class: 'btn btn-primary', text: 'Nuova sessione' });
  again.addEventListener('click', () => ctx.goTo('config'));
  const exportBtn = el('button', { type: 'button', class: 'btn btn-ghost', text: 'Esporta quiz-errori.json' });
  exportBtn.addEventListener('click', () => ctx.exportLog());
  return el('div', { class: 'actions actions-wrap' }, [again, exportBtn]);
}

/**
 * Le schede di un gruppo. Le autovalutate sono righe compatte e stanno tutte
 * in un'unica scheda, come prima; in ogni gruppo arrivano per ultime (vedi
 * `summaryGroups`), quindi sono consecutive.
 */
function renderGroup(root, entries, ctx) {
  let selfBox = null;
  for (const { kind, d } of entries) {
    if (kind !== 'card-self') {
      selfBox = null;
      root.append(kind === 'question' ? questionCard(d, ctx) : cardResultCard(d, ctx));
      continue;
    }
    if (!selfBox) {
      selfBox = el('section', { class: 'card' }, [
        el('p', { class: 'muted small', text: `Flashcard ad autovalutazione — «${d.correct ? 'la sapevo' : 'non la sapevo'}»` }),
      ]);
      root.append(selfBox);
    }
    selfBox.append(selfCardRow(d, ctx));
  }
}

function selfCardRow(c, ctx) {
  const row = el('details', { class: `result-card ${c.correct ? 'is-ok' : 'is-ko'}` }, [
    el('summary', {}, [
      el('span', { class: `dot ${c.correct ? 'dot-ok' : 'dot-ko'}`, 'aria-hidden': 'true' }),
      el('span', { html: mdInline(c.card.question) }),
    ]),
    el('p', { class: 'muted small', text: `Lezione ${c.card.lesson} — ${c.card.lessonTitle}` }),
    el('div', { class: 'answer', html: mdInline(c.card.answer) }),
  ]);
  // Nel corpo, sotto la risposta: una casella dentro <summary> aprirebbe e
  // chiuderebbe la riga a ogni clic.
  row.append(excludeToggle(ctx, c.card, row));
  return row;
}

let toggleSeq = 0;

/**
 * Casella «Non riproporre più»: reversibile finché si vuole, perché ogni
 * gesto è un evento nuovo e vince l'ultimo. Aggiorna sul posto la scheda che
 * la contiene invece di ridisegnare il riepilogo, che perderebbe fuoco e
 * posizione di scorrimento.
 */
function excludeToggle(ctx, card, box) {
  toggleSeq += 1;
  const id = `exclude-${toggleSeq}`;
  const input = el('input', { type: 'checkbox', id, checked: ctx.isExcluded(card.id) });
  const paint = () => box.classList.toggle('is-excluded', input.checked);
  input.addEventListener('change', () => {
    ctx.setExcluded(card, input.checked);
    paint();
  });
  paint();
  return el('p', { class: 'toggle exclude-toggle' }, [
    el('label', { for: id }, [input, el('span', { text: ' Non riproporre più questa flashcard' })]),
  ]);
}

function pct(a, b) {
  return b ? Math.round((a / b) * 100) : 0;
}

// Le schede sono numerate con `d.index`, la posizione nel blocco della prova:
// lo stesso numero della cella nella griglia, qualunque sia l'ordine.

function questionCard(d, ctx) {
  const q = d.question;
  const state = outcome(d);
  const card = el('section', { class: `card result-question is-${state}` });

  card.append(resultHead(state, `${d.index + 1}. Lezione ${q.lesson} — ${q.lessonTitle} · domanda ${q.number}`));
  card.append(el('p', { class: 'question-text', html: mdInline(q.text) }));

  if (q.platformMismatch) {
    card.append(el('p', { class: 'banner banner-alarm' },
      `🚨 All'esame la piattaforma potrebbe assegnare il punto alla ${q.platformKey}. La risposta conforme alle slide è la ${q.correctKey}.`));
  }

  card.append(staticOptions(q.options, {
    correctKey: q.correctKey,
    givenKey: d.givenKey,
    correct: d.correct,
    correctLabel: 'corretta (slide)',
    platformKey: q.platformMismatch ? q.platformKey : null,
  }));

  if (!d.answered) card.append(el('p', { class: 'hint', text: 'Lasciata in bianco.' }));

  for (const ex of q.explanations) {
    card.append(el('p', { class: 'explanation' }, [
      el('strong', { text: `${ex.label}: ` }),
      el('span', { html: mdInline(ex.text) }),
    ]));
  }

  if (q.warning) card.append(el('p', { class: 'banner banner-alarm', html: mdInline(q.warning) }));

  const meta = el('p', { class: 'meta' });
  if (q.sources) meta.append(el('span', { class: 'muted small', text: `Fonti: ${q.sources.raw}` }));
  const link = noteLink(ctx, q.lesson);
  if (link) meta.append(link);
  card.append(meta);

  // suggerimenti di studio solo per le sbagliate/in bianco
  if (!d.correct) {
    const related = ctx.riskCardsForLesson(q.lesson, 6);
    if (related.length) {
      card.append(el('details', { class: 'suggest' }, [
        el('summary', { text: `Da ripassare: ${related.length} flashcard segnate della lezione ${q.lesson}` }),
        el('ul', {}, related.map((c) => el('li', {}, [
          el('span', { class: 'tag tag-warn', text: c.risk === 'alarm' ? '🚨' : '⚠️' }),
          el('span', { html: mdInline(c.question) }),
          el('div', { class: 'muted small', html: mdInline(c.answer) }),
        ]))),
      ]));
    }
  }

  return card;
}

/**
 * Dettaglio di una flashcard giocata a risposta multipla. Non riusa
 * `questionCard()`: quella dipende da `number`, `explanations`, `sources` e
 * dalla chiave della piattaforma, che sulle flashcard non esistono.
 */
function cardResultCard(d, ctx) {
  const card = d.card;
  const q = d.item.question;
  const state = outcome(d);
  const box = el('section', { class: `card result-question is-${state}` });

  box.append(resultHead(state, `${d.index + 1}. Lezione ${card.lesson} — ${card.lessonTitle}`));
  box.append(el('p', { class: 'question-text', html: mdInline(card.question) }));

  // Ordine originale del file: la corretta prima, poi i distrattori.
  box.append(staticOptions(q.options, { correctKey: q.correctKey, givenKey: d.givenKey, correct: d.correct }));

  if (!d.answered) box.append(el('p', { class: 'hint', text: 'Lasciata in bianco: non entra nello storico.' }));

  const banner = riskBanner(card.risk);
  if (banner) box.append(banner);
  // La risposta integrale resta il materiale di studio anche quando l'opzione
  // mostrata era la sua forma condensata, ed è l'unica motivazione che una
  // flashcard porta con sé: non ci sono «Perché…» come nelle domande d'esame.
  box.append(el('p', { class: 'explanation' }, [el('strong', { text: 'Risposta e motivazione:' })]));
  box.append(el('div', { class: 'answer', html: mdInline(card.answer) }));

  const link = noteLink(ctx, card.lesson);
  if (link) box.append(el('p', { class: 'meta' }, [link]));

  box.append(excludeToggle(ctx, card, box));
  return box;
}
