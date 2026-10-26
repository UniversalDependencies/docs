---
layout: base
title:  'Statistics of PronType in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Features: `PronType`

This feature is universal.
It occurs with 6 different values: `Art`, `Dem`, `Ind`, `Int`, `Prs`, `Rel`.

6072 tokens (25%) have a non-empty value of `PronType`.
111 types (3%) occur at least once with a non-empty value of `PronType`.
35 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="fr_fqb-pos-DET.html">DET</a></tt> (3832; 16% instances), <tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (1654; 7% instances), <tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (586; 2% instances).

### `DET`

3832 <tt><a href="fr_fqb-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="fr_fqb-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3349; 87%), <tt><a href="fr_fqb-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (2777; 72%).

`DET` tokens may have the following values of `PronType`:

* `Art` (3152; 82% of non-empty `PronType`): <em>le, la, l', les, un, une, des, de, d', du</em>
* `Dem` (7; 0% of non-empty `PronType`): <em>ce, ces, cet, cette</em>
* `Ind` (8; 0% of non-empty `PronType`): <em>chaque, certaines, plusieurs, quelqu', tout</em>
* `Int` (524; 14% of non-empty `PronType`): <em>quelle, quel, quelles, quels</em>
* `Prs` (141; 4% of non-empty `PronType`): <em>mon, mes, sa, ma, son, votre, ses, vos, leur, leurs</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (11) occur only with one value of `PronType`.

### `PRON`

1654 <tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="fr_fqb-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1239; 75%), <tt><a href="fr_fqb-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (980; 59%), <tt><a href="fr_fqb-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (839; 51%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (166; 10% of non-empty `PronType`): <em>-ce, cela, ce, celle, celle-ci, celui, celui-ci, ceux</em>
* `Ind` (90; 5% of non-empty `PronType`): <em>-t-on, -on, un, autre, l'on, quelqu'un, une, on, tout</em>
* `Int` (570; 34% of non-empty `PronType`): <em>qui, Qu', que, quoi, Quels</em>
* `Prs` (735; 44% of non-empty `PronType`): <em>-t-il, se, -il, -je, -t-elle, je, -elle, s', -ils, y</em>
* `Rel` (93; 6% of non-empty `PronType`): <em>qui, que, dont, laquelle, lequel, qu', lesquelles</em>

<table>
  <tr><th>Paradigm <i>qui</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>qui</em></td><td><em>qui</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 91% lemmas (21) occur only with one value of `PronType`.

### `ADV`

586 <tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> tokens (70% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Int` (584; 100% of non-empty `PronType`): <em>où, quand, combien, comment, pourquoi</em>
* `Rel` (2; 0% of non-empty `PronType`): <em>où</em>
* `EMPTY` (255): <em>plus, pas, n', ne, surtout, aussi, lord, près, afin, auprès</em>

<table>
  <tr><th>Paradigm <i>où</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>où</em></td><td><em>où</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>ADV --[<tt><a href="fr_fqb-dep-conj.html">conj</a></tt>]--> ADV</tt> (1; 100%),
<tt>PRON --[<tt><a href="fr_fqb-dep-fixed.html">fixed</a></tt>]--> PRON</tt> (1; 100%).

