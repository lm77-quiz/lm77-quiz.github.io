// latex-testo.js — le formule `$…$` del wiki e il loro equivalente in testo.
//
// Modulo PURO: nessun riferimento a DOM/window e nessuna dipendenza, quindi lo
// importano sia l'app (md-inline.js) sia gli strumenti Node, che non devono
// caricare KaTeX per misurare un'opzione.
//
// Tre funzioni:
//   - trovaFormule(): divide un testo in segmenti di prosa e di formula;
//   - testoVisibile(): sostituisce ogni formula con la sua resa in Unicode
//     lineare, la stessa notazione con cui sono scritte le lezioni non ancora
//     convertite (`S_te^(r(T-t))`, `σ²`, `𝟙_{A∪B}`). È ciò che usano le misure
//     del profilo d'esame, così una card convertita e una no si confrontano
//     alla pari;
//   - canonEquivalenza(): la forma su cui la conversione di una lezione viene
//     confrontata con l'originale. Ignora spazi e parentesi di raggruppamento,
//     ma NON pedici e apici.

// ---------------------------------------------------------------------------
// Delimitatori

const ALNUM = /[\p{L}\p{N}]/u;
const SPAZIO = /\s/;

/** Il code point che finisce all'indice `i` escluso (gestisce i surrogati). */
function prima(s, i) {
  if (i <= 0) return '';
  const lo = s.charCodeAt(i - 1);
  if (lo >= 0xdc00 && lo <= 0xdfff && i >= 2) return s.slice(i - 2, i);
  return s[i - 1];
}

/** Il code point che comincia all'indice `i`. */
function dopo(s, i) {
  if (i >= s.length) return '';
  return String.fromCodePoint(s.codePointAt(i));
}

/**
 * Indice del `$` (o `$$`) che chiude la formula aperta in `da`, oppure -1.
 *
 * Regole (quelle di pandoc, più una guardia contro la valuta):
 *   - la formula non va a capo e non è vuota;
 *   - `\x` è un escape: `\$` dentro una formula è un dollaro letterale;
 *   - il PRIMO `$` non escapato deve essere una chiusura valida, altrimenti la
 *     formula non c'è. Per `$…$`: niente spazio subito prima, niente lettera o
 *     cifra subito dopo. È ciò che lascia come testo «azione a $20, S Up =
 *     $22» e «max($22-21,0) = 1 e … max($18-21,0)».
 */
function chiusura(s, da, display) {
  for (let k = da; k < s.length; k++) {
    const c = s[k];
    if (c === '\n') return -1;
    if (c === '\\') {
      if (s[k + 1] === '\n') return -1;
      k++;
      continue;
    }
    if (c !== '$') continue;
    if (k === da) return -1;
    if (display) return s[k + 1] === '$' ? k : -1;
    if (SPAZIO.test(s[k - 1])) return -1;
    const succ = dopo(s, k + 1);
    if (succ === '$' || ALNUM.test(succ)) return -1;
    return k;
  }
  return -1;
}

/**
 * Divide un testo markdown inline in segmenti:
 *   `{ tipo: 'testo', testo }` e `{ tipo: 'formula', src, display }`.
 *
 * Una formula si apre con `$` (o `$$`) non preceduto da lettera o cifra e
 * seguito da un carattere che non è uno spazio. Gli span di codice
 * `` `…` `` restano testo, così come sono; fuori dal codice `\$` diventa `$`.
 * Un `$` che non apre una formula valida resta un dollaro.
 *
 * @param {string} input
 * @returns {Array<{tipo:'testo', testo:string}|{tipo:'formula', src:string, display:boolean}>}
 */
