---
layout: base
title:  'Statistics of NumType in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Frac`, `Ord`.

358 tokens (2%) have a non-empty value of `NumType`.
181 types (4%) occur at least once with a non-empty value of `NumType`.
180 lemmas (7%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (357; 2% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).

### `NUM`

357 <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Plur</tt> (345; 97%), <tt><a href="ro_simonero-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (326; 91%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (339; 95% of non-empty `NumType`): <em>2, 30, 7, 15, 5, 60, 9, două, 10, 14</em>
* `Frac` (1; 0% of non-empty `NumType`): <em>treime</em>
* `Ord` (17; 5% of non-empty `NumType`): <em>prima, primele, ultimilor, I, III, IV, doilea, doua, primei, primul</em>
* `EMPTY` (1): <em>III-IV</em>

<table>
  <tr><th>Paradigm <i>III</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt><tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ro_simonero-feat-NumForm.html">NumForm</a></tt><tt>=Roman</tt></tt></td><td></td><td><em>III</em></td></tr>
  <tr><td><tt><tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ro_simonero-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt></tt></td><td><em>III</em></td><td></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 99% lemmas (179) occur only with one value of `NumType`.

### `ADJ`

1 <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="ro_simonero-feat-Case.html">Case</a></tt><tt>=Nom</tt> (1; 100%), <tt><a href="ro_simonero-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (1; 100%), <tt><a href="ro_simonero-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="ro_simonero-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (1; 100%), <tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (1; 100% of non-empty `NumType`): <em>primul</em>
* `EMPTY` (2084): <em>aortică, cardiacă, aortice, mare, valvulare, vârstnici, crescut, severă, valvulară, chirurgicale</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="ro_simonero-dep-conj.html">conj</a></tt>]--> NUM</tt> (26; 100%),
<tt>NUM --[<tt><a href="ro_simonero-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (13; 100%),
<tt>NUM --[<tt><a href="ro_simonero-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (2; 100%).

