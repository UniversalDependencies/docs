

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This feature is universal.
It occurs with 2 different values: `Act`, `Pass`.

13784 tokens (14%) have a non-empty value of `Voice`.
2598 types (17%) occur at least once with a non-empty value of `Voice`.
1187 lemmas (12%) occur at least once with a non-empty value of `Voice`.
The feature is used with 2 part-of-speech tags: [sv-pos/VERB]() (9601; 10% instances), [sv-pos/AUX]() (4183; 4% instances).

### `VERB`

9601 [sv-pos/VERB]() tokens (96% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (5648; 59%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (5449; 57%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (8132; 85% of non-empty `Voice`): <em>har, är, blir, få, får, ha, gäller, ger, går, se</em>
* `Pass` (1469; 15% of non-empty `Voice`): <em>kallas, användas, behövs, anses, beräknas, tas, används, ges, användes, förändras</em>
* `EMPTY` (368): <em>finns, tycks, fanns, finnas, fordras, jfr, känns, hoppas, syns, trivas</em>

<table>
  <tr><th>Paradigm <i>göra</i></th><th><tt>Act</tt></th><th><tt>Pass</tt></th></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>Gör</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>gjorde</em></td><td><em>gjordes</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>gör</em></td><td><em>görs</em></td></tr>
  <tr><td><tt><a href="VerbForm.html">VerbForm</a>=Inf</tt></td><td><em>göra</em></td><td><em>göras</em></td></tr>
  <tr><td><tt><a href="VerbForm.html">VerbForm</a>=Sup</tt></td><td><em>gjort</em></td><td><em>gjorts</em></td></tr>
</table>

### `AUX`

4183 [sv-pos/AUX]() tokens (100% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (3778; 90%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (3769; 90%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (3411; 82%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (4183; 100% of non-empty `Voice`): <em>är, kan, har, måste, skall, vara, skulle, ska, kommer, var</em>

`Voice` seems to be **lexical feature** of `AUX`. 100% lemmas (16) occur only with one value of `Voice`.

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<a href="../dep/aux.html">aux</a>]--> AUX</tt> (1825; 77%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (819; 72%),
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (675; 81%),
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> VERB</tt> (319; 77%),
<tt>VERB --[<a href="../dep/xcomp.html">xcomp</a>]--> VERB</tt> (279; 81%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (174; 77%),
<tt>VERB --[<a href="../dep/csubj.html">csubj</a>]--> VERB</tt> (98; 91%),
<tt>VERB --[<a href="../dep/dislocated.html">dislocated</a>]--> VERB</tt> (29; 81%),
<tt>VERB --[<a href="../dep/appos.html">appos</a>]--> VERB</tt> (19; 76%),
<tt>VERB --[<a href="../dep/acl:relcl.html">acl:relcl</a>]--> VERB</tt> (5; 56%).

