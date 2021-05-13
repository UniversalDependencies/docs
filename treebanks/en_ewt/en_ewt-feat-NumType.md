---
layout: base
title:  'Statistics of NumType in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Mult`, `Ord`.

5229 tokens (2%) have a non-empty value of `NumType`.
1299 types (7%) occur at least once with a non-empty value of `NumType`.
1264 lemmas (8%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (4913; 2% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (237; 0% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (78; 0% instances), <tt><a href="en_ewt-pos-X.html">X</a></tt> (1; 0% instances).

### `NUM`

4913 <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> tokens (98% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (4913; 100% of non-empty `NumType`): <em>one, two, 2, 3, 5, 1, 10, 4, three, 20</em>
* `EMPTY` (123): <em>1, 2, 3, 4, a, b, 5, ii, 10, 6</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (1234) occur only with one value of `NumType`.

### `ADJ`

237 <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> tokens (1% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="en_ewt-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (221; 93%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (237; 100% of non-empty `NumType`): <em>first, second, third, fourth, 21st, 5th, 10th, 14th, 19th, 2nd</em>
* `EMPTY` (16545): <em>good, great, new, other, best, many, more, last, same, few</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (27) occur only with one value of `NumType`.

### `ADV`

78 <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> tokens (1% of all `ADV` tokens) have a non-empty value of `NumType`.

`ADV` tokens may have the following values of `NumType`:

* `Mult` (77; 99% of non-empty `NumType`): <em>once, twice</em>
* `Ord` (1; 1% of non-empty `NumType`): <em>first</em>
* `EMPTY` (11965): <em>so, just, very, also, now, even, then, there, only, here</em>

### `X`

1 <tt><a href="en_ewt-pos-X.html">X</a></tt> tokens (0% of all `X` tokens) have a non-empty value of `NumType`.

`X` tokens may have the following values of `NumType`:

* `Card` (1; 100% of non-empty `NumType`): <em>3-5290</em>
* `EMPTY` (991): <em>etc, etc., .doc, carol.st.clair@enron.com, -, (, ), Access, Analysis_0712, COMMUNICATIONS</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="en_ewt-dep-compound.html">compound</a></tt>]--> NUM</tt> (148; 100%),
<tt>NUM --[<tt><a href="en_ewt-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (126; 100%),
<tt>NUM --[<tt><a href="en_ewt-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (91; 100%),
<tt>NUM --[<tt><a href="en_ewt-dep-conj.html">conj</a></tt>]--> NUM</tt> (61; 100%),
<tt>NUM --[<tt><a href="en_ewt-dep-nmod-tmod.html">nmod:tmod</a></tt>]--> NUM</tt> (9; 100%),
<tt>NUM --[<tt><a href="en_ewt-dep-appos.html">appos</a></tt>]--> NUM</tt> (6; 100%),
<tt>ADV --[<tt><a href="en_ewt-dep-conj.html">conj</a></tt>]--> ADV</tt> (2; 67%),
<tt>ADV --[<tt><a href="en_ewt-dep-advcl.html">advcl</a></tt>]--> ADV</tt> (1; 100%),
<tt>NUM --[<tt><a href="en_ewt-dep-advmod.html">advmod</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="en_ewt-dep-list.html">list</a></tt>]--> NUM</tt> (1; 100%).

