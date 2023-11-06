---
layout: base
title:  'Statistics of NumType in UD_Portuguese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-GSD: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Mult`, `Ord`.

8730 tokens (3%) have a non-empty value of `NumType`.
1712 types (6%) occur at least once with a non-empty value of `NumType`.
1262 lemmas (9%) occur at least once with a non-empty value of `NumType`.
The feature is used with 5 part-of-speech tags: <tt><a href="pt_gsd-pos-NUM.html">NUM</a></tt> (8506; 3% instances), <tt><a href="pt_gsd-pos-ADJ.html">ADJ</a></tt> (212; 0% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> (8; 0% instances), <tt><a href="pt_gsd-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (2; 0% instances).

### `NUM`

8506 <tt><a href="pt_gsd-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (8504; 100% of non-empty `NumType`): <em>dois, três, mil, duas, milhões, um, 1, quatro, 2012, 2</em>
* `Mult` (2; 0% of non-empty `NumType`): <em>cento</em>
* `EMPTY` (6): <em>2012, 3, 470, cem, centenas, sessenta</em>

<table>
  <tr><th>Paradigm <i>cento</i></th><th><tt>Card</tt></th><th><tt>Mult</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>cento</em></td><td></td></tr>
  <tr><td><tt><tt><a href="pt_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="pt_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>cento</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (1238) occur only with one value of `NumType`.

### `ADJ`

212 <tt><a href="pt_gsd-pos-ADJ.html">ADJ</a></tt> tokens (1% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="pt_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt> (190; 90%), <tt><a href="pt_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (113; 53%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (212; 100% of non-empty `NumType`): <em>primeira, primeiro, segunda, última, último, segundo, últimos, ª, primeiros, terceiro</em>
* `EMPTY` (14827): <em>maior, grande, primeiro, primeira, novo, mesmo, nova, segundo, última, segunda</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (21) occur only with one value of `NumType`.

### `NOUN`

8 <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NOUN` and `NumType` co-occurred: <tt><a href="pt_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt> (7; 88%), <tt><a href="pt_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (6; 75%).

`NOUN` tokens may have the following values of `NumType`:

* `Ord` (8; 100% of non-empty `NumType`): <em>º, segunda, primeiros</em>
* `EMPTY` (56582): <em>anos, ano, dia, r, presidente, pessoas, acordo, cidade, governo, tempo</em>

### `DET`

2 <tt><a href="pt_gsd-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="pt_gsd-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (2; 100%), <tt><a href="pt_gsd-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (2; 100%), <tt><a href="pt_gsd-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (2; 100%), <tt><a href="pt_gsd-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (2; 100%).

`DET` tokens may have the following values of `NumType`:

* `Card` (2; 100% of non-empty `NumType`): <em>a, uma</em>
* `EMPTY` (47600): <em>o, a, os, as, um, uma, sua, seu, seus, esta</em>

### `PROPN`

2 <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> tokens (0% of all `PROPN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PROPN` and `NumType` co-occurred: <tt><a href="pt_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2; 100%).

`PROPN` tokens may have the following values of `NumType`:

* `Ord` (2; 100% of non-empty `NumType`): <em>Primeira, Terceira</em>
* `EMPTY` (32277): <em>feira, Brasil, São, Paulo, rio, Nacional, Federal, Estado, janeiro, quinta</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="pt_gsd-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (530; 100%),
<tt>NUM --[<tt><a href="pt_gsd-dep-conj.html">conj</a></tt>]--> NUM</tt> (271; 100%),
<tt>NUM --[<tt><a href="pt_gsd-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (193; 100%),
<tt>NUM --[<tt><a href="pt_gsd-dep-flat.html">flat</a></tt>]--> NUM</tt> (62; 100%),
<tt>NUM --[<tt><a href="pt_gsd-dep-appos.html">appos</a></tt>]--> NUM</tt> (18; 100%),
<tt>NUM --[<tt><a href="pt_gsd-dep-dep.html">dep</a></tt>]--> NUM</tt> (3; 100%),
<tt>ADJ --[<tt><a href="pt_gsd-dep-conj.html">conj</a></tt>]--> ADJ</tt> (2; 100%).

