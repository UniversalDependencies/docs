---
layout: base
title:  'Statistics of NumType in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Frac`, `Mult`, `Ord`.

523 tokens (2%) have a non-empty value of `NumType`.
245 types (5%) occur at least once with a non-empty value of `NumType`.
236 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 5 part-of-speech tags: <tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (462; 2% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (55; 0% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="en_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).

### `NUM`

462 <tt><a href="en_pud-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="en_pud-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (291; 63%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (462; 100% of non-empty `NumType`): <em>one, two, three, million, 10, four, 1, six, 3, 2014</em>
* `EMPTY` (1): <em>2000s</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (216) occur only with one value of `NumType`.

### `ADJ`

55 <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> tokens (4% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="en_pud-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (55; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (55; 100% of non-empty `NumType`): <em>first, second, third, 8th, 16th, 20th, 3rd, 5th, 13th, 14th</em>
* `EMPTY` (1476): <em>new, many, more, other, such, last, high, own, several, political</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (16) occur only with one value of `NumType`.

### `ADV`

4 <tt><a href="en_pud-pos-ADV.html">ADV</a></tt> tokens (0% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="en_pud-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (4; 100%).

`ADV` tokens may have the following values of `NumType`:

* `Mult` (4; 100% of non-empty `NumType`): <em>once, twice</em>
* `EMPTY` (844): <em>also, when, so, only, more, not, where, however, most, well</em>

### `DET`

1 <tt><a href="en_pud-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="en_pud-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="en_pud-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (1; 100%).

`DET` tokens may have the following values of `NumType`:

* `Frac` (1; 100% of non-empty `NumType`): <em>half</em>
* `EMPTY` (2082): <em>the, a, an, this, all, some, that, these, each, no</em>

### `PROPN`

1 <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> tokens (0% of all `PROPN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PROPN` and `NumType` co-occurred: <tt><a href="en_pud-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (1; 100%).

`PROPN` tokens may have the following values of `NumType`:

* `Card` (1; 100% of non-empty `NumType`): <em>I.</em>
* `EMPTY` (1735): <em>China, Sea, October, Trump, North, America, April, Europe, France, War</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="en_pud-dep-compound.html">compound</a></tt>]--> NUM</tt> (16; 100%),
<tt>NUM --[<tt><a href="en_pud-dep-conj.html">conj</a></tt>]--> NUM</tt> (7; 100%),
<tt>NUM --[<tt><a href="en_pud-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (6; 100%),
<tt>NUM --[<tt><a href="en_pud-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (6; 100%).

