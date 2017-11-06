---
layout: base
title:  'Statistics of NumForm in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Features: `NumForm`

This feature is language-specific.
It occurs with 3 different values: `Digit`, `Letter`, `Roman`.

2162 tokens (2%) have a non-empty value of `NumForm`.
718 types (3%) occur at least once with a non-empty value of `NumForm`.
524 lemmas (4%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 4 part-of-speech tags: <tt><a href="et-pos-NUM.html">NUM</a></tt> (1531; 1% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt> (606; 1% instances), <tt><a href="et-pos-SYM.html">SYM</a></tt> (23; 0% instances), <tt><a href="et-pos-PROPN.html">PROPN</a></tt> (2; 0% instances).

### `NUM`

1531 <tt><a href="et-pos-NUM.html">NUM</a></tt> tokens (98% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="et-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (1527; 100%), <tt><a href="et-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1177; 77%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (906; 59% of non-empty `NumForm`): <em>2001, 2, 1, 2000, 10, 2002, 000, 1989-2001, 1999, 4</em>
* `Letter` (625; 41% of non-empty `NumForm`): <em>kaks, üks, kolm, kahe, paar, neli, viis, kümme, ühe, nelja</em>

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (393) occur only with one value of `NumForm`.

### `ADJ`

606 <tt><a href="et-pos-ADJ.html">ADJ</a></tt> tokens (8% of all `ADJ` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `ADJ` and `NumForm` co-occurred: <tt><a href="et-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (606; 100%), <tt><a href="et-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (606; 100%), <tt><a href="et-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (606; 100%), <tt><a href="et-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (606; 100%), <tt><a href="et-feat-Number.html">Number</a></tt><tt>=Sing</tt> (409; 67%).

`ADJ` tokens may have the following values of `NumForm`:

* `Digit` (339; 56% of non-empty `NumForm`): <em>2000., 1999., 1998., 2001., 1997., 1995., 1996., 2., 1980., 2002.</em>
* `Letter` (238; 39% of non-empty `NumForm`): <em>esimest, esimene, teine, teise, esimesel, teises, esimese, teist, esimesed, esimeses</em>
* `Roman` (29; 5% of non-empty `NumForm`): <em>II, III, I, IV, V, VI, VIII, X</em>

`NumForm` seems to be **lexical feature** of `ADJ`. 100% lemmas (135) occur only with one value of `NumForm`.

### `SYM`

23 <tt><a href="et-pos-SYM.html">SYM</a></tt> tokens (42% of all `SYM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `SYM` and `NumForm` co-occurred: <tt><a href="et-feat-Abbr.html">Abbr</a></tt><tt>=EMPTY</tt> (23; 100%), <tt><a href="et-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (23; 100%), <tt><a href="et-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (18; 78%), <tt><a href="et-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (18; 78%).

`SYM` tokens may have the following values of `NumForm`:

* `Digit` (23; 100% of non-empty `NumForm`): <em>%</em>

### `PROPN`

2 <tt><a href="et-pos-PROPN.html">PROPN</a></tt> tokens (0% of all `PROPN` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `PROPN` and `NumForm` co-occurred: <tt><a href="et-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2; 100%).

`PROPN` tokens may have the following values of `NumForm`:

* `Letter` (2; 100% of non-empty `NumForm`): <em>Neljandal, Teist</em>

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<tt><a href="et-dep-conj.html">conj</a></tt>]--> NUM</tt> (48; 92%),
<tt>NUM --[<tt><a href="et-dep-flat.html">flat</a></tt>]--> NUM</tt> (42; 100%),
<tt>NUM --[<tt><a href="et-dep-compound.html">compound</a></tt>]--> NUM</tt> (31; 69%),
<tt>NUM --[<tt><a href="et-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (22; 88%),
<tt>ADJ --[<tt><a href="et-dep-conj.html">conj</a></tt>]--> ADJ</tt> (17; 85%),
<tt>NUM --[<tt><a href="et-dep-list.html">list</a></tt>]--> NUM</tt> (2; 100%),
<tt>ADJ --[<tt><a href="et-dep-flat.html">flat</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="et-dep-flat.html">flat</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="et-dep-compound.html">compound</a></tt>]--> SYM</tt> (1; 100%),
<tt>NUM --[<tt><a href="et-dep-orphan.html">orphan</a></tt>]--> NUM</tt> (1; 100%).

