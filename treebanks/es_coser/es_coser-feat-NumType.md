---
layout: base
title:  'Statistics of NumType in UD_Spanish-COSER'
udver: '2'
---

## Treebank Statistics: UD_Spanish-COSER: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

135 tokens (2%) have a non-empty value of `NumType`.
53 types (4%) occur at least once with a non-empty value of `NumType`.
41 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="es_coser-pos-NUM.html">NUM</a></tt> (91; 1% instances), <tt><a href="es_coser-pos-DET.html">DET</a></tt> (33; 0% instances), <tt><a href="es_coser-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="es_coser-pos-PRON.html">PRON</a></tt> (5; 0% instances).

### `NUM`

91 <tt><a href="es_coser-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="es_coser-feat-Number.html">Number</a></tt><tt>=Plur</tt> (83; 91%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (91; 100% of non-empty `NumType`): <em>dos, cinco, cuarenta, cuatro, siete, tres, cincuenta, ocho, diez, nueve</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (29) occur only with one value of `NumType`.

### `DET`

33 <tt><a href="es_coser-pos-DET.html">DET</a></tt> tokens (4% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="es_coser-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (33; 100%), <tt><a href="es_coser-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (25; 76%), <tt><a href="es_coser-feat-Number.html">Number</a></tt><tt>=Sing</tt> (21; 64%), <tt><a href="es_coser-feat-Gender.html">Gender</a></tt><tt>=Fem</tt> (19; 58%).

`DET` tokens may have the following values of `NumType`:

* `Card` (33; 100% of non-empty `NumType`): <em>mucha, mucho, muchos, tanta, Cuántos, cuantas, cuantos, demasiada, muchas, muchísima</em>
* `EMPTY` (706): <em>la, el, un, una, las, los, mi, todo, otra, su</em>

### `ADJ`

6 <tt><a href="es_coser-pos-ADJ.html">ADJ</a></tt> tokens (3% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="es_coser-feat-Number.html">Number</a></tt><tt>=Sing</tt> (6; 100%), <tt><a href="es_coser-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (6; 100%), <tt><a href="es_coser-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (5; 83%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (6; 100% of non-empty `NumType`): <em>segundo, primer, primero, segunda, último</em>
* `EMPTY` (167): <em>grande, buen, buena, bueno, natural, criollo, diferente, joven, mismo, Enrazao</em>

### `PRON`

5 <tt><a href="es_coser-pos-PRON.html">PRON</a></tt> tokens (1% of all `PRON` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PRON` and `NumType` co-occurred: <tt><a href="es_coser-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (5; 100%), <tt><a href="es_coser-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (5; 100%), <tt><a href="es_coser-feat-PrepCase.html">PrepCase</a></tt><tt>=EMPTY</tt> (5; 100%), <tt><a href="es_coser-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (5; 100%), <tt><a href="es_coser-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (4; 80%), <tt><a href="es_coser-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (3; 60%), <tt><a href="es_coser-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3; 60%).

`PRON` tokens may have the following values of `NumType`:

* `Card` (5; 100% of non-empty `NumType`): <em>poco, Cuántos, poca, pocas</em>
* `EMPTY` (899): <em>se, lo, yo, que, eso, le, te, me, cómo, qué</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="es_coser-dep-conj.html">conj</a></tt>]--> NUM</tt> (11; 100%),
<tt>NUM --[<tt><a href="es_coser-dep-compound.html">compound</a></tt>]--> NUM</tt> (6; 100%),
<tt>NUM --[<tt><a href="es_coser-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (3; 100%),
<tt>NUM --[<tt><a href="es_coser-dep-reparandum.html">reparandum</a></tt>]--> NUM</tt> (1; 100%).

