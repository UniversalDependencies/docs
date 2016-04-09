

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

12434 tokens (12%) have a non-empty value of `Tense`.
2418 types (14%) occur at least once with a non-empty value of `Tense`.
1316 lemmas (10%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: [da-pos/VERB]() (7852; 8% instances), [da-pos/AUX]() (4582; 5% instances).

### `VERB`

7852 [da-pos/VERB]() tokens (73% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (6003; 76%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (5858; 75%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (5615; 72%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (5615; 72%), <tt><a href="Voice.html">Voice</a>=Act</tt> (5342; 68%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (3926; 50% of non-empty `Tense`): <em>var, fik, sagde, havde, gik, kom, fået, været, set, begyndte</em>
* `Pres` (3926; 50% of non-empty `Tense`): <em>er, har, siger, får, kommer, går, ved, gør, mener, giver</em>
* `EMPTY` (2859): <em>få, se, gå, have, komme, være, gøre, tage, finde, sige</em>

<table>
  <tr><th>Paradigm <i>være</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="VerbForm.html">VerbForm</a>=Part,Trans</tt></td><td></td><td><em>været</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="VerbForm.html">VerbForm</a>=Fin|<a href="Voice.html">Voice</a>=Act</tt></td><td><em>er</em></td><td><em>var</em></td></tr>
</table>

### `AUX`

4582 [da-pos/AUX]() tokens (93% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="Voice.html">Voice</a>=Act</tt> (4395; 96%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (4395; 96%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (4395; 96%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (1270; 28% of non-empty `Tense`): <em>var, blev, kunne, havde, været, skulle, ville, blevet, måtte, kunnet</em>
* `Pres` (3312; 72% of non-empty `Tense`): <em>er, har, kan, skal, vil, bliver, må, bør, tør, ka'</em>
* `EMPTY` (335): <em>være, blive, have, kunne, skulle, turde, ville, Bliv, ku', måtte</em>

<table>
  <tr><th>Paradigm <i>være</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="VerbForm.html">VerbForm</a>=Part,Trans</tt></td><td></td><td><em>været</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="VerbForm.html">VerbForm</a>=Fin|<a href="Voice.html">Voice</a>=Act</tt></td><td><em>er</em></td><td><em>var</em></td></tr>
  <tr><td><tt><a href="VerbForm.html">VerbForm</a>=Part,Trans</tt></td><td><em>værende</em></td><td></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (607; 73%),
<tt>VERB --[<a href="../dep/advmod.html">advmod</a>]--> VERB</tt> (246; 59%),
<tt>VERB --[<a href="../dep/nmod:loc.html">nmod:loc</a>]--> VERB</tt> (1; 100%),
<tt>VERB --[<a href="../dep/cop.html">cop</a>]--> AUX</tt> (1; 100%).

