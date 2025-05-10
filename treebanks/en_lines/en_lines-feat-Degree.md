---
layout: base
title:  'Statistics of Degree in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Features: `Degree`

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

6935 tokens (7%) have a non-empty value of `Degree`.
2208 types (20%) occur at least once with a non-empty value of `Degree`.
2017 lemmas (24%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (6706; 6% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt> (229; 0% instances).

### `ADJ`

6706 <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> tokens (99% of all `ADJ` tokens) have a non-empty value of `Degree`.

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (191; 3% of non-empty `Degree`): <em>more, better, older, most, worse, lower, easier, greater, higher, younger</em>
* `Pos` (6433; 96% of non-empty `Degree`): <em>other, white, old, own, new, good, long, same, little, black</em>
* `Sup` (82; 1% of non-empty `Degree`): <em>best, nearest, greatest, biggest, worst, largest, least, closest, commonest, deepest</em>
* `EMPTY` (48): <em>else, such, another, aghast, bevelled, clogged, juddering, left, less, seventh</em>

<table>
  <tr><th>Paradigm <i>good</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>good</em></td><td><em>better</em></td><td><em>best</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 97% lemmas (1950) occur only with one value of `Degree`.

### `ADV`

229 <tt><a href="en_lines-pos-ADV.html">ADV</a></tt> tokens (4% of all `ADV` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADV` and `Degree` co-occurred: <tt><a href="en_lines-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (229; 100%).

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (49; 21% of non-empty `Degree`): <em>longer, farther, more, nearer, sooner, closer, faster, harder, higher</em>
* `Pos` (161; 70% of non-empty `Degree`): <em>well, far, long, soon, close, hard, early, little, badly, fast</em>
* `Sup` (19; 8% of non-empty `Degree`): <em>least, Whilst, best</em>
* `EMPTY` (5512): <em>out, up, so, then, now, back, very, just, there, again</em>

<table>
  <tr><th>Paradigm <i>well</i></th><th><tt>Pos</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>well</em></td><td><em>best</em></td></tr>
</table>

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="en_lines-dep-conj.html">conj</a></tt>]--> ADJ</tt> (257; 95%),
<tt>ADJ --[<tt><a href="en_lines-dep-amod.html">amod</a></tt>]--> ADJ</tt> (39; 93%),
<tt>ADJ --[<tt><a href="en_lines-dep-acl.html">acl</a></tt>]--> ADJ</tt> (10; 100%),
<tt>ADJ --[<tt><a href="en_lines-dep-parataxis.html">parataxis</a></tt>]--> ADJ</tt> (9; 90%),
<tt>ADJ --[<tt><a href="en_lines-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (6; 86%),
<tt>ADJ --[<tt><a href="en_lines-dep-ccomp.html">ccomp</a></tt>]--> ADJ</tt> (3; 100%),
<tt>ADJ --[<tt><a href="en_lines-dep-nsubj.html">nsubj</a></tt>]--> ADJ</tt> (3; 100%),
<tt>ADJ --[<tt><a href="en_lines-dep-acl-relcl.html">acl:relcl</a></tt>]--> ADJ</tt> (2; 67%),
<tt>ADJ --[<tt><a href="en_lines-dep-appos.html">appos</a></tt>]--> ADJ</tt> (2; 67%),
<tt>ADJ --[<tt><a href="en_lines-dep-csubj.html">csubj</a></tt>]--> ADJ</tt> (2; 67%).

