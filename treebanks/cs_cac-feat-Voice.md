---
layout: base
title:  'Statistics of Voice in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Features: `Voice`

This feature is universal.
It occurs with 2 different values: `Act`, `Pass`.

50464 tokens (10%) have a non-empty value of `Voice`.
12504 types (20%) occur at least once with a non-empty value of `Voice`.
4865 lemmas (17%) occur at least once with a non-empty value of `Voice`.
The feature is used with 3 part-of-speech tags: [VERB](cs_cac-pos-VERB.html) (32524; 7% instances), [AUX](cs_cac-pos-AUX.html) (11531; 2% instances), [ADJ](cs_cac-pos-ADJ.html) (6409; 1% instances).

### `VERB`

32524 [VERB](cs_cac-pos-VERB.html) tokens (80% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (29667; 91%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (21961; 68%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (21953; 67%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (21953; 67%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (21876; 67%), <tt><a href="Number.html">Number</a>=Sing</tt> (18754; 58%), <tt><a href="Person.html">Person</a>=3</tt> (18469; 57%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (32524; 100% of non-empty `Voice`): je má mají musí může jde lze jsou mohou můžeme
* `EMPTY` (8066): mít být zajistit říci vidět dělat řešit věnovat použít provádět

`Voice` seems to be **lexical feature** of `VERB`. 100% lemmas (3268) occur only with one value of `Voice`.

### `AUX`

11531 [AUX](cs_cac-pos-AUX.html) tokens (81% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (10642; 92%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (9081; 79%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (9079; 79%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (9079; 79%), <tt><a href="Person.html">Person</a>=3</tt> (7991; 69%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (7983; 69%), <tt><a href="Number.html">Number</a>=Sing</tt> (7777; 67%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (11531; 100% of non-empty `Voice`): je jsou bude byl bylo byla jsme není byly jsem
* `EMPTY` (2713): by být bychom bych byste býti buď budiž bys buďme

### `ADJ`

6409 [ADJ](cs_cac-pos-ADJ.html) tokens (9% of all `ADJ` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `ADJ` and `Voice` co-occurred: <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (6409; 100%), <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (6356; 99%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (4261; 66%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (4055; 63%).

`ADJ` tokens may have the following values of `Voice`:

* `Act` (2143; 33% of non-empty `Voice`): pracujících rozhodující pracující vedoucí odpovídající následující řídící týkající vyplývající rostoucí
* `Pass` (4266; 67% of non-empty `Voice`): řečeno dosaženo věnována dána provedena uvedeny určena určeny splněny zahájena
* `EMPTY` (68385): další pracovní první jednotlivých základní nové možno socialistické různých každý

`Voice` seems to be **lexical feature** of `ADJ`. 100% lemmas (1597) occur only with one value of `Voice`.

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (4715; 97%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (1544; 83%),
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> VERB</tt> (862; 71%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (358; 66%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (213; 81%),
<tt>VERB --[<a href="../dep/csubj:pass.html">csubj:pass</a>]--> VERB</tt> (50; 62%),
<tt>VERB --[<a href="../dep/appos.html">appos</a>]--> VERB</tt> (23; 88%),
<tt>VERB --[<a href="../dep/dep.html">dep</a>]--> VERB</tt> (15; 63%),
<tt>AUX --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (13; 100%),
<tt>VERB --[<a href="../dep/orphan.html">orphan</a>]--> VERB</tt> (11; 73%).

