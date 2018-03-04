---
layout: base
title:  'Statistics of Gender in UD_German'
udver: '2'
---

## Treebank Statistics: UD_German: Features: `Gender`

This feature is universal.
It occurs with 3 different values: `Fem`, `Masc`, `Neut`.
Some words have combined values of the feature; 1 combinations have been observed: `Masc|Neut`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: <tt><a href="de-feat-Gender.html">Gender</a></tt>, <tt><a href="de-feat-Gender-psor.html">Gender[psor]</a></tt>.

65616 tokens (22%) have a non-empty value of `Gender`.
16530 types (33%) occur at least once with a non-empty value of `Gender`.
14421 lemmas (34%) occur at least once with a non-empty value of `Gender`.
The feature is used with 11 part-of-speech tags: <tt><a href="de-pos-DET.html">DET</a></tt> (24385; 8% instances), <tt><a href="de-pos-NOUN.html">NOUN</a></tt> (24295; 8% instances), <tt><a href="de-pos-ADJ.html">ADJ</a></tt> (6577; 2% instances), <tt><a href="de-pos-PRON.html">PRON</a></tt> (5571; 2% instances), <tt><a href="de-pos-PROPN.html">PROPN</a></tt> (4750; 2% instances), <tt><a href="de-pos-NUM.html">NUM</a></tt> (29; 0% instances), <tt><a href="de-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="de-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="de-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="de-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="de-pos-X.html">X</a></tt> (1; 0% instances).

### `DET`

