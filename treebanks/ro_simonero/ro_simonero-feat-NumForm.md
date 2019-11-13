---
layout: base
title:  'Statistics of NumForm in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Features: `NumForm`

This feature is language-specific.
It occurs with 3 different values: `Digit`, `Roman`, `Word`.

356 tokens (2%) have a non-empty value of `NumForm`.
180 types (4%) occur at least once with a non-empty value of `NumForm`.
179 lemmas (7%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (355; 2% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).

### `NUM`

355 <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> tokens (99% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Plur</tt> (343; 97%), <tt><a href="ro_simonero-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (337; 95%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (326; 92% of non-empty `NumForm`): <em>2, 30, 7, 15, 5, 60, 9, 10, 14, 4</em>
* `Roman` (3; 1% of non-empty `NumForm`): <em>I, III, IV</em>
* `Word` (26; 7% of non-empty `NumForm`): <em>două, trei, prima, primele, ultimilor, doi, doilea, doua, primei, primul</em>

<table>
  <tr><th>Paradigm <i>III</i></th><th><tt>Digit</tt></th><th><tt>Roman</tt></th></tr>
  <tr><td><tt><tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ro_simonero-feat-NumType.html">NumType</a></tt><tt>=Ord</tt></tt></td><td></td><td><em>III</em></td></tr>
  <tr><td><tt><tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ro_simonero-feat-NumType.html">NumType</a></tt><tt>=Card</tt></tt></td><td><em>III</em></td><td></td></tr>
</table>

`NumForm` seems to be **lexical feature** of `NUM`. 99% lemmas (178) occur only with one value of `NumForm`.

### `ADJ`

1 <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `ADJ` and `NumForm` co-occurred: <tt><a href="ro_simonero-feat-Case.html">Case</a></tt><tt>=Nom</tt> (1; 100%), <tt><a href="ro_simonero-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (1; 100%), <tt><a href="ro_simonero-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="ro_simonero-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (1; 100%), <tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1; 100%).

`ADJ` tokens may have the following values of `NumForm`:

* `Word` (1; 100% of non-empty `NumForm`): <em>primul</em>

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<tt><a href="ro_simonero-dep-conj.html">conj</a></tt>]--> NUM</tt> (26; 100%),
<tt>NUM --[<tt><a href="ro_simonero-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (12; 92%),
<tt>NUM --[<tt><a href="ro_simonero-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (2; 100%).

