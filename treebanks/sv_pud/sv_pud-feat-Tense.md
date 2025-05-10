---
layout: base
title:  'Statistics of Tense in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Features: `Tense`

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

2113 tokens (11%) have a non-empty value of `Tense`.
830 types (13%) occur at least once with a non-empty value of `Tense`.
637 lemmas (13%) occur at least once with a non-empty value of `Tense`.
The feature is used with 4 part-of-speech tags: <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1246; 7% instances), <tt><a href="sv_pud-pos-AUX.html">AUX</a></tt> (646; 3% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (220; 1% instances), <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances).

### `VERB`

1246 <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> tokens (63% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="sv_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1239; 99%), <tt><a href="sv_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (1239; 99%), <tt><a href="sv_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (982; 79%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (745; 60% of non-empty `Tense`): <em>sade, började, hade, blev, gjorde, tog, användes, skrev, spelade, berättade</em>
* `Pres` (501; 40% of non-empty `Tense`): <em>har, finns, säger, kommer, börjar, står, ger, hjälper, inkluderar, innehåller</em>
* `EMPTY` (725): <em>ha, få, göra, ta, gå, se, använda, bli, hjälpa, spela</em>

<table>
  <tr><th>Paradigm <i>ha</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt></tt></td><td><em>har</em></td><td><em>hade</em></td></tr>
</table>

### `AUX`

646 <tt><a href="sv_pud-pos-AUX.html">AUX</a></tt> tokens (88% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="sv_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (646; 100%), <tt><a href="sv_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (646; 100%), <tt><a href="sv_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (646; 100%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (233; 36% of non-empty `Tense`): <em>var, hade, skulle, kunde, ville, blev, borde, fick</em>
* `Pres` (413; 64% of non-empty `Tense`): <em>är, har, kan, kommer, måste, ska, vill, bör, blir, får</em>
* `EMPTY` (85): <em>vara, ha, varit, kunna, blivit, Did, Do, bli, få, kunnat</em>

<table>
  <tr><th>Paradigm <i>vara</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt></tt></td><td><em>är</em></td><td><em>var</em></td></tr>
</table>

### `ADJ`

220 <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> tokens (14% of all `ADJ` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `ADJ` and `Tense` co-occurred: <tt><a href="sv_pud-feat-Case.html">Case</a></tt><tt>=Nom</tt> (220; 100%), <tt><a href="sv_pud-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (220; 100%), <tt><a href="sv_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt> (220; 100%), <tt><a href="sv_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (140; 64%), <tt><a href="sv_pud-feat-Definite.html">Definite</a></tt><tt>=Ind</tt> (120; 55%).

`ADJ` tokens may have the following values of `Tense`:

* `Past` (147; 67% of non-empty `Tense`): <em>kända, sett, allierade, förenta, känd, regisserad, anställd, gift, inblandade, intresserad</em>
* `Pres` (73; 33% of non-empty `Tense`): <em>betydande, följande, levande, omfattande, beroende, dominerande, omgivande, sittande, växande, återstående</em>
* `EMPTY` (1345): <em>andra, första, nya, många, flera, stora, stor, hela, senaste, samma</em>

`Tense` seems to be **lexical feature** of `ADJ`. 100% lemmas (165) occur only with one value of `Tense`.

### `ADV`

1 <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> tokens (0% of all `ADV` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `ADV` and `Tense` co-occurred: <tt><a href="sv_pud-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (1; 100%).

`ADV` tokens may have the following values of `Tense`:

* `Past` (1; 100% of non-empty `Tense`): <em>fortsatt</em>
* `EMPTY` (993): <em>så, in, ut, där, också, bara, upp, fram, här, även</em>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="sv_pud-dep-conj.html">conj</a></tt>]--> VERB</tt> (114; 79%),
<tt>VERB --[<tt><a href="sv_pud-dep-acl-relcl.html">acl:relcl</a></tt>]--> VERB</tt> (5; 63%),
<tt>VERB --[<tt><a href="sv_pud-dep-cop.html">cop</a></tt>]--> AUX</tt> (3; 60%),
<tt>ADJ --[<tt><a href="sv_pud-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="sv_pud-dep-acl.html">acl</a></tt>]--> VERB</tt> (1; 100%).

