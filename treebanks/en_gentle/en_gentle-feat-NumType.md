---
layout: base
title:  'Statistics of NumType in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Frac`, `Mult`, `Ord`.

457 tokens (3%) have a non-empty value of `NumType`.
161 types (4%) occur at least once with a non-empty value of `NumType`.
156 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="en_gentle-pos-NUM.html">NUM</a></tt> (386; 2% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (60; 0% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt> (10; 0% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).

### `NUM`

386 <tt><a href="en_gentle-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="en_gentle-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (294; 76%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (371; 96% of non-empty `NumType`): <em>one, 1, 5, 2, two, 4, 3, X, 10, three</em>
* `Frac` (15; 4% of non-empty `NumType`): <em>1.2, 1.5, 112.7, 14.2, 26.5, 3.5, 3.75, 36.6, 4.0, 4.6</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (139) occur only with one value of `NumType`.

### `ADJ`

60 <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> tokens (5% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="en_gentle-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (60; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (60; 100% of non-empty `NumType`): <em>first, third, second, fifth, sixth, 11th, 14th, 1st, 24th, 25th</em>
* `EMPTY` (1180): <em>next, other, old, open, more, straight, chronic, right, transitive, final</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (14) occur only with one value of `NumType`.

### `ADV`

10 <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt> tokens (1% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="en_gentle-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (10; 100%).

`ADV` tokens may have the following values of `NumType`:

* `Frac` (1; 10% of non-empty `NumType`): <em>half</em>
* `Mult` (5; 50% of non-empty `NumType`): <em>twice, once</em>
* `Ord` (4; 40% of non-empty `NumType`): <em>first</em>
* `EMPTY` (719): <em>then, just, so, here, also, thus, well, how, where, now</em>

### `NOUN`

1 <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NOUN` and `NumType` co-occurred: <tt><a href="en_gentle-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1; 100%).

`NOUN` tokens may have the following values of `NumType`:

* `Frac` (1; 100% of non-empty `NumType`): <em>half</em>
* `EMPTY` (3782): <em>x, week, T, project, S, school, y, mg, time, party</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="en_gentle-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (21; 100%),
<tt>NUM --[<tt><a href="en_gentle-dep-conj.html">conj</a></tt>]--> NUM</tt> (8; 73%),
<tt>ADJ --[<tt><a href="en_gentle-dep-obl.html">obl</a></tt>]--> ADJ</tt> (5; 100%),
<tt>NUM --[<tt><a href="en_gentle-dep-compound.html">compound</a></tt>]--> NUM</tt> (4; 100%),
<tt>NUM --[<tt><a href="en_gentle-dep-dep.html">dep</a></tt>]--> NUM</tt> (3; 100%),
<tt>NUM --[<tt><a href="en_gentle-dep-nmod-unmarked.html">nmod:unmarked</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="en_gentle-dep-flat.html">flat</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="en_gentle-dep-obl.html">obl</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="en_gentle-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (1; 100%).

