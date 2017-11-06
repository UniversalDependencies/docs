---
layout: base
title:  'Statistics of Person in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

2793 tokens (11%) have a non-empty value of `Person`.
631 types (11%) occur at least once with a non-empty value of `Person`.
1 lemmas (25%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (1557; 6% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (1011; 4% instances), <tt><a href="fr_pud-pos-AUX.html">AUX</a></tt> (225; 1% instances).

### `VERB`

1557 <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> tokens (51% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="fr_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1557; 100%), <tt><a href="fr_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1454; 93%), <tt><a href="fr_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (1162; 75%), <tt><a href="fr_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1116; 72%).

`VERB` tokens may have the following values of `Person`:

* `1` (69; 4% of non-empty `Person`): <em>ai, avons, devons, suis, Disons, allons, comprends, pense, pensons, pouvons</em>
* `2` (16; 1% of non-empty `Person`): <em>avez, devez, Buck, Don’t, Knew, Knuck, Laisse, Tiens, Voilà, disputez</em>
* `3` (1472; 95% of non-empty `Person`): <em>a, ont, est, avait, sont, était, fut, peut, avaient, pourrait</em>
* `EMPTY` (1467): <em>été, avoir, faire, eu, être, déclaré, dit, fait, commencé, indiqué</em>

### `PRON`

1011 <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> tokens (76% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="fr_pud-feat-Number-psor.html">Number[psor]</a></tt><tt>=EMPTY</tt> (733; 73%), <tt><a href="fr_pud-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (733; 73%), <tt><a href="fr_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (713; 71%), <tt><a href="fr_pud-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (550; 54%).

`PRON` tokens may have the following values of `Person`:

* `1` (112; 11% of non-empty `Person`): <em>je, nous, notre, nos, j’, j', me, mon, m’, My</em>
* `2` (22; 2% of non-empty `Person`): <em>vous, votre, You, toi, 'Ya, se, vos</em>
* `3` (877; 87% of non-empty `Person`): <em>il, y, se, son, sa, elle, ils, ses, leur, s'</em>
* `EMPTY` (325): <em>qui, ce, c', cela, que, c’, qu', ça, ceux, ceci</em>

### `AUX`

225 <tt><a href="fr_pud-pos-AUX.html">AUX</a></tt> tokens (82% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="fr_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (216; 96%), <tt><a href="fr_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (181; 80%), <tt><a href="fr_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (160; 71%).

`AUX` tokens may have the following values of `Person`:

* `1` (6; 3% of non-empty `Person`): <em>sommes, serais, suis, étais, étions</em>
* `3` (219; 97% of non-empty `Person`): <em>est, était, sont, étaient, fut, devint, appelle, serait, soit, sera</em>
* `EMPTY` (49): <em>être, été, devenir, devenu, étant, devenue, apparu, appelé, appelée, connu</em>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<tt><a href="fr_pud-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (212; 51%),
<tt>VERB --[<tt><a href="fr_pud-dep-conj.html">conj</a></tt>]--> VERB</tt> (54; 57%),
<tt>VERB --[<tt><a href="fr_pud-dep-expl.html">expl</a></tt>]--> PRON</tt> (44; 70%),
<tt>VERB --[<tt><a href="fr_pud-dep-advmod.html">advmod</a></tt>]--> PRON</tt> (30; 65%),
<tt>AUX --[<tt><a href="fr_pud-dep-obj.html">obj</a></tt>]--> PRON</tt> (8; 73%),
<tt>AUX --[<tt><a href="fr_pud-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (2; 100%),
<tt>AUX --[<tt><a href="fr_pud-dep-conj.html">conj</a></tt>]--> VERB</tt> (2; 67%),
<tt>VERB --[<tt><a href="fr_pud-dep-advcl.html">advcl</a></tt>]--> AUX</tt> (2; 100%),
<tt>AUX --[<tt><a href="fr_pud-dep-advcl.html">advcl</a></tt>]--> AUX</tt> (1; 100%),
<tt>AUX --[<tt><a href="fr_pud-dep-expl.html">expl</a></tt>]--> PRON</tt> (1; 100%).

