---
layout: base
title:  'Statistics of NumType in UD_Latvian-LVTB'
udver: '2'
---

## Treebank Statistics: UD_Latvian-LVTB: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Frac`, `Mult`, `Ord`.

6761 tokens (2%) have a non-empty value of `NumType`.
1152 types (2%) occur at least once with a non-empty value of `NumType`.
944 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="lv_lvtb-pos-NUM.html">NUM</a></tt> (4160; 1% instances), <tt><a href="lv_lvtb-pos-ADJ.html">ADJ</a></tt> (2580; 1% instances), <tt><a href="lv_lvtb-pos-ADV.html">ADV</a></tt> (21; 0% instances).

### `NUM`

4160 <tt><a href="lv_lvtb-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="lv_lvtb-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (2205; 53%), <tt><a href="lv_lvtb-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (2204; 53%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (4141; 100% of non-empty `NumType`): <em>viens, trīs, vienu, viena, 20, divas, 3, 10, 30, 2</em>
* `Frac` (19; 0% of non-empty `NumType`): <em>pusotru, pusotra, pusotras, trīsarpus</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (675) occur only with one value of `NumType`.

### `ADJ`

2580 <tt><a href="lv_lvtb-pos-ADJ.html">ADJ</a></tt> tokens (15% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="lv_lvtb-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (1725; 67%), <tt><a href="lv_lvtb-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (1725; 67%), <tt><a href="lv_lvtb-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (1725; 67%), <tt><a href="lv_lvtb-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1725; 67%), <tt><a href="lv_lvtb-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (1725; 67%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (2580; 100% of non-empty `NumType`): <em>1., 2., 3., pirmo, 2014., 2012., pirmā, 4., 9., 2010.</em>
* `EMPTY` (14897): <em>iespējams, liela, nepieciešams, jaunu, liels, lielu, galvenais, lielā, jauna, dažādu</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (269) occur only with one value of `NumType`.

### `ADV`

21 <tt><a href="lv_lvtb-pos-ADV.html">ADV</a></tt> tokens (0% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="lv_lvtb-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (21; 100%), <tt><a href="lv_lvtb-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (21; 100%).

`ADV` tokens may have the following values of `NumType`:

* `Mult` (21; 100% of non-empty `NumType`): <em>vienreiz, divreiz</em>
* `EMPTY` (18337): <em>kad, jau, kā, tad, vēl, ļoti, kur, tā, vairāk, daudz</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="lv_lvtb-dep-conj.html">conj</a></tt>]--> NUM</tt> (166; 99%),
<tt>ADJ --[<tt><a href="lv_lvtb-dep-conj.html">conj</a></tt>]--> ADJ</tt> (111; 95%),
<tt>NUM --[<tt><a href="lv_lvtb-dep-compound.html">compound</a></tt>]--> NUM</tt> (66; 100%),
<tt>NUM --[<tt><a href="lv_lvtb-dep-flat.html">flat</a></tt>]--> NUM</tt> (30; 100%),
<tt>NUM --[<tt><a href="lv_lvtb-dep-flat-name.html">flat:name</a></tt>]--> NUM</tt> (28; 100%),
<tt>NUM --[<tt><a href="lv_lvtb-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (7; 100%),
<tt>NUM --[<tt><a href="lv_lvtb-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (6; 100%),
<tt>NUM --[<tt><a href="lv_lvtb-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (5; 100%),
<tt>ADJ --[<tt><a href="lv_lvtb-dep-flat.html">flat</a></tt>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<tt><a href="lv_lvtb-dep-nsubj.html">nsubj</a></tt>]--> ADJ</tt> (1; 100%).

