---
layout: base
title:  'Statistics of NumType in UD_Bulgarian-BTB'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian-BTB: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

3630 tokens (2%) have a non-empty value of `NumType`.
726 types (3%) occur at least once with a non-empty value of `NumType`.
559 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="bg_btb-pos-NUM.html">NUM</a></tt> (2105; 1% instances), <tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt> (906; 1% instances), <tt><a href="bg_btb-pos-ADV.html">ADV</a></tt> (619; 0% instances).

### `NUM`

2105 <tt><a href="bg_btb-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="bg_btb-feat-Definite.html">Definite</a></tt><tt>=Ind</tt> (1957; 93%), <tt><a href="bg_btb-feat-Number.html">Number</a></tt><tt>=Plur</tt> (1863; 89%), <tt><a href="bg_btb-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1590; 76%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (2102; 100% of non-empty `NumType`): <em>две, един, два, 2, една, 1, 3, три, 10, двамата</em>
* `Ord` (3; 0% of non-empty `NumType`): <em>02, 08, 2000</em>

<table>
  <tr><th>Paradigm <i>2000</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>2000</em></td></tr>
  <tr><td><tt><tt><a href="bg_btb-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="bg_btb-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>2000</em></td><td></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (415) occur only with one value of `NumType`.

### `ADJ`

906 <tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt> tokens (7% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="bg_btb-feat-Aspect.html">Aspect</a></tt><tt>=EMPTY</tt> (906; 100%), <tt><a href="bg_btb-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (906; 100%), <tt><a href="bg_btb-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (906; 100%), <tt><a href="bg_btb-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (906; 100%), <tt><a href="bg_btb-feat-Number.html">Number</a></tt><tt>=Sing</tt> (847; 93%), <tt><a href="bg_btb-feat-Definite.html">Definite</a></tt><tt>=Ind</tt> (667; 74%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (906; 100% of non-empty `NumType`): <em>2001, 2000, първата, първите, 1, втори, първи, 1998, II, втора</em>
* `EMPTY` (12685): <em>други, народното, българската, нова, другите, нови, европейската, последните, друг, цялата</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (163) occur only with one value of `NumType`.

### `ADV`

619 <tt><a href="bg_btb-pos-ADV.html">ADV</a></tt> tokens (9% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="bg_btb-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (499; 81%), <tt><a href="bg_btb-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (463; 75%).

`ADV` tokens may have the following values of `NumType`:

* `Card` (619; 100% of non-empty `NumType`): <em>много, повече, толкова, малко, повечето, колко, колкото, по-малко, най-много, доколкото</em>
* `EMPTY` (5939): <em>още, вчера, само, вече, когато, защото, обаче, сега, как, така</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="bg_btb-dep-flat.html">flat</a></tt>]--> NUM</tt> (52; 100%),
<tt>NUM --[<tt><a href="bg_btb-dep-conj.html">conj</a></tt>]--> NUM</tt> (40; 100%),
<tt>NUM --[<tt><a href="bg_btb-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (34; 100%),
<tt>ADJ --[<tt><a href="bg_btb-dep-conj.html">conj</a></tt>]--> ADJ</tt> (13; 87%).

