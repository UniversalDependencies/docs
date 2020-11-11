---
layout: base
title:  'Statistics of NumType in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Dist`, `Ord`.

381 tokens (2%) have a non-empty value of `NumType`.
106 types (2%) occur at least once with a non-empty value of `NumType`.
57 lemmas (3%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (369; 2% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (11; 0% instances), <tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (1; 0% instances).

### `NUM`

369 <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> tokens (99% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="tr_gb-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (300; 81%), <tt><a href="tr_gb-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (294; 80%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (350; 95% of non-empty `NumType`): <em>iki, üç, beş, yüz, dört, on, bir, bin, dokuz, sekiz</em>
* `Dist` (19; 5% of non-empty `NumType`): <em>birer, ikişer, üçer, dörder, yüzer</em>
* `EMPTY` (3): <em>iki, İki</em>

<table>
  <tr><th>Paradigm <i>iki</i></th><th><tt>Card</tt></th><th><tt>Dist</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>iki, İki, ikinci</em></td><td><em>ikişer</em></td></tr>
  <tr><td><tt><tt><a href="tr_gb-feat-Case.html">Case</a></tt><tt>=Abl</tt>|<tt><a href="tr_gb-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>ikiden</em></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_gb-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="tr_gb-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>ikiye</em></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_gb-feat-Case.html">Case</a></tt><tt>=Loc</tt>|<tt><a href="tr_gb-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>ikide</em></td><td></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 91% lemmas (50) occur only with one value of `NumType`.

### `ADJ`

11 <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> tokens (1% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="tr_gb-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (11; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (11; 100% of non-empty `NumType`): <em>ikinci, üçüncü, 18., Dördüncü, birinci, milyon, İki, İkinci</em>
* `EMPTY` (795): <em>var, yok, yeni, büyük, güzel, iyi, küçük, lazım, zor, önemli</em>

### `ADV`

1 <tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> tokens (0% of all `ADV` tokens) have a non-empty value of `NumType`.

`ADV` tokens may have the following values of `NumType`:

* `Card` (1; 100% of non-empty `NumType`): <em>en</em>
* `EMPTY` (1049): <em>çok, daha, de, artık, da, en, hiç, bile, biraz, pek</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="tr_gb-dep-compound.html">compound</a></tt>]--> NUM</tt> (66; 97%),
<tt>NUM --[<tt><a href="tr_gb-dep-conj.html">conj</a></tt>]--> NUM</tt> (14; 100%),
<tt>NUM --[<tt><a href="tr_gb-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (6; 100%),
<tt>NUM --[<tt><a href="tr_gb-dep-compound-redup.html">compound:redup</a></tt>]--> NUM</tt> (3; 100%),
<tt>ADJ --[<tt><a href="tr_gb-dep-conj.html">conj</a></tt>]--> ADJ</tt> (1; 100%),
<tt>NUM --[<tt><a href="tr_gb-dep-nmod-part.html">nmod:part</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="tr_gb-dep-nsubj.html">nsubj</a></tt>]--> NUM</tt> (1; 100%).

