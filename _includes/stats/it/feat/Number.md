

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

141899 tokens (52%) have a non-empty value of `Number`.
18566 types (70%) occur at least once with a non-empty value of `Number`.
10397 lemmas (58%) occur at least once with a non-empty value of `Number`.
The feature is used with 8 part-of-speech tags: [it-pos/NOUN]() (49390; 18% instances), [it-pos/DET]() (43093; 16% instances), [it-pos/VERB]() (20626; 8% instances), [it-pos/ADJ]() (17049; 6% instances), [it-pos/AUX]() (6958; 3% instances), [it-pos/PRON]() (4781; 2% instances), [it-pos/ADP]() (1; 0% instances), [it-pos/PROPN]() (1; 0% instances).

### `NOUN`

49390 [it-pos/NOUN]() tokens (92% of all `NOUN` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `NOUN` and `Number` co-occurred: <tt><a href="Gender.html">Gender</a>=Masc</tt> (27205; 55%).

`NOUN` tokens may have the following values of `Number`:

* `Plur` (14493; 29% of non-empty `Number`): <em>anni, opere, persone, giorni, diritti, membri, paesi, norme, fondi, condizioni</em>
* `Sing` (34897; 71% of non-empty `Number`): <em>presidente, parte, fondo, diritto, legge, proprietario, anno, caso, art., stato</em>
* `EMPTY` (4238): <em>città, società, proprietà, attività, servitù, autorità, radar, film, responsabilità, libertà</em>

<table>
  <tr><th>Paradigm <i>anno</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>anno</em></td><td><em>anni</em></td></tr>
</table>

### `DET`

43093 [it-pos/DET]() tokens (99% of all `DET` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `DET` and `Number` co-occurred: <tt><a href="PronType.html">PronType</a>=Art</tt> (38404; 89%), <tt><a href="Definite.html">Definite</a>=Def</tt> (34053; 79%).

`DET` tokens may have the following values of `Number`:

* `Plur` (10861; 25% of non-empty `Number`): <em>i, le, gli, tutti, suoi, quanti, sue, alcuni, questi, queste</em>
* `Sing` (32232; 75% of non-empty `Number`): <em>il, la, l', un, una, lo, quale, sua, suo, un'</em>
* `EMPTY` (608): <em>loro, che, cui, più, altrui, the, A, Every, My, Un</em>

<table>
  <tr><th>Paradigm <i>il</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><em>il, lo, l', l’, lu</em></td><td><em>i, gli, il</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td><em>la, l', le, il</em></td><td><em>le</em></td></tr>
  <tr><td><tt></tt></td><td><em>l', l’, l\u2019</em></td><td><em>l'</em></td></tr>
</table>

### `VERB`

20626 [it-pos/VERB]() tokens (78% of all `VERB` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `VERB` and `Number` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (12540; 61%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (12175; 59%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (11117; 54%), <tt><a href="Person.html">Person</a>=3</tt> (11027; 53%).

`VERB` tokens may have the following values of `Number`:

* `Plur` (5419; 26% of non-empty `Number`): <em>sono, hanno, erano, siano, fanno, siamo, stabilite, fatti, stabiliti, applicano</em>
* `Sing` (15207; 74% of non-empty `Number`): <em>è, ha, era, trova, fatto, visto, stato, fa, sia, fu</em>
* `EMPTY` (5889): <em>essere, far, fare, vedere, dire, avere, dare, chiedere, pagare, andare</em>

<table>
  <tr><th>Paradigm <i>essere</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>stato</em></td><td><em>stati</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>stata</em></td><td><em>state</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sarei</em></td><td><em>saremmo</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sarebbe</em></td><td><em>sarebbero</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Imp|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sii</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sarò</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>ero</em></td><td><em>eravamo</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sono</em></td><td><em>siamo</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sarai</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>eravate</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sei</em></td><td><em>siete</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sarà</em></td><td><em>saranno</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>era</em></td><td><em>erano</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fu</em></td><td><em>furono</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>è, e', É, E’, E`</em></td><td><em>sono, È</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fossi</em></td><td><em>fossimo</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fosse</em></td><td><em>fossero</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sia</em></td><td><em>siano</em></td></tr>
</table>

### `ADJ`

17049 [it-pos/ADJ]() tokens (98% of all `ADJ` tokens) have a non-empty value of `Number`.

`ADJ` tokens may have the following values of `Number`:

* `Plur` (5476; 32% of non-empty `Number`): <em>seguenti, altri, grandi, speciali, altre, locali, nazionali, internazionali, precedenti, principali</em>
* `Sing` (11573; 68% of non-empty `Number`): <em>grande, presente, comune, primo, possibile, sociale, prima, nazionale, internazionale, importante</em>
* `EMPTY` (336): <em>ex, pari, anti, gran, fa, vice, blu, maggior, post, antisommossa</em>

<table>
  <tr><th>Paradigm <i>primo</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><em>primo</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="NumType.html">NumType</a>=Ord</tt></td><td><em>primo</em></td><td><em>primi</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td><em>prima</em></td><td><em>prime</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="NumType.html">NumType</a>=Ord</tt></td><td><em>prima</em></td><td><em>prime</em></td></tr>
  <tr><td><tt><a href="NumType.html">NumType</a>=Ord</tt></td><td><em>i</em></td><td></td></tr>
</table>

### `AUX`

6958 [it-pos/AUX]() tokens (93% of all `AUX` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `AUX` and `Number` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (6402; 92%), <tt><a href="Person.html">Person</a>=3</tt> (5954; 86%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (5639; 81%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (5465; 79%).

`AUX` tokens may have the following values of `Number`:

* `Plur` (1984; 29% of non-empty `Number`): <em>sono, hanno, possono, stati, erano, devono, abbiamo, siano, vengono, state</em>
* `Sing` (4974; 71% of non-empty `Number`): <em>è, ha, può, stato, deve, era, viene, stata, aveva, sia</em>
* `EMPTY` (485): <em>essere, aver, poter, esser, avere, dover, voler, essendo, venire, avendo</em>

<table>
  <tr><th>Paradigm <i>essere</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>stato</em></td><td><em>stati</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>stata</em></td><td><em>state</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>saremmo</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sarebbe</em></td><td><em>sarebbero</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>saremo</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>ero</em></td><td><em>eravamo</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>Fui</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sono</em></td><td><em>siamo</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sei</em></td><td><em>siete</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sarà</em></td><td><em>saranno</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>era</em></td><td><em>erano</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fu</em></td><td><em>furono</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>è, e'</em></td><td><em>sono, son</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fossi</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fosse</em></td><td><em>fossero</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sia</em></td><td><em>siano</em></td></tr>
</table>

### `PRON`

4781 [it-pos/PRON]() tokens (44% of all `PRON` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PRON` and `Number` co-occurred: <tt><a href="Person.html">Person</a>=EMPTY</tt> (2776; 58%).

`PRON` tokens may have the following values of `Number`:

* `Plur` (1261; 26% of non-empty `Number`): <em>ci, li, noi, tutti, altri, quelli, loro, quelle, quali, vi</em>
* `Sing` (3520; 74% of non-empty `Number`): <em>lo, qual, quanto, mi, quale, quello, la, uno, questo, cosa</em>
* `EMPTY` (6053): <em>si, che, chi, cui, ne, ci, c', se, vi, le</em>

<table>
  <tr><th>Paradigm <i>lo</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><em>lo, gli</em></td><td><em>li</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td><em>la</em></td><td><em>le</em></td></tr>
  <tr><td><tt></tt></td><td><em>l', gli</em></td><td><em>gli</em></td></tr>
</table>

### `ADP`

1 [it-pos/ADP]() tokens (0% of all `ADP` tokens) have a non-empty value of `Number`.

`ADP` tokens may have the following values of `Number`:

* `Sing` (1; 100% of non-empty `Number`): <em>du</em>
* `EMPTY` (41430): <em>di, a, in, da, per, con, su, come, ad, d'</em>

### `PROPN`

1 [it-pos/PROPN]() tokens (0% of all `PROPN` tokens) have a non-empty value of `Number`.

`PROPN` tokens may have the following values of `Number`:

* `Plur` (1; 100% of non-empty `Number`): <em>hye</em>
* `EMPTY` (13400): <em>Shakespeare, Balzac, Italia, stati, Europa, San, Uniti, Albania, Marco, Roma</em>

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>NOUN --[<a href="../dep/det.html">det</a>]--> DET</tt> (33620; 92%),
<tt>NOUN --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (12473; 90%),
<tt>NOUN --[<a href="../dep/nmod.html">nmod</a>]--> NOUN</tt> (7820; 52%),
<tt>VERB --[<a href="../dep/nsubj.html">nsubj</a>]--> NOUN</tt> (4005; 78%),
<tt>VERB --[<a href="../dep/aux.html">aux</a>]--> AUX</tt> (2942; 59%),
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (2827; 71%),
<tt>NOUN --[<a href="../dep/acl.html">acl</a>]--> VERB</tt> (2164; 72%),
<tt>VERB --[<a href="../dep/auxpass.html">auxpass</a>]--> AUX</tt> (1854; 86%),
<tt>NOUN --[<a href="../dep/acl:relcl.html">acl:relcl</a>]--> VERB</tt> (1557; 74%),
<tt>NOUN --[<a href="../dep/det:poss.html">det:poss</a>]--> DET</tt> (1319; 76%).

