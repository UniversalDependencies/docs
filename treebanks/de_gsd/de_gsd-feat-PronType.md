---
layout: base
title:  'Statistics of PronType in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Features: `PronType`

This feature is universal but the values `Emp` are language-specific.
It occurs with 10 different values: `Art`, `Dem`, `Emp`, `Ind`, `Int`, `Neg`, `Prs`, `Rcp`, `Rel`, `Tot`.
Some words have combined values of the feature; 2 combinations have been observed: `Dem|Rel`, `Int|Rel`.

53210 tokens (18%) have a non-empty value of `PronType`.
375 types (1%) occur at least once with a non-empty value of `PronType`.
115 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="de_gsd-pos-DET.html">DET</a></tt> (41202; 14% instances), <tt><a href="de_gsd-pos-PRON.html">PRON</a></tt> (10838; 4% instances), <tt><a href="de_gsd-pos-ADV.html">ADV</a></tt> (1170; 0% instances).

### `DET`

41202 <tt><a href="de_gsd-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="de_gsd-feat-NumType.html">NumType</a></tt><tt>=EMPTY</tt> (35554; 86%), <tt><a href="de_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt> (34010; 83%), <tt><a href="de_gsd-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (29413; 71%).

`DET` tokens may have the following values of `PronType`:

* `Art` (34883; 85% of non-empty `PronType`): <em>der, die, dem, den, das, des, eine, ein, einer, einen</em>
* `Dem` (1405; 3% of non-empty `PronType`): <em>diese, dieser, diesem, dieses, dies, diesen, solche, jener, solchen, derselben</em>
* `Emp` (40; 0% of non-empty `PronType`): <em>selben, selber</em>
* `Ind` (1236; 3% of non-empty `PronType`): <em>anderen, viele, andere, einige, viel, mehrere, anderem, vielen, meisten, mehr</em>
* `Int` (1; 0% of non-empty `PronType`): <em>wieviele</em>
* `Int,Rel` (119; 0% of non-empty `PronType`): <em>welche, welches, welcher, welchem, welchen, welch</em>
* `Neg` (301; 1% of non-empty `PronType`): <em>keine, kein, keinen, keinem, keiner, keinerlei, keines, keinster, No</em>
* `Prs` (2406; 6% of non-empty `PronType`): <em>seine, seiner, sein, ihre, seinen, seinem, ihren, ihrer, ihr, ihrem</em>
* `Tot` (811; 2% of non-empty `PronType`): <em>alle, beiden, allem, alles, allen, aller, beide, jede, jeden, jeder</em>
* `EMPTY` (3): <em>a, alla, dessa</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (45) occur only with one value of `PronType`.

### `PRON`

10838 <tt><a href="de_gsd-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="de_gsd-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (9142; 84%), <tt><a href="de_gsd-feat-Number.html">Number</a></tt><tt>=Sing</tt> (7520; 69%), <tt><a href="de_gsd-feat-Case.html">Case</a></tt><tt>=Nom</tt> (7167; 66%), <tt><a href="de_gsd-feat-Person.html">Person</a></tt><tt>=3</tt> (6345; 59%).

`PRON` tokens may have the following values of `PronType`:

* `Dem,Rel` (2356; 22% of non-empty `PronType`): <em>die, der, das, dem, deren, dessen, denen, den, derer</em>
* `Ind` (465; 4% of non-empty `PronType`): <em>man, etwas, jemand, sowas, irgendetwas, irgendwas, irgendwem, jemanden</em>
* `Int,Rel` (256; 2% of non-empty `PronType`): <em>was, wer, Wen, wem</em>
* `Neg` (72; 1% of non-empty `PronType`): <em>nichts, niemand, nix, niemanden, niemandes</em>
* `Prs` (7688; 71% of non-empty `PronType`): <em>er, sich, sie, es, ich, wir, ihm, ihn, uns, mir</em>
* `Rcp` (1; 0% of non-empty `PronType`): <em>einander</em>
* `EMPTY` (6): <em>Ich, All, Mit, meiner</em>

`PronType` seems to be **lexical feature** of `PRON`. 100% lemmas (28) occur only with one value of `PronType`.

### `ADV`

1170 <tt><a href="de_gsd-pos-ADV.html">ADV</a></tt> tokens (8% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Dem` (741; 63% of non-empty `PronType`): <em>damit, dazu, davon, darauf, daher, dafür, dadurch, darüber, darin, dagegen</em>
* `Ind` (99; 8% of non-empty `PronType`): <em>etwas, mehr, genug, viel, wenig, bisschen, bischen, bißchen, solch, soviel</em>
* `Int` (327; 28% of non-empty `PronType`): <em>wo, wobei, wie, warum, wodurch, wovon, weshalb, woraufhin, wonach, wozu</em>
* `Neg` (3; 0% of non-empty `PronType`): <em>keineswegs</em>
* `EMPTY` (12675): <em>auch, nur, noch, sehr, so, dort, wieder, hier, heute, jedoch</em>

`PronType` seems to be **lexical feature** of `ADV`. 100% lemmas (51) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>DET --[<tt><a href="de_gsd-dep-flat.html">flat</a></tt>]--> DET</tt> (4; 100%),
<tt>PRON --[<tt><a href="de_gsd-dep-conj.html">conj</a></tt>]--> PRON</tt> (2; 100%),
<tt>PRON --[<tt><a href="de_gsd-dep-det-poss.html">det:poss</a></tt>]--> DET</tt> (1; 100%),
<tt>PRON --[<tt><a href="de_gsd-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (1; 100%).

