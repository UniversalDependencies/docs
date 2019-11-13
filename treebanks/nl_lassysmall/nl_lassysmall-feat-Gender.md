---
layout: base
title:  'Statistics of Gender in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Features: `Gender`

This feature is universal.
It occurs with 2 different values: `Com`, `Neut`.
Some words have combined values of the feature; 1 combinations have been observed: `Com|Neut`.

17865 tokens (18%) have a non-empty value of `Gender`.
6203 types (41%) occur at least once with a non-empty value of `Gender`.
5781 lemmas (45%) occur at least once with a non-empty value of `Gender`.
The feature is used with 2 part-of-speech tags: <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (11995; 12% instances), <tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (5870; 6% instances).

### `NOUN`

11995 <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> tokens (74% of all `NOUN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NOUN` and `Gender` co-occurred: <tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt> (11995; 100%).

`NOUN` tokens may have the following values of `Gender`:

* `Com` (8290; 69% of non-empty `Gender`): <em>partij, stad, eeuw, naam, regering, koning, finale, provincie, politie, reeks</em>
* `Com,Neut` (31; 0% of non-empty `Gender`): <em>keer, soort, mout, Salon, katoen, sorghum, tin, wort</em>
* `Neut` (3674; 31% of non-empty `Gender`): <em>jaar, deel, aantal, werk, begin, gewest, museum, land, bier, centrum</em>
* `EMPTY` (4198): <em>jaren, verkiezingen, gemeenten, partijen, inwoners, leden, links, zetels, verhalen, provincies</em>

<table>
  <tr><th>Paradigm <i>wort</i></th><th><tt>Com,Neut</tt></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt></tt></td><td><em>wort</em></td><td><em>wort</em></td><td><em>wort</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `NOUN`. 99% lemmas (3885) occur only with one value of `Gender`.

### `PROPN`

5870 <tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> tokens (44% of all `PROPN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PROPN` and `Gender` co-occurred: <tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt> (5870; 100%).

`PROPN` tokens may have the following values of `Gender`:

* `Com` (2617; 45% of non-empty `Gender`): <em>juni, oktober, Ensor, Vandersteen, Kuifje, VLD, CVP, november, D66, Napoleon</em>
* `Com,Neut` (68; 1% of non-empty `Gender`): <em>Spirit, Vivant, Euronext, Giroux, Dexia, Fortis, Mobistar, Philips, Prego, 4FM</em>
* `Neut` (3185; 54% of non-empty `Gender`): <em>België, Brussel, Antwerpen, Vlaanderen, Hasselt, Nederland, Bel, Limburg, Luik, Gent</em>
* `EMPTY` (7521): <em>van, de, Vlaams, en, Gewest, Jan, Suske, Gemeenschap, II, Wereldoorlog</em>

<table>
  <tr><th>Paradigm <i>Vandersteen</i></th><th><tt>Com,Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt></tt></td><td><em>Vandersteen</em></td><td><em>Vandersteen</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `PROPN`. 99% lemmas (1869) occur only with one value of `Gender`.

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>PROPN --[<tt><a href="nl_lassysmall-dep-conj.html">conj</a></tt>]--> PROPN</tt> (550; 81%),
<tt>NOUN --[<tt><a href="nl_lassysmall-dep-conj.html">conj</a></tt>]--> NOUN</tt> (473; 52%),
<tt>NOUN --[<tt><a href="nl_lassysmall-dep-appos.html">appos</a></tt>]--> NOUN</tt> (99; 52%),
<tt>NOUN --[<tt><a href="nl_lassysmall-dep-advcl.html">advcl</a></tt>]--> NOUN</tt> (9; 64%),
<tt>NOUN --[<tt><a href="nl_lassysmall-dep-orphan.html">orphan</a></tt>]--> PROPN</tt> (2; 100%),
<tt>PROPN --[<tt><a href="nl_lassysmall-dep-amod.html">amod</a></tt>]--> PROPN</tt> (2; 67%),
<tt>PROPN --[<tt><a href="nl_lassysmall-dep-nsubj.html">nsubj</a></tt>]--> PROPN</tt> (2; 67%),
<tt>NOUN --[<tt><a href="nl_lassysmall-dep-obj.html">obj</a></tt>]--> NOUN</tt> (1; 100%),
<tt>NOUN --[<tt><a href="nl_lassysmall-dep-obj.html">obj</a></tt>]--> PROPN</tt> (1; 100%),
<tt>PROPN --[<tt><a href="nl_lassysmall-dep-acl-relcl.html">acl:relcl</a></tt>]--> PROPN</tt> (1; 100%).

