---
layout: base
title:  'Statistics of Tense in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Features: `Tense`

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

2328 tokens (11%) have a non-empty value of `Tense`.
966 types (15%) occur at least once with a non-empty value of `Tense`.
1 lemmas (17%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (1437; 7% instances), <tt><a href="de_pud-pos-AUX.html">AUX</a></tt> (891; 4% instances).

### `VERB`

1437 <tt><a href="de_pud-pos-VERB.html">VERB</a></tt> tokens (75% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="de_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1024; 71%), <tt><a href="de_pud-feat-Person.html">Person</a></tt><tt>=3</tt> (994; 69%), <tt><a href="de_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (758; 53%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (963; 67% of non-empty `Tense`): <em>sagte, verwendet, war, begann, genutzt, veröffentlicht, errichtet, gegeben, gewählt, hatte</em>
* `Pres` (474; 33% of non-empty `Tense`): <em>ist, hat, gibt, sagt, haben, sind, liegt, steht, hilft, beträgt</em>
* `EMPTY` (476): <em>an, auf, aus, ein, zurück, haben, ab, machen, geben, hin</em>

### `AUX`

891 <tt><a href="de_pud-pos-AUX.html">AUX</a></tt> tokens (94% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="de_pud-feat-Person.html">Person</a></tt><tt>=3</tt> (811; 91%), <tt><a href="de_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (762; 86%), <tt><a href="de_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (606; 68%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (486; 55% of non-empty `Tense`): <em>wurde, war, worden, wurden, hatte, waren, würde, hatten, könnte, sollte</em>
* `Pres` (405; 45% of non-empty `Tense`): <em>ist, wird, sind, hat, kann, werden, haben, können, muss, sei</em>
* `EMPTY` (59): <em>werden, sein, haben, bleiben., können, lassen, Zeit, aufzutreten, bleiben, finden</em>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="de_pud-dep-aux-pass.html">aux:pass</a></tt>]--> AUX</tt> (150; 68%),
<tt>VERB --[<tt><a href="de_pud-dep-conj.html">conj</a></tt>]--> VERB</tt> (134; 79%),
<tt>VERB --[<tt><a href="de_pud-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (82; 58%),
<tt>VERB --[<tt><a href="de_pud-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (22; 59%),
<tt>VERB --[<tt><a href="de_pud-dep-acl-relcl.html">acl:relcl</a></tt>]--> VERB</tt> (10; 67%),
<tt>VERB --[<tt><a href="de_pud-dep-nsubj.html">nsubj</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="de_pud-dep-conj.html">conj</a></tt>]--> AUX</tt> (1; 100%).

