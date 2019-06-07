---
layout: base
title:  'Statistics of Mood in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Features: `Mood`

This feature is universal.
It occurs with 3 different values: `Imp`, `Ind`, `Sub`.

7306 tokens (9%) have a non-empty value of `Mood`.
1007 types (11%) occur at least once with a non-empty value of `Mood`.
701 lemmas (10%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: <tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (4398; 5% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (2908; 4% instances).

### `VERB`

4398 <tt><a href="en_lines-pos-VERB.html">VERB</a></tt> tokens (45% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="en_lines-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (4398; 100%), <tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (4396; 100%), <tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (2909; 66%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (112; 3% of non-empty `Mood`): <em>let, see, Note, click, Come, look, Imagine, have, make, remember</em>
* `Ind` (4282; 97% of non-empty `Mood`): <em>was, said, had, is, came, seemed, looked, went, know, felt</em>
* `Sub` (4; 0% of non-empty `Mood`): <em>were, get, post</em>
* `EMPTY` (5330): <em>know, going, see, do, make, get, have, go, come, say</em>

<table>
  <tr><th>Paradigm <i>get</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th><th><tt>Sub</tt></th></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_lines-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>gets</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>got</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>get</em></td><td></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>Get</em></td><td><em>get</em></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 93% lemmas (651) occur only with one value of `Mood`.

### `AUX`

2908 <tt><a href="en_lines-pos-AUX.html">AUX</a></tt> tokens (65% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (2908; 100%), <tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1497; 51%), <tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (1477; 51%).

`AUX` tokens may have the following values of `Mood`:

* `Imp` (11; 0% of non-empty `Mood`): <em>do, be</em>
* `Ind` (2886; 99% of non-empty `Mood`): <em>was, is, had, are, were, 's, have, do, has, did</em>
* `Sub` (11; 0% of non-empty `Mood`): <em>be, were</em>
* `EMPTY` (1592): <em>be, can, been, would, could, will, must, should, being, 'll</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th><th><tt>Sub</tt></th></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_lines-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_lines-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>am</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_lines-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>is, 's</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>were</em></td><td></td><td><em>were</em></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>are, 'm, 're</em></td><td></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>be</em></td><td><em>be</em></td></tr>
</table>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<tt><a href="en_lines-dep-conj.html">conj</a></tt>]--> VERB</tt> (575; 66%),
<tt>AUX --[<tt><a href="en_lines-dep-acl.html">acl</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="en_lines-dep-csubj.html">csubj</a></tt>]--> AUX</tt> (1; 100%),
<tt>VERB --[<tt><a href="en_lines-dep-reparandum.html">reparandum</a></tt>]--> VERB</tt> (1; 100%).

