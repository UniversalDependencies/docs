---
layout: base
title:  'Statistics of NumType in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Mult`, `Ord`, `Sets`.

6206 tokens (2%) have a non-empty value of `NumType`.
1309 types (3%) occur at least once with a non-empty value of `NumType`.
1151 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (5594; 2% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (612; 0% instances).

### `NUM`

5594 <tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="sl_ssj-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (4581; 82%), <tt><a href="sl_ssj-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (4126; 74%), <tt><a href="sl_ssj-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (4126; 74%), <tt><a href="sl_ssj-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (4051; 72%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (4906; 88% of non-empty `NumType`): <em>2, eno, 1, dve, dva, dveh, tri, ena, eden, 10</em>
* `Ord` (682; 12% of non-empty `NumType`): <em>1., 20., 9., 2., 3., 18., 19., 11., 5., 17.</em>
* `Sets` (6; 0% of non-empty `NumType`): <em>dvoje, troje, tisočerih</em>
* `EMPTY` (1): <em>80-ih</em>

<table>
  <tr><th>Paradigm <i>14.</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt></tt></td><td><em>14.</em></td><td><em>14.</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (1121) occur only with one value of `NumType`.

### `ADJ`

612 <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> tokens (2% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="sl_ssj-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (612; 100%), <tt><a href="sl_ssj-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (612; 100%), <tt><a href="sl_ssj-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (612; 100%), <tt><a href="sl_ssj-feat-Number.html">Number</a></tt><tt>=Sing</tt> (508; 83%).

`ADJ` tokens may have the following values of `NumType`:

* `Mult` (7; 1% of non-empty `NumType`): <em>dvojna, dvojne, dvojnega, dvojnim, dvojnimi, dvojno, trojnim</em>
* `Ord` (605; 99% of non-empty `NumType`): <em>prvi, prva, prvo, prve, prvem, prvega, prvih, tretji, tretje, tretjem</em>
* `EMPTY` (27814): <em>drugi, druge, mogoče, drugih, nove, različnih, sam, novo, veliko, velika</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (29) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="sl_ssj-dep-conj.html">conj</a></tt>]--> NUM</tt> (421; 100%),
<tt>NUM --[<tt><a href="sl_ssj-dep-flat.html">flat</a></tt>]--> NUM</tt> (140; 86%),
<tt>NUM --[<tt><a href="sl_ssj-dep-list.html">list</a></tt>]--> NUM</tt> (33; 100%),
<tt>NUM --[<tt><a href="sl_ssj-dep-appos.html">appos</a></tt>]--> NUM</tt> (15; 100%),
<tt>NUM --[<tt><a href="sl_ssj-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (10; 100%),
<tt>NUM --[<tt><a href="sl_ssj-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (3; 100%),
<tt>NUM --[<tt><a href="sl_ssj-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (3; 100%),
<tt>NUM --[<tt><a href="sl_ssj-dep-orphan.html">orphan</a></tt>]--> NUM</tt> (1; 100%).

