---
layout: base
title:  'Statistics of NumForm in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `NumForm`

This feature is language-specific.
It occurs with 4 different values: `Combi`, `Digit`, `Roman`, `Word`.

4307 tokens (2%) have a non-empty value of `NumForm`.
758 types (5%) occur at least once with a non-empty value of `NumForm`.
725 lemmas (6%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 6 part-of-speech tags: <tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (3685; 2% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (419; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (121; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (70; 0% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt> (10; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (2; 0% instances).

### `NUM`

3685 <tt><a href="en_gum-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="en_gum-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (3573; 97%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (2491; 68% of non-empty `NumForm`): <em>1, 2, 3, 10, 4, 6, 5, 15, 7, 20</em>
* `Roman` (19; 1% of non-empty `NumForm`): <em>II, I, III, VI, XV, XVII</em>
* `Word` (1175; 32% of non-empty `NumForm`): <em>one, two, three, four, five, six, million, ten, eight, seven</em>

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (654) occur only with one value of `NumForm`.

### `ADJ`

419 <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> tokens (3% of all `ADJ` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `ADJ` and `NumForm` co-occurred: <tt><a href="en_gum-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (419; 100%).

`ADJ` tokens may have the following values of `NumForm`:

* `Combi` (94; 22% of non-empty `NumForm`): <em>19th, 20th, 10th, 30th, 17th, 21st, 2nd, 33rd, 3rd, 50th</em>
* `Word` (325; 78% of non-empty `NumForm`): <em>first, second, third, fourth, fifth, seventh, ninth, sixth, tenth</em>

`NumForm` seems to be **lexical feature** of `ADJ`. 100% lemmas (64) occur only with one value of `NumForm`.

### `ADV`

121 <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> tokens (1% of all `ADV` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `ADV` and `NumForm` co-occurred: <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (121; 100%), <tt><a href="en_gum-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (79; 65%).

`ADV` tokens may have the following values of `NumForm`:

* `Combi` (3; 2% of non-empty `NumForm`): <em>135th, 15th</em>
* `Word` (118; 98% of non-empty `NumForm`): <em>first, once, second, twice, half, third, sixth</em>

### `NOUN`

70 <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NOUN` and `NumForm` co-occurred: <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (60; 86%).

`NOUN` tokens may have the following values of `NumForm`:

* `Word` (70; 100% of non-empty `NumForm`): <em>half, quarter, third, thirds, quarters, fifths, halves, hundredths, millionth, tenth</em>

### `DET`

10 <tt><a href="en_gum-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `DET` and `NumForm` co-occurred: <tt><a href="en_gum-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (10; 100%), <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (10; 100%).

`DET` tokens may have the following values of `NumForm`:

* `Word` (10; 100% of non-empty `NumForm`): <em>half</em>

### `PROPN`

2 <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> tokens (0% of all `PROPN` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `PROPN` and `NumForm` co-occurred: <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2; 100%).

`PROPN` tokens may have the following values of `NumForm`:

* `Word` (2; 100% of non-empty `NumForm`): <em>EIGHT, One</em>

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> NUM</tt> (181; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-nmod-tmod.html">nmod:tmod</a></tt>]--> NUM</tt> (126; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (123; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-compound.html">compound</a></tt>]--> NUM</tt> (65; 69%),
<tt>NUM --[<tt><a href="en_gum-dep-flat.html">flat</a></tt>]--> NUM</tt> (11; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (9; 64%),
<tt>NUM --[<tt><a href="en_gum-dep-dep.html">dep</a></tt>]--> NUM</tt> (7; 88%),
<tt>NUM --[<tt><a href="en_gum-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (7; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> NUM</tt> (2; 100%),
<tt>ADJ --[<tt><a href="en_gum-dep-appos.html">appos</a></tt>]--> ADJ</tt> (1; 100%).

