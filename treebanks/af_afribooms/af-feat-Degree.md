---
layout: base
title:  'Statistics of Degree in UD_Afrikaans'
udver: '2'
---

## Treebank Statistics: UD_Afrikaans: Features: `Degree`

This feature is universal but the values `Dim` are language-specific.
It occurs with 4 different values: `Cmp`, `Dim`, `Pos`, `Sup`.

5221 tokens (11%) have a non-empty value of `Degree`.
1325 types (21%) occur at least once with a non-empty value of `Degree`.
996 lemmas (19%) occur at least once with a non-empty value of `Degree`.
The feature is used with 3 part-of-speech tags: <tt><a href="af-pos-ADJ.html">ADJ</a></tt> (3172; 6% instances), <tt><a href="af-pos-ADV.html">ADV</a></tt> (2034; 4% instances), <tt><a href="af-pos-NOUN.html">NOUN</a></tt> (15; 0% instances).

### `ADJ`

3172 <tt><a href="af-pos-ADJ.html">ADJ</a></tt> tokens (100% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="af-feat-Case.html">Case</a></tt><tt>=Nom</tt> (3172; 100%), <tt><a href="af-feat-AdjType.html">AdjType</a></tt><tt>=Attr</tt> (2683; 85%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (63; 2% of non-empty `Degree`): beter hoër groter ouer sterker hoÃ«r laer minder jonger langer
* `Pos` (3058; 96% of non-empty `Degree`): ander nasionale Suid-Afrikaanse openbare maatskaplike voorlopige nuwe plaaslike ekonomiese groot
* `Sup` (51; 2% of non-empty `Degree`): naaste beste grootste belangrikste hoogste enigste ergste meeste doeltreffendste jongste

<table>
  <tr><th>Paradigm <i>groot</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt><tt><a href="af-feat-AdjType.html">AdjType</a></tt><tt>=Attr</tt></tt></td><td>groot</td><td>groter</td><td>grootste</td></tr>
  <tr><td><tt><tt><a href="af-feat-AdjType.html">AdjType</a></tt><tt>=Pred</tt></tt></td><td>groot</td><td>groter</td><td>grootste</td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 97% lemmas (757) occur only with one value of `Degree`.

### `ADV`

2034 <tt><a href="af-pos-ADV.html">ADV</a></tt> tokens (100% of all `ADV` tokens) have a non-empty value of `Degree`.

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (72; 4% of non-empty `Degree`): verder beter later langer vinniger harder minder vroeër sterker armer
* `Pos` (1950; 96% of non-empty `Degree`): nie ook in saam nog uit aan egter reeds slegs
* `Sup` (12; 1% of non-empty `Degree`): mees ergste minste meeste sterkste swaarste

<table>
  <tr><th>Paradigm <i>goed</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th></tr>
  <tr><td><tt></tt></td><td>goed</td><td>beter</td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 97% lemmas (331) occur only with one value of `Degree`.

### `NOUN`

15 <tt><a href="af-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `NOUN` and `Degree` co-occurred: <tt><a href="af-feat-Number.html">Number</a></tt><tt>=Sing</tt> (9; 60%).

`NOUN` tokens may have the following values of `Degree`:

* `Dim` (15; 100% of non-empty `Degree`): koekies knoppie venstertjie Korting-blokkie Soekvenstertjie deeltjie koekie treetjies tydjie
* `EMPTY` (10444): jaar regering mense aansoek inligting land leerders departement staat dienste

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="af-dep-conj.html">conj</a></tt>]--> ADJ</tt> (166; 100%),
<tt>ADV --[<tt><a href="af-dep-conj.html">conj</a></tt>]--> ADV</tt> (27; 100%),
<tt>ADJ --[<tt><a href="af-dep-advmod.html">advmod</a></tt>]--> ADV</tt> (24; 73%),
<tt>ADV --[<tt><a href="af-dep-dep.html">dep</a></tt>]--> ADV</tt> (12; 86%),
<tt>ADV --[<tt><a href="af-dep-advmod.html">advmod</a></tt>]--> ADV</tt> (11; 69%),
<tt>ADV --[<tt><a href="af-dep-dep.html">dep</a></tt>]--> ADJ</tt> (8; 100%),
<tt>ADJ --[<tt><a href="af-dep-cop.html">cop</a></tt>]--> ADJ</tt> (5; 100%),
<tt>ADJ --[<tt><a href="af-dep-amod.html">amod</a></tt>]--> ADJ</tt> (3; 100%),
<tt>ADJ --[<tt><a href="af-dep-dep.html">dep</a></tt>]--> ADV</tt> (3; 75%),
<tt>ADV --[<tt><a href="af-dep-obl.html">obl</a></tt>]--> ADV</tt> (2; 100%).

