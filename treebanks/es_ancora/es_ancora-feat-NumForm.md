---
layout: base
title:  'Statistics of NumForm in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Features: `NumForm`

This feature is language-specific.
It occurs with 3 different values: `Digit`, `Roman`, `Word`.

9203 tokens (2%) have a non-empty value of `NumForm`.
1641 types (4%) occur at least once with a non-empty value of `NumForm`.
1618 lemmas (6%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 3 part-of-speech tags: <tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (9179; 2% instances), <tt><a href="es_ancora-pos-SYM.html">SYM</a></tt> (20; 0% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> (4; 0% instances).

### `NUM`

9179 <tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="es_ancora-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (9171; 100%), <tt><a href="es_ancora-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (6319; 69%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (5473; 60% of non-empty `NumForm`): <em>20, 30, 10, 15, 12, 2, 25, 50, 16, 18</em>
* `Roman` (121; 1% of non-empty `NumForm`): <em>II, XX, V, VI, XXI, XVIII, XXIII, IX, XIX, XV</em>
* `Word` (3585; 39% of non-empty `NumForm`): <em>dos, ciento, tres, cinco, cuatro, seis, ambos, siete, diez, ocho</em>

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (1614) occur only with one value of `NumForm`.

### `SYM`

20 <tt><a href="es_ancora-pos-SYM.html">SYM</a></tt> tokens (5% of all `SYM` tokens) have a non-empty value of `NumForm`.

`SYM` tokens may have the following values of `NumForm`:

* `Digit` (20; 100% of non-empty `NumForm`): <em>%, -0,7%, -0,9%, -1,1%</em>

### `ADJ`

4 <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `ADJ` and `NumForm` co-occurred: <tt><a href="es_ancora-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (4; 100%), <tt><a href="es_ancora-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (4; 100%), <tt><a href="es_ancora-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (4; 100%).

`ADJ` tokens may have the following values of `NumForm`:

* `Digit` (4; 100% of non-empty `NumForm`): <em>1ro, 2do, 3ro, 4to</em>

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<tt><a href="es_ancora-dep-conj.html">conj</a></tt>]--> NUM</tt> (195; 98%),
<tt>NUM --[<tt><a href="es_ancora-dep-compound.html">compound</a></tt>]--> NUM</tt> (162; 96%),
<tt>NUM --[<tt><a href="es_ancora-dep-appos.html">appos</a></tt>]--> NUM</tt> (23; 96%),
<tt>NUM --[<tt><a href="es_ancora-dep-nmod.html">nmod</a></tt>]--> SYM</tt> (17; 100%),
<tt>NUM --[<tt><a href="es_ancora-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (12; 80%),
<tt>NUM --[<tt><a href="es_ancora-dep-list.html">list</a></tt>]--> NUM</tt> (10; 100%),
<tt>ADJ --[<tt><a href="es_ancora-dep-list.html">list</a></tt>]--> ADJ</tt> (3; 100%),
<tt>NUM --[<tt><a href="es_ancora-dep-obl.html">obl</a></tt>]--> NUM</tt> (1; 100%).

