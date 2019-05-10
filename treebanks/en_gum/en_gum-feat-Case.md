---
layout: base
title:  'Statistics of Case in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `Case`

This feature is universal.
It occurs with 2 different values: `Acc`, `Nom`.

3862 tokens (4%) have a non-empty value of `Case`.
26 types (0%) occur at least once with a non-empty value of `Case`.
18 lemmas (0%) occur at least once with a non-empty value of `Case`.
The feature is used with 2 part-of-speech tags: <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (3861; 4% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt> (1; 0% instances).

### `PRON`

3861 <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> tokens (58% of all `PRON` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PRON` and `Case` co-occurred: <tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (3861; 100%), <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (3861; 100%), <tt><a href="en_gum-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (2364; 61%), <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2213; 57%), <tt><a href="en_gum-feat-Person.html">Person</a></tt><tt>=3</tt> (1966; 51%).

`PRON` tokens may have the following values of `Case`:

* `Acc` (759; 20% of non-empty `Case`): <em>it, them, me, him, her, you, us, yourself, himself, themselves</em>
* `Nom` (3102; 80% of non-empty `Case`): <em>you, it, i, he, we, they, she</em>
* `EMPTY` (2828): <em>that, his, your, which, there, my, their, this, what, its</em>

<table>
  <tr><th>Paradigm <i>you</i></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th></tr>
  <tr><td><tt></tt></td><td><em>you</em></td><td><em>you</em></td></tr>
</table>

### `DET`

1 <tt><a href="en_gum-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `DET` and `Case` co-occurred: <tt><a href="en_gum-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (1; 100%).

`DET` tokens may have the following values of `Case`:

* `Nom` (1; 100% of non-empty `Case`): <em>you</em>
* `EMPTY` (8225): <em>the, a, an, this, some, these, no, all, that, any</em>

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`:
<tt>PRON --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> PRON</tt> (8; 100%).

