---
layout: base
title:  'Statistics of PronType in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Features: `PronType`

This feature is universal.
It occurs with 6 different values: `Art`, `Dem`, `Ind`, `Int`, `Prs`, `Rel`.

8456 tokens (12%) have a non-empty value of `PronType`.
180 types (3%) occur at least once with a non-empty value of `PronType`.
48 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (6143; 9% instances), <tt><a href="fr_alts-pos-DET.html">DET</a></tt> (2311; 3% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (2; 0% instances).

### `PRON`

6143 <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> tokens (98% of all `PRON` tokens) have a non-empty value of `PronType`.

`PRON` tokens may have the following values of `PronType`:

* `Dem` (641; 10% of non-empty `PronType`): <em>ce, c', cela, celuy, ceux, ceulx, iceluy, icelle, yceulx, cecy</em>
* `Ind` (232; 4% of non-empty `PronType`): <em>tout, ung, aultre, autre, une, rien, un, vne, aultres, autres</em>
* `Int` (5; 0% of non-empty `PronType`): <em>que, qu', qui, quy</em>
* `Prs` (4337; 71% of non-empty `PronType`): <em>il, luy, elle, en, ilz, y, se, on, s', le</em>
* `Rel` (928; 15% of non-empty `PronType`): <em>qui, que, ou, lequell, laquelle, qu', lequel, dont, don, lesquelz</em>
* `EMPTY` (126): <em>autre, se, tout, aucun, quis, y, autres, rien, autruy, en</em>

<table>
  <tr><th>Paradigm <i>que</i></th><th><tt>Prs</tt></th><th><tt>Int</tt></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt></tt></td><td><em>que</em></td><td><em>Que</em></td><td><em>que, qu', qui</em></td><td><em>que</em></td></tr>
</table>

### `DET`

2311 <tt><a href="fr_alts-pos-DET.html">DET</a></tt> tokens (30% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="fr_alts-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (1964; 85%).

`DET` tokens may have the following values of `PronType`:

* `Art` (2128; 92% of non-empty `PronType`): <em>le, les, la, l', ledit, vne, vn, un, ladite, lesdits</em>
* `Dem` (142; 6% of non-empty `PronType`): <em>ce, ceste, ces, cest, iceluy, icelle, iceux, ses, cedit</em>
* `Ind` (7; 0% of non-empty `PronType`): <em>plusieurs, certain, chacun, quelconque, tout, toutes</em>
* `Int` (3; 0% of non-empty `PronType`): <em>quel, quelle, quels</em>
* `Rel` (31; 1% of non-empty `PronType`): <em>lequel, laquelle, lesquels, lesquelles</em>
* `EMPTY` (5321): <em>ledit, le, la, ung, l', sa, son, ladite, une, ses</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (16) occur only with one value of `PronType`.

### `ADJ`

2 <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `PronType`.

`ADJ` tokens may have the following values of `PronType`:

* `Ind` (2; 100% of non-empty `PronType`): <em>autre, autres</em>
* `EMPTY` (1666): <em>presentz, mesme, jeune, autre, grant, aultre, bon, present, telle, premier</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="fr_alts-dep-fixed.html">fixed</a></tt>]--> PRON</tt> (77; 100%),
<tt>PRON --[<tt><a href="fr_alts-dep-nmod.html">nmod</a></tt>]--> PRON</tt> (19; 68%),
<tt>PRON --[<tt><a href="fr_alts-dep-conj.html">conj</a></tt>]--> PRON</tt> (14; 88%).

