---
layout: base
title:  'Statistics of NumType in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

1739 tokens (3%) have a non-empty value of `NumType`.
188 types (20%) occur at least once with a non-empty value of `NumType`.
181 lemmas (23%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (1191; 2% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (521; 1% instances), <tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (27; 0% instances).

### `NUM`

1191 <tt><a href="en_atis-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (1191; 100% of non-empty `NumType`): <em>one, twenty, 5, 6, 10, 8, 7, 12, 4, 9</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (178) occur only with one value of `NumType`.

### `ADJ`

521 <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> tokens (25% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="en_atis-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (521; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (521; 100% of non-empty `NumType`): <em>first, seventh, second, eighth, third, fifth, sixth, fourth, ninth, tenth</em>
* `EMPTY` (1558): <em>cheapest, available, earliest, next, early, latest, like, many, expensive, daily</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (10) occur only with one value of `NumType`.

### `ADV`

27 <tt><a href="en_atis-pos-ADV.html">ADV</a></tt> tokens (5% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="en_atis-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (27; 100%), <tt><a href="en_atis-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (27; 100%).

`ADV` tokens may have the following values of `NumType`:

* `Ord` (27; 100% of non-empty `NumType`): <em>first</em>
* `EMPTY` (539): <em>how, o'clock, now, much, back, also, early, then, only, again</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="en_atis-dep-conj.html">conj</a></tt>]--> NUM</tt> (28; 100%),
<tt>NUM --[<tt><a href="en_atis-dep-compound.html">compound</a></tt>]--> NUM</tt> (11; 100%),
<tt>ADJ --[<tt><a href="en_atis-dep-conj.html">conj</a></tt>]--> ADJ</tt> (4; 100%).

