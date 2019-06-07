---
layout: base
title:  'Statistics of PronType in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `PronType`

This feature is universal.
It occurs with 5 different values: `Art`, `Dem`, `Int`, `Prs`, `Rel`.

14669 tokens (15%) have a non-empty value of `PronType`.
86 types (1%) occur at least once with a non-empty value of `PronType`.
53 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 4 part-of-speech tags: <tt><a href="en_gum-pos-DET.html">DET</a></tt> (7745; 8% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (6263; 6% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (440; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (221; 0% instances).

### `DET`

7745 <tt><a href="en_gum-pos-DET.html">DET</a></tt> tokens (94% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="en_gum-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (5154; 67%).

`DET` tokens may have the following values of `PronType`:

* `Art` (7289; 94% of non-empty `PronType`): <em>the, a, an</em>
* `Dem` (423; 5% of non-empty `PronType`): <em>this, these, that, those</em>
* `Int` (31; 0% of non-empty `PronType`): <em>what, which, whatever</em>
* `Prs` (1; 0% of non-empty `PronType`): <em>you</em>
* `Rel` (1; 0% of non-empty `PronType`): <em>that</em>
* `EMPTY` (481): <em>some, no, all, any, each, every, another, both, The, either</em>

<table>
  <tr><th>Paradigm <i>that</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>that</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>that</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 93% lemmas (13) occur only with one value of `PronType`.

### `PRON`

6263 <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> tokens (94% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (4901; 78%), <tt><a href="en_gum-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (4156; 66%), <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3265; 52%).

`PRON` tokens may have the following values of `PronType`:

* `Art` (5; 0% of non-empty `PronType`): <em>the, a</em>
* `Dem` (329; 5% of non-empty `PronType`): <em>this, that, those, these</em>
* `Int` (198; 3% of non-empty `PronType`): <em>what, which, who, whatever, whose, whom, whoever</em>
* `Prs` (5218; 83% of non-empty `PronType`): <em>you, it, i, his, he, we, they, your, she, her</em>
* `Rel` (513; 8% of non-empty `PronType`): <em>that, which, who, what, whom</em>
* `EMPTY` (426): <em>there, all, some, both, each, one, another, such, any, half</em>

<table>
  <tr><th>Paradigm <i>that</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>that</em></td><td><em>that</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>that</em></td></tr>
</table>

### `SCONJ`

440 <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> tokens (22% of all `SCONJ` tokens) have a non-empty value of `PronType`.

`SCONJ` tokens may have the following values of `PronType`:

* `Dem` (3; 1% of non-empty `PronType`): <em>that</em>
* `Int` (391; 89% of non-empty `PronType`): <em>when, how, where, why, wherever, Whenever, While</em>
* `Rel` (46; 10% of non-empty `PronType`): <em>where, that, when, why</em>
* `EMPTY` (1519): <em>that, if, as, because, while, by, after, of, in, so</em>

<table>
  <tr><th>Paradigm <i>that</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt></tt></td><td><em>that</em></td><td><em>that</em></td></tr>
</table>

### `ADV`

221 <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> tokens (6% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Dem` (221; 100% of non-empty `PronType`): <em>then, there, here</em>
* `EMPTY` (3438): <em>also, so, just, more, as, very, even, well, most, only</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> PRON</tt> (12; 100%),
<tt>ADV --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADV</tt> (3; 100%),
<tt>SCONJ --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> SCONJ</tt> (1; 100%).

