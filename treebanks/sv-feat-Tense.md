---
layout: base
title:  'Statistics of Tense in UD_Swedish'
udver: '2'
---

## Treebank Statistics: UD_Swedish: Features: `Tense`

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

11123 tokens (11%) have a non-empty value of `Tense`.
2200 types (15%) occur at least once with a non-empty value of `Tense`.
1381 lemmas (13%) occur at least once with a non-empty value of `Tense`.
The feature is used with 3 part-of-speech tags: <tt><a href="sv-pos-VERB.html">VERB</a></tt> (5779; 6% instances), <tt><a href="sv-pos-AUX.html">AUX</a></tt> (3780; 4% instances), <tt><a href="sv-pos-ADJ.html">ADJ</a></tt> (1564; 2% instances).

### `VERB`

5779 <tt><a href="sv-pos-VERB.html">VERB</a></tt> tokens (58% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="sv-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (5730; 99%), <tt><a href="sv-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (5722; 99%), <tt><a href="sv-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (4613; 80%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (733; 13% of non-empty `Tense`): <em>blev, fick, hade, var, började, gjorde, kom, gick, fanns, gav</em>
* `Pres` (5046; 87% of non-empty `Tense`): <em>har, finns, är, blir, får, gäller, ger, går, kommer, gör</em>
* `EMPTY` (4187): <em>få, ha, se, ta, ge, bli, göra, gå, komma, fått</em>

<table>
  <tr><th>Paradigm <i>ha</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt></tt></td><td><em>har</em></td><td><em>hade</em></td></tr>
</table>

### `AUX`

3780 <tt><a href="sv-pos-AUX.html">AUX</a></tt> tokens (90% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="sv-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (3780; 100%), <tt><a href="sv-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (3780; 100%), <tt><a href="sv-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (3772; 100%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (366; 10% of non-empty `Tense`): <em>skulle, var, kunde, hade, borde, ville, fick, torde, vore, blev</em>
* `Pres` (3414; 90% of non-empty `Tense`): <em>är, kan, har, måste, skall, ska, kommer, får, bör, vill</em>
* `EMPTY` (406): <em>vara, kunna, varit, få, ha, bli, kunnat, behöva, fått, kommit</em>

<table>
  <tr><th>Paradigm <i>vara</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="sv-feat-Mood.html">Mood</a></tt><tt>=Ind</tt></tt></td><td><em>är, äro</em></td><td><em>var</em></td></tr>
  <tr><td><tt><tt><a href="sv-feat-Mood.html">Mood</a></tt><tt>=Sub</tt></tt></td><td></td><td><em>vore</em></td></tr>
</table>

### `ADJ`

1564 <tt><a href="sv-pos-ADJ.html">ADJ</a></tt> tokens (18% of all `ADJ` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `ADJ` and `Tense` co-occurred: <tt><a href="sv-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (1564; 100%), <tt><a href="sv-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt> (1564; 100%), <tt><a href="sv-feat-Case.html">Case</a></tt><tt>=Nom</tt> (1556; 99%), <tt><a href="sv-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1001; 64%), <tt><a href="sv-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (921; 59%).

`ADJ` tokens may have the following values of `Tense`:

* `Past` (1047; 67% of non-empty `Tense`): <em>särskild, särskilda, ökad, ökade, gifta, sett, taget, handikappade, beredd, bestämda</em>
* `Pres` (517; 33% of non-empty `Tense`): <em>följande, beroende, motsvarande, liknande, nuvarande, omfattande, pensionsgrundande, avgörande, krävande, oberoende</em>
* `EMPTY` (6936): <em>olika, andra, nya, många, stora, stor, större, första, vissa, hela</em>

<table>
  <tr><th>Paradigm <i>öka</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="sv-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="sv-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>ökade</em></td></tr>
  <tr><td><tt><tt><a href="sv-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="sv-feat-Gender.html">Gender</a></tt><tt>=Com</tt>|<tt><a href="sv-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>ökad</em></td></tr>
  <tr><td><tt><tt><a href="sv-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="sv-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="sv-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>ökat</em></td></tr>
  <tr><td><tt><tt><a href="sv-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>ökade</em></td></tr>
  <tr><td><tt></tt></td><td><em>ökande</em></td><td></td></tr>
</table>

`Tense` seems to be **lexical feature** of `ADJ`. 99% lemmas (692) occur only with one value of `Tense`.

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="sv-dep-conj.html">conj</a></tt>]--> VERB</tt> (364; 70%),
<tt>VERB --[<tt><a href="sv-dep-mark.html">mark</a></tt>]--> ADJ</tt> (5; 63%),
<tt>AUX --[<tt><a href="sv-dep-conj.html">conj</a></tt>]--> VERB</tt> (2; 67%),
<tt>VERB --[<tt><a href="sv-dep-acl.html">acl</a></tt>]--> VERB</tt> (1; 100%).

