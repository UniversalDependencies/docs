---
layout: base
title:  'Statistics of NumType in UD_Italian-MarkIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-MarkIT: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

170 tokens (0%) have a non-empty value of `NumType`.
45 types (1%) occur at least once with a non-empty value of `NumType`.
36 lemmas (1%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt> (99; 0% instances), <tt><a href="it_markit-pos-NUM.html">NUM</a></tt> (70; 0% instances), <tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (1; 0% instances).

### `ADJ`

99 <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt> tokens (4% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="it_markit-feat-Number.html">Number</a></tt><tt>=Sing</tt> (77; 78%), <tt><a href="it_markit-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (59; 60%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (99; 100% of non-empty `NumType`): <em>primo, prima, seconda, primi, secondo, ultimo, prime, ultimi, 1°, II</em>
* `EMPTY` (2470): <em>stesso, grande, importante, altri, stessa, altro, possibile, umano, difficile, diverse</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (13) occur only with one value of `NumType`.

### `NUM`

70 <tt><a href="it_markit-pos-NUM.html">NUM</a></tt> tokens (43% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (70; 100% of non-empty `NumType`): <em>due, tre, Novecento, quattro, dieci, mille, cinque, duemila, tredici, '900</em>
* `EMPTY` (93): <em>2001, 2016, 2013, 1, 13, 2, 9, 15, 1600, 1776</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (23) occur only with one value of `NumType`.

### `PRON`

1 <tt><a href="it_markit-pos-PRON.html">PRON</a></tt> tokens (0% of all `PRON` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PRON` and `NumType` co-occurred: <tt><a href="it_markit-feat-Clitic.html">Clitic</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="it_markit-feat-Gender.html">Gender</a></tt><tt>=Fem</tt> (1; 100%), <tt><a href="it_markit-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1; 100%), <tt><a href="it_markit-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="it_markit-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (1; 100%).

`PRON` tokens may have the following values of `NumType`:

* `Ord` (1; 100% of non-empty `NumType`): <em>prima</em>
* `EMPTY` (3130): <em>che, si, ci, lo, questo, la, c', ciò, noi, cui</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>ADJ --[<tt><a href="it_markit-dep-conj.html">conj</a></tt>]--> ADJ</tt> (1; 100%),
<tt>NUM --[<tt><a href="it_markit-dep-conj.html">conj</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="it_markit-dep-flat.html">flat</a></tt>]--> NUM</tt> (1; 100%).

