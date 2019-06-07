---
layout: base
title:  'Statistics of NumType in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Frac`, `Ord`, `Range`.

601 tokens (2%) have a non-empty value of `NumType`.
234 types (2%) occur at least once with a non-empty value of `NumType`.
223 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="hy_armtdp-pos-NUM.html">NUM</a></tt> (463; 1% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (130; 0% instances), <tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (8; 0% instances).

### `NUM`

463 <tt><a href="hy_armtdp-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="hy_armtdp-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (269; 58%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (402; 87% of non-empty `NumType`): <em>երկու, մի, մեկ, մլն, հազար, 2017, 2, 2016, երեք, մլրդ</em>
* `Frac` (53; 11% of non-empty `NumType`): <em>2,5, 3.2, 4,3, 4,5, 8,7, կես, 0.2, 1,2, 1,6, 13,99</em>
* `Range` (8; 2% of non-empty `NumType`): <em>մեկ-երկու, 12-13, 17-23, 18-19, 65-68, 7-10, երեք-տասը</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (198) occur only with one value of `NumType`.

### `ADJ`

130 <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> tokens (4% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="hy_armtdp-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (85; 65%).

`ADJ` tokens may have the following values of `NumType`:

* `Card` (1; 1% of non-empty `NumType`): <em>մեկ</em>
* `Frac` (1; 1% of non-empty `NumType`): <em>⅛</em>
* `Ord` (128; 98% of non-empty `NumType`): <em>առաջին, երկրորդ, 1-ին, 5-րդ, երրորդ, 3-րդ, չորրորդ, վեցերորդ, 16-րդ, 2-րդ</em>
* `EMPTY` (2954): <em>նոր, կարող, մեծ, հայ, քաղաքական, պետական, պետք, ազգային, տնտեսական, արտաքին</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (26) occur only with one value of `NumType`.

### `ADV`

8 <tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> tokens (1% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="hy_armtdp-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (8; 100%), <tt><a href="hy_armtdp-feat-PronType.html">PronType</a></tt><tt>=Tot</tt> (8; 100%).

`ADV` tokens may have the following values of `NumType`:

* `Card` (8; 100% of non-empty `NumType`): <em>մեկ</em>
* `EMPTY` (1589): <em>էլ, ավելի, միայն, արդեն, հիմա, երբ, դուրս, շատ, հետո, ինչպես</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="hy_armtdp-dep-flat.html">flat</a></tt>]--> NUM</tt> (62; 78%),
<tt>NUM --[<tt><a href="hy_armtdp-dep-conj.html">conj</a></tt>]--> NUM</tt> (15; 100%),
<tt>ADJ --[<tt><a href="hy_armtdp-dep-conj.html">conj</a></tt>]--> ADJ</tt> (6; 86%),
<tt>NUM --[<tt><a href="hy_armtdp-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (2; 100%),
<tt>ADV --[<tt><a href="hy_armtdp-dep-compound-redup.html">compound:redup</a></tt>]--> ADV</tt> (1; 100%),
<tt>NUM --[<tt><a href="hy_armtdp-dep-compound.html">compound</a></tt>]--> NUM</tt> (1; 100%).

