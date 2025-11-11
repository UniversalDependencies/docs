---
layout: base
title:  'Statistics of NumType in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Dist`, `Frac`, `Ord`.

3128 tokens (3%) have a non-empty value of `NumType`.
632 types (3%) occur at least once with a non-empty value of `NumType`.
606 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="hy_armtdp-pos-NUM.html">NUM</a></tt> (2673; 3% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (450; 0% instances), <tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (5; 0% instances).

### `NUM`

2673 <tt><a href="hy_armtdp-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="hy_armtdp-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (2085; 78%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (2496; 93% of non-empty `NumType`): <em>երկու, հազար, 1, մեկ, 2, մի, 3, 10, 5, 20</em>
* `Dist` (6; 0% of non-empty `NumType`): <em>ական, երկուական, մեկական</em>
* `Frac` (171; 6% of non-empty `NumType`): <em>կես, մեկուկես, 2,5, 4,5, քառորդ, 1,5, 222,5, 7,9, 1,2, 1,6</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (570) occur only with one value of `NumType`.

### `ADJ`

450 <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> tokens (5% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="hy_armtdp-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (289; 64%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (450; 100% of non-empty `NumType`): <em>առաջին, րդ, երկրորդ, ին, երրորդ, չորրորդ, XXV, հինգերորդ, 5-րդ, XXVI</em>
* `EMPTY` (9023): <em>նոր, մեծ, կարող, պետական, սովետական, վերջին, շատ, հայ, ազգային, գլխավոր</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (35) occur only with one value of `NumType`.

### `ADV`

5 <tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> tokens (0% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="hy_armtdp-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (5; 100%), <tt><a href="hy_armtdp-feat-PronType.html">PronType</a></tt><tt>=Tot</tt> (5; 100%).

`ADV` tokens may have the following values of `NumType`:

* `Card` (5; 100% of non-empty `NumType`): <em>մին</em>
* `EMPTY` (4015): <em>էլ, ավելի, ինչպես, միայն, արդեն, երբ, շատ, այստեղ, դուրս, հիմա</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="hy_armtdp-dep-flat.html">flat</a></tt>]--> NUM</tt> (424; 89%),
<tt>NUM --[<tt><a href="hy_armtdp-dep-flat-range.html">flat:range</a></tt>]--> NUM</tt> (72; 100%),
<tt>NUM --[<tt><a href="hy_armtdp-dep-conj.html">conj</a></tt>]--> NUM</tt> (49; 98%),
<tt>NUM --[<tt><a href="hy_armtdp-dep-list.html">list</a></tt>]--> NUM</tt> (13; 100%),
<tt>NUM --[<tt><a href="hy_armtdp-dep-nmod-npmod.html">nmod:npmod</a></tt>]--> NUM</tt> (11; 100%),
<tt>NUM --[<tt><a href="hy_armtdp-dep-appos.html">appos</a></tt>]--> NUM</tt> (10; 71%),
<tt>ADJ --[<tt><a href="hy_armtdp-dep-conj.html">conj</a></tt>]--> ADJ</tt> (8; 89%),
<tt>NUM --[<tt><a href="hy_armtdp-dep-fixed.html">fixed</a></tt>]--> NUM</tt> (3; 100%),
<tt>NUM --[<tt><a href="hy_armtdp-dep-compound.html">compound</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="hy_armtdp-dep-flat-frac.html">flat:frac</a></tt>]--> NUM</tt> (1; 100%).

