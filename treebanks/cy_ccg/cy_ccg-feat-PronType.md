---
layout: base
title:  'Statistics of PronType in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Features: `PronType`

This feature is universal but the values `Emp` are language-specific.
It occurs with 8 different values: `Art`, `Dem`, `Emp`, `Ind`, `Int`, `Prs`, `Rcp`, `Rel`.

7094 tokens (13%) have a non-empty value of `PronType`.
97 types (1%) occur at least once with a non-empty value of `PronType`.
28 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (3616; 7% instances), <tt><a href="cy_ccg-pos-DET.html">DET</a></tt> (3478; 6% instances).

### `PRON`

3616 <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="cy_ccg-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (2722; 75%), <tt><a href="cy_ccg-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (2369; 66%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (339; 9% of non-empty `PronType`): <em>hyn, hynny, hwn, hon, hwnnw, rhain, honno, rheiny, hwnna, hynna</em>
* `Emp` (8; 0% of non-empty `PronType`): <em>ninnau, hwythau, hithau, innau, yntau</em>
* `Ind` (87; 2% of non-empty `PronType`): <em>rhai, pawb, bawb, rai, phawb</em>
* `Int` (54; 1% of non-empty `PronType`): <em>pwy, sawl, Hwn, ai, Beth, naill</em>
* `Prs` (2919; 81% of non-empty `PronType`): <em>ei, i, eu, hi, ni, chi, ein, e, nhw, fy</em>
* `Rcp` (51; 1% of non-empty `PronType`): <em>hun, hunain, hunan</em>
* `Rel` (158; 4% of non-empty `PronType`): <em>a</em>

<table>
  <tr><th>Paradigm <i>ef</i></th><th><tt>Prs</tt></th><th><tt>Emp</tt></th></tr>
  <tr><td><tt><tt><a href="cy_ccg-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>ei, o, e, 'w, 'i, fo, ef, fe, i</em></td><td><em>yntau</em></td></tr>
  <tr><td><tt><tt><a href="cy_ccg-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="cy_ccg-feat-Poss.html">Poss</a></tt><tt>=Yes</tt></tt></td><td><em>ei, 'i, 'w, fe, 'u, ef</em></td><td></td></tr>
  <tr><td><tt><tt><a href="cy_ccg-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>'w</em></td><td></td></tr>
</table>

### `DET`

3478 <tt><a href="cy_ccg-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

`DET` tokens may have the following values of `PronType`:

* `Art` (3454; 99% of non-empty `PronType`): <em>y, 'r, yr, na, An, The</em>
* `Rel` (24; 1% of non-empty `PronType`): <em>pa, ba, P', mha</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="cy_ccg-dep-compound-redup.html">compound:redup</a></tt>]--> PRON</tt> (139; 99%),
<tt>PRON --[<tt><a href="cy_ccg-dep-conj.html">conj</a></tt>]--> PRON</tt> (4; 100%),
<tt>PRON --[<tt><a href="cy_ccg-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (2; 67%).

