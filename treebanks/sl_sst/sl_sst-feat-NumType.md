---
layout: base
title:  'Statistics of NumType in UD_Slovenian-SST'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SST: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Mult`, `Ord`, `Sets`.

1404 tokens (2%) have a non-empty value of `NumType`.
194 types (1%) occur at least once with a non-empty value of `NumType`.
113 lemmas (1%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="sl_sst-pos-NUM.html">NUM</a></tt> (1187; 2% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (217; 0% instances).

### `NUM`

1187 <tt><a href="sl_sst-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="sl_sst-feat-NumForm.html">NumForm</a></tt><tt>=Word</tt> (1186; 100%), <tt><a href="sl_sst-feat-Number.html">Number</a></tt><tt>=Plur</tt> (691; 58%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (1185; 100% of non-empty `NumType`): <em>en, dva, eno, ena, tri, tisoč, pet, dve, dvajset, enega</em>
* `Ord` (1; 0% of non-empty `NumType`): <em>štire</em>
* `Sets` (1; 0% of non-empty `NumType`): <em>dvoje</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (77) occur only with one value of `NumType`.

### `ADJ`

217 <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> tokens (4% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="sl_sst-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (217; 100%), <tt><a href="sl_sst-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (217; 100%), <tt><a href="sl_sst-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (214; 99%), <tt><a href="sl_sst-feat-Number.html">Number</a></tt><tt>=Sing</tt> (201; 93%).

`ADJ` tokens may have the following values of `NumType`:

* `Mult` (4; 2% of non-empty `NumType`): <em>dvojni, dvojno, trojni</em>
* `Ord` (213; 98% of non-empty `NumType`): <em>prvi, prvo, prva, prve, prvem, tretji, prvega, sedemindvajsetega, tretjo, šesti</em>
* `EMPTY` (5054): <em>drugi, dobro, drugo, sam, zanimivo, dober, sami, lepa, pomembno, druga</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (37) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="sl_sst-dep-flat.html">flat</a></tt>]--> NUM</tt> (127; 100%),
<tt>NUM --[<tt><a href="sl_sst-dep-conj.html">conj</a></tt>]--> NUM</tt> (57; 100%),
<tt>ADJ --[<tt><a href="sl_sst-dep-conj.html">conj</a></tt>]--> ADJ</tt> (11; 61%),
<tt>NUM --[<tt><a href="sl_sst-dep-fixed.html">fixed</a></tt>]--> NUM</tt> (4; 100%),
<tt>NUM --[<tt><a href="sl_sst-dep-reparandum.html">reparandum</a></tt>]--> NUM</tt> (4; 100%),
<tt>ADJ --[<tt><a href="sl_sst-dep-flat.html">flat</a></tt>]--> ADJ</tt> (3; 100%),
<tt>NUM --[<tt><a href="sl_sst-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (3; 100%),
<tt>NUM --[<tt><a href="sl_sst-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (2; 100%),
<tt>ADJ --[<tt><a href="sl_sst-dep-fixed.html">fixed</a></tt>]--> ADJ</tt> (1; 100%).

