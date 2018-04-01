---
layout: base
title:  'Statistics of Case in UD_Kurmanji'
udver: '2'
---

## Treebank Statistics: UD_Kurmanji: Features: `Case`

This feature is universal but the values `Con`, `Obl` are language-specific.
It occurs with 4 different values: `Con`, `Nom`, `Obl`, `Voc`.

3807 tokens (38%) have a non-empty value of `Case`.
1836 types (67%) occur at least once with a non-empty value of `Case`.
1238 lemmas (70%) occur at least once with a non-empty value of `Case`.
The feature is used with 7 part-of-speech tags: <tt><a href="kmr-pos-NOUN.html">NOUN</a></tt> (2541; 25% instances), <tt><a href="kmr-pos-PRON.html">PRON</a></tt> (629; 6% instances), <tt><a href="kmr-pos-PROPN.html">PROPN</a></tt> (428; 4% instances), <tt><a href="kmr-pos-DET.html">DET</a></tt> (101; 1% instances), <tt><a href="kmr-pos-NUM.html">NUM</a></tt> (96; 1% instances), <tt><a href="kmr-pos-ADJ.html">ADJ</a></tt> (11; 0% instances), <tt><a href="kmr-pos-X.html">X</a></tt> (1; 0% instances).

### `NOUN`

