

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This feature is universal.
It occurs with 5 different values: `Acc`, `Dat`, `Gen`, `Nom`, `Voc`.
Some words have combined values of the feature; 2 combinations have been observed: `Acc|Nom`, `Dat|Gen`.

93527 tokens (43%) have a non-empty value of `Case`.
15044 types (48%) occur at least once with a non-empty value of `Case`.
7831 lemmas (45%) occur at least once with a non-empty value of `Case`.
The feature is used with 7 part-of-speech tags: [ro-pos/NOUN]() (36856; 17% instances), [ro-pos/ADP]() (30470; 14% instances), [ro-pos/PRON]() (11743; 5% instances), [ro-pos/DET]() (7951; 4% instances), [ro-pos/ADJ]() (5747; 3% instances), [ro-pos/NUM]() (456; 0% instances), [ro-pos/PROPN]() (304; 0% instances).

### `NOUN`

36856 [ro-pos/NOUN]() tokens (68% of all `NOUN` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `NOUN` and `Case` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (29984; 81%), <tt><a href="Definite.html">Definite</a>=Def</tt> (27173; 74%), <tt><a href="Gender.html">Gender</a>=Fem</tt> (26994; 73%).

`NOUN` tokens may have the following values of `Case`:

* `Acc,Nom` (28798; 78% of non-empty `Case`): <em>cazul, conformitate, timpul, statele, Comisia, parte, față, cadrul, partea, fața</em>
* `Dat,Gen` (8009; 22% of non-empty `Case`): <em>comisiei, consiliului, Uniunii, comunității, tratamentului, partidului, statului, țării, produselor, statelor</em>
* `Voc` (49; 0% of non-empty `Case`): <em>domnule, Marino, Graham, Porcule, tovarășe, Labrador, bowling, doamne, Adonis, Benjamin</em>
* `EMPTY` (17351): <em>ani, timp, loc, membre, mod, acord, art., b, lucru, a.</em>

<table>
  <tr><th>Paradigm <i>domn</i></th><th><tt>Acc,Nom</tt></th><th><tt>Dat,Gen</tt></th><th><tt>Voc</tt></th></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing</tt></td><td><em>domnul</em></td><td><em>domnului</em></td><td><em>domnule</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Plur</tt></td><td><em>domnii</em></td><td><em>domnilor</em></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td></td><td><em>doamne, Domne</em></td></tr>
</table>

### `ADP`

30470 [ro-pos/ADP]() tokens (100% of all `ADP` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `ADP` and `Case` co-occurred: <tt><a href="AdpType.html">AdpType</a>=Prep</tt> (30470; 100%).

`ADP` tokens may have the following values of `Case`:

* `Acc` (30056; 99% of non-empty `Case`): <em>de, în, la, cu, din, pe, pentru, prin, după, într-</em>
* `Dat` (115; 0% of non-empty `Case`): <em>conform, datorită, potrivit, aidoma</em>
* `Gen` (299; 1% of non-empty `Case`): <em>asupra, împotriva, deasupra, înaintea, dinaintea, contra, împrejurul, înlăuntrul, -mpotriva, jurul</em>
* `EMPTY` (1): <em>pre</em>

`Case` seems to be **lexical feature** of `ADP`. 100% lemmas (53) occur only with one value of `Case`.

### `PRON`

11743 [ro-pos/PRON]() tokens (99% of all `PRON` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PRON` and `Case` co-occurred: <tt><a href="Person.html">Person</a>=3</tt> (10682; 91%), <tt><a href="Variant.html">Variant</a>=EMPTY</tt> (9678; 82%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (8592; 73%), <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (7812; 67%), <tt><a href="PronType.html">PronType</a>=Prs</tt> (7105; 61%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (6716; 57%), <tt><a href="Strength.html">Strength</a>=Weak</tt> (6199; 53%).

`PRON` tokens may have the following values of `Case`:

* `Acc` (4922; 42% of non-empty `Case`): <em>se, s-, o, -l, îl, le, -se, mă, ne, te</em>
* `Acc,Nom` (5066; 43% of non-empty `Case`): <em>care, ce, el, ea, ceea, aceasta, unul, acestea, una, ei</em>
* `Dat` (1353; 12% of non-empty `Case`): <em>își, -și, și-, îi, i, -i, i-, le, -mi, -ți</em>
* `Dat,Gen` (317; 3% of non-empty `Case`): <em>acestuia, acestora, celor, acesteia, lui, cărora, căruia, căreia, celui, tuturor</em>
* `Nom` (85; 1% of non-empty `Case`): <em>eu, tu</em>
* `EMPTY` (154): <em>dumneavoastră, lui, lor, sale, ș.a., nostru, dvs., său, dumnealui, săi</em>

<table>
  <tr><th>Paradigm <i>el</i></th><th><tt>Acc,Nom</tt></th><th><tt>Dat,Gen</tt></th><th><tt>Acc</tt></th><th><tt>Dat</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="Strength.html">Strength</a>=Strong</tt></td><td><em>el</em></td><td><em>lui</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="Strength.html">Strength</a>=Weak</tt></td><td></td><td></td><td><em>îl</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="Strength.html">Strength</a>=Weak|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td></td><td><em>-l, l-, l</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="Strength.html">Strength</a>=Strong</tt></td><td><em>ei</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="Strength.html">Strength</a>=Weak</tt></td><td></td><td></td><td><em>îi</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="Strength.html">Strength</a>=Weak|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td></td><td><em>-i, i-</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="Strength.html">Strength</a>=Strong</tt></td><td><em>ea</em></td><td><em>ei</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="Strength.html">Strength</a>=Weak</tt></td><td></td><td></td><td><em>o</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="Strength.html">Strength</a>=Weak|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td></td><td><em>-o</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="Strength.html">Strength</a>=Strong</tt></td><td><em>ele</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="Strength.html">Strength</a>=Weak</tt></td><td></td><td></td><td><em>le</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="Strength.html">Strength</a>=Weak|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td></td><td><em>le-, -le</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Strength.html">Strength</a>=Weak</tt></td><td></td><td></td><td></td><td><em>îi, i</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Strength.html">Strength</a>=Weak|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td></td><td></td><td><em>-i, i-</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Strength.html">Strength</a>=Strong</tt></td><td></td><td><em>lor</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Strength.html">Strength</a>=Weak</tt></td><td></td><td></td><td></td><td><em>le, li</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Strength.html">Strength</a>=Weak|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td></td><td></td><td><em>le-, -le, -li</em></td></tr>
</table>

### `DET`

7951 [ro-pos/DET]() tokens (66% of all `DET` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `DET` and `Case` co-occurred: <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (7756; 98%), <tt><a href="Number.html">Number</a>=Sing</tt> (6403; 81%), <tt><a href="Position.html">Position</a>=EMPTY</tt> (6055; 76%), <tt><a href="PronType.html">PronType</a>=Ind</tt> (5684; 71%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (5282; 66%).

`DET` tokens may have the following values of `Case`:

* `Acc,Nom` (6392; 80% of non-empty `Case`): <em>o, un, acest, cel, orice, toate, această, aceste, cele, alte</em>
* `Dat,Gen` (1559; 20% of non-empty `Case`): <em>lui, unei, unui, unor, acestor, acestei, acestui, tuturor, altor, celor</em>
* `EMPTY` (4072): <em>a, al, ale, lui, lor, ei, multe, său, ai, anumite</em>

<table>
  <tr><th>Paradigm <i>un</i></th><th><tt>Acc,Nom</tt></th><th><tt>Dat,Gen</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>un, -un</em></td><td><em>unui</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Position.html">Position</a>=Prenom</tt></td><td><em>unii</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td><em>o, -o</em></td><td><em>unei</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Position.html">Position</a>=Prenom</tt></td><td><em>unele</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>unor</em></td></tr>
</table>

### `ADJ`

5747 [ro-pos/ADJ]() tokens (37% of all `ADJ` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `ADJ` and `Case` co-occurred: <tt><a href="Degree.html">Degree</a>=Pos</tt> (5731; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (5517; 96%), <tt><a href="Gender.html">Gender</a>=Fem</tt> (5308; 92%), <tt><a href="Definite.html">Definite</a>=Ind</tt> (4842; 84%).

`ADJ` tokens may have the following values of `Case`:

* `Acc,Nom` (4618; 80% of non-empty `Case`): <em>mare, prezentul, europeană, prezenta, mică, română, maximă, necesară, românească, bună</em>
* `Dat,Gen` (1129; 20% of non-empty `Case`): <em>europene, prezentului, prezentei, naționale, române, publice, românești, umane, comunitare, politice</em>
* `EMPTY` (9621): <em>asemenea, mare, nou, necesare, mari, european, general, vechi, mici, chimice</em>

<table>
  <tr><th>Paradigm <i>mare</i></th><th><tt>Acc,Nom</tt></th><th><tt>Dat,Gen</tt></th></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>marele</em></td><td><em>marelui</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td><em>marii</em></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td><em>marea</em></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td><em>marile</em></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>marilor</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td><em>mare</em></td><td><em>mari</em></td></tr>
</table>

### `NUM`

456 [ro-pos/NUM]() tokens (8% of all `NUM` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `NUM` and `Case` co-occurred: <tt><a href="NumForm.html">NumForm</a>=Word</tt> (408; 89%), <tt><a href="NumType.html">NumType</a>=Ord</tt> (317; 70%), <tt><a href="Gender.html">Gender</a>=Fem</tt> (270; 59%), <tt><a href="Number.html">Number</a>=Sing</tt> (257; 56%).

`NUM` tokens may have the following values of `Case`:

* `Acc,Nom` (410; 90% of non-empty `Case`): <em>primul, prima, primele, milioane, ambele, ultimii, ultimul, unu, ultimele, miliarde</em>
* `Dat,Gen` (46; 10% of non-empty `Case`): <em>primului, primei, primelor, ambelor, ultimelor, ultimei, ultimilor, primilor, prime, sute</em>
* `EMPTY` (5083): <em>1, 2, 3, două, 4, trei, 5, 6, doi, 7</em>

<table>
  <tr><th>Paradigm <i>prim</i></th><th><tt>Acc,Nom</tt></th><th><tt>Dat,Gen</tt></th></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>primul</em></td><td><em>primului</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td><em>primii</em></td><td><em>primilor</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td><em>prima</em></td><td><em>primei</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td><em>primele</em></td><td><em>primelor</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td><em>primă</em></td><td><em>prime</em></td></tr>
</table>

### `PROPN`

304 [ro-pos/PROPN]() tokens (5% of all `PROPN` tokens) have a non-empty value of `Case`.

`PROPN` tokens may have the following values of `Case`:

* `Acc,Nom` (34; 11% of non-empty `Case`): <em>Banatul, Iașii, Israelul, Carpații, Contemporanul, Dunărea, Ierusalimul, Irakul, Brașovul, Brâncovanul</em>
* `Dat,Gen` (270; 89% of non-empty `Case`): <em>României, Moldovei, Dunării, Europei, Franței, Italiei, Norvegiei, Rusiei, Ungariei, Germaniei</em>
* `EMPTY` (5619): <em>România, Winston, București, Timișoara, Iași, CEE, Ion, Paris, Alexandru, O'Brien</em>

<table>
  <tr><th>Paradigm <i>București</i></th><th><tt>Acc,Nom</tt></th><th><tt>Dat,Gen</tt></th></tr>
  <tr><td><tt></tt></td><td><em>Bucureștiul</em></td><td><em>Bucureștiului</em></td></tr>
</table>

`Case` seems to be **lexical feature** of `PROPN`. 92% lemmas (79) occur only with one value of `Case`.

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`:
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (1938; 76%),
<tt>ADP --[<a href="../dep/mwe.html">mwe</a>]--> ADP</tt> (1269; 99%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (202; 91%),
<tt>ADJ --[<a href="../dep/nsubj.html">nsubj</a>]--> NOUN</tt> (195; 53%),
<tt>NOUN --[<a href="../dep/nsubj.html">nsubj</a>]--> NOUN</tt> (156; 51%),
<tt>NOUN --[<a href="../dep/nsubj.html">nsubj</a>]--> PRON</tt> (60; 57%),
<tt>NOUN --[<a href="../dep/mwe.html">mwe</a>]--> ADJ</tt> (57; 72%),
<tt>PRON --[<a href="../dep/mwe.html">mwe</a>]--> PRON</tt> (56; 100%),
<tt>NOUN --[<a href="../dep/name.html">name</a>]--> ADJ</tt> (55; 82%),
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (44; 66%).

