---
layout: base
title:  'Statistics of PronType in UD_Norwegian-Bokmaal'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Bokmaal: Features: `PronType`

This feature is universal.
It occurs with 9 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rcp`, `Rel`, `Tot`.
Some words have combined values of the feature; 5 combinations have been observed: `Art|Prs`, `Dem|Ind`, `Ind|Prs`, `Neg|Prs`, `Prs|Tot`.

40335 tokens (13%) have a non-empty value of `PronType`.
180 types (1%) occur at least once with a non-empty value of `PronType`.
74 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: <tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt> (25955; 8% instances), <tt><a href="no_bokmaal-pos-DET.html">DET</a></tt> (14380; 5% instances).

### `PRON`

25955 <tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="no_bokmaal-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (16210; 62%), <tt><a href="no_bokmaal-feat-Number.html">Number</a></tt><tt>=Sing</tt> (15997; 62%), <tt><a href="no_bokmaal-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (14157; 55%), <tt><a href="no_bokmaal-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (13569; 52%).

`PRON` tokens may have the following values of `PronType`:

* `Art,Prs` (77; 0% of non-empty `PronType`): <em>en, ens</em>
* `Ind,Prs` (429; 2% of non-empty `PronType`): <em>noe, noen</em>
* `Int` (487; 2% of non-empty `PronType`): <em>hva, hvem, hvis, hvilket</em>
* `Neg` (47; 0% of non-empty `PronType`): <em>ingenting</em>
* `Neg,Prs` (104; 0% of non-empty `PronType`): <em>ingen</em>
* `Prs` (21218; 82% of non-empty `PronType`): <em>det, jeg, han, vi, de, seg, hun, du, dette, man</em>
* `Prs,Tot` (203; 1% of non-empty `PronType`): <em>alle, begge, enhver, samtlige, alles</em>
* `Rcp` (73; 0% of non-empty `PronType`): <em>hverandre, hverandres</em>
* `Rel` (3317; 13% of non-empty `PronType`): <em>som</em>

`PronType` seems to be **lexical feature** of `PRON`. 100% lemmas (51) occur only with one value of `PronType`.

### `DET`

14380 <tt><a href="no_bokmaal-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="no_bokmaal-feat-Number.html">Number</a></tt><tt>=Sing</tt> (10837; 75%).

`DET` tokens may have the following values of `PronType`:

* `Art` (6185; 43% of non-empty `PronType`): <em>en, et, ei, ens, at, er, ett</em>
* `Dem` (6053; 42% of non-empty `PronType`): <em>den, de, det, andre, denne, annet, disse, samme, dette, annen</em>
* `Dem,Ind` (1; 0% of non-empty `PronType`): <em>noe</em>
* `Ind` (555; 4% of non-empty `PronType`): <em>noen, noe, Endel</em>
* `Int` (104; 1% of non-empty `PronType`): <em>hvilke, hvilken, hvilket</em>
* `Neg` (197; 1% of non-empty `PronType`): <em>ingen, intet</em>
* `Prs` (488; 3% of non-empty `PronType`): <em>selv, egen, egne, eget, selve, 135a, sjøl, selveste, the, fire-fem</em>
* `Tot` (797; 6% of non-empty `PronType`): <em>alle, hver, hvert, all, begge, alt, enhver, samtlige, ethvert, alles</em>

<table>
  <tr><th>Paradigm <i>den</i></th><th><tt>Prs</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt><tt><a href="no_bokmaal-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="no_bokmaal-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td></td><td><em>dens</em></td></tr>
  <tr><td><tt><tt><a href="no_bokmaal-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="no_bokmaal-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td></td><td><em>dens</em></td></tr>
  <tr><td><tt><tt><a href="no_bokmaal-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td></td><td><em>den</em></td></tr>
  <tr><td><tt><tt><a href="no_bokmaal-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>den</em></td><td><em>den</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 95% lemmas (37) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="no_bokmaal-dep-det.html">det</a></tt>]--> DET</tt> (156; 64%),
<tt>DET --[<tt><a href="no_bokmaal-dep-det.html">det</a></tt>]--> DET</tt> (81; 53%),
<tt>PRON --[<tt><a href="no_bokmaal-dep-expl.html">expl</a></tt>]--> PRON</tt> (70; 75%),
<tt>PRON --[<tt><a href="no_bokmaal-dep-conj.html">conj</a></tt>]--> PRON</tt> (32; 86%),
<tt>PRON --[<tt><a href="no_bokmaal-dep-appos.html">appos</a></tt>]--> PRON</tt> (19; 95%),
<tt>DET --[<tt><a href="no_bokmaal-dep-det.html">det</a></tt>]--> PRON</tt> (5; 100%),
<tt>DET --[<tt><a href="no_bokmaal-dep-nsubj.html">nsubj</a></tt>]--> DET</tt> (1; 100%),
<tt>DET --[<tt><a href="no_bokmaal-dep-orphan.html">orphan</a></tt>]--> DET</tt> (1; 100%).

