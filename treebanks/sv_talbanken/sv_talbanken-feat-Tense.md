---
layout: base
title:  'Statistics of Tense in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Features: `Tense`

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

11123 tokens (11%) have a non-empty value of `Tense`.
2200 types (15%) occur at least once with a non-empty value of `Tense`.
1381 lemmas (13%) occur at least once with a non-empty value of `Tense`.
The feature is used with 3 part-of-speech tags: <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (5687; 6% instances), <tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (3872; 4% instances), <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (1564; 2% instances).

### `VERB`

5687 <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> tokens (58% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="sv_talbanken-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (5638; 99%), <tt><a href="sv_talbanken-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (5630; 99%), <tt><a href="sv_talbanken-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (4521; 79%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (723; 13% of non-empty `Tense`): <em>blev, fick, hade, började, gjorde, kom, gick, fanns, gav, var</em>
* `Pres` (4964; 87% of non-empty `Tense`): <em>har, finns, blir, får, är, gäller, ger, går, kommer, gör</em>
* `EMPTY` (4184): <em>få, ha, se, ta, ge, bli, göra, gå, komma, fått</em>

<table>
  <tr><th>Paradigm <i>ha</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt></tt></td><td><em>har</em></td><td><em>hade</em></td></tr>
</table>

### `AUX`

3872 <tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> tokens (90% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="sv_talbanken-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (3872; 100%), <tt><a href="sv_talbanken-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (3872; 100%), <tt><a href="sv_talbanken-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (3864; 100%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (376; 10% of non-empty `Tense`): <em>skulle, var, kunde, hade, borde, ville, fick, torde, vore, blev</em>
* `Pres` (3496; 90% of non-empty `Tense`): <em>är, kan, har, måste, skall, ska, kommer, får, bör, vill</em>
* `EMPTY` (409): <em>vara, kunna, varit, få, ha, bli, kunnat, behöva, fått, kommit</em>

<table>
  <tr><th>Paradigm <i>vara</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Mood.html">Mood</a></tt><tt>=Ind</tt></tt></td><td><em>är, äro</em></td><td><em>var</em></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Mood.html">Mood</a></tt><tt>=Sub</tt></tt></td><td></td><td><em>vore</em></td></tr>
</table>

### `ADJ`

1564 <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> tokens (18% of all `ADJ` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `ADJ` and `Tense` co-occurred: <tt><a href="sv_talbanken-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (1564; 100%), <tt><a href="sv_talbanken-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt> (1564; 100%), <tt><a href="sv_talbanken-feat-Case.html">Case</a></tt><tt>=Nom</tt> (1556; 99%), <tt><a href="sv_talbanken-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1001; 64%), <tt><a href="sv_talbanken-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (921; 59%).

`ADJ` tokens may have the following values of `Tense`:

* `Past` (1047; 67% of non-empty `Tense`): <em>särskild, särskilda, ökad, ökade, gifta, sett, taget, handikappade, beredd, bestämda</em>
* `Pres` (517; 33% of non-empty `Tense`): <em>följande, beroende, motsvarande, liknande, nuvarande, omfattande, pensionsgrundande, avgörande, krävande, oberoende</em>
* `EMPTY` (6935): <em>olika, andra, nya, många, stora, stor, större, första, vissa, hela</em>

<table>
  <tr><th>Paradigm <i>öka</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="sv_talbanken-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>ökade</em></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="sv_talbanken-feat-Gender.html">Gender</a></tt><tt>=Com</tt>|<tt><a href="sv_talbanken-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>ökad</em></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="sv_talbanken-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="sv_talbanken-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>ökat</em></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>ökade</em></td></tr>
  <tr><td><tt></tt></td><td><em>ökande</em></td><td></td></tr>
</table>

`Tense` seems to be **lexical feature** of `ADJ`. 99% lemmas (692) occur only with one value of `Tense`.

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="sv_talbanken-dep-conj.html">conj</a></tt>]--> VERB</tt> (361; 70%),
<tt>VERB --[<tt><a href="sv_talbanken-dep-dislocated.html">dislocated</a></tt>]--> VERB</tt> (16; 52%),
<tt>VERB --[<tt><a href="sv_talbanken-dep-mark.html">mark</a></tt>]--> ADJ</tt> (5; 71%),
<tt>AUX --[<tt><a href="sv_talbanken-dep-conj.html">conj</a></tt>]--> VERB</tt> (2; 67%),
<tt>AUX --[<tt><a href="sv_talbanken-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="sv_talbanken-dep-acl.html">acl</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="sv_talbanken-dep-advmod.html">advmod</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="sv_talbanken-dep-conj.html">conj</a></tt>]--> AUX</tt> (1; 100%).

