---
layout: base
title:  'Statistics of Number in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Features: `Number`

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

26954 tokens (44%) have a non-empty value of `Number`.
458 types (49%) occur at least once with a non-empty value of `Number`.
398 lemmas (51%) occur at least once with a non-empty value of `Number`.
The feature is used with 4 part-of-speech tags: <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (16372; 26% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (9333; 15% instances), <tt><a href="en_atis-pos-AUX.html">AUX</a></tt> (914; 1% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (335; 1% instances).

### `PROPN`

16372 <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> tokens (100% of all `PROPN` tokens) have a non-empty value of `Number`.

`PROPN` tokens may have the following values of `Number`:

* `Plur` (356; 2% of non-empty `Number`): <em>airlines, tuesdays, mondays, sundays, thursdays, fridays, sunday</em>
* `Sing` (16016; 98% of non-empty `Number`): <em>san, boston, denver, francisco, atlanta, pittsburgh, dallas, baltimore, philadelphia, washington</em>

<table>
  <tr><th>Paradigm <i>airline</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>airline</em></td><td><em>airlines</em></td></tr>
</table>

`Number` seems to be **lexical feature** of `PROPN`. 97% lemmas (223) occur only with one value of `Number`.

### `NOUN`

9333 <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> tokens (100% of all `NOUN` tokens) have a non-empty value of `Number`.

`NOUN` tokens may have the following values of `Number`:

* `Plur` (3334; 36% of non-empty `Number`): <em>flights, fares, airlines, dollars, airports, cities, meals, times, prices, types</em>
* `Sing` (5999; 64% of non-empty `Number`): <em>flight, pm, morning, fare, trip, ground, round, transportation, class, afternoon</em>

<table>
  <tr><th>Paradigm <i>flight</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>flight</em></td><td><em>flights</em></td></tr>
</table>

### `AUX`

914 <tt><a href="en_atis-pos-AUX.html">AUX</a></tt> tokens (41% of all `AUX` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `AUX` and `Number` co-occurred: <tt><a href="en_atis-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (914; 100%), <tt><a href="en_atis-feat-Person.html">Person</a></tt><tt>=3</tt> (914; 100%), <tt><a href="en_atis-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (914; 100%), <tt><a href="en_atis-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (914; 100%).

`AUX` tokens may have the following values of `Number`:

* `Sing` (914; 100% of non-empty `Number`): <em>is, does, 's, 're</em>
* `EMPTY` (1340): <em>are, would, 'd, can, do, could, 'm, be, will, may</em>

### `VERB`

335 <tt><a href="en_atis-pos-VERB.html">VERB</a></tt> tokens (6% of all `VERB` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `VERB` and `Number` co-occurred: <tt><a href="en_atis-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (335; 100%), <tt><a href="en_atis-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (335; 100%), <tt><a href="en_atis-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (335; 100%).

`VERB` tokens may have the following values of `Number`:

* `Sing` (335; 100% of non-empty `Number`): <em>is, leaves, arrives, serves, goes, has, flies, stops, makes, uses</em>
* `EMPTY` (5542): <em>show, list, like, leaving, fly, need, arriving, have, give, leave</em>

`Number` seems to be **lexical feature** of `VERB`. 100% lemmas (28) occur only with one value of `Number`.

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>PROPN --[<tt><a href="en_atis-dep-flat.html">flat</a></tt>]--> PROPN</tt> (2731; 89%),
<tt>NOUN --[<tt><a href="en_atis-dep-compound.html">compound</a></tt>]--> NOUN</tt> (1018; 70%),
<tt>NOUN --[<tt><a href="en_atis-dep-nmod.html">nmod</a></tt>]--> NOUN</tt> (511; 62%),
<tt>PROPN --[<tt><a href="en_atis-dep-conj.html">conj</a></tt>]--> PROPN</tt> (483; 100%),
<tt>NOUN --[<tt><a href="en_atis-dep-compound.html">compound</a></tt>]--> PROPN</tt> (377; 65%),
<tt>PROPN --[<tt><a href="en_atis-dep-nmod.html">nmod</a></tt>]--> PROPN</tt> (285; 99%),
<tt>PROPN --[<tt><a href="en_atis-dep-appos.html">appos</a></tt>]--> PROPN</tt> (234; 100%),
<tt>NOUN --[<tt><a href="en_atis-dep-conj.html">conj</a></tt>]--> NOUN</tt> (113; 88%),
<tt>NOUN --[<tt><a href="en_atis-dep-cop.html">cop</a></tt>]--> AUX</tt> (92; 65%),
<tt>PROPN --[<tt><a href="en_atis-dep-nmod-tmod.html">nmod:tmod</a></tt>]--> NOUN</tt> (66; 99%).

