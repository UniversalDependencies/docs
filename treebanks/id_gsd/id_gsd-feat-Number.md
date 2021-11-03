---
layout: base
title:  'Statistics of Number in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Features: `Number`

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

24507 tokens (20%) have a non-empty value of `Number`.
3886 types (20%) occur at least once with a non-empty value of `Number`.
2552 lemmas (16%) occur at least once with a non-empty value of `Number`.
The feature is used with 3 part-of-speech tags: <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (21190; 17% instances), <tt><a href="id_gsd-pos-PRON.html">PRON</a></tt> (2859; 2% instances), <tt><a href="id_gsd-pos-DET.html">DET</a></tt> (458; 0% instances).

### `NOUN`

21190 <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> tokens (80% of all `NOUN` tokens) have a non-empty value of `Number`.

`NOUN` tokens may have the following values of `Number`:

* `Plur` (682; 3% of non-empty `Number`): <em>orang-orang, anak-anak, negara-negara, undang-undang, lagu-lagu, kata-kata, kitab-kitab, kota-kota, raja-raja, kapal-kapal</em>
* `Sing` (20508; 97% of non-empty `Number`): <em>tahun, orang, desa, nama, kota, bagian, bahasa, wilayah, saat, film</em>
* `EMPTY` (5241): <em>tanggal, sepak, luas, band, atas, pusat, gelar, km, serial, sekarang</em>

<table>
  <tr><th>Paradigm <i>tahun</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>tahun, tahunan</em></td><td><em>tahun-tahun</em></td></tr>
</table>

### `PRON`

2859 <tt><a href="id_gsd-pos-PRON.html">PRON</a></tt> tokens (45% of all `PRON` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PRON` and `Number` co-occurred: <tt><a href="id_gsd-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (2819; 99%), <tt><a href="id_gsd-feat-Person.html">Person</a></tt><tt>=3</tt> (2473; 86%).

`PRON` tokens may have the following values of `Number`:

* `Plur` (466; 16% of non-empty `Number`): <em>mereka, kita, kami, kalian, apa-apa, beberapa</em>
* `Sing` (2393; 84% of non-empty `Number`): <em>nya, ia, dia, ku, kamu, aku, mu, engkau, seseorang, beliau</em>
* `EMPTY` (3564): <em>yang, apa, diri, siapa, mana, itu, demikian, semua, ini, sini</em>

`Number` seems to be **lexical feature** of `PRON`. 100% lemmas (21) occur only with one value of `Number`.

### `DET`

458 <tt><a href="id_gsd-pos-DET.html">DET</a></tt> tokens (13% of all `DET` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `DET` and `Number` co-occurred: <tt><a href="id_gsd-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (458; 100%), <tt><a href="id_gsd-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (458; 100%).

`DET` tokens may have the following values of `Number`:

* `Plur` (457; 100% of non-empty `Number`): <em>beberapa, para, berbagai, banyak, sejumlah, kebanyakan, serangkaian, aneka, beragam, sekelompok</em>
* `Sing` (1; 0% of non-empty `Number`): <em>sesuatu</em>
* `EMPTY` (3206): <em>ini, itu, sebuah, tersebut, nya, seorang, suatu, semua, setiap, seluruh</em>

`Number` seems to be **lexical feature** of `DET`. 100% lemmas (13) occur only with one value of `Number`.

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>NOUN --[<tt><a href="id_gsd-dep-compound.html">compound</a></tt>]--> NOUN</tt> (4090; 66%),
<tt>NOUN --[<tt><a href="id_gsd-dep-nmod.html">nmod</a></tt>]--> NOUN</tt> (1524; 66%),
<tt>NOUN --[<tt><a href="id_gsd-dep-nmod-poss.html">nmod:poss</a></tt>]--> PRON</tt> (964; 71%),
<tt>NOUN --[<tt><a href="id_gsd-dep-conj.html">conj</a></tt>]--> NOUN</tt> (960; 69%),
<tt>NOUN --[<tt><a href="id_gsd-dep-nsubj.html">nsubj</a></tt>]--> NOUN</tt> (121; 63%),
<tt>NOUN --[<tt><a href="id_gsd-dep-amod.html">amod</a></tt>]--> NOUN</tt> (79; 62%),
<tt>NOUN --[<tt><a href="id_gsd-dep-nmod-tmod.html">nmod:tmod</a></tt>]--> NOUN</tt> (50; 74%),
<tt>NOUN --[<tt><a href="id_gsd-dep-acl.html">acl</a></tt>]--> NOUN</tt> (31; 72%),
<tt>NOUN --[<tt><a href="id_gsd-dep-clf.html">clf</a></tt>]--> NOUN</tt> (11; 100%),
<tt>NOUN --[<tt><a href="id_gsd-dep-advcl.html">advcl</a></tt>]--> NOUN</tt> (8; 53%).

