---
layout: base
title:  'Statistics of Voice in UD_Danish-DDT'
udver: '2'
---

## Treebank Statistics: UD_Danish-DDT: Features: `Voice`

This feature is universal.
It occurs with 2 different values: `Act`, `Pass`.

13018 tokens (13%) have a non-empty value of `Voice`.
2241 types (13%) occur at least once with a non-empty value of `Voice`.
1219 lemmas (9%) occur at least once with a non-empty value of `Voice`.
The feature is used with 2 part-of-speech tags: <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt> (8290; 8% instances), <tt><a href="da_ddt-pos-AUX.html">AUX</a></tt> (4728; 5% instances).

### `VERB`

8290 <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt> tokens (77% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="da_ddt-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (8290; 100%), <tt><a href="da_ddt-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (8290; 100%), <tt><a href="da_ddt-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (5616; 68%), <tt><a href="da_ddt-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (5616; 68%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (7806; 94% of non-empty `Voice`): <em>er, har, siger, var, få, får, fik, sagde, kommer, gå</em>
* `Pass` (484; 6% of non-empty `Voice`): <em>bruges, tages, ventes, gøres, nævnes, sælges, udsendes, ses, kaldes, sættes</em>
* `EMPTY` (2422): <em>fået, været, set, haft, gjort, gået, kommet, lad, sagt, kommende</em>

<table>
  <tr><th>Paradigm <i>have</i></th><th><tt>Act</tt></th><th><tt>Pass</tt></th></tr>
  <tr><td><tt><tt><a href="da_ddt-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="da_ddt-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="da_ddt-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>havde</em></td><td></td></tr>
  <tr><td><tt><tt><a href="da_ddt-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="da_ddt-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="da_ddt-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>har</em></td><td><em>haves</em></td></tr>
  <tr><td><tt><tt><a href="da_ddt-feat-VerbForm.html">VerbForm</a></tt><tt>=Inf</tt></tt></td><td><em>have, ha'</em></td><td></td></tr>
</table>

### `AUX`

4728 <tt><a href="da_ddt-pos-AUX.html">AUX</a></tt> tokens (96% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="da_ddt-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (4394; 93%), <tt><a href="da_ddt-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (4394; 93%), <tt><a href="da_ddt-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (3310; 70%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (4728; 100% of non-empty `Voice`): <em>er, har, kan, var, skal, vil, blev, være, kunne, havde</em>
* `EMPTY` (188): <em>været, blevet, kunnet, måttet, turdet, Bliv, villet, værende</em>

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<tt><a href="da_ddt-dep-conj.html">conj</a></tt>]--> VERB</tt> (776; 78%),
<tt>VERB --[<tt><a href="da_ddt-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (370; 70%),
<tt>VERB --[<tt><a href="da_ddt-dep-obj.html">obj</a></tt>]--> VERB</tt> (362; 82%),
<tt>VERB --[<tt><a href="da_ddt-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (355; 65%),
<tt>VERB --[<tt><a href="da_ddt-dep-advmod.html">advmod</a></tt>]--> VERB</tt> (297; 71%),
<tt>VERB --[<tt><a href="da_ddt-dep-acl-relcl.html">acl:relcl</a></tt>]--> VERB</tt> (41; 72%),
<tt>VERB --[<tt><a href="da_ddt-dep-dep.html">dep</a></tt>]--> VERB</tt> (16; 76%),
<tt>VERB --[<tt><a href="da_ddt-dep-mark.html">mark</a></tt>]--> VERB</tt> (15; 63%),
<tt>AUX --[<tt><a href="da_ddt-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (7; 88%),
<tt>VERB --[<tt><a href="da_ddt-dep-obl-lmod.html">obl:lmod</a></tt>]--> VERB</tt> (1; 100%).

