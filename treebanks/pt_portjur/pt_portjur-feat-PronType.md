---
layout: base
title:  'Statistics of PronType in UD_Portuguese-PortJur'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PortJur: Features: `PronType`

This feature is universal.
It occurs with 6 different values: `Art`, `Dem`, `Ind`, `Int`, `Prs`, `Rel`.

18316 tokens (18%) have a non-empty value of `PronType`.
125 types (1%) occur at least once with a non-empty value of `PronType`.
46 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: <tt><a href="pt_portjur-pos-DET.html">DET</a></tt> (15686; 15% instances), <tt><a href="pt_portjur-pos-PRON.html">PRON</a></tt> (2630; 3% instances).

### `DET`

15686 <tt><a href="pt_portjur-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="pt_portjur-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (13733; 88%), <tt><a href="pt_portjur-feat-Number.html">Number</a></tt><tt>=Sing</tt> (12545; 80%).

`DET` tokens may have the following values of `PronType`:

* `Art` (13869; 88% of non-empty `PronType`): <em>a, o, os, as, uma, um</em>
* `Dem` (596; 4% of non-empty `PronType`): <em>esta, este, essa, esse, mesma, mesmo, tal, próprio, esses, tais</em>
* `Ind` (541; 3% of non-empty `PronType`): <em>qualquer, outras, demais, cada, outros, todos, outro, outra, quaisquer, toda</em>
* `Int` (2; 0% of non-empty `PronType`): <em>qual</em>
* `Prs` (638; 4% of non-empty `PronType`): <em>sua, seu, seus, suas, meu, nossa, nossos</em>
* `Rel` (40; 0% of non-empty `PronType`): <em>cuja, cujo, cujos, cujas</em>

<table>
  <tr><th>Paradigm <i>tal</i></th><th><tt>Dem</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt><tt><a href="pt_portjur-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>tal</em></td><td></td></tr>
  <tr><td><tt><tt><a href="pt_portjur-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>tais</em></td><td><em>Tais</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 96% lemmas (26) occur only with one value of `PronType`.

### `PRON`

2630 <tt><a href="pt_portjur-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="pt_portjur-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1808; 69%), <tt><a href="pt_portjur-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (1616; 61%), <tt><a href="pt_portjur-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (1575; 60%), <tt><a href="pt_portjur-feat-Person.html">Person</a></tt><tt>=3</tt> (1383; 53%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (510; 19% of non-empty `PronType`): <em>o, a, os, as, este, isso, aquele, aqueles, esta, aquela</em>
* `Ind` (155; 6% of non-empty `PronType`): <em>quem, outros, qualquer, outras, todos, tudo, ambos, outrem, quaisquer, uma</em>
* `Int` (3; 0% of non-empty `PronType`): <em>quais, que</em>
* `Prs` (1016; 39% of non-empty `PronType`): <em>se, lhe, ele, ela, o, la, a, eles, lo, lhes</em>
* `Rel` (946; 36% of non-empty `PronType`): <em>que, qual, quais, quem</em>

<table>
  <tr><th>Paradigm <i>que</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>que</em></td><td><em>que</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="pt_portjur-dep-conj.html">conj</a></tt>]--> PRON</tt> (14; 93%),
<tt>PRON --[<tt><a href="pt_portjur-dep-mark.html">mark</a></tt>]--> PRON</tt> (2; 100%).

