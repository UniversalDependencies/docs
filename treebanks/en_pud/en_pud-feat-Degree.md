---
layout: base
title:  'Statistics of Degree in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Features: `Degree`

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

1673 tokens (8%) have a non-empty value of `Degree`.
784 types (15%) occur at least once with a non-empty value of `Degree`.
724 lemmas (16%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (1568; 7% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (105; 0% instances).

### `ADJ`

1568 <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> tokens (100% of all `ADJ` tokens) have a non-empty value of `Degree`.

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (60; 4% of non-empty `Degree`): <em>more, greater, further, higher, better, earlier, fewer, later, lower, Elder</em>
* `Pos` (1467; 94% of non-empty `Degree`): <em>new, many, other, last, great, first, high, own, several, political</em>
* `Sup` (41; 3% of non-empty `Degree`): <em>least, best, most, biggest, latest, tallest, worst, largest, deepest, earliest</em>

<table>
  <tr><th>Paradigm <i>high</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>high</em></td><td><em>higher</em></td><td><em>highest</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 98% lemmas (706) occur only with one value of `Degree`.

### `ADV`

105 <tt><a href="en_pud-pos-ADV.html">ADV</a></tt> tokens (13% of all `ADV` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADV` and `Degree` co-occurred: <tt><a href="en_pud-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (105; 100%).

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (45; 43% of non-empty `Degree`): <em>more, later, longer, earlier, further, less, better, closer</em>
* `Pos` (39; 37% of non-empty `Degree`): <em>well, far, late, soon, close, early, hard, long, Fast, foremost</em>
* `Sup` (21; 20% of non-empty `Degree`): <em>most, best, worst</em>
* `EMPTY` (709): <em>also, when, so, only, where, however, as, about, just, now</em>

<table>
  <tr><th>Paradigm <i>well</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>well</em></td><td><em>better</em></td><td><em>best</em></td></tr>
</table>

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="en_pud-dep-conj.html">conj</a></tt>]--> ADJ</tt> (25; 100%),
<tt>ADJ --[<tt><a href="en_pud-dep-amod.html">amod</a></tt>]--> ADJ</tt> (8; 100%),
<tt>ADJ --[<tt><a href="en_pud-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (3; 100%),
<tt>ADJ --[<tt><a href="en_pud-dep-compound.html">compound</a></tt>]--> ADJ</tt> (3; 100%),
<tt>ADJ --[<tt><a href="en_pud-dep-nsubj.html">nsubj</a></tt>]--> ADJ</tt> (3; 75%),
<tt>ADJ --[<tt><a href="en_pud-dep-xcomp.html">xcomp</a></tt>]--> ADJ</tt> (3; 100%),
<tt>ADJ --[<tt><a href="en_pud-dep-advmod.html">advmod</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="en_pud-dep-obl-unmarked.html">obl:unmarked</a></tt>]--> ADJ</tt> (1; 100%).

