

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This feature is universal.
It occurs with 2 different values: `Def`, `Ind`.

29694 tokens (39%) have a non-empty value of `Definite`.
9068 types (70%) occur at least once with a non-empty value of `Definite`.
6043 lemmas (68%) occur at least once with a non-empty value of `Definite`.
The feature is used with 6 part-of-speech tags: [sv-pos/NOUN]() (17793; 23% instances), [sv-pos/DET]() (4373; 6% instances), [sv-pos/PRON]() (3767; 5% instances), [sv-pos/ADJ]() (3658; 5% instances), [sv-pos/NUM]() (80; 0% instances), [sv-pos/VERB]() (23; 0% instances).

### `NOUN`

17793 [sv-pos/NOUN]() tokens (97% of all `NOUN` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `NOUN` and `Definite` co-occurred: <tt><a href="Case.html">Case</a>=Nom</tt> (16997; 96%), <tt><a href="Gender.html">Gender</a>=Com</tt> (12510; 70%), <tt><a href="Number.html">Number</a>=Sing</tt> (12295; 69%).

`NOUN` tokens may have the following values of `Definite`:

* `Def` (6088; 34% of non-empty `Definite`): <em>äktenskapet, barnen, samhället, familjen, kvinnan, mannen, kvinnorna, föräldrarna, frågan, kvinnans</em>
* `Ind` (11705; 66% of non-empty `Definite`): <em>år, barn, del, procent, arbete, människor, sätt, man, tid, äktenskap</em>
* `EMPTY` (498): <em>kr, %, s., dr, kap., proc, KPI, mån, kl, milj</em>

<table>
  <tr><th>Paradigm <i>barn</i></th><th><tt>Ind</tt></th><th><tt>Def</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Number.html">Number</a>=Sing</tt></td><td><em>barns</em></td><td><em>barnets</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Number.html">Number</a>=Plur</tt></td><td><em>barns</em></td><td><em>barnens</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing</tt></td><td><em>barn</em></td><td><em>barnet</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur</tt></td><td><em>barn</em></td><td><em>barnen</em></td></tr>
</table>

### `DET`

4373 [sv-pos/DET]() tokens (97% of all `DET` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `DET` and `Definite` co-occurred: <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (3796; 87%), <tt><a href="Number.html">Number</a>=Sing</tt> (3344; 76%), <tt><a href="PronType.html">PronType</a>=Art</tt> (3050; 70%), <tt><a href="Gender.html">Gender</a>=Com</tt> (2226; 51%).

`DET` tokens may have the following values of `Definite`:

* `Def` (2252; 51% of non-empty `Definite`): <em>den, de, det, sin, denna, dessa, sina, deras, detta, sitt</em>
* `Ind` (2121; 49% of non-empty `Definite`): <em>en, ett, varje, samma, någon, några, vilka, något, ingen, vilken</em>
* `EMPTY` (142): <em>alla, allt, all, the</em>

<table>
  <tr><th>Paradigm <i>en</i></th><th><tt>Ind</tt></th><th><tt>Def</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Com|<a href="Number.html">Number</a>=Sing</tt></td><td><em>en</em></td><td><em>den</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td><em>ett</em></td><td><em>det</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>de, Dom</em></td></tr>
</table>

`Definite` seems to be **lexical feature** of `DET`. 94% lemmas (30) occur only with one value of `Definite`.

### `PRON`

3767 [sv-pos/PRON]() tokens (81% of all `PRON` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `PRON` and `Definite` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (2662; 71%), <tt><a href="Number.html">Number</a>=Sing</tt> (2585; 69%).

`PRON` tokens may have the following values of `Definite`:

* `Def` (2789; 74% of non-empty `Definite`): <em>det, de, sig, vi, du, den, detta, han, dem, oss</em>
* `Ind` (978; 26% of non-empty `Definite`): <em>man, vad, en, något, andra, många, vilket, alla, var, allt</em>
* `EMPTY` (878): <em>som</em>

<table>
  <tr><th>Paradigm <i>en</i></th><th><tt>Ind</tt></th><th><tt>Def</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Gender.html">Gender</a>=Com|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Prs</tt></td><td><em>en</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Prs</tt></td><td></td><td><em>de</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Com|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Ind</tt></td><td><em>en</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Com|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Prs</tt></td><td><em>en</em></td><td><em>den</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Prs</tt></td><td><em>ett</em></td><td><em>det</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Prs</tt></td><td></td><td><em>den</em></td></tr>
</table>

`Definite` seems to be **lexical feature** of `PRON`. 96% lemmas (45) occur only with one value of `Definite`.

### `ADJ`

3658 [sv-pos/ADJ]() tokens (55% of all `ADJ` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `ADJ` and `Definite` co-occurred: <tt><a href="Case.html">Case</a>=Nom</tt> (3654; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (3313; 91%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (3148; 86%), <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (3148; 86%), <tt><a href="Degree.html">Degree</a>=Pos</tt> (2918; 80%).

`ADJ` tokens may have the following values of `Definite`:

* `Def` (1093; 30% of non-empty `Definite`): <em>hela, nya, flesta, andra, svenska, bästa, ekonomiska, största, kristna, sexuella</em>
* `Ind` (2565; 70% of non-empty `Definite`): <em>stor, flera, annan, själv, viss, sådan, annat, ny, svårt, kristen</em>
* `EMPTY` (3017): <em>olika, andra, många, större, stora, första, vissa, nya, egen, högre</em>

<table>
  <tr><th>Paradigm <i>stor</i></th><th><tt>Ind</tt></th><th><tt>Def</tt></th></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Pos|<a href="Gender.html">Gender</a>=Com|<a href="Number.html">Number</a>=Sing</tt></td><td><em>stor</em></td><td></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Pos|<a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td><em>stort</em></td><td></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>stora</em></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Sup</tt></td><td><em>störst</em></td><td><em>största</em></td></tr>
</table>

### `NUM`

80 [sv-pos/NUM]() tokens (6% of all `NUM` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `NUM` and `Definite` co-occurred: <tt><a href="NumType.html">NumType</a>=Card</tt> (80; 100%), <tt><a href="Case.html">Case</a>=Nom</tt> (80; 100%).

`NUM` tokens may have the following values of `Definite`:

* `Ind` (80; 100% of non-empty `Definite`): <em>en, ett</em>
* `EMPTY` (1304): <em>två, tre, 1, 2, 20, 1970, 3, fyra, 10, 100</em>

### `VERB`

23 [sv-pos/VERB]() tokens (0% of all `VERB` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `VERB` and `Definite` co-occurred: <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (23; 100%), <tt><a href="Tense.html">Tense</a>=Past</tt> (23; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Part</tt> (23; 100%), <tt><a href="Voice.html">Voice</a>=EMPTY</tt> (23; 100%).

`VERB` tokens may have the following values of `Definite`:

* `Ind` (23; 100% of non-empty `Definite`): <em>vald, vänd, hörselskadad, accepterad, förbjudet, ifylld, komplicerad, likställd, matroniserad, omsatt</em>
* `EMPTY` (7795): <em>har, finns, blir, är, få, får, ha, gäller, ger, kommer</em>

`Definite` seems to be **lexical feature** of `VERB`. 100% lemmas (18) occur only with one value of `Definite`.

## Relations with Agreement in `Definite`

The 10 most frequent relations where parent and child node agree in `Definite`:
<tt>NOUN --[<a href="../dep/det.html">det</a>]--> DET</tt> (2986; 82%),
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (1490; 87%),
<tt>NOUN --[<a href="../dep/nmod.html">nmod</a>]--> NOUN</tt> (1377; 59%),
<tt>NOUN --[<a href="../dep/appos.html">appos</a>]--> NOUN</tt> (153; 67%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (127; 77%),
<tt>ADJ --[<a href="../dep/det.html">det</a>]--> DET</tt> (125; 59%),
<tt>NOUN --[<a href="../dep/obl.html">obl</a>]--> NOUN</tt> (112; 61%),
<tt>NOUN --[<a href="../dep/acl.html">acl</a>]--> NOUN</tt> (44; 52%),
<tt>PRON --[<a href="../dep/nsubj.html">nsubj</a>]--> NOUN</tt> (19; 56%),
<tt>PRON --[<a href="../dep/fixed.html">fixed</a>]--> PRON</tt> (16; 64%).

