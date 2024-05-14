---
layout: base
title:  'Statistics of PronType in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Features: `PronType`

This feature is universal.
It occurs with 7 different values: `Art`, `Dem`, `Ind`, `Int`, `Prs`, `Rcp`, `Tot`.
Some words have combined values of the feature; 3 combinations have been observed: `Art|Prs`, `Ind|Prs`, `Prs|Tot`.

34189 tokens (11%) have a non-empty value of `PronType`.
170 types (1%) occur at least once with a non-empty value of `PronType`.
75 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (19338; 6% instances), <tt><a href="no_nynorsk-pos-DET.html">DET</a></tt> (14850; 5% instances), <tt><a href="no_nynorsk-pos-NUM.html">NUM</a></tt> (1; 0% instances).

### `PRON`

19338 <tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="no_nynorsk-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (14729; 76%), <tt><a href="no_nynorsk-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (12564; 65%), <tt><a href="no_nynorsk-feat-Person.html">Person</a></tt><tt>=3</tt> (11205; 58%), <tt><a href="no_nynorsk-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (10037; 52%).

`PRON` tokens may have the following values of `PronType`:

* `Art,Prs` (824; 4% of non-empty `PronType`): <em>ein, ei</em>
* `Ind,Prs` (74; 0% of non-empty `PronType`): <em>nokon</em>
* `Int` (356; 2% of non-empty `PronType`): <em>kva, kven</em>
* `Prs` (17893; 93% of non-empty `PronType`): <em>det, dei, han, eg, vi, seg, dette, ho, me, du</em>
* `Prs,Tot` (145; 1% of non-empty `PronType`): <em>alle, begge</em>
* `Rcp` (46; 0% of non-empty `PronType`): <em>kvarandre</em>
* `EMPTY` (28): <em>ingenting</em>

`PronType` seems to be **lexical feature** of `PRON`. 100% lemmas (43) occur only with one value of `PronType`.

### `DET`

14850 <tt><a href="no_nynorsk-pos-DET.html">DET</a></tt> tokens (99% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="no_nynorsk-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (11936; 80%).

`DET` tokens may have the following values of `PronType`:

* `Art` (5931; 40% of non-empty `PronType`): <em>ein, eit, ei, eitt, en, eir</em>
* `Dem` (7036; 47% of non-empty `PronType`): <em>den, dei, det, andre, same, denne, anna, dette, desse, neste</em>
* `Ind` (431; 3% of non-empty `PronType`): <em>noko, nokre, nokon, noka, nokor, noe</em>
* `Int` (106; 1% of non-empty `PronType`): <em>kva</em>
* `Prs` (513; 3% of non-empty `PronType`): <em>sjølv, sjølve, eigen, eige, eigne, eiga, the, II, III, et</em>
* `Tot` (833; 6% of non-empty `PronType`): <em>alle, kvar, kvart, all, alt, begge, einkvar, eitkvart</em>
* `EMPTY` (138): <em>ingen, inga</em>

<table>
  <tr><th>Paradigm <i>det</i></th><th><tt>Prs</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt><tt><a href="no_nynorsk-feat-Case.html">Case</a></tt><tt>=Gen</tt></tt></td><td></td><td><em>dets</em></td></tr>
  <tr><td><tt></tt></td><td><em>det</em></td><td><em>det, dét</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 98% lemmas (42) occur only with one value of `PronType`.

### `NUM`

1 <tt><a href="no_nynorsk-pos-NUM.html">NUM</a></tt> tokens (0% of all `NUM` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `NUM` and `PronType` co-occurred: <tt><a href="no_nynorsk-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (1; 100%), <tt><a href="no_nynorsk-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (1; 100%).

`NUM` tokens may have the following values of `PronType`:

* `Dem` (1; 100% of non-empty `PronType`): <em>fem-seks</em>
* `EMPTY` (4049): <em>to, tre, fire, ti, fem, 20, 1, seks, 2005, 2006</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="no_nynorsk-dep-det.html">det</a></tt>]--> DET</tt> (122; 67%),
<tt>DET --[<tt><a href="no_nynorsk-dep-det.html">det</a></tt>]--> DET</tt> (90; 60%),
<tt>PRON --[<tt><a href="no_nynorsk-dep-expl.html">expl</a></tt>]--> PRON</tt> (57; 80%),
<tt>PRON --[<tt><a href="no_nynorsk-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (38; 72%),
<tt>PRON --[<tt><a href="no_nynorsk-dep-conj.html">conj</a></tt>]--> PRON</tt> (22; 96%),
<tt>PRON --[<tt><a href="no_nynorsk-dep-nmod.html">nmod</a></tt>]--> PRON</tt> (12; 80%),
<tt>DET --[<tt><a href="no_nynorsk-dep-nmod-poss.html">nmod:poss</a></tt>]--> PRON</tt> (8; 89%),
<tt>PRON --[<tt><a href="no_nynorsk-dep-appos.html">appos</a></tt>]--> PRON</tt> (6; 100%),
<tt>DET --[<tt><a href="no_nynorsk-dep-flat-name.html">flat:name</a></tt>]--> DET</tt> (1; 100%).

