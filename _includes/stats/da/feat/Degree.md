

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This feature is universal.
It occurs with 4 different values: `Abs`, `Cmp`, `Pos`, `Sup`.

8032 tokens (8%) have a non-empty value of `Degree`.
2580 types (14%) occur at least once with a non-empty value of `Degree`.
1872 lemmas (14%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: [da-pos/ADJ]() (6422; 6% instances), [da-pos/ADV]() (1610; 2% instances).

### `ADJ`

6422 [da-pos/ADJ]() tokens (98% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (4811; 75%), <tt><a href="Number.html">Number</a>=Sing</tt> (3531; 55%).

`ADJ` tokens may have the following values of `Degree`:

* `Abs` (2; 0% of non-empty `Degree`): <em>allerinderst, allerstørste</em>
* `Cmp` (381; 6% of non-empty `Degree`): <em>flere, større, bedre, tidligere, mere, mindre, højere, ældre, længere, kortere</em>
* `Pos` (5832; 91% of non-empty `Degree`): <em>samme, første, alle, sidste, mange, danske, store, hele, nye, fælles</em>
* `Sup` (207; 3% of non-empty `Degree`): <em>fleste, bedste, største, seneste, ny, mindre, mindste, øverste, meste, nyeste</em>
* `EMPTY` (149): <em>1., anden, 2., tredje, 3., andet, 12., 17., fjerde, 10.</em>

<table>
  <tr><th>Paradigm <i>stor</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th><th><tt>Abs</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>større</em></td><td><em>STØRST</em></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def</tt></td><td></td><td></td><td><em>største</em></td><td><em>allerstørste</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing</tt></td><td><em>store</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Gender.html">Gender</a>=Com|<a href="Number.html">Number</a>=Sing</tt></td><td><em>stor</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td><em>stort</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td><em>store</em></td><td></td><td></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 96% lemmas (1471) occur only with one value of `Degree`.

### `ADV`

1610 [da-pos/ADV]() tokens (19% of all `ADV` tokens) have a non-empty value of `Degree`.

`ADV` tokens may have the following values of `Degree`:

* `Abs` (3; 0% of non-empty `Degree`): <em>allerhelst, allermindst, alleryderst</em>
* `Cmp` (204; 13% of non-empty `Degree`): <em>mere, længere, senere, tidligere, mindre, yderligere, bedre, hurtigere, nærmere, højere</em>
* `Pos` (1299; 81% of non-empty `Degree`): <em>meget, helt, godt, lidt, langt, faktisk, længe, ofte, hurtigt, umiddelbart</em>
* `Sup` (104; 6% of non-empty `Degree`): <em>mest, mindst, senest, nærmest, bedst, længst, oftest, venligst, hurtigst, hårdest</em>
* `EMPTY` (6770): <em>ikke, der, så, også, hvor, nu, ud, op, ind, her</em>

<table>
  <tr><th>Paradigm <i>længe</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>længe</em></td><td><em>længere</em></td><td><em>længst</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 100% lemmas (419) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (182; 94%),
<tt>ADJ --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (79; 81%),
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (30; 91%),
<tt>ADJ --[<a href="../dep/nsubj.html">nsubj</a>]--> ADJ</tt> (7; 88%),
<tt>ADJ --[<a href="../dep/nmod.html">nmod</a>]--> ADJ</tt> (4; 57%),
<tt>ADV --[<a href="../dep/mwe.html">mwe</a>]--> ADV</tt> (2; 100%),
<tt>ADJ --[<a href="../dep/cc.html">cc</a>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<a href="../dep/acl:relcl.html">acl:relcl</a>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<a href="../dep/advmod.html">advmod</a>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<a href="../dep/name.html">name</a>]--> ADJ</tt> (1; 100%).

