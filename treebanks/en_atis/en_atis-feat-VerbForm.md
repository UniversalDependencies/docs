---
layout: base
title:  'Statistics of VerbForm in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Features: `VerbForm`

This feature is universal.
It occurs with 3 different values: `Fin`, `Inf`, `Part`.

7349 tokens (12%) have a non-empty value of `VerbForm`.
159 types (17%) occur at least once with a non-empty value of `VerbForm`.
99 lemmas (13%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (5877; 9% instances), <tt><a href="en_atis-pos-AUX.html">AUX</a></tt> (1472; 2% instances).

### `VERB`

5877 <tt><a href="en_atis-pos-VERB.html">VERB</a></tt> tokens (100% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="en_atis-feat-Mood.html">Mood</a></tt><tt>=EMPTY</tt> (4422; 75%), <tt><a href="en_atis-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (3466; 59%).

`VERB` tokens may have the following values of `VerbForm`:

* `Fin` (1455; 25% of non-empty `VerbForm`): <em>need, show, want, are, arrive, is, have, leaves, go, arrives</em>
* `Inf` (3466; 59% of non-empty `VerbForm`): <em>show, list, like, fly, give, leave, find, have, go, tell</em>
* `Part` (956; 16% of non-empty `VerbForm`): <em>leaving, arriving, going, departing, used, flying, connecting, looking, stopping, using</em>

<table>
  <tr><th>Paradigm <i>arrive</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>arrive</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_atis-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_atis-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_atis-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="en_atis-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>arrives</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en_atis-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_atis-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>arrive</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en_atis-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>arriving</em></td></tr>
</table>

### `AUX`

1472 <tt><a href="en_atis-pos-AUX.html">AUX</a></tt> tokens (65% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="en_atis-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (1449; 98%), <tt><a href="en_atis-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1448; 98%), <tt><a href="en_atis-feat-Number.html">Number</a></tt><tt>=Sing</tt> (914; 62%), <tt><a href="en_atis-feat-Person.html">Person</a></tt><tt>=3</tt> (914; 62%).

`AUX` tokens may have the following values of `VerbForm`:

* `Fin` (1448; 98% of non-empty `VerbForm`): <em>is, are, does, do, 's, 'm, 're, am, 've</em>
* `Inf` (23; 2% of non-empty `VerbForm`): <em>be, will</em>
* `Part` (1; 0% of non-empty `VerbForm`): <em>being</em>
* `EMPTY` (782): <em>would, 'd, can, could, will, may, should, 'll, must</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>be</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_atis-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_atis-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_atis-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="en_atis-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>is, 's, 're</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en_atis-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_atis-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>are, 'm, am, 're</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en_atis-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>being</em></td></tr>
</table>

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<tt><a href="en_atis-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (225; 56%),
<tt>VERB --[<tt><a href="en_atis-dep-conj.html">conj</a></tt>]--> VERB</tt> (171; 70%),
<tt>VERB --[<tt><a href="en_atis-dep-discourse.html">discourse</a></tt>]--> VERB</tt> (5; 56%),
<tt>VERB --[<tt><a href="en_atis-dep-obl.html">obl</a></tt>]--> VERB</tt> (5; 71%),
<tt>VERB --[<tt><a href="en_atis-dep-reparandum.html">reparandum</a></tt>]--> VERB</tt> (2; 100%),
<tt>VERB --[<tt><a href="en_atis-dep-list.html">list</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="en_atis-dep-xcomp.html">xcomp</a></tt>]--> AUX</tt> (1; 100%).

