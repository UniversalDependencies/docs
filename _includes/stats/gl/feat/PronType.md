

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician-TreeGal)

This feature is universal but the values `Clit` are language-specific.
It occurs with 7 different values: `Art`, `Clit`, `Dem`, `Ind`, `Int`, `Prs`, `Rel`.

5130 tokens (21%) have a non-empty value of `PronType`.
103 types (2%) occur at least once with a non-empty value of `PronType`.
45 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 4 part-of-speech tags: [gl-pos/DET]() (3762; 16% instances), [gl-pos/PRON]() (1230; 5% instances), [gl-pos/ADV]() (136; 1% instances), [gl-pos/SCONJ]() (2; 0% instances).

### `DET`

3762 [gl-pos/DET]() tokens (95% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (2904; 77%), <tt><a href="Definite.html">Definite</a>=Def</tt> (2885; 77%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (2044; 54%).

`DET` tokens may have the following values of `PronType`:

* `Art` (3337; 89% of non-empty `PronType`): <em>o, a, os, as, un, unha, lo, la, los, uns</em>
* `Dem` (156; 4% of non-empty `PronType`): <em>esta, este, ese, esa, estes, estas, aqueles, esas, eses, aquel</em>
* `Ind` (259; 7% of non-empty `PronType`): <em>todos, todo, mesmo, outra, outros, outras, outro, toda, calquera, cada</em>
* `Int` (6; 0% of non-empty `PronType`): <em>que</em>
* `Prs` (1; 0% of non-empty `PronType`): <em>nosa</em>
* `Rel` (3; 0% of non-empty `PronType`): <em>cantas, cuxa, cuxas</em>
* `EMPTY` (216): <em>súa, seu, seus, súas, nosa, noso, meu, miña, nosos, meus</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (28) occur only with one value of `PronType`.

### `PRON`

1230 [gl-pos/PRON]() tokens (95% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Case.html">Case</a>=EMPTY</tt> (1003; 82%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (760; 62%), <tt><a href="Number.html">Number</a>=Sing</tt> (676; 55%).

`PRON` tokens may have the following values of `PronType`:

* `Art` (34; 3% of non-empty `PronType`): <em>o, a, os, as</em>
* `Clit` (469; 38% of non-empty `PronType`): <em>se, lle, nos, o, me, lo, lles, a, as, os</em>
* `Dem` (58; 5% of non-empty `PronType`): <em>iso, isto, este, estes, esta, aqueles, ese, aquel, aquela, esa</em>
* `Ind` (149; 12% of non-empty `PronType`): <em>algo, nada, todo, un, algúns, unha, outros, outro, alguén, mesmo</em>
* `Int` (24; 2% of non-empty `PronType`): <em>que, cal, quen, cales, canto, cantos</em>
* `Prs` (1; 0% of non-empty `PronType`): <em>seu</em>
* `Rel` (495; 40% of non-empty `PronType`): <em>que, quen, cales, cantos</em>
* `EMPTY` (61): <em>elas, nós, el, eu, vostede, ela, eles, si, min, ti</em>

<table>
  <tr><th>Paradigm <i>canto</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><em>canto</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td><em>cantos</em></td><td><em>cantos</em></td><td><em>cantos</em></td></tr>
</table>

### `ADV`

136 [gl-pos/ADV]() tokens (11% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Int` (11; 8% of non-empty `PronType`): <em>como, cómo, onde</em>
* `Rel` (125; 92% of non-empty `PronType`): <em>como, cando, onde</em>
* `EMPTY` (1064): <em>non, máis, tamén, xa, agora, moi, así, só, despois, sempre</em>

<table>
  <tr><th>Paradigm <i>como</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>como, cómo</em></td><td><em>como</em></td></tr>
</table>

### `SCONJ`

2 [gl-pos/SCONJ]() tokens (0% of all `SCONJ` tokens) have a non-empty value of `PronType`.

`SCONJ` tokens may have the following values of `PronType`:

* `Rel` (2; 100% of non-empty `PronType`): <em>que</em>
* `EMPTY` (561): <em>que, pero, como, se, porque, aínda_que, mais, senón, pois, coma</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (3; 60%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (1; 100%).

