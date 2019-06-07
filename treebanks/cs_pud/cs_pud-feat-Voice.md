---
layout: base
title:  'Statistics of Voice in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Features: `Voice`

This feature is universal.
It occurs with 2 different values: `Act`, `Pass`.

2257 tokens (12%) have a non-empty value of `Voice`.
1293 types (17%) occur at least once with a non-empty value of `Voice`.
830 lemmas (16%) occur at least once with a non-empty value of `Voice`.
The feature is used with 3 part-of-speech tags: <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> (1459; 8% instances), <tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> (530; 3% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (268; 1% instances).

### `VERB`

1459 <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> tokens (83% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (1366; 94%), <tt><a href="cs_pud-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (1271; 87%), <tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=EMPTY</tt> (889; 61%), <tt><a href="cs_pud-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (889; 61%), <tt><a href="cs_pud-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (886; 61%), <tt><a href="cs_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt> (885; 61%), <tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (883; 61%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (1459; 100% of non-empty `Voice`): <em>řekl, má, je, může, říká, mohou, mají, mohl, měl, stal</em>
* `EMPTY` (293): <em>mít, vidět, získat, najít, opustit, pokračovat, stát, vést, dělat, muset</em>

`Voice` seems to be **lexical feature** of `VERB`. 100% lemmas (623) occur only with one value of `Voice`.

### `AUX`

530 <tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> tokens (82% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (488; 92%), <tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (367; 69%), <tt><a href="cs_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (278; 52%), <tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (278; 52%), <tt><a href="cs_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (278; 52%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (530; 100% of non-empty `Voice`): <em>je, byl, bylo, byla, jsou, byly, bude, jsem, byli, není</em>
* `EMPTY` (120): <em>by, být, bych, bychom, byste</em>

### `ADJ`

268 <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> tokens (12% of all `ADJ` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `ADJ` and `Voice` co-occurred: <tt><a href="cs_pud-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (268; 100%), <tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (268; 100%), <tt><a href="cs_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt> (268; 100%), <tt><a href="cs_pud-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (205; 76%), <tt><a href="cs_pud-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (182; 68%), <tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (141; 53%).

`ADJ` tokens may have the following values of `Voice`:

* `Act` (63; 24% of non-empty `Voice`): <em>vedoucí, následující, probíhající, sestávající, studujících, dosluhující, dospívající, dospívajícího, dívající, hanobící</em>
* `Pass` (205; 76% of non-empty `Voice`): <em>řečeno, propuštěn, nabídnuto, označen, poražena, používán, považováno, považovány, prodán, provedeno</em>
* `EMPTY` (2016): <em>první, další, nové, jižní, druhé, severní, hlavní, velká, velké, vlastní</em>

`Voice` seems to be **lexical feature** of `ADJ`. 100% lemmas (206) occur only with one value of `Voice`.

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<tt><a href="cs_pud-dep-conj.html">conj</a></tt>]--> VERB</tt> (167; 98%),
<tt>VERB --[<tt><a href="cs_pud-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (108; 85%),
<tt>VERB --[<tt><a href="cs_pud-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (78; 88%),
<tt>ADJ --[<tt><a href="cs_pud-dep-conj.html">conj</a></tt>]--> ADJ</tt> (8; 67%),
<tt>VERB --[<tt><a href="cs_pud-dep-csubj-pass.html">csubj:pass</a></tt>]--> VERB</tt> (6; 100%),
<tt>VERB --[<tt><a href="cs_pud-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (5; 100%),
<tt>ADJ --[<tt><a href="cs_pud-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (2; 100%),
<tt>AUX --[<tt><a href="cs_pud-dep-conj.html">conj</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="cs_pud-dep-appos.html">appos</a></tt>]--> VERB</tt> (1; 100%).

