---
layout: base
title:  'Statistics of Degree in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Features: `Degree`

This feature is universal but the values `Equ` are language-specific.
It occurs with 4 different values: `Cmp`, `Equ`, `Pos`, `Sup`.

3068 tokens (7%) have a non-empty value of `Degree`.
969 types (14%) occur at least once with a non-empty value of `Degree`.
715 lemmas (16%) occur at least once with a non-empty value of `Degree`.
The feature is used with 1 part-of-speech tags: <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (3068; 7% instances).

### `ADJ`

3068 <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> tokens (100% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="cy_ccg-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (2700; 88%), <tt><a href="cy_ccg-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (2646; 86%), <tt><a href="cy_ccg-feat-Mutation.html">Mutation</a></tt><tt>=EMPTY</tt> (2156; 70%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (150; 5% of non-empty `Degree`): <em>mwy, fwy, well, uwch, nes, hŷn, ehangach, gwell, bellach, amlach</em>
* `Equ` (29; 1% of non-empty `Degree`): <em>ogystal, cystal, belled, rhated, gryfed, gynted, gystal</em>
* `Pos` (2684; 87% of non-empty `Degree`): <em>newydd, Cymraeg, lleol, arall, pob, mawr, hen, bob, holl, Gymraeg</em>
* `Sup` (205; 7% of non-empty `Degree`): <em>mwyaf, nesaf, fwyaf, uchaf, cyntaf, diwethaf, gorau, olaf, gwaethaf, gyntaf</em>

<table>
  <tr><th>Paradigm <i>da</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th><th><tt>Equ</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>da</em></td><td><em>well, gwell</em></td><td><em>gorau</em></td><td><em>cystal</em></td></tr>
  <tr><td><tt><tt><a href="cy_ccg-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="cy_ccg-feat-Mutation.html">Mutation</a></tt><tt>=SM</tt>|<tt><a href="cy_ccg-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>well</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="cy_ccg-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="cy_ccg-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>gwell</em></td><td><em>gwell</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="cy_ccg-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="cy_ccg-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td></td><td><em>cystal</em></td></tr>
  <tr><td><tt><tt><a href="cy_ccg-feat-Mutation.html">Mutation</a></tt><tt>=SM</tt></tt></td><td><em>dda, well</em></td><td></td><td><em>gorau, orau</em></td><td></td></tr>
  <tr><td><tt><tt><a href="cy_ccg-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td></td><td><em>cystal</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 95% lemmas (679) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="cy_ccg-dep-conj.html">conj</a></tt>]--> ADJ</tt> (67; 99%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-amod.html">amod</a></tt>]--> ADJ</tt> (19; 73%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (3; 60%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-csubj.html">csubj</a></tt>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-obl.html">obl</a></tt>]--> ADJ</tt> (2; 67%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-acl-relcl.html">acl:relcl</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-compound.html">compound</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-parataxis.html">parataxis</a></tt>]--> ADJ</tt> (1; 100%).

