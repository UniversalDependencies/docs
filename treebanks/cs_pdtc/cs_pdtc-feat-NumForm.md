---
layout: base
title:  'Statistics of NumForm in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Features: `NumForm`

This feature is language-specific.
It occurs with 3 different values: `Digit`, `Roman`, `Word`.

93184 tokens (3%) have a non-empty value of `NumForm`.
7225 types (4%) occur at least once with a non-empty value of `NumForm`.
7071 lemmas (8%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 1 part-of-speech tags: <tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (93184; 3% instances).

### `NUM`

93184 <tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> tokens (89% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="cs_pdtc-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (93184; 100%), <tt><a href="cs_pdtc-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (82739; 89%), <tt><a href="cs_pdtc-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (69042; 74%), <tt><a href="cs_pdtc-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (69042; 74%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (67981; 73% of non-empty `NumForm`): <em>1, 2, 3, 4, 8, 10, 30, 5, 15, 20</em>
* `Roman` (435; 0% of non-empty `NumForm`): <em>II, I, III, IV, V, VI, VII, IX, XX, VIII</em>
* `Word` (24768; 27% of non-empty `NumForm`): <em>dva, tři, jeden, dvě, dvou, čtyři, pět, jedna, jednoho, jedné</em>

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (7071) occur only with one value of `NumForm`.

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<tt><a href="cs_pdtc-dep-compound.html">compound</a></tt>]--> NUM</tt> (5837; 67%),
<tt>NUM --[<tt><a href="cs_pdtc-dep-conj.html">conj</a></tt>]--> NUM</tt> (5698; 99%),
<tt>NUM --[<tt><a href="cs_pdtc-dep-orphan.html">orphan</a></tt>]--> NUM</tt> (34; 89%),
<tt>NUM --[<tt><a href="cs_pdtc-dep-dep.html">dep</a></tt>]--> NUM</tt> (30; 83%),
<tt>NUM --[<tt><a href="cs_pdtc-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (10; 100%),
<tt>NUM --[<tt><a href="cs_pdtc-dep-nsubj.html">nsubj</a></tt>]--> NUM</tt> (5; 71%),
<tt>NUM --[<tt><a href="cs_pdtc-dep-appos.html">appos</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="cs_pdtc-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (1; 100%).

