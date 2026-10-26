---
layout: base
title:  'Statistics of Person in UD_Middle_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Middle_French-ALTM: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

631 tokens (9%) have a non-empty value of `Person`.
192 types (17%) occur at least once with a non-empty value of `Person`.
98 lemmas (13%) occur at least once with a non-empty value of `Person`.
The feature is used with 2 part-of-speech tags: <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> (367; 5% instances), <tt><a href="frm_altm-pos-AUX.html">AUX</a></tt> (264; 4% instances).

### `VERB`

367 <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> tokens (40% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="frm_altm-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (367; 100%), <tt><a href="frm_altm-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (367; 100%), <tt><a href="frm_altm-feat-Number.html">Number</a></tt><tt>=Sing</tt> (315; 86%).

`VERB` tokens may have the following values of `Person`:

* `1` (23; 6% of non-empty `Person`): <em>parlerons, adjourne, adjournons, certiffions, commencerons, contraing, coutraing, croy, dirons, doy</em>
* `2` (5; 1% of non-empty `Person`): <em>oés, adjourniez, fachiez</em>
* `3` (339; 92% of non-empty `Person`): <em>est, convient, fait, a, face, requiert, fera, soit, veult, dit</em>
* `EMPTY` (551): <em>faire, fait, dit, adjourner, assavoir, noter, avoir, venir, prins, faicte</em>

<table>
  <tr><th>Paradigm <i>ajourner</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="frm_altm-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>adjourne</em></td><td></td><td><em>adjourne</em></td></tr>
  <tr><td><tt><tt><a href="frm_altm-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>adjournons</em></td><td><em>adjourniez</em></td><td></td></tr>
</table>

`Person` seems to be **lexical feature** of `VERB`. 92% lemmas (90) occur only with one value of `Person`.

### `AUX`

264 <tt><a href="frm_altm-pos-AUX.html">AUX</a></tt> tokens (92% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="frm_altm-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (264; 100%), <tt><a href="frm_altm-feat-Number.html">Number</a></tt><tt>=Sing</tt> (239; 91%).

`AUX` tokens may have the following values of `Person`:

* `1` (13; 5% of non-empty `Person`): <em>suis, doys, puis, avoye, ay, doy, doye</em>
* `2` (1; 0% of non-empty `Person`): <em>fustes</em>
* `3` (250; 95% of non-empty `Person`): <em>est, doit, a, sera, peult, soit, sont, estoit, aura, doivent</em>
* `EMPTY` (24): <em>estre, esté, devra, este, été, être</em>

<table>
  <tr><th>Paradigm <i>être</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="frm_altm-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>suis</em></td><td></td><td><em>est, sera, soit, estoit, fu, fust, seroit, fut</em></td></tr>
  <tr><td><tt><tt><a href="frm_altm-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>fustes</em></td><td><em>sont, soient</em></td></tr>
</table>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<tt><a href="frm_altm-dep-conj.html">conj</a></tt>]--> VERB</tt> (37; 64%),
<tt>VERB --[<tt><a href="frm_altm-dep-dislocated.html">dislocated</a></tt>]--> VERB</tt> (1; 100%).