export function trovaFormule(input) {
  const s = input === null || input === undefined ? '' : String(input);
  const out = [];
  let buf = '';
  const flush = () => { if (buf) out.push({ tipo: 'testo', testo: buf }); buf = ''; };

  // Via rapida: niente dollari, niente formule (è il caso di quasi tutto il wiki).
  if (!s.includes('$')) return s ? [{ tipo: 'testo', testo: s }] : [];

  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (c === '\\' && s[i + 1] === '$') { buf += '$'; i += 2; continue; }
    if (c === '`') {
      const j = s.indexOf('`', i + 1);
      if (j > i + 1 && !s.slice(i + 1, j).includes('\n')) { buf += s.slice(i, j + 1); i = j + 1; continue; }
      buf += c; i++; continue;
    }
    if (c === '$') {
      const display = s[i + 1] === '$';
      const largo = display ? 2 : 1;
      const succ = s[i + largo];
      const apre = !ALNUM.test(prima(s, i)) && succ !== undefined && !SPAZIO.test(succ) && succ !== '$';
      const k = apre ? chiusura(s, i + largo, display) : -1;
      if (k >= 0) {
        flush();
        out.push({ tipo: 'formula', src: s.slice(i + largo, k), display });
        i = k + largo;
        continue;
      }
      buf += s.slice(i, i + largo); i += largo; continue;
    }
    buf += c; i++;
  }
  flush();
  return out;
}

// ---------------------------------------------------------------------------
// Da LaTeX a Unicode lineare

const GRECHE = {
  alpha: 'α', beta: 'β', gamma: 'γ', delta: 'δ', epsilon: 'ϵ', varepsilon: 'ε', zeta: 'ζ', eta: 'η',
  theta: 'θ', vartheta: 'ϑ', iota: 'ι', kappa: 'κ', varkappa: 'ϰ', lambda: 'λ', mu: 'μ', nu: 'ν', xi: 'ξ', pi: 'π',
  varpi: 'ϖ', rho: 'ρ', varrho: 'ϱ', sigma: 'σ', varsigma: 'ς', tau: 'τ', upsilon: 'υ', phi: 'ϕ',
  varphi: 'φ', chi: 'χ', psi: 'ψ', omega: 'ω',
  Gamma: 'Γ', Delta: 'Δ', Theta: 'Θ', Lambda: 'Λ', Xi: 'Ξ', Pi: 'Π', Sigma: 'Σ', Upsilon: 'Υ',
  Phi: 'Φ', Psi: 'Ψ', Omega: 'Ω',
};

const SIMBOLI = {
  partial: '∂', infty: '∞', cdot: '·', ast: '∗', times: '×', div: '÷', pm: '±', mp: '∓',
  in: '∈', notin: '∉', ni: '∋', cup: '∪', cap: '∩', setminus: '∖', subset: '⊂', subseteq: '⊆',
  supset: '⊃', supseteq: '⊇', emptyset: '∅', varnothing: '∅',
  le: '≤', leq: '≤', ge: '≥', geq: '≥', ne: '≠', neq: '≠', approx: '≈', simeq: '≃', cong: '≅',
  equiv: '≡', sim: '∼', propto: '∝', triangleq: '≜', ll: '≪', gg: '≫',
  to: '→', rightarrow: '→', leftarrow: '←', Rightarrow: '⇒', Leftarrow: '⇐', Leftrightarrow: '⇔',
  leftrightarrow: '↔', mapsto: '↦', longrightarrow: '⟶', implies: '⟹', iff: '⟺',
  sum: '∑', prod: '∏', int: '∫', iint: '∬', oint: '∮', nabla: '∇', forall: '∀', exists: '∃',
  bigcup: '⋃', bigcap: '⋂', doteq: '≐', coloneqq: ':=', approxeq: '≊', nexists: '∄', complement: '∁',
  neg: '¬', lnot: '¬', land: '∧', wedge: '∧', lor: '∨', vee: '∨', perp: '⊥', parallel: '∥',
  mid: '|', vert: '|', Vert: '‖', lvert: '|', rvert: '|', lVert: '‖', rVert: '‖',
  langle: '⟨', rangle: '⟩', lfloor: '⌊', rfloor: '⌋', lceil: '⌈', rceil: '⌉',
  dots: '…', ldots: '…', cdots: '⋯', vdots: '⋮', ddots: '⋱',
  prime: '′', circ: '∘', bullet: '•', star: '⋆', dagger: '†', ell: 'ℓ', hbar: 'ℏ', Re: 'ℜ', Im: 'ℑ',
  aleph: 'ℵ', angle: '∠', degree: '°',
};

