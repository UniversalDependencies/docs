---
layout: base
title:  'Statistics of NumType in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Dist`, `Frac`, `Ord`.

1299 tokens (3%) have a non-empty value of `NumType`.
448 types (3%) occur at least once with a non-empty value of `NumType`.
373 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="hu_szeged-pos-NUM.html">NUM</a></tt> (1115; 3% instances), <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (184; 0% instances).

### `NUM`

1115 <tt><a href="hu_szeged-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="hu_szeged-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1112; 100%), <tt><a href="hu_szeged-feat-Case.html">Case</a></tt><tt>=Nom</tt> (1005; 90%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (1003; 90% of non-empty `NumType`): <em>két, milliárd, millió, egy, három, több, ezer, négy, 30, 10</em>
* `Dist` (5; 0% of non-empty `NumType`): <em>egy-egy, 50-50</em>
* `Frac` (107; 10% of non-empty `NumType`): <em>fél, másfél, 3,5, 8,25, 2,5, 2,6, 4,2, 6,3, 7,2, 0,7</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (328) occur only with one value of `NumType`.

### `ADJ`

184 <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> tokens (3% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="hu_szeged-feat-Case.html">Case</a></tt><tt>=Nom</tt> (184; 100%), <tt><a href="hu_szeged-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (184; 100%), <tt><a href="hu_szeged-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (184; 100%), <tt><a href="hu_szeged-feat-Number.html">Number</a></tt><tt>=Sing</tt> (183; 99%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (184; 100% of non-empty `NumType`): <em>első, második, 2000., 1999., I., harmadik, negyedik, 1992., 1998., 2.</em>
* `EMPTY` (5359): <em>magyar, új, orosz, nagy, gazdasági, százalékos, parlamenti, jövő, nemzetközi, politikai</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (45) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="hu_szeged-dep-compound.html">compound</a></tt>]--> NUM</tt> (105; 73%),
<tt>NUM --[<tt><a href="hu_szeged-dep-conj.html">conj</a></tt>]--> NUM</tt> (17; 89%),
<tt>NUM --[<tt><a href="hu_szeged-dep-amod-att.html">amod:att</a></tt>]--> NUM</tt> (12; 80%),
<tt>NUM --[<tt><a href="hu_szeged-dep-nmod-obl.html">nmod:obl</a></tt>]--> NUM</tt> (4; 80%),
<tt>NUM --[<tt><a href="hu_szeged-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (2; 67%),
<tt>NUM --[<tt><a href="hu_szeged-dep-advcl.html">advcl</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="hu_szeged-dep-orphan.html">orphan</a></tt>]--> NUM</tt> (1; 100%).

