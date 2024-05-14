---
layout: base
title:  'Statistics of AdpType in UD_Catalan'
udver: '2'
---

## Treebank Statistics: UD_Catalan: Features: `AdpType`

This feature is language-specific.
It occurs with 2 different values: `Prep`, `Preppron`.

88312 tokens (17%) have a non-empty value of `AdpType`.
98 types (0%) occur at least once with a non-empty value of `AdpType`.
85 lemmas (0%) occur at least once with a non-empty value of `AdpType`.
The feature is used with 3 part-of-speech tags: <tt><a href="ca-pos-ADP.html">ADP</a></tt> (87975; 17% instances), <tt><a href="ca-pos-ADV.html">ADV</a></tt> (336; 0% instances), <tt><a href="ca-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).

### `ADP`

87975 <tt><a href="ca-pos-ADP.html">ADP</a></tt> tokens (100% of all `ADP` tokens) have a non-empty value of `AdpType`.

The most frequent other feature values with which `ADP` and `AdpType` co-occurred: <tt><a href="ca-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (73302; 83%), <tt><a href="ca-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (73302; 83%).

`ADP` tokens may have the following values of `AdpType`:

* `Prep` (73302; 83% of non-empty `AdpType`): <em>de, a, d', en, per, amb, entre, sobre, segons, des</em>
* `Preppron` (14673; 17% of non-empty `AdpType`): <em>del, al, dels, als, pel, pels, do, da</em>

<table>
  <tr><th>Paradigm <i>pel</i></th><th><tt>Prep</tt></th><th><tt>Preppron</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>pel</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ca-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ca-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>pel</em></td></tr>
  <tr><td><tt><tt><a href="ca-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ca-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>pels</em></td></tr>
</table>

`AdpType` seems to be **lexical feature** of `ADP`. 97% lemmas (74) occur only with one value of `AdpType`.

### `ADV`

336 <tt><a href="ca-pos-ADV.html">ADV</a></tt> tokens (2% of all `ADV` tokens) have a non-empty value of `AdpType`.

The most frequent other feature values with which `ADV` and `AdpType` co-occurred: <tt><a href="ca-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (336; 100%).

`ADV` tokens may have the following values of `AdpType`:

* `Prep` (276; 82% of non-empty `AdpType`): <em>més, juntament, fins, quant, entorn, enllà, enmig, prop, enfront, menys</em>
* `Preppron` (60; 18% of non-empty `AdpType`): <em>més, fins, enfront, entorn, enllà, quant, prop, enmig</em>

<table>
  <tr><th>Paradigm <i>més</i></th><th><tt>Prep</tt></th><th><tt>Preppron</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>més</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ca-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ca-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>més</em></td></tr>
  <tr><td><tt><tt><a href="ca-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="ca-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>més</em></td></tr>
</table>

### `ADJ`

1 <tt><a href="ca-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `AdpType`.

The most frequent other feature values with which `ADJ` and `AdpType` co-occurred: <tt><a href="ca-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="ca-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="ca-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (1; 100%).

`ADJ` tokens may have the following values of `AdpType`:

* `Prep` (1; 100% of non-empty `AdpType`): <em>igual</em>

## Relations with Agreement in `AdpType`

The 10 most frequent relations where parent and child node agree in `AdpType`:
<tt>ADP --[<tt><a href="ca-dep-fixed.html">fixed</a></tt>]--> ADP</tt> (1899; 75%),
<tt>ADV --[<tt><a href="ca-dep-fixed.html">fixed</a></tt>]--> ADP</tt> (132; 65%),
<tt>ADP --[<tt><a href="ca-dep-case.html">case</a></tt>]--> ADP</tt> (75; 78%),
<tt>ADV --[<tt><a href="ca-dep-fixed.html">fixed</a></tt>]--> ADV</tt> (12; 100%),
<tt>ADP --[<tt><a href="ca-dep-case.html">case</a></tt>]--> ADV</tt> (7; 100%),
<tt>ADP --[<tt><a href="ca-dep-conj.html">conj</a></tt>]--> ADP</tt> (7; 100%),
<tt>ADP --[<tt><a href="ca-dep-mark.html">mark</a></tt>]--> ADP</tt> (2; 100%).

