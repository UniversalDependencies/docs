---
layout: base
title:  'Statistics of VerbForm in UD_Afrikaans-AfriBooms'
udver: '2'
---

## Treebank Statistics: UD_Afrikaans-AfriBooms: Features: `VerbForm`

This feature is universal.
It occurs with 3 different values: `Fin`, `Inf`, `Part`.
Some words have combined values of the feature; 1 combinations have been observed: `Fin|Inf`.

7590 tokens (15%) have a non-empty value of `VerbForm`.
1019 types (17%) occur at least once with a non-empty value of `VerbForm`.
788 lemmas (15%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="af_afribooms-pos-VERB.html">VERB</a></tt> (4446; 9% instances), <tt><a href="af_afribooms-pos-AUX.html">AUX</a></tt> (3144; 6% instances).

### `VERB`

4446 <tt><a href="af_afribooms-pos-VERB.html">VERB</a></tt> tokens (100% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="af_afribooms-feat-Subcat.html">Subcat</a></tt><tt>=Tran</tt> (3697; 83%), <tt><a href="af_afribooms-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (3544; 80%).

`VERB` tokens may have the following values of `VerbForm`:

* `Fin` (2; 0% of non-empty `VerbForm`): <em>gelyk, het</em>
* `Fin,Inf` (3543; 80% of non-empty `VerbForm`): <em>doen, maak, gebruik, verbeter, het, verseker, stel, betaal, verskaf, gaan</em>
* `Part` (901; 20% of non-empty `VerbForm`): <em>gemaak, gedoen, gestel, uitgereik, geneem, geregistreer, ingedien, ingevul, gebaseer, ingevoer</em>

<table>
  <tr><th>Paradigm <i>het</i></th><th><tt>Fin</tt></th><th><tt>Fin,Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt><tt><a href="af_afribooms-feat-Subcat.html">Subcat</a></tt><tt>=Intr</tt>|<tt><a href="af_afribooms-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td><em>het</em></td><td></td></tr>
  <tr><td><tt><tt><a href="af_afribooms-feat-Subcat.html">Subcat</a></tt><tt>=Tran</tt>|<tt><a href="af_afribooms-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td></td><td><em>gehad</em></td></tr>
  <tr><td><tt><tt><a href="af_afribooms-feat-Subcat.html">Subcat</a></tt><tt>=Tran</tt>|<tt><a href="af_afribooms-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>het</em></td><td><em>het, hê</em></td><td></td></tr>
</table>

### `AUX`

3144 <tt><a href="af_afribooms-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="af_afribooms-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (2780; 88%).

`AUX` tokens may have the following values of `VerbForm`:

* `Fin` (364; 12% of non-empty `VerbForm`): <em>is, was, moes, sou, kon, gewees, wees, wou</em>
* `Fin,Inf` (2780; 88% of non-empty `VerbForm`): <em>word, is, sal, het, moet, kan, wees, wil, mag, behoort</em>

<table>
  <tr><th>Paradigm <i>wees</i></th><th><tt>Fin</tt></th><th><tt>Fin,Inf</tt></th></tr>
  <tr><td><tt><tt><a href="af_afribooms-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="af_afribooms-feat-VerbType.html">VerbType</a></tt><tt>=Cop</tt></tt></td><td><em>was, gewees</em></td><td></td></tr>
  <tr><td><tt><tt><a href="af_afribooms-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="af_afribooms-feat-VerbType.html">VerbType</a></tt><tt>=Pas</tt></tt></td><td><em>is, wees</em></td><td></td></tr>
  <tr><td><tt><tt><a href="af_afribooms-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="af_afribooms-feat-VerbType.html">VerbType</a></tt><tt>=Cop</tt></tt></td><td></td><td><em>is, wees</em></td></tr>
  <tr><td><tt><tt><a href="af_afribooms-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="af_afribooms-feat-VerbType.html">VerbType</a></tt><tt>=Pas</tt></tt></td><td></td><td><em>wees</em></td></tr>
</table>

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<tt><a href="af_afribooms-dep-aux.html">aux</a></tt>]--> AUX</tt> (993; 67%),
<tt>VERB --[<tt><a href="af_afribooms-dep-obl.html">obl</a></tt>]--> VERB</tt> (414; 81%),
<tt>VERB --[<tt><a href="af_afribooms-dep-dep.html">dep</a></tt>]--> VERB</tt> (300; 68%),
<tt>VERB --[<tt><a href="af_afribooms-dep-conj.html">conj</a></tt>]--> VERB</tt> (249; 76%),
<tt>VERB --[<tt><a href="af_afribooms-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (126; 70%),
<tt>VERB --[<tt><a href="af_afribooms-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (117; 98%),
<tt>VERB --[<tt><a href="af_afribooms-dep-cop.html">cop</a></tt>]--> AUX</tt> (36; 82%),
<tt>VERB --[<tt><a href="af_afribooms-dep-obj.html">obj</a></tt>]--> VERB</tt> (19; 86%),
<tt>AUX --[<tt><a href="af_afribooms-dep-dep.html">dep</a></tt>]--> VERB</tt> (15; 79%),
<tt>VERB --[<tt><a href="af_afribooms-dep-xcomp.html">xcomp</a></tt>]--> AUX</tt> (8; 100%).

