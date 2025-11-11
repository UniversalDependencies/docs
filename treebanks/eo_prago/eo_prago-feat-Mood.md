---
layout: base
title:  'Statistics of Mood in UD_Esperanto-Prago'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Prago: Features: `Mood`

This feature is universal.
It occurs with 3 different values: `Imp`, `Ind`, `Sub`.

233 tokens (7%) have a non-empty value of `Mood`.
111 types (11%) occur at least once with a non-empty value of `Mood`.
95 lemmas (12%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt> (164; 5% instances), <tt><a href="eo_prago-pos-AUX.html">AUX</a></tt> (69; 2% instances).

### `VERB`

164 <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt> tokens (59% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="eo_prago-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (164; 100%), <tt><a href="eo_prago-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (164; 100%), <tt><a href="eo_prago-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (164; 100%), <tt><a href="eo_prago-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (161; 98%), <tt><a href="eo_prago-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (128; 78%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (7; 4% of non-empty `Mood`): <em>sciu, agu, konu, mirigu, povu</em>
* `Ind` (150; 91% of non-empty `Mood`): <em>estas, konscias, asertas, havas, nomas, rigardas, demandas, devas, naskiĝis, prezentas</em>
* `Sub` (7; 4% of non-empty `Mood`): <em>altrudu, amus, devus, dezirus, havu, investu, profitus</em>
* `EMPTY` (112): <em>akcepti, aliĝi, nomi, Konsciante, aranĝita, fari, ligita, ludi, publikigi, resti</em>

<table>
  <tr><th>Paradigm <i>havi</i></th><th><tt>Ind</tt></th><th><tt>Sub</tt></th></tr>
  <tr><td><tt><tt><a href="eo_prago-feat-Tense.html">Tense</a></tt><tt>=Fut</tt></tt></td><td><em>havis</em></td><td></td></tr>
  <tr><td><tt><tt><a href="eo_prago-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>havas</em></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>havu</em></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 96% lemmas (90) occur only with one value of `Mood`.

### `AUX`

69 <tt><a href="eo_prago-pos-AUX.html">AUX</a></tt> tokens (95% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="eo_prago-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (69; 100%), <tt><a href="eo_prago-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (58; 84%).

`AUX` tokens may have the following values of `Mood`:

* `Imp` (2; 3% of non-empty `Mood`): <em>ekzistu, estu</em>
* `Ind` (63; 91% of non-empty `Mood`): <em>estas, devas, povas, estos, povos</em>
* `Sub` (4; 6% of non-empty `Mood`): <em>estus, bezonu, povu</em>
* `EMPTY` (4): <em>esti, estas</em>

<table>
  <tr><th>Paradigm <i>esti</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th><th><tt>Sub</tt></th></tr>
  <tr><td><tt><tt><a href="eo_prago-feat-Tense.html">Tense</a></tt><tt>=Fut</tt></tt></td><td><em>estos</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="eo_prago-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>estas</em></td><td></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>ekzistu, estu</em></td><td><em>estus</em></td></tr>
</table>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<tt><a href="eo_prago-dep-conj.html">conj</a></tt>]--> VERB</tt> (17; 74%),
<tt>VERB --[<tt><a href="eo_prago-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (13; 62%),
<tt>VERB --[<tt><a href="eo_prago-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (5; 71%),
<tt>AUX --[<tt><a href="eo_prago-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (1; 100%).

