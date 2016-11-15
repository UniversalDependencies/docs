

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This feature is universal.
It occurs with 4 different values: `Card`, `Dist`, `Frac`, `Ord`.

1299 tokens (3%) have a non-empty value of `NumType`.
448 types (3%) occur at least once with a non-empty value of `NumType`.
373 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: [hu-pos/NUM]() (1115; 3% instances), [hu-pos/ADJ]() (184; 0% instances).

### `NUM`

1115 [hu-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (1112; 100%), <tt><a href="Case.html">Case</a>=Nom</tt> (1005; 90%), <tt><a href="Number[psed].html">Number[psed]</a>=EMPTY</tt> (639; 57%), <tt><a href="Person[psor].html">Person[psor]</a>=EMPTY</tt> (635; 57%), <tt><a href="Number[psor].html">Number[psor]</a>=EMPTY</tt> (635; 57%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (1003; 90% of non-empty `NumType`): <em>két, milliárd, millió, egy, három, több, ezer, négy, 30, 10</em>
* `Dist` (5; 0% of non-empty `NumType`): <em>egy-egy, 50-50</em>
* `Frac` (107; 10% of non-empty `NumType`): <em>fél, másfél, 3,5, 8,25, 2,5, 2,6, 4,2, 6,3, 7,2, 0,7</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (328) occur only with one value of `NumType`.

### `ADJ`

184 [hu-pos/ADJ]() tokens (3% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (184; 100%), <tt><a href="Case.html">Case</a>=Nom</tt> (184; 100%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (184; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (183; 99%), <tt><a href="Person[psor].html">Person[psor]</a>=None</tt> (112; 61%), <tt><a href="Number[psor].html">Number[psor]</a>=None</tt> (112; 61%), <tt><a href="Number[psed].html">Number[psed]</a>=None</tt> (112; 61%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (184; 100% of non-empty `NumType`): <em>első, második, 2000., 1999., I., harmadik, negyedik, 1992., 1998., 2.</em>
* `EMPTY` (5359): <em>magyar, új, orosz, nagy, gazdasági, százalékos, parlamenti, jövő, nemzetközi, politikai</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (45) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (105; 73%),
<tt>NUM --[<a href="../dep/remnant.html">remnant</a>]--> NUM</tt> (21; 100%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (14; 88%),
<tt>NUM --[<a href="../dep/amod:att.html">amod:att</a>]--> NUM</tt> (12; 80%),
<tt>NUM --[<a href="../dep/nmod:obl.html">nmod:obl</a>]--> NUM</tt> (4; 80%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (2; 67%),
<tt>NUM --[<a href="../dep/advcl.html">advcl</a>]--> NUM</tt> (1; 100%),
<tt>ADJ --[<a href="../dep/remnant.html">remnant</a>]--> ADJ</tt> (1; 100%).

