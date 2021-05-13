---
layout: base
title:  'Statistics of NumType in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

494 tokens (2%) have a non-empty value of `NumType`.
150 types (4%) occur at least once with a non-empty value of `NumType`.
143 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="fr_partut-pos-NUM.html">NUM</a></tt> (425; 1% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> (66; 0% instances), <tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (3; 0% instances).

### `NUM`

425 <tt><a href="fr_partut-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (425; 100% of non-empty `NumType`): <em>1, 2, deux, 3, 6, 2000, 2002, 1999, 2001, 2005</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (131) occur only with one value of `NumType`.

### `ADJ`

66 <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> tokens (4% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="fr_partut-feat-Number.html">Number</a></tt><tt>=Sing</tt> (59; 89%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (66; 100% of non-empty `NumType`): <em>premier, première, dernier, dernière, 1er, sixième, troisième, derniers, I, III</em>
* `EMPTY` (1784): <em>présent, européen, présente, structurels, grande, technique, communautaire, dangereuses, possible, telle</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (12) occur only with one value of `NumType`.

### `PRON`

3 <tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> tokens (0% of all `PRON` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PRON` and `NumType` co-occurred: <tt><a href="fr_partut-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (3; 100%), <tt><a href="fr_partut-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (3; 100%), <tt><a href="fr_partut-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (3; 100%), <tt><a href="fr_partut-feat-Number.html">Number</a></tt><tt>=Plur</tt> (2; 67%).

`PRON` tokens may have the following values of `NumType`:

* `Ord` (3; 100% of non-empty `NumType`): <em>derniers, premier, premiers</em>
* `EMPTY` (1608): <em>qui, nous, il, je, vous, ce, s', se, c', on</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="fr_partut-dep-flat.html">flat</a></tt>]--> NUM</tt> (34; 100%),
<tt>NUM --[<tt><a href="fr_partut-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (33; 100%),
<tt>NUM --[<tt><a href="fr_partut-dep-conj.html">conj</a></tt>]--> NUM</tt> (13; 100%),
<tt>ADJ --[<tt><a href="fr_partut-dep-obl.html">obl</a></tt>]--> ADJ</tt> (1; 100%),
<tt>NUM --[<tt><a href="fr_partut-dep-goeswith.html">goeswith</a></tt>]--> NUM</tt> (1; 100%).

