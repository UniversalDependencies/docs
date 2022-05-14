---
layout: base
title:  'Statistics of PronType in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `PronType`

This feature is universal but the values `Emp` are language-specific.
It occurs with 9 different values: `Art`, `Dem`, `Emp`, `Ind`, `Int`, `Prs`, `Rcp`, `Rel`, `Tot`.

27385 tokens (17%) have a non-empty value of `PronType`.
138 types (1%) occur at least once with a non-empty value of `PronType`.
67 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 5 part-of-speech tags: <tt><a href="en_gum-pos-DET.html">DET</a></tt> (13608; 8% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (12523; 8% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (798; 0% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (453; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (3; 0% instances).

### `DET`

13608 <tt><a href="en_gum-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="en_gum-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (8024; 59%).

`DET` tokens may have the following values of `PronType`:

* `Art` (11701; 86% of non-empty `PronType`): <em>the, a, an, another, no, both, either, neither, Mat, Une</em>
* `Dem` (951; 7% of non-empty `PronType`): <em>this, these, that, those, such</em>
* `Ind` (383; 3% of non-empty `PronType`): <em>some, any, half</em>
* `Int` (52; 0% of non-empty `PronType`): <em>what, which, whatever</em>
* `Rcp` (14; 0% of non-empty `PronType`): <em>each</em>
* `Tot` (507; 4% of non-empty `PronType`): <em>all, every, each, Alright</em>
* `EMPTY` (6): <em>quite</em>

<table>
  <tr><th>Paradigm <i>each</i></th><th><tt>Rcp</tt></th><th><tt>Tot</tt></th></tr>
  <tr><td><tt></tt></td><td><em>each</em></td><td><em>each</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 95% lemmas (21) occur only with one value of `PronType`.

### `PRON`

12523 <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (10189; 81%), <tt><a href="en_gum-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (8925; 71%), <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (7883; 63%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (1025; 8% of non-empty `PronType`): <em>there, this, that, those, these</em>
* `Emp` (16; 0% of non-empty `PronType`): <em>itself, themselves, himself</em>
* `Int` (190; 2% of non-empty `PronType`): <em>what, who, which, whatever, Whoever, whom, whose</em>
* `Prs` (10046; 80% of non-empty `PronType`): <em>i, it, you, we, he, they, his, your, my, she</em>
* `Rel` (1246; 10% of non-empty `PronType`): <em>that, which, who, what, whom, whose, whatever, Whosoever, whoever, wish</em>

<table>
  <tr><th>Paradigm <i>that</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>that</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>that</em></td></tr>
</table>

### `ADV`

798 <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> tokens (11% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="en_gum-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (798; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Dem` (508; 64% of non-empty `PronType`): <em>then, here, there</em>
* `Int` (153; 19% of non-empty `PronType`): <em>how, why, when, where, Whither</em>
* `Rel` (137; 17% of non-empty `PronType`): <em>how, where, why, when, wherever, Whenever, however</em>
* `EMPTY` (6432): <em>so, just, also, now, more, very, as, even, only, really</em>

<table>
  <tr><th>Paradigm <i>how</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>how</em></td><td><em>how</em></td></tr>
</table>

### `SCONJ`

453 <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> tokens (15% of all `SCONJ` tokens) have a non-empty value of `PronType`.

`SCONJ` tokens may have the following values of `PronType`:

* `Int` (379; 84% of non-empty `PronType`): <em>when, how, where, why, whither</em>
* `Rel` (74; 16% of non-empty `PronType`): <em>where, when, that, how</em>
* `EMPTY` (2594): <em>that, if, as, because, for, by, while, of, in, after</em>

<table>
  <tr><th>Paradigm <i>when</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>when</em></td><td><em>when</em></td></tr>
</table>

### `NUM`

3 <tt><a href="en_gum-pos-NUM.html">NUM</a></tt> tokens (0% of all `NUM` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `NUM` and `PronType` co-occurred: <tt><a href="en_gum-feat-NumForm.html">NumForm</a></tt><tt>=Word</tt> (3; 100%), <tt><a href="en_gum-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (3; 100%).

`NUM` tokens may have the following values of `PronType`:

* `Rcp` (3; 100% of non-empty `PronType`): <em>one</em>
* `EMPTY` (3179): <em>one, two, 1, 2, three, 3, four, 6, 4, 10</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> PRON</tt> (19; 95%),
<tt>PRON --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (11; 73%),
<tt>ADV --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADV</tt> (9; 82%),
<tt>DET --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> DET</tt> (7; 100%),
<tt>DET --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> DET</tt> (5; 83%),
<tt>PRON --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADV</tt> (5; 83%),
<tt>PRON --[<tt><a href="en_gum-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (2; 100%),
<tt>ADV --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> PRON</tt> (1; 100%),
<tt>ADV --[<tt><a href="en_gum-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (1; 100%),
<tt>DET --[<tt><a href="en_gum-dep-fixed.html">fixed</a></tt>]--> DET</tt> (1; 100%).

