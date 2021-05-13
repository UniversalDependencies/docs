---
layout: base
title:  'Statistics of NumType in UD_Turkish-Kenet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Kenet: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Dist`, `Ord`.

2212 tokens (1%) have a non-empty value of `NumType`.
156 types (0%) occur at least once with a non-empty value of `NumType`.
92 lemmas (1%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="tr_kenet-pos-NUM.html">NUM</a></tt> (2029; 1% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt> (183; 0% instances).

### `NUM`

2029 <tt><a href="tr_kenet-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (1993; 98% of non-empty `NumType`): <em>iki, bir, üç, beş, on, İki, dört, bin, altı, yirmi</em>
* `Ord` (36; 2% of non-empty `NumType`): <em>birinci, üçüncü, ikinci, dördüncü, sekizinci, İkinci, 19., 21., Beşinci, Onuncu</em>
* `EMPTY` (1): <em>5.0.0</em>

<table>
  <tr><th>Paradigm <i>19</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt></tt></td><td><em>19</em></td><td><em>19.</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 98% lemmas (87) occur only with one value of `NumType`.

### `ADJ`

183 <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt> tokens (1% of all `ADJ` tokens) have a non-empty value of `NumType`.

`ADJ` tokens may have the following values of `NumType`:

* `Card` (76; 42% of non-empty `NumType`): <em>kaç, ikisi, beşlik, kaçtığı, milyarlık, 70'li, Altılı, Altımdaki, Birlik, Dörtlü</em>
* `Dist` (100; 55% of non-empty `NumType`): <em>birer, ikişer, beşer, onar, üçer, Yetmişer, biner</em>
* `Ord` (7; 4% of non-empty `NumType`): <em>kaçıncı, birincisi</em>
* `EMPTY` (22662): <em>bir, bütün, var, büyük, yeni, olan, uzun, çok, ne, güzel</em>

<table>
  <tr><th>Paradigm <i>bir</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th><th><tt>Dist</tt></th></tr>
  <tr><td><tt></tt></td><td><em>Birlik</em></td><td><em>birincisi</em></td><td><em>birer</em></td></tr>
</table>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="tr_kenet-dep-compound.html">compound</a></tt>]--> NUM</tt> (131; 100%),
<tt>NUM --[<tt><a href="tr_kenet-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (114; 99%),
<tt>NUM --[<tt><a href="tr_kenet-dep-conj.html">conj</a></tt>]--> NUM</tt> (20; 100%),
<tt>ADJ --[<tt><a href="tr_kenet-dep-compound.html">compound</a></tt>]--> ADJ</tt> (15; 79%),
<tt>NUM --[<tt><a href="tr_kenet-dep-list.html">list</a></tt>]--> NUM</tt> (6; 100%),
<tt>NUM --[<tt><a href="tr_kenet-dep-clf.html">clf</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="tr_kenet-dep-fixed.html">fixed</a></tt>]--> NUM</tt> (1; 100%).

