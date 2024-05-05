---
layout: base
title:  'Statistics of VerbForm in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Features: `VerbForm`

This feature is universal.
It occurs with 4 different values: `Fin`, `Inf`, `Part`, `Sup`.

2921 tokens (15%) have a non-empty value of `VerbForm`.
1279 types (21%) occur at least once with a non-empty value of `VerbForm`.
800 lemmas (16%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 3 part-of-speech tags: <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1961; 10% instances), <tt><a href="sv_pud-pos-AUX.html">AUX</a></tt> (732; 4% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (228; 1% instances).

### `VERB`

1961 <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> tokens (100% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="sv_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (1620; 83%), <tt><a href="sv_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1242; 63%).

`VERB` tokens may have the following values of `VerbForm`:

* `Fin` (1245; 63% of non-empty `VerbForm`): <em>har, sade, finns, säger, började, hade, blev, gjorde, tog, kommer</em>
* `Inf` (513; 26% of non-empty `VerbForm`): <em>ha, få, göra, ta, gå, se, använda, bli, hjälpa, spela</em>
* `Sup` (203; 10% of non-empty `VerbForm`): <em>blivit, gjort, sett, beslutat, fått, gått, haft, kommit, skrivit, ansett</em>
* `EMPTY` (3): <em>Controlled, Knew, Thought</em>

<table>
  <tr><th>Paradigm <i>ha</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt><tt><a href="sv_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="sv_pud-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>hade</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="sv_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>har</em></td><td></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>ha</em></td><td><em>haft</em></td></tr>
</table>

### `AUX`

732 <tt><a href="sv_pud-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="sv_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (730; 100%), <tt><a href="sv_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (646; 88%), <tt><a href="sv_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (411; 56%).

`AUX` tokens may have the following values of `VerbForm`:

* `Fin` (647; 88% of non-empty `VerbForm`): <em>är, var, har, hade, kan, skulle, kommer, kunde, måste, ville</em>
* `Inf` (67; 9% of non-empty `VerbForm`): <em>vara, ha, kunna, behöva, bli, få, må, vilja</em>
* `Sup` (18; 2% of non-empty `VerbForm`): <em>varit, blivit, kunnat</em>

<table>
  <tr><th>Paradigm <i>vara</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt><tt><a href="sv_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="sv_pud-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>var</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="sv_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>är</em></td><td></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>vara</em></td><td><em>varit</em></td></tr>
</table>

### `ADJ`

228 <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> tokens (15% of all `ADJ` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `ADJ` and `VerbForm` co-occurred: <tt><a href="sv_pud-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (228; 100%), <tt><a href="sv_pud-feat-Case.html">Case</a></tt><tt>=Nom</tt> (227; 100%), <tt><a href="sv_pud-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (154; 68%), <tt><a href="sv_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (143; 63%), <tt><a href="sv_pud-feat-Definite.html">Definite</a></tt><tt>=Ind</tt> (128; 56%).

`ADJ` tokens may have the following values of `VerbForm`:

* `Part` (228; 100% of non-empty `VerbForm`): <em>betydande, följande, kända, sett, allierade, förenta, känd, levande, omfattande, regisserad</em>
* `EMPTY` (1341): <em>andra, första, nya, många, flera, stora, stor, hela, senaste, samma</em>

`VerbForm` seems to be **lexical feature** of `ADJ`. 100% lemmas (172) occur only with one value of `VerbForm`.

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<tt><a href="sv_pud-dep-conj.html">conj</a></tt>]--> VERB</tt> (159; 87%),
<tt>VERB --[<tt><a href="sv_pud-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (38; 60%),
<tt>VERB --[<tt><a href="sv_pud-dep-acl-relcl.html">acl:relcl</a></tt>]--> VERB</tt> (6; 75%),
<tt>AUX --[<tt><a href="sv_pud-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (3; 100%),
<tt>AUX --[<tt><a href="sv_pud-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (3; 100%),
<tt>AUX --[<tt><a href="sv_pud-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (2; 67%),
<tt>AUX --[<tt><a href="sv_pud-dep-advcl.html">advcl</a></tt>]--> AUX</tt> (1; 100%),
<tt>VERB --[<tt><a href="sv_pud-dep-appos.html">appos</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="sv_pud-dep-nsubj-pass.html">nsubj:pass</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="sv_pud-dep-obl.html">obl</a></tt>]--> VERB</tt> (1; 100%).

