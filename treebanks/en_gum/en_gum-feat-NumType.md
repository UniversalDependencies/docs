---
layout: base
title:  'Statistics of NumType in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Frac`, `Mult`, `Ord`.

3204 tokens (2%) have a non-empty value of `NumType`.
617 types (4%) occur at least once with a non-empty value of `NumType`.
586 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (2778; 2% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (294; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (89; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (43; 0% instances).

### `NUM`

2778 <tt><a href="en_gum-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="en_gum-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (1961; 71%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (2718; 98% of non-empty `NumType`): <em>one, two, 1, 2, 3, three, 6, four, 4, 15</em>
* `Frac` (60; 2% of non-empty `NumType`): <em>1.5, half, 1.3, 1.4, 1.75, 2.2, 2.3, 2.4, 7.2, 7.3</em>
* `EMPTY` (3): <em>Seven, Three</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (536) occur only with one value of `NumType`.

### `ADJ`

294 <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> tokens (3% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="en_gum-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (294; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (294; 100% of non-empty `NumType`): <em>first, second, third, 19th, fourth, 20th, fifth, 30th, 10th, 17th</em>
* `EMPTY` (8864): <em>other, many, new, good, little, such, same, different, last, more</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (44) occur only with one value of `NumType`.

### `ADV`

89 <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> tokens (2% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="en_gum-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (59; 66%).

`ADV` tokens may have the following values of `NumType`:

* `Mult` (30; 34% of non-empty `NumType`): <em>once, twice</em>
* `Ord` (59; 66% of non-empty `NumType`): <em>first, second, third, 135th, 15th, sixth</em>
* `EMPTY` (5472): <em>so, also, then, just, more, very, as, now, only, well</em>

### `NOUN`

43 <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NOUN` and `NumType` co-occurred: <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (41; 95%).

`NOUN` tokens may have the following values of `NumType`:

* `Frac` (43; 100% of non-empty `NumType`): <em>half, headquarters, quarter, behalf, third, millionth, quarters, tenth, thirds</em>
* `EMPTY` (23997): <em>people, time, city, years, way, year, world, language, life, something</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="en_gum-dep-nmod-tmod.html">nmod:tmod</a></tt>]--> NUM</tt> (118; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (91; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> NUM</tt> (72; 99%),
<tt>NUM --[<tt><a href="en_gum-dep-compound.html">compound</a></tt>]--> NUM</tt> (44; 94%),
<tt>NUM --[<tt><a href="en_gum-dep-flat.html">flat</a></tt>]--> NUM</tt> (11; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (7; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (6; 55%),
<tt>NUM --[<tt><a href="en_gum-dep-dep.html">dep</a></tt>]--> NUM</tt> (4; 100%),
<tt>ADJ --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADJ</tt> (3; 75%),
<tt>NUM --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> NUM</tt> (1; 100%).

