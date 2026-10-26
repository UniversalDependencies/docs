---
layout: base
title:  'Statistics of PronType in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Features: `PronType`

This feature is universal.
It occurs with 7 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`.

5002 tokens (20%) have a non-empty value of `PronType`.
126 types (2%) occur at least once with a non-empty value of `PronType`.
38 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="fr_pud-pos-DET.html">DET</a></tt> (3887; 16% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (1089; 4% instances), <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt> (26; 0% instances).

### `DET`

3887 <tt><a href="fr_pud-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="fr_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2866; 74%), <tt><a href="fr_pud-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (2785; 72%), <tt><a href="fr_pud-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (2022; 52%).

`DET` tokens may have the following values of `PronType`:

* `Art` (3456; 89% of non-empty `PronType`): <em>le, la, les, l', un, une, des, de, d', du</em>
* `Dem` (123; 3% of non-empty `PronType`): <em>cette, ce, ces, cet</em>
* `Ind` (22; 1% of non-empty `PronType`): <em>quelques, toute, quelque, tout, Divers, tous</em>
* `Int` (3; 0% of non-empty `PronType`): <em>quelle, quel</em>
* `Neg` (8; 0% of non-empty `PronType`): <em>aucun, aucune</em>
* `Prs` (275; 7% of non-empty `PronType`): <em>son, sa, ses, leur, leurs, notre, nos, mon, votre, ma</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (12) occur only with one value of `PronType`.

### `PRON`

1089 <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="fr_pud-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (968; 89%), <tt><a href="fr_pud-feat-Person.html">Person</a></tt><tt>=3</tt> (626; 57%), <tt><a href="fr_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (608; 56%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (118; 11% of non-empty `PronType`): <em>ce, c', cela, ça, ceci, ceux, -ce, ca, celle, celles</em>
* `Ind` (57; 5% of non-empty `PronType`): <em>on, un, quelqu'un, une, -t-on, certaines</em>
* `Int` (7; 1% of non-empty `PronType`): <em>qui, quoi, que</em>
* `Neg` (8; 1% of non-empty `PronType`): <em>rien, aucun, personne</em>
* `Prs` (691; 63% of non-empty `PronType`): <em>il, se, s', elle, ils, y, je, nous, lui, l'</em>
* `Rel` (208; 19% of non-empty `PronType`): <em>qui, dont, que, qu', laquelle, lequel, lesquelles</em>

<table>
  <tr><th>Paradigm <i>qui</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>qui</em></td><td><em>qui</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 93% lemmas (26) occur only with one value of `PronType`.

### `ADV`

26 <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt> tokens (3% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="fr_pud-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (26; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Int` (1; 4% of non-empty `PronType`): <em>où</em>
* `Rel` (25; 96% of non-empty `PronType`): <em>où</em>
* `EMPTY` (1012): <em>plus, pas, n', ne, également, bien, très, aussi, encore, ainsi</em>

<table>
  <tr><th>Paradigm <i>où</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>où</em></td><td><em>où</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="fr_pud-dep-fixed.html">fixed</a></tt>]--> PRON</tt> (2; 100%),
<tt>PRON --[<tt><a href="fr_pud-dep-conj.html">conj</a></tt>]--> PRON</tt> (1; 100%).

