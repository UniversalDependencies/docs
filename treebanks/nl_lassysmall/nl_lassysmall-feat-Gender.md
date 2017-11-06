---
layout: base
title:  'Statistics of Gender in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Features: `Gender`

This feature is universal.
It occurs with 2 different values: `Com`, `Neut`.
Some words have combined values of the feature; 1 combinations have been observed: `Com|Neut`.

19075 tokens (19%) have a non-empty value of `Gender`.
6250 types (41%) occur at least once with a non-empty value of `Gender`.
5827 lemmas (45%) occur at least once with a non-empty value of `Gender`.
The feature is used with 2 part-of-speech tags: <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (12844; 13% instances), <tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (6231; 6% instances).

### `NOUN`

12844 <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> tokens (74% of all `NOUN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NOUN` and `Gender` co-occurred: <tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt> (12844; 100%).

`NOUN` tokens may have the following values of `Gender`:

* `Com` (8847; 69% of non-empty `Gender`): <em>partij, stad, eeuw, naam, regering, koning, finale, gemeenschap, politie, provincie</em>
* `Com,Neut` (32; 0% of non-empty `Gender`): <em>keer, soort, mout, Salon, cement, katoen, natuursteen, tin</em>
* `Neut` (3965; 31% of non-empty `Gender`): <em>jaar, gewest, deel, aantal, museum, parlement, werk, begin, land, centrum</em>
* `EMPTY` (4437): <em>jaren, verkiezingen, gemeenten, partijen, inwoners, leden, links, zetels, verhalen, provincies</em>

<table>
  <tr><th>Paradigm <i>stad</i></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt></tt></td><td><em>stadje</em></td><td><em>stad</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `NOUN`. 99% lemmas (3913) occur only with one value of `Gender`.

### `PROPN`

6231 <tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> tokens (49% of all `PROPN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PROPN` and `Gender` co-occurred: <tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt> (6231; 100%).

`PROPN` tokens may have the following values of `Gender`:

* `Com` (2838; 46% of non-empty `Gender`): <em>Wiske, Suske, oktober, Ensor, juni, Vandersteen, VLD, Boudewijn, Kuifje, CVP</em>
* `Com,Neut` (43; 1% of non-empty `Gender`): <em>Spirit, Giroux, Vivant, Andras, Bouckaert, Brouckère, Dekeyser, Den, Flickr, Marine</em>
* `Neut` (3350; 54% of non-empty `Gender`): <em>België, Brussel, Vlaanderen, Antwerpen, Hasselt, Nederland, Limburg, Luik, Europa, Gent</em>
* `EMPTY` (6467): <em>van, de, Jan, II, Nederlanden, Vlaams, Kim, I, Clijsters, der</em>

<table>
  <tr><th>Paradigm <i>Vivant</i></th><th><tt>Com,Neut</tt></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt></tt></td><td><em>Vivant</em></td><td><em>Vivant</em></td><td><em>Vivant</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `PROPN`. 99% lemmas (1873) occur only with one value of `Gender`.

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>PROPN --[<tt><a href="nl_lassysmall-dep-conj.html">conj</a></tt>]--> PROPN</tt> (561; 83%),
<tt>NOUN --[<tt><a href="nl_lassysmall-dep-conj.html">conj</a></tt>]--> NOUN</tt> (502; 52%),
<tt>NOUN --[<tt><a href="nl_lassysmall-dep-appos.html">appos</a></tt>]--> NOUN</tt> (107; 52%),
<tt>NOUN --[<tt><a href="nl_lassysmall-dep-advcl.html">advcl</a></tt>]--> NOUN</tt> (11; 61%),
<tt>PROPN --[<tt><a href="nl_lassysmall-dep-nsubj.html">nsubj</a></tt>]--> PROPN</tt> (4; 67%),
<tt>PROPN --[<tt><a href="nl_lassysmall-dep-obj.html">obj</a></tt>]--> PROPN</tt> (4; 80%),
<tt>PROPN --[<tt><a href="nl_lassysmall-dep-amod.html">amod</a></tt>]--> PROPN</tt> (2; 67%),
<tt>PROPN --[<tt><a href="nl_lassysmall-dep-acl-relcl.html">acl:relcl</a></tt>]--> PROPN</tt> (1; 100%).

