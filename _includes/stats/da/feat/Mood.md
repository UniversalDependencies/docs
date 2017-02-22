

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This feature is universal.
It occurs with 2 different values: `Imp`, `Ind`.

9136 tokens (10%) have a non-empty value of `Mood`.
1406 types (8%) occur at least once with a non-empty value of `Mood`.
863 lemmas (7%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: [da-pos/VERB]() (5183; 6% instances), [da-pos/AUX]() (3953; 4% instances).

### `VERB`

5183 [da-pos/VERB]() tokens (54% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (5183; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (5183; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (5028; 97%), <tt><a href="Voice.html">Voice</a>=Act</tt> (4787; 92%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (3331; 64%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (155; 3% of non-empty `Mood`): <em>lad, rør, skær, brug, hold, hæld, se, steg, prøv, Bland</em>
* `Ind` (5028; 97% of non-empty `Mood`): <em>er, har, siger, var, får, sagde, fik, kommer, går, gik</em>
* `EMPTY` (4424): <em>få, se, gå, have, være, fået, gøre, komme, tage, været</em>

<table>
  <tr><th>Paradigm <i>få</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>Få</em></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin|<a href="Voice.html">Voice</a>=Act</tt></td><td><em>fik</em></td><td></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin|<a href="Voice.html">Voice</a>=Act</tt></td><td><em>får</em></td><td></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin|<a href="Voice.html">Voice</a>=Pass</tt></td><td><em>fås</em></td><td></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 94% lemmas (806) occur only with one value of `Mood`.

### `AUX`

3953 [da-pos/AUX]() tokens (90% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="Voice.html">Voice</a>=Act</tt> (3952; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (3952; 100%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (3011; 76%).

`AUX` tokens may have the following values of `Mood`:

* `Imp` (1; 0% of non-empty `Mood`): <em>Bliv</em>
* `Ind` (3952; 100% of non-empty `Mood`): <em>er, har, kan, var, skal, vil, blev, kunne, havde, bliver</em>
* `EMPTY` (462): <em>være, været, blevet, blive, have, kunne, kunnet, skulle, måttet, turde</em>

<table>
  <tr><th>Paradigm <i>blive</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>Bliv</em></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin|<a href="Voice.html">Voice</a>=Act</tt></td><td><em>blev</em></td><td></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin|<a href="Voice.html">Voice</a>=Act</tt></td><td><em>bliver, bli'r</em></td><td></td></tr>
</table>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (528; 68%),
<tt>VERB --[<a href="../dep/obl:loc.html">obl:loc</a>]--> VERB</tt> (1; 100%).

