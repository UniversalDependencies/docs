---
layout: base
title:  'Statistics of NumForm in UD_Spanish-GSD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-GSD: Features: `NumForm`

This feature is language-specific.
It occurs with 3 different values: `Digit`, `Roman`, `Word`.

11049 tokens (3%) have a non-empty value of `NumForm`.
2401 types (5%) occur at least once with a non-empty value of `NumForm`.
2280 lemmas (7%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="es_gsd-pos-NUM.html">NUM</a></tt> (11020; 3% instances), <tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt> (29; 0% instances).

### `NUM`

11020 <tt><a href="es_gsd-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="es_gsd-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (11019; 100%), <tt><a href="es_gsd-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (9399; 85%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (8950; 81% of non-empty `NumForm`): <em>2010, 0, 3, 1, 2, 10, 4, 5, 20, 2011</em>
* `Roman` (429; 4% of non-empty `NumForm`): <em>II, I, III, XIX, XX, IV, V, XVIII, XVI, XV</em>
* `Word` (1641; 15% of non-empty `NumForm`): <em>dos, tres, cuatro, cinco, seis, un, mil, siete, ocho, una</em>

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (2277) occur only with one value of `NumForm`.

### `ADJ`

29 <tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `ADJ` and `NumForm` co-occurred: <tt><a href="es_gsd-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (27; 93%), <tt><a href="es_gsd-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (27; 93%).

`ADJ` tokens may have the following values of `NumForm`:

* `Digit` (2; 7% of non-empty `NumForm`): <em>2º, 3º</em>
* `Roman` (27; 93% of non-empty `NumForm`): <em>II, I, X, VII, III, VIII, Il, VI, XIII</em>

`NumForm` seems to be **lexical feature** of `ADJ`. 100% lemmas (11) occur only with one value of `NumForm`.

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<tt><a href="es_gsd-dep-conj.html">conj</a></tt>]--> NUM</tt> (348; 99%),
<tt>NUM --[<tt><a href="es_gsd-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (83; 83%),
<tt>NUM --[<tt><a href="es_gsd-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (71; 62%),
<tt>NUM --[<tt><a href="es_gsd-dep-dep.html">dep</a></tt>]--> NUM</tt> (49; 100%),
<tt>NUM --[<tt><a href="es_gsd-dep-appos.html">appos</a></tt>]--> NUM</tt> (12; 75%),
<tt>NUM --[<tt><a href="es_gsd-dep-compound.html">compound</a></tt>]--> NUM</tt> (1; 100%).

