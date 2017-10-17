

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish-AnCora)

This feature is language-specific.
It occurs with 1 different values: `Digit`.

5586 tokens (1%) have a non-empty value of `NumForm`.
1597 types (4%) occur at least once with a non-empty value of `NumForm`.
1569 lemmas (6%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 3 part-of-speech tags: [es-pos/NUM]() (4627; 1% instances), [es-pos/NOUN]() (602; 0% instances), [es-pos/SYM]() (357; 0% instances).

### `NUM`

4627 [es-pos/NUM]() tokens (59% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="Number.html">Number</a>=EMPTY</tt> (4626; 100%), <tt><a href="NumType.html">NumType</a>=EMPTY</tt> (3374; 73%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (4627; 100% of non-empty `NumForm`): <em>20, 30, 10, 12, 15, 17, 24, 16, 18, 50</em>

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (1375) occur only with one value of `NumForm`.

### `NOUN`

602 [es-pos/NOUN]() tokens (1% of all `NOUN` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NOUN` and `NumForm` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (602; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (602; 100%).

`NOUN` tokens may have the following values of `NumForm`:

* `Digit` (602; 100% of non-empty `NumForm`): <em>pesetas, dólares, euros, pesos, yenes, marcos, peniques, bolívares, coronas, francos</em>

`NumForm` seems to be **lexical feature** of `NOUN`. 100% lemmas (20) occur only with one value of `NumForm`.

### `SYM`

357 [es-pos/SYM]() tokens (79% of all `SYM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `SYM` and `NumForm` co-occurred: <tt><a href="NumType.html">NumType</a>=Frac</tt> (271; 76%).

`SYM` tokens may have the following values of `NumForm`:

* `Digit` (357; 100% of non-empty `NumForm`): <em>20%, %, 25%, 50%, 60%, 10%, 30%, 80%, 15%, 2%</em>

`NumForm` seems to be **lexical feature** of `SYM`. 100% lemmas (211) occur only with one value of `NumForm`.

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (110; 96%),
<tt>NUM --[<a href="../dep/appos.html">appos</a>]--> NUM</tt> (17; 94%),
<tt>NUM --[<a href="../dep/nmod.html">nmod</a>]--> SYM</tt> (16; 100%),
<tt>SYM --[<a href="../dep/conj.html">conj</a>]--> SYM</tt> (13; 100%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (10; 91%),
<tt>NUM --[<a href="../dep/nmod.html">nmod</a>]--> NUM</tt> (4; 100%),
<tt>SYM --[<a href="../dep/appos.html">appos</a>]--> SYM</tt> (3; 100%),
<tt>SYM --[<a href="../dep/nmod.html">nmod</a>]--> SYM</tt> (3; 100%),
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (3; 75%),
<tt>SYM --[<a href="../dep/parataxis.html">parataxis</a>]--> SYM</tt> (1; 100%).

