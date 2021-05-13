---
layout: base
title:  'Statistics of NumType in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Frac`, `Ord`.

11423 tokens (2%) have a non-empty value of `NumType`.
2049 types (6%) occur at least once with a non-empty value of `NumType`.
1964 lemmas (8%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="ca_ancora-pos-NUM.html">NUM</a></tt> (9228; 2% instances), <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (1615; 0% instances), <tt><a href="ca_ancora-pos-SYM.html">SYM</a></tt> (580; 0% instances).

### `NUM`

9228 <tt><a href="ca_ancora-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="ca_ancora-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (7871; 85%), <tt><a href="ca_ancora-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (6574; 71%), <tt><a href="ca_ancora-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (6061; 66%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (9214; 100% of non-empty `NumType`): <em>dos, tres, cent, dues, quatre, un, cinc, nou, 10, sis</em>
* `Frac` (14; 0% of non-empty `NumType`): <em>cada, 1,1, 10, 15, 161, 17,8/100.000, 26,5/100.000, 3,9, 37,45, 57,9/100.000</em>

<table>
  <tr><th>Paradigm <i>1.1</i></th><th><tt>Card</tt></th><th><tt>Frac</tt></th></tr>
  <tr><td><tt></tt></td><td><em>1,1</em></td><td><em>1,1</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (1681) occur only with one value of `NumType`.

### `ADJ`

1615 <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> tokens (5% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="ca_ancora-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (1615; 100%), <tt><a href="ca_ancora-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1257; 78%), <tt><a href="ca_ancora-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (887; 55%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (1615; 100% of non-empty `NumType`): <em>primer, primera, últims, segona, últim, segon, primers, tercer, última, darrers</em>
* `EMPTY` (28465): <em>passat, gran, nou, general, nova, catalana, espanyol, grans, baix, noves</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (44) occur only with one value of `NumType`.

### `SYM`

580 <tt><a href="ca_ancora-pos-SYM.html">SYM</a></tt> tokens (13% of all `SYM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `SYM` and `NumType` co-occurred: <tt><a href="ca_ancora-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (580; 100%).

`SYM` tokens may have the following values of `NumType`:

* `Frac` (580; 100% of non-empty `NumType`): <em>50%, 10%, 30%, 5%, 25%, 1%, 20%, 40%, 2%, 0,1%</em>
* `EMPTY` (4043): <em>', %, 10%, 2%, 40%, -, -3%, 1%, 10,2%, 13,7%</em>

`NumType` seems to be **lexical feature** of `SYM`. 100% lemmas (263) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="ca_ancora-dep-compound.html">compound</a></tt>]--> NUM</tt> (427; 100%),
<tt>NUM --[<tt><a href="ca_ancora-dep-conj.html">conj</a></tt>]--> NUM</tt> (239; 98%),
<tt>NUM --[<tt><a href="ca_ancora-dep-appos.html">appos</a></tt>]--> NUM</tt> (24; 100%),
<tt>SYM --[<tt><a href="ca_ancora-dep-conj.html">conj</a></tt>]--> SYM</tt> (23; 100%),
<tt>NUM --[<tt><a href="ca_ancora-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (15; 88%),
<tt>ADJ --[<tt><a href="ca_ancora-dep-conj.html">conj</a></tt>]--> ADJ</tt> (6; 67%),
<tt>SYM --[<tt><a href="ca_ancora-dep-appos.html">appos</a></tt>]--> SYM</tt> (6; 86%),
<tt>SYM --[<tt><a href="ca_ancora-dep-obl.html">obl</a></tt>]--> SYM</tt> (3; 100%),
<tt>NUM --[<tt><a href="ca_ancora-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="ca_ancora-dep-dep.html">dep</a></tt>]--> NUM</tt> (1; 100%).

