---
layout: base
title:  'Statistics of Degree in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Features: `Degree`

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

2462 tokens (4%) have a non-empty value of `Degree`.
127 types (14%) occur at least once with a non-empty value of `Degree`.
117 lemmas (15%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (2079; 3% instances), <tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (383; 1% instances).

### `ADJ`

2079 <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> tokens (100% of all `ADJ` tokens) have a non-empty value of `Degree`.

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (33; 2% of non-empty `Degree`): <em>less, more, earlier</em>
* `Pos` (1489; 72% of non-empty `Degree`): <em>first, available, next, seventh, early, like, many, expensive, daily, last</em>
* `Sup` (557; 27% of non-empty `Degree`): <em>cheapest, earliest, latest, least, lowest, shortest, smallest, most, closest, highest</em>

<table>
  <tr><th>Paradigm <i>early</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>early</em></td><td><em>earlier</em></td><td><em>earliest</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 91% lemmas (69) occur only with one value of `Degree`.

### `ADV`

383 <tt><a href="en_atis-pos-ADV.html">ADV</a></tt> tokens (68% of all `ADV` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADV` and `Degree` co-occurred: <tt><a href="en_atis-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (383; 100%).

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (3; 1% of non-empty `Degree`): <em>less</em>
* `Pos` (364; 95% of non-empty `Degree`): <em>o'clock, now, first, much, back, also, early, then, only, again</em>
* `Sup` (16; 4% of non-empty `Degree`): <em>most, earliest</em>
* `EMPTY` (183): <em>how, where, when</em>

<table>
  <tr><th>Paradigm <i>early</i></th><th><tt>Pos</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>early</em></td><td><em>earliest</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 98% lemmas (53) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="en_atis-dep-conj.html">conj</a></tt>]--> ADJ</tt> (4; 80%),
<tt>ADV --[<tt><a href="en_atis-dep-advmod.html">advmod</a></tt>]--> ADJ</tt> (4; 100%),
<tt>ADJ --[<tt><a href="en_atis-dep-parataxis.html">parataxis</a></tt>]--> ADJ</tt> (3; 100%),
<tt>ADV --[<tt><a href="en_atis-dep-conj.html">conj</a></tt>]--> ADV</tt> (3; 100%),
<tt>ADV --[<tt><a href="en_atis-dep-amod.html">amod</a></tt>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<tt><a href="en_atis-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="en_atis-dep-obl-tmod.html">obl:tmod</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADV --[<tt><a href="en_atis-dep-nmod.html">nmod</a></tt>]--> ADV</tt> (1; 100%).

