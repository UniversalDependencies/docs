---
layout: base
title:  'Statistics of PronType in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Features: `PronType`

This feature is universal.
It occurs with 7 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`.

75630 tokens (19%) have a non-empty value of `PronType`.
167 types (0%) occur at least once with a non-empty value of `PronType`.
38 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (60117; 15% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (15512; 4% instances), <tt><a href="fr_gsd-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).

### `DET`

60117 <tt><a href="fr_gsd-pos-DET.html">DET</a></tt> tokens (97% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt> (46480; 77%), <tt><a href="fr_gsd-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (43259; 72%), <tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (31663; 53%).

`DET` tokens may have the following values of `PronType`:

* `Art` (53416; 89% of non-empty `PronType`): <em>le, la, les, l', un, une, des, de, d', du</em>
* `Dem` (2226; 4% of non-empty `PronType`): <em>cette, ce, ces, cet</em>
* `Neg` (108; 0% of non-empty `PronType`): <em>aucune, aucun, aucunes</em>
* `Prs` (4367; 7% of non-empty `PronType`): <em>son, sa, ses, leur, leurs, notre, mon, nos, ma, votre</em>
* `EMPTY` (1611): <em>plusieurs, tous, quelques, chaque, tout, toutes, toute, du, certains, the</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (10) occur only with one value of `PronType`.

### `PRON`

15512 <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> tokens (86% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=3</tt> (10025; 65%), <tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (9019; 58%), <tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt> (8184; 53%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (1611; 10% of non-empty `PronType`): <em>c', ce, cela, celle, celui, ceux, celui-ci, celles, ça, celle-ci</em>
* `Ind` (3; 0% of non-empty `PronType`): <em>quiconque</em>
* `Int` (1; 0% of non-empty `PronType`): <em>Que</em>
* `Neg` (13; 0% of non-empty `PronType`): <em>personne, aucun</em>
* `Prs` (10438; 67% of non-empty `PronType`): <em>il, se, s', elle, ils, lui, nous, je, le, vous</em>
* `Rel` (3446; 22% of non-empty `PronType`): <em>qui, dont, où, qu', que, lequel, laquelle, lesquels, lesquelles, ou</em>
* `EMPTY` (2514): <em>on, en, y, un, une, tout, qui, rien, eux, autres</em>

<table>
  <tr><th>Paradigm <i>que</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>qu', que</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>que, qu'</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>qu'</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>que</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>Que</em></td><td></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 97% lemmas (30) occur only with one value of `PronType`.

### `SCONJ`

1 <tt><a href="fr_gsd-pos-SCONJ.html">SCONJ</a></tt> tokens (0% of all `SCONJ` tokens) have a non-empty value of `PronType`.

`SCONJ` tokens may have the following values of `PronType`:

* `Rel` (1; 100% of non-empty `PronType`): <em>qu'</em>
* `EMPTY` (3123): <em>que, qu', si, puis, quand, soit, lorsque, s', comme, lorsqu'</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="fr_gsd-dep-conj.html">conj</a></tt>]--> PRON</tt> (23; 85%),
<tt>PRON --[<tt><a href="fr_gsd-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (2; 100%).

