---
layout: base
title:  'Statistics of NumForm in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Features: `NumForm`

This feature is language-specific.
It occurs with 3 different values: `Digit`, `Roman`, `Word`.

41165 tokens (3%) have a non-empty value of `NumForm`.
3589 types (3%) occur at least once with a non-empty value of `NumForm`.
3428 lemmas (6%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 1 part-of-speech tags: <tt><a href="cs-pos-NUM.html">NUM</a></tt> (41165; 3% instances).

### `NUM`

41165 <tt><a href="cs-pos-NUM.html">NUM</a></tt> tokens (99% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="cs-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (41165; 100%), <tt><a href="cs-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (36748; 89%), <tt><a href="cs-feat-NumValue.html">NumValue</a></tt><tt>=EMPTY</tt> (33115; 80%), <tt><a href="cs-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (29884; 73%), <tt><a href="cs-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (29858; 73%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (29481; 72% of non-empty `NumForm`): <em>1, 2, 3, 4, 6, 5, 1992, 10, 1994, 1993</em>
* `Roman` (376; 1% of non-empty `NumForm`): <em>II, I, III, IV, V, VI, XX, D, C, IX</em>
* `Word` (11308; 27% of non-empty `NumForm`): <em>dva, tři, jeden, dvě, tisíc, dvou, pět, čtyři, obou, jednoho</em>

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (3428) occur only with one value of `NumForm`.

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<tt><a href="cs-dep-conj.html">conj</a></tt>]--> NUM</tt> (3247; 100%),
<tt>NUM --[<tt><a href="cs-dep-compound.html">compound</a></tt>]--> NUM</tt> (2671; 95%),
<tt>NUM --[<tt><a href="cs-dep-orphan.html">orphan</a></tt>]--> NUM</tt> (79; 98%),
<tt>NUM --[<tt><a href="cs-dep-dep.html">dep</a></tt>]--> NUM</tt> (50; 96%).

