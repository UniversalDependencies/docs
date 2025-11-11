---
layout: base
title:  'Statistics of Gender in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Features: `Gender`

This feature is universal.
It occurs with 2 different values: `Com`, `Neut`.
Some words have combined values of the feature; 1 combinations have been observed: `Com|Neut`.

51192 tokens (17%) have a non-empty value of `Gender`.
12868 types (40%) occur at least once with a non-empty value of `Gender`.
12018 lemmas (46%) occur at least once with a non-empty value of `Gender`.
The feature is used with 2 part-of-speech tags: <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (36690; 12% instances), <tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (14502; 5% instances).

### `NOUN`

36690 <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> tokens (74% of all `NOUN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NOUN` and `Gender` co-occurred: <tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt> (36690; 100%).

`NOUN` tokens may have the following values of `Gender`:

* `Com` (25003; 68% of non-empty `Gender`): <em>oorlog, tijd, eeuw, stad, partij, koning, naam, plaats, film, regering</em>
* `Com,Neut` (81; 0% of non-empty `Gender`): <em>soort, boord, opzet, katoen, mout, sorghum, proviand, aspirinetablet, falsetto, krijtpoeder</em>
* `Neut` (11606; 32% of non-empty `Gender`): <em>jaar, deel, aantal, land, leger, begin, gebied, album, werk, eind</em>
* `EMPTY` (12779): <em>jaren, mensen, landen, troepen, partijen, leden, verkiezingen, inwoners, tanks, gemeenten</em>

<table>
  <tr><th>Paradigm <i>soort</i></th><th><tt>Com,Neut</tt></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt></tt></td><td><em>soort</em></td><td><em>soort</em></td><td><em>soort</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `NOUN`. 99% lemmas (8346) occur only with one value of `Gender`.

### `PROPN`

14502 <tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> tokens (48% of all `PROPN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PROPN` and `Gender` co-occurred: <tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt> (14502; 100%).

`PROPN` tokens may have the following values of `Gender`:

* `Com` (7098; 49% of non-empty `Gender`): <em>juni, september, mei, oktober, Ron, augustus, maart, Prince, november, juli</em>
* `Com,Neut` (117; 1% of non-empty `Gender`): <em>Spirit, Vivant, Parijs-Roubaix, IGE, Osram, SEM, Euronext, SPIRIT, Barbarossa, Dexia</em>
* `Neut` (7287; 50% of non-empty `Gender`): <em>België, Brussel, Duitsland, Frankrijk, Vlaanderen, Antwerpen, Nederland, Europa, Israël, Wolder</em>
* `EMPTY` (15834): <em>van, de, Wereldoorlog, II, Verenigde, staten, Tweede, Vlaams, Duitsers, Eerste</em>

<table>
  <tr><th>Paradigm <i>België</i></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-ExtPos.html">ExtPos</a></tt><tt>=PROPN</tt></tt></td><td><em>België</em></td><td></td></tr>
  <tr><td><tt></tt></td><td><em>België, BELGIË</em></td><td><em>België</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `PROPN`. 99% lemmas (3581) occur only with one value of `Gender`.

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>NOUN --[<tt><a href="nl_lassysmall-dep-conj.html">conj</a></tt>]--> NOUN</tt> (1219; 53%),
<tt>PROPN --[<tt><a href="nl_lassysmall-dep-conj.html">conj</a></tt>]--> PROPN</tt> (1170; 80%),
<tt>NOUN --[<tt><a href="nl_lassysmall-dep-appos.html">appos</a></tt>]--> NOUN</tt> (235; 58%),
<tt>PROPN --[<tt><a href="nl_lassysmall-dep-flat.html">flat</a></tt>]--> PROPN</tt> (89; 70%),
<tt>NOUN --[<tt><a href="nl_lassysmall-dep-fixed.html">fixed</a></tt>]--> NOUN</tt> (38; 54%),
<tt>NOUN --[<tt><a href="nl_lassysmall-dep-case.html">case</a></tt>]--> NOUN</tt> (7; 70%),
<tt>NOUN --[<tt><a href="nl_lassysmall-dep-csubj.html">csubj</a></tt>]--> NOUN</tt> (4; 57%),
<tt>PROPN --[<tt><a href="nl_lassysmall-dep-nsubj.html">nsubj</a></tt>]--> PROPN</tt> (3; 75%),
<tt>NOUN --[<tt><a href="nl_lassysmall-dep-amod.html">amod</a></tt>]--> PROPN</tt> (1; 100%),
<tt>NOUN --[<tt><a href="nl_lassysmall-dep-obj.html">obj</a></tt>]--> NOUN</tt> (1; 100%).

