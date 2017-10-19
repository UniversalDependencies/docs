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
The feature is used with 2 part-of-speech tags: [NUM](cs-pos-NUM.html) (8050; 1% instances), [ADJ](cs-pos-ADJ.html) (30; 0% instances).

### `NUM`

8050 [NUM](cs-pos-NUM.html) tokens (19% of all `NUM` tokens) have a non-empty value of `NumValue`.

The most frequent other feature values with which `NUM` and `NumValue` co-occurred: <tt><a href="NumType.html">NumType</a>=Card</tt> (8050; 100%), <tt><a href="NumForm.html">NumForm</a>=Word</tt> (8050; 100%), <tt><a href="Number.html">Number</a>=Plur</tt> (4885; 61%).

`NUM` tokens may have the following values of `NumValue`:

* `1,2,3` (8050; 100% of non-empty `NumValue`): dva tři jeden dvě tisíc dvou čtyři obou jednoho jedné

`NumValue` seems to be **lexical feature** of `NUM`. 100% lemmas (18) occur only with one value of `NumValue`.

### `ADJ`

30 [ADJ](cs-pos-ADJ.html) tokens (0% of all `ADJ` tokens) have a non-empty value of `NumValue`.

The most frequent other feature values with which `ADJ` and `NumValue` co-occurred: <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (30; 100%), <tt><a href="Number.html">Number</a>=Plur</tt> (30; 100%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (30; 100%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (19; 63%).

`ADJ` tokens may have the following values of `NumValue`:

* `1` (30; 100% of non-empty `NumValue`): jedny jedni jedněch jedněm jedněmi

## Relations with Agreement in `NumValue`

The 10 most frequent relations where parent and child node agree in `NumValue`:
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (99; 69%),
<tt>NUM --[<a href="../dep/orphan.html">orphan</a>]--> NUM</tt> (3; 100%).

