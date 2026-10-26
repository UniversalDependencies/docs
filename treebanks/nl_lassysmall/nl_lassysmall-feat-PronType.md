---
layout: base
title:  'Statistics of PronType in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Features: `PronType`

This feature is universal.
It occurs with 9 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rcp`, `Rel`, `Tot`.

46812 tokens (16%) have a non-empty value of `PronType`.
202 types (1%) occur at least once with a non-empty value of `PronType`.
78 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: <tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> (34811; 12% instances), <tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (12001; 4% instances).

### `DET`

34811 <tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt> tokens (99% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="nl_lassysmall-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (25935; 75%).

`DET` tokens may have the following values of `PronType`:

* `Art` (31733; 91% of non-empty `PronType`): <em>de, het, een, der, 's, 't, ene, den, des, t</em>
* `Dem` (1576; 5% of non-empty `PronType`): <em>deze, dit, die, dat, diens, dát</em>
* `Ind` (645; 2% of non-empty `PronType`): <em>veel, enkele, sommige, meer, enige, weinig, zo'n, enkel, enig, minder</em>
* `Int` (20; 0% of non-empty `PronType`): <em>welke, welk</em>
* `Neg` (314; 1% of non-empty `PronType`): <em>geen, géén</em>
* `Rel` (16; 0% of non-empty `PronType`): <em>welke, wier, wiens, welk</em>
* `Tot` (507; 1% of non-empty `PronType`): <em>alle, beide, elke, elk, iedere, ieder, aller, al, beider, ieders</em>
* `EMPTY` (221): <em>dezelfde, hetzelfde, meerdere, wat, allerlei, voldoende, datzelfde, zulke, teveel, 1/4</em>

<table>
  <tr><th>Paradigm <i>welk</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>welke, welk</em></td><td><em>welke, welk</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 95% lemmas (20) occur only with one value of `PronType`.

### `PRON`

12001 <tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="nl_lassysmall-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (9493; 79%), <tt><a href="nl_lassysmall-feat-Person.html">Person</a></tt><tt>=3</tt> (8888; 74%), <tt><a href="nl_lassysmall-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (8262; 69%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (1007; 8% of non-empty `PronType`): <em>dit, deze, dat, die, er, zo'n, degene, degenen, diegenen, dezen</em>
* `Ind` (972; 8% of non-empty `PronType`): <em>meer, veel, enige, alles, iets, velen, weinig, niets, minder, ene</em>
* `Int` (303; 3% of non-empty `PronType`): <em>wat, welke, wie, welk, dewelke</em>
* `Prs` (7723; 64% of non-empty `PronType`): <em>zijn, hij, het, ze, zich, hun, haar, men, hem, zij</em>
* `Rcp` (101; 1% of non-empty `PronType`): <em>elkaar, mekaar, elkander</em>
* `Rel` (1895; 16% of non-empty `PronType`): <em>die, dat, hetgeen, hetwelk</em>

<table>
  <tr><th>Paradigm <i>die</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>die</em></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Case.html">Case</a></tt><tt>=Dat</tt></tt></td><td></td><td><em>dien</em></td></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td></td><td><em>die</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 96% lemmas (73) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>DET --[<tt><a href="nl_lassysmall-dep-conj.html">conj</a></tt>]--> DET</tt> (32; 100%),
<tt>PRON --[<tt><a href="nl_lassysmall-dep-conj.html">conj</a></tt>]--> PRON</tt> (27; 100%),
<tt>DET --[<tt><a href="nl_lassysmall-dep-flat.html">flat</a></tt>]--> DET</tt> (21; 100%),
<tt>DET --[<tt><a href="nl_lassysmall-dep-fixed.html">fixed</a></tt>]--> DET</tt> (13; 100%),
<tt>DET --[<tt><a href="nl_lassysmall-dep-parataxis.html">parataxis</a></tt>]--> DET</tt> (1; 100%).

