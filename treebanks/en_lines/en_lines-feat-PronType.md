---
layout: base
title:  'Statistics of PronType in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Features: `PronType`

This feature is universal.
It occurs with 9 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rcp`, `Rel`, `Tot`.

16854 tokens (18%) have a non-empty value of `PronType`.
128 types (1%) occur at least once with a non-empty value of `PronType`.
58 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_lines-pos-DET.html">DET</a></tt> (8833; 9% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (7169; 8% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt> (852; 1% instances).

### `DET`

8833 <tt><a href="en_lines-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="en_lines-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (5270; 60%).

`DET` tokens may have the following values of `PronType`:

* `Art` (7858; 89% of non-empty `PronType`): <em>the, a, an, Le, what, Tha</em>
* `Dem` (404; 5% of non-empty `PronType`): <em>this, that, these, those</em>
* `Ind` (178; 2% of non-empty `PronType`): <em>some, any, either</em>
* `Int` (37; 0% of non-empty `PronType`): <em>what, which, whatever</em>
* `Neg` (133; 2% of non-empty `PronType`): <em>no, none</em>
* `Rcp` (1; 0% of non-empty `PronType`): <em>each</em>
* `Rel` (1; 0% of non-empty `PronType`): <em>whose</em>
* `Tot` (221; 3% of non-empty `PronType`): <em>all, each, every, both</em>
* `EMPTY` (14): <em>one, du, La, whose</em>

<table>
  <tr><th>Paradigm <i>each</i></th><th><tt>Rcp</tt></th><th><tt>Tot</tt></th></tr>
  <tr><td><tt></tt></td><td><em>each</em></td><td><em>each</em></td></tr>
</table>

### `PRON`

7169 <tt><a href="en_lines-pos-PRON.html">PRON</a></tt> tokens (75% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="en_lines-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (5413; 76%), <tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt> (5131; 72%), <tt><a href="en_lines-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (4184; 58%), <tt><a href="en_lines-feat-Person.html">Person</a></tt><tt>=3</tt> (3666; 51%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (362; 5% of non-empty `PronType`): <em>that, this, these, those</em>
* `Ind` (151; 2% of non-empty `PronType`): <em>something, someone, anything, anyone, either, one, ones</em>
* `Int` (281; 4% of non-empty `PronType`): <em>what, who, which, whatever, whom, whose</em>
* `Neg` (78; 1% of non-empty `PronType`): <em>nothing, none, neither, no</em>
* `Prs` (5769; 80% of non-empty `PronType`): <em>he, I, his, my, they, him, her, we, she, me</em>
* `Rel` (522; 7% of non-empty `PronType`): <em>that, who, which, what, whom, whose</em>
* `Tot` (6; 0% of non-empty `PronType`): <em>each, both</em>
* `EMPTY` (2408): <em>it, you, there, one, all, everything, others, some, everyone, no</em>

<table>
  <tr><th>Paradigm <i>that</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>that</em></td><td><em>that</em></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>that</em></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_lines-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td></td><td><em>that</em></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>those</em></td></tr>
</table>

### `ADV`

852 <tt><a href="en_lines-pos-ADV.html">ADV</a></tt> tokens (17% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Dem` (417; 49% of non-empty `PronType`): <em>then, now, there, here</em>
* `Ind` (77; 9% of non-empty `PronType`): <em>ever, sometimes, somewhere, anywhere</em>
* `Int` (169; 20% of non-empty `PronType`): <em>how, why, where, when, wherever</em>
* `Neg` (80; 9% of non-empty `PronType`): <em>never, nowhere</em>
* `Rel` (55; 6% of non-empty `PronType`): <em>where, why</em>
* `Tot` (54; 6% of non-empty `PronType`): <em>always, everywhere</em>
* `EMPTY` (4244): <em>out, up, so, back, very, just, too, again, only, down</em>

<table>
  <tr><th>Paradigm <i>where</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>where</em></td><td><em>where</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="en_lines-dep-conj.html">conj</a></tt>]--> PRON</tt> (18; 72%),
<tt>ADV --[<tt><a href="en_lines-dep-conj.html">conj</a></tt>]--> ADV</tt> (10; 100%),
<tt>PRON --[<tt><a href="en_lines-dep-appos.html">appos</a></tt>]--> PRON</tt> (2; 67%),
<tt>PRON --[<tt><a href="en_lines-dep-conj.html">conj</a></tt>]--> ADV</tt> (2; 100%),
<tt>DET --[<tt><a href="en_lines-dep-appos.html">appos</a></tt>]--> DET</tt> (1; 100%).

