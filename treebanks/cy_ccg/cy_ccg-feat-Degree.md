---
layout: base
title:  'Statistics of Degree in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Features: `Degree`

This feature is universal but the values `Equ` are language-specific.
It occurs with 4 different values: `Cmp`, `Equ`, `Pos`, `Sup`.

3495 tokens (7%) have a non-empty value of `Degree`.
1023 types (14%) occur at least once with a non-empty value of `Degree`.
757 lemmas (16%) occur at least once with a non-empty value of `Degree`.
The feature is used with 1 part-of-speech tags: <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (3495; 7% instances).

### `ADJ`

3495 <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> tokens (100% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="cy_ccg-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (3123; 89%), <tt><a href="cy_ccg-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (3070; 88%), <tt><a href="cy_ccg-feat-Mutation.html">Mutation</a></tt><tt>=EMPTY</tt> (2448; 70%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (178; 5% of non-empty `Degree`): <em>mwy, fwy, well, uwch, bellach, nes, gwell, hŷn, ehangach, amlach</em>
* `Equ` (30; 1% of non-empty `Degree`): <em>ogystal, cystal, belled, rhated, gryfed, gynted, gystal</em>
* `Pos` (3050; 87% of non-empty `Degree`): <em>Cymraeg, newydd, lleol, pob, arall, Gymraeg, mawr, holl, bob, hen</em>
* `Sup` (237; 7% of non-empty `Degree`): <em>mwyaf, nesaf, uchaf, diwethaf, cyntaf, fwyaf, gorau, olaf, gyntaf, gwaethaf</em>

<table>
  <tr><th>Paradigm <i>da</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th><th><tt>Equ</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>da</em></td><td><em>well, gwell</em></td><td><em>gorau</em></td><td><em>cystal</em></td></tr>
  <tr><td><tt><tt><a href="cy_ccg-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="cy_ccg-feat-Mutation.html">Mutation</a></tt><tt>=SM</tt>|<tt><a href="cy_ccg-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>well</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="cy_ccg-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="cy_ccg-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>gwell</em></td><td><em>gwell</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="cy_ccg-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="cy_ccg-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td></td><td><em>cystal</em></td></tr>
  <tr><td><tt><tt><a href="cy_ccg-feat-Mutation.html">Mutation</a></tt><tt>=SM</tt></tt></td><td><em>dda, cystal, well</em></td><td><em>well</em></td><td><em>gorau, orau</em></td><td></td></tr>
  <tr><td><tt><tt><a href="cy_ccg-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td></td><td><em>cystal</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 95% lemmas (720) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="cy_ccg-dep-conj.html">conj</a></tt>]--> ADJ</tt> (76; 97%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-amod.html">amod</a></tt>]--> ADJ</tt> (20; 74%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (3; 60%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-csubj.html">csubj</a></tt>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-nmod.html">nmod</a></tt>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-acl-relcl.html">acl:relcl</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-ccomp.html">ccomp</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-compound.html">compound</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="cy_ccg-dep-parataxis.html">parataxis</a></tt>]--> ADJ</tt> (1; 100%).

