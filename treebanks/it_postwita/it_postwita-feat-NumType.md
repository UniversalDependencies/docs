---
layout: base
title:  'Statistics of NumType in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

1626 tokens (1%) have a non-empty value of `NumType`.
412 types (2%) occur at least once with a non-empty value of `NumType`.
386 lemmas (3%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="it_postwita-pos-NUM.html">NUM</a></tt> (1420; 1% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt> (206; 0% instances).

### `NUM`

1420 <tt><a href="it_postwita-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (1420; 100% of non-empty `NumType`): <em>2, 3, 1, due, 5, 4, 7, 6, 10, 20</em>
* `EMPTY` (2): <em>100, 5</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (370) occur only with one value of `NumType`.

### `ADJ`

206 <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt> tokens (4% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="it_postwita-feat-Number.html">Number</a></tt><tt>=Sing</tt> (142; 69%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (206; 100% of non-empty `NumType`): <em>primo, prima, primi, prime, ennesimo, seconda, terzo, 1°, terza, ennesima</em>
* `EMPTY` (4790): <em>nuovo, grande, bella, buon, buona, vero, nuova, giusto, politica, italiana</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (17) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="it_postwita-dep-flat.html">flat</a></tt>]--> NUM</tt> (36; 97%),
<tt>NUM --[<tt><a href="it_postwita-dep-conj.html">conj</a></tt>]--> NUM</tt> (22; 100%),
<tt>NUM --[<tt><a href="it_postwita-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (10; 100%),
<tt>NUM --[<tt><a href="it_postwita-dep-obl.html">obl</a></tt>]--> NUM</tt> (3; 100%),
<tt>NUM --[<tt><a href="it_postwita-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (2; 100%),
<tt>ADJ --[<tt><a href="it_postwita-dep-conj.html">conj</a></tt>]--> ADJ</tt> (1; 100%),
<tt>NUM --[<tt><a href="it_postwita-dep-appos.html">appos</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="it_postwita-dep-fixed.html">fixed</a></tt>]--> NUM</tt> (1; 100%).

