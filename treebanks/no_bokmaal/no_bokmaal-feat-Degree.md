---
layout: base
title:  'Statistics of Degree in UD_Norwegian-Bokmaal'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Bokmaal: Features: `Degree`

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

24745 tokens (8%) have a non-empty value of `Degree`.
4449 types (14%) occur at least once with a non-empty value of `Degree`.
2769 lemmas (12%) occur at least once with a non-empty value of `Degree`.
The feature is used with 1 part-of-speech tags: <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt> (24745; 8% instances).

### `ADJ`

24745 <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt> tokens (92% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="no_bokmaal-feat-Number.html">Number</a></tt><tt>=Sing</tt> (15932; 64%), <tt><a href="no_bokmaal-feat-Definite.html">Definite</a></tt><tt>=Ind</tt> (13380; 54%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (2238; 9% of non-empty `Degree`): <em>mer, flere, tidligere, bedre, større, mindre, videre, lenger, senere, høyere</em>
* `Pos` (21365; 86% of non-empty `Degree`): <em>mange, norske, mye, første, store, nye, hele, helt, litt, godt</em>
* `Sup` (1142; 5% of non-empty `Degree`): <em>mest, beste, fleste, minst, største, best, viktigste, fremst, verste, nærmest</em>
* `EMPTY` (2065): <em>økt, 22., sittende, tilsvarende, stående, bekymret, forurensende, knyttet, økende, 2.</em>

<table>
  <tr><th>Paradigm <i>mye</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>mer, mere</em></td><td></td></tr>
  <tr><td><tt><tt><a href="no_bokmaal-feat-Definite.html">Definite</a></tt><tt>=Def</tt></tt></td><td></td><td></td><td><em>meste</em></td></tr>
  <tr><td><tt><tt><a href="no_bokmaal-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="no_bokmaal-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>mye</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="no_bokmaal-feat-Definite.html">Definite</a></tt><tt>=Ind</tt></tt></td><td></td><td></td><td><em>mest</em></td></tr>
  <tr><td><tt><tt><a href="no_bokmaal-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="no_bokmaal-feat-Gender.html">Gender</a></tt><tt>=Fem,Masc</tt>|<tt><a href="no_bokmaal-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>mye</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="no_bokmaal-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="no_bokmaal-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="no_bokmaal-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>mye</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="no_bokmaal-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>mye</em></td><td></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 96% lemmas (2646) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="no_bokmaal-dep-advmod.html">advmod</a></tt>]--> ADJ</tt> (1086; 54%),
<tt>ADJ --[<tt><a href="no_bokmaal-dep-conj.html">conj</a></tt>]--> ADJ</tt> (733; 82%),
<tt>ADJ --[<tt><a href="no_bokmaal-dep-amod.html">amod</a></tt>]--> ADJ</tt> (52; 55%),
<tt>ADJ --[<tt><a href="no_bokmaal-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (30; 67%),
<tt>ADJ --[<tt><a href="no_bokmaal-dep-nsubj.html">nsubj</a></tt>]--> ADJ</tt> (20; 63%),
<tt>ADJ --[<tt><a href="no_bokmaal-dep-csubj.html">csubj</a></tt>]--> ADJ</tt> (15; 71%),
<tt>ADJ --[<tt><a href="no_bokmaal-dep-dislocated.html">dislocated</a></tt>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<tt><a href="no_bokmaal-dep-obj.html">obj</a></tt>]--> ADJ</tt> (2; 67%),
<tt>ADJ --[<tt><a href="no_bokmaal-dep-ccomp.html">ccomp</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="no_bokmaal-dep-nmod.html">nmod</a></tt>]--> ADJ</tt> (1; 100%).

