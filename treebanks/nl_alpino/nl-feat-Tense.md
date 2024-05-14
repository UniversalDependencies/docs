---
layout: base
title:  'Statistics of Tense in UD_Dutch'
udver: '2'
---

## Treebank Statistics: UD_Dutch: Features: `Tense`

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

19344 tokens (9%) have a non-empty value of `Tense`.
2222 types (8%) occur at least once with a non-empty value of `Tense`.
1170 lemmas (5%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="nl-pos-VERB.html">VERB</a></tt> (9877; 5% instances), <tt><a href="nl-pos-AUX.html">AUX</a></tt> (9467; 5% instances).

### `VERB`

9877 <tt><a href="nl-pos-VERB.html">VERB</a></tt> tokens (48% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="nl-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (9877; 100%), <tt><a href="nl-feat-Number.html">Number</a></tt><tt>=Sing</tt> (7708; 78%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (3838; 39% of non-empty `Tense`): <em>zei, kwam, had, was, moest, vond, kreeg, vroeg, won, maakte</em>
* `Pres` (6039; 61% of non-empty `Tense`): <em>moet, heeft, komt, is, noemt, hebben, zijn, ligt, staat, gaat</em>
* `EMPTY` (10690): <em>komen, moeten, maken, zien, doen, gemaakt, gehouden, genoemd, gaan, nemen</em>

<table>
  <tr><th>Paradigm <i>komen</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="nl-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>komt, kom, kome</em></td><td><em>kwam</em></td></tr>
  <tr><td><tt><tt><a href="nl-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>komen</em></td><td><em>kwamen</em></td></tr>
</table>

### `AUX`

9467 <tt><a href="nl-pos-AUX.html">AUX</a></tt> tokens (87% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="nl-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (9467; 100%), <tt><a href="nl-feat-Number.html">Number</a></tt><tt>=Sing</tt> (7596; 80%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (2679; 28% of non-empty `Tense`): <em>was, werd, zou, had, waren, werden, kon, zouden, hadden, wilde</em>
* `Pres` (6788; 72% of non-empty `Tense`): <em>is, heeft, wordt, zijn, zal, kan, hebben, heet, heb, worden</em>
* `EMPTY` (1437): <em>worden, zijn, kunnen, hebben, gaan, geweest, willen, geworden, laten, blijven</em>

<table>
  <tr><th>Paradigm <i>zijn</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="nl-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>is, ben, bent, ware, zij, zijn, Wees</em></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="nl-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>zijn</em></td><td><em>waren</em></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="nl-dep-conj.html">conj</a></tt>]--> VERB</tt> (440; 60%).

