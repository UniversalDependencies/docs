

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

153518 tokens (52%) have a non-empty value of `Number`.
19169 types (70%) occur at least once with a non-empty value of `Number`.
10739 lemmas (58%) occur at least once with a non-empty value of `Number`.
The feature is used with 10 part-of-speech tags: [it-pos/NOUN]() (53570; 18% instances), [it-pos/DET]() (46903; 16% instances), [it-pos/VERB]() (22178; 8% instances), [it-pos/ADJ]() (18332; 6% instances), [it-pos/AUX]() (7582; 3% instances), [it-pos/PRON]() (4944; 2% instances), [it-pos/ADP]() (4; 0% instances), [it-pos/PROPN]() (3; 0% instances), [it-pos/ADV]() (1; 0% instances), [it-pos/X]() (1; 0% instances).

### `NOUN`

53570 [it-pos/NOUN]() tokens (92% of all `NOUN` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `NOUN` and `Number` co-occurred: <tt><a href="Gender.html">Gender</a>=Masc</tt> (29660; 55%).

`NOUN` tokens may have the following values of `Number`:

* `Plur` (16140; 30% of non-empty `Number`): <em>anni, persone, opere, paesi, diritti, giorni, cittadini, membri, donne, condizioni</em>
* `Sing` (37430; 70% of non-empty `Number`): <em>presidente, parte, fondo, diritto, anno, legge, proprietario, stato, caso, art.</em>
* `EMPTY` (4487): <em>città, società, proprietà, film, attività, servitù, autorità, radar, libertà, responsabilità</em>

<table>
  <tr><th>Paradigm <i>anno</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>anno</em></td><td><em>anni</em></td></tr>
</table>

### `DET`

46903 [it-pos/DET]() tokens (99% of all `DET` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `DET` and `Number` co-occurred: <tt><a href="PronType.html">PronType</a>=Art</tt> (41718; 89%), <tt><a href="Definite.html">Definite</a>=Def</tt> (37155; 79%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (23688; 51%).

`DET` tokens may have the following values of `Number`:

* `Plur` (12248; 26% of non-empty `Number`): <em>i, le, gli, tutti, suoi, alcuni, quanti, sue, questi, queste</em>
* `Sing` (34655; 74% of non-empty `Number`): <em>il, la, l', un, una, lo, quale, sua, suo, un'</em>
* `EMPTY` (645): <em>loro, che, cui, più, altrui, the, l’, de, A, Every</em>

<table>
  <tr><th>Paradigm <i>il</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Masc|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>il, lo, l’, l', lu, i1</em></td><td><em>i, gli, il</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Fem|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>la, l', l’, le, il</em></td><td><em>le, l’</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>l', l’</em></td><td><em>l'</em></td></tr>
  <tr><td><tt><a href="Person.html">Person</a>=3|<a href="PronType.html">PronType</a>=Clit</tt></td><td><em>l’</em></td><td></td></tr>
  <tr><td><tt><a href="PronType.html">PronType</a>=Art</tt></td><td><em>l’</em></td><td></td></tr>
</table>

### `VERB`

22178 [it-pos/VERB]() tokens (78% of all `VERB` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `VERB` and `Number` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (13625; 61%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (13262; 60%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (12193; 55%), <tt><a href="Person.html">Person</a>=3</tt> (11941; 54%).

`VERB` tokens may have the following values of `Number`:

* `Plur` (6068; 27% of non-empty `Number`): <em>sono, hanno, erano, fanno, siano, siamo, stabilite, fatti, trovano, stati</em>
* `Sing` (16110; 73% of non-empty `Number`): <em>è, ha, era, fatto, trova, stato, visto, fa, chiama, sia</em>
* `EMPTY` (6434): <em>essere, fare, far, vedere, avere, dire, dare, chiedere, andare, pagare</em>

<table>
  <tr><th>Paradigm <i>essere</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>stato</em></td><td><em>stati</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>stata</em></td><td><em>state</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sarei</em></td><td><em>saremmo</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sarebbe</em></td><td><em>sarebbero</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Imp|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sii</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sarò</em></td><td><em>saremo</em></td></tr>
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

18332 [it-pos/ADJ]() tokens (98% of all `ADJ` tokens) have a non-empty value of `Number`.

`ADJ` tokens may have the following values of `Number`:

* `Plur` (6004; 33% of non-empty `Number`): <em>altri, grandi, seguenti, nazionali, speciali, altre, locali, importanti, internazionali, principali</em>
* `Sing` (12328; 67% of non-empty `Number`): <em>grande, presente, comune, primo, prima, internazionale, possibile, sociale, nazionale, nuovo</em>
* `EMPTY` (347): <em>ex, pari, anti, gran, fa, vice, 1°, blu, maggior, post</em>

<table>
  <tr><th>Paradigm <i>altro</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><em>altro</em></td><td><em>altri</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td><em>altra</em></td><td><em>altre</em></td></tr>
</table>

### `AUX`

7582 [it-pos/AUX]() tokens (94% of all `AUX` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `AUX` and `Number` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (7006; 92%), <tt><a href="Person.html">Person</a>=3</tt> (6489; 86%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (6237; 82%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (6034; 80%).

`AUX` tokens may have the following values of `Number`:

* `Plur` (2291; 30% of non-empty `Number`): <em>sono, hanno, possono, stati, devono, abbiamo, erano, siano, possiamo, vengono</em>
* `Sing` (5291; 70% of non-empty `Number`): <em>è, ha, può, stato, deve, era, viene, stata, aveva, sia</em>
* `EMPTY` (500): <em>essere, aver, poter, esser, dover, avere, voler, essendo, venire, avendo</em>

<table>
  <tr><th>Paradigm <i>essere</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>stato</em></td><td><em>stati</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>stata</em></td><td><em>state</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>saremmo</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sarebbe</em></td><td><em>sarebbero</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>ero</em></td><td><em>eravamo</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>Fui</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sono</em></td><td><em>siamo</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sei</em></td><td><em>siete</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sarà</em></td><td><em>saranno</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>era</em></td><td><em>erano</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fu</em></td><td><em>furono</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>è, E'</em></td><td><em>sono, son</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fossi</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fosse</em></td><td><em>fossero</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sia</em></td><td><em>siano</em></td></tr>
</table>

### `PRON`

4944 [it-pos/PRON]() tokens (44% of all `PRON` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PRON` and `Number` co-occurred: <tt><a href="Person.html">Person</a>=EMPTY</tt> (2876; 58%).

`PRON` tokens may have the following values of `Number`:

* `Plur` (1325; 27% of non-empty `Number`): <em>ci, li, noi, tutti, altri, loro, quelli, quelle, quali, essi</em>
* `Sing` (3619; 73% of non-empty `Number`): <em>lo, qual, quanto, mi, quale, quello, uno, la, questo, cosa</em>
* `EMPTY` (6313): <em>si, che, chi, cui, ne, ci, c', se, le, vi</em>

<table>
  <tr><th>Paradigm <i>lo</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Person.html">Person</a>=3</tt></td><td><em>lo, gli</em></td><td><em>li</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><em>lo</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Person.html">Person</a>=3</tt></td><td><em>la</em></td><td><em>le</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td></td><td><em>le</em></td></tr>
  <tr><td><tt><a href="Person.html">Person</a>=3</tt></td><td><em>l', gli</em></td><td><em>gli</em></td></tr>
</table>

### `ADP`

4 [it-pos/ADP]() tokens (0% of all `ADP` tokens) have a non-empty value of `Number`.

`ADP` tokens may have the following values of `Number`:

* `Sing` (4; 100% of non-empty `Number`): <em>alla, del, della, du</em>
* `EMPTY` (44541): <em>di, a, in, da, per, con, su, come, ad, tra</em>

### `PROPN`

3 [it-pos/PROPN]() tokens (0% of all `PROPN` tokens) have a non-empty value of `Number`.

`PROPN` tokens may have the following values of `Number`:

* `Plur` (1; 33% of non-empty `Number`): <em>hye</em>
* `Sing` (2; 67% of non-empty `Number`): <em>Ceca, Repubblica</em>
* `EMPTY` (14757): <em>Italia, Shakespeare, Balzac, Europa, Roma, Stati, Uniti, San, Albania, Marco</em>

### `ADV`

1 [it-pos/ADV]() tokens (0% of all `ADV` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `ADV` and `Number` co-occurred: <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (1; 100%).

`ADV` tokens may have the following values of `Number`:

* `Sing` (1; 100% of non-empty `Number`): <em>pochissimo</em>
* `EMPTY` (11223): <em>non, più, anche, dove, come, quando, solo, sempre, prima, poi</em>

### `X`

1 [it-pos/X]() tokens (1% of all `X` tokens) have a non-empty value of `Number`.

`X` tokens may have the following values of `Number`:

* `Sing` (1; 100% of non-empty `Number`): <em>cultural</em>
* `EMPTY` (183): <em>a, b, c, f, Damage, ad, de, home, la, Come</em>

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>NOUN --[<a href="../dep/det.html">det</a>]--> DET</tt> (36664; 92%),
<tt>NOUN --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (13518; 90%),
<tt>NOUN --[<a href="../dep/nmod.html">nmod</a>]--> NOUN</tt> (8399; 52%),
<tt>VERB --[<a href="../dep/nsubj.html">nsubj</a>]--> NOUN</tt> (4355; 78%),
<tt>VERB --[<a href="../dep/aux.html">aux</a>]--> AUX</tt> (3229; 58%),
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (3087; 72%),
<tt>NOUN --[<a href="../dep/acl.html">acl</a>]--> VERB</tt> (2197; 72%),
<tt>VERB --[<a href="../dep/auxpass.html">auxpass</a>]--> AUX</tt> (1890; 86%),
<tt>NOUN --[<a href="../dep/acl:relcl.html">acl:relcl</a>]--> VERB</tt> (1695; 74%),
<tt>VERB --[<a href="../dep/nsubjpass.html">nsubjpass</a>]--> NOUN</tt> (1558; 86%).

