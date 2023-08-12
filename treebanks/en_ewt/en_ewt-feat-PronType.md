---
layout: base
title:  'Statistics of PronType in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Features: `PronType`

This feature is universal but the values `Emp` are language-specific.
It occurs with 10 different values: `Art`, `Dem`, `Emp`, `Ind`, `Int`, `Neg`, `Prs`, `Rcp`, `Rel`, `Tot`.

42276 tokens (17%) have a non-empty value of `PronType`.
206 types (1%) occur at least once with a non-empty value of `PronType`.
66 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (22532; 9% instances), <tt><a href="en_ewt-pos-DET.html">DET</a></tt> (17931; 7% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (1813; 1% instances).

### `PRON`

22532 <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> tokens (98% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="en_ewt-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (18785; 83%), <tt><a href="en_ewt-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (17695; 79%), <tt><a href="en_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (12701; 56%), <tt><a href="en_ewt-feat-Case.html">Case</a></tt><tt>=Nom</tt> (11793; 52%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (976; 4% of non-empty `PronType`): <em>this, that, those, these</em>
* `Emp` (47; 0% of non-empty `PronType`): <em>itself, themselves, myself, himself, herself, yourself, my, ourselves</em>
* `Ind` (441; 2% of non-empty `PronType`): <em>anyone, something, anything, someone, anybody, somebody, any, any1, some, someon</em>
* `Int` (431; 2% of non-empty `PronType`): <em>what, who, which, whatever, whom, Wtf, waht, whoooooo, wht</em>
* `Neg` (118; 1% of non-empty `PronType`): <em>nothing, one, nobody, noone</em>
* `Prs` (18773; 83% of non-empty `PronType`): <em>i, you, it, they, my, we, he, your, me, their</em>
* `Rcp` (2; 0% of non-empty `PronType`): <em>one</em>
* `Rel` (1595; 7% of non-empty `PronType`): <em>that, which, who, what, whom, whatever, whose, who's, whoever, whomever</em>
* `Tot` (149; 1% of non-empty `PronType`): <em>everything, everyone, everybody, everbody</em>
* `EMPTY` (467): <em>there, their, they, that</em>

<table>
  <tr><th>Paradigm <i>one</i></th><th><tt>Prs</tt></th><th><tt>Rcp</tt></th><th><tt>Neg</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>one</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td><em>one</em></td></tr>
  <tr><td><tt><tt><a href="en_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_ewt-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>one</em></td><td></td><td></td></tr>
</table>

### `DET`

17931 <tt><a href="en_ewt-pos-DET.html">DET</a></tt> tokens (89% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="en_ewt-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (11020; 61%).

`DET` tokens may have the following values of `PronType`:

* `Art` (16368; 91% of non-empty `PronType`): <em>the, a, an, to, tttthhhhh</em>
* `Dem` (1414; 8% of non-empty `PronType`): <em>this, that, these, those</em>
* `Int` (113; 1% of non-empty `PronType`): <em>what, which, whatever</em>
* `Neg` (9; 0% of non-empty `PronType`): <em>half</em>
* `Rcp` (17; 0% of non-empty `PronType`): <em>each</em>
* `Rel` (10; 0% of non-empty `PronType`): <em>whatever, which</em>
* `EMPTY` (2189): <em>all, some, any, no, another, every, each, both, such, quite</em>

<table>
  <tr><th>Paradigm <i>which</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>which</em></td><td><em>which</em></td></tr>
</table>

### `ADV`

1813 <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> tokens (14% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Dem` (764; 42% of non-empty `PronType`): <em>then, there, here</em>
* `Int` (926; 51% of non-empty `PronType`): <em>when, how, why, where, whenever, Wherever, however, were, who, y</em>
* `Rel` (123; 7% of non-empty `PronType`): <em>where, when, why, how, were, wherein, wherever, where-ever</em>
* `EMPTY` (10729): <em>so, just, very, also, now, even, only, as, back, well</em>

<table>
  <tr><th>Paradigm <i>when</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>when</em></td><td><em>when</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="en_ewt-dep-conj.html">conj</a></tt>]--> PRON</tt> (28; 72%),
<tt>ADV --[<tt><a href="en_ewt-dep-conj.html">conj</a></tt>]--> PRON</tt> (2; 100%),
<tt>PRON --[<tt><a href="en_ewt-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (2; 100%),
<tt>PRON --[<tt><a href="en_ewt-dep-obl.html">obl</a></tt>]--> PRON</tt> (1; 100%).

