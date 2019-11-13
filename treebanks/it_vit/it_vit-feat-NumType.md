---
layout: base
title:  'Statistics of NumType in UD_Italian-VIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-VIT: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Ord`, `Range`.

7002 tokens (3%) have a non-empty value of `NumType`.
1504 types (6%) occur at least once with a non-empty value of `NumType`.
1452 lemmas (9%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (6440; 2% instances), <tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt> (559; 0% instances), <tt><a href="it_vit-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).

### `NUM`

6440 <tt><a href="it_vit-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (5482; 85% of non-empty `NumType`): <em>due, tre, cento, 15, 1, 1973, 2, quattro, 30, 6</em>
* `Range` (958; 15% of non-empty `NumType`): <em>268/73, 29/09/73, 21:30, 1,5, 127/91, 1975/1983, 270/1982, 31/10/75, 820/71, 1.300</em>
* `EMPTY` (11): <em>i, uno, 8, mille</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (1426) occur only with one value of `NumType`.

### `ADJ`

559 <tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt> tokens (3% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="it_vit-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (463; 83%), <tt><a href="it_vit-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (463; 83%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (559; 100% of non-empty `NumType`): <em>primo, seconda, prima, secondo, terzo, prime, primi, quarto, quinto, terza</em>
* `EMPTY` (19523): <em>precedente, altri, nuovo, grande, economico, stesso, altre, nuova, nuovi, ex</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (39) occur only with one value of `NumType`.

### `DET`

2 <tt><a href="it_vit-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="it_vit-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (2; 100%), <tt><a href="it_vit-feat-Gender.html">Gender</a></tt><tt>=Fem</tt> (2; 100%), <tt><a href="it_vit-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2; 100%), <tt><a href="it_vit-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (2; 100%).

`DET` tokens may have the following values of `NumType`:

* `Card` (2; 100% of non-empty `NumType`): <em>un', una</em>
* `EMPTY` (43976): <em>il, la, l', i, le, un, una, gli, lo, questo</em>

### `NOUN`

1 <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NOUN` and `NumType` co-occurred: <tt><a href="it_vit-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="it_vit-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (1; 100%).

`NOUN` tokens may have the following values of `NumType`:

* `Card` (1; 100% of non-empty `NumType`): <em>6</em>
* `EMPTY` (57990): <em>anni, miliardi, anno, n, parte, legge, società, posti, presidente, art</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="it_vit-dep-flat.html">flat</a></tt>]--> NUM</tt> (256; 99%),
<tt>NUM --[<tt><a href="it_vit-dep-conj.html">conj</a></tt>]--> NUM</tt> (213; 95%),
<tt>NUM --[<tt><a href="it_vit-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (104; 62%),
<tt>NUM --[<tt><a href="it_vit-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (28; 80%),
<tt>ADJ --[<tt><a href="it_vit-dep-conj.html">conj</a></tt>]--> ADJ</tt> (26; 96%),
<tt>NUM --[<tt><a href="it_vit-dep-appos.html">appos</a></tt>]--> NUM</tt> (4; 100%),
<tt>NUM --[<tt><a href="it_vit-dep-fixed.html">fixed</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="it_vit-dep-compound.html">compound</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="it_vit-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (1; 100%).

