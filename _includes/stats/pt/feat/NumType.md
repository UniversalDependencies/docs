

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This feature is universal.
It occurs with 6 different values: `Card`, `Frac`, `Mult`, `Ord`, `Range`, `Sets`.

4870 tokens (2%) have a non-empty value of `NumType`.
908 types (4%) occur at least once with a non-empty value of `NumType`.
863 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: [pt-pos/NUM]() (4095; 2% instances), [pt-pos/ADJ]() (775; 0% instances).

### `NUM`

4095 [pt-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (3957; 97% of non-empty `NumType`): <em>um, dois, três, mil, uma, duas, quatro, cinco, 15, 30</em>
* `Frac` (5; 0% of non-empty `NumType`): <em>meia</em>
* `Mult` (129; 3% of non-empty `NumType`): <em>cento</em>
* `Ord` (1; 0% of non-empty `NumType`): <em>quinta</em>
* `Range` (2; 0% of non-empty `NumType`): <em>07.00-09.00, 10.00-12.00</em>
* `Sets` (1; 0% of non-empty `NumType`): <em>dúzia</em>
* `EMPTY` (2): <em>meia, mil</em>

<table>
  <tr><th>Paradigm <i>dúzia</i></th><th><tt>Card</tt></th><th><tt>Sets</tt></th></tr>
  <tr><td><tt></tt></td><td><em>dúzia</em></td><td><em>dúzia</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (780) occur only with one value of `NumType`.

### `ADJ`

775 [pt-pos/ADJ]() tokens (7% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (652; 84%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (457; 59%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (775; 100% of non-empty `NumType`): <em>primeiro, primeira, último, última, segundo, últimos, segunda, primeiros, terceiro, terceira</em>
* `EMPTY` (10510): <em>maior, novo, grande, nova, mesmo, melhor, grandes, nacional, mesma, passado</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (82) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (104; 100%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (52; 100%),
<tt>NUM --[<a href="../dep/dep.html">dep</a>]--> NUM</tt> (51; 96%),
<tt>NUM --[<a href="../dep/nmod.html">nmod</a>]--> NUM</tt> (47; 100%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (17; 85%),
<tt>NUM --[<a href="../dep/fixed.html">fixed</a>]--> NUM</tt> (2; 100%),
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (1; 100%),
<tt>NUM --[<a href="../dep/appos.html">appos</a>]--> NUM</tt> (1; 100%),
<tt>ADJ --[<a href="../dep/compound.html">compound</a>]--> ADJ</tt> (1; 100%).



--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This feature is universal.
It occurs with 1 different values: `Card`.

7639 tokens (3%) have a non-empty value of `NumType`.
1585 types (5%) occur at least once with a non-empty value of `NumType`.
1 lemmas (20%) occur at least once with a non-empty value of `NumType`.
The feature is used with 1 part-of-speech tags: [pt-pos/NUM]() (7639; 3% instances).

### `NUM`

7639 [pt-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (7639; 100% of non-empty `NumType`): <em>dois, três, mil, duas, milhões, 2012, 1, quatro, 2, bilhões</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (523; 100%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (217; 100%),
<tt>NUM --[<a href="../dep/nmod.html">nmod</a>]--> NUM</tt> (184; 100%),
<tt>NUM --[<a href="../dep/appos.html">appos</a>]--> NUM</tt> (15; 100%),
<tt>NUM --[<a href="../dep/dep.html">dep</a>]--> NUM</tt> (3; 100%),
<tt>NUM --[<a href="../dep/cc.html">cc</a>]--> NUM</tt> (1; 100%),
<tt>NUM --[<a href="../dep/case.html">case</a>]--> NUM</tt> (1; 100%),
<tt>NUM --[<a href="../dep/flat.html">flat</a>]--> NUM</tt> (1; 100%).

