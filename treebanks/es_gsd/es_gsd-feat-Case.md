---
layout: base
title:  'Statistics of Case in UD_Spanish-GSD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-GSD: Features: `Case`

This feature is universal.
It occurs with 4 different values: `Acc`, `Com`, `Dat`, `Nom`.
Some words have combined values of the feature; 2 combinations have been observed: `Acc|Dat`, `Acc|Nom`.

9962 tokens (2%) have a non-empty value of `Case`.
52 types (0%) occur at least once with a non-empty value of `Case`.
6 lemmas (0%) occur at least once with a non-empty value of `Case`.
The feature is used with 2 part-of-speech tags: <tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (9959; 2% instances), <tt><a href="es_gsd-pos-INTJ.html">INTJ</a></tt> (3; 0% instances).

### `PRON`

9959 <tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> tokens (71% of all `PRON` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PRON` and `Case` co-occurred: <tt><a href="es_gsd-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (9959; 100%), <tt><a href="es_gsd-feat-Person.html">Person</a></tt><tt>=3</tt> (8970; 90%), <tt><a href="es_gsd-feat-PrepCase.html">PrepCase</a></tt><tt>=Npr</tt> (8234; 83%), <tt><a href="es_gsd-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (7094; 71%), <tt><a href="es_gsd-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt> (5392; 54%), <tt><a href="es_gsd-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (5293; 53%).

`PRON` tokens may have the following values of `Case`:

* `Acc` (2217; 22% of non-empty `Case`): <em>lo, la, los, las, sí, mí, ti</em>
* `Acc,Dat` (6069; 61% of non-empty `Case`): <em>se, me, nos, te, os</em>
* `Acc,Nom` (698; 7% of non-empty `Case`): <em>él, ellos, ella, ello, ellas, nosotros, usted, vosotros, ustedes</em>
* `Com` (8; 0% of non-empty `Case`): <em>consigo, conmigo, contigo</em>
* `Dat` (870; 9% of non-empty `Case`): <em>le, les</em>
* `Nom` (97; 1% of non-empty `Case`): <em>yo, tú, I</em>
* `EMPTY` (4059): <em>que, uno, cual, una, quien, esto, todo, tanto, algo, nada</em>

<table>
  <tr><th>Paradigm <i>él</i></th><th><tt>Acc,Dat</tt></th><th><tt>Acc,Nom</tt></th><th><tt>Acc</tt></th><th><tt>Dat</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt><tt><a href="es_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="es_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>él, ello</em></td><td><em>lo</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="es_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="es_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>ellos</em></td><td><em>los</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="es_gsd-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="es_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>ella</em></td><td><em>la</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="es_gsd-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="es_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>ellas</em></td><td><em>las</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="es_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td></td><td><em>le</em></td><td></td></tr>
  <tr><td><tt><tt><a href="es_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td></td><td></td><td><em>les</em></td><td></td></tr>
  <tr><td><tt><tt><a href="es_gsd-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt></tt></td><td><em>se</em></td><td></td><td><em>sí</em></td><td></td><td><em>consigo</em></td></tr>
</table>

### `INTJ`

3 <tt><a href="es_gsd-pos-INTJ.html">INTJ</a></tt> tokens (8% of all `INTJ` tokens) have a non-empty value of `Case`.

`INTJ` tokens may have the following values of `Case`:

* `Acc` (3; 100% of non-empty `Case`): <em>sí</em>
* `EMPTY` (36): <em>sí, Salve</em>

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`:
<tt>PRON --[<tt><a href="es_gsd-dep-conj.html">conj</a></tt>]--> PRON</tt> (9; 64%),
<tt>PRON --[<tt><a href="es_gsd-dep-dep.html">dep</a></tt>]--> PRON</tt> (1; 100%).

