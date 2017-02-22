

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This feature is language-specific.
It occurs with 3 different values: `Digit`, `Roman`, `Word`.

695 tokens (2%) have a non-empty value of `NumForm`.
308 types (3%) occur at least once with a non-empty value of `NumForm`.
228 lemmas (3%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 4 part-of-speech tags: [lt-pos/NUM]() (633; 2% instances), [lt-pos/ADJ]() (53; 0% instances), [lt-pos/ADV]() (6; 0% instances), [lt-pos/DET]() (3; 0% instances).

### `NUM`

633 [lt-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (480; 76%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (478; 76%), <tt><a href="NumType.html">NumType</a>=EMPTY</tt> (467; 74%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (454; 72% of non-empty `NumForm`): <em>2, 2008, 5, 1, 2009, 3, 4, 2004, 2007, 30</em>
* `Roman` (13; 2% of non-empty `NumForm`): <em>I, II, III, IV, V, VI, VII, XXI</em>
* `Word` (166; 26% of non-empty `NumForm`): <em>du, vieną, milijonų, dvi, tūkstančių, tris, abu, dviem, trijų, dešimt</em>

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (219) occur only with one value of `NumForm`.

### `ADJ`

53 [lt-pos/ADJ]() tokens (2% of all `ADJ` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `ADJ` and `NumForm` co-occurred: <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (53; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (42; 79%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (29; 55%).

`ADJ` tokens may have the following values of `NumForm`:

* `Word` (53; 100% of non-empty `NumForm`): <em>pirmo, pirmoji, pirmąją, Septintąją, antroji, antrąjį, penktoji, pirmajame, pirmasis, pirmieji</em>

### `ADV`

6 [lt-pos/ADV]() tokens (0% of all `ADV` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `ADV` and `NumForm` co-occurred: <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (6; 100%).

`ADV` tokens may have the following values of `NumForm`:

* `Word` (6; 100% of non-empty `NumForm`): <em>abejos, aštuonerius, dvejus, penkeri, trejų, vieneriems</em>

### `DET`

3 [lt-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `DET` and `NumForm` co-occurred: <tt><a href="Case.html">Case</a>=Acc</tt> (3; 100%), <tt><a href="PronType.html">PronType</a>=Tot</tt> (3; 100%), <tt><a href="NumType.html">NumType</a>=Card</tt> (3; 100%).

`DET` tokens may have the following values of `NumForm`:

* `Word` (3; 100% of non-empty `NumForm`): <em>trejetą</em>

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<a href="../dep/dep:adj.html">dep:adj</a>]--> NUM</tt> (4; 100%),
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (2; 100%),
<tt>NUM --[<a href="../dep/dep:adj_co.html">dep:adj_co</a>]--> NUM</tt> (1; 100%),
<tt>NUM --[<a href="../dep/appos.html">appos</a>]--> NUM</tt> (1; 100%).