// Nomi d'operatore: si leggono come parole, come nella notazione lineare.
const OPERATORI = new Set([
  'ln', 'log', 'lg', 'exp', 'max', 'min', 'sup', 'inf', 'lim', 'liminf', 'limsup', 'arg', 'det',
  'dim', 'ker', 'deg', 'gcd', 'Pr', 'sin', 'cos', 'tan', 'cot', 'sec', 'csc', 'arcsin', 'arccos',
  'arctan', 'sinh', 'cosh', 'tanh', 'hom',
]);

// Comandi che non si vedono: spaziature e taglie dei delimitatori.
const INVISIBILI = new Set([
  'left', 'right', 'big', 'Big', 'bigg', 'Bigg', 'bigl', 'bigr', 'Bigl', 'Bigr', 'biggl', 'biggr',
  'Biggl', 'Biggr', 'middle', 'displaystyle', 'textstyle', 'scriptstyle', 'limits', 'nolimits',
  'quad', 'qquad', 'enspace', 'thinspace', 'medspace', 'thickspace', 'negthinspace', 'nonumber',
]);

// Comandi a un argomento che lasciano il contenuto com'è.
const TESTUALI = new Set([
  'text', 'textrm', 'textit', 'textbf', 'textsf', 'texttt', 'textnormal', 'mbox', 'mathrm', 'mathit',
  'mathsf', 'mathtt', 'mathnormal', 'operatorname', 'boxed',
]);

const ACCENTI = {
  hat: '̂', widehat: '̂', bar: '̄', overline: '̄', tilde: '̃',
  widetilde: '̃', dot: '̇', ddot: '̈', vec: '⃗', check: '̌', breve: '̆',
  acute: '́', grave: '̀', underline: '̲',
};

const SCRIPT = {
  B: 'ℬ', E: 'ℰ', F: 'ℱ', H: 'ℋ', I: 'ℐ', L: 'ℒ', M: 'ℳ', R: 'ℛ', e: 'ℯ', g: 'ℊ', o: 'ℴ',
};
const DOPPIE = { C: 'ℂ', H: 'ℍ', N: 'ℕ', P: 'ℙ', Q: 'ℚ', R: 'ℝ', Z: 'ℤ' };

function mappaAlfabeto(testo, fn) {
  return Array.from(testo, (ch) => fn(ch) || ch).join('');
}

function grassetto(ch) {
  const c = ch.codePointAt(0);
  if (c >= 0x41 && c <= 0x5a) return String.fromCodePoint(0x1d400 + c - 0x41);
  if (c >= 0x61 && c <= 0x7a) return String.fromCodePoint(0x1d41a + c - 0x61);
  if (c >= 0x30 && c <= 0x39) return String.fromCodePoint(0x1d7ce + c - 0x30);
  if (c >= 0x391 && c <= 0x3a9) return String.fromCodePoint(0x1d6a8 + c - 0x391);
  if (c >= 0x3b1 && c <= 0x3c9) return String.fromCodePoint(0x1d6c2 + c - 0x3b1);
  const extra = { 'ϵ': 0x1d6dc, 'ϑ': 0x1d6dd, 'ϰ': 0x1d6de, 'ϕ': 0x1d6df, 'ϱ': 0x1d6e0, 'ϖ': 0x1d6e1, '∂': 0x1d6db, '∇': 0x1d6c1 };
  return extra[ch] ? String.fromCodePoint(extra[ch]) : null;
}

function calligrafico(ch) {
  if (SCRIPT[ch]) return SCRIPT[ch];
  const c = ch.codePointAt(0);
  if (c >= 0x41 && c <= 0x5a) return String.fromCodePoint(0x1d49c + c - 0x41);
  if (c >= 0x61 && c <= 0x7a) return String.fromCodePoint(0x1d4b6 + c - 0x61);
  return null;
}

function doppio(ch) {
  if (DOPPIE[ch]) return DOPPIE[ch];
  const c = ch.codePointAt(0);
  if (c >= 0x41 && c <= 0x5a) return String.fromCodePoint(0x1d538 + c - 0x41);
  if (c >= 0x30 && c <= 0x39) return String.fromCodePoint(0x1d7d8 + c - 0x30);
  return null;
}

/** Lunghezza «a vista»: code point, senza contare gli accenti combinanti. */
function visibili(t) {
  return Array.from(t.normalize('NFD').replace(/[̀-ͯ⃐-⃿]/g, '')).length;
}

const avvolgi = (t) => (visibili(t) > 1 ? `(${t})` : t);

