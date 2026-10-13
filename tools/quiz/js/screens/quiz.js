// screens/quiz.js — svolgimento della sessione.
//
// Due blocchi separati, mai intercalati:
//  1) tutto ciò che si gioca a risposta multipla — prima le domande d'esame,
//     poi le flashcard con distrattori curati — con navigazione libera
//     avanti/indietro, griglia numerata e consegna esplicita (come le
//     piattaforme d'esame reali). Nessun esito prima del riepilogo, nemmeno
//     sulle flashcard;
//  2) le flashcard ad autovalutazione, sequenziali e senza ritorno indietro:
//     per giudicarsi bisogna vedere la risposta, quindi qui la correzione non
//     può essere differita (e non è onestamente revocabile).

import { el, clear } from '../dom.js';
import { mdInline } from '../md-inline.js';
import { compactLessons, isCardItem } from '../engine.js';
import { riskBanner } from './common.js';

/**
 * Promemoria del filtro attivo: senza, una prova corta su due lezioni sembra
 * una prova sull'intero esame andata male.
 */
function lessonBadge(s) {
  if (!s.lessons || !s.lessons.length) return null;
  return el('span', { class: 'muted', text: `Lezioni ${compactLessons(s.lessons)}` });
}

export function renderQuiz(root, ctx) {
  clear(root);
  const s = ctx.state.session;
  if (!s) { ctx.goTo('config'); return; }
  if (s.phase === 'mcq') renderMcq(root, ctx, s);
  else renderCard(root, ctx, s);
}

// ---------------------------------------------------------------------------
// Blocco MCQ
// ---------------------------------------------------------------------------

/**
 * La schermata si costruisce UNA volta per blocco; poi ogni interazione
 * aggiorna sul posto solo ciò che cambia (la domanda mostrata, le classi delle
 * opzioni, una o due celle della griglia, i contatori). Con le flashcard nel
 * blocco la griglia può contare centinaia di celle: ricostruirla a ogni tocco
 * pesava sui telefoni. Effetto collaterale voluto: i bottoni non vengono
 * ricreati, quindi il fuoco della tastiera resta dov'è senza doverlo
 * ripristinare.
 */
