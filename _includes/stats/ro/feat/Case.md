

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This feature is universal.
It occurs with 5 different values: `Acc`, `Dat`, `Gen`, `Nom`, `Voc`.

4679 tokens (39%) have a non-empty value of `Case`.
2063 types (46%) occur at least once with a non-empty value of `Case`.
1773 lemmas (46%) occur at least once with a non-empty value of `Case`.
The feature is used with 7 part-of-speech tags: [ro-pos/NOUN]() (1882; 16% instances), [ro-pos/ADP]() (1286; 11% instances), [ro-pos/PRON]() (671; 6% instances), [ro-pos/DET]() (403; 3% instances), [ro-pos/ADJ]() (335; 3% instances), [ro-pos/PROPN]() (53; 0% instances), [ro-pos/NUM]() (49; 0% instances).

### `NOUN`

1882 [ro-pos/NOUN]() tokens (68% of all `NOUN` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `NOUN` and `Case` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (1545; 82%), <tt><a href="Definite.html">Definite</a>=Def</tt> (1381; 73%), <tt><a href="Gender.html">Gender</a>=Fem</tt> (1268; 67%).

`NOUN` tokens may have the following values of `Case`:

* `Gen` (380; 20% of non-empty `Case`): <em>guvernului, secolului, medicului, numelui, oamenilor, orașului, regimului, statului, țării, administrației</em>
* `Nom` (1494; 79% of non-empty `Case`): <em>orașul, zona, anul, limba, locul, cazul, forțele, partea, perioadă, președintele</em>
* `Voc` (8; 0% of non-empty `Case`): <em>domnule, Doamne, Domnilor, Murgule, carpato-ponto, software, voinicule</em>
* `EMPTY` (906): <em>ani, număr, oameni, oraș, zile, C, an, loc, protocol, punct</em>

<table>
  <tr><th>Paradigm <i>an</i></th><th><tt>Nom</tt></th><th><tt>Gen</tt></th></tr>
  <tr><td><tt></tt></td><td><em>anul</em></td><td><em>anului</em></td></tr>
</table>

`Case` seems to be **lexical feature** of `NOUN`. 95% lemmas (1247) occur only with one value of `Case`.

### `ADP`

1286 [ro-pos/ADP]() tokens (87% of all `ADP` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `ADP` and `Case` co-occurred: <tt><a href="AdpType.html">AdpType</a>=Prep</tt> (1286; 100%).

`ADP` tokens may have the following values of `Case`:

* `Acc` (1267; 99% of non-empty `Case`): <em>de, în, la, din, cu, pe, pentru, dintre, prin, după</em>
* `Dat` (11; 1% of non-empty `Case`): <em>conform, potrivit, datorită</em>
* `Gen` (8; 1% of non-empty `Case`): <em>asupra, în_jurul</em>
* `EMPTY` (186): <em>de, cu, pe, la, în, din, fără, pentru, după, într-</em>

<table>
  <tr><th>Paradigm <i>datorită</i></th><th><tt>Acc</tt></th><th><tt>Dat</tt></th></tr>
  <tr><td><tt></tt></td><td><em>datorită</em></td><td><em>datorită</em></td></tr>
</table>

`Case` seems to be **lexical feature** of `ADP`. 98% lemmas (52) occur only with one value of `Case`.

### `PRON`

671 [ro-pos/PRON]() tokens (98% of all `PRON` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PRON` and `Case` co-occurred: <tt><a href="Variant.html">Variant</a>=EMPTY</tt> (582; 87%), <tt><a href="Person.html">Person</a>=3</tt> (571; 85%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (486; 72%), <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (470; 70%), <tt><a href="PronType.html">PronType</a>=Prs</tt> (431; 64%), <tt><a href="Strength.html">Strength</a>=Weak</tt> (379; 56%).

`PRON` tokens may have the following values of `Case`:

* `Acc` (285; 42% of non-empty `Case`): <em>se, s-, îl, -l, mă, le, te, -i, l, o</em>
* `Dat` (98; 15% of non-empty `Case`): <em>își, -și, îi, i, -mi, -i, mi, vă, îți, și-</em>
* `Gen` (26; 4% of non-empty `Case`): <em>lui, acesteia, acestora, celor, cui, căreia, cărora, căruia, tuturor, tuturora</em>
* `Nom` (262; 39% of non-empty `Case`): <em>care, ce, el, ea, eu, tu, aceasta, cea, cei, cele</em>
* `EMPTY` (11): <em>dumneavoastră, lui, meu</em>

<table>
  <tr><th>Paradigm <i>el</i></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th><th><tt>Dat</tt></th><th><tt>Gen</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="Strength.html">Strength</a>=Strong</tt></td><td><em>el</em></td><td></td><td></td><td><em>lui</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="Strength.html">Strength</a>=Weak</tt></td><td></td><td><em>îl, -l</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="Strength.html">Strength</a>=Weak|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td><em>-l, l, l-</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="Strength.html">Strength</a>=Strong</tt></td><td><em>ei</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="Strength.html">Strength</a>=Weak</tt></td><td></td><td><em>-i, îi, îl</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="Strength.html">Strength</a>=Weak|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td><em>-i</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="Strength.html">Strength</a>=Strong</tt></td><td><em>ea</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="Strength.html">Strength</a>=Weak</tt></td><td></td><td><em>-o, o</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="Strength.html">Strength</a>=Weak|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td><em>-o</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="Strength.html">Strength</a>=Strong</tt></td><td><em>ele</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="Strength.html">Strength</a>=Weak</tt></td><td></td><td><em>le</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="Strength.html">Strength</a>=Weak|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td><em>le-</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Strength.html">Strength</a>=Weak</tt></td><td></td><td></td><td><em>îi, i, -i</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Strength.html">Strength</a>=Weak|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td></td><td><em>i-, -i</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Strength.html">Strength</a>=Weak</tt></td><td></td><td></td><td><em>le, li, el</em></td><td></td></tr>
</table>

### `DET`

403 [ro-pos/DET]() tokens (66% of all `DET` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `DET` and `Case` co-occurred: <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (391; 97%), <tt><a href="Position.html">Position</a>=EMPTY</tt> (328; 81%), <tt><a href="Number.html">Number</a>=Sing</tt> (313; 78%), <tt><a href="PronType.html">PronType</a>=Ind</tt> (281; 70%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (274; 68%), <tt><a href="Gender.html">Gender</a>=Fem</tt> (209; 52%).

`DET` tokens may have the following values of `Case`:

* `Gen` (64; 16% of non-empty `Case`): <em>lui, unui, unei, unor, sale, acestei, acestui, celor, tuturor, -ului</em>
* `Nom` (339; 84% of non-empty `Case`): <em>o, un, cele, toate, acest, alte, cel, această, aceste, cea</em>
* `EMPTY` (205): <em>a, al, ale, -lea, multe, său, ei, ai, lor, lui</em>

<table>
  <tr><th>Paradigm <i>un</i></th><th><tt>Nom</tt></th><th><tt>Gen</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>un</em></td><td><em>unui</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td><em>o</em></td><td><em>unei</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Position.html">Position</a>=Prenom</tt></td><td><em>unele</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>unor</em></td></tr>
</table>

### `ADJ`

335 [ro-pos/ADJ]() tokens (37% of all `ADJ` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `ADJ` and `Case` co-occurred: <tt><a href="Degree.html">Degree</a>=Pos</tt> (335; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (325; 97%), <tt><a href="Gender.html">Gender</a>=Fem</tt> (307; 92%), <tt><a href="Definite.html">Definite</a>=Ind</tt> (283; 84%).

`ADJ` tokens may have the following values of `Case`:

* `Gen` (61; 18% of non-empty `Case`): <em>naționale, culturale, geografice, literare, politice, religioase, Biblice, Comerciale, Europene, Ortodoxe</em>
* `Nom` (274; 82% of non-empty `Case`): <em>română, mare, prezentul, românească, europeană, publică, singurul, cunoscută, internațională, Proxima</em>
* `EMPTY` (563): <em>importante, național, român, vechi, europene, nou, români, bun, general, internațional</em>

<table>
  <tr><th>Paradigm <i>român</i></th><th><tt>Nom</tt></th><th><tt>Gen</tt></th></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>românilor</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td><em>română</em></td><td></td></tr>
</table>

`Case` seems to be **lexical feature** of `ADJ`. 96% lemmas (258) occur only with one value of `Case`.

### `PROPN`

53 [ro-pos/PROPN]() tokens (11% of all `PROPN` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PROPN` and `Case` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (51; 96%), <tt><a href="Definite.html">Definite</a>=Def</tt> (49; 92%), <tt><a href="Gender.html">Gender</a>=Fem</tt> (47; 89%).

`PROPN` tokens may have the following values of `Case`:

* `Gen` (39; 74% of non-empty `Case`): <em>României, Moldovei, Europei, Dobrogei, Germaniei, Mediterane, Ungariei, dureri, oamenilor</em>
* `Nom` (14; 26% of non-empty `Case`): <em>Brâncovanul, Bălăceanul, Dunărea, Iașii, Ierusalimul, Luminița, Mary, Problema, Sandy, căsătorie</em>
* `EMPTY` (409): <em>România, București, Iași, Nicolina, Moldova, Roman, Arghezi, Copou, Iliescu, Mircea</em>

`Case` seems to be **lexical feature** of `PROPN`. 100% lemmas (23) occur only with one value of `Case`.

### `NUM`

49 [ro-pos/NUM]() tokens (12% of all `NUM` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `NUM` and `Case` co-occurred: <tt><a href="NumType.html">NumType</a>=Card</tt> (49; 100%), <tt><a href="NumForm.html">NumForm</a>=Word</tt> (49; 100%), <tt><a href="Definite.html">Definite</a>=Def</tt> (46; 94%), <tt><a href="Gender.html">Gender</a>=Fem</tt> (33; 67%), <tt><a href="Number.html">Number</a>=Sing</tt> (32; 65%).

`NUM` tokens may have the following values of `Case`:

* `Gen` (6; 12% of non-empty `Case`): <em>primei, ultimelor, primelor, primului</em>
* `Nom` (43; 88% of non-empty `Case`): <em>primul, prima, primele, ultimele, milioane, ultimul, întâia, sută, ultima, ultimii</em>
* `EMPTY` (346): <em>1938, două, trei, 1, 3, 2, I, patru, 4, doua</em>

`Case` seems to be **lexical feature** of `NUM`. 100% lemmas (20) occur only with one value of `Case`.

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`:
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (99; 80%),
<tt>NOUN --[<a href="../dep/nsubj.html">nsubj</a>]--> NOUN</tt> (17; 68%),
<tt>ADJ --[<a href="../dep/nsubj.html">nsubj</a>]--> NOUN</tt> (13; 54%),
<tt>NOUN --[<a href="../dep/remnant.html">remnant</a>]--> NOUN</tt> (9; 75%),
<tt>NOUN --[<a href="../dep/mwe.html">mwe</a>]--> ADJ</tt> (8; 73%),
<tt>NOUN --[<a href="../dep/acl.html">acl</a>]--> ADJ</tt> (6; 55%),
<tt>PRON --[<a href="../dep/nmod.html">nmod</a>]--> NOUN</tt> (6; 55%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (6; 86%),
<tt>NOUN --[<a href="../dep/name.html">name</a>]--> ADJ</tt> (4; 80%),
<tt>NOUN --[<a href="../dep/nsubj.html">nsubj</a>]--> PRON</tt> (3; 60%).

