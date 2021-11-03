---
layout: base
title:  'Statistics of Gender in UD_Coptic-Scriptorium'
udver: '2'
---

## Treebank Statistics: UD_Coptic-Scriptorium: Features: `Gender`

This feature is universal.
It occurs with 2 different values: `Fem`, `Masc`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: <tt><a href="cop_scriptorium-feat-Gender.html">Gender</a></tt>, <tt><a href="cop_scriptorium-feat-Gender-psor.html">Gender[psor]</a></tt>.

8880 tokens (17%) have a non-empty value of `Gender`.
68 types (2%) occur at least once with a non-empty value of `Gender`.
42 lemmas (2%) occur at least once with a non-empty value of `Gender`.
The feature is used with 2 part-of-speech tags: <tt><a href="cop_scriptorium-pos-PRON.html">PRON</a></tt> (4492; 9% instances), <tt><a href="cop_scriptorium-pos-DET.html">DET</a></tt> (4388; 8% instances).

### `PRON`

4492 <tt><a href="cop_scriptorium-pos-PRON.html">PRON</a></tt> tokens (53% of all `PRON` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PRON` and `Gender` co-occurred: <tt><a href="cop_scriptorium-feat-Number.html">Number</a></tt><tt>=Sing</tt> (4492; 100%), <tt><a href="cop_scriptorium-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (4102; 91%), <tt><a href="cop_scriptorium-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (4102; 91%), <tt><a href="cop_scriptorium-feat-Person.html">Person</a></tt><tt>=3</tt> (3356; 75%).

`PRON` tokens may have the following values of `Gender`:

* `Fem` (984; 22% of non-empty `Gender`): ⲥ, ⲧⲉ, ⲉ, ⲛⲧⲟⲥ, ⲉⲣⲟ, ⲁ, ⲛⲧⲟ, ⲁⲣ, ⲙⲙⲟ, ⲣ
* `Masc` (3508; 78% of non-empty `Gender`): ϥ, ⲕ, ⲡⲉ, ⲅ, ⲛⲧⲟϥ, ⲡ, ⲛⲧⲟⲕ, ⲉϥϣⲁⲛ, ⲉϥⲉ, ⲉⲕϣⲁⲛ
* `EMPTY` (4019): ⲩ, ⲟⲩ, ⲓ, ⲛ, ⲧⲛ, ⲧⲉⲧⲛ, ⲛⲓⲙ, ⲥⲉ, ϥ, ϯ

<table>
  <tr><th>Paradigm <i>ⲡⲉ</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt></tt></td><td>ⲡⲉ, ⲡ</td><td>ⲧⲉ, ⲧ</td></tr>
</table>

`Gender` seems to be **lexical feature** of `PRON`. 96% lemmas (24) occur only with one value of `Gender`.

### `DET`

4388 <tt><a href="cop_scriptorium-pos-DET.html">DET</a></tt> tokens (65% of all `DET` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `DET` and `Gender` co-occurred: <tt><a href="cop_scriptorium-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (4388; 100%), <tt><a href="cop_scriptorium-feat-Number.html">Number</a></tt><tt>=Sing</tt> (4388; 100%), <tt><a href="cop_scriptorium-feat-Number-psor.html">Number[psor]</a></tt><tt>=EMPTY</tt> (3563; 81%), <tt><a href="cop_scriptorium-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (3563; 81%), <tt><a href="cop_scriptorium-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (3536; 81%), <tt><a href="cop_scriptorium-feat-PronType.html">PronType</a></tt><tt>=Art</tt> (3161; 72%).

`DET` tokens may have the following values of `Gender`:

* `Fem` (1183; 27% of non-empty `Gender`): ⲧ, ⲧⲉ, ⲧⲉⲓ, ⲧⲉϥ, ⲧⲁ, ⲧⲉⲕ, ⲧⲁⲓ, ⲧⲉⲩ, ⲧⲉⲥ, ⲧⲟⲩ
* `Masc` (3205; 73% of non-empty `Gender`): ⲡ, ⲡⲉ, ⲡⲉϥ, ⲡⲁ, ⲡⲁⲓ, ⲡⲉⲓ, ⲡⲉⲕ, ⲡⲉⲛ, ⲡⲉⲩ, ⲡⲟⲩ
* `EMPTY` (2331): ⲛ, ⲟⲩ, ϩⲉⲛ, ⲛⲉ, ⲛⲉϥ, ⲛⲁⲓ, ⲩ, ⲕⲉ, ⲛⲁ, ⲙ

<table>
  <tr><th>Paradigm <i>ⲡ</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt></tt></td><td>ⲡ, ⲡⲉ</td><td>ⲧ, ⲧⲉ</td></tr>
</table>

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>DET --[<tt><a href="cop_scriptorium-dep-cop.html">cop</a></tt>]--> PRON</tt> (65; 100%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-conj.html">conj</a></tt>]--> DET</tt> (7; 88%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-acl.html">acl</a></tt>]--> DET</tt> (5; 71%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-appos.html">appos</a></tt>]--> DET</tt> (4; 80%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-parataxis.html">parataxis</a></tt>]--> DET</tt> (4; 80%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-nmod.html">nmod</a></tt>]--> DET</tt> (3; 100%),
<tt>PRON --[<tt><a href="cop_scriptorium-dep-dislocated.html">dislocated</a></tt>]--> DET</tt> (3; 60%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-nsubj.html">nsubj</a></tt>]--> DET</tt> (2; 100%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-obl-npmod.html">obl:npmod</a></tt>]--> PRON</tt> (2; 100%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-dislocated.html">dislocated</a></tt>]--> DET</tt> (1; 100%).

