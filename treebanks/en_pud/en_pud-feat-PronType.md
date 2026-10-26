---
layout: base
title:  'Statistics of PronType in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Features: `PronType`

This feature is universal.
It occurs with 9 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rcp`, `Rel`, `Tot`.

3249 tokens (15%) have a non-empty value of `PronType`.
108 types (2%) occur at least once with a non-empty value of `PronType`.
65 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_pud-pos-DET.html">DET</a></tt> (2080; 10% instances), <tt><a href="en_pud-pos-PRON.html">PRON</a></tt> (1044; 5% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (125; 1% instances).

### `DET`

2080 <tt><a href="en_pud-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="en_pud-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (1441; 69%).

`DET` tokens may have the following values of `PronType`:

* `Art` (1885; 91% of non-empty `PronType`): <em>the, a, an</em>
* `Dem` (91; 4% of non-empty `PronType`): <em>this, that, these, those</em>
* `Ind` (33; 2% of non-empty `PronType`): <em>some, another, any, such, either, half</em>
* `Int` (2; 0% of non-empty `PronType`): <em>which</em>
* `Neg` (13; 1% of non-empty `PronType`): <em>no, nary</em>
* `Rcp` (2; 0% of non-empty `PronType`): <em>each</em>
* `Rel` (4; 0% of non-empty `PronType`): <em>whatever, which</em>
* `Tot` (50; 2% of non-empty `PronType`): <em>all, each, both, every</em>

<table>
  <tr><th>Paradigm <i>each</i></th><th><tt>Rcp</tt></th><th><tt>Tot</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>each</em></td></tr>
  <tr><td><tt><tt><a href="en_pud-feat-ExtPos.html">ExtPos</a></tt><tt>=PRON</tt></tt></td><td><em>each</em></td><td></td></tr>
</table>

### `PRON`

1044 <tt><a href="en_pud-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="en_pud-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (784; 75%), <tt><a href="en_pud-feat-Person.html">Person</a></tt><tt>=3</tt> (614; 59%), <tt><a href="en_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (602; 58%), <tt><a href="en_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (562; 54%), <tt><a href="en_pud-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (558; 53%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (94; 9% of non-empty `PronType`): <em>there, this, that, those, these</em>
* `Ind` (11; 1% of non-empty `PronType`): <em>someone, something, anybody, anyone, anything, somebody</em>
* `Int` (34; 3% of non-empty `PronType`): <em>what, which, who, whose, where, whom</em>
* `Neg` (1; 0% of non-empty `PronType`): <em>none</em>
* `Prs` (745; 71% of non-empty `PronType`): <em>it, he, his, their, they, I, her, its, she, we</em>
* `Rel` (155; 15% of non-empty `PronType`): <em>which, that, who, whoever</em>
* `Tot` (4; 0% of non-empty `PronType`): <em>everyone, everything</em>

<table>
  <tr><th>Paradigm <i>that</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>that</em></td><td><em>that</em></td></tr>
  <tr><td><tt><tt><a href="en_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>that</em></td></tr>
  <tr><td><tt><tt><a href="en_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>those</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 92% lemmas (35) occur only with one value of `PronType`.

### `ADV`

125 <tt><a href="en_pud-pos-ADV.html">ADV</a></tt> tokens (15% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Dem` (40; 32% of non-empty `PronType`): <em>now, then, there, here</em>
* `Ind` (7; 6% of non-empty `PronType`): <em>sometimes, ever</em>
* `Int` (48; 38% of non-empty `PronType`): <em>when, how, why, where</em>
* `Neg` (4; 3% of non-empty `PronType`): <em>never, nowhere</em>
* `Rel` (20; 16% of non-empty `PronType`): <em>where, when, why, whenever</em>
* `Tot` (6; 5% of non-empty `PronType`): <em>always</em>
* `EMPTY` (688): <em>also, so, only, more, however, well, most, as, about, just</em>

<table>
  <tr><th>Paradigm <i>when</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>when</em></td><td><em>when</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>DET --[<tt><a href="en_pud-dep-conj.html">conj</a></tt>]--> DET</tt> (1; 100%),
<tt>PRON --[<tt><a href="en_pud-dep-conj.html">conj</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="en_pud-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (1; 100%).

