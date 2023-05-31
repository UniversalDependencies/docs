---
layout: base
title:  'Statistics of Gender in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Features: `Gender`

This feature is universal.
It occurs with 3 different values: `Fem`, `Masc`, `Neut`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: <tt><a href="de_pud-feat-Gender.html">Gender</a></tt>, <tt><a href="de_pud-feat-Gender-psor.html">Gender[psor]</a></tt>.

9608 tokens (45%) have a non-empty value of `Gender`.
4430 types (68%) occur at least once with a non-empty value of `Gender`.
3775 lemmas (71%) occur at least once with a non-empty value of `Gender`.
The feature is used with 6 part-of-speech tags: <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (4080; 19% instances), <tt><a href="de_pud-pos-DET.html">DET</a></tt> (2642; 12% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1187; 6% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (1116; 5% instances), <tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (579; 3% instances), <tt><a href="de_pud-pos-NUM.html">NUM</a></tt> (4; 0% instances).

### `NOUN`

4080 <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> tokens (97% of all `NOUN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NOUN` and `Gender` co-occurred: <tt><a href="de_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2896; 71%).

`NOUN` tokens may have the following values of `Gender`:

* `Fem` (1693; 41% of non-empty `Gender`): <em>Zeit, Regierung, Stadt, Geschichte, Welt, Armee, Frau, Millionen, Region, Reihe</em>
* `Masc` (1463; 36% of non-empty `Gender`): <em>Menschen, Oktober, Teil, Film, Kaiser, April, Fall, Krieg, Präsident, Tag</em>
* `Neut` (924; 23% of non-empty `Gender`): <em>Jahr, Jahre, Jahren, Jahrhundert, Mal, Land, Leben, Meer, Ende, Reich</em>
* `EMPTY` (110): <em>Leute, Kosten, anderen, Investors, Konservativen, North, Roma, Strategy, Target, 1350ern</em>

<table>
  <tr><th>Paradigm <i>ander</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>andere</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td><em>anderem</em></td></tr>
  <tr><td><tt><tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td><em>andere</em></td></tr>
  <tr><td><tt><tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>andere</em></td><td></td><td></td></tr>
</table>

`Gender` seems to be **lexical feature** of `NOUN`. 99% lemmas (2316) occur only with one value of `Gender`.

### `DET`

2642 <tt><a href="de_pud-pos-DET.html">DET</a></tt> tokens (85% of all `DET` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `DET` and `Gender` co-occurred: <tt><a href="de_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2452; 93%), <tt><a href="de_pud-feat-NumType.html">NumType</a></tt><tt>=EMPTY</tt> (2199; 83%), <tt><a href="de_pud-feat-PronType.html">PronType</a></tt><tt>=Art</tt> (2132; 81%), <tt><a href="de_pud-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (1700; 64%).

`DET` tokens may have the following values of `Gender`:

* `Fem` (1130; 43% of non-empty `Gender`): <em>der, die, eine, einer, seine, diese, ihre, seiner, ihrer, dieser</em>
* `Masc` (853; 32% of non-empty `Gender`): <em>dem, der, den, des, ein, einen, einem, dieser, seinen, diesem</em>
* `Neut` (659; 25% of non-empty `Gender`): <em>das, dem, ein, des, einem, eines, ihr, dies, dieses, sein</em>
* `EMPTY` (464): <em>die, den, der, ein, the, a, alle, Diese, meisten, viele</em>

<table>
  <tr><th>Paradigm <i>der</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Acc</tt></tt></td><td><em>den</em></td><td><em>die</em></td><td><em>das</em></td></tr>
  <tr><td><tt><tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Dat</tt></tt></td><td><em>dem</em></td><td><em>der</em></td><td><em>dem</em></td></tr>
  <tr><td><tt><tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Gen</tt></tt></td><td><em>des</em></td><td><em>der</em></td><td><em>des</em></td></tr>
  <tr><td><tt><tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td><em>der</em></td><td><em>die</em></td><td><em>das</em></td></tr>
</table>

### `ADJ`

1187 <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> tokens (84% of all `ADJ` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `ADJ` and `Gender` co-occurred: <tt><a href="de_pud-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (1112; 94%), <tt><a href="de_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (815; 69%).

`ADJ` tokens may have the following values of `Gender`:

* `Fem` (519; 44% of non-empty `Gender`): <em>neue, eigene, ersten, große, öffentliche, amerikanischen, guten, kleine, neuen, verschiedenen</em>
* `Masc` (376; 32% of non-empty `Gender`): <em>ersten, Vereinigten, letzten, neue, 1., besten, gesamten, große, großer, neuen</em>
* `Neut` (292; 25% of non-empty `Gender`): <em>letzten, ersten, Olympischen, eigenen, 8., drittes, karibische, neuen, 13., 1960er</em>
* `EMPTY` (225): <em>bekannt, möglich, groß, klar, paar, sicher, unglaublich, verheiratet, alt, ausgerichtet</em>

<table>
  <tr><th>Paradigm <i>neu</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de_pud-feat-Degree.html">Degree</a></tt><tt>=Pos</tt>|<tt><a href="de_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>neuen</em></td><td><em>neue</em></td><td><em>neues</em></td></tr>
  <tr><td><tt><tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de_pud-feat-Degree.html">Degree</a></tt><tt>=Pos</tt>|<tt><a href="de_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>neue, neuen</em></td><td><em>neue, neuen</em></td><td><em>neue</em></td></tr>
  <tr><td><tt><tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de_pud-feat-Degree.html">Degree</a></tt><tt>=Pos</tt>|<tt><a href="de_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td><em>neuen</em></td></tr>
  <tr><td><tt><tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de_pud-feat-Degree.html">Degree</a></tt><tt>=Pos</tt>|<tt><a href="de_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>neuen</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="de_pud-feat-Degree.html">Degree</a></tt><tt>=Pos</tt>|<tt><a href="de_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>neuen</em></td><td></td><td><em>neuen</em></td></tr>
  <tr><td><tt><tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="de_pud-feat-Degree.html">Degree</a></tt><tt>=Pos</tt>|<tt><a href="de_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>neuer</em></td><td><em>neuer</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de_pud-feat-Degree.html">Degree</a></tt><tt>=Pos</tt>|<tt><a href="de_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>neue</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de_pud-feat-Degree.html">Degree</a></tt><tt>=Pos</tt>|<tt><a href="de_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>neue</em></td><td><em>neue, neuen</em></td><td><em>neue</em></td></tr>
  <tr><td><tt><tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de_pud-feat-Degree.html">Degree</a></tt><tt>=Sup</tt>|<tt><a href="de_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td><em>neuestes</em></td></tr>
  <tr><td><tt><tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de_pud-feat-Degree.html">Degree</a></tt><tt>=Sup</tt>|<tt><a href="de_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>neuesten</em></td><td></td></tr>
</table>

### `PROPN`

1116 <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> tokens (92% of all `PROPN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PROPN` and `Gender` co-occurred: <tt><a href="de_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1084; 97%).

`PROPN` tokens may have the following values of `Gender`:

* `Fem` (221; 20% of non-empty `Gender`): <em>Qing, US, BBC, Clinton, Kesha, Mongolei, Alpen, Blunt, Erde, Jasmine</em>
* `Masc` (511; 46% of non-empty `Gender`): <em>Chr., Trump, Joseph, USA, Donald, Martin, Richard, Bogd, Christopher, Columbus</em>
* `Neut` (384; 34% of non-empty `Gender`): <em>China, Frankreich, Hong, Paris, Russland, Asien, Danewerk, Deutschland, England, Griechenland</em>
* `EMPTY` (102): <em>Tarlo, Uber, Anden, Aviva, Maya, Spotify, USA, VW, Agora, Amazon</em>

<table>
  <tr><th>Paradigm <i>Trump</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Acc</tt></tt></td><td><em>Trump</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Dat</tt></tt></td><td><em>Trump</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td><em>Trump</em></td><td><em>Trump</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `PROPN`. 97% lemmas (762) occur only with one value of `Gender`.

### `PRON`

579 <tt><a href="de_pud-pos-PRON.html">PRON</a></tt> tokens (59% of all `PRON` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PRON` and `Gender` co-occurred: <tt><a href="de_pud-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (579; 100%), <tt><a href="de_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (550; 95%), <tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Nom</tt> (459; 79%), <tt><a href="de_pud-feat-Person.html">Person</a></tt><tt>=3</tt> (403; 70%), <tt><a href="de_pud-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (403; 70%).

`PRON` tokens may have the following values of `Gender`:

* `Fem` (136; 23% of non-empty `Gender`): <em>sie, die, der, ihr, Her</em>
* `Masc` (241; 42% of non-empty `Gender`): <em>er, der, sie, ihm, ihn, dem, dessen, ihnen, den</em>
* `Neut` (202; 35% of non-empty `Gender`): <em>es, was, das, etwas, nichts, sie, dem, alldem</em>
* `EMPTY` (401): <em>sich, die, ich, sie, wir, man, denen, mich, uns, deren</em>

<table>
  <tr><th>Paradigm <i>der</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th><th><tt>Neut</tt></th></tr>
  <tr><td><tt><tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Acc</tt></tt></td><td><em>den</em></td><td><em>die</em></td><td><em>das</em></td></tr>
  <tr><td><tt><tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Dat</tt></tt></td><td><em>dem</em></td><td><em>der</em></td><td><em>dem</em></td></tr>
  <tr><td><tt><tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Gen</tt></tt></td><td><em>dessen</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="de_pud-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td><em>der</em></td><td><em>die</em></td><td><em>das</em></td></tr>
</table>

### `NUM`

4 <tt><a href="de_pud-pos-NUM.html">NUM</a></tt> tokens (1% of all `NUM` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NUM` and `Gender` co-occurred: <tt><a href="de_pud-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (3; 75%).

`NUM` tokens may have the following values of `Gender`:

* `Fem` (1; 25% of non-empty `Gender`): <em>zweier</em>
* `Masc` (3; 75% of non-empty `Gender`): <em>24, hunderte, zweier</em>
* `EMPTY` (352): <em>zwei, drei, vier, 3, sechs, zehn, 1, 10, 50, 100</em>

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>NOUN --[<tt><a href="de_pud-dep-det.html">det</a></tt>]--> DET</tt> (2207; 86%),
<tt>NOUN --[<tt><a href="de_pud-dep-amod.html">amod</a></tt>]--> ADJ</tt> (1051; 100%),
<tt>NOUN --[<tt><a href="de_pud-dep-det-poss.html">det:poss</a></tt>]--> DET</tt> (220; 100%),
<tt>PROPN --[<tt><a href="de_pud-dep-flat-name.html">flat:name</a></tt>]--> PROPN</tt> (158; 100%),
<tt>ADJ --[<tt><a href="de_pud-dep-conj.html">conj</a></tt>]--> ADJ</tt> (93; 100%),
<tt>NOUN --[<tt><a href="de_pud-dep-appos.html">appos</a></tt>]--> PROPN</tt> (90; 67%),
<tt>PROPN --[<tt><a href="de_pud-dep-det.html">det</a></tt>]--> DET</tt> (87; 83%),
<tt>NOUN --[<tt><a href="de_pud-dep-compound.html">compound</a></tt>]--> NOUN</tt> (82; 91%),
<tt>NOUN --[<tt><a href="de_pud-dep-compound.html">compound</a></tt>]--> PROPN</tt> (73; 100%),
<tt>PROPN --[<tt><a href="de_pud-dep-conj.html">conj</a></tt>]--> PROPN</tt> (41; 77%).

