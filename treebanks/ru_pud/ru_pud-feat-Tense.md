---
layout: base
title:  'Statistics of Tense in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Features: `Tense`

This feature is universal.
It occurs with 3 different values: `Fut`, `Past`, `Pres`.

2034 tokens (11%) have a non-empty value of `Tense`.
1292 types (17%) occur at least once with a non-empty value of `Tense`.
768 lemmas (15%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1777; 9% instances), <tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (257; 1% instances).

### `VERB`

1777 <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> tokens (84% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="ru_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1349; 76%), <tt><a href="ru_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (1349; 76%), <tt><a href="ru_pud-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (1217; 68%), <tt><a href="ru_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1174; 66%), <tt><a href="ru_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (1136; 64%), <tt><a href="ru_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (966; 54%), <tt><a href="ru_pud-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt> (916; 52%).

`VERB` tokens may have the following values of `Tense`:

* `Fut` (45; 3% of non-empty `Tense`): <em>придется, станет, повлияет, получит, Введут, войдет, выдадут, замедлят, исчезнут, клянутся</em>
* `Past` (1080; 61% of non-empty `Tense`): <em>сказал, стало, заявил, стал, сказала, получили, принял, начал, стали, мог</em>
* `Pres` (652; 37% of non-empty `Tense`): <em>является, может, говорит, могут, находится, имеет, нет, работает, составляет, являются</em>
* `EMPTY` (338): <em>можно, сделать, получить, привести, вернуться, найти, стать, надо, остановить, покинуть</em>

<table>
  <tr><th>Paradigm <i>мочь</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="ru_pud-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ru_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>мог</em></td></tr>
  <tr><td><tt><tt><a href="ru_pud-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ru_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>могла</em></td></tr>
  <tr><td><tt><tt><a href="ru_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ru_pud-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>могу</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ru_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ru_pud-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>может</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ru_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ru_pud-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>можем</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ru_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ru_pud-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>могут</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ru_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>могли</em></td></tr>
</table>

### `AUX`

257 <tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> tokens (87% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="ru_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (257; 100%), <tt><a href="ru_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (253; 98%), <tt><a href="ru_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (253; 98%), <tt><a href="ru_pud-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt> (219; 85%), <tt><a href="ru_pud-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (206; 80%), <tt><a href="ru_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (193; 75%).

`AUX` tokens may have the following values of `Tense`:

* `Fut` (38; 15% of non-empty `Tense`): <em>будет, будут, буду</em>
* `Past` (202; 79% of non-empty `Tense`): <em>был, было, были, была</em>
* `Pres` (17; 7% of non-empty `Tense`): <em>есть, будучи</em>
* `EMPTY` (39): <em>бы, быть, будь</em>

<table>
  <tr><th>Paradigm <i>быть</i></th><th><tt>Pres</tt></th><th><tt>Fut</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="ru_pud-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt>|<tt><a href="ru_pud-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ru_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ru_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ru_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td></td><td><em>был</em></td></tr>
  <tr><td><tt><tt><a href="ru_pud-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt>|<tt><a href="ru_pud-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ru_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ru_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ru_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td></td><td><em>была</em></td></tr>
  <tr><td><tt><tt><a href="ru_pud-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt>|<tt><a href="ru_pud-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="ru_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ru_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ru_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td></td><td><em>было</em></td></tr>
  <tr><td><tt><tt><a href="ru_pud-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt>|<tt><a href="ru_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ru_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ru_pud-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="ru_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>есть</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="ru_pud-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt>|<tt><a href="ru_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ru_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ru_pud-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="ru_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>есть</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="ru_pud-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt>|<tt><a href="ru_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ru_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ru_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td></td><td><em>были</em></td></tr>
  <tr><td><tt><tt><a href="ru_pud-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt>|<tt><a href="ru_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Conv</tt></tt></td><td><em>будучи</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="ru_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ru_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ru_pud-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="ru_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>буду</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ru_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ru_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ru_pud-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="ru_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>будет</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ru_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ru_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ru_pud-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="ru_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>будут</em></td><td></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="ru_pud-dep-conj.html">conj</a></tt>]--> VERB</tt> (165; 85%),
<tt>VERB --[<tt><a href="ru_pud-dep-aux-pass.html">aux:pass</a></tt>]--> AUX</tt> (112; 88%),
<tt>VERB --[<tt><a href="ru_pud-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (83; 61%),
<tt>VERB --[<tt><a href="ru_pud-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (41; 51%),
<tt>AUX --[<tt><a href="ru_pud-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (3; 75%),
<tt>VERB --[<tt><a href="ru_pud-dep-conj.html">conj</a></tt>]--> AUX</tt> (3; 75%).

