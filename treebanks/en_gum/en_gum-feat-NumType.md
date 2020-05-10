---
layout: base
title:  'Statistics of NumType in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Mult`, `Ord`.

2719 tokens (2%) have a non-empty value of `NumType`.
566 types (4%) occur at least once with a non-empty value of `NumType`.
557 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 5 part-of-speech tags: <tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (2428; 2% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (255; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (31; 0% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt> (2; 0% instances).

### `NUM`

2428 <tt><a href="en_gum-pos-NUM.html">NUM</a></tt> tokens (99% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (2428; 100% of non-empty `NumType`): <em>one, two, 1, 2, 3, 6, 15, 4, 5, 24</em>
* `EMPTY` (14): <em>half, I, II, Seven, Three, XV, pm</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (513) occur only with one value of `NumType`.

### `ADJ`

255 <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> tokens (3% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="en_gum-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (255; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (255; 100% of non-empty `NumType`): <em>first, second, third, 19th, fourth, 20th, 10th, 2nd, 30th, ninth</em>
* `EMPTY` (7288): <em>other, many, new, more, such, good, own, different, same, most</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (42) occur only with one value of `NumType`.

### `ADV`

31 <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> tokens (1% of all `ADV` tokens) have a non-empty value of `NumType`.

`ADV` tokens may have the following values of `NumType`:

* `Mult` (31; 100% of non-empty `NumType`): <em>once, twice</em>
* `EMPTY` (4154): <em>also, so, then, just, more, very, as, even, most, only</em>

### `SCONJ`

3 <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> tokens (0% of all `SCONJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `SCONJ` and `NumType` co-occurred: <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (3; 100%).

`SCONJ` tokens may have the following values of `NumType`:

* `Mult` (3; 100% of non-empty `NumType`): <em>once</em>
* `EMPTY` (2238): <em>that, if, when, as, how, where, while, by, because, after</em>

### `DET`

2 <tt><a href="en_gum-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="en_gum-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (2; 100%), <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (2; 100%).

`DET` tokens may have the following values of `NumType`:

* `Card` (2; 100% of non-empty `NumType`): <em>6, one</em>
* `EMPTY` (9493): <em>the, a, an, this, some, these, that, no, all, any</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="en_gum-dep-nmod-tmod.html">nmod:tmod</a></tt>]--> NUM</tt> (109; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (75; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> NUM</tt> (65; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-compound.html">compound</a></tt>]--> NUM</tt> (20; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-flat.html">flat</a></tt>]--> NUM</tt> (11; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (9; 90%),
<tt>ADJ --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADJ</tt> (3; 75%),
<tt>NUM --[<tt><a href="en_gum-dep-dep.html">dep</a></tt>]--> NUM</tt> (3; 100%).

