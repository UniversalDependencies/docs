---
layout: feature
title: 'Tense'
shortdef: 'tense'
---

This document is a placeholder for the language-specific documentation
for `Tense`.


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

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (15432; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (15431; 100%), <tt><a href="Person.html">Person</a>=3</tt> (14511; 94%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (14448; 94%), <tt><a href="Number.html">Number</a>=Sing</tt> (11730; 76%).

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

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (5; 100%).

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

