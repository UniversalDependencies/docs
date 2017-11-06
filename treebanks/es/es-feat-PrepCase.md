---
layout: base
title:  'Statistics of PrepCase in UD_Spanish'
udver: '2'
---

## Treebank Statistics: UD_Spanish: Features: `PrepCase`

This feature is language-specific.
It occurs with 2 different values: `Npr`, `Pre`.

8289 tokens (2%) have a non-empty value of `PrepCase`.
25 types (0%) occur at least once with a non-empty value of `PrepCase`.
4 lemmas (0%) occur at least once with a non-empty value of `PrepCase`.
The feature is used with 2 part-of-speech tags: <tt><a href="es-pos-PRON.html">PRON</a></tt> (8287; 2% instances), <tt><a href="es-pos-DET.html">DET</a></tt> (2; 0% instances).

### `PRON`

8287 <tt><a href="es-pos-PRON.html">PRON</a></tt> tokens (59% of all `PRON` tokens) have a non-empty value of `PrepCase`.

The most frequent other feature values with which `PRON` and `PrepCase` co-occurred: <tt><a href="es-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (8257; 100%), <tt><a href="es-feat-Person.html">Person</a></tt><tt>=3</tt> (7456; 90%), <tt><a href="es-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (6107; 74%), <tt><a href="es-feat-Case.html">Case</a></tt><tt>=Acc,Dat</tt> (6068; 73%), <tt><a href="es-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt> (5390; 65%), <tt><a href="es-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (5291; 64%).

`PRON` tokens may have the following values of `PrepCase`:

* `Npr` (8233; 99% of non-empty `PrepCase`): <em>se, lo, la, me, los, nos, te, las, os</em>
* `Pre` (54; 1% of non-empty `PrepCase`): <em>sí, mí, ti</em>

<table>
  <tr><th>Paradigm <i>él</i></th><th><tt>Npr</tt></th><th><tt>Pre</tt></th></tr>
  <tr><td><tt><tt><a href="es-feat-Case.html">Case</a></tt><tt>=Acc,Dat</tt>|<tt><a href="es-feat-PronType.html">PronType</a></tt><tt>=Prs</tt>|<tt><a href="es-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt></tt></td><td><em>se</em></td><td></td></tr>
  <tr><td><tt><tt><a href="es-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="es-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="es-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="es-feat-PronType.html">PronType</a></tt><tt>=Prs</tt></tt></td><td><em>lo</em></td><td></td></tr>
  <tr><td><tt><tt><a href="es-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="es-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="es-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="es-feat-PronType.html">PronType</a></tt><tt>=Prs</tt></tt></td><td><em>los</em></td><td></td></tr>
  <tr><td><tt><tt><a href="es-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="es-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="es-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="es-feat-PronType.html">PronType</a></tt><tt>=Prs</tt></tt></td><td><em>la</em></td><td></td></tr>
  <tr><td><tt><tt><a href="es-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="es-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="es-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="es-feat-PronType.html">PronType</a></tt><tt>=Prs</tt></tt></td><td><em>las</em></td><td></td></tr>
  <tr><td><tt><tt><a href="es-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="es-feat-PronType.html">PronType</a></tt><tt>=Ind</tt>|<tt><a href="es-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>sí</em></td></tr>
</table>

### `DET`

2 <tt><a href="es-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `PrepCase`.

The most frequent other feature values with which `DET` and `PrepCase` co-occurred: <tt><a href="es-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (2; 100%), <tt><a href="es-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (2; 100%).

`DET` tokens may have the following values of `PrepCase`:

* `Npr` (2; 100% of non-empty `PrepCase`): <em>Lo, os</em>

## Relations with Agreement in `PrepCase`

The 10 most frequent relations where parent and child node agree in `PrepCase`:
<tt>PRON --[<tt><a href="es-dep-conj.html">conj</a></tt>]--> PRON</tt> (8; 67%),
<tt>PRON --[<tt><a href="es-dep-dep.html">dep</a></tt>]--> PRON</tt> (1; 100%).

