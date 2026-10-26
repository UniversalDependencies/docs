---
layout: base
title:  'Statistics of NumType in UD_Turkish-FrameNet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-FrameNet: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Dist`, `Ord`.

173 tokens (1%) have a non-empty value of `NumType`.
61 types (1%) occur at least once with a non-empty value of `NumType`.
38 lemmas (1%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="tr_framenet-pos-NUM.html">NUM</a></tt> (171; 1% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt> (2; 0% instances).

### `NUM`

171 <tt><a href="tr_framenet-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="tr_framenet-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (148; 87%), <tt><a href="tr_framenet-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (148; 87%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (163; 95% of non-empty `NumType`): <em>iki, bir, beş, bin, üç, İki, on, 2, altı, sekiz</em>
* `Dist` (5; 3% of non-empty `NumType`): <em>onar, birer</em>
* `Ord` (3; 2% of non-empty `NumType`): <em>%, birincisi</em>

<table>
  <tr><th>Paradigm <i>bir</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th><th><tt>Dist</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>bir</em></td><td></td><td><em>birer</em></td></tr>
  <tr><td><tt><tt><a href="tr_framenet-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="tr_framenet-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>bire</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_framenet-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="tr_framenet-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="tr_framenet-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt>|<tt><a href="tr_framenet-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td><em>birine</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_framenet-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="tr_framenet-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="tr_framenet-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt>|<tt><a href="tr_framenet-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td></td><td><em>birincisi</em></td><td></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 95% lemmas (35) occur only with one value of `NumType`.

### `ADJ`

2 <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="tr_framenet-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (2; 100%), <tt><a href="tr_framenet-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (2; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Card` (2; 100% of non-empty `NumType`): <em>kaç</em>
* `EMPTY` (1274): <em>bütün, yeni, çok, büyük, küçük, güzel, iyi, uzun, kötü, eski</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="tr_framenet-dep-compound.html">compound</a></tt>]--> NUM</tt> (19; 100%),
<tt>NUM --[<tt><a href="tr_framenet-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (3; 100%),
<tt>NUM --[<tt><a href="tr_framenet-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (1; 100%).

