---
layout: base
title:  'Statistics of Tense in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Features: `Tense`

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

19335 tokens (9%) have a non-empty value of `Tense`.
2223 types (8%) occur at least once with a non-empty value of `Tense`.
1171 lemmas (5%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (10685; 5% instances), <tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (8650; 4% instances).

### `VERB`

10685 <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> tokens (49% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="nl_alpino-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (10685; 100%), <tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt> (8467; 79%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (4121; 39% of non-empty `Tense`): <em>zei, kwam, had, werd, was, vond, kreeg, vroeg, maakte, won</em>
* `Pres` (6564; 61% of non-empty `Tense`): <em>heeft, komt, heet, wil, is, gaat, noemt, ligt, hebben, zijn</em>
* `EMPTY` (11047): <em>komen, gaan, maken, zien, doen, gemaakt, gehouden, genoemd, nemen, laten</em>

<table>
  <tr><th>Paradigm <i>komen</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>komt, kom, kome</em></td><td><em>kwam</em></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>komen</em></td><td><em>kwamen</em></td></tr>
</table>

### `AUX`

8650 <tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> tokens (88% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="nl_alpino-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (8650; 100%), <tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt> (6830; 79%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (2393; 28% of non-empty `Tense`): <em>was, werd, zou, had, waren, werden, kon, zouden, moest, hadden</em>
* `Pres` (6257; 72% of non-empty `Tense`): <em>is, heeft, zijn, wordt, zal, kan, hebben, moet, heb, worden</em>
* `EMPTY` (1144): <em>worden, zijn, kunnen, moeten, hebben, geweest, zullen, mogen, krijgen, gekregen</em>

<table>
  <tr><th>Paradigm <i>zijn</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>is, ben, bent, ware, zij, Wees, zijn</em></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>zijn</em></td><td><em>waren</em></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> VERB</tt> (480; 61%),
<tt>AUX --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> AUX</tt> (7; 100%),
<tt>AUX --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> VERB</tt> (2; 67%),
<tt>VERB --[<tt><a href="nl_alpino-dep-cc.html">cc</a></tt>]--> VERB</tt> (1; 100%).

