---
layout: base
title:  'Statistics of Mood in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Features: `Mood`

This feature is universal.
It occurs with 2 different values: `Imp`, `Ind`.

1972 tokens (10%) have a non-empty value of `Mood`.
723 types (12%) occur at least once with a non-empty value of `Mood`.
533 lemmas (11%) occur at least once with a non-empty value of `Mood`.
The feature is used with 3 part-of-speech tags: <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1271; 7% instances), <tt><a href="sv_pud-pos-AUX.html">AUX</a></tt> (609; 3% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (92; 0% instances).

### `VERB`

1271 <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> tokens (64% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="sv_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (1271; 100%), <tt><a href="sv_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (1013; 80%), <tt><a href="sv_pud-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (743; 58%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (3; 0% of non-empty `Mood`): <em>Låt, Släpp, Spola</em>
* `Ind` (1268; 100% of non-empty `Mood`): <em>har, sade, hade, finns, säger, började, blev, kommer, gjorde, tog</em>
* `EMPTY` (712): <em>ha, få, göra, ta, gå, se, bli, hjälpa, spela, använda</em>

<table>
  <tr><th>Paradigm <i>släppa</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt><tt><a href="sv_pud-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="sv_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td><em>släppte</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_pud-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="sv_pud-feat-Voice.html">Voice</a></tt><tt>=Pass</tt></tt></td><td><em>släpptes</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="sv_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td><em>släpper</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td></td><td><em>Släpp</em></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 100% lemmas (455) occur only with one value of `Mood`.

### `AUX`

609 <tt><a href="sv_pud-pos-AUX.html">AUX</a></tt> tokens (88% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="sv_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (609; 100%), <tt><a href="sv_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (609; 100%), <tt><a href="sv_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (389; 64%).

`AUX` tokens may have the following values of `Mood`:

* `Ind` (609; 100% of non-empty `Mood`): <em>är, var, har, kan, hade, skulle, kommer, kunde, måste, ville</em>
* `EMPTY` (82): <em>vara, ha, varit, kunna, behöva, bli, blivit, få, kunnat, vilja</em>

`Mood` seems to be **lexical feature** of `AUX`. 100% lemmas (13) occur only with one value of `Mood`.

### `ADJ`

92 <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> tokens (6% of all `ADJ` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `ADJ` and `Mood` co-occurred: <tt><a href="sv_pud-feat-Case.html">Case</a></tt><tt>=Nom</tt> (92; 100%), <tt><a href="sv_pud-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (92; 100%), <tt><a href="sv_pud-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (92; 100%), <tt><a href="sv_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (92; 100%), <tt><a href="sv_pud-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (92; 100%), <tt><a href="sv_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (92; 100%), <tt><a href="sv_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt> (92; 100%).

`ADJ` tokens may have the following values of `Mood`:

* `Ind` (92; 100% of non-empty `Mood`): <em>betydande, följande, levande, omfattande, beroende, dominerande, närvarande, omgivande, sittande, självstyrande</em>
* `EMPTY` (1484): <em>andra, första, nya, många, flera, stora, stor, hela, senaste, sista</em>

`Mood` seems to be **lexical feature** of `ADJ`. 100% lemmas (72) occur only with one value of `Mood`.

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<tt><a href="sv_pud-dep-conj.html">conj</a></tt>]--> VERB</tt> (119; 84%),
<tt>VERB --[<tt><a href="sv_pud-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (37; 63%),
<tt>VERB --[<tt><a href="sv_pud-dep-acl-relcl.html">acl:relcl</a></tt>]--> VERB</tt> (6; 75%),
<tt>AUX --[<tt><a href="sv_pud-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (3; 100%),
<tt>AUX --[<tt><a href="sv_pud-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (3; 100%),
<tt>VERB --[<tt><a href="sv_pud-dep-parataxis.html">parataxis</a></tt>]--> AUX</tt> (2; 100%),
<tt>AUX --[<tt><a href="sv_pud-dep-advcl.html">advcl</a></tt>]--> AUX</tt> (1; 100%),
<tt>AUX --[<tt><a href="sv_pud-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="sv_pud-dep-ccomp.html">ccomp</a></tt>]--> AUX</tt> (1; 100%),
<tt>VERB --[<tt><a href="sv_pud-dep-dislocated.html">dislocated</a></tt>]--> VERB</tt> (1; 100%).

