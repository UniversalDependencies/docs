---
layout: base
title:  'Statistics of Tense in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Features: `Tense`

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

11802 tokens (13%) have a non-empty value of `Tense`.
2203 types (22%) occur at least once with a non-empty value of `Tense`.
1386 lemmas (18%) occur at least once with a non-empty value of `Tense`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (8147; 9% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (3654; 4% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).

### `VERB`

8147 <tt><a href="en_lines-pos-VERB.html">VERB</a></tt> tokens (73% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="en_lines-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (6954; 85%), <tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (4961; 61%), <tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (4956; 61%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (5036; 62% of non-empty `Tense`): <em>said, was, had, made, came, seemed, looked, went, felt, got</em>
* `Pres` (3111; 38% of non-empty `Tense`): <em>is, going, know, have, are, 's, using, has, want, looking</em>
* `EMPTY` (2961): <em>see, know, do, make, go, have, get, say, take, be</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_lines-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>am</em></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_lines-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>is, 's</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt></tt></td><td><em>are, am</em></td><td><em>were</em></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Sub</tt></tt></td><td></td><td><em>were</em></td></tr>
</table>

### `AUX`

3654 <tt><a href="en_lines-pos-AUX.html">AUX</a></tt> tokens (71% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (3360; 92%), <tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (3354; 92%), <tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (1929; 53%), <tt><a href="en_lines-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (1929; 53%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (2075; 57% of non-empty `Tense`): <em>was, had, were, been, did, 'd, got</em>
* `Pres` (1579; 43% of non-empty `Tense`): <em>is, are, have, 's, do, has, 've, being, does, am</em>
* `EMPTY` (1512): <em>be, can, would, could, will, must, should, 'll, might, ca</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_lines-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>am</em></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_lines-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>is, 's</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>are, 'm, 're, Be</em></td><td><em>were</em></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>were</em></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt></tt></td><td><em>being</em></td><td><em>been</em></td></tr>
</table>

### `ADJ`

1 <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `ADJ` and `Tense` co-occurred: <tt><a href="en_lines-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (1; 100%).

`ADJ` tokens may have the following values of `Tense`:

* `Pres` (1; 100% of non-empty `Tense`): <em>reflecting</em>
* `EMPTY` (5938): <em>other, white, old, new, good, same, own, first, black, great</em>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="en_lines-dep-conj.html">conj</a></tt>]--> VERB</tt> (993; 78%),
<tt>VERB --[<tt><a href="en_lines-dep-conj.html">conj</a></tt>]--> AUX</tt> (7; 58%),
<tt>VERB --[<tt><a href="en_lines-dep-acl-relcl.html">acl:relcl</a></tt>]--> VERB</tt> (3; 75%),
<tt>VERB --[<tt><a href="en_lines-dep-xcomp.html">xcomp</a></tt>]--> AUX</tt> (3; 60%),
<tt>VERB --[<tt><a href="en_lines-dep-csubj.html">csubj</a></tt>]--> AUX</tt> (2; 100%),
<tt>AUX --[<tt><a href="en_lines-dep-conj.html">conj</a></tt>]--> AUX</tt> (1; 100%),
<tt>AUX --[<tt><a href="en_lines-dep-parataxis.html">parataxis</a></tt>]--> AUX</tt> (1; 100%).

