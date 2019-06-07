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
The feature is used with 3 part-of-speech tags: <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (1011; 4% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (910; 4% instances), <tt><a href="fr_pud-pos-AUX.html">AUX</a></tt> (872; 4% instances).

### `PRON`

1011 <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> tokens (76% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="fr_pud-feat-Number-psor.html">Number[psor]</a></tt><tt>=EMPTY</tt> (733; 73%), <tt><a href="fr_pud-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (733; 73%), <tt><a href="fr_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (713; 71%), <tt><a href="fr_pud-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (550; 54%).

`PRON` tokens may have the following values of `Person`:

* `1` (112; 11% of non-empty `Person`): <em>je, nous, notre, nos, j’, j', me, mon, m’, My</em>
* `2` (22; 2% of non-empty `Person`): <em>vous, votre, You, toi, 'Ya, se, vos</em>
* `3` (877; 87% of non-empty `Person`): <em>il, y, se, son, sa, elle, ils, ses, leur, s'</em>
* `EMPTY` (323): <em>qui, ce, c', cela, c’, que, qu', ça, ceux, ceci</em>

### `VERB`

910 <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> tokens (40% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="fr_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (910; 100%), <tt><a href="fr_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (833; 92%), <tt><a href="fr_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (652; 72%), <tt><a href="fr_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (625; 69%).

`VERB` tokens may have the following values of `Person`:

* `1` (51; 6% of non-empty `Person`): <em>devons, Disons, allons, comprends, pense, pensons, pouvons, Love, Thought, adorais</em>
* `2` (15; 2% of non-empty `Person`): <em>devez, Buck, Don’t, Knew, Knuck, Laisse, Tiens, Voilà, avez, disputez</em>
* `3` (844; 93% of non-empty `Person`): <em>a, est, peut, avait, était, peuvent, pourrait, sont, ont, pourraient</em>
* `EMPTY` (1367): <em>faire, eu, déclaré, dit, fait, commencé, indiqué, avoir, voir, devenir</em>

### `AUX`

872 <tt><a href="fr_pud-pos-AUX.html">AUX</a></tt> tokens (85% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="fr_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (837; 96%), <tt><a href="fr_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (697; 80%), <tt><a href="fr_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (645; 74%).

`AUX` tokens may have the following values of `Person`:

* `1` (24; 3% of non-empty `Person`): <em>ai, avons, sommes, suis, avais, serais, étais, étions</em>
* `2` (1; 0% of non-empty `Person`): <em>avez</em>
* `3` (847; 97% of non-empty `Person`): <em>a, est, ont, sont, était, avait, fut, avaient, étaient, furent</em>
* `EMPTY` (148): <em>été, être, avoir, ayant, étant</em>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<tt><a href="fr_pud-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (219; 51%),
<tt>VERB --[<tt><a href="fr_pud-dep-expl.html">expl</a></tt>]--> PRON</tt> (73; 72%),
<tt>VERB --[<tt><a href="fr_pud-dep-conj.html">conj</a></tt>]--> VERB</tt> (58; 56%),
<tt>PRON --[<tt><a href="fr_pud-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="fr_pud-dep-xcomp.html">xcomp</a></tt>]--> PRON</tt> (1; 100%).

