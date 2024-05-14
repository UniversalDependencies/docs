---
layout: base
title:  'Statistics of Tense in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Features: `Tense`

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

22205 tokens (7%) have a non-empty value of `Tense`.
2496 types (8%) occur at least once with a non-empty value of `Tense`.
1563 lemmas (6%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (12787; 4% instances), <tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (9418; 3% instances).

### `VERB`

12787 <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> tokens (50% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="nl_lassysmall-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (12787; 100%), <tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt> (9376; 73%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (7775; 61% of non-empty `Tense`): <em>kwam, werd, had, was, ging, kreeg, begon, nam, bleef, hadden</em>
* `Pres` (5012; 39% of non-empty `Tense`): <em>heeft, zie, is, komt, zijn, gaat, staat, hebben, wordt, bestaat</em>
* `EMPTY` (12934): <em>maken, genoemd, gaan, volgende, gemaakt, zien, gebruikt, laten, gezien, komen</em>

<table>
  <tr><th>Paradigm <i>hebben</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>heeft, heb, hebt</em></td><td><em>had</em></td></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>hebben</em></td><td><em>hadden</em></td></tr>
</table>

### `AUX`

9418 <tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> tokens (92% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="nl_lassysmall-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (9418; 100%), <tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt> (7084; 75%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (5378; 57% of non-empty `Tense`): <em>was, werd, werden, waren, zou, had, kon, moest, hadden, zouden</em>
* `Pres` (4040; 43% of non-empty `Tense`): <em>is, wordt, zijn, heeft, worden, kan, zal, moet, kunnen, hebben</em>
* `EMPTY` (819): <em>worden, zijn, kunnen, geweest, moeten, hebben, mogen, zijnde, gehad, zullen</em>

<table>
  <tr><th>Paradigm <i>zijn</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>is, ben, bent, zij</em></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>zijn</em></td><td><em>waren</em></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="nl_lassysmall-dep-conj.html">conj</a></tt>]--> VERB</tt> (1209; 62%),
<tt>AUX --[<tt><a href="nl_lassysmall-dep-conj.html">conj</a></tt>]--> AUX</tt> (2; 67%),
<tt>VERB --[<tt><a href="nl_lassysmall-dep-csubj-outer.html">csubj:outer</a></tt>]--> VERB</tt> (2; 67%).

