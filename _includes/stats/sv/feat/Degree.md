

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

6679 tokens (9%) have a non-empty value of `Degree`.
1804 types (14%) occur at least once with a non-empty value of `Degree`.
1063 lemmas (12%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: [sv-pos/ADJ]() (5356; 7% instances), [sv-pos/ADV]() (1323; 2% instances).

### `ADJ`

5356 [sv-pos/ADJ]() tokens (80% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (5356; 100%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (5356; 100%), <tt><a href="Case.html">Case</a>=Nom</tt> (5342; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (3289; 61%), <tt><a href="Number.html">Number</a>=Sing</tt> (2854; 53%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (414; 8% of non-empty `Degree`): <em>större, högre, bättre, mindre, äldre, lägre, längre, lättare, tidigare, svårare</em>
* `Pos` (4712; 88% of non-empty `Degree`): <em>olika, andra, nya, många, stora, stor, hela, vissa, flera, annan</em>
* `Sup` (230; 4% of non-empty `Degree`): <em>flesta, bästa, största, närmaste, högsta, viktigaste, senaste, vanligaste, främsta, sista</em>
* `EMPTY` (1319): <em>första, följande, beroende, särskilda, särskild, liknande, ökad, andra, motsvarande, avgörande</em>

<table>
  <tr><th>Paradigm <i>stor</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td></td><td><em>större</em></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def</tt></td><td></td><td></td><td><em>största</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing</tt></td><td><em>stora</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind</tt></td><td></td><td></td><td><em>störst</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Gender.html">Gender</a>=Com|<a href="Number.html">Number</a>=Sing</tt></td><td><em>stor</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td><em>stort</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td><em>stora</em></td><td></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 93% lemmas (908) occur only with one value of `Degree`.

### `ADV`

1323 [sv-pos/ADV]() tokens (21% of all `ADV` tokens) have a non-empty value of `Degree`.

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (292; 22% of non-empty `Degree`): <em>mer, tidigare, mindre, längre, vidare, mera, senare, ytterligare, bättre, närmare</em>
* `Pos` (836; 63% of non-empty `Degree`): <em>mycket, helt, ofta, långt, relativt, länge, snabbt, direkt, drygt, tidigt</em>
* `Sup` (195; 15% of non-empty `Degree`): <em>främst, minst, mest, högst, helst, bäst, längst, oftast, knappast, senast</em>
* `EMPTY` (4932): <em>inte, också, så, när, hur, då, där, nu, här, ut</em>

<table>
  <tr><th>Paradigm <i>mycket</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>mycket</em></td><td><em>mer, mera</em></td><td><em>mest</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 91% lemmas (208) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (190; 71%),
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (12; 92%),
<tt>ADJ --[<a href="../dep/amod.html">amod</a>]--> ADV</tt> (6; 55%),
<tt>ADJ --[<a href="../dep/appos.html">appos</a>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<a href="../dep/obj.html">obj</a>]--> ADJ</tt> (1; 100%).

