

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This feature is universal.
It occurs with 3 different values: `Card`, `Mult`, `Ord`.

685 tokens (3%) have a non-empty value of `NumType`.
313 types (5%) occur at least once with a non-empty value of `NumType`.
277 lemmas (7%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: [lv-pos/NUM]() (424; 2% instances), [lv-pos/ADJ]() (260; 1% instances), [lv-pos/ADV]() (1; 0% instances).

### `NUM`

424 [lv-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (294; 69%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (293; 69%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (283; 67%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (424; 100% of non-empty `NumType`): <em>000, 25, viens, 1, 3, 50, trīs, 20, 200, 8000</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (190) occur only with one value of `NumType`.

### `ADJ`

260 [lv-pos/ADJ]() tokens (22% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Case.html">Case</a>=EMPTY</tt> (222; 85%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (222; 85%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (222; 85%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (222; 85%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (260; 100% of non-empty `NumType`): <em>2012., 2011., 2013., 2010., 11., 6., 13., 15., 2014., 7.</em>
* `EMPTY` (924): <em>nacionālās, galvenais, jaunās, papildu, sabiedrisko, jauno, jaunu, lielu, Nacionālā, jauna</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (87) occur only with one value of `NumType`.

### `ADV`

1 [lv-pos/ADV]() tokens (0% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (1; 100%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (1; 100%).

`ADV` tokens may have the following values of `NumType`:

* `Mult` (1; 100% of non-empty `NumType`): <em>vienreiz</em>
* `EMPTY` (873): <em>kā, jau, vēl, kur, vairāk, kad, savukārt, ļoti, tā, tad</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (38; 100%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (9; 100%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (8; 100%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (4; 100%),
<tt>ADJ --[<a href="../dep/mwe.html">mwe</a>]--> ADJ</tt> (2; 100%),
<tt>NUM --[<a href="../dep/acl.html">acl</a>]--> NUM</tt> (1; 100%),
<tt>NUM --[<a href="../dep/mwe.html">mwe</a>]--> NUM</tt> (1; 100%).

