

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This feature is language-specific.
It occurs with 3 different values: `Digit`, `Roman`, `Word`.

41168 tokens (3%) have a non-empty value of `NumForm`.
3588 types (3%) occur at least once with a non-empty value of `NumForm`.
3427 lemmas (6%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 1 part-of-speech tags: [cs-pos/NUM]() (41168; 3% instances).

### `NUM`

41168 [cs-pos/NUM]() tokens (99% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="NumType.html">NumType</a>=Card</tt> (41168; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (36751; 89%), <tt><a href="NumValue.html">NumValue</a>=EMPTY</tt> (33118; 80%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (29887; 73%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (29861; 73%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (29484; 72% of non-empty `NumForm`): _1, 2, 3, 4, 6, 5, 1992, 10, 1994, 1993_
* `Roman` (376; 1% of non-empty `NumForm`): _II, I, III, IV, V, VI, XX, D, C, IX_
* `Word` (11308; 27% of non-empty `NumForm`): _dva, tři, jeden, dvě, tisíc, dvou, pět, čtyři, obou, jednoho_

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (3427) occur only with one value of `NumForm`.

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (3370; 100%),
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (2669; 95%),
<tt>NUM --[<a href="../dep/dep.html">dep</a>]--> NUM</tt> (50; 96%).

