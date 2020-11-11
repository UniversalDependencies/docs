---
layout: base
title:  'Statistics of Number in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Features: `Number`

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

5465 tokens (28%) have a non-empty value of `Number`.
1980 types (42%) occur at least once with a non-empty value of `Number`.
1527 lemmas (42%) occur at least once with a non-empty value of `Number`.
The feature is used with 4 part-of-speech tags: <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (4646; 24% instances), <tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (621; 3% instances), <tt><a href="id_pud-pos-DET.html">DET</a></tt> (197; 1% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).

### `NOUN`

4646 <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> tokens (99% of all `NOUN` tokens) have a non-empty value of `Number`.

`NOUN` tokens may have the following values of `Number`:

* `Plur` (129; 3% of non-empty `Number`): <em>orang-orang, negara-negara, anak-anak, batas-batas, bagian-bagian, batu-batu, bertahun-tahun, bulan-bulan, kota-kota, puing-puing</em>
* `Sing` (4517; 97% of non-empty `Number`): <em>tahun, orang, bulan, bagian, hari, negara, kota, laut, perang, hal</em>
* `EMPTY` (35): <em>SM, mercu, suar, AIDS, ATM, BC, C, DFB, GIF, HFC</em>

<table>
  <tr><th>Paradigm <i>tahun</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>tahun, bertahun-tahun, tahunan</em></td><td><em>bertahun-tahun, tahun-tahun</em></td></tr>
</table>

`Number` seems to be **lexical feature** of `NOUN`. 96% lemmas (1445) occur only with one value of `Number`.

### `PRON`

621 <tt><a href="id_pud-pos-PRON.html">PRON</a></tt> tokens (47% of all `PRON` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PRON` and `Number` co-occurred: <tt><a href="id_pud-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (588; 95%), <tt><a href="id_pud-feat-Person.html">Person</a></tt><tt>=3</tt> (469; 76%), <tt><a href="id_pud-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (353; 57%).

`PRON` tokens may have the following values of `Number`:

* `Plur` (139; 22% of non-empty `Number`): <em>mereka, kami, kita, kalian</em>
* `Sing` (482; 78% of non-empty `Number`): <em>nya, ia, saya, dia, Anda, Aku, ku, diri, kamu</em>
* `EMPTY` (710): <em>yang, itu, ini, apa, mana, diri, sana, siapa, seseorang, begitu</em>

`Number` seems to be **lexical feature** of `PRON`. 100% lemmas (14) occur only with one value of `Number`.

### `DET`

197 <tt><a href="id_pud-pos-DET.html">DET</a></tt> tokens (27% of all `DET` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `DET` and `Number` co-occurred: <tt><a href="id_pud-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (194; 98%).

`DET` tokens may have the following values of `Number`:

* `Plur` (108; 55% of non-empty `Number`): <em>para, banyak, beberapa, berbagai, serangkaian, sepasang</em>
* `Sing` (89; 45% of non-empty `Number`): <em>sebuah, seorang, suatu</em>
* `EMPTY` (526): <em>ini, itu, nya, tersebut, semua, sendiri, seluruh, setiap, sang, Beberapa</em>

### `PROPN`

1 <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> tokens (0% of all `PROPN` tokens) have a non-empty value of `Number`.

`PROPN` tokens may have the following values of `Number`:

* `Sing` (1; 100% of non-empty `Number`): <em>Marxisme</em>
* `EMPTY` (2086): <em>Amerika, Inggris, Eropa, of, Tiongkok, the, Prancis, Spanyol, Yunani, Oktober</em>

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>NOUN --[<tt><a href="id_pud-dep-nmod.html">nmod</a></tt>]--> NOUN</tt> (1287; 95%),
<tt>NOUN --[<tt><a href="id_pud-dep-conj.html">conj</a></tt>]--> NOUN</tt> (217; 95%),
<tt>NOUN --[<tt><a href="id_pud-dep-nmod-poss.html">nmod:poss</a></tt>]--> PRON</tt> (198; 77%),
<tt>NOUN --[<tt><a href="id_pud-dep-nmod-tmod.html">nmod:tmod</a></tt>]--> NOUN</tt> (78; 96%),
<tt>NOUN --[<tt><a href="id_pud-dep-nmod-lmod.html">nmod:lmod</a></tt>]--> NOUN</tt> (65; 96%),
<tt>NOUN --[<tt><a href="id_pud-dep-nsubj.html">nsubj</a></tt>]--> NOUN</tt> (49; 96%),
<tt>NOUN --[<tt><a href="id_pud-dep-compound.html">compound</a></tt>]--> NOUN</tt> (24; 100%),
<tt>NOUN --[<tt><a href="id_pud-dep-nmod-poss.html">nmod:poss</a></tt>]--> NOUN</tt> (17; 100%),
<tt>PRON --[<tt><a href="id_pud-dep-nmod-lmod.html">nmod:lmod</a></tt>]--> NOUN</tt> (10; 67%),
<tt>NOUN --[<tt><a href="id_pud-dep-appos.html">appos</a></tt>]--> NOUN</tt> (9; 90%).

