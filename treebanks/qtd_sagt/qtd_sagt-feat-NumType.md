---
layout: base
title:  'Statistics of NumType in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Dist`, `Ord`.

227 tokens (1%) have a non-empty value of `NumType`.
67 types (1%) occur at least once with a non-empty value of `NumType`.
55 lemmas (2%) occur at least once with a non-empty value of `NumType`.
The feature is used with 1 part-of-speech tags: <tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt> (227; 1% instances).

### `NUM`

227 <tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt> tokens (81% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="qtd_sagt-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (224; 99%), <tt><a href="qtd_sagt-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (224; 99%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (220; 97% of non-empty `NumType`): <em>bir, iki, zwei, üç, dört, altı, kaç, yirmi, drei, ein</em>
* `Dist` (2; 1% of non-empty `NumType`): <em>teker</em>
* `Ord` (5; 2% of non-empty `NumType`): <em>19., 6., ikincisi, Birincisi</em>
* `EMPTY` (53): <em>bir, 1, iki, 4, altı, on, 20, 3, bin, elli</em>

<table>
  <tr><th>Paradigm <i>bir</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>bir</em></td><td></td></tr>
  <tr><td><tt><tt><a href="qtd_sagt-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="qtd_sagt-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="qtd_sagt-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt>|<tt><a href="qtd_sagt-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td></td><td><em>Birincisi</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 96% lemmas (53) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="qtd_sagt-dep-compound.html">compound</a></tt>]--> NUM</tt> (11; 55%),
<tt>NUM --[<tt><a href="qtd_sagt-dep-conj.html">conj</a></tt>]--> NUM</tt> (6; 67%),
<tt>NUM --[<tt><a href="qtd_sagt-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="qtd_sagt-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (1; 100%).

