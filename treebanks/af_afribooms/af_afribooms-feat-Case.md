---
layout: base
title:  'Statistics of Case in UD_Afrikaans-AfriBooms'
udver: '2'
---

## Treebank Statistics: UD_Afrikaans-AfriBooms: Features: `Case`

This feature is universal.
It occurs with 2 different values: `Acc`, `Nom`.
Some words have combined values of the feature; 1 combinations have been observed: `Acc|Nom`.

4643 tokens (9%) have a non-empty value of `Case`.
1006 types (16%) occur at least once with a non-empty value of `Case`.
791 lemmas (15%) occur at least once with a non-empty value of `Case`.
The feature is used with 2 part-of-speech tags: <tt><a href="af_afribooms-pos-ADJ.html">ADJ</a></tt> (3173; 6% instances), <tt><a href="af_afribooms-pos-PRON.html">PRON</a></tt> (1470; 3% instances).

### `ADJ`

3173 <tt><a href="af_afribooms-pos-ADJ.html">ADJ</a></tt> tokens (100% of all `ADJ` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `ADJ` and `Case` co-occurred: <tt><a href="af_afribooms-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (3059; 96%), <tt><a href="af_afribooms-feat-AdjType.html">AdjType</a></tt><tt>=Attr</tt> (2683; 85%).

`ADJ` tokens may have the following values of `Case`:

* `Nom` (3173; 100% of non-empty `Case`): <em>ander, nasionale, Suid-Afrikaanse, openbare, maatskaplike, voorlopige, nuwe, plaaslike, ekonomiese, groot</em>

`Case` seems to be **lexical feature** of `ADJ`. 100% lemmas (778) occur only with one value of `Case`.

### `PRON`

1470 <tt><a href="af_afribooms-pos-PRON.html">PRON</a></tt> tokens (40% of all `PRON` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PRON` and `Case` co-occurred: <tt><a href="af_afribooms-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (1470; 100%), <tt><a href="af_afribooms-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (1470; 100%), <tt><a href="af_afribooms-feat-Number.html">Number</a></tt><tt>=Sing</tt> (738; 50%).

`PRON` tokens may have the following values of `Case`:

* `Acc` (52; 4% of non-empty `Case`): <em>jou, my, haar, hom</em>
* `Acc,Nom` (732; 50% of non-empty `Case`): <em>ons, hulle, julle</em>
* `Nom` (686; 47% of non-empty `Case`): <em>dit, jy, ek, hy, sy, u</em>
* `EMPTY` (2248): <em>wat, ons, jou, enige, daar, hul, sy, wanneer, almal, waar</em>

`Case` seems to be **lexical feature** of `PRON`. 100% lemmas (13) occur only with one value of `Case`.

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`:
<tt>ADJ --[<tt><a href="af_afribooms-dep-conj.html">conj</a></tt>]--> ADJ</tt> (173; 100%),
<tt>ADJ --[<tt><a href="af_afribooms-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (54; 55%),
<tt>PRON --[<tt><a href="af_afribooms-dep-conj.html">conj</a></tt>]--> PRON</tt> (15; 88%),
<tt>ADJ --[<tt><a href="af_afribooms-dep-dep.html">dep</a></tt>]--> ADJ</tt> (12; 100%),
<tt>ADJ --[<tt><a href="af_afribooms-dep-amod.html">amod</a></tt>]--> ADJ</tt> (6; 100%).

