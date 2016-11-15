

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This feature is universal.
It occurs with 3 different values: `Fem`, `Masc`, `Neut`.
Some words have combined values of the feature; 1 combinations have been observed: `Masc|Neut`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: [Gender](), [Gender[psor]]().

66994 tokens (22%) have a non-empty value of `Gender`.
16537 types (33%) occur at least once with a non-empty value of `Gender`.
14428 lemmas (34%) occur at least once with a non-empty value of `Gender`.
The feature is used with 11 part-of-speech tags: [de-pos/DET]() (24900; 8% instances), [de-pos/NOUN]() (24803; 8% instances), [de-pos/ADJ]() (6700; 2% instances), [de-pos/PRON]() (5689; 2% instances), [de-pos/PROPN]() (4864; 2% instances), [de-pos/NUM]() (29; 0% instances), [de-pos/VERB]() (4; 0% instances), [de-pos/ADP]() (2; 0% instances), [de-pos/ADV]() (1; 0% instances), [de-pos/SCONJ]() (1; 0% instances), [de-pos/X]() (1; 0% instances).

### `DET`

24900 [de-pos/DET]() tokens (67% of all `DET` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `DET` and `Gender` co-occurred: <tt><a href="PronType.html">PronType</a>=Art</tt> (24747; 99%), <tt><a href="Number.html">Number</a>=Sing</tt> (24392; 98%), <tt><a href="Definite.html">Definite</a>=Def</tt> (20947; 84%).

`DET` tokens may have the following values of `Gender`:

* `Fem` (10387; 42% of non-empty `Gender`): <em>die, der, eine, einer, den, dessen, diese, jener, aller, dem</em>
* `Masc` (3549; 14% of non-empty `Gender`): <em>der, den, einen, dessen, die, Das, deinen, dieser, jener</em>
* `Masc,Neut` (8905; 36% of non-empty `Gender`): <em>dem, des, ein, einem, eines, diesem, eins</em>
* `Neut` (2059; 8% of non-empty `Gender`): <em>das, die, den, der, dem, dessen, Dieses, einige</em>
* `EMPTY` (12113): <em>der, die, den, ein, dem, eine, seine, das, seiner, sein</em>

<table>
  <tr><th>Paradigm <i>der</i></th><th><tt>Masc</tt></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>den</em></td><td><em>dem</em></td><td><em>die, der</em></td><td><em>das, dem</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>die, den</em></td><td></td><td><em>die, den</em></td><td><em>die, den</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Dem</tt></td><td><em>dessen, den</em></td><td></td><td><em>die</em></td><td><em>das</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Rel</tt></td><td><em>dessen, den</em></td><td></td><td><em>die</em></td><td><em>das</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Dem</tt></td><td></td><td></td><td></td><td><em>das</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art</tt></td><td></td><td><em>dem</em></td><td><em>der, dem, den, die</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>den</em></td><td></td><td><em>den</em></td><td><em>den</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Dem</tt></td><td></td><td><em>dem</em></td><td><em>derer</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Rel</tt></td><td></td><td><em>dem</em></td><td><em>der</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Dem</tt></td><td></td><td></td><td><em>dessen</em></td><td><em>dessen</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Rel</tt></td><td></td><td></td><td></td><td><em>dessen</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art</tt></td><td></td><td><em>des</em></td><td><em>der</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Art</tt></td><td></td><td></td><td><em>der</em></td><td><em>der</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>der, den</em></td><td><em>dem, des</em></td><td><em>die</em></td><td><em>das</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>die, der, Das</em></td><td></td><td><em>die, den</em></td><td><em>die, das</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Dem</tt></td><td><em>dessen, der</em></td><td></td><td><em>die</em></td><td><em>das</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Rel</tt></td><td><em>dessen, der</em></td><td></td><td><em>die</em></td><td><em>das</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Dem</tt></td><td></td><td></td><td></td><td><em>die</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Rel</tt></td><td><em>dessen</em></td><td></td><td><em>Die</em></td><td></td></tr>
</table>

### `NOUN`

24803 [de-pos/NOUN]() tokens (47% of all `NOUN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NOUN` and `Gender` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (23172; 93%).

`NOUN` tokens may have the following values of `Gender`:

* `Fem` (11329; 46% of non-empty `Gender`): <em>Zeit, Stadt, Familie, Saison, Rolle, Regierung, Firma, Praxis, Seite, Gemeinde</em>
* `Masc` (3511; 14% of non-empty `Gender`): <em>Ort, Name, Platz, Film, Begriff, Teil, Preis, Betrieb, Hause, Titel</em>
* `Masc,Neut` (7636; 31% of non-empty `Gender`): <em>Jahr, Jahre, Teil, Ende, Beispiel, Bereich, Rahmen, Gebiet, Sommer, Gegensatz</em>
* `Neut` (2327; 9% of non-empty `Gender`): <em>Zeit, Unternehmen, Album, Team, Leben, essen, Personal, Gebäude, Teile, Gebiet</em>
* `EMPTY` (28493): <em>Jahren, Jahre, Prozent, Stadt, Menschen, km, %, m, Ende, Sohn</em>

<table>
  <tr><th>Paradigm <i>Wappen</i></th><th><tt>Masc</tt></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc</tt></td><td><em>Wappen</em></td><td></td><td></td><td><em>Wappen</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat</tt></td><td></td><td><em>Wappen</em></td><td><em>Wappen</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen</tt></td><td></td><td><em>Wappens</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom</tt></td><td></td><td></td><td><em>Wappen</em></td><td><em>Wappen</em></td></tr>
</table>

### `ADJ`

6700 [de-pos/ADJ]() tokens (31% of all `ADJ` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `ADJ` and `Gender` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (6066; 91%), <tt><a href="Degree.html">Degree</a>=Pos</tt> (5917; 88%).

`ADJ` tokens may have the following values of `Gender`:

* `Fem` (3277; 49% of non-empty `Gender`): <em>erste, neue, große, ersten, weitere, deutschen, kleine, andere, deutsche, eigene</em>
* `Masc` (921; 14% of non-empty `Gender`): <em>erste, ersten, neuen, weiteren, dritten, größten, neue, alte, großen, deutsche</em>
* `Masc,Neut` (1947; 29% of non-empty `Gender`): <em>ersten, gleichen, selben, neuen, heutigen, großen, amerikanischen, nächsten, französischen, weiteren</em>
* `Neut` (555; 8% of non-empty `Gender`): <em>erste, gesamte, neue, heutige, alte, ganze, große, dritte, ehemalige, kurzer</em>
* `EMPTY` (14616): <em>später, bekannt, ersten, anderen, weitere, gut, erste, kurz, viele, vielen</em>

<table>
  <tr><th>Paradigm <i>erst</i></th><th><tt>Masc</tt></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing</tt></td><td><em>ersten, erstes</em></td><td></td><td><em>erste, ersten</em></td><td><em>erste, erstes</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td></td><td><em>erste</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>ersten</em></td><td><em>ersten</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td></td><td><em>ersten</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>ersten</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Sing</tt></td><td><em>erste</em></td><td><em>erstes</em></td><td><em>erste, ersten</em></td><td><em>erste, erstes</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Pos|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td></td><td><em>ersten, erste</em></td><td><em>ersten</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Degree.html">Degree</a>=Cmp,Pos|<a href="Number.html">Number</a>=Sing</tt></td><td><em>erster</em></td><td></td><td></td><td></td></tr>
</table>

### `PRON`

5689 [de-pos/PRON]() tokens (38% of all `PRON` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PRON` and `Gender` co-occurred: <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (5689; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (5503; 97%), <tt><a href="PronType.html">PronType</a>=Prs</tt> (4555; 80%), <tt><a href="Person.html">Person</a>=3</tt> (4325; 76%), <tt><a href="Case.html">Case</a>=Nom</tt> (3708; 65%).

`PRON` tokens may have the following values of `Gender`:

* `Fem` (1349; 24% of non-empty `Gender`): <em>sie, diese, dieser, alle, meine, unsere, seine, ihre, jede, seiner</em>
* `Masc` (2676; 47% of non-empty `Gender`): <em>er, ihm, ihn, dieser, diesen, ihren, jeden, meinen, deren, jeder</em>
* `Masc,Neut` (450; 8% of non-empty `Gender`): <em>diesem, dieses, mein, meinem, ihrem, sein, seinem, jedem, jedes, ihr</em>
* `Neut` (1214; 21% of non-empty `Gender`): <em>es, dieses, aller, das, diesen, 's, ihre, viel, andere, einige</em>
* `EMPTY` (9289): <em>sich, die, sie, ich, der, man, das, wir, was, diese</em>

<table>
  <tr><th>Paradigm <i>der</i></th><th><tt>Masc</tt></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Dem</tt></td><td><em>deren, dessen</em></td><td></td><td><em>die</em></td><td><em>das</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Dem</tt></td><td></td><td></td><td><em>die</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Dem</tt></td><td></td><td><em>dem</em></td><td><em>der</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Dem</tt></td><td></td><td></td><td><em>dessen</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Rel</tt></td><td></td><td></td><td><em>deren</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Dem</tt></td><td><em>deren, der, dessen</em></td><td></td><td><em>die</em></td><td><em>das</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Rel</tt></td><td><em>dessen, deren</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Rel</tt></td><td><em>deren</em></td><td></td><td></td><td></td></tr>
</table>

### `PROPN`

4864 [de-pos/PROPN]() tokens (15% of all `PROPN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PROPN` and `Gender` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (4828; 99%).

`PROPN` tokens may have the following values of `Gender`:

* `Fem` (1649; 34% of non-empty `Gender`): <em>University, Universität, SPD, USA, Schweiz, Bundesrepublik, Deutsche, Hochschule, AG, Straße</em>
* `Masc` (726; 15% of non-empty `Gender`): <em>USA, Frankreich, FC, Heinrich, River, Österreich, Award, Cup, Ehrlich, Friedrich</em>
* `Masc,Neut` (2098; 43% of non-empty `Gender`): <em>Weltkrieg, Zweiten, Oktober, Mai, September, Ersten, November, März, Februar, Dezember</em>
* `Neut` (391; 8% of non-empty `Gender`): <em>Kreuz, Museum, München, Institut, Eiserne, Team, College, Gymnasium, Haus, Klein</em>
* `EMPTY` (27467): <em>von, Deutschland, de, of, der, Berlin, the, US, und, St.</em>

<table>
  <tr><th>Paradigm <i>deutsch</i></th><th><tt>Masc</tt></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc</tt></td><td></td><td></td><td><em>Deutsche</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat</tt></td><td><em>Deutsch</em></td><td><em>Deutschen</em></td><td><em>Deutschen</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen</tt></td><td></td><td><em>Deutschen</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom</tt></td><td><em>Deutsche</em></td><td></td><td><em>Deutsche</em></td><td><em>Deutsche</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `PROPN`. 92% lemmas (2626) occur only with one value of `Gender`.

### `NUM`

29 [de-pos/NUM]() tokens (0% of all `NUM` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NUM` and `Gender` co-occurred: <tt><a href="NumType.html">NumType</a>=Card</tt> (29; 100%).

`NUM` tokens may have the following values of `Gender`:

* `Fem` (3; 10% of non-empty `Gender`): <em>2, 35, fünfte</em>
* `Masc` (1; 3% of non-empty `Gender`): <em>18.</em>
* `Masc,Neut` (25; 86% of non-empty `Gender`): <em>1, 24., 31, 6, 1., 13, 16, 17, 18, 1:1</em>
* `EMPTY` (7603): <em>zwei, drei, vier, 2007, 2006, fünf, 2009, 2008, 2010, sechs</em>

<table>
  <tr><th>Paradigm <i>2</i></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat</tt></td><td><em>2</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom</tt></td><td></td><td><em>2</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `NUM`. 95% lemmas (21) occur only with one value of `Gender`.

### `VERB`

4 [de-pos/VERB]() tokens (0% of all `VERB` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `VERB` and `Gender` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (4; 100%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (4; 100%), <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (4; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (4; 100%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (3; 75%).

`VERB` tokens may have the following values of `Gender`:

* `Masc` (2; 50% of non-empty `Gender`): <em>meinen, umgebenden</em>
* `Masc,Neut` (2; 50% of non-empty `Gender`): <em>erweiterten, großen</em>
* `EMPTY` (25037): <em>ist, war, sind, waren, wurde, gibt, hat, kam, liegt, hatte</em>

### `ADP`

2 [de-pos/ADP]() tokens (0% of all `ADP` tokens) have a non-empty value of `Gender`.

`ADP` tokens may have the following values of `Gender`:

* `Fem` (1; 50% of non-empty `Gender`): <em>als</em>
* `Masc,Neut` (1; 50% of non-empty `Gender`): <em>als</em>
* `EMPTY` (32361): <em>in, von, mit, zu, an, auf, für, als, nach, bei</em>

<table>
  <tr><th>Paradigm <i>als</i></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt></tt></td><td><em>als</em></td><td><em>als</em></td></tr>
</table>

### `X`

1 [de-pos/X]() tokens (0% of all `X` tokens) have a non-empty value of `Gender`.

`X` tokens may have the following values of `Gender`:

* `Fem` (1; 100% of non-empty `Gender`): <em>the</em>
* `EMPTY` (378): <em>z.B., u.a., =, %, B., etc., /, †, &amp;, *</em>

### `SCONJ`

1 [de-pos/SCONJ]() tokens (0% of all `SCONJ` tokens) have a non-empty value of `Gender`.

`SCONJ` tokens may have the following values of `Gender`:

* `Masc,Neut` (1; 100% of non-empty `Gender`): <em>dass</em>
* `EMPTY` (1824): <em>dass, da, wenn, als, daß, nachdem, weil, während, wie, ob</em>

### `ADV`

1 [de-pos/ADV]() tokens (0% of all `ADV` tokens) have a non-empty value of `Gender`.

`ADV` tokens may have the following values of `Gender`:

* `Neut` (1; 100% of non-empty `Gender`): <em>mehr</em>
* `EMPTY` (14957): <em>auch, nur, noch, sehr, so, dort, wieder, hier, heute, mehr</em>

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>NOUN --[<a href="../dep/det.html">det</a>]--> DET</tt> (21301; 100%),
<tt>NOUN --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (6359; 100%),
<tt>PROPN --[<a href="../dep/det.html">det</a>]--> DET</tt> (3597; 100%),
<tt>NOUN --[<a href="../dep/det.html">det</a>]--> PRON</tt> (1101; 99%),
<tt>PROPN --[<a href="../dep/amod.html">amod</a>]--> PROPN</tt> (744; 100%),
<tt>NOUN --[<a href="../dep/det:poss.html">det:poss</a>]--> PRON</tt> (416; 100%),
<tt>PROPN --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (324; 100%),
<tt>NOUN --[<a href="../dep/amod.html">amod</a>]--> PROPN</tt> (139; 100%),
<tt>NOUN --[<a href="../dep/amod.html">amod</a>]--> PRON</tt> (26; 100%),
<tt>NOUN --[<a href="../dep/det.html">det</a>]--> ADJ</tt> (17; 100%).

