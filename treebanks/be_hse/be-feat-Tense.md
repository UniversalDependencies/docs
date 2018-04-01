---
layout: base
title:  'Statistics of Tense in UD_Belarusian'
udver: '2'
---

## Treebank Statistics: UD_Belarusian: Features: `Tense`

This feature is universal.
It occurs with 3 different values: `Fut`, `Past`, `Pres`.

738 tokens (9%) have a non-empty value of `Tense`.
496 types (16%) occur at least once with a non-empty value of `Tense`.
351 lemmas (16%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="be-pos-VERB.html">VERB</a></tt> (673; 8% instances), <tt><a href="be-pos-AUX.html">AUX</a></tt> (65; 1% instances).

### `VERB`

673 <tt><a href="be-pos-VERB.html">VERB</a></tt> tokens (80% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="be-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (584; 87%), <tt><a href="be-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (584; 87%), <tt><a href="be-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (491; 73%), <tt><a href="be-feat-Number.html">Number</a></tt><tt>=Sing</tt> (439; 65%), <tt><a href="be-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (422; 63%), <tt><a href="be-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (389; 58%), <tt><a href="be-feat-Aspect.html">Aspect</a></tt><tt>=Perf</tt> (338; 50%).

`VERB` tokens may have the following values of `Tense`:

* `Fut` (50; 7% of non-empty `Tense`): <em>пройдзе, выступіць, складзе, стане, выступяць, падрыхтуюць, абмяркуе, абмяркуюць, апынуцца, атрымае</em>
* `Past` (372; 55% of non-empty `Tense`): <em>перадаваў, паведамілі, адзначыў, заявіў, паведамляў, заклікаў, магла, маглі, прыведзены, сказала</em>
* `Pres` (251; 37% of non-empty `Tense`): <em>можа, мае, з'яўляецца, маюць, ведаю, веру, з'яўляюцца, паведамляе, перадае, плануюць</em>
* `EMPTY` (166): <em>размаўляць, Гавары, вярнуцца, працаваць, разумець, вызваліць, выйсці, выратаваць, дазволіць, займацца</em>

<table>
  <tr><th>Paradigm <i>магчы</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="be-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="be-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>магла</em></td></tr>
  <tr><td><tt><tt><a href="be-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="be-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>магу</em></td><td></td></tr>
  <tr><td><tt><tt><a href="be-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="be-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>можа</em></td><td></td></tr>
  <tr><td><tt><tt><a href="be-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="be-feat-Person.html">Person</a></tt><tt>=2</tt></tt></td><td><em>можаце</em></td><td></td></tr>
  <tr><td><tt><tt><a href="be-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>маглі</em></td></tr>
</table>

`Tense` seems to be **lexical feature** of `VERB`. 91% lemmas (321) occur only with one value of `Tense`.

### `AUX`

65 <tt><a href="be-pos-AUX.html">AUX</a></tt> tokens (96% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="be-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (65; 100%), <tt><a href="be-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (65; 100%), <tt><a href="be-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (65; 100%), <tt><a href="be-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (43; 66%), <tt><a href="be-feat-Number.html">Number</a></tt><tt>=Sing</tt> (43; 66%), <tt><a href="be-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt> (41; 63%).

`AUX` tokens may have the following values of `Tense`:

* `Fut` (24; 37% of non-empty `Tense`): <em>будзе, будуць, будзем, будзеш, буду</em>
* `Past` (31; 48% of non-empty `Tense`): <em>было, былі, была, быў</em>
* `Pres` (10; 15% of non-empty `Tense`): <em>будзе, буду, ёсць, будуць</em>
* `EMPTY` (3): <em>быць</em>

<table>
  <tr><th>Paradigm <i>быць</i></th><th><tt>Pres</tt></th><th><tt>Fut</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="be-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt>|<tt><a href="be-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="be-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td><em>быў</em></td></tr>
  <tr><td><tt><tt><a href="be-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt>|<tt><a href="be-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="be-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td><em>была</em></td></tr>
  <tr><td><tt><tt><a href="be-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt>|<tt><a href="be-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="be-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td><em>было, была</em></td></tr>
  <tr><td><tt><tt><a href="be-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt>|<tt><a href="be-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="be-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>буду</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="be-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt>|<tt><a href="be-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="be-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>будзе, ёсць</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="be-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt>|<tt><a href="be-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="be-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>будуць</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="be-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt>|<tt><a href="be-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td></td><td><em>былі</em></td></tr>
  <tr><td><tt><tt><a href="be-feat-Aspect.html">Aspect</a></tt><tt>=Perf</tt>|<tt><a href="be-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="be-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td></td><td><em>буду</em></td><td></td></tr>
  <tr><td><tt><tt><a href="be-feat-Aspect.html">Aspect</a></tt><tt>=Perf</tt>|<tt><a href="be-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="be-feat-Person.html">Person</a></tt><tt>=2</tt></tt></td><td></td><td><em>будзеш</em></td><td></td></tr>
  <tr><td><tt><tt><a href="be-feat-Aspect.html">Aspect</a></tt><tt>=Perf</tt>|<tt><a href="be-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="be-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td></td><td><em>будзе</em></td><td></td></tr>
  <tr><td><tt><tt><a href="be-feat-Aspect.html">Aspect</a></tt><tt>=Perf</tt>|<tt><a href="be-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="be-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td></td><td><em>будзем</em></td><td></td></tr>
  <tr><td><tt><tt><a href="be-feat-Aspect.html">Aspect</a></tt><tt>=Perf</tt>|<tt><a href="be-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="be-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td></td><td><em>будуць</em></td><td></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="be-dep-conj.html">conj</a></tt>]--> VERB</tt> (60; 83%),
<tt>VERB --[<tt><a href="be-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (23; 57%),
<tt>VERB --[<tt><a href="be-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (15; 60%),
<tt>VERB --[<tt><a href="be-dep-aux-pass.html">aux:pass</a></tt>]--> AUX</tt> (8; 53%),
<tt>VERB --[<tt><a href="be-dep-csubj.html">csubj</a></tt>]--> VERB</tt> (1; 100%).

