---
layout: base
title:  'Statistics of PronType in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `PronType`

This feature is universal.
It occurs with 5 different values: `Art`, `Dem`, `Int`, `Prs`, `Rel`.

20867 tokens (16%) have a non-empty value of `PronType`.
90 types (1%) occur at least once with a non-empty value of `PronType`.
43 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 4 part-of-speech tags: <tt><a href="en_gum-pos-DET.html">DET</a></tt> (10326; 8% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (9547; 7% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (537; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (457; 0% instances).

### `DET`

10326 <tt><a href="en_gum-pos-DET.html">DET</a></tt> tokens (94% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="en_gum-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (6713; 65%).

`DET` tokens may have the following values of `PronType`:

* `Art` (9584; 93% of non-empty `PronType`): <em>the, a, an</em>
* `Dem` (695; 7% of non-empty `PronType`): <em>this, these, that, those</em>
* `Int` (47; 0% of non-empty `PronType`): <em>what, which, whatever</em>
* `EMPTY` (663): <em>some, no, all, any, every, each, another, both, either, such</em>

### `PRON`

9547 <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> tokens (94% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (7587; 79%), <tt><a href="en_gum-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (6512; 68%), <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (6250; 65%).

`PRON` tokens may have the following values of `PronType`:

* `Art` (26; 0% of non-empty `PronType`): <em>the, a</em>
* `Dem` (557; 6% of non-empty `PronType`): <em>this, that, those, these</em>
* `Int` (187; 2% of non-empty `PronType`): <em>what, which, who, whatever, whom, Whoever, whose</em>
* `Prs` (7897; 83% of non-empty `PronType`): <em>i, you, it, we, he, his, they, your, she, her</em>
* `Rel` (880; 9% of non-empty `PronType`): <em>that, which, who, what, whose, whom, whatever, whoever</em>
* `EMPTY` (587): <em>there, all, some, that, both, such, each, one, any, another</em>

<table>
  <tr><th>Paradigm <i>that</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>that</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>that</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>that</em></td></tr>
</table>

### `SCONJ`

537 <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> tokens (20% of all `SCONJ` tokens) have a non-empty value of `PronType`.

`SCONJ` tokens may have the following values of `PronType`:

* `Dem` (1; 0% of non-empty `PronType`): <em>then</em>
* `Int` (392; 73% of non-empty `PronType`): <em>when, how, where, why, wherever, whither, Whenever</em>
* `Rel` (144; 27% of non-empty `PronType`): <em>where, how, why, when, that, which</em>
* `EMPTY` (2130): <em>that, if, as, because, by, of, while, in, after, for</em>

<table>
  <tr><th>Paradigm <i>when</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>when</em></td><td><em>when</em></td></tr>
</table>

### `ADV`

457 <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> tokens (8% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="en_gum-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (457; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Dem` (380; 83% of non-empty `PronType`): <em>then, there, here</em>
* `Int` (74; 16% of non-empty `PronType`): <em>how, why, when, where</em>
* `Rel` (3; 1% of non-empty `PronType`): <em>where, why</em>
* `EMPTY` (5002): <em>so, also, just, more, as, very, now, only, even, really</em>

<table>
  <tr><th>Paradigm <i>why</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>why</em></td><td><em>why</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> PRON</tt> (16; 100%),
<tt>PRON --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (7; 78%),
<tt>ADV --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADV</tt> (5; 100%),
<tt>SCONJ --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> SCONJ</tt> (4; 67%),
<tt>DET --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (2; 100%),
<tt>PRON --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> SCONJ</tt> (1; 100%),
<tt>PRON --[<tt><a href="en_gum-dep-nmod-npmod.html">nmod:npmod</a></tt>]--> PRON</tt> (1; 100%).

