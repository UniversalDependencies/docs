---
layout: base
title:  'Statistics of Degree in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `Degree`

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

12398 tokens (9%) have a non-empty value of `Degree`.
2931 types (20%) occur at least once with a non-empty value of `Degree`.
2662 lemmas (23%) occur at least once with a non-empty value of `Degree`.
The feature is used with 5 part-of-speech tags: <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (9212; 7% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (3169; 2% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (10; 0% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt> (6; 0% instances), <tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).

### `ADJ`

9212 <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> tokens (100% of all `ADJ` tokens) have a non-empty value of `Degree`.

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (317; 3% of non-empty `Degree`): <em>more, better, greater, larger, further, easier, higher, later, smaller, younger</em>
* `Pos` (8649; 94% of non-empty `Degree`): <em>other, many, new, good, little, first, such, different, own, last</em>
* `Sup` (246; 3% of non-empty `Degree`): <em>most, best, least, largest, highest, worst, greatest, latest, biggest, earliest</em>

<table>
  <tr><th>Paradigm <i>good</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>good</em></td><td><em>better</em></td><td><em>best</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 98% lemmas (2153) occur only with one value of `Degree`.

### `ADV`

3169 <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> tokens (58% of all `ADV` tokens) have a non-empty value of `Degree`.

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (267; 8% of non-empty `Degree`): <em>more, later, less, earlier, longer, further, better, sooner, faster, worse</em>
* `Pos` (2795; 88% of non-empty `Degree`): <em>really, well, back, still, much, too, away, again, around, often</em>
* `Sup` (107; 3% of non-empty `Degree`): <em>most, best, least, longest, fastest, foremost</em>
* `EMPTY` (2290): <em>so, also, then, just, as, very, now, only, even, there</em>

<table>
  <tr><th>Paradigm <i>well</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>well</em></td><td><em>better</em></td><td><em>best</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td><em>well</em></td><td></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 98% lemmas (518) occur only with one value of `Degree`.

### `SCONJ`

10 <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> tokens (0% of all `SCONJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `SCONJ` and `Degree` co-occurred: <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (10; 100%).

`SCONJ` tokens may have the following values of `Degree`:

* `Pos` (10; 100% of non-empty `Degree`): <em>instead, such, like</em>
* `EMPTY` (2657): <em>that, if, when, as, how, because, where, by, of, while</em>

### `DET`

6 <tt><a href="en_gum-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `DET` and `Degree` co-occurred: <tt><a href="en_gum-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (6; 100%), <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (6; 100%).

`DET` tokens may have the following values of `Degree`:

* `Pos` (6; 100% of non-empty `Degree`): <em>such, all, next, other</em>
* `EMPTY` (10983): <em>the, a, this, an, some, these, that, no, all, any</em>

### `PUNCT`

1 <tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> tokens (0% of all `PUNCT` tokens) have a non-empty value of `Degree`.

`PUNCT` tokens may have the following values of `Degree`:

* `Pos` (1; 100% of non-empty `Degree`): <em>—</em>
* `EMPTY` (17730): <em>,, ., ", ), (, ?, [, ], :, ;</em>

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADJ</tt> (283; 96%),
<tt>ADV --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADV</tt> (38; 86%),
<tt>ADJ --[<tt><a href="en_gum-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (23; 88%),
<tt>ADJ --[<tt><a href="en_gum-dep-amod.html">amod</a></tt>]--> ADJ</tt> (17; 65%),
<tt>ADJ --[<tt><a href="en_gum-dep-obl-npmod.html">obl:npmod</a></tt>]--> ADJ</tt> (10; 83%),
<tt>ADJ --[<tt><a href="en_gum-dep-parataxis.html">parataxis</a></tt>]--> ADJ</tt> (10; 100%),
<tt>ADV --[<tt><a href="en_gum-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (7; 100%),
<tt>ADJ --[<tt><a href="en_gum-dep-csubj.html">csubj</a></tt>]--> ADJ</tt> (6; 86%),
<tt>ADJ --[<tt><a href="en_gum-dep-obl.html">obl</a></tt>]--> ADJ</tt> (6; 67%),
<tt>ADJ --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADV</tt> (5; 83%).

