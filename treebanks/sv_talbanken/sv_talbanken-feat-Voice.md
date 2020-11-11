---
layout: base
title:  'Statistics of Voice in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Features: `Voice`

This feature is universal.
It occurs with 2 different values: `Act`, `Pass`.

13792 tokens (14%) have a non-empty value of `Voice`.
2601 types (17%) occur at least once with a non-empty value of `Voice`.
1188 lemmas (12%) occur at least once with a non-empty value of `Voice`.
The feature is used with 2 part-of-speech tags: <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (9511; 10% instances), <tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (4281; 4% instances).

### `VERB`

9511 <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> tokens (96% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="sv_talbanken-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (5561; 58%), <tt><a href="sv_talbanken-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (5355; 56%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (8042; 85% of non-empty `Voice`): <em>har, blir, få, får, ha, är, gäller, ger, går, se</em>
* `Pass` (1469; 15% of non-empty `Voice`): <em>kallas, användas, behövs, anses, beräknas, tas, används, ges, användes, förändras</em>
* `EMPTY` (360): <em>finns, tycks, fanns, finnas, fordras, känns, hoppas, syns, trivas, fattas</em>

<table>
  <tr><th>Paradigm <i>göra</i></th><th><tt>Act</tt></th><th><tt>Pass</tt></th></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Mood.html">Mood</a></tt><tt>=Imp</tt>|<tt><a href="sv_talbanken-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>Gör</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="sv_talbanken-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="sv_talbanken-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>gjorde</em></td><td><em>gjordes</em></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="sv_talbanken-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="sv_talbanken-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>gör</em></td><td><em>görs</em></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-VerbForm.html">VerbForm</a></tt><tt>=Inf</tt></tt></td><td><em>göra</em></td><td><em>göras</em></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-VerbForm.html">VerbForm</a></tt><tt>=Sup</tt></tt></td><td><em>gjort</em></td><td><em>gjorts</em></td></tr>
</table>

### `AUX`

4281 <tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="sv_talbanken-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (3873; 90%), <tt><a href="sv_talbanken-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (3864; 90%), <tt><a href="sv_talbanken-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (3496; 82%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (4281; 100% of non-empty `Voice`): <em>är, kan, har, måste, skall, vara, skulle, ska, kommer, var</em>

`Voice` seems to be **lexical feature** of `AUX`. 100% lemmas (14) occur only with one value of `Voice`.

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<tt><a href="sv_talbanken-dep-aux.html">aux</a></tt>]--> AUX</tt> (1821; 77%),
<tt>VERB --[<tt><a href="sv_talbanken-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (809; 72%),
<tt>VERB --[<tt><a href="sv_talbanken-dep-conj.html">conj</a></tt>]--> VERB</tt> (695; 81%),
<tt>VERB --[<tt><a href="sv_talbanken-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (304; 77%),
<tt>VERB --[<tt><a href="sv_talbanken-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (274; 81%),
<tt>VERB --[<tt><a href="sv_talbanken-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (166; 76%),
<tt>VERB --[<tt><a href="sv_talbanken-dep-csubj.html">csubj</a></tt>]--> VERB</tt> (96; 92%),
<tt>VERB --[<tt><a href="sv_talbanken-dep-dislocated.html">dislocated</a></tt>]--> VERB</tt> (27; 82%),
<tt>VERB --[<tt><a href="sv_talbanken-dep-appos.html">appos</a></tt>]--> VERB</tt> (18; 75%),
<tt>VERB --[<tt><a href="sv_talbanken-dep-cop.html">cop</a></tt>]--> AUX</tt> (4; 100%).

