---
layout: base
title:  'Statistics of PronType in UD_Irish'
udver: '2'
---

## Treebank Statistics: UD_Irish: Features: `PronType`

This feature is universal but the values `Emp` are language-specific.
It occurs with 7 different values: `Art`, `Dem`, `Emp`, `Ind`, `Int`, `Prs`, `Rel`.

3302 tokens (14%) have a non-empty value of `PronType`.
118 types (2%) occur at least once with a non-empty value of `PronType`.
54 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 8 part-of-speech tags: <tt><a href="ga-pos-DET.html">DET</a></tt> (1836; 8% instances), <tt><a href="ga-pos-PART.html">PART</a></tt> (611; 3% instances), <tt><a href="ga-pos-ADP.html">ADP</a></tt> (453; 2% instances), <tt><a href="ga-pos-PRON.html">PRON</a></tt> (215; 1% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt> (95; 0% instances), <tt><a href="ga-pos-AUX.html">AUX</a></tt> (55; 0% instances), <tt><a href="ga-pos-X.html">X</a></tt> (27; 0% instances), <tt><a href="ga-pos-ADV.html">ADV</a></tt> (10; 0% instances).

### `DET`

1836 <tt><a href="ga-pos-DET.html">DET</a></tt> tokens (86% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="ga-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (1836; 100%), <tt><a href="ga-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (1836; 100%), <tt><a href="ga-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (1602; 87%), <tt><a href="ga-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1601; 87%), <tt><a href="ga-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (1447; 79%), <tt><a href="ga-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1253; 68%).

`DET` tokens may have the following values of `PronType`:

* `Art` (1448; 79% of non-empty `PronType`): <em>an, na, a, a', 'n</em>
* `Dem` (299; 16% of non-empty `PronType`): <em>seo, sin, eile, úd, s', siúd</em>
* `Ind` (86; 5% of non-empty `PronType`): <em>aon, cibé, uile, haon, n-uile</em>
* `Int` (3; 0% of non-empty `PronType`): <em>cad, cén</em>
* `EMPTY` (298): <em>a, gach, mo, do, m', ár, chuile, uilig, ngach, d'</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (13) occur only with one value of `PronType`.

### `PART`

