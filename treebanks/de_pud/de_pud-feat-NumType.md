---
layout: base
title:  'Statistics of NumType in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

367 tokens (2%) have a non-empty value of `NumType`.
219 types (3%) occur at least once with a non-empty value of `NumType`.
216 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="de_pud-pos-NUM.html">NUM</a></tt> (352; 2% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (15; 0% instances).

### `NUM`

352 <tt><a href="de_pud-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (352; 100% of non-empty `NumType`): <em>zwei, drei, vier, 3, sechs, zehn, 1, 10, 50, 100</em>
* `EMPTY` (1): <em>hunderte</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (206) occur only with one value of `NumType`.

### `ADJ`

15 <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> tokens (1% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="de_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (15; 100%), <tt><a href="de_pud-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (14; 93%), <tt><a href="de_pud-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (14; 93%), <tt><a href="de_pud-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (13; 87%), <tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Dat</tt> (12; 80%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (15; 100% of non-empty `NumType`): <em>1., 30., 10., 11., 12., 16, 19., 21., 27., 4.</em>
* `EMPTY` (1384): <em>ersten, neue, letzten, neuen, große, politischen, Vereinigten, bekannt, britische, britischen</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (13) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="de_pud-dep-conj.html">conj</a></tt>]--> NUM</tt> (10; 100%),
<tt>NUM --[<tt><a href="de_pud-dep-compound.html">compound</a></tt>]--> NUM</tt> (4; 100%),
<tt>NUM --[<tt><a href="de_pud-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (2; 100%).

