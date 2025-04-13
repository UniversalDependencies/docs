---
layout: base
title:  'Statistics of Aspect in UD_Italian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Italian-PUD: Features: `Aspect`

This feature is universal.
It occurs with 2 different values: `Imp`, `Perf`.

629 tokens (3%) have a non-empty value of `Aspect`.
315 types (5%) occur at least once with a non-empty value of `Aspect`.
236 lemmas (5%) occur at least once with a non-empty value of `Aspect`.
The feature is used with 2 part-of-speech tags: <tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (405; 2% instances), <tt><a href="it_pud-pos-AUX.html">AUX</a></tt> (224; 1% instances).

### `VERB`

405 <tt><a href="it_pud-pos-VERB.html">VERB</a></tt> tokens (20% of all `VERB` tokens) have a non-empty value of `Aspect`.

The most frequent other feature values with which `VERB` and `Aspect` co-occurred: <tt><a href="it_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (405; 100%), <tt><a href="it_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (405; 100%), <tt><a href="it_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (405; 100%), <tt><a href="it_pud-feat-Person.html">Person</a></tt><tt>=3</tt> (397; 98%), <tt><a href="it_pud-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (396; 98%), <tt><a href="it_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (314; 78%).

`VERB` tokens may have the following values of `Aspect`:

* `Imp` (106; 26% of non-empty `Aspect`): <em>aveva, avevano, considerava, trovavano, era, erano, includeva, riguardava, sembrava, trovava</em>
* `Perf` (299; 74% of non-empty `Aspect`): <em>iniziò, ebbe, dichiarò, diventò, portò, divenne, mise, cominciarono, continuò, crebbe</em>
* `EMPTY` (1649): <em>affermato, avere, ha, fatto, afferma, detto, sono, far, hanno, avuto</em>

<table>
  <tr><th>Paradigm <i>avere</i></th><th><tt>Imp</tt></th><th><tt>Perf</tt></th></tr>
  <tr><td><tt><tt><a href="it_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>aveva</em></td><td><em>ebbe</em></td></tr>
  <tr><td><tt><tt><a href="it_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>avevano</em></td><td><em>ebbero</em></td></tr>
</table>

`Aspect` seems to be **lexical feature** of `VERB`. 90% lemmas (211) occur only with one value of `Aspect`.

### `AUX`

224 <tt><a href="it_pud-pos-AUX.html">AUX</a></tt> tokens (23% of all `AUX` tokens) have a non-empty value of `Aspect`.

The most frequent other feature values with which `AUX` and `Aspect` co-occurred: <tt><a href="it_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (224; 100%), <tt><a href="it_pud-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (224; 100%), <tt><a href="it_pud-feat-Person.html">Person</a></tt><tt>=3</tt> (221; 99%), <tt><a href="it_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (160; 71%), <tt><a href="it_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (124; 55%).

`AUX` tokens may have the following values of `Aspect`:

* `Imp` (118; 53% of non-empty `Aspect`): <em>era, erano, aveva, avevano, veniva, stavano, venivano, stava, ero, poteva</em>
* `Perf` (106; 47% of non-empty `Aspect`): <em>fu, venne, vennero, furono, dovettero</em>
* `EMPTY` (761): <em>è, ha, sono, essere, hanno, stato, può, stata, fosse, aver</em>

<table>
  <tr><th>Paradigm <i>essere</i></th><th><tt>Imp</tt></th><th><tt>Perf</tt></th></tr>
  <tr><td><tt><tt><a href="it_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="it_pud-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="it_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td><em>ero</em></td><td></td></tr>
  <tr><td><tt><tt><a href="it_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="it_pud-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="it_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td><em>era</em></td><td><em>fu</em></td></tr>
  <tr><td><tt><tt><a href="it_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="it_pud-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="it_pud-feat-Voice.html">Voice</a></tt><tt>=Pass</tt></tt></td><td><em>era</em></td><td><em>fu</em></td></tr>
  <tr><td><tt><tt><a href="it_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="it_pud-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="it_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td><em>erano</em></td><td><em>furono</em></td></tr>
  <tr><td><tt><tt><a href="it_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="it_pud-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="it_pud-feat-Voice.html">Voice</a></tt><tt>=Pass</tt></tt></td><td><em>erano</em></td><td><em>furono</em></td></tr>
</table>

## Relations with Agreement in `Aspect`

The 10 most frequent relations where parent and child node agree in `Aspect`:
<tt>VERB --[<tt><a href="it_pud-dep-conj.html">conj</a></tt>]--> VERB</tt> (38; 64%).

