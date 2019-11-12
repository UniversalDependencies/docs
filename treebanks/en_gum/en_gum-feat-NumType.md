---
layout: base
title:  'Statistics of NumType in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Mult`, `Ord`.

2308 tokens (2%) have a non-empty value of `NumType`.
523 types (4%) occur at least once with a non-empty value of `NumType`.
107 lemmas (1%) occur at least once with a non-empty value of `NumType`.
The feature is used with 6 part-of-speech tags: <tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (2049; 2% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (224; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (28; 0% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt> (2; 0% instances).

### `NUM`

2049 <tt><a href="en_gum-pos-NUM.html">NUM</a></tt> tokens (99% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (2049; 100% of non-empty `NumType`): <em>one, two, 1, 2, 3, 6, 15, 4, 24, 5</em>
* `EMPTY` (12): <em>half, I, II, Three, XV, pm</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (64) occur only with one value of `NumType`.

### `ADJ`

224 <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> tokens (3% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="en_gum-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (224; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (224; 100% of non-empty `NumType`): <em>first, second, third, 19th, 20th, fourth, 10th, 2nd, 30th, ninth</em>
* `EMPTY` (6493): <em>other, many, new, more, good, such, own, most, different, important</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (39) occur only with one value of `NumType`.

### `ADV`

28 <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> tokens (1% of all `ADV` tokens) have a non-empty value of `NumType`.

`ADV` tokens may have the following values of `NumType`:

* `Mult` (28; 100% of non-empty `NumType`): <em>once, twice</em>
* `EMPTY` (3726): <em>also, so, then, just, more, as, very, even, most, well</em>

### `SCONJ`

3 <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> tokens (0% of all `SCONJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `SCONJ` and `NumType` co-occurred: <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (3; 100%).

`SCONJ` tokens may have the following values of `NumType`:

* `Mult` (3; 100% of non-empty `NumType`): <em>once</em>
* `EMPTY` (1997): <em>that, if, when, as, how, where, because, while, by, after</em>

### `DET`

2 <tt><a href="en_gum-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="en_gum-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (2; 100%), <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (2; 100%).

`DET` tokens may have the following values of `NumType`:

* `Card` (2; 100% of non-empty `NumType`): <em>6, one</em>
* `EMPTY` (8560): <em>the, a, an, this, some, these, no, all, that, any</em>

### `X`

2 <tt><a href="en_gum-pos-X.html">X</a></tt> tokens (1% of all `X` tokens) have a non-empty value of `NumType`.

`X` tokens may have the following values of `NumType`:

* `Card` (2; 100% of non-empty `NumType`): <em>1., 3.</em>
* `EMPTY` (248): <em>al., et, de, etc, etc., 1, 2, 3, 4, Formica</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="en_gum-dep-nmod-tmod.html">nmod:tmod</a></tt>]--> NUM</tt> (97; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (69; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> NUM</tt> (64; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-compound.html">compound</a></tt>]--> NUM</tt> (20; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-flat.html">flat</a></tt>]--> NUM</tt> (11; 100%),
<tt>ADJ --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADJ</tt> (3; 75%),
<tt>NUM --[<tt><a href="en_gum-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (3; 75%),
<tt>NUM --[<tt><a href="en_gum-dep-dep.html">dep</a></tt>]--> NUM</tt> (2; 100%).

