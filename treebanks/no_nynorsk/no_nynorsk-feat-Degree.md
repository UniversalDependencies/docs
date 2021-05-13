---
layout: base
title:  'Statistics of Degree in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Features: `Degree`

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

24498 tokens (8%) have a non-empty value of `Degree`.
4116 types (13%) occur at least once with a non-empty value of `Degree`.
2571 lemmas (11%) occur at least once with a non-empty value of `Degree`.
The feature is used with 1 part-of-speech tags: <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (24498; 8% instances).

### `ADJ`

24498 <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> tokens (90% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="no_nynorsk-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (17102; 70%), <tt><a href="no_nynorsk-feat-Number.html">Number</a></tt><tt>=Sing</tt> (15645; 64%), <tt><a href="no_nynorsk-feat-Definite.html">Definite</a></tt><tt>=Ind</tt> (12965; 53%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (2567; 10% of non-empty `Degree`): <em>meir, fleire, tidlegare, større, vidare, betre, mindre, lenger, nærare, seinare</em>
* `Pos` (20919; 85% of non-empty `Degree`): <em>mange, mykje, nye, store, heile, godt, heilt, norske, norsk, siste</em>
* `Sup` (1012; 4% of non-empty `Degree`): <em>mest, minst, fleste, beste, største, viktigaste, fremst, best, flest, meste</em>
* `EMPTY` (2651): <em>auka, 1., sett, samla, manglande, utvida, avgjerande, følgjande, knytt, overraska</em>

<table>
  <tr><th>Paradigm <i>mykje</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>meir, meire</em></td><td></td></tr>
  <tr><td><tt><tt><a href="no_nynorsk-feat-Definite.html">Definite</a></tt><tt>=Def</tt></tt></td><td></td><td></td><td><em>meste</em></td></tr>
  <tr><td><tt><tt><a href="no_nynorsk-feat-Definite.html">Definite</a></tt><tt>=Ind</tt></tt></td><td></td><td></td><td><em>mest</em></td></tr>
  <tr><td><tt><tt><a href="no_nynorsk-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="no_nynorsk-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="no_nynorsk-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>mykje</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="no_nynorsk-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="no_nynorsk-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>mykje</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="no_nynorsk-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>mykje</em></td><td></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 96% lemmas (2460) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="no_nynorsk-dep-conj.html">conj</a></tt>]--> ADJ</tt> (742; 78%),
<tt>ADJ --[<tt><a href="no_nynorsk-dep-amod.html">amod</a></tt>]--> ADJ</tt> (71; 69%),
<tt>ADJ --[<tt><a href="no_nynorsk-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (36; 62%),
<tt>ADJ --[<tt><a href="no_nynorsk-dep-nsubj.html">nsubj</a></tt>]--> ADJ</tt> (25; 54%),
<tt>ADJ --[<tt><a href="no_nynorsk-dep-csubj.html">csubj</a></tt>]--> ADJ</tt> (19; 76%),
<tt>ADJ --[<tt><a href="no_nynorsk-dep-appos.html">appos</a></tt>]--> ADJ</tt> (6; 86%).

