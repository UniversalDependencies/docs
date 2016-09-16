

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This feature is universal.
It occurs with 3 different values: `Card`, `Mult`, `Ord`.

688 tokens (3%) have a non-empty value of `NumType`.
315 types (5%) occur at least once with a non-empty value of `NumType`.
273 lemmas (7%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: [lv-pos/NUM]() (440; 2% instances), [lv-pos/ADJ]() (247; 1% instances), [lv-pos/ADV]() (1; 0% instances).

### `NUM`

440 [lv-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (283; 64%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (282; 64%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (273; 62%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (440; 100% of non-empty `NumType`): <em>000, 25, viens, 1, 3, 50, miljoni, 20, 200, 8000</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (186) occur only with one value of `NumType`.

### `ADJ`

247 [lv-pos/ADJ]() tokens (22% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (210; 85%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (210; 85%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (210; 85%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (210; 85%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (247; 100% of non-empty `NumType`): <em>2012., 2011., 2013., 2010., 11., 13., 2014., 6., 1., 2009.</em>
* `EMPTY` (896): <em>nacionālās, galvenais, jaunās, papildu, sabiedrisko, jaunu, jauno, lielu, jauna, reģionālās</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (87) occur only with one value of `NumType`.

### `ADV`

1 [lv-pos/ADV]() tokens (0% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (1; 100%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (1; 100%).

`ADV` tokens may have the following values of `NumType`:

* `Mult` (1; 100% of non-empty `NumType`): <em>vienreiz</em>
* `EMPTY` (841): <em>kā, jau, kur, vēl, vairāk, kad, savukārt, ļoti, tā, tad</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (38; 100%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (31; 100%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (9; 100%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (8; 100%),
<tt>NUM --[<a href="../dep/parataxis.html">parataxis</a>]--> NUM</tt> (2; 100%),
<tt>ADJ --[<a href="../dep/mwe.html">mwe</a>]--> ADJ</tt> (2; 100%),
<tt>NUM --[<a href="../dep/acl.html">acl</a>]--> NUM</tt> (1; 100%),
<tt>NUM --[<a href="../dep/mwe.html">mwe</a>]--> NUM</tt> (1; 100%).

