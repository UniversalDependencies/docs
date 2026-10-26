---
layout: base
title:  'Statistics of PronType in UD_Persian-PerDT'
udver: '2'
---

## Treebank Statistics: UD_Persian-PerDT: Features: `PronType`

This feature is universal but the values `Exc` are language-specific.
It occurs with 4 different values: `Dem`, `Exc`, `Int`, `Prs`.

24120 tokens (5%) have a non-empty value of `PronType`.
82 types (0%) occur at least once with a non-empty value of `PronType`.
55 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: <tt><a href="fa_perdt-pos-PRON.html">PRON</a></tt> (16853; 3% instances), <tt><a href="fa_perdt-pos-DET.html">DET</a></tt> (7267; 1% instances).

### `PRON`

16853 <tt><a href="fa_perdt-pos-PRON.html">PRON</a></tt> tokens (70% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="fa_perdt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (10006; 59%).

`PRON` tokens may have the following values of `PronType`:

* `Prs` (16853; 100% of non-empty `PronType`): او، ش، ما، من، م، شما، آنها، تو، شان، خود
* `EMPTY` (7287): خود، آن، این، هم، آنها، خویش، یکدیگر، کجا، همین، چه

`PronType` seems to be **lexical feature** of `PRON`. 100% lemmas (38) occur only with one value of `PronType`.

### `DET`

7267 <tt><a href="fa_perdt-pos-DET.html">DET</a></tt> tokens (70% of all `DET` tokens) have a non-empty value of `PronType`.

`DET` tokens may have the following values of `PronType`:

* `Dem` (6760; 93% of non-empty `PronType`): این، آن، همان، همین، چنین، ین، چنان، ان، هر، ابن
* `Exc` (41; 1% of non-empty `PronType`): چه، عجب، چقدر
* `Int` (466; 6% of non-empty `PronType`): چه، کدام، چند، کدامین، چگونه، چقدر، چنان
* `EMPTY` (3171): هر، هیچ، چند، برخی، همه، چندین، بعضی، هزاران، مقداری، کمی

<table>
  <tr><th>Paradigm <i>چه</i></th><th><tt>Int</tt></th><th><tt>Exc</tt></th></tr>
  <tr><td><tt></tt></td><td>چه</td><td>چه</td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="fa_perdt-dep-nmod.html">nmod</a></tt>]--> PRON</tt> (626; 92%),
<tt>PRON --[<tt><a href="fa_perdt-dep-conj.html">conj</a></tt>]--> PRON</tt> (28; 97%),
<tt>PRON --[<tt><a href="fa_perdt-dep-appos.html">appos</a></tt>]--> PRON</tt> (13; 68%),
<tt>DET --[<tt><a href="fa_perdt-dep-nmod.html">nmod</a></tt>]--> DET</tt> (1; 100%),
<tt>DET --[<tt><a href="fa_perdt-dep-obl.html">obl</a></tt>]--> DET</tt> (1; 100%).

