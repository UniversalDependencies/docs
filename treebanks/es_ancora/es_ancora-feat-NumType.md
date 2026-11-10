---
layout: base
title:  'Statistics of NumType in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Frac`, `Ord`.

11910 tokens (2%) have a non-empty value of `NumType`.
1738 types (4%) occur at least once with a non-empty value of `NumType`.
1646 lemmas (6%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (9168; 2% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> (2012; 0% instances), <tt><a href="es_ancora-pos-DET.html">DET</a></tt> (496; 0% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (234; 0% instances).

### `NUM`

9168 <tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="es_ancora-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (6308; 69%), <tt><a href="es_ancora-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (5471; 60%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (9166; 100% of non-empty `NumType`): <em>dos, ciento, tres, cinco, cuatro, seis, 20, 30, ambos, siete</em>
* `Frac` (2; 0% of non-empty `NumType`): <em>1-0</em>
* `EMPTY` (15): <em>20.00, 17.30, 1.30, 11.00, 11.30, 18.00, 18.45, 19.00, 19.20, 2.45</em>

<table>
  <tr><th>Paradigm <i>1-0</i></th><th><tt>Card</tt></th><th><tt>Frac</tt></th></tr>
  <tr><td><tt></tt></td><td><em>1-0</em></td><td><em>1-0</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (1607) occur only with one value of `NumType`.

### `ADJ`

2012 <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> tokens (5% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="es_ancora-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (2012; 100%), <tt><a href="es_ancora-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1577; 78%), <tt><a href="es_ancora-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (1119; 56%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (2012; 100% of non-empty `NumType`): <em>primer, primera, últimos, segunda, segundo, último, última, primeros, últimas, primero</em>
* `EMPTY` (34888): <em>pasado, gran, nuevo, nueva, mayor, próximo, mejor, general, ex, posible</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (28) occur only with one value of `NumType`.

### `DET`

496 <tt><a href="es_ancora-pos-DET.html">DET</a></tt> tokens (1% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="es_ancora-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (480; 97%), <tt><a href="es_ancora-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (395; 80%), <tt><a href="es_ancora-feat-Number.html">Number</a></tt><tt>=Plur</tt> (313; 63%).

`DET` tokens may have the following values of `NumType`:

* `Card` (496; 100% of non-empty `NumType`): <em>muchos, muchas, mucha, pocos, mucho, pocas, poca, tanta, tantas, tanto</em>
* `EMPTY` (83957): <em>el, la, los, un, las, una, su, sus, este, esta</em>

### `PRON`

234 <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> tokens (1% of all `PRON` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PRON` and `NumType` co-occurred: <tt><a href="es_ancora-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (234; 100%), <tt><a href="es_ancora-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (234; 100%), <tt><a href="es_ancora-feat-PrepCase.html">PrepCase</a></tt><tt>=EMPTY</tt> (234; 100%), <tt><a href="es_ancora-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (234; 100%), <tt><a href="es_ancora-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (205; 88%), <tt><a href="es_ancora-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (161; 69%), <tt><a href="es_ancora-feat-Number.html">Number</a></tt><tt>=Sing</tt> (129; 55%).

`PRON` tokens may have the following values of `NumType`:

* `Card` (234; 100% of non-empty `NumType`): <em>muchos, tanto, poco, muchas, pocos, mucho, cuanto, cuánto, tanta, cuántos</em>
* `EMPTY` (24968): <em>que, se, lo, le, me, nos, uno, quien, la, les</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="es_ancora-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (468; 100%),
<tt>NUM --[<tt><a href="es_ancora-dep-conj.html">conj</a></tt>]--> NUM</tt> (197; 100%),
<tt>NUM --[<tt><a href="es_ancora-dep-compound.html">compound</a></tt>]--> NUM</tt> (158; 100%),
<tt>NUM --[<tt><a href="es_ancora-dep-appos.html">appos</a></tt>]--> NUM</tt> (30; 100%),
<tt>ADJ --[<tt><a href="es_ancora-dep-conj.html">conj</a></tt>]--> ADJ</tt> (16; 73%),
<tt>NUM --[<tt><a href="es_ancora-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (13; 100%),
<tt>NUM --[<tt><a href="es_ancora-dep-list.html">list</a></tt>]--> NUM</tt> (10; 100%),
<tt>ADJ --[<tt><a href="es_ancora-dep-list.html">list</a></tt>]--> ADJ</tt> (3; 100%),
<tt>NUM --[<tt><a href="es_ancora-dep-advcl.html">advcl</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="es_ancora-dep-obl.html">obl</a></tt>]--> NUM</tt> (1; 100%).

