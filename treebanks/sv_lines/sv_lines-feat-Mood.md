---
layout: base
title:  'Statistics of Mood in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Features: `Mood`

This feature is universal.
It occurs with 4 different values: `Imp`, `Ind`, `Opt`, `Sub`.

9618 tokens (12%) have a non-empty value of `Mood`.
1892 types (15%) occur at least once with a non-empty value of `Mood`.
1187 lemmas (13%) occur at least once with a non-empty value of `Mood`.
The feature is used with 3 part-of-speech tags: <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (6543; 8% instances), <tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (3074; 4% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).

### `VERB`

6543 <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> tokens (65% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="sv_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (6012; 92%), <tt><a href="sv_lines-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (5621; 86%), <tt><a href="sv_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (3745; 57%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (141; 2% of non-empty `Mood`): <em>låt, tänk, lägg, Exportera, Se, klicka, kom, Ändra, Filtrera, Flytta</em>
* `Ind` (6390; 98% of non-empty `Mood`): <em>var, har, sa, hade, gick, såg, kom, sade, är, vet</em>
* `Opt` (1; 0% of non-empty `Mood`): <em>LEVE</em>
* `Sub` (11; 0% of non-empty `Mood`): <em>vore, vare, förbanne, ginge, vete</em>
* `EMPTY` (3508): <em>göra, ta, se, gå, använda, få, komma, bli, säga, ha</em>

<table>
  <tr><th>Paradigm <i>gå</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th><th><tt>Sub</tt></th></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>gick</em></td><td></td><td><em>ginge</em></td></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>går</em></td><td></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>gå</em></td><td></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 95% lemmas (1123) occur only with one value of `Mood`.

### `AUX`

3074 <tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> tokens (89% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="sv_lines-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (3073; 100%), <tt><a href="sv_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (3069; 100%), <tt><a href="sv_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (1633; 53%).

`AUX` tokens may have the following values of `Mood`:

* `Imp` (6; 0% of non-empty `Mood`): <em>var</em>
* `Ind` (3051; 99% of non-empty `Mood`): <em>är, var, hade, kan, har, skulle, måste, kunde, vill, ska</em>
* `Sub` (17; 1% of non-empty `Mood`): <em>vore, måtte, finge</em>
* `EMPTY` (367): <em>vara, ha, varit, kunna, få, vilja, bli, kunnat, fått, blivit</em>

<table>
  <tr><th>Paradigm <i>vara</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th><th><tt>Sub</tt></th></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>var</em></td><td></td><td><em>vore</em></td></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>är</em></td><td></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>var</em></td><td></td></tr>
</table>

### `ADJ`

1 <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `ADJ` and `Mood` co-occurred: <tt><a href="sv_lines-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="sv_lines-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="sv_lines-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="sv_lines-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="sv_lines-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (1; 100%).

`ADJ` tokens may have the following values of `Mood`:

* `Ind` (1; 100% of non-empty `Mood`): <em>dansande</em>
* `EMPTY` (5540): <em>andra, själv, hela, samma, annat, första, flera, många, nya, stor</em>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<tt><a href="sv_lines-dep-conj.html">conj</a></tt>]--> VERB</tt> (1033; 83%),
<tt>VERB --[<tt><a href="sv_lines-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (474; 51%),
<tt>VERB --[<tt><a href="sv_lines-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (117; 57%),
<tt>VERB --[<tt><a href="sv_lines-dep-aux-pass.html">aux:pass</a></tt>]--> AUX</tt> (81; 74%),
<tt>VERB --[<tt><a href="sv_lines-dep-cop.html">cop</a></tt>]--> AUX</tt> (37; 70%),
<tt>VERB --[<tt><a href="sv_lines-dep-appos.html">appos</a></tt>]--> VERB</tt> (15; 63%),
<tt>VERB --[<tt><a href="sv_lines-dep-acl-cleft.html">acl:cleft</a></tt>]--> VERB</tt> (6; 75%),
<tt>VERB --[<tt><a href="sv_lines-dep-dislocated.html">dislocated</a></tt>]--> VERB</tt> (6; 67%),
<tt>AUX --[<tt><a href="sv_lines-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (5; 100%),
<tt>VERB --[<tt><a href="sv_lines-dep-acl-relcl.html">acl:relcl</a></tt>]--> VERB</tt> (4; 67%).

