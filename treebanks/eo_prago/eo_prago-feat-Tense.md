---
layout: base
title:  'Statistics of Tense in UD_Esperanto-Prago'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Prago: Features: `Tense`

This feature is universal.
It occurs with 3 different values: `Fut`, `Past`, `Pres`.

311 tokens (8%) have a non-empty value of `Tense`.
158 types (14%) occur at least once with a non-empty value of `Tense`.
125 lemmas (14%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt> (233; 6% instances), <tt><a href="eo_prago-pos-AUX.html">AUX</a></tt> (78; 2% instances).

### `VERB`

233 <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt> tokens (70% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="eo_prago-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (187; 80%), <tt><a href="eo_prago-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (187; 80%), <tt><a href="eo_prago-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (180; 77%), <tt><a href="eo_prago-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (178; 76%), <tt><a href="eo_prago-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (177; 76%).

`VERB` tokens may have the following values of `Tense`:

* `Fut` (14; 6% of non-empty `Tense`): <em>prezentos, alkutimiĝos, ekzistos, havis, identigos, kondukos, montriĝos, pasos, realigos, ricevos</em>
* `Past` (39; 17% of non-empty `Tense`): <em>naskiĝis, aranĝita, ligita, trovis, Akceptita, Lanĉita, Planita, alskribita, difinita, dirita</em>
* `Pres` (180; 77% of non-empty `Tense`): <em>havas, estas, konscias, asertas, nomas, rigardas, prezentas, demandas, devas, deziras</em>
* `EMPTY` (99): <em>akcepti, aliĝi, fari, nomi, agu, doni, ludi, publikigi, resti, rigardi</em>

<table>
  <tr><th>Paradigm <i>ekzisti</i></th><th><tt>Pres</tt></th><th><tt>Fut</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="eo_prago-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="eo_prago-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="eo_prago-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt>|<tt><a href="eo_prago-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td><em>ekzistantajn</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="eo_prago-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="eo_prago-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="eo_prago-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt>|<tt><a href="eo_prago-feat-Voice.html">Voice</a></tt><tt>=Pass</tt></tt></td><td></td><td></td><td><em>ekzistantaj</em></td></tr>
  <tr><td><tt><tt><a href="eo_prago-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="eo_prago-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>ekzistis</em></td><td><em>ekzistos</em></td><td></td></tr>
</table>

### `AUX`

78 <tt><a href="eo_prago-pos-AUX.html">AUX</a></tt> tokens (83% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="eo_prago-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (78; 100%), <tt><a href="eo_prago-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (78; 100%).

`AUX` tokens may have the following values of `Tense`:

* `Fut` (8; 10% of non-empty `Tense`): <em>estos, povos</em>
* `Pres` (70; 90% of non-empty `Tense`): <em>estas, devas, povas</em>
* `EMPTY` (16): <em>esti, estus, povus, bezonu, ekzistu, estas, estu, povu</em>

<table>
  <tr><th>Paradigm <i>esti</i></th><th><tt>Pres</tt></th><th><tt>Fut</tt></th></tr>
  <tr><td><tt></tt></td><td><em>estas</em></td><td><em>estos</em></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="eo_prago-dep-conj.html">conj</a></tt>]--> VERB</tt> (24; 77%),
<tt>VERB --[<tt><a href="eo_prago-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (5; 71%).

