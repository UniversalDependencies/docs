---
layout: base
title:  'Statistics of Number in UD_German'
udver: '2'
---

## Treebank Statistics: UD_German: Features: `Number`

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: <tt><a href="de-feat-Number.html">Number</a></tt>, <tt><a href="de-feat-Number-psor.html">Number[psor]</a></tt>.

106853 tokens (37%) have a non-empty value of `Number`.
27746 types (55%) occur at least once with a non-empty value of `Number`.
22835 lemmas (54%) occur at least once with a non-empty value of `Number`.
The feature is used with 12 part-of-speech tags: <tt><a href="de-pos-NOUN.html">NOUN</a></tt> (34400; 12% instances), <tt><a href="de-pos-DET.html">DET</a></tt> (26832; 9% instances), <tt><a href="de-pos-PROPN.html">PROPN</a></tt> (9887; 3% instances), <tt><a href="de-pos-ADJ.html">ADJ</a></tt> (9500; 3% instances), <tt><a href="de-pos-VERB.html">VERB</a></tt> (9418; 3% instances), <tt><a href="de-pos-AUX.html">AUX</a></tt> (8702; 3% instances), <tt><a href="de-pos-PRON.html">PRON</a></tt> (8072; 3% instances), <tt><a href="de-pos-NUM.html">NUM</a></tt> (35; 0% instances), <tt><a href="de-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="de-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="de-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="de-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).

### `NOUN`

34400 <tt><a href="de-pos-NOUN.html">NOUN</a></tt> tokens (66% of all `NOUN` tokens) have a non-empty value of `Number`.

`NOUN` tokens may have the following values of `Number`:

* `Plur` (7643; 22% of non-empty `Number`): <em>Jahren, Menschen, Kinder, Jahre, Namen, Frauen, Personen, Arten, Einwohnern, Metern</em>
* `Sing` (26757; 78% of non-empty `Number`): <em>Jahr, Zeit, Stadt, Teil, Prozent, Jahre, Ort, Familie, Ende, Platz</em>
* `EMPTY` (17833): <em>Jahre, Stadt, Jahren, Ende, km, zeit, m, Mitglied, jahr, Gemeinde</em>

<table>
  <tr><th>Paradigm <i>Jahr</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt></tt></td><td><em>Jahr</em></td><td><em>Jahre, Jahren</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc,Neut</tt></tt></td><td><em>Jahr</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Neut</tt></tt></td><td><em>Jahr</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt></tt></td><td><em>Jahr</em></td><td><em>Jahren</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc,Neut</tt></tt></td><td><em>Jahr, Jahre</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Gen</tt></tt></td><td></td><td><em>Jahre, Jahren</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc,Neut</tt></tt></td><td><em>Jahres, Jahr, Jahrs</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td></td><td><em>Jahre, Jahren</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Neut</tt></tt></td><td><em>Jahr</em></td><td></td></tr>
</table>

### `DET`

