---
layout: base
title:  'Statistics of Degree in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Features: `Degree`

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

13116 tokens (6%) have a non-empty value of `Degree`.
3330 types (12%) occur at least once with a non-empty value of `Degree`.
2252 lemmas (10%) occur at least once with a non-empty value of `Degree`.
The feature is used with 1 part-of-speech tags: <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt> (13116; 6% instances).

### `ADJ`

13116 <tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt> tokens (96% of all `ADJ` tokens) have a non-empty value of `Degree`.

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (836; 6% of non-empty `Degree`): <em>verder, beter, later, eerder, jongeren, meer, vroeger, langer, groter, grotere</em>
* `Pos` (11818; 90% of non-empty `Degree`): <em>nieuwe, grote, andere, goed, Nederlandse, heel, groot, eigen, goede, Amerikaanse</em>
* `Sup` (462; 4% of non-empty `Degree`): <em>laatste, grootste, beste, belangrijkste, hoogste, best, jongste, voornaamste, allerminst, oudste</em>
* `EMPTY` (606): <em>eerste, tweede, derde, eerst, vierde, vijfde, wat, geen, zevende, 19e</em>

<table>
  <tr><th>Paradigm <i>groot</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>grote, groot, groten</em></td><td><em>groter, grotere</em></td><td><em>grootste, grootst</em></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-ExtPos.html">ExtPos</a></tt><tt>=PROPN</tt></tt></td><td><em>Grote, Groot</em></td><td></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 94% lemmas (2118) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="nl_alpino-dep-advmod.html">advmod</a></tt>]--> ADJ</tt> (397; 89%),
<tt>ADJ --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> ADJ</tt> (229; 95%),
<tt>ADJ --[<tt><a href="nl_alpino-dep-parataxis.html">parataxis</a></tt>]--> ADJ</tt> (21; 81%),
<tt>ADJ --[<tt><a href="nl_alpino-dep-amod.html">amod</a></tt>]--> ADJ</tt> (16; 62%),
<tt>ADJ --[<tt><a href="nl_alpino-dep-flat.html">flat</a></tt>]--> ADJ</tt> (9; 90%),
<tt>ADJ --[<tt><a href="nl_alpino-dep-obl.html">obl</a></tt>]--> ADJ</tt> (5; 100%),
<tt>ADJ --[<tt><a href="nl_alpino-dep-fixed.html">fixed</a></tt>]--> ADJ</tt> (4; 67%),
<tt>ADJ --[<tt><a href="nl_alpino-dep-nsubj.html">nsubj</a></tt>]--> ADJ</tt> (4; 57%),
<tt>ADJ --[<tt><a href="nl_alpino-dep-obl-arg.html">obl:arg</a></tt>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<tt><a href="nl_alpino-dep-acl.html">acl</a></tt>]--> ADJ</tt> (1; 100%).

