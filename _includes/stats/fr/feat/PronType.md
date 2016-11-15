

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This feature is universal.
It occurs with 7 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`.

75601 tokens (19%) have a non-empty value of `PronType`.
165 types (0%) occur at least once with a non-empty value of `PronType`.
35 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: [fr-pos/DET]() (60094; 15% instances), [fr-pos/PRON]() (15505; 4% instances), [fr-pos/NOUN]() (2; 0% instances).

### `DET`

60094 [fr-pos/DET]() tokens (97% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (46471; 77%), <tt><a href="Definite.html">Definite</a>=Def</tt> (43242; 72%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (31634; 53%).

`DET` tokens may have the following values of `PronType`:

* `Art` (53399; 89% of non-empty `PronType`): <em>le, la, les, l', un, une, des, de, d', l</em>
* `Dem` (2226; 4% of non-empty `PronType`): <em>cette, ce, ces, cet</em>
* `Neg` (109; 0% of non-empty `PronType`): <em>aucun, aucune, aucunes</em>
* `Prs` (4360; 7% of non-empty `PronType`): <em>son, sa, ses, leur, leurs, notre, mon, nos, ma, votre</em>
* `EMPTY` (1672): <em>plusieurs, tous, quelques, chaque, tout, toutes, toute, du, certains, the</em>

### `PRON`

15505 [fr-pos/PRON]() tokens (86% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Person.html">Person</a>=3</tt> (10030; 65%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (9011; 58%), <tt><a href="Number.html">Number</a>=Sing</tt> (8176; 53%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (1611; 10% of non-empty `PronType`): <em>c', ce, cela, celle, celui, ceux, celui-ci, celles, ça, celle-ci</em>
* `Ind` (3; 0% of non-empty `PronType`): <em>quiconque</em>
* `Int` (1; 0% of non-empty `PronType`): <em>Que</em>
* `Neg` (12; 0% of non-empty `PronType`): <em>personne</em>
* `Prs` (10431; 67% of non-empty `PronType`): <em>il, se, s', elle, ils, lui, nous, je, le, vous</em>
* `Rel` (3447; 22% of non-empty `PronType`): <em>qui, dont, où, qu', que, lequel, laquelle, lesquels, lesquelles, ou</em>
* `EMPTY` (2524): <em>on, en, y, un, une, tout, qui, eux, rien, autres</em>

<table>
  <tr><th>Paradigm <i>que</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>qu', que</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>que, qu'</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>qu'</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>que</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>Que</em></td><td></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 97% lemmas (29) occur only with one value of `PronType`.

### `NOUN`

2 [fr-pos/NOUN]() tokens (0% of all `NOUN` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `NOUN` and `PronType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (2; 100%).

`NOUN` tokens may have the following values of `PronType`:

* `Art` (2; 100% of non-empty `PronType`): <em>Fédération, Institut</em>
* `EMPTY` (74756): <em>ans, ville, pays, partie, nom, monde, fois, région, commune, temps</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (24; 86%),
<tt>DET --[<a href="../dep/nmod:poss.html">nmod:poss</a>]--> DET</tt> (1; 100%),
<tt>PRON --[<a href="../dep/reparandum.html">reparandum</a>]--> PRON</tt> (1; 100%).

