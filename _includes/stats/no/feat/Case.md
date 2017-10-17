

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Bokmaal)

This feature is universal.
It occurs with 3 different values: `Acc`, `Gen`, `Nom`.
Some words have combined values of the feature; 1 combinations have been observed: `Gen|Nom`.

13637 tokens (5%) have a non-empty value of `Case`.
1122 types (4%) occur at least once with a non-empty value of `Case`.
978 lemmas (5%) occur at least once with a non-empty value of `Case`.
The feature is used with 6 part-of-speech tags: [no-pos/PRON]() (11110; 4% instances), [no-pos/NOUN]() (1314; 0% instances), [no-pos/PROPN]() (1130; 0% instances), [no-pos/DET]() (44; 0% instances), [no-pos/ADJ]() (36; 0% instances), [no-pos/NUM]() (3; 0% instances).

### `PRON`

11110 [no-pos/PRON]() tokens (52% of all `PRON` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PRON` and `Case` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (11107; 100%), <tt><a href="Animacy.html">Animacy</a>=Hum</tt> (8509; 77%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (8362; 75%), <tt><a href="Number.html">Number</a>=Sing</tt> (6455; 58%).

`PRON` tokens may have the following values of `Case`:

* `Acc` (2578; 23% of non-empty `Case`): <em>seg, meg, oss, dem, ham, deg, henne, dere, han, demt</em>
* `Gen` (1; 0% of non-empty `Case`): <em>ens</em>
* `Gen,Nom` (2; 0% of non-empty `Case`): <em>ens</em>
* `Nom` (8529; 77% of non-empty `Case`): <em>jeg, han, vi, de, hun, du, man, dere, Eg, mann</em>
* `EMPTY` (10402): <em>det, som, dette, den, hva, noe, alt, alle, noen, ingen</em>

<table>
  <tr><th>Paradigm <i>jeg</i></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th></tr>
  <tr><td><tt></tt></td><td><em>jeg, Eg</em></td><td><em>meg, mæ</em></td></tr>
</table>

### `NOUN`

1314 [no-pos/NOUN]() tokens (3% of all `NOUN` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `NOUN` and `Case` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (1027; 78%), <tt><a href="Definite.html">Definite</a>=Def</tt> (953; 73%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (797; 61%).

`NOUN` tokens may have the following values of `Case`:

* `Gen` (1314; 100% of non-empty `Case`): <em>verdens, dagens, landets, årets, kirkens, statens, utvalgets, års, samfunnets, barnets</em>
* `EMPTY` (50461): <em>år, dag, prosent, gang, folk, tid, verden, land, del, barn</em>

`Case` seems to be **lexical feature** of `NOUN`. 100% lemmas (500) occur only with one value of `Case`.

### `PROPN`

1130 [no-pos/PROPN]() tokens (7% of all `PROPN` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PROPN` and `Case` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (1035; 92%).

`PROPN` tokens may have the following values of `Case`:

* `Gen` (1130; 100% of non-empty `Case`): <em>Norges, Regjeringens, Cathrines, Obamas, Høyres, FNs, USAs, Hannahs, Arbeiderpartiets, Europas</em>
* `EMPTY` (15327): <em>Norge, Obama, Regjeringen, Oslo, USA, Den, Jan, Stortinget, Svalbard, Espen</em>

`Case` seems to be **lexical feature** of `PROPN`. 100% lemmas (436) occur only with one value of `Case`.

### `DET`

44 [no-pos/DET]() tokens (0% of all `DET` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `DET` and `Case` co-occurred: <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (44; 100%), <tt><a href="PronType.html">PronType</a>=Dem</tt> (37; 84%), <tt><a href="Number.html">Number</a>=Sing</tt> (27; 61%).

`DET` tokens may have the following values of `Case`:

* `Gen` (44; 100% of non-empty `Case`): <em>andres, dens, dets, alles, ens, annens, hvis</em>
* `EMPTY` (14969): <em>en, et, den, de, det, andre, sin, alle, denne, noen</em>

### `ADJ`

36 [no-pos/ADJ]() tokens (0% of all `ADJ` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `ADJ` and `Case` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (35; 97%), <tt><a href="Degree.html">Degree</a>=Pos</tt> (30; 83%), <tt><a href="Number.html">Number</a>=Sing</tt> (20; 56%).

`ADJ` tokens may have the following values of `Case`:

* `Gen` (36; 100% of non-empty `Case`): <em>domfeltes, offentliges, ansattes, enkeltes, fattiges, manges, mistenktes, rødgrønnes, sistnevntes, tiltaltes</em>
* `EMPTY` (24323): <em>mer, mange, norske, flere, mye, første, nye, store, hele, litt</em>

`Case` seems to be **lexical feature** of `ADJ`. 100% lemmas (24) occur only with one value of `Case`.

### `NUM`

3 [no-pos/NUM]() tokens (0% of all `NUM` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `NUM` and `Case` co-occurred: <tt><a href="Number.html">Number</a>=Plur</tt> (3; 100%), <tt><a href="NumType.html">NumType</a>=Card</tt> (3; 100%).

`NUM` tokens may have the following values of `Case`:

* `Gen` (3; 100% of non-empty `Case`): <em>2, 2011s, 2s</em>
* `EMPTY` (3545): <em>to, tre, fire, eneste, ett, 2, fem, 20, ti, seks</em>

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (14; 78%),
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (11; 55%),
<tt>PRON --[<a href="../dep/appos.html">appos</a>]--> PRON</tt> (6; 100%),
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> DET</tt> (1; 100%).



--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Nynorsk)

This feature is universal.
It occurs with 3 different values: `Acc`, `Gen`, `Nom`.

9509 tokens (3%) have a non-empty value of `Case`.
404 types (1%) occur at least once with a non-empty value of `Case`.
366 lemmas (2%) occur at least once with a non-empty value of `Case`.
The feature is used with 5 part-of-speech tags: [no-pos/PRON]() (8637; 3% instances), [no-pos/NOUN]() (545; 0% instances), [no-pos/PROPN]() (305; 0% instances), [no-pos/ADJ]() (17; 0% instances), [no-pos/DET]() (5; 0% instances).

### `PRON`

8637 [no-pos/PRON]() tokens (44% of all `PRON` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PRON` and `Case` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (8637; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (6501; 75%), <tt><a href="Animacy.html">Animacy</a>=Hum</tt> (5411; 63%), <tt><a href="Number.html">Number</a>=Sing</tt> (5108; 59%).

`PRON` tokens may have the following values of `Case`:

* `Acc` (2108; 24% of non-empty `Case`): <em>seg, dei, oss, meg, han, henne, deg, ho, dykk, kån</em>
* `Nom` (6529; 76% of non-empty `Case`): <em>han, eg, vi, dei, ho, me, du, de, ha, ei</em>
* `EMPTY` (10987): <em>det, som, ein, dette, kva, noko, alt, den, alle, nokon</em>

<table>
  <tr><th>Paradigm <i>eg</i></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><em>eg</em></td><td><em>meg</em></td></tr>
  <tr><td><tt></tt></td><td><em>eg</em></td><td></td></tr>
</table>

### `NOUN`

545 [no-pos/NOUN]() tokens (1% of all `NOUN` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `NOUN` and `Case` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (423; 78%), <tt><a href="Definite.html">Definite</a>=Def</tt> (286; 52%).

`NOUN` tokens may have the following values of `Case`:

* `Gen` (545; 100% of non-empty `Case`): <em>dømes, dagens, språkets, årets, verdas, SVs, års, kyrkjas, landets, EUs</em>
* `EMPTY` (54357): <em>år, dag, folk, tid, prosent, språk, del, kroner, landet, regjeringa</em>

`Case` seems to be **lexical feature** of `NOUN`. 100% lemmas (178) occur only with one value of `Case`.

### `PROPN`

305 [no-pos/PROPN]() tokens (2% of all `PROPN` tokens) have a non-empty value of `Case`.

`PROPN` tokens may have the following values of `Case`:

* `Gen` (305; 100% of non-empty `Case`): <em>Guds, Noregs, Breiviks, Høgres, Europas, Paulus', Venstres, Jesu, Tysklands, Hitlers</em>
* `EMPTY` (12848): <em>Noreg, Førde, Språkrådet, Sogn, Kviteseid, Oslo, Høgre, Fjordane, Helse, Tyskland</em>

`Case` seems to be **lexical feature** of `PROPN`. 100% lemmas (169) occur only with one value of `Case`.

### `ADJ`

17 [no-pos/ADJ]() tokens (0% of all `ADJ` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `ADJ` and `Case` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (17; 100%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (17; 100%), <tt><a href="Degree.html">Degree</a>=Pos</tt> (17; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (14; 82%), <tt><a href="Definite.html">Definite</a>=Ind</tt> (11; 65%).

`ADJ` tokens may have the following values of `Case`:

* `Gen` (17; 100% of non-empty `Case`): <em>liks, enkeltes, intellektuelles, kristnes, mogleges, rettes, tilsettes</em>
* `EMPTY` (26641): <em>meir, mange, fleire, mykje, nye, store, heile, godt, norske, heilt</em>

### `DET`

5 [no-pos/DET]() tokens (0% of all `DET` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `DET` and `Case` co-occurred: <tt><a href="PronType.html">PronType</a>=Dem</tt> (5; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (3; 60%), <tt><a href="Number.html">Number</a>=Plur</tt> (3; 60%).

`DET` tokens may have the following values of `Case`:

* `Gen` (5; 100% of non-empty `Case`): <em>andres, dens, dets</em>
* `EMPTY` (15142): <em>ein, den, eit, dei, ei, det, andre, alle, denne, sin</em>

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`:
<tt>PRON --[<a href="../dep/appos.html">appos</a>]--> PRON</tt> (10; 91%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (7; 88%),
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (4; 57%),
<tt>PROPN --[<a href="../dep/conj.html">conj</a>]--> PROPN</tt> (2; 67%).

