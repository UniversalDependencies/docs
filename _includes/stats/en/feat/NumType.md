

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This feature is universal.
It occurs with 3 different values: `Card`, `Mult`, `Ord`.

4785 tokens (2%) have a non-empty value of `NumType`.
1236 types (6%) occur at least once with a non-empty value of `NumType`.
1208 lemmas (8%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: [en-pos/NUM]() (4496; 2% instances), [en-pos/ADJ]() (212; 0% instances), [en-pos/ADV]() (77; 0% instances).

### `NUM`

4496 [en-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (4496; 100% of non-empty `NumType`): <em>one, two, 2, 3, 1, 5, 4, 10, three, 20</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (1184) occur only with one value of `NumType`.

### `ADJ`

212 [en-pos/ADJ]() tokens (1% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Degree.html">Degree</a>=Pos</tt> (212; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (212; 100% of non-empty `NumType`): <em>first, second, third, 5th, fourth, 19th, 2nd, 1st, 20th, 21st</em>
* `EMPTY` (15402): <em>good, great, other, best, new, many, more, last, same, few</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (22) occur only with one value of `NumType`.

### `ADV`

77 [en-pos/ADV]() tokens (1% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (77; 100%).

`ADV` tokens may have the following values of `NumType`:

* `Mult` (76; 99% of non-empty `NumType`): <em>once, twice</em>
* `Ord` (1; 1% of non-empty `NumType`): <em>first</em>
* `EMPTY` (12796): <em>so, just, very, when, also, how, now, even, there, then</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/nmod.html">nmod</a>]--> NUM</tt> (124; 100%),
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (96; 100%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (84; 100%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (58; 100%),
<tt>NUM --[<a href="../dep/nmod:tmod.html">nmod:tmod</a>]--> NUM</tt> (9; 100%),
<tt>NUM --[<a href="../dep/remnant.html">remnant</a>]--> NUM</tt> (6; 100%),
<tt>NUM --[<a href="../dep/appos.html">appos</a>]--> NUM</tt> (5; 100%),
<tt>NUM --[<a href="../dep/case.html">case</a>]--> NUM</tt> (2; 100%),
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (2; 100%),
<tt>NUM --[<a href="../dep/parataxis.html">parataxis</a>]--> NUM</tt> (1; 100%).

