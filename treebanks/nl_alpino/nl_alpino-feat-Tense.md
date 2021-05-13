---
layout: base
title:  'Statistics of Tense in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Features: `Tense`

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

14245 tokens (8%) have a non-empty value of `Tense`.
1946 types (8%) occur at least once with a non-empty value of `Tense`.
1278 lemmas (7%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (7577; 4% instances), <tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (6668; 4% instances).

### `VERB`

7577 <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> tokens (45% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="nl_alpino-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (7577; 100%), <tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt> (5828; 77%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (3035; 40% of non-empty `Tense`): <em>kwam, zei, had, was, werd, maakte, bleek, ging, kreeg, wilde</em>
* `Pres` (4542; 60% of non-empty `Tense`): <em>heeft, gaat, wil, komt, is, hebben, zijn, zegt, staat, weet</em>
* `EMPTY` (9242): <em>gaan, komen, maken, zien, doen, gemaakt, gehouden, nemen, laten, hebben</em>

<table>
  <tr><th>Paradigm <i>hebben</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>heeft, heb, hebt</em></td><td><em>had</em></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>hebben</em></td><td><em>hadden</em></td></tr>
</table>

### `AUX`

6668 <tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> tokens (87% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="nl_alpino-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (6668; 100%), <tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt> (5054; 76%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (1914; 29% of non-empty `Tense`): <em>was, werd, zou, had, waren, werden, zouden, kon, moest, hadden</em>
* `Pres` (4754; 71% of non-empty `Tense`): <em>is, heeft, zijn, zal, wordt, kan, hebben, moet, zullen, worden</em>
* `EMPTY` (1009): <em>worden, zijn, kunnen, moeten, hebben, geweest, mogen, zullen, krijgen, wezen</em>

<table>
  <tr><th>Paradigm <i>zijn</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>is, ben, bent, ware, zij</em></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>zijn</em></td><td><em>waren</em></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> VERB</tt> (432; 60%),
<tt>AUX --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> AUX</tt> (6; 100%),
<tt>AUX --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> VERB</tt> (2; 100%),
<tt>VERB --[<tt><a href="nl_alpino-dep-cc.html">cc</a></tt>]--> VERB</tt> (1; 100%).

