---
layout: base
title:  'Statistics of PronType in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Features: `PronType`

This feature is universal but the values `Contrastive` are language-specific.
It occurs with 7 different values: `Contrastive`, `Dem`, `Ind`, `Int`, `Prs`, `Rcp`, `Rel`.

1027 tokens (6%) have a non-empty value of `PronType`.
59 types (2%) occur at least once with a non-empty value of `PronType`.
33 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (1025; 6% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (2; 0% instances).

### `PRON`

1025 <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> tokens (93% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="cy_ccg-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (699; 68%), <tt><a href="cy_ccg-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (647; 63%).

`PRON` tokens may have the following values of `PronType`:

* `Contrastive` (3; 0% of non-empty `PronType`): <em>ninnau, innau</em>
* `Dem` (106; 10% of non-empty `PronType`): <em>hyn, hwn, hynny, hon, hwnnw, rhain, sawl, rheiny</em>
* `Ind` (16; 2% of non-empty `PronType`): <em>rhai</em>
* `Int` (18; 2% of non-empty `PronType`): <em>Pwy, sawl</em>
* `Prs` (814; 79% of non-empty `PronType`): <em>ei, chi, hi, eu, ni, eich, nhw, fy, ein, ti</em>
* `Rcp` (12; 1% of non-empty `PronType`): <em>hun, hunain, hunan</em>
* `Rel` (56; 5% of non-empty `PronType`): <em>a</em>
* `EMPTY` (79): <em>i, fi</em>

<table>
  <tr><th>Paradigm <i>sawl</i></th><th><tt>Int</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt></tt></td><td><em>sawl</em></td><td><em>sawl</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 97% lemmas (31) occur only with one value of `PronType`.

### `PROPN`

2 <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> tokens (0% of all `PROPN` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PROPN` and `PronType` co-occurred: <tt><a href="cy_ccg-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (2; 100%), <tt><a href="cy_ccg-feat-Mutation.html">Mutation</a></tt><tt>=EMPTY</tt> (2; 100%), <tt><a href="cy_ccg-feat-Number.html">Number</a></tt><tt>=Plur</tt> (2; 100%).

`PROPN` tokens may have the following values of `PronType`:

* `Prs` (2; 100% of non-empty `PronType`): <em>Llangefni</em>
* `EMPTY` (600): <em>Cymru, Nghymru, Gwynedd, Gymru, Aberystwyth, Jones, Bangor, Caerdydd, Aled, John</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="cy_ccg-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (1; 100%).

