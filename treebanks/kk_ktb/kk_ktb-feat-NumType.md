---
layout: base
title:  'Statistics of NumType in UD_Kazakh-KTB'
udver: '2'
---

## Treebank Statistics: UD_Kazakh-KTB: Features: `NumType`

This feature is universal but the values `Coll` are language-specific.
It occurs with 3 different values: `Card`, `Coll`, `Ord`.
Some words have combined values of the feature; 1 combinations have been observed: `Card|Ord`.

374 tokens (4%) have a non-empty value of `NumType`.
197 types (4%) occur at least once with a non-empty value of `NumType`.
165 lemmas (7%) occur at least once with a non-empty value of `NumType`.
The feature is used with 1 part-of-speech tags: <tt><a href="kk_ktb-pos-NUM.html">NUM</a></tt> (374; 4% instances).

### `NUM`

374 <tt><a href="kk_ktb-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="kk_ktb-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (328; 88%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (157; 42% of non-empty `NumType`): <em>бір, екі, миллиард, үш, 12, төрт, сегіз, 1, 4, 5</em>
* `Card,Ord` (60; 16% of non-empty `NumType`): <em>бірі, бір, 3, бірдей, млн., мың, 1, 1220, 13, 1380</em>
* `Coll` (10; 3% of non-empty `NumType`): <em>екеуі, екеуінің, біреуі, үшеуі</em>
* `Ord` (147; 39% of non-empty `NumType`): <em>2, үшінші, 1, 11, 18, 19, 20, 12, 14, 16</em>

<table>
  <tr><th>Paradigm <i>бір</i></th><th><tt>Card</tt></th><th><tt>Card,Ord</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>бір</em></td><td><em>бір, бірдей</em></td><td><em>Бірінші</em></td></tr>
  <tr><td><tt><tt><a href="kk_ktb-feat-Case.html">Case</a></tt><tt>=Abl</tt>|<tt><a href="kk_ktb-feat-Number-psor.html">Number[psor]</a></tt><tt>=Plur,Sing</tt>|<tt><a href="kk_ktb-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td></td><td><em>бірінен</em></td><td></td></tr>
  <tr><td><tt><tt><a href="kk_ktb-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="kk_ktb-feat-Number-psor.html">Number[psor]</a></tt><tt>=Plur,Sing</tt>|<tt><a href="kk_ktb-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td></td><td><em>Бірін</em></td><td></td></tr>
  <tr><td><tt><tt><a href="kk_ktb-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td><em>бір</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="kk_ktb-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="kk_ktb-feat-Number-psor.html">Number[psor]</a></tt><tt>=Plur,Sing</tt>|<tt><a href="kk_ktb-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td><em>бірі</em></td><td><em>бірі</em></td><td></td></tr>
</table>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="kk_ktb-dep-compound.html">compound</a></tt>]--> NUM</tt> (14; 61%).

