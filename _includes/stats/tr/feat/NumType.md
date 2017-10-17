

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This feature is universal.
It occurs with 3 different values: `Card`, `Dist`, `Ord`.

1707 tokens (4%) have a non-empty value of `NumType`.
235 types (2%) occur at least once with a non-empty value of `NumType`.
163 lemmas (3%) occur at least once with a non-empty value of `NumType`.
The feature is used with 1 part-of-speech tags: [tr-pos/NUM]() (1707; 4% instances).

### `NUM`

1707 [tr-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="Number.html">Number</a>=EMPTY</tt> (1439; 84%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (1439; 84%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (1439; 84%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (1674; 98% of non-empty `NumType`): <em>bir, iki, bin, üç, on, beş, dört, yüzde, milyon, altı</em>
* `Dist` (9; 1% of non-empty `NumType`): <em>birer, ikişer, otuzbeşer, yirmisekizer</em>
* `Ord` (24; 1% of non-empty `NumType`): <em>birincisi, ikincisi, birinci, dokuz., oniki., onikinci., onsekiz., onyedi., yetmişaltı., yirmiüç'üncü</em>

<table>
  <tr><th>Paradigm <i>bir</i></th><th><tt>Card</tt></th><th><tt>Dist</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>bir, ,bir</em></td><td><em>birer</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Person[psor].html">Person[psor]</a>=3</tt></td><td><em>birini</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>biri</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Person[psor].html">Person[psor]</a>=3</tt></td><td><em>birine</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Person[psor].html">Person[psor]</a>=3</tt></td><td><em>birinde</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing|<a href="Number[psor].html">Number[psor]</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Person[psor].html">Person[psor]</a>=3</tt></td><td><em>biri</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>bir</em></td><td></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 96% lemmas (156) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/flat.html">flat</a>]--> NUM</tt> (136; 99%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (11; 100%),
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (8; 100%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (3; 100%),
<tt>NUM --[<a href="../dep/compound:redup.html">compound:redup</a>]--> NUM</tt> (2; 100%),
<tt>NUM --[<a href="../dep/case.html">case</a>]--> NUM</tt> (2; 100%),
<tt>NUM --[<a href="../dep/nmod:poss.html">nmod:poss</a>]--> NUM</tt> (1; 100%),
<tt>NUM --[<a href="../dep/appos.html">appos</a>]--> NUM</tt> (1; 100%).

