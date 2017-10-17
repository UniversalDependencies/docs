

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This feature is universal.
It occurs with 2 different values: `Act`, `Pass`.

10716 tokens (14%) have a non-empty value of `Voice`.
2260 types (17%) occur at least once with a non-empty value of `Voice`.
1055 lemmas (12%) occur at least once with a non-empty value of `Voice`.
The feature is used with 2 part-of-speech tags: [sv-pos/VERB]() (7537; 10% instances), [sv-pos/AUX]() (3179; 4% instances).

### `VERB`

7537 [sv-pos/VERB]() tokens (96% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (4500; 60%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (4316; 57%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (3786; 50%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (6369; 85% of non-empty `Voice`): <em>har, blir, är, få, får, ha, gäller, ger, kommer, se</em>
* `Pass` (1168; 15% of non-empty `Voice`): <em>användas, tas, används, ges, kallas, anses, behövs, lämnas, beräknas, delas</em>
* `EMPTY` (281): <em>finns, tycks, finnas, fanns, fordras, känns, syns, funnits, hoppas, vald</em>

<table>
  <tr><th>Paradigm <i>göra</i></th><th><tt>Act</tt></th><th><tt>Pass</tt></th></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>Gör</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>gjorde</em></td><td><em>gjordes</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>gör</em></td><td><em>görs</em></td></tr>
  <tr><td><tt><a href="VerbForm.html">VerbForm</a>=Inf</tt></td><td><em>göra</em></td><td><em>göras</em></td></tr>
  <tr><td><tt><a href="VerbForm.html">VerbForm</a>=Sup</tt></td><td><em>gjort</em></td><td><em>gjorts</em></td></tr>
</table>

### `AUX`

3179 [sv-pos/AUX]() tokens (100% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (2874; 90%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (2866; 90%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (2597; 82%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (3179; 100% of non-empty `Voice`): <em>är, kan, har, skall, måste, vara, kommer, skulle, ska, var</em>

`Voice` seems to be **lexical feature** of `AUX`. 100% lemmas (16) occur only with one value of `Voice`.

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<a href="../dep/aux.html">aux</a>]--> AUX</tt> (1374; 76%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (638; 74%),
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (528; 82%),
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> VERB</tt> (243; 78%),
<tt>VERB --[<a href="../dep/xcomp.html">xcomp</a>]--> VERB</tt> (222; 81%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (142; 79%),
<tt>VERB --[<a href="../dep/csubj.html">csubj</a>]--> VERB</tt> (72; 92%),
<tt>VERB --[<a href="../dep/dislocated.html">dislocated</a>]--> VERB</tt> (26; 84%),
<tt>VERB --[<a href="../dep/appos.html">appos</a>]--> VERB</tt> (13; 72%),
<tt>AUX --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (3; 100%).

