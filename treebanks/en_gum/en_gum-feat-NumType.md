---
layout: base
title:  'Statistics of NumType in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Frac`, `Mult`, `Ord`.

3710 tokens (2%) have a non-empty value of `NumType`.
684 types (4%) occur at least once with a non-empty value of `NumType`.
655 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 6 part-of-speech tags: <tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (3182; 2% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (368; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (107; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (44; 0% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt> (7; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (2; 0% instances).

### `NUM`

3182 <tt><a href="en_gum-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="en_gum-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (2184; 69%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (3100; 97% of non-empty `NumType`): <em>one, two, 1, 2, three, 3, four, 6, 4, 10</em>
* `Frac` (82; 3% of non-empty `NumType`): <em>1.5, 2.3, half, 1.3, 1.4, 1.6, 1.75, 15.16, 15.17, 2.0</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (588) occur only with one value of `NumType`.

### `ADJ`

368 <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> tokens (3% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="en_gum-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (368; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (368; 100% of non-empty `NumType`): <em>first, second, third, 19th, fourth, 20th, fifth, 30th, 10th, 17th</em>
* `EMPTY` (10632): <em>other, many, new, good, little, different, last, more, such, own</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (60) occur only with one value of `NumType`.

### `ADV`

107 <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> tokens (1% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (107; 100%), <tt><a href="en_gum-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (72; 67%).

`ADV` tokens may have the following values of `NumType`:

* `Frac` (2; 2% of non-empty `NumType`): <em>half</em>
* `Mult` (35; 33% of non-empty `NumType`): <em>once, twice</em>
* `Ord` (70; 65% of non-empty `NumType`): <em>first, second, 135th, third, 15th, sixth</em>
* `EMPTY` (7123): <em>so, just, also, then, now, more, how, very, here, there</em>

### `NOUN`

44 <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NOUN` and `NumType` co-occurred: <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (42; 95%).

`NOUN` tokens may have the following values of `NumType`:

* `Frac` (44; 100% of non-empty `NumType`): <em>half, quarter, third, millionth, quarters, tenth, thirds</em>
* `EMPTY` (28576): <em>people, time, city, day, years, way, world, year, life, today</em>

### `DET`

7 <tt><a href="en_gum-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="en_gum-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (7; 100%), <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (7; 100%).

`DET` tokens may have the following values of `NumType`:

* `Frac` (7; 100% of non-empty `NumType`): <em>half</em>
* `EMPTY` (13607): <em>the, a, this, an, all, some, these, that, no, any</em>

### `PROPN`

2 <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> tokens (0% of all `PROPN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PROPN` and `NumType` co-occurred: <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2; 100%).

`PROPN` tokens may have the following values of `NumType`:

* `Card` (2; 100% of non-empty `NumType`): <em>EIGHT, One</em>
* `EMPTY` (10406): <em>States, New, University, York, President, Scientology, north, America, figure, Warhol</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="en_gum-dep-nmod-tmod.html">nmod:tmod</a></tt>]--> NUM</tt> (122; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (110; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> NUM</tt> (105; 99%),
<tt>NUM --[<tt><a href="en_gum-dep-compound.html">compound</a></tt>]--> NUM</tt> (59; 95%),
<tt>NUM --[<tt><a href="en_gum-dep-flat.html">flat</a></tt>]--> NUM</tt> (11; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (7; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-dep.html">dep</a></tt>]--> NUM</tt> (6; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (6; 55%),
<tt>ADJ --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADJ</tt> (3; 60%),
<tt>ADV --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> ADV</tt> (1; 100%).

