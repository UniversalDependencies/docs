---
layout: base
title:  'Statistics of Mood in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Features: `Mood`

This feature is universal.
It occurs with 4 different values: `Imp`, `Ind`, `Opt`, `Sub`.

10996 tokens (12%) have a non-empty value of `Mood`.
2077 types (15%) occur at least once with a non-empty value of `Mood`.
1298 lemmas (13%) occur at least once with a non-empty value of `Mood`.
The feature is used with 3 part-of-speech tags: <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (7443; 8% instances), <tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (3550; 4% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (3; 0% instances).

### `VERB`

7443 <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> tokens (65% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="sv_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (6881; 92%), <tt><a href="sv_lines-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (6432; 86%), <tt><a href="sv_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (4483; 60%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (150; 2% of non-empty `Mood`): <em>låt, se, tänk, lägg, Exportera, klicka, kom, Ändra, Filtrera, Flytta</em>
* `Ind` (7284; 98% of non-empty `Mood`): <em>sa, var, hade, gick, har, kom, såg, sade, är, tog</em>
* `Opt` (1; 0% of non-empty `Mood`): <em>LEVE</em>
* `Sub` (8; 0% of non-empty `Mood`): <em>vore, förbanne, ginge, vare, vete</em>
* `EMPTY` (3953): <em>göra, ta, se, gå, komma, använda, få, bli, ha, säga</em>

<table>
  <tr><th>Paradigm <i>vara</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th><th><tt>Sub</tt></th></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>var, varade</em></td><td></td><td><em>vore, vare</em></td></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>är</em></td><td></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>Var</em></td><td></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 95% lemmas (1230) occur only with one value of `Mood`.

### `AUX`

3550 <tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> tokens (89% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="sv_lines-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (3550; 100%), <tt><a href="sv_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (3545; 100%), <tt><a href="sv_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (1787; 50%).

`AUX` tokens may have the following values of `Mood`:

* `Imp` (7; 0% of non-empty `Mood`): <em>var</em>
* `Ind` (3521; 99% of non-empty `Mood`): <em>var, är, hade, kan, har, skulle, kunde, måste, vill, kommer</em>
* `Sub` (22; 1% of non-empty `Mood`): <em>vore, måtte, finge</em>
* `EMPTY` (428): <em>vara, ha, varit, kunna, få, bli, kunnat, vilja, fått, blivit</em>

<table>
  <tr><th>Paradigm <i>vara</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th><th><tt>Sub</tt></th></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>var</em></td><td></td><td><em>vore</em></td></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>är</em></td><td></td><td><em>vore</em></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>var</em></td><td></td></tr>
</table>

### `ADJ`

3 <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `ADJ` and `Mood` co-occurred: <tt><a href="sv_lines-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (3; 100%), <tt><a href="sv_lines-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (3; 100%), <tt><a href="sv_lines-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (3; 100%), <tt><a href="sv_lines-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (3; 100%), <tt><a href="sv_lines-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (3; 100%).

`ADJ` tokens may have the following values of `Mood`:

* `Ind` (3; 100% of non-empty `Mood`): <em>dansande, framstående, framåtböjd</em>
* `EMPTY` (6244): <em>andra, själv, hela, samma, första, annat, flera, många, stor, nya</em>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<tt><a href="sv_lines-dep-conj.html">conj</a></tt>]--> VERB</tt> (1180; 84%),
<tt>VERB --[<tt><a href="sv_lines-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (537; 52%),
<tt>VERB --[<tt><a href="sv_lines-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (174; 61%),
<tt>VERB --[<tt><a href="sv_lines-dep-aux-pass.html">aux:pass</a></tt>]--> AUX</tt> (91; 74%),
<tt>VERB --[<tt><a href="sv_lines-dep-cop.html">cop</a></tt>]--> AUX</tt> (39; 67%),
<tt>VERB --[<tt><a href="sv_lines-dep-appos.html">appos</a></tt>]--> VERB</tt> (13; 59%),
<tt>VERB --[<tt><a href="sv_lines-dep-acl-cleft.html">acl:cleft</a></tt>]--> VERB</tt> (8; 73%),
<tt>VERB --[<tt><a href="sv_lines-dep-ccomp.html">ccomp</a></tt>]--> AUX</tt> (8; 57%),
<tt>AUX --[<tt><a href="sv_lines-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (6; 86%),
<tt>VERB --[<tt><a href="sv_lines-dep-dislocated.html">dislocated</a></tt>]--> VERB</tt> (6; 75%).

