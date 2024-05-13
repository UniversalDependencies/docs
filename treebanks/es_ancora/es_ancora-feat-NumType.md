---
layout: base
title:  'Statistics of NumType in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Frac`, `Ord`.

11814 tokens (2%) have a non-empty value of `NumType`.
1744 types (4%) occur at least once with a non-empty value of `NumType`.
1652 lemmas (6%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (9180; 2% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> (1960; 0% instances), <tt><a href="es_ancora-pos-DET.html">DET</a></tt> (496; 0% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (178; 0% instances).

### `NUM`

9180 <tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="es_ancora-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (6319; 69%), <tt><a href="es_ancora-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (5473; 60%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (9172; 100% of non-empty `NumType`): <em>dos, ciento, tres, cinco, cuatro, seis, 20, 30, ambos, siete</em>
* `Frac` (8; 0% of non-empty `NumType`): <em>cada, 1-0</em>

<table>
  <tr><th>Paradigm <i>1-0</i></th><th><tt>Card</tt></th><th><tt>Frac</tt></th></tr>
  <tr><td><tt></tt></td><td><em>1-0</em></td><td><em>1-0</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (1614) occur only with one value of `NumType`.

### `ADJ`

1960 <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> tokens (5% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="es_ancora-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (1960; 100%), <tt><a href="es_ancora-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1534; 78%), <tt><a href="es_ancora-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (1099; 56%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (1960; 100% of non-empty `NumType`): <em>primer, primera, últimos, segunda, segundo, último, última, primeros, últimas, tercera</em>
* `EMPTY` (34467): <em>pasado, gran, nuevo, mayor, próximo, nueva, mejor, general, ex, posible</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (31) occur only with one value of `NumType`.

### `DET`

496 <tt><a href="es_ancora-pos-DET.html">DET</a></tt> tokens (1% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="es_ancora-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (480; 97%), <tt><a href="es_ancora-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (395; 80%), <tt><a href="es_ancora-feat-Number.html">Number</a></tt><tt>=Plur</tt> (313; 63%).

`DET` tokens may have the following values of `NumType`:

* `Card` (496; 100% of non-empty `NumType`): <em>muchos, muchas, mucha, pocos, mucho, pocas, poca, tanta, tantas, tanto</em>
* `EMPTY` (83929): <em>el, la, los, un, las, una, su, sus, este, esta</em>

### `PRON`

178 <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> tokens (1% of all `PRON` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PRON` and `NumType` co-occurred: <tt><a href="es_ancora-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (178; 100%), <tt><a href="es_ancora-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (178; 100%), <tt><a href="es_ancora-feat-PrepCase.html">PrepCase</a></tt><tt>=EMPTY</tt> (178; 100%), <tt><a href="es_ancora-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (178; 100%), <tt><a href="es_ancora-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (158; 89%), <tt><a href="es_ancora-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (149; 84%), <tt><a href="es_ancora-feat-Number.html">Number</a></tt><tt>=Plur</tt> (104; 58%).

`PRON` tokens may have the following values of `NumType`:

* `Card` (178; 100% of non-empty `NumType`): <em>muchos, poco, muchas, pocos, mucho, cuanto, cuánto, tanta, cuántos, Deu</em>
* `EMPTY` (25006): <em>que, se, lo, le, me, nos, uno, quien, la, les</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="es_ancora-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (468; 100%),
<tt>NUM --[<tt><a href="es_ancora-dep-conj.html">conj</a></tt>]--> NUM</tt> (199; 100%),
<tt>NUM --[<tt><a href="es_ancora-dep-compound.html">compound</a></tt>]--> NUM</tt> (162; 96%),
<tt>NUM --[<tt><a href="es_ancora-dep-appos.html">appos</a></tt>]--> NUM</tt> (24; 100%),
<tt>ADJ --[<tt><a href="es_ancora-dep-conj.html">conj</a></tt>]--> ADJ</tt> (16; 73%),
<tt>NUM --[<tt><a href="es_ancora-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (15; 100%),
<tt>NUM --[<tt><a href="es_ancora-dep-list.html">list</a></tt>]--> NUM</tt> (10; 100%),
<tt>ADJ --[<tt><a href="es_ancora-dep-list.html">list</a></tt>]--> ADJ</tt> (3; 100%),
<tt>NUM --[<tt><a href="es_ancora-dep-advcl.html">advcl</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="es_ancora-dep-obl.html">obl</a></tt>]--> NUM</tt> (1; 100%).

