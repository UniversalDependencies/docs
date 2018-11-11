---
layout: base
title:  'Statistics of Tense in UD_French-FTB'
udver: '2'
---

## Treebank Statistics: UD_French-FTB: Features: `Tense`

This feature is universal.
It occurs with 4 different values: `Fut`, `Imp`, `Past`, `Pres`.

49000 tokens (9%) have a non-empty value of `Tense`.
374 types (20%) occur at least once with a non-empty value of `Tense`.
277 lemmas (18%) occur at least once with a non-empty value of `Tense`.
The feature is used with 3 part-of-speech tags: <tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt> (36945; 6% instances), <tt><a href="fr_ftb-pos-AUX.html">AUX</a></tt> (12054; 2% instances), <tt><a href="fr_ftb-pos-X.html">X</a></tt> (1; 0% instances).

### `VERB`

36945 <tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt> tokens (77% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="fr_ftb-feat-Number.html">Number</a></tt><tt>=Sing</tt> (25780; 70%), <tt><a href="fr_ftb-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (22149; 60%), <tt><a href="fr_ftb-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (20087; 54%), <tt><a href="fr_ftb-feat-Person.html">Person</a></tt><tt>=3</tt> (19521; 53%), <tt><a href="fr_ftb-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (18832; 51%).

`VERB` tokens may have the following values of `Tense`:

* `Fut` (1422; 4% of non-empty `Tense`): <em>_, Faudra, Aura</em>
* `Imp` (1939; 5% of non-empty `Tense`): <em>_, Débutait</em>
* `Past` (15163; 41% of non-empty `Tense`): <em>_, Interrogé, Exprimés, Né, Réuni, Réunis, Entré, Mis, Nommé, Passé</em>
* `Pres` (18421; 50% of non-empty `Tense`): <em>_, Reste, Est, Peut, Voilà, faut, Notons, Ajoutons, Donnant, Faisant</em>
* `EMPTY` (10768): <em>_, Lire, Dire, Construire, Grignoter, Gérer, Réduire, ABOLIR, Accepter, Appeler</em>

`Tense` seems to be **lexical feature** of `VERB`. 91% lemmas (249) occur only with one value of `Tense`.

### `AUX`

12054 <tt><a href="fr_ftb-pos-AUX.html">AUX</a></tt> tokens (94% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="fr_ftb-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (10778; 89%), <tt><a href="fr_ftb-feat-Person.html">Person</a></tt><tt>=3</tt> (10569; 88%), <tt><a href="fr_ftb-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (9795; 81%), <tt><a href="fr_ftb-feat-Number.html">Number</a></tt><tt>=Sing</tt> (8661; 72%).

`AUX` tokens may have the following values of `Tense`:

* `Fut` (640; 5% of non-empty `Tense`): <em>_, Seront, Pourront, Sera, Voudra</em>
* `Imp` (1261; 10% of non-empty `Tense`): <em>_, Fût, Pouvait</em>
* `Past` (1169; 10% of non-empty `Tense`): <em>_</em>
* `Pres` (8984; 75% of non-empty `Tense`): <em>_, Peut, Ayant, Avez, Est, Peuvent, Sont, A, Allons, Doit</em>
* `EMPTY` (815): <em>_, Avoir</em>

### `X`

1 <tt><a href="fr_ftb-pos-X.html">X</a></tt> tokens (0% of all `X` tokens) have a non-empty value of `Tense`.

`X` tokens may have the following values of `Tense`:

* `Pres` (1; 100% of non-empty `Tense`): <em>_</em>
* `EMPTY` (2191): <em>_, NEW, New, British, Grand, In, A, Altus, BUENOS, Body</em>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="fr_ftb-dep-conj.html">conj</a></tt>]--> VERB</tt> (1300; 68%),
<tt>VERB --[<tt><a href="fr_ftb-dep-acl-relcl.html">acl:relcl</a></tt>]--> VERB</tt> (14; 58%),
<tt>AUX --[<tt><a href="fr_ftb-dep-conj.html">conj</a></tt>]--> VERB</tt> (6; 86%),
<tt>AUX --[<tt><a href="fr_ftb-dep-advmod.html">advmod</a></tt>]--> VERB</tt> (2; 67%),
<tt>AUX --[<tt><a href="fr_ftb-dep-nsubj.html">nsubj</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="fr_ftb-dep-aux-pass.html">aux:pass</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="fr_ftb-dep-orphan.html">orphan</a></tt>]--> AUX</tt> (1; 100%).

