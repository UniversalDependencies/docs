---
layout: base
title:  'Statistics of NumType in UD_Italian-VIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-VIT: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Ord`, `Range`.

7007 tokens (3%) have a non-empty value of `NumType`.
1498 types (6%) occur at least once with a non-empty value of `NumType`.
1458 lemmas (9%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (6389; 2% instances), <tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt> (617; 0% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).

### `NUM`

6389 <tt><a href="it_vit-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (6359; 100% of non-empty `NumType`): <em>due, tre, cento, 15, 1, 1973, 2, quattro, 30, 6</em>
* `Range` (30; 0% of non-empty `NumType`): <em>1975/1983, 1984/85, 1981/83, 24/25, 0,7-0,8%, 1964/73, 1964/74, 1974/83, 1975/84, 1983/84</em>
* `EMPTY` (5): <em>uno, i, mille</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (1422) occur only with one value of `NumType`.

### `ADJ`

617 <tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt> tokens (3% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="it_vit-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (520; 84%), <tt><a href="it_vit-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (462; 75%).

`ADJ` tokens may have the following values of `NumType`:

* `Card` (1; 0% of non-empty `NumType`): <em>prima</em>
* `Ord` (616; 100% of non-empty `NumType`): <em>primo, seconda, prima, secondo, terzo, prime, primi, quarto, quinto, II</em>
* `EMPTY` (19507): <em>precedente, altri, nuovo, grande, economico, stesso, altre, nuova, nuovi, ex</em>

<table>
  <tr><th>Paradigm <i>prima</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>prima</em></td></tr>
  <tr><td><tt><tt><a href="it_vit-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="it_vit-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>prima</em></td><td><em>prima</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `ADJ`. 98% lemmas (45) occur only with one value of `NumType`.

### `NOUN`

1 <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NOUN` and `NumType` co-occurred: <tt><a href="it_vit-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="it_vit-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (1; 100%).

`NOUN` tokens may have the following values of `NumType`:

* `Card` (1; 100% of non-empty `NumType`): <em>6</em>
* `EMPTY` (57755): <em>anni, miliardi, anno, n., parte, legge, società, posti, presidente, art.</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="it_vit-dep-flat.html">flat</a></tt>]--> NUM</tt> (257; 100%),
<tt>NUM --[<tt><a href="it_vit-dep-conj.html">conj</a></tt>]--> NUM</tt> (216; 100%),
<tt>NUM --[<tt><a href="it_vit-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (164; 99%),
<tt>NUM --[<tt><a href="it_vit-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (34; 92%),
<tt>ADJ --[<tt><a href="it_vit-dep-conj.html">conj</a></tt>]--> ADJ</tt> (26; 96%),
<tt>NUM --[<tt><a href="it_vit-dep-appos.html">appos</a></tt>]--> NUM</tt> (4; 100%),
<tt>NUM --[<tt><a href="it_vit-dep-fixed.html">fixed</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="it_vit-dep-compound.html">compound</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="it_vit-dep-obl.html">obl</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="it_vit-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (1; 100%).

