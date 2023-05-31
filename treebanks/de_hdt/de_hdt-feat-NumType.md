---
layout: base
title:  'Statistics of NumType in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

146143 tokens (4%) have a non-empty value of `NumType`.
6568 types (3%) occur at least once with a non-empty value of `NumType`.
6534 lemmas (9%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="de_hdt-pos-NUM.html">NUM</a></tt> (71230; 2% instances), <tt><a href="de_hdt-pos-DET.html">DET</a></tt> (70039; 2% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (4874; 0% instances).

### `NUM`

71230 <tt><a href="de_hdt-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="de_hdt-feat-Number.html">Number</a></tt><tt>=Plur</tt> (70477; 99%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (71230; 100% of non-empty `NumType`): <em>zwei, 2000, drei, 2001, 1999, vier, fünf, 20, 100, 30</em>
* `EMPTY` (1): <em>Fünf</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (6531) occur only with one value of `NumType`.

### `DET`

70039 <tt><a href="de_hdt-pos-DET.html">DET</a></tt> tokens (14% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="de_hdt-feat-Definite.html">Definite</a></tt><tt>=Ind</tt> (69034; 99%), <tt><a href="de_hdt-feat-PronType.html">PronType</a></tt><tt>=Art</tt> (69034; 99%), <tt><a href="de_hdt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (69014; 99%).

`DET` tokens may have the following values of `NumType`:

* `Card` (70039; 100% of non-empty `NumType`): <em>eine, ein, einen, einer, einem, eines, beide, beiden, beider, eins</em>
* `EMPTY` (427632): <em>der, die, dem, den, das, des, diese, keine, ihre, seine</em>

### `ADJ`

4874 <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> tokens (2% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="de_hdt-feat-Variant.html">Variant</a></tt><tt>=EMPTY</tt> (4874; 100%), <tt><a href="de_hdt-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (4864; 100%), <tt><a href="de_hdt-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (3645; 75%), <tt><a href="de_hdt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3519; 72%), <tt><a href="de_hdt-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (2441; 50%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (4874; 100% of non-empty `NumType`): <em>ersten, erste, erster, erstes, ersteres, erstem, Ersterer, erstere</em>
* `EMPTY` (257733): <em>neue, neuen, deutschen, deutsche, weitere, eigenen, letzten, nächsten, vergangenen, möglich</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="de_hdt-dep-conj.html">conj</a></tt>]--> NUM</tt> (314; 100%),
<tt>NUM --[<tt><a href="de_hdt-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (295; 100%),
<tt>NUM --[<tt><a href="de_hdt-dep-appos.html">appos</a></tt>]--> NUM</tt> (49; 100%),
<tt>NUM --[<tt><a href="de_hdt-dep-flat.html">flat</a></tt>]--> NUM</tt> (21; 100%),
<tt>DET --[<tt><a href="de_hdt-dep-conj.html">conj</a></tt>]--> NUM</tt> (15; 100%),
<tt>DET --[<tt><a href="de_hdt-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (10; 77%),
<tt>DET --[<tt><a href="de_hdt-dep-reparandum.html">reparandum</a></tt>]--> DET</tt> (6; 100%),
<tt>NUM --[<tt><a href="de_hdt-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (4; 100%),
<tt>NUM --[<tt><a href="de_hdt-dep-reparandum.html">reparandum</a></tt>]--> NUM</tt> (3; 100%),
<tt>NUM --[<tt><a href="de_hdt-dep-nsubj.html">nsubj</a></tt>]--> NUM</tt> (1; 100%).

