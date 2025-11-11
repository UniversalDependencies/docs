---
layout: base
title:  'Statistics of PronType in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Features: `PronType`

This feature is universal but the values `Exc` are language-specific.
It occurs with 10 different values: `Art`, `Dem`, `Exc`, `Ind`, `Int`, `Neg`, `Prs`, `Rcp`, `Rel`, `Tot`.

37949 tokens (18%) have a non-empty value of `PronType`.
202 types (1%) occur at least once with a non-empty value of `PronType`.
71 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: <tt><a href="nl_alpino-pos-DET.html">DET</a></tt> (24784; 12% instances), <tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (13165; 6% instances).

### `DET`

24784 <tt><a href="nl_alpino-pos-DET.html">DET</a></tt> tokens (99% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="nl_alpino-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (17361; 70%).

`DET` tokens may have the following values of `PronType`:

* `Art` (21698; 88% of non-empty `PronType`): <em>de, het, een, der, 's, 't, 'n, des, den, en</em>
* `Dem` (1187; 5% of non-empty `PronType`): <em>deze, dit, die, dat, diens, dezer, dien</em>
* `Ind` (379; 2% of non-empty `PronType`): <em>enkele, veel, enige, zo'n, meer, weinig, sommige, enig, minder, enkel</em>
* `Int` (805; 3% of non-empty `PronType`): <em>welke, welk, Welek</em>
* `Neg` (337; 1% of non-empty `PronType`): <em>geen</em>
* `Rel` (24; 0% of non-empty `PronType`): <em>wiens, wier, welk</em>
* `Tot` (354; 1% of non-empty `PronType`): <em>alle, beide, elke, ieder, elk, iedere, al, ieders, beider</em>
* `EMPTY` (175): <em>dezelfde, allerlei, wat, 1/2, hetzelfde, zulke, eenzelfde, onvoldoende, diezelfde, elkaars</em>

<table>
  <tr><th>Paradigm <i>welk</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>welke, welk, Welek</em></td><td><em>welk</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 95% lemmas (20) occur only with one value of `PronType`.

### `PRON`

13165 <tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="nl_alpino-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (11600; 88%), <tt><a href="nl_alpino-feat-Person.html">Person</a></tt><tt>=3</tt> (8334; 63%), <tt><a href="nl_alpino-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (7582; 58%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (956; 7% of non-empty `PronType`): <em>dat, dit, die, er, deze, zo'n, degenen, datgene, degene, d'r</em>
* `Exc` (8; 0% of non-empty `PronType`): <em>wat</em>
* `Ind` (923; 7% of non-empty `PronType`): <em>meer, iets, niets, veel, alles, wat, enige, minder, iedereen, weinig</em>
* `Int` (968; 7% of non-empty `PronType`): <em>wat, wie, welke, welk</em>
* `Prs` (8734; 66% of non-empty `PronType`): <em>hij, ik, het, zijn, zich, ze, we, je, men, hun</em>
* `Rcp` (67; 1% of non-empty `PronType`): <em>elkaar</em>
* `Rel` (1509; 11% of non-empty `PronType`): <em>die, dat, hetgeen, hetgene</em>

<table>
  <tr><th>Paradigm <i>wat</i></th><th><tt>Int</tt></th><th><tt>Ind</tt></th><th><tt>Exc</tt></th></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-ExtPos.html">ExtPos</a></tt><tt>=ADV</tt></tt></td><td><em>wat</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-ExtPos.html">ExtPos</a></tt><tt>=PRON</tt></tt></td><td><em>wat</em></td><td></td><td><em>wat</em></td></tr>
  <tr><td><tt></tt></td><td><em>wat</em></td><td><em>wat</em></td><td><em>wat</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 94% lemmas (65) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> PRON</tt> (17; 94%),
<tt>PRON --[<tt><a href="nl_alpino-dep-nmod.html">nmod</a></tt>]--> PRON</tt> (8; 53%),
<tt>DET --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> DET</tt> (4; 100%),
<tt>DET --[<tt><a href="nl_alpino-dep-fixed.html">fixed</a></tt>]--> DET</tt> (4; 100%),
<tt>DET --[<tt><a href="nl_alpino-dep-flat.html">flat</a></tt>]--> DET</tt> (3; 100%),
<tt>PRON --[<tt><a href="nl_alpino-dep-fixed.html">fixed</a></tt>]--> PRON</tt> (3; 100%),
<tt>DET --[<tt><a href="nl_alpino-dep-parataxis.html">parataxis</a></tt>]--> DET</tt> (2; 100%),
<tt>PRON --[<tt><a href="nl_alpino-dep-obl.html">obl</a></tt>]--> PRON</tt> (2; 67%),
<tt>PRON --[<tt><a href="nl_alpino-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (2; 67%).

