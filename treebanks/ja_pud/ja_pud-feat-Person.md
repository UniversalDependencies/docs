---
layout: base
title:  'Statistics of Person in UD_Japanese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Japanese-PUD: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

422 tokens (2%) have a non-empty value of `Person`.
24 types (0%) occur at least once with a non-empty value of `Person`.
24 lemmas (0%) occur at least once with a non-empty value of `Person`.
The feature is used with 2 part-of-speech tags: <tt><a href="ja_pud-pos-PRON.html">PRON</a></tt> (394; 1% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (28; 0% instances).

### `PRON`

394 <tt><a href="ja_pud-pos-PRON.html">PRON</a></tt> tokens (91% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="ja_pud-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (317; 80%).

`PRON` tokens may have the following values of `Person`:

* `1` (55; 14% of non-empty `Person`): 私, 私たち, 我々, 私達
* `2` (5; 1% of non-empty `Person`): あなた, 君たち
* `3` (334; 85% of non-empty `Person`): 彼, それ, 彼女, これ, 彼ら, そこ, これら, ここ, それら, かれら
* `EMPTY` (41): 誰, その他, どこ, どちら, どれ, それ, それぞれ, いずれ, あなた, よそ

`Person` seems to be **lexical feature** of `PRON`. 100% lemmas (18) occur only with one value of `Person`.

### `NOUN`

28 <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `Person`.

`NOUN` tokens may have the following values of `Person`:

* `1` (2; 7% of non-empty `Person`): うち, 自分
* `3` (26; 93% of non-empty `Person`): 自身, 自分, 自ら, やつ, 本人
* `EMPTY` (6246): こと, 年, 人, 後, つ, 日, 者, 多く, もの, 間

<table>
  <tr><th>Paradigm <i>自分</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt></tt></td><td>自分</td><td>自分</td></tr>
</table>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>NOUN --[<tt><a href="ja_pud-dep-compound.html">compound</a></tt>]--> NOUN</tt> (3; 60%).

