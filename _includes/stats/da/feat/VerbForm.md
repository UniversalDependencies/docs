

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This feature is universal.
It occurs with 4 different values: `Fin`, `Ger`, `Inf`, `Part`.

13864 tokens (15%) have a non-empty value of `VerbForm`.
3033 types (18%) occur at least once with a non-empty value of `VerbForm`.
1466 lemmas (12%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: [da-pos/VERB]() (9450; 10% instances), [da-pos/AUX]() (4414; 5% instances).

### `VERB`

9450 [da-pos/VERB]() tokens (98% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (7798; 83%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (7665; 81%), <tt><a href="Voice.html">Voice</a>=Act</tt> (6993; 74%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (5028; 53%).

`VERB` tokens may have the following values of `VerbForm`:

* `Fin` (5028; 53% of non-empty `VerbForm`): <em>er, har, siger, var, får, sagde, fik, kommer, går, gik</em>
* `Ger` (18; 0% of non-empty `VerbForm`): <em>medvirken, afventen, banken, formåen, fremtræden, gåen, hvislen, indgriben, mumlen, skaben</em>
* `Inf` (2401; 25% of non-empty `VerbForm`): <em>få, se, gå, have, være, gøre, komme, tage, finde, sige</em>
* `Part` (2003; 21% of non-empty `VerbForm`): <em>fået, været, gjort, set, haft, gået, kommet, sagt, taget, kommende</em>
* `EMPTY` (157): <em>lad, rør, skær, brug, hold, hæld, se, steg, prøv, Bland</em>

<table>
  <tr><th>Paradigm <i>gå</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th><th><tt>Ger</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td></td><td></td><td><em>gåen</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Past</tt></td><td></td><td></td><td><em>gået</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Tense.html">Tense</a>=Past|<a href="Voice.html">Voice</a>=Act</tt></td><td><em>gik</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Tense.html">Tense</a>=Pres|<a href="Voice.html">Voice</a>=Act</tt></td><td><em>går</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Pres</tt></td><td></td><td></td><td><em>gående</em></td><td></td></tr>
  <tr><td><tt><a href="Voice.html">Voice</a>=Act</tt></td><td></td><td><em>gå</em></td><td></td><td></td></tr>
</table>

### `AUX`

4414 [da-pos/AUX]() tokens (100% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="Voice.html">Voice</a>=Act</tt> (4248; 96%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (3952; 90%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (3012; 68%).

`AUX` tokens may have the following values of `VerbForm`:

* `Fin` (3952; 90% of non-empty `VerbForm`): <em>er, har, kan, var, skal, vil, blev, kunne, havde, bliver</em>
* `Inf` (296; 7% of non-empty `VerbForm`): <em>være, blive, have, kunne, skulle, turde, ville, måtte</em>
* `Part` (166; 4% of non-empty `VerbForm`): <em>været, blevet, kunnet, måttet, turdet, villet, værende</em>
* `EMPTY` (1): <em>Bliv</em>

<table>
  <tr><th>Paradigm <i>være</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Past</tt></td><td></td><td></td><td><em>været</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Tense.html">Tense</a>=Past|<a href="Voice.html">Voice</a>=Act</tt></td><td><em>var</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Tense.html">Tense</a>=Pres|<a href="Voice.html">Voice</a>=Act</tt></td><td><em>er</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Pres</tt></td><td></td><td></td><td><em>værende</em></td></tr>
  <tr><td><tt><a href="Voice.html">Voice</a>=Act</tt></td><td></td><td><em>være</em></td><td></td></tr>
</table>

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (713; 72%),
<tt>VERB --[<a href="../dep/dep.html">dep</a>]--> VERB</tt> (17; 65%),
<tt>VERB --[<a href="../dep/obl:loc.html">obl:loc</a>]--> VERB</tt> (1; 100%).

