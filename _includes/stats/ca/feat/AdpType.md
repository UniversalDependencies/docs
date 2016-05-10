

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This feature is language-specific.
It occurs with 2 different values: `Prep`, `Preppron`.

88312 tokens (16%) have a non-empty value of `AdpType`.
92 types (0%) occur at least once with a non-empty value of `AdpType`.
82 lemmas (0%) occur at least once with a non-empty value of `AdpType`.
The feature is used with 3 part-of-speech tags: [ca-pos/ADP]() (87975; 16% instances), [ca-pos/ADV]() (336; 0% instances), [ca-pos/ADJ]() (1; 0% instances).

### `ADP`

87975 [ca-pos/ADP]() tokens (100% of all `ADP` tokens) have a non-empty value of `AdpType`.

`ADP` tokens may have the following values of `AdpType`:

* `Prep` (87854; 100% of non-empty `AdpType`): <em>de, a, d', per, en, amb, entre, sobre, segons, des</em>
* `Preppron` (121; 0% of non-empty `AdpType`): <em>dels, als, Del, al, do, da, DEL</em>

`AdpType` seems to be **lexical feature** of `ADP`. 99% lemmas (72) occur only with one value of `AdpType`.

### `ADV`

336 [ca-pos/ADV]() tokens (2% of all `ADV` tokens) have a non-empty value of `AdpType`.

The most frequent other feature values with which `ADV` and `AdpType` co-occurred: <tt><a href="Negative.html">Negative</a>=EMPTY</tt> (336; 100%).

`ADV` tokens may have the following values of `AdpType`:

* `Prep` (276; 82% of non-empty `AdpType`): <em>més, juntament, fins, quant, entorn, enllà, enmig, prop, enfront, menys</em>
* `Preppron` (60; 18% of non-empty `AdpType`): <em>més, fins, enfront, entorn, enllà, quant, prop, enmig</em>

<table>
  <tr><th>Paradigm <i>més</i></th><th><tt>Prep</tt></th><th><tt>Preppron</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>més</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>més</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>més</em></td></tr>
</table>

### `ADJ`

1 [ca-pos/ADJ]() tokens (0% of all `ADJ` tokens) have a non-empty value of `AdpType`.

The most frequent other feature values with which `ADJ` and `AdpType` co-occurred: <tt><a href="Number.html">Number</a>=EMPTY</tt> (1; 100%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (1; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (1; 100%).

`ADJ` tokens may have the following values of `AdpType`:

* `Prep` (1; 100% of non-empty `AdpType`): <em>igual</em>

## Relations with Agreement in `AdpType`

The 10 most frequent relations where parent and child node agree in `AdpType`:
<tt>ADP --[<a href="../dep/mwe.html">mwe</a>]--> ADP</tt> (2512; 99%),
<tt>ADV --[<a href="../dep/mwe.html">mwe</a>]--> ADP</tt> (123; 53%),
<tt>ADP --[<a href="../dep/case.html">case</a>]--> ADP</tt> (53; 100%),
<tt>ADV --[<a href="../dep/mwe.html">mwe</a>]--> ADV</tt> (12; 100%),
<tt>ADP --[<a href="../dep/conj.html">conj</a>]--> ADP</tt> (7; 100%),
<tt>ADP --[<a href="../dep/case.html">case</a>]--> ADV</tt> (6; 86%),
<tt>ADP --[<a href="../dep/mark.html">mark</a>]--> ADP</tt> (2; 100%),
<tt>ADP --[<a href="../dep/advmod.html">advmod</a>]--> ADP</tt> (2; 100%).

