---
layout: base
title:  'Statistics of NumForm in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Features: `NumForm`

This feature is language-specific.
It occurs with 4 different values: `Combi`, `Digit`, `Roman`, `Word`.

525 tokens (2%) have a non-empty value of `NumForm`.
244 types (5%) occur at least once with a non-empty value of `NumForm`.
235 lemmas (5%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 4 part-of-speech tags: <tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (464; 2% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (56; 0% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="en_pud-pos-DET.html">DET</a></tt> (1; 0% instances).

### `NUM`

464 <tt><a href="en_pud-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="en_pud-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (461; 99%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (291; 63% of non-empty `NumForm`): <em>10, 1, 3, 2014, 2015, 100, 1492, 20, 2010, 2012</em>
* `Roman` (17; 4% of non-empty `NumForm`): <em>I, III, IV, II, V, VI, X</em>
* `Word` (156; 34% of non-empty `NumForm`): <em>one, two, three, million, four, six, bn, five, seven, ten</em>

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (214) occur only with one value of `NumForm`.

### `ADJ`

56 <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> tokens (4% of all `ADJ` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `ADJ` and `NumForm` co-occurred: <tt><a href="en_pud-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (56; 100%).

`ADJ` tokens may have the following values of `NumForm`:

* `Combi` (18; 32% of non-empty `NumForm`): <em>8th, 16th, 20th, 3rd, 5th, 13th, 14th, 15th, 1st, 45th</em>
* `Word` (38; 68% of non-empty `NumForm`): <em>first, second, third, fourth</em>

`NumForm` seems to be **lexical feature** of `ADJ`. 100% lemmas (18) occur only with one value of `NumForm`.

### `ADV`

4 <tt><a href="en_pud-pos-ADV.html">ADV</a></tt> tokens (0% of all `ADV` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `ADV` and `NumForm` co-occurred: <tt><a href="en_pud-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (4; 100%).

`ADV` tokens may have the following values of `NumForm`:

* `Word` (4; 100% of non-empty `NumForm`): <em>once, twice</em>

### `DET`

1 <tt><a href="en_pud-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `DET` and `NumForm` co-occurred: <tt><a href="en_pud-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="en_pud-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (1; 100%).

`DET` tokens may have the following values of `NumForm`:

* `Word` (1; 100% of non-empty `NumForm`): <em>half</em>

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<tt><a href="en_pud-dep-conj.html">conj</a></tt>]--> NUM</tt> (7; 100%),
<tt>NUM --[<tt><a href="en_pud-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (5; 83%),
<tt>NUM --[<tt><a href="en_pud-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (4; 67%),
<tt>NUM --[<tt><a href="en_pud-dep-compound.html">compound</a></tt>]--> DET</tt> (1; 100%).

