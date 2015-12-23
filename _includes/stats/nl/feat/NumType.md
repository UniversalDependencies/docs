

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

4789 tokens (2%) have a non-empty value of `NumType`.
1066 types (4%) occur at least once with a non-empty value of `NumType`.
1016 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: [nl-pos/NUM]() (3256; 2% instances), [nl-pos/ADJ]() (548; 0% instances), [nl-pos/DET]() (540; 0% instances), [nl-pos/PRON]() (445; 0% instances).

### `NUM`

3256 [nl-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="Definite.html">Definite</a>=Def</tt> (3256; 100%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (3256; 100% of non-empty `NumType`): <em>twee, drie, vier, miljoen, vijf, beide, tien, zes, acht, 1969</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (927) occur only with one value of `NumType`.

### `ADJ`

548 [nl-pos/ADJ]() tokens (4% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Variant.html">Variant</a>=EMPTY</tt> (548; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (546; 100%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (542; 99%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (548; 100% of non-empty `NumType`): <em>eerste, tweede, derde, vierde, vijfde, zevende, 19e, dertiende, negende, zesde</em>
* `EMPTY` (12306): <em>nieuwe, grote, goed, Nederlandse, laatste, groot, verder, goede, Amerikaanse, lang</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (68) occur only with one value of `NumType`.

### `DET`

540 [nl-pos/DET]() tokens (3% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (540; 100%), <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (540; 100%), <tt><a href="PronType.html">PronType</a>=Ind</tt> (540; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (538; 100%).

`DET` tokens may have the following values of `NumType`:

* `Card` (540; 100% of non-empty `NumType`): <em>hoeveel, veel, meer, vele, meeste, weinig, minder, zoveel, weinige, evenveel</em>
* `EMPTY` (19891): <em>de, een, het, der, 'n, 't, des, ONTVANGEN, den</em>

`NumType` seems to be **lexical feature** of `DET`. 100% lemmas (19) occur only with one value of `NumType`.

### `PRON`

445 [nl-pos/PRON]() tokens (2% of all `PRON` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PRON` and `NumType` co-occurred: <tt><a href="PronType.html">PronType</a>=Ind</tt> (445; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (445; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (431; 97%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (426; 96%).

`PRON` tokens may have the following values of `NumType`:

* `Card` (445; 100% of non-empty `NumType`): <em>veel, meer, minder, weinig, hoeveel, velen, zoveel, min_of_meer, vele, allerminst</em>
* `EMPTY` (17978): <em>het, die, hij, ik, dat, zijn, de, wat, welke, zich</em>

`NumType` seems to be **lexical feature** of `PRON`. 100% lemmas (19) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (119; 100%),
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (98; 100%),
<tt>DET --[<a href="../dep/advmod.html">advmod</a>]--> NUM</tt> (29; 94%),
<tt>PRON --[<a href="../dep/advmod.html">advmod</a>]--> PRON</tt> (10; 100%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (10; 71%),
<tt>PRON --[<a href="../dep/advmod.html">advmod</a>]--> NUM</tt> (5; 83%),
<tt>NUM --[<a href="../dep/cc.html">cc</a>]--> NUM</tt> (5; 100%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (4; 67%),
<tt>DET --[<a href="../dep/advmod.html">advmod</a>]--> PRON</tt> (3; 75%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (3; 75%).

