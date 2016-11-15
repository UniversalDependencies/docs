

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This feature is universal.
It occurs with 3 different values: `Card`, `Frac`, `Ord`.

7583 tokens (1%) have a non-empty value of `NumType`.
795 types (2%) occur at least once with a non-empty value of `NumType`.
742 lemmas (3%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: [ca-pos/NUM]() (5208; 1% instances), [ca-pos/ADJ]() (1582; 0% instances), [ca-pos/SYM]() (793; 0% instances).

### `NUM`

5208 [ca-pos/NUM]() tokens (56% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (3839; 74%), <tt><a href="NumForm.html">NumForm</a>=EMPTY</tt> (3179; 61%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (5194; 100% of non-empty `NumType`): <em>dos, tres, cent, dues, quatre, un, cinc, nou, sis, una</em>
* `Frac` (14; 0% of non-empty `NumType`): <em>cada, 1,1, 10, 15, 161, 17,8/100.000, 26,5/100.000, 3,9, 37,45, 57,9/100.000</em>
* `EMPTY` (4053): <em>10, 15, 20, 30, 5, 4, 12, 50, 25, 14</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (462) occur only with one value of `NumType`.

### `ADJ`

1582 [ca-pos/ADJ]() tokens (5% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (1582; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (1245; 79%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (877; 55%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (1582; 100% of non-empty `NumType`): <em>primer, primera, últims, segona, últim, segon, primers, última, tercer, darrers</em>
* `EMPTY` (28463): <em>passat, gran, nou, general, nova, catalana, espanyol, grans, baix, noves</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (28) occur only with one value of `NumType`.

### `SYM`

793 [ca-pos/SYM]() tokens (17% of all `SYM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `SYM` and `NumType` co-occurred: <tt><a href="NumForm.html">NumForm</a>=Digit</tt> (793; 100%).

`SYM` tokens may have the following values of `NumType`:

* `Frac` (793; 100% of non-empty `NumType`): <em>%, 50%, 10%, 30%, 5%, 25%, 1%, 20%, 40%, 2%</em>
* `EMPTY` (3845): <em>', /, %, 10%, 2%, 40%, -, -3%, 1%, 10,2%</em>

`NumType` seems to be **lexical feature** of `SYM`. 100% lemmas (264) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (415; 97%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (63; 80%),
<tt>SYM --[<a href="../dep/conj.html">conj</a>]--> SYM</tt> (23; 100%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (6; 67%),
<tt>SYM --[<a href="../dep/appos.html">appos</a>]--> SYM</tt> (6; 86%),
<tt>SYM --[<a href="../dep/advmod.html">advmod</a>]--> SYM</tt> (3; 100%),
<tt>SYM --[<a href="../dep/advcl.html">advcl</a>]--> SYM</tt> (1; 100%).

