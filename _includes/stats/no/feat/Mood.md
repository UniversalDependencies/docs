

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This feature is universal.
It occurs with 2 different values: `Imp`, `Ind`.

34828 tokens (11%) have a non-empty value of `Mood`.
2611 types (8%) occur at least once with a non-empty value of `Mood`.
1439 lemmas (6%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: [no-pos/VERB]() (25675; 8% instances), [no-pos/AUX]() (9153; 3% instances).

### `VERB`

25675 [no-pos/VERB]() tokens (63% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (25675; 100%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (18601; 72%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (232; 1% of non-empty `Mood`): <em>les, la, se, tenk, Ha, ta, send, gi, husk, kom</em>
* `Ind` (25443; 99% of non-empty `Mood`): <em>er, var, har, sier, blir, kommer, går, mener, ble, får</em>
* `EMPTY` (14893): <em>være, vært, få, ha, bli, ta, gjøre, se, si, gå</em>

<table>
  <tr><th>Paradigm <i>være</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Past</tt></td><td><em>var</em></td><td></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Pres</tt></td><td><em>er, e</em></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>vær</em></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 95% lemmas (1363) occur only with one value of `Mood`.

### `AUX`

9153 [no-pos/AUX]() tokens (92% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (9153; 100%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (7088; 77%).

`AUX` tokens may have the following values of `Mood`:

* `Imp` (2; 0% of non-empty `Mood`): <em>Få, vær</em>
* `Ind` (9151; 100% of non-empty `Mood`): <em>har, kan, vil, skal, er, ble, må, hadde, skulle, ville</em>
* `EMPTY` (811): <em>ha, bli, blitt, kunne, få, vært, fått, være, måtte, måttet</em>

<table>
  <tr><th>Paradigm <i>være</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Past</tt></td><td><em>var</em></td><td></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Pres</tt></td><td><em>er</em></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>vær</em></td></tr>
</table>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (1623; 70%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (515; 60%),
<tt>VERB --[<a href="../dep/csubjpass.html">csubjpass</a>]--> VERB</tt> (4; 67%).

