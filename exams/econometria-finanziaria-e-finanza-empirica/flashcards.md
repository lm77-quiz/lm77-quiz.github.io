# Flashcard — Econometria Finanziaria e Finanza empirica

<!-- Formato: blocchi "**D:** domanda" / "**R:** risposta", raggruppati per lezione sotto un'intestazione "## Lezione NN". -->

## Lezione 01 — Nozioni introduttive 1

**D:** Come si definisce la funzione indicatrice (index function) 𝟙_{x∈(a,b)}, secondo la lezione 01?
**R:** «Si definisce **funzione indicatrice** o **index function** la seguente funzione: 𝟙_{x∈(a,b)} ≜ **1 per x ∈ (a,b)**, **0 per x ∉ (a,b)**» (slide 2). «L'espressione 𝟙_{x∈(a,b)} viene spesso denotata come **𝟙_{(a,b)}(x)**»: per il docente si riporta l'intervallo di definizione nel pedice del simbolo 1 in grassetto ([00:00:06]–[00:01:07]).
**Opzione:** La funzione che vale 1 per x ∈ (a,b) e 0 per x ∉ (a,b), spesso denotata come 𝟙_{(a,b)}(x).
**Distrattori:**
- La funzione che vale 0 per x ∈ (a,b) e 1 per x ∉ (a,b), spesso denotata come 𝟙_{(a,b)}(x).
- La funzione continua che vale 0 per t ≠ 0 e ∞ per t = 0, ove ∫_{-∞}^{+∞} δ(t) dt = 1.
- La funzione che vale 1 se x ≥ 0 e 0 se x < 0, o alternativamente 1 se x > 0, 1/2 se x = 0 e 0 se x < 0.

**D:** ⚠️ Quale relazione vale per la funzione indicatrice dell'unione di due insiemi A e B, secondo la slide 2 della lezione 01?
**R:** «Dati gli insiemi A e B, per la funzione indicatrice vale la seguente relazione: **𝟙_{A∪B} = 𝟙_A + 𝟙_B + 𝟙_{A∩B}**» (slide 2). Anche il docente dice «**più** la funzione indicatrice di A intersecato a B» ([00:01:07]): slide e transcript concordano. ⚠️ È la formula della slide: la nota della lezione 01 spiega, in un blocco ℹ️, che l'identità dei manuali ha il segno meno. All'esame vale la slide.
**Opzione:** 𝟙_{A∪B} = 𝟙_A + 𝟙_B + 𝟙_{A∩B}
**Distrattori:**
- 𝟙_{A∩B} = 𝟙_A + 𝟙_B + 𝟙_{A∪B}
- ∫_a^b f(x) dx = ∫_{-∞}^{+∞} 𝟙_{x∈(a,b)} f(x) dx
- 2π · δ(t) = ∫_{-∞}^{+∞} e^(itx) dx, dove il lato destro coincide con la trasformata di Fourier per la funzione f(x) = 1.

**D:** ⚠️ Quale relazione vale fra l'integrale definito ∫_a^b f(x) dx e la funzione indicatrice (proposizione (1))?
**R:** «Per la funzione indicatrice vale la seguente relazione: **∫_a^b f(x) dx = ∫_{-∞}^{+∞} 𝟙_{x∈(a,b)} f(x) dx** (1)» (slide 3). Per il docente l'indicatrice è «valorizzata nell'intervallo **aperto** a b» ([00:01:25]). La dimostrazione scompone l'integrale di destra in tre parti, da -∞ ad a^-, da a a b e da b^+ a +∞: per la definizione di funzione indicatrice il **primo** e il **terzo** sono nulli, e resta ∫_a^b f(x) dx (slide 3; transcript [00:01:44]).
**Opzione:** ∫_a^b f(x) dx = ∫_{-∞}^{+∞} 𝟙_{x∈(a,b)} f(x) dx
**Distrattori:**
- ∫_a^b f(x) dx = ∫_{-∞}^{+∞} 𝟙_{x∉(a,b)} f(x) dx
- 𝟙_{A∪B} = 𝟙_A + 𝟙_B + 𝟙_{A∩B}
- ℱ{f(x)}(t) = ∫_{-∞}^{+∞} f(x) e^(-itx) dx, dove i è il numero immaginario.

**D:** ⚠️ Quale relazione vale come corollario della proposizione (1) sulla funzione indicatrice, e su quale intervallo è definita l'indicatrice?
**R:** «Vale la seguente relazione: **∫_a^b dx = ∫_{-∞}^{+∞} 𝟙_{x∈[a,b]} dx**» (slide 3). ⚠️ Qui l'intervallo è **chiuso**, [a,b], mentre nella proposizione (1) era aperto, (a,b): il docente parla di «intervallo chiuso a b» ([00:01:44]–[00:02:57]).
**Opzione:** ∫_a^b dx = ∫_{-∞}^{+∞} 𝟙_{x∈[a,b]} dx, con l'indicatrice sull'intervallo chiuso [a,b].
**Distrattori:**
- ∫_a^b dx = ∫_{-∞}^{+∞} 𝟙_{x∉[a,b]} dx, con l'indicatrice fuori dall'intervallo chiuso [a,b].
- La funzione di Heaviside è l'integrale da -∞ a x della delta di Dirac: θ(x) = ∫_{-∞}^{x} δ(t) dt.
- 2π · δ(t) = ∫_{-∞}^{+∞} e^(itx) dx, dove il lato destro coincide con la trasformata di Fourier per la funzione f(x) = 1.

**D:** Come si definisce la delta di Dirac (delta function), secondo la lezione 01?
**R:** «Si definisce **delta di Dirac** o **delta function** la funzione continua definita nel seguente modo: δ(t) ≜ **0 per t ≠ 0**, **∞ per t = 0**, ove **∫_{-∞}^{+∞} δ(t) dt = 1**» (slide 4; transcript [00:02:57]). Per il docente è una funzione «particolarmente utile» nel prosieguo della trattazione. Per la stessa definizione vale anche ∫_0^t δ(u) du = 1: l'identità a 1 è sempre verificata «a condizione che il valore di t per cui la funzione esplode sia compreso negli intervalli di integrazione» (slide 5; transcript [00:03:30]).
**Opzione:** La funzione continua che vale 0 per t ≠ 0 e ∞ per t = 0, ove ∫_{-∞}^{+∞} δ(t) dt = 1.
**Distrattori:**
- La funzione continua che vale 0 per t ≠ 0 e ∞ per t = 0, ove ∫_{-∞}^{+∞} δ(t) dt = 0.
- La funzione che vale 1 per x ∈ (a,b) e 0 per x ∉ (a,b), spesso denotata come 𝟙_{(a,b)}(x).
- La funzione che vale 1 se x ≥ 0 e 0 se x < 0, o alternativamente 1 se x > 0, 1/2 se x = 0 e 0 se x < 0.

**D:** Come si definisce la delta di Dirac non centrata, secondo la lezione 01?
**R:** «Si definisce **delta di Dirac non centrata** la seguente funzione: δ_{t_0}(t) ≜ **δ(t - t_0)** ≜ **0 per t ≠ t_0**, **∞ per t = t_0**» (slide 5; transcript [00:03:52]).
**Opzione:** δ_{t_0}(t) ≜ δ(t - t_0), che vale 0 per t ≠ t_0 e ∞ per t = t_0.
**Distrattori:**
- δ_{t_0}(t) ≜ δ(t - t_0), che vale ∞ per t ≠ t_0 e 0 per t = t_0.
- Qualora espressa come sub 4, θ_{x_0}(x) ≜ θ(x - x_0) ≜ 𝟙_{x≥x_0}.
- ∫_a^b dx = ∫_{-∞}^{+∞} 𝟙_{x∈[a,b]} dx, con l'indicatrice sull'intervallo chiuso [a,b].

**D:** ⚠️ Come si definisce la funzione di Heaviside θ(x), nella forma (2) e nella forma alternativa (3)?
**R:** Forma (2): «θ(x) = **1 se x ≥ 0**, θ(x) = **0 se x < 0**»; «o alternativamente» (3): «θ(x) = 1 se x > 0, θ(x) = **1/2 se x = 0**, θ(x) = 0 se x < 0» (slide 6; transcript [00:04:16]). ⚠️ Le due forme differiscono solo nel punto x = 0, dove la (2) vale 1 e la (3) vale 1/2.
**Opzione:** La funzione che vale 1 se x ≥ 0 e 0 se x < 0, o alternativamente 1 se x > 0, 1/2 se x = 0 e 0 se x < 0.
**Distrattori:**
- La funzione che vale 1 se x ≥ 0 e 0 se x < 0, o alternativamente 1 se x > 0, 1/2 se x = 0 e -1 se x < 0.
- La funzione che vale 1 per x ∈ (a,b) e 0 per x ∉ (a,b), spesso denotata come 𝟙_{(a,b)}(x).
- La funzione continua che vale 0 per t ≠ 0 e ∞ per t = 0, ove ∫_{-∞}^{+∞} δ(t) dt = 1.

**D:** ⚠️ Come si esprime la funzione di Heaviside non centrata attraverso la funzione indicatrice, e in quale delle sue due forme?
**R:** «Si definisce funzione di Heaviside non centrata» θ_{x_0}(x) ≜ θ(x - x_0) ≜ **1 per x ≥ x_0**, **0 per x < x_0** (4), «o alternativamente» con **1/2 per x = x_0** (5). «La funzione di Heaviside non centrata, qualora espressa come **sub 4**, può anche essere espressa attraverso la funzione indicatrice»: **θ_{x_0}(x) ≜ θ(x - x_0) ≜ 𝟙_{x≥x_0}** (6) (slide 7; transcript [00:04:53]–[00:05:57]). Per il docente è una prima relazione fra la Heaviside e la index function.
**Opzione:** Qualora espressa come sub 4, θ_{x_0}(x) ≜ θ(x - x_0) ≜ 𝟙_{x≥x_0}.
**Distrattori:**
- Qualora espressa come sub 4, θ_{x_0}(x) ≜ θ(x - x_0) ≜ 𝟙_{x<x_0}.
- δ_{t_0}(t) ≜ δ(t - t_0), che vale 0 per t ≠ t_0 e ∞ per t = t_0.
- 𝟙_{A∪B} = 𝟙_A + 𝟙_B + 𝟙_{A∩B}

**D:** Quale relazione vale fra la funzione di Heaviside e la delta di Dirac (proposizione (7))?
**R:** «Tra la funzione di Heaviside e la delta di Dirac vale la seguente relazione: **θ(x) = ∫_{-∞}^{x} δ(t) dt** (7)». Il corollario (8) la estende alle versioni non centrate: θ_{x_0}(x) = ∫_{-∞}^{x-x_0} δ(t) dt = ∫_{-∞}^{x} δ(t - x_0) dt (slide 8; transcript [00:05:57]–[00:06:39]).
**Opzione:** La funzione di Heaviside è l'integrale da -∞ a x della delta di Dirac: θ(x) = ∫_{-∞}^{x} δ(t) dt.
**Distrattori:**
- La funzione di Heaviside è l'integrale da x a +∞ della delta di Dirac: θ(x) = ∫_{x}^{+∞} δ(t) dt.
- ∫_a^b f(x) dx = ∫_{-∞}^{+∞} 𝟙_{x∈(a,b)} f(x) dx
- δ_{t_0}(t) ≜ δ(t - t_0), che vale 0 per t ≠ t_0 e ∞ per t = t_0.

**D:** Come si definisce la trasformata di Fourier di una funzione f(x) continua ∀x, secondo la lezione 01?
**R:** «Data f(x) una funzione continua ∀x, si definisce **trasformata di Fourier di f** la funzione ℱ definita come: **ℱ{f(x)}(t) = ∫_{-∞}^{+∞} f(x) e^(-itx) dx**», dove i è il numero immaginario (slide 9; transcript [00:06:39]).
**Opzione:** ℱ{f(x)}(t) = ∫_{-∞}^{+∞} f(x) e^(-itx) dx, dove i è il numero immaginario.
**Distrattori:**
- ℱ{f(x)}(t) = ∫_{0}^{+∞} f(x) e^(-itx) dx, dove i è il numero immaginario.
- La funzione di Heaviside è l'integrale da -∞ a x della delta di Dirac: θ(x) = ∫_{-∞}^{x} δ(t) dt.
- ∫_a^b dx = ∫_{-∞}^{+∞} 𝟙_{x∈[a,b]} dx, con l'indicatrice sull'intervallo chiuso [a,b].

**D:** ⚠️ Come si scrive la trasformata di Fourier in base alla formula di Eulero, e qual è il suo dominio?
**R:** «o equivalentemente (in base alla rappresentazione dei numeri complessi con la formula di Eulero): **ℱ{f(x)}(t) = ∫_{-∞}^{+∞} f(x) cos(tx) dx - i ∫_{-∞}^{+∞} f(x) sin(tx) dx** (9) e il cui dominio è **l'insieme dei t ∈ ℂ tali che l'integrale converge**» (slide 9; transcript [00:06:39]–[00:08:02]).
**Opzione:** ℱ{f(x)}(t) = ∫_{-∞}^{+∞} f(x) cos(tx) dx - i ∫_{-∞}^{+∞} f(x) sin(tx) dx, con dominio l'insieme dei t ∈ ℂ tali che l'integrale converge.
**Distrattori:**
- ℱ{f(x)}(t) = ∫_{-∞}^{+∞} f(x) cos(tx) dx - i ∫_{-∞}^{+∞} f(x) sin(tx) dx, con dominio l'insieme dei t ∈ ℂ tali che l'integrale diverge.
- Qualora espressa come sub 4, θ_{x_0}(x) ≜ θ(x - x_0) ≜ 𝟙_{x≥x_0}.
- Per una funzione pari, cioè tale che f(x) = f(-x).

**D:** ⚠️ Per quale tipo di funzione la trasformata di Fourier ammette la rappresentazione equivalente ℱ{f(x)}(t) = ∫_{-∞}^{+∞} f(x) e^(itx) dx?
**R:** «Se f(x) è una **funzione pari** (i.e. **f(x) = f(-x)**) la sua trasformata di Fourier ammette le seguenti rappresentazioni equivalenti a quelle della definizione 8: ℱ{f(x)}(t) = ∫_{-∞}^{+∞} f(x) e^(itx) dx e ℱ{f(x)}(t) = ∫_{-∞}^{+∞} f(x) cos(tx) dx **+** i ∫_{-∞}^{+∞} f(x) sin(tx) dx (10)» (slide 10; transcript [00:08:02]). ⚠️ Rispetto alla (9) cambiano i segni: e^(itx) invece di e^(-itx), «+ i» invece di «- i».
**Opzione:** Per una funzione pari, cioè tale che f(x) = f(-x).
**Distrattori:**
- Per una funzione dispari, cioè tale che f(x) = -f(-x).
- Qualora non esistano tutti i momenti della relativa distribuzione di probabilità.
- Che la funzione caratteristica esiste sempre.

**D:** Mediante quale equazione può essere definita la delta di Dirac, e con che cosa coincide il suo lato destro?
**R:** «La funzione delta di Dirac può anche essere definita mediante la seguente equazione: **2π · δ(t) = ∫_{-∞}^{+∞} e^(itx) dx**, dove il lato destro coincide con la definizione della **trasformata di Fourier per la funzione f(x) = 1**» (slide 10; transcript [00:08:47]–[00:09:39]). Per il docente è un importante teorema che mette in relazione la delta di Dirac con la trasformata di Fourier.
**Opzione:** 2π · δ(t) = ∫_{-∞}^{+∞} e^(itx) dx, dove il lato destro coincide con la trasformata di Fourier per la funzione f(x) = 1.
**Distrattori:**
- π · δ(t) = ∫_{-∞}^{+∞} e^(itx) dx, dove il lato destro coincide con la trasformata di Fourier per la funzione f(x) = 1.
- ℱ{f(x)}(t) = ∫_{-∞}^{+∞} f(x) e^(-itx) dx, dove i è il numero immaginario.
- ℱ{f(x)}(t) = ∫_{-∞}^{+∞} f(x) cos(tx) dx - i ∫_{-∞}^{+∞} f(x) sin(tx) dx, con dominio l'insieme dei t ∈ ℂ tali che l'integrale converge.

**D:** ⚠️ Quali sono, nell'ordine, le tre proprietà che definiscono una σ-algebra ℳ su un insieme X?
**R:** «Dato un insieme X, dicesi **σ-algebra** una collezione ℳ **non vuota** di sottoinsiemi di X che gode delle seguenti proprietà: 1) l'insieme vuoto **∅ ∈ ℳ**; 2) se **E ∈ ℳ allora E^c ∈ ℳ**; 3) se **{E_i}_{i∈ℕ} ∈ ℳ e A = ⋃_{i=1}^{∞} E_i allora A ∈ ℳ**» (slide 11; transcript [00:09:39]–[00:11:17]). «La proprietà sub 3) equivale a dire che la σ-algebra ℳ è **chiusa rispetto all'unione numerabile** di insiemi ad essa appartenenti» (slide 11).
**Opzione:** Una collezione ℳ non vuota di sottoinsiemi di X tale che: ∅ ∈ ℳ; se E ∈ ℳ allora E^c ∈ ℳ; se {E_i}_{i∈ℕ} ∈ ℳ e A = ⋃_{i=1}^{∞} E_i allora A ∈ ℳ.
**Distrattori:**
- Una collezione ℳ non vuota di sottoinsiemi di X tale che: ∅ ∈ ℳ; se E ∈ ℳ allora E^c ∉ ℳ; se {E_i}_{i∈ℕ} ∈ ℳ e A = ⋃_{i=1}^{∞} E_i allora A ∈ ℳ.
- Una funzione non negativa P: ℳ → [0,1] tale che P(∅) = 0, P(⋃_{i=1}^{∞} E_i) = ∑_{i=1}^{∞} P(E_i) per ogni successione di insiemi disuniti a coppie, e P(X) = 1.
- È la σ-algebra generata dai sottoinsiemi aperti di ℝ, e si denota come 𝔹(ℝ) o equivalentemente come 𝔹.

**D:** A che cosa equivale la proprietà sub 3) della definizione di σ-algebra?
**R:** «La proprietà sub 3) equivale a dire che la σ-algebra ℳ è **chiusa rispetto all'unione numerabile** di insiemi ad essa appartenenti» (slide 11; transcript [00:10:36]). La proprietà 3) è: se {E_i}_{i∈ℕ} ∈ ℳ e A = ⋃_{i=1}^{∞} E_i, allora A ∈ ℳ.
**Opzione:** A dire che la σ-algebra ℳ è chiusa rispetto all'unione numerabile di insiemi ad essa appartenenti.
**Distrattori:**
- A dire che la σ-algebra ℳ è chiusa rispetto al complemento degli insiemi ad essa appartenenti.
- Per una funzione pari, cioè tale che f(x) = f(-x).
- Per il primo momento, μ_1 = μ̄_1, ed entrambi coincidono col valore atteso o media della variabile aleatoria.

**D:** ⚠️ Come si chiamano la coppia (X, ℳ), formata da un insieme e dalla sua σ-algebra, e la tripla (X, ℳ, P)?
**R:** «Un insieme X e la sua σ-algebra si definiscono **spazio misurabile** e si denotano con la coppia (X, ℳ)» (slide 11; transcript [00:11:17]). «Sia (X, ℳ) uno spazio misurabile e sia P una misura di probabilità su esso definita. Allora la tripla (X, ℳ, P) è detta **spazio di probabilità**» (slide 12; transcript [00:13:57]).
**Opzione:** La coppia (X, ℳ) è uno spazio misurabile; la tripla (X, ℳ, P), con P misura di probabilità, è uno spazio di probabilità.
**Distrattori:**
- La coppia (X, ℳ) è uno spazio di probabilità; la tripla (X, ℳ, P), con P misura di probabilità, è uno spazio misurabile.
- Una funzione X: Ω → ℝ che ad ogni evento elementare ω ∈ Ω associa un valore X(ω) di ℝ.
- Una funzione non negativa P: ℳ → [0,1] tale che P(∅) = 0, P(⋃_{i=1}^{∞} E_i) = ∑_{i=1}^{∞} P(E_i) per ogni successione di insiemi disuniti a coppie, e P(X) = 1.

**D:** Come si definisce la σ-algebra di Borel di ℝ, e come si denota?
**R:** «La σ-algebra **generata dai sottoinsiemi aperti di ℝ** è detta **σ-algebra di Borel di ℝ** e si denota come **𝔹(ℝ)** o equivalentemente come **𝔹**» (slide 11; transcript [00:11:39]).
**Opzione:** È la σ-algebra generata dai sottoinsiemi aperti di ℝ, e si denota come 𝔹(ℝ) o equivalentemente come 𝔹.
**Distrattori:**
- È la σ-algebra generata dai sottoinsiemi numerabili di ℝ, e si denota come 𝔹(ℝ) o equivalentemente come 𝔹.
- La coppia (X, ℳ) è uno spazio misurabile; la tripla (X, ℳ, P), con P misura di probabilità, è uno spazio di probabilità.
- P_X(E) ≐ P(X^(-1)(E)) ∀E ∈ 𝔹 è una misura di probabilità su (ℝ, 𝔹), e la tripla (ℝ, 𝔹, P_X) individua uno spazio di probabilità.

**D:** ⚠️ Come si definisce la misura di probabilità P sullo spazio misurabile (X, ℳ), secondo la lezione 01?
**R:** «Dato lo spazio misurabile (X, ℳ), si definisce **misura di probabilità** una funzione **non negativa P: ℳ → [0,1]** tale che: 1) **P(∅) = 0**; 2) se {E_i}_{i∈ℕ} ∈ ℳ è una successione di **insiemi disuniti a coppie**, i.e. E_i ∩ E_j = ∅ ∀i ≠ j; i, j = 1, 2, ..., allora **P(⋃_{i=1}^{∞} E_i) = ∑_{i=1}^{∞} P(E_i)** (11), ossia P è una funzione **numerabilmente additiva** sulla σ-algebra ℳ; 3) **P(X) = 1**» (slide 12; transcript [00:12:14]–[00:13:57]).
**Opzione:** Una funzione non negativa P: ℳ → [0,1] tale che P(∅) = 0, P(⋃_{i=1}^{∞} E_i) = ∑_{i=1}^{∞} P(E_i) per ogni successione di insiemi disuniti a coppie, e P(X) = 1.
**Distrattori:**
- Una funzione non negativa P: ℳ → [0,1] tale che P(∅) = 0, P(⋃_{i=1}^{∞} E_i) = ∑_{i=1}^{∞} P(E_i) per ogni successione di insiemi di ℳ, anche non disuniti, e P(X) = 1.
- Una collezione ℳ non vuota di sottoinsiemi di X tale che: ∅ ∈ ℳ; se E ∈ ℳ allora E^c ∈ ℳ; se {E_i}_{i∈ℕ} ∈ ℳ e A = ⋃_{i=1}^{∞} E_i allora A ∈ ℳ.
- Una funzione X: Ω → ℝ che ad ogni evento elementare ω ∈ Ω associa un valore X(ω) di ℝ.

**D:** ⚠️ Come si definisce una variabile casuale o aleatoria sullo spazio di probabilità (Ω, ℑ, P)?
**R:** «Si definisce **variabile casuale o aleatoria** sullo spazio di probabilità (Ω, ℑ, P) una funzione X che realizza la seguente mappatura: **X: Ω → ℝ**, vale a dire che **ad ogni evento elementare ω ∈ Ω associa un valore X(ω) di ℝ**» (slide 13; transcript [00:14:17]).
**Opzione:** Una funzione X: Ω → ℝ che ad ogni evento elementare ω ∈ Ω associa un valore X(ω) di ℝ.
**Distrattori:**
- Una funzione X: ℝ → Ω che ad ogni valore x di ℝ associa un evento elementare ω ∈ Ω.
- P_X(E) ≐ P(X^(-1)(E)) ∀E ∈ 𝔹 è una misura di probabilità su (ℝ, 𝔹), e la tripla (ℝ, 𝔹, P_X) individua uno spazio di probabilità.
- La coppia (X, ℳ) è uno spazio misurabile; la tripla (X, ℳ, P), con P misura di probabilità, è uno spazio di probabilità.

**D:** Come è definita la funzione P_X indotta da una variabile aleatoria X: Ω → ℝ, e che cosa individua la tripla (ℝ, 𝔹, P_X)?
**R:** «Allora la funzione P_X che ad ogni sottoinsieme della σ-algebra di Borel associa un valore compreso tra zero e uno, ossia **P_X: 𝔹 → [0,1]**, e che è definita come **P_X(E) ≐ P(X^(-1)(E)), ∀E ∈ 𝔹** (12), è una misura di probabilità sullo spazio misurabile **(ℝ, 𝔹)** e pertanto la tripla **(ℝ, 𝔹, P_X)** individua uno **spazio di probabilità**» (slide 13; transcript [00:14:49]–[00:16:20]). Per il docente X «va a rimappare» Ω su ℝ, ed è quello che fa ogni variabile casuale o aleatoria.
**Opzione:** P_X(E) ≐ P(X^(-1)(E)) ∀E ∈ 𝔹 è una misura di probabilità su (ℝ, 𝔹), e la tripla (ℝ, 𝔹, P_X) individua uno spazio di probabilità.
**Distrattori:**
- P_X(E) ≐ P(X^(-1)(E)) ∀E ∈ 𝔹 è una misura di probabilità su (Ω, ℑ), e la tripla (Ω, ℑ, P_X) individua uno spazio di probabilità.
- Una collezione ℳ non vuota di sottoinsiemi di X tale che: ∅ ∈ ℳ; se E ∈ ℳ allora E^c ∈ ℳ; se {E_i}_{i∈ℕ} ∈ ℳ e A = ⋃_{i=1}^{∞} E_i allora A ∈ ℳ.
- Se esiste un insieme numerabile E = {x_1, x_2, ..., x_j, ...} tale che P_X(E) = 1.

**D:** Come si chiama la misura di probabilità P_X definita sullo spazio misurabile (ℝ, 𝔹)?
**R:** «La misura di probabilità P_X definita sullo spazio misurabile (ℝ, 𝔹) è detta **funzione di distribuzione di probabilità** o anche solo **distribuzione di probabilità** della variabile aleatoria X» (slide 14; transcript [00:16:20]).
**Opzione:** Funzione di distribuzione di probabilità, o anche solo distribuzione di probabilità, della variabile aleatoria X.
**Distrattori:**
- Funzione di densità di probabilità, o anche solo densità di probabilità, della variabile aleatoria X.
- Che la funzione caratteristica esiste sempre.
- È la σ-algebra generata dai sottoinsiemi aperti di ℝ, e si denota come 𝔹(ℝ) o equivalentemente come 𝔹.

**D:** ⚠️ Quando una variabile aleatoria X: (Ω, ℑ, P) → (ℝ, 𝔹, P_X) è detta discreta?
**R:** «È detta **discreta** se tale è la sua funzione di distribuzione di probabilità P_X, i.e. se esiste un **insieme numerabile E = {x_1, x_2, ..., x_j, ...}** tale che **P_X(E) = 1**» (slide 14). ⚠️ Il transcript dice «insieme **misurabile**» ([00:16:44]), con ogni probabilità un errore di trascrizione: vale la slide, «numerabile». Notazione: P_X(X = x_i) = p_X(x_i), «per indicare la probabilità che X assuma il valore x_i, i = 1, 2, ..., j, ...» (slide 14; transcript [00:17:14]–[00:18:09]).
**Opzione:** Se esiste un insieme numerabile E = {x_1, x_2, ..., x_j, ...} tale che P_X(E) = 1.
**Distrattori:**
- Se esiste un insieme numerabile E = {x_1, x_2, ..., x_j, ...} tale che P_X(E) = 0.
- Se esiste una funzione f_{P_X}, detta funzione di densità di probabilità di X, tale che P_X(E) = ∫_E f_{P_X}(x) dx per ogni E ∈ 𝔹.
- Funzione di distribuzione di probabilità, o anche solo distribuzione di probabilità, della variabile aleatoria X.

**D:** Quando una variabile aleatoria X: (Ω, ℑ, P) → (ℝ, 𝔹, P_X) è detta continua?
**R:** «È detta **continua** se tale è la sua funzione di distribuzione di probabilità P_X, i.e. se esiste una funzione f_{P_X} detta **funzione di densità di probabilità di X** tale che ∀E ∈ 𝔹: **P_X(E) = ∫_E f_{P_X}(x) dx** (13)» (slide 15; transcript [00:18:09]). La densità «verrà anche denotata, per semplicità, come **f_X**» (slide 15; transcript [00:18:47]).
**Opzione:** Se esiste una funzione f_{P_X}, detta funzione di densità di probabilità di X, tale che P_X(E) = ∫_E f_{P_X}(x) dx per ogni E ∈ 𝔹.
**Distrattori:**
- Se esiste una funzione f_{P_X}, detta funzione di densità di probabilità di X, tale che P_X(E) = ∑_{x∈E} f_{P_X}(x) per ogni E ∈ 𝔹.
- Se esiste un insieme numerabile E = {x_1, x_2, ..., x_j, ...} tale che P_X(E) = 1.
- Funzione di distribuzione di probabilità, o anche solo distribuzione di probabilità, della variabile aleatoria X.

**D:** Qual è la densità di Y = g(X), se X è una variabile aleatoria continua con densità f_X e g(·) una funzione monotona (teorema (14))?
**R:** «Sia X una variabile aleatoria continua con funzione di densità di probabilità f_X e sia g(·) una **funzione monotona** che trasforma X nella variabile aleatoria continua Y. Allora la funzione di densità di probabilità di Y è data dalla seguente formula: **f_Y(y) = f_X(g^(-1)(y)) · |1/g'(g^(-1)(y))|** (14)» (slide 16; transcript [00:18:59]–[00:19:52]). Per il docente è una formula molto importante, perché consente di derivare una densità nota un'altra, a condizione che g sia monotona.
**Opzione:** f_Y(y) = f_X(g^(-1)(y)) · |1/g'(g^(-1)(y))|
**Distrattori:**
- f_Y(y) = f_X(g^(-1)(y)) · |g'(g^(-1)(y))|
- μ_r = E(X^r), con r numero intero positivo.
- M_X(t) = e^((tσ)²/2 + μt)

**D:** ⚠️ Come diventa la formula (14) della densità di Y = g(X) qualora g sia una funzione monotona crescente?
**R:** «Qualora g sia una funzione **monotona crescente** la 14 diventa: **f_Y(y) = f_X(g^(-1)(y)) · 1/g'(g^(-1)(y))** (15)» (slide 16). Per il docente «possiamo addirittura disfarci del simbolo del valore assoluto» ([00:19:52]).
**Opzione:** Ci si può disfare del simbolo del valore assoluto: f_Y(y) = f_X(g^(-1)(y)) · 1/g'(g^(-1)(y)).
**Distrattori:**
- Ci si può disfare del simbolo del valore assoluto e del reciproco: f_Y(y) = f_X(g^(-1)(y)) · g'(g^(-1)(y)).
- C_X(t) = M_X(it): la funzione caratteristica è la generatrice dei momenti valutata in it.
- Alla derivata prima di M_X(t) valutata in t = 0: E(X) = μ = d/dt M_X(t)|_{t=0} = M'_X(0).

**D:** Nell'esempio della lezione 01, qual è la densità di Y = e^X se X ha densità f_X(x) = 1/(σ√(2π)) · e^(-(x - μ)²/(2σ²))?
**R:** Si osserva che **X = ln(Y)**; «utilizzando la 15 dato che la funzione esponenziale è **monotona crescente**» si ha f_Y(y) = f_X(ln(y)) · 1/g'(ln(y)), e quindi **f_Y(y) = 1/(σ√(2π)) · e^(-(ln(y) - μ)²/(2σ²)) · 1/e^(ln(y)) = 1/(y · σ√(2π)) · e^(-(ln(y) - μ)²/(2σ²))** (slide 17; transcript [00:20:32]–[00:21:58]). ⚠️ Il transcript storpia le formule («sigma radice di y» per σ√(2π)): vale la slide, che non dà un nome alla densità (vedi la nota).
**Opzione:** f_Y(y) = 1/(y · σ√(2π)) · e^(-(ln(y) - μ)²/(2σ²))
**Distrattori:**
- f_Y(y) = y/(σ√(2π)) · e^(-(ln(y) - μ)²/(2σ²))
- M_X(t) = e^((tσ)²/2 + μt)
- μ_r = E(X^r), con r numero intero positivo.

**D:** ⚠️ Come si definisce il valore atteso o media E(X) di una variabile casuale X, nel caso discreto e in quello continuo?
**R:** «Si definisce **valore atteso** o **media** della variabile casuale X e si denota con **E(X)** o anche con **μ** il numero definito come: **E(X) = ∑_x x p_X(x)** (16) se X è **discreta**, e come: **E(X) = ∫_{-∞}^{+∞} x f_X(x) dx** (17) se X è **continua**» (slide 18; transcript [00:21:58]–[00:22:57]).
**Opzione:** E(X) = ∑_x x p_X(x) se X è discreta, ed E(X) = ∫_{-∞}^{+∞} x f_X(x) dx se X è continua.
**Distrattori:**
- E(X) = ∑_x x p_X(x) se X è continua, ed E(X) = ∫_{-∞}^{+∞} x f_X(x) dx se X è discreta.
- Ci si può disfare del simbolo del valore assoluto: f_Y(y) = f_X(g^(-1)(y)) · 1/g'(g^(-1)(y)).

**D:** Quanto vale il valore atteso di Y = g(X), se X è una variabile casuale con funzione di probabilità f_X(x)?
**R:** «Se X è una variabile casuale con funzione di probabilità f_X(x) e Y = g(X), allora **E(Y) = ∑_y y p_Y(y) = ∑_x g(x) p_X(x)** se X è discreta, e **E(Y) = ∫_{-∞}^{+∞} y f_Y(y) dy = ∫_{-∞}^{+∞} g(x) f_X(x) dx** se X è continua» (slide 18; transcript [00:22:57]–[00:23:27]). Per il docente la proposizione collega Y alla variabile casuale X e alla sua densità attraverso la relazione funzionale g.
**Opzione:** E(Y) = ∑_y y p_Y(y) = ∑_x g(x) p_X(x) se X è discreta, ed E(Y) = ∫_{-∞}^{+∞} y f_Y(y) dy = ∫_{-∞}^{+∞} g(x) f_X(x) dx se X è continua.
**Distrattori:**
- E(Y) = ∑_y y p_Y(y) = g(∑_x x p_X(x)) se X è discreta, ed E(Y) = ∫_{-∞}^{+∞} y f_Y(y) dy = g(∫_{-∞}^{+∞} x f_X(x) dx) se X è continua.
- f_Y(y) = f_X(g^(-1)(y)) · |1/g'(g^(-1)(y))|

**D:** ⚠️ Come si definisce l'r-esimo momento non centrato di una variabile casuale X?
**R:** «Sia X una variabile casuale e sia r un **numero intero positivo**. Allora il valore atteso della funzione g(X) = X^r, i.e.: **μ_r = E(X^r)**, è detto **r-esimo momento non centrato di X**» (slide 19; transcript [00:23:27]–[00:24:05]). Per il docente il valore atteso è il primo momento.
**Opzione:** μ_r = E(X^r), con r numero intero positivo.
**Distrattori:**
- μ_r = E[(X - μ)^r], con r numero intero positivo.
- f_Y(y) = 1/(y · σ√(2π)) · e^(-(ln(y) - μ)²/(2σ²))

**D:** ⚠️ Come si definisce l'r-esimo momento centrato di una variabile casuale X con valore atteso μ?
**R:** «Sia X una variabile casuale con valore atteso μ e sia r un numero intero positivo. Allora il valore atteso della funzione g(X) = (X - μ)^r, i.e.: **μ̄_r = E[(X - μ)^r]**, è detto **r-esimo momento centrato di X**» (slide 19; transcript [00:24:05]–[00:24:43]). Il momento è centrato rispetto al valore atteso; il docente legge μ̄_r come «mu segnato di r».
**Opzione:** μ̄_r = E[(X - μ)^r], con μ valore atteso di X e r numero intero positivo.
**Distrattori:**
- μ̄_r = E(X^r - μ), con μ valore atteso di X e r numero intero positivo.
- f_Y(y) = 1/(y · σ√(2π)) · e^(-(ln(y) - μ)²/(2σ²))
- ℱ{f(x)}(t) = ∫_{-∞}^{+∞} f(x) cos(tx) dx - i ∫_{-∞}^{+∞} f(x) sin(tx) dx, con dominio l'insieme dei t ∈ ℂ tali che l'integrale converge.

**D:** ⚠️ Per quale momento di una variabile aleatoria X la nota della slide 19 afferma l'identità tra momento centrato e momento non centrato, e con che cosa coincidono?
**R:** «Per il **primo momento** di una data variabile aleatoria X vi è identità tra la definizione di momento centrato e quella di momento non centrato, i.e. **μ_1 = μ̄_1**, ed entrambi **coincidono col valore atteso o media** della medesima variabile aleatoria» (slide 19). Il docente dice lo stesso: «momento centrato e momento non centrato sono assolutamente coincidenti» ([00:24:43]). ⚠️ È la nota della slide: la nota della lezione 01 spiega, in un blocco ℹ️, perché il calcolo dà un altro risultato. All'esame vale la slide.
**Opzione:** Per il primo momento, μ_1 = μ̄_1, ed entrambi coincidono col valore atteso o media della variabile aleatoria.
**Distrattori:**
- Per il secondo momento, μ_2 = μ̄_2, ed entrambi coincidono col valore atteso o media della variabile aleatoria.
- Qualora non esistano tutti i momenti della relativa distribuzione di probabilità.
- Con l'r-esimo momento non centrato della variabile casuale X: μ_r = d^r/dt^r M_X(t)|_{t=0}.

**D:** Come si definisce la funzione generatrice dei momenti M_X(t) di una variabile casuale X?
**R:** «Data X una variabile casuale e t una **variabile reale**, si definisce **funzione generatrice dei momenti** quella funzione di X denotata con M_X(t), o più sinteticamente con M(t), determinata come il valore atteso della quantità **e^(tX)**: **M_X(t) = E(e^(tX)) = ⟨e^(tX)⟩ = ∑_x e^(tx) p_X(x)** se X è una variabile casuale discreta; **M_X(t) = E(e^(tX)) = ⟨e^(tX)⟩ = ∫_{-∞}^{+∞} e^(tx) f_X(x) dx** se X è una variabile casuale continua» (slide 20; transcript [00:25:36]–[00:26:34]).
**Opzione:** M_X(t) = E(e^(tX)), con t variabile reale: ∑_x e^(tx) p_X(x) se X è discreta, ∫_{-∞}^{+∞} e^(tx) f_X(x) dx se X è continua.
**Distrattori:**
- M_X(t) = E(e^(itX)), con t variabile reale: ∑_x e^(itx) p_X(x) se X è discreta, ∫_{-∞}^{+∞} e^(itx) f_X(x) dx se X è continua.
- E(Y) = ∑_y y p_Y(y) = ∑_x g(x) p_X(x) se X è discreta, ed E(Y) = ∫_{-∞}^{+∞} y f_Y(y) dy = ∫_{-∞}^{+∞} g(x) f_X(x) dx se X è continua.
- Ci si può disfare del simbolo del valore assoluto: f_Y(y) = f_X(g^(-1)(y)) · 1/g'(g^(-1)(y)).

**D:** ⚠️ Qual è la funzione generatrice dei momenti di una variabile aleatoria X con densità f_X(x) = 1/(σ√(2π)) · e^(-(x - μ)²/(2σ²))?
**R:** «Allora la sua funzione generatrice dei momenti è: **M_X(t) = e^((tσ)²/2 + μt)**» (slide 20; transcript [00:26:34]). Per il docente è «un esempio che sarà molto importante nelle trattazioni che seguiranno» ([00:27:02]). ⚠️ Il transcript dice «t sigma al quadrato diviso 2»: sulla slide al quadrato c'è (tσ), cioè t²σ². La slide non dà un nome alla densità (vedi la nota).
**Opzione:** M_X(t) = e^((tσ)²/2 + μt)
**Distrattori:**
- M_X(t) = e^(tσ²/2 + μt)
- f_Y(y) = f_X(g^(-1)(y)) · |1/g'(g^(-1)(y))|
- C_X(t) = E(e^(itX)), con i = √(-1) e t variabile reale: ∑_x e^(itx) p_X(x) se X è discreta, ∫_{-∞}^{+∞} e^(itx) f_X(x) dx se X è continua.

**D:** ⚠️ Quando può non esistere la funzione generatrice dei momenti di una variabile aleatoria X?
**R:** «La funzione generatrice dei momenti di una variabile aleatoria X **può non esistere**, qualora **non esistano tutti i momenti** della relativa distribuzione di probabilità» (slide 20; transcript [00:27:02]). ⚠️ Per il docente la funzione caratteristica, invece, **esiste sempre** ([00:30:14]).
**Opzione:** Qualora non esistano tutti i momenti della relativa distribuzione di probabilità.
**Distrattori:**
- Qualora esistano tutti i momenti della relativa distribuzione di probabilità.
- Per il primo momento, μ_1 = μ̄_1, ed entrambi coincidono col valore atteso o media della variabile aleatoria.
- A dire che la σ-algebra ℳ è chiusa rispetto all'unione numerabile di insiemi ad essa appartenenti.

**D:** ⚠️ Che cosa ricorda il docente della lezione 01 sull'esistenza della funzione caratteristica?
**R:** «È importante anche ricordare, e lo vedremo nella prossima lezione, che la funzione caratteristica **esiste sempre**» ([00:30:14]). Non è scritto sulle slide; il docente annuncia che la funzione caratteristica e i momenti di ordine superiore al primo torneranno nella lezione successiva. ⚠️ La funzione generatrice dei momenti, invece, **può non esistere** (slide 20).
**Opzione:** Che la funzione caratteristica esiste sempre.
**Distrattori:**
- Che la funzione caratteristica può non esistere.
- A dire che la σ-algebra ℳ è chiusa rispetto all'unione numerabile di insiemi ad essa appartenenti.
- Se esiste una funzione f_{P_X}, detta funzione di densità di probabilità di X, tale che P_X(E) = ∫_E f_{P_X}(x) dx per ogni E ∈ 𝔹.

**D:** ⚠️ Con che cosa coincide la derivata r-esima di M_X(t) valutata in t = 0 (teorema (18))?
**R:** «La derivata r-esima di M_X(t) valutata in t = 0 coincide con **l'r-esimo momento non centrato** della variabile casuale X, i.e.: **μ_r = d^r/dt^r M_X(t)|_{t=0}** (18)» (slide 21; transcript [00:27:36]–[00:27:55]). La dimostrazione sviluppa e^(tX) in serie di Maclaurin e ne calcola il valore atteso: M_X(t) = 1 + tμ_1 + t²/2! μ_2 + t³/3! μ_3 + t^4/4! μ_4 + o(t^5), dove o(t^5) è l'infinitesimo di ordine superiore rispetto a t^5 (slide 21; transcript [00:27:55]–[00:29:00]). Per il docente, «come dice il nome stesso», la funzione generatrice consente di calcolare i momenti della variabile casuale e quindi della sua distribuzione di probabilità.
**Opzione:** Con l'r-esimo momento non centrato della variabile casuale X: μ_r = d^r/dt^r M_X(t)|_{t=0}.
**Distrattori:**
- Con l'r-esimo momento centrato della variabile casuale X: μ̄_r = d^r/dt^r M_X(t)|_{t=0}.
- μ̄_r = E[(X - μ)^r], con μ valore atteso di X e r numero intero positivo.
- C_X(t) = E(e^(itX)), con i = √(-1) e t variabile reale: ∑_x e^(itx) p_X(x) se X è discreta, ∫_{-∞}^{+∞} e^(itx) f_X(x) dx se X è continua.

**D:** ⚠️ A che cosa corrisponde il valore atteso di una variabile casuale X, in termini della funzione generatrice dei momenti (corollario (20))?
**R:** «Il valore atteso di una variabile casuale X corrisponde alla **derivata prima di M_X(t) valutata in t = 0**, i.e.: **E(X) = μ = d/dt M_X(t)|_{t=0} = M'_X(0)** (20)» (slide 22; transcript [00:29:00]). Per il docente «e così dicendo gli altri momenti».
**Opzione:** Alla derivata prima di M_X(t) valutata in t = 0: E(X) = μ = d/dt M_X(t)|_{t=0} = M'_X(0).
**Distrattori:**
- Al valore di M_X(t) in t = 0: E(X) = μ = M_X(0).
- C_X(t) = M_X(it): la funzione caratteristica è la generatrice dei momenti valutata in it.

**D:** Come si definisce la funzione caratteristica C_X(t) di una variabile casuale X?
**R:** «Date una variabile casuale X e una variabile reale t, si definisce **funzione caratteristica** quella funzione di X denotata con C_X(t), o più in breve con C(t), determinata come il valore atteso della quantità **e^(itX)**, ove **i = √(-1)**: **C_X(t) = E(e^(itX)) = ∑_x e^(itx) p_X(x)** se X è una variabile casuale discreta; **C_X(t) = E(e^(itX)) = ∫_{-∞}^{+∞} e^(itx) f_X(x) dx** se X è una variabile casuale continua» (slide 23; transcript [00:29:21]–[00:30:14]). Per il docente è la funzione generatrice dei momenti in cui, al posto di e^(tx), c'è l'esponenziale di itx.
**Opzione:** C_X(t) = E(e^(itX)), con i = √(-1) e t variabile reale: ∑_x e^(itx) p_X(x) se X è discreta, ∫_{-∞}^{+∞} e^(itx) f_X(x) dx se X è continua.
**Distrattori:**
- C_X(t) = E(e^(tX)), con t variabile reale: ∑_x e^(tx) p_X(x) se X è discreta, ∫_{-∞}^{+∞} e^(tx) f_X(x) dx se X è continua.
- E(Y) = ∑_y y p_Y(y) = ∑_x g(x) p_X(x) se X è discreta, ed E(Y) = ∫_{-∞}^{+∞} y f_Y(y) dy = ∫_{-∞}^{+∞} g(x) f_X(x) dx se X è continua.
- μ̄_r = E[(X - μ)^r], con μ valore atteso di X e r numero intero positivo.

**D:** ⚠️ Quale relazione vale fra la funzione caratteristica C_X(t) e la funzione generatrice dei momenti M_X(t)?
**R:** «Date una variabile casuale X e una variabile reale t, per la funzione caratteristica di X vale la seguente relazione: **C_X(t) = M_X(it)**» (slide 23). Per il docente la funzione caratteristica «è sempre uguale alla funzione generatrice dei momenti valorizzata in it», e la relazione «deriva dalle definizioni» ([00:29:21]–[00:30:14]).
**Opzione:** C_X(t) = M_X(it): la funzione caratteristica è la generatrice dei momenti valutata in it.
**Distrattori:**
- M_X(t) = C_X(it): la generatrice dei momenti è la funzione caratteristica valutata in it.
- Alla derivata prima di M_X(t) valutata in t = 0: E(X) = μ = d/dt M_X(t)|_{t=0} = M'_X(0).
- Con l'r-esimo momento non centrato della variabile casuale X: μ_r = d^r/dt^r M_X(t)|_{t=0}.

**D:** ⚠️ Qual è stata la base dello sviluppo delle prime forme di cooperazione sociale, secondo il test della lezione 01?
**R:** **La ricerca del cibo.** ⚠️ Non è nei materiali: il test di fine lezione 01 verte su «Le prime forme di cooperazione sociale», argomento estraneo a slide e transcript della lezione; l'abbinamento della piattaforma è stato verificato dall'utente il 2026-11-16 sulla pagina del corso. Chiave della piattaforma, non verificabile sui materiali. Distrattori del test: «il commercio», «la costruzione di abitazioni», «l'arte e la cultura».
**Opzione:** La ricerca del cibo.
**Distrattori:**
- Il commercio.
- La costruzione di abitazioni.
- L'arte e la cultura.

**D:** ⚠️ Qual era la percentuale della dieta derivante dagli alimenti vegetali per i primi Homo, secondo il test della lezione 01?
**R:** **Circa 70% o più.** ⚠️ Non è nei materiali: il test di fine lezione 01 verte su «Le prime forme di cooperazione sociale», argomento estraneo a slide e transcript della lezione; l'abbinamento della piattaforma è stato verificato dall'utente il 2026-11-16 sulla pagina del corso. Chiave della piattaforma, non verificabile sui materiali. Distrattori del test: «circa 30%», «circa 50%», «circa 90%».
**Opzione:** Circa 70% o più.
**Distrattori:**
- Circa 30%.
- Circa 50%.
- Circa 90%.

**D:** ⚠️ Quali erano le armi più letali dei primi cacciatori-raccoglitori, secondo il test della lezione 01?
**R:** **Bastoni di legno appuntiti, mazze e pietre.** ⚠️ Non è nei materiali: il test di fine lezione 01 verte su «Le prime forme di cooperazione sociale», argomento estraneo a slide e transcript della lezione; l'abbinamento della piattaforma è stato verificato dall'utente il 2026-11-16 sulla pagina del corso. Chiave della piattaforma, non verificabile sui materiali. Distrattori del test: «spade e scudi», «arco e frecce», «fucili e pistole».
**Opzione:** Bastoni di legno appuntiti, mazze e pietre.
**Distrattori:**
- Spade e scudi.
- Arco e frecce.
- Fucili e pistole.

**D:** ⚠️ Che cosa caratterizzava l'antica divisione del lavoro tra i primi esseri umani, secondo il test della lezione 01?
**R:** **Divisione sessuale del lavoro e condivisione del cibo.** ⚠️ Non è nei materiali: il test di fine lezione 01 verte su «Le prime forme di cooperazione sociale», argomento estraneo a slide e transcript della lezione; l'abbinamento della piattaforma è stato verificato dall'utente il 2026-11-16 sulla pagina del corso. Chiave della piattaforma, non verificabile sui materiali. Distrattori del test: «specializzazione in mestieri differenti», «divisione basata sull'età», «divisione basata sulle classi sociali».
**Opzione:** Divisione sessuale del lavoro e condivisione del cibo.
**Distrattori:**
- Specializzazione in mestieri differenti.
- Divisione basata sull'età.
- Divisione basata sulle classi sociali.

**D:** ⚠️ Perché la preparazione del cibo era una sfida per i primi membri del genere Homo, secondo il test della lezione 01?
**R:** **Denti piatti e piccoli, poco adatti a masticare la carne.** ⚠️ Non è nei materiali: il test di fine lezione 01 verte su «Le prime forme di cooperazione sociale», argomento estraneo a slide e transcript della lezione; l'abbinamento della piattaforma è stato verificato dall'utente il 2026-11-16 sulla pagina del corso. Chiave della piattaforma, non verificabile sui materiali. Distrattori del test: «mancanza di spezie», «mancanza di utensili da cucina avanzati», «preferenza per cibi crudi».
**Opzione:** Denti piatti e piccoli, poco adatti a masticare la carne.
**Distrattori:**
- Mancanza di spezie.
- Mancanza di utensili da cucina avanzati.
- Preferenza per cibi crudi.

## Lezione 02 — Nozioni introduttive 2

**D:** ⚠️ Come si definisce la varianza di X, e con quali simboli si denota, secondo la lezione 02?
**R:** «Il secondo momento centrato di X, i.e. E[(X - μ)²] è anche definito **varianza** e si denota con **σ_X²** o, semplicemente, con **σ²** o alternativamente con **Var(X)**» (slide 2). Per il docente μ è «la media» ([00:00:47]). ⚠️ σ_X e StDev(X) sono invece i simboli della deviazione standard (slide 4).
**Opzione:** Il secondo momento centrato di X, E[(X - μ)²]; si denota con σ_X², o semplicemente con σ², o con Var(X).
**Distrattori:**
- Il secondo momento centrato di X, E[(X - μ)²]; si denota con σ_X, o semplicemente con σ, o con StDev(X).
- ρ(X,Y) = cov(X,Y)/(σ_X σ_Y), denotato anche ρ_XY
- Una generica variabile aleatoria X la cui funzione di densità di probabilità è non nota e specificata sulla base di uno spazio parametrico Λ rappresentativo delle caratteristiche della popolazione.

**D:** ⚠️ Che segno ha la varianza di una variabile aleatoria, secondo la lezione 02?
**R:** «La varianza di una variabile aleatoria è **sempre** una quantità **non negativa**» (slide 2). Per il docente «deriva dalla definizione, ma meglio annotarlo» ([00:01:15]).
**Opzione:** La varianza di una variabile aleatoria è sempre una quantità non negativa.
**Distrattori:**
- La varianza di una variabile aleatoria è sempre una quantità non positiva.
- Una condizione sufficiente a garantire la consistenza rispetto ad α.
- Se X ≥ 0 q.o., allora E(X|Y) ≥ 0.

**D:** ⚠️ Come si calcola la varianza con i momenti μ_1 e μ_2, secondo la formula (21) della lezione 02?
**R:** «Il calcolo della varianza può avvenire anche tramite la seguente relazione: **σ² = μ_2 - (μ_1)²** (21) o, equivalentemente come: **σ² = μ_2 - (μ̄_1)²**» (slide 3). Nella notazione della lezione 01 μ_r = E(X^r) è il momento r-esimo non centrato e μ̄_r = E[(X - μ)^r] quello centrato, e per il primo momento μ̄_1 = μ_1 (deck 01, slide 19): per il docente le due versioni «sono da ritenersi equivalenti» ([00:01:37]–[00:01:58]).
**Opzione:** σ² = μ_2 - (μ_1)², o equivalentemente σ² = μ_2 - (μ̄_1)²
**Distrattori:**
- σ² = μ_2 + (μ_1)², o equivalentemente σ² = μ_2 + (μ̄_1)²
- cov(αX,Y) = αcov(X,Y)
- E[E(X|Y)] = E(X)

**D:** ⚠️ Come si esprime la varianza con la funzione generatrice dei momenti M_X(t), secondo la lezione 02?
**R:** «La varianza di una variabile casuale X ha la seguente relazione con la funzione generatrice dei momenti di X: **Var(X) = σ² = M''_X(0) - [M'_X(0)]²**» (22, slide 3): la derivata **seconda** in 0 meno il **quadrato** della derivata **prima** in 0. Per il docente deriva dalle definizioni di varianza, media e funzione generatrice dei momenti ([00:01:58]–[00:02:26]).
**Opzione:** Var(X) = σ² = M''_X(0) - [M'_X(0)]²
**Distrattori:**
- Var(X) = σ² = M'_X(0) - [M''_X(0)]²
- cov(X,Y) = E(X·Y) - μ_X·μ_Y
- E(aX_1 + bX_2|Y) = aE(X_1|Y) + bE(X_2|Y)

**D:** ⚠️ Come si definisce la deviazione standard di X, e con quali simboli si denota, secondo la lezione 02?
**R:** «Si definisce **deviazione standard** di una v.a. X e si denota con **σ_X** o con **StDev(X)** la **radice quadrata della varianza** di X, i.e.: σ_X = StDev(X) = √Var(X) = √E[(X - μ)²]» (23, slide 4). Il docente: «la radice quadrata della varianza» ([00:02:39]–[00:02:52]).
**Opzione:** La radice quadrata della varianza di X: σ_X = StDev(X) = √Var(X) = √E[(X - μ)²].
**Distrattori:**
- Il quadrato della varianza di X: σ_X = StDev(X) = [Var(X)]² = {E[(X - μ)²]}².
- Del momento primo della popolazione: E((1/N)∑_{i=1}^N x_i) = μ_1.
- L'insieme X̂ = (x_1, …, x_N) di N determinazioni indipendenti e identicamente distribuite (i.i.d.) della variabile aleatoria X.

**D:** ⚠️ Che media e che varianza ha una variabile aleatoria standardizzata, secondo la lezione 02?
**R:** «Sia Y una variabile aleatoria standardizzata essa ha **media nulla** e **varianza unitaria**» (slide 5). Dalla dimostrazione: E(Y) = [E(X) - E(X)]/σ_X = 0 e Var(Y) = Var(X - E(X))/σ_X² = Var(X)/Var(X) = 1 (slide 5; [00:03:40]–[00:04:21]). ⚠️ σ_X² compare solo nella varianza di Y: la forma standardizzata divide per σ_X (domanda 4 del test).
**Opzione:** Media nulla e varianza unitaria.
**Distrattori:**
- Media unitaria e varianza nulla.
- cov(X,X) = Var(X) e ρ(X,X) = 1
- E(X) = P(A)

**D:** ⚠️ Quanto valgono la covarianza e la correlazione di una variabile aleatoria X con se stessa, secondo la lezione 02?
**R:** «La covarianza di una variabile aleatoria X con se stessa è uguale alla sua varianza, i.e.: **cov(X,X) = Var(X)**» (slide 6); «La correlazione di una variabile aleatoria X con se stessa è pari a 1, i.e.: **ρ(X,X) = 1**» (27, slide 8). Il docente lo dice della covarianza a [00:04:46]; su ρ(X,X) il transcript si interrompe, «è pari evidentemente» ([00:06:26]).
**Opzione:** cov(X,X) = Var(X) e ρ(X,X) = 1
**Distrattori:**
- cov(X,X) = 1 e ρ(X,X) = Var(X)
- Var(X + α) = Var(X) e cov(X + α,Y) = cov(X,Y)
- E(X|Y) = E(X) e E(c|Y) = c

**D:** ⚠️ In quale altra forma si può esprimere la covarianza tra X e Y, secondo la lezione 02?
**R:** «La covarianza tra le due variabili aleatorie X e Y può essere espressa anche come segue: **cov(X,Y) = E(X·Y) - μ_X·μ_Y**» (slide 7). Nella dimostrazione, «considerando che μ_X e μ_Y sono costanti e pertanto possono essere portati fuori rispetto all'operatore valore atteso», si arriva a E(X·Y) - 2μ_X·μ_Y + μ_X·μ_Y = E(X·Y) - μ_X·μ_Y (slide 7; [00:04:56]–[00:05:55]).
**Opzione:** cov(X,Y) = E(X·Y) - μ_X·μ_Y
**Distrattori:**
- cov(X,Y) = E(X·Y) - 2μ_X·μ_Y
- Var(X) = σ² = M''_X(0) - [M'_X(0)]²
- θ = (1/N)∑_{i=1}^N x_i

**D:** ⚠️ Come si definisce il coefficiente di correlazione tra X e Y, e come si denota, secondo la lezione 02?
**R:** «Date due variabili aleatorie X e Y, si definisce **(coefficiente di) correlazione** tra X e Y e si denota con ρ(X,Y) o, equivalentemente, con ρ_XY, la quantità: **ρ(X,Y) = cov(X,Y)/(σ_X σ_Y)**» (26, slide 8). Il docente: «il rapporto tra la covarianza e la moltiplicazione delle due deviazioni standard» ([00:05:55]–[00:06:26]).
**Opzione:** ρ(X,Y) = cov(X,Y)/(σ_X σ_Y), denotato anche ρ_XY
**Distrattori:**
- ρ(X,Y) = cov(X,Y)/(σ_X² σ_Y²), denotato anche ρ_XY
- σ² = μ_2 - (μ_1)², o equivalentemente σ² = μ_2 - (μ̄_1)²
- Se W ≜ h(Y) è una variabile aleatoria funzione di Y, allora E[X·W|Y] = W·E(X|Y).

**D:** ⚠️ Se X = 𝟙_A, cioè la funzione indicatrice dell'insieme A, quanto vale E(X), secondo la lezione 02?
**R:** «se X = 𝟙_A, allora: **E(X) = P(A)**» (slide 9, prima proprietà). Il docente: «se x è la index function di A, allora il valore atteso di x è uguale alla probabilità di A» ([00:06:51]). La funzione indicatrice è definita nella lezione 01.
**Opzione:** E(X) = P(A)
**Distrattori:**
- E(X) = 1 - P(A)
- cov(αX,Y) = αcov(X,Y)
- cov(X,X) = Var(X) e ρ(X,X) = 1

**D:** ⚠️ Se Z = aX, quanto valgono E(Z) e Var(Z), secondo la lezione 02?
**R:** «se Z = aX, allora: **E(Z) = aE(X)** e **Var(Z) = a²Var(X)**» (slide 9, terza proprietà; [00:07:31]). Lo scalare esce dal valore atteso così com'è, dalla varianza **al quadrato**.
**Opzione:** E(Z) = aE(X) e Var(Z) = a²Var(X)
**Distrattori:**
- E(Z) = aE(X) e Var(Z) = aVar(X)
- Var(X + α) = Var(X) e cov(X + α,Y) = cov(X,Y)
- E(aX_1 + bX_2|Y) = aE(X_1|Y) + bE(X_2|Y)

**D:** ⚠️ Che cosa vale per il valore atteso del prodotto, la covarianza e la varianza della somma se X e Y sono indipendenti, secondo la lezione 02?
**R:** «se X e Y sono due variabili casuali tra loro indipendenti, allora: **E(X·Y) = E(X)·E(Y)** ossia **cov(X,Y) = 0** e **Var(X + Y) = Var(X) + Var(Y)**» (slide 10, prima proprietà). Per il docente la varianza della somma «perde l'elemento di covarianza» ([00:07:55]–[00:08:17]). ⚠️ La regola del prodotto vale per i valori attesi, non per le varianze.
**Opzione:** E(X·Y) = E(X)·E(Y), ossia cov(X,Y) = 0, e Var(X + Y) = Var(X) + Var(Y)
**Distrattori:**
- E(X·Y) = E(X)·E(Y), ossia cov(X,Y) = 0, e Var(X + Y) = Var(X)·Var(Y)
- E(Z) = aE(X) e Var(Z) = a²Var(X)
- ρ(X,Y) = cov(X,Y)/(σ_X σ_Y), denotato anche ρ_XY

**D:** ⚠️ Se α è uno scalare reale, quanto vale cov(αX,Y), secondo la lezione 02?
**R:** «se X e Y sono due variabili casuali e α è uno scalare appartenente ad ℝ vale la seguente uguaglianza: **cov(αX,Y) = αcov(X,Y)**» (28, slide 10). Il docente: «alfa come scalare può essere portato fuori» ([00:08:17]). ⚠️ Dalla varianza lo scalare esce al quadrato, Var(aX) = a²Var(X) (slide 9); dalla covarianza esce così com'è.
**Opzione:** cov(αX,Y) = αcov(X,Y)
**Distrattori:**
- cov(αX,Y) = α²cov(X,Y)
- cov(X,Y) = E(X·Y) - μ_X·μ_Y
- E(X) = P(A)

**D:** ⚠️ Se α è uno scalare reale, quanto valgono Var(X + α) e cov(X + α,Y), secondo la lezione 02?
**R:** «se X e Y sono due variabili casuali e α è uno scalare appartenente ad ℝ valgono le seguenti uguaglianze: **Var(X + α) = Var(X)** (29) e **cov(X + α,Y) = cov(X,Y)** (30)» (slide 10). Il docente: «lo scalare scompare, così come nella covarianza scompare» ([00:08:35]–[00:09:01]).
**Opzione:** Var(X + α) = Var(X) e cov(X + α,Y) = cov(X,Y)
**Distrattori:**
- Var(X + α) = Var(X) + α e cov(X + α,Y) = cov(X,Y) + α
- E(X·Y) = E(X)·E(Y), ossia cov(X,Y) = 0, e Var(X + Y) = Var(X) + Var(Y)
- E[E(X|Y)] = E(X)

**D:** ⚠️ Di quali tre proprietà gode il coefficiente di correlazione tra X e Y, secondo la lezione 02?
**R:** «1) è minore o uguale a 1 **in valore assoluto**, i.e.: |ρ(X,Y)| ≤ 1; 2) se X e Y sono due variabili aleatorie tra loro **indipendenti** la loro correlazione è **pari 0**; 3) se X e Y sono due variabili aleatorie e α è uno scalare appartenente ad ℝ vale la seguente uguaglianza: **ρ(X + α,Y) = ρ(X,Y)**» (31, slide 11; [00:09:01]–[00:09:39]). ⚠️ La correlazione vale 1 per X con se stessa (slide 8), 0 per variabili indipendenti.
**Opzione:** |ρ(X,Y)| ≤ 1; se X e Y sono indipendenti la loro correlazione è pari a 0; ρ(X + α,Y) = ρ(X,Y).
**Distrattori:**
- |ρ(X,Y)| ≤ 1; se X e Y sono indipendenti la loro correlazione è pari a 1; ρ(X + α,Y) = ρ(X,Y).
- Se φ: ℝ → ℝ è convessa e E|φ(X)| < ∞, allora E[φ(X)|Y] ≥ φ[E(X|Y)].
- Se W ≜ h(Y) è una variabile aleatoria funzione di Y, allora E[X·W|Y] = W·E(X|Y).

**D:** ⚠️ Sotto quali ipotesi esiste il valore atteso condizionato U = E(X|Y), e quante variabili aleatorie lo soddisfano, secondo il teorema della lezione 02?
**R:** «Sia (Ω, ℳ, P) uno spazio di probabilità e siano X: (Ω, ℳ, P) → (ℝ, 𝔹, P_X) e Y: (Ω, ℳ, P) → (ℝ, 𝔹, P_Y) due variabili aleatorie **continue** rispettivamente con **E(|X|) < ∞** e **E(|Y|) < ∞**. Allora esiste **un'unica** variabile aleatoria: U = E(X|Y) (32) detta **valore atteso condizionato** di X data Y» (slide 12; [00:09:39]–[00:10:47]).
**Opzione:** Se X e Y sono variabili aleatorie continue con E(|X|) < ∞ e E(|Y|) < ∞, esiste un'unica variabile aleatoria U = E(X|Y), detta valore atteso condizionato di X data Y.
**Distrattori:**
- Se X e Y sono variabili aleatorie continue con E(|X|) < ∞ e E(|Y|) < ∞, esiste una variabile aleatoria U = E(X|Y), non necessariamente unica, detta valore atteso condizionato di X data Y.
- Una generica funzione θ dei dati campionari che mappa lo spazio campionario di una popolazione nello spazio dei numeri reali con l'obiettivo di stimare il valore di α.
- Essendo Y un sottoinsieme di (Y, Z), (Y, Z) contiene maggiori informazioni: il valore atteso calcolato su (Y, Z) e poi su Y coincide con quello calcolato direttamente sulla sola Y.

**D:** ⚠️ Di quali due proprietà gode il valore atteso condizionato U = E(X|Y), secondo il teorema della lezione 02?
**R:** «i) esiste una funzione g: ℝ → ℝ tale che **U = g(Y)**; ii) per ogni insieme A ∈ 𝔹, vale la c.d. **partial averaging property**, ossia: ∫_A E(X|Y) dP_X = ∫_A X dP_X» (33, slide 12). Il docente la chiama anche «proprietà della media parziale»: «siamo in grado di disfarci del condizionamento sulla variabile casuale y» ([00:10:47]–[00:11:34]).
**Opzione:** Esiste una funzione g: ℝ → ℝ tale che U = g(Y); per ogni A ∈ 𝔹 vale la partial averaging property, ∫_A E(X|Y) dP_X = ∫_A X dP_X.
**Distrattori:**
- Esiste una funzione g: ℝ → ℝ tale che U = g(X); per ogni A ∈ 𝔹 vale la partial averaging property, ∫_A E(X|Y) dP_X = ∫_A X dP_X.
- E(X|Y ∈ [a,b]) = ∫_ℝ x · [∫_a^b f_{X,Y}(x,y) dy / ∫_a^b f_Y(y) dy] dx

**D:** ⚠️ A che cosa è uguale E(X|Y ∈ [a,b]), con -∞ ≤ a ≤ b ≤ ∞, secondo la proposizione della lezione 02?
**R:** «Siano inoltre a, b ∈ ℝ tali che -∞ ≤ a ≤ b ≤ ∞. Allora vale la seguente uguaglianza: **E(X|Y ∈ [a,b]) = ∫_ℝ x · f_{X|Y∈[a,b]}(x) dx**» (34, slide 13). Il docente: «l'integrale su R di x per la funzione di densità di probabilità di x condizionato a y sull'intervallo chiuso ab» ([00:12:37]). ⚠️ L'integrale è su tutto ℝ, non fra a e b.
**Opzione:** E(X|Y ∈ [a,b]) = ∫_ℝ x · f_{X|Y∈[a,b]}(x) dx
**Distrattori:**
- E(X|Y ∈ [a,b]) = ∫_a^b x · f_{X|Y∈[a,b]}(x) dx
- Se φ: ℝ → ℝ è convessa e E|φ(X)| < ∞, allora E[φ(X)|Y] ≥ φ[E(X|Y)].
- E(Z) = aE(X) e Var(Z) = a²Var(X)

**D:** ⚠️ Come si scrive E(X|Y ∈ [a,b]) con la densità congiunta f_{X,Y} e la marginale f_Y, secondo il primo corollario della lezione 02?
**R:** «**E(X|Y ∈ [a,b]) = ∫_ℝ x · [∫_a^b f_{X,Y}(x,y) dy / ∫_a^b f_Y(y) dy] dx**» (35, slide 14): al numeratore la densità congiunta, al denominatore la marginale di Y, entrambe integrate fra a e b ([00:13:45]–[00:14:34]). Il secondo corollario la riscrive con la funzione indicatrice: [∫_ℝ ∫_ℝ x · 𝟙_{Y∈[a,b]}(y) f_{X,Y}(x,y) dy dx] / ∫_a^b f_Y(y) dy (36, slide 14).
**Opzione:** E(X|Y ∈ [a,b]) = ∫_ℝ x · [∫_a^b f_{X,Y}(x,y) dy / ∫_a^b f_Y(y) dy] dx
**Distrattori:**
- E(X|Y ∈ [a,b]) = ∫_ℝ x · [∫_a^b f_Y(y) dy / ∫_a^b f_{X,Y}(x,y) dy] dx
- Var(X) = σ² = M''_X(0) - [M'_X(0)]²
- E(X|Y) = E(X) e E(c|Y) = c

**D:** ⚠️ Quanto vale E[E(X|Y)], secondo la lezione 02?
**R:** «**E[E(X|Y)] = E(X)**» (37, slide 15, prima proprietà del valore atteso condizionato). Il docente: «il valore atteso del valore atteso di x dato y non è altro che il valore atteso di x» ([00:15:46]).
**Opzione:** E[E(X|Y)] = E(X)
**Distrattori:**
- E[E(X|Y)] = E(Y)
- Se X ≥ 0 q.o., allora E(X|Y) ≥ 0.
- θ = (1/N)∑_{i=1}^N x_i

**D:** ⚠️ Quanto valgono E(X|Y), se Y è indipendente da X, ed E(c|Y), se c è una costante, secondo la lezione 02?
**R:** «Se Y è una variabile aleatoria indipendente da X, allora: **E(X|Y) = E(X)** (38) e, in particolare, se X = c, con c costante, si ha: **E(c|Y) = c** (39)» (slide 15, seconda proprietà; [00:15:56]–[00:16:17]).
**Opzione:** E(X|Y) = E(X) e E(c|Y) = c
**Distrattori:**
- E(X|Y) = E(X) e E(c|Y) = 0
- σ² = μ_2 - (μ_1)², o equivalentemente σ² = μ_2 - (μ̄_1)²
- E[E(X|Y,Z)|Y] = E[E(X|Y)|Y,Z] = E(X|Y)

**D:** ⚠️ Come si scrive la linearità del valore atteso condizionato, secondo la lezione 02?
**R:** «Linearità: **E(aX_1 + bX_2|Y) = aE(X_1|Y) + bE(X_2|Y)**» (40, slide 15, terza proprietà; [00:16:17]). ⚠️ I coefficienti escono così come sono, non al quadrato come nella varianza.
**Opzione:** E(aX_1 + bX_2|Y) = aE(X_1|Y) + bE(X_2|Y)
**Distrattori:**
- E(aX_1 + bX_2|Y) = a²E(X_1|Y) + b²E(X_2|Y)
- E(X|Y ∈ [a,b]) = ∫_ℝ x · f_{X|Y∈[a,b]}(x) dx
- E(X·Y) = E(X)·E(Y), ossia cov(X,Y) = 0, e Var(X + Y) = Var(X) + Var(Y)

**D:** ⚠️ Che cosa afferma la positività del valore atteso condizionato, secondo la lezione 02?
**R:** «Positività. Se **X ≥ 0 q.o.**, allora: **E(X|Y) ≥ 0**» (41, slide 15, quarta proprietà). Il docente: «se x è maggiore o uguale di 0, allora… quasi ovunque, allora il valore atteso di x dato y è maggiore o uguale di 0» ([00:16:33]–[00:16:52]). ⚠️ La condizione è su X, non su Y.
**Opzione:** Se X ≥ 0 q.o., allora E(X|Y) ≥ 0.
**Distrattori:**
- Se Y ≥ 0 q.o., allora E(X|Y) ≥ 0.
- La varianza di una variabile aleatoria è sempre una quantità non negativa.
- E(X|Y ∈ [a,b]) = ∫_ℝ x · [∫_a^b f_{X,Y}(x,y) dy / ∫_a^b f_Y(y) dy] dx

**D:** ⚠️ Che cosa afferma la diseguaglianza di Jensen per il valore atteso condizionato, e sotto quali ipotesi, secondo la lezione 02?
**R:** «Diseguaglianza di Jensen. Se **φ: ℝ → ℝ è convessa** e **E|φ(X)| < ∞**, allora: **E[φ(X)|Y] ≥ φ[E(X|Y)]**» (42, slide 16). ⚠️ Il docente legge il membro destro come «il valore atteso di x dato y», senza φ ([00:17:07]): vale la slide.
**Opzione:** Se φ: ℝ → ℝ è convessa e E|φ(X)| < ∞, allora E[φ(X)|Y] ≥ φ[E(X|Y)].
**Distrattori:**
- Se φ: ℝ → ℝ è convessa e E|φ(X)| < ∞, allora E[φ(X)|Y] ≤ φ[E(X|Y)].
- Esiste una funzione g: ℝ → ℝ tale che U = g(Y); per ogni A ∈ 𝔹 vale la partial averaging property, ∫_A E(X|Y) dP_X = ∫_A X dP_X.
- E(X|Y ∈ [a,b]) = ∫_ℝ x · f_{X|Y∈[a,b]}(x) dx

**D:** ⚠️ Quando si può portare fuori dal valore atteso condizionato una variabile aleatoria W, e con quale formula, secondo la lezione 02?
**R:** «Portare fuori dal valore atteso ciò che è noto. Se W è una variabile aleatoria **funzione della variabile aleatoria Y**, i.e. **W ≜ h(Y)**, allora: **E[X·W|Y] = W·E(X|Y)**» (43, slide 16; [00:17:22]–[00:17:51]).
**Opzione:** Se W ≜ h(Y) è una variabile aleatoria funzione di Y, allora E[X·W|Y] = W·E(X|Y).
**Distrattori:**
- Se W ≜ h(X) è una variabile aleatoria funzione di X, allora E[X·W|Y] = W·E(X|Y).
- Esiste una funzione g: ℝ → ℝ tale che U = g(Y); per ogni A ∈ 𝔹 vale la partial averaging property, ∫_A E(X|Y) dP_X = ∫_A X dP_X.
- |ρ(X,Y)| ≤ 1; se X e Y sono indipendenti la loro correlazione è pari a 0; ρ(X + α,Y) = ρ(X,Y).

**D:** ⚠️ Come si scrive la tower property, secondo la lezione 02?
**R:** «Tower Property. Siano X, Y e Z […] tre variabili aleatorie, allora: **E[E(X|Y,Z)|Y] = E[E(X|Y)|Y,Z] = E(X|Y)**» (44, slide 16; [00:17:51]–[00:18:41]). ⚠️ Il risultato è il valore atteso condizionato alla sola Y, cioè all'informazione minore.
**Opzione:** E[E(X|Y,Z)|Y] = E[E(X|Y)|Y,Z] = E(X|Y)
**Distrattori:**
- E[E(X|Y,Z)|Y] = E[E(X|Y)|Y,Z] = E(X|Y,Z)
- Se X e Y sono variabili aleatorie continue con E(|X|) < ∞ e E(|Y|) < ∞, esiste un'unica variabile aleatoria U = E(X|Y), detta valore atteso condizionato di X data Y.
- |ρ(X,Y)| ≤ 1; se X e Y sono indipendenti la loro correlazione è pari a 0; ρ(X + α,Y) = ρ(X,Y).

**D:** ⚠️ Qual è l'intuizione della tower property, secondo la nota della lezione 02?
**R:** «Per una comprensione intuitiva della 44, è utile notare che - essendo **Y un sottoinsieme di (Y, Z)** - l'insieme (Y, Z) contiene **maggiori informazioni** rispetto alla sola Y. Se si calcola il valore atteso di X in base all'informazione contenuta in (Y, Z), e poi si calcola il valore atteso della grandezza così ottenuta in base all'informazione contenuta in Y, allora si ottiene lo stesso risultato che si avrebbe calcolando il valore atteso di X direttamente sulla base della sola informazione contenuta in Y» (slide 17). Per il docente è «il punto fondamentale del ragionamento, proprio perché YZ ha maggiore informazione di Y» ([00:18:41]–[00:19:39]).
**Opzione:** Essendo Y un sottoinsieme di (Y, Z), (Y, Z) contiene maggiori informazioni: il valore atteso calcolato su (Y, Z) e poi su Y coincide con quello calcolato direttamente sulla sola Y.
**Distrattori:**
- Essendo (Y, Z) un sottoinsieme di Y, Y contiene maggiori informazioni: il valore atteso calcolato su Y e poi su (Y, Z) coincide con quello calcolato direttamente su (Y, Z).
- Se X e Y sono variabili aleatorie continue con E(|X|) < ∞ e E(|Y|) < ∞, esiste un'unica variabile aleatoria U = E(X|Y), detta valore atteso condizionato di X data Y.
- Una generica variabile aleatoria X la cui funzione di densità di probabilità è non nota e specificata sulla base di uno spazio parametrico Λ rappresentativo delle caratteristiche della popolazione.

**D:** ⚠️ Come si definisce la popolazione, secondo la lezione 02?
**R:** «Si definisce **popolazione** una generica variabile aleatoria X la cui funzione di densità di probabilità è **non nota** e specificata sulla base di uno **spazio parametrico Λ** rappresentativo delle caratteristiche della popolazione, i.e.: X ~ f(x|Λ)» (slide 18). La nota della slide aggiunge che «Λ è spesso rappresentato dai momenti della variabile aleatoria X, i.e.: Λ = (μ_1, …, μ_r)» ([00:19:44]–[00:20:13]).
**Opzione:** Una generica variabile aleatoria X la cui funzione di densità di probabilità è non nota e specificata sulla base di uno spazio parametrico Λ rappresentativo delle caratteristiche della popolazione.
**Distrattori:**
- Una generica variabile aleatoria X la cui funzione di densità di probabilità è nota e specificata sulla base di uno spazio parametrico Λ rappresentativo delle caratteristiche della popolazione.
- L'insieme X̂ = (x_1, …, x_N) di N determinazioni indipendenti e identicamente distribuite (i.i.d.) della variabile aleatoria X.
- Essendo Y un sottoinsieme di (Y, Z), (Y, Z) contiene maggiori informazioni: il valore atteso calcolato su (Y, Z) e poi su Y coincide con quello calcolato direttamente sulla sola Y.

**D:** ⚠️ Come si definisce un campione di dimensione N, secondo la lezione 02?
**R:** «Si definisce **campione** di dimensione o numerosità N, l'insieme X̂ = (x_1, …, x_N) di N determinazioni **indipendenti e identicamente distribuite (i.i.d.)** della variabile aleatoria X» (slide 18; [00:20:13]).
**Opzione:** L'insieme X̂ = (x_1, …, x_N) di N determinazioni indipendenti e identicamente distribuite (i.i.d.) della variabile aleatoria X.
**Distrattori:**
- L'insieme X̂ = (x_1, …, x_N) di N determinazioni dipendenti e identicamente distribuite della variabile aleatoria X.
- Una generica funzione θ dei dati campionari che mappa lo spazio campionario di una popolazione nello spazio dei numeri reali con l'obiettivo di stimare il valore di α.
- Il valore θ̂ = θ(x_1, …, x_N) che lo stimatore assume in dipendenza di uno specifico campione di dimensione N.

**D:** ⚠️ Come si definisce lo stimatore del parametro α, secondo la lezione 02?
**R:** «Sia α un parametro della distribuzione di probabilità della variabile aleatoria X. Si definisce **stimatore** del parametro α una generica **funzione θ dei dati campionari** che mappa lo **spazio campionario** di una popolazione nello **spazio dei numeri reali** con l'obiettivo di stimare il valore di α, i.e.: θ: X̂ → ℝ» (slide 19; [00:20:42]–[00:21:10]). ⚠️ Il valore che lo stimatore assume su un campione è la stima.
**Opzione:** Una generica funzione θ dei dati campionari che mappa lo spazio campionario di una popolazione nello spazio dei numeri reali con l'obiettivo di stimare il valore di α.
**Distrattori:**
- Una generica funzione θ dei dati campionari che mappa lo spazio dei numeri reali nello spazio campionario di una popolazione con l'obiettivo di stimare il valore di α.
- Il valore θ̂ = θ(x_1, …, x_N) che lo stimatore assume in dipendenza di uno specifico campione di dimensione N.
- Se e solo se E(θ) = α, cioè se il suo valore atteso è esattamente pari al valore del parametro α.

**D:** ⚠️ Che cosa si definisce stima, secondo la lezione 02?
**R:** «In dipendenza di uno **specifico campione** di dimensione N, X̂ = (x_1, …, x_N), lo stimatore assume un **valore θ̂ = θ(x_1, …, x_N)** definito **stima**» (slide 19). Lo stimatore è la funzione θ, la stima il valore che assume ([00:21:10]–[00:21:28]; la trascrizione scrive «Indipendenza» per «In dipendenza»).
**Opzione:** Il valore θ̂ = θ(x_1, …, x_N) che lo stimatore assume in dipendenza di uno specifico campione di dimensione N.
**Distrattori:**
- Il valore θ̂ = θ(x_1, …, x_N) che lo stimatore assume quando la dimensione N del campione tende all'infinito.
- Se e solo se E(θ) = α, cioè se il suo valore atteso è esattamente pari al valore del parametro α.
- Se e solo se lim_{N→∞} E[(θ - α)²] = 0; si dice anche convergente in media quadratica.

**D:** ⚠️ Quando uno stimatore θ del parametro α è corretto (non distorto), secondo la lezione 02?
**R:** «Uno stimatore θ del parametro α è definito **corretto (non distorto)**, se e solo se: **E(θ) = α** (45). In altri termini, uno stimatore è corretto (non distorto) solo se il suo valore atteso è **esattamente pari** al valore del parametro α della distribuzione di probabilità della variabile aleatoria X» (slide 19; [00:21:28]).
**Opzione:** Se e solo se E(θ) = α, cioè se il suo valore atteso è esattamente pari al valore del parametro α.
**Distrattori:**
- Se e solo se Var(θ) = α, cioè se la sua varianza è esattamente pari al valore del parametro α.
- Media nulla e varianza unitaria.
- Del momento primo della popolazione; basta provare che lim_{N→∞} Var[(1/N)∑_{i=1}^N x_i] = 0, perché è uno stimatore corretto.

**D:** ⚠️ Come si definisce lo stimatore media aritmetica di un campione di numerosità N, secondo la lezione 02?
**R:** «Dato un campione di numerosità N, X̂ = (x_1, …, x_N) estratto da una popolazione X si definisce stimatore **media aritmetica** la seguente funzione dei dati campionari: **θ = (1/N)∑_{i=1}^N x_i**» (46, slide 20; [00:21:48]).
**Opzione:** θ = (1/N)∑_{i=1}^N x_i
**Distrattori:**
- θ = (1/N²)∑_{i=1}^N x_i
- La radice quadrata della varianza di X: σ_X = StDev(X) = √Var(X) = √E[(X - μ)²].
- Se e solo se lim_{N→∞} E[(θ - α)²] = 0; si dice anche convergente in media quadratica.

**D:** ⚠️ Di quale momento della popolazione lo stimatore media aritmetica è uno stimatore corretto, secondo la lezione 02?
**R:** «Lo stimatore media aritmetica è uno stimatore corretto del **momento primo** della popolazione, i.e.: **E((1/N)∑_{i=1}^N x_i) = μ_1**» (47, slide 20). Dimostrazione (slide 21): per la proprietà 2. del valore atteso E(θ) = (1/N)∑E(x_i); poiché ogni x_i è distribuita identicamente come X, E(x_i) = μ_1, quindi E(θ) = (1/N)Nμ_1 = μ_1 ([00:22:12]–[00:23:27]).
**Opzione:** Del momento primo della popolazione: E((1/N)∑_{i=1}^N x_i) = μ_1.
**Distrattori:**
- Del momento secondo della popolazione: E((1/N)∑_{i=1}^N x_i) = μ_2.
- Una condizione sufficiente a garantire la consistenza rispetto ad α.
- Se e solo se lim_{N→∞} E(θ) = α per un r specifico, cioè se il suo valore atteso tende al vero valore del parametro α quando la numerosità del campione tende all'infinito.

**D:** ⚠️ Quando uno stimatore θ del parametro α è asintoticamente corretto (non distorto), secondo la lezione 02?
**R:** «Uno stimatore θ del parametro α è definito **asintoticamente corretto (non distorto)**, se e solo se: **lim_{N→∞} E(θ) = α** (48) per un r specifico. In altri termini, uno stimatore è asintoticamente corretto (non distorto) solo se il suo valore atteso **tende** al vero valore del parametro α della distribuzione di probabilità della variabile aleatoria X, quando la numerosità del campione **tende all'infinito**» (slide 22; [00:23:27]–[00:24:07]).
**Opzione:** Se e solo se lim_{N→∞} E(θ) = α per un r specifico, cioè se il suo valore atteso tende al vero valore del parametro α quando la numerosità del campione tende all'infinito.
**Distrattori:**
- Se e solo se lim_{N→0} E(θ) = α per un r specifico, cioè se il suo valore atteso tende al vero valore del parametro α quando la numerosità del campione tende a zero.
- Del momento primo della popolazione; basta provare che lim_{N→∞} Var[(1/N)∑_{i=1}^N x_i] = 0, perché è uno stimatore corretto.
- Del momento primo della popolazione: E((1/N)∑_{i=1}^N x_i) = μ_1.

**D:** ⚠️ Quando uno stimatore θ del parametro α è consistente, e con quale altro nome si chiama, secondo la lezione 02?
**R:** «Uno stimatore θ del parametro α è definito **consistente** (o **convergente in media quadratica**) se e solo se: **lim_{N→∞} E[(θ - α)²] = 0**» (slide 22; [00:24:07]–[00:24:28]).
**Opzione:** Se e solo se lim_{N→∞} E[(θ - α)²] = 0; si dice anche convergente in media quadratica.
**Distrattori:**
- Se e solo se lim_{N→∞} E(θ - α) = 0; si dice anche convergente in media quadratica.
- Il secondo momento centrato di X, E[(X - μ)²]; si denota con σ_X², o semplicemente con σ², o con Var(X).
- Media nulla e varianza unitaria.

**D:** ⚠️ Che cos'è, per uno stimatore corretto, la condizione lim_{N→∞} Var[θ] = 0, secondo il teorema della lezione 02?
**R:** «Se uno stimatore θ del parametro α è corretto, allora: lim_{N→∞} Var[θ] = 0 è una **condizione sufficiente** a garantire la **consistenza** rispetto al α» (slide 23). Nella dimostrazione E(θ) = α trasforma lim Var[θ] = lim E[(θ - E[θ])²] in lim E[(θ - α)²]: «Ictu oculi si riconosce la definizione di stimatore consistente» (slide 23; [00:24:37]–[00:26:11]).
**Opzione:** Una condizione sufficiente a garantire la consistenza rispetto ad α.
**Distrattori:**
- Una condizione necessaria, ma non sufficiente, a garantire la consistenza rispetto ad α.
- La varianza di una variabile aleatoria è sempre una quantità non negativa.
- Se e solo se lim_{N→∞} E(θ) = α per un r specifico, cioè se il suo valore atteso tende al vero valore del parametro α quando la numerosità del campione tende all'infinito.

**D:** ⚠️ Di quale momento la media aritmetica è uno stimatore consistente, e che cosa basta provare per dimostrarlo, secondo la lezione 02?
**R:** «Lo stimatore media aritmetica è uno stimatore **consistente** del **momento primo** della popolazione, i.e.: lim_{N→∞} E[((1/N)∑_{i=1}^N x_i - μ_1)²] = 0» (49, slide 24). Poiché è uno stimatore corretto, «è sufficiente provare che» **lim_{N→∞} Var[(1/N)∑_{i=1}^N x_i] = 0** (50): 1/N esce dalla varianza come 1/N², per l'indipendenza la varianza della somma è la somma delle varianze, per l'identica distribuzione resta (1/N)·Var(x_i), che tende a 0 (slide 24; [00:26:16]–[00:28:57]).
**Opzione:** Del momento primo della popolazione; basta provare che lim_{N→∞} Var[(1/N)∑_{i=1}^N x_i] = 0, perché è uno stimatore corretto.
**Distrattori:**
- Del momento primo della popolazione; basta provare che lim_{N→∞} E[(1/N)∑_{i=1}^N x_i] = 0, perché è uno stimatore corretto.
- Il secondo momento centrato di X, E[(X - μ)²]; si denota con σ_X², o semplicemente con σ², o con Var(X).
- La radice quadrata della varianza di X: σ_X = StDev(X) = √Var(X) = √E[(X - μ)²].

**D:** ⚠️ Come è definita la varianza di una variabile aleatoria X, secondo il test della lezione 02 (domanda 1)?
**R:** «**E[(X-μ)²] ove μ è il momento primo di X**», la chiave della piattaforma, che è la formula della slide 2. 🚨 La domanda è **difettosa**: è vera anche l'opzione «coincide con il secondo momento centrato di X», perché per la slide 2 «il secondo momento centrato di X, i.e. E[(X - μ)²] è anche definito varianza», e il docente lo ripete ([00:00:47]). All'esame si segna la chiave A. Distrattori sbagliati del test: «è uguale al quadrato del momento primo di X», che è solo il termine sottratto nella (21), σ² = μ_2 - (μ_1)²; «E[(X+μ)²] ove μ è il momento primo di X», con il segno invertito.
**Opzione:** E[(X-μ)²] ove μ è il momento primo di X
**Distrattori:**
- è uguale al quadrato del momento primo di X
- E[(X+μ)²] ove μ è il momento primo di X

**D:** ⚠️ Se Z = X + Y, quanto vale Var(Z), secondo il test della lezione 02 (domanda 2)?
**R:** «**Var(Z)=Var(X)+Var(Y)+2cov(X,Y)**», la slide 9 alla lettera, dove la stessa proprietà dà anche E(Z) = E(X) + E(Y) ([00:07:02]). Distrattori del test: la stessa formula **senza il 2** davanti alla covarianza; «Var(Z)=E(X)+E(Y)+2cov(X,Y)», che mette i valori attesi al posto delle varianze; il **prodotto** delle varianze, che non esiste nei materiali e ricorda la regola del prodotto dei valori attesi di variabili indipendenti, E(X·Y) = E(X)·E(Y) (slide 10).
**Opzione:** Var(Z)=Var(X)+Var(Y)+2cov(X,Y)
**Distrattori:**
- Var(Z)=Var(X)+Var(Y)+cov(X,Y)
- Var(Z)=E(X)+E(Y)+2cov(X,Y)
- Var(Z)=Var(X)*Var(Y)

**D:** ⚠️ Come è definita la deviazione standard di una variabile aleatoria X, secondo il test della lezione 02 (domanda 3)?
**R:** «**{E[(X-μ)²]}^(1/2) ove μ è il momento primo di X**», cioè la (23) della slide 4, σ_X = √Var(X) = √E[(X - μ)²], con l'esponente 1/2 al posto della radice. ⚠️ Qui «coincide con il secondo momento centrato di X» è **falsa**: è la definizione della **varianza** (slide 2), vera nella domanda 1. Gli altri due distrattori sono quelli della domanda 1: «è uguale al quadrato del momento primo di X» e la radice di E[(X+μ)²], con il segno invertito.
**Opzione:** {E[(X-μ)²]}^(1/2) ove μ è il momento primo di X
**Distrattori:**
- coincide con il secondo momento centrato di X
- è uguale al quadrato del momento primo di X
- {E[(X+μ)²]}^(1/2) ove μ il momento primo di X

**D:** ⚠️ Come è definita la forma standardizzata Y della variabile aleatoria X, secondo il test della lezione 02 (domanda 4)?
**R:** «**Y=[X-E(X)]/σ_X**», la (24) della slide 4: «Sia X una variabile aleatoria con media pari a E(X) e deviazione standard pari a σ_X. Allora la variabile aleatoria Y definita come Y ≜ [X - E(X)]/σ_X è detta forma standardizzata di X» ([00:03:13]). Distrattori del test: la divisione per **σ_X²**, che compare nella dimostrazione della slide 5 come denominatore di Var(Y); la **somma** al posto del rapporto, Y=[X-E(X)]+σ_X; e Y=[X+E(X)²]+σ_X, che sbaglia segno, quadrato e operazione.
**Opzione:** Y=[X-E(X)]/σ_X
**Distrattori:**
- Y=[X+E(X)²]+σ_X
- Y=[X-E(X)]+σ_X
- Y=[X-E(X)]/σ_X²

**D:** ⚠️ Come è definita la covarianza di X e Y, i cui valori attesi sono μ_x e μ_y, secondo il test della lezione 02 (domanda 5)?
**R:** «**cov(X,Y)= E[(X-μ_x) (Y-μ_y)]**», la (25) della slide 6: «Date due variabili aleatorie X e Y, i cui valori attesi sono rispettivamente μ_X e μ_Y, si definisce covarianza tra X e Y e si denota con cov(X,Y) la quantità: cov(X,Y) = E[(X - μ_X)·(Y - μ_Y)]» ([00:04:23]). I distrattori cambiano solo l'operazione fra i due scarti, **differenza**, **somma** e **rapporto** al posto del prodotto, e nessuno esiste nei materiali.
**Opzione:** cov(X,Y)= E[(X-μ_x) (Y-μ_y)]
**Distrattori:**
- cov(X,Y)= E[(X-μ_x)-(Y-μ_y)]
- cov(X,Y)= E[(X-μ_x)+(Y-μ_y)]
- cov(X,Y)= E[(X-μ_x)/(Y-μ_y)]

## Lezione 03 — Strumenti Derivati 1 - Contratti Forward

**D:** ⚠️ In quali due categorie si distinguono gli strumenti finanziari, e che cosa ne ricava l'ingegneria finanziaria, secondo la lezione 03?
**R:** In **strumenti di base** e **strumenti derivati**, che attraverso l'**ingegneria finanziaria** confluiscono nei **prodotti strutturati** (slide 2). Per il docente l'ingegneria finanziaria «compila, costruisce, interseca queste tipologie di strumenti» definendo i prodotti strutturati ([00:00:22]).
**Opzione:** Strumenti di base e strumenti derivati; l'ingegneria finanziaria li combina nei prodotti strutturati.
**Distrattori:**
- Strumenti di base e prodotti strutturati; l'ingegneria finanziaria li combina negli strumenti derivati.
- Forward, futures, swap, opzioni.
- Per finalità di copertura, speculative e arbitraggio.

**D:** ⚠️ Quali tipologie di azioni elenca la lezione 03 fra gli strumenti di base?
**R:** «**Ordinarie**», «**Privilegiate**», «**Di risparmio**» (slide 3). Per il docente privilegiate e di risparmio hanno modalità di remunerazione specifiche previste dalla regolamentazione, per esempio un privilegio nella ripartizione degli utili; ci sono anche azioni il cui contenuto di diritti e di redditività è definito nello statuto della società ([00:00:50]–[00:01:41]). ⚠️ «Convertibili» chiude invece l'elenco delle **obbligazioni**.
**Opzione:** Ordinarie, privilegiate, di risparmio.
**Distrattori:**
- Ordinarie, privilegiate, convertibili.
- Forward, futures, swap, opzioni.
- Tasso fisso, tasso variabile, zero coupon, convertibili.

**D:** ⚠️ Quali tipologie di obbligazioni elenca la lezione 03 fra gli strumenti di base?
**R:** «**Tasso fisso**», «**Tasso variabile**», «**Zero coupon**», «**Convertibili**» (slide 3). Per il docente le obbligazioni, convertibili «in azioni per esempio», sono **titoli di debito**: finanziano la società e restituiscono il capitale alla fine dell'investimento, a condizione che la società non vada in default, perché oltre al rischio finanziario hanno il **rischio di credito**. Le azioni invece fanno partecipare l'investitore al funzionamento dell'impresa ([00:01:41]–[00:03:05]).
**Opzione:** Tasso fisso, tasso variabile, zero coupon, convertibili.
**Distrattori:**
- Tasso fisso, tasso variabile, zero coupon, di risparmio.
- I contratti forward, i futures, le opzioni e gli swap.
- Per finalità di copertura, speculative e arbitraggio.

**D:** ⚠️ Che cosa influisce sul prezzo delle azioni, secondo la lezione 03?
**R:** «Dati di bilancio, prospettive future di profitto o di perdite; Diffusione di notizie riguardanti le società emittenti, quali: Operazioni straordinarie (fusioni, scissioni, ecc.), Opa, Cessioni dei pacchetti di controllo, cambiamenti nel management, Accordi strategici, lancio di nuovi prodotti/servizi, **Dissesti societari**; Rumours di mercato; **Operazioni manipolative, aggiotaggio**» (slide 4). ⚠️ «I dati di bilancio» e «le notizie e i rumors» sono i distrattori D e C della domanda 1 del test, che chiede del prezzo delle **obbligazioni**: per quello contano i tassi d'interesse e il merito di credito dell'emittente (slide 5).
**Opzione:** Dati di bilancio, prospettive future di profitto o di perdite; diffusione di notizie riguardanti le società emittenti, quali: operazioni straordinarie (fusioni, scissioni, ecc.), Opa, cessioni dei pacchetti di controllo, cambiamenti nel management, accordi strategici, lancio di nuovi prodotti/servizi, dissesti societari; rumours di mercato; operazioni manipolative, aggiotaggio.
**Distrattori:**
- Dati di bilancio, prospettive future di profitto o di perdite; diffusione di notizie riguardanti le società emittenti, quali: operazioni straordinarie (fusioni, scissioni, ecc.), Opa, cessioni dei pacchetti di controllo, cambiamenti nel management, accordi strategici, lancio di nuovi prodotti/servizi, dissesti societari; rumours di mercato; tassi d'interesse, merito di credito dell'emittente.
- Apertura del contratto: margine iniziale; posizioni aperte: margine di variazione; scadenza: cash settlement, sia per l'acquirente sia per il venditore.
- La quota ottimale dell'esposizione che si dovrebbe teoricamente coprire.

**D:** Che cosa sono le operazioni manipolative e l'aggiotaggio, e chi vigila su di esse, secondo il docente della lezione 03?
**R:** Sono **false informazioni** diffuse sul mercato, che convincono alcuni investitori, così che il prezzo varia senza riflettere le prospettive della società; oppure un operatore usa la sua **forza di mercato**, comprando e vendendo i titoli, per spingere il prezzo in una direzione, «il tipico caso dello **squeeze** di mercato». Sono **reati** e anche **violazioni amministrative**, e vi vigila la **CONSOB**, «l'autorità di regolazione e di vigilanza dei mercati finanziari» ([00:03:46]–[00:05:03]). La slide 4 dice solo «Operazioni manipolative, aggiotaggio».
**Opzione:** Diffondere notizie false o usare la propria forza di mercato per spingere il prezzo; sono reati e violazioni amministrative su cui vigila la CONSOB.
**Distrattori:**
- Diffondere notizie false o usare la propria forza di mercato per spingere il prezzo; sono reati e violazioni amministrative su cui vigila la cassa di compensazione e garanzia.
- Non si trasferiscono l'indice o le azioni sottese, ma si scambiano per cassa solo il differenziale di valore, al netto dei margini già versati.
- Il prezzo rilevato immediatamente prima del segnale che determina la fine delle contrattazioni.

**D:** ⚠️ Che cosa influisce sul prezzo delle obbligazioni, e come si comporta il prezzo avvicinandosi alla scadenza, secondo la lezione 03?
**R:** «**Tassi d'interesse**» e «**Merito di credito dell'emittente**» (slide 5). Il grafico della slide mostra, per il docente, che il prezzo «man mano che arriviamo alla scadenza tende a **convergere verso il valore alla scadenza del titolo**» ([00:05:12]). Sul merito di credito: un'obbligazione pagata 100 può valere 10 o 15 euro se l'impresa fallisce dopo 5 anni ([00:05:12]–[00:05:52]). ⚠️ Dati di bilancio, notizie e rumours influiscono sul prezzo delle **azioni** (slide 4): è la trappola della domanda 1 del test.
**Opzione:** I tassi d'interesse e il merito di credito dell'emittente; avvicinandosi alla scadenza, il prezzo tende a convergere verso il valore alla scadenza del titolo.
**Distrattori:**
- I tassi d'interesse e il merito di credito dell'emittente; avvicinandosi alla scadenza, il prezzo tende ad allontanarsi dal valore alla scadenza del titolo.
- La differenza tra il prezzo spot e il prezzo futures.
- La quota ottimale dell'esposizione che si dovrebbe teoricamente coprire.

**D:** Che cosa succede a un'obbligazione la cui cedola è troppo bassa rispetto a quella di mercato, secondo il docente della lezione 03?
**R:** La cedola deve riflettere il **rischio dell'emittente** e le condizioni di mercato, cioè la **struttura a termine dei tassi d'interesse** ([00:05:52]–[00:06:19]). Se il mercato paga il 3% su un BTP, titolo di Stato a basso rischio, una società privata italiana, che non può avere un merito di credito migliore dello Stato, deve pagare almeno il 3%; altrimenti l'obbligazione non è appetibile e va **venduta a sconto**, al 90-80% invece che a 100, per riflettere la redditività che il mercato offre su titoli **a parità di rischio** ([00:06:19]–[00:07:22]).
**Opzione:** Non è appetibile e va venduta a sconto, per esempio al 90-80% invece che a 100, per allinearsi alla redditività di mercato dei titoli a parità di rischio.
**Distrattori:**
- Non è appetibile e va venduta a premio, sopra 100, per allinearsi alla redditività di mercato dei titoli a parità di rischio.
- Riduzione del rischio di una posizione preesistente.
- Non si trasferiscono l'indice o le azioni sottese, ma si scambiano per cassa solo il differenziale di valore, al netto dei margini già versati.

**D:** ⚠️ Quali sono gli strumenti derivati, nell'ordine della lezione 03?
**R:** «**Forward**», «**Futures**», «**Swap**», «**Opzioni**» (slide 6, ripetuta come indice alle slide 8 e 14). Anche il docente li elenca in quest'ordine, da definire «nelle prossime lezioni» ([00:07:22]). ⚠️ La chiave della domanda 2 del test li dà in un altro ordine, con le opzioni prima degli swap; i suoi distrattori vi infilano le azioni e le obbligazioni, che sono strumenti di base (slide 3).
**Opzione:** Forward, futures, swap, opzioni.
**Distrattori:**
- Forward, futures, swap, obbligazioni.
- Forward, futures, azioni, opzioni.
- Ordinarie, privilegiate, di risparmio.

**D:** ⚠️ Che cosa si intende per copertura fra le finalità degli strumenti derivati, secondo la lezione 03?
**R:** «**Copertura**: riduzione del Rischio di una posizione preesistente» (slide 7). L'esempio del docente: chi ha comprato azioni del gruppo Stellantis può coprirsi dal rischio dell'evoluzione dei prezzi del titolo vendendo un derivato, «o comprarlo a seconda del tipo di strumento derivato» ([00:07:46]–[00:08:27]).
**Opzione:** Riduzione del rischio di una posizione preesistente.
**Distrattori:**
- Aumento del rischio di una posizione preesistente.
- Assunzione di posizioni di rischio al fine di ottenere un profitto.
- Operare su più mercati al fine di sfruttarne gli squilibri e conseguire un profitto privo di rischio.

**D:** ⚠️ Che cosa si intende per speculazione fra le finalità degli strumenti derivati, secondo la lezione 03?
**R:** «**Speculazione**: assunzione di posizioni di rischio al fine di ottenere un profitto» (slide 7). L'esempio del docente: prendersi il rischio delle fluttuazioni dell'oro senza comprare l'oro, comprando un derivato per ottenere un profitto ([00:08:27]–[00:08:40]). ⚠️ Il profitto «privo di rischio» è dell'arbitraggio.
**Opzione:** Assunzione di posizioni di rischio al fine di ottenere un profitto.
**Distrattori:**
- Assunzione di posizioni di rischio al fine di conseguire un profitto privo di rischio.
- Riduzione del rischio di una posizione preesistente.
- La differenza tra il prezzo spot e il prezzo futures.

**D:** ⚠️ Che cosa si intende per arbitraggio fra le finalità degli strumenti derivati, secondo la lezione 03?
**R:** «**Arbitraggio**: operare su **più mercati** al fine di sfruttarne gli **squilibri** e conseguire un profitto **privo di rischio**» (slide 7). L'esempio del docente: l'oro ha in un mercato un prezzo più alto che in un altro, magari tramite il prodotto derivato corrispondente; si **vende** quello che vale di più e si **compra** quello che vale di meno ([00:08:40]–[00:09:10]).
**Opzione:** Operare su più mercati al fine di sfruttarne gli squilibri e conseguire un profitto privo di rischio.
**Distrattori:**
- Operare su un solo mercato al fine di sfruttarne gli squilibri e conseguire un profitto privo di rischio.
- Assunzione di posizioni di rischio al fine di ottenere un profitto.
- I futures prevedono la scelta tra diverse date di consegna, il forward una sola data di consegna.

**D:** ⚠️ Come definisce i contratti forward la lezione 03?
**R:** «Contratti Forward: accordi per **acquistare** o **vendere** **attività** **ad un dato prezzo** e **ad una certa scadenza**» (slide 9). Per il docente è un modo per non comprare subito l'attività ma per fissarne il prezzo oggi e regolare l'operazione a una data futura ([00:09:15]–[00:09:54]). La definizione dei futures (slide 15) è la stessa, con in più «(prezzo futures)».
**Opzione:** Accordi per acquistare o vendere attività ad un dato prezzo e ad una certa scadenza.
**Distrattori:**
- Accordi per acquistare o vendere attività ad un dato prezzo e con scelta tra diverse date di consegna.
- Il numero complessivo di contratti in essere.
- Strumenti di base e strumenti derivati; l'ingegneria finanziaria li combina nei prodotti strutturati.

**D:** Quali esempi di contratti forward fa la lezione 03?
**R:** «Accordi per: "comprare" 5.000 once d'oro a € 1.500 l'oncia tra 1 anno; "vendere" £ 1.000.000 a € 1,2 per sterlina tra 6 mesi; "ottenere" un tasso d'interesse del 3% su un deposito in euro per un periodo di 3 mesi che inizia tra 6 mesi; "vendere" 1.000.000 di barili di petrolio a € 90 per barile tra 9 mesi» (slide 10; [00:09:30]–[00:10:19]). La slide dice «Qualche esempio»: l'elenco è aperto. ⚠️ Nel deposito il periodo è di **3 mesi** e comincia **fra 6**.
**Opzione:** Comprare 5.000 once d'oro a € 1.500 l'oncia tra 1 anno; vendere £ 1.000.000 a € 1,2 per sterlina tra 6 mesi; ottenere un tasso d'interesse del 3% su un deposito in euro per un periodo di 3 mesi che inizia tra 6 mesi; vendere 1.000.000 di barili di petrolio a € 90 per barile tra 9 mesi.
**Distrattori:**
- Comprare 5.000 once d'oro a € 1.500 l'oncia tra 1 anno; vendere £ 1.000.000 a € 1,2 per sterlina tra 6 mesi; ottenere un tasso d'interesse del 3% su un deposito in euro per un periodo di 6 mesi che inizia tra 3 mesi; vendere 1.000.000 di barili di petrolio a € 90 per barile tra 9 mesi.
- T=0: margine iniziale di 500; T=1: il FIB vale 23.000 €, accredito del margine di variazione di + 1.000 €; scadenza: il FIB vale 21.600 €, addebito di -1.400 € e restituzione del margine iniziale.
- Apertura del contratto: margine iniziale; posizioni aperte: margine di variazione; scadenza: cash settlement, sia per l'acquirente sia per il venditore.

**D:** ⚠️ Quali caratteristiche ha il contratto forward, secondo la lezione 03?
**R:** «Il "contratto forward" è un accordo tra 2 soggetti sul mercato over the counter (OTC); **Di solito** il prezzo del contratto è scelto in modo che il valore di mercato (fair value) iniziale sia **nullo**; **Pertanto**, non c'è alcuno scambio di denaro tra le parti al momento della stipula; Il contratto viene **liquidato a scadenza**» (slide 11). Per il docente è «una cosa molto importante»: il forward consente di entrare nella rischiosità di un sottostante senza doverlo comprare subito ([00:10:28]–[00:11:10]). ⚠️ I futures invece sono regolati **ogni giorno** (slide 16).
**Opzione:** Accordo tra 2 soggetti sul mercato over the counter (OTC); di solito il prezzo del contratto è scelto in modo che il valore di mercato (fair value) iniziale sia nullo; pertanto non c'è alcuno scambio di denaro tra le parti al momento della stipula; il contratto viene liquidato a scadenza.
**Distrattori:**
- Accordo tra 2 soggetti sul mercato over the counter (OTC); di solito il prezzo del contratto è scelto in modo che il valore di mercato (fair value) iniziale sia nullo; pertanto non c'è alcuno scambio di denaro tra le parti al momento della stipula; il contratto viene regolato ogni giorno.
- La cassa di compensazione e garanzia, soggetto terzo che intermedia l'operatività tra le parti per garantire ed evitare failure di mercato.
- Il prezzo rilevato immediatamente prima del segnale che determina la fine delle contrattazioni.

**D:** ⚠️ Qual è il payoff a scadenza dell'acquisto e della vendita di un forward, secondo la lezione 03?
**R:** Per l'«Acquisto Forward» **S-F**, una retta crescente che taglia l'asse orizzontale in F; per la «Vendita Forward» **F-S**, una retta decrescente che taglia l'asse nello stesso punto (slide 13). Per il docente il payoff è «il risultato finanziario a scadenza che deriva dall'assunzione di una posizione su di un forward»: chi acquista guadagna la differenza all'aumentare del valore del sottostante rispetto al prezzo forward; le due posizioni sono il «long forward» e lo «short forward» ([00:11:26]–[00:12:12]).
**Opzione:** Acquisto forward: S-F; vendita forward: F-S, dove S è il valore del sottostante e F il prezzo forward.
**Distrattori:**
- Acquisto forward: F-S; vendita forward: S-F, dove S è il valore del sottostante e F il prezzo forward.
- h = ρ · (σ_S / σ_F).
- W = S - hF, e si calcola il valore di h che minimizza Var(W).

**D:** ⚠️ Come definisce i contratti futures la lezione 03?
**R:** «Contratti Futures: accordi per acquistare o vendere attività ad un dato prezzo **(prezzo futures)** e ad una certa scadenza» (slide 15). È la definizione dei forward della slide 9 con in più, in rosso, «(prezzo futures)», che il docente chiama «il prezzo future» ([00:12:16]). Per il docente le differenze dal forward non stanno nell'ingegneria finanziaria del contratto, «estremamente simile», ma in aspetti collaterali: il futures è standardizzato, il forward è un contratto bilaterale ([00:12:25]–[00:13:12]). ⚠️ «Dal prezzo futures» è la chiave della domanda 5 del test.
**Opzione:** Accordi per acquistare o vendere attività ad un dato prezzo (prezzo futures) e ad una certa scadenza.
**Distrattori:**
- Accordi per acquistare o vendere attività ad un dato prezzo (prezzo spot) e ad una certa scadenza.
- Il numero dei contratti stipulati in un giorno.
- La lunga quando si deve acquistare un'attività in futuro e si vuole bloccare il prezzo di acquisto; la corta quando si deve vendere un'attività in futuro e si vuole bloccare il prezzo di vendita.

**D:** ⚠️ Che cosa distingue i futures dai forward, secondo la lezione 03?
**R:** Futures: «Trattati in borsa; Contratti standardizzati; Scelta tra diverse date di consegna; Regolati ogni giorno; In genere vengono chiusi prima della scadenza». Forward: «Contratti privati; Contratti non standardizzati; una sola data di consegna; Regolati alla fine del contratto; In genere si verifica la consegna/il regolamento di un saldo finale» (slide 16). Per il docente i futures si regolano ogni giorno con i **margini**, il forward «in one shot» alla fine del contratto ([00:13:12]–[00:13:58]).
**Opzione:** Futures: trattati in borsa; contratti standardizzati; scelta tra diverse date di consegna; regolati ogni giorno; in genere vengono chiusi prima della scadenza. Forward: contratti privati; contratti non standardizzati; una sola data di consegna; regolati alla fine del contratto; in genere si verifica la consegna/il regolamento di un saldo finale.
**Distrattori:**
- Futures: trattati in borsa; contratti standardizzati; una sola data di consegna; regolati ogni giorno; in genere vengono chiusi prima della scadenza. Forward: contratti privati; contratti non standardizzati; scelta tra diverse date di consegna; regolati alla fine del contratto; in genere si verifica la consegna/il regolamento di un saldo finale.
- Non è appetibile e va venduta a sconto, per esempio al 90-80% invece che a 100, per allinearsi alla redditività di mercato dei titoli a parità di rischio.
- T=0: margine iniziale di 500; T=1: il FIB vale 23.000 €, accredito del margine di variazione di + 1.000 €; scadenza: il FIB vale 21.600 €, addebito di -1.400 € e restituzione del margine iniziale.

**D:** ⚠️ Quante date di consegna prevedono i futures e quante i forward, secondo la lezione 03?
**R:** I futures la «**scelta tra diverse date di consegna**», il forward «**una sola data di consegna**» (slide 16). Il docente dice «date di **scadenza**»: «I futures hai delle diverse date di scadenza tra cui puoi scegliere. Il forward è una sola» ([00:13:21]). ⚠️ È il distrattore B della domanda 5 del test: «dalla data di consegna», al singolare, è la riga del **forward**.
**Opzione:** I futures prevedono la scelta tra diverse date di consegna, il forward una sola data di consegna.
**Distrattori:**
- I futures prevedono una sola data di consegna, il forward la scelta tra diverse date di consegna.
- Acquisto forward: S-F; vendita forward: F-S, dove S è il valore del sottostante e F il prezzo forward.
- Ordinarie, privilegiate, di risparmio.

**D:** ⚠️ Che cos'è l'open interest, secondo la lezione 03?
**R:** «**Open Interest**: il numero complessivo di contratti **in essere**» (slide 17; [00:14:19]). ⚠️ Il **volume degli scambi** è invece il numero dei contratti stipulati **in un giorno**. Nell'esempio FIB il docente chiama open interest la fase delle posizioni aperte ([00:15:24]).
**Opzione:** Il numero complessivo di contratti in essere.
**Distrattori:**
- Il numero complessivo di contratti stipulati in un giorno.
- Il numero complessivo di contratti chiusi prima della scadenza.
- Diffondere notizie false o usare la propria forza di mercato per spingere il prezzo; sono reati e violazioni amministrative su cui vigila la CONSOB.

**D:** ⚠️ Che cos'è il prezzo di liquidazione di un futures, secondo la lezione 03?
**R:** «**Prezzo di liquidazione**: il prezzo rilevato immediatamente **prima** del segnale che determina la **fine** delle contrattazioni» (slide 17; [00:14:25]).
**Opzione:** Il prezzo rilevato immediatamente prima del segnale che determina la fine delle contrattazioni.
**Distrattori:**
- Il prezzo rilevato immediatamente dopo il segnale che determina la fine delle contrattazioni.
- I tassi d'interesse e il merito di credito dell'emittente; avvicinandosi alla scadenza, il prezzo tende a convergere verso il valore alla scadenza del titolo.
- Strumenti di base e strumenti derivati; l'ingegneria finanziaria li combina nei prodotti strutturati.

**D:** ⚠️ Che cos'è il volume degli scambi di un futures, secondo la lezione 03?
**R:** «**Volume degli scambi**: il numero dei contratti **stipulati in un giorno**» (slide 17; [00:14:36]). ⚠️ L'**open interest** è invece il numero complessivo di contratti **in essere**.
**Opzione:** Il numero dei contratti stipulati in un giorno.
**Distrattori:**
- Il numero dei contratti stipulati in un anno.
- Il numero complessivo di contratti in essere.
- La cassa di compensazione e garanzia, soggetto terzo che intermedia l'operatività tra le parti per garantire ed evitare failure di mercato.

**D:** ⚠️ Che cos'è la base, secondo la lezione 03?
**R:** «**Base**: la differenza tra il prezzo **spot** e il prezzo **futures**» (slide 17). Il transcript si ferma su «la differenza tra il prezzo spot e il prezzo» ([00:14:41]), poi distingue il prezzo che si osserva in quel momento sul sottostante dal prezzo definito dal contratto derivato ([00:14:49]). Nella slide 25 S è il prezzo spot e F il prezzo futures.
**Opzione:** La differenza tra il prezzo spot e il prezzo futures.
**Distrattori:**
- La somma del prezzo spot e del prezzo futures.
- 2h·Var(F) - 2cov(S,F) = 0, da cui h∗ = cov(S,F) / Var(F) = ρ · (σ_S / σ_F).
- Non è appetibile e va venduta a sconto, per esempio al 90-80% invece che a 100, per allinearsi alla redditività di mercato dei titoli a parità di rischio.

**D:** ⚠️ Che cosa avviene nelle tre fasi dell'esempio di acquisto di un futures sull'indice FTSE MIB (FIB), secondo la lezione 03?
**R:** «Apertura Contratto»: «Margine iniziale»; «Posizioni Aperte»: «Margine di variazione»; «Scadenza»: «Cash settlement», tutti e tre **sia per l'acquirente sia per il venditore** (slide 18–19). Per il docente all'apertura acquirente e venditore depositano «tipo il 10% del valore del contratto», mentre nel forward non c'è scambio di denaro, salvo che sia collateralizzato ([00:15:41]–[00:16:14]); sulle posizioni aperte il margine di variazione viene chiesto o rilasciato a seconda che il prezzo salga o scenda ([00:16:28]). Il FIB è il futures sull'indice FTSE MIB, l'indice della borsa di Milano che sintetizza i principali titoli quotati ([00:15:05]).
**Opzione:** Apertura del contratto: margine iniziale; posizioni aperte: margine di variazione; scadenza: cash settlement, sia per l'acquirente sia per il venditore.
**Distrattori:**
- Apertura del contratto: margine iniziale; posizioni aperte: margine di variazione; scadenza: cash settlement, solo per l'acquirente.
- I tassi d'interesse e il merito di credito dell'emittente; avvicinandosi alla scadenza, il prezzo tende a convergere verso il valore alla scadenza del titolo.
- Operare su più mercati al fine di sfruttarne gli squilibri e conseguire un profitto privo di rischio.

**D:** ⚠️ Che cosa avviene per l'acquirente nell'esempio numerico di un futures sul FIB con valore iniziale del contratto di 22.000 €, secondo la lezione 03?
**R:** «T=0 Versamento margine iniziale = 500»; «T=1 FIB vale 23.000 €, Accredito margine di variazione = + 1.000 €»; «Scadenza FIB vale 21.600 €, Addebito margine di variazione = -1.400 €, Restituzione margine iniziale» (slide 20–23). ⚠️ L'addebito di scadenza si misura dai 23.000 € di T=1, non dai 22.000 € iniziali. Per il docente chi ha venduto ha l'addebito speculare di 1.000 € a T=1 ([00:18:46]); in tutto l'acquirente perde 400 €, e «dei 500 del margine iniziale me ne verranno ritornati soltanto 100 euro» ([00:18:53]–[00:19:46]).
**Opzione:** T=0: margine iniziale di 500; T=1: il FIB vale 23.000 €, accredito del margine di variazione di + 1.000 €; scadenza: il FIB vale 21.600 €, addebito di -1.400 € e restituzione del margine iniziale.
**Distrattori:**
- T=0: margine iniziale di 500; T=1: il FIB vale 23.000 €, accredito del margine di variazione di + 1.000 €; scadenza: il FIB vale 21.600 €, addebito di -400 € e restituzione del margine iniziale.
- S prezzo spot; F prezzo futures; σ_S deviazione standard di ΔS; σ_F deviazione standard di ΔF; ρ coefficiente di correlazione tra ΔS e ΔF.
- Var(S - hF) = Var(S) + h²·Var(F) - 2h·cov(S,F).

**D:** ⚠️ Chi chiede il margine di variazione a chi sta perdendo, e con quale funzione, secondo il docente della lezione 03?
**R:** La **cassa di compensazione e garanzia**, «un soggetto terzo» che intermedia l'operatività tra le parti «per garantire ed evitare che ci possano essere delle **failure** di mercato» ([00:16:38]–[00:16:57]). A seconda che il prezzo salga o scenda, il margine di variazione viene chiesto a chi sta perdendo o rilasciato ([00:16:28]). Le slide non nominano la cassa di compensazione; la CONSOB è per il docente l'autorità che vigila sull'aggiotaggio ([00:04:47]).
**Opzione:** La cassa di compensazione e garanzia, soggetto terzo che intermedia l'operatività tra le parti per garantire ed evitare failure di mercato.
**Distrattori:**
- La CONSOB, soggetto terzo che intermedia l'operatività tra le parti per garantire ed evitare failure di mercato.
- La lunga quando si deve acquistare un'attività in futuro e si vuole bloccare il prezzo di acquisto; la corta quando si deve vendere un'attività in futuro e si vuole bloccare il prezzo di vendita.
- Tasso fisso, tasso variabile, zero coupon, convertibili.

**D:** ⚠️ Come si regolano le parti alla scadenza di un futures su indice, secondo il docente della lezione 03?
**R:** Con il **cash settlement** (slide 19): le parti «non si regolano trasferendosi l'indice o le azioni sottese all'indice», ma si scambiano **per cassa** il differenziale fra quanto hanno versato e la differenza fra prezzo futures e prezzo spot; si regola «esclusivamente il differenziale di valore al netto dei margini che sono stati già versati» ([00:16:57]–[00:17:42]).
**Opzione:** Non si trasferiscono l'indice o le azioni sottese, ma si scambiano per cassa solo il differenziale di valore, al netto dei margini già versati.
**Distrattori:**
- Si trasferiscono le azioni sottese all'indice, e si restituiscono i margini già versati.
- I futures prevedono la scelta tra diverse date di consegna, il forward una sola data di consegna.
- Diffondere notizie false o usare la propria forza di mercato per spingere il prezzo; sono reati e violazioni amministrative su cui vigila la CONSOB.

**D:** ⚠️ Quando è appropriata una copertura lunga e quando una copertura corta con i futures, secondo la lezione 03?
**R:** La copertura «**LUNGA**» è appropriata quando si deve **acquistare** un'attività in futuro e si vuole **bloccare** il prezzo di acquisto; la «**CORTA**» quando si deve **vendere** un'attività in futuro e si vuole bloccare il prezzo di vendita (slide 24). Per il docente con un futures si definisce oggi il prezzo di un'attività a una data futura, «come se quindi io mi sterilizzassi l'evoluzione dei rischi di mercato per quel periodo» ([00:20:28]–[00:20:53]). ⚠️ A [00:20:05] il docente dice «lunga o corta» per il caso dell'acquisto: vale la slide.
**Opzione:** La lunga quando si deve acquistare un'attività in futuro e si vuole bloccare il prezzo di acquisto; la corta quando si deve vendere un'attività in futuro e si vuole bloccare il prezzo di vendita.
**Distrattori:**
- La lunga quando si deve vendere un'attività in futuro e si vuole bloccare il prezzo di vendita; la corta quando si deve acquistare un'attività in futuro e si vuole bloccare il prezzo di acquisto.
- Accordi per acquistare o vendere attività ad un dato prezzo (prezzo futures) e ad una certa scadenza.
- Il numero dei contratti stipulati in un giorno.

**D:** ⚠️ Che cos'è il rapporto di copertura a varianza minima, secondo la lezione 03?
**R:** «La quota **ottimale** dell'"esposizione" che si dovrebbe **teoricamente** coprire» (slide 25); lo strato di testo della slide prosegue con «con acquisti o vendite di futures è pari a:», che nella pagina non si vede perché coperto dalla formula. Per il docente è il rapporto di copertura «che presenta la minore varianza, cioè quell'esposizione ottimale al rischio che uno dovrebbe teoricamente coprire» ([00:20:53]–[00:21:10]). ⚠️ «Varianza minima» è il criterio: la quota è **ottimale**, non minima.
**Opzione:** La quota ottimale dell'esposizione che si dovrebbe teoricamente coprire.
**Distrattori:**
- La quota minima dell'esposizione che si dovrebbe teoricamente coprire.
- I contratti forward, i futures, le opzioni e gli swap.
- Accordi per acquistare o vendere attività ad un dato prezzo e ad una certa scadenza.

**D:** ⚠️ Qual è la formula del rapporto di copertura a varianza minima, secondo la lezione 03?
**R:** **h = ρ · (σ_S / σ_F)** (slide 25), con ρ coefficiente di correlazione tra ΔS e ΔF, σ_S e σ_F deviazioni standard di ΔS e ΔF. Per il docente dipende dal **rapporto fra le volatilità**, cioè le deviazioni standard, del prezzo spot e del prezzo futures, e dalla **correlazione** fra le variazioni dei due prezzi: «ρ per σ di S su σ di F» ([00:21:13]–[00:21:43]). ⚠️ Lo spot sta al **numeratore**, il futures al **denominatore**, e senza ρ la formula è sbagliata.
**Opzione:** h = ρ · (σ_S / σ_F).
**Distrattori:**
- h = ρ · (σ_F / σ_S).
- h = σ_S / σ_F.
- Var(S - hF) = Var(S) + h²·Var(F) - 2h·cov(S,F).

**D:** ⚠️ Che cosa indicano S, F, σ_S, σ_F e ρ nella formula del rapporto di copertura a varianza minima, secondo la lezione 03?
**R:** «S = prezzo spot; F = prezzo futures; σ_S = deviazione standard di ΔS; σ_F = deviazione standard di ΔF; ρ = coefficiente di correlazione tra ΔS e ΔF» (slide 25). ⚠️ Deviazioni standard e correlazione sono calcolate sulle **variazioni** ΔS e ΔF, non sui livelli dei prezzi: il docente parla della correlazione «tra una variazione del prezzo spot ed una variazione del prezzo futures» ([00:21:13]). Le σ sono **deviazioni standard**, non varianze.
**Opzione:** S prezzo spot; F prezzo futures; σ_S deviazione standard di ΔS; σ_F deviazione standard di ΔF; ρ coefficiente di correlazione tra ΔS e ΔF.
**Distrattori:**
- S prezzo spot; F prezzo futures; σ_S varianza di ΔS; σ_F varianza di ΔF; ρ coefficiente di correlazione tra ΔS e ΔF.
- 2h·Var(F) - 2cov(S,F) = 0, da cui h∗ = cov(S,F) / Var(F) = ρ · (σ_S / σ_F).
- W = S - hF, e si calcola il valore di h che minimizza Var(W).

**D:** ⚠️ Come si definisce il risultato economico dell'investitore nella dimostrazione del rapporto di copertura a varianza minima, e che cosa si calcola, secondo la lezione 03?
**R:** «Si definisce il risultato economico di un investitore come: W=S-h e si calcola il valore di h che **minimizza** la relativa varianza», cioè min_h Var(W) = min_h Var(S - hF) (slide 26). ⚠️ Il testo della slide dice «W=S-h», ma la formula della stessa slide e il docente danno **W = S - hF**: h è «questa generica scalare che moltiplichiamo per il future» ([00:21:56]–[00:22:11]).
**Opzione:** W = S - hF, e si calcola il valore di h che minimizza Var(W).
**Distrattori:**
- W = S - hF, e si calcola il valore di h che massimizza Var(W).
- S prezzo spot; F prezzo futures; σ_S deviazione standard di ΔS; σ_F deviazione standard di ΔF; ρ coefficiente di correlazione tra ΔS e ΔF.
- Acquisto forward: S-F; vendita forward: F-S, dove S è il valore del sottostante e F il prezzo forward.

**D:** ⚠️ Come si scompone Var(S - hF) nella dimostrazione del rapporto di copertura a varianza minima, secondo la lezione 03?
**R:** «Per le proprietà della varianza e della covarianza di variabili aleatorie»: min_h Var(W) = min_h Var(S - hF) = min_h [**Var(S) + h²·Var(F) - 2h·cov(S,F)**] (slide 27; [00:22:20]). ⚠️ Il coefficiente h entra **al quadrato** nel termine della varianza di F, e la covarianza ha il segno **meno**.
**Opzione:** Var(S - hF) = Var(S) + h²·Var(F) - 2h·cov(S,F).
**Distrattori:**
- Var(S - hF) = Var(S) + h²·Var(F) + 2h·cov(S,F).
- Var(S - hF) = Var(S) + h·Var(F) - 2h·cov(S,F).
- h = ρ · (σ_S / σ_F).

**D:** ⚠️ Quale condizione di minimo si impone, e quale valore di h si ottiene, nella dimostrazione del rapporto di copertura a varianza minima della lezione 03?
**R:** «Imponendo la condizione di minimo e calcolando il valore di h che la soddisfa»: **2h·Var(F) - 2cov(S,F) = 0**, da cui **h∗ = cov(S,F) / Var(F)**, «la covarianza sulla varianza» per il docente. Poi h∗ = cov(S,F) / σ_F² = (cov(S,F) / σ_F²) · (σ_S / σ_S) = (cov(S,F) / (σ_S σ_F)) · (σ_S / σ_F) = **ρ · (σ_S / σ_F)** (slide 28; [00:22:20]–[00:23:23]). ⚠️ Il fattore cov(S,F) / (σ_S σ_F) è ρ, non h∗.
**Opzione:** 2h·Var(F) - 2cov(S,F) = 0, da cui h∗ = cov(S,F) / Var(F) = ρ · (σ_S / σ_F).
**Distrattori:**
- 2h·Var(F) - 2cov(S,F) = 0, da cui h∗ = Var(F) / cov(S,F) = ρ · (σ_F / σ_S).
- 2h·Var(F) - 2cov(S,F) = 0, da cui h∗ = cov(S,F) / (σ_S · σ_F).
- 2h·Var(F) + 2cov(S,F) = 0, da cui h∗ = -cov(S,F) / Var(F).

**D:** ⚠️ Che cosa influisce sul prezzo delle obbligazioni, secondo il test della lezione 03 (domanda 1)?
**R:** «**Il tasso di interesse e il merito di credito dell'emittente**», la slide 5 quasi alla lettera: la slide dice «Tassi d'interesse» e «Merito di credito dell'emittente». ⚠️ Distrattori del test: «le notizie e i rumors» e «i dati di bilancio» vengono dalla slide 4, cioè da ciò che influisce sul prezzo delle **azioni**; in «i dati di bilancio, il tasso di interesse e la maturity» i dati di bilancio prendono il posto del **merito di credito**, accanto al tasso giusto. Il «prezzo strike» è il prezzo delle **opzioni** (deck 05, slide 3), e la «maturity» non compare nel deck 03 né nel suo transcript.
**Opzione:** Il tasso di interesse e il merito di credito dell'emittente.
**Distrattori:**
- Il prezzo strike e la maturity.
- Le notizie e i rumors.
- I dati di bilancio, il tasso di interesse e la maturity.

**D:** ⚠️ Quali sono i principali strumenti derivati, secondo il test della lezione 03 (domanda 2)?
**R:** «**I contratti forward, i futures, le opzioni e gli swap**». ⚠️ La slide 6 e il docente ([00:07:22]) li elencano in un altro ordine: forward, futures, **swap**, **opzioni**. Distrattori del test: «le azioni, le obbligazioni e gli swaps» e «i contratti forward, le azioni e i futures» mettono fra i derivati gli **strumenti di base** della slide 3, una classificazione sbagliata; «gli swaps» è un **elenco amputato** a una voce sola.
**Opzione:** I contratti forward, i futures, le opzioni e gli swap.
**Distrattori:**
- Le azioni, le obbligazioni e gli swaps.
- I contratti forward, le azioni e i futures.
- Gli swaps.

**D:** ⚠️ Per quali finalità si utilizzano i derivati, secondo il test della lezione 03 (domanda 3)?
**R:** «**Per finalità di copertura, speculative e arbitraggio**»: le tre finalità della slide 7, e per il docente «le finalità sono tre» ([00:07:41]). ⚠️ «Per finalità di arbitraggio» è un **elenco amputato**: nomina una sola delle tre finalità ed esclude la copertura e la speculazione, che la slide mette sullo stesso piano. «Per finalità di investimento e finanziamento» e «per finanziarsi» non compaiono fra le finalità dei derivati, né nel deck 03 né nel suo transcript: il docente parla di finanziamento solo per le **obbligazioni**, strumenti di base che «finanziano la società per i suoi scopi sociali» ([00:02:20]).
**Opzione:** Per finalità di copertura, speculative e arbitraggio.
**Distrattori:**
- Per finalità di investimento e finanziamento.
- Per finalità di arbitraggio.
- Per finanziarsi.

**D:** ⚠️ Quale posizione assume chi compra un derivato, secondo il test della lezione 03 (domanda 4)?
**R:** «**Lunga**»: «la parte che ha deciso di **comprare** ha una posizione **lunga**», alla slide 12 per i forward e alla slide 17 per i futures, e il docente lo dice due volte ([00:11:11], [00:14:09]). ⚠️ Distrattori del test: «corta» è la posizione di chi ha deciso di **vendere**, un segno invertito; «arbitraggista» trasforma in posizione una delle tre **finalità** della slide 7; una posizione «netta» non compare nel deck 03 né nel suo transcript.
**Opzione:** Lunga.
**Distrattori:**
- Arbitraggista.
- Corta.
- Netta.

**D:** ⚠️ Da che cosa sono caratterizzati i contratti futures, secondo il test della lezione 03 (domanda 5)?
**R:** «**Dal prezzo futures**»: la slide 15 definisce i futures come accordi per acquistare o vendere attività «ad un dato prezzo **(prezzo futures)**» e ad una certa scadenza, e «(prezzo futures)», in rosso, è l'unica aggiunta rispetto alla definizione dei forward della slide 9; il docente lo chiama «il prezzo future» ([00:12:16]). ⚠️ «Dalla data di consegna», al singolare, è la riga dei **forward** nella tabella della slide 16, «una sola data di consegna»: i futures hanno la «scelta tra diverse date di consegna». «Dall'esclusivo fine speculativo» è un quantificatore assoluto, smentito dalle tre finalità della slide 7 e dalla copertura con i futures della slide 24. «Dalla posizione arbitraggista» non esiste: le posizioni sono lunga e corta (slide 17).
**Opzione:** Dal prezzo futures.
**Distrattori:**
- Dall'esclusivo fine speculativo.
- Dalla data di consegna.
- Dalla posizione arbitraggista.

## Lezione 04 — Strumenti Derivati 2 - Contratti Futures

**D:** Che cosa distingue il prezzo spot dal prezzo futures, secondo la lezione 04?
**R:** La slide 2, «Prezzi spot e prezzi futures», colloca il **prezzo spot** al tempo **0** e il **prezzo futures** al tempo **T**. Per il docente «la differenza è collegata al **tempo**, tempo che ha un **valore finanziario**, il prezzo spot è il **prezzo attuale, corrente**, il prezzo futures è il **prezzo ad una data scadenza futura**» (slide 2; transcript [00:00:26]–[00:00:53]).
**Opzione:** Il prezzo spot è il prezzo attuale, corrente; il prezzo futures è il prezzo ad una data scadenza futura: la differenza è collegata al tempo, che ha un valore finanziario.
**Distrattori:**
- Il prezzo spot è il prezzo ad una data scadenza futura; il prezzo futures è il prezzo attuale, corrente: la differenza è collegata al tempo, che ha un valore finanziario.
- Tipicamente solo il differenziale tra il pagamento dovuto dalla gamba fissa e quello dovuto dalla gamba variabile.
- Gli IRS (interest rate swaps), cioè gli swap su tassi di interesse.

**D:** ⚠️ Quale situazione si chiama contango, secondo la lezione 04?
**R:** Nel grafico della slide 3, «Contango», il **prezzo futures** sta **sopra** il **prezzo spot** e vi converge con il passare del tempo: «“Convergenza” del prezzo futures verso il prezzo spot». Per il docente il prezzo futures, «includendo il valore finanziario del tempo», «dovrebbe essere sempre superiore al prezzo spot», e la situazione contango «è coerente con le leggi normali della matematica finanziaria dove il tempo ha un valore finanziario» (slide 3; transcript [00:00:53]–[00:01:40]). ⚠️ Il rovescio, con lo spot sopra il futures, è la **backwardation** (slide 4).
**Opzione:** Quella in cui il prezzo futures è superiore al prezzo spot e converge verso il prezzo spot avvicinandosi alla scadenza.
**Distrattori:**
- Quella in cui il prezzo spot è superiore al prezzo futures e il prezzo futures converge verso il prezzo spot avvicinandosi alla scadenza.
- L'Euribor, ossia il tasso applicato ai prestiti interbancari non collateralizzati con scadenza da 1 a 12 mesi.
- Gamba variabile (floating leg) l'insieme degli importi variabili; gamba fissa (fixed leg) l'insieme degli importi fissi.

**D:** ⚠️ Quale situazione si chiama backwardation, e quale circostanza la rende possibile per il docente della lezione 04?
**R:** Nel grafico della slide 4, intitolata «**BACWARDATION**» (sic), il **prezzo spot** sta **sopra** il **prezzo futures**, e i due prezzi convergono comunque alla scadenza. Il docente: è la situazione «quando invece appunto il **prezzo spot è superiore al prezzo futures**». La collega ai **tassi di interesse nominali negativi** degli ultimi anni, «anche su scadenze molto lunghe, pensiamo alla struttura a termine dei **Bund** che hanno avuto valori negativi per tanti tanti tanti anni e anche su varie scadenze» (slide 4; transcript [00:01:40]–[00:02:22]). La causa è solo nel transcript: la slide mostra il grafico.
**Opzione:** Quella in cui il prezzo spot è superiore al prezzo futures; per il docente è possibile perché ci sono stati tassi d'interesse nominali negativi, anche su scadenze molto lunghe.
**Distrattori:**
- Quella in cui il prezzo spot è superiore al prezzo futures; per il docente è possibile perché ci sono stati tassi d'interesse nominali positivi, anche su scadenze molto lunghe.
- Tipicamente lo swap è ingegnerizzato in modo tale che il suo fair value alla data di stipula (t=0) sia nullo.
- Uno swap: chi fa un mutuo a tasso fisso ha implicitamente comprato uno swap, perché in natura il tasso d'interesse è variabile.

**D:** ⚠️ Che cosa accade al prezzo spot e al prezzo futures alla scadenza, e perché, secondo il docente della lezione 04?
**R:** Le slide 3 e 4 hanno lo stesso titolo, «“**Convergenza**” del prezzo futures verso il prezzo spot», sia in contango sia in backwardation. Il docente: «Una cosa è certa però, alla scadenza di quel tempo identificato dal prezzo futures osservato oggi, il prezzo spot e il prezzo futures **devono convergere**, perché finiscono per andare ad identificare il **medesimo fenomeno**, cioè il prezzo di un'attività finanziaria» (slide 3–4; transcript [00:02:22]–[00:02:50]). ⚠️ La convergenza vale in **entrambe** le situazioni.
**Opzione:** Devono convergere, sia in contango sia in backwardation, perché finiscono per identificare il medesimo fenomeno, cioè il prezzo di un'attività finanziaria.
**Distrattori:**
- Devono convergere solo in contango, perché solo lì il prezzo futures include il valore finanziario del tempo.
- Il tasso fisso R∗ in base a cui si calcolano i pagamenti a carico della gamba fissa dello swap, affinché il fair value dell'IRS alla data di stipula sia pari a zero.

**D:** ⚠️ Secondo Keynes e Hicks, che cosa indicano F < E(S_T) e F > E(S_T)?
**R:** Slide 5, «Keynes e Hicks»: «**F<E(S_T)** se gli speculatori sono “lunghi” e gli hedgers sono “corti”»; «**F>E(S_T)** se gli speculatori sono “corti” e gli hedgers sono “lunghi”». Il docente: quando il prezzo futures è **inferiore** al valore atteso del prezzo del sottostante a scadenza, chi ha un intendimento speculativo ha **comprato** contratti (posizioni lunghe) e gli hedgers, che si coprono dai rischi, li hanno **venduti** (posizioni corte); viceversa quando è **maggiore**. È una relazione di «carattere **empirico**» (slide 5; transcript [00:02:50]–[00:04:26]). ⚠️ Il transcript dice «Heinz e Hicks»: errore della trascrizione, la slide dice **Keynes**.
**Opzione:** F < E(S_T) se gli speculatori sono lunghi e gli hedgers sono corti; F > E(S_T) se gli speculatori sono corti e gli hedgers sono lunghi.
**Distrattori:**
- F < E(S_T) se gli speculatori sono corti e gli hedgers sono lunghi; F > E(S_T) se gli speculatori sono lunghi e gli hedgers sono corti.
- Il valore attuale al tempo t=0 dei flussi di pagamenti attesi a carico della gamba variabile e quello dei flussi di pagamenti a carico della gamba fissa è lo stesso.
- Tipicamente solo il differenziale tra il pagamento dovuto dalla gamba fissa e quello dovuto dalla gamba variabile.

**D:** Qual è, per il docente, l'intuizione dietro la relazione di Keynes e Hicks?
**R:** Il docente: «chi specula lo fa perché è convinto di **guadagnare** qualcosa, non per coprirsi dei rischi e quindi tende a **vendere** l'attività finanziaria tra quella future e quella spot che in quel momento nelle loro aspettative ha il **valore maggiore**», per lucrare la differenza. «Laddove io sia convinto che il future sia **sopravvalutato** ovviamente non andrò a comprare il future ma lo andrò a vendere» (transcript [00:04:26]–[00:05:18]). Quanto la relazione si verifichi empiricamente dipende anche dalla composizione del mercato fra operatori che fanno **speculazione, copertura e arbitraggio** ([00:05:18]–[00:06:02]). Non è nelle slide.
**Opzione:** Chi specula vuole guadagnare, non coprirsi dai rischi, e tende a vendere, fra futures e spot, l'attività che nelle sue aspettative ha il valore maggiore.
**Distrattori:**
- Chi specula vuole guadagnare, non coprirsi dai rischi, e tende a comprare, fra futures e spot, l'attività che nelle sue aspettative ha il valore maggiore.
- A un'esigenza di equità del contratto: al momento della stipula la ripartizione delle alee tra le due controparti è simmetrica.
- R∗ = (∑_{i=1}^{n} DF(0,t_i) · r_0(t_{i-1},t_i)) / (∑_{i=1}^{n} DF(0,t_i)), con i = 1, ..., n e t_n = T

**D:** ⚠️ Quale uguaglianza lega prezzo spot e prezzo futures, e come si scrive in simboli, secondo la lezione 04?
**R:** «**prezzo spot + valore tempo - eventuali dividendi = prezzo futures**» (slide 7), in simboli «**S + r - δ = F**» (slide 8). Il docente: S è il prezzo dell'attività sottostante, r «il valore del tempo», δ i dividendi, F il prezzo futures; l'identità «teoricamente vale» per un'azione che paga dei dividendi (slide 7–8; transcript [00:06:13]–[00:07:05]). ⚠️ I dividendi si **sottraggono**.
**Opzione:** Prezzo spot + valore tempo - eventuali dividendi = prezzo futures, cioè S + r - δ = F.
**Distrattori:**
- Prezzo spot + valore tempo + eventuali dividendi = prezzo futures, cioè S + r + δ = F.
- DF(0,t_i) è il fattore di sconto da t_i a t_0 = 0; r_0(t_{i-1},t_i) è il tasso d'interesse per il periodo futuro che va da t_{i-1} a t_i valutato al tempo t_0 = 0; T è la scadenza dell'IRS.
- In base all'effettivo andamento del sottostante, una delle due parti sarà a credito e l'altra sarà a debito nei confronti della controparte.

**D:** ⚠️ Che cosa si apre se l'uguaglianza prezzo spot + valore tempo - eventuali dividendi = prezzo futures non è verificata?
**R:** Slide 9: «Se questa uguaglianza non è verificata» → «**Una possibilità di guadagno — c.d. strategia di arbitraggio**». Il docente: si può comprare o vendere l'attività che genera la disuguaglianza, per ottenere la differenza di valore fra l'attività **sopravvalutata** e quella **sottovalutata** (slide 9; transcript [00:07:05]–[00:07:39]).
**Opzione:** Una possibilità di guadagno, cosiddetta strategia di arbitraggio.
**Distrattori:**
- Una possibilità di guadagno, cosiddetta strategia di copertura.
- Gamba variabile (floating leg) l'insieme degli importi variabili; gamba fissa (fixed leg) l'insieme degli importi fissi.
- Gli IRS (interest rate swaps), cioè gli swap su tassi di interesse.

**D:** ⚠️ Quale relazione fra prezzo spot e prezzo futures esclude la possibilità di arbitraggio, e da che cosa dipende il fattore di capitalizzazione?
**R:** «La relazione che intercorre tra prezzi spot e prezzi futures affinché non vi sia possibilità di arbitraggio è la seguente: **F = S · fattore di capitalizzazione**, dove il Fattore di Capitalizzazione è una funzione del **tasso d'interesse r** e della **durata del Futures**» (slide 10, che scrive il prodotto con un asterisco). Il docente la enuncia «tralasciando per un attimo il tema dei dividendi»: in questa condizione di identità «strategie di arbitraggio non sono possibili» (transcript [00:07:39]–[00:09:09]).
**Opzione:** F = S · fattore di capitalizzazione, dove il fattore di capitalizzazione è una funzione del tasso d'interesse r e della durata del futures.
**Distrattori:**
- F = S · fattore di capitalizzazione, dove il fattore di capitalizzazione è una funzione del tasso d'interesse r e degli eventuali dividendi.
- R∗ = (∑_{i=1}^{n} DF(0,t_i) · r_0(t_{i-1},t_i)) / (∑_{i=1}^{n} DF(0,t_i)), con i = 1, ..., n e t_n = T
- Il valore di mercato del contratto alla data t, determinato come la differenza tra i flussi di pagamento, attualizzati alla data t, a carico delle due gambe dello swap.

**D:** ⚠️ In quale caso si applica la strategia di arbitraggio cash and carry, e quale profitto privo di rischio dà?
**R:** Slide 11, «Strategia di arbitraggio: cash and carry»: «Se **F > S · fattore di capitalizzazione**». Al tempo T: «Incasso F, restituisco S · fattore di capitalizzazione (S + interessi) e ottengo un profitto privo di rischio pari a: **F - S · fattore di capitalizzazione**». Il docente lo chiama anche «profitto di arbitraggio», e traduce il nome «un po' brutalmente» con «**batto cassa e porto avanti** il valore finanziario del tempo»: ci si fa dare soldi a prestito e si porta avanti la strategia fino alla scadenza (slide 11; transcript [00:09:09]–[00:10:55]).
**Opzione:** Se F > S · fattore di capitalizzazione; il profitto privo di rischio è F - S · fattore di capitalizzazione.
**Distrattori:**
- Se F < S · fattore di capitalizzazione; il profitto privo di rischio è S · fattore di capitalizzazione - F.
- Uno swap: chi fa un mutuo a tasso fisso ha implicitamente comprato uno swap, perché in natura il tasso d'interesse è variabile.
- L'Euribor, ossia il tasso applicato ai prestiti interbancari non collateralizzati con scadenza da 1 a 12 mesi.

**D:** ⚠️ Quali operazioni si fanno oggi nella strategia cash and carry, nell'ordine della slide?
**R:** «Se F > S · fattore di capitalizzazione — **Oggi**: **Vendo un contratto futures**; **Prendo a prestito S** fino alla scadenza T al tasso d'interesse r; **Acquisto a pronti il titolo (-S)**» (slide 11). Il docente: «se io oggi vado a vendere un future prendo a prestito la quantità S fino alla scadenza T grande al tasso di interesse R vado ad acquistare quindi a pronti il titolo» (transcript [00:09:09]–[00:09:59]). ⚠️ Si **vende** il futures, che vale di più, e si **compra** il titolo.
**Opzione:** Vendo un contratto futures; prendo a prestito S fino alla scadenza T al tasso d'interesse r; acquisto a pronti il titolo (-S).
**Distrattori:**
- Acquisto un contratto futures; prendo a prestito S fino alla scadenza T al tasso d'interesse r; acquisto a pronti il titolo (-S).
- Il valore di mercato del contratto alla data t, determinato come la differenza tra i flussi di pagamento, attualizzati alla data t, a carico delle due gambe dello swap.
- Un accordo per lo scambio di flussi monetari in base a condizioni legate al valore del sottostante (e.g. tasso d'interesse, valute) e ad una frequenza periodica prestabilita fino alla data di scadenza.

**D:** ⚠️ In quale caso si applica la strategia di arbitraggio reverse cash and carry, e quale profitto privo di rischio dà?
**R:** Slide 12, «Strategia di arbitraggio: reverse cash and carry»: «Se **F < S · fattore di capitalizzazione**». Al tempo T: «Pago F, ricevo S · fattore di capitalizzazione (S + interessi) e ottengo un profitto privo di rischio pari a: **S · fattore di capitalizzazione - F**». Per il docente si chiama reverse perché è la strategia opposta al cash and carry: la cassa ottenuta dalla vendita dell'azione «viene portata a redditività fino alla scadenza» (slide 12; transcript [00:10:55]–[00:12:58]).
**Opzione:** Se F < S · fattore di capitalizzazione; il profitto privo di rischio è S · fattore di capitalizzazione - F.
**Distrattori:**
- Se F > S · fattore di capitalizzazione; il profitto privo di rischio è F - S · fattore di capitalizzazione.
- A un'esigenza di equità del contratto: al momento della stipula la ripartizione delle alee tra le due controparti è simmetrica.
- In base all'effettivo andamento del sottostante, una delle due parti sarà a credito e l'altra sarà a debito nei confronti della controparte.

**D:** ⚠️ Quali operazioni si fanno oggi nella strategia reverse cash and carry, nell'ordine della slide?
**R:** «Se F < S · fattore di capitalizzazione — **Oggi**: **Acquisto un contratto futures**; **Vendo a pronti il titolo (+S)**; **Investo S** fino alla scadenza T al tasso d'interesse r» (slide 12). Il docente parla di «vendita pronti o vendita allo scoperto» del titolo, che genera «un ingresso di capitale» da investire fino alla scadenza T al tasso r (transcript [00:11:24]–[00:12:26]). ⚠️ Rispetto al cash and carry il prestito diventa un **investimento**.
**Opzione:** Acquisto un contratto futures; vendo a pronti il titolo (+S); investo S fino alla scadenza T al tasso d'interesse r.
**Distrattori:**
- Acquisto un contratto futures; vendo a pronti il titolo (+S); prendo a prestito S fino alla scadenza T al tasso d'interesse r.
- Il valore attuale al tempo t=0 dei flussi di pagamenti attesi a carico della gamba variabile e quello dei flussi di pagamenti a carico della gamba fissa è lo stesso.
- Il tasso fisso R∗ in base a cui si calcolano i pagamenti a carico della gamba fissa dello swap, affinché il fair value dell'IRS alla data di stipula sia pari a zero.

**D:** ⚠️ Che cosa comporta, nell'esempio della vendita di un futures sul BTP, il fatto che il sottostante non sia identificato?
**R:** Slide 13: «Vendita di un Futures sul BTP» → «il sottostante **non** identificato» → «il **Cheapest to Deliver**». Il docente: il BTP «non è identificato nel contratto, è descritto per alcune sue **caratteristiche standardizzate**», quindi l'operatore dovrà identificare il BTP «che è il **più economico** per lui da consegnare», per non perdere risorse finanziarie anche minime (slide 13; transcript [00:12:58]–[00:14:11]). ⚠️ Il transcript dice «cheaper to delivery» e «tipus to delivery»: vale la slide, **Cheapest to Deliver**.
**Opzione:** Che occorre individuare il Cheapest to Deliver, cioè il BTP più economico da consegnare.
**Distrattori:**
- Che occorre consegnare il BTP con scadenza esattamente pari a quella prevista dal contratto.
- Tipicamente lo swap è ingegnerizzato in modo tale che il suo fair value alla data di stipula (t=0) sia nullo.

**D:** ⚠️ Come si calcola il valore di un contratto futures, nell'esempio sul BTP della lezione 04?
**R:** Slide 14: «**Valore contratto: N° ticks · valore ticks · prezzo**» (la slide scrive i prodotti con un asterisco). Per il docente è «la moltiplicazione di tre grandezze»: il numero dei tick, cioè «l'**unità di misura minima di variazione** del valore del contratto», per il valore del tick, per il prezzo del titolo (slide 14; transcript [00:14:11]–[00:14:43]). Il transcript scrive «TX» e «TIC» per tick.
**Opzione:** Valore contratto = N° ticks · valore ticks · prezzo.
**Distrattori:**
- Valore contratto = N° ticks · valore ticks · fattore di conversione.
- Una possibilità di guadagno, cosiddetta strategia di arbitraggio.
- Vendo un contratto futures; prendo a prestito S fino alla scadenza T al tasso d'interesse r; acquisto a pronti il titolo (-S).

**D:** ⚠️ Quanto vale un contratto futures sul BTP con valore del tick pari a 2 €, nell'esempio della lezione 04?
**R:** Slide 14: «Esempio: 1 contratto su BTP – valore tick=2 €» → «**20.000 €**». Il docente lo spiega con **10.000** euro, o punti, investiti in BTP, che «vanno valorizzati 2 euro per ogni punto, per ogni tick e quindi abbiamo che il contratto varrà 20.000 euro» (slide 14; transcript [00:14:43]–[00:15:36]). ⚠️ I 10.000 punti sono solo nel transcript: la slide dà il valore del tick e il risultato.
**Opzione:** 20.000 €.
**Distrattori:**
- 10.000 €.
- 2 €.

**D:** ⚠️ Se il sottostante del futures sul BTP non è identificato e si possono consegnare più BTP, come si sceglie quale consegnare?
**R:** Slide 15: «il sottostante **non** identificato» → «È possibile consegnare **una serie di BTP identificati per data di scadenza**» → «Quale scegliere?». Slide 16: «… confrontare i BTP» → «**tramite un fattore di conversione**». Il docente: il contratto dice che si compra un BTP a 5 anni a una certa data, ma è «difficile che ce ne sia proprio uno che abbia scadenza 5 anni in quella data»; si confrontano i BTP con durata vicina a quella del contratto (slide 15–16; transcript [00:15:36]–[00:16:31]).
**Opzione:** Confrontando i BTP consegnabili, identificati per data di scadenza, tramite un fattore di conversione.
**Distrattori:**
- Confrontando i BTP consegnabili, identificati per data di scadenza, tramite il valore del tick.
- F = S · fattore di capitalizzazione, dove il fattore di capitalizzazione è una funzione del tasso d'interesse r e della durata del futures.
- Quella in cui il prezzo spot è superiore al prezzo futures; per il docente è possibile perché ci sono stati tassi d'interesse nominali negativi, anche su scadenze molto lunghe.

**D:** ⚠️ Come si calcola il fattore di conversione di un BTP, secondo la slide 17 della lezione 04?
**R:** Slide 17, «Il fattore di conversione»: «**f.c. = Prezzo / 100**», con «**Prezzo = ∑_t F_t / (1+i)^t**», la somma dei flussi F_t attualizzati. Il docente: «il prezzo del BTP infatti è la sommatoria dei flussi di cassa diviso il valore finanziario del tempo», con i flussi attualizzati in base alla struttura a termine sulle varie scadenze (slide 17; transcript [00:17:45]–[00:18:04]). ⚠️ Qui F_t indica i flussi del titolo, non il prezzo futures. La slide non definisce i.
**Opzione:** f.c. = Prezzo / 100, con Prezzo = ∑_t F_t / (1+i)^t
**Distrattori:**
- f.c. = 100 / Prezzo, con Prezzo = ∑_t F_t / (1+i)^t
- Se F < S · fattore di capitalizzazione; il profitto privo di rischio è S · fattore di capitalizzazione - F.
- 20.000 €.

**D:** ⚠️ Che cosa rappresenta il valore 100 nella formula del fattore di conversione?
**R:** Slide 17: «**100 è il valore di un titolo che paga un flusso cedolare pari a quello previsto dalla curva dei tassi d'interesse in quell'istante**». L'esempio del docente: se il tasso di interesse a 5 anni annuale è il **5%** e un BTP a durata quinquennale paga ogni anno una cedola del **5%**, oggi «varrà esattamente 100%»; in generale un BTP vale 100 quando il valore scontato delle cedole e del rimborso riflette «perfettamente la curva dei tassi di interesse» (slide 17; transcript [00:16:31]–[00:17:45]).
**Opzione:** Il valore di un titolo che paga un flusso cedolare pari a quello previsto dalla curva dei tassi d'interesse in quell'istante.
**Distrattori:**
- Il valore di un titolo che paga un flusso cedolare superiore a quello previsto dalla curva dei tassi d'interesse in quell'istante.
- Che occorre individuare il Cheapest to Deliver, cioè il BTP più economico da consegnare.
- Quella in cui il prezzo futures è superiore al prezzo spot e converge verso il prezzo spot avvicinandosi alla scadenza.

**D:** Che cosa esprime il fattore di conversione, per il docente della lezione 04?
**R:** Il docente: il fattore di conversione «esprime il **differenziale tra 100**, che vuol dire la redditività esatta della curva dei tassi, e l'**extra o il sottorendimento** che dà quel BTP rispetto alla curva dei tassi assegnata oggi» (transcript [00:17:54]–[00:18:19]). ⚠️ La slide 17 lo scrive come **rapporto**, f.c. = Prezzo / 100, non come differenza: per la formula vale la slide.
**Opzione:** Il differenziale tra 100, cioè la redditività esatta della curva dei tassi, e l'extra o il sottorendimento che quel BTP dà rispetto alla curva dei tassi.
**Distrattori:**
- Il differenziale tra 100, cioè la redditività esatta della curva dei tassi, e l'extra o il sottorendimento che quel BTP dà rispetto al prezzo futures quotato.
- Acquisto un contratto futures; vendo a pronti il titolo (+S); investo S fino alla scadenza T al tasso d'interesse r.
- 20.000 €.

**D:** ⚠️ Quali due grandezze si confrontano nella scelta del BTP da consegnare, secondo le slide 18–19 della lezione 04?
**R:** Slide 18, «La scelta»: una bilancia fra «**Ciò che devo prendere dal mercato**» e «**Ciò che devo consegnare**». Slide 19, «… in formule»: «**Quoted futures price · F.C. + interessi da ratei**» contro «**Cash price = Quoted price + interessi da ratei**». Il docente: gli interessi da ratei entrano perché chi compra un BTP, per esempio a marzo con una cedola staccata a giugno, deve pagare a chi glielo vende «i primi tre mesi», che cumulano il rateo di interessi («ratio» nel transcript) (slide 18–19; transcript [00:18:19]–[00:19:34]).
**Opzione:** Quoted futures price · F.C. + interessi da ratei, da una parte; cash price = quoted price + interessi da ratei, dall'altra.
**Distrattori:**
- Quoted futures price + interessi da ratei, da una parte; cash price = quoted price · F.C. + interessi da ratei, dall'altra.
- Un accordo per lo scambio di flussi monetari in base a condizioni legate al valore del sottostante (e.g. tasso d'interesse, valute) e ad una frequenza periodica prestabilita fino alla data di scadenza.
- DF(0,t_i) è il fattore di sconto da t_i a t_0 = 0; r_0(t_{i-1},t_i) è il tasso d'interesse per il periodo futuro che va da t_{i-1} a t_i valutato al tempo t_0 = 0; T è la scadenza dell'IRS.

**D:** ⚠️ Quale problema di ottimizzazione individua il BTP da consegnare, semplificando il confronto della slide 19?
**R:** Slide 20, «La scelta — … semplificando»: «**Min_{BTP} (Quoted price - Quoted futures price · F.C.)**», con «BTP» in pedice al minimo. Il docente: si tratta di «andare a ricercare quel BTP che **minimizza** la differenza tra il prezzo quotato e il prezzo futures quotato per il fattore di conversione» (slide 20; transcript [00:19:34]–[00:19:58]). Nel semplificare spariscono gli interessi da ratei, presenti in entrambe le grandezze della slide 19.
**Opzione:** min_{BTP} (quoted price - quoted futures price · F.C.)
**Distrattori:**
- max_{BTP} (quoted price - quoted futures price · F.C.)
- Quoted futures price · F.C. + interessi da ratei, da una parte; cash price = quoted price + interessi da ratei, dall'altra.

**D:** ⚠️ Che cos'è uno swap, secondo la slide 22 della lezione 04?
**R:** Slide 22, «Cos'è uno swap»: «**accordo per lo scambio di flussi monetari**» → «in base a condizioni legate al **valore del sottostante** (e.g. tasso d'interesse, valute)» → «e» → «ad una **frequenza periodica prestabilita** fino alla data di scadenza». Il docente: «uno swap altro non è che un accordo per scambiarsi dei flussi monetari», in base a una regolamentazione data dal contratto (slide 22; transcript [00:20:19]–[00:20:56]).
**Opzione:** Un accordo per lo scambio di flussi monetari in base a condizioni legate al valore del sottostante (e.g. tasso d'interesse, valute) e ad una frequenza periodica prestabilita fino alla data di scadenza.
**Distrattori:**
- Un accordo per lo scambio di flussi monetari in base a condizioni legate al valore del sottostante (e.g. tasso d'interesse, valute) e a date scelte di volta in volta dalle parti fino alla data di scadenza.
- F < E(S_T) se gli speculatori sono lunghi e gli hedgers sono corti; F > E(S_T) se gli speculatori sono corti e gli hedgers sono lunghi.
- Che occorre individuare il Cheapest to Deliver, cioè il BTP più economico da consegnare.

**D:** ⚠️ Qual è la finalità principale di uno swap, secondo la slide 23 della lezione 04?
**R:** Slide 23, «Finalità principale»: «Convertire una passività o un investimento con flussi di cassa di importo **variabile** in una passività o in un investimento con flussi di cassa di importo **fisso**»; «Convertire una passività o un investimento con flussi di cassa di importo **fisso** in una passività o in un investimento con flussi di cassa di importo **variabile**» (slide 23; transcript [00:20:56]–[00:21:22]). ⚠️ Le direzioni sono **due**.
**Opzione:** Convertire una passività o un investimento con flussi di cassa di importo variabile in una passività o in un investimento con flussi di cassa di importo fisso; convertire una passività o un investimento con flussi di cassa di importo fisso in una passività o in un investimento con flussi di cassa di importo variabile.
**Distrattori:**
- Convertire una passività o un investimento con flussi di cassa di importo variabile in una passività o in un investimento con flussi di cassa di importo fisso; mai convertire una passività o un investimento con flussi di cassa di importo fisso in una passività o in un investimento con flussi di cassa di importo variabile.
- Devono convergere, sia in contango sia in backwardation, perché finiscono per identificare il medesimo fenomeno, cioè il prezzo di un'attività finanziaria.
- F = S · fattore di capitalizzazione, dove il fattore di capitalizzazione è una funzione del tasso d'interesse r e della durata del futures.

**D:** ⚠️ Che cosa c'è, per il docente, dietro un mutuo a tasso fisso?
**R:** Il docente: «ogni volta che voi fate un **mutuo a tasso fisso** implicitamente avete **comprato uno swap**, perché in natura il tasso interesse è **variabile**»; qualcuno, «la banca verosimilmente», ha uno swap che consente il tasso fisso. Lo ripete per gli swap di tasso: «sono tantissimi mutui a tasso fisso, dietro al tasso fisso c'è sempre uno swap di tasso» (transcript [00:21:22]–[00:21:43], [00:26:53]). Non è nelle slide.
**Opzione:** Uno swap: chi fa un mutuo a tasso fisso ha implicitamente comprato uno swap, perché in natura il tasso d'interesse è variabile.
**Distrattori:**
- Uno swap: chi fa un mutuo a tasso variabile ha implicitamente comprato uno swap, perché in natura il tasso d'interesse è fisso.
- Prezzo spot + valore tempo - eventuali dividendi = prezzo futures, cioè S + r - δ = F.
- Il valore di un titolo che paga un flusso cedolare pari a quello previsto dalla curva dei tassi d'interesse in quell'istante.

**D:** ⚠️ Come sono determinate le somme pagate dalle due controparti di uno swap, secondo la slide 24 della lezione 04?
**R:** Slide 24: «Le somme pagate da una delle due controparti dello swap sono di importo **variabile**, legato all'andamento di mercato del sottostante, mentre quelle pagate dall'altra controparte sono di importo **fisso** e predeterminato in base alle prospettive di andamento futuro del sottostante durante la vita del contratto valutate con le informazioni disponibili **alla data di stipula**». Il docente: visti oggi, quei flussi futuri «devono essere **probabilisticamente equivalenti**», perché nello swap equo «le parti teoricamente non si pagano nulla» (slide 24; transcript [00:21:43]–[00:22:49]).
**Opzione:** Quelle di una controparte sono di importo variabile, legato all'andamento di mercato del sottostante; quelle dell'altra sono di importo fisso e predeterminato in base alle prospettive di andamento futuro del sottostante durante la vita del contratto, valutate con le informazioni disponibili alla data di stipula.
**Distrattori:**
- Quelle di una controparte sono di importo variabile, legato all'andamento di mercato del sottostante; quelle dell'altra sono di importo fisso e predeterminato in base alle prospettive di andamento futuro del sottostante durante la vita del contratto, valutate con le informazioni disponibili alla data di scadenza.
- Una possibilità di guadagno, cosiddetta strategia di arbitraggio.
- Chi specula vuole guadagnare, non coprirsi dai rischi, e tende a vendere, fra futures e spot, l'attività che nelle sue aspettative ha il valore maggiore.

**D:** ⚠️ Come si chiamano l'insieme degli importi variabili e l'insieme degli importi fissi di uno swap?
**R:** Slide 25, «Terminologia»: «L'insieme degli importi **variabili** del contratto è detto **gamba variabile (floating leg)** dello swap»; «L'insieme degli importi **fissi** del contratto è detto **gamba fissa (fixed leg)** dello swap» (slide 25; transcript [00:22:49]–[00:23:06]).
**Opzione:** Gamba variabile (floating leg) l'insieme degli importi variabili; gamba fissa (fixed leg) l'insieme degli importi fissi.
**Distrattori:**
- Gamba variabile (fixed leg) l'insieme degli importi variabili; gamba fissa (floating leg) l'insieme degli importi fissi.
- Valore contratto = N° ticks · valore ticks · prezzo.
- f.c. = Prezzo / 100, con Prezzo = ∑_t F_t / (1+i)^t

**D:** ⚠️ Come si definisce il valore equo (fair value) di uno swap a una certa data t?
**R:** Slide 25: «Il valore di mercato del contratto ad una certa data t è detto **valore equo (fair value)** ed è determinato come la **differenza** tra i flussi di pagamento, **attualizzati alla data t**, a carico delle due gambe dello swap». Il docente: se le gambe osservate oggi sono uguali il valore equo è zero, se sono sbilanciate genera un valore; e se una gamba vale più dell'altra, il valore più alto genera, per chi lo riceve, il pagamento di una quantità a favore della controparte (slide 25; transcript [00:23:06]–[00:23:46], [00:25:31]).
**Opzione:** Il valore di mercato del contratto alla data t, determinato come la differenza tra i flussi di pagamento, attualizzati alla data t, a carico delle due gambe dello swap.
**Distrattori:**
- Il valore di mercato del contratto alla data t, determinato come la somma dei flussi di pagamento, attualizzati alla data t, a carico delle due gambe dello swap.
- Quella in cui il prezzo futures è superiore al prezzo spot e converge verso il prezzo spot avvicinandosi alla scadenza.
- min_{BTP} (quoted price - quoted futures price · F.C.)

**D:** ⚠️ Quanto vale tipicamente il fair value di uno swap alla data di stipula?
**R:** Slide 26, ripresa nelle slide 27–28, «Aspetti chiave»: «**Tipicamente** lo swap è ingegnerizzato in modo tale che il suo fair value alla data di stipula (**t=0**) sia **nullo**» (slide 26; transcript [00:23:46]–[00:24:00], dove l'ASR scrive «Logisticamente»). Il docente: il tasso fisso esprime allora «una **media** sull'orizzonte temporale del tasso variabile, media ponderata osservata oggi dal punto di vista probabilistico» ([00:24:00]–[00:24:25]).
**Opzione:** Tipicamente lo swap è ingegnerizzato in modo tale che il suo fair value alla data di stipula (t=0) sia nullo.
**Distrattori:**
- Tipicamente lo swap è ingegnerizzato in modo tale che il suo fair value alla data di scadenza (t=T) sia nullo.
- Quella in cui il prezzo spot è superiore al prezzo futures; per il docente è possibile perché ci sono stati tassi d'interesse nominali negativi, anche su scadenze molto lunghe.
- Confrontando i BTP consegnabili, identificati per data di scadenza, tramite un fattore di conversione.

**D:** ⚠️ A quale esigenza risponde il fair value nullo dello swap alla stipula, secondo la lezione 04?
**R:** Slide 27: «Questa caratteristica risponde ad un'esigenza di “**equità**” del contratto, nel senso che al momento della stipula **la ripartizione delle alee tra le due controparti è simmetrica**». Il docente: se il contratto è equo «l'alea è correttamente ripartita tra le parti», e pagare il fisso e ricevere il variabile, o il contrario, «dal punto di vista probabilistico oggi è la stessa identica cosa» (slide 27; transcript [00:24:25]–[00:24:49]).
**Opzione:** A un'esigenza di equità del contratto: al momento della stipula la ripartizione delle alee tra le due controparti è simmetrica.
**Distrattori:**
- A un'esigenza di equità del contratto: al momento della stipula la ripartizione delle alee tra le due controparti è asimmetrica.
- Il prezzo spot è il prezzo attuale, corrente; il prezzo futures è il prezzo ad una data scadenza futura: la differenza è collegata al tempo, che ha un valore finanziario.
- Vendo un contratto futures; prendo a prestito S fino alla scadenza T al tasso d'interesse r; acquisto a pronti il titolo (-S).

**D:** ⚠️ Come si riformula, «in altri termini», il fair value nullo di uno swap alla stipula?
**R:** Slide 28: «In altri termini, il **valore attuale al tempo t=0** dei flussi di pagamenti attesi a carico della gamba variabile e quello dei flussi di pagamenti a carico della gamba fissa è **lo stesso**». Il docente: «E se così non fosse, allora il fair value non è più nullo» (slide 28; transcript [00:25:08]–[00:25:31]).
**Opzione:** Il valore attuale al tempo t=0 dei flussi di pagamenti attesi a carico della gamba variabile e quello dei flussi di pagamenti a carico della gamba fissa è lo stesso.
**Distrattori:**
- Il valore nominale complessivo dei flussi di pagamenti attesi a carico della gamba variabile e quello dei flussi di pagamenti a carico della gamba fissa è lo stesso.
- Acquisto un contratto futures; vendo a pronti il titolo (+S); investo S fino alla scadenza T al tasso d'interesse r.
- Il differenziale tra 100, cioè la redditività esatta della curva dei tassi, e l'extra o il sottorendimento che quel BTP dà rispetto alla curva dei tassi.

**D:** ⚠️ Che cosa accade alle due parti di uno swap durante la vita del contratto, secondo la slide 29 della lezione 04?
**R:** Slide 29: «Chiaramente, durante la vita del contratto, in base all'**effettivo andamento del sottostante** una delle due parti sarà **a credito** e l'altra sarà **a debito** nei confronti della controparte». Il docente: anche se lo swap parte equo, gli scenari probabilistici cambiano tempo per tempo e il contratto «potrebbe diventare bias»; le parti potranno coprire le perdite con operazioni di copertura, liquidarle oppure chiudere il contratto (slide 29; transcript [00:24:49]–[00:25:08], [00:25:50]–[00:26:36]).
**Opzione:** In base all'effettivo andamento del sottostante, una delle due parti sarà a credito e l'altra sarà a debito nei confronti della controparte.
**Distrattori:**
- In base alle informazioni disponibili alla data di stipula, una delle due parti sarà a credito e l'altra sarà a debito nei confronti della controparte.
- F < E(S_T) se gli speculatori sono lunghi e gli hedgers sono corti; F > E(S_T) se gli speculatori sono corti e gli hedgers sono lunghi.
- Quoted futures price · F.C. + interessi da ratei, da una parte; cash price = quoted price + interessi da ratei, dall'altra.

**D:** ⚠️ Che cosa si scambiano tipicamente le parti di uno swap alle varie scadenze contrattuali?
**R:** Slide 30: «Per tale motivo, alle varie scadenze contrattuali, **tipicamente** le parti si scambiano **solo il differenziale** tra il pagamento dovuto dalla gamba fissa e quello dovuto dalla gamba variabile». Il docente: «Non vado a scambiarmi l'**intero controvalore** perché se io devo dare una parte fissa e tu mi dai una parte variabile ci scambieremo soltanto il differenziale» (slide 30; transcript [00:26:36]–[00:26:53]).
**Opzione:** Tipicamente solo il differenziale tra il pagamento dovuto dalla gamba fissa e quello dovuto dalla gamba variabile.
**Distrattori:**
- Tipicamente l'intero pagamento dovuto dalla gamba fissa e l'intero pagamento dovuto dalla gamba variabile.
- Se F > S · fattore di capitalizzazione; il profitto privo di rischio è F - S · fattore di capitalizzazione.
- f.c. = Prezzo / 100, con Prezzo = ∑_t F_t / (1+i)^t

**D:** ⚠️ Quali swap sono, secondo la lezione 04, senza dubbio i più diffusi su scala globale?
**R:** Slide 31, «Gli Swap sui tassi di interesse — Interest Rate Swaps o IRS»: «Gli **IRS**, cioè gli swap su tassi di interesse, sono **senza dubbio quelli più diffusi su scala globale**». Il docente: stanno dietro a tanti mutui a tasso fisso «ma anche dietro a tante altre operazioni», e «sono in grado di costruire tra l'altro la **curva dei tassi di interesse**» (slide 31; transcript [00:26:53]–[00:27:23]).
**Opzione:** Gli IRS (interest rate swaps), cioè gli swap su tassi di interesse.
**Distrattori:**
- Gli swap su valute.
- Valore contratto = N° ticks · valore ticks · prezzo.

**D:** ⚠️ Qual è nell'Area Euro il principale benchmark per gli interest rate swap, e che cos'è?
**R:** Slide 32: «Nell'Area Euro il **principale benchmark** per i contratti di interest rate swap è l'**Euribor**, ossia il tasso applicato ai **prestiti interbancari non collateralizzati** con scadenza **da 1 a 12 mesi**». Il docente: non collateralizzati, «cioè che non hanno un titolo sotto a garanzia» (slide 32; transcript [00:27:23]–[00:27:42]). ⚠️ Il transcript dice «da 1 a 12 milioni»: errore della trascrizione, la slide dice **mesi**.
**Opzione:** L'Euribor, ossia il tasso applicato ai prestiti interbancari non collateralizzati con scadenza da 1 a 12 mesi.
**Distrattori:**
- L'Euribor, ossia il tasso applicato ai prestiti interbancari collateralizzati con scadenza da 1 a 12 mesi.
- Il prezzo spot è il prezzo attuale, corrente; il prezzo futures è il prezzo ad una data scadenza futura: la differenza è collegata al tempo, che ha un valore finanziario.
- Chi specula vuole guadagnare, non coprirsi dai rischi, e tende a vendere, fra futures e spot, l'attività che nelle sue aspettative ha il valore maggiore.

**D:** ⚠️ Che cos'è il par rate di un interest rate swap, secondo la slide 33 della lezione 04?
**R:** Slide 33: «Affinché il fair value dell'IRS **alla data di stipula sia pari a zero**, il tasso fisso in base a cui si calcolano i pagamenti a carico della **gamba fissa** dello swap è il c.d. **par rate**, ossia il tasso **R∗** che soddisfa la seguente equazione» (la slide scrive R con un asterisco in apice). Il docente: è «il tasso che rende uguale la gamba fissa e la gamba variabile», e il suo calcolo «alla fine non è altro che il calcolo di un **dato medio**» (slide 33; transcript [00:27:42]–[00:28:52]).
**Opzione:** Il tasso fisso R∗ in base a cui si calcolano i pagamenti a carico della gamba fissa dello swap, affinché il fair value dell'IRS alla data di stipula sia pari a zero.
**Distrattori:**
- Il tasso fisso R∗ in base a cui si calcolano i pagamenti a carico della gamba fissa dello swap, affinché il valore attuale della gamba fissa alla data di stipula sia pari a zero.
- Il valore di un titolo che paga un flusso cedolare pari a quello previsto dalla curva dei tassi d'interesse in quell'istante.
- Il differenziale tra 100, cioè la redditività esatta della curva dei tassi, e l'extra o il sottorendimento che quel BTP dà rispetto alla curva dei tassi.

**D:** ⚠️ Quale equazione soddisfa il par rate R∗ di un interest rate swap?
**R:** Slide 33: **R∗ = (∑_{i=1}^{n} DF(0,t_i) · r_0(t_{i-1},t_i)) / (∑_{i=1}^{n} DF(0,t_i))**, con **i = 1, ..., n** e **t_n = T**. Al numeratore i tassi futuri r_0 moltiplicati per i fattori di sconto, al denominatore la somma dei soli fattori di sconto; per il docente è il calcolo di un dato medio (transcript [00:28:47]–[00:29:20]). Le parentesi attorno a numeratore e denominatore sono aggiunte qui: la slide scrive la frazione su due righe.
**Opzione:** R∗ = (∑_{i=1}^{n} DF(0,t_i) · r_0(t_{i-1},t_i)) / (∑_{i=1}^{n} DF(0,t_i)), con i = 1, ..., n e t_n = T
**Distrattori:**
- R∗ = (∑_{i=1}^{n} DF(0,t_i)) / (∑_{i=1}^{n} DF(0,t_i) · r_0(t_{i-1},t_i)), con i = 1, ..., n e t_n = T
- min_{BTP} (quoted price - quoted futures price · F.C.)
- Prezzo spot + valore tempo - eventuali dividendi = prezzo futures, cioè S + r - δ = F.

**D:** ⚠️ Che cosa indicano DF(0,t_i), r_0(t_{i-1},t_i) e T nella formula del par rate?
**R:** Slide 33, «dove»: «**DF(0,t_i)** è il **fattore di sconto da t_i a t_0 = 0**»; «**r_0(t_{i-1},t_i)** è il **tasso d'interesse per il periodo futuro che va da t_{i-1} a t_i valutato al tempo t_0 = 0**»; «**T** è la **scadenza dell'IRS**». Il docente: DF è «il discount factor che ti porta da t_i a t_0» (slide 33; transcript [00:28:52]–[00:29:20]).
**Opzione:** DF(0,t_i) è il fattore di sconto da t_i a t_0 = 0; r_0(t_{i-1},t_i) è il tasso d'interesse per il periodo futuro che va da t_{i-1} a t_i valutato al tempo t_0 = 0; T è la scadenza dell'IRS.
**Distrattori:**
- DF(0,t_i) è il fattore di sconto da t_i a t_0 = 0; r_0(t_{i-1},t_i) è il tasso d'interesse per il periodo futuro che va da t_{i-1} a t_i valutato al tempo t_i; T è la scadenza dell'IRS.
- Devono convergere, sia in contango sia in backwardation, perché finiscono per identificare il medesimo fenomeno, cioè il prezzo di un'attività finanziaria.
- Confrontando i BTP consegnabili, identificati per data di scadenza, tramite un fattore di conversione.

**D:** ⚠️ Quando il prezzo futures è maggiore del prezzo spot, in quale situazione è il mercato, secondo il test della lezione 04 (domanda 1)?
**R:** «**Contango**». Nel grafico della slide 3, «Contango», il prezzo futures sta sopra il prezzo spot e vi converge alla scadenza; per il docente è la situazione coerente con il valore finanziario del tempo ([00:00:53]–[00:01:40]). Il rovescio, lo spot sopra il futures, è la backwardation della slide 4, che fra le opzioni non c'è. ⚠️ **Domanda difettosa**: le opzioni A e D sono identiche, «contango», e la piattaforma segna la D, la seconda delle due. Distrattori del test: «speculazione» e «arbitraggio» sono due delle tre **finalità** dei derivati della lezione 03 (slide 7), non situazioni di mercato: è la classificazione sbagliata.
**Opzione:** Contango.
**Distrattori:**
- Speculazione.
- Arbitraggio.

**D:** ⚠️ Quale relazione fra prezzo futures e prezzo spot vale in assenza di arbitraggio, secondo il test della lezione 04 (domanda 2)?
**R:** «**F = S∗Fattore di capitalizzazione**», la formula della slide 10 alla lettera, dove il fattore di capitalizzazione è una funzione del tasso d'interesse r e della durata del futures. Il docente la enuncia «tralasciando per un attimo il tema dei dividendi» ([00:07:39]–[00:09:09]). L'asterisco della piattaforma e della slide indica il prodotto. Distrattori del test: «F > S∗Fattore di capitalizzazione» è la condizione del **cash and carry** (slide 11) e «F < S∗Fattore di capitalizzazione» quella del **reverse cash and carry** (slide 12), cioè proprio i casi in cui l'arbitraggio esiste: è il segno invertito. «Si può speculare» è un'altra categoria: la speculazione è una finalità dei derivati (lezione 03, slide 7), e non dà la relazione fra i prezzi che la domanda chiede.
**Opzione:** F = S∗Fattore di capitalizzazione
**Distrattori:**
- F > S∗Fattore di capitalizzazione
- F < S∗Fattore di capitalizzazione
- Si può speculare

**D:** ⚠️ Che cos'è lo swap, secondo il test della lezione 04 (domanda 3)?
**R:** «**È l'accordo per lo scambio di flussi monetari**»: è la prima riga della definizione della slide 22, che prosegue «in base a condizioni legate al valore del sottostante (e.g. tasso d'interesse, valute) e ad una frequenza periodica prestabilita fino alla data di scadenza». Per il docente «uno swap altro non è che un accordo per scambiarsi dei flussi monetari» ([00:20:19]). Distrattori del test: «è pari alla somma dei flussi di pagamento, capitalizzati alla data t» storpia la definizione del **fair value** della slide 25, la **differenza** tra i flussi di pagamento **attualizzati** alla data t, e la attribuisce allo swap. «Prevede, tra l'altro, l'acquisto a pronti del titolo sottostante» è un'operazione del **cash and carry** (slide 11). «Prevede, tra l'altro, la vendita a pronti di un contratto Futures» fonde la vendita del futures del cash and carry con la vendita a pronti del titolo del reverse (slide 12). Nessuna delle due è un'operazione dello swap.
**Opzione:** È l'accordo per lo scambio di flussi monetari.
**Distrattori:**
- È pari alla somma dei flussi di pagamento, capitalizzati alla data t.
- Prevede, tra l'altro, la vendita a pronti di un contratto Futures.
- Prevede, tra l'altro, l'acquisto a pronti del titolo sottostante.

**D:** ⚠️ Come si chiama l'insieme degli importi di uno swap, secondo il test della lezione 04 (domanda 4)?
**R:** «**È detto gamba dello swap**». La slide 25 distingue l'insieme degli importi **variabili**, la «gamba variabile (floating leg) dello swap», e quello degli importi **fissi**, la «gamba fissa (fixed leg) dello swap» ([00:22:49]–[00:23:06]): la chiave è giusta ma generica. Distrattori del test: «è pari alla differenza tra i flussi di pagamento equi» storpia la definizione del **valore equo (fair value)** della stessa slide, la differenza tra i flussi di pagamento **attualizzati alla data t** a carico delle due gambe, e la riferisce agli importi. «È pari alla somma dei flussi di pagamento, capitalizzati alla data t» e «prevede, tra l'altro, la vendita a pronti di un contratto Futures» sono gli stessi distrattori della domanda 3.
**Opzione:** È detto gamba dello swap.
**Distrattori:**
- È pari alla somma dei flussi di pagamento, capitalizzati alla data t.
- Prevede, tra l'altro, la vendita a pronti di un contratto Futures.
- È pari alla differenza tra i flussi di pagamento equi.

**D:** ⚠️ Che cos'è l'IRS, secondo il test della lezione 04 (domanda 5)?
**R:** «**o Interest Rate Swap è lo swap su tassi di interessi**», con «interessi» della piattaforma per «interesse». La slide 31, «Gli Swap sui tassi di interesse — Interest Rate Swaps o IRS»: «Gli IRS, cioè gli swap su tassi di interesse, sono senza dubbio quelli più diffusi su scala globale» ([00:26:53]–[00:27:12]). Distrattori del test: tutti e tre definiscono l'IRS, che è un contratto, come un **tasso**. «È il tasso fisso in corrispondenza del fair value» e «è il tasso fisso in corrispondenza del tasso variabile» storpiano il **par rate** della slide 33, il tasso fisso R∗ che rende nullo il fair value dell'IRS alla data di stipula, per il docente «il tasso che rende uguale la gamba fissa e la gamba variabile» ([00:28:52]): è la definizione di un'altra categoria. «È il tasso variabile che prevede il fair value del contratto sempre nullo» capovolge fisso in variabile e aggiunge un quantificatore assoluto: il fair value è nullo «tipicamente» alla stipula (slide 26), e durante la vita del contratto una parte è a credito e l'altra a debito (slide 29).
**Opzione:** o Interest Rate Swap è lo swap su tassi di interessi
**Distrattori:**
- è il tasso fisso in corrispondenza del fair value
- è il tasso variabile che prevede il fair value del contratto sempre nullo
- è il tasso fisso in corrispondenza del tasso variabile

## Lezione 05 — Strumenti Derivati 3 - Opzioni

**D:** Che cos'è un'opzione, secondo la lezione 05?
**R:** Slide 3, «Cos'è un'opzione»: il **diritto** di **acquistare (call)** o **vendere (put)** «Titoli ad un dato prezzo (**strike**)» e «**ad** una certa scadenza (**Europee**)» o «**entro** una certa scadenza (**Americane**)». Il docente: «l'opzione prevede un **premio**, l'opzione è proprio collegata al concetto del premio. Io pago un premio perché ho un'opzione in mano, ho la possibilità di fare qualcosa»; il prezzo di acquisto fissato oggi «è il **prezzo strike**» (slide 3; transcript [00:00:27]–[00:01:10]). ⚠️ È un **diritto**, non un obbligo.
**Opzione:** Il diritto di acquistare (call) o vendere (put) titoli ad un dato prezzo (strike) e ad una certa scadenza (europee) o entro una certa scadenza (americane).
**Distrattori:**
- L'obbligo di acquistare (call) o vendere (put) titoli ad un dato prezzo (strike) e ad una certa scadenza (europee) o entro una certa scadenza (americane).
- Il payoff rettificato per il premio, pagato da chi compra e incassato da chi vende; la scommessa è sul sottostante, la variabile aleatoria, perché lo strike è fisso.
- Il posizionamento relativo del valore corrente dell'asset sottostante S rispetto al prezzo di esercizio (strike) K; è strettamente legata al valore intrinseco.

**D:** ⚠️ Che cosa distingue un'opzione europea da un'opzione americana, secondo la lezione 05?
**R:** Slide 3: il diritto vale «**ad** una certa scadenza (**Europee**)» oppure «**entro** una certa scadenza (**Americane**)». Il docente: la possibilità di comprare «ad una certa scadenza identificata. E allora l'opzione è una call europea? Oppure entro una certa scadenza, e allora la call è un'americana» (slide 3; transcript [00:00:42]–[00:01:02]). ⚠️ Per la put il transcript dice «entro una certa scadenza» per entrambe ([00:01:18]): vale la slide.
**Opzione:** Nell'europea il diritto vale ad una certa scadenza, nell'americana entro una certa scadenza.
**Distrattori:**
- Nell'europea il diritto vale entro una certa scadenza, nell'americana ad una certa scadenza.
- Vale 0 se il sottostante sta sotto lo strike K e S-K se il sottostante sta sopra K.
- Dalla somma del valore intrinseco e del valore temporale della stessa.

**D:** ⚠️ Quanto vale il valore intrinseco di una call, secondo la lezione 05?
**R:** Nel grafico «La CALL» (slide 4–6), con il payoff in ordinata e il valore del sottostante in ascissa, il payoff è **0** fino a K e **S-K** oltre K, e la freccia «**Valore intrinseco**» della slide 6 indica sia lo 0 sia il tratto S-K. Il docente: «valore 0 dell'opzione se il sottostante sta a un valore inferiore a k e invece s-k se il sottostante ha un valore maggiore di k, è anche definito **valore intrinseco** dell'opzione» (slide 4–6; transcript [00:01:40]–[00:02:27]). ⚠️ Per la put è il rovescio: K-S sotto lo strike, 0 sopra (slide 10–11).
**Opzione:** Vale 0 se il sottostante sta sotto lo strike K e S-K se il sottostante sta sopra K.
**Distrattori:**
- Vale S-K se il sottostante sta sotto lo strike K e 0 se il sottostante sta sopra K.
- È pari a K-S.
- min(K-S_T,0)

**D:** ⚠️ Che cos'è il valore temporale nel grafico della call, e da che cosa nasce secondo il docente della lezione 05?
**R:** La slide 7 aggiunge al payoff la curva del «**Prezzo prima della scadenza**», che sta sopra il valore intrinseco; la slide 8 chiama «**Valore temporale**» l'**area gialla** fra la curva e il valore intrinseco. Il docente: a scadenza la call vale S-K o 0, mentre «prima della scadenza nasce una sorta di elemento di **incertezza** sul valore intrinseco» che dà la curvatura al prezzo; questo, «anche detto **slippage**», «esprime il valore temporale che influenza il prezzo della call» (slide 7–8; transcript [00:02:27]–[00:03:38]). ⚠️ L'area colorata sotto la retta S-K della slide 5 è invece il valore intrinseco.
**Opzione:** È l'area fra la curva del prezzo prima della scadenza e il valore intrinseco: nasce dall'incertezza sul valore intrinseco prima della scadenza.
**Distrattori:**
- È l'area fra la retta S-K del valore intrinseco e l'asse delle ascisse: nasce dall'incertezza sul valore intrinseco prima della scadenza.
- Il payoff rettificato per il premio, pagato da chi compra e incassato da chi vende; la scommessa è sul sottostante, la variabile aleatoria, perché lo strike è fisso.
- Che cosa succede al prezzo dell'opzione se aumenta o si riduce il valore di una variabile; la tabella parte dall'acquisto di una call europea e di una put europea.

**D:** Che cosa accade al valore intrinseco della put prima della scadenza, secondo il docente della lezione 05?
**R:** Le slide 12–13 ripetono per la put la costruzione della call: la curva del «Prezzo prima della scadenza» sta sopra il valore intrinseco, e il «**Valore temporale**» è l'area gialla fra i due. Il docente: «Anche il valore intrinseco della put prima della scadenza può avere una notazione **curvilinea**, cioè l'incertezza del tempo e il suo valore temporale determina lo **slippage** nella definizione del valore intrinseco della put, **similarmente** a quello che abbiamo visto per la call» (slide 12–13; transcript [00:04:21]–[00:04:48]).
**Opzione:** Può avere una notazione curvilinea: l'incertezza del tempo e il suo valore temporale determinano lo slippage, similmente a quanto visto per la call.
**Distrattori:**
- Resta una retta: l'incertezza del tempo e il suo valore temporale determinano lo slippage solo per la call, non per la put.
- Nell'europea il diritto vale ad una certa scadenza, nell'americana entro una certa scadenza.
- Non è casuale: maggiore la dimensione dell'ingranaggio, maggiore la sua rilevanza nell'influenzare la quantificazione del prezzo.

**D:** ⚠️ Come si rappresenta graficamente il premio nei grafici del payoff della lezione 05?
**R:** Le slide 15–16, «Inserimento del premio», spostano l'asse orizzontale **verso l'alto** e colorano in giallo il «**PREMIO**» fra il nuovo asse e il tratto piatto del payoff, per la call e per la put. Il docente: il premio si può rappresentare «come uno **spostamento dell'asse delle ascisse lungo l'ordinata** di una quantità esattamente pari al **valore del premio**» (slide 15–16; transcript [00:05:31]–[00:06:32]). Nell'esempio il premio è prima di 10 euro e poi di 11 ([00:05:59]–[00:06:14]).
**Opzione:** Come uno spostamento dell'asse delle ascisse lungo l'ordinata, verso l'alto, di una quantità esattamente pari al valore del premio.
**Distrattori:**
- Come uno spostamento dell'asse delle ascisse lungo l'ordinata, verso l'alto, di una quantità esattamente pari al prezzo strike K.
- È l'area fra la curva del prezzo prima della scadenza e il valore intrinseco: nasce dall'incertezza sul valore intrinseco prima della scadenza.
- Con il rendimento dell'attività priva di rischio, perché la visione oggi degli eventi futuri deve tenere conto del valore finanziario del tempo.

**D:** ⚠️ Perché le opzioni sono derivati a payoff convesso?
**R:** Slide 17: «Le **opzioni** sono derivati a **payoff convesso** in quanto la controparte **acquirente (buyer)** compra il **diritto** di scegliere se esercitare o meno l'opzione evidentemente in base alla propria convenienza al momento di effettuare la scelta». Il docente: la convessità è la rappresentazione che determina lo slippage rispetto al valore intrinseco, e il buyer sceglie in base alla propria convenienza «anche perché non ha la sfera di cristallo» (slide 17; transcript [00:06:32]–[00:07:08]).
**Opzione:** Perché la controparte acquirente (buyer) compra il diritto di scegliere se esercitare o meno l'opzione, evidentemente in base alla propria convenienza al momento di effettuare la scelta.
**Distrattori:**
- Perché la controparte venditrice (seller) acquista il diritto di scegliere se esercitare o meno l'opzione, evidentemente in base alla propria convenienza al momento di effettuare la scelta.
- Perché quando un dividendo viene staccato il prezzo dell'azione scende: il dividendo ha levato cassa e valore alla società.
- Al crescere del prezzo corrente del sottostante S il valore della Euro Call aumenta e quello della Euro Put si riduce.

**D:** ⚠️ Chi paga il premio di un'opzione, a chi, quando, e a che cosa è pari?
**R:** Slide 18: «Per tale motivo, il **buyer** paga al venditore (**seller**) un **premio** alla **data di stipula** che è pari al **valore equo (fair value)** dell'opzione a quella data». «Per tale motivo» rinvia alla slide 17: il buyer compra il diritto di scegliere se esercitare. Il docente: «il prezzo che sta pagando deve essere un prezzo fair» (slide 18; transcript [00:08:47]–[00:09:22]).
**Opzione:** Il buyer paga al venditore (seller) un premio alla data di stipula, pari al valore equo (fair value) dell'opzione a quella data.
**Distrattori:**
- Il seller paga all'acquirente (buyer) un premio alla data di stipula, pari al valore equo (fair value) dell'opzione a quella data.
- Il diritto di acquistare (call) o vendere (put) titoli ad un dato prezzo (strike) e ad una certa scadenza (europee) o entro una certa scadenza (americane).
- Che cosa succede al prezzo dell'opzione se aumenta o si riduce il valore di una variabile; la tabella parte dall'acquisto di una call europea e di una put europea.

**D:** ⚠️ A che cosa è pari, intuitivamente, il premio di un'opzione?
**R:** Slide 19, sottolineata: «Intuitivamente, il premio dell'opzione è pari al valore, **attualizzato alla data iniziale (t=0)**, dei possibili payoff del contratto, ciascuno **pesato per la relativa probabilità di accadimento**». Il docente: i possibili payoff sono «i possibili andamenti futuri del sottostante rispetto al prezzo strike» (slide 19; transcript [00:09:51]–[00:10:20]).
**Opzione:** Al valore, attualizzato alla data iniziale (t=0), dei possibili payoff del contratto, ciascuno pesato per la relativa probabilità di accadimento.
**Distrattori:**
- Al valore, capitalizzato alla data di scadenza (t=T), dei possibili payoff del contratto, ciascuno pesato per la relativa probabilità di accadimento.
- Con il rendimento dell'attività priva di rischio, perché la visione oggi degli eventi futuri deve tenere conto del valore finanziario del tempo.
- Il tasso di interesse e il merito di credito dell'emittente.

**D:** Perché, per il docente della lezione 05, il premio pagato dal buyer deve essere un prezzo fair?
**R:** Il docente: l'acquirente ha una **view** che lo porta a una scelta, «ma dal punto di vista del calcolo delle probabilità il prezzo che sta pagando deve essere un prezzo **fair**, cioè deve essere il prezzo che il **mercato** ritiene che in media oggi sintetizzi i possibili scenari, andamenti futuri» del sottostante rispetto alla formula convessa del payoff. «Altrimenti se ci fosse una non equità del prezzo dal punto di vista delle aspettative di mercato vorrebbe dire che attraverso un'operatività su più mercati si potrebbe realizzare» un **arbitraggio**, che il transcript scrive «prodotto di abitaggio» (transcript [00:08:47]–[00:09:51]). Non è nelle slide.
**Opzione:** Perché deve essere il prezzo che il mercato ritiene sintetizzi in media i possibili scenari futuri del sottostante: altrimenti, operando su più mercati, si potrebbe realizzare un arbitraggio.
**Distrattori:**
- Perché deve essere il prezzo che riflette la view rialzista o ribassista del buyer: altrimenti, operando su più mercati, si potrebbe realizzare un arbitraggio.
- Rialzista se compra una call, ribassista se compra una put; il rialzo o il ribasso dell'azione deve compensare il premio pagato.
- Perché quando un dividendo viene staccato il prezzo dell'azione scende: il dividendo ha levato cassa e valore alla società.

**D:** Con quale rendimento si attualizzano i possibili payoff di un'opzione, e perché, secondo il docente della lezione 05?
**R:** Il docente: «Attualizzato perché l'opzione avrà una scadenza in cui si realizzeranno gli eventi», e la visione oggi di quegli eventi «non può non tenere in conto anche il **valore finanziario del tempo**, perché in finanza, un po' come in fisica, nulla si crea e nulla si distrugge». Chi investe in un'attività priva di rischio deve avere il **rendimento dell'attività priva di rischio**, e quello «diventa il parametro di riferimento per scontare tutti i possibili flussi di cassa» che a scadenza si generano in base a max(S_T-K,0) (transcript [00:10:20]–[00:11:33]). La slide 19 dice solo «attualizzato alla data iniziale (t=0)».
**Opzione:** Con il rendimento dell'attività priva di rischio, perché la visione oggi degli eventi futuri deve tenere conto del valore finanziario del tempo.
**Distrattori:**
- Con il rendimento atteso del sottostante, perché la visione oggi degli eventi futuri deve tenere conto del valore finanziario del tempo.
- Come uno spostamento dell'asse delle ascisse lungo l'ordinata, verso l'alto, di una quantità esattamente pari al valore del premio.
- Dal prezzo futures.

**D:** ⚠️ Quale visione ha, per il docente della lezione 05, l'acquirente speculativo di una call e quello di una put, e che cosa deve considerare?
**R:** Il docente: l'acquirente speculativo «compra l'opzione e decide di pagare un premio perché ha una **visione rialzista** se compra una **call**, **ribassista** se compra una **put**». «La mia propensione a rialzo o a ribasso dovrà sempre considerare il valore del premio»: il rialzo o il ribasso dell'azione deve essere in grado di **compensare il premio pagato** per generare un guadagno (transcript [00:07:08]–[00:08:47]). Non è nelle slide.
**Opzione:** Rialzista se compra una call, ribassista se compra una put; il rialzo o il ribasso dell'azione deve compensare il premio pagato.
**Distrattori:**
- Ribassista se compra una call, rialzista se compra una put; il rialzo o il ribasso dell'azione deve compensare il premio pagato.
- Al crescere della volatilità σ il valore aumenta sia per la Euro Call sia per la Euro Put.
- Non è casuale: maggiore la dimensione dell'ingranaggio, maggiore la sua rilevanza nell'influenzare la quantificazione del prezzo.

**D:** ⚠️ Qual è il payoff a scadenza di una short call?
**R:** Terza riga della tabella «Opzioni Europee — Payoff a scadenza» (slide 20): «Short Call — **min(K-S_T,0)**». Il docente: chi vende una call si impegna a dare le azioni al buyer quando questi eserciterà l'opzione, cioè soltanto quando il valore del sottostante sarà superiore al prezzo strike; per chi ha venduto una call il payoff a scadenza «non è una funzione massimo tra K-S_T e 0, ma è il **minimo** tra K-S_T ... e 0» (slide 20; transcript [00:13:08]–[00:14:06]). ⚠️ Rispetto alla long put, max(K-S_T,0), cambia solo max in min; rispetto alla short put, min(S_T-K,0), si inverte l'argomento.
**Opzione:** min(K-S_T,0)
**Distrattori:**
- min(S_T-K,0)
- max(K-S_T,0)
- max(S_T-K,0)

**D:** ⚠️ Perché, per il docente della lezione 05, vendere una call è molto rischioso, e in che cosa differisce la vendita di una put?
**R:** Il docente: «vendere una call è una cosa molto rischiosa», perché il minimo della funzione «è un valore indefinito»: a scadenza, con uno strike di 10 euro, il sottostante «potrebbe essere 20, 30, 50, 100, 200 euro», e infatti «si dice che vendere una call espone il venditore a un **rischio indefinito**». Nella vendita di una put, invece, «c'è un limite», perché «sotto un certo limite il sottostante non può andare rispetto allo **zero**»: «l'azione sotto zero non può andare» (transcript [00:15:54]–[00:18:14]). Non è nelle slide.
**Opzione:** Vendere una call espone il venditore a un rischio indefinito, perché a scadenza il sottostante può salire indefinitamente; nella vendita di una put c'è un limite, perché il sottostante non può andare sotto zero.
**Distrattori:**
- Vendere una put espone il venditore a un rischio indefinito, perché a scadenza il sottostante può salire indefinitamente; nella vendita di una call c'è un limite, perché il sottostante non può andare sotto zero.
- Perché deve essere il prezzo che il mercato ritiene sintetizzi in media i possibili scenari futuri del sottostante: altrimenti, operando su più mercati, si potrebbe realizzare un arbitraggio.
- Al crescere del prezzo di esercizio K il valore della Euro Call si riduce e quello della Euro Put aumenta.

**D:** Qual è, per il docente della lezione 05, il risultato finanziario delle posizioni in opzioni, e su che cosa scommettono le parti?
**R:** Il docente: chi ha venduto la call o la put ha **ricevuto** il premio, chi le ha comprate lo ha **pagato**, «e quindi il risultato finanziario è il **payoff rettificato** come abbiamo visto nel grafico per il premio che viene pagato o che viene incassato». Le quattro relazioni della slide 20 qualificano le esposizioni delle parti a «una scommessa implicita sul valore del **sottostante** che è la **variabile aleatoria** perché il prezzo strike è **fisso**» (transcript [00:15:04]–[00:15:54]).
**Opzione:** Il payoff rettificato per il premio, pagato da chi compra e incassato da chi vende; la scommessa è sul sottostante, la variabile aleatoria, perché lo strike è fisso.
**Distrattori:**
- Il payoff rettificato per il premio, incassato da chi compra e pagato da chi vende; la scommessa è sul sottostante, la variabile aleatoria, perché lo strike è fisso.
- Può avere una notazione curvilinea: l'incertezza del tempo e il suo valore temporale determinano lo slippage, similmente a quanto visto per la call.
- Il buyer paga al venditore (seller) un premio alla data di stipula, pari al valore equo (fair value) dell'opzione a quella data.

**D:** ⚠️ Che cosa afferma la parità put-call-forward?
**R:** Slide 21: «Il portafoglio composto da una **long call** e da una **short put** aventi lo stesso sottostante e lo stesso prezzo di esercizio **K** replica perfettamente una **posizione lunga** in un contratto **forward** sul medesimo sottostante nella quale il prezzo a termine sia posto **pari a K**». Il docente: «La call realizza la parte **positiva** del forward rispetto allo strike e la put rappresenta la parte **negativa**» (slide 21; transcript [00:18:14]–[00:19:34]). ⚠️ Long **call** + short **put**, non il contrario.
**Opzione:** Il portafoglio composto da una long call e da una short put aventi lo stesso sottostante e lo stesso prezzo di esercizio K replica perfettamente una posizione lunga in un contratto forward sul medesimo sottostante nella quale il prezzo a termine sia posto pari a K.
**Distrattori:**
- Il portafoglio composto da una long put e da una short call aventi lo stesso sottostante e lo stesso prezzo di esercizio K replica perfettamente una posizione lunga in un contratto forward sul medesimo sottostante nella quale il prezzo a termine sia posto pari a K.
- Il prezzo di esercizio (K); il prezzo corrente del sottostante (S); la volatilità del prezzo del sottostante (σ); la vita residua del contratto (T-t); il tasso d'interesse (r); i dividendi attesi (δ).
- Il diritto di acquistare (call) o vendere (put) titoli ad un dato prezzo (strike) e ad una certa scadenza (europee) o entro una certa scadenza (americane).

**D:** ⚠️ Quando vale la parità put-call-forward, e con riferimento a quale data si verifica agevolmente?
**R:** Slide 21: «La parità put-call-forward vale **in qualsiasi momento** della vita dei contratti derivati sopra menzionati e può essere agevolmente verificata **con riferimento alla data di scadenza**». Per questo la slide 22 la dimostra «per t=T». Il docente: «vale in qualsiasi momento della vita dei contratti derivati e può essere agevolmente verificata» (slide 21–22; transcript [00:19:06]). ⚠️ Si verifica alla scadenza, ma non vale **solo** alla scadenza.
**Opzione:** Vale in qualsiasi momento della vita dei contratti derivati sopra menzionati e può essere agevolmente verificata con riferimento alla data di scadenza.
**Distrattori:**
- Vale solo alla data di scadenza dei contratti derivati sopra menzionati, e può essere agevolmente verificata con riferimento a quella data.
- Dalla somma del valore intrinseco e del valore temporale della stessa.
- Il posizionamento relativo del valore corrente dell'asset sottostante S rispetto al prezzo di esercizio (strike) K; è strettamente legata al valore intrinseco.

**D:** ⚠️ Come si dimostra, per t=T, la parità put-call-forward?
**R:** Slide 22, «Dimostrazione per t=T»: il payoff di un portafoglio formato da una long call e da una short put con il medesimo strike è «**max(S_T-K,0) - max(K-S_T,0)**», «ossia, utilizzando una nota proprietà delle funzioni di minimo e massimo: **= max(S_T-K,0) + min(S_T-K,0)**», «da cui, ricordando che max(x,0)+min(x,0)=x, segue: **= S_T-K**», «c.v.d.». Per il docente, per passare dal massimo al minimo basta cambiare segno e invertire l'ordine dell'argomento, e S_T-K «non è altro che la rappresentazione della nostra posizione forward» (slide 22; transcript [00:19:34]–[00:20:53]).
**Opzione:** max(S_T-K,0) - max(K-S_T,0) = max(S_T-K,0) + min(S_T-K,0) = S_T-K
**Distrattori:**
- max(S_T-K,0) - max(K-S_T,0) = max(S_T-K,0) + min(S_T-K,0) = K-S_T
- Var(Z)=Var(X)+Var(Y)+2cov(X,Y)
- Y=[X-E(X)]/σ_X

**D:** ⚠️ Quale relazione fra le funzioni di massimo e di minimo chiude la dimostrazione della parità put-call-forward?
**R:** Slide 22: «da cui, ricordando che **max(x,0)+min(x,0)=x**, segue: = S_T-K». Il docente: «il massimo tra x e 0 e il minimo tra x e 0 sommati è uguale a x» (slide 22; transcript [00:20:34]). Il passaggio precedente usa un'altra proprietà: -max(K-S_T,0) = min(S_T-K,0), cioè si cambia segno e si inverte l'ordine dell'argomento ([00:20:08]).
**Opzione:** max(x,0)+min(x,0)=x
**Distrattori:**
- max(x,0)-min(x,0)=x
- min(K-S_T,0)
- È pari a K-S.

**D:** ⚠️ Da che cosa è dato, in ogni momento prima della scadenza, il valore di un'opzione?
**R:** Slide 23: «In ogni momento prima della scadenza, il valore di un'opzione è dato dalla **somma** del valore intrinseco e del valore temporale della stessa». Il docente: «il prezzo di un'opzione non è altro che ... il valore intrinseco dell'opzione **più** il valore temporale della stessa» (slide 23; transcript [00:20:53]–[00:21:23]).
**Opzione:** Dalla somma del valore intrinseco e del valore temporale della stessa.
**Distrattori:**
- Dalla differenza fra il valore intrinseco e il valore temporale della stessa.
- Può avere una notazione curvilinea: l'incertezza del tempo e il suo valore temporale determinano lo slippage, similmente a quanto visto per la call.
- Dal prezzo futures.

**D:** ⚠️ Che cosa riflette la moneyness di un'opzione, e a quale concetto è strettamente legata?
**R:** Slide 23: «Il concetto di **valore intrinseco** è strettamente legato a quello di **moneyness** dell'opzione che riflette il **posizionamento relativo** del valore corrente dell'asset sottostante **S** rispetto al prezzo di esercizio (strike) dell'opzione, denotato con **K**». Il docente parla di «rapporto esistente tra il prezzo del sottostante e il prezzo strike» (slide 23; transcript [00:21:23]–[00:21:42]).
**Opzione:** Il posizionamento relativo del valore corrente dell'asset sottostante S rispetto al prezzo di esercizio (strike) K; è strettamente legata al valore intrinseco.
**Distrattori:**
- Il posizionamento relativo del valore corrente dell'asset sottostante S rispetto al prezzo di esercizio (strike) K; è strettamente legata al valore temporale.
- Al valore, attualizzato alla data iniziale (t=0), dei possibili payoff del contratto, ciascuno pesato per la relativa probabilità di accadimento.
- Il tasso di interesse e il merito di credito dell'emittente.

**D:** ⚠️ Quando una call è in the money, at the money e out of the money?
**R:** Tabella della slide 24, riga «Call»: **in the money (ITM)** S_t>K, **at the money (ATM)** S_t=K, **out of the money (OTM)** S_t<K. Il docente: la call è in the money quando il prezzo del sottostante è maggiore dello strike, «cioè genera risultato positivo»; at the money quando è uguale, «identico sia per la call che per la put»; out of the money quando è inferiore (slide 24; transcript [00:21:44]–[00:23:08]). ⚠️ Per la put ITM e OTM si scambiano.
**Opzione:** In the money (ITM) se S_t>K, at the money (ATM) se S_t=K, out of the money (OTM) se S_t<K.
**Distrattori:**
- In the money (ITM) se S_t<K, at the money (ATM) se S_t=K, out of the money (OTM) se S_t>K.
- Diminuisce all'approssimarsi della scadenza.
- max(x,0)+min(x,0)=x

**D:** ⚠️ Quando una put è in the money, at the money e out of the money?
**R:** Tabella della slide 24, riga «Put»: **in the money (ITM)** S_t<K, **at the money (ATM)** S_t=K, **out of the money (OTM)** S_t>K. Il docente: la put è in the money quando S è minore di K, «perché la long put genera risultato positivo ... quando il sottostante sta sotto lo strike»; è out of the money e «vale zero quando il valore sottostante ha superato il prezzo strike» (slide 24; transcript [00:22:10]–[00:23:33]). ⚠️ È il rovescio della call; at the money è uguale per entrambe.
**Opzione:** In the money (ITM) se S_t<K, at the money (ATM) se S_t=K, out of the money (OTM) se S_t>K.
**Distrattori:**
- In the money (ITM) se S_t>K, at the money (ATM) se S_t=K, out of the money (OTM) se S_t<K.
- max(S_T-K,0) - max(K-S_T,0) = max(S_T-K,0) + min(S_T-K,0) = S_T-K
- max(x,0)+min(x,0)=x

**D:** ⚠️ Quali sono le sei variabili che determinano il valore di un'opzione, nell'ordine della slide?
**R:** Slide 25, «Cosa determina il valore di un'opzione?»: 1) Il prezzo di esercizio (**K**); 2) Il prezzo corrente del sottostante (**S**); 3) La volatilità del prezzo del sottostante (**σ**); 4) La vita residua del contratto (**T-t**); 5) Il tasso d'interesse (**r**); 6) I **dividendi attesi** (**δ**). Il docente le chiama «le sei variabili che quantificano il valore di un'opzione»; r è il tasso «che qualifica il valore finanziario del tempo» (slide 25; transcript [00:23:56]–[00:24:24]). ⚠️ Il premio non è fra le variabili: è il prezzo che ne risulta.
**Opzione:** Il prezzo di esercizio (K); il prezzo corrente del sottostante (S); la volatilità del prezzo del sottostante (σ); la vita residua del contratto (T-t); il tasso d'interesse (r); i dividendi attesi (δ).
**Distrattori:**
- Il prezzo di esercizio (K); il prezzo corrente del sottostante (S); la volatilità del prezzo del sottostante (σ); la vita residua del contratto (T-t); il tasso d'interesse (r); il premio pagato dal buyer.
- Il buyer paga al venditore (seller) un premio alla data di stipula, pari al valore equo (fair value) dell'opzione a quella data.
- È l'area fra la curva del prezzo prima della scadenza e il valore intrinseco: nasce dall'incertezza sul valore intrinseco prima della scadenza.

**D:** Perché i dividendi influiscono sul valore di un'opzione, secondo il docente della lezione 05?
**R:** Il docente: «quando viene distribuito e staccato un dividendo notate che in borsa il giorno dei dividendi il **prezzo dell'azione scende**. Perché? Perché il dividendo ha levato valore alla società, ha levato **cassa** alla società», e il valore dell'azione risente dello stacco (transcript [00:24:24]–[00:24:55]). Per lo stesso motivo nella tabella delle sensitività i dividendi attesi δ hanno segno **-** per la Euro Call e **+** per la Euro Put (slide 33).
**Opzione:** Perché quando un dividendo viene staccato il prezzo dell'azione scende: il dividendo ha levato cassa e valore alla società.
**Distrattori:**
- Perché quando un dividendo viene staccato il prezzo dell'azione sale: il dividendo distribuito accresce il valore dell'azione.
- Al valore, attualizzato alla data iniziale (t=0), dei possibili payoff del contratto, ciascuno pesato per la relativa probabilità di accadimento.
- Come uno spostamento dell'asse delle ascisse lungo l'ordinata, verso l'alto, di una quantità esattamente pari al valore del premio.

**D:** Che cosa indica, per il docente, la dimensione degli ingranaggi nella figura «Cosa determina il valore di un'opzione?»
**R:** Le slide 26–27 mostrano gli ingranaggi «Volatilità», «Interesse», «Strike», «Prezzo sottostante» e «Dividendi» sopra un imbuto, da cui esce il «Prezzo». Il docente: le grandezze vanno viste «come degli ingranaggi che vanno a interagire per definire ... il prezzo dell'opzione», e «la dimensione degli ingranaggi, **non è casuale**»: «maggiore la dimensione di questa figura maggiore è la **rilevanza** di questo ingranaggio per influenzare la quantificazione del prezzo» (slide 26–27; transcript [00:26:03]–[00:26:42]).
**Opzione:** Non è casuale: maggiore la dimensione dell'ingranaggio, maggiore la sua rilevanza nell'influenzare la quantificazione del prezzo.
**Distrattori:**
- È casuale: la dimensione dell'ingranaggio non indica la sua rilevanza nell'influenzare la quantificazione del prezzo.
- Vale in qualsiasi momento della vita dei contratti derivati sopra menzionati e può essere agevolmente verificata con riferimento alla data di scadenza.
- Al crescere della vita residua T-t il valore della Euro Call aumenta; per la Euro Put l'effetto è incerto (?), positivo o negativo a seconda della moneyness.

**D:** Che cosa vuol dire sensitività, e da quale presupposto parte la tabella della lezione 05?
**R:** Il docente: la sensitività «vuol dire aumento il valore di quella variabile, cosa succede al prezzo dell'opzione? Riduco il valore di quella variabile, cosa succede al prezzo dell'opzione?». La tabella delle slide 28–33, con le colonne «Euro Call» e «Euro Put», parte «dal presupposto dell'**acquisto** di una call europea e dell'**acquisto** di una put europea». Le sensitività si studieranno analiticamente con il concetto di **greche** (slide 28; transcript [00:23:33], [00:26:42]–[00:27:18]).
**Opzione:** Che cosa succede al prezzo dell'opzione se aumenta o si riduce il valore di una variabile; la tabella parte dall'acquisto di una call europea e di una put europea.
**Distrattori:**
- Che cosa succede al prezzo dell'opzione se aumenta o si riduce il valore di una variabile; la tabella parte dalla vendita di una call europea e di una put europea.
- Vale in qualsiasi momento della vita dei contratti derivati sopra menzionati e può essere agevolmente verificata con riferimento alla data di scadenza.
- Il prezzo di esercizio (K); il prezzo corrente del sottostante (S); la volatilità del prezzo del sottostante (σ); la vita residua del contratto (T-t); il tasso d'interesse (r); i dividendi attesi (δ).

**D:** ⚠️ Come variano il valore della Euro Call e quello della Euro Put al crescere del prezzo di esercizio K?
**R:** Riga K della tabella (slide 28–33): Euro Call **-**, Euro Put **+**. Il docente: «più il prezzo strike aumenta, più il sottostante deve camminare, deve crescere per fare in modo che la call diventi in the money», quindi il prezzo della call si riduce; per la put, più sale lo strike più aumentano gli eventi con valore intrinseco positivo, K-S, e «maggiore il valore dello strike maggiore è il valore della put» (transcript [00:27:18]–[00:28:34]).
**Opzione:** Al crescere del prezzo di esercizio K il valore della Euro Call si riduce e quello della Euro Put aumenta.
**Distrattori:**
- Al crescere del prezzo di esercizio K il valore della Euro Call aumenta e quello della Euro Put si riduce.
- Perché deve essere il prezzo che il mercato ritiene sintetizzi in media i possibili scenari futuri del sottostante: altrimenti, operando su più mercati, si potrebbe realizzare un arbitraggio.
- Vendere una call espone il venditore a un rischio indefinito, perché a scadenza il sottostante può salire indefinitamente; nella vendita di una put c'è un limite, perché il sottostante non può andare sotto zero.

**D:** ⚠️ Come variano il valore della Euro Call e quello della Euro Put al crescere del prezzo corrente del sottostante S?
**R:** Riga S della tabella (slide 29–33): Euro Call **+**, Euro Put **-**. Il docente: più il sottostante cresce, più cresce il valore intrinseco S-K e quindi il valore della call, mentre «più il sottostante cresce più si riduce il valore della put perché l'opzione put sta andando **out of the money**» (transcript [00:28:34]–[00:29:25]).
**Opzione:** Al crescere del prezzo corrente del sottostante S il valore della Euro Call aumenta e quello della Euro Put si riduce.
**Distrattori:**
- Al crescere del prezzo corrente del sottostante S il valore della Euro Call si riduce e quello della Euro Put aumenta.
- Perché la controparte acquirente (buyer) compra il diritto di scegliere se esercitare o meno l'opzione, evidentemente in base alla propria convenienza al momento di effettuare la scelta.
- Diminuisce all'approssimarsi della scadenza.

**D:** ⚠️ Come variano il valore della Euro Call e quello della Euro Put al crescere della volatilità σ?
**R:** Riga σ della tabella (slide 30–33): **+** per la Euro Call e **+** per la Euro Put. È l'unica riga con lo **stesso segno** nelle due colonne. Il docente: «call o put che sia», «più è la volatilità, più l'opzione ha valore»; la volatilità determina maggiori oscillazioni del sottostante, cioè «più spazio degli eventi», e più probabilità che la call o la put diventino in the money o «addirittura **deep in the money**». «E quindi il segno è positivo per entrambi» (transcript [00:29:25]–[00:30:08]).
**Opzione:** Al crescere della volatilità σ il valore aumenta sia per la Euro Call sia per la Euro Put.
**Distrattori:**
- Al crescere della volatilità σ il valore aumenta per la Euro Call e si riduce per la Euro Put.
- max(S_T-K,0) - max(K-S_T,0) = max(S_T-K,0) + min(S_T-K,0) = S_T-K
- Perché la controparte acquirente (buyer) compra il diritto di scegliere se esercitare o meno l'opzione, evidentemente in base alla propria convenienza al momento di effettuare la scelta.

**D:** ⚠️ Come variano il valore della Euro Call e quello della Euro Put al crescere della vita residua T-t?
**R:** Riga T-t della tabella (slide 31–33): Euro Call **+**, Euro Put **?**. Il docente: «nel caso della call più tempo ho a disposizione più ho possibilità che si generino dei valori positivi per la mia opzione»; per la put il sottostante non può scendere sotto zero e il massimo guadagno è K-S, quindi il tempo «può avere un **effetto distorsivo**» e, a seconda della moneyness, «un risultato positivo o negativo» (transcript [00:30:08]–[00:31:10]). ⚠️ Il docente apre la riga dicendo «il valore intrinseco ... non ha una connotazione univoca»: la riga della slide è la vita residua.
**Opzione:** Al crescere della vita residua T-t il valore della Euro Call aumenta; per la Euro Put l'effetto è incerto (?), positivo o negativo a seconda della moneyness.
**Distrattori:**
- Al crescere della vita residua T-t il valore della Euro Call aumenta; per la Euro Put si riduce sempre, perché il sottostante non può andare sotto zero.
- Vendere una call espone il venditore a un rischio indefinito, perché a scadenza il sottostante può salire indefinitamente; nella vendita di una put c'è un limite, perché il sottostante non può andare sotto zero.
- Vale 0 se il sottostante sta sotto lo strike K e S-K se il sottostante sta sopra K.

**D:** ⚠️ Come variano il valore della Euro Call e quello della Euro Put al crescere del tasso d'interesse r?
**R:** Riga r della tabella (slide 32–33): Euro Call **+**, Euro Put **-**. Il docente: per la call, che è la possibilità di comprare un'attività finanziaria a una certa scadenza, il tasso, che è il valore finanziario del tempo, «esprime un valore finanziario positivo»; per la put, che è una vendita, «il valore finanziario rema contro», perché rispetto a un investimento privo di rischio si rinuncia alla redditività r (transcript [00:31:10]–[00:32:04]). ⚠️ I segni di r sono quelli di S, opposti a quelli di δ.
**Opzione:** Al crescere del tasso d'interesse r il valore della Euro Call aumenta e quello della Euro Put si riduce.
**Distrattori:**
- Al crescere del tasso d'interesse r il valore della Euro Call si riduce e quello della Euro Put aumenta.
- Rialzista se compra una call, ribassista se compra una put; il rialzo o il ribasso dell'azione deve compensare il premio pagato.
- In the money (ITM) se S_t<K, at the money (ATM) se S_t=K, out of the money (OTM) se S_t>K.

**D:** ⚠️ Come variano il valore della Euro Call e quello della Euro Put al crescere dei dividendi attesi δ?
**R:** Riga δ della tabella (slide 33): Euro Call **-**, Euro Put **+**. Il docente: «il dividendo gioca invece in senso opposto perché il dividendo sottraendo valore sottrae valore»: per la call abbatte il valore dell'azione e la porta verso scenari out o at the money; per la put «è l'esatto opposto», perché se il prezzo scende la put va in the money (transcript [00:32:04]–[00:32:54]). ⚠️ I segni di δ sono quelli di K, opposti a quelli di r.
**Opzione:** Al crescere dei dividendi attesi δ il valore della Euro Call si riduce e quello della Euro Put aumenta.
**Distrattori:**
- Al crescere dei dividendi attesi δ il valore della Euro Call aumenta e quello della Euro Put si riduce.
- In the money (ITM) se S_t>K, at the money (ATM) se S_t=K, out of the money (OTM) se S_t<K.
- Nell'europea il diritto vale ad una certa scadenza, nell'americana entro una certa scadenza.

**D:** ⚠️ Quanto vale il valore intrinseco di un'opzione put, secondo il test della lezione 05 (domanda 1)?
**R:** «**È pari a K-S**». Nel grafico «La PUT» la slide 10 scrive **K-S** nel triangolo del payoff fra 0 e K, e la slide 11 indica come «Valore intrinseco» sia il tratto **K-S**, per S < K, sia lo **0**, per S > K. Il docente lo dice a voce: se il prezzo del sottostante è maggiore dello strike la put ha un valore intrinseco pari a zero, se è inferiore «avremo un valore intrinseco e quindi un potenziale guadagno per chi ha comprato questa put dato da K-S» (transcript [00:03:38]–[00:04:21]). La chiave è giusta ma semplificata: K-S vale quando la put è in the money, S_t < K (slide 24). Distrattori del test: «è pari a S-K» è il valore intrinseco della **call** (slide 5–6; [00:02:05]), un oggetto scambiato; «è sempre minore del valore temporale» è un quantificatore assoluto, smentito dal grafico della slide 13, dove per S molto minore di K il valore temporale si assottiglia mentre K-S cresce; «coincide col valore temporale solo per t < T» è una condizione che né le slide né il transcript contengono.
**Opzione:** È pari a K-S.
**Distrattori:**
- È sempre minore del valore temporale.
- È pari a S-K.
- Coincide col valore temporale solo per t < T.

**D:** ⚠️ Come varia il valore temporale di un'opzione call, secondo il test della lezione 05 (domanda 2)?
**R:** «**Diminuisce all'approssimarsi della scadenza**». ⚠️ La chiave **non è testuale**, né nelle slide né nel transcript: si **deduce**. La slide 8 mostra il valore temporale della call come l'area fra il «prezzo prima della scadenza» e il payoff; il docente dice che a scadenza la call vale S-K o 0, e che il valore temporale nasce dall'incertezza che c'è «prima della scadenza» (transcript [00:02:46]–[00:03:38]). Nella tabella delle slide 31–33 la vita residua T-t ha un **+** per la Euro Call: «più tempo ho a disposizione più ho possibilità che si generino dei valori positivi per la mia opzione» ([00:30:16]). Distrattori del test: «aumenta all'approssimarsi della scadenza» è il **segno invertito**; «è maggiore del suo valore intrinseco» nel grafico della slide 8 vale dove il valore intrinseco è 0, non per S molto maggiore di K, quindi non è una proprietà generale; «è sempre maggiore del valore temporale di un'opzione put» è un quantificatore assoluto senza appoggio nei materiali, dove per la Euro Put la riga T-t porta un **?**.
**Opzione:** Diminuisce all'approssimarsi della scadenza.
**Distrattori:**
- È maggiore del suo valore intrinseco.
- Aumenta all'approssimarsi della scadenza.
- È sempre maggiore del valore temporale di un'opzione put.

**D:** ⚠️ Qual è il pay-off a scadenza di una long call, secondo il test della lezione 05 (domanda 3)?
**R:** «**max(S_T-K,0)**». È la prima riga della tabella «Payoff a scadenza» delle opzioni europee, alla lettera (slide 20). Il docente: per la long call il payoff «è il massimo tra il valore a scadenza dell'azione meno K che è il prezzo strike e zero» (transcript [00:12:11]–[00:12:35]). Distrattori del test: «min(S_T-K,0)» è la riga della **short put** e «max(K-S_T,0)» quella della **long put**; ⚠️ «max(S_T-K,1)» non esiste nei materiali: l'**1** al posto dello 0 è inventato.
**Opzione:** max(S_T-K,0)
**Distrattori:**
- max(S_T-K,1)
- min(S_T-K,0)
- max(K-S_T,0)

**D:** ⚠️ Qual è il pay-off a scadenza di una long put, secondo il test della lezione 05 (domanda 4)?
**R:** «**max(K-S_T,0)**». È la seconda riga della tabella «Payoff a scadenza» delle opzioni europee, alla lettera (slide 20). Il docente: «sono long put e in questo caso mi troverò invece il massimo tra K meno S_T e zero», perché con la put si ha il diritto di vendere e si guadagna quando il titolo va sotto lo strike (transcript [00:12:35]–[00:13:08]). ⚠️ **Domanda difettosa**: le opzioni **A** e **C** sono **identiche**, «max(K-S_T,0)», e la piattaforma segna la **A**, la prima delle due. Distrattori del test: «min(S_T-K,0)» è la riga della **short put**, «max(S_T-K,0)» quella della **long call**.
**Opzione:** max(K-S_T,0)
**Distrattori:**
- min(S_T-K,0)
- max(S_T-K,0)

**D:** ⚠️ Qual è il pay-off a scadenza di una short put, secondo il test della lezione 05 (domanda 5)?
**R:** «**min(S_T-K,0)**». È l'ultima riga della tabella «Payoff a scadenza» delle opzioni europee, alla lettera (slide 20). Il docente: il payoff a scadenza di chi ha venduto una put «è il minimo del payoff della long call», cioè min(S_T-K,0) (transcript [00:14:06]–[00:15:04]). La slide 22 lo conferma: -max(K-S_T,0) = min(S_T-K,0), «utilizzando una nota proprietà delle funzioni di minimo e massimo» ([00:20:08]). Distrattori del test: le opzioni **A** e **C** sono identiche, «max(K-S_T,0)», cioè il pay-off della **long put**, con il segno opposto; ⚠️ «max(S_T-K,1)» non esiste nei materiali, come nella domanda 3.
**Opzione:** min(S_T-K,0)
**Distrattori:**
- max(K-S_T,0)
- max(S_T-K,1)

## Lezione 06 — Processi Stocastici 1 – Concetti Preliminari

**D:** ⚠️ Quando una variabile aleatoria X : Ω → ℝ è detta 𝒜-misurabile, e come si chiama l'insieme che compare nella condizione, secondo la lezione 06?
**R:** «Dato uno spazio di probabilità (Ω, 𝒜, P) la variabile aleatoria X : Ω → ℝ è detta **𝒜-misurabile** se **per ogni U sottoinsieme aperto di ℝ** vale la seguente condizione: {ω ∈ Ω : X(ω) ∈ U} ∈ 𝒜» (1, slide 2). «L'insieme individuato dalla condizione 1 è detto **controimmagine** di X del sottoinsieme U ed è indicato con la notazione X^(-1)(U)» (2, slide 2). Il docente: «In questo caso x si dice A misurabile» ([00:00:17]–[00:01:20]; la trascrizione scrive «ammisurabile»).
**Opzione:** Se per ogni U sottoinsieme aperto di ℝ vale {ω ∈ Ω : X(ω) ∈ U} ∈ 𝒜; l'insieme {ω ∈ Ω : X(ω) ∈ U} è la controimmagine X^(-1)(U).
**Distrattori:**
- Se per almeno un U sottoinsieme aperto di ℝ vale {ω ∈ Ω : X(ω) ∈ U} ∈ 𝒜; l'insieme {ω ∈ Ω : X(ω) ∈ U} è la controimmagine X^(-1)(U).
- Se ogni X_t è ℱ_t-misurabile, cioè se ∀t, nota l'informazione contenuta in ℱ_t, si conosce il valore di X_t.
- Se per ogni E ∈ 𝒜 tale che P(E) = 0 si ha P̃(E) = 0.

**D:** ⚠️ Che cosa dice della σ-algebra di Borel 𝔹 la proposizione della lezione 06 sugli insiemi di Borel?
**R:** «Gli elementi della σ-algebra di Borel 𝔹 **coincidono con i sottoinsiemi aperti di ℝ** e sono detti **insiemi di Borel**» (slide 2; [00:01:20]). ⚠️ La lezione 01 dice invece che 𝔹 è la σ-algebra **generata** dai sottoinsiemi aperti di ℝ (deck 01, slide 11): le due formule vanno ricordate ciascuna con la sua lezione.
**Opzione:** Gli elementi della σ-algebra di Borel 𝔹 coincidono con i sottoinsiemi aperti di ℝ e sono detti insiemi di Borel.
**Distrattori:**
- Gli elementi della σ-algebra di Borel 𝔹 coincidono con i sottoinsiemi aperti di Ω e sono detti insiemi di Borel.
- Continuo se T è un intervallo di ℝ, discreto se T è un sottoinsieme di ℕ.
- Ogni martingala è contemporaneamente una supermartingala e una submartingala.

**D:** ⚠️ Come si definisce la σ-algebra generata da X, secondo la lezione 06?
**R:** «Data la variabile aleatoria X : (Ω, 𝒜, P) → (ℝ, 𝔹, P_X), la famiglia di insiemi definita come: **σ(X) ≐ {X^(-1)(E) : E ∈ 𝔹}** è una **σ-algebra su Ω** ed è detta σ-algebra generata da X» (3, slide 3). La nota la legge così: «La σ-algebra generata da X è uguale alle controimmagini di X dell'insieme E ove E è un insieme di Borel», e alternativamente X^(-1)(E) ∈ σ(X) (4, slide 3; [00:01:52]–[00:03:13]).
**Opzione:** σ(X) ≐ {X^(-1)(E) : E ∈ 𝔹}: le controimmagini di X degli insiemi di Borel; è una σ-algebra su Ω.
**Distrattori:**
- σ(X) ≐ {X^(-1)(E) : E ∈ 𝔹}: le controimmagini di X degli insiemi di Borel; è una σ-algebra su ℝ.
- La più piccola filtrazione rispetto a cui il processo è adattato: 𝔽^X = {ℱ_t^X}_{t∈[0,∞)}, con ℱ_t^X = σ(X_s; 0 ≤ s ≤ t).
- 𝔽 := {ℱ_t}_{t∈T}, con ogni ℱ_t sub-σ-algebra di 𝒜, tale che ∀s ≤ t si ha ℱ_s ⊆ ℱ_t.

**D:** ⚠️ Quando l'insieme 𝔽 := {ℱ_t}_{t∈T} di sub-σ-algebre di 𝒜 si definisce filtrazione, secondo la lezione 06?
**R:** «Sia (Ω, 𝒜, P) uno spazio di probabilità e sia T un insieme non vuoto di ℕ o di ℝ e ∀t ∈ T sia ℱ_t una sub-σ-algebra di 𝒜. Allora l'insieme 𝔽 così definito: 𝔽 := {ℱ_t}_{t∈T} (5) si definisce **filtrazione** se **∀s ≤ t** si ha: **ℱ_s ⊆ ℱ_t** (6)» (slide 4). ℬ è una sub-σ-algebra di 𝒜 se ℬ ⊆ 𝒜, e con una filtrazione la quadrupla (Ω, 𝒜, 𝔽, P) è uno **spazio di probabilità filtrato** (slide 4; [00:03:13]–[00:05:02]). ⚠️ La σ-algebra del tempo precedente è contenuta in quella del tempo successivo, non il contrario.
**Opzione:** 𝔽 := {ℱ_t}_{t∈T}, con ogni ℱ_t sub-σ-algebra di 𝒜, tale che ∀s ≤ t si ha ℱ_s ⊆ ℱ_t.
**Distrattori:**
- 𝔽 := {ℱ_t}_{t∈T}, con ogni ℱ_t sub-σ-algebra di 𝒜, tale che ∀s ≤ t si ha ℱ_t ⊆ ℱ_s.
- σ(X) ≐ {X^(-1)(E) : E ∈ 𝔹}: le controimmagini di X degli insiemi di Borel; è una σ-algebra su Ω.
- La classe dei processi stocastici square-integrable con valore iniziale nullo, i.e. tali che X_0 = 0.

**D:** ⚠️ Quando P̃ è una misura di probabilità assolutamente continua rispetto alla misura di probabilità P, secondo la lezione 06?
**R:** «Sia (Ω, 𝒜) uno spazio misurabile e siano P e P̃ due misure di probabilità definite su tale spazio. Si dice che P̃ è una misura di probabilità **assolutamente continua rispetto alla misura di probabilità P** se per ogni E ∈ 𝒜 tale che **P(E) = 0** si ha: **P̃(E) = 0** (7)» (slide 5; [00:05:02]–[00:05:39]). ⚠️ La direzione conta: gli eventi nulli per P sono nulli anche per P̃.
**Opzione:** Se per ogni E ∈ 𝒜 tale che P(E) = 0 si ha P̃(E) = 0.
**Distrattori:**
- Se per ogni E ∈ 𝒜 tale che P̃(E) = 0 si ha P(E) = 0.
- Se ∀t ≥ 0 e ∀ω ∈ Ω si ha |X_t(ω)| ≤ C < ∞, ove C è una costante a valori reali positivi.
- ∀ω ∈ Ω, le funzioni X_t che portano da T in ℕ o da T in ℝ: i valori di X_t al variare di t.

**D:** ⚠️ Quando P e P̃ sono due misure di probabilità equivalenti, secondo la lezione 06?
**R:** «Si dice che P e P̃ sono due **misure di probabilità equivalenti** se: **P(E) = 0 ⇔ P̃(E) = 0, ∀E ∈ 𝒜** (8)» (slide 5): hanno gli stessi eventi di probabilità nulla. Il docente legge la doppia implicazione come una congiunzione, «la probabilità di E uguale 0 e la probabilità di P tilde di E uguale 0» ([00:05:39]–[00:06:20]): vale la slide.
**Opzione:** P(E) = 0 ⇔ P̃(E) = 0, ∀E ∈ 𝒜
**Distrattori:**
- P(E) = 0 ⇔ P̃(E) = 1, ∀E ∈ 𝒜
- ∫_Ω Λ dP̃ = 1, cioè E^P̃(Λ) = 1
- Λ = dP/dP̃

**D:** ⚠️ Che cosa afferma il teorema di Radon-Nikodym, se P è assolutamente continua rispetto a P̃, secondo la lezione 06?
**R:** «Siano P e P̃ due misure entrambe definite sullo spazio misurabile (Ω, 𝒜) e sia P assolutamente continua rispetto a P̃. Allora esiste **un'unica** variabile aleatoria **non negativa** Λ : (Ω, 𝒜) → (ℝ, 𝔹) tale che ∀A ∈ 𝒜 si ha: **∫_A dP = ∫_A Λ dP̃** (9) e Λ è detta **derivata di Radon-Nikodym** della misura di probabilità P rispetto alla misura di probabilità P̃ su 𝒜» (slide 6; [00:06:20]–[00:07:23]). La nota della slide 7 la riscrive come P(A) = ∫_A Λ dP̃ (10), valida ∀A ∈ 𝒜.
**Opzione:** Esiste un'unica variabile aleatoria non negativa Λ : (Ω, 𝒜) → (ℝ, 𝔹) tale che ∀A ∈ 𝒜 si ha ∫_A dP = ∫_A Λ dP̃.
**Distrattori:**
- Esiste un'unica variabile aleatoria non negativa Λ : (Ω, 𝒜) → (ℝ, 𝔹) tale che ∀A ∈ 𝒜 si ha ∫_A dP̃ = ∫_A Λ dP.
- L'insieme dei processi stocastici {X_t}_{t∈[0,T]} progressivamente misurabili che verificano E(∫_0^T X_t² dt) < ∞.
- B_s ≜ W_{t+s} - W_t = ΔW_t, con 0 ≤ s ≤ ∞, è anch'esso un moto browniano.

**D:** ⚠️ Quanto vale il valore atteso della derivata di Radon-Nikodym Λ sotto la misura di probabilità P̃, secondo la lezione 06?
**R:** «Se A = Ω vale la seguente uguaglianza: **∫_Ω Λ dP̃ = 1** (11) o, equivalentemente: **E^P̃(Λ) = 1** (12) il che significa che il valore atteso della derivata di Radon-Nikodym sotto la misura di probabilità P̃ è **pari a 1**» (slide 7; [00:07:41]–[00:08:13]). La nota segue la (10), P(A) = ∫_A Λ dP̃, che con A = Ω dà la probabilità dell'intero spazio.
**Opzione:** ∫_Ω Λ dP̃ = 1, cioè E^P̃(Λ) = 1
**Distrattori:**
- ∫_Ω Λ dP̃ = 0, cioè E^P̃(Λ) = 0
- P(E) = 0 ⇔ P̃(E) = 0, ∀E ∈ 𝒜
- E^P(X_t|ℱ_0) = E^P(X_t)

**D:** ⚠️ Con quale scrittura si denota tipicamente la derivata di Radon-Nikodym Λ, da cui il nome di «derivata», secondo la lezione 06?
**R:** «L'uso della parola **derivata** con riferimento a Λ scaturisce dal fatto che tipicamente tale variabile aleatoria è denotata con la scrittura: **Λ = dP/dP̃** (13)» (slide 8). Λ è la derivata della misura P **rispetto alla** misura P̃ (slide 6), quindi dP sta al numeratore. Il docente salta questa nota e passa alla proposizione ([00:08:13]).
**Opzione:** Λ = dP/dP̃
**Distrattori:**
- Λ = dP̃/dP
- ∫_Ω Λ dP̃ = 1, cioè E^P̃(Λ) = 1
- E^P(Y) = E^P̃(Λ · Y)

**D:** ⚠️ Se Y è una variabile aleatoria con E^P̃[|ΛY|] < ∞, che cosa vale per A = Ω, secondo la proposizione della lezione 06?
**R:** «Sia Y una variabile aleatoria tale che si ha E^P̃[|ΛY|] < ∞. Allora ∀A ∈ 𝒜 vale la seguente uguaglianza: ∫_A Y dP = ∫_A YΛ dP̃ (14) o, equivalentemente: E^P(Y · 𝟙_A) = E^P̃(Y · Λ · 𝟙_A) (15). In particolare, per A = Ω si ha: **E^P(Y) = E^P̃(Λ · Y)** (16)» (slide 8; [00:08:13]–[00:09:33]). ⚠️ Λ moltiplica Y sotto la misura **P̃**, non sotto P.
**Opzione:** E^P(Y) = E^P̃(Λ · Y)
**Distrattori:**
- E^P̃(Y) = E^P(Λ · Y)
- Λ = dP/dP̃
- E^P(X_t|ℱ_0) = E^P(X_t)

**D:** ⚠️ Come si definisce un processo stocastico, dato uno spazio di probabilità (Ω, 𝒜, P), secondo la lezione 06?
**R:** «Dato uno spazio di probabilità (Ω, 𝒜, P) un **processo stocastico** è una **collezione parametrizzata di variabili aleatorie** {X_t}_{t∈T} (17) definite su tale spazio di probabilità e a valori in ℕ o in ℝ ove **T è lo spazio dei parametri**» (slide 9). Per ogni t ∈ T fissato X_t è una variabile aleatoria, X_t : Ω → ℕ oppure X_t : Ω → ℝ (slide 9; [00:09:33]–[00:10:45]).
**Opzione:** Una collezione parametrizzata di variabili aleatorie {X_t}_{t∈T} definite su tale spazio di probabilità e a valori in ℕ o in ℝ, ove T è lo spazio dei parametri.
**Distrattori:**
- Una collezione parametrizzata di variabili aleatorie {X_t}_{t∈T} definite su tale spazio di probabilità e a valori in ℕ o in ℝ, ove Ω è lo spazio dei parametri.
- La classe dei processi stocastici square-integrable con valore iniziale nullo, i.e. tali che X_0 = 0.
- La più piccola filtrazione rispetto a cui il processo è adattato: 𝔽^X = {ℱ_t^X}_{t∈[0,∞)}, con ℱ_t^X = σ(X_s; 0 ≤ s ≤ t).

**D:** ⚠️ Quando un processo stocastico {X_t}_{t∈T} è continuo e quando è discreto, secondo la lezione 06?
**R:** «Qualora **T sia un intervallo di ℝ** si dice che {X_t}_{t∈T} è un processo stocastico **continuo**»; «Qualora **T sia un sottoinsieme di ℕ** si dice che {X_t}_{t∈T} è un processo stocastico **discreto**» (slide 10; [00:10:45]–[00:11:08]). ⚠️ La distinzione riguarda lo spazio dei parametri T, non i valori assunti dal processo.
**Opzione:** Continuo se T è un intervallo di ℝ, discreto se T è un sottoinsieme di ℕ.
**Distrattori:**
- Continuo se T è un sottoinsieme di ℕ, discreto se T è un intervallo di ℝ.
- {-X_t}_{t∈[0,∞)} è una submartingala, e viceversa.
- Se è predictable è anche progressivamente misurabile; se è progressivamente misurabile è misurabile e adattato.

**D:** ⚠️ Che cosa sono le traiettorie di X_t, secondo la lezione 06?
**R:** «**∀ω ∈ Ω** le funzioni X_t che portano **da T in ℕ o da T in ℝ**, i.e. X_t : T → ℕ o X_t : T → ℝ sono chiamate **traiettorie** di X_t»; «In altri termini la traiettoria rappresenta i valori di X_t **al variare di t**» (slide 10; [00:11:08]–[00:11:36]). ⚠️ Fissato t, X_t : Ω → ℝ è una variabile aleatoria (slide 9); fissato ω, la funzione di t è una traiettoria.
**Opzione:** ∀ω ∈ Ω, le funzioni X_t che portano da T in ℕ o da T in ℝ: i valori di X_t al variare di t.
**Distrattori:**
- ∀t ∈ T, le funzioni X_t che portano da Ω in ℕ o da Ω in ℝ: i valori di X_t al variare di ω.
- Gli elementi della σ-algebra di Borel 𝔹 coincidono con i sottoinsiemi aperti di ℝ e sono detti insiemi di Borel.
- Il termine sinistro della (40) è pari al valore atteso non condizionato di X_t: E^P[E^P(X_t|ℱ_s)] = E^P(X_t).

**D:** ⚠️ Quando il processo stocastico {X_t}_{t∈[0,∞)} è uniformemente limitato, secondo la lezione 06?
**R:** «Si dice che il processo stocastico {X_t}_{t∈[0,∞)} definito sullo spazio di probabilità (Ω, 𝒜, P) e a valori in ℝ è **uniformemente limitato** se **∀t ≥ 0 e ∀ω ∈ Ω** si ha: **|X_t(ω)| ≤ C < ∞** ove C è una costante a valori reali positivi» (slide 13; [00:14:56]–[00:15:32]). ⚠️ Il limite vale per ogni ω, non per il valore atteso.
**Opzione:** Se ∀t ≥ 0 e ∀ω ∈ Ω si ha |X_t(ω)| ≤ C < ∞, ove C è una costante a valori reali positivi.
**Distrattori:**
- Se ∀t ≥ 0 si ha E^P(|X_t|) ≤ C < ∞, ove C è una costante a valori reali positivi.
- Se per ogni U sottoinsieme aperto di ℝ vale {ω ∈ Ω : X(ω) ∈ U} ∈ 𝒜; l'insieme {ω ∈ Ω : X(ω) ∈ U} è la controimmagine X^(-1)(U).
- Una collezione parametrizzata di variabili aleatorie {X_t}_{t∈T} definite su tale spazio di probabilità e a valori in ℕ o in ℝ, ove T è lo spazio dei parametri.

**D:** ⚠️ Quando il processo stocastico {X_t}_{t∈[0,∞)} è adattato alla filtrazione {ℱ_t}_{t∈[0,∞)}, secondo la lezione 06?
**R:** «Dato lo spazio di probabilità filtrato (Ω, 𝒜, {ℱ_t}_{t∈[0,∞)}, P) si dice che il processo stocastico {X_t}_{t∈[0,∞)} è **adattato** a {ℱ_t}_{t∈[0,∞)} se **ogni X_t è ℱ_t-misurabile**, cioè se ∀t, nota l'informazione contenuta in ℱ_t, si conosce il valore di X_t» (slide 15; [00:17:03]–[00:17:32]). ⚠️ La σ-algebra è ℱ_t, quella dell'istante t, non la σ-algebra 𝒜 dell'intero spazio di probabilità.
**Opzione:** Se ogni X_t è ℱ_t-misurabile, cioè se ∀t, nota l'informazione contenuta in ℱ_t, si conosce il valore di X_t.
**Distrattori:**
- Se ogni X_t è 𝒜-misurabile, cioè se ∀t, nota l'informazione contenuta in 𝒜, si conosce il valore di X_t.
- Se per ogni E ∈ 𝒜 tale che P(E) = 0 si ha P̃(E) = 0.

**D:** ⚠️ Quando il processo stocastico {X_t}_{t∈[0,∞)} è progressivamente misurabile rispetto a {ℱ_t}_{t∈[0,∞)}, secondo la lezione 06?
**R:** «…si dice che il processo stocastico {X_t}_{t∈[0,∞)} è **progressivamente misurabile** rispetto a {ℱ_t}_{t∈[0,∞)} se esso è misurabile rispetto alla σ-algebra prodotto: **𝔹|_{[0,t]} × ℱ_t**, cioè se: {(s, ω) ∈ [0,t] × Ω : X_s(ω) ∈ A} ∈ 𝔹|_{[0,t]} × ℱ_t (22) **per ogni A ∈ 𝔹 e per ogni t ≥ 0**» (slide 16). Per il docente è una «definizione molto importante» ([00:17:32]–[00:18:14]). ⚠️ Il processo **misurabile** lo è rispetto a 𝔹|_{[0,+∞)} × 𝒜 (21, slide 13), il **predictable** rispetto a 𝔹|_{[0,t)} × ℱ_{t-} (23, slide 17).
**Opzione:** Se è misurabile rispetto alla σ-algebra prodotto 𝔹|_{[0,t]} × ℱ_t, per ogni A ∈ 𝔹 e per ogni t ≥ 0.
**Distrattori:**
- Se è misurabile rispetto alla σ-algebra prodotto 𝔹|_{[0,+∞)} × 𝒜, per ogni A ∈ 𝔹.
- Costante per la martingala, non crescente per la supermartingala, non decrescente per la submartingala.
- Una collezione parametrizzata di variabili aleatorie {X_t}_{t∈T} definite su tale spazio di probabilità e a valori in ℕ o in ℝ, ove T è lo spazio dei parametri.

**D:** ⚠️ Quando il processo stocastico {X_t}_{t∈[0,∞)} è predictable rispetto a {ℱ_t}_{t∈[0,∞)}, secondo la lezione 06?
**R:** «…è **predictable** rispetto a {ℱ_t}_{t∈[0,∞)} se esso è misurabile rispetto alla σ-algebra prodotto: **𝔹|_{[0,t)} × ℱ_{t-}**, cioè se, denotando con ℱ_{t-} la σ-algebra generata dall'insieme dei processi **adattati e continui da sinistra**, si ha: {(s, ω) ∈ [0,t] × Ω : X_s(ω) ∈ A} ∈ 𝔹|_{[0,t)} × ℱ_{t-} (23) per ogni A ∈ 𝔹 e per ogni t ≥ 0» (slide 17). Il docente dice «predicibile» e «predittibile» ([00:18:30]–[00:19:39]). ⚠️ Rispetto alla misurabilità progressiva cambiano l'intervallo, [0,t) invece di [0,t], e la σ-algebra, ℱ_{t-} invece di ℱ_t.
**Opzione:** Se è misurabile rispetto alla σ-algebra prodotto 𝔹|_{[0,t)} × ℱ_{t-}, con ℱ_{t-} la σ-algebra generata dall'insieme dei processi adattati e continui da sinistra.
**Distrattori:**
- Se è misurabile rispetto alla σ-algebra prodotto 𝔹|_{[0,t)} × ℱ_{t-}, con ℱ_{t-} la σ-algebra generata dall'insieme dei processi adattati e continui da destra.
- Se per ogni U sottoinsieme aperto di ℝ vale {ω ∈ Ω : X(ω) ∈ U} ∈ 𝒜; l'insieme {ω ∈ Ω : X(ω) ∈ U} è la controimmagine X^(-1)(U).
- L'insieme dei processi stocastici {X_t}_{t∈[0,T]} progressivamente misurabili che verificano E(∫_0^T X_t² dt) < ∞.

**D:** ⚠️ Quali implicazioni legano processi predictable, progressivamente misurabili, misurabili e adattati, secondo le proposizioni della lezione 06?
**R:** «Se un processo stocastico è **progressivamente misurabile** allora esso è **misurabile e adattato**» (slide 16); «Se un processo stocastico è **predictable** allora esso è anche **progressivamente misurabile**» (slide 17). Il docente: «Se un processo stocastico è progressivamente misurabile, allora esso è misurabile e anche adattato, cioè nota f di t è noto anche x di t» ([00:18:14]); «Se un processo stocastico è predittibile o predicibile, allora esso è anche progressivamente misurabile» ([00:19:39]). ⚠️ Le implicazioni scendono dalla condizione più forte alla più debole: predictable ⇒ progressivamente misurabile ⇒ misurabile e adattato.
**Opzione:** Se è predictable è anche progressivamente misurabile; se è progressivamente misurabile è misurabile e adattato.
**Distrattori:**
- Se è progressivamente misurabile è anche predictable; se è misurabile e adattato è progressivamente misurabile.
- Ogni martingala è contemporaneamente una supermartingala e una submartingala.
- {-X_t}_{t∈[0,∞)} è una submartingala, e viceversa.

**D:** ⚠️ Come si definisce la filtrazione naturale del processo {X_t}_{t∈[0,∞)}, secondo la lezione 06?
**R:** «Si definisce **filtrazione naturale** del processo {X_t}_{t∈[0,∞)} la **più piccola** filtrazione rispetto a cui tale processo stocastico è adattato. Essa è denotata con 𝔽^X = {ℱ_t^X}_{t∈[0,∞)} dove ℱ_t^X = σ(X_s; 0 ≤ s ≤ t) e corrisponde pertanto alla filtrazione generata dal processo stesso» (slide 17); «In altri termini la filtrazione naturale di un processo stocastico rappresenta il **set di informazioni** che caratterizzano il medesimo» (slide 18; [00:20:00]–[00:20:42]). La filtrazione di {X_t} si costruisce come σ(X_0) = ℱ_0, σ(X_0, X_1) = ℱ_1, …, σ(X_s; 0 ≤ s ≤ t) = ℱ_t, con ℱ_0 ⊂ ℱ_1 ⊂ … ⊂ ℱ_t (slide 15).
**Opzione:** La più piccola filtrazione rispetto a cui il processo è adattato: 𝔽^X = {ℱ_t^X}_{t∈[0,∞)}, con ℱ_t^X = σ(X_s; 0 ≤ s ≤ t).
**Distrattori:**
- La più grande filtrazione rispetto a cui il processo è adattato: 𝔽^X = {ℱ_t^X}_{t∈[0,∞)}, con ℱ_t^X = σ(X_s; 0 ≤ s ≤ t).
- 𝔽 := {ℱ_t}_{t∈T}, con ogni ℱ_t sub-σ-algebra di 𝒜, tale che ∀s ≤ t si ha ℱ_s ⊆ ℱ_t.
- Se è misurabile rispetto alla σ-algebra prodotto 𝔹|_{[0,t]} × ℱ_t, per ogni A ∈ 𝔹 e per ogni t ≥ 0.

**D:** ⚠️ Che cosa si indica con L²[0, T], secondo la lezione 06?
**R:** «L'insieme dei processi stocastici {X_t}_{t∈[0,T]} **progressivamente misurabili** e che verificano la seguente condizione: **E(∫_0^T X_t² dt) < ∞** (24) è detto L²[0, T]» (slide 18; [00:20:42]–[00:21:06]). ⚠️ Sotto l'integrale c'è il **quadrato** del processo.
**Opzione:** L'insieme dei processi stocastici {X_t}_{t∈[0,T]} progressivamente misurabili che verificano E(∫_0^T X_t² dt) < ∞.
**Distrattori:**
- L'insieme dei processi stocastici {X_t}_{t∈[0,T]} progressivamente misurabili che verificano E(∫_0^T X_t dt) < ∞.
- Se ogni X_t è ℱ_t-misurabile, cioè se ∀t, nota l'informazione contenuta in ℱ_t, si conosce il valore di X_t.
- s ≤ t ⇒ ℱ_s^W ⊆ ℱ_t^W; W_t è ℱ_t^W-misurabile per ogni t; per t ≤ t_1 ≤ ... ≤ t_n gli incrementi W_{t_1} - W_t, W_{t_2} - W_{t_1}, ..., W_{t_1} - W_{t_{n-1}} sono indipendenti da ℱ_t^W.

**D:** ⚠️ Come si definisce un processo semplice, data una partizione 0 = t_0 ≤ t_1 ≤ ... ≤ t_n = T, secondo la lezione 06?
**R:** «…si assuma che per ogni j = 0, 1, ..., n - 1 esista una v.a. **ℱ_{t_j}-misurabile** definita come segue: a_j(ω) : Ω → **[-K, K]** (25) ove K è una costante positiva e finita. Allora si può definire un processo stocastico X_t : [0, T] × Ω → [-K, K] ponendo: X_t := a_j(ω) ∀t ∈ (t_j, t_{j+1}], ∀j = 0, 1, ..., n - 1 (26) o, equivalentemente: **X_t := ∑_{j=0}^{n-1} a_j(ω) · 𝟙_{(t_j,t_{j+1}]}** (27) […] Tale processo stocastico **limitato e continuo da sinistra** è detto **processo semplice**» (slide 19; [00:21:06]–[00:22:27]). Il processo semplice è ℱ_{t_j}-misurabile per t ∈ (t_j, t_{j+1}] (slide 20).
**Opzione:** X_t := ∑_{j=0}^{n-1} a_j(ω) · 𝟙_{(t_j,t_{j+1}]}, con a_j(ω) ℱ_{t_j}-misurabile a valori in [-K, K]: un processo limitato e continuo da sinistra.
**Distrattori:**
- X_t := ∑_{j=0}^{n-1} a_j(ω) · 𝟙_{[t_j,t_{j+1})}, con a_j(ω) ℱ_{t_j}-misurabile a valori in [-K, K]: un processo limitato e continuo da destra.
- Se è misurabile rispetto alla σ-algebra prodotto 𝔹|_{[0,t]} × ℱ_t, per ogni A ∈ 𝔹 e per ogni t ≥ 0.
- Se è misurabile rispetto alla σ-algebra prodotto 𝔹|_{[0,t)} × ℱ_{t-}, con ℱ_{t-} la σ-algebra generata dall'insieme dei processi adattati e continui da sinistra.

**D:** ⚠️ Che cosa vale per E^P(X_t|ℱ_0), data una filtrazione {ℱ_t}_{t∈[0,∞)} sullo spazio di probabilità, secondo la proposizione della lezione 06?
**R:** «Sia {X_t}_{t∈[0,∞)} un processo stocastico definito sullo spazio di probabilità (Ω, 𝒜, P) e sia {ℱ_t}_{t∈[0,∞)} una filtrazione definita su tale spazio di probabilità. Allora vale la seguente uguaglianza: **E^P(X_t|ℱ_0) = E^P(X_t)** (28)» (slide 20). Il docente: il valore atteso condizionato a ℱ_0 «è semplicemente uguale al valore atteso» ([00:22:39]–[00:23:09]).
**Opzione:** E^P(X_t|ℱ_0) = E^P(X_t)
**Distrattori:**
- E^P(X_t|ℱ_t) = E^P(X_t)
- E^P(Y) = E^P̃(Λ · Y)
- P(E) = 0 ⇔ P̃(E) = 0, ∀E ∈ 𝒜

**D:** ⚠️ Quali due condizioni deve soddisfare un processo {X_t}_{t∈[0,∞)} adattato alla filtrazione {ℱ_t}_{t∈[0,∞)} per essere una P-martingala, secondo la lezione 06?
**R:** «Un processo stocastico {X_t}_{t∈[0,∞)} definito su uno spazio di probabilità filtrato (Ω, 𝒜, {ℱ_t}_{t∈[0,∞)}, P) e **adattato** rispetto alla filtrazione {ℱ_t}_{t∈[0,∞)} è detto **martingala** rispetto a tale filtrazione (e alla misura di probabilità P) o, equivalentemente, P-martingala se: **E^P(|X_t|) < ∞ ∀t** (29) e: **E^P(X_t|ℱ_s) = X_s ∀s ≤ t** (30)» (slide 21; [00:23:09]–[00:23:52]). ⚠️ La (29) è la condizione di integrabilità, con il valore assoluto; la square-integrability chiede invece E^P(X_t²) < ∞ (42, slide 27).
**Opzione:** E^P(|X_t|) < ∞ ∀t e E^P(X_t|ℱ_s) = X_s ∀s ≤ t
**Distrattori:**
- E^P(|X_t|) < ∞ ∀t e E^P(X_s|ℱ_t) = X_t ∀s ≤ t
- Se ∀t ≥ 0 e ∀ω ∈ Ω si ha |X_t(ω)| ≤ C < ∞, ove C è una costante a valori reali positivi.
- E^P(X²_t) < ∞ ∀ t ≥ 0

**D:** ⚠️ Come si può riesprimere con ΔX_t = X_t - X_s la condizione E^P(X_t|ℱ_s) = X_s della martingala, secondo la lezione 06?
**R:** «La condizione di cui alla 30 può essere riespressa in modo equivalente come: **E^P(X_t - X_s|ℱ_s) = E^P(ΔX_t|ℱ_s) = 0**, ∀0 ≤ s < t < ∞ (31) dove: ΔX_t = X_t - X_s» (slide 22); «…anche come: ∫_A X_t dP = ∫_A X_s dP ∀0 ≤ s < t < ∞ (32) per ogni A ∈ ℱ_s» (slide 22; [00:23:52]–[00:24:52]). ⚠️ Il condizionamento resta a ℱ_s, l'informazione al tempo precedente s.
**Opzione:** E^P(X_t - X_s|ℱ_s) = E^P(ΔX_t|ℱ_s) = 0, ∀0 ≤ s < t < ∞
**Distrattori:**
- E^P(X_t - X_s|ℱ_t) = E^P(ΔX_t|ℱ_t) = 0, ∀0 ≤ s < t < ∞
- P(W_{s+t} ∈ c | W_t = x, W_{t-1} = y) = P(W_{s+t} ∈ c | W_t = x)
- lim_{‖Π‖→0} ∑_{k=0}^{n-1} |W_{t_{k+1}} - W_{t_k}|² = T

**D:** ⚠️ Quale condizione prende il posto della E^P(X_t|ℱ_s) = X_s in una P-supermartingala, e come si riesprime con ΔX_t, secondo la lezione 06?
**R:** «Un processo stocastico {X_t}_{t∈[0,∞)} che soddisfa le condizioni indicate nella definizione di martingala ad eccezione del fatto che in luogo della 30 vale la: **E^P(X_t|ℱ_s) ≤ X_s ∀s ≤ t** (33) è detto **Supermartingala** rispetto alla filtrazione {ℱ_t}_{t∈[0,∞)} (e alla misura di probabilità P) o, equivalentemente, P-supermartingala» (slide 23). Con ΔX_t = X_t - X_s: **E^P(ΔX_t|ℱ_s) ≤ 0** (34, slide 23; [00:24:52]–[00:25:45]). ⚠️ «Super» va con «≤».
**Opzione:** E^P(X_t|ℱ_s) ≤ X_s ∀s ≤ t, cioè E^P(ΔX_t|ℱ_s) ≤ 0
**Distrattori:**
- E^P(X_t|ℱ_s) ≥ X_s ∀s ≤ t, cioè E^P(ΔX_t|ℱ_s) ≥ 0
- ΔW_t ≜ ε√Δt e, per s → 0, dW_t ≜ ε√dt, ove ε ~ N(0,1).
- W_t ~ N(0, t): una Normale di valore atteso nullo e varianza t.

**D:** ⚠️ Quale condizione prende il posto della E^P(X_t|ℱ_s) = X_s in una P-submartingala, e come si riesprime con ΔX_t, secondo la lezione 06?
**R:** «…ad eccezione del fatto che in luogo della 30 vale la: **E^P(X_t|ℱ_s) ≥ X_s ∀s ≤ t** (35) è detto **Submartingala** rispetto alla filtrazione {ℱ_t}_{t∈[0,∞)} (e alla misura di probabilità P) o, equivalentemente, P-submartingala» (slide 24). «Si evidenzia che la 35 può essere riespressa in modo equivalente come: E^P(X_t - X_s|ℱ_s) = **E^P(ΔX_t|ℱ_s) ≥ 0**» (36, slide 24; [00:25:45]–[00:26:23]). ⚠️ «Sub» va con «≥».
**Opzione:** E^P(X_t|ℱ_s) ≥ X_s ∀s ≤ t, cioè E^P(ΔX_t|ℱ_s) ≥ 0
**Distrattori:**
- E^P(X_t|ℱ_s) ≤ X_s ∀s ≤ t, cioè E^P(ΔX_t|ℱ_s) ≤ 0
- dX = adt + bdW_t, con dX ~ N(adt, b√dt)
- lim_{‖Π‖→0} ∑_{k=0}^{n-1} |W_{t_{k+1}} - W_{t_k}|² = T

**D:** ⚠️ Di quali altre due classi di processi fa parte ogni martingala, secondo il teorema della lezione 06?
**R:** «Ogni martingala è **contemporaneamente** una supermartingala e una submartingala» (slide 25). Il docente: «Ogni martingala è ed è evidentemente contemporaneamente sia una super che una sub martingala» ([00:26:23]). L'uguaglianza della (30) soddisfa sia la ≤ della (33) sia la ≥ della (35). ⚠️ Il teorema va dalla martingala alle altre due classi, non dalla supermartingala o dalla submartingala alla martingala.
**Opzione:** Ogni martingala è contemporaneamente una supermartingala e una submartingala.
**Distrattori:**
- Ogni supermartingala è contemporaneamente una martingala e una submartingala.
- σ(X) ≐ {X^(-1)(E) : E ∈ 𝔹}: le controimmagini di X degli insiemi di Borel; è una σ-algebra su Ω.
- Per la sub 3) E(W_t - W_s|ℱ_s^W) = E(W_t - W_s); per la sub 2) questo termine si annulla; infine E(W_s|ℱ_s^W) = W_s perché il moto browniano al tempo s è adattato a ℱ_s^W.

**D:** ⚠️ Se {X_t}_{t∈[0,∞)} è una supermartingala, che cosa si può dire di {-X_t}_{t∈[0,∞)}, secondo il teorema della lezione 06?
**R:** «Se {X_t}_{t∈[0,∞)} è una supermartingala allora **{-X_t}_{t∈[0,∞)} è una submartingala e viceversa**» (slide 25; [00:26:35]–[00:26:44]). Cambiando segno al processo, la ≤ della (33) diventa la ≥ della (35).
**Opzione:** {-X_t}_{t∈[0,∞)} è una submartingala, e viceversa.
**Distrattori:**
- {-X_t}_{t∈[0,∞)} è anch'essa una supermartingala, e viceversa.
- Il termine sinistro della (40) è pari al valore atteso non condizionato di X_t: E^P[E^P(X_t|ℱ_s)] = E^P(X_t).
- Gli elementi della σ-algebra di Borel 𝔹 coincidono con i sottoinsiemi aperti di ℝ e sono detti insiemi di Borel.

**D:** ⚠️ Come si comporta nel tempo il valore atteso di una martingala, di una supermartingala e di una submartingala, secondo la proposizione della lezione 06?
**R:** «Il valore atteso di: una martingala è **costante**, i.e.: E^P(X_t) = E^P(X_s) (37); una supermartingala è **non crescente**, i.e.: E^P(X_t) ≤ E^P(X_s) (38); una submartingala è **non decrescente**, i.e.: E^P(X_t) ≥ E^P(X_s) (39)», tutte ∀0 ≤ s < t < ∞ (slide 25). ⚠️ Il transcript fa dire al docente «Per una sub-martingala è non crescente, per una sub-martingala è non decrescente» ([00:26:54]): la prima è la **super**martingala, come nella slide.
**Opzione:** Costante per la martingala, non crescente per la supermartingala, non decrescente per la submartingala.
**Distrattori:**
- Costante per la martingala, non decrescente per la supermartingala, non crescente per la submartingala.
- ∀ω ∈ Ω, le funzioni X_t che portano da T in ℕ o da T in ℝ: i valori di X_t al variare di t.
- s ≤ t ⇒ ℱ_s^W ⊆ ℱ_t^W; W_t è ℱ_t^W-misurabile per ogni t; per t ≤ t_1 ≤ ... ≤ t_n gli incrementi W_{t_1} - W_t, W_{t_2} - W_{t_1}, ..., W_{t_1} - W_{t_{n-1}} sono indipendenti da ℱ_t^W.

**D:** ⚠️ Nella dimostrazione della (37), dopo aver calcolato il valore atteso di ambo i termini della (30), quale passaggio porta al risultato, secondo la lezione 06?
**R:** «Si calcola il valore atteso di ambo i termini della 30, i.e.: E^P[E^P(X_t|ℱ_s)] = E^P(X_s) ∀0 ≤ s < t < ∞ (40) e si osserva che, per una nota proprietà del valore atteso condizionato, il termine sinistro della 40 è pari al **valore atteso non condizionato di X_t** i.e.: **E^P[E^P(X_t|ℱ_s)] = E^P(X_t)** (41). Sostituendo il termine destro della 41 al termine sinistro della 40, si ottiene la 37» (slide 26; [00:27:04]–[00:27:40]); «La dimostrazione della 38 e della 39 è del tutto analoga». La slide non nomina la proprietà: è quella che la lezione 02 scrive E[E(X|Y)] = E(X) (deck 02, slide 15).
**Opzione:** Il termine sinistro della (40) è pari al valore atteso non condizionato di X_t: E^P[E^P(X_t|ℱ_s)] = E^P(X_t).
**Distrattori:**
- Il termine sinistro della (40) è pari a X_t stesso: E^P[E^P(X_t|ℱ_s)] = X_t.
- Esiste un'unica variabile aleatoria non negativa Λ : (Ω, 𝒜) → (ℝ, 𝔹) tale che ∀A ∈ 𝒜 si ha ∫_A dP = ∫_A Λ dP̃.
- Continuo se T è un intervallo di ℝ, discreto se T è un sottoinsieme di ℕ.

**D:** ⚠️ Che cosa si definisce ℳ_2^c, secondo la lezione 06?
**R:** «Si definisce ℳ_2^c la classe dei processi stocastici **square-integrable** con **valore iniziale nullo**, i.e. tali che: **X_0 = 0**» (slide 27; [00:27:55], dove la trascrizione scrive «M2C»). Square-integrable è una martingala continua con E^P(X_t²) < ∞ ∀t ≥ 0 (42, slide 27).
**Opzione:** La classe dei processi stocastici square-integrable con valore iniziale nullo, i.e. tali che X_0 = 0.
**Distrattori:**
- La classe dei processi stocastici square-integrable con valore iniziale unitario, i.e. tali che X_0 = 1.
- Se è misurabile rispetto alla σ-algebra prodotto 𝔹|_{[0,t)} × ℱ_{t-}, con ℱ_{t-} la σ-algebra generata dall'insieme dei processi adattati e continui da sinistra.
- Costante per la martingala, non crescente per la supermartingala, non decrescente per la submartingala.

**D:** ⚠️ Di quali cinque proprietà gode il moto browniano standard {W_t}_{t∈[0,∞)}, secondo la definizione della lezione 06?
**R:** «Si definisce **moto Browniano standard** o semplicemente moto Browniano il processo stocastico definito su uno spazio di probabilità (Ω, 𝒜, P) e denotato con {W_t}_{t∈[0,∞)} che gode delle seguenti proprietà: ❶ **W_0 = 0**; ❷ **(W_t - W_s) ~ N(0, (t - s))**; ❸ (W_{t_2} - W_{t_1}) é **indipendente** da (W_{t_3} - W_{t_2}) ove [t_2 - t_1) e [t_3 - t_2) sono due intervalli non sovrapposti; ❹ **proprietà di Markov**, ossia: P(W_{s+t} ∈ c | W_t = x, W_{t-1} = y) = P(W_{s+t} ∈ c | W_t = x); ❺ è una **funzione continua nel tempo**, ossia, fissato un qualsiasi ω, si ha {W_t}_{t∈[0,∞)} per t ≥ 0 ove W_t é continuo ossia: P((ω) ove t ⟶ W_t(ω) é continuo) = 1» (slide 28; [00:28:10]–[00:29:29]). ⚠️ Nella ❷ il secondo parametro della normale è la **varianza**, t - s: lo conferma la slide 29, «varianza t».
**Opzione:** W_0 = 0; (W_t - W_s) ~ N(0, (t - s)); (W_{t_2} - W_{t_1}) é indipendente da (W_{t_3} - W_{t_2}) ove [t_2 - t_1) e [t_3 - t_2) sono due intervalli non sovrapposti; proprietà di Markov, P(W_{s+t} ∈ c | W_t = x, W_{t-1} = y) = P(W_{s+t} ∈ c | W_t = x); è una funzione continua nel tempo.
**Distrattori:**
- W_0 = 0; (W_t - W_s) ~ N(0, (t + s)); (W_{t_2} - W_{t_1}) é indipendente da (W_{t_3} - W_{t_2}) ove [t_2 - t_1) e [t_3 - t_2) sono due intervalli non sovrapposti; proprietà di Markov, P(W_{s+t} ∈ c | W_t = x, W_{t-1} = y) = P(W_{s+t} ∈ c | W_t = x); è una funzione continua nel tempo.
- Per la sub 3) E(W_t - W_s|ℱ_s^W) = E(W_t - W_s); per la sub 2) questo termine si annulla; infine E(W_s|ℱ_s^W) = W_s perché il moto browniano al tempo s è adattato a ℱ_s^W.
- E^P(X_t - X_s|ℱ_s) = E^P(ΔX_t|ℱ_s) = 0, ∀0 ≤ s < t < ∞

**D:** ⚠️ Come è distribuito il moto browniano standard al generico tempo t, secondo la proposizione della lezione 06?
**R:** «In base alle proprietà 1 e 2 della definizione di moto Browniano standard valgono le seguenti relazioni: (W_t - W_0) = (W_t - 0) = W_t e **W_t ~ N(0, t)**. In altri termini il moto Browniano standard considerato al generico tempo t è distribuito secondo una legge di probabilità **Normale di valore atteso nullo e varianza t**» (slide 29; [00:29:29]). ⚠️ Qui il secondo parametro di N è la **varianza**; nella slide 37 il processo di Wiener è invece scritto con la deviazione standard, dW_t ~ N(0, √dt), e su quella formula verte la domanda 5 del test.
**Opzione:** W_t ~ N(0, t): una Normale di valore atteso nullo e varianza t.
**Distrattori:**
- W_t ~ N(t, 0): una Normale di valore atteso t e varianza nulla.
- P(W_{s+t} ∈ c | W_t = x, W_{t-1} = y) = P(W_{s+t} ∈ c | W_t = x)
- E(W_t|ℱ_s^W) = W_s, per ogni 0 ≤ s < t

**D:** ⚠️ Come si scrive la proprietà di Markov del moto browniano standard, secondo la lezione 06?
**R:** «❹ **proprietà di Markov**, ossia: **P(W_{s+t} ∈ c | W_t = x, W_{t-1} = y) = P(W_{s+t} ∈ c | W_t = x)**» (slide 28; [00:28:43]). Conoscere anche il valore precedente, W_{t-1} = y, non cambia la probabilità condizionata al valore presente W_t = x. Nella dimostrazione della (44) il docente parla di «strong mark of property, cioè la circostanza che il futuro sia basato solo sul presente» ([00:32:20]; la slide 34 scrive «strong Markov Property»).
**Opzione:** P(W_{s+t} ∈ c | W_t = x, W_{t-1} = y) = P(W_{s+t} ∈ c | W_t = x)
**Distrattori:**
- P(W_{s+t} ∈ c | W_t = x, W_{t-1} = y) = P(W_{s+t} ∈ c | W_{t-1} = y)
- E(W_t|ℱ_s^W) = W_s, per ogni 0 ≤ s < t
- ΔW_t ≜ ε√Δt e, per s → 0, dW_t ≜ ε√dt, ove ε ~ N(0,1).

**D:** ⚠️ Quali tre proprietà della filtrazione naturale {ℱ_t^W}_{t∈[0,∞)} del moto browniano standard elenca il corollario della lezione 06?
**R:** «Valgono le seguenti proprietà: 1. **s ≤ t ⇒ ℱ_s^W ⊆ ℱ_t^W**; 2. **W_t è ℱ_t^W-misurabile** per ogni t; 3. per t ≤ t_1 ≤ ... ≤ t_n, gli incrementi W_{t_1} - W_t, W_{t_2} - W_{t_1}, ..., W_{t_1} - W_{t_{n-1}} sono **indipendenti da ℱ_t^W**» (slide 31; [00:30:24]–[00:30:52]). ℱ_t^W = σ(W_s, 0 ≤ s ≤ t), e la filtrazione naturale si denota anche 𝔽^W (slide 30–31). L'ultimo incremento, W_{t_1} - W_{t_{n-1}}, è con ogni probabilità un refuso della slide per W_{t_n} - W_{t_{n-1}}, e il docente lo legge com'è.
**Opzione:** s ≤ t ⇒ ℱ_s^W ⊆ ℱ_t^W; W_t è ℱ_t^W-misurabile per ogni t; per t ≤ t_1 ≤ ... ≤ t_n gli incrementi W_{t_1} - W_t, W_{t_2} - W_{t_1}, ..., W_{t_1} - W_{t_{n-1}} sono indipendenti da ℱ_t^W.
**Distrattori:**
- s ≤ t ⇒ ℱ_t^W ⊆ ℱ_s^W; W_t è ℱ_t^W-misurabile per ogni t; per t ≤ t_1 ≤ ... ≤ t_n gli incrementi W_{t_1} - W_t, W_{t_2} - W_{t_1}, ..., W_{t_1} - W_{t_{n-1}} sono indipendenti da ℱ_t^W.
- E^P(|X_t|) < ∞ ∀t e E^P(X_t|ℱ_s) = X_s ∀s ≤ t
- dX~N(0,dt^(1/2))

**D:** ⚠️ A che cosa tende la somma dei quadrati degli incrementi del moto browniano su una partizione Π di [0, T], quando ‖Π‖ → 0, secondo il teorema della lezione 06?
**R:** «Sia Π = {t_0, t_1, t_2, t_3, t_4, ..., t_n} una partizione dell'intervallo [0, T] e sia: ‖Π‖ = max_{k=0,1,2,...,n} (t_{k+1} - t_k). Allora vale il seguente limite: **lim_{‖Π‖→0} ∑_{k=0}^{n-1} |W_{t_{k+1}} - W_{t_k}|² = T** (43)» (slide 32; [00:30:52]–[00:31:18]). Il docente legge «è uguale a t».
**Opzione:** lim_{‖Π‖→0} ∑_{k=0}^{n-1} |W_{t_{k+1}} - W_{t_k}|² = T
**Distrattori:**
- lim_{‖Π‖→0} ∑_{k=0}^{n-1} |W_{t_{k+1}} - W_{t_k}|² = 0
- dX = adt + bdW_t, con dX ~ N(adt, b√dt)
- W_t ~ N(0, t): una Normale di valore atteso nullo e varianza t.

**D:** ⚠️ Che cosa afferma il teorema della lezione 06 sul processo differenziale di due moti browniani B_s?
**R:** «Il processo differenziale di due moti browniani, i.e. **B_s ≜ W_{t+s} - W_t = ΔW_t** ove 0 ≤ s ≤ ∞ (44) é **anch'esso un moto browniano**» (slide 32; [00:31:18]). La dimostrazione verifica le **5 proprietà** caratterizzanti del moto browniano (slide 33–34): B_0 = W_t - W_t = 0; B_R - B_S = W_{t+R} - W_{t+S} ~ N(0, (R - S)), perché la differenza di variabili normali è normale, con valore atteso nullo e Var = (R + t) - (t + S) = R - S; l'indipendenza su intervalli non sovrapposti; la strong Markov Property; la continuità, perché la differenza di due variabili casuali continue è ancora continua ([00:31:26]–[00:32:54]).
**Opzione:** B_s ≜ W_{t+s} - W_t = ΔW_t, con 0 ≤ s ≤ ∞, è anch'esso un moto browniano.
**Distrattori:**
- B_s ≜ W_{t+s} + W_t, con 0 ≤ s ≤ ∞, è anch'esso un moto browniano.
- E^P(X_t - X_s|ℱ_s) = E^P(ΔX_t|ℱ_s) = 0, ∀0 ≤ s < t < ∞
- Se è predictable è anche progressivamente misurabile; se è progressivamente misurabile è misurabile e adattato.

**D:** ⚠️ Come si definiscono l'incremento ΔW_t (45) e il processo di Wiener dW_t, secondo la lezione 06?
**R:** «Il processo ΔW_t può essere definito come segue: **W_{t+s} - W_t = ΔW_t ≜ ε√Δt** (45) ove **ε ~ N(0,1)**» (slide 35; [00:32:54]). «Per **s → 0** nell'equazione 45 si ha che ΔW_t → dW_t e, quindi, si può definire nel continuo il c.d. **processo di Wiener**: **dW_t ≜ ε√dt**» (slide 37; [00:33:44]).
**Opzione:** ΔW_t ≜ ε√Δt e, per s → 0, dW_t ≜ ε√dt, ove ε ~ N(0,1).
**Distrattori:**
- ΔW_t ≜ ε√Δt e, per s → ∞, dW_t ≜ ε√dt, ove ε ~ N(0,1).
- E^P(X²_t) < ∞ ∀ t ≥ 0
- X_t := ∑_{j=0}^{n-1} a_j(ω) · 𝟙_{(t_j,t_{j+1}]}, con a_j(ω) ℱ_{t_j}-misurabile a valori in [-K, K]: un processo limitato e continuo da sinistra.

**D:** ⚠️ Che cosa afferma la (46) sul moto browniano standard rispetto alla propria filtrazione naturale, secondo la lezione 06?
**R:** «Il moto browniano standard è una **Martingala** rispetto alla propria filtrazione naturale {ℱ_t^W}_{t∈[0,∞)}, i.e. per ogni 0 ≤ s < t: **E(W_t|ℱ_s^W) = W_s** (46)» (slide 35; [00:33:10]).
**Opzione:** E(W_t|ℱ_s^W) = W_s, per ogni 0 ≤ s < t
**Distrattori:**
- E(W_s|ℱ_t^W) = W_t, per ogni 0 ≤ s < t
- dX~N(0,dt^(1/2))
- X_t := ∑_{j=0}^{n-1} a_j(ω) · 𝟙_{(t_j,t_{j+1}]}, con a_j(ω) ℱ_{t_j}-misurabile a valori in [-K, K]: un processo limitato e continuo da sinistra.

**D:** ⚠️ Nella dimostrazione della (46), a che cosa servono le proprietà sub 3) e sub 2) della definizione di moto browniano standard, secondo la lezione 06?
**R:** «Per 0 ≤ s ≤ t si ha: E(W_t|ℱ_s^W) = E((W_t - W_s) + W_s|ℱ_s^W) = E(W_t - W_s|ℱ_s^W) + E(W_s|ℱ_s^W) per la proprietà **sub 3)** di cui alla Definizione di moto Browniano standard si ha: = **E(W_t - W_s)** + E(W_s|ℱ_s^W) per la proprietà **sub 2)** di cui alla Definizione di moto Browniano standard si ha: = E(W_s|ℱ_s^W) dato che il moto browniano al generico tempo s è **adattato** rispetto a ℱ_s^W si ha: = W_s» (slide 36; [00:33:24]–[00:33:44]). La sub 3) è l'indipendenza degli incrementi, la sub 2) la legge normale di valore atteso nullo dell'incremento.
**Opzione:** Per la sub 3) E(W_t - W_s|ℱ_s^W) = E(W_t - W_s); per la sub 2) questo termine si annulla; infine E(W_s|ℱ_s^W) = W_s perché il moto browniano al tempo s è adattato a ℱ_s^W.
**Distrattori:**
- Per la sub 2) E(W_t - W_s|ℱ_s^W) = E(W_t - W_s); per la sub 3) questo termine si annulla; infine E(W_s|ℱ_s^W) = W_s perché il moto browniano al tempo s è adattato a ℱ_s^W.
- E^P(|X_t|) < ∞ ∀t e E^P(X_t|ℱ_s) = X_s ∀s ≤ t

**D:** ⚠️ Come si definisce il processo di Wiener generalizzato, e quale funzione di densità di probabilità ha, secondo la lezione 06?
**R:** «Il processo: **dX = adt + bdW_t** (47) è detto **processo di Wiener generalizzato** ed ha la seguente funzione di densità di probabilità: **dX ~ N(adt, b√dt)**» (slide 37). Il docente: «dx è normale con media a dt e standard deviation b radice quadrata dt» ([00:34:00]–[00:34:11]). ⚠️ a moltiplica dt e dà la media, b moltiplica dW_t e dà la deviazione standard.
**Opzione:** dX = adt + bdW_t, con dX ~ N(adt, b√dt)
**Distrattori:**
- dX = adt + bdW_t, con dX ~ N(bdt, a√dt)
- B_s ≜ W_{t+s} - W_t = ΔW_t, con 0 ≤ s ≤ ∞, è anch'esso un moto browniano.
- Esiste un'unica variabile aleatoria non negativa Λ : (Ω, 𝒜) → (ℝ, 𝔹) tale che ∀A ∈ 𝒜 si ha ∫_A dP = ∫_A Λ dP̃.

**D:** ⚠️ Come si scrive che il valore atteso di una martingala è costante, secondo il test della lezione 06 (domanda 1)?
**R:** «**E^P(X_t)=E^P(X_s) ∀ 0 < s< t< ∞**», la chiave della piattaforma: è la (37) della slide 25, «Il valore atteso di una martingala è costante, i.e.: E^P(X_t) = E^P(X_s) ∀0 ≤ s < t < ∞» ([00:26:44]–[00:26:48]). ⚠️ Le domande 1, 2 e 3 hanno la **stessa batteria** e vanno studiate insieme: l'uguaglianza, le disuguaglianze e la variante con **Y_t** al posto di X_t, e la chiave di una è il distrattore delle altre. Qui sono false le disuguaglianze strette «<» e «>», che invertono il segno, e «E^P(Y_t) = E^P(X_s)», che scambia l'oggetto e non esiste nei materiali: nella lezione Y è solo la variabile aleatoria della proposizione (14)–(16). La piattaforma scrive «0 < s» dove la slide ha «0 ≤ s», in tutte le opzioni.
**Opzione:** E^P(X_t)=E^P(X_s) ∀ 0 < s< t< ∞
**Distrattori:**
- E^P(X_t) < E^P(X_s)∀ 0 < s < t < ∞
- E^P(X_t) > E^P(X_s)∀ 0 < s < t < ∞
- E^P(Y_t) = E^P(X_s)∀ 0 < s < t < ∞

**D:** ⚠️ Come si scrive che il valore atteso di una supermartingala è non crescente, secondo il test della lezione 06 (domanda 2)?
**R:** «**E^P(X_t) ≤ E^P(X_s)∀ 0 < s < t < ∞**», la (38) della slide 25: «una supermartingala è non crescente, i.e.: E^P(X_t) ≤ E^P(X_s)». ⚠️ «Non crescente» vuol dire che il valore atteso al tempo successivo t non supera quello al tempo s. L'uguaglianza è la chiave della domanda 1, cioè la martingala; «>» inverte il segno; «E^P(Y_t)=E^P(X_s)» scambia l'oggetto. Il transcript fa dire al docente «Per una sub-martingala è non crescente» ([00:26:54]): vale la slide, è la **super**martingala.
**Opzione:** E^P(X_t) ≤ E^P(X_s)∀ 0 < s < t < ∞
**Distrattori:**
- E^P(X_t)=E^P(X_s) ∀ 0 < s< t< ∞
- E^P(X_t) > E^P(X_s)∀ 0 < s < t < ∞
- E^P(Y_t)=E^P(X_s) ∀ 0 < s< t< ∞

**D:** ⚠️ Come si scrive che il valore atteso di una submartingala è non decrescente, secondo il test della lezione 06 (domanda 3)?
**R:** «**E^P(X_t) ≥ E^P(X_s) ∀ 0 < s< t< ∞**», la (39) della slide 25: «una submartingala è non decrescente, i.e.: E^P(X_t) ≥ E^P(X_s)» ([00:26:54]). Distrattori: l'uguaglianza della martingala (domanda 1), la disuguaglianza stretta «<», che inverte il segno, e la variante con Y_t. ⚠️ Nella domanda 2 la chiave era «≤»: chi ricorda solo che c'è una disuguaglianza, senza il verso, sbaglia una delle due.
**Opzione:** E^P(X_t) ≥ E^P(X_s) ∀ 0 < s< t< ∞
**Distrattori:**
- E^P(X_t)=E^P(X_s) ∀ 0 < s< t< ∞
- E^P(X_t) < E^P(X_s)∀ 0 < s < t < ∞
- E^P(Y_t)=E^P(X_s) ∀ 0 < s< t< ∞

**D:** ⚠️ Quando un processo stocastico è detto square-integrable, secondo il test della lezione 06 (domanda 4)?
**R:** «**E^P(X²_t) < ∞ ∀ t ≥ 0**», la (42) della slide 27: «Se un processo stocastico {X_t}_{t∈[0,∞)} è una martingala continua tale che: E^P(X_t²) < ∞ ∀t ≥ 0 esso è detto square-integrable» ([00:27:40]). La domanda tace che il processo dev'essere una **martingala continua**. ⚠️ «E^P(X_t) < ∞ ∀ t ≥ 0» non è la square-integrability: ricorda la condizione di **integrabilità** della martingala, E^P(|X_t|) < ∞ ∀t (29, slide 21), senza il valore assoluto e con il «∀ t ≥ 0» della (42). Le due disuguaglianze fra valori attesi vengono dalla batteria delle domande 1–3. La «≤» e la «E^P(X_t) < ∞» sono soddisfatte da una martingala square-integrable, ma non la definiscono.
**Opzione:** E^P(X²_t) < ∞ ∀ t ≥ 0
**Distrattori:**
- E^P(X_t) < E^P(X_s)∀ 0 < s < t < ∞
- E^P(X_t) ≤ E^P(X_s)∀ 0 < s < t < ∞
- E^P(X_t) < ∞ ∀ t ≥ 0

**D:** ⚠️ Quale funzione di densità di probabilità ha il processo di Wiener, secondo il test della lezione 06 (domanda 5)?
**R:** «**dX~N(0,dt^(1/2))**», la chiave della piattaforma: è la formula della slide 37, «processo di Wiener: dW_t ≜ ε√dt che ha la seguente funzione di densità di probabilità: dW_t ~ N(0, √dt)», con dX al posto di dW_t e l'esponente 1/2 al posto della radice. Qui il secondo parametro della normale è la **deviazione standard**: il docente dice «dVt è normale 0 radice quadrata di Δt» e, del processo generalizzato, «normale con media a dt e standard deviation b radice quadrata dt» ([00:33:55]–[00:34:11]). ⚠️ «dX~N(0,dt)» è la trappola della **convenzione**: le slide 28–29 dello stesso deck scrivono la normale con la **varianza**, (W_t - W_s) ~ N(0, (t - s)) e W_t ~ N(0, t), «Normale di valore atteso nullo e varianza t», e in quella notazione l'incremento dW_t sarebbe N(0, dt). La domanda riprende però la slide 37, quindi all'esame si segna la D. ℹ️ Integrazione (non dai materiali del corso): nei manuali la normale si scrive di solito N(μ, σ²), con la varianza, e in quella notazione la forma corrente è N(0, dt). «dX~Y(10,dt^(1/2))», con «Y» al posto di N e media 10, e «dX~N(1,dt^(1/2))», con media 1, non esistono nei materiali.
**Opzione:** dX~N(0,dt^(1/2))
**Distrattori:**
- dX~Y(10,dt^(1/2))
- dX~N(0,dt)
- dX~N(1,dt^(1/2))

## Lezione 07 — Processi Stocastici 2 – Teoremi fondamentali

**D:** ⚠️ Quali tre condizioni definiscono la classe 𝒱(0,T) dei processi stocastici ϑ_t(ω): [0,T] × Ω → ℝ, secondo la lezione 07?
**R:** Slide 2: ϑ_t(ω) «è 𝔹|_{[0,T]} × 𝒜-misurabile», con 𝔹|_{[0,T]} la σ-algebra di Borel ristretta a [0,T] e 𝒜 la σ-algebra dello spazio di probabilità (Ω, 𝒜, P) su cui è definito il moto browniano standard; «è ℱ^W_t-misurabile ovvero […] è **adattato** rispetto a {ℱ^W_t}, cioè alla filtrazione naturale generata dal moto Browniano standard»; «appartiene allo spazio dei processi **L²[0,T]** (cfr. equazione 24) e quindi soddisfa» **E[∫_0^T [ϑ_t(ω)]² dt] < ∞** (48). L'equazione 24 è del deck 06 ([00:00:13]–[00:01:24]). ⚠️ Dentro l'integrale c'è il **quadrato** di ϑ_t.
**Opzione:** ϑ_t(ω) è 𝔹|_{[0,T]} × 𝒜-misurabile; è ℱ^W_t-misurabile, cioè adattato alla filtrazione naturale generata dal moto browniano standard; appartiene allo spazio dei processi L²[0,T] e quindi E[∫_0^T [ϑ_t(ω)]² dt] < ∞.
**Distrattori:**
- ϑ_t(ω) è 𝔹|_{[0,T]} × 𝒜-misurabile; è ℱ^W_t-misurabile, cioè adattato alla filtrazione naturale generata dal moto browniano standard; appartiene allo spazio dei processi L²[0,T] e quindi E[∫_0^T ϑ_t(ω) dt] < ∞.
- Derivata prima rispetto a t continua e derivate prima e seconda rispetto a X_t continue; allora Y_t = g(t,X_t) è ancora un processo di Itô.
- Possono essere processi stocastici o deterministici; se sono stocastici, una forma che possono assumere è u_t = μ(t,X_t) e v_t = σ(t,X_t), cioè dX_t = μ(t,X_t) dt + σ(t,X_t) dW_t.

**D:** ⚠️ Come si definisce l'integrale stocastico I_T(X) di un processo stocastico semplice X_t, secondo la lezione 07?
**R:** Slide 3: «Sia X_t un processo stocastico semplice (cfr. equazioni 25, 26 e 27). Allora si definisce **integrale stocastico di X_t** e si denota con I_t(X) la variabile aleatoria così definita: **I_T(X)(ω) ≡ ∫_0^T X_s(ω) dW_s := ∑_{j=0}^{n-1} a_j(ω)(W_{t_{j+1}} - W_{t_j})**» (49). Il docente: «nel caso di processo stocastico discreto» ([00:01:24]–[00:01:57]). ⚠️ Si sommano gli incrementi del **moto browniano**, non del tempo; le equazioni 25–27 sono del deck 06.
**Opzione:** I_T(X)(ω) ≡ ∫_0^T X_s(ω) dW_s := ∑_{j=0}^{n-1} a_j(ω)(W_{t_{j+1}} - W_{t_j})
**Distrattori:**
- I_T(X)(ω) ≡ ∫_0^T X_s(ω) dW_s := ∑_{j=0}^{n-1} a_j(ω)(t_{j+1} - t_j)
- E^Q(X | ℱ^W_s) = E^P(X Z∗_t | ℱ^W_s)/Z∗_s
- dY_t = ∂/∂t g(t,X_t) dt + ∂/∂x g(t,X_t) dX_t + (1/2) ∂²/∂x² g(t,X_t) (dX_t)²

**D:** ⚠️ Che cosa garantisce, per un processo ϑ_t della classe 𝒱(0,T), il teorema di approssimazione con processi semplici della lezione 07 (formula 50)?
**R:** Slide 3: «Sia ϑ_t un processo stocastico appartenente alla classe 𝒱(0,T). Allora esiste una successione di processi stocastici semplici {X^n_t}_{n∈ℕ} tale che per ogni 0 ≤ T < ∞ si ha: **lim_{n→+∞} E[∫_0^T (X^n_t(ω) - ϑ_t(ω))² dt] = 0**» (50) ([00:01:57]–[00:02:29]). Il teorema della slide 4 aggiunge che anche gli integrali di Itô convergono: lim_{n→+∞} E[(I_T(X^n)(ω) - I_T(ϑ)(ω))²] = 0 (51) ([00:02:29]–[00:03:19]).
**Opzione:** Esiste una successione di processi stocastici semplici {X^n_t}_{n∈ℕ} tale che per ogni 0 ≤ T < ∞ si ha lim_{n→+∞} E[∫_0^T (X^n_t(ω) - ϑ_t(ω))² dt] = 0.
**Distrattori:**
- Esiste una successione di processi stocastici semplici {X^n_t}_{n∈ℕ} tale che per ogni 0 ≤ T < ∞ si ha lim_{n→+∞} E[∫_0^T (X^n_t(ω) + ϑ_t(ω))² dt] = 0.
- Esistono una costante X_0 = x ∈ ℝ e un processo ϑ_t progressivamente misurabile, con E^P(∫_0^t ϑ_s² ds) < ∞, tali che X_t = x + ∫_0^t ϑ_s dW_s, ossia dX_t = ϑ_t dW_t con X_0 = x.
- Q è una misura di probabilità equivalente a P sullo spazio misurabile (Ω, ℱ^W_T), e sotto Q il processo W̃_t = W_t - ∫_0^t ϑ_s ds è un moto browniano standard.

**D:** ⚠️ Come si definisce l'integrale di Itô I_T(ϑ) di un processo ϑ_t della classe 𝒱(0,T), secondo la lezione 07?
**R:** Slide 5: «Siano ϑ_t un processo appartenente alla classe 𝒱(0,T) e {X^n_t}_{n∈ℕ} una successione di processi semplici che approssima ϑ_t nel senso della 50. Allora l'**integrale di Itô** del processo ϑ_t è definito come: **I_T(ϑ)(ω) ≡ ∫_0^T ϑ_s(ω) dW_s := lim_{n→+∞} ∫_0^T X^n_s(ω) dW_s**, per ogni 0 ≤ T < ∞» (52). La nota la generalizza a estremi s e t, con 0 ≤ s ≤ t ≤ T (53). Il docente: «il limite per n che tende all'infinito dell'integrale tra 0 e t grande di x in DWS» ([00:03:19]–[00:04:08]).
**Opzione:** I_T(ϑ)(ω) ≡ ∫_0^T ϑ_s(ω) dW_s := lim_{n→+∞} ∫_0^T X^n_s(ω) dW_s, per ogni 0 ≤ T < ∞, dove {X^n_t} è una successione di processi semplici che approssima ϑ_t nel senso della 50.
**Distrattori:**
- I_T(ϑ)(ω) ≡ ∫_0^T ϑ_s(ω) dW_s := lim_{n→+∞} ∫_0^T X^n_s(ω) ds, per ogni 0 ≤ T < ∞, dove {X^n_t} è una successione di processi semplici che approssima ϑ_t nel senso della 50.
- X_t = X_s + ∫_s^t u_h dh + ∫_s^t v_h dW_h, 0 ≤ s ≤ t ≤ T < ∞, dove X_s è detto condizione iniziale.
- La derivata di Radon-Nikodym della misura di probabilità Q rispetto alla misura di probabilità equivalente P su ℱ^W_t: Z∗_t = dQ/dP|_{ℱ^W_t}.

**D:** ⚠️ Rispetto a quale filtrazione ogni integrale stocastico è una martingala, e con quale formula, secondo la lezione 07?
**R:** Slide 5: «Ogni integrale stocastico è una martingala rispetto alla **filtrazione naturale del moto browniano standard** 𝔽^W = {ℱ^W_t}, ossia, posto: 0 ≤ s ≤ t ≤ t′ ≤ T, si ha: **E[∫_s^{t′} ϑ_u(ω) dW_u | ℱ^W_t] = ∫_s^t ϑ_u(ω) dW_u**» (54). Il docente: «e questo si recupera attraverso la relazione 54» ([00:04:08]). ⚠️ Condizionando a ℱ^W_t, l'integrale fino a t′ ha per valore atteso l'integrale fino a **t**.
**Opzione:** Rispetto alla filtrazione naturale del moto browniano standard: E[∫_s^{t′} ϑ_u(ω) dW_u | ℱ^W_t] = ∫_s^t ϑ_u(ω) dW_u, con 0 ≤ s ≤ t ≤ t′ ≤ T.
**Distrattori:**
- Rispetto alla filtrazione naturale del moto browniano standard: E[∫_s^{t′} ϑ_u(ω) dW_u | ℱ^W_t] = ∫_s^{t′} ϑ_u(ω) dW_u, con 0 ≤ s ≤ t ≤ t′ ≤ T.
- dX_t = β_t dt + σ_t dW̃_t, con β_t = μ_t + ϑ_t σ_t
- X_t/X_s ~ LogN(e^(a(t-s)), e^(a(t-s)) · (e^(b²(t-s)) - 1))

**D:** ⚠️ Quanto valgono (dW_t)², dt · dt e dW_t · dt per un moto browniano standard W_t, secondo la proposizione della lezione 07 sull'algebra di Itô?
**R:** Slide 6: «Siano W_t e Z_t due moti browniani standard, allora si ha: **(dW_t)² = dt** (55); **dt · dt = (dt)²** (56); **dW_t · dt = √dt · dt = (dt)^(3/2)** (57)», con la radice scritta con l'indice 2. ⚠️ Il docente dice «dV dt è uguale a dt quadro» ([00:04:23]), ma subito dopo cita «di t tre mezzi» ([00:04:37]): vale la slide. Sono le tre chiavi delle domande 1–3 del test, che hanno lo stesso testo.
**Opzione:** (dW_t)² = dt; dt · dt = (dt)²; dW_t · dt = √dt · dt = (dt)^(3/2)
**Distrattori:**
- (dW_t)² = dt; dt · dt = (dt)²; dW_t · dt = (dt)²
- E(X_t | X_t ≤ X^ϰ) = (1/ϰ) x e^(a(t-s)) Φ(Φ^(-1)(ϰ) - b√(t-s))
- Z∗_0 = 1 e E^P(Z∗_t) = 1 per ogni t ∈ [0,T]

**D:** ⚠️ Quanto vale dW_t · dZ_t per due moti browniani standard W_t e Z_t, secondo la lezione 07?
**R:** Slide 6, formula (58): «dW_t · dZ_t = **0** (indipendenza); **ρ_wz dt** (correlazione secondo un coeff. di correl. pari a: ρ_wz)». Il docente: se è 0 «abbiamo l'indipendenza», altrimenti «la correlazione» con il suo coefficiente ([00:04:37]). È l'unica riga della proposizione in cui compare Z_t.
**Opzione:** 0 in caso di indipendenza; ρ_wz dt in caso di correlazione secondo un coefficiente di correlazione pari a ρ_wz.
**Distrattori:**
- ρ_wz dt in caso di indipendenza; 0 in caso di correlazione secondo un coefficiente di correlazione pari a ρ_wz.
- d(X_t · Y_t) = Y_t · dX_t + X_t · dY_t + dY_t · dX_t, e il prodotto è ancora un processo di Itô unidimensionale.
- Sotto certe condizioni, un ponte tra le equazioni differenziali stocastiche e le equazioni differenziali parziali.

**D:** ⚠️ Che cosa dice la nota della lezione 07 su (dt)² e (dt)^(3/2) rispetto a dt?
**R:** Slide 6, nota: «Si noti che sia (dt)² che (dt)^(3/2) hanno un **ordine di infinitesimo superiore** a dt e pertanto nelle equazioni in cui uno di essi dovesse comparire sommato algebricamente a un termine in dt, potrà essere **trascurato** e quindi considerato **pari a 0**». Il docente: «hanno un ordine di infinitesimo superiore a di t e quindi sono pari a 0» ([00:04:37]). Per questo il lemma di Itô scrive (dt)² = dt dW_t = 0 (slide 9, formula 64).
**Opzione:** Hanno un ordine di infinitesimo superiore a dt: se compaiono sommati algebricamente a un termine in dt possono essere trascurati e considerati pari a 0.
**Distrattori:**
- Hanno un ordine di infinitesimo inferiore a dt: se compaiono sommati algebricamente a un termine in dt possono essere trascurati e considerati pari a 0.
- Con il processo stocastico esponenziale Z∗_t, perché le SDE 78 e 74 hanno la stessa espressione e i due processi hanno la stessa condizione iniziale, Z∗_0 = ℰ_0(U) = 1.
- u_t è detto drift e v_t è detto diffusione; dX_t = u_t dt + v_t dW_t si dice differenziale stocastico o equazione differenziale stocastica o SDE.

**D:** ⚠️ Quali regole di moltiplicazione dei differenziali accompagnano il lemma di Itô (formula 64), secondo la lezione 07?
**R:** Slide 9, formula (64): «**(dW_t)² = dt** e **(dt)² = dt dW_t = 0**». Il docente: «dove dv quadro è uguale a dt e dt e dt dv t sono uguali a 0» ([00:06:51]). ⚠️ Non contraddice la slide 6, dove dt · dt = (dt)² e dW_t · dt = (dt)^(3/2): per la nota della stessa slide 6 queste potenze, accanto a un termine in dt, si considerano pari a 0.
**Opzione:** (dW_t)² = dt e (dt)² = dt dW_t = 0
**Distrattori:**
- (dW_t)² = 0 e (dt)² = dt dW_t = dt
- I_T(X)(ω) ≡ ∫_0^T X_s(ω) dW_s := ∑_{j=0}^{n-1} a_j(ω)(W_{t_{j+1}} - W_{t_j})
- Z∗_0 = 1 e E^P(Z∗_t) = 1 per ogni t ∈ [0,T]

**D:** ⚠️ Come si definisce un processo di Itô X_t, e come si chiama X_s, secondo la lezione 07?
**R:** Slide 7: «Sia {W_t} un moto browniano standard su (Ω, 𝒜, P). Si definisce **processo di Itô** il processo stocastico X_t definito su (Ω, 𝒜, P) dalla seguente equazione: **X_t = X_s + ∫_s^t u_h dh + ∫_s^t v_h dW_h**, 0 ≤ s ≤ t ≤ T < ∞ (59) ove X_s è detto **condizione iniziale**» ([00:04:59]–[00:05:22]). ⚠️ Il drift u_h si integra in dh, la diffusione v_h in dW_h.
**Opzione:** X_t = X_s + ∫_s^t u_h dh + ∫_s^t v_h dW_h, 0 ≤ s ≤ t ≤ T < ∞, dove X_s è detto condizione iniziale.
**Distrattori:**
- X_t = X_s + ∫_s^t u_h dW_h + ∫_s^t v_h dh, 0 ≤ s ≤ t ≤ T < ∞, dove X_s è detto condizione iniziale.
- L'esponenziale stocastico di U_t, cioè la soluzione della SDE dℰ_t(U) = ℰ_t(U) dU_t = ℰ_t(U) ϑ_t dW_t con la condizione iniziale ℰ_0(U) = 1.
- P(x e^(min) ≤ X_t ≤ x e^(max)) = ϰ, con min = b z_{ϰ/2} √(t-s) + (a - b²/2)(t-s) e max = b z_{(1-ϰ/2)} √(t-s) + (a - b²/2)(t-s).

**D:** ⚠️ Nel differenziale stocastico dX_t = u_t dt + v_t dW_t, come si chiamano u_t e v_t, e con quali nomi si indica la (60), secondo la lezione 07?
**R:** Slide 7: «Sia X_t un processo di Itô. Allora si dice che X_t possiede **differenziale stocastico** o **equazione differenziale stocastica** o **SDE** dato da: dX_t = u_t dt + v_t dW_t (60) dove il termine u_t è detto **drift** e il termine v_t è detto **diffusione**». Il docente: «dove il termine u è il drift e il termine v è la diffusione» ([00:05:22]).
**Opzione:** u_t è detto drift e v_t è detto diffusione; dX_t = u_t dt + v_t dW_t si dice differenziale stocastico o equazione differenziale stocastica o SDE.
**Distrattori:**
- u_t è detto diffusione e v_t è detto drift; dX_t = u_t dt + v_t dW_t si dice differenziale stocastico o equazione differenziale stocastica o SDE.
- Hanno un ordine di infinitesimo superiore a dt: se compaiono sommati algebricamente a un termine in dt possono essere trascurati e considerati pari a 0.
- Moto geometrico browniano a coefficienti costanti; il docente chiama la sua soluzione random walk esponenziale.

**D:** ⚠️ Che natura possono avere drift e diffusione della SDE 60, e quale forma possono assumere se sono processi stocastici, secondo la nota della lezione 07?
**R:** Slide 8, nota: «Il drift e la diffusione dell'equazione differenziale stocastica 60 possono essere **processi stocastici o processi deterministici**. Nel caso in cui siano processi stocastici una forma che possono assumere è la seguente: **u_t = μ(t,X_t)** e **v_t = σ(t,X_t)** e la corrispondente specificazione della 60 è: dX_t = μ(t,X_t) dt + σ(t,X_t) dW_t» (62) ([00:05:53]). La stessa slide definisce la soluzione del problema di Cauchy: il processo che risolve la 60 per una data condizione iniziale X_s = x (61) ([00:05:42]).
**Opzione:** Possono essere processi stocastici o deterministici; se sono stocastici, una forma che possono assumere è u_t = μ(t,X_t) e v_t = σ(t,X_t), cioè dX_t = μ(t,X_t) dt + σ(t,X_t) dW_t.
**Distrattori:**
- Possono essere processi stocastici o deterministici; se sono stocastici, una forma che possono assumere è u_t = μ(t) e v_t = σ(t), cioè dX_t = μ(t) dt + σ(t) dW_t.
- ϑ_t(ω) è 𝔹|_{[0,T]} × 𝒜-misurabile; è ℱ^W_t-misurabile, cioè adattato alla filtrazione naturale generata dal moto browniano standard; appartiene allo spazio dei processi L²[0,T] e quindi E[∫_0^T [ϑ_t(ω)]² dt] < ∞.
- Derivata prima rispetto a t continua e derivate prima e seconda rispetto a X_t continue; allora Y_t = g(t,X_t) è ancora un processo di Itô.

**D:** ⚠️ Quali ipotesi chiede il lemma di Itô sulla funzione g(t,X_t): [0,+∞) × ℝ → ℝ, e che cosa conclude su Y_t = g(t,X_t)?
**R:** Slide 9: «Sia X_t un processo di Itô con differenziale stocastico: dX_t = u_t dt + v_t dW_t (60). Sia inoltre: g(t,X_t): [0,+∞) × ℝ → ℝ una funzione con **derivata prima rispetto a t continua** e con **derivate prima e seconda rispetto a X_t continue**. Allora il processo stocastico Y_t = g(t,X_t) è **ancora un processo di Itô**» ([00:06:21]).
**Opzione:** Derivata prima rispetto a t continua e derivate prima e seconda rispetto a X_t continue; allora Y_t = g(t,X_t) è ancora un processo di Itô.
**Distrattori:**
- Derivate prima e seconda rispetto a t continue e derivata prima rispetto a X_t continua; allora Y_t = g(t,X_t) è ancora un processo di Itô.
- Possono essere processi stocastici o deterministici; se sono stocastici, una forma che possono assumere è u_t = μ(t,X_t) e v_t = σ(t,X_t), cioè dX_t = μ(t,X_t) dt + σ(t,X_t) dW_t.
- X_t Z∗_t è una P-martingala rispetto alla medesima filtrazione; viceversa, se X_t Z∗_t è una P-martingala, X_t è una Q-martingala.

**D:** ⚠️ Qual è il differenziale stocastico dY_t di Y_t = g(t,X_t) nel lemma di Itô (formula 63)?
**R:** Slide 9: «**dY_t = ∂/∂t g(t,X_t) dt + ∂/∂x g(t,X_t) dX_t + (1/2) ∂²/∂x² g(t,X_t) (dX_t)²**» (63). Il docente: la derivata seconda di g rispetto a x per dx quadro, «ovviamente moltiplicato per un mezzo» ([00:06:45]–[00:06:51]). ⚠️ Il terzo termine, con (dX_t)², è quello che il calcolo ordinario non ha.
**Opzione:** dY_t = ∂/∂t g(t,X_t) dt + ∂/∂x g(t,X_t) dX_t + (1/2) ∂²/∂x² g(t,X_t) (dX_t)²
**Distrattori:**
- dY_t = ∂/∂t g(t,X_t) dt + ∂/∂x g(t,X_t) dX_t + ∂²/∂x² g(t,X_t) (dX_t)²
- E^Q(X | ℱ^W_s) = E^P(X Z∗_t | ℱ^W_s)/Z∗_s
- L'esponenziale stocastico di U_t, cioè la soluzione della SDE dℰ_t(U) = ℰ_t(U) dU_t = ℰ_t(U) ϑ_t dW_t con la condizione iniziale ℰ_0(U) = 1.

**D:** ⚠️ Come si scrive il lemma di Itô in forma esplicita (formula 65), con dX_t = u_t dt + v_t dW_t?
**R:** Slide 9: «ossia: **dY_t = [∂/∂t g(t,X_t) + ∂/∂x g(t,X_t) u_t + (1/2) ∂²/∂x² g(t,X_t) v_t²] dt + [∂/∂x g(t,X_t) v_t] dW_t**» (65). Il docente: «La relazione 63 può essere quindi riesplicitata analiticamente con la formula 65» ([00:07:06]). ⚠️ Nel termine in dt la derivata seconda moltiplica il **quadrato della diffusione** v_t², la derivata prima il drift u_t.
**Opzione:** dY_t = [∂/∂t g(t,X_t) + ∂/∂x g(t,X_t) u_t + (1/2) ∂²/∂x² g(t,X_t) v_t²] dt + [∂/∂x g(t,X_t) v_t] dW_t
**Distrattori:**
- dY_t = [∂/∂t g(t,X_t) + ∂/∂x g(t,X_t) u_t + (1/2) ∂²/∂x² g(t,X_t) u_t²] dt + [∂/∂x g(t,X_t) v_t] dW_t
- d(X_t · Y_t) = Y_t · dX_t + X_t · dY_t + dY_t · dX_t, e il prodotto è ancora un processo di Itô unidimensionale.
- E(X_t | X_t ≤ X^ϰ) = (1/ϰ) x e^(a(t-s)) Φ(Φ^(-1)(ϰ) - b√(t-s))

**D:** ⚠️ Qual è il differenziale stocastico del prodotto X_t · Y_t di due processi di Itô unidimensionali, secondo la regola di Leibniz della lezione 07?
**R:** Slide 10: «il prodotto di questi due processi, i.e. la funzione g_t(X_t,Y_t) = X_t · Y_t, è ancora un processo di Itô unidimensionale il cui differenziale stocastico è dato da: **dg_t(X_t,Y_t) = d(X_t · Y_t) = Y_t · dX_t + X_t · dY_t + dY_t · dX_t**» (68). Il docente: «y dx più x dy più dy dx» ([00:07:14]–[00:07:48]). In forma esplicita (69), con dX_t = μ_{1,t} dt + σ_{1,t} dW_t e dY_t = μ_{2,t} dt + σ_{2,t} dW_t: (Y_t μ_{1,t} + X_t μ_{2,t} + σ_{1,t} σ_{2,t}) dt + (Y_t σ_{1,t} + X_t σ_{2,t}) dW_t. ⚠️ Il termine dY_t · dX_t manca nella regola del prodotto ordinaria.
**Opzione:** d(X_t · Y_t) = Y_t · dX_t + X_t · dY_t + dY_t · dX_t, e il prodotto è ancora un processo di Itô unidimensionale.
**Distrattori:**
- d(X_t · Y_t) = Y_t · dX_t + X_t · dY_t, e il prodotto è ancora un processo di Itô unidimensionale.
- dX_t = β_t dt + σ_t dW̃_t, con β_t = μ_t + ϑ_t σ_t
- (dW_t)² = dt e (dt)² = dt dW_t = 0

**D:** ⚠️ Che cosa afferma il teorema di rappresentazione delle martingale per una P-martingala X_t square-integrable rispetto a ℱ^W_t, secondo la lezione 07?
**R:** Slide 11: «Allora esistono una **costante X_0 = x ∈ ℝ** e un processo stocastico {ϑ_t}, **progressivamente misurabile** rispetto a {ℱ^W_t} e con E^P(∫_0^t ϑ_s² ds) < ∞ per ogni t ∈ [0,T], tali che {X_t} ammette la seguente rappresentazione ∀t ∈ [0,T]: **X_t = x + ∫_0^t ϑ_s dW_s** (70) o, equivalentemente, in forma differenziale: **dX_t = ϑ_t dW_t**, X_0 = x (71)» ([00:07:48]–[00:08:55]). ⚠️ Nessun termine in dt: la martingala è un integrale stocastico.
**Opzione:** Esistono una costante X_0 = x ∈ ℝ e un processo ϑ_t progressivamente misurabile, con E^P(∫_0^t ϑ_s² ds) < ∞, tali che X_t = x + ∫_0^t ϑ_s dW_s, ossia dX_t = ϑ_t dW_t con X_0 = x.
**Distrattori:**
- Esistono una costante X_0 = x ∈ ℝ e un processo ϑ_t progressivamente misurabile, con E^P(∫_0^t ϑ_s² ds) < ∞, tali che X_t = x + ∫_0^t ϑ_s ds, ossia dX_t = ϑ_t dt con X_0 = x.
- Esiste una successione di processi stocastici semplici {X^n_t}_{n∈ℕ} tale che per ogni 0 ≤ T < ∞ si ha lim_{n→+∞} E[∫_0^T (X^n_t(ω) - ϑ_t(ω))² dt] = 0.
- dX_t = aX_t dt + bX_t dW_t con X_s = x; la soluzione è X_t = x e^(b(W_t - W_s) + (a - b²/2)(t - s)), 0 ≤ s ≤ t ≤ T < ∞.

**D:** ⚠️ Sotto quale condizione su ϑ_t il processo stocastico esponenziale Z∗_t è una P-martingala, e come si definisce Z∗_t, secondo la lezione 07?
**R:** Slide 12: se ϑ_t è misurabile, adattato e tale che **E^P(e^((1/2)∫_0^T ϑ_u² du)) < ∞** (72), «il processo stocastico esponenziale {Z∗_t} definito come: **Z∗_t := e^(∫_0^t ϑ_u dW_u - (1/2)∫_0^t ϑ_u² du)** (73) è una P-martingala rispetto a {ℱ^W_t}» ([00:08:55]–[00:09:46]). Nella dimostrazione il lemma di Itô dà **dZ∗_t = Z∗_t ϑ_t dW_t** (74), che in forma integrale è un integrale stocastico: «Poichè ogni integrale stocastico è una martingala, la tesi è dimostrata» (slide 13–14; [00:09:46]–[00:10:14]).
**Opzione:** Se E^P(e^((1/2)∫_0^T ϑ_u² du)) < ∞, il processo Z∗_t := e^(∫_0^t ϑ_u dW_u - (1/2)∫_0^t ϑ_u² du) è una P-martingala rispetto a ℱ^W_t.
**Distrattori:**
- Se E^P(e^((1/2)∫_0^T ϑ_u² du)) < ∞, il processo Z∗_t := e^(∫_0^t ϑ_u dW_u + (1/2)∫_0^t ϑ_u² du) è una P-martingala rispetto a ℱ^W_t.
- v(s,x) = E[f(X_T) e^(∫_s^T g(t,X_t) dt) | X_s = x] soddisfa v′_s + μ(s,x) v′_x + (1/2) σ²(s,x) v″_{xx} + g(s,x) v(s,x) = 0, con la condizione finale lim_{s→T} v(s,x) = f(X_T).
- I_T(ϑ)(ω) ≡ ∫_0^T ϑ_s(ω) dW_s := lim_{n→+∞} ∫_0^T X^n_s(ω) dW_s, per ogni 0 ≤ T < ∞, dove {X^n_t} è una successione di processi semplici che approssima ϑ_t nel senso della 50.

**D:** ⚠️ Quanto valgono Z∗_0 e E^P(Z∗_t) per il processo stocastico esponenziale della lezione 07?
**R:** Slide 15: «Sia {Z∗_t} il processo stocastico esponenziale di cui alla 73. Allora vale la seguente uguaglianza: **Z∗_0 = 1** (75)»; «Per ogni t ∈ [0,T] il valore atteso del processo stocastico esponenziale {Z∗_t} di cui alla 73 è pari a 1, i.e.: **E^P(Z∗_t) = 1** (76)». Il docente: «z 0 star è uguale a 1» e il valore atteso «è pari a 1» ([00:10:14]–[00:10:36]).
**Opzione:** Z∗_0 = 1 e E^P(Z∗_t) = 1 per ogni t ∈ [0,T]
**Distrattori:**
- Z∗_0 = 0 e E^P(Z∗_t) = 0 per ogni t ∈ [0,T]
- (dW_t)² = dt e (dt)² = dt dW_t = 0
- 0 in caso di indipendenza; ρ_wz dt in caso di correlazione secondo un coefficiente di correlazione pari a ρ_wz.

**D:** ⚠️ Come si definisce il Doléans Esponenziale ℰ_t(U) del processo U_t, con dU_t := ϑ_t dW_t, secondo la lezione 07?
**R:** Slide 17: «Si definisce **Doléans Esponenziale** del processo {U_t} e si denota con la scrittura {ℰ_t(U)} l'**esponenziale stocastico** di U_t, ovvero la soluzione della seguente equazione differenziale stocastica: **dℰ_t(U) = ℰ_t(U) dU_t = ℰ_t(U) ϑ_t dW_t** (78) con la condizione iniziale: **ℰ_0(U) = 1** (79)». Il processo U_t è definito in forma differenziale, dU_t := ϑ_t dW_t (77), sotto la condizione (72) (slide 16; [00:10:36]–[00:11:37]).
**Opzione:** L'esponenziale stocastico di U_t, cioè la soluzione della SDE dℰ_t(U) = ℰ_t(U) dU_t = ℰ_t(U) ϑ_t dW_t con la condizione iniziale ℰ_0(U) = 1.
**Distrattori:**
- L'esponenziale stocastico di U_t, cioè la soluzione della SDE dℰ_t(U) = ℰ_t(U) dU_t = ℰ_t(U) ϑ_t dW_t con la condizione iniziale ℰ_0(U) = 0.
- X_t = X_s + ∫_s^t u_h dh + ∫_s^t v_h dW_h, 0 ≤ s ≤ t ≤ T < ∞, dove X_s è detto condizione iniziale.
- Esiste una successione di processi stocastici semplici {X^n_t}_{n∈ℕ} tale che per ogni 0 ≤ T < ∞ si ha lim_{n→+∞} E[∫_0^T (X^n_t(ω) - ϑ_t(ω))² dt] = 0.

**D:** ⚠️ Con quale processo coincide il Doléans Esponenziale ℰ_t(U), e su quali due fatti si fonda la dimostrazione, secondo la lezione 07?
**R:** Slide 18–19: la SDE di ℰ_t(U), la 78, «ha la stessa espressione della SDE che governa il processo stocastico esponenziale {Z∗_t}», la 74; «Inoltre, dalla 75 e dalla 79, segue che i due processi hanno anche la stessa condizione iniziale, i.e. Z∗_0 = ℰ_0(U) = 1 e quindi coincidono». Corollari della slide 20: ℰ_t(U) = Z∗_t (81), ℰ_t(U) è una P-martingala, e E^P(ℰ_t(U)) = 1 (82). Il docente: «Il doleanz esponenziale del processo U coincide con il processo stocastico Z star di quella 73» ([00:11:55]–[00:12:53]).
**Opzione:** Con il processo stocastico esponenziale Z∗_t, perché le SDE 78 e 74 hanno la stessa espressione e i due processi hanno la stessa condizione iniziale, Z∗_0 = ℰ_0(U) = 1.
**Distrattori:**
- Con il processo stocastico esponenziale Z∗_t, perché le SDE 78 e 74 hanno la stessa espressione e i due processi hanno lo stesso valore finale, Z∗_T = ℰ_T(U) = 1.
- Hanno un ordine di infinitesimo superiore a dt: se compaiono sommati algebricamente a un termine in dt possono essere trascurati e considerati pari a 0.
- Sotto certe condizioni, un ponte tra le equazioni differenziali stocastiche e le equazioni differenziali parziali.

**D:** ⚠️ Che cosa afferma il teorema di Girsanov sulla misura Q(A) := E^P(ℰ_t(U) · 𝟙_A) e sul processo W̃_t, secondo la lezione 07?
**R:** Slide 21: per ogni ϑ_t misurabile, adattato e che soddisfa la (72), il Doléans Esponenziale (80) «è tale che per ogni A ∈ ℱ^W_T: Q(A) := E^P(ℰ_t(U) · 𝟙_A) (83) è una **misura di probabilità equivalente a P** sullo spazio misurabile (Ω, ℱ^W_T) e sotto tale misura di probabilità il processo stocastico: **W̃_t = W_t - ∫_0^t ϑ_s ds** (84) è un **moto browniano standard**» ([00:12:53]–[00:14:00]). Corollari della slide 22: Q(A) := E^P(Z∗_T · 𝟙_A) (85) e dW̃_t = dW_t - (dZ∗_t/Z∗_t) dW_t (86) ([00:14:00]–[00:14:28]). ⚠️ Nella (84) l'integrale è in **ds**.
**Opzione:** Q è una misura di probabilità equivalente a P sullo spazio misurabile (Ω, ℱ^W_T), e sotto Q il processo W̃_t = W_t - ∫_0^t ϑ_s ds è un moto browniano standard.
**Distrattori:**
- Q è una misura di probabilità equivalente a P sullo spazio misurabile (Ω, ℱ^W_T), e sotto Q il processo W̃_t = W_t - ∫_0^t ϑ_s dW_s è un moto browniano standard.
- Esistono una costante X_0 = x ∈ ℝ e un processo ϑ_t progressivamente misurabile, con E^P(∫_0^t ϑ_s² ds) < ∞, tali che X_t = x + ∫_0^t ϑ_s dW_s, ossia dX_t = ϑ_t dW_t con X_0 = x.
- ϑ_t(ω) è 𝔹|_{[0,T]} × 𝒜-misurabile; è ℱ^W_t-misurabile, cioè adattato alla filtrazione naturale generata dal moto browniano standard; appartiene allo spazio dei processi L²[0,T] e quindi E[∫_0^T [ϑ_t(ω)]² dt] < ∞.

**D:** ⚠️ Che cos'è Z∗_t rispetto alle misure di probabilità Q e P, secondo la proposizione (87) della lezione 07?
**R:** Slide 23: «Per ogni dato t ∈ [0,T] la v.a.: Z∗_t := e^(∫_0^t ϑ_u dW_u - (1/2)∫_0^t ϑ_u² du) è la **derivata di Radon-Nikodym** della misura di probabilità **Q** rispetto alla misura di probabilità equivalente **P** su ℱ^W_t, i.e.: **Z∗_t = dQ/dP|_{ℱ^W_t}** (87)». La dimostrazione rinvia all'equazione 9 del deck 06, che definisce la derivata di Radon-Nikodym. Il docente: «z t star non è altro che dq su dp rispetto alla filtrazione naturale» ([00:14:28]–[00:15:08]).
**Opzione:** La derivata di Radon-Nikodym della misura di probabilità Q rispetto alla misura di probabilità equivalente P su ℱ^W_t: Z∗_t = dQ/dP|_{ℱ^W_t}.
**Distrattori:**
- La derivata di Radon-Nikodym della misura di probabilità P rispetto alla misura di probabilità equivalente Q su ℱ^W_t: Z∗_t = dP/dQ|_{ℱ^W_t}.
- f_{X_t/X_s}(x_t/x) = 1/(√(2π) b √(t-s) · x_t/x) · e^(-(ln(x_t/x) - (a - b²/2)(t-s))²/(2b²(t-s)))
- Rispetto alla filtrazione naturale del moto browniano standard: E[∫_s^{t′} ϑ_u(ω) dW_u | ℱ^W_t] = ∫_s^t ϑ_u(ω) dW_u, con 0 ≤ s ≤ t ≤ t′ ≤ T.

**D:** ⚠️ Che cosa afferma la regola di Bayes della lezione 07 per una variabile aleatoria X con E^P(|X|) < ∞ e 0 ≤ s ≤ t ≤ T?
**R:** Slide 25: «Allora per ogni 0 ≤ s ≤ t ≤ T vale la seguente uguaglianza: **E^Q(X | ℱ^W_s) = E^P(X Z∗_t | ℱ^W_s)/Z∗_s**» (88). Il docente: il valore atteso sotto Q di X condizionato «è uguale al valore atteso di P di X per Z T star condizionato alla medesima filtrazione diviso Z star di S» ([00:16:04]–[00:16:50]). ⚠️ Z∗_t al numeratore, Z∗_s al denominatore.
**Opzione:** E^Q(X | ℱ^W_s) = E^P(X Z∗_t | ℱ^W_s)/Z∗_s
**Distrattori:**
- E^Q(X | ℱ^W_s) = E^P(X Z∗_s | ℱ^W_s)/Z∗_t
- dY_t = ∂/∂t g(t,X_t) dt + ∂/∂x g(t,X_t) dX_t + (1/2) ∂²/∂x² g(t,X_t) (dX_t)²
- X_t/X_s ~ LogN(e^(a(t-s)), e^(a(t-s)) · (e^(b²(t-s)) - 1))

**D:** ⚠️ Se X_t è una Q-martingala rispetto a ℱ^W_t, che cosa è il processo X_t Z∗_t, e che cosa vale nel verso opposto, secondo la lezione 07?
**R:** Slide 26, corollario: «Sia {X_t} una Q-martingala rispetto alla filtrazione {ℱ^W_t}. Allora il processo {X_t Z∗_t} è una **P-martingala** rispetto alla medesima filtrazione. Viceversa se il processo {X_t Z∗_t} è una P-martingala rispetto alla filtrazione {ℱ^W_t} allora il processo {X_t} è una **Q-martingala** rispetto alla medesima filtrazione» ([00:16:50]–[00:17:16]).
**Opzione:** X_t Z∗_t è una P-martingala rispetto alla medesima filtrazione; viceversa, se X_t Z∗_t è una P-martingala, X_t è una Q-martingala.
**Distrattori:**
- X_t Z∗_t è una Q-martingala rispetto alla medesima filtrazione; viceversa, se X_t Z∗_t è una Q-martingala, X_t è una P-martingala.
- u_t è detto drift e v_t è detto diffusione; dX_t = u_t dt + v_t dW_t si dice differenziale stocastico o equazione differenziale stocastica o SDE.
- Con il processo stocastico esponenziale Z∗_t, perché le SDE 78 e 74 hanno la stessa espressione e i due processi hanno la stessa condizione iniziale, Z∗_0 = ℰ_0(U) = 1.

**D:** ⚠️ Se sotto P la dinamica di X_t è dX_t = μ_t dt + σ_t dW_t, quale SDE la governa sotto Q, secondo la lezione 07?
**R:** Slide 26: «Allora la dinamica di X_t sotto la misura di probabilità Q è governata dalla seguente SDE: **dX_t = β_t dt + σ_t dW̃_t** (90) ove: **β_t = μ_t + ϑ_t σ_t** (91)». Nella dimostrazione (slide 27) la 84 in forma differenziale, dW̃_t = dW_t - ϑ_t dt (92), dà dX_t = μ_t dt + σ_t (dW̃_t + ϑ_t dt) = (μ_t + ϑ_t σ_t) dt + σ_t dW̃_t ([00:17:16]–[00:18:14]). ⚠️ Cambia il drift, la diffusione σ_t resta la stessa.
**Opzione:** dX_t = β_t dt + σ_t dW̃_t, con β_t = μ_t + ϑ_t σ_t
**Distrattori:**
- dX_t = β_t dt + σ_t dW̃_t, con β_t = μ_t - ϑ_t σ_t
- I_T(X)(ω) ≡ ∫_0^T X_s(ω) dW_s := ∑_{j=0}^{n-1} a_j(ω)(W_{t_{j+1}} - W_{t_j})
- dY_t = [∂/∂t g(t,X_t) + ∂/∂x g(t,X_t) u_t + (1/2) ∂²/∂x² g(t,X_t) v_t²] dt + [∂/∂x g(t,X_t) v_t] dW_t

**D:** ⚠️ Quale funzione v(s,x) e quale equazione compaiono nella tesi del teorema di Feynman-Kac della lezione 07?
**R:** Slide 28: «Allora la funzione: **v(s,x) = E[f(X_T) e^(∫_s^T g(t,X_t) dt) | X_s = x]**, 0 ≤ s ≤ T (94) soddisfa l'equazione: **v′_s + μ(s,x) v′_x + (1/2) σ²(s,x) v″_{xx} + g(s,x) v(s,x) = 0** (95) con la **condizione finale**: lim_{s→T} v(s,x) = f(X_T)», dove X_t risolve dX_t = μ(t,X_t) dt + σ(t,X_t) dW_t con X_s = x (93) ([00:18:14]–[00:19:43]). ⚠️ La condizione è **finale**, non iniziale come nel problema di Cauchy.
**Opzione:** v(s,x) = E[f(X_T) e^(∫_s^T g(t,X_t) dt) | X_s = x] soddisfa v′_s + μ(s,x) v′_x + (1/2) σ²(s,x) v″_{xx} + g(s,x) v(s,x) = 0, con la condizione finale lim_{s→T} v(s,x) = f(X_T).
**Distrattori:**
- v(s,x) = E[f(X_T) e^(∫_s^T g(t,X_t) dt) | X_s = x] soddisfa v′_s + μ(s,x) v′_x + (1/2) σ²(s,x) v″_{xx} + g(s,x) v(s,x) = 0, con la condizione iniziale lim_{s→0} v(s,x) = f(X_0).
- Se E^P(e^((1/2)∫_0^T ϑ_u² du)) < ∞, il processo Z∗_t := e^(∫_0^t ϑ_u dW_u - (1/2)∫_0^t ϑ_u² du) è una P-martingala rispetto a ℱ^W_t.
- X^ϰ = x e^(Φ^(-1)(ϰ) b √(t-s) + (a - b²/2)(t-s)), dove ϰ = P(X_t ≤ X^ϰ) e Φ^(-1)(ϰ) è l'inversa della funzione di ripartizione della normale standardizzata valutata in ϰ.

**D:** ⚠️ Che cosa definisce, in altri termini, il teorema di Feynman-Kac, secondo il docente della lezione 07?
**R:** Il docente, dopo aver letto la slide 28: «In altri termini il teorema di Feynman-Kac definisce **sotto certe condizioni** un **ponte** tra le equazioni differenziali **stocastiche** e le equazioni differenziali **parziali**» ([00:19:43]). La frase non è nella slide. Nel teorema la SDE è la (93) e l'equazione alle derivate parziali è la (95).
**Opzione:** Sotto certe condizioni, un ponte tra le equazioni differenziali stocastiche e le equazioni differenziali parziali.
**Distrattori:**
- Sotto certe condizioni, un ponte tra la misura di probabilità P e una misura di probabilità equivalente Q.
- Moto geometrico browniano a coefficienti costanti; il docente chiama la sua soluzione random walk esponenziale.
- X_t Z∗_t è una P-martingala rispetto alla medesima filtrazione; viceversa, se X_t Z∗_t è una P-martingala, X_t è una Q-martingala.

**D:** ⚠️ Quale SDE definisce il moto geometrico browniano a coefficienti costanti, e qual è la sua soluzione, secondo la lezione 07?
**R:** Slide 29: «Il problema di Cauchy definito dalla seguente SDE e condizione iniziale, i.e.: **dX_t = aX_t dt + bX_t dW_t** (96), X_s = x è un processo stocastico detto **Moto Geometrico Browniano a coefficienti costanti** la cui soluzione è: **X_t = x e^(b(W_t - W_s) + (a - b²/2)(t - s))**, 0 ≤ s ≤ t ≤ T < ∞ (97)». Il docente la chiama «cosiddetto random walk esponenziale» ([00:19:56]–[00:20:22]). ⚠️ Nell'esponente c'è **a - b²/2**.
**Opzione:** dX_t = aX_t dt + bX_t dW_t con X_s = x; la soluzione è X_t = x e^(b(W_t - W_s) + (a - b²/2)(t - s)), 0 ≤ s ≤ t ≤ T < ∞.
**Distrattori:**
- dX_t = aX_t dt + bX_t dW_t con X_s = x; la soluzione è X_t = x e^(b(W_t - W_s) + (a + b²/2)(t - s)), 0 ≤ s ≤ t ≤ T < ∞.
- I_T(ϑ)(ω) ≡ ∫_0^T ϑ_s(ω) dW_s := lim_{n→+∞} ∫_0^T X^n_s(ω) dW_s, per ogni 0 ≤ T < ∞, dove {X^n_t} è una successione di processi semplici che approssima ϑ_t nel senso della 50.
- La derivata di Radon-Nikodym della misura di probabilità Q rispetto alla misura di probabilità equivalente P su ℱ^W_t: Z∗_t = dQ/dP|_{ℱ^W_t}.

**D:** ⚠️ Che nome dà la slide al processo definito da dX_t = aX_t dt + bX_t dW_t con X_s = x, e come chiama il docente la sua soluzione?
**R:** Slide 29: è «un processo stocastico detto **Moto Geometrico Browniano a coefficienti costanti**». Il docente, letta la soluzione (97): «**cosiddetto random walk esponenziale**» ([00:20:04]); il nome è solo nel transcript. ⚠️ Il **processo di Wiener generalizzato** della lezione 06 è un'altra cosa: dX = a dt + b dW_t, con coefficienti che non moltiplicano X (deck 06, slide 37).
**Opzione:** Moto geometrico browniano a coefficienti costanti; il docente chiama la sua soluzione random walk esponenziale.
**Distrattori:**
- Processo di Wiener generalizzato; il docente chiama la sua soluzione random walk esponenziale.
- Q è una misura di probabilità equivalente a P sullo spazio misurabile (Ω, ℱ^W_T), e sotto Q il processo W̃_t = W_t - ∫_0^t ϑ_s ds è un moto browniano standard.
- Rispetto alla filtrazione naturale del moto browniano standard: E[∫_s^{t′} ϑ_u(ω) dW_u | ℱ^W_t] = ∫_s^t ϑ_u(ω) dW_u, con 0 ≤ s ≤ t ≤ t′ ≤ T.

**D:** ⚠️ Quale regola dell'algebra di Itô chiude la dimostrazione del moto geometrico browniano, e che cosa si ottiene, secondo la lezione 07?
**R:** Slide 31: sostituite le derivate parziali g′_t = (a - b²/2) X_t, g′_{W_t} = b X_t e g″_{W_t W_t} = b² X_t, si ha dX_t = (a - b²/2) X_t dt + b X_t dW_t + (1/2) b² X_t (dW_t)² (100); «Utilizzando la 55, la 100 può essere riscritta come» dX_t = (a - b²/2 + b²/2) X_t dt + b X_t dW_t, «e, quindi: **dX_t = aX_t dt + bX_t dW_t** (96)». La 55 è **(dW_t)² = dt**. Il docente: «usiamo quindi le relazioni anche che abbiamo a disposizione dell'algebra di Ito, semplifichiamo» ([00:20:22]–[00:21:04]).
**Opzione:** La 55, (dW_t)² = dt: il termine (1/2) b² X_t (dW_t)² diventa (1/2) b² X_t dt e cancella il -b²/2 del drift, da cui dX_t = aX_t dt + bX_t dW_t.
**Distrattori:**
- La 56, dt · dt = (dt)²: il termine (1/2) b² X_t (dW_t)² è trascurabile e si ottiene dX_t = (a - b²/2) X_t dt + bX_t dW_t.
- f_{X_t/X_s}(x_t/x) = 1/(√(2π) b √(t-s) · x_t/x) · e^(-(ln(x_t/x) - (a - b²/2)(t-s))²/(2b²(t-s)))
- v(s,x) = E[f(X_T) e^(∫_s^T g(t,X_t) dt) | X_s = x] soddisfa v′_s + μ(s,x) v′_x + (1/2) σ²(s,x) v″_{xx} + g(s,x) v(s,x) = 0, con la condizione finale lim_{s→T} v(s,x) = f(X_T).

**D:** ⚠️ Se Y_t = ln X_t, con X_t moto geometrico browniano a coefficienti costanti, quale problema di Cauchy risolve Y_t, e con quale soluzione, secondo la lezione 07?
**R:** Slide 32: «Sia il processo Y_t definito come: Y_t = ln X_t (101) allora il problema di Cauchy definito dalla seguente SDE e condizione iniziale, i.e.: **dY_t = (a - b²/2) dt + b dW_t** (102), **Y_s = ln x** ha soluzione: **Y_t = ln x + (a - b²/2)(t - s) + b(W_t - W_s)** (103)». La dimostrazione scrive la 102 in forma integrale, Y_t = ln x + ∫_s^t (a - b²/2) du + ∫_s^t b dW_u (104), e risolve gli integrali ([00:21:04]–[00:22:00]). ⚠️ Il drift è a - b²/2, non a; il transcript a [00:21:21] perde la a.
**Opzione:** dY_t = (a - b²/2) dt + b dW_t con Y_s = ln x; la soluzione è Y_t = ln x + (a - b²/2)(t - s) + b(W_t - W_s).
**Distrattori:**
- dY_t = a dt + b dW_t con Y_s = ln x; la soluzione è Y_t = ln x + a(t - s) + b(W_t - W_s).
- Se E^P(e^((1/2)∫_0^T ϑ_u² du)) < ∞, il processo Z∗_t := e^(∫_0^t ϑ_u dW_u - (1/2)∫_0^t ϑ_u² du) è una P-martingala rispetto a ℱ^W_t.
- dY_t = [∂/∂t g(t,X_t) + ∂/∂x g(t,X_t) u_t + (1/2) ∂²/∂x² g(t,X_t) v_t²] dt + [∂/∂x g(t,X_t) v_t] dW_t

**D:** ⚠️ Come è distribuito ln(X_t/X_{t-dt}), con Y_t = ln X_t e dY_t = (a - b²/2) dt + b dW_t, secondo la proposizione (105) della lezione 07?
**R:** Slide 33: «Il processo: dY_t = (a - b²/2) dt + b dW_t ove Y_t = ln X_t è distribuito come segue: **ln(X_t/X_{t-dt}) ~ N((a - b²/2)dt, b√dt)**» (105). Il docente: «è distribuito come una normale con **media** a meno b quadro mezzi dt e **standard deviation** b radice quadrata di dt» ([00:22:00]). La dimostrazione usa la definizione di processo di Wiener generalizzato, l'equazione 47 del deck 06, dX ~ N(a dt, b√dt) ([00:22:20]–[00:22:41]). È la chiave della domanda 4 del test.
**Opzione:** ln(X_t/X_{t-dt}) ~ N((a - b²/2)dt, b√dt), cioè una normale con media (a - b²/2)dt e deviazione standard b√dt.
**Distrattori:**
- ln(X_t/X_{t-dt}) ~ N(a dt, b√dt), cioè una normale con media a dt e deviazione standard b√dt.
- (dW_t)² = dt; dt · dt = (dt)²; dW_t · dt = √dt · dt = (dt)^(3/2)
- X^ϰ = x e^(Φ^(-1)(ϰ) b √(t-s) + (a - b²/2)(t-s)), dove ϰ = P(X_t ≤ X^ϰ) e Φ^(-1)(ϰ) è l'inversa della funzione di ripartizione della normale standardizzata valutata in ϰ.

**D:** ⚠️ Come è distribuito X_t/X_s, con X_s = x e s ≤ t, per un moto geometrico browniano a coefficienti costanti, secondo la lezione 07?
**R:** Slide 34: «Allora il processo X_t/X_s, ove X_s = x, s ≤ t, è distribuito come segue: **X_t/X_s ~ LogN(e^(a(t-s)), e^(a(t-s)) · (e^(b²(t-s)) - 1))**» (106). Il docente legge i parametri come «media esponenziale di A per T meno S e standard deviation esponenziale di A per T meno S per l'esponenziale di B quadro T meno S meno 1» ([00:22:41]–[00:23:10]). ⚠️ X_t/X_s è **lognormale**; normale è il suo logaritmo (105).
**Opzione:** X_t/X_s ~ LogN(e^(a(t-s)), e^(a(t-s)) · (e^(b²(t-s)) - 1))
**Distrattori:**
- X_t/X_s ~ N(e^(a(t-s)), e^(a(t-s)) · (e^(b²(t-s)) - 1))
- (dW_t)² = dt; dt · dt = (dt)²; dW_t · dt = √dt · dt = (dt)^(3/2)
- 0 in caso di indipendenza; ρ_wz dt in caso di correlazione secondo un coefficiente di correlazione pari a ρ_wz.

**D:** ⚠️ Qual è la funzione di densità di probabilità di X_t/X_s per un moto geometrico browniano a coefficienti costanti (formula 107)?
**R:** Slide 34: «con funzione di densità di probabilità: **f_{X_t/X_s}(x_t/x) = 1/(√(2π) b √(t-s) · x_t/x) · e^(-(ln(x_t/x) - (a - b²/2)(t-s))²/(2b²(t-s)))**» (107), che per il docente è la «funzione tipica della lognormale» ([00:23:10]–[00:23:38]). Nella slide il denominatore è scritto √(2π) b √(t-s) x_t/x, senza punti.
**Opzione:** f_{X_t/X_s}(x_t/x) = 1/(√(2π) b √(t-s) · x_t/x) · e^(-(ln(x_t/x) - (a - b²/2)(t-s))²/(2b²(t-s)))
**Distrattori:**
- f_{X_t/X_s}(x_t/x) = 1/(√(2π) b √(t-s) · x_t/x) · e^(-(ln(x_t/x) - (a + b²/2)(t-s))²/(2b²(t-s)))
- dY_t = (a - b²/2) dt + b dW_t con Y_s = ln x; la soluzione è Y_t = ln x + (a - b²/2)(t - s) + b(W_t - W_s).
- La 55, (dW_t)² = dt: il termine (1/2) b² X_t (dW_t)² diventa (1/2) b² X_t dt e cancella il -b²/2 del drift, da cui dX_t = aX_t dt + bX_t dW_t.

**D:** ⚠️ Che cosa afferma la proposizione (108) della lezione 07 sulla banda di oscillazione di un moto geometrico browniano?
**R:** Slide 35: «Siano Z ~ N(0,1) e X_t un moto geometrico browniano a coefficienti costanti come indicato nella 96 e con condizione iniziale X_s = x, ove 0 ≤ s < t. Allora vale la seguente relazione: **P(x e^(min) ≤ X_t ≤ x e^(max)) = ϰ** (108) ove: ϰ è la probabilità; **min = b z_{ϰ/2} √(t-s) + (a - b²/2)(t-s)**; **max = b z_{(1-ϰ/2)} √(t-s) + (a - b²/2)(t-s)**; z_{ϰ/2} e z_{(1-ϰ/2)} denotano i quantili della variabile casuale Z tra i quali è contenuta una massa di probabilità pari a ϰ» ([00:24:13]–[00:25:27]). Il docente legge ϰ «chi»; la slide 38 la chiama «banda di oscillazione».
**Opzione:** P(x e^(min) ≤ X_t ≤ x e^(max)) = ϰ, con min = b z_{ϰ/2} √(t-s) + (a - b²/2)(t-s) e max = b z_{(1-ϰ/2)} √(t-s) + (a - b²/2)(t-s).
**Distrattori:**
- P(x e^(min) ≤ X_t ≤ x e^(max)) = ϰ, con min = b z_{ϰ/2} (t-s) + (a - b²/2)√(t-s) e max = b z_{(1-ϰ/2)} (t-s) + (a - b²/2)√(t-s).
- ln(X_t/X_{t-dt}) ~ N((a - b²/2)dt, b√dt), cioè una normale con media (a - b²/2)dt e deviazione standard b√dt.
- dX_t = aX_t dt + bX_t dW_t con X_s = x; la soluzione è X_t = x e^(b(W_t - W_s) + (a - b²/2)(t - s)), 0 ≤ s ≤ t ≤ T < ∞.

**D:** ⚠️ Quale variabile si distribuisce come una N(0,1) nella dimostrazione della banda di oscillazione, posto s = t - dt?
**R:** Slide 36: la 105, «ponendo per semplicità s = t - dt, può essere riespressa come: ln(X_t/X_s) ~ N((a - b²/2)(t-s), b√(t-s)). Applicando a ln(X_t/X_s) il processo di standardizzazione di una variabile casuale normale si ha: **[ln(X_t/X_s) - (a - b²/2)(t-s)]/(b√(t-s)) ~ N(0,1)**». Il docente: «b radice di dt come standard deviation» ([00:25:31]–[00:26:44]). ⚠️ Si divide per la **deviazione standard** b√(t-s), come nella forma standardizzata della lezione 02.
**Opzione:** [ln(X_t/X_s) - (a - b²/2)(t-s)]/(b√(t-s)) ~ N(0,1), perché ln(X_t/X_s) ~ N((a - b²/2)(t-s), b√(t-s))
**Distrattori:**
- [ln(X_t/X_s) - (a - b²/2)(t-s)]/(b²(t-s)) ~ N(0,1), perché ln(X_t/X_s) ~ N((a - b²/2)(t-s), b√(t-s))
- P(x e^(min) ≤ X_t ≤ x e^(max)) = ϰ, con min = b z_{ϰ/2} √(t-s) + (a - b²/2)(t-s) e max = b z_{(1-ϰ/2)} √(t-s) + (a - b²/2)(t-s).
- La 55, (dW_t)² = dt: il termine (1/2) b² X_t (dW_t)² diventa (1/2) b² X_t dt e cancella il -b²/2 del drift, da cui dX_t = aX_t dt + bX_t dW_t.

**D:** ⚠️ Fissato il percentile ϰ della distribuzione di probabilità cumulata di X_t, quanto vale il corrispondente quantile X^ϰ, secondo la lezione 07?
**R:** Slide 39: «si denoti con X^ϰ il corrispondente quantile, i.e.: ϰ = P(X_t ≤ X^ϰ) (110). Allora vale la seguente uguaglianza: **X^ϰ = x e^(Φ^(-1)(ϰ) b √(t-s) + (a - b²/2)(t-s))** (111) ove **Φ^(-1)(ϰ)** denota l'**inversa della funzione di ripartizione** della distribuzione di probabilità normale standardizzata valutata in ϰ» ([00:29:11]–[00:30:12]). Ha la stessa forma del minimo e del massimo della banda (108).
**Opzione:** X^ϰ = x e^(Φ^(-1)(ϰ) b √(t-s) + (a - b²/2)(t-s)), dove ϰ = P(X_t ≤ X^ϰ) e Φ^(-1)(ϰ) è l'inversa della funzione di ripartizione della normale standardizzata valutata in ϰ.
**Distrattori:**
- X^ϰ = x e^(Φ(ϰ) b √(t-s) + (a - b²/2)(t-s)), dove ϰ = P(X_t ≤ X^ϰ) e Φ(ϰ) è la funzione di ripartizione della normale standardizzata valutata in ϰ.
- dY_t = (a - b²/2) dt + b dW_t con Y_s = ln x; la soluzione è Y_t = ln x + (a - b²/2)(t - s) + b(W_t - W_s).
- [ln(X_t/X_s) - (a - b²/2)(t-s)]/(b√(t-s)) ~ N(0,1), perché ln(X_t/X_s) ~ N((a - b²/2)(t-s), b√(t-s))

**D:** ⚠️ Quanto vale il valore atteso di X_t condizionato a X_t ≤ X^ϰ, secondo il teorema (112) della lezione 07?
**R:** Slide 40: «Allora il valore atteso di X_t condizionato a X_t ≤ X^ϰ è determinato come segue: **E(X_t | X_t ≤ X^ϰ) = (1/ϰ) x e^(a(t-s)) Φ(Φ^(-1)(ϰ) - b√(t-s))**» (112). Il docente: «1 su chi che moltiplica x per l'esponenziale di a che moltiplica t meno s per il valore della normale standardizzata applicato all'inversa della normale standardizzata su chi meno b che moltiplica la radice quadrata di t meno s» ([00:30:12]–[00:31:07]).
**Opzione:** E(X_t | X_t ≤ X^ϰ) = (1/ϰ) x e^(a(t-s)) Φ(Φ^(-1)(ϰ) - b√(t-s))
**Distrattori:**
- E(X_t | X_t ≤ X^ϰ) = (1/ϰ) x e^(a(t-s)) Φ(Φ^(-1)(ϰ) + b√(t-s))
- [ln(X_t/X_s) - (a - b²/2)(t-s)]/(b√(t-s)) ~ N(0,1), perché ln(X_t/X_s) ~ N((a - b²/2)(t-s), b√(t-s))
- ln(X_t/X_{t-dt}) ~ N((a - b²/2)dt, b√dt), cioè una normale con media (a - b²/2)dt e deviazione standard b√dt.

**D:** ⚠️ Siano Wt e Zt due moti browniani standard: che cosa vale per (dW_t)², secondo il test della lezione 07 (domanda 1)?
**R:** «**(dW_t)² = dt**», la (55) della slide 6, ripetuta nella (64) del lemma di Itô (slide 9) e usata per chiudere la dimostrazione del moto geometrico browniano (slide 31). Il docente: «dVt al quadrato è uguale a dt» ([00:04:23]). ⚠️ Le domande 1, 2 e 3 hanno **lo stesso testo** e chiavi diverse, una per riga della proposizione della slide 6: (55) nella 1, (57) nella 2, (56) nella 3. Distrattori del test: (dW_t)² < dt e (dW_t)² > dt, la relazione rovesciata; dW_t = dt, che toglie il quadrato. Nessuno dei tre è nei materiali.
**Opzione:** (dW_t)² = dt
**Distrattori:**
- (dW_t)² < dt
- (dW_t)² > dt
- dW_t = dt

**D:** ⚠️ Siano Wt e Zt due moti browniani standard: quanto vale il prodotto dW_t · dt, secondo il test della lezione 07 (domanda 2)?
**R:** «**dW_tdt = (dt)^(3/2)**», la (57) della slide 6: dW_t · dt = √dt · dt = (dt)^(3/2). ⚠️ Il docente dice «dV dt è uguale a dt quadro» ([00:04:23]), ma subito dopo cita «di t tre mezzi» ([00:04:37]): vale la slide, e la chiave è giusta. (dt)² è il risultato di dt · dt, la chiave della domanda 3, che ha lo stesso testo. Distrattori del test: dW_t = dt e dW_t < dt, che non sono nei materiali, e (dW_t)² < dt, la (55) con la relazione rovesciata.
**Opzione:** dW_tdt = (dt)^(3/2)
**Distrattori:**
- dW_t = dt
- dW_t < dt
- (dW_t)² < dt

**D:** ⚠️ Siano Wt e Zt due moti browniani standard: quanto vale il prodotto dt · dt, secondo il test della lezione 07 (domanda 3)?
**R:** «**dt dt = (dt)²**», la (56) della slide 6, dt · dt = (dt)². Il docente: «dt dt è uguale a dt quadro» ([00:04:23]). Per la nota della stessa slide (dt)² ha un ordine di infinitesimo superiore a dt, e nel lemma di Itô si considera pari a 0 (slide 9, formula 64). Distrattori del test, gli stessi della domanda 2: dW_t = dt, dW_t < dt e (dW_t)² < dt.
**Opzione:** dt dt = (dt)²
**Distrattori:**
- dW_t = dt
- dW_t < dt
- (dW_t)² < dt

**D:** ⚠️ Sia Z~N(0,1) e X_t un moto geometrico browniano: come è distribuito il logaritmo di X_t/X_{t-dt}, secondo il test della lezione 07 (domanda 4)?
**R:** «**lnX_t/X_{t-dt}~N[(a-b²/2)dt,bdt^(1/2))]**», con la parentesi spaiata della piattaforma: è la (105) della slide 33, ln(X_t/X_{t-dt}) ~ N((a - b²/2)dt, b√dt), con media (a - b²/2)dt e deviazione standard b√dt ([00:22:00]). Il testo della domanda è la premessa delle slide 35, 39 e 40, e Z ~ N(0,1) non serve. Distrattori del test, pescati dal test 06: dX~Y(10,dt^(1/2)), una distribuzione «Y» che non esiste; dX~N(0,dt), che parla di dX e non del logaritmo, ed è il processo di Wiener scritto con la varianza come secondo parametro (deck 06, slide 28–29), mentre la slide 37 del deck 06 scrive dW_t ~ N(0, √dt). ⚠️ Il terzo distrattore, E^P(X_t) < ∞ ∀ t ≥ 0, non è nella card perché è **vero nel merito**: per la slide 34 X_t/X_s è lognormale con media e^(a(t-s)) ([00:22:41]), quindi E^P(X_t) è finito. All'esame si segna la chiave, che è la formula della slide.
**Opzione:** lnX_t/X_{t-dt}~N[(a-b²/2)dt,bdt^(1/2))]
**Distrattori:**
- dX~Y(10,dt^(1/2))
- dX~N(0,dt)

**D:** ⚠️ Sia dY_t~N[(a-b²/2)dt,bdt^(1/2))]: che cosa è Y_t, secondo il test della lezione 07 (domanda 5)?
**R:** «**Y_t = lnX_t**»: è la premessa della slide 33, «Il processo: dY_t = (a - b²/2) dt + b dW_t ove Y_t = ln X_t è distribuito come segue», e la definizione (101) della slide 32. Il docente: «Definiamo ora y uguale al logaritmo di x» ([00:21:17]). ⚠️ La chiave è una **premessa**, non una conseguenza della distribuzione. Distrattori del test: dW_t < dt e «dW t =dt», dalla batteria delle domande 1–3, che non sono nei materiali. Il terzo, E^P(X_t) < ∞ ∀ t ≥ 0, viene dal test 06 e non è nella card: X_t non è definito nella domanda, ma per un moto geometrico browniano è vero nel merito (slide 34).
**Opzione:** Y_t = lnX_t
**Distrattori:**
- dW_t < dt
- dW t =dt

## Lezione 08 — Pricing 1 - Modello Sharpe-Rendleman-Bartter

**D:** ⚠️ Che differenza fa il docente della lezione 08 fra call e put quanto ai guadagni e alle perdite potenziali?
**R:** Commentando i grafici della slide 2, il docente dice: «nel caso dell'opzione call io ho dei guadagni o delle perdite **potenzialmente indefiniti**», mentre «nel caso della put, i miei guadagni o perdite sono **finiti** perché trovano nello **zero** il valore limite». Per questo «essere corti in una call espone sostanzialmente il soggetto che ha venduto l'opzione a perdite potenzialmente indefinite» (transcript [00:05:14]–[00:06:15]). È solo nel transcript: la slide 2 riporta la tabella dei payoff e i quattro grafici. ⚠️ «Indefiniti» sono i guadagni e le perdite della call, non gli scenari: è la parola del distrattore «esistono scenari idefiniti» del test.
**Opzione:** Nella call guadagni o perdite sono potenzialmente indefiniti; nella put sono finiti, perché trovano nello zero il valore limite.
**Distrattori:**
- Nella put guadagni o perdite sono potenzialmente indefiniti; nella call sono finiti, perché trovano nello zero il valore limite.
- Vendita dell'opzione C_0; α_0 azioni acquistate -α_0 S_0; liquidità depositata/presa in prestito -β_0; tali che V_0(φ) - C_0 = 0.
- Può essere esercitata soltanto ad una scadenza specifica T; altrimenti l'opzione prenderebbe un'altra denominazione.

**D:** Che cosa si intende per schema uniperiodale nel modello di Sharpe-Rendleman-Bartter?
**R:** La slide 3 presenta il modello come «Pricing delle opzioni in uno schema uniperiodale». Il docente: «uno schema dove abbiamo una sola unità di tempo tra zero e la scadenza» ([00:06:25]); il prezzo si cerca «ipotizzando che ci sia un unico periodo tra il momento della sua sottoscrizione e il momento della sua scadenza» ([00:06:44]). Nella slide 7 la scadenza è il tempo T = 1.
**Opzione:** Uno schema con una sola unità di tempo tra zero e la scadenza: un unico periodo tra la sottoscrizione dell'opzione e la sua scadenza.
**Distrattori:**
- Uno schema con più unità di tempo tra zero e la scadenza: un periodo per ogni data fra la sottoscrizione dell'opzione e la sua scadenza.
- Pay-off dell'opzione -C_T; α_0 azioni vendute +α_0 S_T; liquidità depositata/presa in prestito +(1+r)β_0; tali che V_T(φ) - C_T = 0.
- Arriva allo stesso prezzo della call, ma non è un approccio analitico come quello del portafoglio di replicazione: è un metodo strettamente probabilistico.

**D:** ⚠️ Come si definisce nel modello di Sharpe-Rendleman-Bartter il pay-off a scadenza della call g(S_T), e quando l'opzione viene esercitata?
**R:** Slide 4: «La call, il cui pay-off a scadenza è definito come: g(S_T) = (S_T - K)^+ ≜ max{S_T - K, 0}», cioè g(S_T) = S_T - K «se S_T > K l'opzione viene esercitata» e 0 «se S_T ≤ K l'opzione non viene esercitata». Il docente: con S_T maggiore di K «l'opzione verrà esercitata perché il soggetto che ha sottoscritto l'opzione ha un guadagno», con S_T minore o uguale a K «non ha senso esercitare l'opzione» (transcript [00:06:56]–[00:07:38]). ⚠️ Il caso S_T = K sta con l'opzione **non** esercitata.
**Opzione:** g(S_T) = (S_T - K)^+ ≜ max{S_T - K, 0}: vale S_T - K se S_T > K (l'opzione viene esercitata) e 0 se S_T ≤ K (l'opzione non viene esercitata).
**Distrattori:**
- g(S_T) = (K - S_T)^+ ≜ max{K - S_T, 0}: vale K - S_T se S_T < K (l'opzione viene esercitata) e 0 se S_T ≥ K (l'opzione non viene esercitata).
- V_0(φ) = α_0 S_0 + β_0 e V_T(φ) = α_0 S_T + β_0(1+r).
- P∗(ω_1) = ((1+r)S_0 - S^d)/(S^u - S^d) e P∗(ω_2) = (S^u - (1+r)S_0)/(S^u - S^d): la soluzione è unica.

**D:** Su quale spazio di probabilità è definito il valore finale nel modello di Sharpe-Rendleman-Bartter?
**R:** Slide 5: «Il valore finale sarà una variabile casuale definita sullo spazio di probabilità Ω = {ω_1, ω_2} con una misura di probabilità P tale che: P(ω_1) + P(ω_2) = 1.» Il docente lo ripete a [00:07:38]. Gli eventi sono due, uno per scenario (slide 6). Le slide non dicono che i due scenari siano equiprobabili.
**Opzione:** Su Ω = {ω_1, ω_2}, con una misura di probabilità P tale che P(ω_1) + P(ω_2) = 1.
**Distrattori:**
- Su Ω = {ω_1, ω_2}, con una misura di probabilità P tale che P(ω_1) = P(ω_2) = 1/2.
- β_0 = (C^d S^u - C^u S^d)/((S^u - S^d)(1+r))
- S∗_0 = S_0 e S∗_T = (1+r)^(-1)S_T.

**D:** Come si definisce formalmente S_T nel modello di Sharpe-Rendleman-Bartter?
**R:** Slide 6: «Formalmente, S_T è una funzione S_T : Ω → R_+», con S_T(ω) = S^u se ω = ω_1 e S^d se ω = ω_2. Il docente: S_T «è una funzione che rimappa ω sui numeri reali positivi», e i due eventi «qualificano due potenziali valori del mio sottostante, S up e S down, cioè il caso in cui il valore del sottostante va verso l'alto e l'altro in cui va verso il basso» (transcript [00:07:55]). Le slide 9–14 scrivono «S Up» e «S Down». ⚠️ S_T è il **prezzo** del sottostante; il pay-off della call è C_T (slide 7).
**Opzione:** S_T è una funzione S_T: Ω → R_+, con S_T(ω) = S^u se ω = ω_1 e S_T(ω) = S^d se ω = ω_2.
**Distrattori:**
- S_T è una funzione S_T: Ω → R_+, con S_T(ω) = (S^u - K)^+ se ω = ω_1 e S_T(ω) = (S^d - K)^+ se ω = ω_2.
- β_0 = (C^d S^u - C^u S^d)/((S^u - S^d)(1+r))
- C∗_0 = C_0 = E_{P∗}((1+r)^(-1) C_T) = E_{P∗}(C∗_T): P∗ è anche la misura di martingala per l'opzione.

**D:** ⚠️ Quanto vale il pay-off della call al tempo T = 1 nei due scenari del modello di Sharpe-Rendleman-Bartter?
**R:** Slide 7: «e quindi, il pay-off per la call al tempo T = 1: X = C_T = (S_T - K)^+ diventa: C_T(ω) = C^u = (S^u - K)^+ if ω = ω_1, C^d = (S^d - K)^+ if ω = ω_2». Il docente: «call up se abbiamo l'evento omega 1 e call down se abbiamo invece l'evento omega 2» (transcript [00:08:19]–[00:08:41]). ⚠️ È la parte positiva di S - K, quella della call; K - S sarebbe la put.
**Opzione:** X = C_T = (S_T - K)^+, cioè C^u = (S^u - K)^+ se ω = ω_1 e C^d = (S^d - K)^+ se ω = ω_2.
**Distrattori:**
- X = C_T = (K - S_T)^+, cioè C^u = (K - S^u)^+ se ω = ω_1 e C^d = (K - S^d)^+ se ω = ω_2.
- V_0(φ) = α_0 S_0 + β_0 e V_T(φ) = α_0 S_T + β_0(1+r).
- O_0 = (1+r)^(-1)(p ∗ O_up + (1-p) ∗ O_down), e P è definita misura di martingala.

**D:** ⚠️ Qual è, intuitivamente, il prezzo della call nel modello di Sharpe-Rendleman-Bartter (formula (1))?
**R:** Slide 8, ripetuta alla 33: «Intuitivamente, il prezzo dell'ozione è dato da: C_0 = E_P((1+r)^(-1)C_T) = (1+r)^(-1) · [P(ω_1)(S^u - K)^+ + P(ω_2)(S^d - K)^+] (1)», con il refuso «ozione» della slide. Il docente: il prezzo è una media ponderata scontata, «il valore atteso sotto la misura di probabilità p» del valore della call a scadenza «attualizzato per un tasso di interesse R» (transcript [00:08:41]–[00:09:24]). ⚠️ Il fattore è (1+r)^(-1): si sconta, non si capitalizza. È la formula della domanda 1 del test.
**Opzione:** C_0 = E_P((1+r)^(-1)C_T) = (1+r)^(-1) · [P(ω_1)(S^u - K)^+ + P(ω_2)(S^d - K)^+]
**Distrattori:**
- C_0 = E_P((1+r)C_T) = (1+r) · [P(ω_1)(S^u - K)^+ + P(ω_2)(S^d - K)^+]
- α_0 = (C^u - C^d)/(S^u - S^d)
- P∗(ω_1) = ((1+r)S_0 - S^d)/(S^u - S^d) e P∗(ω_2) = (S^u - (1+r)S_0)/(S^u - S^d): la soluzione è unica.

**D:** ⚠️ Nell'esempio del modello di Sharpe-Rendleman-Bartter (azione a $20, S Up = $22, S Down = $18, call con strike $21) quanto vale la call a scadenza nei due scenari?
**R:** Slide 10: «Prezzo dell'azione = $20», «S Up = $22», «S Down = $18»; slide 12: «Call», «Strike = $21», «Tasso di interesse uniperiodale privo di rischio=4%»; slide 13: «C Up = max($22-21,0)», «C Down = max($18-21,0)»; slide 14: «C Up = 1», «C Down = 0». Il docente: «la call nell'ipotesi dello scenario che il prezzo dell'azione salga va a 1, nel caso in cui il prezzo dell'azione è sceso, il prezzo della call vale 0» ([00:10:45]); il prezzo di oggi è «lo sconto di questi due valori al tempo 0 per il tasso del 4%» ([00:10:59]–[00:11:07]). ⚠️ A [00:10:20] il transcript dice «il massimo di 22 meno 21 è 0»: vale la slide 14, C Up = 1. Nello scenario down la call vale 0, non -3: il max con lo zero taglia la parte negativa.
**Opzione:** C Up = max($22-21,0) = 1 e C Down = max($18-21,0) = 0.
**Distrattori:**
- C Up = max($22-21,0) = 1 e C Down = max($18-21,0) = -3.
- C = 0,673, da Δ = 0,25 (neutralità al rischio) e da 20 ∗ Δ - C = (18 ∗ Δ)/(1.04) (assenza di arbitraggio).
- φ = φ_0 = (α_0, β_0) è il portafoglio di un investitore con una posizione corta in un'opzione Europea: α_0 è il numero delle azioni al tempo t = 0, β_0 la liquidità depositata/presa in prestito da una banca al tasso r.

**D:** ⚠️ Quali posizioni si ipotizzano nell'approccio intuitivo del metodo di replicazione del portafoglio?
**R:** Slide 16, «Esempio: Pricing – un approccio intuitivo»: «Posizione lunga: Δ azioni», «Posizione corta: 1 opzione Call», «…..calcolando Δ». Il docente: «io ho comprato un numero delta qualsivoglia di azioni e allo stesso tempo ho venduto un'opzione call» (transcript [00:11:32]–[00:11:52]). ⚠️ L'«1» appartiene alla **call** venduta; le azioni sono Δ, e nell'esempio Δ = 0,25 (slide 23). È il punto su cui la domanda 5 del test è difettosa.
**Opzione:** Posizione lunga: Δ azioni; posizione corta: 1 opzione Call.
**Distrattori:**
- Posizione lunga: 1 azione; posizione corta: Δ opzioni Call.
- Nella call guadagni o perdite sono potenzialmente indefiniti; nella put sono finiti, perché trovano nello zero il valore limite.
- Uno schema con una sola unità di tempo tra zero e la scadenza: un unico periodo tra la sottoscrizione dell'opzione e la sua scadenza.

**D:** Perché, secondo il docente della lezione 08, chi vende la call compra Δ azioni?
**R:** Per coprirsi: «avendo venduto l'opzione call mi sono coperto dal rischio che l'acquirente dell'opzione possa tra un periodo di tempo venire a comprare e richiedere le azioni al prezzo strike». Il rischio è di «avere una grossa perdita se queste azioni sono molto cresciute in valore rispetto al prezzo di esercizio strike»; «aver già comprato oggi un po' di azioni mi immunizza da questo rischio», perché sono state comprate a un prezzo odierno che «certamente sarà minore del prezzo futuro» se il compratore della call decide di esercitarla (transcript [00:11:52]–[00:13:07]). Il Δ dice «quante ne devo comprare» ([00:12:20]); la slide 16 scrive soltanto «…..calcolando Δ».

**D:** Com'è composto il portafoglio φ del metodo di replicazione, e di chi è?
**R:** Slide 17: «Un portafoglio φ al tempo t = 0 che replica il pay-off dell'opzione al tempo T. φ = φ_0 = (α_0, β_0) è il portafoglio di un investitore che ha una posizione corta in un'opzione Europea. α_0 è il numero delle azioni dell'investitore al tempo t = 0. β_0 è la liquidità depositata/presa in prestito da una banca al tasso di interesse r.» Il docente: «Questo è il portafoglio di chi ha venduto un'opzione, si dice europea, a un altro soggetto» (transcript [00:13:16]–[00:13:49]). ⚠️ È il portafoglio di chi ha **venduto** l'opzione: posizione corta.
**Opzione:** φ = φ_0 = (α_0, β_0) è il portafoglio di un investitore con una posizione corta in un'opzione Europea: α_0 è il numero delle azioni al tempo t = 0, β_0 la liquidità depositata/presa in prestito da una banca al tasso r.
**Distrattori:**
- φ = φ_0 = (α_0, β_0) è il portafoglio di un investitore con una posizione lunga in un'opzione Europea: α_0 è il numero delle azioni al tempo t = 0, β_0 la liquidità depositata/presa in prestito da una banca al tasso r.
- Può essere esercitata soltanto ad una scadenza specifica T; altrimenti l'opzione prenderebbe un'altra denominazione.
- Arriva allo stesso prezzo della call, ma non è un approccio analitico come quello del portafoglio di replicazione: è un metodo strettamente probabilistico.

**D:** Che cosa rende europea un'opzione, secondo il docente della lezione 08?
**R:** «Perché un'opzione europea? Perché è un'opzione che può essere esercitata soltanto ad una scadenza specifica T grande, altrimenti l'opzione prenderebbe un'altra denominazione» (transcript [00:13:49]–[00:14:03]). La slide 17 dice soltanto che φ è il portafoglio di un investitore con una posizione corta «in un'opzione Europea». Coincide con la slide 3 della lezione 05: le europee danno il diritto «ad una certa scadenza», le americane «entro una certa scadenza».
**Opzione:** Può essere esercitata soltanto ad una scadenza specifica T; altrimenti l'opzione prenderebbe un'altra denominazione.
**Distrattori:**
- Può essere esercitata in qualsiasi momento entro la scadenza T; altrimenti l'opzione prenderebbe un'altra denominazione.
- Nella call guadagni o perdite sono potenzialmente indefiniti; nella put sono finiti, perché trovano nello zero il valore limite.
- Che comprando un portafoglio e vendendone un altro non si possa avere un profitto senza rischio: i portafogli devono avere lo stesso profilo di rischio-rendimento, e quelli neutrali al rischio rendono il tasso privo di rischio.

**D:** ⚠️ Come si scrive il valore V(φ) del portafoglio di replicazione al tempo 0 e al tempo T?
**R:** Slide 18: «Sia V_t(φ) il valore del pay-off di questo portafoglio al tempo t = 0 e t = T. Ne consegue che il processo del valore V(φ) è dato da: i. V_0(φ) = α_0 S_0 + β_0; ii. V_T(φ) = α_0 S_T + β_0(1+r)». Il docente: al tempo 0 è «il numero delle azioni per il loro valore, più β0 che è la liquidità»; al tempo T «beta 0 per 1 più r perché tra il tempo 0 e il tempo t grande è decorso il valore finanziario del tempo» (transcript [00:14:19]–[00:15:06]). ⚠️ Il fattore (1+r) sta sulla liquidità al tempo T, non al tempo 0.
**Opzione:** V_0(φ) = α_0 S_0 + β_0 e V_T(φ) = α_0 S_T + β_0(1+r).
**Distrattori:**
- V_0(φ) = α_0 S_0 + β_0(1+r) e V_T(φ) = α_0 S_T + β_0.
- S∗_0 = E_{P∗}(S∗_T) = (1+r)^(-1) · [P∗(ω_1)S^u + P∗(ω_2)S^d] (5) e, con P∗(ω_2) = 1 - P∗(ω_1), S∗_0 = (1+r)^(-1) · [P∗(ω_1)S^u + (1 - P∗(ω_1))S^d] (6).
- S_T è una funzione S_T: Ω → R_+, con S_T(ω) = S^u se ω = ω_1 e S_T(ω) = S^d se ω = ω_2.

**D:** Quando il portafoglio replica esattamente l'opzione nel modello di Sharpe-Rendleman-Bartter (sistema (2))?
**R:** Slide 19: «Il portafoglio replica esattamente l'opzione quando: V_T(φ) = C_T i.e.: V_T(φ)(ω) = V^u(φ) = α_0 S^u + (1+r)β_0 = C^u if ω = ω_1; V^d(φ) = α_0 S^d + (1+r)β_0 = C^d if ω = ω_2 (2)». Il docente: sono due equazioni in due incognite, il numero di azioni α_0 e la liquidità β_0, che risolvono il sistema e consentono al portafoglio «di replicare esattamente il valore dell'opzione, di creare un'identità» (transcript [00:15:06]–[00:16:47]). ⚠️ La replica si impone **a scadenza**, scenario per scenario, contro C^u e C^d.
**Opzione:** V_T(φ) = C_T, cioè V^u(φ) = α_0 S^u + (1+r)β_0 = C^u se ω = ω_1 e V^d(φ) = α_0 S^d + (1+r)β_0 = C^d se ω = ω_2.
**Distrattori:**
- V_T(φ) = C_0, cioè V^u(φ) = α_0 S^u + (1+r)β_0 = C_0 se ω = ω_1 e V^d(φ) = α_0 S^d + (1+r)β_0 = C_0 se ω = ω_2.
- S∗_0 = E_{P∗}(S∗_T)
- Su Ω = {ω_1, ω_2}, con una misura di probabilità P tale che P(ω_1) + P(ω_2) = 1.

**D:** ⚠️ Quanto vale α_0, il numero di azioni che risolve il sistema (2)?
**R:** Slide 20: «I valori di α_0, β_0 che risolvono il sistema sono: α_0 = (C^u - C^d)/(S^u - S^d)». ⚠️ Al numeratore le call, al denominatore le azioni. È il Δ dell'approccio intuitivo: con i numeri dell'esempio dà (1 - 0)/(22 - 18) = 0,25, il Δ della slide 23 (il calcolo non è nelle slide).
**Opzione:** α_0 = (C^u - C^d)/(S^u - S^d)
**Distrattori:**
- α_0 = (S^u - S^d)/(C^u - C^d)
- O_0 = (1+r)^(-1)(p ∗ O_up + (1-p) ∗ O_down), e P è definita misura di martingala.
- S∗_0 = E_{P∗}(S∗_T) = (1+r)^(-1) · [P∗(ω_1)S^u + P∗(ω_2)S^d] (5) e, con P∗(ω_2) = 1 - P∗(ω_1), S∗_0 = (1+r)^(-1) · [P∗(ω_1)S^u + (1 - P∗(ω_1))S^d] (6).

**D:** ⚠️ Quanto vale β_0, la liquidità che risolve il sistema (2)?
**R:** Slide 20: «β_0 = (C^d S^u - C^u S^d)/((S^u - S^d)(1+r))». ⚠️ Al numeratore C^d con S^u meno C^u con S^d, in quest'ordine; al denominatore c'è anche (1+r), perché la liquidità rende r fra 0 e T (slide 19). Il docente: β_0 è «la liquidità che io prendo a prestito e do in prestito a seconda di quante azioni compro o vendo» (transcript [00:14:25]–[00:14:46]).
**Opzione:** β_0 = (C^d S^u - C^u S^d)/((S^u - S^d)(1+r))
**Distrattori:**
- β_0 = (C^u S^d - C^d S^u)/((S^u - S^d)(1+r))
- S_T è una funzione S_T: Ω → R_+, con S_T(ω) = S^u se ω = ω_1 e S_T(ω) = S^d se ω = ω_2.
- V_T(φ) = C_T, cioè V^u(φ) = α_0 S^u + (1+r)β_0 = C^u se ω = ω_1 e V^d(φ) = α_0 S^d + (1+r)β_0 = C^d se ω = ω_2.

**D:** ⚠️ A che cosa è uguale il prezzo C_0 ottenuto con il metodo di replicazione (formula (3))?
**R:** Slide 21: «Quindi: C_0 = V_0(φ) = α_0 S_0 + β_0 = (C^u - C^d)/(S^u - S^d) S_0 + (C^d S^u - C^u S^d)/((S^u - S^d)(1+r)) (3)». Il docente: mettendo nel prezzo della call le α_0, β_0 trovate «otteniamo quindi un metodo analitico per definire il prezzo dell'opzione call» (transcript [00:16:47]–[00:17:16]). Il metodo della martingala ritrova la stessa (3) (slide 35). ⚠️ Il secondo addendo è β_0, scontato per (1+r).
**Opzione:** C_0 = V_0(φ) = α_0 S_0 + β_0 = (C^u - C^d)/(S^u - S^d) S_0 + (C^d S^u - C^u S^d)/((S^u - S^d)(1+r))
**Distrattori:**
- C_0 = V_0(φ) = α_0 S_0 + β_0 = (C^u - C^d)/(S^u - S^d) S_0 + (C^d S^u - C^u S^d)(1+r)/(S^u - S^d)
- g(S_T) = (S_T - K)^+ ≜ max{S_T - K, 0}: vale S_T - K se S_T > K (l'opzione viene esercitata) e 0 se S_T ≤ K (l'opzione non viene esercitata).
- V_T(φ) = C_T, cioè V^u(φ) = α_0 S^u + (1+r)β_0 = C^u se ω = ω_1 e V^d(φ) = α_0 S^d + (1+r)β_0 = C^d se ω = ω_2.

**D:** ⚠️ Quali sono, al tempo t = 0, i flussi di cassa che definiscono l'assenza di arbitraggio nel metodo di replicazione?
**R:** Slide 22: «I flussi di cassa forniti dal modello che definiscono l'assenza di arbitraggio sono: al tempo t = 0: vendita dell'opzione C_0; α_0 azioni acquistate -α_0 S_0; liquidità depositata/presa in prestito -β_0; ∋' V_0(φ) - C_0 = 0», dove ∋' si legge «tale che». Il docente: i flussi sono tali che il valore del portafoglio al tempo 0 meno il prezzo della call al tempo 0 sia uguale a 0 (transcript [00:17:16]–[00:17:46]; il transcript scrive «colla» per call). ⚠️ Il fattore (1+r) sulla liquidità compare solo al tempo T.
**Opzione:** Vendita dell'opzione C_0; α_0 azioni acquistate -α_0 S_0; liquidità depositata/presa in prestito -β_0; tali che V_0(φ) - C_0 = 0.
**Distrattori:**
- Vendita dell'opzione C_0; α_0 azioni acquistate -α_0 S_0; liquidità depositata/presa in prestito -(1+r)β_0; tali che V_0(φ) - C_0 = 0.
- 22 ∗ Δ - 1 = 18 ∗ Δ, quindi Δ = 0,25: le posizioni dei due scenari devono avere lo stesso valore.

**D:** ⚠️ Quali sono, al tempo t = T, i flussi di cassa che definiscono l'assenza di arbitraggio nel metodo di replicazione?
**R:** Slide 22: «al tempo t = T: pay-off dell'opzione -C_T; α_0 azioni vendute +α_0 S_T; liquidità depositata/presa in prestito +(1+r)β_0; ∋' V_T(φ) - C_T = 0». Il docente: «il payoff dell'opzione ovviamente è meno C di T, seguono le alfa 0 azioni vendute», e la liquidità «fa 1 più r per beta 0» (transcript [00:17:46]–[00:18:17]). ⚠️ A t = 0 le azioni si comprano e l'opzione si vende; a t = T le azioni si vendono, si paga il pay-off e la liquidità torna con l'interesse.
**Opzione:** Pay-off dell'opzione -C_T; α_0 azioni vendute +α_0 S_T; liquidità depositata/presa in prestito +(1+r)β_0; tali che V_T(φ) - C_T = 0.
**Distrattori:**
- Pay-off dell'opzione -C_T; α_0 azioni vendute +α_0 S_T; liquidità depositata/presa in prestito +β_0; tali che V_T(φ) - C_T = 0.
- 22 ∗ Δ - 1 = 18 ∗ Δ, quindi Δ = 0,25: le posizioni dei due scenari devono avere lo stesso valore.
- C Up = max($22-21,0) = 1 e C Down = max($18-21,0) = 0.

**D:** ⚠️ Che cosa impone il principio di neutralità al rischio nell'esempio del modello di Sharpe-Rendleman-Bartter, e quanto vale Δ?
**R:** Slide 23, «NEUTRALITÀ AL RISCHIO»: «Lunga S up = + $22, Corta C Up = - $1» = «Lunga S Down = + $18, Corta C Down = 0»; «22 ∗ Δ - 1 = 18 ∗ Δ»; «Δ = 0,25». Il docente: i due portafogli che qualificano gli eventi ω_1 e ω_2 «devono avere il medesimo valore» ([00:19:38]); «22 per delta meno 1, delta sul numero di azioni, deve essere uguale a 18 per delta» ([00:20:08]), e così si ottiene il numero di azioni da detenere «per poter essere neutrale a rischio rispetto alla circostanza di aver venduto un'opzione call» ([00:20:16]). ⚠️ A [00:19:14] il docente parla di «opzione lunga», ma la slide scrive «Corta»: la call è venduta. Δ = 0,25 è un quarto di azione per call, non 4.
**Opzione:** 22 ∗ Δ - 1 = 18 ∗ Δ, quindi Δ = 0,25: le posizioni dei due scenari devono avere lo stesso valore.
**Distrattori:**
- 22 ∗ Δ - 1 = 18 ∗ Δ, quindi Δ = 4: le posizioni dei due scenari devono avere lo stesso valore.
- C Up = max($22-21,0) = 1 e C Down = max($18-21,0) = 0.
- Vendita dell'opzione C_0; α_0 azioni acquistate -α_0 S_0; liquidità depositata/presa in prestito -β_0; tali che V_0(φ) - C_0 = 0.

**D:** Che cosa vuol dire assenza di arbitraggio, secondo il docente della lezione 08?
**R:** «se ho un portafoglio e decido di investire in quel portafoglio, portafoglio 1, e ho poi un altro portafoglio 2 o un altro portafoglio 3», per non avere la possibilità «che uno comprando il portafoglio 1 e vendendo il portafoglio 2 possa avere un profitto senza rischio», i portafogli «devono avere lo stesso profilo di rischio rendimento, la stessa reddittività». E se sono neutrali al rischio, «la reddittività è quella del tasso di interesse privo di rischio» (transcript [00:20:38]–[00:21:28]). È solo nel transcript: la slide 24 ne dà la conseguenza, rendimento atteso dell'opzione = tasso di interesse privo di rischio.
**Opzione:** Che comprando un portafoglio e vendendone un altro non si possa avere un profitto senza rischio: i portafogli devono avere lo stesso profilo di rischio-rendimento, e quelli neutrali al rischio rendono il tasso privo di rischio.
**Distrattori:**
- Che comprando un portafoglio e vendendone un altro si possa avere un profitto senza rischio: i portafogli devono avere lo stesso profilo di rischio-rendimento, e quelli neutrali al rischio rendono il tasso privo di rischio.
- Uno schema con una sola unità di tempo tra zero e la scadenza: un unico periodo tra la sottoscrizione dell'opzione e la sua scadenza.
- φ = φ_0 = (α_0, β_0) è il portafoglio di un investitore con una posizione corta in un'opzione Europea: α_0 è il numero delle azioni al tempo t = 0, β_0 la liquidità depositata/presa in prestito da una banca al tasso r.

**D:** ⚠️ Che cosa impone il principio di assenza di arbitraggio nell'esempio dell'approccio intuitivo?
**R:** Slide 24, «ASSENZA DI ARBITRAGGIO»: «Rendimento atteso dell'opzione = Tasso di interesse privo di rischio»; «Prezzo dell'opzione = Pay-Off Atteso Scontato»; «20 ∗ Δ - C = (22 ∗ Δ - 1)/(1.04) or 20 ∗ Δ - C = (18 ∗ Δ)/(1.04)». Il docente: il prezzo dell'opzione è «il valore atteso scontato del risultato finanziario di questo portafoglio di replicazione»; le formule up e down «devono generare il medesimo risultato» (transcript [00:22:05]–[00:22:48]). 20 ∗ Δ - C è il portafoglio di oggi, Δ azioni da $20 meno la call venduta; il suo valore a scadenza si **divide** per 1,04.
**Opzione:** Rendimento atteso dell'opzione = Tasso di interesse privo di rischio, e Prezzo dell'opzione = Pay-Off Atteso Scontato: 20 ∗ Δ - C = (22 ∗ Δ - 1)/(1.04), oppure 20 ∗ Δ - C = (18 ∗ Δ)/(1.04).
**Distrattori:**
- Rendimento atteso dell'opzione = Tasso di interesse privo di rischio, e Prezzo dell'opzione = Pay-Off Atteso Scontato: 20 ∗ Δ - C = (22 ∗ Δ - 1) · (1.04), oppure 20 ∗ Δ - C = (18 ∗ Δ) · (1.04).
- S∗_0 = S_0 e S∗_T = (1+r)^(-1)S_T.

**D:** ⚠️ Quanto vale la call dell'esempio del modello di Sharpe-Rendleman-Bartter, e da quali due condizioni si ricava?
**R:** Slide 25: «Neutralità al rischio ⇨ Δ = 0,25», «Assenza di arbitraggio ⇨ 20 ∗ Δ - C = (18 ∗ Δ)/(1.04)», da cui «C = ((20 - 18) ∗ Δ)/(1.04)», «C = 0,673». Il docente: «per il principio di neutralità rischio il numero di azioni del portafoglio che replica l'opzione deve essere pari a 0,25»; per il principio di non arbitraggio si prende «una qualunque delle relazioni, quella up e quella down», e risolvendo per C «il prezzo della call è 0,673» (transcript [00:22:53]–[00:23:38]). ⚠️ Δ viene dalla neutralità al rischio, l'equazione del prezzo dall'assenza di arbitraggio. ⚠️ La formula intermedia della slide, presa alla lettera, dà (2 · 0,25)/1,04, circa 0,48: lo 0,673 si ottiene risolvendo 20 ∗ Δ - C = (18 ∗ Δ)/(1.04), cioè C = 5 - 4,5/1,04 (il calcolo non è nelle slide).
**Opzione:** C = 0,673, da Δ = 0,25 (neutralità al rischio) e da 20 ∗ Δ - C = (18 ∗ Δ)/(1.04) (assenza di arbitraggio).
**Distrattori:**
- C = 0,673, da Δ = 0,25 (assenza di arbitraggio) e da 20 ∗ Δ - C = (18 ∗ Δ)/(1.04) (neutralità al rischio).
- α_0 = (C^u - C^d)/(S^u - S^d)
- S∗_0 = E_{P∗}(S∗_T)

**D:** ⚠️ In che cosa il metodo della martingala si distingue da quello di replicazione del portafoglio, secondo il docente della lezione 08?
**R:** «Possiamo arrivare allo stesso risultato in termini di prezzo della call con un altro metodo che viene chiamato metodo della martingala»: un approccio «che non è un approccio analitico come quello del portafoglio di replicazione di replica ma è un metodo invece strettamente probabilistico» (transcript [00:23:38]–[00:24:03]). Anche per la replicazione il docente parla di «metodo analitico» ([00:16:47]). Le slide 15 e 26 sono i frontespizi dei due metodi; la slide 35 mostra che il secondo ritrova la (3) del primo.
**Opzione:** Arriva allo stesso prezzo della call, ma non è un approccio analitico come quello del portafoglio di replicazione: è un metodo strettamente probabilistico.
**Distrattori:**
- Arriva allo stesso prezzo della call, ma non è un approccio probabilistico come quello del portafoglio di replicazione: è un metodo strettamente analitico.
- Pay-off dell'opzione -C_T; α_0 azioni vendute +α_0 S_T; liquidità depositata/presa in prestito +(1+r)β_0; tali che V_T(φ) - C_T = 0.
- Rendimento atteso dell'opzione = Tasso di interesse privo di rischio, e Prezzo dell'opzione = Pay-Off Atteso Scontato: 20 ∗ Δ - C = (22 ∗ Δ - 1)/(1.04), oppure 20 ∗ Δ - C = (18 ∗ Δ)/(1.04).

**D:** ⚠️ Rendimento atteso o valore atteso: che cosa uguagliano al tasso di interesse privo di rischio le due slide «ASSENZA DI ARBITRAGGIO» della lezione 08?
**R:** La slide 24, nel metodo di replicazione, scrive «**Rendimento** atteso dell'opzione = Tasso di interesse privo di rischio». La slide 27, nel metodo della martingala, scrive «**Valore** atteso dell'opzione = Tasso di interesse privo di rischio», seguita da «o Prezzo dell'opzione = Pay-off atteso scontato». Il docente le legge entrambe così come sono ([00:21:33] e [00:24:03]). La formula coerente è quella della slide 24, perché un tasso si confronta con un rendimento e non con un valore; è anche quella della chiave della domanda 3 del test. Che «valore» sia un refuso della slide 27 è una deduzione, non è scritto nei materiali.

**D:** ⚠️ Come si scrive il prezzo dell'opzione O_0 sull'albero del metodo della martingala, e come si chiama P?
**R:** Slide 28: l'albero porta da «Prezzo dell'opzione = O» a «O Up» con probabilità P e a «O Down» con probabilità 1-P; «O_0 = (1+r)^(-1) (p ∗ O_up + (1-p) ∗ O_down)»; «P è definita misura di MARTINGALA». Il docente: il prezzo dell'opzione è «la probabilità per il valore dell'opzione nell'evento up più 1 meno p, che definisce la probabilità dell'evento down, il tutto scontato del valore del tempo che è 1 più r» (transcript [00:24:13]–[00:24:42]). ⚠️ p pesa O_up, 1-p pesa O_down.
**Opzione:** O_0 = (1+r)^(-1)(p ∗ O_up + (1-p) ∗ O_down), e P è definita misura di martingala.
**Distrattori:**
- O_0 = (1+r)^(-1)(p ∗ O_down + (1-p) ∗ O_up), e P è definita misura di martingala.
- g(S_T) = (S_T - K)^+ ≜ max{S_T - K, 0}: vale S_T - K se S_T > K (l'opzione viene esercitata) e 0 se S_T ≤ K (l'opzione non viene esercitata).
- Su Ω = {ω_1, ω_2}, con una misura di probabilità P tale che P(ω_1) + P(ω_2) = 1.

**D:** Come si definisce la dinamica evolutiva del sottostante S∗ nel metodo della martingala?
**R:** Slide 29, «La derivazione via metodo della Martingala»: «La dinamica evolutiva del sottostante S∗ è definita come: i. S∗_0 = S_0; ii. S∗_T = (1+r)^(-1)S_T». Il docente lo chiama «processo scontato del sottostante» (transcript [00:24:42]–[00:25:20]). ⚠️ Al tempo 0 non c'è niente da scontare; al tempo T il prezzo si moltiplica per (1+r)^(-1).
**Opzione:** S∗_0 = S_0 e S∗_T = (1+r)^(-1)S_T.
**Distrattori:**
- S∗_0 = S_0 e S∗_T = (1+r)S_T.
- X = C_T = (S_T - K)^+, cioè C^u = (S^u - K)^+ se ω = ω_1 e C^d = (S^d - K)^+ se ω = ω_2.
- C_0 = V_0(φ) = α_0 S_0 + β_0 = (C^u - C^d)/(S^u - S^d) S_0 + (C^d S^u - C^u S^d)/((S^u - S^d)(1+r))

**D:** ⚠️ Quando S∗ è una P∗-martingala nel metodo della martingala (formula (4))?
**R:** Slide 30: «S∗ è definita essere una P∗- Martingala, quando valgono le equivalenze sottostanti: S∗_0 = E_{P∗}(S∗_T) (4)». Il docente: «S zero star non è altro che il valore atteso sotto la misura di probabilità P star di S star t grande» (transcript [00:25:20]–[00:25:39]). ⚠️ A sinistra il valore di oggi, dentro il valore atteso quello a scadenza, scontato. La definizione generale di martingala è nella lezione 06.
**Opzione:** S∗_0 = E_{P∗}(S∗_T)
**Distrattori:**
- S∗_T = E_{P∗}(S∗_0)
- X = C_T = (S_T - K)^+, cioè C^u = (S^u - K)^+ se ω = ω_1 e C^d = (S^d - K)^+ se ω = ω_2.
- C_0 = V_0(φ) = α_0 S_0 + β_0 = (C^u - C^d)/(S^u - S^d) S_0 + (C^d S^u - C^u S^d)/((S^u - S^d)(1+r))

**D:** Come si espande la (4) per determinare la misura P∗ (formule (5) e (6))?
**R:** Slide 31–32: «Di seguito, l'espressione (4) è espansa al fine di determinare la misura: S∗_0 = E_{P∗}(S∗_T) = (1+r)^(-1) · [P∗(ω_1)S^u + P∗(ω_2)S^d] (5)»; «dato che: P∗(ω_1) + P∗(ω_2) = 1, P∗(ω_2) = 1 - P∗(ω_1), l'espressione (5) può essere scritta come: S∗_0 = (1+r)^(-1) · [P∗(ω_1)S^u + (1 - P∗(ω_1)) S^d] (6)». Il docente: basta sostituire le due relazioni per ottenere la (6) (transcript [00:25:39]–[00:26:31]). ⚠️ Anche qui si sconta per (1+r)^(-1).
**Opzione:** S∗_0 = E_{P∗}(S∗_T) = (1+r)^(-1) · [P∗(ω_1)S^u + P∗(ω_2)S^d] (5) e, con P∗(ω_2) = 1 - P∗(ω_1), S∗_0 = (1+r)^(-1) · [P∗(ω_1)S^u + (1 - P∗(ω_1))S^d] (6).
**Distrattori:**
- S∗_0 = E_{P∗}(S∗_T) = (1+r) · [P∗(ω_1)S^u + P∗(ω_2)S^d] (5) e, con P∗(ω_2) = 1 - P∗(ω_1), S∗_0 = (1+r) · [P∗(ω_1)S^u + (1 - P∗(ω_1))S^d] (6).
- C_0 = E_P((1+r)^(-1)C_T) = (1+r)^(-1) · [P(ω_1)(S^u - K)^+ + P(ω_2)(S^d - K)^+]
- C∗_0 = C_0 = E_{P∗}((1+r)^(-1) C_T) = E_{P∗}(C∗_T): P∗ è anche la misura di martingala per l'opzione.

**D:** ⚠️ Quali valori di P∗(ω_1) e P∗(ω_2) risolvono la (6) nel metodo della martingala?
**R:** Slide 32: «la soluzione dell'equazione (6) determina l'unica soluzione per il valore di P∗(ω_1) e P∗(ω_2): i. P∗(ω_1) = ((1+r)S_0 - S^d)/(S^u - S^d); ii. P∗(ω_2) = (S^u - (1+r)S_0)/(S^u - S^d)». Il docente: la soluzione dell'equazione 6 «determina analiticamente l'unica soluzione» (transcript [00:26:01]–[00:26:31]). ⚠️ P∗(ω_1), la probabilità dello scenario up, ha S^d al numeratore; P∗(ω_2) ha S^u.
**Opzione:** P∗(ω_1) = ((1+r)S_0 - S^d)/(S^u - S^d) e P∗(ω_2) = (S^u - (1+r)S_0)/(S^u - S^d): la soluzione è unica.
**Distrattori:**
- P∗(ω_1) = (S^u - (1+r)S_0)/(S^u - S^d) e P∗(ω_2) = ((1+r)S_0 - S^d)/(S^u - S^d): la soluzione è unica.
- C_0 = E_P((1+r)^(-1)C_T) = (1+r)^(-1) · [P(ω_1)(S^u - K)^+ + P(ω_2)(S^d - K)^+]
- C = 0,673, da Δ = 0,25 (neutralità al rischio) e da 20 ∗ Δ - C = (18 ∗ Δ)/(1.04) (assenza di arbitraggio).

**D:** ⚠️ Che cosa si ricava dalla (1) nel metodo della martingala, e che ruolo ha P∗ per l'opzione?
**R:** Slide 33–34: «Il prezzo dell'opzione sotto una data misura di probabilità è dato da: C_0 = E_P((1+r)^(-1)C_T) = (1+r)^(-1) · [P(ω_1)(S^u - K)^+ + P(ω_2)(S^d - K)^+] (1). Quindi: C∗_0 = C_0 = E_{P∗}((1+r)^(-1) C_T) = E_{P∗}(C∗_T) i.e. P∗ è anche la misura di martingala per l'opzione.» Il docente: il prezzo scontato dell'opzione C∗_0 «equivale al C0», ed è il valore atteso sotto la misura P∗, «che è anche detta misura di martingala per l'opzione», del prezzo a scadenza scontato (transcript [00:27:19]–[00:28:03]). ⚠️ «Anche»: P∗ è la misura di martingala del sottostante (slide 30) e dell'opzione.
**Opzione:** C∗_0 = C_0 = E_{P∗}((1+r)^(-1) C_T) = E_{P∗}(C∗_T): P∗ è anche la misura di martingala per l'opzione.
**Distrattori:**
- C∗_0 = C_0 = E_{P∗}((1+r)^(-1) C_T) = E_{P∗}(C∗_T): P∗ è la misura di martingala per il sottostante, ma non per l'opzione.
- Rendimento atteso dell'opzione = Tasso di interesse privo di rischio, e Prezzo dell'opzione = Pay-Off Atteso Scontato: 20 ∗ Δ - C = (22 ∗ Δ - 1)/(1.04), oppure 20 ∗ Δ - C = (18 ∗ Δ)/(1.04).
- Esistono due scenari, up e down.

**D:** ⚠️ A che cosa porta, nel metodo della martingala, la sostituzione delle misure di probabilità nel prezzo dell'opzione, e che cosa non torna nell'ultima riga della slide 35?
**R:** Slide 35: «sostituendo le misure di probabilità» si ha (1+r)^(-1) · [((1+r)S_0 - S^d)/(S^u - S^d) C^u + (S^u - (1+r)S_0)/(S^u - S^d) C^d]; semplificando e raccogliendo (C^u - C^d) si arriva a C∗_0 = (C^u - C^d)S_0/(S^u - S^d) + (C^d S^u + C^u S^d)/((S^u - S^d)(1+r)), «che è uguale a (3)», come scrive la slide. Il metodo della martingala ritrova il prezzo del metodo di replicazione (slide 21); il docente: «che guarda caso è uguale alla 3» (transcript [00:28:03]–[00:29:13]). ⚠️ Nell'ultima riga la slide scrive al numeratore **C^d S^u + C^u S^d**, mentre la (3) della slide 21 e la riga precedente della stessa slide 35 hanno **C^d S^u - C^u S^d**; il docente legge il «più» ([00:28:40]). È un refuso di segno della slide: vale la (3).

**D:** ⚠️ A che cosa è pari il prezzo al tempo zero dell'opzione call C con scadenza T, secondo il test della lezione 08 (domanda 1)?
**R:** «**C_0=E_P[(1+r)^(-1)C_T]**». È il primo membro della formula (1) della slide 8, ripetuta alla 33, con le parentesi quadre al posto delle tonde. Il docente: il prezzo è il valore atteso sotto P del valore della call a scadenza «attualizzato per un tasso di interesse R» (transcript [00:08:41]–[00:09:24]). La domanda è una matrice a tre assi: chi sta a sinistra (C_0 o C_T), che cosa si sconta (C_T o C_0) e il fattore ((1+r)^(-1) o (1+r)). Distrattori del test: «C_T=E_P[(1+r)^(-1)C_T]» sbaglia solo il primo asse e **si contraddice da sola**, perché a sinistra c'è una variabile casuale e a destra un numero, il suo valore atteso scontato; torna nelle domande 3, 4 e 5. «C_0=E_P[(1+r)C_T]» sbaglia solo il fattore, che capitalizza invece di attualizzare. «C_T=E_P[(1+r)^(-1)C_0]» sbaglia i primi due assi.
**Opzione:** C_0=E_P[(1+r)^(-1)C_T]
**Distrattori:**
- C_T=E_P[(1+r)^(-1)C_T]
- C_T=E_P[(1+r)^(-1)C_0]
- C_0=E_P[(1+r)C_T]

**D:** ⚠️ Che cosa vale nel modello di Sharpe-Rendleman-Bartter uniperiodale, secondo il test della lezione 08 (domanda 2)?
**R:** «**esistono due scenari, up e down**». La slide 5 definisce Ω = {ω_1, ω_2}, la slide 6 associa S^u a ω_1 e S^d a ω_2, la slide 9 disegna «S Up» e «S Down». Il docente: i due eventi «qualificano due potenziali valori del mio sottostante, S up e S down» (transcript [00:07:55]). Distrattori del test: «esistono scenari idefiniti» è una trappola lessicale, perché nel transcript «indefiniti» sono i guadagni o le perdite della call ([00:05:14]); «il rendimento atteso dell'azione è uguale al tasso di interesse rischioso» scambia l'opzione con l'azione e il «privo di rischio» della slide 24 con un «rischioso» che non esiste nei materiali; «il rendimento atteso dell'azione è superiore al rendimento atteso dell'opzione» è un confronto che le slide non fanno.
**Opzione:** esistono due scenari, up e down
**Distrattori:**
- esistono scenari idefiniti
- il rendimento atteso dell'azione è uguale al tasso di interesse rischioso
- il rendimento atteso dell'azione è superiore al rendimento atteso dell'opzione

**D:** ⚠️ Che cosa vale nel modello di Sharpe-Rendleman-Bartter in assenza di arbitraggio, secondo il test della lezione 08 (domanda 3)?
**R:** «**il tasso di interesse privo di rischio è uguale al rendimento atteso dell'opzione**». È la slide 24, «ASSENZA DI ARBITRAGGIO»: «Rendimento atteso dell'opzione = Tasso di interesse privo di rischio», con i membri scambiati. Il docente: «il rendimento atteso dell'opzione non può che essere uguale a quello del tasso di interesse privo di rischio» (transcript [00:21:33]). ⚠️ La slide 27 scrive «Valore atteso dell'opzione = Tasso di interesse privo di rischio», e il docente la legge così ([00:24:03]): la formula coerente è quella della slide 24, ed è quella della chiave. Distrattori del test: «il rendimento atteso dell'azione è uguale al tasso di interesse rischioso» ha l'oggetto scambiato e il segno invertito; «esistono scenari idefiniti» e «C_T=E_P[(1+r)^(-1)C_T]» sono il distrattore lessicale della domanda 2 e la formula che si contraddice da sola della domanda 1.
**Opzione:** il tasso di interesse privo di rischio è uguale al rendimento atteso dell'opzione
**Distrattori:**
- esistono scenari idefiniti
- il rendimento atteso dell'azione è uguale al tasso di interesse rischioso
- C_T=E_P[(1+r)^(-1)C_T]

**D:** ⚠️ Com'è la misura di probabilità nel modello di Sharpe-Rendleman-Bartter, secondo il test della lezione 08 (domanda 4)?
**R:** «**è tale che le probabilità degli eventi sommano ad 1 in un unico periodo**». Slide 5: «una misura di probabilità P tale che: P(ω_1) + P(ω_2) = 1»; slide 31: P∗(ω_1) + P∗(ω_2) = 1; il docente lo dice a [00:07:38]. L'unico periodo è quello dello schema uniperiodale (slide 3). ⚠️ La D del test, «è tale che le probabilità degli eventi sono sempre < 1 in un unico periodo», non è nei materiali, che danno solo la somma e, nella lezione 01, valori in [0,1] estremi compresi. È però difendibile come matematica: se entrambi gli scenari hanno probabilità positiva, ciascuna è minore di 1. Per questo qui non compare fra i distrattori; all'esame va segnata la A. Gli altri distrattori del test sono il distrattore lessicale «scenari idefiniti», con il refuso «è ta che», e la formula che si contraddice da sola.
**Opzione:** è tale che le probabilità degli eventi sommano ad 1 in un unico periodo
**Distrattori:**
- è ta che esistono scenari idefiniti
- è tale che C_T=E_P[(1+r)^(-1)C_T]

**D:** ⚠️ Di che cosa consta il portafoglio di replicazione nel modello di Sharpe-Rendleman-Bartter, secondo il test della lezione 08 (domanda 5)?
**R:** «**consta di 1 azione e la liquidità necessaria a replicare le posizioni iniziale e finale**»: è la chiave della piattaforma, da segnare. 🚨 Ma «1 azione» non è nelle slide. Il portafoglio è φ = (α_0, β_0), con α_0 azioni e β_0 liquidità (slide 17); α_0 = (C^u - C^d)/(S^u - S^d) (slide 20), e nell'esempio Δ = 0,25 (slide 23). L'«1» della slide 16 appartiene alla call venduta. La D è comunque l'unica opzione con azioni e liquidità, e l'unica con i due tempi: replica il pay-off a scadenza (slide 19) e vale C_0 a t = 0 (slide 21–22). Distrattori del test: «n opzioni e la liquidità» mette le opzioni al posto delle azioni; «n azioni e m opzioni» ricorda il portafoglio con Δ azioni e la call venduta della slide 16, che il docente chiama «il mio portafoglio di replicazione» ([00:22:18]) ma che nelle slide è quello della neutralità al rischio; «è tale che C_T=E_P[(1+r)^(-1)C_T]» è la formula che si contraddice da sola.
**Opzione:** consta di 1 azione e la liquidità necessaria a replicare le posizioni iniziale e finale
**Distrattori:**
- consta di n opzioni e la liquidità necessaria a replicare la posizione iniziale
- è tale che C_T=E_P[(1+r)^(-1)C_T]
- consta di n azioni e m opzioni necessarie a replicare la posizione finale

## Lezione 09 — Pricing 2 - Modello Cox-Ross-Rubinstein

**D:** ⚠️ Che cosa studia il modello di Cox-Ross-Rubinstein, e quale modello generalizza?
**R:** Slide 2: «Il modello di Cox-Ross-Rubinstein — Pricing delle opzioni in uno schema multiperiodale». Il docente: è «una generalizzazione del modello di Sharp, Renderman e Barter che abbiamo visto essere un modello uniperiodale», e affronta «lo stesso fenomeno del pricing delle opzioni ma in uno schema multiperiodale» (transcript [00:00:04]–[00:00:43]). ⚠️ Multiperiodale: le date sono 0, 1, ....., T (slide 3); il modello della lezione 08 aveva un solo periodo.
**Opzione:** Il pricing delle opzioni in uno schema multiperiodale: generalizza il modello di Sharpe-Rendleman-Bartter, che è uniperiodale.
**Distrattori:**
- Il pricing delle opzioni in uno schema uniperiodale: generalizza il modello di Sharpe-Rendleman-Bartter, che è multiperiodale.
- La costruzione di un portafoglio finanziario che replica esattamente il valore dell'opzione, perché è identico a essa in ogni momento in termini di valore.
- C∗_{T-m} = E_{P∗}(r̂^(-m)(S_T - K)^+ | ℑ^S_{T-m}), ∀m ≤ T: il prezzo del derivato è il valore scontato atteso sotto la misura di martingala, identico al prezzo del metodo di replicazione (30).

**D:** ⚠️ Quali sono le due attività finanziarie del modello di Cox-Ross-Rubinstein, e come evolve quella priva di rischio?
**R:** Slide 3: «Si consideri la successione di date: 0, 1, .....T e due attività finanziarie: un'attività rischiosa S ed un'altra priva di rischio B: i. B_t = (1 + r)^t = r̂^t ∀t ≤ T». Il docente: quella priva di rischio «è uguale a un fattore di capitalizzazione, 1 più R», elevato al tempo, e «lo denoteremo come R cappello» (transcript [00:00:43]–[00:01:07]). ⚠️ r̂ è il fattore di capitalizzazione lordo 1 + r, non il tasso r: è la r̂ di tutte le formule della lezione. ⚠️ B è l'attività priva di rischio; la liquidità del portafoglio di replicazione è β.
**Opzione:** Un'attività rischiosa S e una priva di rischio B, con B_t = (1 + r)^t = r̂^t ∀t ≤ T.
**Distrattori:**
- Un'attività rischiosa S e una priva di rischio B, con B_t = (1 + r)^(-t) = r̂^(-t) ∀t ≤ T.
- S_t = S_0 ∏_{j=1}^{t} ξ_j ∀t ≤ T
- dt dt = (dt)²

**D:** ⚠️ Quali ipotesi pone la slide 3 sulla dinamica dell'attività rischiosa S nel modello di Cox-Ross-Rubinstein?
**R:** Slide 3: «ii. S_{t+1} = S_tξ_{t+1} dove • ξ_{t+1} ∈ {u, d} ∀t ≤ T - 1 • d < r̂ < u • S_0 > 0 • ξ_t sono variabili casuali i.i.d. sullo spazio di probabilità (Ω, ℑ, P)». Il docente: S di t più 1 «è uguale ad S di t per xi t più 1», con «r cappello è maggiore di d e minore di u, s0 è maggiore di 0» e le ξ «variabili casuali, identicamente, indipendentemente distribuite» (transcript [00:01:07]–[00:01:52]). ⚠️ Il fattore di capitalizzazione r̂ sta fra d e u: d < r̂ < u.
**Opzione:** S_{t+1} = S_tξ_{t+1}, con ξ_{t+1} ∈ {u, d} ∀t ≤ T - 1, d < r̂ < u, S_0 > 0 e ξ_t variabili casuali i.i.d. sullo spazio di probabilità (Ω, ℑ, P).
**Distrattori:**
- S_{t+1} = S_tξ_{t+1}, con ξ_{t+1} ∈ {u, d} ∀t ≤ T - 1, r̂ < d < u, S_0 > 0 e ξ_t variabili casuali i.i.d. sullo spazio di probabilità (Ω, ℑ, P).
- S∗_t = E_{P∗}(S∗_{t+1} | ℑ^S_t) ∀t ≤ T - 1
- V_{T-1}(φ) = α_{T-1}S_{T-1} + β_{T-1} = C_{T-1}: il portafoglio è costruito per valere quanto la call.

**D:** ⚠️ Quali valori può assumere ξ_{t+1} nel modello di Cox-Ross-Rubinstein?
**R:** Soltanto due. Slide 3: «ξ_{t+1} ∈ {u, d} ∀t ≤ T - 1»; slide 10: «Poichè ξ_T può assumere soltanto due valori: u, d allora il sistema sottostante è univocamente determinato». Il docente: ξ «può assumere soltanto due valori, up and down» (transcript [00:07:22]). ⚠️ A [00:01:07]–[00:01:21] il transcript dice che ξ «appartiene all'intervallo» e «assume valori u e d»: {u, d} non è un intervallo, è un insieme di due valori. Vale la slide.
**Opzione:** Soltanto due valori, u e d: ξ_{t+1} ∈ {u, d} ∀t ≤ T - 1.
**Distrattori:**
- Tutti i valori dell'intervallo fra d e u: d ≤ ξ_{t+1} ≤ u ∀t ≤ T - 1.
- p∗ = (r̂ - d)/(u - d) e 1 - p∗ = (u - r̂)/(u - d)
- dW_tdt = (dt)^(3/2)

**D:** ⚠️ Come si scrive S_t in funzione di S_0 con la produttoria, nel modello di Cox-Ross-Rubinstein?
**R:** Slide 4: «S_t può essere scritto come: S_t = S_0 ∏_{j=1}^{t} ξ_j ∀t ≤ T». Il docente: «s0 per la produttoria, per j che va da 1 a t, di» ξ_j (transcript [00:01:21]–[00:01:56]). ⚠️ La produttoria parte da S_0 e da ξ_1; nella ricorsione S_T = S_{T-1}ξ_T (slide 9) c'è un solo fattore. Mescolare le due forme dà il distrattore S_T=S_{T-1}ξ_1ξ_2ξ_T della domanda 2 del test.
**Opzione:** S_t = S_0 ∏_{j=1}^{t} ξ_j ∀t ≤ T
**Distrattori:**
- S_t = S_0 ∑_{j=1}^{t} ξ_j ∀t ≤ T
- Un'attività rischiosa S e una priva di rischio B, con B_t = (1 + r)^t = r̂^t ∀t ≤ T.
- C_{T-2} = (1/r̂)(p∗C^u_{T-1} + (1 - p∗)C^d_{T-1})

**D:** Come si riscrive S_t in forma esponenziale nel modello di Cox-Ross-Rubinstein, e come sono distribuite le ζ_t?
**R:** Slide 4: «e, similarmente: S_t = S_0 · e^(∑_{j=1}^{t} ζ_j) ∀t ≤ T dove ζ_t sono di nuovo i.i.d. sullo spazio di probabilità (Ω, ℑ, P) i.e.: P{ζ_t = ln u} = p = 1 - P{ζ_t = ln d} ∀t ≤ T.» Il docente: «per le proprietà dei numeri esponenziali possiamo riscrivere la produttoria come l'esponenziale della sommatoria»; «evidente il rapporto esponenziale logaritmo» (transcript [00:01:56]–[00:02:43]). ⚠️ Il docente le chiama «sigma j», la slide scrive ζ_j (zeta). ⚠️ ζ_t vale ln u o ln d, non u o d.
**Opzione:** S_t = S_0 · e^(∑_{j=1}^{t} ζ_j) ∀t ≤ T, con ζ_t i.i.d. e P{ζ_t = ln u} = p = 1 - P{ζ_t = ln d}.
**Distrattori:**
- S_t = S_0 · e^(∑_{j=1}^{t} ζ_j) ∀t ≤ T, con ζ_t i.i.d. e P{ζ_t = u} = p = 1 - P{ζ_t = d}.
- Y_t = lnX_t
- lnX_t/X_{t-dt}~N[(a-b²/2)dt,bdt^(1/2))]

**D:** ⚠️ Nell'albero del modello di Cox-Ross-Rubinstein, quale valore assume S se va una volta in alto e una volta in basso?
**R:** Slide 5, «Pricing – Un approccio intuitivo»: da S_0 l'albero va a S_u e S_d, poi a S_uu, S_ud e S_dd, fino a S_uu..u, S_ud..d e S_dd..d, sull'asse t=0, t=Δt, t=2∗Δt, …, t=T=N∗Δt; il nodo S_ud è uno solo. Il docente: «S assumerà il valore up down, che è lo stesso valore che assume quando S down va verso l'alto» (transcript [00:03:19]–[00:03:31]). La slide 6 rimappa sullo stesso albero il valore dell'opzione: O_0, O_u, O_d, O_ud, O_dd… ([00:03:59]–[00:04:34]).
**Opzione:** Il valore S_ud, lo stesso che assume quando S_d va verso l'alto: l'ordine dei due movimenti non conta.
**Distrattori:**
- Il valore S_ud, diverso da quello che assume quando S_d va verso l'alto: l'ordine dei due movimenti conta.
- Soltanto due valori, u e d: ξ_{t+1} ∈ {u, d} ∀t ≤ T - 1.
- Il pricing delle opzioni in uno schema multiperiodale: generalizza il modello di Sharpe-Rendleman-Bartter, che è uniperiodale.

**D:** Che cos'è il metodo di replicazione del portafoglio, secondo il docente della lezione 09?
**R:** «la costruzione di un portafoglio finanziario che va a replicare esattamente il valore dell'opzione in quanto è allo stesso identico in ogni momento in termini di valore» (transcript [00:04:38]–[00:05:09]). È solo nel transcript: la slide 7 è il frontespizio «Il metodo di replicazione del portafoglio». ⚠️ «In ogni momento»: la procedura impone l'uguaglianza fra portafoglio e call a T, a T - 1, a T - 2 e così via (slide 8, 12, 22, 33).
**Opzione:** La costruzione di un portafoglio finanziario che replica esattamente il valore dell'opzione, perché è identico a essa in ogni momento in termini di valore.
**Distrattori:**
- La costruzione di un portafoglio finanziario che replica il valore dell'opzione soltanto alla scadenza, mentre negli altri momenti può valere diversamente.
- Il valore S_ud, lo stesso che assume quando S_d va verso l'alto: l'ordine dei due movimenti non conta.
- Che risolvendo r̂ = up∗ + (1 - p∗)d si ritrovano le stesse (9) e (10): p∗ e 1 - p∗ sono le probabilità della misura di martingala.

**D:** ⚠️ Che cosa si replica nel modello di Cox-Ross-Rubinstein, e come si scrive il valore del portafoglio al tempo T (formula (7))?
**R:** Slide 8: «Si replica la posizione corta di un investitore su una call. Al tempo T. (C_T): V_T(φ) = α_{T-1}S_T + β_{T-1}r̂ = C_T = (S_T - K)^+ (7)». Il docente: «una certa quantità di sottostante identificata al tempo t meno 1 moltiplicata per S t grande più il valore dell'attività priva di rischio al tempo t meno 1 capitalizzato» per r̂ = 1 + r, e il portafoglio si impone «uguale al prezzo dell'opzione alla scadenza» (transcript [00:05:09]–[00:06:23]). ⚠️ α_{T-1} e β_{T-1} si decidono a T - 1; a T la liquidità è capitalizzata per r̂. È la chiave della domanda 1 del test, che scrive θ, B e r al posto di φ, β e r̂.
**Opzione:** La posizione corta di un investitore su una call: V_T(φ) = α_{T-1}S_T + β_{T-1}r̂ = C_T = (S_T - K)^+
**Distrattori:**
- La posizione corta di un investitore su una call: V_T(φ) = α_{T-1}S_T + β_{T-1}r̂^(-1) = C_T = (S_T - K)^+
- a = inf{j ∈ N^+ | S_{T-m}u^j d^(m-j) - K > 0}: con la somma da j = a si elimina dalla (29) la funzione di massimo.
- S_T = S_{T-m}ξ_{T-m+1}ξ_{T-m+2}.....ξ_T

**D:** ⚠️ Perché il sistema della slide 10 è univocamente determinato, e come si scrive?
**R:** Slide 9: «Poichè S_T = S_{T-1}ξ_T l'espressione (7) può essere scritta come: V_T(φ) = α_{T-1}S_{T-1}ξ_T + β_{T-1}r̂ = C_T = (S_{T-1}ξ_T - K)^+». Slide 10: «Poichè ξ_T può assumere soltanto due valori: u, d allora il sistema sottostante è univocamente determinato: V_T(φ)(ξ) = V^u_T(φ) = α_{T-1}uS_{T-1} + r̂β_{T-1} = (S_{T-1}u - K)^+ if ξ_T = u; V^d_T(φ) = α_{T-1}dS_{T-1} + r̂β_{T-1} = (S_{T-1}d - K)^+ if ξ_T = d». Il docente: due equazioni, «una in termini dell'evento up e una in termini dell'evento down» (transcript [00:07:22]–[00:07:53]).
**Opzione:** Perché ξ_T assume soltanto i valori u e d: V^u_T(φ) = α_{T-1}uS_{T-1} + r̂β_{T-1} = (S_{T-1}u - K)^+ se ξ_T = u e V^d_T(φ) = α_{T-1}dS_{T-1} + r̂β_{T-1} = (S_{T-1}d - K)^+ se ξ_T = d.
**Distrattori:**
- Perché ξ_T assume soltanto i valori u e d: V^u_T(φ) = α_{T-1}uS_{T-1} + r̂β_{T-1} = (S_{T-1}d - K)^+ se ξ_T = u e V^d_T(φ) = α_{T-1}dS_{T-1} + r̂β_{T-1} = (S_{T-1}u - K)^+ se ξ_T = d.
- Una misura P∗ equivalente a P, sotto cui il prezzo scontato del sottostante S∗ soddisfi S∗_0 = S_0 e S∗_T = (1 + r)^(-T)S_T.
- r̂^(-(t+1)) perché è una costante; S_t perché è adattato a S_0, S_1, ...., S_t, cioè alla σ-algebra ℑ^S_t scritta esplicitamente.

**D:** ⚠️ Quanto vale α_{T-1}, la quantità di sottostante che risolve il sistema della slide 10?
**R:** Slide 11: «Questo sistema ha un'unica soluzione data da: α_{T-1} = [(S_{T-1}u-K)^+ - (S_{T-1}d-K)^+]/[S_{T-1}(u-d)]». Il docente: «Ovviamente questo sistema ha un'unica soluzione, è data dalle due frazioni che sono riportate qui nella slide» (transcript [00:07:53]–[00:08:11]). ⚠️ Al denominatore S_{T-1}(u-d), non r̂(u-d), che è quello di β_{T-1}. È la chiave della domanda 3 del test.
**Opzione:** α_{T-1} = [(S_{T-1}u-K)^+ - (S_{T-1}d-K)^+]/[S_{T-1}(u-d)]
**Distrattori:**
- α_{T-1} = [(S_{T-1}u-K)^+ - (S_{T-1}d-K)^+]/[r̂(u-d)]
- S_t = S_0 · e^(∑_{j=1}^{t} ζ_j) ∀t ≤ T, con ζ_t i.i.d. e P{ζ_t = ln u} = p = 1 - P{ζ_t = ln d}.
- S∗_t = E_{P∗}(S∗_{t+1} | ℑ^S_t) ∀t ≤ T - 1

**D:** ⚠️ Quanto vale β_{T-1}, la liquidità che risolve il sistema della slide 10?
**R:** Slide 11: «β_{T-1} = [u(S_{T-1}d-K)^+ - d(uS_{T-1}-K)^+]/[r̂(u-d)]». ⚠️ u moltiplica il pay-off dello scenario down, d quello dello scenario up; al denominatore c'è r̂(u-d), mentre α_{T-1} ha S_{T-1}(u-d). È la chiave della domanda 4 del test, che scrive (S_{T-1}u-K)^+ al posto di (uS_{T-1}-K)^+, lo stesso prodotto, e r al posto di r̂.
**Opzione:** β_{T-1} = [u(S_{T-1}d-K)^+ - d(uS_{T-1}-K)^+]/[r̂(u-d)]
**Distrattori:**
- β_{T-1} = [u(S_{T-1}d-K)^+ - d(uS_{T-1}-K)^+]/[S_{T-1}(u-d)]
- S_t = S_0 ∏_{j=1}^{t} ξ_j ∀t ≤ T
- S_T = S_{T-m}ξ_{T-m+1}ξ_{T-m+2}.....ξ_T

**D:** ⚠️ Quanto vale il portafoglio di replicazione al tempo T - 1 nel modello di Cox-Ross-Rubinstein (formula (8)), e perché?
**R:** Slide 12: «Il valore del portafoglio al tempo T - 1 è uguale al valore della call al tempo T - 1: V_{T-1}(φ) = α_{T-1}S_{T-1} + β_{T-1} = C_{T-1} (8)». Il docente: «perché così abbiamo costruito il nostro portafoglio di replica» (transcript [00:08:11]). ⚠️ A T - 1 la liquidità è β_{T-1}, senza r̂: il fattore r̂ compare nella (7), al tempo T.
**Opzione:** V_{T-1}(φ) = α_{T-1}S_{T-1} + β_{T-1} = C_{T-1}: il portafoglio è costruito per valere quanto la call.
**Distrattori:**
- V_{T-1}(φ) = α_{T-1}S_{T-1} + β_{T-1}r̂ = C_{T-1}: il portafoglio è costruito per valere quanto la call.
- S_{t+1} = S_tξ_{t+1}, con ξ_{t+1} ∈ {u, d} ∀t ≤ T - 1, d < r̂ < u, S_0 > 0 e ξ_t variabili casuali i.i.d. sullo spazio di probabilità (Ω, ℑ, P).
- Perché ξ_{t+1} è per ipotesi indipendente da S_0, S_1, ...., S_t; e date le caratteristiche distributive di ξ_{t+1}, r̂ = up∗ + (1 - p∗)d.

**D:** ⚠️ Come si definiscono p∗ e 1 - p∗ nel metodo di replicazione del modello di Cox-Ross-Rubinstein (formule (9) e (10))?
**R:** Slide 14: «definendo: p∗ = (r̂ - d)/(u - d) (9)», «(1 - p∗) = 1 - (r̂-d)/(u-d) = (u-r̂)/(u-d)», «1 - p∗ = (u - r̂)/(u - d) (10)»; la slide scrive l'asterisco in pedice. Il docente: «definiamo P star come R cappello meno D su U meno D e 1 meno P star U meno R cappello su U meno D» (transcript [00:09:18]). Le stesse (9) e (10) tornano nella slide 52. ⚠️ Al numeratore di p∗ c'è r̂ - d, con r̂ = 1 + r. È la chiave della domanda 5 del test, che scrive r per r̂.
**Opzione:** p∗ = (r̂ - d)/(u - d) e 1 - p∗ = (u - r̂)/(u - d)
**Distrattori:**
- p∗ = (u - r̂)/(u - d) e 1 - p∗ = (r̂ - d)/(u - d)
- La posizione corta di un investitore su una call: V_T(φ) = α_{T-1}S_T + β_{T-1}r̂ = C_T = (S_T - K)^+
- C_{T-m} = (1/r̂^m) ∑_{j=0}^{m} (m su j) p∗^j (1 - p∗)^(m-j) (u^j d^(m-j) S_{T-m} - K)^+, per m = 1, ....., T

**D:** ⚠️ Quanto vale C_{T-1} nel modello di Cox-Ross-Rubinstein, una volta sostituiti α_{T-1} e β_{T-1} nella (8) e definita p∗ (formula (11))?
**R:** Slide 13: sostituendo α_{T-1} e β_{T-1} e semplificando si arriva a V_{T-1}(φ) = r̂^(-1)[(r̂-d)(S_{T-1}u-K)^+/(u-d) + (u-r̂)(S_{T-1}d-K)^+/(u-d)]; con le (9) e (10), slide 15: «poichè V_{T-1}(φ) = C_{T-1} al tempo T - 1: V_{T-1}(φ) = C_{T-1} = r̂^(-1)[p∗(S_{T-1}u - K)^+ + (1 - p∗)(S_{T-1}d - K)^+] (11)». Il docente: il prezzo della call a T - 1 è «l'inverso di R cappello per P star» per il pay-off dell'evento up «più 1 meno p star» per il pay-off dell'evento down (transcript [00:08:51]–[00:10:09]). ⚠️ p∗ pesa lo scenario up, 1 - p∗ lo scenario down; si sconta per r̂^(-1).
**Opzione:** C_{T-1} = r̂^(-1)[p∗(S_{T-1}u - K)^+ + (1 - p∗)(S_{T-1}d - K)^+]
**Distrattori:**
- C_{T-1} = r̂^(-1)[p∗(S_{T-1}d - K)^+ + (1 - p∗)(S_{T-1}u - K)^+]
- Un'attività rischiosa S e una priva di rischio B, con B_t = (1 + r)^t = r̂^t ∀t ≤ T.
- dW_tdt = (dt)^(3/2)

**D:** ⚠️ Che cosa mostra il metodo della martingala sulle quantità p∗ e 1 - p∗ definite nel metodo di replicazione?
**R:** Nel metodo di replicazione p∗ e 1 - p∗ sono soltanto «definite» (slide 14); il docente anticipa che sono probabilità, «come vedremo quando affronteremo meglio il metodo con il metodo della martingala» ([00:09:31]), e che p∗^j «vedremo col metodo della martingala, essere una probabilità» ([00:21:07]). Nel metodo della martingala, slide 51–52: «r̂ = up∗ + (1 - p∗)d»; «risolvendo per p∗ si ottiene dunque il valore di p∗: p∗ = (r̂ - d)/(u - d) (9)» e «(1 - p∗) = (u - r̂)/(u - d) (10)». Il docente: le relazioni 9 e 10 «guarda caso coincidono con le quantità P star e 1 meno P star che avevamo identificato attraverso il metodo di replicazione del portafoglio» (transcript [00:28:44]).
**Opzione:** Che risolvendo r̂ = up∗ + (1 - p∗)d si ritrovano le stesse (9) e (10): p∗ e 1 - p∗ sono le probabilità della misura di martingala.
**Distrattori:**
- Che risolvendo r̂ = up∗ + (1 - p∗)d si ottengono valori diversi dalle (9) e (10): p∗ e 1 - p∗ non sono le probabilità della misura di martingala.
- La costruzione di un portafoglio finanziario che replica esattamente il valore dell'opzione, perché è identico a essa in ogni momento in termini di valore.
- Che sono i.i.d., con E(ξ_t) = up∗ + (1 - p∗)d, e che il valore atteso del loro prodotto è il prodotto dei valori attesi: E(ξ_0ξ_1ξ_2....ξ_t) = E(ξ_0)E(ξ_1)E(ξ_2).....E(ξ_t).

**D:** ⚠️ Quanto valgono α_{T-2} e β_{T-2}, le soluzioni del sistema (14) (formule (15) e (16))?
**R:** Slide 16: «Questa procedura è ripetuta al tempo T - 2, i.e.: V_{T-1}(φ) = α_{T-2}S_{T-1} + β_{T-2}r̂ = C_{T-1}», con S_{T-1} sostituito da ξ_{T-1}S_{T-2} (12). Slide 19, il nuovo sistema (14): V^u_{T-1}(φ) = α_{T-2}uS_{T-2} + r̂β_{T-2} = C^u_{T-1} se ξ_{T-1} = u, V^d_{T-1}(φ) = α_{T-2}dS_{T-2} + r̂β_{T-2} = C^d_{T-1} se ξ_{T-1} = d. Slide 20: «Il sistema (14) ha la soluzione seguente: α_{T-2} = (C^u_{T-1} - C^d_{T-1})/(S_{T-2}(u - d)) (15), β_{T-2} = (uC^d_{T-1} - dC^u_{T-1})/(r̂(u - d)) (16)». Il docente: «Questo sistema ha una soluzione semplicemente univoca» (transcript [00:12:20]). ⚠️ Le stesse forme della slide 11, con C^u_{T-1} e C^d_{T-1} al posto dei pay-off a scadenza: u moltiplica C^d_{T-1}, d moltiplica C^u_{T-1}.
**Opzione:** α_{T-2} = (C^u_{T-1} - C^d_{T-1})/(S_{T-2}(u - d)) e β_{T-2} = (uC^d_{T-1} - dC^u_{T-1})/(r̂(u - d))
**Distrattori:**
- α_{T-2} = (C^u_{T-1} - C^d_{T-1})/(S_{T-2}(u - d)) e β_{T-2} = (uC^u_{T-1} - dC^d_{T-1})/(r̂(u - d))
- S_t = S_0 · e^(∑_{j=1}^{t} ζ_j) ∀t ≤ T, con ζ_t i.i.d. e P{ζ_t = ln u} = p = 1 - P{ζ_t = ln d}.
- Una misura P∗ equivalente a P, sotto cui il prezzo scontato del sottostante S∗ soddisfi S∗_0 = S_0 e S∗_T = (1 + r)^(-T)S_T.

**D:** ⚠️ Quanto valgono C^u_{T-1} e C^d_{T-1} in funzione di S_{T-2} (formule (17) e (18))?
**R:** Slide 21: «dove usando la (13) si ottengono i valori per C^u_{T-1} e C^d_{T-1}: C^u_{T-1} = r̂^(-1)[p∗(S_{T-2}u² - K)^+ + (1 - p∗)(S_{T-2}ud - K)^+] (17); C^d_{T-1} = r̂^(-1)[p∗(S_{T-2}ud - K)^+ + (1 - p∗)(S_{T-2}d² - K)^+] (18)». Il docente: la media ponderata con p∗ e 1 - p∗ «del valore intrinseco dell'opzione portato indietro di due tempi», con «un evento up per due volte, quindi up al quadrato, un evento up and down», e nella 18 «down due volte»; «le componenti si incrociano» (transcript [00:12:36]–[00:13:47]). ⚠️ Il nodo ud compare in entrambe: pesato 1 - p∗ in C^u_{T-1}, p∗ in C^d_{T-1}.
**Opzione:** C^u_{T-1} = r̂^(-1)[p∗(S_{T-2}u² - K)^+ + (1 - p∗)(S_{T-2}ud - K)^+] e C^d_{T-1} = r̂^(-1)[p∗(S_{T-2}ud - K)^+ + (1 - p∗)(S_{T-2}d² - K)^+]
**Distrattori:**
- C^u_{T-1} = r̂^(-1)[p∗(S_{T-2}u² - K)^+ + (1 - p∗)(S_{T-2}ud - K)^+] e C^d_{T-1} = r̂^(-1)[p∗(S_{T-2}d² - K)^+ + (1 - p∗)(S_{T-2}ud - K)^+]
- p∗ = (r̂ - d)/(u - d) e 1 - p∗ = (u - r̂)/(u - d)
- Soltanto due valori, u e d: ξ_{t+1} ∈ {u, d} ∀t ≤ T - 1.

**D:** ⚠️ Come si scrive C_{T-2} in funzione di C^u_{T-1} e C^d_{T-1}?
**R:** Slide 22: «Il valore del portafoglio al tempo T - 2 è definito come il valore della Call al tempo T - 2: V_{T-2}(φ) = α_{T-2}S_{T-2} + β_{T-2} = C_{T-2} (19)». Slide 23–24: sostituendo la (15) e la (16) e «utilizzando le definizioni (9) e (10)» si ricava «= (1/r̂)(p∗C^u_{T-1} + (1 - p∗)C^d_{T-1})». Il docente: «1 su r cappello che moltiplica la media ponderata con p star e 1 meno p star come fattori di ponderazione di che cosa? Del prezzo della call up al tempo t meno 1 e del prezzo della call down al tempo t meno 1» (transcript [00:13:47]–[00:14:44]). ⚠️ È la struttura della (11), un periodo prima: media ponderata con p∗ sul ramo up, scontata per 1/r̂.
**Opzione:** C_{T-2} = (1/r̂)(p∗C^u_{T-1} + (1 - p∗)C^d_{T-1})
**Distrattori:**
- C_{T-2} = (1/r̂)(p∗C^d_{T-1} + (1 - p∗)C^u_{T-1})
- β_{T-1} = [u(S_{T-1}d-K)^+ - d(uS_{T-1}-K)^+]/[r̂(u-d)]
- α_{T-3} = (C^u_{T-2} - C^d_{T-2})/(S_{T-3}(u - d)) e β_{T-3} = (uC^d_{T-2} - dC^u_{T-2})/(r̂(u - d))

**D:** ⚠️ Quanto vale C_{T-2} in funzione di S_{T-2} (formula (20))?
**R:** Slide 25: sostituendo la (17) e la (18); slide 26: «semplificando C_{T-2} = (1/r̂²)[p∗²(S_{T-2}u² - K)^+ + 2p∗(1 - p∗)(S_{T-2}ud - K)^+ + (1 - p∗)²(S_{T-2}d² - K)^+] (20)». Il docente: «Semplificando troviamo il prezzo della call al tempo t-2 e viene caratterizzato dall'espressione 20» (transcript [00:15:34]). ⚠️ Due periodi: si sconta per 1/r̂², e il nodo ud ha il coefficiente 2p∗(1 - p∗).
**Opzione:** C_{T-2} = (1/r̂²)[p∗²(S_{T-2}u² - K)^+ + 2p∗(1 - p∗)(S_{T-2}ud - K)^+ + (1 - p∗)²(S_{T-2}d² - K)^+]
**Distrattori:**
- C_{T-2} = (1/r̂)[p∗²(S_{T-2}u² - K)^+ + 2p∗(1 - p∗)(S_{T-2}ud - K)^+ + (1 - p∗)²(S_{T-2}d² - K)^+]
- α_{T-1} = [(S_{T-1}u-K)^+ - (S_{T-1}d-K)^+]/[S_{T-1}(u-d)]
- r̂^(-(t+1)) perché è una costante; S_t perché è adattato a S_0, S_1, ...., S_t, cioè alla σ-algebra ℑ^S_t scritta esplicitamente.

**D:** Quanto valgono α_{T-3} e β_{T-3} nel modello di Cox-Ross-Rubinstein (formule (23) e (24))?
**R:** Slide 27: «la procedura è ripetuta al tempo T - 3, i.e.: V_{T-2}(φ) = α_{T-3}S_{T-2} + β_{T-3}r̂ = C_{T-2}», con S_{T-2} = ξ_{T-2}S_{T-3} (21). Slide 30–31: il nuovo sistema, V^u_{T-2}(φ) = α_{T-3}uS_{T-3} + r̂β_{T-3} = C^u_{T-2} e V^d_{T-2}(φ) = α_{T-3}dS_{T-3} + r̂β_{T-3} = C^d_{T-2}, «le cui soluzioni sono: α_{T-3} = (C^u_{T-2} - C^d_{T-2})/(S_{T-3}(u - d)) (23); β_{T-3} = (uC^d_{T-2} - dC^u_{T-2})/(r̂(u - d)) (24)» (transcript [00:15:44]–[00:17:41]). ⚠️ Le forme della (15) e della (16), un periodo prima. Nel sistema la slide 30 scrive le condizioni «if ξ_T = u» e «if ξ_T = d», dove la slide 19 scriveva ξ_{T-1}: è un refuso, la variabile in gioco è ξ_{T-2}.
**Opzione:** α_{T-3} = (C^u_{T-2} - C^d_{T-2})/(S_{T-3}(u - d)) e β_{T-3} = (uC^d_{T-2} - dC^u_{T-2})/(r̂(u - d))
**Distrattori:**
- α_{T-3} = (C^u_{T-2} - C^d_{T-2})/(r̂(u - d)) e β_{T-3} = (uC^d_{T-2} - dC^u_{T-2})/(S_{T-3}(u - d))
- C_{T-1} = r̂^(-1)[p∗(S_{T-1}u - K)^+ + (1 - p∗)(S_{T-1}d - K)^+]
- dt dt = (dt)²

**D:** ⚠️ Quanto vale C_{T-3} dopo le semplificazioni (formula (28)), e che cosa vi nota il docente?
**R:** Slide 36: sostituendo la (25) e la (26); slide 37: un primo «semplificando» con sei addendi; slide 38: «semplificando ancora C_{T-3} = (1/r̂³)[p∗³(S_{T-3}u³ - K)^+ + 3p∗²(1 - p∗)(S_{T-3}u²d - K)^+ + 3p∗(1 - p∗)²(S_{T-3}ud² - K)^+ + (1 - p∗)³(S_{T-3}d³ - K)^+] (28)». Il docente: alla formula 28 «iniziamo già a notare una serie di ricorrenze numeriche che a breve ci consentiranno di generalizzare la formula» del pricing multiperiodale (transcript [00:20:16]–[00:20:47]). ⚠️ Tre periodi: 1/r̂³ e coefficienti 1, 3, 3, 1; nella slide 37 i termini in u²d e in ud² sono ancora separati, con 2 e 1.
**Opzione:** C_{T-3} = (1/r̂³)[p∗³(S_{T-3}u³ - K)^+ + 3p∗²(1 - p∗)(S_{T-3}u²d - K)^+ + 3p∗(1 - p∗)²(S_{T-3}ud² - K)^+ + (1 - p∗)³(S_{T-3}d³ - K)^+]
**Distrattori:**
- C_{T-3} = (1/r̂³)[p∗³(S_{T-3}u³ - K)^+ + 2p∗²(1 - p∗)(S_{T-3}u²d - K)^+ + 2p∗(1 - p∗)²(S_{T-3}ud² - K)^+ + (1 - p∗)³(S_{T-3}d³ - K)^+]
- V_{T-1}(φ) = α_{T-1}S_{T-1} + β_{T-1} = C_{T-1}: il portafoglio è costruito per valere quanto la call.
- a = inf{j ∈ N^+ | S_{T-m}u^j d^(m-j) - K > 0}: con la somma da j = a si elimina dalla (29) la funzione di massimo.

**D:** ⚠️ Qual è la formula generale del valore di una call europea al tempo t = T - m nel modello di Cox-Ross-Rubinstein (formula (29))?
**R:** Slide 39–40: «la formula che fornisce il valore di una Call Europea ad un generico tempo t = T - m può essere generalizzata come segue: C_{T-m} = (1/r̂^m) ∑_{j=0}^{m} (m su j) p∗^j (1 - p∗)^(m-j) (u^j d^(m-j) S_{T-m} - K)^+ (29) per m = 1, ....., T». Il docente: «1 diviso r cappello elevato alla m per la sommatoria per j che va da 0 ad m, coefficiente binomiale mj, per il fattore p star j ... per 1 meno p star m meno j, per la funzione di massimo tra u elevato alla j per d elevato alla m meno j, st grande meno m meno k, e 0» (transcript [00:20:47]–[00:21:34]). ⚠️ p∗ ha lo stesso esponente j di u, 1 - p∗ lo stesso esponente m - j di d; (m su j) è il coefficiente binomiale.
**Opzione:** C_{T-m} = (1/r̂^m) ∑_{j=0}^{m} (m su j) p∗^j (1 - p∗)^(m-j) (u^j d^(m-j) S_{T-m} - K)^+, per m = 1, ....., T
**Distrattori:**
- C_{T-m} = (1/r̂^m) ∑_{j=0}^{m} (m su j) p∗^(m-j) (1 - p∗)^j (u^j d^(m-j) S_{T-m} - K)^+, per m = 1, ....., T
- La posizione corta di un investitore su una call: V_T(φ) = α_{T-1}S_T + β_{T-1}r̂ = C_T = (S_T - K)^+
- Perché ξ_{t+1} è per ipotesi indipendente da S_0, S_1, ...., S_t; e date le caratteristiche distributive di ξ_{t+1}, r̂ = up∗ + (1 - p∗)d.

**D:** ⚠️ Che cos'è a nella formula di Cox-Ross-Rubinstein, e a che cosa serve?
**R:** Slide 40: «Al fine di eliminare la funzione di massimo all'interno della formula, si definisce: a = inf{j ∈ N^+ | S_{T-m}u^j d^(m-j) - K > 0}»; slide 41: «Di conseguenza la (29) può essere riscritta come: C_{T-m} = (1/r̂^m) ∑_{j=a}^{m} (m su j) p∗^j (1 - p∗)^(m-j) (u^j d^(m-j) S_{T-m} - K)», senza la parte positiva. Il docente: a è «il valore inferiore di j che appartiene ai naturali positivi tale che» S_{T-m}u^j d^(m-j) - K «sia maggiore di zero» (transcript [00:21:34]–[00:22:25]). ⚠️ Maggiore di zero, e la somma parte da j = a invece che da j = 0.
**Opzione:** a = inf{j ∈ N^+ | S_{T-m}u^j d^(m-j) - K > 0}: con la somma da j = a si elimina dalla (29) la funzione di massimo.
**Distrattori:**
- a = inf{j ∈ N^+ | S_{T-m}u^j d^(m-j) - K < 0}: con la somma da j = a si elimina dalla (29) la funzione di massimo.
- C_{T-2} = (1/r̂)(p∗C^u_{T-1} + (1 - p∗)C^d_{T-1})
- S_{t+1} = S_tξ_{t+1}, con ξ_{t+1} ∈ {u, d} ∀t ≤ T - 1, d < r̂ < u, S_0 > 0 e ξ_t variabili casuali i.i.d. sullo spazio di probabilità (Ω, ℑ, P).

**D:** Come si separa in due sommatorie, una per il sottostante e una per lo strike, la formula del prezzo C_{T-m} senza la funzione di massimo?
**R:** Slide 42: «Quindi: C_{T-m} = (1/r̂^m)(∑_{j=a}^{m} (m su j) p∗^j (1 - p∗)^(m-j) u^j d^(m-j) S_{T-m} - K ∑_{j=a}^{m} (m su j) p∗^j (1 - p∗)^(m-j))»; slide 43: «semplificando: C_{T-m} = (S_{T-m}/r̂^m) ∑_{j=a}^{m} (m su j)(p∗u)^j [(1 - p∗)d]^(m-j) - (K/r̂^m) ∑_{j=a}^{m} (m su j) p∗^j (1 - p∗)^(m-j)». Il docente: «due sommatorie autonome. Una ... relativamente all'attività sottostante rischiosa e uno relativamente a K che è il prezzo di esercizio della call europea»; S_{T-m} esce dalla sommatoria «perché non è influenzata dalla sommatoria» (transcript [00:22:25]–[00:23:26]). ⚠️ Le due sommatorie si sottraggono.
**Opzione:** C_{T-m} = (S_{T-m}/r̂^m) ∑_{j=a}^{m} (m su j)(p∗u)^j [(1 - p∗)d]^(m-j) - (K/r̂^m) ∑_{j=a}^{m} (m su j) p∗^j (1 - p∗)^(m-j)
**Distrattori:**
- C_{T-m} = (S_{T-m}/r̂^m) ∑_{j=a}^{m} (m su j)(p∗u)^j [(1 - p∗)d]^(m-j) + (K/r̂^m) ∑_{j=a}^{m} (m su j) p∗^j (1 - p∗)^(m-j)
- α_{T-1} = [(S_{T-1}u-K)^+ - (S_{T-1}d-K)^+]/[S_{T-1}(u-d)]
- α_{T-3} = (C^u_{T-2} - C^d_{T-2})/(S_{T-3}(u - d)) e β_{T-3} = (uC^d_{T-2} - dC^u_{T-2})/(r̂(u - d))

**D:** ⚠️ Qual è la formula finale (30) del modello di Cox-Ross-Rubinstein ottenuta con il metodo di replicazione?
**R:** Slide 44: «e portando r̂^m all'interno della prima sommatoria e considerando che (1 - p∗)d = 1 - p∗u si ottiene: C_{T-m} = S_{T-m} ∑_{j=a}^{m} (m su j)(p∗ u/r̂)^j (1 - p∗ u/r̂)^(m-j) - (K/r̂^m) ∑_{j=a}^{m} (m su j) p∗^j (1 - p∗)^(m-j) (30)». Il docente: nella prima sommatoria compaiono p∗ u/r̂ e 1 - p∗ u/r̂, nella seconda p∗ e 1 - p∗ «al netto di questi fattori u su r cappello» (transcript [00:23:26]–[00:24:13]). ⚠️ r̂^m sparisce dal primo termine ed entra nelle due basi; resta come K/r̂^m nel secondo. ⚠️ La relazione «(1 - p∗)d = 1 - p∗u» della slide vale divisa per r̂, (1 - p∗)d/r̂ = 1 - p∗u/r̂, perché r̂ = up∗ + (1 - p∗)d (slide 51): è una deduzione dalle formule.
**Opzione:** C_{T-m} = S_{T-m} ∑_{j=a}^{m} (m su j)(p∗ u/r̂)^j (1 - p∗ u/r̂)^(m-j) - (K/r̂^m) ∑_{j=a}^{m} (m su j) p∗^j (1 - p∗)^(m-j)
**Distrattori:**
- C_{T-m} = S_{T-m} ∑_{j=a}^{m} (m su j)(p∗ u/r̂)^j (1 - p∗)^(m-j) - (K/r̂^m) ∑_{j=a}^{m} (m su j) p∗^j (1 - p∗)^(m-j)
- β_{T-1} = [u(S_{T-1}d-K)^+ - d(uS_{T-1}-K)^+]/[r̂(u-d)]
- Perché ξ_T assume soltanto i valori u e d: V^u_T(φ) = α_{T-1}uS_{T-1} + r̂β_{T-1} = (S_{T-1}u - K)^+ se ξ_T = u e V^d_T(φ) = α_{T-1}dS_{T-1} + r̂β_{T-1} = (S_{T-1}d - K)^+ se ξ_T = d.

**D:** ⚠️ Che cosa richiede il metodo della martingala nel modello di Cox-Ross-Rubinstein, e quali condizioni deve soddisfare S∗?
**R:** Slide 45: «L'utilizzo del metodo della Martingala per il calcolo del valore dei derivati richiede la determinazione di una misura di probabilità P∗ equivalente a P. P∗ rispetto a P deve descrivere un processo stocastico che identifica la dinamica del prezzo scontato del sottostante S∗, in maniera tale che soddisfi le condizioni: i. S∗_0 = S_0; ii. S∗_T = (1 + r)^(-T)S_T». Il docente: S∗_0 = S_0 «è abbastanza evidente non potendosi scontare nulla del tempo stando già al tempo zero»; S∗_T è il valore dell'attività rischiosa a T «scontato del valore finanziario del tempo 1 più r appunto per l'orizzonte temporale definito da t grande» (transcript [00:24:56]–[00:25:51]). ⚠️ L'esponente è -T: nella lezione 08, a un solo periodo, era S∗_T = (1+r)^(-1)S_T.
**Opzione:** Una misura P∗ equivalente a P, sotto cui il prezzo scontato del sottostante S∗ soddisfi S∗_0 = S_0 e S∗_T = (1 + r)^(-T)S_T.
**Distrattori:**
- Una misura P∗ equivalente a P, sotto cui il prezzo scontato del sottostante S∗ soddisfi S∗_0 = S_0 e S∗_T = (1 + r)^(-1)S_T.
- Il valore S_ud, lo stesso che assume quando S_d va verso l'alto: l'ordine dei due movimenti non conta.
- C_{T-2} = (1/r̂²)[p∗²(S_{T-2}u² - K)^+ + 2p∗(1 - p∗)(S_{T-2}ud - K)^+ + (1 - p∗)²(S_{T-2}d² - K)^+]

**D:** ⚠️ Quando S∗ è una P∗-martingala nel modello di Cox-Ross-Rubinstein?
**R:** Slide 46: «S∗ è definita come una P∗-Martingala, quando vale anche l'equivalenza seguente: S∗_t = E_{P∗}(S∗_{t+1} | ℑ^S_t) ∀t ≤ T - 1». Il docente: «il mio valore atteso condizionato all'informazione presente al tempo t piccolo genera che il processo scontato sia proprio uguale al valore del processo scontato al tempo t piccolo», «per ogni t piccolo minore uguale di t grande meno 1» (transcript [00:25:51]–[00:26:41]). ⚠️ A sinistra il valore di oggi, dentro il valore atteso condizionato quello del periodo dopo; nella lezione 08, a un periodo, la condizione era S∗_0 = E_{P∗}(S∗_T).
**Opzione:** S∗_t = E_{P∗}(S∗_{t+1} | ℑ^S_t) ∀t ≤ T - 1
**Distrattori:**
- S∗_{t+1} = E_{P∗}(S∗_t | ℑ^S_t) ∀t ≤ T - 1
- α_{T-2} = (C^u_{T-1} - C^d_{T-1})/(S_{T-2}(u - d)) e β_{T-2} = (uC^d_{T-1} - dC^u_{T-1})/(r̂(u - d))
- Y_t = lnX_t

**D:** ⚠️ Nello sviluppo della condizione di martingala del modello di Cox-Ross-Rubinstein, perché r̂^(-(t+1)) e S_t escono dal valore atteso?
**R:** Slide 47: «r̂^(-t)S_t = E_{P∗}(r̂^(-(t+1))ξ_{t+1}S_t | ℑ^S_t)»; «poichè r̂^(-(t+1)) è una costante: r̂^(-t)S_t = r̂^(-(t+1))E_{P∗}(ξ_{t+1}S_t | ℑ^S_t)». Slide 48: «scrivendo esplicitamente la σ-algebra» si condiziona a S_0, S_1, ...., S_t, e «poichè S_t è adattato a S_0, S_1, ...., S_t: r̂^(-t)S_t = r̂^(-(t+1))S_t E_{P∗}(ξ_{t+1} | S_0, S_1, ...., S_t)». Slide 49: «semplificando: r̂ = E_{P∗}(ξ_{t+1} | S_0, S_1, ...., S_t)». Il docente: la σ-algebra «non è altro che S0, S1 fino a S di t piccolo», e S_t è adattato «perché contiene lo stesso set informativo» (transcript [00:26:41]–[00:28:16]). ⚠️ S_t esce perché è adattato; l'indipendenza riguarda ξ_{t+1} (slide 50).
**Opzione:** r̂^(-(t+1)) perché è una costante; S_t perché è adattato a S_0, S_1, ...., S_t, cioè alla σ-algebra ℑ^S_t scritta esplicitamente.
**Distrattori:**
- r̂^(-(t+1)) perché è una costante; S_t perché è indipendente da S_0, S_1, ...., S_t, cioè dalla σ-algebra ℑ^S_t scritta esplicitamente.
- Che risolvendo r̂ = up∗ + (1 - p∗)d si ritrovano le stesse (9) e (10): p∗ e 1 - p∗ sono le probabilità della misura di martingala.
- Il pricing delle opzioni in uno schema multiperiodale: generalizza il modello di Sharpe-Rendleman-Bartter, che è uniperiodale.

**D:** ⚠️ Perché nel modello di Cox-Ross-Rubinstein r̂ = E_{P∗}(ξ_{t+1}), e quanto vale?
**R:** Slide 50: «Ma ξ_{t+1} è per ipotesi indipendente da S_0, S_1, ...., S_t e dunque: r̂ = E_{P∗}(ξ_{t+1})»; slide 51: «date le caratteristiche distributive di ξ_{t+1} si ottiene: r̂ = up∗ + (1 - p∗)d». Il docente: ξ_{t+1} «è identicamente indipendentemente distribuito da S0 S1 S t piccolo», e il suo valore atteso «non è altro che up per la probabilità di P star più» 1 meno P star «per down» (transcript [00:28:16]–[00:28:44]; il transcript scrive «più o meno»). ⚠️ Per ipotesi: le ξ_t sono i.i.d. (slide 3). Sotto P∗ il valore atteso di ξ è il fattore di capitalizzazione r̂.
**Opzione:** Perché ξ_{t+1} è per ipotesi indipendente da S_0, S_1, ...., S_t; e date le caratteristiche distributive di ξ_{t+1}, r̂ = up∗ + (1 - p∗)d.
**Distrattori:**
- Perché ξ_{t+1} è adattato a S_0, S_1, ...., S_t; e date le caratteristiche distributive di ξ_{t+1}, r̂ = up∗ + (1 - p∗)d.
- C∗_{T-m} = E_{P∗}(r̂^(-m)(S_T - K)^+ | ℑ^S_{T-m}), ∀m ≤ T: il prezzo del derivato è il valore scontato atteso sotto la misura di martingala, identico al prezzo del metodo di replicazione (30).
- C_{T-2} = (1/r̂²)[p∗²(S_{T-2}u² - K)^+ + 2p∗(1 - p∗)(S_{T-2}ud - K)^+ + (1 - p∗)²(S_{T-2}d² - K)^+]

**D:** ⚠️ Che cosa afferma la Proposizione della slide 53, che il docente chiama «teorema fondamentale dell'asset pricing»?
**R:** Slide 53, «Proposizione»: «Il prezzo del derivato è calcolato come il valore scontato atteso sotto la misura di Martingala p∗, i.e.: C∗_{T-m} = E_{P∗}(r̂^(-m)(S_T - K)^+ | ℑ^S_{T-m}), ∀m ≤ T (31) ed è identico al prezzo determinato utilizzando il metodo di replicazione di portafoglio come specificato dalla (30).» Il docente: «proposizione importantissima, il teorema fondamentale dell'asset pricing»; il prezzo del derivato C∗_{T-m} è «il valore atteso scontato sotto la misura» P∗ «del valore intrinseco condizionato alla filtrazione di riferimento» (transcript [00:29:07]–[00:29:52]; il transcript scrive «misura di gravità»). Il nome è solo nel transcript. ⚠️ Si sconta di m periodi, r̂^(-m). La slide 57 chiude la dimostrazione: il risultato, «ad eccezione della definizione di a», coincide con la (30).
**Opzione:** C∗_{T-m} = E_{P∗}(r̂^(-m)(S_T - K)^+ | ℑ^S_{T-m}), ∀m ≤ T: il prezzo del derivato è il valore scontato atteso sotto la misura di martingala, identico al prezzo del metodo di replicazione (30).
**Distrattori:**
- C∗_{T-m} = E_{P∗}(r̂^(-1)(S_T - K)^+ | ℑ^S_{T-m}), ∀m ≤ T: il prezzo del derivato è il valore scontato atteso sotto la misura di martingala, identico al prezzo del metodo di replicazione (30).
- α_{T-2} = (C^u_{T-1} - C^d_{T-1})/(S_{T-2}(u - d)) e β_{T-2} = (uC^d_{T-1} - dC^u_{T-1})/(r̂(u - d))
- Perché ξ_T assume soltanto i valori u e d: V^u_T(φ) = α_{T-1}uS_{T-1} + r̂β_{T-1} = (S_{T-1}u - K)^+ se ξ_T = u e V^d_T(φ) = α_{T-1}dS_{T-1} + r̂β_{T-1} = (S_{T-1}d - K)^+ se ξ_T = d.

**D:** Quali proprietà delle ξ usa la dimostrazione della Proposizione della slide 53 per arrivare alla somma binomiale?
**R:** Slide 53–54: con la definizione del processo S, C∗_{T-m} = E_{P∗}(r̂^(-m)(S_{T-m}ξ_{T-m+1}ξ_{T-m+2}.....ξ_T - K)^+ | ℑ^S_{T-m}), e «r̂^(-m) è una costante». Slide 55: «S_{T-m} è adattato a ℑ^S_{T-m} e ξ_{T-m+1}ξ_{T-m+2}.....ξ_T sono indipendenti da ℑ^S_{T-m}». Slide 56: «Considerando che ξ_{T-m+1}, ξ_{T-m+2}, ..., ξ_T sono variabili casuali i.i.d.tali che: 1. E(ξ_t) = up∗ + (1 - p∗)d 2. E(ξ_0ξ_1ξ_2....ξ_t) = E(ξ_0)E(ξ_1)E(ξ_2).....E(ξ_t) si ottiene: = r̂^(-m) ∑_{j=0}^{m} (m su j) p∗^j (1 - p∗)^(m-j) (u^j d^(m-j) S_{T-m} - K)^+». Il docente: «il valore atteso delle variabili identicamente, indipendentemente distribuite non è altro che il prodotto dei valori attesi» (transcript [00:30:05]–[00:31:16]). ⚠️ Il prodotto, non la somma, dei valori attesi.
**Opzione:** Che sono i.i.d., con E(ξ_t) = up∗ + (1 - p∗)d, e che il valore atteso del loro prodotto è il prodotto dei valori attesi: E(ξ_0ξ_1ξ_2....ξ_t) = E(ξ_0)E(ξ_1)E(ξ_2).....E(ξ_t).
**Distrattori:**
- Che sono i.i.d., con E(ξ_t) = up∗ + (1 - p∗)d, e che il valore atteso del loro prodotto è la somma dei valori attesi: E(ξ_0ξ_1ξ_2....ξ_t) = E(ξ_0) + E(ξ_1) + E(ξ_2) + ..... + E(ξ_t).
- lnX_t/X_{t-dt}~N[(a-b²/2)dt,bdt^(1/2))]
- Posizione lunga: Δ azioni; posizione corta: 1 opzione Call.

**D:** ⚠️ Come si scrive S_T in funzione di S_{T-m} nella dimostrazione della Proposizione della slide 53?
**R:** Slide 53: «Data l'espressione (31) ed utilizzando la definizione del processo S si ottiene: C∗_{T-m} = E_{P∗}(r̂^(-m)(S_{T-m}ξ_{T-m+1}ξ_{T-m+2}.....ξ_T - K)^+ | ℑ^S_{T-m})», cioè S_T = S_{T-m}ξ_{T-m+1}ξ_{T-m+2}.....ξ_T. Il docente: S_T si rimpiazza con S_{T-m} «per XT meno M più 1 per XT meno M più 2 fino ad arrivare a XT grande» (transcript [00:30:11]). ⚠️ I fattori partono da ξ_{T-m+1}: con m = 1 resta S_T = S_{T-1}ξ_T (slide 9), con m = T si ritrova S_T = S_0 ∏_{j=1}^{T} ξ_j (slide 4); il calcolo non è nelle slide. Il distrattore S_T=S_{T-1}ξ_1ξ_2ξ_T della domanda 2 del test mescola le due forme.
**Opzione:** S_T = S_{T-m}ξ_{T-m+1}ξ_{T-m+2}.....ξ_T
**Distrattori:**
- S_T = S_{T-m}ξ_1ξ_2.....ξ_T
- Posizione lunga: Δ azioni; posizione corta: 1 opzione Call.
- Che sono i.i.d., con E(ξ_t) = up∗ + (1 - p∗)d, e che il valore atteso del loro prodotto è il prodotto dei valori attesi: E(ξ_0ξ_1ξ_2....ξ_t) = E(ξ_0)E(ξ_1)E(ξ_2).....E(ξ_t).

**D:** ⚠️ Qual è il valore al tempo T del portafoglio di replicazione dell'opzione call nel modello di Cox-Ross-Rubinstein, secondo il test della lezione 09 (domanda 1)?
**R:** «**V_T(θ)=α_{T-1}S_T+B_{T-1}r=C_T=(S_T-K)^+**». È la (7) della slide 8, V_T(φ) = α_{T-1}S_T + β_{T-1}r̂ = C_T = (S_T - K)^+, con θ al posto di φ, B al posto di β e r al posto di r̂ = 1 + r. Il docente: la quantità di sottostante decisa a T - 1 per S_T più l'attività priva di rischio «capitalizzato per il fattore R» (transcript [00:05:34]–[00:06:23]). Distrattori del test: «V_T(θ)=α_{T-1}S_T+B_{T-1}=C_T=(S_T-K)^+» toglie la capitalizzazione r, che a T è dovuta (senza r è la forma della (8), al tempo T - 1); «V_T(θ)=α_{T-1}S_T=C_T=(S_T-K)^+» toglie del tutto la liquidità; «è un valore atteso scontato del pay-off del derivato» è la Proposizione della slide 53, che riguarda il prezzo C∗_{T-m} prima della scadenza, non il valore a T del portafoglio, che è il pay-off stesso. Con m = 0 la (31) darebbe banalmente C∗_T = (S_T - K)^+, ma la formula generale vale per m = 1, ....., T (slide 40).
**Opzione:** V_T(θ)=α_{T-1}S_T+B_{T-1}r=C_T=(S_T-K)^+
**Distrattori:**
- è un valore atteso scontato del pay-off del derivato
- V_T(θ)=α_{T-1}S_T+B_{T-1}=C_T=(S_T-K)^+
- V_T(θ)=α_{T-1}S_T=C_T=(S_T-K)^+

**D:** ⚠️ Qual è il valore al tempo T di S nel modello di Cox-Ross-Rubinstein, secondo il test della lezione 09 (domanda 2)?
**R:** «**S_T=S_{T-1}ξ_T**». Slide 9: «Poichè S_T = S_{T-1}ξ_T l'espressione (7) può essere scritta come…»; è la ii della slide 3, S_{t+1} = S_tξ_{t+1}, con t = T - 1. Il docente: S_T «che sappiamo essere uguale alla st meno 1 per xi di t» (transcript [00:06:27]). Distrattori del test: «S_T=S_{T-1}» toglie ξ_T, come se il prezzo non si muovesse; «S_T=S_{T-1}ξ_1ξ_2ξ_T» mescola la ricorsione con la produttoria S_t = S_0 ∏_{j=1}^{t} ξ_j (slide 4): da S_{T-1} serve il solo ξ_T, mentre i fattori da ξ_1 a ξ_T partono da S_0; «V_T(θ)=S_T+B_{T-1}» non parla di S ma del portafoglio, ed è un distrattore anche delle domande 3 e 4.
**Opzione:** S_T=S_{T-1}ξ_T
**Distrattori:**
- S_T=S_{T-1}
- V_T(θ)=S_T+B_{T-1}
- S_T=S_{T-1}ξ_1ξ_2ξ_T

**D:** ⚠️ Che cosa vale al tempo (T-1) nel modello di Cox-Ross-Rubinstein, secondo il test della lezione 09 (domanda 3)?
**R:** «**α_{T-1}=[(S_{T-1}u-K)^+-(S_{T-1}d-K)^+]/[S_{T-1}(u-d)]**», alla lettera la prima soluzione della slide 11. ⚠️ La domanda 4 ha lo stesso testo e gli stessi tre distrattori, ma per chiave β_{T-1}, l'altra metà della soluzione: vanno studiate insieme. α_{T-1} ha al numeratore la differenza dei due pay-off e al denominatore S_{T-1}(u-d); β_{T-1} ha i pay-off incrociati con u e d e al denominatore r̂(u-d). Distrattori del test: «V_T(θ)=α_{T-1}S_T+B_{T-1}=C_T=(S_T-K)^+» è la (7) senza la capitalizzazione r, ed è una relazione al tempo T; «V_T(θ)=S_T+B_{T-1}» perde anche α_{T-1}; «S_T=S_{T-1}ξ_1ξ_2ξ_T» mescola ricorsione e produttoria (domanda 2). Nessuno dei tre è una relazione al tempo T - 1.
**Opzione:** α_{T-1}=[(S_{T-1}u-K)^+-(S_{T-1}d-K)^+]/[S_{T-1}(u-d)]
**Distrattori:**
- V_T(θ)=α_{T-1}S_T+B_{T-1}=C_T=(S_T-K)^+
- V_T(θ)=S_T+B_{T-1}
- S_T=S_{T-1}ξ_1ξ_2ξ_T

**D:** ⚠️ Che cosa vale al tempo (T-1) nel modello di Cox-Ross-Rubinstein, secondo il test della lezione 09 (domanda 4)?
**R:** «**β_{T-1}=[u(S_{T-1}d-K)^+-d(S_{T-1}u-K)^+]/[r(u-d)]**». Slide 11: β_{T-1} = [u(S_{T-1}d-K)^+ - d(uS_{T-1}-K)^+]/[r̂(u-d)]; la piattaforma scrive S_{T-1}u per uS_{T-1}, lo stesso prodotto, e r per r̂ = 1 + r. ⚠️ La domanda 3 ha lo stesso testo e gli stessi tre distrattori, ma per chiave α_{T-1}, l'altra metà della soluzione: vanno studiate insieme. ⚠️ Nel numeratore di β_{T-1} u moltiplica il pay-off down e d quello up; al denominatore r̂(u-d), non S_{T-1}(u-d). Distrattori del test: la (7) senza la capitalizzazione r, «V_T(θ)=S_T+B_{T-1}» e «S_T=S_{T-1}ξ_1ξ_2ξ_T», come nella domanda 3: nessuno è una relazione al tempo T - 1.
**Opzione:** β_{T-1}=[u(S_{T-1}d-K)^+-d(S_{T-1}u-K)^+]/[r(u-d)]
**Distrattori:**
- V_T(θ)=α_{T-1}S_T+B_{T-1}=C_T=(S_T-K)^+
- V_T(θ)=S_T+B_{T-1}
- S_T=S_{T-1}ξ_1ξ_2ξ_T

**D:** ⚠️ Qual è il valore della misura di probabilità p∗ nel modello di Cox-Ross-Rubinstein, secondo il test della lezione 09 (domanda 5)?
**R:** «**p∗=(r-d)/(u-d)**». È la (9) della slide 14, ripetuta nella slide 52: p∗ = (r̂ - d)/(u - d), con r al posto di r̂ = 1 + r, il fattore di capitalizzazione lordo e non il tasso. Il docente: «definiamo P star come R cappello meno D su U meno D» (transcript [00:09:18]). Distrattori del test: cambiano solo l'operatore fra (r-d) e (u-d), con il meno, il prodotto e il più al posto del rapporto. Con l'ipotesi d < r̂ < u della slide 3 il rapporto sta fra 0 e 1, mentre (r-d)-(u-d) = r - u è sempre negativo: è una deduzione dalle formule, non è scritta nelle slide.
**Opzione:** p∗=(r-d)/(u-d)
**Distrattori:**
- p∗=(r-d)-(u-d)
- p∗=(r-d)(u-d)
- p∗=(r-d)+(u-d)

## Lezione 10 — Pricing 3 - Modello Binomiale

**D:** ⚠️ Quali variabili definisce la slide 2 della lezione 10, «Definizione delle variabili», per il pricing dell'opzione con il modello binomiale?
**R:** Slide 2: «x= (1+r)^(-Δt)», il fattore di sconto (la slide stampa «D t»); «K= strike»; «u=f(s, Δt)»; «d=1/u»; «p=[(1+r)-d]/(u-d)»; «q=1-p». Il docente: «il fattore di sconto che definiamo x, 1 più r quindi alla meno delta t», poi lo strike e «l'up e il down, dove la differenza tra l'up e il down è che il down è uguale ad 1 su u», infine le probabilità, «dove la probabilità di salire è 1 più r meno d diviso u meno d, mentre l'altra probabilità non è altro che 1 meno p» (transcript [00:00:40]–[00:01:28]). ⚠️ d è 1 **su** u, non 1 meno u. La slide 2 non dà la formula di u: la dà il foglio Excel, =EXP(sigma∗RADQ(deltat)) (slide 17). Che la s di f(s, Δt) sia σ è una deduzione.
**Opzione:** x=(1+r)^(-Δt); K=strike; u=f(s, Δt); d=1/u; p=[(1+r)-d]/(u-d); q=1-p
**Distrattori:**
- x=(1+r)^(-Δt); K=strike; u=f(s, Δt); d=1-u; p=[(1+r)-d]/(u-d); q=1-p
- Sottostante al tempo 0: 50; strike K: 50; scadenza T: 1 anno; tasso r: 5% annuo; volatilità σ: 30% annua; passi discreti: 20.
- deltat è la cella C5, rate la E4, sigma la E5, u la E1 e d la E2.

**D:** ⚠️ Che cosa contiene la colonna A della rappresentazione tabellare del modello binomiale (slide 3, «Il valore del sottostante alla scadenza»)?
**R:** Slide 3: sotto «T» e «S_T», nelle righe 1, 2, 3, …, 2n, 2n+1, u^n S_0, u^(n-1) S_0, u^(n-2) S_0, …….., d^(n-1) S_0, d^n S_0. Il docente: il valore del sottostante alla scadenza «parte dal valore s con 0» e, a seconda dell'ultimo stadio raggiunto, «andrà per n volte verso l'alto e quindi avremo u elevato alla n per s con 0», poi «u alla n meno 1 s con 0», e verso il basso «lo stesso ragionamento» fino alle righe «2n, 2n più 1» (transcript [00:01:45]–[00:02:27]). ⚠️ La n è un esponente, e la riga 1 ha il valore più alto. Per il docente è «l'ultima colonna», che «in realtà qui è la prima» ([00:01:28]): nel foglio Excel il sottostante a scadenza sta nell'ultima colonna, la W (slide 19).
**Opzione:** u^n S_0, u^(n-1) S_0, u^(n-2) S_0, …, d^(n-1) S_0, d^n S_0, dalla riga 1 alla riga 2n+1
**Distrattori:**
- d^n S_0, d^(n-1) S_0, d^(n-2) S_0, …, u^(n-1) S_0, u^n S_0, dalla riga 1 alla riga 2n+1
- MAX(A1-K,0), MAX(A2-K,0), MAX(A3-K,0), …, MAX(A2n-K,0), MAX(A2n+1-K,0)
- S_0 = 100, K = 100, r = 3%, σ = 20%, T = 1, steps = 4, Δt = 0.25; x = 0.9925, u = 1.1052, d = 0.9048, p = 0.5126, q = 0.4874

**D:** ⚠️ Che cosa contiene la colonna B della rappresentazione tabellare nel caso della call (slide 4, «Pay off della Call alla scadenza»)?
**R:** Slide 4: sotto «T», MAX(A1-K,0), MAX(A2-K,0), MAX(A3-K,0), …………, MAX(A2n-K,0), MAX(A2n+1-K,0), una formula per ogni riga della colonna A. Il docente: «L'opzione alla scadenza vale esattamente il suo valore intrinseco», cioè «il massimo tra il valore del sottostante, che in questa rappresentazione a matrice vediamo essere A1, A2, A3, che sono le varie celle di questa tabella, meno il valore fisso del prezzo strike K e 0» (transcript [00:03:01]–[00:03:29]). ⚠️ Per la call è A meno K; K meno A è la put (slide 8). Gli estremi, MAX(A1-K,0) e MAX(A2n+1-K,0), sono la chiave della domanda 2 del test.
**Opzione:** MAX(A1-K,0), MAX(A2-K,0), MAX(A3-K,0), …, MAX(A2n-K,0), MAX(A2n+1-K,0)
**Distrattori:**
- MAX(K -A1,0), MAX(K -A2,0), MAX(K -A3,0), …, MAX(K -A2n,0), MAX(K -A2n+1,0)
- u^n S_0, u^(n-1) S_0, u^(n-2) S_0, …, d^(n-1) S_0, d^n S_0, dalla riga 1 alla riga 2n+1
- =(p∗V8+q∗V10)∗discount nella cella U9: si sconta la media ponderata delle due celle del passo 20.

**D:** ⚠️ Quali formule contiene la colonna C, «T- Δ T», della rappresentazione tabellare del modello binomiale (slide 5, «Il prezzo come pay off atteso scontato»)?
**R:** Slide 5: x∗(p∗B1+q∗B2) nella riga 1, x∗(p∗B1+q∗B3) nella riga 2, x∗(p∗B2+q∗B4) nella riga 3, …, x∗(p∗B2n-1+q∗B2n+1) nella riga 2n, x∗(p∗B2n+q∗B2n+1) nella riga 2n+1. Il docente: si torna «indietro di un delta di t» richiamando il fattore di sconto x e le probabilità, per trovare per ogni stato «il valore intrinseco attualizzato di un tempo e quindi ponderato per il relativo spazio di probabilità» (transcript [00:04:03]–[00:04:38]). ⚠️ Nelle righe interne la cella usa la riga di sopra e quella di sotto, non quella adiacente: la riga 2 usa B1 e B3, la riga 3 B2 e B4. Le stesse formule valgono per la put (slide 9).
**Opzione:** x∗(p∗B1+q∗B2), x∗(p∗B1+q∗B3), x∗(p∗B2+q∗B4), …, x∗(p∗B2n-1+q∗B2n+1), x∗(p∗B2n+q∗B2n+1)
**Distrattori:**
- x∗(p∗B1+q∗B2), x∗(p∗B2+q∗B3), x∗(p∗B3+q∗B4), …, x∗(p∗B2n-1+q∗B2n), x∗(p∗B2n+q∗B2n+1)
- u^n S_0, u^(n-1) S_0, u^(n-2) S_0, …, d^(n-1) S_0, d^n S_0, dalla riga 1 alla riga 2n+1
- =EXP(deltat∗-rate): il fattore di sconto si calcola in tempo continuo.

**D:** Quali formule contiene la colonna D, «T- 2Δ T», della rappresentazione tabellare del modello binomiale (slide 6)?
**R:** Slide 6, «Implementazione del prezzo»: x∗(p∗C1+q∗C2), x∗(p∗C1+q∗C3), x∗(p∗C2+q∗C4), …, x∗(p∗C2n-1+q∗C2n+1), x∗(p∗C2n+q∗C2n+1), cioè le formule della colonna C applicate alle celle della colonna C. Il docente: l'implementazione «non potrà che regredire ancora indietro di un altro delta T», alla scadenza «T grande meno due volte delta T», dove «ancora una volta avremo il nostro fattore di sconto» e la media ponderata (transcript [00:04:50]). ⚠️ p pesa sempre la riga di sopra, q quella di sotto. La slide 7 ripete la tabella con le variabili in testa.
**Opzione:** x∗(p∗C1+q∗C2), x∗(p∗C1+q∗C3), x∗(p∗C2+q∗C4), …, x∗(p∗C2n-1+q∗C2n+1), x∗(p∗C2n+q∗C2n+1)
**Distrattori:**
- x∗(q∗C1+p∗C2), x∗(q∗C1+p∗C3), x∗(q∗C2+p∗C4), …, x∗(q∗C2n-1+p∗C2n+1), x∗(q∗C2n+p∗C2n+1)
- MAX(A1-K,0), MAX(A2-K,0), MAX(A3-K,0), …, MAX(A2n-K,0), MAX(A2n+1-K,0)
- u = EXP(sigma∗RADQ(deltat)) = 1,069 e d = 1/u = 0,935

**D:** ⚠️ Che cosa si sta facendo, secondo il docente della lezione 10, quando si torna indietro di un Δt nell'albero binomiale?
**R:** «Stiamo portando indietro nel tempo il valore intrinseco realizzando per quel valore finanziario del tempo la doverosa ponderazione probabilistica» (transcript [00:05:15]). Prima: si richiama «il fattore di sconto x» e, con le probabilità, si determina per ogni stato al tempo T «il valore intrinseco attualizzato di un tempo e quindi ponderato per il relativo spazio di probabilità» ([00:04:09]–[00:04:38]). Le slide 5–7 lo chiamano «Il prezzo come pay off atteso scontato», x∗(p∗B1+q∗B2)… ⚠️ Si va all'indietro e si sconta: x=(1+r)^(-Δt) (slide 2).
**Opzione:** Si porta indietro nel tempo il valore intrinseco: lo si sconta con il fattore x e lo si pondera con le probabilità p e q.
**Distrattori:**
- Si porta avanti nel tempo il prezzo di oggi: lo si capitalizza con il fattore x e lo si pondera con le probabilità p e q.
- Un anno diviso in una grandezza inferiore al mese: con 12 passi sarebbe un mese, con 20 si discretizzano più o meno i 365 giorni.
- Il valore finanziario del tempo e il tenore della volatilità.

**D:** ⚠️ Che cosa contiene la colonna B della rappresentazione tabellare nel caso della put (slide 8, «Pay Off della PUT a scadenza»)?
**R:** Slide 8: MAX(K -A1,0), MAX(K -A2,0), MAX(K -A3,0), …………, MAX(K -A2n,0), MAX(K -A2n+1,0). Il docente: per la put «La differenza in sostanza sarà nella definizione della funzione del valore intrinseco cioè del massimo di k meno il valore del sottostante» (transcript [00:07:05]). ⚠️ Per la put è K meno A; A meno K è la call (slide 4). Gli estremi, MAX(K -A1,0) e MAX(K -A2n+1,0), sono la chiave della domanda 3 del test; il valore più alto sta nell'ultima riga, quella di d^n S_0.
**Opzione:** MAX(K -A1,0), MAX(K -A2,0), MAX(K -A3,0), …, MAX(K -A2n,0), MAX(K -A2n+1,0)
**Distrattori:**
- MAX(A1-K,0), MAX(A2-K,0), MAX(A3-K,0), …, MAX(A2n-K,0), MAX(A2n+1-K,0)
- x∗(p∗B1+q∗B2), x∗(p∗B1+q∗B3), x∗(p∗B2+q∗B4), …, x∗(p∗B2n-1+q∗B2n+1), x∗(p∗B2n+q∗B2n+1)
- Nella colonna W: S = 50,00 nella riga 28, u^(20)∗S = 191,27 nella riga 8 e d^(20)∗S = 13,07 nella riga 48.

**D:** ⚠️ Che cosa cambia nella rappresentazione tabellare del modello binomiale quando si passa dalla call alla put?
**R:** Solo il pay off a scadenza della colonna B: MAX(K -A1,0) … MAX(K -A2n+1,0) per la put (slide 8) invece di MAX(A1-K,0) … MAX(A2n+1-K,0) per la call (slide 4). Le colonne C e D delle slide 9–11 sono identiche a quelle delle slide 5–7, x∗(p∗B1+q∗B2), x∗(p∗B1+q∗B3)…, e la slide 11 ripete le stesse variabili. Il docente: «La differenza in sostanza sarà nella definizione della funzione del valore intrinseco» (transcript [00:07:05]); per il resto, «come abbiamo fatto nel caso della call», si portano «indietro di un delta t i valori intrinseci» ([00:07:39]). Nel foglio Excel: «non metteremo S-K ma metteremo K-S» ([00:28:29]). ⚠️ p e q non si scambiano.
**Opzione:** Solo il pay off a scadenza, MAX(K -A1,0)… invece di MAX(A1-K,0)…: variabili e formule all'indietro restano le stesse.
**Distrattori:**
- Il pay off a scadenza, MAX(K -A1,0)… invece di MAX(A1-K,0)…, e le formule all'indietro, dove p e q si scambiano di posto.
- Il valore finanziario del tempo e il tenore della volatilità.
- =MAX(W8-k;0) nella colonna V, trascinata a coppie di celle: il valore intrinseco compare una riga sì e una no.

**D:** ⚠️ Con quali parametri e quali valori è costruito l'esempio numerico a 4 passi della slide 12 della lezione 10?
**R:** Slide 12: «S0= 100», «r= 3%», «σ= 20%», «T= 1»; «x= 0.9925», «u= 1.1052», «p= 0.5126», «steps= 4»; «K= 100», «d= 0.9048», «q= 0.4874», «Δt= 0.25». Il docente: x, con il tasso del 3%, fa sì che «un delta T sconti 100 fino a farlo diventare 99,25»; verso l'alto 100 si incrementa «del fattore 1,1052» e verso il basso «di 0,9048»; la volatilità è il 20%; i 4 passi dividono l'orizzonte di un anno, con «una quantificazione 0,25» (transcript [00:11:05]–[00:13:21]). ⚠️ p, la probabilità di salire, è la maggiore delle due. x e p tornano con lo sconto continuo, e^(-0,03·0,25) ≈ 0,9925 (il calcolo non è nelle slide).
**Opzione:** S_0 = 100, K = 100, r = 3%, σ = 20%, T = 1, steps = 4, Δt = 0.25; x = 0.9925, u = 1.1052, d = 0.9048, p = 0.5126, q = 0.4874
**Distrattori:**
- S_0 = 100, K = 100, r = 3%, σ = 20%, T = 1, steps = 4, Δt = 0.25; x = 0.9925, u = 1.1052, d = 0.9048, p = 0.4874, q = 0.5126
- Sottostante al tempo 0: 50; strike K: 50; scadenza T: 1 anno; tasso r: 5% annuo; volatilità σ: 30% annua; passi discreti: 20.

**D:** ⚠️ Quanto vale la call dell'esempio a 4 passi della slide 12, e in quale cella si legge?
**R:** 8.94, nella colonna T-4Δ t, alla riga di S_T = 100.00: è una delle celle bianche. Il docente: il prezzo della call si ottiene «tornando indietro di 4» Δt, perché ogni Δt «vale 0,25 del tempo 1» (transcript [00:09:55]); di tutto l'albero, «le celle di nostro interesse sono quelle denotate dal colore bianco» ([00:10:15]). Il transcript scrive «se quel stopto in 94»: vale la slide. ⚠️ Le altre celle della colonna T-4Δ t, come 33.01 nella prima riga, sono gialle: calcolate con la formula, ma fuori dall'albero.
**Opzione:** 8.94: la cella di T-4Δ t nella riga di S_T = 100.00, una delle celle bianche dell'albero.
**Distrattori:**
- 33.01: la cella di T-4Δ t nella prima riga, quella di S_T = 149.18, una delle celle bianche dell'albero.
- 7,042, nella cella B28: l'albero si completa a scalini, all'indietro dal passo 20 al passo 0.
- Nella riga 7 i time step da 0 a 20; nella colonna A i valori da 20 (riga 8) a -20 (riga 48), con lo 0 nella riga 28.

**D:** ⚠️ Da quali celle nasce il valore 11.26 della colonna T-Δ t nell'esempio della slide 12?
**R:** Dalle due celle bianche del passo T che stanno sopra e sotto: 22,14, il pay off nella riga di S_T = 122.14, e 0,00, quello nella riga di S_T = 100.00. Il docente: «questa quantità pondererà questa e questa, questa quantità di 11 e 26, il 22 e 14 e lo 0» (transcript [00:10:31]). Verifica: 0,9925 · (0,5126 · 22,14 + 0,4874 · 0) ≈ 11,26 (il calcolo non è nelle slide). ⚠️ Non nasce dalle celle adiacenti, 10,52 e 0,00: da quelle viene la cella gialla 5.35, fuori dall'albero.
**Opzione:** Da 22,14 e 0,00, i pay-off al tempo T nelle righe di S_T = 122.14 e 100.00, scontati con x e ponderati con p e q.
**Distrattori:**
- Da 10,52 e 0,00, i pay-off al tempo T nelle righe di S_T = 110.52 e 100.00, scontati con x e ponderati con p e q.
- 8.94: la cella di T-4Δ t nella riga di S_T = 100.00, una delle celle bianche dell'albero.
- =(p∗V8+q∗V10)∗discount nella cella U9: si sconta la media ponderata delle due celle del passo 20.

**D:** ⚠️ Quali parametri si fissano per implementare il modello di Cox-Ross-Rubinstein su un foglio di calcolo per una call europea (slide 13)?
**R:** Slide 13: «il prezzo del sottostante al tempo 0; quì 50», «Il prezzo strike K dell'opzione, quì 50», «la scadenza T; quì 1 anno», «il tasso di interesse r; quì 5% annuo», «la volatilità σ; quì 30% annua», «il numero di passi discreti del modello; quì 20». Il docente: «50 euro, 50 dollari», «il tasso di interesse che definiamo R viene definito pari al 5%, la volatilità sigma è definita pari al 30%», e 20 passi discreti (transcript [00:14:12]–[00:14:43]). La put europea usa gli stessi parametri (slide 23; [00:26:07]). ⚠️ Il 5% è il tasso, il 30% la volatilità.
**Opzione:** Sottostante al tempo 0: 50; strike K: 50; scadenza T: 1 anno; tasso r: 5% annuo; volatilità σ: 30% annua; passi discreti: 20.
**Distrattori:**
- Sottostante al tempo 0: 50; strike K: 50; scadenza T: 1 anno; tasso r: 30% annuo; volatilità σ: 5% annua; passi discreti: 20.
- S_0 = 100, K = 100, r = 3%, σ = 20%, T = 1, steps = 4, Δt = 0.25; x = 0.9925, u = 1.1052, d = 0.9048, p = 0.5126, q = 0.4874
- deltat è la cella C5, rate la E4, sigma la E5, u la E1 e d la E2.

**D:** Che cosa vuol dire, secondo il docente della lezione 10, dividere l'anno in 20 passi discreti?
**R:** «Quindi stiamo sostanzialmente dicendo che un anno viene diviso in una grandezza inferiore al mese, perché altrimenti sarebbero 12 passi, invece 20 passi vuol dire che noi stiamo all'incirca definendo un modello che cerca di discretizzare i 365 giorni che caratterizzano l'anno più o meno su 20 passi discreti» (transcript [00:14:47]–[00:15:13]). Ne viene ΔT = 1/20 = 0,05 (slide 15–16). È solo nel transcript.
**Opzione:** Un anno diviso in una grandezza inferiore al mese: con 12 passi sarebbe un mese, con 20 si discretizzano più o meno i 365 giorni.
**Distrattori:**
- Un anno diviso in una grandezza superiore al mese: con 12 passi sarebbe un mese, con 20 si discretizzano più o meno i 365 giorni.
- Solo il pay off a scadenza, MAX(K -A1,0)… invece di MAX(A1-K,0)…: variabili e formule all'indietro restano le stesse.
- Si porta indietro nel tempo il valore intrinseco: lo si sconta con il fattore x e lo si pondera con le probabilità p e q.

**D:** ⚠️ Come si calcola ΔT nel foglio Excel del modello di Cox-Ross-Rubinstein, e quanto vale?
**R:** Slide 15, «L'intervallo temporale»: nella cella C5, =C6/C4, cioè la scadenza T (C6 = 1) diviso il numero di passi n (C4 = 20); la slide 16 mostra il risultato, 0,05. Il docente: «delta t è l'intervallo temporale, il cosiddetto time step, e viene calcolato semplicemente come c6 diviso c4» (transcript [00:15:49]). ⚠️ È T su n, non n su T.
**Opzione:** ΔT = C6/C4, cioè la scadenza T diviso il numero di passi n: 0,05.
**Distrattori:**
- ΔT = C4/C6, cioè il numero di passi n diviso la scadenza T: 20.
- =EXP(deltat∗-rate): il fattore di sconto si calcola in tempo continuo.
- p = (EXP(rate∗deltat)-d)/(u-d) = 0,502 e q = 1-p = 0,498

**D:** ⚠️ Come si calcola il fattore di sconto nel foglio Excel del modello di Cox-Ross-Rubinstein?
**R:** Slide 16, «Il fattore di sconto»: nella cella C1, discount= =EXP(deltat∗-rate); la slide 17 mostra il valore, 0,9975031. Il docente: «lo calcoliamo in tempo continuo, il fattore di sconto e quindi è l'esponenziale di delta T per meno il tasso di interesse» (transcript [00:16:06]); per la put lo ripete, «l'esponenziale di delta T per il tasso preso col meno davanti perché stiamo scontando» ([00:26:48]). ⚠️ Il meno davanti al tasso: si sconta. La slide 2 scriveva x=(1+r)^(-Δt), in tempo discreto.
**Opzione:** =EXP(deltat∗-rate): il fattore di sconto si calcola in tempo continuo.
**Distrattori:**
- =EXP(deltat∗rate): il fattore di sconto si calcola in tempo continuo.
- ΔT = C6/C4, cioè la scadenza T diviso il numero di passi n: 0,05.
- u = EXP(sigma∗RADQ(deltat)) = 1,069 e d = 1/u = 0,935

**D:** ⚠️ Come si calcolano u e d nel foglio Excel del modello di Cox-Ross-Rubinstein, e quanto valgono?
**R:** Slide 17, «I valori di u e d»: u =EXP(sigma∗RADQ(deltat)), 1,069, nella cella E1; d =1/u, 0,935, nella cella E2. Il docente: «l'evento up è pari a 1,069, l'evento down viene pari a 0,935»; «L'evento down è facilissimo, è 1 diviso up. L'evento up è l'esponenziale di... sigma per la radice quadrata, questa è la funzione di Excel, delta t» (transcript [00:17:10]–[00:17:28]). ⚠️ Sotto la radice c'è il passo temporale, e il tasso non compare. Nel foglio della put la slide 32 scrive SQRT al posto di RADQ.
**Opzione:** u = EXP(sigma∗RADQ(deltat)) = 1,069 e d = 1/u = 0,935
**Distrattori:**
- u = EXP(sigma∗deltat) = 1,069 e d = 1/u = 0,935
- Nella colonna W: S = 50,00 nella riga 28, u^(20)∗S = 191,27 nella riga 8 e d^(20)∗S = 13,07 nella riga 48.
- =MAX(k-W46;0): il valore intrinseco è positivo nella parte bassa del foglio e nullo nella parte alta.

**D:** ⚠️ Come si calcolano le probabilità p e q nel foglio Excel del modello di Cox-Ross-Rubinstein, e quanto valgono?
**R:** Slide 18, «Le probabilità di muoversi da sopra a sotto sull'albero binomiale»: p =(EXP(rate∗deltat)-d)/(u-d), 0,502, nella cella J1; q =1-p, 0,498, nella cella J2. Il docente: «la quantità P viene definita come l'esponenziale del tasso per delta T meno D, cioè l'evento down, diviso U meno D» (transcript [00:18:09]). ⚠️ Al numeratore c'è il fattore di capitalizzazione meno d, non u meno il fattore. La slide 2 scriveva p=[(1+r)-d]/(u-d).
**Opzione:** p = (EXP(rate∗deltat)-d)/(u-d) = 0,502 e q = 1-p = 0,498
**Distrattori:**
- p = (u-EXP(rate∗deltat))/(u-d) = 0,502 e q = 1-p = 0,498
- =MAX(W8-k;0) nella colonna V, trascinata a coppie di celle: il valore intrinseco compare una riga sì e una no.
- x∗(p∗C1+q∗C2), x∗(p∗C1+q∗C3), x∗(p∗C2+q∗C4), …, x∗(p∗C2n-1+q∗C2n+1), x∗(p∗C2n+q∗C2n+1)

**D:** Quali nomi di cella usano le formule del foglio Excel del modello di Cox-Ross-Rubinstein?
**R:** Il docente: si usa «una delle funzioni di Excel che ci consente di dare un nome alla cella. Quindi invece di scrivere c5 scriviamo delta t, invece di scrivere e4 scriviamo rate» (transcript [00:16:41]–[00:16:48]); poi «E5 sigma» ([00:17:28]), e «il rate è la cella E4, D è la cella E2 e up è la cella E1» ([00:18:22]). Nelle slide 16–18 le formule usano deltat, rate, sigma, u e d; la slide 21 anche p, q e discount, che è la cella C1 (slide 16).
**Opzione:** deltat è la cella C5, rate la E4, sigma la E5, u la E1 e d la E2.
**Distrattori:**
- deltat è la cella E4, rate la C5, sigma la E5, u la E1 e d la E2.
- Nella riga 7 i time step da 0 a 20; nella colonna A i valori da 20 (riga 8) a -20 (riga 48), con lo 0 nella riga 28.
- =MAX(k-W46;0): il valore intrinseco è positivo nella parte bassa del foglio e nullo nella parte alta.

**D:** ⚠️ Che valori assume il sottostante a scadenza nella colonna W del foglio Excel della call?
**R:** Slide 19, «I valori del sottostante S_T utilizzando le quantità u e d»: S = 50,00 nella riga 28; verso l'alto u^1∗S = 53,47, u²∗S = 57,18, …, u^(20)∗S = 191,27 nella riga 8; verso il basso d^1∗S = 46,76, d²∗S = 43,72, …, d^(20)∗S = 13,07 nella riga 48. Il docente: lungo la riga 28, nella colonna W, «il prezzo della nostra azione è esattamente 50» (transcript [00:20:00]), e si arriva «a 13,07 che è il valore di D alla 20 e a 191,27 che è il valore di U alla 20» ([00:20:54]). ⚠️ In alto u, in basso d.
**Opzione:** Nella colonna W: S = 50,00 nella riga 28, u^(20)∗S = 191,27 nella riga 8 e d^(20)∗S = 13,07 nella riga 48.
**Distrattori:**
- Nella colonna W: S = 50,00 nella riga 28, u^(20)∗S = 13,07 nella riga 8 e d^(20)∗S = 191,27 nella riga 48.
- Da 22,14 e 0,00, i pay-off al tempo T nelle righe di S_T = 122.14 e 100.00, scontati con x e ponderati con p e q.
- 4,604, nella cella B26 del foglio della put europea.

**D:** ⚠️ Come si calcola il pay off della call nel foglio Excel della lezione 10, e perché la formula si trascina a coppie di celle?
**R:** Slide 20, «La formula max(S_T - K,0) viene applicata»: nella colonna V, =MAX(W8-k;0), che dà 141,27, poi 117,25, 96,25, 77,89, 61,83…, una riga sì e una no. Il docente: il trascinamento «prende le prime due celle» della colonna V, così il valore intrinseco «non viene rappresentato dove non serve perché l'albero binomiale richiede una compilazione a coppie delle celle»; nel primo foglio stilizzato, invece, il prezzo era compilato «anche laddove ... non ha senso trovarlo» (transcript [00:21:35]–[00:22:37]). ⚠️ Nella tabella stilizzata delle slide 4 e 8 la formula è in tutte le righe.
**Opzione:** =MAX(W8-k;0) nella colonna V, trascinata a coppie di celle: il valore intrinseco compare una riga sì e una no.
**Distrattori:**
- =MAX(W8-k;0) nella colonna V, trascinata cella per cella: il valore intrinseco compare in tutte le righe.
- Si porta indietro nel tempo il valore intrinseco: lo si sconta con il fattore x e lo si pondera con le probabilità p e q.
- 8.94: la cella di T-4Δ t nella riga di S_T = 100.00, una delle celle bianche dell'albero.

**D:** ⚠️ Quale formula si scrive nella cella U9 del foglio Excel della call per completare l'albero con la procedura inversa?
**R:** Slide 21, «Una procedura inversa viene utilizzata per completare l'albero»: =(p∗V8+q∗V10)∗discount, che dà 128,98. Il docente: «la formula che ci vede P» per la cella V8 «più Q per la cella V10 per il fattore di sconto» (transcript [00:23:00]–[00:23:07]); la cella U8 non si calcola, e il trascinamento accoppia una cella con il calcolo e una vuota ([00:23:48]). ⚠️ Il docente dice che il fattore di sconto è «definito semplicemente da valore di C5»: nelle slide discount è la C1 (slide 16), e la C5 è ΔT. ⚠️ Si moltiplica per discount, cioè si sconta.
**Opzione:** =(p∗V8+q∗V10)∗discount nella cella U9: si sconta la media ponderata delle due celle del passo 20.
**Distrattori:**
- =(p∗V8+q∗V10)/discount nella cella U9: si capitalizza la media ponderata delle due celle del passo 20.
- 4,604, nella cella B26 del foglio della put europea.
- MAX(K -A1,0), MAX(K -A2,0), MAX(K -A3,0), …, MAX(K -A2n,0), MAX(K -A2n+1,0)

**D:** ⚠️ Quanto vale la call europea del foglio Excel della lezione 10, e in quale cella si legge?
**R:** Slide 22, «L'albero è completato per ottenere il prezzo della Call europea»: 7,042, nella cella B28, indicata da una freccia. Il docente: l'albero si completa «con questo schema dove in ogni time step noi non compiliamo la colonna corrispondente al time step precedente creando questa struttura a scalini», fino al prezzo «identificato nella colonna B28» (transcript [00:24:48]). I parametri sono S_0 = 50, K = 50, T = 1 anno, r = 5%, σ = 30%, 20 passi (slide 13). ⚠️ 4,604 è la put con gli stessi parametri (slide 32).
**Opzione:** 7,042, nella cella B28: l'albero si completa a scalini, all'indietro dal passo 20 al passo 0.
**Distrattori:**
- 4,604, nella cella B28: l'albero si completa a scalini, all'indietro dal passo 20 al passo 0.
- x∗(p∗B1+q∗B2), x∗(p∗B1+q∗B3), x∗(p∗B2+q∗B4), …, x∗(p∗B2n-1+q∗B2n+1), x∗(p∗B2n+q∗B2n+1)
- ΔT = C6/C4, cioè la scadenza T diviso il numero di passi n: 0,05.

**D:** ⚠️ Come si calcola il pay off della put nel foglio Excel della lezione 10, e dove è positivo?
**R:** Slide 30, «La formula max(K - S_T, 0) viene applicata»: la colonna V ha l'intestazione «S_T'=max(k-S_T,0)», e nella riga 46 =MAX(k-W46;0) dà 36,93; risalendo 35,05, 32,91, …, 6,28, poi 0,00 dalla riga 26 in su. Il docente: «non metteremo S-K ma metteremo K-S e quindi questa volta l'opzione avrà un valore positivo nella parte bassa del foglio di lavoro e valore zero, cioè valore intrinseco nullo, nella parte alta del foglio di lavoro» (transcript [00:28:29]). ⚠️ Per la call è il contrario: positiva in alto (slide 20).
**Opzione:** =MAX(k-W46;0): il valore intrinseco è positivo nella parte bassa del foglio e nullo nella parte alta.
**Distrattori:**
- =MAX(k-W46;0): il valore intrinseco è positivo nella parte alta del foglio e nullo nella parte bassa.
- x∗(p∗C1+q∗C2), x∗(p∗C1+q∗C3), x∗(p∗C2+q∗C4), …, x∗(p∗C2n-1+q∗C2n+1), x∗(p∗C2n+q∗C2n+1)
- p = (EXP(rate∗deltat)-d)/(u-d) = 0,502 e q = 1-p = 0,498

**D:** ⚠️ Quanto vale la put europea del foglio Excel della lezione 10, e in quale cella si legge?
**R:** Slide 32, «L'albero è completato per ottenere il prezzo della Put europea»: 4,604, nella cella B26, indicata da una freccia; la riga 4 del foglio lo riporta come «Value of the Euro_put». Il docente: si torna indietro «fino ad arrivare al prezzo della put che verrà pari in questo caso con questi parametri a 4,604» (transcript [00:29:54]). I parametri sono quelli della call (slide 23). ⚠️ Nel foglio della put la griglia va dalla riga 6 alla 46, quindi il prezzo sta in B26 e non in B28; 7,042 è la call.
**Opzione:** 4,604, nella cella B26 del foglio della put europea.
**Distrattori:**
- 7,042, nella cella B26 del foglio della put europea.
- Da 22,14 e 0,00, i pay-off al tempo T nelle righe di S_T = 122.14 e 100.00, scontati con x e ponderati con p e q.
- x=(1+r)^(-Δt); K=strike; u=f(s, Δt); d=1/u; p=[(1+r)-d]/(u-d); q=1-p

**D:** Come sono numerate la riga 7 e la colonna A nel foglio Excel della call della lezione 10?
**R:** Il docente: «abbiamo scritto nel foglio di lavoro i numeri nella riga 7 che vanno da 0 a 20», i time step; nella colonna A «dalla cella 28 verso la cella 8 da 0 a 20 e dalla cella 29 alla cella 40 da meno 1 a meno 20» (transcript [00:18:53]–[00:19:16]). Nella slide 19 la colonna A va da 20 nella riga 8 a 0 nella riga 28 e a -20 nella riga 48: vale la slide. ⚠️ La riga 28 è quella di S = 50,00 e del prezzo in B28.
**Opzione:** Nella riga 7 i time step da 0 a 20; nella colonna A i valori da 20 (riga 8) a -20 (riga 48), con lo 0 nella riga 28.
**Distrattori:**
- Nella riga 7 i time step da 0 a 20; nella colonna A i valori da 0 (riga 8) a 40 (riga 48), con il 20 nella riga 28.
- 7,042, nella cella B28: l'albero si completa a scalini, all'indietro dal passo 20 al passo 0.
- MAX(K -A1,0), MAX(K -A2,0), MAX(K -A3,0), …, MAX(K -A2n,0), MAX(K -A2n+1,0)

**D:** Che cosa incorporano le probabilità del modello binomiale, secondo il docente della lezione 10?
**R:** «Le probabilità sono definite come quello spazio, quella quantificazione degli eventi up and down che vanno a incorporare il valore finanziario del tempo e il tenore della volatilità» (transcript [00:12:40]). Nelle formule il tempo e il tasso entrano in p attraverso (1+r) (slide 2) o EXP(rate∗deltat) (slide 18), la volatilità attraverso u e d, con u =EXP(sigma∗RADQ(deltat)) (slide 17). È solo nel transcript.
**Opzione:** Il valore finanziario del tempo e il tenore della volatilità.
**Distrattori:**
- Il valore finanziario del tempo, ma non il tenore della volatilità.
- Un anno diviso in una grandezza inferiore al mese: con 12 passi sarebbe un mese, con 20 si discretizzano più o meno i 365 giorni.
- Solo il pay off a scadenza, MAX(K -A1,0)… invece di MAX(A1-K,0)…: variabili e formule all'indietro restano le stesse.

**D:** ⚠️ Da che cosa dipende u nel modello binomiale della lezione 10: dalla volatilità, dal tasso o da entrambi?
**R:** Per le slide, dalla volatilità e dal passo temporale: la slide 2 scrive «u=f(s, Δt)» e il foglio Excel u =EXP(sigma∗RADQ(deltat)) (slide 17). Il tasso non c'è: entra nel fattore di sconto, =EXP(deltat∗-rate) (slide 16), e in p, =(EXP(rate∗deltat)-d)/(u-d) (slide 18). Il docente invece dice che sigma, «unitamente al tasso», «quantifica sostanzialmente il valore degli eventi up and down» (transcript [00:12:20]). Vale la slide: le opzioni d'esame citano le slide, e nella domanda 4 del test la chiave è exp(σ . dt^(1/2)), senza tasso.

**D:** ⚠️ Fattore di sconto e probabilità: in che cosa differiscono le formule della slide 2 da quelle del foglio Excel della lezione 10?
**R:** La slide 2 scrive x=(1+r)^(-Δt) e p=[(1+r)-d]/(u-d); il foglio Excel scrive discount =EXP(deltat∗-rate) (slide 16) e p =(EXP(rate∗deltat)-d)/(u-d) (slide 18). Il docente legge la prima versione (transcript [00:00:40]–[00:01:03]) e spiega la seconda così: «lo calcoliamo in tempo continuo» ([00:16:06]). In entrambe il fattore sconta e p ha d al numeratore. I numeri della slide 12, x = 0.9925 e p = 0.5126, tornano con la versione continua: e^(-0,03·0,25) ≈ 0,9925, mentre 1,03^(-0,25) ≈ 0,9926 (il calcolo non è nelle slide).

**D:** ⚠️ Quali sono i valori estremi dell'albero alla scadenza T in un albero binomiale a n stati, secondo il test della lezione 10 (domanda 1)?
**R:** «**u_nS_0 e d_nS_0**». Sono la prima e l'ultima riga della colonna A della slide 3, u^n S_0 nella riga 1 e d^n S_0 nella riga 2n+1. Il docente: il valore «parte dal valore s con 0» e diventa «u elevato alla n per s con 0» ([00:01:45]), e va «da S con 0 fino a U alla N S con 0 alla scadenza T grande e D alla N S con 0» ([00:02:47]). Il foglio Excel scrive u^(20)∗S = 191,27 e d^(20)∗S = 13,07 (slide 19). ⚠️ Nelle slide la n è un esponente; la piattaforma la scrive in pedice in tutte e quattro le opzioni, quindi non conta. Distrattori del test: «u_nS_0 e d_nB_0» mette B_0, che nella lezione 09 è l'attività priva di rischio (transcript 09, [00:00:43]) e nel deck 10 solo una colonna; «u_nS_0 e d_nS_t» e «u_nS_t e d_nS_t» sbagliano il tempo, perché l'albero parte da S_0.
**Opzione:** u_nS_0 e d_nS_0
**Distrattori:**
- u_nS_0 e d_nB_0
- u_nS_0 e d_nS_t
- u_nS_t e d_nS_t

**D:** ⚠️ Quali sono i valori estremi dell'albero riferiti a una CALL alla scadenza T, in un albero binomiale a n stati riportato in un foglio Excel, secondo il test della lezione 10 (domanda 2)?
**R:** «**max(A1-K,0) e max(A2n+1-K,0)**». Sono la prima e l'ultima riga della colonna B della slide 4, «Pay off della Call alla scadenza», MAX(A1-K,0) e MAX(A2n+1-K,0), con A1 = u^n S_0 e A2n+1 = d^n S_0. Il docente: «L'opzione alla scadenza vale esattamente il suo valore intrinseco», il massimo tra A1, A2, A3 «meno il valore fisso del prezzo strike K e 0», e in fondo «il massimo tra a2n più 1 meno k e 0» ([00:03:01]–[00:03:29]). Distrattori del test: «max(A1-K,3) e max(A2n+1-K,1)» ha costanti inventate, come «max(S_T-K,1)» nel test della lezione 05; «min(A1-K,0)…» ha la forma della short put della lezione 05, min(S_T-K,0), ed è sempre ≤ 0. La D torna identica nella domanda 3.
**Opzione:** max(A1-K,0) e max(A2n+1-K,0)
**Distrattori:**
- max(A1-K,3) e max(A2n+1-K,1)
- min(A1-K,0) e max(A2n+1-K,0)
- min(A1-K,0) e min(A2n+1-K,0)

**D:** ⚠️ Quali sono i valori estremi dell'albero riferiti a una PUT alla scadenza T, in un albero binomiale a n stati riportato in un foglio Excel, secondo il test della lezione 10 (domanda 3)?
**R:** «**max(K-A1,0) e max(K-A2n+1,0)**». Sono la prima e l'ultima riga della slide 8, «Pay Off della PUT a scadenza», MAX(K -A1,0) e MAX(K -A2n+1,0). Il docente non nomina le celle: dice che per la put cambia «la definizione della funzione del valore intrinseco cioè del massimo di k meno il valore del sottostante» ([00:07:05]); nel foglio Excel è =MAX(k-W46;0) (slide 30). Distrattori del test: «max(K-A1,0) e max(K-A2n+1,2)» ha una costante inventata; «min(K-A1,0)…» ha la forma della short call, min(K-S_T,0); «min(A1-K,0) e min(A2n+1-K,0)» è la D della domanda 2, ripescata identica: il pool è condiviso.
**Opzione:** max(K-A1,0) e max(K-A2n+1,0)
**Distrattori:**
- min(K-A1,0) e max(K-A2n+1,0)
- max(K-A1,0) e max(K-A2n+1,2)
- min(A1-K,0) e min(A2n+1-K,0)

**D:** ⚠️ Quanto vale u in un albero binomiale a n stati, secondo il test della lezione 10 (domanda 4)?
**R:** «**exp(σ . dt^(1/2))**». È la formula del foglio Excel della slide 17, u =EXP(sigma∗RADQ(deltat)), cioè e^(σ√Δt), 1,069; le slide 27 e 32 la ripetono, la 32 con SQRT. Il docente: «L'evento up è l'esponenziale di... sigma per la radice quadrata, questa è la funzione di Excel, delta t» ([00:17:24]–[00:17:28]). Distrattori del test: «exp(-σ . dt^(1/2))» è il valore di d, perché d=1/u e 1/e^(σ√Δt) = e^(-σ√Δt), una deduzione: le slide scrivono solo d=1/u. È vera per d e falsa per u. «exp(σ)» non dipende dal passo temporale; «exp(σ . dt)» usa dt al posto di √dt, la stessa confusione della domanda 5 del test della lezione 06.
**Opzione:** exp(σ . dt^(1/2))
**Distrattori:**
- exp(σ)
- exp(σ . dt)
- exp(-σ . dt^(1/2))

**D:** ⚠️ Quanto vale d in un albero binomiale a n stati, secondo il test della lezione 10 (domanda 5)?
**R:** «**1/u**». Le variabili della slide 2 scrivono «d=1/u», ripetuto nelle slide 7 e 11; nel foglio Excel d =1/u, 0,935 (slide 17). Il docente: «il down è uguale ad 1 su u» ([00:00:40]) e «L'evento down è facilissimo, è 1 diviso up» ([00:17:19]). La forma equivalente exp(-σ . dt^(1/2)) non è fra le opzioni: è il distrattore D della domanda 4. Distrattori del test: «exp(σ . dt^(1/2))» è il valore di u, la chiave della domanda 4; «exp(σ)» e «exp(σ . dt)» sono gli stessi distrattori della 4, ed entrambi danno un numero maggiore di 1, mentre d è minore di 1.
**Opzione:** 1/u
**Distrattori:**
- exp(σ)
- exp(σ . dt)
- exp(σ . dt^(1/2))

## Lezione 11 — Pricing 4 - Modello Black-Scholes-Merton Soluzione asintotica 1

**D:** ⚠️ Quale modello si deriva nella lezione 11, e come se ne ottiene la prima derivazione?
**R:** Il modello di Black-Scholes-Merton, «uno dei modelli più diffusi in finanza per il pricing di opzioni call e put europee», che il corso deriva «secondo varie modalità» (transcript [00:00:04]–[00:00:19]). «La prima derivazione è la derivazione asintotica del modello di Cox-Ross-Rubinstein» ([00:00:34]): «che continuizza gli intervalli discreti», cioè con un intervallo temporale discreto che «tende a diventare sempre più piccolo, infinitesimo, in maniera tale che il tempo discreto diventi un tempo continuo» ([00:00:42]). Slide 2–3: «Il modello Black-Scholes-Merton — La soluzione asintotica». ⚠️ Il modello di partenza è il Cox-Ross-Rubinstein multiperiodale della lezione 09, non lo Sharpe-Rendleman-Bartter uniperiodale della lezione 08.
**Opzione:** Il modello di Black-Scholes-Merton, derivato prima come limite asintotico del modello di Cox-Ross-Rubinstein: l'intervallo discreto diventa infinitesimo e il tempo discreto diventa continuo.
**Distrattori:**
- Il modello di Black-Scholes-Merton, derivato prima come limite asintotico del modello di Sharpe-Rendleman-Bartter: l'intervallo discreto diventa infinitesimo e il tempo discreto diventa continuo.
- Consta di 1 azione e la liquidità necessaria a replicare le posizioni iniziale e finale
- Il Teorema del Limite Centrale: per n → ∞ la sequenza di variabili casuali γ̃_n converge in distribuzione alla variabile normale standard.

**D:** ⚠️ Come si partiziona l'orizzonte [0, T] di un prodotto derivato nella soluzione asintotica (slide 4)?
**R:** Slide 4: «Sia l'orizzonte di un prodotto derivato dato dall'intervallo [0, T], da partizionare in n sotto-intervalli: I_j = [jΔ_n , (j+1)Δ_n] per j = 0, ....., n - 1 dove Δ_n = (T-0)/n e n = 2^k». Il docente: «Gli n sotto intervalli I_j vanno da j delta n a j più 1 delta n per j che va da 0 a n meno 1», con n uguale a 2 alla k «perché siamo in uno sviluppo appunto binomiale, uno spazio appunto 2 alla k» (transcript [00:01:13]). ⚠️ n = 2^k, non k²; Δ_n è l'orizzonte diviso n.
**Opzione:** In n sotto-intervalli I_j = [jΔ_n , (j+1)Δ_n] per j = 0, ....., n - 1, dove Δ_n = (T-0)/n e n = 2^k.
**Distrattori:**
- In n sotto-intervalli I_j = [jΔ_n , (j+1)Δ_n] per j = 0, ....., n - 1, dove Δ_n = (T-0)/n e n = k².
- m_n(t) ≜ (T-t)/Δ_n ∀n ∈ N: il numero dei periodi (T - t) presi come numerario Δ_n.
- Una variabile casuale che può assumere valori {u_n, d_n}; le ξ_{n,j} sono variabili casuali i.i.d. sullo spazio di probabilità (Ω_n, ℑ_n, P_n).

**D:** ⚠️ Per quali valori di j valgono le formule di B e di S sulla griglia della soluzione asintotica (slide 5)?
**R:** Slide 5: «Il processo stocastico per S e B si trasforma in: i. B_{jΔn} = (1 + r_n)^j = r̂_n^j, ∀j = 0, ..., n; ii. S_{(j+1)Δn} = ξ_{n,j+1}S_{jΔn} ∀j = 0, ..., n - 1». ⚠️ B è definito in tutte le n + 1 date, da 0 a nΔ_n = T; la ricorsione di S si ferma a j = n - 1, perché da S_{jΔn} dà S_{(j+1)Δn}, e con j = n - 1 si arriva già a T. Le probabilità della slide 6 valgono invece ∀j = 1, ....., n, perché riguardano ξ_{n,j}.
**Opzione:** B_{jΔn} = (1 + r_n)^j = r̂_n^j, ∀j = 0, ..., n; S_{(j+1)Δn} = ξ_{n,j+1}S_{jΔn}, ∀j = 0, ..., n - 1
**Distrattori:**
- B_{jΔn} = (1 + r_n)^j = r̂_n^j, ∀j = 0, ..., n - 1; S_{(j+1)Δn} = ξ_{n,j+1}S_{jΔn}, ∀j = 0, ..., n
- P_n{ξ_{n,j} = u_n} = p = 1 - P_n{ξ_{n,j} = d_n} ∀j = 1, ....., n
- a_n(t) = inf{j ∈ N^+ | S_{T-m_n(t)}u_n^j d_n^(m_n(t)-j) - K > 0}

**D:** ⚠️ Che cos'è r_n nella soluzione asintotica, e come si scrive in forma compatta 1 + r_n?
**R:** Slide 5: «r_n è il tasso di interesse lungo l'orizzonte temporale I_j, ∀n», cioè sul singolo sotto-intervallo; e B_{jΔn} = (1 + r_n)^j = r̂_n^j. Il docente: «questo 1 più r_n lo definiremo come r cappello di n elevato alla j con una notazione compatta, è praticamente il fattore di capitalizzazione ovvero poi espresso in termini inversi il fattore di sconto» (transcript [00:01:56]). ⚠️ r_n è il tasso di un sotto-intervallo, non di tutto [0, T]: per la slide 7, 1 + r_n = e^(rΔ_n).
**Opzione:** Il tasso di interesse lungo l'orizzonte temporale I_j, ∀n; 1 + r_n si scrive r̂_n, il fattore di capitalizzazione.
**Distrattori:**
- Il tasso di interesse lungo l'intero orizzonte [0, T], ∀n; 1 + r_n si scrive r̂_n, il fattore di capitalizzazione.
- lim_{n→∞} m_n(t)√Δ_n (1 - 2p∗ u_n/r̂_n) = -(T - t)(r/σ + σ/2)
- m_n(t) ≜ (T-t)/Δ_n ∀n ∈ N: il numero dei periodi (T - t) presi come numerario Δ_n.

**D:** ⚠️ Che cos'è ξ_{n,j} nella soluzione asintotica, e come sono distribuite le ξ_{n,j} (slide 5–6)?
**R:** Slide 5: «ξ_{n,j} è una variabile casuale che può assumere valori {u_n, d_n}». Slide 6: «Sotto le condizioni sopra elencate, ξ_{n,j} sono variabili casuali i.i.d. sullo spazio di probabilità (Ω_n, ℑ_n, P_n)». Il docente: ξ «è una variabile casuale, identicamente, indipendentemente distribuita, che può assumere valori u_n e d_n» (transcript [00:02:40]). ⚠️ i.i.d.: indipendenti e identicamente distribuite.
**Opzione:** Una variabile casuale che può assumere valori {u_n, d_n}; le ξ_{n,j} sono variabili casuali i.i.d. sullo spazio di probabilità (Ω_n, ℑ_n, P_n).
**Distrattori:**
- Una variabile casuale che può assumere valori {u_n, d_n}; le ξ_{n,j} sono variabili casuali indipendenti ma non identicamente distribuite sullo spazio di probabilità (Ω_n, ℑ_n, P_n).
- P{a_n(t) ≤ γ_n ≤ m_n(t)}, dove γ_n ~ bin(p∗ u_n/r̂_n, m_n(t))
- Il tasso di interesse lungo l'orizzonte temporale I_j, ∀n; 1 + r_n si scrive r̂_n, il fattore di capitalizzazione.

**D:** ⚠️ Quale proprietà soddisfa lo spazio di probabilità (Ω_n, ℑ_n, P_n) delle ξ_{n,j} (slide 6)?
**R:** Slide 6: «P_n{ξ_{n,j} = u_n} = p = 1 - P_n{ξ_{n,j} = d_n} ∀j = 1, ....., n». Il docente: la probabilità che ξ_{n,j} valga u_n è p, mentre 1 - p è quella del valore d_n, «per ogni j che va da 1 a n piccolo» (transcript [00:03:02]–[00:03:30]). ⚠️ p è la probabilità del valore u_n, la salita; j va da 1 a n.
**Opzione:** P_n{ξ_{n,j} = u_n} = p = 1 - P_n{ξ_{n,j} = d_n} ∀j = 1, ....., n
**Distrattori:**
- P_n{ξ_{n,j} = d_n} = p = 1 - P_n{ξ_{n,j} = u_n} ∀j = 1, ....., n
- lim_{n→∞} (m_n(t) - E_p(γ_n))/√Var(γ_n) = ∞
- N(x) = (1/√(2π)) ∫_{-∞}^{x} e^(-u²/2) du

**D:** ⚠️ Come si definisce il comportamento asintotico di r_n, u_n e d_n nella soluzione asintotica (slide 7)?
**R:** Slide 7: «Inoltre, sia il comportamento asintotico di r_n, u_n, d_n definito come segue, con r ≥ 0 e σ > 0: 1 + r_n = e^(rΔ_n); u_n = e^(σ√Δ_n); d_n = u_n^(-1)». Il docente: «1 più r_n non è altro che l'esponenziale di r delta n, u_n è uguale all'esponenziale di sigma radice delta n e d_n non è altro che 1 su u_n» (transcript [00:04:00]). ⚠️ La radice sta in u_n, sotto σ; nel tasso c'è Δ_n senza radice.
**Opzione:** 1 + r_n = e^(rΔ_n), u_n = e^(σ√Δ_n), d_n = u_n^(-1)
**Distrattori:**
- 1 + r_n = e^(r√Δ_n), u_n = e^(σΔ_n), d_n = u_n^(-1)
- p∗=(r-d)/(u-d)
- a_n(t) = [ln(K/S_t) + m_n(t)σ√Δ_n]/(2σ√Δ_n)

**D:** ⚠️ Con quali condizioni su r e σ la slide 7 definisce il comportamento asintotico di r_n, u_n e d_n?
**R:** «con r ≥ 0 e σ > 0» (slide 7). Il docente: «con r maggiore uguale di 0 e sigma maggiore di 0» (transcript [00:03:49]). ⚠️ Il tasso può essere nullo, la volatilità no: con σ = 0 si avrebbe u_n = d_n = 1, e p∗ = (r̂_n - d_n)/(u_n - d_n) perderebbe senso (deduzione dalle formule).
**Opzione:** r ≥ 0 e σ > 0
**Distrattori:**
- r > 0 e σ ≥ 0
- S_t e K
- P^a{-d_1 ≤ γ̃_n < ∞}

**D:** ⚠️ Che cos'è m_n(t) nella soluzione asintotica (slide 8)?
**R:** Slide 8: «allora m_n(t) ≜ (T-t)/Δ_n ∀n ∈ N è il numero dei periodi (T - t) presi come numerario Δ_n. (vedi figura)»; la figura è una retta divisa in tratti di lunghezza Δ_n, con le tacche t e T. Il docente: «m_n(t)» è «T grande meno t su delta n per ogni n piccolo che appartiene a N grande», «il numero dei periodi T grande meno t piccolo presi avendo come numerario delta n» (transcript [00:04:15]–[00:04:26]). ⚠️ Al numeratore c'è T - t, la vita residua, non T - 0: (T-0)/Δ_n sarebbe n.
**Opzione:** m_n(t) ≜ (T-t)/Δ_n ∀n ∈ N: il numero dei periodi (T - t) presi come numerario Δ_n.
**Distrattori:**
- m_n(t) ≜ (T-0)/Δ_n ∀n ∈ N: il numero dei periodi (T - 0) presi come numerario Δ_n.
- B_{jΔn} = (1 + r_n)^j = r̂_n^j, ∀j = 0, ..., n; S_{(j+1)Δn} = ξ_{n,j+1}S_{jΔn}, ∀j = 0, ..., n - 1
- a_n(t) = [ln(K/S_t) + m_n(t)σ√Δ_n]/(2σ√Δ_n)

**D:** ⚠️ Come si riscrive la formula (30) del modello di Cox-Ross-Rubinstein con la nuova notazione della soluzione asintotica (formula (32))?
**R:** Slide 9: «Utilizzando la nuova notazione, la formula (30) può essere riscritta come segue: C_t = S_t ∑_{j=a_n(t)}^{m_n(t)} (m_n(t) su j)(p∗ u_n/r̂_n)^j (1 - p∗ u_n/r̂_n)^(m_n(t)-j) - (K/r̂_n^(m_n(t))) ∑_{j=a_n(t)}^{m_n(t)} (m_n(t) su j) p∗^j (1 - p∗)^(m_n(t)-j) (32)». Il docente: il primo addendo è «riferito al sottostante», il secondo «riferito allo strike» (transcript [00:04:51]–[00:05:41]). ⚠️ Nella prima somma c'è p∗ u_n/r̂_n sia nella base j sia nella base m_n(t) - j; nella seconda p∗ e 1 - p∗. È la (30) della lezione 09 con t al posto di T - m e m_n(t) al posto di m.
**Opzione:** C_t = S_t ∑_{j=a_n(t)}^{m_n(t)} (m_n(t) su j)(p∗ u_n/r̂_n)^j (1 - p∗ u_n/r̂_n)^(m_n(t)-j) - (K/r̂_n^(m_n(t))) ∑_{j=a_n(t)}^{m_n(t)} (m_n(t) su j) p∗^j (1 - p∗)^(m_n(t)-j)
**Distrattori:**
- C_t = S_t ∑_{j=a_n(t)}^{m_n(t)} (m_n(t) su j)(p∗ u_n/r̂_n)^j (1 - p∗)^(m_n(t)-j) - (K/r̂_n^(m_n(t))) ∑_{j=a_n(t)}^{m_n(t)} (m_n(t) su j) p∗^j (1 - p∗)^(m_n(t)-j)
- C_{T-3} = (1/r̂³)[p∗³(S_{T-3}u³ - K)^+ + 3p∗²(1 - p∗)(S_{T-3}u²d - K)^+ + 3p∗(1 - p∗)²(S_{T-3}ud² - K)^+ + (1 - p∗)³(S_{T-3}d³ - K)^+]
- C^u_{T-1} = r̂^(-1)[p∗(S_{T-2}u² - K)^+ + (1 - p∗)(S_{T-2}ud - K)^+] e C^d_{T-1} = r̂^(-1)[p∗(S_{T-2}ud - K)^+ + (1 - p∗)(S_{T-2}d² - K)^+]

**D:** ⚠️ Come si definisce a_n(t), l'estremo inferiore delle somme della formula (32) (slide 9)?
**R:** Slide 9: «dove: a_n(t) = inf{j ∈ N^+ | S_{T-m_n(t)}u_n^j d_n^(m_n(t)-j) - K > 0}». Il docente: è «il più piccolo valore per j che appartiene ai numeri naturali positivi» per cui la differenza è positiva (transcript [00:05:41]), «cioè il nostro valore intrinseco» ([00:18:32]). ⚠️ inf, il più piccolo j: con la somma da a_n(t) sparisce la funzione di massimo, come per a nella lezione 09. A [00:05:41] il docente dice «maggiore uguale a 0»: la slide scrive «> 0».
**Opzione:** a_n(t) = inf{j ∈ N^+ | S_{T-m_n(t)}u_n^j d_n^(m_n(t)-j) - K > 0}
**Distrattori:**
- a_n(t) = sup{j ∈ N^+ | S_{T-m_n(t)}u_n^j d_n^(m_n(t)-j) - K > 0}
- d_1 = [ln(S_t/K) + (r + σ²/2)(T - t)]/(σ√(T - t)) e d_2 = [ln(S_t/K) + (r - σ²/2)(T - t)]/(σ√(T - t))
- lim_{n→∞} (a_n(t) - E_p(γ_n))/√Var(γ_n) = [ln(K/S_t) - (r + σ²/2)(T - t)]/(σ√(T - t))

**D:** ⚠️ Che cosa afferma la Proposizione della slide 10 (formula (33))?
**R:** Slide 10, «Proposizione — Valgono le seguenti rappresentazioni al limite»: il limite per n → ∞ della (32) è «= S_tN(d_1) - Ke^(-r(T-t))N(d_2) (33)». Il docente: al limite si trova «esattamente la formula di Black-Scholes-Merton che dice che il prezzo di una call europea con strike K, scadenza T grande, tasso di interesse r, volatilità sigma» è S_t per N di d_1 meno Ke^(-r(T-t)) per N di d_2 (transcript [00:06:39]). ⚠️ N(d_1) va con S_t, N(d_2) con lo strike scontato Ke^(-r(T-t)).
**Opzione:** Che al limite per n → ∞ la formula (32) diventa S_tN(d_1) - Ke^(-r(T-t))N(d_2), la formula di Black-Scholes-Merton.
**Distrattori:**
- Che al limite per n → ∞ la formula (32) diventa S_tN(d_2) - Ke^(-r(T-t))N(d_1), la formula di Black-Scholes-Merton.
- C_t = S_t ∑_{j=a_n(t)}^{m_n(t)} (m_n(t) su j)(p∗ u_n/r̂_n)^j (1 - p∗ u_n/r̂_n)^(m_n(t)-j) - (K/r̂_n^(m_n(t))) ∑_{j=a_n(t)}^{m_n(t)} (m_n(t) su j) p∗^j (1 - p∗)^(m_n(t)-j)
- Per il Teorema del Limite Centrale γ̃_n tende a una N(0,1) e, per la simmetria della normale, P^a{-d_1 ≤ γ̃_n < ∞} = P^a{γ̃_n < d_1} = N(d_1).

**D:** ⚠️ Come si definiscono d_1 e d_2 nella Proposizione della slide 10 (formule (34) e (35))?
**R:** Slide 10: d_1 = [ln(S_t/K) + (r + σ²/2)(T - t)]/(σ√(T - t)) (34) e d_2 = [ln(S_t/K) + (r - σ²/2)(T - t)]/(σ√(T - t)) (35). Il docente: d_2 «non è altro che la stessa d_1 dove l'unica differenza è che il coefficiente di T grande meno t nel numeratore invece di avere il segno più ha il segno meno» (transcript [00:07:03]). ⚠️ Il segno che cambia è quello di σ²/2: più in d_1, meno in d_2. A [00:21:49] il docente legge d_1 con «r meno sigma quadro mezzi»: vale la slide.
**Opzione:** d_1 = [ln(S_t/K) + (r + σ²/2)(T - t)]/(σ√(T - t)) e d_2 = [ln(S_t/K) + (r - σ²/2)(T - t)]/(σ√(T - t))
**Distrattori:**
- d_1 = [ln(S_t/K) + (r - σ²/2)(T - t)]/(σ√(T - t)) e d_2 = [ln(S_t/K) + (r + σ²/2)(T - t)]/(σ√(T - t))
- γ̃_n = (γ_n - E_p(γ_n))/√Var(γ_n) = (γ_n - p∗(u_n/r̂_n)m_n(t))/√(p∗(u_n/r̂_n)(1 - p∗ u_n/r̂_n)m_n(t))
- Che al limite per n → ∞ la formula (32) diventa S_tN(d_1) - Ke^(-r(T-t))N(d_2), la formula di Black-Scholes-Merton.

**D:** ⚠️ Come definisce N(x) la slide 10?
**R:** Slide 10: N(x) = (1/√(2π)) ∫_{-∞}^{x} e^(-u²/2) du, un integrale da -∞ a x. Il docente chiama N «il valore della nostra funzione di densità normale valorizzato a d_1 e d_2» (transcript [00:07:03]) e «la variabile normale standard» ([00:24:35]). ⚠️ Gli estremi d'integrazione sono -∞ e x: la slide 68 usa proprio ∫_{-∞}^{d_1} per arrivare a N(d_1).
**Opzione:** N(x) = (1/√(2π)) ∫_{-∞}^{x} e^(-u²/2) du
**Distrattori:**
- N(x) = (1/√(2π)) ∫_{x}^{∞} e^(-u²/2) du
- P{(a_n(t) - E_p(γ_n))/√Var(γ_n) ≤ γ̃_n ≤ (m_n(t) - E_p(γ_n))/√Var(γ_n)}
- lim_{n→∞} p∗ = 1/2

**D:** ⚠️ N(d_1) e N(d_2) nella formula di Black-Scholes-Merton: per il docente sono valori di una «funzione di densità normale». Che cosa scrive invece la slide 10, e quale versione conta?
**R:** La slide 10 definisce N(x) = (1/√(2π)) ∫_{-∞}^{x} e^(-u²/2) du: l'integrale da -∞ a x della densità normale, non la densità. Il docente dice che N è «il valore della nostra funzione di densità normale valorizzato a d_1 e d_2» (transcript [00:07:03]) e parla di «densità di probabilità» anche alla fine ([00:31:43]–[00:31:56]); la slide 68 mostra però che N(d_1) è l'integrale da -∞ a d_1, cioè una probabilità, P^a{γ̃_n < d_1}. Vale la slide: le opzioni d'esame citano le slide. Che quell'integrale si chiami funzione di ripartizione, la Φ della lezione 07, è un'integrazione, non un'affermazione del deck.

**D:** ⚠️ Quanto vale il primo limite preliminare della soluzione asintotica, lim_{n→∞} p∗ (formula (36))?
**R:** Slide 11–13: lim_{n→∞} p∗ = lim_{n→∞} (r̂_n - d_n)/(u_n - d_n) = lim_{Δ_n→0} (e^(rΔ_n) - e^(-σ√Δ_n))/(e^(σ√Δ_n) - e^(-σ√Δ_n)); con √Δ_n = x si ha la forma indeterminata 0/0 (e^(rx²) - e^(-σx))/(e^(σx) - e^(-σx)), e con De l'Hopital (2rxe^(rx²) + σe^(-σx))/(σe^(σx) + σe^(-σx)) = σ/(2σ) = 1/2. Il docente: «Il limite pertanto per n che tende all'infinito di P star è esattamente uguale a un mezzo» (transcript [00:09:02]). ⚠️ 1/2 come il secondo limite (37); vale 1 il terzo, (38).
**Opzione:** lim_{n→∞} p∗ = 1/2
**Distrattori:**
- lim_{n→∞} p∗ = 1
- lim_{x→0} 2σx/(1 - e^(-2σx)) = 1: serve a espandere il lato sinistro del quarto limite.
- Il tasso di interesse privo di rischio è uguale al rendimento atteso dell'opzione

**D:** ⚠️ Quanto vale il secondo limite preliminare, lim_{n→∞} p∗ u_n/r̂_n (formula (37)), e come si arriva al risultato?
**R:** Slide 14–16: sostituite le definizioni, con √Δ_n = x e «alcuni riarrangiamenti» il limite diventa lim_{x→0} (1 - e^(-σx-rx²))/(1 - e^(-2σx)), una forma indeterminata 0/0; con De l'Hopital lim_{x→0} (σ+2rx)e^(-σx-rx²)/(2σe^(-2σx)) = σ/(2σ) = 1/2. Il docente: «Il limite che cerchiamo quindi è pari anch'esso a un mezzo» (transcript [00:10:48]). ⚠️ Al numeratore resta σ, al denominatore 2σ.
**Opzione:** 1/2: con √Δ_n = x e alcuni riarrangiamenti si arriva alla forma indeterminata 0/0 (1 - e^(-σx-rx²))/(1 - e^(-2σx)), e con De l'Hopital a σ/(2σ) = 1/2.
**Distrattori:**
- 1: con √Δ_n = x e alcuni riarrangiamenti si arriva alla forma indeterminata 0/0 (1 - e^(-σx-rx²))/(1 - e^(-2σx)), e con De l'Hopital a 2σ/(2σ) = 1.
- ln S_t + j ln u_n + (m_n(t) - j) ln d_n = ln K, con ln d_n = - ln u_n; risolvendo per j, 2j ln u_n = ln(K/S_t) + m_n(t) ln u_n.
- La (41) per a_n(t), la (39) per il numeratore, le (36) e (37) per il denominatore.

**D:** ⚠️ Quanto vale il terzo limite preliminare (formula (38)), e dove si usa?
**R:** Slide 17–18: lim_{x→0} 2σx/(1 - e^(-2σx)) è una forma indeterminata 0/0; con De l'Hopital lim_{x→0} 2σ/(2σe^(-2σx)) = 1, quindi lim_{x→0} 2σx/(1 - e^(-2σx)) = 1 (38). Il docente: «nuovamente usiamo la regola di De l'Hopital e otteniamo che questo limite è uguale ad 1» (transcript [00:11:17]). ⚠️ Si usa nel quarto limite: «Il lato sinistro del limite originale è ulteriormente espanso. Utilizzando l'espressione (38)» (slide 30).
**Opzione:** lim_{x→0} 2σx/(1 - e^(-2σx)) = 1: serve a espandere il lato sinistro del quarto limite.
**Distrattori:**
- lim_{x→0} 2σx/(1 - e^(-2σx)) = 1/2: serve a espandere il lato sinistro del quarto limite.
- La (41) per a_n(t), la (39) per il numeratore, le (36) e (37) per il denominatore.
- lim_{n→∞} p∗ = 1/2

**D:** ⚠️ Quanto vale il quarto limite preliminare, lim m_n(t)√Δ_n (1 - 2p∗ u_n/r̂_n) (formula (39))?
**R:** Slide 34: lim_{n→∞} m_n(t)√Δ_n (1 - 2p∗ u_n/r̂_n) = -(T - t)(r/σ + σ/2) (39). Ci si arriva sostituendo m_n(t), Δ_n, p∗, r̂_n, d_n, u_n, ponendo √Δ_n = x, usando la (38) e applicando due volte De l'Hopital: -(T - t)(2σ² - σ² + 2r)/(2σ) (slide 19–33). Il docente: «meno T grande meno t, moltiplicato r su sigma più sigma mezzi» (transcript [00:14:52]–[00:15:03]). ⚠️ Meno davanti e più in parentesi; il quinto limite (40), con 1 - 2p∗, dà (T - t)(σ/2 - r/σ).
**Opzione:** lim_{n→∞} m_n(t)√Δ_n (1 - 2p∗ u_n/r̂_n) = -(T - t)(r/σ + σ/2)
**Distrattori:**
- lim_{n→∞} m_n(t)√Δ_n (1 - 2p∗ u_n/r̂_n) = (T - t)(σ/2 - r/σ)
- lim_{n→∞} (a_n(t) - E_p(γ_n))/√Var(γ_n) = [ln(K/S_t) - (r + σ²/2)(T - t)]/(σ√(T - t))
- N(x) = (1/√(2π)) ∫_{-∞}^{x} e^(-u²/2) du

**D:** ⚠️ Quanto vale il quinto limite preliminare, lim m_n(t)√Δ_n (1 - 2p∗) (formula (40))?
**R:** Slide 44: lim_{n→∞} m_n(t)√Δ_n (1 - 2p∗) = (T - t)(σ/2 - r/σ) (40). Dopo le sostituzioni e √Δ_n = x, due applicazioni di De l'Hopital danno (T - t)(2σ² - 4r)/(4σ) = (T - t)(σ² - 2r)/(2σ) (slide 35–43). Il docente: «2 sigma quadro meno 4r su 4 sigma che semplificando il 2 diventa sigma mezzi meno r su sigma» (transcript [00:17:46]). ⚠️ Nessun meno davanti, meno in parentesi; il quarto limite (39), con 1 - 2p∗ u_n/r̂_n, dà -(T - t)(r/σ + σ/2).
**Opzione:** lim_{n→∞} m_n(t)√Δ_n (1 - 2p∗) = (T - t)(σ/2 - r/σ)
**Distrattori:**
- lim_{n→∞} m_n(t)√Δ_n (1 - 2p∗) = -(T - t)(r/σ + σ/2)
- P^a{-d_1 ≤ γ̃_n < ∞}
- È tale che le probabilità degli eventi sommano ad 1 in un unico periodo

**D:** ⚠️ Con quale sostituzione e con quale regola si calcolano i limiti preliminari della soluzione asintotica?
**R:** Si sostituiscono r̂_n = e^(rΔ_n), u_n = e^(σ√Δ_n) e d_n = e^(-σ√Δ_n), poi «definendo √Δ_n = x» (slide 12, 15, 25, 38) si passa al limite per x → 0; ogni volta compare «una forma indeterminata 0/0», e «Sfruttando la regola di De l'Hopital» la si risolve (slide 13, 16, 18, 31, 33, 41, 42). Il docente: la regola «ci dice che calcolando la derivata prima del numeratore e del denominatore possiamo proseguire nella nostra ricerca del limite» (transcript [00:08:36]). ⚠️ x è la radice di Δ_n: a [00:09:58] il docente dice «delta n uguale a x», ma le slide scrivono sempre √Δ_n = x.
**Opzione:** Si definisce √Δ_n = x, si passa al limite per x → 0 e le forme indeterminate 0/0 si risolvono con la regola di De l'Hopital.
**Distrattori:**
- Si definisce Δ_n = x, si passa al limite per x → 0 e le forme indeterminate 0/0 si risolvono con la regola di De l'Hopital.
- Il Teorema del Limite Centrale: per n → ∞ la sequenza di variabili casuali γ̃_n converge in distribuzione alla variabile normale standard.
- Esistono due scenari, up e down

**D:** ⚠️ Qual è la forma più trattabile di a_n(t) ricavata nella soluzione asintotica (formula (41))?
**R:** Slide 50: a_n(t) = [ln(K/S_t) + m_n(t)σ√Δ_n]/(2σ√Δ_n) (41). Il docente: risolvendo per j si ottiene «logaritmo di K su S più m_n(t) sigma radice di delta n diviso 2 sigma radice delta n, che è il valore quindi di a_n(t)» (transcript [00:20:47]). ⚠️ Nel logaritmo c'è K/S_t, con K al numeratore, perché ln K - ln S_t sta a destra dell'uguale.
**Opzione:** a_n(t) = [ln(K/S_t) + m_n(t)σ√Δ_n]/(2σ√Δ_n)
**Distrattori:**
- a_n(t) = [ln(S_t/K) + m_n(t)σ√Δ_n]/(2σ√Δ_n)
- P_n{ξ_{n,j} = u_n} = p = 1 - P_n{ξ_{n,j} = d_n} ∀j = 1, ....., n
- P{a_n(t) ≤ γ_n ≤ m_n(t)}, dove γ_n ~ bin(p∗ u_n/r̂_n, m_n(t))

**D:** ⚠️ Da quale equazione si ricava la forma trattabile di a_n(t) (slide 48–50)?
**R:** Slide 48: «Pertanto dato il valore di j e considerando il logaritmo dell'espressione dentro inf si ottiene: ln S_t + j ln u_n + (m_n(t) - j) ln d_n = ln K quindi ln d_n = - ln u_n». Slide 50: «risolvendo per j si ottiene: 2j ln u_n = ln(K/S_t) + m_n(t) ln u_n», poi 2jσ√Δ_n = ln(K/S_t) + m_n(t)σ√Δ_n. Il docente: «considerando che logaritmo di d_n è uguale a meno logaritmo di u_n» (transcript [00:19:27]); sostituita u_n, «semplificando l'esponenziale con il logaritmo» ([00:20:18]). ⚠️ Da d_n = u_n^(-1) segue ln d_n = - ln u_n, non 1/ln u_n.
**Opzione:** ln S_t + j ln u_n + (m_n(t) - j) ln d_n = ln K, con ln d_n = - ln u_n; risolvendo per j, 2j ln u_n = ln(K/S_t) + m_n(t) ln u_n.
**Distrattori:**
- ln S_t + j ln u_n + (m_n(t) - j) ln d_n = ln K, con ln d_n = 1/ln u_n; risolvendo per j, 2j ln u_n = ln(K/S_t) + m_n(t) ln u_n.
- 1 + r_n = e^(rΔ_n), u_n = e^(σ√Δ_n), d_n = u_n^(-1)
- P{(a_n(t) - E_p(γ_n))/√Var(γ_n) ≤ γ̃_n ≤ (m_n(t) - E_p(γ_n))/√Var(γ_n)}

**D:** ⚠️ Quali grandezze della formula (33) sono invarianti nel calcolo del limite (slide 51)?
**R:** Slide 51: «è evidente che S_t e K sono invarianti nel calcolo del limite. Quindi il problema si riduce al seguente», cioè ai tre limiti della slide 52. Il docente lo ripete: S, t e K «sono invarianti rispetto al calcolo del limite» (transcript [00:22:11]). ⚠️ m_n(t), a_n(t), p∗, u_n e r̂_n dipendono da n, quindi restano dentro i limiti.
**Opzione:** S_t e K
**Distrattori:**
- S_t e r̂_n
- Si definisce √Δ_n = x, si passa al limite per x → 0 e le forme indeterminate 0/0 si risolvono con la regola di De l'Hopital.
- lim_{n→∞} m_n(t)√Δ_n (1 - 2p∗) = (T - t)(σ/2 - r/σ)

**D:** ⚠️ A quali tre limiti si riduce la dimostrazione della Proposizione della slide 10 (slide 52)?
**R:** Slide 52: «1. lim_{n→∞} ∑_{j=a_n(t)}^{m_n(t)} (m_n(t) su j)(p∗ u_n/r̂_n)^j (1 - p∗ u_n/r̂_n)^(m_n(t)-j) ≟ N(d_1); 2. lim_{n→∞} ∑_{j=a_n(t)}^{m_n(t)} (m_n(t) su j) p∗^j (1 - p∗)^(m_n(t)-j) ≟ N(d_2); 3. lim_{n→∞} 1/r̂_n^(m_n(t)) ≟ e^(-r(T-t))», con un «?» sopra l'uguale. Il docente: il terzo chiede se il fattore discreto «è uguale al nostro fattore di sconto e alla meno r T grande meno t nel continuo?», e «Quando noi abbiamo risolto questi tre limiti, di fatto la nostra formula 33 è dimostrata» (transcript [00:22:30]–[00:23:20]). ⚠️ La somma con p∗ u_n/r̂_n va a N(d_1), quella con p∗ a N(d_2). La lezione 11 dimostra solo il primo.
**Opzione:** 1. lim_{n→∞} ∑_{j=a_n(t)}^{m_n(t)} (m_n(t) su j)(p∗ u_n/r̂_n)^j (1 - p∗ u_n/r̂_n)^(m_n(t)-j) ≟ N(d_1); 2. lim_{n→∞} ∑_{j=a_n(t)}^{m_n(t)} (m_n(t) su j) p∗^j (1 - p∗)^(m_n(t)-j) ≟ N(d_2); 3. lim_{n→∞} 1/r̂_n^(m_n(t)) ≟ e^(-r(T-t))
**Distrattori:**
- 1. lim_{n→∞} ∑_{j=a_n(t)}^{m_n(t)} (m_n(t) su j)(p∗ u_n/r̂_n)^j (1 - p∗ u_n/r̂_n)^(m_n(t)-j) ≟ N(d_2); 2. lim_{n→∞} ∑_{j=a_n(t)}^{m_n(t)} (m_n(t) su j) p∗^j (1 - p∗)^(m_n(t)-j) ≟ N(d_1); 3. lim_{n→∞} 1/r̂_n^(m_n(t)) ≟ e^(-r(T-t))
- Che al limite per n → ∞ la formula (32) diventa S_tN(d_1) - Ke^(-r(T-t))N(d_2), la formula di Black-Scholes-Merton.
- Per il Teorema del Limite Centrale γ̃_n tende a una N(0,1) e, per la simmetria della normale, P^a{-d_1 ≤ γ̃_n < ∞} = P^a{γ̃_n < d_1} = N(d_1).

**D:** ⚠️ Quale probabilità si identifica nella somma del limite 1, e come è distribuita γ_n (slide 53)?
**R:** Slide 53: «Nell'espressione seguente: ∑_{j=a_n(t)}^{m_n(t)} (m_n(t) su j)(p∗ u_n/r̂_n)^j (1 - p∗ u_n/r̂_n)^(m_n(t)-j) si può identificare la probabilità P{a_n(t) ≤ γ_n ≤ m_n(t)}, dove γ_n è una variabile casuale distribuita come: γ_n ~ bin(p∗ u_n/r̂_n, m_n(t))». Il docente: «una variabile casuale distribuita come una binomiale con parametri p star u_n su r cappello di n, m_n(t)» (transcript [00:23:33]). ⚠️ Il parametro è p∗ u_n/r̂_n, la base della prima somma; p∗ è quella della seconda.
**Opzione:** P{a_n(t) ≤ γ_n ≤ m_n(t)}, dove γ_n ~ bin(p∗ u_n/r̂_n, m_n(t))
**Distrattori:**
- P{a_n(t) ≤ γ_n ≤ m_n(t)}, dove γ_n ~ bin(p∗, m_n(t))
- Una variabile casuale che può assumere valori {u_n, d_n}; le ξ_{n,j} sono variabili casuali i.i.d. sullo spazio di probabilità (Ω_n, ℑ_n, P_n).
- γ̃_n = (γ_n - E_p(γ_n))/√Var(γ_n) = (γ_n - p∗(u_n/r̂_n)m_n(t))/√(p∗(u_n/r̂_n)(1 - p∗ u_n/r̂_n)m_n(t))

**D:** ⚠️ Come si standardizza la variabile casuale γ_n nella dimostrazione del limite 1 (slide 54)?
**R:** Slide 54: «Standardizzando la variabile casuale γ_n: γ̃_n = (γ_n - E_p(γ_n))/√Var(γ_n) = (γ_n - p∗(u_n/r̂_n)m_n(t))/√(p∗(u_n/r̂_n)(1 - p∗ u_n/r̂_n)m_n(t))». Il docente: «sottraiamo la media e dividiamo per la deviazione standard, ovvero la radice quadrata della varianza» (transcript [00:23:57]). ⚠️ Si divide per √Var, come nella forma standardizzata della lezione 02. A [00:24:45]–[00:25:36] il docente dice «diviso la varianza»: vale la slide.
**Opzione:** γ̃_n = (γ_n - E_p(γ_n))/√Var(γ_n) = (γ_n - p∗(u_n/r̂_n)m_n(t))/√(p∗(u_n/r̂_n)(1 - p∗ u_n/r̂_n)m_n(t))
**Distrattori:**
- γ̃_n = (γ_n - E_p(γ_n))/Var(γ_n) = (γ_n - p∗(u_n/r̂_n)m_n(t))/(p∗(u_n/r̂_n)(1 - p∗ u_n/r̂_n)m_n(t))
- B_{jΔn} = (1 + r_n)^j = r̂_n^j, ∀j = 0, ..., n; S_{(j+1)Δn} = ξ_{n,j+1}S_{jΔn}, ∀j = 0, ..., n - 1
- d_1 = [ln(S_t/K) + (r + σ²/2)(T - t)]/(σ√(T - t)) e d_2 = [ln(S_t/K) + (r - σ²/2)(T - t)]/(σ√(T - t))

**D:** ⚠️ Quale teorema permette di passare dalla binomiale γ_n alla normale standard, e che cosa afferma nella dimostrazione (slide 54)?
**R:** Slide 54: «per n → ∞ la sequenza di variabili casuali γ̃_n converge in distribuzione alla variabile normale standard (Teorema del Limite Centrale)». Slide 68: «Di nuovo, per il Teorema del Limite Centrale γ̃_n ∼^a N(0,1)». Il docente: «per il teorema del limite centrale, per n che tende all'infinito, la sequenza di variabili casuali» «converge in distribuzione proprio a una variabile normale standardizzata. E questo ci porta quindi già a intuire quella N che abbiamo visto nella formula» (transcript [00:24:24]–[00:24:35]). ⚠️ La regola di De l'Hopital serve invece per i limiti preliminari.
**Opzione:** Il Teorema del Limite Centrale: per n → ∞ la sequenza di variabili casuali γ̃_n converge in distribuzione alla variabile normale standard.
**Distrattori:**
- La regola di De l'Hopital: per n → ∞ la sequenza di variabili casuali γ̃_n converge in distribuzione alla variabile normale standard.
- In n sotto-intervalli I_j = [jΔ_n , (j+1)Δ_n] per j = 0, ....., n - 1, dove Δ_n = (T-0)/n e n = 2^k.
- Il tasso di interesse lungo l'orizzonte temporale I_j, ∀n; 1 + r_n si scrive r̂_n, il fattore di capitalizzazione.

**D:** ⚠️ Come si riscrive P{a_n(t) ≤ γ_n ≤ m_n(t)} con la variabile standardizzata (formula (42))?
**R:** Slide 55: P{a_n(t) ≤ γ_n ≤ m_n(t)} = P{(a_n(t) - E_p(γ_n))/√Var(γ_n) ≤ γ̃_n ≤ (m_n(t) - E_p(γ_n))/√Var(γ_n)} (42). Slide 56: «Al fine di poter determinare la probabilità asintotica P^a come espressa nella (42), è necessario studiare il limite agli estremi dell'intervallo per n → ∞». Il docente: l'estremo con m_n(t) è «l'altro limite, cioè quello superiore» (transcript [00:25:04]). ⚠️ a_n(t) resta nell'estremo inferiore e m_n(t) nel superiore, come nella somma da j = a_n(t) a m_n(t).
**Opzione:** P{(a_n(t) - E_p(γ_n))/√Var(γ_n) ≤ γ̃_n ≤ (m_n(t) - E_p(γ_n))/√Var(γ_n)}
**Distrattori:**
- P{(m_n(t) - E_p(γ_n))/√Var(γ_n) ≤ γ̃_n ≤ (a_n(t) - E_p(γ_n))/√Var(γ_n)}
- ln S_t + j ln u_n + (m_n(t) - j) ln d_n = ln K, con ln d_n = - ln u_n; risolvendo per j, 2j ln u_n = ln(K/S_t) + m_n(t) ln u_n.
- 1 + r_n = e^(rΔ_n), u_n = e^(σ√Δ_n), d_n = u_n^(-1)

**D:** ⚠️ A che cosa tende l'estremo superiore dell'intervallo della (42) per n → ∞ (formula (43))?
**R:** Slide 57–60: lim_{n→∞} (m_n(t) - E_p(γ_n))/√Var(γ_n) = lim √((1 - p∗ u_n/r̂_n)((T-t)n/T)(p∗ u_n/r̂_n)^(-1)) = ∞, «ciè equivale a» lim_{n→∞} (m_n(t) - E_p(γ_n))/√Var(γ_n) = ∞ (43). Il docente: «Ed è chiaro che questo limite per n che tende all'infinito non è altro che uguale ad infinito» (transcript [00:27:14]). ⚠️ +∞: dentro la radice m_n(t) = (T-t)n/T cresce con n.
**Opzione:** lim_{n→∞} (m_n(t) - E_p(γ_n))/√Var(γ_n) = ∞
**Distrattori:**
- lim_{n→∞} (m_n(t) - E_p(γ_n))/√Var(γ_n) = -∞
- a_n(t) = inf{j ∈ N^+ | S_{T-m_n(t)}u_n^j d_n^(m_n(t)-j) - K > 0}
- lim_{x→0} 2σx/(1 - e^(-2σx)) = 1: serve a espandere il lato sinistro del quarto limite.

**D:** ⚠️ A che cosa tende l'estremo inferiore dell'intervallo della (42) per n → ∞ (formula (44))?
**R:** Slide 65: lim_{n→∞} (a_n(t) - E_p(γ_n))/√Var(γ_n) = [ln(K/S_t) - (r + σ²/2)(T - t)]/(σ√(T - t)) (44). Il docente: il limite «non è altro che il logaritmo di K su S meno r più sigma quadro mezzi T grande meno t diviso sigma radice quadrata di T meno t» (transcript [00:30:02]). ⚠️ È -d_1: con ln(K/S_t) = - ln(S_t/K), il numeratore è l'opposto di quello della (34), con r + σ²/2. Per la slide 67 la probabilità diventa P^a{-d_1 ≤ γ̃_n < ∞}.
**Opzione:** lim_{n→∞} (a_n(t) - E_p(γ_n))/√Var(γ_n) = [ln(K/S_t) - (r + σ²/2)(T - t)]/(σ√(T - t))
**Distrattori:**
- lim_{n→∞} (a_n(t) - E_p(γ_n))/√Var(γ_n) = [ln(K/S_t) - (r - σ²/2)(T - t)]/(σ√(T - t))
- È tale che le probabilità degli eventi sommano ad 1 in un unico periodo
- In n sotto-intervalli I_j = [jΔ_n , (j+1)Δ_n] per j = 0, ....., n - 1, dove Δ_n = (T-0)/n e n = 2^k.

**D:** ⚠️ Quali espressioni già calcolate si usano nel limite dell'estremo inferiore della (42) (slide 61–65)?
**R:** Slide 61: «utilizzando l'espressione (41) il limite può essere riespresso come»; slide 64: «Il numeratore è esattamente il risultato dell'espressione (39)»; slide 65: «Utilizzando le espressioni (36) e (37), si ottiene». Il docente: «il numeratore è esattamente il risultato dell'espressione 39 che abbiamo calcolato, vi ricordate, nei limiti preliminari» e «Utilizziamo quindi le sezioni che abbiamo già calcolato, 36 e 37» (transcript [00:29:04], [00:29:56]). ⚠️ Al numeratore serve la (39), con 1 - 2p∗ u_n/r̂_n, non la (40).
**Opzione:** La (41) per a_n(t), la (39) per il numeratore, le (36) e (37) per il denominatore.
**Distrattori:**
- La (41) per a_n(t), la (40) per il numeratore, le (36) e (37) per il denominatore.
- 1/2: con √Δ_n = x e alcuni riarrangiamenti si arriva alla forma indeterminata 0/0 (1 - e^(-σx-rx²))/(1 - e^(-2σx)), e con De l'Hopital a σ/(2σ) = 1/2.
- 1. lim_{n→∞} ∑_{j=a_n(t)}^{m_n(t)} (m_n(t) su j)(p∗ u_n/r̂_n)^j (1 - p∗ u_n/r̂_n)^(m_n(t)-j) ≟ N(d_1); 2. lim_{n→∞} ∑_{j=a_n(t)}^{m_n(t)} (m_n(t) su j) p∗^j (1 - p∗)^(m_n(t)-j) ≟ N(d_2); 3. lim_{n→∞} 1/r̂_n^(m_n(t)) ≟ e^(-r(T-t))

**D:** ⚠️ Come si scrive la probabilità asintotica dopo aver sostituito la (43) e la (44) e usato la definizione di d_1 (slide 66–67)?
**R:** Slide 66: P^a{[ln(K/S_t) - (r + σ²/2)(T - t)]/(σ√(T - t)) ≤ γ̃_n < ∞}; slide 67: «Utilizzando la definizione di d_1 data dall'espressione (34) la formula precedente può essere riscritta come segue: P^a{-d_1 ≤ γ̃_n < ∞}». Il docente: il calcolo della probabilità asintotica «può essere scritto come il calcolo riferito alla binomiale standardizzata γ̃_n tra meno d_1 e infinito» (transcript [00:31:18]). ⚠️ L'estremo inferiore è -d_1, con il meno; il superiore ∞, dalla (43).
**Opzione:** P^a{-d_1 ≤ γ̃_n < ∞}
**Distrattori:**
- P^a{d_1 ≤ γ̃_n < ∞}
- S_t e K
- r ≥ 0 e σ > 0

**D:** ⚠️ Come si conclude la dimostrazione del limite 1 (slide 68)?
**R:** Slide 68: «Di nuovo, per il Teorema del Limite Centrale γ̃_n ∼^a N(0,1), quindi: P^a{-d_1 ≤ γ̃_n < ∞} = (1/√(2π)) ∫_{-d_1}^{∞} e^(-γ̃²/2) dγ̃; per la proprietà di simmetria della distribuzione di probabilità normale: P^a{-d_1 ≤ γ̃_n < ∞} = P^a{γ̃_n < d_1} = (1/√(2π)) ∫_{-∞}^{d_1} e^(-γ̃²/2) dγ̃ = N(d_1)», e quindi il limite della prima somma è N(d_1), «Q.E.D.». Il docente: la normale «è simmetrica e pertanto questa probabilità può essere calcolata anche» non fra -d_1 e infinito «ma tra meno infinito e d_1», «come volevasi dimostrare» (transcript [00:31:56]–[00:32:40]). ⚠️ La simmetria porta a γ̃_n < d_1, non a γ̃_n > d_1.
**Opzione:** Per il Teorema del Limite Centrale γ̃_n tende a una N(0,1) e, per la simmetria della normale, P^a{-d_1 ≤ γ̃_n < ∞} = P^a{γ̃_n < d_1} = N(d_1).
**Distrattori:**
- Per il Teorema del Limite Centrale γ̃_n tende a una N(0,1) e, per la simmetria della normale, P^a{-d_1 ≤ γ̃_n < ∞} = P^a{γ̃_n > d_1} = N(d_1).
- 1/2: con √Δ_n = x e alcuni riarrangiamenti si arriva alla forma indeterminata 0/0 (1 - e^(-σx-rx²))/(1 - e^(-2σx)), e con De l'Hopital a σ/(2σ) = 1/2.
- Il modello di Black-Scholes-Merton, derivato prima come limite asintotico del modello di Cox-Ross-Rubinstein: l'intervallo discreto diventa infinitesimo e il tempo discreto diventa continuo.

**D:** ⚠️ Come è definito l'ennesimo sottointervallo nel modello CRR in versione asintotica, secondo il test della lezione 11 (domanda 1)?
**R:** «**Ij=[jΔn , (j+1)Δn]**». È la partizione delle slide 4 e 5, I_j = [jΔ_n , (j+1)Δ_n] per j = 0, ....., n - 1, con Δ_n = (T-0)/n e n = 2^k; la piattaforma scrive piatti i pedici, Ij e Δn. Il docente: «Gli n sotto intervalli I_j vanno da j delta n a j più 1 delta n per j che va da 0 a n meno 1» (transcript [00:01:13]). ⚠️ «Ennesimo» va letto «j-esimo»: l'indice è j, n è il numero dei sotto-intervalli. Ogni sotto-intervallo è lungo Δ_n, quindi l'estremo destro è jΔ_n + Δ_n = (j+1)Δ_n (deduzione dalle formule). Distrattori del test: «Ij=[jΔn , (j+n)Δn]» e «Ij=[jΔn , (j+2)Δn]» cambiano solo l'estremo destro; «I_j=[njΔ_n , (j+n)Δ_n]», l'unica con i pedici veri, sbaglia entrambi gli estremi, e con j = 0 darebbe [0, nΔ_n] = [0, T], tutto l'orizzonte. ⚠️ La stessa «(j+n)» sta nella chiave della domanda 2.
**Opzione:** Ij=[jΔn , (j+1)Δn]
**Distrattori:**
- I_j=[njΔ_n , (j+n)Δ_n]
- Ij=[jΔn , (j+n)Δn]
- Ij=[jΔn , (j+2)Δn]

**D:** ⚠️ Come è definito il processo stocastico di S nel modello CRR in versione asintotica, secondo il test della lezione 11 (domanda 2)?
**R:** «**S_{(j+n)Δn}=ξ_{n,j+1}S_jΔ_n**», l'opzione da segnare, ma 🚨 la domanda è **difettosa**: nessuna opzione è fedele alla slide. La slide 5 scrive S_{(j+1)Δn} = ξ_{n,j+1}S_{jΔn}, ∀j = 0, ..., n - 1, e il docente: «Il nostro sottostante al tempo j più 1 delta n non è altro che la nostra xi n j più 1 per il valore del sottostante al tempo j delta n» (transcript [00:02:26]). La «(j+n)» è un refuso della piattaforma: sta in A, C e D, quindi non discrimina, ma nella domanda 1 la stessa «(j+n)» è un distrattore. Nella chiave anche la coda è resa male, S_jΔ_n con il solo j in pedice, per S_{jΔn}. Distrattori del test: «S_{(j+n)Δn}=ξ_{n,j+1}S_j» perde Δn, e le slide non scrivono mai S_j: l'indice di S è il tempo, S_{jΔn}, S_t, S_{T-m_n(t)}; «S_{(j+n)Δn}=ξ_{n,j+1}» perde del tutto il prezzo precedente; «S_j=[njΔ_n , (j+n)Δ_n]» dà a S l'intervallo della A della domanda 1.
**Opzione:** S_{(j+n)Δn}=ξ_{n,j+1}S_jΔ_n
**Distrattori:**
- S_j=[njΔ_n , (j+n)Δ_n]
- S_{(j+n)Δn}=ξ_{n,j+1}S_j
- S_{(j+n)Δn}=ξ_{n,j+1}

**D:** ⚠️ Come è definito il processo stocastico di B nel modello CRR in versione asintotica, secondo il test della lezione 11 (domanda 3)?
**R:** «**B_{jΔn}=(1+r_n)^j**». È la i della slide 5, B_{jΔn} = (1 + r_n)^j = r̂_n^j, ∀j = 0, ..., n, dove «r_n è il tasso di interesse lungo l'orizzonte temporale I_j, ∀n»; per la slide 7, 1 + r_n = e^(rΔ_n). Il docente: B «si sviluppa sul sotto intervallo temporale j delta n», è «1 più il tasso di interesse» elevato alla j, e 1 + r_n si scrive «r cappello di n», il fattore di capitalizzazione (transcript [00:01:36]–[00:01:56]). Distrattori del test: «B_{jΔn}=(1+r_n)^(j+2)» cambia l'esponente, e al tempo 0 B varrebbe (1+r_n)² invece di 1; «B_{(j+n)Δn}=ξ_{n,j+1}B_j» copia su B la formula di S, ma B è privo di rischio e non dipende da ξ; «S_{(j+n)Δn}=Bξ_{n,j+1}» comincia con S, cioè parla di un altro oggetto, e si scarta a prescindere.
**Opzione:** B_{jΔn}=(1+r_n)^j
**Distrattori:**
- B_{jΔn}=(1+r_n)^(j+2)
- B_{(j+n)Δn}=ξ_{n,j+1}B_j
- S_{(j+n)Δn}=Bξ_{n,j+1}

**D:** ⚠️ Come è definito il comportamento di u_n nel modello CRR in versione asintotica, secondo il test della lezione 11 (domanda 4)?
**R:** «**u_n=exp(σΔ_n^(1/2))**», cioè u_n = e^(σ√Δ_n), la seconda voce della slide 7: «Inoltre, sia il comportamento asintotico di r_n, u_n, d_n definito come segue, con r ≥ 0 e σ > 0». La chiave non è alla lettera, ma è la stessa formula. Il docente: «u_n è uguale all'esponenziale di sigma radice delta n» (transcript [00:04:00]). Distrattori del test: «u_n=exp(σΔ_n)» toglie la radice quadrata, la stessa trappola della domanda 4 del test della lezione 10, exp(σ . dt) al posto di exp(σ . dt^(1/2)); nelle slide la radice sta in u_n, non nel tasso, 1 + r_n = e^(rΔ_n). «u_{jΔn}=(1+r_n)^j» applica a u la formula di B, la chiave della domanda 3; «u_{(j+n)Δn}=Bξ_{n,j+1}» applica a u la D della domanda 3. Il pool è condiviso: un'opzione che definisce un oggetto con la formula di un altro si scarta.
**Opzione:** u_n=exp(σΔ_n^(1/2))
**Distrattori:**
- u_{jΔn}=(1+r_n)^j
- u_n=exp(σΔ_n)
- u_{(j+n)Δn}=Bξ_{n,j+1}

**D:** ⚠️ Come è definito il comportamento di d_n nel modello CRR in versione asintotica, secondo il test della lezione 11 (domanda 5)?
**R:** «**d_n=u_n^(-1)**», alla lettera la terza voce della slide 7. Il docente: «d_n non è altro che 1 su u_n» (transcript [00:04:00]): è la d=1/u della lezione 10, con l'indice n. Nella dimostrazione le slide 11, 14, 24 e 37 sostituiscono d_n con e^(-σ√Δ_n), e la slide 48 scrive ln d_n = - ln u_n. Distrattori del test: «d_n=exp(σΔ_n)» perde sia la radice sia il segno meno, e con σ > 0 darebbe d_n > 1, mentre d_n = u_n^(-1) è minore di 1; «d_{jΔn}=(1+r_n)^j» è la formula di B; «d_{(j+n)Δn}=-Bξ_{n,j+1}» è la D della domanda 4 con un meno davanti.
**Opzione:** d_n=u_n^(-1)
**Distrattori:**
- d_{jΔn}=(1+r_n)^j
- d_n=exp(σΔ_n)
- d_{(j+n)Δn}=-Bξ_{n,j+1}

## Lezione 12 — Pricing 5 - Modello Black-Scholes-Merton Soluzione asintotica 2

**D:** ⚠️ Nel secondo limite della soluzione asintotica, quale probabilità si riconosce nella sommatoria Σ_{j=a_n(t)}^{m_n(t)} (m_n(t) su j) p∗^j (1 - p∗)^(m_n(t)-j), e come è distribuita λ_n?
**R:** Slide 3: «si può riconoscere la probabilità P{a_n(t) ≤ λ_n ≤ m_n(t)} dove λ_n è una variabile casuale distribuita come: λ_n ~ bin(p∗, m_n(t))». Il docente: è la sommatoria «che andremo a portare al limite per arrivare ad N(d_2)», e λ_n «ha i parametri p star e m n di t» ([00:00:55]–[00:01:24]). ⚠️ Il parametro è p∗, non p∗u_n/r̂_n: quella è la γ_n del primo limite, che porta a N(d_1) (deck 11, slide 53). Il docente chiama «gamma» anche la λ_n di questa lezione: vale la slide, che scrive l'asterisco in pedice, p_∗.
**Opzione:** P{a_n(t) ≤ λ_n ≤ m_n(t)}, con λ_n ~ bin(p∗, m_n(t))
**Distrattori:**
- P{a_n(t) ≤ λ_n ≤ m_n(t)}, con λ_n ~ bin(p∗u_n/r̂_n, m_n(t))
- V_t = φ^1_t S_t + φ^2_t B_t, con φ^1_t numero di azioni detenute al tempo t e φ^2_t liquidità depositata al tasso di interesse r
- μ è il tasso di rendimento di S, σ il tasso di diffusione di S, W_t con t ∈ [0, T] un moto browniano standard unidimensionale

**D:** ⚠️ Come si standardizza la variabile casuale λ_n per applicare il Teorema del Limite Centrale, secondo la slide 4 della lezione 12?
**R:** Slide 4: «Standardizzando la variabile casuale λ̃_n, si applica il Teorema del Limite Centrale: λ̃_n = (λ_n - E_p(λ_n))/√Var(λ_n) = (λ_n - p∗m_n(t))/√(p∗(1 - p∗)m_n(t)) ∼^a N(0,1)», con la a sopra la tilde. Il docente: «Per standardizzare il processo è noto, si sottrae il valore atteso e si divide per la deviazione standard», e la binomiale standardizzata «tende ad una normale standardizzata 0,1» ([00:01:23]). ⚠️ Al denominatore c'è la **radice** della varianza della binomiale, p∗(1 - p∗)m_n(t): si divide per la deviazione standard, non per la varianza.
**Opzione:** λ̃_n = (λ_n - p∗m_n(t))/√(p∗(1 - p∗)m_n(t)), che per il Teorema del Limite Centrale tende a una N(0,1)
**Distrattori:**
- λ̃_n = (λ_n - p∗m_n(t))/(p∗(1 - p∗)m_n(t)), che per il Teorema del Limite Centrale tende a una N(0,1)
- S_t = S_0 + ∫_0^t μS_u du + ∫_0^t σS_u dW_u, ∀t ∈ [0,T]
- E_p(S_u | ℑ_t) = S_t · e^(μ(u-t))

**D:** ⚠️ Che cosa occorre studiare, secondo la slide 5 della lezione 12, per determinare la probabilità asintotica dell'espressione (45)?
**R:** Slide 5: la (45) riscrive P{a_n(t) ≤ λ_n ≤ m_n(t)} come P{(a_n(t) - p∗m_n(t))/√(p∗(1 - p∗)m_n(t)) ≤ λ̃_n ≤ (m_n(t) - p∗m_n(t))/√(p∗(1 - p∗)m_n(t))}; «Al fine di determinare la probabilità asintotica P^a riportata nell'espressione (45), è necessario studiare il limite agli estremi dell'intervallo, per n → ∞». Il docente: gli estremi sono «standardizzati sottraendo il valore atteso e dividendo per la deviazione standard», e «studiamo il limite degli estremi» ([00:02:45]). ⚠️ Il limite è per n → ∞, che equivale a Δ_n → 0 (slide 16): non per n → 0.
**Opzione:** Il limite agli estremi dell'intervallo della (45), (a_n(t) - p∗m_n(t))/√(p∗(1 - p∗)m_n(t)) e (m_n(t) - p∗m_n(t))/√(p∗(1 - p∗)m_n(t)), per n → ∞
**Distrattori:**
- Il limite agli estremi dell'intervallo della (45), (a_n(t) - p∗m_n(t))/√(p∗(1 - p∗)m_n(t)) e (m_n(t) - p∗m_n(t))/√(p∗(1 - p∗)m_n(t)), per n → 0
- S_u = S_t · e^((μ - σ²/2)dt - σdW_t), per u > t
- S è un processo markoviano: il futuro è basato solo sul presente e ci si può dimenticare del passato.

**D:** ⚠️ Quanto vale il «primo limite» delle slide 6–7 della lezione 12, quello dell'estremo superiore dell'intervallo (formula 46), e perché?
**R:** Slide 7: lim_{n→∞} (m_n(t) - p∗m_n(t))/√(p∗(1 - p∗)m_n(t)) = lim m_n(t)(1 - p∗)/√(p∗(1 - p∗)m_n(t)); «semplificando (1 - p∗)»: = lim √((1 - p∗) m_n(t) (p∗)^(-1)) = lim √((1 - p∗) ((T-t)n/T) (p∗)^(-1)) = ∞ (46). Il docente: il limite «per n che tende all'infinito non può che valere infinito» ([00:03:41]). ⚠️ m_n(t) = (T-t)n/T cresce con n, quindi l'estremo superiore va all'infinito: è il ∞ di P^a{… ≤ λ̃_n < ∞} (slide 12).
**Opzione:** ∞, perché semplificando (1 - p∗) resta √((1 - p∗)((T-t)n/T)(p∗)^(-1)), che cresce con n
**Distrattori:**
- 0, perché semplificando (1 - p∗) resta √((1 - p∗)(T/((T-t)n))(p∗)^(-1)), che decresce con n
- Il comportamento del prezzo di qualsiasi strumento finanziario: permette di simularne la traiettoria utilizzando solo l'informazione disponibile al tempo corrente.
- Perché S_t è per definizione adattato a sè stesso: le informazioni di S_t rispetto a S_t sono le medesime.

**D:** ⚠️ Nella dimostrazione del secondo limite, quello che porta a N(d_2), che cosa calcolano il «primo limite» e il «secondo limite» delle slide 6–11?
**R:** I limiti dei due estremi della (45). Il «primo limite» (slide 6–7) è quello dell'estremo superiore, (m_n(t) - p∗m_n(t))/√(p∗(1 - p∗)m_n(t)) → ∞ (46); il «secondo limite» (slide 8–11) quello dell'estremo inferiore, (a_n(t) - p∗m_n(t))/√(p∗(1 - p∗)m_n(t)) → (ln(K/S_t) - (r - σ²/2)(T-t))/(σ√(T-t)) (47). Il docente: il primo «non può che valere infinito» ([00:03:41]); «Il secondo limite può essere invece determinato come a meno p star m» ([00:04:13]). ⚠️ La numerazione è annidata: nella lezione il «secondo limite» è anche quello della sommatoria che tende a N(d_2) ([00:00:04]), e il «terzo limite» quello del fattore di sconto ([00:08:07]).
**Opzione:** Il primo è il limite dell'estremo superiore, che tende a ∞ (46); il secondo quello dell'estremo inferiore, che tende a (ln(K/S_t) - (r - σ²/2)(T-t))/(σ√(T-t)) (47).
**Distrattori:**
- Il primo è il limite dell'estremo inferiore, che tende a (ln(K/S_t) - (r - σ²/2)(T-t))/(σ√(T-t)) (46); il secondo quello dell'estremo superiore, che tende a ∞ (47).
- Con la funzione di Excel casuale e quella della normale standardizzata, fissati un valore di μ e un valore di σ.
- e^((u-t)σ²/2), con la funzione generatrice dei momenti della normale, φ(t) = E(e^(tx)) = e^(σ²t²/2 + μt), e W_u - W_t ~ N(0, u - t)

**D:** ⚠️ A che cosa tende, per n → ∞, l'estremo inferiore (a_n(t) - p∗m_n(t))/√(p∗(1 - p∗)m_n(t)) della (45), secondo la formula 47 della lezione 12?
**R:** Slide 11: «Sfruttando i risultati riportati nelle espressioni (36) e (37) si ottiene: = (ln(K/S_t) - (r - σ²/2)(T-t))/(σ√(T-t))», e dunque il limite (47). Prima (slide 9–10) si sostituisce a_n(t) con l'espressione (41), (ln(K/S_t) + m_n(t)σ√Δ_n)/(2σ√Δ_n), si decompone il limite e con la (40) il numeratore diventa ln(K/S_t) + σ(T-t)(σ/2 - r/σ). Il docente arriva al logaritmo di K su S meno (r - σ²/2)(T - t), diviso σ√(T - t) ([00:05:26]). ⚠️ Nel numeratore c'è r - σ²/2: con r + σ²/2 è la (44) della lezione 11, l'estremo del primo limite (deck 11, slide 66).
**Opzione:** (ln(K/S_t) - (r - σ²/2)(T-t))/(σ√(T-t))
**Distrattori:**
- (ln(K/S_t) - (r + σ²/2)(T-t))/(σ√(T-t))
- max(K-A1,0) e max(K-A2n+1,0)
- 1/u

**D:** ⚠️ Quale grandezza riconosce il docente della lezione 12 nell'estremo inferiore della probabilità asintotica, e con quale definizione (slide 13)?
**R:** Slide 13: «utilizzando la definizione di d_2 data nell'espressione (35) la formula precedente può essere riscritta come segue: P^a{-d_2 ≤ λ̃_n < ∞}». Con d_2 = (ln(S_t/K) + (r - σ²/2)(T-t))/(σ√(T-t)) (35, slide 17), l'estremo (ln(K/S_t) - (r - σ²/2)(T-t))/(σ√(T-t)) è -d_2, perché ln(K/S_t) = -ln(S_t/K) (il passaggio sul logaritmo non è nella slide). Il docente: «Guarda caso, riscontriamo nel termine di sinistra proprio la definizione di meno d_2» ([00:06:23]). ⚠️ È -d_2, non -d_1: -d_1, con r + σ²/2 (34), è l'estremo del primo limite della lezione 11.
**Opzione:** -d_2, con d_2 = (ln(S_t/K) + (r - σ²/2)(T-t))/(σ√(T-t)): la probabilità asintotica diventa P^a{-d_2 ≤ λ̃_n < ∞}
**Distrattori:**
- -d_1, con d_1 = (ln(S_t/K) + (r + σ²/2)(T-t))/(σ√(T-t)): la probabilità asintotica diventa P^a{-d_1 ≤ λ̃_n < ∞}
- dS = (dS/dt)dt + (dS/dW)dW_t + (1/2)(d²S/dW²)dt, con dS/dt = (μ - σ²/2)S, dS/dW = σS e d²S/dW² = σ²S
- ln(S_t/S_s) ~ N((μ - σ²/2)dt, σ√dt), dove dt = (t - s)

**D:** ⚠️ Come si passa da P^a{-d_2 ≤ λ̃_n < ∞} a N(d_2) nella lezione 12 (slide 14–15)?
**R:** Slide 14: «Di nuovo, per il teorema del Limite Centrale λ̃_n ∼^a N(0,1): P^a{-d_2 ≤ λ̃_n < ∞} = (1/√(2π)) ∫_{-d_2}^{∞} e^(-λ̃²/2) dλ̃»; slide 15: «utilizzando le proprietà di simmetria della distribuzione di probabilità normale: P^a{-d_2 ≤ λ̃_n < ∞} = P^a{λ̃_n < d_2} = (1/√(2π)) ∫_{-∞}^{d_2} e^(-λ̃²/2) dλ̃ = N(d_2)», e quindi il limite della sommatoria è N(d_2), Q.E.D. Il docente: la probabilità «tra meno d_2 e infinito» è la probabilità di essere «minore di d_2» ([00:07:21]). ⚠️ L'estremo è -d_2, ma per simmetria il risultato è N(d_2), non N(-d_2).
**Opzione:** Con il Teorema del Limite Centrale e la simmetria della normale: P^a{-d_2 ≤ λ̃_n < ∞} = P^a{λ̃_n < d_2} = N(d_2)
**Distrattori:**
- Con il Teorema del Limite Centrale e la simmetria della normale: P^a{-d_2 ≤ λ̃_n < ∞} = P^a{λ̃_n < -d_2} = N(-d_2)
- dS = μSdt + σSdW: il termine (1/2)σ²Sdt della derivata seconda cancella il -σ²/2 del termine in dt.
- Il drift e la volatilità dei rendimenti logaritmici di S, rispettivamente; la figura mostra ln(S_t/S_{t-1}) nel tempo, con pendenza μ - σ²/2.

**D:** ⚠️ A che cosa tende il terzo limite della soluzione asintotica, lim 1/r̂_n^(m_n(t)), e come si calcola (slide 16 della lezione 12)?
**R:** Slide 16: «Il terzo limite è determinato come segue. lim 1/r̂_n^(m_n(t)) = lim r̂_n^(-m_n(t)) = lim (1 + r_n)^(-m_n(t)) = dalla definizione: lim_{Δ_n→0} e^(-rΔ_n m_n(t)) = lim_{Δ_n→0} e^(-rΔ_n (T-t)/Δ_n) = e^(-r(T-t))», Q.E.D. Il docente: questo limite «ci consente di riesprimere il fattore di capitalizzazione o di sconto a seconda di come viene poi visto all'interno della formulazione finale, qui ovviamente uno sconto» ([00:09:10]). ⚠️ L'esponente è negativo: è un fattore di sconto. «Dalla definizione» rinvia a 1 + r_n = e^(rΔ_n) della lezione 11; Δ_n si semplifica perché m_n(t)Δ_n = T - t.
**Opzione:** e^(-r(T-t)), perché (1 + r_n)^(-m_n(t)) tende a e^(-rΔ_n m_n(t)) = e^(-rΔ_n (T-t)/Δ_n): è un fattore di sconto
**Distrattori:**
- e^(r(T-t)), perché (1 + r_n)^(m_n(t)) tende a e^(rΔ_n m_n(t)) = e^(rΔ_n (T-t)/Δ_n): è un fattore di capitalizzazione
- S è un processo markoviano: il futuro è basato solo sul presente e ci si può dimenticare del passato.
- S_t ~ LogN(S_s e^(μdt), S_s² e^(μdt) · (e^(σ²dt) - 1)), dove dt = (t - s)

**D:** ⚠️ Quanto vale, nel modello di Black-Scholes-Merton, il portafoglio di replicazione al tempo t (formula 48), e che cosa sono φ^1_t e φ^2_t?
**R:** Slide 19–20: «Al fine di costruire un portafoglio φ al tempo t = 0 che replica esattamente il pay-off dell'opzione al tempo T, si definisce la seguente strategia: φ = φ_t = (φ^1_t, φ^2_t). Il valore del portafoglio al tempo t è: V_t = φ^1_t S_t + φ^2_t B_t (48). Sia φ^1_t il numero di azioni detenute al tempo t, φ^2_t la liquidità depositata al tasso di interesse r. φ^1_t, φ^2_t sono processi stocastici sullo spazio di probabilità (Ω, ℑ, P)». Il docente: φ^1 «rappresenta il numero di azioni detenute» e φ^2 «la liquidità depositata al tasso di interesse» ([00:11:21]). ⚠️ φ^1_t moltiplica S, φ^2_t moltiplica B. Nelle lezioni 08 e 09 gli stessi ruoli erano di α e β.
**Opzione:** V_t = φ^1_t S_t + φ^2_t B_t, con φ^1_t numero di azioni detenute al tempo t e φ^2_t liquidità depositata al tasso di interesse r
**Distrattori:**
- V_t = φ^1_t S_t + φ^2_t B_t, con φ^1_t liquidità depositata al tasso di interesse r e φ^2_t numero di azioni detenute al tempo t
- λ̃_n = (λ_n - p∗m_n(t))/√(p∗(1 - p∗)m_n(t)), che per il Teorema del Limite Centrale tende a una N(0,1)
- μ è il tasso di rendimento di S, σ il tasso di diffusione di S, W_t con t ∈ [0, T] un moto browniano standard unidimensionale

**D:** ⚠️ Che cosa sono μ, σ e W_t nella dinamica del sottostante dS_t = μS_t dt + σS_t dW_t (formula 49 della lezione 12)?
**R:** Slide 21: «La dinamica del sottostante S è: dS_t = μS_t dt + σS_t dW_t (49) dove μ è il tasso di rendimento di S; σ è il tasso di diffusione di S; W_t dove t ∈ [0, T], è un Moto Browniano standard unidimensionale». Il docente: la dinamica è descritta da «un'equazione differenziale stocastica, il moto geometrico browniano», con mu «il tasso di rendimento del sottostante» e sigma «il cosiddetto tasso di diffusione del sottostante» ([00:12:08]–[00:12:21]). ⚠️ μ moltiplica dt, σ moltiplica dW_t. È il processo della lezione 07, dX_t = aX_t dt + bX_t dW_t, con μ e σ al posto di a e b.
**Opzione:** μ è il tasso di rendimento di S, σ il tasso di diffusione di S, W_t con t ∈ [0, T] un moto browniano standard unidimensionale
**Distrattori:**
- μ è il tasso di diffusione di S, σ il tasso di rendimento di S, W_t con t ∈ [0, T] un moto browniano standard unidimensionale
- Il limite agli estremi dell'intervallo della (45), (a_n(t) - p∗m_n(t))/√(p∗(1 - p∗)m_n(t)) e (m_n(t) - p∗m_n(t))/√(p∗(1 - p∗)m_n(t)), per n → ∞
- Un processo di Wiener generalizzato, quindi ln S_t - ln S_s ~ N((μ - σ²/2)dt, σ√dt)

**D:** ⚠️ Come si scrive la dinamica del sottostante (49) in forma di integrale stocastico di Itô, secondo la slide 22 della lezione 12?
**R:** Slide 22: «L'equazione (49) può essere espressa anche come un integrale stocastico di Itô ∀t ∈ [0,T]: S_t = S_0 + ∫_0^t μS_u du + ∫_0^t σS_u dW_u». Il docente: «L'equazione 49 può anche essere espressa nella forma dell'integrale stocastico di Itô per ogni t che appartiene a 0 T» ([00:12:53]). ⚠️ Il drift μS_u si integra in du, la diffusione σS_u in dW_u, come nella (49) μS_t moltiplica dt e σS_t moltiplica dW_t.
**Opzione:** S_t = S_0 + ∫_0^t μS_u du + ∫_0^t σS_u dW_u, ∀t ∈ [0,T]
**Distrattori:**
- S_t = S_0 + ∫_0^t μS_u dW_u + ∫_0^t σS_u du, ∀t ∈ [0,T]
- u_nS_0 e d_nS_0
- dV∗_t = φ^1_t dS∗_t: il termine in φ^2_t scompare, assorbito nello sconto

**D:** ⚠️ Qual è la soluzione (50) della dinamica del sottostante (49), per u > t, secondo il teorema della slide 23 della lezione 12?
**R:** Slide 23: «La soluzione dell'equazione differenziale stocastica (49) è data per u > t, dalla seguente espressione esplicita: S_u = S_t · e^((μ - σ²/2)dt - σdW_t) (50)». Il docente: s di u «è uguale ad s di t per l'esponenziale di mu meno sigma quadro mezzi di t meno sigma di w» ([00:13:25]). ⚠️ Nell'esponente c'è μ - σ²/2. ⚠️ La slide 23 e il docente hanno -σdW_t, ma le slide 25, 28–30 e 36 usano la stessa soluzione con +σdW_t, e con il + è scritta anche la (59) del processo scontato (slide 42): il deck non è coerente sul segno, e la dimostrazione deriva la forma con il +.
**Opzione:** S_u = S_t · e^((μ - σ²/2)dt - σdW_t), per u > t
**Distrattori:**
- S_u = S_t · e^((μ + σ²/2)dt - σdW_t), per u > t
- λ̃_n = (λ_n - p∗m_n(t))/√(p∗(1 - p∗)m_n(t)), che per il Teorema del Limite Centrale tende a una N(0,1)
- e^(-r(T-t)), perché (1 + r_n)^(-m_n(t)) tende a e^(-rΔ_n m_n(t)) = e^(-rΔ_n (T-t)/Δ_n): è un fattore di sconto

**D:** ⚠️ Che cosa descrive la soluzione (50) della lezione 12, e che cosa permette di fare (slide 23)?
**R:** Slide 23: la (50) «descrive il comportamento del prezzo di qualsiasi strumento finanziario. Utilizzando questa soluzione, è possibile simulare la traiettoria seguita da ogni strumento finanziario utilizzando solo l'informazione disponibile al tempo corrente (vedi figura)»; la figura della slide 24 mostra una ventina di traiettorie di S nel tempo. Il docente: noto il valore del sottostante al tempo t si può derivare «dal punto di vista random» il valore della traiettoria di S al tempo u ([00:13:25]). ⚠️ «solo» l'informazione al tempo corrente, non la storia dei prezzi: è coerente con la proprietà markoviana che la dimostrazione della (52) usa (slide 27).
**Opzione:** Il comportamento del prezzo di qualsiasi strumento finanziario: permette di simularne la traiettoria utilizzando solo l'informazione disponibile al tempo corrente.
**Distrattori:**
- Il comportamento del prezzo di qualsiasi strumento finanziario: permette di simularne la traiettoria utilizzando l'intera storia dei prezzi fino al tempo corrente.
- ∞, perché semplificando (1 - p∗) resta √((1 - p∗)((T-t)n/T)(p∗)^(-1)), che cresce con n
- S_t ~ LogN(S_s e^(μdt), S_s² e^(μdt) · (e^(σ²dt) - 1)), dove dt = (t - s)

**D:** Con quali funzioni di Excel il docente della lezione 12 ha costruito le traiettorie del sottostante della slide 24?
**R:** «In questo caso abbiamo rappresentato tramite un foglio Excel in maniera molto semplice, utilizzando la funzione di Excel casuale e la funzione di Excel della normale standardizzata, abbiamo riproiettato nel tempo, per vari u maggiore di t», e così, «fissato un valore di mu e un valore di sigma, l'andamento del sottostante» ([00:14:06]). Per il docente è «uno strumento molto potente», per verificare «dove andrà il sottostante che stiamo stimando» ([00:14:43]). È solo nel transcript: la slide 24 mostra le traiettorie senza dire come sono costruite.
**Opzione:** Con la funzione di Excel casuale e quella della normale standardizzata, fissati un valore di μ e un valore di σ.
**Distrattori:**
- Con la funzione di Excel casuale e quella della distribuzione binomiale, fissati un valore di μ e un valore di σ.
- Il primo è il limite dell'estremo superiore, che tende a ∞ (46); il secondo quello dell'estremo inferiore, che tende a (ln(K/S_t) - (r - σ²/2)(T-t))/(σ√(T-t)) (47).
- Con un risultato standard della teoria della probabilità: e^((μ - σ²/2 + σ²/2)dt) = e^(μdt), poi si moltiplica per S_s e per S_s²

**D:** ⚠️ Quale espressione (51) si ottiene applicando la formula di Itô alla (49), e quanto valgono le derivate (slide 25 della lezione 12)?
**R:** Slide 25: «Applicando la formula di Itô all'espressione (49), si ottiene: dS = (dS/dt)dt + (dS/dW)dW_t + (1/2)(d²S/dW²)dt (51)»; con S = f(t,x) = Se^((μ - σ²/2)dt + σdW_t): dS/dt = (μ - σ²/2)S, dS/dW = σS, d²S/dW² = σ²S. Il docente: la prima derivata è «mu men sigma quadro mezzi in S», la derivata in W «è sigma S», la seconda è «sigma quadro S» ([00:14:52]). ⚠️ La derivata rispetto al tempo ha μ - σ²/2, non μ. Qui la soluzione ha +σdW_t, mentre la (50) della slide 23 ha -σdW_t.
**Opzione:** dS = (dS/dt)dt + (dS/dW)dW_t + (1/2)(d²S/dW²)dt, con dS/dt = (μ - σ²/2)S, dS/dW = σS e d²S/dW² = σ²S
**Distrattori:**
- dS = (dS/dt)dt + (dS/dW)dW_t + (1/2)(d²S/dW²)dt, con dS/dt = μS, dS/dW = σS e d²S/dW² = σ²S
- (ln(K/S_t) - (r - σ²/2)(T-t))/(σ√(T-t))
- dB_t = rB_t dt, con soluzione B_t = e^(rt): un processo deterministico, il bond privo di rischio

**D:** ⚠️ Che cosa si ottiene sostituendo le derivate nella (51), e perché scompare il -σ²/2 (slide 26 della lezione 12)?
**R:** Slide 26: «Sostituendo le derivate all'interno dell'equazione (51): dS = (μ - σ²/2)Sdt + σdW_t + (1/2)σ²Sdt semplificando: dS = μSdt + σSdW». Il termine (1/2)σ²Sdt della derivata seconda cancella il -σ²/2 del termine in dt. Il docente: sostituendo, dS risulta uguale a μS dt più σS dW, e il teorema è dimostrato ([00:15:22]). ⚠️ Il termine della derivata seconda non si trascura: è quello che riporta il drift a μ. La slide scrive σdW_t senza la S nella riga della sostituzione: è un refuso, la riga dopo ha σSdW.
**Opzione:** dS = μSdt + σSdW: il termine (1/2)σ²Sdt della derivata seconda cancella il -σ²/2 del termine in dt.
**Distrattori:**
- dS = (μ - σ²/2)Sdt + σSdW: il termine (1/2)σ²Sdt della derivata seconda è un infinitesimo di ordine superiore e si trascura.
- -d_2, con d_2 = (ln(S_t/K) + (r - σ²/2)(T-t))/(σ√(T-t)): la probabilità asintotica diventa P^a{-d_2 ≤ λ̃_n < ∞}
- Se V_t(φ) = φ^1_t S_t + φ^2_t B_t soddisfa V_t(φ) = V_0(φ) + ∫_0^t φ^1_u dS_u + ∫_0^t φ^2_u dB_u, ∀t ∈ [0,T]

**D:** ⚠️ Quanto vale il valore atteso condizionale del sottostante sotto la misura di probabilità p, secondo la proposizione (52) della lezione 12?
**R:** Slide 27: «Il valore atteso condizionale sotto la misura di probabilità p del processo stocastico S è uguale a: E_p(S_u | ℑ_t) = S_t · e^(μ(u-t)) (52)»; la slide 33 chiude la dimostrazione con E_p(S_u | F_t) = S_t · e^(μ(u-t)), Q.E.D. Il docente: semplificando si ottiene S_t per e elevato a μ(u - t), che è la tesi della proposizione ([00:19:18]). ⚠️ Nel valore atteso c'è μ, non μ - σ²/2: il -σ²/2 dell'esponente si cancella con il +σ²/2 della funzione generatrice dei momenti (slide 33).
**Opzione:** E_p(S_u | ℑ_t) = S_t · e^(μ(u-t))
**Distrattori:**
- E_p(S_u | ℑ_t) = S_t · e^((μ - σ²/2)(u-t))
- S∗_t ≜ S_t/B_t e V∗_t ≜ V_t/B_t: S e V scontati del valore finanziario del tempo, cioè del processo B
- -d_2, con d_2 = (ln(S_t/K) + (r - σ²/2)(T-t))/(σ√(T-t)): la probabilità asintotica diventa P^a{-d_2 ≤ λ̃_n < ∞}

**D:** ⚠️ Nella dimostrazione della (52), quale proprietà permette di passare da E_p(S_u | S_t, S_{t-1}, S_{t-2}, ....., S_0) a E_p(S_u | S_t)?
**R:** Slide 27: «Data l'equivalenza tra le filtrazioni ℑ_t = ℑ^S_t… dalla definizione di ℑ^S_t: = E_p(S_u | S_t, S_{t-1}, S_{t-2}, ....., S_0) = e considerando che S è un processo markoviano: = E_p(S_u | S_t)». Il docente: «S è un processo markoviano, ovvero il futuro è basato solo sul presente e ci si può dimenticare del passato» ([00:16:54]). ⚠️ È la proprietà di Markov, non quella di martingala, che riguarda il valore atteso (lezione 06). Il passo dopo, portare S_t fuori dal valore atteso, si giustifica invece con S_t «per definizione adattato a sè stesso» (slide 28).
**Opzione:** S è un processo markoviano: il futuro è basato solo sul presente e ci si può dimenticare del passato.
**Distrattori:**
- S è una martingala: il futuro è basato solo sul presente e ci si può dimenticare del passato.
- ln(S_t/S_s) ~ N((μ - σ²/2)dt, σ√dt), dove dt = (t - s)
- Se V_t(φ) = φ^1_t S_t + φ^2_t B_t soddisfa V_t(φ) = V_0(φ) + ∫_0^t φ^1_u dS_u + ∫_0^t φ^2_u dB_u, ∀t ∈ [0,T]

**D:** ⚠️ Nella dimostrazione della (52), perché S_t si può portare fuori dal valore atteso E_p(S_t · e^((μ - σ²/2)dt + σdW_t) | S_t)?
**R:** Slide 28: «utilizzando l'spressione (51) si ottiene: = E_p(S_t · e^((μ - σ²/2)dt + σdW_t) | S_t) = poichè S_t è per definizione adattato a sè stesso». Il docente: «poiché S di t è adattato a se stesso, cioè le informazioni di S di t rispetto ad S di t sono le medesime, quindi possiamo tranquillamente portarlo fuori dal valore atteso» ([00:17:10]). ⚠️ La proprietà markoviana serve al passo prima, per togliere S_{t-1}, …, S_0 dal condizionamento (slide 27). La slide cita la (51), ma la soluzione sostituita è la (50).
**Opzione:** Perché S_t è per definizione adattato a sè stesso: le informazioni di S_t rispetto a S_t sono le medesime.
**Distrattori:**
- Perché S è un processo markoviano: le informazioni di S_t rispetto a S_t sono le medesime.
- Il drift e la volatilità dei rendimenti logaritmici di S, rispettivamente; la figura mostra ln(S_t/S_{t-1}) nel tempo, con pendenza μ - σ²/2.
- Che entrambi gli integrali convergano nello spazio L_2: P{∫_0^T |φ^1_u|² dS_u < ∞} = 1 e P{∫_0^T |φ^2_u|² dB_u < ∞} = 1

**D:** ⚠️ Quanto vale E_p(e^(σ(W_u - W_t))) nella dimostrazione della (52), e con quale strumento si calcola (slide 32–33 della lezione 12)?
**R:** Slide 32: «richiamando la funzione generatrice dei momenti φ(t) di una variabile casuale normale X ~ N(μ, σ²), i.e.: φ(t) = E(e^(tx)) = e^(σ²t²/2 + μt)»; slide 33: «poichè: W_u - W_t ~ N(0, u - t) si ottiene: = S_t · e^((μ - σ²/2)(u-t)) · e^((u-t)σ²/2)», cioè E_p(e^(σ(W_u - W_t))) = e^((u-t)σ²/2). Il docente: «x distribuito normale mu sigma quadro», e W_u - W_t «è normale con media zero e varianza» u - t ([00:18:14]–[00:19:18]). ⚠️ Qui il secondo parametro della normale è la **varianza**, u - t, non la deviazione standard. Prima il condizionamento si toglie perché (W_u - W_t) è indipendente da S_t (slide 30), e e^((μ - σ²/2)(u-t)) esce perché è una costante (slide 31).
**Opzione:** e^((u-t)σ²/2), con la funzione generatrice dei momenti della normale, φ(t) = E(e^(tx)) = e^(σ²t²/2 + μt), e W_u - W_t ~ N(0, u - t)
**Distrattori:**
- e^(-(u-t)σ²/2), con la funzione generatrice dei momenti della normale, φ(t) = E(e^(tx)) = e^(σ²t²/2 + μt), e W_u - W_t ~ N(0, u - t)
- Un processo di Wiener generalizzato, quindi ln S_t - ln S_s ~ N((μ - σ²/2)dt, σ√dt)
- S∗_t ≜ S_t/B_t e V∗_t ≜ V_t/B_t: S e V scontati del valore finanziario del tempo, cioè del processo B

**D:** In che cosa differisce la notazione della normale fra la dimostrazione della (52) e il corollario (53) della lezione 12?
**R:** Nella dimostrazione della (52) il secondo parametro è la **varianza**: «X ~ N(μ, σ²)» (slide 32) e «W_u - W_t ~ N(0, u - t)» (slide 33); il docente dice «varianza» ([00:19:18]). Nel corollario (53) è la **deviazione standard**: ln(S_t/S_s) ~ N((μ - σ²/2)dt, σ√dt) (slide 34), e il docente dice «deviazione standard sigma radice di delta t» ([00:21:42]). Lo stesso deck usa le due convenzioni, come il deck 06: (W_t - W_s) ~ N(0, (t - s)) nelle slide 28–29, dW_t ~ N(0, √dt) nella slide 37.

**D:** ⚠️ Come sono distribuiti i logaritmi naturali dei rendimenti di S nel modello di Black-Scholes-Merton, secondo il corollario (53) della lezione 12?
**R:** Slide 34: «I logaritmi naturali dei rendimenti di S sono distribuiti come segue: ln(S_t/S_s) ~ N((μ - σ²/2)dt, σ√dt) (53) dove dt = (t - s)»; la slide scrive ∽. Il docente: il secondo parametro è la «diffusione o deviazione standard sigma radice di delta t» ([00:21:42]). ⚠️ La media ha μ - σ²/2, non μ; il secondo parametro è la deviazione standard σ√dt. È la (105) della lezione 07, ln(X_t/X_{t-dt}) ~ N((a - b²/2)dt, b√dt), con μ e σ al posto di a e b; è la chiave della domanda 3 del test.
**Opzione:** ln(S_t/S_s) ~ N((μ - σ²/2)dt, σ√dt), dove dt = (t - s)
**Distrattori:**
- ln(S_t/S_s) ~ N(μdt, σ√dt), dove dt = (t - s)
- Con il Teorema del Limite Centrale e la simmetria della normale: P^a{-d_2 ≤ λ̃_n < ∞} = P^a{λ̃_n < d_2} = N(d_2)
- Che entrambi gli integrali convergano nello spazio L_2: P{∫_0^T |φ^1_u|² dS_u < ∞} = 1 e P{∫_0^T |φ^2_u|² dB_u < ∞} = 1

**D:** ⚠️ Come chiama la slide 34 della lezione 12 i parametri μ e σ rispetto ai rendimenti logaritmici di S, e che cosa mostra la figura della slide 35?
**R:** Slide 34: «Graficamente, i parametri μ e σ possono essere considerati come il "drift" e la volatilità dei rendimenti logaritmici di S rispettivamente: (vedi figura)». La figura della slide 35 ha in ordinata ln(S_t/S_{t-1}), in ascissa il tempo, una retta di pendenza μ - σ²/2 e le campane della distribuzione. Il docente: «il drift è proprio mu men sigma quadro mezzi», e le campane rappresentano la media e «la diffusione del processo che è appunto data da sigma» ([00:20:15]–[00:20:50]). ⚠️ Il testo della slide chiama drift μ, la figura e il docente μ - σ²/2: all'esame vale la formula letterale della slide. Il drift è il primo, la volatilità il secondo.
**Opzione:** Il drift e la volatilità dei rendimenti logaritmici di S, rispettivamente; la figura mostra ln(S_t/S_{t-1}) nel tempo, con pendenza μ - σ²/2.
**Distrattori:**
- La volatilità e il drift dei rendimenti logaritmici di S, rispettivamente; la figura mostra ln(S_t/S_{t-1}) nel tempo, con pendenza μ - σ²/2.
- dS∗_t = (μ - r)S∗_t dt + σS∗_t dW_t, con soluzione S∗_u = S∗_t · e^((μ - r - σ²/2)dt + σdW_t)
- Con il Teorema del Limite Centrale e la simmetria della normale: P^a{-d_2 ≤ λ̃_n < ∞} = P^a{λ̃_n < d_2} = N(d_2)

**D:** ⚠️ Che tipo di processo è ln S_t - ln S_s = (μ - σ²/2)dt + σdW_t, nella dimostrazione del corollario (53) della lezione 12?
**R:** Slide 36–37: «Il logaritmo della soluzione (50) è calcolato: ln S_t = ln S_s + (μ - σ²/2)dt + σdW_t; ln S_t - ln S_s = (μ - σ²/2)dt + σdW_t. Questo è un processo di Wiener generalizzato. Ne discende: ln S_t - ln S_s ~ N((μ - σ²/2)dt, σ√dt)», e per le proprietà del logaritmo la (53). Il docente: il processo ottenuto «non è altro che un processo di Wiener generalizzato» ([00:21:42]). ⚠️ È il processo di Wiener generalizzato dX = a dt + b dW_t della lezione 06 (slide 37), con a = μ - σ²/2 e b = σ, non un moto geometrico browniano: i coefficienti non moltiplicano il processo. Il logaritmo della (50) è scritto con +σdW_t.
**Opzione:** Un processo di Wiener generalizzato, quindi ln S_t - ln S_s ~ N((μ - σ²/2)dt, σ√dt)
**Distrattori:**
- Un moto geometrico browniano, quindi ln S_t - ln S_s ~ N((μ - σ²/2)dt, σ√dt)
- dV∗_t = φ^1_t dS∗_t: il termine in φ^2_t scompare, assorbito nello sconto
- dS = (dS/dt)dt + (dS/dW)dW_t + (1/2)(d²S/dW²)dt, con dS/dt = (μ - σ²/2)S, dS/dW = σS e d²S/dW² = σ²S

**D:** ⚠️ Come è distribuito il sottostante S_t nel modello di Black-Scholes-Merton, secondo il corollario della slide 38 della lezione 12?
**R:** Slide 38: «S è distribuito come segue, i.e.: S_t ~ LogN(S_s e^(μdt), S_s² e^(μdt) · (e^(σ²dt) - 1)) dove dt = (t - s)». Il docente legge i due parametri come la media e «la deviazione standard» ([00:22:14]). ⚠️ S_t è **lognormale**; normale è il logaritmo dei rendimenti (53). ⚠️ La slide scrive e^(μdt) anche nel secondo parametro. ℹ️ Integrazione (non dai materiali del corso): nei manuali la varianza della lognormale è S_s² e^(2μdt) · (e^(σ²dt) - 1), con 2μdt. All'esame vale la formula della slide, che è anche la chiave della domanda 4 del test.
**Opzione:** S_t ~ LogN(S_s e^(μdt), S_s² e^(μdt) · (e^(σ²dt) - 1)), dove dt = (t - s)
**Distrattori:**
- S_t ~ N(S_s e^(μdt), S_s² e^(μdt) · (e^(σ²dt) - 1)), dove dt = (t - s)
- V_t = φ^1_t S_t + φ^2_t B_t, con φ^1_t numero di azioni detenute al tempo t e φ^2_t liquidità depositata al tasso di interesse r
- dS = μSdt + σSdW: il termine (1/2)σ²Sdt della derivata seconda cancella il -σ²/2 del termine in dt.

**D:** ⚠️ Come si passa dalla (53) ai parametri della lognormale di S_t/S_s, e perché vi compare e^(μdt) (slide 38 della lezione 12)?
**R:** Slide 38: «Richiamando un risultato standard nella teoria della probabilità, è immediato trasformare la relazione nell'espressione (53) nella: S_t/S_s ~ LogN(e^((μ - σ²/2 + σ²/2)dt), e^((μ - σ²/2 + σ²/2)dt) · (e^(σ²dt) - 1)) quindi: S_t/S_s ~ LogN(e^(μdt), e^(μdt) · (e^(σ²dt) - 1)) ne discende: S_t ~ LogN(S_s e^(μdt), S_s² e^(μdt) · (e^(σ²dt) - 1))». Il docente legge la media come l'esponenziale di μ meno sigma quadro mezzi più sigma quadro mezzi per dt ([00:22:14]). ⚠️ Il +σ²/2 del risultato standard cancella il -σ²/2 della (53): il parametro della lognormale ha μ, quello della normale μ - σ²/2. Passando da S_t/S_s a S_t, il primo parametro si moltiplica per S_s, il secondo per S_s².
**Opzione:** Con un risultato standard della teoria della probabilità: e^((μ - σ²/2 + σ²/2)dt) = e^(μdt), poi si moltiplica per S_s e per S_s²
**Distrattori:**
- Con un risultato standard della teoria della probabilità: e^((μ - σ²/2 - σ²/2)dt) = e^((μ - σ²)dt), poi si moltiplica per S_s e per S_s²
- dS∗_t = (μ - r)S∗_t dt + σS∗_t dW_t, con soluzione S∗_u = S∗_t · e^((μ - r - σ²/2)dt + σdW_t)
- dB_t = rB_t dt, con soluzione B_t = e^(rt): un processo deterministico, il bond privo di rischio

**D:** ⚠️ Qual è la dinamica del processo B nel modello di Black-Scholes-Merton, e quale soluzione ha (formule 54 e 55 della lezione 12)?
**R:** Slide 39: «La dinamica del processo B ∀t ∈ [0,T] è data da: dB_t = rB_t dt (54) equazione differenziale che ha la seguente soluzione: B_t = e^(rt) (55)». Il docente: «db non è altro che rb dt» ([00:23:32]), con soluzione «b uguale alla esponenziale di r dt» ([00:23:37]); poi parla del «processo stocastico di S e il processo deterministico di B» e del «bond privo di rischio, cioè il valore del tempo» ([00:23:47]). ⚠️ In dB_t non c'è un termine in dW_t, e l'esponente è positivo: B capitalizza. Nel modello di Cox-Ross-Rubinstein era B_t = (1 + r)^t = r̂^t (lezione 09).
**Opzione:** dB_t = rB_t dt, con soluzione B_t = e^(rt): un processo deterministico, il bond privo di rischio
**Distrattori:**
- dB_t = rB_t dt, con soluzione B_t = e^(-rt): un processo deterministico, il bond privo di rischio
- Perché S_t è per definizione adattato a sè stesso: le informazioni di S_t rispetto a S_t sono le medesime.
- Con un risultato standard della teoria della probabilità: e^((μ - σ²/2 + σ²/2)dt) = e^(μdt), poi si moltiplica per S_s e per S_s²

**D:** ⚠️ Quando una strategia φ_t si dice auto-finanziante, secondo la definizione della slide 40 della lezione 12 (formule 56 e 57)?
**R:** Slide 40: «Una strategia φ_t può essere definita auto-finanziante, se il valore del portafoglio V(φ), ∀t ∈ [0,T], i.e.: V_t(φ) = φ^1_t S_t + φ^2_t B_t (56) soddisfa la seguente relazione: V_t(φ) = V_0(φ) + ∫_0^t φ^1_u dS_u + ∫_0^t φ^2_u dB_u (57)». Il docente: il valore del portafoglio «non è altro che V0, cioè il valore iniziale, più l'integrale tra 0 e t di φ1 in dS» più l'integrale di φ2 in dB ([00:23:47]). ⚠️ φ^1 si integra rispetto a S, φ^2 rispetto a B. Il nome «auto-finanziante» è solo nella slide.
**Opzione:** Se V_t(φ) = φ^1_t S_t + φ^2_t B_t soddisfa V_t(φ) = V_0(φ) + ∫_0^t φ^1_u dS_u + ∫_0^t φ^2_u dB_u, ∀t ∈ [0,T]
**Distrattori:**
- Se V_t(φ) = φ^1_t S_t + φ^2_t B_t soddisfa V_t(φ) = V_0(φ) + ∫_0^t φ^1_u dB_u + ∫_0^t φ^2_u dS_u, ∀t ∈ [0,T]
- E_p(S_u | ℑ_t) = S_t · e^(μ(u-t))
- e^(-r(T-t)), perché (1 + r_n)^(-m_n(t)) tende a e^(-rΔ_n m_n(t)) = e^(-rΔ_n (T-t)/Δ_n): è un fattore di sconto

**D:** ⚠️ Quale condizione basta, secondo la slide 40 della lezione 12, perché gli integrali della (57) siano opportunamente definiti?
**R:** Slide 40: «dove gli integrali devono essere opportunamente definiti; a tal fine è sufficiente che entrambi gli integrali convergano nello spazio L_2, cioè: P{∫_0^T |φ^1_u|² dS_u < ∞} = 1; P{∫_0^T |φ^2_u|² dB_u < ∞} = 1». Il docente: «è sufficiente che entrambi gli integrali convergano nello spazio L2, cioè che le probabilità che il loro integrale delle quantità φ1 e φ2 prese in valore assoluto al quadrato in ds e in db siano minori di infinito, sia uguale a 1» ([00:23:47]–[00:25:09]). ⚠️ Le probabilità valgono 1, non 0, e devono convergere entrambi gli integrali.
**Opzione:** Che entrambi gli integrali convergano nello spazio L_2: P{∫_0^T |φ^1_u|² dS_u < ∞} = 1 e P{∫_0^T |φ^2_u|² dB_u < ∞} = 1
**Distrattori:**
- Che entrambi gli integrali convergano nello spazio L_2: P{∫_0^T |φ^1_u|² dS_u < ∞} = 0 e P{∫_0^T |φ^2_u|² dB_u < ∞} = 0
- Il limite agli estremi dell'intervallo della (45), (a_n(t) - p∗m_n(t))/√(p∗(1 - p∗)m_n(t)) e (m_n(t) - p∗m_n(t))/√(p∗(1 - p∗)m_n(t)), per n → ∞
- S_t = S_0 + ∫_0^t μS_u du + ∫_0^t σS_u dW_u, ∀t ∈ [0,T]

**D:** ⚠️ Come si definiscono i processi scontati di S e di V nel modello di Black-Scholes-Merton (slide 41 della lezione 12)?
**R:** Slide 41: «S∗_t ≜ S_t/B_t e V∗_t ≜ V_t/B_t sono i processi scontati di S e V». Il docente: il processo «scontato di che? Del valore finanziario del tempo e quindi del nostro processo B. S star viene quindi definito come S su B e V star come V su B» ([00:25:16]). ⚠️ Si divide per B_t: è uno sconto. Nel modello di Sharpe-Rendleman-Bartter era S∗_T = (1+r)^(-1)S_T (lezione 08). La slide scrive l'asterisco in apice.
**Opzione:** S∗_t ≜ S_t/B_t e V∗_t ≜ V_t/B_t: S e V scontati del valore finanziario del tempo, cioè del processo B
**Distrattori:**
- S∗_t ≜ S_t · B_t e V∗_t ≜ V_t · B_t: S e V capitalizzati del valore finanziario del tempo, cioè del processo B
- ∞, perché semplificando (1 - p∗) resta √((1 - p∗)((T-t)n/T)(p∗)^(-1)), che cresce con n
- S_u = S_t · e^((μ - σ²/2)dt - σdW_t), per u > t

**D:** ⚠️ Quale equazione differenziale stocastica governa il processo scontato S∗_t, e quale soluzione ha (formule 58 e 59 della lezione 12)?
**R:** Slide 42: «S∗_t è governato dalla seguente equazione differenziale stocastica: dS∗_t = (μ - r)S∗_t dt + σS∗_t dW_t (58) che ha soluzione S∗_u = S∗_t · e^((μ - r - σ²/2)dt + σdW_t) (59)». Dimostrazione (slide 43): «Si applica il lemma di Itô's per ottenere: d(S_t/B_t) = dS∗_t = -r(S_t/B_t)dt + (1/B_t)(μS_t dt + σS_t dW_t)», cioè -rS∗_t dt + μS∗_t dt + σS∗_t dW_t; la soluzione segue «per analogia con la soluzione dell'equazione 49», per u ≥ t. Il docente: «dS star non è altro che mu meno r S star dt più sigma S star dW» ([00:25:16]). ⚠️ Lo sconto toglie r dal drift; la diffusione σ resta la stessa.
**Opzione:** dS∗_t = (μ - r)S∗_t dt + σS∗_t dW_t, con soluzione S∗_u = S∗_t · e^((μ - r - σ²/2)dt + σdW_t)
**Distrattori:**
- dS∗_t = (μ + r)S∗_t dt + σS∗_t dW_t, con soluzione S∗_u = S∗_t · e^((μ + r - σ²/2)dt + σdW_t)
- Il primo è il limite dell'estremo superiore, che tende a ∞ (46); il secondo quello dell'estremo inferiore, che tende a (ln(K/S_t) - (r - σ²/2)(T-t))/(σ√(T-t)) (47).
- Il comportamento del prezzo di qualsiasi strumento finanziario: permette di simularne la traiettoria utilizzando solo l'informazione disponibile al tempo corrente.

**D:** ⚠️ Quale equazione differenziale stocastica governa il processo scontato V∗_t del portafoglio di replicazione (formula 60 della lezione 12)?
**R:** Slide 44: «V∗_t è governata dalla seguente equazione differenziale stocastica: dV∗_t = φ^1_t dS∗_t (60)». La dimostrazione (slide 44–48) parte dalla (57) in forma differenziale, dV_t(φ) = φ^1_t dS_t + φ^2_t dB_t, che «descrive in tempo continuo la dinamica del portafoglio di replicazione V(φ)», e con dV∗_t(φ) = d(V_t/B_t) = V_t d(1/B_t) + (1/B_t)dV_t arriva a [(μ - r)S∗_t + σS∗_t dW_t]φ^1_t, cioè φ^1_t dS∗_t per la (58). Il docente: «la parte in dB di φ2 l'abbiamo assorbita, evidentemente, altrove, nello star, e quindi nello sconto» ([00:27:24]). ⚠️ Nel processo scontato il termine in φ^2_t scompare.
**Opzione:** dV∗_t = φ^1_t dS∗_t: il termine in φ^2_t scompare, assorbito nello sconto
**Distrattori:**
- dV∗_t = φ^1_t dS∗_t + φ^2_t dB_t: il termine in φ^2_t resta, come nella dinamica non scontata
- (ln(K/S_t) - (r - σ²/2)(T-t))/(σ√(T-t))
- Con la funzione di Excel casuale e quella della normale standardizzata, fissati un valore di μ e un valore di σ.

**D:** Perché nella dimostrazione della (60) il termine in φ^2_t si cancella?
**R:** Slide 48: sostituite le definizioni di dB_t e V∗_t si ottiene -r(φ^1_t S∗_t + φ^2_t)dt + φ^1_t(μS∗_t dt + σS∗_t dW_t) + φ^2_t r dt. Il -rφ^2_t dt viene dallo sconto di V, perché d(1/B_t) = -(r/B_t)dt (slide 45); il φ^2_t r dt viene da dB_t = rB_t dt (54). I due si cancellano, e resta [(μ - r)S∗_t + σS∗_t dW_t]φ^1_t, che per la (58) è φ^1_t dS∗_t. Il docente: la parte in dB di φ2 è stata «assorbita… nello sconto» ([00:27:24]), e «s di t diventa s star e siamo nelle condizioni di semplificare anche bt laddove è presente a numeratore e a denominatore» ([00:29:16]). La slide 48 scrive (μ - r)S∗_t senza dt nella parentesi quadra.

**D:** ⚠️ Come è definita la variabile casuale λ_n nel modello CRR in versione asintotica, secondo il test della lezione 12 (domanda 1)?
**R:** «**λ~bin(p∗,m_{n(t)})**»: è la slide 3, «λ_n è una variabile casuale distribuita come: λ_n ~ bin(p∗, m_n(t))», dove P{a_n(t) ≤ λ_n ≤ m_n(t)} è la sommatoria del secondo limite. Il docente: λ_n «ha i parametri p star e m n di t» ([00:01:24]). La piattaforma toglie il pedice n a λ e mette in pedice tutto n(t). m_n(t) ≜ (T-t)/Δ_n è definito nella lezione 11 (deck 11, slide 8); il deck 12 lo sostituisce con (T-t)n/T (slide 7). Distrattori del test: «lnλ_{t-dt}~N[(a-b²/2)dt,bdt^(1/2))]» è la chiave della domanda 4 del test 07, la distribuzione dei log-rendimenti del moto geometrico browniano, con λ al posto di X; «dλ~Y(10,dt^(1/2))» e «λ~N(0,dt)» sono distrattori dei test 06 e 07 con λ al posto di X. Una «Y» con media 10 non esiste nei materiali, e normale, N(0,1), è solo la λ̃_n standardizzata, al limite (slide 4).
**Opzione:** λ~bin(p∗,m_{n(t)})
**Distrattori:**
- lnλ_{t-dt}~N[(a-b²/2)dt,bdt^(1/2))]
- dλ~Y(10,dt^(1/2))
- λ~N(0,dt)

**D:** ⚠️ Come è definito il moto geometrico browniano, secondo il test della lezione 12 (domanda 2)?
**R:** «**dS_t=μS_tdt+σS_tW_t**», la chiave della piattaforma: è la (49) della slide 21, dS_t = μS_t dt + σS_t dW_t, con μ tasso di rendimento e σ tasso di diffusione di S, ripetuta alla fine della dimostrazione, dS = μSdt + σSdW (slide 26). Il docente: la dinamica del sottostante è «il moto geometrico browniano» ([00:12:08]). ⚠️ **Domanda difettosa di resa**: tutte e quattro le opzioni scrivono W_t invece di dW_t; la parte identica in tutte non discrimina. La griglia ha due assi, il coefficiente di dt (μS_t, S_t o μW_t) e quello di W_t (σS_t o S_t): solo la chiave è giusta su entrambi. «dS_t=S_tdt+S_tW_t» toglie μ e σ; «dS_t=μW_tdt+σS_tW_t» mette W_t al posto di S_t nel drift; «dS_t=S_tdt+σS_tW_t» toglie μ.
**Opzione:** dS_t=μS_tdt+σS_tW_t
**Distrattori:**
- dS_t=S_tdt+S_tW_t
- dS_t=μW_tdt+σS_tW_t
- dS_t=S_tdt+σS_tW_t

**D:** ⚠️ Come sono distribuiti nel modello BSM i logaritmi naturali dei rendimenti di S, secondo il test della lezione 12 (domanda 3)?
**R:** «**lnS_t/S_s~N[(μ-σ_2/2)dt,σdt^(1/2))]**», con la parentesi spaiata della piattaforma: è la (53) della slide 34, ln(S_t/S_s) ~ N((μ - σ²/2)dt, σ√dt), dove dt = (t - s). La piattaforma scrive σ_2 per σ², l'esponente 1/2 per la radice, e toglie le parentesi del logaritmo. Il secondo parametro è la deviazione standard: «diffusione o deviazione standard sigma radice di delta t» ([00:21:42]). Distrattori del test: «dλ~Y(10,dt^(1/2))», «λ~N(0,dt)» e «λ~bin(p∗,m_{n(t)})» parlano di λ, non di S. Sono tre opzioni della domanda 1, e la terza ne è la chiave: un'opzione che non parla dell'oggetto della domanda è un distrattore a prescindere.
**Opzione:** lnS_t/S_s~N[(μ-σ_2/2)dt,σdt^(1/2))]
**Distrattori:**
- dλ~Y(10,dt^(1/2))
- λ~N(0,dt)
- λ~bin(p∗,m_{n(t)})

**D:** ⚠️ Come è distribuito nel modello BSM il sottostante S, secondo il test della lezione 12 (domanda 4)?
**R:** «**S_t~LogN[S_sexp(μdt); S_s²exp(μdt)exp(σ^(2dt)-1)]**», la chiave della piattaforma: è il corollario della slide 38, S_t ~ LogN(S_s e^(μdt), S_s² e^(μdt) · (e^(σ²dt) - 1)), con dt = (t - s), a meno della resa: la piattaforma porta «2dt» in apice a σ e mette il -1 dentro l'esponenziale, mentre la slide ha (e^(σ²dt) - 1). ⚠️ La slide scrive e^(μdt) anche nel secondo parametro, e così la chiave; il docente lo chiama «deviazione standard» ([00:22:14]). ℹ️ Integrazione (non dai materiali del corso): nei manuali la varianza della lognormale ha e^(2μdt). Distrattori del test: «S_t~LogN[S_sexp(μdt); S_s²exp(μdt)]» è la chiave senza il fattore (e^(σ²dt) - 1), quindi un secondo parametro diverso, senza σ; «λ~bin(p∗,m_{n(t)})» e «λ~N(0,dt)» parlano di λ, non di S.
**Opzione:** S_t~LogN[S_sexp(μdt); S_s²exp(μdt)exp(σ^(2dt)-1)]
**Distrattori:**
- S_t~LogN[S_sexp(μdt); S_s²exp(μdt)]
- λ~bin(p∗,m_{n(t)})
- λ~N(0,dt)

**D:** ⚠️ Come è definito nel modello BSM il processo del valore finanziario del tempo Bt, secondo il test della lezione 12 (domanda 5)?
**R:** «**dB_t=rB_tdt**»: è la (54) della slide 39, «La dinamica del processo B ∀t ∈ [0,T] è data da: dB_t = rB_t dt», con soluzione B_t = e^(rt) (55). Il docente: «db non è altro che rb dt» ([00:23:32]); B è il «processo deterministico» e il «bond privo di rischio, cioè il valore del tempo» ([00:23:47]). Distrattori del test, due pescati dal test 11: «B_{jΔn}=(1+r_n)^(j+2)» era l'opzione A della sua domanda 3, la versione discreta sulla griglia con l'esponente sbagliato; «u_{(j+n)Δn}=Bξ_{n,j+1}» era la D della sua domanda 4, e parla di u. «dB_t=μW_tdt+σS_tW_t» applica a B l'opzione C della domanda 2: B non ha un termine stocastico.
**Opzione:** dB_t=rB_tdt
**Distrattori:**
- B_{jΔn}=(1+r_n)^(j+2)
- u_{(j+n)Δn}=Bξ_{n,j+1}
- dB_t=μW_tdt+σS_tW_t
