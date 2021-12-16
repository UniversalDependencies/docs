---
layout: base
title:  'Statistics of Person in UD_Bengali-BRU'
udver: '2'
---

## Treebank Statistics: UD_Bengali-BRU: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

89 tokens (28%) have a non-empty value of `Person`.
48 types (33%) occur at least once with a non-empty value of `Person`.
25 lemmas (23%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: <tt><a href="bn_bru-pos-VERB.html">VERB</a></tt> (42; 13% instances), <tt><a href="bn_bru-pos-PRON.html">PRON</a></tt> (41; 13% instances), <tt><a href="bn_bru-pos-AUX.html">AUX</a></tt> (6; 2% instances).

### `VERB`

42 <tt><a href="bn_bru-pos-VERB.html">VERB</a></tt> tokens (65% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="bn_bru-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (42; 100%), <tt><a href="bn_bru-feat-Aspect.html">Aspect</a></tt><tt>=EMPTY</tt> (33; 79%), <tt><a href="bn_bru-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (33; 79%), <tt><a href="bn_bru-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (33; 79%).

`VERB` tokens may have the following values of `Person`:

* `1` (20; 48% of non-empty `Person`): <em>ধোবো, যাই, যাব, এনেছি, করি, করেছি, খাব, চল, দিব, দেখব</em>
* `2` (14; 33% of non-empty `Person`): <em>খেয়েছ, জানো, নাও, করেছ, খাও, গাও, চল, দেখ, পড়, বলব</em>
* `3` (8; 19% of non-empty `Person`): <em>আসে, হয়েছে, আছে, কর, দয়ে, হয়</em>
* `EMPTY` (23): <em>আঁকতে, খেতে, গাইতে, ঘুরতে, ধুয়ে, পড়তে, রেখে, করবে, করে, কিনে</em>

<table>
  <tr><th>Paradigm <i>করা</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="bn_bru-feat-Aspect.html">Aspect</a></tt><tt>=Perf</tt>|<tt><a href="bn_bru-feat-Mood.html">Mood</a></tt><tt>=Ind</tt></tt></td><td><em>করেছি</em></td><td><em>করেছ</em></td><td></td></tr>
  <tr><td><tt><tt><a href="bn_bru-feat-Mood.html">Mood</a></tt><tt>=Imp</tt></tt></td><td></td><td></td><td><em>কর</em></td></tr>
  <tr><td><tt><tt><a href="bn_bru-feat-Mood.html">Mood</a></tt><tt>=Ind</tt></tt></td><td><em>করি</em></td><td></td><td></td></tr>
</table>

### `PRON`

41 <tt><a href="bn_bru-pos-PRON.html">PRON</a></tt> tokens (84% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="bn_bru-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (41; 100%), <tt><a href="bn_bru-feat-Number.html">Number</a></tt><tt>=Sing</tt> (35; 85%).

`PRON` tokens may have the following values of `Person`:

* `1` (18; 44% of non-empty `Person`): <em>আমি, আমার, আমাদের, আমরা</em>
* `2` (19; 46% of non-empty `Person`): <em>তুমি, তোমার, তোমাকে, তোমায়</em>
* `3` (4; 10% of non-empty `Person`): <em>তার, তাকে, তাদের</em>
* `EMPTY` (8): <em>কি, কিছু, কে, যে</em>

### `AUX`

6 <tt><a href="bn_bru-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="bn_bru-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (6; 100%), <tt><a href="bn_bru-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (6; 100%), <tt><a href="bn_bru-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (5; 83%).

`AUX` tokens may have the following values of `Person`:

* `1` (1; 17% of non-empty `Person`): <em>পারি</em>
* `2` (4; 67% of non-empty `Person`): <em>পার, পারো, হবে</em>
* `3` (1; 17% of non-empty `Person`): <em>চায়</em>

<table>
  <tr><th>Paradigm <i>পারা</i></th><th><tt>1</tt></th><th><tt>2</tt></th></tr>
  <tr><td><tt></tt></td><td><em>পারি</em></td><td><em>পার, পারো</em></td></tr>
</table>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<tt><a href="bn_bru-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (12; 63%),
<tt>VERB --[<tt><a href="bn_bru-dep-conj.html">conj</a></tt>]--> VERB</tt> (2; 100%).

