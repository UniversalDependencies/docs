---
layout: base
title:  'Statistics of Voice in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Features: `Voice`

This feature is universal.
It occurs with 2 different values: `Act`, `Pass`.

13331 tokens (17%) have a non-empty value of `Voice`.
3029 types (23%) occur at least once with a non-empty value of `Voice`.
1507 lemmas (17%) occur at least once with a non-empty value of `Voice`.
The feature is used with 2 part-of-speech tags: <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (9883; 12% instances), <tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (3448; 4% instances).

### `VERB`

9883 <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> tokens (98% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="sv_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (6261; 63%), <tt><a href="sv_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (5880; 59%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (8821; 89% of non-empty `Voice`): <em>var, har, sa, hade, gick, såg, kom, sade, är, ta</em>
* `Pass` (1062; 11% of non-empty `Voice`): <em>visas, kändes, används, tvungen, hördes, flyttas, tycktes, skapats, talas, taget</em>
* `EMPTY` (161): <em>finns, fanns, finnas, taget, beroende, närvarande, förfogande, följande, gillande, gående</em>

<table>
  <tr><th>Paradigm <i>säga</i></th><th><tt>Act</tt></th><th><tt>Pass</tt></th></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-Mood.html">Mood</a></tt><tt>=Imp</tt>|<tt><a href="sv_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>säg</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="sv_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="sv_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>sa, sade</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="sv_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="sv_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>säger</em></td><td><em>sägs</em></td></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="sv_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Inf</tt></tt></td><td></td><td><em>sagt</em></td></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="sv_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt></tt></td><td></td><td><em>sagt</em></td></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Inf</tt></tt></td><td><em>säga</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Sup</tt></tt></td><td><em>sagt</em></td><td><em>sagts</em></td></tr>
</table>

### `AUX`

3448 <tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="sv_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (3078; 89%), <tt><a href="sv_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (3060; 89%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (3447; 100% of non-empty `Voice`): <em>är, var, hade, kan, har, skulle, måste, kunde, vara, vill</em>
* `Pass` (1; 0% of non-empty `Voice`): <em>ombedd</em>
* `EMPTY` (7): <em>höll, haft, råkar, skola</em>

`Voice` seems to be **lexical feature** of `AUX`. 100% lemmas (13) occur only with one value of `Voice`.

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<tt><a href="sv_lines-dep-aux.html">aux</a></tt>]--> AUX</tt> (1699; 89%),
<tt>VERB --[<tt><a href="sv_lines-dep-conj.html">conj</a></tt>]--> VERB</tt> (1408; 89%),
<tt>VERB --[<tt><a href="sv_lines-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (889; 80%),
<tt>VERB --[<tt><a href="sv_lines-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (524; 79%),
<tt>VERB --[<tt><a href="sv_lines-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (446; 84%),
<tt>VERB --[<tt><a href="sv_lines-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (188; 95%),
<tt>VERB --[<tt><a href="sv_lines-dep-csubj.html">csubj</a></tt>]--> VERB</tt> (65; 90%),
<tt>VERB --[<tt><a href="sv_lines-dep-dislocated.html">dislocated</a></tt>]--> VERB</tt> (26; 87%),
<tt>VERB --[<tt><a href="sv_lines-dep-appos.html">appos</a></tt>]--> VERB</tt> (25; 86%),
<tt>AUX --[<tt><a href="sv_lines-dep-aux.html">aux</a></tt>]--> AUX</tt> (15; 94%).

