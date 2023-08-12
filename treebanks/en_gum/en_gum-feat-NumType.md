---
layout: base
title:  'Statistics of NumType in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Frac`, `Mult`, `Ord`.

4309 tokens (2%) have a non-empty value of `NumType`.
759 types (5%) occur at least once with a non-empty value of `NumType`.
726 lemmas (6%) occur at least once with a non-empty value of `NumType`.
The feature is used with 6 part-of-speech tags: <tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (3687; 2% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (419; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (121; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (70; 0% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt> (10; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (2; 0% instances).

### `NUM`

3687 <tt><a href="en_gum-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="en_gum-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (2433; 66%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (3575; 97% of non-empty `NumType`): <em>one, two, 1, 2, three, 3, four, 10, 4, 6</em>
* `Frac` (112; 3% of non-empty `NumType`): <em>7.2, 1.5, 6.8, 1.3, 1.4, 11.5, 2.3, 8.3, half, 1.6</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (655) occur only with one value of `NumType`.

### `ADJ`

419 <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> tokens (3% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="en_gum-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (419; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (419; 100% of non-empty `NumType`): <em>first, second, third, 19th, fourth, 20th, fifth, 10th, 30th, seventh</em>
* `EMPTY` (12010): <em>other, many, new, good, little, different, more, last, same, own</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (64) occur only with one value of `NumType`.

### `ADV`

121 <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> tokens (1% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (121; 100%), <tt><a href="en_gum-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (79; 65%).

`ADV` tokens may have the following values of `NumType`:

* `Frac` (3; 2% of non-empty `NumType`): <em>half</em>
* `Mult` (42; 35% of non-empty `NumType`): <em>once, twice</em>
* `Ord` (76; 63% of non-empty `NumType`): <em>first, second, 135th, third, 15th, sixth</em>
* `EMPTY` (8766): <em>so, just, when, then, also, how, now, more, here, really</em>

### `NOUN`

70 <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NOUN` and `NumType` co-occurred: <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (60; 86%).

`NOUN` tokens may have the following values of `NumType`:

* `Frac` (70; 100% of non-empty `NumType`): <em>half, quarter, third, thirds, quarters, fifths, halves, hundredths, millionth, tenth</em>
* `EMPTY` (31501): <em>people, time, day, years, way, city, world, year, today, life</em>

### `DET`

10 <tt><a href="en_gum-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="en_gum-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (10; 100%), <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (10; 100%).

`DET` tokens may have the following values of `NumType`:

* `Frac` (10; 100% of non-empty `NumType`): <em>half</em>
* `EMPTY` (15381): <em>the, a, this, an, all, some, these, that, no, any</em>

### `PROPN`

2 <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> tokens (0% of all `PROPN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PROPN` and `NumType` co-occurred: <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2; 100%).

`PROPN` tokens may have the following values of `NumType`:

* `Card` (2; 100% of non-empty `NumType`): <em>EIGHT, One</em>
* `EMPTY` (11243): <em>States, New, President, University, York, America, figure, north, Scientology, south</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> NUM</tt> (168; 93%),
<tt>NUM --[<tt><a href="en_gum-dep-nmod-tmod.html">nmod:tmod</a></tt>]--> NUM</tt> (126; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (123; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-compound.html">compound</a></tt>]--> NUM</tt> (90; 96%),
<tt>NUM --[<tt><a href="en_gum-dep-flat.html">flat</a></tt>]--> NUM</tt> (11; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (9; 64%),
<tt>NUM --[<tt><a href="en_gum-dep-dep.html">dep</a></tt>]--> NUM</tt> (8; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (7; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> NUM</tt> (2; 100%),
<tt>ADJ --[<tt><a href="en_gum-dep-appos.html">appos</a></tt>]--> ADJ</tt> (1; 100%).

