---
layout: base
title:  'Statistics of Number in UD_Tagalog-TRG'
udver: '2'
---

## Treebank Statistics: UD_Tagalog-TRG: Features: `Number`

This feature is universal.
It occurs with 4 different values: `Coll`, `Dual`, `Plur`, `Sing`.

92 tokens (32%) have a non-empty value of `Number`.
47 types (47%) occur at least once with a non-empty value of `Number`.
42 lemmas (50%) occur at least once with a non-empty value of `Number`.
The feature is used with 4 part-of-speech tags: <tt><a href="tl_trg-pos-NOUN.html">NOUN</a></tt> (79; 27% instances), <tt><a href="tl_trg-pos-PRON.html">PRON</a></tt> (9; 3% instances), <tt><a href="tl_trg-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="tl_trg-pos-PROPN.html">PROPN</a></tt> (2; 1% instances).

### `NOUN`

79 <tt><a href="tl_trg-pos-NOUN.html">NOUN</a></tt> tokens (93% of all `NOUN` tokens) have a non-empty value of `Number`.

`NOUN` tokens may have the following values of `Number`:

* `Coll` (13; 16% of non-empty `Number`): <em>pagkain, alon, gulayan, ingay</em>
* `Plur` (1; 1% of non-empty `Number`): <em>araw</em>
* `Sing` (65; 82% of non-empty `Number`): <em>nanay, titser, babae, bahay, bangka, bata, Artista, Isda, istudyante, diyaryo</em>
* `EMPTY` (6): <em>Biyuda, Biyudo, Mansanas, bunso, maestra, maestro</em>

<table>
  <tr><th>Paradigm <i>pagkain</i></th><th><tt>Sing</tt></th><th><tt>Coll</tt></th></tr>
  <tr><td><tt></tt></td><td><em>pagkain</em></td><td><em>pagkain</em></td></tr>
</table>

`Number` seems to be **lexical feature** of `NOUN`. 97% lemmas (36) occur only with one value of `Number`.

### `PRON`

9 <tt><a href="tl_trg-pos-PRON.html">PRON</a></tt> tokens (69% of all `PRON` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PRON` and `Number` co-occurred: <tt><a href="tl_trg-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (9; 100%), <tt><a href="tl_trg-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (6; 67%), <tt><a href="tl_trg-feat-Person.html">Person</a></tt><tt>=1</tt> (5; 56%).

`PRON` tokens may have the following values of `Number`:

* `Dual` (1; 11% of non-empty `Number`): <em>kita</em>
* `Sing` (8; 89% of non-empty `Number`): <em>ko, ako, Iyan, Siya, ito</em>
* `EMPTY` (4): <em>niya</em>

<table>
  <tr><th>Paradigm <i>ang</i></th><th><tt>Sing</tt></th><th><tt>Dual</tt></th></tr>
  <tr><td><tt><tt><a href="tl_trg-feat-Case.html">Case</a></tt><tt>=Abs</tt></tt></td><td></td><td><em>kita</em></td></tr>
  <tr><td><tt><tt><a href="tl_trg-feat-Case.html">Case</a></tt><tt>=Abs</tt>|<tt><a href="tl_trg-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>ako</em></td><td></td></tr>
  <tr><td><tt><tt><a href="tl_trg-feat-Case.html">Case</a></tt><tt>=Abs</tt>|<tt><a href="tl_trg-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="tl_trg-feat-PronType.html">PronType</a></tt><tt>=Prs</tt></tt></td><td><em>Siya</em></td><td></td></tr>
  <tr><td><tt><tt><a href="tl_trg-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td><em>Iyan, ito</em></td><td></td></tr>
</table>

### `DET`

2 <tt><a href="tl_trg-pos-DET.html">DET</a></tt> tokens (4% of all `DET` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `DET` and `Number` co-occurred: <tt><a href="tl_trg-feat-Case.html">Case</a></tt><tt>=Abs</tt> (2; 100%), <tt><a href="tl_trg-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (2; 100%).

`DET` tokens may have the following values of `Number`:

* `Sing` (2; 100% of non-empty `Number`): <em>si</em>
* `EMPTY` (51): <em>ang</em>

### `PROPN`

2 <tt><a href="tl_trg-pos-PROPN.html">PROPN</a></tt> tokens (67% of all `PROPN` tokens) have a non-empty value of `Number`.

`PROPN` tokens may have the following values of `Number`:

* `Sing` (2; 100% of non-empty `Number`): <em>Juan, Linda</em>
* `EMPTY` (1): <em>Maynila</em>

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>NOUN --[<tt><a href="tl_trg-dep-nsubj.html">nsubj</a></tt>]--> NOUN</tt> (9; 90%),
<tt>PROPN --[<tt><a href="tl_trg-dep-det.html">det</a></tt>]--> DET</tt> (2; 100%),
<tt>PRON --[<tt><a href="tl_trg-dep-nsubj.html">nsubj</a></tt>]--> NOUN</tt> (1; 100%),
<tt>PRON --[<tt><a href="tl_trg-dep-obj.html">obj</a></tt>]--> NOUN</tt> (1; 100%).

