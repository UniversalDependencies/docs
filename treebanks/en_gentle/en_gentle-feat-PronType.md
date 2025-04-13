---
layout: base
title:  'Statistics of PronType in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Features: `PronType`

This feature is universal but the values `Emp` are language-specific.
It occurs with 10 different values: `Art`, `Dem`, `Emp`, `Ind`, `Int`, `Neg`, `Prs`, `Rcp`, `Rel`, `Tot`.

2492 tokens (14%) have a non-empty value of `PronType`.
111 types (3%) occur at least once with a non-empty value of `PronType`.
59 lemmas (2%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_gentle-pos-DET.html">DET</a></tt> (1192; 7% instances), <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (1187; 7% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt> (113; 1% instances).

### `DET`

1192 <tt><a href="en_gentle-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="en_gentle-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (629; 53%).

`DET` tokens may have the following values of `PronType`:

* `Art` (940; 79% of non-empty `PronType`): <em>the, a, an</em>
* `Dem` (103; 9% of non-empty `PronType`): <em>this, that, these, such, those</em>
* `Ind` (80; 7% of non-empty `PronType`): <em>any, all, some, every, another, each, both, such, ∀</em>
* `Int` (2; 0% of non-empty `PronType`): <em>what, which</em>
* `Neg` (35; 3% of non-empty `PronType`): <em>no, know</em>
* `Rcp` (3; 0% of non-empty `PronType`): <em>each</em>
* `Tot` (29; 2% of non-empty `PronType`): <em>all, each, both</em>
* `EMPTY` (3): <em>either</em>

<table>
  <tr><th>Paradigm <i>each</i></th><th><tt>Rcp</tt></th><th><tt>Tot</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>each</em></td><td><em>each</em></td></tr>
  <tr><td><tt><tt><a href="en_gentle-feat-ExtPos.html">ExtPos</a></tt><tt>=PRON</tt></tt></td><td><em>each</em></td><td></td><td></td></tr>
</table>

### `PRON`

1187 <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="en_gentle-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (948; 80%), <tt><a href="en_gentle-feat-Number.html">Number</a></tt><tt>=Sing</tt> (878; 74%), <tt><a href="en_gentle-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (856; 72%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (80; 7% of non-empty `PronType`): <em>there, that, this, those, these</em>
* `Emp` (1; 0% of non-empty `PronType`): <em>itself</em>
* `Ind` (21; 2% of non-empty `PronType`): <em>something, anything, anyone, someone, some, somebody</em>
* `Int` (17; 1% of non-empty `PronType`): <em>what, Which, who, whose</em>
* `Neg` (10; 1% of non-empty `PronType`): <em>nothing, one</em>
* `Prs` (945; 80% of non-empty `PronType`): <em>you, I, he, it, his, we, my, your, me, they</em>
* `Rel` (110; 9% of non-empty `PronType`): <em>that, which, what, who, whom, Whoever, whose, wich</em>
* `Tot` (3; 0% of non-empty `PronType`): <em>everything, everyone</em>
* `EMPTY` (1): <em>what</em>

<table>
  <tr><th>Paradigm <i>that</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>that</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gentle-feat-ExtPos.html">ExtPos</a></tt><tt>=ADV</tt>|<tt><a href="en_gentle-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>that</em></td></tr>
  <tr><td><tt><tt><a href="en_gentle-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>that</em></td></tr>
</table>

### `ADV`

113 <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt> tokens (16% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="en_gentle-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (113; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Dem` (74; 65% of non-empty `PronType`): <em>then, here, there</em>
* `Int` (18; 16% of non-empty `PronType`): <em>when, how, where, whereby</em>
* `Rel` (21; 19% of non-empty `PronType`): <em>where, how, when</em>
* `EMPTY` (616): <em>just, so, also, thus, well, now, as, only, still, very</em>

<table>
  <tr><th>Paradigm <i>how</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>how</em></td><td><em>how</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="en_gentle-dep-conj.html">conj</a></tt>]--> PRON</tt> (4; 57%),
<tt>PRON --[<tt><a href="en_gentle-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (2; 100%),
<tt>ADV --[<tt><a href="en_gentle-dep-reparandum.html">reparandum</a></tt>]--> ADV</tt> (1; 100%),
<tt>ADV --[<tt><a href="en_gentle-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (1; 100%).

