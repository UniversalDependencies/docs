

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

11122 tokens (11%) have a non-empty value of `Tense`.
2199 types (15%) occur at least once with a non-empty value of `Tense`.
1380 lemmas (13%) occur at least once with a non-empty value of `Tense`.
The feature is used with 3 part-of-speech tags: [sv-pos/VERB]() (5781; 6% instances), [sv-pos/AUX]() (3777; 4% instances), [sv-pos/ADJ]() (1564; 2% instances).

### `VERB`

5781 [sv-pos/VERB]() tokens (58% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (5732; 99%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (5724; 99%), <tt><a href="Voice.html">Voice</a>=Act</tt> (4615; 80%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (733; 13% of non-empty `Tense`): <em>blev, fick, hade, var, började, gjorde, kom, gick, fanns, gav</em>
* `Pres` (5048; 87% of non-empty `Tense`): <em>har, finns, är, blir, får, gäller, ger, går, kommer, gör</em>
* `EMPTY` (4188): <em>få, ha, se, ta, ge, bli, göra, gå, komma, fått</em>

<table>
  <tr><th>Paradigm <i>ha</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt></tt></td><td><em>har</em></td><td><em>hade</em></td></tr>
</table>

### `AUX`

3777 [sv-pos/AUX]() tokens (90% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="Voice.html">Voice</a>=Act</tt> (3777; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (3777; 100%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (3769; 100%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (366; 10% of non-empty `Tense`): <em>skulle, var, kunde, hade, borde, ville, fick, torde, vore, blev</em>
* `Pres` (3411; 90% of non-empty `Tense`): <em>är, kan, har, måste, skall, ska, kommer, får, bör, vill</em>
* `EMPTY` (406): <em>vara, kunna, varit, få, ha, bli, kunnat, behöva, fått, kommit</em>

<table>
  <tr><th>Paradigm <i>vara</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind</tt></td><td><em>är, äro</em></td><td><em>var</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub</tt></td><td></td><td><em>vore</em></td></tr>
</table>

### `ADJ`

1564 [sv-pos/ADJ]() tokens (18% of all `ADJ` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `ADJ` and `Tense` co-occurred: <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (1564; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Part</tt> (1564; 100%), <tt><a href="Case.html">Case</a>=Nom</tt> (1556; 99%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (1001; 64%), <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (921; 59%).

`ADJ` tokens may have the following values of `Tense`:

* `Past` (1047; 67% of non-empty `Tense`): <em>särskild, särskilda, ökad, ökade, gifta, sett, taget, handikappade, beredd, bestämda</em>
* `Pres` (517; 33% of non-empty `Tense`): <em>följande, beroende, motsvarande, liknande, nuvarande, omfattande, pensionsgrundande, avgörande, krävande, oberoende</em>
* `EMPTY` (6934): <em>olika, andra, nya, många, stora, stor, större, första, vissa, hela</em>

<table>
  <tr><th>Paradigm <i>öka</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>ökade</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Gender.html">Gender</a>=Com|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>ökad</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>ökat</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>ökade</em></td></tr>
  <tr><td><tt></tt></td><td><em>ökande</em></td><td></td></tr>
</table>

`Tense` seems to be **lexical feature** of `ADJ`. 99% lemmas (692) occur only with one value of `Tense`.

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (361; 72%),
<tt>VERB --[<a href="../dep/case.html">case</a>]--> ADJ</tt> (5; 71%).

