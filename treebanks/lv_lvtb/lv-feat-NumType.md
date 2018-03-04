---
layout: base
title:  'Statistics of NumType in UD_Latvian'
udver: '2'
---

## Treebank Statistics: UD_Latvian: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Frac`, `Mult`, `Ord`.

1648 tokens (2%) have a non-empty value of `NumType`.
509 types (2%) occur at least once with a non-empty value of `NumType`.
412 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="lv-pos-NUM.html">NUM</a></tt> (1038; 1% instances), <tt><a href="lv-pos-ADJ.html">ADJ</a></tt> (600; 1% instances), <tt><a href="lv-pos-ADV.html">ADV</a></tt> (10; 0% instances).

### `NUM`

1038 <tt><a href="lv-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (1036; 100% of non-empty `NumType`): <em>viens, trīs, vienu, viena, 1, divas, 3, vienā, divi, 2</em>
* `Frac` (2; 0% of non-empty `NumType`): <em>pusotra, pusotru</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (274) occur only with one value of `NumType`.

### `ADJ`

600 <tt><a href="lv-pos-ADJ.html">ADJ</a></tt> tokens (12% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="lv-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (436; 73%), <tt><a href="lv-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (436; 73%), <tt><a href="lv-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (436; 73%), <tt><a href="lv-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (436; 73%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (600; 100% of non-empty `NumType`): <em>1., 2012., 2., 2011., 3., 4., 2013., 2010., 2007., pirmo</em>
* `EMPTY` (4204): <em>pedagoģisko, iespējams, liela, jaunu, lielu, nepieciešams, jauna, galvenais, liels, lielā</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (137) occur only with one value of `NumType`.

### `ADV`

10 <tt><a href="lv-pos-ADV.html">ADV</a></tt> tokens (0% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="lv-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (10; 100%), <tt><a href="lv-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (10; 100%).

`ADV` tokens may have the following values of `NumType`:

* `Mult` (10; 100% of non-empty `NumType`): <em>divreiz, vienreiz</em>
* `EMPTY` (5479): <em>kā, kad, jau, vēl, tad, tā, kur, ļoti, tik, tur</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="lv-dep-conj.html">conj</a></tt>]--> NUM</tt> (37; 97%),
<tt>ADJ --[<tt><a href="lv-dep-conj.html">conj</a></tt>]--> ADJ</tt> (26; 96%),
<tt>NUM --[<tt><a href="lv-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (22; 100%),
<tt>NUM --[<tt><a href="lv-dep-flat-name.html">flat:name</a></tt>]--> NUM</tt> (14; 100%),
<tt>ADJ --[<tt><a href="lv-dep-amod.html">amod</a></tt>]--> ADJ</tt> (7; 88%),
<tt>NUM --[<tt><a href="lv-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (5; 100%),
<tt>NUM --[<tt><a href="lv-dep-compound.html">compound</a></tt>]--> NUM</tt> (4; 100%),
<tt>ADJ --[<tt><a href="lv-dep-flat.html">flat</a></tt>]--> ADJ</tt> (2; 100%),
<tt>NUM --[<tt><a href="lv-dep-acl.html">acl</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="lv-dep-flat.html">flat</a></tt>]--> NUM</tt> (2; 100%).

