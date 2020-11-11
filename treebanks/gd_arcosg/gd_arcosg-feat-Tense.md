---
layout: base
title:  'Statistics of Tense in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Features: `Tense`

This feature is universal.
It occurs with 3 different values: `Fut`, `Past`, `Pres`.

6365 tokens (11%) have a non-empty value of `Tense`.
530 types (9%) occur at least once with a non-empty value of `Tense`.
263 lemmas (5%) occur at least once with a non-empty value of `Tense`.
The feature is used with 3 part-of-speech tags: <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (5449; 9% instances), <tt><a href="gd_arcosg-pos-AUX.html">AUX</a></tt> (764; 1% instances), <tt><a href="gd_arcosg-pos-PART.html">PART</a></tt> (152; 0% instances).

### `VERB`

5449 <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> tokens (90% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="gd_arcosg-feat-Mood.html">Mood</a></tt><tt>=EMPTY</tt> (5449; 100%).

`VERB` tokens may have the following values of `Tense`:

* `Fut` (683; 13% of non-empty `Tense`): <em>bidh, bhios, feumaidh, thèid, bi, gheibh, tèid, faodaidh, nì, bhi</em>
* `Past` (2950; 54% of non-empty `Tense`): <em>bha, robh, chaidh, thuirt, fhuair, ars’, chuir, bh', thàinig, rinn</em>
* `Pres` (1816; 33% of non-empty `Tense`): <em>tha, eil, bheil, th', thà, th’, 'eil, maireann, 'l, thathar</em>
* `EMPTY` (612): <em>bhiodh, biodh, feuch, faigheadh, rachadh, dhèanadh, dh’fhaodadh, thigeadh, dh’fheumadh, canadh</em>

<table>
  <tr><th>Paradigm <i>bi</i></th><th><tt>Pres</tt></th><th><tt>Fut</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>tha, eil, bheil, th', thà, th’, 'eil, bha, h-eil, ‘eil</em></td><td><em>bidh, bhios, bi, bhi</em></td><td><em>bha, robh, bh', bhà, bh’, tha</em></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-Person.html">Person</a></tt><tt>=0</tt></tt></td><td><em>thathar, thathas</em></td><td></td><td><em>robhar</em></td></tr>
</table>

### `AUX`

764 <tt><a href="gd_arcosg-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="gd_arcosg-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (558; 73%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (180; 24% of non-empty `Tense`): <em>b', bu, b’</em>
* `Pres` (584; 76% of non-empty `Tense`): <em>is, 's, gur, as, chan, an, nach, ‘s, cha, gun</em>

<table>
  <tr><th>Paradigm <i>is</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>is, 's, ‘s, ’s, S, nach, as</em></td><td><em>b', bu, b’</em></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-Mood.html">Mood</a></tt><tt>=Int</tt>|<tt><a href="gd_arcosg-feat-Polarity.html">Polarity</a></tt><tt>=Aff</tt></tt></td><td><em>an</em></td><td></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-Mood.html">Mood</a></tt><tt>=Int</tt>|<tt><a href="gd_arcosg-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt></tt></td><td><em>nach</em></td><td></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-Polarity.html">Polarity</a></tt><tt>=Aff</tt></tt></td><td><em>gur, gun</em></td><td></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt></tt></td><td><em>chan, cha, nach</em></td><td></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-PronType.html">PronType</a></tt><tt>=Rel</tt></tt></td><td><em>as, is</em></td><td></td></tr>
</table>

### `PART`

152 <tt><a href="gd_arcosg-pos-PART.html">PART</a></tt> tokens (3% of all `PART` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `PART` and `Tense` co-occurred: <tt><a href="gd_arcosg-feat-PartType.html">PartType</a></tt><tt>=EMPTY</tt> (152; 100%), <tt><a href="gd_arcosg-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (152; 100%), <tt><a href="gd_arcosg-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (151; 99%).

`PART` tokens may have the following values of `Tense`:

* `Past` (151; 99% of non-empty `Tense`): <em>do, d’, d'</em>
* `Pres` (1; 1% of non-empty `Tense`): <em>cha</em>
* `EMPTY` (5717): <em>a, a', gu, ag, cha, nach, air, gun, chan, an</em>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="gd_arcosg-dep-conj.html">conj</a></tt>]--> VERB</tt> (545; 71%),
<tt>VERB --[<tt><a href="gd_arcosg-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (195; 62%),
<tt>VERB --[<tt><a href="gd_arcosg-dep-acl-relcl.html">acl:relcl</a></tt>]--> VERB</tt> (31; 53%),
<tt>VERB --[<tt><a href="gd_arcosg-dep-reparandum.html">reparandum</a></tt>]--> VERB</tt> (29; 100%),
<tt>VERB --[<tt><a href="gd_arcosg-dep-discourse.html">discourse</a></tt>]--> VERB</tt> (13; 81%),
<tt>VERB --[<tt><a href="gd_arcosg-dep-csubj-cleft.html">csubj:cleft</a></tt>]--> VERB</tt> (4; 80%),
<tt>VERB --[<tt><a href="gd_arcosg-dep-fixed.html">fixed</a></tt>]--> VERB</tt> (1; 100%).

