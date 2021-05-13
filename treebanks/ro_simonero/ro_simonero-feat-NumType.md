---
layout: base
title:  'Statistics of NumType in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Frac`, `Ord`.

4607 tokens (3%) have a non-empty value of `NumType`.
926 types (5%) occur at least once with a non-empty value of `NumType`.
917 lemmas (9%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (4603; 3% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (4; 0% instances).

### `NUM`

4603 <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Sing</tt> (4053; 88%), <tt><a href="ro_simonero-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (3890; 85%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (4161; 90% of non-empty `NumType`): <em>2, 1, două, 3, 4, 5, 30, 10, 20, 6</em>
* `Frac` (3; 0% of non-empty `NumType`): <em>treime</em>
* `Ord` (439; 10% of non-empty `NumType`): <em>primul, II, iv, III, prima, i, primele, doua, doilea, primă</em>
* `EMPTY` (2): <em>II-2, III-IV</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (916) occur only with one value of `NumType`.

### `ADJ`

4 <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="ro_simonero-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (4; 100%), <tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Sing</tt> (4; 100%), <tt><a href="ro_simonero-feat-Case.html">Case</a></tt><tt>=Nom</tt> (3; 75%), <tt><a href="ro_simonero-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (3; 75%), <tt><a href="ro_simonero-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (3; 75%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (4; 100% of non-empty `NumType`): <em>ultimul, opta, primul</em>
* `EMPTY` (17048): <em>mare, vârstnici, crescut, zaharat, clinice, mici, cardiacă, cardiace, mari, important</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="ro_simonero-dep-conj.html">conj</a></tt>]--> NUM</tt> (368; 100%),
<tt>NUM --[<tt><a href="ro_simonero-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (111; 92%),
<tt>NUM --[<tt><a href="ro_simonero-dep-goeswith.html">goeswith</a></tt>]--> NUM</tt> (21; 100%),
<tt>NUM --[<tt><a href="ro_simonero-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (20; 100%),
<tt>NUM --[<tt><a href="ro_simonero-dep-compound.html">compound</a></tt>]--> NUM</tt> (4; 100%),
<tt>NUM --[<tt><a href="ro_simonero-dep-appos.html">appos</a></tt>]--> NUM</tt> (2; 100%).

