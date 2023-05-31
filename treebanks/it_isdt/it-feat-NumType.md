---
layout: base
title:  'Statistics of NumType in UD_Italian'
udver: '2'
---

## Treebank Statistics: UD_Italian: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Ord`, `Range`.

6081 tokens (2%) have a non-empty value of `NumType`.
1247 types (5%) occur at least once with a non-empty value of `NumType`.
1199 lemmas (6%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="it-pos-NUM.html">NUM</a></tt> (5063; 2% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt> (1016; 0% instances), <tt><a href="it-pos-PROPN.html">PROPN</a></tt> (2; 0% instances).

### `NUM`

5063 <tt><a href="it-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (5059; 100% of non-empty `NumType`): <em>due, 1, 2, tre, 3, cinque, 4, mila, quattro, 5</em>
* `Range` (4; 0% of non-empty `NumType`): <em>3/4, 150/300, 2/3</em>
* `EMPTY` (7): <em>dieci, zero, mille, trentacinque, una</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (1127) occur only with one value of `NumType`.

### `ADJ`

1016 <tt><a href="it-pos-ADJ.html">ADJ</a></tt> tokens (5% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="it-feat-Number.html">Number</a></tt><tt>=Sing</tt> (859; 85%), <tt><a href="it-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (554; 55%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (1016; 100% of non-empty `NumType`): <em>primo, prima, secondo, terzo, seconda, primi, ultimi, prime, ultimo, ii</em>
* `EMPTY` (18102): <em>grande, nuovo, presente, altri, altro, stesso, comune, italiana, altra, stessa</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (72) occur only with one value of `NumType`.

### `PROPN`

2 <tt><a href="it-pos-PROPN.html">PROPN</a></tt> tokens (0% of all `PROPN` tokens) have a non-empty value of `NumType`.

`PROPN` tokens may have the following values of `NumType`:

* `Card` (2; 100% of non-empty `NumType`): <em>9/11</em>
* `EMPTY` (14395): <em>Italia, Shakespeare, Balzac, Europa, Roma, San, Stati, Uniti, Unione, Albania</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="it-dep-flat.html">flat</a></tt>]--> NUM</tt> (223; 100%),
<tt>NUM --[<tt><a href="it-dep-conj.html">conj</a></tt>]--> NUM</tt> (149; 100%),
<tt>NUM --[<tt><a href="it-dep-compound.html">compound</a></tt>]--> NUM</tt> (79; 100%),
<tt>NUM --[<tt><a href="it-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (34; 97%),
<tt>NUM --[<tt><a href="it-dep-fixed.html">fixed</a></tt>]--> NUM</tt> (16; 100%),
<tt>NUM --[<tt><a href="it-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (13; 100%),
<tt>ADJ --[<tt><a href="it-dep-conj.html">conj</a></tt>]--> ADJ</tt> (10; 83%).

