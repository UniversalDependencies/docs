---
layout: base
title:  'Statistics of Polarity in UD_Latvian-Cairo'
udver: '2'
---

## Treebank Statistics: UD_Latvian-Cairo: Features: `Polarity`

This feature is universal.
It occurs with 2 different values: `Neg`, `Pos`.

38 tokens (23%) have a non-empty value of `Polarity`.
33 types (29%) occur at least once with a non-empty value of `Polarity`.
29 lemmas (28%) occur at least once with a non-empty value of `Polarity`.
The feature is used with 4 part-of-speech tags: <tt><a href="lv_cairo-pos-VERB.html">VERB</a></tt> (31; 18% instances), <tt><a href="lv_cairo-pos-AUX.html">AUX</a></tt> (4; 2% instances), <tt><a href="lv_cairo-pos-CCONJ.html">CCONJ</a></tt> (2; 1% instances), <tt><a href="lv_cairo-pos-PART.html">PART</a></tt> (1; 1% instances).

### `VERB`

31 <tt><a href="lv_cairo-pos-VERB.html">VERB</a></tt> tokens (100% of all `VERB` tokens) have a non-empty value of `Polarity`.

The most frequent other feature values with which `VERB` and `Polarity` co-occurred: <tt><a href="lv_cairo-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (27; 87%), <tt><a href="lv_cairo-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (24; 77%), <tt><a href="lv_cairo-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (23; 74%), <tt><a href="lv_cairo-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (23; 74%), <tt><a href="lv_cairo-feat-Evident.html">Evident</a></tt><tt>=Fh</tt> (22; 71%), <tt><a href="lv_cairo-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (22; 71%), <tt><a href="lv_cairo-feat-Person.html">Person</a></tt><tt>=3</tt> (17; 55%), <tt><a href="lv_cairo-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (16; 52%).

`VERB` tokens may have the following values of `Polarity`:

* `Neg` (4; 13% of non-empty `Polarity`): <em>Nevarēja, nav, neizdarīja, nevarēju</em>
* `Pos` (27; 87% of non-empty `Polarity`): <em>uzrakstīja, apgriezt, apskāvās, atmest, atnākt, atstāja, atver, centās, domā, gribi</em>

<table>
  <tr><th>Paradigm <i>varēt</i></th><th><tt>Pos</tt></th><th><tt>Neg</tt></th></tr>
  <tr><td><tt><tt><a href="lv_cairo-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="lv_cairo-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="lv_cairo-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td><em>nevarēju</em></td></tr>
  <tr><td><tt><tt><a href="lv_cairo-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="lv_cairo-feat-Person.html">Person</a></tt><tt>=2</tt>|<tt><a href="lv_cairo-feat-Tense.html">Tense</a></tt><tt>=Fut</tt></tt></td><td><em>varēsi</em></td><td></td></tr>
  <tr><td><tt><tt><a href="lv_cairo-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="lv_cairo-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td><em>Nevarēja</em></td></tr>
</table>

`Polarity` seems to be **lexical feature** of `VERB`. 96% lemmas (27) occur only with one value of `Polarity`.

### `AUX`

4 <tt><a href="lv_cairo-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `Polarity`.

The most frequent other feature values with which `AUX` and `Polarity` co-occurred: <tt><a href="lv_cairo-feat-Evident.html">Evident</a></tt><tt>=Fh</tt> (4; 100%), <tt><a href="lv_cairo-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (4; 100%), <tt><a href="lv_cairo-feat-Person.html">Person</a></tt><tt>=3</tt> (4; 100%), <tt><a href="lv_cairo-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (4; 100%), <tt><a href="lv_cairo-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (4; 100%), <tt><a href="lv_cairo-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (3; 75%).

`AUX` tokens may have the following values of `Polarity`:

* `Pos` (4; 100% of non-empty `Polarity`): <em>ir, tika</em>

### `CCONJ`

2 <tt><a href="lv_cairo-pos-CCONJ.html">CCONJ</a></tt> tokens (20% of all `CCONJ` tokens) have a non-empty value of `Polarity`.

`CCONJ` tokens may have the following values of `Polarity`:

* `Neg` (2; 100% of non-empty `Polarity`): <em>ne</em>
* `EMPTY` (8): <em>un, bet, vai</em>

### `PART`

1 <tt><a href="lv_cairo-pos-PART.html">PART</a></tt> tokens (20% of all `PART` tokens) have a non-empty value of `Polarity`.

`PART` tokens may have the following values of `Polarity`:

* `Neg` (1; 100% of non-empty `Polarity`): <em>ne</em>
* `EMPTY` (4): <em>Vai, kaut, tikai</em>

## Relations with Agreement in `Polarity`

The 10 most frequent relations where parent and child node agree in `Polarity`:
<tt>VERB --[<tt><a href="lv_cairo-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (4; 67%),
<tt>VERB --[<tt><a href="lv_cairo-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (2; 100%),
<tt>VERB --[<tt><a href="lv_cairo-dep-aux-pass.html">aux:pass</a></tt>]--> AUX</tt> (1; 100%),
<tt>VERB --[<tt><a href="lv_cairo-dep-csubj.html">csubj</a></tt>]--> VERB</tt> (1; 100%).

