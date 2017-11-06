---
layout: base
title:  'Statistics of Gender in UD_Dutch'
udver: '2'
---

## Treebank Statistics: UD_Dutch: Features: `Gender`

This feature is universal.
It occurs with 2 different values: `Com`, `Neut`.
Some words have combined values of the feature; 1 combinations have been observed: `Com|Neut`.

32531 tokens (16%) have a non-empty value of `Gender`.
10415 types (38%) occur at least once with a non-empty value of `Gender`.
10028 lemmas (45%) occur at least once with a non-empty value of `Gender`.
The feature is used with 2 part-of-speech tags: <tt><a href="nl-pos-NOUN.html">NOUN</a></tt> (27342; 13% instances), <tt><a href="nl-pos-PROPN.html">PROPN</a></tt> (5189; 2% instances).

### `NOUN`

27342 <tt><a href="nl-pos-NOUN.html">NOUN</a></tt> tokens (77% of all `NOUN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NOUN` and `Gender` co-occurred: <tt><a href="nl-feat-Number.html">Number</a></tt><tt>=Sing</tt> (27342; 100%).

`NOUN` tokens may have the following values of `Gender`:

* `Com` (18592; 68% of non-empty `Gender`): <em>heer, plaats, tijd, minister, flo, stad, man, dag, week, politie</em>
* `Com,Neut` (60; 0% of non-empty `Gender`): <em>soort, boord, keer, paar, subsidie, opium, punt, accordeon, affiche, animo</em>
* `Neut` (8690; 32% of non-empty `Gender`): <em>jaar, land, uur, aantal, deel, procent, huis, miljoen, werk, leven</em>
* `EMPTY` (8302): <em>mensen, kinderen, jaren, problemen, zaken, landen, boeken, dagen, vrouwen, weken</em>

<table>
  <tr><th>Paradigm <i>punt</i></th><th><tt>Com,Neut</tt></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt></tt></td><td><em>punt</em></td><td><em>punt, puntje</em></td><td><em>punt</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `NOUN`. 99% lemmas (8110) occur only with one value of `Gender`.

### `PROPN`

5189 <tt><a href="nl-pos-PROPN.html">PROPN</a></tt> tokens (36% of all `PROPN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PROPN` and `Gender` co-occurred: <tt><a href="nl-feat-Number.html">Number</a></tt><tt>=Sing</tt> (5189; 100%).

`PROPN` tokens may have the following values of `Gender`:

* `Com` (2247; 43% of non-empty `Gender`): <em>zaterdag, januari, zondag, JGZ, Robbert, mei, juli, september, vrijdag, april</em>
* `Com,Neut` (17; 0% of non-empty `Gender`): <em>Holthaus, WK, Bijlmerbetonmeer, Enkelaar, Enusa, Europe, Gezant, Hoch, Hoornik, Kvp</em>
* `Neut` (2925; 56% of non-empty `Gender`): <em>Nederland, Amsterdam, Groningen, Rotterdam, Europa, Engeland, Aduard, Frankrijk, Utrecht, Ajax</em>
* `EMPTY` (9112): <em>van, de, J., den, der, mr., dr., Jan, H., Haag</em>

<table>
  <tr><th>Paradigm <i>wk</i></th><th><tt>Com,Neut</tt></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt></tt></td><td><em>WK</em></td><td><em>WK</em></td><td><em>WK</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `PROPN`. 98% lemmas (1760) occur only with one value of `Gender`.

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>PROPN --[<tt><a href="nl-dep-conj.html">conj</a></tt>]--> PROPN</tt> (272; 66%),
<tt>NOUN --[<tt><a href="nl-dep-appos.html">appos</a></tt>]--> NOUN</tt> (158; 56%),
<tt>NOUN --[<tt><a href="nl-dep-flat-name.html">flat:name</a></tt>]--> NOUN</tt> (9; 69%),
<tt>NOUN --[<tt><a href="nl-dep-obj.html">obj</a></tt>]--> NOUN</tt> (1; 100%),
<tt>PROPN --[<tt><a href="nl-dep-amod.html">amod</a></tt>]--> PROPN</tt> (1; 100%).

