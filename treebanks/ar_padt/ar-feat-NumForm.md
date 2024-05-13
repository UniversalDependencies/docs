---
layout: base
title:  'Statistics of NumForm in UD_Arabic'
udver: '2'
---

## Treebank Statistics: UD_Arabic: Features: `NumForm`

This feature is language-specific.
It occurs with 2 different values: `Digit`, `Word`.

7756 tokens (3%) have a non-empty value of `NumForm`.
1083 types (4%) occur at least once with a non-empty value of `NumForm`.
993 lemmas (6%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 1 part-of-speech tags: <tt><a href="ar-pos-NUM.html">NUM</a></tt> (7756; 3% instances).

### `NUM`

7756 <tt><a href="ar-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="ar-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (6314; 81%), <tt><a href="ar-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (5551; 72%), <tt><a href="ar-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (5550; 72%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (5521; 71% of non-empty `NumForm`): 15، 3، 6، 2، 8، 7، 4، 11، 10، 12
* `Word` (2235; 29% of non-empty `NumForm`): مليون، مليار، ألف، ثلاثة، ملايين، المئة، بليون، الف، المائة، عشرة

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (993) occur only with one value of `NumForm`.

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<tt><a href="ar-dep-conj.html">conj</a></tt>]--> NUM</tt> (878; 96%),
<tt>NUM --[<tt><a href="ar-dep-appos.html">appos</a></tt>]--> NUM</tt> (82; 91%),
<tt>NUM --[<tt><a href="ar-dep-dep.html">dep</a></tt>]--> NUM</tt> (10; 100%),
<tt>NUM --[<tt><a href="ar-dep-obl.html">obl</a></tt>]--> NUM</tt> (8; 89%),
<tt>NUM --[<tt><a href="ar-dep-cc.html">cc</a></tt>]--> NUM</tt> (7; 100%),
<tt>NUM --[<tt><a href="ar-dep-nsubj.html">nsubj</a></tt>]--> NUM</tt> (5; 83%),
<tt>NUM --[<tt><a href="ar-dep-cop.html">cop</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="ar-dep-obj.html">obj</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="ar-dep-obl-arg.html">obl:arg</a></tt>]--> NUM</tt> (1; 100%).

