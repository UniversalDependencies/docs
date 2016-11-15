

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This feature is universal.
It occurs with 4 different values: `Acc`, `Dat`, `Gen`, `Nom`.
Some words have combined values of the feature; 2 combinations have been observed: `Acc|Dat`, `Acc|Nom`.

95963 tokens (32%) have a non-empty value of `Case`.
25553 types (51%) occur at least once with a non-empty value of `Case`.
21705 lemmas (51%) occur at least once with a non-empty value of `Case`.
The feature is used with 11 part-of-speech tags: [de-pos/NOUN]() (35128; 12% instances), [de-pos/DET]() (27519; 9% instances), [de-pos/PRON]() (13400; 4% instances), [de-pos/PROPN]() (10142; 3% instances), [de-pos/ADJ]() (9726; 3% instances), [de-pos/NUM]() (35; 0% instances), [de-pos/VERB]() (5; 0% instances), [de-pos/X]() (3; 0% instances), [de-pos/ADP]() (2; 0% instances), [de-pos/ADV]() (2; 0% instances), [de-pos/SCONJ]() (1; 0% instances).

### `NOUN`

35128 [de-pos/NOUN]() tokens (66% of all `NOUN` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `NOUN` and `Case` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (27304; 78%).

`NOUN` tokens may have the following values of `Case`:

* `Acc` (9675; 28% of non-empty `Case`): <em>Platz, Zeit, Jahre, Rolle, Leben, Namen, Prozent, Kinder, Titel, Geld</em>
* `Dat` (13068; 37% of non-empty `Case`): <em>Jahr, Jahren, Zeit, Jahre, Saison, Ende, Stadt, Teil, Bereich, Beispiel</em>
* `Gen` (2337; 7% of non-empty `Case`): <em>Jahres, Landes, weiteren, Königs, Ortes, Flusses, Hauses, Zeit, Films, Krieges</em>
* `Nom` (10048; 29% of non-empty `Case`): <em>Menschen, Ort, Unternehmen, Name, Stadt, Vater, Prozent, Album, Familie, Zahl</em>
* `EMPTY` (18168): <em>Jahre, Stadt, Jahren, km, Ende, zeit, jahr, m, Mitglied, Anfang</em>

<table>
  <tr><th>Paradigm <i>Jahr</i></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th><th><tt>Dat</tt></th><th><tt>Gen</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc,Neut|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>Jahr</em></td><td><em>Jahr, Jahre</em></td><td><em>Jahres, Jahr, Jahrs</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td><em>Jahr</em></td><td><em>Jahr</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>Jahr</em></td><td><em>Jahr</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td><em>Jahre, Jahren</em></td><td><em>Jahre, Jahren</em></td><td><em>Jahren</em></td><td><em>Jahre, Jahren</em></td></tr>
</table>

### `DET`

27519 [de-pos/DET]() tokens (74% of all `DET` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `DET` and `Case` co-occurred: <tt><a href="PronType.html">PronType</a>=Art</tt> (27298; 99%), <tt><a href="Number.html">Number</a>=Sing</tt> (24395; 89%), <tt><a href="Definite.html">Definite</a>=Def</tt> (23408; 85%).

`DET` tokens may have the following values of `Case`:

* `Acc` (6365; 23% of non-empty `Case`): <em>die, den, das, eine, einen, ein, dessen, dem, der, eines</em>
* `Dat` (11007; 40% of non-empty `Case`): <em>dem, der, den, einem, einer, dessen, des, diesem, einen, jenen</em>
* `Gen` (2532; 9% of non-empty `Case`): <em>des, eines, einer, der, aller, dem, eins, vieler</em>
* `Nom` (7615; 28% of non-empty `Case`): <em>die, der, das, ein, eine, dessen, den, einen, diese, Dieses</em>
* `EMPTY` (9494): <em>der, die, ein, dem, eine, seine, seiner, das, den, sein</em>

<table>
  <tr><th>Paradigm <i>der</i></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th><th><tt>Dat</tt></th><th><tt>Gen</tt></th></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Masc,Neut|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>dem, des</em></td><td><em>dem</em></td><td><em>dem</em></td><td><em>des</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>der, den</em></td><td><em>den</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>die, der, Das</em></td><td><em>die, den</em></td><td><em>den</em></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>die</em></td><td><em>die, der</em></td><td><em>der, dem, den, die</em></td><td><em>der</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>die, den</em></td><td><em>die, den</em></td><td><em>den</em></td><td><em>der</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>das</em></td><td><em>das, dem</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>die, das</em></td><td><em>die, den</em></td><td><em>den</em></td><td><em>der</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>die, der, das, den</em></td><td><em>die, den, das, dem</em></td><td><em>den, des, dem</em></td><td><em>der, dem</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>die, der, das</em></td><td><em>die, den, das</em></td><td><em>dem, der, den</em></td><td><em>des</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc,Neut|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Dem</tt></td><td></td><td></td><td><em>dem</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc,Neut|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Rel</tt></td><td></td><td></td><td><em>dem</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Dem</tt></td><td><em>dessen, der</em></td><td><em>dessen, den</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Rel</tt></td><td><em>dessen, der</em></td><td><em>dessen, den</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Rel</tt></td><td><em>dessen</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Dem</tt></td><td><em>die</em></td><td><em>die</em></td><td><em>derer</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Rel</tt></td><td><em>die</em></td><td><em>die</em></td><td><em>der</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Dem</tt></td><td></td><td></td><td><em>dessen</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Rel</tt></td><td><em>Die</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Dem</tt></td><td><em>das</em></td><td><em>das</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Rel</tt></td><td><em>das</em></td><td><em>das</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Dem</tt></td><td><em>die</em></td><td><em>das</em></td><td><em>dessen</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Rel</tt></td><td></td><td></td><td><em>dessen</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Dem</tt></td><td><em>dessen, das, die</em></td><td><em>das, Die, dessen</em></td><td><em>dessen</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Rel</tt></td><td><em>die</em></td><td><em>dessen, die</em></td><td><em>dessen</em></td><td></td></tr>
  <tr><td><tt><a href="PronType.html">PronType</a>=Dem</tt></td><td><em>das</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="PronType.html">PronType</a>=Rel</tt></td><td><em>der, die</em></td><td><em>das, den, die</em></td><td><em>dem, der</em></td><td></td></tr>
</table>

### `PRON`

13400 [de-pos/PRON]() tokens (89% of all `PRON` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PRON` and `Case` co-occurred: <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (11632; 87%), <tt><a href="PronType.html">PronType</a>=Prs</tt> (8318; 62%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (7711; 58%).

`PRON` tokens may have the following values of `Case`:

* `Acc` (3062; 23% of non-empty `Case`): <em>sich, ihn, diese, mich, die, sie, es, was, das, uns</em>
* `Acc,Dat` (25; 0% of non-empty `Case`): <em>sich</em>
* `Acc,Nom` (418; 3% of non-empty `Case`): <em>es, sie, 's</em>
* `Dat` (1590; 12% of non-empty `Case`): <em>ihm, diesem, sich, dieser, mir, dem, ihnen, denen, uns, der</em>
* `Gen` (146; 1% of non-empty `Case`): <em>aller, seiner, meiner, dieser, jedes, ihrer, mehrerer, seines, unseres, vieler</em>
* `Nom` (8159; 61% of non-empty `Case`): <em>er, sie, die, es, ich, man, der, wir, diese, das</em>
* `EMPTY` (1578): <em>keine, allem, dieser, anderem, dem, kein, der, keinen, alle, dieses</em>

<table>
  <tr><th>Paradigm <i>er</i></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th><th><tt>Dat</tt></th><th><tt>Gen</tt></th></tr>
  <tr><td><tt></tt></td><td><em>er, ihn</em></td><td><em>ihn, ihm</em></td><td><em>ihm</em></td><td><em>ihm</em></td></tr>
  <tr><td><tt><a href="Typo.html">Typo</a>=Yes</tt></td><td></td><td><em>in</em></td><td></td><td></td></tr>
</table>

### `PROPN`

10142 [de-pos/PROPN]() tokens (31% of all `PROPN` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PROPN` and `Case` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (9703; 96%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (5278; 52%).

`PROPN` tokens may have the following values of `Case`:

* `Acc` (1362; 13% of non-empty `Case`): <em>USA, Mark, Deutschland, Award, Cup, Deutsche, Hamburger, Wiener, Dollar, Euro</em>
* `Dat` (4547; 45% of non-empty `Case`): <em>Weltkrieg, Oktober, Mai, November, Zweiten, September, März, University, Universität, Februar</em>
* `Gen` (646; 6% of non-empty `Case`): <em>Ersten, Weltkriegs, Weltkrieges, Zweiten, Instituts, Internationalen, Krieges, Reiches, Alten, Berliner</em>
* `Nom` (3587; 35% of non-empty `Case`): <em>von, SPD, Müller, Deutsche, Kohl, You, AG, I, de, it</em>
* `EMPTY` (22189): <em>von, of, de, Deutschland, der, the, Berlin, US, und, St.</em>

<table>
  <tr><th>Paradigm <i>Deutschland</i></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th><th><tt>Dat</tt></th><th><tt>Gen</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc,Neut</tt></td><td></td><td></td><td><em>Deutschland</em></td><td><em>Deutschlands</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Neut</tt></td><td><em>Deutschland</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt></tt></td><td><em>Deutschland</em></td><td><em>Deutschland</em></td><td><em>Deutschland</em></td><td></td></tr>
</table>

### `ADJ`

9726 [de-pos/ADJ]() tokens (46% of all `ADJ` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `ADJ` and `Case` co-occurred: <tt><a href="Degree.html">Degree</a>=Pos</tt> (8469; 87%), <tt><a href="Number.html">Number</a>=Sing</tt> (7019; 72%).

`ADJ` tokens may have the following values of `Case`:

* `Acc` (3076; 32% of non-empty `Case`): <em>neue, große, erste, ersten, weitere, eigene, verschiedene, viele, gute, andere</em>
* `Dat` (3289; 34% of non-empty `Case`): <em>ersten, anderen, weiteren, neuen, großen, deutschen, letzten, gleichen, nächsten, selben</em>
* `Gen` (669; 7% of non-empty `Case`): <em>neuen, amerikanischen, ehemaligen, ersten, französischen, gesamten, großen, deutschen, verschiedener, alten</em>
* `Nom` (2692; 28% of non-empty `Case`): <em>erste, weitere, neue, viele, kleine, große, andere, deutsche, zahlreiche, alte</em>
* `EMPTY` (11590): <em>später, bekannt, gut, kurz, erste, freundlich, lang, anderen, möglich, neu</em>

<table>
  <tr><th>Paradigm <i>erst</i></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th><th><tt>Dat</tt></th><th><tt>Gen</tt></th></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Pos|<a href="Gender.html">Gender</a>=Masc,Neut|<a href="Number.html">Number</a>=Sing</tt></td><td><em>erstes</em></td><td></td><td><em>ersten</em></td><td><em>ersten</em></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Pos|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>erste</em></td><td><em>ersten, erstes</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Pos|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td><em>erste, ersten</em></td><td><em>erste, ersten</em></td><td><em>ersten</em></td><td></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Pos|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td><em>ersten, erste</em></td><td><em>erste</em></td><td><em>ersten</em></td><td></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Pos|<a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td><em>erste, erstes</em></td><td><em>erste, erstes</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Pos|<a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Plur</tt></td><td><em>ersten</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing</tt></td><td><em>erstes</em></td><td><em>ersten, erste, erstes</em></td><td><em>ersten</em></td><td></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur</tt></td><td><em>ersten, erste</em></td><td><em>ersten, erste</em></td><td><em>ersten</em></td><td><em>ersten</em></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Cmp,Pos|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>erster</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Cmp,Pos|<a href="Number.html">Number</a>=Sing</tt></td><td><em>Erster</em></td><td></td><td></td><td></td></tr>
</table>

### `NUM`

35 [de-pos/NUM]() tokens (0% of all `NUM` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `NUM` and `Case` co-occurred: <tt><a href="NumType.html">NumType</a>=Card</tt> (35; 100%).

`NUM` tokens may have the following values of `Case`:

* `Acc` (1; 3% of non-empty `Case`): <em>31</em>
* `Dat` (29; 83% of non-empty `Case`): <em>1, 24., 31, 6, 1., 13, 16, 17, 18, 1870er</em>
* `Nom` (5; 14% of non-empty `Case`): <em>18., 2, drei, fünfte, sechs</em>
* `EMPTY` (7597): <em>zwei, drei, vier, 2007, 2006, fünf, 2009, 2008, 2010, sechs</em>

<table>
  <tr><th>Paradigm <i>sechs</i></th><th><tt>Nom</tt></th><th><tt>Dat</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><em>sechs</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>sechs</em></td></tr>
</table>

### `VERB`

5 [de-pos/VERB]() tokens (0% of all `VERB` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `VERB` and `Case` co-occurred: <tt><a href="Person.html">Person</a>=EMPTY</tt> (5; 100%), <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (5; 100%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (5; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (4; 80%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (4; 80%).

`VERB` tokens may have the following values of `Case`:

* `Acc` (2; 40% of non-empty `Case`): <em>meinen, umgebenden</em>
* `Gen` (3; 60% of non-empty `Case`): <em>angenommenen, erweiterten, großen</em>
* `EMPTY` (25036): <em>ist, war, sind, waren, wurde, gibt, hat, kam, liegt, hatte</em>

### `X`

3 [de-pos/X]() tokens (1% of all `X` tokens) have a non-empty value of `Case`.

`X` tokens may have the following values of `Case`:

* `Acc` (1; 33% of non-empty `Case`): <em>the</em>
* `Dat` (1; 33% of non-empty `Case`): <em>er</em>
* `Nom` (1; 33% of non-empty `Case`): <em>What</em>
* `EMPTY` (376): <em>z.B., u.a., =, %, B., etc., /, †, &amp;, *</em>

### `ADV`

2 [de-pos/ADV]() tokens (0% of all `ADV` tokens) have a non-empty value of `Case`.

`ADV` tokens may have the following values of `Case`:

* `Acc` (1; 50% of non-empty `Case`): <em>mehr</em>
* `Nom` (1; 50% of non-empty `Case`): <em>Genau</em>
* `EMPTY` (14956): <em>auch, nur, noch, sehr, so, dort, wieder, hier, heute, mehr</em>

### `ADP`

2 [de-pos/ADP]() tokens (0% of all `ADP` tokens) have a non-empty value of `Case`.

`ADP` tokens may have the following values of `Case`:

* `Nom` (2; 100% of non-empty `Case`): <em>als</em>
* `EMPTY` (32361): <em>in, von, mit, zu, an, auf, für, als, nach, bei</em>

### `SCONJ`

1 [de-pos/SCONJ]() tokens (0% of all `SCONJ` tokens) have a non-empty value of `Case`.

`SCONJ` tokens may have the following values of `Case`:

* `Nom` (1; 100% of non-empty `Case`): <em>dass</em>
* `EMPTY` (1824): <em>dass, da, wenn, als, daß, nachdem, weil, während, wie, ob</em>

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`:
<tt>NOUN --[<a href="../dep/det.html">det</a>]--> DET</tt> (23648; 100%),
<tt>NOUN --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (9308; 100%),
<tt>PROPN --[<a href="../dep/det.html">det</a>]--> DET</tt> (3768; 100%),
<tt>NOUN --[<a href="../dep/det.html">det</a>]--> PRON</tt> (1586; 99%),
<tt>PROPN --[<a href="../dep/amod.html">amod</a>]--> PROPN</tt> (884; 100%),
<tt>NOUN --[<a href="../dep/det:poss.html">det:poss</a>]--> PRON</tt> (504; 100%),
<tt>PROPN --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (360; 100%),
<tt>NOUN --[<a href="../dep/amod.html">amod</a>]--> PROPN</tt> (153; 100%),
<tt>NOUN --[<a href="../dep/amod.html">amod</a>]--> PRON</tt> (64; 100%),
<tt>PRON --[<a href="../dep/det.html">det</a>]--> DET</tt> (49; 96%).

