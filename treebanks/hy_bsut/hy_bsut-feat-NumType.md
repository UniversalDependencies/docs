---
layout: base
title:  'Statistics of NumType in UD_Armenian-BSUT'
udver: '2'
---

## Treebank Statistics: UD_Armenian-BSUT: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Dist`, `Frac`, `Ord`.

1126 tokens (2%) have a non-empty value of `NumType`.
305 types (3%) occur at least once with a non-empty value of `NumType`.
292 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="hy_bsut-pos-NUM.html">NUM</a></tt> (977; 2% instances), <tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt> (149; 0% instances).

### `NUM`

977 <tt><a href="hy_bsut-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="hy_bsut-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (799; 82%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (959; 98% of non-empty `NumType`): <em>երկու, 1, 2, մեկ, 3, 10, մի, 4, 2021, 5</em>
* `Dist` (1; 0% of non-empty `NumType`): <em>հարյուրական</em>
* `Frac` (17; 2% of non-empty `NumType`): <em>կես, 6860,8, 7354,7, 0.2, 14,5, 2.9, 23,213.5, 23213.5, 3.5, 300.1</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (257) occur only with one value of `NumType`.

### `ADJ`

149 <tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt> tokens (4% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="hy_bsut-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (90; 60%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (149; 100% of non-empty `NumType`): <em>առաջին, երկրորդ, 1-ին, երրորդ, րդ, 2-րդ, 3-րդ, 4-րդ, 19-րդ, 5-րդ</em>
* `EMPTY` (3762): <em>կարող, պետական, իրավական, մեծ, նոր, նորմատիվ, ազգային, կարելի, գրական, հանրային</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (35) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="hy_bsut-dep-flat.html">flat</a></tt>]--> NUM</tt> (75; 100%),
<tt>NUM --[<tt><a href="hy_bsut-dep-flat-range.html">flat:range</a></tt>]--> NUM</tt> (46; 98%),
<tt>NUM --[<tt><a href="hy_bsut-dep-conj.html">conj</a></tt>]--> NUM</tt> (5; 100%),
<tt>ADJ --[<tt><a href="hy_bsut-dep-conj.html">conj</a></tt>]--> ADJ</tt> (3; 100%),
<tt>NUM --[<tt><a href="hy_bsut-dep-flat-dist.html">flat:dist</a></tt>]--> NUM</tt> (2; 67%),
<tt>NUM --[<tt><a href="hy_bsut-dep-appos.html">appos</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="hy_bsut-dep-flat-frac.html">flat:frac</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="hy_bsut-dep-nmod-npmod.html">nmod:npmod</a></tt>]--> NUM</tt> (1; 100%).

