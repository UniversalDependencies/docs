---
layout: base
title:  'Statistics of Polarity in UD_Turkish_English-BUTR'
udver: '2'
---

## Treebank Statistics: UD_Turkish_English-BUTR: Features: `Polarity`

This feature is universal.
It occurs with 2 different values: `Neg`, `Pos`.

61 tokens (16%) have a non-empty value of `Polarity`.
55 types (20%) occur at least once with a non-empty value of `Polarity`.
36 lemmas (15%) occur at least once with a non-empty value of `Polarity`.
The feature is used with 3 part-of-speech tags: <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt> (55; 14% instances), <tt><a href="qti_butr-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="qti_butr-pos-PART.html">PART</a></tt> (2; 1% instances).

### `VERB`

55 <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt> tokens (74% of all `VERB` tokens) have a non-empty value of `Polarity`.

The most frequent other feature values with which `VERB` and `Polarity` co-occurred: <tt><a href="qti_butr-feat-Mood.html">Mood</a></tt><tt>=EMPTY</tt> (46; 84%), <tt><a href="qti_butr-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (43; 78%), <tt><a href="qti_butr-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (41; 75%), <tt><a href="qti_butr-feat-Number.html">Number</a></tt><tt>=Sing</tt> (33; 60%).

`VERB` tokens may have the following values of `Polarity`:

* `Neg` (8; 15% of non-empty `Polarity`): <em>bilmiyorum, değinemiyoruz, düşünmezsen, düşürmedim, istemiyormuş, istemiyorum, olmayız, vermeden</em>
* `Pos` (47; 85% of non-empty `Polarity`): <em>ettim, geldi, yapmak, Gel, Soggyleşmiş, Yemişsin, alabiliriz, alan, attın, başlasam</em>
* `EMPTY` (19): <em>go, Depends, Let's, Seems, bitching, coming, deserve, doing, flirting, have</em>

<table>
  <tr><th>Paradigm <i>ol</i></th><th><tt>Pos</tt></th><th><tt>Neg</tt></th></tr>
  <tr><td><tt><tt><a href="qti_butr-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt>|<tt><a href="qti_butr-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="qti_butr-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="qti_butr-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td><em>olmayız</em></td></tr>
  <tr><td><tt><tt><a href="qti_butr-feat-Aspect.html">Aspect</a></tt><tt>=Perf</tt>|<tt><a href="qti_butr-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="qti_butr-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="qti_butr-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>oldu</em></td><td></td></tr>
  <tr><td><tt><tt><a href="qti_butr-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="qti_butr-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="qti_butr-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt>|<tt><a href="qti_butr-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="qti_butr-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt>|<tt><a href="qti_butr-feat-Tense.html">Tense</a></tt><tt>=Fut</tt>|<tt><a href="qti_butr-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt></tt></td><td><em>olacağı</em></td><td></td></tr>
  <tr><td><tt><tt><a href="qti_butr-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="qti_butr-feat-Person.html">Person</a></tt><tt>=2</tt>|<tt><a href="qti_butr-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="qti_butr-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt></tt></td><td><em>olduğunuz</em></td><td></td></tr>
</table>

`Polarity` seems to be **lexical feature** of `VERB`. 97% lemmas (33) occur only with one value of `Polarity`.

### `AUX`

4 <tt><a href="qti_butr-pos-AUX.html">AUX</a></tt> tokens (40% of all `AUX` tokens) have a non-empty value of `Polarity`.

The most frequent other feature values with which `AUX` and `Polarity` co-occurred: <tt><a href="qti_butr-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3; 75%), <tt><a href="qti_butr-feat-Person.html">Person</a></tt><tt>=3</tt> (3; 75%), <tt><a href="qti_butr-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (3; 75%).

`AUX` tokens may have the following values of `Polarity`:

* `Neg` (4; 100% of non-empty `Polarity`): <em>değil, değiliz</em>
* `EMPTY` (6): <em>mi, doesn't, misin, were, would</em>

### `PART`

2 <tt><a href="qti_butr-pos-PART.html">PART</a></tt> tokens (40% of all `PART` tokens) have a non-empty value of `Polarity`.

`PART` tokens may have the following values of `Polarity`:

* `Neg` (2; 100% of non-empty `Polarity`): <em>not</em>
* `EMPTY` (3): <em>ya, to</em>

## Relations with Agreement in `Polarity`

The 10 most frequent relations where parent and child node agree in `Polarity`:
<tt>VERB --[<tt><a href="qti_butr-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (2; 67%),
<tt>VERB --[<tt><a href="qti_butr-dep-conj.html">conj</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="qti_butr-dep-discourse.html">discourse</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="qti_butr-dep-obl.html">obl</a></tt>]--> VERB</tt> (1; 100%).

