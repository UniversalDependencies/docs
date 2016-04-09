

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This feature is universal.
It occurs with 2 different values: `Com`, `Neut`.

4516 tokens (2%) have a non-empty value of `Gender`.
105 types (0%) occur at least once with a non-empty value of `Gender`.
103 lemmas (0%) occur at least once with a non-empty value of `Gender`.
The feature is used with 3 part-of-speech tags: [nl-pos/DET]() (3697; 2% instances), [nl-pos/PRON]() (589; 0% instances), [nl-pos/X]() (230; 0% instances).

### `DET`

3697 [nl-pos/DET]() tokens (18% of all `DET` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `DET` and `Gender` co-occurred: <tt><a href="PronType.html">PronType</a>=Art</tt> (3697; 100%), <tt><a href="Definite.html">Definite</a>=Def</tt> (3697; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (3697; 100%).

`DET` tokens may have the following values of `Gender`:

* `Com` (1; 0% of non-empty `Gender`): <em>den</em>
* `Neut` (3696; 100% of non-empty `Gender`): <em>het, 't</em>
* `EMPTY` (16734): <em>de, een, hoeveel, veel, meer, der, vele, meeste, weinig, minder</em>

### `PRON`

589 [nl-pos/PRON]() tokens (3% of all `PRON` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PRON` and `Gender` co-occurred: <tt><a href="PronType.html">PronType</a>=Art</tt> (589; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (589; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (589; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (589; 100%).

`PRON` tokens may have the following values of `Gender`:

* `Neut` (589; 100% of non-empty `Gender`): <em>het, 't</em>
* `EMPTY` (17834): <em>die, hij, ik, het, dat, zijn, de, wat, welke, zich</em>

### `X`

230 [nl-pos/X]() tokens (4% of all `X` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `X` and `Gender` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (125; 54%).

`X` tokens may have the following values of `Gender`:

* `Com` (10; 4% of non-empty `Gender`): <em>op_den_duur, Pieter_van_den_Hoogenband, Capelle_aan_den_Ijssel, Gijs_Jacobs_van_den_Hof, aan_den_dag, uit_den_treure</em>
* `Neut` (220; 96% of non-empty `Gender`): <em>aan_het, voor_het_eerst, om_het_leven, op_het_gebied_van, in_het_kader_van, het_meest, het_beste, aan_het_adres_van, in_het_leven, in_het_teken</em>
* `EMPTY` (5433): <em>Den_Haag, Verenigde_Staten, Tweede_Kamer, met_name, Integraal_Dossier_JGZ, onder_meer, in_plaats_van, in_verband_met, ten_aanzien_van, dan_ook</em>

`Gender` seems to be **lexical feature** of `X`. 100% lemmas (100) occur only with one value of `Gender`.

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>X --[<a href="../dep/cop.html">cop</a>]--> X</tt> (1; 100%),
<tt>X --[<a href="../dep/nsubj.html">nsubj</a>]--> X</tt> (1; 100%).

