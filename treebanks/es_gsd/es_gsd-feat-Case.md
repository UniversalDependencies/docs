---
layout: base
title:  'Statistics of Case in UD_Spanish-GSD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-GSD: Features: `Case`

This feature is universal.
It occurs with 4 different values: `Acc`, `Com`, `Dat`, `Nom`.
Some words have combined values of the feature; 2 combinations have been observed: `Acc|Dat`, `Acc|Nom`.

9976 tokens (2%) have a non-empty value of `Case`.
54 types (0%) occur at least once with a non-empty value of `Case`.
8 lemmas (0%) occur at least once with a non-empty value of `Case`.
The feature is used with 1 part-of-speech tags: <tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (9976; 2% instances).

### `PRON`

9976 <tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> tokens (71% of all `PRON` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PRON` and `Case` co-occurred: <tt><a href="es_gsd-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (9976; 100%), <tt><a href="es_gsd-feat-Person.html">Person</a></tt><tt>=3</tt> (8987; 90%), <tt><a href="es_gsd-feat-PrepCase.html">PrepCase</a></tt><tt>=Npr</tt> (8245; 83%), <tt><a href="es_gsd-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (7107; 71%), <tt><a href="es_gsd-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt> (5403; 54%), <tt><a href="es_gsd-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (5305; 53%).

`PRON` tokens may have the following values of `Case`:

* `Acc` (2227; 22% of non-empty `Case`): <em>lo, la, los, las, sí, mí, ti, se, Me, em</em>
* `Acc,Dat` (5526; 55% of non-empty `Case`): <em>se, me, nos, te, os</em>
* `Acc,Nom` (697; 7% of non-empty `Case`): <em>él, ellos, ella, ello, ellas, nosotros, usted, vosotros, ustedes</em>
* `Com` (8; 0% of non-empty `Case`): <em>consigo, conmigo, contigo</em>
* `Dat` (1419; 14% of non-empty `Case`): <em>le, me, les, nos, te, os, la, lo</em>
* `Nom` (99; 1% of non-empty `Case`): <em>yo, tú, I, You, él</em>
* `EMPTY` (4070): <em>que, uno, cual, una, quien, esto, todo, tanto, algo, nada</em>

<table>
  <tr><th>Paradigm <i>él</i></th><th><tt>Acc,Dat</tt></th><th><tt>Acc,Nom</tt></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th><th><tt>Dat</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt><tt><a href="es_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="es_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>él, ello</em></td><td><em>él</em></td><td><em>lo</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="es_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="es_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>ellos</em></td><td></td><td><em>los</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="es_gsd-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="es_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>ella</em></td><td></td><td><em>la</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="es_gsd-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="es_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="es_gsd-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td></td><td></td><td><em>la</em></td><td></td></tr>
  <tr><td><tt><tt><a href="es_gsd-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="es_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>ellas</em></td><td></td><td><em>las</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="es_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td></td><td></td><td><em>le</em></td><td></td></tr>
  <tr><td><tt><tt><a href="es_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="es_gsd-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td></td><td></td><td><em>lo</em></td><td></td></tr>
  <tr><td><tt><tt><a href="es_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td></td><td></td><td></td><td><em>les</em></td><td></td></tr>
  <tr><td><tt><tt><a href="es_gsd-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt></tt></td><td><em>se</em></td><td></td><td></td><td><em>sí, se</em></td><td></td><td><em>consigo</em></td></tr>
</table>

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`:
<tt>PRON --[<tt><a href="es_gsd-dep-conj.html">conj</a></tt>]--> PRON</tt> (9; 64%),
<tt>PRON --[<tt><a href="es_gsd-dep-dep.html">dep</a></tt>]--> PRON</tt> (1; 100%).

