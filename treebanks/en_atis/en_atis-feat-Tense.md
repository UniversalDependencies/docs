---
layout: base
title:  'Statistics of Tense in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Features: `Tense`

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

3860 tokens (6%) have a non-empty value of `Tense`.
116 types (12%) occur at least once with a non-empty value of `Tense`.
70 lemmas (9%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (2411; 4% instances), <tt><a href="en_atis-pos-AUX.html">AUX</a></tt> (1449; 2% instances).

### `VERB`

2411 <tt><a href="en_atis-pos-VERB.html">VERB</a></tt> tokens (41% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="en_atis-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1455; 60%), <tt><a href="en_atis-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (1455; 60%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (94; 4% of non-empty `Tense`): <em>used, served, interested, provided, serviced, bound, called, carried, come, got</em>
* `Pres` (2317; 96% of non-empty `Tense`): <em>leaving, need, arriving, show, want, are, arrive, is, have, going</em>
* `EMPTY` (3466): <em>show, list, like, fly, give, leave, find, have, go, tell</em>

<table>
  <tr><th>Paradigm <i>want</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="en_atis-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_atis-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>wants</em></td><td></td></tr>
  <tr><td><tt></tt></td><td><em>want</em></td><td><em>wanted</em></td></tr>
</table>

### `AUX`

1449 <tt><a href="en_atis-pos-AUX.html">AUX</a></tt> tokens (64% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="en_atis-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1448; 100%), <tt><a href="en_atis-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (1448; 100%), <tt><a href="en_atis-feat-Number.html">Number</a></tt><tt>=Sing</tt> (914; 63%), <tt><a href="en_atis-feat-Person.html">Person</a></tt><tt>=3</tt> (914; 63%).

`AUX` tokens may have the following values of `Tense`:

* `Pres` (1449; 100% of non-empty `Tense`): <em>is, are, does, do, 's, 'm, 're, am, 've, being</em>
* `EMPTY` (805): <em>would, 'd, can, could, be, will, may, should, 'll, must</em>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="en_atis-dep-conj.html">conj</a></tt>]--> VERB</tt> (120; 63%),
<tt>VERB --[<tt><a href="en_atis-dep-list.html">list</a></tt>]--> VERB</tt> (1; 100%).

