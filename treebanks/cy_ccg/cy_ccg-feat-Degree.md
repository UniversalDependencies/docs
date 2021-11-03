---
layout: base
title:  'Statistics of Degree in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Features: `Degree`

This feature is universal but the values `Equ` are language-specific.
It occurs with 4 different values: `Cmp`, `Equ`, `Pos`, `Sup`.

2833 tokens (7%) have a non-empty value of `Degree`.
920 types (15%) occur at least once with a non-empty value of `Degree`.
678 lemmas (16%) occur at least once with a non-empty value of `Degree`.
The feature is used with 1 part-of-speech tags: <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (2833; 7% instances).

### `ADJ`

2833 <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> tokens (100% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="cy_ccg-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (2463; 87%), <tt><a href="cy_ccg-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (2409; 85%), <tt><a href="cy_ccg-feat-Mutation.html">Mutation</a></tt><tt>=EMPTY</tt> (1996; 70%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (142; 5% of non-empty `Degree`): <em>mwy, fwy, well, uwch, nes, hŷn, ehangach, gwell, bellach, hwyrach</em>
* `Equ` (29; 1% of non-empty `Degree`): <em>ogystal, cystal, belled, rhated, gryfed, gynted, gystal</em>
* `Pos` (2478; 87% of non-empty `Degree`): <em>newydd, Cymraeg, lleol, pob, arall, hen, holl, mawr, bob, prif</em>
* `Sup` (184; 6% of non-empty `Degree`): <em>mwyaf, nesaf, cyntaf, fwyaf, diwethaf, gorau, olaf, uchaf, gwaethaf, gyntaf</em>

<table>
  <tr><th>Paradigm <i>da</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th><th><tt>Equ</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>da</em></td><td><em>well, gwell</em></td><td><em>gorau</em></td><td><em>cystal</em></td></tr>
  <tr><td><tt><tt><a href="cy_ccg-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="cy_ccg-feat-Mutation.html">Mutation</a></tt><tt>=SM</tt>|<tt><a href="cy_ccg-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>well</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="cy_ccg-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="cy_ccg-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>gwell</em></td><td><em>gwell</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="cy_ccg-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="cy_ccg-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td></td><td><em>cystal</em></td></tr>
  <tr><td><tt><tt><a href="cy_ccg-feat-Mutation.html">Mutation</a></tt><tt>=SM</tt></tt></td><td><em>dda, well</em></td><td></td><td><em>gorau, orau</em></td><td></td></tr>
  <tr><td><tt><tt><a href="cy_ccg-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td></td><td><em>cystal</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 95% lemmas (643) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="cy_ccg-dep-conj.html">conj</a></tt>]--> ADJ</tt> (62; 98%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-amod.html">amod</a></tt>]--> ADJ</tt> (19; 76%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-csubj.html">csubj</a></tt>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-obl.html">obl</a></tt>]--> ADJ</tt> (2; 67%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-acl-relcl.html">acl:relcl</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-compound.html">compound</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-parataxis.html">parataxis</a></tt>]--> ADJ</tt> (1; 100%).

