---
layout: base
title:  'Statistics of Voice in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Features: `Voice`

This feature is universal.
It occurs with 2 different values: `Act`, `Pass`.

154761 tokens (10%) have a non-empty value of `Voice`.
24975 types (19%) occur at least once with a non-empty value of `Voice`.
7721 lemmas (13%) occur at least once with a non-empty value of `Voice`.
The feature is used with 3 part-of-speech tags: <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt> (110182; 7% instances), <tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (30555; 2% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (14024; 1% instances).

### `VERB`

110182 <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt> tokens (81% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="cs_pdt-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (98445; 89%), <tt><a href="cs_pdt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (69548; 63%), <tt><a href="cs_pdt-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (59856; 54%), <tt><a href="cs_pdt-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (59837; 54%), <tt><a href="cs_pdt-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (59837; 54%), <tt><a href="cs_pdt-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (59367; 54%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (110182; 100% of non-empty `Voice`): <em>má, je, může, řekl, měl, mají, musí, jde, měla, jsou</em>
* `EMPTY` (25297): <em>mít, získat, stát, být, hrát, říci, platit, muset, dělat, dostat</em>

`Voice` seems to be **lexical feature** of `VERB`. 100% lemmas (5060) occur only with one value of `Voice`.

### `AUX`

30555 <tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> tokens (74% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="cs_pdt-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (27520; 90%), <tt><a href="cs_pdt-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (23779; 78%), <tt><a href="cs_pdt-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (23775; 78%), <tt><a href="cs_pdt-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (23775; 78%), <tt><a href="cs_pdt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (21197; 69%), <tt><a href="cs_pdt-feat-Person.html">Person</a></tt><tt>=3</tt> (19835; 65%), <tt><a href="cs_pdt-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (19277; 63%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (30555; 100% of non-empty `Voice`): <em>je, jsou, bude, byl, jsem, jsme, bylo, byla, není, budou</em>
* `EMPTY` (10840): <em>by, být, bychom, bych, byste, buď, buďte, budiž, býti, bys</em>

### `ADJ`

14024 <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> tokens (7% of all `ADJ` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `ADJ` and `Voice` co-occurred: <tt><a href="cs_pdt-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (14024; 100%), <tt><a href="cs_pdt-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (13807; 98%), <tt><a href="cs_pdt-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (9506; 68%), <tt><a href="cs_pdt-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (9325; 66%), <tt><a href="cs_pdt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (7432; 53%).

`ADJ` tokens may have the following values of `Voice`:

* `Act` (4498; 32% of non-empty `Voice`): <em>rozhodující, vedoucí, následující, vynikající, týkající, odpovídající, rostoucí, žijící, kupující, následujících</em>
* `Pass` (9526; 68% of non-empty `Voice`): <em>řečeno, přesvědčen, připravena, připraven, otevřena, rozhodnuto, zvolen, uzavřena, uvedeno, založena</em>
* `EMPTY` (175162): <em>první, další, české, nové, druhé, poslední, státní, dalších, možné, vlastní</em>

`Voice` seems to be **lexical feature** of `ADJ`. 100% lemmas (2662) occur only with one value of `Voice`.

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<tt><a href="cs_pdt-dep-conj.html">conj</a></tt>]--> VERB</tt> (12791; 95%),
<tt>VERB --[<tt><a href="cs_pdt-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (6270; 82%),
<tt>VERB --[<tt><a href="cs_pdt-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (4990; 84%),
<tt>VERB --[<tt><a href="cs_pdt-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (818; 85%),
<tt>ADJ --[<tt><a href="cs_pdt-dep-conj.html">conj</a></tt>]--> ADJ</tt> (468; 59%),
<tt>VERB --[<tt><a href="cs_pdt-dep-csubj-pass.html">csubj:pass</a></tt>]--> VERB</tt> (197; 59%),
<tt>VERB --[<tt><a href="cs_pdt-dep-appos.html">appos</a></tt>]--> VERB</tt> (157; 96%),
<tt>VERB --[<tt><a href="cs_pdt-dep-dep.html">dep</a></tt>]--> VERB</tt> (43; 72%),
<tt>AUX --[<tt><a href="cs_pdt-dep-conj.html">conj</a></tt>]--> VERB</tt> (35; 100%),
<tt>VERB --[<tt><a href="cs_pdt-dep-orphan.html">orphan</a></tt>]--> VERB</tt> (21; 91%).

