---
layout: base
title:  'Statistics of NumType in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Dist`, `Ord`.

317 tokens (1%) have a non-empty value of `NumType`.
127 types (1%) occur at least once with a non-empty value of `NumType`.
45 lemmas (1%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="la_perseus-pos-NUM.html">NUM</a></tt> (167; 1% instances), <tt><a href="la_perseus-pos-DET.html">DET</a></tt> (79; 0% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (71; 0% instances).

### `NUM`

167 <tt><a href="la_perseus-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="la_perseus-feat-NumForm.html">NumForm</a></tt><tt>=Word</tt> (162; 97%), <tt><a href="la_perseus-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (105; 63%), <tt><a href="la_perseus-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (102; 61%), <tt><a href="la_perseus-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (102; 61%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (167; 100% of non-empty `NumType`): <em>quattuor, septem, duo, viginti, centum, decem, mille, millia, una, uno</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (26) occur only with one value of `NumType`.

### `DET`

79 <tt><a href="la_perseus-pos-DET.html">DET</a></tt> tokens (5% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="la_perseus-feat-Number-psor.html">Number[psor]</a></tt><tt>=EMPTY</tt> (79; 100%), <tt><a href="la_perseus-feat-Person-psor.html">Person[psor]</a></tt><tt>=EMPTY</tt> (79; 100%), <tt><a href="la_perseus-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (79; 100%), <tt><a href="la_perseus-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (79; 100%), <tt><a href="la_perseus-feat-Number.html">Number</a></tt><tt>=Plur</tt> (64; 81%).

`DET` tokens may have the following values of `NumType`:

* `Card` (79; 100% of non-empty `NumType`): <em>multa, paucis, multarum, plura, plus, multi, multis, multos, aliquot, multum</em>
* `EMPTY` (1645): <em>haec, hoc, illa, ille, illi, mea, ipse, omnia, suis, illum</em>

### `ADJ`

71 <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> tokens (3% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="la_perseus-feat-Number.html">Number</a></tt><tt>=Sing</tt> (52; 73%).

`ADJ` tokens may have the following values of `NumType`:

* `Dist` (12; 17% of non-empty `NumType`): <em>singulas, singulos, binas, binos, quaternum, singula, singuli, singulis</em>
* `Ord` (59; 83% of non-empty `NumType`): <em>prima, primus, primo, quintum, secundum, primis, quartum, secunda, secundae, sextum</em>
* `EMPTY` (2061): <em>magna, publicae, publicam, magno, magnum, publica, magnam, mala, p, summa</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (15) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="la_perseus-dep-flat.html">flat</a></tt>]--> NUM</tt> (6; 100%),
<tt>NUM --[<tt><a href="la_perseus-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (6; 100%),
<tt>NUM --[<tt><a href="la_perseus-dep-conj.html">conj</a></tt>]--> NUM</tt> (4; 100%),
<tt>DET --[<tt><a href="la_perseus-dep-nsubj.html">nsubj</a></tt>]--> NUM</tt> (1; 100%).

