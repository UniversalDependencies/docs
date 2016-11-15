

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish-AnCora)

This feature is language-specific.
It occurs with 2 different values: `Prep`, `Preppron`.

88490 tokens (16%) have a non-empty value of `AdpType`.
113 types (0%) occur at least once with a non-empty value of `AdpType`.
82 lemmas (0%) occur at least once with a non-empty value of `AdpType`.
The feature is used with 3 part-of-speech tags: [es-pos/ADP]() (88049; 16% instances), [es-pos/ADV]() (254; 0% instances), [es-pos/ADJ]() (187; 0% instances).

### `ADP`

88049 [es-pos/ADP]() tokens (100% of all `ADP` tokens) have a non-empty value of `AdpType`.

`ADP` tokens may have the following values of `AdpType`:

* `Prep` (87973; 100% of non-empty `AdpType`): <em>de, en, a, por, con, para, entre, sobre, sin, desde</em>
* `Preppron` (76; 0% of non-empty `AdpType`): <em>Al, da, Del, do, dels, DEL, als, de, pelo</em>

<table>
  <tr><th>Paradigm <i>de</i></th><th><tt>Prep</tt></th><th><tt>Preppron</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>de</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>de</em></td></tr>
</table>

`AdpType` seems to be **lexical feature** of `ADP`. 98% lemmas (59) occur only with one value of `AdpType`.

### `ADV`

254 [es-pos/ADV]() tokens (1% of all `ADV` tokens) have a non-empty value of `AdpType`.

The most frequent other feature values with which `ADV` and `AdpType` co-occurred: <tt><a href="Negative.html">Negative</a>=EMPTY</tt> (254; 100%).

`ADV` tokens may have the following values of `AdpType`:

* `Prep` (198; 78% of non-empty `AdpType`): <em>además, encima, debajo, acerca, después, dentro, detrás, aparte, delante, menos</em>
* `Preppron` (56; 22% of non-empty `AdpType`): <em>además, debajo, acerca, detrás, encima, después, dentro, lejos, alrededor, delante</em>

<table>
  <tr><th>Paradigm <i>después</i></th><th><tt>Prep</tt></th><th><tt>Preppron</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>después</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>después</em></td></tr>
</table>

### `ADJ`

187 [es-pos/ADJ]() tokens (1% of all `ADJ` tokens) have a non-empty value of `AdpType`.

The most frequent other feature values with which `ADJ` and `AdpType` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (187; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (152; 81%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (152; 81%).

`ADJ` tokens may have the following values of `AdpType`:

* `Prep` (152; 81% of non-empty `AdpType`): <em>junto, debido, gran, nuevo</em>
* `Preppron` (35; 19% of non-empty `AdpType`): <em>junto, debido, mismo</em>

<table>
  <tr><th>Paradigm <i>junto</i></th><th><tt>Prep</tt></th><th><tt>Preppron</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>junto</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>junto</em></td></tr>
</table>

## Relations with Agreement in `AdpType`

The 10 most frequent relations where parent and child node agree in `AdpType`:
<tt>ADP --[<a href="../dep/mwe.html">mwe</a>]--> ADP</tt> (1494; 100%),
<tt>ADJ --[<a href="../dep/mwe.html">mwe</a>]--> ADP</tt> (150; 77%),
<tt>ADV --[<a href="../dep/mwe.html">mwe</a>]--> ADP</tt> (136; 58%),
<tt>ADP --[<a href="../dep/case.html">case</a>]--> ADP</tt> (102; 99%),
<tt>ADP --[<a href="../dep/advmod.html">advmod</a>]--> ADP</tt> (3; 60%),
<tt>ADP --[<a href="../dep/case.html">case</a>]--> ADV</tt> (2; 100%),
<tt>ADP --[<a href="../dep/conj.html">conj</a>]--> ADP</tt> (2; 100%),
<tt>ADP --[<a href="../dep/case.html">case</a>]--> ADJ</tt> (1; 100%),
<tt>ADP --[<a href="../dep/compound.html">compound</a>]--> ADP</tt> (1; 100%),
<tt>ADP --[<a href="../dep/mark.html">mark</a>]--> ADP</tt> (1; 100%).

