

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This feature is universal.
It occurs with 4 different values: `Card`, `Gen`, `Ord`, `Sets`.

2241 tokens (2%) have a non-empty value of `NumType`.
623 types (2%) occur at least once with a non-empty value of `NumType`.
509 lemmas (3%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: [sl-pos/NUM]() (1927; 1% instances), [sl-pos/ADJ]() (314; 0% instances).

### `NUM`

1927 [sl-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (1441; 75%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (1187; 62%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (1187; 62%), <tt><a href="NumForm.html">NumForm</a>=Digit</tt> (1166; 61%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (1665; 86% of non-empty `NumType`): <em>eno, tri, dveh, dva, ena, eden, tisoč, štiri, štirih, dve</em>
* `Ord` (257; 13% of non-empty `NumType`): <em>1., 20., 18., 9., 14., 17., 19., 3., 6., 15.</em>
* `Sets` (5; 0% of non-empty `NumType`): <em>dvoje, tisočerih, troje</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (485) occur only with one value of `NumType`.

### `ADJ`

314 [sl-pos/ADJ]() tokens (2% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (314; 100%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (314; 100%), <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (314; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (251; 80%).

`ADJ` tokens may have the following values of `NumType`:

* `Gen` (4; 1% of non-empty `NumType`): <em>dvojnega, dvojnim, dvojno, trojnim</em>
* `Ord` (310; 99% of non-empty `NumType`): <em>prvi, prva, prvo, prve, prvem, prvih, prvega, tretji, tretje, prvim</em>
* `EMPTY` (14713): <em>drugi, mogoče, druge, sam, novo, drugih, nove, različnih, slovenski, veliko</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (24) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (94; 100%),
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (31; 91%).

