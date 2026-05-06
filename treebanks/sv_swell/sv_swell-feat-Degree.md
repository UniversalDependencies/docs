---
layout: base
title:  'Statistics of Degree in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Features: `Degree`

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

1012 tokens (9%) have a non-empty value of `Degree`.
451 types (20%) occur at least once with a non-empty value of `Degree`.
322 lemmas (20%) occur at least once with a non-empty value of `Degree`.
The feature is used with 3 part-of-speech tags: <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (846; 8% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt> (164; 2% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (2; 0% instances).

### `ADJ`

846 <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> tokens (96% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="sv_swell-feat-Case.html">Case</a></tt><tt>=Nom</tt> (840; 99%), <tt><a href="sv_swell-feat-Definite.html">Definite</a></tt><tt>=Ind</tt> (525; 62%), <tt><a href="sv_swell-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (524; 62%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (59; 7% of non-empty `Degree`): <em>bättre, mer, äldre, enklare, lättare, mindre, svårare, biligare, billigare, färre</em>
* `Pos` (744; 88% of non-empty `Degree`): <em>olika, många, bra, nya, andra, viktigt, själv, stor, viktig, svårt</em>
* `Sup` (43; 5% of non-empty `Degree`): <em>bästa, flesta, viktigaste, sista, viktigast, bekvämaste, best, farligaste, forsta, lyckligaste</em>
* `EMPTY` (31): <em>första, andra, tredje, Tredja, Tustar, båda, ex., firsta, gammlar, hal</em>

<table>
  <tr><th>Paradigm <i>bra</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt><tt><a href="sv_swell-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td><em>bra</em></td><td><em>bättre</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_swell-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="sv_swell-feat-Definite.html">Definite</a></tt><tt>=Def</tt></tt></td><td></td><td></td><td><em>bästa</em></td></tr>
  <tr><td><tt><tt><a href="sv_swell-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="sv_swell-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="sv_swell-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td></td><td><em>bästa</em></td></tr>
  <tr><td><tt><tt><a href="sv_swell-feat-Foreign.html">Foreign</a></tt><tt>=Yes</tt>|<tt><a href="sv_swell-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>best</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 93% lemmas (254) occur only with one value of `Degree`.

### `ADV`

164 <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt> tokens (22% of all `ADV` tokens) have a non-empty value of `Degree`.

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (26; 16% of non-empty `Degree`): <em>mer, bättre, vidare, mindre, Tidigare, fortta, hårdare, oftare, senare, snabbare</em>
* `Pos` (118; 72% of non-empty `Degree`): <em>mycket, bra, lite, ofta, väldigt, helt, generellt, absolut, hårt, snart</em>
* `Sup` (20; 12% of non-empty `Degree`): <em>mest, minst, sist, bäst, näst, främst, innerst, framst, oftas</em>
* `EMPTY` (591): <em>hur, så, där, därför, också, här, bara, kanske, ut, även</em>

<table>
  <tr><th>Paradigm <i>mycket</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>mycket</em></td><td><em>mer</em></td><td><em>mest</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 93% lemmas (55) occur only with one value of `Degree`.

### `NOUN`

2 <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `Degree`.

`NOUN` tokens may have the following values of `Degree`:

* `Pos` (2; 100% of non-empty `Degree`): <em>salt, familig</em>
* `EMPTY` (1816): <em>kläder, människor, språk, barn, pengar, sätt, plats, år, saker, tid</em>

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="sv_swell-dep-conj.html">conj</a></tt>]--> ADJ</tt> (38; 90%),
<tt>ADV --[<tt><a href="sv_swell-dep-conj.html">conj</a></tt>]--> ADV</tt> (7; 64%),
<tt>ADJ --[<tt><a href="sv_swell-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (6; 67%),
<tt>ADJ --[<tt><a href="sv_swell-dep-amod.html">amod</a></tt>]--> ADJ</tt> (2; 67%),
<tt>ADJ --[<tt><a href="sv_swell-dep-advmod.html">advmod</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="sv_swell-dep-csubj.html">csubj</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADV --[<tt><a href="sv_swell-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADV --[<tt><a href="sv_swell-dep-csubj.html">csubj</a></tt>]--> ADJ</tt> (1; 100%).

