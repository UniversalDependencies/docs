---
layout: base
title:  'Statistics of NumType in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

2247 tokens (2%) have a non-empty value of `NumType`.
757 types (3%) occur at least once with a non-empty value of `NumType`.
557 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="et-pos-NUM.html">NUM</a></tt> (1558; 1% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt> (664; 1% instances), <tt><a href="et-pos-SYM.html">SYM</a></tt> (23; 0% instances), <tt><a href="et-pos-PROPN.html">PROPN</a></tt> (2; 0% instances).

### `NUM`

1558 <tt><a href="et-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="et-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1198; 77%), <tt><a href="et-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (906; 58%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (1554; 100% of non-empty `NumType`): <em>kaks, 2001, üks, 2, kolm, 1, kahe, paar, 2000, neli</em>
* `Ord` (4; 0% of non-empty `NumType`): <em>kolmandat, 2000.-2001., teise</em>

<table>
  <tr><th>Paradigm <i>2000</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt><tt><a href="et-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="et-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>2000</em></td><td></td></tr>
  <tr><td><tt><tt><a href="et-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="et-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>2000</em></td><td></td></tr>
  <tr><td><tt><tt><a href="et-feat-Case.html">Case</a></tt><tt>=Tra</tt>|<tt><a href="et-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>2000</em></td><td></td></tr>
  <tr><td><tt></tt></td><td><em>2000</em></td><td><em>2000.-2001.</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (413) occur only with one value of `NumType`.

### `ADJ`

664 <tt><a href="et-pos-ADJ.html">ADJ</a></tt> tokens (8% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="et-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (664; 100%), <tt><a href="et-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (664; 100%), <tt><a href="et-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (664; 100%), <tt><a href="et-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (664; 100%), <tt><a href="et-feat-Number.html">Number</a></tt><tt>=Sing</tt> (430; 65%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (664; 100% of non-empty `NumType`): <em>2000., esimest, 90ndate, 1999., esimene, 1998., 2001., teine, teise, 1997.</em>
* `EMPTY` (7175): <em>hea, suur, viimase, keskmise, kõrge, võimalik, oluline, tehtud, suure, teatud</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (147) occur only with one value of `NumType`.

### `SYM`

23 <tt><a href="et-pos-SYM.html">SYM</a></tt> tokens (42% of all `SYM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `SYM` and `NumType` co-occurred: <tt><a href="et-feat-Abbr.html">Abbr</a></tt><tt>=EMPTY</tt> (23; 100%), <tt><a href="et-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (23; 100%), <tt><a href="et-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (18; 78%), <tt><a href="et-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (18; 78%).

`SYM` tokens may have the following values of `NumType`:

* `Card` (23; 100% of non-empty `NumType`): <em>%</em>
* `EMPTY` (32): <em>?, &, =, EEK, 340B, 6B, A-, AC, B,C,D,E, Bi-2</em>

### `PROPN`

2 <tt><a href="et-pos-PROPN.html">PROPN</a></tt> tokens (0% of all `PROPN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PROPN` and `NumType` co-occurred: <tt><a href="et-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2; 100%).

`PROPN` tokens may have the following values of `NumType`:

* `Ord` (2; 100% of non-empty `NumType`): <em>Neljandal, Teist</em>
* `EMPTY` (4723): <em>eesti, Jan, Peeter, Tsee, Jooga, Tõnu, Hiina, Ott, Kala, Ernesaks</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="et-dep-conj.html">conj</a></tt>]--> NUM</tt> (53; 100%),
<tt>NUM --[<tt><a href="et-dep-compound.html">compound</a></tt>]--> NUM</tt> (45; 100%),
<tt>NUM --[<tt><a href="et-dep-flat.html">flat</a></tt>]--> NUM</tt> (42; 100%),
<tt>NUM --[<tt><a href="et-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (25; 100%),
<tt>ADJ --[<tt><a href="et-dep-conj.html">conj</a></tt>]--> ADJ</tt> (20; 91%),
<tt>NUM --[<tt><a href="et-dep-list.html">list</a></tt>]--> NUM</tt> (2; 100%),
<tt>ADJ --[<tt><a href="et-dep-flat.html">flat</a></tt>]--> ADJ</tt> (1; 100%),
<tt>NUM --[<tt><a href="et-dep-compound.html">compound</a></tt>]--> SYM</tt> (1; 100%),
<tt>NUM --[<tt><a href="et-dep-orphan.html">orphan</a></tt>]--> NUM</tt> (1; 100%),
<tt>SYM --[<tt><a href="et-dep-compound.html">compound</a></tt>]--> NUM</tt> (1; 100%).