// Operatori che separano i termini: dove ce n'è uno al livello più esterno,
// un'espressione non è più un prodotto di fattori accostati.
const OPERATORE = /[+\-−±∓=<>≤≥≠≈≜≡≟≝≐≔≊≃≅∝,;:→⇒·×∈∉∪∩∼|]/;

/** C'è un operatore fuori da ogni parentesi? */
function operatoreEsterno(t) {
  let prof = 0;
  for (const ch of t) {
    if (ch === '(' || ch === '[' || ch === '{') prof++;
    else if (ch === ')' || ch === ']' || ch === '}') prof--;
    else if (prof === 0 && OPERATORE.test(ch)) return true;
  }
  return false;
}

// Un carattere che, accanto a una frazione o a un gruppo, NON lo lega a ciò
// che sta di fianco: inizio o fine, spazio, parentesi dalla parte giusta,
// operatore. Tutto il resto (una lettera, una cifra, «/», «^», «√»…) vi si
// accosta e chiede le parentesi.
// `¦` è il confine con una parola di prosa nelle forme canoniche (vedi baseCanonica).
const staccaPrima = (ch) => !ch || /\s/.test(ch) || ch === '(' || ch === '[' || ch === '{' || ch === '¦' || OPERATORE.test(ch);
const staccaDopo = (ch) => !ch || /\s/.test(ch) || ch === ')' || ch === ']' || ch === '}' || ch === '¦' || OPERATORE.test(ch);

// Una frazione esce dal parser fra due sentinelle: le parentesi esterne si
// decidono solo a gruppo finito, quando si sa che cosa le sta accanto.
const FRAZ_A = '\u0002';
const FRAZ_B = '\u0003';

/**
 * `\frac{a}{b}` diventa `a/b` come lo scrive la notazione lineare:
 * un operando fra parentesi solo se contiene un operatore (`(n-1)/(n-m)`,
 * ma `∂f/∂S`), e la frazione intera fra parentesi solo se qualcosa le si
 * accosta (`(1/2)σ²`, `(∂f/∂S)[…]`, ma `x = a/b`).
 */
function risolviFrazioni(t) {
  let out = t;
  for (;;) {
    const fine = out.indexOf(FRAZ_B);
    if (fine < 0) return out;
    const inizio = out.lastIndexOf(FRAZ_A, fine);
    if (inizio < 0) return out.replace(/[\u0002\u0003]/g, '');
    const corpo = out.slice(inizio + 1, fine);
    const prima = Array.from(out.slice(0, inizio)).pop();
    const dopo = Array.from(out.slice(fine + 1))[0];
    const serve = !staccaPrima(prima) || !staccaDopo(dopo);
    out = out.slice(0, inizio) + (serve ? `(${corpo})` : corpo) + out.slice(fine + 1);
  }
}

const APICI = { 2: '²', 3: '³' };

// Le relazioni del livello più esterno si staccano con uno spazio, come
// nella notazione lineare («dπ = df - ΔdS»); dentro pedici e apici no
// («∑_{i=1}^n»).
const RELAZIONI = new Set(['=', '≜', '≈', '≤', '≥', '≠', '≡', '≟', '≝', '<', '>', '≃', '≅', '∝', '≐', ':=', '≊']);

/**
 * Converte il sorgente di UNA formula. Mini-parser ricorsivo: legge atomi
 * (carattere, comando, gruppo fra graffe) e ricostruisce la notazione lineare.
 * Un comando sconosciuto resta scritto `\nome`: così il controllo
 * d'equivalenza lo segnala invece di inghiottirlo.
 *
 * Gli spazi del sorgente non contano, come in TeX: la notazione lineare
 * scrive attaccato ciò che in LaTeX si separa per leggibilità («μSdt», non
 * «μ S dt»), e solo così le parole dei due testi coincidono.
 */
