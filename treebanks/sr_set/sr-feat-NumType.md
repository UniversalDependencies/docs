---
layout: base
title:  'Statistics of NumType in UD_Serbian'
udver: '2'
---

## Treebank Statistics: UD_Serbian: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Mult`, `Ord`.

2219 tokens (3%) have a non-empty value of `NumType`.
526 types (3%) occur at least once with a non-empty value of `NumType`.
447 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 1 part-of-speech tags: <tt><a href="sr-pos-NUM.html">NUM</a></tt> (2219; 3% instances).

### `NUM`

2219 <tt><a href="sr-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="sr-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (1690; 76%), <tt><a href="sr-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1610; 73%), <tt><a href="sr-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (1608; 72%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (1113; 50% of non-empty `NumType`): <em>tri, dva, jedan, pet, 20, dve, četiri, šest, 50, deset</em>
* `Mult` (89; 4% of non-empty `NumType`): <em>obe, troje, 1998-1999., dvoje, 4.7.2011., oba, dve, 11.9., 19.11.2011., 29.9.2011.</em>
* `Ord` (1017; 46% of non-empty `NumType`): <em>2007., drugi, 2004., 21., 1., 2008., 9., 12., 28., prvi</em>

<table>
  <tr><th>Paradigm <i>oba</i></th><th><tt>Card</tt></th><th><tt>Mult</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>oba</em></td></tr>
  <tr><td><tt><tt><a href="sr-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="sr-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>oba</em></td><td><em>oba</em></td></tr>
  <tr><td><tt><tt><a href="sr-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="sr-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>obe</em></td><td><em>obe</em></td></tr>
  <tr><td><tt><tt><a href="sr-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="sr-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td></td><td><em>oba</em></td></tr>
  <tr><td><tt><tt><a href="sr-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="sr-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td></td><td><em>obeju</em></td></tr>
  <tr><td><tt><tt><a href="sr-feat-Case.html">Case</a></tt><tt>=Ins</tt>|<tt><a href="sr-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td></td><td><em>obe</em></td></tr>
  <tr><td><tt><tt><a href="sr-feat-Case.html">Case</a></tt><tt>=Loc</tt>|<tt><a href="sr-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td></td><td><em>obe</em></td></tr>
  <tr><td><tt><tt><a href="sr-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="sr-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td></td><td><em>oba</em></td></tr>
  <tr><td><tt><tt><a href="sr-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="sr-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>obe</em></td><td><em>obe</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 98% lemmas (437) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="sr-dep-conj.html">conj</a></tt>]--> NUM</tt> (40; 91%),
<tt>NUM --[<tt><a href="sr-dep-flat.html">flat</a></tt>]--> NUM</tt> (19; 86%),
<tt>NUM --[<tt><a href="sr-dep-orphan.html">orphan</a></tt>]--> NUM</tt> (7; 78%).

