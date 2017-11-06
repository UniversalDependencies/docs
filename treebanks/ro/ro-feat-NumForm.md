---
layout: base
title:  'Statistics of NumForm in UD_Romanian'
udver: '2'
---

## Treebank Statistics: UD_Romanian: Features: `NumForm`

This feature is language-specific.
It occurs with 3 different values: `Digit`, `Roman`, `Word`.

5492 tokens (3%) have a non-empty value of `NumForm`.
1019 types (3%) occur at least once with a non-empty value of `NumForm`.
922 lemmas (5%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 1 part-of-speech tags: <tt><a href="ro-pos-NUM.html">NUM</a></tt> (5492; 3% instances).

### `NUM`

5492 <tt><a href="ro-pos-NUM.html">NUM</a></tt> tokens (99% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Plur</tt> (4824; 88%), <tt><a href="ro-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (4760; 87%), <tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (4638; 84%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (3975; 72% of non-empty `NumForm`): <em>1, 2, 3, 4, 5, 6, 7, 8, 2004, 10</em>
* `Roman` (235; 4% of non-empty `NumForm`): <em>I, ii, iii, iv, V, XX, XIX, VI, VII, XIII</em>
* `Word` (1282; 23% of non-empty `NumForm`): <em>două, trei, primul, doi, prima, patru, cinci, doilea, doua, primele</em>

<table>
  <tr><th>Paradigm <i>doi</i></th><th><tt>Roman</tt></th><th><tt>Word</tt></th></tr>
  <tr><td><tt><tt><a href="ro-feat-Foreign.html">Foreign</a></tt><tt>=Yes</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ro-feat-NumType.html">NumType</a></tt><tt>=Ord</tt></tt></td><td><em>II</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ro-feat-NumType.html">NumType</a></tt><tt>=Ord</tt></tt></td><td></td><td><em>doilea, secund</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ro-feat-NumType.html">NumType</a></tt><tt>=Card</tt></tt></td><td></td><td><em>doi</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ro-feat-NumType.html">NumType</a></tt><tt>=Ord</tt></tt></td><td></td><td><em>doua</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ro-feat-NumType.html">NumType</a></tt><tt>=Card</tt></tt></td><td></td><td><em>două</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ro-feat-NumType.html">NumType</a></tt><tt>=Ord</tt></tt></td><td><em>ii</em></td><td></td></tr>
</table>

`NumForm` seems to be **lexical feature** of `NUM`. 98% lemmas (906) occur only with one value of `NumForm`.

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<tt><a href="ro-dep-conj.html">conj</a></tt>]--> NUM</tt> (258; 100%),
<tt>NUM --[<tt><a href="ro-dep-goeswith.html">goeswith</a></tt>]--> NUM</tt> (81; 99%),
<tt>NUM --[<tt><a href="ro-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (54; 61%),
<tt>NUM --[<tt><a href="ro-dep-appos.html">appos</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="ro-dep-fixed.html">fixed</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="ro-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (2; 67%),
<tt>NUM --[<tt><a href="ro-dep-acl.html">acl</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="ro-dep-dep.html">dep</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="ro-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (1; 100%).

