---
layout: base
title:  'Statistics of NumType in UD_Polish-MPDT'
udver: '2'
---

## Treebank Statistics: UD_Polish-MPDT: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

353 tokens (1%) have a non-empty value of `NumType`.
115 types (1%) occur at least once with a non-empty value of `NumType`.
28 lemmas (0%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> (337; 1% instances), <tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> (16; 0% instances).

### `ADJ`

337 <tt><a href="pl_mpdt-pos-ADJ.html">ADJ</a></tt> tokens (6% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="pl_mpdt-feat-Aspect.html">Aspect</a></tt><tt>=EMPTY</tt> (337; 100%), <tt><a href="pl_mpdt-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (337; 100%), <tt><a href="pl_mpdt-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (337; 100%), <tt><a href="pl_mpdt-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (337; 100%), <tt><a href="pl_mpdt-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (337; 100%), <tt><a href="pl_mpdt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (302; 90%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (337; 100% of non-empty `NumType`): <em>jeden, jednego, jedna, jednym, drugiego, drugą, jednej, pierwszy, druga, drugie</em>
* `EMPTY` (5401): <em>sam, ś, inne, wszytkie, cały, różnych, wielkie, wszytkich, innych, wielki</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (25) occur only with one value of `NumType`.

### `DET`

16 <tt><a href="pl_mpdt-pos-DET.html">DET</a></tt> tokens (1% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="pl_mpdt-feat-Number-psor.html">Number[psor]</a></tt><tt>=EMPTY</tt> (16; 100%), <tt><a href="pl_mpdt-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (16; 100%), <tt><a href="pl_mpdt-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (16; 100%), <tt><a href="pl_mpdt-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (16; 100%), <tt><a href="pl_mpdt-feat-PronType.html">PronType</a></tt><tt>=Dem</tt> (12; 75%), <tt><a href="pl_mpdt-feat-Number.html">Number</a></tt><tt>=Plur</tt> (11; 69%), <tt><a href="pl_mpdt-feat-Case.html">Case</a></tt><tt>=Acc</tt> (10; 63%), <tt><a href="pl_mpdt-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (10; 63%).

`DET` tokens may have the following values of `NumType`:

* `Card` (16; 100% of non-empty `NumType`): <em>tyle, ile, tyleż, tylą, tylu</em>
* `EMPTY` (2751): <em>który, które, ten, tego, tej, tych, tym, te, których, którzy</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>ADJ --[<tt><a href="pl_mpdt-dep-fixed.html">fixed</a></tt>]--> ADJ</tt> (3; 100%),
<tt>ADJ --[<tt><a href="pl_mpdt-dep-nmod.html">nmod</a></tt>]--> ADJ</tt> (3; 75%),
<tt>ADJ --[<tt><a href="pl_mpdt-dep-amod-flat.html">amod:flat</a></tt>]--> ADJ</tt> (2; 100%),
<tt>DET --[<tt><a href="pl_mpdt-dep-obl-cmp.html">obl:cmp</a></tt>]--> DET</tt> (2; 100%).

