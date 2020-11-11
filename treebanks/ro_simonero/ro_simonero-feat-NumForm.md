---
layout: base
title:  'Statistics of NumForm in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Features: `NumForm`

This feature is language-specific.
It occurs with 3 different values: `Digit`, `Roman`, `Word`.

4570 tokens (3%) have a non-empty value of `NumForm`.
919 types (5%) occur at least once with a non-empty value of `NumForm`.
911 lemmas (9%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (4566; 3% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (4; 0% instances).

### `NUM`

4566 <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> tokens (99% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Plur</tt> (4252; 93%), <tt><a href="ro_simonero-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (4198; 92%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (3965; 87% of non-empty `NumForm`): <em>2, 1, 3, 4, 5, 30, 10, 20, 6, 15</em>
* `Roman` (108; 2% of non-empty `NumForm`): <em>i, II, III, IV, V, l, I-, VII, VIII, XIX</em>
* `Word` (493; 11% of non-empty `NumForm`): <em>două, trei, primul, prima, primele, doua, doilea, patru, primă, cinci</em>

<table>
  <tr><th>Paradigm <i>II</i></th><th><tt>Digit</tt></th><th><tt>Roman</tt></th></tr>
  <tr><td><tt><tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ro_simonero-feat-NumType.html">NumType</a></tt><tt>=Ord</tt></tt></td><td></td><td><em>II</em></td></tr>
  <tr><td><tt><tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ro_simonero-feat-NumType.html">NumType</a></tt><tt>=Card</tt></tt></td><td><em>II</em></td><td></td></tr>
</table>

`NumForm` seems to be **lexical feature** of `NUM`. 99% lemmas (904) occur only with one value of `NumForm`.

### `ADJ`

4 <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `ADJ` and `NumForm` co-occurred: <tt><a href="ro_simonero-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (4; 100%), <tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Sing</tt> (4; 100%), <tt><a href="ro_simonero-feat-Case.html">Case</a></tt><tt>=Nom</tt> (3; 75%), <tt><a href="ro_simonero-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (3; 75%), <tt><a href="ro_simonero-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (3; 75%).

`ADJ` tokens may have the following values of `NumForm`:

* `Word` (4; 100% of non-empty `NumForm`): <em>ultimul, opta, primul</em>

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<tt><a href="ro_simonero-dep-conj.html">conj</a></tt>]--> NUM</tt> (366; 99%),
<tt>NUM --[<tt><a href="ro_simonero-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (109; 90%),
<tt>NUM --[<tt><a href="ro_simonero-dep-goeswith.html">goeswith</a></tt>]--> NUM</tt> (21; 100%),
<tt>NUM --[<tt><a href="ro_simonero-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (20; 100%),
<tt>NUM --[<tt><a href="ro_simonero-dep-appos.html">appos</a></tt>]--> NUM</tt> (2; 100%).

