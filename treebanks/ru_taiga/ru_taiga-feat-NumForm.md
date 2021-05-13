---
layout: base
title:  'Statistics of NumForm in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Features: `NumForm`

This feature is language-specific.
It occurs with 4 different values: `Combi`, `Digit`, `Roman`, `Word`.

3441 tokens (2%) have a non-empty value of `NumForm`.
671 types (2%) occur at least once with a non-empty value of `NumForm`.
521 lemmas (3%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (2724; 1% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (717; 0% instances).

### `NUM`

2724 <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="ru_taiga-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (2366; 87%), <tt><a href="ru_taiga-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (2210; 81%), <tt><a href="ru_taiga-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (1874; 69%).

`NUM` tokens may have the following values of `NumForm`:

* `Combi` (18; 1% of non-empty `NumForm`): <em>2-х, 3-х, 3х, 11-ти, 12-ти, 13-ти, 18-ти, 20-ти, 2х, 30-ти</em>
* `Digit` (1873; 69% of non-empty `NumForm`): <em>2, 3, 1, 5, 4, 10, 7, 30, 6, 20</em>
* `Roman` (1; 0% of non-empty `NumForm`): <em>I</em>
* `Word` (832; 31% of non-empty `NumForm`): <em>несколько, два, один, сколько, три, две, двух, одной, столько, одна</em>

<table>
  <tr><th>Paradigm <i>2</i></th><th><tt>Combi</tt></th><th><tt>Digit</tt></th></tr>
  <tr><td><tt><tt><a href="ru_taiga-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="ru_taiga-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ru_taiga-feat-NumType.html">NumType</a></tt><tt>=Card</tt></tt></td><td><em>2-х</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ru_taiga-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="ru_taiga-feat-NumType.html">NumType</a></tt><tt>=Card</tt></tt></td><td><em>2-х, 2х</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ru_taiga-feat-NumType.html">NumType</a></tt><tt>=Card</tt></tt></td><td></td><td><em>2</em></td></tr>
  <tr><td><tt><tt><a href="ru_taiga-feat-NumType.html">NumType</a></tt><tt>=Sets</tt></tt></td><td></td><td><em>2</em></td></tr>
</table>

`NumForm` seems to be **lexical feature** of `NUM`. 98% lemmas (367) occur only with one value of `NumForm`.

### `ADJ`

717 <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> tokens (4% of all `ADJ` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `ADJ` and `NumForm` co-occurred: <tt><a href="ru_taiga-feat-Variant.html">Variant</a></tt><tt>=EMPTY</tt> (717; 100%), <tt><a href="ru_taiga-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (431; 60%), <tt><a href="ru_taiga-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (363; 51%).

`ADJ` tokens may have the following values of `NumForm`:

* `Combi` (73; 10% of non-empty `NumForm`): <em>90-е, 90-х, 1997-м, 1й, 2й, 70-х, 80-х, 1-го, 1-ом, 1-х</em>
* `Digit` (346; 48% of non-empty `NumForm`): <em>2, 1, 3, 2020, 12, 2013, 2015, 2017, 18, 2012</em>
* `Roman` (8; 1% of non-empty `NumForm`): <em>II, IV, V, VI, XIV, XVI, XX</em>
* `Word` (290; 40% of non-empty `NumForm`): <em>первый, второй, первого, первые, первых, первая, вторая, второго, первую, втором</em>

`NumForm` seems to be **lexical feature** of `ADJ`. 100% lemmas (189) occur only with one value of `NumForm`.

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<tt><a href="ru_taiga-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (157; 99%),
<tt>NUM --[<tt><a href="ru_taiga-dep-conj.html">conj</a></tt>]--> NUM</tt> (65; 100%),
<tt>ADJ --[<tt><a href="ru_taiga-dep-nmod.html">nmod</a></tt>]--> ADJ</tt> (24; 96%),
<tt>ADJ --[<tt><a href="ru_taiga-dep-conj.html">conj</a></tt>]--> ADJ</tt> (9; 75%),
<tt>NUM --[<tt><a href="ru_taiga-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (9; 90%),
<tt>NUM --[<tt><a href="ru_taiga-dep-list.html">list</a></tt>]--> NUM</tt> (7; 100%),
<tt>ADJ --[<tt><a href="ru_taiga-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (3; 75%),
<tt>NUM --[<tt><a href="ru_taiga-dep-nummod-gov.html">nummod:gov</a></tt>]--> NUM</tt> (3; 100%),
<tt>NUM --[<tt><a href="ru_taiga-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (3; 100%),
<tt>NUM --[<tt><a href="ru_taiga-dep-compound.html">compound</a></tt>]--> NUM</tt> (2; 100%).

