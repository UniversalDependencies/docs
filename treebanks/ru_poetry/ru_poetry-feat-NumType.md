---
layout: base
title:  'Statistics of NumType in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Ord`, `Sets`.

355 tokens (1%) have a non-empty value of `NumType`.
147 types (1%) occur at least once with a non-empty value of `NumType`.
86 lemmas (1%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt> (252; 0% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> (103; 0% instances).

### `NUM`

252 <tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="ru_poetry-feat-NumForm.html">NumForm</a></tt><tt>=Word</tt> (207; 82%), <tt><a href="ru_poetry-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (198; 79%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (238; 94% of non-empty `NumType`): <em>много, сколько, три, два, 1, две, 3, пять, четыре, 2</em>
* `Sets` (14; 6% of non-empty `NumType`): <em>двое, оба, трое, Пятеро, Семеро, Четверо, двоих, обоим, троих</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (50) occur only with one value of `NumType`.

### `ADJ`

103 <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> tokens (2% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="ru_poetry-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (103; 100%), <tt><a href="ru_poetry-feat-Variant.html">Variant</a></tt><tt>=EMPTY</tt> (103; 100%), <tt><a href="ru_poetry-feat-Number.html">Number</a></tt><tt>=Sing</tt> (56; 54%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (103; 100% of non-empty `NumType`): <em>первый, I, первым, III, первая, пятый, II, второй, первые, первых</em>
* `EMPTY` (5917): <em>тихий, белый, равно, золотые, милая, последний, черный, белые, лучше, хорошо</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (38) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="ru_poetry-dep-conj.html">conj</a></tt>]--> NUM</tt> (2; 100%),
<tt>ADJ --[<tt><a href="ru_poetry-dep-nmod.html">nmod</a></tt>]--> ADJ</tt> (1; 100%),
<tt>NUM --[<tt><a href="ru_poetry-dep-compound.html">compound</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="ru_poetry-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (1; 100%).

