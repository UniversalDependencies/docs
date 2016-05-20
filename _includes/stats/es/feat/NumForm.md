

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish-AnCora)

This feature is language-specific.
It occurs with 1 different values: `Digit`.

6287 tokens (1%) have a non-empty value of `NumForm`.
1724 types (4%) occur at least once with a non-empty value of `NumForm`.
1685 lemmas (6%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 3 part-of-speech tags: [es-pos/NUM]() (5262; 1% instances), [es-pos/NOUN]() (649; 0% instances), [es-pos/SYM]() (376; 0% instances).

### `NUM`

5262 [es-pos/NUM]() tokens (60% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="Number.html">Number</a>=EMPTY</tt> (5261; 100%), <tt><a href="NumType.html">NumType</a>=EMPTY</tt> (3863; 73%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (5262; 100% of non-empty `NumForm`): <em>20, 30, 10, 15, 12, 18, 24, 16, 50, 17</em>

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (1485) occur only with one value of `NumForm`.

### `NOUN`

649 [es-pos/NOUN]() tokens (1% of all `NOUN` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NOUN` and `NumForm` co-occurred: <tt><a href="Number.html">Number</a>=EMPTY</tt> (649; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (649; 100%).

`NOUN` tokens may have the following values of `NumForm`:

* `Digit` (649; 100% of non-empty `NumForm`): <em>pesetas, dólares, euros, pesos, yenes, marcos, peniques, bolívares, coronas, dólar</em>

`NumForm` seems to be **lexical feature** of `NOUN`. 100% lemmas (20) occur only with one value of `NumForm`.

### `SYM`

376 [es-pos/SYM]() tokens (77% of all `SYM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `SYM` and `NumForm` co-occurred: <tt><a href="NumType.html">NumType</a>=Frac</tt> (288; 77%).

`SYM` tokens may have the following values of `NumForm`:

* `Digit` (376; 100% of non-empty `NumForm`): <em>20%, %, 25%, 50%, 10%, 60%, 30%, 80%, 15%, 2%</em>

`NumForm` seems to be **lexical feature** of `SYM`. 100% lemmas (219) occur only with one value of `NumForm`.

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (147; 97%),
<tt>NUM --[<a href="../dep/appos.html">appos</a>]--> NUM</tt> (43; 98%),
<tt>NUM --[<a href="../dep/nmod.html">nmod</a>]--> SYM</tt> (17; 100%),
<tt>SYM --[<a href="../dep/conj.html">conj</a>]--> SYM</tt> (14; 100%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (13; 93%),
<tt>NUM --[<a href="../dep/nmod.html">nmod</a>]--> NUM</tt> (4; 100%),
<tt>SYM --[<a href="../dep/nmod.html">nmod</a>]--> SYM</tt> (3; 100%),
<tt>SYM --[<a href="../dep/appos.html">appos</a>]--> SYM</tt> (3; 100%),
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (3; 60%),
<tt>NUM --[<a href="../dep/advmod.html">advmod</a>]--> NUM</tt> (2; 100%).