function convertiFormula(sorgente, esterno = false, risolvi = true) {
  // Le sentinelle delle frazioni non possono venire dal sorgente.
  const src = sorgente.replace(/[\u0002\u0003]/g, '');
  let i = 0;
  const n = src.length;

  const saltaSpazi = () => { while (i < n && SPAZIO.test(src[i])) i++; };

  // Contenuto grezzo di un gruppo `{…}` che comincia in i (src[i] === '{').
  function gruppoGrezzo() {
    let prof = 0;
    const inizio = i + 1;
    for (; i < n; i++) {
      if (src[i] === '\\') { i++; continue; }
      if (src[i] === '{') prof++;
      else if (src[i] === '}' && --prof === 0) { i++; return src.slice(inizio, i - 1); }
    }
    return src.slice(inizio);
  }

  // Argomento di un comando: un gruppo, un comando o un singolo carattere.
  function argomento() {
    saltaSpazi();
    if (i >= n) return { testo: '', gruppo: false };
    if (src[i] === '{') return { testo: convertiFormula(gruppoGrezzo()), gruppo: true };
    return { testo: atomo(), gruppo: false };
  }

  function argomentoGrezzo() {
    saltaSpazi();
    if (src[i] === '{') return gruppoGrezzo();
    const ch = dopo(src, i);
    i += ch.length;
    return ch;
  }

  function comando() {
    i++; // la barra
    if (i >= n) return '\\';
    if (!/[A-Za-z]/.test(src[i])) {
      const ch = src[i++];
      if (ch === ' ' || ch === '\\') return ' ';
      if (ch === ',' || ch === ':' || ch === ';' || ch === '>' || ch === '!') return '';
      if (ch === '|') return '‖'; // \| è la norma, come \Vert: non è |x|
      return ch; // \{ \} \$ \% \& \# \_
    }
    let nome = '';
    while (i < n && /[A-Za-z]/.test(src[i])) nome += src[i++];

    if (GRECHE[nome]) return GRECHE[nome];
    if (SIMBOLI[nome]) return SIMBOLI[nome];
    if (OPERATORI.has(nome)) return nome;
    if (INVISIBILI.has(nome)) {
      if ((nome === 'left' || nome === 'right' || nome === 'middle') && src[i] === '.') i++;
      return nome === 'quad' || nome === 'qquad' ? ' ' : '';
    }
    if (TESTUALI.has(nome)) return argomentoGrezzoTestuale(nome);
    // Un accento su un gruppo (`\overline{XY}`) copre tutto il gruppo: fra
    // parentesi, perché non sembri posato sull'ultima lettera soltanto.
    if (ACCENTI[nome]) return avvolgi(argomento().testo) + ACCENTI[nome];
    if (nome === 'frac' || nome === 'dfrac' || nome === 'tfrac' || nome === 'cfrac') {
      const operando = (t) => (operatoreEsterno(t) ? `(${t})` : t);
      const a = operando(argomento().testo);
      const b = operando(argomento().testo);
      return `${FRAZ_A}${a}/${b}${FRAZ_B}`;
    }
    if (nome === 'sqrt') {
      saltaSpazi();
      let radice = '√';
      if (src[i] === '[') {
        const j = src.indexOf(']', i);
        const indice = convertiFormula(src.slice(i + 1, j < 0 ? n : j)).trim();
        i = j < 0 ? n : j + 1;
        radice = indice === '3' ? '∛' : indice === '4' ? '∜' : `^${avvolgi(indice)}√`;
      }
      // Sempre fra parentesi: `√(2)π` e `√(2π)` sono cose diverse, e la
      // forma canonica deve poterle distinguere.
      return `${radice}(${argomento().testo})`;
    }
    if (nome === 'mathbf' || nome === 'boldsymbol' || nome === 'bm' || nome === 'pmb') {
      return mappaAlfabeto(argomento().testo, grassetto);
    }
    if (nome === 'mathcal' || nome === 'mathscr') return mappaAlfabeto(argomento().testo, calligrafico);
    if (nome === 'mathbb') return mappaAlfabeto(argomento().testo, doppio);
    if (nome === 'stackrel' || nome === 'overset') {
      const sopra = argomento().testo;
      const base = argomento().testo;
      if (sopra === '?' && base === '=') return '≟';
      if (sopra === 'def' && base === '=') return '≝';
      return `${base}^${avvolgi(sopra)}`;
    }
    if (nome === 'underset') {
      const sotto = argomento().testo;
      const base = argomento().testo;
      return `${base}_{${sotto}}`;
    }
    if (nome === 'begin' || nome === 'end') { argomentoGrezzo(); return ' '; }
    if (nome === 'not') { saltaSpazi(); return `${atomo()}̸`; }
    return `\\${nome}`;
  }

  function argomentoGrezzoTestuale(nome) {
    saltaSpazi();
    if (src[i] !== '{') return atomo();
    const grezzo = gruppoGrezzo();
    // \operatorname e \mathrm sono ancora modo matematico; \text no.
    return nome.startsWith('text') || nome === 'mbox' ? grezzo : convertiFormula(grezzo);
  }

  function atomo() {
    const c = src[i];
    if (c === '\\') return comando();
    // Un gruppo semplice non è un argomento: una frazione che contiene si
    // giudica col contesto di fuori (`{\frac{1}{2}}\sigma` è `(1/2)σ`).
    if (c === '{') return convertiFormula(gruppoGrezzo(), false, false);
    if (c === '~') { i++; return ' '; }
    if (c === "'") { i++; return '′'; }
    if (c === '&') { i++; return ' '; }
    const ch = dopo(src, i);
    i += ch.length;
    return ch;
  }

  let out = '';
  while (i < n) {
    const c = src[i];
    if (c === '^' || c === '_') {
      i++;
      const { testo } = argomento();
      if (c === '_') out += visibili(testo) > 1 ? `_{${testo}}` : `_${testo}`;
      else if (APICI[testo]) out += APICI[testo];
      else if (/^[∗′]+$/.test(testo)) out += testo; // h∗ e x′ sono già apici
      else out += visibili(testo) > 1 ? `^(${testo})` : `^${testo}`;
      continue;
    }
    if (SPAZIO.test(c)) { i++; continue; }
    const a = atomo();
    out += esterno && RELAZIONI.has(a) ? ` ${a} ` : a;
  }
  if (risolvi) out = risolviFrazioni(out);
  return esterno ? out.replace(/ {2,}/g, ' ').trim() : out;
}

