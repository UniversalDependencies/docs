

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This feature is universal.
It occurs with 3 different values: `Fin`, `Inf`, `Part`.

50528 tokens (16%) have a non-empty value of `VerbForm`.
4768 types (15%) occur at least once with a non-empty value of `VerbForm`.
2054 lemmas (9%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 3 part-of-speech tags: [no-pos/VERB]() (40534; 13% instances), [no-pos/AUX]() (9993; 3% instances), [no-pos/ADJ]() (1; 0% instances).

### `VERB`

40534 [no-pos/VERB]() tokens (100% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="Mood.html">Mood</a>=Ind</tt> (25420; 63%).

`VERB` tokens may have the following values of `VerbForm`:

* `Fin` (25652; 63% of non-empty `VerbForm`): <em>er, var, har, sier, blir, kommer, går, mener, ble, får</em>
* `Inf` (9400; 23% of non-empty `VerbForm`): <em>være, få, ha, bli, ta, gjøre, se, si, gå, komme</em>
* `Part` (5482; 14% of non-empty `VerbForm`): <em>vært, fått, hatt, blitt, tatt, gjort, sett, gått, kommet, lagt</em>
* `EMPTY` (5): <em>hire, hjerteoperert, know, overrasket, tids-</em>

<table>
  <tr><th>Paradigm <i>være</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>være, vøre</em></td><td><em>vært</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Imp</tt></td><td><em>vær</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>var</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>er, e</em></td><td></td><td></td></tr>
</table>

### `AUX`

9993 [no-pos/AUX]() tokens (100% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="Mood.html">Mood</a>=Ind</tt> (9171; 92%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (7107; 71%).

`AUX` tokens may have the following values of `VerbForm`:

* `Fin` (9173; 92% of non-empty `VerbForm`): <em>har, kan, vil, skal, er, ble, må, hadde, skulle, ville</em>
* `Inf` (586; 6% of non-empty `VerbForm`): <em>ha, bli, kunne, få, være, måtte, ville, skulle, ble, høre</em>
* `Part` (234; 2% of non-empty `VerbForm`): <em>blitt, vært, fått, måttet, kunnet, forsøkt, villet, danset, erklært, sett</em>

<table>
  <tr><th>Paradigm <i>kunne</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>kunne</em></td><td><em>kunnet</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>kunne</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>kan, lunne</em></td><td></td><td></td></tr>
</table>

### `ADJ`

1 [no-pos/ADJ]() tokens (0% of all `ADJ` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `ADJ` and `VerbForm` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (1; 100%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (1; 100%), <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (1; 100%), <tt><a href="Number.html">Number</a>=Plur</tt> (1; 100%).

`ADJ` tokens may have the following values of `VerbForm`:

* `Part` (1; 100% of non-empty `VerbForm`): <em>skuffa</em>
* `EMPTY` (26808): <em>mer, mange, flere, norske, mye, første, store, nye, hele, helt</em>

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (2540; 76%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (526; 61%),
<tt>VERB --[<a href="../dep/remnant.html">remnant</a>]--> VERB</tt> (19; 68%),
<tt>AUX --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (11; 100%),
<tt>VERB --[<a href="../dep/appos.html">appos</a>]--> VERB</tt> (8; 89%),
<tt>VERB --[<a href="../dep/csubjpass.html">csubjpass</a>]--> VERB</tt> (5; 63%),
<tt>VERB --[<a href="../dep/iobj.html">iobj</a>]--> VERB</tt> (1; 100%),
<tt>VERB --[<a href="../dep/aux.html">aux</a>]--> VERB</tt> (1; 100%).

