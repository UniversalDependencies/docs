---
layout: base
title:  'Statistics of Polarity in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Features: `Polarity`

This feature is universal but the values `Aff` are language-specific.
It occurs with 2 different values: `Aff`, `Neg`.

1105 tokens (2%) have a non-empty value of `Polarity`.
11 types (0%) occur at least once with a non-empty value of `Polarity`.
5 lemmas (0%) occur at least once with a non-empty value of `Polarity`.
The feature is used with 2 part-of-speech tags: <tt><a href="gd_arcosg-pos-PART.html">PART</a></tt> (860; 1% instances), <tt><a href="gd_arcosg-pos-AUX.html">AUX</a></tt> (245; 0% instances).

### `PART`

860 <tt><a href="gd_arcosg-pos-PART.html">PART</a></tt> tokens (12% of all `PART` tokens) have a non-empty value of `Polarity`.

The most frequent other feature values with which `PART` and `Polarity` co-occurred: <tt><a href="gd_arcosg-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (803; 93%), <tt><a href="gd_arcosg-feat-PartType.html">PartType</a></tt><tt>=Cmpl</tt> (796; 93%).

`PART` tokens may have the following values of `Polarity`:

* `Neg` (860; 100% of non-empty `Polarity`): <em>cha, nach, chan, na</em>
* `EMPTY` (6194): <em>a, a', gu, ag, air, gun, an, do, gum, a’</em>

### `AUX`

245 <tt><a href="gd_arcosg-pos-AUX.html">AUX</a></tt> tokens (26% of all `AUX` tokens) have a non-empty value of `Polarity`.

The most frequent other feature values with which `AUX` and `Polarity` co-occurred: <tt><a href="gd_arcosg-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (245; 100%).

`AUX` tokens may have the following values of `Polarity`:

* `Aff` (152; 62% of non-empty `Polarity`): <em>gur, an, gun</em>
* `Neg` (93; 38% of non-empty `Polarity`): <em>chan, nach, cha</em>
* `EMPTY` (688): <em>'s, is, b', bu, as, b’, ‘s, ’s, S, nach</em>

<table>
  <tr><th>Paradigm <i>is</i></th><th><tt>Neg</tt></th><th><tt>Aff</tt></th></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-Mood.html">Mood</a></tt><tt>=Int</tt></tt></td><td><em>nach</em></td><td><em>an</em></td></tr>
  <tr><td><tt></tt></td><td><em>chan, cha, nach</em></td><td><em>gur, gun</em></td></tr>
</table>

## Relations with Agreement in `Polarity`

The 10 most frequent relations where parent and child node agree in `Polarity`:
<tt>PART --[<tt><a href="gd_arcosg-dep-reparandum.html">reparandum</a></tt>]--> PART</tt> (1; 100%).

