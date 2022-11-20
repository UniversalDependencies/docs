---
layout: base
title:  'Statistics of NumForm in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `NumForm`

This feature is language-specific.
It occurs with 3 different values: `Digit`, `Roman`, `Word`.

3265 tokens (2%) have a non-empty value of `NumForm`.
622 types (4%) occur at least once with a non-empty value of `NumForm`.
596 lemmas (5%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 5 part-of-speech tags: <tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (3175; 2% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (44; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (37; 0% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt> (7; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (2; 0% instances).

### `NUM`

3175 <tt><a href="en_gum-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="en_gum-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (3094; 97%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (2193; 69% of non-empty `NumForm`): <em>1, 2, 3, 6, 4, 10, 5, 15, 7, 12</em>
* `Roman` (17; 1% of non-empty `NumForm`): <em>II, I, III, XV, XVII</em>
* `Word` (965; 30% of non-empty `NumForm`): <em>one, two, three, four, five, six, million, ten, eight, twenty</em>

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (588) occur only with one value of `NumForm`.

### `NOUN`

44 <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NOUN` and `NumForm` co-occurred: <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (42; 95%).

`NOUN` tokens may have the following values of `NumForm`:

* `Word` (44; 100% of non-empty `NumForm`): <em>half, quarter, third, millionth, quarters, tenth, thirds</em>

### `ADV`

37 <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> tokens (0% of all `ADV` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `ADV` and `NumForm` co-occurred: <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (37; 100%), <tt><a href="en_gum-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (35; 95%).

`ADV` tokens may have the following values of `NumForm`:

* `Word` (37; 100% of non-empty `NumForm`): <em>once, twice, half</em>

### `DET`

7 <tt><a href="en_gum-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `DET` and `NumForm` co-occurred: <tt><a href="en_gum-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (7; 100%), <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (7; 100%).

`DET` tokens may have the following values of `NumForm`:

* `Word` (7; 100% of non-empty `NumForm`): <em>half</em>

### `PROPN`

2 <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> tokens (0% of all `PROPN` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `PROPN` and `NumForm` co-occurred: <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2; 100%).

`PROPN` tokens may have the following values of `NumForm`:

* `Word` (2; 100% of non-empty `NumForm`): <em>EIGHT, One</em>

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<tt><a href="en_gum-dep-nmod-tmod.html">nmod:tmod</a></tt>]--> NUM</tt> (122; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (108; 98%),
<tt>NUM --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> NUM</tt> (100; 94%),
<tt>NUM --[<tt><a href="en_gum-dep-compound.html">compound</a></tt>]--> NUM</tt> (40; 65%),
<tt>NUM --[<tt><a href="en_gum-dep-flat.html">flat</a></tt>]--> NUM</tt> (11; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (7; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-dep.html">dep</a></tt>]--> NUM</tt> (5; 83%),
<tt>NUM --[<tt><a href="en_gum-dep-appos.html">appos</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-det-predet.html">det:predet</a></tt>]--> DET</tt> (1; 100%),
<tt>NUM --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> NUM</tt> (1; 100%).

