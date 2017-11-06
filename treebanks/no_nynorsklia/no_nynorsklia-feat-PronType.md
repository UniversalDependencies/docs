---
layout: base
title:  'Statistics of PronType in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Features: `PronType`

This feature is universal.
It occurs with 9 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rcp`, `Rel`, `Tot`.
Some words have combined values of the feature; 3 combinations have been observed: `Art|Prs`, `Ind|Prs`, `Neg|Prs`.

2421 tokens (18%) have a non-empty value of `PronType`.
62 types (4%) occur at least once with a non-empty value of `PronType`.
41 lemmas (3%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (1972; 14% instances), <tt><a href="no_nynorsklia-pos-DET.html">DET</a></tt> (449; 3% instances).

### `PRON`

1972 <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="no_nynorsklia-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1403; 71%), <tt><a href="no_nynorsklia-feat-Person.html">Person</a></tt><tt>=3</tt> (1130; 57%), <tt><a href="no_nynorsklia-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1119; 57%), <tt><a href="no_nynorsklia-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (1099; 56%), <tt><a href="no_nynorsklia-feat-Case.html">Case</a></tt><tt>=Nom</tt> (1026; 52%).

`PRON` tokens may have the following values of `PronType`:

* `Art,Prs` (37; 2% of non-empty `PronType`): <em>ein</em>
* `Ind,Prs` (28; 1% of non-empty `PronType`): <em>noko, nokon</em>
* `Int` (27; 1% of non-empty `PronType`): <em>kva, kven</em>
* `Neg` (3; 0% of non-empty `PronType`): <em>ingenting</em>
* `Neg,Prs` (5; 0% of non-empty `PronType`): <em>ingen</em>
* `Prs` (1748; 89% of non-empty `PronType`): <em>det, eg, dei, du, vi, han, den, de, ho, seg</em>
* `Rcp` (4; 0% of non-empty `PronType`): <em>kvarandre, einannan</em>
* `Rel` (120; 6% of non-empty `PronType`): <em>som</em>

`PronType` seems to be **lexical feature** of `PRON`. 100% lemmas (25) occur only with one value of `PronType`.

### `DET`

449 <tt><a href="no_nynorsklia-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="no_nynorsklia-feat-Number.html">Number</a></tt><tt>=Sing</tt> (340; 76%).

`DET` tokens may have the following values of `PronType`:

* `Art` (135; 30% of non-empty `PronType`): <em>ein, ei, eit, eitt</em>
* `Dem` (199; 44% of non-empty `PronType`): <em>den, dei, andre, det, same, sånn, anna, annan, sånne, desse</em>
* `Ind` (42; 9% of non-empty `PronType`): <em>noko, nokon, nokre, noka</em>
* `Int` (9; 2% of non-empty `PronType`): <em>kva</em>
* `Neg` (1; 0% of non-empty `PronType`): <em>ingen</em>
* `Prs` (25; 6% of non-empty `PronType`): <em>hans, min, mi, di, eigen, hennar, mitt, vår, din, dykkar</em>
* `Tot` (38; 8% of non-empty `PronType`): <em>alle, kvar, alt, begge, kvart, all</em>
* `EMPTY` (1): <em>nittenfemogtjue</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (26) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="no_nynorsklia-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (56; 100%),
<tt>PRON --[<tt><a href="no_nynorsklia-dep-appos.html">appos</a></tt>]--> PRON</tt> (44; 98%),
<tt>PRON --[<tt><a href="no_nynorsklia-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (10; 63%),
<tt>PRON --[<tt><a href="no_nynorsklia-dep-nmod.html">nmod</a></tt>]--> PRON</tt> (7; 78%),
<tt>DET --[<tt><a href="no_nynorsklia-dep-reparandum.html">reparandum</a></tt>]--> DET</tt> (6; 100%),
<tt>PRON --[<tt><a href="no_nynorsklia-dep-conj.html">conj</a></tt>]--> PRON</tt> (3; 100%),
<tt>PRON --[<tt><a href="no_nynorsklia-dep-acl-relcl.html">acl:relcl</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="no_nynorsklia-dep-obj.html">obj</a></tt>]--> PRON</tt> (1; 100%).

