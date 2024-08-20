---
layout: base
title:  'Statistics of PronType in UD_Vietnamese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-TueCL: Features: `PronType`

This feature is universal.
It occurs with 7 different values: `Dem`, `Ind`, `Int`, `Prs`, `Rcp`, `Rel`, `Tot`.

245 tokens (13%) have a non-empty value of `PronType`.
55 types (8%) occur at least once with a non-empty value of `PronType`.
42 lemmas (6%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: <tt><a href="vi_tuecl-pos-PRON.html">PRON</a></tt> (209; 11% instances), <tt><a href="vi_tuecl-pos-DET.html">DET</a></tt> (36; 2% instances).

### `PRON`

209 <tt><a href="vi_tuecl-pos-PRON.html">PRON</a></tt> tokens (99% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="vi_tuecl-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (171; 82%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (20; 10% of non-empty `PronType`): <em>đó, đây, kia</em>
* `Ind` (14; 7% of non-empty `PronType`): <em>gì, nào, ai</em>
* `Int` (5; 2% of non-empty `PronType`): <em>gì, đâu, ai</em>
* `Prs` (152; 73% of non-empty `PronType`): <em>tôi, chúng ta, nó, bạn, ta, họ, chúng tôi, chúng, anh, cậu</em>
* `Rcp` (2; 1% of non-empty `PronType`): <em>nhau</em>
* `Rel` (16; 8% of non-empty `PronType`): <em>mà, ai, gì</em>
* `EMPTY` (2): <em>Cha, anh ta</em>

<table>
  <tr><th>Paradigm <i>gì</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt></tt></td><td><em>gì</em></td><td><em>gì</em></td><td><em>gì</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 94% lemmas (33) occur only with one value of `PronType`.

### `DET`

36 <tt><a href="vi_tuecl-pos-DET.html">DET</a></tt> tokens (43% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="vi_tuecl-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (36; 100%), <tt><a href="vi_tuecl-feat-Deixis.html">Deixis</a></tt><tt>=EMPTY</tt> (25; 69%).

`DET` tokens may have the following values of `PronType`:

* `Dem` (26; 72% of non-empty `PronType`): <em>này, đó, kia, nay</em>
* `Ind` (4; 11% of non-empty `PronType`): <em>một vài, vài</em>
* `Int` (1; 3% of non-empty `PronType`): <em>ai</em>
* `Tot` (5; 14% of non-empty `PronType`): <em>cả hai, tất cả, mỗi</em>
* `EMPTY` (48): <em>những, các, bất cứ, mọi, cả, mấy, từng</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (10) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="vi_tuecl-dep-conj.html">conj</a></tt>]--> PRON</tt> (3; 100%),
<tt>PRON --[<tt><a href="vi_tuecl-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (1; 100%).

