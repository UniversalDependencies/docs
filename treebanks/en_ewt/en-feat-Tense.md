---
layout: base
title:  'Statistics of Tense in UD_English'
udver: '2'
---

## Treebank Statistics: UD_English: Features: `Tense`

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

25098 tokens (10%) have a non-empty value of `Tense`.
2822 types (15%) occur at least once with a non-empty value of `Tense`.
1577 lemmas (10%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="en-pos-VERB.html">VERB</a></tt> (15535; 6% instances), <tt><a href="en-pos-AUX.html">AUX</a></tt> (9563; 4% instances).

### `VERB`

15535 <tt><a href="en-pos-VERB.html">VERB</a></tt> tokens (55% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="en-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (9953; 64%), <tt><a href="en-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (9953; 64%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (8709; 56% of non-empty `Tense`): <em>had, said, made, got, called, was, told, used, took, attached</em>
* `Pres` (6826; 44% of non-empty `Tense`): <em>have, is, has, are, want, need, going, know, think, thank</em>
* `EMPTY` (12957): <em>have, get, know, go, do, see, take, let, make, give</em>

<table>
  <tr><th>Paradigm <i>have</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="en-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="en-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>has, haves</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>have, having</em></td><td><em>had</em></td></tr>
  <tr><td><tt><tt><a href="en-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt></tt></td><td><em>having</em></td><td><em>had</em></td></tr>
  <tr><td><tt><tt><a href="en-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt>|<tt><a href="en-feat-Voice.html">Voice</a></tt><tt>=Pass</tt></tt></td><td></td><td><em>had</em></td></tr>
</table>

### `AUX`

9563 <tt><a href="en-pos-AUX.html">AUX</a></tt> tokens (62% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="en-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (9158; 96%), <tt><a href="en-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (9158; 96%), <tt><a href="en-feat-Number.html">Number</a></tt><tt>=Sing</tt> (5215; 55%), <tt><a href="en-feat-Person.html">Person</a></tt><tt>=3</tt> (4849; 51%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (2637; 28% of non-empty `Tense`): <em>was, were, been, did, had, got, 'd, wase</em>
* `Pres` (6926; 72% of non-empty `Tense`): <em>is, are, have, do, has, 's, am, 'm, does, 've</em>
* `EMPTY` (5795): <em>be, will, can, would, could, should, may, 'll, being, have</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="en-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="en-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>am</em></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="en-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="en-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>is, 's, s, ’s, ai</em></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="en-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="en-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>are, 'm, 're, m, r, re, ’m, ´m, is, ai</em></td><td><em>were</em></td></tr>
  <tr><td><tt><tt><a href="en-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt></tt></td><td></td><td><em>been</em></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="en-dep-conj.html">conj</a></tt>]--> VERB</tt> (1156; 61%),
<tt>VERB --[<tt><a href="en-dep-amod.html">amod</a></tt>]--> VERB</tt> (3; 100%),
<tt>AUX --[<tt><a href="en-dep-cop.html">cop</a></tt>]--> AUX</tt> (2; 100%).

