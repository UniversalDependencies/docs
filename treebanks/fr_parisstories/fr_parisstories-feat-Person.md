---
layout: base
title:  'Statistics of Person in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: <tt><a href="fr_parisstories-feat-Person.html">Person</a></tt>, <tt><a href="fr_parisstories-feat-Person-psor.html">Person[psor]</a></tt>.

6948 tokens (23%) have a non-empty value of `Person`.
480 types (17%) occur at least once with a non-empty value of `Person`.
258 lemmas (12%) occur at least once with a non-empty value of `Person`.
The feature is used with 4 part-of-speech tags: <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (3857; 13% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1601; 5% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (1378; 5% instances), <tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> (112; 0% instances).

### `PRON`

3857 <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> tokens (90% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3156; 82%), <tt><a href="fr_parisstories-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (2434; 63%), <tt><a href="fr_parisstories-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (1976; 51%).

`PRON` tokens may have the following values of `Person`:

* `1` (1004; 26% of non-empty `Person`): <em>je, j', me, moi, nous, m', j~, moi-même</em>
* `2` (179; 5% of non-empty `Person`): <em>tu, t', vous, te, toi</em>
* `3` (2674; 69% of non-empty `Person`): <em>on, c', il, y, ça, elle, s', se, ils, lui</em>
* `EMPTY` (434): <em>qui, que, où, ce, qu', nous, me, m', quoi, t'</em>

<table>
  <tr><th>Paradigm <i>il</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>tu</em></td><td><em>il, je, elle, j'</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td></td><td><em>ils</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td><em>elle</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td></td><td><em>elles</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>je, j', j~</em></td><td><em>tu, t'</em></td><td><em>il</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>nous</em></td><td><em>vous</em></td><td><em>ils, elles</em></td></tr>
</table>

### `VERB`

1601 <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> tokens (52% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="fr_parisstories-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1594; 100%), <tt><a href="fr_parisstories-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (1591; 99%), <tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1529; 96%), <tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1486; 93%), <tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (994; 62%).

`VERB` tokens may have the following values of `Person`:

* `1` (397; 25% of non-empty `Person`): <em>sais, avais, ai, vois, dis, pense, vais, crois, étais, souviens</em>
* `2` (127; 8% of non-empty `Person`): <em>vois, as, sais, fais, avais, rajoutes, vas, mets, veux, dis</em>
* `3` (1077; 67% of non-empty `Person`): <em>avait, a, est, était, va, fait, faut, faisait, dit, fallait</em>
* `EMPTY` (1501): <em>voilà, fait, faire, dit, aller, eu, prendre, vu, dire, voir</em>

<table>
  <tr><th>Paradigm <i>avoir</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Imp</tt></tt></td><td><em>avais</em></td><td><em>avais</em></td><td><em>avait</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>ai</em></td><td><em>as, avais</em></td><td><em>a</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Imp</tt></tt></td><td></td><td></td><td><em>avaient</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>avons</em></td><td></td><td><em>ont</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>ait</em></td></tr>
</table>

### `AUX`

1378 <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> tokens (94% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="fr_parisstories-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (1376; 100%), <tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1358; 99%), <tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1294; 94%), <tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (957; 69%).

`AUX` tokens may have the following values of `Person`:

* `1` (273; 20% of non-empty `Person`): <em>ai, suis, étais, avais, aurais, avait, avons, sommes</em>
* `2` (24; 2% of non-empty `Person`): <em>as, es, êtes, sois, étais, fais, soyez</em>
* `3` (1081; 78% of non-empty `Person`): <em>est, était, a, avait, sont, ont, étaient, soit, avaient, aurait</em>
* `EMPTY` (86): <em>ai, été, être, avais, faire, étais, ai~, eu, fait</em>

<table>
  <tr><th>Paradigm <i>être</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>serait</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>seraient</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Imp</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td><em>sois</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Fut</tt></tt></td><td></td><td></td><td><em>sera</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Imp</tt></tt></td><td><em>étais</em></td><td><em>étais</em></td><td><em>était</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>suis, étais</em></td><td><em>es</em></td><td><em>est</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Imp</tt></tt></td><td></td><td></td><td><em>étaient</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>sommes</em></td><td><em>êtes</em></td><td><em>sont</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>soit</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td><em>soyez</em></td><td></td></tr>
</table>

### `DET`

112 <tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> tokens (4% of all `DET` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `DET` and `Person` co-occurred: <tt><a href="fr_parisstories-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (112; 100%), <tt><a href="fr_parisstories-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (85; 76%), <tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt> (83; 74%), <tt><a href="fr_parisstories-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (80; 71%), <tt><a href="fr_parisstories-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt> (68; 61%), <tt><a href="fr_parisstories-feat-Person-psor.html">Person[psor]</a></tt><tt>=1</tt> (68; 61%).

`DET` tokens may have the following values of `Person`:

* `1` (4; 4% of non-empty `Person`): <em>mon, mes</em>
* `3` (108; 96% of non-empty `Person`): <em>mon, ma, mes, quelque, chaque, notre, plusieurs, tes, ces, sa</em>
* `EMPTY` (2409): <em>le, la, un, les, une, l', des, mon, cette, ma</em>

<table>
  <tr><th>Paradigm <i>son</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>ma, sa</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>mon, ton</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Number-psor.html">Number[psor]</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>notre</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>mon</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_parisstories-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>mes, tes</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_parisstories-feat-Number-psor.html">Number[psor]</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>nos</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>mes</em></td><td></td></tr>
</table>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<tt><a href="fr_parisstories-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (1230; 60%),
<tt>AUX --[<tt><a href="fr_parisstories-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (117; 94%),
<tt>VERB --[<tt><a href="fr_parisstories-dep-obl-mod.html">obl:mod</a></tt>]--> PRON</tt> (91; 64%),
<tt>VERB --[<tt><a href="fr_parisstories-dep-conj.html">conj</a></tt>]--> VERB</tt> (75; 52%),
<tt>VERB --[<tt><a href="fr_parisstories-dep-expl-subj.html">expl:subj</a></tt>]--> PRON</tt> (74; 91%),
<tt>VERB --[<tt><a href="fr_parisstories-dep-reparandum.html">reparandum</a></tt>]--> VERB</tt> (68; 73%),
<tt>VERB --[<tt><a href="fr_parisstories-dep-dep-comp.html">dep:comp</a></tt>]--> PRON</tt> (58; 62%),
<tt>PRON --[<tt><a href="fr_parisstories-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (53; 90%),
<tt>PRON --[<tt><a href="fr_parisstories-dep-cop.html">cop</a></tt>]--> AUX</tt> (33; 65%),
<tt>VERB --[<tt><a href="fr_parisstories-dep-dislocated.html">dislocated</a></tt>]--> PRON</tt> (33; 57%).

