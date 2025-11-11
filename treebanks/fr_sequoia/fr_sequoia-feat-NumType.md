---
layout: base
title:  'Statistics of NumType in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

2054 tokens (3%) have a non-empty value of `NumType`.
456 types (5%) occur at least once with a non-empty value of `NumType`.
430 lemmas (6%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (1739; 2% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (212; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (103; 0% instances).

### `NUM`

1739 <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> tokens (97% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (1739; 100% of non-empty `NumType`): <em>deux, 5, trois, 2, 2006, 10, 1, 30, 3, 4</em>
* `EMPTY` (51): <em>50 000, 125 000, 1 500, 1 000, 1 200, 10 000, 13 819, 2 000, 2 127, 6 000</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (371) occur only with one value of `NumType`.

### `ADJ`

212 <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> tokens (5% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Sing</tt> (190; 90%), <tt><a href="fr_sequoia-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (112; 53%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (212; 100% of non-empty `NumType`): <em>première, premier, dernier, deuxième, 3e, premiers, troisième, quatrième, 1er, derniers</em>
* `EMPTY` (4175): <em>autres, tous, ancien, indésirables, autre, zolédronique, européenne, rénale, politique, même</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (27) occur only with one value of `NumType`.

### `NOUN`

103 <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> tokens (1% of all `NOUN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NOUN` and `NumType` co-occurred: <tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Plur</tt> (59; 57%).

`NOUN` tokens may have the following values of `NumType`:

* `Card` (103; 100% of non-empty `NumType`): <em>millions, milliards, 2006-08-07, milliard, million, -1,5, -2,5, 09-2008, 1/04/289/001, 1/04/289/002</em>
* `EMPTY` (15106): <em>patients, affaire, %, bivalirudine, commission, ans, perfusion, traitement, mg, président</em>

`NumType` seems to be **lexical feature** of `NOUN`. 100% lemmas (32) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="fr_sequoia-dep-conj.html">conj</a></tt>]--> NUM</tt> (41; 100%),
<tt>NUM --[<tt><a href="fr_sequoia-dep-obl-arg.html">obl:arg</a></tt>]--> NUM</tt> (19; 100%),
<tt>NUM --[<tt><a href="fr_sequoia-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (18; 86%),
<tt>ADJ --[<tt><a href="fr_sequoia-dep-conj.html">conj</a></tt>]--> ADJ</tt> (4; 100%),
<tt>NUM --[<tt><a href="fr_sequoia-dep-dep.html">dep</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="fr_sequoia-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (1; 100%).

