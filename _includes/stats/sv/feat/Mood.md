

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This feature is universal.
It occurs with 3 different values: `Imp`, `Ind`, `Sub`.

9709 tokens (10%) have a non-empty value of `Mood`.
1433 types (9%) occur at least once with a non-empty value of `Mood`.
872 lemmas (9%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: [sv-pos/VERB]() (7332; 8% instances), [sv-pos/AUX]() (2377; 2% instances).

### `VERB`

7332 [sv-pos/VERB]() tokens (63% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (7332; 100%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (6342; 86%), <tt><a href="Voice.html">Voice</a>=Act</tt> (6214; 85%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (199; 3% of non-empty `Mood`): <em>se, låt, ta, ge, jfr, kontrollera, Diskutera, kolla, Läs, byt</em>
* `Ind` (7117; 97% of non-empty `Mood`): <em>är, har, finns, blir, får, var, gäller, ger, går, kommer</em>
* `Sub` (16; 0% of non-empty `Mood`): <em>vore, vare, Gånge, finge</em>
* `EMPTY` (4254): <em>vara, få, ha, bli, göra, ge, ta, varit, komma, gå</em>

<table>
  <tr><th>Paradigm <i>vara</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th><th><tt>Sub</tt></th></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Past</tt></td><td><em>var</em></td><td></td><td><em>vore</em></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Pres</tt></td><td><em>är, varar, äro</em></td><td></td><td><em>vare</em></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>Varen</em></td><td></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 94% lemmas (817) occur only with one value of `Mood`.

### `AUX`

2377 [sv-pos/AUX]() tokens (93% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="Voice.html">Voice</a>=Act</tt> (2377; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (2377; 100%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (2118; 89%).

`AUX` tokens may have the following values of `Mood`:

* `Ind` (2377; 100% of non-empty `Mood`): <em>kan, har, måste, skall, skulle, ska, kommer, får, bör, vill</em>
* `EMPTY` (189): <em>kunna, få, ha, bli, kunnat, behöva, fått, kommit, blivit, vilja</em>

`Mood` seems to be **lexical feature** of `AUX`. 100% lemmas (14) occur only with one value of `Mood`.

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (386; 72%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (103; 52%),
<tt>VERB --[<a href="../dep/dislocated.html">dislocated</a>]--> VERB</tt> (18; 55%),
<tt>VERB --[<a href="../dep/appos.html">appos</a>]--> VERB</tt> (10; 56%),
<tt>VERB --[<a href="../dep/acl.html">acl</a>]--> VERB</tt> (1; 100%).

