

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This feature is universal.
It occurs with 3 different values: `Card`, `Mult`, `Ord`.

5211 tokens (2%) have a non-empty value of `NumType`.
1293 types (7%) occur at least once with a non-empty value of `NumType`.
1265 lemmas (8%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: [en-pos/NUM]() (4912; 2% instances), [en-pos/ADJ]() (221; 0% instances), [en-pos/ADV]() (78; 0% instances).

### `NUM`

4912 [en-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (4912; 100% of non-empty `NumType`): <em>one, two, 2, 3, 5, 1, 10, 4, three, 20</em>
* `EMPTY` (1): <em>9/11</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (1241) occur only with one value of `NumType`.

### `ADJ`

221 [en-pos/ADJ]() tokens (1% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Degree.html">Degree</a>=Pos</tt> (221; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (221; 100% of non-empty `NumType`): <em>first, second, third, 5th, fourth, 19th, 2nd, 1st, 20th, 21st</em>
* `EMPTY` (15738): <em>good, great, other, best, new, many, more, last, same, few</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (22) occur only with one value of `NumType`.

### `ADV`

78 [en-pos/ADV]() tokens (1% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (78; 100%).

`ADV` tokens may have the following values of `NumType`:

* `Mult` (77; 99% of non-empty `NumType`): <em>once, twice</em>
* `Ord` (1; 1% of non-empty `NumType`): <em>first</em>
* `EMPTY` (12961): <em>so, just, when, very, also, how, now, even, there, then</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (138; 100%),
<tt>NUM --[<a href="../dep/nmod.html">nmod</a>]--> NUM</tt> (126; 100%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (91; 100%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (61; 100%),
<tt>NUM --[<a href="../dep/nmod:tmod.html">nmod:tmod</a>]--> NUM</tt> (9; 100%),
<tt>NUM --[<a href="../dep/remnant.html">remnant</a>]--> NUM</tt> (6; 100%),
<tt>NUM --[<a href="../dep/appos.html">appos</a>]--> NUM</tt> (5; 100%),
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (2; 100%),
<tt>NUM --[<a href="../dep/case.html">case</a>]--> NUM</tt> (2; 100%),
<tt>NUM --[<a href="../dep/advmod.html">advmod</a>]--> NUM</tt> (1; 100%).

