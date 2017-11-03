---
layout: base
title:  'Statistics of AdpType in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Features: `AdpType`

This feature is language-specific.
It occurs with 3 different values: `Comprep`, `Prep`, `Voc`.

145943 tokens (10%) have a non-empty value of `AdpType`.
227 types (0%) occur at least once with a non-empty value of `AdpType`.
116 lemmas (0%) occur at least once with a non-empty value of `AdpType`.
The feature is used with 1 part-of-speech tags: <tt><a href="cs-pos-ADP.html">ADP</a></tt> (145943; 10% instances).

### `ADP`

145943 <tt><a href="cs-pos-ADP.html">ADP</a></tt> tokens (100% of all `ADP` tokens) have a non-empty value of `AdpType`.

`ADP` tokens may have the following values of `AdpType`:

* `Comprep` (286; 0% of non-empty `AdpType`): <em>vzhledem, nehledě, narozdíl</em>
* `Prep` (134515; 92% of non-empty `AdpType`): <em>v, na, o, z, s, do, k, pro, za, po</em>
* `Voc` (11142; 8% of non-empty `AdpType`): <em>ve, se, ze, ke, ode, beze, ku, skrze, přede, nade</em>

<table>
  <tr><th>Paradigm <i>v</i></th><th><tt>Prep</tt></th><th><tt>Voc</tt></th></tr>
  <tr><td><tt><tt><a href="cs-feat-Case.html">Case</a></tt><tt>=Acc</tt></tt></td><td><em>v</em></td><td><em>ve</em></td></tr>
  <tr><td><tt><tt><a href="cs-feat-Case.html">Case</a></tt><tt>=Loc</tt></tt></td><td><em>v</em></td><td><em>ve</em></td></tr>
</table>

`AdpType` seems to be **lexical feature** of `ADP`. 91% lemmas (105) occur only with one value of `AdpType`.

## Relations with Agreement in `AdpType`

The 10 most frequent relations where parent and child node agree in `AdpType`:
<tt>ADP --[<tt><a href="cs-dep-fixed.html">fixed</a></tt>]--> ADP</tt> (585; 53%),
<tt>ADP --[<tt><a href="cs-dep-conj.html">conj</a></tt>]--> ADP</tt> (10; 100%),
<tt>ADP --[<tt><a href="cs-dep-case.html">case</a></tt>]--> ADP</tt> (1; 100%),
<tt>ADP --[<tt><a href="cs-dep-flat-foreign.html">flat:foreign</a></tt>]--> ADP</tt> (1; 100%).

