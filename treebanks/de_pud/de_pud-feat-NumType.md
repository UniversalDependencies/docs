---
layout: base
title:  'Statistics of NumType in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

854 tokens (4%) have a non-empty value of `NumType`.
240 types (4%) occur at least once with a non-empty value of `NumType`.
222 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="de_pud-pos-DET.html">DET</a></tt> (454; 2% instances), <tt><a href="de_pud-pos-NUM.html">NUM</a></tt> (356; 2% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (44; 0% instances).

### `DET`

454 <tt><a href="de_pud-pos-DET.html">DET</a></tt> tokens (15% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="de_pud-feat-Definite.html">Definite</a></tt><tt>=Ind</tt> (442; 97%), <tt><a href="de_pud-feat-PronType.html">PronType</a></tt><tt>=Art</tt> (442; 97%), <tt><a href="de_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (431; 95%).

`DET` tokens may have the following values of `NumType`:

* `Card` (454; 100% of non-empty `NumType`): <em>eine, ein, einer, einem, einen, eines, beiden, Beide, beider</em>
* `EMPTY` (2652): <em>der, die, dem, den, das, des, seine, diese, dieser, ihre</em>

### `NUM`

356 <tt><a href="de_pud-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (355; 100% of non-empty `NumType`): <em>zwei, drei, vier, 3, sechs, zehn, 1, 10, 50, 100</em>
* `Ord` (1; 0% of non-empty `NumType`): <em>24</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (209) occur only with one value of `NumType`.

### `ADJ`

44 <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> tokens (3% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="de_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (38; 86%), <tt><a href="de_pud-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (30; 68%), <tt><a href="de_pud-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (27; 61%), <tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Dat</tt> (24; 55%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (44; 100% of non-empty `NumType`): <em>ersten, erste, 1., erster, 30., 10., 11., 12., 16, 19.</em>
* `EMPTY` (1368): <em>neue, letzten, neuen, große, weitere, politischen, Vereinigten, bekannt, britische, britischen</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (14) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="de_pud-dep-conj.html">conj</a></tt>]--> NUM</tt> (10; 100%),
<tt>NUM --[<tt><a href="de_pud-dep-compound.html">compound</a></tt>]--> NUM</tt> (4; 100%),
<tt>NUM --[<tt><a href="de_pud-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (2; 100%).

