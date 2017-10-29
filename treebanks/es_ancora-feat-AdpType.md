---
layout: base
title:  'Statistics of AdpType in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Features: `AdpType`

This feature is language-specific.
It occurs with 2 different values: `Prep`, `Preppron`.

88490 tokens (16%) have a non-empty value of `AdpType`.
117 types (0%) occur at least once with a non-empty value of `AdpType`.
85 lemmas (0%) occur at least once with a non-empty value of `AdpType`.
The feature is used with 3 part-of-speech tags: <tt><a href="es_ancora-pos-ADP.html">ADP</a></tt> (88049; 16% instances), <tt><a href="es_ancora-pos-ADV.html">ADV</a></tt> (254; 0% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> (187; 0% instances).

### `ADP`

88049 <tt><a href="es_ancora-pos-ADP.html">ADP</a></tt> tokens (100% of all `ADP` tokens) have a non-empty value of `AdpType`.

The most frequent other feature values with which `ADP` and `AdpType` co-occurred: <tt><a href="es_ancora-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (77354; 88%), <tt><a href="es_ancora-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (77354; 88%).

`ADP` tokens may have the following values of `AdpType`:

* `Prep` (77354; 88% of non-empty `AdpType`): <em>de, en, a, por, con, para, entre, sobre, sin, desde</em>
* `Preppron` (10695; 12% of non-empty `AdpType`): <em>del, al, da, do, dels, als, de, pelo</em>

<table>
  <tr><th>Paradigm <i>de</i></th><th><tt>Prep</tt></th><th><tt>Preppron</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>de</em></td><td></td></tr>
  <tr><td><tt><tt><a href="es_ancora-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="es_ancora-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>de</em></td></tr>
</table>

`AdpType` seems to be **lexical feature** of `ADP`. 97% lemmas (61) occur only with one value of `AdpType`.

### `ADV`

254 <tt><a href="es_ancora-pos-ADV.html">ADV</a></tt> tokens (1% of all `ADV` tokens) have a non-empty value of `AdpType`.

The most frequent other feature values with which `ADV` and `AdpType` co-occurred: <tt><a href="es_ancora-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (254; 100%).

`ADV` tokens may have the following values of `AdpType`:

* `Prep` (198; 78% of non-empty `AdpType`): <em>además, encima, debajo, acerca, después, dentro, detrás, aparte, delante, menos</em>
* `Preppron` (56; 22% of non-empty `AdpType`): <em>además, debajo, acerca, detrás, encima, después, dentro, lejos, alrededor, delante</em>

<table>
  <tr><th>Paradigm <i>después</i></th><th><tt>Prep</tt></th><th><tt>Preppron</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>después</em></td><td></td></tr>
  <tr><td><tt><tt><a href="es_ancora-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="es_ancora-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>después</em></td></tr>
</table>

### `ADJ`

187 <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> tokens (1% of all `ADJ` tokens) have a non-empty value of `AdpType`.

The most frequent other feature values with which `ADJ` and `AdpType` co-occurred: <tt><a href="es_ancora-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (187; 100%), <tt><a href="es_ancora-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (152; 81%), <tt><a href="es_ancora-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (152; 81%).

`ADJ` tokens may have the following values of `AdpType`:

* `Prep` (152; 81% of non-empty `AdpType`): <em>junto, debido, gran, nuevo</em>
* `Preppron` (35; 19% of non-empty `AdpType`): <em>junto, debido, mismo</em>

<table>
  <tr><th>Paradigm <i>junto</i></th><th><tt>Prep</tt></th><th><tt>Preppron</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>junto</em></td><td></td></tr>
  <tr><td><tt><tt><a href="es_ancora-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="es_ancora-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>junto</em></td></tr>
</table>

## Relations with Agreement in `AdpType`

The 10 most frequent relations where parent and child node agree in `AdpType`:
<tt>ADP --[<tt><a href="es_ancora-dep-fixed.html">fixed</a></tt>]--> ADP</tt> (1191; 80%),
<tt>ADJ --[<tt><a href="es_ancora-dep-fixed.html">fixed</a></tt>]--> ADP</tt> (183; 95%),
<tt>ADV --[<tt><a href="es_ancora-dep-fixed.html">fixed</a></tt>]--> ADP</tt> (176; 76%),
<tt>ADP --[<tt><a href="es_ancora-dep-case.html">case</a></tt>]--> ADP</tt> (87; 84%),
<tt>ADP --[<tt><a href="es_ancora-dep-case.html">case</a></tt>]--> ADV</tt> (4; 100%),
<tt>ADP --[<tt><a href="es_ancora-dep-case.html">case</a></tt>]--> ADJ</tt> (2; 100%),
<tt>ADP --[<tt><a href="es_ancora-dep-conj.html">conj</a></tt>]--> ADP</tt> (2; 100%),
<tt>ADP --[<tt><a href="es_ancora-dep-compound.html">compound</a></tt>]--> ADP</tt> (1; 100%),
<tt>ADP --[<tt><a href="es_ancora-dep-mark.html">mark</a></tt>]--> ADP</tt> (1; 100%).

