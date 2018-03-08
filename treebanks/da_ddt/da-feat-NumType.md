---
layout: base
title:  'Statistics of NumType in UD_Danish'
udver: '2'
---

## Treebank Statistics: UD_Danish: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

1640 tokens (2%) have a non-empty value of `NumType`.
503 types (3%) occur at least once with a non-empty value of `NumType`.
489 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="da-pos-NUM.html">NUM</a></tt> (1491; 1% instances), <tt><a href="da-pos-ADJ.html">ADJ</a></tt> (149; 0% instances).

### `NUM`

1491 <tt><a href="da-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (1491; 100% of non-empty `NumType`): <em>to, tre, fire, 20, fem, seks, 10, otte, 100, 1</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (453) occur only with one value of `NumType`.

### `ADJ`

149 <tt><a href="da-pos-ADJ.html">ADJ</a></tt> tokens (2% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="da-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (149; 100%), <tt><a href="da-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (149; 100%), <tt><a href="da-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (149; 100%), <tt><a href="da-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (149; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (149; 100% of non-empty `NumType`): <em>1., anden, 2., tredje, 3., andet, 12., 17., fjerde, 10.</em>
* `EMPTY` (6422): <em>alle, mange, danske, store, flere, samme, hele, første, nye, sidste</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (37) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="da-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (9; 100%),
<tt>NUM --[<tt><a href="da-dep-conj.html">conj</a></tt>]--> NUM</tt> (8; 100%),
<tt>NUM --[<tt><a href="da-dep-list.html">list</a></tt>]--> NUM</tt> (7; 100%),
<tt>NUM --[<tt><a href="da-dep-appos.html">appos</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="da-dep-flat.html">flat</a></tt>]--> NUM</tt> (1; 100%).