/**
 * Il testo come lo leggerebbe chi non vede la tipografia: ogni formula
 * diventa Unicode lineare, il resto non cambia (salvo `\$` → `$`).
 * Senza formule restituisce l'input identico, e questo tiene invariate le
 * misure delle lezioni non convertite.
 */
export function testoVisibile(input) {
  const s = input === null || input === undefined ? '' : String(input);
  if (!s.includes('$')) return s;
  return trovaFormule(s)
    .map((seg) => {
      if (seg.tipo === 'testo') return seg.testo;
      // Un annidamento patologico esaurisce la pila: meglio il sorgente
      // grezzo che un titolo o un riepilogo che non si disegnano.
      try { return convertiFormula(seg.src, true); } catch { return seg.src; }
    })
    .join('');
}

// ---------------------------------------------------------------------------
// Equivalenza

const APICE_A_TESTO = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
  '⁺': '+', '⁻': '-', 'ⁿ': 'n',
};
const PEDICE_A_TESTO = {
  '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
};

// Esami con lezioni convertite in LaTeX. Fuori di qui un `$…$` è quasi
// certamente un dollaro di valuta preso per una formula (formule-smoke.mjs).
export const ESAMI_CON_FORMULE = new Set(['econometria-finanziaria-e-finanza-empirica']);

/**
 * Le graffe dopo `_` e `^` raggruppano soltanto e diventano tonde; le altre
 * sono graffe d'insieme (`{u, d}`, `ℱ{f(x)}`) e restano graffe, perché
 * `(u, d)` è un'altra cosa.
 */
function graffe(t) {
  const pila = [];
  let out = '';
  for (let k = 0; k < t.length; k++) {
    const c = t[k];
    if (c === '{') {
      const gruppo = t[k - 1] === '_' || t[k - 1] === '^';
      pila.push(gruppo);
      out += gruppo ? '(' : '{';
    } else if (c === '}') {
      out += pila.length && pila.pop() ? ')' : '}';
    } else out += c;
  }
  return out;
}

/**
 * Una radice senza parentesi nella notazione lineare (`√dt`, `√Δ_n`,
 * `√Var(X)`) copre i fattori che seguono fino al primo spazio o operatore:
 * la si scrive fra parentesi, come esce da `\sqrt{…}`.
 */
