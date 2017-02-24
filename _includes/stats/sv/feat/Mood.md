

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This feature is universal.
It occurs with 3 different values: `Imp`, `Ind`, `Sub`.

7593 tokens (10%) have a non-empty value of `Mood`.
1257 types (10%) occur at least once with a non-empty value of `Mood`.
768 lemmas (9%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: [sv-pos/VERB]() (4719; 6% instances), [sv-pos/AUX]() (2874; 4% instances).

### `VERB`

4719 [sv-pos/VERB]() tokens (60% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (4719; 100%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (3994; 85%), <tt><a href="Voice.html">Voice</a>=Act</tt> (3831; 81%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (179; 4% of non-empty `Mood`): <em>se, ta, ge, jfr, kontrollera, Diskutera, låt, kolla, Läs, byt</em>
* `Ind` (4535; 96% of non-empty `Mood`): <em>har, finns, blir, är, får, gäller, ger, kommer, går, gör</em>
* `Sub` (5; 0% of non-empty `Mood`): <em>vore, Gånge, finge, vare</em>
* `EMPTY` (3099): <em>få, ha, göra, ge, ta, bli, gå, se, komma, blivit</em>

<table>
  <tr><th>Paradigm <i>gå</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th><th><tt>Sub</tt></th></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Past</tt></td><td><em>gick</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Pres</tt></td><td><em>går</em></td><td></td><td><em>Gånge</em></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>Gå</em></td><td></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 93% lemmas (715) occur only with one value of `Mood`.

### `AUX`

2874 [sv-pos/AUX]() tokens (90% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="Voice.html">Voice</a>=Act</tt> (2874; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (2874; 100%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (2597; 90%).

`AUX` tokens may have the following values of `Mood`:

* `Imp` (1; 0% of non-empty `Mood`): <em>Varen</em>
* `Ind` (2866; 100% of non-empty `Mood`): <em>är, kan, har, skall, måste, kommer, skulle, ska, var, får</em>
* `Sub` (7; 0% of non-empty `Mood`): <em>vore</em>
* `EMPTY` (305): <em>vara, kunna, varit, ha, få, bli, kunnat, behöva, fått, kommit</em>

<table>
  <tr><th>Paradigm <i>vara</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th><th><tt>Sub</tt></th></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Past</tt></td><td><em>var</em></td><td></td><td><em>vore</em></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Pres</tt></td><td><em>är, äro</em></td><td></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>Varen</em></td><td></td></tr>
</table>

`Mood` seems to be **lexical feature** of `AUX`. 93% lemmas (14) occur only with one value of `Mood`.

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (307; 77%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (88; 54%),
<tt>VERB --[<a href="../dep/dislocated.html">dislocated</a>]--> VERB</tt> (16; 57%),
<tt>VERB --[<a href="../dep/appos.html">appos</a>]--> VERB</tt> (7; 54%),
<tt>AUX --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (3; 100%),
<tt>VERB --[<a href="../dep/acl.html">acl</a>]--> VERB</tt> (1; 100%).

