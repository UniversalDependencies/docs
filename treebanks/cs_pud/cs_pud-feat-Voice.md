---
layout: base
title:  'Statistics of Voice in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Features: `Voice`

This feature is universal.
It occurs with 2 different values: `Act`, `Pass`.

2403 tokens (13%) have a non-empty value of `Voice`.
1429 types (19%) occur at least once with a non-empty value of `Voice`.
918 lemmas (17%) occur at least once with a non-empty value of `Voice`.
The feature is used with 3 part-of-speech tags: <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> (1426; 8% instances), <tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> (563; 3% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (414; 2% instances).

### `VERB`

1426 <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> tokens (83% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (1337; 94%), <tt><a href="cs_pud-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (1239; 87%), <tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=EMPTY</tt> (881; 62%), <tt><a href="cs_pud-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (881; 62%), <tt><a href="cs_pud-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (878; 62%), <tt><a href="cs_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt> (877; 62%), <tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (857; 60%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (1426; 100% of non-empty `Voice`): <em>řekl, má, může, říká, mohou, mají, mohl, měl, stal, lze</em>
* `EMPTY` (292): <em>mít, vidět, získat, najít, opustit, pokračovat, stát, vést, dělat, muset</em>

`Voice` seems to be **lexical feature** of `VERB`. 100% lemmas (622) occur only with one value of `Voice`.

### `AUX`

563 <tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> tokens (82% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (517; 92%), <tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (393; 70%), <tt><a href="cs_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (303; 54%), <tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (303; 54%), <tt><a href="cs_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (303; 54%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (563; 100% of non-empty `Voice`): <em>je, byl, bylo, byla, jsou, byly, bude, jsem, není, byli</em>
* `EMPTY` (121): <em>by, být, bych, bychom, byste</em>

### `ADJ`

414 <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> tokens (18% of all `ADJ` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `ADJ` and `Voice` co-occurred: <tt><a href="cs_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt> (414; 100%), <tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (405; 98%), <tt><a href="cs_pud-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (268; 65%), <tt><a href="cs_pud-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (261; 63%), <tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (223; 54%).

`ADJ` tokens may have the following values of `Voice`:

* `Act` (63; 15% of non-empty `Voice`): <em>vedoucí, následující, probíhající, sestávající, studujících, dosluhující, dospívající, dospívajícího, dívající, hanobící</em>
* `Pass` (351; 85% of non-empty `Voice`): <em>Spojených, řečeno, propuštěn, Spojené, Spojeným, kvalifikovaných, nabídnuto, otevřenou, otevřená, označen</em>
* `EMPTY` (1856): <em>první, další, nové, jižní, druhé, severní, hlavní, velká, velké, vlastní</em>

`Voice` seems to be **lexical feature** of `ADJ`. 100% lemmas (294) occur only with one value of `Voice`.

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<tt><a href="cs_pud-dep-conj.html">conj</a></tt>]--> VERB</tt> (164; 98%),
<tt>VERB --[<tt><a href="cs_pud-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (103; 84%),
<tt>VERB --[<tt><a href="cs_pud-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (76; 87%),
<tt>ADJ --[<tt><a href="cs_pud-dep-conj.html">conj</a></tt>]--> ADJ</tt> (9; 64%),
<tt>VERB --[<tt><a href="cs_pud-dep-csubj-pass.html">csubj:pass</a></tt>]--> VERB</tt> (6; 100%),
<tt>VERB --[<tt><a href="cs_pud-dep-ccomp.html">ccomp</a></tt>]--> AUX</tt> (5; 100%),
<tt>VERB --[<tt><a href="cs_pud-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (5; 100%),
<tt>AUX --[<tt><a href="cs_pud-dep-conj.html">conj</a></tt>]--> VERB</tt> (3; 100%),
<tt>ADJ --[<tt><a href="cs_pud-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (2; 100%),
<tt>AUX --[<tt><a href="cs_pud-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (2; 100%).

