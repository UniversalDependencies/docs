---
layout: base
title:  'Statistics of Mood in UD_Swedish'
udver: '2'
---

## Treebank Statistics: UD_Swedish: Features: `Mood`

This feature is universal.
It occurs with 3 different values: `Imp`, `Ind`, `Sub`.

9709 tokens (10%) have a non-empty value of `Mood`.
1433 types (9%) occur at least once with a non-empty value of `Mood`.
872 lemmas (9%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: <tt><a href="sv-pos-VERB.html">VERB</a></tt> (5928; 6% instances), <tt><a href="sv-pos-AUX.html">AUX</a></tt> (3781; 4% instances).

### `VERB`

5928 <tt><a href="sv-pos-VERB.html">VERB</a></tt> tokens (59% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="sv-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (5928; 100%), <tt><a href="sv-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (5046; 85%), <tt><a href="sv-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (4810; 81%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (198; 3% of non-empty `Mood`): <em>se, låt, ta, ge, jfr, kontrollera, Diskutera, kolla, Läs, byt</em>
* `Ind` (5722; 97% of non-empty `Mood`): <em>har, finns, är, blir, får, gäller, ger, går, kommer, gör</em>
* `Sub` (8; 0% of non-empty `Mood`): <em>vare, vore, Gånge, finge</em>
* `EMPTY` (4038): <em>få, ha, bli, göra, ge, ta, komma, gå, se, fått</em>

<table>
  <tr><th>Paradigm <i>gå</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th><th><tt>Sub</tt></th></tr>
  <tr><td><tt><tt><a href="sv-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>gick</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="sv-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>går</em></td><td></td><td><em>Gånge</em></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>Gå</em></td><td></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 94% lemmas (817) occur only with one value of `Mood`.

### `AUX`

3781 <tt><a href="sv-pos-AUX.html">AUX</a></tt> tokens (90% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="sv-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (3781; 100%), <tt><a href="sv-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (3781; 100%), <tt><a href="sv-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (3414; 90%).

`AUX` tokens may have the following values of `Mood`:

* `Imp` (1; 0% of non-empty `Mood`): <em>Varen</em>
* `Ind` (3772; 100% of non-empty `Mood`): <em>är, kan, har, måste, skall, skulle, ska, kommer, var, får</em>
* `Sub` (8; 0% of non-empty `Mood`): <em>vore</em>
* `EMPTY` (405): <em>vara, kunna, varit, få, ha, bli, kunnat, behöva, fått, kommit</em>

<table>
  <tr><th>Paradigm <i>vara</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th><th><tt>Sub</tt></th></tr>
  <tr><td><tt><tt><a href="sv-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>var</em></td><td></td><td><em>vore</em></td></tr>
  <tr><td><tt><tt><a href="sv-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>är, äro</em></td><td></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>Varen</em></td><td></td></tr>
</table>

`Mood` seems to be **lexical feature** of `AUX`. 93% lemmas (14) occur only with one value of `Mood`.

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<tt><a href="sv-dep-conj.html">conj</a></tt>]--> VERB</tt> (384; 72%),
<tt>VERB --[<tt><a href="sv-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (104; 52%),
<tt>VERB --[<tt><a href="sv-dep-dislocated.html">dislocated</a></tt>]--> VERB</tt> (18; 55%),
<tt>VERB --[<tt><a href="sv-dep-appos.html">appos</a></tt>]--> VERB</tt> (10; 56%),
<tt>AUX --[<tt><a href="sv-dep-conj.html">conj</a></tt>]--> VERB</tt> (3; 100%),
<tt>VERB --[<tt><a href="sv-dep-acl.html">acl</a></tt>]--> VERB</tt> (1; 100%).

