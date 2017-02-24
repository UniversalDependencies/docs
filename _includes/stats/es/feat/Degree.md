

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish)

This feature is universal.
It occurs with 3 different values: `Abs`, `Cmp`, `Sup`.

2117 tokens (1%) have a non-empty value of `Degree`.
60 types (0%) occur at least once with a non-empty value of `Degree`.
40 lemmas (0%) occur at least once with a non-empty value of `Degree`.
The feature is used with 4 part-of-speech tags: [es-pos/ADV]() (1530; 0% instances), [es-pos/ADJ]() (573; 0% instances), [es-pos/PRON]() (11; 0% instances), [es-pos/DET]() (3; 0% instances).

### `ADV`

1530 [es-pos/ADV]() tokens (13% of all `ADV` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADV` and `Degree` co-occurred: <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (1530; 100%).

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (1530; 100% of non-empty `Degree`): <em>más, menos</em>
* `EMPTY` (10566): <em>no, también, muy, donde, ya, además, así, después, sólo, bien</em>

### `ADJ`

573 [es-pos/ADJ]() tokens (2% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (468; 82%), <tt><a href="Number.html">Number</a>=Sing</tt> (430; 75%).

`ADJ` tokens may have the following values of `Degree`:

* `Abs` (31; 5% of non-empty `Degree`): <em>Santísima, buenísimas, aceleradísimo, altísima, altísimo, bellísima, buenísima, buenísimo, completísima, contentísima</em>
* `Cmp` (465; 81% of non-empty `Degree`): <em>mayor, mejor, mejores, mayores, menor, menores, peor, peores</em>
* `Sup` (77; 13% of non-empty `Degree`): <em>máximo, máxima, mínima, mínimo, mínimas, óptimo, máximas, máximos, mínimos, óptima</em>
* `EMPTY` (23651): <em>gran, primera, primer, mismo, nuevo, estadounidense, total, grandes, nacional, nueva</em>

`Degree` seems to be **lexical feature** of `ADJ`. 100% lemmas (34) occur only with one value of `Degree`.

### `PRON`

11 [es-pos/PRON]() tokens (0% of all `PRON` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `PRON` and `Degree` co-occurred: <tt><a href="PrepCase.html">PrepCase</a>=EMPTY</tt> (11; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (11; 100%), <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (11; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (11; 100%), <tt><a href="PronType.html">PronType</a>=Ind</tt> (11; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (10; 91%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (10; 91%).

`PRON` tokens may have the following values of `Degree`:

* `Abs` (8; 73% of non-empty `Degree`): <em>muchísimo, muchisimo, muchisimio</em>
* `Cmp` (3; 27% of non-empty `Degree`): <em>menos, más</em>
* `EMPTY` (13561): <em>se, lo, que, le, la, me, uno, cual, los, nos</em>

### `DET`

3 [es-pos/DET]() tokens (0% of all `DET` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `DET` and `Degree` co-occurred: <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (3; 100%), <tt><a href="Gender.html">Gender</a>=Fem</tt> (3; 100%), <tt><a href="Number.html">Number</a>=Plur</tt> (3; 100%), <tt><a href="PronType.html">PronType</a>=Ind</tt> (3; 100%).

`DET` tokens may have the following values of `Degree`:

* `Abs` (3; 100% of non-empty `Degree`): <em>muchísimas, muchisimas</em>
* `EMPTY` (59167): <em>el, la, los, un, las, una, su, sus, este, esta</em>

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (17; 94%),
<tt>ADV --[<a href="../dep/nsubj.html">nsubj</a>]--> PRON</tt> (1; 100%).

