

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This feature is universal.
It occurs with 6 different values: `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`.

25775 tokens (6%) have a non-empty value of `PronType`.
130 types (0%) occur at least once with a non-empty value of `PronType`.
34 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: [fr-pos/PRON]() (15492; 4% instances), [fr-pos/DET]() (10283; 3% instances).

### `PRON`

15492 [fr-pos/PRON]() tokens (86% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Person.html">Person</a>=3</tt> (10027; 65%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (9016; 58%), <tt><a href="Number.html">Number</a>=Sing</tt> (8163; 53%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (1614; 10% of non-empty `PronType`): <em>c', ce, cela, celle, celui, ceux, celui-ci, celles, ça, celle-ci</em>
* `Ind` (3; 0% of non-empty `PronType`): <em>quiconque</em>
* `Int` (1; 0% of non-empty `PronType`): <em>Que</em>
* `Neg` (12; 0% of non-empty `PronType`): <em>personne</em>
* `Prs` (10424; 67% of non-empty `PronType`): <em>il, se, s', elle, ils, lui, nous, je, le, vous</em>
* `Rel` (3438; 22% of non-empty `PronType`): <em>qui, dont, où, qu', que, lequel, laquelle, lesquels, lesquelles, ou</em>
* `EMPTY` (2538): <em>on, en, y, un, une, tout, qui, eux, rien, autres</em>

<table>
  <tr><th>Paradigm <i>que</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>qu', que</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>Que</em></td><td></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 97% lemmas (29) occur only with one value of `PronType`.

### `DET`

10283 [fr-pos/DET]() tokens (17% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Definite.html">Definite</a>=Ind</tt> (10172; 99%), <tt><a href="Number.html">Number</a>=Sing</tt> (7974; 78%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (5504; 54%).

`DET` tokens may have the following values of `PronType`:

* `Dem` (10172; 99% of non-empty `PronType`): <em>un, une, des, de, d', a, an, L, in</em>
* `Neg` (111; 1% of non-empty `PronType`): <em>aucune, aucun, no, aucunes</em>
* `EMPTY` (51466): <em>le, la, les, l', son, sa, cette, ses, ce, leur</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (23; 85%),
<tt>DET --[<a href="../dep/mwe.html">mwe</a>]--> DET</tt> (1; 100%).

