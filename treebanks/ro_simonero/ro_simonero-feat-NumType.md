---
layout: base
title:  'Statistics of NumType in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Frac`, `Ord`.

4606 tokens (3%) have a non-empty value of `NumType`.
925 types (5%) occur at least once with a non-empty value of `NumType`.
916 lemmas (9%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (4602; 3% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (4; 0% instances).

### `NUM`

4602 <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Plur</tt> (4288; 93%), <tt><a href="ro_simonero-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (3965; 86%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (4234; 92% of non-empty `NumType`): <em>2, 1, două, 3, 4, 5, 30, 10, 20, 6</em>
* `Frac` (3; 0% of non-empty `NumType`): <em>treime</em>
* `Ord` (365; 8% of non-empty `NumType`): <em>primul, prima, i, II, primele, III, doua, doilea, primă, ultimii</em>
* `EMPTY` (3): <em>35-40, II-2, III-IV</em>

<table>
  <tr><th>Paradigm <i>II</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt><tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ro_simonero-feat-NumForm.html">NumForm</a></tt><tt>=Roman</tt></tt></td><td></td><td><em>II</em></td></tr>
  <tr><td><tt><tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ro_simonero-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt></tt></td><td><em>II</em></td><td></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 99% lemmas (909) occur only with one value of `NumType`.

### `ADJ`

4 <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="ro_simonero-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (4; 100%), <tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Sing</tt> (4; 100%), <tt><a href="ro_simonero-feat-Case.html">Case</a></tt><tt>=Nom</tt> (3; 75%), <tt><a href="ro_simonero-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (3; 75%), <tt><a href="ro_simonero-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (3; 75%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (4; 100% of non-empty `NumType`): <em>ultimul, opta, primul</em>
* `EMPTY` (17049): <em>mare, vârstnici, crescut, zaharat, clinice, mici, cardiacă, cardiace, mari, important</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="ro_simonero-dep-conj.html">conj</a></tt>]--> NUM</tt> (366; 99%),
<tt>NUM --[<tt><a href="ro_simonero-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (112; 93%),
<tt>NUM --[<tt><a href="ro_simonero-dep-goeswith.html">goeswith</a></tt>]--> NUM</tt> (21; 100%),
<tt>NUM --[<tt><a href="ro_simonero-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (20; 100%),
<tt>NUM --[<tt><a href="ro_simonero-dep-compound.html">compound</a></tt>]--> NUM</tt> (4; 100%),
<tt>NUM --[<tt><a href="ro_simonero-dep-appos.html">appos</a></tt>]--> NUM</tt> (2; 100%).

