---
layout: base
title:  'Statistics of VerbForm in UD_Esperanto-Prago'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Prago: Features: `VerbForm`

This feature is universal.
It occurs with 4 different values: `Fin`, `Ger`, `Inf`, `Part`.

420 tokens (11%) have a non-empty value of `VerbForm`.
243 types (21%) occur at least once with a non-empty value of `VerbForm`.
177 lemmas (19%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt> (327; 9% instances), <tt><a href="eo_prago-pos-AUX.html">AUX</a></tt> (93; 2% instances).

### `VERB`

327 <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt> tokens (98% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="eo_prago-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (281; 86%), <tt><a href="eo_prago-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (281; 86%), <tt><a href="eo_prago-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (274; 84%), <tt><a href="eo_prago-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (180; 55%), <tt><a href="eo_prago-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (177; 54%).

`VERB` tokens may have the following values of `VerbForm`:

* `Fin` (189; 58% of non-empty `VerbForm`): <em>havas, estas, konscias, asertas, nomas, rigardas, prezentas, demandas, devas, deziras</em>
* `Ger` (1; 0% of non-empty `VerbForm`): <em>parolantoj</em>
* `Inf` (83; 25% of non-empty `VerbForm`): <em>akcepti, aliĝi, fari, nomi, doni, ludi, publikigi, resti, rigardi, servi</em>
* `Part` (54; 17% of non-empty `VerbForm`): <em>Konsciante, aranĝita, ligita, publikigataj, supozata, Akceptita, Lanĉita, Planita, alskribita, atingata</em>
* `EMPTY` (5): <em>konu, mirigu, naskas, sciu, volas</em>

<table>
  <tr><th>Paradigm <i>nomi</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>nomi</em></td><td></td></tr>
  <tr><td><tt><tt><a href="eo_prago-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="eo_prago-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="eo_prago-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="eo_prago-feat-Voice.html">Voice</a></tt><tt>=Pass</tt></tt></td><td></td><td></td><td><em>nomata</em></td></tr>
  <tr><td><tt><tt><a href="eo_prago-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="eo_prago-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>nomas</em></td><td></td><td></td></tr>
</table>

### `AUX`

93 <tt><a href="eo_prago-pos-AUX.html">AUX</a></tt> tokens (99% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="eo_prago-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (78; 84%), <tt><a href="eo_prago-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (70; 75%).

`AUX` tokens may have the following values of `VerbForm`:

* `Fin` (86; 92% of non-empty `VerbForm`): <em>estas, devas, povas, estos, estus, povus, bezonu, ekzistu, estu, povos</em>
* `Inf` (7; 8% of non-empty `VerbForm`): <em>esti</em>
* `EMPTY` (1): <em>estas</em>

<table>
  <tr><th>Paradigm <i>esti</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>esti</em></td></tr>
  <tr><td><tt><tt><a href="eo_prago-feat-Mood.html">Mood</a></tt><tt>=Imp</tt></tt></td><td><em>ekzistu, estu</em></td><td></td></tr>
  <tr><td><tt><tt><a href="eo_prago-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="eo_prago-feat-Tense.html">Tense</a></tt><tt>=Fut</tt></tt></td><td><em>estos</em></td><td></td></tr>
  <tr><td><tt><tt><a href="eo_prago-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="eo_prago-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>estas</em></td><td></td></tr>
  <tr><td><tt><tt><a href="eo_prago-feat-Mood.html">Mood</a></tt><tt>=Sub</tt></tt></td><td><em>estus</em></td><td></td></tr>
</table>

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<tt><a href="eo_prago-dep-conj.html">conj</a></tt>]--> VERB</tt> (45; 88%),
<tt>VERB --[<tt><a href="eo_prago-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (16; 73%),
<tt>VERB --[<tt><a href="eo_prago-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (5; 71%),
<tt>AUX --[<tt><a href="eo_prago-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (1; 100%).

