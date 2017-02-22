

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician-TreeGal)

This feature is universal.
It occurs with 6 different values: `Art`, `Dem`, `Ind`, `Int`, `Prs`, `Rel`.

3459 tokens (22%) have a non-empty value of `PronType`.
148 types (4%) occur at least once with a non-empty value of `PronType`.
53 lemmas (2%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: [gl-pos/DET]() (2526; 16% instances), [gl-pos/PRON]() (851; 6% instances), [gl-pos/ADV]() (82; 1% instances).

### `DET`

2526 [gl-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (1925; 76%), <tt><a href="Definite.html">Definite</a>=Def</tt> (1844; 73%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (1321; 52%).

`DET` tokens may have the following values of `PronType`:

* `Art` (2114; 84% of non-empty `PronType`): <em>o, a, os, as, un, unha, la, lo, los, unhas</em>
* `Dem` (95; 4% of non-empty `PronType`): <em>esta, este, ese, estes, esa, estas, aquel, aquela, aqueles, esas</em>
* `Ind` (167; 7% of non-empty `PronType`): <em>todo, todos, mesmo, cada, calquera, outras, outra, varios, moitos, outro</em>
* `Int` (3; 0% of non-empty `PronType`): <em>que</em>
* `Prs` (144; 6% of non-empty `PronType`): <em>súa, seu, seus, súas, nosa, meu, noso, nosos, miña, meus</em>
* `Rel` (3; 0% of non-empty `PronType`): <em>cantas, cuxa, cuxas</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (32) occur only with one value of `PronType`.

### `PRON`

851 [gl-pos/PRON]() tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Case.html">Case</a>=EMPTY</tt> (690; 81%), <tt><a href="Clitic.html">Clitic</a>=EMPTY</tt> (570; 67%), <tt><a href="Number.html">Number</a>=Sing</tt> (480; 56%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (459; 54%).

`PRON` tokens may have the following values of `PronType`:

* `Art` (66; 8% of non-empty `PronType`): <em>o, os, a, as</em>
* `Dem` (39; 5% of non-empty `PronType`): <em>iso, isto, esta, estes, este, Ese, aqueles, aquel, estas</em>
* `Ind` (89; 10% of non-empty `PronType`): <em>algo, algúns, todo, un, unha, nada, mesmo, todos, ningunha, ninguén</em>
* `Int` (17; 2% of non-empty `PronType`): <em>que, Cal, canto, Cales, Cantos, Quen</em>
* `Prs` (329; 39% of non-empty `PronType`): <em>se, lle, nos, o, me, lo, lles, elas, nós, el</em>
* `Rel` (311; 37% of non-empty `PronType`): <em>que, quen, cales, cantos</em>

<table>
  <tr><th>Paradigm <i>que</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>que</em></td><td><em>que</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>que</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>que</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>que</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Com</tt></td><td><em>que</em></td><td><em>que</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Com|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>que</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Com|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>que</em></td></tr>
</table>

### `ADV`

82 [gl-pos/ADV]() tokens (11% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (82; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Int` (9; 11% of non-empty `PronType`): <em>como, cómo, onde</em>
* `Rel` (73; 89% of non-empty `PronType`): <em>como, cando, onde</em>
* `EMPTY` (652): <em>non, máis, así, tamén, xa, moi, agora, aínda, só, ben</em>

<table>
  <tr><th>Paradigm <i>como</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>como, cómo</em></td><td><em>como</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (1; 100%).

