---
layout: base
title:  'Statistics of NumType in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Dist`, `Mult`, `Ord`.

5599 tokens (2%) have a non-empty value of `NumType`.
181 types (2%) occur at least once with a non-empty value of `NumType`.
55 lemmas (2%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt> (3150; 1% instances), <tt><a href="la_llct-pos-NUM.html">NUM</a></tt> (2417; 1% instances), <tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (20; 0% instances), <tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt> (12; 0% instances).

### `ADJ`

3150 <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt> tokens (24% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="la_llct-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2574; 82%), <tt><a href="la_llct-feat-Case.html">Case</a></tt><tt>=Abl</tt> (2330; 74%), <tt><a href="la_llct-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (2138; 68%).

`ADJ` tokens may have the following values of `NumType`:

* `Dist` (550; 17% of non-empty `NumType`): <em>singulos, singulis, singulas, singulorum, singulo, singulus, singhulorum, singhulos, singolos, singula</em>
* `Mult` (142; 5% of non-empty `NumType`): <em>duplum, duplo, dupla, doplicia, duple, duppla, dupplis, dupplo, triplicia</em>
* `Ord` (2458; 78% of non-empty `NumType`): <em>decimo, vigisimo, tertio, sexto, decima, tertia, quarto, septimo, quinto, quinta</em>
* `EMPTY` (10181): <em>sancti, quondam, integrum, sancte, bone, manifestu, livellario, Lucane, bonos, humilis</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (22) occur only with one value of `NumType`.

### `NUM`

2417 <tt><a href="la_llct-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="la_llct-feat-Case.html">Case</a></tt><tt>=Acc</tt> (1287; 53%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (2417; 100% of non-empty `NumType`): <em>uno, duas, una, viginti, triginta, quinquaginta, duo, decem, sex, quattuor</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (32) occur only with one value of `NumType`.

### `ADV`

20 <tt><a href="la_llct-pos-ADV.html">ADV</a></tt> tokens (0% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="la_llct-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (20; 100%).

`ADV` tokens may have the following values of `NumType`:

* `Mult` (20; 100% of non-empty `NumType`): <em>semel</em>
* `EMPTY` (8669): <em>supra, una, et, exinde, ubi, taliter, tantum, sic, unde, superius</em>

### `PROPN`

12 <tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt> tokens (0% of all `PROPN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PROPN` and `NumType` co-occurred: <tt><a href="la_llct-feat-Number.html">Number</a></tt><tt>=Sing</tt> (12; 100%), <tt><a href="la_llct-feat-Gender.html">Gender</a></tt><tt>=Neut</tt> (10; 83%), <tt><a href="la_llct-feat-Case.html">Case</a></tt><tt>=Abl</tt> (7; 58%).

`PROPN` tokens may have the following values of `NumType`:

* `Ord` (12; 100% of non-empty `NumType`): <em>Decimo, Quarto, Octavo, Septimo, Vigisimo</em>
* `EMPTY` (20143): <em>Dei, Luca, Martini, Deo, Petri, Gherardus, Petrus, Marie, domini, Italia</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>ADJ --[<tt><a href="la_llct-dep-flat.html">flat</a></tt>]--> ADJ</tt> (618; 100%),
<tt>NUM --[<tt><a href="la_llct-dep-conj.html">conj</a></tt>]--> NUM</tt> (77; 100%),
<tt>NUM --[<tt><a href="la_llct-dep-compound.html">compound</a></tt>]--> NUM</tt> (61; 100%),
<tt>ADJ --[<tt><a href="la_llct-dep-conj.html">conj</a></tt>]--> ADJ</tt> (16; 100%).

