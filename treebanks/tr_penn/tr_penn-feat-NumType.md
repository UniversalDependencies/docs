---
layout: base
title:  'Statistics of NumType in UD_Turkish-Penn'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Penn: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Dist`, `Ord`.

8631 tokens (5%) have a non-empty value of `NumType`.
2087 types (6%) occur at least once with a non-empty value of `NumType`.
1906 lemmas (13%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="tr_penn-pos-NUM.html">NUM</a></tt> (8497; 5% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (134; 0% instances).

### `NUM`

8497 <tt><a href="tr_penn-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (7513; 88% of non-empty `NumType`): <em>milyon, milyar, iki, bir, 1, 10, üç, 30, 2, 3</em>
* `Ord` (984; 12% of non-empty `NumType`): <em>%, üçüncü, ikinci, 3., dördüncü, birinci, İkinci, 13., 2., altıncı</em>
* `EMPTY` (2): <em>1/4, 1/8</em>

<table>
  <tr><th>Paradigm <i>1</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt></tt></td><td><em>1, 1/2, 1/8, 100</em></td><td><em>1.</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 99% lemmas (1882) occur only with one value of `NumType`.

### `ADJ`

134 <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> tokens (1% of all `ADJ` tokens) have a non-empty value of `NumType`.

`ADJ` tokens may have the following values of `NumType`:

* `Card` (129; 96% of non-empty `NumType`): <em>milyonluk, ikisi, 9'luk, kaç, 0.3'lük, 10'luk, 1980'li, 20'lik, 3'lük, 3/4'lük</em>
* `Dist` (3; 2% of non-empty `NumType`): <em>birer</em>
* `Ord` (2; 1% of non-empty `NumType`): <em>9:30'daki, Üçüncüsü</em>
* `EMPTY` (19503): <em>büyük, olan, yeni, diğer, son, var, yaklaşık, yüksek, iyi, çok</em>

<table>
  <tr><th>Paradigm <i>bir</i></th><th><tt>Card</tt></th><th><tt>Dist</tt></th></tr>
  <tr><td><tt></tt></td><td><em>birleşmiş</em></td><td><em>birer</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `ADJ`. 99% lemmas (76) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="tr_penn-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (1041; 86%),
<tt>NUM --[<tt><a href="tr_penn-dep-compound.html">compound</a></tt>]--> NUM</tt> (331; 89%),
<tt>NUM --[<tt><a href="tr_penn-dep-conj.html">conj</a></tt>]--> NUM</tt> (111; 98%),
<tt>NUM --[<tt><a href="tr_penn-dep-nsubj.html">nsubj</a></tt>]--> NUM</tt> (9; 90%),
<tt>NUM --[<tt><a href="tr_penn-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (8; 100%),
<tt>NUM --[<tt><a href="tr_penn-dep-list.html">list</a></tt>]--> NUM</tt> (4; 100%),
<tt>NUM --[<tt><a href="tr_penn-dep-obl.html">obl</a></tt>]--> NUM</tt> (3; 75%),
<tt>NUM --[<tt><a href="tr_penn-dep-flat.html">flat</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="tr_penn-dep-appos.html">appos</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="tr_penn-dep-clf.html">clf</a></tt>]--> NUM</tt> (1; 100%).

