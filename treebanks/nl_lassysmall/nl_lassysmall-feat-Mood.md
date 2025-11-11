---
layout: base
title:  'Statistics of Mood in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Features: `Mood`

This feature is universal.
It occurs with 2 different values: `Imp`, `Ind`.

22205 tokens (7%) have a non-empty value of `Mood`.
2496 types (8%) occur at least once with a non-empty value of `Mood`.
1560 lemmas (6%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (12782; 4% instances), <tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (9423; 3% instances).

### `VERB`

12782 <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> tokens (50% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="nl_lassysmall-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (12782; 100%), <tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt> (9371; 73%), <tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (7773; 61%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (152; 1% of non-empty `Mood`): <em>zie, lees, stel, hou, volg, Bevat, Denk, Juich, Laat, Vergelijk</em>
* `Ind` (12630; 99% of non-empty `Mood`): <em>kwam, werd, had, heeft, was, ging, is, komt, kreeg, begon</em>
* `EMPTY` (12932): <em>maken, genoemd, gaan, volgende, gemaakt, zien, gebruikt, laten, gezien, komen</em>

<table>
  <tr><th>Paradigm <i>zien</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>zag</em></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>zie, ziet</em></td><td><em>zie</em></td></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>zagen</em></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>zien</em></td><td></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 99% lemmas (1541) occur only with one value of `Mood`.

### `AUX`

9423 <tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> tokens (92% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="nl_lassysmall-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (9423; 100%), <tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt> (7089; 75%), <tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (5380; 57%).

`AUX` tokens may have the following values of `Mood`:

* `Ind` (9423; 100% of non-empty `Mood`): <em>is, was, werd, wordt, zijn, werden, waren, zou, had, heeft</em>
* `EMPTY` (819): <em>worden, zijn, kunnen, geweest, moeten, hebben, mogen, zijnde, gehad, zullen</em>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<tt><a href="nl_lassysmall-dep-conj.html">conj</a></tt>]--> VERB</tt> (1243; 64%),
<tt>VERB --[<tt><a href="nl_lassysmall-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (288; 55%),
<tt>AUX --[<tt><a href="nl_lassysmall-dep-conj.html">conj</a></tt>]--> AUX</tt> (3; 100%),
<tt>AUX --[<tt><a href="nl_lassysmall-dep-conj.html">conj</a></tt>]--> VERB</tt> (3; 100%),
<tt>VERB --[<tt><a href="nl_lassysmall-dep-csubj-outer.html">csubj:outer</a></tt>]--> VERB</tt> (2; 67%),
<tt>VERB --[<tt><a href="nl_lassysmall-dep-cc.html">cc</a></tt>]--> VERB</tt> (1; 100%).

