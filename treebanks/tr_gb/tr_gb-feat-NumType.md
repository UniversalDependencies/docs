---
layout: base
title:  'Statistics of NumType in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Dist`, `Ord`.

376 tokens (2%) have a non-empty value of `NumType`.
105 types (2%) occur at least once with a non-empty value of `NumType`.
55 lemmas (3%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (365; 2% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (11; 0% instances).

### `NUM`

365 <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="tr_gb-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (296; 81%), <tt><a href="tr_gb-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (290; 79%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (348; 95% of non-empty `NumType`): <em>iki, üç, beş, yüz, on, dört, bir, bin, dokuz, sekiz</em>
* `Dist` (17; 5% of non-empty `NumType`): <em>birer, ikişer, üçer, dörder, yüzer</em>

<table>
  <tr><th>Paradigm <i>iki</i></th><th><tt>Card</tt></th><th><tt>Dist</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>iki, İki, ikinci</em></td><td><em>ikişer</em></td></tr>
  <tr><td><tt><tt><a href="tr_gb-feat-Case.html">Case</a></tt><tt>=Abl</tt>|<tt><a href="tr_gb-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>ikiden</em></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_gb-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="tr_gb-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>ikiye</em></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_gb-feat-Case.html">Case</a></tt><tt>=Loc</tt>|<tt><a href="tr_gb-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>ikide</em></td><td></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 91% lemmas (49) occur only with one value of `NumType`.

### `ADJ`

11 <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> tokens (1% of all `ADJ` tokens) have a non-empty value of `NumType`.

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (11; 100% of non-empty `NumType`): <em>ikinci, üçüncü, 18., Dördüncü, birinci, milyon, İki, İkinci</em>
* `EMPTY` (778): <em>var, yok, yeni, büyük, güzel, iyi, küçük, zor, önemli, lazım</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="tr_gb-dep-compound.html">compound</a></tt>]--> NUM</tt> (66; 97%),
<tt>NUM --[<tt><a href="tr_gb-dep-conj.html">conj</a></tt>]--> NUM</tt> (14; 100%),
<tt>NUM --[<tt><a href="tr_gb-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (6; 100%),
<tt>NUM --[<tt><a href="tr_gb-dep-compound-redup.html">compound:redup</a></tt>]--> NUM</tt> (2; 100%),
<tt>ADJ --[<tt><a href="tr_gb-dep-conj.html">conj</a></tt>]--> ADJ</tt> (1; 100%),
<tt>NUM --[<tt><a href="tr_gb-dep-nmod-part.html">nmod:part</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="tr_gb-dep-nsubj.html">nsubj</a></tt>]--> NUM</tt> (1; 100%).

