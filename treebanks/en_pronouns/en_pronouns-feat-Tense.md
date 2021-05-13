---
layout: base
title:  'Statistics of Tense in UD_English-Pronouns'
udver: '2'
---

## Treebank Statistics: UD_English-Pronouns: Features: `Tense`

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

360 tokens (21%) have a non-empty value of `Tense`.
31 types (40%) occur at least once with a non-empty value of `Tense`.
22 lemmas (35%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="en_pronouns-pos-VERB.html">VERB</a></tt> (255; 15% instances), <tt><a href="en_pronouns-pos-AUX.html">AUX</a></tt> (105; 6% instances).

### `VERB`

255 <tt><a href="en_pronouns-pos-VERB.html">VERB</a></tt> tokens (96% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="en_pronouns-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (210; 82%), <tt><a href="en_pronouns-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (200; 78%), <tt><a href="en_pronouns-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (130; 51%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (175; 69% of non-empty `Tense`): <em>cleaned, drove, sold, gave, knew, liked, accelerated, broke, came, got</em>
* `Pres` (80; 31% of non-empty `Tense`): <em>like, seeing, is, Take, cleaning, do, get, parks, sell, sells</em>
* `EMPTY` (10): <em>clean, using</em>

<table>
  <tr><th>Paradigm <i>clean</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="en_pronouns-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_pronouns-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_pronouns-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="en_pronouns-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>cleaned</em></td></tr>
  <tr><td><tt><tt><a href="en_pronouns-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_pronouns-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_pronouns-feat-Person.html">Person</a></tt><tt>=2</tt>|<tt><a href="en_pronouns-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>cleaned</em></td></tr>
  <tr><td><tt><tt><a href="en_pronouns-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_pronouns-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_pronouns-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="en_pronouns-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>cleaned</em></td></tr>
  <tr><td><tt><tt><a href="en_pronouns-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt></tt></td><td><em>cleaning</em></td><td><em>cleaned</em></td></tr>
</table>

### `AUX`

105 <tt><a href="en_pronouns-pos-AUX.html">AUX</a></tt> tokens (95% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="en_pronouns-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (105; 100%), <tt><a href="en_pronouns-feat-Number.html">Number</a></tt><tt>=Sing</tt> (105; 100%), <tt><a href="en_pronouns-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (105; 100%), <tt><a href="en_pronouns-feat-Person.html">Person</a></tt><tt>=3</tt> (91; 87%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (25; 24% of non-empty `Tense`): <em>was</em>
* `Pres` (80; 76% of non-empty `Tense`): <em>'s, is, ai</em>
* `EMPTY` (5): <em>'ll</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="en_pronouns-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>ai</em></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="en_pronouns-feat-Person.html">Person</a></tt><tt>=2</tt></tt></td><td><em>ai</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_pronouns-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>'s, is, ai</em></td><td><em>was</em></td></tr>
  <tr><td><tt></tt></td><td><em>is</em></td><td></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="en_pronouns-dep-aux-pass.html">aux:pass</a></tt>]--> AUX</tt> (20; 100%),
<tt>VERB --[<tt><a href="en_pronouns-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (20; 80%),
<tt>VERB --[<tt><a href="en_pronouns-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (20; 80%).

