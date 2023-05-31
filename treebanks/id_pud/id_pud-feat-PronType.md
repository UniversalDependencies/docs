---
layout: base
title:  'Statistics of PronType in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Features: `PronType`

This feature is universal but the values `Emp` are language-specific.
It occurs with 8 different values: `Art`, `Dem`, `Emp`, `Ind`, `Int`, `Prs`, `Rel`, `Tot`.

2134 tokens (11%) have a non-empty value of `PronType`.
81 types (2%) occur at least once with a non-empty value of `PronType`.
49 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (1329; 7% instances), <tt><a href="id_pud-pos-DET.html">DET</a></tt> (741; 4% instances), <tt><a href="id_pud-pos-ADV.html">ADV</a></tt> (64; 0% instances).

### `PRON`

1329 <tt><a href="id_pud-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="id_pud-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (709; 53%), <tt><a href="id_pud-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (709; 53%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (127; 10% of non-empty `PronType`): <em>itu, ini, mana, sana, begitu, demikian, sini</em>
* `Ind` (8; 1% of non-empty `PronType`): <em>seseorang, sesuatu</em>
* `Int` (4; 0% of non-empty `PronType`): <em>siapa, mana</em>
* `Prs` (635; 48% of non-empty `PronType`): <em>nya, ia, mereka, saya, kami, dia, kita, diri, Anda, Aku</em>
* `Rel` (551; 41% of non-empty `PronType`): <em>yang, apa, siapa</em>
* `Tot` (4; 0% of non-empty `PronType`): <em>semua</em>

<table>
  <tr><th>Paradigm <i>mana</i></th><th><tt>Int</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt></tt></td><td><em>mana</em></td><td><em>mana</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 92% lemmas (24) occur only with one value of `PronType`.

### `DET`

741 <tt><a href="id_pud-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="id_pud-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (632; 85%), <tt><a href="id_pud-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (544; 73%).

`DET` tokens may have the following values of `PronType`:

* `Art` (197; 27% of non-empty `PronType`): <em>nya, sebuah, seorang, yang, suatu</em>
* `Dem` (358; 48% of non-empty `PronType`): <em>ini, itu, tersebut, sang, si</em>
* `Emp` (17; 2% of non-empty `PronType`): <em>sendiri</em>
* `Ind` (118; 16% of non-empty `PronType`): <em>para, banyak, beberapa, berbagai, sebagian, kebanyakan, sejenis, serangkaian, sepasang</em>
* `Tot` (51; 7% of non-empty `PronType`): <em>semua, seluruh, setiap, masing-masing, segala</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (24) occur only with one value of `PronType`.

### `ADV`

64 <tt><a href="id_pud-pos-ADV.html">ADV</a></tt> tokens (9% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Ind` (4; 6% of non-empty `PronType`): <em>kadang, kadang-kadang</em>
* `Int` (8; 13% of non-empty `PronType`): <em>apa, bagaimana</em>
* `Rel` (46; 72% of non-empty `PronType`): <em>saat, ketika, mengapa, bagaimana, berapa, kapan, seberapa</em>
* `Tot` (6; 9% of non-empty `PronType`): <em>selalu</em>
* `EMPTY` (614): <em>lebih, juga, sangat, Namun, hanya, saja, sekitar, tetap, kemudian, paling</em>

<table>
  <tr><th>Paradigm <i>apa</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>apa</em></td><td><em>mengapa</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="id_pud-dep-nmod-poss.html">nmod:poss</a></tt>]--> PRON</tt> (9; 100%),
<tt>PRON --[<tt><a href="id_pud-dep-conj.html">conj</a></tt>]--> PRON</tt> (1; 100%).

