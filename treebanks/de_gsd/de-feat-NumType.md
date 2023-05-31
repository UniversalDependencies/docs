---
layout: base
title:  'Statistics of NumType in UD_German'
udver: '2'
---

## Treebank Statistics: UD_German: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

8262 tokens (3%) have a non-empty value of `NumType`.
1614 types (3%) occur at least once with a non-empty value of `NumType`.
1566 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="de-pos-NUM.html">NUM</a></tt> (7461; 3% instances), <tt><a href="de-pos-ADJ.html">ADJ</a></tt> (629; 0% instances), <tt><a href="de-pos-PRON.html">PRON</a></tt> (171; 0% instances), <tt><a href="de-pos-DET.html">DET</a></tt> (1; 0% instances).

### `NUM`

7461 <tt><a href="de-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (7461; 100% of non-empty `NumType`): <em>zwei, drei, vier, 2007, 2006, fünf, 2009, 2010, 1, sechs</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (1556) occur only with one value of `NumType`.

### `ADJ`

629 <tt><a href="de-pos-ADJ.html">ADJ</a></tt> tokens (3% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="de-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (594; 94%), <tt><a href="de-feat-Number.html">Number</a></tt><tt>=Sing</tt> (385; 61%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (629; 100% of non-empty `NumType`): <em>ersten, erste, zweiten, zweite, dritten, erster, dritte, erstes, fünften, siebten</em>
* `EMPTY` (20258): <em>später, anderen, weitere, neue, bekannt, neuen, großen, große, deutschen, gut</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (15) occur only with one value of `NumType`.

### `PRON`

171 <tt><a href="de-pos-PRON.html">PRON</a></tt> tokens (1% of all `PRON` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PRON` and `NumType` co-occurred: <tt><a href="de-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (171; 100%), <tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Tot</tt> (171; 100%), <tt><a href="de-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (171; 100%), <tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (139; 81%).

`PRON` tokens may have the following values of `NumType`:

* `Card` (171; 100% of non-empty `NumType`): <em>beiden, beide, beider, beides</em>
* `EMPTY` (14522): <em>er, sich, sie, es, die, ich, der, man, diese, das</em>

### `DET`

1 <tt><a href="de-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="de-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="de-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Tot</tt> (1; 100%).

`DET` tokens may have the following values of `NumType`:

* `Card` (1; 100% of non-empty `NumType`): <em>beiden</em>
* `EMPTY` (36232): <em>der, die, dem, den, das, des, eine, ein, einer, einem</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="de-dep-conj.html">conj</a></tt>]--> NUM</tt> (306; 100%),
<tt>NUM --[<tt><a href="de-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (74; 100%),
<tt>NUM --[<tt><a href="de-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (58; 100%),
<tt>NUM --[<tt><a href="de-dep-compound.html">compound</a></tt>]--> NUM</tt> (27; 100%),
<tt>NUM --[<tt><a href="de-dep-appos.html">appos</a></tt>]--> NUM</tt> (11; 100%),
<tt>ADJ --[<tt><a href="de-dep-conj.html">conj</a></tt>]--> ADJ</tt> (4; 57%),
<tt>NUM --[<tt><a href="de-dep-amod.html">amod</a></tt>]--> NUM</tt> (4; 100%),
<tt>NUM --[<tt><a href="de-dep-obj.html">obj</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="de-dep-dep.html">dep</a></tt>]--> NUM</tt> (1; 100%).

