

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This feature is universal.
It occurs with 5 different values: `Acc`, `Dat`, `Gen`, `Nom`, `Voc`.
Some words have combined values of the feature; 2 combinations have been observed: `Acc|Nom`, `Dat|Gen`.

59502 tokens (41%) have a non-empty value of `Case`.
11393 types (48%) occur at least once with a non-empty value of `Case`.
6397 lemmas (47%) occur at least once with a non-empty value of `Case`.
The feature is used with 7 part-of-speech tags: [ro-pos/NOUN]() (24941; 17% instances), [ro-pos/ADP]() (17075; 12% instances), [ro-pos/PRON]() (8081; 6% instances), [ro-pos/DET]() (5106; 4% instances), [ro-pos/ADJ]() (3885; 3% instances), [ro-pos/NUM]() (260; 0% instances), [ro-pos/PROPN]() (154; 0% instances).

### `NOUN`

24941 [ro-pos/NOUN]() tokens (70% of all `NOUN` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `NOUN` and `Case` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (20390; 82%), <tt><a href="Definite.html">Definite</a>=Def</tt> (17760; 71%), <tt><a href="Gender.html">Gender</a>=Fem</tt> (17706; 71%).

`NOUN` tokens may have the following values of `Case`:

* `Acc,Nom` (19799; 79% of non-empty `Case`): <em>cazul, conformitate, Comisia, statele, timpul, parte, fața, urmă, medicul, față</em>
* `Dat,Gen` (5113; 21% of non-empty `Case`): <em>comisiei, Consiliului, produselor, comunității, partidului, tratamentului, lucrătorilor, Uniunii, acțiunilor, medicului</em>
* `Voc` (29; 0% of non-empty `Case`): <em>domnule, Porcule, tovarășe, doamne, domnilor, Barosanul, Dino, Domne, Locotenente, Murgule</em>
* `EMPTY` (10672): <em>art., ani, timp, a., loc, b, nr., acord, ianuarie, fel</em>

<table>
  <tr><th>Paradigm <i>domn</i></th><th><tt>Acc,Nom</tt></th><th><tt>Dat,Gen</tt></th><th><tt>Voc</tt></th></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing</tt></td><td><em>domnul</em></td><td><em>domnului</em></td><td><em>domnule</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Plur</tt></td><td><em>domnii</em></td><td></td><td><em>domnilor</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Number.html">Number</a>=Sing</tt></td><td><em>domnul</em></td><td></td><td><em>doamne, Domne</em></td></tr>
</table>

### `ADP`

17075 [ro-pos/ADP]() tokens (85% of all `ADP` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `ADP` and `Case` co-occurred: <tt><a href="AdpType.html">AdpType</a>=Prep</tt> (17075; 100%).

`ADP` tokens may have the following values of `Case`:

* `Acc` (16870; 99% of non-empty `Case`): <em>de, în, la, cu, din, pe, pentru, prin, după, într-</em>
* `Dat` (40; 0% of non-empty `Case`): <em>conform, datorită, potrivit, aidoma</em>
* `Gen` (165; 1% of non-empty `Case`): <em>asupra, împotriva, deasupra, înaintea, dinaintea, -mpotriva, contra, împrejurul, în_jurul, îndărătul</em>
* `EMPTY` (3030): <em>de, în, la, pentru, din, cu, pe, prin, conform, fără</em>

`Case` seems to be **lexical feature** of `ADP`. 100% lemmas (59) occur only with one value of `Case`.

### `PRON`

8081 [ro-pos/PRON]() tokens (99% of all `PRON` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PRON` and `Case` co-occurred: <tt><a href="Person.html">Person</a>=3</tt> (7317; 91%), <tt><a href="Variant.html">Variant</a>=EMPTY</tt> (6836; 85%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (5799; 72%), <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (5519; 68%), <tt><a href="PronType.html">PronType</a>=Prs</tt> (5036; 62%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (4369; 54%), <tt><a href="Strength.html">Strength</a>=Weak</tt> (4302; 53%).

`PRON` tokens may have the following values of `Case`:

* `Acc` (3359; 42% of non-empty `Case`): <em>se, s-, o, -l, îl, le, vă, -se, mă, ne</em>
* `Acc,Nom` (3326; 41% of non-empty `Case`): <em>care, ce, el, ea, ceea, unul, aceasta, acestea, toate, acesta</em>
* `Dat` (998; 12% of non-empty `Case`): <em>își, -și, îi, i, -i, și-, i-, -mi, le, -ți</em>
* `Dat,Gen` (341; 4% of non-empty `Case`): <em>lui, acestuia, acestora, ei, cărora, celor, acesteia, căruia, căreia, celui</em>
* `Nom` (57; 1% of non-empty `Case`): <em>eu, tu</em>
* `EMPTY` (123): <em>dumneavoastră, lui, lor, cari, dumnealui, săi, său, dumneaei, dumnealor, mei</em>

<table>
  <tr><th>Paradigm <i>el</i></th><th><tt>Acc,Nom</tt></th><th><tt>Dat,Gen</tt></th><th><tt>Acc</tt></th><th><tt>Dat</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="Strength.html">Strength</a>=Strong</tt></td><td><em>el, îl</em></td><td><em>lui</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="Strength.html">Strength</a>=Weak</tt></td><td></td><td></td><td><em>îl, -l</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="Strength.html">Strength</a>=Weak|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td></td><td><em>-l, l-, l</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="Strength.html">Strength</a>=Strong</tt></td><td><em>ei</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="Strength.html">Strength</a>=Weak</tt></td><td></td><td></td><td><em>îi, -i, îl</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="Strength.html">Strength</a>=Weak|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td></td><td><em>-i, i-</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="Strength.html">Strength</a>=Strong</tt></td><td><em>ea</em></td><td><em>ei</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="Strength.html">Strength</a>=Weak</tt></td><td></td><td></td><td><em>o, -o, O-</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="Strength.html">Strength</a>=Weak|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td></td><td><em>-o, o</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="Strength.html">Strength</a>=Strong</tt></td><td><em>ele, le</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="Strength.html">Strength</a>=Weak</tt></td><td></td><td></td><td><em>le</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="Strength.html">Strength</a>=Weak|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td></td><td><em>le-, -le</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Strength.html">Strength</a>=Weak</tt></td><td></td><td></td><td></td><td><em>îi, i, -i</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Strength.html">Strength</a>=Weak|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td></td><td></td><td><em>-i, i-</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Strength.html">Strength</a>=Strong</tt></td><td></td><td><em>lor</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Strength.html">Strength</a>=Weak</tt></td><td></td><td></td><td></td><td><em>le, li, el</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Strength.html">Strength</a>=Weak|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td></td><td></td><td><em>le-, -le, -li</em></td></tr>
</table>

### `DET`

5106 [ro-pos/DET]() tokens (68% of all `DET` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `DET` and `Case` co-occurred: <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (4998; 98%), <tt><a href="Number.html">Number</a>=Sing</tt> (4041; 79%), <tt><a href="Position.html">Position</a>=EMPTY</tt> (3969; 78%), <tt><a href="PronType.html">PronType</a>=Ind</tt> (3585; 70%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (3331; 65%).

`DET` tokens may have the following values of `Case`:

* `Acc,Nom` (4135; 81% of non-empty `Case`): <em>o, un, acest, cel, orice, toate, această, aceste, cele, fiecare</em>
* `Dat,Gen` (971; 19% of non-empty `Case`): <em>lui, unui, unei, unor, acestor, acestei, celor, acestui, altor, tuturor</em>
* `EMPTY` (2428): <em>a, al, ale, lui, lor, ai, său, multe, ei, niște</em>

<table>
  <tr><th>Paradigm <i>un</i></th><th><tt>Acc,Nom</tt></th><th><tt>Dat,Gen</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>un, -un</em></td><td><em>unui</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Position.html">Position</a>=Prenom</tt></td><td><em>unii</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td><em>o</em></td><td><em>unei</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Position.html">Position</a>=Prenom</tt></td><td><em>unele</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>unor</em></td></tr>
</table>

### `ADJ`

3885 [ro-pos/ADJ]() tokens (35% of all `ADJ` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `ADJ` and `Case` co-occurred: <tt><a href="Degree.html">Degree</a>=Pos</tt> (3874; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (3733; 96%), <tt><a href="Gender.html">Gender</a>=Fem</tt> (3569; 92%), <tt><a href="Definite.html">Definite</a>=Ind</tt> (3266; 84%).

`ADJ` tokens may have the following values of `Case`:

* `Acc,Nom` (3198; 82% of non-empty `Case`): <em>mare, prezenta, europeană, prezentul, prevăzută, română, mică, necesară, literară, orală</em>
* `Dat,Gen` (687; 18% of non-empty `Case`): <em>europene, prezentului, prezentei, române, românești, umane, comunitare, naționale, publice, internaționale</em>
* `EMPTY` (7127): <em>membre, asemenea, prevăzute, nou, necesare, mare, european, chimice, mari, anumite</em>

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

260 [ro-pos/NUM]() tokens (8% of all `NUM` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `NUM` and `Case` co-occurred: <tt><a href="NumForm.html">NumForm</a>=Word</tt> (235; 90%), <tt><a href="NumType.html">NumType</a>=Ord</tt> (173; 67%), <tt><a href="Number.html">Number</a>=Sing</tt> (160; 62%), <tt><a href="Gender.html">Gender</a>=Fem</tt> (150; 58%).

`NUM` tokens may have the following values of `Case`:

* `Acc,Nom` (239; 92% of non-empty `Case`): <em>primul, prima, primele, unu, milioane, ambele, ultimul, ultimii, amândoi, sută</em>
* `Dat,Gen` (21; 8% of non-empty `Case`): <em>primei, primelor, primului, ultimei, ambelor, primilor, ultimelor, ultimilor, ultimului</em>
* `EMPTY` (3110): <em>1, 2, 3, 4, două, trei, 5, 6, doi, 7</em>

<table>
  <tr><th>Paradigm <i>prim</i></th><th><tt>Acc,Nom</tt></th><th><tt>Dat,Gen</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>primul</em></td><td><em>primului</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td><em>primii</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td><em>prima</em></td><td><em>primei</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td><em>primele</em></td><td></td></tr>
</table>

`Case` seems to be **lexical feature** of `NUM`. 92% lemmas (36) occur only with one value of `Case`.

### `PROPN`

154 [ro-pos/PROPN]() tokens (4% of all `PROPN` tokens) have a non-empty value of `Case`.

`PROPN` tokens may have the following values of `Case`:

* `Acc,Nom` (29; 19% of non-empty `Case`): <em>Banatul, H7N3, Ierusalimul, Irakul, Israelul, Brâncovanul, Bălăceanul, CE3, Carpații, Cișmigiul</em>
* `Dat,Gen` (125; 81% of non-empty `Case`): <em>României, Franței, Dunării, Europei, Moldovei, Rusiei, Timișoarei, Jiului, Germaniei, Indiei</em>
* `EMPTY` (3740): <em>Winston, Timișoara, București, CEE, România, O'Brien, 000, Timiș, Ion, Paris</em>

<table>
  <tr><th>Paradigm <i>Israel</i></th><th><tt>Acc,Nom</tt></th><th><tt>Dat,Gen</tt></th></tr>
  <tr><td><tt></tt></td><td><em>Israelul</em></td><td><em>Israelului</em></td></tr>
</table>

`Case` seems to be **lexical feature** of `PROPN`. 96% lemmas (74) occur only with one value of `Case`.

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`:
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (1352; 77%),
<tt>ADP --[<a href="../dep/mwe.html">mwe</a>]--> ADP</tt> (799; 100%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (154; 88%),
<tt>NOUN --[<a href="../dep/mwe.html">mwe</a>]--> NOUN</tt> (49; 53%),
<tt>PRON --[<a href="../dep/mwe.html">mwe</a>]--> PRON</tt> (33; 100%),
<tt>NOUN --[<a href="../dep/nsubj.html">nsubj</a>]--> PRON</tt> (28; 52%),
<tt>NOUN --[<a href="../dep/name.html">name</a>]--> ADJ</tt> (22; 79%),
<tt>NOUN --[<a href="../dep/remnant.html">remnant</a>]--> NOUN</tt> (22; 65%),
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (21; 62%),
<tt>NOUN --[<a href="../dep/mwe.html">mwe</a>]--> ADJ</tt> (21; 78%).

