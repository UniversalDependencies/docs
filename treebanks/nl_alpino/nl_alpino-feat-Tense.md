---
layout: base
title:  'Statistics of Tense in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Features: `Tense`

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

19337 tokens (9%) have a non-empty value of `Tense`.
2213 types (8%) occur at least once with a non-empty value of `Tense`.
1400 lemmas (6%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (10661; 5% instances), <tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (8676; 4% instances).

### `VERB`

10661 <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> tokens (49% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="nl_alpino-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (10661; 100%), <tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt> (8466; 79%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (4101; 38% of non-empty `Tense`): <em>zei, kwam, had, werd, was, vond, kreeg, vroeg, maakte, won</em>
* `Pres` (6560; 62% of non-empty `Tense`): <em>heeft, komt, heet, wil, is, gaat, noemt, hebben, ligt, zijn</em>
* `EMPTY` (11250): <em>komen, gaan, maken, zien, doen, gemaakt, gehouden, genoemd, nemen, laten</em>

<table>
  <tr><th>Paradigm <i>hebben</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>heeft, heb, hebt, hebbe</em></td><td><em>had</em></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>hebben</em></td><td><em>hadden</em></td></tr>
</table>

### `AUX`

8676 <tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> tokens (88% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="nl_alpino-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (8676; 100%), <tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt> (6832; 79%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (2422; 28% of non-empty `Tense`): <em>was, werd, zou, had, waren, werden, kon, zouden, moest, hadden</em>
* `Pres` (6254; 72% of non-empty `Tense`): <em>is, heeft, zijn, wordt, zal, kan, hebben, moet, heb, worden</em>
* `EMPTY` (1148): <em>worden, zijn, kunnen, moeten, hebben, geweest, zullen, mogen, krijgen, wezen</em>

<table>
  <tr><th>Paradigm <i>zijn</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>is, ben, bent, ware, zij, Wees, Weest, zijn</em></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>zijn</em></td><td><em>waren</em></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> VERB</tt> (478; 61%),
<tt>AUX --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> AUX</tt> (8; 100%),
<tt>VERB --[<tt><a href="nl_alpino-dep-csubj-outer.html">csubj:outer</a></tt>]--> VERB</tt> (7; 58%),
<tt>AUX --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> VERB</tt> (2; 100%),
<tt>VERB --[<tt><a href="nl_alpino-dep-cc.html">cc</a></tt>]--> VERB</tt> (1; 100%).

