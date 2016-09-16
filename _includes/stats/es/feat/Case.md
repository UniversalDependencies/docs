

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish)

This feature is universal.
It occurs with 4 different values: `Acc`, `Com`, `Dat`, `Nom`.
Some words have combined values of the feature; 2 combinations have been observed: `Acc|Dat`, `Acc|Nom`.

9958 tokens (2%) have a non-empty value of `Case`.
51 types (0%) occur at least once with a non-empty value of `Case`.
5 lemmas (0%) occur at least once with a non-empty value of `Case`.
The feature is used with 2 part-of-speech tags: [es-pos/PRON]() (9943; 2% instances), [es-pos/DET]() (15; 0% instances).

### `PRON`

9943 [es-pos/PRON]() tokens (71% of all `PRON` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PRON` and `Case` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (9904; 100%), <tt><a href="Person.html">Person</a>=3</tt> (8960; 90%), <tt><a href="PrepCase.html">PrepCase</a>=Npr</tt> (8233; 83%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (7078; 71%), <tt><a href="Reflex.html">Reflex</a>=Yes</tt> (5394; 54%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (5296; 53%).

`PRON` tokens may have the following values of `Case`:

* `Acc` (2220; 22% of non-empty `Case`): <em>lo, la, los, las, sí, mí, ti</em>
* `Acc,Dat` (6068; 61% of non-empty `Case`): <em>se, me, nos, te, os</em>
* `Acc,Nom` (698; 7% of non-empty `Case`): <em>él, ellos, ella, ello, ellas, nosotros, usted, vosotros, ustedes</em>
* `Com` (8; 0% of non-empty `Case`): <em>consigo, conmigo, contigo</em>
* `Dat` (857; 9% of non-empty `Case`): <em>le, les</em>
* `Nom` (92; 1% of non-empty `Case`): <em>yo, tú</em>
* `EMPTY` (4081): <em>que, uno, cual, una, quien, esto, todo, tanto, algo, nada</em>

<table>
  <tr><th>Paradigm <i>él</i></th><th><tt>Acc,Dat</tt></th><th><tt>Acc,Nom</tt></th><th><tt>Acc</tt></th><th><tt>Dat</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Prs</tt></td><td></td><td><em>él, ello</em></td><td><em>lo</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Prs</tt></td><td></td><td><em>ellos</em></td><td><em>los</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Prs</tt></td><td></td><td><em>ella</em></td><td><em>la</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Prs</tt></td><td></td><td><em>ellas</em></td><td><em>las</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Prs</tt></td><td></td><td></td><td></td><td><em>le</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Prs</tt></td><td></td><td></td><td></td><td><em>les</em></td><td></td></tr>
  <tr><td><tt><a href="PronType.html">PronType</a>=Ind|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td></td><td></td><td><em>sí</em></td><td></td><td><em>consigo</em></td></tr>
  <tr><td><tt><a href="PronType.html">PronType</a>=Prs|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td><em>se</em></td><td></td><td></td><td></td><td></td></tr>
</table>

### `DET`

15 [es-pos/DET]() tokens (0% of all `DET` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `DET` and `Case` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (15; 100%), <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (15; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (14; 93%), <tt><a href="Number.html">Number</a>=Sing</tt> (10; 67%).

`DET` tokens may have the following values of `Case`:

* `Acc` (1; 7% of non-empty `Case`): <em>Lo</em>
* `Acc,Dat` (1; 7% of non-empty `Case`): <em>os</em>
* `Dat` (13; 87% of non-empty `Case`): <em>le, les</em>
* `EMPTY` (60857): <em>el, la, los, un, las, una, su, sus, este, esta</em>

<table>
  <tr><th>Paradigm <i>él</i></th><th><tt>Acc</tt></th><th><tt>Dat</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>Lo</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>le</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>les</em></td></tr>
</table>

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (9; 64%),
<tt>PRON --[<a href="../dep/dep.html">dep</a>]--> PRON</tt> (1; 100%).



--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish-AnCora)

This feature is universal.
It occurs with 3 different values: `Acc`, `Dat`, `Nom`.

2744 tokens (0%) have a non-empty value of `Case`.
18 types (0%) occur at least once with a non-empty value of `Case`.
4 lemmas (0%) occur at least once with a non-empty value of `Case`.
The feature is used with 1 part-of-speech tags: [es-pos/PRON]() (2744; 0% instances).

### `PRON`

2744 [es-pos/PRON]() tokens (11% of all `PRON` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PRON` and `Case` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (2744; 100%), <tt><a href="Person.html">Person</a>=3</tt> (2589; 94%), <tt><a href="Number.html">Number</a>=Sing</tt> (2181; 79%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (1516; 55%).

`PRON` tokens may have the following values of `Case`:

* `Acc` (1395; 51% of non-empty `Case`): <em>lo, la, los, le, las, les, se, Nos</em>
* `Dat` (1194; 44% of non-empty `Case`): <em>le, les, se</em>
* `Nom` (155; 6% of non-empty `Case`): <em>yo, tú</em>
* `EMPTY` (21850): <em>que, se, me, donde, nos, uno, quien, todo, él, eso</em>

<table>
  <tr><th>Paradigm <i>él</i></th><th><tt>Acc</tt></th><th><tt>Dat</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>lo, le, Les</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td><em>los, les</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td><em>la</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td><em>las</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><em>le, se, les</em></td><td><em>le, se</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td><em>les</em></td><td><em>les</em></td></tr>
  <tr><td><tt></tt></td><td><em>lo</em></td><td></td></tr>
</table>

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`:
<tt>PRON --[<a href="../dep/det.html">det</a>]--> PRON</tt> (1; 100%).

