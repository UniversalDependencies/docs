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
The feature is used with 3 part-of-speech tags: <tt><a href="cs-pos-VERB.html">VERB</a></tt> (110213; 7% instances), <tt><a href="cs-pos-AUX.html">AUX</a></tt> (30553; 2% instances), <tt><a href="cs-pos-ADJ.html">ADJ</a></tt> (14024; 1% instances).

### `VERB`

110213 <tt><a href="cs-pos-VERB.html">VERB</a></tt> tokens (81% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="cs-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (98477; 89%), <tt><a href="cs-feat-Number.html">Number</a></tt><tt>=Sing</tt> (69578; 63%), <tt><a href="cs-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (59871; 54%), <tt><a href="cs-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (59852; 54%), <tt><a href="cs-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (59852; 54%), <tt><a href="cs-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (59401; 54%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (110213; 100% of non-empty `Voice`): <em>má, je, může, řekl, měl, mají, musí, jde, měla, jsou</em>
* `EMPTY` (25297): <em>mít, získat, stát, být, hrát, říci, platit, muset, dělat, dostat</em>

`Voice` seems to be **lexical feature** of `VERB`. 100% lemmas (5061) occur only with one value of `Voice`.

### `AUX`

30553 <tt><a href="cs-pos-AUX.html">AUX</a></tt> tokens (74% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="cs-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (27517; 90%), <tt><a href="cs-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (23774; 78%), <tt><a href="cs-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (23770; 78%), <tt><a href="cs-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (23770; 78%), <tt><a href="cs-feat-Number.html">Number</a></tt><tt>=Sing</tt> (21196; 69%), <tt><a href="cs-feat-Person.html">Person</a></tt><tt>=3</tt> (19830; 65%), <tt><a href="cs-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (19272; 63%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (30553; 100% of non-empty `Voice`): <em>je, jsou, bude, byl, jsem, jsme, bylo, byla, není, budou</em>
* `EMPTY` (10840): <em>by, být, bychom, bych, byste, buď, buďte, budiž, býti, bys</em>

### `ADJ`

14024 <tt><a href="cs-pos-ADJ.html">ADJ</a></tt> tokens (7% of all `ADJ` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `ADJ` and `Voice` co-occurred: <tt><a href="cs-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (14024; 100%), <tt><a href="cs-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (13807; 98%), <tt><a href="cs-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (9506; 68%), <tt><a href="cs-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (9325; 66%), <tt><a href="cs-feat-Number.html">Number</a></tt><tt>=Sing</tt> (7432; 53%).

`ADJ` tokens may have the following values of `Voice`:

* `Act` (4498; 32% of non-empty `Voice`): <em>rozhodující, vedoucí, následující, vynikající, týkající, odpovídající, rostoucí, žijící, kupující, následujících</em>
* `Pass` (9526; 68% of non-empty `Voice`): <em>řečeno, přesvědčen, připravena, připraven, otevřena, rozhodnuto, zvolen, uzavřena, uvedeno, založena</em>
* `EMPTY` (175161): <em>první, další, české, nové, druhé, poslední, státní, dalších, možné, vlastní</em>

`Voice` seems to be **lexical feature** of `ADJ`. 100% lemmas (2662) occur only with one value of `Voice`.

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<tt><a href="cs-dep-conj.html">conj</a></tt>]--> VERB</tt> (12795; 95%),
<tt>VERB --[<tt><a href="cs-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (6270; 82%),
<tt>VERB --[<tt><a href="cs-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (4992; 84%),
<tt>VERB --[<tt><a href="cs-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (815; 85%),
<tt>ADJ --[<tt><a href="cs-dep-conj.html">conj</a></tt>]--> ADJ</tt> (468; 59%),
<tt>VERB --[<tt><a href="cs-dep-csubj-pass.html">csubj:pass</a></tt>]--> VERB</tt> (197; 59%),
<tt>VERB --[<tt><a href="cs-dep-appos.html">appos</a></tt>]--> VERB</tt> (157; 96%),
<tt>VERB --[<tt><a href="cs-dep-dep.html">dep</a></tt>]--> VERB</tt> (44; 70%),
<tt>AUX --[<tt><a href="cs-dep-conj.html">conj</a></tt>]--> VERB</tt> (36; 100%),
<tt>VERB --[<tt><a href="cs-dep-orphan.html">orphan</a></tt>]--> VERB</tt> (21; 91%).

