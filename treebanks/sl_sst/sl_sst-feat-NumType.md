---
layout: base
title:  'Statistics of NumType in UD_Slovenian-SST'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SST: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Mult`, `Ord`, `Sets`.

1405 tokens (1%) have a non-empty value of `NumType`.
195 types (1%) occur at least once with a non-empty value of `NumType`.
114 lemmas (1%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="sl_sst-pos-NUM.html">NUM</a></tt> (1048; 1% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (217; 0% instances), <tt><a href="sl_sst-pos-DET.html">DET</a></tt> (140; 0% instances).

### `NUM`

1048 <tt><a href="sl_sst-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="sl_sst-feat-NumForm.html">NumForm</a></tt><tt>=Word</tt> (1047; 100%), <tt><a href="sl_sst-feat-Number.html">Number</a></tt><tt>=Plur</tt> (682; 65%), <tt><a href="sl_sst-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (552; 53%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (1046; 100% of non-empty `NumType`): <em>dva, ena, en, tri, tisoč, pet, eno, dve, dvajset, trideset</em>
* `Ord` (1; 0% of non-empty `NumType`): <em>štire</em>
* `Sets` (1; 0% of non-empty `NumType`): <em>dvoje</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (78) occur only with one value of `NumType`.

### `ADJ`

217 <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> tokens (4% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="sl_sst-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (217; 100%), <tt><a href="sl_sst-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (217; 100%), <tt><a href="sl_sst-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (214; 99%), <tt><a href="sl_sst-feat-Number.html">Number</a></tt><tt>=Sing</tt> (201; 93%).

`ADJ` tokens may have the following values of `NumType`:

* `Mult` (4; 2% of non-empty `NumType`): <em>dvojni, dvojno, trojni</em>
* `Ord` (213; 98% of non-empty `NumType`): <em>prvi, prvo, prva, prve, prvem, tretji, prvega, sedemindvajsetega, tretjo, šesti</em>
* `EMPTY` (5055): <em>drugi, dobro, drugo, zanimivo, dober, sam, sami, lepa, pomembno, druga</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (37) occur only with one value of `NumType`.

### `DET`

140 <tt><a href="sl_sst-pos-DET.html">DET</a></tt> tokens (3% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="sl_sst-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (140; 100%), <tt><a href="sl_sst-feat-Number.html">Number</a></tt><tt>=Sing</tt> (130; 93%).

`DET` tokens may have the following values of `NumType`:

* `Card` (140; 100% of non-empty `NumType`): <em>en, eno, ena, ene, enega, eni, enem, enih, enemu, enim</em>
* `EMPTY` (5387): <em>to, ta, pol, vse, tega, tem, malo, te, nekaj, več</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="sl_sst-dep-flat.html">flat</a></tt>]--> NUM</tt> (127; 100%),
<tt>NUM --[<tt><a href="sl_sst-dep-conj.html">conj</a></tt>]--> NUM</tt> (58; 100%),
<tt>ADJ --[<tt><a href="sl_sst-dep-conj.html">conj</a></tt>]--> ADJ</tt> (11; 61%),
<tt>NUM --[<tt><a href="sl_sst-dep-fixed.html">fixed</a></tt>]--> NUM</tt> (4; 100%),
<tt>ADJ --[<tt><a href="sl_sst-dep-flat.html">flat</a></tt>]--> ADJ</tt> (3; 100%),
<tt>NUM --[<tt><a href="sl_sst-dep-reparandum.html">reparandum</a></tt>]--> NUM</tt> (3; 100%),
<tt>NUM --[<tt><a href="sl_sst-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (2; 100%),
<tt>ADJ --[<tt><a href="sl_sst-dep-fixed.html">fixed</a></tt>]--> ADJ</tt> (1; 100%),
<tt>DET --[<tt><a href="sl_sst-dep-reparandum.html">reparandum</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="sl_sst-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (1; 100%).

