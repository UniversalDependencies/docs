

--------------------------------------------------------------------------------

## Treebank Statistics

This feature is universal.
It occurs with 2 different values: `Cmp`, `Sup`.

1376 tokens (1%) have a non-empty value of `Degree`.
61 types (0%) occur at least once with a non-empty value of `Degree`.
26 lemmas (0%) occur at least once with a non-empty value of `Degree`.
The feature is used with 4 part-of-speech tags: [pt-pos/ADV]() (488; 0% instances), [pt-pos/DET]() (415; 0% instances), [pt-pos/ADJ]() (353; 0% instances), [pt-pos/PRON]() (120; 0% instances).

### `ADV`

488 [pt-pos/ADV]() tokens (5% of all `ADV` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADV` and `Degree` co-occurred: <tt><a href="NumType.html">NumType</a>=Card</tt> (465; 95%), <tt><a href="PronType.html">PronType</a>=Ind,Neg,Tot</tt> (465; 95%).

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (479; 98% of non-empty `Degree`): _mais, menos, tão, tanto, melhor, assim, pior, superiormente, nada_mais_nada_menos_
* `Sup` (9; 2% of non-empty `Degree`): _melhor, Pior_
* `EMPTY` (9001): _não, como, também, já, ontem, ainda, quando, só, depois, muito_

<table>
  <tr><th>Paradigm <i>melhor</i></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><i>melhor</i></td><td><i>melhor</i></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 92% lemmas (12) occur only with one value of `Degree`.

### `DET`

415 [pt-pos/DET]() tokens (1% of all `DET` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `DET` and `Degree` co-occurred: <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (415; 100%), <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (321; 77%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (226; 54%), <tt><a href="Number.html">Number</a>=Sing</tt> (222; 53%).

`DET` tokens may have the following values of `Degree`:

* `Cmp` (414; 100% of non-empty `Degree`): _outros, outras, outro, mais, outra, mesmo, mesma, menos, tal, tais_
* `Sup` (1; 0% of non-empty `Degree`): _muitíssimo_
* `EMPTY` (32805): _o, a, os, as, um, uma, sua, seu, este, esta_

### `ADJ`

353 [pt-pos/ADJ]() tokens (3% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (267; 76%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (185; 52%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (203; 58% of non-empty `Degree`): _maior, maiores, melhor, menor, menores, melhores, superiores, superior, inferior, inferiores_
* `Sup` (150; 42% of non-empty `Degree`): _melhor, principal, principais, melhores, pior, mínimo, ótimo, superior, piores, péssimo_
* `EMPTY` (10355): _primeiro, novo, primeira, grande, nova, grandes, último, nacional, última, segundo_

<table>
  <tr><th>Paradigm <i>grande</i></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><i>maior</i></td><td><i>máximo</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td><i>maiores</i></td><td><i>máximos</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td><i>maior</i></td><td><i>máxima</i></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td><i>maiores</i></td><td></td></tr>
</table>

### `PRON`

120 [pt-pos/PRON]() tokens (2% of all `PRON` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `PRON` and `Degree` co-occurred: <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (120; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (120; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (120; 100%), <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (89; 74%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (69; 57%).

`PRON` tokens may have the following values of `Degree`:

* `Cmp` (120; 100% of non-empty `Degree`): _outros, mais, mesmo, outras, outro, outra, mesma, tal, menos, tanto_
* `EMPTY` (6986): _que, se, o, ele, o_que, isso, os, quem, lhe, a_

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`: `PRON --[conj]--> ADJ` (1; 100%).

