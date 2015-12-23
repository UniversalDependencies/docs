

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

5519 tokens (2%) have a non-empty value of `NumType`.
1193 types (5%) occur at least once with a non-empty value of `NumType`.
1142 lemmas (6%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: [it-pos/NUM]() (4588; 2% instances), [it-pos/ADJ]() (847; 0% instances), [it-pos/PRON]() (84; 0% instances).

### `NUM`

4588 [it-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (4588; 100% of non-empty `NumType`): <em>due, 1, 2, tre, 3, cinque, mila, quattro, 4, 20</em>
* `EMPTY` (21): <em>6', 1'13'', 1.00'16'', 1.19'59'', 10'', 11'06'', 13', 19'43'', 2'42'', 20'01''</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (1075) occur only with one value of `NumType`.

### `ADJ`

847 [it-pos/ADJ]() tokens (5% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (721; 85%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (436; 51%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (847; 100% of non-empty `NumType`): <em>primo, prima, secondo, seconda, primi, terzo, ultimi, prime, ii, i</em>
* `EMPTY` (16538): <em>grande, presente, altri, altro, stesso, comune, nuovo, stessa, altra, ex</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (66) occur only with one value of `NumType`.

### `PRON`

84 [it-pos/PRON]() tokens (1% of all `PRON` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PRON` and `NumType` co-occurred: <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (84; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (84; 100%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (70; 83%), <tt><a href="Number.html">Number</a>=Sing</tt> (68; 81%).

`PRON` tokens may have the following values of `NumType`:

* `Ord` (84; 100% of non-empty `NumType`): <em>terzo, terzi, quarto, primo, ultimo, primi, ultima, prima, quinto, decimo</em>
* `EMPTY` (10750): <em>si, che, chi, cui, ci, lo, ne, qual, quanto, mi</em>

`NumType` seems to be **lexical feature** of `PRON`. 100% lemmas (13) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (150; 100%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (135; 100%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (33; 100%),
<tt>NUM --[<a href="../dep/mwe.html">mwe</a>]--> NUM</tt> (19; 100%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (6; 75%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (3; 100%).

