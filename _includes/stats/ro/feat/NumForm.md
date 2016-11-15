

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This feature is language-specific.
It occurs with 3 different values: `Digit`, `Roman`, `Word`.

5476 tokens (3%) have a non-empty value of `NumForm`.
1014 types (3%) occur at least once with a non-empty value of `NumForm`.
920 lemmas (5%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 1 part-of-speech tags: [ro-pos/NUM]() (5476; 3% instances).

### `NUM`

5476 [ro-pos/NUM]() tokens (99% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="Number.html">Number</a>=Plur</tt> (4810; 88%), <tt><a href="NumType.html">NumType</a>=Card</tt> (4745; 87%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (4623; 84%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (3959; 72% of non-empty `NumForm`): <em>1, 2, 3, 4, 5, 6, 7, 8, 2004, 10</em>
* `Roman` (234; 4% of non-empty `NumForm`): <em>I, II, iii, iv, V, XX, XIX, VI, VII, XIII</em>
* `Word` (1283; 23% of non-empty `NumForm`): <em>două, trei, primul, doi, prima, patru, cinci, doilea, doua, primele</em>

<table>
  <tr><th>Paradigm <i>doi</i></th><th><tt>Roman</tt></th><th><tt>Word</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="NumType.html">NumType</a>=Ord</tt></td><td></td><td><em>doilea, secund</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="NumType.html">NumType</a>=Card</tt></td><td></td><td><em>doi</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="NumType.html">NumType</a>=Ord</tt></td><td></td><td><em>doua</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="NumType.html">NumType</a>=Card</tt></td><td></td><td><em>două</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="NumType.html">NumType</a>=Ord</tt></td><td><em>II</em></td><td></td></tr>
</table>

`NumForm` seems to be **lexical feature** of `NUM`. 98% lemmas (904) occur only with one value of `NumForm`.

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (262; 100%),
<tt>NUM --[<a href="../dep/goeswith.html">goeswith</a>]--> NUM</tt> (68; 100%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (36; 55%),
<tt>NUM --[<a href="../dep/nmod.html">nmod</a>]--> NUM</tt> (16; 84%),
<tt>NUM --[<a href="../dep/remnant.html">remnant</a>]--> NUM</tt> (8; 100%),
<tt>NUM --[<a href="../dep/amod.html">amod</a>]--> NUM</tt> (4; 67%),
<tt>NUM --[<a href="../dep/parataxis.html">parataxis</a>]--> NUM</tt> (2; 67%),
<tt>NUM --[<a href="../dep/mwe.html">mwe</a>]--> NUM</tt> (2; 100%),
<tt>NUM --[<a href="../dep/appos.html">appos</a>]--> NUM</tt> (2; 100%),
<tt>NUM --[<a href="../dep/dep.html">dep</a>]--> NUM</tt> (1; 100%).

