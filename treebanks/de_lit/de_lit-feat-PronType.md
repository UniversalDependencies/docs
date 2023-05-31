---
layout: base
title:  'Statistics of PronType in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Features: `PronType`

This feature is universal.
It occurs with 9 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rcp`, `Rel`, `Tot`.
Some words have combined values of the feature; 2 combinations have been observed: `Dem|Rel`, `Int|Rel`.

8806 tokens (22%) have a non-empty value of `PronType`.
284 types (4%) occur at least once with a non-empty value of `PronType`.
78 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="de_lit-pos-DET.html">DET</a></tt> (5881; 15% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (2734; 7% instances), <tt><a href="de_lit-pos-ADV.html">ADV</a></tt> (191; 0% instances).

### `DET`

5881 <tt><a href="de_lit-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="de_lit-feat-NumType.html">NumType</a></tt><tt>=EMPTY</tt> (4885; 83%), <tt><a href="de_lit-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (3334; 57%).

`DET` tokens may have the following values of `PronType`:

* `Art` (4301; 73% of non-empty `PronType`): <em>der, die, ein, das, den, eine, des, dem, einer, einen</em>
* `Dem` (333; 6% of non-empty `PronType`): <em>diese, dieser, dieses, dies, diesem, solche, jener, jene, diesen, derselben</em>
* `Ind` (294; 5% of non-empty `PronType`): <em>andre, viele, andern, viel, einige, manche, mancher, meisten, mehr, vielen</em>
* `Int` (1; 0% of non-empty `PronType`): <em>Wieviel</em>
* `Int,Rel` (98; 2% of non-empty `PronType`): <em>welche, welches, welcher, welchem, welchen</em>
* `Neg` (93; 2% of non-empty `PronType`): <em>keine, kein, keinen, keiner, keins, keinem, keines</em>
* `Prs` (418; 7% of non-empty `PronType`): <em>ihre, seine, ihr, seiner, ihrer, sein, ihren, seinem, seinen, seines</em>
* `Tot` (343; 6% of non-empty `PronType`): <em>alle, alles, aller, allen, jeder, jedem, jedes, jede, beiden, allem</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (31) occur only with one value of `PronType`.

### `PRON`

2734 <tt><a href="de_lit-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="de_lit-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (2390; 87%), <tt><a href="de_lit-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1727; 63%), <tt><a href="de_lit-feat-Case.html">Case</a></tt><tt>=Nom</tt> (1519; 56%), <tt><a href="de_lit-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1476; 54%), <tt><a href="de_lit-feat-Person.html">Person</a></tt><tt>=3</tt> (1387; 51%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (3; 0% of non-empty `PronType`): <em>cela, This</em>
* `Dem,Rel` (474; 17% of non-empty `PronType`): <em>die, der, das, dem, den, deren, denen, dessen, derer</em>
* `Ind` (366; 13% of non-empty `PronType`): <em>man, etwas, jemand, irgendetwas, jemanden, mans</em>
* `Int,Rel` (206; 8% of non-empty `PronType`): <em>was, wer, wem</em>
* `Neg` (85; 3% of non-empty `PronType`): <em>nichts, niemand, niemanden</em>
* `Prs` (1593; 58% of non-empty `PronType`): <em>es, sich, sie, er, wir, uns, ich, ihm, ihn, ihnen</em>
* `Rcp` (4; 0% of non-empty `PronType`): <em>einander</em>
* `Rel` (1; 0% of non-empty `PronType`): <em>che</em>
* `Tot` (2; 0% of non-empty `PronType`): <em>jedermann</em>

`PronType` seems to be **lexical feature** of `PRON`. 100% lemmas (23) occur only with one value of `PronType`.

### `ADV`

191 <tt><a href="de_lit-pos-ADV.html">ADV</a></tt> tokens (5% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Dem` (136; 71% of non-empty `PronType`): <em>daher, darin, darum, dadurch, dazu, davon, darauf, daraus, dagegen, damit</em>
* `Ind` (32; 17% of non-empty `PronType`): <em>genug, etwas, bißchen</em>
* `Int` (23; 12% of non-empty `PronType`): <em>wodurch, worin, wozu, worauf, wobei, womit, wonach, woraus, wovon</em>
* `EMPTY` (3397): <em>so, nur, auch, selbst, wie, noch, doch, aber, immer, wohl</em>

`PronType` seems to be **lexical feature** of `ADV`. 100% lemmas (26) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>DET --[<tt><a href="de_lit-dep-conj.html">conj</a></tt>]--> DET</tt> (6; 86%),
<tt>PRON --[<tt><a href="de_lit-dep-conj.html">conj</a></tt>]--> PRON</tt> (6; 86%),
<tt>PRON --[<tt><a href="de_lit-dep-det-poss.html">det:poss</a></tt>]--> DET</tt> (2; 100%),
<tt>DET --[<tt><a href="de_lit-dep-det.html">det</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="de_lit-dep-acl.html">acl</a></tt>]--> ADV</tt> (1; 100%),
<tt>PRON --[<tt><a href="de_lit-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (1; 100%).

