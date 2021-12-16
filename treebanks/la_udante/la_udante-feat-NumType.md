---
layout: base
title:  'Statistics of NumType in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Dist`, `Mult`, `Ord`.

837 tokens (2%) have a non-empty value of `NumType`.
153 types (1%) occur at least once with a non-empty value of `NumType`.
62 lemmas (1%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (287; 1% instances), <tt><a href="la_udante-pos-NUM.html">NUM</a></tt> (256; 0% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt> (203; 0% instances), <tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (91; 0% instances).

### `ADJ`

287 <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> tokens (7% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="la_udante-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (287; 100%), <tt><a href="la_udante-feat-Number.html">Number</a></tt><tt>=Sing</tt> (272; 95%), <tt><a href="la_udante-feat-InflClass.html">InflClass</a></tt><tt>=IndEurO</tt> (193; 67%).

`ADJ` tokens may have the following values of `NumType`:

* `Dist` (3; 1% of non-empty `NumType`): <em>duodena, singulis, tredena</em>
* `Ord` (284; 99% of non-empty `NumType`): <em>prima, primo, primum, primi, secundo, quarto, secunda, primus, tertio, tertium</em>
* `EMPTY` (3787): <em>humanum, consequens, manifestum, necesse, verum, romanorum, illustre, romanus, falsum, inpossibile</em>

<table>
  <tr><th>Paradigm <i>singuli</i></th><th><tt>Ord</tt></th><th><tt>Dist</tt></th></tr>
  <tr><td><tt><tt><a href="la_udante-feat-Case.html">Case</a></tt><tt>=Abl</tt></tt></td><td><em>singulis</em></td><td></td></tr>
  <tr><td><tt><tt><a href="la_udante-feat-Case.html">Case</a></tt><tt>=Dat</tt></tt></td><td><em>singulis</em></td><td><em>singulis</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `ADJ`. 95% lemmas (18) occur only with one value of `NumType`.

### `NUM`

256 <tt><a href="la_udante-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="la_udante-feat-NumForm.html">NumForm</a></tt><tt>=Word</tt> (252; 98%), <tt><a href="la_udante-feat-InflClass.html">InflClass</a></tt><tt>=IndEurO</tt> (159; 62%), <tt><a href="la_udante-feat-Number.html">Number</a></tt><tt>=Plur</tt> (142; 55%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (256; 100% of non-empty `NumType`): <em>unum, duo, tria, duorum, duobus, tres, uno, duos, tribus, una</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (22) occur only with one value of `NumType`.

### `DET`

203 <tt><a href="la_udante-pos-DET.html">DET</a></tt> tokens (6% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="la_udante-feat-Person-psor.html">Person[psor]</a></tt><tt>=EMPTY</tt> (203; 100%), <tt><a href="la_udante-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (203; 100%), <tt><a href="la_udante-feat-Form.html">Form</a></tt><tt>=EMPTY</tt> (202; 100%), <tt><a href="la_udante-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (147; 72%).

`DET` tokens may have the following values of `NumType`:

* `Card` (203; 100% of non-empty `NumType`): <em>quantum, una, multa, unum, plura, uno, multis, pluribus, unius, multi</em>
* `EMPTY` (3323): <em>hoc, illa, illud, hec, ipsum, omnes, aliud, sua, quedam, huius</em>

`NumType` seems to be **lexical feature** of `DET`. 100% lemmas (10) occur only with one value of `NumType`.

### `ADV`

91 <tt><a href="la_udante-pos-ADV.html">ADV</a></tt> tokens (3% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="la_udante-feat-Compound.html">Compound</a></tt><tt>=EMPTY</tt> (90; 99%), <tt><a href="la_udante-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (59; 65%), <tt><a href="la_udante-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (54; 59%).

`ADV` tokens may have the following values of `NumType`:

* `Card` (32; 35% of non-empty `NumType`): <em>quantum, quanto, quantumcunque</em>
* `Mult` (5; 5% of non-empty `NumType`): <em>semel, bis, ter, multotiens</em>
* `Ord` (54; 59% of non-empty `NumType`): <em>primo, primum, secundo, tertio, quinto, Quarto, tertium</em>
* `EMPTY` (2936): <em>sic, ergo, etiam, vero, nunc, tamen, bene, iam, magis, et</em>

`NumType` seems to be **lexical feature** of `ADV`. 100% lemmas (14) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="la_udante-dep-conj.html">conj</a></tt>]--> NUM</tt> (6; 100%),
<tt>ADJ --[<tt><a href="la_udante-dep-flat.html">flat</a></tt>]--> ADJ</tt> (4; 100%),
<tt>ADV --[<tt><a href="la_udante-dep-conj.html">conj</a></tt>]--> ADV</tt> (4; 67%),
<tt>DET --[<tt><a href="la_udante-dep-fixed.html">fixed</a></tt>]--> DET</tt> (2; 100%),
<tt>NUM --[<tt><a href="la_udante-dep-obl.html">obl</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="la_udante-dep-orphan.html">orphan</a></tt>]--> DET</tt> (1; 100%).

