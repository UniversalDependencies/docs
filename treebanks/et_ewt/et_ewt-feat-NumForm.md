---
layout: base
title:  'Statistics of NumForm in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Features: `NumForm`

This feature is language-specific.
It occurs with 3 different values: `Digit`, `Roman`, `Word`.

1355 tokens (2%) have a non-empty value of `NumForm`.
494 types (3%) occur at least once with a non-empty value of `NumForm`.
371 lemmas (4%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 4 part-of-speech tags: <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (1114; 2% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (237; 0% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-SYM.html">SYM</a></tt> (2; 0% instances).

### `NUM`

1114 <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="et_ewt-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (1095; 98%), <tt><a href="et_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (628; 56%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (858; 77% of non-empty `NumForm`): <em>2, 10, 3, 1, 100, 4, 20, 11, 5, 8</em>
* `Word` (256; 23% of non-empty `NumForm`): <em>kaks, paar, ühe, kahe, üks, kolm, miljonit, paari, miljardit, miljoni</em>

<table>
  <tr><th>Paradigm <i>700</i></th><th><tt>Digit</tt></th><th><tt>Word</tt></th></tr>
  <tr><td><tt><tt><a href="et_ewt-feat-Case.html">Case</a></tt><tt>=Abl</tt>|<tt><a href="et_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>700lt</em></td><td></td></tr>
  <tr><td><tt><tt><a href="et_ewt-feat-Case.html">Case</a></tt><tt>=All</tt>|<tt><a href="et_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>700'le</em></td></tr>
  <tr><td><tt><tt><a href="et_ewt-feat-Case.html">Case</a></tt><tt>=Com</tt>|<tt><a href="et_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>700ga</em></td><td></td></tr>
  <tr><td><tt></tt></td><td><em>700</em></td><td></td></tr>
</table>

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (302) occur only with one value of `NumForm`.

### `ADJ`

237 <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> tokens (6% of all `ADJ` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `ADJ` and `NumForm` co-occurred: <tt><a href="et_ewt-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (237; 100%), <tt><a href="et_ewt-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (237; 100%), <tt><a href="et_ewt-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (237; 100%), <tt><a href="et_ewt-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (233; 98%), <tt><a href="et_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (195; 82%).

`ADJ` tokens may have the following values of `NumForm`:

* `Digit` (129; 54% of non-empty `NumForm`): <em>27., 3., 29., 1., 5., 8., 9., 15., 18., 2.</em>
* `Roman` (5; 2% of non-empty `NumForm`): <em>I, II, I-ne</em>
* `Word` (103; 43% of non-empty `NumForm`): <em>esimene, esimese, esimest, teises, esimeses, teine, teisele, esimesel, teist, esimesed</em>

<table>
  <tr><th>Paradigm <i>1</i></th><th><tt>Digit</tt></th><th><tt>Word</tt></th></tr>
  <tr><td><tt><tt><a href="et_ewt-feat-Case.html">Case</a></tt><tt>=Ade</tt>|<tt><a href="et_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>1.</em></td><td><em>1-sel</em></td></tr>
  <tr><td><tt></tt></td><td><em>1, 1.</em></td><td></td></tr>
</table>

`NumForm` seems to be **lexical feature** of `ADJ`. 94% lemmas (79) occur only with one value of `NumForm`.

### `PROPN`

2 <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> tokens (0% of all `PROPN` tokens) have a non-empty value of `NumForm`.

`PROPN` tokens may have the following values of `NumForm`:

* `Digit` (1; 50% of non-empty `NumForm`): <em>saku0007</em>
* `Roman` (1; 50% of non-empty `NumForm`): <em>II-st</em>

### `SYM`

2 <tt><a href="et_ewt-pos-SYM.html">SYM</a></tt> tokens (1% of all `SYM` tokens) have a non-empty value of `NumForm`.

`SYM` tokens may have the following values of `NumForm`:

* `Digit` (2; 100% of non-empty `NumForm`): <em>%, -.-</em>

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<tt><a href="et_ewt-dep-conj.html">conj</a></tt>]--> NUM</tt> (66; 99%),
<tt>NUM --[<tt><a href="et_ewt-dep-flat.html">flat</a></tt>]--> NUM</tt> (15; 100%),
<tt>NUM --[<tt><a href="et_ewt-dep-goeswith.html">goeswith</a></tt>]--> NUM</tt> (13; 100%),
<tt>ADJ --[<tt><a href="et_ewt-dep-conj.html">conj</a></tt>]--> ADJ</tt> (7; 100%),
<tt>NUM --[<tt><a href="et_ewt-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (5; 100%).

