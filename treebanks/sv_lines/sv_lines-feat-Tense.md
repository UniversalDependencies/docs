---
layout: base
title:  'Statistics of Tense in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Features: `Tense`

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

9036 tokens (11%) have a non-empty value of `Tense`.
1473 types (11%) occur at least once with a non-empty value of `Tense`.
999 lemmas (11%) occur at least once with a non-empty value of `Tense`.
The feature is used with 3 part-of-speech tags: <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (5869; 7% instances), <tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (3061; 4% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (106; 0% instances).

### `VERB`

5869 <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> tokens (58% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="sv_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (5869; 100%), <tt><a href="sv_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (5859; 100%), <tt><a href="sv_lines-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (5313; 91%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (3745; 64% of non-empty `Tense`): <em>var, sa, hade, gick, såg, kom, sade, fick, tog, stod</em>
* `Pres` (2124; 36% of non-empty `Tense`): <em>har, är, vet, finns, kommer, säger, ser, tror, visas, gör</em>
* `EMPTY` (4182): <em>ta, göra, se, gå, använda, få, komma, bli, ha, säga</em>

<table>
  <tr><th>Paradigm <i>säga</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td><em>säger</em></td><td><em>sa, sade</em></td></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-Voice.html">Voice</a></tt><tt>=Pass</tt></tt></td><td><em>sägs</em></td><td></td></tr>
</table>

### `AUX`

3061 <tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> tokens (89% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="sv_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (3061; 100%), <tt><a href="sv_lines-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (3061; 100%), <tt><a href="sv_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (3046; 100%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (1428; 47% of non-empty `Tense`): <em>var, hade, skulle, kunde, ville, borde, fick, vore, blev, kom</em>
* `Pres` (1633; 53% of non-empty `Tense`): <em>är, kan, har, måste, vill, ska, kommer, skall, får, bör</em>
* `EMPTY` (380): <em>vara, ha, varit, kunna, få, vilja, bli, kunnat, fått, var</em>

<table>
  <tr><th>Paradigm <i>vara</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt></tt></td><td><em>är</em></td><td><em>var</em></td></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-Mood.html">Mood</a></tt><tt>=Sub</tt></tt></td><td></td><td><em>vore</em></td></tr>
</table>

### `ADJ`

106 <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> tokens (2% of all `ADJ` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `ADJ` and `Tense` co-occurred: <tt><a href="sv_lines-feat-Case.html">Case</a></tt><tt>=Nom</tt> (106; 100%), <tt><a href="sv_lines-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (106; 100%), <tt><a href="sv_lines-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (75; 71%), <tt><a href="sv_lines-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (68; 64%), <tt><a href="sv_lines-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (65; 61%).

`ADJ` tokens may have the following values of `Tense`:

* `Past` (41; 39% of non-empty `Tense`): <em>särskilt, beredd, dolda, intresserad, bestämd, gift, komplicerad, särskild, ökad, begränsad</em>
* `Pres` (65; 61% of non-empty `Tense`): <em>följande, motsvarande, nuvarande, grundläggande, liknande, omfattande, växande, betydande, framträdande, oberoende</em>
* `EMPTY` (5435): <em>andra, själv, hela, samma, annat, första, flera, många, nya, stor</em>

`Tense` seems to be **lexical feature** of `ADJ`. 100% lemmas (36) occur only with one value of `Tense`.

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="sv_lines-dep-conj.html">conj</a></tt>]--> VERB</tt> (960; 81%),
<tt>VERB --[<tt><a href="sv_lines-dep-appos.html">appos</a></tt>]--> VERB</tt> (11; 55%),
<tt>VERB --[<tt><a href="sv_lines-dep-acl-cleft.html">acl:cleft</a></tt>]--> VERB</tt> (5; 63%),
<tt>VERB --[<tt><a href="sv_lines-dep-dislocated.html">dislocated</a></tt>]--> VERB</tt> (5; 63%),
<tt>AUX --[<tt><a href="sv_lines-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (4; 80%),
<tt>AUX --[<tt><a href="sv_lines-dep-conj.html">conj</a></tt>]--> VERB</tt> (2; 100%),
<tt>AUX --[<tt><a href="sv_lines-dep-acl-cleft.html">acl:cleft</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="sv_lines-dep-appos.html">appos</a></tt>]--> AUX</tt> (1; 100%),
<tt>VERB --[<tt><a href="sv_lines-dep-dislocated.html">dislocated</a></tt>]--> AUX</tt> (1; 100%),
<tt>VERB --[<tt><a href="sv_lines-dep-reparandum.html">reparandum</a></tt>]--> VERB</tt> (1; 100%).

