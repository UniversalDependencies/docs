---
layout: base
title:  'Statistics of NumValue in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Features: `NumValue`

This feature is language-specific.
It occurs with 3 different values: `1`, `2`, `3`.
Some words have combined values of the feature; 1 combinations have been observed: `1|2|3`.

8080 tokens (1%) have a non-empty value of `NumValue`.
90 types (0%) occur at least once with a non-empty value of `NumValue`.
18 lemmas (0%) occur at least once with a non-empty value of `NumValue`.
The feature is used with 2 part-of-speech tags: <tt><a href="cs-pos-NUM.html">NUM</a></tt> (8050; 1% instances), <tt><a href="cs-pos-ADJ.html">ADJ</a></tt> (30; 0% instances).

### `NUM`

8050 <tt><a href="cs-pos-NUM.html">NUM</a></tt> tokens (19% of all `NUM` tokens) have a non-empty value of `NumValue`.

The most frequent other feature values with which `NUM` and `NumValue` co-occurred: <tt><a href="cs-feat-NumForm.html">NumForm</a></tt><tt>=Word</tt> (8050; 100%), <tt><a href="cs-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (8050; 100%), <tt><a href="cs-feat-Number.html">Number</a></tt><tt>=Plur</tt> (4885; 61%).

`NUM` tokens may have the following values of `NumValue`:

* `1,2,3` (8050; 100% of non-empty `NumValue`): <em>dva, tři, jeden, dvě, tisíc, dvou, čtyři, obou, jednoho, jedné</em>

`NumValue` seems to be **lexical feature** of `NUM`. 100% lemmas (18) occur only with one value of `NumValue`.

### `ADJ`

30 <tt><a href="cs-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `NumValue`.

The most frequent other feature values with which `ADJ` and `NumValue` co-occurred: <tt><a href="cs-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (30; 100%), <tt><a href="cs-feat-Number.html">Number</a></tt><tt>=Plur</tt> (30; 100%), <tt><a href="cs-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (30; 100%), <tt><a href="cs-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (19; 63%).

`ADJ` tokens may have the following values of `NumValue`:

* `1` (30; 100% of non-empty `NumValue`): <em>jedny, jedni, jedněch, jedněm, jedněmi</em>

## Relations with Agreement in `NumValue`

The 10 most frequent relations where parent and child node agree in `NumValue`:
<tt>NUM --[<tt><a href="cs-dep-conj.html">conj</a></tt>]--> NUM</tt> (99; 69%),
<tt>NUM --[<tt><a href="cs-dep-orphan.html">orphan</a></tt>]--> NUM</tt> (3; 100%).

