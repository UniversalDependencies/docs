---
layout: base
title:  'Statistics of PronType in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Features: `PronType`

This feature is universal but the values `Exc` are language-specific.
It occurs with 8 different values: `Art`, `Dem`, `Exc`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`.

79361 tokens (20%) have a non-empty value of `PronType`.
262 types (1%) occur at least once with a non-empty value of `PronType`.
56 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 4 part-of-speech tags: <tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (61114; 15% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (18183; 5% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (50; 0% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (14; 0% instances).

### `DET`

61114 <tt><a href="fr_gsd-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt> (46918; 77%), <tt><a href="fr_gsd-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (43346; 71%).

`DET` tokens may have the following values of `PronType`:

* `Art` (53496; 88% of non-empty `PronType`): <em>le, la, les, l', un, une, des, de, d', du</em>
* `Dem` (2214; 4% of non-empty `PronType`): <em>cette, ce, ces, cet</em>
* `Exc` (7; 0% of non-empty `PronType`): <em>quelle, quel</em>
* `Ind` (915; 1% of non-empty `PronType`): <em>plusieurs, quelques, chaque, certains, certaines, toute, tout, quelque, toutes, différents</em>
* `Int` (23; 0% of non-empty `PronType`): <em>quel, quelle, quels, Quelles</em>
* `Neg` (111; 0% of non-empty `PronType`): <em>aucune, aucun, Nul, aucunes, nulle</em>
* `Prs` (4348; 7% of non-empty `PronType`): <em>son, sa, ses, leur, leurs, notre, mon, nos, ma, votre</em>
* `EMPTY` (19): <em>de, d', quel, différents, lequel, quelle</em>

<table>
  <tr><th>Paradigm <i>quel</i></th><th><tt>Int</tt></th><th><tt>Exc</tt></th></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>quel</em></td><td><em>quel</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>quels</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>quelle</em></td><td><em>quelle</em></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>Quelles</em></td><td></td></tr>
</table>

### `PRON`

18183 <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="fr_gsd-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (15718; 86%), <tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=3</tt> (13133; 72%), <tt><a href="fr_gsd-feat-Emph.html">Emph</a></tt><tt>=No</tt> (9773; 54%), <tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt> (9224; 51%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (1633; 9% of non-empty `PronType`): <em>c', ce, cela, celle, celui, ceux, celui-ci, celles, ça, celle-ci</em>
* `Ind` (1424; 8% of non-empty `PronType`): <em>on, un, une, tout, autres, l'on, autre, tous, certains, chacun</em>
* `Int` (79; 0% of non-empty `PronType`): <em>où, qui, qu', que, quoi, Laquelle, Lesquelles</em>
* `Neg` (114; 1% of non-empty `PronType`): <em>rien, personne, aucun, nul, aucune</em>
* `Prs` (11354; 62% of non-empty `PronType`): <em>il, se, s', elle, y, ils, lui, nous, je, le</em>
* `Rel` (3579; 20% of non-empty `PronType`): <em>qui, dont, où, qu', que, lequel, laquelle, lesquels, lesquelles, ou</em>
* `EMPTY` (2): <em>nôtre</em>

<table>
  <tr><th>Paradigm <i>quoi</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>quoi</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>quoi</em></td><td><em>quoi</em></td><td><em>quoi</em></td></tr>
</table>

### `ADJ`

50 <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADJ` and `PronType` co-occurred: <tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (46; 92%), <tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt> (36; 72%).

`ADJ` tokens may have the following values of `PronType`:

* `Exc` (1; 2% of non-empty `PronType`): <em>quelle</em>
* `Ind` (44; 88% of non-empty `PronType`): <em>tout, tous, autres, autre, tels, toute, toutes</em>
* `Int` (5; 10% of non-empty `PronType`): <em>quel, Quels</em>
* `EMPTY` (23748): <em>premier, première, français, autres, même, française, tous, dernier, grande, grand</em>

<table>
  <tr><th>Paradigm <i>quel</i></th><th><tt>Int</tt></th><th><tt>Exc</tt></th></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>quel</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>Quels</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_gsd-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="fr_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>quelle</em></td></tr>
</table>

### `ADV`

14 <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> tokens (0% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="fr_gsd-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (14; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Int` (13; 93% of non-empty `PronType`): <em>comment, pourquoi, quand, Combien</em>
* `Rel` (1; 7% of non-empty `PronType`): <em>pourquoi</em>
* `EMPTY` (14145): <em>plus, pas, n', ne, très, aussi, ainsi, alors, bien, également</em>

<table>
  <tr><th>Paradigm <i>pourquoi</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>pourquoi</em></td><td><em>pourquoi</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="fr_gsd-dep-conj.html">conj</a></tt>]--> PRON</tt> (43; 98%),
<tt>PRON --[<tt><a href="fr_gsd-dep-fixed.html">fixed</a></tt>]--> PRON</tt> (19; 95%),
<tt>DET --[<tt><a href="fr_gsd-dep-conj.html">conj</a></tt>]--> DET</tt> (6; 55%),
<tt>DET --[<tt><a href="fr_gsd-dep-reparandum.html">reparandum</a></tt>]--> DET</tt> (2; 67%),
<tt>PRON --[<tt><a href="fr_gsd-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (2; 100%),
<tt>ADV --[<tt><a href="fr_gsd-dep-conj.html">conj</a></tt>]--> ADV</tt> (1; 100%),
<tt>DET --[<tt><a href="fr_gsd-dep-fixed.html">fixed</a></tt>]--> DET</tt> (1; 100%).

