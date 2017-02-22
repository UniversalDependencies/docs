

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This feature is universal.
It occurs with 3 different values: `Card`, `Frac`, `Ord`.

6751 tokens (1%) have a non-empty value of `NumType`.
731 types (2%) occur at least once with a non-empty value of `NumType`.
682 lemmas (3%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: [ca-pos/NUM]() (4639; 1% instances), [ca-pos/ADJ]() (1421; 0% instances), [ca-pos/SYM]() (691; 0% instances).

### `NUM`

4639 [ca-pos/NUM]() tokens (56% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (3420; 74%), <tt><a href="NumForm.html">NumForm</a>=EMPTY</tt> (2828; 61%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (4625; 100% of non-empty `NumType`): <em>dos, tres, cent, dues, quatre, nou, un, cinc, sis, una</em>
* `Frac` (14; 0% of non-empty `NumType`): <em>cada, 1,1, 10, 15, 161, 17,8/100.000, 26,5/100.000, 3,9, 37,45, 57,9/100.000</em>
* `EMPTY` (3612): <em>10, 15, 20, 5, 4, 30, 12, 50, 14, 25</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (434) occur only with one value of `NumType`.

### `ADJ`

1421 [ca-pos/ADJ]() tokens (5% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (1421; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (1120; 79%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (794; 56%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (1421; 100% of non-empty `NumType`): <em>primer, primera, últims, segona, primers, segon, últim, última, tercer, darrers</em>
* `EMPTY` (25369): <em>gran, passat, nou, general, nova, espanyol, catalana, grans, baix, noves</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (27) occur only with one value of `NumType`.

### `SYM`

691 [ca-pos/SYM]() tokens (17% of all `SYM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `SYM` and `NumType` co-occurred: <tt><a href="NumForm.html">NumForm</a>=Digit</tt> (691; 100%).

`SYM` tokens may have the following values of `NumType`:

* `Frac` (691; 100% of non-empty `NumType`): <em>%, 50%, 10%, 30%, 1%, 20%, 25%, 40%, 5%, 2%</em>
* `EMPTY` (3354): <em>', %, 10%, 2%, 40%, 1%, 10,2%, 13,7%, 22,7%, 33,7%</em>

`NumType` seems to be **lexical feature** of `SYM`. 100% lemmas (232) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (375; 97%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (58; 79%),
<tt>SYM --[<a href="../dep/conj.html">conj</a>]--> SYM</tt> (18; 100%),
<tt>SYM --[<a href="../dep/appos.html">appos</a>]--> SYM</tt> (6; 86%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (5; 71%),
<tt>SYM --[<a href="../dep/advmod.html">advmod</a>]--> SYM</tt> (2; 100%),
<tt>SYM --[<a href="../dep/advcl.html">advcl</a>]--> SYM</tt> (1; 100%).

