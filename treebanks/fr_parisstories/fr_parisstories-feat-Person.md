---
layout: base
title:  'Statistics of Person in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: <tt><a href="fr_parisstories-feat-Person.html">Person</a></tt>, <tt><a href="fr_parisstories-feat-Person-psor.html">Person[psor]</a></tt>.

10168 tokens (24%) have a non-empty value of `Person`.
582 types (18%) occur at least once with a non-empty value of `Person`.
317 lemmas (13%) occur at least once with a non-empty value of `Person`.
The feature is used with 4 part-of-speech tags: <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (5582; 13% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (2442; 6% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (2034; 5% instances), <tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> (110; 0% instances).

### `PRON`

5582 <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> tokens (87% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt> (4776; 86%), <tt><a href="fr_parisstories-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (3634; 65%).

`PRON` tokens may have the following values of `Person`:

* `1` (1578; 28% of non-empty `Person`): <em>je, j', me, moi, nous, m', toi, -moi, moi-même</em>
* `2` (345; 6% of non-empty `Person`): <em>tu, vous, te, t', toi</em>
* `3` (3659; 66% of non-empty `Person`): <em>on, c', il, ça, elle, y, ils, s', se, l'</em>
* `EMPTY` (860): <em>qui, que, m', où, lui, y, il, s', qu', ce</em>

<table>
  <tr><th>Paradigm <i>il</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>tu</em></td><td><em>il, je, elle, j'</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td></td><td><em>ils, eux</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td><em>elle</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td></td><td><em>elles</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>je, j', moi</em></td><td><em>tu, t'</em></td><td><em>il</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>nous</em></td><td><em>vous</em></td><td><em>ils, elles</em></td></tr>
</table>

### `VERB`

2442 <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> tokens (55% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="fr_parisstories-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (2429; 99%), <tt><a href="fr_parisstories-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (2384; 98%), <tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (2337; 96%), <tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2287; 94%), <tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (1583; 65%).

`VERB` tokens may have the following values of `Person`:

* `1` (668; 27% of non-empty `Person`): <em>sais, ai, avais, pense, souviens, crois, dis, vais, vois, étais</em>
* `2` (235; 10% of non-empty `Person`): <em>vois, as, sais, vas, fais, peux, veux, avais, souviens, avez</em>
* `3` (1539; 63% of non-empty `Person`): <em>avait, a, est, fait, était, dit, va, faisait, faut, allait</em>
* `EMPTY` (1978): <em>voilà, faire, fait, aller, dit, eu, vu, dire, voir, parler</em>

<table>
  <tr><th>Paradigm <i>avoir</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Imp</tt>|<tt><a href="fr_parisstories-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>avais</em></td><td><em>avais</em></td><td><em>avait</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_parisstories-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>ai</em></td><td><em>as, avais</em></td><td><em>a</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Imp</tt>|<tt><a href="fr_parisstories-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td></td><td><em>avaient</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_parisstories-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>avons</em></td><td><em>avez</em></td><td><em>ont</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_parisstories-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td></td><td><em>ait</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td><em>a~</em></td></tr>
</table>

### `AUX`

2034 <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> tokens (96% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="fr_parisstories-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (2033; 100%), <tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (2001; 98%), <tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1920; 94%), <tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (1416; 70%).

`AUX` tokens may have the following values of `Person`:

* `1` (438; 22% of non-empty `Person`): <em>ai, suis, étais, avais, aurais, fais, avait, avons, sommes</em>
* `2` (57; 3% of non-empty `Person`): <em>as, es, étais, étiez, êtes, avais, avez, sois, fais, soyez</em>
* `3` (1539; 76% of non-empty `Person`): <em>est, était, a, avait, sont, étaient, ont, avaient, serait, soit</em>
* `EMPTY` (74): <em>été, être, faire, avoir, fait, étais, ai~, eu, refaire</em>

<table>
  <tr><th>Paradigm <i>être</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>serait</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>seraient</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Imp</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td><em>sois</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Fut</tt></tt></td><td></td><td></td><td><em>sera</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Imp</tt></tt></td><td><em>étais</em></td><td><em>étais</em></td><td><em>était</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>suis, étais</em></td><td><em>es</em></td><td><em>est</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Imp</tt></tt></td><td></td><td><em>étiez</em></td><td><em>étaient</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>sommes</em></td><td><em>êtes, êtez</em></td><td><em>sont</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>soit</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td><em>soyez</em></td><td><em>soient</em></td></tr>
</table>

### `DET`

110 <tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> tokens (3% of all `DET` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `DET` and `Person` co-occurred: <tt><a href="fr_parisstories-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (110; 100%), <tt><a href="fr_parisstories-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (87; 79%), <tt><a href="fr_parisstories-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (82; 75%), <tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt> (79; 72%), <tt><a href="fr_parisstories-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt> (70; 64%), <tt><a href="fr_parisstories-feat-Person-psor.html">Person[psor]</a></tt><tt>=1</tt> (68; 62%).

`DET` tokens may have the following values of `Person`:

* `1` (4; 4% of non-empty `Person`): <em>mon, mes</em>
* `3` (106; 96% of non-empty `Person`): <em>mon, ma, mes, quelque, chaque, notre, tes, plusieurs, ces, sa</em>
* `EMPTY` (3372): <em>le, la, un, les, une, l', des, mon, ma, mes</em>

<table>
  <tr><th>Paradigm <i>son</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>ma, sa</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>mon, ton</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Number-psor.html">Number[psor]</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>notre</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>mon</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_parisstories-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Poss.html">Poss</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>tes</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_parisstories-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>mes, tes</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_parisstories-feat-Number-psor.html">Number[psor]</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>nos</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>mes</em></td><td></td></tr>
</table>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<tt><a href="fr_parisstories-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (1846; 63%),
<tt>VERB --[<tt><a href="fr_parisstories-dep-expl-subj.html">expl:subj</a></tt>]--> PRON</tt> (203; 77%),
<tt>VERB --[<tt><a href="fr_parisstories-dep-expl.html">expl</a></tt>]--> PRON</tt> (195; 68%),
<tt>AUX --[<tt><a href="fr_parisstories-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (143; 95%),
<tt>PRON --[<tt><a href="fr_parisstories-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (95; 90%),
<tt>VERB --[<tt><a href="fr_parisstories-dep-conj.html">conj</a></tt>]--> VERB</tt> (85; 52%),
<tt>VERB --[<tt><a href="fr_parisstories-dep-reparandum.html">reparandum</a></tt>]--> VERB</tt> (85; 64%),
<tt>VERB --[<tt><a href="fr_parisstories-dep-dislocated.html">dislocated</a></tt>]--> PRON</tt> (62; 58%),
<tt>PRON --[<tt><a href="fr_parisstories-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (55; 65%),
<tt>PRON --[<tt><a href="fr_parisstories-dep-cop.html">cop</a></tt>]--> AUX</tt> (47; 60%).

