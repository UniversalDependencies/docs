---
layout: base
title:  'Statistics of Degree in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `Degree`

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

12404 tokens (9%) have a non-empty value of `Degree`.
2735 types (19%) occur at least once with a non-empty value of `Degree`.
2468 lemmas (22%) occur at least once with a non-empty value of `Degree`.
The feature is used with 6 part-of-speech tags: <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (9158; 7% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (3229; 2% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (11; 0% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).

### `ADJ`

9158 <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> tokens (100% of all `ADJ` tokens) have a non-empty value of `Degree`.

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (319; 3% of non-empty `Degree`): <em>more, better, larger, greater, further, easier, higher, later, smaller, younger</em>
* `Pos` (8596; 94% of non-empty `Degree`): <em>other, many, new, good, little, first, such, same, different, last</em>
* `Sup` (243; 3% of non-empty `Degree`): <em>most, best, least, largest, highest, worst, greatest, latest, biggest, earliest</em>

<table>
  <tr><th>Paradigm <i>good</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>good</em></td><td><em>better</em></td><td><em>best</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 97% lemmas (1964) occur only with one value of `Degree`.

### `ADV`

3229 <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> tokens (58% of all `ADV` tokens) have a non-empty value of `Degree`.

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (268; 8% of non-empty `Degree`): <em>more, later, less, earlier, longer, further, better, sooner, Lesser, faster</em>
* `Pos` (2850; 88% of non-empty `Degree`): <em>well, really, back, still, too, away, much, again, around, often</em>
* `Sup` (111; 3% of non-empty `Degree`): <em>most, best, least, longest, fastest, foremost</em>
* `EMPTY` (2332): <em>so, also, then, just, very, as, now, only, even, there</em>

<table>
  <tr><th>Paradigm <i>well</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>well</em></td><td><em>better</em></td><td><em>best</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td><em>well</em></td><td></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 98% lemmas (521) occur only with one value of `Degree`.

### `SCONJ`

11 <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> tokens (0% of all `SCONJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `SCONJ` and `Degree` co-occurred: <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (11; 100%).

`SCONJ` tokens may have the following values of `Degree`:

* `Pos` (11; 100% of non-empty `Degree`): <em>instead, such, like</em>
* `EMPTY` (2595): <em>that, if, when, as, because, where, how, by, while, of</em>

### `DET`

3 <tt><a href="en_gum-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `DET` and `Degree` co-occurred: <tt><a href="en_gum-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (3; 100%), <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (3; 100%).

`DET` tokens may have the following values of `Degree`:

* `Pos` (3; 100% of non-empty `Degree`): <em>all, next, other</em>
* `EMPTY` (11326): <em>the, a, this, an, all, some, these, that, no, any</em>

### `X`

2 <tt><a href="en_gum-pos-X.html">X</a></tt> tokens (1% of all `X` tokens) have a non-empty value of `Degree`.

`X` tokens may have the following values of `Degree`:

* `Cmp` (1; 50% of non-empty `Degree`): <em>more</em>
* `Pos` (1; 50% of non-empty `Degree`): <em>ever</em>
* `EMPTY` (289): <em>al., et, de, etc, 1, etc., 1., 2, 2., 3</em>

### `PUNCT`

1 <tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> tokens (0% of all `PUNCT` tokens) have a non-empty value of `Degree`.

`PUNCT` tokens may have the following values of `Degree`:

* `Pos` (1; 100% of non-empty `Degree`): <em>—</em>
* `EMPTY` (18427): <em>,, ., ", -, ), (, ?, [, ], :</em>

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADJ</tt> (279; 96%),
<tt>ADJ --[<tt><a href="en_gum-dep-amod.html">amod</a></tt>]--> ADJ</tt> (44; 83%),
<tt>ADV --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADV</tt> (39; 87%),
<tt>ADJ --[<tt><a href="en_gum-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (23; 85%),
<tt>ADJ --[<tt><a href="en_gum-dep-compound.html">compound</a></tt>]--> ADJ</tt> (18; 100%),
<tt>ADJ --[<tt><a href="en_gum-dep-obl-npmod.html">obl:npmod</a></tt>]--> ADJ</tt> (9; 82%),
<tt>ADJ --[<tt><a href="en_gum-dep-parataxis.html">parataxis</a></tt>]--> ADJ</tt> (9; 100%),
<tt>ADV --[<tt><a href="en_gum-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (7; 100%),
<tt>ADJ --[<tt><a href="en_gum-dep-csubj.html">csubj</a></tt>]--> ADJ</tt> (6; 86%),
<tt>ADJ --[<tt><a href="en_gum-dep-ccomp.html">ccomp</a></tt>]--> ADJ</tt> (5; 83%).

