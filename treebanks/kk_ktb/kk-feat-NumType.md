---
layout: base
title:  'Statistics of NumType in UD_Kazakh'
udver: '2'
---

## Treebank Statistics: UD_Kazakh: Features: `NumType`

This feature is universal but the values `Coll` are language-specific.
It occurs with 3 different values: `Card`, `Coll`, `Ord`.
Some words have combined values of the feature; 1 combinations have been observed: `Card|Ord`.

397 tokens (4%) have a non-empty value of `NumType`.
205 types (5%) occur at least once with a non-empty value of `NumType`.
173 lemmas (7%) occur at least once with a non-empty value of `NumType`.
The feature is used with 1 part-of-speech tags: <tt><a href="kk-pos-NUM.html">NUM</a></tt> (397; 4% instances).

### `NUM`

397 <tt><a href="kk-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="kk-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (344; 87%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (161; 41% of non-empty `NumType`): <em>бір, екі, миллиард, үш, 12, төрт, сегіз, 1, 4, 5</em>
* `Card,Ord` (60; 15% of non-empty `NumType`): <em>бірі, бір, 3, бірдей, млн., мың, 1, 1220, 13, 1380</em>
* `Coll` (17; 4% of non-empty `NumType`): <em>екеуі, екеуінің, Брютон-стриттегі, Тәңірінің, біреуі, үшеуі, әжесінің, әкесі, Өзінің</em>
* `Ord` (159; 40% of non-empty `NumType`): <em>үшінші, 2, 1, 11, 18, 19, 20, II, 12, 14</em>

<table>
  <tr><th>Paradigm <i>бір</i></th><th><tt>Card</tt></th><th><tt>Card,Ord</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>бір</em></td><td><em>бір, бірдей</em></td><td><em>Бірінші</em></td></tr>
  <tr><td><tt><tt><a href="kk-feat-Case.html">Case</a></tt><tt>=Abl</tt>|<tt><a href="kk-feat-Number-psor.html">Number[psor]</a></tt><tt>=Plur,Sing</tt>|<tt><a href="kk-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td></td><td><em>бірінен</em></td><td></td></tr>
  <tr><td><tt><tt><a href="kk-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="kk-feat-Number-psor.html">Number[psor]</a></tt><tt>=Plur,Sing</tt>|<tt><a href="kk-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td></td><td><em>Бірін</em></td><td></td></tr>
  <tr><td><tt><tt><a href="kk-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td><em>бір</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="kk-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="kk-feat-Number-psor.html">Number[psor]</a></tt><tt>=Plur,Sing</tt>|<tt><a href="kk-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td><em>бірі</em></td><td><em>бірі</em></td><td></td></tr>
</table>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="kk-dep-compound.html">compound</a></tt>]--> NUM</tt> (14; 61%).

