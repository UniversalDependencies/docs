

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This feature is universal.
It occurs with 3 different values: `Fin`, `Inf`, `Part`.

52364 tokens (17%) have a non-empty value of `VerbForm`.
5408 types (17%) occur at least once with a non-empty value of `VerbForm`.
2322 lemmas (10%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 3 part-of-speech tags: [no-pos/VERB]() (40568; 13% instances), [no-pos/AUX]() (9964; 3% instances), [no-pos/ADJ]() (1832; 1% instances).

### `VERB`

40568 [no-pos/VERB]() tokens (100% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="Mood.html">Mood</a>=Ind</tt> (25443; 63%).

`VERB` tokens may have the following values of `VerbForm`:

* `Fin` (25675; 63% of non-empty `VerbForm`): <em>er, var, har, sier, blir, kommer, går, mener, ble, får</em>
* `Inf` (9403; 23% of non-empty `VerbForm`): <em>være, få, ha, bli, ta, gjøre, se, si, gå, komme</em>
* `Part` (5490; 14% of non-empty `VerbForm`): <em>vært, fått, hatt, blitt, tatt, gjort, sett, gått, kommet, lagt</em>

<table>
  <tr><th>Paradigm <i>være</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>være, vøre</em></td><td><em>vært</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Imp</tt></td><td><em>vær</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>var</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>er, e</em></td><td></td><td></td></tr>
</table>

### `AUX`

9964 [no-pos/AUX]() tokens (100% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="Mood.html">Mood</a>=Ind</tt> (9151; 92%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (7088; 71%).

`AUX` tokens may have the following values of `VerbForm`:

* `Fin` (9153; 92% of non-empty `VerbForm`): <em>har, kan, vil, skal, er, ble, må, hadde, skulle, ville</em>
* `Inf` (583; 6% of non-empty `VerbForm`): <em>ha, bli, kunne, få, være, måtte, ville, skulle, ble</em>
* `Part` (228; 2% of non-empty `VerbForm`): <em>blitt, vært, fått, måttet, kunnet, villet</em>

<table>
  <tr><th>Paradigm <i>kunne</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>kunne</em></td><td><em>kunnet</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>kunne</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>kan, lunne</em></td><td></td><td></td></tr>
</table>

### `ADJ`

1832 [no-pos/ADJ]() tokens (7% of all `ADJ` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `ADJ` and `VerbForm` co-occurred: <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (1832; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (1540; 84%), <tt><a href="Number.html">Number</a>=Sing</tt> (990; 54%).

`ADJ` tokens may have the following values of `VerbForm`:

* `Part` (1832; 100% of non-empty `VerbForm`): <em>sittende, tilsvarende, stående, forurensende, økende, økt, overraskende, ledende, krevende, manglende</em>
* `EMPTY` (24977): <em>mer, mange, flere, norske, mye, første, store, nye, hele, helt</em>

`VerbForm` seems to be **lexical feature** of `ADJ`. 100% lemmas (690) occur only with one value of `VerbForm`.

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (2542; 77%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (526; 61%),
<tt>VERB --[<a href="../dep/remnant.html">remnant</a>]--> VERB</tt> (19; 68%),
<tt>AUX --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (11; 100%),
<tt>VERB --[<a href="../dep/appos.html">appos</a>]--> VERB</tt> (8; 89%),
<tt>VERB --[<a href="../dep/csubjpass.html">csubjpass</a>]--> VERB</tt> (5; 63%),
<tt>VERB --[<a href="../dep/iobj.html">iobj</a>]--> VERB</tt> (1; 100%).

