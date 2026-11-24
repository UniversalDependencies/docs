---
layout: base
title:  'Statistics of PronType in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Features: `PronType`

This feature is universal but the values `Emp` are language-specific.
It occurs with 10 different values: `Art`, `Dem`, `Emp`, `Ind`, `Int`, `Neg`, `Prs`, `Rcp`, `Rel`, `Tot`.

3255 tokens (15%) have a non-empty value of `PronType`.
109 types (2%) occur at least once with a non-empty value of `PronType`.
64 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_pud-pos-DET.html">DET</a></tt> (2080; 10% instances), <tt><a href="en_pud-pos-PRON.html">PRON</a></tt> (1044; 5% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (131; 1% instances).

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

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="en_pud-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (784; 75%), <tt><a href="en_pud-feat-Person.html">Person</a></tt><tt>=3</tt> (614; 59%), <tt><a href="en_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (608; 58%), <tt><a href="en_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (562; 54%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (93; 9% of non-empty `PronType`): <em>there, this, that, those, these</em>
* `Emp` (3; 0% of non-empty `PronType`): <em>herself, itself, themselves</em>
* `Ind` (11; 1% of non-empty `PronType`): <em>someone, something, anybody, anyone, anything, somebody</em>
* `Int` (28; 3% of non-empty `PronType`): <em>what, which, who, where</em>
* `Neg` (1; 0% of non-empty `PronType`): <em>none</em>
* `Prs` (742; 71% of non-empty `PronType`): <em>it, he, his, their, they, I, her, its, she, we</em>
* `Rel` (162; 16% of non-empty `PronType`): <em>which, that, who, whose, whoever, whom</em>
* `Tot` (4; 0% of non-empty `PronType`): <em>everyone, everything</em>

<table>
  <tr><th>Paradigm <i>that</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>that</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>that</em></td></tr>
  <tr><td><tt><tt><a href="en_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>those</em></td></tr>
</table>

### `ADV`

131 <tt><a href="en_pud-pos-ADV.html">ADV</a></tt> tokens (16% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="en_pud-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (131; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Dem` (40; 31% of non-empty `PronType`): <em>now, then, there, here</em>
* `Ind` (7; 5% of non-empty `PronType`): <em>sometimes, ever</em>
* `Int` (48; 37% of non-empty `PronType`): <em>when, how, why, where</em>
* `Neg` (10; 8% of non-empty `PronType`): <em>no, never, nowhere</em>
* `Rel` (20; 15% of non-empty `PronType`): <em>where, when, why, whenever</em>
* `Tot` (6; 5% of non-empty `PronType`): <em>always</em>
* `EMPTY` (683): <em>also, so, only, more, however, well, most, as, about, just</em>

<table>
  <tr><th>Paradigm <i>when</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>when</em></td><td><em>when</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>DET --[<tt><a href="en_pud-dep-conj.html">conj</a></tt>]--> DET</tt> (1; 100%),
<tt>PRON --[<tt><a href="en_pud-dep-conj.html">conj</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="en_pud-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (1; 100%).

