---
layout: base
title:  'Statistics of NumType in UD_Romanian'
udver: '2'
---

## Treebank Statistics: UD_Romanian: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

5540 tokens (3%) have a non-empty value of `NumType`.
1024 types (3%) occur at least once with a non-empty value of `NumType`.
923 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 1 part-of-speech tags: <tt><a href="ro-pos-NUM.html">NUM</a></tt> (5540; 3% instances).

### `NUM`

5540 <tt><a href="ro-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Plur</tt> (4867; 88%), <tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (4647; 84%), <tt><a href="ro-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (3975; 72%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (4817; 87% of non-empty `NumType`): <em>1, 2, 3, două, 4, trei, 5, 6, doi, 7</em>
* `Ord` (723; 13% of non-empty `NumType`): <em>primul, prima, I, ii, doilea, doua, primele, iii, treia, ultimii</em>
* `EMPTY` (14): <em>treimi, pătrime, pătrimi, 1894, 20, optime, zecime, ý10, ý15, ý5</em>

<table>
  <tr><th>Paradigm <i>doi</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt><tt><a href="ro-feat-Foreign.html">Foreign</a></tt><tt>=Yes</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ro-feat-NumForm.html">NumForm</a></tt><tt>=Roman</tt></tt></td><td></td><td><em>II</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ro-feat-NumForm.html">NumForm</a></tt><tt>=Word</tt></tt></td><td></td><td><em>doilea, secund</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ro-feat-NumForm.html">NumForm</a></tt><tt>=Word</tt></tt></td><td><em>doi</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ro-feat-NumForm.html">NumForm</a></tt><tt>=Word</tt></tt></td><td></td><td><em>doua</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ro-feat-NumForm.html">NumForm</a></tt><tt>=Word</tt></tt></td><td><em>două</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ro-feat-NumForm.html">NumForm</a></tt><tt>=Roman</tt></tt></td><td></td><td><em>ii</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 98% lemmas (905) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="ro-dep-conj.html">conj</a></tt>]--> NUM</tt> (258; 100%),
<tt>NUM --[<tt><a href="ro-dep-goeswith.html">goeswith</a></tt>]--> NUM</tt> (80; 98%),
<tt>NUM --[<tt><a href="ro-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (70; 80%),
<tt>NUM --[<tt><a href="ro-dep-compound.html">compound</a></tt>]--> NUM</tt> (37; 100%),
<tt>NUM --[<tt><a href="ro-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (3; 100%),
<tt>NUM --[<tt><a href="ro-dep-appos.html">appos</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="ro-dep-fixed.html">fixed</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="ro-dep-acl.html">acl</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="ro-dep-dep.html">dep</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="ro-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (1; 100%).

