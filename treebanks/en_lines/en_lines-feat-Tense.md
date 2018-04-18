---
layout: base
title:  'Statistics of Tense in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Features: `Tense`

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

10238 tokens (12%) have a non-empty value of `Tense`.
1996 types (21%) occur at least once with a non-empty value of `Tense`.
1248 lemmas (18%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (7222; 9% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (3016; 4% instances).

### `VERB`

7222 <tt><a href="en_lines-pos-VERB.html">VERB</a></tt> tokens (73% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="en_lines-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (6161; 85%), <tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (4414; 61%), <tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (4411; 61%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (4301; 60% of non-empty `Tense`): <em>was, said, had, made, came, seemed, looked, went, got, felt</em>
* `Pres` (2921; 40% of non-empty `Tense`): <em>is, do, going, know, are, have, 's, using, has, want</em>
* `EMPTY` (2642): <em>see, do, know, make, get, have, go, say, take, be</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_lines-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>am</em></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_lines-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>is, 's</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt></tt></td><td><em>are</em></td><td><em>were</em></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Sub</tt></tt></td><td></td><td><em>were</em></td></tr>
</table>

### `AUX`

3016 <tt><a href="en_lines-pos-AUX.html">AUX</a></tt> tokens (69% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (2759; 91%), <tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (2754; 91%), <tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (1568; 52%), <tt><a href="en_lines-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (1568; 52%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (1651; 55% of non-empty `Tense`): <em>was, had, been, were, did, 'd, got</em>
* `Pres` (1365; 45% of non-empty `Tense`): <em>is, are, have, 's, has, 've, being, do, 'm, 're</em>
* `EMPTY` (1351): <em>be, can, would, could, will, must, should, 'll, ca, might</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_lines-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>am</em></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_lines-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>is, 's</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>are, 'm, 're</em></td><td><em>were</em></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>were</em></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt></tt></td><td><em>being</em></td><td><em>been</em></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="en_lines-dep-conj.html">conj</a></tt>]--> VERB</tt> (852; 76%),
<tt>AUX --[<tt><a href="en_lines-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (5; 56%),
<tt>VERB --[<tt><a href="en_lines-dep-conj.html">conj</a></tt>]--> AUX</tt> (4; 57%),
<tt>VERB --[<tt><a href="en_lines-dep-aux-pass.html">aux:pass</a></tt>]--> VERB</tt> (2; 67%),
<tt>VERB --[<tt><a href="en_lines-dep-csubj.html">csubj</a></tt>]--> AUX</tt> (1; 100%),
<tt>VERB --[<tt><a href="en_lines-dep-nsubj.html">nsubj</a></tt>]--> VERB</tt> (1; 100%).

