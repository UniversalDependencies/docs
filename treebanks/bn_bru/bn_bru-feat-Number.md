---
layout: base
title:  'Statistics of Number in UD_Bengali-BRU'
udver: '2'
---

## Treebank Statistics: UD_Bengali-BRU: Features: `Number`

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

107 tokens (33%) have a non-empty value of `Number`.
52 types (36%) occur at least once with a non-empty value of `Number`.
41 lemmas (38%) occur at least once with a non-empty value of `Number`.
The feature is used with 3 part-of-speech tags: <tt><a href="bn_bru-pos-NOUN.html">NOUN</a></tt> (62; 19% instances), <tt><a href="bn_bru-pos-PRON.html">PRON</a></tt> (41; 13% instances), <tt><a href="bn_bru-pos-PROPN.html">PROPN</a></tt> (4; 1% instances).

### `NOUN`

62 <tt><a href="bn_bru-pos-NOUN.html">NOUN</a></tt> tokens (100% of all `NOUN` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `NOUN` and `Number` co-occurred: <tt><a href="bn_bru-feat-Case.html">Case</a></tt><tt>=Nom</tt> (51; 82%).

`NOUN` tokens may have the following values of `Number`:

* `Plur` (5; 8% of non-empty `Number`): <em>হাত, জন, নাম</em>
* `Sing` (57; 92% of non-empty `Number`): <em>গান, নাম, বাবা, মা, কার্টুন, ক্লাসে, গল্প, দেশের, পতাকা, বই</em>

<table>
  <tr><th>Paradigm <i>নাম</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>নাম</em></td><td><em>নাম</em></td></tr>
</table>

`Number` seems to be **lexical feature** of `NOUN`. 97% lemmas (34) occur only with one value of `Number`.

### `PRON`

41 <tt><a href="bn_bru-pos-PRON.html">PRON</a></tt> tokens (84% of all `PRON` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PRON` and `Number` co-occurred: <tt><a href="bn_bru-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (41; 100%).

`PRON` tokens may have the following values of `Number`:

* `Plur` (6; 15% of non-empty `Number`): <em>আমাদের, আমরা, তাদের</em>
* `Sing` (35; 85% of non-empty `Number`): <em>আমি, তুমি, তোমার, আমার, তার, তোমাকে, তাকে, তোমায়</em>
* `EMPTY` (8): <em>কি, কিছু, কে, যে</em>

<table>
  <tr><th>Paradigm <i>আমি</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="bn_bru-feat-Case.html">Case</a></tt><tt>=Gen</tt></tt></td><td><em>আমার</em></td><td><em>আমাদের</em></td></tr>
  <tr><td><tt><tt><a href="bn_bru-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td><em>আমি</em></td><td><em>আমরা</em></td></tr>
</table>

### `PROPN`

4 <tt><a href="bn_bru-pos-PROPN.html">PROPN</a></tt> tokens (100% of all `PROPN` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PROPN` and `Number` co-occurred: <tt><a href="bn_bru-feat-Case.html">Case</a></tt><tt>=Nom</tt> (4; 100%).

`PROPN` tokens may have the following values of `Number`:

* `Sing` (4; 100% of non-empty `Number`): <em>বর্ণালী, রাকিব, সাকিব</em>

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>NOUN --[<tt><a href="bn_bru-dep-nmod-poss.html">nmod:poss</a></tt>]--> PRON</tt> (11; 79%),
<tt>NOUN --[<tt><a href="bn_bru-dep-nmod.html">nmod</a></tt>]--> NOUN</tt> (3; 100%),
<tt>NOUN --[<tt><a href="bn_bru-dep-nmod-poss.html">nmod:poss</a></tt>]--> NOUN</tt> (2; 100%),
<tt>PROPN --[<tt><a href="bn_bru-dep-conj.html">conj</a></tt>]--> PROPN</tt> (2; 100%),
<tt>NOUN --[<tt><a href="bn_bru-dep-compound.html">compound</a></tt>]--> NOUN</tt> (1; 100%),
<tt>NOUN --[<tt><a href="bn_bru-dep-nsubj.html">nsubj</a></tt>]--> NOUN</tt> (1; 100%),
<tt>PROPN --[<tt><a href="bn_bru-dep-nmod-poss.html">nmod:poss</a></tt>]--> PRON</tt> (1; 100%),
<tt>PROPN --[<tt><a href="bn_bru-dep-nsubj.html">nsubj</a></tt>]--> NOUN</tt> (1; 100%).

