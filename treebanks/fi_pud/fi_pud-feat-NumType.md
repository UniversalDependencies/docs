---
layout: base
title:  'Statistics of NumType in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

472 tokens (3%) have a non-empty value of `NumType`.
290 types (4%) occur at least once with a non-empty value of `NumType`.
230 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="fi_pud-pos-NUM.html">NUM</a></tt> (385; 2% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (84; 1% instances), <tt><a href="fi_pud-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).

### `NUM`

385 <tt><a href="fi_pud-pos-NUM.html">NUM</a></tt> tokens (99% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="fi_pud-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (263; 68%), <tt><a href="fi_pud-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (262; 68%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (384; 100% of non-empty `NumType`): <em>kaksi, kolme, 10, 3, kahden, yksi, 1492, 2010, 2012, 2014</em>
* `Ord` (1; 0% of non-empty `NumType`): <em>60.</em>
* `EMPTY` (2): <em>puoli, viisitoista</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (201) occur only with one value of `NumType`.

### `ADJ`

84 <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> tokens (7% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="fi_pud-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (84; 100%), <tt><a href="fi_pud-feat-Derivation.html">Derivation</a></tt><tt>=EMPTY</tt> (46; 55%), <tt><a href="fi_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (44; 52%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (84; 100% of non-empty `NumType`): <em>ensimmäinen, ensimmäisen, 1., 30., I, ensimmäistä, 10., 21., 3., 31.</em>
* `EMPTY` (1058): <em>suurin, uuden, viime, suuri, uusia, koko, useita, eri, lukuisia, pienen</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (28) occur only with one value of `NumType`.

### `PUNCT`

2 <tt><a href="fi_pud-pos-PUNCT.html">PUNCT</a></tt> tokens (0% of all `PUNCT` tokens) have a non-empty value of `NumType`.

`PUNCT` tokens may have the following values of `NumType`:

* `Card` (2; 100% of non-empty `NumType`): <em>-</em>
* `EMPTY` (2337): <em>,, ., ”, (, ), :, -, ?, ’, ...</em>

### `PROPN`

1 <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> tokens (0% of all `PROPN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PROPN` and `NumType` co-occurred: <tt><a href="fi_pud-feat-Case.html">Case</a></tt><tt>=Gen</tt> (1; 100%), <tt><a href="fi_pud-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (1; 100%).

`PROPN` tokens may have the following values of `NumType`:

* `Ord` (1; 100% of non-empty `NumType`): <em>IV:n</em>
* `EMPTY` (1503): <em>of, Ranskan, Australian, Kiinan, Hong, Venäjän, Yhdysvaltain, de, the, Euroopan</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="fi_pud-dep-compound.html">compound</a></tt>]--> NUM</tt> (21; 95%),
<tt>NUM --[<tt><a href="fi_pud-dep-conj.html">conj</a></tt>]--> NUM</tt> (6; 100%),
<tt>NUM --[<tt><a href="fi_pud-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (1; 100%).

