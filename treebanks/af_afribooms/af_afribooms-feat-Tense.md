---
layout: base
title:  'Statistics of Tense in UD_Afrikaans-AfriBooms'
udver: '2'
---

## Treebank Statistics: UD_Afrikaans-AfriBooms: Features: `Tense`

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

7590 tokens (15%) have a non-empty value of `Tense`.
1029 types (17%) occur at least once with a non-empty value of `Tense`.
794 lemmas (15%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="af_afribooms-pos-VERB.html">VERB</a></tt> (4445; 9% instances), <tt><a href="af_afribooms-pos-AUX.html">AUX</a></tt> (3145; 6% instances).

### `VERB`

4445 <tt><a href="af_afribooms-pos-VERB.html">VERB</a></tt> tokens (100% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="af_afribooms-feat-Subcat.html">Subcat</a></tt><tt>=Tran</tt> (3696; 83%), <tt><a href="af_afribooms-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin,Inf</tt> (3543; 80%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (902; 20% of non-empty `Tense`): <em>gemaak, gedoen, gestel, uitgereik, geneem, geregistreer, ingedien, ingevul, gebaseer, ingevoer</em>
* `Pres` (3543; 80% of non-empty `Tense`): <em>doen, maak, gebruik, verbeter, het, verseker, stel, betaal, verskaf, gaan</em>

<table>
  <tr><th>Paradigm <i>doen</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="af_afribooms-feat-Subcat.html">Subcat</a></tt><tt>=Intr</tt>|<tt><a href="af_afribooms-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin,Inf</tt></tt></td><td><em>doen</em></td><td></td></tr>
  <tr><td><tt><tt><a href="af_afribooms-feat-Subcat.html">Subcat</a></tt><tt>=Tran</tt>|<tt><a href="af_afribooms-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin,Inf</tt></tt></td><td><em>doen</em></td><td></td></tr>
  <tr><td><tt><tt><a href="af_afribooms-feat-Subcat.html">Subcat</a></tt><tt>=Tran</tt>|<tt><a href="af_afribooms-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt></tt></td><td></td><td><em>gedoen</em></td></tr>
</table>

### `AUX`

3145 <tt><a href="af_afribooms-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="af_afribooms-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin,Inf</tt> (2781; 88%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (364; 12% of non-empty `Tense`): <em>is, was, moes, sou, kon, gewees, wees, wou</em>
* `Pres` (2781; 88% of non-empty `Tense`): <em>word, is, sal, het, moet, kan, wees, wil, mag, behoort</em>

<table>
  <tr><th>Paradigm <i>wees</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="af_afribooms-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin,Inf</tt>|<tt><a href="af_afribooms-feat-VerbType.html">VerbType</a></tt><tt>=Cop</tt></tt></td><td><em>is, wees</em></td><td></td></tr>
  <tr><td><tt><tt><a href="af_afribooms-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin,Inf</tt>|<tt><a href="af_afribooms-feat-VerbType.html">VerbType</a></tt><tt>=Pas</tt></tt></td><td><em>wees</em></td><td></td></tr>
  <tr><td><tt><tt><a href="af_afribooms-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt>|<tt><a href="af_afribooms-feat-VerbType.html">VerbType</a></tt><tt>=Cop</tt></tt></td><td></td><td><em>was, gewees</em></td></tr>
  <tr><td><tt><tt><a href="af_afribooms-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt>|<tt><a href="af_afribooms-feat-VerbType.html">VerbType</a></tt><tt>=Pas</tt></tt></td><td></td><td><em>is, wees</em></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="af_afribooms-dep-aux.html">aux</a></tt>]--> AUX</tt> (995; 67%),
<tt>VERB --[<tt><a href="af_afribooms-dep-obl.html">obl</a></tt>]--> VERB</tt> (414; 81%),
<tt>VERB --[<tt><a href="af_afribooms-dep-dep.html">dep</a></tt>]--> VERB</tt> (301; 68%),
<tt>VERB --[<tt><a href="af_afribooms-dep-conj.html">conj</a></tt>]--> VERB</tt> (249; 76%),
<tt>VERB --[<tt><a href="af_afribooms-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (126; 70%),
<tt>VERB --[<tt><a href="af_afribooms-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (117; 98%),
<tt>VERB --[<tt><a href="af_afribooms-dep-cop.html">cop</a></tt>]--> AUX</tt> (38; 84%),
<tt>VERB --[<tt><a href="af_afribooms-dep-obj.html">obj</a></tt>]--> VERB</tt> (19; 86%),
<tt>AUX --[<tt><a href="af_afribooms-dep-dep.html">dep</a></tt>]--> VERB</tt> (15; 79%),
<tt>VERB --[<tt><a href="af_afribooms-dep-xcomp.html">xcomp</a></tt>]--> AUX</tt> (8; 100%).

