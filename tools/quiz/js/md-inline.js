// md-inline.js — renderer markdown "inline" minimale.
//
// Modulo PURO: nessun riferimento a DOM/window, importabile da Node.
//
// Pipeline (nell'ordine): formule `$…$` messe da parte -> escape HTML ->
// **grassetto** -> *corsivo* -> `codice` -> formule rese con KaTeX.
// Nient'altro viene interpretato: «caporali», ①②③, trattini lunghi ed emoji
// restano caratteri letterali. L'escaping avviene PRIMA di qualsiasi
// sostituzione, quindi l'unico HTML che può finire nell'output è quello
// generato qui o da KaTeX, che escapa a sua volta il sorgente e gira con
// `trust: false` (niente \href, \url, \html…): nessuna iniezione possibile
// dai file markdown del wiki.
//
// Le formule si riconoscono con le regole di latex-testo.js: lì si spiega
// perché un dollaro di valuta («azione a $20») resta un dollaro.

import katex from '../vendor/katex/katex.js';
import { trovaFormule, testoVisibile } from './latex-testo.js';

const ESCAPES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

/** Escape di tutti i caratteri significativi per l'HTML. */
export function escapeHtml(input) {
  if (input === null || input === undefined) return '';
  return String(input).replace(/[&<>"']/g, (ch) => ESCAPES[ch]);
}

/** Enfasi e codice su una stringa GIÀ escapata. */
function emphasis(s) {
  // ***grassetto+corsivo*** prima di tutto: altrimenti la coppia esterna di
  // asterischi verrebbe abbinata male e produrrebbe tag incrociati
  // (`<strong><em>…</strong></em>`).
  s = s.replace(/\*\*\*([^*\n]+)\*\*\*/g, '<strong><em>$1</em></strong>');
  // **grassetto** (non greedy, può contenere qualsiasi cosa tranne un altro **)
  s = s.replace(/\*\*([\s\S]+?)\*\*/g, '<strong>$1</strong>');
  // *corsivo* — solo asterischi singoli rimasti dopo il passaggio precedente
  s = s.replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>');
  // `codice`
  s = s.replace(/`([^`\n]+)`/g, '<code>$1</code>');
  return s;
}

// L'app è tollerante: una formula malformata si vede in rosso col suo
// sorgente invece di rompere la schermata. Gli strumenti e i test usano
// `severo`, che fa di ogni scostamento un errore — compreso un carattere
// Unicode che KaTeX accetterebbe solo con un glifo di ripiego (𝟙, 𝐱, β̂).
const OPZIONI_APP = { throwOnError: false, strict: 'ignore', trust: false };
const OPZIONI_SEVERE = { throwOnError: true, strict: 'error', trust: false };

const FRAZIONE = /\\frac(?![a-zA-Z])/;
// Costrutti con cui non si sa più che stile ha una frazione: la formula resta
// com'è. `x…` sono le frecce con etichetta (`\xrightarrow{…}`) e `\xcancel`,
// ma non `\xi`; `\verb`, `\url` e `\href` hanno argomenti letterali.
const SENZA_CONVERSIONE = new RegExp('\\\\(?:'
  + 'over|atop|choose|above|brace|brack|overwithdelims|atopwithdelims|abovewithdelims|genfrac'
  + '|textstyle|scriptstyle|scriptscriptstyle|displaystyle|mathchoice|begin'
  + '|tiny|scriptsize|footnotesize|small|normalsize|large|Large|LARGE|huge|Huge'
  + '|def|gdef|edef|xdef|global|let|futurelet|newcommand|renewcommand|providecommand'
  + '|verb|url|href'
  + '|x(?!i(?![a-zA-Z]))[a-zA-Z]+'
  + ')(?![a-zA-Z])');
// Comandi i cui primi N argomenti TeX compone piccoli. Gli argomenti devono
// arrivare fra graffe, altrimenti la formula resta com'è.
const ARGOMENTI_PICCOLI = new Map([['\\tfrac', 2], ['\\binom', 2], ['\\tbinom', 2], ['\\stackrel', 1], ['\\overset', 1], ['\\underset', 1]]);
// Che cosa può fare da apice o pedice senza graffe: un carattere, un comando
// d'un carattere (`\,`), una lettera greca o un simbolo senza argomenti.
// Qualsiasi altro comando (`x^\mathbf{…}`, `x^\frac12`) lascia la formula
// com'è: di un comando sconosciuto non si sa quanti argomenti si prende.
const GRECA = /^\\(?:var)?(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega)$/i;
const SIMBOLI_IN_APICE = new Set(['\\ast', '\\star', '\\infty', '\\prime', '\\circ', '\\dagger', '\\ddagger', '\\top', '\\bot', '\\perp',
  '\\ell', '\\partial', '\\nabla', '\\emptyset', '\\varnothing', '\\ldots', '\\cdots', '\\cdot', '\\pm', '\\mp', '\\times', '\\to']);
const COMANDO = /\\(?:[a-zA-Z]+|[^])?/y;

/**
 * Frazioni a grandezza piena: nelle formule in mezzo al testo ogni `\frac`
 * fuori da apici e pedici diventa `\dfrac`, comprese le frazioni annidate.
 *
 * In mezzo al testo TeX rimpicciolisce le frazioni: numeratore e denominatore
 * al 70%, i loro apici al 50%, e una frazione dentro una frazione scende
 * ancora. Nelle opzioni del quiz il dettaglio che separa la corretta da un
 * distrattore diventava illeggibile: alla lezione 27 la radice nel
 * denominatore di û_i^OLS, o un (n − m) nella frazione sotto quella radice.
 * Le formule in display (`$$…$$`) restano come vuole TeX.
 *
 * Si tocca la frazione e non lo stile della formula intera: un
 * `\displaystyle` in testa ingrandirebbe anche ∫ e i limiti di `\lim` e ∑, e
 * fra due opzioni della stessa domanda, una con una frazione e una senza, la
 * dimensione dell'integrale diventerebbe un indizio di forma.
 *
 * Restano `\frac` le frazioni nei contesti che TeX compone piccoli, dove
 * `\dfrac` staccherebbe un esponente dalla base o gonfierebbe un'etichetta:
 * apici e pedici, l'indice di `\sqrt[…]`, gli argomenti di `\tfrac` e
 * `\binom` e il primo di `\stackrel`, `\overset` e `\underset`.
 *
 * Nel dubbio la formula resta com'è, e `lasciata` dice perché:
 * - con `\over` e simili, con uno stile o una dimensione scelti dall'autore
 *   (`\textstyle`, `\small`…), con un ambiente (`cases`, `matrix`), con le
 *   frecce con etichetta, con una macro o con un argomento letterale;
 * - con un apice o un pedice fatto da un comando che non sia un simbolo,
 *   senza graffe (`x^\mathbf{a}`), o con un argomento piccolo senza graffe
 *   (`\tfrac12`).
 * Il wiki non usa nessuna di queste forme, e `latex-lezione.mjs` avvisa se una
 * formula con una frazione le introduce: accanto a opzioni ingrandite, una
 * frazione rimasta piccola sarebbe un indizio di forma.
 *
 * Il costo è una riga più alta e una frazione più larga, che sul telefono può
 * far scorrere l'opzione dentro la sua casella. Il testo TeX dell'annotazione
 * MathML porta `\dfrac` al posto di `\frac`.
 *
 * @param {string} src sorgente LaTeX
 * @returns {{testo: string, lasciata: string|null}} `lasciata` è il motivo
 *   per cui una formula con una frazione è rimasta com'era
 */
export function analizzaFrazioni(src) {
  if (!FRAZIONE.test(src)) return { testo: src, lasciata: null };
  const lascia = (motivo) => ({ testo: src, lasciata: motivo });
  const vietato = SENZA_CONVERSIONE.exec(src);
  if (vietato) return lascia(`contiene ${vietato[0]}`);
  // Stato del livello corrente, salvato a ogni gruppo aperto e ritrovato
  // alla sua chiusura:
  // - piccolo: si è dentro un contesto piccolo;
  // - attesi: quanti argomenti piccoli, fra graffe, devono ancora arrivare;
  // - apice: il pezzo che arriva è l'argomento di `^` o `_`;
  // - indice: il pezzo prima era `\sqrt`, quindi un `[` apre l'indice.
  let piccolo = false;
  let attesi = 0;
  let chiAttende = '';
  let apice = false;
  let indice = false;
  const pila = [];
  let out = '';
  for (let i = 0; i < src.length;) {
    const c = src[i];
    if (/\s/.test(c)) { out += c; i += 1; continue; }

    if (c === '{' || (c === '[' && indice)) {
      // Piccolo: dentro un contesto piccolo, argomento di un apice, indice di
      // una radice (solo `[`: la `{` di `\sqrt{…}` è il radicando) o
      // argomento piccolo atteso.
      pila.push({ chiude: c === '{' ? '}' : ']', piccolo, attesi: Math.max(0, attesi - 1) });
      piccolo = piccolo || apice || c === '[' || attesi > 0;
      attesi = 0;
      apice = false;
      indice = false;
      out += c;
      i += 1;
      continue;
    }
    if ((c === '}' || c === ']') && pila.length && pila[pila.length - 1].chiude === c) {
      ({ piccolo, attesi } = pila.pop());
      apice = false;
      indice = false;
      out += c;
      i += 1;
      continue;
    }

    // Un pezzo che non è un gruppo: un comando o un carattere.
    let pezzo = c;
    if (c === '\\') {
      COMANDO.lastIndex = i;
      pezzo = COMANDO.exec(src)[0];
    }
    if (attesi > 0) return lascia(`argomento di ${chiAttende} senza graffe`);
    if (apice && pezzo.length > 2 && !GRECA.test(pezzo) && !SIMBOLI_IN_APICE.has(pezzo)) {
      return lascia(`apice o pedice ${pezzo} senza graffe`);
    }
    apice = pezzo === '^' || pezzo === '_';
    indice = pezzo === '\\sqrt';
    if (ARGOMENTI_PICCOLI.has(pezzo)) {
      attesi = ARGOMENTI_PICCOLI.get(pezzo);
      chiAttende = pezzo;
    }
    out += pezzo === '\\frac' && !piccolo ? '\\dfrac' : pezzo;
    i += pezzo.length;
  }
  return { testo: out, lasciata: null };
}

/**
 * La formula come la rende l'app: con le frazioni a grandezza piena se sta in
 * mezzo al testo, com'è se è in display. Vedi analizzaFrazioni().
 * @param {string} src
 * @param {boolean} [display]
 * @returns {string}
 */
export function frazioniPiene(src, display = false) {
  return display ? src : analizzaFrazioni(src).testo;
}

/**
 * Rende una formula con KaTeX.
 * @param {string} src  sorgente LaTeX, senza delimitatori
 * @param {{display?: boolean, severo?: boolean}} [opts]
 * @returns {string} HTML
 */
export function renderFormula(src, { display = false, severo = false } = {}) {
  // Il controllo severo guarda il sorgente com'è scritto, così le posizioni
  // dei suoi messaggi d'errore sono quelle del file. La versione con
  // frazioniPiene() la controlla latex-lezione.mjs a parte.
  if (severo) return katex.renderToString(src, { displayMode: display, ...OPZIONI_SEVERE });
  // `throwOnError: false` copre solo gli errori di sintassi: un annidamento
  // patologico arriva come RangeError, e una formula sola non deve poter
  // spegnere un'intera schermata.
  try {
    const piene = frazioniPiene(src, display);
    if (piene !== src) {
      // La versione con `\dfrac` si prova lanciando l'errore: se KaTeX la
      // rifiuta si rende quella del file, così una formula malformata si
      // mostra in rosso col sorgente vero.
      try {
        return katex.renderToString(piene, { displayMode: display, ...OPZIONI_APP, throwOnError: true });
      } catch { /* si ripiega sul sorgente */ }
    }
    return katex.renderToString(src, { displayMode: display, ...OPZIONI_APP });
  } catch (e) {
    return `<span class="katex-error" title="${escapeHtml(e && e.message)}">${escapeHtml(src)}</span>`;
  }
}

// Le formule si tolgono dal testo PRIMA dell'escape e si reinseriscono alla
// fine: KaTeX vuole il sorgente grezzo (`x < y`), e né l'enfasi né i link
// devono poter guardare dentro una formula. Il NUL non compare mai nel wiki;
// lo si toglie comunque, perché nessun input possa fingersi un segnaposto.
function estraiFormule(input) {
  const formule = [];
  const testo = trovaFormule(input).map((seg) => {
    if (seg.tipo === 'testo') return seg.testo.replace(/\u0000/g, '');
    // Anche dal sorgente: finisce tale e quale negli href (hrefGrezzo), che
    // ripristinaFormule riscrive.
    formule.push({ ...seg, src: seg.src.replace(/\u0000/g, '') });
    return `\u0000M${formule.length - 1}\u0000`;
  }).join('');
  return { testo, formule };
}

// La punteggiatura che segue una formula inline entra nell'ultimo pezzo della
// formula. Il browser può andare a capo fra quel pezzo, un inline-block di
// KaTeX, e il punto, che resta da solo a inizio riga; un word joiner (U+2060)
// non lo impedisce, e un contenitore `nowrap` toglierebbe alla formula i suoi
// punti d'a capo. Dentro il pezzo, che non si spezza mai, il punto resta
// attaccato. `.formula-dopo` gli ridà carattere, corpo e peso del testo
// (style.css). Entra l'intera corsa (`»,`, `).`), e il trattino solo se segue
// una lettera (`$\sigma$-algebra`, non `->`). Il pezzo è aria-hidden, come
// tutta la resa visiva di KaTeX, quindi in coda a .katex ne segue una copia
// invisibile (`.visually-hidden`) per il lettore di schermo: il `?` di
// una domanda che finisce con una formula. `%` e `!` restano comunque fuori.
const DOPO_FORMULA = /\u0000M(\d+)\u0000([.,;:?)\]»…]+|-(?=\p{L}))?/gu;
// Fine della resa KaTeX: chiusura dell'ultimo figlio di .katex-html, di
// .katex-html e di .katex. Quel figlio deve essere un .katex-base: dopo un
// `\\` è lo span katex-newline, che va a capo.
const CODA_KATEX = '</span></span></span>';

function ripristinaFormule(html, formule) {
  if (!formule.length) return html;
  return html.replace(DOPO_FORMULA, (_, k, dopo = '') => {
    const f = formule[Number(k)];
    if (!f) return dopo;
    const resa = renderFormula(f.src, { display: f.display });
    if (!f.display && dopo && resa.endsWith(CODA_KATEX)
      && resa.lastIndexOf('class="katex-base"') > resa.lastIndexOf('katex-newline')) {
      // La copia per il lettore di schermo sta dentro .katex, dopo .katex-html:
      // .katex è position: relative, quindi la copia (position: absolute) resta
      // nella casella che scorre. Fuori, il suo riferimento sarebbe la pagina,
      // e su un telefono la allargherebbe.
      return `${resa.slice(0, -CODA_KATEX.length)}<span class="formula-dopo">${dopo}</span></span></span>`
        + `<span class="visually-hidden">${dopo}</span></span>`;
    }
    return resa + dopo;
  });
}

/**
 * Converte una stringa markdown "inline" in HTML sicuro.
 * @param {string} input
 * @returns {string} HTML già escapato
 */
export function mdInline(input) {
  const { testo, formule } = estraiFormule(input);
  return ripristinaFormule(emphasis(escapeHtml(testo)), formule);
}

// Schemi ammessi in un href. Tutto il resto (in primis `javascript:`) viene
// scartato e il link degrada a testo semplice. I percorsi relativi e le ancore
// non hanno schema e passano sempre.
const SAFE_SCHEME = /^(?:https?:|mailto:)/i;
const HAS_SCHEME = /^[a-z][a-z0-9+.-]*:/i;

/** @returns {string|null} l'href se accettabile, altrimenti null. */
function safeHref(href) {
  const h = href.trim();
  if (!h) return null;
  if (HAS_SCHEME.test(h) && !SAFE_SCHEME.test(h)) return null;
  return h;
}

/**
 * Come mdInline(), ma riconosce anche i link `[testo](href)`.
 * Serve ai documenti del wiki, che si citano a vicenda; le schermate del quiz
 * usano mdInline(), dove un link sarebbe fuori posto.
 *
 * I link vengono estratti PRIMA dell'enfasi e reinseriti dopo: così un
 * asterisco dentro un URL non viene scambiato per un corsivo, e l'enfasi non
 * può intaccare il markup generato qui.
 *
 * @param {string} input
 * @returns {string} HTML già escapato
 */
export function mdInlineLinks(input) {
  const links = [];
  const { testo, formule } = estraiFormule(input);
  let s = escapeHtml(testo);

  // Una formula finita nell'href torna testo: KaTeX dentro un attributo ne
  // chiuderebbe le virgolette.
  const hrefGrezzo = (h) => h.replace(/\u0000M(\d+)\u0000/g, (_, k) => {
    const f = formule[Number(k)];
    return f ? escapeHtml(f.display ? `$$${f.src}$$` : `$${f.src}$`) : '';
  });
  s = s.replace(/\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;[^)]*&quot;)?\)/g, (_, text, href) => {
    const i = links.push({ text, href: hrefGrezzo(href) }) - 1;
    return `\u0000L${i}\u0000`;
  });

  s = emphasis(s);

  s = s.replace(/\u0000L(\d+)\u0000/g, (_, i) => {
    const { text, href } = links[Number(i)];
    const safe = safeHref(href);
    const label = emphasis(text);
    if (!safe) return label;
    const external = /^https?:/i.test(safe) ? ' target="_blank" rel="noopener"' : '';
    return `<a class="link" href="${safe}"${external}>${label}</a>`;
  });
  return ripristinaFormule(s, formule);
}

/**
 * Rimuove i marcatori markdown restituendo testo semplice (per attributi,
 * title, aria-label…). Non produce HTML. Le formule diventano Unicode lineare.
 */
export function mdStrip(input) {
  if (input === null || input === undefined) return '';
  return testoVisibile(input)
    .replace(/\*\*\*([^*\n]+)\*\*\*/g, '$1')
    .replace(/\*\*([\s\S]+?)\*\*/g, '$1')
    .replace(/(^|[^*])\*([^*\n]+)\*/g, '$1$2')
    .replace(/`([^`\n]+)`/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}
