---
layout: base
title:  'Statistics of Tense in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Features: `Tense`

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

10389 tokens (11%) have a non-empty value of `Tense`.
1638 types (11%) occur at least once with a non-empty value of `Tense`.
1119 lemmas (11%) occur at least once with a non-empty value of `Tense`.
The feature is used with 3 part-of-speech tags: <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (6735; 7% instances), <tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (3536; 4% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (118; 0% instances).

### `VERB`

6735 <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> tokens (59% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="sv_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (6732; 100%), <tt><a href="sv_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (6726; 100%), <tt><a href="sv_lines-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (6102; 91%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (4485; 67% of non-empty `Tense`): <em>sa, var, hade, gick, kom, såg, sade, tog, fanns, fick</em>
* `Pres` (2250; 33% of non-empty `Tense`): <em>har, är, finns, vet, kommer, säger, gör, ser, tror, visas</em>
* `EMPTY` (4661): <em>ta, göra, se, gå, komma, använda, få, bli, ha, ge</em>

<table>
  <tr><th>Paradigm <i>säga</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td><em>säger</em></td><td><em>sa, sade</em></td></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-Voice.html">Voice</a></tt><tt>=Pass</tt></tt></td><td><em>sägs</em></td><td></td></tr>
</table>

### `AUX`

3536 <tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> tokens (89% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="sv_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (3536; 100%), <tt><a href="sv_lines-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (3536; 100%), <tt><a href="sv_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (3516; 99%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (1787; 51% of non-empty `Tense`): <em>var, hade, skulle, kunde, ville, borde, fick, vore, blev, kom</em>
* `Pres` (1749; 49% of non-empty `Tense`): <em>är, kan, har, måste, vill, kommer, ska, skall, får, bör</em>
* `EMPTY` (442): <em>vara, ha, varit, kunna, få, bli, kunnat, vilja, fått, blivit</em>

<table>
  <tr><th>Paradigm <i>vara</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt></tt></td><td><em>är</em></td><td><em>var</em></td></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-Mood.html">Mood</a></tt><tt>=Sub</tt></tt></td><td><em>vore</em></td><td><em>vore</em></td></tr>
</table>

### `ADJ`

118 <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> tokens (2% of all `ADJ` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `ADJ` and `Tense` co-occurred: <tt><a href="sv_lines-feat-Case.html">Case</a></tt><tt>=Nom</tt> (118; 100%), <tt><a href="sv_lines-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (118; 100%), <tt><a href="sv_lines-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (81; 69%), <tt><a href="sv_lines-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (72; 61%), <tt><a href="sv_lines-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (69; 58%).

`ADJ` tokens may have the following values of `Tense`:

* `Past` (49; 42% of non-empty `Tense`): <em>särskilt, beredd, dolda, intresserad, bestämd, gift, komplicerad, motsatta, särskild, ökad</em>
* `Pres` (69; 58% of non-empty `Tense`): <em>följande, motsvarande, nuvarande, grundläggande, liknande, omfattande, avgörande, växande, betydande, framträdande</em>
* `EMPTY` (6129): <em>andra, själv, hela, samma, första, annat, flera, många, stor, nya</em>

`Tense` seems to be **lexical feature** of `ADJ`. 100% lemmas (40) occur only with one value of `Tense`.

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="sv_lines-dep-conj.html">conj</a></tt>]--> VERB</tt> (1102; 82%),
<tt>VERB --[<tt><a href="sv_lines-dep-appos.html">appos</a></tt>]--> VERB</tt> (10; 56%),
<tt>VERB --[<tt><a href="sv_lines-dep-ccomp.html">ccomp</a></tt>]--> AUX</tt> (8; 57%),
<tt>VERB --[<tt><a href="sv_lines-dep-acl-cleft.html">acl:cleft</a></tt>]--> VERB</tt> (7; 64%),
<tt>AUX --[<tt><a href="sv_lines-dep-conj.html">conj</a></tt>]--> VERB</tt> (4; 80%),
<tt>AUX --[<tt><a href="sv_lines-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (4; 67%),
<tt>VERB --[<tt><a href="sv_lines-dep-dislocated.html">dislocated</a></tt>]--> VERB</tt> (4; 57%),
<tt>VERB --[<tt><a href="sv_lines-dep-appos.html">appos</a></tt>]--> AUX</tt> (1; 100%),
<tt>VERB --[<tt><a href="sv_lines-dep-parataxis.html">parataxis</a></tt>]--> AUX</tt> (1; 100%),
<tt>VERB --[<tt><a href="sv_lines-dep-reparandum.html">reparandum</a></tt>]--> VERB</tt> (1; 100%).

