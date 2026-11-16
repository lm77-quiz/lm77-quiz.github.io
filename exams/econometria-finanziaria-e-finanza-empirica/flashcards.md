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

**D:** ⚠️ Quanto vale il valore intrinseco di un'opzione put, secondo il test della lezione 04 (domanda 1)?
**R:** «**È pari a K-S**». ⚠️ Il test pesca dalla lezione **05**, «Strumenti Derivati 3 - Opzioni» («Paragrafo di riferimento - Gli strumenti Derivati 3»): il transcript della lezione 04 non tratta le opzioni. Nel deck 05 la slide 10 scrive **K-S** nel triangolo del payoff della put, e la slide 11 indica come «Valore intrinseco» sia il tratto **K-S**, per S < K, sia lo **0**, per S > K. La chiave è giusta ma semplificata: K-S vale quando la put è in the money, S_t < K (slide 24 del deck 05). Distrattori del test: «è pari a S-K» è il valore intrinseco della **call** (slide 5–6 del deck 05), un oggetto scambiato; «è sempre minore del valore temporale» è un quantificatore assoluto, smentito dal grafico della slide 13 del deck 05, dove per S molto minore di K il valore temporale si assottiglia mentre K-S cresce; «coincide col valore temporale solo per t < T» è una condizione che le slide non contengono.
**Opzione:** È pari a K-S.
**Distrattori:**
- È sempre minore del valore temporale.
- È pari a S-K.
- Coincide col valore temporale solo per t < T.

**D:** ⚠️ Come varia il valore temporale di un'opzione call, secondo il test della lezione 04 (domanda 2)?
**R:** «**Diminuisce all'approssimarsi della scadenza**». ⚠️ Il test pesca dalla lezione **05**, «Strumenti Derivati 3 - Opzioni» («Paragrafo di riferimento - Gli strumenti Derivati 3»): il transcript della lezione 04 non tratta le opzioni. ⚠️ La chiave **non è testuale**: nel deck 05 la slide 8 mostra il valore temporale della call come l'area fra il «prezzo prima della scadenza» e il payoff, e la tabella delle slide 31–33 dà un **+** alla vita residua T-t per la Euro Call. Che il valore temporale si riduca avvicinandosi alla scadenza è una deduzione da queste due slide. Distrattori del test: «aumenta all'approssimarsi della scadenza» è il **segno invertito**; «è maggiore del suo valore intrinseco» nel grafico della slide 8 vale dove il valore intrinseco è 0, non per S molto maggiore di K, quindi non è una proprietà generale; «è sempre maggiore del valore temporale di un'opzione put» è un quantificatore assoluto senza appoggio nelle slide, dove per la Euro Put la riga T-t porta un **?**.
**Opzione:** Diminuisce all'approssimarsi della scadenza.
**Distrattori:**
- È maggiore del suo valore intrinseco.
- Aumenta all'approssimarsi della scadenza.
- È sempre maggiore del valore temporale di un'opzione put.

**D:** ⚠️ Qual è il pay-off a scadenza di una long call, secondo il test della lezione 04 (domanda 3)?
**R:** «**max(S_T-K,0)**». ⚠️ Il test pesca dalla lezione **05**, «Strumenti Derivati 3 - Opzioni» («Paragrafo di riferimento - Gli strumenti Derivati 3»): il transcript della lezione 04 non tratta le opzioni. È la prima riga della tabella «Payoff a scadenza» delle opzioni europee, alla lettera (slide 20 del deck 05). Distrattori del test: «min(S_T-K,0)» è la riga della **short put** e «max(K-S_T,0)» quella della **long put**; ⚠️ «max(S_T-K,1)» non esiste nei materiali: l'**1** al posto dello 0 è inventato.
**Opzione:** max(S_T-K,0)
**Distrattori:**
- max(S_T-K,1)
- min(S_T-K,0)
- max(K-S_T,0)

**D:** ⚠️ Qual è il pay-off a scadenza di una long put, secondo il test della lezione 04 (domanda 4)?
**R:** «**max(K-S_T,0)**». ⚠️ Il test pesca dalla lezione **05**, «Strumenti Derivati 3 - Opzioni» («Paragrafo di riferimento - Gli strumenti Derivati 3»): il transcript della lezione 04 non tratta le opzioni. È la seconda riga della tabella «Payoff a scadenza» delle opzioni europee, alla lettera (slide 20 del deck 05). ⚠️ **Domanda difettosa**: le opzioni **A** e **C** sono **identiche**, «max(K-S_T,0)», e la piattaforma segna la **A**, la prima delle due. Distrattori del test: «min(S_T-K,0)» è la riga della **short put**, «max(S_T-K,0)» quella della **long call**.
**Opzione:** max(K-S_T,0)
**Distrattori:**
- min(S_T-K,0)
- max(S_T-K,0)

**D:** ⚠️ Qual è il pay-off a scadenza di una short put, secondo il test della lezione 04 (domanda 5)?
**R:** «**min(S_T-K,0)**». ⚠️ Il test pesca dalla lezione **05**, «Strumenti Derivati 3 - Opzioni» («Paragrafo di riferimento - Gli strumenti Derivati 3»): il transcript della lezione 04 non tratta le opzioni. È l'ultima riga della tabella «Payoff a scadenza» delle opzioni europee, alla lettera (slide 20 del deck 05). La slide 22 dello stesso deck lo conferma: -max(K-S_T,0) = min(S_T-K,0), «utilizzando una nota proprietà delle funzioni di minimo e massimo». Distrattori del test: le opzioni **A** e **C** sono identiche, «max(K-S_T,0)», cioè il pay-off della **long put**, con il segno opposto; ⚠️ «max(S_T-K,1)» non esiste nei materiali, come nella domanda 3.
**Opzione:** min(S_T-K,0)
**Distrattori:**
- max(K-S_T,0)
- max(S_T-K,1)
