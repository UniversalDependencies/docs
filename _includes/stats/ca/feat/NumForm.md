

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This feature is language-specific.
It occurs with 1 different values: `Digit`.

6870 tokens (1%) have a non-empty value of `NumForm`.
1762 types (6%) occur at least once with a non-empty value of `NumForm`.
1732 lemmas (8%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 3 part-of-speech tags: [ca-pos/NUM]() (5423; 1% instances), [ca-pos/NOUN]() (745; 0% instances), [ca-pos/SYM]() (702; 0% instances).

### `NUM`

5423 [ca-pos/NUM]() tokens (66% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="Number.html">Number</a>=EMPTY</tt> (5423; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (5423; 100%), <tt><a href="NumType.html">NumType</a>=EMPTY</tt> (3612; 67%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (5423; 100% of non-empty `NumForm`): <em>10, 15, 20, 30, 5, 4, 12, 2, 50, 3</em>

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (1491) occur only with one value of `NumForm`.

### `NOUN`

745 [ca-pos/NOUN]() tokens (1% of all `NOUN` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NOUN` and `NumForm` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (745; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (745; 100%).

`NOUN` tokens may have the following values of `NumForm`:

* `Digit` (745; 100% of non-empty `NumForm`): <em>pessetes, euros, dòlars, PTA, pesseta, dòlar, euro, corones, marcs, pta.</em>

### `SYM`

702 [ca-pos/SYM]() tokens (17% of all `SYM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `SYM` and `NumForm` co-occurred: <tt><a href="NumType.html">NumType</a>=Frac</tt> (691; 98%).

`SYM` tokens may have the following values of `NumForm`:

* `Digit` (702; 100% of non-empty `NumForm`): <em>%, 10%, 50%, 30%, 40%, 1%, 20%, 25%, 5%, 2%</em>

`NumForm` seems to be **lexical feature** of `SYM`. 100% lemmas (239) occur only with one value of `NumForm`.

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<a href="../dep/nmod.html">nmod</a>]--> SYM</tt> (205; 95%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (182; 98%),
<tt>NOUN --[<a href="../dep/appos.html">appos</a>]--> NOUN</tt> (32; 51%),
<tt>NUM --[<a href="../dep/appos.html">appos</a>]--> NUM</tt> (21; 91%),
<tt>SYM --[<a href="../dep/conj.html">conj</a>]--> SYM</tt> (19; 100%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (14; 78%),
<tt>SYM --[<a href="../dep/appos.html">appos</a>]--> SYM</tt> (6; 86%),
<tt>NUM --[<a href="../dep/appos.html">appos</a>]--> SYM</tt> (4; 100%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> SYM</tt> (3; 100%),
<tt>NUM --[<a href="../dep/nmod.html">nmod</a>]--> NUM</tt> (2; 100%).

