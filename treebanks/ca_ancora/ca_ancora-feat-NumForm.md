---
layout: base
title:  'Statistics of NumForm in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Features: `NumForm`

This feature is language-specific.
It occurs with 3 different values: `Digit`, `Roman`, `Word`.

10198 tokens (2%) have a non-empty value of `NumForm`.
1894 types (6%) occur at least once with a non-empty value of `NumForm`.
1869 lemmas (8%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 3 part-of-speech tags: <tt><a href="ca_ancora-pos-NUM.html">NUM</a></tt> (9962; 2% instances), <tt><a href="ca_ancora-pos-SYM.html">SYM</a></tt> (215; 0% instances), <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (21; 0% instances).

### `NUM`

9962 <tt><a href="ca_ancora-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="ca_ancora-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (9946; 100%), <tt><a href="ca_ancora-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (8604; 86%), <tt><a href="ca_ancora-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (7307; 73%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (6666; 67% of non-empty `NumForm`): <em>10, 15, 30, 5, 20, 2, 12, 4, 50, 25</em>
* `Roman` (130; 1% of non-empty `NumForm`): <em>XX, II, XIX, XXI, III, X, XVI, XIII, IV, VII</em>
* `Word` (3166; 32% of non-empty `NumForm`): <em>dos, tres, dues, quatre, cent, un, cinc, una, sis, vuit</em>

<table>
  <tr><th>Paradigm <i>tres</i></th><th><tt>Digit</tt></th><th><tt>Word</tt></th></tr>
  <tr><td><tt><tt><a href="ca_ancora-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>tres</em></td></tr>
  <tr><td><tt></tt></td><td><em>tres</em></td><td><em>tres</em></td></tr>
</table>

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (1861) occur only with one value of `NumForm`.

### `SYM`

215 <tt><a href="ca_ancora-pos-SYM.html">SYM</a></tt> tokens (26% of all `SYM` tokens) have a non-empty value of `NumForm`.

`SYM` tokens may have the following values of `NumForm`:

* `Digit` (215; 100% of non-empty `NumForm`): <em>%, -3%</em>

### `ADJ`

21 <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `ADJ` and `NumForm` co-occurred: <tt><a href="ca_ancora-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (21; 100%), <tt><a href="ca_ancora-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (21; 100%), <tt><a href="ca_ancora-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (21; 100%).

`ADJ` tokens may have the following values of `NumForm`:

* `Digit` (21; 100% of non-empty `NumForm`): <em>7a, 18a, 51a, 11a, 129a, 152a, 19a, 1a, 2a, 30a</em>

`NumForm` seems to be **lexical feature** of `ADJ`. 100% lemmas (16) occur only with one value of `NumForm`.

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<tt><a href="ca_ancora-dep-conj.html">conj</a></tt>]--> NUM</tt> (246; 98%),
<tt>NUM --[<tt><a href="ca_ancora-dep-compound.html">compound</a></tt>]--> NUM</tt> (227; 94%),
<tt>NUM --[<tt><a href="ca_ancora-dep-nmod.html">nmod</a></tt>]--> SYM</tt> (214; 100%),
<tt>NUM --[<tt><a href="ca_ancora-dep-appos.html">appos</a></tt>]--> NUM</tt> (22; 92%),
<tt>NUM --[<tt><a href="ca_ancora-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (11; 79%),
<tt>NUM --[<tt><a href="ca_ancora-dep-obj.html">obj</a></tt>]--> NUM</tt> (1; 100%).

