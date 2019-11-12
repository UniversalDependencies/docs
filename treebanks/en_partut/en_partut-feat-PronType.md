---
layout: base
title:  'Statistics of PronType in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Features: `PronType`

This feature is universal.
It occurs with 8 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.

7330 tokens (15%) have a non-empty value of `PronType`.
125 types (2%) occur at least once with a non-empty value of `PronType`.
69 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_partut-pos-DET.html">DET</a></tt> (5321; 11% instances), <tt><a href="en_partut-pos-PRON.html">PRON</a></tt> (1991; 4% instances), <tt><a href="en_partut-pos-ADV.html">ADV</a></tt> (18; 0% instances).

### `DET`

5321 <tt><a href="en_partut-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="en_partut-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (4680; 88%), <tt><a href="en_partut-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (3782; 71%), <tt><a href="en_partut-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (2963; 56%).

`DET` tokens may have the following values of `PronType`:

* `Art` (3939; 74% of non-empty `PronType`): <em>the, a, an, another, Le, ’s, L, la, les, une</em>
* `Dem` (446; 8% of non-empty `PronType`): <em>this, such, these, that, those</em>
* `Ind` (232; 4% of non-empty `PronType`): <em>any, no, some, each, both, every, whatever, certain, numerous, Many</em>
* `Int` (6; 0% of non-empty `PronType`): <em>what, which</em>
* `Prs` (641; 12% of non-empty `PronType`): <em>his, their, its, our, your, my, her, ma</em>
* `Rel` (1; 0% of non-empty `PronType`): <em>which</em>
* `Tot` (56; 1% of non-empty `PronType`): <em>all</em>

<table>
  <tr><th>Paradigm <i>which</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>which</em></td><td><em>which</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 97% lemmas (38) occur only with one value of `PronType`.

### `PRON`

1991 <tt><a href="en_partut-pos-PRON.html">PRON</a></tt> tokens (97% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="en_partut-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1768; 89%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (157; 8% of non-empty `PronType`): <em>this, that, those, these</em>
* `Ind` (125; 6% of non-empty `PronType`): <em>all, some, others, each, nothing, Many, other, one, Much, both</em>
* `Int` (18; 1% of non-empty `PronType`): <em>what, who</em>
* `Prs` (1265; 64% of non-empty `PronType`): <em>it, I, we, he, you, they, them, him, everyone, us</em>
* `Rel` (426; 21% of non-empty `PronType`): <em>which, that, who, what, where, whom, whose, when, whereby</em>
* `EMPTY` (62): <em>there</em>

<table>
  <tr><th>Paradigm <i>that</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>that</em></td><td><em>that</em></td></tr>
  <tr><td><tt><tt><a href="en_partut-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>that</em></td></tr>
  <tr><td><tt><tt><a href="en_partut-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_partut-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td></td><td><em>that</em></td></tr>
  <tr><td><tt><tt><a href="en_partut-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>those</em></td></tr>
  <tr><td><tt><tt><a href="en_partut-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_partut-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td></td><td><em>those</em></td></tr>
  <tr><td><tt><tt><a href="en_partut-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td></td><td><em>that</em></td></tr>
</table>

### `ADV`

18 <tt><a href="en_partut-pos-ADV.html">ADV</a></tt> tokens (1% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Neg` (18; 100% of non-empty `PronType`): <em>non, no, none</em>
* `EMPTY` (1878): <em>more, also, so, now, only, how, however, well, as, very</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="en_partut-dep-conj.html">conj</a></tt>]--> PRON</tt> (3; 100%),
<tt>PRON --[<tt><a href="en_partut-dep-nmod-poss.html">nmod:poss</a></tt>]--> DET</tt> (1; 100%).

