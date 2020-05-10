---
layout: base
title:  'Statistics of Degree in UD_Classical_Chinese-Kyoto'
udver: '2'
---

## Treebank Statistics: UD_Classical_Chinese-Kyoto: Features: `Degree`

This feature is universal but the values `Equ` are language-specific.
It occurs with 4 different values: `Cmp`, `Equ`, `Pos`, `Sup`.

8935 tokens (7%) have a non-empty value of `Degree`.
638 types (16%) occur at least once with a non-empty value of `Degree`.
635 lemmas (16%) occur at least once with a non-empty value of `Degree`.
The feature is used with 4 part-of-speech tags: <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt> (7761; 6% instances), <tt><a href="lzh_kyoto-pos-ADV.html">ADV</a></tt> (1171; 1% instances), <tt><a href="lzh_kyoto-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).

### `VERB`

7761 <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt> tokens (18% of all `VERB` tokens) have a non-empty value of `Degree`.

`VERB` tokens may have the following values of `Degree`:

* `Equ` (677; 9% of non-empty `Degree`): 如、 若、 猶、 奈、 區
* `Pos` (7084; 91% of non-empty `Degree`): 大、 正、 同、 小、 明、 仁、 可、 貴、 然、 和
* `EMPTY` (34758): 曰、 有、 以、 為、 無、 行、 謂、 知、 問、 見

<table>
  <tr><th>Paradigm <i>猶</i></th><th><tt>Pos</tt></th><th><tt>Equ</tt></th></tr>
  <tr><td><tt></tt></td><td>猶</td><td>猶</td></tr>
</table>

`Degree` seems to be **lexical feature** of `VERB`. 100% lemmas (604) occur only with one value of `Degree`.

### `ADV`

1171 <tt><a href="lzh_kyoto-pos-ADV.html">ADV</a></tt> tokens (9% of all `ADV` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADV` and `Degree` co-occurred: <tt><a href="lzh_kyoto-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (1171; 100%), <tt><a href="lzh_kyoto-feat-AdvType.html">AdvType</a></tt><tt>=EMPTY</tt> (1146; 98%), <tt><a href="lzh_kyoto-feat-VerbForm.html">VerbForm</a></tt><tt>=Conv</tt> (1146; 98%).

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (4; 0% of non-empty `Degree`): 滋、 質
* `Equ` (21; 2% of non-empty `Degree`): 如、 猶、 若
* `Pos` (1129; 96% of non-empty `Degree`): 然、 凡、 大、 善、 小、 獨、 難、 易、 私、 誠
* `Sup` (17; 1% of non-empty `Degree`): 已、 特、 報、 寔、 實、 備
* `EMPTY` (12585): 不、 則、 以、 故、 必、 非、 亦、 未、 皆、 弗

<table>
  <tr><th>Paradigm <i>報</i></th><th><tt>Pos</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt><tt><a href="lzh_kyoto-feat-AdvType.html">AdvType</a></tt><tt>=Deg</tt></tt></td><td></td><td>報</td></tr>
  <tr><td><tt><tt><a href="lzh_kyoto-feat-VerbForm.html">VerbForm</a></tt><tt>=Conv</tt></tt></td><td>報</td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 99% lemmas (190) occur only with one value of `Degree`.

### `ADP`

2 <tt><a href="lzh_kyoto-pos-ADP.html">ADP</a></tt> tokens (0% of all `ADP` tokens) have a non-empty value of `Degree`.

`ADP` tokens may have the following values of `Degree`:

* `Equ` (2; 100% of non-empty `Degree`): 如
* `EMPTY` (2769): 於、 與、 為、 于、 乎、 自、 由、 有、 及、 從

### `NOUN`

1 <tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `NOUN` and `Degree` co-occurred: <tt><a href="lzh_kyoto-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (1; 100%).

`NOUN` tokens may have the following values of `Degree`:

* `Pos` (1; 100% of non-empty `Degree`): 高
* `EMPTY` (38699): 人、 子、 天、 禮、 君、 民、 下、 王、 君子、 道

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>VERB --[<tt><a href="lzh_kyoto-dep-flat-vv.html">flat:vv</a></tt>]--> VERB</tt> (242; 51%),
<tt>VERB --[<tt><a href="lzh_kyoto-dep-compound-redup.html">compound:redup</a></tt>]--> VERB</tt> (107; 100%),
<tt>ADV --[<tt><a href="lzh_kyoto-dep-compound-redup.html">compound:redup</a></tt>]--> VERB</tt> (24; 100%),
<tt>ADV --[<tt><a href="lzh_kyoto-dep-flat-vv.html">flat:vv</a></tt>]--> VERB</tt> (18; 58%),
<tt>ADV --[<tt><a href="lzh_kyoto-dep-conj.html">conj</a></tt>]--> VERB</tt> (5; 56%),
<tt>VERB --[<tt><a href="lzh_kyoto-dep-parataxis.html">parataxis</a></tt>]--> ADV</tt> (2; 100%).

