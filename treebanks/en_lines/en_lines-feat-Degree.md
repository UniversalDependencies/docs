---
layout: base
title:  'Statistics of Degree in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Features: `Degree`

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

5817 tokens (6%) have a non-empty value of `Degree`.
1878 types (18%) occur at least once with a non-empty value of `Degree`.
1683 lemmas (22%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (5621; 6% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt> (196; 0% instances).

### `ADJ`

5621 <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> tokens (94% of all `ADJ` tokens) have a non-empty value of `Degree`.

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (161; 3% of non-empty `Degree`): <em>more, better, most, worse, easier, lower, older, greater, higher, less</em>
* `Pos` (5392; 96% of non-empty `Degree`): <em>other, white, old, new, good, same, own, black, great, little</em>
* `Sup` (68; 1% of non-empty `Degree`): <em>best, biggest, greatest, worst, largest, least, nearest, commonest, deepest, oldest</em>
* `EMPTY` (346): <em>such, another, following, loud, pale, moving, existing, trading, living, calculated</em>

<table>
  <tr><th>Paradigm <i>good</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>good</em></td><td><em>better</em></td><td><em>best</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 97% lemmas (1624) occur only with one value of `Degree`.

### `ADV`

196 <tt><a href="en_lines-pos-ADV.html">ADV</a></tt> tokens (4% of all `ADV` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADV` and `Degree` co-occurred: <tt><a href="en_lines-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (196; 100%).

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (36; 18% of non-empty `Degree`): <em>longer, farther, more, nearer, sooner, harder, higher</em>
* `Pos` (143; 73% of non-empty `Degree`): <em>well, far, long, soon, close, hard, little, badly, early, fast</em>
* `Sup` (17; 9% of non-empty `Degree`): <em>least, Whilst, best, closest</em>
* `EMPTY` (4900): <em>out, up, so, then, now, back, very, just, too, again</em>

<table>
  <tr><th>Paradigm <i>well</i></th><th><tt>Pos</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>well</em></td><td><em>best</em></td></tr>
</table>

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="en_lines-dep-conj.html">conj</a></tt>]--> ADJ</tt> (215; 93%),
<tt>ADJ --[<tt><a href="en_lines-dep-amod.html">amod</a></tt>]--> ADJ</tt> (34; 87%),
<tt>ADJ --[<tt><a href="en_lines-dep-acl.html">acl</a></tt>]--> ADJ</tt> (6; 100%),
<tt>ADJ --[<tt><a href="en_lines-dep-parataxis.html">parataxis</a></tt>]--> ADJ</tt> (6; 100%),
<tt>ADJ --[<tt><a href="en_lines-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (4; 100%),
<tt>ADJ --[<tt><a href="en_lines-dep-nmod.html">nmod</a></tt>]--> ADJ</tt> (3; 100%),
<tt>ADJ --[<tt><a href="en_lines-dep-nsubj.html">nsubj</a></tt>]--> ADJ</tt> (3; 100%),
<tt>ADJ --[<tt><a href="en_lines-dep-appos.html">appos</a></tt>]--> ADJ</tt> (2; 67%),
<tt>ADJ --[<tt><a href="en_lines-dep-obl.html">obl</a></tt>]--> ADJ</tt> (2; 67%),
<tt>ADJ --[<tt><a href="en_lines-dep-ccomp.html">ccomp</a></tt>]--> ADJ</tt> (1; 100%).

