---
layout: base
title:  'Statistics of NumType in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Features: `NumType`

This feature is universal.
It occurs with 6 different values: `Card`, `Frac`, `Mult`, `Ord`, `Range`, `Sets`.

5110 tokens (2%) have a non-empty value of `NumType`.
946 types (4%) occur at least once with a non-empty value of `NumType`.
898 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 5 part-of-speech tags: <tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (4297; 2% instances), <tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt> (796; 0% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (10; 0% instances), <tt><a href="pt_bosque-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (3; 0% instances).

### `NUM`

4297 <tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (4155; 97% of non-empty `NumType`): <em>um, dois, três, mil, uma, duas, quatro, cinco, 15, 30</em>
* `Frac` (5; 0% of non-empty `NumType`): <em>meia</em>
* `Mult` (132; 3% of non-empty `NumType`): <em>cento</em>
* `Ord` (2; 0% of non-empty `NumType`): <em>quinta, XVII</em>
* `Range` (2; 0% of non-empty `NumType`): <em>07.00-09.00, 10.00-12.00</em>
* `Sets` (1; 0% of non-empty `NumType`): <em>dúzia</em>
* `EMPTY` (12): <em>3, um, 011, 14, 185/60, 2, 4, 94, meia, mil</em>

<table>
  <tr><th>Paradigm <i>dúzia</i></th><th><tt>Card</tt></th><th><tt>Sets</tt></th></tr>
  <tr><td><tt></tt></td><td><em>dúzia</em></td><td><em>dúzia</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (812) occur only with one value of `NumType`.

### `ADJ`

796 <tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt> tokens (7% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="pt_bosque-feat-Number.html">Number</a></tt><tt>=Sing</tt> (673; 85%), <tt><a href="pt_bosque-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (468; 59%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (796; 100% of non-empty `NumType`): <em>primeiro, primeira, último, última, segundo, últimos, segunda, primeiros, terceiro, terceira</em>
* `EMPTY` (10484): <em>maior, novo, grande, nova, mesmo, melhor, grandes, nacional, passado, mesma</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (82) occur only with one value of `NumType`.

### `NOUN`

10 <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NOUN` and `NumType` co-occurred: <tt><a href="pt_bosque-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (10; 100%), <tt><a href="pt_bosque-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (10; 100%).

`NOUN` tokens may have the following values of `NumType`:

* `Card` (10; 100% of non-empty `NumType`): <em>um, 11, 1200, 156.942, 86.871, onze, quatro, três</em>
* `EMPTY` (41896): <em>anos, presidente, milhões, ano, dia, país, pessoas, estado, parte, tempo</em>

### `DET`

4 <tt><a href="pt_bosque-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="pt_bosque-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (4; 100%), <tt><a href="pt_bosque-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (4; 100%), <tt><a href="pt_bosque-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (4; 100%), <tt><a href="pt_bosque-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (4; 100%).

`DET` tokens may have the following values of `NumType`:

* `Card` (4; 100% of non-empty `NumType`): <em>um, uma</em>
* `EMPTY` (34928): <em>o, a, os, as, um, uma, sua, seu, este, esta</em>

### `PROPN`

3 <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> tokens (0% of all `PROPN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PROPN` and `NumType` co-occurred: <tt><a href="pt_bosque-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (3; 100%), <tt><a href="pt_bosque-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (3; 100%).

`PROPN` tokens may have the following values of `NumType`:

* `Card` (3; 100% of non-empty `NumType`): <em>1.560, 1.565, Doze</em>
* `EMPTY` (19007): <em>Paulo, São, Portugal, Brasil, José, Porto, Nacional, Governo, Lisboa, João</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="pt_bosque-dep-conj.html">conj</a></tt>]--> NUM</tt> (105; 100%),
<tt>NUM --[<tt><a href="pt_bosque-dep-dep.html">dep</a></tt>]--> NUM</tt> (54; 96%),
<tt>NUM --[<tt><a href="pt_bosque-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (54; 100%),
<tt>NUM --[<tt><a href="pt_bosque-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (48; 100%),
<tt>ADJ --[<tt><a href="pt_bosque-dep-conj.html">conj</a></tt>]--> ADJ</tt> (17; 89%),
<tt>NUM --[<tt><a href="pt_bosque-dep-fixed.html">fixed</a></tt>]--> NUM</tt> (2; 100%),
<tt>ADJ --[<tt><a href="pt_bosque-dep-amod.html">amod</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="pt_bosque-dep-compound.html">compound</a></tt>]--> ADJ</tt> (1; 100%),
<tt>NOUN --[<tt><a href="pt_bosque-dep-conj.html">conj</a></tt>]--> NOUN</tt> (1; 100%),
<tt>NUM --[<tt><a href="pt_bosque-dep-appos.html">appos</a></tt>]--> NUM</tt> (1; 100%).

