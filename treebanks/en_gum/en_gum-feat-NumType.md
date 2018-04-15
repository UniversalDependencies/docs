---
layout: base
title:  'Statistics of NumType in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Mult`, `Ord`.

1654 tokens (2%) have a non-empty value of `NumType`.
426 types (4%) occur at least once with a non-empty value of `NumType`.
95 lemmas (1%) occur at least once with a non-empty value of `NumType`.
The feature is used with 5 part-of-speech tags: <tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1458; 2% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (173; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (19; 0% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt> (1; 0% instances).

### `NUM`

1458 <tt><a href="en_gum-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (1458; 100% of non-empty `NumType`): <em>one, two, 1, 2, 3, 15, 4, four, 10, 5</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (59) occur only with one value of `NumType`.

### `ADJ`

173 <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> tokens (3% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="en_gum-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (173; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (173; 100% of non-empty `NumType`): <em>first, second, third, 19th, fourth, 20th, 10th, 30th, 135th, 164th</em>
* `EMPTY` (5230): <em>many, other, new, more, good, most, important, own, last, different</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (34) occur only with one value of `NumType`.

### `ADV`

19 <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> tokens (1% of all `ADV` tokens) have a non-empty value of `NumType`.

`ADV` tokens may have the following values of `NumType`:

* `Mult` (19; 100% of non-empty `NumType`): <em>once, twice</em>
* `EMPTY` (2831): <em>also, so, then, very, just, as, more, even, well, only</em>

### `SCONJ`

3 <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> tokens (0% of all `SCONJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `SCONJ` and `NumType` co-occurred: <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (3; 100%).

`SCONJ` tokens may have the following values of `NumType`:

* `Mult` (3; 100% of non-empty `NumType`): <em>once</em>
* `EMPTY` (1633): <em>that, if, when, as, how, where, because, by, while, why</em>

### `DET`

1 <tt><a href="en_gum-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="en_gum-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (1; 100%).

`DET` tokens may have the following values of `NumType`:

* `Card` (1; 100% of non-empty `NumType`): <em>6</em>
* `EMPTY` (6866): <em>the, a, an, this, some, these, all, no, that, any</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="en_gum-dep-nmod-tmod.html">nmod:tmod</a></tt>]--> NUM</tt> (68; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (46; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> NUM</tt> (31; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-compound.html">compound</a></tt>]--> NUM</tt> (24; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (8; 100%),
<tt>ADJ --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADJ</tt> (3; 75%),
<tt>NUM --[<tt><a href="en_gum-dep-dep.html">dep</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-case.html">case</a></tt>]--> NUM</tt> (1; 100%).

