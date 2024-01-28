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
The feature is used with 3 part-of-speech tags: <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (1724; 2% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (212; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (118; 0% instances).

### `NUM`

1724 <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (1724; 100% of non-empty `NumType`): <em>deux, 5, trois, 2, 2006, 10, 1, 30, 3, 4</em>
* `EMPTY` (1): <em>3000</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (368) occur only with one value of `NumType`.

### `ADJ`

212 <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> tokens (5% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Sing</tt> (153; 72%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (212; 100% of non-empty `NumType`): <em>première, premier, dernier, 3e, deuxième, 1er, premiers, troisième, quatrième, 21e</em>
* `EMPTY` (4190): <em>autres, tous, ancien, indésirables, autre, zolédronique, européenne, rénale, politique, même</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (27) occur only with one value of `NumType`.

### `NOUN`

118 <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> tokens (1% of all `NOUN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NOUN` and `NumType` co-occurred: <tt><a href="fr_sequoia-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (70; 59%).

`NOUN` tokens may have the following values of `NumType`:

* `Card` (118; 100% of non-empty `NumType`): <em>millions, milliards, 1/10, 2006-08-07, 1/100, milliard, 1/1000, million, -1,5, -2,5</em>
* `EMPTY` (15069): <em>patients, affaire, %, bivalirudine, commission, ans, perfusion, traitement, mg, président</em>

`NumType` seems to be **lexical feature** of `NOUN`. 100% lemmas (38) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="fr_sequoia-dep-conj.html">conj</a></tt>]--> NUM</tt> (39; 100%),
<tt>NUM --[<tt><a href="fr_sequoia-dep-obl-arg.html">obl:arg</a></tt>]--> NUM</tt> (19; 100%),
<tt>NUM --[<tt><a href="fr_sequoia-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (13; 100%),
<tt>ADJ --[<tt><a href="fr_sequoia-dep-conj.html">conj</a></tt>]--> ADJ</tt> (4; 100%),
<tt>NOUN --[<tt><a href="fr_sequoia-dep-conj.html">conj</a></tt>]--> NOUN</tt> (4; 57%),
<tt>NUM --[<tt><a href="fr_sequoia-dep-fixed.html">fixed</a></tt>]--> NUM</tt> (2; 100%),
<tt>NOUN --[<tt><a href="fr_sequoia-dep-obl-arg.html">obl:arg</a></tt>]--> NOUN</tt> (1; 100%),
<tt>NUM --[<tt><a href="fr_sequoia-dep-flat-foreign.html">flat:foreign</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="fr_sequoia-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="fr_sequoia-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (1; 100%).

