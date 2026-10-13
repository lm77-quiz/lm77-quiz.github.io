// screens/results.js — riepilogo e correzione.
//
// Nel riepilogo le opzioni tornano nell'ORDINE ORIGINALE del file: le
// spiegazioni citano le lettere originali («Perché B è sbagliata»), quindi
// mostrarle rimescolate le renderebbe illeggibili.

import { el, clear } from '../dom.js';
import { mdInline } from '../md-inline.js';
import { riskBanner, outcome, resultHead, staticOptions, noteLink } from './common.js';

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

  const again = el('button', { type: 'button', class: 'btn btn-primary', text: 'Nuova sessione' });
  again.addEventListener('click', () => ctx.goTo('config'));
  const exportBtn = el('button', { type: 'button', class: 'btn btn-ghost', text: 'Esporta quiz-errori.json' });
  exportBtn.addEventListener('click', () => ctx.exportLog());
  head.append(el('div', { class: 'actions actions-wrap' }, [again, exportBtn]));
  if (!r.recorded) head.append(el('p', { class: 'hint', text: 'Nessuna risposta data: la sessione non è stata registrata nello storico.' }));

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

  // --- dettaglio MCQ -----------------------------------------------------
  if (mcq.total) {
    root.append(el('h3', { class: 'section-title', text: 'Domande a risposta multipla' }));
    mcq.detail.forEach((d) => root.append(questionCard(d, ctx)));
  }

  // --- dettaglio flashcard ----------------------------------------------
  if (cards.mcqTotal) {
    root.append(el('h3', { class: 'section-title', text: 'Flashcard a risposta multipla' }));
    cards.detail.filter((c) => c.mode === 'mcq').forEach((c) => root.append(cardResultCard(c, ctx)));
  }
  if (cards.selfTotal) {
    root.append(el('h3', { class: 'section-title', text: 'Flashcard ad autovalutazione' }));
    root.append(el('section', { class: 'card' }, cards.detail.filter((c) => c.mode === 'self').map((c) => el('details', { class: `result-card ${c.correct ? 'is-ok' : 'is-ko'}` }, [
      el('summary', {}, [
        el('span', { class: `dot ${c.correct ? 'dot-ok' : 'dot-ko'}`, 'aria-hidden': 'true' }),
        el('span', { html: mdInline(c.card.question) }),
      ]),
      el('p', { class: 'muted small', text: `Lezione ${c.card.lesson} — ${c.card.lessonTitle}` }),
      el('div', { class: 'answer', html: mdInline(c.card.answer) }),
    ]))));
  }
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

  return box;
}
