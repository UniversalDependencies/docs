---
layout: base
title:  'Statistics of Tense in UD_Albanian-TSA'
udver: '2'
---

## Treebank Statistics: UD_Albanian-TSA: Features: `Tense`

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

96 tokens (10%) have a non-empty value of `Tense`.
67 types (14%) occur at least once with a non-empty value of `Tense`.
56 lemmas (14%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="sq_tsa-pos-VERB.html">VERB</a></tt> (68; 7% instances), <tt><a href="sq_tsa-pos-AUX.html">AUX</a></tt> (28; 3% instances).

### `VERB`

68 <tt><a href="sq_tsa-pos-VERB.html">VERB</a></tt> tokens (80% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="sq_tsa-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt> (64; 94%), <tt><a href="sq_tsa-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (62; 91%), <tt><a href="sq_tsa-feat-Person.html">Person</a></tt><tt>=3</tt> (59; 87%), <tt><a href="sq_tsa-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (57; 84%), <tt><a href="sq_tsa-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (50; 74%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (18; 26% of non-empty `Tense`): <em>kishte, formuan, intensifikuar, krijoi, kërkonin, morën, ndihmuar, nxiti, nënshtruan, përket</em>
* `Pres` (50; 74% of non-empty `Tense`): <em>dashuruar, ka, kanë, mendohet, Dëgjojmë, duhet, dëmtojnë, ekziston, fillojnë, formon</em>
* `EMPTY` (17): <em>mund, Kam, arritur, bartur, krijuar, mbijetuar, mundësuar, ndryshuar, pastruar, pasur</em>

<table>
  <tr><th>Paradigm <i>kam</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="sq_tsa-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="sq_tsa-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>ka</em></td><td><em>kishte</em></td></tr>
  <tr><td><tt><tt><a href="sq_tsa-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="sq_tsa-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>kanë</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sq_tsa-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="sq_tsa-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>kenë</em></td><td></td></tr>
</table>

`Tense` seems to be **lexical feature** of `VERB`. 91% lemmas (50) occur only with one value of `Tense`.

### `AUX`

28 <tt><a href="sq_tsa-pos-AUX.html">AUX</a></tt> tokens (76% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="sq_tsa-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt> (28; 100%), <tt><a href="sq_tsa-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (28; 100%), <tt><a href="sq_tsa-feat-Person.html">Person</a></tt><tt>=3</tt> (28; 100%), <tt><a href="sq_tsa-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (28; 100%), <tt><a href="sq_tsa-feat-Number.html">Number</a></tt><tt>=Plur</tt> (15; 54%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (2; 7% of non-empty `Tense`): <em>ishte</em>
* `Pres` (26; 93% of non-empty `Tense`): <em>janë, është, kanë, ka</em>
* `EMPTY` (9): <em>u, qenë</em>

<table>
  <tr><th>Paradigm <i>jam</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="sq_tsa-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>është</em></td><td><em>ishte</em></td></tr>
  <tr><td><tt><tt><a href="sq_tsa-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>janë</em></td><td></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="sq_tsa-dep-conj.html">conj</a></tt>]--> VERB</tt> (6; 86%),
<tt>VERB --[<tt><a href="sq_tsa-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (2; 100%).

