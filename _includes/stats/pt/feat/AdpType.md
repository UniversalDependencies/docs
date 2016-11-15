

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This feature is language-specific.
It occurs with 2 different values: `Prep`, `Preppron`.

36092 tokens (16%) have a non-empty value of `AdpType`.
104 types (0%) occur at least once with a non-empty value of `AdpType`.
84 lemmas (0%) occur at least once with a non-empty value of `AdpType`.
The feature is used with 3 part-of-speech tags: [pt-pos/ADP]() (35734; 16% instances), [pt-pos/ADV]() (319; 0% instances), [pt-pos/ADJ]() (39; 0% instances).

### `ADP`

35734 [pt-pos/ADP]() tokens (100% of all `ADP` tokens) have a non-empty value of `AdpType`.

`ADP` tokens may have the following values of `AdpType`:

* `Prep` (35667; 100% of non-empty `AdpType`): <em>de, em, a, por, para, com, entre, sobre, sem, até</em>
* `Preppron` (67; 0% of non-empty `AdpType`): <em>à, às, al, DA, del</em>

`AdpType` seems to be **lexical feature** of `ADP`. 100% lemmas (66) occur only with one value of `AdpType`.

### `ADV`

319 [pt-pos/ADV]() tokens (4% of all `ADV` tokens) have a non-empty value of `AdpType`.

The most frequent other feature values with which `ADV` and `AdpType` co-occurred: <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (318; 100%), <tt><a href="NumType.html">NumType</a>=EMPTY</tt> (318; 100%).

`ADV` tokens may have the following values of `AdpType`:

* `Prep` (319; 100% of non-empty `AdpType`): <em>além, apesar, quanto, dentro, cerca, acima, diante, acerca, abaixo, mais</em>

`AdpType` seems to be **lexical feature** of `ADV`. 100% lemmas (16) occur only with one value of `AdpType`.

### `ADJ`

39 [pt-pos/ADJ]() tokens (0% of all `ADJ` tokens) have a non-empty value of `AdpType`.

The most frequent other feature values with which `ADJ` and `AdpType` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (39; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (39; 100%).

`ADJ` tokens may have the following values of `AdpType`:

* `Prep` (39; 100% of non-empty `AdpType`): <em>devido, próximo, junto</em>

## Relations with Agreement in `AdpType`

The 10 most frequent relations where parent and child node agree in `AdpType`:
<tt>ADP --[<a href="../dep/mwe.html">mwe</a>]--> ADP</tt> (277; 93%),
<tt>ADV --[<a href="../dep/mwe.html">mwe</a>]--> ADP</tt> (251; 62%),
<tt>ADJ --[<a href="../dep/mwe.html">mwe</a>]--> ADP</tt> (16; 100%),
<tt>ADP --[<a href="../dep/case.html">case</a>]--> ADP</tt> (8; 89%),
<tt>ADP --[<a href="../dep/advmod.html">advmod</a>]--> ADP</tt> (1; 100%).

