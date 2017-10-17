

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This feature is language-specific.
It occurs with 3 different values: `Aux`, `Cop`, `Mod`.
Some words have combined values of the feature; 1 combinations have been observed: `Aux|Cop`.

3600 tokens (2%) have a non-empty value of `VerbType`.
190 types (1%) occur at least once with a non-empty value of `VerbType`.
94 lemmas (0%) occur at least once with a non-empty value of `VerbType`.
The feature is used with 3 part-of-speech tags: [nl-pos/VERB]() (2368; 1% instances), [nl-pos/AUX]() (1211; 1% instances), [nl-pos/X]() (21; 0% instances).

### `VERB`

2368 [nl-pos/VERB]() tokens (12% of all `VERB` tokens) have a non-empty value of `VerbType`.

The most frequent other feature values with which `VERB` and `VerbType` co-occurred: <tt><a href="Subcat.html">Subcat</a>=EMPTY</tt> (2368; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (1918; 81%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (1914; 81%), <tt><a href="Aspect.html">Aspect</a>=Imp</tt> (1914; 81%), <tt><a href="Number.html">Number</a>=Sing</tt> (1464; 62%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (1416; 60%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (1284; 54%).

`VERB` tokens may have the following values of `VerbType`:

* `Mod` (2368; 100% of non-empty `VerbType`): <em>kan, kunnen, moet, heeft, moeten, kon, laten, hebben, moest, had</em>

`VerbType` seems to be **lexical feature** of `VERB`. 100% lemmas (65) occur only with one value of `VerbType`.

### `AUX`

1211 [nl-pos/AUX]() tokens (12% of all `AUX` tokens) have a non-empty value of `VerbType`.

The most frequent other feature values with which `AUX` and `VerbType` co-occurred: <tt><a href="Subcat.html">Subcat</a>=EMPTY</tt> (1211; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (1107; 91%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (1103; 91%), <tt><a href="Aspect.html">Aspect</a>=Imp</tt> (1103; 91%), <tt><a href="Number.html">Number</a>=Sing</tt> (940; 78%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (805; 66%), <tt><a href="Person.html">Person</a>=3</tt> (653; 54%).

`AUX` tokens may have the following values of `VerbType`:

* `Aux,Cop` (1211; 100% of non-empty `VerbType`): <em>is, was, zijn, heet, werd, heette, waren, ben, geweest, bleek</em>

`VerbType` seems to be **lexical feature** of `AUX`. 100% lemmas (27) occur only with one value of `VerbType`.

### `X`

21 [nl-pos/X]() tokens (0% of all `X` tokens) have a non-empty value of `VerbType`.

The most frequent other feature values with which `X` and `VerbType` co-occurred: <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (21; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (21; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (18; 86%), <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (18; 86%).

`X` tokens may have the following values of `VerbType`:

* `Aux,Cop` (14; 67% of non-empty `VerbType`): <em>het, zij</em>
* `Mod` (7; 33% of non-empty `VerbType`): <em>laat, staan, Sovjet-Unie, Zal, overleven</em>

## Relations with Agreement in `VerbType`

The 10 most frequent relations where parent and child node agree in `VerbType`:
<tt>X --[<a href="../dep/mark.html">mark</a>]--> X</tt> (5; 100%),
<tt>X --[<a href="../dep/compound.html">compound</a>]--> X</tt> (5; 100%),
<tt>AUX --[<a href="../dep/xcomp.html">xcomp</a>]--> AUX</tt> (5; 83%),
<tt>AUX --[<a href="../dep/ccomp.html">ccomp</a>]--> AUX</tt> (2; 67%),
<tt>AUX --[<a href="../dep/parataxis.html">parataxis</a>]--> AUX</tt> (2; 100%),
<tt>AUX --[<a href="../dep/conj.html">conj</a>]--> AUX</tt> (2; 100%).

