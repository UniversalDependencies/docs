

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

8647 tokens (11%) have a non-empty value of `Tense`.
1882 types (15%) occur at least once with a non-empty value of `Tense`.
1192 lemmas (13%) occur at least once with a non-empty value of `Tense`.
The feature is used with 3 part-of-speech tags: [sv-pos/VERB]() (4579; 6% instances), [sv-pos/AUX]() (2873; 4% instances), [sv-pos/ADJ]() (1195; 2% instances).

### `VERB`

4579 [sv-pos/VERB]() tokens (59% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (4540; 99%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (4535; 99%), <tt><a href="Voice.html">Voice</a>=Act</tt> (3653; 80%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (585; 13% of non-empty `Tense`): <em>fick, blev, hade, var, gjorde, kom, började, gav, tog, gick</em>
* `Pres` (3994; 87% of non-empty `Tense`): <em>har, finns, blir, är, får, gäller, ger, kommer, går, gör</em>
* `EMPTY` (3239): <em>få, ha, se, ge, göra, ta, bli, gå, komma, blivit</em>

<table>
  <tr><th>Paradigm <i>ha</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt></tt></td><td><em>har</em></td><td><em>hade</em></td></tr>
</table>

### `AUX`

2873 [sv-pos/AUX]() tokens (90% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="Voice.html">Voice</a>=Act</tt> (2873; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (2873; 100%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (2866; 100%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (276; 10% of non-empty `Tense`): <em>skulle, var, kunde, hade, fick, ville, borde, torde, vore, blev</em>
* `Pres` (2597; 90% of non-empty `Tense`): <em>är, kan, har, skall, måste, kommer, ska, får, bör, vill</em>
* `EMPTY` (306): <em>vara, kunna, varit, ha, få, bli, kunnat, behöva, fått, kommit</em>

<table>
  <tr><th>Paradigm <i>vara</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind</tt></td><td><em>är, äro</em></td><td><em>var</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub</tt></td><td></td><td><em>vore</em></td></tr>
</table>

### `ADJ`

1195 [sv-pos/ADJ]() tokens (18% of all `ADJ` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `ADJ` and `Tense` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Part</tt> (1195; 100%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (1195; 100%), <tt><a href="Case.html">Case</a>=Nom</tt> (1191; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (751; 63%), <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (685; 57%).

`ADJ` tokens may have the following values of `Tense`:

* `Past` (811; 68% of non-empty `Tense`): <em>särskilda, särskild, ökad, gifta, taget, handikappade, ökade, sett, beredd, bestämda</em>
* `Pres` (384; 32% of non-empty `Tense`): <em>följande, beroende, liknande, motsvarande, avgörande, omfattande, krävande, nuvarande, förvärvsarbetande, gällande</em>
* `EMPTY` (5480): <em>olika, andra, nya, många, stora, stor, större, första, hela, vissa</em>

<table>
  <tr><th>Paradigm <i>skydda</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>skyddade</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Gender.html">Gender</a>=Com|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>Skyddad</em></td></tr>
  <tr><td><tt></tt></td><td><em>skyddande</em></td><td></td></tr>
</table>

`Tense` seems to be **lexical feature** of `ADJ`. 99% lemmas (578) occur only with one value of `Tense`.

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (291; 75%),
<tt>VERB --[<a href="../dep/dislocated.html">dislocated</a>]--> VERB</tt> (15; 52%),
<tt>VERB --[<a href="../dep/appos.html">appos</a>]--> VERB</tt> (7; 54%),
<tt>VERB --[<a href="../dep/mark.html">mark</a>]--> ADJ</tt> (5; 71%),
<tt>AUX --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (2; 67%),
<tt>VERB --[<a href="../dep/acl.html">acl</a>]--> VERB</tt> (1; 100%).

