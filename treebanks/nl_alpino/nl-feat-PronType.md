---
layout: base
title:  'Statistics of PronType in UD_Dutch'
udver: '2'
---

## Treebank Statistics: UD_Dutch: Features: `PronType`

This feature is universal.
It occurs with 6 different values: `Dem`, `Ind`, `Int`, `Prs`, `Rcp`, `Rel`.

13638 tokens (7%) have a non-empty value of `PronType`.
172 types (1%) occur at least once with a non-empty value of `PronType`.
79 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 1 part-of-speech tags: <tt><a href="nl-pos-PRON.html">PRON</a></tt> (13638; 7% instances).

### `PRON`

13638 <tt><a href="nl-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="nl-feat-Person.html">Person</a></tt><tt>=3</tt> (8234; 60%), <tt><a href="nl-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (8041; 59%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (837; 6% of non-empty `PronType`): <em>dat, dit, die, deze, zo'n, degenen, datgene, degene, zulke, dien</em>
* `Ind` (1504; 11% of non-empty `PronType`): <em>meer, veel, minder, weinig, iets, vele, niets, wat, meest, alles</em>
* `Int` (977; 7% of non-empty `PronType`): <em>wat, wie, welke, welk</em>
* `Prs` (8744; 64% of non-empty `PronType`): <em>hij, ik, het, zijn, zich, ze, we, je, men, hun</em>
* `Rcp` (67; 0% of non-empty `PronType`): <em>elkaar</em>
* `Rel` (1509; 11% of non-empty `PronType`): <em>die, dat, hetgeen, hetgene</em>

<table>
  <tr><th>Paradigm <i>die</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>die</em></td><td><em>die</em></td></tr>
  <tr><td><tt><tt><a href="nl-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td></td><td><em>die</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 96% lemmas (76) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="nl-dep-conj.html">conj</a></tt>]--> PRON</tt> (16; 94%),
<tt>PRON --[<tt><a href="nl-dep-nmod.html">nmod</a></tt>]--> PRON</tt> (16; 67%),
<tt>PRON --[<tt><a href="nl-dep-obl.html">obl</a></tt>]--> PRON</tt> (14; 88%),
<tt>PRON --[<tt><a href="nl-dep-fixed.html">fixed</a></tt>]--> PRON</tt> (8; 100%),
<tt>PRON --[<tt><a href="nl-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (3; 75%),
<tt>PRON --[<tt><a href="nl-dep-advmod.html">advmod</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="nl-dep-det.html">det</a></tt>]--> PRON</tt> (1; 100%).

