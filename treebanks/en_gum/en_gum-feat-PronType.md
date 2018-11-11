---
layout: base
title:  'Statistics of PronType in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `PronType`

This feature is universal.
It occurs with 5 different values: `Art`, `Dem`, `Int`, `Prs`, `Rel`.

12072 tokens (15%) have a non-empty value of `PronType`.
83 types (1%) occur at least once with a non-empty value of `PronType`.
55 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 4 part-of-speech tags: <tt><a href="en_gum-pos-DET.html">DET</a></tt> (6480; 8% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (5055; 6% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (360; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (177; 0% instances).

### `DET`

6480 <tt><a href="en_gum-pos-DET.html">DET</a></tt> tokens (94% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="en_gum-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (4284; 66%).

`DET` tokens may have the following values of `PronType`:

* `Art` (6093; 94% of non-empty `PronType`): <em>the, a, an</em>
* `Dem` (357; 6% of non-empty `PronType`): <em>this, these, that, those</em>
* `Int` (28; 0% of non-empty `PronType`): <em>what, which, whatever</em>
* `Prs` (1; 0% of non-empty `PronType`): <em>you</em>
* `Rel` (1; 0% of non-empty `PronType`): <em>that</em>
* `EMPTY` (402): <em>some, all, no, any, each, every, another, both, The, either</em>

<table>
  <tr><th>Paradigm <i>that</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>that</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>that</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 93% lemmas (13) occur only with one value of `PronType`.

### `PRON`

5055 <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> tokens (93% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (4048; 80%), <tt><a href="en_gum-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (3502; 69%), <tt><a href="en_gum-feat-Case.html">Case</a></tt><tt>=Nom</tt> (2558; 51%).

`PRON` tokens may have the following values of `PronType`:

* `Art` (10; 0% of non-empty `PronType`): <em>a, the</em>
* `Dem` (298; 6% of non-empty `PronType`): <em>this, that, those, these</em>
* `Int` (173; 3% of non-empty `PronType`): <em>what, which, who, whatever, whose, whoever, whom</em>
* `Prs` (4147; 82% of non-empty `PronType`): <em>you, it, i, your, they, we, he, her, she, his</em>
* `Rel` (427; 8% of non-empty `PronType`): <em>that, which, who, what, whom</em>
* `EMPTY` (375): <em>there, all, some, both, each, either, another, any, half, one</em>

<table>
  <tr><th>Paradigm <i>that</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>that</em></td><td><em>that</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>that</em></td></tr>
</table>

### `SCONJ`

360 <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> tokens (22% of all `SCONJ` tokens) have a non-empty value of `PronType`.

`SCONJ` tokens may have the following values of `PronType`:

* `Int` (334; 93% of non-empty `PronType`): <em>when, how, why, where, wherever, Whenever, While</em>
* `Rel` (26; 7% of non-empty `PronType`): <em>where, when, why</em>
* `EMPTY` (1272): <em>that, if, as, because, by, while, after, in, of, for</em>

<table>
  <tr><th>Paradigm <i>when</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>when</em></td><td><em>when</em></td></tr>
</table>

### `ADV`

177 <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> tokens (6% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Dem` (177; 100% of non-empty `PronType`): <em>then, there, here</em>
* `EMPTY` (2675): <em>also, so, very, just, as, more, even, well, only, most</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> PRON</tt> (12; 92%),
<tt>ADV --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADV</tt> (2; 100%),
<tt>SCONJ --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> SCONJ</tt> (1; 100%).

