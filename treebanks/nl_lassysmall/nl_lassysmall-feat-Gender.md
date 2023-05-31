---
layout: base
title:  'Statistics of Gender in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Features: `Gender`

This feature is universal.
It occurs with 2 different values: `Com`, `Neut`.
Some words have combined values of the feature; 1 combinations have been observed: `Com|Neut`.

17757 tokens (18%) have a non-empty value of `Gender`.
6154 types (40%) occur at least once with a non-empty value of `Gender`.
5734 lemmas (44%) occur at least once with a non-empty value of `Gender`.
The feature is used with 2 part-of-speech tags: <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (11819; 12% instances), <tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (5938; 6% instances).

### `NOUN`

11819 <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> tokens (74% of all `NOUN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NOUN` and `Gender` co-occurred: <tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt> (11819; 100%).

`NOUN` tokens may have the following values of `Gender`:

* `Com` (8190; 69% of non-empty `Gender`): <em>partij, stad, eeuw, naam, koning, regering, finale, provincie, politie, reeks</em>
* `Com,Neut` (15; 0% of non-empty `Gender`): <em>soort, mout, boord, katoen, krijtpoeder, sorghum, tin, wort</em>
* `Neut` (3614; 31% of non-empty `Gender`): <em>jaar, deel, aantal, werk, begin, land, bier, gewest, centrum, gebied</em>
* `EMPTY` (4138): <em>jaren, verkiezingen, gemeenten, partijen, inwoners, leden, links, zetels, verhalen, provincies</em>

<table>
  <tr><th>Paradigm <i>wort</i></th><th><tt>Com,Neut</tt></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt></tt></td><td><em>wort</em></td><td><em>wort</em></td><td><em>wort</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `NOUN`. 99% lemmas (3846) occur only with one value of `Gender`.

### `PROPN`

5938 <tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> tokens (43% of all `PROPN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PROPN` and `Gender` co-occurred: <tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt> (5938; 100%).

`PROPN` tokens may have the following values of `Gender`:

* `Com` (2703; 46% of non-empty `Gender`): <em>Wiske, Suske, juni, oktober, Ensor, Vandersteen, Kuifje, VLD, CVP, D66</em>
* `Com,Neut` (80; 1% of non-empty `Gender`): <em>Spirit, Vivant, Parijs-Roubaix, Euronext, SPIRIT, Dexia, Fortis, Giroux, Mobistar, Prego</em>
* `Neut` (3155; 53% of non-empty `Gender`): <em>België, Brussel, Antwerpen, Vlaanderen, Hasselt, Nederland, Bel, Limburg, Luik, Gent</em>
* `EMPTY` (7854): <em>van, de, Vlaams, Gewest, Jan, Gemeenschap, der, II, Wereldoorlog, Nederlanden</em>

<table>
  <tr><th>Paradigm <i>Vandersteen</i></th><th><tt>Com,Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt></tt></td><td><em>Vandersteen</em></td><td><em>Vandersteen</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `PROPN`. 99% lemmas (1862) occur only with one value of `Gender`.

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>PROPN --[<tt><a href="nl_lassysmall-dep-conj.html">conj</a></tt>]--> PROPN</tt> (559; 81%),
<tt>NOUN --[<tt><a href="nl_lassysmall-dep-conj.html">conj</a></tt>]--> NOUN</tt> (475; 52%),
<tt>PROPN --[<tt><a href="nl_lassysmall-dep-flat.html">flat</a></tt>]--> PROPN</tt> (73; 74%),
<tt>NOUN --[<tt><a href="nl_lassysmall-dep-advcl.html">advcl</a></tt>]--> NOUN</tt> (9; 75%),
<tt>NOUN --[<tt><a href="nl_lassysmall-dep-orphan.html">orphan</a></tt>]--> PROPN</tt> (2; 100%),
<tt>PROPN --[<tt><a href="nl_lassysmall-dep-nsubj.html">nsubj</a></tt>]--> PROPN</tt> (2; 67%),
<tt>NOUN --[<tt><a href="nl_lassysmall-dep-amod.html">amod</a></tt>]--> PROPN</tt> (1; 100%),
<tt>NOUN --[<tt><a href="nl_lassysmall-dep-case.html">case</a></tt>]--> NOUN</tt> (1; 100%),
<tt>NOUN --[<tt><a href="nl_lassysmall-dep-obj.html">obj</a></tt>]--> NOUN</tt> (1; 100%),
<tt>NOUN --[<tt><a href="nl_lassysmall-dep-obj.html">obj</a></tt>]--> PROPN</tt> (1; 100%).

