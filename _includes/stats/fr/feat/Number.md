

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

207475 tokens (52%) have a non-empty value of `Number`.
24291 types (57%) occur at least once with a non-empty value of `Number`.
14389 lemmas (44%) occur at least once with a non-empty value of `Number`.
The feature is used with 8 part-of-speech tags: [fr-pos/NOUN]() (74347; 18% instances), [fr-pos/DET]() (61626; 15% instances), [fr-pos/VERB]() (28769; 7% instances), [fr-pos/ADJ]() (22708; 6% instances), [fr-pos/PRON]() (11666; 3% instances), [fr-pos/AUX]() (8348; 2% instances), [fr-pos/NUM]() (10; 0% instances), [fr-pos/PROPN]() (1; 0% instances).

### `NOUN`

74347 [fr-pos/NOUN]() tokens (99% of all `NOUN` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `NOUN` and `Number` co-occurred: <tt><a href="Gender.html">Gender</a>=Masc</tt> (41322; 56%).

`NOUN` tokens may have the following values of `Number`:

* `Plur` (18569; 25% of non-empty `Number`): <em>ans, années, pays, enfants, habitants, personnes, jours, droits, points, hommes</em>
* `Sing` (55778; 75% of non-empty `Number`): <em>ville, partie, nom, monde, région, commune, groupe, temps, famille, année</em>
* `EMPTY` (411): <em>A, Co., Company, League, Mt, Panther, Trail, blackface, facto, night</em>

<table>
  <tr><th>Paradigm <i>année</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>année</em></td><td><em>années</em></td></tr>
</table>

### `DET`

61626 [fr-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `DET` and `Number` co-occurred: <tt><a href="PronType.html">PronType</a>=Art</tt> (53346; 87%), <tt><a href="Definite.html">Definite</a>=Def</tt> (43253; 70%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (32509; 53%).

`DET` tokens may have the following values of `Number`:

* `Plur` (14544; 24% of non-empty `Number`): <em>les, des, ses, ces, de, plusieurs, leurs, tous, quelques, toutes</em>
* `Sing` (47082; 76% of non-empty `Number`): <em>le, la, l', un, une, son, sa, cette, ce, leur</em>
* `EMPTY` (140): <em>the, de, d', no, your, All, Il, las, His, Leur</em>

<table>
  <tr><th>Paradigm <i>le</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>l'</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>le, l', l</em></td><td><em>les</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td><em>la</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>la, l', l, là</em></td><td><em>les, L</em></td></tr>
  <tr><td><tt><a href="PronType.html">PronType</a>=Art</tt></td><td><em>l', L</em></td><td><em>les</em></td></tr>
</table>

### `VERB`

28769 [fr-pos/VERB]() tokens (79% of all `VERB` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `VERB` and `Number` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (17492; 61%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (17492; 61%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (16941; 59%), <tt><a href="Person.html">Person</a>=3</tt> (16752; 58%).

`VERB` tokens may have the following values of `Number`:

* `Plur` (5558; 19% of non-empty `Number`): <em>sont, ont, étaient, font, prennent, trouvent, permettent, sommes, utilisés, appelés</em>
* `Sing` (23211; 81% of non-empty `Number`): <em>est, fait, a, était, né, située, situé, été, fut, trouve</em>
* `EMPTY` (7432): <em>faire, être, partir, voir, prendre, avoir, étant, mettre, passer, trouver</em>

<table>
  <tr><th>Paradigm <i>être</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>été</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>serais</em></td><td><em>serions</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>seriez</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>serait</em></td><td><em>seraient</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Imp|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>soyez</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>étais</em></td><td><em>étions</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>suis</em></td><td><em>sommes</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>serez</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>es</em></td><td><em>êtes</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sera</em></td><td><em>seront</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>était</em></td><td><em>étaient</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fut</em></td><td><em>furent</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>est, esr</em></td><td><em>sont</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>soyez</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fût</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>soit</em></td><td><em>soient</em></td></tr>
</table>

### `ADJ`

22708 [fr-pos/ADJ]() tokens (99% of all `ADJ` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `ADJ` and `Number` co-occurred: <tt><a href="Gender.html">Gender</a>=Masc</tt> (11997; 53%).

`ADJ` tokens may have the following values of `Number`:

* `Plur` (6228; 27% of non-empty `Number`): <em>autres, nombreux, nombreuses, grands, premières, premiers, grandes, français, nouveaux, politiques</em>
* `Sing` (16480; 73% of non-empty `Number`): <em>première, premier, même, français, française, grande, grand, nouveau, autre, politique</em>
* `EMPTY` (166): <em>live, Blue, complete, American, Last, new, Black, Dead, Global, Globale</em>

<table>
  <tr><th>Paradigm <i>premier</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>Premier</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><em>premier, 1er, Ier, 1e, Ie, 1</em></td><td><em>premiers</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td><em>première, 1ère</em></td><td><em>premières</em></td></tr>
</table>

### `PRON`

11666 [fr-pos/PRON]() tokens (65% of all `PRON` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PRON` and `Number` co-occurred: <tt><a href="Person.html">Person</a>=3</tt> (8497; 73%), <tt><a href="PronType.html">PronType</a>=Prs</tt> (8071; 69%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (6239; 53%).

`PRON` tokens may have the following values of `Number`:

* `Plur` (2053; 18% of non-empty `Number`): <em>ils, nous, vous, autres, les, elles, ceux, eux, leur, tous</em>
* `Sing` (9613; 82% of non-empty `Number`): <em>il, elle, on, c', lui, ce, je, le, l', j'</em>
* `EMPTY` (6363): <em>qui, se, s', dont, où, en, qu', y, que, quoi</em>

<table>
  <tr><th>Paradigm <i>il</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Person.html">Person</a>=2</tt></td><td><em>-Tu</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Person.html">Person</a>=3</tt></td><td><em>il, -il, Lui, t-il</em></td><td><em>ils, -ils</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><em>﻿Lui</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Person.html">Person</a>=3</tt></td><td><em>-elle, elle</em></td><td><em>elles, -elles</em></td></tr>
  <tr><td><tt><a href="Person.html">Person</a>=1</tt></td><td><em>je</em></td><td></td></tr>
  <tr><td><tt><a href="Person.html">Person</a>=2</tt></td><td><em>tu</em></td><td></td></tr>
</table>

### `AUX`

8348 [fr-pos/AUX]() tokens (93% of all `AUX` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `AUX` and `Number` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (7519; 90%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (7123; 85%), <tt><a href="Person.html">Person</a>=3</tt> (7076; 85%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (6294; 75%).

`AUX` tokens may have the following values of `Number`:

* `Plur` (1815; 22% of non-empty `Number`): <em>sont, ont, peuvent, avons, furent, étaient, avaient, seront, auraient, vont</em>
* `Sing` (6533; 78% of non-empty `Number`): <em>a, est, été, peut, fut, avait, ai, était, doit, sera</em>
* `EMPTY` (631): <em>être, avoir, ayant, étant, pouvoir, pouvant, aller, vouloir, devant, Do</em>

<table>
  <tr><th>Paradigm <i>être</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>été</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>serais</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>serait</em></td><td><em>seraient</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Imp|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sois</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>étais</em></td><td><em>étions</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>suis</em></td><td><em>sommes</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>serez</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>êtes</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sera</em></td><td><em>seront</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>était</em></td><td><em>étaient</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fut</em></td><td><em>furent</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>est</em></td><td><em>sont, son</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fût</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>soit</em></td><td><em>soient</em></td></tr>
</table>

### `NUM`

10 [fr-pos/NUM]() tokens (0% of all `NUM` tokens) have a non-empty value of `Number`.

`NUM` tokens may have the following values of `Number`:

* `Plur` (10; 100% of non-empty `Number`): <em>00H30, 12H30, 14h25, 15H00, 18h, 18h40, 20h40, 22h, 23h, 48H</em>
* `EMPTY` (10654): <em>deux, trois, 2, 3, 5, 4, quatre, 2010, 2009, 2008</em>

`Number` seems to be **lexical feature** of `NUM`. 100% lemmas (10) occur only with one value of `Number`.

### `PROPN`

1 [fr-pos/PROPN]() tokens (0% of all `PROPN` tokens) have a non-empty value of `Number`.

`PROPN` tokens may have the following values of `Number`:

* `Sing` (1; 100% of non-empty `Number`): <em>mémorique</em>
* `EMPTY` (30745): <em>France, Paris, Europe, États-Unis, Jean, Maroc, État, la, Espagne, New</em>

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>NOUN --[<a href="../dep/det.html">det</a>]--> DET</tt> (49773; 100%),
<tt>NOUN --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (18333; 98%),
<tt>NOUN --[<a href="../dep/nmod.html">nmod</a>]--> NOUN</tt> (13154; 64%),
<tt>VERB --[<a href="../dep/nmod.html">nmod</a>]--> NOUN</tt> (10427; 59%),
<tt>VERB --[<a href="../dep/nsubj.html">nsubj</a>]--> PRON</tt> (5544; 69%),
<tt>VERB --[<a href="../dep/nsubj.html">nsubj</a>]--> NOUN</tt> (5072; 85%),
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (4301; 81%),
<tt>NOUN --[<a href="../dep/nmod:poss.html">nmod:poss</a>]--> DET</tt> (4283; 99%),
<tt>VERB --[<a href="../dep/aux.html">aux</a>]--> AUX</tt> (3828; 65%),
<tt>NOUN --[<a href="../dep/acl.html">acl</a>]--> VERB</tt> (3005; 71%).

