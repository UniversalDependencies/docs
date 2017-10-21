---
layout: base
title:  'Statistics of Gender in UD_Dutch'
udver: '2'
---

## Treebank Statistics: UD_Dutch: Features: `Gender`

This feature is universal.
It occurs with 4 different values: `Com`, `Fem`, `Masc`, `Neut`.

5049 tokens (2%) have a non-empty value of `Gender`.
139 types (1%) occur at least once with a non-empty value of `Gender`.
139 lemmas (1%) occur at least once with a non-empty value of `Gender`.
The feature is used with 3 part-of-speech tags: <tt><a href="nl-pos-DET.html">DET</a></tt> (4384; 2% instances), <tt><a href="nl-pos-X.html">X</a></tt> (613; 0% instances), <tt><a href="nl-pos-ADP.html">ADP</a></tt> (52; 0% instances).

### `DET`

4384 <tt><a href="nl-pos-DET.html">DET</a></tt> tokens (19% of all `DET` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `DET` and `Gender` co-occurred: <tt><a href="nl-feat-PronType.html">PronType</a></tt><tt>=Art</tt> (4319; 99%), <tt><a href="nl-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (4286; 98%), <tt><a href="nl-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (4286; 98%).

`DET` tokens may have the following values of `Gender`:

* `Com` (1; 0% of non-empty `Gender`): <em>den</em>
* `Fem` (22; 1% of non-empty `Gender`): <em>la, As, Les, AS, Nostra, nuestra</em>
* `Masc` (76; 2% of non-empty `Gender`): <em>tot, el, los, Els, os</em>
* `Neut` (4285; 98% of non-empty `Gender`): <em>het, 't</em>
* `EMPTY` (18124): <em>de, een, veel, meer, hoeveel, minder, weinig, der, vele, meeste</em>

`Gender` seems to be **lexical feature** of `DET`. 100% lemmas (19) occur only with one value of `Gender`.

### `X`

613 <tt><a href="nl-pos-X.html">X</a></tt> tokens (13% of all `X` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `X` and `Gender` co-occurred: <tt><a href="nl-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (477; 78%), <tt><a href="nl-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (392; 64%), <tt><a href="nl-feat-Number.html">Number</a></tt><tt>=Sing</tt> (365; 60%).

`X` tokens may have the following values of `Gender`:

* `Com` (18; 3% of non-empty `Gender`): <em>den, duur, op, aan, dag, treure, uit</em>
* `Neut` (595; 97% of non-empty `Gender`): <em>het, aan, van, voor, eerst, op, leven, gebied, om, kader</em>
* `EMPTY` (4022): <em>van, flo, op, ten, met, voor, een, onder, te, 's</em>

<table>
  <tr><th>Paradigm <i>op</i></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt><tt><a href="nl-feat-Degree.html">Degree</a></tt><tt>=Cmp</tt></tt></td><td><em>op</em></td><td></td></tr>
  <tr><td><tt><tt><a href="nl-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>op</em></td><td><em>op</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `X`. 97% lemmas (110) occur only with one value of `Gender`.

### `ADP`

52 <tt><a href="nl-pos-ADP.html">ADP</a></tt> tokens (0% of all `ADP` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `ADP` and `Gender` co-occurred: <tt><a href="nl-feat-AdpType.html">AdpType</a></tt><tt>=Preppron</tt> (52; 100%).

`ADP` tokens may have the following values of `Gender`:

* `Fem` (6; 12% of non-empty `Gender`): <em>da, Das</em>
* `Masc` (46; 88% of non-empty `Gender`): <em>als, al, del, do</em>
* `EMPTY` (23626): <em>van, in, te, op, voor, met, aan, door, bij, naar</em>

`Gender` seems to be **lexical feature** of `ADP`. 100% lemmas (10) occur only with one value of `Gender`.

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>X --[<tt><a href="nl-dep-compound.html">compound</a></tt>]--> X</tt> (317; 100%),
<tt>X --[<tt><a href="nl-dep-mark.html">mark</a></tt>]--> X</tt> (21; 100%),
<tt>ADP --[<tt><a href="nl-dep-det.html">det</a></tt>]--> DET</tt> (1; 100%),
<tt>X --[<tt><a href="nl-dep-cop.html">cop</a></tt>]--> X</tt> (1; 100%),
<tt>X --[<tt><a href="nl-dep-nsubj.html">nsubj</a></tt>]--> X</tt> (1; 100%),
<tt>X --[<tt><a href="nl-dep-conj.html">conj</a></tt>]--> X</tt> (1; 100%).

