---
layout: base
title:  'Statistics of NumType in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

2522 tokens (2%) have a non-empty value of `NumType`.
833 types (2%) occur at least once with a non-empty value of `NumType`.
497 lemmas (2%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt> (2222; 1% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (300; 0% instances).

### `NUM`

2222 <tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt> tokens (99% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="fi_ftb-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1405; 63%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (2222; 100% of non-empty `NumType`): <em>kaksi, yksi, kolme, kymmenen, 10, viisi, kahden, pari, yhden, neljä</em>
* `EMPTY` (30): <em>31.8., 23.4., 01.11.1996, 1.2., 1.4.1996, 1.5., 1.7.-31.12.1995, 1/8, 1/96, 10.01.1997</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (462) occur only with one value of `NumType`.

### `ADJ`

300 <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> tokens (3% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="fi_ftb-feat-Number.html">Number</a></tt><tt>=Sing</tt> (250; 83%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (300; 100% of non-empty `NumType`): <em>ensimmäinen, ensimmäisen, toinen, toisen, toista, ensimmäisellä, ensimmäisenä, ensimmäistä, ensimmäiset, kolmas</em>
* `EMPTY` (10190): <em>koko, hyvä, viime, ensi, hyvää, uusi, oma, uutta, uuden, suuri</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (36) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="fi_ftb-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (114; 100%),
<tt>NUM --[<tt><a href="fi_ftb-dep-conj.html">conj</a></tt>]--> NUM</tt> (80; 100%),
<tt>ADJ --[<tt><a href="fi_ftb-dep-conj.html">conj</a></tt>]--> ADJ</tt> (9; 82%),
<tt>NUM --[<tt><a href="fi_ftb-dep-nsubj-cop.html">nsubj:cop</a></tt>]--> NUM</tt> (1; 100%).

