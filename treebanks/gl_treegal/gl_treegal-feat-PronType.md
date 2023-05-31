---
layout: base
title:  'Statistics of PronType in UD_Galician-TreeGal'
udver: '2'
---

## Treebank Statistics: UD_Galician-TreeGal: Features: `PronType`

This feature is universal.
It occurs with 6 different values: `Art`, `Dem`, `Ind`, `Int`, `Prs`, `Rel`.

5627 tokens (22%) have a non-empty value of `PronType`.
165 types (3%) occur at least once with a non-empty value of `PronType`.
55 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="gl_treegal-pos-DET.html">DET</a></tt> (4118; 16% instances), <tt><a href="gl_treegal-pos-PRON.html">PRON</a></tt> (1372; 5% instances), <tt><a href="gl_treegal-pos-ADV.html">ADV</a></tt> (137; 1% instances).

### `DET`

4118 <tt><a href="gl_treegal-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="gl_treegal-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3181; 77%), <tt><a href="gl_treegal-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (2988; 73%), <tt><a href="gl_treegal-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (2175; 53%).

`DET` tokens may have the following values of `PronType`:

* `Art` (3459; 84% of non-empty `PronType`): <em>o, a, os, as, un, unha, lo, la, los, uns</em>
* `Dem` (156; 4% of non-empty `PronType`): <em>esta, este, ese, esa, estes, estas, aqueles, esas, eses, aquel</em>
* `Ind` (264; 6% of non-empty `PronType`): <em>todo, todos, mesmo, outra, outro, outros, outras, toda, cada, calquera</em>
* `Int` (6; 0% of non-empty `PronType`): <em>que</em>
* `Prs` (230; 6% of non-empty `PronType`): <em>súa, seu, seus, nosa, súas, noso, meu, miña, nosos, meus</em>
* `Rel` (3; 0% of non-empty `PronType`): <em>cantas, cuxa, cuxas</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (34) occur only with one value of `PronType`.

### `PRON`

1372 <tt><a href="gl_treegal-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="gl_treegal-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (1117; 81%), <tt><a href="gl_treegal-feat-Clitic.html">Clitic</a></tt><tt>=EMPTY</tt> (901; 66%), <tt><a href="gl_treegal-feat-Number.html">Number</a></tt><tt>=Sing</tt> (774; 56%), <tt><a href="gl_treegal-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (737; 54%).

`PRON` tokens may have the following values of `PronType`:

* `Art` (103; 8% of non-empty `PronType`): <em>o, a, os, as</em>
* `Dem` (58; 4% of non-empty `PronType`): <em>iso, isto, este, estes, esta, aqueles, Ese, aquel, aquela, esa</em>
* `Ind` (153; 11% of non-empty `PronType`): <em>algo, todo, un, nada, algúns, unha, outros, outro, alguén, mesmo</em>
* `Int` (25; 2% of non-empty `PronType`): <em>que, Cal, Quen, canto, Cales, Cantos</em>
* `Prs` (536; 39% of non-empty `PronType`): <em>se, lle, nos, o, me, lo, lles, a, elas, nós</em>
* `Rel` (497; 36% of non-empty `PronType`): <em>que, quen, cales, cantos</em>

<table>
  <tr><th>Paradigm <i>canto</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt><tt><a href="gl_treegal-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>canto</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="gl_treegal-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>Cantos</em></td><td><em>cantos</em></td><td><em>cantos</em></td></tr>
</table>

### `ADV`

137 <tt><a href="gl_treegal-pos-ADV.html">ADV</a></tt> tokens (12% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="gl_treegal-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (137; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Int` (11; 8% of non-empty `PronType`): <em>como, cómo, onde</em>
* `Rel` (126; 92% of non-empty `PronType`): <em>como, cando, onde</em>
* `EMPTY` (1051): <em>non, máis, tamén, xa, así, aínda, agora, moi, só, despois</em>

<table>
  <tr><th>Paradigm <i>como</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>como, cómo</em></td><td><em>como</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="gl_treegal-dep-conj.html">conj</a></tt>]--> PRON</tt> (5; 71%),
<tt>PRON --[<tt><a href="gl_treegal-dep-conj.html">conj</a></tt>]--> ADV</tt> (1; 100%),
<tt>PRON --[<tt><a href="gl_treegal-dep-fixed.html">fixed</a></tt>]--> PRON</tt> (1; 100%).

