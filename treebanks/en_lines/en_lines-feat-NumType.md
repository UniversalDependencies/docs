---
layout: base
title:  'Statistics of NumType in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Mult`, `Ord`.

751 tokens (1%) have a non-empty value of `NumType`.
86 types (1%) occur at least once with a non-empty value of `NumType`.
69 lemmas (1%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_lines-pos-NUM.html">NUM</a></tt> (577; 1% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (106; 0% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt> (68; 0% instances).

### `NUM`

577 <tt><a href="en_lines-pos-NUM.html">NUM</a></tt> tokens (84% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (577; 100% of non-empty `NumType`): <em>one, two, three, 2002, five, six, ten, four, 2000, 2</em>
* `EMPTY` (114): <em>31-Dec-1999, 01-Jul-1999, eleven, 1947, forty, n, sixty, forty-eight, 2.6, No-6</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (63) occur only with one value of `NumType`.

### `ADJ`

106 <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> tokens (2% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="en_lines-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (104; 98%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (106; 100% of non-empty `NumType`): <em>first, second, third, fourth, seventh, sixth, eleventh</em>
* `EMPTY` (6648): <em>other, white, old, own, new, good, long, same, little, more</em>

### `ADV`

68 <tt><a href="en_lines-pos-ADV.html">ADV</a></tt> tokens (1% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="en_lines-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (68; 100%).

`ADV` tokens may have the following values of `NumType`:

* `Mult` (68; 100% of non-empty `NumType`): <em>once, twice</em>
* `EMPTY` (5673): <em>out, up, so, then, now, back, very, just, there, again</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="en_lines-dep-conj.html">conj</a></tt>]--> NUM</tt> (24; 86%),
<tt>NUM --[<tt><a href="en_lines-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (14; 82%),
<tt>ADJ --[<tt><a href="en_lines-dep-conj.html">conj</a></tt>]--> ADJ</tt> (4; 80%),
<tt>ADV --[<tt><a href="en_lines-dep-conj.html">conj</a></tt>]--> ADV</tt> (1; 100%).

