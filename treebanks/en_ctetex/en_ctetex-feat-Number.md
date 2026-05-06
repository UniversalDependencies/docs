---
layout: base
title:  'Statistics of Number in UD_English-CTeTex'
udver: '2'
---

## Treebank Statistics: UD_English-CTeTex: Features: `Number`

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

2912 tokens (31%) have a non-empty value of `Number`.
1099 types (56%) occur at least once with a non-empty value of `Number`.
824 lemmas (48%) occur at least once with a non-empty value of `Number`.
The feature is used with 4 part-of-speech tags: <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> (2650; 29% instances), <tt><a href="en_ctetex-pos-AUX.html">AUX</a></tt> (211; 2% instances), <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (50; 1% instances), <tt><a href="en_ctetex-pos-PRON.html">PRON</a></tt> (1; 0% instances).

### `NOUN`

2650 <tt><a href="en_ctetex-pos-NOUN.html">NOUN</a></tt> tokens (100% of all `NOUN` tokens) have a non-empty value of `Number`.

`NOUN` tokens may have the following values of `Number`:

* `Plur` (424; 16% of non-empty `Number`): <em>nodes, systems, hours, errors, levels, operations, calls, conditions, quantities, types</em>
* `Sing` (2226; 84% of non-empty `Number`): <em>system, data, flight, SMS, user, time, message, service, interface, operation</em>

<table>
  <tr><th>Paradigm <i>system</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>system</em></td><td><em>systems</em></td></tr>
</table>

### `AUX`

211 <tt><a href="en_ctetex-pos-AUX.html">AUX</a></tt> tokens (43% of all `AUX` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `AUX` and `Number` co-occurred: <tt><a href="en_ctetex-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (205; 97%).

`AUX` tokens may have the following values of `Number`:

* `Plur` (22; 10% of non-empty `Number`): <em>are</em>
* `Sing` (189; 90% of non-empty `Number`): <em>be, is, been, was</em>
* `EMPTY` (281): <em>shall, will, does, has, must, being, can, do, should, could</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="en_ctetex-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>been</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_ctetex-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>be, is, was</em></td><td><em>are</em></td></tr>
</table>

### `VERB`

50 <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> tokens (7% of all `VERB` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `VERB` and `Number` co-occurred: <tt><a href="en_ctetex-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (50; 100%).

`VERB` tokens may have the following values of `Number`:

* `Plur` (3; 6% of non-empty `Number`): <em>are</em>
* `Sing` (47; 94% of non-empty `Number`): <em>is, selects, moves, follows, has, attempts, fails, receives, represents, states</em>
* `EMPTY` (671): <em>provide, create, display, have, allow, send, displaying, report, using, diagnosed</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>is</em></td><td><em>are</em></td></tr>
</table>

`Number` seems to be **lexical feature** of `VERB`. 96% lemmas (25) occur only with one value of `Number`.

### `PRON`

1 <tt><a href="en_ctetex-pos-PRON.html">PRON</a></tt> tokens (1% of all `PRON` tokens) have a non-empty value of `Number`.

`PRON` tokens may have the following values of `Number`:

* `Plur` (1; 100% of non-empty `Number`): <em>they</em>
* `EMPTY` (82): <em>that, it, there, one, all, which, this, you, I, when</em>

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>NOUN --[<tt><a href="en_ctetex-dep-nmod.html">nmod</a></tt>]--> NOUN</tt> (490; 70%),
<tt>NOUN --[<tt><a href="en_ctetex-dep-compound.html">compound</a></tt>]--> NOUN</tt> (288; 79%),
<tt>NOUN --[<tt><a href="en_ctetex-dep-conj.html">conj</a></tt>]--> NOUN</tt> (194; 86%),
<tt>NOUN --[<tt><a href="en_ctetex-dep-list.html">list</a></tt>]--> NOUN</tt> (78; 89%),
<tt>NOUN --[<tt><a href="en_ctetex-dep-appos.html">appos</a></tt>]--> NOUN</tt> (32; 71%),
<tt>NOUN --[<tt><a href="en_ctetex-dep-parataxis.html">parataxis</a></tt>]--> NOUN</tt> (22; 76%),
<tt>NOUN --[<tt><a href="en_ctetex-dep-cop.html">cop</a></tt>]--> AUX</tt> (18; 82%),
<tt>NOUN --[<tt><a href="en_ctetex-dep-nsubj.html">nsubj</a></tt>]--> NOUN</tt> (11; 79%),
<tt>NOUN --[<tt><a href="en_ctetex-dep-flat.html">flat</a></tt>]--> NOUN</tt> (10; 91%),
<tt>NOUN --[<tt><a href="en_ctetex-dep-amod.html">amod</a></tt>]--> NOUN</tt> (7; 88%).

