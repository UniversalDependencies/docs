---
layout: base
title:  'Statistics of Tense in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Features: `Tense`

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

32366 tokens (11%) have a non-empty value of `Tense`.
2077 types (7%) occur at least once with a non-empty value of `Tense`.
1206 lemmas (5%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (17326; 6% instances), <tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (15040; 5% instances).

### `VERB`

17326 <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> tokens (60% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="no_nynorsk-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (17326; 100%), <tt><a href="no_nynorsk-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (17320; 100%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (5059; 29% of non-empty `Tense`): <em>fekk, kom, hadde, gjekk, sa, vart, var, tok, gjorde, såg</em>
* `Pres` (12267; 71% of non-empty `Tense`): <em>har, seier, er, kjem, får, meiner, går, blir, ser, gjer</em>
* `EMPTY` (11450): <em>få, ha, ta, gå, sjå, bli, fått, gjere, hatt, gje</em>

<table>
  <tr><th>Paradigm <i>ha</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt></tt></td><td><em>har, hev</em></td><td><em>hadde</em></td></tr>
</table>

### `AUX`

15040 <tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> tokens (90% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="no_nynorsk-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (15040; 100%), <tt><a href="no_nynorsk-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (15040; 100%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (3184; 21% of non-empty `Tense`): <em>var, vart, hadde, kunne, skulle, ville, måtte, blei, burde, fekk</em>
* `Pres` (11856; 79% of non-empty `Tense`): <em>er, har, kan, skal, vil, må, blir, vert, bør, får</em>
* `EMPTY` (1679): <em>vore, vere, vera, ha, bli, få, kunna, kunne, blitt, vorte</em>

<table>
  <tr><th>Paradigm <i>vere</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt></tt></td><td><em>er</em></td><td><em>var</em></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="no_nynorsk-dep-conj.html">conj</a></tt>]--> VERB</tt> (1338; 68%),
<tt>AUX --[<tt><a href="no_nynorsk-dep-conj.html">conj</a></tt>]--> VERB</tt> (3; 100%),
<tt>AUX --[<tt><a href="no_nynorsk-dep-csubj.html">csubj</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="no_nynorsk-dep-flat.html">flat</a></tt>]--> VERB</tt> (1; 100%).

