---
layout: base
title:  'Statistics of Person in UD_Danish-DDT'
udver: '2'
---

## Treebank Statistics: UD_Danish-DDT: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

5598 tokens (6%) have a non-empty value of `Person`.
66 types (0%) occur at least once with a non-empty value of `Person`.
22 lemmas (0%) occur at least once with a non-empty value of `Person`.
The feature is used with 2 part-of-speech tags: <tt><a href="da_ddt-pos-PRON.html">PRON</a></tt> (4801; 5% instances), <tt><a href="da_ddt-pos-DET.html">DET</a></tt> (797; 1% instances).

### `PRON`

4801 <tt><a href="da_ddt-pos-PRON.html">PRON</a></tt> tokens (67% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="da_ddt-feat-PartType.html">PartType</a></tt><tt>=EMPTY</tt> (4801; 100%), <tt><a href="da_ddt-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (4801; 100%), <tt><a href="da_ddt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3396; 71%), <tt><a href="da_ddt-feat-Gender.html">Gender</a></tt><tt>=Com</tt> (2727; 57%), <tt><a href="da_ddt-feat-Case.html">Case</a></tt><tt>=Nom</tt> (2484; 52%).

`PRON` tokens may have the following values of `Person`:

* `1` (1247; 26% of non-empty `Person`): <em>jeg, vi, mig, os, min, mit, vore</em>
* `2` (233; 5% of non-empty `Person`): <em>du, dig, De, I, Dem, jer, Deres</em>
* `3` (3321; 69% of non-empty `Person`): <em>det, han, de, sig, hun, den, ham, dem, hende, dét</em>
* `EMPTY` (2401): <em>der, man, som, hvad, noget, selv, en, andre, hver, andet</em>

<table>
  <tr><th>Paradigm <i>de</i></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="da_ddt-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="da_ddt-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>dem</em></td></tr>
  <tr><td><tt><tt><a href="da_ddt-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="da_ddt-feat-Gender.html">Gender</a></tt><tt>=Com</tt>|<tt><a href="da_ddt-feat-Polite.html">Polite</a></tt><tt>=Form</tt></tt></td><td><em>De</em></td><td></td></tr>
  <tr><td><tt><tt><a href="da_ddt-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="da_ddt-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>de</em></td></tr>
</table>

`Person` seems to be **lexical feature** of `PRON`. 94% lemmas (17) occur only with one value of `Person`.

### `DET`

797 <tt><a href="da_ddt-pos-DET.html">DET</a></tt> tokens (14% of all `DET` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `DET` and `Person` co-occurred: <tt><a href="da_ddt-feat-Poss.html">Poss</a></tt><tt>=Yes</tt> (797; 100%), <tt><a href="da_ddt-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (797; 100%), <tt><a href="da_ddt-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt> (602; 76%), <tt><a href="da_ddt-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (416; 52%).

`DET` tokens may have the following values of `Person`:

* `1` (195; 24% of non-empty `Person`): <em>min, vores, mit, vore, mine, vor, vort</em>
* `2` (34; 4% of non-empty `Person`): <em>din, Deres, dit, jeres, dine</em>
* `3` (568; 71% of non-empty `Person`): <em>sin, deres, hans, sit, hendes, sine, dets, dens</em>
* `EMPTY` (4707): <em>en, den, de, et, det, andre, denne, nogle, ingen, anden</em>

`Person` seems to be **lexical feature** of `DET`. 100% lemmas (11) occur only with one value of `Person`.

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>PRON --[<tt><a href="da_ddt-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (1; 100%).

