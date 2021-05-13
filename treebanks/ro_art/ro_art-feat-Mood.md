---
layout: base
title:  'Statistics of Mood in UD_Romanian-ArT'
udver: '2'
---

## Treebank Statistics: UD_Romanian-ArT: Features: `Mood`

This feature is universal.
It occurs with 4 different values: `Cnd`, `Imp`, `Ind`, `Sub`.

146 tokens (25%) have a non-empty value of `Mood`.
113 types (38%) occur at least once with a non-empty value of `Mood`.
72 lemmas (32%) occur at least once with a non-empty value of `Mood`.
The feature is used with 3 part-of-speech tags: <tt><a href="ro_art-pos-VERB.html">VERB</a></tt> (110; 19% instances), <tt><a href="ro_art-pos-PART.html">PART</a></tt> (30; 5% instances), <tt><a href="ro_art-pos-AUX.html">AUX</a></tt> (6; 1% instances).

### `VERB`

110 <tt><a href="ro_art-pos-VERB.html">VERB</a></tt> tokens (96% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="ro_art-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (110; 100%), <tt><a href="ro_art-feat-Number.html">Number</a></tt><tt>=Sing</tt> (89; 81%), <tt><a href="ro_art-feat-Person.html">Person</a></tt><tt>=3</tt> (89; 81%).

`VERB` tokens may have the following values of `Mood`:

* `Cnd` (3; 3% of non-empty `Mood`): <em>amintari, mărtari, pistipsiri</em>
* `Imp` (3; 3% of non-empty `Mood`): <em>adu, bati, misură</em>
* `Ind` (78; 71% of non-empty `Mood`): <em>ascăpă, aştipta, feaţi, fudzirâ, imna, lucra, mutreaşte, tricu, Aĝumse, acaţă</em>
* `Sub` (26; 24% of non-empty `Mood`): <em>ascapă, facă, acumpără, adară, aduńi, afli, alină, aĝut, caftă, cură</em>
* `EMPTY` (5): <em>ascăpată, faptă, minduit, niapirită, nidată</em>

<table>
  <tr><th>Paradigm <i>fac</i></th><th><tt>Ind</tt></th><th><tt>Sub</tt></th></tr>
  <tr><td><tt><tt><a href="ro_art-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>feaţi</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro_art-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>faţi, fațe</em></td><td><em>facă, facâ</em></td></tr>
</table>

### `PART`

30 <tt><a href="ro_art-pos-PART.html">PART</a></tt> tokens (60% of all `PART` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `PART` and `Mood` co-occurred: <tt><a href="ro_art-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (30; 100%), <tt><a href="ro_art-feat-Variant.html">Variant</a></tt><tt>=EMPTY</tt> (17; 57%).

`PART` tokens may have the following values of `Mood`:

* `Cnd` (3; 10% of non-empty `Mood`): <em>s-</em>
* `Sub` (27; 90% of non-empty `Mood`): <em>s-, să, -s, sa, si, z-</em>
* `EMPTY` (20): <em>nu, n-, no, no-, nu-</em>

### `AUX`

6 <tt><a href="ro_art-pos-AUX.html">AUX</a></tt> tokens (67% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="ro_art-feat-Number.html">Number</a></tt><tt>=Sing</tt> (6; 100%), <tt><a href="ro_art-feat-Person.html">Person</a></tt><tt>=3</tt> (6; 100%), <tt><a href="ro_art-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (6; 100%), <tt><a href="ro_art-feat-Tense.html">Tense</a></tt><tt>=Imp</tt> (5; 83%).

`AUX` tokens may have the following values of `Mood`:

* `Ind` (5; 83% of non-empty `Mood`): <em>era, avea</em>
* `Sub` (1; 17% of non-empty `Mood`): <em>hibă</em>
* `EMPTY` (3): <em>va</em>

<table>
  <tr><th>Paradigm <i>hiu</i></th><th><tt>Ind</tt></th><th><tt>Sub</tt></th></tr>
  <tr><td><tt><tt><a href="ro_art-feat-Tense.html">Tense</a></tt><tt>=Imp</tt></tt></td><td><em>era</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro_art-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td><em>hibă</em></td></tr>
</table>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<tt><a href="ro_art-dep-mark.html">mark</a></tt>]--> PART</tt> (29; 100%),
<tt>VERB --[<tt><a href="ro_art-dep-conj.html">conj</a></tt>]--> VERB</tt> (15; 88%),
<tt>VERB --[<tt><a href="ro_art-dep-ccomp-pmod.html">ccomp:pmod</a></tt>]--> VERB</tt> (2; 100%),
<tt>VERB --[<tt><a href="ro_art-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (2; 67%),
<tt>VERB --[<tt><a href="ro_art-dep-ccomp.html">ccomp</a></tt>]--> AUX</tt> (1; 100%).

