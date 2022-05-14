---
layout: base
title:  'Statistics of NumType in UD_Finnish-TDT'
udver: '2'
---

## Treebank Statistics: UD_Finnish-TDT: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

5838 tokens (3%) have a non-empty value of `NumType`.
1423 types (3%) occur at least once with a non-empty value of `NumType`.
1114 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (4684; 2% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (1154; 1% instances).

### `NUM`

4684 <tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> tokens (94% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="fi_tdt-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (3431; 73%), <tt><a href="fi_tdt-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (3431; 73%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (4684; 100% of non-empty `NumType`): <em>1, 2, 2009, 3, 5, 4, kaksi, 10, 2006, 6</em>
* `EMPTY` (295): <em>5(n), puoli, 2003/634/EY, 19/65/ETY, 1999/730/YUTP, 90/642/ETY, 90/426/ETY, 91/628/ETY, 91/67/ETY, 66/401/ETY</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (1043) occur only with one value of `NumType`.

### `ADJ`

1154 <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> tokens (8% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="fi_tdt-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (1154; 100%), <tt><a href="fi_tdt-feat-Derivation.html">Derivation</a></tt><tt>=EMPTY</tt> (775; 67%), <tt><a href="fi_tdt-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (587; 51%).

`ADJ` tokens may have the following values of `NumType`:

* `Card` (1; 0% of non-empty `NumType`): <em>25:ttä</em>
* `Ord` (1153; 100% of non-empty `NumType`): <em>1., 2., 3., II, ensimmäinen, I, ensimmäisen, 7., 4., toisen</em>
* `EMPTY` (13135): <em>koko, eri, viime, hyvä, arvoisa, uusi, uuden, hyvää, oman, uutta</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (74) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="fi_tdt-dep-flat.html">flat</a></tt>]--> NUM</tt> (130; 100%),
<tt>NUM --[<tt><a href="fi_tdt-dep-compound.html">compound</a></tt>]--> NUM</tt> (120; 88%),
<tt>NUM --[<tt><a href="fi_tdt-dep-conj.html">conj</a></tt>]--> NUM</tt> (80; 98%),
<tt>ADJ --[<tt><a href="fi_tdt-dep-conj.html">conj</a></tt>]--> ADJ</tt> (23; 85%),
<tt>NUM --[<tt><a href="fi_tdt-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (5; 100%),
<tt>NUM --[<tt><a href="fi_tdt-dep-obl.html">obl</a></tt>]--> NUM</tt> (3; 100%),
<tt>ADJ --[<tt><a href="fi_tdt-dep-flat-name.html">flat:name</a></tt>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<tt><a href="fi_tdt-dep-flat.html">flat</a></tt>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<tt><a href="fi_tdt-dep-compound.html">compound</a></tt>]--> ADJ</tt> (1; 100%),
<tt>NUM --[<tt><a href="fi_tdt-dep-advcl.html">advcl</a></tt>]--> NUM</tt> (1; 100%).

