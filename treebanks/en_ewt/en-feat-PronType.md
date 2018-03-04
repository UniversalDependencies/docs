---
layout: base
title:  'Statistics of PronType in UD_English'
udver: '2'
---

## Treebank Statistics: UD_English: Features: `PronType`

This feature is universal.
It occurs with 5 different values: `Art`, `Dem`, `Int`, `Prs`, `Rel`.

41387 tokens (16%) have a non-empty value of `PronType`.
131 types (1%) occur at least once with a non-empty value of `PronType`.
55 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="en-pos-PRON.html">PRON</a></tt> (21640; 8% instances), <tt><a href="en-pos-DET.html">DET</a></tt> (17905; 7% instances), <tt><a href="en-pos-ADV.html">ADV</a></tt> (1842; 1% instances).

### `PRON`

21640 <tt><a href="en-pos-PRON.html">PRON</a></tt> tokens (94% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="en-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (17985; 83%), <tt><a href="en-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (16825; 78%), <tt><a href="en-feat-Number.html">Number</a></tt><tt>=Sing</tt> (11915; 55%), <tt><a href="en-feat-Case.html">Case</a></tt><tt>=Nom</tt> (11769; 54%).

`PRON` tokens may have the following values of `PronType`:

* `Art` (1; 0% of non-empty `PronType`): <em>The</em>
* `Dem` (1002; 5% of non-empty `PronType`): <em>this, that, those, these</em>
* `Int` (710; 3% of non-empty `PronType`): <em>what, which, who, whom, whatever, whose, who's, Wtf, ever, waht</em>
* `Prs` (18643; 86% of non-empty `PronType`): <em>i, you, it, they, my, we, he, your, me, their</em>
* `Rel` (1284; 6% of non-empty `PronType`): <em>that, who, which, whom, what, whose</em>
* `EMPTY` (1313): <em>there, anyone, something, anything, nothing, someone, everything, everyone, one, mine</em>

<table>
  <tr><th>Paradigm <i>that</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>that</em></td><td><em>that</em></td></tr>
  <tr><td><tt><tt><a href="en-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>that</em></td></tr>
</table>

### `DET`

17905 <tt><a href="en-pos-DET.html">DET</a></tt> tokens (89% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="en-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (11016; 62%).

`DET` tokens may have the following values of `PronType`:

* `Art` (16364; 91% of non-empty `PronType`): <em>the, a, an</em>
* `Dem` (1415; 8% of non-empty `PronType`): <em>this, that, these, those</em>
* `Int` (124; 1% of non-empty `PronType`): <em>what, which, whatever</em>
* `Rel` (2; 0% of non-empty `PronType`): <em>what, whhich</em>
* `EMPTY` (2173): <em>all, some, any, no, another, every, each, both, such, quite</em>

<table>
  <tr><th>Paradigm <i>what</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>what</em></td><td><em>what</em></td></tr>
</table>

### `ADV`

1842 <tt><a href="en-pos-ADV.html">ADV</a></tt> tokens (14% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Dem` (775; 42% of non-empty `PronType`): <em>there, then, here, that</em>
* `Int` (957; 52% of non-empty `PronType`): <em>when, how, why, where, whenever, ever, wherever, however, were, y</em>
* `Rel` (110; 6% of non-empty `PronType`): <em>where, that, when, why, how, were, wherein</em>
* `EMPTY` (11199): <em>so, just, very, also, now, even, only, as, back, well</em>

<table>
  <tr><th>Paradigm <i>when</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>when</em></td><td><em>when</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="en-dep-conj.html">conj</a></tt>]--> PRON</tt> (28; 74%),
<tt>DET --[<tt><a href="en-dep-det.html">det</a></tt>]--> DET</tt> (15; 88%),
<tt>PRON --[<tt><a href="en-dep-nmod-npmod.html">nmod:npmod</a></tt>]--> PRON</tt> (3; 100%),
<tt>PRON --[<tt><a href="en-dep-nmod-poss.html">nmod:poss</a></tt>]--> PRON</tt> (3; 100%),
<tt>ADV --[<tt><a href="en-dep-conj.html">conj</a></tt>]--> PRON</tt> (2; 100%),
<tt>PRON --[<tt><a href="en-dep-obl.html">obl</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="en-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (1; 100%).

