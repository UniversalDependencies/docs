---
layout: base
title:  'Statistics of NumType in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Frac`, `Mult`, `Ord`.

4678 tokens (2%) have a non-empty value of `NumType`.
796 types (5%) occur at least once with a non-empty value of `NumType`.
757 lemmas (6%) occur at least once with a non-empty value of `NumType`.
The feature is used with 6 part-of-speech tags: <tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (3991; 2% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (449; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (150; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (75; 0% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt> (11; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (2; 0% instances).

### `NUM`

3991 <tt><a href="en_gum-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="en_gum-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (2634; 66%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (3869; 97% of non-empty `NumType`): <em>one, two, 1, three, 2, 3, four, 4, five, 10</em>
* `Frac` (122; 3% of non-empty `NumType`): <em>7.2, 1.5, 6.8, 2.0, half, 1.3, 1.4, 11.5, 2.3, 4.0</em>
* `EMPTY` (1): <em>1</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (686) occur only with one value of `NumType`.

### `ADJ`

449 <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> tokens (3% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="en_gum-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (449; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (449; 100% of non-empty `NumType`): <em>first, second, third, 19th, fourth, 20th, fifth, 30th, 3rd, 10th</em>
* `EMPTY` (13502): <em>other, new, many, good, little, more, different, such, same, last</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (64) occur only with one value of `NumType`.

### `ADV`

150 <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> tokens (1% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (150; 100%), <tt><a href="en_gum-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (102; 68%).

`ADV` tokens may have the following values of `NumType`:

* `Frac` (4; 3% of non-empty `NumType`): <em>half</em>
* `Mult` (48; 32% of non-empty `NumType`): <em>once, twice</em>
* `Ord` (98; 65% of non-empty `NumType`): <em>first, second, third, 135th, Fifth, Fourth, 15th, sixth</em>
* `EMPTY` (9960): <em>so, when, just, then, also, how, now, more, here, really</em>

`NumType` seems to be **lexical feature** of `ADV`. 100% lemmas (11) occur only with one value of `NumType`.

### `NOUN`

75 <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NOUN` and `NumType` co-occurred: <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (65; 87%).

`NOUN` tokens may have the following values of `NumType`:

* `Frac` (75; 100% of non-empty `NumType`): <em>half, quarter, third, thirds, quarters, fifths, halves, hundredths, millionth, tenth</em>
* `EMPTY` (35437): <em>people, time, day, way, years, life, world, year, city, today</em>

### `DET`

11 <tt><a href="en_gum-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="en_gum-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (11; 100%), <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (11; 100%).

`DET` tokens may have the following values of `NumType`:

* `Frac` (11; 100% of non-empty `NumType`): <em>half</em>
* `EMPTY` (17321): <em>the, a, this, an, all, some, that, these, no, any</em>

### `PROPN`

2 <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> tokens (0% of all `PROPN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PROPN` and `NumType` co-occurred: <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2; 100%).

`PROPN` tokens may have the following values of `NumType`:

* `Card` (2; 100% of non-empty `NumType`): <em>EIGHT, One</em>
* `EMPTY` (12187): <em>States, University, President, York, New, America, Warhol, north, figure, south</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> NUM</tt> (186; 93%),
<tt>NUM --[<tt><a href="en_gum-dep-nmod-tmod.html">nmod:tmod</a></tt>]--> NUM</tt> (130; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (128; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-compound.html">compound</a></tt>]--> NUM</tt> (97; 96%),
<tt>NUM --[<tt><a href="en_gum-dep-flat.html">flat</a></tt>]--> NUM</tt> (13; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (13; 72%),
<tt>NUM --[<tt><a href="en_gum-dep-dep.html">dep</a></tt>]--> NUM</tt> (8; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (7; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> NUM</tt> (2; 100%),
<tt>ADJ --[<tt><a href="en_gum-dep-appos.html">appos</a></tt>]--> ADJ</tt> (1; 100%).

