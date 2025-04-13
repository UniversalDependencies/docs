---
layout: base
title:  'Statistics of Voice in UD_Czech-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Czech-Poetry: Features: `Voice`

This feature is universal.
It occurs with 2 different values: `Act`, `Pass`.

842 tokens (13%) have a non-empty value of `Voice`.
649 types (24%) occur at least once with a non-empty value of `Voice`.
490 lemmas (26%) occur at least once with a non-empty value of `Voice`.
The feature is used with 3 part-of-speech tags: <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt> (637; 10% instances), <tt><a href="cs_poetry-pos-AUX.html">AUX</a></tt> (104; 2% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt> (101; 2% instances).

### `VERB`

637 <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt> tokens (86% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="cs_poetry-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (598; 94%), <tt><a href="cs_poetry-feat-Number.html">Number</a></tt><tt>=Sing</tt> (503; 79%), <tt><a href="cs_poetry-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt> (433; 68%), <tt><a href="cs_poetry-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (405; 64%), <tt><a href="cs_poetry-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (401; 63%), <tt><a href="cs_poetry-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (399; 63%), <tt><a href="cs_poetry-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (398; 62%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (637; 100% of non-empty `Voice`): <em>jdou, letí, měl, chce, jde, zdá, chcem, chtěl, hledá, mám</em>
* `EMPTY` (106): <em>Plyň, nech, dej, dejte, spi, stát, vidět, říci, Dejž, Nauč</em>

`Voice` seems to be **lexical feature** of `VERB`. 100% lemmas (400) occur only with one value of `Voice`.

### `AUX`

104 <tt><a href="cs_poetry-pos-AUX.html">AUX</a></tt> tokens (76% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="cs_poetry-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt> (104; 100%), <tt><a href="cs_poetry-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (96; 92%), <tt><a href="cs_poetry-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (86; 83%), <tt><a href="cs_poetry-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (86; 83%), <tt><a href="cs_poetry-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (86; 83%), <tt><a href="cs_poetry-feat-Number.html">Number</a></tt><tt>=Sing</tt> (77; 74%), <tt><a href="cs_poetry-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (76; 73%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (104; 100% of non-empty `Voice`): <em>je, jsem, jste, jest, byl, jsi, jsou, budeš, bylo, bude</em>
* `EMPTY` (32): <em>by, bych, být, buď, bychom, jsi, budiž, bys</em>

### `ADJ`

101 <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt> tokens (17% of all `ADJ` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `ADJ` and `Voice` co-occurred: <tt><a href="cs_poetry-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt> (101; 100%), <tt><a href="cs_poetry-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (97; 96%), <tt><a href="cs_poetry-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (81; 80%), <tt><a href="cs_poetry-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (79; 78%), <tt><a href="cs_poetry-feat-Number.html">Number</a></tt><tt>=Sing</tt> (69; 68%).

`ADJ` tokens may have the following values of `Voice`:

* `Act` (22; 22% of non-empty `Voice`): <em>Kypící, Oněmlé, Zsinalá, bijící, drtící, hořícího, hořícím, hynoucími, kající, mlčící</em>
* `Pass` (79; 78% of non-empty `Voice`): <em>Vyloupena, otráven, rozvodněná, skrytých, umdlená, zamračený, Drážděné, Neslýchané, Očištěna, Podťata</em>
* `EMPTY` (496): <em>věčné, bílé, celý, plný, bílý, jiné, kamenném, nové, tiché, tmavou</em>

`Voice` seems to be **lexical feature** of `ADJ`. 100% lemmas (89) occur only with one value of `Voice`.

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<tt><a href="cs_poetry-dep-conj.html">conj</a></tt>]--> VERB</tt> (171; 97%),
<tt>VERB --[<tt><a href="cs_poetry-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (54; 92%),
<tt>VERB --[<tt><a href="cs_poetry-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (53; 87%),
<tt>VERB --[<tt><a href="cs_poetry-dep-aux.html">aux</a></tt>]--> AUX</tt> (30; 52%),
<tt>VERB --[<tt><a href="cs_poetry-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (24; 80%),
<tt>VERB --[<tt><a href="cs_poetry-dep-csubj.html">csubj</a></tt>]--> VERB</tt> (4; 57%),
<tt>AUX --[<tt><a href="cs_poetry-dep-conj.html">conj</a></tt>]--> VERB</tt> (3; 75%),
<tt>VERB --[<tt><a href="cs_poetry-dep-conj.html">conj</a></tt>]--> AUX</tt> (2; 100%),
<tt>AUX --[<tt><a href="cs_poetry-dep-parataxis.html">parataxis</a></tt>]--> AUX</tt> (1; 100%),
<tt>VERB --[<tt><a href="cs_poetry-dep-acl.html">acl</a></tt>]--> VERB</tt> (1; 100%).

