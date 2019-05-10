---
layout: base
title:  'Statistics of NumType in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Mult`, `Ord`.

2202 tokens (2%) have a non-empty value of `NumType`.
507 types (4%) occur at least once with a non-empty value of `NumType`.
101 lemmas (1%) occur at least once with a non-empty value of `NumType`.
The feature is used with 5 part-of-speech tags: <tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1952; 2% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (218; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (27; 0% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt> (2; 0% instances).

### `NUM`

1952 <tt><a href="en_gum-pos-NUM.html">NUM</a></tt> tokens (99% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (1952; 100% of non-empty `NumType`): <em>one, two, 1, 2, 3, 15, 4, 24, 6, 5</em>
* `EMPTY` (11): <em>half, I, II, XV, pm</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (61) occur only with one value of `NumType`.

### `ADJ`

218 <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> tokens (3% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="en_gum-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (218; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (218; 100% of non-empty `NumType`): <em>first, second, third, 19th, fourth, 20th, 10th, 30th, ninth, 135th</em>
* `EMPTY` (6310): <em>other, many, new, more, good, such, own, most, different, last</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (38) occur only with one value of `NumType`.

### `ADV`

27 <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> tokens (1% of all `ADV` tokens) have a non-empty value of `NumType`.

`ADV` tokens may have the following values of `NumType`:

* `Mult` (27; 100% of non-empty `NumType`): <em>once, twice</em>
* `EMPTY` (3632): <em>also, so, then, just, more, as, very, even, well, most</em>

### `SCONJ`

3 <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> tokens (0% of all `SCONJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `SCONJ` and `NumType` co-occurred: <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (3; 100%).

`SCONJ` tokens may have the following values of `NumType`:

* `Mult` (3; 100% of non-empty `NumType`): <em>once</em>
* `EMPTY` (1956): <em>that, if, when, as, how, where, because, while, by, after</em>

### `DET`

2 <tt><a href="en_gum-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="en_gum-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (2; 100%), <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (2; 100%).

`DET` tokens may have the following values of `NumType`:

* `Card` (2; 100% of non-empty `NumType`): <em>6, one</em>
* `EMPTY` (8224): <em>the, a, an, this, some, these, no, all, that, any</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="en_gum-dep-nmod-tmod.html">nmod:tmod</a></tt>]--> NUM</tt> (92; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> NUM</tt> (65; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (65; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-compound.html">compound</a></tt>]--> NUM</tt> (25; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (8; 89%),
<tt>ADJ --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADJ</tt> (3; 75%),
<tt>NUM --[<tt><a href="en_gum-dep-dep.html">dep</a></tt>]--> NUM</tt> (2; 100%).

