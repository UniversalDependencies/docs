---
layout: base
title:  'Statistics of Mood in UD_Marathi-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Marathi-UFAL: Features: `Mood`

This feature is universal.
It occurs with 4 different values: `Des`, `Imp`, `Ind`, `Sub`.

105 tokens (3%) have a non-empty value of `Mood`.
60 types (5%) occur at least once with a non-empty value of `Mood`.
42 lemmas (6%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (94; 2% instances), <tt><a href="mr_ufal-pos-AUX.html">AUX</a></tt> (11; 0% instances).

### `VERB`

94 <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> tokens (13% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="mr_ufal-feat-Aspect.html">Aspect</a></tt><tt>=EMPTY</tt> (92; 98%), <tt><a href="mr_ufal-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (88; 94%), <tt><a href="mr_ufal-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (78; 83%), <tt><a href="mr_ufal-feat-Person.html">Person</a></tt><tt>=2</tt> (68; 72%).

`VERB` tokens may have the following values of `Mood`:

* `Des` (6; 6% of non-empty `Mood`): <em>जायचे, द्यायची, व्हावयाची, शमवायची, शोधायचा, सांगायचे</em>
* `Imp` (78; 83% of non-empty `Mood`): <em>दे, जा, द्या, हो, करा, घ्या, पाठवा, सांग, करूस, जाऊ</em>
* `Ind` (2; 2% of non-empty `Mood`): <em>मरायचा, हंबरायची</em>
* `Sub` (8; 9% of non-empty `Mood`): <em>म्हणावे, द्यावे, पिकवी, फेडावे, यावे, वाचवावा, विकावी</em>
* `EMPTY` (627): <em>म्हणाला, आला, गेला, आली, म्हणाली, येत, घेऊन, बसला, विचारले, निघाला</em>

<table>
  <tr><th>Paradigm <i>देणे</i></th><th><tt>Imp</tt></th><th><tt>Sub</tt></th><th><tt>Des</tt></th></tr>
  <tr><td><tt><tt><a href="mr_ufal-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="mr_ufal-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="mr_ufal-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="mr_ufal-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt></tt></td><td></td><td></td><td><em>द्यायची</em></td></tr>
  <tr><td><tt><tt><a href="mr_ufal-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="mr_ufal-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="mr_ufal-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="mr_ufal-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>द्यावे</em></td><td></td></tr>
  <tr><td><tt><tt><a href="mr_ufal-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="mr_ufal-feat-Person.html">Person</a></tt><tt>=2</tt>|<tt><a href="mr_ufal-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>दे</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="mr_ufal-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="mr_ufal-feat-Person.html">Person</a></tt><tt>=2</tt>|<tt><a href="mr_ufal-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>द्या</em></td><td></td><td></td></tr>
</table>

### `AUX`

11 <tt><a href="mr_ufal-pos-AUX.html">AUX</a></tt> tokens (6% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="mr_ufal-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (11; 100%), <tt><a href="mr_ufal-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt> (11; 100%), <tt><a href="mr_ufal-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (11; 100%), <tt><a href="mr_ufal-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (11; 100%), <tt><a href="mr_ufal-feat-Person.html">Person</a></tt><tt>=2</tt> (9; 82%).

`AUX` tokens may have the following values of `Mood`:

* `Imp` (10; 91% of non-empty `Mood`): <em>नका, नको, नकोस</em>
* `Sub` (1; 9% of non-empty `Mood`): <em>नये</em>
* `EMPTY` (189): <em>आहे, नाही, होती, होता, होते, आहेत, नाहीत, असतो, शकत, असेल</em>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<tt><a href="mr_ufal-dep-aux.html">aux</a></tt>]--> AUX</tt> (10; 71%).

