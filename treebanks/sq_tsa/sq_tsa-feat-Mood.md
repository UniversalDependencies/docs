---
layout: base
title:  'Statistics of Mood in UD_Albanian-TSA'
udver: '2'
---

## Treebank Statistics: UD_Albanian-TSA: Features: `Mood`

This feature is universal.
It occurs with 2 different values: `Ind`, `Sub`.

90 tokens (10%) have a non-empty value of `Mood`.
62 types (13%) occur at least once with a non-empty value of `Mood`.
53 lemmas (13%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: <tt><a href="sq_tsa-pos-VERB.html">VERB</a></tt> (62; 7% instances), <tt><a href="sq_tsa-pos-AUX.html">AUX</a></tt> (28; 3% instances).

### `VERB`

62 <tt><a href="sq_tsa-pos-VERB.html">VERB</a></tt> tokens (73% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="sq_tsa-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (62; 100%), <tt><a href="sq_tsa-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt> (61; 98%), <tt><a href="sq_tsa-feat-Person.html">Person</a></tt><tt>=3</tt> (59; 95%), <tt><a href="sq_tsa-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (47; 76%), <tt><a href="sq_tsa-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (45; 73%), <tt><a href="sq_tsa-feat-Number.html">Number</a></tt><tt>=Sing</tt> (32; 52%).

`VERB` tokens may have the following values of `Mood`:

* `Ind` (57; 92% of non-empty `Mood`): <em>ka, kanë, kishte, mendohet, Dëgjojmë, duhet, ekziston, fillojnë, formon, formuan</em>
* `Sub` (5; 8% of non-empty `Mood`): <em>dëmtojnë, kenë, kthehen, ndikojnë, shkruhen</em>
* `EMPTY` (23): <em>mund, dashuruar, Kam, arritur, bartur, intensifikuar, krijuar, lëvizur, mbijetuar, mundësuar</em>

<table>
  <tr><th>Paradigm <i>kam</i></th><th><tt>Ind</tt></th><th><tt>Sub</tt></th></tr>
  <tr><td><tt><tt><a href="sq_tsa-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="sq_tsa-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>kishte</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sq_tsa-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="sq_tsa-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>ka</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sq_tsa-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="sq_tsa-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>kanë</em></td><td><em>kenë</em></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 96% lemmas (50) occur only with one value of `Mood`.

### `AUX`

28 <tt><a href="sq_tsa-pos-AUX.html">AUX</a></tt> tokens (76% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="sq_tsa-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt> (28; 100%), <tt><a href="sq_tsa-feat-Person.html">Person</a></tt><tt>=3</tt> (28; 100%), <tt><a href="sq_tsa-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (28; 100%), <tt><a href="sq_tsa-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (26; 93%), <tt><a href="sq_tsa-feat-Number.html">Number</a></tt><tt>=Plur</tt> (15; 54%).

`AUX` tokens may have the following values of `Mood`:

* `Ind` (28; 100% of non-empty `Mood`): <em>janë, është, kanë, ishte, ka</em>
* `EMPTY` (9): <em>u, qenë</em>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<tt><a href="sq_tsa-dep-conj.html">conj</a></tt>]--> VERB</tt> (5; 71%),
<tt>VERB --[<tt><a href="sq_tsa-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (2; 100%).

