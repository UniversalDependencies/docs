

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This feature is universal.
It occurs with 4 different values: `Abs`, `Cmp`, `Pos`, `Sup`.

7258 tokens (8%) have a non-empty value of `Degree`.
2421 types (15%) occur at least once with a non-empty value of `Degree`.
1772 lemmas (14%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: [da-pos/ADJ]() (5803; 6% instances), [da-pos/ADV]() (1455; 2% instances).

### `ADJ`

5803 [da-pos/ADJ]() tokens (98% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (4343; 75%), <tt><a href="Number.html">Number</a>=Sing</tt> (3231; 56%).

`ADJ` tokens may have the following values of `Degree`:

* `Abs` (2; 0% of non-empty `Degree`): <em>allerinderst, allerstørste</em>
* `Cmp` (335; 6% of non-empty `Degree`): <em>flere, større, bedre, mere, tidligere, mindre, højere, ældre, længere, kortere</em>
* `Pos` (5284; 91% of non-empty `Degree`): <em>alle, første, sidste, samme, mange, danske, store, hele, nye, fælles</em>
* `Sup` (182; 3% of non-empty `Degree`): <em>fleste, bedste, største, seneste, ny, mindste, øverste, bedst, laveste, meste</em>
* `EMPTY` (130): <em>1., anden, 2., tredje, 3., andet, fjerde, 10., 12., 15.</em>

<table>
  <tr><th>Paradigm <i>stor</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th><th><tt>Abs</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>større</em></td><td><em>STØRST</em></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def</tt></td><td></td><td></td><td><em>største</em></td><td><em>allerstørste</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing</tt></td><td><em>store</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Gender.html">Gender</a>=Com|<a href="Number.html">Number</a>=Sing</tt></td><td><em>stor</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td><em>stort</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td><em>store</em></td><td></td><td></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 96% lemmas (1392) occur only with one value of `Degree`.

### `ADV`

1455 [da-pos/ADV]() tokens (19% of all `ADV` tokens) have a non-empty value of `Degree`.

`ADV` tokens may have the following values of `Degree`:

* `Abs` (3; 0% of non-empty `Degree`): <em>allerhelst, allermindst, alleryderst</em>
* `Cmp` (179; 12% of non-empty `Degree`): <em>mere, senere, længere, tidligere, mindre, yderligere, bedre, hurtigere, lettere, nærmere</em>
* `Pos` (1177; 81% of non-empty `Degree`): <em>meget, helt, godt, lidt, langt, faktisk, længe, ofte, hurtigt, umiddelbart</em>
* `Sup` (96; 7% of non-empty `Degree`): <em>mest, mindst, senest, nærmest, bedst, oftest, længst, venligst, hurtigst, hårdest</em>
* `EMPTY` (6117): <em>ikke, der, så, også, hvor, nu, ud, op, ind, kun</em>

<table>
  <tr><th>Paradigm <i>længe</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>længe</em></td><td><em>længere</em></td><td><em>længst</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 99% lemmas (394) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (172; 93%),
<tt>ADJ --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (65; 81%),
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (23; 85%),
<tt>ADJ --[<a href="../dep/nsubj.html">nsubj</a>]--> ADJ</tt> (6; 86%),
<tt>ADJ --[<a href="../dep/obl.html">obl</a>]--> ADJ</tt> (4; 57%),
<tt>ADV --[<a href="../dep/fixed.html">fixed</a>]--> ADV</tt> (1; 100%),
<tt>ADJ --[<a href="../dep/flat.html">flat</a>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<a href="../dep/advmod.html">advmod</a>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<a href="../dep/acl:relcl.html">acl:relcl</a>]--> ADJ</tt> (1; 100%),
<tt>ADV --[<a href="../dep/obl:tmod.html">obl:tmod</a>]--> ADJ</tt> (1; 100%).

