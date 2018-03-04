---
layout: base
title:  'Statistics of AdpType in UD_Slovak'
udver: '2'
---

## Treebank Statistics: UD_Slovak: Features: `AdpType`

This feature is language-specific.
It occurs with 3 different values: `Prep`, `Preppron`, `Voc`.

8612 tokens (8%) have a non-empty value of `AdpType`.
135 types (1%) occur at least once with a non-empty value of `AdpType`.
70 lemmas (0%) occur at least once with a non-empty value of `AdpType`.
The feature is used with 2 part-of-speech tags: <tt><a href="sk-pos-ADP.html">ADP</a></tt> (8558; 8% instances), <tt><a href="sk-pos-PRON.html">PRON</a></tt> (54; 0% instances).

### `ADP`

8558 <tt><a href="sk-pos-ADP.html">ADP</a></tt> tokens (100% of all `ADP` tokens) have a non-empty value of `AdpType`.

`ADP` tokens may have the following values of `AdpType`:

* `Prep` (8102; 95% of non-empty `AdpType`): <em>na, v, do, s, z, o, po, za, k, od</em>
* `Voc` (456; 5% of non-empty `AdpType`): <em>vo, so, zo, ku, nado, odo, predo, bezo, podo</em>

<table>
  <tr><th>Paradigm <i>v</i></th><th><tt>Prep</tt></th><th><tt>Voc</tt></th></tr>
  <tr><td><tt><tt><a href="sk-feat-Case.html">Case</a></tt><tt>=Acc</tt></tt></td><td><em>v</em></td><td><em>vo</em></td></tr>
  <tr><td><tt><tt><a href="sk-feat-Case.html">Case</a></tt><tt>=Loc</tt></tt></td><td><em>v</em></td><td><em>vo</em></td></tr>
</table>

### `PRON`

54 <tt><a href="sk-pos-PRON.html">PRON</a></tt> tokens (1% of all `PRON` tokens) have a non-empty value of `AdpType`.

The most frequent other feature values with which `PRON` and `AdpType` co-occurred: <tt><a href="sk-feat-Number.html">Number</a></tt><tt>=Sing</tt> (54; 100%), <tt><a href="sk-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (54; 100%), <tt><a href="sk-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (54; 100%), <tt><a href="sk-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (54; 100%), <tt><a href="sk-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (52; 96%), <tt><a href="sk-feat-Case.html">Case</a></tt><tt>=Acc</tt> (45; 83%), <tt><a href="sk-feat-Animacy.html">Animacy</a></tt><tt>=Anim</tt> (39; 72%).

`PRON` tokens may have the following values of `AdpType`:

* `Preppron` (54; 100% of non-empty `AdpType`): <em>naňho, naň, doň, preňho, doňho, uňho, oňho, poňho, zaňho</em>

`AdpType` seems to be **lexical feature** of `PRON`. 100% lemmas (10) occur only with one value of `AdpType`.

## Relations with Agreement in `AdpType`

The 10 most frequent relations where parent and child node agree in `AdpType`:
<tt>ADP --[<tt><a href="sk-dep-fixed.html">fixed</a></tt>]--> ADP</tt> (27; 87%),
<tt>ADP --[<tt><a href="sk-dep-case.html">case</a></tt>]--> ADP</tt> (1; 100%),
<tt>ADP --[<tt><a href="sk-dep-conj.html">conj</a></tt>]--> ADP</tt> (1; 100%).

