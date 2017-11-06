---
layout: base
title:  'Statistics of Case in UD_Romanian'
udver: '2'
---

## Treebank Statistics: UD_Romanian: Features: `Case`

This feature is universal.
It occurs with 5 different values: `Acc`, `Dat`, `Gen`, `Nom`, `Voc`.
Some words have combined values of the feature; 2 combinations have been observed: `Acc|Nom`, `Dat|Gen`.

93638 tokens (43%) have a non-empty value of `Case`.
15034 types (48%) occur at least once with a non-empty value of `Case`.
7826 lemmas (45%) occur at least once with a non-empty value of `Case`.
The feature is used with 7 part-of-speech tags: <tt><a href="ro-pos-NOUN.html">NOUN</a></tt> (36870; 17% instances), <tt><a href="ro-pos-ADP.html">ADP</a></tt> (30635; 14% instances), <tt><a href="ro-pos-PRON.html">PRON</a></tt> (11687; 5% instances), <tt><a href="ro-pos-DET.html">DET</a></tt> (7952; 4% instances), <tt><a href="ro-pos-ADJ.html">ADJ</a></tt> (5725; 3% instances), <tt><a href="ro-pos-NUM.html">NUM</a></tt> (457; 0% instances), <tt><a href="ro-pos-PROPN.html">PROPN</a></tt> (312; 0% instances).

### `NOUN`

