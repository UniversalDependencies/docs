---
layout: base
title:  'Statistics of PronType in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Features: `PronType`

This feature is universal.
It occurs with 5 different values: `Art`, `Dem`, `Int`, `Prs`, `Rel`.

41421 tokens (16%) have a non-empty value of `PronType`.
139 types (1%) occur at least once with a non-empty value of `PronType`.
53 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 4 part-of-speech tags: <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (21679; 9% instances), <tt><a href="en_ewt-pos-DET.html">DET</a></tt> (17906; 7% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (1067; 0% instances), <tt><a href="en_ewt-pos-SCONJ.html">SCONJ</a></tt> (769; 0% instances).

### `PRON`

21679 <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> tokens (94% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="en_ewt-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (18005; 83%), <tt><a href="en_ewt-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (16860; 78%), <tt><a href="en_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (11919; 55%), <tt><a href="en_ewt-feat-Case.html">Case</a></tt><tt>=Nom</tt> (11783; 54%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (1002; 5% of non-empty `PronType`): <em>this, that, those, these</em>
* `Int` (710; 3% of non-empty `PronType`): <em>what, which, who, whom, whatever, whose, who's, Wtf, ever, waht</em>
* `Prs` (18683; 86% of non-empty `PronType`): <em>i, you, it, they, my, we, he, your, me, their</em>
* `Rel` (1284; 6% of non-empty `PronType`): <em>that, who, which, whom, what, whose</em>
* `EMPTY` (1282): <em>there, anyone, something, anything, nothing, someone, everything, everyone, one, mine</em>

<table>
  <tr><th>Paradigm <i>that</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>that</em></td><td><em>that</em></td></tr>
  <tr><td><tt><tt><a href="en_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>that</em></td></tr>
  <tr><td><tt><tt><a href="en_ewt-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>those</em></td></tr>
</table>

### `DET`

17906 <tt><a href="en_ewt-pos-DET.html">DET</a></tt> tokens (89% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="en_ewt-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (11017; 62%).

`DET` tokens may have the following values of `PronType`:

* `Art` (16365; 91% of non-empty `PronType`): <em>the, a, an</em>
* `Dem` (1415; 8% of non-empty `PronType`): <em>this, that, these, those</em>
* `Int` (124; 1% of non-empty `PronType`): <em>what, which, whatever</em>
* `Rel` (2; 0% of non-empty `PronType`): <em>what, whhich</em>
* `EMPTY` (2169): <em>all, some, any, no, another, every, each, both, such, quite</em>

<table>
  <tr><th>Paradigm <i>what</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>what</em></td><td><em>what</em></td></tr>
</table>

### `ADV`

1067 <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> tokens (9% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Dem` (769; 72% of non-empty `PronType`): <em>then, there, here, that</em>
* `Int` (267; 25% of non-empty `PronType`): <em>how, why, where, when, ever, whenever, Wherever, however, were, y</em>
* `Rel` (31; 3% of non-empty `PronType`): <em>that, when, where, how, were, wherein</em>
* `EMPTY` (11207): <em>so, just, very, also, now, even, only, as, back, well</em>

<table>
  <tr><th>Paradigm <i>how</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>how</em></td><td><em>how</em></td></tr>
</table>

### `SCONJ`

769 <tt><a href="en_ewt-pos-SCONJ.html">SCONJ</a></tt> tokens (14% of all `SCONJ` tokens) have a non-empty value of `PronType`.

`SCONJ` tokens may have the following values of `PronType`:

* `Int` (689; 90% of non-empty `PronType`): <em>when, how, where, why, whenever, wherever</em>
* `Rel` (80; 10% of non-empty `PronType`): <em>where, when, why, were</em>
* `EMPTY` (4642): <em>that, if, as, because, for, of, since, before, like, after</em>

<table>
  <tr><th>Paradigm <i>when</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>when</em></td><td><em>when</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="en_ewt-dep-conj.html">conj</a></tt>]--> PRON</tt> (28; 74%),
<tt>PRON --[<tt><a href="en_ewt-dep-nmod-npmod.html">nmod:npmod</a></tt>]--> PRON</tt> (3; 100%),
<tt>ADV --[<tt><a href="en_ewt-dep-conj.html">conj</a></tt>]--> PRON</tt> (2; 100%),
<tt>PRON --[<tt><a href="en_ewt-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (1; 100%),
<tt>SCONJ --[<tt><a href="en_ewt-dep-conj.html">conj</a></tt>]--> SCONJ</tt> (1; 100%).

