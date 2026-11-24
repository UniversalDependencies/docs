---
layout: base
title:  'Statistics of PronType in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Features: `PronType`

This feature is universal.
It occurs with 8 different values: `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rcp`, `Rel`, `Tot`.

1289 tokens (7%) have a non-empty value of `PronType`.
194 types (3%) occur at least once with a non-empty value of `PronType`.
45 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt> (653; 3% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt> (636; 3% instances).

### `PRON`

653 <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="ru_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (499; 76%), <tt><a href="ru_pud-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (425; 65%), <tt><a href="ru_pud-feat-Case.html">Case</a></tt><tt>=Nom</tt> (383; 59%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (157; 24% of non-empty `PronType`): <em>это, того, то, том, тем, этого, этом, т., этим, этому</em>
* `Ind` (10; 2% of non-empty `PronType`): <em>что-то, кто-то, кого-то, нечто, чем-то</em>
* `Int` (5; 1% of non-empty `PronType`): <em>кто, что</em>
* `Neg` (4; 1% of non-empty `PronType`): <em>никто, ничего, ничто</em>
* `Prs` (423; 65% of non-empty `PronType`): <em>он, они, она, я, мы, его, себя, них, ее, мне</em>
* `Rcp` (2; 0% of non-empty `PronType`): <em>друг, другу</em>
* `Rel` (37; 6% of non-empty `PronType`): <em>что, кто, чего, кого, чем</em>
* `Tot` (15; 2% of non-empty `PronType`): <em>все, всего, всех, прочим</em>

<table>
  <tr><th>Paradigm <i>что</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt><tt><a href="ru_pud-feat-Case.html">Case</a></tt><tt>=Acc</tt></tt></td><td></td><td><em>что</em></td></tr>
  <tr><td><tt><tt><a href="ru_pud-feat-Case.html">Case</a></tt><tt>=Gen</tt></tt></td><td></td><td><em>чего</em></td></tr>
  <tr><td><tt><tt><a href="ru_pud-feat-Case.html">Case</a></tt><tt>=Loc</tt></tt></td><td></td><td><em>чем</em></td></tr>
  <tr><td><tt><tt><a href="ru_pud-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td><em>что</em></td><td><em>что</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 92% lemmas (23) occur only with one value of `PronType`.

### `DET`

636 <tt><a href="ru_pud-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="ru_pud-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (561; 88%), <tt><a href="ru_pud-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (405; 64%), <tt><a href="ru_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (349; 55%).

`DET` tokens may have the following values of `PronType`:

* `Dem` (181; 28% of non-empty `PronType`): <em>этот, это, такие, этой, этого, то, эти, таких, этих, том</em>
* `Ind` (22; 3% of non-empty `PronType`): <em>некоторые, какое-либо, некоторой, некоторых, каких-либо, какого-либо, некотором, некоторыми, одним, одной</em>
* `Int` (1; 0% of non-empty `PronType`): <em>Каковы</em>
* `Neg` (6; 1% of non-empty `PronType`): <em>никаких, никакого, Никаким, каких</em>
* `Prs` (229; 36% of non-empty `PronType`): <em>его, их, ее, своей, н., свои, свою, своих, своего, своем</em>
* `Rel` (145; 23% of non-empty `PronType`): <em>которые, который, которая, которое, которых, которой, котором, которую, которыми, которого</em>
* `Tot` (52; 8% of non-empty `PronType`): <em>всех, все, всему, каждый, всей, всего, всю, каждого, каждой, каждая</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (22) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="ru_pud-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (3; 75%),
<tt>PRON --[<tt><a href="ru_pud-dep-fixed.html">fixed</a></tt>]--> PRON</tt> (1; 100%).

