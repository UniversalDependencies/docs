---
layout: base
title:  'Statistics of PronType in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Features: `PronType`

This feature is universal but the values `Emp` are language-specific.
It occurs with 10 different values: `Art`, `Dem`, `Emp`, `Ind`, `Int`, `Neg`, `Prs`, `Rcp`, `Rel`, `Tot`.

22043 tokens (21%) have a non-empty value of `PronType`.
160 types (1%) occur at least once with a non-empty value of `PronType`.
77 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (11166; 11% instances), <tt><a href="en_lines-pos-DET.html">DET</a></tt> (9946; 9% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt> (931; 1% instances).

### `PRON`

11166 <tt><a href="en_lines-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="en_lines-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (9168; 82%), <tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt> (7786; 70%), <tt><a href="en_lines-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (6457; 58%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (963; 9% of non-empty `PronType`): <em>there, that, this, these, those</em>
* `Emp` (113; 1% of non-empty `PronType`): <em>himself</em>
* `Ind` (445; 4% of non-empty `PronType`): <em>one, something, someone, anything, others, some, anyone, any, another, somebody</em>
* `Int` (394; 4% of non-empty `PronType`): <em>what, who, which, whatever, whom, whose</em>
* `Neg` (88; 1% of non-empty `PronType`): <em>nothing, nobody, none, neither</em>
* `Prs` (8688; 78% of non-empty `PronType`): <em>he, I, it, you, his, they, my, him, her, we</em>
* `Rel` (276; 2% of non-empty `PronType`): <em>who, which, what, whom, whose</em>
* `Tot` (199; 2% of non-empty `PronType`): <em>all, everything, everyone, both, everybody, each</em>
* `EMPTY` (1): <em>noone</em>

<table>
  <tr><th>Paradigm <i>what</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt></tt></td><td><em>what</em></td><td><em>what</em></td><td><em>wha'</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 95% lemmas (52) occur only with one value of `PronType`.

### `DET`

9946 <tt><a href="en_lines-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="en_lines-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (5847; 59%).

`DET` tokens may have the following values of `PronType`:

* `Art` (8771; 88% of non-empty `PronType`): <em>the, a, an, le, what, Tha</em>
* `Dem` (471; 5% of non-empty `PronType`): <em>this, that, these, those</em>
* `Ind` (219; 2% of non-empty `PronType`): <em>some, any, one, another, either</em>
* `Int` (38; 0% of non-empty `PronType`): <em>what, which, whatever</em>
* `Neg` (176; 2% of non-empty `PronType`): <em>no, none</em>
* `Rcp` (23; 0% of non-empty `PronType`): <em>each</em>
* `Rel` (2; 0% of non-empty `PronType`): <em>what, whose</em>
* `Tot` (246; 2% of non-empty `PronType`): <em>all, each, every, both</em>
* `EMPTY` (6): <em>all, either, La, no</em>

<table>
  <tr><th>Paradigm <i>what</i></th><th><tt>Art</tt></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>what</em></td><td><em>what</em></td><td><em>what</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 90% lemmas (19) occur only with one value of `PronType`.

### `ADV`

931 <tt><a href="en_lines-pos-ADV.html">ADV</a></tt> tokens (16% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Dem` (451; 48% of non-empty `PronType`): <em>then, now, there, here</em>
* `Ind` (76; 8% of non-empty `PronType`): <em>ever, sometimes, somewhere, anywhere</em>
* `Int` (213; 23% of non-empty `PronType`): <em>how, why, where, when, wherever, whatever</em>
* `Neg` (81; 9% of non-empty `PronType`): <em>never, nowhere</em>
* `Rel` (56; 6% of non-empty `PronType`): <em>where, why</em>
* `Tot` (54; 6% of non-empty `PronType`): <em>always, everywhere</em>
* `EMPTY` (4760): <em>out, up, so, back, very, just, again, too, down, only</em>

<table>
  <tr><th>Paradigm <i>where</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>where</em></td><td><em>where</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="en_lines-dep-conj.html">conj</a></tt>]--> PRON</tt> (25; 81%),
<tt>ADV --[<tt><a href="en_lines-dep-conj.html">conj</a></tt>]--> ADV</tt> (11; 92%),
<tt>PRON --[<tt><a href="en_lines-dep-fixed.html">fixed</a></tt>]--> DET</tt> (4; 100%),
<tt>PRON --[<tt><a href="en_lines-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (4; 80%),
<tt>PRON --[<tt><a href="en_lines-dep-conj.html">conj</a></tt>]--> ADV</tt> (2; 100%),
<tt>ADV --[<tt><a href="en_lines-dep-fixed.html">fixed</a></tt>]--> ADV</tt> (1; 100%).

