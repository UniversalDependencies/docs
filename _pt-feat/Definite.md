---
layout: feature
title: 'Definite'
shortdef: 'definiteness or state'
---

This document is a placeholder for the language-specific documentation
for `Definite`.


--------------------------------------------------------------------------------

## Definite

## Treebank Statistics

This feature is universal.
It occurs with 2 different values: `Def`, `Ind`.

29486 tokens (14%) have a non-empty value of `Definite`.
15 types (0%) occur at least once with a non-empty value of `Definite`.
3 lemmas (0%) occur at least once with a non-empty value of `Definite`.
The feature is used with 2 part-of-speech tags: [pt-pos/DET]() (29213; 14% tokens), [pt-pos/PRON]() (273; 0% tokens).

### `DET`

29213 [pt-pos/DET]() tokens (88% of all `DET` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `DET` and `Definite` co-occurred: <tt><a href="PronType.html">PronType</a>=Art</tt> (29045; 99%), <tt><a href="Number.html">Number</a>=Sing</tt> (23584; 81%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (15694; 54%).

`DET` tokens may have the following values of `Definite`:

* `Def` (26125; 89% of non-empty `Definite`): _o, a, os, as, o(s)_
* `Ind` (3088; 11% of non-empty `Definite`): _um, uma, o_
* `EMPTY` (4007): _sua, seu, este, esta, seus, suas, esse, qualquer, outros, mais_

<table>
  <tr><th>Paradigm <i>o</i></th><th><tt>Ind</tt></th><th><tt>Def</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td></td><td><i>o(s)</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><i>o</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art</tt></td><td><i>o</i></td><td><i>o, a, Os</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art|<a href="Typo.html">Typo</a>=Yes</tt></td><td></td><td><i>os</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><i>os</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Art</tt></td><td></td><td><i>os, o</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><i>a</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art</tt></td><td></td><td><i>a, as</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art|<a href="Typo.html">Typo</a>=Yes</tt></td><td></td><td><i>a</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><i>as</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Art</tt></td><td></td><td><i>as</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art</tt></td><td></td><td><i>a, o</i></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Art</tt></td><td></td><td><i>as</i></td></tr>
  <tr><td><tt><a href="PronType.html">PronType</a>=Art</tt></td><td></td><td><i>a</i></td></tr>
</table>

### `PRON`

273 [pt-pos/PRON]() tokens (4% of all `PRON` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `PRON` and `Definite` co-occurred: <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (273; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (273; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (273; 100%), <tt><a href="PronType.html">PronType</a>=Art</tt> (244; 89%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (219; 80%), <tt><a href="Number.html">Number</a>=Sing</tt> (175; 64%).

`PRON` tokens may have the following values of `Definite`:

* `Def` (258; 95% of non-empty `Definite`): _o, os, a, as, O_que, um_
* `Ind` (15; 5% of non-empty `Definite`): _um, uma_
* `EMPTY` (6833): _que, se, ele, o, o_que, isso, quem, lhe, eles, eu_

<table>
  <tr><th>Paradigm <i>um</i></th><th><tt>Ind</tt></th><th><tt>Def</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><i>um</i></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="PronType.html">PronType</a>=Art</tt></td><td><i>um</i></td><td><i>um</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="PronType.html">PronType</a>=Art</tt></td><td><i>uma</i></td><td></td></tr>
</table>

## Relations with Agreement in `Definite`

The 10 most frequent relations where parent and child node agree in `Definite`: `DET --[conj]--> PRON` (2; 100%).