24385 <tt><a href="de-pos-DET.html">DET</a></tt> tokens (67% of all `DET` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `DET` and `Gender` co-occurred: <tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt> (24238; 99%), <tt><a href="de-feat-Number.html">Number</a></tt><tt>=Sing</tt> (23888; 98%), <tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (20522; 84%).

`DET` tokens may have the following values of `Gender`:

* `Fem` (10173; 42% of non-empty `Gender`): <em>die, der, eine, einer, den, dessen, diese, jener, dem, alle</em>
* `Masc` (3472; 14% of non-empty `Gender`): <em>der, den, einen, dessen, die, Das, deinen, dieser, jener</em>
* `Masc,Neut` (8712; 36% of non-empty `Gender`): <em>dem, des, ein, einem, eines, diesem, eins</em>
* `Neut` (2028; 8% of non-empty `Gender`): <em>das, die, den, der, dem, dessen, Dieses, einige</em>
* `EMPTY` (11848): <em>der, die, den, ein, dem, eine, seine, das, seiner, sein</em>

<table>
  <tr><th>Paradigm <i>der</i></th><th><tt>Masc</tt></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td><em>den</em></td><td><em>dem</em></td><td><em>die, der</em></td><td><em>das, dem</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td><em>die, den</em></td><td></td><td><em>die, den</em></td><td><em>die, den</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td><em>dessen, den</em></td><td></td><td><em>die</em></td><td><em>das</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Rel</tt></tt></td><td><em>dessen, den</em></td><td></td><td><em>die</em></td><td><em>das</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td></td><td></td><td></td><td><em>das</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td></td><td><em>dem</em></td><td><em>der, dem, den, die</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td><em>den</em></td><td></td><td><em>den</em></td><td><em>den</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td></td><td><em>dem</em></td><td><em>derer</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Rel</tt></tt></td><td></td><td><em>dem</em></td><td><em>der</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td></td><td></td><td><em>dessen</em></td><td><em>dessen</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Rel</tt></tt></td><td></td><td></td><td></td><td><em>dessen</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td></td><td><em>des</em></td><td><em>der</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td></td><td></td><td><em>der</em></td><td><em>der</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td><em>der, den</em></td><td><em>des, dem</em></td><td><em>die</em></td><td><em>das</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td><em>die, der, Das</em></td><td></td><td><em>die, den</em></td><td><em>die, das</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td><em>dessen, der</em></td><td></td><td><em>die</em></td><td><em>das</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Rel</tt></tt></td><td><em>dessen, der</em></td><td></td><td><em>die</em></td><td><em>das</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td></td><td></td><td></td><td><em>die</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Rel</tt></tt></td><td><em>dessen</em></td><td></td><td><em>Die</em></td><td></td></tr>
</table>

### `NOUN`

24295 <tt><a href="de-pos-NOUN.html">NOUN</a></tt> tokens (47% of all `NOUN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NOUN` and `Gender` co-occurred: <tt><a href="de-feat-Number.html">Number</a></tt><tt>=Sing</tt> (22704; 93%).

`NOUN` tokens may have the following values of `Gender`:

* `Fem` (11100; 46% of non-empty `Gender`): <em>Zeit, Stadt, Familie, Saison, Rolle, Regierung, Praxis, Firma, Gemeinde, Seite</em>
* `Masc` (3437; 14% of non-empty `Gender`): <em>Ort, Name, Platz, Film, Teil, Begriff, Preis, Hause, Titel, Bahnhof</em>
* `Masc,Neut` (7471; 31% of non-empty `Gender`): <em>Jahr, Jahre, Teil, Ende, Beispiel, Bereich, Rahmen, Gebiet, Sommer, Gegensatz</em>
* `Neut` (2287; 9% of non-empty `Gender`): <em>Zeit, Unternehmen, Album, Team, Leben, essen, Personal, Teile, Gebiet, Gebäude</em>
* `EMPTY` (27938): <em>Jahren, Jahre, Prozent, Stadt, Menschen, %, km, m, Ende, Sohn</em>

<table>
  <tr><th>Paradigm <i>Wappen</i></th><th><tt>Masc</tt></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt></tt></td><td><em>Wappen</em></td><td></td><td></td><td><em>Wappen</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt></tt></td><td></td><td><em>Wappen</em></td><td><em>Wappen</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Gen</tt></tt></td><td></td><td><em>Wappens</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td></td><td></td><td><em>Wappen</em></td><td><em>Wappen</em></td></tr>
</table>

### `ADJ`

6577 <tt><a href="de-pos-ADJ.html">ADJ</a></tt> tokens (31% of all `ADJ` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `ADJ` and `Gender` co-occurred: <tt><a href="de-feat-Number.html">Number</a></tt><tt>=Sing</tt> (5954; 91%), <tt><a href="de-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (5811; 88%).

`ADJ` tokens may have the following values of `Gender`:

* `Fem` (3212; 49% of non-empty `Gender`): <em>erste, neue, große, ersten, weitere, deutschen, kleine, andere, deutsche, eigene</em>
* `Masc` (903; 14% of non-empty `Gender`): <em>erste, ersten, neuen, größten, neue, weiteren, alte, dritten, großen, deutsche</em>
* `Masc,Neut` (1914; 29% of non-empty `Gender`): <em>ersten, gleichen, selben, neuen, heutigen, großen, amerikanischen, französischen, nächsten, weiteren</em>
* `Neut` (548; 8% of non-empty `Gender`): <em>erste, gesamte, neue, heutige, alte, ganze, große, dritte, ehemalige, kurzer</em>
* `EMPTY` (14310): <em>später, bekannt, ersten, anderen, weitere, gut, erste, viele, kurz, vielen</em>

<table>
  <tr><th>Paradigm <i>erst</i></th><th><tt>Masc</tt></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Degree.html">Degree</a></tt><tt>=Pos</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>ersten, erstes</em></td><td></td><td><em>erste, ersten</em></td><td><em>erste, erstes</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Degree.html">Degree</a></tt><tt>=Pos</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td></td><td><em>erste</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Degree.html">Degree</a></tt><tt>=Pos</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>ersten</em></td><td><em>ersten</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Degree.html">Degree</a></tt><tt>=Pos</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td></td><td><em>ersten</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="de-feat-Degree.html">Degree</a></tt><tt>=Pos</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>ersten</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Degree.html">Degree</a></tt><tt>=Pos</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>erste</em></td><td><em>erstes</em></td><td><em>erste, ersten</em></td><td><em>erste, erstes</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Degree.html">Degree</a></tt><tt>=Pos</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td></td><td><em>ersten, erste</em></td><td><em>ersten</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Degree.html">Degree</a></tt><tt>=Cmp,Pos</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>erster</em></td><td></td><td></td><td></td></tr>
</table>

### `PRON`

5571 <tt><a href="de-pos-PRON.html">PRON</a></tt> tokens (38% of all `PRON` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PRON` and `Gender` co-occurred: <tt><a href="de-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (5571; 100%), <tt><a href="de-feat-Number.html">Number</a></tt><tt>=Sing</tt> (5391; 97%), <tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (4464; 80%), <tt><a href="de-feat-Person.html">Person</a></tt><tt>=3</tt> (4234; 76%), <tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt> (3631; 65%).

`PRON` tokens may have the following values of `Gender`:

* `Fem` (1318; 24% of non-empty `Gender`): <em>sie, diese, dieser, alle, meine, unsere, ihre, seine, seiner, jede</em>
* `Masc` (2616; 47% of non-empty `Gender`): <em>er, ihm, ihn, dieser, diesen, ihren, jeden, meinen, deren, jeder</em>
* `Masc,Neut` (442; 8% of non-empty `Gender`): <em>diesem, dieses, mein, meinem, ihrem, sein, seinem, jedem, jedes, ihr</em>
* `Neut` (1195; 21% of non-empty `Gender`): <em>es, dieses, aller, das, diesen, 's, ihre, viel, andere, einige</em>
* `EMPTY` (9122): <em>sich, die, ich, sie, der, man, das, wir, was, diese</em>

<table>
  <tr><th>Paradigm <i>der</i></th><th><tt>Masc</tt></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td><em>deren, dessen</em></td><td></td><td><em>die</em></td><td><em>das</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td></td><td></td><td><em>die</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td></td><td><em>dem</em></td><td><em>der</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Rel</tt></tt></td><td></td><td></td><td><em>deren</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td><em>deren, der</em></td><td></td><td><em>die</em></td><td><em>das</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Rel</tt></tt></td><td><em>dessen, deren</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Rel</tt></tt></td><td><em>deren</em></td><td></td><td></td><td></td></tr>
</table>

### `PROPN`

4750 <tt><a href="de-pos-PROPN.html">PROPN</a></tt> tokens (15% of all `PROPN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PROPN` and `Gender` co-occurred: <tt><a href="de-feat-Number.html">Number</a></tt><tt>=Sing</tt> (4717; 99%).

`PROPN` tokens may have the following values of `Gender`:

* `Fem` (1613; 34% of non-empty `Gender`): <em>University, Universität, SPD, Schweiz, Bundesrepublik, USA, Deutsche, AG, DDR, Hochschule</em>
* `Masc` (712; 15% of non-empty `Gender`): <em>USA, Frankreich, FC, Heinrich, River, Österreich, Award, Cup, Ehrlich, Friedrich</em>
* `Masc,Neut` (2046; 43% of non-empty `Gender`): <em>Zweiten, Weltkrieg, Oktober, Mai, September, November, Ersten, März, Februar, Dezember</em>
* `Neut` (379; 8% of non-empty `Gender`): <em>Kreuz, München, Institut, Museum, Eiserne, Team, College, Gymnasium, Haus, Klein</em>
* `EMPTY` (26717): <em>von, Deutschland, de, of, der, Berlin, the, US, St., für</em>

<table>
  <tr><th>Paradigm <i>deutsch</i></th><th><tt>Masc</tt></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt></tt></td><td></td><td></td><td><em>Deutsche</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt></tt></td><td><em>Deutsch</em></td><td><em>Deutschen</em></td><td><em>Deutschen</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Gen</tt></tt></td><td></td><td><em>Deutschen</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td><em>Deutsche</em></td><td></td><td><em>Deutsche</em></td><td><em>Deutsche</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `PROPN`. 92% lemmas (2614) occur only with one value of `Gender`.

### `NUM`

29 <tt><a href="de-pos-NUM.html">NUM</a></tt> tokens (0% of all `NUM` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NUM` and `Gender` co-occurred: <tt><a href="de-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (29; 100%).

`NUM` tokens may have the following values of `Gender`:

* `Fem` (3; 10% of non-empty `Gender`): <em>2, 35, fünfte</em>
* `Masc` (1; 3% of non-empty `Gender`): <em>18.</em>
* `Masc,Neut` (25; 86% of non-empty `Gender`): <em>1, 24., 31, 6, 1., 13, 16, 17, 18, 1:1</em>
* `EMPTY` (7432): <em>zwei, drei, vier, 2007, 2006, fünf, 2009, 2010, sechs, 1</em>

<table>
  <tr><th>Paradigm <i>2</i></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt></tt></td><td><em>2</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td></td><td><em>2</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `NUM`. 95% lemmas (21) occur only with one value of `Gender`.

### `VERB`

4 <tt><a href="de-pos-VERB.html">VERB</a></tt> tokens (0% of all `VERB` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `VERB` and `Gender` co-occurred: <tt><a href="de-feat-Number.html">Number</a></tt><tt>=Sing</tt> (4; 100%), <tt><a href="de-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (4; 100%), <tt><a href="de-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (3; 75%).

`VERB` tokens may have the following values of `Gender`:

* `Masc` (2; 50% of non-empty `Gender`): <em>meinen, umgebenden</em>
* `Masc,Neut` (2; 50% of non-empty `Gender`): <em>erweiterten, großen</em>
* `EMPTY` (19917): <em>gibt, hat, kam, liegt, hatte, gab, war, erhielt, befindet, ist</em>

### `ADP`

2 <tt><a href="de-pos-ADP.html">ADP</a></tt> tokens (0% of all `ADP` tokens) have a non-empty value of `Gender`.

`ADP` tokens may have the following values of `Gender`:

* `Fem` (1; 50% of non-empty `Gender`): <em>als</em>
* `Masc,Neut` (1; 50% of non-empty `Gender`): <em>als</em>
* `EMPTY` (31656): <em>in, von, mit, zu, an, auf, für, als, nach, bei</em>

<table>
  <tr><th>Paradigm <i>als</i></th><th><tt>Masc,Neut</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt></tt></td><td><em>als</em></td><td><em>als</em></td></tr>
</table>

### `ADV`

1 <tt><a href="de-pos-ADV.html">ADV</a></tt> tokens (0% of all `ADV` tokens) have a non-empty value of `Gender`.

`ADV` tokens may have the following values of `Gender`:

* `Neut` (1; 100% of non-empty `Gender`): <em>mehr</em>
* `EMPTY` (14717): <em>auch, nur, noch, sehr, so, dort, wieder, hier, mehr, heute</em>

### `SCONJ`

1 <tt><a href="de-pos-SCONJ.html">SCONJ</a></tt> tokens (0% of all `SCONJ` tokens) have a non-empty value of `Gender`.

`SCONJ` tokens may have the following values of `Gender`:

* `Masc,Neut` (1; 100% of non-empty `Gender`): <em>dass</em>
* `EMPTY` (1800): <em>dass, da, wenn, als, daß, nachdem, weil, wie, während, ob</em>

### `X`

1 <tt><a href="de-pos-X.html">X</a></tt> tokens (0% of all `X` tokens) have a non-empty value of `Gender`.

`X` tokens may have the following values of `Gender`:

* `Fem` (1; 100% of non-empty `Gender`): <em>the</em>
* `EMPTY` (368): <em>z.B., u.a., =, %, B., etc., †, &amp;, *, a</em>

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>NOUN --[<tt><a href="de-dep-det.html">det</a></tt>]--> DET</tt> (20406; 100%),
<tt>NOUN --[<tt><a href="de-dep-amod.html">amod</a></tt>]--> ADJ</tt> (6138; 100%),
<tt>PROPN --[<tt><a href="de-dep-det.html">det</a></tt>]--> DET</tt> (2777; 70%),
<tt>NOUN --[<tt><a href="de-dep-det.html">det</a></tt>]--> PRON</tt> (1065; 99%),
<tt>PROPN --[<tt><a href="de-dep-amod.html">amod</a></tt>]--> PROPN</tt> (668; 91%),
<tt>NOUN --[<tt><a href="de-dep-det-poss.html">det:poss</a></tt>]--> PRON</tt> (412; 100%),
<tt>PROPN --[<tt><a href="de-dep-amod.html">amod</a></tt>]--> ADJ</tt> (248; 62%),
<tt>NOUN --[<tt><a href="de-dep-amod.html">amod</a></tt>]--> PROPN</tt> (119; 88%),
<tt>NOUN --[<tt><a href="de-dep-amod.html">amod</a></tt>]--> PRON</tt> (25; 100%),
<tt>NOUN --[<tt><a href="de-dep-det.html">det</a></tt>]--> ADJ</tt> (17; 100%).

