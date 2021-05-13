---
layout: base
title:  'Statistics of Person in UD_English-Pronouns'
udver: '2'
---

## Treebank Statistics: UD_English-Pronouns: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

545 tokens (32%) have a non-empty value of `Person`.
28 types (36%) occur at least once with a non-empty value of `Person`.
17 lemmas (27%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_pronouns-pos-PRON.html">PRON</a></tt> (320; 19% instances), <tt><a href="en_pronouns-pos-VERB.html">VERB</a></tt> (125; 7% instances), <tt><a href="en_pronouns-pos-AUX.html">AUX</a></tt> (100; 6% instances).

### `PRON`

320 <tt><a href="en_pronouns-pos-PRON.html">PRON</a></tt> tokens (97% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="en_pronouns-feat-Number.html">Number</a></tt><tt>=Sing</tt> (320; 100%), <tt><a href="en_pronouns-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (320; 100%), <tt><a href="en_pronouns-feat-Poss.html">Poss</a></tt><tt>=Yes</tt> (285; 89%), <tt><a href="en_pronouns-feat-Gender.html">Gender</a></tt><tt>=Neut</tt> (171; 53%).

`PRON` tokens may have the following values of `Person`:

* `1` (64; 20% of non-empty `Person`): <em>mine, it</em>
* `2` (64; 20% of non-empty `Person`): <em>yours, it</em>
* `3` (192; 60% of non-empty `Person`): <em>hers, his, theirs, it</em>
* `EMPTY` (10): <em>There, it</em>

<table>
  <tr><th>Paradigm <i>it</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt></tt></td><td><em>it</em></td><td><em>it</em></td><td><em>it</em></td></tr>
</table>

### `VERB`

125 <tt><a href="en_pronouns-pos-VERB.html">VERB</a></tt> tokens (47% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="en_pronouns-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (125; 100%), <tt><a href="en_pronouns-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (120; 96%), <tt><a href="en_pronouns-feat-Number.html">Number</a></tt><tt>=Sing</tt> (95; 76%), <tt><a href="en_pronouns-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (80; 64%).

`VERB` tokens may have the following values of `Person`:

* `1` (21; 17% of non-empty `Person`): <em>cleaned, like, drove, sold, accelerated, broke, get, hit, saw, sell</em>
* `2` (21; 17% of non-empty `Person`): <em>cleaned, like, drove, sold, accelerated, broke, get, hit, saw, sell</em>
* `3` (83; 66% of non-empty `Person`): <em>cleaned, like, sold, drove, is, parks, sells, accelerated, broke, get</em>
* `EMPTY` (140): <em>cleaned, seeing, gave, knew, liked, Take, came, clean, cleaning, do</em>

<table>
  <tr><th>Paradigm <i>clean</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt></tt></td><td><em>cleaned</em></td><td><em>cleaned</em></td><td><em>cleaned</em></td></tr>
</table>

### `AUX`

100 <tt><a href="en_pronouns-pos-AUX.html">AUX</a></tt> tokens (91% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="en_pronouns-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (100; 100%), <tt><a href="en_pronouns-feat-Number.html">Number</a></tt><tt>=Sing</tt> (100; 100%), <tt><a href="en_pronouns-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (100; 100%), <tt><a href="en_pronouns-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (75; 75%).

`AUX` tokens may have the following values of `Person`:

* `1` (7; 7% of non-empty `Person`): <em>was, ai</em>
* `2` (2; 2% of non-empty `Person`): <em>ai</em>
* `3` (91; 91% of non-empty `Person`): <em>'s, is, was, ai</em>
* `EMPTY` (10): <em>'ll, is</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_pronouns-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="en_pronouns-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>ai</em></td><td><em>ai</em></td><td><em>'s, is, ai</em></td></tr>
</table>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<tt><a href="en_pronouns-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (54; 72%),
<tt>PRON --[<tt><a href="en_pronouns-dep-cop.html">cop</a></tt>]--> AUX</tt> (46; 66%),
<tt>PRON --[<tt><a href="en_pronouns-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (35; 88%),
<tt>VERB --[<tt><a href="en_pronouns-dep-conj.html">conj</a></tt>]--> PRON</tt> (10; 100%),
<tt>VERB --[<tt><a href="en_pronouns-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (5; 100%),
<tt>PRON --[<tt><a href="en_pronouns-dep-aux-pass.html">aux:pass</a></tt>]--> AUX</tt> (4; 80%).

