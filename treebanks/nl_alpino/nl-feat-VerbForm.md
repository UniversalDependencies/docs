---
layout: base
title:  'Statistics of VerbForm in UD_Dutch'
udver: '2'
---

## Treebank Statistics: UD_Dutch: Features: `VerbForm`

This feature is universal.
It occurs with 3 different values: `Fin`, `Inf`, `Part`.

31471 tokens (15%) have a non-empty value of `VerbForm`.
5068 types (19%) occur at least once with a non-empty value of `VerbForm`.
2428 lemmas (11%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="nl-pos-VERB.html">VERB</a></tt> (20567; 10% instances), <tt><a href="nl-pos-AUX.html">AUX</a></tt> (10904; 5% instances).

### `VERB`

20567 <tt><a href="nl-pos-VERB.html">VERB</a></tt> tokens (100% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="nl-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (10690; 52%), <tt><a href="nl-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (10690; 52%).

`VERB` tokens may have the following values of `VerbForm`:

* `Fin` (9877; 48% of non-empty `VerbForm`): <em>moet, heeft, komt, is, zei, noemt, hebben, zijn, kwam, ligt</em>
* `Inf` (4599; 22% of non-empty `VerbForm`): <em>komen, moeten, maken, zien, doen, gaan, nemen, zeggen, geven, hebben</em>
* `Part` (6091; 30% of non-empty `VerbForm`): <em>gemaakt, gehouden, genoemd, genomen, gedaan, afgelopen, gegeven, gekomen, gezien, gesteld</em>

<table>
  <tr><th>Paradigm <i>komen</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>komen</em></td><td><em>gekomen, komende, komend</em></td></tr>
  <tr><td><tt><tt><a href="nl-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>kwam</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>komt, kom, kome</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>kwamen</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>komen</em></td><td></td><td></td></tr>
</table>

### `AUX`

10904 <tt><a href="nl-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="nl-feat-Number.html">Number</a></tt><tt>=Sing</tt> (7596; 70%), <tt><a href="nl-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (6788; 62%).

`AUX` tokens may have the following values of `VerbForm`:

* `Fin` (9467; 87% of non-empty `VerbForm`): <em>is, was, heeft, werd, wordt, zijn, zal, zou, kan, hebben</em>
* `Inf` (1263; 12% of non-empty `VerbForm`): <em>worden, zijn, kunnen, hebben, gaan, willen, laten, blijven, zullen, mogen</em>
* `Part` (174; 2% of non-empty `VerbForm`): <em>geweest, geworden, gegaan, gebleven, geraakt, gekomen, gebleken, gemaakt, gevonden, liggende</em>

<table>
  <tr><th>Paradigm <i>zijn</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>zijn</em></td><td><em>geweest, zijnde</em></td></tr>
  <tr><td><tt><tt><a href="nl-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>is, ben, bent, zij, ware, zijn, Wees</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>waren</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>zijn</em></td><td></td><td></td></tr>
</table>

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<tt><a href="nl-dep-conj.html">conj</a></tt>]--> VERB</tt> (793; 72%),
<tt>VERB --[<tt><a href="nl-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (261; 59%),
<tt>VERB --[<tt><a href="nl-dep-acl.html">acl</a></tt>]--> VERB</tt> (9; 60%).

