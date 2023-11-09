---
layout: base
title:  'Statistics of Person in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: <tt><a href="fr_parisstories-feat-Person.html">Person</a></tt>, <tt><a href="fr_parisstories-feat-Person-psor.html">Person[psor]</a></tt>.

10404 tokens (24%) have a non-empty value of `Person`.
566 types (17%) occur at least once with a non-empty value of `Person`.
307 lemmas (12%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (5934; 14% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (2439; 6% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (2031; 5% instances).

### `PRON`

5934 <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> tokens (92% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt> (5010; 84%), <tt><a href="fr_parisstories-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (3937; 66%).

`PRON` tokens may have the following values of `Person`:

* `1` (1675; 28% of non-empty `Person`): <em>je, j', me, moi, nous, m', toi, -moi, moi-même</em>
* `2` (355; 6% of non-empty `Person`): <em>tu, vous, te, t', toi</em>
* `3` (3904; 66% of non-empty `Person`): <em>on, c', il, ça, y, elle, s', se, lui, ils</em>
* `EMPTY` (501): <em>qui, que, où, qu', quoi, rien, tous, personne, j~, leur</em>

<table>
  <tr><th>Paradigm <i>moi</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-ExtPos.html">ExtPos</a></tt><tt>=VERB</tt></tt></td><td><em>me</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>m'</em></td><td><em>j', moi</em></td></tr>
  <tr><td><tt></tt></td><td><em>je, j', moi, me, m', -moi</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt></tt></td><td><em>me, m'</em></td><td></td></tr>
</table>

`Person` seems to be **lexical feature** of `PRON`. 93% lemmas (25) occur only with one value of `Person`.

### `VERB`

2439 <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> tokens (55% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="fr_parisstories-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (2426; 99%), <tt><a href="fr_parisstories-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (2381; 98%), <tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (2334; 96%), <tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2284; 94%), <tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (1581; 65%).

`VERB` tokens may have the following values of `Person`:

* `1` (666; 27% of non-empty `Person`): <em>sais, ai, avais, pense, souviens, crois, dis, vais, vois, étais</em>
* `2` (235; 10% of non-empty `Person`): <em>vois, as, sais, vas, fais, peux, veux, avais, souviens, avez</em>
* `3` (1538; 63% of non-empty `Person`): <em>avait, a, est, fait, était, dit, va, faisait, faut, allait</em>
* `EMPTY` (1978): <em>voilà, faire, fait, aller, dit, eu, vu, dire, voir, parler</em>

<table>
  <tr><th>Paradigm <i>avoir</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Imp</tt></tt></td><td><em>avais</em></td><td><em>avais</em></td><td><em>avait</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>ai</em></td><td><em>as, avais</em></td><td><em>a</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Imp</tt></tt></td><td></td><td></td><td><em>avaient</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>avons</em></td><td><em>avez</em></td><td><em>ont</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>ait</em></td></tr>
</table>

### `AUX`

2031 <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> tokens (97% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="fr_parisstories-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (2030; 100%), <tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1998; 98%), <tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1917; 94%), <tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (1414; 70%).

`AUX` tokens may have the following values of `Person`:

* `1` (438; 22% of non-empty `Person`): <em>ai, suis, étais, avais, aurais, fais, avait, avons, sommes</em>
* `2` (57; 3% of non-empty `Person`): <em>as, es, étais, étiez, êtes, avais, avez, sois, fais, soyez</em>
* `3` (1536; 76% of non-empty `Person`): <em>est, était, a, avait, sont, étaient, ont, avaient, serait, soit</em>
* `EMPTY` (73): <em>été, être, faire, fait, avoir, étais, ai, eu, refaire</em>

<table>
  <tr><th>Paradigm <i>être</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>serait</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>seraient</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Imp</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td><em>sois</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Fut</tt></tt></td><td></td><td></td><td><em>sera</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Imp</tt></tt></td><td><em>étais</em></td><td><em>étais</em></td><td><em>était</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>suis, étais</em></td><td><em>es</em></td><td><em>est</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Imp</tt></tt></td><td></td><td><em>étiez</em></td><td><em>étaient</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>sommes</em></td><td><em>êtes, êtez</em></td><td><em>sont</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>soit</em></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="fr_parisstories-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td><em>soyez</em></td><td><em>soient</em></td></tr>
</table>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<tt><a href="fr_parisstories-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (1856; 63%),
<tt>VERB --[<tt><a href="fr_parisstories-dep-expl-subj.html">expl:subj</a></tt>]--> PRON</tt> (252; 94%),
<tt>VERB --[<tt><a href="fr_parisstories-dep-expl-comp.html">expl:comp</a></tt>]--> PRON</tt> (248; 84%),
<tt>AUX --[<tt><a href="fr_parisstories-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (143; 96%),
<tt>PRON --[<tt><a href="fr_parisstories-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (93; 89%),
<tt>VERB --[<tt><a href="fr_parisstories-dep-conj.html">conj</a></tt>]--> VERB</tt> (85; 52%),
<tt>VERB --[<tt><a href="fr_parisstories-dep-reparandum.html">reparandum</a></tt>]--> VERB</tt> (85; 64%),
<tt>VERB --[<tt><a href="fr_parisstories-dep-dislocated.html">dislocated</a></tt>]--> PRON</tt> (63; 56%),
<tt>PRON --[<tt><a href="fr_parisstories-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (57; 67%),
<tt>PRON --[<tt><a href="fr_parisstories-dep-acl-relcl.html">acl:relcl</a></tt>]--> VERB</tt> (44; 55%).

