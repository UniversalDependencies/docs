---
layout: base
title:  'Statistics of PronType in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Features: `PronType`

This feature is universal.
It occurs with 6 different values: `Dem`, `Ind`, `Int`, `Prs`, `Rcp`, `Rel`.

9507 tokens (6%) have a non-empty value of `PronType`.
154 types (1%) occur at least once with a non-empty value of `PronType`.
70 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 1 part-of-speech tags: <tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (9507; 6% instances).

### `PRON`

9507 <tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="nl_alpino-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (8155; 86%), <tt><a href="nl_alpino-feat-Person.html">Person</a></tt><tt>=3</tt> (6124; 64%), <tt><a href="nl_alpino-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (5755; 61%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (794; 8% of non-empty `PronType`): <em>dat, dit, die, er, deze, zo'n, degenen, degene, datgene, d'r</em>
* `Ind` (783; 8% of non-empty `PronType`): <em>meer, veel, iets, niets, alles, wat, minder, enige, iedereen, weinig</em>
* `Int` (280; 3% of non-empty `PronType`): <em>wat, wie, welke, welk</em>
* `Prs` (6338; 67% of non-empty `PronType`): <em>het, hij, zijn, ik, zich, ze, je, we, hun, zij</em>
* `Rcp` (62; 1% of non-empty `PronType`): <em>elkaar</em>
* `Rel` (1250; 13% of non-empty `PronType`): <em>die, dat, hetgeen, hetgene</em>
* `EMPTY` (8): <em>wat</em>

<table>
  <tr><th>Paradigm <i>die</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>die</em></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Case.html">Case</a></tt><tt>=Dat</tt></tt></td><td></td><td><em>dien</em></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td></td><td><em>die</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 96% lemmas (67) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> PRON</tt> (11; 92%),
<tt>PRON --[<tt><a href="nl_alpino-dep-nmod.html">nmod</a></tt>]--> PRON</tt> (6; 55%),
<tt>PRON --[<tt><a href="nl_alpino-dep-fixed.html">fixed</a></tt>]--> PRON</tt> (3; 100%),
<tt>PRON --[<tt><a href="nl_alpino-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (3; 75%),
<tt>PRON --[<tt><a href="nl_alpino-dep-expl.html">expl</a></tt>]--> PRON</tt> (2; 67%),
<tt>PRON --[<tt><a href="nl_alpino-dep-obl.html">obl</a></tt>]--> PRON</tt> (2; 67%).