function radiciEsplicite(t) {
  let out = '';
  for (let k = 0; k < t.length; k++) {
    out += t[k];
    if (t[k] !== '√' || t[k + 1] === '(') continue;
    let j = k + 1;
    let prof = 0;
    while (j < t.length) {
      const c = t[j];
      if (c === '(' || c === '[' || c === '{') prof++;
      else if (c === ')' || c === ']' || c === '}') { if (prof === 0) break; prof--; }
      else if (prof === 0 && (/\s/.test(c) || OPERATORE.test(c) || c === '/')) break;
      j++;
    }
    out += `(${t.slice(k + 1, j)})`;
    k = j - 1;
  }
  return out;
}

// Base comune delle due forme canoniche: testo visibile, scomposto (NFD) e
// con le varianti tipografiche unificate. Una sequenza di apici o pedici
// Unicode diventa un gruppo solo (`10⁻⁶` → `10^(-6)`), come `10^{-6}`; la
// tilde ASCII di «X ~ N(…)» è `\sim`. Gli spazi spariscono, salvo quelli
// accanto a una parola di prosa (tre lettere latine minuscole), che
// diventano `¦`: senza, in «il -(1/2) davanti» la frazione sembrerebbe
// accostata a «davanti».
function baseCanonica(input) {
  const t = testoVisibile(input)
    .normalize('NFD')
    .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿ]+/g, (r) => {
      const x = Array.from(r, (c) => APICE_A_TESTO[c]).join('');
      return x.length > 1 ? `^(${x})` : `^${x}`;
    })
    .replace(/[₀₁₂₃₄₅₆₇₈₉]+/g, (r) => {
      const x = Array.from(r, (c) => PEDICE_A_TESTO[c]).join('');
      return x.length > 1 ? `_(${x})` : `_${x}`;
    })
    .replace(/−/g, '-')
    .replace(/[~∽]/g, '∼')
    // Apici composti che KaTeX in modo severo non accetta: nella conversione
    // diventano v'' e v'''. (Le frazioni ½ ⅓ ¼ ¾ si espandono più sotto,
    // dopo le radici: `√½x` copre anche la x.)
    .replace(/≔/g, ':=')
    .replace(/‴/g, '′′′')
    .replace(/″/g, '′′')
    .replace(/'/g, '′')
    .replace(/\.\.\./g, '…')
    .replace(/𝟙/gu, '𝟏')
    .replace(/\^(?=[∗′])/g, '')
    .replace(/[⁠​]/g, '')
    .replace(/\s+/g, ' ');
  const frazioni = radiciEsplicite(t).replace(/[½⅓¼¾]/g, (c) => ({ '½': '(1/2)', '⅓': '(1/3)', '¼': '(1/4)', '¾': '(3/4)' })[c]);
  return ordinaIndici(graffe(frazioni))
    .replace(/(?<=[a-z]\p{M}*[a-z]\p{M}*[a-z]\p{M}*) | (?=[a-z]{3})/gu, '¦')
    .replace(/ /g, '');
}

/**
 * Pedice e apice sullo stesso simbolo si scrivono in un ordine solo: KaTeX
 * rende allo stesso modo `\sigma_u^2` e `\sigma^2_u`, e la notazione lineare
 * li scrive in tutti e due i modi (`σ_u²`, `σ²_u`).
 */
function ordinaIndici(t) {
  const indice = String.raw`(\((?:[^()]|\([^()]*\))*\)|\P{M}\p{M}*)`;
  const re = new RegExp(String.raw`\^${indice}_${indice}`, 'gu');
  let prima;
  let s = t;
  do { prima = s; s = s.replace(re, '_$2^$1'); } while (s !== prima);
  return s;
}

/** Il testo contiene almeno una formula `$…$`? */
export function haFormule(t) {
  return trovaFormule(t).some((x) => x.tipo === 'formula');
}

// Notazione lineare rimasta FUORI dalle formule, cioè quello che a schermo
// distingue un'opzione dalle altre: pedici e apici ASCII attaccati a un simbolo
// (`σ_u`, `e^x`), radici, quadrati e cubi, operatori di analisi, alfabeti
// matematici (𝐱, 𝟙), accenti combinanti (β̂). Restano fuori ·, × e le lettere
// greche isolate, che la prosa usa di suo («matrice 2×2», «m=μ, s=σ» come lo
// scrive la piattaforma).
const LINEARE = /\S[_^][^\s_^]|[√²³∂∑∫]|[\u{1D400}-\u{1D7FF}]|[\u0300-\u036f]/u;

