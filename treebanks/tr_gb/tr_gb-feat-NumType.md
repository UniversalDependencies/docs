---
layout: base
title:  'Statistics of NumType in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Dist`, `Ord`.

318 tokens (2%) have a non-empty value of `NumType`.
73 types (1%) occur at least once with a non-empty value of `NumType`.
44 lemmas (2%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (307; 2% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (11; 0% instances).

### `NUM`

307 <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> tokens (84% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="tr_gb-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (290; 94%), <tt><a href="tr_gb-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (286; 93%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (290; 94% of non-empty `NumType`): <em>iki, üç, beş, yüz, dört, on, bir, bin, dokuz, sekiz</em>
* `Dist` (17; 6% of non-empty `NumType`): <em>birer, ikişer, üçer, dörder, yüzer</em>
* `EMPTY` (58): <em>altıda, ikide, 9’da, biri, kaçta, 1994’te, 5’te, buçukta, ikiye, kaçı</em>

<table>
  <tr><th>Paradigm <i>iki</i></th><th><tt>Card</tt></th><th><tt>Dist</tt></th></tr>
  <tr><td><tt></tt></td><td><em>iki, İki, ikinci</em></td><td><em>ikişer</em></td></tr>
</table>

### `ADJ`

11 <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> tokens (1% of all `ADJ` tokens) have a non-empty value of `NumType`.

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (11; 100% of non-empty `NumType`): <em>ikinci, üçüncü, 18., Dördüncü, birinci, milyon, İki, İkinci</em>
* `EMPTY` (781): <em>var, yok, yeni, büyük, güzel, iyi, küçük, zor, önemli, lazım</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="tr_gb-dep-compound.html">compound</a></tt>]--> NUM</tt> (57; 88%),
<tt>NUM --[<tt><a href="tr_gb-dep-conj.html">conj</a></tt>]--> NUM</tt> (13; 93%),
<tt>NUM --[<tt><a href="tr_gb-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (4; 80%),
<tt>NUM --[<tt><a href="tr_gb-dep-compound-redup.html">compound:redup</a></tt>]--> NUM</tt> (2; 100%),
<tt>ADJ --[<tt><a href="tr_gb-dep-conj.html">conj</a></tt>]--> ADJ</tt> (1; 100%),
<tt>NUM --[<tt><a href="tr_gb-dep-amod.html">amod</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="tr_gb-dep-nsubj.html">nsubj</a></tt>]--> NUM</tt> (1; 100%).

