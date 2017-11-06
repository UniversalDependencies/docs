---
layout: base
title:  'Statistics of PronType in UD_French'
udver: '2'
---

## Treebank Statistics: UD_French: Features: `PronType`

This feature is universal.
It occurs with 7 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`.

75647 tokens (19%) have a non-empty value of `PronType`.
168 types (0%) occur at least once with a non-empty value of `PronType`.
39 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="fr-pos-DET.html">DET</a></tt> (60133; 15% instances), <tt><a href="fr-pos-PRON.html">PRON</a></tt> (15512; 4% instances), <tt><a href="fr-pos-NOUN.html">NOUN</a></tt> (2; 0% instances).

### `DET`

60133 <tt><a href="fr-pos-DET.html">DET</a></tt> tokens (97% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="fr-feat-Number.html">Number</a></tt><tt>=Sing</tt> (46508; 77%), <tt><a href="fr-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (43276; 72%), <tt><a href="fr-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (31659; 53%).

`DET` tokens may have the following values of `PronType`:

* `Art` (53432; 89% of non-empty `PronType`): <em>le, la, les, l', un, une, des, de, d', l</em>
* `Dem` (2226; 4% of non-empty `PronType`): <em>cette, ce, ces, cet</em>
* `Neg` (109; 0% of non-empty `PronType`): <em>aucun, aucune, aucunes</em>
* `Prs` (4366; 7% of non-empty `PronType`): <em>son, sa, ses, leur, leurs, notre, mon, nos, ma, votre</em>
* `EMPTY` (1606): <em>plusieurs, tous, quelques, chaque, tout, toutes, toute, du, certains, the</em>

### `PRON`

15512 <tt><a href="fr-pos-PRON.html">PRON</a></tt> tokens (86% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="fr-feat-Person.html">Person</a></tt><tt>=3</tt> (10025; 65%), <tt><a href="fr-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (9020; 58%), <tt><a href="fr-feat-Number.html">Number</a></tt><tt>=Sing</tt> (8184; 53%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (1611; 10% of non-empty `PronType`): <em>c', ce, cela, celle, celui, ceux, celui-ci, celles, ça, celle-ci</em>
* `Ind` (3; 0% of non-empty `PronType`): <em>quiconque</em>
* `Int` (1; 0% of non-empty `PronType`): <em>Que</em>
* `Neg` (12; 0% of non-empty `PronType`): <em>personne</em>
* `Prs` (10438; 67% of non-empty `PronType`): <em>il, se, s', elle, ils, lui, nous, je, le, vous</em>
* `Rel` (3447; 22% of non-empty `PronType`): <em>qui, dont, où, qu', que, lequel, laquelle, lesquels, lesquelles, ou</em>
* `EMPTY` (2517): <em>on, en, y, un, une, tout, qui, rien, eux, autres</em>

<table>
  <tr><th>Paradigm <i>que</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>qu', que</em></td></tr>
  <tr><td><tt><tt><a href="fr-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>que, qu'</em></td></tr>
  <tr><td><tt><tt><a href="fr-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>qu'</em></td></tr>
  <tr><td><tt><tt><a href="fr-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="fr-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>que</em></td></tr>
  <tr><td><tt><tt><a href="fr-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>Que</em></td><td></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 97% lemmas (29) occur only with one value of `PronType`.

### `NOUN`

2 <tt><a href="fr-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `NOUN` and `PronType` co-occurred: <tt><a href="fr-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2; 100%).

`NOUN` tokens may have the following values of `PronType`:

* `Art` (2; 100% of non-empty `PronType`): <em>Fédération, Institut</em>
* `EMPTY` (75176): <em>ans, ville, pays, partie, nom, monde, fois, région, commune, temps</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="fr-dep-conj.html">conj</a></tt>]--> PRON</tt> (23; 85%),
<tt>PRON --[<tt><a href="fr-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (2; 100%).

