---
layout: base
title:  'Statistics of PronType in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `PronType`

This feature is universal but the values `Emp` are language-specific.
It occurs with 10 different values: `Art`, `Dem`, `Emp`, `Ind`, `Int`, `Neg`, `Prs`, `Rcp`, `Rel`, `Tot`.

32215 tokens (17%) have a non-empty value of `PronType`.
159 types (1%) occur at least once with a non-empty value of `PronType`.
76 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 4 part-of-speech tags: <tt><a href="en_gum-pos-DET.html">DET</a></tt> (15381; 8% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (15339; 8% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (1493; 1% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances).

### `DET`

15381 <tt><a href="en_gum-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="en_gum-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (9012; 59%).

`DET` tokens may have the following values of `PronType`:

* `Art` (13160; 86% of non-empty `PronType`): <em>the, a, an, another, no, both, either, neither, Mat, and</em>
* `Dem` (1131; 7% of non-empty `PronType`): <em>this, these, that, those, such</em>
* `Ind` (423; 3% of non-empty `PronType`): <em>some, any, half</em>
* `Int` (59; 0% of non-empty `PronType`): <em>what, which, whatever</em>
* `Rcp` (18; 0% of non-empty `PronType`): <em>each</em>
* `Tot` (590; 4% of non-empty `PronType`): <em>all, every, each, Alright</em>
* `EMPTY` (10): <em>quite</em>

<table>
  <tr><th>Paradigm <i>each</i></th><th><tt>Rcp</tt></th><th><tt>Tot</tt></th></tr>
  <tr><td><tt></tt></td><td><em>each</em></td><td><em>each</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 95% lemmas (21) occur only with one value of `PronType`.

### `PRON`

15339 <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (12725; 83%), <tt><a href="en_gum-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (11196; 73%), <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (10349; 67%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (1296; 8% of non-empty `PronType`): <em>there, that, this, those, these</em>
* `Emp` (22; 0% of non-empty `PronType`): <em>itself, themselves, himself</em>
* `Ind` (238; 2% of non-empty `PronType`): <em>something, anything, someone, anyone, somebody, anybody</em>
* `Int` (239; 2% of non-empty `PronType`): <em>what, who, which, whatever, Whoever, whose</em>
* `Neg` (52; 0% of non-empty `PronType`): <em>nothing, one, nobody</em>
* `Prs` (11974; 78% of non-empty `PronType`): <em>i, it, you, we, he, they, his, my, your, she</em>
* `Rcp` (3; 0% of non-empty `PronType`): <em>one</em>
* `Rel` (1423; 9% of non-empty `PronType`): <em>that, which, who, what, whom, whose, whatever, Whosoever, whoever, wish</em>
* `Tot` (92; 1% of non-empty `PronType`): <em>everything, everyone, everybody</em>

<table>
  <tr><th>Paradigm <i>one</i></th><th><tt>Prs</tt></th><th><tt>Rcp</tt></th><th><tt>Neg</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>one</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td><em>one</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>one</em></td><td></td><td></td></tr>
</table>

### `ADV`

1493 <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> tokens (17% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="en_gum-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (1493; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Dem` (642; 43% of non-empty `PronType`): <em>then, here, there</em>
* `Int` (615; 41% of non-empty `PronType`): <em>when, how, why, where, whither, whenever</em>
* `Rel` (236; 16% of non-empty `PronType`): <em>where, how, why, when, whenever, wherever, however</em>
* `EMPTY` (7394): <em>so, just, also, now, more, really, very, even, as, only</em>

<table>
  <tr><th>Paradigm <i>when</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>when</em></td><td><em>when</em></td></tr>
</table>

### `SCONJ`

2 <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> tokens (0% of all `SCONJ` tokens) have a non-empty value of `PronType`.

`SCONJ` tokens may have the following values of `PronType`:

* `Rel` (2; 100% of non-empty `PronType`): <em>that</em>
* `EMPTY` (2882): <em>that, if, as, because, for, while, by, of, in, after</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> PRON</tt> (22; 88%),
<tt>PRON --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (19; 79%),
<tt>DET --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> DET</tt> (13; 100%),
<tt>ADV --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADV</tt> (10; 67%),
<tt>PRON --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADV</tt> (7; 88%),
<tt>DET --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> DET</tt> (5; 83%),
<tt>PRON --[<tt><a href="en_gum-dep-appos.html">appos</a></tt>]--> PRON</tt> (4; 100%),
<tt>PRON --[<tt><a href="en_gum-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (4; 80%),
<tt>DET --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (2; 100%),
<tt>ADV --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> PRON</tt> (1; 100%).

