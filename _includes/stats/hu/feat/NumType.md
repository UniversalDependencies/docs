

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This feature is universal.
It occurs with 4 different values: `Card`, `Dist`, `Frac`, `Ord`.

889 tokens (3%) have a non-empty value of `NumType`.
338 types (3%) occur at least once with a non-empty value of `NumType`.
289 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: [hu-pos/NUM]() (787; 2% instances), [hu-pos/ADJ]() (102; 0% instances).

### `NUM`

787 [hu-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (785; 100%), <tt><a href="Case.html">Case</a>=Nom</tt> (709; 90%), <tt><a href="Number[psed].html">Number[psed]</a>=EMPTY</tt> (439; 56%), <tt><a href="Person[psor].html">Person[psor]</a>=EMPTY</tt> (435; 55%), <tt><a href="Number[psor].html">Number[psor]</a>=EMPTY</tt> (435; 55%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (718; 91% of non-empty `NumType`): <em>két, milliárd, millió, egy, három, ezer, több, négy, 30, 10</em>
* `Dist` (4; 1% of non-empty `NumType`): <em>egy-egy, 50-50</em>
* `Frac` (65; 8% of non-empty `NumType`): <em>fél, 8,25, 3,5, másfél, 2,6, 4,2, 0,7, 1,1, 1,12, 1,2</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (255) occur only with one value of `NumType`.

### `ADJ`

102 [hu-pos/ADJ]() tokens (2% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Case.html">Case</a>=Nom</tt> (102; 100%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (102; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (102; 100%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (102; 100%), <tt><a href="Person[psor].html">Person[psor]</a>=None</tt> (54; 53%), <tt><a href="Number[psor].html">Number[psor]</a>=None</tt> (54; 53%), <tt><a href="Number[psed].html">Number[psed]</a>=None</tt> (54; 53%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (102; 100% of non-empty `NumType`): <em>első, 2000., 1999., I., második, 1992., 1998., 1949., 1997., II.</em>
* `EMPTY` (4130): <em>magyar, új, parlamenti, nagy, orosz, című, jövő, szerb, százalékos, nemzetközi</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (34) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (79; 76%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (10; 91%),
<tt>NUM --[<a href="../dep/amod:att.html">amod:att</a>]--> NUM</tt> (7; 78%),
<tt>NUM --[<a href="../dep/nmod:obl.html">nmod:obl</a>]--> NUM</tt> (3; 75%),
<tt>NUM --[<a href="../dep/advcl.html">advcl</a>]--> NUM</tt> (1; 100%).

