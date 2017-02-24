

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

148683 tokens (53%) have a non-empty value of `Number`.
18912 types (70%) occur at least once with a non-empty value of `Number`.
10622 lemmas (58%) occur at least once with a non-empty value of `Number`.
The feature is used with 10 part-of-speech tags: [it-pos/NOUN]() (51950; 18% instances), [it-pos/DET]() (45340; 16% instances), [it-pos/VERB]() (18388; 7% instances), [it-pos/ADJ]() (17926; 6% instances), [it-pos/AUX]() (10406; 4% instances), [it-pos/PRON]() (4667; 2% instances), [it-pos/ADP]() (2; 0% instances), [it-pos/X]() (2; 0% instances), [it-pos/ADV]() (1; 0% instances), [it-pos/PROPN]() (1; 0% instances).

### `NOUN`

51950 [it-pos/NOUN]() tokens (92% of all `NOUN` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `NOUN` and `Number` co-occurred: <tt><a href="Gender.html">Gender</a>=Masc</tt> (28790; 55%).

`NOUN` tokens may have the following values of `Number`:

* `Plur` (15714; 30% of non-empty `Number`): <em>anni, persone, paesi, opere, diritti, giorni, membri, cittadini, donne, condizioni</em>
* `Sing` (36236; 70% of non-empty `Number`): <em>presidente, parte, fondo, diritto, anno, legge, proprietario, stato, mondo, caso</em>
* `EMPTY` (4322): <em>città, società, proprietà, film, attività, servitù, autorità, radar, libertà, qualità</em>

<table>
  <tr><th>Paradigm <i>anno</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>anno</em></td><td><em>anni</em></td></tr>
</table>

### `DET`

45340 [it-pos/DET]() tokens (99% of all `DET` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `DET` and `Number` co-occurred: <tt><a href="PronType.html">PronType</a>=Art</tt> (40315; 89%), <tt><a href="Definite.html">Definite</a>=Def</tt> (35903; 79%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (22930; 51%).

`DET` tokens may have the following values of `Number`:

* `Plur` (11905; 26% of non-empty `Number`): <em>i, le, gli, tutti, suoi, alcuni, quanti, sue, questi, queste</em>
* `Sing` (33435; 74% of non-empty `Number`): <em>il, la, l', un, una, lo, quale, sua, suo, un'</em>
* `EMPTY` (618): <em>loro, che, cui, più, altrui, the, l’, de, A, Every</em>

<table>
  <tr><th>Paradigm <i>il</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>L’</em></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Masc|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>il, lo, l’, l', i1, lu</em></td><td><em>i, gli, il</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Fem|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>la, l', l’, le, il</em></td><td><em>le, l’</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>l', l’</em></td><td><em>l'</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><em>il</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td><em>la</em></td><td></td></tr>
  <tr><td><tt><a href="PronType.html">PronType</a>=Art</tt></td><td><em>l’</em></td><td></td></tr>
</table>

### `VERB`

18388 [it-pos/VERB]() tokens (75% of all `VERB` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `VERB` and `Number` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (10290; 56%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (9931; 54%).

`VERB` tokens may have the following values of `Number`:

* `Plur` (5259; 29% of non-empty `Number`): <em>hanno, sono, fanno, stabilite, trovano, fatti, stabiliti, applicano, partecipano, abbiamo</em>
* `Sing` (13129; 71% of non-empty `Number`): <em>ha, è, fatto, trova, visto, fa, chiama, vinto, avuto, dice</em>
* `EMPTY` (6073): <em>fare, far, vedere, avere, dire, dare, chiedere, andare, pagare, usare</em>

<table>
  <tr><th>Paradigm <i>avere</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>avuto</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>avuta</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>avreste</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>avrebbe</em></td><td><em>avrebbero</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>avrò</em></td><td><em>Avremo</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>avevo</em></td><td><em>avevamo</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>ho</em></td><td><em>abbiamo</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>avrete</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>hai</em></td><td><em>avete</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>avrà</em></td><td><em>avranno</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>aveva</em></td><td><em>avevano</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>ebbe</em></td><td><em>ebbero</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>ha</em></td><td><em>hanno</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>avesse</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>abbia</em></td><td><em>abbiano</em></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>avente</em></td><td><em>aventi</em></td></tr>
</table>

### `ADJ`

17926 [it-pos/ADJ]() tokens (98% of all `ADJ` tokens) have a non-empty value of `Number`.

`ADJ` tokens may have the following values of `Number`:

* `Plur` (5848; 33% of non-empty `Number`): <em>grandi, altri, seguenti, nazionali, speciali, altre, locali, importanti, internazionali, principali</em>
* `Sing` (12078; 67% of non-empty `Number`): <em>grande, presente, primo, comune, internazionale, prima, nazionale, mondiale, possibile, sociale</em>
* `EMPTY` (331): <em>ex, pari, anti, gran, vice, 1°, fa, blu, post, antisommossa</em>

<table>
  <tr><th>Paradigm <i>primo</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><em>primo</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="NumType.html">NumType</a>=Ord</tt></td><td><em>primo, 1º</em></td><td><em>primi</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td><em>prima</em></td><td><em>prime</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="NumType.html">NumType</a>=Ord</tt></td><td><em>prima</em></td><td><em>prime</em></td></tr>
  <tr><td><tt><a href="NumType.html">NumType</a>=Ord</tt></td><td><em>I</em></td><td></td></tr>
</table>

### `AUX`

10406 [it-pos/AUX]() tokens (94% of all `AUX` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `AUX` and `Number` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (9691; 93%), <tt><a href="Person.html">Person</a>=3</tt> (9107; 88%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (8760; 84%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (8323; 80%).

`AUX` tokens may have the following values of `Number`:

* `Plur` (2907; 28% of non-empty `Number`): <em>sono, hanno, possono, erano, stati, siano, devono, abbiamo, possiamo, siamo</em>
* `Sing` (7499; 72% of non-empty `Number`): <em>è, ha, può, era, stato, deve, sia, stata, fu, viene</em>
* `EMPTY` (652): <em>essere, aver, poter, esser, essendo, dover, avere, voler, venire, avendo</em>

<table>
  <tr><th>Paradigm <i>essere</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>stato</em></td><td><em>stati</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>stata</em></td><td><em>state</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sarei</em></td><td><em>saremmo</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sarebbe</em></td><td><em>sarebbero</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Imp|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sii</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sarò</em></td><td><em>saremo</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>ero</em></td><td><em>eravamo</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>Fui</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sono</em></td><td><em>siamo</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sarai</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sei</em></td><td><em>siete</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sarà</em></td><td><em>saranno</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>era</em></td><td><em>erano</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fu</em></td><td><em>furono</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>è, e', É, E’, sono, E`</em></td><td><em>sono, son, È</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fossi</em></td><td><em>fossimo</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fosse</em></td><td><em>fossero</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sia</em></td><td><em>siano</em></td></tr>
</table>

### `PRON`

4667 [it-pos/PRON]() tokens (43% of all `PRON` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PRON` and `Number` co-occurred: <tt><a href="Clitic.html">Clitic</a>=EMPTY</tt> (3324; 71%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (2659; 57%).

`PRON` tokens may have the following values of `Number`:

* `Plur` (1272; 27% of non-empty `Number`): <em>ci, li, noi, tutti, altri, loro, quelli, quelle, quali, vi</em>
* `Sing` (3395; 73% of non-empty `Number`): <em>lo, qual, mi, quanto, quale, quello, uno, la, questo, gli</em>
* `EMPTY` (6106): <em>si, che, chi, cui, ne, ci, c', se, vi, le</em>

<table>
  <tr><th>Paradigm <i>lo</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Person.html">Person</a>=3</tt></td><td><em>lo, gli</em></td><td><em>li</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><em>lo</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Person.html">Person</a>=3</tt></td><td><em>la</em></td><td><em>le</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td></td><td><em>le</em></td></tr>
  <tr><td><tt><a href="Person.html">Person</a>=3</tt></td><td><em>l', gli</em></td><td><em>gli</em></td></tr>
</table>

### `X`

2 [it-pos/X]() tokens (1% of all `X` tokens) have a non-empty value of `Number`.

`X` tokens may have the following values of `Number`:

* `Sing` (2; 100% of non-empty `Number`): <em>cultural, state</em>
* `EMPTY` (236): <em>a, b, Illusions, perdues, De, ad, f, home, la, Come</em>

### `ADP`

2 [it-pos/ADP]() tokens (0% of all `ADP` tokens) have a non-empty value of `Number`.

`ADP` tokens may have the following values of `Number`:

* `Sing` (2; 100% of non-empty `Number`): <em>del, du</em>
* `EMPTY` (42940): <em>di, a, in, da, per, con, su, come, ad, tra</em>

### `ADV`

1 [it-pos/ADV]() tokens (0% of all `ADV` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `ADV` and `Number` co-occurred: <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (1; 100%).

`ADV` tokens may have the following values of `Number`:

* `Sing` (1; 100% of non-empty `Number`): <em>pochissimo</em>
* `EMPTY` (10815): <em>non, più, anche, dove, come, quando, solo, prima, sempre, poi</em>

### `PROPN`

1 [it-pos/PROPN]() tokens (0% of all `PROPN` tokens) have a non-empty value of `Number`.

`PROPN` tokens may have the following values of `Number`:

* `Plur` (1; 100% of non-empty `Number`): <em>hye</em>
* `EMPTY` (13891): <em>Italia, Shakespeare, Balzac, Europa, San, Roma, Stati, Uniti, Albania, Marco</em>

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>NOUN --[<a href="../dep/det.html">det</a>]--> DET</tt> (35542; 92%),
<tt>NOUN --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (13153; 90%),
<tt>NOUN --[<a href="../dep/nmod.html">nmod</a>]--> NOUN</tt> (8091; 52%),
<tt>VERB --[<a href="../dep/nsubj.html">nsubj</a>]--> NOUN</tt> (4109; 77%),
<tt>VERB --[<a href="../dep/aux.html">aux</a>]--> AUX</tt> (3112; 58%),
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (3013; 72%),
<tt>NOUN --[<a href="../dep/acl.html">acl</a>]--> VERB</tt> (2144; 72%),
<tt>VERB --[<a href="../dep/aux:pass.html">aux:pass</a>]--> AUX</tt> (1807; 86%),
<tt>NOUN --[<a href="../dep/acl:relcl.html">acl:relcl</a>]--> VERB</tt> (1625; 74%),
<tt>VERB --[<a href="../dep/nsubj:pass.html">nsubj:pass</a>]--> NOUN</tt> (1501; 87%).



--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian-ParTUT)

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

23186 tokens (54%) have a non-empty value of `Number`.
5566 types (75%) occur at least once with a non-empty value of `Number`.
3553 lemmas (69%) occur at least once with a non-empty value of `Number`.
The feature is used with 8 part-of-speech tags: [it-pos/NOUN]() (8057; 19% instances), [it-pos/DET]() (7245; 17% instances), [it-pos/ADJ]() (3214; 8% instances), [it-pos/VERB]() (2570; 6% instances), [it-pos/AUX]() (1407; 3% instances), [it-pos/PRON]() (691; 2% instances), [it-pos/ADP]() (1; 0% instances), [it-pos/PROPN]() (1; 0% instances).

### `NOUN`

8057 [it-pos/NOUN]() tokens (93% of all `NOUN` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `NOUN` and `Number` co-occurred: <tt><a href="Gender.html">Gender</a>=Masc</tt> (4289; 53%).

`NOUN` tokens may have the following values of `Number`:

* `Plur` (2512; 31% of non-empty `Number`): <em>anni, opere, paesi, membri, stati, prodotti, diritti, misure, donne, persone</em>
* `Sing` (5545; 69% of non-empty `Number`): <em>presidente, parte, commissione, opera, lavoro, vita, onorevole, modo, crescita, parlamento</em>
* `EMPTY` (652): <em>società, attività, euro, proprietà, crisi, libertà, qualità, serie, account, difficoltà</em>

<table>
  <tr><th>Paradigm <i>opera</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>opera, opere</em></td><td><em>opere</em></td></tr>
</table>

### `DET`

7245 [it-pos/DET]() tokens (99% of all `DET` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `DET` and `Number` co-occurred: <tt><a href="PronType.html">PronType</a>=Art</tt> (6274; 87%), <tt><a href="Definite.html">Definite</a>=Def</tt> (5510; 76%).

`DET` tokens may have the following values of `Number`:

* `Plur` (2027; 28% of non-empty `Number`): <em>i, le, gli, sue, suoi, tutti, alcuni, tali, questi, queste</em>
* `Sing` (5218; 72% of non-empty `Number`): <em>il, la, l', un, una, sua, suo, un', lo, questo</em>
* `EMPTY` (70): <em>loro, più, cui, the, Che, Every, ogni</em>

<table>
  <tr><th>Paradigm <i>il</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><em>il, lo, l'</em></td><td><em>i, gli</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td><em>la</em></td><td><em>le</em></td></tr>
  <tr><td><tt></tt></td><td><em>l', la</em></td><td></td></tr>
</table>

### `ADJ`

3214 [it-pos/ADJ]() tokens (99% of all `ADJ` tokens) have a non-empty value of `Number`.

`ADJ` tokens may have the following values of `Number`:

* `Plur` (1158; 36% of non-empty `Number`): <em>altri, importanti, principali, strutturali, teatrali, sociali, locali, altre, ambientali, grandi</em>
* `Sing` (2056; 64% of non-empty `Number`): <em>presente, sociale, grande, importante, internazionale, primo, europeo, intellettuale, forte, francese</em>
* `EMPTY` (46): <em>fa, pari, gran, ex, online, standard, 1, English, His, afro</em>

<table>
  <tr><th>Paradigm <i>altro</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><em>altro</em></td><td><em>altri</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td><em>altra</em></td><td><em>altre</em></td></tr>
</table>

### `VERB`

2570 [it-pos/VERB]() tokens (71% of all `VERB` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `VERB` and `Number` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (1469; 57%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (1396; 54%), <tt><a href="Tense.html">Tense</a>=Past</tt> (1371; 53%).

`VERB` tokens may have the following values of `Number`:

* `Plur` (844; 33% of non-empty `Number`): <em>hanno, emergenti, sono, fanno, consumano, derivanti, facevano, includono, messe, nominati</em>
* `Sing` (1726; 67% of non-empty `Number`): <em>ha, è, scrisse, considerato, rappresenta, fatto, dato, avuto, fa, iniziò</em>
* `EMPTY` (1046): <em>far, fare, garantire, creare, dare, fornire, aumentare, avere, migliorare, contribuire</em>

<table>
  <tr><th>Paradigm <i>avere</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>avuto</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>avuta</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>avrebbero</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>avrò</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>ho</em></td><td><em>abbiamo</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>avrete</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>hai</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>avrà</em></td><td><em>avranno</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>aveva</em></td><td><em>avevano</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>ebbe</em></td><td><em>ebbero</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>ha</em></td><td><em>hanno</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>avesse</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>abbia</em></td><td><em>abbiano</em></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td><em>aventi</em></td></tr>
</table>

### `AUX`

1407 [it-pos/AUX]() tokens (92% of all `AUX` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `AUX` and `Number` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (1294; 92%), <tt><a href="Person.html">Person</a>=3</tt> (1192; 85%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (1050; 75%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (1042; 74%).

`AUX` tokens may have the following values of `Number`:

* `Plur` (483; 34% of non-empty `Number`): <em>sono, hanno, possono, dovrebbero, stati, erano, siano, furono, state, devono</em>
* `Sing` (924; 66% of non-empty `Number`): <em>è, ha, era, stato, può, fu, sia, potrebbe, deve, stata</em>
* `EMPTY` (126): <em>essere, aver, dover, poter, essendo, esser, avendo, voler</em>

<table>
  <tr><th>Paradigm <i>essere</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>stato</em></td><td><em>stati</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>stata</em></td><td><em>state</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sarei</em></td><td><em>saremmo</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sarebbe</em></td><td><em>sarebbero</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sono</em></td><td><em>siamo</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sarai</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>siete</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sarà</em></td><td><em>saranno</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>era</em></td><td><em>erano</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fu</em></td><td><em>furono</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>è, e'</em></td><td><em>sono</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fosse</em></td><td><em>fossero</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sia</em></td><td><em>siano</em></td></tr>
</table>

### `PRON`

691 [it-pos/PRON]() tokens (51% of all `PRON` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PRON` and `Number` co-occurred: <tt><a href="Clitic.html">Clitic</a>=EMPTY</tt> (502; 73%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (386; 56%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (377; 55%).

`PRON` tokens may have the following values of `Number`:

* `Plur` (227; 33% of non-empty `Number`): <em>ci, altri, noi, alcuni, li, molti, coloro, vi, essi, loro</em>
* `Sing` (464; 67% of non-empty `Number`): <em>lo, ciò, quanto, quello, questo, uno, mi, quella, la, le</em>
* `EMPTY` (677): <em>che, si, cui, ne, c', ci, vi, se, sé, più</em>

<table>
  <tr><th>Paradigm <i>quello</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><em>quello, quel</em></td><td><em>quelli</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td><em>quella</em></td><td><em>quelle</em></td></tr>
</table>

### `ADP`

1 [it-pos/ADP]() tokens (0% of all `ADP` tokens) have a non-empty value of `Number`.

`ADP` tokens may have the following values of `Number`:

* `Sing` (1; 100% of non-empty `Number`): <em>du</em>
* `EMPTY` (6857): <em>di, a, in, per, da, su, con, come, ad, tra</em>

### `PROPN`

1 [it-pos/PROPN]() tokens (0% of all `PROPN` tokens) have a non-empty value of `Number`.

`PROPN` tokens may have the following values of `Number`:

* `Plur` (1; 100% of non-empty `Number`): <em>hye</em>
* `EMPTY` (1724): <em>Shakespeare, Balzac, Ucraina, Europa, Facebook, Pericle, Stati, Uniti, Cina, John</em>

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>NOUN --[<a href="../dep/det.html">det</a>]--> DET</tt> (5619; 92%),
<tt>NOUN --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (2431; 91%),
<tt>VERB --[<a href="../dep/nsubj.html">nsubj</a>]--> NOUN</tt> (555; 78%),
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (447; 68%),
<tt>NOUN --[<a href="../dep/acl.html">acl</a>]--> VERB</tt> (400; 73%),
<tt>NOUN --[<a href="../dep/det:poss.html">det:poss</a>]--> DET</tt> (361; 81%),
<tt>VERB --[<a href="../dep/aux:pass.html">aux:pass</a>]--> AUX</tt> (304; 83%),
<tt>VERB --[<a href="../dep/nsubj:pass.html">nsubj:pass</a>]--> NOUN</tt> (220; 92%),
<tt>NOUN --[<a href="../dep/acl:relcl.html">acl:relcl</a>]--> VERB</tt> (217; 71%),
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (171; 81%).

