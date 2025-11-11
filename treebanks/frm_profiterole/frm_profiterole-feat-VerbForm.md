---
layout: base
title:  'Statistics of VerbForm in UD_Middle_French-PROFITEROLE'
udver: '2'
---

## Treebank Statistics: UD_Middle_French-PROFITEROLE: Features: `VerbForm`

This feature is universal.
It occurs with 3 different values: `Fin`, `Inf`, `Part`.

14554 tokens (16%) have a non-empty value of `VerbForm`.
3597 types (48%) occur at least once with a non-empty value of `VerbForm`.
843 lemmas (24%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="frm_profiterole-pos-VERB.html">VERB</a></tt> (11554; 13% instances), <tt><a href="frm_profiterole-pos-AUX.html">AUX</a></tt> (3000; 3% instances).

### `VERB`

11554 <tt><a href="frm_profiterole-pos-VERB.html">VERB</a></tt> tokens (100% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="frm_profiterole-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (8506; 74%).

`VERB` tokens may have the following values of `VerbForm`:

* `Fin` (6227; 54% of non-empty `VerbForm`): <em>dit, avoit, estoit, est, a, estoient, vint, fist, dist, vindrent</em>
* `Inf` (2279; 20% of non-empty `VerbForm`): <em>faire, dire, avoir, veoir, venir, parler, aller, passer, prendre, tenir</em>
* `Part` (3048; 26% of non-empty `VerbForm`): <em>dit, fait, esté, dicte, veu, diz, prins, disant, dictes, eu</em>
* `EMPTY` (20): <em>ensuivant, moriginee, assiegee, aymez, cassé, dit, fatiguee, hardi, mors, mort</em>

<table>
  <tr><th>Paradigm <i>dire1</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>dit, dist, dirent, disoit, dictes, disoient, diray, dy, dis, dira, disoyent, dient, direz, dittes, diz, deissent, deissions, di, dict, die, dirai, dirons, diront, disent, disiez, disoye, dissent, dites, ditz, dye, dyent</em></td><td><em>dire</em></td><td></td></tr>
  <tr><td><tt><tt><a href="frm_profiterole-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td></td><td><em>dit, dicte, diz, dictes, dite, dites, dict, ditte, ditz, dittes, quelles</em></td></tr>
  <tr><td><tt><tt><a href="frm_profiterole-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>disant, disanz, dit</em></td></tr>
</table>

### `AUX`

3000 <tt><a href="frm_profiterole-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `VerbForm`.

`AUX` tokens may have the following values of `VerbForm`:

* `Fin` (2763; 92% of non-empty `VerbForm`): <em>estoit, est, avoit, fut, estoient, ay, furent, a, avoient, sont</em>
* `Inf` (120; 4% of non-empty `VerbForm`): <em>estre, avoir, povoir, pouvoir, vouloir</em>
* `Part` (117; 4% of non-empty `VerbForm`): <em>esté, peu, voulu, estez, voullu, Estant</em>
* `EMPTY` (3): <em>soit, peu</em>

<table>
  <tr><th>Paradigm <i>être</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>estoit, est, fut, estoient, furent, sont, fu, fust, soit, seroit, sera, suis, estoyent, estes, fussent, soient, sommes, seront, soyez, feust, seroient, suys, feussent, serez, seroye, soyent, estez, estions, estoye, soye, soyons, esse, estoie, estoies, estois, feussions, fus, fusmes, fusse, fussiés, seras, seray, seriez, serons</em></td><td><em>estre</em></td><td></td></tr>
  <tr><td><tt><tt><a href="frm_profiterole-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td></td><td><em>esté, estez</em></td></tr>
  <tr><td><tt><tt><a href="frm_profiterole-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>Estant</em></td></tr>
</table>

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<tt><a href="frm_profiterole-dep-conj.html">conj</a></tt>]--> VERB</tt> (602; 85%),
<tt>VERB --[<tt><a href="frm_profiterole-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (350; 55%),
<tt>VERB --[<tt><a href="frm_profiterole-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (145; 82%),
<tt>VERB --[<tt><a href="frm_profiterole-dep-advcl.html">advcl</a></tt>]--> AUX</tt> (7; 64%),
<tt>VERB --[<tt><a href="frm_profiterole-dep-acl-relcl.html">acl:relcl</a></tt>]--> VERB</tt> (6; 86%),
<tt>AUX --[<tt><a href="frm_profiterole-dep-conj.html">conj</a></tt>]--> VERB</tt> (3; 75%),
<tt>VERB --[<tt><a href="frm_profiterole-dep-nsubj.html">nsubj</a></tt>]--> VERB</tt> (3; 60%),
<tt>AUX --[<tt><a href="frm_profiterole-dep-conj.html">conj</a></tt>]--> AUX</tt> (2; 100%),
<tt>VERB --[<tt><a href="frm_profiterole-dep-dep.html">dep</a></tt>]--> VERB</tt> (1; 100%).

