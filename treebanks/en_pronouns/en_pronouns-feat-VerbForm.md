---
layout: base
title:  'Statistics of VerbForm in UD_English-Pronouns'
udver: '2'
---

## Treebank Statistics: UD_English-Pronouns: Features: `VerbForm`

This feature is universal.
It occurs with 4 different values: `Fin`, `Ger`, `Inf`, `Part`.

375 tokens (22%) have a non-empty value of `VerbForm`.
34 types (44%) occur at least once with a non-empty value of `VerbForm`.
24 lemmas (38%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="en_pronouns-pos-VERB.html">VERB</a></tt> (265; 16% instances), <tt><a href="en_pronouns-pos-AUX.html">AUX</a></tt> (110; 6% instances).

### `VERB`

265 <tt><a href="en_pronouns-pos-VERB.html">VERB</a></tt> tokens (100% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="en_pronouns-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (200; 75%), <tt><a href="en_pronouns-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (175; 66%), <tt><a href="en_pronouns-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (140; 53%), <tt><a href="en_pronouns-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (135; 51%).

`VERB` tokens may have the following values of `VerbForm`:

* `Fin` (210; 79% of non-empty `VerbForm`): <em>cleaned, like, drove, sold, gave, is, knew, liked, Take, accelerated</em>
* `Ger` (5; 2% of non-empty `VerbForm`): <em>using</em>
* `Inf` (5; 2% of non-empty `VerbForm`): <em>clean</em>
* `Part` (45; 17% of non-empty `VerbForm`): <em>cleaned, seeing, cleaning, painted</em>

<table>
  <tr><th>Paradigm <i>clean</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>clean</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_pronouns-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_pronouns-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_pronouns-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="en_pronouns-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>cleaned</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en_pronouns-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_pronouns-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_pronouns-feat-Person.html">Person</a></tt><tt>=2</tt>|<tt><a href="en_pronouns-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>cleaned</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en_pronouns-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_pronouns-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_pronouns-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="en_pronouns-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>cleaned</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en_pronouns-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td></td><td><em>cleaned</em></td></tr>
  <tr><td><tt><tt><a href="en_pronouns-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>cleaning</em></td></tr>
</table>

`VerbForm` seems to be **lexical feature** of `VERB`. 91% lemmas (21) occur only with one value of `VerbForm`.

### `AUX`

110 <tt><a href="en_pronouns-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="en_pronouns-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (105; 95%), <tt><a href="en_pronouns-feat-Number.html">Number</a></tt><tt>=Sing</tt> (105; 95%), <tt><a href="en_pronouns-feat-Person.html">Person</a></tt><tt>=3</tt> (91; 83%), <tt><a href="en_pronouns-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (80; 73%).

`AUX` tokens may have the following values of `VerbForm`:

* `Fin` (110; 100% of non-empty `VerbForm`): <em>'s, is, was, 'll, ai</em>

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<tt><a href="en_pronouns-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (25; 100%),
<tt>VERB --[<tt><a href="en_pronouns-dep-aux.html">aux</a></tt>]--> AUX</tt> (5; 100%).

