---
layout: base
title:  'Statistics of PronType in UD_Danish'
udver: '2'
---

## Treebank Statistics: UD_Danish: Features: `PronType`

This feature is universal.
It occurs with 6 different values: `Dem`, `Ind`, `Int`, `Prs`, `Rcp`, `Rel`.
Some words have combined values of the feature; 1 combinations have been observed: `Int|Rel`.

11544 tokens (11%) have a non-empty value of `PronType`.
144 types (1%) occur at least once with a non-empty value of `PronType`.
40 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: <tt><a href="da-pos-PRON.html">PRON</a></tt> (6040; 6% instances), <tt><a href="da-pos-DET.html">DET</a></tt> (5504; 5% instances).

### `PRON`

6040 <tt><a href="da-pos-PRON.html">PRON</a></tt> tokens (89% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="da-feat-PartType.html">PartType</a></tt><tt>=EMPTY</tt> (6040; 100%), <tt><a href="da-feat-Number.html">Number</a></tt><tt>=Sing</tt> (4001; 66%), <tt><a href="da-feat-Person.html">Person</a></tt><tt>=3</tt> (3321; 55%), <tt><a href="da-feat-Gender.html">Gender</a></tt><tt>=Com</tt> (3307; 55%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (204; 3% of non-empty `PronType`): <em>selv, de, dette, den, begge, det, denne, disse</em>
* `Ind` (811; 13% of non-empty `PronType`): <em>man, noget, en, andre, hver, andet, ingen, et, anden, nogle</em>
* `Int,Rel` (186; 3% of non-empty `PronType`): <em>hvad, hvilket, hvem, hvilke, hvilken, hvis, HVA', Hva</em>
* `Prs` (4801; 79% of non-empty `PronType`): <em>det, han, jeg, vi, de, sig, hun, den, du, ham</em>
* `Rcp` (38; 1% of non-empty `PronType`): <em>hinanden, hinandens</em>
* `EMPTY` (760): <em>der, som</em>

<table>
  <tr><th>Paradigm <i>den</i></th><th><tt>Prs</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt><tt><a href="da-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="da-feat-Gender.html">Gender</a></tt><tt>=Com</tt>|<tt><a href="da-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="da-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>den</em></td><td></td></tr>
  <tr><td><tt><tt><a href="da-feat-Gender.html">Gender</a></tt><tt>=Com</tt>|<tt><a href="da-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>den</em></td></tr>
  <tr><td><tt><tt><a href="da-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="da-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>det</em></td></tr>
  <tr><td><tt><tt><a href="da-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>de</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 97% lemmas (34) occur only with one value of `PronType`.

### `DET`

5504 <tt><a href="da-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="da-feat-Number-psor.html">Number[psor]</a></tt><tt>=EMPTY</tt> (4710; 86%), <tt><a href="da-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (4707; 86%), <tt><a href="da-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (4707; 86%), <tt><a href="da-feat-Number.html">Number</a></tt><tt>=Sing</tt> (4203; 76%), <tt><a href="da-feat-Gender.html">Gender</a></tt><tt>=Com</tt> (2843; 52%).

`DET` tokens may have the following values of `PronType`:

* `Dem` (2124; 39% of non-empty `PronType`): <em>den, de, det, denne, disse, dette, begge, dén, dennes, selv</em>
* `Ind` (2583; 47% of non-empty `PronType`): <em>en, et, andre, nogle, ingen, anden, noget, nogen, én, hvert</em>
* `Prs` (797; 14% of non-empty `PronType`): <em>sin, deres, hans, min, sit, hendes, sine, vores, mit, din</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (24) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="da-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (30; 54%),
<tt>PRON --[<tt><a href="da-dep-conj.html">conj</a></tt>]--> PRON</tt> (3; 60%),
<tt>PRON --[<tt><a href="da-dep-appos.html">appos</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="da-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (1; 100%).

