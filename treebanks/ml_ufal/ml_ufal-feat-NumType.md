---
layout: base
title:  'Statistics of NumType in UD_Malayalam-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Malayalam-UFAL: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Frac`, `Ord`.

44 tokens (2%) have a non-empty value of `NumType`.
41 types (3%) occur at least once with a non-empty value of `NumType`.
40 lemmas (3%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="ml_ufal-pos-NUM.html">NUM</a></tt> (42; 2% instances), <tt><a href="ml_ufal-pos-ADJ.html">ADJ</a></tt> (2; 0% instances).

### `NUM`

42 <tt><a href="ml_ufal-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="ml_ufal-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (24; 57%), <tt><a href="ml_ufal-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (24; 57%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (41; 98% of non-empty `NumType`): <em>1, മൂന്ന്, രണ്ട്, 0,7-0,8, 12, 15.56, 156, 16, 18, 19.2</em>
* `Frac` (1; 2% of non-empty `NumType`): <em>പത്തരയോടെ</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (38) occur only with one value of `NumType`.

### `ADJ`

2 <tt><a href="ml_ufal-pos-ADJ.html">ADJ</a></tt> tokens (1% of all `ADJ` tokens) have a non-empty value of `NumType`.

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (2; 100% of non-empty `NumType`): <em>നാലാം, പത്താം</em>
* `EMPTY` (228): <em>കഴിഞ്ഞ, പുതിയ, ഉണ്ടായ, ഓരോ, കറുത്ത, ദേശീയ, മാത്രമല്ല, വലിയ, ഓഫീസർമാരായ, കഴിയുന്ന</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="ml_ufal-dep-flat.html">flat</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="ml_ufal-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (1; 100%).

