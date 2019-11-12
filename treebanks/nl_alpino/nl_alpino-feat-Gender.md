---
layout: base
title:  'Statistics of Gender in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Features: `Gender`

This feature is universal.
It occurs with 2 different values: `Com`, `Neut`.
Some words have combined values of the feature; 1 combinations have been observed: `Com|Neut`.

33702 tokens (16%) have a non-empty value of `Gender`.
11447 types (42%) occur at least once with a non-empty value of `Gender`.
11077 lemmas (50%) occur at least once with a non-empty value of `Gender`.
The feature is used with 2 part-of-speech tags: <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (27273; 13% instances), <tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt> (6429; 3% instances).

### `NOUN`

27273 <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> tokens (77% of all `NOUN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NOUN` and `Gender` co-occurred: <tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt> (27273; 100%).

`NOUN` tokens may have the following values of `Gender`:

* `Com` (18532; 68% of non-empty `Gender`): <em>heer, plaats, tijd, minister, flo, stad, man, dag, week, politie</em>
* `Com,Neut` (59; 0% of non-empty `Gender`): <em>soort, boord, keer, paar, subsidie, opium, punt, accordeon, affiche, aperitief</em>
* `Neut` (8682; 32% of non-empty `Gender`): <em>jaar, land, uur, aantal, deel, procent, huis, miljoen, werk, leven</em>
* `EMPTY` (8275): <em>mensen, kinderen, jaren, problemen, zaken, landen, boeken, dagen, vrouwen, weken</em>

<table>
  <tr><th>Paradigm <i>punt</i></th><th><tt>Com,Neut</tt></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt></tt></td><td><em>punt</em></td><td><em>punt, puntje</em></td><td><em>punt</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `NOUN`. 99% lemmas (8100) occur only with one value of `Gender`.

### `PROPN`

6429 <tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt> tokens (45% of all `PROPN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PROPN` and `Gender` co-occurred: <tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt> (6429; 100%).

`PROPN` tokens may have the following values of `Gender`:

* `Com` (2321; 36% of non-empty `Gender`): <em>zaterdag, januari, zondag, JGZ, Robbert, mei, juli, september, vrijdag, God</em>
* `Com,Neut` (1155; 18% of non-empty `Gender`): <em>Estonia, Financien, ARJOS, Beernink, Eeg, IOS, Munchen, SAR, VHO, Beerda</em>
* `Neut` (2953; 46% of non-empty `Gender`): <em>Nederland, Amsterdam, Groningen, Rotterdam, Europa, Engeland, Aduard, Frankrijk, Utrecht, Ajax</em>
* `EMPTY` (7839): <em>van, de, J., den, der, mr., dr., Jan, H., Haag</em>

<table>
  <tr><th>Paradigm <i>wk</i></th><th><tt>Com,Neut</tt></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt></tt></td><td><em>WK</em></td><td><em>WK</em></td><td><em>WK</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `PROPN`. 98% lemmas (2815) occur only with one value of `Gender`.

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>PROPN --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> PROPN</tt> (318; 64%),
<tt>NOUN --[<tt><a href="nl_alpino-dep-appos.html">appos</a></tt>]--> NOUN</tt> (159; 56%),
<tt>NOUN --[<tt><a href="nl_alpino-dep-parataxis.html">parataxis</a></tt>]--> NOUN</tt> (35; 51%),
<tt>NOUN --[<tt><a href="nl_alpino-dep-flat.html">flat</a></tt>]--> NOUN</tt> (9; 69%),
<tt>PROPN --[<tt><a href="nl_alpino-dep-orphan.html">orphan</a></tt>]--> NOUN</tt> (4; 57%),
<tt>PROPN --[<tt><a href="nl_alpino-dep-amod.html">amod</a></tt>]--> PROPN</tt> (1; 100%).

