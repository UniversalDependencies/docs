---
layout: base
title:  'Statistics of Degree in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `Degree`

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

6796 tokens (7%) have a non-empty value of `Degree`.
1922 types (16%) occur at least once with a non-empty value of `Degree`.
1742 lemmas (18%) occur at least once with a non-empty value of `Degree`.
The feature is used with 4 part-of-speech tags: <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (6528; 7% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (264; 0% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances).

### `ADJ`

6528 <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> tokens (100% of all `ADJ` tokens) have a non-empty value of `Degree`.

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (261; 4% of non-empty `Degree`): <em>more, better, larger, greater, further, easier, higher, younger, smaller, later</em>
* `Pos` (6064; 93% of non-empty `Degree`): <em>other, many, new, good, first, such, own, different, last, important</em>
* `Sup` (203; 3% of non-empty `Degree`): <em>most, best, least, largest, highest, greatest, latest, worst, biggest, hardest</em>

<table>
  <tr><th>Paradigm <i>good</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>good</em></td><td><em>better</em></td><td><em>best</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 97% lemmas (1690) occur only with one value of `Degree`.

### `ADV`

264 <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> tokens (7% of all `ADV` tokens) have a non-empty value of `Degree`.

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (90; 34% of non-empty `Degree`): <em>less, later, earlier, longer, further, better, sooner, worse</em>
* `Pos` (163; 62% of non-empty `Degree`): <em>well, far, long, soon, little, early, hard, badly, close, fast</em>
* `Sup` (11; 4% of non-empty `Degree`): <em>best, least, fastest, longest</em>
* `EMPTY` (3395): <em>also, so, then, just, more, as, very, even, most, only</em>

<table>
  <tr><th>Paradigm <i>well</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>well</em></td><td><em>better</em></td><td><em>best</em></td></tr>
</table>

### `DET`

2 <tt><a href="en_gum-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `DET` and `Degree` co-occurred: <tt><a href="en_gum-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (2; 100%), <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (2; 100%).

`DET` tokens may have the following values of `Degree`:

* `Pos` (2; 100% of non-empty `Degree`): <em>other, such</em>
* `EMPTY` (8224): <em>the, a, an, this, some, these, no, all, that, any</em>

### `SCONJ`

2 <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> tokens (0% of all `SCONJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `SCONJ` and `Degree` co-occurred: <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (2; 100%).

`SCONJ` tokens may have the following values of `Degree`:

* `Pos` (2; 100% of non-empty `Degree`): <em>such</em>
* `EMPTY` (1957): <em>that, if, when, as, how, where, because, while, by, after</em>

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADJ</tt> (209; 95%),
<tt>ADJ --[<tt><a href="en_gum-dep-amod.html">amod</a></tt>]--> ADJ</tt> (22; 76%),
<tt>ADJ --[<tt><a href="en_gum-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (16; 89%),
<tt>ADJ --[<tt><a href="en_gum-dep-advmod.html">advmod</a></tt>]--> ADJ</tt> (5; 56%),
<tt>ADJ --[<tt><a href="en_gum-dep-parataxis.html">parataxis</a></tt>]--> ADJ</tt> (5; 100%),
<tt>ADJ --[<tt><a href="en_gum-dep-obl.html">obl</a></tt>]--> ADJ</tt> (4; 57%),
<tt>ADJ --[<tt><a href="en_gum-dep-ccomp.html">ccomp</a></tt>]--> ADJ</tt> (3; 100%),
<tt>ADJ --[<tt><a href="en_gum-dep-xcomp.html">xcomp</a></tt>]--> ADJ</tt> (3; 75%),
<tt>ADV --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADV</tt> (3; 75%),
<tt>ADJ --[<tt><a href="en_gum-dep-acl-relcl.html">acl:relcl</a></tt>]--> ADJ</tt> (2; 100%).