/** Il testo ha ancora notazione lineare fuori da `$…$` (codice escluso)? */
export function notazioneLineare(t) {
  return trovaFormule(t).some((x) => x.tipo === 'testo' && LINEARE.test(x.testo.replace(/`[^`\n]+`/g, '')));
}

/**
 * Forma canonica «larga»: per confrontare una lezione convertita con
 * l'originale SENZA guardare come sono raggruppati i termini.
 *
 * Toglie spazi e parentesi tonde (comprese le graffe che raggruppano un
 * pedice o un apice), unifica `²`/`^2`, `₀`/`_0`, `−`/`-`, `~`/`∼`,
 * `'`/`′`, `...`/`…` e l'uno dell'indicatrice (𝟙) con l'uno in grassetto
 * (𝟏). NON toglie `_` né `^`, e nemmeno le graffe d'insieme: spostare un
 * indice da pedice ad apice, o fare di `{u, d}` un `(u, d)`, resta una
 * differenza. Se due righe differiscono qui, il CONTENUTO è cambiato: è un
 * errore.
 */
export function canonEquivalenza(input) {
  return baseCanonica(input).replace(/[()¦]/g, '');
}

/** [inizio, fine] di ogni coppia di tonde, dalla più interna. */
function coppieParentesi(t) {
  const pila = [];
  const coppie = [];
  for (let k = 0; k < t.length; k++) {
    if (t[k] === '(') pila.push(k);
    else if (t[k] === ')' && pila.length) coppie.push([pila.pop(), k]);
  }
  return coppie;
}

/**
 * Toglie le parentesi che non dicono niente sul raggruppamento, le stesse da
 * entrambe le parti del confronto:
 *   (a) intorno a un solo simbolo: `_(t)` = `_t`, `N(d)` = `Nd`;
 *   (b) intorno a un prodotto che fa da numeratore o denominatore:
 *       `1/(σy)` = `1/σy`;
 *   (c) intorno a una frazione che non si accosta a nulla: `-(1/2)` = `-1/2`.
 * Quelle dopo `√` restano sempre: `√(2)π` non è `√(2π)`. Restano anche quelle
 * che delimitano davvero qualcosa: `e^(-r(T-t))`, `(1/2)σ²`, `a/(b+c)`.
 */
function semplificaParentesi(t) {
  let s = t;
  for (let giro = 0; giro < 10000; giro++) {
    let tolta = false;
    for (const [a, b] of coppieParentesi(s)) {
      const dentro = s.slice(a + 1, b);
      const prima = s[a - 1];
      const dopo = s[b + 1];
      if (prima === '√') continue;
      const prodotto = dentro && !operatoreEsterno(dentro) && !dentro.includes('/');
      const togli = /^\P{M}\p{M}*$/u.test(dentro)
        || ((prima === '/' || dopo === '/') && prodotto)
        || (dentro.includes('/') && !operatoreEsterno(dentro) && staccaPrima(prima) && staccaDopo(dopo)
          && prima !== '^' && prima !== '_');
      if (togli) {
        s = s.slice(0, a) + dentro + s.slice(b + 1);
        tolta = true;
        break;
      }
    }
    if (!tolta) return s;
  }
  return s;
}

/**
 * Forma canonica «stretta»: come la larga, ma tiene le parentesi che
 * delimitano qualcosa — l'estensione di una frazione, di una radice, di un
 * accento, di un esponente fra parentesi, di un pedice fra graffe. Due righe
 * uguali nella forma larga e diverse in questa hanno lo stesso contenuto
 * raggruppato in modo diverso (`√(T-t)` contro `\sqrt{T}-t`): non è detto che
 * sia un errore, perché la notazione lineare scrive le stesse cose in più
 * modi, ma va guardato. Limite: un pedice o un apice di più caratteri SENZA
 * parentesi nell'originale (`S_ud`) resta ambiguo anche qui; c'è la tavola
 * dei gruppi.
 */
export function canonRaggruppamento(input) {
  return semplificaParentesi(baseCanonica(input)).replace(/¦/g, '');
}
