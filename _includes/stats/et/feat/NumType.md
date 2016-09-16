

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

5329 tokens (2%) have a non-empty value of `NumType`.
1362 types (3%) occur at least once with a non-empty value of `NumType`.
1016 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: [et-pos/NUM]() (4131; 2% instances), [et-pos/ADJ]() (1187; 1% instances), [et-pos/X]() (8; 0% instances), [et-pos/SYM]() (3; 0% instances).

### `NUM`

4131 [et-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (3195; 77%), <tt><a href="NumForm.html">NumForm</a>=Digit</tt> (2132; 52%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (4127; 100% of non-empty `NumType`): <em>kaks, kolm, 000, üks, kahe, miljonit, ühe, paar, viis, neli</em>
* `Ord` (4; 0% of non-empty `NumType`): <em>kolmandat, 2000.-2001., teise</em>

<table>
  <tr><th>Paradigm <i>2000</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Number.html">Number</a>=Sing</tt></td><td><em>2000</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing</tt></td><td><em>2000</em></td><td></td></tr>
  <tr><td><tt></tt></td><td><em>2000</em></td><td><em>2000.-2001.</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (772) occur only with one value of `NumType`.

### `ADJ`

1187 [et-pos/ADJ]() tokens (6% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (1187; 100%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (1187; 100%), <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (1187; 100%), <tt><a href="Voice.html">Voice</a>=EMPTY</tt> (1187; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (975; 82%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (1187; 100% of non-empty `NumType`): <em>esimene, esimese, esimest, teine, 1., teise, teist, esimesel, esimesed, teisel</em>
* `EMPTY` (18234): <em>kogu, suur, hea, sama, iga, võimalik, suurem, eesti, selline, uue</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (253) occur only with one value of `NumType`.

### `X`

8 [et-pos/X]() tokens (9% of all `X` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `X` and `NumType` co-occurred: <tt><a href="Abbr.html">Abbr</a>=EMPTY</tt> (8; 100%), <tt><a href="Foreign.html">Foreign</a>=EMPTY</tt> (8; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (6; 75%), <tt><a href="Case.html">Case</a>=Nom</tt> (5; 63%).

`X` tokens may have the following values of `NumType`:

* `Ord` (8; 100% of non-empty `NumType`): <em>I</em>
* `EMPTY` (82): <em>of, in, tõ, versus, Proopusk, jesh, mõ, ne, sol, stupai</em>

### `SYM`

3 [et-pos/SYM]() tokens (3% of all `SYM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `SYM` and `NumType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (3; 100%), <tt><a href="Abbr.html">Abbr</a>=EMPTY</tt> (3; 100%), <tt><a href="Case.html">Case</a>=Nom</tt> (3; 100%).

`SYM` tokens may have the following values of `NumType`:

* `Card` (3; 100% of non-empty `NumType`): <em>%</em>
* `EMPTY` (102): <em>&amp;, C5, U, AB, sulev@ekspress.ee, &, D66, anne@ekspress.ee, x, °C</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (337; 100%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (156; 100%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (73; 100%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (26; 90%),
<tt>SYM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (3; 100%),
<tt>X --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (1; 100%).

