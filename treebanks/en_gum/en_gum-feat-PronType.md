---
layout: base
title:  'Statistics of PronType in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `PronType`

This feature is universal.
It occurs with 5 different values: `Art`, `Dem`, `Int`, `Prs`, `Rel`.

16948 tokens (15%) have a non-empty value of `PronType`.
87 types (1%) occur at least once with a non-empty value of `PronType`.
49 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 4 part-of-speech tags: <tt><a href="en_gum-pos-DET.html">DET</a></tt> (8965; 8% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (7217; 6% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (509; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (257; 0% instances).

### `DET`

8965 <tt><a href="en_gum-pos-DET.html">DET</a></tt> tokens (94% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="en_gum-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (5923; 66%).

`DET` tokens may have the following values of `PronType`:

* `Art` (8401; 94% of non-empty `PronType`): <em>the, a, an</em>
* `Dem` (529; 6% of non-empty `PronType`): <em>this, these, that, those</em>
* `Int` (33; 0% of non-empty `PronType`): <em>what, which, whatever</em>
* `Prs` (1; 0% of non-empty `PronType`): <em>you</em>
* `Rel` (1; 0% of non-empty `PronType`): <em>that</em>
* `EMPTY` (530): <em>some, no, all, any, every, each, another, both, The, either</em>

<table>
  <tr><th>Paradigm <i>that</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>that</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>that</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 92% lemmas (12) occur only with one value of `PronType`.

### `PRON`

7217 <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> tokens (94% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (5574; 77%), <tt><a href="en_gum-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (4573; 63%), <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3916; 54%).

`PRON` tokens may have the following values of `PronType`:

* `Art` (6; 0% of non-empty `PronType`): <em>the, a</em>
* `Dem` (363; 5% of non-empty `PronType`): <em>that, this, those, these</em>
* `Int` (220; 3% of non-empty `PronType`): <em>what, which, who, whose, whatever, whom, whoever</em>
* `Prs` (6031; 84% of non-empty `PronType`): <em>it, you, i, he, his, we, they, your, she, her</em>
* `Rel` (597; 8% of non-empty `PronType`): <em>that, which, who, whom, what</em>
* `EMPTY` (461): <em>there, all, some, both, such, each, one, another, any, half</em>

<table>
  <tr><th>Paradigm <i>that</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>that</em></td><td><em>that</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>that</em></td></tr>
</table>

### `SCONJ`

509 <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> tokens (23% of all `SCONJ` tokens) have a non-empty value of `PronType`.

`SCONJ` tokens may have the following values of `PronType`:

* `Dem` (5; 1% of non-empty `PronType`): <em>that</em>
* `Int` (438; 86% of non-empty `PronType`): <em>when, how, where, why, wherever, whither, Whenever, While</em>
* `Rel` (66; 13% of non-empty `PronType`): <em>where, that, when, why</em>
* `EMPTY` (1732): <em>that, if, as, while, by, because, after, of, in, for</em>

<table>
  <tr><th>Paradigm <i>that</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt></tt></td><td><em>that</em></td><td><em>that</em></td></tr>
</table>

### `ADV`

257 <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> tokens (6% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Dem` (257; 100% of non-empty `PronType`): <em>then, there, here</em>
* `EMPTY` (3928): <em>also, so, just, more, very, as, even, most, only, well</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> PRON</tt> (13; 100%),
<tt>ADV --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADV</tt> (4; 100%),
<tt>SCONJ --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> SCONJ</tt> (1; 100%).

