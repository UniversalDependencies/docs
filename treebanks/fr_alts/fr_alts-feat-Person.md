---
layout: base
title:  'Statistics of Person in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

1927 tokens (3%) have a non-empty value of `Person`.
395 types (6%) occur at least once with a non-empty value of `Person`.
194 lemmas (6%) occur at least once with a non-empty value of `Person`.
The feature is used with 2 part-of-speech tags: <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (1098; 2% instances), <tt><a href="fr_alts-pos-AUX.html">AUX</a></tt> (829; 1% instances).

### `VERB`

1098 <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> tokens (12% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="fr_alts-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (1098; 100%), <tt><a href="fr_alts-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (1098; 100%), <tt><a href="fr_alts-feat-Number.html">Number</a></tt><tt>=Sing</tt> (904; 82%).

`VERB` tokens may have the following values of `Person`:

* `1` (24; 2% of non-empty `Person`): <em>defens, adaptons, afferme, allegue, appellons, bannissons, croy, denie, deuo[m]s, disons</em>
* `2` (21; 2% of non-empty `Person`): <em>voyez, notez, Entendez, ioignez, ouez</em>
* `3` (1053; 96% of non-empty `Person`): <em>peut, a, doit, est, faut, dit, pourroit, fait, veut, appelle</em>
* `EMPTY` (7847): <em>dit, raporte, faire, dire, dyst, avoet, a, estoet, croire, passey</em>

<table>
  <tr><th>Paradigm <i>voir</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="fr_alts-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>vy</em></td><td></td><td><em>voit, verra</em></td></tr>
  <tr><td><tt><tt><a href="fr_alts-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>voyons</em></td><td><em>voyez</em></td><td></td></tr>
</table>

`Person` seems to be **lexical feature** of `VERB`. 91% lemmas (177) occur only with one value of `Person`.

### `AUX`

829 <tt><a href="fr_alts-pos-AUX.html">AUX</a></tt> tokens (36% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="fr_alts-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (829; 100%), <tt><a href="fr_alts-feat-Number.html">Number</a></tt><tt>=Sing</tt> (675; 81%).

`AUX` tokens may have the following values of `Person`:

* `1` (4; 0% of non-empty `Person`): <em>ay, aye, suis</em>
* `3` (825; 100% of non-empty `Person`): <em>est, sont, a, seroit, soit, sera, estoit, fut, soyent, ont</em>
* `EMPTY` (1503): <em>a, avoet, fut, estoet, est, estre, esté, estey, avoir, estoient</em>

<table>
  <tr><th>Paradigm <i>être</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="fr_alts-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>suis</em></td><td><em>est, seroit, soit, sera, estoit, fut, fust, est-</em></td></tr>
  <tr><td><tt><tt><a href="fr_alts-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>sont, soyent, seront, seroyent, estoyent, estoient, furent, fussent, soient</em></td></tr>
</table>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<tt><a href="fr_alts-dep-conj.html">conj</a></tt>]--> VERB</tt> (77; 61%).

