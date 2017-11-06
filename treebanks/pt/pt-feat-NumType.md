---
layout: base
title:  'Statistics of NumType in UD_Portuguese'
udver: '2'
---

## Treebank Statistics: UD_Portuguese: Features: `NumType`

This feature is universal.
It occurs with 6 different values: `Card`, `Frac`, `Mult`, `Ord`, `Range`, `Sets`.

5110 tokens (2%) have a non-empty value of `NumType`.
946 types (4%) occur at least once with a non-empty value of `NumType`.
898 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="pt-pos-NUM.html">NUM</a></tt> (4313; 2% instances), <tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (797; 0% instances).

### `NUM`

4313 <tt><a href="pt-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (4172; 97% of non-empty `NumType`): <em>um, dois, três, mil, uma, duas, quatro, cinco, 15, 30</em>
* `Frac` (5; 0% of non-empty `NumType`): <em>meia</em>
* `Mult` (132; 3% of non-empty `NumType`): <em>cento</em>
* `Ord` (1; 0% of non-empty `NumType`): <em>quinta</em>
* `Range` (2; 0% of non-empty `NumType`): <em>07.00-09.00, 10.00-12.00</em>
* `Sets` (1; 0% of non-empty `NumType`): <em>dúzia</em>
* `EMPTY` (2): <em>meia, mil</em>

<table>
  <tr><th>Paradigm <i>dúzia</i></th><th><tt>Card</tt></th><th><tt>Sets</tt></th></tr>
  <tr><td><tt></tt></td><td><em>dúzia</em></td><td><em>dúzia</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (815) occur only with one value of `NumType`.

### `ADJ`

797 <tt><a href="pt-pos-ADJ.html">ADJ</a></tt> tokens (7% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="pt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (674; 85%), <tt><a href="pt-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (469; 59%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (797; 100% of non-empty `NumType`): <em>primeiro, primeira, último, última, segundo, últimos, segunda, primeiros, terceiro, terceira</em>
* `EMPTY` (10925): <em>maior, novo, grande, nova, mesmo, melhor, grandes, nacional, passado, mesma</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (82) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="pt-dep-conj.html">conj</a></tt>]--> NUM</tt> (107; 100%),
<tt>NUM --[<tt><a href="pt-dep-dep.html">dep</a></tt>]--> NUM</tt> (54; 96%),
<tt>NUM --[<tt><a href="pt-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (54; 100%),
<tt>NUM --[<tt><a href="pt-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (49; 100%),
<tt>ADJ --[<tt><a href="pt-dep-conj.html">conj</a></tt>]--> ADJ</tt> (17; 85%),
<tt>NUM --[<tt><a href="pt-dep-fixed.html">fixed</a></tt>]--> NUM</tt> (2; 100%),
<tt>ADJ --[<tt><a href="pt-dep-compound.html">compound</a></tt>]--> ADJ</tt> (1; 100%),
<tt>NUM --[<tt><a href="pt-dep-appos.html">appos</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="pt-dep-compound.html">compound</a></tt>]--> NUM</tt> (1; 100%).

