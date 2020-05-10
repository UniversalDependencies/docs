---
layout: base
title:  'Statistics of Case in UD_Albanian-TSA'
udver: '2'
---

## Treebank Statistics: UD_Albanian-TSA: Features: `Case`

This feature is universal.
It occurs with 5 different values: `Abl`, `Acc`, `Dat`, `Gen`, `Nom`.
Some words have combined values of the feature; 1 combinations have been observed: `Acc|Nom`.

250 tokens (27%) have a non-empty value of `Case`.
229 types (48%) occur at least once with a non-empty value of `Case`.
194 lemmas (47%) occur at least once with a non-empty value of `Case`.
The feature is used with 2 part-of-speech tags: <tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt> (235; 25% instances), <tt><a href="sq_tsa-pos-PROPN.html">PROPN</a></tt> (15; 2% instances).

### `NOUN`

235 <tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt> tokens (98% of all `NOUN` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `NOUN` and `Case` co-occurred: <tt><a href="sq_tsa-feat-NounType.html">NounType</a></tt><tt>=EMPTY</tt> (205; 87%), <tt><a href="sq_tsa-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (161; 69%), <tt><a href="sq_tsa-feat-Number.html">Number</a></tt><tt>=Sing</tt> (159; 68%), <tt><a href="sq_tsa-feat-Gender.html">Gender</a></tt><tt>=Fem</tt> (140; 60%).

`NOUN` tokens may have the following values of `Case`:

* `Abl` (6; 3% of non-empty `Case`): <em>gjinisë, komunikimit, ndryshimesh, person, problemi, shekujve</em>
* `Acc` (96; 41% of non-empty `Case`): <em>drejtimet, mënyrë, shkencat, shtete, tregtinë, administrim, anë, armë, artikujt, bashkim</em>
* `Acc,Nom` (1; 0% of non-empty `Case`): <em>karakteri</em>
* `Dat` (4; 2% of non-empty `Case`): <em>formave, informacionit, përbërësit, përvojave</em>
* `Gen` (51; 22% of non-empty `Case`): <em>kohës, marrëdhënieve, njeriut, qytetit, sjelljes, ushqimit, anëtarëve, djegies, edukimit, ekonomie</em>
* `Nom` (77; 33% of non-empty `Case`): <em>Dashuria, Evolucioni, Ishulli, dramaturgu, Bujqësia, Buka, Familja, Forcat, Format, Frutat</em>
* `EMPTY` (4): <em>botëkuptim, ekziston, etj, lloj</em>

<table>
  <tr><th>Paradigm <i>njeri</i></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th><th><tt>Gen</tt></th></tr>
  <tr><td><tt><tt><a href="sq_tsa-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="sq_tsa-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="sq_tsa-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td><em>njeriut</em></td></tr>
  <tr><td><tt><tt><a href="sq_tsa-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="sq_tsa-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="sq_tsa-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>njerëzit</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="sq_tsa-feat-Definite.html">Definite</a></tt><tt>=Def</tt>|<tt><a href="sq_tsa-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="sq_tsa-feat-NounType.html">NounType</a></tt><tt>=Het</tt>|<tt><a href="sq_tsa-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>njerëzit</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sq_tsa-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="sq_tsa-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="sq_tsa-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>njerëz</em></td><td><em>njerëz</em></td><td></td></tr>
</table>

### `PROPN`

15 <tt><a href="sq_tsa-pos-PROPN.html">PROPN</a></tt> tokens (75% of all `PROPN` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PROPN` and `Case` co-occurred: <tt><a href="sq_tsa-feat-Number.html">Number</a></tt><tt>=Sing</tt> (14; 93%), <tt><a href="sq_tsa-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (13; 87%), <tt><a href="sq_tsa-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (8; 53%).

`PROPN` tokens may have the following values of `Case`:

* `Acc` (5; 33% of non-empty `Case`): <em>Shqipëri, Djuin, Japoninë, Korenë</em>
* `Gen` (5; 33% of non-empty `Case`): <em>Bashkimit, Evropës, Kinës, Manit, Norsëve</em>
* `Nom` (5; 33% of non-empty `Case`): <em>Britania, Djui, Ruso, Zhak, Zhan</em>
* `EMPTY` (5): <em>Homo, Shakespeare, Shpëtim, William, Çuçka</em>

<table>
  <tr><th>Paradigm <i>Dju</i></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th></tr>
  <tr><td><tt></tt></td><td><em>Djui</em></td><td><em>Djuin</em></td></tr>
</table>

`Case` seems to be **lexical feature** of `PROPN`. 92% lemmas (12) occur only with one value of `Case`.

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`:
<tt>NOUN --[<tt><a href="sq_tsa-dep-conj.html">conj</a></tt>]--> NOUN</tt> (20; 87%),
<tt>NOUN --[<tt><a href="sq_tsa-dep-nsubj.html">nsubj</a></tt>]--> NOUN</tt> (7; 88%),
<tt>PROPN --[<tt><a href="sq_tsa-dep-flat.html">flat</a></tt>]--> PROPN</tt> (2; 100%),
<tt>NOUN --[<tt><a href="sq_tsa-dep-acl-relcl.html">acl:relcl</a></tt>]--> NOUN</tt> (1; 100%),
<tt>PROPN --[<tt><a href="sq_tsa-dep-conj.html">conj</a></tt>]--> PROPN</tt> (1; 100%).

