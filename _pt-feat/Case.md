---
layout: feature
title: 'Case'
shortdef: 'case'
---

This document is a placeholder for the language-specific documentation
for `Case`.

--------------------------------------------------------------------------------

## Treebank Statistics

This feature is universal.
It occurs with 3 different values: `Acc`, `Dat`, `Nom`.
Some words have combined values of the feature; 2 combinations have been observed: `Acc|Dat`, `Acc|Nom`.

2726 tokens (1%) have a non-empty value of `Case`.
50 types (0%) occur at least once with a non-empty value of `Case`.
13 lemmas (0%) occur at least once with a non-empty value of `Case`.
The feature is used with 1 part-of-speech tags: [pt-pos/PRON]() (2726; 1% tokens).

### `PRON`

2726 [pt-pos/PRON]() tokens (38% of all `PRON` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PRON` and `Case` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (2721; 100%), <tt><a href="Person.html">Person</a>=3</tt> (2400; 88%), <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (1948; 71%), <tt><a href="Number.html">Number</a>=Sing</tt> (1730; 63%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (1456; 53%).

`PRON` tokens may have the following values of `Case`:

* `Acc` (1894; 69% of non-empty `Case`): _se, o, me, a, nos, lo, os, la, ele, eles_
* `Acc,Dat` (4; 0% of non-empty `Case`): _nos, se_
* `Acc,Nom` (71; 3% of non-empty `Case`): _ele, ela, eles, nós, elas, você_
* `Dat` (227; 8% of non-empty `Case`): _lhe, me, lhes, nos, se, lhe-, nos*, Ihe, me-, no_
* `Nom` (530; 19% of non-empty `Case`): _ele, eu, eles, ela, você, nós, elas, vocês, voce, vós_
* `EMPTY` (4380): _que, o, o_que, isso, quem, os, tudo, a, nada, isto_

<table>
  <tr><th>Paradigm <i>nós</i></th><th><tt>Acc,Dat</tt></th><th><tt>Acc,Nom</tt></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th><th><tt>Dat</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Person.html">Person</a>=1</tt></td><td></td><td><i>nós</i></td><td><i>nós</i></td><td><i>nos</i></td><td><i>nos</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Person.html">Person</a>=1|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td></td><td></td><td></td><td><i>nos</i></td><td><i>nos</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Person.html">Person</a>=3</tt></td><td></td><td></td><td></td><td><i>nos</i></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Person.html">Person</a>=1</tt></td><td></td><td><i>nós</i></td><td></td><td><i>nós</i></td><td></td></tr>
  <tr><td><tt><a href="Person.html">Person</a>=1</tt></td><td></td><td><i>nós</i></td><td><i>nós</i></td><td><i>nos, nós</i></td><td><i>nos, nos*</i></td></tr>
  <tr><td><tt><a href="Person.html">Person</a>=1|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td><i>nos</i></td><td></td><td></td><td><i>nos</i></td><td><i>nos, no</i></td></tr>
</table>

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`: `PRON --[conj]--> PRON` (5; 100%).

