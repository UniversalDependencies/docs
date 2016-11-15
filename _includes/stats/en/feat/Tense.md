

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

24574 tokens (10%) have a non-empty value of `Tense`.
2779 types (15%) occur at least once with a non-empty value of `Tense`.
1559 lemmas (10%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: [en-pos/VERB]() (19860; 8% instances), [en-pos/AUX]() (4714; 2% instances).

### `VERB`

19860 [en-pos/VERB]() tokens (59% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="Mood.html">Mood</a>=Ind</tt> (14288; 72%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (14288; 72%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (14244; 72%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (14233; 72%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (9648; 49% of non-empty `Tense`): <em>was, had, said, were, been, made, got, called, told, used</em>
* `Pres` (10212; 51% of non-empty `Tense`): <em>is, are, have, 's, has, 'm, want, need, am, going</em>
* `EMPTY` (13610): <em>be, have, get, know, go, do, see, take, let, make</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>am</em></td><td><em>was</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>is, 's, s, ai</em></td><td><em>was</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>was</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>are, 'm, 're, m, r, re, is</em></td><td><em>were</em></td></tr>
  <tr><td><tt><a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td><em>been</em></td></tr>
</table>

### `AUX`

4714 [en-pos/AUX]() tokens (49% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (4486; 95%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (4486; 95%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (2883; 61%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (2880; 61%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (1366; 29% of non-empty `Tense`): <em>was, did, been, were, had, 'd, got, wase</em>
* `Pres` (3348; 71% of non-empty `Tense`): <em>have, do, is, are, has, does, 've, am, 'm, 's</em>
* `EMPTY` (4865): <em>will, can, would, be, could, should, may, 'll, have, do</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>am</em></td><td><em>was</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>is, 's, s</em></td><td><em>was</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>was</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>are, 'm, 're, r, m, re, ai</em></td><td><em>were</em></td></tr>
  <tr><td><tt><a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td><em>been</em></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (1147; 61%),
<tt>VERB --[<a href="../dep/remnant.html">remnant</a>]--> VERB</tt> (2; 67%),
<tt>VERB --[<a href="../dep/amod.html">amod</a>]--> VERB</tt> (1; 100%).

