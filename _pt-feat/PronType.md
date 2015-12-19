---
layout: feature
title: 'PronType'
shortdef: 'pronominal type'
---

This document is a placeholder for the language-specific documentation
for `PronType`.

--------------------------------------------------------------------------------

## Treebank Statistics

This feature is universal.
It occurs with 9 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rcp`, `Rel`, `Tot`.
Some words have combined values of the feature; 1 combinations have been observed: `Ind|Neg|Tot`.

41927 tokens (20%) have a non-empty value of `PronType`.
319 types (1%) occur at least once with a non-empty value of `PronType`.
141 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 5 part-of-speech tags: [pt-pos/DET]() (32543; 15% tokens), [pt-pos/PRON]() (6890; 3% tokens), [pt-pos/ADV]() (2352; 1% tokens), [pt-pos/ADP]() (141; 0% tokens), [pt-pos/SCONJ]() (1; 0% tokens).

### `DET`

32543 [pt-pos/DET]() tokens (98% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Definite.html">Definite</a>=Def</tt> (25979; 80%), <tt><a href="Number.html">Number</a>=Sing</tt> (25737; 79%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (17469; 54%).

`DET` tokens may have the following values of `PronType`:

* `Art` (29063; 89% of non-empty `PronType`): _o, a, os, as, um, uma_
* `Dem` (980; 3% of non-empty `PronType`): _este, esta, esse, essa, estes, estas, aquela, essas, esses, aquele_
* `Ind,Neg,Tot` (1141; 4% of non-empty `PronType`): _qualquer, mais, cada, alguns, algumas, todos, todos_os, muitos, vários, todo_
* `Int` (24; 0% of non-empty `PronType`): _que, Quantos, qual, quanto, Quantas, quais_
* `Prs` (1279; 4% of non-empty `PronType`): _sua, seu, seus, suas, meu, nosso, nossa, minha, nossos, nossas_
* `Rel` (56; 0% of non-empty `PronType`): _cuja, cujo, cujas, cujos, qual, Quantos, quais_
* `EMPTY` (677): _outros, o, outras, mesmo, outro, mesma, a, outra, próprio, os_

<table>
  <tr><th>Paradigm <i>o</i></th><th><tt>Ind,Neg,Tot</tt></th><th><tt>Art</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def</tt></td><td></td><td><i>a</i></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><i>o, a, Os</i></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="Typo.html">Typo</a>=Yes</tt></td><td></td><td><i>os</i></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><i>os, o</i></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><i>a, as</i></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="Typo.html">Typo</a>=Yes</tt></td><td></td><td><i>a</i></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><i>as</i></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><i>a, o</i></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><i>as</i></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><i>o</i></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><i>o</i></td><td><i>o</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><i>os</i></td><td><i>os</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><i>a</i></td><td><i>a</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="NumType.html">NumType</a>=Card</tt></td><td><i>a</i></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><i>as</i></td><td><i>as</i></td></tr>
</table>

### `PRON`

6890 [pt-pos/PRON]() tokens (97% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (6108; 89%), <tt><a href="Number.html">Number</a>=Sing</tt> (4748; 69%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (4319; 63%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (4164; 60%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (4153; 60%).

`PRON` tokens may have the following values of `PronType`:

* `Art` (244; 4% of non-empty `PronType`): _o, os, a, as, um, uma_
* `Dem` (551; 8% of non-empty `PronType`): _isso, o, isto, a, este, os, esta, aquilo, as, essa_
* `Ind` (133; 2% of non-empty `PronType`): _ninguém, que, alguém, cada_um, toda_a_gente, o_que, todo, todo_o_mundo, cada_qual, Quem_
* `Ind,Neg,Tot` (434; 6% of non-empty `PronType`): _tudo, nada, todos, mais, pouco, muito, algo, alguns, muitos, ambos_
* `Int` (108; 2% of non-empty `PronType`): _o_que, quem, qual, quais, quanto, que, quando, quantos, quê_
* `Prs` (2752; 40% of non-empty `PronType`): _se, ele, lhe, o, eles, eu, ela, me, nos, a_
* `Rcp` (4; 0% of non-empty `PronType`): _se_
* `Rel` (2664; 39% of non-empty `PronType`): _que, o_que, quem, o_qual, os_quais, a_qual, tudo_o_que, as_quais, qual, quais_
* `EMPTY` (216): _o, outros, mesmo, outro, os, a, outra, outras, as, mesma_

<table>
  <tr><th>Paradigm <i>que</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt>_</tt></td><td><i>Que</i></td><td><i>que</i></td><td><i>que</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><i>que</i></td><td><i>que</i></td><td><i>que</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td><i>que</i></td><td><i>que</i></td><td><i>que</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td></td><td><i>que</i></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><i>que</i></td><td><i>que</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="Typo.html">Typo</a>=Yes</tt></td><td></td><td><i>que</i></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td><i>que</i></td><td><i>que</i></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td></td><td><i>que</i></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td></td><td><i>que</i></td><td></td></tr>
</table>

### `ADV`

2352 [pt-pos/ADV]() tokens (25% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="NumType.html">NumType</a>=Card</tt> (1307; 56%).

`ADV` tokens may have the following values of `PronType`:

* `Dem` (42; 2% of non-empty `PronType`): _tão, tal_
* `Ind,Neg,Tot` (1296; 55% of non-empty `PronType`): _mais, muito, bem, quase, mesmo, mais_de, pouco, menos, pelo_menos, bastante_
* `Int` (95; 4% of non-empty `PronType`): _como, onde, porque, por_que, porquê, quando, que, para_onde, quanto, até_que_ponto_
* `Rel` (919; 39% of non-empty `PronType`): _como, quando, onde, enquanto, tal_como, apenas, conforme, à_medida_que, bem_como, assim_como_
* `EMPTY` (7137): _não, também, já, ontem, ainda, só, depois, agora, hoje, antes_

<table>
  <tr><th>Paradigm <i>quanto</i></th><th><tt>Ind,Neg,Tot</tt></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><i>quanto</i></td><td></td></tr>
  <tr><td><tt><a href="NumType.html">NumType</a>=Card</tt></td><td><i>quanto</i></td><td><i>quanto</i></td><td><i>quanto</i></td></tr>
</table>

`PronType` seems to be **lexical feature** of `ADV`. 91% lemmas (63) occur only with one value of `PronType`.

### `ADP`

141 [pt-pos/ADP]() tokens (0% of all `ADP` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADP` and `PronType` co-occurred: <tt><a href="AdpType.html">AdpType</a>=Prep</tt> (141; 100%).

`ADP` tokens may have the following values of `PronType`:

* `Rel` (141; 100% of non-empty `PronType`): _segundo, como, conforme_
* `EMPTY` (32255): _de, em, a, para, por, com, entre, sobre, sem, até_

### `SCONJ`

1 [pt-pos/SCONJ]() tokens (0% of all `SCONJ` tokens) have a non-empty value of `PronType`.

`SCONJ` tokens may have the following values of `PronType`:

* `Rel` (1; 100% of non-empty `PronType`): _ao_passo_que_
* `EMPTY` (2279): _que, se, porque, do_que, embora, pois, já_que, caso, ainda_que, como_se_

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`: `PRON --[conj]--> PRON` (17; 94%), `DET --[conj]--> PRON` (6; 67%), `ADV --[cop]--> PRON` (1; 100%).

