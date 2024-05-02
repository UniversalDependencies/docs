---
layout: base
title:  'Statistics of Person in UD_Low_Saxon-LSDC'
udver: '2'
---

## Treebank Statistics: UD_Low_Saxon-LSDC: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: <tt><a href="nds_lsdc-feat-Person.html">Person</a></tt>, <tt><a href="nds_lsdc-feat-Person-psor.html">Person[psor]</a></tt>.

933 tokens (20%) have a non-empty value of `Person`.
369 types (23%) occur at least once with a non-empty value of `Person`.
166 lemmas (14%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: <tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt> (393; 8% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (337; 7% instances), <tt><a href="nds_lsdc-pos-AUX.html">AUX</a></tt> (203; 4% instances).

### `PRON`

393 <tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt> tokens (74% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="nds_lsdc-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (361; 92%), <tt><a href="nds_lsdc-feat-Number.html">Number</a></tt><tt>=Sing</tt> (314; 80%), <tt><a href="nds_lsdc-feat-Case.html">Case</a></tt><tt>=Nom</tt> (256; 65%), <tt><a href="nds_lsdc-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (244; 62%).

`PRON` tokens may have the following values of `Person`:

* `1` (126; 32% of non-empty `Person`): <em>ik, my, wy, myn, uus, mik, uns, et, hee, ikke</em>
* `2` (50; 13% of non-empty `Person`): <em>y, du, dy, jy, juw, See, ow, uw, dik, e</em>
* `3` (217; 55% of non-empty `Person`): <em>et, hee, see, sik, dat, em, dee, en, hum, det</em>
* `EMPTY` (140): <em>dee, wat, man, dat, et, al, alle, den, eyne, niks</em>

<table>
  <tr><th>Paradigm <i>ik</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="nds_lsdc-feat-Case.html">Case</a></tt><tt>=Acc,Dat</tt></tt></td><td><em>my, myn</em></td><td></td></tr>
  <tr><td><tt><tt><a href="nds_lsdc-feat-Case.html">Case</a></tt><tt>=Dat</tt></tt></td><td><em>mik, my</em></td><td></td></tr>
  <tr><td><tt><tt><a href="nds_lsdc-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td><em>ik, ikke</em></td><td><em>ik</em></td></tr>
</table>

### `VERB`

337 <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> tokens (61% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="nds_lsdc-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (317; 94%), <tt><a href="nds_lsdc-feat-Number.html">Number</a></tt><tt>=Sing</tt> (278; 82%), <tt><a href="nds_lsdc-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (257; 76%), <tt><a href="nds_lsdc-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (197; 58%).

`VERB` tokens may have the following values of `Person`:

* `1` (47; 14% of non-empty `Person`): <em>segge, hadde, dacht, hevve, las, vråge, bedanke, do, dors, dröyp</em>
* `2` (25; 7% of non-empty `Person`): <em>Sü, Haal, Kumst, Süg, bruukst, denket, do, geavet, gelöyvst, gå</em>
* `3` (265; 79% of non-empty `Person`): <em>hadde, leyt, höyrt, saeten, sea, wus, het, kaem, kam, keyk</em>
* `EMPTY` (220): <em>seen, worden, holden, seggen, doon, giaven, gån, koupen, geaven, hebben</em>

<table>
  <tr><th>Paradigm <i>hebben</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="nds_lsdc-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="nds_lsdc-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nds_lsdc-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>hadde</em></td><td></td><td><em>hadde, had</em></td></tr>
  <tr><td><tt><tt><a href="nds_lsdc-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="nds_lsdc-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nds_lsdc-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="nds_lsdc-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>hadde</em></td><td></td><td><em>hadde</em></td></tr>
  <tr><td><tt><tt><a href="nds_lsdc-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="nds_lsdc-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nds_lsdc-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>hevve</em></td><td><em>heb, hest</em></td><td><em>het, hat</em></td></tr>
  <tr><td><tt><tt><a href="nds_lsdc-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="nds_lsdc-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nds_lsdc-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="nds_lsdc-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td></td><td><em>hevt</em></td></tr>
  <tr><td><tt><tt><a href="nds_lsdc-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="nds_lsdc-feat-Number.html">Number</a></tt><tt>=Plur,Sing</tt>|<tt><a href="nds_lsdc-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td><em>hebbet</em></td><td></td></tr>
  <tr><td><tt><tt><a href="nds_lsdc-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="nds_lsdc-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nds_lsdc-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>hevvet</em></td></tr>
  <tr><td><tt><tt><a href="nds_lsdc-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="nds_lsdc-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nds_lsdc-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="nds_lsdc-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>hebben</em></td><td><em>hebben</em></td><td></td></tr>
  <tr><td><tt><tt><a href="nds_lsdc-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="nds_lsdc-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nds_lsdc-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="nds_lsdc-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td></td><td><em>hädde</em></td></tr>
</table>

### `AUX`

203 <tt><a href="nds_lsdc-pos-AUX.html">AUX</a></tt> tokens (89% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="nds_lsdc-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (186; 92%), <tt><a href="nds_lsdc-feat-Number.html">Number</a></tt><tt>=Sing</tt> (165; 81%), <tt><a href="nds_lsdc-feat-VerbType.html">VerbType</a></tt><tt>=EMPTY</tt> (154; 76%), <tt><a href="nds_lsdc-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (152; 75%), <tt><a href="nds_lsdc-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (109; 54%).

`AUX` tokens may have the following values of `Person`:

* `1` (39; 19% of non-empty `Person`): <em>wil, hev, was, had, hadde, hebbe, sin, skölde, sküllet, wul</em>
* `2` (8; 4% of non-empty `Person`): <em>bis, büst, hes, künnen, künst, skalst, willet</em>
* `3` (156; 77% of non-empty `Person`): <em>is, was, het, hadde, sint, kon, wol, hevt, wardt, weer</em>
* `EMPTY` (24): <em>syn, hebben, weasd, weasen, köänet, künnen, sint, warden, werden, weren</em>

<table>
  <tr><th>Paradigm <i>weasen</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="nds_lsdc-feat-Mood.html">Mood</a></tt><tt>=Ind,Sub</tt>|<tt><a href="nds_lsdc-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nds_lsdc-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td></td><td><em>wöör</em></td></tr>
  <tr><td><tt><tt><a href="nds_lsdc-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="nds_lsdc-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nds_lsdc-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td></td><td><em>was, wöör</em></td></tr>
  <tr><td><tt><tt><a href="nds_lsdc-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="nds_lsdc-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nds_lsdc-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="nds_lsdc-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td></td><td><em>weer</em></td></tr>
  <tr><td><tt><tt><a href="nds_lsdc-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="nds_lsdc-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nds_lsdc-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="nds_lsdc-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt>|<tt><a href="nds_lsdc-feat-VerbType.html">VerbType</a></tt><tt>=Aux</tt></tt></td><td></td><td></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="nds_lsdc-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="nds_lsdc-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nds_lsdc-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="nds_lsdc-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt>|<tt><a href="nds_lsdc-feat-VerbType.html">VerbType</a></tt><tt>=Cop</tt></tt></td><td></td><td></td><td><em>was, weer</em></td></tr>
  <tr><td><tt><tt><a href="nds_lsdc-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="nds_lsdc-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nds_lsdc-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>Bin, sin</em></td><td><em>bis, büst</em></td><td><em>is</em></td></tr>
  <tr><td><tt><tt><a href="nds_lsdc-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="nds_lsdc-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nds_lsdc-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="nds_lsdc-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>sin</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nds_lsdc-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="nds_lsdc-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nds_lsdc-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="nds_lsdc-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt>|<tt><a href="nds_lsdc-feat-VerbType.html">VerbType</a></tt><tt>=Aux</tt></tt></td><td></td><td></td><td><em>is</em></td></tr>
  <tr><td><tt><tt><a href="nds_lsdc-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="nds_lsdc-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nds_lsdc-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="nds_lsdc-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt>|<tt><a href="nds_lsdc-feat-VerbType.html">VerbType</a></tt><tt>=Cop</tt></tt></td><td></td><td></td><td><em>is</em></td></tr>
  <tr><td><tt><tt><a href="nds_lsdc-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="nds_lsdc-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nds_lsdc-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td></td><td><em>weren, wassen, wåren, wören</em></td></tr>
  <tr><td><tt><tt><a href="nds_lsdc-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="nds_lsdc-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nds_lsdc-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>sint</em></td></tr>
  <tr><td><tt><tt><a href="nds_lsdc-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="nds_lsdc-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nds_lsdc-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="nds_lsdc-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>sint</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nds_lsdc-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="nds_lsdc-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nds_lsdc-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="nds_lsdc-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt>|<tt><a href="nds_lsdc-feat-VerbType.html">VerbType</a></tt><tt>=Cop</tt></tt></td><td></td><td></td><td><em>sint</em></td></tr>
  <tr><td><tt><tt><a href="nds_lsdc-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="nds_lsdc-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nds_lsdc-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td></td><td><em>weer</em></td></tr>
  <tr><td><tt><tt><a href="nds_lsdc-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nds_lsdc-feat-VerbType.html">VerbType</a></tt><tt>=Aux</tt></tt></td><td></td><td></td><td><em>is</em></td></tr>
</table>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<tt><a href="nds_lsdc-dep-conj.html">conj</a></tt>]--> VERB</tt> (59; 63%),
<tt>VERB --[<tt><a href="nds_lsdc-dep-expl-pv.html">expl:pv</a></tt>]--> PRON</tt> (3; 60%),
<tt>PRON --[<tt><a href="nds_lsdc-dep-aux.html">aux</a></tt>]--> AUX</tt> (2; 67%),
<tt>AUX --[<tt><a href="nds_lsdc-dep-conj.html">conj</a></tt>]--> VERB</tt> (1; 100%).

