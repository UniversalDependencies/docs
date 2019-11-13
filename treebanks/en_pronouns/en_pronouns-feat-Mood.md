---
layout: base
title:  'Statistics of Mood in UD_English-Pronouns'
udver: '2'
---

## Treebank Statistics: UD_English-Pronouns: Features: `Mood`

This feature is universal.
It occurs with 3 different values: `Imp`, `Ind`, `Sub`.

340 tokens (20%) have a non-empty value of `Mood`.
31 types (40%) occur at least once with a non-empty value of `Mood`.
21 lemmas (34%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: <tt><a href="en_pronouns-pos-VERB.html">VERB</a></tt> (230; 14% instances), <tt><a href="en_pronouns-pos-AUX.html">AUX</a></tt> (110; 6% instances).

### `VERB`

230 <tt><a href="en_pronouns-pos-VERB.html">VERB</a></tt> tokens (90% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="en_pronouns-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (210; 91%), <tt><a href="en_pronouns-feat-Number.html">Number</a></tt><tt>=Sing</tt> (155; 67%), <tt><a href="en_pronouns-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (140; 61%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (5; 2% of non-empty `Mood`): <em>Take</em>
* `Ind` (220; 96% of non-empty `Mood`): <em>cleaned, like, drove, seeing, sold, gave, is, knew, liked, accelerated</em>
* `Sub` (5; 2% of non-empty `Mood`): <em>get</em>
* `EMPTY` (25): <em>cleaned, using</em>

<table>
  <tr><th>Paradigm <i>get</i></th><th><tt>Ind</tt></th><th><tt>Sub</tt></th></tr>
  <tr><td><tt><tt><a href="en_pronouns-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_pronouns-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="en_pronouns-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td><em>get</em></td></tr>
  <tr><td><tt><tt><a href="en_pronouns-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_pronouns-feat-Person.html">Person</a></tt><tt>=2</tt>|<tt><a href="en_pronouns-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td><em>get</em></td></tr>
  <tr><td><tt><tt><a href="en_pronouns-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_pronouns-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="en_pronouns-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td><em>get</em></td></tr>
  <tr><td><tt><tt><a href="en_pronouns-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>got</em></td><td></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 95% lemmas (19) occur only with one value of `Mood`.

### `AUX`

110 <tt><a href="en_pronouns-pos-AUX.html">AUX</a></tt> tokens (96% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="en_pronouns-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (105; 95%), <tt><a href="en_pronouns-feat-Number.html">Number</a></tt><tt>=Sing</tt> (100; 91%), <tt><a href="en_pronouns-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (85; 77%), <tt><a href="en_pronouns-feat-Person.html">Person</a></tt><tt>=3</tt> (60; 55%).

`AUX` tokens may have the following values of `Mood`:

* `Ind` (110; 100% of non-empty `Mood`): <em>'s, is, was, ai, do</em>
* `EMPTY` (5): <em>'ll</em>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<tt><a href="en_pronouns-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (20; 80%),
<tt>VERB --[<tt><a href="en_pronouns-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (20; 100%).

