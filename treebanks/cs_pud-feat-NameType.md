---
layout: base
title:  'Statistics of NameType in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Features: `NameType`

This feature is language-specific.
It occurs with 7 different values: `Com`, `Geo`, `Giv`, `Nat`, `Oth`, `Pro`, `Sur`.
Some words have combined values of the feature; 5 combinations have been observed: `Com|Geo`, `Com|Pro`, `Geo|Giv`, `Geo|Giv|Sur`, `Giv|Sur`.

1135 tokens (6%) have a non-empty value of `NameType`.
945 types (12%) occur at least once with a non-empty value of `NameType`.
830 lemmas (16%) occur at least once with a non-empty value of `NameType`.
The feature is used with 3 part-of-speech tags: [PROPN](cs_pud-pos-PROPN.html) (1078; 6% instances), [ADJ](cs_pud-pos-ADJ.html) (56; 0% instances), [ADP](cs_pud-pos-ADP.html) (1; 0% instances).

### `PROPN`

1078 [PROPN](cs_pud-pos-PROPN.html) tokens (99% of all `PROPN` tokens) have a non-empty value of `NameType`.

The most frequent other feature values with which `PROPN` and `NameType` co-occurred: <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (1078; 100%), <tt><a href="Foreign.html">Foreign</a>=EMPTY</tt> (967; 90%), <tt><a href="Number.html">Number</a>=Sing</tt> (829; 77%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (610; 57%).

`PROPN` tokens may have the following values of `NameType`:

* `Com` (111; 10% of non-empty `NameType`): USA Čching BBC CNN EU Aviva Company Facebooku Investors Multi
* `Com,Geo` (1; 0% of non-empty `NameType`): Scotland
* `Com,Pro` (3; 0% of non-empty `NameType`): Ford GM
* `Geo` (386; 36% of non-empty `NameType`): Čína Francie Albánie Británii Danevirke Evropě Itálii Ameriky Asii Británie
* `Geo,Giv` (3; 0% of non-empty `NameType`): Thrákie Thrákii Thrákií
* `Giv` (195; 18% of non-empty `NameType`): Donald Richarda Augustus Donalda František George González Jasmína Ježíše Joseph
* `Giv,Sur` (5; 0% of non-empty `NameType`): James Michael Michala Stephen Štěpán
* `Nat` (41; 4% of non-empty `NameType`): Australané Mayové Číňanů Řekové Židů Aboriginci Achájů Američan Američané Athéňanů
* `Oth` (2; 0% of non-empty `NameType`): Cup Cupu
* `Pro` (19; 2% of non-empty `NameType`): Endurance Dead Greco Loving MahaNakhon Mate Nectar Select Simple Slack
* `Sur` (312; 29% of non-empty `NameType`): Clintonové Trump Trumpa Bluntová Mišima Seagal Winstone Wright Šen Aldrin

<table>
  <tr><th>Paradigm <i>Andy</i></th><th><tt>Geo</tt></th><th><tt>Giv</tt></th></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Dat|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td>Andymu</td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Gen|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td>Andyho</td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td>Andy</td><td></td></tr>
</table>

`NameType` seems to be **lexical feature** of `PROPN`. 99% lemmas (769) occur only with one value of `NameType`.

### `ADJ`

56 [ADJ](cs_pud-pos-ADJ.html) tokens (2% of all `ADJ` tokens) have a non-empty value of `NameType`.

The most frequent other feature values with which `ADJ` and `NameType` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (56; 100%), <tt><a href="Voice.html">Voice</a>=EMPTY</tt> (56; 100%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (41; 73%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (34; 61%), <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (34; 61%).

`ADJ` tokens may have the following values of `NameType`:

* `Com` (5; 9% of non-empty `NameType`): National American Die
* `Geo` (12; 21% of non-empty `NameType`): New San Beverly Kapského Los Pearl Severní Silicon South Wall
* `Giv` (10; 18% of non-empty `NameType`): Saint Alexandrově Caesarovi Cottonovy Césarovo Dareiův Edgarovy Germaininých Kimově
* `Pro` (2; 4% of non-empty `NameType`): El World
* `Sur` (27; 48% of non-empty `NameType`): achaimenovské Achaimenovskou Achaimenovská Bergeronova Berijovo Blochových Carangiina Dossovy Erdoganovu Graftonova

`NameType` seems to be **lexical feature** of `ADJ`. 100% lemmas (49) occur only with one value of `NameType`.

### `ADP`

1 [ADP](cs_pud-pos-ADP.html) tokens (0% of all `ADP` tokens) have a non-empty value of `NameType`.

The most frequent other feature values with which `ADP` and `NameType` co-occurred: <tt><a href="AdpType.html">AdpType</a>=Prep</tt> (1; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (1; 100%).

`ADP` tokens may have the following values of `NameType`:

* `Geo,Giv,Sur` (1; 100% of non-empty `NameType`): Di

## Relations with Agreement in `NameType`

The 10 most frequent relations where parent and child node agree in `NameType`:
<tt>PROPN --[<a href="../dep/conj.html">conj</a>]--> PROPN</tt> (52; 88%),
<tt>ADJ --[<a href="../dep/flat.html">flat</a>]--> PROPN</tt> (14; 70%),
<tt>PROPN --[<a href="../dep/nmod.html">nmod</a>]--> PROPN</tt> (5; 63%),
<tt>PROPN --[<a href="../dep/appos.html">appos</a>]--> PROPN</tt> (4; 67%),
<tt>PROPN --[<a href="../dep/compound.html">compound</a>]--> PROPN</tt> (1; 100%).

