---
layout: base
title:  'Statistics of NumForm in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Features: `NumForm`

This feature is language-specific.
It occurs with 3 different values: `Digit`, `Letter`, `Roman`.

703 tokens (2%) have a non-empty value of `NumForm`.
321 types (3%) occur at least once with a non-empty value of `NumForm`.
279 lemmas (4%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 3 part-of-speech tags: <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (573; 1% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (128; 0% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (2; 0% instances).

### `NUM`

573 <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> tokens (86% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="et_ewt-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (566; 99%), <tt><a href="et_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (354; 62%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (513; 90% of non-empty `NumForm`): <em>2, 3, 4, 11, 20, 10, 1, 100, 5, 8</em>
* `Letter` (60; 10% of non-empty `NumForm`): <em>paar, ühe, kahe, kaks, üks, 9nda, kolm, pool, ühtegi, Kolme</em>

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (215) occur only with one value of `NumForm`.

### `ADJ`

128 <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> tokens (5% of all `ADJ` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `ADJ` and `NumForm` co-occurred: <tt><a href="et_ewt-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (128; 100%), <tt><a href="et_ewt-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (128; 100%), <tt><a href="et_ewt-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (128; 100%), <tt><a href="et_ewt-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (126; 98%), <tt><a href="et_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (107; 84%).

`ADJ` tokens may have the following values of `NumForm`:

* `Digit` (91; 71% of non-empty `NumForm`): <em>27., 3., 9., 1., 2006., 4., 6., 10., 149., 15.</em>
* `Letter` (34; 27% of non-empty `NumForm`): <em>esimene, Teine, 9ndas, esimese, esimest, 10.ndasse, 12-ndast, 9-nda, I-ne, Kaheksas</em>
* `Roman` (3; 2% of non-empty `NumForm`): <em>II, I</em>

<table>
  <tr><th>Paradigm <i>II</i></th><th><tt>Digit</tt></th><th><tt>Roman</tt></th></tr>
  <tr><td><tt><tt><a href="et_ewt-feat-Case.html">Case</a></tt><tt>=Gen</tt></tt></td><td><em>II</em></td><td></td></tr>
  <tr><td><tt><tt><a href="et_ewt-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td></td><td><em>II</em></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>II</em></td></tr>
</table>

`NumForm` seems to be **lexical feature** of `ADJ`. 99% lemmas (71) occur only with one value of `NumForm`.

### `PROPN`

2 <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> tokens (0% of all `PROPN` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `PROPN` and `NumForm` co-occurred: <tt><a href="et_ewt-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (2; 100%), <tt><a href="et_ewt-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (2; 100%).

`PROPN` tokens may have the following values of `NumForm`:

* `Digit` (2; 100% of non-empty `NumForm`): <em>romz, saku0007</em>

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<tt><a href="et_ewt-dep-conj.html">conj</a></tt>]--> NUM</tt> (31; 97%),
<tt>NUM --[<tt><a href="et_ewt-dep-flat.html">flat</a></tt>]--> NUM</tt> (12; 100%),
<tt>NUM --[<tt><a href="et_ewt-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (4; 100%),
<tt>ADJ --[<tt><a href="et_ewt-dep-conj.html">conj</a></tt>]--> ADJ</tt> (1; 100%),
<tt>NUM --[<tt><a href="et_ewt-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (1; 100%).

