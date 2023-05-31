---
layout: base
title:  'Statistics of Polarity in UD_Romanian'
udver: '2'
---

## Treebank Statistics: UD_Romanian: Features: `Polarity`

This feature is universal.
It occurs with 2 different values: `Neg`, `Pos`.

10548 tokens (5%) have a non-empty value of `Polarity`.
58 types (0%) occur at least once with a non-empty value of `Polarity`.
26 lemmas (0%) occur at least once with a non-empty value of `Polarity`.
The feature is used with 4 part-of-speech tags: <tt><a href="ro-pos-CCONJ.html">CCONJ</a></tt> (6939; 3% instances), <tt><a href="ro-pos-SCONJ.html">SCONJ</a></tt> (1979; 1% instances), <tt><a href="ro-pos-PART.html">PART</a></tt> (1626; 1% instances), <tt><a href="ro-pos-ADV.html">ADV</a></tt> (4; 0% instances).

### `CCONJ`

6939 <tt><a href="ro-pos-CCONJ.html">CCONJ</a></tt> tokens (100% of all `CCONJ` tokens) have a non-empty value of `Polarity`.

`CCONJ` tokens may have the following values of `Polarity`:

* `Pos` (6939; 100% of non-empty `Polarity`): <em>și, sau, dar, însă, ci, și-, ori, fie, deci, căci</em>

`Polarity` seems to be **lexical feature** of `CCONJ`. 100% lemmas (12) occur only with one value of `Polarity`.

### `SCONJ`

1979 <tt><a href="ro-pos-SCONJ.html">SCONJ</a></tt> tokens (100% of all `SCONJ` tokens) have a non-empty value of `Polarity`.

`SCONJ` tokens may have the following values of `Polarity`:

* `Pos` (1979; 100% of non-empty `Polarity`): <em>că, dacă, până, încât, deoarece, deși, fiindcă, fără, întrucât, de</em>

`Polarity` seems to be **lexical feature** of `SCONJ`. 100% lemmas (10) occur only with one value of `Polarity`.

### `PART`

1626 <tt><a href="ro-pos-PART.html">PART</a></tt> tokens (33% of all `PART` tokens) have a non-empty value of `Polarity`.

The most frequent other feature values with which `PART` and `Polarity` co-occurred: <tt><a href="ro-feat-Mood.html">Mood</a></tt><tt>=EMPTY</tt> (1626; 100%), <tt><a href="ro-feat-PartType.html">PartType</a></tt><tt>=EMPTY</tt> (1626; 100%).

`PART` tokens may have the following values of `Polarity`:

* `Neg` (1626; 100% of non-empty `Polarity`): <em>nu, n-</em>
* `EMPTY` (3252): <em>să, a, s-, a-, o, -a</em>

### `ADV`

4 <tt><a href="ro-pos-ADV.html">ADV</a></tt> tokens (0% of all `ADV` tokens) have a non-empty value of `Polarity`.

The most frequent other feature values with which `ADV` and `Polarity` co-occurred: <tt><a href="ro-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (4; 100%).

`ADV` tokens may have the following values of `Polarity`:

* `Neg` (4; 100% of non-empty `Polarity`): <em>ne, non, non-</em>
* `EMPTY` (9543): <em>mai, ca, când, cum, iar, astfel, nici, decât, numai, mult</em>

## Relations with Agreement in `Polarity`

The 10 most frequent relations where parent and child node agree in `Polarity`:
<tt>CCONJ --[<tt><a href="ro-dep-conj.html">conj</a></tt>]--> CCONJ</tt> (17; 100%),
<tt>SCONJ --[<tt><a href="ro-dep-fixed.html">fixed</a></tt>]--> CCONJ</tt> (11; 100%),
<tt>CCONJ --[<tt><a href="ro-dep-fixed.html">fixed</a></tt>]--> CCONJ</tt> (4; 100%),
<tt>CCONJ --[<tt><a href="ro-dep-fixed.html">fixed</a></tt>]--> SCONJ</tt> (2; 100%),
<tt>PART --[<tt><a href="ro-dep-conj.html">conj</a></tt>]--> PART</tt> (1; 100%),
<tt>SCONJ --[<tt><a href="ro-dep-cc.html">cc</a></tt>]--> CCONJ</tt> (1; 100%),
<tt>SCONJ --[<tt><a href="ro-dep-conj.html">conj</a></tt>]--> SCONJ</tt> (1; 100%).

