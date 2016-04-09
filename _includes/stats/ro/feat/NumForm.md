

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This feature is language-specific.
It occurs with 2 different values: `Roman`, `Word`.

135 tokens (1%) have a non-empty value of `NumForm`.
59 types (1%) occur at least once with a non-empty value of `NumForm`.
59 lemmas (2%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 1 part-of-speech tags: [ro-pos/NUM]() (135; 1% instances).

### `NUM`

135 [ro-pos/NUM]() tokens (34% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="NumType.html">NumType</a>=Card</tt> (135; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (86; 64%), <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (79; 59%), <tt><a href="Number.html">Number</a>=Sing</tt> (77; 57%).

`NUM` tokens may have the following values of `NumForm`:

* `Roman` (29; 21% of non-empty `NumForm`): <em>I, XX, II, IV, V, III, VI, VII, VIII, X</em>
* `Word` (106; 79% of non-empty `NumForm`): <em>primul, prima, trei, două, primele, doua, patru, doilea, prim-, sute</em>

<table>
  <tr><th>Paradigm <i>doi</i></th><th><tt>Roman</tt></th><th><tt>Word</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>doi</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>doua</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>două</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><em>II</em></td><td></td></tr>
</table>

`NumForm` seems to be **lexical feature** of `NUM`. 93% lemmas (55) occur only with one value of `NumForm`.

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (5; 100%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (2; 100%).

