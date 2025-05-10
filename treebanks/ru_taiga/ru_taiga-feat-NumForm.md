---
layout: base
title:  'Statistics of NumForm in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Features: `NumForm`

This feature is language-specific.
It occurs with 5 different values: `Combi`, `Cyril`, `Digit`, `Roman`, `Word`.

22560 tokens (1%) have a non-empty value of `NumForm`.
1740 types (1%) occur at least once with a non-empty value of `NumForm`.
1305 lemmas (2%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (12849; 1% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (9711; 1% instances).

### `NUM`

12849 <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="ru_taiga-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (12069; 94%), <tt><a href="ru_taiga-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (10948; 85%), <tt><a href="ru_taiga-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (8705; 68%).

`NUM` tokens may have the following values of `NumForm`:

* `Combi` (23; 0% of non-empty `NumForm`): <em>2-х, 12-ти, 3-х, 3х, 4-х, 11-ти, 13-ти, 14-ти, 17-ти, 18-ти</em>
* `Cyril` (4; 0% of non-empty `NumForm`): <em>a҃, в҃, г҃, д҃</em>
* `Digit` (3547; 28% of non-empty `NumForm`): <em>2, 1, 3, 5, 4, 10, 6, 20, 7, 30</em>
* `Roman` (3; 0% of non-empty `NumForm`): <em>I, V</em>
* `Word` (9272; 72% of non-empty `NumForm`): <em>два, много, несколько, три, один, двух, две, одной, сколько, одного</em>

<table>
  <tr><th>Paradigm <i>2</i></th><th><tt>Combi</tt></th><th><tt>Digit</tt></th></tr>
  <tr><td><tt><tt><a href="ru_taiga-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="ru_taiga-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ru_taiga-feat-NumType.html">NumType</a></tt><tt>=Card</tt></tt></td><td><em>2-х</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ru_taiga-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="ru_taiga-feat-NumType.html">NumType</a></tt><tt>=Card</tt></tt></td><td><em>2-х, 2х</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ru_taiga-feat-NumType.html">NumType</a></tt><tt>=Card</tt></tt></td><td></td><td><em>2</em></td></tr>
  <tr><td><tt><tt><a href="ru_taiga-feat-NumType.html">NumType</a></tt><tt>=Sets</tt></tt></td><td></td><td><em>2</em></td></tr>
</table>

`NumForm` seems to be **lexical feature** of `NUM`. 98% lemmas (531) occur only with one value of `NumForm`.

### `ADJ`

9711 <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> tokens (6% of all `ADJ` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `ADJ` and `NumForm` co-occurred: <tt><a href="ru_taiga-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (9711; 100%), <tt><a href="ru_taiga-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (6709; 69%), <tt><a href="ru_taiga-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (5839; 60%), <tt><a href="ru_taiga-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (5839; 60%).

`ADJ` tokens may have the following values of `NumForm`:

* `Combi` (567; 6% of non-empty `NumForm`): <em>20-х, 60-х, 30-х, 30-е, 50-х, 1-го, 40-х, 2-й, 90-х, 20-е</em>
* `Digit` (3099; 32% of non-empty `NumForm`): <em>1905, 1918, 2, 1917, 1812, 1907, 1, 1880, 1920, 3</em>
* `Roman` (2738; 28% of non-empty `NumForm`): <em>XIX, XVIII, XX, XVII, XVI, XV, I, XIV, II, XII</em>
* `Word` (3307; 34% of non-empty `NumForm`): <em>первый, второй, первой, первые, первая, первого, первых, первую, первое, первым</em>

<table>
  <tr><th>Paradigm <i>I</i></th><th><tt>Roman</tt></th><th><tt>Word</tt></th></tr>
  <tr><td><tt><tt><a href="ru_taiga-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="ru_taiga-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ru_taiga-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>I</em></td></tr>
  <tr><td><tt></tt></td><td><em>I</em></td><td><em>I</em></td></tr>
</table>

`NumForm` seems to be **lexical feature** of `ADJ`. 99% lemmas (838) occur only with one value of `NumForm`.

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>ADJ --[<tt><a href="ru_taiga-dep-nmod.html">nmod</a></tt>]--> ADJ</tt> (805; 92%),
<tt>NUM --[<tt><a href="ru_taiga-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (405; 100%),
<tt>NUM --[<tt><a href="ru_taiga-dep-conj.html">conj</a></tt>]--> NUM</tt> (302; 100%),
<tt>ADJ --[<tt><a href="ru_taiga-dep-conj.html">conj</a></tt>]--> ADJ</tt> (162; 72%),
<tt>NUM --[<tt><a href="ru_taiga-dep-compound.html">compound</a></tt>]--> NUM</tt> (133; 100%),
<tt>ADJ --[<tt><a href="ru_taiga-dep-compound.html">compound</a></tt>]--> NUM</tt> (36; 62%),
<tt>NUM --[<tt><a href="ru_taiga-dep-list.html">list</a></tt>]--> NUM</tt> (21; 84%),
<tt>NUM --[<tt><a href="ru_taiga-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (16; 84%),
<tt>NUM --[<tt><a href="ru_taiga-dep-nummod-gov.html">nummod:gov</a></tt>]--> NUM</tt> (13; 100%),
<tt>ADJ --[<tt><a href="ru_taiga-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (6; 86%).

