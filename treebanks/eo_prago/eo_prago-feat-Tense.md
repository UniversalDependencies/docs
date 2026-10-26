---
layout: base
title:  'Statistics of Tense in UD_Esperanto-Prago'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Prago: Features: `Tense`

This feature is universal.
It occurs with 3 different values: `Fut`, `Past`, `Pres`.

252 tokens (8%) have a non-empty value of `Tense`.
130 types (13%) occur at least once with a non-empty value of `Tense`.
109 lemmas (14%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt> (189; 6% instances), <tt><a href="eo_prago-pos-AUX.html">AUX</a></tt> (63; 2% instances).

### `VERB`

189 <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt> tokens (68% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="eo_prago-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (160; 85%), <tt><a href="eo_prago-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (160; 85%), <tt><a href="eo_prago-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (153; 81%), <tt><a href="eo_prago-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (151; 80%), <tt><a href="eo_prago-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (150; 79%).

`VERB` tokens may have the following values of `Tense`:

* `Fut` (13; 7% of non-empty `Tense`): <em>prezentos, alkutimiĝos, ekzistos, havis, identigos, montriĝos, pasos, realigos, ricevos, uzos</em>
* `Past` (26; 14% of non-empty `Tense`): <em>naskiĝis, aranĝita, ligita, Lanĉita, Planita, alskribita, difinita, donis, ekzistantaj, esprimitaj</em>
* `Pres` (150; 79% of non-empty `Tense`): <em>estas, konscias, asertas, havas, nomas, rigardas, demandas, devas, prezentas, studas</em>
* `EMPTY` (87): <em>akcepti, aliĝi, nomi, agu, fari, ludi, publikigi, resti, rigardi, akceladi</em>

<table>
  <tr><th>Paradigm <i>ekzisti</i></th><th><tt>Pres</tt></th><th><tt>Fut</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="eo_prago-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="eo_prago-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="eo_prago-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt>|<tt><a href="eo_prago-feat-Voice.html">Voice</a></tt><tt>=Pass</tt></tt></td><td></td><td></td><td><em>ekzistantaj</em></td></tr>
  <tr><td><tt><tt><a href="eo_prago-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="eo_prago-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>ekzistis</em></td><td><em>ekzistos</em></td><td></td></tr>
</table>

`Tense` seems to be **lexical feature** of `VERB`. 92% lemmas (99) occur only with one value of `Tense`.

### `AUX`

63 <tt><a href="eo_prago-pos-AUX.html">AUX</a></tt> tokens (86% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="eo_prago-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (63; 100%), <tt><a href="eo_prago-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (63; 100%).

`AUX` tokens may have the following values of `Tense`:

* `Fut` (5; 8% of non-empty `Tense`): <em>estos, povos</em>
* `Pres` (58; 92% of non-empty `Tense`): <em>estas, devas, povas</em>
* `EMPTY` (10): <em>esti, estus, bezonu, ekzistu, estas, estu, povu</em>

<table>
  <tr><th>Paradigm <i>esti</i></th><th><tt>Pres</tt></th><th><tt>Fut</tt></th></tr>
  <tr><td><tt></tt></td><td><em>estas</em></td><td><em>estos</em></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="eo_prago-dep-conj.html">conj</a></tt>]--> VERB</tt> (20; 87%),
<tt>VERB --[<tt><a href="eo_prago-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (12; 52%),
<tt>VERB --[<tt><a href="eo_prago-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (5; 71%).

