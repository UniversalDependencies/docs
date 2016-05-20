

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

5402 tokens (3%) have a non-empty value of `NumType`.
1053 types (4%) occur at least once with a non-empty value of `NumType`.
1006 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: [nl-pos/NUM]() (3859; 2% instances), [nl-pos/PRON]() (597; 0% instances), [nl-pos/ADJ]() (536; 0% instances), [nl-pos/DET]() (410; 0% instances).

### `NUM`

3859 [nl-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="NumForm.html">NumForm</a>=EMPTY</tt> (3316; 86%), <tt><a href="Definite.html">Definite</a>=Def</tt> (3303; 86%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (3859; 100% of non-empty `NumType`): <em>twee, drie, vier, miljoen, 1, vijf, tien, beide, zes, 1969</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (927) occur only with one value of `NumType`.

### `PRON`

597 [nl-pos/PRON]() tokens (3% of all `PRON` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PRON` and `NumType` co-occurred: <tt><a href="Person.html">Person</a>=EMPTY</tt> (597; 100%), <tt><a href="PronType.html">PronType</a>=Ind</tt> (597; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (583; 98%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (578; 97%).

`PRON` tokens may have the following values of `NumType`:

* `Card` (597; 100% of non-empty `NumType`): <em>hoeveel, veel, meer, minder, weinig, velen, zoveel, of, min, vele</em>
* `EMPTY` (16527): <em>die, hij, ik, het, dat, zijn, wat, welke, zich, dit</em>

`NumType` seems to be **lexical feature** of `PRON`. 100% lemmas (20) occur only with one value of `NumType`.

### `ADJ`

536 [nl-pos/ADJ]() tokens (4% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Case.html">Case</a>=EMPTY</tt> (536; 100%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (536; 100%), <tt><a href="Variant.html">Variant</a>=EMPTY</tt> (536; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (536; 100% of non-empty `NumType`): <em>eerste, tweede, derde, vierde, vijfde, zevende, 19e, dertiende, negende, zesde</em>
* `EMPTY` (12342): <em>nieuwe, grote, goed, Nederlandse, laatste, groot, verder, goede, Amerikaanse, lang</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (59) occur only with one value of `NumType`.

### `DET`

410 [nl-pos/DET]() tokens (2% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (410; 100%), <tt><a href="PronType.html">PronType</a>=Ind</tt> (410; 100%), <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (410; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (408; 100%).

`DET` tokens may have the following values of `NumType`:

* `Card` (410; 100% of non-empty `NumType`): <em>veel, meer, vele, meeste, weinig, minder, zoveel, hoeveel, weinige, evenveel</em>
* `EMPTY` (21440): <em>de, een, het, der, 't, 'n, la, el, des, los</em>

`NumType` seems to be **lexical feature** of `DET`. 100% lemmas (17) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (410; 100%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (119; 100%),
<tt>DET --[<a href="../dep/advmod.html">advmod</a>]--> NUM</tt> (29; 91%),
<tt>PRON --[<a href="../dep/compound.html">compound</a>]--> PRON</tt> (20; 100%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (10; 71%),
<tt>PRON --[<a href="../dep/advmod.html">advmod</a>]--> PRON</tt> (10; 100%),
<tt>NUM --[<a href="../dep/cc.html">cc</a>]--> NUM</tt> (6; 100%),
<tt>PRON --[<a href="../dep/advmod.html">advmod</a>]--> NUM</tt> (5; 83%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (4; 80%),
<tt>DET --[<a href="../dep/advmod.html">advmod</a>]--> PRON</tt> (3; 75%).

