---
layout: base
title:  'Statistics of Strength in UD_Romanian-RRT'
udver: '2'
---

## Treebank Statistics: UD_Romanian-RRT: Features: `Strength`

This feature is language-specific.
It occurs with 2 different values: `Strong`, `Weak`.

7713 tokens (4%) have a non-empty value of `Strength`.
116 types (0%) occur at least once with a non-empty value of `Strength`.
10 lemmas (0%) occur at least once with a non-empty value of `Strength`.
The feature is used with 1 part-of-speech tags: <tt><a href="ro_rrt-pos-PRON.html">PRON</a></tt> (7713; 4% instances).

### `PRON`

7713 <tt><a href="ro_rrt-pos-PRON.html">PRON</a></tt> tokens (63% of all `PRON` tokens) have a non-empty value of `Strength`.

The most frequent other feature values with which `PRON` and `Strength` co-occurred: <tt><a href="ro_rrt-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (7713; 100%), <tt><a href="ro_rrt-feat-Person.html">Person</a></tt><tt>=3</tt> (6560; 85%), <tt><a href="ro_rrt-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (5789; 75%), <tt><a href="ro_rrt-feat-Variant.html">Variant</a></tt><tt>=EMPTY</tt> (5607; 73%), <tt><a href="ro_rrt-feat-Case.html">Case</a></tt><tt>=Acc</tt> (4836; 63%), <tt><a href="ro_rrt-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (4040; 52%), <tt><a href="ro_rrt-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt> (3936; 51%).

`PRON` tokens may have the following values of `Strength`:

* `Strong` (1511; 20% of non-empty `Strength`): <em>el, lui, ei, lor, ea, dumneavoastră, ele, eu, noi, mine</em>
* `Weak` (6202; 80% of non-empty `Strength`): <em>se, s-, -l, o, își, -și, le, -i, și-, îi</em>

<table>
  <tr><th>Paradigm <i>sine</i></th><th><tt>Strong</tt></th><th><tt>Weak</tt></th></tr>
  <tr><td><tt><tt><a href="ro_rrt-feat-Case.html">Case</a></tt><tt>=Acc</tt></tt></td><td><em>sine</em></td><td><em>se, să</em></td></tr>
  <tr><td><tt><tt><a href="ro_rrt-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="ro_rrt-feat-Variant.html">Variant</a></tt><tt>=Short</tt></tt></td><td></td><td><em>s-, -se, se-</em></td></tr>
  <tr><td><tt><tt><a href="ro_rrt-feat-Case.html">Case</a></tt><tt>=Dat</tt></tt></td><td></td><td><em>își, și</em></td></tr>
  <tr><td><tt><tt><a href="ro_rrt-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="ro_rrt-feat-Variant.html">Variant</a></tt><tt>=Short</tt></tt></td><td></td><td><em>-și, și-</em></td></tr>
</table>

## Relations with Agreement in `Strength`

The 10 most frequent relations where parent and child node agree in `Strength`:
<tt>PRON --[<tt><a href="ro_rrt-dep-conj.html">conj</a></tt>]--> PRON</tt> (7; 54%).

