---
layout: base
title:  'Statistics of NumType in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

18637 tokens (1%) have a non-empty value of `NumType`.
1490 types (1%) occur at least once with a non-empty value of `NumType`.
1319 lemmas (3%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (18613; 1% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (24; 0% instances).

### `NUM`

18613 <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> tokens (82% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="ru_syntagrus-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (15621; 84%), <tt><a href="ru_syntagrus-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (12363; 66%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (18613; 100% of non-empty `NumType`): <em>многие, 1, 10, один, несколько, два, многих, больше, 20, 2</em>
* `EMPTY` (4059): <em>один, несколько, два, много, три, двух, две, одна, одной, сколько</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (1301) occur only with one value of `NumType`.

### `ADJ`

24 <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="ru_syntagrus-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (24; 100%), <tt><a href="ru_syntagrus-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (18; 75%), <tt><a href="ru_syntagrus-feat-Number.html">Number</a></tt><tt>=Plur</tt> (17; 71%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (24; 100% of non-empty `NumType`): <em>1990-х, 30-е, 70-х, 80-х, 1600-метровый, 1930-е, 1938-го, 1960-е, 1970-е, 1970-х</em>
* `EMPTY` (143251): <em>нужно, других, должны, другой, должен, первый, другие, сам, второй, новые</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (18) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="ru_syntagrus-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (951; 100%),
<tt>NUM --[<tt><a href="ru_syntagrus-dep-conj.html">conj</a></tt>]--> NUM</tt> (168; 100%),
<tt>NUM --[<tt><a href="ru_syntagrus-dep-nummod-gov.html">nummod:gov</a></tt>]--> NUM</tt> (127; 100%),
<tt>NUM --[<tt><a href="ru_syntagrus-dep-advcl.html">advcl</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="ru_syntagrus-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="ru_syntagrus-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="ru_syntagrus-dep-orphan.html">orphan</a></tt>]--> NUM</tt> (1; 100%).

