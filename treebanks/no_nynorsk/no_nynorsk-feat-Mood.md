---
layout: base
title:  'Statistics of Mood in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Features: `Mood`

This feature is universal.
It occurs with 2 different values: `Imp`, `Ind`.

32740 tokens (11%) have a non-empty value of `Mood`.
2234 types (7%) occur at least once with a non-empty value of `Mood`.
1258 lemmas (6%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (17694; 6% instances), <tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (15046; 5% instances).

### `VERB`

17694 <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> tokens (58% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="no_nynorsk-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (17694; 100%), <tt><a href="no_nynorsk-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (12300; 70%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (336; 2% of non-empty `Mood`): <em>sjå, Les, del, la, ta, legg, tenk, ha, hell, hugs</em>
* `Ind` (17358; 98% of non-empty `Mood`): <em>har, seier, er, kjem, får, meiner, går, fekk, blir, kom</em>
* `EMPTY` (13029): <em>få, ha, ta, gå, bli, sjå, fått, sett, gjort, hatt</em>

<table>
  <tr><th>Paradigm <i>ha</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt><tt><a href="no_nynorsk-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>hadde</em></td><td></td></tr>
  <tr><td><tt><tt><a href="no_nynorsk-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>har, hev</em></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>ha</em></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 93% lemmas (1169) occur only with one value of `Mood`.

### `AUX`

15046 <tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> tokens (90% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="no_nynorsk-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (15046; 100%), <tt><a href="no_nynorsk-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (11855; 79%).

`AUX` tokens may have the following values of `Mood`:

* `Imp` (6; 0% of non-empty `Mood`): <em>ver, bli</em>
* `Ind` (15040; 100% of non-empty `Mood`): <em>er, har, var, kan, skal, vil, må, vart, blir, hadde</em>
* `EMPTY` (1678): <em>vore, vere, vera, ha, bli, få, kunna, kunne, blitt, vorte</em>

<table>
  <tr><th>Paradigm <i>vere</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt><tt><a href="no_nynorsk-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>var</em></td><td></td></tr>
  <tr><td><tt><tt><a href="no_nynorsk-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>er</em></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>ver</em></td></tr>
</table>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<tt><a href="no_nynorsk-dep-conj.html">conj</a></tt>]--> VERB</tt> (1472; 67%),
<tt>VERB --[<tt><a href="no_nynorsk-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (546; 54%),
<tt>VERB --[<tt><a href="no_nynorsk-dep-acl.html">acl</a></tt>]--> VERB</tt> (5; 56%),
<tt>VERB --[<tt><a href="no_nynorsk-dep-flat-name.html">flat:name</a></tt>]--> VERB</tt> (1; 100%).

