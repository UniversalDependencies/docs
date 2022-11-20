---
layout: base
title:  'Statistics of Degree in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `Degree`

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

15019 tokens (9%) have a non-empty value of `Degree`.
3015 types (19%) occur at least once with a non-empty value of `Degree`.
2712 lemmas (22%) occur at least once with a non-empty value of `Degree`.
The feature is used with 5 part-of-speech tags: <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (11016; 7% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (3997; 2% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).

### `ADJ`

11016 <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> tokens (100% of all `ADJ` tokens) have a non-empty value of `Degree`.

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (390; 4% of non-empty `Degree`): <em>more, better, greater, larger, further, higher, easier, later, smaller, younger</em>
* `Pos` (10338; 94% of non-empty `Degree`): <em>other, many, good, new, little, first, different, last, such, own</em>
* `Sup` (288; 3% of non-empty `Degree`): <em>most, best, least, largest, highest, worst, greatest, biggest, latest, longest</em>

<table>
  <tr><th>Paradigm <i>good</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>good</em></td><td><em>better</em></td><td><em>best</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>Better</em></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 97% lemmas (2176) occur only with one value of `Degree`.

### `ADV`

3997 <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> tokens (53% of all `ADV` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADV` and `Degree` co-occurred: <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (3997; 100%).

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (333; 8% of non-empty `Degree`): <em>more, later, less, longer, earlier, better, further, sooner, slower, Lesser</em>
* `Pos` (3542; 89% of non-empty `Degree`): <em>really, well, back, still, too, again, away, much, all, often</em>
* `Sup` (122; 3% of non-empty `Degree`): <em>most, best, least, longest, fastest, foremost</em>
* `EMPTY` (3511): <em>so, when, just, also, then, now, very, here, there, as</em>

<table>
  <tr><th>Paradigm <i>well</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>well, better</em></td><td><em>better</em></td><td><em>best</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td><em>well</em></td><td></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 98% lemmas (556) occur only with one value of `Degree`.

### `SCONJ`

3 <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> tokens (0% of all `SCONJ` tokens) have a non-empty value of `Degree`.

`SCONJ` tokens may have the following values of `Degree`:

* `Pos` (3; 100% of non-empty `Degree`): <em>such, like</em>
* `EMPTY` (2764): <em>that, if, as, because, how, for, by, while, of, in</em>

### `DET`

2 <tt><a href="en_gum-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `DET` and `Degree` co-occurred: <tt><a href="en_gum-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (2; 100%).

`DET` tokens may have the following values of `Degree`:

* `Pos` (2; 100% of non-empty `Degree`): <em>Some, all</em>
* `EMPTY` (13615): <em>the, a, this, an, all, some, these, that, no, any</em>

### `PUNCT`

1 <tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> tokens (0% of all `PUNCT` tokens) have a non-empty value of `Degree`.

`PUNCT` tokens may have the following values of `Degree`:

* `Pos` (1; 100% of non-empty `Degree`): <em>—</em>
* `EMPTY` (22118): <em>,, ., ", -, (, ), ?, [, ], :</em>

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADJ</tt> (355; 96%),
<tt>ADJ --[<tt><a href="en_gum-dep-amod.html">amod</a></tt>]--> ADJ</tt> (56; 88%),
<tt>ADV --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADV</tt> (50; 86%),
<tt>ADJ --[<tt><a href="en_gum-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (26; 87%),
<tt>ADJ --[<tt><a href="en_gum-dep-compound.html">compound</a></tt>]--> ADJ</tt> (23; 100%),
<tt>ADJ --[<tt><a href="en_gum-dep-parataxis.html">parataxis</a></tt>]--> ADJ</tt> (17; 100%),
<tt>ADJ --[<tt><a href="en_gum-dep-obl.html">obl</a></tt>]--> ADJ</tt> (10; 71%),
<tt>ADJ --[<tt><a href="en_gum-dep-obl-npmod.html">obl:npmod</a></tt>]--> ADJ</tt> (9; 75%),
<tt>ADJ --[<tt><a href="en_gum-dep-ccomp.html">ccomp</a></tt>]--> ADJ</tt> (8; 80%),
<tt>ADV --[<tt><a href="en_gum-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (7; 100%).

