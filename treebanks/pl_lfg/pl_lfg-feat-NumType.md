---
layout: base
title:  'Statistics of NumType in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Frac`.

1228 tokens (1%) have a non-empty value of `NumType`.
282 types (1%) occur at least once with a non-empty value of `NumType`.
199 lemmas (1%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="pl_lfg-pos-NUM.html">NUM</a></tt> (833; 1% instances), <tt><a href="pl_lfg-pos-DET.html">DET</a></tt> (395; 0% instances).

### `NUM`

833 <tt><a href="pl_lfg-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="pl_lfg-feat-Number.html">Number</a></tt><tt>=Plur</tt> (833; 100%), <tt><a href="pl_lfg-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (565; 68%), <tt><a href="pl_lfg-feat-Case.html">Case</a></tt><tt>=Acc</tt> (561; 67%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (828; 99% of non-empty `NumType`): <em>dwa, dwóch, dwie, trzy, cztery, trzech, obu, pięć, czterech, dwadzieścia</em>
* `Frac` (5; 1% of non-empty `NumType`): <em>pół</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (178) occur only with one value of `NumType`.

### `DET`

395 <tt><a href="pl_lfg-pos-DET.html">DET</a></tt> tokens (12% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="pl_lfg-feat-Number-psor.html">Number[psor]</a></tt><tt>=EMPTY</tt> (395; 100%), <tt><a href="pl_lfg-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (395; 100%), <tt><a href="pl_lfg-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (395; 100%), <tt><a href="pl_lfg-feat-Number.html">Number</a></tt><tt>=Plur</tt> (394; 100%), <tt><a href="pl_lfg-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (350; 89%), <tt><a href="pl_lfg-feat-Case.html">Case</a></tt><tt>=Acc</tt> (315; 80%), <tt><a href="pl_lfg-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (223; 56%).

`DET` tokens may have the following values of `NumType`:

* `Card` (395; 100% of non-empty `NumType`): <em>kilka, wielu, wiele, kilku, więcej, ile, parę, tyle, dużo, sporo</em>
* `EMPTY` (2806): <em>ten, tym, tej, tego, te, ta, takie, to, tych, swoje</em>

`NumType` seems to be **lexical feature** of `DET`. 100% lemmas (21) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="pl_lfg-dep-appos.html">appos</a></tt>]--> NUM</tt> (14; 100%),
<tt>NUM --[<tt><a href="pl_lfg-dep-conj.html">conj</a></tt>]--> NUM</tt> (11; 92%),
<tt>DET --[<tt><a href="pl_lfg-dep-conj.html">conj</a></tt>]--> DET</tt> (2; 100%),
<tt>NUM --[<tt><a href="pl_lfg-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (1; 100%).

