---
layout: base
title:  'Statistics of PronType in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Features: `PronType`

This feature is universal but the values `Emp` are language-specific.
It occurs with 7 different values: `Dem`, `Emp`, `Ind`, `Int`, `Prs`, `Rel`, `Tot`.

2106 tokens (11%) have a non-empty value of `PronType`.
81 types (2%) occur at least once with a non-empty value of `PronType`.
49 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (1323; 7% instances), <tt><a href="id_pud-pos-DET.html">DET</a></tt> (725; 4% instances), <tt><a href="id_pud-pos-ADV.html">ADV</a></tt> (58; 0% instances).

### `PRON`

1323 <tt><a href="id_pud-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="id_pud-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (1055; 80%), <tt><a href="id_pud-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (703; 53%), <tt><a href="id_pud-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (703; 53%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (107; 8% of non-empty `PronType`): <em>itu, ini, sana, begitu, demikian, sini</em>
* `Ind` (8; 1% of non-empty `PronType`): <em>seseorang, sesuatu</em>
* `Int` (10; 1% of non-empty `PronType`): <em>apa, siapa, mana</em>
* `Prs` (635; 48% of non-empty `PronType`): <em>nya, ia, mereka, saya, kami, dia, kita, diri, Anda, Aku</em>
* `Rel` (560; 42% of non-empty `PronType`): <em>yang, apa, mana, siapa</em>
* `Tot` (3; 0% of non-empty `PronType`): <em>semua</em>

<table>
  <tr><th>Paradigm <i>apa</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>apa</em></td><td><em>apa</em></td></tr>
</table>

### `DET`

725 <tt><a href="id_pud-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="id_pud-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (527; 73%).

`DET` tokens may have the following values of `PronType`:

* `Dem` (452; 62% of non-empty `PronType`): <em>ini, itu, nya, tersebut, sang, si</em>
* `Emp` (17; 2% of non-empty `PronType`): <em>sendiri</em>
* `Ind` (207; 29% of non-empty `PronType`): <em>sebuah, para, banyak, beberapa, seorang, berbagai, suatu, sebagian, kebanyakan, sejenis</em>
* `Tot` (49; 7% of non-empty `PronType`): <em>semua, seluruh, setiap, masing-masing, segala</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (23) occur only with one value of `PronType`.

### `ADV`

58 <tt><a href="id_pud-pos-ADV.html">ADV</a></tt> tokens (9% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Ind` (4; 7% of non-empty `PronType`): <em>kadang, kadang-kadang</em>
* `Int` (2; 3% of non-empty `PronType`): <em>bagaimana</em>
* `Rel` (46; 79% of non-empty `PronType`): <em>saat, ketika, mengapa, bagaimana, berapa, kapan, seberapa</em>
* `Tot` (6; 10% of non-empty `PronType`): <em>selalu</em>
* `EMPTY` (570): <em>lebih, juga, sangat, hanya, saja, sekitar, tetap, kemudian, paling, lagi</em>

<table>
  <tr><th>Paradigm <i>bagaimana</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>bagaimana</em></td><td><em>bagaimana</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="id_pud-dep-nmod-poss.html">nmod:poss</a></tt>]--> PRON</tt> (9; 100%),
<tt>PRON --[<tt><a href="id_pud-dep-conj.html">conj</a></tt>]--> PRON</tt> (1; 100%).

