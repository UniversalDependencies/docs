---
layout: base
title:  'Statistics of VerbForm in UD_Romanian-ArT'
udver: '2'
---

## Treebank Statistics: UD_Romanian-ArT: Features: `VerbForm`

This feature is universal.
It occurs with 2 different values: `Fin`, `Part`.

121 tokens (21%) have a non-empty value of `VerbForm`.
110 types (37%) occur at least once with a non-empty value of `VerbForm`.
72 lemmas (32%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="ro_art-pos-VERB.html">VERB</a></tt> (115; 20% instances), <tt><a href="ro_art-pos-AUX.html">AUX</a></tt> (6; 1% instances).

### `VERB`

115 <tt><a href="ro_art-pos-VERB.html">VERB</a></tt> tokens (100% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="ro_art-feat-Number.html">Number</a></tt><tt>=Sing</tt> (94; 82%), <tt><a href="ro_art-feat-Person.html">Person</a></tt><tt>=3</tt> (89; 77%), <tt><a href="ro_art-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (78; 68%).

`VERB` tokens may have the following values of `VerbForm`:

* `Fin` (110; 96% of non-empty `VerbForm`): <em>adară, ascapă, ascăpă, aştipta, facă, feaţi, fudzirâ, imna, lucra, mutreaşte</em>
* `Part` (5; 4% of non-empty `VerbForm`): <em>ascăpată, faptă, minduit, niapirită, nidată</em>

<table>
  <tr><th>Paradigm <i>fac</i></th><th><tt>Fin</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt><tt><a href="ro_art-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td></td><td><em>faptă</em></td></tr>
  <tr><td><tt><tt><a href="ro_art-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ro_art-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="ro_art-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>feaţi</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro_art-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ro_art-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="ro_art-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>faţi, fațe</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ro_art-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="ro_art-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="ro_art-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>facă, facâ</em></td><td></td></tr>
</table>

`VerbForm` seems to be **lexical feature** of `VERB`. 96% lemmas (69) occur only with one value of `VerbForm`.

### `AUX`

6 <tt><a href="ro_art-pos-AUX.html">AUX</a></tt> tokens (67% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="ro_art-feat-Number.html">Number</a></tt><tt>=Sing</tt> (6; 100%), <tt><a href="ro_art-feat-Person.html">Person</a></tt><tt>=3</tt> (6; 100%), <tt><a href="ro_art-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (5; 83%), <tt><a href="ro_art-feat-Tense.html">Tense</a></tt><tt>=Imp</tt> (5; 83%).

`AUX` tokens may have the following values of `VerbForm`:

* `Fin` (6; 100% of non-empty `VerbForm`): <em>era, avea, hibă</em>
* `EMPTY` (3): <em>va</em>

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<tt><a href="ro_art-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (26; 90%),
<tt>VERB --[<tt><a href="ro_art-dep-conj.html">conj</a></tt>]--> VERB</tt> (16; 94%),
<tt>VERB --[<tt><a href="ro_art-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (8; 100%),
<tt>VERB --[<tt><a href="ro_art-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (3; 100%),
<tt>VERB --[<tt><a href="ro_art-dep-ccomp-pmod.html">ccomp:pmod</a></tt>]--> VERB</tt> (2; 100%),
<tt>VERB --[<tt><a href="ro_art-dep-csubj.html">csubj</a></tt>]--> VERB</tt> (2; 100%),
<tt>VERB --[<tt><a href="ro_art-dep-ccomp.html">ccomp</a></tt>]--> AUX</tt> (1; 100%).

