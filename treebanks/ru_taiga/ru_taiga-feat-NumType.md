---
layout: base
title:  'Statistics of NumType in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Frac`, `Ord`, `Sets`.

3707 tokens (2%) have a non-empty value of `NumType`.
598 types (2%) occur at least once with a non-empty value of `NumType`.
439 lemmas (2%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (2990; 2% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (717; 0% instances).

### `NUM`

2990 <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> tokens (97% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="ru_taiga-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (2632; 88%), <tt><a href="ru_taiga-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (1839; 62%), <tt><a href="ru_taiga-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (1782; 60%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (2802; 94% of non-empty `NumType`): <em>много, 2, 3, 1, 5, несколько, 4, два, один, сколько</em>
* `Frac` (123; 4% of non-empty `NumType`): <em>пол, 0,5, 1,5, полтора, 2,5, 1.5, 0,25, 4,5, 5,2, 2,2</em>
* `Sets` (65; 2% of non-empty `NumType`): <em>оба, двоих, двое, обоих, обеих, трое, обе, обоим, четверых, 2</em>
* `EMPTY` (95): <em>16.10.2020, 12.00, 16:00, 1V, 23.00, 7.30, 9.00, +7-977-429-83-44, +79051950942, +7_978_784_60_84</em>

<table>
  <tr><th>Paradigm <i>2</i></th><th><tt>Card</tt></th><th><tt>Sets</tt></th></tr>
  <tr><td><tt><tt><a href="ru_taiga-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="ru_taiga-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ru_taiga-feat-NumForm.html">NumForm</a></tt><tt>=Combi</tt></tt></td><td><em>2-х</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ru_taiga-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="ru_taiga-feat-NumForm.html">NumForm</a></tt><tt>=Combi</tt></tt></td><td><em>2-х, 2х</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ru_taiga-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt></tt></td><td><em>2</em></td><td><em>2</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 99% lemmas (291) occur only with one value of `NumType`.

### `ADJ`

717 <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> tokens (4% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="ru_taiga-feat-Variant.html">Variant</a></tt><tt>=EMPTY</tt> (717; 100%), <tt><a href="ru_taiga-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (431; 60%), <tt><a href="ru_taiga-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (363; 51%).

`ADJ` tokens may have the following values of `NumType`:

* `Frac` (1; 0% of non-empty `NumType`): <em>1\5</em>
* `Ord` (716; 100% of non-empty `NumType`): <em>первый, второй, первого, 2, первые, 1, первых, первая, вторая, второго</em>
* `EMPTY` (16171): <em>хороший, большой, нужно, отличный, лучше, неплохой, хорошая, хорошо, хорошее, вежливый</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (189) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="ru_taiga-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (141; 92%),
<tt>NUM --[<tt><a href="ru_taiga-dep-conj.html">conj</a></tt>]--> NUM</tt> (62; 91%),
<tt>ADJ --[<tt><a href="ru_taiga-dep-nmod.html">nmod</a></tt>]--> ADJ</tt> (25; 100%),
<tt>NUM --[<tt><a href="ru_taiga-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (10; 91%),
<tt>ADJ --[<tt><a href="ru_taiga-dep-conj.html">conj</a></tt>]--> ADJ</tt> (9; 75%),
<tt>NUM --[<tt><a href="ru_taiga-dep-list.html">list</a></tt>]--> NUM</tt> (7; 100%),
<tt>NUM --[<tt><a href="ru_taiga-dep-nummod-gov.html">nummod:gov</a></tt>]--> NUM</tt> (3; 100%),
<tt>NUM --[<tt><a href="ru_taiga-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (3; 100%),
<tt>NUM --[<tt><a href="ru_taiga-dep-advcl.html">advcl</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="ru_taiga-dep-compound.html">compound</a></tt>]--> NUM</tt> (2; 100%).

