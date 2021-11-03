---
layout: base
title:  'Statistics of Person in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: <tt><a href="fr_rhapsodie-feat-Person.html">Person</a></tt>, <tt><a href="fr_rhapsodie-feat-Person-psor.html">Person[psor]</a></tt>.

9122 tokens (21%) have a non-empty value of `Person`.
811 types (18%) occur at least once with a non-empty value of `Person`.
393 lemmas (12%) occur at least once with a non-empty value of `Person`.
The feature is used with 5 part-of-speech tags: <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (4651; 11% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (2534; 6% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (1540; 3% instances), <tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (396; 1% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).

### `PRON`

4651 <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> tokens (87% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3358; 72%), <tt><a href="fr_rhapsodie-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (3061; 66%).

`PRON` tokens may have the following values of `Person`:

* `1` (1094; 24% of non-empty `Person`): <em>je, j', nous, me, moi, m', -moi, -nous, moi-même</em>
* `2` (564; 12% of non-empty `Person`): <em>vous, tu, -vous, te, t', toi, -tu, vous-même, -toi</em>
* `3` (2993; 64% of non-empty `Person`): <em>c', il, on, ça, y, ce, ils, se, elle, s'</em>
* `EMPTY` (710): <em>qui, que, où, qu', dont, j~, lequel, laquelle, autre, autres</em>

<table>
  <tr><th>Paradigm <i>il</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="fr_rhapsodie-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td><em>il, -il, -t-il</em></td></tr>
  <tr><td><tt><tt><a href="fr_rhapsodie-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td></td><td><em>ils, -ils</em></td></tr>
  <tr><td><tt><tt><a href="fr_rhapsodie-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td><em>elle</em></td></tr>
  <tr><td><tt><tt><a href="fr_rhapsodie-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td></td><td><em>elles</em></td></tr>
  <tr><td><tt><tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>je, j'</em></td><td><em>tu, -tu</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>nous</em></td><td><em>vous, -vous</em></td><td></td></tr>
</table>

### `VERB`

2534 <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> tokens (60% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="fr_rhapsodie-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (2533; 100%), <tt><a href="fr_rhapsodie-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (2527; 100%), <tt><a href="fr_rhapsodie-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (2358; 93%), <tt><a href="fr_rhapsodie-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (2178; 86%), <tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1924; 76%).

`VERB` tokens may have the following values of `Person`:

* `1` (604; 24% of non-empty `Person`): <em>ai, crois, sais, vais, avais, pense, veux, vois, disons, aime</em>
* `2` (401; 16% of non-empty `Person`): <em>allez, avez, continuez, voulez, voyez, pouvez, savez, passez, prenez, arrives</em>
* `3` (1529; 60% of non-empty `Person`): <em>a, est, va, faut, peut, avait, fait, ont, dit, voit</em>
* `EMPTY` (1666): <em>dire, voilà, faire, dit, fait, avoir, aller, eu, voir, passer</em>

<table>
  <tr><th>Paradigm <i>avoir</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="fr_rhapsodie-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_rhapsodie-feat-Tense.html">Tense</a></tt><tt>=Fut</tt></tt></td><td><em>aurai</em></td><td></td><td><em>aura</em></td></tr>
  <tr><td><tt><tt><a href="fr_rhapsodie-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_rhapsodie-feat-Tense.html">Tense</a></tt><tt>=Imp</tt></tt></td><td><em>avais</em></td><td></td><td><em>avait</em></td></tr>
  <tr><td><tt><tt><a href="fr_rhapsodie-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_rhapsodie-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>ai</em></td><td><em>as</em></td><td><em>a</em></td></tr>
  <tr><td><tt><tt><a href="fr_rhapsodie-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_rhapsodie-feat-Tense.html">Tense</a></tt><tt>=Imp</tt></tt></td><td><em>avions</em></td><td><em>aviez</em></td><td><em>avaient</em></td></tr>
  <tr><td><tt><tt><a href="fr_rhapsodie-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_rhapsodie-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>avons</em></td><td><em>avez</em></td><td><em>ont</em></td></tr>
  <tr><td><tt><tt><a href="fr_rhapsodie-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_rhapsodie-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>aie</em></td><td></td><td><em>ait</em></td></tr>
  <tr><td><tt><tt><a href="fr_rhapsodie-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_rhapsodie-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td><em>ayez</em></td><td></td></tr>
</table>

### `AUX`

1540 <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> tokens (93% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="fr_rhapsodie-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (1540; 100%), <tt><a href="fr_rhapsodie-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1499; 97%), <tt><a href="fr_rhapsodie-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (1354; 88%), <tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1303; 85%).

`AUX` tokens may have the following values of `Person`:

* `1` (241; 16% of non-empty `Person`): <em>ai, suis, étais, avons, sommes, aurais, avais, serais, serons, aurai</em>
* `2` (67; 4% of non-empty `Person`): <em>avez, êtes, étiez, as, aviez, ayez, es, seras, sois, soyez</em>
* `3` (1232; 80% of non-empty `Person`): <em>est, a, était, sont, ont, avait, étaient, sera, soit, fait</em>
* `EMPTY` (119): <em>être, été, faire, avoir, fait, ayant, faisant, étant</em>

<table>
  <tr><th>Paradigm <i>être</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="fr_rhapsodie-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_rhapsodie-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>serais, s~</em></td><td></td><td><em>serait</em></td></tr>
  <tr><td><tt><tt><a href="fr_rhapsodie-feat-Mood.html">Mood</a></tt><tt>=Imp</tt>|<tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_rhapsodie-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td><em>sois</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_rhapsodie-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_rhapsodie-feat-Tense.html">Tense</a></tt><tt>=Fut</tt></tt></td><td><em>serai</em></td><td><em>seras</em></td><td><em>sera</em></td></tr>
  <tr><td><tt><tt><a href="fr_rhapsodie-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_rhapsodie-feat-Tense.html">Tense</a></tt><tt>=Imp</tt></tt></td><td><em>étais</em></td><td></td><td><em>était</em></td></tr>
  <tr><td><tt><tt><a href="fr_rhapsodie-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_rhapsodie-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td></td><td><em>fut</em></td></tr>
  <tr><td><tt><tt><a href="fr_rhapsodie-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_rhapsodie-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>suis</em></td><td><em>es</em></td><td><em>est</em></td></tr>
  <tr><td><tt><tt><a href="fr_rhapsodie-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_rhapsodie-feat-Tense.html">Tense</a></tt><tt>=Fut</tt></tt></td><td><em>serons</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_rhapsodie-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_rhapsodie-feat-Tense.html">Tense</a></tt><tt>=Imp</tt></tt></td><td><em>étions</em></td><td><em>étiez</em></td><td><em>étaient</em></td></tr>
  <tr><td><tt><tt><a href="fr_rhapsodie-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_rhapsodie-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>sommes</em></td><td><em>êtes, étiez</em></td><td><em>sont</em></td></tr>
  <tr><td><tt><tt><a href="fr_rhapsodie-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_rhapsodie-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>sois</em></td><td></td><td><em>soit</em></td></tr>
  <tr><td><tt><tt><a href="fr_rhapsodie-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_rhapsodie-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td><em>soyez</em></td><td><em>soient</em></td></tr>
</table>

### `DET`

396 <tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> tokens (9% of all `DET` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `DET` and `Person` co-occurred: <tt><a href="fr_rhapsodie-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (390; 98%), <tt><a href="fr_rhapsodie-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (285; 72%), <tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Sing</tt> (277; 70%), <tt><a href="fr_rhapsodie-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (274; 69%).

`DET` tokens may have the following values of `Person`:

* `3` (396; 100% of non-empty `Person`): <em>mon, votre, sa, notre, ces, ma, quelque, vos, nos, mes</em>
* `EMPTY` (4075): <em>le, la, les, l', un, une, des, ce, cette, son</em>

`Person` seems to be **lexical feature** of `DET`. 100% lemmas (11) occur only with one value of `Person`.

### `ADJ`

1 <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `ADJ` and `Person` co-occurred: <tt><a href="fr_rhapsodie-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="fr_rhapsodie-feat-Number.html">Number</a></tt><tt>=Plur</tt> (1; 100%).

`ADJ` tokens may have the following values of `Person`:

* `3` (1; 100% of non-empty `Person`): <em>autres</em>
* `EMPTY` (1557): <em>petit, tous, tout, jeune, grande, vrai, autre, droit, même, premier</em>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<tt><a href="fr_rhapsodie-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (1665; 72%),
<tt>VERB --[<tt><a href="fr_rhapsodie-dep-expl-subj.html">expl:subj</a></tt>]--> PRON</tt> (241; 92%),
<tt>VERB --[<tt><a href="fr_rhapsodie-dep-iobj.html">iobj</a></tt>]--> PRON</tt> (238; 62%),
<tt>AUX --[<tt><a href="fr_rhapsodie-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (115; 93%),
<tt>VERB --[<tt><a href="fr_rhapsodie-dep-dep-comp.html">dep:comp</a></tt>]--> PRON</tt> (109; 60%),
<tt>PRON --[<tt><a href="fr_rhapsodie-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (91; 84%),
<tt>VERB --[<tt><a href="fr_rhapsodie-dep-reparandum.html">reparandum</a></tt>]--> VERB</tt> (83; 65%),
<tt>PRON --[<tt><a href="fr_rhapsodie-dep-cop.html">cop</a></tt>]--> AUX</tt> (64; 67%),
<tt>PRON --[<tt><a href="fr_rhapsodie-dep-acl-relcl.html">acl:relcl</a></tt>]--> VERB</tt> (62; 65%),
<tt>VERB --[<tt><a href="fr_rhapsodie-dep-conj.html">conj</a></tt>]--> VERB</tt> (53; 70%).

