---
layout: base
title:  'Statistics of Person in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: <tt><a href="fr_gsd-feat-Person.html">Person</a></tt>, <tt><a href="fr_gsd-feat-Person-psor.html">Person[psor]</a></tt>.

39469 tokens (10%) have a non-empty value of `Person`.
3604 types (8%) occur at least once with a non-empty value of `Person`.
1382 lemmas (4%) occur at least once with a non-empty value of `Person`.
The feature is used with 4 part-of-speech tags: <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (14585; 4% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (13552; 3% instances), <tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (11323; 3% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (9; 0% instances).

### `PRON`

14585 <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> tokens (80% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="fr_gsd-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (12120; 83%), <tt><a href="fr_gsd-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (11354; 78%), <tt><a href="fr_gsd-feat-Emph.html">Emph</a></tt><tt>=No</tt> (9773; 67%), <tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt> (9054; 62%), <tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (7705; 53%).

`PRON` tokens may have the following values of `Person`:

* `1` (1123; 8% of non-empty `Person`): <em>nous, je, j', m', me, moi, -je, -nous, -moi, moi-même</em>
* `2` (329; 2% of non-empty `Person`): <em>vous, -vous, tu, -tu, t', te, toi, -toi</em>
* `3` (13133; 90% of non-empty `Person`): <em>il, se, s', elle, c', on, y, ils, lui, ce</em>
* `EMPTY` (3600): <em>qui, où, dont, qu', que, lequel, laquelle, lesquels, lesquelles, ou</em>

<table>
  <tr><th>Paradigm <i>soi</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Emph.html">Emph</a></tt><tt>=No</tt>|<tt><a href="fr_gsd-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>se, s'</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Emph.html">Emph</a></tt><tt>=Yes</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>soi</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_gsd-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt></tt></td><td><em>me</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>se, s'</em></td></tr>
</table>

`Person` seems to be **lexical feature** of `PRON`. 95% lemmas (37) occur only with one value of `Person`.

### `VERB`

13552 <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> tokens (43% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (13552; 100%), <tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (13552; 100%), <tt><a href="fr_gsd-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (13552; 100%), <tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (12965; 96%), <tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (10804; 80%), <tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt> (10661; 79%).

`VERB` tokens may have the following values of `Person`:

* `1` (477; 4% of non-empty `Person`): <em>recommande, conseille, ai, trouve, vais, pense, pouvons, aime, devons, peux</em>
* `2` (253; 2% of non-empty `Person`): <em>allez, hésitez, avez, voulez, pouvez, passez, pourrez, pensez, cherchez, trouverez</em>
* `3` (12822; 95% of non-empty `Person`): <em>a, peut, fait, devient, doit, ont, trouve, permet, agit, faut</em>
* `EMPTY` (18217): <em>né, située, faire, situé, partir, eu, fait, mort, voir, connu</em>

<table>
  <tr><th>Paradigm <i>avoir</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>aurais</em></td><td><em>aurais</em></td><td><em>aurait</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td><em>auriez</em></td><td><em>auraient</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Fut</tt></tt></td><td><em>aurai</em></td><td></td><td><em>aura</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Imp</tt>|<tt><a href="fr_gsd-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>avait</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Imp</tt></tt></td><td><em>avais</em></td><td></td><td><em>avait</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>eus</em></td><td></td><td><em>eut</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>ai</em></td><td><em>as</em></td><td><em>a, à</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Fut</tt></tt></td><td></td><td><em>aurez</em></td><td><em>auront</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Imp</tt></tt></td><td><em>avions</em></td><td></td><td><em>avaient</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td></td><td><em>eurent</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_gsd-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>non</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>avons</em></td><td><em>avez</em></td><td><em>ont</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Imp</tt></tt></td><td></td><td></td><td><em>eût</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>ait</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>ayons</em></td><td></td><td><em>aient</em></td></tr>
</table>

### `AUX`

11323 <tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> tokens (87% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="fr_gsd-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (11323; 100%), <tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (10962; 97%), <tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (9588; 85%), <tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt> (8990; 79%).

`AUX` tokens may have the following values of `Person`:

* `1` (412; 4% of non-empty `Person`): <em>ai, avons, suis, sommes, avais, avions, étais, étions, serais, aurais</em>
* `2` (40; 0% of non-empty `Person`): <em>êtes, avez, es, serez, soyez, as, seriez, ayez, fais, sois</em>
* `3` (10871; 96% of non-empty `Person`): <em>est, a, sont, ont, était, fut, avait, sera, étaient, soit</em>
* `EMPTY` (1759): <em>été, être, avoir, étant, faire, ayant, fait, faisant, Etant, vu</em>

<table>
  <tr><th>Paradigm <i>être</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_gsd-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td><em>serais</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>serais</em></td><td></td><td><em>serait</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>serions</em></td><td><em>seriez</em></td><td><em>seraient</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Imp</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td><em>sois</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Imp</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td><em>soyez</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Fut</tt></tt></td><td></td><td></td><td><em>sera</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Imp</tt>|<tt><a href="fr_gsd-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>était</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Imp</tt></tt></td><td><em>étais</em></td><td></td><td><em>était</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td></td><td><em>fut</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_gsd-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>est, esr</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>suis</em></td><td><em>es</em></td><td><em>est</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Fut</tt></tt></td><td></td><td><em>serez</em></td><td><em>seront</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Imp</tt></tt></td><td><em>étions</em></td><td></td><td><em>étaient</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="fr_gsd-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>furent</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td></td><td><em>furent</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_gsd-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>son, sont</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>sommes</em></td><td><em>êtes</em></td><td><em>sont, son</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Imp</tt></tt></td><td></td><td></td><td><em>fût</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>soit</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td><em>soyez</em></td><td><em>soient</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_gsd-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="fr_gsd-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>était</em></td></tr>
</table>

### `ADJ`

9 <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `ADJ` and `Person` co-occurred: <tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt> (7; 78%), <tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (6; 67%).

`ADJ` tokens may have the following values of `Person`:

* `2` (1; 11% of non-empty `Person`): <em>tien</em>
* `3` (8; 89% of non-empty `Person`): <em>sien, leur, sienne, siennes, siens</em>
* `EMPTY` (23789): <em>premier, première, français, autres, même, française, tous, dernier, grande, grand</em>

<table>
  <tr><th>Paradigm <i>sien</i></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_gsd-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt></tt></td><td><em>tien</em></td><td><em>sien</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_gsd-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>siens</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_gsd-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>sienne</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_gsd-feat-Number-psor.html">Number[psor]</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>leur</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_gsd-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>siennes</em></td></tr>
</table>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<tt><a href="fr_gsd-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (4231; 63%),
<tt>VERB --[<tt><a href="fr_gsd-dep-conj.html">conj</a></tt>]--> VERB</tt> (1245; 68%),
<tt>VERB --[<tt><a href="fr_gsd-dep-expl-pv.html">expl:pv</a></tt>]--> PRON</tt> (647; 65%),
<tt>VERB --[<tt><a href="fr_gsd-dep-expl-subj.html">expl:subj</a></tt>]--> PRON</tt> (521; 87%),
<tt>VERB --[<tt><a href="fr_gsd-dep-expl-pass.html">expl:pass</a></tt>]--> PRON</tt> (496; 73%),
<tt>PRON --[<tt><a href="fr_gsd-dep-acl-relcl.html">acl:relcl</a></tt>]--> VERB</tt> (232; 78%),
<tt>PRON --[<tt><a href="fr_gsd-dep-cop.html">cop</a></tt>]--> AUX</tt> (181; 81%),
<tt>VERB --[<tt><a href="fr_gsd-dep-expl-comp.html">expl:comp</a></tt>]--> PRON</tt> (174; 82%),
<tt>PRON --[<tt><a href="fr_gsd-dep-conj.html">conj</a></tt>]--> PRON</tt> (43; 100%),
<tt>PRON --[<tt><a href="fr_gsd-dep-nmod.html">nmod</a></tt>]--> PRON</tt> (43; 65%).

