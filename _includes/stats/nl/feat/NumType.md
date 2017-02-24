

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

5109 tokens (3%) have a non-empty value of `NumType`.
1015 types (4%) occur at least once with a non-empty value of `NumType`.
968 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: [nl-pos/NUM]() (3650; 2% instances), [nl-pos/DET]() (953; 0% instances), [nl-pos/ADJ]() (506; 0% instances).

### `NUM`

3650 [nl-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="NumForm.html">NumForm</a>=EMPTY</tt> (3126; 86%), <tt><a href="Definite.html">Definite</a>=Def</tt> (3113; 85%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (3650; 100% of non-empty `NumType`): <em>twee, drie, vier, miljoen, 1, vijf, tien, beide, zes, 1969</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (891) occur only with one value of `NumType`.

### `DET`

953 [nl-pos/DET]() tokens (4% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (953; 100%), <tt><a href="PronType.html">PronType</a>=Ind</tt> (953; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (953; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (934; 98%).

`DET` tokens may have the following values of `NumType`:

* `Card` (953; 100% of non-empty `NumType`): <em>veel, meer, hoeveel, minder, weinig, vele, zoveel, meeste, velen, min</em>
* `EMPTY` (20303): <em>de, een, het, der, tot, 't, 'n, la, el, des</em>

`NumType` seems to be **lexical feature** of `DET`. 100% lemmas (22) occur only with one value of `NumType`.

### `ADJ`

506 [nl-pos/ADJ]() tokens (4% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Variant.html">Variant</a>=EMPTY</tt> (506; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (506; 100%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (506; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (506; 100% of non-empty `NumType`): <em>eerste, tweede, derde, vierde, vijfde, zevende, 19e, dertiende, negende, zesde</em>
* `EMPTY` (11661): <em>grote, nieuwe, goed, Nederlandse, laatste, groot, Amerikaanse, goede, lang, verder</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (58) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (395; 100%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (112; 100%),
<tt>DET --[<a href="../dep/obl.html">obl</a>]--> NUM</tt> (33; 92%),
<tt>DET --[<a href="../dep/compound.html">compound</a>]--> DET</tt> (18; 100%),
<tt>DET --[<a href="../dep/obl.html">obl</a>]--> DET</tt> (12; 92%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (9; 69%),
<tt>NUM --[<a href="../dep/cc.html">cc</a>]--> NUM</tt> (6; 100%),
<tt>DET --[<a href="../dep/conj.html">conj</a>]--> DET</tt> (4; 67%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> DET</tt> (3; 75%),
<tt>DET --[<a href="../dep/det:nummod.html">det:nummod</a>]--> DET</tt> (3; 100%).

