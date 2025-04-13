---
layout: base
title:  'Statistics of Degree in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Features: `Degree`

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

1610 tokens (8%) have a non-empty value of `Degree`.
782 types (15%) occur at least once with a non-empty value of `Degree`.
724 lemmas (16%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (1548; 7% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (62; 0% instances).

### `ADJ`

1548 <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> tokens (100% of all `ADJ` tokens) have a non-empty value of `Degree`.

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (52; 3% of non-empty `Degree`): <em>more, greater, higher, better, earlier, fewer, lower, Elder, Stranger, bigger</em>
* `Pos` (1459; 94% of non-empty `Degree`): <em>new, many, other, last, great, high, first, own, several, political</em>
* `Sup` (37; 2% of non-empty `Degree`): <em>best, most, biggest, latest, worst, tallest, largest, least, deepest, earliest</em>
* `EMPTY` (2): <em>enough, more</em>

<table>
  <tr><th>Paradigm <i>high</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>high</em></td><td><em>higher</em></td><td><em>highest</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 98% lemmas (707) occur only with one value of `Degree`.

### `ADV`

62 <tt><a href="en_pud-pos-ADV.html">ADV</a></tt> tokens (8% of all `ADV` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADV` and `Degree` co-occurred: <tt><a href="en_pud-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (62; 100%).

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (16; 26% of non-empty `Degree`): <em>longer, earlier, less, better, closer, further</em>
* `Pos` (37; 60% of non-empty `Degree`): <em>well, far, late, soon, close, early, hard, long, Fast</em>
* `Sup` (9; 15% of non-empty `Degree`): <em>least, best</em>
* `EMPTY` (761): <em>also, when, so, only, more, where, however, most, as, about</em>

<table>
  <tr><th>Paradigm <i>well</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>well</em></td><td><em>better</em></td><td><em>best</em></td></tr>
</table>

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="en_pud-dep-conj.html">conj</a></tt>]--> ADJ</tt> (24; 100%),
<tt>ADJ --[<tt><a href="en_pud-dep-amod.html">amod</a></tt>]--> ADJ</tt> (11; 85%),
<tt>ADJ --[<tt><a href="en_pud-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (3; 100%),
<tt>ADJ --[<tt><a href="en_pud-dep-compound.html">compound</a></tt>]--> ADJ</tt> (3; 100%),
<tt>ADJ --[<tt><a href="en_pud-dep-nsubj.html">nsubj</a></tt>]--> ADJ</tt> (3; 75%),
<tt>ADJ --[<tt><a href="en_pud-dep-xcomp.html">xcomp</a></tt>]--> ADJ</tt> (3; 100%),
<tt>ADJ --[<tt><a href="en_pud-dep-advmod.html">advmod</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="en_pud-dep-obl-unmarked.html">obl:unmarked</a></tt>]--> ADJ</tt> (1; 100%).

