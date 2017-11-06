---
layout: base
title:  'Statistics of Tense in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Features: `Tense`

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

2157 tokens (11%) have a non-empty value of `Tense`.
870 types (14%) occur at least once with a non-empty value of `Tense`.
680 lemmas (14%) occur at least once with a non-empty value of `Tense`.
The feature is used with 3 part-of-speech tags: <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1270; 7% instances), <tt><a href="sv_pud-pos-AUX.html">AUX</a></tt> (609; 3% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (278; 1% instances).

### `VERB`

1270 <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> tokens (64% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="sv_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1268; 100%), <tt><a href="sv_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (1268; 100%), <tt><a href="sv_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (1010; 80%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (745; 59% of non-empty `Tense`): <em>sade, hade, började, blev, gjorde, tog, användes, skrev, spelade, berättade</em>
* `Pres` (525; 41% of non-empty `Tense`): <em>har, finns, säger, kommer, börjar, står, ger, hjälper, inkluderar, innehåller</em>
* `EMPTY` (713): <em>ha, få, göra, ta, gå, se, bli, hjälpa, spela, använda</em>

<table>
  <tr><th>Paradigm <i>ha</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt></tt></td><td><em>har</em></td><td><em>hade</em></td></tr>
</table>

### `AUX`

609 <tt><a href="sv_pud-pos-AUX.html">AUX</a></tt> tokens (88% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="sv_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (609; 100%), <tt><a href="sv_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (609; 100%), <tt><a href="sv_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (609; 100%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (220; 36% of non-empty `Tense`): <em>var, hade, skulle, kunde, ville, borde, behövde, fick, varade</em>
* `Pres` (389; 64% of non-empty `Tense`): <em>är, har, kan, kommer, måste, ska, vill, bör, får, må</em>
* `EMPTY` (82): <em>vara, ha, varit, kunna, behöva, bli, blivit, få, kunnat, vilja</em>

<table>
  <tr><th>Paradigm <i>vara</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt></tt></td><td><em>är</em></td><td><em>var, varade</em></td></tr>
</table>

### `ADJ`

278 <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> tokens (18% of all `ADJ` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `ADJ` and `Tense` co-occurred: <tt><a href="sv_pud-feat-Case.html">Case</a></tt><tt>=Nom</tt> (278; 100%), <tt><a href="sv_pud-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (278; 100%), <tt><a href="sv_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt> (278; 100%), <tt><a href="sv_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (171; 62%), <tt><a href="sv_pud-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (147; 53%).

`ADJ` tokens may have the following values of `Tense`:

* `Past` (186; 67% of non-empty `Tense`): <em>sett, kända, allierade, känd, regisserad, anställd, fortsatt, gift, inblandade, inräknat</em>
* `Pres` (92; 33% of non-empty `Tense`): <em>betydande, följande, levande, omfattande, beroende, dominerande, närvarande, omgivande, sittande, självstyrande</em>
* `EMPTY` (1298): <em>andra, första, nya, många, flera, stora, stor, hela, senaste, sista</em>

`Tense` seems to be **lexical feature** of `ADJ`. 100% lemmas (220) occur only with one value of `Tense`.

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="sv_pud-dep-conj.html">conj</a></tt>]--> VERB</tt> (112; 79%),
<tt>VERB --[<tt><a href="sv_pud-dep-acl-relcl.html">acl:relcl</a></tt>]--> VERB</tt> (5; 63%),
<tt>AUX --[<tt><a href="sv_pud-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (3; 100%),
<tt>AUX --[<tt><a href="sv_pud-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (2; 67%),
<tt>ADJ --[<tt><a href="sv_pud-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (1; 100%),
<tt>AUX --[<tt><a href="sv_pud-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="sv_pud-dep-ccomp.html">ccomp</a></tt>]--> AUX</tt> (1; 100%),
<tt>VERB --[<tt><a href="sv_pud-dep-dislocated.html">dislocated</a></tt>]--> VERB</tt> (1; 100%).

