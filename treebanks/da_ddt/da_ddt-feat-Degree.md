---
layout: base
title:  'Statistics of Degree in UD_Danish-DDT'
udver: '2'
---

## Treebank Statistics: UD_Danish-DDT: Features: `Degree`

This feature is universal.
It occurs with 4 different values: `Abs`, `Cmp`, `Pos`, `Sup`.

8020 tokens (8%) have a non-empty value of `Degree`.
2580 types (14%) occur at least once with a non-empty value of `Degree`.
1872 lemmas (14%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: <tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt> (6410; 6% instances), <tt><a href="da_ddt-pos-ADV.html">ADV</a></tt> (1610; 2% instances).

### `ADJ`

6410 <tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt> tokens (98% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="da_ddt-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (4805; 75%), <tt><a href="da_ddt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3524; 55%).

`ADJ` tokens may have the following values of `Degree`:

* `Abs` (2; 0% of non-empty `Degree`): <em>allerinderst, allerstørste</em>
* `Cmp` (376; 6% of non-empty `Degree`): <em>flere, større, bedre, tidligere, mere, mindre, højere, ældre, længere, kortere</em>
* `Pos` (5825; 91% of non-empty `Degree`): <em>samme, første, alle, sidste, mange, danske, store, hele, nye, fælles</em>
* `Sup` (207; 3% of non-empty `Degree`): <em>fleste, bedste, største, seneste, ny, mindre, mindste, øverste, meste, nyeste</em>
* `EMPTY` (149): <em>1., anden, 2., tredje, 3., andet, 12., 17., fjerde, 10.</em>

<table>
  <tr><th>Paradigm <i>stor</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th><th><tt>Abs</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>større</em></td><td><em>STØRST</em></td><td></td></tr>
  <tr><td><tt><tt><a href="da_ddt-feat-Definite.html">Definite</a></tt><tt>=Def</tt></tt></td><td></td><td></td><td><em>største</em></td><td><em>allerstørste</em></td></tr>
  <tr><td><tt><tt><a href="da_ddt-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="da_ddt-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>store</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="da_ddt-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="da_ddt-feat-Gender.html">Gender</a></tt><tt>=Com</tt>|<tt><a href="da_ddt-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>stor</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="da_ddt-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="da_ddt-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="da_ddt-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>stort</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="da_ddt-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>store</em></td><td></td><td></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 96% lemmas (1471) occur only with one value of `Degree`.

### `ADV`

1610 <tt><a href="da_ddt-pos-ADV.html">ADV</a></tt> tokens (20% of all `ADV` tokens) have a non-empty value of `Degree`.

`ADV` tokens may have the following values of `Degree`:

* `Abs` (3; 0% of non-empty `Degree`): <em>allerhelst, allermindst, alleryderst</em>
* `Cmp` (204; 13% of non-empty `Degree`): <em>mere, længere, senere, tidligere, mindre, yderligere, bedre, hurtigere, nærmere, højere</em>
* `Pos` (1299; 81% of non-empty `Degree`): <em>meget, helt, godt, lidt, langt, faktisk, længe, ofte, hurtigt, umiddelbart</em>
* `Sup` (104; 6% of non-empty `Degree`): <em>mest, mindst, senest, nærmest, bedst, længst, oftest, venligst, hurtigst, hårdest</em>
* `EMPTY` (6460): <em>ikke, så, også, hvor, nu, ud, op, der, ind, her</em>

<table>
  <tr><th>Paradigm <i>længe</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>længe</em></td><td><em>længere</em></td><td><em>længst</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 100% lemmas (419) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="da_ddt-dep-conj.html">conj</a></tt>]--> ADJ</tt> (193; 94%),
<tt>ADJ --[<tt><a href="da_ddt-dep-amod.html">amod</a></tt>]--> ADJ</tt> (64; 78%),
<tt>ADV --[<tt><a href="da_ddt-dep-conj.html">conj</a></tt>]--> ADV</tt> (30; 91%),
<tt>ADJ --[<tt><a href="da_ddt-dep-nsubj.html">nsubj</a></tt>]--> ADJ</tt> (7; 88%),
<tt>ADJ --[<tt><a href="da_ddt-dep-obl.html">obl</a></tt>]--> ADJ</tt> (5; 63%),
<tt>ADV --[<tt><a href="da_ddt-dep-fixed.html">fixed</a></tt>]--> ADV</tt> (2; 100%),
<tt>ADJ --[<tt><a href="da_ddt-dep-advmod.html">advmod</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="da_ddt-dep-flat.html">flat</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="da_ddt-dep-obj.html">obj</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="da_ddt-dep-orphan.html">orphan</a></tt>]--> ADJ</tt> (1; 100%).

