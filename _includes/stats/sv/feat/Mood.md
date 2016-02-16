

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This feature is universal.
It occurs with 3 different values: `Imp`, `Ind`, `Sub`.

9701 tokens (10%) have a non-empty value of `Mood`.
1430 types (9%) occur at least once with a non-empty value of `Mood`.
870 lemmas (9%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: [sv-pos/VERB]() (5923; 6% instances), [sv-pos/AUX]() (3778; 4% instances).

### `VERB`

5923 [sv-pos/VERB]() tokens (59% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (5923; 100%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (5048; 85%), <tt><a href="Voice.html">Voice</a>=Act</tt> (4805; 81%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (191; 3% of non-empty `Mood`): <em>se, låt, ta, ge, kontrollera, Diskutera, kolla, Läs, byt, jämför</em>
* `Ind` (5724; 97% of non-empty `Mood`): <em>har, finns, är, blir, får, gäller, ger, går, kommer, gör</em>
* `Sub` (8; 0% of non-empty `Mood`): <em>vare, vore, Gånge, finge</em>
* `EMPTY` (4046): <em>få, ha, bli, göra, ge, ta, komma, gå, se, fått</em>

<table>
  <tr><th>Paradigm <i>gå</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th><th><tt>Sub</tt></th></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Past</tt></td><td><em>gick</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Pres</tt></td><td><em>går</em></td><td></td><td><em>Gånge</em></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>Gå</em></td><td></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 94% lemmas (815) occur only with one value of `Mood`.

### `AUX`

3778 [sv-pos/AUX]() tokens (90% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="Voice.html">Voice</a>=Act</tt> (3778; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (3778; 100%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (3411; 90%).

`AUX` tokens may have the following values of `Mood`:

* `Imp` (1; 0% of non-empty `Mood`): <em>Varen</em>
* `Ind` (3769; 100% of non-empty `Mood`): <em>är, kan, har, måste, skall, skulle, ska, kommer, var, får</em>
* `Sub` (8; 0% of non-empty `Mood`): <em>vore</em>
* `EMPTY` (405): <em>vara, kunna, varit, få, ha, bli, kunnat, behöva, fått, kommit</em>

<table>
  <tr><th>Paradigm <i>vara</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th><th><tt>Sub</tt></th></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Past</tt></td><td><em>var</em></td><td></td><td><em>vore</em></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Pres</tt></td><td><em>är, äro</em></td><td></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>Varen</em></td><td></td></tr>
</table>

`Mood` seems to be **lexical feature** of `AUX`. 93% lemmas (14) occur only with one value of `Mood`.

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (380; 74%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (102; 52%),
<tt>VERB --[<a href="../dep/dislocated.html">dislocated</a>]--> VERB</tt> (18; 55%),
<tt>VERB --[<a href="../dep/appos.html">appos</a>]--> VERB</tt> (10; 56%),
<tt>AUX --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (1; 100%).

