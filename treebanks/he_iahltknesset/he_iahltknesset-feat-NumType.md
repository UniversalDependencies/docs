---
layout: base
title:  'Statistics of NumType in UD_Hebrew-IAHLTknesset'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTknesset: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

249 tokens (0%) have a non-empty value of `NumType`.
45 types (1%) occur at least once with a non-empty value of `NumType`.
30 lemmas (1%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="he_iahltknesset-pos-NUM.html">NUM</a></tt> (174; 0% instances), <tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt> (75; 0% instances).

### `NUM`

174 <tt><a href="he_iahltknesset-pos-NUM.html">NUM</a></tt> tokens (25% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="he_iahltknesset-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (123; 71%), <tt><a href="he_iahltknesset-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (110; 63%), <tt><a href="he_iahltknesset-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (106; 61%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (174; 100% of non-empty `NumType`): אחד, שני, אחת, שלוש, שמונה, ארבעה, עשר, שלושה, שתי, אלפי
* `EMPTY` (521): אחד, אחת, מיליון, אלפי, שני, 20, חצי, ארבע, מאות, עשרות

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (22) occur only with one value of `NumType`.

### `ADJ`

75 <tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt> tokens (2% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="he_iahltknesset-feat-Number.html">Number</a></tt><tt>=Sing</tt> (75; 100%), <tt><a href="he_iahltknesset-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (42; 56%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (75; 100% of non-empty `NumType`): שני, ראשון, ראשונה, שלישי, שנייה, 19, 90, עשרים, שלישית, שניה
* `EMPTY` (3015): חשוב, נכון, יהודי, גדול, טוב, אחרים, קשה, אחר, רבה, קודמת

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (11) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="he_iahltknesset-dep-conj.html">conj</a></tt>]--> NUM</tt> (5; 100%),
<tt>NUM --[<tt><a href="he_iahltknesset-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (4; 100%),
<tt>ADJ --[<tt><a href="he_iahltknesset-dep-conj.html">conj</a></tt>]--> ADJ</tt> (3; 100%),
<tt>NUM --[<tt><a href="he_iahltknesset-dep-compound.html">compound</a></tt>]--> NUM</tt> (3; 100%).

