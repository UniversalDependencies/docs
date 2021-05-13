---
layout: base
title:  'Statistics of NumType in UD_Turkish-Penn'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Penn: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Dist`, `Ord`.

3942 tokens (5%) have a non-empty value of `NumType`.
1258 types (6%) occur at least once with a non-empty value of `NumType`.
1144 lemmas (13%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="tr_penn-pos-NUM.html">NUM</a></tt> (3852; 4% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (90; 0% instances).

### `NUM`

3852 <tt><a href="tr_penn-pos-NUM.html">NUM</a></tt> tokens (88% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (3769; 98% of non-empty `NumType`): <em>milyon, milyar, iki, bir, 1, üç, 10, 30, 3, 2</em>
* `Ord` (83; 2% of non-empty `NumType`): <em>üçüncü, ikinci, birinci, dördüncü, İkinci, 13., 3., altıncı, 11., 20.</em>
* `EMPTY` (534): <em>%, 03:25, 01:00, 01:11, 01:20, 04:02, 04:30, 05:09, 06:50, 07:13</em>

<table>
  <tr><th>Paradigm <i>3</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt></tt></td><td><em>3, 3/4</em></td><td><em>3.</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 99% lemmas (1129) occur only with one value of `NumType`.

### `ADJ`

90 <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> tokens (1% of all `ADJ` tokens) have a non-empty value of `NumType`.

`ADJ` tokens may have the following values of `NumType`:

* `Card` (87; 97% of non-empty `NumType`): <em>ikisi, 9'luk, milyonluk, 1980'li, 20'lik, kaç, milyarlık, 15'lik, 1970'li, 3.5'lik</em>
* `Dist` (2; 2% of non-empty `NumType`): <em>birer</em>
* `Ord` (1; 1% of non-empty `NumType`): <em>Üçüncüsü</em>
* `EMPTY` (8876): <em>büyük, var, olan, yeni, diğer, yaklaşık, çok, son, yüksek, iyi</em>

<table>
  <tr><th>Paradigm <i>bir</i></th><th><tt>Card</tt></th><th><tt>Dist</tt></th></tr>
  <tr><td><tt></tt></td><td><em>birleşmiş</em></td><td><em>birer</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `ADJ`. 98% lemmas (55) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="tr_penn-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (575; 83%),
<tt>NUM --[<tt><a href="tr_penn-dep-compound.html">compound</a></tt>]--> NUM</tt> (139; 99%),
<tt>NUM --[<tt><a href="tr_penn-dep-conj.html">conj</a></tt>]--> NUM</tt> (48; 100%),
<tt>ADJ --[<tt><a href="tr_penn-dep-compound.html">compound</a></tt>]--> NUM</tt> (4; 100%),
<tt>NUM --[<tt><a href="tr_penn-dep-flat.html">flat</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="tr_penn-dep-nsubj.html">nsubj</a></tt>]--> NUM</tt> (2; 67%),
<tt>ADJ --[<tt><a href="tr_penn-dep-conj.html">conj</a></tt>]--> ADJ</tt> (1; 100%),
<tt>NUM --[<tt><a href="tr_penn-dep-appos.html">appos</a></tt>]--> NUM</tt> (1; 100%).

