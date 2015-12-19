---
layout: feature
title: 'PronType'
shortdef: 'pronominal type'
---

This document is a placeholder for the language-specific documentation
for `PronType`.



--------------------------------------------------------------------------------

## AdpType

## Treebank Statistics

This feature is language-specific.
It occurs with 1 different values: `Prep`.

32397 tokens (15%) have a non-empty value of `AdpType`.
220 types (1%) occur at least once with a non-empty value of `AdpType`.
161 lemmas (1%) occur at least once with a non-empty value of `AdpType`.
The feature is used with 2 part-of-speech tags: [pt-pos/ADP]() (32396; 15% tokens), [pt-pos/PRON]() (1; 0% tokens).

### `ADP`

32396 [pt-pos/ADP]() tokens (100% of all `ADP` tokens) have a non-empty value of `AdpType`.

`ADP` tokens may have the following values of `AdpType`:

* `Prep` (32396; 100% of non-empty `AdpType`): _de, em, a, para, por, com, entre, sobre, sem, até_

`AdpType` seems to be **lexical feature** of `ADP`. 100% lemmas (161) occur only with one value of `AdpType`.

### `PRON`

1 [pt-pos/PRON]() tokens (0% of all `PRON` tokens) have a non-empty value of `AdpType`.

The most frequent other feature values with which `PRON` and `AdpType` co-occurred: `Reflex=EMPTY` (1; 100%), `Person=EMPTY` (1; 100%), `Gender=EMPTY` (1; 100%), `PronType=Ind,Neg,Tot` (1; 100%), `Number=EMPTY` (1; 100%), `Case=EMPTY` (1; 100%)

`PRON` tokens may have the following values of `AdpType`:

* `Prep` (1; 100% of non-empty `AdpType`): _mais_de_

## Relations with Agreement in `AdpType`

The 10 most frequent relations where parent and child node agree in `AdpType`: `ADP --[cc]--> ADP` (9; 100%), `ADP --[conj]--> ADP` (5; 100%), `ADP --[case]--> ADP` (2; 100%).



--------------------------------------------------------------------------------

## Case

## Treebank Statistics

This feature is universal.
It occurs with 3 different values: `Acc`, `Dat`, `Nom`.
Some words have combined values of the feature; 2 combinations have been observed: `Acc|Dat`, `Acc|Nom`.

2726 tokens (1%) have a non-empty value of `Case`.
50 types (0%) occur at least once with a non-empty value of `Case`.
13 lemmas (0%) occur at least once with a non-empty value of `Case`.
The feature is used with 1 part-of-speech tags: [pt-pos/PRON]() (2726; 1% tokens).

### `PRON`

