---
layout: base
title:  'Statistics of NumType in UD_Turkish-Penn'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Penn: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Dist`, `Ord`.

9627 tokens (5%) have a non-empty value of `NumType`.
2661 types (8%) occur at least once with a non-empty value of `NumType`.
2095 lemmas (14%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="tr_penn-pos-NUM.html">NUM</a></tt> (9621; 5% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (6; 0% instances).

### `NUM`

9621 <tt><a href="tr_penn-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="tr_penn-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (8568; 89%), <tt><a href="tr_penn-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (8541; 89%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (8652; 90% of non-empty `NumType`): <em>milyon, milyar, iki, bir, 1, 10, üç, 30, 2, 3</em>
* `Dist` (4; 0% of non-empty `NumType`): <em>birer, üçer</em>
* `Ord` (965; 10% of non-empty `NumType`): <em>%, üçüncü, 3., ikinci, dördüncü, birinci, 13., İkinci, 2., altıncı</em>
* `EMPTY` (2): <em>1/4, 1/8</em>

<table>
  <tr><th>Paradigm <i>üç</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th><th><tt>Dist</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>üç</em></td><td></td><td><em>üçer</em></td></tr>
  <tr><td><tt><tt><a href="tr_penn-feat-Case.html">Case</a></tt><tt>=Abl</tt>|<tt><a href="tr_penn-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>üçten</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_penn-feat-Case.html">Case</a></tt><tt>=Abl</tt>|<tt><a href="tr_penn-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="tr_penn-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt>|<tt><a href="tr_penn-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td><em>üçünden</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_penn-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="tr_penn-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>üçe</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_penn-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="tr_penn-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="tr_penn-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt>|<tt><a href="tr_penn-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td><em>üçünün</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_penn-feat-Case.html">Case</a></tt><tt>=Loc</tt>|<tt><a href="tr_penn-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>üçte</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_penn-feat-Case.html">Case</a></tt><tt>=Loc</tt>|<tt><a href="tr_penn-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="tr_penn-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt>|<tt><a href="tr_penn-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td><em>üçünde</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_penn-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="tr_penn-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="tr_penn-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt>|<tt><a href="tr_penn-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td><em>üçü</em></td><td><em>üçüncüsü</em></td><td></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 99% lemmas (2075) occur only with one value of `NumType`.

### `ADJ`

6 <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `NumType`.

`ADJ` tokens may have the following values of `NumType`:

* `Card` (6; 100% of non-empty `NumType`): <em>kaç</em>
* `EMPTY` (15265): <em>büyük, yeni, diğer, son, var, yaklaşık, yüksek, iyi, çok, geçen</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="tr_penn-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (1261; 84%),
<tt>NUM --[<tt><a href="tr_penn-dep-compound.html">compound</a></tt>]--> NUM</tt> (389; 87%),
<tt>NUM --[<tt><a href="tr_penn-dep-conj.html">conj</a></tt>]--> NUM</tt> (135; 100%),
<tt>NUM --[<tt><a href="tr_penn-dep-nsubj.html">nsubj</a></tt>]--> NUM</tt> (11; 92%),
<tt>NUM --[<tt><a href="tr_penn-dep-obl.html">obl</a></tt>]--> NUM</tt> (7; 88%),
<tt>NUM --[<tt><a href="tr_penn-dep-list.html">list</a></tt>]--> NUM</tt> (5; 100%),
<tt>NUM --[<tt><a href="tr_penn-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (4; 100%),
<tt>NUM --[<tt><a href="tr_penn-dep-flat.html">flat</a></tt>]--> NUM</tt> (3; 100%),
<tt>NUM --[<tt><a href="tr_penn-dep-amod.html">amod</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="tr_penn-dep-appos.html">appos</a></tt>]--> NUM</tt> (1; 100%).

