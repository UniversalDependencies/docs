---
layout: base
title:  'Statistics of NumType in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Mult`, `Ord`.

5208 tokens (2%) have a non-empty value of `NumType`.
1295 types (7%) occur at least once with a non-empty value of `NumType`.
1265 lemmas (8%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (4909; 2% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (221; 0% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (78; 0% instances).

### `NUM`

4909 <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (4909; 100% of non-empty `NumType`): <em>one, two, 2, 3, 5, 1, 10, 4, three, 20</em>
* `EMPTY` (1): <em>9/11</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (1241) occur only with one value of `NumType`.

### `ADJ`

221 <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> tokens (1% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="en_ewt-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (221; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (221; 100% of non-empty `NumType`): <em>first, second, third, 5th, fourth, 19th, 2nd, 1st, 20th, 21st</em>
* `EMPTY` (15710): <em>good, great, other, best, new, many, more, last, same, few</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (22) occur only with one value of `NumType`.

### `ADV`

78 <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> tokens (1% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="en_ewt-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (78; 100%).

`ADV` tokens may have the following values of `NumType`:

* `Mult` (77; 99% of non-empty `NumType`): <em>once, twice</em>
* `Ord` (1; 1% of non-empty `NumType`): <em>first</em>
* `EMPTY` (12965): <em>so, just, when, very, also, how, now, even, then, there</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="en_ewt-dep-compound.html">compound</a></tt>]--> NUM</tt> (140; 100%),
<tt>NUM --[<tt><a href="en_ewt-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (127; 100%),
<tt>NUM --[<tt><a href="en_ewt-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (90; 100%),
<tt>NUM --[<tt><a href="en_ewt-dep-conj.html">conj</a></tt>]--> NUM</tt> (61; 100%),
<tt>NUM --[<tt><a href="en_ewt-dep-nmod-tmod.html">nmod:tmod</a></tt>]--> NUM</tt> (9; 100%),
<tt>NUM --[<tt><a href="en_ewt-dep-appos.html">appos</a></tt>]--> NUM</tt> (5; 100%),
<tt>ADV --[<tt><a href="en_ewt-dep-conj.html">conj</a></tt>]--> ADV</tt> (2; 67%),
<tt>ADV --[<tt><a href="en_ewt-dep-advcl.html">advcl</a></tt>]--> ADV</tt> (1; 100%),
<tt>NUM --[<tt><a href="en_ewt-dep-advmod.html">advmod</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="en_ewt-dep-list.html">list</a></tt>]--> NUM</tt> (1; 100%).

