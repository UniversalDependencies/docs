

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This feature is universal.
It occurs with 2 different values: `Imp`, `Ind`.

10178 tokens (10%) have a non-empty value of `Mood`.
1516 types (8%) occur at least once with a non-empty value of `Mood`.
918 lemmas (7%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: [da-pos/VERB]() (5782; 6% instances), [da-pos/AUX]() (4396; 4% instances).

### `VERB`

5782 [da-pos/VERB]() tokens (54% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="Number.html">Number</a>=EMPTY</tt> (5782; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (5782; 100%), <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (5782; 100%), <tt><a href="Voice.html">Voice</a>=Act</tt> (5342; 92%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (3687; 64%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (167; 3% of non-empty `Mood`): <em>lad, rør, se, skær, brug, hold, hæld, steg, prøv, Bland</em>
* `Ind` (5615; 97% of non-empty `Mood`): <em>er, har, siger, var, får, fik, sagde, kommer, går, havde</em>
* `EMPTY` (4929): <em>få, gå, se, have, fået, komme, være, gøre, tage, været</em>

<table>
  <tr><th>Paradigm <i>få</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Past|<a href="Voice.html">Voice</a>=Act</tt></td><td><em>fik</em></td><td></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Pres|<a href="Voice.html">Voice</a>=Act</tt></td><td><em>får</em></td><td></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Pres|<a href="Voice.html">Voice</a>=Pass</tt></td><td><em>fås</em></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>Få</em></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 94% lemmas (858) occur only with one value of `Mood`.

### `AUX`

4396 [da-pos/AUX]() tokens (89% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (4396; 100%), <tt><a href="Voice.html">Voice</a>=Act</tt> (4395; 100%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (3311; 75%).

`AUX` tokens may have the following values of `Mood`:

* `Imp` (1; 0% of non-empty `Mood`): <em>Bliv</em>
* `Ind` (4395; 100% of non-empty `Mood`): <em>er, har, kan, var, skal, vil, blev, kunne, havde, bliver</em>
* `EMPTY` (521): <em>være, været, blevet, blive, have, kunne, kunnet, måttet, skulle, turde</em>

<table>
  <tr><th>Paradigm <i>blive</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Past|<a href="Voice.html">Voice</a>=Act</tt></td><td><em>blev</em></td><td></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Pres|<a href="Voice.html">Voice</a>=Act</tt></td><td><em>bliver, bli'r</em></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>Bliv</em></td></tr>
</table>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (549; 68%),
<tt>VERB --[<a href="../dep/cop.html">cop</a>]--> AUX</tt> (1; 100%),
<tt>VERB --[<a href="../dep/nmod:loc.html">nmod:loc</a>]--> VERB</tt> (1; 100%).

