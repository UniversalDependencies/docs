---
layout: base
title:  'Statistics of Strength in UD_Romanian'
udver: '2'
---

## Treebank Statistics: UD_Romanian: Features: `Strength`

This feature is language-specific.
It occurs with 2 different values: `Strong`, `Weak`.

7189 tokens (3%) have a non-empty value of `Strength`.
117 types (0%) occur at least once with a non-empty value of `Strength`.
9 lemmas (0%) occur at least once with a non-empty value of `Strength`.
The feature is used with 1 part-of-speech tags: <tt><a href="ro-pos-PRON.html">PRON</a></tt> (7189; 3% instances).

### `PRON`

7189 <tt><a href="ro-pos-PRON.html">PRON</a></tt> tokens (61% of all `PRON` tokens) have a non-empty value of `Strength`.

The most frequent other feature values with which `PRON` and `Strength` co-occurred: <tt><a href="ro-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (7189; 100%), <tt><a href="ro-feat-Person.html">Person</a></tt><tt>=3</tt> (6035; 84%), <tt><a href="ro-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (5558; 77%), <tt><a href="ro-feat-Variant.html">Variant</a></tt><tt>=EMPTY</tt> (5135; 71%), <tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Acc</tt> (4916; 68%), <tt><a href="ro-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (4035; 56%), <tt><a href="ro-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt> (3931; 55%).

`PRON` tokens may have the following values of `Strength`:

* `Strong` (995; 14% of non-empty `Strength`): <em>el, ea, dumneavoastră, ei, ele, eu, noi, mine, lui, sine</em>
* `Weak` (6194; 86% of non-empty `Strength`): <em>se, s-, le, o, își, -și, -l, și-, îi, îl</em>

<table>
  <tr><th>Paradigm <i>sine</i></th><th><tt>Strong</tt></th><th><tt>Weak</tt></th></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Acc</tt></tt></td><td><em>sine</em></td><td><em>se</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="ro-feat-Variant.html">Variant</a></tt><tt>=Short</tt></tt></td><td></td><td><em>s-, -se, se-</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Dat</tt></tt></td><td></td><td><em>își, și</em></td></tr>
  <tr><td><tt><tt><a href="ro-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="ro-feat-Variant.html">Variant</a></tt><tt>=Short</tt></tt></td><td></td><td><em>-și, și-</em></td></tr>
</table>

## Relations with Agreement in `Strength`

The 10 most frequent relations where parent and child node agree in `Strength`:
<tt>PRON --[<tt><a href="ro-dep-conj.html">conj</a></tt>]--> PRON</tt> (6; 55%).

