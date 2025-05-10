---
layout: base
title:  'Statistics of NameType in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Features: `NameType`

This feature is language-specific.
It occurs with 4 different values: `Geo`, `Giv`, `Nat`, `Oth`.
Some words have combined values of the feature; 6 combinations have been observed: `Geo|Giv`, `Geo|Giv|Oth`, `Geo|Nat`, `Geo|Oth`, `Giv|Nat`, `Giv|Oth`.

27093 tokens (4%) have a non-empty value of `NameType`.
10538 types (14%) occur at least once with a non-empty value of `NameType`.
7691 lemmas (20%) occur at least once with a non-empty value of `NameType`.
The feature is used with 2 part-of-speech tags: <tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt> (26303; 4% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (790; 0% instances).

### `PROPN`

26303 <tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt> tokens (100% of all `PROPN` tokens) have a non-empty value of `NameType`.

The most frequent other feature values with which `PROPN` and `NameType` co-occurred: <tt><a href="cs_pdtc-feat-Number.html">Number</a></tt><tt>=Sing</tt> (22115; 84%), <tt><a href="cs_pdtc-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (15872; 60%).

`PROPN` tokens may have the following values of `NameType`:

* `Geo` (8491; 32% of non-empty `NameType`): <em>Praha, Praze, ČR, USA, Prahy, Plzni, Německu, Brně, Německo, Washingtonu</em>
* `Geo,Giv` (304; 1% of non-empty `NameType`): <em>Evropě, Evropy, Evropa, Evropu, Martina, Karolína, Karolíně, Virginii, Charlotte, Karolíny</em>
* `Geo,Giv,Oth` (28; 0% of non-empty `NameType`): <em>Petra, Coruňa, Aurory, Viktorie, Alberta, Albertě, Fatra, Fatry, Marietta, Pescarou</em>
* `Geo,Nat` (2; 0% of non-empty `NameType`): <em>Cikánka, Pražačka</em>
* `Geo,Oth` (653; 2% of non-empty `NameType`): <em>Yorku, Sparta, Sparty, Kanadě, Columbia, Kanada, Kanady, Reliance, Illinois, Streetu</em>
* `Giv` (12888; 49% of non-empty `NameType`): <em>John, Jiří, Dow, Jan, Václav, Jana, Josef, Petr, Vladimír, Klaus</em>
* `Giv,Nat` (270; 1% of non-empty `NameType`): <em>Němci, Němců, Němec, Češi, Frank, Němce, Čech, Srby, Čechů, Čechy</em>
* `Giv,Oth` (57; 0% of non-empty `NameType`): <em>Siouxsie, Jitka, Dagmar, Felicia, Lilly, Grada, Justin, Konstruktiva, Diane, Flora</em>
* `Nat` (465; 2% of non-empty `NameType`): <em>Američané, Američan, Rusové, Japonci, Američanů, Francouzi, Američany, Britové, Židů, Sověti</em>
* `Oth` (3145; 12% of non-empty `NameType`): <em>ODS, LN, Sony, OSN, NATO, CNN, Quantum, Farmers, Vánoce, ČSSD</em>

<table>
  <tr><th>Paradigm <i>Austin</i></th><th><tt>Geo</tt></th><th><tt>Giv</tt></th><th><tt>Oth</tt></th></tr>
  <tr><td><tt><tt><a href="cs_pdtc-feat-Animacy.html">Animacy</a></tt><tt>=Anim</tt></tt></td><td></td><td><em>Austin</em></td><td></td></tr>
  <tr><td><tt><tt><a href="cs_pdtc-feat-Animacy.html">Animacy</a></tt><tt>=Inan</tt></tt></td><td><em>Austin</em></td><td></td><td><em>Austin</em></td></tr>
</table>

`NameType` seems to be **lexical feature** of `PROPN`. 99% lemmas (7237) occur only with one value of `NameType`.

### `ADJ`

790 <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> tokens (1% of all `ADJ` tokens) have a non-empty value of `NameType`.

The most frequent other feature values with which `ADJ` and `NameType` co-occurred: <tt><a href="cs_pdtc-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (790; 100%), <tt><a href="cs_pdtc-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (790; 100%), <tt><a href="cs_pdtc-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (790; 100%), <tt><a href="cs_pdtc-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (790; 100%), <tt><a href="cs_pdtc-feat-Number.html">Number</a></tt><tt>=Sing</tt> (636; 81%), <tt><a href="cs_pdtc-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (397; 50%).

`ADJ` tokens may have the following values of `NameType`:

* `Geo,Giv` (1; 0% of non-empty `NameType`): <em>Martininy</em>
* `Giv` (788; 100% of non-empty `NameType`): <em>Jonesův, Karlovy, Jonesova, Bushova, Bushovy, Eukleidových, Nobelovy, Masarykově, Karlových, Courterově</em>
* `Nat` (1; 0% of non-empty `NameType`): <em>Američanovy</em>

`NameType` seems to be **lexical feature** of `ADJ`. 100% lemmas (373) occur only with one value of `NameType`.

## Relations with Agreement in `NameType`

The 10 most frequent relations where parent and child node agree in `NameType`:
<tt>PROPN --[<tt><a href="cs_pdtc-dep-flat.html">flat</a></tt>]--> PROPN</tt> (2711; 94%),
<tt>PROPN --[<tt><a href="cs_pdtc-dep-conj.html">conj</a></tt>]--> PROPN</tt> (1483; 89%),
<tt>PROPN --[<tt><a href="cs_pdtc-dep-flat.html">flat</a></tt>]--> ADJ</tt> (75; 100%),
<tt>PROPN --[<tt><a href="cs_pdtc-dep-orphan.html">orphan</a></tt>]--> PROPN</tt> (36; 92%),
<tt>ADJ --[<tt><a href="cs_pdtc-dep-flat.html">flat</a></tt>]--> PROPN</tt> (12; 100%),
<tt>PROPN --[<tt><a href="cs_pdtc-dep-nsubj.html">nsubj</a></tt>]--> PROPN</tt> (12; 63%),
<tt>PROPN --[<tt><a href="cs_pdtc-dep-appos.html">appos</a></tt>]--> PROPN</tt> (11; 79%),
<tt>ADJ --[<tt><a href="cs_pdtc-dep-conj.html">conj</a></tt>]--> ADJ</tt> (9; 90%),
<tt>PROPN --[<tt><a href="cs_pdtc-dep-obl.html">obl</a></tt>]--> PROPN</tt> (5; 71%),
<tt>PROPN --[<tt><a href="cs_pdtc-dep-nmod.html">nmod</a></tt>]--> ADJ</tt> (2; 100%).

