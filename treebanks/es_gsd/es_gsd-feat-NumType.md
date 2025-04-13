---
layout: base
title:  'Statistics of NumType in UD_Spanish-GSD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-GSD: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

13041 tokens (3%) have a non-empty value of `NumType`.
2530 types (6%) occur at least once with a non-empty value of `NumType`.
2359 lemmas (7%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="es_gsd-pos-NUM.html">NUM</a></tt> (11061; 3% instances), <tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt> (1033; 0% instances), <tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (539; 0% instances), <tt><a href="es_gsd-pos-DET.html">DET</a></tt> (408; 0% instances).

### `NUM`

11061 <tt><a href="es_gsd-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="es_gsd-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (9433; 85%), <tt><a href="es_gsd-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (8953; 81%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (11061; 100% of non-empty `NumType`): <em>dos, tres, 2010, 0, cuatro, 3, 1, 2, 10, 4</em>
* `EMPTY` (1): <em>727-200</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (2303) occur only with one value of `NumType`.

### `ADJ`

1033 <tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt> tokens (4% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="es_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt> (886; 86%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (1033; 100% of non-empty `NumType`): <em>primera, primer, segunda, segundo, tercera, primeros, primeras, tercer, cuarto, cuarta</em>
* `EMPTY` (23959): <em>gran, mismo, mayor, nuevo, estadounidense, total, mejor, nacional, grandes, nueva</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (49) occur only with one value of `NumType`.

### `PRON`

539 <tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> tokens (4% of all `PRON` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PRON` and `NumType` co-occurred: <tt><a href="es_gsd-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (539; 100%), <tt><a href="es_gsd-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (539; 100%), <tt><a href="es_gsd-feat-PrepCase.html">PrepCase</a></tt><tt>=EMPTY</tt> (539; 100%), <tt><a href="es_gsd-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (539; 100%), <tt><a href="es_gsd-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (358; 66%), <tt><a href="es_gsd-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (352; 65%), <tt><a href="es_gsd-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (318; 59%).

`PRON` tokens may have the following values of `NumType`:

* `Card` (539; 100% of non-empty `NumType`): <em>tanto, poco, mucho, muchos, ambos, bastante, muchas, demasiado, ambas, pocos</em>
* `EMPTY` (13507): <em>se, lo, que, le, la, me, uno, cual, los, nos</em>

`NumType` seems to be **lexical feature** of `PRON`. 100% lemmas (12) occur only with one value of `NumType`.

### `DET`

408 <tt><a href="es_gsd-pos-DET.html">DET</a></tt> tokens (1% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="es_gsd-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (408; 100%), <tt><a href="es_gsd-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (314; 77%), <tt><a href="es_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt> (294; 72%), <tt><a href="es_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (209; 51%).

`DET` tokens may have the following values of `NumType`:

* `Card` (408; 100% of non-empty `NumType`): <em>muchos, muchas, ambos, mucha, pocos, poco, ambas, mucho, poca, tanto</em>
* `EMPTY` (60479): <em>el, la, los, un, las, una, su, sus, este, esta</em>

`NumType` seems to be **lexical feature** of `DET`. 100% lemmas (13) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="es_gsd-dep-conj.html">conj</a></tt>]--> NUM</tt> (353; 100%),
<tt>NUM --[<tt><a href="es_gsd-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (115; 100%),
<tt>NUM --[<tt><a href="es_gsd-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (100; 100%),
<tt>NUM --[<tt><a href="es_gsd-dep-dep.html">dep</a></tt>]--> NUM</tt> (49; 100%),
<tt>NUM --[<tt><a href="es_gsd-dep-appos.html">appos</a></tt>]--> NUM</tt> (16; 100%),
<tt>ADJ --[<tt><a href="es_gsd-dep-conj.html">conj</a></tt>]--> ADJ</tt> (7; 64%),
<tt>NUM --[<tt><a href="es_gsd-dep-compound.html">compound</a></tt>]--> NUM</tt> (1; 100%).

