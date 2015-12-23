

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This feature is universal.
It occurs with 4 different values: `Card`, `Dist`, `Frac`, `Ord`.

588 tokens (2%) have a non-empty value of `NumType`.
246 types (3%) occur at least once with a non-empty value of `NumType`.
220 lemmas (3%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: [hu-pos/NUM]() (476; 2% instances), [hu-pos/ADJ]() (112; 0% instances).

### `NUM`

476 [hu-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (476; 100%), <tt><a href="Number[psed].html">Number[psed]</a>=None</tt> (476; 100%), <tt><a href="Number[psor].html">Number[psor]</a>=None</tt> (475; 100%), <tt><a href="Person[psor].html">Person[psor]</a>=None</tt> (475; 100%), <tt><a href="Case.html">Case</a>=Nom</tt> (436; 92%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (436; 92% of non-empty `NumType`): <em>két, egy, három, millió, ezer, tíz, 30, négy, hat, száz</em>
* `Dist` (4; 1% of non-empty `NumType`): <em>egy-egy, 50-50</em>
* `Frac` (36; 8% of non-empty `NumType`): <em>fél, másfél, 8,25, 0,7, 1,12, 1,8, 10,1, 107,5, 12,2, 2,3</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (182) occur only with one value of `NumType`.

### `ADJ`

112 [hu-pos/ADJ]() tokens (3% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (112; 100%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (112; 100%), <tt><a href="Case.html">Case</a>=Nom</tt> (112; 100%), <tt><a href="Number[psor].html">Number[psor]</a>=None</tt> (112; 100%), <tt><a href="Number[psed].html">Number[psed]</a>=None</tt> (112; 100%), <tt><a href="Person[psor].html">Person[psor]</a>=None</tt> (112; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (111; 99%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (112; 100% of non-empty `NumType`): <em>első, második, 2000., I., 2., negyedik, 14., 33., XVIII., ötödik</em>
* `EMPTY` (3185): <em>magyar, új, című, orosz, nagy, olyan, egész, cseh, elmúlt, jó</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (38) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (21; 75%),
<tt>NUM --[<a href="../dep/remnant.html">remnant</a>]--> NUM</tt> (8; 100%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (7; 78%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (2; 67%),
<tt>ADJ --[<a href="../dep/remnant.html">remnant</a>]--> ADJ</tt> (1; 100%).