36870 <tt><a href="ro-pos-NOUN.html">NOUN</a></tt> tokens (68% of all `NOUN` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `NOUN` and `Case` co-occurred: <tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt> (29976; 81%), <tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (27182; 74%), <tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt> (27002; 73%).

`NOUN` tokens may have the following values of `Case`:

* `Acc,Nom` (28795; 78% of non-empty `Case`): <em>cazul, conformitate, timpul, statele, Comisia, parte, față, cadrul, partea, fața</em>
* `Dat,Gen` (8027; 22% of non-empty `Case`): <em>comisiei, consiliului, Uniunii, comunității, tratamentului, partidului, statului, țării, produselor, statelor</em>
* `Voc` (48; 0% of non-empty `Case`): <em>domnule, Marino, Graham, Porcule, tovarășe, Labrador, bowling, doamne, Adonis, Benjamin</em>
* `EMPTY` (17428): <em>ani, timp, loc, membre, mod, acord, art., b, lucru, a.</em>

<table>
  <tr><th>Paradigm <i>domn</i></th><th><tt>Acc,Nom</tt></th><th><tt>Dat,Gen</tt></th><th><tt>Voc</tt></th></tr>
  <tr><td><tt><tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>domnul</em></td><td><em>domnului</em></td><td><em>domnule</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>domnii</em></td><td><em>domnilor</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td><em>doamne, Domne</em></td></tr>
</table>

### `ADP`

30635 <tt><a href="ro-pos-ADP.html">ADP</a></tt> tokens (100% of all `ADP` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `ADP` and `Case` co-occurred: <tt><a href="ro-feat-AdpType.html">AdpType</a></tt><tt>=Prep</tt> (30635; 100%).

`ADP` tokens may have the following values of `Case`:

* `Acc` (30220; 99% of non-empty `Case`): <em>de, în, la, cu, din, pe, pentru, prin, după, într-</em>
* `Dat` (115; 0% of non-empty `Case`): <em>conform, datorită, potrivit, aidoma</em>
* `Gen` (300; 1% of non-empty `Case`): <em>asupra, împotriva, deasupra, înaintea, dinaintea, contra, împrejurul, înlăuntrul, -mpotriva, jurul</em>
* `EMPTY` (1): <em>pre</em>

`Case` seems to be **lexical feature** of `ADP`. 100% lemmas (55) occur only with one value of `Case`.

### `PRON`

11687 <tt><a href="ro-pos-PRON.html">PRON</a></tt> tokens (99% of all `PRON` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PRON` and `Case` co-occurred: <tt><a href="ro-feat-Person.html">Person</a></tt><tt>=3</tt> (10626; 91%), <tt><a href="ro-feat-Variant.html">Variant</a></tt><tt>=EMPTY</tt> (9628; 82%), <tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (8550; 73%), <tt><a href="ro-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (7756; 66%), <tt><a href="ro-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (7097; 61%), <tt><a href="ro-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (6676; 57%), <tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Weak</tt> (6194; 53%).

`PRON` tokens may have the following values of `Case`:

* `Acc` (4916; 42% of non-empty `Case`): <em>se, s-, o, -l, îl, le, -se, mă, ne, te</em>
* `Acc,Nom` (5015; 43% of non-empty `Case`): <em>care, ce, el, ea, ceea, aceasta, acestea, unul, una, ei</em>
* `Dat` (1354; 12% of non-empty `Case`): <em>își, -și, și-, îi, i, -i, i-, le, -mi, -ți</em>
* `Dat,Gen` (317; 3% of non-empty `Case`): <em>acestuia, acestora, celor, acesteia, lui, cărora, căruia, căreia, celui, tuturor</em>
* `Nom` (85; 1% of non-empty `Case`): <em>eu, tu</em>
* `EMPTY` (156): <em>dumneavoastră, lui, lor, sale, ș.a., nostru, dvs., dumnealui, săi, său</em>

<table>
  <tr><th>Paradigm <i>el</i></th><th><tt>Acc,Nom</tt></th><th><tt>Dat,Gen</tt></th><th><tt>Acc</tt></th><th><tt>Dat</tt></th></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Strong</tt></tt></td><td><em>el</em></td><td><em>lui</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Weak</tt></tt></td><td></td><td></td><td><em>îl</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Weak</tt>|<tt><a href="ro-feat-Variant.html">Variant</a></tt><tt>=Short</tt></tt></td><td></td><td></td><td><em>-l, l-, l</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Strong</tt></tt></td><td><em>ei</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Weak</tt></tt></td><td></td><td></td><td><em>îi</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Weak</tt>|<tt><a href="ro-feat-Variant.html">Variant</a></tt><tt>=Short</tt></tt></td><td></td><td></td><td><em>-i, i-</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Strong</tt></tt></td><td><em>ea</em></td><td><em>ei</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Weak</tt></tt></td><td></td><td></td><td><em>o</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Weak</tt>|<tt><a href="ro-feat-Variant.html">Variant</a></tt><tt>=Short</tt></tt></td><td></td><td></td><td><em>-o</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Strong</tt></tt></td><td><em>ele</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Weak</tt></tt></td><td></td><td></td><td><em>le</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Weak</tt>|<tt><a href="ro-feat-Variant.html">Variant</a></tt><tt>=Short</tt></tt></td><td></td><td></td><td><em>le-, -le</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Weak</tt></tt></td><td></td><td></td><td></td><td><em>îi, i</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Weak</tt>|<tt><a href="ro-feat-Variant.html">Variant</a></tt><tt>=Short</tt></tt></td><td></td><td></td><td></td><td><em>-i, i-</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Strong</tt></tt></td><td></td><td><em>lor</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Weak</tt></tt></td><td></td><td></td><td></td><td><em>le, li</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ro-feat-Strength.html">Strength</a></tt><tt>=Weak</tt>|<tt><a href="ro-feat-Variant.html">Variant</a></tt><tt>=Short</tt></tt></td><td></td><td></td><td></td><td><em>le-, -le, -li</em></td></tr>
</table>

### `DET`

7952 <tt><a href="ro-pos-DET.html">DET</a></tt> tokens (66% of all `DET` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `DET` and `Case` co-occurred: <tt><a href="ro-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (7757; 98%), <tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt> (6402; 81%), <tt><a href="ro-feat-Position.html">Position</a></tt><tt>=EMPTY</tt> (6060; 76%), <tt><a href="ro-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (5687; 72%), <tt><a href="ro-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (5281; 66%).

`DET` tokens may have the following values of `Case`:

* `Acc,Nom` (6396; 80% of non-empty `Case`): <em>o, un, acest, cel, orice, toate, această, aceste, cele, alte</em>
* `Dat,Gen` (1556; 20% of non-empty `Case`): <em>unei, lui, unui, unor, acestor, acestei, acestui, tuturor, celor, altor</em>
* `EMPTY` (4078): <em>a, al, ale, lui, lor, ei, multe, său, ai, anumite</em>

<table>
  <tr><th>Paradigm <i>un</i></th><th><tt>Acc,Nom</tt></th><th><tt>Dat,Gen</tt></th></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>un, -un</em></td><td><em>unui</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ro-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="ro-feat-Position.html">Position</a></tt><tt>=Prenom</tt></tt></td><td><em>unii</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>o, -o</em></td><td><em>unei</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ro-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="ro-feat-Position.html">Position</a></tt><tt>=Prenom</tt></tt></td><td><em>unele</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>unor</em></td></tr>
</table>

### `ADJ`

5725 <tt><a href="ro-pos-ADJ.html">ADJ</a></tt> tokens (38% of all `ADJ` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `ADJ` and `Case` co-occurred: <tt><a href="ro-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (5709; 100%), <tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt> (5523; 96%), <tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt> (5299; 93%), <tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Ind</tt> (4843; 85%).

`ADJ` tokens may have the following values of `Case`:

* `Acc,Nom` (4613; 81% of non-empty `Case`): <em>mare, prezentul, europeană, prezenta, mică, română, maximă, necesară, românească, bună</em>
* `Dat,Gen` (1112; 19% of non-empty `Case`): <em>europene, prezentului, prezentei, naționale, române, publice, românești, umane, comunitare, politice</em>
* `EMPTY` (9504): <em>asemenea, mare, nou, necesare, mari, european, general, mici, vechi, chimice</em>

<table>
  <tr><th>Paradigm <i>mare</i></th><th><tt>Acc,Nom</tt></th><th><tt>Dat,Gen</tt></th></tr>
  <tr><td><tt><tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>marele</em></td><td><em>marelui</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>marii</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>marea</em></td><td><em>Marii</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>marile</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>marilor</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>mare</em></td><td><em>mari</em></td></tr>
</table>

### `NUM`

457 <tt><a href="ro-pos-NUM.html">NUM</a></tt> tokens (8% of all `NUM` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `NUM` and `Case` co-occurred: <tt><a href="ro-feat-NumForm.html">NumForm</a></tt><tt>=Word</tt> (409; 89%), <tt><a href="ro-feat-NumType.html">NumType</a></tt><tt>=Ord</tt> (317; 69%), <tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt> (270; 59%), <tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt> (258; 56%).

`NUM` tokens may have the following values of `Case`:

* `Acc,Nom` (411; 90% of non-empty `Case`): <em>primul, prima, primele, milioane, ambele, ultimii, ultimul, unu, ultimele, miliarde</em>
* `Dat,Gen` (46; 10% of non-empty `Case`): <em>primului, primei, primelor, ambelor, ultimelor, ultimei, ultimilor, primilor, prime, sute</em>
* `EMPTY` (5097): <em>1, 2, 3, două, 4, trei, 5, 6, doi, 7</em>

<table>
  <tr><th>Paradigm <i>prim</i></th><th><tt>Acc,Nom</tt></th><th><tt>Dat,Gen</tt></th></tr>
  <tr><td><tt><tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>primul</em></td><td><em>primului</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>primii</em></td><td><em>primilor</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>prima</em></td><td><em>primei</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>primele</em></td><td><em>primelor</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ro-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>primă</em></td><td><em>prime</em></td></tr>
</table>

### `PROPN`

312 <tt><a href="ro-pos-PROPN.html">PROPN</a></tt> tokens (5% of all `PROPN` tokens) have a non-empty value of `Case`.

`PROPN` tokens may have the following values of `Case`:

* `Acc,Nom` (37; 12% of non-empty `Case`): <em>Banatul, Iașii, Israelul, Carpații, Contemporanul, Dunărea, Ierusalimul, Irakul, Brașovul, Brâncovanul</em>
* `Dat,Gen` (275; 88% of non-empty `Case`): <em>României, Moldovei, Dunării, Europei, Franței, Italiei, Norvegiei, Rusiei, Ungariei, Germaniei</em>
* `EMPTY` (5581): <em>România, Winston, București, Timișoara, Iași, Ion, Paris, Alexandru, O'Brien, Moldova</em>

<table>
  <tr><th>Paradigm <i>București</i></th><th><tt>Acc,Nom</tt></th><th><tt>Dat,Gen</tt></th></tr>
  <tr><td><tt></tt></td><td><em>Bucureștiul</em></td><td><em>Bucureștiului</em></td></tr>
</table>

`Case` seems to be **lexical feature** of `PROPN`. 93% lemmas (87) occur only with one value of `Case`.

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`:
<tt>NOUN --[<tt><a href="ro-dep-conj.html">conj</a></tt>]--> NOUN</tt> (1942; 76%),
<tt>ADP --[<tt><a href="ro-dep-fixed.html">fixed</a></tt>]--> ADP</tt> (1284; 99%),
<tt>ADJ --[<tt><a href="ro-dep-conj.html">conj</a></tt>]--> ADJ</tt> (209; 91%),
<tt>ADJ --[<tt><a href="ro-dep-nsubj.html">nsubj</a></tt>]--> NOUN</tt> (196; 53%),
<tt>NOUN --[<tt><a href="ro-dep-nsubj.html">nsubj</a></tt>]--> NOUN</tt> (156; 51%),
<tt>PRON --[<tt><a href="ro-dep-fixed.html">fixed</a></tt>]--> PRON</tt> (66; 100%),
<tt>NOUN --[<tt><a href="ro-dep-fixed.html">fixed</a></tt>]--> ADJ</tt> (56; 73%),
<tt>NOUN --[<tt><a href="ro-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (56; 55%),
<tt>NOUN --[<tt><a href="ro-dep-flat.html">flat</a></tt>]--> ADJ</tt> (55; 80%),
<tt>NOUN --[<tt><a href="ro-dep-conj.html">conj</a></tt>]--> PRON</tt> (45; 64%).

