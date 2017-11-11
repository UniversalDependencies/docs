---
layout: base
title:  'Statistics of Mood in UD_English'
udver: '2'
---

## Treebank Statistics: UD_English: Features: `Mood`

This feature is universal.
It occurs with 2 different values: `Imp`, `Ind`.

20687 tokens (8%) have a non-empty value of `Mood`.
1996 types (10%) occur at least once with a non-empty value of `Mood`.
1082 lemmas (7%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: <tt><a href="en-pos-VERB.html">VERB</a></tt> (11389; 4% instances), <tt><a href="en-pos-AUX.html">AUX</a></tt> (9298; 4% instances).

### `VERB`

11389 <tt><a href="en-pos-VERB.html">VERB</a></tt> tokens (40% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="en-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (11389; 100%), <tt><a href="en-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (5734; 50%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (1436; 13% of non-empty `Mood`): <em>let, go, see, take, try, get, make, give, call, keep</em>
* `Ind` (9953; 87% of non-empty `Mood`): <em>have, is, had, said, has, are, want, need, know, think</em>
* `EMPTY` (17103): <em>have, get, know, do, go, going, make, take, see, like</em>

<table>
  <tr><th>Paradigm <i>have</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt><tt><a href="en-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="en-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>has, haves</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>had</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>have, having</em></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>have</em></td></tr>
</table>

### `AUX`

9298 <tt><a href="en-pos-AUX.html">AUX</a></tt> tokens (61% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="en-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (9298; 100%), <tt><a href="en-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (6926; 74%), <tt><a href="en-feat-Number.html">Number</a></tt><tt>=Sing</tt> (5215; 56%), <tt><a href="en-feat-Person.html">Person</a></tt><tt>=3</tt> (4849; 52%).

`AUX` tokens may have the following values of `Mood`:

* `Imp` (140; 2% of non-empty `Mood`): <em>do, be, get</em>
* `Ind` (9158; 98% of non-empty `Mood`): <em>is, was, are, have, do, has, were, 's, am, 'm</em>
* `EMPTY` (6060): <em>be, will, can, would, been, could, should, may, 'll, being</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt><tt><a href="en-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="en-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="en-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>am</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="en-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="en-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>is, 's, s, ’s, ai</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>were</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>are, 'm, 're, m, r, re, ai, is, ´m, ’m</em></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>be</em></td></tr>
</table>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<tt><a href="en-dep-conj.html">conj</a></tt>]--> VERB</tt> (1018; 60%),
<tt>AUX --[<tt><a href="en-dep-cop.html">cop</a></tt>]--> AUX</tt> (2; 100%),
<tt>AUX --[<tt><a href="en-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (2; 100%),
<tt>VERB --[<tt><a href="en-dep-compound-prt.html">compound:prt</a></tt>]--> VERB</tt> (1; 100%).

