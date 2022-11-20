---
layout: base
title:  'Statistics of Tense in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Features: `Tense`

This feature is universal.
It occurs with 3 different values: `Fut`, `Past`, `Pres`.

9640 tokens (11%) have a non-empty value of `Tense`.
627 types (8%) occur at least once with a non-empty value of `Tense`.
283 lemmas (5%) occur at least once with a non-empty value of `Tense`.
The feature is used with 3 part-of-speech tags: <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (8108; 9% instances), <tt><a href="gd_arcosg-pos-AUX.html">AUX</a></tt> (1312; 1% instances), <tt><a href="gd_arcosg-pos-PART.html">PART</a></tt> (220; 0% instances).

### `VERB`

8108 <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> tokens (90% of all `VERB` tokens) have a non-empty value of `Tense`.

`VERB` tokens may have the following values of `Tense`:

* `Fut` (1045; 13% of non-empty `Tense`): <em>bidh, feumaidh, bhios, bi, gheibh, nì, faodaidh, bheir, bhi, thèid</em>
* `Past` (4253; 52% of non-empty `Tense`): <em>bha, robh, chaidh, fhuair, thuirt, ars’, chuir, thàinig, bh', rinn</em>
* `Pres` (2810; 35% of non-empty `Tense`): <em>tha, eil, bheil, th', thà, th’, 'eil, thathar, thathas, 'l</em>
* `EMPTY` (910): <em>bhiodh, biodh, faigheadh, feuch, can, dh’fhaodadh, dhèanadh, thigeadh, dèanadh, bheireadh</em>

<table>
  <tr><th>Paradigm <i>bi</i></th><th><tt>Pres</tt></th><th><tt>Fut</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>tha, eil, bheil, th', thà, th’, 'eil, 'l, h-eil, bha, ‘eil</em></td><td><em>bidh, bhios, bi, bhi, bhitheas</em></td><td><em>bha, robh, bh', bhà, bh’, tha, bitheadh</em></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-Person.html">Person</a></tt><tt>=0</tt></tt></td><td><em>thathar, thathas, bheileas</em></td><td></td><td><em>robhar</em></td></tr>
</table>

### `AUX`

1312 <tt><a href="gd_arcosg-pos-AUX.html">AUX</a></tt> tokens (99% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="gd_arcosg-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (1011; 77%).

`AUX` tokens may have the following values of `Tense`:

* `Fut` (38; 3% of non-empty `Tense`): <em>thèid, tèid</em>
* `Past` (370; 28% of non-empty `Tense`): <em>b', chaidh, bu, b’, deach</em>
* `Pres` (904; 69% of non-empty `Tense`): <em>'s, is, gur, as, chan, nach, an, cha, ‘s, gun</em>
* `EMPTY` (7): <em>rachadh, 's, Is</em>

<table>
  <tr><th>Paradigm <i>is</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>'s, is, ‘s, s, ’s, nach, as</em></td><td><em>b', bu, b’</em></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-Mood.html">Mood</a></tt><tt>=Int</tt>|<tt><a href="gd_arcosg-feat-Polarity.html">Polarity</a></tt><tt>=Aff</tt></tt></td><td><em>an</em></td><td></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-Mood.html">Mood</a></tt><tt>=Int</tt>|<tt><a href="gd_arcosg-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt></tt></td><td><em>nach</em></td><td></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-Polarity.html">Polarity</a></tt><tt>=Aff</tt></tt></td><td><em>gur, gun</em></td><td></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt></tt></td><td><em>chan, cha, nach</em></td><td></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-PronType.html">PronType</a></tt><tt>=Rel</tt></tt></td><td><em>as, is, 's</em></td><td></td></tr>
</table>

### `PART`

220 <tt><a href="gd_arcosg-pos-PART.html">PART</a></tt> tokens (3% of all `PART` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `PART` and `Tense` co-occurred: <tt><a href="gd_arcosg-feat-PartType.html">PartType</a></tt><tt>=EMPTY</tt> (220; 100%), <tt><a href="gd_arcosg-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (220; 100%), <tt><a href="gd_arcosg-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (219; 100%).

`PART` tokens may have the following values of `Tense`:

* `Past` (219; 100% of non-empty `Tense`): <em>do, d’, d'</em>
* `Pres` (1; 0% of non-empty `Tense`): <em>cha</em>
* `EMPTY` (8532): <em>a, a', gu, ag, cha, nach, air, gun, chan, an</em>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="gd_arcosg-dep-conj.html">conj</a></tt>]--> VERB</tt> (872; 72%),
<tt>VERB --[<tt><a href="gd_arcosg-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (273; 63%),
<tt>VERB --[<tt><a href="gd_arcosg-dep-reparandum.html">reparandum</a></tt>]--> VERB</tt> (50; 98%),
<tt>VERB --[<tt><a href="gd_arcosg-dep-acl-relcl.html">acl:relcl</a></tt>]--> VERB</tt> (30; 52%),
<tt>VERB --[<tt><a href="gd_arcosg-dep-discourse.html">discourse</a></tt>]--> VERB</tt> (15; 83%),
<tt>VERB --[<tt><a href="gd_arcosg-dep-obl.html">obl</a></tt>]--> VERB</tt> (4; 57%),
<tt>VERB --[<tt><a href="gd_arcosg-dep-csubj-outer.html">csubj:outer</a></tt>]--> VERB</tt> (2; 100%),
<tt>VERB --[<tt><a href="gd_arcosg-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (2; 67%).