26832 <tt><a href="de-pos-DET.html">DET</a></tt> tokens (74% of all `DET` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `DET` and `Number` co-occurred: <tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt> (26646; 99%), <tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (22851; 85%).

`DET` tokens may have the following values of `Number`:

* `Plur` (2941; 11% of non-empty `Number`): <em>die, den, der, das, einen, ein, dessen, eine, dem, des</em>
* `Sing` (23891; 89% of non-empty `Number`): <em>dem, der, die, das, des, den, eine, ein, einer, einem</em>
* `EMPTY` (9401): <em>der, die, ein, dem, eine, seine, das, seiner, den, sein</em>

<table>
  <tr><th>Paradigm <i>der</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc,Neut</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td><em>dem</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td><em>den</em></td><td><em>die, den</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td><em>die, der</em></td><td><em>die, den</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td><em>das, dem</em></td><td><em>die, den</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td></td><td><em>die, den, das, dem</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td><em>dessen, den</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Rel</tt></tt></td><td><em>dessen, den</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td><em>die</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Rel</tt></tt></td><td><em>die</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td><em>das</em></td><td><em>das</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Rel</tt></tt></td><td><em>das</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td></td><td><em>das, dessen, Die</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Rel</tt></tt></td><td></td><td><em>dessen, die</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc,Neut</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td><em>dem</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td></td><td><em>den</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td><em>der, dem, den, die</em></td><td><em>den</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td></td><td><em>den</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td></td><td><em>den, des, dem</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc,Neut</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td><em>dem</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc,Neut</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Rel</tt></tt></td><td><em>dem</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td><em>derer</em></td><td><em>dessen</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Rel</tt></tt></td><td><em>der</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td></td><td><em>dessen</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Rel</tt></tt></td><td></td><td><em>dessen</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td></td><td><em>dessen</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Rel</tt></tt></td><td></td><td><em>dessen</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc,Neut</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td><em>des</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td><em>der</em></td><td><em>der</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td></td><td><em>der</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td></td><td><em>der, dem</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc,Neut</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td><em>des, dem</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td><em>der, den</em></td><td><em>die, der, Das</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td><em>die</em></td><td><em>die, den</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td><em>das</em></td><td><em>die, das</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Art</tt></tt></td><td></td><td><em>die, der, das</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td><em>dessen, der</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Rel</tt></tt></td><td><em>dessen, der</em></td><td><em>dessen</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td><em>die</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Rel</tt></tt></td><td><em>die</em></td><td><em>Die</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td><em>das</em></td><td><em>die</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Rel</tt></tt></td><td><em>das</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td></td><td><em>dessen, das, die</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Rel</tt></tt></td><td></td><td><em>die</em></td></tr>
</table>

### `PROPN`

9887 <tt><a href="de-pos-PROPN.html">PROPN</a></tt> tokens (31% of all `PROPN` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PROPN` and `Number` co-occurred: <tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (5137; 52%).

`PROPN` tokens may have the following values of `Number`:

* `Plur` (427; 4% of non-empty `Number`): <em>Olympischen, Spielen, Staaten, Vereinigten, Alpen, Studios, Serben, Bergen, Inseln, Motors</em>
* `Sing` (9460; 96% of non-empty `Number`): <em>Weltkrieg, Zweiten, Oktober, USA, Mai, von, Ersten, November, SPD, University</em>
* `EMPTY` (21580): <em>von, of, de, Deutschland, der, the, Berlin, US, St., für</em>

<table>
  <tr><th>Paradigm <i>Frankreich</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>Frankreich</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>Frankreich</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td></td><td><em>Frankreichs</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc,Neut</tt></tt></td><td><em>Frankreich</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>Frankreich</em></td><td></td></tr>
</table>

`Number` seems to be **lexical feature** of `PROPN`. 99% lemmas (6469) occur only with one value of `Number`.

### `ADJ`

9500 <tt><a href="de-pos-ADJ.html">ADJ</a></tt> tokens (45% of all `ADJ` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `ADJ` and `Number` co-occurred: <tt><a href="de-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (8284; 87%).

`ADJ` tokens may have the following values of `Number`:

* `Plur` (2615; 28% of non-empty `Number`): <em>weitere, ersten, anderen, viele, verschiedene, neue, andere, große, zahlreiche, meisten</em>
* `Sing` (6885; 72% of non-empty `Number`): <em>ersten, erste, neue, neuen, große, deutschen, weitere, großen, zweiten, gleichen</em>
* `EMPTY` (11387): <em>später, bekannt, gut, kurz, erste, freundlich, anderen, lang, möglich, neu</em>

<table>
  <tr><th>Paradigm <i>erst</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Degree.html">Degree</a></tt><tt>=Pos</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>ersten, erstes</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Degree.html">Degree</a></tt><tt>=Pos</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>erste, ersten</em></td><td><em>erste</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Degree.html">Degree</a></tt><tt>=Pos</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Neut</tt></tt></td><td><em>erste, erstes</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Degree.html">Degree</a></tt><tt>=Pos</tt></tt></td><td><em>ersten, erste, erstes</em></td><td><em>ersten, erste</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Degree.html">Degree</a></tt><tt>=Pos</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc,Neut</tt></tt></td><td><em>ersten</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Degree.html">Degree</a></tt><tt>=Pos</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>ersten</em></td><td><em>ersten</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Degree.html">Degree</a></tt><tt>=Pos</tt></tt></td><td><em>ersten</em></td><td><em>ersten</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="de-feat-Degree.html">Degree</a></tt><tt>=Pos</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc,Neut</tt></tt></td><td><em>ersten</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="de-feat-Degree.html">Degree</a></tt><tt>=Pos</tt></tt></td><td></td><td><em>ersten</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Degree.html">Degree</a></tt><tt>=Pos</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc,Neut</tt></tt></td><td><em>erstes</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Degree.html">Degree</a></tt><tt>=Pos</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>erste</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Degree.html">Degree</a></tt><tt>=Pos</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>erste, ersten</em></td><td><em>ersten, erste</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Degree.html">Degree</a></tt><tt>=Pos</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Neut</tt></tt></td><td><em>erste, erstes</em></td><td><em>ersten</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Degree.html">Degree</a></tt><tt>=Pos</tt></tt></td><td><em>erstes</em></td><td><em>ersten, erste</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Degree.html">Degree</a></tt><tt>=Cmp,Pos</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>erster</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Degree.html">Degree</a></tt><tt>=Cmp,Pos</tt></tt></td><td><em>Erster</em></td><td></td></tr>
</table>

### `VERB`

9418 <tt><a href="de-pos-VERB.html">VERB</a></tt> tokens (47% of all `VERB` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `VERB` and `Number` co-occurred: <tt><a href="de-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (9415; 100%), <tt><a href="de-feat-Person.html">Person</a></tt><tt>=3</tt> (9004; 96%).

`VERB` tokens may have the following values of `Number`:

* `Plur` (2340; 25% of non-empty `Number`): <em>haben, stehen, gehören, gibt, kamen, hatten, kommen, liegen, waren, befinden</em>
* `Sing` (7078; 75% of non-empty `Number`): <em>gibt, hatte, kam, liegt, hat, erhielt, war, befindet, gab, ist</em>
* `EMPTY` (10503): <em>empfehlen, gegründet, lassen, machen, verwendet, eingesetzt, genutzt, hat, gebaut, aufgenommen</em>

<table>
  <tr><th>Paradigm <i>haben</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="de-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="de-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="de-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>hatte</em></td><td><em>hatten</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="de-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="de-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>habe</em></td><td><em>haben</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="de-feat-Person.html">Person</a></tt><tt>=2</tt>|<tt><a href="de-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>Hast</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="de-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="de-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>hatte</em></td><td><em>hatten</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="de-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="de-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>hat, habe</em></td><td><em>haben, hat</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="de-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="de-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>hätte</em></td><td><em>hätten</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="de-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="de-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>hätte</em></td><td><em>hätten</em></td></tr>
</table>

### `AUX`

8702 <tt><a href="de-pos-AUX.html">AUX</a></tt> tokens (76% of all `AUX` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `AUX` and `Number` co-occurred: <tt><a href="de-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (8702; 100%), <tt><a href="de-feat-Person.html">Person</a></tt><tt>=3</tt> (8181; 94%), <tt><a href="de-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (7637; 88%), <tt><a href="de-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (4393; 50%).

`AUX` tokens may have the following values of `Number`:

* `Plur` (2154; 25% of non-empty `Number`): <em>wurden, sind, waren, werden, haben, können, hatten, sollen, konnten, müssen</em>
* `Sing` (6548; 75% of non-empty `Number`): <em>ist, wurde, war, wird, sind, hat, kann, hatte, konnte, habe</em>
* `EMPTY` (2694): <em>werden, ist, war, wird, wurde, kann, sein, sind, worden, können</em>

<table>
  <tr><th>Paradigm <i>sein</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="de-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="de-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="de-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>war</em></td><td><em>waren, war</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="de-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="de-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>bin</em></td><td><em>sind, ist</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="de-feat-Person.html">Person</a></tt><tt>=2</tt>|<tt><a href="de-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>bist</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="de-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="de-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>war</em></td><td><em>waren, war</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="de-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="de-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>ist, sind</em></td><td><em>sind, ist</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="de-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="de-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>wäre</em></td><td><em>wären</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="de-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="de-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>wäre</em></td><td><em>wären</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="de-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="de-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td><em>seien</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>sei</em></td><td></td></tr>
</table>

### `PRON`

8072 <tt><a href="de-pos-PRON.html">PRON</a></tt> tokens (55% of all `PRON` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PRON` and `Number` co-occurred: <tt><a href="de-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (7937; 98%), <tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (6177; 77%), <tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt> (5190; 64%), <tt><a href="de-feat-Person.html">Person</a></tt><tt>=3</tt> (4573; 57%).

`PRON` tokens may have the following values of `Number`:

* `Plur` (1536; 19% of non-empty `Number`): <em>wir, sie, uns, diese, alle, beiden, ihnen, mehrere, einige, ihr</em>
* `Sing` (6536; 81% of non-empty `Number`): <em>er, es, ich, sie, diese, ihm, dieser, was, diesem, ihn</em>
* `EMPTY` (6621): <em>sich, die, der, man, Sie, das, dem, dieser, keine, dies</em>

<table>
  <tr><th>Paradigm <i>der</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td><em>deren, dessen</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td><em>die</em></td><td><em>die</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td><em>das</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td></td><td><em>die</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Rel</tt></tt></td><td></td><td><em>deren, dessen</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc,Neut</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td><em>dem</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td><em>der</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Rel</tt></tt></td><td></td><td><em>deren</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td></td><td><em>deren</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td><em>deren, der</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Rel</tt></tt></td><td><em>deren, dessen</em></td><td><em>deren</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td><em>die</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td><em>das</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td></td><td><em>die</em></td></tr>
</table>

### `NUM`

35 <tt><a href="de-pos-NUM.html">NUM</a></tt> tokens (0% of all `NUM` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `NUM` and `Number` co-occurred: <tt><a href="de-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (35; 100%).

`NUM` tokens may have the following values of `Number`:

* `Plur` (3; 9% of non-empty `Number`): <em>1870er, drei, sechs</em>
* `Sing` (32; 91% of non-empty `Number`): <em>1, 31, 2, 24., 6, 1., 13, 16, 17, 18</em>
* `EMPTY` (7426): <em>zwei, drei, vier, 2007, 2006, fünf, 2009, 2010, sechs, 1</em>

<table>
  <tr><th>Paradigm <i>sechs</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Dat</tt></tt></td><td></td><td><em>sechs</em></td></tr>
  <tr><td><tt><tt><a href="de-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td><em>sechs</em></td><td></td></tr>
</table>

`Number` seems to be **lexical feature** of `NUM`. 96% lemmas (24) occur only with one value of `Number`.

### `X`

3 <tt><a href="de-pos-X.html">X</a></tt> tokens (1% of all `X` tokens) have a non-empty value of `Number`.

`X` tokens may have the following values of `Number`:

* `Plur` (1; 33% of non-empty `Number`): <em>er</em>
* `Sing` (2; 67% of non-empty `Number`): <em>What, the</em>
* `EMPTY` (366): <em>z.B., u.a., =, %, B., etc., †, &amp;, *, a</em>

### `ADP`

2 <tt><a href="de-pos-ADP.html">ADP</a></tt> tokens (0% of all `ADP` tokens) have a non-empty value of `Number`.

`ADP` tokens may have the following values of `Number`:

* `Sing` (2; 100% of non-empty `Number`): <em>als</em>
* `EMPTY` (31656): <em>in, von, mit, zu, an, auf, für, als, nach, bei</em>

### `ADV`

1 <tt><a href="de-pos-ADV.html">ADV</a></tt> tokens (0% of all `ADV` tokens) have a non-empty value of `Number`.

`ADV` tokens may have the following values of `Number`:

* `Sing` (1; 100% of non-empty `Number`): <em>mehr</em>
* `EMPTY` (14717): <em>auch, nur, noch, sehr, so, dort, wieder, hier, mehr, heute</em>

### `SCONJ`

1 <tt><a href="de-pos-SCONJ.html">SCONJ</a></tt> tokens (0% of all `SCONJ` tokens) have a non-empty value of `Number`.

`SCONJ` tokens may have the following values of `Number`:

* `Sing` (1; 100% of non-empty `Number`): <em>dass</em>
* `EMPTY` (1800): <em>dass, da, wenn, als, daß, nachdem, weil, wie, während, ob</em>

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>NOUN --[<tt><a href="de-dep-det.html">det</a></tt>]--> DET</tt> (22650; 100%),
<tt>NOUN --[<tt><a href="de-dep-amod.html">amod</a></tt>]--> ADJ</tt> (8990; 100%),
<tt>VERB --[<tt><a href="de-dep-nsubj.html">nsubj</a></tt>]--> NOUN</tt> (3857; 71%),
<tt>PROPN --[<tt><a href="de-dep-det.html">det</a></tt>]--> DET</tt> (2892; 69%),
<tt>VERB --[<tt><a href="de-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (2556; 65%),
<tt>NOUN --[<tt><a href="de-dep-det.html">det</a></tt>]--> PRON</tt> (1535; 100%),
<tt>VERB --[<tt><a href="de-dep-nsubj.html">nsubj</a></tt>]--> PROPN</tt> (1104; 54%),
<tt>PROPN --[<tt><a href="de-dep-amod.html">amod</a></tt>]--> PROPN</tt> (797; 91%),
<tt>NOUN --[<tt><a href="de-dep-det-poss.html">det:poss</a></tt>]--> PRON</tt> (499; 100%),
<tt>PROPN --[<tt><a href="de-dep-amod.html">amod</a></tt>]--> ADJ</tt> (274; 59%).

