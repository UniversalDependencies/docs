---
layout: base
title:  'Statistics of Gender in UD_Coptic-Scriptorium'
udver: '2'
---

## Treebank Statistics: UD_Coptic-Scriptorium: Features: `Gender`

This feature is universal.
It occurs with 2 different values: `Fem`, `Masc`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: <tt><a href="cop_scriptorium-feat-Gender.html">Gender</a></tt>, <tt><a href="cop_scriptorium-feat-Gender-psor.html">Gender[psor]</a></tt>.

5280 tokens (12%) have a non-empty value of `Gender`.
55 types (2%) occur at least once with a non-empty value of `Gender`.
33 lemmas (1%) occur at least once with a non-empty value of `Gender`.
The feature is used with 2 part-of-speech tags: <tt><a href="cop_scriptorium-pos-DET.html">DET</a></tt> (2700; 6% instances), <tt><a href="cop_scriptorium-pos-PRON.html">PRON</a></tt> (2580; 6% instances).

### `DET`

2700 <tt><a href="cop_scriptorium-pos-DET.html">DET</a></tt> tokens (49% of all `DET` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `DET` and `Gender` co-occurred: <tt><a href="cop_scriptorium-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (2700; 100%), <tt><a href="cop_scriptorium-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2700; 100%), <tt><a href="cop_scriptorium-feat-Number-psor.html">Number[psor]</a></tt><tt>=EMPTY</tt> (2182; 81%), <tt><a href="cop_scriptorium-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (2182; 81%), <tt><a href="cop_scriptorium-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (2160; 80%), <tt><a href="cop_scriptorium-feat-PronType.html">PronType</a></tt><tt>=Art</tt> (1933; 72%).

`DET` tokens may have the following values of `Gender`:

* `Fem` (715; 26% of non-empty `Gender`): ⲧ, ⲧⲉ, ⲧⲉⲓ, ⲧⲉϥ, ⲧⲁ, ⲧⲉⲩ, ⲧⲁⲓ, ⲧⲉⲕ, ⲧⲟⲩ, ⲧⲉⲥ
* `Masc` (1985; 74% of non-empty `Gender`): ⲡ, ⲡⲉ, ⲡⲁ, ⲡⲉϥ, ⲡⲁⲓ, ⲡⲉⲕ, ⲡⲉⲛ, ⲡⲉⲓ, ⲡⲉⲩ, ⲡⲓ
* `EMPTY` (2779): ⲛ, ⲟⲩ, ⲡ, ϩⲉⲛ, ⲛⲉ, ⲧ, ⲛⲉϥ, ⲛⲁⲓ, ⲩ, ⲕⲉ

<table>
  <tr><th>Paradigm <i>ⲡ</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt></tt></td><td>ⲡ, ⲡⲉ, ⲛ</td><td>ⲧ, ⲧⲉ</td></tr>
</table>

### `PRON`

2580 <tt><a href="cop_scriptorium-pos-PRON.html">PRON</a></tt> tokens (37% of all `PRON` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PRON` and `Gender` co-occurred: <tt><a href="cop_scriptorium-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2580; 100%), <tt><a href="cop_scriptorium-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (2371; 92%), <tt><a href="cop_scriptorium-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (2371; 92%), <tt><a href="cop_scriptorium-feat-Person.html">Person</a></tt><tt>=3</tt> (2014; 78%).

`PRON` tokens may have the following values of `Gender`:

* `Fem` (488; 19% of non-empty `Gender`): ⲥ, ⲧⲉ, ⲉ, ⲉⲣⲟ, ⲁⲣ, ⲛⲉⲣ, ⲙⲙⲟ, ⲛⲧⲟⲥ, ⲉⲣ, ⲉⲣⲉ
* `Masc` (2092; 81% of non-empty `Gender`): ϥ, ⲕ, ⲡⲉ, ⲛⲧⲟϥ, ⲅ, ⲡ, ⲛⲧⲟⲕ, ⲉϥϣⲁⲛ, ⲉϥⲉ, ⲉⲕϣⲁⲛ
* `EMPTY` (4339): ⲩ, ϥ, ⲟⲩ, ⲓ, ⲛ, ⲕ, ⲧⲛ, ⲧⲉⲧⲛ, ⲛⲓⲙ, ⲥⲉ

<table>
  <tr><th>Paradigm <i>ⲡⲉ</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt></tt></td><td>ⲡⲉ, ⲡ</td><td>ⲧⲉ, ⲧ</td></tr>
</table>

`Gender` seems to be **lexical feature** of `PRON`. 95% lemmas (20) occur only with one value of `Gender`.

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>DET --[<tt><a href="cop_scriptorium-dep-cop.html">cop</a></tt>]--> PRON</tt> (36; 95%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-conj.html">conj</a></tt>]--> DET</tt> (4; 80%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-nmod.html">nmod</a></tt>]--> DET</tt> (4; 100%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-appos.html">appos</a></tt>]--> DET</tt> (3; 75%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-nsubj.html">nsubj</a></tt>]--> DET</tt> (3; 100%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-obl-npmod.html">obl:npmod</a></tt>]--> PRON</tt> (2; 100%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-parataxis.html">parataxis</a></tt>]--> DET</tt> (2; 67%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-dislocated.html">dislocated</a></tt>]--> DET</tt> (1; 100%).

