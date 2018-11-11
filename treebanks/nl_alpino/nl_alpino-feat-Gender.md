---
layout: base
title:  'Statistics of Gender in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Features: `Gender`

This feature is universal.
It occurs with 2 different values: `Com`, `Neut`.
Some words have combined values of the feature; 1 combinations have been observed: `Com|Neut`.

33761 tokens (16%) have a non-empty value of `Gender`.
11468 types (42%) occur at least once with a non-empty value of `Gender`.
11098 lemmas (50%) occur at least once with a non-empty value of `Gender`.
The feature is used with 2 part-of-speech tags: <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (27318; 13% instances), <tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt> (6443; 3% instances).

### `NOUN`

27318 <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> tokens (77% of all `NOUN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NOUN` and `Gender` co-occurred: <tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt> (27318; 100%).

`NOUN` tokens may have the following values of `Gender`:

* `Com` (18567; 68% of non-empty `Gender`): <em>heer, plaats, tijd, minister, flo, stad, man, dag, week, politie</em>
* `Com,Neut` (59; 0% of non-empty `Gender`): <em>soort, boord, keer, paar, subsidie, opium, punt, accordeon, affiche, aperitief</em>
* `Neut` (8692; 32% of non-empty `Gender`): <em>jaar, land, uur, aantal, deel, procent, huis, miljoen, werk, leven</em>
* `EMPTY` (8295): <em>mensen, kinderen, jaren, problemen, zaken, landen, boeken, dagen, vrouwen, weken</em>

<table>
  <tr><th>Paradigm <i>punt</i></th><th><tt>Com,Neut</tt></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt></tt></td><td><em>punt</em></td><td><em>punt, puntje</em></td><td><em>punt</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `NOUN`. 99% lemmas (8116) occur only with one value of `Gender`.

### `PROPN`

6443 <tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt> tokens (45% of all `PROPN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PROPN` and `Gender` co-occurred: <tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt> (6443; 100%).

`PROPN` tokens may have the following values of `Gender`:

* `Com` (2324; 36% of non-empty `Gender`): <em>zaterdag, januari, zondag, JGZ, Robbert, mei, juli, september, vrijdag, God</em>
* `Com,Neut` (1161; 18% of non-empty `Gender`): <em>Estonia, Financien, ARJOS, Beernink, Eeg, IOS, Munchen, SAR, VHO, Van</em>
* `Neut` (2958; 46% of non-empty `Gender`): <em>Nederland, Amsterdam, Groningen, Rotterdam, Europa, Engeland, Aduard, Frankrijk, Utrecht, Ajax</em>
* `EMPTY` (7852): <em>van, de, J., den, der, mr., dr., Jan, H., Haag</em>

<table>
  <tr><th>Paradigm <i>wk</i></th><th><tt>Com,Neut</tt></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt></tt></td><td><em>WK</em></td><td><em>WK</em></td><td><em>WK</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `PROPN`. 98% lemmas (2820) occur only with one value of `Gender`.

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>PROPN --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> PROPN</tt> (318; 64%),
<tt>NOUN --[<tt><a href="nl_alpino-dep-appos.html">appos</a></tt>]--> NOUN</tt> (159; 56%),
<tt>NOUN --[<tt><a href="nl_alpino-dep-acl-relcl.html">acl:relcl</a></tt>]--> NOUN</tt> (23; 53%),
<tt>NOUN --[<tt><a href="nl_alpino-dep-flat.html">flat</a></tt>]--> NOUN</tt> (9; 69%),
<tt>NOUN --[<tt><a href="nl_alpino-dep-obj.html">obj</a></tt>]--> NOUN</tt> (1; 100%),
<tt>PROPN --[<tt><a href="nl_alpino-dep-amod.html">amod</a></tt>]--> PROPN</tt> (1; 100%).

