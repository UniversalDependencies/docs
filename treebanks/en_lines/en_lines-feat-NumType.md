---
layout: base
title:  'Statistics of NumType in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Mult`, `Ord`.

619 tokens (1%) have a non-empty value of `NumType`.
72 types (1%) occur at least once with a non-empty value of `NumType`.
57 lemmas (1%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_lines-pos-NUM.html">NUM</a></tt> (479; 1% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (81; 0% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt> (59; 0% instances).

### `NUM`

479 <tt><a href="en_lines-pos-NUM.html">NUM</a></tt> tokens (83% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (479; 100% of non-empty `NumType`): <em>one, two, three, 2002, six, five, 2000, 1, 2, ten</em>
* `EMPTY` (101): <em>31-Dec-1999, 01-Jul-1999, n, sixty, eleven, 2.6, No-6, U, forty, forty-eight</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (52) occur only with one value of `NumType`.

### `ADJ`

81 <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> tokens (2% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="en_lines-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (81; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (81; 100% of non-empty `NumType`): <em>first, second, third, fourth</em>
* `EMPTY` (5233): <em>other, white, old, good, new, same, great, long, more, many</em>

### `ADV`

59 <tt><a href="en_lines-pos-ADV.html">ADV</a></tt> tokens (1% of all `ADV` tokens) have a non-empty value of `NumType`.

`ADV` tokens may have the following values of `NumType`:

* `Mult` (59; 100% of non-empty `NumType`): <em>once, twice</em>
* `EMPTY` (4509): <em>out, up, so, then, back, now, very, just, too, again</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="en_lines-dep-conj.html">conj</a></tt>]--> NUM</tt> (21; 84%),
<tt>NUM --[<tt><a href="en_lines-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (14; 82%),
<tt>ADJ --[<tt><a href="en_lines-dep-conj.html">conj</a></tt>]--> ADJ</tt> (3; 75%).

