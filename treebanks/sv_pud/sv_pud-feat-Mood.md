---
layout: base
title:  'Statistics of Mood in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Features: `Mood`

This feature is universal.
It occurs with 2 different values: `Imp`, `Ind`.

1888 tokens (10%) have a non-empty value of `Mood`.
657 types (11%) occur at least once with a non-empty value of `Mood`.
466 lemmas (9%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1242; 7% instances), <tt><a href="sv_pud-pos-AUX.html">AUX</a></tt> (646; 3% instances).

### `VERB`

1242 <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> tokens (63% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="sv_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (1242; 100%), <tt><a href="sv_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (985; 79%), <tt><a href="sv_pud-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (738; 59%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (3; 0% of non-empty `Mood`): <em>Låt, Släpp, Spola</em>
* `Ind` (1239; 100% of non-empty `Mood`): <em>har, sade, finns, säger, började, hade, blev, gjorde, tog, kommer</em>
* `EMPTY` (729): <em>ha, få, göra, ta, gå, se, använda, bli, hjälpa, spela</em>

<table>
  <tr><th>Paradigm <i>släppa</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt><tt><a href="sv_pud-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="sv_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td><em>släppte</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_pud-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="sv_pud-feat-Voice.html">Voice</a></tt><tt>=Pass</tt></tt></td><td><em>släpptes</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="sv_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td><em>släpper</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td></td><td><em>Släpp</em></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 100% lemmas (460) occur only with one value of `Mood`.

### `AUX`

646 <tt><a href="sv_pud-pos-AUX.html">AUX</a></tt> tokens (88% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="sv_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (646; 100%), <tt><a href="sv_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (646; 100%), <tt><a href="sv_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (413; 64%).

`AUX` tokens may have the following values of `Mood`:

* `Ind` (646; 100% of non-empty `Mood`): <em>är, var, har, hade, kan, skulle, kommer, kunde, måste, ville</em>
* `EMPTY` (85): <em>vara, ha, varit, kunna, blivit, Did, Do, bli, få, kunnat</em>

`Mood` seems to be **lexical feature** of `AUX`. 100% lemmas (11) occur only with one value of `Mood`.

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<tt><a href="sv_pud-dep-conj.html">conj</a></tt>]--> VERB</tt> (121; 84%),
<tt>VERB --[<tt><a href="sv_pud-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (38; 61%),
<tt>VERB --[<tt><a href="sv_pud-dep-acl-relcl.html">acl:relcl</a></tt>]--> VERB</tt> (6; 75%),
<tt>VERB --[<tt><a href="sv_pud-dep-cop.html">cop</a></tt>]--> AUX</tt> (3; 60%).

