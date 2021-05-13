---
layout: base
title:  'Statistics of Degree in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Features: `Degree`

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

20420 tokens (14%) have a non-empty value of `Degree`.
5103 types (28%) occur at least once with a non-empty value of `Degree`.
3053 lemmas (29%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (17043; 12% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt> (3377; 2% instances).

### `ADJ`

17043 <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> tokens (100% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="ro_simonero-feat-Definite.html">Definite</a></tt><tt>=Ind</tt> (16719; 98%), <tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Sing</tt> (11569; 68%), <tt><a href="ro_simonero-feat-Gender.html">Gender</a></tt><tt>=Fem</tt> (10848; 64%), <tt><a href="ro_simonero-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (10218; 60%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (34; 0% of non-empty `Degree`): <em>superioară, superioare, superior, inferioare, superiori</em>
* `Pos` (17008; 100% of non-empty `Degree`): <em>mare, vârstnici, crescut, zaharat, clinice, precoce, mici, cardiacă, cardiace, mari</em>
* `Sup` (1; 0% of non-empty `Degree`): <em>extreme</em>
* `EMPTY` (9): <em>AV, ultimul, anti, opta, primul</em>

<table>
  <tr><th>Paradigm <i>inferior</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th></tr>
  <tr><td><tt><tt><a href="ro_simonero-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="ro_simonero-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>inferioare</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro_simonero-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="ro_simonero-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>inferioară</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro_simonero-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>inferior</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro_simonero-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro_simonero-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>inferioare</em></td><td><em>inferioare</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 100% lemmas (2884) occur only with one value of `Degree`.

### `ADV`

3377 <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt> tokens (57% of all `ADV` tokens) have a non-empty value of `Degree`.

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (3; 0% of non-empty `Degree`): <em>succesiv</em>
* `Pos` (3360; 99% of non-empty `Degree`): <em>atât, mult, astfel, chiar, asemenea, frecvent, comparativ, puțin, doar, bine</em>
* `Sup` (14; 0% of non-empty `Degree`): <em>extrem, excesiv, perfect</em>
* `EMPTY` (2534): <em>mai, ca, iar, cât, când, decât, foarte, cum, precum, nici</em>

<table>
  <tr><th>Paradigm <i>succesiv</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th></tr>
  <tr><td><tt></tt></td><td><em>succesiv</em></td><td><em>succesiv</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 100% lemmas (467) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="ro_simonero-dep-conj.html">conj</a></tt>]--> ADJ</tt> (677; 100%),
<tt>ADJ --[<tt><a href="ro_simonero-dep-amod.html">amod</a></tt>]--> ADJ</tt> (56; 95%),
<tt>ADJ --[<tt><a href="ro_simonero-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (35; 100%),
<tt>ADV --[<tt><a href="ro_simonero-dep-conj.html">conj</a></tt>]--> ADV</tt> (34; 97%),
<tt>ADJ --[<tt><a href="ro_simonero-dep-conj.html">conj</a></tt>]--> ADV</tt> (24; 92%),
<tt>ADJ --[<tt><a href="ro_simonero-dep-amod.html">amod</a></tt>]--> ADV</tt> (10; 100%),
<tt>ADJ --[<tt><a href="ro_simonero-dep-advmod.html">advmod</a></tt>]--> ADJ</tt> (8; 100%),
<tt>ADV --[<tt><a href="ro_simonero-dep-conj.html">conj</a></tt>]--> ADJ</tt> (7; 88%),
<tt>ADV --[<tt><a href="ro_simonero-dep-amod.html">amod</a></tt>]--> ADJ</tt> (6; 100%),
<tt>ADJ --[<tt><a href="ro_simonero-dep-advcl.html">advcl</a></tt>]--> ADV</tt> (4; 100%).

