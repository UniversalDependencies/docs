

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This feature is language-specific.
It occurs with 3 different values: `Aux`, `Cop`, `Mod`.
Some words have combined values of the feature; 1 combinations have been observed: `Aux|Cop`.

10541 tokens (5%) have a non-empty value of `VerbType`.
204 types (1%) occur at least once with a non-empty value of `VerbType`.
104 lemmas (1%) occur at least once with a non-empty value of `VerbType`.
The feature is used with 3 part-of-speech tags: [nl-pos/AUX]() (6797; 3% instances), [nl-pos/VERB]() (3721; 2% instances), [nl-pos/X]() (23; 0% instances).

### `AUX`

6797 [nl-pos/AUX]() tokens (59% of all `AUX` tokens) have a non-empty value of `VerbType`.

The most frequent other feature values with which `AUX` and `VerbType` co-occurred: <tt><a href="Subcat.html">Subcat</a>=EMPTY</tt> (6797; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (5970; 88%), <tt><a href="Aspect.html">Aspect</a>=Imp</tt> (5958; 88%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (5958; 88%), <tt><a href="Number.html">Number</a>=Sing</tt> (4961; 73%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (4119; 61%).

`AUX` tokens may have the following values of `VerbType`:

* `Aux,Cop` (6797; 100% of non-empty `VerbType`): <em>is, was, zijn, worden, werd, wordt, waren, werden, ben, heet</em>

`VerbType` seems to be **lexical feature** of `AUX`. 100% lemmas (34) occur only with one value of `VerbType`.

### `VERB`

3721 [nl-pos/VERB]() tokens (19% of all `VERB` tokens) have a non-empty value of `VerbType`.

The most frequent other feature values with which `VERB` and `VerbType` co-occurred: <tt><a href="Subcat.html">Subcat</a>=EMPTY</tt> (3721; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (3190; 86%), <tt><a href="Aspect.html">Aspect</a>=Imp</tt> (3186; 86%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (3186; 86%), <tt><a href="Number.html">Number</a>=Sing</tt> (2426; 65%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (2239; 60%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (2018; 54%).

`VERB` tokens may have the following values of `VerbType`:

* `Mod` (3721; 100% of non-empty `VerbType`): <em>zal, zou, kan, kunnen, moet, heeft, wil, moeten, zullen, willen</em>

`VerbType` seems to be **lexical feature** of `VERB`. 100% lemmas (68) occur only with one value of `VerbType`.

### `X`

23 [nl-pos/X]() tokens (0% of all `X` tokens) have a non-empty value of `VerbType`.

The most frequent other feature values with which `X` and `VerbType` co-occurred: <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (23; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (23; 100%), <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (20; 87%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (20; 87%).

`X` tokens may have the following values of `VerbType`:

* `Aux,Cop` (14; 61% of non-empty `VerbType`): <em>het, zij</em>
* `Mod` (9; 39% of non-empty `VerbType`): <em>laat, staan, Sovjet-Unie, Zal, overleven</em>

## Relations with Agreement in `VerbType`

The 10 most frequent relations where parent and child node agree in `VerbType`:
<tt>AUX --[<a href="../dep/conj.html">conj</a>]--> AUX</tt> (46; 100%),
<tt>AUX --[<a href="../dep/parataxis.html">parataxis</a>]--> AUX</tt> (11; 100%),
<tt>X --[<a href="../dep/compound.html">compound</a>]--> X</tt> (6; 100%),
<tt>X --[<a href="../dep/mark.html">mark</a>]--> X</tt> (5; 100%),
<tt>AUX --[<a href="../dep/cc.html">cc</a>]--> AUX</tt> (2; 100%),
<tt>AUX --[<a href="../dep/csubj.html">csubj</a>]--> AUX</tt> (2; 67%),
<tt>AUX --[<a href="../dep/dep.html">dep</a>]--> AUX</tt> (1; 100%).

