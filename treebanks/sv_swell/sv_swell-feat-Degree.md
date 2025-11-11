---
layout: base
title:  'Statistics of Degree in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Features: `Degree`

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

805 tokens (9%) have a non-empty value of `Degree`.
398 types (20%) occur at least once with a non-empty value of `Degree`.
308 lemmas (20%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (678; 8% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt> (127; 1% instances).

### `ADJ`

678 <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> tokens (98% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="sv_swell-feat-Case.html">Case</a></tt><tt>=Nom</tt> (675; 100%), <tt><a href="sv_swell-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (425; 63%), <tt><a href="sv_swell-feat-Definite.html">Definite</a></tt><tt>=Ind</tt> (413; 61%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (53; 8% of non-empty `Degree`): <em>bättre, mer, äldre, enklare, lättare, mindre, svårare, biligare, färre, viktigare</em>
* `Pos` (589; 87% of non-empty `Degree`): <em>många, olika, bra, nya, andra, viktigt, svårt, stor, mycket, själv</em>
* `Sup` (36; 5% of non-empty `Degree`): <em>bästa, flesta, viktigaste, sista, bekvämaste, farligaste, forsta, värsta</em>
* `EMPTY` (16): <em>första, Tredja, båda, firsta, hal, okej, second, tredje</em>

<table>
  <tr><th>Paradigm <i>bra</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>bra</em></td><td><em>bättre</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_swell-feat-Definite.html">Definite</a></tt><tt>=Def</tt></tt></td><td></td><td></td><td><em>bästa</em></td></tr>
  <tr><td><tt><tt><a href="sv_swell-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="sv_swell-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td></td><td><em>bästa</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 95% lemmas (246) occur only with one value of `Degree`.

### `ADV`

127 <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt> tokens (21% of all `ADV` tokens) have a non-empty value of `Degree`.

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (22; 17% of non-empty `Degree`): <em>mer, bättre, vidare, mindre, Tidigare, fortta, hårdare, oftare, senare, snabbare</em>
* `Pos` (90; 71% of non-empty `Degree`): <em>mycket, bra, lite, väldigt, Självklart, helt, hårt, direkt, indirekt, jättemycket</em>
* `Sup` (15; 12% of non-empty `Degree`): <em>minst, Sist, mest, näst, bäst, främst, innerst</em>
* `EMPTY` (467): <em>hur, så, där, här, också, därför, kanske, ut, bara, varför</em>

<table>
  <tr><th>Paradigm <i>mycket</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>mycket</em></td><td><em>mer</em></td><td><em>mest</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 93% lemmas (52) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="sv_swell-dep-conj.html">conj</a></tt>]--> ADJ</tt> (30; 94%),
<tt>ADV --[<tt><a href="sv_swell-dep-conj.html">conj</a></tt>]--> ADV</tt> (7; 70%),
<tt>ADJ --[<tt><a href="sv_swell-dep-obl.html">obl</a></tt>]--> ADJ</tt> (3; 60%),
<tt>ADV --[<tt><a href="sv_swell-dep-csubj.html">csubj</a></tt>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<tt><a href="sv_swell-dep-advmod.html">advmod</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="sv_swell-dep-amod.html">amod</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="sv_swell-dep-csubj.html">csubj</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADV --[<tt><a href="sv_swell-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (1; 100%).

