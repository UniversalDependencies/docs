

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This feature is universal.
It occurs with 2 different values: `Def`, `Ind`.

25628 tokens (13%) have a non-empty value of `Definite`.
1377 types (5%) occur at least once with a non-empty value of `Definite`.
1338 lemmas (6%) occur at least once with a non-empty value of `Definite`.
The feature is used with 5 part-of-speech tags: [nl-pos/DET]() (19891; 10% instances), [nl-pos/NUM]() (3256; 2% instances), [nl-pos/PRON]() (1512; 1% instances), [nl-pos/ADJ]() (548; 0% instances), [nl-pos/X]() (421; 0% instances).

### `DET`

19891 [nl-pos/DET]() tokens (97% of all `DET` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `DET` and `Definite` co-occurred: <tt><a href="PronType.html">PronType</a>=Art</tt> (19891; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (16194; 81%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (15576; 78%).

`DET` tokens may have the following values of `Definite`:

* `Def` (15580; 78% of non-empty `Definite`): <em>de, het, der, 't, des, den</em>
* `Ind` (4311; 22% of non-empty `Definite`): <em>een, 'n, ONTVANGEN</em>
* `EMPTY` (540): <em>hoeveel, veel, meer, vele, meeste, weinig, minder, zoveel, weinige, evenveel</em>

`Definite` seems to be **lexical feature** of `DET`. 100% lemmas (13) occur only with one value of `Definite`.

### `NUM`

3256 [nl-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `NUM` and `Definite` co-occurred: <tt><a href="NumType.html">NumType</a>=Card</tt> (3256; 100%).

`NUM` tokens may have the following values of `Definite`:

* `Def` (3256; 100% of non-empty `Definite`): <em>twee, drie, vier, miljoen, vijf, beide, tien, zes, acht, 1969</em>

`Definite` seems to be **lexical feature** of `NUM`. 100% lemmas (927) occur only with one value of `Definite`.

### `PRON`

1512 [nl-pos/PRON]() tokens (8% of all `PRON` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `PRON` and `Definite` co-occurred: <tt><a href="PronType.html">PronType</a>=Art</tt> (1512; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (1512; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (1509; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (1330; 88%).

`PRON` tokens may have the following values of `Definite`:

* `Def` (1330; 88% of non-empty `Definite`): <em>de, het, 't, der</em>
* `Ind` (182; 12% of non-empty `Definite`): <em>een, BEPALEN, CERN, BEÏNVLOEDEN</em>
* `EMPTY` (16911): <em>die, hij, ik, het, dat, zijn, wat, welke, zich, dit</em>

`Definite` seems to be **lexical feature** of `PRON`. 100% lemmas (11) occur only with one value of `Definite`.

### `ADJ`

548 [nl-pos/ADJ]() tokens (4% of all `ADJ` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `ADJ` and `Definite` co-occurred: <tt><a href="Variant.html">Variant</a>=EMPTY</tt> (548; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (546; 100%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (542; 99%).

`ADJ` tokens may have the following values of `Definite`:

* `Def` (548; 100% of non-empty `Definite`): <em>eerste, tweede, derde, vierde, vijfde, zevende, 19e, dertiende, negende, zesde</em>
* `EMPTY` (12306): <em>nieuwe, grote, goed, Nederlandse, laatste, groot, verder, goede, Amerikaanse, lang</em>

`Definite` seems to be **lexical feature** of `ADJ`. 100% lemmas (68) occur only with one value of `Definite`.

### `X`

421 [nl-pos/X]() tokens (7% of all `X` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `X` and `Definite` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (343; 81%).

`X` tokens may have the following values of `Definite`:

* `Def` (421; 100% of non-empty `Definite`): <em>'s_avonds, het_meest, 's_middags, 's_morgens, 's_nachts, de_tijd, het_beste, -_12, flo_5, half_zeven</em>
* `EMPTY` (5242): <em>Den_Haag, voor_het_eerst, Verenigde_Staten, Tweede_Kamer, met_name, aan_het, Integraal_Dossier_JGZ, onder_meer, in_plaats_van, in_verband_met</em>

`Definite` seems to be **lexical feature** of `X`. 100% lemmas (328) occur only with one value of `Definite`.

## Relations with Agreement in `Definite`

The 10 most frequent relations where parent and child node agree in `Definite`:
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (119; 100%),
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (98; 100%),
<tt>NUM --[<a href="../dep/nmod.html">nmod</a>]--> X</tt> (31; 100%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (10; 71%),
<tt>X --[<a href="../dep/conj.html">conj</a>]--> X</tt> (7; 70%),
<tt>NUM --[<a href="../dep/cc.html">cc</a>]--> NUM</tt> (5; 100%),
<tt>X --[<a href="../dep/nsubj.html">nsubj</a>]--> X</tt> (2; 100%),
<tt>X --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (1; 100%),
<tt>NUM --[<a href="../dep/dep.html">dep</a>]--> NUM</tt> (1; 100%),
<tt>X --[<a href="../dep/cop.html">cop</a>]--> X</tt> (1; 100%).

