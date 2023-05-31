---
layout: base
title:  'Statistics of NumType in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Dist`, `Mult`, `Ord`.

6081 tokens (3%) have a non-empty value of `NumType`.
203 types (2%) occur at least once with a non-empty value of `NumType`.
60 lemmas (2%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt> (3150; 1% instances), <tt><a href="la_llct-pos-NUM.html">NUM</a></tt> (1501; 1% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt> (1075; 0% instances), <tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (355; 0% instances).

### `ADJ`

3150 <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt> tokens (24% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="la_llct-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2574; 82%), <tt><a href="la_llct-feat-Case.html">Case</a></tt><tt>=Abl</tt> (2330; 74%), <tt><a href="la_llct-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (2138; 68%).

`ADJ` tokens may have the following values of `NumType`:

* `Dist` (550; 17% of non-empty `NumType`): <em>singulos, singulis, singulas, singulorum, singulo, singulus, singhulorum, singhulos, singolos, singula</em>
* `Mult` (142; 5% of non-empty `NumType`): <em>duplum, duplo, dupla, doplicia, duple, duppla, dupplis, dupplo, triplicia</em>
* `Ord` (2458; 78% of non-empty `NumType`): <em>decimo, vigisimo, tertio, sexto, decima, tertia, quarto, septimo, quinto, quinta</em>
* `EMPTY` (10185): <em>sancti, quondam, integrum, sancte, bone, manifestu, livellario, Lucane, bonos, humilis</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (22) occur only with one value of `NumType`.

### `NUM`

1501 <tt><a href="la_llct-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="la_llct-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (872; 58%), <tt><a href="la_llct-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (872; 58%), <tt><a href="la_llct-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (872; 58%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (1501; 100% of non-empty `NumType`): <em>duas, viginti, triginta, quinquaginta, duo, decem, sex, quattuor, quinque, duodecim</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (31) occur only with one value of `NumType`.

### `DET`

1075 <tt><a href="la_llct-pos-DET.html">DET</a></tt> tokens (5% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="la_llct-feat-Number-psor.html">Number[psor]</a></tt><tt>=EMPTY</tt> (1075; 100%), <tt><a href="la_llct-feat-Person-psor.html">Person[psor]</a></tt><tt>=EMPTY</tt> (1075; 100%), <tt><a href="la_llct-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (1075; 100%), <tt><a href="la_llct-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (937; 87%), <tt><a href="la_llct-feat-Number.html">Number</a></tt><tt>=Sing</tt> (932; 87%), <tt><a href="la_llct-feat-Case.html">Case</a></tt><tt>=Acc</tt> (852; 79%), <tt><a href="la_llct-feat-Gender.html">Gender</a></tt><tt>=Neut</tt> (581; 54%).

`DET` tokens may have the following values of `NumType`:

* `Card` (1075; 100% of non-empty `NumType`): <em>uno, una, unum, ambas, unam, ambo, quantas, quanta, plures, unus</em>
* `EMPTY` (18938): <em>ipsa, qui, mea, suprascripta, nostro, ipsius, tuis, omnia, hanc, meis</em>

### `ADV`

355 <tt><a href="la_llct-pos-ADV.html">ADV</a></tt> tokens (4% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="la_llct-feat-AdvType.html">AdvType</a></tt><tt>=EMPTY</tt> (355; 100%), <tt><a href="la_llct-feat-PronType.html">PronType</a></tt><tt>=Dem</tt> (335; 94%).

`ADV` tokens may have the following values of `NumType`:

* `Card` (335; 94% of non-empty `NumType`): <em>tantum, tantu</em>
* `Mult` (20; 6% of non-empty `NumType`): <em>semel</em>
* `EMPTY` (7844): <em>supra, una, exinde, ubi, taliter, sic, unde, superius, ibi, hic</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>ADJ --[<tt><a href="la_llct-dep-flat.html">flat</a></tt>]--> ADJ</tt> (618; 100%),
<tt>NUM --[<tt><a href="la_llct-dep-conj.html">conj</a></tt>]--> NUM</tt> (71; 100%),
<tt>NUM --[<tt><a href="la_llct-dep-compound.html">compound</a></tt>]--> NUM</tt> (59; 100%),
<tt>ADJ --[<tt><a href="la_llct-dep-conj.html">conj</a></tt>]--> ADJ</tt> (16; 100%),
<tt>DET --[<tt><a href="la_llct-dep-conj.html">conj</a></tt>]--> NUM</tt> (3; 100%),
<tt>DET --[<tt><a href="la_llct-dep-compound.html">compound</a></tt>]--> DET</tt> (2; 100%),
<tt>NUM --[<tt><a href="la_llct-dep-conj.html">conj</a></tt>]--> DET</tt> (2; 100%).