611 <tt><a href="ga-pos-PART.html">PART</a></tt> tokens (40% of all `PART` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PART` and `PronType` co-occurred: <tt><a href="ga-feat-PartType.html">PartType</a></tt><tt>=Vb</tt> (582; 95%).

`PART` tokens may have the following values of `PronType`:

* `Rel` (611; 100% of non-empty `PronType`): <em>a, ina, nach, inar, ar, lena, n-a, nár, faoina, lenar</em>
* `EMPTY` (920): <em>a, go, ní, d', gur, nach, Ó, is, do, níor</em>

### `ADP`

453 <tt><a href="ga-pos-ADP.html">ADP</a></tt> tokens (12% of all `ADP` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADP` and `PronType` co-occurred: <tt><a href="ga-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (422; 93%), <tt><a href="ga-feat-Number.html">Number</a></tt><tt>=Sing</tt> (421; 93%), <tt><a href="ga-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (397; 88%).

`ADP` tokens may have the following values of `PronType`:

* `Art` (397; 88% of non-empty `PronType`): <em>sa, den, san, ón, don, faoin, sna, fén, ins</em>
* `Emp` (19; 4% of non-empty `PronType`): <em>againne, agamsa, agatsa, domsa, leatsa, liomsa, airsean, dósan, leosan, tríothusan</em>
* `Prs` (37; 8% of non-empty `PronType`): <em>á, dhá</em>
* `EMPTY` (3361): <em>ar, i, ag, le, de, leis, ina, ann, mar, in</em>

<table>
  <tr><th>Paradigm <i>do</i></th><th><tt>Prs</tt></th><th><tt>Art</tt></th><th><tt>Emp</tt></th></tr>
  <tr><td><tt><tt><a href="ga-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ga-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ga-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td></td><td></td><td><em>dósan</em></td></tr>
  <tr><td><tt><tt><a href="ga-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ga-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ga-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="ga-feat-Poss.html">Poss</a></tt><tt>=Yes</tt></tt></td><td><em>á</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="ga-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="ga-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ga-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="ga-feat-Poss.html">Poss</a></tt><tt>=Yes</tt></tt></td><td><em>á</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="ga-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>don</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ga-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="ga-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td></td><td></td><td><em>domsa</em></td></tr>
  <tr><td><tt><tt><a href="ga-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="ga-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="ga-feat-Poss.html">Poss</a></tt><tt>=Yes</tt></tt></td><td><em>á, dhá</em></td><td></td><td></td></tr>
</table>

### `PRON`

215 <tt><a href="ga-pos-PRON.html">PRON</a></tt> tokens (23% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="ga-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (205; 95%), <tt><a href="ga-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (191; 89%), <tt><a href="ga-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (178; 83%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (150; 70% of non-empty `PronType`): <em>sin, seo, siúd, shin, san, in, iúd, súd</em>
* `Emp` (24; 11% of non-empty `PronType`): <em>mise, seisean, eisean, ise, siadsan, sinne, iadsan, tusa</em>
* `Ind` (7; 3% of non-empty `PronType`): <em>pé, Cibé, ceachtar, cheachtar</em>
* `Int` (34; 16% of non-empty `PronType`): <em>cad, cé, cén, céard</em>
* `EMPTY` (715): <em>sé, é, sí, féin, mé, iad, siad, í, tú, muid</em>

`PronType` seems to be **lexical feature** of `PRON`. 100% lemmas (20) occur only with one value of `PronType`.

### `VERB`

95 <tt><a href="ga-pos-VERB.html">VERB</a></tt> tokens (5% of all `VERB` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `VERB` and `PronType` co-occurred: <tt><a href="ga-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (95; 100%), <tt><a href="ga-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (94; 99%), <tt><a href="ga-feat-Form.html">Form</a></tt><tt>=EMPTY</tt> (91; 96%), <tt><a href="ga-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (89; 94%).

`VERB` tokens may have the following values of `PronType`:

* `Rel` (95; 100% of non-empty `PronType`): <em>atá, leanas, eireos, atáid, atáimse, bhíos, chaoinfeas, chuireas, fhéadas, rachas</em>
* `EMPTY` (1816): <em>bhí, tá, raibh, bhfuil, bheidh, beidh, thug, tháinig, mbeidh, bheadh</em>

`PronType` seems to be **lexical feature** of `VERB`. 100% lemmas (11) occur only with one value of `PronType`.

### `AUX`

55 <tt><a href="ga-pos-AUX.html">AUX</a></tt> tokens (14% of all `AUX` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `AUX` and `PronType` co-occurred: <tt><a href="ga-feat-VerbForm.html">VerbForm</a></tt><tt>=Cop</tt> (55; 100%), <tt><a href="ga-feat-Form.html">Form</a></tt><tt>=EMPTY</tt> (49; 89%), <tt><a href="ga-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (37; 67%).

`AUX` tokens may have the following values of `PronType`:

* `Art` (1; 2% of non-empty `PronType`): <em>Cén</em>
* `Dem` (6; 11% of non-empty `PronType`): <em>Seo, Sin</em>
* `Rel` (48; 87% of non-empty `PronType`): <em>ba, nach, is, ab, nár, nárbh</em>
* `EMPTY` (340): <em>is, gur, ba, ní, b', gurb, níor, nach, ar, gurbh</em>

### `X`

27 <tt><a href="ga-pos-X.html">X</a></tt> tokens (10% of all `X` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `X` and `PronType` co-occurred: <tt><a href="ga-feat-Abbr.html">Abbr</a></tt><tt>=EMPTY</tt> (27; 100%), <tt><a href="ga-feat-Dialect.html">Dialect</a></tt><tt>=Munster</tt> (27; 100%), <tt><a href="ga-feat-Foreign.html">Foreign</a></tt><tt>=EMPTY</tt> (27; 100%).

`X` tokens may have the following values of `PronType`:

* `Dem` (26; 96% of non-empty `PronType`): <em>san, so</em>
* `Rel` (1; 4% of non-empty `PronType`): <em>ná</em>
* `EMPTY` (238): <em>(2), (a), (b), (1), (c), (3), (4), Co., a, Uimh.</em>

### `ADV`

10 <tt><a href="ga-pos-ADV.html">ADV</a></tt> tokens (2% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Int` (10; 100% of non-empty `PronType`): <em>conas, cá</em>
* `EMPTY` (473): <em>amach, anois, chomh, ansin, isteach, thart, anseo, arís, síos, anuas</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="ga-dep-conj.html">conj</a></tt>]--> PRON</tt> (2; 100%),
<tt>ADV --[<tt><a href="ga-dep-conj.html">conj</a></tt>]--> PRON</tt> (1; 100%).

