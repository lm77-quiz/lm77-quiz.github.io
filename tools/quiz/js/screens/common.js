// screens/common.js — pezzi di schermata condivisi da quiz.js e results.js.
//
// Sono qui perché le due copie divergerebbero: un'etichetta di rischio
// cambiata in una sola schermata, o un badge che compare in correzione per le
// domande ma non per le flashcard.

import { el } from '../dom.js';
import { mdInline } from '../md-inline.js';
import { isSyncLesson, lessonLabel } from '../engine.js';

const RISK_LABEL = { warn: '⚠️ punto insidioso', alarm: '🚨 attenzione: contenuto insidioso' };

/** Banner del marcatore ⚠️/🚨 di una flashcard; null se la card non ne ha. */
export function riskBanner(risk) {
  if (!risk) return null;
  return el('p', {
    class: `banner banner-${risk === 'alarm' ? 'alarm' : 'warn'}`,
    text: RISK_LABEL[risk] || RISK_LABEL.warn,
  });
}

/** Data e ora leggibili di un timestamp ISO; «—» se assente o illeggibile. */
export function fmtDate(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '—';
  return d.toLocaleString('it-IT', { dateStyle: 'medium', timeStyle: 'short' });
}

/** Nome della modalità di una sessione registrata. */
export function modeLabel(mode) {
  return mode === 'review' ? 'Ripasso errori' : 'Simulazione';
}

/** Esito di un dettaglio corretto: `blank`, `ok` o `ko`. */
export function outcome(d) {
  if (!d.answered) return 'blank';
  return d.correct ? 'ok' : 'ko';
}

/** Riga di testa di una scheda di correzione: pallino dell'esito + etichetta. */
export function resultHead(state, label) {
  return el('div', { class: 'result-head' }, [
    el('span', { class: `dot dot-${state}`, 'aria-hidden': 'true' }),
    el('span', { class: 'muted small', text: label }),
  ]);
}

/**
 * Opzioni in correzione, nell'ordine in cui arrivano (quello del file: le
 * spiegazioni citano le lettere originali), con i badge «corretta», «la tua
 * scelta» e, se passata, «chiave piattaforma».
 */
export function staticOptions(options, { correctKey, givenKey, correct, correctLabel = 'corretta', platformKey = null }) {
  const list = el('ul', { class: 'options options-static' });
  for (const opt of options) {
    const badges = [];
    if (opt.key === correctKey) badges.push(el('span', { class: 'tag tag-ok', text: correctLabel }));
    if (opt.key === givenKey) badges.push(el('span', { class: 'tag tag-mine', text: 'la tua scelta' }));
    if (platformKey && opt.key === platformKey) badges.push(el('span', { class: 'tag tag-alarm', text: 'chiave piattaforma' }));
    const cls = [
      'option',
      opt.key === correctKey ? 'option-correct' : '',
      opt.key === givenKey && !correct ? 'option-wrong' : '',
    ].filter(Boolean).join(' ');
    list.append(el('li', { class: cls }, [
      el('span', { class: 'option-key', text: opt.key }),
      el('span', { class: 'option-text' }, [
        el('span', { html: mdInline(opt.text) }),
        badges.length ? el('span', { class: 'tags' }, badges) : null,
      ]),
    ]));
  }
  return list;
}

/**
 * Link al materiale da cui viene una domanda: la nota della lezione, o per i
 * test delle sincrone la sezione del registro (una sincrona non ha nota).
 * Null nella build pubblica, che non ha né l'una né l'altro.
 */
export function noteLink(ctx, lesson, question = null) {
  const sync = question ? question.source === 'sincrona' : isSyncLesson(lesson);
  const href = sync ? ctx.syncRegistryUrl(question) : ctx.noteUrlFor(lesson);
  if (!href) return null;
  return el('a', {
    class: 'link', href, target: '_blank', rel: 'noopener',
    text: sync ? `Registro della ${lessonLabel(lesson).toLowerCase()} ↗` : `Nota della lezione ${lesson} ↗`,
  });
}
