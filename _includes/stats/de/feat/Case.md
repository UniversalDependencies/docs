

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This feature is universal.
It occurs with 4 different values: `Acc`, `Dat`, `Gen`, `Nom`.
Some words have combined values of the feature; 2 combinations have been observed: `Acc|Dat`, `Acc|Nom`.

90732 tokens (32%) have a non-empty value of `Case`.
24652 types (50%) occur at least once with a non-empty value of `Case`.
20988 lemmas (51%) occur at least once with a non-empty value of `Case`.
The feature is used with 11 part-of-speech tags: [de-pos/NOUN]() (33027; 12% instances), [de-pos/DET]() (26147; 9% instances), [de-pos/PRON]() (12477; 4% instances), [de-pos/PROPN]() (9827; 3% instances), [de-pos/ADJ]() (9218; 3% instances), [de-pos/NUM]() (23; 0% instances), [de-pos/VERB]() (5; 0% instances), [de-pos/X]() (3; 0% instances), [de-pos/ADP]() (2; 0% instances), [de-pos/ADV]() (2; 0% instances), [de-pos/SCONJ]() (1; 0% instances).

### `NOUN`

33027 [de-pos/NOUN]() tokens (66% of all `NOUN` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `NOUN` and `Case` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (25701; 78%).

`NOUN` tokens may have the following values of `Case`:

* `Acc` (9009; 27% of non-empty `Case`): <em>Platz, Zeit, Jahre, Rolle, Namen, Leben, Kinder, Prozent, Titel, Geld</em>
* `Dat` (12367; 37% of non-empty `Case`): <em>Jahr, Jahren, Zeit, Jahre, Saison, Ende, Stadt, Teil, Beispiel, Bereich</em>
* `Gen` (2213; 7% of non-empty `Case`): <em>Jahres, Landes, weiteren, Königs, Ortes, Flusses, Hauses, Krieges, Zeit, Films</em>
* `Nom` (9438; 29% of non-empty `Case`): <em>Menschen, Ort, Unternehmen, Name, Stadt, Vater, Album, Familie, Prozent, Zahl</em>
* `EMPTY` (17161): <em>Jahre, Stadt, Jahren, km, Ende, m, zeit, Mitglied, jahr, Anfang</em>

<table>
  <tr><th>Paradigm <i>Jahr</i></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th><th><tt>Dat</tt></th><th><tt>Gen</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc,Neut|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>Jahr</em></td><td><em>Jahr, Jahre</em></td><td><em>Jahres, Jahr, Jahrs</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td><em>Jahr</em></td><td><em>Jahr</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>Jahr</em></td><td><em>Jahr</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td><em>Jahre, Jahren</em></td><td><em>Jahre, Jahren</em></td><td><em>Jahren</em></td><td><em>Jahre, Jahren</em></td></tr>
</table>

### `DET`

26147 [de-pos/DET]() tokens (74% of all `DET` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `DET` and `Case` co-occurred: <tt><a href="PronType.html">PronType</a>=Art</tt> (25951; 99%), <tt><a href="Number.html">Number</a>=Sing</tt> (23219; 89%), <tt><a href="Definite.html">Definite</a>=Def</tt> (22268; 85%).

`DET` tokens may have the following values of `Case`:

* `Acc` (5980; 23% of non-empty `Case`): <em>die, den, das, eine, einen, ein, dessen, dem, der, eines</em>
* `Dat` (10451; 40% of non-empty `Case`): <em>dem, der, den, einem, einer, dessen, des, diesem, einen, jenen</em>
* `Gen` (2421; 9% of non-empty `Case`): <em>des, eines, einer, der, aller, dem, eins, vieler</em>
* `Nom` (7295; 28% of non-empty `Case`): <em>die, der, das, ein, eine, dessen, den, einen, Diese, Dieses</em>
* `EMPTY` (9121): <em>der, die, ein, dem, eine, seine, seiner, das, den, sein</em>

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
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>die, der, das</em></td><td><em>die, das, den</em></td><td><em>dem, der, den</em></td><td><em>des</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc,Neut|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Dem</tt></td><td></td><td></td><td><em>dem</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc,Neut|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Rel</tt></td><td></td><td></td><td><em>dem</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Dem</tt></td><td><em>dessen</em></td><td><em>dessen, den</em></td><td></td><td></td></tr>
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
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Dem</tt></td><td><em>dessen, das, die</em></td><td><em>das, dessen, Die</em></td><td><em>dessen</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Rel</tt></td><td><em>die</em></td><td><em>dessen, die</em></td><td><em>dessen</em></td><td></td></tr>
  <tr><td><tt><a href="PronType.html">PronType</a>=Rel</tt></td><td><em>der, die</em></td><td><em>den</em></td><td><em>dem, der</em></td><td></td></tr>
</table>

### `PRON`

12477 [de-pos/PRON]() tokens (90% of all `PRON` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PRON` and `Case` co-occurred: <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (10828; 87%), <tt><a href="PronType.html">PronType</a>=Prs</tt> (7718; 62%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (7116; 57%).

`PRON` tokens may have the following values of `Case`:

* `Acc` (2826; 23% of non-empty `Case`): <em>sich, ihn, diese, die, mich, sie, es, was, alle, das</em>
* `Acc,Dat` (23; 0% of non-empty `Case`): <em>sich</em>
* `Acc,Nom` (406; 3% of non-empty `Case`): <em>es, sie, 's</em>
* `Dat` (1478; 12% of non-empty `Case`): <em>ihm, diesem, dieser, sich, mir, dem, ihnen, denen, der, uns</em>
* `Gen` (126; 1% of non-empty `Case`): <em>aller, seiner, dieser, jedes, mehrerer, meiner, unseres, einiger, vieler, ihrer</em>
* `Nom` (7618; 61% of non-empty `Case`): <em>er, sie, die, es, ich, der, man, wir, diese, das</em>
* `EMPTY` (1461): <em>keine, allem, dieser, anderem, dem, kein, der, keinen, dieses, einer</em>

<table>
  <tr><th>Paradigm <i>der</i></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th><th><tt>Dat</tt></th><th><tt>Gen</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Dem</tt></td><td><em>deren, der, dessen</em></td><td><em>deren, dessen</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Rel</tt></td><td><em>deren, dessen</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Rel</tt></td><td><em>deren</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Dem</tt></td><td><em>die</em></td><td><em>die</em></td><td><em>der</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Dem</tt></td><td></td><td><em>die</em></td><td><em>dessen</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Rel</tt></td><td></td><td></td><td><em>deren</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Dem</tt></td><td><em>das</em></td><td><em>das</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Dem</tt></td><td><em>die</em></td><td><em>die</em></td><td><em>deren</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Rel</tt></td><td></td><td><em>dessen, deren</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="PronType.html">PronType</a>=Dem</tt></td><td><em>das, die, der, des, den</em></td><td><em>das, die, den</em></td><td><em>dem, der, denen, den, Dessen</em></td><td><em>dessen, dem</em></td></tr>
  <tr><td><tt><a href="PronType.html">PronType</a>=Rel</tt></td><td><em>die, der, das, den, dem</em></td><td><em>die, den, das, dem</em></td><td><em>dem, denen, der</em></td><td><em>der</em></td></tr>
</table>

### `PROPN`

9827 [de-pos/PROPN]() tokens (31% of all `PROPN` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PROPN` and `Case` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (9399; 96%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (5092; 52%).

`PROPN` tokens may have the following values of `Case`:

* `Acc` (1331; 14% of non-empty `Case`): <em>USA, Mark, Award, Cup, Deutsche, Deutschland, Hamburger, Wiener, Dollar, Euro</em>
* `Dat` (4412; 45% of non-empty `Case`): <em>Weltkrieg, Oktober, Mai, November, Zweiten, September, März, University, Universität, Februar</em>
* `Gen` (635; 6% of non-empty `Case`): <em>Ersten, Weltkriegs, Weltkrieges, Zweiten, Instituts, Internationalen, Krieges, Reiches, Alten, Berliner</em>
* `Nom` (3449; 35% of non-empty `Case`): <em>von, SPD, Deutsche, Müller, Kohl, You, AG, I, de, it</em>
* `EMPTY` (21494): <em>von, of, de, der, Deutschland, the, Berlin, US, und, St.</em>

<table>
  <tr><th>Paradigm <i>Deutschland</i></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th><th><tt>Dat</tt></th><th><tt>Gen</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc,Neut</tt></td><td></td><td></td><td><em>Deutschland</em></td><td><em>Deutschlands</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Neut</tt></td><td><em>Deutschland</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt></tt></td><td><em>Deutschland</em></td><td><em>Deutschland</em></td><td><em>Deutschland</em></td><td></td></tr>
</table>

### `ADJ`

9218 [de-pos/ADJ]() tokens (45% of all `ADJ` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `ADJ` and `Case` co-occurred: <tt><a href="Degree.html">Degree</a>=Pos</tt> (8034; 87%), <tt><a href="Number.html">Number</a>=Sing</tt> (6645; 72%).

`ADJ` tokens may have the following values of `Case`:

* `Acc` (2914; 32% of non-empty `Case`): <em>neue, große, erste, ersten, weitere, eigene, verschiedene, viele, gute, hohe</em>
* `Dat` (3109; 34% of non-empty `Case`): <em>ersten, anderen, weiteren, neuen, deutschen, großen, letzten, gleichen, selben, zweiten</em>
* `Gen` (621; 7% of non-empty `Case`): <em>neuen, amerikanischen, ehemaligen, französischen, großen, gesamten, verschiedener, alten, damaligen, ersten</em>
* `Nom` (2574; 28% of non-empty `Case`): <em>erste, weitere, neue, kleine, viele, andere, deutsche, große, zahlreiche, meisten</em>
* `EMPTY` (11079): <em>später, bekannt, gut, kurz, lang, erste, freundlich, neu, möglich, ersten</em>

<table>
  <tr><th>Paradigm <i>erst</i></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th><th><tt>Dat</tt></th><th><tt>Gen</tt></th></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Pos|<a href="Gender.html">Gender</a>=Masc,Neut|<a href="Number.html">Number</a>=Sing</tt></td><td><em>erstes</em></td><td></td><td><em>ersten</em></td><td><em>ersten</em></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Pos|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>erste</em></td><td><em>ersten, erstes</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Pos|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td><em>erste, ersten</em></td><td><em>erste, ersten</em></td><td><em>ersten</em></td><td></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Pos|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td><em>ersten, erste</em></td><td><em>erste</em></td><td><em>ersten</em></td><td></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Pos|<a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td><em>erste, erstes</em></td><td><em>erste, erstes</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing</tt></td><td><em>erstes</em></td><td><em>ersten, erste, erstes</em></td><td><em>ersten</em></td><td></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur</tt></td><td><em>ersten, erste</em></td><td><em>ersten, erste</em></td><td><em>ersten</em></td><td><em>ersten</em></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Cmp,Pos|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>erster</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Cmp,Pos|<a href="Number.html">Number</a>=Sing</tt></td><td><em>Erster</em></td><td></td><td></td><td></td></tr>
</table>

### `NUM`

23 [de-pos/NUM]() tokens (0% of all `NUM` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `NUM` and `Case` co-occurred: <tt><a href="NumType.html">NumType</a>=Card</tt> (23; 100%).

`NUM` tokens may have the following values of `Case`:

* `Acc` (1; 4% of non-empty `Case`): <em>31</em>
* `Dat` (19; 83% of non-empty `Case`): <em>1, 13, 16, 17, 18, 1870er, 1:1, 2, 21, 22</em>
* `Nom` (3; 13% of non-empty `Case`): <em>2, fünfte, sechs</em>
* `EMPTY` (7344): <em>zwei, drei, vier, 2007, 2006, 2009, fünf, 2008, 2010, sechs</em>

<table>
  <tr><th>Paradigm <i>2</i></th><th><tt>Nom</tt></th><th><tt>Dat</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc,Neut</tt></td><td></td><td><em>2</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td><em>2</em></td><td></td></tr>
</table>

### `VERB`

5 [de-pos/VERB]() tokens (0% of all `VERB` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `VERB` and `Case` co-occurred: <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (5; 100%), <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (5; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (5; 100%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (4; 80%), <tt><a href="Number.html">Number</a>=Sing</tt> (4; 80%).

`VERB` tokens may have the following values of `Case`:

* `Acc` (2; 40% of non-empty `Case`): <em>meinen, umgebenden</em>
* `Gen` (3; 60% of non-empty `Case`): <em>angenommenen, erweiterten, großen</em>
* `EMPTY` (23558): <em>ist, war, sind, waren, wurde, gibt, kam, hat, liegt, hatte</em>

### `X`

3 [de-pos/X]() tokens (1% of all `X` tokens) have a non-empty value of `Case`.

`X` tokens may have the following values of `Case`:

* `Acc` (1; 33% of non-empty `Case`): <em>the</em>
* `Dat` (1; 33% of non-empty `Case`): <em>er</em>
* `Nom` (1; 33% of non-empty `Case`): <em>What</em>
* `EMPTY` (353): <em>z.B., u.a., =, %, B., /, etc., †, &amp;, *</em>

### `ADV`

2 [de-pos/ADV]() tokens (0% of all `ADV` tokens) have a non-empty value of `Case`.

`ADV` tokens may have the following values of `Case`:

* `Acc` (1; 50% of non-empty `Case`): <em>mehr</em>
* `Nom` (1; 50% of non-empty `Case`): <em>Genau</em>
* `EMPTY` (13689): <em>auch, nur, noch, sehr, so, dort, wieder, heute, hier, jedoch</em>

### `ADP`

2 [de-pos/ADP]() tokens (0% of all `ADP` tokens) have a non-empty value of `Case`.

`ADP` tokens may have the following values of `Case`:

* `Nom` (2; 100% of non-empty `Case`): <em>als</em>
* `EMPTY` (30770): <em>in, von, mit, zu, an, auf, für, als, nach, bei</em>

### `SCONJ`

1 [de-pos/SCONJ]() tokens (0% of all `SCONJ` tokens) have a non-empty value of `Case`.

`SCONJ` tokens may have the following values of `Case`:

* `Nom` (1; 100% of non-empty `Case`): <em>dass</em>
* `EMPTY` (1657): <em>dass, da, als, wenn, daß, nachdem, weil, während, ob, wie</em>

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`:
<tt>NOUN --[<a href="../dep/det.html">det</a>]--> DET</tt> (21949; 100%),
<tt>NOUN --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (8686; 100%),
<tt>PROPN --[<a href="../dep/det.html">det</a>]--> DET</tt> (2846; 69%),
<tt>NOUN --[<a href="../dep/det.html">det</a>]--> PRON</tt> (1498; 99%),
<tt>PROPN --[<a href="../dep/amod.html">amod</a>]--> PROPN</tt> (814; 91%),
<tt>NOUN --[<a href="../dep/det:poss.html">det:poss</a>]--> PRON</tt> (383; 100%),
<tt>PROPN --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (266; 59%),
<tt>NOUN --[<a href="../dep/amod.html">amod</a>]--> PROPN</tt> (140; 84%),
<tt>NOUN --[<a href="../dep/amod.html">amod</a>]--> PRON</tt> (56; 100%),
<tt>PRON --[<a href="../dep/det.html">det</a>]--> DET</tt> (47; 96%).

