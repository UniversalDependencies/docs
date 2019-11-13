---
layout: base
title:  'Statistics of PronType in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Features: `PronType`

This feature is universal.
It occurs with 6 different values: `Dem`, `Ind`, `Int`, `Prs`, `Rcp`, `Rel`.

13111 tokens (6%) have a non-empty value of `PronType`.
166 types (1%) occur at least once with a non-empty value of `PronType`.
78 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 1 part-of-speech tags: <tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (13111; 6% instances).

### `PRON`

13111 <tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="nl_alpino-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (11568; 88%), <tt><a href="nl_alpino-feat-Person.html">Person</a></tt><tt>=3</tt> (8308; 63%), <tt><a href="nl_alpino-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (7516; 57%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (922; 7% of non-empty `PronType`): <em>dat, dit, er, die, deze, zo'n, degenen, datgene, degene, d'r</em>
* `Ind` (916; 7% of non-empty `PronType`): <em>meer, iets, niets, veel, alles, wat, enige, minder, iedereen, weinig</em>
* `Int` (976; 7% of non-empty `PronType`): <em>wat, wie, welke, welk</em>
* `Prs` (8721; 67% of non-empty `PronType`): <em>hij, ik, het, zijn, zich, ze, we, je, men, hun</em>
* `Rcp` (67; 1% of non-empty `PronType`): <em>elkaar</em>
* `Rel` (1509; 12% of non-empty `PronType`): <em>die, dat, hetgeen, hetgene</em>

<table>
  <tr><th>Paradigm <i>die</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>die</em></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td></td><td><em>die</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 96% lemmas (75) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> PRON</tt> (16; 94%),
<tt>PRON --[<tt><a href="nl_alpino-dep-fixed.html">fixed</a></tt>]--> PRON</tt> (8; 100%),
<tt>PRON --[<tt><a href="nl_alpino-dep-nmod.html">nmod</a></tt>]--> PRON</tt> (8; 53%),
<tt>PRON --[<tt><a href="nl_alpino-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (3; 75%),
<tt>PRON --[<tt><a href="nl_alpino-dep-obl.html">obl</a></tt>]--> PRON</tt> (2; 67%).

