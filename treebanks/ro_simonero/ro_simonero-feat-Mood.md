---
layout: base
title:  'Statistics of Mood in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Features: `Mood`

This feature is universal.
It occurs with 2 different values: `Ind`, `Sub`.

745 tokens (5%) have a non-empty value of `Mood`.
198 types (5%) occur at least once with a non-empty value of `Mood`.
161 lemmas (6%) occur at least once with a non-empty value of `Mood`.
The feature is used with 3 part-of-speech tags: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (508; 3% instances), <tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (222; 2% instances), <tt><a href="ro_simonero-pos-PART.html">PART</a></tt> (15; 0% instances).

### `VERB`

508 <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> tokens (54% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="ro_simonero-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (508; 100%), <tt><a href="ro_simonero-feat-Person.html">Person</a></tt><tt>=3</tt> (508; 100%), <tt><a href="ro_simonero-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (508; 100%), <tt><a href="ro_simonero-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (505; 99%).

`VERB` tokens may have the following values of `Mood`:

* `Ind` (497; 98% of non-empty `Mood`): <em>poate, pot, are, trebuie, crește, determină, au, există, asociază, indică</em>
* `Sub` (11; 2% of non-empty `Mood`): <em>facă, adreseze, agraveze, constituie, influențeze, interfere, joace, realizeze, repete, întârzie</em>
* `EMPTY` (428): <em>asociată, putea, asociate, având, dovedit, arătat, avea, avut, bătând, determina</em>

<table>
  <tr><th>Paradigm <i>face</i></th><th><tt>Ind</tt></th><th><tt>Sub</tt></th></tr>
  <tr><td><tt><tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>face</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>fac</em></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>facă</em></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 96% lemmas (154) occur only with one value of `Mood`.

### `AUX`

222 <tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> tokens (52% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="ro_simonero-feat-Person.html">Person</a></tt><tt>=3</tt> (222; 100%), <tt><a href="ro_simonero-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (222; 100%), <tt><a href="ro_simonero-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (221; 100%), <tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Sing</tt> (154; 69%).

`AUX` tokens may have the following values of `Mood`:

* `Ind` (218; 98% of non-empty `Mood`): <em>este, sunt, e, era</em>
* `Sub` (4; 2% of non-empty `Mood`): <em>fie</em>
* `EMPTY` (206): <em>a, fi, au, fost, fiind, ar, va, vor</em>

<table>
  <tr><th>Paradigm <i>fi</i></th><th><tt>Ind</tt></th><th><tt>Sub</tt></th></tr>
  <tr><td><tt><tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ro_simonero-feat-Tense.html">Tense</a></tt><tt>=Imp</tt></tt></td><td><em>era</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ro_simonero-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>este, e</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ro_simonero-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>sunt</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro_simonero-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td><em>fie</em></td></tr>
</table>

### `PART`

15 <tt><a href="ro_simonero-pos-PART.html">PART</a></tt> tokens (19% of all `PART` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `PART` and `Mood` co-occurred: <tt><a href="ro_simonero-feat-PartType.html">PartType</a></tt><tt>=EMPTY</tt> (15; 100%), <tt><a href="ro_simonero-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (15; 100%).

`PART` tokens may have the following values of `Mood`:

* `Sub` (15; 100% of non-empty `Mood`): <em>să</em>
* `EMPTY` (63): <em>nu, a</em>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<tt><a href="ro_simonero-dep-conj.html">conj</a></tt>]--> VERB</tt> (47; 72%),
<tt>VERB --[<tt><a href="ro_simonero-dep-mark.html">mark</a></tt>]--> PART</tt> (10; 91%).

