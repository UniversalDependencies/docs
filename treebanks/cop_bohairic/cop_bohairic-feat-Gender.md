---
layout: base
title:  'Statistics of Gender in UD_Coptic-Bohairic'
udver: '2'
---

## Treebank Statistics: UD_Coptic-Bohairic: Features: `Gender`

This feature is universal.
It occurs with 2 different values: `Fem`, `Masc`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: <tt><a href="cop_bohairic-feat-Gender.html">Gender</a></tt>, <tt><a href="cop_bohairic-feat-Gender-psor.html">Gender[psor]</a></tt>.

5701 tokens (17%) have a non-empty value of `Gender`.
49 types (2%) occur at least once with a non-empty value of `Gender`.
28 lemmas (2%) occur at least once with a non-empty value of `Gender`.
The feature is used with 2 part-of-speech tags: <tt><a href="cop_bohairic-pos-PRON.html">PRON</a></tt> (2981; 9% instances), <tt><a href="cop_bohairic-pos-DET.html">DET</a></tt> (2720; 8% instances).

### `PRON`

2981 <tt><a href="cop_bohairic-pos-PRON.html">PRON</a></tt> tokens (56% of all `PRON` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PRON` and `Gender` co-occurred: <tt><a href="cop_bohairic-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2981; 100%), <tt><a href="cop_bohairic-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (2727; 91%), <tt><a href="cop_bohairic-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (2727; 91%), <tt><a href="cop_bohairic-feat-Person.html">Person</a></tt><tt>=3</tt> (2449; 82%).

`PRON` tokens may have the following values of `Gender`:

* `Fem` (471; 16% of non-empty `Gender`): ⲥ, ⲧⲉ, ⲉ, ⲉⲥⲉ, ⲁⲥϣⲁⲛ, ⲓ, ϥ, ⲁⲣⲉ, ⲉⲣⲟ, ⲧⲉⲣ
* `Masc` (2510; 84% of non-empty `Gender`): ϥ, ⲕ, ⲡⲉ, ⲛⲑⲟϥ, ⲉϥⲉ, ⲡ, ⲭ, ⲛⲑⲟⲕ, ⲁϥϣⲁⲛ, ⲉⲕⲉ
* `EMPTY` (2377): ⲟⲩ, ⲩ, ⲓ, ⲧⲉⲛ, ϥ, ϯ, ⲛ, ⲥⲉ, ⲛⲓⲃⲉⲛ, ⲑⲏⲛⲟⲩ

<table>
  <tr><th>Paradigm <i>ⲡⲉ</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt></tt></td><td>ⲡⲉ, ⲡ</td><td>ⲧⲉ</td></tr>
</table>

`Gender` seems to be **lexical feature** of `PRON`. 92% lemmas (12) occur only with one value of `Gender`.

### `DET`

2720 <tt><a href="cop_bohairic-pos-DET.html">DET</a></tt> tokens (60% of all `DET` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `DET` and `Gender` co-occurred: <tt><a href="cop_bohairic-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (2720; 100%), <tt><a href="cop_bohairic-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2720; 100%), <tt><a href="cop_bohairic-feat-Gender-psor.html">Gender[psor]</a></tt><tt>=EMPTY</tt> (2397; 88%), <tt><a href="cop_bohairic-feat-Number-psor.html">Number[psor]</a></tt><tt>=EMPTY</tt> (2238; 82%), <tt><a href="cop_bohairic-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (2238; 82%), <tt><a href="cop_bohairic-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (2224; 82%), <tt><a href="cop_bohairic-feat-PronType.html">PronType</a></tt><tt>=Art</tt> (1866; 69%).

`DET` tokens may have the following values of `Gender`:

* `Fem` (551; 20% of non-empty `Gender`): ϯ, ⲧ, ⲧⲉϥ, ⲧⲉⲕ, ⲧⲁ, ⲑⲏ, ⲧⲁⲓ, ⲑ, ⲑⲁⲓ, ⲧⲉⲥ
* `Masc` (2169; 80% of non-empty `Gender`): ⲡⲓ, ⲡ, ⲫ, ⲡⲉϥ, ⲫⲏ, ⲡⲁⲓ, ⲡⲁ, ⲫⲁⲓ, ⲡⲉⲕ, ⲡⲟⲩ
* `EMPTY` (1781): ⲟⲩ, ⲛⲓ, ϩⲁⲛ, ⲛⲏ, ⲛⲉϥ, ⲛⲁⲓ, ⲕⲉ, ⲛⲁ, ⲛⲟⲩ, ⲛⲉⲕ

<table>
  <tr><th>Paradigm <i>ⲡⲓ</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><tt><a href="cop_bohairic-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td>ⲡⲓ</td><td>ϯ</td></tr>
  <tr><td><tt><tt><a href="cop_bohairic-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td>ⲡⲓ</td><td></td></tr>
</table>

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>DET --[<tt><a href="cop_bohairic-dep-cop.html">cop</a></tt>]--> PRON</tt> (16; 84%),
<tt>DET --[<tt><a href="cop_bohairic-dep-conj.html">conj</a></tt>]--> DET</tt> (4; 100%),
<tt>DET --[<tt><a href="cop_bohairic-dep-parataxis.html">parataxis</a></tt>]--> DET</tt> (3; 75%),
<tt>DET --[<tt><a href="cop_bohairic-dep-appos.html">appos</a></tt>]--> DET</tt> (1; 100%),
<tt>DET --[<tt><a href="cop_bohairic-dep-dislocated.html">dislocated</a></tt>]--> DET</tt> (1; 100%),
<tt>DET --[<tt><a href="cop_bohairic-dep-nmod-poss.html">nmod:poss</a></tt>]--> DET</tt> (1; 100%),
<tt>DET --[<tt><a href="cop_bohairic-dep-vocative.html">vocative</a></tt>]--> PRON</tt> (1; 100%).

