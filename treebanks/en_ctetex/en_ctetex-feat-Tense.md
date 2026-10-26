---
layout: base
title:  'Statistics of Tense in UD_English-CTeTex'
udver: '2'
---

## Treebank Statistics: UD_English-CTeTex: Features: `Tense`

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

497 tokens (5%) have a non-empty value of `Tense`.
164 types (8%) occur at least once with a non-empty value of `Tense`.
139 lemmas (8%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> (286; 3% instances), <tt><a href="en_ctetex-pos-AUX.html">AUX</a></tt> (211; 2% instances).

### `VERB`

286 <tt><a href="en_ctetex-pos-VERB.html">VERB</a></tt> tokens (40% of all `VERB` tokens) have a non-empty value of `Tense`.

`VERB` tokens may have the following values of `Tense`:

* `Past` (286; 100% of non-empty `Tense`): <em>displaying, using, diagnosed, received, specified, based, used, configured, defined, generated</em>
* `EMPTY` (435): <em>provide, create, display, have, allow, send, report, select, Note, is</em>

`Tense` seems to be **lexical feature** of `VERB`. 100% lemmas (138) occur only with one value of `Tense`.

### `AUX`

211 <tt><a href="en_ctetex-pos-AUX.html">AUX</a></tt> tokens (43% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="en_ctetex-feat-Number.html">Number</a></tt><tt>=Sing</tt> (189; 90%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (6; 3% of non-empty `Tense`): <em>been</em>
* `Pres` (205; 97% of non-empty `Tense`): <em>be, is, are, was</em>
* `EMPTY` (281): <em>shall, will, does, has, must, being, can, do, should, could</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="en_ctetex-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>be, is, was</em></td><td><em>been</em></td></tr>
  <tr><td><tt><tt><a href="en_ctetex-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>are</em></td><td></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="en_ctetex-dep-conj.html">conj</a></tt>]--> VERB</tt> (19; 66%),
<tt>VERB --[<tt><a href="en_ctetex-dep-appos.html">appos</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="en_ctetex-dep-mark.html">mark</a></tt>]--> VERB</tt> (1; 100%).