function renderMcq(root, ctx, s) {
  const items = s.blockItems;
  const total = items.length;
  const nCards = items.filter(isCardItem).length;
  const isAnswered = (it) => !!s.answers[it.question.id];

  // --- intestazione e avanzamento ------------------------------------------
  const position = el('span', { class: 'muted' });
  const answeredText = el('span', { class: 'muted' });
  root.append(el('div', { class: 'toolbar' }, [
    el('span', { class: 'badge', text: s.mode === 'review' ? 'Ripasso errori' : 'Simulazione' }),
    position,
    answeredText,
    lessonBadge(s),
  ]));
  const bar = el('div', { class: 'progress-bar' });
  const progress = el('div', {
    class: 'progress', role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': String(total),
  }, [bar]);
  root.append(progress);

  // --- domanda corrente (unica parte che si ricostruisce) ------------------
  const slot = el('div');
  root.append(slot);
  let optionButtons = [];

  // --- navigazione ---------------------------------------------------------
  const prev = el('button', { type: 'button', class: 'btn btn-ghost', text: '← Precedente' });
  const next = el('button', { type: 'button', class: 'btn btn-ghost', text: 'Successiva →' });
  prev.addEventListener('click', () => show(s.index - 1, prev));
  next.addEventListener('click', () => show(s.index + 1, next));
  root.append(el('div', { class: 'actions actions-split' }, [prev, next]));

  // --- griglia numerata ----------------------------------------------------
  const cells = items.map((it, i) => {
    const b = el('button', { type: 'button', text: String(i + 1) });
    b.addEventListener('click', () => show(i, null));
    return b;
  });
  root.append(el('section', { class: 'card' }, [
    el('h3', { class: 'small', text: 'Riepilogo risposte' }),
    el('div', { class: 'grid', role: 'group', 'aria-label': 'Vai alla domanda' }, cells),
    el('p', { class: 'hint', text: 'Le celle piene sono le domande a cui hai risposto. Puoi tornare su qualsiasi domanda prima di consegnare.' }),
    nCards ? el('p', {
      class: 'hint',
      text: nCards === total
        ? 'Sono tutte flashcard: esito e risposte compaiono nel riepilogo, dopo la consegna. Quelle lasciate in bianco non entrano nello storico.'
        : 'Le celle tratteggiate sono flashcard: come le domande, si correggono alla consegna. Quelle lasciate in bianco non entrano nello storico.',
    }) : null,
  ]));

  // --- consegna / abbandono ------------------------------------------------
  const submit = el('button', { type: 'button', class: 'btn btn-primary btn-block', text: 'Consegna' });
  submit.addEventListener('click', () => {
    const msg = blankMessage(items.filter((it) => !isAnswered(it)));
    if (msg && !window.confirm(msg)) return;
    ctx.submitMcq();
  });
  const abort = el('button', { type: 'button', class: 'btn btn-ghost', text: 'Abbandona' });
  abort.addEventListener('click', () => {
    if (window.confirm('Abbandonare la sessione? I risultati non verranno registrati.')) ctx.abortSession();
  });
  root.append(el('div', { class: 'actions actions-wrap' }, [submit, abort]));

  // --- aggiornamenti sul posto ---------------------------------------------
  function paintCell(i) {
    const it = items[i];
    const card = isCardItem(it);
    const done = isAnswered(it);
    const cell = cells[i];
    cell.className = `grid-cell${card ? ' is-card' : ''}${done ? ' is-answered' : ''}${i === s.index ? ' is-current' : ''}`;
    cell.setAttribute('aria-label', `${card ? 'Flashcard' : 'Domanda'} ${i + 1}${done ? ', risposta data' : ', in bianco'}`);
    if (i === s.index) cell.setAttribute('aria-current', 'true');
    else cell.removeAttribute('aria-current');
  }

  function paintCounters() {
    const answered = items.filter(isAnswered).length;
    answeredText.textContent = `${answered}/${total} risposte`;
    progress.setAttribute('aria-valuenow', String(answered));
    bar.style.width = `${total ? (answered / total) * 100 : 0}%`;
  }

  function paintOptions() {
    const chosenKey = s.answers[items[s.index].question.id];
    for (const btn of optionButtons) {
      const chosen = btn.dataset.key === chosenKey;
      btn.className = `option${chosen ? ' option-selected' : ''}`;
      btn.setAttribute('aria-pressed', chosen ? 'true' : 'false');
    }
  }

  function drawQuestion() {
    const item = items[s.index];
    const q = item.question;
    const card = isCardItem(item);
    position.textContent = `${card ? 'Flashcard' : 'Domanda'} ${s.index + 1} di ${total}`;
    prev.disabled = s.index === 0;
    next.disabled = s.index >= total - 1;

    // Sulle flashcard il banner di rischio aspetta il riepilogo: annunciare
    // «punto insidioso» prima di rispondere regalerebbe metà informazione.
    const box = el('section', { class: 'card question-card' });
    box.append(el('p', {
      class: 'muted small',
      text: `${card ? 'Flashcard · ' : ''}Lezione ${q.lesson} — ${q.lessonTitle}`,
    }));
    box.append(el('h2', { class: 'question-text', html: mdInline(q.text) }));
    optionButtons = item.options.map((opt) => {
      const btn = el('button', { type: 'button', class: 'option', dataset: { key: opt.key } }, [
        el('span', { class: 'option-key', text: opt.key }),
        el('span', { class: 'option-text', html: mdInline(opt.text) }),
      ]);
      btn.addEventListener('click', () => choose(opt.key, true));
      return btn;
    });
    box.append(el('div', { class: 'options', role: 'group', 'aria-label': 'Opzioni di risposta' }, optionButtons));
    clear(slot);
    slot.append(box);
    paintOptions();
  }

  /** Ri-cliccare l'opzione scelta la deseleziona; da tastiera si sceglie e basta. */
  function choose(key, toggle) {
    const id = items[s.index].question.id;
    if (toggle && s.answers[id] === key) delete s.answers[id];
    else s.answers[id] = key;
    paintOptions();
    paintCell(s.index);
    paintCounters();
  }

  /** `from`: la freccia usata, se ai bordi diventa disabilitata il fuoco passa all'altra. */
  function show(i, from) {
    if (i < 0 || i >= total || i === s.index) return;
    const old = s.index;
    s.index = i;
    paintCell(old);
    paintCell(i);
    drawQuestion();
    if (from && from.disabled) (from === prev ? next : prev).focus();
  }

  cells.forEach((_, i) => paintCell(i));
  paintCounters();
  drawQuestion();

  ctx.setKeys((ev) => {
    if (ev.metaKey || ev.ctrlKey || ev.altKey) return;
    const options = items[s.index].options;
    const k = ev.key.toUpperCase();
    const byLetter = options.find((o) => o.key === k);
    const byNumber = /^[1-9]$/.test(k) ? options[Number(k) - 1] : null;
    const chosen = byLetter || byNumber;
    if (chosen) { ev.preventDefault(); choose(chosen.key, false); return; }
    if (ev.key === 'ArrowRight' && s.index < total - 1) { ev.preventDefault(); show(s.index + 1, null); }
    if (ev.key === 'ArrowLeft' && s.index > 0) { ev.preventDefault(); show(s.index - 1, null); }
  });
}

