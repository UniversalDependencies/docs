

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

5524 tokens (3%) have a non-empty value of `NumType`.
1019 types (3%) occur at least once with a non-empty value of `NumType`.
921 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 1 part-of-speech tags: [ro-pos/NUM]() (5524; 3% instances).

### `NUM`

5524 [ro-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="Number.html">Number</a>=Plur</tt> (4853; 88%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (4632; 84%), <tt><a href="NumForm.html">NumForm</a>=Digit</tt> (3959; 72%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (4802; 87% of non-empty `NumType`): <em>1, 2, 3, două, 4, trei, 5, 6, doi, 7</em>
* `Ord` (722; 13% of non-empty `NumType`): <em>primul, prima, I, II, doilea, doua, primele, iii, treia, ultimii</em>
* `EMPTY` (15): <em>treimi, pătrime, pătrimi, 1894, 2.437ý, 20, optime, zecime, ý10, ý15</em>

<table>
  <tr><th>Paradigm <i>doi</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="NumForm.html">NumForm</a>=Word</tt></td><td></td><td><em>doilea, secund</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="NumForm.html">NumForm</a>=Word</tt></td><td><em>doi</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="NumForm.html">NumForm</a>=Word</tt></td><td></td><td><em>doua</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="NumForm.html">NumForm</a>=Word</tt></td><td><em>două</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="NumForm.html">NumForm</a>=Roman</tt></td><td></td><td><em>II</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 98% lemmas (903) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (262; 100%),
<tt>NUM --[<a href="../dep/goeswith.html">goeswith</a>]--> NUM</tt> (67; 99%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (51; 78%),
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (38; 100%),
<tt>NUM --[<a href="../dep/nmod.html">nmod</a>]--> NUM</tt> (18; 95%),
<tt>NUM --[<a href="../dep/remnant.html">remnant</a>]--> NUM</tt> (8; 100%),
<tt>NUM --[<a href="../dep/parataxis.html">parataxis</a>]--> NUM</tt> (3; 100%),
<tt>NUM --[<a href="../dep/appos.html">appos</a>]--> NUM</tt> (2; 100%),
<tt>NUM --[<a href="../dep/mwe.html">mwe</a>]--> NUM</tt> (2; 100%),
<tt>NUM --[<a href="../dep/dep.html">dep</a>]--> NUM</tt> (1; 100%).

