---
layout: base
title:  'Statistics of PronType in UD_English-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_English-LittlePrince: Features: `PronType`

This feature is universal.
It occurs with 6 different values: `Art`, `Dem`, `Ind`, `Int`, `Prs`, `Rel`.

1366 tokens (20%) have a non-empty value of `PronType`.
68 types (6%) occur at least once with a non-empty value of `PronType`.
41 lemmas (4%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> (834; 12% instances), <tt><a href="en_littleprince-pos-DET.html">DET</a></tt> (483; 7% instances), <tt><a href="en_littleprince-pos-ADV.html">ADV</a></tt> (49; 1% instances).

### `PRON`

834 <tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> tokens (95% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="en_littleprince-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (709; 85%), <tt><a href="en_littleprince-feat-Number.html">Number</a></tt><tt>=Sing</tt> (622; 75%), <tt><a href="en_littleprince-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (518; 62%), <tt><a href="en_littleprince-feat-Case.html">Case</a></tt><tt>=Nom</tt> (424; 51%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (36; 4% of non-empty `PronType`): <em>that, this, these</em>
* `Ind` (6; 1% of non-empty `PronType`): <em>something, anyone, anything</em>
* `Int` (25; 3% of non-empty `PronType`): <em>what, who, whom</em>
* `Prs` (727; 87% of non-empty `PronType`): <em>I, he, you, it, me, his, my, him, she, they</em>
* `Rel` (40; 5% of non-empty `PronType`): <em>that, which, who</em>
* `EMPTY` (46): <em>there, anything, all, one, nobody, everything, anyone, Everybody, nothing, somebody</em>

<table>
  <tr><th>Paradigm <i>that</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>that</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_littleprince-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>that</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 94% lemmas (29) occur only with one value of `PronType`.

### `DET`

483 <tt><a href="en_littleprince-pos-DET.html">DET</a></tt> tokens (88% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="en_littleprince-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (306; 63%).

`DET` tokens may have the following values of `PronType`:

* `Art` (438; 91% of non-empty `PronType`): <em>the, a, an</em>
* `Dem` (41; 8% of non-empty `PronType`): <em>this, that, these, those</em>
* `Int` (4; 1% of non-empty `PronType`): <em>which, what</em>
* `EMPTY` (66): <em>all, no, any, some, each, such, another</em>

### `ADV`

49 <tt><a href="en_littleprince-pos-ADV.html">ADV</a></tt> tokens (14% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Dem` (28; 57% of non-empty `PronType`): <em>then, there, here</em>
* `Int` (18; 37% of non-empty `PronType`): <em>how, when, why, where, wherever</em>
* `Rel` (3; 6% of non-empty `PronType`): <em>where</em>
* `EMPTY` (309): <em>very, so, never, just, now, too, much, away, again, even</em>

<table>
  <tr><th>Paradigm <i>where</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>where</em></td><td><em>where</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="en_littleprince-dep-appos.html">appos</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="en_littleprince-dep-expl.html">expl</a></tt>]--> PRON</tt> (1; 100%).

