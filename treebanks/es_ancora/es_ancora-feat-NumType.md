---
layout: base
title:  'Statistics of NumType in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Frac`, `Ord`.

7164 tokens (1%) have a non-empty value of `NumType`.
673 types (2%) occur at least once with a non-empty value of `NumType`.
605 lemmas (2%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (4904; 1% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> (1956; 0% instances), <tt><a href="es_ancora-pos-SYM.html">SYM</a></tt> (288; 0% instances), <tt><a href="es_ancora-pos-DET.html">DET</a></tt> (16; 0% instances).

### `NUM`

4904 <tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> tokens (56% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="es_ancora-feat-NumForm.html">NumForm</a></tt><tt>=EMPTY</tt> (3505; 71%), <tt><a href="es_ancora-feat-Number.html">Number</a></tt><tt>=Plur</tt> (2735; 56%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (4896; 100% of non-empty `NumType`): <em>dos, ciento, tres, cinco, cuatro, seis, ambos, siete, diez, ocho</em>
* `Frac` (8; 0% of non-empty `NumType`): <em>cada, 1-0</em>
* `EMPTY` (3863): <em>20, 30, 10, 15, 12, 18, 24, 50, 17, 16</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (429) occur only with one value of `NumType`.

### `ADJ`

1956 <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> tokens (5% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="es_ancora-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (1956; 100%), <tt><a href="es_ancora-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1534; 78%), <tt><a href="es_ancora-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (1099; 56%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (1956; 100% of non-empty `NumType`): <em>primer, primera, últimos, segunda, segundo, último, última, primeros, últimas, tercera</em>
* `EMPTY` (34488): <em>pasado, gran, nuevo, mayor, próximo, nueva, mejor, general, ex, posible</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (27) occur only with one value of `NumType`.

### `SYM`

288 <tt><a href="es_ancora-pos-SYM.html">SYM</a></tt> tokens (59% of all `SYM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `SYM` and `NumType` co-occurred: <tt><a href="es_ancora-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (288; 100%).

`SYM` tokens may have the following values of `NumType`:

* `Frac` (288; 100% of non-empty `NumType`): <em>%, 50%, 10%, 30%, 60%, 20%, 80%, 25%, 5%, 3%</em>
* `EMPTY` (199): <em>', 20%, 25%, 0,2%, 10%, 15%, 2,2%, 3,1%, 3,9%, 40%</em>

`NumType` seems to be **lexical feature** of `SYM`. 100% lemmas (155) occur only with one value of `NumType`.

### `DET`

16 <tt><a href="es_ancora-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="es_ancora-feat-Definite.html">Definite</a></tt><tt>=Ind</tt> (16; 100%), <tt><a href="es_ancora-feat-Number.html">Number</a></tt><tt>=Sing</tt> (16; 100%), <tt><a href="es_ancora-feat-PronType.html">PronType</a></tt><tt>=Art</tt> (16; 100%), <tt><a href="es_ancora-feat-Gender.html">Gender</a></tt><tt>=Fem</tt> (15; 94%).

`DET` tokens may have the following values of `NumType`:

* `Card` (16; 100% of non-empty `NumType`): <em>una, Un</em>
* `EMPTY` (74895): <em>la, el, los, un, las, una, su, sus, lo, este</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="es_ancora-dep-compound.html">compound</a></tt>]--> NUM</tt> (604; 96%),
<tt>NUM --[<tt><a href="es_ancora-dep-conj.html">conj</a></tt>]--> NUM</tt> (65; 68%),
<tt>ADJ --[<tt><a href="es_ancora-dep-conj.html">conj</a></tt>]--> ADJ</tt> (16; 76%),
<tt>SYM --[<tt><a href="es_ancora-dep-conj.html">conj</a></tt>]--> SYM</tt> (12; 92%),
<tt>SYM --[<tt><a href="es_ancora-dep-appos.html">appos</a></tt>]--> SYM</tt> (2; 100%),
<tt>ADJ --[<tt><a href="es_ancora-dep-acl.html">acl</a></tt>]--> ADJ</tt> (1; 100%),
<tt>SYM --[<tt><a href="es_ancora-dep-nmod.html">nmod</a></tt>]--> SYM</tt> (1; 100%),
<tt>SYM --[<tt><a href="es_ancora-dep-parataxis.html">parataxis</a></tt>]--> SYM</tt> (1; 100%).

