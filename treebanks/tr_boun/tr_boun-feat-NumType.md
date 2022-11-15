---
layout: base
title:  'Statistics of NumType in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Dist`, `Ord`.

2254 tokens (2%) have a non-empty value of `NumType`.
455 types (1%) occur at least once with a non-empty value of `NumType`.
380 lemmas (3%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (2253; 2% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).

### `NUM`

2253 <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> tokens (86% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="tr_boun-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (1918; 85%), <tt><a href="tr_boun-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (1918; 85%), <tt><a href="tr_boun-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (1918; 85%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (2071; 92% of non-empty `NumType`): <em>1, iki, üç, 2, bir, bin, 4, 3, milyon, 5</em>
* `Dist` (25; 1% of non-empty `NumType`): <em>birer, ikişer, üçer, yüzer</em>
* `Ord` (157; 7% of non-empty `NumType`): <em>ikinci, birinci, üçüncü, İkinci, 1., 2., 3., beşinci, 20., dördüncü</em>
* `EMPTY` (353): <em>yüzde, milyar, birinde, birini, ikisi, ikiye, ikisinin, trilyon, altında, birine</em>

<table>
  <tr><th>Paradigm <i>iki</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th><th><tt>Dist</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>iki, İki</em></td><td><em>ikinci, İkinci</em></td><td><em>ikişer</em></td></tr>
  <tr><td><tt><tt><a href="tr_boun-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="tr_boun-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="tr_boun-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt>|<tt><a href="tr_boun-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="tr_boun-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td><em>İkisini</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_boun-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="tr_boun-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="tr_boun-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>ikiye</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_boun-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="tr_boun-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="tr_boun-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt>|<tt><a href="tr_boun-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="tr_boun-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td><em>İkisi</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_boun-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="tr_boun-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="tr_boun-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td></td><td><em>ikinci, İkinci</em></td><td></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 94% lemmas (355) occur only with one value of `NumType`.

### `ADJ`

1 <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `NumType`.

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (1; 100% of non-empty `NumType`): <em>53'üncü</em>
* `EMPTY` (7509): <em>büyük, yeni, ilk, aynı, iyi, başka, son, küçük, tek, güzel</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="tr_boun-dep-flat.html">flat</a></tt>]--> NUM</tt> (245; 79%),
<tt>NUM --[<tt><a href="tr_boun-dep-conj.html">conj</a></tt>]--> NUM</tt> (60; 95%),
<tt>NUM --[<tt><a href="tr_boun-dep-compound-redup.html">compound:redup</a></tt>]--> NUM</tt> (4; 100%),
<tt>NUM --[<tt><a href="tr_boun-dep-compound.html">compound</a></tt>]--> NUM</tt> (3; 100%).

