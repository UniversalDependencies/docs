---
layout: base
title:  'Statistics of NumForm in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Features: `NumForm`

This feature is language-specific.
It occurs with 4 different values: `Combi`, `Digit`, `Roman`, `Word`.

355 tokens (1%) have a non-empty value of `NumForm`.
147 types (1%) occur at least once with a non-empty value of `NumForm`.
86 lemmas (1%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt> (252; 0% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> (103; 0% instances).

### `NUM`

252 <tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="ru_poetry-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (238; 94%), <tt><a href="ru_poetry-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (198; 79%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (45; 18% of non-empty `NumForm`): <em>1, 3, 2, 12, 11, 17, 25, 293, 38, 4</em>
* `Word` (207; 82% of non-empty `NumForm`): <em>много, сколько, три, два, две, пять, четыре, двух, мало, сто</em>

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (50) occur only with one value of `NumForm`.

### `ADJ`

103 <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> tokens (2% of all `ADJ` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `ADJ` and `NumForm` co-occurred: <tt><a href="ru_poetry-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (103; 100%), <tt><a href="ru_poetry-feat-Variant.html">Variant</a></tt><tt>=EMPTY</tt> (103; 100%), <tt><a href="ru_poetry-feat-Number.html">Number</a></tt><tt>=Sing</tt> (56; 54%).

`ADJ` tokens may have the following values of `NumForm`:

* `Combi` (1; 1% of non-empty `NumForm`): <em>17-го</em>
* `Digit` (12; 12% of non-empty `NumForm`): <em>12, 1825, 19, 1914, 1918, 1941, 1971, 1973, 1981, 1986</em>
* `Roman` (29; 28% of non-empty `NumForm`): <em>I, III, II, IV, IX, XIII, V, VI, VIII, XIV</em>
* `Word` (61; 59% of non-empty `NumForm`): <em>первый, первым, первая, пятый, второй, первые, первых, третий, вторая, первого</em>

`NumForm` seems to be **lexical feature** of `ADJ`. 100% lemmas (38) occur only with one value of `NumForm`.

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>ADJ --[<tt><a href="ru_poetry-dep-compound.html">compound</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="ru_poetry-dep-conj.html">conj</a></tt>]--> NUM</tt> (2; 100%),
<tt>ADJ --[<tt><a href="ru_poetry-dep-nmod.html">nmod</a></tt>]--> ADJ</tt> (1; 100%),
<tt>NUM --[<tt><a href="ru_poetry-dep-compound.html">compound</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="ru_poetry-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (1; 100%).

