---
layout: feature
title: 'NumType'
shortdef: 'numeral type'
---

This document is a placeholder for the language-specific documentation
for `NumType`.

--------------------------------------------------------------------------------

## Treebank Statistics

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

7750 tokens (4%) have a non-empty value of `NumType`.
1070 types (4%) occur at least once with a non-empty value of `NumType`.
961 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 7 part-of-speech tags: [pt-pos/NUM]() (4042; 2% tokens), [pt-pos/ADV]() (1307; 1% tokens), [pt-pos/DET]() (1147; 1% tokens), [pt-pos/ADJ]() (791; 0% tokens), [pt-pos/PRON]() (458; 0% tokens), [pt-pos/NOUN]() (4; 0% tokens), [pt-pos/PROPN]() (1; 0% tokens).

### `NUM`

4042 [pt-pos/NUM]() tokens (97% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="Gender.html">Gender</a>=Masc</tt> (3309; 82%), <tt><a href="Number.html">Number</a>=Plur</tt> (3153; 78%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (4042; 100% of non-empty `NumType`): _um, dois, três, mil, uma, duas, quatro, cinco, 15, 30_
* `EMPTY` (120): _1, 0, 1992, 2, 23, mil, três, 10, 14, 5_

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (806) occur only with one value of `NumType`.

### `ADV`

1307 [pt-pos/ADV]() tokens (14% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="PronType.html">PronType</a>=Ind,Neg,Tot</tt> (1296; 99%).

`ADV` tokens may have the following values of `NumType`:

* `Card` (1307; 100% of non-empty `NumType`): _mais, muito, bem, quase, mesmo, mais_de, pouco, menos, pelo_menos, bastante_
* `EMPTY` (8182): _não, como, também, já, ontem, ainda, quando, só, depois, onde_

`NumType` seems to be **lexical feature** of `ADV`. 100% lemmas (40) occur only with one value of `NumType`.

### `DET`

1147 [pt-pos/DET]() tokens (3% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (1147; 100%), <tt><a href="PronType.html">PronType</a>=Ind,Neg,Tot</tt> (1141; 99%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (647; 56%), <tt><a href="Number.html">Number</a>=Plur</tt> (626; 55%).

`DET` tokens may have the following values of `NumType`:

* `Card` (1147; 100% of non-empty `NumType`): _qualquer, mais, cada, alguns, algumas, todos, todos_os, muitos, vários, todo_
* `EMPTY` (32073): _o, a, os, as, um, uma, sua, seu, este, esta_

`NumType` seems to be **lexical feature** of `DET`. 100% lemmas (34) occur only with one value of `NumType`.

### `ADJ`

791 [pt-pos/ADJ]() tokens (7% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (670; 85%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (464; 59%).

`ADJ` tokens may have the following values of `NumType`:

* `Card` (1; 0% of non-empty `NumType`): _primeiro_
* `Ord` (790; 100% of non-empty `NumType`): _primeiro, primeira, último, última, segundo, últimos, segunda, primeiros, terceiro, terceira_
* `EMPTY` (9917): _maior, novo, grande, nova, grandes, melhor, nacional, mundial, responsável, boa_

<table>
  <tr><th>Paradigm <i>primeiro</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><i>primeiro</i></td><td><i>primeiro</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><i>primeiros</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><i>primeira, primeiro</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><i>primeiras</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td></td><td><i>primeira</i></td></tr>
</table>

`NumType` seems to be **lexical feature** of `ADJ`. 99% lemmas (82) occur only with one value of `NumType`.

### `PRON`

458 [pt-pos/PRON]() tokens (6% of all `PRON` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PRON` and `NumType` co-occurred: <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (458; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (458; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (458; 100%), <tt><a href="PronType.html">PronType</a>=Ind,Neg,Tot</tt> (434; 95%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (388; 85%), <tt><a href="Number.html">Number</a>=Sing</tt> (293; 64%).

`PRON` tokens may have the following values of `NumType`:

* `Card` (458; 100% of non-empty `NumType`): _tudo, nada, todos, mais, pouco, muito, algo, alguns, muitos, ambos_
* `EMPTY` (6648): _que, se, o, ele, o_que, isso, os, quem, lhe, a_

`NumType` seems to be **lexical feature** of `PRON`. 100% lemmas (34) occur only with one value of `NumType`.

### `NOUN`

4 [pt-pos/NOUN]() tokens (0% of all `NOUN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NOUN` and `NumType` co-occurred: <tt><a href="Gender.html">Gender</a>=Masc</tt> (3; 75%), <tt><a href="Number.html">Number</a>=Plur</tt> (3; 75%).

`NOUN` tokens may have the following values of `NumType`:

* `Card` (3; 75% of non-empty `NumType`): _mil, 66'_
* `Ord` (1; 25% of non-empty `NumType`): _2ª_
* `EMPTY` (39888): _anos, milhões, ano, dia, presidente, país, US$, pessoas, contos, por_cento_

### `PROPN`

1 [pt-pos/PROPN]() tokens (0% of all `PROPN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PROPN` and `NumType` co-occurred: <tt><a href="Gender.html">Gender</a>=Masc</tt> (1; 100%), <tt><a href="Number.html">Number</a>=Plur</tt> (1; 100%).

`PROPN` tokens may have the following values of `NumType`:

* `Card` (1; 100% of non-empty `NumType`): _Doze_
* `EMPTY` (11705): _Portugal, São_Paulo, Brasil, Governo, EUA, Estados_Unidos, PÚBLICO, Lisboa, Folha, Rio_

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`: `NUM --[compound]--> NUM` (130; 100%), `NUM --[conj]--> NUM` (96; 99%), `ADJ --[conj]--> ADJ` (17; 89%), `DET --[advmod]--> ADV` (4; 57%), `PRON --[conj]--> PRON` (3; 100%), `DET --[nummod]--> NUM` (3; 60%), `NOUN --[compound]--> NUM` (2; 100%), `ADV --[cop]--> PRON` (1; 100%), `ADV --[dobj]--> PRON` (1; 100%), `NUM --[case]--> ADV` (1; 100%).

