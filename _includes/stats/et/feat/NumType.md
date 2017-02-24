

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

529 tokens (2%) have a non-empty value of `NumType`.
275 types (3%) occur at least once with a non-empty value of `NumType`.
188 lemmas (3%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: [et-pos/NUM]() (403; 1% instances), [et-pos/ADJ]() (126; 0% instances).

### `NUM`

403 [et-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (311; 77%), <tt><a href="NumForm.html">NumForm</a>=Letter</tt> (230; 57%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (399; 99% of non-empty `NumType`): <em>kaks, paar, kahe, üks, viis, ühe, 2, kolm, seitse, 15</em>
* `Ord` (4; 1% of non-empty `NumType`): <em>kolmandat, 2000.-2001., teise</em>

<table>
  <tr><th>Paradigm <i>2000</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing</tt></td><td><em>2000</em></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>2000.-2001.</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 99% lemmas (139) occur only with one value of `NumType`.

### `ADJ`

126 [et-pos/ADJ]() tokens (6% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (126; 100%), <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (126; 100%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (126; 100%), <tt><a href="Voice.html">Voice</a>=EMPTY</tt> (126; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (111; 88%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (126; 100% of non-empty `NumType`): <em>esimest, kolmandat, teise, 1992., esimene, esimeses, teisel, 1., 16., 2.</em>
* `EMPTY` (2144): <em>hea, suur, püha, vana, noor, terve, tugev, väike, muud, raske</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (51) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/flat.html">flat</a>]--> NUM</tt> (23; 100%),
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (18; 100%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (12; 100%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (5; 83%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (5; 100%),
<tt>ADJ --[<a href="../dep/flat.html">flat</a>]--> ADJ</tt> (1; 100%).

