---
layout: base
title:  'Statistics of NumType in UD_Russian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Russian-GSD: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

2005 tokens (2%) have a non-empty value of `NumType`.
722 types (2%) occur at least once with a non-empty value of `NumType`.
661 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt> (2004; 2% instances), <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).

### `NUM`

2004 <tt><a href="ru_gsd-pos-NUM.html">NUM</a></tt> tokens (95% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="ru_gsd-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (1696; 85%), <tt><a href="ru_gsd-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1414; 71%), <tt><a href="ru_gsd-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (1004; 50%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (2004; 100% of non-empty `NumType`): <em>2, два, один, 1, несколько, двух, 10, 4, три, 3</em>
* `EMPTY` (99): <em>тыс., 2, 1, 6, немногих, 10, 1000, 13, 151-1, 20</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (660) occur only with one value of `NumType`.

### `ADJ`

1 <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="ru_gsd-feat-Case.html">Case</a></tt><tt>=Nom</tt> (1; 100%), <tt><a href="ru_gsd-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="ru_gsd-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="ru_gsd-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (1; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (1; 100% of non-empty `NumType`): <em>489</em>
* `EMPTY` (12272): <em>второй, 2008, 2010, других, 2004, первый, 2012, 1, 2006, 2011</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="ru_gsd-dep-conj.html">conj</a></tt>]--> NUM</tt> (37; 100%),
<tt>NUM --[<tt><a href="ru_gsd-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (37; 100%),
<tt>NUM --[<tt><a href="ru_gsd-dep-list.html">list</a></tt>]--> NUM</tt> (19; 100%),
<tt>NUM --[<tt><a href="ru_gsd-dep-appos.html">appos</a></tt>]--> NUM</tt> (7; 100%),
<tt>NUM --[<tt><a href="ru_gsd-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (7; 88%),
<tt>NUM --[<tt><a href="ru_gsd-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (4; 100%).

