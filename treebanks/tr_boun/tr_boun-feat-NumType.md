---
layout: base
title:  'Statistics of NumType in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Dist`, `Ord`.

2281 tokens (2%) have a non-empty value of `NumType`.
423 types (1%) occur at least once with a non-empty value of `NumType`.
382 lemmas (3%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (2280; 2% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).

### `NUM`

2280 <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> tokens (85% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="tr_boun-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (1979; 87%), <tt><a href="tr_boun-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (1979; 87%), <tt><a href="tr_boun-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (1979; 87%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (2126; 93% of non-empty `NumType`): <em>1, iki, bir, 2, üç, 4, bin, milyon, 3, 5</em>
* `Dist` (12; 1% of non-empty `NumType`): <em>birer, ikişer, yüzer</em>
* `Ord` (142; 6% of non-empty `NumType`): <em>ikinci, birinci, üçüncü, İkinci, 1., 2., beşinci, dördüncü, 20., 3.</em>
* `EMPTY` (405): <em>yüzde, milyar, birini, birinde, altında, ikiye, ikisi, ikisinin, onlarla, trilyon</em>

<table>
  <tr><th>Paradigm <i>iki</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th><th><tt>Dist</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>iki, İki</em></td><td></td><td><em>ikişer</em></td></tr>
  <tr><td><tt><tt><a href="tr_boun-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="tr_boun-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="tr_boun-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td></td><td><em>ikinci, İkinci</em></td><td></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 95% lemmas (362) occur only with one value of `NumType`.

### `ADJ`

1 <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="tr_boun-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="tr_boun-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="tr_boun-feat-Number-psor.html">Number[psor]</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="tr_boun-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="tr_boun-feat-Person-psor.html">Person[psor]</a></tt><tt>=EMPTY</tt> (1; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (1; 100% of non-empty `NumType`): <em>53'üncü</em>
* `EMPTY` (10512): <em>var, büyük, yeni, içinde, yok, Türk, ilk, arasında, aynı, iyi</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="tr_boun-dep-flat.html">flat</a></tt>]--> NUM</tt> (282; 79%),
<tt>NUM --[<tt><a href="tr_boun-dep-conj.html">conj</a></tt>]--> NUM</tt> (36; 92%),
<tt>NUM --[<tt><a href="tr_boun-dep-compound.html">compound</a></tt>]--> NUM</tt> (5; 100%),
<tt>NUM --[<tt><a href="tr_boun-dep-appos.html">appos</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="tr_boun-dep-compound-redup.html">compound:redup</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="tr_boun-dep-orphan.html">orphan</a></tt>]--> NUM</tt> (1; 100%).

