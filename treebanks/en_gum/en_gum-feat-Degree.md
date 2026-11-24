---
layout: base
title:  'Statistics of Degree in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `Degree`

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

21574 tokens (8%) have a non-empty value of `Degree`.
3727 types (19%) occur at least once with a non-empty value of `Degree`.
3300 lemmas (22%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (16493; 6% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (5081; 2% instances).

### `ADJ`

16493 <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> tokens (99% of all `ADJ` tokens) have a non-empty value of `Degree`.

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (629; 4% of non-empty `Degree`): <em>more, better, greater, larger, further, higher, lower, easier, older, smaller</em>
* `Pos` (15434; 94% of non-empty `Degree`): <em>other, new, many, good, little, same, first, different, last, own</em>
* `Sup` (430; 3% of non-empty `Degree`): <em>most, best, least, largest, worst, greatest, highest, latest, biggest, smallest</em>
* `EMPTY` (147): <em>such</em>

<table>
  <tr><th>Paradigm <i>good</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>good</em></td><td><em>better</em></td><td><em>best</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 97% lemmas (2652) occur only with one value of `Degree`.

### `ADV`

5081 <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> tokens (42% of all `ADV` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADV` and `Degree` co-occurred: <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (5006; 99%).

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (510; 10% of non-empty `Degree`): <em>more, later, less, longer, better, earlier, further, sooner, closer, faster</em>
* `Pos` (4409; 87% of non-empty `Degree`): <em>well, much, probably, away, right, often, around, far, up, down</em>
* `Sup` (162; 3% of non-empty `Degree`): <em>most, best, least, longest, fastest, foremost</em>
* `EMPTY` (7133): <em>so, just, when, then, also, how, now, here, where, really</em>

<table>
  <tr><th>Paradigm <i>well</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>well</em></td><td><em>better</em></td><td><em>best</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td><em>well</em></td><td></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 98% lemmas (661) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADJ</tt> (520; 96%),
<tt>ADJ --[<tt><a href="en_gum-dep-amod.html">amod</a></tt>]--> ADJ</tt> (74; 88%),
<tt>ADV --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADV</tt> (71; 88%),
<tt>ADJ --[<tt><a href="en_gum-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (34; 87%),
<tt>ADJ --[<tt><a href="en_gum-dep-compound.html">compound</a></tt>]--> ADJ</tt> (31; 100%),
<tt>ADJ --[<tt><a href="en_gum-dep-parataxis.html">parataxis</a></tt>]--> ADJ</tt> (29; 97%),
<tt>ADJ --[<tt><a href="en_gum-dep-obl-unmarked.html">obl:unmarked</a></tt>]--> ADJ</tt> (16; 73%),
<tt>ADJ --[<tt><a href="en_gum-dep-obl.html">obl</a></tt>]--> ADJ</tt> (14; 70%),
<tt>ADJ --[<tt><a href="en_gum-dep-ccomp.html">ccomp</a></tt>]--> ADJ</tt> (13; 87%),
<tt>ADV --[<tt><a href="en_gum-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (9; 90%).

