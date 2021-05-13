---
layout: base
title:  'Statistics of Number in UD_Indonesian-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-CSUI: Features: `Number`

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

8070 tokens (29%) have a non-empty value of `Number`.
1549 types (35%) occur at least once with a non-empty value of `Number`.
1286 lemmas (34%) occur at least once with a non-empty value of `Number`.
The feature is used with 3 part-of-speech tags: <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> (7649; 27% instances), <tt><a href="id_csui-pos-PRON.html">PRON</a></tt> (390; 1% instances), <tt><a href="id_csui-pos-DET.html">DET</a></tt> (31; 0% instances).

### `NOUN`

7649 <tt><a href="id_csui-pos-NOUN.html">NOUN</a></tt> tokens (100% of all `NOUN` tokens) have a non-empty value of `Number`.

`NOUN` tokens may have the following values of `Number`:

* `Plur` (68; 1% of non-empty `Number`): <em>langkah-langkah, negara-negara, bank-bank, syarat-syarat, anak-anak, monyet-monyet, nama-nama, obligasi-obligasi, peringkat-peringkat, perusahaan-perusahaan</em>
* `Sing` (7581; 99% of non-empty `Number`): <em>persen, Rp, tahun, dolar, sebesar, saham, perusahaan, pemerintah, negara, pertumbuhan</em>
* `EMPTY` (12): <em>Demikian, kesulitan, musiman, patungan, Olahraga</em>

<table>
  <tr><th>Paradigm <i>tahun</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>tahun, tahunan</em></td><td><em>bertahun-tahun</em></td></tr>
</table>

`Number` seems to be **lexical feature** of `NOUN`. 97% lemmas (1233) occur only with one value of `Number`.

### `PRON`

390 <tt><a href="id_csui-pos-PRON.html">PRON</a></tt> tokens (57% of all `PRON` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PRON` and `Number` co-occurred: <tt><a href="id_csui-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (380; 97%), <tt><a href="id_csui-feat-Person.html">Person</a></tt><tt>=3</tt> (311; 80%).

`PRON` tokens may have the following values of `Number`:

* `Plur` (76; 19% of non-empty `Number`): <em>kita, mereka, kami</em>
* `Sing` (314; 81% of non-empty `Number`): <em>nya, dia, ia, saya, mana, sesuatu, anda</em>
* `EMPTY` (289): <em>nya, itu, ini, demikian, yang, apa, Kita, Kami, Saya, masing-masing</em>

`Number` seems to be **lexical feature** of `PRON`. 100% lemmas (10) occur only with one value of `Number`.

### `DET`

31 <tt><a href="id_csui-pos-DET.html">DET</a></tt> tokens (4% of all `DET` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `DET` and `Number` co-occurred: <tt><a href="id_csui-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (31; 100%).

`DET` tokens may have the following values of `Number`:

* `Sing` (31; 100% of non-empty `Number`): <em>sebuah, seorang</em>
* `EMPTY` (703): <em>ini, nya, tersebut, itu, beberapa, seluruh, banyak, sendiri, para, berbagai</em>

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>NOUN --[<tt><a href="id_csui-dep-nmod.html">nmod</a></tt>]--> NOUN</tt> (3333; 98%),
<tt>NOUN --[<tt><a href="id_csui-dep-conj.html">conj</a></tt>]--> NOUN</tt> (288; 98%),
<tt>NOUN --[<tt><a href="id_csui-dep-nmod-tmod.html">nmod:tmod</a></tt>]--> NOUN</tt> (147; 99%),
<tt>NOUN --[<tt><a href="id_csui-dep-nmod-lmod.html">nmod:lmod</a></tt>]--> NOUN</tt> (84; 100%),
<tt>NOUN --[<tt><a href="id_csui-dep-appos.html">appos</a></tt>]--> NOUN</tt> (44; 98%),
<tt>NOUN --[<tt><a href="id_csui-dep-nsubj.html">nsubj</a></tt>]--> NOUN</tt> (27; 96%),
<tt>NOUN --[<tt><a href="id_csui-dep-orphan.html">orphan</a></tt>]--> NOUN</tt> (10; 100%),
<tt>NOUN --[<tt><a href="id_csui-dep-acl.html">acl</a></tt>]--> NOUN</tt> (5; 100%),
<tt>DET --[<tt><a href="id_csui-dep-nmod.html">nmod</a></tt>]--> NOUN</tt> (3; 100%),
<tt>NOUN --[<tt><a href="id_csui-dep-ccomp.html">ccomp</a></tt>]--> NOUN</tt> (3; 100%).

