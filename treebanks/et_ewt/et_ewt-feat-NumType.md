---
layout: base
title:  'Statistics of NumType in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

864 tokens (2%) have a non-empty value of `NumType`.
383 types (3%) occur at least once with a non-empty value of `NumType`.
294 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (664; 2% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (188; 0% instances), <tt><a href="et_ewt-pos-SYM.html">SYM</a></tt> (10; 0% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (2; 0% instances).

### `NUM`

664 <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="et_ewt-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (513; 77%), <tt><a href="et_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (439; 66%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (657; 99% of non-empty `NumType`): <em>2, 3, ühe, kaks, paar, 4, 20, 10, 11, 1</em>
* `Ord` (7; 1% of non-empty `NumType`): <em>9nda, 10ndasse, 11, 15., 1998., 9-nda</em>

<table>
  <tr><th>Paradigm <i>10</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt><tt><a href="et_ewt-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="et_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>10</em></td><td></td></tr>
  <tr><td><tt><tt><a href="et_ewt-feat-Case.html">Case</a></tt><tt>=Ill</tt>|<tt><a href="et_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>10ndasse</em></td></tr>
  <tr><td><tt><tt><a href="et_ewt-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="et_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>10</em></td><td></td></tr>
  <tr><td><tt></tt></td><td><em>10</em></td><td></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 99% lemmas (224) occur only with one value of `NumType`.

### `ADJ`

188 <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> tokens (8% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="et_ewt-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (188; 100%), <tt><a href="et_ewt-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (188; 100%), <tt><a href="et_ewt-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (188; 100%), <tt><a href="et_ewt-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (186; 99%), <tt><a href="et_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (164; 87%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (188; 100% of non-empty `NumType`): <em>esimene, 27., 3., esimest, teises, esimese, teine, 9., teisele, 1.</em>
* `EMPTY` (2269): <em>hea, õige, head, lihtne, inglise, raske, võimalik, antud, huvitav, suur</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (75) occur only with one value of `NumType`.

### `SYM`

10 <tt><a href="et_ewt-pos-SYM.html">SYM</a></tt> tokens (13% of all `SYM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `SYM` and `NumType` co-occurred: <tt><a href="et_ewt-feat-Abbr.html">Abbr</a></tt><tt>=EMPTY</tt> (10; 100%), <tt><a href="et_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (6; 60%).

`SYM` tokens may have the following values of `NumType`:

* `Card` (10; 100% of non-empty `NumType`): <em>%</em>
* `EMPTY` (67): <em>%, :s, =), :), :/, :D, ;), &, :/., ;D</em>

### `PROPN`

2 <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> tokens (0% of all `PROPN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PROPN` and `NumType` co-occurred: <tt><a href="et_ewt-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (2; 100%), <tt><a href="et_ewt-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (2; 100%).

`PROPN` tokens may have the following values of `NumType`:

* `Card` (2; 100% of non-empty `NumType`): <em>romz, saku0007</em>
* `EMPTY` (1591): <em>Eesti, nomad, Tallinna, gasoline, Imre, Zopp, Dedicated, Ivanov, YOU, kensey</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="et_ewt-dep-conj.html">conj</a></tt>]--> NUM</tt> (32; 100%),
<tt>NUM --[<tt><a href="et_ewt-dep-flat.html">flat</a></tt>]--> NUM</tt> (12; 100%),
<tt>NUM --[<tt><a href="et_ewt-dep-compound.html">compound</a></tt>]--> NUM</tt> (8; 100%),
<tt>NUM --[<tt><a href="et_ewt-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (4; 100%),
<tt>ADJ --[<tt><a href="et_ewt-dep-conj.html">conj</a></tt>]--> ADJ</tt> (2; 100%),
<tt>NUM --[<tt><a href="et_ewt-dep-nsubj-cop.html">nsubj:cop</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="et_ewt-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (1; 100%).

