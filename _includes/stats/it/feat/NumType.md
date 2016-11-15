

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This feature is universal.
It occurs with 4 different values: `Card`, `Gen`, `Ord`, `Range`.

5924 tokens (2%) have a non-empty value of `NumType`.
1241 types (5%) occur at least once with a non-empty value of `NumType`.
1194 lemmas (6%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: [it-pos/NUM]() (5041; 2% instances), [it-pos/ADJ]() (880; 0% instances), [it-pos/PROPN]() (2; 0% instances), [it-pos/PRON]() (1; 0% instances).

### `NUM`

5041 [it-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (5016; 100% of non-empty `NumType`): <em>due, 1, 2, tre, 3, cinque, 4, mila, quattro, 5</em>
* `Gen` (21; 0% of non-empty `NumType`): <em>6', 1'13'', 1.00'16'', 1.19'59'', 10'', 11'06'', 13', 19'43'', 2'42'', 20'01''</em>
* `Range` (4; 0% of non-empty `NumType`): <em>3/4, 150/300, 2/3</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (1121) occur only with one value of `NumType`.

### `ADJ`

880 [it-pos/ADJ]() tokens (5% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (748; 85%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (880; 100% of non-empty `NumType`): <em>primo, prima, secondo, seconda, primi, ultimi, prime, terzo, ii, i</em>
* `EMPTY` (17799): <em>nuovo, grande, altri, presente, altro, stesso, comune, italiana, altra, stessa</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (72) occur only with one value of `NumType`.

### `PROPN`

2 [it-pos/PROPN]() tokens (0% of all `PROPN` tokens) have a non-empty value of `NumType`.

`PROPN` tokens may have the following values of `NumType`:

* `Card` (2; 100% of non-empty `NumType`): <em>9/11</em>
* `EMPTY` (14758): <em>Italia, Shakespeare, Balzac, Europa, Roma, Stati, Uniti, San, Albania, Marco</em>

### `PRON`

1 [it-pos/PRON]() tokens (0% of all `PRON` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PRON` and `NumType` co-occurred: <tt><a href="Gender.html">Gender</a>=Fem</tt> (1; 100%), <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (1; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (1; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (1; 100%).

`PRON` tokens may have the following values of `NumType`:

* `Ord` (1; 100% of non-empty `NumType`): <em>prima</em>
* `EMPTY` (11256): <em>si, che, chi, cui, ci, lo, ne, qual, quanto, mi</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (157; 100%),
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (153; 100%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (35; 100%),
<tt>NUM --[<a href="../dep/mwe.html">mwe</a>]--> NUM</tt> (17; 100%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (6; 86%),
<tt>NUM --[<a href="../dep/nmod.html">nmod</a>]--> NUM</tt> (2; 100%).

