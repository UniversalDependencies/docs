

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This feature is universal.
It occurs with 2 different values: `Cmp`, `Sup`.

1377 tokens (1%) have a non-empty value of `Degree`.
60 types (0%) occur at least once with a non-empty value of `Degree`.
25 lemmas (0%) occur at least once with a non-empty value of `Degree`.
The feature is used with 4 part-of-speech tags: [pt-pos/ADV]() (489; 0% instances), [pt-pos/DET]() (408; 0% instances), [pt-pos/ADJ]() (353; 0% instances), [pt-pos/PRON]() (127; 0% instances).

### `ADV`

489 [pt-pos/ADV]() tokens (5% of all `ADV` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADV` and `Degree` co-occurred: <tt><a href="PronType.html">PronType</a>=Ind,Neg,Tot</tt> (466; 95%), <tt><a href="NumType.html">NumType</a>=Card</tt> (466; 95%).

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (480; 98% of non-empty `Degree`): <em>mais, menos, tão, tanto, melhor, assim, pior, superiormente</em>
* `Sup` (9; 2% of non-empty `Degree`): <em>melhor, Pior</em>
* `EMPTY` (8416): <em>não, como, já, também, ontem, mais, ainda, quando, só, depois</em>

<table>
  <tr><th>Paradigm <i>melhor</i></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>melhor</em></td><td><em>melhor</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 92% lemmas (11) occur only with one value of `Degree`.

### `DET`

408 [pt-pos/DET]() tokens (1% of all `DET` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `DET` and `Degree` co-occurred: <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (408; 100%), <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (319; 78%), <tt><a href="Number.html">Number</a>=Sing</tt> (220; 54%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (219; 54%).

`DET` tokens may have the following values of `Degree`:

* `Cmp` (407; 100% of non-empty `Degree`): <em>outros, outras, outro, outra, mais, mesma, mesmo, menos, tal, tais</em>
* `Sup` (1; 0% of non-empty `Degree`): <em>muitíssimo</em>
* `EMPTY` (33036): <em>o, a, os, as, um, uma, sua, seu, este, esta</em>

### `ADJ`

353 [pt-pos/ADJ]() tokens (3% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (267; 76%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (185; 52%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (203; 58% of non-empty `Degree`): <em>maior, maiores, melhor, menor, menores, melhores, superiores, superior, inferior, inferiores</em>
* `Sup` (150; 42% of non-empty `Degree`): <em>melhor, principal, principais, melhores, pior, mínimo, ótimo, superior, piores, péssimo</em>
* `EMPTY` (10523): <em>grande, primeiro, novo, primeira, nova, grandes, último, nacional, última, segundo</em>

<table>
  <tr><th>Paradigm <i>grande</i></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>maior</em></td><td><em>máximo</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td><em>maiores</em></td><td><em>máximos</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td><em>maior</em></td><td><em>máxima</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td><em>maiores</em></td><td></td></tr>
</table>

### `PRON`

127 [pt-pos/PRON]() tokens (2% of all `PRON` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `PRON` and `Degree` co-occurred: <tt><a href="Person.html">Person</a>=EMPTY</tt> (127; 100%), <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (127; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (127; 100%), <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (91; 72%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (76; 60%).

`PRON` tokens may have the following values of `Degree`:

* `Cmp` (127; 100% of non-empty `Degree`): <em>mais, outros, mesmo, outras, outro, outra, mesma, menos, tal, tanto</em>
* `EMPTY` (7501): <em>que, se, a, o, ele, o_que, os, isso, quem, lhe</em>

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (2; 67%).

