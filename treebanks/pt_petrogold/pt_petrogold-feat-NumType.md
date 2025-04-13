---
layout: base
title:  'Statistics of NumType in UD_Portuguese-PetroGold'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PetroGold: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Ord`, `Range`.

7554 tokens (3%) have a non-empty value of `NumType`.
1392 types (9%) occur at least once with a non-empty value of `NumType`.
1374 lemmas (13%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt> (7245; 3% instances), <tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (308; 0% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).

### `NUM`

7245 <tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt> tokens (99% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (7208; 99% of non-empty `NumType`): <em>dois, 1, 3, 2, 5, 10, duas, três, 4, 2005</em>
* `Ord` (32; 0% of non-empty `NumType`): <em>II.3.1, II.3.2, II.3.3, II.4.2, II.5.1, II.5.2, II.5.3, II.5.4, II.7.1.1, III.2</em>
* `Range` (5; 0% of non-empty `NumType`): <em>2.2.1, 2.4.1, 3.2.3.2, 3.2.7, 5-5-Viscosidade</em>
* `EMPTY` (45): <em>b, a, 1, 19, 2.3, 4, 8, II.1, II.2.3, II.3</em>

<table>
  <tr><th>Paradigm <i>2.2.1</i></th><th><tt>Card</tt></th><th><tt>Range</tt></th></tr>
  <tr><td><tt></tt></td><td><em>2.2.1</em></td><td><em>2.2.1</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (1328) occur only with one value of `NumType`.

### `ADJ`

308 <tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> tokens (2% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="pt_petrogold-feat-Number.html">Number</a></tt><tt>=Sing</tt> (265; 86%), <tt><a href="pt_petrogold-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (219; 71%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (308; 100% of non-empty `NumType`): <em>primeiro, segundo, segunda, primeira, último, primeiros, últimos, última, terceiro, 36º</em>
* `EMPTY` (16772): <em>maior, grande, menor, possível, magnético, diferentes, total, natural, magnética, presente</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (53) occur only with one value of `NumType`.

### `NOUN`

1 <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NOUN` and `NumType` co-occurred: <tt><a href="pt_petrogold-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (1; 100%), <tt><a href="pt_petrogold-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1; 100%).

`NOUN` tokens may have the following values of `NumType`:

* `Ord` (1; 100% of non-empty `NumType`): <em>20º</em>
* `EMPTY` (57561): <em>óleo, água, figura, fluido, petróleo, gás, fluidos, produção, área, argila</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="pt_petrogold-dep-conj.html">conj</a></tt>]--> NUM</tt> (433; 100%),
<tt>NUM --[<tt><a href="pt_petrogold-dep-flat.html">flat</a></tt>]--> NUM</tt> (66; 100%),
<tt>NUM --[<tt><a href="pt_petrogold-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (19; 100%),
<tt>NUM --[<tt><a href="pt_petrogold-dep-appos.html">appos</a></tt>]--> NUM</tt> (9; 100%),
<tt>NUM --[<tt><a href="pt_petrogold-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (6; 100%),
<tt>ADJ --[<tt><a href="pt_petrogold-dep-conj.html">conj</a></tt>]--> ADJ</tt> (3; 100%),
<tt>ADJ --[<tt><a href="pt_petrogold-dep-parataxis.html">parataxis</a></tt>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<tt><a href="pt_petrogold-dep-amod.html">amod</a></tt>]--> ADJ</tt> (1; 100%),
<tt>NUM --[<tt><a href="pt_petrogold-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (1; 100%).

