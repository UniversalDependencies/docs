

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

1640 tokens (2%) have a non-empty value of `NumType`.
503 types (3%) occur at least once with a non-empty value of `NumType`.
489 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: [da-pos/NUM]() (1491; 1% instances), [da-pos/ADJ]() (149; 0% instances).

### `NUM`

1491 [da-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (1491; 100% of non-empty `NumType`): <em>to, tre, fire, 20, fem, seks, 10, otte, 100, 1</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (453) occur only with one value of `NumType`.

### `ADJ`

149 [da-pos/ADJ]() tokens (2% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (149; 100%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (149; 100%), <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (149; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (149; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (149; 100% of non-empty `NumType`): <em>1., anden, 2., tredje, 3., andet, 12., 17., fjerde, 10.</em>
* `EMPTY` (6422): <em>alle, mange, danske, store, flere, samme, hele, første, nye, sidste</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (37) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (8; 100%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (8; 100%),
<tt>NUM --[<a href="../dep/list.html">list</a>]--> NUM</tt> (7; 100%),
<tt>NUM --[<a href="../dep/name.html">name</a>]--> NUM</tt> (1; 100%),
<tt>NUM --[<a href="../dep/appos.html">appos</a>]--> NUM</tt> (1; 100%).

