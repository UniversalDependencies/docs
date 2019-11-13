---
layout: base
title:  'Statistics of NumForm in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Features: `NumForm`

This feature is language-specific.
It occurs with 3 different values: `Digit`, `Roman`, `Word`.

41166 tokens (3%) have a non-empty value of `NumForm`.
3590 types (3%) occur at least once with a non-empty value of `NumForm`.
3429 lemmas (6%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 1 part-of-speech tags: <tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (41166; 3% instances).

### `NUM`

41166 <tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> tokens (99% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="cs_pdt-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (41166; 100%), <tt><a href="cs_pdt-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (36749; 89%), <tt><a href="cs_pdt-feat-NumValue.html">NumValue</a></tt><tt>=EMPTY</tt> (33116; 80%), <tt><a href="cs_pdt-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (29885; 73%), <tt><a href="cs_pdt-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (29859; 73%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (29482; 72% of non-empty `NumForm`): <em>1, 2, 3, 4, 6, 5, 1992, 10, 1994, 1993</em>
* `Roman` (376; 1% of non-empty `NumForm`): <em>II, I, III, IV, V, VI, XX, D, C, IX</em>
* `Word` (11308; 27% of non-empty `NumForm`): <em>dva, tři, jeden, dvě, tisíc, dvou, pět, čtyři, obou, jednoho</em>

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (3429) occur only with one value of `NumForm`.

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<tt><a href="cs_pdt-dep-conj.html">conj</a></tt>]--> NUM</tt> (3252; 100%),
<tt>NUM --[<tt><a href="cs_pdt-dep-compound.html">compound</a></tt>]--> NUM</tt> (2670; 95%),
<tt>NUM --[<tt><a href="cs_pdt-dep-orphan.html">orphan</a></tt>]--> NUM</tt> (75; 97%),
<tt>NUM --[<tt><a href="cs_pdt-dep-dep.html">dep</a></tt>]--> NUM</tt> (50; 96%),
<tt>NUM --[<tt><a href="cs_pdt-dep-flat.html">flat</a></tt>]--> NUM</tt> (18; 100%),
<tt>NUM --[<tt><a href="cs_pdt-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (1; 100%).

