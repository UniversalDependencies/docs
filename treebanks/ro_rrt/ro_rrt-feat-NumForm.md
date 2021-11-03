---
layout: base
title:  'Statistics of NumForm in UD_Romanian-RRT'
udver: '2'
---

## Treebank Statistics: UD_Romanian-RRT: Features: `NumForm`

This feature is language-specific.
It occurs with 4 different values: `Combi`, `Digit`, `Roman`, `Word`.

5554 tokens (3%) have a non-empty value of `NumForm`.
1028 types (3%) occur at least once with a non-empty value of `NumForm`.
931 lemmas (5%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 1 part-of-speech tags: <tt><a href="ro_rrt-pos-NUM.html">NUM</a></tt> (5554; 3% instances).

### `NUM`

5554 <tt><a href="ro_rrt-pos-NUM.html">NUM</a></tt> tokens (99% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="ro_rrt-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (4824; 87%), <tt><a href="ro_rrt-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (4662; 84%), <tt><a href="ro_rrt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (4476; 81%).

`NUM` tokens may have the following values of `NumForm`:

* `Combi` (138; 2% of non-empty `NumForm`): <em>91/493/CEE, 000, 1999/468/CE, 3.4.1.5, 3.4.2.2, 72/462/CEE, 1.1.1, 100, 1720/1999/CE, 2.1.2</em>
* `Digit` (3852; 69% of non-empty `NumForm`): <em>1, 2, 3, 4, 5, 6, 7, 8, 2004, 10</em>
* `Roman` (245; 4% of non-empty `NumForm`): <em>ii, i, iii, iv, V, XX, XIX, VI, VII, XIII</em>
* `Word` (1319; 24% of non-empty `NumForm`): <em>două, trei, primul, doi, prima, patru, cinci, doilea, doua, primele</em>

<table>
  <tr><th>Paradigm <i>doi</i></th><th><tt>Roman</tt></th><th><tt>Word</tt></th></tr>
  <tr><td><tt><tt><a href="ro_rrt-feat-Foreign.html">Foreign</a></tt><tt>=Yes</tt>|<tt><a href="ro_rrt-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ro_rrt-feat-NumType.html">NumType</a></tt><tt>=Ord</tt></tt></td><td><em>II</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro_rrt-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro_rrt-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ro_rrt-feat-NumType.html">NumType</a></tt><tt>=Ord</tt></tt></td><td></td><td><em>doilea, secund</em></td></tr>
  <tr><td><tt><tt><a href="ro_rrt-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro_rrt-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ro_rrt-feat-NumType.html">NumType</a></tt><tt>=Card</tt></tt></td><td></td><td><em>doi</em></td></tr>
  <tr><td><tt><tt><a href="ro_rrt-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro_rrt-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ro_rrt-feat-NumType.html">NumType</a></tt><tt>=Ord</tt></tt></td><td></td><td><em>doua</em></td></tr>
  <tr><td><tt><tt><a href="ro_rrt-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro_rrt-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ro_rrt-feat-NumType.html">NumType</a></tt><tt>=Card</tt></tt></td><td></td><td><em>două</em></td></tr>
  <tr><td><tt><tt><a href="ro_rrt-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ro_rrt-feat-NumType.html">NumType</a></tt><tt>=Ord</tt></tt></td><td><em>ii</em></td><td></td></tr>
</table>

`NumForm` seems to be **lexical feature** of `NUM`. 97% lemmas (902) occur only with one value of `NumForm`.

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<tt><a href="ro_rrt-dep-conj.html">conj</a></tt>]--> NUM</tt> (264; 99%),
<tt>NUM --[<tt><a href="ro_rrt-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (74; 67%),
<tt>NUM --[<tt><a href="ro_rrt-dep-goeswith.html">goeswith</a></tt>]--> NUM</tt> (63; 98%),
<tt>NUM --[<tt><a href="ro_rrt-dep-compound.html">compound</a></tt>]--> NUM</tt> (27; 57%),
<tt>NUM --[<tt><a href="ro_rrt-dep-fixed.html">fixed</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="ro_rrt-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (2; 67%),
<tt>NUM --[<tt><a href="ro_rrt-dep-acl.html">acl</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="ro_rrt-dep-appos.html">appos</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="ro_rrt-dep-dep.html">dep</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="ro_rrt-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (1; 100%).

