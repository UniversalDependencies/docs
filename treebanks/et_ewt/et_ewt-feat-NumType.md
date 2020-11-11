---
layout: base
title:  'Statistics of NumType in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

1166 tokens (2%) have a non-empty value of `NumType`.
455 types (3%) occur at least once with a non-empty value of `NumType`.
345 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (935; 2% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (217; 0% instances), <tt><a href="et_ewt-pos-SYM.html">SYM</a></tt> (12; 0% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (2; 0% instances).

### `NUM`

935 <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="et_ewt-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (730; 78%), <tt><a href="et_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (518; 55%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (924; 99% of non-empty `NumType`): <em>10, 3, 2, kaks, 1, 20, 4, paar, ühe, 100</em>
* `Ord` (11; 1% of non-empty `NumType`): <em>9nda, 10, 10ndasse, 11, 15., 1998., 6500.-, 8, 9-nda, 94'</em>

<table>
  <tr><th>Paradigm <i>10</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt><tt><a href="et_ewt-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="et_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>10</em></td><td></td></tr>
  <tr><td><tt><tt><a href="et_ewt-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="et_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>10</em></td><td></td></tr>
  <tr><td><tt></tt></td><td><em>10</em></td><td></td></tr>
  <tr><td><tt><tt><a href="et_ewt-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>10</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 99% lemmas (273) occur only with one value of `NumType`.

### `ADJ`

217 <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> tokens (7% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="et_ewt-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (217; 100%), <tt><a href="et_ewt-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (217; 100%), <tt><a href="et_ewt-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (217; 100%), <tt><a href="et_ewt-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (213; 98%), <tt><a href="et_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (177; 82%).

`ADJ` tokens may have the following values of `NumType`:

* `Card` (2; 1% of non-empty `NumType`): <em>300, 700</em>
* `Ord` (215; 99% of non-empty `NumType`): <em>esimene, 27., 3., esimese, esimest, teises, teine, 8., 9., teisele</em>
* `EMPTY` (3091): <em>hea, õige, võimalik, huvitav, vana, head, tore, antud, raske, inglise</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (81) occur only with one value of `NumType`.

### `SYM`

12 <tt><a href="et_ewt-pos-SYM.html">SYM</a></tt> tokens (5% of all `SYM` tokens) have a non-empty value of `NumType`.

`SYM` tokens may have the following values of `NumType`:

* `Card` (12; 100% of non-empty `NumType`): <em>%, -.-</em>
* `EMPTY` (215): <em>@, %, :D, :), :s, :/, ;), =), *, +</em>

### `PROPN`

2 <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> tokens (0% of all `PROPN` tokens) have a non-empty value of `NumType`.

`PROPN` tokens may have the following values of `NumType`:

* `Card` (1; 50% of non-empty `NumType`): <em>saku0007</em>
* `Ord` (1; 50% of non-empty `NumType`): <em>II-st</em>
* `EMPTY` (2369): <em>eesti, eestis, Jumal, oh, Ennist, Pärtel, nomad, Tallinna, gasoline, Imre</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="et_ewt-dep-conj.html">conj</a></tt>]--> NUM</tt> (61; 100%),
<tt>NUM --[<tt><a href="et_ewt-dep-flat.html">flat</a></tt>]--> NUM</tt> (15; 100%),
<tt>NUM --[<tt><a href="et_ewt-dep-compound.html">compound</a></tt>]--> NUM</tt> (12; 100%),
<tt>NUM --[<tt><a href="et_ewt-dep-goeswith.html">goeswith</a></tt>]--> NUM</tt> (11; 100%),
<tt>ADJ --[<tt><a href="et_ewt-dep-conj.html">conj</a></tt>]--> ADJ</tt> (6; 100%),
<tt>NUM --[<tt><a href="et_ewt-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (5; 100%),
<tt>NUM --[<tt><a href="et_ewt-dep-nsubj-cop.html">nsubj:cop</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="et_ewt-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (1; 100%).

