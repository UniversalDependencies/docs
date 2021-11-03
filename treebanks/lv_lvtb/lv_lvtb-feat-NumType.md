---
layout: base
title:  'Statistics of NumType in UD_Latvian-LVTB'
udver: '2'
---

## Treebank Statistics: UD_Latvian-LVTB: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Frac`, `Mult`, `Ord`.

5366 tokens (2%) have a non-empty value of `NumType`.
1003 types (2%) occur at least once with a non-empty value of `NumType`.
828 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="lv_lvtb-pos-NUM.html">NUM</a></tt> (3288; 1% instances), <tt><a href="lv_lvtb-pos-ADJ.html">ADJ</a></tt> (2064; 1% instances), <tt><a href="lv_lvtb-pos-ADV.html">ADV</a></tt> (14; 0% instances).

### `NUM`

3288 <tt><a href="lv_lvtb-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="lv_lvtb-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (1731; 53%), <tt><a href="lv_lvtb-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1725; 52%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (3283; 100% of non-empty `NumType`): <em>viens, trīs, vienu, viena, 20, 3, 30, divas, 1, 15</em>
* `Frac` (5; 0% of non-empty `NumType`): <em>pusotra, pusotru, pusotras</em>

<table>
  <tr><th>Paradigm <i>pusotrs</i></th><th><tt>Card</tt></th><th><tt>Frac</tt></th></tr>
  <tr><td><tt><tt><a href="lv_lvtb-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="lv_lvtb-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td></td><td><em>pusotru</em></td></tr>
  <tr><td><tt><tt><a href="lv_lvtb-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="lv_lvtb-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>pusotra</em></td><td><em>pusotra</em></td></tr>
  <tr><td><tt><tt><a href="lv_lvtb-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="lv_lvtb-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td></td><td><em>pusotras</em></td></tr>
  <tr><td><tt><tt><a href="lv_lvtb-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="lv_lvtb-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td></td><td><em>pusotra</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (569) occur only with one value of `NumType`.

### `ADJ`

2064 <tt><a href="lv_lvtb-pos-ADJ.html">ADJ</a></tt> tokens (15% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="lv_lvtb-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (1425; 69%), <tt><a href="lv_lvtb-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (1425; 69%), <tt><a href="lv_lvtb-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (1425; 69%), <tt><a href="lv_lvtb-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1425; 69%), <tt><a href="lv_lvtb-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (1425; 69%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (2064; 100% of non-empty `NumType`): <em>1., 2., 2012., 2014., 3., pirmo, 4., 9., 2011., pirmā</em>
* `EMPTY` (11479): <em>liela, lielu, jaunu, lielā, liels, galvenais, jauna, jaunā, labu, dažādu</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (270) occur only with one value of `NumType`.

### `ADV`

14 <tt><a href="lv_lvtb-pos-ADV.html">ADV</a></tt> tokens (0% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="lv_lvtb-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (14; 100%), <tt><a href="lv_lvtb-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (14; 100%).

`ADV` tokens may have the following values of `NumType`:

* `Mult` (14; 100% of non-empty `NumType`): <em>divreiz, vienreiz</em>
* `EMPTY` (14682): <em>kad, jau, kā, tad, vēl, ļoti, kur, tā, daudz, tik</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="lv_lvtb-dep-conj.html">conj</a></tt>]--> NUM</tt> (116; 99%),
<tt>ADJ --[<tt><a href="lv_lvtb-dep-conj.html">conj</a></tt>]--> ADJ</tt> (76; 96%),
<tt>NUM --[<tt><a href="lv_lvtb-dep-compound.html">compound</a></tt>]--> NUM</tt> (48; 100%),
<tt>NUM --[<tt><a href="lv_lvtb-dep-flat.html">flat</a></tt>]--> NUM</tt> (16; 100%),
<tt>NUM --[<tt><a href="lv_lvtb-dep-flat-name.html">flat:name</a></tt>]--> NUM</tt> (15; 100%),
<tt>NUM --[<tt><a href="lv_lvtb-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (6; 100%),
<tt>NUM --[<tt><a href="lv_lvtb-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (6; 100%),
<tt>NUM --[<tt><a href="lv_lvtb-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (4; 100%),
<tt>NUM --[<tt><a href="lv_lvtb-dep-flat-foreign.html">flat:foreign</a></tt>]--> NUM</tt> (3; 100%),
<tt>ADJ --[<tt><a href="lv_lvtb-dep-flat.html">flat</a></tt>]--> ADJ</tt> (2; 100%).

