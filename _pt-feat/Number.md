---
layout: feature
title: 'Number'
shortdef: 'number'
---

This document is a placeholder for the language-specific documentation
for `Number`.


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

The most frequent other feature values with which `NOUN` and `Number` co-occurred: <tt><a href="Gender.html">Gender</a>=Masc</tt> (21662; 54%).

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

The most frequent other feature values with which `DET` and `Number` co-occurred: <tt><a href="PronType.html">PronType</a>=Art</tt> (29062; 87%), <tt><a href="Definite.html">Definite</a>=Def</tt> (26123; 79%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (17868; 54%).

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

The most frequent other feature values with which `VERB` and `Number` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (16166; 79%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (15776; 77%), <tt><a href="Person.html">Person</a>=3</tt> (15202; 75%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (14447; 71%).

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

The most frequent other feature values with which `PROPN` and `Number` co-occurred: <tt><a href="Gender.html">Gender</a>=Masc</tt> (7569; 65%).

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

The most frequent other feature values with which `ADJ` and `Number` co-occurred: <tt><a href="Gender.html">Gender</a>=Masc</tt> (5849; 55%).

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

The most frequent other feature values with which `PRON` and `Number` co-occurred: <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (5983; 89%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (4461; 66%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (4328; 64%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (4316; 64%).

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

The most frequent other feature values with which `NUM` and `Number` co-occurred: <tt><a href="NumType.html">NumType</a>=Card</tt> (4041; 97%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (3419; 82%).

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

The most frequent other feature values with which `SYM` and `Number` co-occurred: <tt><a href="Gender.html">Gender</a>=Masc</tt> (179; 100%).

`SYM` tokens may have the following values of `Number`:

* `Plur` (179; 100% of non-empty `Number`): _%_

### `AUX`

40 [pt-pos/AUX]() tokens (9% of all `AUX` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `AUX` and `Number` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Part</tt> (32; 80%).

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

The most frequent other feature values with which `ADV` and `Number` co-occurred: <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (13; 93%), <tt><a href="NumType.html">NumType</a>=EMPTY</tt> (13; 93%).

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

The most frequent other feature values with which `ADP` and `Number` co-occurred: <tt><a href="AdpType.html">AdpType</a>=Prep</tt> (2; 100%).

`ADP` tokens may have the following values of `Number`:

* `Sing` (2; 100% of non-empty `Number`): _obra_do_mestre, sobre_
* `EMPTY` (32394): _de, em, a, para, por, com, entre, sobre, sem, até_

### `PART`

1 [pt-pos/PART]() tokens (20% of all `PART` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PART` and `Number` co-occurred: <tt><a href="Hyph.html">Hyph</a>=Yes</tt> (1; 100%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (1; 100%).

`PART` tokens may have the following values of `Number`:

* `Sing` (1; 100% of non-empty `Number`): _pós_
* `EMPTY` (4): _anti-, ex, ex-, pré-_

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`: `NOUN --[det]--> DET` (27628; 100%), `NOUN --[amod]--> ADJ` (8213; 98%), `NOUN --[nmod]--> NOUN` (7068; 61%), `VERB --[nsubj]--> NOUN` (4869; 95%), `PROPN --[det]--> DET` (4737; 99%), `NOUN --[acl]--> VERB` (3540; 78%), `NOUN --[nmod]--> PROPN` (3259; 79%), `NOUN --[nummod]--> NUM` (2553; 88%), `VERB --[nsubj]--> PRON` (2552; 88%), `VERB --[nsubj]--> PROPN` (1955; 93%).

