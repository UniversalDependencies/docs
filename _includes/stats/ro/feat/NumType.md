

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

2523 tokens (2%) have a non-empty value of `NumType`.
380 types (2%) occur at least once with a non-empty value of `NumType`.
352 lemmas (3%) occur at least once with a non-empty value of `NumType`.
The feature is used with 1 part-of-speech tags: [ro-pos/NUM]() (2523; 2% instances).

### `NUM`

2523 [ro-pos/NUM]() tokens (75% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (2008; 80%), <tt><a href="NumForm.html">NumForm</a>=EMPTY</tt> (1402; 56%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (1389; 55%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (2137; 85% of non-empty `NumType`): <em>1, 2, 3, 4, 5, 6, două, 7, trei, 1999</em>
* `Ord` (386; 15% of non-empty `NumType`): <em>primul, prima, doua, c, i, doilea, primele, ii, ultimul, dintâi</em>
* `EMPTY` (847): <em>2, 4, 5, 3, 1, două, trei, 20, 10, 15</em>

<table>
  <tr><th>Paradigm <i>1</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>1</em></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="NumForm.html">NumForm</a>=Word</tt></td><td></td><td><em>1</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="NumForm.html">NumForm</a>=Digit</tt></td><td><em>1, l</em></td><td></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 95% lemmas (335) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (143; 95%),
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (19; 61%),
<tt>NUM --[<a href="../dep/goeswith.html">goeswith</a>]--> NUM</tt> (10; 77%),
<tt>NUM --[<a href="../dep/nmod.html">nmod</a>]--> NUM</tt> (3; 100%),
<tt>NUM --[<a href="../dep/remnant.html">remnant</a>]--> NUM</tt> (2; 100%),
<tt>NUM --[<a href="../dep/cc.html">cc</a>]--> NUM</tt> (2; 100%),
<tt>NUM --[<a href="../dep/list.html">list</a>]--> NUM</tt> (1; 100%).

