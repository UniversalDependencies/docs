---
layout: base
title:  'Statistics of NumType in UD_Slovenian-SST'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SST: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Mult`, `Ord`, `Sets`.

586 tokens (2%) have a non-empty value of `NumType`.
121 types (2%) occur at least once with a non-empty value of `NumType`.
76 lemmas (2%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="sl_sst-pos-NUM.html">NUM</a></tt> (499; 2% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (87; 0% instances).

### `NUM`

499 <tt><a href="sl_sst-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="sl_sst-feat-NumForm.html">NumForm</a></tt><tt>=Word</tt> (499; 100%), <tt><a href="sl_sst-feat-Number.html">Number</a></tt><tt>=Plur</tt> (287; 58%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (498; 100% of non-empty `NumType`): <em>eno, dva, en, ena, tri, tisoč, dvajset, dve, pet, enega</em>
* `Sets` (1; 0% of non-empty `NumType`): <em>dvoje</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (53) occur only with one value of `NumType`.

### `ADJ`

87 <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> tokens (5% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="sl_sst-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (87; 100%), <tt><a href="sl_sst-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (87; 100%), <tt><a href="sl_sst-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (85; 98%), <tt><a href="sl_sst-feat-Number.html">Number</a></tt><tt>=Sing</tt> (82; 94%).

`ADJ` tokens may have the following values of `NumType`:

* `Mult` (3; 3% of non-empty `NumType`): <em>dvojni, dvojno, trojni</em>
* `Ord` (84; 97% of non-empty `NumType`): <em>prvi, prvo, prva, tretjo, prvega, devetindvajseti, peta, tretja, tretji, trideseti</em>
* `EMPTY` (1577): <em>dobro, drugo, drugi, dober, zanimivo, druga, drugega, glavnem, lep, lepa</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (23) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="sl_sst-dep-flat.html">flat</a></tt>]--> NUM</tt> (48; 100%),
<tt>NUM --[<tt><a href="sl_sst-dep-conj.html">conj</a></tt>]--> NUM</tt> (29; 100%),
<tt>ADJ --[<tt><a href="sl_sst-dep-conj.html">conj</a></tt>]--> ADJ</tt> (5; 56%),
<tt>NUM --[<tt><a href="sl_sst-dep-fixed.html">fixed</a></tt>]--> NUM</tt> (4; 100%),
<tt>NUM --[<tt><a href="sl_sst-dep-reparandum.html">reparandum</a></tt>]--> NUM</tt> (4; 100%),
<tt>ADJ --[<tt><a href="sl_sst-dep-reparandum.html">reparandum</a></tt>]--> ADJ</tt> (2; 100%),
<tt>NUM --[<tt><a href="sl_sst-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (2; 100%).

