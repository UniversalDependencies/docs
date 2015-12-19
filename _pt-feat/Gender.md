---
layout: feature
title: 'Gender'
shortdef: 'gender'
---

This document is a placeholder for the language-specific documentation
for `Gender`.


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

The most frequent other feature values with which `NOUN` and `Gender` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (27881; 70%).

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

The most frequent other feature values with which `DET` and `Gender` co-occurred: <tt><a href="PronType.html">PronType</a>=Art</tt> (27864; 87%), <tt><a href="Number.html">Number</a>=Sing</tt> (25201; 79%), <tt><a href="Definite.html">Definite</a>=Def</tt> (24926; 78%).

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

The most frequent other feature values with which `PROPN` and `Gender` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (10819; 96%).

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

The most frequent other feature values with which `ADJ` and `Gender` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (7525; 71%).

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

The most frequent other feature values with which `PRON` and `Gender` co-occurred: <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (5699; 90%), <tt><a href="Number.html">Number</a>=Sing</tt> (4613; 73%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (4224; 66%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (4212; 66%).

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

The most frequent other feature values with which `VERB` and `Gender` co-occurred: <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (4193; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (4192; 100%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (4192; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Part</tt> (4191; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (2797; 67%).

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

The most frequent other feature values with which `NUM` and `Gender` co-occurred: <tt><a href="NumType.html">NumType</a>=Card</tt> (3997; 97%), <tt><a href="Number.html">Number</a>=Plur</tt> (3179; 77%).

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

The most frequent other feature values with which `SYM` and `Gender` co-occurred: <tt><a href="Number.html">Number</a>=Plur</tt> (179; 100%).

`SYM` tokens may have the following values of `Gender`:

* `Masc` (179; 100% of non-empty `Gender`): _%_

### `AUX`

32 [pt-pos/AUX]() tokens (7% of all `AUX` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `AUX` and `Gender` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Part</tt> (32; 100%).

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

The most frequent other feature values with which `ADV` and `Gender` co-occurred: <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (13; 93%), <tt><a href="NumType.html">NumType</a>=EMPTY</tt> (13; 93%).

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

The most frequent other feature values with which `ADP` and `Gender` co-occurred: <tt><a href="AdpType.html">AdpType</a>=Prep</tt> (2; 100%).

`ADP` tokens may have the following values of `Gender`:

* `Fem` (1; 50% of non-empty `Gender`): _obra_do_mestre_
* `Masc` (1; 50% of non-empty `Gender`): _sobre_
* `EMPTY` (32394): _de, em, a, para, por, com, entre, sobre, sem, até_

### `PART`

1 [pt-pos/PART]() tokens (20% of all `PART` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PART` and `Gender` co-occurred: <tt><a href="Hyph.html">Hyph</a>=Yes</tt> (1; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (1; 100%).

`PART` tokens may have the following values of `Gender`:

* `Masc` (1; 100% of non-empty `Gender`): _pós_
* `EMPTY` (4): _anti-, ex, ex-, pré-_

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`: `NOUN --[det]--> DET` (26645; 96%), `NOUN --[amod]--> ADJ` (8199; 98%), `PROPN --[det]--> DET` (4417; 93%), `NOUN --[nummod]--> NUM` (2719; 94%), `NOUN --[nmod]--> PROPN` (2364; 57%), `NOUN --[conj]--> NOUN` (1336; 60%), `PROPN --[conj]--> PROPN` (828; 74%), `PROPN --[nmod]--> NOUN` (526; 70%), `ADJ --[det]--> DET` (504; 96%), `ADJ --[conj]--> ADJ` (364; 97%).

