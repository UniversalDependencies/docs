---
layout: base
title:  'Statistics of Polarity in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Features: `Polarity`

This feature is universal.
It occurs with 2 different values: `Neg`, `Pos`.

6651 tokens (5%) have a non-empty value of `Polarity`.
36 types (0%) occur at least once with a non-empty value of `Polarity`.
22 lemmas (0%) occur at least once with a non-empty value of `Polarity`.
The feature is used with 3 part-of-speech tags: <tt><a href="ro_simonero-pos-CCONJ.html">CCONJ</a></tt> (5034; 3% instances), <tt><a href="ro_simonero-pos-SCONJ.html">SCONJ</a></tt> (1054; 1% instances), <tt><a href="ro_simonero-pos-PART.html">PART</a></tt> (563; 0% instances).

### `CCONJ`

5034 <tt><a href="ro_simonero-pos-CCONJ.html">CCONJ</a></tt> tokens (100% of all `CCONJ` tokens) have a non-empty value of `Polarity`.

`CCONJ` tokens may have the following values of `Polarity`:

* `Pos` (5034; 100% of non-empty `Polarity`): <em>și, sau, dar, însă, fie, deci, ci, ori, si, încă</em>

`Polarity` seems to be **lexical feature** of `CCONJ`. 100% lemmas (10) occur only with one value of `Polarity`.

### `SCONJ`

1054 <tt><a href="ro_simonero-pos-SCONJ.html">SCONJ</a></tt> tokens (100% of all `SCONJ` tokens) have a non-empty value of `Polarity`.

`SCONJ` tokens may have the following values of `Polarity`:

* `Neg` (972; 92% of non-empty `Polarity`): <em>că, dacă, deși, deoarece, până, încât, întrucât, fără, să, daca</em>
* `Pos` (82; 8% of non-empty `Polarity`): <em>că, dacă, deoarece, deși, întrucât, fără, Întucât, încât, până</em>

<table>
  <tr><th>Paradigm <i>că</i></th><th><tt>Pos</tt></th><th><tt>Neg</tt></th></tr>
  <tr><td><tt></tt></td><td><em>că</em></td><td><em>că</em></td></tr>
</table>

### `PART`

563 <tt><a href="ro_simonero-pos-PART.html">PART</a></tt> tokens (47% of all `PART` tokens) have a non-empty value of `Polarity`.

The most frequent other feature values with which `PART` and `Polarity` co-occurred: <tt><a href="ro_simonero-feat-Mood.html">Mood</a></tt><tt>=EMPTY</tt> (563; 100%), <tt><a href="ro_simonero-feat-PartType.html">PartType</a></tt><tt>=EMPTY</tt> (563; 100%).

`PART` tokens may have the following values of `Polarity`:

* `Neg` (563; 100% of non-empty `Polarity`): <em>nu, n-</em>
* `EMPTY` (626): <em>să, a, sa, să-</em>

## Relations with Agreement in `Polarity`

The 10 most frequent relations where parent and child node agree in `Polarity`:
<tt>CCONJ --[<tt><a href="ro_simonero-dep-conj.html">conj</a></tt>]--> CCONJ</tt> (30; 100%),
<tt>CCONJ --[<tt><a href="ro_simonero-dep-fixed.html">fixed</a></tt>]--> CCONJ</tt> (1; 100%).

