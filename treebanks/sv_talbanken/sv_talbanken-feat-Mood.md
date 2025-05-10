---
layout: base
title:  'Statistics of Mood in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Features: `Mood`

This feature is universal.
It occurs with 3 different values: `Imp`, `Ind`, `Sub`.

9709 tokens (10%) have a non-empty value of `Mood`.
1433 types (9%) occur at least once with a non-empty value of `Mood`.
872 lemmas (8%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (5766; 6% instances), <tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (3943; 4% instances).

### `VERB`

5766 <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> tokens (59% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="sv_talbanken-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (5766; 100%), <tt><a href="sv_talbanken-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (4908; 85%), <tt><a href="sv_talbanken-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (4648; 81%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (198; 3% of non-empty `Mood`): <em>se, låt, ta, ge, jfr, kontrollera, Diskutera, kolla, Läs, byt</em>
* `Ind` (5563; 96% of non-empty `Mood`): <em>har, finns, blir, får, gäller, behöver, ger, går, kommer, gör</em>
* `Sub` (5; 0% of non-empty `Mood`): <em>vare, Gånge, finge</em>
* `EMPTY` (4023): <em>få, ha, bli, göra, ge, ta, komma, gå, se, fått</em>

<table>
  <tr><th>Paradigm <i>gå</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th><th><tt>Sub</tt></th></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>gick</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>går</em></td><td></td><td><em>Gånge</em></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>Gå</em></td><td></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 94% lemmas (817) occur only with one value of `Mood`.

### `AUX`

3943 <tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> tokens (90% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="sv_talbanken-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (3943; 100%), <tt><a href="sv_talbanken-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (3943; 100%), <tt><a href="sv_talbanken-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (3552; 90%).

`AUX` tokens may have the following values of `Mood`:

* `Imp` (1; 0% of non-empty `Mood`): <em>Varen</em>
* `Ind` (3931; 100% of non-empty `Mood`): <em>är, kan, har, måste, skall, skulle, ska, var, kommer, får</em>
* `Sub` (11; 0% of non-empty `Mood`): <em>vore</em>
* `EMPTY` (420): <em>vara, kunna, varit, få, ha, bli, kunnat, fått, kommit, blivit</em>

<table>
  <tr><th>Paradigm <i>vara</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th><th><tt>Sub</tt></th></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>var</em></td><td></td><td><em>vore</em></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>är, äro</em></td><td></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>Varen</em></td><td></td></tr>
</table>

`Mood` seems to be **lexical feature** of `AUX`. 92% lemmas (12) occur only with one value of `Mood`.

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<tt><a href="sv_talbanken-dep-conj.html">conj</a></tt>]--> VERB</tt> (378; 72%),
<tt>VERB --[<tt><a href="sv_talbanken-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (94; 51%),
<tt>AUX --[<tt><a href="sv_talbanken-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="sv_talbanken-dep-acl.html">acl</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="sv_talbanken-dep-conj.html">conj</a></tt>]--> AUX</tt> (1; 100%).

