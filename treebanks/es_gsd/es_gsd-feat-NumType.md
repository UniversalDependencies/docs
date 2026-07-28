---
layout: base
title:  'Statistics of NumType in UD_Spanish-GSD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-GSD: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

13113 tokens (3%) have a non-empty value of `NumType`.
2532 types (6%) occur at least once with a non-empty value of `NumType`.
2352 lemmas (7%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="es_gsd-pos-NUM.html">NUM</a></tt> (11057; 3% instances), <tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt> (1103; 0% instances), <tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (541; 0% instances), <tt><a href="es_gsd-pos-DET.html">DET</a></tt> (412; 0% instances).

### `NUM`

11057 <tt><a href="es_gsd-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="es_gsd-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (9429; 85%), <tt><a href="es_gsd-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (8949; 81%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (11057; 100% of non-empty `NumType`): <em>dos, tres, 2010, 0, cuatro, 3, 1, 2, 10, 4</em>
* `EMPTY` (1): <em>727-200</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (2302) occur only with one value of `NumType`.

### `ADJ`

1103 <tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt> tokens (4% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="es_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt> (931; 84%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (1103; 100% of non-empty `NumType`): <em>primera, primer, segunda, segundo, primeros, tercera, primeras, tercer, cuarto, cuarta</em>
* `EMPTY` (24444): <em>gran, san, nuevo, nueva, mismo, mayor, estadounidense, total, mejor, grandes</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (45) occur only with one value of `NumType`.

### `PRON`

541 <tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> tokens (4% of all `PRON` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PRON` and `NumType` co-occurred: <tt><a href="es_gsd-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (541; 100%), <tt><a href="es_gsd-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (541; 100%), <tt><a href="es_gsd-feat-PrepCase.html">PrepCase</a></tt><tt>=EMPTY</tt> (541; 100%), <tt><a href="es_gsd-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (541; 100%), <tt><a href="es_gsd-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (317; 59%), <tt><a href="es_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (298; 55%).

`PRON` tokens may have the following values of `NumType`:

* `Card` (541; 100% of non-empty `NumType`): <em>tanto, poco, mucho, muchos, ambos, bastante, muchas, demasiado, ambas, pocos</em>
* `EMPTY` (13503): <em>se, lo, que, le, la, me, uno, cual, los, nos</em>

`NumType` seems to be **lexical feature** of `PRON`. 100% lemmas (11) occur only with one value of `NumType`.

### `DET`

412 <tt><a href="es_gsd-pos-DET.html">DET</a></tt> tokens (1% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="es_gsd-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (412; 100%), <tt><a href="es_gsd-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (314; 76%), <tt><a href="es_gsd-feat-Number.html">Number</a></tt><tt>=Plur</tt> (296; 72%), <tt><a href="es_gsd-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (217; 53%).

`DET` tokens may have the following values of `NumType`:

* `Card` (412; 100% of non-empty `NumType`): <em>muchos, muchas, ambos, mucha, pocos, poco, ambas, mucho, poca, tanto</em>
* `EMPTY` (60481): <em>el, la, los, un, las, una, su, sus, este, esta</em>

`NumType` seems to be **lexical feature** of `DET`. 100% lemmas (13) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="es_gsd-dep-conj.html">conj</a></tt>]--> NUM</tt> (353; 100%),
<tt>NUM --[<tt><a href="es_gsd-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (115; 100%),
<tt>NUM --[<tt><a href="es_gsd-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (100; 100%),
<tt>NUM --[<tt><a href="es_gsd-dep-dep.html">dep</a></tt>]--> NUM</tt> (49; 100%),
<tt>NUM --[<tt><a href="es_gsd-dep-appos.html">appos</a></tt>]--> NUM</tt> (16; 100%),
<tt>ADJ --[<tt><a href="es_gsd-dep-conj.html">conj</a></tt>]--> ADJ</tt> (7; 58%),
<tt>NUM --[<tt><a href="es_gsd-dep-compound.html">compound</a></tt>]--> NUM</tt> (1; 100%).

