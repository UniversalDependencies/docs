---
layout: base
title:  'Statistics of Degree in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Features: `Degree`

This feature is universal but the values `Equ` are language-specific.
It occurs with 4 different values: `Cmp`, `Equ`, `Pos`, `Sup`.

731 tokens (7%) have a non-empty value of `Degree`.
397 types (14%) occur at least once with a non-empty value of `Degree`.
349 lemmas (17%) occur at least once with a non-empty value of `Degree`.
The feature is used with 1 part-of-speech tags: <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (731; 7% instances).

### `ADJ`

731 <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> tokens (99% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="cy_ccg-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (609; 83%), <tt><a href="cy_ccg-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (576; 79%), <tt><a href="cy_ccg-feat-Mutation.html">Mutation</a></tt><tt>=EMPTY</tt> (492; 67%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (33; 5% of non-empty `Degree`): <em>mwy, fwy, well, uwch, amlach, bellach, ehangach, arafach, cynharach, harddach</em>
* `Equ` (9; 1% of non-empty `Degree`): <em>cystal, galed, rhated, trydded, belled, gryfed, gynted</em>
* `Pos` (641; 88% of non-empty `Degree`): <em>Cymraeg, lleol, newydd, Gymraeg, hen, unig, bob, holl, mawr, prif</em>
* `Sup` (48; 7% of non-empty `Degree`): <em>cyntaf, uchaf, fwyaf, nesaf, gorau, mwyaf, amlycaf, diwethaf, bennaf, eithaf</em>
* `EMPTY` (8): <em>ail, drydedd, chweched, drydydd, ugeinfed, unfed</em>

<table>
  <tr><th>Paradigm <i>da</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th><th><tt>Equ</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>da</em></td><td><em>well</em></td><td><em>gorau</em></td><td><em>cystal</em></td></tr>
  <tr><td><tt><tt><a href="cy_ccg-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="cy_ccg-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td></td><td><em>cystal</em></td></tr>
  <tr><td><tt><tt><a href="cy_ccg-feat-Mutation.html">Mutation</a></tt><tt>=SM</tt></tt></td><td><em>dda</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="cy_ccg-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td></td><td><em>cystal</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 95% lemmas (332) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="cy_ccg-dep-conj.html">conj</a></tt>]--> ADJ</tt> (8; 100%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-amod.html">amod</a></tt>]--> ADJ</tt> (4; 80%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-ccomp.html">ccomp</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-compound.html">compound</a></tt>]--> ADJ</tt> (1; 100%).

