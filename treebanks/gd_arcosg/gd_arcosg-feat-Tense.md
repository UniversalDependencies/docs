---
layout: base
title:  'Statistics of Tense in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Features: `Tense`

This feature is universal.
It occurs with 3 different values: `Fut`, `Past`, `Pres`.

9626 tokens (11%) have a non-empty value of `Tense`.
627 types (8%) occur at least once with a non-empty value of `Tense`.
275 lemmas (5%) occur at least once with a non-empty value of `Tense`.
The feature is used with 3 part-of-speech tags: <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (8056; 9% instances), <tt><a href="gd_arcosg-pos-AUX.html">AUX</a></tt> (1349; 1% instances), <tt><a href="gd_arcosg-pos-PART.html">PART</a></tt> (221; 0% instances).

### `VERB`

8056 <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> tokens (90% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="gd_arcosg-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (8055; 100%), <tt><a href="gd_arcosg-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (8055; 100%).

`VERB` tokens may have the following values of `Tense`:

* `Fut` (1037; 13% of non-empty `Tense`): <em>bidh, feumaidh, bhios, bi, gheibh, nì, faodaidh, bheir, bhi, thig</em>
* `Past` (4209; 52% of non-empty `Tense`): <em>bha, robh, fhuair, thuirt, ars’, chaidh, chuir, thàinig, bh', rinn</em>
* `Pres` (2810; 35% of non-empty `Tense`): <em>tha, eil, bheil, th', thà, th’, thathar, thathas, 'eil, 'l</em>
* `EMPTY` (906): <em>bhiodh, biodh, faigheadh, feuch, can, dh’fhaodadh, dhèanadh, thigeadh, dèanadh, bheireadh</em>

<table>
  <tr><th>Paradigm <i>bi</i></th><th><tt>Pres</tt></th><th><tt>Fut</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td></td><td><em>Bha</em></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-CleftType.html">CleftType</a></tt><tt>=Verb</tt>|<tt><a href="gd_arcosg-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="gd_arcosg-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td></td><td><em>bha</em></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="gd_arcosg-feat-Person.html">Person</a></tt><tt>=0</tt>|<tt><a href="gd_arcosg-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>thathar, thathas, bheileas</em></td><td></td><td><em>robhas, robhar</em></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="gd_arcosg-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>tha, eil, bheil, th', thà, th’, 'eil, 'l, h-eil, bha, ‘eil</em></td><td><em>bidh, bhios, bi, bhi, bhitheas</em></td><td><em>bha, robh, bh', bhà, bh’, tha, bitheadh</em></td></tr>
</table>

### `AUX`

1349 <tt><a href="gd_arcosg-pos-AUX.html">AUX</a></tt> tokens (99% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="gd_arcosg-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (1148; 85%), <tt><a href="gd_arcosg-feat-Mood.html">Mood</a></tt><tt>=EMPTY</tt> (1087; 81%), <tt><a href="gd_arcosg-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (1048; 78%), <tt><a href="gd_arcosg-feat-ExtPos.html">ExtPos</a></tt><tt>=EMPTY</tt> (815; 60%).

`AUX` tokens may have the following values of `Tense`:

* `Fut` (47; 3% of non-empty `Tense`): <em>thèid, tèid, théid</em>
* `Past` (398; 30% of non-empty `Tense`): <em>b', bu, chaidh, deach, b’</em>
* `Pres` (904; 67% of non-empty `Tense`): <em>'s, is, gur, as, chan, nach, an, cha, ‘s, gun</em>
* `EMPTY` (9): <em>rachadh, 's, Is</em>

<table>
  <tr><th>Paradigm <i>is</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>'s, is, ‘s, s, ’s, nach, as</em></td><td><em>b', bu, b’</em></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-ExtPos.html">ExtPos</a></tt><tt>=AUX</tt></tt></td><td><em>is, 's, ‘s</em></td><td><em>b', b’</em></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-ExtPos.html">ExtPos</a></tt><tt>=AUX</tt>|<tt><a href="gd_arcosg-feat-Mood.html">Mood</a></tt><tt>=Int</tt>|<tt><a href="gd_arcosg-feat-Polarity.html">Polarity</a></tt><tt>=Aff</tt></tt></td><td><em>an</em></td><td></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-ExtPos.html">ExtPos</a></tt><tt>=AUX</tt>|<tt><a href="gd_arcosg-feat-Mood.html">Mood</a></tt><tt>=Int</tt>|<tt><a href="gd_arcosg-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt></tt></td><td><em>nach</em></td><td></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-ExtPos.html">ExtPos</a></tt><tt>=AUX</tt>|<tt><a href="gd_arcosg-feat-Polarity.html">Polarity</a></tt><tt>=Aff</tt></tt></td><td><em>gur, gun</em></td><td></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-ExtPos.html">ExtPos</a></tt><tt>=AUX</tt>|<tt><a href="gd_arcosg-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt></tt></td><td><em>chan, nach</em></td><td></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-Mood.html">Mood</a></tt><tt>=Int</tt>|<tt><a href="gd_arcosg-feat-Polarity.html">Polarity</a></tt><tt>=Aff</tt></tt></td><td><em>an</em></td><td></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-Mood.html">Mood</a></tt><tt>=Int</tt>|<tt><a href="gd_arcosg-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt></tt></td><td><em>nach</em></td><td></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-Polarity.html">Polarity</a></tt><tt>=Aff</tt></tt></td><td><em>gur, gun</em></td><td></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt></tt></td><td><em>chan, cha, nach</em></td><td></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-PronType.html">PronType</a></tt><tt>=Rel</tt></tt></td><td><em>as, is, 's</em></td><td></td></tr>
</table>

### `PART`

221 <tt><a href="gd_arcosg-pos-PART.html">PART</a></tt> tokens (3% of all `PART` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `PART` and `Tense` co-occurred: <tt><a href="gd_arcosg-feat-PartType.html">PartType</a></tt><tt>=EMPTY</tt> (221; 100%), <tt><a href="gd_arcosg-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (221; 100%), <tt><a href="gd_arcosg-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (220; 100%).

`PART` tokens may have the following values of `Tense`:

* `Past` (220; 100% of non-empty `Tense`): <em>do, d’, d', b'</em>
* `Pres` (1; 0% of non-empty `Tense`): <em>cha</em>
* `EMPTY` (8580): <em>a, a', gu, ag, cha, nach, air, gun, chan, an</em>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="gd_arcosg-dep-conj.html">conj</a></tt>]--> VERB</tt> (869; 72%),
<tt>VERB --[<tt><a href="gd_arcosg-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (269; 62%),
<tt>VERB --[<tt><a href="gd_arcosg-dep-reparandum.html">reparandum</a></tt>]--> VERB</tt> (49; 98%),
<tt>VERB --[<tt><a href="gd_arcosg-dep-acl-relcl.html">acl:relcl</a></tt>]--> VERB</tt> (29; 52%),
<tt>VERB --[<tt><a href="gd_arcosg-dep-discourse.html">discourse</a></tt>]--> VERB</tt> (15; 83%),
<tt>AUX --[<tt><a href="gd_arcosg-dep-conj.html">conj</a></tt>]--> VERB</tt> (4; 57%),
<tt>VERB --[<tt><a href="gd_arcosg-dep-csubj-outer.html">csubj:outer</a></tt>]--> VERB</tt> (2; 100%),
<tt>VERB --[<tt><a href="gd_arcosg-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (2; 67%),
<tt>VERB --[<tt><a href="gd_arcosg-dep-advcl-relcl.html">advcl:relcl</a></tt>]--> VERB</tt> (1; 100%).

