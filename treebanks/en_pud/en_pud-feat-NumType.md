---
layout: base
title:  'Statistics of NumType in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Frac`, `Mult`, `Ord`.

539 tokens (3%) have a non-empty value of `NumType`.
254 types (5%) occur at least once with a non-empty value of `NumType`.
245 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 5 part-of-speech tags: <tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (464; 2% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (56; 0% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (14; 0% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="en_pud-pos-DET.html">DET</a></tt> (1; 0% instances).

### `NUM`

464 <tt><a href="en_pud-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="en_pud-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (291; 63%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (461; 99% of non-empty `NumType`): <em>one, two, three, million, 10, four, 1, six, 3, I</em>
* `Frac` (3; 1% of non-empty `NumType`): <em>1,165, 1,335, 1,365</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (214) occur only with one value of `NumType`.

### `ADJ`

56 <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> tokens (4% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="en_pud-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (56; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (56; 100% of non-empty `NumType`): <em>first, second, third, 8th, 16th, 20th, 3rd, 5th, 13th, 14th</em>
* `EMPTY` (1498): <em>new, many, more, other, such, last, great, high, own, several</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (18) occur only with one value of `NumType`.

### `NOUN`

14 <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NOUN` and `NumType` co-occurred: <tt><a href="en_pud-feat-Number.html">Number</a></tt><tt>=Ptan</tt> (14; 100%).

`NOUN` tokens may have the following values of `NumType`:

* `Card` (14; 100% of non-empty `NumType`): <em>1960s, 1970s, 1990s, 1350s, 1950s, 1980s, 2000s, 60s, mid-1970s, mid-1980s</em>
* `EMPTY` (4006): <em>time, people, years, year, government, city, state, century, world, day</em>

`NumType` seems to be **lexical feature** of `NOUN`. 100% lemmas (10) occur only with one value of `NumType`.

### `ADV`

4 <tt><a href="en_pud-pos-ADV.html">ADV</a></tt> tokens (0% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="en_pud-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (4; 100%).

`ADV` tokens may have the following values of `NumType`:

* `Mult` (4; 100% of non-empty `NumType`): <em>once, twice</em>
* `EMPTY` (812): <em>also, when, so, only, more, where, however, well, most, as</em>

### `DET`

1 <tt><a href="en_pud-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="en_pud-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="en_pud-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (1; 100%).

`DET` tokens may have the following values of `NumType`:

* `Frac` (1; 100% of non-empty `NumType`): <em>half</em>
* `EMPTY` (2079): <em>the, a, an, this, all, some, that, these, each, no</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="en_pud-dep-compound.html">compound</a></tt>]--> NUM</tt> (16; 100%),
<tt>NUM --[<tt><a href="en_pud-dep-conj.html">conj</a></tt>]--> NUM</tt> (7; 100%),
<tt>NUM --[<tt><a href="en_pud-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (6; 100%),
<tt>NUM --[<tt><a href="en_pud-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (6; 100%).

