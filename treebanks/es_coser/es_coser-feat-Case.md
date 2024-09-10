---
layout: base
title:  'Statistics of Case in UD_Spanish-COSER'
udver: '2'
---

## Treebank Statistics: UD_Spanish-COSER: Features: `Case`

This feature is universal.
It occurs with 3 different values: `Acc`, `Dat`, `Nom`.
Some words have combined values of the feature; 2 combinations have been observed: `Acc|Dat`, `Acc|Nom`.

560 tokens (7%) have a non-empty value of `Case`.
40 types (3%) occur at least once with a non-empty value of `Case`.
5 lemmas (0%) occur at least once with a non-empty value of `Case`.
The feature is used with 1 part-of-speech tags: <tt><a href="es_coser-pos-PRON.html">PRON</a></tt> (560; 7% instances).

### `PRON`

560 <tt><a href="es_coser-pos-PRON.html">PRON</a></tt> tokens (62% of all `PRON` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PRON` and `Case` co-occurred: <tt><a href="es_coser-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (560; 100%), <tt><a href="es_coser-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (402; 72%), <tt><a href="es_coser-feat-PrepCase.html">PrepCase</a></tt><tt>=Npr</tt> (376; 67%), <tt><a href="es_coser-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (373; 67%), <tt><a href="es_coser-feat-Person.html">Person</a></tt><tt>=3</tt> (363; 65%), <tt><a href="es_coser-feat-Number.html">Number</a></tt><tt>=Sing</tt> (345; 62%).

`PRON` tokens may have the following values of `Case`:

* `Acc` (261; 47% of non-empty `Case`): <em>lo, se, los, la, las, me, te, mí, nos, m</em>
* `Acc,Dat` (60; 11% of non-empty `Case`): <em>se, me, nos, te, os, sos</em>
* `Acc,Nom` (48; 9% of non-empty `Case`): <em>usted, nosotros, él, ellas, ella, ello, ustedes, ellos, uste, usté</em>
* `Dat` (119; 21% of non-empty `Case`): <em>le, te, me, nos, les, se, mos</em>
* `Nom` (72; 13% of non-empty `Case`): <em>yo, tú</em>
* `EMPTY` (344): <em>que, eso, cómo, qué, todo, esto, todos, dónde, otro, algo</em>

<table>
  <tr><th>Paradigm <i>yo</i></th><th><tt>Acc,Dat</tt></th><th><tt>Acc,Nom</tt></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th><th><tt>Dat</tt></th></tr>
  <tr><td><tt><tt><a href="es_coser-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="es_coser-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>nosotros</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="es_coser-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>me</em></td><td></td><td><em>yo</em></td><td><em>mí, me</em></td><td><em>me</em></td></tr>
  <tr><td><tt><tt><a href="es_coser-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="es_coser-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt></tt></td><td><em>me</em></td><td></td><td></td><td><em>me, m</em></td><td><em>me</em></td></tr>
  <tr><td><tt><tt><a href="es_coser-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td></td><td></td><td><em>nos</em></td><td><em>nos</em></td></tr>
  <tr><td><tt><tt><a href="es_coser-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="es_coser-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt></tt></td><td><em>nos</em></td><td></td><td></td><td><em>nos</em></td><td><em>nos</em></td></tr>
</table>

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`:
<tt>PRON --[<tt><a href="es_coser-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (7; 78%).

