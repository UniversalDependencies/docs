---
layout: base
title:  'Statistics of PronType in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Features: `PronType`

This feature is universal but the values `Emp` are language-specific.
It occurs with 7 different values: `Dem`, `Emp`, `Ind`, `Int`, `Prs`, `Rel`, `Tot`.

1980 tokens (10%) have a non-empty value of `PronType`.
79 types (2%) occur at least once with a non-empty value of `PronType`.
48 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (1295; 7% instances), <tt><a href="id_pud-pos-DET.html">DET</a></tt> (627; 3% instances), <tt><a href="id_pud-pos-ADV.html">ADV</a></tt> (58; 0% instances).

### `PRON`

1295 <tt><a href="id_pud-pos-PRON.html">PRON</a></tt> tokens (97% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="id_pud-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (1027; 79%), <tt><a href="id_pud-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (707; 55%), <tt><a href="id_pud-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (707; 55%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (107; 8% of non-empty `PronType`): <em>itu, ini, sana, begitu, demikian, sini</em>
* `Ind` (8; 1% of non-empty `PronType`): <em>seseorang, sesuatu</em>
* `Int` (10; 1% of non-empty `PronType`): <em>apa, siapa, mana</em>
* `Prs` (602; 46% of non-empty `PronType`): <em>nya, ia, mereka, saya, kami, dia, kita, Anda, diri, Aku</em>
* `Rel` (565; 44% of non-empty `PronType`): <em>yang, apa, mana, siapa</em>
* `Tot` (3; 0% of non-empty `PronType`): <em>semua</em>
* `EMPTY` (36): <em>nya, yang, diri</em>

<table>
  <tr><th>Paradigm <i>apa</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>apa</em></td><td><em>apa</em></td></tr>
</table>

### `DET`

627 <tt><a href="id_pud-pos-DET.html">DET</a></tt> tokens (87% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="id_pud-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (433; 69%).

`DET` tokens may have the following values of `PronType`:

* `Dem` (358; 57% of non-empty `PronType`): <em>ini, itu, tersebut, sang, si</em>
* `Emp` (17; 3% of non-empty `PronType`): <em>sendiri</em>
* `Ind` (203; 32% of non-empty `PronType`): <em>sebuah, para, banyak, beberapa, seorang, berbagai, sebagian, suatu, kebanyakan, sejenis</em>
* `Tot` (49; 8% of non-empty `PronType`): <em>semua, seluruh, setiap, masing-masing, segala</em>
* `EMPTY` (96): <em>nya, serangkaian, sepasang</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (20) occur only with one value of `PronType`.

### `ADV`

58 <tt><a href="id_pud-pos-ADV.html">ADV</a></tt> tokens (9% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Ind` (4; 7% of non-empty `PronType`): <em>kadang, kadang-kadang</em>
* `Int` (2; 3% of non-empty `PronType`): <em>bagaimana</em>
* `Rel` (46; 79% of non-empty `PronType`): <em>saat, ketika, mengapa, bagaimana, berapa, kapan, seberapa</em>
* `Tot` (6; 10% of non-empty `PronType`): <em>selalu</em>
* `EMPTY` (588): <em>lebih, juga, sangat, hanya, saja, sekitar, tetap, kemudian, paling, lagi</em>

<table>
  <tr><th>Paradigm <i>bagaimana</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>bagaimana</em></td><td><em>bagaimana</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="id_pud-dep-nmod-poss.html">nmod:poss</a></tt>]--> PRON</tt> (9; 100%),
<tt>PRON --[<tt><a href="id_pud-dep-conj.html">conj</a></tt>]--> PRON</tt> (1; 100%).

