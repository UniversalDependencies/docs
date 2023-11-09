---
layout: base
title:  'Statistics of PronType in UD_Portuguese-CINTIL'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-CINTIL: Features: `PronType`

This feature is universal.
It occurs with 6 different values: `Art`, `Dem`, `Ind`, `Int`, `Prs`, `Rel`.

90326 tokens (19%) have a non-empty value of `PronType`.
255 types (1%) occur at least once with a non-empty value of `PronType`.
163 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: <tt><a href="pt_cintil-pos-DET.html">DET</a></tt> (78065; 16% instances), <tt><a href="pt_cintil-pos-PRON.html">PRON</a></tt> (12261; 3% instances).

### `DET`

78065 <tt><a href="pt_cintil-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="pt_cintil-feat-Number.html">Number</a></tt><tt>=Sing</tt> (61384; 79%), <tt><a href="pt_cintil-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (61198; 78%), <tt><a href="pt_cintil-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (41600; 53%).

`DET` tokens may have the following values of `PronType`:

* `Art` (70597; 90% of non-empty `PronType`): <em>o, a, os, as, um, uma, uns, umas</em>
* `Dem` (4229; 5% of non-empty `PronType`): <em>este, esta, isso, esse, essa, isto, estes, estas, esses, aquela</em>
* `Ind` (3239; 4% of non-empty `PronType`): <em>todos, alguns, qualquer, muitos, toda, todas, algumas, cada, todo, muitas</em>

<table>
  <tr><th>Paradigm <i>tanto</i></th><th><tt>Dem</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt></tt></td><td><em>tanto</em></td><td><em>tanto</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 99% lemmas (75) occur only with one value of `PronType`.

### `PRON`

12261 <tt><a href="pt_cintil-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="pt_cintil-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (7823; 64%), <tt><a href="pt_cintil-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (7407; 60%).

`PRON` tokens may have the following values of `PronType`:

* `Ind` (702; 6% of non-empty `PronType`): <em>tudo, nada, algo, outro, outros, ninguém, outras, outra, alguém, determinado</em>
* `Int` (127; 1% of non-empty `PronType`): <em>quem, que, como, Quando, onde, porquê, qual, quantas, quanto, quê</em>
* `Prs` (7104; 58% of non-empty `PronType`): <em>-se, se, sua, seu, ele, seus, eles, eu, suas, minha</em>
* `Rel` (4328; 35% of non-empty `PronType`): <em>que, onde, quem, qual, como, cuja, quais, cujo, cujos, cujas</em>

<table>
  <tr><th>Paradigm <i>que</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>que</em></td><td><em>que</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 91% lemmas (88) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>DET --[<tt><a href="pt_cintil-dep-flat.html">flat</a></tt>]--> DET</tt> (49; 98%),
<tt>PRON --[<tt><a href="pt_cintil-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (6; 55%),
<tt>PRON --[<tt><a href="pt_cintil-dep-dep.html">dep</a></tt>]--> PRON</tt> (5; 83%),
<tt>DET --[<tt><a href="pt_cintil-dep-conj.html">conj</a></tt>]--> DET</tt> (3; 100%),
<tt>DET --[<tt><a href="pt_cintil-dep-parataxis.html">parataxis</a></tt>]--> DET</tt> (3; 75%),
<tt>DET --[<tt><a href="pt_cintil-dep-fixed.html">fixed</a></tt>]--> DET</tt> (2; 100%),
<tt>PRON --[<tt><a href="pt_cintil-dep-fixed.html">fixed</a></tt>]--> PRON</tt> (2; 100%),
<tt>DET --[<tt><a href="pt_cintil-dep-advmod.html">advmod</a></tt>]--> DET</tt> (1; 100%),
<tt>PRON --[<tt><a href="pt_cintil-dep-conj.html">conj</a></tt>]--> DET</tt> (1; 100%),
<tt>PRON --[<tt><a href="pt_cintil-dep-obl.html">obl</a></tt>]--> PRON</tt> (1; 100%).

