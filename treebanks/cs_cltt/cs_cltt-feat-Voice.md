---
layout: base
title:  'Statistics of Voice in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Features: `Voice`

This feature is universal.
It occurs with 2 different values: `Act`, `Pass`.

2633 tokens (7%) have a non-empty value of `Voice`.
646 types (14%) occur at least once with a non-empty value of `Voice`.
389 lemmas (14%) occur at least once with a non-empty value of `Voice`.
The feature is used with 3 part-of-speech tags: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (1527; 4% instances), <tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt> (558; 2% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (548; 1% instances).

### `VERB`

1527 <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> tokens (83% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="cs_cltt-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (1412; 92%), <tt><a href="cs_cltt-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1411; 92%), <tt><a href="cs_cltt-feat-Person.html">Person</a></tt><tt>=3</tt> (1411; 92%), <tt><a href="cs_cltt-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (1411; 92%), <tt><a href="cs_cltt-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (1314; 86%), <tt><a href="cs_cltt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (998; 65%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (1527; 100% of non-empty `Voice`): <em>obsahuje, rozumí, může, uvede, mohou, použijí, stanoví, musí, účtuje, lze</em>
* `EMPTY` (314): <em>vést, použít, mít, účtovat, odpisovat, uvést, sestavit, zajistit, provést, určit</em>

`Voice` seems to be **lexical feature** of `VERB`. 100% lemmas (243) occur only with one value of `Voice`.

### `AUX`

558 <tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt> tokens (88% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="cs_cltt-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (499; 89%), <tt><a href="cs_cltt-feat-Person.html">Person</a></tt><tt>=3</tt> (499; 89%), <tt><a href="cs_cltt-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (499; 89%), <tt><a href="cs_cltt-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (477; 85%), <tt><a href="cs_cltt-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (471; 84%), <tt><a href="cs_cltt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (310; 56%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (558; 100% of non-empty `Voice`): <em>je, jsou, není, nejsou, byly, bude, byl, bylo, budou, nebyly</em>
* `EMPTY` (74): <em>být, by</em>

### `ADJ`

548 <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> tokens (8% of all `ADJ` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `ADJ` and `Voice` co-occurred: <tt><a href="cs_cltt-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (548; 100%), <tt><a href="cs_cltt-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (545; 99%), <tt><a href="cs_cltt-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (325; 59%), <tt><a href="cs_cltt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (282; 51%).

`ADJ` tokens may have the following values of `Voice`:

* `Act` (288; 53% of non-empty `Voice`): <em>konsolidující, zanikající, následujícího, související, předcházejícímu, týkající, přejímající, předcházející, souvisejících, řídících</em>
* `Pass` (260; 47% of non-empty `Voice`): <em>stanoveno, sestavena, zahrnuty, obchodovány, uvedeny, zavedena, oprávněn, uvedena, vykázány, účtovány</em>
* `EMPTY` (6224): <em>účetní, účetních, účetního, konsolidované, finanční, účetním, povinny, výroční, právní, jiných</em>

`Voice` seems to be **lexical feature** of `ADJ`. 100% lemmas (145) occur only with one value of `Voice`.

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<tt><a href="cs_cltt-dep-conj.html">conj</a></tt>]--> VERB</tt> (190; 97%),
<tt>VERB --[<tt><a href="cs_cltt-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (65; 96%),
<tt>VERB --[<tt><a href="cs_cltt-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (28; 100%),
<tt>VERB --[<tt><a href="cs_cltt-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (6; 60%),
<tt>VERB --[<tt><a href="cs_cltt-dep-advcl.html">advcl</a></tt>]--> AUX</tt> (4; 100%),
<tt>AUX --[<tt><a href="cs_cltt-dep-conj.html">conj</a></tt>]--> VERB</tt> (2; 100%),
<tt>VERB --[<tt><a href="cs_cltt-dep-ccomp.html">ccomp</a></tt>]--> AUX</tt> (2; 100%),
<tt>AUX --[<tt><a href="cs_cltt-dep-conj.html">conj</a></tt>]--> AUX</tt> (1; 100%),
<tt>VERB --[<tt><a href="cs_cltt-dep-amod.html">amod</a></tt>]--> ADJ</tt> (1; 100%),
<tt>VERB --[<tt><a href="cs_cltt-dep-appos.html">appos</a></tt>]--> VERB</tt> (1; 100%).

