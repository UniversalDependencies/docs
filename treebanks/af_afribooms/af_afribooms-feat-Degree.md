---
layout: base
title:  'Statistics of Degree in UD_Afrikaans-AfriBooms'
udver: '2'
---

## Treebank Statistics: UD_Afrikaans-AfriBooms: Features: `Degree`

This feature is universal but the values `Dim` are language-specific.
It occurs with 4 different values: `Cmp`, `Dim`, `Pos`, `Sup`.

5222 tokens (11%) have a non-empty value of `Degree`.
1326 types (21%) occur at least once with a non-empty value of `Degree`.
996 lemmas (19%) occur at least once with a non-empty value of `Degree`.
The feature is used with 3 part-of-speech tags: <tt><a href="af_afribooms-pos-ADJ.html">ADJ</a></tt> (3173; 6% instances), <tt><a href="af_afribooms-pos-ADV.html">ADV</a></tt> (2034; 4% instances), <tt><a href="af_afribooms-pos-NOUN.html">NOUN</a></tt> (15; 0% instances).

### `ADJ`

3173 <tt><a href="af_afribooms-pos-ADJ.html">ADJ</a></tt> tokens (100% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="af_afribooms-feat-Case.html">Case</a></tt><tt>=Nom</tt> (3173; 100%), <tt><a href="af_afribooms-feat-AdjType.html">AdjType</a></tt><tt>=Attr</tt> (2683; 85%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (63; 2% of non-empty `Degree`): <em>beter, hoër, groter, ouer, sterker, hoÃ«r, laer, minder, jonger, langer</em>
* `Pos` (3059; 96% of non-empty `Degree`): <em>ander, nasionale, Suid-Afrikaanse, openbare, maatskaplike, voorlopige, nuwe, plaaslike, ekonomiese, groot</em>
* `Sup` (51; 2% of non-empty `Degree`): <em>naaste, beste, grootste, belangrikste, hoogste, enigste, ergste, meeste, doeltreffendste, jongste</em>

<table>
  <tr><th>Paradigm <i>groot</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt><tt><a href="af_afribooms-feat-AdjType.html">AdjType</a></tt><tt>=Attr</tt></tt></td><td><em>groot</em></td><td><em>groter</em></td><td><em>grootste</em></td></tr>
  <tr><td><tt><tt><a href="af_afribooms-feat-AdjType.html">AdjType</a></tt><tt>=Pred</tt></tt></td><td><em>groot</em></td><td><em>groter</em></td><td><em>grootste</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 97% lemmas (757) occur only with one value of `Degree`.

### `ADV`

2034 <tt><a href="af_afribooms-pos-ADV.html">ADV</a></tt> tokens (100% of all `ADV` tokens) have a non-empty value of `Degree`.

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (72; 4% of non-empty `Degree`): <em>verder, beter, later, langer, vinniger, harder, minder, vroeër, sterker, armer</em>
* `Pos` (1950; 96% of non-empty `Degree`): <em>nie, ook, in, saam, nog, uit, aan, egter, reeds, slegs</em>
* `Sup` (12; 1% of non-empty `Degree`): <em>mees, ergste, minste, meeste, sterkste, swaarste</em>

<table>
  <tr><th>Paradigm <i>goed</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th></tr>
  <tr><td><tt></tt></td><td><em>goed</em></td><td><em>beter</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 97% lemmas (331) occur only with one value of `Degree`.

### `NOUN`

15 <tt><a href="af_afribooms-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `NOUN` and `Degree` co-occurred: <tt><a href="af_afribooms-feat-Number.html">Number</a></tt><tt>=Sing</tt> (9; 60%).

`NOUN` tokens may have the following values of `Degree`:

* `Dim` (15; 100% of non-empty `Degree`): <em>koekies, knoppie, venstertjie, Korting-blokkie, Soekvenstertjie, deeltjie, koekie, treetjies, tydjie</em>
* `EMPTY` (10444): <em>jaar, regering, mense, aansoek, inligting, land, leerders, departement, staat, dienste</em>

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="af_afribooms-dep-conj.html">conj</a></tt>]--> ADJ</tt> (172; 99%),
<tt>ADJ --[<tt><a href="af_afribooms-dep-advmod.html">advmod</a></tt>]--> ADV</tt> (143; 89%),
<tt>ADV --[<tt><a href="af_afribooms-dep-conj.html">conj</a></tt>]--> ADV</tt> (27; 100%),
<tt>ADV --[<tt><a href="af_afribooms-dep-dep.html">dep</a></tt>]--> ADV</tt> (16; 89%),
<tt>ADV --[<tt><a href="af_afribooms-dep-dep.html">dep</a></tt>]--> ADJ</tt> (11; 100%),
<tt>ADJ --[<tt><a href="af_afribooms-dep-dep.html">dep</a></tt>]--> ADJ</tt> (10; 83%),
<tt>ADV --[<tt><a href="af_afribooms-dep-advmod.html">advmod</a></tt>]--> ADV</tt> (10; 67%),
<tt>ADJ --[<tt><a href="af_afribooms-dep-amod.html">amod</a></tt>]--> ADJ</tt> (6; 100%),
<tt>ADJ --[<tt><a href="af_afribooms-dep-dep.html">dep</a></tt>]--> ADV</tt> (4; 57%),
<tt>ADJ --[<tt><a href="af_afribooms-dep-mark.html">mark</a></tt>]--> ADV</tt> (2; 100%).

