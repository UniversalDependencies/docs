

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

202567 tokens (52%) have a non-empty value of `Number`.
24025 types (57%) occur at least once with a non-empty value of `Number`.
14252 lemmas (44%) occur at least once with a non-empty value of `Number`.
The feature is used with 8 part-of-speech tags: [fr-pos/NOUN]() (72794; 19% instances), [fr-pos/DET]() (60153; 15% instances), [fr-pos/VERB]() (23476; 6% instances), [fr-pos/ADJ]() (22146; 6% instances), [fr-pos/AUX]() (12702; 3% instances), [fr-pos/PRON]() (11285; 3% instances), [fr-pos/NUM]() (8; 0% instances), [fr-pos/PROPN]() (3; 0% instances).

### `NOUN`

72794 [fr-pos/NOUN]() tokens (99% of all `NOUN` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `NOUN` and `Number` co-occurred: <tt><a href="Gender.html">Gender</a>=Masc</tt> (40411; 56%).

`NOUN` tokens may have the following values of `Number`:

* `Plur` (18086; 25% of non-empty `Number`): <em>ans, années, enfants, pays, habitants, jours, personnes, droits, points, hommes</em>
* `Sing` (54708; 75% of non-empty `Number`): <em>ville, partie, monde, nom, région, commune, groupe, famille, temps, année</em>
* `EMPTY` (411): <em>A, Co., Company, League, Mt, Panther, Trail, blackface, night, world</em>

<table>
  <tr><th>Paradigm <i>année</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>année</em></td><td><em>années</em></td></tr>
</table>

### `DET`

60153 [fr-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `DET` and `Number` co-occurred: <tt><a href="PronType.html">PronType</a>=Art</tt> (52094; 87%), <tt><a href="Definite.html">Definite</a>=Def</tt> (42244; 70%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (31689; 53%).

`DET` tokens may have the following values of `Number`:

* `Plur` (14179; 24% of non-empty `Number`): <em>les, des, ses, ces, de, plusieurs, leurs, tous, quelques, toutes</em>
* `Sing` (45974; 76% of non-empty `Number`): <em>le, la, l', un, une, son, sa, cette, ce, leur</em>
* `EMPTY` (140): <em>the, d', de, no, your, All, Il, las, His, Leur</em>

<table>
  <tr><th>Paradigm <i>le</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>l'</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>le, l', l</em></td><td><em>les</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td><em>la</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>la, l', l, Les, là</em></td><td><em>les, L</em></td></tr>
  <tr><td><tt><a href="PronType.html">PronType</a>=Art</tt></td><td><em>l', L</em></td><td><em>les</em></td></tr>
</table>

### `VERB`

23476 [fr-pos/VERB]() tokens (77% of all `VERB` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `VERB` and `Number` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (12563; 54%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (12563; 54%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (12111; 52%), <tt><a href="Tense.html">Tense</a>=Past</tt> (12001; 51%), <tt><a href="Person.html">Person</a>=3</tt> (11952; 51%).

`VERB` tokens may have the following values of `Number`:

* `Plur` (4725; 20% of non-empty `Number`): <em>ont, font, sont, prennent, trouvent, permettent, appelés, constituent, utilisées, utilisés</em>
* `Sing` (18751; 80% of non-empty `Number`): <em>fait, a, né, est, située, situé, trouve, devient, eu, permet</em>
* `EMPTY` (7040): <em>faire, partir, voir, prendre, avoir, passer, mettre, trouver, donner, devenir</em>

<table>
  <tr><th>Paradigm <i>faire</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>fait, fais</em></td><td><em>faits</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>faite</em></td><td><em>faites</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>ferais</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>ferait</em></td><td><em>feraient</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Imp|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>Faisons</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Imp|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fais</em></td><td><em>faites</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>ferai</em></td><td><em>ferons</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fais</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>ferez</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fais</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fera</em></td><td><em>feront</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>faisait</em></td><td><em>faisaient</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fit</em></td><td><em>firent</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fait</em></td><td><em>font</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fasse</em></td><td><em>fassent</em></td></tr>
</table>

### `ADJ`

22146 [fr-pos/ADJ]() tokens (99% of all `ADJ` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `ADJ` and `Number` co-occurred: <tt><a href="Gender.html">Gender</a>=Masc</tt> (11673; 53%).

`ADJ` tokens may have the following values of `Number`:

* `Plur` (6084; 27% of non-empty `Number`): <em>autres, nombreux, nombreuses, grands, premières, premiers, grandes, français, nouveaux, politiques</em>
* `Sing` (16062; 73% of non-empty `Number`): <em>première, premier, même, français, française, grande, grand, nouveau, autre, politique</em>
* `EMPTY` (168): <em>live, Blue, complete, American, Last, new, Black, Dead, Global, Globale</em>

<table>
  <tr><th>Paradigm <i>premier</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>Premier</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><em>premier, 1er, Ier, 1e, 1</em></td><td><em>premiers</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td><em>première, 1re, 1ère</em></td><td><em>premières</em></td></tr>
</table>

### `AUX`

12702 [fr-pos/AUX]() tokens (94% of all `AUX` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `AUX` and `Number` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (11790; 93%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (11324; 89%), <tt><a href="Person.html">Person</a>=3</tt> (11295; 89%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (10027; 79%).

`AUX` tokens may have the following values of `Number`:

* `Plur` (2440; 19% of non-empty `Number`): <em>sont, ont, étaient, peuvent, avons, furent, avaient, seront, sommes, soient</em>
* `Sing` (10262; 81% of non-empty `Number`): <em>est, a, été, était, fut, peut, avait, ai, sera, doit</em>
* `EMPTY` (796): <em>être, avoir, étant, ayant, pouvoir, pouvant, aller, vouloir, be, devant</em>

<table>
  <tr><th>Paradigm <i>être</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>été</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>serais</em></td><td><em>serions</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>seriez</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>serait</em></td><td><em>seraient</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Imp|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sois</em></td><td><em>Soyez</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>étais</em></td><td><em>étions</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>suis</em></td><td><em>sommes</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>serez</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>es</em></td><td><em>êtes</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sera</em></td><td><em>seront</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>était</em></td><td><em>étaient</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fut</em></td><td><em>furent</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>est, esr</em></td><td><em>sont, son</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>soyez</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fût</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>soit</em></td><td><em>soient</em></td></tr>
</table>

### `PRON`

11285 [fr-pos/PRON]() tokens (65% of all `PRON` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PRON` and `Number` co-occurred: <tt><a href="Person.html">Person</a>=3</tt> (8255; 73%), <tt><a href="PronType.html">PronType</a>=Prs</tt> (7829; 69%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (6064; 54%).

`PRON` tokens may have the following values of `Number`:

* `Plur` (1968; 17% of non-empty `Number`): <em>ils, nous, vous, autres, les, elles, ceux, eux, leur, tous</em>
* `Sing` (9317; 83% of non-empty `Number`): <em>il, elle, on, c', lui, ce, je, le, l', j'</em>
* `EMPTY` (6201): <em>qui, se, s', dont, où, en, qu', y, que, quoi</em>

<table>
  <tr><th>Paradigm <i>il</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Person.html">Person</a>=2</tt></td><td><em>-Tu</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Person.html">Person</a>=3</tt></td><td><em>il, -il, t-il, Lui</em></td><td><em>ils, -ils</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><em>﻿Lui</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Person.html">Person</a>=3</tt></td><td><em>-elle, elle</em></td><td><em>elles, -elles</em></td></tr>
  <tr><td><tt><a href="Person.html">Person</a>=1</tt></td><td><em>je</em></td><td></td></tr>
  <tr><td><tt><a href="Person.html">Person</a>=2</tt></td><td><em>tu</em></td><td></td></tr>
</table>

### `NUM`

8 [fr-pos/NUM]() tokens (0% of all `NUM` tokens) have a non-empty value of `Number`.

`NUM` tokens may have the following values of `Number`:

* `Plur` (8; 100% of non-empty `Number`): <em>00H30, 12H30, 14h25, 15H00, 20h40, 22h, 23h, 48H</em>
* `EMPTY` (10425): <em>deux, trois, 2, 3, 5, quatre, 4, 2010, 2009, 2008</em>

### `PROPN`

3 [fr-pos/PROPN]() tokens (0% of all `PROPN` tokens) have a non-empty value of `Number`.

`PROPN` tokens may have the following values of `Number`:

* `Sing` (3; 100% of non-empty `Number`): <em>Italie, Palais, mémorique</em>
* `EMPTY` (29912): <em>France, Paris, Europe, États-Unis, Jean, Maroc, Espagne, la, New, York</em>

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>NOUN --[<a href="../dep/det.html">det</a>]--> DET</tt> (48906; 100%),
<tt>NOUN --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (17997; 98%),
<tt>NOUN --[<a href="../dep/nmod.html">nmod</a>]--> NOUN</tt> (12689; 64%),
<tt>VERB --[<a href="../dep/obl.html">obl</a>]--> NOUN</tt> (10210; 59%),
<tt>VERB --[<a href="../dep/nsubj.html">nsubj</a>]--> PRON</tt> (5350; 69%),
<tt>VERB --[<a href="../dep/nsubj.html">nsubj</a>]--> NOUN</tt> (4960; 86%),
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (4245; 81%),
<tt>NOUN --[<a href="../dep/nmod:poss.html">nmod:poss</a>]--> DET</tt> (4182; 100%),
<tt>VERB --[<a href="../dep/aux.html">aux</a>]--> AUX</tt> (3717; 65%),
<tt>NOUN --[<a href="../dep/acl.html">acl</a>]--> VERB</tt> (2935; 71%).



--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-ParTUT)

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

10099 tokens (56%) have a non-empty value of `Number`.
2561 types (79%) occur at least once with a non-empty value of `Number`.
1872 lemmas (76%) occur at least once with a non-empty value of `Number`.
The feature is used with 6 part-of-speech tags: [fr-pos/NOUN]() (3664; 20% instances), [fr-pos/DET]() (2976; 17% instances), [fr-pos/ADJ]() (1120; 6% instances), [fr-pos/VERB]() (1056; 6% instances), [fr-pos/PRON]() (682; 4% instances), [fr-pos/AUX]() (601; 3% instances).

### `NOUN`

3664 [fr-pos/NOUN]() tokens (97% of all `NOUN` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `NOUN` and `Number` co-occurred: <tt><a href="Gender.html">Gender</a>=Fem</tt> (1965; 54%).

`NOUN` tokens may have the following values of `Number`:

* `Plur` (1064; 29% of non-empty `Number`): <em>membres, états, mesures, droits, fonds, produits, exigences, conditions, informations, transports</em>
* `Sing` (2600; 71% of non-empty `Number`): <em>commission, parlement, droit, sécurité, oeuvre, programme, directive, conseil, rapport, monsieur</em>
* `EMPTY` (100): <em>pays, cas, mme, temps, procès, polystyrène, internet, no, processus, taux</em>

<table>
  <tr><th>Paradigm <i>droit</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>droit</em></td><td><em>droits</em></td></tr>
</table>

### `DET`

2976 [fr-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `DET` and `Number` co-occurred: <tt><a href="PronType.html">PronType</a>=Art</tt> (2381; 80%), <tt><a href="Definite.html">Definite</a>=Def</tt> (2091; 70%).

`DET` tokens may have the following values of `Number`:

* `Plur` (889; 30% of non-empty `Number`): <em>les, des, ces, tous, ses, leurs, de, nos, quelques, toutes</em>
* `Sing` (2087; 70% of non-empty `Number`): <em>le, la, l', une, un, cette, ce, toute, son, sa</em>
* `EMPTY` (8): <em>d', nombreux, de, des</em>

<table>
  <tr><th>Paradigm <i>le</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Masc</tt></td><td><em>le</em></td><td><em>les</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Fem</tt></td><td><em>la</em></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def</tt></td><td><em>l', le</em></td><td><em>les</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind</tt></td><td></td><td><em>Des</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><em>le</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td><em>la</em></td><td></td></tr>
</table>

### `ADJ`

1120 [fr-pos/ADJ]() tokens (97% of all `ADJ` tokens) have a non-empty value of `Number`.

`ADJ` tokens may have the following values of `Number`:

* `Plur` (388; 35% of non-empty `Number`): <em>autres, nécessaires, dangereuses, mêmes, structurels, applicables, communautaires, disponibles, techniques, directrices</em>
* `Sing` (732; 65% of non-empty `Number`): <em>européen, présent, possible, technique, communautaire, présente, grande, responsable, nécessaire, économique</em>
* `EMPTY` (29): <em>faux, divers, délictueux, malheureux, quel, vice, arbitraire, bas, clos, dangereux</em>

<table>
  <tr><th>Paradigm <i>européen</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><em>européen</em></td><td><em>européens</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td><em>européenne</em></td><td><em>européennes</em></td></tr>
</table>

### `VERB`

1056 [fr-pos/VERB]() tokens (68% of all `VERB` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `VERB` and `Number` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (618; 59%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (572; 54%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (550; 52%).

`VERB` tokens may have the following values of `Number`:

* `Plur` (375; 36% of non-empty `Number`): <em>ont, font, choisissez, concernées, demandons, utilisés, accordés, accumulent, appliquent, avons</em>
* `Sing` (681; 64% of non-empty `Number`): <em>a, fait, dite, est, compris, convient, tenu, concernant, pense, concerne</em>
* `EMPTY` (502): <em>faire, dire, compter, améliorer, assurer, communiquer, partir, permettre, soumis, utiliser</em>

<table>
  <tr><th>Paradigm <i>avoir</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>eu</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>aurai</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>ai</em></td><td><em>avons</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>aurez</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>avez</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>aura</em></td><td><em>auront</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>avait</em></td><td><em>avaient</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>a</em></td><td><em>ont</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>ait</em></td><td></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>ayant</em></td><td></td></tr>
</table>

### `PRON`

682 [fr-pos/PRON]() tokens (69% of all `PRON` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PRON` and `Number` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (534; 78%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (412; 60%).

`PRON` tokens may have the following values of `Number`:

* `Plur` (268; 39% of non-empty `Number`): <em>nous, vous, ils, elles, ceux, tous, les, -vous, leur, autres</em>
* `Sing` (414; 61% of non-empty `Number`): <em>je, il, ce, on, l', le, j', cela, elle, chacun</em>
* `EMPTY` (301): <em>qui, se, s', c', que, qu', en, dont, où, y</em>

<table>
  <tr><th>Paradigm <i>il</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>il, -il</em></td><td><em>ils</em></td></tr>
</table>

### `AUX`

601 [fr-pos/AUX]() tokens (91% of all `AUX` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `AUX` and `Number` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (563; 94%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (518; 86%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (470; 78%), <tt><a href="Person.html">Person</a>=3</tt> (466; 78%).

`AUX` tokens may have the following values of `Number`:

* `Plur` (210; 35% of non-empty `Number`): <em>sont, ont, soient, étaient, peuvent, devons, devraient, avons, doivent, sommes</em>
* `Sing` (391; 65% of non-empty `Number`): <em>est, a, été, peut, voudrais, devrait, doit, sera, soit, était</em>
* `EMPTY` (59): <em>être, étant, avoir, pouvoir, aller, ayant</em>

<table>
  <tr><th>Paradigm <i>être</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>été</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>serait</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>étais</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>suis</em></td><td><em>sommes</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>êtes</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sera</em></td><td><em>seront</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>était</em></td><td><em>étaient</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>est</em></td><td><em>sont, étaient</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>soyons</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>soit</em></td><td><em>soient</em></td></tr>
</table>

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>NOUN --[<a href="../dep/det.html">det</a>]--> DET</tt> (2552; 97%),
<tt>NOUN --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (823; 95%),
<tt>NOUN --[<a href="../dep/nmod.html">nmod</a>]--> NOUN</tt> (720; 57%),
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (269; 80%),
<tt>VERB --[<a href="../dep/nsubj.html">nsubj</a>]--> PRON</tt> (252; 59%),
<tt>VERB --[<a href="../dep/nsubj.html">nsubj</a>]--> NOUN</tt> (213; 74%),
<tt>NOUN --[<a href="../dep/acl.html">acl</a>]--> VERB</tt> (185; 68%),
<tt>NOUN --[<a href="../dep/nmod:poss.html">nmod:poss</a>]--> DET</tt> (173; 97%),
<tt>VERB --[<a href="../dep/aux:pass.html">aux:pass</a>]--> AUX</tt> (81; 62%),
<tt>NOUN --[<a href="../dep/acl:relcl.html">acl:relcl</a>]--> VERB</tt> (78; 66%).



--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-Sequoia)

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

32741 tokens (54%) have a non-empty value of `Number`.
7020 types (81%) occur at least once with a non-empty value of `Number`.
4670 lemmas (74%) occur at least once with a non-empty value of `Number`.
The feature is used with 9 part-of-speech tags: [fr-pos/NOUN]() (12248; 20% instances), [fr-pos/DET]() (8923; 15% instances), [fr-pos/ADJ]() (3391; 6% instances), [fr-pos/VERB]() (3320; 5% instances), [fr-pos/AUX]() (1860; 3% instances), [fr-pos/PROPN]() (1508; 2% instances), [fr-pos/PRON]() (1483; 2% instances), [fr-pos/ADP]() (7; 0% instances), [fr-pos/NUM]() (1; 0% instances).

### `NOUN`

12248 [fr-pos/NOUN]() tokens (95% of all `NOUN` tokens) have a non-empty value of `Number`.

`NOUN` tokens may have the following values of `Number`:

* `Plur` (3496; 29% of non-empty `Number`): <em>patients, ans, enfants, effets, jours, millions, mois, études, personnes, collègues</em>
* `Sing` (8752; 71% of non-empty `Number`): <em>affaire, bivalirudine, perfusion, traitement, président, M., solution, administration, juge, dose</em>
* `EMPTY` (647): <em>%, mg, h, kg, ml, cours, cas, hui, D, HLM</em>

<table>
  <tr><th>Paradigm <i>patient</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><em>patient</em></td><td><em>patients</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td><em>patiente</em></td><td><em>patientes</em></td></tr>
</table>

### `DET`

8923 [fr-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `DET` and `Number` co-occurred: <tt><a href="PronType.html">PronType</a>=Art</tt> (7947; 89%), <tt><a href="Definite.html">Definite</a>=Def</tt> (6372; 71%).

`DET` tokens may have the following values of `Number`:

* `Plur` (2367; 27% of non-empty `Number`): <em>les, des, ces, plusieurs, ses, de, d', quelques, leurs, nos</em>
* `Sing` (6556; 73% of non-empty `Number`): <em>le, la, l', une, un, cette, ce, son, votre, sa</em>
* `EMPTY` (42): <em>50 000, 125 000, 1 500, 1 000, 1 200, 10 000, 13 819, 2 127, 6 000, 1 246</em>

<table>
  <tr><th>Paradigm <i>le</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Masc|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>le, les, l'</em></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Fem|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>la, l'</em></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>l'</em></td><td><em>les</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td><em>la</em></td><td></td></tr>
</table>

### `ADJ`

3391 [fr-pos/ADJ]() tokens (90% of all `ADJ` tokens) have a non-empty value of `Number`.

`ADJ` tokens may have the following values of `Number`:

* `Plur` (1124; 33% of non-empty `Number`): <em>autres, indésirables, politiques, tous, cliniques, toutes, jeunes, âgés, fréquents, graves</em>
* `Sing` (2267; 67% of non-empty `Number`): <em>autre, même, politique, clinique, ancien, premier, première, européenne, rénale, jeune</em>
* `EMPTY` (384): <em>zolédronique, français, osseux, faux, 3e, compris, nombreux, post-ménopausique, membres, percutanée</em>

<table>
  <tr><th>Paradigm <i>autre</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>autre</em></td><td><em>autres</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td></td><td><em>autres</em></td></tr>
</table>

### `VERB`

3320 [fr-pos/VERB]() tokens (70% of all `VERB` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `VERB` and `Number` co-occurred: <tt><a href="Voice.html">Voice</a>=EMPTY</tt> (2711; 82%), <tt><a href="Tense.html">Tense</a>=Past</tt> (1841; 55%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (1769; 53%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (1769; 53%), <tt><a href="VerbForm.html">VerbForm</a>=Part</tt> (1769; 53%).

`VERB` tokens may have the following values of `Number`:

* `Plur` (903; 27% of non-empty `Number`): <em>traités, atteints, doivent, ont, peuvent, présentés, rapportées, versées, avez, présentent</em>
* `Sing` (2417; 73% of non-empty `Number`): <em>doit, a, fait, utilisé, eu, faut, administré, est, reçu, agit</em>
* `EMPTY` (1426): <em>voir, faire, mis, concernant, prendre, pris, utiliser, avoir, dire, savoir</em>

<table>
  <tr><th>Paradigm <i>avoir</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>eu</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>eue</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>aurait</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>aurai</em></td><td><em>aurons</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>avions</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>ai</em></td><td><em>avons</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>aurez</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>avez</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>aura</em></td><td><em>auront</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>avait</em></td><td><em>avaient</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>eut</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>a</em></td><td><em>ont</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>aient</em></td></tr>
</table>

### `AUX`

1860 [fr-pos/AUX]() tokens (80% of all `AUX` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `AUX` and `Number` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (1791; 96%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (1631; 88%), <tt><a href="Person.html">Person</a>=3</tt> (1590; 85%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (1500; 81%).

`AUX` tokens may have the following values of `Number`:

* `Plur` (602; 32% of non-empty `Number`): <em>ont, sont, étaient, avons, avaient, avez, devons, peuvent, soient, seront</em>
* `Sing` (1258; 68% of non-empty `Number`): <em>est, a, était, avait, peut, sera, fut, soit, ai, aurait</em>
* `EMPTY` (476): <em>été, être, avoir, ayant, pu, étant, devant, pouvant, ETRE, devoir</em>

<table>
  <tr><th>Paradigm <i>être</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>serais</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>serait</em></td><td><em>seraient</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Imp</tt></td><td><em>étais</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>suis</em></td><td><em>sommes</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Imp</tt></td><td><em>étais</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres</tt></td><td></td><td><em>êtes</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut</tt></td><td><em>sera</em></td><td><em>seront</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp</tt></td><td><em>était</em></td><td><em>étaient, Etaient</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>fut</em></td><td><em>furent</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>est</em></td><td><em>sont</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>sois</em></td><td><em>soyons</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>soit</em></td><td><em>soient</em></td></tr>
</table>

### `PROPN`

1508 [fr-pos/PROPN]() tokens (50% of all `PROPN` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PROPN` and `Number` co-occurred: <tt><a href="Gender.html">Gender</a>=Masc</tt> (970; 64%).

`PROPN` tokens may have the following values of `Number`:

* `Plur` (38; 3% of non-empty `Number`): <em>Hauts-de-Seine, Dominati, États-Unis, verts, Balkans, Brasseries, Communautés, Nations, Offices, Sources</em>
* `Sing` (1470; 97% of non-empty `Number`): <em>Paris, Union, commission, Jacques, France, Francis, Taïwan, Chirac, Paget, Michel</em>
* `EMPTY` (1517): <em>Aclasta, Angiox, RPR, Halphen, Jean-Claude, Thomson, Méry, Éric, Dumas, Schuller</em>

<table>
  <tr><th>Paradigm <i>Paris</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>Paris</em></td><td><em>paris</em></td></tr>
</table>

`Number` seems to be **lexical feature** of `PROPN`. 100% lemmas (490) occur only with one value of `Number`.

### `PRON`

1483 [fr-pos/PRON]() tokens (60% of all `PRON` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PRON` and `Number` co-occurred: <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (1453; 98%), <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (1217; 82%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (771; 52%), <tt><a href="Person.html">Person</a>=3</tt> (765; 52%).

`PRON` tokens may have the following values of `Number`:

* `Plur` (445; 30% of non-empty `Number`): <em>nous, vous, ils, les, eux, ceux, elles, tous, lesquelles, lesquels</em>
* `Sing` (1038; 70% of non-empty `Number`): <em>il, je, elle, c', cela, j', on, un, le, l'</em>
* `EMPTY` (993): <em>qui, se, s', que, ce, y, dont, en, où, qu'</em>

<table>
  <tr><th>Paradigm <i>il</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Person.html">Person</a>=3</tt></td><td><em>il, -il, On, -on</em></td><td><em>ils, -ils</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Person.html">Person</a>=3</tt></td><td><em>elle, -elle</em></td><td><em>elles</em></td></tr>
  <tr><td><tt><a href="Person.html">Person</a>=1</tt></td><td><em>je, j', -je</em></td><td><em>nous, -nous</em></td></tr>
  <tr><td><tt><a href="Person.html">Person</a>=2</tt></td><td></td><td><em>vous, -vous</em></td></tr>
  <tr><td><tt><a href="Person.html">Person</a>=3</tt></td><td><em>on, il, -on</em></td><td></td></tr>
</table>

### `ADP`

7 [fr-pos/ADP]() tokens (0% of all `ADP` tokens) have a non-empty value of `Number`.

`ADP` tokens may have the following values of `Number`:

* `Plur` (5; 71% of non-empty `Number`): <em>à</em>
* `Sing` (2; 29% of non-empty `Number`): <em>de</em>
* `EMPTY` (9764): <em>de, à, d', en, pour, dans, par, sur, avec, chez</em>

### `NUM`

1 [fr-pos/NUM]() tokens (0% of all `NUM` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `NUM` and `Number` co-occurred: <tt><a href="NumType.html">NumType</a>=Card</tt> (1; 100%).

`NUM` tokens may have the following values of `Number`:

* `Plur` (1; 100% of non-empty `Number`): <em>17</em>
* `EMPTY` (1401): <em>deux, trois, 5, 2, 2006, 10, 3, 30, 1, 4</em>

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>NOUN --[<a href="../dep/det.html">det</a>]--> DET</tt> (7488; 99%),
<tt>NOUN --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (2702; 89%),
<tt>NOUN --[<a href="../dep/nmod.html">nmod</a>]--> NOUN</tt> (2222; 57%),
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (702; 77%),
<tt>VERB --[<a href="../dep/nsubj.html">nsubj</a>]--> NOUN</tt> (681; 77%),
<tt>VERB --[<a href="../dep/nsubj.html">nsubj</a>]--> PRON</tt> (619; 60%),
<tt>NOUN --[<a href="../dep/acl.html">acl</a>]--> VERB</tt> (529; 60%),
<tt>PROPN --[<a href="../dep/det.html">det</a>]--> DET</tt> (496; 81%),
<tt>NOUN --[<a href="../dep/nmod:poss.html">nmod:poss</a>]--> DET</tt> (438; 100%),
<tt>VERB --[<a href="../dep/aux:pass.html">aux:pass</a>]--> AUX</tt> (316; 50%).

