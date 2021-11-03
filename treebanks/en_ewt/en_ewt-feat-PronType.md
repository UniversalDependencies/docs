---
layout: base
title:  'Statistics of PronType in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Features: `PronType`

This feature is universal.
It occurs with 6 different values: `Art`, `Dem`, `Ind`, `Int`, `Prs`, `Rel`.

41415 tokens (16%) have a non-empty value of `PronType`.
148 types (1%) occur at least once with a non-empty value of `PronType`.
52 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 5 part-of-speech tags: <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (21689; 9% instances), <tt><a href="en_ewt-pos-DET.html">DET</a></tt> (17915; 7% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (1039; 0% instances), <tt><a href="en_ewt-pos-SCONJ.html">SCONJ</a></tt> (769; 0% instances), <tt><a href="en_ewt-pos-X.html">X</a></tt> (3; 0% instances).

### `PRON`

21689 <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> tokens (94% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="en_ewt-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (18012; 83%), <tt><a href="en_ewt-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (16867; 78%), <tt><a href="en_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (11921; 55%), <tt><a href="en_ewt-feat-Case.html">Case</a></tt><tt>=Nom</tt> (11785; 54%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (1001; 5% of non-empty `PronType`): <em>this, that, those, these</em>
* `Int` (709; 3% of non-empty `PronType`): <em>what, which, who, whom, whatever, whose, who's, Wtf, waht, whoever</em>
* `Prs` (18693; 86% of non-empty `PronType`): <em>i, you, it, they, my, we, he, your, me, their</em>
* `Rel` (1286; 6% of non-empty `PronType`): <em>that, who, which, whom, what, whose</em>
* `EMPTY` (1275): <em>there, anyone, something, anything, nothing, someone, everything, everyone, one, mine</em>

<table>
  <tr><th>Paradigm <i>that</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>that</em></td><td><em>that</em></td></tr>
  <tr><td><tt><tt><a href="en_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>that</em></td></tr>
  <tr><td><tt><tt><a href="en_ewt-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>those</em></td></tr>
</table>

### `DET`

17915 <tt><a href="en_ewt-pos-DET.html">DET</a></tt> tokens (89% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="en_ewt-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (11019; 62%).

`DET` tokens may have the following values of `PronType`:

* `Art` (16367; 91% of non-empty `PronType`): <em>the, a, an, to, tttthhhhh</em>
* `Dem` (1413; 8% of non-empty `PronType`): <em>this, that, these, those</em>
* `Ind` (9; 0% of non-empty `PronType`): <em>half</em>
* `Int` (124; 1% of non-empty `PronType`): <em>what, which, whatever</em>
* `Rel` (2; 0% of non-empty `PronType`): <em>what, whhich</em>
* `EMPTY` (2196): <em>all, some, any, no, another, every, each, both, such, quite</em>

<table>
  <tr><th>Paradigm <i>what</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>what</em></td><td><em>what</em></td></tr>
</table>

### `ADV`

1039 <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> tokens (9% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Dem` (764; 74% of non-empty `PronType`): <em>then, there, here</em>
* `Int` (264; 25% of non-empty `PronType`): <em>how, why, where, when, whenever, Wherever, however, were, y</em>
* `Rel` (11; 1% of non-empty `PronType`): <em>when, where, how, were, wherein</em>
* `EMPTY` (10934): <em>so, just, very, also, now, even, only, as, back, well</em>

<table>
  <tr><th>Paradigm <i>how</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>how</em></td><td><em>how</em></td></tr>
</table>

### `SCONJ`

769 <tt><a href="en_ewt-pos-SCONJ.html">SCONJ</a></tt> tokens (14% of all `SCONJ` tokens) have a non-empty value of `PronType`.

`SCONJ` tokens may have the following values of `PronType`:

* `Int` (689; 90% of non-empty `PronType`): <em>when, how, where, why, whenever, wherever</em>
* `Rel` (80; 10% of non-empty `PronType`): <em>where, when, why, were</em>
* `EMPTY` (4698): <em>that, if, as, because, for, of, since, before, like, with</em>

<table>
  <tr><th>Paradigm <i>when</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>when</em></td><td><em>when</em></td></tr>
</table>

### `X`

3 <tt><a href="en_ewt-pos-X.html">X</a></tt> tokens (0% of all `X` tokens) have a non-empty value of `PronType`.

`X` tokens may have the following values of `PronType`:

* `Int` (3; 100% of non-empty `PronType`): <em>ever</em>
* `EMPTY` (984): <em>etc, etc., .doc, carol.st.clair@enron.com, -, (, ), Access, Analysis_0712, COMMUNICATIONS</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="en_ewt-dep-conj.html">conj</a></tt>]--> PRON</tt> (28; 74%),
<tt>PRON --[<tt><a href="en_ewt-dep-nmod-npmod.html">nmod:npmod</a></tt>]--> PRON</tt> (3; 100%),
<tt>ADV --[<tt><a href="en_ewt-dep-conj.html">conj</a></tt>]--> PRON</tt> (2; 100%),
<tt>PRON --[<tt><a href="en_ewt-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (1; 100%),
<tt>SCONJ --[<tt><a href="en_ewt-dep-conj.html">conj</a></tt>]--> SCONJ</tt> (1; 100%).

