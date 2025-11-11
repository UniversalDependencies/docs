---
layout: base
title:  'Statistics of NumType in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

860 tokens (1%) have a non-empty value of `NumType`.
191 types (3%) occur at least once with a non-empty value of `NumType`.
123 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="fr_alts-pos-NUM.html">NUM</a></tt> (719; 1% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (141; 0% instances).

### `NUM`

719 <tt><a href="fr_alts-pos-NUM.html">NUM</a></tt> tokens (98% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (719; 100% of non-empty `NumType`): <em>deulx, mille, troys, .iii., .vi., deux, quatre, chinq, .iiii., .viii.</em>
* `EMPTY` (12): <em>i., .xxij., 2., 3, 4., 578, centum, ij., trois, vi.</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (89) occur only with one value of `NumType`.

### `ADJ`

141 <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> tokens (8% of all `ADJ` tokens) have a non-empty value of `NumType`.

`ADJ` tokens may have the following values of `NumType`:

* `Card` (5; 4% of non-empty `NumType`): <em>13., 16., 20., 21., 8.</em>
* `Ord` (136; 96% of non-empty `NumType`): <em>premier, premiere, second, .ixe., .xxviiie., .viie., .xve., .xxixe., .xxxe., .ve.</em>
* `EMPTY` (1527): <em>presentz, mesme, autre, jeune, grant, aultre, bon, present, telle, autres</em>

<table>
  <tr><th>Paradigm <i>treizième</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt></tt></td><td><em>13.</em></td><td><em>.xiiie.</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `ADJ`. 94% lemmas (33) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="fr_alts-dep-conj.html">conj</a></tt>]--> NUM</tt> (62; 100%),
<tt>NUM --[<tt><a href="fr_alts-dep-flat.html">flat</a></tt>]--> NUM</tt> (56; 100%),
<tt>ADJ --[<tt><a href="fr_alts-dep-conj.html">conj</a></tt>]--> ADJ</tt> (2; 100%),
<tt>NUM --[<tt><a href="fr_alts-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (1; 100%).

