---
layout: base
title:  'Statistics of Tense in UD_Icelandic-Modern'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-Modern: Features: `Tense`

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

22762 tokens (14%) have a non-empty value of `Tense`.
1656 types (17%) occur at least once with a non-empty value of `Tense`.
558 lemmas (10%) occur at least once with a non-empty value of `Tense`.
The feature is used with 3 part-of-speech tags: <tt><a href="is_modern-pos-VERB.html">VERB</a></tt> (12868; 8% instances), <tt><a href="is_modern-pos-AUX.html">AUX</a></tt> (9866; 6% instances), <tt><a href="is_modern-pos-ADV.html">ADV</a></tt> (28; 0% instances).

### `VERB`

12868 <tt><a href="is_modern-pos-VERB.html">VERB</a></tt> tokens (70% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="is_modern-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (9412; 73%), <tt><a href="is_modern-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (8080; 63%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (5714; 44% of non-empty `Tense`): <em>gert, sagði, sagt, farið, tekið, kom, komið, ætti, gripið, orðið</em>
* `Pres` (7154; 56% of non-empty `Tense`): <em>hringir, held, kemur, á, varðandi, þakka, finnst, þarf, verður, eigum</em>
* `EMPTY` (5494): <em>gera, fara, taka, koma, segja, vinna, sjá, fá, ræða, spyrja</em>

<table>
  <tr><th>Paradigm <i>koma</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="is_modern-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="is_modern-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt></tt></td><td><em>komandi</em></td><td></td></tr>
  <tr><td><tt><tt><a href="is_modern-feat-Mood.html">Mood</a></tt><tt>=Ind</tt></tt></td><td><em>kemur, koma, kemst, komast, kem</em></td><td><em>kom, komu, komst, komust, komum, komumst</em></td></tr>
  <tr><td><tt><tt><a href="is_modern-feat-Mood.html">Mood</a></tt><tt>=Sub</tt></tt></td><td><em>komi, komist</em></td><td><em>kæmi, kæmist, kæmu, komum, kæmum, kæmust</em></td></tr>
  <tr><td><tt><tt><a href="is_modern-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt></tt></td><td><em>komandi</em></td><td><em>komið, komin, kominn, komnir, komist, komnar</em></td></tr>
</table>

### `AUX`

9866 <tt><a href="is_modern-pos-AUX.html">AUX</a></tt> tokens (94% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="is_modern-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (9220; 93%), <tt><a href="is_modern-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (7282; 74%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (2472; 25% of non-empty `Tense`): <em>var, verið, væri, hefði, voru, mundi, gæti, hafði, haft, væru</em>
* `Pres` (7394; 75% of non-empty `Tense`): <em>er, eru, sé, hefur, hafa, hafi, erum, vil, hef, höfum</em>
* `EMPTY` (586): <em>vera, hafa, geta, verða, vilja</em>

<table>
  <tr><th>Paradigm <i>vera</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="is_modern-feat-Mood.html">Mood</a></tt><tt>=Ind</tt></tt></td><td><em>er, eru, erum, e.</em></td><td><em>var, voru, vorum, varst</em></td></tr>
  <tr><td><tt><tt><a href="is_modern-feat-Mood.html">Mood</a></tt><tt>=Sub</tt></tt></td><td><em>sé, séu, séum, séuð</em></td><td><em>væri, væru, værum</em></td></tr>
  <tr><td><tt><tt><a href="is_modern-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt></tt></td><td></td><td><em>verið</em></td></tr>
</table>

### `ADV`

28 <tt><a href="is_modern-pos-ADV.html">ADV</a></tt> tokens (0% of all `ADV` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `ADV` and `Tense` co-occurred: <tt><a href="is_modern-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (28; 100%).

`ADV` tokens may have the following values of `Tense`:

* `Past` (2; 7% of non-empty `Tense`): <em>útfært</em>
* `Pres` (26; 93% of non-empty `Tense`): <em>varðar, kunna, líkar, lýtur, tekur, telji, verður, viðkemur</em>
* `EMPTY` (13746): <em>ekki, þá, svo, hér, bara, eins, þar, nú, þannig, mjög</em>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="is_modern-dep-conj.html">conj</a></tt>]--> VERB</tt> (996; 64%),
<tt>VERB --[<tt><a href="is_modern-dep-dep.html">dep</a></tt>]--> VERB</tt> (128; 50%),
<tt>VERB --[<tt><a href="is_modern-dep-acl-relcl.html">acl:relcl</a></tt>]--> VERB</tt> (50; 54%),
<tt>VERB --[<tt><a href="is_modern-dep-obl.html">obl</a></tt>]--> AUX</tt> (32; 73%),
<tt>AUX --[<tt><a href="is_modern-dep-conj.html">conj</a></tt>]--> VERB</tt> (14; 70%),
<tt>VERB --[<tt><a href="is_modern-dep-amod.html">amod</a></tt>]--> VERB</tt> (10; 83%),
<tt>VERB --[<tt><a href="is_modern-dep-dep.html">dep</a></tt>]--> AUX</tt> (10; 63%),
<tt>AUX --[<tt><a href="is_modern-dep-dep.html">dep</a></tt>]--> VERB</tt> (8; 80%),
<tt>AUX --[<tt><a href="is_modern-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (4; 67%),
<tt>AUX --[<tt><a href="is_modern-dep-ccomp.html">ccomp</a></tt>]--> AUX</tt> (4; 100%).

