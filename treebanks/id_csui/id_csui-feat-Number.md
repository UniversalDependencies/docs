---
layout: base
title:  'Statistics of Number in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Features: `Number`

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

8237 tokens (29%) have a non-empty value of `Number`.
1549 types (35%) occur at least once with a non-empty value of `Number`.
1285 lemmas (34%) occur at least once with a non-empty value of `Number`.
The feature is used with 3 part-of-speech tags: <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (7644; 27% instances), <tt><a href="id_csui-pos-PRON.html">PRON</a></tt> (534; 2% instances), <tt><a href="id_csui-pos-DET.html">DET</a></tt> (59; 0% instances).

### `NOUN`

7644 <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> tokens (100% of all `NOUN` tokens) have a non-empty value of `Number`.

`NOUN` tokens may have the following values of `Number`:

* `Plur` (68; 1% of non-empty `Number`): <em>langkah-langkah, negara-negara, bank-bank, syarat-syarat, anak-anak, monyet-monyet, nama-nama, obligasi-obligasi, peringkat-peringkat, perusahaan-perusahaan</em>
* `Sing` (7576; 99% of non-empty `Number`): <em>persen, Rp, tahun, dolar, sebesar, saham, perusahaan, pemerintah, negara, pertumbuhan</em>
* `EMPTY` (8): <em>kesulitan, musiman, patungan, Olahraga, non-migas</em>

<table>
  <tr><th>Paradigm <i>tahun</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>tahun, tahunan</em></td><td><em>bertahun-tahun</em></td></tr>
</table>

`Number` seems to be **lexical feature** of `NOUN`. 97% lemmas (1231) occur only with one value of `Number`.

### `PRON`

534 <tt><a href="id_csui-pos-PRON.html">PRON</a></tt> tokens (45% of all `PRON` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PRON` and `Number` co-occurred: <tt><a href="id_csui-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (534; 100%), <tt><a href="id_csui-feat-Person.html">Person</a></tt><tt>=3</tt> (445; 83%).

`PRON` tokens may have the following values of `Number`:

* `Plur` (93; 17% of non-empty `Number`): <em>kita, mereka, kami</em>
* `Sing` (441; 83% of non-empty `Number`): <em>nya, dia, ia, saya, anda</em>
* `EMPTY` (663): <em>yang, itu, demikian, ini, mana, apa, diri, siapa, sesuatu, begitu</em>

### `DET`

59 <tt><a href="id_csui-pos-DET.html">DET</a></tt> tokens (8% of all `DET` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `DET` and `Number` co-occurred: <tt><a href="id_csui-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (59; 100%), <tt><a href="id_csui-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (59; 100%).

`DET` tokens may have the following values of `Number`:

* `Plur` (59; 100% of non-empty `Number`): <em>beberapa, banyak, para, berbagai</em>
* `EMPTY` (685): <em>ini, nya, tersebut, itu, sebuah, seluruh, sendiri, seorang, semua, masing-masing</em>

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>NOUN --[<tt><a href="id_csui-dep-nmod.html">nmod</a></tt>]--> NOUN</tt> (3281; 99%),
<tt>NOUN --[<tt><a href="id_csui-dep-conj.html">conj</a></tt>]--> NOUN</tt> (287; 98%),
<tt>NOUN --[<tt><a href="id_csui-dep-nmod-tmod.html">nmod:tmod</a></tt>]--> NOUN</tt> (186; 99%),
<tt>NOUN --[<tt><a href="id_csui-dep-nmod-poss.html">nmod:poss</a></tt>]--> PRON</tt> (142; 90%),
<tt>NOUN --[<tt><a href="id_csui-dep-nmod-lmod.html">nmod:lmod</a></tt>]--> NOUN</tt> (85; 100%),
<tt>NOUN --[<tt><a href="id_csui-dep-appos.html">appos</a></tt>]--> NOUN</tt> (42; 98%),
<tt>NOUN --[<tt><a href="id_csui-dep-nsubj.html">nsubj</a></tt>]--> NOUN</tt> (27; 100%),
<tt>NOUN --[<tt><a href="id_csui-dep-orphan.html">orphan</a></tt>]--> NOUN</tt> (14; 93%),
<tt>NOUN --[<tt><a href="id_csui-dep-acl-relcl.html">acl:relcl</a></tt>]--> NOUN</tt> (8; 100%),
<tt>NOUN --[<tt><a href="id_csui-dep-acl.html">acl</a></tt>]--> NOUN</tt> (6; 100%).

