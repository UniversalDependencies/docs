---
layout: base
title:  'Statistics of Number in UD_Coptic-Scriptorium'
udver: '2'
---

## Treebank Statistics: UD_Coptic-Scriptorium: Features: `Number`

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: <tt><a href="cop_scriptorium-feat-Number.html">Number</a></tt>, <tt><a href="cop_scriptorium-feat-Number-psor.html">Number[psor]</a></tt>.

5922 tokens (27%) have a non-empty value of `Number`.
91 types (5%) occur at least once with a non-empty value of `Number`.
46 lemmas (3%) occur at least once with a non-empty value of `Number`.
The feature is used with 2 part-of-speech tags: <tt><a href="cop_scriptorium-pos-PRON.html">PRON</a></tt> (3181; 14% instances), <tt><a href="cop_scriptorium-pos-DET.html">DET</a></tt> (2741; 12% instances).

### `PRON`

3181 <tt><a href="cop_scriptorium-pos-PRON.html">PRON</a></tt> tokens (91% of all `PRON` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PRON` and `Number` co-occurred: <tt><a href="cop_scriptorium-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (2992; 94%), <tt><a href="cop_scriptorium-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (2992; 94%), <tt><a href="cop_scriptorium-feat-Person.html">Person</a></tt><tt>=3</tt> (2123; 67%).

`PRON` tokens may have the following values of `Number`:

* `Plur` (1228; 39% of non-empty `Number`): ⲩ, ⲟⲩ, ⲧⲛ, ⲧⲉⲧⲛ, ⲛ, ⲥⲉ, ⲛⲉ, ⲧⲏⲩⲧⲛ, ⲛⲧⲱⲧⲛ, ⲉⲩⲉ
* `Sing` (1953; 61% of non-empty `Number`): ϥ, ⲥ, ⲕ, ⲡⲉ, ⲓ, ϯ, ⲧⲉ, ⲁⲛⲟⲕ, ⲛⲧⲟϥ, ⲉ
* `EMPTY` (320): ⲟⲩ, ⲛⲓⲙ, ϥ, ⲛ, ⲁϣ, ⲥ, ⲕ, ⲧⲛ, ⲩ, ⲧⲱⲛ

<table>
  <tr><th>Paradigm <i>ⲡⲉ</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td>ⲛⲉ, ⲛ</td></tr>
  <tr><td><tt><tt><a href="cop_scriptorium-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td>ⲡⲉ, ⲡ</td><td></td></tr>
  <tr><td><tt><tt><a href="cop_scriptorium-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td>ⲧⲉ</td><td></td></tr>
</table>

`Number` seems to be **lexical feature** of `PRON`. 94% lemmas (31) occur only with one value of `Number`.

### `DET`

2741 <tt><a href="cop_scriptorium-pos-DET.html">DET</a></tt> tokens (95% of all `DET` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `DET` and `Number` co-occurred: <tt><a href="cop_scriptorium-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (2337; 85%), <tt><a href="cop_scriptorium-feat-Number-psor.html">Number[psor]</a></tt><tt>=EMPTY</tt> (2281; 83%), <tt><a href="cop_scriptorium-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (2281; 83%), <tt><a href="cop_scriptorium-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (2281; 83%), <tt><a href="cop_scriptorium-feat-PronType.html">PronType</a></tt><tt>=Art</tt> (2081; 76%).

`DET` tokens may have the following values of `Number`:

* `Plur` (594; 22% of non-empty `Number`): ⲛ, ⲛⲉ, ⲛⲉϥ, ⲛⲉⲩ, ⲛⲁⲓ, ⲛⲉⲧⲛ, ⲛⲉⲕ, ⲛⲁ, ⲛⲓ, ⲛⲉⲛ
* `Sing` (2147; 78% of non-empty `Number`): ⲡ, ⲧ, ⲟⲩ, ⲡⲉ, ϩⲉⲛ, ⲡⲉϥ, ⲧⲉ, ⲡⲁⲓ, ⲩ, ⲡⲉⲛ
* `EMPTY` (132): ⲕⲉ, ⲙ, ⲛⲁ, ϭⲉ, ⲡⲁ, ⲛ, ⲧ, ⲡⲱⲧⲛ, ϩⲛ, ϯ

<table>
  <tr><th>Paradigm <i>ⲡ</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="cop_scriptorium-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td>ⲡ, ⲡⲉ</td><td></td></tr>
  <tr><td><tt><tt><a href="cop_scriptorium-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td>ⲧ, ⲧⲉ</td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td>ⲛ, ⲛⲉ</td></tr>
</table>

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>DET --[<tt><a href="cop_scriptorium-dep-cop.html">cop</a></tt>]--> PRON</tt> (31; 76%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-conj.html">conj</a></tt>]--> DET</tt> (11; 92%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-appos.html">appos</a></tt>]--> DET</tt> (7; 88%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-acl.html">acl</a></tt>]--> DET</tt> (2; 67%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-advmod.html">advmod</a></tt>]--> PRON</tt> (2; 100%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-nsubj.html">nsubj</a></tt>]--> DET</tt> (2; 67%),
<tt>PRON --[<tt><a href="cop_scriptorium-dep-advmod.html">advmod</a></tt>]--> PRON</tt> (2; 100%),
<tt>PRON --[<tt><a href="cop_scriptorium-dep-appos.html">appos</a></tt>]--> PRON</tt> (2; 100%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-dislocated.html">dislocated</a></tt>]--> DET</tt> (1; 100%),
<tt>PRON --[<tt><a href="cop_scriptorium-dep-appos.html">appos</a></tt>]--> DET</tt> (1; 100%).

