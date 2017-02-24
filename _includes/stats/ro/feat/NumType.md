

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

5082 tokens (3%) have a non-empty value of `NumType`.
977 types (3%) occur at least once with a non-empty value of `NumType`.
877 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 1 part-of-speech tags: [ro-pos/NUM]() (5082; 3% instances).

### `NUM`

5082 [ro-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="Number.html">Number</a>=Plur</tt> (4457; 88%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (4253; 84%), <tt><a href="NumForm.html">NumForm</a>=Digit</tt> (3631; 71%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (4410; 87% of non-empty `NumType`): <em>1, 2, 3, două, 4, trei, 5, 6, doi, 7</em>
* `Ord` (672; 13% of non-empty `NumType`): <em>primul, prima, I, ii, doilea, doua, primele, iii, treia, ultimii</em>
* `EMPTY` (12): <em>pătrime, pătrimi, treimi, 1894, 20, zecime, ý10, ý15, ý5</em>

<table>
  <tr><th>Paradigm <i>doi</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt><a href="Foreign.html">Foreign</a>=Yes|<a href="Number.html">Number</a>=Sing|<a href="NumForm.html">NumForm</a>=Roman</tt></td><td></td><td><em>II</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="NumForm.html">NumForm</a>=Word</tt></td><td></td><td><em>doilea, secund</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="NumForm.html">NumForm</a>=Word</tt></td><td><em>doi</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="NumForm.html">NumForm</a>=Word</tt></td><td></td><td><em>doua</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="NumForm.html">NumForm</a>=Word</tt></td><td><em>două</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="NumForm.html">NumForm</a>=Roman</tt></td><td></td><td><em>ii</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 98% lemmas (859) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (235; 100%),
<tt>NUM --[<a href="../dep/goeswith.html">goeswith</a>]--> NUM</tt> (73; 97%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (66; 80%),
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (35; 100%),
<tt>NUM --[<a href="../dep/parataxis.html">parataxis</a>]--> NUM</tt> (3; 100%),
<tt>NUM --[<a href="../dep/appos.html">appos</a>]--> NUM</tt> (1; 100%),
<tt>NUM --[<a href="../dep/fixed.html">fixed</a>]--> NUM</tt> (1; 100%),
<tt>NUM --[<a href="../dep/acl.html">acl</a>]--> NUM</tt> (1; 100%),
<tt>NUM --[<a href="../dep/dep.html">dep</a>]--> NUM</tt> (1; 100%),
<tt>NUM --[<a href="../dep/nmod.html">nmod</a>]--> NUM</tt> (1; 100%).

