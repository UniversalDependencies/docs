---
layout: base
title:  'Statistics of VerbForm in UD_English'
udver: '2'
---

## Treebank Statistics: UD_English: Features: `VerbForm`

This feature is universal.
It occurs with 4 different values: `Fin`, `Ger`, `Inf`, `Part`.

43840 tokens (17%) have a non-empty value of `VerbForm`.
4471 types (23%) occur at least once with a non-empty value of `VerbForm`.
2136 lemmas (13%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="en-pos-VERB.html">VERB</a></tt> (28482; 11% instances), <tt><a href="en-pos-AUX.html">AUX</a></tt> (15358; 6% instances).

### `VERB`

28482 <tt><a href="en-pos-VERB.html">VERB</a></tt> tokens (100% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="en-feat-Mood.html">Mood</a></tt><tt>=EMPTY</tt> (17093; 60%).

`VERB` tokens may have the following values of `VerbForm`:

* `Fin` (11389; 40% of non-empty `VerbForm`): <em>have, is, had, said, has, are, want, need, let, think</em>
* `Ger` (2787; 10% of non-empty `VerbForm`): <em>going, getting, looking, following, including, taking, having, using, doing, regarding</em>
* `Inf` (8724; 31% of non-empty `VerbForm`): <em>have, get, know, do, go, make, take, see, like, find</em>
* `Part` (5582; 20% of non-empty `VerbForm`): <em>going, had, attached, done, made, used, called, based, doing, looking</em>
* `EMPTY` (10): <em>has, associates, cell, crossing, helped, is, jack, rays, resource</em>

<table>
  <tr><th>Paradigm <i>have</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th><th><tt>Ger</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>have, had</em></td><td></td><td><em>having</em></td></tr>
  <tr><td><tt><tt><a href="en-feat-Mood.html">Mood</a></tt><tt>=Imp</tt></tt></td><td><em>have</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="en-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>has, haves</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>had</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>have, having</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td></td><td><em>had</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="en-feat-Voice.html">Voice</a></tt><tt>=Pass</tt></tt></td><td></td><td></td><td><em>had</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>having</em></td><td></td></tr>
</table>

### `AUX`

15358 <tt><a href="en-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="en-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (10146; 66%), <tt><a href="en-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (10143; 66%), <tt><a href="en-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (9158; 60%).

`AUX` tokens may have the following values of `VerbForm`:

* `Fin` (13350; 87% of non-empty `VerbForm`): <em>is, will, can, would, was, are, could, do, should, have</em>
* `Ger` (176; 1% of non-empty `VerbForm`): <em>being, having, getting</em>
* `Inf` (1427; 9% of non-empty `VerbForm`): <em>be, have, do, get, of, am, 've, are, b</em>
* `Part` (405; 3% of non-empty `VerbForm`): <em>been</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th><th><tt>Ger</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>be, am, are</em></td><td></td><td><em>being</em></td></tr>
  <tr><td><tt><tt><a href="en-feat-Mood.html">Mood</a></tt><tt>=Imp</tt></tt></td><td><em>be</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="en-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="en-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>am</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="en-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="en-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>is, 's, s, ’s, ai</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>were</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>are, 'm, 're, m, r, re, ai, is, ´m, ’m</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td></td><td><em>been</em></td><td></td></tr>
</table>

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<tt><a href="en-dep-conj.html">conj</a></tt>]--> VERB</tt> (2090; 72%),
<tt>VERB --[<tt><a href="en-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (355; 54%),
<tt>VERB --[<tt><a href="en-dep-advcl.html">advcl</a></tt>]--> AUX</tt> (8; 67%),
<tt>VERB --[<tt><a href="en-dep-ccomp.html">ccomp</a></tt>]--> AUX</tt> (5; 63%),
<tt>VERB --[<tt><a href="en-dep-list.html">list</a></tt>]--> VERB</tt> (5; 56%),
<tt>AUX --[<tt><a href="en-dep-aux-pass.html">aux:pass</a></tt>]--> AUX</tt> (3; 100%),
<tt>VERB --[<tt><a href="en-dep-amod.html">amod</a></tt>]--> VERB</tt> (3; 100%),
<tt>AUX --[<tt><a href="en-dep-cop.html">cop</a></tt>]--> AUX</tt> (2; 100%),
<tt>AUX --[<tt><a href="en-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (2; 100%),
<tt>AUX --[<tt><a href="en-dep-conj.html">conj</a></tt>]--> AUX</tt> (1; 100%).