/**
 * Conferma della consegna con elementi in bianco, contati per tipo: le
 * flashcard in bianco hanno una sorte diversa dalle domande (restano fuori
 * dallo storico), e chi consegna deve saperlo. null se non manca nulla.
 */
function blankMessage(blank) {
  if (!blank.length) return null;
  const nCards = blank.filter(isCardItem).length;
  const nQuestions = blank.length - nCards;
  const parts = [];
  if (nQuestions) parts.push(nQuestions === 1 ? '1 domanda' : `${nQuestions} domande`);
  if (nCards) parts.push(`${nCards} flashcard`);
  const verb = blank.length === 1 ? 'È rimasta' : 'Sono rimaste';
  const note = nCards ? ' Le flashcard in bianco non entrano nello storico.' : '';
  return `${verb} in bianco ${parts.join(' e ')}.${note} Consegnare comunque?`;
}

// ---------------------------------------------------------------------------
// Blocco flashcard
// ---------------------------------------------------------------------------

function renderCard(root, ctx, s) {
  const card = s.cards[s.cardIndex];
  const total = s.cards.length;
  const done = Object.values(s.cardResults).filter((r) => r && r.correct).length;

  root.append(el('div', { class: 'toolbar' }, [
    el('span', { class: 'badge', text: 'Flashcard' }),
    el('span', { class: 'muted', text: `Card ${s.cardIndex + 1} di ${total}` }),
    el('span', { class: 'muted', text: `${done} ok` }),
    lessonBadge(s),
  ]));

  root.append(el('div', {
    class: 'progress', role: 'progressbar',
    'aria-valuemin': '0', 'aria-valuemax': String(total), 'aria-valuenow': String(s.cardIndex),
  }, [el('div', { class: 'progress-bar', style: `width:${total ? (s.cardIndex / total) * 100 : 0}%` })]));

  const box = el('section', { class: 'card question-card' });
  box.append(el('p', { class: 'muted small', text: `Lezione ${card.lesson} — ${card.lessonTitle}` }));
  // Qui la risposta va prodotta, non riconosciuta: il banner non regala
  // nulla, e ricorda di fare attenzione prima di dichiararsi sicuri.
  const banner = riskBanner(card.risk);
  if (banner) box.append(banner);
  box.append(el('h2', { class: 'question-text', html: mdInline(card.question) }));

  const focusMe = renderCardSelf(box, ctx, s, card);

  root.append(box);
  // Il fuoco segue il passo successivo: rispondi/rivela → avanza.
  if (focusMe && typeof focusMe.focus === 'function') focusMe.focus();

  root.append(el('p', { class: 'hint', text: 'Le flashcard sono sequenziali: una volta risposto, non si torna indietro.' }));
}

/** Percorso storico: rivela la risposta e chiedi un giudizio a chi studia. */
function renderCardSelf(box, ctx, s, card) {
  if (!s.cardRevealed) {
    const reveal = el('button', { type: 'button', class: 'btn btn-primary btn-block', text: 'Mostra risposta' });
    reveal.addEventListener('click', () => { s.cardRevealed = true; ctx.rerender(); });
    box.append(reveal);
    ctx.setKeys((ev) => {
      if (ev.key === ' ' || ev.key === 'Enter') { ev.preventDefault(); s.cardRevealed = true; ctx.rerender(); }
    });
    return reveal;
  }

  box.append(el('div', { class: 'answer', html: mdInline(card.answer) }));
  const yes = el('button', { type: 'button', class: 'btn btn-primary', text: 'La sapevo' });
  const no = el('button', { type: 'button', class: 'btn btn-secondary', text: 'Non la sapevo' });
  yes.addEventListener('click', () => ctx.answerCard(true));
  no.addEventListener('click', () => ctx.answerCard(false));
  box.append(el('div', { class: 'actions actions-split' }, [no, yes]));
  ctx.setKeys((ev) => {
    if (ev.key === '1' || ev.key.toLowerCase() === 'n') { ev.preventDefault(); ctx.answerCard(false); }
    if (ev.key === '2' || ev.key.toLowerCase() === 's') { ev.preventDefault(); ctx.answerCard(true); }
  });
  return no;
}
