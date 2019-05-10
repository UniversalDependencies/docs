---
layout: base
title:  'Statistics of NumType in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Dist`, `Ord`.

2988 tokens (1%) have a non-empty value of `NumType`.
103 types (1%) occur at least once with a non-empty value of `NumType`.
29 lemmas (1%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (1510; 0% instances), <tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (1478; 0% instances).

### `ADJ`

1510 <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> tokens (6% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="la_ittb-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (1364; 90%), <tt><a href="la_ittb-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1300; 86%).

`ADJ` tokens may have the following values of `NumType`:

* `Dist` (65; 4% of non-empty `NumType`): <em>singula, singulis, singulas, singulae, singulorum, singulos, singularum, singulum</em>
* `Ord` (1445; 96% of non-empty `NumType`): <em>prima, primum, primo, prius, primam, primi, secunda, primae, secundo, primus</em>
* `EMPTY` (23748): <em>divina, suam, sua, impossibile, divinae, suum, divinam, possibilis, suae, necesse</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (12) occur only with one value of `NumType`.

### `NUM`

1478 <tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> tokens (59% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="la_ittb-feat-NumForm.html">NumForm</a></tt><tt>=EMPTY</tt> (1478; 100%), <tt><a href="la_ittb-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (1442; 98%), <tt><a href="la_ittb-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1187; 80%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (1478; 100% of non-empty `NumType`): <em>unum, una, uno, unius, unus, unam, duo, duobus, tres, duae</em>
* `EMPTY` (1009): <em>i, iii, ii, 1, 2, vii, viii, iv, vi, 3</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (17) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="la_ittb-dep-compound.html">compound</a></tt>]--> NUM</tt> (17; 100%),
<tt>NUM --[<tt><a href="la_ittb-dep-conj.html">conj</a></tt>]--> NUM</tt> (11; 100%).

