---
layout: base
title:  'Statistics of Number in UD_Coptic-Scriptorium'
udver: '2'
---

## Treebank Statistics: UD_Coptic-Scriptorium: Features: `Number`

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: <tt><a href="cop_scriptorium-feat-Number.html">Number</a></tt>, <tt><a href="cop_scriptorium-feat-Number-psor.html">Number[psor]</a></tt>.

8964 tokens (21%) have a non-empty value of `Number`.
98 types (4%) occur at least once with a non-empty value of `Number`.
55 lemmas (2%) occur at least once with a non-empty value of `Number`.
The feature is used with 2 part-of-speech tags: <tt><a href="cop_scriptorium-pos-PRON.html">PRON</a></tt> (4802; 11% instances), <tt><a href="cop_scriptorium-pos-DET.html">DET</a></tt> (4162; 10% instances).

### `PRON`

4802 <tt><a href="cop_scriptorium-pos-PRON.html">PRON</a></tt> tokens (69% of all `PRON` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PRON` and `Number` co-occurred: <tt><a href="cop_scriptorium-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (4545; 95%), <tt><a href="cop_scriptorium-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (4545; 95%), <tt><a href="cop_scriptorium-feat-Person.html">Person</a></tt><tt>=3</tt> (3173; 66%).

`PRON` tokens may have the following values of `Number`:

* `Plur` (1837; 38% of non-empty `Number`): ⲩ, ⲟⲩ, ⲛ, ⲧⲛ, ⲧⲉⲧⲛ, ⲥⲉ, ⲛⲉ, ⲧⲏⲩⲧⲛ, ⲉⲩⲉ, ⲛⲧⲱⲧⲛ
* `Sing` (2965; 62% of non-empty `Number`): ϥ, ⲥ, ⲓ, ⲕ, ⲡⲉ, ϯ, ⲧⲉ, ⲛⲧⲟϥ, ⲁⲛⲟⲕ, ⲅ
* `EMPTY` (2117): ϥ, ⲓ, ⲕ, ⲟⲩ, ⲛⲓⲙ, ⲥ, ⲩ, ⲛ, ⲧⲛ, ⲡⲉ

<table>
  <tr><th>Paradigm <i>ⲡⲉ</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td>ⲛⲉ, ⲛ</td></tr>
  <tr><td><tt><tt><a href="cop_scriptorium-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td>ⲡⲉ, ⲡ</td><td></td></tr>
  <tr><td><tt><tt><a href="cop_scriptorium-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td>ⲧⲉ, ⲧ</td><td></td></tr>
</table>

`Number` seems to be **lexical feature** of `PRON`. 95% lemmas (36) occur only with one value of `Number`.

### `DET`

4162 <tt><a href="cop_scriptorium-pos-DET.html">DET</a></tt> tokens (76% of all `DET` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `DET` and `Number` co-occurred: <tt><a href="cop_scriptorium-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (3608; 87%), <tt><a href="cop_scriptorium-feat-Number-psor.html">Number[psor]</a></tt><tt>=EMPTY</tt> (3386; 81%), <tt><a href="cop_scriptorium-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (3386; 81%), <tt><a href="cop_scriptorium-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (3350; 80%), <tt><a href="cop_scriptorium-feat-PronType.html">PronType</a></tt><tt>=Art</tt> (3034; 73%).

`DET` tokens may have the following values of `Number`:

* `Plur` (908; 22% of non-empty `Number`): ⲛ, ⲛⲉ, ⲛⲉϥ, ⲛⲁⲓ, ⲛⲁ, ⲛⲉⲩ, ⲛⲉⲛ, ⲛⲉⲧⲛ, ⲛⲉⲕ, ⲛⲓ
* `Sing` (3254; 78% of non-empty `Number`): ⲡ, ⲧ, ⲟⲩ, ⲡⲉ, ϩⲉⲛ, ⲡⲁ, ⲡⲉϥ, ⲧⲉ, ⲡⲁⲓ, ⲧⲉⲓ
* `EMPTY` (1317): ⲡ, ⲟⲩ, ⲧ, ⲛ, ⲕⲉ, ⲡⲉ, ⲙ, ⲡⲉϥ, ⲩ, ⲛⲉ

<table>
  <tr><th>Paradigm <i>ⲡ</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="cop_scriptorium-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td>ⲡ, ⲡⲉ, ⲛ</td><td></td></tr>
  <tr><td><tt><tt><a href="cop_scriptorium-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td>ⲧ, ⲧⲉ</td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td>ⲛ, ⲛⲉ</td></tr>
</table>

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>DET --[<tt><a href="cop_scriptorium-dep-cop.html">cop</a></tt>]--> PRON</tt> (49; 94%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-conj.html">conj</a></tt>]--> DET</tt> (14; 93%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-appos.html">appos</a></tt>]--> DET</tt> (8; 89%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (8; 80%),
<tt>PRON --[<tt><a href="cop_scriptorium-dep-dislocated.html">dislocated</a></tt>]--> DET</tt> (7; 100%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-acl.html">acl</a></tt>]--> PRON</tt> (6; 55%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-dislocated.html">dislocated</a></tt>]--> PRON</tt> (5; 100%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-nmod.html">nmod</a></tt>]--> DET</tt> (4; 100%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-nsubj.html">nsubj</a></tt>]--> DET</tt> (4; 100%),
<tt>DET --[<tt><a href="cop_scriptorium-dep-acl.html">acl</a></tt>]--> DET</tt> (3; 100%).

