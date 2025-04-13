---
layout: base
title:  'Statistics of NumType in UD_Hebrew-IAHLTwiki'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTwiki: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

1137 tokens (1%) have a non-empty value of `NumType`.
107 types (1%) occur at least once with a non-empty value of `NumType`.
82 lemmas (1%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt> (756; 1% instances), <tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt> (381; 0% instances).

### `NUM`

756 <tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt> tokens (24% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="he_iahltwiki-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (473; 63%), <tt><a href="he_iahltwiki-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (422; 56%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (756; 100% of non-empty `NumType`): שני, אחד, שתי, אחת, שלושה, שלוש, מיליון, ארבע, ארבעה, חמישה
* `EMPTY` (2371): 2, 1, 2017, 15, 20, 3, 7, 5, 1948, 6

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (51) occur only with one value of `NumType`.

### `ADJ`

381 <tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt> tokens (4% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="he_iahltwiki-feat-Number.html">Number</a></tt><tt>=Sing</tt> (338; 89%), <tt><a href="he_iahltwiki-feat-Gender.html">Gender</a></tt><tt>=Fem</tt> (214; 56%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (381; 100% of non-empty `NumType`): ראשון, ראשונה, שני, שנייה, 20, חמישית, שלישי, 19, רביעי, ראשונות
* `EMPTY` (8330): עליון, נוסף, רבים, יהודי, שונים, אחרים, גרעיני, ישראלית, בריטי, ישראלי

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (46) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>ADJ --[<tt><a href="he_iahltwiki-dep-conj.html">conj</a></tt>]--> ADJ</tt> (13; 87%),
<tt>NUM --[<tt><a href="he_iahltwiki-dep-conj.html">conj</a></tt>]--> NUM</tt> (6; 60%),
<tt>NUM --[<tt><a href="he_iahltwiki-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (4; 80%),
<tt>ADJ --[<tt><a href="he_iahltwiki-dep-compound.html">compound</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="he_iahltwiki-dep-obl.html">obl</a></tt>]--> ADJ</tt> (1; 100%),
<tt>NUM --[<tt><a href="he_iahltwiki-dep-compound.html">compound</a></tt>]--> NUM</tt> (1; 100%).

