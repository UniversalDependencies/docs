---
layout: base
title:  'Statistics of Number in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Features: `Number`

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

5384 tokens (28%) have a non-empty value of `Number`.
1981 types (42%) occur at least once with a non-empty value of `Number`.
1533 lemmas (42%) occur at least once with a non-empty value of `Number`.
The feature is used with 3 part-of-speech tags: <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (4655; 24% instances), <tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (620; 3% instances), <tt><a href="id_pud-pos-DET.html">DET</a></tt> (109; 1% instances).

### `NOUN`

4655 <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> tokens (99% of all `NOUN` tokens) have a non-empty value of `Number`.

`NOUN` tokens may have the following values of `Number`:

* `Plur` (143; 3% of non-empty `Number`): <em>orang-orang, negara-negara, anak-anak, batas-batas, 1970-an, bagian-bagian, batu-batu, bertahun-tahun, bulan-bulan, kota-kota</em>
* `Sing` (4512; 97% of non-empty `Number`): <em>tahun, orang, bulan, bagian, hari, negara, kota, laut, hal, perang</em>
* `EMPTY` (34): <em>SM, mercu, suar, AIDS, ATM, BC, DFB, GIF, HFC, Kontituensi</em>

<table>
  <tr><th>Paradigm <i>tahun</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>tahun, bertahun-tahun, tahunan</em></td><td><em>bertahun-tahun, tahun-tahun</em></td></tr>
</table>

`Number` seems to be **lexical feature** of `NOUN`. 96% lemmas (1454) occur only with one value of `Number`.

### `PRON`

620 <tt><a href="id_pud-pos-PRON.html">PRON</a></tt> tokens (47% of all `PRON` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PRON` and `Number` co-occurred: <tt><a href="id_pud-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (620; 100%), <tt><a href="id_pud-feat-Person.html">Person</a></tt><tt>=3</tt> (501; 81%).

`PRON` tokens may have the following values of `Number`:

* `Plur` (139; 22% of non-empty `Number`): <em>mereka, kami, kita, kalian</em>
* `Sing` (481; 78% of non-empty `Number`): <em>nya, ia, saya, dia, Anda, Aku, ku, kamu</em>
* `EMPTY` (709): <em>yang, itu, ini, mana, apa, diri, sana, siapa, seseorang, begitu</em>

`Number` seems to be **lexical feature** of `PRON`. 100% lemmas (12) occur only with one value of `Number`.

### `DET`

109 <tt><a href="id_pud-pos-DET.html">DET</a></tt> tokens (15% of all `DET` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `DET` and `Number` co-occurred: <tt><a href="id_pud-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (109; 100%), <tt><a href="id_pud-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (109; 100%).

`DET` tokens may have the following values of `Number`:

* `Plur` (109; 100% of non-empty `Number`): <em>para, banyak, beberapa, berbagai, serangkaian, sepasang</em>
* `EMPTY` (632): <em>ini, itu, nya, sebuah, tersebut, seorang, semua, sendiri, seluruh, setiap</em>

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>NOUN --[<tt><a href="id_pud-dep-nmod.html">nmod</a></tt>]--> NOUN</tt> (1282; 94%),
<tt>NOUN --[<tt><a href="id_pud-dep-conj.html">conj</a></tt>]--> NOUN</tt> (219; 95%),
<tt>NOUN --[<tt><a href="id_pud-dep-nmod-poss.html">nmod:poss</a></tt>]--> PRON</tt> (198; 77%),
<tt>NOUN --[<tt><a href="id_pud-dep-nmod-tmod.html">nmod:tmod</a></tt>]--> NOUN</tt> (77; 96%),
<tt>NOUN --[<tt><a href="id_pud-dep-nmod-lmod.html">nmod:lmod</a></tt>]--> NOUN</tt> (65; 97%),
<tt>NOUN --[<tt><a href="id_pud-dep-nsubj.html">nsubj</a></tt>]--> NOUN</tt> (50; 96%),
<tt>NOUN --[<tt><a href="id_pud-dep-compound.html">compound</a></tt>]--> NOUN</tt> (24; 100%),
<tt>NOUN --[<tt><a href="id_pud-dep-nmod-poss.html">nmod:poss</a></tt>]--> NOUN</tt> (18; 100%),
<tt>PRON --[<tt><a href="id_pud-dep-nmod-lmod.html">nmod:lmod</a></tt>]--> NOUN</tt> (10; 77%),
<tt>NOUN --[<tt><a href="id_pud-dep-acl-relcl.html">acl:relcl</a></tt>]--> NOUN</tt> (9; 100%).

