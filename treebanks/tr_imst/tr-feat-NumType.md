---
layout: base
title:  'Statistics of NumType in UD_Turkish'
udver: '2'
---

## Treebank Statistics: UD_Turkish: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Dist`, `Ord`.

2052 tokens (4%) have a non-empty value of `NumType`.
278 types (2%) occur at least once with a non-empty value of `NumType`.
197 lemmas (3%) occur at least once with a non-empty value of `NumType`.
The feature is used with 1 part-of-speech tags: <tt><a href="tr-pos-NUM.html">NUM</a></tt> (2052; 4% instances).

### `NUM`

2052 <tt><a href="tr-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="tr-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (1730; 84%), <tt><a href="tr-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (1730; 84%), <tt><a href="tr-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (1730; 84%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (2008; 98% of non-empty `NumType`): <em>bir, iki, bin, üç, on, dört, beş, yüzde, altı, milyon</em>
* `Dist` (12; 1% of non-empty `NumType`): <em>birer, ikişer, otuzbeşer, yirmisekizer</em>
* `Ord` (32; 2% of non-empty `NumType`): <em>birincisi, onyedi., ikincisi, İkincisi, birinci, doksandokuz., dokuz., oniki., onikinci., onsekiz.</em>

<table>
  <tr><th>Paradigm <i>bir</i></th><th><tt>Card</tt></th><th><tt>Dist</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>bir, ,bir</em></td><td><em>birer</em></td></tr>
  <tr><td><tt><tt><a href="tr-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="tr-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="tr-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt>|<tt><a href="tr-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="tr-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td><em>birini</em></td><td></td></tr>
  <tr><td><tt><tt><a href="tr-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="tr-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="tr-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>biri</em></td><td></td></tr>
  <tr><td><tt><tt><a href="tr-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="tr-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="tr-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt>|<tt><a href="tr-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="tr-feat-Person-psor.html">Person[psor]</a></tt><tt>=2</tt></tt></td><td><em>birine</em></td><td></td></tr>
  <tr><td><tt><tt><a href="tr-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="tr-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="tr-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt>|<tt><a href="tr-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="tr-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td><em>birine</em></td><td></td></tr>
  <tr><td><tt><tt><a href="tr-feat-Case.html">Case</a></tt><tt>=Loc</tt>|<tt><a href="tr-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="tr-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt>|<tt><a href="tr-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="tr-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td><em>birinde</em></td><td></td></tr>
  <tr><td><tt><tt><a href="tr-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="tr-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="tr-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt>|<tt><a href="tr-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="tr-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td><em>biri</em></td><td></td></tr>
  <tr><td><tt><tt><a href="tr-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="tr-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="tr-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>bir</em></td><td></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 95% lemmas (187) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="tr-dep-flat.html">flat</a></tt>]--> NUM</tt> (166; 99%),
<tt>NUM --[<tt><a href="tr-dep-conj.html">conj</a></tt>]--> NUM</tt> (13; 100%),
<tt>NUM --[<tt><a href="tr-dep-compound.html">compound</a></tt>]--> NUM</tt> (9; 100%),
<tt>NUM --[<tt><a href="tr-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (6; 100%),
<tt>NUM --[<tt><a href="tr-dep-case.html">case</a></tt>]--> NUM</tt> (3; 100%),
<tt>NUM --[<tt><a href="tr-dep-compound-redup.html">compound:redup</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="tr-dep-appos.html">appos</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="tr-dep-nmod-poss.html">nmod:poss</a></tt>]--> NUM</tt> (1; 100%).