2541 <tt><a href="kmr-pos-NOUN.html">NOUN</a></tt> tokens (99% of all `NOUN` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `NOUN` and `Case` co-occurred: <tt><a href="kmr-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (2246; 88%), <tt><a href="kmr-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (2242; 88%), <tt><a href="kmr-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2091; 82%), <tt><a href="kmr-feat-Gender.html">Gender</a></tt><tt>=Fem</tt> (1600; 63%).

`NOUN` tokens may have the following values of `Case`:

* `Con` (1199; 47% of non-empty `Case`): sala oda xweha zirbavê navê serê zimanê dema dengê salên
* `Nom` (542; 21% of non-empty `Case`): kurdî banû nav tişt gor hûr mirov gorî mar seh
* `Obl` (799; 31% of non-empty `Case`): gund kurdan caran derî odê qesirê dest cih salan demê
* `Voc` (1; 0% of non-empty `Case`): zanyariyên
* `EMPTY` (32): Dr. km hwd GAP

<table>
  <tr><th>Paradigm <i>sal</i></th><th><tt>Nom</tt></th><th><tt>Con</tt></th><th><tt>Obl</tt></th></tr>
  <tr><td><tt><tt><a href="kmr-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="kmr-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td>sal</td><td>sala</td><td>salê</td></tr>
  <tr><td><tt><tt><a href="kmr-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="kmr-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td>sal</td><td>salên</td><td>salan</td></tr>
  <tr><td><tt><tt><a href="kmr-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="kmr-feat-PronType.html">PronType</a></tt><tt>=Ind</tt></tt></td><td></td><td></td><td>salekê</td></tr>
  <tr><td><tt><tt><a href="kmr-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="kmr-feat-PronType.html">PronType</a></tt><tt>=Ind</tt></tt></td><td></td><td>saline</td><td></td></tr>
</table>

### `PRON`

629 <tt><a href="kmr-pos-PRON.html">PRON</a></tt> tokens (72% of all `PRON` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PRON` and `Case` co-occurred: <tt><a href="kmr-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (629; 100%), <tt><a href="kmr-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (540; 86%), <tt><a href="kmr-feat-Gender.html">Gender</a></tt><tt>=Fem,Masc</tt> (483; 77%), <tt><a href="kmr-feat-Number.html">Number</a></tt><tt>=Sing</tt> (448; 71%).

`PRON` tokens may have the following values of `Case`:

* `Nom` (194; 31% of non-empty `Case`): em ew ez tu ev emê ezê Honê hûn Eve
* `Obl` (435; 69% of non-empty `Case`): min me wî _ wê te wan we vê ewî
* `EMPTY` (244): xwe hev çi tukesî Kî kû yekî Herçî Heçî _

<table>
  <tr><th>Paradigm <i>ew</i></th><th><tt>Nom</tt></th><th><tt>Obl</tt></th></tr>
  <tr><td><tt><tt><a href="kmr-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="kmr-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="kmr-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="kmr-feat-PronType.html">PronType</a></tt><tt>=Prs</tt></tt></td><td></td><td>wî, ewî, wi</td></tr>
  <tr><td><tt><tt><a href="kmr-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="kmr-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="kmr-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td></td><td>_</td></tr>
  <tr><td><tt><tt><a href="kmr-feat-Gender.html">Gender</a></tt><tt>=Fem,Masc</tt>|<tt><a href="kmr-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="kmr-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="kmr-feat-PronType.html">PronType</a></tt><tt>=Prs</tt></tt></td><td>ew, Eve</td><td>_</td></tr>
  <tr><td><tt><tt><a href="kmr-feat-Gender.html">Gender</a></tt><tt>=Fem,Masc</tt>|<tt><a href="kmr-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="kmr-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td></td><td>_</td></tr>
  <tr><td><tt><tt><a href="kmr-feat-Gender.html">Gender</a></tt><tt>=Fem,Masc</tt>|<tt><a href="kmr-feat-Number.html">Number</a></tt><tt>=Plur,Sing</tt>|<tt><a href="kmr-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="kmr-feat-PronType.html">PronType</a></tt><tt>=Prs</tt></tt></td><td>ew</td><td></td></tr>
  <tr><td><tt><tt><a href="kmr-feat-Gender.html">Gender</a></tt><tt>=Fem,Masc</tt>|<tt><a href="kmr-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="kmr-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="kmr-feat-PronType.html">PronType</a></tt><tt>=Prs</tt></tt></td><td>ew</td><td>wan</td></tr>
  <tr><td><tt><tt><a href="kmr-feat-Gender.html">Gender</a></tt><tt>=Fem,Masc</tt>|<tt><a href="kmr-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="kmr-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td></td><td>wan</td></tr>
  <tr><td><tt><tt><a href="kmr-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="kmr-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="kmr-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="kmr-feat-PronType.html">PronType</a></tt><tt>=Prs</tt></tt></td><td></td><td>wê, we, _</td></tr>
  <tr><td><tt><tt><a href="kmr-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="kmr-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="kmr-feat-PronType.html">PronType</a></tt><tt>=Dem</tt></tt></td><td></td><td>_</td></tr>
</table>

### `PROPN`

428 <tt><a href="kmr-pos-PROPN.html">PROPN</a></tt> tokens (100% of all `PROPN` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PROPN` and `Case` co-occurred: <tt><a href="kmr-feat-Number.html">Number</a></tt><tt>=Sing</tt> (425; 99%), <tt><a href="kmr-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (264; 62%), <tt><a href="kmr-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (236; 55%).

`PROPN` tokens may have the following values of `Case`:

* `Con` (33; 8% of non-empty `Case`): Stonêrê Amerîkaya Feqiyê Evdirehmanê Kurdistana Badînan Efrîqaya Emerîkaya Gulçîna Medîna
* `Nom` (146; 34% of non-empty `Case`): Holmes Rweylot Stonêr roma Şerlok Keya Teyran Abdusamet Elî Freud
* `Obl` (249; 58% of non-empty `Case`): Holmes Stonêrê Rweylot Cûlyayê Ewropayê Hindistanê Amedê Stenbolê Stokmoranê Stonêr
* `EMPTY` (1): Stonêr

<table>
  <tr><th>Paradigm <i>Stonêr</i></th><th><tt>Nom</tt></th><th><tt>Con</tt></th><th><tt>Obl</tt></th></tr>
  <tr><td><tt><tt><a href="kmr-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="kmr-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td></td><td></td><td>Stonêrê</td></tr>
  <tr><td><tt><tt><a href="kmr-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="kmr-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td>Stonêr</td><td>Stonêrê</td><td>Stonêr, Stonêrê</td></tr>
  <tr><td><tt><tt><a href="kmr-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="kmr-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td>Stonêrê</td></tr>
</table>

### `DET`

101 <tt><a href="kmr-pos-DET.html">DET</a></tt> tokens (47% of all `DET` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `DET` and `Case` co-occurred: <tt><a href="kmr-feat-PronType.html">PronType</a></tt><tt>=Dem</tt> (100; 99%), <tt><a href="kmr-feat-Number.html">Number</a></tt><tt>=Sing</tt> (63; 62%), <tt><a href="kmr-feat-Gender.html">Gender</a></tt><tt>=Fem</tt> (51; 50%).

`DET` tokens may have the following values of `Case`:

* `Nom` (30; 30% of non-empty `Case`): ev ew
* `Obl` (71; 70% of non-empty `Case`): vê wê vî wî van wan _
* `EMPTY` (116): her hin gelek çend tu hinek hemî çi heman hemû

<table>
  <tr><th>Paradigm <i>ev</i></th><th><tt>Nom</tt></th><th><tt>Obl</tt></th></tr>
  <tr><td><tt><tt><a href="kmr-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="kmr-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td>vî</td></tr>
  <tr><td><tt><tt><a href="kmr-feat-Gender.html">Gender</a></tt><tt>=Fem,Masc</tt>|<tt><a href="kmr-feat-Number.html">Number</a></tt><tt>=Plur,Sing</tt></tt></td><td>ev</td><td></td></tr>
  <tr><td><tt><tt><a href="kmr-feat-Gender.html">Gender</a></tt><tt>=Fem,Masc</tt>|<tt><a href="kmr-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td>van</td></tr>
  <tr><td><tt><tt><a href="kmr-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="kmr-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td>vê</td></tr>
</table>

### `NUM`

96 <tt><a href="kmr-pos-NUM.html">NUM</a></tt> tokens (45% of all `NUM` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `NUM` and `Case` co-occurred: <tt><a href="kmr-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (96; 100%), <tt><a href="kmr-feat-Number.html">Number</a></tt><tt>=Plur</tt> (74; 77%), <tt><a href="kmr-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (59; 61%).

`NUM` tokens may have the following values of `Case`:

* `Nom` (48; 50% of non-empty `Case`): du yek sê pênc çar deh dido dwanzde dû penc
* `Obl` (48; 50% of non-empty `Case`): yekê 1932'an 14an 1500'an 1534'an 1603'an 1604'an 1788'an 1825'an 1829'an
* `EMPTY` (117): 4 hezar sed siseyan yekem 1 10 15'ê 1991'ê 3

<table>
  <tr><th>Paradigm <i>yek</i></th><th><tt>Nom</tt></th><th><tt>Obl</tt></th></tr>
  <tr><td><tt></tt></td><td>yek</td><td>yekê</td></tr>
</table>

`Case` seems to be **lexical feature** of `NUM`. 98% lemmas (43) occur only with one value of `Case`.

### `ADJ`

11 <tt><a href="kmr-pos-ADJ.html">ADJ</a></tt> tokens (3% of all `ADJ` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `ADJ` and `Case` co-occurred: <tt><a href="kmr-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (11; 100%).

`ADJ` tokens may have the following values of `Case`:

* `Con` (11; 100% of non-empty `Case`): saliya derûniyê germa kelha kurê orjinalê saliyê tevahiya tirşê
* `EMPTY` (416): din mezin kurdî nû bilind aciz ecêb navîn belek dirêj

### `X`

1 <tt><a href="kmr-pos-X.html">X</a></tt> tokens (1% of all `X` tokens) have a non-empty value of `Case`.

`X` tokens may have the following values of `Case`:

* `Con` (1; 100% of non-empty `Case`): mûrên
* `EMPTY` (143): li ji ber bi gelek dema hişyar alfabeya berdewam dayîk

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`:
<tt>PROPN --[<tt><a href="kmr-dep-flat.html">flat</a></tt>]--> PROPN</tt> (25; 74%),
<tt>PROPN --[<tt><a href="kmr-dep-conj.html">conj</a></tt>]--> PROPN</tt> (16; 84%),
<tt>NUM --[<tt><a href="kmr-dep-det.html">det</a></tt>]--> DET</tt> (10; 100%),
<tt>NOUN --[<tt><a href="kmr-dep-appos.html">appos</a></tt>]--> NOUN</tt> (6; 55%),
<tt>NUM --[<tt><a href="kmr-dep-nsubj.html">nsubj</a></tt>]--> NOUN</tt> (6; 55%),
<tt>NUM --[<tt><a href="kmr-dep-conj.html">conj</a></tt>]--> NUM</tt> (4; 67%),
<tt>NOUN --[<tt><a href="kmr-dep-flat.html">flat</a></tt>]--> NOUN</tt> (3; 60%),
<tt>PROPN --[<tt><a href="kmr-dep-flat.html">flat</a></tt>]--> NOUN</tt> (3; 100%),
<tt>PROPN --[<tt><a href="kmr-dep-appos.html">appos</a></tt>]--> PROPN</tt> (2; 100%),
<tt>PROPN --[<tt><a href="kmr-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (2; 100%).

