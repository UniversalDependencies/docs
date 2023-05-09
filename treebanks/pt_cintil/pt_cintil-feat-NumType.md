---
layout: base
title:  'Statistics of NumType in UD_Portuguese-CINTIL'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-CINTIL: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Frac`, `Ord`.

8188 tokens (2%) have a non-empty value of `NumType`.
1062 types (3%) occur at least once with a non-empty value of `NumType`.
1023 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: <tt><a href="pt_cintil-pos-NUM.html">NUM</a></tt> (7026; 1% instances), <tt><a href="pt_cintil-pos-ADJ.html">ADJ</a></tt> (1162; 0% instances).

### `NUM`

7026 <tt><a href="pt_cintil-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="pt_cintil-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (5088; 72%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (6517; 93% of non-empty `NumType`): <em>dois, mil, três, duas, quatro, 30, cinco, 20, vinte, duzentos</em>
* `Frac` (509; 7% of non-empty `NumType`): <em>cento, %, meia, quartos, terço, terços, meio, quinto</em>

<table>
  <tr><th>Paradigm <i>cento</i></th><th><tt>Card</tt></th><th><tt>Frac</tt></th></tr>
  <tr><td><tt><tt><a href="pt_cintil-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="pt_cintil-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>cento</em></td></tr>
  <tr><td><tt><tt><a href="pt_cintil-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>cento</em></td><td></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (952) occur only with one value of `NumType`.

### `ADJ`

1162 <tt><a href="pt_cintil-pos-ADJ.html">ADJ</a></tt> tokens (5% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="pt_cintil-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1035; 89%), <tt><a href="pt_cintil-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (604; 52%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (1162; 100% of non-empty `NumType`): <em>primeira, primeiro, segunda, segundo, primeiros, terceiro, terceira, primeiras, quarto, quarta</em>
* `EMPTY` (23907): <em>grande, novo, outro, nova, outros, outra, grandes, outras, novos, mesmo</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (71) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="pt_cintil-dep-fixed.html">fixed</a></tt>]--> NUM</tt> (931; 95%),
<tt>NUM --[<tt><a href="pt_cintil-dep-dep.html">dep</a></tt>]--> NUM</tt> (20; 83%),
<tt>NUM --[<tt><a href="pt_cintil-dep-conj.html">conj</a></tt>]--> NUM</tt> (11; 100%),
<tt>NUM --[<tt><a href="pt_cintil-dep-amod.html">amod</a></tt>]--> NUM</tt> (6; 100%),
<tt>NUM --[<tt><a href="pt_cintil-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (4; 100%),
<tt>ADJ --[<tt><a href="pt_cintil-dep-fixed.html">fixed</a></tt>]--> ADJ</tt> (1; 100%).

