

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This feature is universal.
It occurs with 4 different values: `Card`, `Gen`, `Ord`, `Range`.

5409 tokens (2%) have a non-empty value of `NumType`.
1209 types (5%) occur at least once with a non-empty value of `NumType`.
1161 lemmas (6%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: [it-pos/NUM]() (4609; 2% instances), [it-pos/ADJ]() (800; 0% instances).

### `NUM`

4609 [it-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (4584; 99% of non-empty `NumType`): <em>due, 1, 2, tre, 3, cinque, mila, quattro, 4, 20</em>
* `Gen` (21; 0% of non-empty `NumType`): <em>6', 1'13'', 1.00'16'', 1.19'59'', 10'', 11'06'', 13', 19'43'', 2'42'', 20'01''</em>
* `Range` (4; 0% of non-empty `NumType`): <em>3/4, 150/300, 2/3</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (1095) occur only with one value of `NumType`.

### `ADJ`

800 [it-pos/ADJ]() tokens (5% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (682; 85%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (800; 100% of non-empty `NumType`): <em>primo, prima, secondo, seconda, primi, ultimi, prime, terzo, ii, i</em>
* `EMPTY` (16546): <em>grande, presente, altri, altro, stesso, comune, nuovo, stessa, altra, ex</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (66) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (152; 100%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (136; 100%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (33; 100%),
<tt>NUM --[<a href="../dep/mwe.html">mwe</a>]--> NUM</tt> (17; 100%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (5; 83%),
<tt>NUM --[<a href="../dep/nmod.html">nmod</a>]--> NUM</tt> (2; 100%).

