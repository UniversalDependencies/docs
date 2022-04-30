---
layout: base
title:  'Statistics of Mood in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Features: `Mood`

This feature is universal.
It occurs with 3 different values: `Imp`, `Ind`, `Sub`.

8463 tokens (9%) have a non-empty value of `Mood`.
1133 types (11%) occur at least once with a non-empty value of `Mood`.
796 lemmas (10%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: <tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (5083; 5% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (3380; 4% instances).

### `VERB`

5083 <tt><a href="en_lines-pos-VERB.html">VERB</a></tt> tokens (46% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="en_lines-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (5081; 100%), <tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (5074; 100%), <tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (3478; 68%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (119; 2% of non-empty `Mood`): <em>let, look, see, Come, Note, click, Imagine, have, make, remember</em>
* `Ind` (4960; 98% of non-empty `Mood`): <em>said, was, had, is, came, seemed, looked, went, made, know</em>
* `Sub` (4; 0% of non-empty `Mood`): <em>were, get, post</em>
* `EMPTY` (6027): <em>see, going, know, do, make, come, go, have, get, say</em>

<table>
  <tr><th>Paradigm <i>get</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th><th><tt>Sub</tt></th></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_lines-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>gets</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>got</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>get</em></td><td></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>Get</em></td><td><em>get</em></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 93% lemmas (742) occur only with one value of `Mood`.

### `AUX`

3380 <tt><a href="en_lines-pos-AUX.html">AUX</a></tt> tokens (65% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (3380; 100%), <tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (1848; 55%), <tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1725; 51%).

`AUX` tokens may have the following values of `Mood`:

* `Imp` (14; 0% of non-empty `Mood`): <em>do, be</em>
* `Ind` (3354; 99% of non-empty `Mood`): <em>was, had, is, are, were, have, 's, did, do, has</em>
* `Sub` (12; 0% of non-empty `Mood`): <em>be, were</em>
* `EMPTY` (1785): <em>be, can, would, been, could, will, must, should, being, 'll</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th><th><tt>Sub</tt></th></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_lines-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_lines-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>am</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_lines-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>is, 's</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>were</em></td><td></td><td><em>were</em></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>are, 'm, 're, Be</em></td><td></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>be</em></td><td><em>be</em></td></tr>
</table>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<tt><a href="en_lines-dep-conj.html">conj</a></tt>]--> VERB</tt> (671; 67%),
<tt>VERB --[<tt><a href="en_lines-dep-conj.html">conj</a></tt>]--> AUX</tt> (6; 60%),
<tt>VERB --[<tt><a href="en_lines-dep-csubj.html">csubj</a></tt>]--> AUX</tt> (2; 100%),
<tt>VERB --[<tt><a href="en_lines-dep-xcomp.html">xcomp</a></tt>]--> AUX</tt> (2; 67%),
<tt>AUX --[<tt><a href="en_lines-dep-conj.html">conj</a></tt>]--> AUX</tt> (1; 100%),
<tt>AUX --[<tt><a href="en_lines-dep-parataxis.html">parataxis</a></tt>]--> AUX</tt> (1; 100%).

