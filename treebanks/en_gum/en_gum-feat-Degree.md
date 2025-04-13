---
layout: base
title:  'Statistics of Degree in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `Degree`

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

18857 tokens (9%) have a non-empty value of `Degree`.
3419 types (20%) occur at least once with a non-empty value of `Degree`.
3047 lemmas (22%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (13842; 7% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (5015; 2% instances).

### `ADJ`

13842 <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> tokens (99% of all `ADJ` tokens) have a non-empty value of `Degree`.

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (515; 4% of non-empty `Degree`): <em>more, better, greater, larger, further, higher, lower, older, smaller, younger</em>
* `Pos` (12966; 94% of non-empty `Degree`): <em>other, new, many, good, little, different, first, same, last, own</em>
* `Sup` (361; 3% of non-empty `Degree`): <em>most, best, least, largest, greatest, worst, highest, biggest, latest, smallest</em>
* `EMPTY` (119): <em>such</em>

<table>
  <tr><th>Paradigm <i>good</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>good</em></td><td><em>better</em></td><td><em>best</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 97% lemmas (2445) occur only with one value of `Degree`.

### `ADV`

5015 <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> tokens (50% of all `ADV` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADV` and `Degree` co-occurred: <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (5015; 100%).

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (409; 8% of non-empty `Degree`): <em>more, later, less, longer, earlier, better, further, sooner, slower, closer</em>
* `Pos` (4464; 89% of non-empty `Degree`): <em>really, well, back, still, again, too, away, much, probably, actually</em>
* `Sup` (142; 3% of non-empty `Degree`): <em>most, best, least, longest, fastest, foremost</em>
* `EMPTY` (5088): <em>so, when, just, then, also, how, now, here, very, where</em>

<table>
  <tr><th>Paradigm <i>well</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>well</em></td><td><em>better</em></td><td><em>best</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td><em>well</em></td><td></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 98% lemmas (617) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADJ</tt> (443; 96%),
<tt>ADJ --[<tt><a href="en_gum-dep-amod.html">amod</a></tt>]--> ADJ</tt> (67; 89%),
<tt>ADV --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADV</tt> (63; 85%),
<tt>ADJ --[<tt><a href="en_gum-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (29; 88%),
<tt>ADJ --[<tt><a href="en_gum-dep-compound.html">compound</a></tt>]--> ADJ</tt> (28; 100%),
<tt>ADJ --[<tt><a href="en_gum-dep-parataxis.html">parataxis</a></tt>]--> ADJ</tt> (26; 96%),
<tt>ADJ --[<tt><a href="en_gum-dep-obl-unmarked.html">obl:unmarked</a></tt>]--> ADJ</tt> (16; 80%),
<tt>ADJ --[<tt><a href="en_gum-dep-obl.html">obl</a></tt>]--> ADJ</tt> (12; 67%),
<tt>ADJ --[<tt><a href="en_gum-dep-ccomp.html">ccomp</a></tt>]--> ADJ</tt> (11; 85%),
<tt>ADJ --[<tt><a href="en_gum-dep-nsubj.html">nsubj</a></tt>]--> ADJ</tt> (8; 73%).

