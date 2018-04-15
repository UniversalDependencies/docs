---
layout: base
title:  'Statistics of VerbForm in UD_Afrikaans-AfriBooms'
udver: '2'
---

## Treebank Statistics: UD_Afrikaans-AfriBooms: Features: `VerbForm`

This feature is universal.
It occurs with 3 different values: `Fin`, `Inf`, `Part`.
Some words have combined values of the feature; 1 combinations have been observed: `Fin|Inf`.

7591 tokens (15%) have a non-empty value of `VerbForm`.
1030 types (17%) occur at least once with a non-empty value of `VerbForm`.
797 lemmas (15%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="af_afribooms-pos-VERB.html">VERB</a></tt> (4317; 9% instances), <tt><a href="af_afribooms-pos-AUX.html">AUX</a></tt> (3274; 7% instances).

### `VERB`

4317 <tt><a href="af_afribooms-pos-VERB.html">VERB</a></tt> tokens (100% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="af_afribooms-feat-Subcat.html">Subcat</a></tt><tt>=Tran</tt> (3568; 83%), <tt><a href="af_afribooms-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (3424; 79%).

`VERB` tokens may have the following values of `VerbForm`:

* `Fin,Inf` (3424; 79% of non-empty `VerbForm`): <em>doen, maak, gebruik, het, verbeter, verseker, stel, betaal, verskaf, werk</em>
* `Part` (893; 21% of non-empty `VerbForm`): <em>gemaak, gedoen, gestel, uitgereik, geneem, geregistreer, ingedien, ingevul, gebaseer, ingevoer</em>

<table>
  <tr><th>Paradigm <i>doen</i></th><th><tt>Fin,Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt><tt><a href="af_afribooms-feat-Subcat.html">Subcat</a></tt><tt>=Intr</tt>|<tt><a href="af_afribooms-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>doen</em></td><td></td></tr>
  <tr><td><tt><tt><a href="af_afribooms-feat-Subcat.html">Subcat</a></tt><tt>=Tran</tt>|<tt><a href="af_afribooms-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td><em>gedoen</em></td></tr>
  <tr><td><tt><tt><a href="af_afribooms-feat-Subcat.html">Subcat</a></tt><tt>=Tran</tt>|<tt><a href="af_afribooms-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>doen</em></td><td></td></tr>
</table>

### `AUX`

3274 <tt><a href="af_afribooms-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="af_afribooms-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (2899; 89%).

`AUX` tokens may have the following values of `VerbForm`:

* `Fin` (375; 11% of non-empty `VerbForm`): <em>is, was, moes, sou, kon, geword, geraak, geblyk, gelyk, gewees</em>
* `Fin,Inf` (2899; 89% of non-empty `VerbForm`): <em>word, is, sal, het, moet, kan, wees, wil, mag, behoort</em>

<table>
  <tr><th>Paradigm <i>is</i></th><th><tt>Fin</tt></th><th><tt>Fin,Inf</tt></th></tr>
  <tr><td><tt><tt><a href="af_afribooms-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="af_afribooms-feat-VerbType.html">VerbType</a></tt><tt>=Cop</tt></tt></td><td><em>was</em></td><td></td></tr>
  <tr><td><tt><tt><a href="af_afribooms-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="af_afribooms-feat-VerbType.html">VerbType</a></tt><tt>=Pas</tt></tt></td><td><em>is</em></td><td></td></tr>
  <tr><td><tt><tt><a href="af_afribooms-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="af_afribooms-feat-VerbType.html">VerbType</a></tt><tt>=Cop</tt></tt></td><td></td><td><em>is</em></td></tr>
</table>

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<tt><a href="af_afribooms-dep-aux.html">aux</a></tt>]--> AUX</tt> (1004; 67%),
<tt>VERB --[<tt><a href="af_afribooms-dep-obl.html">obl</a></tt>]--> VERB</tt> (362; 79%),
<tt>VERB --[<tt><a href="af_afribooms-dep-conj.html">conj</a></tt>]--> VERB</tt> (237; 75%),
<tt>VERB --[<tt><a href="af_afribooms-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (119; 72%),
<tt>AUX --[<tt><a href="af_afribooms-dep-aux.html">aux</a></tt>]--> AUX</tt> (95; 86%),
<tt>VERB --[<tt><a href="af_afribooms-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (64; 98%),
<tt>VERB --[<tt><a href="af_afribooms-dep-cop.html">cop</a></tt>]--> AUX</tt> (31; 82%),
<tt>AUX --[<tt><a href="af_afribooms-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (24; 75%),
<tt>AUX --[<tt><a href="af_afribooms-dep-conj.html">conj</a></tt>]--> VERB</tt> (21; 66%),
<tt>VERB --[<tt><a href="af_afribooms-dep-xcomp.html">xcomp</a></tt>]--> AUX</tt> (20; 100%).

