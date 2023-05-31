---
layout: base
title:  'Statistics of NumType in UD_Armenian-BSUT'
udver: '2'
---

## Treebank Statistics: UD_Armenian-BSUT: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Dist`, `Frac`, `Ord`.

1003 tokens (2%) have a non-empty value of `NumType`.
300 types (3%) occur at least once with a non-empty value of `NumType`.
287 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="hy_bsut-pos-NUM.html">NUM</a></tt> (872; 2% instances), <tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt> (131; 0% instances).

### `NUM`

872 <tt><a href="hy_bsut-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="hy_bsut-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (713; 82%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (852; 98% of non-empty `NumType`): <em>երկու, 1, մեկ, 10, 2, 4, մի, 2021, 3, երեք</em>
* `Dist` (1; 0% of non-empty `NumType`): <em>հարյուրական</em>
* `Frac` (19; 2% of non-empty `NumType`): <em>կես, 6860,8, 7354,7, 0.2, 1.2, 1.4, 14,5, 2.1, 2.9, 23,213.5</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (255) occur only with one value of `NumType`.

### `ADJ`

131 <tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt> tokens (4% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="hy_bsut-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (78; 60%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (131; 100% of non-empty `NumType`): <em>առաջին, երկրորդ, 1-ին, երրորդ, 19-րդ, 5-րդ, 20-րդ, 3-րդ, 4-րդ, 7-րդ</em>
* `EMPTY` (3358): <em>կարող, պետական, մեծ, նոր, կարելի, ազգային, միջազգային, գրական, պետք, քաղաքական</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (32) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="hy_bsut-dep-flat.html">flat</a></tt>]--> NUM</tt> (67; 100%),
<tt>NUM --[<tt><a href="hy_bsut-dep-flat-range.html">flat:range</a></tt>]--> NUM</tt> (45; 98%),
<tt>NUM --[<tt><a href="hy_bsut-dep-conj.html">conj</a></tt>]--> NUM</tt> (6; 100%),
<tt>ADJ --[<tt><a href="hy_bsut-dep-conj.html">conj</a></tt>]--> ADJ</tt> (1; 100%),
<tt>NUM --[<tt><a href="hy_bsut-dep-nmod-npmod.html">nmod:npmod</a></tt>]--> NUM</tt> (1; 100%).

