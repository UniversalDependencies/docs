---
layout: base
title:  'Statistics of PronType in UD_Korean-KSL'
udver: '2'
---

## Treebank Statistics: UD_Korean-KSL: Features: `PronType`

This feature is universal.
It occurs with 3 different values: `Dem`, `Int`, `Prs`.

6924 tokens (4%) have a non-empty value of `PronType`.
331 types (1%) occur at least once with a non-empty value of `PronType`.
334 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: <tt><a href="ko_ksl-pos-PRON.html">PRON</a></tt> (4522; 3% instances), <tt><a href="ko_ksl-pos-DET.html">DET</a></tt> (2402; 2% instances).

### `PRON`

4522 <tt><a href="ko_ksl-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

`PRON` tokens may have the following values of `PronType`:

* `Dem` (41; 1% of non-empty `PronType`): 그것을, 그것이, 이것이, 이것, 이것을, 그, 그것
* `Int` (36; 1% of non-empty `PronType`): 무엇을, 누가, 누구를, 누구
* `Prs` (4445; 98% of non-empty `PronType`): 저는, 우리, 나는, 내가, 제, 우리는, 제가, 내, 우리가, 나에게

<table>
  <tr><th>Paradigm <i>무엇+을</i></th><th><tt>Prs</tt></th><th><tt>Int</tt></th></tr>
  <tr><td><tt></tt></td><td>뭘</td><td>무엇을</td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 98% lemmas (250) occur only with one value of `PronType`.

### `DET`

2402 <tt><a href="ko_ksl-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

`DET` tokens may have the following values of `PronType`:

* `Dem` (2402; 100% of non-empty `PronType`): 그, 이, 어떤, 이런, 여러, 그런, 다른, 모든, 어느, 몇

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (85) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>DET --[<tt><a href="ko_ksl-dep-det.html">det</a></tt>]--> DET</tt> (1; 100%),
<tt>PRON --[<tt><a href="ko_ksl-dep-nmod-poss.html">nmod:poss</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="ko_ksl-dep-nmod.html">nmod</a></tt>]--> PRON</tt> (1; 100%).

