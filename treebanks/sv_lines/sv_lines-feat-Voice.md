---
layout: base
title:  'Statistics of Voice in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Features: `Voice`

This feature is universal.
It occurs with 2 different values: `Act`, `Pass`.

13330 tokens (17%) have a non-empty value of `Voice`.
3026 types (23%) occur at least once with a non-empty value of `Voice`.
1506 lemmas (17%) occur at least once with a non-empty value of `Voice`.
The feature is used with 3 part-of-speech tags: <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (9895; 12% instances), <tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (3434; 4% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).

### `VERB`

9895 <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> tokens (98% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="sv_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (6269; 63%), <tt><a href="sv_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (5891; 60%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (8833; 89% of non-empty `Voice`): <em>var, har, sa, hade, gick, kom, såg, sade, är, ta</em>
* `Pass` (1062; 11% of non-empty `Voice`): <em>visas, kändes, används, tvungen, hördes, flyttas, taget, tycktes, skapats, talas</em>
* `EMPTY` (159): <em>finns, fanns, finnas, beroende, närvarande, taget, förfogande, följande, gillande, gående</em>

<table>
  <tr><th>Paradigm <i>säga</i></th><th><tt>Act</tt></th><th><tt>Pass</tt></th></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-Mood.html">Mood</a></tt><tt>=Imp</tt>|<tt><a href="sv_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>säg</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="sv_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="sv_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>sa, sade</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="sv_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="sv_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>säger</em></td><td><em>sägs</em></td></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="sv_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Inf</tt></tt></td><td></td><td><em>sagt</em></td></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="sv_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt></tt></td><td></td><td><em>sagt</em></td></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Inf</tt></tt></td><td><em>säga</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Sup</tt></tt></td><td><em>sagt</em></td><td><em>sagts</em></td></tr>
</table>

### `AUX`

3434 <tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="sv_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (3069; 89%), <tt><a href="sv_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (3051; 89%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (3433; 100% of non-empty `Voice`): <em>är, var, hade, kan, har, skulle, måste, kunde, vara, vill</em>
* `Pass` (1; 0% of non-empty `Voice`): <em>ombedd</em>
* `EMPTY` (7): <em>höll, haft, råkar, skola</em>

`Voice` seems to be **lexical feature** of `AUX`. 100% lemmas (13) occur only with one value of `Voice`.

### `ADJ`

1 <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `ADJ` and `Voice` co-occurred: <tt><a href="sv_lines-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="sv_lines-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="sv_lines-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="sv_lines-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="sv_lines-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (1; 100%).

`ADJ` tokens may have the following values of `Voice`:

* `Act` (1; 100% of non-empty `Voice`): <em>dansande</em>
* `EMPTY` (5540): <em>andra, själv, hela, samma, annat, första, flera, många, nya, stor</em>

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<tt><a href="sv_lines-dep-aux.html">aux</a></tt>]--> AUX</tt> (1701; 89%),
<tt>VERB --[<tt><a href="sv_lines-dep-conj.html">conj</a></tt>]--> VERB</tt> (1410; 90%),
<tt>VERB --[<tt><a href="sv_lines-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (883; 80%),
<tt>VERB --[<tt><a href="sv_lines-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (533; 79%),
<tt>VERB --[<tt><a href="sv_lines-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (461; 84%),
<tt>VERB --[<tt><a href="sv_lines-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (197; 95%),
<tt>VERB --[<tt><a href="sv_lines-dep-csubj.html">csubj</a></tt>]--> VERB</tt> (63; 90%),
<tt>VERB --[<tt><a href="sv_lines-dep-appos.html">appos</a></tt>]--> VERB</tt> (23; 85%),
<tt>VERB --[<tt><a href="sv_lines-dep-ccomp.html">ccomp</a></tt>]--> AUX</tt> (11; 92%),
<tt>VERB --[<tt><a href="sv_lines-dep-advcl.html">advcl</a></tt>]--> AUX</tt> (10; 91%).

