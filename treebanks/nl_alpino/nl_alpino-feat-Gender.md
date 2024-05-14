---
layout: base
title:  'Statistics of Gender in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Features: `Gender`

This feature is universal.
It occurs with 2 different values: `Com`, `Neut`.
Some words have combined values of the feature; 1 combinations have been observed: `Com|Neut`.

33367 tokens (16%) have a non-empty value of `Gender`.
11364 types (42%) occur at least once with a non-empty value of `Gender`.
10872 lemmas (49%) occur at least once with a non-empty value of `Gender`.
The feature is used with 2 part-of-speech tags: <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (26677; 13% instances), <tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt> (6690; 3% instances).

### `NOUN`

26677 <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> tokens (77% of all `NOUN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NOUN` and `Gender` co-occurred: <tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt> (26677; 100%).

`NOUN` tokens may have the following values of `Gender`:

* `Com` (17978; 67% of non-empty `Gender`): <em>heer, plaats, tijd, minister, man, stad, dag, week, politie, trein</em>
* `Com,Neut` (72; 0% of non-empty `Gender`): <em>soort, boord, opzet, subsidie, stempel, opium, affiche, aperitief, cacaopoeder, cementpoeder</em>
* `Neut` (8627; 32% of non-empty `Gender`): <em>jaar, land, uur, aantal, deel, procent, huis, miljoen, werk, leven</em>
* `EMPTY` (8077): <em>mensen, kinderen, jaren, problemen, zaken, landen, boeken, dagen, vrouwen, weken</em>

<table>
  <tr><th>Paradigm <i>opium</i></th><th><tt>Com,Neut</tt></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt></tt></td><td><em>opium</em></td><td><em>opium</em></td><td><em>opium</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `NOUN`. 98% lemmas (7848) occur only with one value of `Gender`.

### `PROPN`

6690 <tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt> tokens (43% of all `PROPN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PROPN` and `Gender` co-occurred: <tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt> (6690; 100%).

`PROPN` tokens may have the following values of `Gender`:

* `Com` (2874; 43% of non-empty `Gender`): <em>zaterdag, januari, zondag, JGZ, Robbert, mei, juli, september, vrijdag, God</em>
* `Com,Neut` (764; 11% of non-empty `Gender`): <em>Greenpeace, Beernink, DFC, Interpay, Laurus, Mendes-France, Noerejew, Poema, Springer, Ulysses</em>
* `Neut` (3052; 46% of non-empty `Gender`): <em>Nederland, Amsterdam, Groningen, Rotterdam, Europa, Engeland, Aduard, Frankrijk, Utrecht, Ajax</em>
* `EMPTY` (8698): <em>van, de, J., den, der, mr., dr., Jan, H., a.</em>

<table>
  <tr><th>Paradigm <i>Nederland</i></th><th><tt>Com,Neut</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt></tt></td><td><em>Neerland</em></td><td><em>Nederland</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `PROPN`. 98% lemmas (2878) occur only with one value of `Gender`.

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>PROPN --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> PROPN</tt> (343; 64%),
<tt>NOUN --[<tt><a href="nl_alpino-dep-appos.html">appos</a></tt>]--> NOUN</tt> (157; 59%),
<tt>NOUN --[<tt><a href="nl_alpino-dep-fixed.html">fixed</a></tt>]--> NOUN</tt> (44; 51%),
<tt>NOUN --[<tt><a href="nl_alpino-dep-case.html">case</a></tt>]--> NOUN</tt> (7; 78%),
<tt>NOUN --[<tt><a href="nl_alpino-dep-flat.html">flat</a></tt>]--> NOUN</tt> (2; 67%),
<tt>NOUN --[<tt><a href="nl_alpino-dep-obl-arg.html">obl:arg</a></tt>]--> NOUN</tt> (2; 67%),
<tt>PROPN --[<tt><a href="nl_alpino-dep-nsubj.html">nsubj</a></tt>]--> PROPN</tt> (2; 67%),
<tt>PROPN --[<tt><a href="nl_alpino-dep-amod.html">amod</a></tt>]--> PROPN</tt> (1; 100%),
<tt>PROPN --[<tt><a href="nl_alpino-dep-obl.html">obl</a></tt>]--> PROPN</tt> (1; 100%).

