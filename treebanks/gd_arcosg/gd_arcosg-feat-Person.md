---
layout: base
title:  'Statistics of Person in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Features: `Person`

This feature is universal but the values `0` are language-specific.
It occurs with 4 different values: `0`, `1`, `2`, `3`.

7392 tokens (10%) have a non-empty value of `Person`.
197 types (3%) occur at least once with a non-empty value of `Person`.
117 lemmas (2%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (6396; 9% instances), <tt><a href="gd_arcosg-pos-DET.html">DET</a></tt> (711; 1% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (285; 0% instances).

### `PRON`

6396 <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> tokens (84% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="gd_arcosg-feat-Number.html">Number</a></tt><tt>=Sing</tt> (4853; 76%).

`PRON` tokens may have the following values of `Person`:

* `1` (912; 14% of non-empty `Person`): <em>mi, sinn, mise, sinne, mo, ar, mis', àsan</em>
* `2` (566; 9% of non-empty `Person`): <em>thu, sibh, tu, thusa, sibhse, tusa, do, ur, sib’, thus'</em>
* `3` (4918; 77% of non-empty `Person`): <em>e, iad, i, a, esan, ise, an, iadsan, àsan, h-e</em>
* `EMPTY` (1229): <em>sin, fhèin, seo, dè, fhéin, cò, siud, chèile, dhà, dé</em>

<table>
  <tr><th>Paradigm <i>mi</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-Form.html">Form</a></tt><tt>=Emp</tt></tt></td><td><em>mise</em></td><td></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td></td><td><em>mise</em></td></tr>
  <tr><td><tt></tt></td><td><em>mi</em></td><td></td></tr>
</table>

### `DET`

711 <tt><a href="gd_arcosg-pos-DET.html">DET</a></tt> tokens (14% of all `DET` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `DET` and `Person` co-occurred: <tt><a href="gd_arcosg-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (711; 100%), <tt><a href="gd_arcosg-feat-Poss.html">Poss</a></tt><tt>=Yes</tt> (711; 100%), <tt><a href="gd_arcosg-feat-Number.html">Number</a></tt><tt>=Sing</tt> (530; 75%).

`DET` tokens may have the following values of `Person`:

* `1` (92; 13% of non-empty `Person`): <em>mo, ar, m', m’, ’r</em>
* `2` (59; 8% of non-empty `Person`): <em>do, d', t', ur, bhur, d’</em>
* `3` (560; 79% of non-empty `Person`): <em>a, an, am, ’n, 'm, 'n</em>
* `EMPTY` (4502): <em>an, na, a’, a', am, nan, sin, seo, 'n, a</em>

### `VERB`

285 <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> tokens (4% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="gd_arcosg-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (171; 60%).

`VERB` tokens may have the following values of `Person`:

* `0` (136; 48% of non-empty `Person`): <em>rinneadh, thugadh, thathar, chuireadh, dh'fhaoidte, faodar, fhuaras, rugadh, thathas, bhathar</em>
* `1` (40; 14% of non-empty `Person`): <em>chanainn, rachainn, bhithinn, bithinn, faigheamaid, Bitheamaid, Cuimhnicheamaid, Dhèanainn, beirinn, bhiomaid</em>
* `2` (109; 38% of non-empty `Person`): <em>feuch, can, cuir, abair, bi, gabh, till, Cumaibh, tog, trobhad</em>
* `EMPTY` (7055): <em>tha, bha, robh, eil, bheil, chaidh, bhiodh, chuir, fhuair, thuirt</em>

<table>
  <tr><th>Paradigm <i>bi</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>0</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td></td><td><em>robhar</em></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt></tt></td><td><em>bhithinn</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-Mood.html">Mood</a></tt><tt>=Imp</tt></tt></td><td><em>Bitheamaid</em></td><td><em>bi</em></td><td></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td></td><td><em>bhathas, robhar</em></td></tr>
  <tr><td><tt><tt><a href="gd_arcosg-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>thathar, thathas</em></td></tr>
</table>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>PRON --[<tt><a href="gd_arcosg-dep-conj.html">conj</a></tt>]--> PRON</tt> (6; 86%),
<tt>PRON --[<tt><a href="gd_arcosg-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (1; 100%).

