---
layout: base
title:  'Statistics of Tense in UD_Danish-DDT'
udver: '2'
---

## Treebank Statistics: UD_Danish-DDT: Features: `Tense`

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

12434 tokens (12%) have a non-empty value of `Tense`.
2418 types (14%) occur at least once with a non-empty value of `Tense`.
1316 lemmas (10%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt> (8002; 8% instances), <tt><a href="da_ddt-pos-AUX.html">AUX</a></tt> (4432; 4% instances).

### `VERB`

8002 <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt> tokens (73% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="da_ddt-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (6122; 77%), <tt><a href="da_ddt-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (5977; 75%), <tt><a href="da_ddt-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (5734; 72%), <tt><a href="da_ddt-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (5734; 72%), <tt><a href="da_ddt-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (5461; 68%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (4010; 50% of non-empty `Tense`): <em>var, fik, sagde, blev, havde, gik, kom, fået, været, blevet</em>
* `Pres` (3992; 50% of non-empty `Tense`): <em>er, har, siger, får, bliver, kommer, går, ved, gør, mener</em>
* `EMPTY` (2896): <em>få, se, gå, have, komme, blive, være, gøre, tage, finde</em>

<table>
  <tr><th>Paradigm <i>være</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="da_ddt-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="da_ddt-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="da_ddt-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt></tt></td><td></td><td><em>været</em></td></tr>
  <tr><td><tt><tt><a href="da_ddt-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="da_ddt-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt>|<tt><a href="da_ddt-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td><em>er</em></td><td><em>var</em></td></tr>
</table>

### `AUX`

4432 <tt><a href="da_ddt-pos-AUX.html">AUX</a></tt> tokens (94% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="da_ddt-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (4276; 96%), <tt><a href="da_ddt-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (4276; 96%), <tt><a href="da_ddt-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (4276; 96%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (1186; 27% of non-empty `Tense`): <em>var, blev, kunne, havde, været, skulle, ville, blevet, måtte, kunnet</em>
* `Pres` (3246; 73% of non-empty `Tense`): <em>er, har, kan, skal, vil, må, bliver, bør, tør, ka'</em>
* `EMPTY` (298): <em>være, have, blive, kunne, skulle, turde, ville, ku', måtte</em>

<table>
  <tr><th>Paradigm <i>være</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="da_ddt-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="da_ddt-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="da_ddt-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt></tt></td><td></td><td><em>været</em></td></tr>
  <tr><td><tt><tt><a href="da_ddt-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="da_ddt-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt>|<tt><a href="da_ddt-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td><em>er</em></td><td><em>var</em></td></tr>
  <tr><td><tt><tt><a href="da_ddt-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt></tt></td><td><em>værende</em></td><td></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="da_ddt-dep-conj.html">conj</a></tt>]--> VERB</tt> (686; 72%),
<tt>VERB --[<tt><a href="da_ddt-dep-dep.html">dep</a></tt>]--> VERB</tt> (15; 52%),
<tt>VERB --[<tt><a href="da_ddt-dep-obl.html">obl</a></tt>]--> VERB</tt> (4; 57%),
<tt>VERB --[<tt><a href="da_ddt-dep-compound-prt.html">compound:prt</a></tt>]--> VERB</tt> (2; 67%),
<tt>VERB --[<tt><a href="da_ddt-dep-obl-lmod.html">obl:lmod</a></tt>]--> VERB</tt> (1; 100%).

