---
layout: base
title:  'Statistics of Person in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: <tt><a href="id_gsd-feat-Person.html">Person</a></tt>, <tt><a href="id_gsd-feat-Person-psor.html">Person[psor]</a></tt>.

1150 tokens (1%) have a non-empty value of `Person`.
39 types (0%) occur at least once with a non-empty value of `Person`.
22 lemmas (0%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: <tt><a href="id_gsd-pos-PRON.html">PRON</a></tt> (1136; 1% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt> (8; 0% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt> (6; 0% instances).

### `PRON`

1136 <tt><a href="id_gsd-pos-PRON.html">PRON</a></tt> tokens (24% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="id_gsd-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (1136; 100%), <tt><a href="id_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt> (672; 59%).

`PRON` tokens may have the following values of `Person`:

* `1` (143; 13% of non-empty `Person`): <em>kita, aku, kami, saya, kamilah</em>
* `2` (108; 10% of non-empty `Person`): <em>kamu, engkau, anda, kalian, kau</em>
* `3` (885; 78% of non-empty `Person`): <em>ia, mereka, dia, beliau, Nya, merekapun</em>
* `EMPTY` (3625): <em>yang, apa, dia, siapa, dirinya, apakah, siapakah, saat, adanya, nya</em>

`Person` seems to be **lexical feature** of `PRON`. 100% lemmas (14) occur only with one value of `Person`.

### `PROPN`

8 <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt> tokens (0% of all `PROPN` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PROPN` and `Person` co-occurred: <tt><a href="id_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt> (8; 100%).

`PROPN` tokens may have the following values of `Person`:

* `1` (8; 100% of non-empty `Person`): <em>Kutai, Kumari, Kusambut, Kustilah</em>
* `EMPTY` (22765): <em>indonesia, kabupaten, kecamatan, Jawa, provinsi, Amerika, Timur, Barat, jepang, tengah</em>

### `VERB`

6 <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt> tokens (0% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="id_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt> (6; 100%), <tt><a href="id_gsd-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (4; 67%).

`VERB` tokens may have the following values of `Person`:

* `1` (5; 83% of non-empty `Person`): <em>kukatakan, Kubebaskankah, Kutebuskah, kudengar</em>
* `2` (1; 17% of non-empty `Person`): <em>kaukatakan</em>
* `EMPTY` (12195): <em>menjadi, merupakan, memiliki, ada, terletak, digunakan, berada, menggunakan, dikenal, terjadi</em>

<table>
  <tr><th>Paradigm <i>katakan</i></th><th><tt>1</tt></th><th><tt>2</tt></th></tr>
  <tr><td><tt></tt></td><td><em>kukatakan</em></td><td><em>kaukatakan</em></td></tr>
</table>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>PRON --[<tt><a href="id_gsd-dep-dep.html">dep</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="id_gsd-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (1; 100%),
<tt>VERB --[<tt><a href="id_gsd-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (1; 100%).

