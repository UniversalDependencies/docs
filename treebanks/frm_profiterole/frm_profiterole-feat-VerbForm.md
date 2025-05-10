---
layout: base
title:  'Statistics of VerbForm in UD_Middle_French-PROFITEROLE'
udver: '2'
---

## Treebank Statistics: UD_Middle_French-PROFITEROLE: Features: `VerbForm`

This feature is universal.
It occurs with 3 different values: `Fin`, `Inf`, `Part`.

10954 tokens (16%) have a non-empty value of `VerbForm`.
2721 types (46%) occur at least once with a non-empty value of `VerbForm`.
672 lemmas (23%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="frm_profiterole-pos-VERB.html">VERB</a></tt> (8680; 13% instances), <tt><a href="frm_profiterole-pos-AUX.html">AUX</a></tt> (2274; 3% instances).

### `VERB`

8680 <tt><a href="frm_profiterole-pos-VERB.html">VERB</a></tt> tokens (100% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="frm_profiterole-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (6220; 72%).

`VERB` tokens may have the following values of `VerbForm`:

* `Fin` (4647; 54% of non-empty `VerbForm`): <em>dit, avoit, estoit, vint, estoient, est, fist, fit, vindrent, a</em>
* `Inf` (1573; 18% of non-empty `VerbForm`): <em>faire, dire, veoir, parler, venir, avoir, passer, aller, prendre, tenir</em>
* `Part` (2460; 28% of non-empty `VerbForm`): <em>dit, fait, dicte, diz, esté, veu, dictes, disant, appellé, dite</em>
* `EMPTY` (18): <em>ensuivant, moriginee, assiegee, aymez, cassé, dit, fatiguee, hardi, mors, mort</em>

<table>
  <tr><th>Paradigm <i>dire1</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>dit, disoit, dictes, dirent, dist, disoient, diray, dis, dy, disoyent, direz, diz, deissent, deissions, di, dict, die, dient, dira, dirons, disent, disiez, disoye, dissent, dye, dyent</em></td><td><em>dire</em></td><td></td></tr>
  <tr><td><tt><tt><a href="frm_profiterole-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td></td><td><em>dit, dicte, diz, dictes, dite, dites, dict, ditte, ditz, quelles</em></td></tr>
  <tr><td><tt><tt><a href="frm_profiterole-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>disant, disanz, dit</em></td></tr>
</table>

### `AUX`

2274 <tt><a href="frm_profiterole-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `VerbForm`.

`AUX` tokens may have the following values of `VerbForm`:

* `Fin` (2103; 92% of non-empty `VerbForm`): <em>estoit, avoit, fut, est, estoient, furent, ay, a, avoient, eust</em>
* `Inf` (76; 3% of non-empty `VerbForm`): <em>estre, avoir, povoir, pouvoir, vouloir</em>
* `Part` (95; 4% of non-empty `VerbForm`): <em>esté, peu, estez, voulu, Estant</em>
* `EMPTY` (2): <em>peu, soit</em>

<table>
  <tr><th>Paradigm <i>être</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>estoit, fut, est, estoient, furent, fu, sont, fust, seroit, suis, soit, estoyent, sera, estes, fussent, sommes, soient, soyez, feust, seront, feussent, seroient, seroye, suys, estez, estions, estoye, soye, soyent, esse, estois, fus, fusmes, fusse, seray, serez, seriez, soyons</em></td><td><em>estre</em></td><td></td></tr>
  <tr><td><tt><tt><a href="frm_profiterole-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td></td><td><em>esté, estez</em></td></tr>
  <tr><td><tt><tt><a href="frm_profiterole-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>Estant</em></td></tr>
</table>

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<tt><a href="frm_profiterole-dep-conj.html">conj</a></tt>]--> VERB</tt> (338; 82%),
<tt>VERB --[<tt><a href="frm_profiterole-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (240; 54%),
<tt>VERB --[<tt><a href="frm_profiterole-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (117; 83%),
<tt>VERB --[<tt><a href="frm_profiterole-dep-acl-relcl.html">acl:relcl</a></tt>]--> VERB</tt> (5; 83%),
<tt>VERB --[<tt><a href="frm_profiterole-dep-acl.html">acl</a></tt>]--> VERB</tt> (4; 57%),
<tt>VERB --[<tt><a href="frm_profiterole-dep-nsubj.html">nsubj</a></tt>]--> VERB</tt> (3; 60%),
<tt>AUX --[<tt><a href="frm_profiterole-dep-conj.html">conj</a></tt>]--> AUX</tt> (2; 100%),
<tt>AUX --[<tt><a href="frm_profiterole-dep-conj.html">conj</a></tt>]--> VERB</tt> (2; 67%),
<tt>VERB --[<tt><a href="frm_profiterole-dep-dep.html">dep</a></tt>]--> VERB</tt> (1; 100%).

