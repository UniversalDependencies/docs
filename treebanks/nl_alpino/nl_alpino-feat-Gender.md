---
layout: base
title:  'Statistics of Gender in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Features: `Gender`

This feature is universal.
It occurs with 2 different values: `Com`, `Neut`.
Some words have combined values of the feature; 1 combinations have been observed: `Com|Neut`.

33575 tokens (16%) have a non-empty value of `Gender`.
11394 types (42%) occur at least once with a non-empty value of `Gender`.
10983 lemmas (49%) occur at least once with a non-empty value of `Gender`.
The feature is used with 2 part-of-speech tags: <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (27023; 13% instances), <tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt> (6552; 3% instances).

### `NOUN`

27023 <tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> tokens (77% of all `NOUN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NOUN` and `Gender` co-occurred: <tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt> (27023; 100%).

`NOUN` tokens may have the following values of `Gender`:

* `Com` (18269; 68% of non-empty `Gender`): <em>heer, plaats, flo, tijd, minister, stad, man, dag, week, politie</em>
* `Com,Neut` (132; 0% of non-empty `Gender`): <em>keer, soort, boord, opzet, subsidie, opium, punt, accordeon, affiche, aperitief</em>
* `Neut` (8622; 32% of non-empty `Gender`): <em>jaar, land, uur, aantal, deel, procent, huis, miljoen, werk, leven</em>
* `EMPTY` (8147): <em>mensen, kinderen, jaren, problemen, landen, boeken, dagen, vrouwen, weken, zaken</em>

<table>
  <tr><th>Paradigm <i>punt</i></th><th><tt>Com,Neut</tt></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt></tt></td><td><em>punt</em></td><td><em>punt, puntje</em></td><td><em>punt</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `NOUN`. 99% lemmas (8027) occur only with one value of `Gender`.

### `PROPN`

6552 <tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt> tokens (44% of all `PROPN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PROPN` and `Gender` co-occurred: <tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt> (6552; 100%).

`PROPN` tokens may have the following values of `Gender`:

* `Com` (2746; 42% of non-empty `Gender`): <em>zaterdag, januari, zondag, JGZ, Robbert, mei, juli, september, vrijdag, God</em>
* `Com,Neut` (791; 12% of non-empty `Gender`): <em>Financien, Beernink, Springer, DFC, Interpay, Laurus, Mendes-France, Noerejew, Poema, Ulysses</em>
* `Neut` (3015; 46% of non-empty `Gender`): <em>Nederland, Amsterdam, Groningen, Rotterdam, Europa, Engeland, Aduard, Frankrijk, Utrecht, Ajax</em>
* `EMPTY` (8290): <em>van, de, J., den, der, mr., dr., Jan, H., a.</em>

<table>
  <tr><th>Paradigm <i>Frans</i></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt></tt></td><td><em>Frans</em></td><td><em>Frans</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `PROPN`. 98% lemmas (2826) occur only with one value of `Gender`.

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>NOUN --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> NOUN</tt> (597; 50%),
<tt>PROPN --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> PROPN</tt> (331; 64%),
<tt>NOUN --[<tt><a href="nl_alpino-dep-appos.html">appos</a></tt>]--> NOUN</tt> (161; 58%),
<tt>NOUN --[<tt><a href="nl_alpino-dep-parataxis.html">parataxis</a></tt>]--> NOUN</tt> (38; 53%),
<tt>NOUN --[<tt><a href="nl_alpino-dep-acl-relcl.html">acl:relcl</a></tt>]--> NOUN</tt> (17; 52%),
<tt>NOUN --[<tt><a href="nl_alpino-dep-flat.html">flat</a></tt>]--> NOUN</tt> (7; 64%),
<tt>NOUN --[<tt><a href="nl_alpino-dep-case.html">case</a></tt>]--> NOUN</tt> (6; 67%),
<tt>PROPN --[<tt><a href="nl_alpino-dep-amod.html">amod</a></tt>]--> PROPN</tt> (1; 100%),
<tt>PROPN --[<tt><a href="nl_alpino-dep-obl.html">obl</a></tt>]--> PROPN</tt> (1; 100%).

