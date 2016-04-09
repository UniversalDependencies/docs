

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

137 tokens (1%) have a non-empty value of `NumType`.
90 types (2%) occur at least once with a non-empty value of `NumType`.
80 lemmas (2%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: [et-pos/NUM]() (119; 1% instances), [et-pos/ADJ]() (18; 0% instances).

### `NUM`

119 [et-pos/NUM]() tokens (98% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="NumForm.html">NumForm</a>=Word</tt> (89; 75%), <tt><a href="Number.html">Number</a>=Sing</tt> (86; 72%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (104; 87% of non-empty `NumType`): <em>kaks, kahest, kahe, neli, paar, pool, kahte, kolme, kolmekümne, kuussada</em>
* `Ord` (15; 13% of non-empty `NumType`): <em>1992., kolmandat, 1991., 1959., 1990., 2000.-2001., kaheksandal, teine, teise</em>
* `EMPTY` (2): <em>50_000, kuue</em>

<table>
  <tr><th>Paradigm <i>1990+0</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt></tt></td><td><em>1990</em></td><td><em>1990.</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 99% lemmas (69) occur only with one value of `NumType`.

### `ADJ`

18 [et-pos/ADJ]() tokens (4% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (18; 100%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (18; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (17; 94%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (18; 100% of non-empty `NumType`): <em>teise, kolmandale, kolmandat, Esimene, Kolmas, Teisel, esimese, esimesest, esimest, esimestes</em>
* `EMPTY` (462): <em>suur, tugev, kogu, suurest, valged, viimase, hingetuks, musta, noor, raske</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (12) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (7; 100%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (2; 100%).

