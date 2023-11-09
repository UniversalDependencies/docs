---
layout: base
title:  'Statistics of NumType in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Dist`, `Ord`.

5100 tokens (1%) have a non-empty value of `NumType`.
174 types (1%) occur at least once with a non-empty value of `NumType`.
49 lemmas (1%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="la_ittb-pos-DET.html">DET</a></tt> (2312; 1% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (1805; 0% instances), <tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (539; 0% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (444; 0% instances).

### `DET`

2312 <tt><a href="la_ittb-pos-DET.html">DET</a></tt> tokens (8% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="la_ittb-feat-Form.html">Form</a></tt><tt>=EMPTY</tt> (2312; 100%), <tt><a href="la_ittb-feat-Person-psor.html">Person[psor]</a></tt><tt>=EMPTY</tt> (2312; 100%), <tt><a href="la_ittb-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (2312; 100%), <tt><a href="la_ittb-feat-Compound.html">Compound</a></tt><tt>=EMPTY</tt> (2311; 100%), <tt><a href="la_ittb-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (2254; 97%), <tt><a href="la_ittb-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1654; 72%), <tt><a href="la_ittb-feat-InflClass.html">InflClass</a></tt><tt>=LatPron</tt> (1591; 69%).

`DET` tokens may have the following values of `NumType`:

* `Card` (2312; 100% of non-empty `NumType`): <em>unum, una, unus, uno, unius, unam, plures, multa, pluribus, plura</em>
* `EMPTY` (26370): <em>hoc, omnia, huiusmodi, ipsum, alia, aliqua, suam, sua, haec, illud</em>

### `ADJ`

1805 <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> tokens (6% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="la_ittb-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (1647; 91%), <tt><a href="la_ittb-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1564; 87%), <tt><a href="la_ittb-feat-InflClass.html">InflClass</a></tt><tt>=IndEurO</tt> (987; 55%).

`ADJ` tokens may have the following values of `NumType`:

* `Dist` (80; 4% of non-empty `NumType`): <em>singulis, singula, singulae, singulas, singulorum, singulos, singularum, singuli, singulum</em>
* `Ord` (1725; 96% of non-empty `NumType`): <em>prima, primum, primo, prius, primi, primam, secundo, secunda, primae, tertio</em>
* `EMPTY` (26997): <em>diuina, impossibile, diuinae, diuinam, christi, humana, manifestum, necesse, possibilis, naturalis</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (13) occur only with one value of `NumType`.

### `NUM`

539 <tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> tokens (26% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="la_ittb-feat-NumForm.html">NumForm</a></tt><tt>=Word</tt> (439; 81%), <tt><a href="la_ittb-feat-Number.html">Number</a></tt><tt>=Plur</tt> (385; 71%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (539; 100% of non-empty `NumType`): <em>duo, i, duobus, duae, tres, ii, tria, duabus, duas, duorum</em>
* `EMPTY` (1535): <em>i, iii, ii, 1, 2, uii, uiii, iu, 3, ui</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (24) occur only with one value of `NumType`.

### `ADV`

444 <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> tokens (2% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="la_ittb-feat-AdvType.html">AdvType</a></tt><tt>=EMPTY</tt> (444; 100%), <tt><a href="la_ittb-feat-Compound.html">Compound</a></tt><tt>=EMPTY</tt> (444; 100%), <tt><a href="la_ittb-feat-PronType.html">PronType</a></tt><tt>=Dem</tt> (412; 93%).

`ADV` tokens may have the following values of `NumType`:

* `Card` (443; 100% of non-empty `NumType`): <em>tantum, multo, multum, plus, intantum, quantum</em>
* `Ord` (1; 0% of non-empty `NumType`): <em>primo</em>
* `EMPTY` (22236): <em>etiam, unde, sic, ergo, tamen, uero, ita, supra, magis, solum</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>DET --[<tt><a href="la_ittb-dep-compound.html">compound</a></tt>]--> DET</tt> (11; 100%),
<tt>NUM --[<tt><a href="la_ittb-dep-conj.html">conj</a></tt>]--> DET</tt> (8; 89%),
<tt>NUM --[<tt><a href="la_ittb-dep-compound.html">compound</a></tt>]--> NUM</tt> (6; 100%),
<tt>DET --[<tt><a href="la_ittb-dep-compound.html">compound</a></tt>]--> NUM</tt> (4; 100%),
<tt>NUM --[<tt><a href="la_ittb-dep-flat.html">flat</a></tt>]--> NUM</tt> (3; 100%),
<tt>DET --[<tt><a href="la_ittb-dep-csubj.html">csubj</a></tt>]--> DET</tt> (2; 100%),
<tt>NUM --[<tt><a href="la_ittb-dep-conj.html">conj</a></tt>]--> NUM</tt> (2; 100%),
<tt>DET --[<tt><a href="la_ittb-dep-advcl-cmp.html">advcl:cmp</a></tt>]--> DET</tt> (1; 100%),
<tt>NUM --[<tt><a href="la_ittb-dep-advcl.html">advcl</a></tt>]--> DET</tt> (1; 100%),
<tt>NUM --[<tt><a href="la_ittb-dep-obl.html">obl</a></tt>]--> NUM</tt> (1; 100%).

