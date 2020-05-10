---
layout: base
title:  'Statistics of NumType in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

2041 tokens (3%) have a non-empty value of `NumType`.
449 types (5%) occur at least once with a non-empty value of `NumType`.
423 lemmas (6%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (1648; 2% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (212; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (118; 0% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (63; 0% instances).

### `NUM`

1648 <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (1648; 100% of non-empty `NumType`): <em>deux, 5, 2006, trois, 2, 10, 30, 4, 3, 1</em>
* `EMPTY` (1): <em>3000</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (349) occur only with one value of `NumType`.

### `ADJ`

212 <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> tokens (5% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Sing</tt> (153; 72%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (212; 100% of non-empty `NumType`): <em>première, premier, dernier, 3e, deuxième, 1er, premiers, troisième, quatrième, 21e</em>
* `EMPTY` (4194): <em>autres, tous, ancien, indésirables, autre, zolédronique, européenne, rénale, politique, même</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (27) occur only with one value of `NumType`.

### `NOUN`

118 <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> tokens (1% of all `NOUN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NOUN` and `NumType` co-occurred: <tt><a href="fr_sequoia-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (70; 59%).

`NOUN` tokens may have the following values of `NumType`:

* `Card` (118; 100% of non-empty `NumType`): <em>millions, milliards, 1/10, 2006-08-07, 1/100, milliard, 1/1000, million, -1,5, -2,5</em>
* `EMPTY` (15077): <em>patients, affaire, %, bivalirudine, commission, ans, perfusion, traitement, mg, président</em>

`NumType` seems to be **lexical feature** of `NOUN`. 100% lemmas (38) occur only with one value of `NumType`.

### `PRON`

63 <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> tokens (2% of all `PRON` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PRON` and `NumType` co-occurred: <tt><a href="fr_sequoia-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (63; 100%), <tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (63; 100%), <tt><a href="fr_sequoia-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (63; 100%), <tt><a href="fr_sequoia-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (63; 100%), <tt><a href="fr_sequoia-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (63; 100%).

`PRON` tokens may have the following values of `NumType`:

* `Card` (63; 100% of non-empty `NumType`): <em>1, deux, 100, 1/10, 1/100, 10, 6, 96, six, trois</em>
* `EMPTY` (2828): <em>il, qui, nous, se, je, s', vous, elle, ce, que</em>

`NumType` seems to be **lexical feature** of `PRON`. 100% lemmas (44) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="fr_sequoia-dep-conj.html">conj</a></tt>]--> NUM</tt> (33; 100%),
<tt>NUM --[<tt><a href="fr_sequoia-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (23; 100%),
<tt>ADJ --[<tt><a href="fr_sequoia-dep-conj.html">conj</a></tt>]--> ADJ</tt> (4; 100%),
<tt>NOUN --[<tt><a href="fr_sequoia-dep-conj.html">conj</a></tt>]--> NOUN</tt> (4; 57%),
<tt>NUM --[<tt><a href="fr_sequoia-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (3; 100%),
<tt>NUM --[<tt><a href="fr_sequoia-dep-fixed.html">fixed</a></tt>]--> NUM</tt> (2; 100%),
<tt>ADJ --[<tt><a href="fr_sequoia-dep-orphan.html">orphan</a></tt>]--> ADJ</tt> (1; 100%),
<tt>PRON --[<tt><a href="fr_sequoia-dep-conj.html">conj</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="fr_sequoia-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (1; 100%).

