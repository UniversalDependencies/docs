---
layout: base
title:  'Statistics of Number in UD_Romanian'
udver: '2'
---

## Treebank Statistics: UD_Romanian: Features: `Number`

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: <tt><a href="ro-feat-Number.html">Number</a></tt>, <tt><a href="ro-feat-Number-psor.html">Number[psor]</a></tt>.

112234 tokens (51%) have a non-empty value of `Number`.
27817 types (88%) occur at least once with a non-empty value of `Number`.
13248 lemmas (76%) occur at least once with a non-empty value of `Number`.
The feature is used with 8 part-of-speech tags: <tt><a href="ro-pos-NOUN.html">NOUN</a></tt> (52216; 24% instances), <tt><a href="ro-pos-VERB.html">VERB</a></tt> (16378; 7% instances), <tt><a href="ro-pos-ADJ.html">ADJ</a></tt> (14727; 7% instances), <tt><a href="ro-pos-DET.html">DET</a></tt> (11216; 5% instances), <tt><a href="ro-pos-AUX.html">AUX</a></tt> (6825; 3% instances), <tt><a href="ro-pos-NUM.html">NUM</a></tt> (5525; 3% instances), <tt><a href="ro-pos-PRON.html">PRON</a></tt> (5033; 2% instances), <tt><a href="ro-pos-PROPN.html">PROPN</a></tt> (314; 0% instances).

### `NOUN`

