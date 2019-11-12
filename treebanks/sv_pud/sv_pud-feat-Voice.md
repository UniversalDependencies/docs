---
layout: base
title:  'Statistics of Voice in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Features: `Voice`

This feature is universal.
It occurs with 2 different values: `Act`, `Pass`.

2694 tokens (14%) have a non-empty value of `Voice`.
1109 types (18%) occur at least once with a non-empty value of `Voice`.
629 lemmas (13%) occur at least once with a non-empty value of `Voice`.
The feature is used with 2 part-of-speech tags: <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1962; 10% instances), <tt><a href="sv_pud-pos-AUX.html">AUX</a></tt> (732; 4% instances).

### `VERB`

1962 <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> tokens (100% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="sv_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (1245; 63%), <tt><a href="sv_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1242; 63%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (1621; 83% of non-empty `Voice`): <em>har, sade, säger, började, ha, hade, blev, få, göra, gjorde</em>
* `Pass` (341; 17% of non-empty `Voice`): <em>finns, användes, fanns, lyckades, anses, tillämpas, behövs, bildades, finnas, föddes</em>
* `EMPTY` (6): <em>Controlled, Knew, Thought, förlorad, stammande, tvungen</em>

<table>
  <tr><th>Paradigm <i>säga</i></th><th><tt>Act</tt></th><th><tt>Pass</tt></th></tr>
  <tr><td><tt><tt><a href="sv_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="sv_pud-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="sv_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>sade</em></td><td><em>sades</em></td></tr>
  <tr><td><tt><tt><a href="sv_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="sv_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="sv_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>säger</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Inf</tt></tt></td><td><em>säga</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Sup</tt></tt></td><td><em>sagt</em></td><td></td></tr>
</table>

### `AUX`

732 <tt><a href="sv_pud-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="sv_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (647; 88%), <tt><a href="sv_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (646; 88%), <tt><a href="sv_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (411; 56%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (732; 100% of non-empty `Voice`): <em>är, var, har, hade, kan, skulle, kommer, vara, ha, varit</em>

`Voice` seems to be **lexical feature** of `AUX`. 100% lemmas (13) occur only with one value of `Voice`.

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<tt><a href="sv_pud-dep-aux.html">aux</a></tt>]--> AUX</tt> (277; 83%),
<tt>VERB --[<tt><a href="sv_pud-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (176; 76%),
<tt>VERB --[<tt><a href="sv_pud-dep-conj.html">conj</a></tt>]--> VERB</tt> (151; 82%),
<tt>VERB --[<tt><a href="sv_pud-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (83; 80%),
<tt>VERB --[<tt><a href="sv_pud-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (71; 79%),
<tt>VERB --[<tt><a href="sv_pud-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (48; 76%),
<tt>VERB --[<tt><a href="sv_pud-dep-csubj.html">csubj</a></tt>]--> VERB</tt> (9; 90%),
<tt>VERB --[<tt><a href="sv_pud-dep-acl-relcl.html">acl:relcl</a></tt>]--> VERB</tt> (5; 63%),
<tt>AUX --[<tt><a href="sv_pud-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (3; 100%),
<tt>AUX --[<tt><a href="sv_pud-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (3; 100%).

