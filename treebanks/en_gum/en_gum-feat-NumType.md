---
layout: base
title:  'Statistics of NumType in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Mult`, `Ord`.

3068 tokens (2%) have a non-empty value of `NumType`.
610 types (4%) occur at least once with a non-empty value of `NumType`.
584 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (2695; 2% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (286; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (85; 0% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances).

### `NUM`

2695 <tt><a href="en_gum-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="en_gum-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (1916; 71%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (2695; 100% of non-empty `NumType`): <em>one, two, 1, 2, 3, 6, three, 15, 4, 5</em>
* `EMPTY` (6): <em>half, Seven, Three</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (539) occur only with one value of `NumType`.

### `ADJ`

286 <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> tokens (3% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="en_gum-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (286; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (286; 100% of non-empty `NumType`): <em>first, second, third, 19th, fourth, 20th, fifth, 30th, 10th, 2nd</em>
* `EMPTY` (8926): <em>other, many, new, good, little, such, different, more, own, last</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (43) occur only with one value of `NumType`.

### `ADV`

85 <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> tokens (2% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="en_gum-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (55; 65%).

`ADV` tokens may have the following values of `NumType`:

* `Mult` (30; 35% of non-empty `NumType`): <em>once, twice</em>
* `Ord` (55; 65% of non-empty `NumType`): <em>first, second, third, sixth</em>
* `EMPTY` (5374): <em>so, also, then, just, more, as, very, now, only, even</em>

### `SCONJ`

2 <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> tokens (0% of all `SCONJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `SCONJ` and `NumType` co-occurred: <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (2; 100%).

`SCONJ` tokens may have the following values of `NumType`:

* `Mult` (2; 100% of non-empty `NumType`): <em>Once</em>
* `EMPTY` (2665): <em>that, if, when, as, how, because, where, by, of, while</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="en_gum-dep-nmod-tmod.html">nmod:tmod</a></tt>]--> NUM</tt> (118; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (87; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> NUM</tt> (73; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-compound.html">compound</a></tt>]--> NUM</tt> (29; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (12; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-flat.html">flat</a></tt>]--> NUM</tt> (11; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (7; 100%),
<tt>ADJ --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADJ</tt> (3; 75%),
<tt>NUM --[<tt><a href="en_gum-dep-dep.html">dep</a></tt>]--> NUM</tt> (3; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-goeswith.html">goeswith</a></tt>]--> NUM</tt> (1; 100%).

