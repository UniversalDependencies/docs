---
layout: base
title:  'Statistics of NumType in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Frac`, `Ord`, `Sets`.

22560 tokens (1%) have a non-empty value of `NumType`.
1740 types (1%) occur at least once with a non-empty value of `NumType`.
1305 lemmas (2%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (12849; 1% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (9711; 1% instances).

### `NUM`

12849 <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="ru_taiga-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (10948; 85%), <tt><a href="ru_taiga-feat-NumForm.html">NumForm</a></tt><tt>=Word</tt> (9272; 72%), <tt><a href="ru_taiga-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (8705; 68%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (12069; 94% of non-empty `NumType`): <em>два, много, несколько, три, один, двух, две, 2, 1, 3</em>
* `Frac` (193; 2% of non-empty `NumType`): <em>пол, полтора, 1,5, 0,5, 2,5, 4,5, 0,25, 1.5, 5,2, полутора</em>
* `Sets` (587; 5% of non-empty `NumType`): <em>оба, обе, обоих, двое, трое, обеих, двоих, обеими, четверо, обеим</em>

<table>
  <tr><th>Paradigm <i>2</i></th><th><tt>Card</tt></th><th><tt>Sets</tt></th></tr>
  <tr><td><tt><tt><a href="ru_taiga-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="ru_taiga-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ru_taiga-feat-NumForm.html">NumForm</a></tt><tt>=Combi</tt></tt></td><td><em>2-х</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ru_taiga-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="ru_taiga-feat-NumForm.html">NumForm</a></tt><tt>=Combi</tt></tt></td><td><em>2-х, 2х</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ru_taiga-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt></tt></td><td><em>2</em></td><td><em>2</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 99% lemmas (534) occur only with one value of `NumType`.

### `ADJ`

9711 <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> tokens (6% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="ru_taiga-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (9711; 100%), <tt><a href="ru_taiga-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (6709; 69%), <tt><a href="ru_taiga-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (5839; 60%), <tt><a href="ru_taiga-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (5839; 60%).

`ADJ` tokens may have the following values of `NumType`:

* `Frac` (1; 0% of non-empty `NumType`): <em>1\5</em>
* `Ord` (9710; 100% of non-empty `NumType`): <em>XIX, первый, XVIII, второй, XX, XVII, первой, первые, XVI, первая</em>
* `EMPTY` (145364): <em>русского, нужно, большой, русской, русском, разных, п., хорошо, хороший, должен</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (843) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>ADJ --[<tt><a href="ru_taiga-dep-nmod.html">nmod</a></tt>]--> ADJ</tt> (876; 100%),
<tt>NUM --[<tt><a href="ru_taiga-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (388; 96%),
<tt>NUM --[<tt><a href="ru_taiga-dep-conj.html">conj</a></tt>]--> NUM</tt> (290; 96%),
<tt>ADJ --[<tt><a href="ru_taiga-dep-conj.html">conj</a></tt>]--> ADJ</tt> (171; 76%),
<tt>NUM --[<tt><a href="ru_taiga-dep-compound.html">compound</a></tt>]--> NUM</tt> (133; 100%),
<tt>NUM --[<tt><a href="ru_taiga-dep-list.html">list</a></tt>]--> NUM</tt> (25; 100%),
<tt>NUM --[<tt><a href="ru_taiga-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (18; 95%),
<tt>NUM --[<tt><a href="ru_taiga-dep-nummod-gov.html">nummod:gov</a></tt>]--> NUM</tt> (13; 100%),
<tt>NUM --[<tt><a href="ru_taiga-dep-advcl.html">advcl</a></tt>]--> NUM</tt> (6; 100%),
<tt>NUM --[<tt><a href="ru_taiga-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (5; 100%).

