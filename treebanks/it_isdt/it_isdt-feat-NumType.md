---
layout: base
title:  'Statistics of NumType in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Ord`, `Range`.

6240 tokens (2%) have a non-empty value of `NumType`.
1257 types (5%) occur at least once with a non-empty value of `NumType`.
1208 lemmas (6%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="it_isdt-pos-NUM.html">NUM</a></tt> (5181; 2% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (1057; 0% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt> (2; 0% instances).

### `NUM`

5181 <tt><a href="it_isdt-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (5176; 100% of non-empty `NumType`): <em>due, 1, 2, tre, 3, cinque, 4, mila, quattro, 5</em>
* `Ord` (1; 0% of non-empty `NumType`): <em>I</em>
* `Range` (4; 0% of non-empty `NumType`): <em>3/4, 150/300, 2/3</em>
* `EMPTY` (7): <em>dieci, zero, mille, trentacinque, una</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (1135) occur only with one value of `NumType`.

### `ADJ`

1057 <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> tokens (5% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="it_isdt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (897; 85%), <tt><a href="it_isdt-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (577; 55%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (1057; 100% of non-empty `NumType`): <em>primo, prima, secondo, terzo, seconda, primi, ultimi, prime, ultimo, ii</em>
* `EMPTY` (18723): <em>nuovo, grande, presente, altri, altro, stesso, comune, italiana, altra, altre</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (74) occur only with one value of `NumType`.

### `PROPN`

2 <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt> tokens (0% of all `PROPN` tokens) have a non-empty value of `NumType`.

`PROPN` tokens may have the following values of `NumType`:

* `Card` (2; 100% of non-empty `NumType`): <em>9/11</em>
* `EMPTY` (14769): <em>Italia, Shakespeare, Balzac, Europa, Roma, San, Stati, Uniti, Marco, Unione</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="it_isdt-dep-flat.html">flat</a></tt>]--> NUM</tt> (229; 100%),
<tt>NUM --[<tt><a href="it_isdt-dep-conj.html">conj</a></tt>]--> NUM</tt> (154; 100%),
<tt>NUM --[<tt><a href="it_isdt-dep-compound.html">compound</a></tt>]--> NUM</tt> (79; 100%),
<tt>NUM --[<tt><a href="it_isdt-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (35; 97%),
<tt>NUM --[<tt><a href="it_isdt-dep-fixed.html">fixed</a></tt>]--> NUM</tt> (16; 100%),
<tt>NUM --[<tt><a href="it_isdt-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (13; 100%),
<tt>ADJ --[<tt><a href="it_isdt-dep-conj.html">conj</a></tt>]--> ADJ</tt> (12; 86%),
<tt>NUM --[<tt><a href="it_isdt-dep-obl.html">obl</a></tt>]--> NUM</tt> (1; 100%).

