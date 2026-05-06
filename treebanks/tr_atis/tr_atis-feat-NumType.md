---
layout: base
title:  'Statistics of NumType in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

1369 tokens (3%) have a non-empty value of `NumType`.
278 types (14%) occur at least once with a non-empty value of `NumType`.
198 lemmas (21%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (1306; 3% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (63; 0% instances).

### `NUM`

1306 <tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (849; 65%), <tt><a href="tr_atis-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (849; 65%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (1294; 99% of non-empty `NumType`): <em>7, on, 1, 2, 6, bir, yirmi, 27, 8, 5'ten</em>
* `Ord` (12; 1% of non-empty `NumType`): <em>18:00'den, 19:00, 28., 5:55, 7:00, 8., birinci, yedinci, 22:00'den, 8:38'de</em>

<table>
  <tr><th>Paradigm <i>8</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>8</em></td><td><em>8.</em></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Abl</tt>|<tt><a href="tr_atis-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>8'den</em></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="tr_atis-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>8'e</em></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Loc</tt>|<tt><a href="tr_atis-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>8'de</em></td><td></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 99% lemmas (195) occur only with one value of `NumType`.

### `ADJ`

63 <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> tokens (2% of all `ADJ` tokens) have a non-empty value of `NumType`.

`ADJ` tokens may have the following values of `NumType`:

* `Card` (63; 100% of non-empty `NumType`): <em>kaç</em>
* `EMPTY` (2924): <em>var, hangi, ucuz, tek, aktarmasız, ne, erken, aktarmalı, son, birinci</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="tr_atis-dep-conj.html">conj</a></tt>]--> NUM</tt> (58; 98%),
<tt>NUM --[<tt><a href="tr_atis-dep-compound.html">compound</a></tt>]--> NUM</tt> (51; 100%),
<tt>NUM --[<tt><a href="tr_atis-dep-fixed.html">fixed</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="tr_atis-dep-nmod-tmod.html">nmod:tmod</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="tr_atis-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (1; 100%).

