

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This feature is universal.
It occurs with 4 different values: `Card`, `Frac`, `Mult`, `Ord`.

1038 tokens (2%) have a non-empty value of `NumType`.
385 types (3%) occur at least once with a non-empty value of `NumType`.
324 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: [lv-pos/NUM]() (640; 1% instances), [lv-pos/ADJ]() (395; 1% instances), [lv-pos/ADV]() (3; 0% instances).

### `NUM`

640 [lv-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (360; 56%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (360; 56%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (322; 50%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (639; 100% of non-empty `NumType`): <em>viens, vienu, trīs, 25, viena, divas, 3, desmit, vienā, 2</em>
* `Frac` (1; 0% of non-empty `NumType`): <em>pusotra</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (215) occur only with one value of `NumType`.

### `ADJ`

395 [lv-pos/ADJ]() tokens (15% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Number.html">Number</a>=EMPTY</tt> (325; 82%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (325; 82%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (325; 82%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (325; 82%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (395; 100% of non-empty `NumType`): <em>2012., 1., 2., 3., 2010., 2011., 2007., 4., 2013., 7.</em>
* `EMPTY` (2174): <em>pedagoģisko, nacionālās, iespējams, jaunu, liela, liels, nepieciešams, lielu, lielā, vispārējās</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (109) occur only with one value of `NumType`.

### `ADV`

3 [lv-pos/ADV]() tokens (0% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (3; 100%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (3; 100%).

`ADV` tokens may have the following values of `NumType`:

* `Mult` (3; 100% of non-empty `NumType`): <em>vienreiz</em>
* `EMPTY` (2622): <em>kā, jau, vēl, tad, kad, tā, tik, kur, ļoti, tagad</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (19; 95%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (17; 100%),
<tt>NUM --[<a href="../dep/flat:name.html">flat:name</a>]--> NUM</tt> (14; 100%),
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (7; 100%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (6; 100%),
<tt>NUM --[<a href="../dep/parataxis.html">parataxis</a>]--> NUM</tt> (5; 100%),
<tt>ADJ --[<a href="../dep/flat.html">flat</a>]--> ADJ</tt> (2; 100%),
<tt>NUM --[<a href="../dep/flat.html">flat</a>]--> NUM</tt> (1; 100%),
<tt>NUM --[<a href="../dep/acl.html">acl</a>]--> NUM</tt> (1; 100%).

