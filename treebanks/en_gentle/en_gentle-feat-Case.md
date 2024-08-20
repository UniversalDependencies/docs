---
layout: base
title:  'Statistics of Case in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Features: `Case`

This feature is universal.
It occurs with 3 different values: `Acc`, `Gen`, `Nom`.

933 tokens (5%) have a non-empty value of `Case`.
46 types (1%) occur at least once with a non-empty value of `Case`.
23 lemmas (1%) occur at least once with a non-empty value of `Case`.
The feature is used with 1 part-of-speech tags: <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (933; 5% instances).

### `PRON`

933 <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> tokens (79% of all `PRON` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PRON` and `Case` co-occurred: <tt><a href="en_gentle-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (933; 100%), <tt><a href="en_gentle-feat-Number.html">Number</a></tt><tt>=Sing</tt> (778; 83%), <tt><a href="en_gentle-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (700; 75%), <tt><a href="en_gentle-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (604; 65%).

`PRON` tokens may have the following values of `Case`:

* `Acc` (176; 19% of non-empty `Case`): <em>it, me, you, him, them, her, us, thee, yourself, himself</em>
* `Gen` (234; 25% of non-empty `Case`): <em>his, my, your, its, our, her, their, you</em>
* `Nom` (523; 56% of non-empty `Case`): <em>I, you, he, we, it, they, she, 't, him, Ii</em>
* `EMPTY` (255): <em>that, what, which, this, there, who, nothing, something, thy, whom</em>

<table>
  <tr><th>Paradigm <i>I</i></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th></tr>
  <tr><td><tt><tt><a href="en_gentle-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>I, me</em></td><td><em>me</em></td></tr>
  <tr><td><tt><tt><a href="en_gentle-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>PI</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gentle-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="en_gentle-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td><em>Ii</em></td><td></td></tr>
</table>

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`:
<tt>PRON --[<tt><a href="en_gentle-dep-conj.html">conj</a></tt>]--> PRON</tt> (3; 100%).

