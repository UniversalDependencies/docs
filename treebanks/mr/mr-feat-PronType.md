---
layout: base
title:  'Statistics of PronType in UD_Marathi'
udver: '2'
---

## Treebank Statistics: UD_Marathi: Features: `PronType`

This feature is universal.
It occurs with 6 different values: `Dem`, `Ind`, `Int`, `Prs`, `Rel`, `Tot`.

161 tokens (4%) have a non-empty value of `PronType`.
27 types (3%) occur at least once with a non-empty value of `PronType`.
15 lemmas (2%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: <tt><a href="mr-pos-DET.html">DET</a></tt> (112; 3% instances), <tt><a href="mr-pos-PRON.html">PRON</a></tt> (49; 1% instances).

### `DET`

112 <tt><a href="mr-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="mr-feat-Number.html">Number</a></tt><tt>=Sing</tt> (74; 66%), <tt><a href="mr-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (70; 63%).

`DET` tokens may have the following values of `PronType`:

* `Dem` (82; 73% of non-empty `PronType`): तो त्या ती या ही _ हा हे ते आम्ही
* `Ind` (30; 27% of non-empty `PronType`): एक एका काही _

### `PRON`

49 <tt><a href="mr-pos-PRON.html">PRON</a></tt> tokens (13% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="mr-feat-Distance.html">Distance</a></tt><tt>=EMPTY</tt> (48; 98%), <tt><a href="mr-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (48; 98%), <tt><a href="mr-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (45; 92%), <tt><a href="mr-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (42; 86%).

`PRON` tokens may have the following values of `PronType`:

* `Ind` (1; 2% of non-empty `PronType`): कोणी
* `Int` (29; 59% of non-empty `PronType`): काय कोण कोणी _ कशाने कोणता
* `Prs` (13; 27% of non-empty `PronType`): _ आपण आपापल्या
* `Rel` (3; 6% of non-empty `PronType`): जो ते
* `Tot` (3; 6% of non-empty `PronType`): सर्वांना सर्वांनी
* `EMPTY` (330): _ तो ती मी त्याला मला त्याने तिला तुला तुम्ही

<table>
  <tr><th>Paradigm <i>कोण</i></th><th><tt>Int</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt>_</tt></td><td>_</td><td></td></tr>
  <tr><td><tt><tt><a href="mr-feat-Case.html">Case</a></tt><tt>=Erg</tt></tt></td><td>कोणी</td><td>कोणी</td></tr>
  <tr><td><tt><tt><a href="mr-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td>कोण</td><td></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>DET --[<tt><a href="mr-dep-conj.html">conj</a></tt>]--> DET</tt> (1; 100%),
<tt>DET --[<tt><a href="mr-dep-det.html">det</a></tt>]--> DET</tt> (1; 100%).

