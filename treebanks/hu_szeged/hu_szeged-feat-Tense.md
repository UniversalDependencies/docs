---
layout: base
title:  'Statistics of Tense in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Features: `Tense`

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

3540 tokens (8%) have a non-empty value of `Tense`.
2050 types (15%) occur at least once with a non-empty value of `Tense`.
1122 lemmas (13%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt> (3339; 8% instances), <tt><a href="hu_szeged-pos-AUX.html">AUX</a></tt> (201; 0% instances).

### `VERB`

3339 <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt> tokens (91% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="hu_szeged-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (3322; 99%), <tt><a href="hu_szeged-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (3281; 98%), <tt><a href="hu_szeged-feat-Person.html">Person</a></tt><tt>=3</tt> (3145; 94%), <tt><a href="hu_szeged-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (2843; 85%), <tt><a href="hu_szeged-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2430; 73%), <tt><a href="hu_szeged-feat-Definite.html">Definite</a></tt><tt>=Ind</tt> (2020; 60%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (1585; 47% of non-empty `Tense`): <em>volt, mondta, elmondta, jelentette, került, kellett, tett, tette, történt, adott</em>
* `Pres` (1754; 53% of non-empty `Tense`): <em>kell, van, lehet, kellene, nincs, vannak, kerül, teszi, lesz, áll</em>
* `EMPTY` (324): <em>tudni, tartani, folytatni, látni, számítani, ellátni, hívni, kérni, lemondani, menni</em>

<table>
  <tr><th>Paradigm <i>kell</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="hu_szeged-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="hu_szeged-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>kellene</em></td><td></td></tr>
  <tr><td><tt><tt><a href="hu_szeged-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="hu_szeged-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>kell</em></td><td><em>kellett</em></td></tr>
  <tr><td><tt><tt><a href="hu_szeged-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="hu_szeged-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>kellettek</em></td></tr>
</table>

### `AUX`

201 <tt><a href="hu_szeged-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="hu_szeged-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (201; 100%), <tt><a href="hu_szeged-feat-Definite.html">Definite</a></tt><tt>=Ind</tt> (193; 96%), <tt><a href="hu_szeged-feat-Person.html">Person</a></tt><tt>=3</tt> (192; 96%), <tt><a href="hu_szeged-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (188; 94%), <tt><a href="hu_szeged-feat-Number.html">Number</a></tt><tt>=Sing</tt> (173; 86%), <tt><a href="hu_szeged-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (146; 73%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (100; 50% of non-empty `Tense`): <em>volt, voltak, lett, lehetett, lettem, voltam, voltunk</em>
* `Pres` (101; 50% of non-empty `Tense`): <em>volna, lesz, lenne, lehet, legyen, fog, fogja, fognak, fogják, vagyok</em>
* `EMPTY` (1): <em>lenni</em>

<table>
  <tr><th>Paradigm <i>van</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="hu_szeged-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="hu_szeged-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="hu_szeged-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>volna</em></td><td></td></tr>
  <tr><td><tt><tt><a href="hu_szeged-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="hu_szeged-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="hu_szeged-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>vagyok</em></td><td><em>voltam</em></td></tr>
  <tr><td><tt><tt><a href="hu_szeged-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="hu_szeged-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="hu_szeged-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>van</em></td><td><em>volt</em></td></tr>
  <tr><td><tt><tt><a href="hu_szeged-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="hu_szeged-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="hu_szeged-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td></td><td><em>voltunk</em></td></tr>
  <tr><td><tt><tt><a href="hu_szeged-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="hu_szeged-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="hu_szeged-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>vannak</em></td><td><em>voltak</em></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="hu_szeged-dep-conj.html">conj</a></tt>]--> VERB</tt> (464; 78%),
<tt>VERB --[<tt><a href="hu_szeged-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (188; 74%),
<tt>VERB --[<tt><a href="hu_szeged-dep-ccomp-obl.html">ccomp:obl</a></tt>]--> VERB</tt> (60; 55%),
<tt>VERB --[<tt><a href="hu_szeged-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (31; 67%),
<tt>VERB --[<tt><a href="hu_szeged-dep-csubj.html">csubj</a></tt>]--> VERB</tt> (30; 81%),
<tt>VERB --[<tt><a href="hu_szeged-dep-acl.html">acl</a></tt>]--> VERB</tt> (19; 73%),
<tt>AUX --[<tt><a href="hu_szeged-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (4; 100%),
<tt>VERB --[<tt><a href="hu_szeged-dep-ccomp-obl.html">ccomp:obl</a></tt>]--> AUX</tt> (1; 100%),
<tt>VERB --[<tt><a href="hu_szeged-dep-ccomp-pred.html">ccomp:pred</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="hu_szeged-dep-csubj.html">csubj</a></tt>]--> AUX</tt> (1; 100%).

