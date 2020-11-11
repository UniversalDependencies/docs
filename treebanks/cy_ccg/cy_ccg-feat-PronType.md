---
layout: base
title:  'Statistics of PronType in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Features: `PronType`

This feature is universal but the values `Contrastive` are language-specific.
It occurs with 7 different values: `Contrastive`, `Dem`, `Ind`, `Int`, `Prs`, `Rcp`, `Rel`.

1942 tokens (6%) have a non-empty value of `PronType`.
71 types (1%) occur at least once with a non-empty value of `PronType`.
36 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (1940; 6% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (2; 0% instances).

### `PRON`

1940 <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> tokens (94% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="cy_ccg-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (1374; 71%), <tt><a href="cy_ccg-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1233; 64%).

`PRON` tokens may have the following values of `PronType`:

* `Contrastive` (3; 0% of non-empty `PronType`): <em>ninnau, innau</em>
* `Dem` (193; 10% of non-empty `PronType`): <em>hyn, hynny, hwn, hon, hwnnw, rhain, honno, sawl, rheiny, huna</em>
* `Ind` (32; 2% of non-empty `PronType`): <em>rhai, rai</em>
* `Int` (32; 2% of non-empty `PronType`): <em>pwy, sawl, naill</em>
* `Prs` (1547; 80% of non-empty `PronType`): <em>ei, eu, hi, chi, ni, ein, e, nhw, fy, eich</em>
* `Rcp` (26; 1% of non-empty `PronType`): <em>hun, hunain, hunan</em>
* `Rel` (107; 6% of non-empty `PronType`): <em>a</em>
* `EMPTY` (117): <em>i, fi</em>

<table>
  <tr><th>Paradigm <i>pwy</i></th><th><tt>Int</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>pwy</em></td><td></td></tr>
  <tr><td><tt><tt><a href="cy_ccg-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td></td><td><em>pwy</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 94% lemmas (33) occur only with one value of `PronType`.

### `PROPN`

2 <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> tokens (0% of all `PROPN` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PROPN` and `PronType` co-occurred: <tt><a href="cy_ccg-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (2; 100%), <tt><a href="cy_ccg-feat-Mutation.html">Mutation</a></tt><tt>=EMPTY</tt> (2; 100%), <tt><a href="cy_ccg-feat-Number.html">Number</a></tt><tt>=Plur</tt> (2; 100%).

`PROPN` tokens may have the following values of `PronType`:

* `Prs` (2; 100% of non-empty `PronType`): <em>Llangefni</em>
* `EMPTY` (1190): <em>Cymru, Nghymru, Gymru, Aberystwyth, Eryri, Gwynedd, Jones, Bangor, Caerdydd, Lloegr</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="cy_ccg-dep-compound-redup.html">compound:redup</a></tt>]--> PRON</tt> (38; 100%),
<tt>PRON --[<tt><a href="cy_ccg-dep-conj.html">conj</a></tt>]--> PRON</tt> (2; 100%),
<tt>PRON --[<tt><a href="cy_ccg-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (2; 67%).

