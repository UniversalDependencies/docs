---
layout: base
title:  'Statistics of PronType in UD_Spanish'
udver: '2'
---

## Treebank Statistics: UD_Spanish: Features: `PronType`

This feature is universal.
It occurs with 8 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.
Some words have combined values of the feature; 1 combinations have been observed: `Int|Rel`.

74899 tokens (17%) have a non-empty value of `PronType`.
332 types (1%) occur at least once with a non-empty value of `PronType`.
119 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="es-pos-DET.html">DET</a></tt> (60872; 14% instances), <tt><a href="es-pos-PRON.html">PRON</a></tt> (14024; 3% instances), <tt><a href="es-pos-ADV.html">ADV</a></tt> (3; 0% instances).

### `DET`

60872 <tt><a href="es-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="es-feat-Number.html">Number</a></tt><tt>=Sing</tt> (48230; 79%), <tt><a href="es-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (43522; 71%), <tt><a href="es-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (32129; 53%).

`DET` tokens may have the following values of `PronType`:

* `Art` (51173; 84% of non-empty `PronType`): <em>el, la, los, un, las, una, unos, unas, uno</em>
* `Dem` (2166; 4% of non-empty `PronType`): <em>este, esta, ese, estos, esa, estas, esos, esas, aquellos, aquella</em>
* `Ind` (2033; 3% of non-empty `PronType`): <em>otras, otros, cualquier, the, varios, otro, algunos, otra, varias, muchos</em>
* `Int,Rel` (134; 0% of non-empty `PronType`): <em>cuya, cuyo, qué, que, cuyas, cuyos, cuantas, cuantos, cuál, cuan</em>
* `Neg` (91; 0% of non-empty `PronType`): <em>ningún, ninguna, ningun</em>
* `Prs` (4379; 7% of non-empty `PronType`): <em>su, sus, mi, nuestra, nuestros, nuestro, tu, mis, tus, le</em>
* `Tot` (896; 1% of non-empty `PronType`): <em>cada, todo, todos, toda, todas, ambos, ambas</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (95) occur only with one value of `PronType`.

### `PRON`

14024 <tt><a href="es-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="es-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (9573; 68%), <tt><a href="es-feat-Person.html">Person</a></tt><tt>=3</tt> (8971; 64%), <tt><a href="es-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (8630; 62%), <tt><a href="es-feat-PrepCase.html">PrepCase</a></tt><tt>=Npr</tt> (8233; 59%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (746; 5% of non-empty `PronType`): <em>esto, tanto, este, eso, éste, esta, estos, ésta, aquellos, éstas</em>
* `Ind` (1324; 9% of non-empty `PronType`): <em>uno, una, algo, poco, mucho, otros, otro, muchos, algunos, otra</em>
* `Int,Rel` (1567; 11% of non-empty `PronType`): <em>que, cual, quien, quienes, qué, cuales, quién, cuál, cuáles, quiénes</em>
* `Neg` (156; 1% of non-empty `PronType`): <em>nada, nadie, ninguno, ninguna, Ellos, niguna</em>
* `Prs` (9927; 71% of non-empty `PronType`): <em>se, lo, le, la, me, los, nos, les, te, él</em>
* `Tot` (304; 2% of non-empty `PronType`): <em>todo, todos, ambos, ambas, todas, toda</em>

<table>
  <tr><th>Paradigm <i>él</i></th><th><tt>Prs</tt></th><th><tt>Neg</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt><tt><a href="es-feat-Case.html">Case</a></tt><tt>=Acc,Dat</tt>|<tt><a href="es-feat-PrepCase.html">PrepCase</a></tt><tt>=Npr</tt>|<tt><a href="es-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt></tt></td><td><em>se</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="es-feat-Case.html">Case</a></tt><tt>=Acc,Nom</tt>|<tt><a href="es-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="es-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>él, ello</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="es-feat-Case.html">Case</a></tt><tt>=Acc,Nom</tt>|<tt><a href="es-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="es-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>ellos</em></td><td><em>Ellos</em></td><td></td></tr>
  <tr><td><tt><tt><a href="es-feat-Case.html">Case</a></tt><tt>=Acc,Nom</tt>|<tt><a href="es-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="es-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>ella</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="es-feat-Case.html">Case</a></tt><tt>=Acc,Nom</tt>|<tt><a href="es-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="es-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>ellas</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="es-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="es-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="es-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="es-feat-PrepCase.html">PrepCase</a></tt><tt>=Npr</tt></tt></td><td><em>lo</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="es-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="es-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="es-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="es-feat-PrepCase.html">PrepCase</a></tt><tt>=Npr</tt></tt></td><td><em>los</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="es-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="es-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="es-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="es-feat-PrepCase.html">PrepCase</a></tt><tt>=Npr</tt></tt></td><td><em>la</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="es-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="es-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="es-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="es-feat-PrepCase.html">PrepCase</a></tt><tt>=Npr</tt></tt></td><td><em>las</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="es-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="es-feat-PrepCase.html">PrepCase</a></tt><tt>=Pre</tt>|<tt><a href="es-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>sí</em></td></tr>
  <tr><td><tt><tt><a href="es-feat-Case.html">Case</a></tt><tt>=Com</tt>|<tt><a href="es-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>consigo</em></td></tr>
  <tr><td><tt><tt><a href="es-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="es-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>le</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="es-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="es-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>les</em></td><td></td><td></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 94% lemmas (49) occur only with one value of `PronType`.

### `ADV`

3 <tt><a href="es-pos-ADV.html">ADV</a></tt> tokens (0% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="es-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (3; 100%), <tt><a href="es-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (3; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Ind` (3; 100% of non-empty `PronType`): <em>allí, cuando, donde</em>
* `EMPTY` (12520): <em>no, más, también, muy, donde, ya, además, así, después, sólo</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="es-dep-conj.html">conj</a></tt>]--> PRON</tt> (40; 87%),
<tt>DET --[<tt><a href="es-dep-conj.html">conj</a></tt>]--> DET</tt> (9; 69%),
<tt>DET --[<tt><a href="es-dep-nsubj.html">nsubj</a></tt>]--> DET</tt> (1; 100%),
<tt>PRON --[<tt><a href="es-dep-advmod.html">advmod</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="es-dep-dep.html">dep</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="es-dep-iobj.html">iobj</a></tt>]--> PRON</tt> (1; 100%).

