

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This feature is universal.
It occurs with 3 different values: `Acc`, `Gen`, `Nom`.
Some words have combined values of the feature; 1 combinations have been observed: `Gen|Nom`.

15083 tokens (5%) have a non-empty value of `Case`.
1180 types (4%) occur at least once with a non-empty value of `Case`.
1028 lemmas (4%) occur at least once with a non-empty value of `Case`.
The feature is used with 6 part-of-speech tags: [no-pos/PRON]() (12386; 4% instances), [no-pos/NOUN]() (1395; 0% instances), [no-pos/PROPN]() (1214; 0% instances), [no-pos/DET]() (47; 0% instances), [no-pos/ADJ]() (38; 0% instances), [no-pos/NUM]() (3; 0% instances).

### `PRON`

12386 [no-pos/PRON]() tokens (52% of all `PRON` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PRON` and `Case` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (11155; 90%), <tt><a href="Animacy.html">Animacy</a>=Anim</tt> (9516; 77%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (9243; 75%), <tt><a href="Number.html">Number</a>=Sing</tt> (7221; 58%).

`PRON` tokens may have the following values of `Case`:

* `Acc` (2852; 23% of non-empty `Case`): <em>seg, meg, oss, dem, ham, deg, henne, dere, han, mæ</em>
* `Gen` (3; 0% of non-empty `Case`): <em>alles, ens</em>
* `Gen,Nom` (2; 0% of non-empty `Case`): <em>ens</em>
* `Nom` (9529; 77% of non-empty `Case`): <em>jeg, han, vi, de, hun, du, man, dere, Eg, mann</em>
* `EMPTY` (11474): <em>det, som, dette, den, hva, noe, alt, alle, noen, ingen</em>

<table>
  <tr><th>Paradigm <i>jeg</i></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th></tr>
  <tr><td><tt></tt></td><td><em>jeg, Eg</em></td><td><em>meg, mæ, mig</em></td></tr>
</table>

### `NOUN`

1395 [no-pos/NOUN]() tokens (2% of all `NOUN` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `NOUN` and `Case` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (1096; 79%), <tt><a href="Definite.html">Definite</a>=Def</tt> (1016; 73%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (858; 62%).

`NOUN` tokens may have the following values of `Case`:

* `Gen` (1395; 100% of non-empty `Case`): <em>verdens, dagens, landets, årets, kirkens, statens, utvalgets, års, samfunnets, barnets</em>
* `EMPTY` (55857): <em>år, dag, prosent, gang, tid, folk, verden, land, barn, del</em>

`Case` seems to be **lexical feature** of `NOUN`. 100% lemmas (521) occur only with one value of `Case`.

### `PROPN`

1214 [no-pos/PROPN]() tokens (7% of all `PROPN` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PROPN` and `Case` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (1110; 91%).

`PROPN` tokens may have the following values of `Case`:

* `Gen` (1214; 100% of non-empty `Case`): <em>Norges, Regjeringens, Cathrines, FNs, USAs, Obamas, Høyres, Bertelsens, Europas, Hannahs</em>
* `EMPTY` (17047): <em>Norge, Obama, Regjeringen, Jan, Oslo, USA, Den, Svalbard, Mayen, Stortinget</em>

`Case` seems to be **lexical feature** of `PROPN`. 100% lemmas (461) occur only with one value of `Case`.

### `DET`

47 [no-pos/DET]() tokens (0% of all `DET` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `DET` and `Case` co-occurred: <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (47; 100%), <tt><a href="PronType.html">PronType</a>=Dem</tt> (39; 83%), <tt><a href="Number.html">Number</a>=Sing</tt> (29; 62%).

`DET` tokens may have the following values of `Case`:

* `Gen` (47; 100% of non-empty `Case`): <em>andres, dens, dets, alles, ens, annens, hvis</em>
* `EMPTY` (16443): <em>en, et, den, de, det, andre, sin, alle, denne, noen</em>

### `ADJ`

38 [no-pos/ADJ]() tokens (0% of all `ADJ` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `ADJ` and `Case` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (37; 97%), <tt><a href="Degree.html">Degree</a>=Pos</tt> (32; 84%), <tt><a href="Number.html">Number</a>=Sing</tt> (21; 55%).

`ADJ` tokens may have the following values of `Case`:

* `Gen` (38; 100% of non-empty `Case`): <em>domfeltes, manges, offentliges, ansattes, enkeltes, fattiges, mistenktes, rødgrønnes, sistnevntes, tiltaltes</em>
* `EMPTY` (26771): <em>mer, mange, flere, norske, mye, første, store, nye, hele, helt</em>

`Case` seems to be **lexical feature** of `ADJ`. 100% lemmas (25) occur only with one value of `Case`.

### `NUM`

3 [no-pos/NUM]() tokens (0% of all `NUM` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `NUM` and `Case` co-occurred: <tt><a href="Number.html">Number</a>=Plur</tt> (3; 100%).

`NUM` tokens may have the following values of `Case`:

* `Gen` (3; 100% of non-empty `Case`): <em>2, 2011s, 2s</em>
* `EMPTY` (3942): <em>to, tre, fire, eneste, ett, 2, fem, ti, 20, seks</em>

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (15; 83%),
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (12; 57%),
<tt>PRON --[<a href="../dep/appos.html">appos</a>]--> PRON</tt> (9; 82%).

