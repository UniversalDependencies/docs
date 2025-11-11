---
layout: base
title:  'Statistics of NumType in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Frac`, `Ord`.

3604 tokens (2%) have a non-empty value of `NumType`.
626 types (3%) occur at least once with a non-empty value of `NumType`.
600 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt> (3299; 2% instances), <tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (305; 0% instances).

### `NUM`

3299 <tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="pt_porttinari-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (2649; 80%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (3208; 97% of non-empty `NumType`): <em>três, mil, um, dois, uma, 20, quatro, 30, 2016, 2018</em>
* `Frac` (10; 0% of non-empty `NumType`): <em>meia, meio</em>
* `Ord` (81; 2% of non-empty `NumType`): <em>primeiro, primeira, 1º, segundo, segunda, terceiro, primeiros, 2ª, 3º, quinto</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (569) occur only with one value of `NumType`.

### `ADJ`

305 <tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> tokens (4% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="pt_porttinari-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (305; 100%), <tt><a href="pt_porttinari-feat-Number.html">Number</a></tt><tt>=Sing</tt> (283; 93%), <tt><a href="pt_porttinari-feat-Gender.html">Gender</a></tt><tt>=Fem</tt> (168; 55%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (305; 100% of non-empty `NumType`): <em>primeira, primeiro, segundo, segunda, terceira, primeiras, quarta, terceiro, primeiros, quarto</em>
* `EMPTY` (8286): <em>maior, grande, melhor, novo, nova, últimos, brasileira, possível, muitos, bom</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (38) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="pt_porttinari-dep-flat.html">flat</a></tt>]--> NUM</tt> (90; 100%),
<tt>NUM --[<tt><a href="pt_porttinari-dep-conj.html">conj</a></tt>]--> NUM</tt> (65; 98%),
<tt>NUM --[<tt><a href="pt_porttinari-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (33; 97%),
<tt>NUM --[<tt><a href="pt_porttinari-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (5; 83%),
<tt>NUM --[<tt><a href="pt_porttinari-dep-fixed.html">fixed</a></tt>]--> NUM</tt> (3; 100%),
<tt>NUM --[<tt><a href="pt_porttinari-dep-appos.html">appos</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="pt_porttinari-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (1; 100%).

