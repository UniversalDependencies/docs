---
layout: base
title:  'Statistics of Voice in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Features: `Voice`

This feature is universal.
It occurs with 2 different values: `Act`, `Pass`.

154790 tokens (10%) have a non-empty value of `Voice`.
24977 types (19%) occur at least once with a non-empty value of `Voice`.
7722 lemmas (13%) occur at least once with a non-empty value of `Voice`.
The feature is used with 3 part-of-speech tags: [VERB](cs-pos-VERB.html) (110213; 7% instances), [AUX](cs-pos-AUX.html) (30553; 2% instances), [ADJ](cs-pos-ADJ.html) (14024; 1% instances).

### `VERB`

110213 [VERB](cs-pos-VERB.html) tokens (81% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (98477; 89%), <tt><a href="Number.html">Number</a>=Sing</tt> (69578; 63%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (59871; 54%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (59852; 54%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (59852; 54%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (59401; 54%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (110213; 100% of non-empty `Voice`): má je může řekl měl mají musí jde měla jsou
* `EMPTY` (25297): mít získat stát být hrát říci platit muset dělat dostat

`Voice` seems to be **lexical feature** of `VERB`. 100% lemmas (5061) occur only with one value of `Voice`.

### `AUX`

30553 [AUX](cs-pos-AUX.html) tokens (74% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (27517; 90%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (23774; 78%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (23770; 78%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (23770; 78%), <tt><a href="Number.html">Number</a>=Sing</tt> (21196; 69%), <tt><a href="Person.html">Person</a>=3</tt> (19830; 65%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (19272; 63%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (30553; 100% of non-empty `Voice`): je jsou bude byl jsem jsme bylo byla není budou
* `EMPTY` (10840): by být bychom bych byste buď buďte budiž býti bys

### `ADJ`

14024 [ADJ](cs-pos-ADJ.html) tokens (7% of all `ADJ` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `ADJ` and `Voice` co-occurred: <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (14024; 100%), <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (13807; 98%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (9506; 68%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (9325; 66%), <tt><a href="Number.html">Number</a>=Sing</tt> (7432; 53%).

`ADJ` tokens may have the following values of `Voice`:

* `Act` (4498; 32% of non-empty `Voice`): rozhodující vedoucí následující vynikající týkající odpovídající rostoucí žijící kupující následujících
* `Pass` (9526; 68% of non-empty `Voice`): řečeno přesvědčen připravena připraven otevřena rozhodnuto zvolen uzavřena uvedeno založena
* `EMPTY` (176313): první další české nové druhé poslední státní dalších možné vlastní

`Voice` seems to be **lexical feature** of `ADJ`. 100% lemmas (2662) occur only with one value of `Voice`.

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (12795; 95%),
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> VERB</tt> (6270; 82%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (4992; 84%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (815; 85%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (468; 59%),
<tt>VERB --[<a href="../dep/csubj:pass.html">csubj:pass</a>]--> VERB</tt> (197; 59%),
<tt>VERB --[<a href="../dep/appos.html">appos</a>]--> VERB</tt> (157; 96%),
<tt>VERB --[<a href="../dep/dep.html">dep</a>]--> VERB</tt> (44; 70%),
<tt>AUX --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (36; 100%),
<tt>VERB --[<a href="../dep/orphan.html">orphan</a>]--> VERB</tt> (21; 91%).

