---
layout: base
title:  'Statistics of Person in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: <tt><a href="fr_sequoia-feat-Person.html">Person</a></tt>, <tt><a href="fr_sequoia-feat-Person-psor.html">Person[psor]</a></tt>.

6057 tokens (9%) have a non-empty value of `Person`.
1063 types (11%) occur at least once with a non-empty value of `Person`.
526 lemmas (8%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (2164; 3% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (2115; 3% instances), <tt><a href="fr_sequoia-pos-AUX.html">AUX</a></tt> (1778; 3% instances).

### `PRON`

2164 <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> tokens (77% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="fr_sequoia-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (1815; 84%), <tt><a href="fr_sequoia-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (1764; 82%), <tt><a href="fr_sequoia-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1303; 60%), <tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1245; 58%).

`PRON` tokens may have the following values of `Person`:

* `1` (459; 21% of non-empty `Person`): <em>nous, je, j', me, m', moi, -nous, -je, -moi, moi-même</em>
* `2` (136; 6% of non-empty `Person`): <em>vous, -vous, Toi, vous-même</em>
* `3` (1569; 73% of non-empty `Person`): <em>il, se, s', elle, ce, ils, y, c', cela, en</em>
* `EMPTY` (644): <em>qui, que, dont, où, qu', laquelle, lequel, rien, lesquelles, lesquels</em>

`Person` seems to be **lexical feature** of `PRON`. 100% lemmas (28) occur only with one value of `Person`.

### `VERB`

2115 <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> tokens (36% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="fr_sequoia-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (2115; 100%), <tt><a href="fr_sequoia-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (2115; 100%), <tt><a href="fr_sequoia-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (2115; 100%), <tt><a href="fr_sequoia-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1931; 91%), <tt><a href="fr_sequoia-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (1652; 78%), <tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1478; 70%).

`VERB` tokens may have the following values of `Person`:

* `1` (305; 14% of non-empty `Person`): <em>voudrais, devons, pense, crois, dois, avons, devrions, remercie, voulons, espère</em>
* `2` (98; 5% of non-empty `Person`): <em>avez, veuillez, devez, demandez, pouvez, remarquez, allaitez, prenez, présentez, suivez</em>
* `3` (1712; 81% of non-empty `Person`): <em>doit, a, peut, doivent, faut, est, peuvent, agit, concerne, contient</em>
* `EMPTY` (3771): <em>voir, mis, eu, faire, traités, utilisé, atteints, administré, reçu, concernant</em>

<table>
  <tr><th>Paradigm <i>devoir</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_sequoia-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>devrais</em></td><td></td><td><em>devrait</em></td></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_sequoia-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>devrions</em></td><td><em>devriez</em></td><td><em>devraient</em></td></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_sequoia-feat-Tense.html">Tense</a></tt><tt>=Fut</tt></tt></td><td></td><td></td><td><em>devra</em></td></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_sequoia-feat-Tense.html">Tense</a></tt><tt>=Imp</tt></tt></td><td></td><td></td><td><em>devait</em></td></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_sequoia-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>dois</em></td><td></td><td><em>doit</em></td></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_sequoia-feat-Tense.html">Tense</a></tt><tt>=Fut</tt></tt></td><td><em>devrons</em></td><td><em>devrez</em></td><td><em>devront</em></td></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_sequoia-feat-Tense.html">Tense</a></tt><tt>=Imp</tt></tt></td><td></td><td></td><td><em>devaient</em></td></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_sequoia-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>devons</em></td><td><em>devez</em></td><td><em>doivent</em></td></tr>
</table>

### `AUX`

1778 <tt><a href="fr_sequoia-pos-AUX.html">AUX</a></tt> tokens (77% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="fr_sequoia-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (1778; 100%), <tt><a href="fr_sequoia-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1675; 94%), <tt><a href="fr_sequoia-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (1490; 84%), <tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1243; 70%).

`AUX` tokens may have the following values of `Person`:

* `1` (80; 4% of non-empty `Person`): <em>ai, avons, suis, sommes, étais, aurons, avais, avions, serais, sois</em>
* `2` (32; 2% of non-empty `Person`): <em>avez, êtes, ayez</em>
* `3` (1666; 94% of non-empty `Person`): <em>est, a, ont, sont, était, avait, sera, fut, étaient, soit</em>
* `EMPTY` (541): <em>été, être, avoir, ayant, étant, faire, fait, ETRE, faisant</em>

<table>
  <tr><th>Paradigm <i>être</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_sequoia-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>serais</em></td><td></td><td><em>serait</em></td></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_sequoia-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>seraient</em></td></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_sequoia-feat-Tense.html">Tense</a></tt><tt>=Fut</tt></tt></td><td></td><td></td><td><em>sera</em></td></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_sequoia-feat-Tense.html">Tense</a></tt><tt>=Imp</tt>|<tt><a href="fr_sequoia-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>était</em></td></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_sequoia-feat-Tense.html">Tense</a></tt><tt>=Imp</tt></tt></td><td><em>étais</em></td><td></td><td><em>était</em></td></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_sequoia-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td></td><td><em>fut</em></td></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_sequoia-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>suis</em></td><td></td><td><em>est</em></td></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_sequoia-feat-Tense.html">Tense</a></tt><tt>=Fut</tt></tt></td><td></td><td></td><td><em>seront</em></td></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_sequoia-feat-Tense.html">Tense</a></tt><tt>=Imp</tt></tt></td><td></td><td></td><td><em>étaient, Etaient</em></td></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_sequoia-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td></td><td><em>furent</em></td></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_sequoia-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_sequoia-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>sont</em></td></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_sequoia-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>sommes</em></td><td><em>êtes</em></td><td><em>sont</em></td></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_sequoia-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="fr_sequoia-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>soit</em></td></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_sequoia-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>sois</em></td><td></td><td><em>soit</em></td></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_sequoia-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>soyons</em></td><td></td><td><em>soient</em></td></tr>
</table>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<tt><a href="fr_sequoia-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (644; 62%),
<tt>VERB --[<tt><a href="fr_sequoia-dep-expl-subj.html">expl:subj</a></tt>]--> PRON</tt> (139; 78%),
<tt>VERB --[<tt><a href="fr_sequoia-dep-expl-pv.html">expl:pv</a></tt>]--> PRON</tt> (137; 57%),
<tt>VERB --[<tt><a href="fr_sequoia-dep-conj.html">conj</a></tt>]--> VERB</tt> (117; 58%),
<tt>VERB --[<tt><a href="fr_sequoia-dep-expl-pass.html">expl:pass</a></tt>]--> PRON</tt> (34; 60%),
<tt>PRON --[<tt><a href="fr_sequoia-dep-acl-relcl.html">acl:relcl</a></tt>]--> VERB</tt> (29; 62%),
<tt>VERB --[<tt><a href="fr_sequoia-dep-expl-comp.html">expl:comp</a></tt>]--> PRON</tt> (29; 67%),
<tt>VERB --[<tt><a href="fr_sequoia-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (22; 54%),
<tt>PRON --[<tt><a href="fr_sequoia-dep-fixed.html">fixed</a></tt>]--> VERB</tt> (21; 95%),
<tt>PRON --[<tt><a href="fr_sequoia-dep-fixed.html">fixed</a></tt>]--> PRON</tt> (9; 90%).

