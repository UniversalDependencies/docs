---
layout: base
title:  'Statistics of NumType in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Mult`, `Ord`.

674 tokens (1%) have a non-empty value of `NumType`.
81 types (1%) occur at least once with a non-empty value of `NumType`.
66 lemmas (1%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_lines-pos-NUM.html">NUM</a></tt> (525; 1% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (87; 0% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt> (62; 0% instances).

### `NUM`

525 <tt><a href="en_lines-pos-NUM.html">NUM</a></tt> tokens (83% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (525; 100% of non-empty `NumType`): <em>one, two, three, 2002, six, five, 2000, 2, four, ten</em>
* `EMPTY` (108): <em>31-Dec-1999, 01-Jul-1999, eleven, 1947, n, sixty, 2.6, No-6, U, forty</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (61) occur only with one value of `NumType`.

### `ADJ`

87 <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> tokens (1% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="en_lines-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (87; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (87; 100% of non-empty `NumType`): <em>first, second, third, fourth</em>
* `EMPTY` (5852): <em>other, white, old, new, good, same, own, black, great, little</em>

### `ADV`

62 <tt><a href="en_lines-pos-ADV.html">ADV</a></tt> tokens (1% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="en_lines-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (62; 100%).

`ADV` tokens may have the following values of `NumType`:

* `Mult` (62; 100% of non-empty `NumType`): <em>once, twice</em>
* `EMPTY` (5028): <em>out, up, so, then, back, now, very, just, too, again</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="en_lines-dep-conj.html">conj</a></tt>]--> NUM</tt> (21; 84%),
<tt>NUM --[<tt><a href="en_lines-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (14; 82%),
<tt>ADJ --[<tt><a href="en_lines-dep-conj.html">conj</a></tt>]--> ADJ</tt> (3; 75%).

