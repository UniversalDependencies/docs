---
layout: base
title:  'Statistics of PronType in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Features: `PronType`

This feature is universal.
It occurs with 5 different values: `Art`, `Dem`, `Int`, `Prs`, `Rel`.

3066 tokens (14%) have a non-empty value of `PronType`.
70 types (1%) occur at least once with a non-empty value of `PronType`.
34 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 4 part-of-speech tags: <tt><a href="en_pud-pos-DET.html">DET</a></tt> (1985; 9% instances), <tt><a href="en_pud-pos-PRON.html">PRON</a></tt> (985; 5% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (93; 0% instances), <tt><a href="en_pud-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances).

### `DET`

1985 <tt><a href="en_pud-pos-DET.html">DET</a></tt> tokens (95% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="en_pud-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (1441; 73%).

`DET` tokens may have the following values of `PronType`:

* `Art` (1885; 95% of non-empty `PronType`): <em>the, a, an</em>
* `Dem` (91; 5% of non-empty `PronType`): <em>this, that, these, those</em>
* `Int` (5; 0% of non-empty `PronType`): <em>whatever, which</em>
* `Rel` (4; 0% of non-empty `PronType`): <em>that, which</em>
* `EMPTY` (101): <em>all, some, each, no, both, another, every, any, such, there</em>

<table>
  <tr><th>Paradigm <i>that</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>that</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>that</em></td></tr>
</table>

### `PRON`

985 <tt><a href="en_pud-pos-PRON.html">PRON</a></tt> tokens (96% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="en_pud-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (725; 74%), <tt><a href="en_pud-feat-Person.html">Person</a></tt><tt>=3</tt> (613; 62%), <tt><a href="en_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (590; 60%), <tt><a href="en_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (503; 51%), <tt><a href="en_pud-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (501; 51%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (59; 6% of non-empty `PronType`): <em>this, that, those, these</em>
* `Int` (35; 4% of non-empty `PronType`): <em>what, which, who, whose, where, whoever, whom</em>
* `Prs` (742; 75% of non-empty `PronType`): <em>it, he, his, their, they, I, her, its, she, we</em>
* `Rel` (149; 15% of non-empty `PronType`): <em>which, that, who</em>
* `EMPTY` (36): <em>there, 'Ya, One, that, ’s</em>

<table>
  <tr><th>Paradigm <i>that</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>that</em></td><td><em>that</em></td></tr>
  <tr><td><tt><tt><a href="en_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>that</em></td></tr>
</table>

### `ADV`

93 <tt><a href="en_pud-pos-ADV.html">ADV</a></tt> tokens (11% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Dem` (26; 28% of non-empty `PronType`): <em>then, there, here</em>
* `Int` (48; 52% of non-empty `PronType`): <em>when, how, why, where, whenever</em>
* `Rel` (19; 20% of non-empty `PronType`): <em>where, when, why</em>
* `EMPTY` (755): <em>also, so, only, more, not, however, most, well, as, about</em>

<table>
  <tr><th>Paradigm <i>when</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>when</em></td><td><em>when</em></td></tr>
</table>

### `SCONJ`

3 <tt><a href="en_pud-pos-SCONJ.html">SCONJ</a></tt> tokens (1% of all `SCONJ` tokens) have a non-empty value of `PronType`.

`SCONJ` tokens may have the following values of `PronType`:

* `Dem` (1; 33% of non-empty `PronType`): <em>that</em>
* `Int` (1; 33% of non-empty `PronType`): <em>when</em>
* `Rel` (1; 33% of non-empty `PronType`): <em>that</em>
* `EMPTY` (287): <em>that, as, of, if, after, while, by, for, because, in</em>

<table>
  <tr><th>Paradigm <i>that</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt></tt></td><td><em>that</em></td><td><em>that</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="en_pud-dep-conj.html">conj</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="en_pud-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (1; 100%).

