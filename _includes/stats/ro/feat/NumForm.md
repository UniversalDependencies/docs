

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This feature is language-specific.
It occurs with 3 different values: `Digit`, `Roman`, `Word`.

1122 tokens (1%) have a non-empty value of `NumForm`.
219 types (1%) occur at least once with a non-empty value of `NumForm`.
191 lemmas (1%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 1 part-of-speech tags: [ro-pos/NUM]() (1122; 1% instances).

### `NUM`

1122 [ro-pos/NUM]() tokens (33% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="NumType.html">NumType</a>=Card</tt> (735; 66%), <tt><a href="Number.html">Number</a>=Plur</tt> (734; 65%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (631; 56%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (284; 25% of non-empty `NumForm`): <em>1, 12, 2, 100, 11, 2005, 4, 6, 15, 500</em>
* `Roman` (101; 9% of non-empty `NumForm`): <em>c, i, ii, VIII, XIX, iv, XX, v, vi, X</em>
* `Word` (737; 66% of non-empty `NumForm`): <em>două, trei, primul, doi, prima, doua, patru, doilea, primele, cinci</em>

<table>
  <tr><th>Paradigm <i>1</i></th><th><tt>Digit</tt></th><th><tt>Word</tt></th></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="NumType.html">NumType</a>=Ord</tt></td><td></td><td><em>1</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="NumType.html">NumType</a>=Card</tt></td><td><em>1, l</em></td><td></td></tr>
</table>

`NumForm` seems to be **lexical feature** of `NUM`. 95% lemmas (181) occur only with one value of `NumForm`.

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (34; 81%),
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (18; 58%),
<tt>NUM --[<a href="../dep/goeswith.html">goeswith</a>]--> NUM</tt> (8; 73%),
<tt>NUM --[<a href="../dep/cc.html">cc</a>]--> NUM</tt> (2; 100%).

