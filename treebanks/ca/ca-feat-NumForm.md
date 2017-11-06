---
layout: base
title:  'Statistics of NumForm in UD_Catalan'
udver: '2'
---

## Treebank Statistics: UD_Catalan: Features: `NumForm`

This feature is language-specific.
It occurs with 1 different values: `Digit`.

7720 tokens (1%) have a non-empty value of `NumForm`.
1919 types (6%) occur at least once with a non-empty value of `NumForm`.
1880 lemmas (8%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 3 part-of-speech tags: <tt><a href="ca-pos-NUM.html">NUM</a></tt> (6082; 1% instances), <tt><a href="ca-pos-NOUN.html">NOUN</a></tt> (832; 0% instances), <tt><a href="ca-pos-SYM.html">SYM</a></tt> (806; 0% instances).

### `NUM`

6082 <tt><a href="ca-pos-NUM.html">NUM</a></tt> tokens (66% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="ca-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (6082; 100%), <tt><a href="ca-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (6082; 100%), <tt><a href="ca-feat-NumType.html">NumType</a></tt><tt>=EMPTY</tt> (4053; 67%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (6082; 100% of non-empty `NumForm`): <em>10, 15, 20, 30, 5, 4, 12, 2, 25, 14</em>

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (1606) occur only with one value of `NumForm`.

### `NOUN`

832 <tt><a href="ca-pos-NOUN.html">NOUN</a></tt> tokens (1% of all `NOUN` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NOUN` and `NumForm` co-occurred: <tt><a href="ca-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (832; 100%), <tt><a href="ca-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (832; 100%).

`NOUN` tokens may have the following values of `NumForm`:

* `Digit` (832; 100% of non-empty `NumForm`): <em>pessetes, euros, dòlars, PTA, pesseta, euro, dòlar, corones, marcs, pta.</em>

### `SYM`

806 <tt><a href="ca-pos-SYM.html">SYM</a></tt> tokens (17% of all `SYM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `SYM` and `NumForm` co-occurred: <tt><a href="ca-feat-NumType.html">NumType</a></tt><tt>=Frac</tt> (793; 98%).

`SYM` tokens may have the following values of `NumForm`:

* `Digit` (806; 100% of non-empty `NumForm`): <em>%, 50%, 10%, 30%, 40%, 5%, 25%, 1%, 20%, 2%</em>

`NumForm` seems to be **lexical feature** of `SYM`. 100% lemmas (273) occur only with one value of `NumForm`.

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<tt><a href="ca-dep-nmod.html">nmod</a></tt>]--> SYM</tt> (206; 94%),
<tt>NUM --[<tt><a href="ca-dep-conj.html">conj</a></tt>]--> NUM</tt> (200; 98%),
<tt>NOUN --[<tt><a href="ca-dep-appos.html">appos</a></tt>]--> NOUN</tt> (33; 51%),
<tt>SYM --[<tt><a href="ca-dep-conj.html">conj</a></tt>]--> SYM</tt> (24; 100%),
<tt>NUM --[<tt><a href="ca-dep-appos.html">appos</a></tt>]--> NUM</tt> (22; 92%),
<tt>NUM --[<tt><a href="ca-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (14; 78%),
<tt>SYM --[<tt><a href="ca-dep-appos.html">appos</a></tt>]--> SYM</tt> (6; 86%),
<tt>NUM --[<tt><a href="ca-dep-appos.html">appos</a></tt>]--> SYM</tt> (4; 100%),
<tt>NUM --[<tt><a href="ca-dep-conj.html">conj</a></tt>]--> SYM</tt> (3; 100%),
<tt>SYM --[<tt><a href="ca-dep-advmod.html">advmod</a></tt>]--> SYM</tt> (3; 100%).

