---
layout: base
title:  'Statistics of NumType in UD_Italian-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParTUT: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

1027 tokens (2%) have a non-empty value of `NumType`.
315 types (4%) occur at least once with a non-empty value of `NumType`.
287 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="it_partut-pos-NUM.html">NUM</a></tt> (810; 1% instances), <tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt> (193; 0% instances), <tt><a href="it_partut-pos-PRON.html">PRON</a></tt> (24; 0% instances).

### `NUM`

810 <tt><a href="it_partut-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (810; 100% of non-empty `NumType`): <em>due, tre, 1, 6, quattro, 2000, 1999, cinque, 3, 18</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (268) occur only with one value of `NumType`.

### `ADJ`

193 <tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt> tokens (5% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="it_partut-feat-Number.html">Number</a></tt><tt>=Sing</tt> (147; 76%), <tt><a href="it_partut-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (99; 51%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (193; 100% of non-empty `NumType`): <em>primo, prima, ultimi, prime, seconda, ultime, primi, secondo, terzo, ultima</em>
* `EMPTY` (4015): <em>presente, altri, europeo, sociale, importante, nuovo, stesso, economica, finanziario, maggiore</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (20) occur only with one value of `NumType`.

### `PRON`

24 <tt><a href="it_partut-pos-PRON.html">PRON</a></tt> tokens (1% of all `PRON` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PRON` and `NumType` co-occurred: <tt><a href="it_partut-feat-Clitic.html">Clitic</a></tt><tt>=EMPTY</tt> (24; 100%), <tt><a href="it_partut-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (24; 100%), <tt><a href="it_partut-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (24; 100%), <tt><a href="it_partut-feat-Number.html">Number</a></tt><tt>=Sing</tt> (20; 83%), <tt><a href="it_partut-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (18; 75%).

`PRON` tokens may have the following values of `NumType`:

* `Ord` (24; 100% of non-empty `NumType`): <em>quarto, ultima, terzo, ultimo, prima, primo, primi, quarti, quinti, secondo</em>
* `EMPTY` (1774): <em>che, si, cui, lo, ci, ciò, ne, mi, quanto, quello</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="it_partut-dep-flat.html">flat</a></tt>]--> NUM</tt> (47; 100%),
<tt>NUM --[<tt><a href="it_partut-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (38; 100%),
<tt>NUM --[<tt><a href="it_partut-dep-conj.html">conj</a></tt>]--> NUM</tt> (32; 100%),
<tt>NUM --[<tt><a href="it_partut-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (3; 100%),
<tt>ADJ --[<tt><a href="it_partut-dep-conj.html">conj</a></tt>]--> ADJ</tt> (2; 100%).

