

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

8497 tokens (9%) have a non-empty value of `Degree`.
2113 types (14%) occur at least once with a non-empty value of `Degree`.
1231 lemmas (12%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: [sv-pos/ADJ]() (6767; 7% instances), [sv-pos/ADV]() (1730; 2% instances).

### `ADJ`

6767 [sv-pos/ADJ]() tokens (80% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (6767; 100%), <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (6767; 100%), <tt><a href="Case.html">Case</a>=Nom</tt> (6750; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (4190; 62%), <tt><a href="Number.html">Number</a>=Sing</tt> (3546; 52%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (541; 8% of non-empty `Degree`): <em>större, högre, bättre, mindre, äldre, längre, lättare, lägre, yttre, svårare</em>
* `Pos` (5939; 88% of non-empty `Degree`): <em>olika, andra, nya, många, stora, stor, vissa, hela, flera, annan</em>
* `Sup` (287; 4% of non-empty `Degree`): <em>flesta, bästa, största, närmaste, högsta, viktigaste, senaste, vanligaste, störst, främsta</em>
* `EMPTY` (1731): <em>första, följande, beroende, särskild, särskilda, andra, ökad, motsvarande, liknande, ökade</em>

<table>
  <tr><th>Paradigm <i>stor</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td></td><td><em>större</em></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def</tt></td><td></td><td></td><td><em>största</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td></td><td><em>störste</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing</tt></td><td><em>stora</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind</tt></td><td></td><td></td><td><em>störst</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Gender.html">Gender</a>=Com|<a href="Number.html">Number</a>=Sing</tt></td><td><em>stor</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td><em>stort</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td><em>stora</em></td><td></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 93% lemmas (1056) occur only with one value of `Degree`.

### `ADV`

1730 [sv-pos/ADV]() tokens (22% of all `ADV` tokens) have a non-empty value of `Degree`.

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (393; 23% of non-empty `Degree`): <em>mer, tidigare, mindre, vidare, mera, längre, senare, ytterligare, bättre, närmare</em>
* `Pos` (1082; 63% of non-empty `Degree`): <em>mycket, helt, ofta, länge, långt, snabbt, relativt, direkt, starkt, säkert</em>
* `Sup` (255; 15% of non-empty `Degree`): <em>mest, minst, främst, högst, helst, knappast, bäst, oftast, längst, ytterst</em>
* `EMPTY` (6282): <em>inte, så, också, när, hur, där, då, här, nu, bara</em>

<table>
  <tr><th>Paradigm <i>mycket</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>mycket</em></td><td><em>mer, mera</em></td><td><em>mest</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 92% lemmas (246) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (243; 72%),
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (16; 84%),
<tt>ADJ --[<a href="../dep/det.html">det</a>]--> ADJ</tt> (8; 73%),
<tt>ADJ --[<a href="../dep/det.html">det</a>]--> ADV</tt> (1; 100%),
<tt>ADJ --[<a href="../dep/dobj.html">dobj</a>]--> ADV</tt> (1; 100%),
<tt>ADJ --[<a href="../dep/dobj.html">dobj</a>]--> ADJ</tt> (1; 100%).

