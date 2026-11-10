---
layout: base
title:  'Statistics of Mood in UD_Dongxiang-GDUD'
udver: '2'
---

## Treebank Statistics: UD_Dongxiang-GDUD: Features: `Mood`

This feature is universal but the values `Int` are language-specific.
It occurs with 3 different values: `Imp`, `Ind`, `Int`.

191 tokens (21%) have a non-empty value of `Mood`.
65 types (17%) occur at least once with a non-empty value of `Mood`.
61 lemmas (17%) occur at least once with a non-empty value of `Mood`.
The feature is used with 3 part-of-speech tags: <tt><a href="sce_gdud-pos-AUX.html">AUX</a></tt> (117; 13% instances), <tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt> (72; 8% instances), <tt><a href="sce_gdud-pos-PART.html">PART</a></tt> (2; 0% instances).

### `AUX`

117 <tt><a href="sce_gdud-pos-AUX.html">AUX</a></tt> tokens (90% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="sce_gdud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (117; 100%), <tt><a href="sce_gdud-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (105; 90%).

`AUX` tokens may have the following values of `Mood`:

* `Ind` (115; 98% of non-empty `Mood`): <em>wo, olu, ʂi, madʑiə-na, dʑi, nu, wai-n-u, madʑiə-n-u, na, pa-sə</em>
* `Int` (2; 2% of non-empty `Mood`): <em>wo</em>
* `EMPTY` (13): <em>na, olu, pa, pa-sə, sho-wa, wo</em>

<table>
  <tr><th>Paradigm <i>wo</i></th><th><tt>Ind</tt></th><th><tt>Int</tt></th></tr>
  <tr><td><tt><tt><a href="sce_gdud-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>wo</em></td><td></td></tr>
  <tr><td><tt></tt></td><td><em>wo, wo-u</em></td><td><em>wo</em></td></tr>
</table>

`Mood` seems to be **lexical feature** of `AUX`. 95% lemmas (19) occur only with one value of `Mood`.

### `VERB`

72 <tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt> tokens (60% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="sce_gdud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (72; 100%), <tt><a href="sce_gdud-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (64; 89%), <tt><a href="sce_gdud-feat-Aspect.html">Aspect</a></tt><tt>=EMPTY</tt> (45; 63%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (6; 8% of non-empty `Mood`): <em>kere-ne, da-ne, gie-ne, siragva, ta</em>
* `Ind` (64; 89% of non-empty `Mood`): <em>ʂi, gia, kieliə, ulia, bang, madʑiə-na, sau, bao-zhuo, bi-mu, biandzi</em>
* `Int` (2; 3% of non-empty `Mood`): <em>wai</em>
* `EMPTY` (48): <em>olu, fugiada, gia, ira, puʂi, sumula, Sho-wa, baira, bandzi, dawa</em>

`Mood` seems to be **lexical feature** of `VERB`. 100% lemmas (43) occur only with one value of `Mood`.

### `PART`

2 <tt><a href="sce_gdud-pos-PART.html">PART</a></tt> tokens (8% of all `PART` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `PART` and `Mood` co-occurred: <tt><a href="sce_gdud-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (2; 100%).

`PART` tokens may have the following values of `Mood`:

* `Int` (2; 100% of non-empty `Mood`): <em>u</em>
* `EMPTY` (23): <em>ulia, ja, ni, olu-dʑi, ba, da, dʑiʂi, kuŋ, la, ma</em>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<tt><a href="sce_gdud-dep-aux.html">aux</a></tt>]--> AUX</tt> (27; 57%),
<tt>AUX --[<tt><a href="sce_gdud-dep-parataxis.html">parataxis</a></tt>]--> AUX</tt> (7; 100%),
<tt>VERB --[<tt><a href="sce_gdud-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (6; 86%),
<tt>AUX --[<tt><a href="sce_gdud-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (4; 100%),
<tt>VERB --[<tt><a href="sce_gdud-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (4; 100%),
<tt>VERB --[<tt><a href="sce_gdud-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (3; 100%),
<tt>AUX --[<tt><a href="sce_gdud-dep-conj.html">conj</a></tt>]--> AUX</tt> (2; 100%),
<tt>AUX --[<tt><a href="sce_gdud-dep-nsubj.html">nsubj</a></tt>]--> VERB</tt> (2; 100%),
<tt>VERB --[<tt><a href="sce_gdud-dep-compound-svc.html">compound:svc</a></tt>]--> VERB</tt> (2; 67%),
<tt>VERB --[<tt><a href="sce_gdud-dep-conj.html">conj</a></tt>]--> VERB</tt> (2; 100%).

