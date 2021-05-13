---
layout: base
title:  'Statistics of Degree in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Features: `Degree`

This feature is universal but the values `Equ` are language-specific.
It occurs with 4 different values: `Cmp`, `Equ`, `Pos`, `Sup`.

2553 tokens (7%) have a non-empty value of `Degree`.
853 types (15%) occur at least once with a non-empty value of `Degree`.
637 lemmas (16%) occur at least once with a non-empty value of `Degree`.
The feature is used with 1 part-of-speech tags: <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (2553; 7% instances).

### `ADJ`

2553 <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> tokens (100% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="cy_ccg-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (2192; 86%), <tt><a href="cy_ccg-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (2138; 84%), <tt><a href="cy_ccg-feat-Mutation.html">Mutation</a></tt><tt>=EMPTY</tt> (1802; 71%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (123; 5% of non-empty `Degree`): <em>mwy, well, fwy, uwch, nes, ehangach, gwell, hŷn, bellach, amlach</em>
* `Equ` (26; 1% of non-empty `Degree`): <em>ogystal, cystal, belled, rhated, gryfed, gynted, gystal</em>
* `Pos` (2234; 88% of non-empty `Degree`): <em>newydd, Cymraeg, arall, lleol, pob, hen, bob, holl, prif, ifanc</em>
* `Sup` (170; 7% of non-empty `Degree`): <em>mwyaf, nesaf, cyntaf, diwethaf, fwyaf, gorau, olaf, uchaf, gwaethaf, gyntaf</em>

<table>
  <tr><th>Paradigm <i>da</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th><th><tt>Equ</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>da</em></td><td><em>well, gwell</em></td><td><em>gorau</em></td><td><em>cystal</em></td></tr>
  <tr><td><tt><tt><a href="cy_ccg-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="cy_ccg-feat-Mutation.html">Mutation</a></tt><tt>=SM</tt>|<tt><a href="cy_ccg-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>well</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="cy_ccg-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="cy_ccg-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>gwell</em></td><td><em>gwell</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="cy_ccg-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="cy_ccg-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td></td><td><em>cystal</em></td></tr>
  <tr><td><tt><tt><a href="cy_ccg-feat-Mutation.html">Mutation</a></tt><tt>=SM</tt></tt></td><td><em>dda, well</em></td><td></td><td><em>gorau, orau</em></td><td></td></tr>
  <tr><td><tt><tt><a href="cy_ccg-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td></td><td><em>cystal</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 95% lemmas (604) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="cy_ccg-dep-conj.html">conj</a></tt>]--> ADJ</tt> (56; 100%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-amod.html">amod</a></tt>]--> ADJ</tt> (19; 76%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-csubj.html">csubj</a></tt>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-obl.html">obl</a></tt>]--> ADJ</tt> (2; 67%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-acl-relcl.html">acl:relcl</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-compound.html">compound</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-parataxis.html">parataxis</a></tt>]--> ADJ</tt> (1; 100%).

