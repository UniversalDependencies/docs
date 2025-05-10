---
layout: base
title:  'Statistics of NumForm in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Features: `NumForm`

This feature is language-specific.
It occurs with 3 different values: `Digit`, `Roman`, `Word`.

18233 tokens (3%) have a non-empty value of `NumForm`.
2520 types (3%) occur at least once with a non-empty value of `NumForm`.
2419 lemmas (6%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 1 part-of-speech tags: <tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (18233; 3% instances).

### `NUM`

18233 <tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> tokens (90% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="cs_pdtc-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (18233; 100%), <tt><a href="cs_pdtc-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (16216; 89%), <tt><a href="cs_pdtc-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (13473; 74%), <tt><a href="cs_pdtc-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (13473; 74%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (13251; 73% of non-empty `NumForm`): <em>1, 2, 3, 8, 4, 10, 30, 5, 15, 20</em>
* `Roman` (95; 1% of non-empty `NumForm`): <em>II, I, III, IV, V, VII, IX, VIII, XII, XX</em>
* `Word` (4887; 27% of non-empty `NumForm`): <em>dva, tři, jeden, dvě, čtyři, dvou, pět, jednoho, jedna, dvěma</em>

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (2419) occur only with one value of `NumForm`.

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<tt><a href="cs_pdtc-dep-conj.html">conj</a></tt>]--> NUM</tt> (1168; 99%),
<tt>NUM --[<tt><a href="cs_pdtc-dep-compound.html">compound</a></tt>]--> NUM</tt> (1015; 60%),
<tt>NUM --[<tt><a href="cs_pdtc-dep-dep.html">dep</a></tt>]--> NUM</tt> (10; 77%),
<tt>NUM --[<tt><a href="cs_pdtc-dep-orphan.html">orphan</a></tt>]--> NUM</tt> (7; 78%),
<tt>NUM --[<tt><a href="cs_pdtc-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="cs_pdtc-dep-obl.html">obl</a></tt>]--> NUM</tt> (1; 100%).

