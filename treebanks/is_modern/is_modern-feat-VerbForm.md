---
layout: base
title:  'Statistics of VerbForm in UD_Icelandic-Modern'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-Modern: Features: `VerbForm`

This feature is universal.
It occurs with 2 different values: `Inf`, `Part`.

10192 tokens (6%) have a non-empty value of `VerbForm`.
1020 types (10%) occur at least once with a non-empty value of `VerbForm`.
595 lemmas (10%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 3 part-of-speech tags: <tt><a href="is_modern-pos-VERB.html">VERB</a></tt> (8950; 6% instances), <tt><a href="is_modern-pos-AUX.html">AUX</a></tt> (1232; 1% instances), <tt><a href="is_modern-pos-ADV.html">ADV</a></tt> (10; 0% instances).

### `VERB`

8950 <tt><a href="is_modern-pos-VERB.html">VERB</a></tt> tokens (49% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="is_modern-feat-Mood.html">Mood</a></tt><tt>=EMPTY</tt> (8928; 100%), <tt><a href="is_modern-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (5494; 61%).

`VERB` tokens may have the following values of `VerbForm`:

* `Inf` (5494; 61% of non-empty `VerbForm`): <em>gera, fara, taka, koma, segja, vinna, sjá, fá, ræða, spyrja</em>
* `Part` (3456; 39% of non-empty `VerbForm`): <em>varðandi, gert, sagt, farið, tekið, komið, gripið, orðið, séð, keppt</em>
* `EMPTY` (9412): <em>hringir, held, kemur, á, þakka, finnst, þarf, verður, sagði, eigum</em>

<table>
  <tr><th>Paradigm <i>koma</i></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>koma, komast</em></td><td></td></tr>
  <tr><td><tt><tt><a href="is_modern-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="is_modern-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td><em>komandi</em></td></tr>
  <tr><td><tt><tt><a href="is_modern-feat-Mood.html">Mood</a></tt><tt>=Imp</tt></tt></td><td><em>komið</em></td><td></td></tr>
  <tr><td><tt><tt><a href="is_modern-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td><em>komið, komin, kominn, komnir, komist, komnar</em></td></tr>
  <tr><td><tt><tt><a href="is_modern-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td><em>komandi</em></td></tr>
</table>

### `AUX`

1232 <tt><a href="is_modern-pos-AUX.html">AUX</a></tt> tokens (12% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="is_modern-feat-Mood.html">Mood</a></tt><tt>=EMPTY</tt> (1232; 100%), <tt><a href="is_modern-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (646; 52%).

`AUX` tokens may have the following values of `VerbForm`:

* `Inf` (586; 48% of non-empty `VerbForm`): <em>vera, hafa, geta, verða, vilja</em>
* `Part` (646; 52% of non-empty `VerbForm`): <em>verið, haft, viljað, getað, mátt</em>
* `EMPTY` (9220): <em>er, var, eru, sé, hefur, væri, hafa, hafi, hefði, erum</em>

<table>
  <tr><th>Paradigm <i>vera</i></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>vera</em></td><td></td></tr>
  <tr><td><tt><tt><a href="is_modern-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td><em>verið</em></td></tr>
</table>

### `ADV`

10 <tt><a href="is_modern-pos-ADV.html">ADV</a></tt> tokens (0% of all `ADV` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `ADV` and `VerbForm` co-occurred: <tt><a href="is_modern-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (10; 100%).

`ADV` tokens may have the following values of `VerbForm`:

* `Inf` (8; 80% of non-empty `VerbForm`): <em>segja</em>
* `Part` (2; 20% of non-empty `VerbForm`): <em>útfært</em>
* `EMPTY` (13764): <em>ekki, þá, svo, hér, bara, eins, þar, nú, þannig, mjög</em>

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>AUX --[<tt><a href="is_modern-dep-dep.html">dep</a></tt>]--> VERB</tt> (8; 80%),
<tt>VERB --[<tt><a href="is_modern-dep-csubj.html">csubj</a></tt>]--> VERB</tt> (4; 67%),
<tt>AUX --[<tt><a href="is_modern-dep-ccomp.html">ccomp</a></tt>]--> AUX</tt> (2; 100%),
<tt>AUX --[<tt><a href="is_modern-dep-obl.html">obl</a></tt>]--> AUX</tt> (2; 100%).

