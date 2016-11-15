

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This feature is universal.
It occurs with 2 different values: `Imp`, `Ind`.

20345 tokens (8%) have a non-empty value of `Mood`.
1976 types (10%) occur at least once with a non-empty value of `Mood`.
1078 lemmas (7%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: [en-pos/VERB]() (15751; 6% instances), [en-pos/AUX]() (4594; 2% instances).

### `VERB`

15751 [en-pos/VERB]() tokens (47% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (15751; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (10135; 64%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (10124; 64%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (9140; 58%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (1463; 9% of non-empty `Mood`): <em>let, go, see, take, try, get, make, be, give, call</em>
* `Ind` (14288; 91% of non-empty `Mood`): <em>is, was, are, have, 's, had, were, said, has, 'm</em>
* `EMPTY` (17719): <em>be, have, get, know, do, go, going, been, make, see</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>was</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>am</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>was</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>is, 's, s, ai</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>was</em></td><td></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Past</tt></td><td><em>were</em></td><td></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Pres</tt></td><td><em>are, 'm, 're, m, r, re, is</em></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>be</em></td></tr>
</table>

### `AUX`

4594 [en-pos/AUX]() tokens (48% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (4594; 100%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (3348; 73%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (2763; 60%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (2760; 60%).

`AUX` tokens may have the following values of `Mood`:

* `Imp` (108; 2% of non-empty `Mood`): <em>do, be, get</em>
* `Ind` (4486; 98% of non-empty `Mood`): <em>have, do, is, was, are, has, did, were, had, does</em>
* `EMPTY` (4985): <em>will, can, would, be, could, should, been, may, 'll, have</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>was</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>am</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>was</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>is, 's, s</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>was</em></td><td></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Past</tt></td><td><em>were</em></td><td></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Pres</tt></td><td><em>are, 'm, 're, m, r, re, ai</em></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>be</em></td></tr>
</table>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (1015; 60%),
<tt>AUX --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (1; 100%),
<tt>VERB --[<a href="../dep/compound:prt.html">compound:prt</a>]--> VERB</tt> (1; 100%),
<tt>AUX --[<a href="../dep/aux.html">aux</a>]--> AUX</tt> (1; 100%).

