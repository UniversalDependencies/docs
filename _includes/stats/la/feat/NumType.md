

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-ITTB)

This feature is universal.
It occurs with 3 different values: `Card`, `Dist`, `Ord`.

3414 tokens (1%) have a non-empty value of `NumType`.
108 types (1%) occur at least once with a non-empty value of `NumType`.
28 lemmas (1%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: [la-pos/ADJ]() (2064; 1% instances), [la-pos/NUM]() (1350; 0% instances).

### `ADJ`

2064 [la-pos/ADJ]() tokens (9% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (1879; 91%), <tt><a href="Degree.html">Degree</a>=Pos</tt> (1807; 88%).

`ADJ` tokens may have the following values of `NumType`:

* `Dist` (53; 3% of non-empty `NumType`): <em>singula, singulis, singulas, singulae, singulorum, singillatim, singulos, singulum</em>
* `Ord` (2011; 97% of non-empty `NumType`): <em>primum, primo, prima, prius, secundum, secundo, tertium, primam, primi, secunda</em>
* `EMPTY` (20420): <em>vero, divina, solum, impossibile, amplius, possibilis, divinae, divinam, intellectualis, similiter</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (14) occur only with one value of `NumType`.

### `NUM`

1350 [la-pos/NUM]() tokens (64% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="NumForm.html">NumForm</a>=EMPTY</tt> (1350; 100%), <tt><a href="Degree.html">Degree</a>=Pos</tt> (1321; 98%), <tt><a href="Number.html">Number</a>=Sing</tt> (1086; 80%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (1350; 100% of non-empty `NumType`): <em>unum, una, uno, unius, unam, unus, duo, duobus, tres, duae</em>
* `EMPTY` (749): <em>iii, i, ii, 1, 2, vii, iv, viii, 3, vi</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (14) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (14; 100%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (13; 100%),
<tt>ADJ --[<a href="../dep/advcl.html">advcl</a>]--> ADJ</tt> (5; 63%).

