---
layout: base
title:  'Statistics of VerbForm in UD_Esperanto-Prago'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Prago: Features: `VerbForm`

This feature is universal.
It occurs with 4 different values: `Fin`, `Ger`, `Inf`, `Part`.

343 tokens (11%) have a non-empty value of `VerbForm`.
205 types (21%) occur at least once with a non-empty value of `VerbForm`.
157 lemmas (20%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt> (271; 9% instances), <tt><a href="eo_prago-pos-AUX.html">AUX</a></tt> (72; 2% instances).

### `VERB`

271 <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt> tokens (98% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="eo_prago-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (242; 89%), <tt><a href="eo_prago-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (242; 89%), <tt><a href="eo_prago-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (235; 87%), <tt><a href="eo_prago-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (150; 55%), <tt><a href="eo_prago-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (150; 55%).

`VERB` tokens may have the following values of `VerbForm`:

* `Fin` (161; 59% of non-empty `VerbForm`): <em>estas, konscias, asertas, havas, nomas, rigardas, demandas, devas, naskiĝis, prezentas</em>
* `Ger` (1; 0% of non-empty `VerbForm`): <em>parolantoj</em>
* `Inf` (72; 27% of non-empty `VerbForm`): <em>akcepti, aliĝi, nomi, fari, ludi, publikigi, resti, rigardi, akceladi, aldoni</em>
* `Part` (37; 14% of non-empty `VerbForm`): <em>Konsciante, aranĝita, ligita, supozata, Lanĉita, Planita, alskribita, barante, difinita, donante</em>
* `EMPTY` (5): <em>konu, mirigu, naskas, sciu, volas</em>

<table>
  <tr><th>Paradigm <i>nomi</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>nomi</em></td><td></td></tr>
  <tr><td><tt><tt><a href="eo_prago-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="eo_prago-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="eo_prago-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="eo_prago-feat-Voice.html">Voice</a></tt><tt>=Pass</tt></tt></td><td></td><td></td><td><em>nomata</em></td></tr>
  <tr><td><tt><tt><a href="eo_prago-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="eo_prago-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>nomas</em></td><td></td><td></td></tr>
</table>

### `AUX`

72 <tt><a href="eo_prago-pos-AUX.html">AUX</a></tt> tokens (99% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="eo_prago-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (63; 88%), <tt><a href="eo_prago-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (58; 81%).

`AUX` tokens may have the following values of `VerbForm`:

* `Fin` (69; 96% of non-empty `VerbForm`): <em>estas, devas, povas, estos, estus, bezonu, ekzistu, estu, povos, povu</em>
* `Inf` (3; 4% of non-empty `VerbForm`): <em>esti</em>
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
<tt>VERB --[<tt><a href="eo_prago-dep-conj.html">conj</a></tt>]--> VERB</tt> (37; 88%),
<tt>VERB --[<tt><a href="eo_prago-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (16; 73%),
<tt>VERB --[<tt><a href="eo_prago-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (5; 71%),
<tt>AUX --[<tt><a href="eo_prago-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (1; 100%).

