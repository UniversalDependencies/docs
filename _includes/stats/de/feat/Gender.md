

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This feature is universal.
It occurs with 3 different values: `Fem`, `Masc`, `Neut`.
Some words have combined values of the feature; 1 combinations have been observed: `Masc|Neut`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: [Gender](), [Gender[psor]]().

63588 tokens (23%) have a non-empty value of `Gender`.
15958 types (33%) occur at least once with a non-empty value of `Gender`.
13945 lemmas (34%) occur at least once with a non-empty value of `Gender`.
The feature is used with 11 part-of-speech tags: [de-pos/DET]() (23699; 8% instances), [de-pos/NOUN]() (23419; 8% instances), [de-pos/ADJ]() (6346; 2% instances), [de-pos/PRON]() (5361; 2% instances), [de-pos/PROPN]() (4735; 2% instances), [de-pos/NUM]() (19; 0% instances), [de-pos/VERB]() (4; 0% instances), [de-pos/ADP]() (2; 0% instances), [de-pos/ADV]() (1; 0% instances), [de-pos/SCONJ]() (1; 0% instances), [de-pos/X]() (1; 0% instances).

### `DET`

23699 [de-pos/DET]() tokens (67% of all `DET` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `DET` and `Gender` co-occurred: <tt><a href="PronType.html">PronType</a>=Art</tt> (23556; 99%), <tt><a href="Number.html">Number</a>=Sing</tt> (23217; 98%), <tt><a href="Definite.html">Definite</a>=Def</tt> (19954; 84%).

`DET` tokens may have the following values of `Gender`:

* `Fem` (9880; 42% of non-empty `Gender`): <em>die, der, eine, einer, den, dessen, jener, Diese, aller, alle</em>
* `Masc` (3379; 14% of non-empty `Gender`): <em>der, den, einen, dessen, die, Das, deinen, dieser, jener</em>
* `Masc,Neut` (8473; 36% of non-empty `Gender`): <em>dem, des, ein, einem, eines, diesem, eins</em>
* `Neut` (1967; 8% of non-empty `Gender`): <em>das, die, den, der, dem, dessen, Dieses, einige</em>
* `EMPTY` (11569): <em>der, die, den, ein, dem, eine, seine, das, seiner, sein</em>

<table>
  <tr><th>Paradigm <i>der</i></th><th><tt>Masc</tt></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>den</em></td><td><em>dem</em></td><td><em>die, der</em></td><td><em>das, dem</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>die, den</em></td><td></td><td><em>die, den</em></td><td><em>die, den</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Dem</tt></td><td><em>dessen, den</em></td><td></td><td><em>die</em></td><td><em>das</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Rel</tt></td><td><em>dessen, den</em></td><td></td><td><em>die</em></td><td><em>das</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Dem</tt></td><td></td><td></td><td></td><td><em>das</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art</tt></td><td></td><td><em>dem</em></td><td><em>der, die, den, dem</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>den</em></td><td></td><td><em>den</em></td><td><em>den</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Dem</tt></td><td></td><td><em>dem</em></td><td><em>derer</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Rel</tt></td><td></td><td><em>dem</em></td><td><em>der</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Dem</tt></td><td></td><td></td><td><em>dessen</em></td><td><em>dessen</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Rel</tt></td><td></td><td></td><td></td><td><em>dessen</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art</tt></td><td></td><td><em>des</em></td><td><em>der</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Art</tt></td><td></td><td></td><td><em>der</em></td><td><em>der</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>der, den</em></td><td><em>dem, des</em></td><td><em>die</em></td><td><em>das</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>die, der, Das</em></td><td></td><td><em>die, den</em></td><td><em>die, das</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Dem</tt></td><td><em>dessen</em></td><td></td><td><em>die</em></td><td><em>das</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Rel</tt></td><td><em>dessen, der</em></td><td></td><td><em>die</em></td><td><em>das</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Dem</tt></td><td></td><td></td><td></td><td><em>die</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Rel</tt></td><td><em>dessen</em></td><td></td><td><em>Die</em></td><td></td></tr>
</table>

### `NOUN`

23419 [de-pos/NOUN]() tokens (47% of all `NOUN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NOUN` and `Gender` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (21892; 93%).

`NOUN` tokens may have the following values of `Gender`:

* `Fem` (10681; 46% of non-empty `Gender`): <em>Zeit, Stadt, Familie, Saison, Rolle, Praxis, Gemeinde, Gruppe, Region, Firma</em>
* `Masc` (3307; 14% of non-empty `Gender`): <em>Ort, Name, Platz, Film, Begriff, Teil, Betrieb, Preis, Titel, Bahnhof</em>
* `Masc,Neut` (7219; 31% of non-empty `Gender`): <em>Jahr, Jahre, Teil, Ende, Beispiel, Bereich, Rahmen, Gebiet, Gegensatz, Sommer</em>
* `Neut` (2212; 9% of non-empty `Gender`): <em>Zeit, Unternehmen, Album, Team, Leben, essen, Gebäude, Teile, Gebiet, Personal</em>
* `EMPTY` (26769): <em>Jahren, Jahre, Prozent, Stadt, km, %, Menschen, m, Ende, Sohn</em>

<table>
  <tr><th>Paradigm <i>Wappen</i></th><th><tt>Masc</tt></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc</tt></td><td><em>Wappen</em></td><td></td><td></td><td><em>Wappen</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat</tt></td><td></td><td><em>Wappen</em></td><td><em>Wappen</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen</tt></td><td></td><td><em>Wappens</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom</tt></td><td></td><td></td><td><em>Wappen</em></td><td><em>Wappen</em></td></tr>
</table>

### `ADJ`

6346 [de-pos/ADJ]() tokens (31% of all `ADJ` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `ADJ` and `Gender` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (5742; 90%), <tt><a href="Degree.html">Degree</a>=Pos</tt> (5611; 88%).

`ADJ` tokens may have the following values of `Gender`:

* `Fem` (3114; 49% of non-empty `Gender`): <em>erste, neue, große, ersten, weitere, deutschen, kleine, andere, deutsche, eigene</em>
* `Masc` (871; 14% of non-empty `Gender`): <em>erste, ersten, neuen, dritten, größten, neue, alte, weiteren, deutsche, großen</em>
* `Masc,Neut` (1830; 29% of non-empty `Gender`): <em>ersten, gleichen, selben, neuen, heutigen, amerikanischen, französischen, großen, nächsten, weiteren</em>
* `Neut` (531; 8% of non-empty `Gender`): <em>erste, gesamte, neue, heutige, ganze, große, alte, dritte, ehemalige, eigene</em>
* `EMPTY` (13951): <em>später, bekannt, ersten, weitere, anderen, gut, erste, kurz, vielen, viele</em>

<table>
  <tr><th>Paradigm <i>erst</i></th><th><tt>Masc</tt></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing</tt></td><td><em>ersten, erstes</em></td><td></td><td><em>erste, ersten</em></td><td><em>erste, erstes</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td></td><td><em>erste</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>ersten</em></td><td><em>ersten</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td></td><td><em>ersten</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>ersten</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing</tt></td><td><em>erste</em></td><td><em>erstes</em></td><td><em>erste, ersten</em></td><td><em>erste, erstes</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td></td><td><em>ersten, erste</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Cmp,Pos|<a href="Number.html">Number</a>=Sing</tt></td><td><em>erster</em></td><td></td><td></td><td></td></tr>
</table>

### `PRON`

5361 [de-pos/PRON]() tokens (38% of all `PRON` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PRON` and `Gender` co-occurred: <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (5361; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (5190; 97%), <tt><a href="PronType.html">PronType</a>=Prs</tt> (4289; 80%), <tt><a href="Person.html">Person</a>=3</tt> (4093; 76%), <tt><a href="Case.html">Case</a>=Nom</tt> (3530; 66%).

`PRON` tokens may have the following values of `Gender`:

* `Fem` (1252; 23% of non-empty `Gender`): <em>sie, diese, dieser, alle, meine, jede, unsere, seine, einige, beiden</em>
* `Masc` (2600; 48% of non-empty `Gender`): <em>er, ihm, ihn, dieser, diesen, jeden, ihren, meinen, jeder, deren</em>
* `Masc,Neut` (390; 7% of non-empty `Gender`): <em>diesem, dieses, mein, meinem, jedem, jedes, unser, seinem, ihr, Ihm</em>
* `Neut` (1119; 21% of non-empty `Gender`): <em>es, dieses, aller, das, diesen, viel, 's, andere, einige, viele</em>
* `EMPTY` (8577): <em>sich, die, sie, ich, der, man, das, wir, was, diese</em>

<table>
  <tr><th>Paradigm <i>dies</i></th><th><tt>Masc</tt></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>diesen</em></td><td><em>dieses</em></td><td><em>diese</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Plur</tt></td><td><em>diese</em></td><td></td><td><em>diese</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>diesem</em></td><td><em>dieser</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td></td><td><em>diesen</em></td><td><em>diesen</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td></td><td><em>dieser</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing</tt></td><td><em>dieser, diesen</em></td><td></td><td><em>diese</em></td><td><em>dieses</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur</tt></td><td><em>Diese</em></td><td></td><td><em>diese</em></td><td><em>diese</em></td></tr>
</table>

### `PROPN`

4735 [de-pos/PROPN]() tokens (15% of all `PROPN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PROPN` and `Gender` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (4699; 99%).

`PROPN` tokens may have the following values of `Gender`:

* `Fem` (1617; 34% of non-empty `Gender`): <em>University, Universität, SPD, Deutsche, Schweiz, USA, Bundesrepublik, Hochschule, AG, Straße</em>
* `Masc` (714; 15% of non-empty `Gender`): <em>USA, Frankreich, FC, Heinrich, River, Award, Cup, Ehrlich, Friedrich, Österreich</em>
* `Masc,Neut` (2023; 43% of non-empty `Gender`): <em>Weltkrieg, Zweiten, Mai, Oktober, Ersten, November, September, März, Februar, Dezember</em>
* `Neut` (381; 8% of non-empty `Gender`): <em>Kreuz, Museum, München, Institut, Eiserne, Team, College, Gymnasium, Haus, Klein</em>
* `EMPTY` (26586): <em>von, de, Deutschland, of, der, Berlin, the, US, und, St.</em>

<table>
  <tr><th>Paradigm <i>deutsch</i></th><th><tt>Masc</tt></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc</tt></td><td></td><td></td><td><em>Deutsche</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat</tt></td><td><em>Deutsch</em></td><td><em>Deutschen</em></td><td><em>Deutschen</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen</tt></td><td></td><td><em>Deutschen</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom</tt></td><td><em>Deutsche</em></td><td></td><td><em>Deutsche</em></td><td><em>Deutsche</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `PROPN`. 92% lemmas (2591) occur only with one value of `Gender`.

### `NUM`

19 [de-pos/NUM]() tokens (0% of all `NUM` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NUM` and `Gender` co-occurred: <tt><a href="NumType.html">NumType</a>=Card</tt> (19; 100%).

`NUM` tokens may have the following values of `Gender`:

* `Fem` (3; 16% of non-empty `Gender`): <em>2, 35, fünfte</em>
* `Masc,Neut` (16; 84% of non-empty `Gender`): <em>1, 13, 16, 17, 18, 1:1, 2, 21, 22, 3</em>
* `EMPTY` (7348): <em>zwei, drei, vier, 2007, 2006, 2009, fünf, 2008, 2010, sechs</em>

<table>
  <tr><th>Paradigm <i>2</i></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat</tt></td><td><em>2</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom</tt></td><td></td><td><em>2</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `NUM`. 94% lemmas (15) occur only with one value of `Gender`.

### `VERB`

4 [de-pos/VERB]() tokens (0% of all `VERB` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `VERB` and `Gender` co-occurred: <tt><a href="Person.html">Person</a>=EMPTY</tt> (4; 100%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (4; 100%), <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (4; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (4; 100%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (3; 75%).

`VERB` tokens may have the following values of `Gender`:

* `Masc` (2; 50% of non-empty `Gender`): <em>meinen, umgebenden</em>
* `Masc,Neut` (2; 50% of non-empty `Gender`): <em>erweiterten, großen</em>
* `EMPTY` (23559): <em>ist, war, sind, waren, wurde, gibt, kam, hat, liegt, hatte</em>

### `ADP`

2 [de-pos/ADP]() tokens (0% of all `ADP` tokens) have a non-empty value of `Gender`.

`ADP` tokens may have the following values of `Gender`:

* `Fem` (1; 50% of non-empty `Gender`): <em>als</em>
* `Masc,Neut` (1; 50% of non-empty `Gender`): <em>als</em>
* `EMPTY` (30770): <em>in, von, mit, zu, an, auf, für, als, nach, bei</em>

<table>
  <tr><th>Paradigm <i>als</i></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt></tt></td><td><em>als</em></td><td><em>als</em></td></tr>
</table>

### `ADV`

1 [de-pos/ADV]() tokens (0% of all `ADV` tokens) have a non-empty value of `Gender`.

`ADV` tokens may have the following values of `Gender`:

* `Neut` (1; 100% of non-empty `Gender`): <em>mehr</em>
* `EMPTY` (13690): <em>auch, nur, noch, sehr, so, dort, wieder, heute, hier, jedoch</em>

### `X`

1 [de-pos/X]() tokens (0% of all `X` tokens) have a non-empty value of `Gender`.

`X` tokens may have the following values of `Gender`:

* `Fem` (1; 100% of non-empty `Gender`): <em>the</em>
* `EMPTY` (355): <em>z.B., u.a., =, %, B., /, etc., †, &amp;, *</em>

### `SCONJ`

1 [de-pos/SCONJ]() tokens (0% of all `SCONJ` tokens) have a non-empty value of `Gender`.

`SCONJ` tokens may have the following values of `Gender`:

* `Masc,Neut` (1; 100% of non-empty `Gender`): <em>dass</em>
* `EMPTY` (1657): <em>dass, da, als, wenn, daß, nachdem, weil, während, ob, wie</em>

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>NOUN --[<a href="../dep/det.html">det</a>]--> DET</tt> (19782; 100%),
<tt>NOUN --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (5919; 100%),
<tt>PROPN --[<a href="../dep/det.html">det</a>]--> DET</tt> (2732; 70%),
<tt>NOUN --[<a href="../dep/det.html">det</a>]--> PRON</tt> (1031; 99%),
<tt>PROPN --[<a href="../dep/amod.html">amod</a>]--> PROPN</tt> (683; 91%),
<tt>NOUN --[<a href="../dep/det:poss.html">det:poss</a>]--> PRON</tt> (311; 100%),
<tt>PROPN --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (242; 62%),
<tt>NOUN --[<a href="../dep/amod.html">amod</a>]--> PROPN</tt> (127; 88%),
<tt>NOUN --[<a href="../dep/amod.html">amod</a>]--> PRON</tt> (24; 100%),
<tt>NOUN --[<a href="../dep/det.html">det</a>]--> ADJ</tt> (16; 100%).

