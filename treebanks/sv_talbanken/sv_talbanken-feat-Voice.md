---
layout: base
title:  'Statistics of Voice in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Features: `Voice`

This feature is universal.
It occurs with 2 different values: `Act`, `Pass`.

13840 tokens (14%) have a non-empty value of `Voice`.
2638 types (17%) occur at least once with a non-empty value of `Voice`.
1226 lemmas (12%) occur at least once with a non-empty value of `Voice`.
The feature is used with 2 part-of-speech tags: <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (9477; 10% instances), <tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (4363; 5% instances).

### `VERB`

9477 <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> tokens (97% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="sv_talbanken-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (5491; 58%), <tt><a href="sv_talbanken-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (5288; 56%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (7960; 84% of non-empty `Voice`): <em>har, blir, få, får, ha, gäller, behöver, ger, går, se</em>
* `Pass` (1517; 16% of non-empty `Voice`): <em>kallas, användas, behövs, anses, beräknas, tas, används, ges, användes, förändras</em>
* `EMPTY` (312): <em>finns, tycks, fanns, finnas, fordras, känns, hoppas, syns, trivas, fattas</em>

<table>
  <tr><th>Paradigm <i>göra</i></th><th><tt>Act</tt></th><th><tt>Pass</tt></th></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Mood.html">Mood</a></tt><tt>=Imp</tt>|<tt><a href="sv_talbanken-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>Gör</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="sv_talbanken-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="sv_talbanken-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>gjorde</em></td><td><em>gjordes</em></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="sv_talbanken-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="sv_talbanken-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>gör</em></td><td><em>görs</em></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-VerbForm.html">VerbForm</a></tt><tt>=Inf</tt></tt></td><td><em>göra</em></td><td><em>göras</em></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-VerbForm.html">VerbForm</a></tt><tt>=Sup</tt></tt></td><td><em>gjort</em></td><td><em>gjorts</em></td></tr>
</table>

### `AUX`

4363 <tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="sv_talbanken-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (3943; 90%), <tt><a href="sv_talbanken-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (3931; 90%), <tt><a href="sv_talbanken-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (3552; 81%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (4363; 100% of non-empty `Voice`): <em>är, kan, har, måste, skall, vara, skulle, ska, var, kommer</em>

`Voice` seems to be **lexical feature** of `AUX`. 100% lemmas (13) occur only with one value of `Voice`.

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<tt><a href="sv_talbanken-dep-aux.html">aux</a></tt>]--> AUX</tt> (1782; 77%),
<tt>VERB --[<tt><a href="sv_talbanken-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (812; 73%),
<tt>VERB --[<tt><a href="sv_talbanken-dep-conj.html">conj</a></tt>]--> VERB</tt> (690; 81%),
<tt>VERB --[<tt><a href="sv_talbanken-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (310; 80%),
<tt>VERB --[<tt><a href="sv_talbanken-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (276; 77%),
<tt>VERB --[<tt><a href="sv_talbanken-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (163; 76%),
<tt>VERB --[<tt><a href="sv_talbanken-dep-csubj.html">csubj</a></tt>]--> VERB</tt> (92; 92%),
<tt>VERB --[<tt><a href="sv_talbanken-dep-cop.html">cop</a></tt>]--> AUX</tt> (29; 78%),
<tt>VERB --[<tt><a href="sv_talbanken-dep-appos.html">appos</a></tt>]--> VERB</tt> (16; 73%),
<tt>AUX --[<tt><a href="sv_talbanken-dep-conj.html">conj</a></tt>]--> VERB</tt> (5; 100%).

