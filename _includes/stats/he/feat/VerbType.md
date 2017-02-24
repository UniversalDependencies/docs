

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This feature is language-specific.
It occurs with 2 different values: `Cop`, `Mod`.

2408 tokens (2%) have a non-empty value of `VerbType`.
130 types (1%) occur at least once with a non-empty value of `VerbType`.
48 lemmas (1%) occur at least once with a non-empty value of `VerbType`.
The feature is used with 2 part-of-speech tags: [he-pos/VERB]() (1624; 1% instances), [he-pos/AUX]() (784; 1% instances).

### `VERB`

1624 [he-pos/VERB]() tokens (11% of all `VERB` tokens) have a non-empty value of `VerbType`.

The most frequent other feature values with which `VERB` and `VerbType` co-occurred: <tt><a href="HebBinyan.html">HebBinyan</a>=EMPTY</tt> (1624; 100%), <tt><a href="Voice.html">Voice</a>=EMPTY</tt> (1624; 100%), <tt><a href="Person.html">Person</a>=3</tt> (1482; 91%), <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (1319; 81%), <tt><a href="Number.html">Number</a>=Sing</tt> (1171; 72%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (862; 53%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (840; 52%).

`VERB` tokens may have the following values of `VerbType`:

* `Cop` (1624; 100% of non-empty `VerbType`): היה, היו, היא, הוא, היתה, אינו, יהיה, להיות, אינה, אינם

### `AUX`

784 [he-pos/AUX]() tokens (100% of all `AUX` tokens) have a non-empty value of `VerbType`.

The most frequent other feature values with which `AUX` and `VerbType` co-occurred: <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (683; 87%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (679; 87%), <tt><a href="Number.html">Number</a>=Sing</tt> (447; 57%), <tt><a href="Person.html">Person</a>=1,2,3</tt> (442; 56%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (418; 53%).

`AUX` tokens may have the following values of `VerbType`:

* `Mod` (784; 100% of non-empty `VerbType`): אפשר, יש, יכול, צריך, ייתכן, אין, קשה, יכולה, ניתן, עלול

`VerbType` seems to be **lexical feature** of `AUX`. 100% lemmas (42) occur only with one value of `VerbType`.

## Relations with Agreement in `VerbType`

The 10 most frequent relations where parent and child node agree in `VerbType`:
<tt>AUX --[<a href="../dep/conj.html">conj</a>]--> AUX</tt> (15; 100%),
<tt>AUX --[<a href="../dep/obl.html">obl</a>]--> AUX</tt> (6; 100%),
<tt>AUX --[<a href="../dep/advcl.html">advcl</a>]--> AUX</tt> (2; 100%),
<tt>AUX --[<a href="../dep/ccomp.html">ccomp</a>]--> AUX</tt> (1; 100%),
<tt>AUX --[<a href="../dep/conj:discourse.html">conj:discourse</a>]--> AUX</tt> (1; 100%),
<tt>AUX --[<a href="../dep/dep.html">dep</a>]--> AUX</tt> (1; 100%).

