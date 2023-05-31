---
layout: base
title:  'Statistics of NumType in UD_Catalan'
udver: '2'
---

## Treebank Statistics: UD_Catalan: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Frac`, `Ord`.

7583 tokens (1%) have a non-empty value of `NumType`.
795 types (2%) occur at least once with a non-empty value of `NumType`.
742 lemmas (3%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="ca-pos-NUM.html">NUM</a></tt> (5208; 1% instances), <tt><a href="ca-pos-ADJ.html">ADJ</a></tt> (1582; 0% instances), <tt><a href="ca-pos-SYM.html">SYM</a></tt> (793; 0% instances).

### `NUM`

5208 <tt><a href="ca-pos-NUM.html">NUM</a></tt> tokens (56% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="ca-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (3839; 74%), <tt><a href="ca-feat-NumForm.html">NumForm</a></tt><tt>=EMPTY</tt> (3179; 61%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (5194; 100% of non-empty `NumType`): <em>dos, tres, cent, dues, quatre, un, cinc, nou, sis, una</em>
* `Frac` (14; 0% of non-empty `NumType`): <em>cada, 1,1, 10, 15, 161, 17,8/100.000, 26,5/100.000, 3,9, 37,45, 57,9/100.000</em>
* `EMPTY` (4053): <em>10, 15, 20, 30, 5, 4, 12, 50, 25, 14</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (462) occur only with one value of `NumType`.

### `ADJ`

1582 <tt><a href="ca-pos-ADJ.html">ADJ</a></tt> tokens (5% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="ca-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (1582; 100%), <tt><a href="ca-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1245; 79%), <tt><a href="ca-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (877; 55%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (1582; 100% of non-empty `NumType`): <em>primer, primera, últims, segona, últim, segon, primers, última, tercer, darrers</em>
* `EMPTY` (28463): <em>passat, gran, nou, general, nova, catalana, espanyol, grans, baix, noves</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (28) occur only with one value of `NumType`.

### `SYM`

793 <tt><a href="ca-pos-SYM.html">SYM</a></tt> tokens (17% of all `SYM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `SYM` and `NumType` co-occurred: <tt><a href="ca-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (793; 100%).

`SYM` tokens may have the following values of `NumType`:

* `Frac` (793; 100% of non-empty `NumType`): <em>%, 50%, 10%, 30%, 5%, 25%, 1%, 20%, 40%, 2%</em>
* `EMPTY` (3840): <em>', %, 10%, 2%, 40%, -, -3%, 1%, 10,2%, 13,7%</em>

`NumType` seems to be **lexical feature** of `SYM`. 100% lemmas (264) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="ca-dep-compound.html">compound</a></tt>]--> NUM</tt> (415; 97%),
<tt>NUM --[<tt><a href="ca-dep-conj.html">conj</a></tt>]--> NUM</tt> (62; 79%),
<tt>SYM --[<tt><a href="ca-dep-conj.html">conj</a></tt>]--> SYM</tt> (23; 100%),
<tt>ADJ --[<tt><a href="ca-dep-conj.html">conj</a></tt>]--> ADJ</tt> (6; 67%),
<tt>SYM --[<tt><a href="ca-dep-appos.html">appos</a></tt>]--> SYM</tt> (6; 86%),
<tt>SYM --[<tt><a href="ca-dep-advmod.html">advmod</a></tt>]--> SYM</tt> (3; 100%),
<tt>SYM --[<tt><a href="ca-dep-advcl.html">advcl</a></tt>]--> SYM</tt> (1; 100%).