52216 <tt><a href="ro-pos-NOUN.html">NOUN</a></tt> tokens (96% of all `NOUN` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `NOUN` and `Number` co-occurred: <tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt> (32480; 62%), <tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Acc,Nom</tt> (28795; 55%), <tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (27184; 52%).

`NOUN` tokens may have the following values of `Number`:

* `Plur` (13703; 26% of non-empty `Number`): <em>ani, membre, statele, pacienții, date, informații, zile, ore, condițiile, măsurile</em>
* `Sing` (38513; 74% of non-empty `Number`): <em>timp, cazul, conformitate, loc, timpul, mod, acord, Comisia, parte, lucru</em>
* `EMPTY` (2082): <em>art., b, a., c, nr., CE, b., mg, lit., a</em>

<table>
  <tr><th>Paradigm <i>an</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Acc,Nom</tt>|<tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Def</tt></tt></td><td><em>anul</em></td><td><em>anii</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Dat,Gen</tt>|<tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Def</tt></tt></td><td><em>anului</em></td><td><em>anilor</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Ind</tt></tt></td><td><em>an</em></td><td><em>ani</em></td></tr>
</table>

### `VERB`

16378 <tt><a href="ro-pos-VERB.html">VERB</a></tt> tokens (71% of all `VERB` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `VERB` and `Number` co-occurred: <tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (8776; 54%), <tt><a href="ro-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (8776; 54%), <tt><a href="ro-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (8658; 53%).

`VERB` tokens may have the following values of `Number`:

* `Plur` (4477; 27% of non-empty `Number`): <em>pot, prevăzute, au, sunt, luați, fac, menționate, stabilite, legate, aveți</em>
* `Sing` (11901; 73% of non-empty `Number`): <em>poate, are, avea, avut, este, era, putea, există, fost, face</em>
* `EMPTY` (6786): <em>trebuie, putea, trebui, având, avea, reprezintă, face, prezintă, facă, începând</em>

<table>
  <tr><th>Paradigm <i>putea</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt></tt></td><td><em>putut</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Mood.html">Mood</a></tt><tt>=Imp</tt>|<tt><a href="ro-feat-Person.html">Person</a></tt><tt>=2</tt>|<tt><a href="ro-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>poți</em></td><td><em>puteți</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ro-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="ro-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="ro-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>puturăm</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ro-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="ro-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="ro-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>pot</em></td><td><em>putem</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ro-feat-Person.html">Person</a></tt><tt>=2</tt>|<tt><a href="ro-feat-Tense.html">Tense</a></tt><tt>=Imp</tt>|<tt><a href="ro-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>puteai</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ro-feat-Person.html">Person</a></tt><tt>=2</tt>|<tt><a href="ro-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="ro-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>poți</em></td><td><em>puteți</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ro-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="ro-feat-Tense.html">Tense</a></tt><tt>=Imp</tt>|<tt><a href="ro-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>putea</em></td><td><em>puteau</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ro-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="ro-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="ro-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>putu</em></td><td><em>putură</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ro-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="ro-feat-Tense.html">Tense</a></tt><tt>=Pqp</tt>|<tt><a href="ro-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>putuse</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ro-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="ro-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="ro-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>poate</em></td><td><em>pot</em></td></tr>
</table>

### `ADJ`

14727 <tt><a href="ro-pos-ADJ.html">ADJ</a></tt> tokens (97% of all `ADJ` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `ADJ` and `Number` co-occurred: <tt><a href="ro-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (14691; 100%), <tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Ind</tt> (13845; 94%), <tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt> (9096; 62%), <tt><a href="ro-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (9002; 61%).

`ADJ` tokens may have the following values of `Number`:

* `Plur` (4977; 34% of non-empty `Number`): <em>necesare, mari, mici, chimice, diferite, disponibile, specifice, suplimentare, contractante, noi</em>
* `Sing` (9750; 66% of non-empty `Number`): <em>mare, prezentul, nou, europene, europeană, prezenta, european, prezentului, mică, general</em>
* `EMPTY` (502): <em>asemenea, corespunzătoare, standard, următoare, referitoare, anume, viitoare, așa, asemănătoare, importatoare</em>

<table>
  <tr><th>Paradigm <i>mare</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Acc,Nom</tt>|<tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>marele</em></td><td><em>marii</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Acc,Nom</tt>|<tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>marea</em></td><td><em>marile</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Acc,Nom</tt>|<tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>mare</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Dat,Gen</tt>|<tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Def</tt></tt></td><td></td><td><em>marilor</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Dat,Gen</tt>|<tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>marelui</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Dat,Gen</tt>|<tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>Marii</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Dat,Gen</tt>|<tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>mari</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Ind</tt></tt></td><td></td><td><em>mari</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>mare</em></td><td></td></tr>
</table>

### `DET`

11216 <tt><a href="ro-pos-DET.html">DET</a></tt> tokens (93% of all `DET` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `DET` and `Number` co-occurred: <tt><a href="ro-feat-Position.html">Position</a></tt><tt>=EMPTY</tt> (9512; 85%), <tt><a href="ro-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (8192; 73%), <tt><a href="ro-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (7894; 70%), <tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt> (6270; 56%), <tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Acc,Nom</tt> (6177; 55%), <tt><a href="ro-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (5768; 51%).

`DET` tokens may have the following values of `Number`:

* `Plur` (2164; 19% of non-empty `Number`): <em>ale, toate, unor, aceste, cele, alte, multe, ai, câteva, anumite</em>
* `Sing` (9052; 81% of non-empty `Number`): <em>o, un, a, al, unei, lui, unui, acest, cel, această</em>
* `EMPTY` (814): <em>lui, lor, orice, ei, niște, ce, oarecare, care, cutare, -i</em>

<table>
  <tr><th>Paradigm <i>un</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Acc,Nom</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="ro-feat-Position.html">Position</a></tt><tt>=Prenom</tt></tt></td><td></td><td><em>unii</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Acc,Nom</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>un, -un</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Acc,Nom</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="ro-feat-Position.html">Position</a></tt><tt>=Prenom</tt></tt></td><td></td><td><em>unele</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Acc,Nom</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>o, -o</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Dat,Gen</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>unui</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Dat,Gen</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>unei</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Dat,Gen</tt></tt></td><td></td><td><em>unor</em></td></tr>
</table>

### `AUX`

6825 <tt><a href="ro-pos-AUX.html">AUX</a></tt> tokens (81% of all `AUX` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `AUX` and `Number` co-occurred: <tt><a href="ro-feat-Person.html">Person</a></tt><tt>=3</tt> (5979; 88%), <tt><a href="ro-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (4359; 64%), <tt><a href="ro-feat-Mood.html">Mood</a></tt><tt>=EMPTY</tt> (4357; 64%), <tt><a href="ro-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (3756; 55%).

`AUX` tokens may have the following values of `Number`:

* `Plur` (1785; 26% of non-empty `Number`): <em>au, sunt, vor, erau, ați, vom, veți, sunteți, -au, suntem</em>
* `Sing` (5040; 74% of non-empty `Number`): <em>a, este, fost, era, va, e, ai, fusese, -a, aș</em>
* `EMPTY` (1589): <em>fi, ar, am, fie, fiind, eram, nefiind, -ar, -am</em>

<table>
  <tr><th>Paradigm <i>fi</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt></tt></td><td><em>fost</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Mood.html">Mood</a></tt><tt>=Imp</tt>|<tt><a href="ro-feat-Person.html">Person</a></tt><tt>=2</tt>|<tt><a href="ro-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>fii, fi</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ro-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="ro-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="ro-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>sunt</em></td><td><em>suntem</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ro-feat-Person.html">Person</a></tt><tt>=2</tt>|<tt><a href="ro-feat-Tense.html">Tense</a></tt><tt>=Imp</tt>|<tt><a href="ro-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>erai</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ro-feat-Person.html">Person</a></tt><tt>=2</tt>|<tt><a href="ro-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="ro-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>ești</em></td><td><em>sunteți</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ro-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="ro-feat-Tense.html">Tense</a></tt><tt>=Imp</tt>|<tt><a href="ro-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>era</em></td><td><em>erau</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ro-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="ro-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="ro-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>fu</em></td><td><em>fură</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ro-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="ro-feat-Tense.html">Tense</a></tt><tt>=Pqp</tt>|<tt><a href="ro-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>fusese</em></td><td><em>fuseseră</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ro-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="ro-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="ro-feat-Variant.html">Variant</a></tt><tt>=Short</tt>|<tt><a href="ro-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>-i, E-</em></td><td><em>-s</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ro-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="ro-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="ro-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>este, e, îi</em></td><td><em>sunt</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="ro-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="ro-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="ro-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>fiu</em></td><td><em>fim</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="ro-feat-Person.html">Person</a></tt><tt>=2</tt>|<tt><a href="ro-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="ro-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>fii</em></td><td><em>fiți</em></td></tr>
</table>

### `NUM`

5525 <tt><a href="ro-pos-NUM.html">NUM</a></tt> tokens (99% of all `NUM` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `NUM` and `Number` co-occurred: <tt><a href="ro-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (4808; 87%), <tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (4623; 84%), <tt><a href="ro-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (3975; 72%).

`NUM` tokens may have the following values of `Number`:

* `Plur` (4872; 88% of non-empty `Number`): <em>1, 2, 3, două, 4, trei, 5, 6, doi, 7</em>
* `Sing` (653; 12% of non-empty `Number`): <em>primul, prima, I, ii, doilea, doua, iii, treia, iv, ultimul</em>
* `EMPTY` (29): <em>dintâi, 1, întâi, 117, 1894, 20, 2537, 28, 68, 8</em>

<table>
  <tr><th>Paradigm <i>doi</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="ro-feat-Foreign.html">Foreign</a></tt><tt>=Yes</tt>|<tt><a href="ro-feat-NumForm.html">NumForm</a></tt><tt>=Roman</tt>|<tt><a href="ro-feat-NumType.html">NumType</a></tt><tt>=Ord</tt></tt></td><td><em>II</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro-feat-NumForm.html">NumForm</a></tt><tt>=Word</tt>|<tt><a href="ro-feat-NumType.html">NumType</a></tt><tt>=Card</tt></tt></td><td></td><td><em>doi</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro-feat-NumForm.html">NumForm</a></tt><tt>=Word</tt>|<tt><a href="ro-feat-NumType.html">NumType</a></tt><tt>=Ord</tt></tt></td><td><em>doilea, secund</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro-feat-NumForm.html">NumForm</a></tt><tt>=Word</tt>|<tt><a href="ro-feat-NumType.html">NumType</a></tt><tt>=Card</tt></tt></td><td></td><td><em>două</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro-feat-NumForm.html">NumForm</a></tt><tt>=Word</tt>|<tt><a href="ro-feat-NumType.html">NumType</a></tt><tt>=Ord</tt></tt></td><td><em>doua</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-NumForm.html">NumForm</a></tt><tt>=Roman</tt>|<tt><a href="ro-feat-NumType.html">NumType</a></tt><tt>=Ord</tt></tt></td><td><em>ii</em></td><td></td></tr>
</table>

`Number` seems to be **lexical feature** of `NUM`. 97% lemmas (900) occur only with one value of `Number`.

### `PRON`

5033 <tt><a href="ro-pos-PRON.html">PRON</a></tt> tokens (42% of all `PRON` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PRON` and `Number` co-occurred: <tt><a href="ro-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (5033; 100%), <tt><a href="ro-feat-Variant.html">Variant</a></tt><tt>=EMPTY</tt> (4086; 81%), <tt><a href="ro-feat-Person.html">Person</a></tt><tt>=3</tt> (3963; 79%), <tt><a href="ro-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (3188; 63%).

`PRON` tokens may have the following values of `Number`:

* `Plur` (1546; 31% of non-empty `Number`): <em>le, ne, vă, acestea, ei, -i, ele, toate, cele, noi</em>
* `Sing` (3487; 69% of non-empty `Number`): <em>el, o, -l, îl, ea, îi, i, ceea, mă, aceasta</em>
* `EMPTY` (6810): <em>se, care, ce, s-, își, -și, și-, -se, dumneavoastră, cine</em>

<table>
  <tr><th>Paradigm <i>el</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Acc,Nom</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Strong</tt></tt></td><td><em>el</em></td><td><em>ei</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Acc,Nom</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Strong</tt></tt></td><td><em>ea</em></td><td><em>ele</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Weak</tt></tt></td><td><em>îl</em></td><td><em>îi</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Weak</tt>|<tt><a href="ro-feat-Variant.html">Variant</a></tt><tt>=Short</tt></tt></td><td><em>-l, l-, l</em></td><td><em>-i, i-</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Weak</tt></tt></td><td><em>o</em></td><td><em>le</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Weak</tt>|<tt><a href="ro-feat-Variant.html">Variant</a></tt><tt>=Short</tt></tt></td><td><em>-o</em></td><td><em>le-, -le</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Dat,Gen</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Strong</tt></tt></td><td><em>lui</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Dat,Gen</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Strong</tt></tt></td><td><em>ei</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Dat,Gen</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Strong</tt></tt></td><td></td><td><em>lor</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Weak</tt></tt></td><td><em>îi, i</em></td><td><em>le, li</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Weak</tt>|<tt><a href="ro-feat-Variant.html">Variant</a></tt><tt>=Short</tt></tt></td><td><em>-i, i-</em></td><td><em>le-, -le, -li</em></td></tr>
</table>

### `PROPN`

314 <tt><a href="ro-pos-PROPN.html">PROPN</a></tt> tokens (5% of all `PROPN` tokens) have a non-empty value of `Number`.

`PROPN` tokens may have the following values of `Number`:

* `Plur` (14; 4% of non-empty `Number`): <em>Carpaților, Iașilor, Iașii, Carpații, Subcarpații</em>
* `Sing` (300; 96% of non-empty `Number`): <em>României, Moldovei, Dunării, Europei, Franței, Italiei, Norvegiei, Rusiei, Ungariei, Germaniei</em>
* `EMPTY` (5579): <em>România, Winston, București, Timișoara, Iași, Ion, Paris, Alexandru, O'Brien, Moldova</em>

`Number` seems to be **lexical feature** of `PROPN`. 100% lemmas (96) occur only with one value of `Number`.

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>NOUN --[<tt><a href="ro-dep-amod.html">amod</a></tt>]--> ADJ</tt> (11694; 96%),
<tt>NOUN --[<tt><a href="ro-dep-nmod.html">nmod</a></tt>]--> NOUN</tt> (9952; 60%),
<tt>NOUN --[<tt><a href="ro-dep-det.html">det</a></tt>]--> DET</tt> (8511; 83%),
<tt>VERB --[<tt><a href="ro-dep-nsubj.html">nsubj</a></tt>]--> NOUN</tt> (3772; 66%),
<tt>NOUN --[<tt><a href="ro-dep-acl.html">acl</a></tt>]--> VERB</tt> (2872; 69%),
<tt>NOUN --[<tt><a href="ro-dep-conj.html">conj</a></tt>]--> NOUN</tt> (2702; 80%),
<tt>VERB --[<tt><a href="ro-dep-aux.html">aux</a></tt>]--> AUX</tt> (2587; 59%),
<tt>VERB --[<tt><a href="ro-dep-conj.html">conj</a></tt>]--> VERB</tt> (1480; 72%),
<tt>VERB --[<tt><a href="ro-dep-nsubj-pass.html">nsubj:pass</a></tt>]--> NOUN</tt> (1148; 74%),
<tt>VERB --[<tt><a href="ro-dep-aux-pass.html">aux:pass</a></tt>]--> AUX</tt> (913; 61%).