2726 [pt-pos/PRON]() tokens (38% of all `PRON` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PRON` and `Case` co-occurred: `PronType=Prs` (2721; 100%), `Person=3` (2400; 88%), `Reflex=EMPTY` (1948; 71%), `Number=Sing` (1730; 63%), `Gender=Masc` (1456; 53%)

`PRON` tokens may have the following values of `Case`:

* `Acc` (1894; 69% of non-empty `Case`): _se, o, me, a, nos, lo, os, la, ele, eles_
* `Acc,Dat` (4; 0% of non-empty `Case`): _nos, se_
* `Acc,Nom` (71; 3% of non-empty `Case`): _ele, ela, eles, nós, elas, você_
* `Dat` (227; 8% of non-empty `Case`): _lhe, me, lhes, nos, se, lhe-, nos*, Ihe, me-, no_
* `Nom` (530; 19% of non-empty `Case`): _ele, eu, eles, ela, você, nós, elas, vocês, voce, vós_
* `EMPTY` (4380): _que, o, o_que, isso, quem, os, tudo, a, nada, isto_

<table>
  <tr><th>Paradigm <i>nós</i></th><th><tt>Acc,Dat</tt></th><th><tt>Acc,Nom</tt></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th><th><tt>Dat</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Person.html">Person</a>=1</tt></td><td></td><td><i>nós</i></td><td><i>nós</i></td><td><i>nos</i></td><td><i>nos</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Person.html">Person</a>=1|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td></td><td></td><td></td><td><i>nos</i></td><td><i>nos</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Person.html">Person</a>=3</tt></td><td></td><td></td><td></td><td><i>nos</i></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Person.html">Person</a>=1</tt></td><td></td><td><i>nós</i></td><td></td><td><i>nós</i></td><td></td></tr>
  <tr><td><tt><a href="Person.html">Person</a>=1</tt></td><td></td><td><i>nós</i></td><td><i>nós</i></td><td><i>nos, nós</i></td><td><i>nos, nos*</i></td></tr>
  <tr><td><tt><a href="Person.html">Person</a>=1|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td><i>nos</i></td><td></td><td></td><td><i>nos</i></td><td><i>nos, no</i></td></tr>
</table>

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`: `PRON --[conj]--> PRON` (5; 100%).



--------------------------------------------------------------------------------

## Definite

## Treebank Statistics

This feature is universal.
It occurs with 2 different values: `Def`, `Ind`.

29486 tokens (14%) have a non-empty value of `Definite`.
15 types (0%) occur at least once with a non-empty value of `Definite`.
3 lemmas (0%) occur at least once with a non-empty value of `Definite`.
The feature is used with 2 part-of-speech tags: [pt-pos/DET]() (29213; 14% tokens), [pt-pos/PRON]() (273; 0% tokens).

### `DET`

29213 [pt-pos/DET]() tokens (88% of all `DET` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `DET` and `Definite` co-occurred: `PronType=Art` (29045; 99%), `Number=Sing` (23584; 81%), `Gender=Masc` (15694; 54%)

`DET` tokens may have the following values of `Definite`:

* `Def` (26125; 89% of non-empty `Definite`): _o, a, os, as, o(s)_
* `Ind` (3088; 11% of non-empty `Definite`): _um, uma, o_
* `EMPTY` (4007): _sua, seu, este, esta, seus, suas, esse, qualquer, outros, mais_

<table>
  <tr><th>Paradigm <i>o</i></th><th><tt>Ind</tt></th><th><tt>Def</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td></td><td><i>o(s)</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><i>o</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art</tt></td><td><i>o</i></td><td><i>o, a, Os</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art|<a href="Typo.html">Typo</a>=Yes</tt></td><td></td><td><i>os</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><i>os</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Art</tt></td><td></td><td><i>os, o</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><i>a</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art</tt></td><td></td><td><i>a, as</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art|<a href="Typo.html">Typo</a>=Yes</tt></td><td></td><td><i>a</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><i>as</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Art</tt></td><td></td><td><i>as</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art</tt></td><td></td><td><i>a, o</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Art</tt></td><td></td><td><i>as</i></td></tr>
  <tr><td><tt><a href="PronType.html">PronType</a>=Art</tt></td><td></td><td><i>a</i></td></tr>
</table>

### `PRON`

273 [pt-pos/PRON]() tokens (4% of all `PRON` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `PRON` and `Definite` co-occurred: `Reflex=EMPTY` (273; 100%), `Case=EMPTY` (273; 100%), `Person=EMPTY` (273; 100%), `PronType=Art` (244; 89%), `Gender=Masc` (219; 80%), `Number=Sing` (175; 64%)

`PRON` tokens may have the following values of `Definite`:

* `Def` (258; 95% of non-empty `Definite`): _o, os, a, as, O_que, um_
* `Ind` (15; 5% of non-empty `Definite`): _um, uma_
* `EMPTY` (6833): _que, se, ele, o, o_que, isso, quem, lhe, eles, eu_

<table>
  <tr><th>Paradigm <i>um</i></th><th><tt>Ind</tt></th><th><tt>Def</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><i>um</i></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="PronType.html">PronType</a>=Art</tt></td><td><i>um</i></td><td><i>um</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="PronType.html">PronType</a>=Art</tt></td><td><i>uma</i></td><td></td></tr>
</table>

## Relations with Agreement in `Definite`

The 10 most frequent relations where parent and child node agree in `Definite`: `DET --[conj]--> PRON` (2; 100%).



--------------------------------------------------------------------------------

## Degree

## Treebank Statistics

This feature is universal.
It occurs with 2 different values: `Cmp`, `Sup`.

1376 tokens (1%) have a non-empty value of `Degree`.
61 types (0%) occur at least once with a non-empty value of `Degree`.
26 lemmas (0%) occur at least once with a non-empty value of `Degree`.
The feature is used with 4 part-of-speech tags: [pt-pos/ADV]() (488; 0% tokens), [pt-pos/DET]() (415; 0% tokens), [pt-pos/ADJ]() (353; 0% tokens), [pt-pos/PRON]() (120; 0% tokens).

### `ADV`

488 [pt-pos/ADV]() tokens (5% of all `ADV` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADV` and `Degree` co-occurred: `NumType=Card` (465; 95%), `PronType=Ind,Neg,Tot` (465; 95%)

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (479; 98% of non-empty `Degree`): _mais, menos, tão, tanto, melhor, assim, pior, superiormente, nada_mais_nada_menos_
* `Sup` (9; 2% of non-empty `Degree`): _melhor, Pior_
* `EMPTY` (9001): _não, como, também, já, ontem, ainda, quando, só, depois, muito_

<table>
  <tr><th>Paradigm <i>melhor</i></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><i>melhor</i></td><td><i>melhor</i></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 92% lemmas (12) occur only with one value of `Degree`.

### `DET`

415 [pt-pos/DET]() tokens (1% of all `DET` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `DET` and `Degree` co-occurred: `Definite=EMPTY` (415; 100%), `PronType=EMPTY` (321; 77%), `Gender=Masc` (226; 54%), `Number=Sing` (222; 53%)

`DET` tokens may have the following values of `Degree`:

* `Cmp` (414; 100% of non-empty `Degree`): _outros, outras, outro, mais, outra, mesmo, mesma, menos, tal, tais_
* `Sup` (1; 0% of non-empty `Degree`): _muitíssimo_
* `EMPTY` (32805): _o, a, os, as, um, uma, sua, seu, este, esta_

### `ADJ`

353 [pt-pos/ADJ]() tokens (3% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: `Number=Sing` (267; 76%), `Gender=Masc` (185; 52%)

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (203; 58% of non-empty `Degree`): _maior, maiores, melhor, menor, menores, melhores, superiores, superior, inferior, inferiores_
* `Sup` (150; 42% of non-empty `Degree`): _melhor, principal, principais, melhores, pior, mínimo, ótimo, superior, piores, péssimo_
* `EMPTY` (10355): _primeiro, novo, primeira, grande, nova, grandes, último, nacional, última, segundo_

<table>
  <tr><th>Paradigm <i>grande</i></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><i>maior</i></td><td><i>máximo</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td><i>maiores</i></td><td><i>máximos</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td><i>maior</i></td><td><i>máxima</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td><i>maiores</i></td><td></td></tr>
</table>

### `PRON`

120 [pt-pos/PRON]() tokens (2% of all `PRON` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `PRON` and `Degree` co-occurred: `Reflex=EMPTY` (120; 100%), `Case=EMPTY` (120; 100%), `Person=EMPTY` (120; 100%), `PronType=EMPTY` (89; 74%), `Gender=Masc` (69; 57%)

`PRON` tokens may have the following values of `Degree`:

* `Cmp` (120; 100% of non-empty `Degree`): _outros, mais, mesmo, outras, outro, outra, mesma, tal, menos, tanto_
* `EMPTY` (6986): _que, se, o, ele, o_que, isso, os, quem, lhe, a_

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`: `PRON --[conj]--> ADJ` (1; 100%).



--------------------------------------------------------------------------------

## Gender

## Treebank Statistics

This feature is universal.
It occurs with 2 different values: `Fem`, `Masc`.

108555 tokens (51%) have a non-empty value of `Gender`.
22094 types (79%) occur at least once with a non-empty value of `Gender`.
17439 lemmas (91%) occur at least once with a non-empty value of `Gender`.
The feature is used with 13 part-of-speech tags: [pt-pos/NOUN]() (39790; 19% tokens), [pt-pos/DET]() (32013; 15% tokens), [pt-pos/PROPN]() (11232; 5% tokens), [pt-pos/ADJ]() (10624; 5% tokens), [pt-pos/PRON]() (6362; 3% tokens), [pt-pos/VERB]() (4193; 2% tokens), [pt-pos/NUM]() (4110; 2% tokens), [pt-pos/SYM]() (179; 0% tokens), [pt-pos/AUX]() (32; 0% tokens), [pt-pos/ADV]() (14; 0% tokens), [pt-pos/INTJ]() (3; 0% tokens), [pt-pos/ADP]() (2; 0% tokens), [pt-pos/PART]() (1; 0% tokens).

### `NOUN`

39790 [pt-pos/NOUN]() tokens (100% of all `NOUN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NOUN` and `Gender` co-occurred: `Number=Sing` (27881; 70%)

`NOUN` tokens may have the following values of `Gender`:

* `Fem` (18125; 46% of non-empty `Gender`): _pessoas, parte, semana, empresa, empresas, cidade, forma, vida, casa, noite_
* `Masc` (21665; 54% of non-empty `Gender`): _anos, milhões, ano, dia, país, US$, presidente, contos, por_cento, grupo_
* `EMPTY` (102): _especialistas, representantes, jornalistas, habitantes, estudantes, presidente, visitantes, alevitas, artistas, clientes_

<table>
  <tr><th>Paradigm <i>milhão</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><i>milhão</i></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td><i>milhões</i></td><td><i>milhões</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Typo.html">Typo</a>=Yes</tt></td><td><i>mi</i></td><td></td></tr>
</table>

`Gender` seems to be **lexical feature** of `NOUN`. 98% lemmas (6667) occur only with one value of `Gender`.

### `DET`

32013 [pt-pos/DET]() tokens (96% of all `DET` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `DET` and `Gender` co-occurred: `PronType=Art` (27864; 87%), `Number=Sing` (25201; 79%), `Definite=Def` (24926; 78%)

`DET` tokens may have the following values of `Gender`:

* `Fem` (14144; 44% of non-empty `Gender`): _a, as, uma, sua, esta, suas, essa, outras, algumas, mesma_
* `Masc` (17869; 56% of non-empty `Gender`): _o, os, um, seu, este, seus, esse, outros, alguns, mesmo_
* `EMPTY` (1207): _a, as, mais, cada, qualquer, menos, o_

<table>
  <tr><th>Paradigm <i>o</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def</tt></td><td><i>o(s)</i></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing</tt></td><td><i>o</i></td><td><i>a</i></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art</tt></td><td><i>o, a, Os</i></td><td><i>a, as</i></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art|<a href="Typo.html">Typo</a>=Yes</tt></td><td><i>os</i></td><td><i>a</i></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Plur</tt></td><td><i>os</i></td><td><i>as</i></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Art</tt></td><td><i>os, o</i></td><td><i>as</i></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art</tt></td><td><i>o</i></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><i>o</i></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="NumType.html">NumType</a>=Card|<a href="PronType.html">PronType</a>=Ind,Neg,Tot</tt></td><td></td><td><i>a</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art</tt></td><td><i>o</i></td><td><i>a</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Dem</tt></td><td><i>o</i></td><td><i>a</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td><i>os</i></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Art</tt></td><td><i>os</i></td><td><i>as</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Dem</tt></td><td><i>os</i></td><td><i>as</i></td></tr>
</table>

### `PROPN`

11232 [pt-pos/PROPN]() tokens (96% of all `PROPN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PROPN` and `Gender` co-occurred: `Number=Sing` (10819; 96%)

`PROPN` tokens may have the following values of `Gender`:

* `Fem` (3663; 33% of non-empty `Gender`): _Lisboa, Folha, Alemanha, França, Espanha, Europa, Rússia, Itália, Internet, Bósnia_
* `Masc` (7569; 67% of non-empty `Gender`): _Portugal, São_Paulo, Brasil, Governo, EUA, Estados_Unidos, PÚBLICO, Rio, Porto, FHC_
* `EMPTY` (474): _Coimbra, Alvalade, Sagres, Barcelos, Ermesinde, Maastricht, Setúbal, Sines, Aveiro, Braga_

<table>
  <tr><th>Paradigm <i>São_Paulo</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt></tt></td><td><i>São_Paulo, SÃO_PAULO</i></td><td><i>São_Paulo</i></td></tr>
</table>

`Gender` seems to be **lexical feature** of `PROPN`. 99% lemmas (6645) occur only with one value of `Gender`.

### `ADJ`

10624 [pt-pos/ADJ]() tokens (99% of all `ADJ` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `ADJ` and `Gender` co-occurred: `Number=Sing` (7525; 71%)

`ADJ` tokens may have the following values of `Gender`:

* `Fem` (4775; 45% of non-empty `Gender`): _primeira, nova, maior, grande, última, segunda, boa, política, novas, próxima_
* `Masc` (5849; 55% of non-empty `Gender`): _primeiro, novo, último, segundo, últimos, maior, grande, novos, bom, próximo_
* `EMPTY` (84): _jovens, especial, melhor, capaz, favorável, grandes, inconvenientes, menores, mole, responsáveis_

<table>
  <tr><th>Paradigm <i>grande</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Cmp|<a href="Number.html">Number</a>=Sing</tt></td><td><i>maior</i></td><td><i>maior</i></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Cmp|<a href="Number.html">Number</a>=Plur</tt></td><td><i>maiores</i></td><td><i>maiores</i></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Sup|<a href="Number.html">Number</a>=Sing</tt></td><td><i>máximo</i></td><td><i>máxima</i></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Sup|<a href="Number.html">Number</a>=Plur</tt></td><td><i>máximos</i></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><i>grande, maior, máximo</i></td><td><i>grande, maior, máxima</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td><i>grandes, máximos</i></td><td><i>grandes, maiores</i></td></tr>
</table>

### `PRON`

6362 [pt-pos/PRON]() tokens (90% of all `PRON` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PRON` and `Gender` co-occurred: `Reflex=EMPTY` (5699; 90%), `Number=Sing` (4613; 73%), `Case=EMPTY` (4224; 66%), `Person=EMPTY` (4212; 66%)

`PRON` tokens may have the following values of `Gender`:

* `Fem` (1894; 30% of non-empty `Gender`): _que, se, a, ela, as, elas, lhe, esta, eu, la_
* `Masc` (4468; 70% of non-empty `Gender`): _que, se, o, ele, o_que, isso, os, eles, tudo, lhe_
* `EMPTY` (744): _se, quem, me, nos, eu, você, nós, mais, lhe, mim_

<table>
  <tr><th>Paradigm <i>que</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Ind</tt></td><td><i>que</i></td><td><i>que</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Int</tt></td><td><i>que</i></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Rel</tt></td><td><i>que</i></td><td><i>que</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Rel|<a href="Typo.html">Typo</a>=Yes</tt></td><td></td><td><i>que</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Ind</tt></td><td><i>que</i></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Int</tt></td><td><i>que</i></td><td><i>que</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Rel</tt></td><td><i>que</i></td><td><i>que</i></td></tr>
  <tr><td><tt><a href="PronType.html">PronType</a>=Rel</tt></td><td></td><td><i>que</i></td></tr>
</table>

### `VERB`

4193 [pt-pos/VERB]() tokens (16% of all `VERB` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `VERB` and `Gender` co-occurred: `Tense=EMPTY` (4193; 100%), `Person=EMPTY` (4192; 100%), `Mood=EMPTY` (4192; 100%), `VerbForm=Part` (4191; 100%), `Number=Sing` (2797; 67%)

`VERB` tokens may have the following values of `Gender`:

* `Fem` (1674; 40% of non-empty `Gender`): _passada, feita, feitas, prevista, considerada, criada, realizada, aberta, dada, utilizada_
* `Masc` (2519; 60% of non-empty `Gender`): _passado, feito, eleito, aberto, considerado, previsto, ligados, realizado, acusado, divulgado_
* `EMPTY` (21647): _é, foi, tem, está, são, ser, há, ter, disse, foram_

<table>
  <tr><th>Paradigm <i>ter</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><i>tido</i></td><td><i>tida</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td></td><td><i>tidas</i></td></tr>
</table>

### `NUM`

4110 [pt-pos/NUM]() tokens (99% of all `NUM` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NUM` and `Gender` co-occurred: `NumType=Card` (3997; 97%), `Number=Plur` (3179; 77%)

`NUM` tokens may have the following values of `Gender`:

* `Fem` (690; 17% of non-empty `Gender`): _uma, duas, três, quatro, mil, seis, cinco, 200, dez, sete_
* `Masc` (3420; 83% of non-empty `Gender`): _um, dois, mil, três, quatro, cinco, 15, 30, 20, dez_
* `EMPTY` (52): _mil, 011, 1., 2, 011_959-2650, 01202-001, 07.00-09.00, 1, 1), 1.85000_

<table>
  <tr><th>Paradigm <i>um</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><i>um</i></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="NumType.html">NumType</a>=Card</tt></td><td><i>um</i></td><td><i>uma</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td><i>um</i></td><td></td></tr>
</table>

### `SYM`

179 [pt-pos/SYM]() tokens (100% of all `SYM` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `SYM` and `Gender` co-occurred: `Number=Plur` (179; 100%)

`SYM` tokens may have the following values of `Gender`:

* `Masc` (179; 100% of non-empty `Gender`): _%_

### `AUX`

32 [pt-pos/AUX]() tokens (7% of all `AUX` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `AUX` and `Gender` co-occurred: `VerbForm=Part` (32; 100%)

`AUX` tokens may have the following values of `Gender`:

* `Fem` (8; 25% of non-empty `Gender`): _convertidas, apresentada, decididas, discutidas, esmagadas, subscrita, sujeitas_
* `Masc` (24; 75% of non-empty `Gender`): _sido, atracado, atualizados, construídos, convertidas, deslocado, entregue, entregues, favorecido, inspeccionados_
* `EMPTY` (433): _ser, sido, ter, sendo, vindo, vir, continuar, passar, estar, acabar_

<table>
  <tr><th>Paradigm <i>converter</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt></tt></td><td><i>convertidas</i></td><td><i>convertidas</i></td></tr>
</table>

`Gender` seems to be **lexical feature** of `AUX`. 95% lemmas (21) occur only with one value of `Gender`.

### `ADV`

14 [pt-pos/ADV]() tokens (0% of all `ADV` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `ADV` and `Gender` co-occurred: `PronType=EMPTY` (13; 93%), `NumType=EMPTY` (13; 93%)

`ADV` tokens may have the following values of `Gender`:

* `Fem` (2; 14% of non-empty `Gender`): _da_ordem, mais_
* `Masc` (12; 86% of non-empty `Gender`): _etc., mais, fundo, juntos_
* `EMPTY` (9475): _não, mais, como, também, já, ontem, ainda, quando, só, depois_

### `INTJ`

3 [pt-pos/INTJ]() tokens (8% of all `INTJ` tokens) have a non-empty value of `Gender`.

`INTJ` tokens may have the following values of `Gender`:

* `Fem` (2; 67% of non-empty `Gender`): _Obrigada, rua_
* `Masc` (1; 33% of non-empty `Gender`): _Adeus_
* `EMPTY` (37): _não, Rarará, Ah_bem, Ai, Alô, BINGO, Deus_me_livre, Droga, Hein, Meu_Deus_

### `ADP`

2 [pt-pos/ADP]() tokens (0% of all `ADP` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `ADP` and `Gender` co-occurred: `AdpType=Prep` (2; 100%)

`ADP` tokens may have the following values of `Gender`:

* `Fem` (1; 50% of non-empty `Gender`): _obra_do_mestre_
* `Masc` (1; 50% of non-empty `Gender`): _sobre_
* `EMPTY` (32394): _de, em, a, para, por, com, entre, sobre, sem, até_

### `PART`

1 [pt-pos/PART]() tokens (20% of all `PART` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PART` and `Gender` co-occurred: `Hyph=Yes` (1; 100%), `Number=Sing` (1; 100%)

`PART` tokens may have the following values of `Gender`:

* `Masc` (1; 100% of non-empty `Gender`): _pós_
* `EMPTY` (4): _anti-, ex, ex-, pré-_

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`: `NOUN --[det]--> DET` (26645; 96%), `NOUN --[amod]--> ADJ` (8199; 98%), `PROPN --[det]--> DET` (4417; 93%), `NOUN --[nummod]--> NUM` (2719; 94%), `NOUN --[nmod]--> PROPN` (2364; 57%), `NOUN --[conj]--> NOUN` (1336; 60%), `PROPN --[conj]--> PROPN` (828; 74%), `PROPN --[nmod]--> NOUN` (526; 70%), `ADJ --[det]--> DET` (504; 96%), `ADJ --[conj]--> ADJ` (364; 97%).



--------------------------------------------------------------------------------

## Hyph

## Treebank Statistics

This feature is language-specific.
It occurs with 1 different values: `Yes`.

641 tokens (0%) have a non-empty value of `Hyph`.
506 types (2%) occur at least once with a non-empty value of `Hyph`.
329 lemmas (2%) occur at least once with a non-empty value of `Hyph`.
The feature is used with 7 part-of-speech tags: [pt-pos/VERB]() (609; 0% tokens), [pt-pos/PRON]() (13; 0% tokens), [pt-pos/PROPN]() (7; 0% tokens), [pt-pos/PART]() (5; 0% tokens), [pt-pos/NOUN]() (4; 0% tokens), [pt-pos/AUX]() (2; 0% tokens), [pt-pos/ADJ]() (1; 0% tokens).

### `VERB`

609 [pt-pos/VERB]() tokens (2% of all `VERB` tokens) have a non-empty value of `Hyph`.

The most frequent other feature values with which `VERB` and `Hyph` co-occurred: `Gender=EMPTY` (609; 100%), `VerbForm=Fin` (412; 68%), `Person=3` (406; 67%), `Mood=Ind` (384; 63%), `Number=Sing` (336; 55%)

`VERB` tokens may have the following values of `Hyph`:

* `Yes` (609; 100% of non-empty `Hyph`): _trata-, encontra-, deve-, recorde-, disse-, fazer-, limitou-, pode-, queixa-, referindo-_

`Hyph` seems to be **lexical feature** of `VERB`. 100% lemmas (307) occur only with one value of `Hyph`.

### `PRON`

13 [pt-pos/PRON]() tokens (0% of all `PRON` tokens) have a non-empty value of `Hyph`.

The most frequent other feature values with which `PRON` and `Hyph` co-occurred: `PronType=Prs` (13; 100%), `Person=3` (12; 92%), `Number=Sing` (10; 77%), `Reflex=EMPTY` (10; 77%), `Case=Acc` (9; 69%)

`PRON` tokens may have the following values of `Hyph`:

* `Yes` (13; 100% of non-empty `Hyph`): _se-, lhe-, la-, me-_

### `PROPN`

7 [pt-pos/PROPN]() tokens (0% of all `PROPN` tokens) have a non-empty value of `Hyph`.

The most frequent other feature values with which `PROPN` and `Hyph` co-occurred: `Number=Sing` (6; 86%), `Gender=Masc` (4; 57%)

`PROPN` tokens may have the following values of `Hyph`:

* `Yes` (7; 100% of non-empty `Hyph`): _PSD-Porto, Barcelona-Narbonne, CDS-PP, EUA, Madrid-Sevilha, Valencia-Barcelona_

### `PART`

5 [pt-pos/PART]() tokens (100% of all `PART` tokens) have a non-empty value of `Hyph`.

The most frequent other feature values with which `PART` and `Hyph` co-occurred: `Gender=EMPTY` (4; 80%), `Number=EMPTY` (4; 80%)

`PART` tokens may have the following values of `Hyph`:

* `Yes` (5; 100% of non-empty `Hyph`): _anti-, ex, ex-, pré-, pós_

### `NOUN`

4 [pt-pos/NOUN]() tokens (0% of all `NOUN` tokens) have a non-empty value of `Hyph`.

The most frequent other feature values with which `NOUN` and `Hyph` co-occurred: `Gender=Masc` (3; 75%)

`NOUN` tokens may have the following values of `Hyph`:

* `Yes` (4; 100% of non-empty `Hyph`): _clientes, lugares-comuns, média-alta, partido_

### `AUX`

2 [pt-pos/AUX]() tokens (0% of all `AUX` tokens) have a non-empty value of `Hyph`.

The most frequent other feature values with which `AUX` and `Hyph` co-occurred: `VerbForm=Inf` (2; 100%)

`AUX` tokens may have the following values of `Hyph`:

* `Yes` (2; 100% of non-empty `Hyph`): _encaminhar-, mandar-_

### `ADJ`

1 [pt-pos/ADJ]() tokens (0% of all `ADJ` tokens) have a non-empty value of `Hyph`.

The most frequent other feature values with which `ADJ` and `Hyph` co-occurred: `Gender=Fem` (1; 100%), `Number=Plur` (1; 100%)

`ADJ` tokens may have the following values of `Hyph`:

* `Yes` (1; 100% of non-empty `Hyph`): _socialistas_



--------------------------------------------------------------------------------

## Mood

## Treebank Statistics

This feature is universal.
It occurs with 4 different values: `Cnd`, `Imp`, `Ind`, `Sub`.

15785 tokens (7%) have a non-empty value of `Mood`.
4307 types (15%) occur at least once with a non-empty value of `Mood`.
1307 lemmas (7%) occur at least once with a non-empty value of `Mood`.
The feature is used with 3 part-of-speech tags: [pt-pos/VERB]() (15778; 7% tokens), [pt-pos/AUX]() (6; 0% tokens), [pt-pos/INTJ]() (1; 0% tokens).

### `VERB`

15778 [pt-pos/VERB]() tokens (61% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: `Gender=EMPTY` (15777; 100%), `VerbForm=Fin` (15777; 100%), `Person=3` (14827; 94%), `Number=Sing` (12014; 76%), `Tense=Pres` (8521; 54%)

`VERB` tokens may have the following values of `Mood`:

* `Cnd` (340; 2% of non-empty `Mood`): _seria, poderia, teria, deveria, seriam, iria, teriam, estaria, gostaria, ficaria_
* `Imp` (7; 0% of non-empty `Mood`): _Sê, move, Olha, chega_
* `Ind` (14449; 92% of non-empty `Mood`): _é, foi, tem, está, são, há, disse, foram, vai, era_
* `Sub` (982; 6% of non-empty `Mood`): _seja, tenha, for, sejam, fosse, possa, esteja, tivesse, quiser, estejam_
* `EMPTY` (10062): _ser, ter, fazer, ver, passado, dar, feito, dizer, estar, passada_

<table>
  <tr><th>Paradigm <i>ser</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th><th><tt>Cnd</tt></th><th><tt>Sub</tt></th></tr>
  <tr><td><tt><a href="Hyph.html">Hyph</a>=Yes|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td></td><td></td><td><i>seja-</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1,3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td></td><td></td><td><i>for</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1,3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>era</i></td><td></td><td></td><td><i>fosse</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1,3|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td></td><td><i>seria</i></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>serei</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>era</i></td><td></td><td></td><td><i>fosse</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>fui</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pqp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>fora</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>sou, sô</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=2|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><i>Sê</i></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>será</i></td><td></td><td></td><td><i>for, fôr</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Inf</tt></td><td><i>será</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>era</i></td><td></td><td></td><td><i>fosse</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>foi, foram</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pqp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>fora</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="Typo.html">Typo</a>=Yes|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>çe</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>é, eis, é-, Sou</i></td><td></td><td></td><td><i>seja</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td></td><td><i>seria</i></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>seremos</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>fomos</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>somos</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>serão</i></td><td></td><td></td><td><i>forem</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp,Pqp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>foram</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>eram</i></td><td></td><td></td><td><i>fossem</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>foram</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pqp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>foram</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>são</i></td><td></td><td></td><td><i>sejam</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td></td><td><i>seriam</i></td><td></td></tr>
</table>

### `AUX`

6 [pt-pos/AUX]() tokens (1% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: `VerbForm=Fin` (6; 100%)

`AUX` tokens may have the following values of `Mood`:

* `Cnd` (1; 17% of non-empty `Mood`): _teria_
* `Ind` (4; 67% of non-empty `Mood`): _está, são, vamos, é_
* `Sub` (1; 17% of non-empty `Mood`): _desencadear_
* `EMPTY` (459): _ser, sido, ter, sendo, vindo, vir, continuar, passar, estar, acabar_

### `INTJ`

1 [pt-pos/INTJ]() tokens (3% of all `INTJ` tokens) have a non-empty value of `Mood`.

`INTJ` tokens may have the following values of `Mood`:

* `Ind` (1; 100% of non-empty `Mood`): _viu_
* `EMPTY` (39): _não, Rarará, Adeus, Ah_bem, Ai, Alô, BINGO, Deus_me_livre, Droga, Hein_

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`: `VERB --[conj]--> VERB` (1063; 90%), `VERB --[dep]--> VERB` (21; 66%), `VERB --[cc]--> VERB` (11; 92%).



--------------------------------------------------------------------------------

## Number

## Treebank Statistics

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: [Number](), [Number[psor]]().

126963 tokens (60%) have a non-empty value of `Number`.
26828 types (97%) occur at least once with a non-empty value of `Number`.
18359 lemmas (95%) occur at least once with a non-empty value of `Number`.
The feature is used with 13 part-of-speech tags: [pt-pos/NOUN]() (39878; 19% tokens), [pt-pos/DET]() (33215; 16% tokens), [pt-pos/VERB]() (20359; 10% tokens), [pt-pos/PROPN]() (11682; 5% tokens), [pt-pos/ADJ]() (10698; 5% tokens), [pt-pos/PRON]() (6735; 3% tokens), [pt-pos/NUM]() (4156; 2% tokens), [pt-pos/SYM]() (179; 0% tokens), [pt-pos/AUX]() (40; 0% tokens), [pt-pos/ADV]() (14; 0% tokens), [pt-pos/INTJ]() (4; 0% tokens), [pt-pos/ADP]() (2; 0% tokens), [pt-pos/PART]() (1; 0% tokens).

### `NOUN`

39878 [pt-pos/NOUN]() tokens (100% of all `NOUN` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `NOUN` and `Number` co-occurred: `Gender=Masc` (21662; 54%)

`NOUN` tokens may have the following values of `Number`:

* `Plur` (11979; 30% of non-empty `Number`): _anos, milhões, pessoas, US$, contos, por_cento, dias, pontos, empresas, meses_
* `Sing` (27899; 70% of non-empty `Number`): _ano, dia, presidente, país, grupo, governo, estado, parte, tempo, semana_
* `EMPTY` (14): _21h, 21h30, P., morte, pedido, peemedebistas, pessoa, piano, polícia, prova_

<table>
  <tr><th>Paradigm <i>ano</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><i>ano</i></td><td><i>anos</i></td></tr>
</table>

### `DET`

33215 [pt-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `DET` and `Number` co-occurred: `PronType=Art` (29062; 87%), `Definite=Def` (26123; 79%), `Gender=Masc` (17868; 54%)

`DET` tokens may have the following values of `Number`:

* `Plur` (7031; 21% of non-empty `Number`): _os, as, seus, suas, outros, alguns, outras, algumas, todos, estes_
* `Sing` (26184; 79% of non-empty `Number`): _o, a, um, uma, sua, seu, este, esta, esse, qualquer_
* `EMPTY` (5): _mais, a, menos, o(s)_

<table>
  <tr><th>Paradigm <i>o</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Masc</tt></td><td><i>o</i></td><td><i>os</i></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Masc|<a href="PronType.html">PronType</a>=Art</tt></td><td><i>o, a, Os</i></td><td><i>os, o</i></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Masc|<a href="PronType.html">PronType</a>=Art|<a href="Typo.html">Typo</a>=Yes</tt></td><td><i>os</i></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Fem</tt></td><td><i>a</i></td><td><i>as</i></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Fem|<a href="PronType.html">PronType</a>=Art</tt></td><td><i>a, as</i></td><td><i>as</i></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Fem|<a href="PronType.html">PronType</a>=Art|<a href="Typo.html">Typo</a>=Yes</tt></td><td><i>a</i></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="PronType.html">PronType</a>=Art</tt></td><td><i>a, o</i></td><td><i>as</i></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Gender.html">Gender</a>=Masc|<a href="PronType.html">PronType</a>=Art</tt></td><td><i>o</i></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><i>o</i></td><td><i>os</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="PronType.html">PronType</a>=Art</tt></td><td><i>o</i></td><td><i>os</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="PronType.html">PronType</a>=Dem</tt></td><td><i>o</i></td><td><i>os</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="NumType.html">NumType</a>=Card|<a href="PronType.html">PronType</a>=Ind,Neg,Tot</tt></td><td><i>a</i></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="PronType.html">PronType</a>=Art</tt></td><td><i>a</i></td><td><i>as</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="PronType.html">PronType</a>=Dem</tt></td><td><i>a</i></td><td><i>as</i></td></tr>
</table>

### `VERB`

20359 [pt-pos/VERB]() tokens (79% of all `VERB` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `VERB` and `Number` co-occurred: `Gender=EMPTY` (16166; 79%), `VerbForm=Fin` (15776; 77%), `Person=3` (15202; 75%), `Mood=Ind` (14447; 71%)

`VERB` tokens may have the following values of `Number`:

* `Plur` (5334; 26% of non-empty `Number`): _são, foram, estão, têm, vão, podem, serão, devem, estavam, eram_
* `Sing` (15025; 74% of non-empty `Number`): _é, foi, tem, está, há, disse, vai, era, pode, diz_
* `EMPTY` (5481): _ser, ter, fazer, ver, dar, dizer, estar, tendo, falar, saber_

<table>
  <tr><th>Paradigm <i>ser</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><i>sido</i></td><td></td></tr>
  <tr><td><tt><a href="Hyph.html">Hyph</a>=Yes|<a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>seja-</i></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=1,3|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>seria</i></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>seria</i></td><td><i>seriam</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Imp|<a href="Person.html">Person</a>=2|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>Sê</i></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1,3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>era</i></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>serei</i></td><td><i>seremos</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>era</i></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>fui</i></td><td><i>fomos</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pqp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>fora</i></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>sou, sô</i></td><td><i>somos</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>será</i></td><td><i>serão</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Inf</tt></td><td><i>será</i></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp,Pqp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><i>foram</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>era</i></td><td><i>eram</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>foi, foram</i></td><td><i>foram</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pqp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>fora</i></td><td><i>foram</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="Typo.html">Typo</a>=Yes|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>çe</i></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>é, eis, é-, Sou</i></td><td><i>são</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=1,3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>for</i></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=1,3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>fosse</i></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>fosse</i></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>for, fôr</i></td><td><i>forem</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>fosse</i></td><td><i>fossem</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>seja</i></td><td><i>sejam</i></td></tr>
  <tr><td><tt><a href="Person.html">Person</a>=1|<a href="VerbForm.html">VerbForm</a>=Inf</tt></td><td></td><td><i>sermos</i></td></tr>
  <tr><td><tt><a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Inf</tt></td><td><i>ser</i></td><td><i>serem</i></td></tr>
</table>

### `PROPN`

11682 [pt-pos/PROPN]() tokens (100% of all `PROPN` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PROPN` and `Number` co-occurred: `Gender=Masc` (7569; 65%)

`PROPN` tokens may have the following values of `Number`:

* `Plur` (414; 4% of non-empty `Number`): _EUA, Estados_Unidos, Nações_Unidas, Antas, Açores, Misericórdias, Negócios_Estrangeiros, Assuntos_Internacionais, Açoteias, CDBs_
* `Sing` (11268; 96% of non-empty `Number`): _Portugal, São_Paulo, Brasil, Governo, PÚBLICO, Lisboa, Folha, Rio, FHC, Alemanha_
* `EMPTY` (24): _Chaves, Maio, Setembro, Carvalhas, Colares, Entre-os-Rios, Fernanda_Pinto_Rodrigues, Igreja_Adventista_do_Sétimo_Dia, Instituto_Superior_de_Economia_e_Gestao, Jolo_

<table>
  <tr><th>Paradigm <i>Flamengo</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><i>Flamengo</i></td><td><i>Flamengos</i></td></tr>
</table>

`Number` seems to be **lexical feature** of `PROPN`. 100% lemmas (6968) occur only with one value of `Number`.

### `ADJ`

10698 [pt-pos/ADJ]() tokens (100% of all `ADJ` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `ADJ` and `Number` co-occurred: `Gender=Masc` (5849; 55%)

`ADJ` tokens may have the following values of `Number`:

* `Plur` (3134; 29% of non-empty `Number`): _grandes, últimos, novos, novas, jovens, primeiros, responsáveis, principais, internacionais, melhores_
* `Sing` (7564; 71% of non-empty `Number`): _maior, primeiro, novo, primeira, grande, nova, melhor, último, nacional, última_
* `EMPTY` (10): _a_favor, além-Pirinéus, ao_ar_livre, capaz, de_fato, em_questão, geral, por_excelência, quarto, trémula_

<table>
  <tr><th>Paradigm <i>grande</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><i>grandes</i></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Cmp|<a href="Gender.html">Gender</a>=Masc</tt></td><td><i>maior</i></td><td><i>maiores</i></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Cmp|<a href="Gender.html">Gender</a>=Fem</tt></td><td><i>maior</i></td><td><i>maiores</i></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Sup|<a href="Gender.html">Gender</a>=Masc</tt></td><td><i>máximo</i></td><td><i>máximos</i></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Sup|<a href="Gender.html">Gender</a>=Fem</tt></td><td><i>máxima</i></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><i>grande, maior, máximo</i></td><td><i>grandes, máximos</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td><i>grande, maior, máxima</i></td><td><i>grandes, maiores</i></td></tr>
</table>

### `PRON`

6735 [pt-pos/PRON]() tokens (95% of all `PRON` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PRON` and `Number` co-occurred: `Reflex=EMPTY` (5983; 89%), `Gender=Masc` (4461; 66%), `Case=EMPTY` (4328; 64%), `Person=EMPTY` (4316; 64%)

`PRON` tokens may have the following values of `Number`:

* `Plur` (1850; 27% of non-empty `Number`): _que, se, os, eles, nos, as, elas, nós, todos, outros_
* `Sing` (4885; 73% of non-empty `Number`): _que, se, o, ele, o_que, isso, lhe, a, quem, eu_
* `EMPTY` (371): _se, mais, quem, que, o_que, se-, mais_de, si, um_pouco, Todo_mundo_

<table>
  <tr><th>Paradigm <i>que</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="PronType.html">PronType</a>=Ind</tt></td><td><i>que</i></td><td><i>que</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="PronType.html">PronType</a>=Int</tt></td><td><i>que</i></td><td><i>que</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="PronType.html">PronType</a>=Rel</tt></td><td><i>que</i></td><td><i>que</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="PronType.html">PronType</a>=Ind</tt></td><td><i>que</i></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="PronType.html">PronType</a>=Int</tt></td><td></td><td><i>que</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="PronType.html">PronType</a>=Rel</tt></td><td><i>que</i></td><td><i>que</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="PronType.html">PronType</a>=Rel|<a href="Typo.html">Typo</a>=Yes</tt></td><td><i>que</i></td><td></td></tr>
  <tr><td><tt><a href="PronType.html">PronType</a>=Rel</tt></td><td><i>que</i></td><td><i>que</i></td></tr>
</table>

### `NUM`

4156 [pt-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `NUM` and `Number` co-occurred: `NumType=Card` (4041; 97%), `Gender=Masc` (3419; 82%)

`NUM` tokens may have the following values of `Number`:

* `Plur` (3224; 78% of non-empty `Number`): _dois, três, mil, duas, quatro, cinco, seis, 15, 30, dez_
* `Sing` (932; 22% of non-empty `Number`): _um, uma, 1, 1994, 1993, 1992, 1995, 1991, 1997, 1990_
* `EMPTY` (6): _1., 07.00-09.00, 1, 10.00-12.00, 18_

<table>
  <tr><th>Paradigm <i>um</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><i>um</i></td><td><i>um</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="NumType.html">NumType</a>=Card</tt></td><td><i>um</i></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="NumType.html">NumType</a>=Card</tt></td><td><i>uma</i></td><td></td></tr>
</table>

### `SYM`

179 [pt-pos/SYM]() tokens (100% of all `SYM` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `SYM` and `Number` co-occurred: `Gender=Masc` (179; 100%)

`SYM` tokens may have the following values of `Number`:

* `Plur` (179; 100% of non-empty `Number`): _%_

### `AUX`

40 [pt-pos/AUX]() tokens (9% of all `AUX` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `AUX` and `Number` co-occurred: `VerbForm=Part` (32; 80%)

`AUX` tokens may have the following values of `Number`:

* `Plur` (15; 38% of non-empty `Number`): _convertidas, atualizados, construídos, decididas, discutidas, entregues, esmagadas, inspeccionados, mostrarem, pagos_
* `Sing` (25; 63% of non-empty `Number`): _sido, apresentada, atracado, dar, desencadear, deslocado, entregue, está, favorecido, interpelado_
* `EMPTY` (425): _ser, sido, ter, sendo, vindo, vir, continuar, passar, estar, acabar_

<table>
  <tr><th>Paradigm <i>ser</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><i>sido</i></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>é</i></td><td><i>são</i></td></tr>
</table>

`Number` seems to be **lexical feature** of `AUX`. 93% lemmas (26) occur only with one value of `Number`.

### `ADV`

14 [pt-pos/ADV]() tokens (0% of all `ADV` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `ADV` and `Number` co-occurred: `PronType=EMPTY` (13; 93%), `NumType=EMPTY` (13; 93%)

`ADV` tokens may have the following values of `Number`:

* `Plur` (3; 21% of non-empty `Number`): _mais, juntos_
* `Sing` (11; 79% of non-empty `Number`): _etc., mais, da_ordem, fundo_
* `EMPTY` (9475): _não, mais, como, também, já, ontem, ainda, quando, só, depois_

<table>
  <tr><th>Paradigm <i>mais</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><i>mais</i></td><td><i>mais</i></td></tr>
</table>

### `INTJ`

4 [pt-pos/INTJ]() tokens (10% of all `INTJ` tokens) have a non-empty value of `Number`.

`INTJ` tokens may have the following values of `Number`:

* `Sing` (4; 100% of non-empty `Number`): _Adeus, Obrigada, rua, viu_
* `EMPTY` (36): _não, Rarará, Ah_bem, Ai, Alô, BINGO, Deus_me_livre, Droga, Hein, Meu_Deus_

### `ADP`

2 [pt-pos/ADP]() tokens (0% of all `ADP` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `ADP` and `Number` co-occurred: `AdpType=Prep` (2; 100%)

`ADP` tokens may have the following values of `Number`:

* `Sing` (2; 100% of non-empty `Number`): _obra_do_mestre, sobre_
* `EMPTY` (32394): _de, em, a, para, por, com, entre, sobre, sem, até_

### `PART`

1 [pt-pos/PART]() tokens (20% of all `PART` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PART` and `Number` co-occurred: `Hyph=Yes` (1; 100%), `Gender=Masc` (1; 100%)

`PART` tokens may have the following values of `Number`:

* `Sing` (1; 100% of non-empty `Number`): _pós_
* `EMPTY` (4): _anti-, ex, ex-, pré-_

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`: `NOUN --[det]--> DET` (27628; 100%), `NOUN --[amod]--> ADJ` (8213; 98%), `NOUN --[nmod]--> NOUN` (7068; 61%), `VERB --[nsubj]--> NOUN` (4869; 95%), `PROPN --[det]--> DET` (4737; 99%), `NOUN --[acl]--> VERB` (3540; 78%), `NOUN --[nmod]--> PROPN` (3259; 79%), `NOUN --[nummod]--> NUM` (2553; 88%), `VERB --[nsubj]--> PRON` (2552; 88%), `VERB --[nsubj]--> PROPN` (1955; 93%).



--------------------------------------------------------------------------------

## Number[psor]

## Treebank Statistics

This feature is language-specific.
It occurs with 2 different values: `Plur`, `Sing`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: [Number](), [Number[psor]]().

1288 tokens (1%) have a non-empty value of `Number[psor]`.
23 types (0%) occur at least once with a non-empty value of `Number[psor]`.
5 lemmas (0%) occur at least once with a non-empty value of `Number[psor]`.
The feature is used with 2 part-of-speech tags: [pt-pos/DET]() (1275; 1% tokens), [pt-pos/PRON]() (13; 0% tokens).

### `DET`

1275 [pt-pos/DET]() tokens (4% of all `DET` tokens) have a non-empty value of `Number[psor]`.

The most frequent other feature values with which `DET` and `Number[psor]` co-occurred: `PronType=Prs` (1275; 100%), `Definite=EMPTY` (1275; 100%), `Number=Sing` (934; 73%), `Gender=Fem` (643; 50%)

`DET` tokens may have the following values of `Number[psor]`:


<table>
  <tr><th>Paradigm <i>seu</i></th><th><tt>Plur</tt></th><th><tt>Sing</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur|<a href="Person.html">Person</a>=3</tt></td><td><i>seu</i></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td><i>seu</i></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing|<a href="Person.html">Person</a>=2</tt></td><td></td><td><i>seu</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td></td><td><i>seu</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td></td><td><i>seu</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="Number[psor].html">Number[psor]</a>=Plur|<a href="Person.html">Person</a>=3</tt></td><td><i>seus</i></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="Number[psor].html">Number[psor]</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td><i>seus</i></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="Number[psor].html">Number[psor]</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td></td><td><i>seus</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="Number[psor].html">Number[psor]</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td></td><td><i>seus</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur|<a href="Person.html">Person</a>=3</tt></td><td><i>sua</i></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td><i>sua</i></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td></td><td><i>sua, seu</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td></td><td><i>sua</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="Number[psor].html">Number[psor]</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td></td><td><i>suas</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="Number[psor].html">Number[psor]</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td></td><td><i>suas</i></td></tr>
</table>

### `PRON`

13 [pt-pos/PRON]() tokens (0% of all `PRON` tokens) have a non-empty value of `Number[psor]`.

The most frequent other feature values with which `PRON` and `Number[psor]` co-occurred: `PronType=Prs` (13; 100%), `Case=EMPTY` (13; 100%), `Gender=Masc` (12; 92%), `Reflex=EMPTY` (10; 77%), `Person=3` (7; 54%), `Number=Sing` (7; 54%)

`PRON` tokens may have the following values of `Number[psor]`:




--------------------------------------------------------------------------------

## NumType

## Treebank Statistics

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

7750 tokens (4%) have a non-empty value of `NumType`.
1070 types (4%) occur at least once with a non-empty value of `NumType`.
961 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 7 part-of-speech tags: [pt-pos/NUM]() (4042; 2% tokens), [pt-pos/ADV]() (1307; 1% tokens), [pt-pos/DET]() (1147; 1% tokens), [pt-pos/ADJ]() (791; 0% tokens), [pt-pos/PRON]() (458; 0% tokens), [pt-pos/NOUN]() (4; 0% tokens), [pt-pos/PROPN]() (1; 0% tokens).

### `NUM`

4042 [pt-pos/NUM]() tokens (97% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: `Gender=Masc` (3309; 82%), `Number=Plur` (3153; 78%)

`NUM` tokens may have the following values of `NumType`:

* `Card` (4042; 100% of non-empty `NumType`): _um, dois, três, mil, uma, duas, quatro, cinco, 15, 30_
* `EMPTY` (120): _1, 0, 1992, 2, 23, mil, três, 10, 14, 5_

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (806) occur only with one value of `NumType`.

### `ADV`

1307 [pt-pos/ADV]() tokens (14% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: `PronType=Ind,Neg,Tot` (1296; 99%)

`ADV` tokens may have the following values of `NumType`:

* `Card` (1307; 100% of non-empty `NumType`): _mais, muito, bem, quase, mesmo, mais_de, pouco, menos, pelo_menos, bastante_
* `EMPTY` (8182): _não, como, também, já, ontem, ainda, quando, só, depois, onde_

`NumType` seems to be **lexical feature** of `ADV`. 100% lemmas (40) occur only with one value of `NumType`.

### `DET`

1147 [pt-pos/DET]() tokens (3% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: `Definite=EMPTY` (1147; 100%), `PronType=Ind,Neg,Tot` (1141; 99%), `Gender=Masc` (647; 56%), `Number=Plur` (626; 55%)

`DET` tokens may have the following values of `NumType`:

* `Card` (1147; 100% of non-empty `NumType`): _qualquer, mais, cada, alguns, algumas, todos, todos_os, muitos, vários, todo_
* `EMPTY` (32073): _o, a, os, as, um, uma, sua, seu, este, esta_

`NumType` seems to be **lexical feature** of `DET`. 100% lemmas (34) occur only with one value of `NumType`.

### `ADJ`

791 [pt-pos/ADJ]() tokens (7% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: `Number=Sing` (670; 85%), `Gender=Masc` (464; 59%)

`ADJ` tokens may have the following values of `NumType`:

* `Card` (1; 0% of non-empty `NumType`): _primeiro_
* `Ord` (790; 100% of non-empty `NumType`): _primeiro, primeira, último, última, segundo, últimos, segunda, primeiros, terceiro, terceira_
* `EMPTY` (9917): _maior, novo, grande, nova, grandes, melhor, nacional, mundial, responsável, boa_

<table>
  <tr><th>Paradigm <i>primeiro</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><i>primeiro</i></td><td><i>primeiro</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><i>primeiros</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><i>primeira, primeiro</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><i>primeiras</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td></td><td><i>primeira</i></td></tr>
</table>

`NumType` seems to be **lexical feature** of `ADJ`. 99% lemmas (82) occur only with one value of `NumType`.

### `PRON`

458 [pt-pos/PRON]() tokens (6% of all `PRON` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PRON` and `NumType` co-occurred: `Reflex=EMPTY` (458; 100%), `Case=EMPTY` (458; 100%), `Person=EMPTY` (458; 100%), `PronType=Ind,Neg,Tot` (434; 95%), `Gender=Masc` (388; 85%), `Number=Sing` (293; 64%)

`PRON` tokens may have the following values of `NumType`:

* `Card` (458; 100% of non-empty `NumType`): _tudo, nada, todos, mais, pouco, muito, algo, alguns, muitos, ambos_
* `EMPTY` (6648): _que, se, o, ele, o_que, isso, os, quem, lhe, a_

`NumType` seems to be **lexical feature** of `PRON`. 100% lemmas (34) occur only with one value of `NumType`.

### `NOUN`

4 [pt-pos/NOUN]() tokens (0% of all `NOUN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NOUN` and `NumType` co-occurred: `Gender=Masc` (3; 75%), `Number=Plur` (3; 75%)

`NOUN` tokens may have the following values of `NumType`:

* `Card` (3; 75% of non-empty `NumType`): _mil, 66'_
* `Ord` (1; 25% of non-empty `NumType`): _2ª_
* `EMPTY` (39888): _anos, milhões, ano, dia, presidente, país, US$, pessoas, contos, por_cento_

### `PROPN`

1 [pt-pos/PROPN]() tokens (0% of all `PROPN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PROPN` and `NumType` co-occurred: `Gender=Masc` (1; 100%), `Number=Plur` (1; 100%)

`PROPN` tokens may have the following values of `NumType`:

* `Card` (1; 100% of non-empty `NumType`): _Doze_
* `EMPTY` (11705): _Portugal, São_Paulo, Brasil, Governo, EUA, Estados_Unidos, PÚBLICO, Lisboa, Folha, Rio_

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`: `NUM --[compound]--> NUM` (130; 100%), `NUM --[conj]--> NUM` (96; 99%), `ADJ --[conj]--> ADJ` (17; 89%), `DET --[advmod]--> ADV` (4; 57%), `PRON --[conj]--> PRON` (3; 100%), `DET --[nummod]--> NUM` (3; 60%), `NOUN --[compound]--> NUM` (2; 100%), `ADV --[cop]--> PRON` (1; 100%), `ADV --[dobj]--> PRON` (1; 100%), `NUM --[case]--> ADV` (1; 100%).



--------------------------------------------------------------------------------

## Person

## Treebank Statistics

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.
Some words have combined values of the feature; 1 combinations have been observed: `1|3`.

20191 tokens (9%) have a non-empty value of `Person`.
4600 types (17%) occur at least once with a non-empty value of `Person`.
1344 lemmas (7%) occur at least once with a non-empty value of `Person`.
The feature is used with 5 part-of-speech tags: [pt-pos/VERB]() (16166; 8% tokens), [pt-pos/PRON]() (2737; 1% tokens), [pt-pos/DET]() (1279; 1% tokens), [pt-pos/AUX]() (8; 0% tokens), [pt-pos/INTJ]() (1; 0% tokens).

### `VERB`

16166 [pt-pos/VERB]() tokens (63% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: `Gender=EMPTY` (16165; 100%), `VerbForm=Fin` (15776; 98%), `Mood=Ind` (14447; 89%), `Number=Sing` (12228; 76%), `Tense=Pres` (8523; 53%)

`VERB` tokens may have the following values of `Person`:

* `1` (896; 6% of non-empty `Person`): _tenho, estamos, temos, vamos, sei, acho, estou, fui, podemos, somos_
* `1,3` (49; 0% of non-empty `Person`): _veja, esqueça, leia, Confira, cite, era, ligue, seria, Aventure-, Desculpe-_
* `2` (19; 0% of non-empty `Person`): _Sê, move, Compreendeste, Criaste, Olha, Rodeaste-, Roubarás, Roubaste, Saiba, chamais_
* `3` (15202; 94% of non-empty `Person`): _é, foi, tem, está, são, há, disse, foram, vai, era_
* `EMPTY` (9674): _ser, ter, fazer, ver, passado, dar, feito, passada, dizer, estar_

<table>
  <tr><th>Paradigm <i>ser</i></th><th><tt>1</tt></th><th><tt>1,3</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><a href="Hyph.html">Hyph</a>=Yes|<a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td></td><td></td><td><i>seja-</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Number.html">Number</a>=Sing|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><i>seria</i></td><td></td><td><i>seria</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Number.html">Number</a>=Plur|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td></td><td></td><td><i>seriam</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Imp|<a href="Number.html">Number</a>=Sing|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td></td><td><i>Sê</i></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>serei</i></td><td></td><td></td><td><i>será</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Inf</tt></td><td></td><td></td><td></td><td><i>será</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>era</i></td><td><i>era</i></td><td></td><td><i>era</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>fui</i></td><td></td><td></td><td><i>foi, foram</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Pqp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>fora</i></td><td></td><td></td><td><i>fora</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Pres|<a href="Typo.html">Typo</a>=Yes|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td></td><td></td><td><i>çe</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>sou, sô</i></td><td></td><td></td><td><i>é, eis, é-, Sou</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>seremos</i></td><td></td><td></td><td><i>serão</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Tense.html">Tense</a>=Imp,Pqp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td></td><td></td><td><i>foram</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td></td><td></td><td><i>eram</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>fomos</i></td><td></td><td></td><td><i>foram</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Tense.html">Tense</a>=Pqp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td></td><td></td><td><i>foram</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>somos</i></td><td></td><td></td><td><i>são</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><i>for</i></td><td></td><td><i>for, fôr</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><i>fosse</i></td><td><i>fosse</i></td><td></td><td><i>fosse</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td></td><td></td><td><i>seja</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Plur|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td></td><td></td><td><i>forem</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Plur|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td></td><td></td><td><i>fossem</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Plur|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td></td><td></td><td><i>sejam</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="VerbForm.html">VerbForm</a>=Inf</tt></td><td></td><td></td><td></td><td><i>ser</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="VerbForm.html">VerbForm</a>=Inf</tt></td><td><i>sermos</i></td><td></td><td></td><td><i>serem</i></td></tr>
</table>

### `PRON`

2737 [pt-pos/PRON]() tokens (39% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: `PronType=Prs` (2732; 100%), `Reflex=EMPTY` (1957; 72%), `Case=Acc` (1891; 69%), `Number=Sing` (1737; 63%), `Gender=Masc` (1468; 54%)

`PRON` tokens may have the following values of `Person`:

* `1` (320; 12% of non-empty `Person`): _eu, me, nos, nós, mim, meus, nos*, nossos, me-, meu_
* `2` (9; 0% of non-empty `Person`): _te, ti, vos, vós_
* `3` (2408; 88% of non-empty `Person`): _se, ele, lhe, o, eles, ela, a, elas, você, lo_
* `EMPTY` (4369): _que, o, o_que, isso, quem, os, tudo, a, nada, isto_

<table>
  <tr><th>Paradigm <i>nós</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc,Dat|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td><i>nos</i></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc,Nom|<a href="Gender.html">Gender</a>=Masc|<a href="PrepCase.html">PrepCase</a>=Pre</tt></td><td><i>nós</i></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc,Nom|<a href="Gender.html">Gender</a>=Fem|<a href="PrepCase.html">PrepCase</a>=Pre</tt></td><td><i>nós</i></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc,Nom|<a href="PrepCase.html">PrepCase</a>=Pre</tt></td><td><i>nós</i></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Gender.html">Gender</a>=Masc</tt></td><td><i>nos</i></td><td><i>nos</i></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Gender.html">Gender</a>=Masc|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td><i>nos</i></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Gender.html">Gender</a>=Fem|<a href="PrepCase.html">PrepCase</a>=Pre</tt></td><td><i>nós</i></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="PrepCase.html">PrepCase</a>=Pre</tt></td><td><i>nós</i></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc</tt></td><td><i>nos</i></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td><i>nos</i></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Gender.html">Gender</a>=Masc</tt></td><td><i>nos</i></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Gender.html">Gender</a>=Masc|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td><i>nos</i></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat</tt></td><td><i>nos, nos*</i></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td><i>nos, no</i></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Gender.html">Gender</a>=Masc</tt></td><td><i>nós</i></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom</tt></td><td><i>nós</i></td><td></td></tr>
</table>

`Person` seems to be **lexical feature** of `PRON`. 94% lemmas (16) occur only with one value of `Person`.

### `DET`

1279 [pt-pos/DET]() tokens (4% of all `DET` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `DET` and `Person` co-occurred: `PronType=Prs` (1279; 100%), `Definite=EMPTY` (1279; 100%), `Number=Sing` (937; 73%), `Gender=Fem` (645; 50%)

`DET` tokens may have the following values of `Person`:

* `1` (179; 14% of non-empty `Person`): _meu, nosso, nossa, minha, nossos, nossas, minhas, meus_
* `2` (8; 1% of non-empty `Person`): _vossa, teu, vosso, seu_
* `3` (1092; 85% of non-empty `Person`): _sua, seu, seus, suas_
* `EMPTY` (31941): _o, a, os, as, um, uma, este, esta, esse, qualquer_

<table>
  <tr><th>Paradigm <i>seu</i></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td></td><td><i>seu</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td></td><td><i>seu</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing</tt></td><td><i>seu</i></td><td><i>seu</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td></td><td><i>seu</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td></td><td><i>seu</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td></td><td><i>seus</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="Number[psor].html">Number[psor]</a>=Plur|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td></td><td><i>seus</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="Number[psor].html">Number[psor]</a>=Sing</tt></td><td></td><td><i>seus</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="Number[psor].html">Number[psor]</a>=Sing|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td></td><td><i>seus</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><i>seus</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur</tt></td><td></td><td><i>sua</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Plur|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td></td><td><i>sua</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing</tt></td><td></td><td><i>sua, seu</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td></td><td><i>sua</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><i>sua</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td></td><td><i>sua</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="Number[psor].html">Number[psor]</a>=Sing</tt></td><td></td><td><i>suas</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="Number[psor].html">Number[psor]</a>=Sing|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td></td><td><i>suas</i></td></tr>
</table>

### `AUX`

8 [pt-pos/AUX]() tokens (2% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: `VerbForm=Fin` (6; 75%)

`AUX` tokens may have the following values of `Person`:

* `1` (1; 13% of non-empty `Person`): _vamos_
* `3` (7; 88% of non-empty `Person`): _dar, desencadear, está, mostrarem, são, teria, é_
* `EMPTY` (457): _ser, sido, ter, sendo, vindo, vir, continuar, passar, estar, acabar_

### `INTJ`

1 [pt-pos/INTJ]() tokens (3% of all `INTJ` tokens) have a non-empty value of `Person`.

`INTJ` tokens may have the following values of `Person`:

* `3` (1; 100% of non-empty `Person`): _viu_
* `EMPTY` (39): _não, Rarará, Adeus, Ah_bem, Ai, Alô, BINGO, Deus_me_livre, Droga, Hein_

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`: `VERB --[conj]--> VERB` (1049; 87%), `VERB --[iobj]--> PRON` (240; 64%), `VERB --[dep]--> VERB` (22; 69%), `VERB --[auxpass:reflex]--> PRON` (21; 78%), `VERB --[parataxis]--> VERB` (18; 55%), `VERB --[dep]--> PRON` (17; 89%), `VERB --[cc]--> VERB` (11; 92%), `PRON --[conj]--> PRON` (4; 80%), `VERB --[acl]--> VERB` (3; 60%).



--------------------------------------------------------------------------------

## Poss

## Treebank Statistics

This feature is universal.
It occurs with 1 different values: `Yes`.

1292 tokens (1%) have a non-empty value of `Poss`.
23 types (0%) occur at least once with a non-empty value of `Poss`.
5 lemmas (0%) occur at least once with a non-empty value of `Poss`.
The feature is used with 2 part-of-speech tags: [pt-pos/DET]() (1279; 1% tokens), [pt-pos/PRON]() (13; 0% tokens).

### `DET`

1279 [pt-pos/DET]() tokens (4% of all `DET` tokens) have a non-empty value of `Poss`.

The most frequent other feature values with which `DET` and `Poss` co-occurred: `PronType=Prs` (1279; 100%), `Definite=EMPTY` (1279; 100%), `Number=Sing` (937; 73%), `Gender=Fem` (645; 50%)

`DET` tokens may have the following values of `Poss`:

* `Yes` (1279; 100% of non-empty `Poss`): _sua, seu, seus, suas, meu, nosso, nossa, minha, nossos, nossas_
* `EMPTY` (31941): _o, a, os, as, um, uma, este, esta, esse, qualquer_

### `PRON`

13 [pt-pos/PRON]() tokens (0% of all `PRON` tokens) have a non-empty value of `Poss`.

The most frequent other feature values with which `PRON` and `Poss` co-occurred: `PronType=Prs` (13; 100%), `Case=EMPTY` (13; 100%), `Gender=Masc` (12; 92%), `Reflex=EMPTY` (10; 77%), `Person=3` (7; 54%), `Number=Sing` (7; 54%)

`PRON` tokens may have the following values of `Poss`:

* `Yes` (13; 100% of non-empty `Poss`): _seu, meus, nossos, seus, meu, nossa_
* `EMPTY` (7093): _que, se, o, ele, o_que, isso, os, quem, lhe, a_



--------------------------------------------------------------------------------

## PrepCase

## Treebank Statistics

This feature is language-specific.
It occurs with 1 different values: `Pre`.

190 tokens (0%) have a non-empty value of `PrepCase`.
12 types (0%) occur at least once with a non-empty value of `PrepCase`.
11 lemmas (0%) occur at least once with a non-empty value of `PrepCase`.
The feature is used with 1 part-of-speech tags: [pt-pos/PRON]() (190; 0% tokens).

### `PRON`

190 [pt-pos/PRON]() tokens (3% of all `PRON` tokens) have a non-empty value of `PrepCase`.

The most frequent other feature values with which `PRON` and `PrepCase` co-occurred: `PronType=Prs` (190; 100%), `Reflex=EMPTY` (174; 92%), `Person=3` (154; 81%), `Case=Acc` (119; 63%), `Number=Sing` (117; 62%), `Gender=Masc` (101; 53%)

`PRON` tokens may have the following values of `PrepCase`:

* `Pre` (190; 100% of non-empty `PrepCase`): _ele, ela, eles, mim, elas, si, nós, ti, você, vós_

`PrepCase` seems to be **lexical feature** of `PRON`. 100% lemmas (11) occur only with one value of `PrepCase`.

## Relations with Agreement in `PrepCase`

The 10 most frequent relations where parent and child node agree in `PrepCase`: `PRON --[conj]--> PRON` (1; 100%).



--------------------------------------------------------------------------------

## PronType

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

The most frequent other feature values with which `DET` and `PronType` co-occurred: `Definite=Def` (25979; 80%), `Number=Sing` (25737; 79%), `Gender=Masc` (17469; 54%)

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

The most frequent other feature values with which `PRON` and `PronType` co-occurred: `Reflex=EMPTY` (6108; 89%), `Number=Sing` (4748; 69%), `Gender=Masc` (4319; 63%), `Case=EMPTY` (4164; 60%), `Person=EMPTY` (4153; 60%)

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

The most frequent other feature values with which `ADV` and `PronType` co-occurred: `NumType=Card` (1307; 56%)

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

The most frequent other feature values with which `ADP` and `PronType` co-occurred: `AdpType=Prep` (141; 100%)

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



--------------------------------------------------------------------------------

## Reflex

## Treebank Statistics

This feature is universal.
It occurs with 1 different values: `Yes`.

1342 tokens (1%) have a non-empty value of `Reflex`.
17 types (0%) occur at least once with a non-empty value of `Reflex`.
8 lemmas (0%) occur at least once with a non-empty value of `Reflex`.
The feature is used with 2 part-of-speech tags: [pt-pos/PRON]() (782; 0% tokens), [pt-pos/DET]() (560; 0% tokens).

### `PRON`

782 [pt-pos/PRON]() tokens (11% of all `PRON` tokens) have a non-empty value of `Reflex`.

The most frequent other feature values with which `PRON` and `Reflex` co-occurred: `PronType=Prs` (782; 100%), `Case=Acc` (717; 92%), `Person=3` (690; 88%), `Number=Sing` (531; 68%), `Gender=Masc` (445; 57%)

`PRON` tokens may have the following values of `Reflex`:

* `Yes` (782; 100% of non-empty `Reflex`): _se, me, nos, si, se-, seu, te, me-, no, s_
* `EMPTY` (6324): _que, se, o, ele, o_que, isso, os, quem, lhe, a_

### `DET`

560 [pt-pos/DET]() tokens (2% of all `DET` tokens) have a non-empty value of `Reflex`.

The most frequent other feature values with which `DET` and `Reflex` co-occurred: `PronType=Prs` (560; 100%), `Definite=EMPTY` (560; 100%), `Number=Sing` (416; 74%), `Gender=Fem` (292; 52%)

`DET` tokens may have the following values of `Reflex`:

* `Yes` (560; 100% of non-empty `Reflex`): _sua, seu, seus, suas_
* `EMPTY` (32660): _o, a, os, as, um, uma, este, esta, sua, seu_



--------------------------------------------------------------------------------

## Tense

## Treebank Statistics

This feature is universal.
It occurs with 5 different values: `Fut`, `Imp`, `Past`, `Pqp`, `Pres`.
Some words have combined values of the feature; 2 combinations have been observed: `Imp|Pqp`, `Past|Pres`.

15438 tokens (7%) have a non-empty value of `Tense`.
4191 types (15%) occur at least once with a non-empty value of `Tense`.
1300 lemmas (7%) occur at least once with a non-empty value of `Tense`.
The feature is used with 3 part-of-speech tags: [pt-pos/VERB]() (15432; 7% tokens), [pt-pos/AUX]() (5; 0% tokens), [pt-pos/INTJ]() (1; 0% tokens).

### `VERB`

15432 [pt-pos/VERB]() tokens (60% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: `Gender=EMPTY` (15432; 100%), `VerbForm=Fin` (15431; 100%), `Person=3` (14511; 94%), `Mood=Ind` (14448; 94%), `Number=Sing` (11730; 76%)

`VERB` tokens may have the following values of `Tense`:

* `Fut` (973; 6% of non-empty `Tense`): _será, terá, poderá, deverá, serão, for, irá, estará, terão, deverão_
* `Imp` (1333; 9% of non-empty `Tense`): _era, tinha, estava, havia, estavam, eram, fosse, tinham, fazia, dizia_
* `Imp,Pqp` (361; 2% of non-empty `Tense`): _foram, chegaram, fizeram, tiveram, ficaram, atingiram, entraram, levaram, passaram, conseguiram_
* `Past` (4171; 27% of non-empty `Tense`): _foi, disse, foram, fez, afirmou, teve, chegou, ficou, deu, começou_
* `Past,Pres` (3; 0% of non-empty `Tense`): _conhecemos, conseguimos, decidimos_
* `Pqp` (67; 0% of non-empty `Tense`): _fora, fizera, acabara, desaparecera, dissera, foram, levara, tornara-, Nascera, Quisera_
* `Pres` (8524; 55% of non-empty `Tense`): _é, tem, está, são, há, vai, pode, estão, diz, têm_
* `EMPTY` (10408): _ser, ter, fazer, ver, seria, passado, dar, feito, dizer, estar_

<table>
  <tr><th>Paradigm <i>conseguir</i></th><th><tt>Imp,Pqp</tt></th><th><tt>Past</tt></th><th><tt>Past,Pres</tt></th><th><tt>Pres</tt></th><th><tt>Fut</tt></th><th><tt>Imp</tt></th><th><tt>Pqp</tt></th></tr>
  <tr><td><tt><a href="Hyph.html">Hyph</a>=Yes|<a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td></td><td></td><td></td><td><i>consegue-</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1,3</tt></td><td></td><td></td><td></td><td></td><td></td><td></td><td><i>conseguira</i></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1</tt></td><td></td><td><i>consegui</i></td><td></td><td><i>consigo</i></td><td></td><td><i>conseguia</i></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Typo.html">Typo</a>=Yes</tt></td><td></td><td><i>consegui</i></td><td></td><td></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td></td><td><i>conseguiu</i></td><td></td><td><i>consegue</i></td><td><i>conseguirá</i></td><td><i>conseguia</i></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=1</tt></td><td></td><td><i>conseguimos</i></td><td><i>conseguimos</i></td><td><i>conseguimos</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3</tt></td><td><i>conseguiram</i></td><td><i>conseguiram</i></td><td></td><td><i>conseguem</i></td><td><i>conseguirão</i></td><td><i>conseguiam</i></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td></td><td></td><td></td><td><i>consiga</i></td><td><i>conseguir</i></td><td><i>conseguisse</i></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3</tt></td><td></td><td></td><td></td><td><i>consigam</i></td><td><i>conseguirem</i></td><td></td><td></td></tr>
</table>

### `AUX`

5 [pt-pos/AUX]() tokens (1% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: `VerbForm=Fin` (5; 100%)

`AUX` tokens may have the following values of `Tense`:

* `Fut` (1; 20% of non-empty `Tense`): _desencadear_
* `Pres` (4; 80% of non-empty `Tense`): _está, são, vamos, é_
* `EMPTY` (460): _ser, sido, ter, sendo, vindo, vir, continuar, passar, estar, acabar_

### `INTJ`

1 [pt-pos/INTJ]() tokens (3% of all `INTJ` tokens) have a non-empty value of `Tense`.

`INTJ` tokens may have the following values of `Tense`:

* `Past` (1; 100% of non-empty `Tense`): _viu_
* `EMPTY` (39): _não, Rarará, Adeus, Ah_bem, Ai, Alô, BINGO, Deus_me_livre, Droga, Hein_

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`: `VERB --[conj]--> VERB` (843; 72%), `VERB --[dep]--> VERB` (18; 58%), `VERB --[cc]--> VERB` (10; 83%).



--------------------------------------------------------------------------------

## Typo

## Treebank Statistics

This feature is language-specific.
It occurs with 1 different values: `Yes`.

38 tokens (0%) have a non-empty value of `Typo`.
36 types (0%) occur at least once with a non-empty value of `Typo`.
36 lemmas (0%) occur at least once with a non-empty value of `Typo`.
The feature is used with 9 part-of-speech tags: [pt-pos/VERB]() (10; 0% tokens), [pt-pos/NOUN]() (8; 0% tokens), [pt-pos/ADJ]() (6; 0% tokens), [pt-pos/ADP]() (4; 0% tokens), [pt-pos/ADV]() (3; 0% tokens), [pt-pos/DET]() (3; 0% tokens), [pt-pos/PROPN]() (2; 0% tokens), [pt-pos/PRON]() (1; 0% tokens), [pt-pos/NUM]() (1; 0% tokens).

### `VERB`

10 [pt-pos/VERB]() tokens (0% of all `VERB` tokens) have a non-empty value of `Typo`.

The most frequent other feature values with which `VERB` and `Typo` co-occurred: `Number=Sing` (9; 90%), `Gender=EMPTY` (8; 80%), `Person=3` (7; 70%), `VerbForm=Fin` (7; 70%)

`VERB` tokens may have the following values of `Typo`:

* `Yes` (10; 100% of non-empty `Typo`): _abandonassse, amplida, claçando, comeu, consegui, indiferência, inugurada, pertência, reúne, çe_

`Typo` seems to be **lexical feature** of `VERB`. 100% lemmas (10) occur only with one value of `Typo`.

### `NOUN`

8 [pt-pos/NOUN]() tokens (0% of all `NOUN` tokens) have a non-empty value of `Typo`.

The most frequent other feature values with which `NOUN` and `Typo` co-occurred: `Number=Sing` (5; 63%), `Gender=Masc` (5; 63%)

`NOUN` tokens may have the following values of `Typo`:

* `Yes` (8; 100% of non-empty `Typo`): _definicão, descomprimento, dilomatas, meia-noite, mi, propietários, reprsentante, rodad_

### `ADJ`

6 [pt-pos/ADJ]() tokens (0% of all `ADJ` tokens) have a non-empty value of `Typo`.

The most frequent other feature values with which `ADJ` and `Typo` co-occurred: `Number=Sing` (5; 83%), `Gender=Masc` (4; 67%)

`ADJ` tokens may have the following values of `Typo`:

* `Yes` (6; 100% of non-empty `Typo`): _espacais, flutante, liquido, mlehor, supreendente, tradiciona_

### `ADP`

4 [pt-pos/ADP]() tokens (0% of all `ADP` tokens) have a non-empty value of `Typo`.

The most frequent other feature values with which `ADP` and `Typo` co-occurred: `AdpType=Prep` (4; 100%)

`ADP` tokens may have the following values of `Typo`:

* `Yes` (4; 100% of non-empty `Typo`): _a, com, de, em_relação_a_

### `ADV`

3 [pt-pos/ADV]() tokens (0% of all `ADV` tokens) have a non-empty value of `Typo`.

The most frequent other feature values with which `ADV` and `Typo` co-occurred: `PronType=EMPTY` (3; 100%), `NumType=EMPTY` (3; 100%)

`ADV` tokens may have the following values of `Typo`:

* `Yes` (3; 100% of non-empty `Typo`): _asim, excessivamnete, não_

### `DET`

3 [pt-pos/DET]() tokens (0% of all `DET` tokens) have a non-empty value of `Typo`.

The most frequent other feature values with which `DET` and `Typo` co-occurred: `Definite=Def` (3; 100%), `Number=Sing` (3; 100%), `PronType=Art` (3; 100%), `Gender=Fem` (2; 67%)

`DET` tokens may have the following values of `Typo`:

* `Yes` (3; 100% of non-empty `Typo`): _a, os_

### `PROPN`

2 [pt-pos/PROPN]() tokens (0% of all `PROPN` tokens) have a non-empty value of `Typo`.

The most frequent other feature values with which `PROPN` and `Typo` co-occurred: `Number=Sing` (2; 100%)

`PROPN` tokens may have the following values of `Typo`:

* `Yes` (2; 100% of non-empty `Typo`): _Carlos_Menem, Água_de_Cheiro_

### `PRON`

1 [pt-pos/PRON]() tokens (0% of all `PRON` tokens) have a non-empty value of `Typo`.

The most frequent other feature values with which `PRON` and `Typo` co-occurred: `PronType=Rel` (1; 100%), `Gender=Fem` (1; 100%), `Number=Sing` (1; 100%), `Reflex=EMPTY` (1; 100%), `Case=EMPTY` (1; 100%), `Person=EMPTY` (1; 100%)

`PRON` tokens may have the following values of `Typo`:

* `Yes` (1; 100% of non-empty `Typo`): _que_

### `NUM`

1 [pt-pos/NUM]() tokens (0% of all `NUM` tokens) have a non-empty value of `Typo`.

The most frequent other feature values with which `NUM` and `Typo` co-occurred: `Gender=Masc` (1; 100%), `NumType=Card` (1; 100%), `Number=Plur` (1; 100%)

`NUM` tokens may have the following values of `Typo`:

* `Yes` (1; 100% of non-empty `Typo`): _miul_



--------------------------------------------------------------------------------

## VerbForm

## Treebank Statistics

This feature is universal.
It occurs with 4 different values: `Fin`, `Ger`, `Inf`, `Part`.

26305 tokens (12%) have a non-empty value of `VerbForm`.
8158 types (29%) occur at least once with a non-empty value of `VerbForm`.
1988 lemmas (10%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: [pt-pos/VERB]() (25840; 12% tokens), [pt-pos/AUX]() (465; 0% tokens).

### `VERB`

25840 [pt-pos/VERB]() tokens (100% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: `Gender=EMPTY` (21647; 84%), `Person=3` (15202; 59%), `Number=Sing` (15025; 58%), `Mood=Ind` (14449; 56%)

`VERB` tokens may have the following values of `VerbForm`:

* `Fin` (15781; 61% of non-empty `VerbForm`): _é, foi, tem, está, são, há, disse, foram, vai, era_
* `Ger` (832; 3% of non-empty `VerbForm`): _tendo, sendo, passando, dando, fazendo, incluindo, ganhando, estando, dizendo, ficando_
* `Inf` (4685; 18% of non-empty `VerbForm`): _ser, ter, fazer, ver, dar, dizer, estar, falar, saber, manter_
* `Part` (4542; 18% of non-empty `VerbForm`): _feito, passado, sido, passada, feita, feitas, dito, eleito, tido, visto_

<table>
  <tr><th>Paradigm <i>ser</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th><th><tt>Ger</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><i>ser</i></td><td><i>sido</i></td><td><i>sendo</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td></td><td><i>sido</i></td><td></td></tr>
  <tr><td><tt><a href="Hyph.html">Hyph</a>=Yes</tt></td><td></td><td><i>ser-</i></td><td></td><td><i>sendo-</i></td></tr>
  <tr><td><tt><a href="Hyph.html">Hyph</a>=Yes|<a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres</tt></td><td><i>seja-</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1,3</tt></td><td><i>seria</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><i>seria</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3</tt></td><td><i>seriam</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Imp|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=2</tt></td><td><i>Sê</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1,3|<a href="Tense.html">Tense</a>=Imp</tt></td><td><i>era</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Fut</tt></td><td><i>serei</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Imp</tt></td><td><i>era</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Past</tt></td><td><i>fui</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pqp</tt></td><td><i>fora</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres</tt></td><td><i>sou, sô</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut</tt></td><td><i>será</i></td><td><i>será</i></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp</tt></td><td><i>era</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past</tt></td><td><i>foi, foram</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pqp</tt></td><td><i>fora</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres</tt></td><td><i>é, eis, é-, Sou</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="Typo.html">Typo</a>=Yes</tt></td><td><i>çe</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Fut</tt></td><td><i>seremos</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Past</tt></td><td><i>fomos</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres</tt></td><td><i>somos</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut</tt></td><td><i>serão</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp</tt></td><td><i>eram</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp,Pqp</tt></td><td><i>foram</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past</tt></td><td><i>foram</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pqp</tt></td><td><i>foram</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres</tt></td><td><i>são</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1,3|<a href="Tense.html">Tense</a>=Fut</tt></td><td><i>for</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1,3|<a href="Tense.html">Tense</a>=Imp</tt></td><td><i>fosse</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Imp</tt></td><td><i>fosse</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut</tt></td><td><i>for, fôr</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp</tt></td><td><i>fosse</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres</tt></td><td><i>seja</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut</tt></td><td><i>forem</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp</tt></td><td><i>fossem</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres</tt></td><td><i>sejam</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td></td><td><i>ser</i></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=1</tt></td><td></td><td><i>sermos</i></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3</tt></td><td></td><td><i>serem</i></td><td></td><td></td></tr>
</table>

### `AUX`

465 [pt-pos/AUX]() tokens (100% of all `AUX` tokens) have a non-empty value of `VerbForm`.

`AUX` tokens may have the following values of `VerbForm`:

* `Fin` (6; 1% of non-empty `VerbForm`): _desencadear, está, são, teria, vamos, é_
* `Ger` (22; 5% of non-empty `VerbForm`): _sendo, enchendo, sujando, vindo_
* `Inf` (323; 69% of non-empty `VerbForm`): _ser, ter, vir, continuar, passar, estar, acabar, começar, deixar, ir_
* `Part` (114; 25% of non-empty `VerbForm`): _sido, vindo, estado, convertidas, acabado, agredido, ido, ingerido, apresentada, atracado_

<table>
  <tr><th>Paradigm <i>ser</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th><th><tt>Ger</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><i>ser</i></td><td><i>sido</i></td><td><i>sendo</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td></td><td><i>sido</i></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres</tt></td><td><i>é</i></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres</tt></td><td><i>são</i></td><td></td><td></td><td></td></tr>
</table>

`VerbForm` seems to be **lexical feature** of `AUX`. 91% lemmas (62) occur only with one value of `VerbForm`.

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`: `VERB --[conj]--> VERB` (1391; 94%), `AUX --[xcomp]--> VERB` (36; 75%), `AUX --[conj]--> AUX` (31; 97%), `VERB --[dep]--> VERB` (27; 77%), `VERB --[parataxis]--> VERB` (22; 67%), `VERB --[cc]--> VERB` (13; 100%).

