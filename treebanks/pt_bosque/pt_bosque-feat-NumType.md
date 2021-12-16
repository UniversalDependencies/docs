---
layout: base
title:  'Statistics of NumType in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Features: `NumType`

This feature is universal.
It occurs with 6 different values: `Card`, `Frac`, `Mult`, `Ord`, `Range`, `Sets`.

5435 tokens (2%) have a non-empty value of `NumType`.
967 types (4%) occur at least once with a non-empty value of `NumType`.
912 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (4641; 2% instances), <tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt> (789; 0% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="pt_bosque-pos-DET.html">DET</a></tt> (2; 0% instances).

### `NUM`

4641 <tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (4490; 97% of non-empty `NumType`): <em>um, dois, três, milhões, mil, uma, duas, quatro, cinco, 15</em>
* `Frac` (6; 0% of non-empty `NumType`): <em>meia, meio</em>
* `Mult` (132; 3% of non-empty `NumType`): <em>cento</em>
* `Ord` (10; 0% of non-empty `NumType`): <em>1º, 2º, II, IX, 1., 2., 4ª, I, XVII, quinta</em>
* `Range` (2; 0% of non-empty `NumType`): <em>07.00-09.00, 10.00-12.00</em>
* `Sets` (1; 0% of non-empty `NumType`): <em>dúzia</em>
* `EMPTY` (6): <em>13, 97, VIII, X, dezenas, milhares</em>

<table>
  <tr><th>Paradigm <i>meio</i></th><th><tt>Card</tt></th><th><tt>Frac</tt></th></tr>
  <tr><td><tt></tt></td><td><em>meio, meia</em></td><td><em>meio</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (834) occur only with one value of `NumType`.

### `ADJ`

789 <tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt> tokens (7% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="pt_bosque-feat-Number.html">Number</a></tt><tt>=Sing</tt> (664; 84%), <tt><a href="pt_bosque-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (467; 59%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (789; 100% of non-empty `NumType`): <em>primeiro, primeira, último, última, segundo, últimos, segunda, primeiros, terceiro, terceira</em>
* `EMPTY` (10595): <em>maior, grande, novo, nova, mesmo, nacional, grandes, melhor, passado, mesma</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (79) occur only with one value of `NumType`.

### `NOUN`

3 <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NOUN` and `NumType` co-occurred: <tt><a href="pt_bosque-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (3; 100%), <tt><a href="pt_bosque-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3; 100%).

`NOUN` tokens may have the following values of `NumType`:

* `Ord` (3; 100% of non-empty `NumType`): <em>quarto, primeiro</em>
* `EMPTY` (41359): <em>anos, presidente, ano, dia, país, pessoas, estado, parte, tempo, contos</em>

### `DET`

2 <tt><a href="pt_bosque-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="pt_bosque-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (2; 100%), <tt><a href="pt_bosque-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (2; 100%), <tt><a href="pt_bosque-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (2; 100%).

`DET` tokens may have the following values of `NumType`:

* `Card` (2; 100% of non-empty `NumType`): <em>uma, um</em>
* `EMPTY` (34860): <em>o, a, os, as, um, uma, sua, seu, este, esta</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="pt_bosque-dep-flat.html">flat</a></tt>]--> NUM</tt> (446; 99%),
<tt>NUM --[<tt><a href="pt_bosque-dep-conj.html">conj</a></tt>]--> NUM</tt> (113; 100%),
<tt>NUM --[<tt><a href="pt_bosque-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (51; 100%),
<tt>ADJ --[<tt><a href="pt_bosque-dep-conj.html">conj</a></tt>]--> ADJ</tt> (17; 89%),
<tt>NUM --[<tt><a href="pt_bosque-dep-appos.html">appos</a></tt>]--> NUM</tt> (10; 91%),
<tt>NUM --[<tt><a href="pt_bosque-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (9; 90%),
<tt>NUM --[<tt><a href="pt_bosque-dep-fixed.html">fixed</a></tt>]--> NUM</tt> (4; 100%),
<tt>NUM --[<tt><a href="pt_bosque-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (3; 100%),
<tt>ADJ --[<tt><a href="pt_bosque-dep-amod.html">amod</a></tt>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<tt><a href="pt_bosque-dep-nmod.html">nmod</a></tt>]--> ADJ</tt> (1; 100%).

