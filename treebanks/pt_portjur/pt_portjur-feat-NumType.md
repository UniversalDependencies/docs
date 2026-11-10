---
layout: base
title:  'Statistics of NumType in UD_Portuguese-PortJur'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PortJur: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

2037 tokens (2%) have a non-empty value of `NumType`.
524 types (6%) occur at least once with a non-empty value of `NumType`.
516 lemmas (9%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="pt_portjur-pos-NUM.html">NUM</a></tt> (1951; 2% instances), <tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt> (86; 0% instances).

### `NUM`

1951 <tt><a href="pt_portjur-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (1725; 88% of non-empty `NumType`): <em>três, I, II, cinco, III, IV, um, 1, 10, 4</em>
* `Ord` (226; 12% of non-empty `NumType`): <em>1º, 3º, 2º, 4º, 5º, 6º, 7º, 9º, 8º, 3o</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (503) occur only with one value of `NumType`.

### `ADJ`

86 <tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt> tokens (1% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="pt_portjur-feat-Number.html">Number</a></tt><tt>=Sing</tt> (63; 73%), <tt><a href="pt_portjur-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (46; 53%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (86; 100% of non-empty `NumType`): <em>primeiro, 1º, primeira, segundo, 1ª, segunda, 28ª, 3ª, décimo, terceiro</em>
* `EMPTY` (7365): <em>familiar, idosa, doméstica, judicial, público, social, civil, especial, competente, policial</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (16) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="pt_portjur-dep-appos.html">appos</a></tt>]--> NUM</tt> (155; 100%),
<tt>NUM --[<tt><a href="pt_portjur-dep-conj.html">conj</a></tt>]--> NUM</tt> (101; 94%),
<tt>NUM --[<tt><a href="pt_portjur-dep-flat.html">flat</a></tt>]--> NUM</tt> (55; 100%),
<tt>NUM --[<tt><a href="pt_portjur-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (36; 100%),
<tt>NUM --[<tt><a href="pt_portjur-dep-nmod-spec.html">nmod:spec</a></tt>]--> NUM</tt> (9; 75%),
<tt>ADJ --[<tt><a href="pt_portjur-dep-flat.html">flat</a></tt>]--> ADJ</tt> (3; 100%),
<tt>NUM --[<tt><a href="pt_portjur-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="pt_portjur-dep-obl.html">obl</a></tt>]--> ADJ</tt> (1; 100%).

