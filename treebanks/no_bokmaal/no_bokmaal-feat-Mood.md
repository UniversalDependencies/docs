---
layout: base
title:  'Statistics of Mood in UD_Norwegian-Bokmaal'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Bokmaal: Features: `Mood`

This feature is universal.
It occurs with 2 different values: `Imp`, `Ind`.

34828 tokens (11%) have a non-empty value of `Mood`.
2611 types (8%) occur at least once with a non-empty value of `Mood`.
1439 lemmas (6%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (19377; 6% instances), <tt><a href="no_bokmaal-pos-AUX.html">AUX</a></tt> (15451; 5% instances).

### `VERB`

19377 <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> tokens (58% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="no_bokmaal-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (19377; 100%), <tt><a href="no_bokmaal-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (13702; 71%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (230; 1% of non-empty `Mood`): <em>les, la, se, tenk, Ha, ta, send, gi, husk, kom</em>
* `Ind` (19147; 99% of non-empty `Mood`): <em>har, sier, er, blir, kommer, går, mener, ble, får, hadde</em>
* `EMPTY` (13974): <em>få, ha, bli, ta, gjøre, se, si, gå, fått, komme</em>

<table>
  <tr><th>Paradigm <i>ha</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt><tt><a href="no_bokmaal-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>hadde</em></td><td></td></tr>
  <tr><td><tt><tt><a href="no_bokmaal-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>har</em></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>Ha</em></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 95% lemmas (1364) occur only with one value of `Mood`.

### `AUX`

15451 <tt><a href="no_bokmaal-pos-AUX.html">AUX</a></tt> tokens (90% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="no_bokmaal-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (15451; 100%), <tt><a href="no_bokmaal-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (11987; 78%).

`AUX` tokens may have the following values of `Mood`:

* `Imp` (4; 0% of non-empty `Mood`): <em>vær, Få</em>
* `Ind` (15447; 100% of non-empty `Mood`): <em>er, har, var, kan, vil, skal, ble, må, hadde, skulle</em>
* `EMPTY` (1730): <em>være, vært, ha, bli, blitt, kunne, få, fått, måtte, måttet</em>

<table>
  <tr><th>Paradigm <i>være</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt><tt><a href="no_bokmaal-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>var</em></td><td></td></tr>
  <tr><td><tt><tt><a href="no_bokmaal-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>er, e</em></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>vær</em></td></tr>
</table>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<tt><a href="no_bokmaal-dep-conj.html">conj</a></tt>]--> VERB</tt> (1629; 70%),
<tt>VERB --[<tt><a href="no_bokmaal-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (515; 60%),
<tt>VERB --[<tt><a href="no_bokmaal-dep-csubj-pass.html">csubj:pass</a></tt>]--> VERB</tt> (4; 67%).

