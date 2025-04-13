---
layout: base
title:  'Statistics of Voice in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Features: `Voice`

This feature is universal.
It occurs with 2 different values: `Act`, `Pass`.

2595 tokens (7%) have a non-empty value of `Voice`.
637 types (14%) occur at least once with a non-empty value of `Voice`.
382 lemmas (14%) occur at least once with a non-empty value of `Voice`.
The feature is used with 3 part-of-speech tags: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (1507; 4% instances), <tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt> (547; 2% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (541; 2% instances).

### `VERB`

1507 <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> tokens (83% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="cs_cltt-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (1394; 93%), <tt><a href="cs_cltt-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1393; 92%), <tt><a href="cs_cltt-feat-Person.html">Person</a></tt><tt>=3</tt> (1393; 92%), <tt><a href="cs_cltt-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (1393; 92%), <tt><a href="cs_cltt-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (1297; 86%), <tt><a href="cs_cltt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (985; 65%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (1507; 100% of non-empty `Voice`): <em>obsahuje, rozumí, může, uvede, mohou, použijí, stanoví, musí, účtuje, lze</em>
* `EMPTY` (312): <em>vést, použít, mít, účtovat, odpisovat, uvést, sestavit, zajistit, provést, určit</em>

`Voice` seems to be **lexical feature** of `VERB`. 100% lemmas (240) occur only with one value of `Voice`.

### `AUX`

547 <tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt> tokens (88% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="cs_cltt-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt> (547; 100%), <tt><a href="cs_cltt-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (488; 89%), <tt><a href="cs_cltt-feat-Person.html">Person</a></tt><tt>=3</tt> (488; 89%), <tt><a href="cs_cltt-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (488; 89%), <tt><a href="cs_cltt-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (466; 85%), <tt><a href="cs_cltt-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (461; 84%), <tt><a href="cs_cltt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (307; 56%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (547; 100% of non-empty `Voice`): <em>je, jsou, není, nejsou, byly, bude, byl, bylo, budou, nebyly</em>
* `EMPTY` (72): <em>být, by</em>

### `ADJ`

541 <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> tokens (8% of all `ADJ` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `ADJ` and `Voice` co-occurred: <tt><a href="cs_cltt-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (538; 99%), <tt><a href="cs_cltt-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (324; 60%), <tt><a href="cs_cltt-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (287; 53%), <tt><a href="cs_cltt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (281; 52%).

`ADJ` tokens may have the following values of `Voice`:

* `Act` (287; 53% of non-empty `Voice`): <em>konsolidující, zanikající, následujícího, související, předcházejícímu, týkající, přejímající, předcházející, souvisejících, řídících</em>
* `Pass` (254; 47% of non-empty `Voice`): <em>stanoveno, sestavena, obchodovány, uvedeny, zahrnuty, zavedena, oprávněn, uvedena, vykázány, účtovány</em>
* `EMPTY` (6102): <em>účetní, účetních, účetního, konsolidované, finanční, účetním, povinny, právní, výroční, ostatní</em>

`Voice` seems to be **lexical feature** of `ADJ`. 100% lemmas (141) occur only with one value of `Voice`.

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<tt><a href="cs_cltt-dep-conj.html">conj</a></tt>]--> VERB</tt> (188; 97%),
<tt>VERB --[<tt><a href="cs_cltt-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (65; 94%),
<tt>VERB --[<tt><a href="cs_cltt-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (28; 100%),
<tt>VERB --[<tt><a href="cs_cltt-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (6; 60%),
<tt>VERB --[<tt><a href="cs_cltt-dep-advcl.html">advcl</a></tt>]--> AUX</tt> (2; 100%),
<tt>VERB --[<tt><a href="cs_cltt-dep-ccomp.html">ccomp</a></tt>]--> AUX</tt> (2; 100%),
<tt>AUX --[<tt><a href="cs_cltt-dep-conj.html">conj</a></tt>]--> AUX</tt> (1; 100%),
<tt>VERB --[<tt><a href="cs_cltt-dep-amod.html">amod</a></tt>]--> ADJ</tt> (1; 100%),
<tt>VERB --[<tt><a href="cs_cltt-dep-appos.html">appos</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="cs_cltt-dep-csubj-pass.html">csubj:pass</a></tt>]--> VERB</tt> (1; 100%).

