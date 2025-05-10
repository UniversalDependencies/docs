---
layout: base
title:  'Statistics of PronType in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Features: `PronType`

This feature is universal but the values `Emp` are language-specific.
It occurs with 10 different values: `Art`, `Dem`, `Emp`, `Ind`, `Int`, `Neg`, `Prs`, `Rcp`, `Rel`, `Tot`.

7347 tokens (15%) have a non-empty value of `PronType`.
121 types (2%) occur at least once with a non-empty value of `PronType`.
66 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_partut-pos-DET.html">DET</a></tt> (5313; 11% instances), <tt><a href="en_partut-pos-PRON.html">PRON</a></tt> (1985; 4% instances), <tt><a href="en_partut-pos-ADV.html">ADV</a></tt> (49; 0% instances).

### `DET`

5313 <tt><a href="en_partut-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="en_partut-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (4673; 88%), <tt><a href="en_partut-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (3783; 71%), <tt><a href="en_partut-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (2960; 56%).

`DET` tokens may have the following values of `PronType`:

* `Art` (3931; 74% of non-empty `PronType`): <em>the, a, an, another, ’s, Le, les, une</em>
* `Dem` (446; 8% of non-empty `PronType`): <em>this, such, these, that, those</em>
* `Ind` (231; 4% of non-empty `PronType`): <em>any, no, some, each, both, every, whatever, another, certain, numerous</em>
* `Int` (6; 0% of non-empty `PronType`): <em>what, which</em>
* `Prs` (640; 12% of non-empty `PronType`): <em>his, their, its, our, your, my, her</em>
* `Rcp` (4; 0% of non-empty `PronType`): <em>each, another</em>
* `Rel` (1; 0% of non-empty `PronType`): <em>which</em>
* `Tot` (54; 1% of non-empty `PronType`): <em>all</em>
* `EMPTY` (1): <em>all</em>

<table>
  <tr><th>Paradigm <i>another</i></th><th><tt>Rcp</tt></th><th><tt>Art</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>another</em></td><td></td><td><em>another</em></td></tr>
  <tr><td><tt><tt><a href="en_partut-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="en_partut-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>another</em></td><td></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 91% lemmas (32) occur only with one value of `PronType`.

### `PRON`

1985 <tt><a href="en_partut-pos-PRON.html">PRON</a></tt> tokens (97% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="en_partut-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1762; 89%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (162; 8% of non-empty `PronType`): <em>this, that, those, these</em>
* `Emp` (2; 0% of non-empty `PronType`): <em>himself, themselves</em>
* `Ind` (122; 6% of non-empty `PronType`): <em>all, some, others, each, nothing, Many, one, other, Much, both</em>
* `Int` (18; 1% of non-empty `PronType`): <em>what, who</em>
* `Prs` (1263; 64% of non-empty `PronType`): <em>it, I, we, he, you, they, them, him, everyone, us</em>
* `Rcp` (3; 0% of non-empty `PronType`): <em>one</em>
* `Rel` (415; 21% of non-empty `PronType`): <em>which, that, who, what, whom, whose, when, whereby</em>
* `EMPTY` (62): <em>there</em>

<table>
  <tr><th>Paradigm <i>one</i></th><th><tt>Prs</tt></th><th><tt>Rcp</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td></td><td><em>one</em></td></tr>
  <tr><td><tt><tt><a href="en_partut-feat-ExtPos.html">ExtPos</a></tt><tt>=PRON</tt></tt></td><td></td><td><em>one</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_partut-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="en_partut-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td><em>one</em></td></tr>
  <tr><td><tt><tt><a href="en_partut-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_partut-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>one, ones</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en_partut-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td></td><td><em>one</em></td></tr>
  <tr><td><tt><tt><a href="en_partut-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_partut-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>ones</em></td><td></td><td></td></tr>
</table>

### `ADV`

49 <tt><a href="en_partut-pos-ADV.html">ADV</a></tt> tokens (3% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Int` (12; 24% of non-empty `PronType`): <em>where</em>
* `Neg` (18; 37% of non-empty `PronType`): <em>non, no, none</em>
* `Rel` (19; 39% of non-empty `PronType`): <em>where</em>
* `EMPTY` (1816): <em>more, also, now, only, as, so, how, however, well, very</em>

<table>
  <tr><th>Paradigm <i>where</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>where</em></td><td><em>where</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="en_partut-dep-conj.html">conj</a></tt>]--> PRON</tt> (3; 100%),
<tt>PRON --[<tt><a href="en_partut-dep-nmod-poss.html">nmod:poss</a></tt>]--> DET</tt> (1; 100%).

