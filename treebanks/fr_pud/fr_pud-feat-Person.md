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
The feature is used with 4 part-of-speech tags: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (905; 4% instances), <tt><a href="fr_pud-pos-AUX.html">AUX</a></tt> (877; 4% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (734; 3% instances), <tt><a href="fr_pud-pos-DET.html">DET</a></tt> (277; 1% instances).

### `VERB`

905 <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> tokens (40% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="fr_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (905; 100%), <tt><a href="fr_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (828; 91%), <tt><a href="fr_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (649; 72%), <tt><a href="fr_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (622; 69%).

`VERB` tokens may have the following values of `Person`:

* `1` (51; 6% of non-empty `Person`): <em>devons, Disons, allons, comprends, pense, pensons, pouvons, Love, Thought, adorais</em>
* `2` (15; 2% of non-empty `Person`): <em>devez, Buck, Don’t, Knew, Knuck, Laisse, Tiens, Voilà, avez, disputez</em>
* `3` (839; 93% of non-empty `Person`): <em>a, est, peut, avait, était, peuvent, pourrait, sont, ont, pourraient</em>
* `EMPTY` (1358): <em>eu, déclaré, faire, dit, fait, commencé, indiqué, avoir, voir, devenir</em>

### `AUX`

877 <tt><a href="fr_pud-pos-AUX.html">AUX</a></tt> tokens (85% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="fr_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (842; 96%), <tt><a href="fr_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (700; 80%), <tt><a href="fr_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (648; 74%).

`AUX` tokens may have the following values of `Person`:

* `1` (24; 3% of non-empty `Person`): <em>ai, avons, sommes, suis, avais, serais, étais, étions</em>
* `2` (1; 0% of non-empty `Person`): <em>avez</em>
* `3` (852; 97% of non-empty `Person`): <em>a, est, ont, sont, était, avait, fut, avaient, étaient, furent</em>
* `EMPTY` (153): <em>été, être, avoir, ayant, faire, étant, fait</em>

### `PRON`

734 <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> tokens (69% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="fr_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (511; 70%), <tt><a href="fr_pud-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (421; 57%).

`PRON` tokens may have the following values of `Person`:

* `1` (91; 12% of non-empty `Person`): <em>je, nous, j’, j', me, m’, moi, My, m'</em>
* `2` (18; 2% of non-empty `Person`): <em>vous, You, toi, 'Ya, se</em>
* `3` (625; 85% of non-empty `Person`): <em>il, y, se, elle, ils, s', on, s’, lui, le</em>
* `EMPTY` (323): <em>qui, ce, c', cela, c’, que, qu', ça, ceux, ceci</em>

### `DET`

277 <tt><a href="fr_pud-pos-DET.html">DET</a></tt> tokens (7% of all `DET` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `DET` and `Person` co-occurred: <tt><a href="fr_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (202; 73%), <tt><a href="fr_pud-feat-Gender.html">Gender</a></tt><tt>=Fem</tt> (146; 53%).

`DET` tokens may have the following values of `Person`:

* `1` (21; 8% of non-empty `Person`): <em>notre, nos, mon, ma, mes, My</em>
* `2` (4; 1% of non-empty `Person`): <em>votre, vos</em>
* `3` (252; 91% of non-empty `Person`): <em>son, sa, ses, leur, leurs, Her, sar</em>
* `EMPTY` (3611): <em>le, la, les, l', un, une, des, l’, cette, de</em>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<tt><a href="fr_pud-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (216; 51%),
<tt>VERB --[<tt><a href="fr_pud-dep-conj.html">conj</a></tt>]--> VERB</tt> (57; 56%),
<tt>VERB --[<tt><a href="fr_pud-dep-expl-subj.html">expl:subj</a></tt>]--> PRON</tt> (43; 69%),
<tt>VERB --[<tt><a href="fr_pud-dep-expl-comp.html">expl:comp</a></tt>]--> PRON</tt> (22; 79%),
<tt>PRON --[<tt><a href="fr_pud-dep-fixed.html">fixed</a></tt>]--> PRON</tt> (2; 100%),
<tt>PRON --[<tt><a href="fr_pud-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="fr_pud-dep-xcomp.html">xcomp</a></tt>]--> PRON</tt> (1; 100%).

