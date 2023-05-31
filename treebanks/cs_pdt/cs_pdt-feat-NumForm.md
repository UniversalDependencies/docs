---
layout: base
title:  'Statistics of NumForm in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Features: `NumForm`

This feature is language-specific.
It occurs with 3 different values: `Digit`, `Roman`, `Word`.

8530 tokens (3%) have a non-empty value of `NumForm`.
1315 types (2%) occur at least once with a non-empty value of `NumForm`.
1225 lemmas (5%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 1 part-of-speech tags: <tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (8530; 3% instances).

### `NUM`

8530 <tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="cs_pdt-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (8530; 100%), <tt><a href="cs_pdt-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (7565; 89%), <tt><a href="cs_pdt-feat-NumValue.html">NumValue</a></tt><tt>=EMPTY</tt> (7320; 86%), <tt><a href="cs_pdt-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (6163; 72%), <tt><a href="cs_pdt-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (6163; 72%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (6033; 71% of non-empty `NumForm`): <em>1, 2, 3, 4, 10, 5, 1992, 6, 1993, 15</em>
* `Roman` (70; 1% of non-empty `NumForm`): <em>II, I, III, IV, V, VIII, XII, XX, XXIII</em>
* `Word` (2427; 28% of non-empty `NumForm`): <em>tři, dva, dvě, jeden, dvou, čtyři, pět, oba, jedné, šest</em>

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (1225) occur only with one value of `NumForm`.

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<tt><a href="cs_pdt-dep-conj.html">conj</a></tt>]--> NUM</tt> (691; 99%),
<tt>NUM --[<tt><a href="cs_pdt-dep-compound.html">compound</a></tt>]--> NUM</tt> (440; 100%),
<tt>NUM --[<tt><a href="cs_pdt-dep-orphan.html">orphan</a></tt>]--> NUM</tt> (18; 95%),
<tt>NUM --[<tt><a href="cs_pdt-dep-dep.html">dep</a></tt>]--> NUM</tt> (16; 94%),
<tt>NUM --[<tt><a href="cs_pdt-dep-flat.html">flat</a></tt>]--> NUM</tt> (11; 100%).

